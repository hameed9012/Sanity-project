"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/search/ProjectsSearchResults.module.css";

// ✅ IMPORTANT: Import the same mapping files as ProjectCards
import {
  PROJECT_NAME_KEY_MAP,
  DEVELOPER_KEY_MAP,
  CATEGORY_KEY_MAP,
} from "@/lib/i18n/projectMaps";

/* ===================== LOCAL FALLBACK DICTIONARY ===================== */
/** Used ONLY if the JSON translation key is missing */
const DYN = {
  status: {
    Available: { en: "Available", ar: "متاح" },
    Completed: { en: "Completed", ar: "مكتمل" },
    Presale: { en: "Presale", ar: "مرحلة ما قبل البيع" },
    "Under Construction": { en: "Under Construction", ar: "قيد الإنشاء" },
    Announced: { en: "Announced", ar: "مُعلن" },
    "On Sale": { en: "On Sale", ar: "متاح للبيع" },
    "Off Plan": { en: "Off Plan", ar: "قيد الإنشاء" },
    "Off-Plan": { en: "Off Plan", ar: "قيد الإنشاء" },
    Ready: { en: "Ready", ar: "جاهز" },
    "Ready & Off-Plan": { en: "Ready & Off-Plan", ar: "جاهز وقيد الإنشاء" },
  },

  unitTypes: {
    Apartments: { en: "Apartments", ar: "شقق" },
    Apartment: { en: "Apartments", ar: "شقق" },
    Villas: { en: "Villas", ar: "فلل" },
    Villa: { en: "Villas", ar: "فلل" },
    "Luxury Villas": { en: "Luxury Villas", ar: "فلل فاخرة" },
    Penthouse: { en: "Penthouse", ar: "بنتهاوس" },
    Penthouses: { en: "Penthouses", ar: "بنتهاوس" },
    Commercial: { en: "Commercial", ar: "تجاري" },
    "Mixed Use": { en: "Mixed Use", ar: "متعدد الاستخدامات" },
    "Office Spaces": { en: "Office Spaces", ar: "مكاتب" },
    "Villas & Townhouses": { en: "Villas & Townhouses", ar: "فلل وتاون هاوس" },
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

export default function ProjectResultCard({ project, view = "list" }) {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");

  // ✅ safe translation wrapper (SAME as ProjectCards)
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

  // ✅ normal formatter (keeps commas for price)
  const fmtNum = (n, options) => {
    try {
      return new Intl.NumberFormat(isAr ? "ar-AE" : "en-US", options).format(n);
    } catch {
      return String(n);
    }
  };

  // ✅ NO grouping (NO commas) for sqft values (SAME as ProjectCards)
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

  // --------- status ----------
  const getStatusText = () =>
    project?.devStatus ||
    project?.status ||
    project?.project?.status ||
    "Available";

  const getStatusLabel = (rawStatus) => {
    if (!rawStatus) rawStatus = "Available";

    const keyMap = {
      Completed: "projects.status.completed",
      Presale: "projects.status.presale",
      "Under Construction": "projects.status.underConstruction",
      Announced: "projects.status.announced",
      "On Sale": "projects.status.onSale",
      "Off Plan": "projects.status.offPlan",
      "Off-Plan": "projects.status.offPlan",
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
      Completed: styles.statusCompleted,
      Presale: styles.statusPresale,
      "Under Construction": styles.statusUnderConstruction,
      Announced: styles.statusAnnounced,
      "On Sale": styles.statusOnSale,
      "Off Plan": styles.statusOnSale,
      "Off-Plan": styles.statusOnSale,
      Ready: styles.statusCompleted,
      "Ready & Off-Plan": styles.statusOnSale,
      Available: styles.statusOnSale,
    };
    return map[status] || styles.statusOnSale;
  };

  // --------- developer ----------
  const getDeveloperLabel = () => {
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

  // --------- project name ----------
  const getProjectNameLabel = () => {
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
  const getUnitTypeLabel = () => {
    const raw =
      project?.unitType ||
      project?.type ||
      safeT("projects.cards.typeDefault", undefined, "Apartment");

    const keyMap = {
      Apartments: "categories.apartments",
      Apartment: "categories.apartments",
      Villas: "categories.villas",
      Villa: "categories.villas",
      "Luxury Villas": "categories.villas",
      Penthouse: "categories.penthouses",
      Penthouses: "categories.penthouses",
      Commercial: "categories.commercial",
      "Mixed Use": "categories.mixedUse",
      "Office Spaces": "ui.propertyTypesLabel",
      "Villas & Townhouses": "categories.villas",
    };

    const k = keyMap[raw];
    const fromT = k ? safeT(k, undefined, "") : "";
    if (fromT) return fromT;

    return dyn(locale, "unitTypes", raw, raw);
  };

  // --------- sqft (NO commas) ----------
  const getSizeLabel = () => {
    const a = Number.isFinite(project?.sizeSqftMin)
      ? project.sizeSqftMin
      : null;
    const b = Number.isFinite(project?.sizeSqftMax)
      ? project.sizeSqftMax
      : null;

    // If min/max are missing, try to parse from raw string
    if (a === null && b === null && (project?.sizeSqft || project?.size)) {
      const parsed = parseRangeNumbers(project.sizeSqft || project.size);
      const parsedMin = parsed.min;
      const parsedMax = parsed.max;

      if (parsedMin !== null || parsedMax !== null) {
        const unit = safeT(
          "projects.cards.sqft",
          undefined,
          isAr ? "قدم²" : "sqft"
        );

        if (
          parsedMin !== null &&
          parsedMax !== null &&
          parsedMin === parsedMax
        ) {
          return `${fmtNoGroupInt(parsedMin)} ${unit}`;
        }

        if (parsedMin !== null && parsedMax !== null) {
          return `${fmtNoGroupInt(parsedMin)} – ${fmtNoGroupInt(
            parsedMax
          )} ${unit}`;
        }

        return `${fmtNoGroupInt(parsedMin ?? parsedMax)} ${unit}`;
      }
    }

    // If we have min OR max
    if (a !== null || b !== null) {
      const unit = safeT(
        "projects.cards.sqft",
        undefined,
        isAr ? "قدم²" : "sqft"
      );

      if (a !== null && b !== null && a === b) {
        return `${fmtNoGroupInt(a)} ${unit}`;
      }

      if (a !== null && b !== null) {
        return `${fmtNoGroupInt(a)} – ${fmtNoGroupInt(b)} ${unit}`;
      }

      return `${fmtNoGroupInt(a ?? b)} ${unit}`;
    }

    // Return empty string if no size data (not "غير متوفر")
    return "";
  };

  // --------- beds ----------
  const getBedsLabel = () => {
    // Check for override label in bedrooms field
    if (project?.bedrooms && typeof project.bedrooms === "string") {
      const s = project.bedrooms.trim();
      if (s) {
        // First try bedsOverrides
        const translatedOverride = dyn(locale, "bedsOverrides", s, "");
        if (translatedOverride) return translatedOverride;

        // Then try unitTypes (for "Office Spaces", "Commercial", etc.)
        const unitTypeTranslated = dyn(locale, "unitTypes", s, "");
        if (unitTypeTranslated) return unitTypeTranslated;

        // Return as-is if no translation found
        return s;
      }
    }

    const minB = Number.isFinite(project?.minBedrooms)
      ? project.minBedrooms
      : null;
    const maxB = Number.isFinite(project?.maxBedrooms)
      ? project.maxBedrooms
      : null;

    // If no bedroom data, return empty string
    if (minB === null && maxB === null) {
      return "";
    }

    const a = minB ?? maxB;
    const b = maxB ?? minB;

    if (a === 0 && b === 0) {
      return isAr ? "استوديو" : "Studio";
    }

    const studio = isAr ? "استوديو" : "Studio";
    const bed = isAr ? "غرفة" : "bed";
    const beds = isAr ? "غرف" : "beds";

    if (a === 0 && b > 0) return `${studio} – ${fmtNum(b)} ${beds}`;
    if (a === b) return `${fmtNum(a)} ${bed}`;
    return `${fmtNum(a)} – ${fmtNum(b)} ${beds}`;
  };

  // --------- price (WITH 23m, 2.4m, 515k format) ----------
  const getPriceLabel = () => {
    const price = project?.priceAED ?? project?.startingPriceAED ?? null;

    if (price === null || price === undefined || price === "") {
      return safeT(
        "projects.cards.priceOnRequest",
        undefined,
        isAr ? "السعر عند الطلب" : "Price on request"
      );
    }

    const absPrice = Number(price);
    if (!Number.isFinite(absPrice) || absPrice < 10_000) {
      return safeT(
        "projects.cards.priceOnRequest",
        undefined,
        isAr ? "السعر عند الطلب" : "Price on request"
      );
    }

    // Format like 23m, 2.4m, 515k (same as your HomeHeroSlider)
    if (absPrice < 1_000_000) {
      const value = Math.round(absPrice / 1_000);
      return isAr ? `د.إ ${fmtNum(value)}K` : `AED ${fmtNum(value)}K`;
    }

    const value = absPrice / 1_000_000;
    const pretty = fmtNum(value, {
      minimumFractionDigits: value < 10 ? 1 : 0,
      maximumFractionDigits: value < 10 ? 1 : 0,
    });
    return isAr ? `د.إ ${pretty}M` : `AED ${pretty}M`;
  };

  // --------- location ----------
  const getLocationLabel = () => {
    // Check for Arabic/English location
    if (isAr && project?.locationAr) return project.locationAr;
    if (!isAr && project?.locationEn) return project.locationEn;

    // Use region slug if available
    const regionSlug = project?.regionSlug ? String(project.regionSlug) : "";
    if (regionSlug) {
      const region = dyn(locale, "regionsBySlug", regionSlug, "");
      const city = DYN.city[isAr ? "ar" : "en"];
      const country = DYN.country[isAr ? "ar" : "en"];

      const outside = new Set([
        "sharjah",
        "ajman",
        "umm-al-quwain",
        "al-aaliah",
      ]);
      if (region && outside.has(regionSlug)) return `${region}, ${country}`;
      if (region) return `${region}, ${city}, ${country}`;
    }

    // Fallback
    return (
      project?.location ||
      safeT("projects.cards.defaultLocation", undefined, isAr ? "دبي" : "Dubai")
    );
  };

  // --------- get project URL ----------
  const getProjectUrl = () => {
    if (project?.href) return project.href;

    const prefix = locale ? `/${locale}` : "";

    if (project?.slug && project?.category && project?.developerSlug) {
      return `${prefix}/properties/${project.category}/${project.developerSlug}/${project.slug}`;
    }

    if (project?.slug && project?.developer) {
      return `${prefix}/properties/${String(project.developer)
        .toLowerCase()
        .replace(/\s+/g, "-")}/${project.slug}`;
    }

    return "#";
  };

  // Helper to parse range numbers
  const parseRangeNumbers = (raw) => {
    if (!raw) return { min: null, max: null };
    const s = String(raw).replace(/,/g, "");
    const nums = s.match(/\d+(\.\d+)?/g)?.map(Number) || [];
    if (!nums.length) return { min: null, max: null };
    return { min: nums[0] ?? null, max: nums[1] ?? null };
  };

  // Get all translated values
  const projectName = getProjectNameLabel();
  const location = getLocationLabel();
  const price = getPriceLabel();
  const beds = getBedsLabel();
  const size = getSizeLabel();
  const unitType = getUnitTypeLabel();
  const developer = getDeveloperLabel();
  const rawStatus = getStatusText();
  const status = getStatusLabel(rawStatus);
  const projectUrl = getProjectUrl();

  const media = project.image || "/images/fallback-gallery.jpg";

  return (
    <div className={view === "grid" ? styles.gridCard : styles.listCard}>
      <Link href={projectUrl} className={styles.media}>
        <Image
          src={media}
          alt={projectName}
          width={800}
          height={600}
          className={styles.img}
          unoptimized
        />
        {rawStatus && (
          <span className={`${styles.badge} ${getStatusClass(rawStatus)}`}>
            {status}
          </span>
        )}
      </Link>

      <div className={styles.body}>
        <div className={styles.topRow}>
          <div className={styles.titleWrap}>
            <Link href={projectUrl} className={styles.title}>
              {projectName}
            </Link>
            <div className={styles.location}>{location}</div>
          </div>

          <div className={styles.price}>{price}</div>
        </div>

        <div className={styles.metaRow}>
          {beds && (
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>🛏️</span>
              <span>{beds}</span>
            </div>
          )}

          {size && (
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>📐</span>
              <span>{size}</span>
            </div>
          )}

          {unitType && (
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>🏷️</span>
              <span>{unitType}</span>
            </div>
          )}
        </div>

        {developer && (
          <div className={styles.developer}>
            {safeT(
              "projects.cards.developerLabel",
              undefined,
              isAr ? "المطور:" : "Developer:"
            )}{" "}
            {developer}
          </div>
        )}
      </div>
    </div>
  );
}
