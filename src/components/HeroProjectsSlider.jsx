"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useLanguage } from "@/components/LanguageProvider";
import { buildProjectsQuery } from "@/lib/search/projectsSearch";
import { useAllProjects } from "@/components/SanityProjectsContext";
import styles from "@/styles/HeroProjectsSlider.module.css";

const ROTATE_MS = 5200;
const FADE_MS = 900;
const MAX_SLIDES = 8;

function normalizeHeroLabel(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const lowered = text.toLowerCase();
  if (lowered.includes("mohamad") && lowered.includes("kodmani")) return "";
  return text
    .replace(/\s+(properties|realty|developments?|real estate)\s*$/i, "")
    .trim();
}

export default function LuxuryHeroSlider() {
  const { t, locale } = useLanguage();
  const router = useRouter();
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");
  const { allProjects } = useAllProjects();

  const [cmsSlides, setCmsSlides] = useState([]);

  const [filters, setFilters] = useState({
    search: "", minPrice: "", maxPrice: "",
    devStatus: [], unitTypes: [], bedrooms: [],
    sort: "newest", page: 1, perPage: 12,
  });
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let alive = true;

    async function loadCmsSlides() {
      try {
        const response = await fetch("/api/site-settings", { cache: "no-store" });
        const data = response.ok ? await response.json() : null;
        if (!alive) return;
        setCmsSlides(Array.isArray(data?.data?.heroSlides) ? data.data.heroSlides : []);
      } catch {
        if (!alive) return;
        setCmsSlides([]);
      }
    }

    loadCmsSlides();
    return () => {
      alive = false;
    };
  }, []);

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

  const projects = useMemo(() => {
    const projectBySlug = new Map(
      (allProjects || [])
        .filter((project) => project?.slug)
        .map((project) => [String(project.slug).toLowerCase(), project])
    );

    const cmsDrivenSlides = cmsSlides
      .map((slide, index) => ({
        slide,
        index,
        order: Number.isFinite(Number(slide?.order)) ? Number(slide.order) : Number.MAX_SAFE_INTEGER,
      }))
      .sort((a, b) => a.order - b.order || a.index - b.index)
      .map(({ slide, index }) => {
        const slideSlug = slide?.propertySlug || slide?.slug;
        const projectMatch = slideSlug
          ? projectBySlug.get(String(slideSlug).toLowerCase())
          : null;

        const title =
          (locale === "ar" && slide?.titleAr)
            ? slide.titleAr
            : slide?.title || slide?.titleAr || projectMatch?.nameAr || projectMatch?.nameEn || projectMatch?.name || "Luxury Real Estate";

        const description =
          (locale === "ar" && slide?.subtitleAr)
            ? slide.subtitleAr
            : slide?.subtitle || slide?.subtitleAr || projectMatch?.data?.project?.description || projectMatch?.data?.intro?.description || "";

        // Normalize CMS developer name first; if it gets stripped (e.g. "Mohamad Kodmani"),
        // fall through to the matched project's actual builder name.
        const rawDevFromCms = normalizeHeroLabel(
          slide?.developerName || slide?.developer || ""
        );
        const rawDevFromProject = normalizeHeroLabel(
          projectMatch?.developerNameEn ||
          projectMatch?.developer ||
          projectMatch?.data?.project?.developer ||
          ""
        );
        const developerName = rawDevFromCms || rawDevFromProject;

        const location =
          (locale === "ar" && slide?.locationAr)
            ? slide.locationAr
            : slide?.location || slide?.locationAr || projectMatch?.location || projectMatch?.data?.project?.location || "";

        return {
          id: slide?._key || `cms-slide-${index}`,
          title,
          slug: slideSlug || `cms-slide-${index}`,
          image:
            slide?.imageUrl ||
            slide?.backgroundUrl ||
            projectMatch?.image ||
            projectMatch?.data?.hero?.backgroundUrl ||
            projectMatch?.data?.hero?.image ||
            "",
          description,
          developerName: normalizeHeroLabel(developerName),
          developerSlug: projectMatch?.developerSlug || "",
          category: projectMatch?.category || "apartments",
          href: slide?.ctaUrl || projectMatch?.href || "/properties",
          location,
          devStatus: projectMatch?.status || projectMatch?.devStatus || "Off-plan",
          status: projectMatch?.status || projectMatch?.devStatus || "Off-plan",
        };
      })
      .filter((slide) => slide.image)
      .slice(0, MAX_SLIDES);

    // Build fallback slides from allProjects (used as padding when CMS has too few)
    const fallbackSlides = (allProjects || [])
      .map((project, index) => {
        const image =
          project?.image ||
          project?.data?.hero?.backgroundUrl ||
          project?.data?.hero?.image ||
          project?.data?.hero?.posterUrl ||
          project?.data?.hero?.poster ||
          "";

        const title =
          (locale === "ar" && project?.nameAr)
            ? project.nameAr
            : project?.nameEn || project?.name || project?.slug || "Luxury Real Estate";

        const description =
          (locale === "ar" && project?.data?.project?.descriptionAr)
            ? project.data.project.descriptionAr
            : project?.data?.project?.description ||
              project?.data?.intro?.description ||
              "";

        const location =
          (locale === "ar" && project?.locationAr)
            ? project.locationAr
            : project?.location || project?.data?.project?.location || "";

        const developerName =
          normalizeHeroLabel(
            project?.developerNameEn ||
              project?.developerNameAr ||
              project?.developer ||
              project?.data?.project?.developer ||
              ""
          );

        return {
          id: project?.slug || project?.id || `project-${index}`,
          title,
          slug: project?.slug || `project-${index}`,
          image,
          description,
          developerName,
          developerSlug: project?.developerSlug || "",
          category: project?.category || "apartments",
          href: project?.href || "/properties",
          location,
          devStatus: project?.status || project?.devStatus || "Off-plan",
          status: project?.status || project?.devStatus || "Off-plan",
        };
      })
      .filter((slide) => slide.image)
      .slice(0, MAX_SLIDES);

    // If CMS slides exist but are fewer than MAX_SLIDES, pad with unique project fallbacks
    if (cmsDrivenSlides.length > 0) {
      if (cmsDrivenSlides.length >= MAX_SLIDES) return cmsDrivenSlides;
      const usedSlugs = new Set(cmsDrivenSlides.map((s) => s.slug));
      const padding = fallbackSlides
        .filter((s) => !usedSlugs.has(s.slug))
        .slice(0, MAX_SLIDES - cmsDrivenSlides.length);
      return [...cmsDrivenSlides, ...padding];
    }

    return fallbackSlides;
  }, [cmsSlides, locale, allProjects]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  const currentIndexRef = useRef(0);
  const nextIndexRef = useRef(null);
  const isFadingRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const loadedImagesRef = useRef(new Set());
  const rotateTimerRef = useRef(null);
  const fadeTimerRef = useRef(null);

  useEffect(() => { currentIndexRef.current = currentIndex; }, [currentIndex]);
  useEffect(() => { isFadingRef.current = isFading; }, [isFading]);
  useEffect(() => { nextIndexRef.current = nextIndex; }, [nextIndex]);

  const clearTimers = useCallback(() => {
    if (rotateTimerRef.current) clearTimeout(rotateTimerRef.current);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    rotateTimerRef.current = null;
    fadeTimerRef.current = null;
  }, []);

  const preloadImage = useCallback((index) => {
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
      img.onerror = () => { loadedImagesRef.current.add(imgUrl); };
    } catch { loadedImagesRef.current.add(imgUrl); }
  }, [projects, isClient]);

  useEffect(() => {
    if (!isClient || !projects.length) return;
    projects.slice(0, 6).forEach((_, index) => preloadImage(index));
  }, [projects, isClient, preloadImage]);

  const startFadeTransition = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsFading(true);
    fadeTimerRef.current = setTimeout(() => {
      const ni = nextIndexRef.current;
      if (ni !== null) { setCurrentIndex(ni); currentIndexRef.current = ni; }
      setNextIndex(null);
      nextIndexRef.current = null;
      setIsFading(false);
      isFadingRef.current = false;
      isTransitioningRef.current = false;
    }, FADE_MS);
  }, []);

  const handleNextImageReady = useCallback((index, imgUrl) => {
    if (index !== nextIndexRef.current) return;
    if (imgUrl) loadedImagesRef.current.add(imgUrl);
    if (!isTransitioningRef.current && !isFadingRef.current) startFadeTransition();
  }, [startFadeTransition]);

  const prepareNextSlide = useCallback(() => {
    if (projects.length < 2 || isTransitioningRef.current) return;
    const nextIdx = (currentIndexRef.current + 1) % projects.length;
    const nextImg = projects[nextIdx]?.image;
    const isAlreadyLoaded = nextImg && loadedImagesRef.current.has(nextImg);
    setNextIndex(nextIdx);
    nextIndexRef.current = nextIdx;
    preloadImage(nextIdx);
    if (isAlreadyLoaded) {
      requestAnimationFrame(() => startFadeTransition());
    } else {
      fadeTimerRef.current = setTimeout(() => {
        if (!isFadingRef.current && nextIndexRef.current === nextIdx) startFadeTransition();
      }, Math.max(FADE_MS, 500));
    }
  }, [projects, preloadImage, startFadeTransition]);

  const scheduleNextSlide = useCallback(() => {
    clearTimers();
    if (projects.length < 2) return;
    rotateTimerRef.current = setTimeout(() => { prepareNextSlide(); }, ROTATE_MS);
  }, [projects.length, clearTimers, prepareNextSlide]);

  useEffect(() => {
    if (!isClient || !projects.length) return;
    clearTimers();
    setCurrentIndex(0);
    setNextIndex(null);
    setIsFading(false);
    currentIndexRef.current = 0;
    nextIndexRef.current = null;
    isFadingRef.current = false;
    isTransitioningRef.current = false;
    preloadImage(0);
    if (projects.length > 1) preloadImage(1);
    scheduleNextSlide();
    return clearTimers;
  }, [projects, isClient, clearTimers, preloadImage, scheduleNextSlide]);

  useEffect(() => {
    if (!isFading && nextIndex === null && !isTransitioningRef.current) scheduleNextSlide();
  }, [isFading, nextIndex, scheduleNextSlide]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!filters.search.trim() && !filters.minPrice && !filters.maxPrice &&
        !filters.devStatus.length && !filters.unitTypes.length && !filters.bedrooms.length) return;
    const query = buildProjectsQuery({ ...filters, search: filters.search || searchQuery, page: 1 });
    router.push(`/search-results${query ? `?${query}` : ""}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const applyFilter = (filterType, value) => {
    setFilters((prev) => {
      const updated = { ...prev, page: 1 };
      if (filterType === "minPrice") updated.minPrice = value;
      else if (filterType === "maxPrice") updated.maxPrice = value;
      else if (filterType === "status") updated.devStatus = value ? [value] : [];
      return updated;
    });
  };

  // Don't render anything until client-side to prevent hydration issues
  if (!mounted || !isClient) {
    return (
      <section className={styles.hero} aria-label="Featured luxury properties">
        <div className={styles.placeholder} style={{ height: '100vh', background: '#f5f5f5' }} />
      </section>
    );
  }

  if (!projects.length) {
    return (
      <section className={styles.hero} aria-label="Featured luxury properties">
        <div
          className={styles.placeholder}
          style={{
            height: "100vh",
            background:
              "linear-gradient(135deg, rgba(12,12,12,1) 0%, rgba(27,27,27,1) 55%, rgba(42,42,42,1) 100%)",
          }}
        />
      </section>
    );
  }

  const currentProject = projects[currentIndex];
  const nextProject = nextIndex !== null ? projects[nextIndex] : null;
  // Sync text with image: when fading begins show the incoming slide's content immediately
  const displayProject = (isFading && nextIndex !== null && projects[nextIndex])
    ? projects[nextIndex]
    : currentProject;
  const displayLocation = String(displayProject?.location || "").trim();

  const mainTitle = t?.("homeSlider.mainTitle") || "Discover Extraordinary Living";
  const subtitle = t?.("homeSlider.subtitle") || "Curated Collection of the World's Finest Properties";
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
            if (project.image) loadedImagesRef.current.add(project.image);
            if (isNext) handleNextImageReady(indexForNext, project.image);
          }}
          onError={(e) => {
            if (project.image) loadedImagesRef.current.add(project.image);
            // Fallback if image fails to load
            e.currentTarget.style.background = "#f0f0f0";
          }}
        />
      </div>
    );
  };

  return (
    <section className={`${styles.hero} notranslate`} aria-label={mainTitle} translate="no">
      <h1 style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>
        {mainTitle} - Luxury Real Estate in Dubai & UAE
      </h1>

      <div className={styles.mediaWrapper}>
        <div className={`${styles.mediaLayer} ${styles.baseLayer}`}>
          {renderSlideImage(currentProject, { isNext: false })}
        </div>
        {nextProject && (
          <div
            className={`${styles.mediaLayer} ${styles.topLayer} ${isFading ? styles.layerVisible : ""}`}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            {renderSlideImage(nextProject, { isNext: true, indexForNext: nextIndex })}
          </div>
        )}
      </div>

      <div className={styles.overlay}>
        <div className={styles.contentContainer}>
          <div key={displayProject.id} className={`${styles.textBlock} notranslate`} translate="no">
            <p className={`${styles.kicker} notranslate`} translate="no">
              <span>{displayProject.developerName || "Featured Project"}</span>
            </p>
            <h2 className={`${styles.heading} notranslate`} translate="no">
              {displayProject.title}
              {displayLocation ? <span>{displayLocation}</span> : null}
            </h2>
            <p className={`${styles.subheading} notranslate`} translate="no">{displayProject.description || subtitle}</p>
          </div>

          <div className={styles.searchContainer}>
            <form onSubmit={handleSearchSubmit} className={styles.searchBar}>
              <div className={styles.searchInputWrapper}>
                <span className={styles.searchIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M17 17l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                <button type="button"
                  className={`${styles.filterButton} ${showFilters ? styles.filterButtonActive : ""}`}
                  onClick={() => setShowFilters(!showFilters)} aria-label="Toggle filters">
                  <span>⚲</span> {isAr ? "فلتر" : "Filters"}
                </button>
                <button type="submit" className={styles.searchButton}>{isAr ? "بحث" : "Search"}</button>
              </div>
            </form>
            {showFilters && (
              <div className={styles.expandedFilters}>
                <div className={styles.filterRow}>
                  <select className={styles.filterSelect} onChange={(e) => applyFilter("minPrice", e.target.value)} value={filters.minPrice}>
                    <option value="">{isAr ? "أقل سعر" : "Min Price"}</option>
                    <option value="500000">500k AED</option>
                    <option value="1000000">1M AED</option>
                    <option value="2000000">2M AED</option>
                    <option value="5000000">5M AED</option>
                    <option value="10000000">10M AED</option>
                  </select>
                  <select className={styles.filterSelect} onChange={(e) => applyFilter("maxPrice", e.target.value)} value={filters.maxPrice}>
                    <option value="">{isAr ? "أعلى سعر" : "Max Price"}</option>
                    <option value="1000000">1M AED</option>
                    <option value="2000000">2M AED</option>
                    <option value="5000000">5M AED</option>
                    <option value="10000000">10M AED</option>
                    <option value="20000000">20M AED</option>
                  </select>
                  <select className={styles.filterSelect} onChange={(e) => applyFilter("status", e.target.value)} value={filters.devStatus[0] || ""}>
                    <option value="">{isAr ? "جميع الحالات" : "All Status"}</option>
                    <option value="Off-plan">{isAr ? "قيد الإنشاء" : "Off Plan"}</option>
                    <option value="Secondary">{isAr ? "جاهز" : "Ready"}</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <Link href={displayProject.href} className={styles.cta} aria-label={`Discover ${displayProject.title}`}>
            {t?.("homeSlider.discoverButton") || "Discover Property"}
          </Link>
        </div>
      </div>
    </section>
  );
}
