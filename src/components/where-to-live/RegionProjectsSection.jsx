// src/components/where-to-live/RegionProjectsSection.jsx
"use client";

import React, { useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { getProjectsForRegion } from "@/data/regionProjectsIndex";
import { propertiesData } from "@/data/propertiesData/propertiesData";
import styles from "@/styles/where-to-live/RegionProjectsSection.module.css";

// ---------- PURE FILTER FUNCTION ----------
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

  // 1) Search
  if (search && search.trim()) {
    const term = search.trim().toLowerCase();
    const haystack = [
      project.name,
      project.developer,
      project.location,
      project.slug,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    if (!haystack.includes(term)) return false;
  }

  // 2) Price (dummy properties use priceAED)
  const price = project.priceAED;
  if (minPrice && price && price < minPrice) return false;
  if (maxPrice && price && price > maxPrice) return false;

  // 3) Size (dummy properties use sizeSqft)
  const size = project.sizeSqft;
  if (minSize && size && size < minSize) return false;
  if (maxSize && size && size > maxSize) return false;

  // 4) Dev status (devStatus or fallback status)
  if (devStatus.length > 0) {
    const projStatus = (
      project.devStatus ||
      project.status ||
      ""
    ).toLowerCase();
    const wanted = devStatus.map((s) => s.toLowerCase());
    if (!wanted.some((s) => projStatus.includes(s))) return false;
  }

  // 5) Unit type (unitType or fallback type)
  if (unitTypes.length > 0) {
    const projType = (project.unitType || project.type || "").toLowerCase();
    const wanted = unitTypes.map((t) => t.toLowerCase());
    if (!wanted.some((t) => projType.includes(t))) return false;
  }

  // 6) Bedrooms (dummy minBedrooms / maxBedrooms)
  if (bedrooms.length > 0 && project.minBedrooms != null) {
    const minB = project.minBedrooms;
    const maxB = project.maxBedrooms;

    const matchesAny = bedrooms.some((b) => {
      if (b === 5) return maxB >= 5; // 5+ BR
      return minB <= b && maxB >= b;
    });

    if (!matchesAny) return false;
  }

  // 7) Completion year
  if (completionYears.length > 0 && project.completionYear) {
    if (!completionYears.includes(project.completionYear)) return false;
  }

  // 8) Post-handover
  if (postHandoverOnly) {
    if (!project.hasPostHandover) return false;
    if (
      typeof project.postHandoverMonths === "number" &&
      project.postHandoverMonths < (minPostHandoverMonths || 1)
    ) {
      return false;
    }
  }

  return true;
}

// ---------- MAIN COMPONENT ----------
export default function RegionProjectsSection({
  regionSlug,
  locale = "en",
  filters,
  onResultsCountChange,
}) {
  const allRegionProjects = getProjectsForRegion(regionSlug);

  // Apply filters in memory (REAL TIME)
  const filteredProjects = useMemo(
    () => allRegionProjects.filter((p) => projectMatchesFilters(p, filters)),
    [allRegionProjects, filters]
  );

  // Lift result count up to the page (for modal button text)
  useEffect(() => {
    if (typeof onResultsCountChange === "function") {
      onResultsCountChange(filteredProjects.length);
    }
  }, [filteredProjects.length, onResultsCountChange]);

  const { categories } = propertiesData("", null, locale);

  if (!filteredProjects || filteredProjects.length === 0) {
    return (
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              No projects match the selected filters.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const getProjectDetails = (projectSlug) => {
    for (const category of categories) {
      for (const developer of category.developers) {
        for (const project of developer.projects) {
          if (project.slug === projectSlug) {
            return {
              ...project,
              developer: developer.name,
              propertyType: category.name,
              categorySlug: category.slug,
              developerSlug: developer.slug,
            };
          }
        }
      }
    }
    return null;
  };

  const formatRegionName = (slug) =>
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Exclusive properties in {formatRegionName(regionSlug)} (
            {filteredProjects.length})
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((regionProject) => {
            const projectDetails = getProjectDetails(regionProject.slug);

            if (!projectDetails) {
              return (
                <div
                  key={regionProject.slug}
                  className={styles.projectCardFallback}
                >
                  <h3>{regionProject.name}</h3>
                  <p>{regionProject.location}</p>
                </div>
              );
            }

            return (
              <div key={regionProject.slug} className={styles.projectCard}>
                <Link href={regionProject.href} className={styles.cardLink}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={
                        projectDetails.image ||
                        regionProject.image ||
                        "/images/project-placeholder.jpg"
                      }
                      alt={projectDetails.title}
                      fill
                      className={styles.projectImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={styles.imageOverlay} />

                    {regionProject.startingPrice && (
                      <div className={styles.priceBadge}>
                        {regionProject.startingPrice}
                      </div>
                    )}
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectName}>
                        {projectDetails.title}
                      </h3>
                      <p className={styles.projectLocation}>
                        {regionProject.location || formatRegionName(regionSlug)}
                      </p>
                    </div>

                    <div className={styles.developerInfo}>
                      <span className={styles.developerLabel}>Developer</span>
                      <span className={styles.developerName}>
                        {projectDetails.developer}
                      </span>
                    </div>

                    <div className={styles.detailsGrid}>
                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>
                          Property Type
                        </span>
                        <span className={styles.detailValue}>
                          {projectDetails.propertyType}
                        </span>
                      </div>
                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Bedroom</span>
                        <span className={styles.detailValue}>
                          {regionProject.bedrooms}
                        </span>
                      </div>
                    </div>

                    {regionProject.status && (
                      <div className={styles.statusBadge}>
                        {regionProject.status}
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
