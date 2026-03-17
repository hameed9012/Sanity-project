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
import staticAreas from "../../../../areas.json";

function pickLocalized(enValue, arValue, locale) {
  return locale === "ar" ? arValue || enValue || "" : enValue || arValue || "";
}

const STATIC_AREAS = Array.isArray(staticAreas) ? staticAreas : [];
const STATIC_AREA_MAP = STATIC_AREAS.reduce((map, area) => {
  if (area?.slug && !map.has(area.slug)) map.set(area.slug, area);
  return map;
}, new Map());

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

function pickStaticValue(staticArea, key, locale) {
  if (!staticArea) return "";
  const suffix = locale === "ar" ? "ar" : "en";
  const primary = staticArea[`${key}_${suffix}`];
  if (primary) return primary;
  return staticArea[`${key}_en`] || staticArea[`${key}_ar`] || "";
}

function splitToBullets(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).map((v) => v.trim()).filter(Boolean);

  const raw = String(value).trim();
  if (!raw) return [];

  const hasDelimiters = /[\n•\u2022|]/.test(raw);
  if (hasDelimiters) {
    return raw
      .split(/[\n•\u2022|]+/)
      .map((v) => v.trim())
      .filter(Boolean);
  }

  const withBreaks = raw.replace(/([.!?؟؛])\s+/g, "$1\n");
  return withBreaks
    .split("\n")
    .map((v) => v.trim())
    .filter(Boolean);
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

function normalizeSanityArea(area, locale, staticArea) {
  if (!area && !staticArea) return null;

  const nameEn = area?.name || pickStaticValue(staticArea, "name", "en");
  const nameAr =
    area?.nameAr || pickStaticValue(staticArea, "name", "ar") || nameEn;

  const taglineEn = area?.tagline || pickStaticValue(staticArea, "tagline", "en");
  const taglineAr =
    area?.taglineAr || pickStaticValue(staticArea, "tagline", "ar") || taglineEn;

  const descriptionEn =
    area?.description || pickStaticValue(staticArea, "description", "en");
  const descriptionAr =
    area?.descriptionAr || pickStaticValue(staticArea, "description", "ar") || descriptionEn;

  const locationEn =
    area?.location || pickStaticValue(staticArea, "location", "en");
  const locationAr =
    area?.locationAr || pickStaticValue(staticArea, "location", "ar") || locationEn;

  const avgBuyEn =
    area?.avgBuyPrice || pickStaticValue(staticArea, "avgBuy", "en");
  const avgBuyAr =
    area?.avgBuyPriceAr || pickStaticValue(staticArea, "avgBuy", "ar") || avgBuyEn;
  const avgRentEn =
    area?.avgRentPrice || pickStaticValue(staticArea, "avgRent", "en");
  const avgRentAr =
    area?.avgRentPriceAr || pickStaticValue(staticArea, "avgRent", "ar") || avgRentEn;
  const roiEn = area?.roi || pickStaticValue(staticArea, "roi", "en");
  const roiAr = area?.roiAr || pickStaticValue(staticArea, "roi", "ar") || roiEn;

  const name = pickLocalized(nameEn, nameAr, locale);
  const tagline = pickLocalized(taglineEn, taglineAr, locale);
  const description = pickLocalized(descriptionEn, descriptionAr, locale);
  const location = pickLocalized(locationEn, locationAr, locale);

  const avgBuy = normalizeMoneyLabel(
    locale === "ar" ? avgBuyAr : avgBuyEn,
    locale,
    ""
  );
  const avgRent = normalizeMoneyLabel(
    locale === "ar" ? avgRentAr : avgRentEn,
    locale,
    ""
  );
  const roi = normalizeRoiLabel(locale === "ar" ? roiAr : roiEn, "");

  const rawHighlights =
    (locale === "ar" ? area?.highlightsAr : area?.highlights) ||
    area?.highlights ||
    area?.highlightsAr ||
    (locale === "ar" ? staticArea?.highlights_ar : staticArea?.highlights_en) ||
    staticArea?.highlights_en ||
    staticArea?.highlights_ar ||
    [];

  const bulletPoints = splitToBullets(rawHighlights);
  const fallbackBullets = bulletPoints.length
    ? bulletPoints
    : splitToBullets(description);

  const nearbyLandmarks = Array.isArray(area?.nearbyLandmarks)
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
  const nearbyAreas = Array.isArray(area?.nearbyAreas)
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

  const heroImage = area?.heroImage || staticArea?.heroImage || "";
  const gallerySlides =
    (Array.isArray(area?.gallerySlides) && area.gallerySlides.length
      ? area.gallerySlides
      : Array.isArray(area?.gallery) && area.gallery.length
      ? area.gallery
      : Array.isArray(staticArea?.gallery) && staticArea.gallery.length
      ? staticArea.gallery
      : heroImage
      ? [heroImage]
      : []);

  const faqSeed = {
    name: nameEn || name,
    nameAr,
    location: locationEn || location,
    avgBuyPrice: avgBuyEn || avgBuy,
    avgRentPrice: avgRentEn || avgRent,
    roi: roiEn || roi,
  };

  const areaSlug = area?.slug || staticArea?.slug || "";

  return {
    slug: areaSlug,
    name,
    nameEn,
    nameAr,
    location,
    locationEn,
    locationAr,
    avgBuy,
    avgRent,
    roi,
    heroImage,
    gallerySlides,
    summary: {
      name,
      location,
      avgBuy,
      avgRent,
      roi,
    },
    highlights: {
      about: {
        en: descriptionEn || "",
        ar: descriptionAr || descriptionEn || "",
      },
      nutshellTitle: {
        en: "In a Nutshell",
        ar: "\u0628\u0627\u062e\u062a\u0635\u0627\u0631",
      },
      inANutshell: {
        en: fallbackBullets,
        ar: fallbackBullets,
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
        en: taglineEn || descriptionEn || "",
        ar: taglineAr || descriptionAr || taglineEn || descriptionEn || "",
      },
      propertiesOverview: {
        en: descriptionEn || taglineEn || "",
        ar: descriptionAr || taglineAr || descriptionEn || taglineEn || "",
      },
    },
    investmentHighlights: {
      title: {
        en: "Investment Highlights",
        ar: "\u0623\u0628\u0631\u0632 \u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u0629",
      },
      points: fallbackBullets.map((point, index) => ({
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
        en: `1BR from ${normalizeMoneyLabel(avgBuyEn, locale, "Market pricing")} | Rent from ${normalizeMoneyLabel(avgRentEn, locale, "Market rent")} | ROI ${normalizeRoiLabel(roiEn, "Market ROI")}`,
        ar: `\u0633\u0639\u0631 1 \u063a\u0631\u0641\u0629 \u0645\u0646 ${normalizeMoneyLabel(avgBuyAr, locale, "\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0633\u0648\u0642")} | \u0625\u064a\u062c\u0627\u0631 \u0645\u0646 ${normalizeMoneyLabel(avgRentAr, locale, "\u0625\u064a\u062c\u0627\u0631 \u062d\u0633\u0628 \u0627\u0644\u0633\u0648\u0642")} | ROI ${normalizeRoiLabel(roiAr, "ROI \u062d\u0633\u0628 \u0627\u0644\u0633\u0648\u0642")}`,
      },
    },
    translations: {
      market: {
        title: {
          en: "Market Insights",
          ar: "\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u0627\u0644\u0633\u0648\u0642",
        },
        subtitle: {
          en: `Market snapshot for ${nameEn || "this area"}.`,
          ar: `\u0644\u0645\u062d\u0629 \u0633\u0648\u0642\u064a\u0629 \u0639\u0646 ${
            nameAr || nameEn || "\u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
          }.`,
        },
      },
    },
    market: {
      rentalTrends: avgRent
        ? [
            {
              type: { en: "Area Average", ar: "\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0645\u0646\u0637\u0642\u0629" },
              averageRentAED: avgRent,
            },
          ]
        : [],
      salesTrends: avgBuy
        ? [
            {
              type: { en: "Area Average", ar: "\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0645\u0646\u0637\u0642\u0629" },
              averagePriceAED: avgBuy,
            },
          ]
        : [],
      roiByType: roi
        ? [
            {
              type: { en: "Area ROI", ar: "\u0639\u0627\u0626\u062f \u0627\u0644\u0645\u0646\u0637\u0642\u0629" },
              roiPercent: roi,
            },
          ]
        : [],
    },
    nearbyLandmarks,
    nearbyAreas,
    locationCards: area?.locationCards || {},
    faqs: Array.isArray(area?.faqs) && area.faqs.length ? area.faqs : buildFaqsFromArea(faqSeed),
    regionSlug: area?.regionSlug || staticArea?.regionSlug || areaSlug,
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
  const staticArea = useMemo(() => STATIC_AREA_MAP.get(slug), [slug]);

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
    if (!sanityArea && !staticArea) return null;
    return deepResolve(normalizeSanityArea(sanityArea, lang, staticArea), lang);
  }, [lang, sanityArea, staticArea]);

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
