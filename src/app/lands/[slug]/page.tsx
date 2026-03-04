"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { landsData, pickLang, getLandThumbnail } from "@/data/lands/landData";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

function normalizeLocale(locale: string | undefined) {
  return String(locale || "en").toLowerCase().startsWith("ar") ? "ar" : "en";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sanityToLand(p: any) {
  const en = p.data?.en || {};
  const ar = p.data?.ar || {};
  const project = en?.project || {};
  const projectAr = ar?.project || {};
  const slug = p.slug || p.data?._id;
  return {
    slug, _fromSanity: true,
    type: (project?.type || "residential").toLowerCase(),
    status: "available",
    title: { en: project?.name || slug, ar: projectAr?.name || project?.name || slug },
    subtitle: { en: project?.location || "", ar: projectAr?.location || "" },
    description: { en: en?.intro?.paragraphs?.[0] || "", ar: ar?.intro?.paragraphs?.[0] || "" },
    area: { en: project?.units || "", ar: projectAr?.units || "" },
    price: { en: project?.startingPrice || "", ar: projectAr?.startingPrice || "" },
    completion: { en: project?.completionDate || "", ar: projectAr?.completionDate || "" },
    developer: project?.developer || p.developer || "",
    gallery: Array.isArray(en?.gallery?.slides)
      ? en.gallery.slides.map((s: any) => s?.url || s).filter(Boolean) : [],
    brochureUrl: en?.floorPlans?.brochureHref || "",
    masterplanUrl: "",
    details: { en: [], ar: [] },
    features: {
      en: Array.isArray(en?.amenities?.amenities)
        ? en.amenities.amenities.map((a: any) => a?.label || "").filter(Boolean) : [],
      ar: [],
    },
    nearby: [],
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeArr(obj: any, loc: string): string[] {
  if (!obj) return [];
  const v = obj[loc] || obj.en || obj.ar;
  return Array.isArray(v) ? v.filter(Boolean) : [];
}

export default function LandDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug ?? "");
  const router = useRouter();
  const { locale: ctxLocale } = useLanguage();
  const locale = normalizeLocale(ctxLocale);
  const isRTL = locale === "ar";
  const { allProjects } = useAllProjects();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const land: any = useMemo(() => {
    const sanityLand = allProjects
      .filter((p: any) => {
        const s = (p.status || p.devStatus || "").toLowerCase();
        return s === "land" || s === "lands" || (p.data?.status || "").toLowerCase() === "land";
      })
      .map(sanityToLand)
      .find((l: any) => l.slug === slug);
    if (sanityLand) return sanityLand;
    return (landsData as any[]).find((l) => (l.slug || l.id) === slug) || null;
  }, [allProjects, slug]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => { setActiveIndex(0); setActiveTab("overview"); }, [slug]);

  if (!land) {
    return (
      <div style={{ padding: "160px 40px 80px", textAlign: "center", minHeight: "100vh", background: "#fbfaf7" }}>
        <p style={{ color: "#c9a26a", fontWeight: 900, letterSpacing: "0.15em", fontSize: 12, textTransform: "uppercase", marginBottom: 16 }}>
          Al Rasikhoon
        </p>
        <h2 style={{ fontSize: 28, fontWeight: 900, color: "#0b0b0c", marginBottom: 24 }}>Project not found</h2>
        <Link href="/lands" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#0b0b0c", fontWeight: 900, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", padding: "12px 24px", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 999, background: "rgba(255,255,255,0.82)" }}>
          ← Back to Lands
        </Link>
      </div>
    );
  }

  const title = String(pickLang(land.title, locale) || slug);
  const subtitle = pickLang(land.subtitle, locale);
  const description = pickLang(land.description, locale);
  const price = pickLang(land.price, locale);
  const area = pickLang(land.area, locale);
  const completion = land.completion ? pickLang(land.completion, locale) : "";
  const gallery: string[] = Array.isArray(land.gallery) ? land.gallery.filter(Boolean) : [];
  const mainImage = gallery[activeIndex] || getLandThumbnail(land);
  const hasGallery = gallery.length > 0;
  const details = safeArr(land.details, locale);
  const features = safeArr(land.features, locale);
  const nearby: any[] = Array.isArray(land.nearby) ? land.nearby : [];
  const masterplanUrl: string = land.brochureUrl || land.masterplanUrl || land.contact?.brochureUrl || "";

  const typeLabel = (land.type || "").toLowerCase() === "industrial"
    ? (isRTL ? "صناعي" : "Industrial") : (isRTL ? "سكني" : "Residential");
  const statusLabel = (land.status || "").toLowerCase() === "available"
    ? (isRTL ? "متاح" : "Available") : (isRTL ? "غير متاح" : "Unavailable");

  const tabs = [
    { id: "overview", en: "Overview", ar: "نظرة عامة" },
    { id: "details", en: "Details", ar: "تفاصيل" },
    { id: "features", en: "Features", ar: "مزايا" },
    { id: "nearby", en: "Nearby", ar: "بالقرب" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro');

        .land-page-root {
          min-height: 100vh;
          background: linear-gradient(180deg,#fbfaf7 0%,#fff 50%,#fbfaf7 100%);
          padding-top: 92px;
        }

        /* ── Back bar ───────────────────────────────────── */
        .land-back-bar {
          position: sticky;
          top: 92px;
          z-index: 900;
          background: rgba(251,250,247,0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .land-back-inner {
          width: min(1240px, 92%);
          margin: 0 auto;
          padding: 13px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .land-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(11,11,12,0.62);
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
          font-weight: 900;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: color 0.2s;
          padding: 0;
        }
        .land-back-btn:hover { color: #c9a26a; }
        .land-back-arrow {
          width: 28px; height: 28px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: rgba(0,0,0,0.05);
          font-size: 15px;
          transition: background 0.2s;
        }
        .land-back-btn:hover .land-back-arrow { background: rgba(201,162,106,0.15); }
        .land-back-brand {
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
          font-weight: 900;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(201,162,106,0.8);
        }

        /* ── Main layout ─────────────────────────────────── */
        .land-main {
          width: min(1240px,92%);
          margin: 0 auto;
          padding: 40px 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        @media(max-width:900px){
          .land-main { grid-template-columns:1fr; gap:32px; }
        }

        /* ── Gallery ────────────────────────────────────── */
        .land-gallery-main {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #f3f0ea;
          aspect-ratio: 4/3;
          box-shadow: 0 18px 44px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.06);
        }
        .land-gallery-fallback {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg,#fbfaf7,#f1ece2);
        }
        .land-gallery-fallback-title {
          font-weight: 900;
          font-size: 18px;
          color: rgba(11,11,12,0.6);
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }
        .land-nav-btn {
          position: absolute; top: 50%;
          transform: translateY(-50%);
          width: 42px; height: 42px;
          border-radius: 50%;
          background: rgba(11,11,12,0.55);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          color: #fff;
          font-size: 22px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
          z-index: 2;
        }
        .land-nav-btn:hover { background: rgba(201,162,106,0.75); }
        .land-nav-prev { left: 12px; }
        .land-nav-next { right: 12px; }
        .land-counter {
          position: absolute; bottom: 12px; right: 14px;
          background: rgba(11,11,12,0.6);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 11px; font-weight: 900; letter-spacing: 0.1em;
          padding: 4px 10px;
          border-radius: 999px;
          z-index: 2;
        }
        .land-thumbs {
          display: flex;
          gap: 8px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .land-thumb-btn {
          position: relative;
          width: 76px; height: 56px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          padding: 0;
          background: #f3f0ea;
          flex-shrink: 0;
          transition: border-color 0.2s;
        }
        .land-thumb-btn.active { border-color: #c9a26a; }

        /* brand strip */
        .land-brand-strip {
          margin-top: 16px;
          padding: 14px 20px;
          background: linear-gradient(135deg,rgba(11,11,12,0.96),rgba(0,0,0,0.94));
          border-radius: 14px;
          border: 1px solid rgba(201,162,106,0.25);
          text-align: center;
          font-weight: 900;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(201,162,106,0.9);
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }

        /* ── Right panel ─────────────────────────────────── */
        .land-badge-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .land-badge {
          display: inline-flex; align-items: center;
          padding: 6px 14px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 30%, rgba(219,196,126,0.9), rgba(201,162,106,0.9));
          color: rgba(11,11,12,0.9);
          font-weight: 900; font-size: 10px;
          letter-spacing: 0.2em; text-transform: uppercase;
          border: 1px solid rgba(201,162,106,0.4);
        }
        .land-title {
          margin: 0 0 6px;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
          font-size: clamp(22px,3vw,34px);
          font-weight: 900;
          color: rgba(11,11,12,0.92);
          letter-spacing: 0.01em;
          line-height: 1.15;
        }
        .land-subtitle {
          margin: 0 0 24px;
          font-size: 14px;
          color: rgba(11,11,12,0.55);
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
          line-height: 1.55;
        }

        /* stats */
        .land-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          margin-bottom: 28px;
        }
        @media(max-width:480px){ .land-stats { grid-template-columns: 1fr 1fr; } }
        .land-stat {
          border-radius: 14px;
          padding: 14px 10px;
          background: linear-gradient(135deg,rgba(11,11,12,0.96),rgba(0,0,0,0.92));
          border: 1px solid rgba(201,162,106,0.18);
          text-align: center;
        }
        .land-stat-label {
          font-size: 9px; font-weight: 900;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 6px;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }
        .land-stat-value {
          font-size: 14px; font-weight: 900;
          color: #fff;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }

        /* tabs */
        .land-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 2px;
        }
        .land-tabs::-webkit-scrollbar { display: none; }
        .land-tab {
          flex-shrink: 0;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.07);
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(10px);
          cursor: pointer;
          font-weight: 900; font-size: 11px;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(11,11,12,0.55);
          transition: all 0.2s;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
          box-shadow: 0 8px 22px rgba(0,0,0,0.035);
        }
        .land-tab:hover { border-color: rgba(201,162,106,0.35); color: rgba(11,11,12,0.85); }
        .land-tab.active {
          background: linear-gradient(135deg,rgba(201,162,106,0.32),rgba(162,123,67,0.22));
          border-color: rgba(201,162,106,0.55);
          color: rgba(11,11,12,0.88);
          box-shadow: 0 14px 34px rgba(0,0,0,0.06);
        }

        /* tab panels */
        .land-panel {
          border-radius: 18px;
          border: 1px solid rgba(0,0,0,0.06);
          background: rgba(255,255,255,0.9);
          padding: 22px;
          min-height: 200px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.04);
        }
        .land-panel-h {
          margin: 0 0 14px;
          font-size: 13px; font-weight: 900;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(11,11,12,0.4);
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }
        .land-panel-p {
          margin: 0;
          color: rgba(11,11,12,0.62);
          font-size: 14px; line-height: 1.75;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }
        .land-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 18px;
        }
        .land-info-cell {
          background: #fbfaf7;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 12px;
          padding: 12px 14px;
        }
        .land-info-label {
          font-size: 9px; font-weight: 900;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(11,11,12,0.35);
          margin-bottom: 4px;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }
        .land-info-value {
          font-size: 14px; font-weight: 900;
          color: rgba(11,11,12,0.85);
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }
        .land-info-value.gold { color: #a27b43; }

        /* features */
        .land-feature-chips {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .land-chip {
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(201,162,106,0.1);
          border: 1px solid rgba(201,162,106,0.25);
          color: rgba(11,11,12,0.75);
          font-size: 12px; font-weight: 700;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
          letter-spacing: 0.04em;
        }

        /* details list */
        .land-detail-list { list-style: none; padding: 0; margin: 0; }
        .land-detail-item {
          display: flex; gap: 12px; align-items: flex-start;
          padding: 11px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          color: rgba(11,11,12,0.62);
          font-size: 14px; line-height: 1.6;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }
        .land-detail-item:last-child { border-bottom: none; }
        .land-detail-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #c9a26a;
          flex-shrink: 0;
          margin-top: 7px;
        }

        /* nearby */
        .land-nearby-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
        }
        .land-nearby-card {
          background: #fbfaf7;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 12px;
          padding: 12px 14px;
        }
        .land-nearby-name {
          font-size: 13px; font-weight: 700;
          color: rgba(11,11,12,0.85);
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }
        .land-nearby-dist {
          font-size: 12px;
          color: rgba(11,11,12,0.45);
          margin-top: 2px;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }

        /* empty */
        .land-empty {
          color: rgba(11,11,12,0.4);
          font-size: 14px; font-style: italic;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }

        /* CTAs */
        .land-ctas {
          display: flex; gap: 10px; margin-top: 22px; flex-wrap: wrap;
        }
        .land-cta-primary {
          flex: 1 1 140px;
          display: flex; align-items: center; justify-content: center;
          padding: 14px 20px;
          border-radius: 999px;
          background: linear-gradient(135deg,rgba(201,162,106,0.9),rgba(162,123,67,0.9));
          border: 1px solid rgba(201,162,106,0.6);
          color: rgba(11,11,12,0.92);
          font-weight: 900; font-size: 11px;
          letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 12px 28px rgba(201,162,106,0.25);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
          cursor: pointer;
        }
        .land-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 18px 38px rgba(201,162,106,0.32); }
        .land-cta-wa {
          flex: 1 1 140px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 20px;
          border-radius: 999px;
          background: #25d366;
          border: 1px solid rgba(0,0,0,0.08);
          color: #fff;
          font-weight: 900; font-size: 11px;
          letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 12px 28px rgba(37,211,102,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'Neue Haas Grotesk Display Pro', system-ui, Arial, sans-serif;
        }
        .land-cta-wa:hover { transform: translateY(-2px); box-shadow: 0 18px 38px rgba(37,211,102,0.28); }
      `}</style>

      <div className="land-page-root" dir={isRTL ? "rtl" : "ltr"}>

        {/* ── Back bar ── */}
        <div className="land-back-bar">
          <div className="land-back-inner">
            <button className="land-back-btn" onClick={() => router.back()}>
              <span className="land-back-arrow">{isRTL ? "→" : "←"}</span>
              {isRTL ? "العودة إلى الأراضي" : "Back to Lands"}
            </button>
            <span className="land-back-brand">Al Rasikhoon</span>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="land-main">

          {/* LEFT — Gallery */}
          <div>
            <div className="land-gallery-main">
              {mainImage ? (
                <Image src={mainImage} alt={title} fill style={{ objectFit: "cover" }} unoptimized />
              ) : (
                <div className="land-gallery-fallback">
                  <span className="land-gallery-fallback-title">{title}</span>
                </div>
              )}

              {hasGallery && gallery.length > 1 && (
                <>
                  <button className="land-nav-btn land-nav-prev"
                    onClick={() => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length)}>‹</button>
                  <button className="land-nav-btn land-nav-next"
                    onClick={() => setActiveIndex((i) => (i + 1) % gallery.length)}>›</button>
                  <div className="land-counter">{activeIndex + 1} / {gallery.length}</div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {hasGallery && gallery.length > 1 && (
              <div className="land-thumbs">
                {gallery.slice(0, 8).map((src, i) => (
                  <button key={i} className={`land-thumb-btn${i === activeIndex ? " active" : ""}`}
                    onClick={() => setActiveIndex(i)}>
                    <Image src={src} alt={`${title} ${i + 1}`} fill style={{ objectFit: "cover" }} unoptimized />
                  </button>
                ))}
              </div>
            )}

            <div className="land-brand-strip">
              {isRTL ? "الراسخون للعقارات" : "AL RASIKHOON REAL ESTATE"}
            </div>
          </div>

          {/* RIGHT — Details */}
          <div>
            <div className="land-badge-row">
              <span className="land-badge">{isRTL ? "الراسخون" : "Al Rasikhoon"}</span>
            </div>

            <h1 className="land-title">{title}</h1>
            {subtitle && <p className="land-subtitle">{subtitle}</p>}

            {/* Stats */}
            <div className="land-stats">
              <div className="land-stat">
                <div className="land-stat-label">{isRTL ? "النوع" : "Type"}</div>
                <div className="land-stat-value">{typeLabel}</div>
              </div>
              <div className="land-stat">
                <div className="land-stat-label">{isRTL ? "المساحة" : "Area"}</div>
                <div className="land-stat-value">{area || "—"}</div>
              </div>
              <div className="land-stat">
                <div className="land-stat-label">{isRTL ? "الحالة" : "Status"}</div>
                <div className="land-stat-value">{statusLabel}</div>
              </div>
            </div>

            {/* Tab bar */}
            <div className="land-tabs">
              {tabs.map((t) => (
                <button key={t.id}
                  className={`land-tab${activeTab === t.id ? " active" : ""}`}
                  onClick={() => setActiveTab(t.id)}>
                  {isRTL ? t.ar : t.en}
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div className="land-panel">
              {activeTab === "overview" && (
                <>
                  <p className="land-panel-h">{isRTL ? "ملخص" : "Summary"}</p>
                  <p className="land-panel-p">{description || (isRTL ? "لا يوجد وصف متاح." : "No description available.")}</p>
                  <div className="land-info-grid">
                    {price && (
                      <div className="land-info-cell">
                        <div className="land-info-label">{isRTL ? "السعر" : "Price"}</div>
                        <div className="land-info-value gold">{price}</div>
                      </div>
                    )}
                    {completion && (
                      <div className="land-info-cell">
                        <div className="land-info-label">{isRTL ? "حالة الإنجاز" : "Completion"}</div>
                        <div className="land-info-value">{completion}</div>
                      </div>
                    )}
                    {land.developer && (
                      <div className="land-info-cell">
                        <div className="land-info-label">{isRTL ? "المطور" : "Developer"}</div>
                        <div className="land-info-value">{land.developer}</div>
                      </div>
                    )}
                    {area && (
                      <div className="land-info-cell">
                        <div className="land-info-label">{isRTL ? "المساحة" : "Area"}</div>
                        <div className="land-info-value">{area}</div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {activeTab === "details" && (
                <>
                  <p className="land-panel-h">{isRTL ? "تفاصيل المشروع" : "Project Details"}</p>
                  {details.length ? (
                    <ul className="land-detail-list">
                      {details.map((d, i) => (
                        <li key={i} className="land-detail-item">
                          <span className="land-detail-dot" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  ) : <p className="land-empty">{isRTL ? "لا تفاصيل متاحة." : "No details available."}</p>}
                </>
              )}

              {activeTab === "features" && (
                <>
                  <p className="land-panel-h">{isRTL ? "المميزات" : "Features & Amenities"}</p>
                  {features.length ? (
                    <div className="land-feature-chips">
                      {features.map((f, i) => <span key={i} className="land-chip">{f}</span>)}
                    </div>
                  ) : <p className="land-empty">{isRTL ? "لا مميزات متاحة." : "No features listed."}</p>}
                </>
              )}

              {activeTab === "nearby" && (
                <>
                  <p className="land-panel-h">{isRTL ? "بالقرب من المشروع" : "Nearby"}</p>
                  {nearby.length ? (
                    <div className="land-nearby-grid">
                      {nearby.map((n, i) => (
                        <div key={i} className="land-nearby-card">
                          <div className="land-nearby-name">{pickLang(n.name, locale)}</div>
                          <div className="land-nearby-dist">{pickLang(n.distance, locale)}</div>
                        </div>
                      ))}
                    </div>
                  ) : <p className="land-empty">{isRTL ? "لا معلومات عن المناطق القريبة." : "No nearby info available."}</p>}
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="land-ctas">
              {masterplanUrl && (
                <a href={masterplanUrl} target="_blank" rel="noopener noreferrer" className="land-cta-primary">
                  {isRTL ? "عرض المخطط العام" : "View Masterplan"}
                </a>
              )}
              <a href="https://wa.me/971XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="land-cta-wa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {isRTL ? "واتساب" : "WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}