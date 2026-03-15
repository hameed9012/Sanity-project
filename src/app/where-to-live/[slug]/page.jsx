"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import AreaGuideHero from "@/components/where-to-live/AreaGuideHero";
import AreaNarrative from "@/components/where-to-live/AreaNarrative";
import MarketInsights from "@/components/where-to-live/MarketInsights";
import AreaConnections from "@/components/where-to-live/AreaConnections";
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
    .replace(/\/\s*year/gi, locale === "ar" ? " \u0633\u0646\u0648\u064a\u064b\u0627" : " yearly")
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
  const avgBuy = normalizeMoneyLabel(
    area?.avgBuyPrice,
    "en",
    "Pricing varies by inventory"
  );
  const avgRent = normalizeMoneyLabel(
    area?.avgRentPrice,
    "en",
    "Rental rates vary by inventory"
  );
  const roi = normalizeRoiLabel(area?.roi, "ROI varies by inventory");

  return [
    {
      question: {
        en: `Where is ${area?.name || "this area"} located?`,
        ar: `\u0623\u064a\u0646 \u062a\u0642\u0639 \u0645\u0646\u0637\u0642\u0629 ${
          area?.nameAr || area?.name || "\u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
        }\u061f`,
      },
      answer: {
        en: `${area?.name || "This area"} is located in ${location}.`,
        ar: `\u062a\u0642\u0639 ${
          area?.nameAr || area?.name || "\u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
        } \u0641\u064a ${location}.`,
      },
    },
    {
      question: {
        en: `What is the average buying price in ${area?.name || "this area"}?`,
        ar: `\u0645\u0627 \u0647\u0648 \u0645\u062a\u0648\u0633\u0637 \u0633\u0639\u0631 \u0627\u0644\u0634\u0631\u0627\u0621 \u0641\u064a ${
          area?.nameAr || area?.name || "\u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
        }\u061f`,
      },
      answer: {
        en: `The current average buying price is ${avgBuy}. Average annual rent is ${avgRent}.`,
        ar: `\u0645\u062a\u0648\u0633\u0637 \u0633\u0639\u0631 \u0627\u0644\u0634\u0631\u0627\u0621 \u0627\u0644\u062d\u0627\u0644\u064a \u0647\u0648 ${avgBuy}. \u0648\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0625\u064a\u062c\u0627\u0631 \u0627\u0644\u0633\u0646\u0648\u064a \u0647\u0648 ${avgRent}.`,
      },
    },
    {
      question: {
        en: `What ROI can investors expect in ${area?.name || "this area"}?`,
        ar: `\u0645\u0627 \u0647\u0648 \u0627\u0644\u0639\u0627\u0626\u062f \u0627\u0644\u0645\u062a\u0648\u0642\u0639 \u0644\u0644\u0645\u0633\u062a\u062b\u0645\u0631\u064a\u0646 \u0641\u064a ${
          area?.nameAr || area?.name || "\u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
        }\u061f`,
      },
      answer: {
        en: `The latest ROI indicator for this area is ${roi}.`,
        ar: `\u0623\u062d\u062f\u062b \u0645\u0624\u0634\u0631 \u0644\u0644\u0639\u0627\u0626\u062f \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0647\u0648 ${roi}.`,
      },
    },
  ];
}

function normalizeSanityArea(area, locale) {
  if (!area) return null;

  const name = pickLocalized(area.name, area.nameAr, locale);
  const tagline = pickLocalized(area.tagline, area.taglineAr, locale);
  const description = pickLocalized(area.description, area.descriptionAr, locale);
  const bulletPoints =
    (locale === "ar" ? area.highlightsAr : area.highlights) ||
    area.highlights ||
    area.highlightsAr ||
    [];
  const nearbyLandmarks = Array.isArray(area.nearbyLandmarks)
    ? area.nearbyLandmarks.map((item) => ({
        name: {
          en: item?.name || "",
          ar: item?.nameAr || item?.name || "",
        },
        distance: item?.distance || "",
        icon: item?.icon || "",
        lat: item?.lat ?? null,
        lng: item?.lng ?? null,
        directionsUrl: item?.directionsUrl || "",
      }))
    : [];
  const nearbyAreas = Array.isArray(area.nearbyAreas)
    ? area.nearbyAreas.map((item) => ({
        name: {
          en: item?.name || "",
          ar: item?.nameAr || item?.name || "",
        },
        distance: item?.distance || "",
        icon: item?.icon || "",
        slug: item?.slug || "",
      }))
    : [];

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
        ar: "\u0628\u0627\u062e\u062a\u0635\u0627\u0631",
      },
      inANutshell: {
        en: area.highlights || [],
        ar: area.highlightsAr || area.highlights || [],
      },
    },
    neighbourhoodTitles: {
      overview: {
        en: "Neighborhood Overview",
        ar: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u062d\u064a",
      },
      properties: {
        en: "Property Landscape",
        ar: "\u0645\u0634\u0647\u062f \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a",
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
        ar: "\u0623\u0628\u0631\u0632 \u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u0629",
      },
      points: bulletPoints.map((point, index) => ({
        title: {
          en: `Highlight ${index + 1}`,
          ar: `\u0627\u0644\u0646\u0642\u0637\u0629 ${index + 1}`,
        },
        details: {
          en: [point],
          ar: [point],
        },
      })),
      conclusion: {
        en: `1BR from ${normalizeMoneyLabel(area.avgBuyPrice, locale, "Market pricing")} | Rent from ${normalizeMoneyLabel(area.avgRentPrice, locale, "Market rent")} | ROI ${normalizeRoiLabel(area.roi, "Market ROI")}`,
        ar: `\u0633\u0639\u0631 1 \u063a\u0631\u0641\u0629 \u0645\u0646 ${normalizeMoneyLabel(area.avgBuyPrice, locale, "\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0633\u0648\u0642")} | \u0625\u064a\u062c\u0627\u0631 \u0645\u0646 ${normalizeMoneyLabel(area.avgRentPrice, locale, "\u0625\u064a\u062c\u0627\u0631 \u062d\u0633\u0628 \u0627\u0644\u0633\u0648\u0642")} | ROI ${normalizeRoiLabel(area.roi, "ROI \u062d\u0633\u0628 \u0627\u0644\u0633\u0648\u0642")}`,
      },
    },
    translations: {
      market: {
        title: {
          en: "Market Insights",
          ar: "\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u0627\u0644\u0633\u0648\u0642",
        },
        subtitle: {
          en: `Market snapshot for ${area.name || "this area"}.`,
          ar: `\u0644\u0645\u062d\u0629 \u0633\u0648\u0642\u064a\u0629 \u0639\u0646 ${
            area.nameAr || area.name || "\u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
          }.`,
        },
      },
    },
    market: {
      rentalTrends: [],
      salesTrends: [],
      roiByType: [],
    },
    nearbyLandmarks,
    nearbyAreas,
    locationCards: {},
    faqs: buildFaqsFromArea(area),
    regionSlug: area.regionSlug || area.slug,
  };
}

function pickLang(value, locale) {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map((item) => pickLang(item, locale)).filter(Boolean);
  if (typeof value === "object") {
    if (value[locale] != null) return pickLang(value[locale], locale);
    if (value.en != null) return pickLang(value.en, locale);
    const first = Object.values(value).find((item) => typeof item === "string");
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
        (key) =>
          key === "en" ||
          key === "ar" ||
          typeof value[key] === "string" ||
          typeof value[key] === "number"
      );

    if (isBilingual) return pickLang(value, locale);

    const out = {};
    for (const [key, entry] of Object.entries(value)) {
      out[key] = deepResolve(entry, locale);
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
        const response = await fetch(
          `/api/sanity-areas?slug=${encodeURIComponent(slug)}`,
          { cache: "no-store" }
        );
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
    if (!sanityArea) return null;
    return deepResolve(normalizeSanityArea(sanityArea, lang), lang);
  }, [lang, sanityArea]);

  if (loading && !resolvedData) {
    return (
      <div className={styles.notFound} dir={isRTL ? "rtl" : "ltr"}>
        <div className={styles.notFoundInner}>
          <h1>{isRTL ? "\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644..." : "Loading..."}</h1>
        </div>
      </div>
    );
  }

  if (!resolvedData) {
    return (
      <div className={styles.notFound} dir={isRTL ? "rtl" : "ltr"}>
        <div className={styles.notFoundInner}>
          <h1>
            {isRTL
              ? "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f\u0629"
              : "Area Not Found"}
          </h1>
          <p>
            {isRTL
              ? "\u0644\u0645 \u0646\u062a\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629."
              : "We couldn't find this area."}
          </p>
          <Link href="/where-to-live" className={styles.backLink}>
            {isRTL
              ? "< \u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642"
              : "< Back to Areas"}
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
      <AreaConnections regionData={resolvedData} />
      <LocationFAQ regionData={resolvedData} />
      <RegionProjectsSection regionSlug={resolvedData.regionSlug || slug} locale={lang} />
      <div className={styles.backBar} dir={isRTL ? "rtl" : "ltr"}>
        <Link href="/where-to-live" className={styles.backLink}>
          {isRTL
            ? "< \u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u0645\u0646\u0627\u0637\u0642"
            : "< All Areas"}
        </Link>
      </div>
    </div>
  );
}
