// src/components/compare/CompareModal.jsx
// Cinematic, fully responsive redesign
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import modal from "@/styles/compare/CompareModal.module.css";
import { useCompare } from "./CompareProvider";
import { useLanguage } from "@/components/LanguageProvider";

// ── Helpers ────────────────────────────────────────────────────
function safe(v) {
  if (v == null) return "—";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (typeof v === "object") {
    for (const k of ["value", "label", "text", "en"]) {
      if (typeof v[k] === "string") return v[k];
    }
  }
  return "—";
}
function safeNum(n) { const x = Number(n); return Number.isFinite(x) ? x : null; }
function aed(n) { const x = safeNum(n); return x == null ? "—" : `AED ${x.toLocaleString("en-US")}`; }
function pct(n) { const x = safeNum(n); return x == null ? "—" : `${x}%`; }
function cap(s) { if (!s) return "—"; const t = String(s).trim(); return t.charAt(0).toUpperCase() + t.slice(1); }

function pickProjectsArray(mod) {
  if (!mod) return [];
  if (Array.isArray(mod.default)) return mod.default;
  if (Array.isArray(mod.regionProjectsIndex)) return mod.regionProjectsIndex;
  const anyArr = Object.values(mod).find((v) => Array.isArray(v));
  return Array.isArray(anyArr) ? anyArr : [];
}

function computeStats(projectsIndex, slug) {
  const items = (projectsIndex || []).filter((p) => p?.regionSlug === slug);
  const prices = items
    .map((p) => p?.startingPriceAED ?? p?.priceAED ?? null)
    .filter((v) => typeof v === "number" && !Number.isNaN(v));
  return { count: items.length, minPrice: prices.length ? Math.min(...prices) : null };
}

// ── Component ─────────────────────────────────────────────────
export default function CompareModal() {
  const compare = useCompare();
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  const [projectsIndex, setProjectsIndex] = useState([]);
  const [areasIndex, setAreasIndex] = useState([]);
  const [imgErrors, setImgErrors] = useState({});

  useEffect(() => {
    let mounted = true;
    import("@/data/regionProjectsIndex").then((mod) => {
      if (mounted) setProjectsIndex(pickProjectsArray(mod));
    }).catch(() => {});
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    let mounted = true;
    fetch("/api/sanity-areas", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : []))
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

  const [aSlug, bSlug] = compare?.selected || [];
  const lang = locale || "en";

  const a = useMemo(
    () => (aSlug ? getAreaFromSanity(areasIndex, aSlug, lang) : null),
    [aSlug, areasIndex, lang]
  );
  const b = useMemo(
    () => (bSlug ? getAreaFromSanity(areasIndex, bSlug, lang) : null),
    [areasIndex, bSlug, lang]
  );
  const aStats = useMemo(() => aSlug ? computeStats(projectsIndex, aSlug) : null, [projectsIndex, aSlug]);
  const bStats = useMemo(() => bSlug ? computeStats(projectsIndex, bSlug) : null, [projectsIndex, bSlug]);

  // Lock body scroll
  useEffect(() => {
    if (!compare?.isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") compare.close(); };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [compare?.isOpen, compare]);

  if (!compare?.isOpen) return null;

  const t = (en, ar) => (isRTL ? ar : en);

  return (
    <div className={modal.backdrop} onClick={compare.close} dir={isRTL ? "rtl" : "ltr"}>
      <div className={modal.modal} onClick={(e) => e.stopPropagation()}>

        {/* ── Header ── */}
        <div className={modal.header}>
          <div className={modal.headerMeta}>
            <span className={modal.kicker}>{t("Area Comparison", "مقارنة المناطق")}</span>
            <h2 className={modal.title}>
              <span className={modal.titleA}>{a?.name || aSlug || "—"}</span>
              <span className={modal.titleVs}>{t("vs", "مقابل")}</span>
              <span className={modal.titleB}>{b?.name || bSlug || "—"}</span>
            </h2>
          </div>
          <div className={modal.headerBtns}>
            <button className={modal.clearBtn} onClick={compare.clear}>
              {t("Clear", "مسح")}
            </button>
            <button className={modal.closeBtn} onClick={compare.close} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── Body ── */}
        {!a || !b ? (
          <div className={modal.empty}>
            <div className={modal.emptyIcon}>⚖️</div>
            <p>{t("Select two areas to compare", "اختر منطقتين للمقارنة")}</p>
          </div>
        ) : (
          <div className={modal.body}>
            {/* Two panels side by side (stack on mobile) */}
            <div className={modal.panels}>
              <Panel
                area={a} stats={aStats} slug={aSlug}
                t={t} isRTL={isRTL}
                imgErrors={imgErrors} setImgErrors={setImgErrors}
                accent="a"
              />
              <div className={modal.panelDivider}>
                <span className={modal.vsChip}>{t("VS", "مقابل")}</span>
              </div>
              <Panel
                area={b} stats={bStats} slug={bSlug}
                t={t} isRTL={isRTL}
                imgErrors={imgErrors} setImgErrors={setImgErrors}
                accent="b"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Single area panel ─────────────────────────────────────────
function Panel({ area, stats, slug, t, isRTL, imgErrors, setImgErrors, accent }) {
  const summary = area?.summary || {};
  const market  = area?.market  || {};
  const rental  = Array.isArray(market.rentalTrends) ? market.rentalTrends : [];
  const sales   = Array.isArray(market.salesTrends)  ? market.salesTrends  : [];
  const roiRows = Array.isArray(market.roiByType)     ? market.roiByType    : [];

  const imgSrc = area?.heroImage || null;
  const imgOk  = imgSrc && !imgErrors[slug];

  return (
    <div className={`${modal.panel} ${modal[`panel_${accent}`]}`}>
      {/* Hero image */}
      <div className={modal.panelHero}>
        {imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt={safe(area?.name)}
            className={modal.panelHeroImg}
            onError={() => setImgErrors((p) => ({ ...p, [slug]: true }))}
          />
        ) : (
          <div className={modal.panelHeroFallback} />
        )}
        <div className={modal.panelHeroShade} />
        <div className={modal.panelHeroText}>
          <div className={modal.panelName}>{safe(area?.name)}</div>
          {area?.summary?.location && (
            <div className={modal.panelLocation}>{safe(area.summary.location)}</div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className={modal.panelBody}>

        {/* Key metrics */}
        <Section title={t("Key Metrics", "المقاييس الرئيسية")}>
          <Row label={t("Avg Buy", "متوسط الشراء")} value={safe(summary.avgBuy)} highlight />
          <Row label={t("Avg Rent", "متوسط الإيجار")} value={safe(summary.avgRent)} />
          <Row label={t("ROI", "العائد")} value={safe(summary.roi)} gold />
        </Section>

        {/* Projects */}
        {stats && (
          <Section title={t("Projects", "المشاريع")}>
            <Row label={t("Count", "العدد")} value={stats.count > 0 ? String(stats.count) : "—"} />
            <Row label={t("From", "ابتداءً من")} value={aed(stats.minPrice)} />
          </Section>
        )}

        {/* Rental trends */}
        {rental.length > 0 && (
          <Section title={t("Rental Trends", "اتجاهات الإيجار")}>
            {rental.map((x, i) => (
              <Row key={i} label={cap(x?.type)} value={aed(x?.averageRentAED)} />
            ))}
          </Section>
        )}

        {/* Sales trends */}
        {sales.length > 0 && (
          <Section title={t("Sales Trends", "اتجاهات المبيعات")}>
            {sales.map((x, i) => (
              <Row key={i} label={cap(x?.type)} value={aed(x?.averagePriceAED)} />
            ))}
          </Section>
        )}

        {/* ROI by type */}
        {roiRows.length > 0 && (
          <Section title={t("ROI by Type", "العائد حسب النوع")}>
            {roiRows.map((x, i) => (
              <Row key={i} label={cap(x?.type)} value={pct(x?.roiPercent)} gold />
            ))}
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className={modal.section}>
      <div className={modal.sectionTitle}>{title}</div>
      {children}
    </div>
  );
}

function Row({ label, value, highlight, gold }) {
  return (
    <div className={modal.row}>
      <span className={modal.rowLabel}>{label}</span>
      <span className={`${modal.rowValue} ${highlight ? modal.rowHighlight : ""} ${gold ? modal.rowGold : ""}`}>
        {value}
      </span>
    </div>
  );
}

function getAreaFromSanity(areas, slug, locale) {
  const area = (areas || []).find((item) => item?.slug === slug);
  if (!area) return null;

  return {
    name: locale === "ar" ? area.nameAr || area.name : area.name,
    heroImage: area.heroImage || null,
    summary: {
      location: area.location || "",
      avgBuy: area.avgBuyPrice || "—",
      avgRent: area.avgRentPrice || "—",
      roi: area.roi || "—",
    },
    market: {
      rentalTrends: [],
      salesTrends: [],
      roiByType: [],
    },
  };
}
