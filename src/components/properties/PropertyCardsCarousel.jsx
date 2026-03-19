"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/properties/PropertyCardsCarousel.module.css";
import { useLanguage } from "@/components/LanguageProvider";

const isArLocale = (locale) =>
  locale === "ar" || String(locale || "").startsWith("ar");

const safeArr = (value) => (Array.isArray(value) ? value.filter(Boolean) : []);

const isVideoUrl = (value) => {
  const clean = String(value || "").split("?")[0].toLowerCase();
  return [".mp4", ".webm", ".mov", ".m4v", ".ogg"].some((ext) => clean.endsWith(ext));
};

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
  const fallback = "";
  const amount = parsePriceToAED(priceAED);
  if (!amount) return fallback;

  try {
    if (amount < 1_000_000) {
      const value = Math.round(amount / 1_000);
      return isAr
        ? `${new Intl.NumberFormat("ar-AE").format(value)} \u0623\u0644\u0641`
        : `${new Intl.NumberFormat("en-US").format(value)}K`;
    }

    const value = amount / 1_000_000;
    const pretty = new Intl.NumberFormat(isAr ? "ar-AE" : "en-US", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);

    return isAr ? `${pretty} \u0645\u0644\u064a\u0648\u0646` : `${pretty}M`;
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
  const normalizedSlides = safeArr(project?.galleryImages).map((item) =>
    typeof item === "string" ? item : item?.url
  );
  const heroBg = node?.hero?.backgroundUrl;
  const heroImg = node?.hero?.image || node?.hero?.background;
  if (normalizedSlides.length) return normalizedSlides;
  if (gallerySlides.length) return gallerySlides;
  const fallback =
    project?.heroVideo || project?.heroImage || heroBg || heroImg || project?.image || null;
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
  const [videoFailed, setVideoFailed] = React.useState(false);
  const [imageFailed, setImageFailed] = React.useState(false);
  const total = slides.length || 0;

  React.useEffect(() => {
    setIndex(0);
    setVideoFailed(false);
    setImageFailed(false);
  }, [total]);

  if (!total) {
    return (
      <div className={styles.mediaPlaceholder}>
        {isAr ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0635\u0648\u0631" : "No media"}
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

  const currentSlide = slides[index];
  const currentUrl = typeof currentSlide === "string" ? currentSlide : currentSlide?.url;
  const isVideo = isVideoUrl(currentUrl);
  const showVideo = isVideo && !videoFailed;

  return (
    <div className={styles.mediaWrap}>
      {showVideo ? (
        <video
          className={styles.mediaImg}
          src={currentUrl}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          onError={() => setVideoFailed(true)}
        />
      ) : currentUrl && !imageFailed ? (
        <img
          className={styles.mediaImg}
          src={currentUrl}
          alt={alt}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className={styles.mediaPlaceholder}>
          {isAr ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0648\u0633\u0627\u0626\u0637" : "No media"}
        </div>
      )}
      {total > 1 ? (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.left}`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              go(isAr ? 1 : -1);
            }}
            aria-label={
              isAr
                ? "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629"
                : "Previous image"
            }
          >
            &lt;
          </button>

          <button
            type="button"
            className={`${styles.arrow} ${styles.right}`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              go(isAr ? -1 : 1);
            }}
            aria-label={
              isAr ? "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629" : "Next image"
            }
          >
            &gt;
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
      ) : null}
    </div>
  );
}

export default function PropertyCardsCarousel({ projects = [] }) {
  const { locale } = useLanguage();
  const isAr = isArLocale(locale);

  return (
    <div className={styles.grid} dir={isAr ? "rtl" : "ltr"}>
      {projects.map((project, index) => {
        const node = isAr
          ? project?.ar || project?.en || project
          : project?.en || project?.ar || project;

        const name =
          node?.project?.name ||
          project?.name ||
          project?.slug ||
          (isAr ? "\u0645\u0634\u0631\u0648\u0639" : "Project");

        const developer =
          node?.project?.developer ||
          project?.developerName ||
          project?.developer ||
          "";

        const location =
          node?.project?.location || project?.location || (isAr ? "\u062f\u0628\u064a\u060c \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a" : "Dubai, UAE");
        const unitTypes = node?.project?.unitTypes || project?.unitTypes || project?.unitType || "";
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
              ? `${minBeds} ${isAr ? "\u063a\u0631\u0641\u0629" : "Bed"}`
              : `${minBeds}-${maxBeds} ${isAr ? "\u063a\u0631\u0641" : "Beds"}`
            : "";

        const href = getProjectHref(project, locale);
        const slides = getSlides(project);
        const status =
          project?.status ||
          project?.devStatus ||
          node?.project?.status ||
          (isAr ? "\u0645\u062a\u0627\u062d" : "Available");

        return (
          <Link
            key={`${project?.slug || project?.id || index}`}
            href={href}
            className={styles.card}
            aria-label={name}
          >
            <div className={styles.cardTop}>
              <CardCarousel slides={slides} alt={name} isAr={isAr} />
              <div className={styles.ribbon}>{isAr ? "\u0645\u0645\u064a\u0632" : "FEATURED"}</div>
              <div className={styles.status}>{String(status)}</div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.iconsRow}>
                <span
                  className={styles.iconBtn}
                  title={isAr ? "\u0645\u0641\u0636\u0644\u0629" : "Favorite"}
                >
                  {isAr ? "\u062d\u0641\u0638" : "SAVE"}
                </span>
                <span
                  className={styles.iconBtn}
                  title={isAr ? "\u0645\u0634\u0627\u0631\u0643\u0629" : "Share"}
                >
                  {isAr ? "\u0645\u0634\u0627\u0631\u0643\u0629" : "SHARE"}
                </span>
              </div>

              <h3 className={styles.title}>{name}</h3>

              <div className={styles.subTitle}>
                {bedsText ? (
                  <span>{bedsText}</span>
                ) : (
                  <span>
                    {Array.isArray(unitTypes) ? unitTypes.join(" • ") : String(unitTypes || "")}
                  </span>
                )}
              </div>

              <div className={styles.location}>
                <span className={styles.pin}>{isAr ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location"}</span>
                <span>{location}</span>
              </div>

              <div className={styles.rangeBox}>
                <div className={styles.rangeLabel}>
                  {isAr ? "\u064a\u0628\u062f\u0623 \u0645\u0646" : "STARTING FROM"}
                </div>
                <div className={styles.rangeValue}>{fmtPriceShort(startingPrice, isAr)}</div>

                <div className={styles.toRow}>
                  <div className={styles.toLabel}>
                    {isAr ? "\u0627\u0644\u062a\u0633\u0644\u064a\u0645" : "Handover"}
                  </div>
                  <div className={styles.toValue}>
                    {completion || ""}
                  </div>
                </div>

                <div className={styles.devLine}>
                  {developer ? (
                    <span className={styles.devText}>
                      {isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631: " : "Developer: "} {developer}
                    </span>
                  ) : (
                    <span className={styles.devText}>
                      {isAr
                        ? "* \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u063a\u064a\u064a\u0631"
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
