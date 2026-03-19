"use client";

import React from "react";

import styles from "@/styles/lands/lands.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";
import ProjectCards from "@/components/projects/ProjectCards";

const PAGE_SIZE = 9;
const ARABIC_DIACRITICS = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g;

function normalizeLocale(locale) {
  const s = String(locale || "en").toLowerCase();
  return s.startsWith("ar") ? "ar" : "en";
}

function normalizeSearchText(value) {
  return String(value || "")
    .replace(ARABIC_DIACRITICS, "")
    .replace(/أ|إ|آ/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى|ئ/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

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

export default function LandsPage() {
  const { locale: ctxLocale } = useLanguage();
  const locale = normalizeLocale(ctxLocale);
  const isRTL = locale === "ar";
  const { allProjects, loading } = useAllProjects();

  const allLands = React.useMemo(() => {
    return (allProjects || [])
      .filter((project) => isLandProject(project));
  }, [allProjects]);

  const [activeType, setActiveType] = React.useState("all");
  const [search, setSearch] = React.useState("");
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  const counts = React.useMemo(
    () => ({
      all: allLands.length,
      residential: allLands.filter((x) => getTabType(x) === "residential").length,
      industrial: allLands.filter((x) => getTabType(x) === "industrial").length,
    }),
    [allLands]
  );

  const filtered = React.useMemo(() => {
    const base =
      activeType === "all"
        ? allLands
        : allLands.filter((x) => getTabType(x) === activeType);

    const q = normalizeSearchText(search);
    if (!q) return base;

    return base.filter((project) => {
      const haystack = normalizeSearchText(
        [
          project?.name,
          project?.nameEn,
          project?.nameAr,
          project?.title,
          project?.titleAr,
          project?.location,
          project?.locationAr,
          project?.data?.project?.location,
          project?.data?.project?.locationAr,
          project?.developer,
          project?.developerName,
          project?.developerNameEn,
          project?.developerNameAr,
          project?.slug,
        ]
          .filter(Boolean)
          .join(" ")
      );
      return haystack.includes(q);
    });
  }, [activeType, allLands, locale, search]);

  const visible = React.useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;

  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeType, search]);

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.pageTitleWrap}>
            <p className={styles.pageSubOnly}>
              {isRTL
                ? "\u0627\u0633\u062a\u0639\u0631\u0636 \u0645\u062d\u0641\u0638\u0629 \u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0623\u0631\u0627\u0636\u064a \u062d\u0633\u0628 \u0627\u0644\u0646\u0648\u0639"
                : "Browse project portfolio by type"}
            </p>
          </div>
          <div className={styles.metaPill}>
            {isRTL ? (
              <>
                <span>\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639: </span>
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

        <TypeTabs value={activeType} isRTL={isRTL} onChange={setActiveType} counts={counts} />

        <div className={styles.tabsWrap}>
          <div className={styles.tabs} style={{ marginTop: 12 }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isRTL
                  ? "\u0627\u0628\u062d\u062b \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0623\u0648 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0623\u0648 \u0627\u0644\u0645\u0637\u0648\u0631"
                  : "Search by project, area, or developer"
              }
              className={styles.tab}
              style={{
                flex: 1,
                textAlign: isRTL ? "right" : "left",
                cursor: "text",
              }}
            />
          </div>
        </div>

        {loading && allLands.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#888" }}>
            {isRTL ? "\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644..." : "Loading..."}
          </div>
        )}

        <div className={styles.cardsWrap}>
          <ProjectCards projects={visible} />
        </div>

        {!loading && filtered.length === 0 && (
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
        )}

        {canLoadMore && (
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
      </div>
    </div>
  );
}

function TypeTabs({ value, onChange, counts, isRTL }) {
  const tabs = [
    { id: "all", en: "All Projects", ar: "\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639" },
    { id: "residential", en: "Residential", ar: "\u0633\u0643\u0646\u064a" },
    { id: "industrial", en: "Industrial", ar: "\u0635\u0646\u0627\u0639\u064a" },
  ];

  return (
    <div className={styles.tabsWrap}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tab} ${value === tab.id ? styles.tabActive : ""}`}
            onClick={() => onChange(tab.id)}
          >
            <span className={styles.tabLabel}>{isRTL ? tab.ar : tab.en}</span>
            <span className={styles.tabCount}>({counts?.[tab.id] || 0})</span>
          </button>
        ))}
      </div>
    </div>
  );
}
