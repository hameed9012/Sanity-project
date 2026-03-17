"use client";

import React, { useMemo, useEffect } from "react";

import { useAllProjects } from "@/components/SanityProjectsContext";
import ProjectCards from "@/components/projects/ProjectCards";
import styles from "@/styles/where-to-live/RegionProjectsSection.module.css";

function normalizeSlug(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, " ")
    .trim();
}

function formatRegionName(slug) {
  return String(slug || "")
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function projectMatchesArea(project, regionSlug) {
  const targetSlug = normalizeSlug(regionSlug);
  if (!targetSlug) return false;

  const projectRegion = normalizeSlug(project?.regionSlug || project?.areaSlug);
  if (projectRegion && projectRegion === targetSlug) return true;

  const locationParts = String(project?.location || "")
    .split(",")
    .map((part) => normalizeSlug(part))
    .filter(Boolean);

  if (locationParts.includes(targetSlug)) return true;

  const targetText = normalizeText(targetSlug.replace(/-/g, " "));
  const locationText = normalizeText(project?.location || "");
  return !!targetText && locationText.includes(targetText);
}

function projectMatchesFilters(project, filters) {
  if (!filters) return true;

  const {
    search,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    devStatus = [],
    unitTypes = [],
    bedrooms = [],
    completionYears = [],
    postHandoverOnly,
    minPostHandoverMonths,
  } = filters;

  if (search && search.trim()) {
    const term = search.trim().toLowerCase();
    const haystack = [
      project?.name,
      project?.developer,
      project?.location,
      project?.slug,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    if (!haystack.includes(term)) return false;
  }

  const price = project?.priceAED || project?.startingPriceAED;
  if (minPrice && price && price < minPrice) return false;
  if (maxPrice && price && price > maxPrice) return false;

  const minProjectSize = project?.sizeSqftMin;
  const maxProjectSize = project?.sizeSqftMax ?? minProjectSize;
  if (minSize && maxProjectSize && maxProjectSize < minSize) return false;
  if (maxSize && minProjectSize && minProjectSize > maxSize) return false;

  if (devStatus.length > 0) {
    const projectStatus = String(project?.devStatus || project?.status || "").toLowerCase();
    const wanted = devStatus.map((status) => String(status).toLowerCase());
    if (!wanted.some((status) => projectStatus.includes(status))) return false;
  }

  if (unitTypes.length > 0) {
    const typeText = String(project?.unitType || project?.type || "").toLowerCase();
    const wanted = unitTypes.map((type) => String(type).toLowerCase());
    if (!wanted.some((type) => typeText.includes(type))) return false;
  }

  if (bedrooms.length > 0 && project?.minBedrooms != null) {
    const minBedroomsValue = project.minBedrooms;
    const maxBedroomsValue = project.maxBedrooms ?? minBedroomsValue;
    const matchesBedroom = bedrooms.some((bedroom) => {
      if (bedroom === 5) return maxBedroomsValue >= 5;
      return minBedroomsValue <= bedroom && maxBedroomsValue >= bedroom;
    });
    if (!matchesBedroom) return false;
  }

  if (completionYears.length > 0 && project?.completionYear) {
    if (!completionYears.includes(project.completionYear)) return false;
  }

  if (postHandoverOnly) {
    if (!project?.hasPostHandover) return false;
    if (
      typeof project?.postHandoverMonths === "number" &&
      project.postHandoverMonths < (minPostHandoverMonths || 1)
    ) {
      return false;
    }
  }

  return true;
}

export default function RegionProjectsSection({
  regionSlug,
  locale = "en",
  filters,
  onResultsCountChange,
}) {
  const { allProjects, loading } = useAllProjects();

  const regionProjects = useMemo(() => {
    return (allProjects || []).filter(
      (project) => !project?.isLand && projectMatchesArea(project, regionSlug)
    );
  }, [allProjects, regionSlug]);

  const filteredProjects = useMemo(() => {
    return regionProjects.filter((project) => projectMatchesFilters(project, filters));
  }, [regionProjects, filters]);

  useEffect(() => {
    if (typeof onResultsCountChange === "function") {
      onResultsCountChange(filteredProjects.length);
    }
  }, [filteredProjects.length, onResultsCountChange]);

  if (loading && filteredProjects.length === 0) {
    return null;
  }

  if (!filteredProjects.length) {
    return (
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {locale === "ar" ? "مشاريع مميزة" : "Featured Projects"}
            </h2>
            <p className={styles.sectionSubtitle}>
              {locale === "ar"
                ? "لا توجد مشاريع تطابق الفلاتر المختارة."
                : "No projects match the selected filters."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {locale === "ar" ? "مشاريع مميزة" : "Featured Projects"}
          </h2>
          <p className={styles.sectionSubtitle}>
            {locale === "ar"
              ? `عقارات مميزة في ${formatRegionName(regionSlug)} (${filteredProjects.length})`
              : `Exclusive properties in ${formatRegionName(regionSlug)} (${filteredProjects.length})`}
          </p>
        </div>

        <div className={styles.cardsWrap}>
          <ProjectCards projects={filteredProjects} />
        </div>
      </div>
    </section>
  );
}
