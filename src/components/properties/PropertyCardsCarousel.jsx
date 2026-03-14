"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/properties/PropertyCardsCarousel.module.css";
import { useLanguage } from "@/components/LanguageProvider";

const isArLocale = (locale) =>
  locale === "ar" || String(locale || "").startsWith("ar");

const safeArr = (value) => (Array.isArray(value) ? value.filter(Boolean) : []);

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

function fmtPriceShort(priceAED, isAr) {
  const fallback = isAr ? "السعر عند الطلب" : "Price on request";
  const amount = parsePriceToAED(priceAED);
  if (!amount) return fallback;

  try {
    if (amount < 1_000_000) {
      const value = Math.round(amount / 1_000);
      return isAr
        ? `${new Intl.NumberFormat("ar-AE").format(value)} ألف`
        : `${new Intl.NumberFormat("en-US").format(value)}K`;
    }

    const value = amount / 1_000_000;
    const pretty = new Intl.NumberFormat(isAr ? "ar-AE" : "en-US", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);

    return isAr ? `${pretty} مليون` : `${pretty}M`;
  } catch {
    return fallback;
  }
}

function getLocalizedNode(project) {
  if (project?.en || project?.ar) return project?.en || project?.ar || {};
  return project || {};
}

function getSlides(project) {
  const node = getLocalizedNode(project);
  const gallerySlides = safeArr(node?.gallery?.slides);
  const heroBg = node?.hero?.backgroundUrl;
  const heroImg = node?.hero?.image || node?.hero?.background;
  if (gallerySlides.length) return gallerySlides;
  const fallback = heroBg || heroImg || project?.image || null;
  return fallback ? [fallback] : [];
}

function getProjectHref(project, locale) {
  if (project?.href) return project.href;
  const prefix = locale ? `/${locale}` : "";

  if (project?.category && project?.developerSlug && project?.slug) {
    return `${prefix}/properties/${project.category}/${project.developerSlug}/${project.slug}`;
  }

  if (project?.slug) return `${prefix}/properties/${project.slug}`;
  return "#";
}

function CardCarousel({ slides, alt, isAr }) {
  const [index, setIndex] = React.useState(0);
  const total = slides.length || 0;

  React.useEffect(() => {
    setIndex(0);
  }, [total]);

  if (!total) {
    return (
      <div className={styles.mediaPlaceholder}>
        {isAr ? "لا توجد صور" : "No media"}
      </div>
    );
  }

  const go = (direction) => {
    setIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  };

  return (
    <div className={styles.mediaWrap}>
      <img className={styles.mediaImg} src={slides[index]} alt={alt} loading="lazy" />
      {total > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.left}`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              go(isAr ? 1 : -1);
            }}
            aria-label={isAr ? "الصورة السابقة" : "Previous image"}
          >
            ‹
          </button>

          <button
            type="button"
            className={`${styles.arrow} ${styles.right}`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              go(isAr ? -1 : 1);
            }}
            aria-label={isAr ? "الصورة التالية" : "Next image"}
          >
            ›
          </button>

          <div className={styles.dots}>
            {slides.slice(0, 8).map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`${styles.dot} ${dotIndex === index ? styles.dotActive : ""}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
          project?.startingPrice;

        const minBeds = project?.minBedrooms;
        const maxBeds = project?.maxBedrooms;
        const bedsText =
          Number.isFinite(minBeds) && Number.isFinite(maxBeds)
            ? minBeds === maxBeds
              ? `${minBeds} ${isAr ? "غرفة" : "Bed"}`
              : `${minBeds}-${maxBeds} ${isAr ? "غرف" : "Beds"}`
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
              <div className={styles.ribbon}>{isAr ? "جديد" : "NEW"}</div>
              <div className={styles.status}>{String(status)}</div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.iconsRow}>
                <span className={styles.iconBtn} title={isAr ? "مفضلة" : "Favorite"}>
                  ♡
                </span>
                <span className={styles.iconBtn} title={isAr ? "مشاركة" : "Share"}>
                  ↗
                </span>
              </div>

              <h3 className={styles.title}>{name}</h3>

              <div className={styles.subTitle}>
                {bedsText ? (
                  <span>{bedsText}</span>
                ) : (
                  <span>{Array.isArray(unitTypes) ? unitTypes.join(" • ") : String(unitTypes || "")}</span>
                )}
              </div>

              <div className={styles.location}>
                <span className={styles.pin}>📍</span>
                <span>{location}</span>
              </div>

              <div className={styles.rangeBox}>
                <div className={styles.rangeLabel}>{isAr ? "يبدأ من" : "RANGING FROM"}</div>
                <div className={styles.rangeValue}>{fmtPriceShort(startingPrice, isAr)}</div>

                <div className={styles.toRow}>
                  <div className={styles.toLabel}>{isAr ? "التسليم" : "Handover"}</div>
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
                      {isAr ? "* الأسعار قابلة للتغيير" : "* Subject to availability"}
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
