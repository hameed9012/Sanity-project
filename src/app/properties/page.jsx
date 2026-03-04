// src/app/properties/page.jsx
"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "@/styles/properties/properties.module.css";

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

const STATUS_TABS = [
  { id: "all", labelEn: "All", labelAr: "الكل" },
  { id: "off-plan", labelEn: "Off-plan", labelAr: "قيد الإنشاء" },
  { id: "secondary", labelEn: "Secondary", labelAr: "ثانوي" },
  { id: "sold-out", labelEn: "Sold-out", labelAr: "مباع" },
];

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

function filterByStatusTab(projects, activeTab) {
  if (activeTab === "all") return projects;
  return projects.filter((project) => {
    const status = project?.status || project?.devStatus || "";
    const statusLower = status.toLowerCase();
    if (activeTab === "off-plan") {
      return statusLower.includes("off-plan") || statusLower.includes("off plan") ||
        statusLower.includes("under construction") || statusLower.includes("construction") || status === "Off-plan";
    }
    if (activeTab === "secondary") {
      return statusLower.includes("secondary") || status === "Secondary" || statusLower.includes("resale");
    }
    if (activeTab === "sold-out") {
      return statusLower.includes("sold-out") || statusLower.includes("sold out") || status === "Sold-out";
    }
    return true;
  });
}

export default function PropertiesPage() {
  const { locale: ctxLocale, t } = useLanguage();
  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ Read tab FROM URL — persists on refresh
  const activeTab = searchParams.get("tab") || "all";
  const setActiveTab = (tab) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tab === "all") params.delete("tab");
    else params.set("tab", tab);
    router.replace(`/properties?${params.toString()}`, { scroll: false });
  };

  const { allProjects: sanityMergedProjects } = useAllProjects();

  const [visitSeed] = React.useState(() => Math.floor(Date.now() % 2147483647));
  const [filters, setFilters] = React.useState(initialFilters);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  React.useEffect(() => { setVisibleCount(PAGE_SIZE); }, [
    activeTab, filters.search, JSON.stringify(filters.devStatus),
    JSON.stringify(filters.unitTypes), JSON.stringify(filters.bedrooms),
    filters.minPrice, filters.maxPrice, filters.minSize, filters.maxSize,
  ]);

  const allProjects = React.useMemo(() => shuffleWithSeed(sanityMergedProjects || [], visitSeed), [sanityMergedProjects, visitSeed]);
  const tabFilteredProjects = React.useMemo(() => filterByStatusTab(allProjects, activeTab), [allProjects, activeTab]);
  const { filtered, hasActiveFilters } = React.useMemo(() => filterProjects(tabFilteredProjects, filters), [tabFilteredProjects, filters]);
  const visibleProjects = React.useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;

  const onResetAll = React.useCallback(() => {
    setFilters(initialFilters);
    setActiveTab("all");
    setVisibleCount(PAGE_SIZE);
  }, []);

  const tabCounts = React.useMemo(() => ({
    all: allProjects.length,
    "off-plan": filterByStatusTab(allProjects, "off-plan").length,
    secondary: filterByStatusTab(allProjects, "secondary").length,
    "sold-out": filterByStatusTab(allProjects, "sold-out").length,
  }), [allProjects]);

  return (
    <div className={styles.page}>
      <Hero />
      <div className={styles.container}>
        <InlineSearch isRTL={isRTL} value={filters.search}
          onChange={(v) => setFilters((prev) => ({ ...prev, search: v }))}
          onClear={() => setFilters((prev) => ({ ...prev, search: "" }))} />
        <StatusTabs activeTab={activeTab} onTabChange={setActiveTab} tabCounts={tabCounts} isRTL={isRTL} t={t} />
        <ProjectsFiltersBar filters={filters} onChange={setFilters} onOpenFullFilters={() => setIsModalOpen(true)} />
        <ProjectsFiltersModal isOpen={isModalOpen} filters={filters} onChange={setFilters}
          onClose={() => setIsModalOpen(false)} onReset={onResetAll} totalProjects={filtered.length} />
        <div className={styles.metaRow}>
          <div className={styles.metaText}>
            {isRTL ? (
              <><span className={styles.metaTabName}>{STATUS_TABS.find((tab) => tab.id === activeTab)?.labelAr || "الكل"}:</span>{" "}عرض <b>{Math.min(visibleCount, filtered.length)}</b> من <b>{filtered.length}</b> مشروع</>
            ) : (
              <><span className={styles.metaTabName}>{STATUS_TABS.find((tab) => tab.id === activeTab)?.labelEn || "All"}:</span>{" "}Showing <b>{Math.min(visibleCount, filtered.length)}</b> of <b>{filtered.length}</b> projects</>
            )}
          </div>
          {hasActiveFilters && <button type="button" className={styles.resetBtn} onClick={onResetAll}>{isRTL ? "إعادة ضبط الفلاتر" : "Reset filters"}</button>}
        </div>
        <div className={styles.cardsSection}>
          <ProjectCards projects={visibleProjects} onResetFilters={onResetAll} />
        </div>
        {canLoadMore && (
          <div className={styles.loadMoreWrap}>
            <button type="button" className={styles.loadMoreBtn} onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
              {isRTL ? "تحميل المزيد" : "LOAD MORE"}
            </button>
          </div>
        )}
        {!canLoadMore && filtered.length > 0 && (
          <div className={styles.endText}>{isRTL ? "وصلت إلى النهاية." : "You've reached the end."}</div>
        )}
      </div>
    </div>
  );
}

function Hero() {
  return <div className={styles.hero}><div className={styles.heroOverlay} /><div className={styles.heroTop}></div></div>;
}

function InlineSearch({ value, onChange, onClear, isRTL }) {
  return (
    <div className={styles.inlineSearchWrap}>
      <input value={value || ""} onChange={(e) => onChange?.(e.target.value)}
        placeholder={isRTL ? "ابحث حسب اسم المشروع، المطوّر، أو المنطقة" : "Search by project, developer, district"}
        className={styles.inlineSearchInput} dir={isRTL ? "rtl" : "ltr"} />
      {value && <button type="button" className={styles.inlineSearchClear} onClick={onClear}>{isRTL ? "مسح" : "Clear"}</button>}
    </div>
  );
}

function StatusTabs({ activeTab, onTabChange, tabCounts, isRTL, t }) {
  const getTabLabel = (tab) => {
    if (t) { const translated = t(`properties.tabs.${tab.id}`); if (translated !== `properties.tabs.${tab.id}`) return translated; }
    return isRTL ? tab.labelAr : tab.labelEn;
  };
  return (
    <div className={styles.statusTabsContainer}>
      <div className={styles.statusTabs}>
        {STATUS_TABS.map((tab) => (
          <button key={tab.id} type="button"
            className={`${styles.statusTab} ${activeTab === tab.id ? styles.statusTabActive : ""}`}
            onClick={() => onTabChange(tab.id)} aria-pressed={activeTab === tab.id}>
            <span className={styles.tabLabel}>{getTabLabel(tab)}</span>
            <span className={styles.tabCount}>({tabCounts[tab.id] || 0})</span>
          </button>
        ))}
      </div>
    </div>
  );
}