// src/app/developers/[slug]/page.jsx
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "next/navigation";

import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import ProjectCards from "@/components/projects/ProjectCards";
import DeveloperHero from "@/components/developer/DeveloperHero";
import DeveloperAbout from "@/components/developer/DeveloperAbout";
import DeveloperStats from "@/components/developer/DeveloperStats";
import DeveloperFounder from "@/components/developer/DeveloperFounder";

import { useAllProjects } from "@/components/SanityProjectsContext";
import { useLanguage } from "@/components/LanguageProvider";

import styles from "@/styles/developer/DeveloperPage.module.css";

const SLUG_TO_PROFILE_KEY = {
  sobha: "sobha", "sobha-realty": "sobha", sobharealty: "sobha",
  arada: "arada",
  damac: "damac", "damac-properties": "damac",
  azizi: "azizi", "azizi-developments": "azizi",
  omniyat: "omniyat",
  danube: "danube", "danube-properties": "danube",
  binghatti: "binghatti",
  samana: "samana", "samana-developers": "samana",
  "gulf-land-property": "gulf-land-property", "gulf-land": "gulf-land-property",
  gfs: "gfs", "gfs-properties": "gfs",
  taraf: "taraf", "taraf-development": "taraf",
  reportage: "reportage", "reportage-properties": "reportage",
  ellington: "ellington", "ellington-properties": "ellington",
  imtiaz: "imtiaz", "imtiaz-developments": "imtiaz",
  tiger: "tiger", "tiger-properties": "tiger",
  evolutions: "evolutions", "evolutions-real-estate": "evolutions",
  "prestige-one": "prestige-one", "prestige-one-developments": "prestige-one",
  "ajmal-makan": "ajmal-makan",
};

const CDN = "https://luxury-real-estate-media.b-cdn.net";
const ASSETS_BY_PROFILE = {
  sobha: { heroImage: `${CDN}/aquamont/intro-main.png`, logo: "/Sobha-Realty-Square-Logo.jpg" },
  arada: { heroImage: `${CDN}/massar-3/hero-bg.jpg`, logo: "/arada-developer.avif" },
  damac: { heroImage: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20(1).jpeg`, logo: "/damac-logo.png" },
  azizi: { heroImage: `${CDN}/riviera/hero-bg.jpg`, logo: "/azizi.jpg" },
  omniyat: { heroImage: `${CDN}/lumena-alta/hero-bg.jpg`, logo: "/omniyat-logo.avif" },
};

function formatSlugToName(slug) {
  if (!slug) return "";
  return String(slug).split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function getTObject(t, key) {
  if (!t) return null;
  try {
    const v = t(key, { returnObjects: true });
    if (!v || v === key) return null;
    if (typeof v === "string") return null;
    return v;
  } catch { return null; }
}

function safeT(t, key, fallback, values) {
  try {
    const v = t?.(key, values);
    if (v === undefined || v === null || v === "" || v === key) return fallback;
    return v;
  } catch { return fallback; }
}

export default function DeveloperPage() {
  const { slug } = useParams();
  const { t, locale } = useLanguage();
  const { allProjects } = useAllProjects();

  const [sanityDeveloper, setSanityDeveloper] = useState(null);
  const [sanityLoaded, setSanityLoaded] = useState(false);

  // Try to load this developer from Sanity
  useEffect(() => {
    async function fetchSanityDev() {
      try {
        const res = await fetch(`/api/sanity-developer?slug=${slug}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data._id) setSanityDeveloper(data);
        }
      } catch (e) {
        console.error("Failed to fetch Sanity developer", e);
      } finally {
        setSanityLoaded(true);
      }
    }
    fetchSanityDev();
  }, [slug]);

  const profileKey = useMemo(() => {
    const s = String(slug || "").trim().toLowerCase();
    return SLUG_TO_PROFILE_KEY[s] || s;
  }, [slug]);

  const jsonProfile = useMemo(() => getTObject(t, `developerProfiles.${profileKey}`) || null, [t, profileKey]);

  // Build developer object — Sanity wins over JSON
  const developer = useMemo(() => {
    if (sanityDeveloper) {
      const about = [];
      if (Array.isArray(sanityDeveloper.about)) about.push(...sanityDeveloper.about);
      return {
        slug: profileKey,
        name: sanityDeveloper.name,
        displayName: sanityDeveloper.name,
        tagline: sanityDeveloper.tagline || "",
        description: sanityDeveloper.tagline || "",
        heroImage: sanityDeveloper.heroImageUrl || ASSETS_BY_PROFILE[profileKey]?.heroImage || null,
        logo: sanityDeveloper.logoUrl || ASSETS_BY_PROFILE[profileKey]?.logo || null,
        about,
        stats: sanityDeveloper.stats || null,
        highlights: sanityDeveloper.highlights || [],
        _fromSanity: true,
      };
    }

    if (!jsonProfile) return null;

    const hero = jsonProfile?.hero || {};
    const assets = ASSETS_BY_PROFILE[profileKey] || {};
    const name = hero?.title || formatSlugToName(profileKey);
    const about = [];
    if (hero?.subtitle) about.push(hero.subtitle);
    const why = Array.isArray(jsonProfile?.whySobha) ? jsonProfile.whySobha : [];
    for (const item of why) { if (item?.description) about.push(item.description); }
    if (jsonProfile?.performance?.intro) about.push(jsonProfile.performance.intro);
    if (jsonProfile?.summary) about.push(jsonProfile.summary);
    if (jsonProfile?.investmentPerspective) about.push(jsonProfile.investmentPerspective);

    return {
      slug: profileKey,
      name,
      displayName: name,
      tagline: hero?.tagline || "",
      description: hero?.subtitle || "",
      heroImage: assets.heroImage || null,
      logo: assets.logo || null,
      about,
      stats: null,
    };
  }, [sanityDeveloper, jsonProfile, profileKey]);

  const [filters, setFilters] = useState({
    search: "", minPrice: "", maxPrice: "", minSize: "", maxSize: "",
    devStatus: [], unitTypes: [], bedrooms: [], completionYears: [],
    postHandoverOnly: false, minPostHandoverMonths: 1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sanityLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [sanityLoaded]);

  // Get projects for this developer from merged list
  const developerProjects = useMemo(() => {
    if (!developer) return [];

    // Build a broad set of tokens from the developer identity
    const rawVariants = [
      developer.name,
      developer.slug,
      developer.displayName,
      profileKey,
      formatSlugToName(profileKey),
      slug,                               // the URL slug itself
    ].filter(Boolean);

    // Normalize: lowercase, no punctuation, split into tokens
    function normalize(s) {
      return String(s || "").toLowerCase().replace(/[^a-z0-9\u0600-\u06FF]/g, " ").trim();
    }

    // Key tokens: each word of each variant (min 3 chars)
    const tokenSet = new Set();
    for (const v of rawVariants) {
      const n = normalize(v);
      tokenSet.add(n);                    // whole phrase
      n.split(/\s+/).filter((t) => t.length >= 3).forEach((t) => tokenSet.add(t));
    }
    const tokens = Array.from(tokenSet);

    return allProjects.filter((p) => {
      const haystack = [
        p.developer,
        p.developerSlug,
        p.developerNameEn,
        p.developerNameAr,
      ].filter(Boolean).map(normalize).join(" ");

      // A project matches if ANY token from our developer appears in its haystack
      return tokens.some((tok) => haystack.includes(tok));
    });
  }, [developer, allProjects, profileKey, slug]);

  const filteredProjects = useMemo(() => {
    return developerProjects.filter((project) => {
      if (filters.search?.trim()) {
        const s = filters.search.toLowerCase().trim();
        const fields = [project.name, project.developer, project.location, project.unitType].filter(Boolean).map((f) => f.toLowerCase());
        if (!fields.some((f) => f.includes(s))) return false;
      }
      const p = project.priceAED || 0;
      if (filters.minPrice && p < Number(filters.minPrice)) return false;
      if (filters.maxPrice && p > Number(filters.maxPrice)) return false;
      if (filters.devStatus.length && !filters.devStatus.includes(project.devStatus)) return false;
      if (filters.unitTypes.length && !filters.unitTypes.includes(project.unitType)) return false;
      if (filters.bedrooms.length) {
        const match = filters.bedrooms.some((br) => {
          const min = project.minBedrooms || 0; const max = project.maxBedrooms || min;
          if (br === 5) return min >= 5; return br >= min && br <= max;
        });
        if (!match) return false;
      }
      if (filters.completionYears.length && !filters.completionYears.includes(project.completionYear)) return false;
      if (filters.postHandoverOnly && !project.hasPostHandover) return false;
      return true;
    });
  }, [developerProjects, filters]);

  const handleResetFilters = () => {
    setFilters({ search: "", minPrice: "", maxPrice: "", minSize: "", maxSize: "", devStatus: [], unitTypes: [], bedrooms: [], completionYears: [], postHandoverOnly: false, minPostHandoverMonths: 1 });
  };

  const activeFilterCount = useMemo(() => {
    let c = 0;
    if (filters.search?.trim()) c++;
    if (filters.minPrice) c++; if (filters.maxPrice) c++;
    if (filters.devStatus.length) c++; if (filters.unitTypes.length) c++;
    if (filters.bedrooms.length) c++; if (filters.completionYears.length) c++;
    if (filters.postHandoverOnly) c++;
    return c;
  }, [filters]);

  // Not found — only after Sanity loaded AND no JSON profile
  if (sanityLoaded && !developer) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1>Developer Not Found</h1>
          <p>No data found for developer: {slug}</p>
        </div>
      </div>
    );
  }

  if (isLoading || !developer) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingOrnament}></div>
        <div className={styles.loadingText}>
          <span>Loading</span>
          <div className={styles.loadingDots}><span></span><span></span><span></span></div>
        </div>
      </div>
    );
  }

  const portfolioTitle = safeT(t, "developerPage.portfolioTitle", "Portfolio Collection");
  const portfolioSubtitle = safeT(t, "developerPage.portfolioSubtitle", `Curated selection of ${developer?.name}'s exceptional developments`, { developer: developer?.name || "" });

  return (
    <div className={styles.page}>
      <DeveloperHero developer={developer} />
      <div className={styles.contentWrapper}>
        <DeveloperAbout developer={developer} />
        <DeveloperStats developer={developer} />
        <DeveloperFounder developer={developer} />
        <section className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.headerOrnament}></div>
            <h2 className={styles.sectionTitle}>{portfolioTitle}</h2>
            <p className={styles.sectionSubtitle}>{portfolioSubtitle}</p>
            <div className={styles.projectCountBadge}>
              {filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}
            </div>
          </div>
          <ProjectsFiltersBar filters={filters} onChange={setFilters} onOpenFullFilters={() => setIsModalOpen(true)} />
          <ProjectsFiltersModal isOpen={isModalOpen} filters={filters} onChange={setFilters} onClose={() => setIsModalOpen(false)} onReset={handleResetFilters} totalProjects={filteredProjects.length} />
          <div className={styles.projectsContent}>
            <div className={styles.resultsHeader}>
              <div className={styles.resultsInfo}>
                <span className={styles.resultsCount}>{filteredProjects.length}</span>
                <span className={styles.resultsLabel}>{filteredProjects.length === 1 ? "Exclusive Project" : "Signature Developments"}</span>
                {activeFilterCount > 0 && <div className={styles.filtersBadge}>{activeFilterCount} {activeFilterCount === 1 ? "Filter" : "Filters"} Active</div>}
              </div>
              {activeFilterCount > 0 && (
                <button onClick={handleResetFilters} className={styles.clearFiltersBtn}>
                  <span>Clear All</span><div className={styles.btnOrnament}></div>
                </button>
              )}
            </div>
            {filteredProjects.length > 0 ? (
              <ProjectCards projects={filteredProjects} onResetFilters={handleResetFilters} />
            ) : (
              <div className={styles.noProjects}>
                <div className={styles.noProjectsIcon}>🏗️</div>
                <h3>No Projects Found</h3>
                <p>No projects match your current filters for {developer.name}.</p>
                <button onClick={handleResetFilters} className={styles.resetFiltersBtn}>Reset Filters</button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}