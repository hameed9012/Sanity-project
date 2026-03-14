import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

function readJson(filename, fallback = []) {
  try {
    const filePath = join(ROOT, filename);
    if (!existsSync(filePath)) return fallback;
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function projectKey(title, developer = "") {
  const projectSlug = slugify(title);
  const developerSlug = slugify(developer);
  return developerSlug ? `${developerSlug}::${projectSlug}` : projectSlug;
}

const DEVELOPER_NAME_MAP = {
  sobha: "Sobha Realty",
  azizi: "Azizi Developments",
  danube: "Danube Properties",
  damac: "DAMAC Properties",
  tiger: "Tiger Properties",
  binghatti: "Binghatti",
  arada: "Arada",
  emaar: "Emaar Properties",
  taraf: "Taraf",
  reportage: "Reportage Properties",
};

const LOCATION_LABELS = {
  szr: "Sheikh Zayed Road, Dubai, UAE",
  jlt: "Jumeirah Lake Towers, Dubai, UAE",
  jvt: "Jumeirah Village Triangle, Dubai, UAE",
  jvc: "Jumeirah Village Circle, Dubai, UAE",
  uaq: "Umm Al Quwain, UAE",
  difc: "DIFC, Dubai, UAE",
  downtown: "Downtown Dubai, UAE",
  "business bay": "Business Bay, Dubai, UAE",
  "dubai harbour": "Dubai Harbour, Dubai, UAE",
  "dubai south": "Dubai South, Dubai, UAE",
  "ras al khor": "Ras Al Khor, Dubai, UAE",
  "the valley - dl": "The Valley, Dubailand, Dubai, UAE",
  warsan: "Warsan, Dubai, UAE",
  arjan: "Arjan, Dubai, UAE",
  sharjah: "Sharjah, UAE",
  "mbr city": "Mohammed Bin Rashid City, Dubai, UAE",
};

function firstNonEmpty(...values) {
  return values.find((value) => {
    if (value == null) return false;
    if (typeof value === "string") return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    return true;
  });
}

function asAbsoluteUrl(value) {
  const url = String(value || "").trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

function normalizeDeveloperName(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return DEVELOPER_NAME_MAP[slugify(text)] || text;
}

function normalizeLocation(value) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  const key = text.toLowerCase();
  if (LOCATION_LABELS[key]) return LOCATION_LABELS[key];
  if (/^dubai,?\s*(uae|united arab emirates)$/i.test(text)) return "Dubai, UAE";
  if (/^business bay$/i.test(text)) return "Business Bay, Dubai, UAE";
  if (/^downtown$/i.test(text)) return "Downtown Dubai, UAE";
  if (/^jebel ali$/i.test(text)) return "Jebel Ali, Dubai, UAE";
  return text;
}

function isGenericLocation(value) {
  const text = String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  return (
    !text ||
    text === "dubai" ||
    text === "dubai, uae" ||
    text === "dubai, united arab emirates" ||
    text === "uae"
  );
}

function normalizeListingStatus(value) {
  const text = String(value || "").toLowerCase().trim();
  if (!text) return "Off-plan";
  if (text.includes("rent")) return "Rental";
  if (text.includes("secondary") || text.includes("resale") || text.includes("ready")) {
    return "Ready To Move";
  }
  if (text.includes("sold")) return "Sold-out";
  return "Off-plan";
}

function normalizePaymentPlan(value, details = "") {
  const raw = String(value || "").replace(/\s+/g, " ").trim();
  const extra = String(details || "").replace(/\s+/g, " ").trim();
  if (!raw && !extra) return "";

  let normalized = raw
    .replace(/(\d)\s*-\s*(\d)/g, "$1 / $2")
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\bPHO\b/gi, "Post-Handover")
    .replace(/\bHO\b/gi, "Handover")
    .replace(/\bcash\b/gi, "Cash");

  if (extra && !normalized.toLowerCase().includes("post-handover")) {
    normalized = `${normalized} Post-Handover`.trim();
  }

  return normalized.trim();
}

function normalizePropertyType(value) {
  const text = String(value || "").toLowerCase().trim();
  if (!text) return "apartments";
  if (text.includes("villa") || text.includes("townhouse") || text.includes("mansion")) return "villas";
  if (text.includes("penthouse")) return "penthouses";
  if (text.includes("office") || text.includes("retail") || text.includes("commercial")) {
    return "commercial-retail";
  }
  return "apartments";
}

function normalizeUnitTypes(value) {
  return String(value || "")
    .replace(/\b1BR\b/gi, "1 Bedroom")
    .replace(/\b1\.5BR\b/gi, "1.5 Bedroom")
    .replace(/\b2BR\b/gi, "2 Bedroom")
    .replace(/\b3BR\b/gi, "3 Bedroom")
    .replace(/\b4BR\b/gi, "4 Bedroom")
    .replace(/\b5BR\b/gi, "5 Bedroom")
    .replace(/\b6BR\b/gi, "6 Bedroom")
    .replace(/\b7BR\b/gi, "7 Bedroom")
    .replace(/\b8BR\b/gi, "8 Bedroom")
    .replace(/\s+/g, " ")
    .trim();
}

function parsePriceToAED(value) {
  if (value == null) return null;
  const raw = String(value).trim().toLowerCase();
  if (!raw) return null;
  const numericPart = raw.replace(/[^\d.]/g, "");
  let parsed = Number(numericPart);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  const compact = raw.replace(/\s+/g, "");
  if (/million/.test(raw) || /\d(?:\.\d+)?m\b/.test(compact)) parsed *= 1_000_000;
  else if (/thousand/.test(raw) || /\d(?:\.\d+)?k\b/.test(compact)) parsed *= 1_000;
  parsed = Math.round(parsed);
  return parsed >= 10_000 ? parsed : null;
}

function isVideoUrl(url) {
  const clean = String(url || "").split("?")[0].toLowerCase();
  return [".mp4", ".webm", ".mov", ".m4v", ".ogg"].some((ext) => clean.endsWith(ext));
}

function isWeakProjectImage(value) {
  const text = String(value || "").toLowerCase().trim();
  if (!text) return true;
  return (
    text.includes("logo") ||
    text.includes("profile-pictures") ||
    text.endsWith(".svg") ||
    /^\/[^/]+$/.test(text)
  );
}

function mapAmenityIcon(rawIcon, label) {
  const text = `${rawIcon || ""} ${label || ""}`.toLowerCase();
  if (text.includes("pool") || text.includes("swim") || text.includes("مسبح")) return "pool";
  if (text.includes("gym") || text.includes("fitness") || text.includes("نادي") || text.includes("رياض")) return "gym";
  if (text.includes("park") || text.includes("garden") || text.includes("حديقة")) return "park";
  if (text.includes("spa") || text.includes("sauna") || text.includes("سبا")) return "spa";
  if (text.includes("parking") || text.includes("car") || text.includes("مواقف")) return "parking";
  if (text.includes("beach") || text.includes("lagoon") || text.includes("water") || text.includes("شاطئ")) return "beach";
  if (text.includes("school") || text.includes("education") || text.includes("مدرس")) return "school";
  if (text.includes("mosque") || text.includes("prayer") || text.includes("مسجد")) return "mosque";
  if (text.includes("restaurant") || text.includes("cafe") || text.includes("dining") || text.includes("مطعم") || text.includes("مقه")) return "dining";
  if (text.includes("kids") || text.includes("play") || text.includes("أطفال")) return "kids";
  if (text.includes("security") || text.includes("أمن")) return "security";
  return "building";
}

const localProperties = readJson("properties.json");
const localDevelopers = readJson("developers.json");
const localDeveloperDetails = readJson("developer-details.json");
const localAreas = readJson("areas.json");
const localArticles = readJson("articles.json");
const workbookSync = readJson("generated/excel-workbook-sync.json", { records: [] });

const developerNameBySlug = new Map(
  localDevelopers.map((developer) => [developer.slug, developer.name])
);

const workbookBySlug = new Map();
const workbookByKey = new Map();
for (const record of workbookSync.records || []) {
  if (record.slug) workbookBySlug.set(record.slug, record);
  workbookByKey.set(projectKey(record.project, record.developer), record);
}

const localPropertyBySlug = new Map();
const localPropertyByKey = new Map();
for (const property of localProperties) {
  localPropertyBySlug.set(property.slug, property);
  const localName = property?.en?.project?.name || property?.slug;
  const localDeveloper = property?.en?.project?.developer || property?.developer_slug || "";
  localPropertyByKey.set(projectKey(localName, localDeveloper), property);
}

const localDeveloperBySlug = new Map();
for (const developer of localDevelopers) {
  localDeveloperBySlug.set(developer.slug, developer);
}

const localDeveloperDetailsBySlug = new Map();
for (const developer of localDeveloperDetails) {
  localDeveloperDetailsBySlug.set(developer.slug, developer);
}

const localAreaBySlug = new Map();
for (const area of localAreas) {
  if (!localAreaBySlug.has(area.slug)) localAreaBySlug.set(area.slug, area);
}

const localArticleBySlug = new Map();
for (const article of localArticles) {
  localArticleBySlug.set(article.slug, article);
}

const PROPERTY_SLUG_ALIASES = new Map([
  ["one", "sobha-one"],
  ["the-element", "sobha-one-the-element"],
  ["sobha-elwood-secondary", "elwood"],
  ["lina", "azizi-lina"],
  ["gabriel", "azizi-gabriel"],
  ["wares", "azizi-wares"],
  ["skyterraces", "sky-terraces"],
  ["ruby", "azizi-ruby"],
  ["mercedes-benz-places", "mercedes-benz-places"],
  ["mercedes-benz-places-binghatti-city", "mercedes-benz-places-binghatti-city"],
  ["riviera-azure", "riviera-azure"],
  ["anantara", "anantara-sharjah-resort"],
  ["inaura", "inaura-hotels-and-residences-downtown"],
  ["bugatti", "bugatti-residences"],
  ["monaco", "azizi-monaco"],
  ["seahaven-penthouse", "sea-haven"],
  ["sky-tower", "tiger-sky"],
  ["bayz102", "bayz-102"],
  ["shahrukhz", "shahrukz"],
]);

const MANUAL_PROPERTY_PATCHES = {
  one: {
    title: "Sobha One",
    propertyType: "apartments",
    type: "apartments",
    unitTypes: "1-4 Bedroom Apartments & Duplexes",
  },
  lina: {
    title: "Azizi Lina",
    location: "Jebel Ali, Dubai, UAE",
    developer: "Azizi Developments",
  },
  gabriel: {
    title: "Azizi Gabriel",
    location: "Jebel Ali, Dubai, UAE",
    developer: "Azizi Developments",
  },
  wares: {
    title: "Azizi Wares",
    location: "Jebel Ali, Dubai, UAE",
    developer: "Azizi Developments",
  },
  venice: {
    title: "Azizi Venice",
    location: "Dubai South, Dubai, UAE",
    developer: "Azizi Developments",
    paymentPlan: "50 / 50",
  },
  "azizi-ruby": {
    title: "Azizi Ruby",
    location: "Jumeirah Village Circle, Dubai, UAE",
    developer: "Azizi Developments",
    unitTypes: "Studio, 1, 2 & 3 Bedroom Apartments",
  },
  skyterraces: {
    title: "Binghatti Sky Terraces",
    location: "Motor City, Dubai, UAE",
    completionDate: "Q4 2027",
  },
  volta: {
    title: "DAMAC Volta",
    location: "Business Bay, Dubai, UAE",
    developer: "DAMAC Properties",
  },
  "il-teatro": {
    title: "IL Teatro Residences",
    location: "Muwaileh Commercial, Sharjah, UAE",
    developer: "Arada",
  },
  "mercedes-benz-places-binghatti-city": {
    location: "Meydan Horizon, Dubai, UAE",
    completionDate: "Q2 2028",
  },
  "mercedes-benz-places": {
    location: "Downtown Dubai, UAE",
    completionDate: "Q4 2026",
  },
  "sobha-estates": {
    title: "Sobha Estates Villas",
    propertyType: "villas",
    type: "villas",
    location: "Mohammed Bin Rashid City, Dubai, UAE",
    completionDate: "Q3 2026",
    developer: "Sobha Realty",
    heroImage: "https://luxury-real-estate-media.b-cdn.net/sobha-reserve/Community.png",
  },
  elwood: {
    title: "Sobha Elwood",
    location: "Dubailand, Dubai, UAE",
    developer: "Sobha Realty",
    propertyType: "villas",
    type: "villas",
    heroImage: "https://luxury-real-estate-media.b-cdn.net/sobha-elwood/TYPE%205A%20FRONT.jpg",
  },
  inaura: {
    title: "Inaura Hotels & Residences Downtown",
    location: "Downtown Dubai, UAE",
    completionDate: "Q2 2030",
  },
  "w-residences": {
    title: "W Residences",
    location: "Dubai Harbour, Dubai, UAE",
    completionDate: "Q4 2028",
  },
  "w-the-residences": {
    title: "W The Residences",
    location: "Dubai Harbour, Dubai, UAE",
    completionDate: "Q4 2028",
  },
  akala: {
    title: "Akala Residences",
    location: "DIFC, Dubai, UAE",
    developer: "Arada",
    completionDate: "Q4 2029",
  },
  "akala-residence": {
    title: "Akala Residence",
    location: "DIFC, Dubai, UAE",
    developer: "Arada",
    completionDate: "Q4 2029",
  },
  anantara: {
    title: "Anantara Sharjah Residences",
    location: "Sharjah, UAE",
  },
  bugatti: {
    title: "Bugatti Residences by Binghatti",
    location: "Business Bay, Dubai, UAE",
    completionDate: "Q1 2026",
    propertyType: "penthouses",
    type: "penthouses",
  },
  monaco: {
    title: "Azizi Monaco",
    propertyType: "villas",
    type: "villas",
    unitTypes: "6 & 8 Bedroom Villas",
    completionDate: "Q4 2026",
  },
  "seahaven-penthouse": {
    title: "Sobha SeaHaven",
    propertyType: "penthouses",
    type: "penthouses",
    unitTypes: "5 & 6 Bedroom Penthouses",
    location: "Dubai Harbour, Dubai, UAE",
    completionDate: "Q4 2026",
    startingPrice: "AED 4,595,585",
    priceAED: 4_595_585,
    startingPriceAED: 4_595_585,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/seahaven/hero-bg.jpg%20.jpg",
  },
  "sobha-elwood-secondary": {
    title: "Sobha Elwood",
    startingPrice: "AED 9,900,000",
    priceAED: 9_900_000,
    startingPriceAED: 9_900_000,
  },
  "riviera-azure": {
    title: "Riviera Azure",
    location: "Meydan, Dubai, UAE",
  },
  "riviera-reve-azur": {
    title: "Riviera Reve Azur",
    status: "Off-plan",
  },
  "sobha-sanctuary": {
    title: "Sobha Sanctuary",
    location: "The Valley, Dubai, UAE",
    developer: "Sobha Realty",
    propertyType: "villas",
    type: "villas",
    unitTypes: "4, 5 & 6 Bedroom Villas",
  },
  "the-grove-at-sobha-sanctuary": {
    title: "The Grove at Sobha Sanctuary",
    location: "The Valley, Dubai, UAE",
    developer: "Sobha Realty",
    propertyType: "villas",
    type: "villas",
  },
  "the-brooks-at-sobha-sanctuary": {
    title: "The Brooks at Sobha Sanctuary",
    location: "The Valley, Dubai, UAE",
    developer: "Sobha Realty",
    propertyType: "villas",
    type: "villas",
    unitTypes: "Townhouses & Villas",
  },
  "sky-tower": {
    title: "Tiger Sky",
    completionDate: "Q4 2028",
    location: "Business Bay, Dubai, UAE",
  },
  "bayz101": {
    title: "Bayz 101",
    completionDate: "Q2 2028",
    propertyType: "apartments",
    type: "apartments",
  },
  "bayz102": {
    title: "Bayz 102",
    completionDate: "Q2 2029",
    propertyType: "apartments",
    type: "apartments",
  },
  "fashionz": {
    title: "Fashionz",
    completionDate: "Q4 2026",
    propertyType: "apartments",
    type: "apartments",
  },
  "diamondz": {
    title: "Diamondz",
    completionDate: "Q4 2027",
    propertyType: "apartments",
    type: "apartments",
  },
  "shahrukhz": {
    title: "SHAHRUKHZ",
    completionDate: "Q2 2029",
    propertyType: "commercial-retail",
    type: "commercial-retail",
    startingPrice: "",
    priceAED: null,
    startingPriceAED: null,
    paymentPlan: "70 / 30",
  },
  shahrukz: {
    title: "SHAHRUKHZ",
    completionDate: "Q4 2028",
    location: "Sheikh Zayed Road, Dubai, UAE",
    developer: "Danube Properties",
    propertyType: "commercial-retail",
    type: "commercial-retail",
    paymentPlan: "70 / 30 Post-Handover",
  },
  diamondz: {
    title: "Diamondz",
    developer: "Danube Properties",
    location: "Jumeirah Lake Towers, Dubai, UAE",
    propertyType: "apartments",
    type: "apartments",
    paymentPlan: "69 / 31 Post-Handover",
  },
  fashionz: {
    title: "Fashionz",
    developer: "Danube Properties",
    location: "Jumeirah Village Triangle, Dubai, UAE",
    propertyType: "apartments",
    type: "apartments",
  },
  "bayz-101": {
    title: "Bayz 101",
    developer: "Danube Properties",
    location: "Business Bay, Dubai, UAE",
  },
  "bayz-102": {
    title: "Bayz 102",
    developer: "Danube Properties",
    location: "Business Bay, Dubai, UAE",
    paymentPlan: "64 / 36 Post-Handover",
  },
};

function mapGalleryImages(slides = []) {
  return (slides || [])
    .map((slide) => (typeof slide === "string" ? slide : slide?.url))
    .map(asAbsoluteUrl)
    .filter(Boolean)
    .map((url) => ({ url }));
}

function getDeveloperHeroImage(slug) {
  const developer =
    localDeveloperDetailsBySlug.get(slug) ||
    localDeveloperBySlug.get(slug) ||
    null;

  return asAbsoluteUrl(developer?.heroImage || developer?.heroImageUrl || "");
}

function getAreaHeroImage(slug) {
  const area = localAreaBySlug.get(slug);
  return asAbsoluteUrl(area?.heroImage || "");
}

function mapFloorPlans(plans = []) {
  if (!Array.isArray(plans)) return [];
  return plans.map((plan) => ({
    title: plan?.title || "",
    bedrooms: Number.isFinite(Number(plan?.bedrooms)) ? Number(plan.bedrooms) : undefined,
    size: firstNonEmpty(plan?.size, plan?.specs?.["Total Area"]) || "",
    price: firstNonEmpty(plan?.price, plan?.specs?.["Starting Price"]) || "",
    images: (plan?.images || [])
      .map((image) => (typeof image === "string" ? image : image?.url))
      .map(asAbsoluteUrl)
      .filter(Boolean),
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
        label,
        icon: mapAmenityIcon(amenity?.icon, label),
      };
    })
    .filter(Boolean);
}

function mapNearbyPlaces(items = []) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => {
      const text = firstNonEmpty(item?.text, item?.name);
      if (!text) return null;
      return {
        icon: item?.icon || "location",
        text: item?.distance ? `${text} - ${item.distance}` : text,
      };
    })
    .filter(Boolean);
}

function resolveLocalPropertySources(input) {
  const slug = typeof input === "string" ? input : input?.slug || input?._id || "";
  const title = typeof input === "object" ? input?.title || input?.name || "" : "";
  const developer = typeof input === "object" ? input?.developer || "" : "";
  const aliasSlug = PROPERTY_SLUG_ALIASES.get(slug) || "";
  const titleSlug = slugify(title);
  const keys = [
    projectKey(title, developer),
    projectKey(title, ""),
  ].filter(Boolean);

  const local =
    localPropertyBySlug.get(slug) ||
    (aliasSlug ? localPropertyBySlug.get(aliasSlug) : null) ||
    (titleSlug ? localPropertyBySlug.get(titleSlug) : null) ||
    keys.map((key) => localPropertyByKey.get(key)).find(Boolean) ||
    null;

  const workbook =
    workbookBySlug.get(slug) ||
    (aliasSlug ? workbookBySlug.get(aliasSlug) : null) ||
    (titleSlug ? workbookBySlug.get(titleSlug) : null) ||
    keys.map((key) => workbookByKey.get(key)).find(Boolean) ||
    null;

  return {
    slug,
    local,
    workbook,
    aliasSlug,
  };
}

function getLocalPropertyOverlay(input) {
  const { slug, local, workbook, aliasSlug } = resolveLocalPropertySources(input);
  if (!local && !workbook) return null;

  const en = local?.en || {};
  const ar = local?.ar || {};
  const enProject = en.project || {};
  const arProject = ar.project || {};
  const heroBg = en?.hero?.backgroundUrl || "";
  const galleryImages = mapGalleryImages(en?.gallery?.slides);
  const fallbackImage = galleryImages[0]?.url || "";
  const heroVideo = isVideoUrl(heroBg) ? heroBg : "";
  const heroImage = heroVideo
    ? firstNonEmpty(asAbsoluteUrl(en?.hero?.squareImageUrl), fallbackImage)
    : firstNonEmpty(asAbsoluteUrl(heroBg), asAbsoluteUrl(en?.hero?.squareImageUrl), fallbackImage);
  const developerSlug = local?.developer_slug || workbook?.developerSlug || "";
  const regionSlug = firstNonEmpty(workbook?.regionSlug, local?.region_slug, workbook?.areaSlug) || "dubai";
  const developerName = normalizeDeveloperName(
    developerNameBySlug.get(developerSlug) || workbook?.developer || developerSlug
  );
  const startingPrice =
    firstNonEmpty(enProject.startingPrice, workbook?.startingPrice) || "";
  const completionDate = firstNonEmpty(enProject.completionDate, workbook?.handover) || "";
  const paymentPlan = normalizePaymentPlan(
    firstNonEmpty(enProject.paymentPlan, workbook?.payment),
    workbook?.postHandoverDetails
  );
  const unitTypes = normalizeUnitTypes(
    firstNonEmpty(enProject.units, enProject.type, workbook?.beds, workbook?.propertyTypeRaw)
  );
  const description =
    firstNonEmpty(en?.intro?.paragraphs?.join("\n\n"), en?.intro?.title, workbook?.notes, workbook?.postHandoverDetails) || "";
  const descriptionAr =
    firstNonEmpty(ar?.intro?.paragraphs?.join("\n\n"), ar?.intro?.title) || "";

  const overlay = {
    slug,
    title: firstNonEmpty(enProject.name, local?.slug, workbook?.project) || slug,
    titleAr: firstNonEmpty(arProject.name, local?.slug) || "",
    developer: developerName,
    location: normalizeLocation(
      firstNonEmpty(enProject.location, workbook?.location, local?.region_slug?.replace(/-/g, " "))
    ) || "",
    locationAr: firstNonEmpty(arProject.location, ar?.location?.address) || "",
    status: normalizeListingStatus(
      firstNonEmpty(local?.sanity_status, workbook?.listingStatus, enProject.statusLabel)
    ),
    propertyType: normalizePropertyType(
      firstNonEmpty(workbook?.propertyType, local?.category, enProject.type, unitTypes)
    ),
    type: normalizePropertyType(firstNonEmpty(local?.category, workbook?.propertyType)),
    regionSlug,
    areaSlug: firstNonEmpty(workbook?.areaSlug, local?.region_slug, workbook?.regionSlug) || regionSlug,
    startingPrice,
    completionDate,
    paymentPlan,
    unitTypes,
    featured: !!local?.featured,
    heroImage:
      heroImage ||
      getDeveloperHeroImage(developerSlug) ||
      getAreaHeroImage(regionSlug) ||
      "",
    heroVideo,
    galleryImages,
    brochureUrl: firstNonEmpty(asAbsoluteUrl(en?.intro?.brochures?.[0]?.url), asAbsoluteUrl(en?.floorPlans?.brochureHref)) || "",
    description,
    descriptionAr,
    amenities: mapAmenities(en?.amenities?.amenities),
    floorPlans: mapFloorPlans(en?.floorPlans?.plans),
    lat: typeof en?.location?.lat === "number" ? en.location.lat : undefined,
    lng: typeof en?.location?.lng === "number" ? en.location.lng : undefined,
    nearbyPlaces: mapNearbyPlaces(en?.location?.proximityFeatures),
    priceAED: parsePriceToAED(startingPrice) || workbook?.minPrice || workbook?.maxPrice || null,
    startingPriceAED:
      parsePriceToAED(startingPrice) || workbook?.minPrice || workbook?.maxPrice || null,
  };

  const manualPatch =
    MANUAL_PROPERTY_PATCHES[slug] ||
    (aliasSlug ? MANUAL_PROPERTY_PATCHES[aliasSlug] : null) ||
    null;

  return manualPatch
    ? { ...overlay, ...manualPatch, __manualPatched: true }
    : overlay;
}

export function mergePropertyWithLocalData(property) {
  const slug = property?.slug || property?._id;
  const overlay = getLocalPropertyOverlay(property);
  if (!overlay) return property;

  const merged = {
    ...overlay,
    ...property,
  };

  merged.title = firstNonEmpty(property?.title, overlay.title) || "";
  merged.titleAr = firstNonEmpty(property?.titleAr, overlay.titleAr) || "";
  merged.developer = normalizeDeveloperName(
    overlay?.__manualPatched && overlay?.developer
      ? overlay.developer
      : firstNonEmpty(property?.developer, overlay.developer)
  ) || "";
  merged.location = normalizeLocation(
    overlay?.__manualPatched && overlay?.location
      ? overlay.location
      : !isGenericLocation(property?.location) && property?.location
      ? property.location
      : firstNonEmpty(overlay.location, property?.location)
  ) || "";
  merged.locationAr = firstNonEmpty(property?.locationAr, overlay.locationAr) || "";
  merged.status = normalizeListingStatus(firstNonEmpty(property?.status, overlay.status));
  merged.propertyType = normalizePropertyType(firstNonEmpty(property?.propertyType, overlay.propertyType));
  merged.type = normalizePropertyType(firstNonEmpty(property?.type, overlay.type));
  merged.regionSlug = firstNonEmpty(property?.regionSlug, overlay.regionSlug) || "";
  merged.areaSlug = firstNonEmpty(property?.areaSlug, overlay.areaSlug) || merged.regionSlug;
  merged.startingPrice =
    parsePriceToAED(property?.startingPrice) && parsePriceToAED(property?.startingPrice) >= 10_000
      ? property.startingPrice
      : overlay.startingPrice;
  merged.completionDate = firstNonEmpty(property?.completionDate, overlay.completionDate) || "";
  merged.paymentPlan = normalizePaymentPlan(
    overlay?.__manualPatched && overlay?.paymentPlan
      ? overlay.paymentPlan
      : firstNonEmpty(property?.paymentPlan, overlay.paymentPlan)
  );
  merged.unitTypes = normalizeUnitTypes(firstNonEmpty(property?.unitTypes, overlay.unitTypes)) || "";
  merged.heroVideo = firstNonEmpty(property?.heroVideo, overlay.heroVideo) || "";
  merged.heroImage =
    !isWeakProjectImage(property?.heroImage) && property?.heroImage
      ? property.heroImage
      : firstNonEmpty(overlay.heroImage, property?.heroImage) || "";
  merged.galleryImages =
    Array.isArray(property?.galleryImages) && property.galleryImages.length > 0
      ? property.galleryImages
      : overlay.galleryImages;
  merged.brochureUrl = firstNonEmpty(property?.brochureUrl, overlay.brochureUrl) || "";
  merged.description = firstNonEmpty(property?.description, overlay.description) || "";
  merged.descriptionAr = firstNonEmpty(property?.descriptionAr, overlay.descriptionAr) || "";
  merged.amenities =
    Array.isArray(property?.amenities) && property.amenities.length > 0
      ? property.amenities
      : overlay.amenities;
  merged.floorPlans =
    Array.isArray(property?.floorPlans) && property.floorPlans.length > 0
      ? property.floorPlans
      : overlay.floorPlans;
  merged.lat = property?.lat ?? overlay.lat;
  merged.lng = property?.lng ?? overlay.lng;
  merged.nearbyPlaces =
    Array.isArray(property?.nearbyPlaces) && property.nearbyPlaces.length > 0
      ? property.nearbyPlaces
      : overlay.nearbyPlaces;
  merged.priceAED =
    (Number.isFinite(property?.priceAED) && property.priceAED >= 10_000 ? property.priceAED : null) ||
    overlay.priceAED;
  merged.startingPriceAED =
    (Number.isFinite(property?.startingPriceAED) && property.startingPriceAED >= 10_000
      ? property.startingPriceAED
      : null) || overlay.startingPriceAED;

  return merged;
}

export function getFallbackProperties() {
  return localProperties.map((property) => mergePropertyWithLocalData(property));
}

export function mergeDeveloperWithLocalData(developer) {
  const slug = developer?.slug || developer?._id;
  const local =
    localDeveloperDetailsBySlug.get(slug) ||
    localDeveloperBySlug.get(slug);
  if (!local) return developer;

  return {
    ...local,
    ...developer,
    slug,
    name: firstNonEmpty(developer?.name, local?.name) || "",
    nameAr: firstNonEmpty(developer?.nameAr, local?.nameAr) || "",
    tagline: firstNonEmpty(developer?.tagline, local?.tagline) || "",
    taglineAr: firstNonEmpty(developer?.taglineAr, local?.taglineAr) || "",
    logoUrl: firstNonEmpty(developer?.logoUrl, asAbsoluteUrl(local?.logo)) || "",
    heroImageUrl: firstNonEmpty(developer?.heroImageUrl, asAbsoluteUrl(local?.heroImage)) || "",
    about:
      Array.isArray(developer?.about) && developer.about.length > 0 ? developer.about : local?.about || [],
    aboutAr:
      Array.isArray(developer?.aboutAr) && developer.aboutAr.length > 0 ? developer.aboutAr : local?.aboutAr || [],
    stats: developer?.stats || local?.stats || {},
    highlights:
      Array.isArray(developer?.highlights) && developer.highlights.length > 0
        ? developer.highlights
        : local?.highlights || [],
  };
}

export function getFallbackDevelopers() {
  return Array.from(localDeveloperBySlug.values()).map((developer) =>
    mergeDeveloperWithLocalData(developer)
  );
}

function normalizeAreaText(value, type) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  if (type === "roi") {
    return text
      .replace(/^return on investment[:\s-]*/i, "")
      .replace(/^around\s*/i, "")
      .replace(/^gross rental yield\s*/i, "")
      .replace(/^rental yield\s*/i, "")
      .trim();
  }
  return text
    .replace(/^average price[:\s-]*/i, "")
    .replace(/^properties from\s*/i, "")
    .replace(/^typically\s*/i, "")
    .replace(/^around\s*/i, "")
    .trim();
}

export function mergeAreaWithLocalData(area) {
  const slug = area?.slug || area?._id;
  const local = localAreaBySlug.get(slug);
  if (!local) return area;

  return {
    ...local,
    ...area,
    slug,
    name: firstNonEmpty(area?.name, local?.name_en) || "",
    nameAr: firstNonEmpty(area?.nameAr, local?.name_ar) || "",
    heroImage: firstNonEmpty(area?.heroImage, asAbsoluteUrl(local?.heroImage)) || "",
    gallery:
      Array.isArray(area?.gallery) && area.gallery.length > 0 ? area.gallery : local?.gallery || [],
    tagline: firstNonEmpty(area?.tagline, local?.tagline_en) || "",
    taglineAr: firstNonEmpty(area?.taglineAr, local?.tagline_ar) || "",
    description: firstNonEmpty(area?.description, local?.description_en) || "",
    descriptionAr: firstNonEmpty(area?.descriptionAr, local?.description_ar) || "",
    location: firstNonEmpty(area?.location, local?.location_en) || "",
    locationAr: firstNonEmpty(area?.locationAr, local?.location_ar) || "",
    avgBuyPrice: normalizeAreaText(firstNonEmpty(area?.avgBuyPrice, local?.avgBuy_en), "buy"),
    avgBuyPriceAr: firstNonEmpty(area?.avgBuyPriceAr, local?.avgBuy_ar) || "",
    avgRentPrice: normalizeAreaText(firstNonEmpty(area?.avgRentPrice, local?.avgRent_en), "rent"),
    avgRentPriceAr: firstNonEmpty(area?.avgRentPriceAr, local?.avgRent_ar) || "",
    roi: normalizeAreaText(firstNonEmpty(area?.roi, local?.roi_en), "roi"),
    roiAr: firstNonEmpty(area?.roiAr, local?.roi_ar) || "",
    regionSlug: firstNonEmpty(area?.regionSlug, local?.regionSlug, slug) || slug,
    highlights:
      Array.isArray(area?.highlights) && area.highlights.length > 0
        ? area.highlights
        : local?.highlights_en || [],
    highlightsAr:
      Array.isArray(area?.highlightsAr) && area.highlightsAr.length > 0
        ? area.highlightsAr
        : local?.highlights_ar || [],
    featured: area?.featured ?? local?.featured ?? false,
  };
}

export function getFallbackAreas() {
  return Array.from(localAreaBySlug.values()).map((area) => mergeAreaWithLocalData(area));
}

export function mergeArticleWithLocalData(article) {
  const slug = article?.slug || article?._id;
  const local = localArticleBySlug.get(slug);
  if (!local) return article;

  const cleanedBodySnippets = (Array.isArray(local.bodySnippets) ? local.bodySnippets : [])
    .map((snippet) => String(snippet || "").replace(/\s+/g, " ").trim())
    .filter(
      (snippet) =>
        snippet &&
        !snippet.startsWith(",") &&
        !snippet.includes("content: {") &&
        !snippet.includes("sections: [")
    );

  const sections =
    Array.isArray(article?.sections) && article.sections.length > 0
      ? article.sections
      : cleanedBodySnippets.length
      ? [
          {
            _key: "overview",
            id: "overview",
            title: "Overview",
            titleAr: "نظرة عامة",
            body: cleanedBodySnippets,
            bodyAr: [],
          },
        ]
      : [];

  return {
    ...local,
    ...article,
    slug,
    title: firstNonEmpty(article?.title, local?.title) || "",
    titleAr: firstNonEmpty(article?.titleAr, local?.ar?.title) || "",
    description: firstNonEmpty(article?.description, local?.description) || "",
    descriptionAr: firstNonEmpty(article?.descriptionAr, local?.ar?.description) || "",
    mainImage: firstNonEmpty(article?.mainImage, asAbsoluteUrl(local?.image), local?.image) || "",
    category: firstNonEmpty(article?.category, local?.category) || "News",
    readTime: firstNonEmpty(article?.readTime, local?.readTime) || "",
    sections,
    hero: {
      ...(article?.hero || {}),
      title: firstNonEmpty(article?.hero?.title, local?.title) || "",
      titleAr: firstNonEmpty(article?.hero?.titleAr, local?.ar?.title) || "",
      subtitle: firstNonEmpty(article?.hero?.subtitle, local?.description) || "",
      subtitleAr: firstNonEmpty(article?.hero?.subtitleAr, local?.ar?.description) || "",
      image: firstNonEmpty(article?.hero?.image, asAbsoluteUrl(local?.image), local?.image) || "",
    },
  };
}

export function getFallbackArticles() {
  return Array.from(localArticleBySlug.values()).map((article) => mergeArticleWithLocalData(article));
}
