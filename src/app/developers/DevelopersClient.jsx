"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "@/styles/developer/developers-2.module.css";
import { useLanguage } from "@/components/LanguageProvider";

const PAGE_SIZE = 12;

function normalizeLocale(locale) {
  const s = String(locale || "en").toLowerCase();
  return s.startsWith("ar") ? "ar" : "en";
}

function safeTFactory(t) {
  return (key, values, fallback) => {
    try {
      const v = t?.(key, values);
      if (v === undefined || v === null || v === "" || v === key) return fallback;
      return v;
    } catch {
      return fallback;
    }
  };
}

function getTObject(t, key) {
  if (!t) return null;
  try {
    const v = t(key, { returnObjects: true });
    if (!v || v === key) return null;
    if (typeof v === "string") return null;
    return v;
  } catch {
    return null;
  }
}

const detectLogoType = (logoUrl) => {
  if (!logoUrl) return "default";
  const url = String(logoUrl).toLowerCase();
  if (url.includes("white") || url.includes("light") || url.includes("bright") || url.includes("negative") || url.includes("wht")) return "whiteLogo";
  if (url.includes("black") || url.includes("dark") || url.includes("drk") || url.includes("blk")) return "blackLogo";
  if (url.includes("transparent") || url.includes(".png") || url.includes("trans") || url.includes("clear")) return "transparentLogo";
  return "default";
};

const getInitials = (name) => {
  if (!name) return "DEV";
  const words = String(name).trim().split(" ").filter(Boolean);
  if (words.length === 0) return "DEV";
  if (words.length === 1) return words[0].substring(0, 3).toUpperCase();
  return words.map((w) => w[0]).join("").substring(0, 3).toUpperCase();
};

function getDefaultHeroImage(slug) {
  const imageMap = {
    sobha: "https://luxury-real-estate-media.b-cdn.net/aquamont/intro-main.png",
    arada: "https://luxury-real-estate-media.b-cdn.net/massar-3/hero-bg.jpg",
    damac: "https://luxury-real-estate-media.b-cdn.net/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg",
    azizi: "https://luxury-real-estate-media.b-cdn.net/riviera/hero-bg.jpg",
    omniyat: "https://luxury-real-estate-media.b-cdn.net/lumena-alta/hero-bg.jpg",
    danube: "https://luxury-real-estate-media.b-cdn.net/danube/shahkhruz/09_EXT_Bottom%20Up.jpg",
    "gulf-land-property": "https://luxury-real-estate-media.b-cdn.net/gulf-land-property/tonino-lamborghini-residences/Facad.jpg",
    gfs: "https://luxury-real-estate-media.b-cdn.net/gfs/coventry-curve-2/VIEW%204%20AERIAL%20NIGHT.jpg",
    binghatti: "https://luxury-real-estate-media.b-cdn.net/binghatti/aquarise/Aquarise%20Exterior-4.jpg",
    samana: "https://luxury-real-estate-media.b-cdn.net/samana/imperial-heights/4-roadlevelshot02.jpg",
    "ajmal-makan": "https://luxury-real-estate-media.b-cdn.net/ajmal-makan/the-view-island/AJMAL%20MAKAN%20CITY%203D%20(1).png",
    ellington: "https://luxury-real-estate-media.b-cdn.net/ellington/eltiera-views/Eltiera%20Views%20-%20adult%20pool.jpg",
    imtiaz: "https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon/IMTIAZ_Wynwood-Exterior%20render%202.jpg",
    tiger: "https://luxury-real-estate-media.b-cdn.net/tiger/orchid/amenties%20(2).jpg",
    reportage: "https://luxury-real-estate-media.b-cdn.net/reportage/reportage-hills/CGI-01.jpg",
    taraf: "https://luxury-real-estate-media.b-cdn.net/taraf/terra-golf-phase-2%20/Terra_ext_cam1_Final.jpg",
    "prestige-one": "https://luxury-real-estate-media.b-cdn.net/prestige-one/hilton-residences/Facade%202-%20Hilton%20Residences%20DMC.jpg",
    evolutions: "https://luxury-real-estate-media.b-cdn.net/evolutions/butterfly-towers/EXTERIOR%20PICS/Cam%201.jpg",
  };
  return imageMap[slug] || "https://luxury-real-estate-media.b-cdn.net/aquamont/intro-main.png";
}

function getDefaultLogo(slug) {
  const logoMap = {
    sobha: "/Sobha-Realty-Square-Logo.jpg",
    arada: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/arada.avif",
    damac: "/damac-logo.png",
    azizi: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
    omniyat: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/omniyat.png",
    danube: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png",
    "gulf-land-property": "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gulf.png",
    gfs: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png",
    binghatti: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif",
    samana: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Samana.png",
    "ajmal-makan": "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png",
    ellington: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png",
    imtiaz: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png",
    tiger: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png",
    reportage: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/reportage.png",
    taraf: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/taraf.webp",
    "prestige-one": "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png",
    evolutions: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/evolutions.jpg",
  };
  return logoMap[slug] || "/default-logo.png";
}

function getDevelopersFromTranslations(t) {
  const developerProfiles = getTObject(t, "developerProfiles");
  if (!developerProfiles || typeof developerProfiles !== "object") return [];

  const developerSlugMap = {
    sobha: "sobha", sobhaRealty: "sobha", arada: "arada", damac: "damac",
    azizi: "azizi", omniyat: "omniyat", danube: "danube",
    "gulf-land-property": "gulf-land-property", gfs: "gfs", binghatti: "binghatti",
    samana: "samana", "ajmal-makan": "ajmal-makan", ellington: "ellington",
    imtiaz: "imtiaz", tiger: "tiger", reportage: "reportage", taraf: "taraf",
    "prestige-one": "prestige-one", evolutions: "evolutions",
  };

  const processedSlugs = new Set();
  const developers = [];

  Object.entries(developerProfiles).forEach(([key, profile]) => {
    const slug = developerSlugMap[key] || key;
    if (processedSlugs.has(slug)) return;
    processedSlugs.add(slug);
    if (!profile?.hero?.title) return;

    let totalProjects = "—";
    if (profile.projectsInventory) {
      const uc = profile.projectsInventory.underConstruction?.projects || 0;
      const c = profile.projectsInventory.completed?.projects || 0;
      if (uc > 0 || c > 0) totalProjects = `${uc + c}+`;
    }

    let stats = {};
    if (profile.performance?.stats?.transactions) {
      const match = String(profile.performance.stats.transactions).match(/\d+/);
      if (match) stats.projects = `${match[0]}`;
    }
    if (!stats.projects && profile.projectsInventory) {
      const uc = profile.projectsInventory.underConstruction?.projects || 0;
      const c = profile.projectsInventory.completed?.projects || 0;
      if (uc > 0 || c > 0) stats.projects = `${uc + c}+`;
    }

    developers.push({
      slug,
      name: profile.hero.title,
      tagline: profile.hero.tagline || "",
      subtitle: profile.hero.subtitle || "",
      description: profile.hero.subtitle || profile.hero.tagline || "",
      heroImage: getDefaultHeroImage(slug),
      logo: getDefaultLogo(slug),
      stats,
      totalProjects,
      performanceData: profile.performance || null,
      projectsInventory: profile.projectsInventory || null,
      whyPoints: Array.isArray(profile.whyPoints) ? profile.whyPoints : [],
      about: Array.isArray(profile.about) ? profile.about : [],
    });
  });

  return developers;
}

export default function DevelopersClient({ sanityDevelopers = [] }) {
  const { locale: ctxLocale, t } = useLanguage();
  const locale = normalizeLocale(ctxLocale);
  const isRTL = locale === "ar";
  const safeT = useMemo(() => safeTFactory(t), [t]);

  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [logoErrors, setLogoErrors] = useState({});

  const allDevs = useMemo(() => {
    const developers = getDevelopersFromTranslations(t);
    const staticDevs = developers
      .map((dev) => ({ ...dev, slug: dev.slug || "", name: dev.name || "" }))
      .filter((dev) => dev.slug);

    if (sanityDevelopers.length > 0) {
      return staticDevs.map((dev) => {
        const sanityDev = sanityDevelopers.find((s) => s.slug === dev.slug);
        if (!sanityDev) return dev;
        return {
          ...dev,
          name: sanityDev.name || dev.name,
          tagline: sanityDev.tagline || dev.tagline,
          logo: sanityDev.logoUrl || dev.logo,
        };
      });
    }

    return staticDevs;
  }, [t, sanityDevelopers]);

  const getTranslation = useCallback(
    (key, defaultAr, defaultEn) => {
      const translation = safeT(`developersPage.${key}`, undefined, null);
      if (translation) return translation;
      return locale === "ar" ? defaultAr : defaultEn;
    },
    [safeT, locale]
  );

  const searchPlaceholder = getTranslation("searchPlaceholder", "ابحث عن مطور...", "Search developers...");
  const exploreLabel = getTranslation("explore", "استكشف", "Explore");
  const noResults = getTranslation("noResults", "لا توجد نتائج.", "No results found.");
  const loadMoreText = getTranslation("loadMore", "عرض المزيد", "Load more");
  const clearSearchText = locale === "ar" ? "مسح البحث" : "Clear search";
  const tryDifferentFilter = locale === "ar"
    ? "حاول البحث باسم مطور أو استخدام فلتر مختلف"
    : "Try searching by developer name or using a different filter";

  const merged = useMemo(() => {
    return allDevs.map((d) => ({
      ...d,
      logoType: detectLogoType(d.logo),
      initials: getInitials(d.name),
      hasLogoError: !!logoErrors[d.slug],
    }));
  }, [allDevs, logoErrors]);

  const filtered = useMemo(() => {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return merged;
    return merged.filter((d) => {
      const hay = `${d.name} ${d.slug} ${d.tagline || ""} ${d.description || ""}`.toLowerCase().trim();
      return hay.includes(q);
    });
  }, [merged, query]);

  useEffect(() => setVisibleCount(PAGE_SIZE), [query]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;

  const handleLogoError = useCallback((slug) => {
    setLogoErrors((prev) => ({ ...prev, [slug]: true }));
  }, []);

  const getAriaLabel = useCallback(
    (key, values) => {
      const ariaKey = `developersPage.aria.${key}`;
      const translated = safeT(ariaKey, values, null);
      if (translated) return translated;
      const defaults = {
        clearSearch: locale === "ar" ? "مسح البحث" : "Clear search",
        developerCard: locale === "ar" ? `عرض ${values?.developer || ""}` : `View ${values?.developer || ""}`,
        coverAlt: locale === "ar" ? `غلاف ${values?.name || ""}` : `${values?.name || ""} cover`,
        logoAlt: locale === "ar" ? `شعار ${values?.name || ""}` : `${values?.name || ""} logo`,
      };
      return defaults[key] || key;
    },
    [safeT, locale]
  );

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
                <button className={styles.searchClear} onClick={() => setQuery("")} aria-label={getAriaLabel("clearSearch")} type="button">
                  ✕
                </button>
              ) : null}
              <span className={styles.searchIcon}>🔍</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {visible.length === 0 ? (
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
                    <img
                      src={dev.heroImage}
                      alt={getAriaLabel("coverAlt", { name: dev.name })}
                      className={styles.cover}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = "https://luxury-real-estate-media.b-cdn.net/aquamont/intro-main.png"; }}
                    />
                    <div className={styles.mediaOverlay} />
                    <div className={logoClass}>
                      {dev.logo && !dev.hasLogoError ? (
                        <img src={dev.logo} alt={getAriaLabel("logoAlt", { name: dev.name })} loading="lazy" onError={() => handleLogoError(dev.slug)} />
                      ) : (
                        <span>{dev.initials}</span>
                      )}
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

        {canLoadMore ? (
          <div className={styles.loadMoreWrap}>
            <button className={styles.loadMoreButton} onClick={() => setVisibleCount((n) => n + PAGE_SIZE)} type="button">
              {loadMoreText}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}