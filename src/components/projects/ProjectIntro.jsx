"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import GenerateSalesOfferButton from "@/components/projects/GenerateSalesOfferButton";
import styles from "@/styles/projects/ProjectIntro.module.css";
import { useLanguage } from "@/components/LanguageProvider";

function normalizeAmenities(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.filter(Boolean);
  if (Array.isArray(raw.amenities)) return raw.amenities.filter(Boolean);
  if (Array.isArray(raw.items)) return raw.items.filter(Boolean);
  return [];
}

export default function ProjectIntro({
  data,
  projectData,
  rawProjectData,
  isRTL,
  locale,
}) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  const [isVisible, setIsVisible] = useState(false);
  const [activeGalleryStartIndex, setActiveGalleryStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (!data || !projectData) return null;

  const intro = data;
  const project = projectData?.hero || {};

  const galleryImages = useMemo(() => {
    const gallerySlides = projectData?.gallery?.slides;
    if (Array.isArray(gallerySlides) && gallerySlides.length > 0) {
      return gallerySlides.filter(Boolean);
    }

    const images = [];
    if (Array.isArray(data?.propertyImages)) {
      images.push(...data.propertyImages.map((img) => img?.src || img).filter(Boolean));
    }
    if (data?.imgUrl) images.push(data.imgUrl);

    if (images.length === 0) {
      const fallbackImage =
        projectData?.hero?.squareImageUrl ||
        projectData?.hero?.backgroundUrl;
      if (fallbackImage) images.push(fallbackImage);
    }

    return images;
  }, [data, projectData]);

  const brochures = useMemo(() => {
    const candidates = [];
    const pushBrochure = (item, fallbackTitle = "") => {
      const url = item?.url || item?.href || "";
      if (!url) return;
      candidates.push({
        id:
          item?.id ||
          item?.type ||
          item?.url ||
          item?.href ||
          `${candidates.length}-${item?.title || fallbackTitle || "brochure"}`,
        title:
          item?.title ||
          fallbackTitle ||
          (activeIsRTL
            ? "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0628\u0631\u0648\u0634\u0648\u0631"
            : "Download Brochure"),
        url,
      });
    };

    if (Array.isArray(data?.brochures)) {
      data.brochures.forEach((item) => pushBrochure(item));
    }

    if (Array.isArray(projectData?.intro?.brochures)) {
      projectData.intro.brochures.forEach((item) => pushBrochure(item));
    }

    if (projectData?.brochureUrl) {
      pushBrochure(
        { url: projectData.brochureUrl, type: "main" },
        activeIsRTL ? "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0628\u0631\u0648\u0634\u0648\u0631" : "Download Brochure"
      );
    }

    if (rawProjectData?.brochureUrl) {
      pushBrochure(
        { url: rawProjectData.brochureUrl, type: "main" },
        activeIsRTL ? "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0628\u0631\u0648\u0634\u0648\u0631" : "Download Brochure"
      );
    }

    const seen = new Set();
    return candidates.filter((item) => {
      if (!item.url || seen.has(item.url)) return false;
      seen.add(item.url);
      return true;
    });
  }, [data, projectData, rawProjectData, activeIsRTL]);

  const heading =
    intro.title ||
    intro.heading ||
    "";

  const paragraphs = useMemo(() => {
    const raw =
      Array.isArray(intro.paragraphs) && intro.paragraphs.length
        ? intro.paragraphs
        : intro.description
          ? [intro.description]
          : [];
    // Split long single-paragraph text into multiple paragraphs at sentence boundaries
    if (raw.length === 1 && typeof raw[0] === "string" && raw[0].length > 200) {
      const text = raw[0].trim();
      // Split on double newlines first
      const byNewline = text.split(/\n\s*\n/).filter(Boolean);
      if (byNewline.length > 1) return byNewline.map((p) => p.trim());
      // Otherwise split on sentences, grouping ~2-3 sentences per paragraph
      const sentences = text.match(/[^.!?؟]+[.!?؟]+/g);
      if (sentences && sentences.length > 2) {
        const chunks = [];
        const perChunk = Math.ceil(sentences.length / Math.ceil(sentences.length / 3));
        for (let i = 0; i < sentences.length; i += perChunk) {
          chunks.push(sentences.slice(i, i + perChunk).join("").trim());
        }
        return chunks.filter(Boolean);
      }
    }
    return raw;
  }, [intro.paragraphs, intro.description]);

  const normalizeKey = useCallback(
    (value) =>
      String(value || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " "),
    []
  );

  const isLocationLabel = useCallback(
    (label) => {
      const key = normalizeKey(label);
      return (
        key === "location" ||
        key === "\u0627\u0644\u0645\u0648\u0642\u0639" ||
        key.includes("location") ||
        key.includes("\u0627\u0644\u0645\u0648\u0642\u0639")
      );
    },
    [normalizeKey]
  );

  const stats = useMemo(() => {
    const result = [];
    const used = new Set();

    const addStat = (label, value) => {
      if (!label || !value) return;
      if (isLocationLabel(label)) return;

      const key = normalizeKey(label);
      if (used.has(key)) return;

      used.add(key);
      result.push({ icon: "", label, value });
    };

    addStat(
      activeIsRTL
        ? "\u0627\u0644\u0633\u0639\u0631 \u064a\u0628\u062f\u0623 \u0645\u0646"
        : "Starting Price",
      project?.startingPrice
    );
    addStat(
      activeIsRTL ? "\u0627\u0644\u062d\u0627\u0644\u0629" : "Status",
      project?.status
    );
    addStat(
      activeIsRTL ? "\u0627\u0644\u0646\u0648\u0639" : "Type",
      project?.type
    );

    const handoverValue =
      project?.handover ||
      project?.handoverDate ||
      project?.deliveryDate ||
      project?.completion ||
      project?.completionDate;

    addStat(
      activeIsRTL ? "\u0627\u0644\u062a\u0633\u0644\u064a\u0645" : "Handover",
      handoverValue
    );

    const floatingCards = Array.isArray(intro?.floatingCards)
      ? intro.floatingCards
      : [];
    for (const card of floatingCards) {
      if (result.length >= 4) break;
      addStat(card?.label, card?.value);
    }

    if (result.length < 4) {
      addStat(
        activeIsRTL ? "\u0627\u0644\u0645\u0637\u0648\u0631" : "Developer",
        project?.developer
      );
    }
    if (result.length < 4) {
      addStat(
        activeIsRTL ? "\u0639\u062f\u062f \u0627\u0644\u063a\u0631\u0641" : "Bedrooms",
        project?.bedrooms
      );
    }
    if (result.length < 4) {
      addStat(
        activeIsRTL ? "\u0627\u0644\u0645\u0633\u0627\u062d\u0629" : "Area",
        project?.area
      );
    }

    return result.slice(0, 4);
  }, [activeIsRTL, intro?.floatingCards, isLocationLabel, normalizeKey, project]);

  const currentGallerySet = useMemo(() => {
    const fallback =
      projectData?.hero?.squareImageUrl ||
      projectData?.hero?.backgroundUrl ||
      "";

    if (!galleryImages.length) {
      if (!fallback) return [];
      return [fallback, fallback, fallback, fallback];
    }

    return Array.from({ length: 4 }).map((_, index) => {
      const imageIndex = (activeGalleryStartIndex + index) % galleryImages.length;
      return galleryImages[imageIndex] || fallback;
    });
  }, [activeGalleryStartIndex, galleryImages, projectData]);

  const uniqueSetsCount = useMemo(
    () => Math.max(1, Math.ceil((galleryImages.length || 1) / 4)),
    [galleryImages.length]
  );

  const activeSetIndex =
    Math.floor(activeGalleryStartIndex / 4) % Math.max(uniqueSetsCount, 1);

  const transitionToNextSet = useCallback(() => {
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveGalleryStartIndex((previous) => {
        const nextIndex = previous + 4;
        const maxIndex = Math.max(0, galleryImages.length - 4);
        return nextIndex >= maxIndex ? 0 : nextIndex;
      });

      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [galleryImages.length]);

  const handleDotClick = useCallback(
    (index) => {
      if (isTransitioning || activeSetIndex === index) return;

      setIsTransitioning(true);

      setTimeout(() => {
        const newStartIndex = (index * 4) % Math.max(galleryImages.length, 1);
        setActiveGalleryStartIndex(newStartIndex);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    },
    [activeSetIndex, galleryImages.length, isTransitioning]
  );

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      transitionToNextSet();
    }, 5000);

    return () => clearInterval(interval);
  }, [transitionToNextSet]);

  const brochureAriaTarget = project?.title || project?.developer || "project";
  const galleryAriaPrefix =
    activeIsRTL
      ? "\u0645\u0639\u0631\u0636 \u0635\u0648\u0631"
      : "Gallery";
  const gallerySetLabel =
    activeIsRTL
      ? "\u0639\u0631\u0636 \u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0635\u0648\u0631"
      : "View gallery set";

  return (
    <section
      className={`${styles.projectIntro} ${isVisible ? styles.fadeInUp : ""}`}
      dir={activeIsRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.textColumn}>
            <div className={styles.paragraphs}>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            {project?.location ? (
              <div className={styles.locationSection}>
                <div className={styles.locationLabel}>
                  {activeIsRTL ? "\u0627\u0644\u0645\u0648\u0642\u0639:" : "Location:"}
                </div>
                <div className={styles.locationValue}>{project.location}</div>
              </div>
            ) : null}

            {(brochures.length > 0 || rawProjectData) ? (
              <div className={styles.brochuresSection}>
                <div className={styles.brochuresGrid}>
                  {brochures.map((brochure, index) => (
                    <a
                      key={brochure?.id || brochure?.url || index}
                      href={brochure?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.downloadBrochure}
                      aria-label={`View ${brochureAriaTarget} brochure`}
                    >
                      <span className={styles.brochureText}>
                        {brochure?.title || "Download Brochure"}
                      </span>

                      <div className={styles.downloadIcon}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 16L12 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7 11L12 16L17 11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 20H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}

                  {projectData ? (
                    <GenerateSalesOfferButton projectData={projectData} />
                  ) : null}
                </div>
              </div>
            ) : null}

            {stats.length > 0 ? (
              <div className={styles.statsContainer}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statCard}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className={styles.galleryColumn}>
            <div
              className={`${styles.galleryGrid} ${
                isTransitioning ? styles.galleryFadeOut : styles.galleryFadeIn
              }`}
            >
              {currentGallerySet.map((imageUrl, index) => (
                <div
                  key={`${activeGalleryStartIndex}-${index}`}
                  className={styles.galleryItem}
                >
                  <Image
                    src={imageUrl}
                    alt={`${project?.name || "Project"} - ${galleryAriaPrefix} ${index + 1}`}
                    fill
                    className={styles.galleryImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.galleryNumber}>{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            {uniqueSetsCount > 1 ? (
              <div className={styles.galleryNav}>
                {Array.from({ length: uniqueSetsCount }).map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.navDot} ${
                      activeSetIndex === index ? styles.active : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                    disabled={isTransitioning}
                    aria-label={`${gallerySetLabel} ${index + 1}`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
