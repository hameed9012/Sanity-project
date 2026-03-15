"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const SanityProjectsContext = createContext({ allProjects: [], loading: true });

const VALID_TYPES = new Set(["apartments", "villas", "penthouses", "commercial-retail"]);
const EXCLUDED_DEVELOPER_SLUGS = new Set(["imtiaz", "beyond", "omniyat"]);

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isVideoUrl(url) {
  const clean = String(url || "").split("?")[0].toLowerCase();
  return [".mp4", ".webm", ".mov", ".m4v", ".ogg"].some((ext) => clean.endsWith(ext));
}

function normalizeType(raw) {
  const s = String(raw || "").toLowerCase().trim();
  if (!s) return "apartments";
  if (s.includes("villa")) return "villas";
  if (s.includes("penthouse")) return "penthouses";
  if (s.includes("commercial") || s.includes("retail") || s.includes("office")) {
    return "commercial-retail";
  }
  if (s.includes("apartment") || s.includes("flat") || s.includes("studio")) {
    return "apartments";
  }
  return VALID_TYPES.has(s) ? s : "apartments";
}

function normalizeStatus(raw) {
  const s = String(raw || "").toLowerCase().trim();
  if (["offplan", "off-plan", "off plan", "under construction"].includes(s)) {
    return "Off-plan";
  }
  if (["secondary", "resale", "ready", "ready to move", "ready to move in"].includes(s)) {
    return "Ready To Move";
  }
  if (["sold-out", "sold out", "soldout"].includes(s)) return "Sold-out";
  if (["land", "lands"].includes(s)) return "Land";
  if (["rental", "rent", "for rent"].includes(s)) return "Rental";
  return "Off-plan";
}

function parsePrice(raw) {
  if (raw === null || raw === undefined) return null;

  const value = String(raw).trim().toLowerCase();
  if (!value) return null;

  const numericPart = value.replace(/[^\d.]/g, "");
  let parsed = Number(numericPart);

  if (!Number.isFinite(parsed) || parsed <= 0) return null;

  const compact = value.replace(/\s+/g, "");
  if (/million/.test(value) || /\d(?:\.\d+)?m\b/.test(compact)) {
    parsed *= 1_000_000;
  } else if (/thousand/.test(value) || /\d(?:\.\d+)?k\b/.test(compact)) {
    parsed *= 1_000;
  }

  parsed = Math.round(parsed);
  return parsed >= 10_000 ? parsed : null;
}

function parseYear(raw) {
  const match = String(raw || "").match(/\b(19|20)\d{2}\b/);
  return match ? Number(match[0]) : null;
}

function extractRange(raw) {
  const numbers = String(raw || "")
    .replace(/,/g, "")
    .match(/\d+(\.\d+)?/g)
    ?.map(Number) || [];

  if (!numbers.length) return { min: null, max: null };
  return {
    min: numbers[0] ?? null,
    max: numbers[1] ?? numbers[0] ?? null,
  };
}

function extractBedroomRangeFromPlans(plans) {
  if (!Array.isArray(plans) || plans.length === 0) {
    return { min: null, max: null };
  }

  const values = plans
    .map((plan) => Number(plan?.bedrooms))
    .filter((value) => Number.isFinite(value) && value >= 0);

  if (!values.length) return { min: null, max: null };
  return { min: Math.min(...values), max: Math.max(...values) };
}

function extractSizeRangeFromPlans(plans) {
  if (!Array.isArray(plans) || plans.length === 0) {
    return { min: null, max: null };
  }

  const ranges = plans
    .map((plan) => extractRange(plan?.size))
    .filter((range) => range.min || range.max);

  if (!ranges.length) return { min: null, max: null };

  return {
    min: Math.min(...ranges.map((range) => range.min ?? range.max).filter(Boolean)),
    max: Math.max(...ranges.map((range) => range.max ?? range.min).filter(Boolean)),
  };
}

function extractPostHandoverMonths(raw) {
  const match = String(raw || "").toLowerCase().match(/(\d+)\s*(month|months|yr|yrs|year|years)/);
  if (!match) return null;

  const value = Number(match[1]);
  if (!Number.isFinite(value)) return null;

  const unit = match[2];
  return unit.startsWith("month") ? value : value * 12;
}

function developerToSlug(name) {
  return slugify(
    String(name || "").replace(
      /\s+(realty|properties|developments?|group|real\s+estate)\s*$/i,
      ""
    )
  ) || "unknown";
}

function shouldExcludeDeveloper(value) {
  const token = String(value || "").toLowerCase();
  return Array.from(EXCLUDED_DEVELOPER_SLUGS).some((slug) => token.includes(slug));
}

function inferRegionSlug(location, fallback = "dubai") {
  const primary = String(location || "").split(",")[0].trim();
  return slugify(primary) || fallback;
}

function normalizeNearbyPlaces(nearbyPlaces = []) {
  if (!Array.isArray(nearbyPlaces)) return [];

  return nearbyPlaces
    .map((place) => {
      if (!place) return null;
      const text = place.text || place.name || "";
      const distance = place.distance || "";
      if (!text && !distance) return null;
      return {
        icon: place.icon || "location",
        text: distance ? `${text} - ${distance}` : text,
      };
    })
    .filter(Boolean);
}

function getLegacyGallerySlides(property) {
  const slides = property?.en?.gallery?.slides;
  if (!Array.isArray(slides)) return [];
  return slides
    .map((slide) => (typeof slide === "string" ? slide : slide?.url))
    .filter(Boolean);
}

function getFlatGallerySlides(property) {
  if (!Array.isArray(property?.galleryImages)) return [];
  return property.galleryImages
    .map((image) => image?.url)
    .filter(Boolean);
}

function buildSyntheticPayload({
  title,
  developer,
  location,
  startingPrice,
  completionDate,
  unitTypes,
  backgroundUrl,
  squareImageUrl,
  gallerySlides,
  description,
  brochureUrl,
  amenities,
  floorPlans,
  lat,
  lng,
  nearbyPlaces,
}) {
  return {
    project: {
      name: title,
      developer,
      location,
      startingPrice,
      completionDate,
      type: unitTypes,
    },
    hero: {
      backgroundUrl,
      squareImageUrl,
      companyName: developer,
    },
    intro: {
      title,
      description,
      paragraphs: description ? [description] : [],
      brochures: brochureUrl ? [{ title: "Download Brochure", url: brochureUrl, type: "main" }] : [],
      imgUrl: squareImageUrl || backgroundUrl,
      imgAlt: title,
      stats: [],
    },
    gallery: {
      title: "Project Gallery",
      slides: gallerySlides,
      projectTag: title,
    },
    floorPlans: {
      plans: floorPlans || [],
    },
    amenities: {
      title: "Amenities & Lifestyle",
      amenities: amenities || [],
    },
    location: {
      lat,
      lng,
      address: location,
      proximityFeatures: normalizeNearbyPlaces(nearbyPlaces),
    },
  };
}

function normalizeLegacyProperty(property) {
  const slug = property?.slug || property?._id;
  const project = property?.en?.project || {};
  const hero = property?.en?.hero || {};
  const gallerySlides = getLegacyGallerySlides(property);
  const floorPlans = property?.en?.floorPlans?.plans || [];
  const price =
    (Number.isFinite(property?.priceAED) && property.priceAED > 0
      ? property.priceAED
      : null) ||
    (Number.isFinite(property?.startingPriceAED) && property.startingPriceAED > 0
      ? property.startingPriceAED
      : null) ||
    parsePrice(project?.startingPrice);
  const bedrooms = extractBedroomRangeFromPlans(floorPlans);
  const sizes = extractSizeRangeFromPlans(floorPlans);
  const developer = project?.developer || property?.developer || "";
  const location = project?.location || property?.location || "";
  const rawStatus = project?.status || property?.status || "offplan";
  const normalizedStatus = normalizeStatus(rawStatus);
  const typeSource = property?.type || project?.type || project?.units || "";
  const isLand = normalizedStatus === "Land" || String(typeSource).toLowerCase().includes("land");
  const category = isLand ? "lands" : normalizeType(typeSource);

  return {
    slug,
    href: isLand
      ? `/lands/${slug}`
      : `/properties/${category}/${developerToSlug(developer)}/${slug}`,
    data: buildSyntheticPayload({
      title: project?.name || slug,
      developer,
      location,
      startingPrice: project?.startingPrice || "",
      completionDate: project?.completionDate || "",
      unitTypes: project?.type || category,
      backgroundUrl: hero?.backgroundUrl || gallerySlides[0] || "",
      squareImageUrl: hero?.squareImageUrl || gallerySlides[0] || "",
      gallerySlides,
      description:
        property?.en?.intro?.description ||
        property?.en?.intro?.paragraphs?.[0] ||
        "",
      brochureUrl:
        property?.en?.intro?.brochures?.[0]?.url ||
        property?.en?.floorPlans?.brochureHref ||
        "",
      amenities: property?.en?.amenities?.amenities || [],
      floorPlans,
      lat: property?.en?.location?.lat ?? null,
      lng: property?.en?.location?.lng ?? null,
      nearbyPlaces: property?.en?.location?.proximityFeatures || [],
    }),
    _fromSanity: true,
    isLand,
    regionSlug: property?.regionSlug || property?.areaSlug || inferRegionSlug(location),
    category,
    developerSlug: developerToSlug(developer),
    developer,
    developerNameEn: developer,
    developerNameAr: "",
    nameEn: project?.name || "",
    nameAr: property?.ar?.project?.name || "",
    name: project?.name || property?.ar?.project?.name || "",
    type: category,
    unitType: project?.type || category,
    status: normalizedStatus,
    devStatus: normalizedStatus,
    location,
    image: hero?.backgroundUrl || gallerySlides[0] || "",
    priceAED: price,
    startingPriceAED: price,
    startingPrice: project?.startingPrice || "",
    completionDate: project?.completionDate || "",
    completionYear: parseYear(project?.completionDate),
    handover: project?.completionDate || "",
    minBedrooms: bedrooms.min,
    maxBedrooms: bedrooms.max,
    bedrooms: null,
    sizeSqftMin: sizes.min,
    sizeSqftMax: sizes.max,
    saleStatus: "",
    hasPostHandover: /post[- ]?handover/i.test(project?.paymentPlan || ""),
    postHandoverMonths: extractPostHandoverMonths(project?.paymentPlan),
  };
}

function normalizeFlatProperty(property) {
  const slug = property?.slug || property?._id;
  const developer = property?.developer || "";
  const location = property?.location || "";
  const normalizedStatus = normalizeStatus(property?.status);
  const isLand = normalizedStatus === "Land";
  const propertyType = property?.propertyType || property?.unitTypes || property?.type || "";
  const category = isLand ? "lands" : normalizeType(propertyType);
  const gallerySlides = getFlatGallerySlides(property);
  const backgroundUrl =
    (isVideoUrl(property?.heroVideo) ? property?.heroVideo : "") ||
    property?.heroImage ||
    gallerySlides[0] ||
    "";
  const squareImageUrl = property?.heroImage || gallerySlides[0] || "";
  const price =
    (Number.isFinite(property?.priceAED) && property.priceAED > 0
      ? property.priceAED
      : null) ||
    (Number.isFinite(property?.startingPriceAED) && property.startingPriceAED > 0
      ? property.startingPriceAED
      : null) ||
    parsePrice(property?.startingPrice);
  const bedrooms = extractBedroomRangeFromPlans(property?.floorPlans);
  const sizes = extractSizeRangeFromPlans(property?.floorPlans);

  return {
    slug,
    href: isLand
      ? `/lands/${slug}`
      : `/properties/${category}/${developerToSlug(developer)}/${slug}`,
    data: buildSyntheticPayload({
      title: property?.title || slug,
      developer,
      location,
      startingPrice: property?.startingPrice || "",
      completionDate: property?.completionDate || "",
      unitTypes: property?.unitTypes || category,
      backgroundUrl,
      squareImageUrl,
      gallerySlides,
      description: property?.description || "",
      brochureUrl: property?.brochureUrl || "",
      amenities: property?.amenities || [],
      floorPlans: property?.floorPlans || [],
      lat: property?.lat ?? null,
      lng: property?.lng ?? null,
      nearbyPlaces: property?.nearbyPlaces || [],
    }),
    _fromSanity: true,
    isLand,
    regionSlug: property?.regionSlug || property?.areaSlug || inferRegionSlug(location),
    category,
    developerSlug: developerToSlug(developer),
    developer,
    developerNameEn: developer,
    developerNameAr: "",
    nameEn: property?.title || "",
    nameAr: property?.titleAr || "",
    name: property?.title || property?.titleAr || "",
    type: category,
    unitType: property?.unitTypes || category,
    status: normalizedStatus,
    devStatus: normalizedStatus,
    location,
    image: property?.heroImage || gallerySlides[0] || "",
    priceAED: price,
    startingPriceAED: price,
    startingPrice: property?.startingPrice || "",
    completionDate: property?.completionDate || "",
    completionYear: parseYear(property?.completionDate),
    handover: property?.completionDate || "",
    minBedrooms: bedrooms.min,
    maxBedrooms: bedrooms.max,
    bedrooms: null,
    sizeSqftMin: sizes.min,
    sizeSqftMax: sizes.max,
    saleStatus: "",
    hasPostHandover: /post[- ]?handover/i.test(property?.paymentPlan || ""),
    postHandoverMonths: extractPostHandoverMonths(property?.paymentPlan),
  };
}

function sanityPropertyToEntry(property) {
  if (property?.en?.project || property?.ar?.project) {
    return normalizeLegacyProperty(property);
  }
  return normalizeFlatProperty(property);
}

export function SanityProjectsProvider({ children }) {
  const [sanityProjects, setSanityProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch("/api/sanity-projects", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setSanityProjects(
        Array.isArray(data)
          ? data
              .map(sanityPropertyToEntry)
              .filter(
                (project) =>
                  !shouldExcludeDeveloper(project?.developerSlug) &&
                  !shouldExcludeDeveloper(project?.developer) &&
                  !shouldExcludeDeveloper(project?.developerNameEn)
              )
          : []
      );
    } catch (error) {
      console.error("SanityProjectsContext: failed to fetch", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
    const interval = setInterval(fetchProjects, 30000);
    return () => clearInterval(interval);
  }, [fetchProjects]);

  return (
    <SanityProjectsContext.Provider
      value={{ allProjects: sanityProjects, loading, refresh: fetchProjects }}
    >
      {children}
    </SanityProjectsContext.Provider>
  );
}

export function useAllProjects() {
  return useContext(SanityProjectsContext);
}
