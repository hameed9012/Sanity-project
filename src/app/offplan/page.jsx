"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/properties/offplan.module.css";

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

function filterOffPlanProjects(projects) {
  return projects.filter((project) => {
    const status = project?.status || project?.devStatus || "";
    const statusLower = status.toLowerCase();
    return (
      statusLower.includes("off-plan") ||
      statusLower.includes("off plan") ||
      statusLower.includes("under construction") ||
      statusLower.includes("construction") ||
      status === "Off-plan" ||
      status === "Off Plan" ||
      status === "Under Construction"
    );
  });
}

export default function OffPlanPage() {
  const { locale: ctxLocale, t } = useLanguage();
  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";

  const pathname = usePathname();

  const [visitSeed, setVisitSeed] = React.useState(() =>
    Math.floor(Date.now() % 2147483647),
  );

  React.useEffect(() => {
    if (pathname !== "/offplan") return;
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

  const offPlanProjects = React.useMemo(() => {
    return filterOffPlanProjects(allProjects);
  }, [allProjects]);

  const { filtered, hasActiveFilters } = React.useMemo(() => {
    return filterProjects(offPlanProjects, filters);
  }, [offPlanProjects, filters]);

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
        <InlineSearch
          isRTL={isRTL}
          value={filters.search}
          onChange={(v) => setFilters((prev) => ({ ...prev, search: v }))}
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
                عرض <b>{Math.min(visibleCount, filtered.length)}</b> من{" "}
                <b>{filtered.length}</b> مشروع قيد الإنشاء
              </>
            ) : (
              <>
                Showing <b>{Math.min(visibleCount, filtered.length)}</b> of{" "}
                <b>{filtered.length}</b> off-plan projects
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

        <div className={styles.cardsSection}>
          <ProjectCards
            projects={visibleProjects}
            onResetFilters={onResetAll}
          />
        </div>

        {canLoadMore ? (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            >
              {isRTL ? "تحميل المزيد" : "LOAD MORE"}
            </button>
          </div>
        ) : null}

        {!canLoadMore && filtered.length > 0 && (
          <div className={styles.endText}>
            {isRTL ? "وصلت إلى النهاية." : "You've reached the end."}
          </div>
        )}

        {filtered.length === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>🏗️</div>
            <h3 className={styles.noResultsTitle}>
              {isRTL ? "لا توجد مشاريع مطابقة" : "No projects found"}
            </h3>
            <p className={styles.noResultsText}>
              {isRTL
                ? "لم نتمكن من العثور على مشاريع قيد الإنشاء تطابق معايير البحث."
                : "We couldn't find any off-plan projects matching your search criteria."}
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

function Hero({ isRTL }) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {isRTL ? "المشاريع قيد الإنشاء" : "Off-Plan Projects"}
        </h1>
        <p className={styles.heroSubtitle}>
          {isRTL
            ? "اكتشف أحدث المشاريع العقارية قيد الإنشاء في دبي والإمارات العربية المتحدة"
            : "Discover the latest off-plan real estate projects in Dubai & UAE"}
        </p>
      </div>
    </div>
  );
}

function InlineSearch({ value, onChange, onClear, isRTL }) {
  return (
    <div className={styles.inlineSearchWrap}>
      <input
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={
          isRTL
            ? "ابحث عن مشاريع قيد الإنشاء حسب الاسم، المطور، أو المنطقة"
            : "Search off-plan projects by name, developer, or location"
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
