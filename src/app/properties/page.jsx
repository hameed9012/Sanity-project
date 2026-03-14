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
  { id: "all", labelEn: "All", labelAr: "الكل" },
  { id: "off-plan", labelEn: "Off-plan", labelAr: "قيد الإنشاء" },
  { id: "secondary", labelEn: "Secondary", labelAr: "الثانوي" },
  { id: "rental", labelEn: "Rental", labelAr: "الإيجار" },
  { id: "sold-out", labelEn: "Sold-out", labelAr: "مباع" },
];

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

  return (
    <div className={styles.propertiesPage} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.tabsBar}>
        {TYPE_TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {isRTL ? tab.labelAr : tab.labelEn}
          </button>
        ))}
      </div>

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

      {loading ? (
        <div className={styles.loadingState}>
          {isRTL ? "جاري التحميل..." : "Loading properties..."}
        </div>
      ) : filtered.length === 0 ? (
        <div className={styles.emptyState}>
          {isRTL ? "لا توجد نتائج" : "No properties found"}
        </div>
      ) : (
        <>
          <ProjectCards projects={visibleProjects} locale={locale} t={t} />
          {hasMore && (
            <div className={styles.loadMoreWrap}>
              <button
                className={styles.loadMoreBtn}
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
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
