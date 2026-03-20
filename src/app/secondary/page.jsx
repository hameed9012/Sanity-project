"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "@/styles/properties/secondary.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import ProjectCards from "@/components/projects/ProjectCards";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";

import { filterProjects } from "@/lib/projects/filterProjects";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

const PAGE_SIZE = 9;

const initialFilters = {
  search: "",
  devStatus: [],
  unitTypes: [],
  bedrooms: [],
  minPrice: "",
  maxPrice: "",
  minSize: "",
  maxSize: "",
};

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(arr, seed) {
  const copy = Array.isArray(arr) ? [...arr] : [];
  const random = mulberry32(seed || 1);
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function filterSecondaryProjects(projects) {
  return projects.filter((project) => {
    const status = String(project?.status || project?.devStatus || "").toLowerCase();
    if (status.includes("off-plan") || status.includes("under construction")) return false;

    return (
      status.includes("secondary") ||
      status.includes("resale") ||
      status.includes("ready to move") ||
      status === "ready"
    );
  });
}

function Hero({ isRTL, images, projectCount, loading }) {
  return (
    <div className={styles.heroSection}>
      {images && images.length > 1 ? (
        <Swiper
          className={styles.heroSwiper}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={1400}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={`${src}-${index}`} className={styles.heroSlide}>
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                className={styles.heroBgImg}
                sizes="100vw"
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : images?.[0] ? (
        <div className={styles.heroSlide}>
          <Image
            src={images[0]}
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
          {isRTL ? "عقارات جاهزة للبيع" : "Ready To Move"}
        </h1>
        <p className={styles.heroSubtitle}>
          {isRTL
            ? "اكتشف العقارات الجاهزة للبيع الفوري في دبي والإمارات العربية المتحدة"
            : "Discover properties that are ready to move - resale and completed projects available now"}
        </p>
        {!loading && projectCount > 0 && (
          <div className={styles.heroCount}>
            <span className={styles.heroCountNum}>{projectCount}</span>
            <span className={styles.heroCountLabel}>
              {isRTL ? "عقار متاح" : "Properties Available"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function InlineSearch({ value, onChange, onClear, isRTL }) {
  return (
    <div className={styles.inlineSearchWrap}>
      <input
        value={value || ""}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={
          isRTL
            ? "\u0627\u0628\u062d\u062b \u0639\u0646 \u0639\u0642\u0627\u0631\u0627\u062a \u062c\u0627\u0647\u0632\u0629 \u062d\u0633\u0628 \u0627\u0644\u0627\u0633\u0645\u060c \u0627\u0644\u0645\u0637\u0648\u0631\u060c \u0623\u0648 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
            : "Search ready to move properties by name, developer, or location"
        }
        className={styles.inlineSearchInput}
        dir={isRTL ? "rtl" : "ltr"}
      />
      {value && (
        <button type="button" className={styles.inlineSearchClear} onClick={onClear}>
          {isRTL ? "\u0645\u0633\u062d" : "Clear"}
        </button>
      )}
    </div>
  );
}

export default function SecondaryPage() {
  const { locale: ctxLocale } = useLanguage();
  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";
  const pathname = usePathname();
  const { allProjects: sanityMergedProjects, loading } = useAllProjects();

  const [visitSeed, setVisitSeed] = React.useState(() =>
    Math.floor(Date.now() % 2147483647)
  );
  const [filters, setFilters] = React.useState(initialFilters);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  React.useEffect(() => {
    if (pathname !== "/secondary") return;
    const newSeed = Math.floor((Date.now() + Math.random() * 1e9) % 2147483647 || 1);
    setVisitSeed(newSeed);
    setFilters(initialFilters);
    setVisibleCount(PAGE_SIZE);
  }, [pathname]);

  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [
    filters.search,
    JSON.stringify(filters.devStatus),
    JSON.stringify(filters.unitTypes),
    JSON.stringify(filters.bedrooms),
    filters.minPrice,
    filters.maxPrice,
    filters.minSize,
    filters.maxSize,
  ]);

  const allProjects = React.useMemo(
    () => shuffleWithSeed(sanityMergedProjects || [], visitSeed),
    [sanityMergedProjects, visitSeed]
  );

  const secondaryProjects = React.useMemo(
    () => filterSecondaryProjects(allProjects),
    [allProjects]
  );

  const heroImages = React.useMemo(
    () =>
      secondaryProjects
        .map((project) => project.heroImageUrl || project.image || project.heroImage)
        .filter(Boolean)
        .filter((src, index, arr) => arr.indexOf(src) === index),
    [secondaryProjects]
  );

  const { filtered, hasActiveFilters } = React.useMemo(
    () => filterProjects(secondaryProjects, filters),
    [secondaryProjects, filters]
  );

  const visibleProjects = React.useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const canLoadMore = visibleCount < filtered.length;

  const onResetAll = React.useCallback(() => {
    setFilters(initialFilters);
    setVisibleCount(PAGE_SIZE);
  }, []);

  return (
    <div className={styles.page}>
      <Hero isRTL={isRTL} images={heroImages} projectCount={secondaryProjects.length} loading={loading} />

      <div className={styles.container}>
        <InlineSearch
          isRTL={isRTL}
          value={filters.search}
          onChange={(value) => setFilters((prev) => ({ ...prev, search: value }))}
          onClear={() => setFilters((prev) => ({ ...prev, search: "" }))}
        />

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

        <div className={styles.metaRow}>
          <div className={styles.metaText}>
            {isRTL ? (
              <>
                \u0639\u0631\u0636 <b>{Math.min(visibleCount, filtered.length)}</b> \u0645\u0646{" "}
                <b>{filtered.length}</b> \u0639\u0642\u0627\u0631 \u062c\u0627\u0647\u0632
              </>
            ) : (
              <>
                Showing <b>{Math.min(visibleCount, filtered.length)}</b> of{" "}
                <b>{filtered.length}</b> ready to move properties
              </>
            )}
          </div>

          {hasActiveFilters && (
            <button type="button" className={styles.resetBtn} onClick={onResetAll}>
              {isRTL ? "\u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062a\u0631" : "Reset filters"}
            </button>
          )}
        </div>

        <div className={styles.cardsSection}>
          <ProjectCards projects={visibleProjects} onResetFilters={onResetAll} />
        </div>

        {canLoadMore && (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            >
              {isRTL ? "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f" : "LOAD MORE"}
            </button>
          </div>
        )}

        {!canLoadMore && filtered.length > 0 && (
          <div className={styles.endText}>
            {isRTL ? "\u0648\u0635\u0644\u062a \u0625\u0644\u0649 \u0627\u0644\u0646\u0647\u0627\u064a\u0629." : "You've reached the end."}
          </div>
        )}

        {filtered.length === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>Home</div>
            <h3 className={styles.noResultsTitle}>
              {isRTL ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0642\u0627\u0631\u0627\u062a \u0645\u0637\u0627\u0628\u0642\u0629" : "No properties found"}
            </h3>
            <p className={styles.noResultsText}>
              {isRTL
                ? "\u0644\u0645 \u0646\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0639\u0642\u0627\u0631\u0627\u062a \u062c\u0627\u0647\u0632\u0629 \u062a\u0637\u0627\u0628\u0642 \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0628\u062d\u062b."
                : "We couldn't find any ready to move properties matching your search criteria."}
            </p>
            {hasActiveFilters && (
              <button type="button" className={styles.noResultsButton} onClick={onResetAll}>
                {isRTL ? "\u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062a\u0631" : "Reset filters"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
