"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import { useAllProjects } from "@/components/SanityProjectsContext";

import {
  buildProjectsQuery,
} from "@/lib/search/projectsSearch";
import { filterProjects } from "@/lib/projects/filterProjects";

import styles from "@/styles/search/ProjectsHeroSearch.module.css";

const DEFAULT_FILTERS = {
  search: "",
  minPrice: "",
  maxPrice: "",
  devStatus: [],
  unitTypes: [],
  bedrooms: [],
  view: "grid",
  sort: "newest",
  page: 1,
  perPage: 12,
};

const toNumOrNull = (v) => {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

const normalizeForSearch = (filters) => ({
  ...filters,
  minPrice: toNumOrNull(filters.minPrice),
  maxPrice: toNumOrNull(filters.maxPrice),
  bedrooms: Array.isArray(filters.bedrooms)
    ? filters.bedrooms.map((x) => Number(x)).filter((x) => Number.isFinite(x))
    : [],
  devStatus: Array.isArray(filters.devStatus) ? filters.devStatus : [],
  unitTypes: Array.isArray(filters.unitTypes) ? filters.unitTypes : [],
  page: Number.isFinite(Number(filters.page)) ? Number(filters.page) : 1,
  perPage: Number.isFinite(Number(filters.perPage))
    ? Number(filters.perPage)
    : 12,
});

export default function ProjectsHeroSearch({
  allProjects = null,
  initialTab = 0,
}) {
  const router = useRouter();
  const { allProjects: contextProjects } = useAllProjects();

  const [activeTab, setActiveTab] = useState(initialTab);

  // ✅ Source of truth
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectsSource = Array.isArray(allProjects) && allProjects.length ? allProjects : contextProjects;

  // ✅ Count projects based on current filters (for modal + UX)
  const filteredProjectsCount = useMemo(() => {
    if (!Array.isArray(projectsSource)) return 0;
    try {
      return filterProjects(projectsSource, normalizeForSearch(filters)).filtered.length;
    } catch {
      return 0;
    }
  }, [projectsSource, filters]);

  const goToResults = (nextFilters) => {
    const merged = normalizeForSearch({ ...nextFilters, page: 1 });
    const qs = buildProjectsQuery(merged);
    const url = qs ? `/search-results?${qs}` : "/search-results";
    router.push(url);
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    goToResults(filters);
  };

  return (
    <div className={styles.dockWrap}>
      <div className={styles.dock}>
        {/* ✅ Inline quick search */}
        <form className={styles.inlineSearchWrap} onSubmit={onSubmit}>
          <span className={styles.inlineSearchIcon} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M17 17l5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <input
            className={styles.inlineSearchInput}
            value={filters.search}
            onChange={(e) =>
              setFilters((p) => ({
                ...p,
                search: e.target.value,
                page: 1,
              }))
            }
            placeholder="Search projects, developer, area..."
            aria-label="Search projects"
          />

          <button
            type="submit"
            className={styles.inlineSearchGo}
            aria-label="Search"
          >
            <span aria-hidden="true">➜</span>
          </button>
        </form>

        {/* ✅ Filters bar */}
        <div className={styles.filtersRow}>
          <ProjectsFiltersBar
            filters={filters}
            onChange={(next) => setFilters((p) => ({ ...p, ...next, page: 1 }))}
            onOpenFullFilters={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* ✅ Full filters modal */}
      <ProjectsFiltersModal
        isOpen={isModalOpen}
        filters={filters}
        onChange={(next) => setFilters((p) => ({ ...p, ...next, page: 1 }))}
        onClose={() => setIsModalOpen(false)}
        onReset={handleResetFilters}
        totalProjects={filteredProjectsCount}
        // ✅ If your modal supports Apply callback, keep it.
        // If it doesn't, remove onApply and rely on closing.
        onApply={(finalFilters) => {
          setIsModalOpen(false);
          setFilters(finalFilters);
          goToResults(finalFilters);
        }}
      />
    </div>
  );
}
