"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import styles from "@/styles/lands/lands.module.css";
import { pickLang, getLandThumbnail } from "@/data/lands/landData";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

const PAGE_SIZE = 9;

function normalizeLocale(locale) {
  const s = String(locale || "en").toLowerCase();
  return s.startsWith("ar") ? "ar" : "en";
}

function sanityToLand(p) {
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
    developer: project?.developer || p.developer || "",
    gallery: Array.isArray(en?.gallery?.slides)
      ? en.gallery.slides.map((s) => s?.url || s).filter(Boolean) : [],
  };
}

export default function LandsPage() {
  const { locale: ctxLocale } = useLanguage();
  const locale = normalizeLocale(ctxLocale);
  const isRTL = locale === "ar";
  const { allProjects, loading } = useAllProjects();

  // ✅ Sanity-only — no static landsData fallback
  const allLands = React.useMemo(() => {
    return allProjects
      .filter((p) => {
        const s = (p.status || p.devStatus || "").toLowerCase();
        return s === "land" || s === "lands" || (p.data?.status || "").toLowerCase() === "land";
      })
      .map(sanityToLand);
  }, [allProjects]);

  const [activeType, setActiveType] = React.useState("all");
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  const counts = React.useMemo(() => ({
    all: allLands.length,
    residential: allLands.filter((x) => (x.type || "").toLowerCase() === "residential").length,
    industrial: allLands.filter((x) => (x.type || "").toLowerCase() === "industrial").length,
  }), [allLands]);

  const filtered = React.useMemo(() => {
    if (activeType === "all") return allLands;
    return allLands.filter((x) => (x.type || "").toLowerCase() === activeType);
  }, [activeType, allLands]);

  const visible = React.useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;
  React.useEffect(() => { setVisibleCount(PAGE_SIZE); }, [activeType]);

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.pageTitleWrap}>
            <p className={styles.pageSubOnly}>
              {isRTL ? "استعرض محفظة المشاريع حسب النوع" : "Browse project portfolio by type"}
            </p>
          </div>
          <div className={styles.metaPill}>
            {isRTL
              ? <><span>المشاريع: </span><b>{filtered.length}</b></>
              : <><span>Projects: </span><b>{filtered.length}</b></>}
          </div>
        </div>

        <TypeTabs value={activeType} isRTL={isRTL} onChange={setActiveType} counts={counts} />

        {loading && allLands.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#888" }}>
            {isRTL ? "جاري التحميل..." : "Loading..."}
          </div>
        )}

        <div className={styles.grid}>
          <AnimatePresence>
            {visible.map((land, idx) => (
              <motion.div key={land.slug || land.id} layout
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 10 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.25) }}
                whileHover={{ y: -6 }}>
                <Link href={`/lands/${land.slug || land.id}`} className={styles.card}>
                  <span className={styles.brandBadge}>{isRTL ? "الراسخون" : "Al Rasikhoon"}</span>
                  <CardMedia land={land} locale={locale} isRTL={isRTL} />
                  <CardBody land={land} locale={locale} isRTL={isRTL} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!loading && filtered.length === 0 && (
          <div className={styles.empty}>
            <div className={styles.emptyTitle}>{isRTL ? "لا توجد مشاريع" : "No projects found"}</div>
            <div className={styles.emptySub}>
              {isRTL ? "أضف مشاريع الأراضي من Sanity Studio" : "Add land projects from Sanity Studio"}
            </div>
          </div>
        )}

        {canLoadMore && (
          <div className={styles.loadMoreWrap}>
            <button type="button" className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
              {isRTL ? "تحميل المزيد" : "LOAD MORE"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function TypeTabs({ value, onChange, counts, isRTL }) {
  const tabs = [
    { id: "all", en: "All Projects", ar: "جميع المشاريع" },
    { id: "residential", en: "Residential", ar: "سكني" },
    { id: "industrial", en: "Industrial", ar: "صناعي" },
  ];
  return (
    <div className={styles.tabsWrap}>
      <div className={styles.tabs}>
        {tabs.map((t) => (
          <button key={t.id} type="button"
            className={`${styles.tab} ${value === t.id ? styles.tabActive : ""}`}
            onClick={() => onChange(t.id)}>
            <span className={styles.tabLabel}>{isRTL ? t.ar : t.en}</span>
            <span className={styles.tabCount}>({counts?.[t.id] || 0})</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function CardMedia({ land, locale, isRTL }) {
  const title = pickLang(land.title, locale) || land.slug;
  const thumb = getLandThumbnail(land);
  return (
    <div className={styles.cardMedia}>
      {thumb ? (
        <Image src={thumb} alt={title} fill className={styles.cardImg}
          sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw" unoptimized />
      ) : (
        <div className={styles.pdfFallback}>
          <div className={styles.pdfBadge}>PDF</div>
          <div className={styles.pdfTitle}>{title}</div>
          <div className={styles.pdfHint}>{isRTL ? "مشروع" : "Project"}</div>
        </div>
      )}
      <div className={styles.mediaOverlay} />
    </div>
  );
}

function CardBody({ land, locale, isRTL }) {
  const title = pickLang(land.title, locale) || land.slug;
  const subtitle = pickLang(land.subtitle, locale);
  const area = pickLang(land.area, locale);
  const price = pickLang(land.price, locale);
  const typeLabel = (land.type || "").toLowerCase() === "industrial"
    ? (isRTL ? "صناعي" : "Industrial") : (isRTL ? "سكني" : "Residential");
  const statusLabel = (land.status || "").toLowerCase() === "available"
    ? (isRTL ? "متاح" : "Available") : (isRTL ? "غير متاح" : "Unavailable");
  return (
    <div className={styles.cardBody}>
      <div className={styles.pillsRow}>
        <span className={styles.pill}>{typeLabel}</span>
        <span className={styles.pillSoft}>{statusLabel}</span>
        {area && <span className={styles.pillSoft}>{area}</span>}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      {subtitle && <p className={styles.cardSub}>{subtitle}</p>}
      {price && <div className={styles.priceWrap}><span className={styles.cardPrice}>{price}</span></div>}
      <div className={styles.cardCtaRow}><span className={styles.cardCta}>{isRTL ? "عرض التفاصيل" : "VIEW DETAILS"}</span></div>
    </div>
  );
}