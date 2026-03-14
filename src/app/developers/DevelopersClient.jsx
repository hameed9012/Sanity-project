"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import styles from "@/styles/developer/developers-2.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

const PAGE_SIZE = 12;
const EXCLUDED_DEVELOPER_SLUGS = new Set(["imtiaz", "beyond", "omniyat"]);

function normalizeLocale(locale) {
  return String(locale || "en").toLowerCase().startsWith("ar") ? "ar" : "en";
}

function safeTFactory(t) {
  return (key, values, fallback) => {
    try {
      const v = t?.(key, values);
      if (v === undefined || v === null || v === "" || v === key) return fallback;
      return v;
    } catch { return fallback; }
  };
}

const detectLogoType = (logoUrl) => {
  if (!logoUrl) return "default";
  const url = String(logoUrl).toLowerCase();
  if (url.includes("white") || url.includes("light") || url.includes("bright")) return "whiteLogo";
  if (url.includes("black") || url.includes("dark")) return "blackLogo";
  if (url.includes("transparent") || url.includes(".png")) return "transparentLogo";
  return "default";
};

const getInitials = (name) => {
  if (!name) return "DEV";
  const words = String(name).trim().split(" ").filter(Boolean);
  if (words.length === 0) return "DEV";
  if (words.length === 1) return words[0].substring(0, 3).toUpperCase();
  return words.map((w) => w[0]).join("").substring(0, 3).toUpperCase();
};

export default function DevelopersClient({ sanityDevelopers = [] }) {
  const { locale: ctxLocale, t } = useLanguage();
  const { allProjects } = useAllProjects();
  const locale = normalizeLocale(ctxLocale);
  const isRTL = locale === "ar";
  const safeT = useMemo(() => safeTFactory(t), [t]);

  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [logoErrors, setLogoErrors] = useState({});

  const getTranslation = useCallback((key, defaultAr, defaultEn) => {
    const translation = safeT(`developersPage.${key}`, undefined, null);
    if (translation) return translation;
    return locale === "ar" ? defaultAr : defaultEn;
  }, [safeT, locale]);

  const searchPlaceholder = getTranslation("searchPlaceholder", "ابحث عن مطور...", "Search developers...");
  const exploreLabel = getTranslation("explore", "استكشف", "Explore");
  const noResults = getTranslation("noResults", "لا توجد نتائج.", "No results found.");
  const loadMoreText = getTranslation("loadMore", "عرض المزيد", "Load more");
  const clearSearchText = locale === "ar" ? "مسح البحث" : "Clear search";
  const tryDifferentFilter = locale === "ar" ? "حاول البحث باسم مطور" : "Try searching by developer name";

  const allDevs = useMemo(() => {
    if (!Array.isArray(sanityDevelopers) || sanityDevelopers.length === 0) return [];

    const activeDeveloperTokens = new Set(
      (allProjects || [])
        .flatMap((project) => [
          String(project?.developerSlug || "").toLowerCase(),
          String(project?.developer || "").toLowerCase(),
          String(project?.developerName || "").toLowerCase(),
        ])
        .filter(Boolean)
    );

    return sanityDevelopers
      .filter((s) => {
        if (!s || !s.slug) return false;
        const slug = String(s.slug).toLowerCase();
        if (EXCLUDED_DEVELOPER_SLUGS.has(slug)) return false;

        const nameToken = String(s.name || "").toLowerCase();
        const arabicNameToken = String(s.nameAr || "").toLowerCase();
        return (
          activeDeveloperTokens.has(slug) ||
          activeDeveloperTokens.has(nameToken) ||
          activeDeveloperTokens.has(arabicNameToken)
        );
      })
      .map((s) => ({
        slug: s.slug,
        name: s.name || s.slug,
        tagline: s.tagline || "",
        description: s.tagline || "",
        heroImage: s.heroImageUrl || "",
        logo: s.logoUrl || "",
        _fromSanity: true,
      }));
  }, [sanityDevelopers, allProjects]);

  const handleLogoError = useCallback((slug) => setLogoErrors((prev) => ({ ...prev, [slug]: true })), []);

  const merged = useMemo(() => allDevs.map((d) => ({
    ...d,
    logoType: detectLogoType(d.logo),
    initials: getInitials(d.name),
    hasLogoError: !!logoErrors[d.slug],
  })), [allDevs, logoErrors]);

  const filtered = useMemo(() => {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return merged;
    return merged.filter((d) => `${d.name} ${d.slug} ${d.tagline || ""} ${d.description || ""}`.toLowerCase().includes(q));
  }, [merged, query]);

  React.useEffect(() => setVisibleCount(PAGE_SIZE), [query]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;

  const getAriaLabel = useCallback((key, values) => {
    const defaults = {
      clearSearch: locale === "ar" ? "مسح البحث" : "Clear search",
      developerCard: locale === "ar" ? `عرض ${values?.developer || ""}` : `View ${values?.developer || ""}`,
      coverAlt: `${values?.name || ""} cover`,
      logoAlt: `${values?.name || ""} logo`,
    };
    return defaults[key] || key;
  }, [locale]);

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.headerSection}></div>
      <div className={styles.filterSection}>
        <div className={styles.filterContent}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <input
                className={styles.searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
              />
              {query ? (
                <button className={styles.searchClear} onClick={() => setQuery("")} type="button">✕</button>
              ) : null}
              <span className={styles.searchIcon}>🔍</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {allDevs.length === 0 && !query && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🏢</div>
            <h3 className={styles.emptyTitle}>
              {locale === "ar" ? "لا يوجد مطورون بعد" : "No developers yet"}
            </h3>
            <p className={styles.emptyMessage}>
              {locale === "ar"
                ? "أضف المطورين من Sanity Studio"
                : "Add developers from Sanity Studio to display them here."}
            </p>
          </div>
        )}

        {visible.length === 0 && query ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🏢</div>
            <h3 className={styles.emptyTitle}>{noResults}</h3>
            <p className={styles.emptyMessage}>{tryDifferentFilter}</p>
            {query && (
              <button className={styles.resetButton} onClick={() => setQuery("")} type="button">
                {clearSearchText}
              </button>
            )}
          </div>
        ) : (
          <div className={styles.grid}>
            {visible.map((dev) => {
              const href = `/developers/${dev.slug}`;
              const logoClass = `${styles.developerLogo} ${styles[dev.logoType] || ""} ${dev.hasLogoError ? styles.noLogo : ""}`;
              return (
                <Link key={dev.slug} href={href} className={styles.card} aria-label={getAriaLabel("developerCard", { developer: dev.name })}>
                  <div className={styles.media}>
                    {dev.heroImage && (
                      <img src={dev.heroImage} alt={getAriaLabel("coverAlt", { name: dev.name })} className={styles.cover} loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = "none"; }} />
                    )}
                    <div className={styles.mediaOverlay} />
                    <div className={logoClass}>
                      {dev.logo && !dev.hasLogoError ? (
                        <img src={dev.logo} alt={getAriaLabel("logoAlt", { name: dev.name })} loading="lazy" onError={() => handleLogoError(dev.slug)} />
                      ) : <span>{dev.initials}</span>}
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.top}>
                      <h3 className={styles.name}>{dev.name}</h3>
                      {dev.tagline ? <p className={styles.tagline}>{dev.tagline}</p> : null}
                    </div>
                    <p className={styles.desc}>{dev.description}</p>
                    <div className={styles.ctaRow}>
                      <span className={styles.cta}>{exploreLabel}{isRTL ? " ←" : " →"}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {canLoadMore && (
          <div className={styles.loadMoreWrap}>
            <button className={styles.loadMoreButton} onClick={() => setVisibleCount((n) => n + PAGE_SIZE)} type="button">
              {loadMoreText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
