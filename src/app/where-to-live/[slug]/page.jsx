"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";

import AreaGuideHero from "@/components/where-to-live/AreaGuideHero";
import AreaNarrative from "@/components/where-to-live/AreaNarrative";
import MarketInsights from "@/components/where-to-live/MarketInsights";
import LocationFAQ from "@/components/where-to-live/LocationFAQ";
import RegionProjectsSection from "@/components/where-to-live/RegionProjectsSection";

import styles from "@/styles/where-to-live/AreaDetailPage.module.css";

function pickLocalized(enValue, arValue, locale) {
  return locale === "ar" ? arValue || enValue || "" : enValue || arValue || "";
}

function normalizeMoneyLabel(value, locale, fallback) {
  const raw = String(value || "").trim();
  if (!raw) return fallback;
  return raw
    .replace(/^average price:\s*/i, "")
    .replace(/^properties from\s*/i, "")
    .replace(/^from\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeRoiLabel(value, fallback) {
  const raw = String(value || "").trim();
  if (!raw) return fallback;
  return raw
    .replace(/^return on investment\s*:?/i, "ROI ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildFaqsFromArea(area) {
  const location = area?.location || "Dubai";
  const avgBuy = normalizeMoneyLabel(area?.avgBuyPrice, "en", "Market dependent");
  const avgRent = normalizeMoneyLabel(area?.avgRentPrice, "en", "Market dependent");
  const roi = normalizeRoiLabel(area?.roi, "Market dependent");

  return [
    {
      question: {
        en: `Where is ${area?.name || "this area"} located?`,
        ar: `أين تقع منطقة ${area?.nameAr || area?.name || "هذه المنطقة"}؟`,
      },
      answer: {
        en: `${area?.name || "This area"} is located in ${location}.`,
        ar: `تقع ${area?.nameAr || area?.name || "هذه المنطقة"} في ${location}.`,
      },
    },
    {
      question: {
        en: `What is the average buying price in ${area?.name || "this area"}?`,
        ar: `ما هو متوسط سعر الشراء في ${area?.nameAr || area?.name || "هذه المنطقة"}؟`,
      },
      answer: {
        en: `The current average buying price is ${avgBuy}. Average annual rent is ${avgRent}.`,
        ar: `متوسط سعر الشراء الحالي هو ${avgBuy}. ومتوسط الإيجار السنوي هو ${avgRent}.`,
      },
    },
    {
      question: {
        en: `What ROI can investors expect in ${area?.name || "this area"}?`,
        ar: `ما هو العائد المتوقع للمستثمرين في ${area?.nameAr || area?.name || "هذه المنطقة"}؟`,
      },
      answer: {
        en: `The latest ROI indicator for this area is ${roi}.`,
        ar: `أحدث مؤشر للعائد في هذه المنطقة هو ${roi}.`,
      },
    },
  ];
}

function normalizeSanityArea(area, locale) {
  if (!area) return null;

  const name = pickLocalized(area.name, area.nameAr, locale);
  const tagline = pickLocalized(area.tagline, area.taglineAr, locale);
  const description = pickLocalized(area.description, area.descriptionAr, locale);
  const bulletPoints = (locale === "ar" ? area.highlightsAr : area.highlights) || area.highlights || area.highlightsAr || [];

  return {
    slug: area.slug,
    heroImage: area.heroImage || "",
    gallerySlides: area.heroImage ? [area.heroImage] : [],
    summary: {
      name,
      location: area.location || "",
      avgBuy: normalizeMoneyLabel(area.avgBuyPrice, locale, ""),
      avgRent: normalizeMoneyLabel(area.avgRentPrice, locale, ""),
      roi: normalizeRoiLabel(area.roi, ""),
    },
    highlights: {
      about: {
        en: area.description || "",
        ar: area.descriptionAr || area.description || "",
      },
      nutshellTitle: {
        en: "In a Nutshell",
        ar: "باختصار",
      },
      inANutshell: {
        en: area.highlights || [],
        ar: area.highlightsAr || area.highlights || [],
      },
    },
    neighbourhoodTitles: {
      overview: {
        en: "Neighborhood Overview",
        ar: "نظرة عامة على الحي",
      },
      properties: {
        en: "Property Landscape",
        ar: "مشهد العقارات",
      },
    },
    neighbourhood: {
      communityOverview: {
        en: area.tagline || area.description || "",
        ar: area.taglineAr || area.descriptionAr || area.tagline || area.description || "",
      },
      propertiesOverview: {
        en: description || tagline,
        ar: area.descriptionAr || area.taglineAr || area.description || area.tagline || "",
      },
    },
    investmentHighlights: {
      title: {
        en: "Investment Highlights",
        ar: "أبرز النقاط الاستثمارية",
      },
      points: bulletPoints.map((point, index) => ({
        title: {
          en: `Highlight ${index + 1}`,
          ar: `النقطة ${index + 1}`,
        },
        details: {
          en: [point],
          ar: [point],
        },
      })),
      conclusion: {
        en: `Average buy price: ${normalizeMoneyLabel(area.avgBuyPrice, locale, "N/A")} ✓ Average rent: ${normalizeMoneyLabel(area.avgRentPrice, locale, "N/A")} ✓ ROI: ${normalizeRoiLabel(area.roi, "N/A")}`,
        ar: `متوسط الشراء: ${normalizeMoneyLabel(area.avgBuyPrice, locale, "N/A")} ✓ متوسط الإيجار: ${normalizeMoneyLabel(area.avgRentPrice, locale, "N/A")} ✓ العائد: ${normalizeRoiLabel(area.roi, "N/A")}`,
      },
    },
    translations: {
      market: {
        title: {
          en: "Market Insights",
          ar: "تحليلات السوق",
        },
        subtitle: {
          en: `Market snapshot for ${area.name || "this area"}.`,
          ar: `لمحة سوقية عن ${area.nameAr || area.name || "هذه المنطقة"}.`,
        },
      },
    },
    market: {
      rentalTrends: [],
      salesTrends: [],
      roiByType: [],
    },
    locationCards: {},
    faqs: buildFaqsFromArea(area),
    regionSlug: area.regionSlug || area.slug,
  };
}

function pickLang(v, locale) {
  if (v == null) return "";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (Array.isArray(v)) return v.map((x) => pickLang(x, locale)).filter(Boolean);
  if (typeof v === "object") {
    if (v[locale] != null) return pickLang(v[locale], locale);
    if (v.en != null) return pickLang(v.en, locale);
    const first = Object.values(v).find((x) => typeof x === "string");
    return first ? String(first) : "";
  }
  return "";
}

function deepResolve(value, locale) {
  if (value == null) return value;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => deepResolve(item, locale));
  }
  if (typeof value === "object") {
    const keys = Object.keys(value);
    const isBilingual =
      keys.length <= 4 &&
      (keys.includes("en") || keys.includes("ar")) &&
      keys.every(
        (k) =>
          k === "en" ||
          k === "ar" ||
          typeof value[k] === "string" ||
          typeof value[k] === "number"
      );

    if (isBilingual) return pickLang(value, locale);

    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = deepResolve(v, locale);
    }
    return out;
  }
  return value;
}

export default function AreaDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || "";
  const { locale } = useLanguage();
  const lang = locale || "en";
  const isRTL = lang === "ar";
  const [sanityArea, setSanityArea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function loadArea() {
      setLoading(true);
      try {
        const response = await fetch(`/api/sanity-areas?slug=${encodeURIComponent(slug)}`, {
          cache: "no-store",
        });
        const data = response.ok ? await response.json() : null;
        if (!alive) return;
        setSanityArea(data || null);
      } catch {
        if (!alive) return;
        setSanityArea(null);
      } finally {
        if (alive) setLoading(false);
      }
    }

    if (slug) loadArea();
    return () => {
      alive = false;
    };
  }, [slug]);

  const resolvedData = useMemo(() => {
    if (sanityArea) {
      return deepResolve(normalizeSanityArea(sanityArea, lang), lang);
    }
    return null;
  }, [sanityArea, slug, lang]);

  if (loading && !resolvedData) {
    return (
      <div className={styles.notFound} dir={isRTL ? "rtl" : "ltr"}>
        <div className={styles.notFoundInner}>
          <h1>{isRTL ? "جارٍ التحميل..." : "Loading..."}</h1>
        </div>
      </div>
    );
  }

  if (!resolvedData) {
    return (
      <div className={styles.notFound} dir={isRTL ? "rtl" : "ltr"}>
        <div className={styles.notFoundInner}>
          <h1>{isRTL ? "المنطقة غير موجودة" : "Area Not Found"}</h1>
          <p>
            {isRTL
              ? "لم نتمكن من العثور على هذه المنطقة."
              : "We couldn't find this area."}
          </p>
          <Link href="/where-to-live" className={styles.backLink}>
            {isRTL ? "← عودة إلى المناطق" : "← Back to Areas"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <AreaGuideHero regionData={resolvedData} />
      <AreaNarrative regionData={resolvedData} />
      <MarketInsights regionData={resolvedData} />
      <LocationFAQ regionData={resolvedData} />
      <RegionProjectsSection
        regionSlug={resolvedData.regionSlug || slug}
        locale={lang}
      />
      <div className={styles.backBar} dir={isRTL ? "rtl" : "ltr"}>
        <Link href="/where-to-live" className={styles.backLink}>
          {isRTL ? "← عرض كل المناطق" : "← All Areas"}
        </Link>
      </div>
    </div>
  );
}
