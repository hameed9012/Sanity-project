"use client";

import React from "react";
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

function filterRentalProjects(projects) {
  return projects.filter((project) => {
    if (project?.isLand || project?.category === "lands") return false;
    const status = String(project?.status || project?.devStatus || "").toLowerCase();
    return status.includes("rental") || status.includes("rent");
  });
}

function InlineSearch({ value, onChange, onClear, isRTL }) {
  return (
    <div className={styles.inlineSearchWrap}>
      <input
        value={value || ""}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={
          isRTL
            ? "\u0627\u0628\u062d\u062b \u0639\u0646 \u0639\u0642\u0627\u0631\u0627\u062a \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u062d\u0633\u0628 \u0627\u0644\u0627\u0633\u0645\u060c \u0627\u0644\u0645\u0637\u0648\u0631\u060c \u0623\u0648 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
            : "Search rental properties by name, developer, or location"
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

export default function RentalPage() {
  const { locale: ctxLocale } = useLanguage();
  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";

  const { allProjects } = useAllProjects();
  const [filters, setFilters] = React.useState(initialFilters);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

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

  const rentalProjects = React.useMemo(
    () => filterRentalProjects(allProjects || []),
    [allProjects]
  );

  const heroImages = React.useMemo(() => {
    return rentalProjects
      .map((project) => project.heroImageUrl || project.image || project.heroImage)
      .filter(Boolean)
      .filter((src, index, arr) => arr.indexOf(src) === index);
  }, [rentalProjects]);

  const { filtered, hasActiveFilters } = React.useMemo(
    () => filterProjects(rentalProjects, filters),
    [rentalProjects, filters]
  );

  const visibleProjects = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  const onResetAll = React.useCallback(() => {
    setFilters(initialFilters);
    setVisibleCount(PAGE_SIZE);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroMedia}>
          {heroImages.length > 1 ? (
            <Swiper
              className={styles.heroSwiper}
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop
              speed={1200}
              autoplay={{ delay: 2600, disableOnInteraction: false }}
            >
              {heroImages.map((src, index) => (
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
          ) : heroImages[0] ? (
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
          ) : null}
        </div>

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {isRTL
              ? "\u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a \u0644\u0644\u0625\u064a\u062c\u0627\u0631"
              : "Rental Properties"}
          </h1>
          <p className={styles.heroSubtitle}>
            {isRTL
              ? "\u0627\u0643\u062a\u0634\u0641 \u0623\u0641\u0636\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0625\u064a\u062c\u0627\u0631 \u0641\u064a \u062f\u0628\u064a \u0648\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a"
              : "Discover premium rental opportunities across Dubai and the UAE"}
          </p>
        </div>
      </div>

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
                <b>{filtered.length}</b> \u0639\u0642\u0627\u0631 \u0644\u0644\u0625\u064a\u062c\u0627\u0631
              </>
            ) : (
              <>
                Showing <b>{Math.min(visibleCount, filtered.length)}</b> of <b>{filtered.length}</b> rental properties
              </>
            )}
          </div>

          {hasActiveFilters && (
            <button type="button" className={styles.resetBtn} onClick={onResetAll}>
              {isRTL
                ? "\u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062a\u0631"
                : "Reset filters"}
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

        {filtered.length === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>RENT</div>
            <h3 className={styles.noResultsTitle}>
              {isRTL
                ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0642\u0627\u0631\u0627\u062a \u0645\u0637\u0627\u0628\u0642\u0629"
                : "No rental properties found"}
            </h3>
            <p className={styles.noResultsText}>
              {isRTL
                ? "\u0644\u0645 \u0646\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0639\u0642\u0627\u0631\u0627\u062a \u0625\u064a\u062c\u0627\u0631 \u062a\u0637\u0627\u0628\u0642 \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0628\u062d\u062b."
                : "We couldn't find any rental properties matching your search criteria."}
            </p>
            {hasActiveFilters && (
              <button type="button" className={styles.noResultsButton} onClick={onResetAll}>
                {isRTL
                  ? "\u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062a\u0631"
                  : "Reset filters"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
