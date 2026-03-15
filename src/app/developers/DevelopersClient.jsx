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
      const value = t?.(key, values);
      if (value === undefined || value === null || value === "" || value === key) {
        return fallback;
      }
      return value;
    } catch {
      return fallback;
    }
  };
}

const detectLogoType = (logoUrl) => {
  if (!logoUrl) return "default";
  const url = String(logoUrl).toLowerCase();
  if (url.includes("white") || url.includes("light") || url.includes("bright")) {
    return "whiteLogo";
  }
  if (url.includes("black") || url.includes("dark")) return "blackLogo";
  if (url.includes("transparent") || url.includes(".png")) return "transparentLogo";
  return "default";
};

const getInitials = (name) => {
  if (!name) return "DEV";
  const words = String(name).trim().split(" ").filter(Boolean);
  if (words.length === 0) return "DEV";
  if (words.length === 1) return words[0].substring(0, 3).toUpperCase();
  return words.map((word) => word[0]).join("").substring(0, 3).toUpperCase();
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

  const getTranslation = useCallback(
    (key, defaultAr, defaultEn) => {
      const translation = safeT(`developersPage.${key}`, undefined, null);
      if (translation) return translation;
      return locale === "ar" ? defaultAr : defaultEn;
    },
    [safeT, locale]
  );

  const searchPlaceholder = getTranslation(
    "searchPlaceholder",
    "\u0627\u0628\u062d\u062b \u0639\u0646 \u0645\u0637\u0648\u0631...",
    "Search developers..."
  );
  const exploreLabel = getTranslation(
    "explore",
    "\u0627\u0633\u062a\u0643\u0634\u0641",
    "Explore"
  );
  const noResults = getTranslation(
    "noResults",
    "\u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c.",
    "No results found."
  );
  const loadMoreText = getTranslation(
    "loadMore",
    "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f",
    "Load more"
  );
  const clearSearchText =
    locale === "ar" ? "\u0645\u0633\u062d \u0627\u0644\u0628\u062d\u062b" : "Clear search";
  const searchLabel = locale === "ar" ? "\u0628\u062d\u062b" : "Search";
  const tryDifferentFilter =
    locale === "ar"
      ? "\u062d\u0627\u0648\u0644 \u0627\u0644\u0628\u062d\u062b \u0628\u0627\u0633\u0645 \u0645\u0637\u0648\u0631"
      : "Try searching by developer name";
  const titleText = locale === "ar" ? "\u0627\u0644\u0645\u0637\u0648\u0631\u0648\u0646" : "Developers";
  const projectsLabel = locale === "ar" ? "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639" : "projects";
  const subtitleText =
    locale === "ar"
      ? "\u0627\u0633\u062a\u0639\u0631\u0636 \u0627\u0644\u0645\u0637\u0648\u0631\u064a\u0646 \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u064a\u0646 \u0628\u0645\u0634\u0627\u0631\u064a\u0639 \u0641\u0639\u0644\u064a\u0629 \u0648\u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639."
      : "Browse developers linked to real live projects across the site.";

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
      .filter((developer) => {
        if (!developer || !developer.slug) return false;
        const slug = String(developer.slug).toLowerCase();
        if (EXCLUDED_DEVELOPER_SLUGS.has(slug)) return false;

        const nameToken = String(developer.name || "").toLowerCase();
        const arabicNameToken = String(developer.nameAr || "").toLowerCase();

        return (
          activeDeveloperTokens.has(slug) ||
          activeDeveloperTokens.has(nameToken) ||
          activeDeveloperTokens.has(arabicNameToken)
        );
      })
      .map((developer) => ({
        slug: developer.slug,
        name: developer.name || developer.slug,
        tagline: developer.tagline || "",
        description: developer.tagline || "",
        heroImage: developer.heroImageUrl || "",
        logo: developer.logoUrl || "",
        _fromSanity: true,
      }));
  }, [sanityDevelopers, allProjects]);

  const projectsByDeveloper = useMemo(() => {
    const map = new Map();
    for (const project of allProjects || []) {
      const tokens = [
        String(project?.developerSlug || "").toLowerCase(),
        String(project?.developer || "").toLowerCase(),
        String(project?.developerName || "").toLowerCase(),
      ].filter(Boolean);

      for (const token of tokens) {
        map.set(token, (map.get(token) || 0) + 1);
      }
    }
    return map;
  }, [allProjects]);

  const handleLogoError = useCallback((slug) => {
    setLogoErrors((prev) => ({ ...prev, [slug]: true }));
  }, []);

  const merged = useMemo(() => {
    return allDevs.map((developer) => {
      const projectCount =
        projectsByDeveloper.get(String(developer.slug || "").toLowerCase()) ||
        projectsByDeveloper.get(String(developer.name || "").toLowerCase()) ||
        0;

      const fallbackDescription =
        locale === "ar"
          ? `${projectCount} \u0645\u0634\u0631\u0648\u0639 \u0645\u062a\u0627\u062d`
          : `${projectCount} live projects`;

      return {
        ...developer,
        description: developer.description || fallbackDescription,
        projectCount,
        logoType: detectLogoType(developer.logo),
        initials: getInitials(developer.name),
        hasLogoError: !!logoErrors[developer.slug],
      };
    });
  }, [allDevs, logoErrors, projectsByDeveloper, locale]);

  const filtered = useMemo(() => {
    const normalizedQuery = String(query || "").trim().toLowerCase();
    if (!normalizedQuery) return merged;

    return merged.filter((developer) =>
      `${developer.name} ${developer.slug} ${developer.tagline || ""} ${developer.description || ""}`
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [merged, query]);

  React.useEffect(() => setVisibleCount(PAGE_SIZE), [query]);

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );
  const canLoadMore = visibleCount < filtered.length;

  const getAriaLabel = useCallback(
    (key, values) => {
      const defaults = {
        clearSearch:
          locale === "ar" ? "\u0645\u0633\u062d \u0627\u0644\u0628\u062d\u062b" : "Clear search",
        developerCard:
          locale === "ar"
            ? `\u0639\u0631\u0636 ${values?.developer || ""}`
            : `View ${values?.developer || ""}`,
        coverAlt: `${values?.name || ""} cover`,
        logoAlt: `${values?.name || ""} logo`,
      };

      return defaults[key] || key;
    },
    [locale]
  );

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1 className={styles.mainTitle}>{titleText}</h1>
          <p className={styles.mainSubtitle}>{subtitleText}</p>
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterContent}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <input
                className={styles.searchInput}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
              />
              {query ? (
                <button
                  className={styles.searchClear}
                  onClick={() => setQuery("")}
                  type="button"
                  aria-label={clearSearchText}
                >
                  <span aria-hidden="true">×</span>
                </button>
              ) : null}
              <span className={styles.searchIcon} aria-hidden="true">
                {searchLabel}
              </span>
            </div>
          </div>

          <div className={styles.resultsInfo}>
            <span className={styles.resultsCount}>{filtered.length}</span>
            <span className={styles.resultsTotal}>
              {locale === "ar"
                ? "\u0645\u0637\u0648\u0631 \u0645\u0637\u0627\u0628\u0642"
                : "matching developers"}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {allDevs.length === 0 && !query && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>DEV</div>
            <h3 className={styles.emptyTitle}>
              {locale === "ar"
                ? "\u0644\u0627 \u064a\u0648\u062c\u062f \u0645\u0637\u0648\u0631\u0648\u0646 \u0628\u0639\u062f"
                : "No developers yet"}
            </h3>
            <p className={styles.emptyMessage}>
              {locale === "ar"
                ? "\u0623\u0636\u0641 \u0627\u0644\u0645\u0637\u0648\u0631\u064a\u0646 \u0645\u0646 Sanity Studio"
                : "Add developers from Sanity Studio to display them here."}
            </p>
          </div>
        )}

        {visible.length === 0 && query ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>DEV</div>
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
            {visible.map((developer) => {
              const href = `/developers/${developer.slug}`;
              const logoClass = `${styles.developerLogo} ${styles[developer.logoType] || ""} ${
                developer.hasLogoError ? styles.noLogo : ""
              }`;

              return (
                <Link
                  key={developer.slug}
                  href={href}
                  className={styles.card}
                  aria-label={getAriaLabel("developerCard", { developer: developer.name })}
                >
                  <div className={styles.media}>
                    {developer.heroImage && (
                      <img
                        src={developer.heroImage}
                        alt={getAriaLabel("coverAlt", { name: developer.name })}
                        className={styles.cover}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    <div className={styles.mediaOverlay} />
                    <div className={logoClass}>
                      {developer.logo && !developer.hasLogoError ? (
                        <img
                          src={developer.logo}
                          alt={getAriaLabel("logoAlt", { name: developer.name })}
                          loading="lazy"
                          onError={() => handleLogoError(developer.slug)}
                        />
                      ) : (
                        <span>{developer.initials}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.body}>
                    <div className={styles.top}>
                      <h3 className={styles.name}>{developer.name}</h3>
                      {developer.tagline ? <p className={styles.tagline}>{developer.tagline}</p> : null}
                    </div>
                    <p className={styles.desc}>{developer.description}</p>
                    <div className={styles.ctaRow}>
                      <span className={styles.cta}>
                        {`${exploreLabel} ${projectsLabel}${isRTL ? " <" : " >"}`}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {canLoadMore && (
          <div className={styles.loadMoreWrap}>
            <button
              className={styles.loadMoreButton}
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              type="button"
            >
              {loadMoreText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
