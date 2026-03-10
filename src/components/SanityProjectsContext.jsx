"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const SanityProjectsContext = createContext({ allProjects: [], loading: true });

// ─── Type normalization ───────────────────────────────────────
// Only 4 allowed types on properties page
const VALID_TYPES = new Set(["apartments", "villas", "penthouses", "commercial-retail"]);

function normalizeType(raw) {
  const s = (raw || "").toLowerCase().trim();
  if (s.includes("villa"))      return "villas";
  if (s.includes("penthouse"))  return "penthouses";
  if (s.includes("commercial") || s.includes("retail") || s.includes("office")) return "commercial-retail";
  if (s.includes("apartment") || s.includes("flat") || s.includes("studio")) return "apartments";
  // No "mixed use" — if something was tagged that way, default to apartments
  return VALID_TYPES.has(s) ? s : "apartments";
}

function normalizeStatus(raw) {
  const s = (raw || "").toLowerCase().trim();
  if (s === "offplan" || s === "off-plan" || s === "off plan" || s === "under construction") return "Off-plan";
  if (s === "secondary" || s === "resale" || s === "ready") return "Secondary";
  if (s === "sold-out" || s === "sold out" || s === "soldout") return "Sold-out";
  if (s === "land" || s === "lands") return "Land";
  return "Off-plan";
}

// ─── Image/video resolution ───────────────────────────────────
function resolveMediaUrl(p) {
  // Priority: hero backgroundUrl → gallery slides → fallback
  const bg = p.en?.hero?.backgroundUrl || "";
  if (bg) return bg;
  const slides = p.en?.gallery?.slides;
  if (Array.isArray(slides) && slides.length > 0) {
    const first = slides[0];
    return typeof first === "string" ? first : (first?.url || "");
  }
  return "";
}

// ─── Developer slug normalization ────────────────────────────
function developerToSlug(name) {
  return (name || "")
    .toLowerCase()
    .replace(/\s+(realty|properties|developments?|group|real\s+estate)\s*$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "unknown";
}

// ─── Main normalizer ──────────────────────────────────────────
function sanityPropertyToEntry(p) {
  const slug       = p.slug || p._id;
  const nameEn     = p.en?.project?.name     || p.name     || "";
  const nameAr     = p.ar?.project?.name     || "";
  const developer  = p.en?.project?.developer || p.developer || "";
  const location   = p.en?.project?.location  || p.location  || "";
  const rawStatus  = p.en?.project?.status    || p.status    || "offplan";
  const status     = normalizeStatus(rawStatus);

  // ── Lands go to /lands only, never to /properties ──────────
  const isLand = status === "Land" || (p.type || "").toLowerCase().includes("land");

  const rawType   = p.type || p.en?.project?.type || "apartments";
  const category  = isLand ? "lands" : normalizeType(rawType);

  const developerSlug = developerToSlug(developer);
  const regionSlug    = p.regionSlug || "dubai";

  // ── href ────────────────────────────────────────────────────
  const href = isLand
    ? `/lands/${slug}`
    : `/properties/${category}/${developerSlug}/${slug}`;

  // ── Media ───────────────────────────────────────────────────
  const image = resolveMediaUrl(p);

  // ── Price ───────────────────────────────────────────────────
  const rawPrice = p.en?.project?.startingPrice || "";
  const startingPriceAED = rawPrice
    ? parseInt(String(rawPrice).replace(/[^0-9]/g, ""), 10) || null
    : null;

  // ── Handover / completion ───────────────────────────────────
  const completionDate = p.en?.project?.completionDate || "";
  const completionYear = completionDate
    ? parseInt(completionDate.slice(0, 4), 10) || null
    : null;

  return {
    slug,
    href,
    data: p,
    _fromSanity: true,
    isLand,

    // Identifiers
    regionSlug,
    category,
    developerSlug,
    developer,
    nameEn,
    nameAr,
    name: nameEn || nameAr || "",

    // Type — NEVER "mixed use"
    type:     category,
    unitType: p.en?.project?.type || category,

    // Status
    status,
    devStatus: status,

    // Location
    location,

    // Media
    image,

    // Pricing
    priceAED:          startingPriceAED,
    startingPriceAED,
    startingPrice:     rawPrice,

    // Handover (shown on card)
    completionDate,
    completionYear,
    handover: completionDate || "",

    // Bedrooms / size — populated from floor plan data if present
    minBedrooms: p.en?.project?.minBedrooms ?? extractMinBedrooms(p) ?? null,
    maxBedrooms: p.en?.project?.maxBedrooms ?? extractMaxBedrooms(p) ?? null,
    bedrooms:    null,
    sizeSqftMin: null,
    sizeSqftMax: null,

    saleStatus:       "",
    hasPostHandover:  null,
    postHandoverMonths: null,
  };
}

// Extract min/max bedrooms from floor plans if project fields don't have them
function extractMinBedrooms(p) {
  const plans = p.en?.floorPlans?.plans;
  if (!Array.isArray(plans) || plans.length === 0) return null;
  const nums = plans.map((pl) => Number(pl.bedrooms)).filter((n) => !isNaN(n) && n >= 0);
  return nums.length > 0 ? Math.min(...nums) : null;
}
function extractMaxBedrooms(p) {
  const plans = p.en?.floorPlans?.plans;
  if (!Array.isArray(plans) || plans.length === 0) return null;
  const nums = plans.map((pl) => Number(pl.bedrooms)).filter((n) => !isNaN(n) && n >= 0);
  return nums.length > 0 ? Math.max(...nums) : null;
}

// ─── Provider ────────────────────────────────────────────────
export function SanityProjectsProvider({ children }) {
  const [sanityProjects, setSanityProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch("/api/sanity-projects", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setSanityProjects(data.map(sanityPropertyToEntry));
    } catch (e) {
      console.error("SanityProjectsContext: failed to fetch", e);
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
    <SanityProjectsContext.Provider value={{ allProjects: sanityProjects, loading, refresh: fetchProjects }}>
      {children}
    </SanityProjectsContext.Provider>
  );
}

export function useAllProjects() {
  return useContext(SanityProjectsContext);
}