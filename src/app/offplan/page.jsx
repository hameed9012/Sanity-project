// src/app/offplan/page.jsx
"use client";

import React from "react";
import styles from "@/styles/properties/offplan.module.css";

import ProjectCards from "@/components/projects/ProjectCards";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";

import { filterProjects } from "@/lib/projects/filterProjects";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

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

  // ── Off-plan only, no lands ──────────────────────────────────
  const offplanProjects = React.useMemo(() => {
    return (rawProjects || []).filter((p) => {
      if (p.isLand || p.category === "lands") return false;
      const s = (p.status || p.devStatus || "").toLowerCase();
      return s.includes("off-plan") || s.includes("off plan") || s.includes("under construction");
    });
  }, [rawProjects]);

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

  return (
    <div className={styles.offplanPage} dir={isRTL ? "rtl" : "ltr"}>
      {/* Page header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>
          {isRTL ? "مشاريع قيد الإنشاء" : "Off-Plan Projects"}
        </h1>
        <p className={styles.pageSubtitle}>
          {isRTL
            ? "اكتشف أحدث مشاريع التطوير العقاري قبل اكتمالها"
            : "Discover the latest developments before they're completed"}
        </p>
      </div>

      {/* Filters */}
      <ProjectsFiltersBar
        filters={filters}
        setFilters={setFilters}
        onOpenModal={() => setIsModalOpen(true)}
        locale={locale}
        t={t}
      />

      {isModalOpen && (
        <ProjectsFiltersModal
          filters={filters}
          setFilters={setFilters}
          onClose={() => setIsModalOpen(false)}
          locale={locale}
          t={t}
        />
      )}

      {/* Results */}
      {loading ? (
        <div className={styles.loadingState}>
          {isRTL ? "جاري التحميل..." : "Loading projects..."}
        </div>
      ) : filtered.length === 0 ? (
        <div className={styles.emptyState}>
          {isRTL ? "لا توجد مشاريع حالياً" : "No off-plan projects found"}
        </div>
      ) : (
        <>
          <div className={styles.resultsCount}>
            {isRTL
              ? `${filtered.length} مشروع`
              : `${filtered.length} project${filtered.length !== 1 ? "s" : ""}`}
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
  );
}