import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "20d53wo5";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const API_TOKEN = process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN;

if (!API_TOKEN) {
  console.error('Missing SANITY_API_TOKEN (or SANITY_TOKEN).');
  console.error('PowerShell example: $env:SANITY_API_TOKEN="sk..."');
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2025-01-01",
  token: API_TOKEN,
  useCdn: false,
});

function readJson(filename) {
  return JSON.parse(readFileSync(join(projectRoot, filename), "utf8"));
}

function key(seed = "key") {
  return `${seed}-${Math.random().toString(36).slice(2, 10)}`;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function firstNonEmpty(...values) {
  return values.find((value) => String(value || "").trim()) || "";
}

function asAbsoluteUrl(value) {
  const url = String(value || "").trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

function arrayOfParagraphs(value) {
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  if (!value) return [];
  return [String(value)];
}

function parsePostHandover(raw) {
  return /post[- ]?handover/i.test(String(raw || ""));
}

function mapListingStatus(raw) {
  const status = String(raw || "").toLowerCase();
  if (status.includes("secondary") || status.includes("ready")) return "secondary";
  if (status.includes("land")) return "land";
  if (status.includes("rental") || status.includes("rent")) return "rental";
  return "offplan";
}

function mapPropertyType(rawCategory, rawUnitTypes) {
  const value = `${rawCategory || ""} ${rawUnitTypes || ""}`.toLowerCase();
  if (value.includes("villa")) return "villas";
  if (value.includes("penthouse")) return "penthouses";
  if (value.includes("commercial") || value.includes("retail") || value.includes("office")) {
    return "commercial-retail";
  }
  return "apartments";
}

function mapAmenityIcon(rawIcon, label) {
  const text = `${rawIcon || ""} ${label || ""}`.toLowerCase();
  if (text.includes("pool") || text.includes("swim")) return "pool";
  if (text.includes("gym") || text.includes("fitness") || text.includes("barbell")) return "gym";
  if (text.includes("park") || text.includes("garden")) return "park";
  if (text.includes("spa") || text.includes("sauna")) return "spa";
  if (text.includes("parking") || text.includes("car") || text.includes("valet")) return "parking";
  if (text.includes("beach") || text.includes("lagoon") || text.includes("water")) return "beach";
  if (text.includes("school")) return "school";
  if (text.includes("mosque") || text.includes("prayer")) return "mosque";
  if (text.includes("restaurant") || text.includes("cafe") || text.includes("dining")) return "dining";
  if (text.includes("kids") || text.includes("play")) return "kids";
  if (text.includes("security")) return "security";
  return "building";
}

function mapNearbyPlaces(nearbyPlaces = []) {
  if (!Array.isArray(nearbyPlaces)) return [];
  return nearbyPlaces
    .map((item) => {
      const name = firstNonEmpty(item?.name, item?.text);
      if (!name) return null;
      return {
        _key: key("nearby"),
        name,
        distance: item?.distance || "",
        icon: item?.icon || "location",
      };
    })
    .filter(Boolean);
}

function mapGalleryImages(slides = []) {
  return (slides || [])
    .map((slide) => (typeof slide === "string" ? slide : slide?.url))
    .map(asAbsoluteUrl)
    .filter(Boolean)
    .map((url) => ({
      _key: key("gallery"),
      url,
    }));
}

function mapFloorPlans(plans = []) {
  if (!Array.isArray(plans)) return [];
  return plans.map((plan) => ({
    _key: key("plan"),
    title: plan?.title || "",
    bedrooms: Number.isFinite(Number(plan?.bedrooms)) ? Number(plan.bedrooms) : undefined,
    size: firstNonEmpty(plan?.size, plan?.specs?.["Total Area"]),
    price: firstNonEmpty(plan?.price, plan?.specs?.["Starting Price"]),
    images: (plan?.images || [])
      .map((image) => (typeof image === "string" ? image : image?.url))
      .map(asAbsoluteUrl)
      .filter(Boolean)
      .map((url) => ({
        _key: key("plan-image"),
        url,
      })),
  }));
}

function mapAmenities(amenities = []) {
  if (!Array.isArray(amenities)) return [];
  return amenities
    .map((amenity) => {
      const label =
        typeof amenity === "string"
          ? amenity
          : firstNonEmpty(amenity?.label, amenity?.name, amenity?.title);
      if (!label) return null;
      return {
        _key: key("amenity"),
        label,
        icon: mapAmenityIcon(amenity?.icon, label),
      };
    })
    .filter(Boolean);
}

function buildDeveloperLookup(developers) {
  const map = new Map();
  for (const developer of developers) {
    map.set(developer.slug, developer);
    map.set(slugify(developer.name), developer);
  }
  return map;
}

function mapDeveloperDocument(developer) {
  return {
    _id: `developer-${developer.slug}`,
    _type: "developer",
    name: developer.name,
    slug: { _type: "slug", current: developer.slug },
    tagline: developer.tagline || "",
    logoUrl: asAbsoluteUrl(developer.logo),
    about: [],
    aboutAr: [],
    highlights: [],
  };
}

function mapAreaDocument(area) {
  return {
    _id: `area-${area.slug}`,
    _type: "area",
    name: area.name_en,
    nameAr: area.name_ar || "",
    slug: { _type: "slug", current: area.slug },
    heroImage: asAbsoluteUrl(area.heroImage),
    tagline: area.tagline_en || "",
    taglineAr: area.tagline_ar || "",
    description: area.description_en || "",
    descriptionAr: area.description_ar || "",
    location: area.location_en || "",
    avgBuyPrice: area.avgBuy_en || "",
    avgRentPrice: area.avgRent_en || "",
    roi: area.roi_en || "",
    regionSlug: area.regionSlug || area.slug,
    highlights: Array.isArray(area.highlights_en) ? area.highlights_en.filter(Boolean) : [],
    highlightsAr: Array.isArray(area.highlights_ar) ? area.highlights_ar.filter(Boolean) : [],
    featured: !!area.featured,
    order: typeof area.order === "number" ? area.order : 99,
  };
}

function mapPropertyDocument(property, developerLookup) {
  const en = property.en || {};
  const ar = property.ar || {};
  const enProject = en.project || {};
  const arProject = ar.project || {};
  const heroBackground = asAbsoluteUrl(en.hero?.backgroundUrl);
  const galleryImages = mapGalleryImages(en.gallery?.slides);
  const fallbackImage = galleryImages[0]?.url || "";
  const heroVideo = heroBackground && heroBackground.match(/\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i) ? heroBackground : "";
  const heroImage = heroVideo ? fallbackImage : firstNonEmpty(heroBackground, fallbackImage);
  const developerKey = slugify(firstNonEmpty(enProject.developer, property.developer_slug));
  const developer = developerLookup.get(developerKey);
  const location = firstNonEmpty(enProject.location, property.region_slug?.replace(/-/g, " "));
  const locationAr = firstNonEmpty(arProject.location, ar.location?.address);
  const paymentPlan = enProject.paymentPlan || "";

  return {
    _id: `property-${property.slug}`,
    _type: "property",
    title: enProject.name || property.slug,
    titleAr: arProject.name || "",
    slug: { _type: "slug", current: property.slug },
    developer: developer?.name || enProject.developer || property.developer_slug || "",
    location,
    locationAr,
    status: mapListingStatus(property.sanity_status || enProject.statusLabel || enProject.market),
    startingPrice: enProject.startingPrice || "",
    completionDate: enProject.completionDate || "",
    paymentPlan,
    unitTypes: firstNonEmpty(enProject.units, enProject.type),
    featured: !!property.featured,
    heroImage,
    heroVideo,
    galleryImages,
    brochureUrl: asAbsoluteUrl(firstNonEmpty(en.intro?.brochures?.[0]?.url, en.floorPlans?.brochureHref)),
    description: firstNonEmpty(en.intro?.paragraphs?.join("\n\n"), en.intro?.title, enProject.name),
    descriptionAr: firstNonEmpty(ar.intro?.paragraphs?.join("\n\n"), ar.intro?.title),
    amenities: mapAmenities(en.amenities?.amenities),
    floorPlans: mapFloorPlans(en.floorPlans?.plans),
    lat: typeof en.location?.lat === "number" ? en.location.lat : undefined,
    lng: typeof en.location?.lng === "number" ? en.location.lng : undefined,
    nearbyPlaces: mapNearbyPlaces(en.location?.proximityFeatures),
  };
}

function mapArticleDocument(article) {
  const snippets = Array.isArray(article.bodySnippets)
    ? article.bodySnippets.filter((snippet) => typeof snippet === "string" && !snippet.startsWith(",\\n"))
    : [];

  return {
    _id: `article-${article.slug}`,
    _type: "article",
    title: article.title,
    titleAr: article.ar?.title || "",
    slug: { _type: "slug", current: article.slug },
    description: article.description || "",
    descriptionAr: article.ar?.description || "",
    mainImage: article.image || "",
    category: article.category || "News",
    readTime: article.readTime || "",
    publishedAt: new Date().toISOString(),
    featured: true,
    hero: {
      title: article.title,
      titleAr: article.ar?.title || "",
      subtitle: article.description || "",
      subtitleAr: article.ar?.description || "",
      image: article.image || "",
      stats: [],
    },
    tableOfContents: [],
    tableOfContentsAr: [],
    sections: snippets.length
      ? [
          {
            _key: key("section"),
            id: "overview",
            title: "Overview",
            titleAr: "نظرة عامة",
            body: snippets.map((snippet) => ({
              _key: key("block"),
              _type: "block",
              style: "normal",
              markDefs: [],
              children: [
                {
                  _key: key("span"),
                  _type: "span",
                  text: snippet.replace(/\s+/g, " ").trim(),
                  marks: [],
                },
              ],
            })),
            bodyAr: [],
            keyPoints: [],
            keyPointsAr: [],
          },
        ]
      : [],
    cta: {
      title: "Speak to our team",
      titleAr: "تواصل مع فريقنا",
      description: "Get tailored advice on Dubai real estate opportunities.",
      descriptionAr: "احصل على نصيحة مخصصة حول فرص العقار في دبي.",
      buttonLabel: "Contact us",
      buttonLabelAr: "تواصل معنا",
      buttonUrl: "/contact-us",
    },
    seoTitle: article.title,
    seoDescription: article.description || "",
    seoKeywords: "",
  };
}

async function upsertDocuments(documents, label) {
  const chunkSize = 20;
  for (let index = 0; index < documents.length; index += chunkSize) {
    const slice = documents.slice(index, index + chunkSize);
    const tx = client.transaction();
    slice.forEach((doc) => tx.createOrReplace(doc));
    await tx.commit();
    console.log(`[${label}] ${Math.min(index + chunkSize, documents.length)}/${documents.length}`);
  }
}

async function main() {
  const developers = readJson("developers.json");
  const areas = readJson("areas.json");
  const properties = readJson("properties.json");
  const articles = readJson("articles.json");

  const developerLookup = buildDeveloperLookup(developers);

  const developerDocs = developers.map(mapDeveloperDocument);
  const areaDocs = areas.map(mapAreaDocument);
  const propertyDocs = properties.map((property) => mapPropertyDocument(property, developerLookup));
  const articleDocs = articles.map(mapArticleDocument);

  console.log(`Importing to Sanity ${PROJECT_ID}/${DATASET}`);
  console.log(`Developers: ${developerDocs.length}`);
  console.log(`Areas: ${areaDocs.length}`);
  console.log(`Properties: ${propertyDocs.length}`);
  console.log(`Articles: ${articleDocs.length}`);

  await upsertDocuments(developerDocs, "developers");
  await upsertDocuments(areaDocs, "areas");
  await upsertDocuments(propertyDocs, "properties");
  await upsertDocuments(articleDocs, "articles");

  console.log("Import complete.");
}

main().catch((error) => {
  console.error("Import failed:", error);
  process.exit(1);
});
