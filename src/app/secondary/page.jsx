"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/properties/secondary.module.css";

import ProjectCards from "@/components/projects/ProjectCards";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";

import { regionProjectsIndex } from "@/data/regionProjectsIndex";
import { filterProjects } from "@/lib/projects/filterProjects";
import { useLanguage } from "@/components/LanguageProvider";

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

/* -----------------------
  Seeded shuffle
------------------------ */
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
  const a = Array.isArray(arr) ? [...arr] : [];
  const rnd = mulberry32(seed || 1);

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* -----------------------
  Filter ONLY secondary projects
------------------------ */
function filterSecondaryProjects(projects) {
  return projects.filter((project) => {
    const status = project?.status || project?.devStatus || "";
    const statusLower = status.toLowerCase();

    return (
      statusLower.includes("secondary") ||
      status === "Secondary" ||
      statusLower.includes("resale") ||
      statusLower.includes("ready for immediate") ||
      statusLower.includes("resale-ready") ||
      statusLower.includes("completed") ||
      (statusLower.includes("ready") && statusLower.includes("secondary"))
    );
  });
}

export default function SecondaryPage() {
  const { locale: ctxLocale, t } = useLanguage();
  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";

  const pathname = usePathname();

  const [visitSeed, setVisitSeed] = React.useState(() =>
    Math.floor(Date.now() % 2147483647),
  );

  React.useEffect(() => {
    if (pathname !== "/secondary") return;

    const newSeed = Math.floor(
      (Date.now() + Math.random() * 1e9) % 2147483647 || 1,
    );

    setVisitSeed(newSeed);
    setFilters(initialFilters);
    setVisibleCount(PAGE_SIZE);
  }, [pathname]);

  const allProjects = React.useMemo(() => {
    return shuffleWithSeed(regionProjectsIndex || [], visitSeed);
  }, [visitSeed]);

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

  const secondaryProjects = React.useMemo(() => {
    return filterSecondaryProjects(allProjects);
  }, [allProjects]);

  const { filtered, hasActiveFilters } = React.useMemo(() => {
    return filterProjects(secondaryProjects, filters);
  }, [secondaryProjects, filters]);

  const visibleProjects = React.useMemo(() => {
    return filtered.slice(0, visibleCount);
  }, [filtered, visibleCount]);

  const canLoadMore = visibleCount < filtered.length;

  const onResetAll = React.useCallback(() => {
    setFilters(initialFilters);
    setVisibleCount(PAGE_SIZE);
  }, []);

  return (
    <div className={styles.page}>
      <Hero isRTL={isRTL} />

      <div className={styles.container}>
        {/* Inline search */}
        <InlineSearch
          isRTL={isRTL}
          value={filters.search}
          onChange={(v) => setFilters((prev) => ({ ...prev, search: v }))}
          onClear={() => setFilters((prev) => ({ ...prev, search: "" }))}
        />

        {/* Sticky filters bar */}
        <ProjectsFiltersBar
          filters={filters}
          onChange={setFilters}
          onOpenFullFilters={() => setIsModalOpen(true)}
        />

        {/* Modal */}
        <ProjectsFiltersModal
          isOpen={isModalOpen}
          filters={filters}
          onChange={setFilters}
          onClose={() => setIsModalOpen(false)}
          onReset={onResetAll}
          totalProjects={filtered.length}
        />

        {/* Top meta row */}
        <div className={styles.metaRow}>
          <div className={styles.metaText}>
            {isRTL ? (
              <>
                عرض <b>{Math.min(visibleCount, filtered.length)}</b> من{" "}
                <b>{filtered.length}</b> عقار جاهز
              </>
            ) : (
              <>
                Showing <b>{Math.min(visibleCount, filtered.length)}</b> of{" "}
                <b>{filtered.length}</b> ready properties
              </>
            )}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className={styles.resetBtn}
              onClick={onResetAll}
            >
              {isRTL ? "إعادة ضبط الفلاتر" : "Reset filters"}
            </button>
          )}
        </div>

        {/* Cards */}
        <div className={styles.cardsSection}>
          <ProjectCards
            projects={visibleProjects}
            onResetFilters={onResetAll}
          />
        </div>

        {/* Load more */}
        {canLoadMore && (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            >
              {isRTL ? "تحميل المزيد" : "LOAD MORE"}
            </button>
          </div>
        )}

        {!canLoadMore && filtered.length > 0 && (
          <div className={styles.endText}>
            {isRTL ? "وصلت إلى النهاية." : "You've reached the end."}
          </div>
        )}

        {/* No results */}
        {filtered.length === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>🏠</div>
            <h3 className={styles.noResultsTitle}>
              {isRTL ? "لا توجد عقارات مطابقة" : "No properties found"}
            </h3>
            <p className={styles.noResultsText}>
              {isRTL
                ? "لم نتمكن من العثور على عقارات جاهزة تطابق معايير البحث."
                : "We couldn't find any secondary properties matching your search criteria."}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                className={styles.noResultsButton}
                onClick={onResetAll}
              >
                {isRTL ? "إعادة ضبط الفلاتر" : "Reset filters"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* -----------------------
  Hero
------------------------ */
function Hero({ isRTL }) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {isRTL ? "العقارات الجاهزة للبيع" : "Ready Properties"}
        </h1>
        <p className={styles.heroSubtitle}>
          {isRTL
            ? "اكتشف العقارات الجاهزة للبيع الفوري في دبي والإمارات العربية المتحدة"
            : "Discover ready-to-buy properties available for immediate purchase in Dubai & UAE"}
        </p>
      </div>
    </div>
  );
}

/* -----------------------
  Inline Search
------------------------ */
function InlineSearch({ value, onChange, onClear, isRTL }) {
  return (
    <div className={styles.inlineSearchWrap}>
      <input
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={
          isRTL
            ? "ابحث عن عقارات جاهزة حسب الاسم، المطور، أو المنطقة"
            : "Search ready properties by name, developer, or location"
        }
        className={styles.inlineSearchInput}
        dir={isRTL ? "rtl" : "ltr"}
      />
      {value && (
        <button
          type="button"
          className={styles.inlineSearchClear}
          onClick={onClear}
        >
          ×
        </button>
      )}
    </div>
  );
}
