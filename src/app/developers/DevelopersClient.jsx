"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import styles from "@/styles/developer/developers-2.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

const PAGE_SIZE = 12;

function normalizeLocale(locale) {
  return String(locale || "en").toLowerCase().startsWith("ar") ? "ar" : "en";
}

function safeTFactory(t) {
  return (key, values, fallback) => {
    try {
      const value = t?.(key, values);
      if (
        value === undefined ||
        value === null ||
        value === "" ||
        value === key
      ) {
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
  if (
    url.includes("white") ||
    url.includes("light") ||
    url.includes("bright")
  ) {
    return "whiteLogo";
  }
  if (url.includes("black") || url.includes("dark")) return "blackLogo";
  if (url.includes("transparent") || url.includes(".png")) {
    return "transparentLogo";
  }
  return "default";
};

const getInitials = (name) => {
  if (!name) return "DEV";
  const words = String(name).trim().split(" ").filter(Boolean);
  if (words.length === 0) return "DEV";
  if (words.length === 1) return words[0].substring(0, 3).toUpperCase();
  return words
    .map((word) => word[0])
    .join("")
    .substring(0, 3)
    .toUpperCase();
};

const resolveDeveloperImage = (projects, slug, name) => {
  if (!Array.isArray(projects) || projects.length === 0) return "";

  const tokens = [slug, name]
    .filter(Boolean)
    .map((value) => String(value).toLowerCase().replace(/[-_\s]+/g, " ").trim());

  // Find ALL matching projects, then pick the one with the best image
  const matches = projects.filter((project) => {
    const projectTokens = [
      project?.developerSlug,
      project?.developer,
      project?.developerName,
      project?.developerNameEn,
      project?.developerNameAr,
    ]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase().replace(/[-_\s]+/g, " ").trim());

    return tokens.some((token) =>
      projectTokens.some((projectToken) =>
        projectToken.includes(token) || token.includes(projectToken)
      )
    );
  });

  // Return the first match that has a usable image
  for (const match of matches) {
    const img =
      match?.heroImageUrl ||
      match?.image ||
      match?.heroImage ||
      match?.data?.hero?.backgroundUrl ||
      match?.data?.hero?.image ||
      match?.data?.hero?.posterUrl ||
      match?.data?.gallery?.slides?.[0] ||
      match?.data?.intro?.imgUrl ||
      "";
    if (img) return img;
  }

  return "";
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
    "ابحث عن مطور...",
    "Search developers..."
  );
  const exploreLabel = getTranslation("explore", "استكشف", "Explore");
  const noResults = getTranslation(
    "noResults",
    "لا توجد نتائج.",
    "No results found."
  );
  const loadMoreText = getTranslation(
    "loadMore",
    "عرض المزيد",
    "Load more"
  );
  const clearSearchText = locale === "ar" ? "مسح البحث" : "Clear search";
  const searchLabel = locale === "ar" ? "بحث" : "Search";
  const tryDifferentFilter =
    locale === "ar"
      ? "حاول البحث باسم مطور"
      : "Try searching by developer name";
  const titleText = locale === "ar" ? "المطورون" : "Developers";
  const projectsLabel = locale === "ar" ? "المشاريع" : "projects";
  const subtitleText =
    locale === "ar"
      ? "استعرض المطورين المرتبطين بمشاريع فعلية ومتاحة على الموقع."
      : "Browse developers linked to real live projects across the site.";

  const allDevs = useMemo(() => {
    return (sanityDevelopers || [])
      .map((sanityDev) => {
        const slug = String(sanityDev?.slug || "").toLowerCase().trim();
        if (!slug) return null;

        const nameEn = sanityDev.name || slug;
        const nameAr = sanityDev.nameAr || nameEn;
        const taglineEn = sanityDev.tagline || "";
        const taglineAr = sanityDev.taglineAr || taglineEn;
        const descriptionEn = sanityDev.description || taglineEn || "";
        const descriptionAr =
          sanityDev.descriptionAr || taglineAr || descriptionEn;

        const heroImage =
          sanityDev.coverImage ||
          sanityDev.coverImageUrl ||
          sanityDev.heroImageUrl ||
          resolveDeveloperImage(allProjects, slug, nameEn);

        return {
          slug,
          nameEn,
          nameAr,
          taglineEn,
          taglineAr,
          descriptionEn,
          descriptionAr,
          heroImage,
          logo: sanityDev.logoUrl || sanityDev.logo || "",
          _fromSanity: true,
        };
      })
      .filter(Boolean);
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
        projectsByDeveloper.get(
          String(developer.nameEn || "").toLowerCase()
        ) ||
        projectsByDeveloper.get(
          String(developer.nameAr || "").toLowerCase()
        ) ||
        0;

      const fallbackDescription =
        locale === "ar"
          ? `${projectCount} مشروع متاح`
          : `${projectCount} live projects`;

      const displayName =
        locale === "ar"
          ? developer.nameAr || developer.nameEn || developer.slug
          : developer.nameEn || developer.nameAr || developer.slug;

      const displayTagline =
        locale === "ar"
          ? developer.taglineAr || developer.taglineEn || ""
          : developer.taglineEn || developer.taglineAr || "";

      const displayDescription =
        locale === "ar"
          ? developer.descriptionAr ||
            developer.descriptionEn ||
            fallbackDescription
          : developer.descriptionEn ||
            developer.descriptionAr ||
            fallbackDescription;

      return {
        ...developer,
        name: displayName,
        tagline: displayTagline,
        description: displayDescription,
        projectCount,
        logoType: detectLogoType(developer.logo),
        initials: getInitials(displayName),
        hasLogoError: !!logoErrors[developer.slug],
      };
    });
  }, [allDevs, logoErrors, projectsByDeveloper, locale]);

  const filtered = useMemo(() => {
    const normalizedQuery = String(query || "").trim().toLowerCase();
    if (!normalizedQuery) return merged;

    return merged.filter((developer) =>
      `${developer.name} ${developer.slug} ${developer.tagline || ""} ${
        developer.description || ""
      }`
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [merged, query]);

  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query]);

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const canLoadMore = visibleCount < filtered.length;

  const getAriaLabel = useCallback(
    (key, values) => {
      const defaults = {
        clearSearch: locale === "ar" ? "مسح البحث" : "Clear search",
        developerCard:
          locale === "ar"
            ? `عرض ${values?.developer || ""}`
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
              {locale === "ar" ? "مطور مطابق" : "matching developers"}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {allDevs.length === 0 && !query && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>DEV</div>
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
            <div className={styles.emptyIcon}>DEV</div>
            <h3 className={styles.emptyTitle}>{noResults}</h3>
            <p className={styles.emptyMessage}>{tryDifferentFilter}</p>
            {query && (
              <button
                className={styles.resetButton}
                onClick={() => setQuery("")}
                type="button"
              >
                {clearSearchText}
              </button>
            )}
          </div>
        ) : (
          <div className={styles.grid}>
            {visible.map((developer) => {
              const href = `/developers/${developer.slug}`;
              const logoClass = `${styles.developerLogo} ${
                styles[developer.logoType] || ""
              } ${developer.hasLogoError ? styles.noLogo : ""}`;

              return (
                <Link
                  key={developer.slug}
                  href={href}
                  className={styles.card}
                  aria-label={getAriaLabel("developerCard", {
                    developer: developer.name,
                  })}
                >
                  <div className={styles.media}>
                    {developer.heroImage && (
                      <img
                        src={developer.heroImage}
                        alt={getAriaLabel("coverAlt", {
                          name: developer.name,
                        })}
                        className={styles.cover}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.opacity = "0";
                          event.currentTarget.style.transition = "opacity 0.3s ease";
                          event.currentTarget.style.pointerEvents = "none";
                        }}
                      />
                    )}
                    <div className={styles.mediaOverlay} />
                    <div className={logoClass}>
                      {developer.logo && !developer.hasLogoError ? (
                        <img
                          src={developer.logo}
                          alt={getAriaLabel("logoAlt", {
                            name: developer.name,
                          })}
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
                      {developer.tagline ? (
                        <p className={styles.tagline}>{developer.tagline}</p>
                      ) : null}
                    </div>
                    <p className={styles.desc}>{developer.description}</p>
                    <div className={styles.ctaRow}>
                      <span className={styles.cta}>
                        {`${exploreLabel} ${projectsLabel}${
                          isRTL ? " <" : " >"
                        }`}
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