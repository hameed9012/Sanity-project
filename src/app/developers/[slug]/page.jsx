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

import { getProjectsByDeveloper } from "@/data/regionProjectsIndex";
import { useLanguage } from "@/components/LanguageProvider";

import styles from "@/styles/developer/DeveloperPage.module.css";

// ✅ Slug aliases -> your JSON keys under developerProfiles
const SLUG_TO_PROFILE_KEY = {
  sobha: "sobha",
  "sobha-realty": "sobha",
  sobharealty: "sobha",

  arada: "arada",

  damac: "damac",
  "damac-properties": "damac",

  azizi: "azizi",
  "azizi-developments": "azizi",

  omniyat: "omniyat",

  danube: "danube",
  "danube-properties": "danube",

  binghatti: "binghatti",

  samana: "samana",
  "samana-developers": "samana",

  "gulf-land-property": "gulf-land-property",
  "gulf-land": "gulf-land-property",

  gfs: "gfs",
  "gfs-properties": "gfs",

  taraf: "taraf",
  "taraf-development": "taraf",

  reportage: "reportage",
  "reportage-properties": "reportage",

  ellington: "ellington",
  "ellington-properties": "ellington",

  imtiaz: "imtiaz",
  "imtiaz-developments": "imtiaz",

  tiger: "tiger",
  "tiger-properties": "tiger",

  evolutions: "evolutions",
  "evolutions-real-estate": "evolutions",

  "prestige-one": "prestige-one",
  "prestige-one-developments": "prestige-one",

  "ajmal-makan": "ajmal-makan",
};

// ✅ OPTIONAL: assets map (JSON doesn’t have images/logos)
const CDN = "https://luxury-real-estate-media.b-cdn.net";
const ASSETS_BY_PROFILE = {
  sobha: {
    heroImage: `${CDN}/aquamont/intro-main.png`,
    logo: "/Sobha-Realty-Square-Logo.jpg",
  },
  arada: {
    heroImage: `${CDN}/massar-3/hero-bg.jpg`,
    logo: "/arada-developer.avif",
  },
  damac: {
    heroImage: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20(1).jpeg`,
    logo: "/damac-logo.png",
  },
  azizi: { heroImage: `${CDN}/riviera/hero-bg.jpg`, logo: "/azizi.jpg" },
  omniyat: {
    heroImage: `${CDN}/lumena-alta/hero-bg.jpg`,
    logo: "/omniyat-logo.avif",
  },

  // Add more if you want (safe if missing)
};

function formatSlugToName(slug) {
  if (!slug) return "";
  return String(slug)
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ✅ Robust helper to read OBJECTS from i18n JSON
function getTObject(t, key) {
  if (!t) return null;
  try {
    const v = t(key, { returnObjects: true });
    if (!v || v === key) return null;
    if (typeof v === "string") return null;
    return v;
  } catch {
    return null;
  }
}

// ✅ Safe string translator
function safeT(t, key, fallback, values) {
  try {
    const v = t?.(key, values);
    if (v === undefined || v === null || v === "" || v === key) return fallback;
    return v;
  } catch {
    return fallback;
  }
}

export default function DeveloperPage() {
  const { slug } = useParams();
  const { t } = useLanguage();

  const profileKey = useMemo(() => {
    const s = String(slug || "")
      .trim()
      .toLowerCase();
    return SLUG_TO_PROFILE_KEY[s] || s;
  }, [slug]);

  // ✅ Pull the full profile from JSON: developerProfiles.<key>
  const profile = useMemo(() => {
    return getTObject(t, `developerProfiles.${profileKey}`) || null;
  }, [t, profileKey]);

  // ✅ Build a “developer object” that your existing components can render
  // (DeveloperHero expects name/tagline/subtitle-ish + images)
  // (DeveloperAbout expects developerProfiles.<slug>.tagline and .about array → we supply those via developer object too)
  const developer = useMemo(() => {
    const hero = profile?.hero || {};
    const assets = ASSETS_BY_PROFILE[profileKey] || {};

    const name = hero?.title || formatSlugToName(profileKey);
    const tagline = hero?.tagline || "";
    const subtitle = hero?.subtitle || "";

    // ✅ Create an “about” array so DeveloperAbout won’t return null
    // We build it from your JSON sections.
    const about = [];

    if (subtitle) about.push(subtitle);

    const why = Array.isArray(profile?.whySobha) ? profile.whySobha : [];
    for (const item of why) {
      if (item?.description) about.push(item.description);
    }

    if (profile?.performance?.intro) about.push(profile.performance.intro);
    if (profile?.summary) about.push(profile.summary);
    if (profile?.investmentPerspective)
      about.push(profile.investmentPerspective);

    return {
      slug: profileKey,
      name,
      displayName: name,

      // These are used by your UI components
      tagline,
      description: subtitle,

      // For DeveloperHero / DeveloperStats logo rendering
      heroImage: assets.heroImage || null,
      logo: assets.logo || null,

      // Give DeveloperAbout something to render even if it still reads from JSON
      about,

      // Optional: keep this for backward compatibility, but DeveloperStats will read from JSON now
      stats: null,
    };
  }, [profile, profileKey]);

  const [filters, setFilters] = useState({
    search: "",
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: "",
    devStatus: [],
    unitTypes: [],
    bedrooms: [],
    completionYears: [],
    postHandoverOnly: false,
    minPostHandoverMonths: 1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Projects list (keep your existing matching logic)
  const developerProjects = useMemo(() => {
    const possibleNames = [
      developer?.name,
      developer?.slug,
      formatSlugToName(profileKey),
    ].filter(Boolean);

    for (const name of possibleNames) {
      const projects = getProjectsByDeveloper(name);
      if (projects && projects.length > 0) return projects;
    }
    return getProjectsByDeveloper(developer?.name);
  }, [developer?.name, developer?.slug, profileKey]);

  const filteredProjects = useMemo(() => {
    if (!developerProjects) return [];

    return developerProjects.filter((project) => {
      if (filters.search && filters.search.trim() !== "") {
        const searchTerm = filters.search.toLowerCase().trim();
        const searchableFields = [
          project.name,
          project.developer,
          project.location,
          project.bedrooms,
          project.unitType,
        ]
          .filter(Boolean)
          .map((f) => String(f).toLowerCase());

        const matchesSearch = searchableFields.some((f) =>
          f.includes(searchTerm),
        );
        if (!matchesSearch) return false;
      }

      const projectPrice = project.priceAED || project.startingPriceAED || 0;
      if (filters.minPrice !== "" && filters.minPrice != null) {
        if (projectPrice < Number(filters.minPrice)) return false;
      }
      if (filters.maxPrice !== "" && filters.maxPrice != null) {
        if (projectPrice > Number(filters.maxPrice)) return false;
      }

      const projectSize = project.sizeSqftMin || 0;
      if (filters.minSize !== "" && filters.minSize != null) {
        if (projectSize < Number(filters.minSize)) return false;
      }
      if (filters.maxSize !== "" && filters.maxSize != null) {
        if (projectSize > Number(filters.maxSize)) return false;
      }

      if (filters.devStatus.length > 0) {
        if (!filters.devStatus.includes(project.devStatus)) return false;
      }

      if (filters.unitTypes.length > 0) {
        if (!filters.unitTypes.includes(project.unitType)) return false;
      }

      if (filters.bedrooms.length > 0) {
        const hasMatchingBedroom = filters.bedrooms.some((bedroom) => {
          const minBeds = project.minBedrooms || 0;
          const maxBeds = project.maxBedrooms || project.minBedrooms || 0;
          if (bedroom === 5) return minBeds >= 5;
          return bedroom >= minBeds && bedroom <= maxBeds;
        });
        if (!hasMatchingBedroom) return false;
      }

      if (filters.completionYears.length > 0) {
        if (!filters.completionYears.includes(project.completionYear))
          return false;
      }

      if (filters.postHandoverOnly && !project.hasPostHandover) return false;

      if (filters.minPostHandoverMonths > 1) {
        if (
          !project.hasPostHandover ||
          project.postHandoverMonths < filters.minPostHandoverMonths
        ) {
          return false;
        }
      }

      return true;
    });
  }, [developerProjects, filters]);

  const handleResetFilters = () => {
    setFilters({
      search: "",
      minPrice: "",
      maxPrice: "",
      minSize: "",
      maxSize: "",
      devStatus: [],
      unitTypes: [],
      bedrooms: [],
      completionYears: [],
      postHandoverOnly: false,
      minPostHandoverMonths: 1,
    });
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.search?.trim()) count++;
    if (filters.minPrice !== "") count++;
    if (filters.maxPrice !== "") count++;
    if (filters.minSize !== "") count++;
    if (filters.maxSize !== "") count++;
    if (filters.devStatus.length) count++;
    if (filters.unitTypes.length) count++;
    if (filters.bedrooms.length) count++;
    if (filters.completionYears.length) count++;
    if (filters.postHandoverOnly) count++;
    if (filters.minPostHandoverMonths > 1) count++;
    return count;
  }, [filters]);

  // ✅ Not found if JSON profile missing
  if (!profile) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1>Developer Not Found</h1>
          <p>developerProfiles.{profileKey} is missing from your JSON.</p>
          <div className={styles.notFoundOrnament}></div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingOrnament}></div>
        <div className={styles.loadingText}>
          <span>Loading</span>
          <div className={styles.loadingDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  const portfolioTitle = safeT(
    t,
    "developerPage.portfolioTitle",
    "Portfolio Collection",
  );
  const portfolioSubtitle = safeT(
    t,
    "developerPage.portfolioSubtitle",
    `Curated selection of ${developer?.name}'s exceptional developments`,
    { developer: developer?.name || "" },
  );

  return (
    <div className={styles.page}>
      <DeveloperHero developer={developer} />

      <div className={styles.contentWrapper}>
        {/* Will render now because we provided developer.about/tagline and JSON is present */}
        <DeveloperAbout developer={developer} />

        {/* ✅ Now reads from JSON (see DeveloperStats.jsx below) */}
        <DeveloperStats developer={developer} />

        {/* Founder: your JSON doesn’t include founder, so it will likely return null. Safe. */}
        <DeveloperFounder developer={developer} />

        <section className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.headerOrnament}></div>
            <h2 className={styles.sectionTitle}>{portfolioTitle}</h2>
            <p className={styles.sectionSubtitle}>{portfolioSubtitle}</p>

            <div className={styles.projectCountBadge}>
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "Project" : "Projects"}
            </div>
          </div>

          <ProjectsFiltersBar
            filters={filters}
            onChange={setFilters}
            onOpenFullFilters={() => setIsModalOpen(true)}
          />

          <ProjectsFiltersModal
            isOpen={isModalOpen}
            filters={filters}
            onChange={setFilters}
            onClose={() => setIsModalOpen(false)}
            onReset={handleResetFilters}
            totalProjects={filteredProjects.length}
          />

          <div className={styles.projectsContent}>
            <div className={styles.resultsHeader}>
              <div className={styles.resultsInfo}>
                <span className={styles.resultsCount}>
                  {filteredProjects.length}
                </span>
                <span className={styles.resultsLabel}>
                  {filteredProjects.length === 1
                    ? "Exclusive Project"
                    : "Signature Developments"}
                </span>

                {activeFilterCount > 0 && (
                  <div className={styles.filtersBadge}>
                    {activeFilterCount}{" "}
                    {activeFilterCount === 1 ? "Filter" : "Filters"} Active
                  </div>
                )}
              </div>

              {activeFilterCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className={styles.clearFiltersBtn}
                >
                  <span>Clear All</span>
                  <div className={styles.btnOrnament}></div>
                </button>
              )}
            </div>

            {filteredProjects.length > 0 ? (
              <ProjectCards
                projects={filteredProjects}
                onResetFilters={handleResetFilters}
              />
            ) : (
              <div className={styles.noProjects}>
                <div className={styles.noProjectsIcon}>🏗️</div>
                <h3>No Projects Found</h3>
                <p>
                  No projects match your current filters for {developer.name}.
                </p>
                <button
                  onClick={handleResetFilters}
                  className={styles.resetFiltersBtn}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
