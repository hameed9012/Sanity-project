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

  const currentDeveloper = (current.developerSlug || current.developer || "").toLowerCase();
  const candidateDeveloper = (candidate.developerSlug || candidate.developer || "").toLowerCase();
  if (currentDeveloper && candidateDeveloper && currentDeveloper === candidateDeveloper) {
    score += 40;
  }

  const currentCategory = (current.category || current.type || "").toLowerCase();
  const candidateCategory = (candidate.category || candidate.type || "").toLowerCase();
  if (currentCategory && candidateCategory && currentCategory === candidateCategory) {
    score += 20;
  }

  const currentStatus = (current.status || current.devStatus || "").toLowerCase();
  const candidateStatus = (candidate.status || candidate.devStatus || "").toLowerCase();
  if (currentStatus && candidateStatus && currentStatus === candidateStatus) {
    score += 18;
  }

  const currentRegion = (current.regionSlug || "").toLowerCase();
  const candidateRegion = (candidate.regionSlug || "").toLowerCase();
  if (currentRegion && candidateRegion && currentRegion === candidateRegion) {
    score += 15;
  }

  const currentPrice = current.startingPriceAED || current.priceAED;
  const candidatePrice = candidate.startingPriceAED || candidate.priceAED;
  if (currentPrice && candidatePrice && currentPrice > 0 && candidatePrice > 0) {
    const ratio = Math.min(currentPrice, candidatePrice) / Math.max(currentPrice, candidatePrice);
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

  const heading = isAr
    ? "\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u0634\u0627\u0628\u0647\u0629"
    : "Related Projects";
  const subheading = isAr
    ? "\u0645\u0634\u0627\u0631\u064a\u0639 \u0642\u062f \u062a\u0647\u0645\u0643 \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0644\u0645\u0637\u0648\u0631 \u0648\u0627\u0644\u0646\u0648\u0639"
    : "Projects you may like based on location, developer & type";

  return (
    <section className={styles.section} dir={isAr ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            {t?.("relatedProjects.eyebrow") ||
              (isAr
                ? "\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0645\u0632\u064a\u062f"
                : "DISCOVER MORE")}
          </p>
          <h2 className={styles.heading}>{t?.("relatedProjects.heading") || heading}</h2>
          <p className={styles.subheading}>
            {t?.("relatedProjects.subheading") || subheading}
          </p>
        </div>

        <ProjectCards projects={related} />

        <div className={styles.viewAll}>
          <Link href="/properties" className={styles.viewAllBtn}>
            {t?.("relatedProjects.viewAll") ||
              (isAr
                ? "\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"
                : "View All Projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
