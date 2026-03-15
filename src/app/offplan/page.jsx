"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import styles from "@/styles/properties/offplan.module.css";

import ProjectCards from "@/components/projects/ProjectCards";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";

import { filterProjects } from "@/lib/projects/filterProjects";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const PAGE_SIZE = 9;

const initialFilters = {
  search: "", devStatus: [], unitTypes: [], bedrooms: [],
  minPrice: "", maxPrice: "", minSize: "", maxSize: "",
};

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffleWithSeed(arr, seed) {
  const a = Array.isArray(arr) ? [...arr] : [];
  const rnd = mulberry32(seed || 1);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function OffplanPage() {
  const { locale: ctxLocale, t } = useLanguage();
  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";

  const { allProjects: rawProjects, loading } = useAllProjects();

  const [visitSeed] = React.useState(() => Math.floor(Date.now() % 2147483647));
  const [filters, setFilters] = React.useState(initialFilters);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  React.useEffect(() => { setVisibleCount(PAGE_SIZE); }, [
    filters.search, JSON.stringify(filters.devStatus),
    JSON.stringify(filters.unitTypes), JSON.stringify(filters.bedrooms),
    filters.minPrice, filters.maxPrice,
  ]);

  // Off-plan only — excluding blocked developer inventories
  const OFFPLAN_EXCLUDED_DEVELOPER_SLUGS = ["omniyat", "beyond", "imtiaz"];
  const offplanProjects = React.useMemo(() => {
    return (rawProjects || []).filter((p) => {
      if (p.isLand || p.category === "lands") return false;
      const devSlug = (p.developerSlug || p.developer || "").toLowerCase();
      if (OFFPLAN_EXCLUDED_DEVELOPER_SLUGS.some((s) => devSlug.includes(s))) return false;
      const s = (p.status || p.devStatus || "").toLowerCase();
      return s.includes("off-plan") || s.includes("off plan") || s.includes("offplan") || s.includes("under construction");
    });
  }, [rawProjects]);

  // Collect unique hero images from offplan projects for the background slider
  const heroImages = React.useMemo(() => {
    const imgs = offplanProjects
      .map((p) => p.heroImageUrl || p.image || p.heroImage)
      .filter(Boolean)
      .filter((src, i, arr) => arr.indexOf(src) === i);
    return imgs.length > 0 ? imgs : null;
  }, [offplanProjects]);

  const allProjects = React.useMemo(
    () => shuffleWithSeed(offplanProjects, visitSeed),
    [offplanProjects, visitSeed]
  );
  const { filtered, hasActiveFilters } = React.useMemo(
    () => filterProjects(allProjects, filters),
    [allProjects, filters]
  );
  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const onResetAll = React.useCallback(() => {
    setFilters(initialFilters);
    setVisibleCount(PAGE_SIZE);
  }, []);

  return (
    <div className={styles.offplanPage} dir={isRTL ? "rtl" : "ltr"}>

      {/* ── Cinematic animated hero background ───────────────── */}
      <div className={styles.heroSection}>
        {heroImages && heroImages.length > 1 ? (
          <Swiper
            className={styles.heroSwiper}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={1400}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
          >
            {heroImages.map((src, idx) => (
              <SwiperSlide key={`${src}-${idx}`} className={styles.heroSlide}>
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={idx === 0}
                  className={styles.heroBgImg}
                  sizes="100vw"
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : heroImages && heroImages.length === 1 ? (
          <div className={styles.heroSlide}>
            <Image
              src={heroImages[0]}
              alt=""
              fill
              priority
              className={styles.heroBgImg}
              sizes="100vw"
              unoptimized
            />
          </div>
        ) : (
          <div className={styles.heroFallbackBg} />
        )}

        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroKicker}>
            {isRTL ? "العقارات الفاخرة" : "Luxury Real Estate"}
          </p>
          <h1 className={styles.heroTitle}>
            {isRTL ? "مشاريع قيد الإنشاء" : "Off-Plan Projects"}
          </h1>
          <p className={styles.heroSubtitle}>
            {isRTL
              ? "اكتشف أحدث مشاريع العقارات في دبي والإمارات"
              : "Discover the latest off-plan real estate projects in Dubai & UAE"}
          </p>
          {!loading && (
            <div className={styles.heroCount}>
              <span className={styles.heroCountNum}>{offplanProjects.length}</span>
              <span className={styles.heroCountLabel}>
                {isRTL ? "مشروع متاح" : "Projects Available"}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.contentArea}>
        <ProjectsFiltersBar
          filters={filters}
          onChange={setFilters}
          onOpenFullFilters={() => setIsModalOpen(true)}
        />

        <ProjectsFiltersModal
          isOpen={isModalOpen}
          filters={filters}
          onChange={setFilters}
          onClose={() => setIsModalOpen(false)}
          onReset={onResetAll}
          totalProjects={filtered.length}
        />

        {loading ? (
          <div className={styles.loadingState}>
            <div className={styles.loadingDots}>
              <span /><span /><span />
            </div>
            <p>{isRTL ? "جاري التحميل..." : "Loading projects..."}</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <p>{isRTL ? "لا توجد مشاريع حالياً" : "No off-plan projects found"}</p>
          </div>
        ) : (
          <>
            <div className={styles.resultsMeta}>
              <div className={styles.resultsCount}>
                {isRTL
                  ? `\u0639\u0631\u0636 ${Math.min(visibleCount, filtered.length)} \u0645\u0646 ${filtered.length} \u0645\u0634\u0631\u0648\u0639`
                  : `Showing ${Math.min(visibleCount, filtered.length)} of ${filtered.length} project${
                      filtered.length !== 1 ? "s" : ""
                    }`}
              </div>
              {hasActiveFilters && (
                <button type="button" className={styles.resetBtn} onClick={onResetAll}>
                  {isRTL ? "\u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062a\u0631" : "Reset filters"}
                </button>
              )}
            </div>
            <ProjectCards projects={visibleProjects} locale={locale} t={t} />
            {hasMore && (
              <div className={styles.loadMoreWrap}>
                <button
                  className={styles.loadMoreBtn}
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                >
                  {isRTL ? "عرض المزيد" : "Load More"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
