"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "@/styles/projects/SalesOfferPreferencesModal.module.css";
import { useLanguage } from "@/components/LanguageProvider";

/* -------------------------------------------
   Helpers for Data Extraction
-------------------------------------------- */

function safeStr(v) {
  return typeof v === "string" ? v : v == null ? "" : String(v);
}

function isArLocale(locale) {
  const s = String(locale || "").toLowerCase();
  return s === "ar" || s.startsWith("ar");
}

/**
 * Get the project data node based on locale
 */
function getProjectNode(projectData, locale) {
  if (!projectData) return null;

  // Direct locale access
  if (projectData?.[locale]) return projectData[locale];

  // Try nested locale structure
  if (isArLocale(locale) && projectData?.ar) return projectData.ar;
  if (!isArLocale(locale) && projectData?.en) return projectData.en;

  // Try common structures
  if (projectData?.projectData) return projectData.projectData;
  if (projectData?.data) return projectData.data;

  // Return as-is if it doesn't have locale structure
  return projectData;
}

/**
 * Get project name from any data structure
 */
function getProjectName(projectData, locale) {
  const node = getProjectNode(projectData, locale);

  // Try multiple possible locations for project name
  return (
    node?.project?.name ||
    node?.projectData?.project?.name ||
    node?.data?.project?.name ||
    node?.name ||
    node?.intro?.title ||
    node?.seo?.title?.split("|")?.[0]?.trim() ||
    projectData?.project?.name ||
    projectData?.name ||
    "Project"
  );
}

/**
 * Deep search for nested objects by key path
 */
function findInObject(obj, keys) {
  if (!obj || typeof obj !== "object") return null;

  for (const key of keys) {
    if (obj[key] !== undefined && obj[key] !== null) {
      return obj[key];
    }
  }

  // If not found in top level, search recursively
  for (const k in obj) {
    if (typeof obj[k] === "object" && obj[k] !== null) {
      const found = findInObject(obj[k], keys);
      if (found) return found;
    }
  }

  return null;
}

/**
 * Extract developer information
 */
function getDeveloperInfo(projectData, locale) {
  const node = getProjectNode(projectData, locale);

  // Try multiple possible locations
  return (
    node?.project?.developer ||
    node?.developer ||
    node?.hero?.companyName ||
    findInObject(node, ["developer", "company", "companyName"]) ||
    "N/A"
  );
}

/**
 * Extract location information
 */
function getLocationInfo(projectData, locale) {
  const node = getProjectNode(projectData, locale);

  const location =
    node?.project?.location ||
    node?.location?.address ||
    node?.intro?.location ||
    findInObject(node, ["location", "address", "area", "region"]) ||
    "N/A";

  const proximityFeatures = node?.location?.proximityFeatures || [];

  return { location, proximityFeatures };
}

/**
 * Extract pricing information
 */
function getPricingInfo(projectData, locale) {
  const node = getProjectNode(projectData, locale);

  const startingPrice =
    node?.project?.startingPrice ||
    node?.intro?.floatingCards?.find((card) =>
      card.label?.toLowerCase().includes("price")
    )?.value ||
    "N/A";

  const paymentPlan =
    node?.project?.paymentPlan ||
    node?.floorPlans?.plans?.[0]?.specs?.["Payment Plan"] ||
    node?.floorPlans?.plans?.[0]?.specs?.["خطة الدفع"] ||
    "N/A";

  const completionDate =
    node?.project?.completionDate ||
    node?.project?.handover ||
    node?.floorPlans?.plans?.[0]?.specs?.Handover ||
    node?.floorPlans?.plans?.[0]?.specs?.["موعد التسليم"] ||
    "N/A";

  return { startingPrice, paymentPlan, completionDate };
}

/**
 * Extract unit types and floor plans
 */
function getUnitTypes(projectData, locale) {
  const node = getProjectNode(projectData, locale);

  if (!node?.floorPlans?.plans) return [];

  return node.floorPlans.plans.map((plan) => ({
    type: plan.title || plan.id || "Unit",
    bedrooms: plan.bedrooms || 0,
    area: plan.specs?.["Total Area"] || plan.specs?.["إجمالي المساحة"] || "N/A",
    price:
      plan.specs?.["Starting Price"] ||
      plan.specs?.["السعر الابتدائي"] ||
      "N/A",
  }));
}

/**
 * Extract amenities
 */
function getAmenities(projectData, locale) {
  const node = getProjectNode(projectData, locale);

  if (node?.amenities?.amenities) {
    return node.amenities.amenities.map((a) => a.label || a.name || "Amenity");
  }

  // Try to find amenities in other locations
  const foundAmenities = findInObject(node, [
    "amenities",
    "features",
    "facilities",
  ]);
  if (Array.isArray(foundAmenities)) {
    return foundAmenities.map((a) =>
      typeof a === "string" ? a : a.label || a.name || "Amenity"
    );
  }

  return [];
}

/**
 * Extract gallery images
 */
function getGalleryImages(projectData, locale) {
  const node = getProjectNode(projectData, locale);

  if (node?.gallery?.slides && Array.isArray(node.gallery.slides)) {
    return node.gallery.slides;
  }

  if (node?.images && Array.isArray(node.images)) {
    return node.images;
  }

  const foundGallery = findInObject(node, [
    "gallery",
    "images",
    "slides",
    "visuals",
  ]);
  if (Array.isArray(foundGallery)) {
    return foundGallery;
  }

  return [];
}

/**
 * Extract introduction paragraphs
 */
function getIntroParagraphs(projectData, locale) {
  const node = getProjectNode(projectData, locale);

  if (node?.intro?.paragraphs && Array.isArray(node.intro.paragraphs)) {
    return node.intro.paragraphs;
  }

  if (node?.description && Array.isArray(node.description)) {
    return node.description;
  }

  if (node?.overview && Array.isArray(node.overview)) {
    return node.overview;
  }

  // Try to find any descriptive text
  const descriptions = [];

  // Check intro title
  if (node?.intro?.title) descriptions.push(node.intro.title);

  // Check SEO description
  if (node?.seo?.description) descriptions.push(node.seo.description);

  // Check project description
  if (node?.project?.description) descriptions.push(node.project.description);

  return descriptions;
}

/**
 * Build default description from ALL available project data
 * Only includes sections that actually have data
 */
function buildDefaultDescription(projectData, locale, t) {
  const h = (key, fallback) => t?.(key) || fallback;
  const sections = [];

  // 1. Project Overview
  const introParagraphs = getIntroParagraphs(projectData, locale);
  if (introParagraphs.length > 0) {
    sections.push({
      title: h("salesOffer.description.projectOverview", "Project Overview"),
      content: introParagraphs,
    });
  }

  // 2. Developer Information
  const developer = getDeveloperInfo(projectData, locale);
  if (developer && developer !== "N/A") {
    sections.push({
      title: h("salesOffer.description.developer", "Developer"),
      content: [developer],
    });
  }

  // 3. Location & Connectivity
  const { location, proximityFeatures } = getLocationInfo(projectData, locale);
  if (location && location !== "N/A") {
    const locationContent = [location];
    if (proximityFeatures.length > 0) {
      proximityFeatures.forEach((feature) => {
        if (feature.text) locationContent.push(`• ${feature.text}`);
      });
    }
    sections.push({
      title: h("salesOffer.description.location", "Location & Connectivity"),
      content: locationContent,
    });
  }

  // 4. Pricing & Payment
  const { startingPrice, paymentPlan, completionDate } = getPricingInfo(
    projectData,
    locale
  );
  const pricingContent = [];

  if (startingPrice && startingPrice !== "N/A") {
    pricingContent.push(`Starting Price: ${startingPrice}`);
  }

  if (paymentPlan && paymentPlan !== "N/A") {
    pricingContent.push(`Payment Plan: ${paymentPlan}`);
  }

  if (completionDate && completionDate !== "N/A") {
    pricingContent.push(`Handover: ${completionDate}`);
  }

  if (pricingContent.length > 0) {
    sections.push({
      title: h("salesOffer.description.pricing", "Pricing & Payment"),
      content: pricingContent,
    });
  }

  // 5. Unit Types
  const unitTypes = getUnitTypes(projectData, locale);
  if (unitTypes.length > 0) {
    const unitContent = unitTypes.map((unit) => {
      const parts = [];
      if (unit.type) parts.push(unit.type);
      if (unit.bedrooms > 0)
        parts.push(`${unit.bedrooms} Bedroom${unit.bedrooms > 1 ? "s" : ""}`);
      if (unit.area && unit.area !== "N/A") parts.push(`Area: ${unit.area}`);
      if (unit.price && unit.price !== "N/A")
        parts.push(`Price: ${unit.price}`);
      return parts.join(" • ");
    });

    sections.push({
      title: h("salesOffer.description.unitTypes", "Available Units"),
      content: unitContent,
    });
  }

  // 6. Amenities & Features
  const amenities = getAmenities(projectData, locale);
  if (amenities.length > 0) {
    const amenityContent = amenities.map((amenity) => `• ${amenity}`);
    sections.push({
      title: h("salesOffer.description.amenities", "Amenities & Features"),
      content: amenityContent,
    });
  }

  // 7. Construction Status
  const node = getProjectNode(projectData, locale);
  const status = node?.project?.status || node?.status;
  if (status) {
    sections.push({
      title: h("salesOffer.description.status", "Project Status"),
      content: [status],
    });
  }

  // 8. Additional Features (from floor plan features)
  if (node?.floorPlans?.plans) {
    const allFeatures = [];
    node.floorPlans.plans.forEach((plan) => {
      if (Array.isArray(plan.features)) {
        plan.features.forEach((feature) => {
          if (feature && feature !== "—" && feature !== "-") {
            allFeatures.push(`• ${feature}`);
          }
        });
      }
    });

    if (allFeatures.length > 0) {
      // Remove duplicates
      const uniqueFeatures = [...new Set(allFeatures)];
      sections.push({
        title: h("salesOffer.description.features", "Unit Features"),
        content: uniqueFeatures,
      });
    }
  }

  // Build the final description string
  const lines = [];

  sections.forEach((section, index) => {
    if (index > 0) lines.push(""); // Blank line between sections

    lines.push(`== ${section.title.toUpperCase()} ==`);
    lines.push("");

    section.content.forEach((line) => {
      if (line && line.trim()) {
        lines.push(line.trim());
      }
    });
  });

  return lines.join("\n").trim();
}

function formatFxTimestamp(ts) {
  if (!ts) return "";
  try {
    const d = new Date(ts);
    return d.toLocaleString();
  } catch {
    return "";
  }
}

/* -------------------------------------------
   FX Rates (today)
-------------------------------------------- */

const FX_CACHE_KEY = "sales_offer_fx_cache_v1";
const FX_CACHE_TTL_MS = 6 * 60 * 60 * 1000;

async function fetchFxRates(base = "AED") {
  const url = `https://open.er-api.com/v6/latest/${encodeURIComponent(base)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("FX fetch failed");
  const data = await res.json();
  if (!data?.rates) throw new Error("FX invalid response");
  return {
    base: data?.base_code || base,
    rates: data.rates,
    updatedAt: data?.time_last_update_unix
      ? data.time_last_update_unix * 1000
      : Date.now(),
  };
}

function loadFxCache() {
  try {
    const raw = sessionStorage.getItem(FX_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.updatedAt || !parsed?.rates) return null;
    if (Date.now() - parsed.updatedAt > FX_CACHE_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveFxCache(payload) {
  try {
    sessionStorage.setItem(FX_CACHE_KEY, JSON.stringify(payload));
  } catch {
    // ignore
  }
}

/* -------------------------------------------
   Currency list
-------------------------------------------- */

const CURRENCIES = [
  {
    code: "AED",
    labelEn: "AED (United Arab Emirates Dirham)",
    labelAr: "AED (الدرهم الإماراتي)",
  },
  {
    code: "USD",
    labelEn: "USD (US Dollar)",
    labelAr: "USD (الدولار الأمريكي)",
  },
  { code: "EUR", labelEn: "EUR (Euro)", labelAr: "EUR (اليورو)" },
  {
    code: "GBP",
    labelEn: "GBP (British Pound)",
    labelAr: "GBP (الجنيه البريطاني)",
  },
  {
    code: "SAR",
    labelEn: "SAR (Saudi Riyal)",
    labelAr: "SAR (الريال السعودي)",
  },
  {
    code: "EGP",
    labelEn: "EGP (Egyptian Pound)",
    labelAr: "EGP (الجنيه المصري)",
  },
  {
    code: "KWD",
    labelEn: "KWD (Kuwaiti Dinar)",
    labelAr: "KWD (الدينار الكويتي)",
  },
  {
    code: "QAR",
    labelEn: "QAR (Qatari Riyal)",
    labelAr: "QAR (الريال القطري)",
  },
  { code: "OMR", labelEn: "OMR (Omani Rial)", labelAr: "OMR (الريال العماني)" },
  {
    code: "BHD",
    labelEn: "BHD (Bahraini Dinar)",
    labelAr: "BHD (الدينار البحريني)",
  },
  {
    code: "INR",
    labelEn: "INR (Indian Rupee)",
    labelAr: "INR (الروبية الهندية)",
  },
  {
    code: "PKR",
    labelEn: "PKR (Pakistani Rupee)",
    labelAr: "PKR (الروبية الباكستانية)",
  },
  {
    code: "RUB",
    labelEn: "RUB (Russian Ruble)",
    labelAr: "RUB (الروبل الروسي)",
  },
  {
    code: "UAH",
    labelEn: "UAH (Ukrainian Hryvnia)",
    labelAr: "UAH (الهريفنيا الأوكرانية)",
  },
  {
    code: "IDR",
    labelEn: "IDR (Indonesian Rupiah)",
    labelAr: "IDR (الروبية الإندونيسية)",
  },
  {
    code: "TRY",
    labelEn: "TRY (Turkish Lira)",
    labelAr: "TRY (الليرة التركية)",
  },
];

function currencyLabel(code, isRTL) {
  const found = CURRENCIES.find((c) => c.code === code);
  if (!found) return code;
  return isRTL ? found.labelAr : found.labelEn;
}

/* -------------------------------------------
   Small UI components
-------------------------------------------- */

function Switch({ checked, onChange, label }) {
  return (
    <button
      type="button"
      className={styles.switchRow}
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
    >
      <span className={styles.switchLabel}>{label}</span>
      <span className={`${styles.switch} ${checked ? styles.switchOn : ""}`}>
        <span className={styles.switchKnob} />
      </span>
    </button>
  );
}

function SelectMenu({
  value,
  onChange,
  placeholder,
  options,
  getLabel,
  searchable = false,
  isRTL,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  const shownOptions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((opt) => {
      const lbl = getLabel(opt).toLowerCase();
      return (
        lbl.includes(q) ||
        String(opt?.code || opt)
          .toLowerCase()
          .includes(q)
      );
    });
  }, [options, query, getLabel]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.selectWrap} ref={ref}>
      <button
        type="button"
        className={styles.selectButton}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.selectValue}>
          {value ? getLabel(value) : placeholder}
        </span>
        <span className={styles.selectChevron} aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className={`${styles.selectMenu} ${isRTL ? styles.rtlMenu : ""}`}>
          {searchable && (
            <div className={styles.selectSearchWrap}>
              <input
                className={styles.selectSearch}
                placeholder={isRTL ? "بحث..." : "Search..."}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          )}

          <div className={styles.selectList}>
            {shownOptions.map((opt) => {
              const k = opt?.code || opt;
              const selected = (value?.code || value) === k;
              return (
                <button
                  key={k}
                  type="button"
                  className={`${styles.selectItem} ${
                    selected ? styles.selectItemActive : ""
                  }`}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                    setQuery("");
                  }}
                >
                  <span className={styles.selectItemText}>{getLabel(opt)}</span>
                  {selected && <span className={styles.selectTick}>✓</span>}
                </button>
              );
            })}
            {!shownOptions.length && (
              <div className={styles.selectEmpty}>
                {isRTL ? "لا توجد نتائج" : "No results"}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------
   Main Component
-------------------------------------------- */

export default function SalesOfferPreferencesModal({
  open,
  onClose,
  projectData,
  locale: localeProp,
  t: tProp,
  onGenerate,
  onImproveWithAI,
}) {
  const langCtx = useLanguage();
  const t = tProp || langCtx?.t;
  const locale = localeProp || langCtx?.locale || "en";
  const isRTL = isArLocale(locale);

  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState("prefs");

  // Preferences
  const [pdfLang, setPdfLang] = useState(isRTL ? "ar" : "en");
  const [currency, setCurrency] = useState("AED");
  const [measureUnit, setMeasureUnit] = useState("ft2");
  const [description, setDescription] = useState("");
  const [displaySettings, setDisplaySettings] = useState({
    developer: true,
    map: true,
    typicalUnits: true,
    unitPrices: true,
  });

  // FX
  const [fx, setFx] = useState({ base: "AED", rates: null, updatedAt: null });
  const [fxLoading, setFxLoading] = useState(false);
  const [fxError, setFxError] = useState("");

  // AI Improve UI
  const [aiLoading, setAiLoading] = useState(false);
  const [toast, setToast] = useState("");

  const projectName = useMemo(
    () => getProjectName(projectData, locale),
    [projectData, locale]
  );

  const tr = (key, fallback) => t?.(key) || fallback;

  // Mount for portal
  useEffect(() => setMounted(true), []);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Initialize defaults when modal opens
  useEffect(() => {
    if (!open) return;

    setView("prefs");
    setPdfLang(isRTL ? "ar" : "en");

    // Build default description from ALL available data
    const def = buildDefaultDescription(projectData, locale, t);
    setDescription(def);

    // Load FX cache
    const cached = loadFxCache();
    if (cached?.rates) {
      setFx(cached);
    } else {
      setFx({ base: "AED", rates: null, updatedAt: null });
    }
  }, [open, locale, isRTL, projectData, t]);

  async function ensureFx() {
    setFxError("");
    try {
      const cached = loadFxCache();
      if (cached?.rates) {
        setFx(cached);
        return cached;
      }
      setFxLoading(true);
      const fresh = await fetchFxRates("AED");
      setFx(fresh);
      saveFxCache(fresh);
      return fresh;
    } catch (e) {
      setFxError(
        isRTL ? "تعذر جلب أسعار الصرف." : "Failed to load exchange rates."
      );
      return null;
    } finally {
      setFxLoading(false);
    }
  }

  useEffect(() => {
    if (!open) return;
    if (currency === "AED") return;
    ensureFx();
  }, [currency, open]);

  useEffect(() => {
    if (!toast) return;
    const tmr = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(tmr);
  }, [toast]);

  const languageOptions = useMemo(
    () => [
      { code: "en", label: isRTL ? "الإنجليزية" : "English" },
      { code: "ar", label: isRTL ? "العربية" : "Arabic" },
    ],
    [isRTL]
  );

  const currencyOptions = useMemo(
    () => CURRENCIES.map((c) => ({ code: c.code })),
    []
  );

  const selectedCurrencyOpt = useMemo(() => ({ code: currency }), [currency]);

  const fxRate = useMemo(() => {
    if (currency === "AED") return 1;
    const r = fx?.rates?.[currency];
    return typeof r === "number" ? r : null;
  }, [currency, fx]);

  async function handleImproveWithAI() {
    if (aiLoading) return;
    setAiLoading(true);
    try {
      const ctx = {
        projectName,
        locale,
        pdfLang,
        projectData: getProjectNode(projectData, locale),
      };

      if (typeof onImproveWithAI === "function") {
        const improved = await onImproveWithAI(description, ctx);
        if (typeof improved === "string" && improved.trim()) {
          setDescription(improved.trim());
          setToast(isRTL ? "تم تحسين الوصف." : "Description improved.");
        } else {
          setToast(isRTL ? "لم يتم إرجاع نص." : "No text returned.");
        }
        return;
      }

      // Fallback to API if provided
      const res = await fetch("/api/sales-offer/improve-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: description, ...ctx }),
      });

      if (!res.ok) {
        setToast(
          isRTL ? "واجهة الذكاء غير جاهزة بعد." : "AI endpoint not ready yet."
        );
        return;
      }

      const data = await res.json();
      if (data?.text) {
        setDescription(String(data.text).trim());
        setToast(isRTL ? "تم تحسين الوصف." : "Description improved.");
      } else {
        setToast(isRTL ? "لم يتم إرجاع نص." : "No text returned.");
      }
    } catch {
      setToast(isRTL ? "تعذر تحسين الوصف." : "Failed to improve description.");
    } finally {
      setAiLoading(false);
    }
  }

  async function handleGenerate() {
    let fxPayload = fx;
    if (currency !== "AED") {
      const ensured = await ensureFx();
      if (ensured) fxPayload = ensured;
    }

    const prefs = {
      projectName,
      pdfLang,
      currency,
      measureUnit,
      description,
      displaySettings,
      fx: {
        base: fxPayload?.base || "AED",
        rate: currency === "AED" ? 1 : fxPayload?.rates?.[currency] ?? null,
        updatedAt: fxPayload?.updatedAt || null,
      },
      // Include extracted data for reference
      extractedData: {
        developer: getDeveloperInfo(projectData, locale),
        location: getLocationInfo(projectData, locale).location,
        pricing: getPricingInfo(projectData, locale),
        unitTypes: getUnitTypes(projectData, locale),
        amenities: getAmenities(projectData, locale),
        galleryCount: getGalleryImages(projectData, locale).length,
      },
    };

    onGenerate?.(prefs);
  }

  if (!open || !mounted) return null;

  const modal = (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div
        className={`${styles.modal} ${isRTL ? styles.rtl : ""}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className={styles.topBar}>
          <button type="button" className={styles.backBtn} onClick={onClose}>
            {isRTL ? "رجوع" : "Back"}
          </button>

          <div className={styles.topTitle}>
            {view === "edit"
              ? tr("salesOffer.editTitle", "Edit description")
              : tr("salesOffer.generateTitle", "Generate Sales Offer")}
          </div>

          {view === "edit" ? (
            <button
              type="button"
              className={styles.saveContinueBtn}
              onClick={() => setView("prefs")}
            >
              {tr("salesOffer.saveContinue", "Save & Continue")}
            </button>
          ) : (
            <div className={styles.topRightSpacer} />
          )}
        </div>

        <div className={styles.body}>
          {view === "prefs" ? (
            <>
              <h2 className={styles.bigTitle}>
                {tr("salesOffer.pdfPreferences", "PDF Preferences")}
              </h2>
              <p className={styles.subtitle}>
                {tr(
                  "salesOffer.pdfPreferencesHint",
                  "Configure your presentation before generation"
                )}
              </p>

              <div className={styles.fieldBlock}>
                <div className={styles.label}>
                  {tr("salesOffer.selectedUnit", "Selected unit")}
                </div>
                <button type="button" className={styles.addUnitBtn} disabled>
                  <span className={styles.addUnitIcon} aria-hidden="true">
                    ⬚
                  </span>
                  {tr("salesOffer.addUnit", "Add unit")}
                </button>
              </div>

              <div className={styles.fieldBlock}>
                <div className={styles.label}>
                  {tr("salesOffer.language", "Language")}
                </div>
                <SelectMenu
                  value={
                    languageOptions.find((x) => x.code === pdfLang) ||
                    languageOptions[0]
                  }
                  onChange={(opt) => setPdfLang(opt.code)}
                  placeholder={tr(
                    "salesOffer.selectLanguage",
                    "Select language"
                  )}
                  options={languageOptions}
                  getLabel={(opt) => opt.label}
                  isRTL={isRTL}
                />
              </div>

              <div className={styles.fieldBlock}>
                <div className={styles.label}>
                  {tr("salesOffer.currency", "Currency")}
                </div>
                <SelectMenu
                  value={selectedCurrencyOpt}
                  onChange={(opt) => setCurrency(opt.code)}
                  placeholder={tr(
                    "salesOffer.selectCurrency",
                    "Select currency"
                  )}
                  options={currencyOptions}
                  searchable
                  getLabel={(opt) => currencyLabel(opt.code, isRTL)}
                  isRTL={isRTL}
                />

                <div className={styles.fxLine}>
                  {currency === "AED" ? (
                    <span className={styles.fxOk}>
                      {tr("salesOffer.fxBase", "Base currency: AED")}
                    </span>
                  ) : fxLoading ? (
                    <span className={styles.fxMuted}>
                      {isRTL
                        ? "جاري تحميل سعر الصرف..."
                        : "Loading exchange rate..."}
                    </span>
                  ) : fxRate ? (
                    <span className={styles.fxOk}>
                      {isRTL ? "السعر الآن:" : "Rate now:"} 1 AED = {fxRate}{" "}
                      {currency}
                      {fx?.updatedAt ? (
                        <span className={styles.fxMuted}>
                          {" "}
                          • {formatFxTimestamp(fx.updatedAt)}
                        </span>
                      ) : null}
                    </span>
                  ) : fxError ? (
                    <span className={styles.fxErr}>{fxError}</span>
                  ) : (
                    <span className={styles.fxMuted}>
                      {isRTL ? "سعر الصرف غير متاح" : "Rate unavailable"}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.fieldBlock}>
                <div className={styles.label}>
                  {tr("salesOffer.measureUnits", "Measure units")}
                </div>

                <div className={styles.segment}>
                  <button
                    type="button"
                    className={`${styles.segmentBtn} ${
                      measureUnit === "ft2" ? styles.segmentActive : ""
                    }`}
                    onClick={() => setMeasureUnit("ft2")}
                  >
                    ft²
                  </button>
                  <button
                    type="button"
                    className={`${styles.segmentBtn} ${
                      measureUnit === "m2" ? styles.segmentActive : ""
                    }`}
                    onClick={() => setMeasureUnit("m2")}
                  >
                    m²
                  </button>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <div className={styles.cardTitle}>
                      {tr(
                        "salesOffer.personalisedDescription",
                        "Personalised description"
                      )}
                    </div>
                    <div className={styles.cardSubtitle}>
                      {tr(
                        "salesOffer.personalisedHint",
                        "Adapt the project description in sales offer yourself or with the help of Reelly AI"
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.descLabelRow}>
                  <div className={styles.descLabel}>
                    {tr("salesOffer.descriptionLabel", "Description")}
                  </div>
                  <div className={styles.descSmall}>
                    {tr(
                      "salesOffer.projectGeneralFacts",
                      "Project information extracted from data"
                    )}
                  </div>
                </div>

                <div className={styles.descPreview}>
                  <pre className={styles.descText}>{description}</pre>
                </div>

                <div className={styles.cardActions}>
                  <button
                    type="button"
                    className={styles.editBtn}
                    onClick={() => setView("edit")}
                  >
                    ✎ {tr("salesOffer.edit", "Edit")}
                  </button>

                  {/* "Improve with AI" button removed per client request */}
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>
                    {tr("salesOffer.displaySettings", "Display Settings")}
                  </div>
                </div>

                <Switch
                  checked={displaySettings.developer}
                  onChange={(v) =>
                    setDisplaySettings((s) => ({ ...s, developer: v }))
                  }
                  label={tr("salesOffer.displayDeveloper", "Display developer")}
                />
                <Switch
                  checked={displaySettings.map}
                  onChange={(v) =>
                    setDisplaySettings((s) => ({ ...s, map: v }))
                  }
                  label={tr(
                    "salesOffer.displayLocationOnMap",
                    "Display location on map"
                  )}
                />
                <Switch
                  checked={displaySettings.typicalUnits}
                  onChange={(v) =>
                    setDisplaySettings((s) => ({ ...s, typicalUnits: v }))
                  }
                  label={tr(
                    "salesOffer.displayTypicalUnits",
                    "Display typical units"
                  )}
                />
                <Switch
                  checked={displaySettings.unitPrices}
                  onChange={(v) =>
                    setDisplaySettings((s) => ({ ...s, unitPrices: v }))
                  }
                  label={tr(
                    "salesOffer.displayUnitPrices",
                    "Display unit prices"
                  )}
                />
              </div>
            </>
          ) : (
            <div className={styles.editView}>
              <div className={styles.templateBlock}>
                <div className={styles.label}>
                  {tr(
                    "salesOffer.savedTemplates",
                    "Saved project description templates"
                  )}
                </div>
                <div className={styles.templateFakeSelect}>
                  {tr("salesOffer.selectTemplate", "Select template")}
                  <span className={styles.selectChevron}>▾</span>
                </div>
              </div>

              <div className={styles.editArea}>
                <div className={styles.editAreaLabel}>
                  {tr("salesOffer.projectGeneralFacts", "Project information")}
                </div>

                <textarea
                  className={styles.textarea}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={6000}
                />
                <div className={styles.counter}>
                  {description.length}/6000 {isRTL ? "حرف" : "symbols"}
                </div>
              </div>

              <button type="button" className={styles.saveTemplateBtn} disabled>
                {tr(
                  "salesOffer.saveAsTemplate",
                  "Save description as template"
                )}
              </button>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button
            type="button"
            className={styles.generateBtn}
            onClick={handleGenerate}
          >
            {tr("salesOffer.generateSalesOffer", "Generate sales offer")}
          </button>
        </div>

        {toast ? <div className={styles.toast}>{toast}</div> : null}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

export {
  getProjectName,
  getDeveloperInfo,
  getLocationInfo,
  getPricingInfo,
  getUnitTypes,
  getAmenities,
  getGalleryImages,
  getIntroParagraphs,
  buildDefaultDescription,
};
