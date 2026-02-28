// src/lib/search/projectsSearch.js
import { regionProjectsIndex } from "@/data/regionProjectsIndex";

// ✅ IMPORTANT: adjust these paths to match YOUR project
import enJSON from "@/i18n/en.json";
import arJSON from "@/i18n/ar.json";

/* =============================================================================
   EN/AR NORMALIZERS (MUST be defined BEFORE reverse maps)
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

  // remove tashkeel/diacritics
  t = t.replace(ARABIC_DIACRITICS, "");

  // normalize Arabic letter variants
  t = t
    .replace(/أ|إ|آ/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى|ئ/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ـ/g, "");

  return t;
}

function normalizeText(s) {
  if (!s) return "";
  const western = toWesternDigits(s);
  const arNorm = normalizeArabic(western);

  // keep letters+numbers (all langs), normalize spaces, lowercase (English)
  return arNorm
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function makeCompact(s) {
  // remove all spaces/punct, keep only letters/digits (English+Arabic)
  return normalizeText(s).replace(/[^a-z0-9\u0600-\u06FF]/g, "");
}

function safeTrim(s) {
  return typeof s === "string" ? s.trim() : "";
}

function safeLower(s) {
  return typeof s === "string" ? s.trim().toLowerCase() : "";
}

/* =============================================================================
   TRANSLATIONS SOURCE (en.json + ar.json)
============================================================================= */

const translationData = {
  en: enJSON || {},
  ar: arJSON || {},
};

/* =============================================================================
   REVERSE LOOKUP MAPS (initialize once) - FIXED
   ✅ IMPORTANT: reverse keys must be built using SAME normalization as search
============================================================================= */

let reverseProjectMap = Object.create(null);
let reverseDeveloperMap = Object.create(null);
let reverseRegionMap = Object.create(null);

// Use the same normalizer as search so: "العقارية" == "العقاريه" in lookup
const mapKey = (s) => normalizeText(s); // you can swap to makeCompact(s) if you want ultra-fuzzy

function initializeReverseMaps() {
  if (Object.keys(reverseProjectMap).length) return;

  // -------- Projects (projectNames) --------
  reverseProjectMap = Object.create(null);
  const enProjects = translationData.en?.projectNames || {};
  const arProjects = translationData.ar?.projectNames || {};

  for (const [key, value] of Object.entries(enProjects)) {
    const k = mapKey(value);
    if (k) reverseProjectMap[k] = key;
  }
  for (const [key, value] of Object.entries(arProjects)) {
    const k = mapKey(value);
    if (k) reverseProjectMap[k] = key;
  }

  // -------- Developers (developers) --------
  reverseDeveloperMap = Object.create(null);
  const enDevelopers = translationData.en?.developers || {};
  const arDevelopers = translationData.ar?.developers || {};

  for (const [key, value] of Object.entries(enDevelopers)) {
    const k = mapKey(value);
    if (k) reverseDeveloperMap[k] = key;
  }
  for (const [key, value] of Object.entries(arDevelopers)) {
    const k = mapKey(value);
    if (k) reverseDeveloperMap[k] = key;
  }

  // -------- Regions (whereToLive.*.name) --------
  reverseRegionMap = Object.create(null);
  const enRegions = translationData.en?.whereToLive || {};
  const arRegions = translationData.ar?.whereToLive || {};

  for (const [regionKey, regionData] of Object.entries(enRegions)) {
    const name = regionData?.name;
    const k = mapKey(name);
    if (k) reverseRegionMap[k] = regionKey;
  }
  for (const [regionKey, regionData] of Object.entries(arRegions)) {
    const name = regionData?.name;
    const k = mapKey(name);
    if (k) reverseRegionMap[k] = regionKey;
  }
}

initializeReverseMaps();

/* =============================================================================
   SEARCH TEXTS (project + translations) - FIXED (slug aware + normalized lookups)
============================================================================= */

// helper: safely push string
function pushIfText(arr, v) {
  if (typeof v === "string" && v.trim()) arr.push(v.trim());
}

// Collect translations for a project (project name + developer + region)
function getProjectSearchTexts(project) {
  const texts = [];

  // 1) original string fields from project object
  const fields = [
    "nameEn",
    "nameAr",
    "name",
    "titleEn",
    "titleAr",
    "title",
    "slug",
    "developerEn",
    "developerAr",
    "developer",
    "developerNameEn",
    "developerNameAr",
    "developerSlug",
    "location",
    "locationEn",
    "locationAr",
    "region",
    "regionEn",
    "regionAr",
    "regionSlug",
    "community",
    "communityEn",
    "communityAr",
    "area",
    "areaEn",
    "areaAr",
    "district",
    "districtEn",
    "districtAr",
    "address",
    "addressEn",
    "addressAr",
    "descriptionEn",
    "descriptionAr",
    "keywords",
    "tags",
  ];

  for (const field of fields) {
    pushIfText(texts, project?.[field]);
  }

  // 2) add translated projectName from en.json/ar.json
  //    - try infer by project.name/nameEn
  //    - also try direct key by slug if you store projectKey in data (optional)
  const projectName = project?.nameEn || project?.name || "";
  const projectKey =
    reverseProjectMap[mapKey(projectName)] || safeLower(project?.projectKey); // optional

  if (projectKey) {
    pushIfText(texts, translationData.en?.projectNames?.[projectKey]);
    pushIfText(texts, translationData.ar?.projectNames?.[projectKey]);
  }

  // 3) developer translations
  //    - if you have developerSlug and it matches keys in en/ar json => use it directly
  const developerSlug = safeLower(project?.developerSlug);
  const developerName =
    project?.developerEn ||
    project?.developer ||
    project?.developerNameEn ||
    project?.developerNameAr ||
    "";

  const developerKey =
    (developerSlug &&
    (translationData.en?.developers?.[developerSlug] ||
      translationData.ar?.developers?.[developerSlug])
      ? developerSlug
      : null) || reverseDeveloperMap[mapKey(developerName)];

  if (developerKey) {
    pushIfText(texts, translationData.en?.developers?.[developerKey]);
    pushIfText(texts, translationData.ar?.developers?.[developerKey]);
  }

  // 4) region translations
  //    - if you have regionSlug and it matches whereToLive keys => use it directly
  const regionSlug = safeLower(project?.regionSlug);
  const regionName =
    project?.regionEn ||
    project?.region ||
    project?.communityEn ||
    project?.community ||
    project?.areaEn ||
    project?.area ||
    "";

  const regionKey =
    (regionSlug &&
    (translationData.en?.whereToLive?.[regionSlug] ||
      translationData.ar?.whereToLive?.[regionSlug])
      ? regionSlug
      : null) || reverseRegionMap[mapKey(regionName)];

  if (regionKey) {
    pushIfText(texts, translationData.en?.whereToLive?.[regionKey]?.name);
    pushIfText(texts, translationData.ar?.whereToLive?.[regionKey]?.name);
  }

  return Array.from(new Set(texts.filter(Boolean)));
}

/* =============================================================================
   FILTERS NORMALIZATION
============================================================================= */

function toIntOrNull(v) {
  if (v === null || v === undefined || v === "") return null;
  const western = toWesternDigits(v);
  const cleaned = String(western).replace(/[^\d]/g, "");
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function clampMinMax(min, max) {
  if (min === null && max === null) return [null, null];
  if (min === null) return [null, max];
  if (max === null) return [min, null];
  return min <= max ? [min, max] : [max, min];
}

function normalizeFilters(filters = {}) {
  const search = filters.search ?? filters.q ?? "";

  let minPrice = toIntOrNull(filters.minPrice);
  let maxPrice = toIntOrNull(filters.maxPrice);
  let minSize = toIntOrNull(filters.minSize);
  let maxSize = toIntOrNull(filters.maxSize);

  [minPrice, maxPrice] = clampMinMax(minPrice, maxPrice);
  [minSize, maxSize] = clampMinMax(minSize, maxSize);

  const bedrooms = (filters.bedrooms || [])
    .map((x) => Number(toWesternDigits(x)))
    .filter((n) => Number.isFinite(n));

  return {
    ...filters,
    q: search,
    search,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    devStatus: (filters.devStatus || []).filter(Boolean),
    unitTypes: (filters.unitTypes || []).filter(Boolean),
    bedrooms,
    view: filters.view || "list",
    sort: filters.sort || "newest",
    page: Math.max(1, Number(filters.page || 1)),
    perPage: Math.max(1, Number(filters.perPage || 6)),
  };
}

/* =============================================================================
   URL <-> FILTERS
============================================================================= */

function readArrayParam(sp, key) {
  const all = sp.getAll(key).filter(Boolean);
  if (all.length > 1) return all;

  const single = sp.get(key);
  if (!single) return [];

  if (String(single).includes(",")) {
    return String(single)
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
  }

  return [single];
}

export function parseProjectsFilters(searchParams) {
  const sp = searchParams;

  const search = sp.get("q") || sp.get("search") || "";
  const view = sp.get("view") || "list";
  const sort = sp.get("sort") || "newest";
  const page = Math.max(1, Number(sp.get("page") || 1));
  const perPage = Math.max(1, Number(sp.get("perPage") || 6));

  let minPrice = toIntOrNull(sp.get("minPrice"));
  let maxPrice = toIntOrNull(sp.get("maxPrice"));
  let minSize = toIntOrNull(sp.get("minSize"));
  let maxSize = toIntOrNull(sp.get("maxSize"));

  [minPrice, maxPrice] = clampMinMax(minPrice, maxPrice);
  [minSize, maxSize] = clampMinMax(minSize, maxSize);

  const devStatus = readArrayParam(sp, "devStatus");
  const unitTypes = readArrayParam(sp, "unitTypes");

  const bedrooms = readArrayParam(sp, "bedrooms")
    .map((x) => Number(toWesternDigits(x)))
    .filter((n) => Number.isFinite(n));

  return {
    search,
    q: search,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    devStatus,
    unitTypes,
    bedrooms,
    view,
    sort,
    page,
    perPage,
  };
}

export function buildProjectsQuery(filters) {
  const f = normalizeFilters(filters);
  const sp = new URLSearchParams();

  if (f.search) sp.set("q", f.search);

  if (f.view) sp.set("view", f.view);
  if (f.sort) sp.set("sort", f.sort);
  if (f.page) sp.set("page", String(f.page));
  if (f.perPage) sp.set("perPage", String(f.perPage));

  if (f.minPrice !== null) sp.set("minPrice", String(f.minPrice));
  if (f.maxPrice !== null) sp.set("maxPrice", String(f.maxPrice));

  if (f.minSize !== null) sp.set("minSize", String(f.minSize));
  if (f.maxSize !== null) sp.set("maxSize", String(f.maxSize));

  (f.devStatus || []).forEach((v) => sp.append("devStatus", v));
  (f.unitTypes || []).forEach((v) => sp.append("unitTypes", v));
  (f.bedrooms || []).forEach((v) => sp.append("bedrooms", String(v)));

  return sp.toString();
}

/* =============================================================================
   TEXT SEARCH (EN/AR) — DEEP + TRANSLATION-AWARE
============================================================================= */

function collectBaseSearchStrings(obj, maxDepth = 3) {
  const out = [];
  const seen = new Set();

  const walk = (v, depth) => {
    if (v === null || v === undefined) return;
    if (depth > maxDepth) return;

    if (typeof v === "string") {
      const s = v.trim();
      if (s) out.push(s);
      return;
    }

    if (typeof v === "number") {
      out.push(String(v));
      return;
    }

    if (Array.isArray(v)) {
      for (const item of v) walk(item, depth + 1);
      return;
    }

    if (typeof v === "object") {
      if (seen.has(v)) return;
      seen.add(v);

      const priorityKeys = [
        "nameEn",
        "nameAr",
        "name",
        "titleEn",
        "titleAr",
        "title",
        "slug",
        "developer",
        "developerEn",
        "developerAr",
        "developerNameEn",
        "developerNameAr",
        "developerSlug",
        "location",
        "locationEn",
        "locationAr",
        "region",
        "regionEn",
        "regionAr",
        "regionSlug",
        "community",
        "communityEn",
        "communityAr",
        "area",
        "areaEn",
        "areaAr",
        "district",
        "districtEn",
        "districtAr",
        "address",
        "addressEn",
        "addressAr",
        "unitType",
        "type",
        "category",
        "status",
        "devStatus",
      ];

      for (const k of priorityKeys) {
        if (k in v) walk(v[k], depth + 1);
      }

      for (const [k, val] of Object.entries(v)) {
        if (priorityKeys.includes(k)) continue;
        if (typeof val === "string") walk(val, depth + 1);
      }

      for (const val of Object.values(v)) {
        if (typeof val === "object") walk(val, depth + 1);
      }
    }
  };

  walk(obj, 0);
  return out;
}

function collectAllSearchStrings(project) {
  const baseTexts = collectBaseSearchStrings(project);
  const translationTexts = getProjectSearchTexts(project);
  return Array.from(new Set([...baseTexts, ...translationTexts]));
}

function matchesText(project, q) {
  const qNorm = normalizeText(q);
  if (!qNorm) return true;

  const tokens = qNorm.split(" ").filter(Boolean);
  if (!tokens.length) return true;

  const allTexts = collectAllSearchStrings(project);
  const hayJoined = allTexts.join(" | ");

  const hayNorm = normalizeText(hayJoined);
  const hayCompact = makeCompact(hayJoined);

  // 1) exact token match
  if (tokens.every((t) => hayNorm.includes(t))) return true;

  // 2) compact match (Arabic/English without spaces)
  const qCompact = makeCompact(qNorm);
  if (qCompact && hayCompact.includes(qCompact)) return true;

  // 3) partial token match
  const partialOk = tokens.every((t) => {
    const tCompact = makeCompact(t);
    if (!tCompact) return true;
    if (hayCompact.includes(tCompact)) return true;
    return allTexts.some((txt) => normalizeText(txt).includes(t));
  });
  if (partialOk) return true;

  // 4) acronym/initials (JVC -> Jumeirah Village Circle)
  const qLettersOnly = qCompact.replace(/[^a-z\u0600-\u06FF]/g, "");
  if (qLettersOnly.length >= 2) {
    const acronymMatch = allTexts.some((text) => {
      const words = normalizeText(text).split(/\s+/).filter(Boolean);
      if (!words.length) return false;
      const firstLetters = words.map((w) => w.charAt(0)).join("");
      return (
        firstLetters.includes(qLettersOnly) ||
        qLettersOnly.includes(firstLetters)
      );
    });
    if (acronymMatch) return true;
  }

  return false;
}

/* =============================================================================
   OTHER FILTERS
============================================================================= */

function matchesDevStatus(project, arr) {
  if (!arr?.length) return true;
  return arr.includes(project.devStatus || project.status || "");
}

function matchesUnitType(project, arr) {
  if (!arr?.length) return true;
  return arr.includes(project.unitType || project.type || "");
}

function matchesPrice(project, minPrice, maxPrice) {
  if (minPrice === null && maxPrice === null) return true;

  const price =
    project.priceAED ??
    project.startingPriceAED ??
    project.startingPrice ??
    null;

  if (!Number.isFinite(price)) return false;

  if (minPrice !== null && price < minPrice) return false;
  if (maxPrice !== null && price > maxPrice) return false;

  return true;
}

function rangeIntersects(aMin, aMax, bMin, bMax) {
  if (!Number.isFinite(aMin) && !Number.isFinite(aMax)) return false;

  const min = Number.isFinite(aMin) ? aMin : aMax;
  const max = Number.isFinite(aMax) ? aMax : aMin;

  if (!Number.isFinite(min) || !Number.isFinite(max)) return false;

  if (bMin !== null && max < bMin) return false;
  if (bMax !== null && min > bMax) return false;
  return true;
}

function matchesSize(project, minSize, maxSize) {
  if (minSize === null && maxSize === null) return true;
  return rangeIntersects(
    project.sizeSqftMin,
    project.sizeSqftMax,
    minSize,
    maxSize
  );
}

function matchesBedrooms(project, selected) {
  if (!selected?.length) return true;

  const minB = project.minBedrooms;
  const maxB = project.maxBedrooms;

  if (!Number.isFinite(minB) && !Number.isFinite(maxB)) return false;

  const aMin = Number.isFinite(minB) ? minB : maxB;
  const aMax = Number.isFinite(maxB) ? maxB : minB;

  return selected.some((b) => {
    if (b === 5) return aMax >= 5; // 5+ bucket
    return b >= aMin && b <= aMax;
  });
}

/* =============================================================================
   SORTING
============================================================================= */

function sortProjects(list, sortKey) {
  const arr = [...list];

  const byCompletionNewest = (a, b) => {
    const ya = a.completionYear ?? -Infinity;
    const yb = b.completionYear ?? -Infinity;
    if (yb !== ya) return yb - ya;

    return String(a.nameEn || a.name || "").localeCompare(
      String(b.nameEn || b.name || "")
    );
  };

  const byPrice = (dir) => (a, b) => {
    const pa = a.priceAED ?? a.startingPriceAED ?? Infinity;
    const pb = b.priceAED ?? b.startingPriceAED ?? Infinity;
    if (pa !== pb) return dir === "asc" ? pa - pb : pb - pa;
    return byCompletionNewest(a, b);
  };

  const bySize = (dir) => (a, b) => {
    const sa = a.sizeSqftMin ?? Infinity;
    const sb = b.sizeSqftMin ?? Infinity;
    if (sa !== sb) return dir === "asc" ? sa - sb : sb - sa;
    return byCompletionNewest(a, b);
  };

  if (sortKey === "priceAsc") return arr.sort(byPrice("asc"));
  if (sortKey === "priceDesc") return arr.sort(byPrice("desc"));
  if (sortKey === "sizeAsc") return arr.sort(bySize("asc"));
  if (sortKey === "sizeDesc") return arr.sort(bySize("desc"));

  return arr.sort(byCompletionNewest);
}

/* =============================================================================
   MAIN: FILTER FULL INDEX (translation-aware)
============================================================================= */

export function filterProjects(filters) {
  const f = normalizeFilters(filters);
  const all = regionProjectsIndex || [];

  const filtered = all.filter((p) => {
    return (
      matchesText(p, f.search) &&
      matchesDevStatus(p, f.devStatus) &&
      matchesUnitType(p, f.unitTypes) &&
      matchesPrice(p, f.minPrice, f.maxPrice) &&
      matchesSize(p, f.minSize, f.maxSize) &&
      matchesBedrooms(p, f.bedrooms)
    );
  });

  return sortProjects(filtered, f.sort);
}

/* =============================================================================
   CLIENT HELPERS
============================================================================= */

export function createLocaleAwareSearch(locale = "en") {
  return (projects, searchTerm) => {
    if (!searchTerm || !searchTerm.trim()) return projects;
    const f = normalizeFilters({ search: searchTerm });
    return projects.filter((p) => matchesText(p, f.search));
  };
}

export function getSearchSuggestions(searchTerm, limit = 5) {
  if (!searchTerm || searchTerm.trim().length < 2) return [];

  const all = regionProjectsIndex || [];
  const qNorm = normalizeText(searchTerm);
  const suggestions = new Set();

  for (const project of all) {
    const texts = collectAllSearchStrings(project);
    const hayNorm = normalizeText(texts.join(" "));

    if (!hayNorm.includes(qNorm)) continue;

    const nameEn = project.nameEn || project.name;
    const nameAr = project.nameAr;
    if (nameEn) suggestions.add(nameEn);
    if (nameAr) suggestions.add(nameAr);

    const devEn =
      project.developerEn || project.developer || project.developerNameEn;
    const devAr = project.developerAr || project.developerNameAr;
    if (devEn) suggestions.add(devEn);
    if (devAr) suggestions.add(devAr);

    const locEn =
      project.locationEn ||
      project.location ||
      project.regionEn ||
      project.region;
    const locAr = project.locationAr || project.regionAr;
    if (locEn) suggestions.add(locEn);
    if (locAr) suggestions.add(locAr);
  }

  return Array.from(suggestions).slice(0, limit);
}
