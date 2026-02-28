// src/lib/projectFilters.js

export const defaultProjectFilters = {
  search: "",
  minPrice: "",
  maxPrice: "",
  minSize: "",
  maxSize: "",
  devStatus: [], // ["Completed", "Presale", "Under Construction"]
  unitTypes: [], // ["Apartments", "Villa", "Townhouse", "Duplex", "Penthouse", "Retail"]
  bedrooms: [], // [0,1,2,3,4,5]
  saleStatus: [], // optional, if you add it later
  completionYears: [], // [2025, 2026, ...]
  postHandoverOnly: false,
  minPostHandoverMonths: 1,
};

function parsePrice(startingPrice) {
  if (!startingPrice) return null;
  const digits = startingPrice.toString().replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : null;
}

// If later you have real size fields, plug them here
function parseSize(project) {
  // Placeholder – returns null so size filter is effectively skipped
  return null;
}

function extractBedrooms(bedroomLabel) {
  if (!bedroomLabel) return [];
  const nums = bedroomLabel.match(/\d+/g)?.map(Number) || [];
  if (/studio/i.test(bedroomLabel)) nums.unshift(0);
  return nums;
}

export function applyProjectFilters(projects, filters) {
  return projects.filter((project) => {
    const price = parsePrice(project.startingPrice);
    const size = parseSize(project);
    const bedroomNumbers = extractBedrooms(project.bedrooms);

    // Search (name / developer / location)
    if (filters.search.trim()) {
      const term = filters.search.toLowerCase();
      const haystack = [
        project.name,
        project.developer,
        project.location,
        project.type,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      if (!haystack.includes(term)) return false;
    }

    // Price
    if (filters.minPrice && price !== null && price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && price !== null && price > filters.maxPrice) {
      return false;
    }

    // Size (currently no-op until you have real sizes)
    if (filters.minSize && size !== null && size < filters.minSize) {
      return false;
    }
    if (filters.maxSize && size !== null && size > filters.maxSize) {
      return false;
    }

    // Development status (we map your `status` field)
    if (filters.devStatus.length > 0) {
      const normalized = (project.status || "").toLowerCase();
      const match = filters.devStatus.some((s) =>
        normalized.includes(s.toLowerCase())
      );
      if (!match) return false;
    }

    // Unit type
    if (filters.unitTypes.length > 0) {
      const type = (project.type || "").toLowerCase();
      const match = filters.unitTypes.some((t) =>
        type.includes(t.toLowerCase())
      );
      if (!match) return false;
    }

    // Bedrooms (any overlap)
    if (filters.bedrooms.length > 0 && bedroomNumbers.length > 0) {
      const overlap = bedroomNumbers.some((b) => filters.bedrooms.includes(b));
      if (!overlap) return false;
    }

    // Completion years, saleStatus, posthandover filters:
    // only start enforcing these once you add those fields into regionProjectsIndex

    return true;
  });
}
