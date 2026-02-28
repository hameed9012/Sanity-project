"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import styles from "@/styles/projects/ProjectIntro.module.css";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectIntro({ data, projectData, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  const [isVisible, setIsVisible] = useState(false);
  const [activeGalleryStartIndex, setActiveGalleryStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (!data || !projectData) return null;

  const intro = data;
  const { project } = projectData;

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // Get gallery data from projectData if available
  const galleryData = projectData?.gallery;

  // Get gallery images from projectData.gallery or use intro images
  const galleryImages = useMemo(() => {
    if (galleryData?.slides && Array.isArray(galleryData.slides)) {
      return galleryData.slides;
    }

    const images = [];
    if (data.propertyImages && Array.isArray(data.propertyImages)) {
      images.push(...data.propertyImages.map((img) => img.src || img));
    }
    if (data.imgUrl) images.push(data.imgUrl);

    if (images.length === 0)
      images.push(`${CDN}/sky-parks/exterior-day-01.jpg`);

    return images;
  }, [galleryData, data]);

  // Smooth transition function
  const transitionToNextSet = useCallback(() => {
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveGalleryStartIndex((prev) => {
        const nextIndex = prev + 4;
        const maxIndex = Math.max(0, galleryImages.length - 4);
        return nextIndex >= maxIndex ? 0 : nextIndex;
      });

      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [galleryImages.length]);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      transitionToNextSet();
    }, 5000);

    return () => clearInterval(interval);
  }, [transitionToNextSet]);

  // ✅ Normalize brochures
  const brochures = useMemo(() => {
    const raw = (data && data.brochures) || [];
    if (!Array.isArray(raw)) return [];

    return raw
      .filter((b) => b && (b.url || b.href))
      .map((b, idx) => ({
        id: b.id || b.type || `${idx}-${b.title || "brochure"}`,
        title: b.title || (activeIsRTL ? "تحميل الملف" : "Download File"),
        url: b.url || b.href,
      }));
  }, [data, activeIsRTL]);

  // Create current gallery set of 4 images (loops if less)
  const currentGallerySet = useMemo(() => {
    const set = [];
    const fallback = `${CDN}/sky-parks/exterior-day-01.jpg`;

    if (!galleryImages || galleryImages.length === 0) {
      return [fallback, fallback, fallback, fallback];
    }

    for (let i = 0; i < 4; i++) {
      const index = (activeGalleryStartIndex + i) % galleryImages.length;
      set.push(galleryImages[index]);
    }

    return set;
  }, [galleryImages, activeGalleryStartIndex]);

  // How many sets of 4
  const uniqueSetsCount = useMemo(() => {
    if (!galleryImages || galleryImages.length === 0) return 1;
    return Math.max(1, Math.ceil(galleryImages.length / 4));
  }, [galleryImages]);

  const heading =
    intro.title ||
    intro.heading ||
    (activeIsRTL ? "عنوان المشروع" : "LIVE WHERE THE SKY FEELS LIKE HOME");

  const paragraphs =
    intro.paragraphs && intro.paragraphs.length
      ? intro.paragraphs
      : [
          activeIsRTL
            ? "هنا يمكنك إضافة وصف عربي للمشروع يشبه نص صفحة شوبا الأصلية."
            : "Here you can add a detailed English description of the project similar to the original Sobha page.",
        ];

  // ✅ Helpers
  const normalizeKey = (s) =>
    String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

  const isLocationLabel = (label) => {
    const k = normalizeKey(label);
    // English/Arabic common keys that mean location
    return (
      k === "location" ||
      k === "الموقع" ||
      k.includes("location") ||
      k.includes("الموقع")
    );
  };

  // ✅ Stats: ALWAYS SAME 4 (and NEVER include Location because it's shown in the location section)
  const stats = useMemo(() => {
    const result = [];
    const used = new Set();

    const addStat = (label, value) => {
      if (!label || !value) return;
      if (isLocationLabel(label)) return; // 🚫 NEVER add location in stats

      const key = normalizeKey(label);
      if (used.has(key)) return;

      used.add(key);
      result.push({
        icon: "",
        label,
        value,
      });
    };

    // 1) Starting Price
    addStat(
      activeIsRTL ? "السعر يبدأ من" : "Starting Price",
      project?.startingPrice,
    );

    // 2) Status
    addStat(activeIsRTL ? "الحالة" : "Status", project?.status);

    // 3) Type
    addStat(activeIsRTL ? "النوع" : "Type", project?.type);

    // 4) Handover / Completion / Delivery (first available)
    const handoverValue =
      project?.handover ||
      project?.handoverDate ||
      project?.deliveryDate ||
      project?.completion ||
      project?.completionDate;

    addStat(activeIsRTL ? "التسليم" : "Handover", handoverValue);

    // If still less than 4, fill from intro.floatingCards (WITHOUT duplicates and WITHOUT location)
    const floating = Array.isArray(intro?.floatingCards)
      ? intro.floatingCards
      : [];

    for (const card of floating) {
      if (result.length >= 4) break;
      if (!card?.label || !card?.value) continue;

      addStat(card.label, card.value);
    }

    // Still less? Fill from some common project fields
    if (result.length < 4) {
      addStat(activeIsRTL ? "المطور" : "Developer", project?.developer);
    }
    if (result.length < 4) {
      addStat(activeIsRTL ? "عدد الغرف" : "Bedrooms", project?.bedrooms);
    }
    if (result.length < 4) {
      addStat(activeIsRTL ? "المساحة" : "Area", project?.area);
    }

    return result.slice(0, 4);
  }, [intro?.floatingCards, project, activeIsRTL]);

  const activeSetIndex =
    Math.floor(activeGalleryStartIndex / 4) % uniqueSetsCount;

  const handleDotClick = (index) => {
    if (isTransitioning || activeSetIndex === index) return;

    setIsTransitioning(true);

    setTimeout(() => {
      const newStartIndex = (index * 4) % galleryImages.length;
      setActiveGalleryStartIndex(newStartIndex);

      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

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
          {/* Left Column - Text & Brochures */}
          <div className={styles.textColumn}>
            <div className={styles.paragraphs}>
              {paragraphs.map((p, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>

            {/* ✅ Location Display (ONLY HERE) */}
            {project?.location && (
              <div className={styles.locationSection}>
                <div className={styles.locationLabel}>
                  {activeIsRTL ? "الموقع:" : "Location:"}
                </div>
                <div className={styles.locationValue}>{project.location}</div>
              </div>
            )}

            {/* Brochures Section */}
            {brochures.length > 0 && (
              <div className={styles.brochuresSection}>
                <div className={styles.brochuresGrid}>
                  {brochures.map((b) => (
                    <a
                      key={b.id}
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.brochureCard}
                    >
                      <span className={styles.brochureTitle}>{b.title}</span>
                      <span className={styles.brochureMeta}>PDF</span>
                      <span className={styles.brochureIcon}>📄</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Stats Cards (NO LOCATION + NO EMOJIS) */}
            {stats.length > 0 && (
              <div className={styles.statsContainer}>
                {stats.map((stat, idx) => (
                  <div key={idx} className={styles.statCard}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Creative Gallery */}
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
                    alt={`${project?.name || "Project"} - Gallery ${index + 1}`}
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

            {/* Gallery Navigation Dots */}
            {uniqueSetsCount > 1 && (
              <div className={styles.galleryNav}>
                {Array.from({ length: uniqueSetsCount }).map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.navDot} ${
                      activeSetIndex === index ? styles.active : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                    disabled={isTransitioning}
                    aria-label={`View gallery set ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
