"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "@/styles/lands/lands.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";
import ProjectCards from "@/components/projects/ProjectCards";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import { filterProjects } from "@/lib/projects/filterProjects";

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

function isLandProject(project) {
  const status = String(project?.status || project?.devStatus || "").toLowerCase();
  return (
    project?.isLand ||
    project?.category === "lands" ||
    status === "land" ||
    status === "lands" ||
    String(project?.data?.status || "").toLowerCase() === "land"
  );
}

function getTabType(project) {
  const raw = String(
    project?.landCategory ||
      project?.type ||
      project?.unitType ||
      project?.data?.project?.type ||
      ""
  ).toLowerCase();
  return raw.includes("industrial") ? "industrial" : "residential";
}

const TYPE_TABS = [
  { id: "all", labelEn: "All Projects", labelAr: "\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639" },
  { id: "residential", labelEn: "Residential", labelAr: "\u0633\u0643\u0646\u064a" },
  { id: "industrial", labelEn: "Industrial", labelAr: "\u0635\u0646\u0627\u0639\u064a" },
];

function LandsContent() {
  const { locale: ctxLocale } = useLanguage();
  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("tab") || "all";
  const setActiveTab = (tab) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tab === "all") params.delete("tab");
    else params.set("tab", tab);
    const query = params.toString();
    router.replace(query ? `/lands?${query}` : "/lands", { scroll: false });
  };

  const { allProjects, loading } = useAllProjects();

  const [filters, setFilters] = React.useState(initialFilters);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [
    activeTab,
    filters.search,
    JSON.stringify(filters.devStatus),
    JSON.stringify(filters.unitTypes),
    JSON.stringify(filters.bedrooms),
    filters.minPrice,
    filters.maxPrice,
    filters.minSize,
    filters.maxSize,
  ]);

  const allLands = React.useMemo(() => {
    return (allProjects || []).filter((project) => isLandProject(project));
  }, [allProjects]);

  const tabFiltered = React.useMemo(() => {
    if (activeTab === "all") return allLands;
    return allLands.filter((x) => getTabType(x) === activeTab);
  }, [allLands, activeTab]);

  const { filtered } = React.useMemo(
    () => filterProjects(tabFiltered, filters),
    [tabFiltered, filters]
  );

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const tabCounts = React.useMemo(
    () => ({
      all: allLands.length,
      residential: allLands.filter((x) => getTabType(x) === "residential").length,
      industrial: allLands.filter((x) => getTabType(x) === "industrial").length,
    }),
    [allLands]
  );

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.pageTitleWrap}>
            <p className={styles.pageSubOnly}>
              {isRTL
                ? "\u0627\u0633\u062a\u0639\u0631\u0636 \u0645\u062d\u0641\u0638\u0629 \u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0623\u0631\u0627\u0636\u064a \u062d\u0633\u0628 \u0627\u0644\u0646\u0648\u0639"
                : "Browse land projects by type"}
            </p>
          </div>
          <div className={styles.metaPill}>
            {isRTL ? (
              <>
                <span>{"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639: "}</span>
                <b>{filtered.length}</b>
              </>
            ) : (
              <>
                <span>Projects: </span>
                <b>{filtered.length}</b>
              </>
            )}
          </div>
        </div>

        {/* Type tabs */}
        <div className={styles.tabsWrap}>
          <div className={styles.tabs}>
            {TYPE_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabLabel}>{isRTL ? tab.labelAr : tab.labelEn}</span>
                <span className={styles.tabCount}>({tabCounts[tab.id] || 0})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filters bar — same as properties/offplan */}
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
          onReset={() => setFilters(initialFilters)}
          totalProjects={filtered.length}
        />

        {!loading && (
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "12px 0 16px",
            position: "relative",
            zIndex: 2,
            fontSize: "13px",
            color: "rgba(11,11,12,0.55)",
            letterSpacing: "0.02em",
          }}>
            <span>
              {isRTL
                ? `\u0639\u0631\u0636 ${Math.min(visibleCount, filtered.length)} \u0645\u0646 \u0623\u0635\u0644 ${filtered.length}`
                : `Showing ${Math.min(visibleCount, filtered.length)} of ${filtered.length} projects`}
            </span>
            {filters.search ? (
              <span style={{
                background: "rgba(201,162,106,0.12)",
                border: "1px solid rgba(201,162,106,0.3)",
                borderRadius: "999px",
                padding: "4px 12px",
                fontSize: "12px",
              }}>
                {isRTL ? `\u0627\u0644\u0628\u062d\u062b: ${filters.search}` : `Search: ${filters.search}`}
              </span>
            ) : null}
          </div>
        )}

        {loading && allLands.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#888" }}>
            {isRTL ? "\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644..." : "Loading..."}
          </div>
        )}

        {!loading && filtered.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyTitle}>
              {isRTL ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0634\u0627\u0631\u064a\u0639" : "No projects found"}
            </div>
            <div className={styles.emptySub}>
              {isRTL
                ? "\u062c\u0631\u0651\u0628 \u062a\u063a\u064a\u064a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0641\u0644\u062a\u0631 \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0645 \u0628\u062d\u062b\u0627 \u0645\u062e\u062a\u0644\u0641\u0627."
                : "Try changing the filter type or search term."}
            </div>
          </div>
        ) : (
          <>
            <div className={styles.cardsWrap}>
              <ProjectCards projects={visibleProjects} />
            </div>

            {hasMore && (
              <div className={styles.loadMoreWrap}>
                <button
                  type="button"
                  className={styles.loadMoreBtn}
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                >
                  {isRTL ? "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f" : "LOAD MORE"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function LandsPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#888",
          }}
        >
          Loading...
        </div>
      }
    >
      <LandsContent />
    </Suspense>
  );
}
