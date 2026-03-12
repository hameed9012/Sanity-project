"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useAllProjects } from "@/components/SanityProjectsContext";
import { useLanguage } from "@/components/LanguageProvider";
import ProjectCards from "@/components/projects/ProjectCards";
import styles from "@/styles/projects/RelatedProjects.module.css";

/**
 * Scores a candidate project against the current project.
 * Higher score = more related. Returns 0 if candidate is the current project.
 */
function scoreRelatedness(current, candidate) {
  if (!candidate || candidate.slug === current.slug) return 0;

  let score = 0;

  // Same developer → strongest signal
  const curDev = (current.developerSlug || current.developer || "").toLowerCase();
  const canDev = (candidate.developerSlug || candidate.developer || "").toLowerCase();
  if (curDev && canDev && curDev === canDev) score += 40;

  // Same category (apartments / villas / penthouses)
  const curCat = (current.category || current.type || "").toLowerCase();
  const canCat = (candidate.category || candidate.type || "").toLowerCase();
  if (curCat && canCat && curCat === canCat) score += 20;

  // Same region
  const curRegion = (current.regionSlug || "").toLowerCase();
  const canRegion = (candidate.regionSlug || "").toLowerCase();
  if (curRegion && canRegion && curRegion === canRegion) score += 15;

  // Similar price range (within 30%)
  const curPrice = current.startingPriceAED || current.priceAED;
  const canPrice = candidate.startingPriceAED || candidate.priceAED;
  if (curPrice && canPrice && curPrice > 0 && canPrice > 0) {
    const ratio = Math.min(curPrice, canPrice) / Math.max(curPrice, canPrice);
    if (ratio >= 0.7) score += 10;
  }

  return score;
}

export default function RelatedProjects({ projectData, currentSlug }) {
  const { allProjects, loading } = useAllProjects();
  const { locale, t } = useLanguage();
  const isAr = locale === "ar";

  // Build a normalised "current" object from projectData for scoring
  const current = useMemo(() => ({
    slug: currentSlug || projectData?.slug || "",
    developerSlug:
      projectData?.developerSlug ||
      (projectData?.developer || "").toLowerCase().replace(/\s+/g, "-"),
    developer: projectData?.developer || "",
    category: projectData?.category || projectData?.type || "",
    regionSlug: projectData?.regionSlug || "",
    startingPriceAED:
      projectData?.startingPriceAED ||
      parseInt(
        String(projectData?.intro?.stats?.[0]?.value || projectData?.hero?.startingPrice || "0").replace(/[^0-9]/g, ""),
        10
      ) || null,
  }), [currentSlug, projectData]);

  const related = useMemo(() => {
    if (!allProjects?.length) return [];

    const scored = allProjects
      .map((p) => ({ project: p, score: scoreRelatedness(current, p) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(({ project }) => project);

    return scored;
  }, [allProjects, current]);

  if (loading || related.length === 0) return null;

  const heading = isAr ? "مشاريع مشابهة" : "Related Projects";
  const subheading = isAr
    ? "مشاريع قد تهمك بناءً على الموقع والمطور والنوع"
    : "Projects you may like based on location, developer & type";

  return (
    <section className={styles.section} dir={isAr ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            {t?.("relatedProjects.eyebrow") || (isAr ? "اكتشف المزيد" : "DISCOVER MORE")}
          </p>
          <h2 className={styles.heading}>{t?.("relatedProjects.heading") || heading}</h2>
          <p className={styles.subheading}>{t?.("relatedProjects.subheading") || subheading}</p>
        </div>

        <ProjectCards projects={related} />

        <div className={styles.viewAll}>
          <Link href="/properties" className={styles.viewAllBtn}>
            {t?.("relatedProjects.viewAll") || (isAr ? "عرض جميع المشاريع" : "View All Projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}