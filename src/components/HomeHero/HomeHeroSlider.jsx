"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "@/styles/HomeHeroSlider.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { PROJECT_DATA_MAP } from "@/lib/project-data";

const CDN = "https://luxury-real-estate-media.b-cdn.net";
const LOGOS_CDN =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures";

const FALLBACK_HERO = `${CDN}/fallback-hero.jpg`;

/* ░░ PROJECT LOGOS MAP ░░ */
const PROJECT_LOGOS = {
  skyparks: `${LOGOS_CDN}/skyparks.svg`,
  "aqua-crest": `${LOGOS_CDN}/aqua-crest.svg`,
  aquamont: `${LOGOS_CDN}/aquamont.svg`,
  central: `${LOGOS_CDN}/sobha-central.svg`,
  hartland: `${LOGOS_CDN}/sobha-hartland-2.svg`,
  "siniya-island": `${LOGOS_CDN}/Siniya-island.svg`,
  "sobha-solis": `${LOGOS_CDN}/sobha-solis.svg`,
  "sobha-one": `${LOGOS_CDN}/sobha-one.svg`,
  orbis: `${LOGOS_CDN}/sobha-orbis.svg`,
  "sobha-elwood": `${LOGOS_CDN}/sobha-elwood.svg`,
  "the-element": `${LOGOS_CDN}/the-element.svg`,
  "seahaven-penthouse": `${LOGOS_CDN}/seahaven.svg`,
  massar: `${LOGOS_CDN}/arada.avif`,
  "riviera-retails": `${LOGOS_CDN}/azizi.jpg`,
  lumenaalta: `${LOGOS_CDN}/omniyat.png`,
  "tonino-lamborghini-residences": `${LOGOS_CDN}/tonino-lamborghini-residences-logo.jpg`,
  armani: `${LOGOS_CDN}/armani-arada.png`,
  "chelsea-residences": `${LOGOS_CDN}/bugatti-logo.png`,
  bugatti: `${LOGOS_CDN}/bugatti-logo.png`,
  "imperial-garden": `${LOGOS_CDN}/samana.png`,
  "boulevard-heights": `${LOGOS_CDN}/samana.png`,
  "the-view-island": `${LOGOS_CDN}/ajmal-makan.png`,
  milan: `${LOGOS_CDN}/azizi.jpg`,
  "eltiera-views": `${LOGOS_CDN}/ellington.png`,
  "coventry-curve-2": `${LOGOS_CDN}/gfs.png`,
  wynwood: `${LOGOS_CDN}/imtiaz.png`,
  "safa-gate": `${LOGOS_CDN}/bugatti-logo.png`,
  lapis: `${LOGOS_CDN}/lazord-logo.webp`,
  "hilton-residences": `${LOGOS_CDN}/prestige-one.png`,
  "reportage-hills": `${LOGOS_CDN}/reportage.png`,
  "terra-golf-phase-2": `${LOGOS_CDN}/taraf.webp`,
  orchid: `${LOGOS_CDN}/tiger.png`,
  "damac-islands-2": `${LOGOS_CDN}/bugatti-logo.png`,
  aquarise: `${LOGOS_CDN}/binghatti.avif`,
  kanyon: `${LOGOS_CDN}/beyond.webp`,
  "31-above": `${LOGOS_CDN}/beyond.webp`,
  "butterfly-towers": `${LOGOS_CDN}/evolutions.jpg`,
  "danube-aspirz": `${LOGOS_CDN}/Danube_Properties.png`,
  "danube-shahrukhz": `${LOGOS_CDN}/Danube_Properties.png`,
};

/* ===================== COMPACT NUMBER / PRICE ===================== */

/**
 * Parses numbers from strings like:
 * "AED 23,500,000" => 23500000
 * "23M" / "2.4m" => 23000000 / 2400000
 * "515K" => 515000
 * "Price on request" => null
 */
function parseMoneyToNumber(input) {
  if (input === null || input === undefined || input === "") return null;

  if (typeof input === "number" && Number.isFinite(input)) {
    return input > 0 ? input : null;
  }

  const s = String(input).trim();
  if (!s) return null;

  const lower = s.toLowerCase();
  if (
    lower.includes("request") ||
    lower.includes("on request") ||
    lower.includes("price on") ||
    lower.includes("السعر") ||
    lower.includes("عند الطلب")
  ) {
    return null;
  }

  // Remove currency words and keep text for suffix detection
  const cleaned = s
    .replace(/aed/gi, "")
    .replace(/د\.?\s*إ/gi, "")
    .replace(/درهم/gi, "")
    .replace(/dirham/gi, "")
    .replace(/,/g, "")
    .trim();

  // Capture first numeric chunk + optional suffix
  // examples: "2.4M", "2400000", "515K", "1.2 m"
  const m = cleaned.match(/(\d+(?:\.\d+)?)(?:\s*)([mkb])?/i);
  if (!m) return null;

  const n = parseFloat(m[1]);
  if (!Number.isFinite(n)) return null;

  const suffix = (m[2] || "").toLowerCase();
  if (suffix === "k") return n * 1_000;
  if (suffix === "m") return n * 1_000_000;
  if (suffix === "b") return n * 1_000_000_000;

  // if no suffix, assume it’s already the full number
  return n;
}

/**
 * Compact: 23500000 => "23.5m", 23000000 => "23m", 515000 => "515k"
 * (lowercase suffix as you requested)
 */
function formatCompactNumber(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return null;

  const abs = Math.abs(num);

  const roundSmart = (value, decimals) => {
    const p = 10 ** decimals;
    return Math.round(value * p) / p;
  };

  // Billions (optional)
  if (abs >= 1_000_000_000) {
    const v = abs / 1_000_000_000;
    const pretty = v < 10 ? roundSmart(v, 1) : Math.round(v);
    return `${pretty}B`;
  }

  // Millions
  if (abs >= 1_000_000) {
    const v = abs / 1_000_000;
    const pretty = v < 10 ? roundSmart(v, 1) : Math.round(v);
    return `${pretty}M`;
  }

  // Thousands
  if (abs >= 1_000) {
    const v = abs / 1_000;
    // keep 1 decimal only for small thousands (e.g. 2.4k), otherwise integer (e.g. 515k)
    const pretty = v < 10 ? roundSmart(v, 1) : Math.round(v);
    return `${pretty}K`;
  }

  // under 1k keep as integer
  return `${Math.round(abs)}`;
}

/**
 * Final UI text:
 * EN: "AED 23m"
 * AR: "د.إ 23m"
 */
function formatPriceCompactAED(rawPrice, locale) {
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");
  const value = parseMoneyToNumber(rawPrice);

  if (value === null) return isAr ? "السعر عند الطلب" : "Price on request";

  const compact = formatCompactNumber(value);
  if (!compact) return isAr ? "السعر عند الطلب" : "Price on request";

  return isAr ? `د.إ ${compact}` : `AED ${compact}`;
}

/* ===================== MEDIA HELPERS ===================== */

function isVideoUrl(url) {
  if (!url || typeof url !== "string") return false;
  const clean = url.split("?")[0].toLowerCase();
  return [".mp4", ".webm", ".mov", ".m4v", ".ogg"].some((ext) =>
    clean.endsWith(ext)
  );
}

function getThumbImage(url) {
  if (!url) return FALLBACK_HERO;
  return url.replace(/\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i, ".jpg$2");
}

/* ===================== PROJECT HELPERS ===================== */

function getProjectHeroImage(projectData, locale = "en") {
  if (!projectData) return FALLBACK_HERO;
  const data = projectData?.[locale] || projectData?.en;
  return (
    data?.hero?.backgroundUrl || data?.gallery?.slides?.[0] || FALLBACK_HERO
  );
}

function getProjectAmenities(projectData, locale = "en") {
  const data = projectData?.[locale] || projectData?.en;
  const amenities = data?.amenities?.amenities || [];
  const topAmenities = amenities.slice(0, 3).map((a) => a.label);

  if (topAmenities.length) return topAmenities;

  const projectType = data?.project?.type || "";
  if (projectType.includes("Villa") || projectType.includes("Townhouse")) {
    return ["Private Garden", "Swimming Pool", "Premium Security"];
  }
  if (projectType.includes("Apartment") || projectType.includes("Residence")) {
    return ["Infinity Pool", "Sky Deck", "24/7 Security"];
  }
  if (projectType.includes("Commercial") || projectType.includes("Retail")) {
    return ["Prime Location", "Modern Design", "Parking Facility"];
  }
  return ["Premium Amenities", "Prime Location", "Luxury Finishes"];
}

function getProjectCategory(projectData, locale = "en") {
  const data = projectData?.[locale] || projectData?.en;
  return data?.project?.type || "Luxury Property";
}

function getProjectCompletionDate(projectData, locale = "en") {
  const data = projectData?.[locale] || projectData?.en;
  const raw = data?.project?.completionDate || "Coming Soon";
  // prevent ugly "2,028" if it ever happens
  return String(raw).replace(/,/g, "");
}

function getProjectStartingPrice(projectData, locale = "en") {
  const data = projectData?.[locale] || projectData?.en;
  return data?.project?.startingPrice || "Price on request";
}

function getProjectStatus(projectData, locale = "en") {
  const data = projectData?.[locale] || projectData?.en;
  return data?.project?.status || "Available";
}

function getBrochureUrl(projectData, locale = "en") {
  const data = projectData?.[locale] || projectData?.en;
  const brochures = data?.intro?.brochures || [];
  if (brochures.length > 0) return brochures[0]?.url || "#";
  if (data?.floorPlans?.brochureHref) return data.floorPlans.brochureHref;
  return "#";
}

function deterministicShuffle(arr) {
  const copy = [...(arr || [])];
  copy.sort((a, b) => {
    const hashA = a.id.split("").reduce((h, c) => h + c.charCodeAt(0), 0);
    const hashB = b.id.split("").reduce((h, c) => h + c.charCodeAt(0), 0);
    return hashA - hashB;
  });
  return copy;
}

function IconWrap({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function getAmenityIcon(label = "") {
  const t = label.toLowerCase();

  if (t.includes("pool") || t.includes("infinity") || t.includes("lagoon")) {
    return (
      <IconWrap>
        <path d="M3 16c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
        <path d="M3 20c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
      </IconWrap>
    );
  }

  if (
    t.includes("gym") ||
    t.includes("fitness") ||
    t.includes("yoga") ||
    t.includes("meditation") ||
    t.includes("calisthenics")
  ) {
    return (
      <IconWrap>
        <path d="M7 10h10" />
        <path d="M5 9v6" />
        <path d="M19 9v6" />
        <path d="M8 8v8" />
        <path d="M16 8v8" />
      </IconWrap>
    );
  }

  if (
    t.includes("beach") ||
    t.includes("island") ||
    t.includes("waterfront") ||
    t.includes("marina") ||
    t.includes("yacht")
  ) {
    return (
      <IconWrap>
        <path d="M3 18c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" />
        <path d="M7 16c1-4 3-6 5-6s4 2 5 6" />
      </IconWrap>
    );
  }

  if (t.includes("view") || t.includes("skyline") || t.includes("burj")) {
    return (
      <IconWrap>
        <path d="M3 21h18" />
        <path d="M6 21V10" />
        <path d="M10 21V6" />
        <path d="M14 21V12" />
        <path d="M18 21V8" />
      </IconWrap>
    );
  }

  if (
    t.includes("garden") ||
    t.includes("green") ||
    t.includes("forest") ||
    t.includes("park")
  ) {
    return (
      <IconWrap>
        <path d="M12 21v-7" />
        <path d="M7 14c2-5 4-8 5-8s3 3 5 8" />
        <path d="M6 21h12" />
      </IconWrap>
    );
  }

  if (t.includes("children") || t.includes("kids") || t.includes("family")) {
    return (
      <IconWrap>
        <path d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M16 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M4 21a4 4 0 0 1 8 0" />
        <path d="M12 21a4 4 0 0 1 8 0" />
      </IconWrap>
    );
  }

  if (t.includes("school") || t.includes("education")) {
    return (
      <IconWrap>
        <path d="M4 7l8-3 8 3-8 3-8-3Z" />
        <path d="M12 10v10" />
        <path d="M6 21h12" />
      </IconWrap>
    );
  }

  return (
    <IconWrap>
      <path d="M20 7l-10 10-5-5" />
    </IconWrap>
  );
}

function buildSlides(locale) {
  const slides = [];

  Object.entries(PROJECT_DATA_MAP || {}).forEach(
    ([projectKey, projectData]) => {
      const data = projectData?.[locale] || projectData?.en;
      if (!data?.project?.name || !data?.project?.developer) return;

      let category = "apartments";
      let developer = "sobha";

      if (
        projectKey.includes("hartland") ||
        projectKey.includes("massar") ||
        projectKey.includes("siniya-island") ||
        projectKey.includes("damac") ||
        projectKey.includes("elwood") ||
        projectKey.includes("terra-golf") ||
        projectKey.includes("reportage") ||
        projectKey.includes("the-view-island") ||
        projectKey.includes("villas")
      ) {
        category = "villas";
      } else if (
        projectKey.includes("riviera") ||
        projectKey.includes("lumena") ||
        projectKey.includes("31-above") ||
        projectKey.includes("commercial") ||
        projectKey.includes("retail")
      ) {
        category = "commercial-retail";
      } else if (
        projectKey.includes("penthouse") ||
        projectKey.includes("bugatti") ||
        projectKey.includes("the-s")
      ) {
        category = "penthouses";
      }

      if (projectKey.includes("nakheel")) developer = "nakheel";
      else if (projectKey.includes("arada")) developer = "arada";
      else if (projectKey.includes("azizi")) developer = "azizi";
      else if (projectKey.includes("omniyat")) developer = "omniyat";
      else if (projectKey.includes("damac")) developer = "damac";
      else if (projectKey.includes("gulf-land"))
        developer = "gulf-land-property";
      else if (projectKey.includes("binghatti")) developer = "binghatti";
      else if (projectKey.includes("samana")) developer = "samana";
      else if (projectKey.includes("ellington")) developer = "ellington";
      else if (projectKey.includes("gfs")) developer = "gfs";
      else if (projectKey.includes("imtiaz")) developer = "imtiaz";
      else if (projectKey.includes("lazord")) developer = "lazord";
      else if (projectKey.includes("prestige-one")) developer = "prestige-one";
      else if (projectKey.includes("reportage")) developer = "reportage";
      else if (projectKey.includes("taraf")) developer = "taraf";
      else if (projectKey.includes("tiger")) developer = "tiger";
      else if (projectKey.includes("beyond")) developer = "beyond";
      else if (projectKey.includes("danube")) developer = "danube";
      else if (projectKey.includes("evolutions")) developer = "evolutions";
      else if (projectKey.includes("ajmal-makan")) developer = "ajmal-makan";

      const href = `/properties/${category}/${developer}/${projectKey}`;
      const hero = getProjectHeroImage(projectData, locale);
      const isVideo = isVideoUrl(hero);

      const startingPriceRaw = getProjectStartingPrice(projectData, locale);
      const startingPriceCompact = formatPriceCompactAED(
        startingPriceRaw,
        locale
      );

      slides.push({
        id: projectKey,
        category: getProjectCategory(projectData, locale),
        developer: data.project.developer,
        name: data.project.name,
        location: data.project.location || "Dubai, UAE",
        href,
        mediaUrl: hero,
        isVideo,
        amenities: getProjectAmenities(projectData, locale),
        extraData: {
          startingPriceRaw,
          startingPriceCompact,
          completionDate: getProjectCompletionDate(projectData, locale),
          status: getProjectStatus(projectData, locale),
          brochureUrl: getBrochureUrl(projectData, locale),
        },
      });
    }
  );

  return deterministicShuffle(slides);
}

/* ===================== COMPONENT ===================== */

export default function HomeHeroSlider(props) {
  const langCtx = useLanguage();
  const t = props?.t || langCtx?.t;
  const locale = props?.locale || langCtx?.locale || "en";
  const isRTL = locale === "ar" || String(locale || "").startsWith("ar");

  const slides = useMemo(() => buildSlides(locale), [locale]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setActiveIndex(0);
  }, [locale]);

  const handleSlideChange = (newIndex) => {
    if (!slides.length || isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 900);
  };

  const goPrev = () =>
    handleSlideChange((activeIndex - 1 + slides.length) % slides.length);
  const goNext = () => handleSlideChange((activeIndex + 1) % slides.length);

  useEffect(() => {
    if (!mounted || !slides.length || isAnimating) return;
    const timer = setInterval(() => {
      handleSlideChange((activeIndex + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [mounted, slides.length, activeIndex, isAnimating]);

  if (!mounted || !slides.length) {
    return (
      <div className={styles.heroSection}>
        <div className={styles.loadingPlaceholder}>
          Loading luxury properties...
        </div>
      </div>
    );
  }

  const activeSlide = slides[activeIndex];
  const projectLogoSrc = PROJECT_LOGOS[activeSlide.id] || null;
  const sliderOffset = (isRTL ? 1 : -1) * activeIndex * 100;

  return (
    <section
      className={`${styles.heroSection} ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* HEADER */}
      <div className={styles.titleSection}>
        <h2 className={`${styles.heading2} ${styles.linesOnSides}`}>
          {t?.("homeSlider.mainTitle") ||
            "EXPLORE OUR LUXURY PROPERTIES IN THE UAE"}
        </h2>
      </div>

      {/* SLIDER */}
      <div className={styles.sliderWrapper}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(${sliderOffset}%)` }}
        >
          {slides.map((slide) => {
            const mediaUrl = slide.mediaUrl || FALLBACK_HERO;

            return (
              <div className={styles.slide} key={slide.id}>
                {slide.isVideo ? (
                  <video
                    src={mediaUrl}
                    className={styles.backgroundVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={getThumbImage(mediaUrl)}
                  />
                ) : (
                  <img
                    src={mediaUrl}
                    alt={slide.name}
                    className={styles.backgroundImage}
                    loading={slide.id === activeSlide.id ? "eager" : "lazy"}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_HERO;
                    }}
                  />
                )}

                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <div className={styles.overlayBadge}>
                      <span className={styles.badgeText}>
                        {slide.extraData?.status || "Available"}
                      </span>
                    </div>

                    <h3 className={styles.overlayTitle}>{slide.name}</h3>

                    {/* ✅ COMPACT PRICE ALWAYS */}
                    <div className={styles.overlayPrice}>
                      {slide.extraData?.startingPriceCompact ||
                        (isRTL ? "السعر عند الطلب" : "Price on request")}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ARROWS */}
        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={goPrev}
          aria-label={
            t?.("homeSlider.ariaLabels.previousSlide") || "Previous slide"
          }
          disabled={isAnimating}
        >
          <span className={styles.arrowIcon} />
        </button>

        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={goNext}
          aria-label={t?.("homeSlider.ariaLabels.nextSlide") || "Next slide"}
          disabled={isAnimating}
        >
          <span className={styles.arrowIcon} />
        </button>
      </div>

      {/* BOTTOM STRIP */}
      <div className={styles.bottomStrip}>
        <div className={styles.bottomInner}>
          <div className={styles.topRow}>
            {/* LEFT */}
            <div className={styles.projectInfoBlock}>
              <div className={styles.logoTitleRow}>
                {projectLogoSrc ? (
                  <div className={styles.projectLogoContainer}>
                    <img
                      src={projectLogoSrc}
                      alt={activeSlide.name}
                      className={styles.projectLogo}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ) : (
                  <h3 className={styles.projectNameFallback}>
                    {activeSlide.name}
                  </h3>
                )}

                <div className={styles.propertyTypeBadge}>
                  <span className={styles.badgeText}>
                    {activeSlide.category}
                  </span>
                </div>
              </div>

              <div className={styles.developerLocationRow}>
                <span className={styles.developerName}>
                  {activeSlide.developer}
                </span>
                <span className={styles.locationBold}>
                  {activeSlide.location}
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className={styles.rightBlock}>
              <div className={styles.amenitiesTags}>
                {activeSlide.amenities?.map((amenity, index) => (
                  <div
                    key={`${amenity}-${index}`}
                    className={styles.amenityTag}
                  >
                    <span className={styles.amenityTagIcon}>
                      {getAmenityIcon(amenity)}
                    </span>
                    <span className={styles.amenityTagText}>{amenity}</span>
                  </div>
                ))}
              </div>

              <div className={styles.ctaButtons}>
                <Link
                  href={activeSlide.href || "#"}
                  className={styles.exploreButton}
                >
                  <span className={styles.buttonIcon}>🏙️</span>
                  {t?.("homeSlider.exploreButton") || "EXPLORE PROPERTY"}
                </Link>

                {activeSlide.extraData?.brochureUrl &&
                activeSlide.extraData.brochureUrl !== "#" ? (
                  <Link
                    href={activeSlide.extraData.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.brochureButton}
                  >
                    <span className={styles.buttonIcon}>📋</span>
                    <span>
                      {isRTL ? "تحميل البروشور" : "Download Brochure"}
                    </span>
                  </Link>
                ) : (
                  <Link href="/contact" className={styles.brochureButton}>
                    <span className={styles.buttonIcon}>📋</span>
                    <span>{isRTL ? "طلب بروشور" : "Request Brochure"}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className={styles.bottomRow}>
            <div className={styles.extraInfoItem}>
              <span className={styles.extraInfoLabel}>
                {isRTL ? "التسليم" : "Completion"}
              </span>
              <span className={styles.extraInfoValue}>
                {activeSlide.extraData?.completionDate ||
                  (isRTL ? "قريباً" : "TBA")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
