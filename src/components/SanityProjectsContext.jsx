"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { regionProjectsIndex } from "@/data/regionProjectsIndex";

const SanityProjectsContext = createContext({ allProjects: regionProjectsIndex, loading: false });

// Normalize Sanity status to match what filter functions expect
function normalizeStatus(raw) {
  const s = (raw || "").toLowerCase().trim();
  if (s === "offplan" || s === "off-plan" || s === "off plan" || s === "under construction") return "Off-plan";
  if (s === "secondary" || s === "resale" || s === "ready") return "Secondary";
  if (s === "sold-out" || s === "sold out" || s === "soldout") return "Sold-out";
  return raw || "Off-plan";
}

function sanityPropertyToEntry(p) {
  const slug = p.slug || p._id;
  const nameEn = p.en?.project?.name || p.name || "";
  const nameAr = p.ar?.project?.name || "";
  const developer = p.en?.project?.developer || p.developer || "";
  const location = p.en?.project?.location || p.location || "";
  const status = normalizeStatus(p.en?.project?.status || p.status || p.type || "Off-plan");
  const image =
    p.en?.hero?.backgroundUrl ||
    p.en?.gallery?.[0]?.url ||
    p.heroImage ||
    "";
  const startingPriceAED = p.en?.project?.startingPrice
    ? parseInt(String(p.en.project.startingPrice).replace(/[^0-9]/g, ""), 10) || null
    : null;
  const category = p.en?.project?.category || p.category || "apartments";
  const developerSlug = developer.toLowerCase().replace(/\s+/g, "-") || "unknown";
  const regionSlug = p.regionSlug || p.en?.project?.regionSlug || "dubailand";
  const href = `/properties/${category}/${developerSlug}/${slug}`;

  return {
    slug,
    href,
    data: p,
    _fromSanity: true,
    regionSlug,
    category,
    developerSlug,
    developer,
    nameEn,
    nameAr,
    name: nameEn || nameAr || "",
    type: p.en?.project?.type || "",
    unitType: p.en?.project?.type || "",
    status,
    devStatus: status,
    location,
    image,
    priceAED: startingPriceAED,
    startingPriceAED,
    completionDate: p.en?.project?.completionDate || "",
    completionYear: p.en?.project?.completionDate
      ? parseInt(p.en.project.completionDate.slice(0, 4), 10) || null
      : null,
    sizeSqftMin: p.en?.project?.sizeSqftMin || null,
    sizeSqftMax: p.en?.project?.sizeSqftMax || null,
    minBedrooms: p.en?.project?.minBedrooms || null,
    maxBedrooms: p.en?.project?.maxBedrooms || null,
    bedrooms: null,
    saleStatus: "",
    hasPostHandover: null,
    postHandoverMonths: null,
  };
}

export function SanityProjectsProvider({ children }) {
  const [sanityProjects, setSanityProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSanityProjects() {
      try {
        const res = await fetch("/api/sanity-projects");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSanityProjects(data.map(sanityPropertyToEntry));
      } catch (e) {
        console.error("SanityProjectsContext: failed to fetch", e);
      } finally {
        setLoading(false);
      }
    }
    fetchSanityProjects();
  }, []);

  // Merge: Sanity projects first (so they appear at top), then static
  // If a Sanity project has same slug as static, Sanity wins
  const staticSlugs = new Set(sanityProjects.map((p) => p.slug));
  const filteredStatic = regionProjectsIndex.filter((p) => !staticSlugs.has(p.slug));
  const allProjects = [...sanityProjects, ...filteredStatic];

  return (
    <SanityProjectsContext.Provider value={{ allProjects, loading }}>
      {children}
    </SanityProjectsContext.Provider>
  );
}

export function useAllProjects() {
  return useContext(SanityProjectsContext);
}