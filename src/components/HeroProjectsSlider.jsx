// components/LuxuryHeroSlider.jsx
"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useLanguage } from "@/components/LanguageProvider";
import { propertiesData } from "@/data/propertiesData/propertiesData";
import { buildProjectsQuery } from "@/lib/search/projectsSearch";
import styles from "@/styles/HeroProjectsSlider.module.css";

const CDN = "https://luxury-real-estate-media.b-cdn.net";
const ROTATE_MS = 6000;
const FADE_MS = 800;

function buildProjectHref(categorySlug, developerSlug, projectSlug) {
  return `/properties/${categorySlug}/${developerSlug}/${projectSlug}`;
}

/* -----------------------
  Random helpers
------------------------ */
function randInt(max) {
  if (max <= 0) return 0;
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const a = new Uint32Array(1);
    crypto.getRandomValues(a);
    return a[0] % max;
  }
  return Math.floor(Math.random() * max);
}

function shuffleArray(input) {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function LuxuryHeroSlider() {
  const { t, locale } = useLanguage();
  const router = useRouter();
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");

  // State for search - integrated with ProjectsHeroSearch pattern
  const [filters, setFilters] = useState({
    search: "",
    minPrice: "",
    maxPrice: "",
    devStatus: [],
    unitTypes: [],
    bedrooms: [],
    sort: "newest",
    page: 1,
    perPage: 12,
  });

  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // iOS Safari 100vh fix
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--app-vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  // Build projects list
  const projects = useMemo(() => {
    if (!t) return [];
    const data = propertiesData(CDN, t, locale);
    const list = [];

    data?.categories?.forEach((category) => {
      category?.developers?.forEach((developer) => {
        developer?.projects?.forEach((project) => {
          if (!category?.slug || !developer?.slug || !project?.slug) return;

          const item = {
            id:
              project.id ??
              `${category.slug}-${developer.slug}-${project.slug}`,
            title: project.title,
            slug: project.slug,
            image: project.image,
            description: project.description,
            developerName: developer.name,
            developerSlug: developer.slug,
            category: category.slug,
            categoryName: category.name,
            href: buildProjectHref(category.slug, developer.slug, project.slug),
            location: project.location || project.area || "",
            locationEn: project.locationEn || project.area || "",
            locationAr: project.locationAr || project.area || "",
            priceAED: project.priceAED || project.price || "",
            bedrooms: project.bedrooms || "",
            minBedrooms: project.minBedrooms || "",
            maxBedrooms: project.maxBedrooms || "",
            sizeSqft: project.sizeSqft || "",
            sizeSqftMin: project.sizeSqftMin || "",
            sizeSqftMax: project.sizeSqftMax || "",
            unitType: project.unitType || category.name,
            devStatus: project.market || "Off Plan",
            status: project.status || project.market || "Available",
          };

          if (!item.title || !item.image || !item.href) return;
          list.push(item);
        });
      });
    });

    return list;
  }, [t, locale]);

  // State for slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Mark as client component after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Refs for slider
  const currentIndexRef = useRef(0);
  const nextIndexRef = useRef(null);
  const isFadingRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const loadedImagesRef = useRef(new Set());
  const deckRef = useRef([]);
  const deckPosRef = useRef(0);
  const rotateTimerRef = useRef(null);
  const fadeTimerRef = useRef(null);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    isFadingRef.current = isFading;
  }, [isFading]);

  useEffect(() => {
    nextIndexRef.current = nextIndex;
  }, [nextIndex]);

  const clearTimers = useCallback(() => {
    if (rotateTimerRef.current) clearTimeout(rotateTimerRef.current);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    rotateTimerRef.current = null;
    fadeTimerRef.current = null;
  }, []);

  const rebuildDeck = useCallback((len, avoidIndex) => {
    const indices = Array.from({ length: len }, (_, i) => i);
    let deck = shuffleArray(indices);

    if (deck.length > 1 && deck[0] === avoidIndex) {
      const swapWith = 1 + randInt(deck.length - 1);
      [deck[0], deck[swapWith]] = [deck[swapWith], deck[0]];
    }

    deckRef.current = deck;
    deckPosRef.current = 0;
  }, []);

  const getNextFromDeck = useCallback(() => {
    const len = projects.length;
    if (!len) return 0;

    if (!deckRef.current.length) rebuildDeck(len, currentIndexRef.current);
    if (deckPosRef.current >= deckRef.current.length)
      rebuildDeck(len, currentIndexRef.current);

    const idx = deckRef.current[deckPosRef.current];
    deckPosRef.current += 1;
    return idx;
  }, [projects.length, rebuildDeck]);

  // Preload image
  const preloadImage = useCallback(
    (index) => {
      if (typeof window === "undefined" || !isClient) return;
      if (index === null || !projects[index]) return;

      const imgUrl = projects[index].image;
      if (!imgUrl || loadedImagesRef.current.has(imgUrl)) return;

      const ImgCtor = globalThis?.Image;
      if (!ImgCtor) return;

      try {
        const img = new ImgCtor();
        img.decoding = "async";
        img.loading = "eager";
        img.src = imgUrl;

        img.onload = () => loadedImagesRef.current.add(imgUrl);
        img.onerror = () => {
          loadedImagesRef.current.add(imgUrl);
        };
      } catch {
        loadedImagesRef.current.add(imgUrl);
      }
    },
    [projects, isClient],
  );

  const startFadeTransition = useCallback(() => {
    if (isTransitioningRef.current) return;

    isTransitioningRef.current = true;
    setIsFading(true);

    fadeTimerRef.current = setTimeout(() => {
      const ni = nextIndexRef.current;
      if (ni !== null) {
        setCurrentIndex(ni);
        currentIndexRef.current = ni;
      }

      setNextIndex(null);
      nextIndexRef.current = null;
      setIsFading(false);
      isFadingRef.current = false;
      isTransitioningRef.current = false;
    }, FADE_MS);
  }, []);

  const scheduleNextSlide = useCallback(() => {
    clearTimers();
    if (!projects.length) return;

    rotateTimerRef.current = setTimeout(() => {
      prepareNextSlide();
    }, ROTATE_MS);
  }, [projects.length, clearTimers]);

  const handleNextImageReady = useCallback(
    (index, imgUrl) => {
      if (index !== nextIndexRef.current) return;
      if (imgUrl) loadedImagesRef.current.add(imgUrl);

      if (!isTransitioningRef.current && !isFadingRef.current) {
        startFadeTransition();
      }
    },
    [startFadeTransition],
  );

  const prepareNextSlide = useCallback(() => {
    if (!projects.length || isTransitioningRef.current) return;

    const nextIdx = getNextFromDeck();
    if (nextIdx === currentIndexRef.current) {
      scheduleNextSlide();
      return;
    }

    const nextImg = projects[nextIdx]?.image;
    const isAlreadyLoaded = nextImg && loadedImagesRef.current.has(nextImg);

    setNextIndex(nextIdx);
    nextIndexRef.current = nextIdx;

    preloadImage(nextIdx);

    if (isAlreadyLoaded) {
      requestAnimationFrame(() => startFadeTransition());
    } else {
      fadeTimerRef.current = setTimeout(() => {
        if (!isFadingRef.current && nextIndexRef.current === nextIdx) {
          startFadeTransition();
        }
      }, 1200);
    }
  }, [
    projects,
    getNextFromDeck,
    preloadImage,
    scheduleNextSlide,
    startFadeTransition,
  ]);

  // Initialize slider
  useEffect(() => {
    if (!isClient || !projects.length) return;

    clearTimers();
    rebuildDeck(projects.length, -1);

    const firstIdx = deckRef.current.length
      ? deckRef.current[0]
      : randInt(projects.length);

    deckPosRef.current = 1;

    setCurrentIndex(firstIdx);
    setNextIndex(null);
    setIsFading(false);

    currentIndexRef.current = firstIdx;
    nextIndexRef.current = null;
    isFadingRef.current = false;
    isTransitioningRef.current = false;

    preloadImage(firstIdx);
    const maybeNext = deckRef.current[1];
    if (typeof maybeNext === "number") preloadImage(maybeNext);

    scheduleNextSlide();
    return clearTimers;
  }, [
    projects.length,
    isClient,
    clearTimers,
    rebuildDeck,
    preloadImage,
    scheduleNextSlide,
  ]);

  // Schedule next slide after fade
  useEffect(() => {
    if (!isFading && nextIndex === null && !isTransitioningRef.current) {
      scheduleNextSlide();
    }
  }, [isFading, nextIndex, scheduleNextSlide]);

  // Integrated search handlers - matches ProjectsHeroSearch pattern
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (
      !filters.search.trim() &&
      !filters.minPrice &&
      !filters.maxPrice &&
      !filters.devStatus.length &&
      !filters.unitTypes.length &&
      !filters.bedrooms.length
    ) {
      return;
    }

    // Build query using the same function as ProjectsHeroSearch
    const query = buildProjectsQuery({
      ...filters,
      search: filters.search || searchQuery,
      page: 1,
    });

    const localePrefix = locale && locale !== "en" ? `/${locale}` : "";
    router.push(`${localePrefix}/search-results${query ? `?${query}` : ""}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const handleQuickFilter = (type, value) => {
    let newFilters = { ...filters, page: 1 };

    switch (type) {
      case "property":
        newFilters.unitTypes = [value];
        break;
      case "location":
        // Add location to search query
        newFilters.search = value;
        break;
      case "developer":
        // Add developer to search query
        newFilters.search = value;
        break;
      default:
        newFilters.search = value;
    }

    const query = buildProjectsQuery(newFilters);
    const localePrefix = locale && locale !== "en" ? `/${locale}` : "";
    router.push(`${localePrefix}/search-results${query ? `?${query}` : ""}`);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Apply filter from dropdown
  const applyFilter = (filterType, value) => {
    setFilters((prev) => {
      const updated = { ...prev, page: 1 };

      switch (filterType) {
        case "minPrice":
          updated.minPrice = value;
          break;
        case "maxPrice":
          updated.maxPrice = value;
          break;
        case "status":
          updated.devStatus = value ? [value] : [];
          break;
        default:
          break;
      }

      return updated;
    });
  };

  // Server placeholder
  if (!isClient || !projects.length) {
    return (
      <section className={styles.hero} aria-label="Featured luxury properties">
        <div className={styles.placeholder} />
      </section>
    );
  }

  const currentProject = projects[currentIndex];
  const nextProject = nextIndex !== null ? projects[nextIndex] : null;
  const displayProject = nextProject || currentProject;

  const mainTitle =
    t?.("homeSlider.mainTitle") || "Discover Extraordinary Living";
  const subtitle =
    t?.("homeSlider.subtitle") ||
    "Curated Collection of the World's Finest Properties";
  const searchPlaceholder = isAr
    ? "ابحث بالموقع أو المطور أو اسم المشروع..."
    : "Search by location, developer, or property name...";

  const altText = (p) => {
    const loc = p.location ? ` in ${p.location}` : "";
    const dev = p.developerName ? ` by ${p.developerName}` : "";
    return `${p.title}${dev}${loc} — luxury real estate`;
  };

  const renderSlideImage = (project, opts) => {
    const { isNext, indexForNext } = opts || {};
    const isAboveTheFold = !isNext;

    return (
      <div className={styles.imageContainer}>
        <NextImage
          src={project.image}
          alt={altText(project)}
          fill
          priority={isAboveTheFold}
          sizes="100vw"
          quality={isAboveTheFold ? 90 : 85}
          className={`${styles.heroImage} ${styles.kenBurns}`}
          onLoadingComplete={() => {
            if (isNext) handleNextImageReady(indexForNext, project.image);
          }}
        />
      </div>
    );
  };

  return (
    <section className={styles.hero} aria-label={mainTitle}>
      {/* Hidden H1 for SEO */}
      <h1
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {mainTitle} - Luxury Real Estate in Dubai & UAE
      </h1>

      <div className={styles.mediaWrapper}>
        {/* Base Layer */}
        <div className={`${styles.mediaLayer} ${styles.baseLayer}`}>
          {renderSlideImage(currentProject, { isNext: false })}
        </div>

        {/* Next Layer */}
        {nextProject && (
          <div
            className={`${styles.mediaLayer} ${styles.topLayer} ${
              isFading ? styles.layerVisible : ""
            }`}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            {renderSlideImage(nextProject, {
              isNext: true,
              indexForNext: nextIndex,
            })}
          </div>
        )}
      </div>

      {/* Main Content Overlay */}
      <div className={styles.overlay}>
        <div className={styles.contentContainer}>
          {/* Text Content */}
          <div key={displayProject.id} className={styles.textBlock}>
            <p className={styles.kicker}>
              <span>{displayProject.developerName}</span>
            </p>

            <h2 className={styles.heading}>
              {displayProject.title}
              <span>{displayProject.location}</span>
            </h2>

            <p className={styles.subheading}>
              {displayProject.description || subtitle}
            </p>
          </div>

          {/* Integrated Luxury Search Bar - matches ProjectsHeroSearch pattern */}
          <div className={styles.searchContainer}>
            <form onSubmit={handleSearchSubmit} className={styles.searchBar}>
              <div className={styles.searchInputWrapper}>
                <span className={styles.searchIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
                  type="text"
                  className={styles.searchInput}
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={handleInputChange}
                  aria-label="Search properties"
                />
              </div>

              <div className={styles.searchFilters}>
                <button
                  type="button"
                  className={`${styles.filterButton} ${showFilters ? styles.filterButtonActive : ""}`}
                  onClick={toggleFilters}
                  aria-label="Toggle filters"
                  aria-expanded={showFilters}
                >
                  <span>⚲</span> {isAr ? "فلتر" : "Filters"}
                </button>
                <button type="submit" className={styles.searchButton}>
                  {isAr ? "بحث" : "Search"}
                </button>
              </div>
            </form>

            {/* Quick Filter Tags - fully integrated */}
            {/* <div className={styles.quickFilters}>
              <span
                className={styles.quickFilterTag}
                onClick={() => handleQuickFilter("property", "Villas")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleQuickFilter("property", "Villas")
                }
              >
                {isAr ? "فلل" : "Villas"}
              </span>
              <span
                className={styles.quickFilterTag}
                onClick={() => handleQuickFilter("property", "Apartments")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleQuickFilter("property", "Apartments")
                }
              >
                {isAr ? "شقق" : "Apartments"}
              </span>
              <span
                className={styles.quickFilterTag}
                onClick={() => handleQuickFilter("property", "Penthouses")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleQuickFilter("property", "Penthouses")
                }
              >
                {isAr ? "بنتهاوس" : "Penthouses"}
              </span>
              <span
                className={styles.quickFilterTag}
                onClick={() => handleQuickFilter("location", "Downtown Dubai")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleQuickFilter("location", "Downtown Dubai")
                }
              >
                {isAr ? "داون تاون دبي" : "Downtown Dubai"}
              </span>
              <span
                className={styles.quickFilterTag}
                onClick={() => handleQuickFilter("location", "Palm Jumeirah")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  handleQuickFilter("location", "Palm Jumeirah")
                }
              >
                {isAr ? "نخلة جميرا" : "Palm Jumeirah"}
              </span>
              <span
                className={styles.quickFilterTag}
                onClick={() => handleQuickFilter("developer", "Emaar")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleQuickFilter("developer", "Emaar")
                }
              >
                {isAr ? "إعمار" : "Emaar"}
              </span>
            </div> */}

            {/* Expanded Filters Panel (optional) */}
            {showFilters && (
              <div className={styles.expandedFilters}>
                <div className={styles.filterRow}>
                  <select
                    className={styles.filterSelect}
                    onChange={(e) => applyFilter("minPrice", e.target.value)}
                    value={filters.minPrice}
                  >
                    <option value="">{isAr ? "أقل سعر" : "Min Price"}</option>
                    <option value="500000">500k AED</option>
                    <option value="1000000">1M AED</option>
                    <option value="2000000">2M AED</option>
                    <option value="5000000">5M AED</option>
                    <option value="10000000">10M AED</option>
                  </select>

                  <select
                    className={styles.filterSelect}
                    onChange={(e) => applyFilter("maxPrice", e.target.value)}
                    value={filters.maxPrice}
                  >
                    <option value="">{isAr ? "أعلى سعر" : "Max Price"}</option>
                    <option value="1000000">1M AED</option>
                    <option value="2000000">2M AED</option>
                    <option value="5000000">5M AED</option>
                    <option value="10000000">10M AED</option>
                    <option value="20000000">20M AED</option>
                  </select>

                  <select
                    className={styles.filterSelect}
                    onChange={(e) => applyFilter("status", e.target.value)}
                    value={filters.devStatus[0] || ""}
                  >
                    <option value="">
                      {isAr ? "جميع الحالات" : "All Status"}
                    </option>
                    <option value="Off Plan">
                      {isAr ? "قيد الإنشاء" : "Off Plan"}
                    </option>
                    <option value="Ready">{isAr ? "جاهز" : "Ready"}</option>
                    <option value="Under Construction">
                      {isAr ? "تحت الإنشاء" : "Under Construction"}
                    </option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link
            href={displayProject.href}
            className={styles.cta}
            aria-label={`Discover ${displayProject.title}`}
          >
            {t?.("homeSlider.discoverButton") || "Discover Property"}
          </Link>
        </div>
      </div>
    </section>
  );
}
