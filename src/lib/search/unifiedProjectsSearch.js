// src/lib/search/unifiedSearchUtils.js
import { regionProjectsIndex } from "@/data/regionProjectsIndex";
import enJSON from "@/i18n/en.json";
import arJSON from "@/i18n/ar.json";

const translationData = {
  en: enJSON || {},
  ar: arJSON || {},
};

// Normalization helpers
const normalizeText = (text) => {
  if (!text) return "";
  return String(text)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
};

// Arabic normalization for better search
const normalizeArabic = (text) => {
  if (!text) return "";
  let normalized = String(text)
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ئ/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  return normalized;
};

// Build searchable text for a project
const buildProjectSearchText = (project) => {
  const texts = [];

  // Basic fields
  const fields = [
    "name",
    "nameEn",
    "nameAr",
    "developer",
    "developerEn",
    "developerAr",
    "developerSlug",
    "location",
    "locationEn",
    "locationAr",
    "region",
    "regionEn",
    "regionAr",
    "regionSlug",
    "unitType",
    "type",
    "category",
    "status",
    "devStatus",
  ];

  fields.forEach((field) => {
    if (project[field]) {
      texts.push(String(project[field]));
      // Also add normalized Arabic version
      if (
        field.includes("Ar") ||
        field === "name" ||
        field === "location" ||
        field === "region"
      ) {
        texts.push(normalizeArabic(project[field]));
      }
    }
  });

  // Add translations from JSON files
  const slug = project.slug;
  const devSlug = project.developerSlug;
  const regionSlug = project.regionSlug;

  if (slug) {
    const enName = translationData.en?.projectNames?.[slug];
    const arName = translationData.ar?.projectNames?.[slug];
    if (enName) texts.push(enName);
    if (arName) {
      texts.push(arName);
      texts.push(normalizeArabic(arName));
    }
  }

  if (devSlug) {
    const enDev = translationData.en?.developers?.[devSlug];
    const arDev = translationData.ar?.developers?.[devSlug];
    if (enDev) texts.push(enDev);
    if (arDev) {
      texts.push(arDev);
      texts.push(normalizeArabic(arDev));
    }
  }

  if (regionSlug) {
    const enRegion = translationData.en?.whereToLive?.[regionSlug]?.name;
    const arRegion = translationData.ar?.whereToLive?.[regionSlug]?.name;
    if (enRegion) texts.push(enRegion);
    if (arRegion) {
      texts.push(arRegion);
      texts.push(normalizeArabic(arRegion));
    }
  }

  return texts.join(" ").toLowerCase();
};

// Filter functions
const filterBySearch = (project, searchTerm) => {
  if (!searchTerm) return true;

  const searchText = buildProjectSearchText(project);
  const normalizedSearch = normalizeText(searchTerm);
  const normalizedArabicSearch = normalizeArabic(searchTerm);

  return (
    searchText.includes(normalizedSearch) ||
    searchText.includes(normalizedArabicSearch)
  );
};

const filterByPrice = (project, minPrice, maxPrice) => {
  const price = project.priceAED ?? project.startingPriceAED ?? null;
  if (price === null) return false;

  if (minPrice !== null && price < minPrice) return false;
  if (maxPrice !== null && price > maxPrice) return false;
  return true;
};

const filterBySize = (project, minSize, maxSize) => {
  const min = project.sizeSqftMin ?? null;
  const max = project.sizeSqftMax ?? null;

  if (min === null && max === null) return false;

  const projectMin = min ?? max;
  const projectMax = max ?? min;

  if (minSize !== null && projectMax < minSize) return false;
  if (maxSize !== null && projectMin > maxSize) return false;
  return true;
};

const filterByBedrooms = (project, bedrooms) => {
  if (!bedrooms?.length) return true;

  // Handle non-residential
  if (project.bedrooms && typeof project.bedrooms === "string") {
    return bedrooms.some((b) => project.bedrooms.includes(String(b)));
  }

  const min = project.minBedrooms ?? null;
  const max = project.maxBedrooms ?? null;

  if (min === null && max === null) return false;

  const projectMin = min ?? max;
  const projectMax = max ?? min;

  return bedrooms.some((b) => {
    const bedNum = Number(b);
    if (bedNum === 5) return projectMax >= 5;
    return bedNum >= projectMin && bedNum <= projectMax;
  });
};

const filterByDevStatus = (project, devStatus) => {
  if (!devStatus?.length) return true;
  const status = project.devStatus || project.status || "";
  return devStatus.includes(status);
};

const filterByUnitType = (project, unitTypes) => {
  if (!unitTypes?.length) return true;
  const type = project.unitType || project.type || "";
  return unitTypes.includes(type);
};

// Main filter function
export const filterProjects = (filters = {}) => {
  const {
    search = "",
    minPrice = null,
    maxPrice = null,
    minSize = null,
    maxSize = null,
    bedrooms = [],
    devStatus = [],
    unitTypes = [],
    sort = "newest",
  } = filters;

  const filtered = regionProjectsIndex.filter((project) => {
    if (!filterBySearch(project, search)) return false;
    if (!filterByPrice(project, minPrice, maxPrice)) return false;
    if (!filterBySize(project, minSize, maxSize)) return false;
    if (!filterByBedrooms(project, bedrooms)) return false;
    if (!filterByDevStatus(project, devStatus)) return false;
    if (!filterByUnitType(project, unitTypes)) return false;
    return true;
  });

  // Sorting
  return filtered.sort((a, b) => {
    switch (sort) {
      case "priceAsc": {
        const priceA = a.priceAED ?? a.startingPriceAED ?? Infinity;
        const priceB = b.priceAED ?? b.startingPriceAED ?? Infinity;
        return priceA - priceB;
      }
      case "priceDesc": {
        const priceA = a.priceAED ?? a.startingPriceAED ?? -Infinity;
        const priceB = b.priceAED ?? b.startingPriceAED ?? -Infinity;
        return priceB - priceA;
      }
      case "sizeAsc": {
        const sizeA = a.sizeSqftMin ?? a.sizeSqftMax ?? Infinity;
        const sizeB = b.sizeSqftMin ?? b.sizeSqftMax ?? Infinity;
        return sizeA - sizeB;
      }
      case "sizeDesc": {
        const sizeA = a.sizeSqftMin ?? a.sizeSqftMax ?? -Infinity;
        const sizeB = b.sizeSqftMin ?? b.sizeSqftMax ?? -Infinity;
        return sizeB - sizeA;
      }
      case "newest":
      default: {
        const yearA = a.completionYear ?? -Infinity;
        const yearB = b.completionYear ?? -Infinity;
        return yearB - yearA;
      }
    }
  });
};

// URL parameter handling
export const parseSearchParams = (searchParams) => {
  if (!searchParams) return {};

  const params = new URLSearchParams(searchParams.toString());

  const getArray = (key) => {
    const value = params.get(key);
    if (!value) return [];
    return value.split(",").filter(Boolean);
  };

  const getNumber = (key) => {
    const value = params.get(key);
    if (!value) return null;
    const num = Number(value);
    return isNaN(num) ? null : num;
  };

  return {
    search: params.get("q") || params.get("search") || "",
    minPrice: getNumber("minPrice"),
    maxPrice: getNumber("maxPrice"),
    minSize: getNumber("minSize"),
    maxSize: getNumber("maxSize"),
    bedrooms: getArray("bedrooms")
      .map(Number)
      .filter((n) => !isNaN(n)),
    devStatus: getArray("devStatus"),
    unitTypes: getArray("unitTypes"),
    view: params.get("view") || "list",
    sort: params.get("sort") || "newest",
    page: Math.max(1, Number(params.get("page") || 1)),
    perPage: Math.max(1, Number(params.get("perPage") || 6)),
  };
};

export const buildSearchQuery = (filters) => {
  const params = new URLSearchParams();

  if (filters.search) params.set("q", filters.search);
  if (filters.minPrice !== null)
    params.set("minPrice", filters.minPrice.toString());
  if (filters.maxPrice !== null)
    params.set("maxPrice", filters.maxPrice.toString());
  if (filters.minSize !== null)
    params.set("minSize", filters.minSize.toString());
  if (filters.maxSize !== null)
    params.set("maxSize", filters.maxSize.toString());

  if (filters.bedrooms?.length)
    params.set("bedrooms", filters.bedrooms.join(","));
  if (filters.devStatus?.length)
    params.set("devStatus", filters.devStatus.join(","));
  if (filters.unitTypes?.length)
    params.set("unitTypes", filters.unitTypes.join(","));

  if (filters.view) params.set("view", filters.view);
  if (filters.sort) params.set("sort", filters.sort);
  if (filters.page > 1) params.set("page", filters.page.toString());

  return params.toString();
};
