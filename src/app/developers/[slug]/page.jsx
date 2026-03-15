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
import { filterProjects } from "@/lib/projects/filterProjects";

import styles from "@/styles/developer/DeveloperPage.module.css";

const EXCLUDED_DEVELOPER_SLUGS = new Set(["imtiaz", "beyond", "omniyat"]);

function formatSlugToName(slug) {
  if (!slug) return "";
  return String(slug)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06FF]/g, " ")
    .trim();
}

function extractProjectImage(project) {
  return (
    project?.image ||
    project?.heroImageUrl ||
    project?.data?.hero?.backgroundUrl ||
    project?.data?.hero?.squareImageUrl ||
    project?.data?.gallery?.slides?.[0] ||
    null
  );
}

function buildAutoStats(projects, isRTL) {
  if (!projects.length) return null;

  const prices = projects
    .map((project) => project?.startingPriceAED || project?.priceAED || null)
    .filter((value) => Number.isFinite(value) && value > 0);

  const regions = new Set(projects.map((project) => project?.regionSlug).filter(Boolean));
  const minPrice = prices.length ? Math.min(...prices) : null;

  return [
    {
      label: isRTL ? "المشاريع" : "Projects",
      value: String(projects.length),
    },
    {
      label: isRTL ? "المناطق" : "Areas",
      value: String(regions.size),
    },
    {
      label: isRTL ? "الأسعار من" : "Prices From",
      value: minPrice
        ? `AED ${new Intl.NumberFormat("en-US").format(minPrice)}`
        : isRTL
        ? "حسب الطلب"
        : "On request",
    },
  ];
}

export default function DeveloperPage() {
  const { slug } = useParams();
  const { t, locale } = useLanguage();
  const isRTL = locale === "ar";
  const { allProjects } = useAllProjects();

  const [sanityDeveloper, setSanityDeveloper] = useState(null);
  const [sanityLoaded, setSanityLoaded] = useState(false);

  useEffect(() => {
    async function fetchSanityDev() {
      try {
        const res = await fetch(`/api/sanity-developer?slug=${slug}`);
        if (res.ok) {
          const data = await res.json();
          if (data && (data._id || data.slug || data.name)) {
            setSanityDeveloper(data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch Sanity developer", error);
      } finally {
        setSanityLoaded(true);
      }
    }
    fetchSanityDev();
  }, [slug]);

  const profileKey = useMemo(() => String(slug || "").trim().toLowerCase(), [slug]);

  const isExcludedDeveloper = EXCLUDED_DEVELOPER_SLUGS.has(profileKey);

  const matchedProjects = useMemo(() => {
    const tokens = new Set([
      profileKey,
      formatSlugToName(profileKey),
      String(slug || ""),
      sanityDeveloper?.name,
      sanityDeveloper?.slug,
      sanityDeveloper?.nameAr,
    ].filter(Boolean).map(normalize));

    const directMatches = allProjects.filter((project) => {
      const haystack = [
        project.developer,
        project.developerSlug,
        project.developerNameEn,
        project.developerNameAr,
      ]
        .filter(Boolean)
        .map(normalize)
        .join(" ");

      return Array.from(tokens).some((token) => token && haystack.includes(token));
    });

    if (directMatches.length > 0) return directMatches;
    if (Array.isArray(sanityDeveloper?.projects) && sanityDeveloper.projects.length > 0) {
      return sanityDeveloper.projects;
    }
    return [];
  }, [allProjects, profileKey, sanityDeveloper, slug]);

  const developer = useMemo(() => {
    if (sanityDeveloper) {
      const about = [];
      if (Array.isArray(sanityDeveloper.about)) {
        about.push(...sanityDeveloper.about);
      }
      return {
        slug: profileKey,
        name: sanityDeveloper.name,
        displayName: sanityDeveloper.name,
        tagline: sanityDeveloper.tagline || "",
        description: sanityDeveloper.tagline || "",
        heroImage:
          sanityDeveloper.heroImageUrl ||
          extractProjectImage(matchedProjects[0]),
        logo:
          sanityDeveloper.logoUrl || null,
        about,
        stats: sanityDeveloper.stats || buildAutoStats(matchedProjects, isRTL),
        highlights: sanityDeveloper.highlights || [],
        founder: sanityDeveloper.founder || null,
        _fromSanity: true,
      };
    }

    if (!matchedProjects.length) {
      return null;
    }

    const derivedName =
      matchedProjects.find((project) => project?.developer)?.developer ||
      formatSlugToName(profileKey);

    const regionNames = Array.from(
      new Set(matchedProjects.map((project) => project?.regionSlug).filter(Boolean))
    )
      .slice(0, 4)
      .map(formatSlugToName);

    return {
      slug: profileKey,
      name: derivedName,
      displayName: derivedName,
      tagline: isRTL
        ? `مشاريع مختارة من ${derivedName}`
        : `Curated projects by ${derivedName}`,
      description: isRTL
        ? `مجموعة مشاريع مرتبطة بالمطور ${derivedName}.`
        : `A curated collection of projects linked to ${derivedName}.`,
      heroImage: extractProjectImage(matchedProjects[0]),
      logo: null,
      about: [
        isRTL
          ? `تم ربط هذه الصفحة تلقائياً من خلال المشاريع المسندة إلى ${derivedName} في سانيتي.`
          : `This page is generated automatically from projects scoped to ${derivedName} in Sanity.`,
        regionNames.length
          ? isRTL
            ? `تظهر مشاريعه هنا بحسب المناطق: ${regionNames.join("، ")}.`
            : `Projects currently appear here across areas such as ${regionNames.join(", ")}.`
          : isRTL
          ? "يتم تحديث المحتوى مباشرة من النظام."
          : "Content updates here directly from the CMS.",
      ],
      stats: buildAutoStats(matchedProjects, isRTL),
      highlights: [],
      founder: null,
      _fromProjects: true,
    };
  }, [isRTL, matchedProjects, profileKey, sanityDeveloper]);

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
    if (sanityLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [sanityLoaded]);

  const developerProjects = useMemo(() => matchedProjects, [matchedProjects]);

  const filteredProjects = useMemo(() => {
    const { filtered } = filterProjects(developerProjects, filters);
    return filtered.filter((project) => {
      if (
        filters.completionYears.length &&
        !filters.completionYears.includes(project.completionYear)
      ) {
        return false;
      }
      if (filters.postHandoverOnly && !project.hasPostHandover) {
        return false;
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
    if (filters.minPrice) count++;
    if (filters.maxPrice) count++;
    if (filters.devStatus.length) count++;
    if (filters.unitTypes.length) count++;
    if (filters.bedrooms.length) count++;
    if (filters.completionYears.length) count++;
    if (filters.postHandoverOnly) count++;
    return count;
  }, [filters]);

  const notFoundTitle = isRTL ? "المطور غير موجود" : "Developer Not Found";
  const notFoundBody = isRTL
    ? `لا توجد بيانات لهذا المطور: ${slug}`
    : `No data found for developer: ${slug}`;
  const loadingLabel = isRTL ? "جارٍ التحميل" : "Loading";
  const portfolioTitle =
    t?.("developerPage.portfolioTitle") || (isRTL ? "مجموعة المشاريع" : "Portfolio Collection");
  const portfolioSubtitle =
    t?.("developerPage.portfolioSubtitle", {
      developer: developer?.name || "",
    }) ||
    (isRTL
      ? `مجموعة مختارة من مشاريع ${developer?.name}`
      : `Curated selection of ${developer?.name}'s exceptional developments`);
  const projectWord = isRTL ? "مشروع" : "Project";
  const projectsWord = isRTL ? "مشاريع" : "Projects";
  const exclusiveProjectLabel = isRTL ? "مشروع مميز" : "Exclusive Project";
  const signatureProjectsLabel = isRTL ? "مشاريع مختارة" : "Signature Developments";

  if (sanityLoaded && (isExcludedDeveloper || !developer)) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1>{notFoundTitle}</h1>
          <p>{notFoundBody}</p>
        </div>
      </div>
    );
  }

  if (isLoading || !developer) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingOrnament}></div>
        <div className={styles.loadingText}>
          <span>{loadingLabel}</span>
          <div className={styles.loadingDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

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
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? projectWord : projectsWord}
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
                    ? exclusiveProjectLabel
                    : signatureProjectsLabel}
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
              <ProjectCards projects={filteredProjects} onResetFilters={handleResetFilters} />
            ) : (
              <div className={styles.noProjects}>
                <div className={styles.noProjectsIcon}>🏗️</div>
                <h3>No Projects Found</h3>
                <p>No projects match your current filters for {developer.name}.</p>
                <button onClick={handleResetFilters} className={styles.resetFiltersBtn}>
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
