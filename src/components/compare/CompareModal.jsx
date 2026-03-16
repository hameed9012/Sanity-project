"use client";

import React, { useEffect, useMemo, useState } from "react";
import modal from "@/styles/compare/CompareModal.module.css";
import { useCompare } from "./CompareProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

function safe(value) {
  if (value == null || value === "") return "-";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (typeof value === "object") {
    for (const key of ["value", "label", "text", "en"]) {
      if (typeof value[key] === "string" && value[key].trim()) return value[key];
    }
  }
  return "-";
}

function safeNum(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function formatAed(value) {
  const numeric = safeNum(value);
  return numeric == null ? "-" : `AED ${numeric.toLocaleString("en-US")}`;
}

function formatPercent(value) {
  const numeric = safeNum(value);
  return numeric == null ? "-" : `${numeric}%`;
}

function titleCase(value) {
  if (!value) return "-";
  const text = String(value).trim();
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : "-";
}

function computeStats(projectsIndex, slug) {
  const items = (projectsIndex || []).filter((project) => project?.regionSlug === slug);
  const prices = items
    .map((project) => project?.startingPriceAED ?? project?.priceAED ?? null)
    .filter((value) => typeof value === "number" && !Number.isNaN(value) && value >= 10_000);

  return {
    count: items.length,
    minPrice: prices.length ? Math.min(...prices) : null,
  };
}

function getAreaFromSanity(areas, slug, locale) {
  const area = (areas || []).find((item) => item?.slug === slug);
  if (!area) return null;

  return {
    name: locale === "ar" ? area.nameAr || area.name : area.name,
    heroImage: area.heroImage || null,
    summary: {
      location:
        locale === "ar"
          ? area.locationAr || area.location || ""
          : area.location || area.locationAr || "",
      avgBuy:
        locale === "ar"
          ? area.avgBuyPriceAr || area.avgBuyPrice || "-"
          : area.avgBuyPrice || area.avgBuyPriceAr || "-",
      avgRent:
        locale === "ar"
          ? area.avgRentPriceAr || area.avgRentPrice || "-"
          : area.avgRentPrice || area.avgRentPriceAr || "-",
      roi: area.roi || "-",
    },
    market: {
      rentalTrends: Array.isArray(area?.market?.rentalTrends) ? area.market.rentalTrends : [],
      salesTrends: Array.isArray(area?.market?.salesTrends) ? area.market.salesTrends : [],
      roiByType: Array.isArray(area?.market?.roiByType) ? area.market.roiByType : [],
    },
  };
}

function Block({ title, children }) {
  return (
    <section className={modal.block}>
      <div className={modal.blockTitle}>{title}</div>
      {children}
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className={modal.pillRow}>
      <span className={modal.pillLabel}>{label}</span>
      <span className={modal.pillValue}>{value}</span>
    </div>
  );
}

function Panel({ area, stats, slug, t, imageErrors, setImageErrors }) {
  const summary = area?.summary || {};
  const market = area?.market || {};
  const rentalRows = Array.isArray(market.rentalTrends) ? market.rentalTrends : [];
  const salesRows = Array.isArray(market.salesTrends) ? market.salesTrends : [];
  const roiRows = Array.isArray(market.roiByType) ? market.roiByType : [];
  const imageSrc = area?.heroImage || null;
  const imageOk = imageSrc && !imageErrors[slug];

  return (
    <article className={modal.panel}>
      <div className={modal.hero}>
        {imageOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={safe(area?.name)}
            className={modal.heroImg}
            onError={() => setImageErrors((prev) => ({ ...prev, [slug]: true }))}
          />
        ) : (
          <div className={modal.heroFallback} />
        )}
        <div className={modal.heroShade} />
        <div className={modal.heroContent}>
          <div className={modal.areaName}>{safe(area?.name)}</div>
          <div className={modal.areaLocation}>{safe(summary.location)}</div>
        </div>
      </div>

      <div className={modal.body}>
        <Block title={t("Key Metrics", "المقاييس الرئيسية")}>
          <Row label={t("Avg Buy", "متوسط الشراء")} value={safe(summary.avgBuy)} />
          <Row label={t("Avg Rent", "متوسط الإيجار")} value={safe(summary.avgRent)} />
          <Row label={t("ROI", "العائد")} value={safe(summary.roi)} />
        </Block>

        <Block title={t("Projects", "المشاريع")}>
          <Row label={t("Count", "العدد")} value={stats?.count ? String(stats.count) : "-"} />
          <Row label={t("From", "ابتداء من")} value={formatAed(stats?.minPrice)} />
        </Block>

        {rentalRows.length > 0 && (
          <Block title={t("Rental Trends", "اتجاهات الإيجار")}>
            {rentalRows.map((row, index) => (
              <Row
                key={`rent-${index}`}
                label={titleCase(row?.type)}
                value={formatAed(row?.averageRentAED)}
              />
            ))}
          </Block>
        )}

        {salesRows.length > 0 && (
          <Block title={t("Sales Trends", "اتجاهات المبيعات")}>
            {salesRows.map((row, index) => (
              <Row
                key={`sales-${index}`}
                label={titleCase(row?.type)}
                value={formatAed(row?.averagePriceAED)}
              />
            ))}
          </Block>
        )}

        {roiRows.length > 0 && (
          <Block title={t("ROI by Type", "العائد حسب النوع")}>
            {roiRows.map((row, index) => (
              <Row
                key={`roi-${index}`}
                label={titleCase(row?.type)}
                value={formatPercent(row?.roiPercent)}
              />
            ))}
          </Block>
        )}
      </div>
    </article>
  );
}

export default function CompareModal() {
  const compare = useCompare();
  const { locale } = useLanguage();
  const { allProjects } = useAllProjects();
  const isRTL = locale === "ar";
  const isOpen = Boolean(compare?.isOpen);
  const selected = Array.isArray(compare?.selected) ? compare.selected : [];
  const [aSlug, bSlug] = selected;
  const t = (en, ar) => (isRTL ? ar : en);

  const [areasIndex, setAreasIndex] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    let mounted = true;
    fetch("/api/sanity-areas", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => {
        if (mounted) setAreasIndex(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (mounted) setAreasIndex([]);
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") compare.close();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [compare, isOpen]);
  const areaA = useMemo(
    () => (aSlug ? getAreaFromSanity(areasIndex, aSlug, locale || "en") : null),
    [aSlug, areasIndex, locale]
  );
  const areaB = useMemo(
    () => (bSlug ? getAreaFromSanity(areasIndex, bSlug, locale || "en") : null),
    [bSlug, areasIndex, locale]
  );
  const statsA = useMemo(
    () => (aSlug ? computeStats(allProjects, aSlug) : null),
    [allProjects, aSlug]
  );
  const statsB = useMemo(
    () => (bSlug ? computeStats(allProjects, bSlug) : null),
    [allProjects, bSlug]
  );

  if (!isOpen) return null;

  return (
    <div className={modal.overlay} onClick={compare.close} dir={isRTL ? "rtl" : "ltr"}>
      <div className={modal.shell} onClick={(event) => event.stopPropagation()}>
        <header className={modal.header}>
          <div className={modal.headerLeft}>
            <span className={modal.kicker}>{t("Area Comparison", "مقارنة المناطق")}</span>
            <div className={modal.title}>{t("Compare Lifestyle and Value", "قارن أسلوب الحياة والقيمة")}</div>
            <div className={modal.subTitle}>
              <span>{areaA?.name || aSlug || "-"}</span>
              <span className={modal.vs}>{t("VS", "مقابل")}</span>
              <span>{areaB?.name || bSlug || "-"}</span>
            </div>
          </div>
          <div className={modal.headerActions}>
            <button type="button" className={modal.clearBtn} onClick={compare.clear}>
              {t("Clear", "مسح")}
            </button>
            <button type="button" className={modal.closeBtn} onClick={compare.close} aria-label="Close">
              X
            </button>
          </div>
        </header>

        {!areaA || !areaB ? (
          <div className={modal.empty}>{t("Select two areas to compare.", "اختر منطقتين للمقارنة.")}</div>
        ) : (
          <div className={modal.grid}>
            <div className={modal.gridHint}>{t("Scroll to compare every metric", "مرر لمقارنة كل المؤشرات")}</div>
            <Panel
              area={areaA}
              stats={statsA}
              slug={aSlug}
              t={t}
              imageErrors={imageErrors}
              setImageErrors={setImageErrors}
            />
            <div className={modal.divider} />
            <Panel
              area={areaB}
              stats={statsB}
              slug={bSlug}
              t={t}
              imageErrors={imageErrors}
              setImageErrors={setImageErrors}
            />
          </div>
        )}
      </div>
    </div>
  );
}
