"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/properties/PropertyCardsCarousel.module.css";
import { useLanguage } from "@/components/LanguageProvider";

/* ---------------------------------------
  Helpers
--------------------------------------- */

const isArLocale = (locale) =>
  locale === "ar" || String(locale || "").startsWith("ar");

const safeArr = (v) => (Array.isArray(v) ? v.filter(Boolean) : []);

function fmtPriceShort(priceAED, isAr) {
  const fallback = isAr ? "السعر عند الطلب" : "Price on request";
  const n = Number(priceAED);
  if (!Number.isFinite(n) || n <= 0) return fallback;

  try {
    if (n < 1_000_000) {
      const k = Math.round(n / 1_000);
      return isAr
        ? `${new Intl.NumberFormat("ar-AE").format(k)} ألف`
        : `${new Intl.NumberFormat("en-US").format(k)}K`;
    }
    const m = n / 1_000_000;
    const pretty = new Intl.NumberFormat(isAr ? "ar-AE" : "en-US", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(m);
    return isAr ? `${pretty} مليون` : `${pretty}M`;
  } catch {
    return String(priceAED);
  }
}

function getLocalizedNode(project) {
  // Supports: {en:{...}, ar:{...}} or raw object
  const node =
    project?.en || project?.ar ? project?.en || project?.ar : project;
  return node || {};
}

function getSlides(project) {
  const node = getLocalizedNode(project);
  const gallerySlides = safeArr(node?.gallery?.slides);
  const heroBg = node?.hero?.backgroundUrl;
  const heroImg = node?.hero?.image || node?.hero?.background;

  // Priority: gallery slides → hero background/image → any project.image
  if (gallerySlides.length) return gallerySlides;

  const fallback = heroBg || heroImg || project?.image || null;
  return fallback ? [fallback] : [];
}

function getProjectHref(project, locale) {
  if (project?.href) return project.href;
  const prefix = locale ? `/${locale}` : "";

  // Your current structure: /projects/[category]/[developer]/[project]
  if (project?.category && project?.developerSlug && project?.slug) {
    return `${prefix}/properties/${project.category}/${project.developerSlug}/${project.slug}`;
  }

  // fallback
  if (project?.slug) return `${prefix}/properties/${project.slug}`;

  return "#";
}

/* ---------------------------------------
  Carousel inside the card
--------------------------------------- */

function CardCarousel({ slides, alt, isAr }) {
  const [i, setI] = React.useState(0);
  const total = slides.length || 0;

  React.useEffect(() => {
    setI(0);
  }, [total]);

  if (!total) {
    return (
      <div className={styles.mediaPlaceholder}>
        {isAr ? "لا توجد صور" : "No media"}
      </div>
    );
  }

  const go = (dir) => {
    setI((prev) => {
      const next = prev + dir;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  };

  return (
    <div className={styles.mediaWrap}>
      <img
        className={styles.mediaImg}
        src={slides[i]}
        alt={alt}
        loading="lazy"
      />
      {total > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.left}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              go(isAr ? 1 : -1);
            }}
            aria-label={isAr ? "الصورة السابقة" : "Previous image"}
          >
            ‹
          </button>

          <button
            type="button"
            className={`${styles.arrow} ${styles.right}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              go(isAr ? -1 : 1);
            }}
            aria-label={isAr ? "الصورة التالية" : "Next image"}
          >
            ›
          </button>

          <div className={styles.dots}>
            {slides.slice(0, 8).map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${idx === i ? styles.dotActive : ""}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------------------------------
  Main component
--------------------------------------- */

export default function PropertyCardsCarousel({ projects = [] }) {
  const { locale } = useLanguage();
  const isAr = isArLocale(locale);

  return (
    <div className={styles.grid} dir={isAr ? "rtl" : "ltr"}>
      {projects.map((project, idx) => {
        const node = isAr
          ? project?.ar || project?.en || project
          : project?.en || project?.ar || project;
        const name =
          node?.project?.name ||
          project?.name ||
          project?.slug ||
          (isAr ? "مشروع" : "Project");
        const developer =
          node?.project?.developer ||
          project?.developerName ||
          project?.developer ||
          "";
        const location = node?.project?.location || project?.location || "";
        const unitTypes =
          node?.project?.unitTypes ||
          project?.unitTypes ||
          project?.unitType ||
          "";
        const completion =
          node?.project?.completionDate ||
          project?.completionDate ||
          project?.completionYear ||
          "";
        const startingPrice =
          node?.project?.startingPrice ||
          project?.startingPriceAED ||
          project?.priceAED ||
          project?.startingPriceAED;

        // optional extras if you have them in listing object:
        const minBeds = project?.minBedrooms;
        const maxBeds = project?.maxBedrooms;
        const bedsText =
          Number.isFinite(minBeds) && Number.isFinite(maxBeds)
            ? minBeds === maxBeds
              ? `${minBeds} ${isAr ? "غرفة" : "Bed"}`
              : `${minBeds}–${maxBeds} ${isAr ? "غرف" : "Beds"}`
            : "";

        const href = getProjectHref(project, locale);
        const slides = getSlides(project);

        const status =
          project?.status ||
          project?.devStatus ||
          node?.project?.status ||
          (isAr ? "متاح" : "Available");

        return (
          <Link
            key={`${project?.slug || project?.id || idx}`}
            href={href}
            className={styles.card}
            aria-label={name}
          >
            <div className={styles.cardTop}>
              <CardCarousel slides={slides} alt={name} isAr={isAr} />

              {/* badge like Sobha (NEW) */}
              <div className={styles.ribbon}>{isAr ? "جديد" : "NEW"}</div>

              {/* status chip */}
              <div className={styles.status}>{String(status)}</div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.iconsRow}>
                <span
                  className={styles.iconBtn}
                  title={isAr ? "مفضلة" : "Favorite"}
                >
                  ♡
                </span>
                <span
                  className={styles.iconBtn}
                  title={isAr ? "مشاركة" : "Share"}
                >
                  ↗
                </span>
              </div>

              <h3 className={styles.title}>{name}</h3>

              <div className={styles.subTitle}>
                {bedsText ? (
                  <span>{bedsText}</span>
                ) : (
                  <span>
                    {Array.isArray(unitTypes)
                      ? unitTypes.join(" • ")
                      : String(unitTypes || "")}
                  </span>
                )}
              </div>

              <div className={styles.location}>
                <span className={styles.pin}>📍</span>
                <span>{location}</span>
              </div>

              <div className={styles.rangeBox}>
                <div className={styles.rangeLabel}>
                  {isAr ? "يبدأ من" : "RANGING FROM"}
                </div>
                <div className={styles.rangeValue}>
                  {isAr ? "درهم" : "AED"} {fmtPriceShort(startingPrice, isAr)}*
                </div>

                <div className={styles.toRow}>
                  <div className={styles.toLabel}>
                    {isAr ? "التسليم" : "Handover"}
                  </div>
                  <div className={styles.toValue}>
                    {completion || (isAr ? "قريباً" : "TBA")}
                  </div>
                </div>

                <div className={styles.devLine}>
                  {developer ? (
                    <span className={styles.devText}>
                      {isAr ? "المطور: " : "Developer: "} {developer}
                    </span>
                  ) : (
                    <span className={styles.devText}>
                      {isAr
                        ? "* الأسعار قابلة للتغيير"
                        : "* Subject to availability"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
