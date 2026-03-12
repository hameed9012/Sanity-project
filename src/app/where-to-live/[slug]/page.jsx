"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { whereToLiveRegionDetails } from "@/data/whereToLiveData/whereToLiveRegionDetails";

import AreaGuideHero from "@/components/where-to-live/AreaGuideHero";
import AreaNarrative from "@/components/where-to-live/AreaNarrative";
import MarketInsights from "@/components/where-to-live/MarketInsights";
import LocationFAQ from "@/components/where-to-live/LocationFAQ";
import RegionProjectsSection from "@/components/where-to-live/RegionProjectsSection";

import styles from "@/styles/where-to-live/AreaDetailPage.module.css";

// ---------------------------------------------------------------------------
// deepResolve — recursively converts all {en, ar} objects to plain strings
// so no bilingual object ever reaches a React render call.
// ---------------------------------------------------------------------------
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
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  )
    return value;

  if (Array.isArray(value))
    return value.map((item) => deepResolve(item, locale));

  if (typeof value === "object") {
    // Bilingual leaf — object whose direct values are strings keyed "en"/"ar"
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

    // Regular nested object — recurse into each key
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = deepResolve(v, locale);
    }
    return out;
  }

  return value;
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AreaDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug || "";
  const { locale } = useLanguage();
  const lang = locale || "en";
  const isRTL = lang === "ar";

  // Deep-resolve all bilingual fields once so child components never see {en,ar} objects
  const resolvedData = useMemo(() => {
    const raw = whereToLiveRegionDetails[slug];
    if (!raw) return null;
    return deepResolve(raw, lang);
  }, [slug, lang]);

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
      {/* ── Hero ── */}
      <AreaGuideHero regionData={resolvedData} />

      {/* ── About + Highlights ── */}
      <AreaNarrative regionData={resolvedData} />

      {/* ── Market Insights ── */}
      <MarketInsights regionData={resolvedData} />

      {/* ── Location & FAQ ── */}
      <LocationFAQ regionData={resolvedData} />

      {/* ── Properties in this area ── */}
      <RegionProjectsSection regionSlug={slug} locale={lang} />

      {/* ── Back ── */}
      <div className={styles.backBar} dir={isRTL ? "rtl" : "ltr"}>
        <Link href="/where-to-live" className={styles.backLink}>
          {isRTL ? "← عرض كل المناطق" : "← All Areas"}
        </Link>
      </div>
    </div>
  );
}