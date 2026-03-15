// src/lib/projects/filterProjects.js
// ✅ FULL WORKING: Arabic-safe search + bilingual bridging using en.json/ar.json

import enJSON from "@/i18n/en.json";
import arJSON from "@/i18n/ar.json";

/* =============================================================================
   TRANSLATIONS SOURCE
============================================================================= */

const translationData = {
  en: enJSON || {},
  ar: arJSON || {},
};

/* =============================================================================
   ARABIC + GENERAL NORMALIZATION
============================================================================= */

const ARABIC_DIACRITICS = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g;
const ARABIC_INDIC_DIGITS = /[٠-٩]/g;

const toWesternDigits = (s) =>
  String(s || "").replace(ARABIC_INDIC_DIGITS, (d) =>
    String("٠١٢٣٤٥٦٧٨٩".indexOf(d))
  );

function normalizeArabic(s) {
  if (!s) return "";
  let t = String(s);

  // remove diacritics
  t = t.replace(ARABIC_DIACRITICS, "");

  // normalize letter variants
  t = t
    .replace(/أ|إ|آ/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى|ئ/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ـ/g, ""); // tatweel

  return t;
}

// ✅ universal normalize (EN + AR)
function normalizeText(s) {
  if (!s) return "";
  const western = toWesternDigits(s);
  const arNorm = normalizeArabic(western);

  return arNorm
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

// compact for "no spaces" matching (great for Arabic typing)
function makeCompact(s) {
  return normalizeText(s).replace(/[^a-z0-9\u0600-\u06FF]/g, "");
}

/* =============================================================================
   TRANSLATION INDEX (for Arabic ⇄ English bridging)
   We build lists for partial matches:
   - developers: allow "تايغر" to match "تايغر العقارية"
   - projectNames: allow "أوركيد" to match the project key
============================================================================= */

function buildTranslationIndex() {
  const index = {
    developers: [],
    projectNames: [],
    whereToLive: [],
  };

  const enDevelopers = translationData.en?.developers || {};
  const arDevelopers = translationData.ar?.developers || {};
  for (const key of new Set([
    ...Object.keys(enDevelopers),
    ...Object.keys(arDevelopers),
  ])) {
    const enName = enDevelopers[key] || "";
    const arName = arDevelopers[key] || "";
    index.developers.push({
      key,
      enName,
      arName,
      enNorm: normalizeText(enName),
      arNorm: normalizeText(arName),
    });
  }

  const enProjects = translationData.en?.projectNames || {};
  const arProjects = translationData.ar?.projectNames || {};
  for (const key of new Set([
    ...Object.keys(enProjects),
    ...Object.keys(arProjects),
  ])) {
    const enName = enProjects[key] || "";
    const arName = arProjects[key] || "";
    index.projectNames.push({
      key,
      enName,
      arName,
      enNorm: normalizeText(enName),
      arNorm: normalizeText(arName),
    });
  }

  const enAreas = translationData.en?.whereToLive || {};
  const arAreas = translationData.ar?.whereToLive || {};
  for (const key of new Set([
    ...Object.keys(enAreas),
    ...Object.keys(arAreas),
  ])) {
    const enName = enAreas[key]?.name || "";
    const arName = arAreas[key]?.name || "";
    index.whereToLive.push({
      key,
      enName,
      arName,
      enNorm: normalizeText(enName),
      arNorm: normalizeText(arName),
    });
  }

  return index;
}

const TRANSLATION_INDEX = buildTranslationIndex();

/* =============================================================================
   QUERY EXPANSION (the magic)
   If user types Arabic like "أوركيد" or "تايغر" we expand it to English too.
============================================================================= */

function expandQueryToVariants(searchRaw) {
  const qNorm = normalizeText(searchRaw);
  const qCompact = makeCompact(searchRaw);

  const tokens = qNorm.split(" ").filter(Boolean);

  const variants = new Set();
  if (qNorm) variants.add(qNorm);
  if (qCompact) variants.add(qCompact);

  // helper: if token partially matches a translation entry (AR or EN),
  // add both AR+EN names and key so we can match slugs too.
  function absorbMatches(list) {
    for (const token of tokens) {
      if (!token || token.length < 2) continue;

      for (const item of list) {
        // partial match: token inside the translated phrase
        const hit =
          (item.arNorm && item.arNorm.includes(token)) ||
          (item.enNorm && item.enNorm.includes(token));

        if (!hit) continue;

        if (item.arNorm) variants.add(item.arNorm);
        if (item.enNorm) variants.add(item.enNorm);

        // add compact too (helps Arabic no-space)
        if (item.arName) variants.add(makeCompact(item.arName));
        if (item.enName) variants.add(makeCompact(item.enName));

        // add key (so "tiger" can match developerSlug, etc.)
        if (item.key) variants.add(normalizeText(item.key));
        if (item.key) variants.add(makeCompact(item.key));
      }
    }
  }

  absorbMatches(TRANSLATION_INDEX.developers);
  absorbMatches(TRANSLATION_INDEX.projectNames);
  absorbMatches(TRANSLATION_INDEX.whereToLive);

  return { qNorm, qCompact, tokens, variants: Array.from(variants) };
}

/* =============================================================================
   ACTIVE FILTER DETECTOR
============================================================================= */

const hasAnyFilter = (filters) => {
  if (!filters) return false;
  return Boolean(
    (filters.search && String(filters.search).trim()) ||
      (filters.devStatus && filters.devStatus.length) ||
      (filters.unitTypes && filters.unitTypes.length) ||
      (filters.bedrooms && filters.bedrooms.length) ||
      filters.minPrice ||
      filters.maxPrice ||
      filters.minSize ||
      filters.maxSize
  );
};

/* =============================================================================
   FILTER HELPERS (Bedrooms/Price/Size unchanged logic)
============================================================================= */

export function matchBedrooms(project, selectedBedrooms) {
  if (!selectedBedrooms?.length) return true;

  const min = Number.isFinite(project?.minBedrooms)
    ? project.minBedrooms
    : null;
  const max = Number.isFinite(project?.maxBedrooms)
    ? project.maxBedrooms
    : null;

  if (min === null || max === null) return false;

  return selectedBedrooms.some((b) => {
    const n = Number(b);

    if (n === 0) return min === 0 || max === 0; // studio
    if (n === 5) return max >= 5; // 5+

    return n >= min && n <= max;
  });
}

export function matchPrice(project, minPrice, maxPrice) {
  const hasMin = Number.isFinite(minPrice) && minPrice > 0;
  const hasMax = Number.isFinite(maxPrice) && maxPrice > 0;
  if (!hasMin && !hasMax) return true;

  const price = Number.isFinite(project?.priceAED)
    ? project.priceAED
    : Number.isFinite(project?.startingPriceAED)
    ? project.startingPriceAED
    : null;

  if (price === null) return false;

  if (hasMin && price < minPrice) return false;
  if (hasMax && price > maxPrice) return false;
  return true;
}

export function matchSize(project, minSize, maxSize) {
  const hasMin = Number.isFinite(minSize) && minSize > 0;
  const hasMax = Number.isFinite(maxSize) && maxSize > 0;
  if (!hasMin && !hasMax) return true;

  const a = Number.isFinite(project?.sizeSqftMin) ? project.sizeSqftMin : null;
  const b = Number.isFinite(project?.sizeSqftMax) ? project.sizeSqftMax : null;

  if (a === null && b === null) return false;

  const low = a ?? b;
  const high = b ?? a;

  if (hasMin && high < minSize) return false;
  if (hasMax && low > maxSize) return false;
  return true;
}

/* =============================================================================
   SEARCH MATCHING (✅ Arabic typing works + bilingual bridging)
============================================================================= */

function buildProjectHaystack(project) {
  // base fields from your regionProjectsIndex
  const base = [
    project?.slug,
    project?.name,
    project?.nameEn,
    project?.nameAr,

    project?.developer,
    project?.developerEn,
    project?.developerAr,
    project?.developerNameEn,
    project?.developerNameAr,
    project?.developerSlug,

    project?.category,
    project?.unitType,
    project?.type,
    project?.status,
    project?.devStatus,

    project?.location,
    project?.locationEn,
    project?.locationAr,
    project?.regionSlug,
    project?.href,
  ].filter(Boolean);

  // ✅ translation bridging by slug keys (VERY IMPORTANT)
  // - developerSlug should match keys in en.json/ar.json developers
  const devKey = project?.developerSlug ? String(project.developerSlug) : "";
  if (devKey) {
    const enDev = translationData.en?.developers?.[devKey];
    const arDev = translationData.ar?.developers?.[devKey];
    if (enDev) base.push(enDev);
    if (arDev) base.push(arDev);
  }

  // - project slug might match key in projectNames (if you used slug keys)
  const pSlug = project?.slug ? String(project.slug) : "";
  if (pSlug) {
    const enProj = translationData.en?.projectNames?.[pSlug];
    const arProj = translationData.ar?.projectNames?.[pSlug];
    if (enProj) base.push(enProj);
    if (arProj) base.push(arProj);
  }

  // - regionSlug can match whereToLive keys
  const regionKey = project?.regionSlug ? String(project.regionSlug) : "";
  if (regionKey) {
    const enRegion = translationData.en?.whereToLive?.[regionKey]?.name;
    const arRegion = translationData.ar?.whereToLive?.[regionKey]?.name;
    if (enRegion) base.push(enRegion);
    if (arRegion) base.push(arRegion);
  }

  const joined = base.join(" | ");
  return {
    hayNorm: normalizeText(joined),
    hayCompact: makeCompact(joined),
  };
}

function normalizeStatusValue(value) {
  const raw = String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
  if (!raw) return "";
  if (
    raw.includes("off-plan") ||
    raw.includes("off plan") ||
    raw.includes("offplan")
  ) {
    return "off-plan";
  }
  if (
    raw.includes("ready to move") ||
    raw === "ready" ||
    raw.includes("secondary") ||
    raw.includes("resale")
  ) {
    return "ready-to-move";
  }
  if (raw.includes("ready & off-plan") || raw.includes("ready and off-plan")) {
    return "ready-and-off-plan";
  }
  if (raw.includes("under construction")) return "under-construction";
  if (raw.includes("pre-sale") || raw.includes("presale")) return "presale";
  if (raw.includes("on sale")) return "on-sale";
  if (raw.includes("completed")) return "completed";
  if (raw.includes("announced")) return "announced";
  if (raw.includes("available")) return "available";
  if (raw.includes("sold")) return "sold-out";
  return raw.replace(/[^a-z0-9]+/g, "-");
}

function normalizeUnitTypeValue(value) {
  const raw = String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
  if (!raw) return "";
  if (
    raw.includes("commercial") ||
    raw.includes("retail") ||
    raw.includes("office")
  ) {
    return "commercial/retail";
  }
  if (
    raw.includes("villa") ||
    raw.includes("townhouse") ||
    raw.includes("mansion")
  ) {
    return "villas";
  }
  if (raw.includes("penthouse")) return "penthouses";
  return "apartments";
}

export function matchSearch(project, search) {
  const raw = String(search || "");
  const qNorm = normalizeText(raw);
  if (!qNorm) return true;

  const { tokens, variants } = expandQueryToVariants(raw);
  const { hayNorm, hayCompact } = buildProjectHaystack(project);

  // 1) normal token match (Arabic normalization included)
  if (tokens.every((t) => hayNorm.includes(t))) return true;

  // 2) compact match (amazing for Arabic typing without exact spacing)
  const qCompact = makeCompact(raw);
  if (qCompact && hayCompact.includes(qCompact)) return true;

  // 3) bilingual expansion match: any variant hits
  for (const v of variants) {
    if (!v) continue;

    // if variant looks like compact string (no spaces), check compact
    if (v === makeCompact(v)) {
      if (hayCompact.includes(v)) return true;
    }

    // normal includes in normalized hay
    if (hayNorm.includes(v)) return true;
  }

  return false;
}

/* =============================================================================
   MAIN FILTER
============================================================================= */

export function filterProjects(projects, filters) {
  const list = Array.isArray(projects) ? projects : [];
  const f = filters || {};

  const search = f.search || "";
    const devStatus = Array.isArray(f.devStatus)
      ? f.devStatus.map(normalizeStatusValue).filter(Boolean)
      : [];
  const unitTypes = Array.isArray(f.unitTypes)
    ? f.unitTypes.map(normalizeUnitTypeValue).filter(Boolean)
    : [];
  const bedrooms = Array.isArray(f.bedrooms) ? f.bedrooms : [];

  const minPrice = Number(toWesternDigits(f.minPrice)) || 0;
  const maxPrice = Number(toWesternDigits(f.maxPrice)) || 0;
  const minSize = Number(toWesternDigits(f.minSize)) || 0;
  const maxSize = Number(toWesternDigits(f.maxSize)) || 0;

  const filtered = list.filter((p) => {
    if (!matchSearch(p, search)) return false;

    if (devStatus.length) {
      const rawStatus = normalizeStatusValue(p?.devStatus || p?.status || "");
      if (!devStatus.includes(rawStatus)) return false;
    }

    if (unitTypes.length) {
      const rawType = normalizeUnitTypeValue(p?.unitType || p?.type || p?.propertyType || "");
      if (!unitTypes.includes(rawType)) return false;
    }

    if (!matchBedrooms(p, bedrooms)) return false;
    if (!matchPrice(p, minPrice, maxPrice)) return false;
    if (!matchSize(p, minSize, maxSize)) return false;

    return true;
  });

  // stable sort: price known first, then cheaper first, then completion year
  const sorted = [...filtered].sort((a, b) => {
    const pa = Number.isFinite(a?.priceAED)
      ? a.priceAED
      : Number.isFinite(a?.startingPriceAED)
      ? a.startingPriceAED
      : Infinity;

    const pb = Number.isFinite(b?.priceAED)
      ? b.priceAED
      : Number.isFinite(b?.startingPriceAED)
      ? b.startingPriceAED
      : Infinity;

    if (pa !== pb) return pa - pb;

    const ya = Number.isFinite(a?.completionYear) ? a.completionYear : Infinity;
    const yb = Number.isFinite(b?.completionYear) ? b.completionYear : Infinity;
    return ya - yb;
  });

  return {
    filtered: sorted,
    hasActiveFilters: hasAnyFilter(f),
  };
}
