"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/styles/properties/properties.module.css";

import ProjectCards from "@/components/projects/ProjectCards";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";

import { filterProjects } from "@/lib/projects/filterProjects";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

const PAGE_SIZE = 9;
const EXCLUDED_DEVELOPER_SLUGS = ["beyond", "omniyat", "imtiaz"];

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

const TYPE_TABS = [
  { id: "all", labelEn: "All", labelAr: "\u0627\u0644\u0643\u0644" },
  { id: "off-plan", labelEn: "Off-plan", labelAr: "\u0642\u064a\u062f \u0627\u0644\u0625\u0646\u0634\u0627\u0621" },
  { id: "secondary", labelEn: "Ready To Move", labelAr: "\u062c\u0627\u0647\u0632 \u0644\u0644\u0633\u0643\u0646" },
  { id: "rental", labelEn: "Rental", labelAr: "\u0627\u0644\u0625\u064a\u062c\u0627\u0631" },
  { id: "sold-out", labelEn: "Sold-out", labelAr: "\u0645\u0628\u0627\u0639" },
];

function mulberry32(seed) {
  let a = seed >>> 0;
  return function random() {
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
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function filterByStatusTab(projects, activeTab) {
  if (activeTab === "all") return projects;

  return projects.filter((project) => {
    const status = String(project?.status || project?.devStatus || "").toLowerCase();
    if (activeTab === "off-plan") {
      return status.includes("off-plan") || status.includes("off plan") || status.includes("under construction");
    }
    if (activeTab === "secondary") {
      return status.includes("secondary") || status.includes("resale") || status.includes("ready to move");
    }
    if (activeTab === "rental") {
      return status.includes("rental") || status.includes("rent");
    }
    if (activeTab === "sold-out") {
      return status.includes("sold-out") || status.includes("sold out");
    }
    return true;
  });
}

function PropertiesContent() {
  const { locale: ctxLocale, t } = useLanguage();
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
    router.replace(query ? `/properties?${query}` : "/properties", { scroll: false });
  };

  const { allProjects: rawProjects, loading } = useAllProjects();

  const [visitSeed] = React.useState(() => Math.floor(Date.now() % 2147483647));
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

  const propertiesOnly = React.useMemo(
    () =>
      (rawProjects || []).filter((project) => {
        if (project?.isLand || project?.category === "lands") return false;
        const developerSlug = String(project?.developerSlug || project?.developer || "").toLowerCase();
        return !EXCLUDED_DEVELOPER_SLUGS.some((slug) => developerSlug.includes(slug));
      }),
    [rawProjects]
  );

  const allProjects = React.useMemo(
    () => shuffleWithSeed(propertiesOnly, visitSeed),
    [propertiesOnly, visitSeed]
  );

  const tabFiltered = React.useMemo(
    () => filterByStatusTab(allProjects, activeTab),
    [allProjects, activeTab]
  );

  const { filtered } = React.useMemo(
    () => filterProjects(tabFiltered, filters),
    [tabFiltered, filters]
  );

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const tabCounts = React.useMemo(
    () => ({
      all: allProjects.length,
      "off-plan": filterByStatusTab(allProjects, "off-plan").length,
      secondary: filterByStatusTab(allProjects, "secondary").length,
      rental: filterByStatusTab(allProjects, "rental").length,
      "sold-out": filterByStatusTab(allProjects, "sold-out").length,
    }),
    [allProjects]
  );

  return (
    <div className={styles.propertiesPage} dir={isRTL ? "rtl" : "ltr"}>
      <section className={styles.heroPanel}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            {isRTL ? "\u0639\u0642\u0627\u0631\u0627\u062a \u0645\u062d\u0645\u062f \u0643\u0648\u062f\u0645\u0627\u0646\u064a" : "Mohamad Kodmani Properties"}
          </p>
          <h1 className={styles.pageTitle}>
            {isRTL ? "\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0639\u0642\u0627\u0631 \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0644\u0643 \u0628\u0633\u0631\u0639\u0629" : "Find the right property faster"}
          </h1>
          <p className={styles.pageSubtitle}>
            {isRTL
              ? "\u062a\u0635\u0641\u062d \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u062d\u0633\u0628 \u0627\u0644\u062d\u0627\u0644\u0629 \u0648\u0627\u0644\u0633\u0639\u0631 \u0648\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0648\u0646\u0648\u0639 \u0627\u0644\u0648\u062d\u062f\u0629 \u0645\u0646 \u0645\u0635\u062f\u0631 \u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0627\u062d\u062f."
              : "Browse projects by status, price, size, and unit type from one clean source of truth."}
          </p>
        </div>
      </section>

      <div className={styles.tabsBar}>
        {TYPE_TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab.id)}
            type="button"
          >
            <span>{isRTL ? tab.labelAr : tab.labelEn}</span>
            <span className={styles.tabCount}>{tabCounts[tab.id] ?? 0}</span>
          </button>
        ))}
      </div>

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
        <div className={styles.resultsMeta}>
          <div className={styles.resultsCopy}>
            {isRTL
              ? `\u0639\u0631\u0636 ${Math.min(visibleCount, filtered.length)} \u0645\u0646 \u0623\u0635\u0644 ${filtered.length} \u0645\u0634\u0631\u0648\u0639`
              : `Showing ${Math.min(visibleCount, filtered.length)} of ${filtered.length} projects`}
          </div>
          {filters.search ? (
            <div className={styles.resultsSearchChip}>
              {isRTL ? `\u0627\u0644\u0628\u062d\u062b: ${filters.search}` : `Search: ${filters.search}`}
            </div>
          ) : null}
        </div>
      )}

      {loading ? (
        <div className={styles.loadingState}>
          {isRTL ? "\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a..." : "Loading properties..."}
        </div>
      ) : filtered.length === 0 ? (
        <div className={styles.emptyState}>
          {isRTL ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0642\u0627\u0631\u0627\u062a \u0645\u0637\u0627\u0628\u0642\u0629 \u062d\u0627\u0644\u064a\u0627\u064b" : "No properties found"}
        </div>
      ) : (
        <>
          <ProjectCards projects={visibleProjects} locale={locale} t={t} />
          {hasMore && (
            <div className={styles.loadMoreWrap}>
              <button
                className={styles.loadMoreBtn}
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                type="button"
              >
                {isRTL ? "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f" : "Load More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function PropertiesPage() {
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
      <PropertiesContent />
    </Suspense>
  );
}
