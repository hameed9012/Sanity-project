const ARABIC_INDIC_DIGITS = /[٠-٩]/g;

const toWesternDigits = (value) =>
  String(value || "").replace(ARABIC_INDIC_DIGITS, (digit) =>
    String("٠١٢٣٤٥٦٧٨٩".indexOf(digit))
  );

const toIntOrNull = (value) => {
  if (value === null || value === undefined || value === "") return null;
  const cleaned = toWesternDigits(value).replace(/[^\d]/g, "");
  if (!cleaned) return null;
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : null;
};

const toBedroomsArray = (value) => {
  if (!Array.isArray(value)) return [];
  return value
    .map((entry) => Number(toWesternDigits(entry)))
    .filter((entry) => Number.isFinite(entry));
};

const readArrayParam = (searchParams, key) => {
  const values = searchParams.getAll(key).filter(Boolean);
  if (values.length > 1) return values;

  const single = searchParams.get(key);
  if (!single) return [];

  return String(single)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const clampRange = (min, max) => {
  if (min === null || max === null) return [min, max];
  return min <= max ? [min, max] : [max, min];
};

export function normalizeProjectsFilters(filters = {}) {
  let minPrice = toIntOrNull(filters.minPrice);
  let maxPrice = toIntOrNull(filters.maxPrice);
  let minSize = toIntOrNull(filters.minSize);
  let maxSize = toIntOrNull(filters.maxSize);

  [minPrice, maxPrice] = clampRange(minPrice, maxPrice);
  [minSize, maxSize] = clampRange(minSize, maxSize);

  const search = filters.search ?? filters.q ?? "";

  return {
    ...filters,
    search,
    q: search,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    devStatus: Array.isArray(filters.devStatus)
      ? filters.devStatus.filter(Boolean)
      : [],
    unitTypes: Array.isArray(filters.unitTypes)
      ? filters.unitTypes.filter(Boolean)
      : [],
    bedrooms: toBedroomsArray(filters.bedrooms),
    view: filters.view || "list",
    sort: filters.sort || "newest",
    page: Math.max(1, Number(filters.page || 1)),
    perPage: Math.max(1, Number(filters.perPage || 6)),
  };
}

export function parseProjectsFilters(searchParams) {
  let minPrice = toIntOrNull(searchParams.get("minPrice"));
  let maxPrice = toIntOrNull(searchParams.get("maxPrice"));
  let minSize = toIntOrNull(searchParams.get("minSize"));
  let maxSize = toIntOrNull(searchParams.get("maxSize"));

  [minPrice, maxPrice] = clampRange(minPrice, maxPrice);
  [minSize, maxSize] = clampRange(minSize, maxSize);

  const search = searchParams.get("q") || searchParams.get("search") || "";

  return {
    search,
    q: search,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    devStatus: readArrayParam(searchParams, "devStatus"),
    unitTypes: readArrayParam(searchParams, "unitTypes"),
    bedrooms: toBedroomsArray(readArrayParam(searchParams, "bedrooms")),
    view: searchParams.get("view") || "list",
    sort: searchParams.get("sort") || "newest",
    page: Math.max(1, Number(searchParams.get("page") || 1)),
    perPage: Math.max(1, Number(searchParams.get("perPage") || 6)),
  };
}

export function buildProjectsQuery(filters = {}) {
  const normalized = normalizeProjectsFilters(filters);
  const searchParams = new URLSearchParams();

  if (normalized.search) searchParams.set("q", normalized.search);
  if (normalized.view) searchParams.set("view", normalized.view);
  if (normalized.sort) searchParams.set("sort", normalized.sort);
  if (normalized.page) searchParams.set("page", String(normalized.page));
  if (normalized.perPage) {
    searchParams.set("perPage", String(normalized.perPage));
  }

  if (normalized.minPrice !== null) {
    searchParams.set("minPrice", String(normalized.minPrice));
  }
  if (normalized.maxPrice !== null) {
    searchParams.set("maxPrice", String(normalized.maxPrice));
  }
  if (normalized.minSize !== null) {
    searchParams.set("minSize", String(normalized.minSize));
  }
  if (normalized.maxSize !== null) {
    searchParams.set("maxSize", String(normalized.maxSize));
  }

  normalized.devStatus.forEach((value) => searchParams.append("devStatus", value));
  normalized.unitTypes.forEach((value) => searchParams.append("unitTypes", value));
  normalized.bedrooms.forEach((value) =>
    searchParams.append("bedrooms", String(value))
  );

  return searchParams.toString();
}

export function createLocaleAwareSearch() {
  return (projects = [], searchTerm = "") => {
    const normalizedSearch = String(searchTerm || "").trim().toLowerCase();
    if (!normalizedSearch) return projects;

    return projects.filter((project) =>
      [
        project?.name,
        project?.nameEn,
        project?.nameAr,
        project?.developer,
        project?.developerName,
        project?.location,
        project?.regionSlug,
      ]
        .filter(Boolean)
        .some((value) =>
          String(value).toLowerCase().includes(normalizedSearch)
        )
    );
  };
}

export function getSearchSuggestions(projects = [], searchTerm = "", limit = 5) {
  const normalizedSearch = String(searchTerm || "").trim().toLowerCase();
  if (normalizedSearch.length < 2) return [];

  const suggestions = new Set();

  for (const project of projects) {
    for (const candidate of [
      project?.name,
      project?.nameEn,
      project?.nameAr,
      project?.developer,
      project?.developerName,
      project?.location,
    ]) {
      if (
        candidate &&
        String(candidate).toLowerCase().includes(normalizedSearch)
      ) {
        suggestions.add(candidate);
      }
    }

    if (suggestions.size >= limit) break;
  }

  return Array.from(suggestions).slice(0, limit);
}
