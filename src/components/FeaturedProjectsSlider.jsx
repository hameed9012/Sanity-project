"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";
import styles from "@/styles/FeaturedProjectsSlider.module.css";

const AUTOPLAY_MS = 7000;

function formatPrice(value, isAr = false) {
  const num = Number(value);

  if (!Number.isFinite(num) || num <= 0) {
    return isAr ? "السعر عند الطلب" : "Price on request";
  }

  if (num >= 1_000_000) {
    const v = (num / 1_000_000)
      .toFixed(num >= 10_000_000 ? 0 : 1)
      .replace(/\.0$/, "");
    return isAr ? `د.إ ${v}M` : `AED ${v}M`;
  }

  if (num >= 1_000) {
    const v = Math.round(num / 1_000);
    return isAr ? `د.إ ${v}K` : `AED ${v}K`;
  }

  return isAr ? `د.إ ${num}` : `AED ${num}`;
}

function getProjectLogo(project) {
  return (
    project?.data?.hero?.squareImageUrl ||
    project?.logo ||
    project?.developerLogo ||
    ""
  );
}

function getProjectAmenities(project) {
  const amenities =
    project?.data?.amenities?.amenities ||
    project?.amenities ||
    [];

  if (!Array.isArray(amenities)) return [];

  return amenities
    .map((item) => {
      if (typeof item === "string") return item;
      if (item?.label) return item.label;
      if (item?.title) return item.title;
      return "";
    })
    .filter(Boolean)
    .slice(0, 4);
}

function getProjectBrochureUrl(project) {
  return (
    project?.data?.intro?.brochures?.[0]?.url ||
    project?.brochureUrl ||
    ""
  );
}

export default function HomeHeroSlider() {
  const { locale } = useLanguage();
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");
  const { allProjects, loading } = useAllProjects();

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  const projects = useMemo(() => {
    return (allProjects || [])
      .filter((p) => p?.image && p?.name)
      .slice(0, 12)
      .map((p, index) => ({
        id: p?._id || p?.slug || p?.id || index,
        title: p?.name || "",
        image: p?.image || "",
        developerName:
          p?.developer ||
          p?.developerName ||
          p?.developerNameEn ||
          "",
        location: p?.location || "",
        priceAED: p?.priceAED || p?.startingPriceAED || p?.price || null,
        status: p?.status || "Available",
        propertyType: p?.unitType || p?.type || "Luxury Property",
        href: p?.href || "#",
        completion: p?.completionDate || p?.handover || "",
        logo: getProjectLogo(p),
        brochureUrl: getProjectBrochureUrl(p),
        amenities: getProjectAmenities(p),
      }));
  }, [allProjects]);

  const current = projects[currentIndex];

  const clearAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const startAutoplay = () => {
    clearAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % projects.length);
    }, AUTOPLAY_MS);
  };

  const handleNext = () => {
    if (projects.length <= 1) return;
    setCurrentIndex((i) => (i + 1) % projects.length);
    startAutoplay();
  };

  const handlePrev = () => {
    if (projects.length <= 1) return;
    setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);
    startAutoplay();
  };

  useEffect(() => {
    if (projects.length > 1) {
      startAutoplay();
      return () => clearAutoplay();
    }
  }, [projects.length]);

  if (loading && !projects.length) {
    return (
      <section className={`${styles.heroSection} ${isAr ? styles.rtl : ""}`}>
        <div className={styles.loadingPlaceholder}>Loading...</div>
      </section>
    );
  }

  if (!projects.length) return null;

  return (
    <section className={`${styles.heroSection} ${isAr ? styles.rtl : ""}`}>
      <div className={styles.titleSection}>
        <div className={styles.linesOnSides}>
          <h2 className={styles.heading2}>
            {isAr ? "مشاريع مميزة" : "Featured Projects"}
          </h2>
        </div>

        <div className={styles.quickStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{projects.length}</div>
            <div className={styles.statLabel}>
              {isAr ? "مشاريع" : "Projects"}
            </div>
          </div>

          <div className={styles.statDivider}>|</div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              {new Set(projects.map((p) => p.developerName).filter(Boolean)).size}
            </div>
            <div className={styles.statLabel}>
              {isAr ? "مطورون" : "Developers"}
            </div>
          </div>

          <div className={styles.statDivider}>|</div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              {new Set(projects.map((p) => p.location).filter(Boolean)).size}
            </div>
            <div className={styles.statLabel}>
              {isAr ? "مواقع" : "Locations"}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <div
          className={styles.sliderTrack}
          style={{
            transform: isAr
              ? `translateX(${currentIndex * 100}%)`
              : `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {projects.map((project) => (
            <div className={styles.slide} key={project.id}>
              <img
                src={project.image}
                alt={project.title || "Project image"}
                className={styles.backgroundImage}
              />

              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.overlayBadge}>
                    <span className={styles.badgeText}>{project.status}</span>
                  </div>

                  <h3 className={styles.overlayTitle}>{project.title}</h3>

                  {project.location ? (
                    <div className={styles.overlayLocation}>
                      {project.location}
                    </div>
                  ) : null}

                  <div className={styles.overlayPrice}>
                    {formatPrice(project.priceAED, isAr)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={handlePrev}
          aria-label="Previous slide"
          type="button"
        >
          <span className={styles.arrowIcon} />
        </button>

        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={handleNext}
          aria-label="Next slide"
          type="button"
        >
          <span className={styles.arrowIcon} />
        </button>
      </div>

      <div className={styles.bottomStrip}>
        <div className={styles.bottomInner}>
          <div className={styles.topRow}>
            <div className={styles.projectInfoBlock}>
              <div className={styles.logoTitleRow}>
                {current?.logo ? (
                  <div className={styles.projectLogoContainer}>
                    <img
                      src={current.logo}
                      alt={current.title || "Project logo"}
                      className={styles.projectLogo}
                    />
                  </div>
                ) : (
                  <h3 className={styles.projectNameFallback}>
                    {current?.title}
                  </h3>
                )}

                <div className={styles.propertyTypeBadge}>
                  {current?.propertyType || (isAr ? "عقار فاخر" : "Luxury Property")}
                </div>
              </div>

              <div className={styles.developerLocationRow}>
                {current?.developerName ? (
                  <div className={styles.developerName}>
                    {current.developerName}
                  </div>
                ) : null}

                {current?.location ? (
                  <div className={styles.locationBold}>{current.location}</div>
                ) : null}
              </div>
            </div>

            <div className={styles.rightBlock}>
              {current?.amenities?.length > 0 ? (
                <div className={styles.amenitiesTags}>
                  {current.amenities.map((amenity, i) => (
                    <div key={`${amenity}-${i}`} className={styles.amenityTag}>
                      <span className={styles.amenityTagIcon}>✓</span>
                      <span className={styles.amenityTagText}>{amenity}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className={styles.ctaButtons}>
                <Link href={current?.href || "#"} className={styles.exploreButton}>
                  <span className={styles.buttonIcon}>📍</span>
                  <span>{isAr ? "استكشف المشروع" : "Explore Project"}</span>
                </Link>

                {current?.brochureUrl ? (
                  <Link
                    href={current.brochureUrl}
                    className={styles.brochureButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.buttonIcon}>📥</span>
                    <span>{isAr ? "تحميل البروشور" : "Download Brochure"}</span>
                  </Link>
                ) : null}
              </div>

              {current?.completion ? (
                <div className={styles.bottomRow}>
                  <div className={styles.extraInfoItem}>
                    <span className={styles.extraInfoLabel}>
                      {isAr ? "التسليم" : "Completion"}
                    </span>
                    <span className={styles.extraInfoValue}>
                      {current.completion}
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}