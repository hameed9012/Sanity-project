// src/components/search/ProjectsSearchResultClient.jsx
"use client";

import React, {
  useEffect,
  useMemo,
  useState,
  Suspense,
  useCallback,
} from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import ProjectResultCard from "@/components/search/ProjectResultCard";

import {
  filterProjects,
  parseSearchParams,
  buildSearchQuery,
} from "@/lib/search/unifiedProjectsSearch";

import styles from "@/styles/search/ProjectsSearchResults.module.css";

const DEFAULT_FILTERS = {
  search: "",
  minPrice: null,
  maxPrice: null,
  minSize: null,
  maxSize: null,
  devStatus: [],
  unitTypes: [],
  bedrooms: [],
  view: "list",
  sort: "newest",
  page: 1,
  perPage: 6,
};

function ProjectsSearchResultsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { t, locale } = useLanguage();
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");

  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [openModal, setOpenModal] = useState(false);
  const [draft, setDraft] = useState(DEFAULT_FILTERS);
  const [isInitialized, setIsInitialized] = useState(false);

  // Parse URL parameters and update filters
  useEffect(() => {
    if (!searchParams) return;

    const parsed = parseSearchParams(searchParams);
    setFilters((prev) => ({
      ...prev,
      ...parsed,
    }));
    setIsInitialized(true);
  }, [searchParams]);

  // Update draft when modal opens
  useEffect(() => {
    if (openModal) {
      setDraft(filters);
    }
  }, [openModal, filters]);

  // Apply filters and get results
  const allResults = useMemo(() => {
    if (!isInitialized) return [];
    return filterProjects(filters);
  }, [filters, isInitialized]);

  // Pagination
  const page = filters.page || 1;
  const perPage = filters.perPage || 6;
  const total = allResults.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;
  const end = Math.min(start + perPage, total);
  const pageResults = allResults.slice(start, end);

  // Draft results count (for modal)
  const draftResults = useMemo(() => {
    return filterProjects(draft);
  }, [draft]);

  // Update URL with new filters
  const updateFilters = useCallback(
    (newFilters, options = {}) => {
      const merged = {
        ...filters,
        ...newFilters,
        page: options.resetPage ? 1 : newFilters.page || filters.page,
      };

      const query = buildSearchQuery(merged);
      const localePrefix = locale && locale !== "en" ? `/${locale}` : "";
      const newUrl = query
        ? `${localePrefix}/search-results?${query}`
        : `${localePrefix}/search-results`;

      router.push(newUrl, { scroll: false });
      setFilters(merged);
    },
    [filters, locale, router]
  );

  // Handle bar filter changes
  const handleBarChange = useCallback(
    (newFilters) => {
      updateFilters(
        {
          ...newFilters,
          view: filters.view,
          sort: filters.sort,
          page: 1,
        },
        { resetPage: true }
      );
    },
    [filters, updateFilters]
  );

  // Handle reset
  const handleReset = useCallback(() => {
    const resetFilters = {
      ...DEFAULT_FILTERS,
      view: filters.view,
      sort: filters.sort,
    };

    const query = buildSearchQuery(resetFilters);
    const localePrefix = locale && locale !== "en" ? `/${locale}` : "";
    const newUrl = query
      ? `${localePrefix}/search-results?${query}`
      : `${localePrefix}/search-results`;

    router.push(newUrl, { scroll: false });
    setFilters(resetFilters);
  }, [filters, locale, router]);

  // Handle view change
  const setView = useCallback(
    (view) => {
      updateFilters({ view });
    },
    [updateFilters]
  );

  // Handle sort change
  const setSort = useCallback(
    (sort) => {
      updateFilters({ sort, page: 1 }, { resetPage: true });
    },
    [updateFilters]
  );

  // Handle pagination
  const goToPage = useCallback(
    (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        updateFilters({ page: newPage });
      }
    },
    [totalPages, updateFilters]
  );

  // Translation helpers
  const safeT = useCallback(
    (key, values = {}, fallback = "") => {
      try {
        const result = t?.(key, values);
        return result && result !== key ? result : fallback;
      } catch {
        return fallback;
      }
    },
    [t]
  );

  const getSortOptionLabel = useCallback(
    (value) => {
      switch (value) {
        case "newest":
          return safeT("search.sort.newest", {}, isAr ? "الأحدث" : "Newest");
        case "priceAsc":
          return safeT(
            "search.sort.priceAsc",
            {},
            isAr ? "السعر (منخفض → مرتفع)" : "Price (Low → High)"
          );
        case "priceDesc":
          return safeT(
            "search.sort.priceDesc",
            {},
            isAr ? "السعر (مرتفع → منخفض)" : "Price (High → Low)"
          );
        case "sizeAsc":
          return safeT(
            "search.sort.sizeAsc",
            {},
            isAr ? "المساحة (صغيرة → كبيرة)" : "Size (Small → Large)"
          );
        case "sizeDesc":
          return safeT(
            "search.sort.sizeDesc",
            {},
            isAr ? "المساحة (كبيرة → صغيرة)" : "Size (Large → Small)"
          );
        default:
          return value;
      }
    },
    [safeT, isAr]
  );

  const getResultsText = useCallback(() => {
    if (total === 0) {
      return safeT(
        "search.results.none",
        {},
        isAr ? "لا توجد نتائج" : "No results"
      );
    }

    return safeT(
      "search.results.showing",
      { start: start + 1, end, total },
      isAr
        ? `عرض ${start + 1}–${end} من ${total} نتيجة`
        : `Showing ${start + 1}–${end} of ${total} results`
    );
  }, [total, start, end, safeT, isAr]);

  if (!isInitialized) {
    return (
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.loading}>
            {isAr ? "جاري التحميل..." : "Loading..."}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      {/* Filters Bar */}
      <ProjectsFiltersBar
        filters={filters}
        onChange={handleBarChange}
        onOpenFullFilters={() => setOpenModal(true)}
      />

      {/* Results Container */}
      <div className={styles.container}>
        {/* Header with count and controls */}
        <div className={styles.headerRow}>
          <div className={styles.count}>{getResultsText()}</div>

          <div className={styles.controls}>
            {/* Sort Dropdown */}
            <div className={styles.sortWrap}>
              <span className={styles.sortLabel}>
                {safeT("search.sort.label", {}, isAr ? "ترتيب حسب" : "Sort by")}
              </span>
              <select
                className={styles.select}
                value={filters.sort}
                onChange={(e) => setSort(e.target.value)}
                style={{ direction: isAr ? "rtl" : "ltr" }}
              >
                <option value="newest">{getSortOptionLabel("newest")}</option>
                <option value="priceAsc">
                  {getSortOptionLabel("priceAsc")}
                </option>
                <option value="priceDesc">
                  {getSortOptionLabel("priceDesc")}
                </option>
                <option value="sizeAsc">{getSortOptionLabel("sizeAsc")}</option>
                <option value="sizeDesc">
                  {getSortOptionLabel("sizeDesc")}
                </option>
              </select>
            </div>

            {/* View Toggle */}
            <div className={styles.viewToggle}>
              <button
                type="button"
                className={`${styles.viewBtn} ${
                  filters.view === "grid" ? styles.activeBtn : ""
                }`}
                onClick={() => setView("grid")}
              >
                {safeT("search.view.grid", {}, isAr ? "شبكة" : "Grid")}
              </button>
              <button
                type="button"
                className={`${styles.viewBtn} ${
                  filters.view === "list" ? styles.activeBtn : ""
                }`}
                onClick={() => setView("list")}
              >
                {safeT("search.view.list", {}, isAr ? "قائمة" : "List")}
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid/List */}
        {total === 0 ? (
          <div className={styles.noResults}>
            <h3>
              {safeT(
                "search.noResults.title",
                {},
                isAr ? "لم يتم العثور على نتائج" : "No results found"
              )}
            </h3>
            <p>
              {safeT(
                "search.noResults.message",
                {},
                isAr
                  ? "حاول تعديل معايير البحث الخاصة بك"
                  : "Try adjusting your search criteria"
              )}
            </p>
            <button onClick={handleReset} className={styles.resetButton}>
              {safeT(
                "search.noResults.reset",
                {},
                isAr ? "إعادة تعيين جميع الفلاتر" : "Reset all filters"
              )}
            </button>
          </div>
        ) : filters.view === "grid" ? (
          <div className={styles.grid}>
            {pageResults.map((project) => (
              <ProjectResultCard
                key={`${project.slug}-${project.developerSlug}`}
                project={project}
                view="grid"
              />
            ))}
          </div>
        ) : (
          <div className={styles.list}>
            {pageResults.map((project) => (
              <ProjectResultCard
                key={`${project.slug}-${project.developerSlug}`}
                project={project}
                view="list"
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {total > 0 && totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              disabled={page <= 1}
              onClick={() => goToPage(page - 1)}
              type="button"
            >
              {safeT("search.pagination.prev", {}, isAr ? "السابق" : "Prev")}
            </button>

            <div className={styles.pageInfo}>
              {safeT(
                "search.pagination.page",
                { page, totalPages },
                isAr
                  ? `صفحة ${page} / ${totalPages}`
                  : `Page ${page} / ${totalPages}`
              )}
            </div>

            <button
              className={styles.pageBtn}
              disabled={page >= totalPages}
              onClick={() => goToPage(page + 1)}
              type="button"
            >
              {safeT("search.pagination.next", {}, isAr ? "التالي" : "Next")}
            </button>
          </div>
        )}

        {/* Clear All Button */}
        {total > 0 && (
          <div className={styles.clearAllContainer}>
            <button
              className={styles.clearAll}
              onClick={handleReset}
              type="button"
            >
              {safeT(
                "search.pagination.clearAll",
                {},
                isAr ? "مسح الكل" : "Clear all"
              )}
            </button>
          </div>
        )}
      </div>

      {/* Filters Modal */}
      <ProjectsFiltersModal
        isOpen={openModal}
        filters={draft}
        totalProjects={draftResults.length}
        onChange={setDraft}
        onClose={() => setOpenModal(false)}
        onReset={() => setDraft(DEFAULT_FILTERS)}
        onApply={(finalDraft) => {
          setOpenModal(false);
          updateFilters({ ...finalDraft, page: 1 }, { resetPage: true });
        }}
        locale={locale}
      />
    </section>
  );
}

// Loading fallback
function SearchResultsLoading() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.count}>
            {t?.("search.loading") ||
              (isAr ? "جاري تحميل النتائج..." : "Loading results...")}
          </div>
        </div>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={styles.skeletonCard}>
              <div className={styles.skeletonImage} />
              <div className={styles.skeletonContent}>
                <div className={styles.skeletonTitle} />
                <div className={styles.skeletonDescription} />
                <div className={styles.skeletonMeta} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main component with Suspense
export default function ProjectsSearchResultsClient() {
  return (
    <Suspense fallback={<SearchResultsLoading />}>
      <ProjectsSearchResultsContent />
    </Suspense>
  );
}
