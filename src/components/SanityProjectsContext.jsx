"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

// ✅ Sanity-only: no static fallback
const SanityProjectsContext = createContext({ allProjects: [], loading: true });

function normalizeStatus(raw) {
  const s = (raw || "").toLowerCase().trim();
  if (s === "offplan" || s === "off-plan" || s === "off plan" || s === "under construction") return "Off-plan";
  if (s === "secondary" || s === "resale" || s === "ready") return "Secondary";
  if (s === "sold-out" || s === "sold out" || s === "soldout") return "Sold-out";
  if (s === "land" || s === "lands") return "Land";
  return raw || "Off-plan";
}

function sanityPropertyToEntry(p) {
  const slug = p.slug || p._id;
  const nameEn = p.en?.project?.name || p.name || "";
  const nameAr = p.ar?.project?.name || "";
  const developer = p.en?.project?.developer || p.developer || "";
  const location = p.en?.project?.location || p.location || "";
  const status = normalizeStatus(p.en?.project?.status || p.status || p.type || "Off-plan");
  const image = p.en?.hero?.backgroundUrl || p.en?.gallery?.[0]?.url || p.heroImage || "";
  const startingPriceAED = p.en?.project?.startingPrice
    ? parseInt(String(p.en.project.startingPrice).replace(/[^0-9]/g, ""), 10) || null
    : null;
  const category = p.en?.project?.category || p.category || "apartments";
  const developerSlug = developer.toLowerCase().replace(/\s+/g, "-") || "unknown";
  const regionSlug = p.regionSlug || p.en?.project?.regionSlug || "dubailand";
  const href = `/properties/${category}/${developerSlug}/${slug}`;

  return {
    slug, href, data: p, _fromSanity: true, regionSlug, category, developerSlug,
    developer, nameEn, nameAr, name: nameEn || nameAr || "",
    type: p.en?.project?.type || "", unitType: p.en?.project?.type || "",
    status, devStatus: status, location, image,
    priceAED: startingPriceAED, startingPriceAED,
    completionDate: p.en?.project?.completionDate || "",
    completionYear: p.en?.project?.completionDate
      ? parseInt(p.en.project.completionDate.slice(0, 4), 10) || null : null,
    sizeSqftMin: null, sizeSqftMax: null,
    minBedrooms: p.en?.project?.minBedrooms || null,
    maxBedrooms: p.en?.project?.maxBedrooms || null,
    bedrooms: null, saleStatus: "", hasPostHandover: null, postHandoverMonths: null,
  };
}

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
    // Auto-refresh every 30s so new Sanity content appears without manual reload
    const interval = setInterval(fetchProjects, 30000);
    return () => clearInterval(interval);
  }, [fetchProjects]);

  // ✅ Sanity-only — no static regionProjectsIndex fallback
  const allProjects = sanityProjects;

  return (
    <SanityProjectsContext.Provider value={{ allProjects, loading, refresh: fetchProjects }}>
      {children}
    </SanityProjectsContext.Provider>
  );
}

export function useAllProjects() {
  return useContext(SanityProjectsContext);
}