// src/lib/whereToLive/filterWhereToLive.js

export function filterWhereToLive(areas, filters) {
  if (!areas || !Array.isArray(areas))
    return { filtered: [], hasActiveFilters: false };

  let filtered = [...areas];
  let hasActiveFilters = false;

  if (filters.search?.trim()) {
    const s = filters.search.toLowerCase().trim();
    filtered = filtered.filter((area) => {
      const name = String(area.name || "").toLowerCase();
      const location = String(area.location || "").toLowerCase();
      const id = String(area.id || "").toLowerCase();
      const roi = String(area.roi || "").toLowerCase();
      return name.includes(s) || location.includes(s) || id.includes(s) || roi.includes(s);
    });
    hasActiveFilters = true;
  }

  if (filters.avgBuy) hasActiveFilters = true;
  if (filters.avgRent) hasActiveFilters = true;
  if (filters.roi) hasActiveFilters = true;

  return { filtered, hasActiveFilters };
}