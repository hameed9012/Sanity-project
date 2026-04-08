import { sanityClient } from "@/lib/sanityClient";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const PROPERTY_QUERY = `
  _id,
  "slug": slug.current,
  title,
  titleAr,
  developer,
  location,
  locationAr,
  status,
  landCategory,
  propertyType,
  type,
  regionSlug,
  areaSlug,
  startingPrice,
  startingPriceAr,
  completionDate,
  completionDateAr,
  paymentPlan,
  paymentPlanAr,
  unitTypes,
  unitTypesAr,
  developerAr,
  statusDisplayAr,
  featured,
  assignedBroker{
    name,
    nameAr,
    role,
    roleAr,
    phone,
    whatsapp,
    email,
    languages,
    languagesAr,
    photoCdn,
    photoUpload{
      asset->
    }
  },
  heroImage,
  heroImageCdn,
  heroImageUpload{
    asset->
  },
  crestImage,
  crestImageCdn,
  heroVideo,
  galleryImages[]{
    ...,
    cdnImage,
    imageUpload{
      asset->
    }
  },
  brochureUrl,
  masterplanUrl,
  description,
  descriptionAr,
  amenities[]{ label, labelAr, icon },
  floorPlans[]{
    title,
    titleAr,
    bedrooms,
    size,
    price,
    images[]{
      ...,
      cdnImage,
      imageUpload{
        asset->
      }
    },
  },
  lat,
  lng,
  nearbyPlaces[],
`;

function parsePriceToAED(value) {
  if (value === null || value === undefined) return null;

  const raw = String(value).trim().toLowerCase();
  if (!raw) return null;

  const numericPart = raw.replace(/[^\d.]/g, "");
  let parsed = Number(numericPart);

  if (!Number.isFinite(parsed) || parsed <= 0) return null;

  const compact = raw.replace(/\s+/g, "");
  if (/million/.test(raw) || /\d(?:\.\d+)?m\b/.test(compact)) {
    parsed *= 1_000_000;
  } else if (/thousand/.test(raw) || /\d(?:\.\d+)?k\b/.test(compact)) {
    parsed *= 1_000;
  }

  parsed = Math.round(parsed);
  return parsed >= 10_000 ? parsed : null;
}

function normalizeProperty(item) {
  if (!item) return item;

  const galleryImages = Array.isArray(item.galleryImages)
    ? item.galleryImages.map((entry) => {
        if (typeof entry === "string") return { url: entry };
        return {
          ...entry,
          url:
            entry?.cdnImage?.url ||
            entry?.url ||
            entry?.imageUpload?.asset?.url ||
            "",
        };
      })
    : [];

  // Normalize floor plan images: resolve each image object to a URL string
  const floorPlans = Array.isArray(item.floorPlans)
    ? item.floorPlans.map((plan) => {
        if (!plan) return plan;
        const images = Array.isArray(plan.images)
          ? plan.images
              .map((img) => {
                if (typeof img === "string") return img;
                return (
                  img?.cdnImage?.url ||
                  img?.url ||
                  img?.imageUpload?.asset?.url ||
                  ""
                );
              })
              .filter(Boolean)
          : [];
        return { ...plan, images };
      })
    : item.floorPlans;

  return {
    ...item,
    heroImage:
      item?.heroImageCdn?.url ||
      item?.heroImage ||
      item?.heroImageUpload?.asset?.url ||
      "",
    crestImage:
      item?.crestImageCdn?.url ||
      item?.crestImage ||
      "",
    assignedBroker: item?.assignedBroker
      ? {
          ...item.assignedBroker,
          photo:
            item?.assignedBroker?.photoCdn?.url ||
            item?.assignedBroker?.photoUpload?.asset?.url ||
            "",
        }
      : null,
    galleryImages,
    floorPlans,
    priceAED: parsePriceToAED(item?.startingPrice),
    startingPriceAED: parsePriceToAED(item?.startingPrice),
  };
}

function pickStaticExport(moduleNamespace) {
  if (moduleNamespace?.default && typeof moduleNamespace.default === "object") {
    return moduleNamespace.default;
  }

  return (
    Object.values(moduleNamespace || {}).find(
      (value) =>
        value &&
        typeof value === "object" &&
        (value.en || value.ar || value.project || value.intro)
    ) || null
  );
}

function slugifyValue(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractStaticBrochureUrl(staticData, locale = "en") {
  const localized =
    staticData?.[locale] || staticData?.en || staticData?.ar || staticData;

  const introBrochure =
    Array.isArray(localized?.intro?.brochures) &&
    localized.intro.brochures.find((item) => item?.url || item?.href);

  return (
    introBrochure?.url ||
    introBrochure?.href ||
    localized?.floorPlans?.brochureHref ||
    localized?.intro?.brochureHref ||
    localized?.brochureUrl ||
    staticData?.brochureUrl ||
    ""
  );
}

function staticDataMatchesProject(staticData, projectSlug, filePath = "") {
  const targetSlug = slugifyValue(projectSlug);
  if (!targetSlug) return false;

  const localized = staticData?.en || staticData?.ar || staticData;
  const canonicalSlug = String(localized?.seo?.canonical || "")
    .split("/")
    .filter(Boolean)
    .pop();

  const candidates = new Set(
    [
      canonicalSlug,
      localized?.project?.name,
      localized?.title,
      path.basename(filePath, ".js"),
      path.basename(path.dirname(filePath)),
    ]
      .map((value) => slugifyValue(value))
      .filter(Boolean)
  );

  return candidates.has(targetSlug);
}

async function importStaticProjectFile(filePath) {
  const moduleNamespace = await import(pathToFileURL(filePath).href);
  return pickStaticExport(moduleNamespace);
}

async function loadStaticBrochureUrl({
  category,
  developer,
  project,
  locale = "en",
}) {
  if (!category || !developer || !project) return "";

  const developerRoot = path.join(
    process.cwd(),
    "src",
    "data",
    "properties",
    category,
    developer
  );

  try {
    const exactFolder = path.join(developerRoot, project);
    const exactFiles = await fs
      .readdir(exactFolder)
      .then((files) => files.filter((file) => file.endsWith(".js")))
      .catch(() => []);

    for (const file of exactFiles) {
      const filePath = path.join(exactFolder, file);
      const staticData = await importStaticProjectFile(filePath).catch(() => null);
      if (!staticData) continue;
      const brochureUrl = extractStaticBrochureUrl(staticData, locale);
      if (brochureUrl) return brochureUrl;
    }

    const entries = await fs.readdir(developerRoot, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const entryFolder = path.join(developerRoot, entry.name);
      const files = await fs
        .readdir(entryFolder)
        .then((items) => items.filter((file) => file.endsWith(".js")))
        .catch(() => []);

      for (const file of files) {
        const filePath = path.join(entryFolder, file);
        const staticData = await importStaticProjectFile(filePath).catch(() => null);
        if (!staticData || !staticDataMatchesProject(staticData, project, filePath)) {
          continue;
        }

        const brochureUrl = extractStaticBrochureUrl(staticData, locale);
        if (brochureUrl) return brochureUrl;
      }
    }

    return "";
  } catch {
    return "";
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const category = searchParams.get("category");
  const developer = searchParams.get("developer");
  const project = searchParams.get("project") || slug;
  const locale = searchParams.get("locale") || "en";

  try {
    const query = slug
      ? `*[_type == "property" && slug.current == $slug][0]{${PROPERTY_QUERY}}`
      : `*[_type == "property"] | order(_createdAt desc){${PROPERTY_QUERY}}`;

    const params = slug ? { slug } : {};
    const rawData = await sanityClient.fetch(query, params);
    let data = Array.isArray(rawData)
      ? rawData.map((item) => normalizeProperty(item))
      : normalizeProperty(rawData);

    if (
      slug &&
      data &&
      !Array.isArray(data) &&
      !data?.brochureUrl &&
      category &&
      developer &&
      project
    ) {
      const staticBrochureUrl = await loadStaticBrochureUrl({
        category,
        developer,
        project,
        locale,
      });

      if (staticBrochureUrl) {
        data = {
          ...data,
          brochureUrl: staticBrochureUrl,
        };
      }
    }

    return Response.json(data || (slug ? null : []));
  } catch (err) {
    console.error("sanity-projects API error:", err);
    return Response.json(slug ? null : [], { status: 500 });
  }
}
