import { sanityClient } from "@/lib/sanityClient";

const CACHE_TTL_MS = 5 * 60 * 1000;
const PROPERTY_ROUTING_QUERY = `
  *[_type == "property"]{
    "slug": slug.current,
    title,
    titleAr,
    name,
    nameAr,
    developer,
    developerAr,
    assignedBroker{
      name,
      nameAr,
      role,
      roleAr,
      phone,
      whatsapp,
      languages,
      languagesAr
    }
  }
`;

let cache = {
  expiresAt: 0,
  items: [],
};

function clean(value) {
  return String(value || "").trim();
}

function normalizeText(value) {
  return clean(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugToTitle(slug) {
  return clean(slug).replace(/[-_]+/g, " ").trim();
}

function normalizeBroker(rawBroker = {}) {
  return {
    name: clean(rawBroker?.name || rawBroker?.nameAr),
    phone: clean(rawBroker?.phone),
    whatsapp: clean(rawBroker?.whatsapp),
    role: clean(rawBroker?.role || rawBroker?.roleAr),
    languages: Array.isArray(rawBroker?.languages)
      ? rawBroker.languages.map((entry) => clean(entry)).filter(Boolean)
      : Array.isArray(rawBroker?.languagesAr)
      ? rawBroker.languagesAr.map((entry) => clean(entry)).filter(Boolean)
      : [],
  };
}

function buildPropertyAliases(item = {}) {
  return [
    item?.slug,
    slugToTitle(item?.slug),
    item?.title,
    item?.titleAr,
    item?.name,
    item?.nameAr,
  ]
    .map((entry) => clean(entry))
    .filter(Boolean);
}

function hasBroker(item = {}) {
  return Boolean(
    clean(item?.assignedBroker?.name) ||
      clean(item?.assignedBroker?.whatsapp) ||
      clean(item?.assignedBroker?.phone)
  );
}

async function getPropertyRoutingIndex() {
  if (cache.expiresAt > Date.now() && Array.isArray(cache.items)) {
    return cache.items;
  }

  const raw = await sanityClient.fetch(PROPERTY_ROUTING_QUERY);
  const items = Array.isArray(raw)
    ? raw
        .filter((item) => clean(item?.slug))
        .map((item) => ({
          ...item,
          aliases: buildPropertyAliases(item),
        }))
    : [];

  cache = {
    expiresAt: Date.now() + CACHE_TTL_MS,
    items,
  };

  return items;
}

function extractTaggedProject(text) {
  const source = clean(text);
  if (!source) return "";

  const match = source.match(/^(?:property|project)\s*:\s*(.+)$/im);
  return clean(match?.[1]);
}

function scorePropertyMatch(haystack, needle, alias) {
  if (!haystack || !needle) return 0;
  if (haystack === needle) return 1000 + needle.length;
  if (haystack.includes(needle)) return 700 + needle.length;

  const haystackWords = new Set(haystack.split(" ").filter(Boolean));
  const needleWords = needle.split(" ").filter(Boolean);
  if (!needleWords.length) return 0;

  const matchedWordCount = needleWords.filter((word) =>
    haystackWords.has(word)
  ).length;
  if (matchedWordCount === needleWords.length) {
    return 500 + needleWords.join(" ").length;
  }

  if (alias && normalizeText(alias) === needle) {
    return 400 + needle.length;
  }

  return 0;
}

function findPropertyMatch(items, candidates = []) {
  const normalizedCandidates = candidates
    .map((candidate) => clean(candidate))
    .filter(Boolean);

  if (!normalizedCandidates.length) return null;

  let bestMatch = null;

  items.forEach((item) => {
    const aliases = Array.isArray(item.aliases) ? item.aliases : [];

    normalizedCandidates.forEach((candidate) => {
      const haystack = normalizeText(candidate);
      aliases.forEach((alias) => {
        const normalizedAlias = normalizeText(alias);
        const score = scorePropertyMatch(haystack, normalizedAlias, alias);
        if (!score) return;

        if (!bestMatch || score > bestMatch.score) {
          bestMatch = {
            score,
            item,
            alias,
          };
        }
      });
    });
  });

  return bestMatch?.item || null;
}

export async function resolveLeadBrokerContext(payload = {}) {
  const explicitBroker = normalizeBroker(payload?.broker);
  const explicitProject = clean(payload?.project);
  const taggedProject =
    extractTaggedProject(payload?.message) ||
    extractTaggedProject(payload?.rawIncomingText);

  if (
    explicitProject &&
    (explicitBroker?.name || explicitBroker?.phone || explicitBroker?.whatsapp)
  ) {
    return {
      project: explicitProject,
      projectSlug: clean(payload?.projectSlug),
      broker: explicitBroker,
      matchedBy: "payload",
    };
  }

  const routingIndex = await getPropertyRoutingIndex();
  const match = findPropertyMatch(routingIndex, [
    explicitProject,
    taggedProject,
    payload?.message,
    payload?.rawIncomingText,
  ]);

  if (!match) {
    return {
      project: explicitProject || taggedProject,
      projectSlug: clean(payload?.projectSlug),
      broker: explicitBroker,
      matchedBy: explicitProject || taggedProject ? "text_only" : "",
    };
  }

  return {
    project: clean(match?.title || match?.name || explicitProject || taggedProject),
    projectSlug: clean(match?.slug),
    broker: normalizeBroker(match?.assignedBroker),
    matchedBy: explicitProject
      ? "project"
      : taggedProject
      ? "tagged_message"
      : "message_search",
  };
}
