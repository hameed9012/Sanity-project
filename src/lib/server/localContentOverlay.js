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

function tokenizeSlug(value) {
  return slugify(value)
    .split("-")
    .filter(
      (token) =>
        token &&
        token.length > 1 &&
        ![
          "the",
          "and",
          "of",
          "by",
          "at",
          "project",
          "projects",
          "residence",
          "residences",
          "apartment",
          "apartments",
          "villa",
          "villas",
          "tower",
          "towers",
        ].includes(token)
    );
}

function hasStrongSlugOverlap(a, b) {
  const aTokens = tokenizeSlug(a);
  const bTokens = tokenizeSlug(b);
  if (!aTokens.length || !bTokens.length) return false;
  const overlap = aTokens.filter((token) => bTokens.includes(token));
  return overlap.length >= Math.min(2, aTokens.length, bTokens.length);
}

function findLooseProjectMatch(items, { slug, title, developer }) {
  const slugValue = slugify(slug);
  const titleValue = slugify(title);
  const developerValue = slugify(developer);

  if (!slugValue && !titleValue) return null;

  return items.find((item) => {
    const itemSlug =
      slugify(item?.slug) ||
      slugify(item?.project) ||
      slugify(item?.en?.project?.name) ||
      "";
    const itemDeveloper =
      slugify(item?.developerSlug) ||
      slugify(item?.developer) ||
      slugify(item?.developer_slug) ||
      slugify(item?.en?.project?.developer) ||
      "";

    if (!itemSlug) return false;
    if (developerValue && itemDeveloper && developerValue !== itemDeveloper) return false;

    return (
      itemSlug === slugValue ||
      itemSlug === titleValue ||
      (slugValue && (itemSlug.includes(slugValue) || slugValue.includes(itemSlug))) ||
      (titleValue && (itemSlug.includes(titleValue) || titleValue.includes(itemSlug))) ||
      (slugValue && hasStrongSlugOverlap(itemSlug, slugValue)) ||
      (titleValue && hasStrongSlugOverlap(itemSlug, titleValue))
    );
  }) || null;
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

function isWeakText(value) {
  const text = String(value || "").trim().toLowerCase();
  return (
    !text ||
    [
      "tba",
      "n/a",
      "na",
      "unknown",
      "available",
      "project",
      "property",
      "dubai, uae",
      "dubai, united arab emirates",
    ].includes(text)
  );
}

function isWeakCompletion(value) {
  const text = String(value || "").trim().toLowerCase();
  return !text || ["tba", "soon", "available"].includes(text);
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

function normalizeMediaItems(items = []) {
  const seen = new Set();
  return items
    .map((item) => {
      const url = typeof item === "string" ? item : item?.url;
      const absolute = asAbsoluteUrl(url);
      if (!absolute) return null;
      if (seen.has(absolute)) return null;
      seen.add(absolute);
      return {
        url: absolute,
        type: isVideoUrl(absolute) ? "video" : "image",
      };
    })
    .filter(Boolean);
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
const localPropertyList = Array.from(localPropertyBySlug.values());
const EXCLUDED_DEVELOPER_SLUGS = new Set(["imtiaz", "beyond", "omniyat"]);

const activeDeveloperTokens = new Set();
for (const property of localPropertyList) {
  [
    property?.developer_slug,
    property?.developerSlug,
    property?.developer,
    property?.developerName,
    property?.en?.project?.developer,
    property?.ar?.project?.developer,
  ]
    .map((value) => slugify(value))
    .filter(Boolean)
    .forEach((token) => activeDeveloperTokens.add(token));
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
const workbookRecordList = Array.from(workbookBySlug.values());

const PROPERTY_SLUG_ALIASES = new Map([
  ["one", "sobha-one"],
  ["the-element", "sobha-one-the-element"],
  ["sobha-elwood-secondary", "elwood"],
  ["estate-sobha", "sobha-estates"],
  ["sobha-estate", "sobha-estates"],
  ["azure-azizi", "azure"],
  ["azizi-azure", "azure"],
  ["aspirz", "danube-aspirz"],
  ["danube-aspirz", "danube-aspirz"],
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

const COMMON_AZIZI_AMENITIES = [
  "Swimming Pool",
  "Gymnasium",
  "Kids Play Area",
  "Landscaped Gardens",
  "Retail Promenade",
  "24/7 Security",
  "Covered Parking",
];

const COMMON_DANUBE_AMENITIES = [
  "Swimming Pool",
  "Gymnasium",
  "Padel Court",
  "Kids Play Area",
  "BBQ Area",
  "Jogging Track",
  "Business Lounge",
  "24/7 Security",
];

const COMMON_SOBHA_AMENITIES = [
  "Swimming Pool",
  "Gymnasium",
  "Kids Play Area",
  "Clubhouse",
  "Landscaped Gardens",
  "Yoga Deck",
  "Jogging Track",
  "24/7 Security",
];

const MANUAL_PROPERTY_PATCHES = {
  one: {
    title: "Sobha One",
    propertyType: "apartments",
    type: "apartments",
    unitTypes: "1-4 Bedroom Apartments & Duplexes",
  },
  lazord: {
    title: "Lazord",
    location: "Majan, Dubailand, Dubai, UAE",
    developer: "Lapis Properties",
    startingPrice: "AED 671,000",
    priceAED: 671_000,
    startingPriceAED: 671_000,
    propertyType: "apartments",
    type: "apartments",
    unitTypes: "Studios, 1 & 2 Bedroom Apartments",
    regionSlug: "dubailand",
    heroImage:
      "https://luxury-real-estate-media.b-cdn.net/lapis/lazord/Lazord%20studio%20Floor%20Plan.png",
  },
  "altai-tower": {
    title: "Altai Tower",
    location: "Jumeirah Village Triangle, Dubai, UAE",
    developer: "Tiger Properties",
    regionSlug: "jumeirah-village-triangle",
  },
  lina: {
    title: "Azizi Lina",
    location: "Jebel Ali, Dubai, UAE",
    developer: "Azizi Developments",
    startingPrice: "AED 588,000",
    priceAED: 588_000,
    startingPriceAED: 588_000,
    propertyType: "apartments",
    type: "apartments",
    heroImage: "https://luxury-real-estate-media.b-cdn.net/azizi/lina/360-DJAZ.07-SL-IMG_EXTERIOR%20VIEW%2004.jpg",
    amenities: COMMON_AZIZI_AMENITIES,
  },
  gabriel: {
    title: "Azizi Gabriel",
    location: "Jebel Ali, Dubai, UAE",
    developer: "Azizi Developments",
    startingPrice: "AED 591,000",
    priceAED: 591_000,
    startingPriceAED: 591_000,
    propertyType: "apartments",
    type: "apartments",
    heroImage: "https://luxury-real-estate-media.b-cdn.net/azizi/gabriel/360-DJAZ2.39-HL-IMG-EXTERIOR%20PERSPECTIVE%201-00.jpg",
    amenities: COMMON_AZIZI_AMENITIES,
  },
  wares: {
    title: "Azizi Wares",
    location: "Jebel Ali, Dubai, UAE",
    developer: "Azizi Developments",
    startingPrice: "AED 594,000",
    priceAED: 594_000,
    startingPriceAED: 594_000,
    propertyType: "apartments",
    type: "apartments",
    heroImage: "https://luxury-real-estate-media.b-cdn.net/azizi/wares/VIEW_02.jpg",
    amenities: COMMON_AZIZI_AMENITIES,
  },
  venice: {
    title: "Azizi Venice",
    location: "Dubai South, Dubai, UAE",
    developer: "Azizi Developments",
    paymentPlan: "50 / 50",
    amenities: COMMON_AZIZI_AMENITIES,
  },
  "azizi-ruby": {
    title: "Azizi Ruby",
    location: "Jumeirah Village Circle, Dubai, UAE",
    developer: "Azizi Developments",
    unitTypes: "Studio, 1, 2 & 3 Bedroom Apartments",
    startingPrice: "AED 1,114,000",
    priceAED: 1_114_000,
    startingPriceAED: 1_114_000,
    completionDate: "Q4 2026",
    amenities: COMMON_AZIZI_AMENITIES,
  },
  skyterraces: {
    title: "Binghatti Sky Terraces",
    developer: "Binghatti",
    location: "Dubai Motor City, Dubai, UAE",
    completionDate: "Q4 2027",
    propertyType: "apartments",
    type: "apartments",
    unitTypes: "Studio, 1, 2 & 3 Bedroom Apartments",
    startingPrice: "AED 778,999",
    priceAED: 778_999,
    startingPriceAED: 778_999,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/binghatti/skyterraces/1.webp",
  },
  volta: {
    title: "DAMAC Volta",
    location: "Business Bay, Dubai, UAE",
    developer: "DAMAC Properties",
    propertyType: "apartments",
    type: "apartments",
    completionDate: "Q2 2028",
    startingPrice: "AED 2,496,000",
    priceAED: 2_496_000,
    startingPriceAED: 2_496_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/damac/-volta/SZR_04_NIGHT.jpg",
  },
  azure: {
    title: "Azure Azizi",
    location: "Dubai South, Dubai, UAE",
    developer: "Azizi Developments",
    completionDate: "Q4 2026",
    paymentPlan: "50 / 50",
    startingPrice: "AED 1,376,000",
    priceAED: 1_376_000,
    startingPriceAED: 1_376_000,
    unitTypes: "1, 2 & 3 Bedroom Apartments",
    amenities: COMMON_AZIZI_AMENITIES,
  },
  "danube-aspirz": {
    title: "Danube Aspirz",
    location: "Dubai Sports City, Dubai, UAE",
    developer: "Danube Properties",
    completionDate: "Q4 2028",
    propertyType: "commercial-retail",
    type: "commercial-retail",
    startingPrice: "AED 1,770,000",
    priceAED: 1_770_000,
    startingPriceAED: 1_770_000,
    paymentPlan: "70 / 30 Post-Handover",
    amenities: COMMON_DANUBE_AMENITIES,
  },
  "il-teatro": {
    title: "IL Teatro Residences",
    location: "Muwaileh Commercial, Sharjah, UAE",
    developer: "Arada",
  },
  "mercedes-benz-places-binghatti-city": {
    developer: "Binghatti",
    location: "Meydan Horizon, Dubai, UAE",
    completionDate: "Q2 2028",
    paymentPlan: "70 / 30",
  },
  "mercedes-benz-places": {
    developer: "Binghatti",
    location: "Downtown Dubai, UAE",
    completionDate: "Q4 2026",
    paymentPlan: "70 / 30",
  },
  "sobha-estates": {
    title: "Sobha Estates Villas",
    propertyType: "villas",
    type: "villas",
    unitTypes: "5 & 6 Bedroom Villas",
    location: "Mohammed Bin Rashid City, Dubai, UAE",
    completionDate: "Q3 2026",
    developer: "Sobha Realty",
    heroImage: "https://luxury-real-estate-media.b-cdn.net/sobha-reserve/Community.png",
    amenities: COMMON_SOBHA_AMENITIES,
  },
  "estate-sobha": {
    title: "Sobha Estates Villas",
    propertyType: "villas",
    type: "villas",
    unitTypes: "5 & 6 Bedroom Villas",
    location: "Mohammed Bin Rashid City, Dubai, UAE",
    completionDate: "Q3 2026",
    developer: "Sobha Realty",
    heroImage: "https://luxury-real-estate-media.b-cdn.net/sobha-reserve/Community.png",
    amenities: COMMON_SOBHA_AMENITIES,
  },
  elwood: {
    title: "Sobha Elwood",
    location: "Dubailand, Dubai, UAE",
    developer: "Sobha Realty",
    propertyType: "villas",
    type: "villas",
    completionDate: "Q4 2027",
    unitTypes: "4, 5 & 6 Bedroom Villas",
    startingPrice: "AED 7,930,000",
    priceAED: 7_930_000,
    startingPriceAED: 7_930_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/sobha-elwood/TYPE%205A%20FRONT.jpg",
    amenities: COMMON_SOBHA_AMENITIES,
  },
  inaura: {
    title: "Inaura Hotels & Residences Downtown",
    location: "Downtown Dubai, UAE",
    developer: "Arada",
    completionDate: "Q2 2030",
    propertyType: "apartments",
    type: "apartments",
    startingPrice: "AED 3,599,000",
    priceAED: 3_599_000,
    startingPriceAED: 3_599_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/arada/inaura/EXT01_Hero_B3_12k-02.jpg",
  },
  "w-residences": {
    title: "W Residences",
    location: "Dubai Harbour, Dubai, UAE",
    developer: "Arada",
    completionDate: "Q4 2028",
    propertyType: "apartments",
    type: "apartments",
    unitTypes: "1, 2, 3 & 4 Bedroom Residences",
    startingPrice: "AED 4,320,000",
    priceAED: 4_320_000,
    startingPriceAED: 4_320_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/arada/w-residences/240522-Frontside-Landscape-10.jpg",
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
    heroImage: "https://luxury-real-estate-media.b-cdn.net/akala/hero.jpg",
  },
  "akala-residence": {
    title: "Akala Residence",
    location: "DIFC, Dubai, UAE",
    developer: "Arada",
    completionDate: "Q4 2029",
    heroImage: "https://luxury-real-estate-media.b-cdn.net/akala/hero.jpg",
  },
  anantara: {
    title: "Anantara Sharjah Residences",
    location: "Sharjah, UAE",
    completionDate: "Q2 2027",
    developer: "Arada",
    propertyType: "apartments",
    type: "apartments",
    startingPrice: "AED 2,510,000",
    priceAED: 2_510_000,
    startingPriceAED: 2_510_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/arada/anantara/1.webp",
  },
  bugatti: {
    title: "Bugatti Residences by Binghatti",
    location: "Business Bay, Dubai, UAE",
    completionDate: "Q1 2026",
    developer: "Binghatti",
    propertyType: "penthouses",
    type: "penthouses",
    unitTypes: "2, 3, 4 & 5 Bedroom Sky Mansions",
    startingPrice: "AED 19,400,000",
    priceAED: 19_400_000,
    startingPriceAED: 19_400_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/binghatti/bugatti/BUGATTI%20RESIDENCES%20BY%20BINGHATTI%20_C8.jpg",
  },
  monaco: {
    title: "Azizi Monaco",
    propertyType: "villas",
    type: "villas",
    unitTypes: "6 & 8 Bedroom Villas",
    location: "Dubai South, Dubai, UAE",
    completionDate: "Q4 2026",
    developer: "Azizi Developments",
    startingPrice: "AED 45,490,000",
    priceAED: 45_490_000,
    startingPriceAED: 45_490_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/azizi/monaco/6bhk%2FShot_14.jpeg",
    heroVideo: "https://luxury-real-estate-media.b-cdn.net/azizi/monaco/8bhk%2FMM2%20tour%20video.mp4",
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
    heroImage: "https://luxury-real-estate-media.b-cdn.net/seahaven/hero-bg.jpg",
  },
  "sobha-elwood-secondary": {
    title: "Sobha Elwood",
    startingPrice: "AED 9,900,000",
    priceAED: 9_900_000,
    startingPriceAED: 9_900_000,
    developer: "Sobha Realty",
    location: "Dubailand, Dubai, UAE",
    propertyType: "villas",
    type: "villas",
  },
  "riviera-azure": {
    title: "Riviera Azure",
    location: "Meydan, Dubai, UAE",
    developer: "Azizi Developments",
    completionDate: "Q4 2025",
    propertyType: "apartments",
    type: "apartments",
    amenities: COMMON_AZIZI_AMENITIES,
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
    amenities: COMMON_SOBHA_AMENITIES,
  },
  "the-grove-at-sobha-sanctuary": {
    title: "The Grove at Sobha Sanctuary",
    location: "The Valley, Dubai, UAE",
    developer: "Sobha Realty",
    propertyType: "villas",
    type: "villas",
    unitTypes: "Townhouses & Attached Villas",
    amenities: COMMON_SOBHA_AMENITIES,
  },
  "the-brooks-at-sobha-sanctuary": {
    title: "The Brooks at Sobha Sanctuary",
    location: "The Valley, Dubai, UAE",
    developer: "Sobha Realty",
    propertyType: "villas",
    type: "villas",
    unitTypes: "Detached Villas",
    amenities: COMMON_SOBHA_AMENITIES,
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
    location: "Sheikh Zayed Road, Dubai, UAE",
    developer: "Danube Properties",
    completionDate: "Q4 2028",
    propertyType: "commercial-retail",
    type: "commercial-retail",
    startingPrice: "",
    priceAED: null,
    startingPriceAED: null,
    paymentPlan: "70 / 30 Post-Handover",
    amenities: COMMON_DANUBE_AMENITIES,
  },
  shahrukz: {
    title: "SHAHRUKHZ",
    completionDate: "Q4 2028",
    location: "Sheikh Zayed Road, Dubai, UAE",
    developer: "Danube Properties",
    propertyType: "commercial-retail",
    type: "commercial-retail",
    paymentPlan: "70 / 30 Post-Handover",
    amenities: COMMON_DANUBE_AMENITIES,
  },
  diamondz: {
    title: "Diamondz",
    developer: "Danube Properties",
    location: "Jumeirah Lake Towers, Dubai, UAE",
    propertyType: "apartments",
    type: "apartments",
    completionDate: "Q4 2027",
    startingPrice: "AED 1,141,000",
    priceAED: 1_141_000,
    startingPriceAED: 1_141_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/danube/diamondz/Exterior.jpg",
    paymentPlan: "69 / 31 Post-Handover",
    amenities: COMMON_DANUBE_AMENITIES,
  },
  fashionz: {
    title: "Fashionz",
    developer: "Danube Properties",
    location: "Jumeirah Village Triangle, Dubai, UAE",
    propertyType: "apartments",
    type: "apartments",
    completionDate: "Q4 2026",
    startingPrice: "AED 791,000",
    priceAED: 791_000,
    startingPriceAED: 791_000,
    amenities: COMMON_DANUBE_AMENITIES,
  },
  "bayz-101": {
    title: "Bayz 101",
    developer: "Danube Properties",
    location: "Business Bay, Dubai, UAE",
    completionDate: "Q2 2028",
    startingPrice: "AED 1,587,000",
    priceAED: 1_587_000,
    startingPriceAED: 1_587_000,
    amenities: COMMON_DANUBE_AMENITIES,
  },
  "bayz-102": {
    title: "Bayz 102",
    developer: "Danube Properties",
    location: "Business Bay, Dubai, UAE",
    completionDate: "Q2 2029",
    startingPrice: "AED 2,419,000",
    priceAED: 2_419_000,
    startingPriceAED: 2_419_000,
    paymentPlan: "64 / 36 Post-Handover",
    amenities: COMMON_DANUBE_AMENITIES,
  },
  "tiger-sky": {
    title: "Tiger Sky",
    developer: "Tiger Properties",
    location: "Business Bay, Dubai, UAE",
    completionDate: "Q4 2028",
    propertyType: "apartments",
    type: "apartments",
    unitTypes: "1, 2, 3 & 4 Bedroom Apartments",
    startingPrice: "AED 2,677,180",
    priceAED: 2_677_180,
    startingPriceAED: 2_677_180,
    paymentPlan: "60 / 40",
  },
  "azizi-venice": {
    title: "Azizi Venice",
    developer: "Azizi Developments",
    location: "Dubai South, Dubai, UAE",
    propertyType: "commercial-retail",
    type: "commercial-retail",
    completionDate: "Q4 2026",
    paymentPlan: "50 / 50",
    unitTypes: "Retail Units",
    startingPrice: "AED 647,000",
    priceAED: 647_000,
    startingPriceAED: 647_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/azizi/venice/Shot_09_Boulevard%20aerial.jpeg",
    amenities: COMMON_AZIZI_AMENITIES,
  },
  "azizi-gabriel": {
    title: "Azizi Gabriel",
    developer: "Azizi Developments",
    location: "Jebel Ali, Dubai, UAE",
    propertyType: "apartments",
    type: "apartments",
    completionDate: "Q4 2028",
    paymentPlan: "50 / 50",
    unitTypes: "Studio, 1 & 2 Bedroom Apartments",
    startingPrice: "AED 591,000",
    priceAED: 591_000,
    startingPriceAED: 591_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/azizi/gabriel/360-DJAZ2.39-HL-IMG-EXTERIOR%20PERSPECTIVE%201-00.jpg",
    amenities: COMMON_AZIZI_AMENITIES,
  },
  "azizi-lina": {
    title: "Azizi Lina",
    developer: "Azizi Developments",
    location: "Jebel Ali, Dubai, UAE",
    propertyType: "apartments",
    type: "apartments",
    completionDate: "Q4 2027",
    paymentPlan: "50 / 50",
    unitTypes: "Studio, 1, 2 & 3 Bedroom Apartments",
    startingPrice: "AED 588,000",
    priceAED: 588_000,
    startingPriceAED: 588_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/azizi/lina/360-DJAZ.07-SL-IMG_EXTERIOR%20VIEW%2004.jpg",
    amenities: COMMON_AZIZI_AMENITIES,
  },
  "azizi-wares": {
    title: "Azizi Wares",
    developer: "Azizi Developments",
    location: "Jebel Ali, Dubai, UAE",
    propertyType: "apartments",
    type: "apartments",
    completionDate: "Q4 2027",
    paymentPlan: "50 / 50",
    unitTypes: "Studio, 1 & 2 Bedroom Apartments",
    startingPrice: "AED 594,000",
    priceAED: 594_000,
    startingPriceAED: 594_000,
    heroImage: "https://luxury-real-estate-media.b-cdn.net/azizi/wares/VIEW_02.jpg",
    amenities: COMMON_AZIZI_AMENITIES,
  },
};

function mergeAmenityLists(primary = [], secondary = []) {
  const seen = new Set();
  return [...primary, ...secondary]
    .map((item) =>
      typeof item === "string"
        ? { label: item, icon: mapAmenityIcon(undefined, item) }
        : item && item.label
        ? { ...item, icon: item.icon || mapAmenityIcon(undefined, item.label) }
        : null
    )
    .filter(Boolean)
    .filter((item) => {
      const key = String(item.label || "").toLowerCase().trim();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function mapGalleryImages(slides = []) {
  return normalizeMediaItems(slides);
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

function getOverlayMedia({
  heroBackground,
  heroSquare,
  galleryImages = [],
  developerSlug,
  regionSlug,
  manualImage = "",
  manualVideo = "",
}) {
  const heroBackgroundUrl = asAbsoluteUrl(heroBackground);
  const heroSquareUrl = asAbsoluteUrl(heroSquare);
  const developerImage = getDeveloperHeroImage(developerSlug);
  const areaImage = getAreaHeroImage(regionSlug);

  const heroVideo = firstNonEmpty(
    isVideoUrl(manualVideo) ? manualVideo : "",
    isVideoUrl(heroBackgroundUrl) ? heroBackgroundUrl : ""
  );

  const heroImage = firstNonEmpty(
    asAbsoluteUrl(manualImage),
    !isVideoUrl(heroBackgroundUrl) ? heroBackgroundUrl : "",
    heroSquareUrl,
    galleryImages.find((item) => item.type === "image")?.url,
    developerImage,
    areaImage
  );

  const gallery = normalizeMediaItems([
    heroImage,
    heroVideo,
    ...galleryImages,
    developerImage,
    areaImage,
  ]);

  return {
    heroImage: heroImage || "",
    heroVideo: heroVideo || "",
    galleryImages: gallery,
  };
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
    findLooseProjectMatch(localPropertyList, { slug, title, developer }) ||
    null;

  const workbook =
    workbookBySlug.get(slug) ||
    (aliasSlug ? workbookBySlug.get(aliasSlug) : null) ||
    (titleSlug ? workbookBySlug.get(titleSlug) : null) ||
    keys.map((key) => workbookByKey.get(key)).find(Boolean) ||
    findLooseProjectMatch(workbookRecordList, { slug, title, developer }) ||
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
  const overlayMedia = getOverlayMedia({
    heroBackground: heroBg,
    heroSquare: en?.hero?.squareImageUrl,
    galleryImages,
    developerSlug,
    regionSlug,
  });

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
    heroImage: overlayMedia.heroImage,
    heroVideo: overlayMedia.heroVideo,
    galleryImages: overlayMedia.galleryImages,
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
  merged.locationAr =
    !isWeakText(property?.locationAr) && property?.locationAr
      ? property.locationAr
      : firstNonEmpty(overlay.locationAr, property?.locationAr) || "";
  merged.status = normalizeListingStatus(firstNonEmpty(property?.status, overlay.status));
  merged.propertyType = normalizePropertyType(firstNonEmpty(property?.propertyType, overlay.propertyType));
  merged.type = normalizePropertyType(firstNonEmpty(property?.type, overlay.type));
  merged.regionSlug = firstNonEmpty(property?.regionSlug, overlay.regionSlug) || "";
  merged.areaSlug = firstNonEmpty(property?.areaSlug, overlay.areaSlug) || merged.regionSlug;
  merged.startingPrice =
    parsePriceToAED(property?.startingPrice) && parsePriceToAED(property?.startingPrice) >= 10_000
      ? property.startingPrice
      : overlay.startingPrice;
  const derivedCompletionDate = (() => {
    const explicitCompletion =
      !isWeakCompletion(property?.completionDate) && property?.completionDate
        ? property.completionDate
        : firstNonEmpty(
            overlay.completionDate,
            property?.completionDate,
            property?.completionYear,
            property?.handover,
            property?.handoverDate
          ) || "";

    if (explicitCompletion) return explicitCompletion;
    if (merged.status === "Ready To Move") return "Ready To Move";
    if (merged.status === "Sold-out") return "Completed";
    return "TBA";
  })();

  merged.completionDate = derivedCompletionDate;
  merged.paymentPlan = normalizePaymentPlan(
    overlay?.__manualPatched && overlay?.paymentPlan
      ? overlay.paymentPlan
      : !isWeakText(property?.paymentPlan) && property?.paymentPlan
      ? property.paymentPlan
      : firstNonEmpty(overlay.paymentPlan, property?.paymentPlan)
  );
  merged.unitTypes = normalizeUnitTypes(
    !isWeakText(property?.unitTypes) && property?.unitTypes
      ? property.unitTypes
      : firstNonEmpty(overlay.unitTypes, property?.unitTypes)
  ) || "";
  merged.heroVideo =
    (isVideoUrl(property?.heroVideo) ? property.heroVideo : "") ||
    firstNonEmpty(overlay.heroVideo, property?.heroVideo) ||
    "";
  merged.heroImage =
    !isWeakProjectImage(property?.heroImage) && property?.heroImage
      ? property.heroImage
      : firstNonEmpty(overlay.heroImage, property?.heroImage) || "";
  merged.galleryImages = normalizeMediaItems([
    ...(Array.isArray(property?.galleryImages) ? property.galleryImages : []),
    merged.heroVideo,
    merged.heroImage,
    ...(Array.isArray(overlay.galleryImages) ? overlay.galleryImages : []),
  ]);
  merged.brochureUrl = firstNonEmpty(property?.brochureUrl, overlay.brochureUrl) || "";
  merged.description =
    !isWeakText(property?.description) && property?.description
      ? property.description
      : firstNonEmpty(overlay.description, property?.description) || "";
  merged.descriptionAr =
    !isWeakText(property?.descriptionAr) && property?.descriptionAr
      ? property.descriptionAr
      : firstNonEmpty(overlay.descriptionAr, property?.descriptionAr) || "";
  merged.amenities = mergeAmenityLists(property?.amenities, overlay.amenities);
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
  return Array.from(localDeveloperBySlug.values())
    .filter((developer) => {
      const slug = slugify(developer?.slug);
      const name = slugify(developer?.name);
      const nameAr = slugify(developer?.nameAr);

      if (EXCLUDED_DEVELOPER_SLUGS.has(slug)) return false;

      return [slug, name, nameAr].some((token) => token && activeDeveloperTokens.has(token));
    })
    .map((developer) => mergeDeveloperWithLocalData(developer));
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
