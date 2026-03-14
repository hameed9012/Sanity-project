"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useAllProjects } from "@/components/SanityProjectsContext";
import { useLanguage } from "@/components/LanguageProvider";
import ProjectCards from "@/components/projects/ProjectCards";
import styles from "@/styles/projects/RelatedProjects.module.css";

function parsePriceToAED(value) {
  if (value === null || value === undefined) return null;

  const raw = String(value).trim().toLowerCase();
  if (!raw) return null;

  const numericPart = raw.replace(/[^\d.]/g, "");
  let parsed = Number(numericPart);
  const compact = raw.replace(/\s+/g, "");

  if (!Number.isFinite(parsed) || parsed <= 0) return null;

  if (/million/.test(raw) || /\d(?:\.\d+)?m\b/.test(compact)) {
    parsed *= 1_000_000;
  } else if (/thousand/.test(raw) || /\d(?:\.\d+)?k\b/.test(compact)) {
    parsed *= 1_000;
  }

  parsed = Math.round(parsed);
  return parsed >= 10_000 ? parsed : null;
}

function scoreRelatedness(current, candidate) {
  if (!candidate || candidate.slug === current.slug) return 0;

  let score = 0;

  const curDev = (current.developerSlug || current.developer || "").toLowerCase();
  const canDev = (candidate.developerSlug || candidate.developer || "").toLowerCase();
  if (curDev && canDev && curDev === canDev) score += 40;

  const curCat = (current.category || current.type || "").toLowerCase();
  const canCat = (candidate.category || candidate.type || "").toLowerCase();
  if (curCat && canCat && curCat === canCat) score += 20;

  const curStatus = (current.status || current.devStatus || "").toLowerCase();
  const canStatus = (candidate.status || candidate.devStatus || "").toLowerCase();
  if (curStatus && canStatus && curStatus === canStatus) score += 18;

  const curRegion = (current.regionSlug || "").toLowerCase();
  const canRegion = (candidate.regionSlug || "").toLowerCase();
  if (curRegion && canRegion && curRegion === canRegion) score += 15;

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

  const current = useMemo(
    () => ({
      slug: currentSlug || projectData?.slug || "",
      developerSlug:
        projectData?.developerSlug ||
        (projectData?.developer || "").toLowerCase().replace(/\s+/g, "-"),
      developer: projectData?.developer || "",
      category: projectData?.category || projectData?.type || "",
      regionSlug: projectData?.regionSlug || "",
      status: projectData?.status || projectData?.devStatus || "",
      startingPriceAED:
        projectData?.startingPriceAED ||
        parsePriceToAED(projectData?.intro?.stats?.[0]?.value || projectData?.hero?.startingPrice),
    }),
    [currentSlug, projectData]
  );

  const related = useMemo(() => {
    if (!allProjects?.length) return [];

    return allProjects
      .map((project) => ({ project, score: scoreRelatedness(current, project) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(({ project }) => project);
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
          <p className={styles.subheading}>
            {t?.("relatedProjects.subheading") || subheading}
          </p>
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
