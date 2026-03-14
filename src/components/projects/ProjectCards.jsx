"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/projects/ProjectCards.module.css";

// ✅ IMPORTANT: this is your "new.js" mapping file
import {
  PROJECT_NAME_KEY_MAP,
  DEVELOPER_KEY_MAP,
  CATEGORY_KEY_MAP,
} from "@/lib/i18n/projectMaps";

/* ===================== MEDIA HELPER ===================== */

const isVideoUrl = (url) => {
  if (!url || typeof url !== "string") return false;
  const clean = url.split("?")[0].toLowerCase();
  return (
    clean.endsWith(".mp4") ||
    clean.endsWith(".webm") ||
    clean.endsWith(".mov") ||
    clean.endsWith(".m4v") ||
    clean.endsWith(".ogg")
  );
};

const getProjectCardMedia = (data) => {
  if (!data) return { type: "none", url: null, poster: null };

  const raw =
    data?.data ||
    data?.projectData ||
    data?.payload ||
    data?.content ||
    data?.project ||
    data;

  const node = raw?.hero || raw?.gallery ? raw : raw?.en || raw?.ar || {};

  const hero = node?.hero || {};
  const gallery = node?.gallery || {};

  const bg =
    hero?.backgroundUrl ||
    hero?.background ||
    raw?.backgroundUrl ||
    raw?.background ||
    raw?.video ||
    raw?.heroVideo ||
    "";

  const poster =
    hero?.posterUrl ||
    hero?.poster ||
    raw?.posterUrl ||
    raw?.poster ||
    hero?.image ||
    raw?.image ||
    gallery?.slides?.[0] ||
    null;

  if (bg && isVideoUrl(bg)) return { type: "video", url: bg, poster };
  if (bg && !isVideoUrl(bg)) return { type: "image", url: bg, poster: null };

  const fallbackImage =
    gallery?.slides?.[0] || hero?.image || raw?.image || null;
  if (fallbackImage) return { type: "image", url: fallbackImage, poster: null };

  return { type: "none", url: null, poster: null };
};

/* ===================== LOCAL FALLBACK DICTIONARY ===================== */
/** Used ONLY if the JSON translation key is missing */
const DYN = {
  status: {
    Secondary: { en: "Secondary", ar: "ثانوي" },
    "Off-plan": { en: "Off-plan", ar: "قيد الإنشاء" },
    Available: { en: "Available", ar: "متاح" },
    Completed: { en: "Completed", ar: "مكتمل" },
    Presale: { en: "Presale", ar: "مرحلة ما قبل البيع" },
    "Under Construction": { en: "Under Construction", ar: "قيد الإنشاء" },
    Announced: { en: "Announced", ar: "مُعلن" },
    "On Sale": { en: "On Sale", ar: "متاح للبيع" },
    "Off Plan": { en: "Off Plan", ar: "قيد الإنشاء" },
    Ready: { en: "Ready", ar: "جاهز" },
    "Ready & Off-Plan": { en: "Ready & Off-Plan", ar: "جاهز وقيد الإنشاء" },
  },

  unitTypes: {
    Apartments: { en: "Apartments", ar: "شقق" },
    Apartment: { en: "Apartments", ar: "شقق" },
    Villas: { en: "Villas", ar: "فلل" },
    Villa: { en: "Villas", ar: "فلل" },
    Penthouse: { en: "Penthouse", ar: "بنتهاوس" },
    Penthouses: { en: "Penthouses", ar: "بنتهاوس" },
    Commercial: { en: "Commercial", ar: "تجاري" },
    "Mixed Use": { en: "Mixed Use", ar: "متعدد الاستخدامات" },
    "Luxury Villas": { en: "Luxury Villas", ar: "فلل فاخرة" },
    "Townhouses & Villas": { en: "Townhouses & Villas", ar: "تاون هاوس وفلل" },
    "Branded Residences": {
      en: "Branded Residences",
      ar: "مساكن بعلامة تجارية",
    },
    "Retail Spaces": { en: "Retail Spaces", ar: "مساحات تجارية" },
    "Office Spaces": { en: "Office Spaces", ar: "مكاتب" },
  },

  bedsOverrides: {
    "Office Spaces": { en: "Office Spaces", ar: "مكاتب" },
    "Retail Units": { en: "Retail Units", ar: "محلات تجارية" },
    Commercial: { en: "Commercial", ar: "تجاري" },
    "Apartments + Offices": { en: "Apartments + Offices", ar: "شقق + مكاتب" },
    "Branded Residences": {
      en: "Branded Residences",
      ar: "مساكن بعلامة تجارية",
    },
  },

  regionsBySlug: {
    "business-bay": { en: "Business Bay", ar: "الخليج التجاري" },
    "sheikh-zayed-road": { en: "Sheikh Zayed Road", ar: "شارع الشيخ زايد" },
    "motor-city": { en: "Motor City", ar: "مدينة دبي للسيارات" },
    "mohammed-bin-rashid-city": {
      en: "Mohammed Bin Rashid City",
      ar: "مدينة محمد بن راشد",
    },
    "dubai-maritime-city": {
      en: "Dubai Maritime City",
      ar: "دبي مارايتيم سيتي",
    },
    "nad-al-sheba": { en: "Nad Al Sheba", ar: "ند الشبا" },
    arjan: { en: "Arjan", ar: "أرجان" },
    dubailand: { en: "Dubailand", ar: "دبي لاند" },
    sharjah: { en: "Sharjah", ar: "الشارقة" },
    ajman: { en: "Ajman", ar: "عجمان" },
    "umm-al-quwain": { en: "Umm Al Quwain", ar: "أم القيوين" },
    "dubai-harbour": { en: "Dubai Harbour", ar: "دبي هاربور" },
    "palm-jumeirah": { en: "Palm Jumeirah", ar: "نخلة جميرا" },
    "jumeirah-islands": { en: "Jumeirah Islands", ar: "جزر الجميرا" },
    "jumeirah-golf-estates": {
      en: "Jumeirah Golf Estates",
      ar: "عقارات جميرا للجولف",
    },
    "dubai-industrial-city": {
      en: "Dubai Industrial City",
      ar: "مدينة دبي الصناعية",
    },
    "al-aaliah": { en: "Al Aaliah", ar: "العالية" },
    "al-jaddaf": { en: "Al Jaddaf", ar: "الجداف" },
    "dubai-healthcare-city": {
      en: "Dubai Healthcare City",
      ar: "مدينة دبي الطبية",
    },
    "creek-harbour": { en: "Creek Harbour", ar: "خور دبي" },
    "dubai-south": { en: "Dubai South", ar: "دبي الجنوبية" },
    "damac-hills": { en: "Damac Hills", ar: "داماك هيلز" },
    "jebel-ali": { en: "Jebel Ali", ar: "جبل علي" },
    "masaar-tilal-city": { en: "Masaar Tilal City", ar: "مسار تلال سيتي" },
    "al-aaliah-ajman": { en: "Al Aaliah, Ajman", ar: "العالية، عجمان" },
  },

  city: { en: "Dubai", ar: "دبي" },
  country: { en: "UAE", ar: "الإمارات" },
};

function dyn(locale, group, key, fallback) {
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");
  const lang = isAr ? "ar" : "en";
  const v = DYN?.[group]?.[key]?.[lang];
  return v || fallback || key || "";
}

/* ===================== COMPONENT ===================== */

const ProjectCards = ({ projects, onResetFilters }) => {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");

  // ✅ safe translation wrapper
  const safeT = (key, values, fallback) => {
    try {
      const v = t?.(key, values);
      if (v === undefined || v === null || v === "" || v === key)
        return fallback;
      return v;
    } catch {
      return fallback;
    }
  };

  // ✅ normal formatter (keeps commas for price/other UI where you WANT them)
  const fmtNum = (n, options) => {
    try {
      return new Intl.NumberFormat(isAr ? "ar-AE" : "en-US", options).format(n);
    } catch {
      return String(n);
    }
  };

  // ✅ NO grouping (NO commas) for years + sqft values
  const fmtNoGroupInt = (n) => {
    const num = Number(n);
    if (!Number.isFinite(num)) return null;
    try {
      return new Intl.NumberFormat(isAr ? "ar-AE" : "en-US", {
        useGrouping: false,
        maximumFractionDigits: 0,
      }).format(num);
    } catch {
      return String(Math.trunc(num));
    }
  };

  const normalizeYear = (v) => {
    if (v === null || v === undefined) return null;
    if (typeof v === "number" && Number.isFinite(v))
      return String(Math.trunc(v));

    const s = String(v).trim();
    if (!s) return null;

    // remove commas + extract 4-digit year
    const m = s.replace(/,/g, "").match(/\b(20\d{2}|19\d{2})\b/);
    if (m) return m[1];

    // fallback: just remove commas
    return s.replace(/,/g, "");
  };

  const extractQuarter = (v) => {
    if (!v) return null;
    const s = String(v).toUpperCase();
    const m = s.match(/Q\s*([1-4])/);
    return m ? `Q${m[1]}` : null;
  };

  // parses strings like: "54 – 1,124 sqft" or "54-1124" or "419 – 1,256"
  const parseRangeNumbers = (raw) => {
    if (!raw) return { min: null, max: null };
    const s = String(raw).replace(/,/g, "");
    const nums = s.match(/\d+(\.\d+)?/g)?.map(Number) || [];
    if (!nums.length) return { min: null, max: null };
    return { min: nums[0] ?? null, max: nums[1] ?? null };
  };

  // --------- status ----------
  const getStatusText = (project) => {
    // ✅ Use status extracted from data.project.status
    return project?.status || project?.devStatus || "Available";
  };

  const getStatusLabel = (rawStatus) => {
    if (!rawStatus) rawStatus = "Available";

    const keyMap = {
      Secondary: "projects.status.secondary",
      Completed: "projects.status.completed",
      Presale: "projects.status.presale",
      "Under Construction": "projects.status.underConstruction",
      Announced: "projects.status.announced",
      "On Sale": "projects.status.onSale",
      "Off Plan": "projects.status.offPlan",
      "Off-Plan": "projects.status.offPlan",
      "Off-plan": "projects.status.offPlan",
      Ready: "projects.status.ready",
      "Ready & Off-Plan": "projects.status.readyAndOffPlan",
      Available: "projects.status.available",
    };

    const k = keyMap[rawStatus];
    const fromT = k ? safeT(k, undefined, "") : "";
    if (fromT) return fromT;

    return dyn(locale, "status", rawStatus, rawStatus);
  };

  const getStatusClass = (status) => {
    const map = {
      Secondary: styles.statusSecondary,
      Completed: styles.statusCompleted,
      Presale: styles.statusPresale,
      "Under Construction": styles.statusUnderConstruction,
      Announced: styles.statusAnnounced,
      "On Sale": styles.statusOnSale,
      "Off Plan": styles.statusOnSale,
      "Off-Plan": styles.statusOnSale,
      "Off-plan": styles.statusOnSale,
      Ready: styles.statusCompleted,
      "Ready & Off-Plan": styles.statusOnSale,
      Available: styles.statusOnSale,
    };
    return map[status] || styles.statusOnSale;
  };

  // --------- developer ----------
  const getDeveloperLabel = (project) => {
    const devSlug =
      project?.developerSlug ||
      project?.developer?.slug ||
      project?.developerKey ||
      "";
    if (devSlug && DEVELOPER_KEY_MAP?.[devSlug]) {
      const key = DEVELOPER_KEY_MAP[devSlug];
      const fromT = safeT(`developers.${key}`, undefined, "");
      if (fromT) return fromT;
    }

    const rawName =
      project?.developerName ||
      project?.developer ||
      project?.project?.developer ||
      "";
    if (rawName) {
      const tryDirect = safeT(`developers.${rawName}`, undefined, "");
      if (tryDirect) return tryDirect;
    }

    return rawName || "";
  };

  // --------- project name (FIXED using projectMaps.js) ----------
  const getProjectNameLabel = (project) => {
    const slug = project?.slug ? String(project.slug).trim() : "";
    if (slug && PROJECT_NAME_KEY_MAP?.[slug]) {
      const key = PROJECT_NAME_KEY_MAP[slug];
      const fromT = safeT(`projectNames.${key}`, undefined, "");
      if (fromT) return fromT;
    }

    if (isAr && project?.nameAr) return project.nameAr;
    if (!isAr && project?.nameEn) return project.nameEn;

    return project?.name || "";
  };

  // --------- unit type ----------
  const getUnitTypeLabel = (project) => {
    const raw =
      project?.unitType ||
      project?.type ||
      safeT("projects.cards.typeDefault", undefined, "Apartment");

    const keyMap = {
      Apartments: "categories.apartments",
      Apartment: "categories.apartments",
      Villas: "categories.villas",
      Villa: "categories.villas",
      Penthouse: "categories.penthouses",
      Penthouses: "categories.penthouses",
      Commercial: "categories.commercial",
      "Mixed Use": "categories.mixedUse",
      "Luxury Villas": "categories.villas",
      "Townhouses & Villas": "categories.villas",
      "Branded Residences": "categories.brandedResidences",
      "Retail Spaces": "categories.commercial",
      "Office Spaces": "categories.commercial",
    };

    const k = keyMap[raw];
    const fromT = k ? safeT(k, undefined, "") : "";
    if (fromT) return fromT;

    return dyn(locale, "unitTypes", raw, raw);
  };

  // --------- sqft (NO commas + reads full raw string if min/max missing) ----------
  const formatSqftRange = (min, max, rawFallback) => {
    let a = Number.isFinite(min) ? min : null;
    let b = Number.isFinite(max) ? max : null;

    if (a === null && b === null && rawFallback) {
      const parsed = parseRangeNumbers(rawFallback);
      a = Number.isFinite(parsed.min) ? parsed.min : null;
      b = Number.isFinite(parsed.max) ? parsed.max : null;
    }

    if (a === null && b === null) return null;

    const unit = safeT(
      "projects.cards.sqft",
      undefined,
      isAr ? "قدم²" : "sqft",
    );

    if (a !== null && b === null) return `${fmtNoGroupInt(a)} ${unit}`;
    if (a === null && b !== null) return `${fmtNoGroupInt(b)} ${unit}`;
    if (a === b) return `${fmtNoGroupInt(a)} ${unit}`;
    return `${fmtNoGroupInt(a)} – ${fmtNoGroupInt(b)} ${unit}`;
  };

  // --------- beds ----------
  const formatBeds = (minBeds, maxBeds, overrideText) => {
    if (overrideText && typeof overrideText === "string") {
      const s = overrideText.trim();
      if (s) {
        const translatedOverride = dyn(locale, "bedsOverrides", s, "");
        if (translatedOverride) return translatedOverride;
        return s;
      }
    }

    const a = Number.isFinite(minBeds) ? minBeds : null;
    const b = Number.isFinite(maxBeds) ? maxBeds : null;
    if (a === null || b === null) return null;

    const studio = isAr ? "استوديو" : "Studio";
    const bed = isAr ? "غرفة" : "Bed";
    const beds = isAr ? "غرف" : "Beds";

    if (a === 0 && b === 0) return studio;
    if (a === 0 && b > 0) return `${studio} – ${fmtNum(b)} ${beds}`;
    if (a === b) return `${fmtNum(a)} ${bed}`;
    return `${fmtNum(a)} – ${fmtNum(b)} ${beds}`;
  };

  // --------- location ----------
  const getLocationLabel = (project) => {
    const slug = project?.slug;
    const regionSlug = project?.regionSlug ? String(project.regionSlug) : "";

    // ✅ Use explicit location from project data if available
    if (project?.location) return project.location;

    if (regionSlug === "dubailand") {
      const sublocationMap = {
        orbis: { en: "Motor City", ar: "مدينة دبي للسيارات" },
        "sobha-solis": { en: "Motor City", ar: "مدينة دبي للسيارات" },
        "imperial-garden": { en: "Arjan", ar: "أرجان" },
        "boulevard-heights": {
          en: "Dubai Land Residence Complex",
          ar: "مجمع دبي لاند السكني",
        },
        "butterfly-towers": { en: "Arjan", ar: "أرجان" },
        milan: { en: "City of Arabia", ar: "مدينة العرب" },
        lapis: { en: "Majan", ar: "ماجان" },
        "danube-aspirz": { en: "Dubai Sports City", ar: "مدينة دبي الرياضية" },
        "sobha-elwood": { en: "Dubailand", ar: "دبي لاند" },
        "damac-islands-2": { en: "Dubailand", ar: "دبي لاند" },
        "reportage-hills": { en: "Dubailand", ar: "دبي لاند" },
      };

      if (slug && sublocationMap[slug]) {
        const subLocation = sublocationMap[slug];
        const subLocationName = isAr ? subLocation.ar : subLocation.en;
        const region = dyn(locale, "regionsBySlug", regionSlug, "");
        const city = DYN.city[isAr ? "ar" : "en"];
        return `${subLocationName}, ${region}, ${city}`;
      }
    }

    const region = dyn(locale, "regionsBySlug", regionSlug, "");
    const city = DYN.city[isAr ? "ar" : "en"];
    const country = DYN.country[isAr ? "ar" : "en"];

    const outside = new Set([
      "sharjah",
      "masaar-tilal-city",
      "umm-al-quwain",
      "al-aaliah-ajman",
      "al-aaliah",
    ]);

    if (region && outside.has(regionSlug)) return `${region}, ${country}`;
    if (region) return `${region}, ${city}, ${country}`;

    return safeT("projects.cards.defaultLocation", undefined, city);
  };

  // --------- price ----------
  const formatPrice = (price) => {
    const fallback = safeT(
      "projects.cards.priceOnRequest",
      undefined,
      isAr ? "السعر عند الطلب" : "Price on request",
    );

    if (price === null || price === undefined || price === "") return fallback;

    const rawPrice = String(price).trim().toLowerCase();
    const numericPart = rawPrice.replace(/[^\d.]/g, "");
    let absPrice = Number(numericPart);
    const compact = rawPrice.replace(/\s+/g, "");

    if (Number.isFinite(absPrice)) {
      if (/million/.test(rawPrice) || /\d(?:\.\d+)?m\b/.test(compact)) {
        absPrice *= 1_000_000;
      } else if (/thousand/.test(rawPrice) || /\d(?:\.\d+)?k\b/.test(compact)) {
        absPrice *= 1_000;
      }
    }

    if (!Number.isFinite(absPrice) || absPrice < 10_000) return fallback;

    if (absPrice < 1_000_000) {
      const value = Math.round(absPrice / 1_000);
      return isAr ? `${fmtNum(value)} ألف` : `${fmtNum(value)}K`;
    }

    const value = absPrice / 1_000_000;
    const pretty = fmtNum(value, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    return isAr ? `${pretty} مليون` : `${pretty}M`;
  };

  const parsePositivePrice = (value) => {
    if (value === null || value === undefined) return null;

    const raw = String(value).trim().toLowerCase();
    if (!raw) return null;

    const numericPart = raw.replace(/[^\d.]/g, "");
    let parsed = Number(numericPart);
    const compact = raw.replace(/\s+/g, "");

    if (!Number.isFinite(parsed) || parsed <= 0) return null;

    if (/million/.test(raw) || /\d(?:\.\d+)?m\b/.test(compact)) {
      parsed *= 1_000_000;
    } else if (/thousand/.test(raw) || /\d(?:\.\d+)?k\b/.test(compact)) {
      parsed *= 1_000;
    }

    return Number.isFinite(parsed) && parsed >= 10_000 ? parsed : null;
  };

  const getDisplayPrice = (project) => {
    const candidates = [
      project?.priceAED,
      project?.startingPriceAED,
      project?.startingPrice,
      project?.price,
      project?.project?.startingPrice,
      project?.project?.price,
    ];

    for (const candidate of candidates) {
      const parsed = parsePositivePrice(candidate);
      if (parsed !== null) return parsed;
    }

    return null;
  };

  // --------- completion (NO commas + supports Q format) ----------
  const formatCompletion = (project) => {
    const raw =
      project?.completionDate ||
      project?.completion ||
      project?.handover ||
      project?.completionYear ||
      project?.project?.completionDate ||
      project?.project?.completionYear;

    const quarterRaw =
      project?.completionQuarter ||
      project?.completionQ ||
      project?.handoverQuarter ||
      project?.handoverQ;

    if (raw === null || raw === undefined || String(raw).trim() === "") {
      return safeT(
        "projects.cards.completionTBA",
        undefined,
        isAr ? "قريباً" : "TBA",
      );
    }

    // e.g. raw = "Q4 2031"
    const qFromRaw = extractQuarter(raw);
    const yFromRaw = normalizeYear(raw);

    // if quarter is a separate field
    const qFromField = quarterRaw
      ? `Q${String(quarterRaw).replace(/[^\d]/g, "")}`
      : null;
    const yFromField = normalizeYear(project?.completionYear);

    const q = qFromRaw || qFromField;
    const y = yFromRaw || yFromField;

    if (q && y) return `${q} ${y}`;
    if (y) return y;

    return String(raw).replace(/,/g, "").trim();
  };

  // --------- URL ----------
  const getProjectUrl = (project) => {
    if (project?.href) {
      const href = String(project.href).trim();
      if (href && href !== "#" && href !== "/") return href;
    }

    const prefix = locale ? `/${locale}` : "";

    if (project?.slug && project?.category && project?.developerSlug) {
      const url = `${prefix}/properties/${project.category}/${project.developerSlug}/${project.slug}`;
      return url || "#";
    }

    if (project?.slug && project?.developer) {
      const devSlug = String(project.developer)
        .toLowerCase()
        .replace(/\s+/g, "-");
      const url = `${prefix}/properties/${devSlug}/${project.slug}`;
      return url || "#";
    }

    return "#";
  };

  // --------- Empty state ----------
  if (!projects || projects.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>
          {safeT(
            "projects.empty.title",
            undefined,
            isAr ? "لا توجد مشاريع" : "No Projects Found",
          )}
        </h3>
        <p>
          {safeT(
            "projects.empty.subtitle",
            undefined,
            isAr
              ? "جرّب تعديل الفلاتر لعرض نتائج أكثر"
              : "Try adjusting your filters to see more results",
          )}
        </p>
        <button className={styles.resetFilters} onClick={onResetFilters}>
          {safeT(
            "projects.empty.resetButton",
            undefined,
            isAr ? "إعادة ضبط الفلاتر" : "Reset All Filters",
          )}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.cardsGrid}>
      {projects.map((project, index) => {
        const projectUrl = getProjectUrl(project);
        const rawStatus = getStatusText(project);

        const statusLabel = getStatusLabel(rawStatus);
        const developerLabel = getDeveloperLabel(project);
        const projectNameLabel = getProjectNameLabel(project);

        const sqftLabel = formatSqftRange(
          project?.sizeSqftMin,
          project?.sizeSqftMax,
          project?.sizeSqft || project?.size || project?.project?.size,
        );

        const bedsLabel = formatBeds(
          project?.minBedrooms,
          project?.maxBedrooms,
          project?.bedrooms,
        );

        const locationLabel = getLocationLabel(project);
        const unitTypeLabel = getUnitTypeLabel(project);

        return (
          <ProjectCardLinkWrapper
            key={`${project?.slug || project?.id}-${index}`}
            href={projectUrl}
            className={styles.projectCard}
            ariaLabel={projectNameLabel || project?.name || "Project"}
          >
            <ProjectCardInner
              project={project}
              safeT={safeT}
              statusLabel={statusLabel}
              statusClass={`${styles.statusBadge} ${getStatusClass(rawStatus)}`}
              developerLabel={developerLabel}
              projectNameLabel={projectNameLabel}
              locationLabel={locationLabel}
              bedsLabel={bedsLabel}
              sqftLabel={sqftLabel}
              formatPrice={formatPrice}
              getDisplayPrice={getDisplayPrice}
              formatCompletion={formatCompletion}
              unitTypeLabel={unitTypeLabel}
              styles={styles}
              isAr={isAr}
            />
          </ProjectCardLinkWrapper>
        );
      })}
    </div>
  );
};

export default ProjectCards;

/* ----------------------------------------
   Whole card clickable wrapper - FIXED VERSION
---------------------------------------- */

function ProjectCardLinkWrapper({ href, className, ariaLabel, children }) {
  // Check if href is valid for clickability
  const isValidHref = React.useMemo(() => {
    if (!href) return false;
    const trimmed = String(href).trim();
    return trimmed && trimmed !== "#" && trimmed !== "/";
  }, [href]);

  if (!isValidHref) {
    // Non-clickable card - still use div for proper styling
    return (
      <div
        className={`${className} ${styles.nonClickableCard}`}
        aria-label={ariaLabel}
        role="article"
        tabIndex={-1}
      >
        {children}
      </div>
    );
  }

  // Clickable card - use Link component
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={className}
      role="article"
    >
      {children}
    </Link>
  );
}

function ProjectCardInner({
  project,
  safeT,
  statusLabel,
  statusClass,
  developerLabel,
  projectNameLabel,
  locationLabel,
  bedsLabel,
  sqftLabel,
  formatPrice,
  getDisplayPrice,
  formatCompletion,
  unitTypeLabel,
  styles,
  isAr,
}) {
  const [imgOk, setImgOk] = React.useState(true);
  const [videoOk, setVideoOk] = React.useState(true);

  const media = React.useMemo(() => getProjectCardMedia(project), [project]);
  const showVideo = media?.type === "video" && !!media?.url && videoOk;

  const fallbackImage =
    media?.poster ||
    (media?.type === "image" ? media?.url : null) ||
    project?.image ||
    null;

  return (
    <>
      <div className={styles.cardMedia}>
        {showVideo ? (
          <video
            src={media.url}
            poster={media.poster || undefined}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            className={styles.cardVideo}
            onError={() => setVideoOk(false)}
          />
        ) : fallbackImage && imgOk ? (
          <img
            src={fallbackImage}
            alt={projectNameLabel || project?.name || "Project"}
            className={styles.cardImage}
            onError={() => setImgOk(false)}
            loading="lazy"
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            {projectNameLabel ||
              safeT(
                "projects.cards.imageFallback",
                undefined,
                isAr ? "مشروع" : "Project",
              )}
          </div>
        )}

        <div className={statusClass}>{statusLabel}</div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div className={styles.developer}>{developerLabel}</div>
          <h3 className={styles.projectName}>{projectNameLabel}</h3>

          <div className={styles.location}>
            <span aria-hidden="true">📍</span>
            <span>{locationLabel}</span>
          </div>
        </div>

        <div className={styles.cardDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>
              {safeT(
                "projects.cards.priceFrom",
                undefined,
                isAr ? "السعر يبدأ من" : "Price From",
              )}
            </span>
            <span className={`${styles.detailValue} ${styles.price}`}>
              {formatPrice(getDisplayPrice(project))}
            </span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>
              {safeT(
                "projects.cards.completionLabel",
                undefined,
                isAr ? "التسليم" : "Completion",
              )}
            </span>
            <span className={styles.detailValue}>
              {formatCompletion(project)}
            </span>
          </div>

          {unitTypeLabel && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>
                {safeT(
                  "projects.cards.typeLabel",
                  undefined,
                  isAr ? "النوع" : "Type",
                )}
              </span>
              <span className={styles.detailValue}>{unitTypeLabel}</span>
            </div>
          )}

          {bedsLabel && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>
                {isAr ? "الغرف" : "Beds"}
              </span>
              <span className={styles.detailValue}>{bedsLabel}</span>
            </div>
          )}

          {sqftLabel && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>
                {safeT(
                  "projects.cards.sizeLabel",
                  undefined,
                  isAr ? "المساحة" : "Size",
                )}
              </span>
              <span className={styles.detailValue}>{sqftLabel}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
