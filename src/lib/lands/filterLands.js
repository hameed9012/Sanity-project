// src/lib/lands/filterLands.js

export function filterLands(lands, filters) {
  if (!Array.isArray(lands)) return { filtered: [], hasActiveFilters: false };

  let filtered = [...lands];
  let hasActiveFilters = false;

  const q = (filters?.search || "").trim().toLowerCase();
  if (q) {
    filtered = filtered.filter((land) => {
      const titleEn = land?.title?.en?.toLowerCase?.() || "";
      const titleAr = land?.title?.ar || "";
      const locEn = land?.location?.en?.toLowerCase?.() || "";
      const locAr = land?.location?.ar || "";
      const slug = land?.slug?.toLowerCase?.() || "";

      return (
        titleEn.includes(q) ||
        titleAr.includes(q) ||
        locEn.includes(q) ||
        locAr.includes(q) ||
        slug.includes(q)
      );
    });
    hasActiveFilters = true;
  }

  const type = filters?.type || "all";
  if (type && type !== "all") {
    filtered = filtered.filter((x) => (x?.type || "").toLowerCase() === type);
    hasActiveFilters = true;
  }

  return { filtered, hasActiveFilters };
}
