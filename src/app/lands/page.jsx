"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import styles from "@/styles/lands/lands.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

const PAGE_SIZE = 9;
const ARABIC_DIACRITICS = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g;

function normalizeLocale(locale) {
  const s = String(locale || "en").toLowerCase();
  return s.startsWith("ar") ? "ar" : "en";
}

function pickLang(obj, locale) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[locale] || obj.en || "";
}

function normalizeSearchText(value) {
  return String(value || "")
    .replace(ARABIC_DIACRITICS, "")
    .replace(/أ|إ|آ/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى|ئ/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getLandThumbnail(land) {
  if (land.gallery && land.gallery.length > 0) return land.gallery[0];
  return "";
}

function sanityToLand(p) {
  const slug = p.slug || p._id;
  const en = p.data?.en || {};
  const ar = p.data?.ar || {};
  return {
    slug,
    _fromSanity: true,
    type: (p.type || "land").toLowerCase(),
    status: p.status || p.devStatus || "Land",
    market: en.project?.market || "",
    title: { en: p.nameEn || slug, ar: p.nameAr || p.nameEn || slug },
    subtitle: { en: p.location || "", ar: p.locationAr || p.location || "" },
    description: { en: en.description || "", ar: ar.description || "" },
    area: { en: en.project?.units || "", ar: ar.project?.units || "" },
    price: { en: p.startingPrice || "", ar: p.startingPriceAr || "" },
    developer: p.developer || "",
    gallery: Array.isArray(en.gallery?.slides)
      ? en.gallery.slides.map((s) => s?.url || s).filter(Boolean)
      : [],
  };
}

function getTabType(land) {
  const market = String(land?.market || "").toLowerCase();
  const status = String(land?.status || "").toLowerCase();

  if (market.includes("rental") || status.includes("rental")) return "rental";
  if (market.includes("ready") || status.includes("secondary") || status.includes("ready")) {
    return "secondary";
  }
  if (market.includes("offplan") || market.includes("off-plan") || status.includes("offplan")) {
    return "offplan";
  }
  return "properties";
}

export default function LandsPage() {
  const { locale: ctxLocale } = useLanguage();
  const locale = normalizeLocale(ctxLocale);
  const isRTL = locale === "ar";
  const { allProjects, loading } = useAllProjects();

  const allLands = React.useMemo(() => {
    return allProjects
      .filter((p) => {
        const s = (p.status || p.devStatus || "").toLowerCase();
        return s === "land" || s === "lands" || (p.data?.status || "").toLowerCase() === "land";
      })
      .map(sanityToLand);
  }, [allProjects]);

  const [activeType, setActiveType] = React.useState("all");
  const [search, setSearch] = React.useState("");
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  const counts = React.useMemo(
    () => ({
      all: allLands.length,
      properties: allLands.filter((x) => getTabType(x) === "properties").length,
      offplan: allLands.filter((x) => getTabType(x) === "offplan").length,
      secondary: allLands.filter((x) => getTabType(x) === "secondary").length,
      rental: allLands.filter((x) => getTabType(x) === "rental").length,
    }),
    [allLands]
  );

  const filtered = React.useMemo(() => {
    const base =
      activeType === "all"
        ? allLands
        : allLands.filter((x) => getTabType(x) === activeType);

    const q = normalizeSearchText(search);
    if (!q) return base;

    return base.filter((land) => {
      const haystack = normalizeSearchText(
        [
          pickLang(land.title, locale),
          pickLang(land.subtitle, locale),
          pickLang(land.description, locale),
          land.developer,
          land.slug,
        ]
          .filter(Boolean)
          .join(" ")
      );
      return haystack.includes(q);
    });
  }, [activeType, allLands, locale, search]);

  const visible = React.useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;

  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeType, search]);

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.pageTitleWrap}>
            <p className={styles.pageSubOnly}>
              {isRTL
                ? "استعرض مشاريع الأراضي بحسب الحالة وابحث بالعربية أو الإنجليزية"
                : "Browse land projects by status and search in Arabic or English"}
            </p>
          </div>
          <div className={styles.metaPill}>
            {isRTL ? (
              <>
                <span>المشاريع: </span>
                <b>{filtered.length}</b>
              </>
            ) : (
              <>
                <span>Projects: </span>
                <b>{filtered.length}</b>
              </>
            )}
          </div>
        </div>

        <TypeTabs value={activeType} isRTL={isRTL} onChange={setActiveType} counts={counts} />

        <div className={styles.tabsWrap}>
          <div className={styles.tabs} style={{ marginTop: 12 }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isRTL
                  ? "ابحث باسم المشروع أو المنطقة أو المطور"
                  : "Search by project, area, or developer"
              }
              className={styles.tab}
              style={{
                flex: 1,
                textAlign: isRTL ? "right" : "left",
                cursor: "text",
              }}
            />
          </div>
        </div>

        {loading && allLands.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#888" }}>
            {isRTL ? "جارٍ التحميل..." : "Loading..."}
          </div>
        )}

        <div className={styles.grid}>
          <AnimatePresence>
            {visible.map((land, idx) => (
              <motion.div
                key={land.slug}
                layout
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 10 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.25) }}
                whileHover={{ y: -6 }}
              >
                <Link href={`/lands/${land.slug}`} className={styles.card}>
                  <span className={styles.brandBadge}>{isRTL ? "الرساخون" : "Al Rasikhoon"}</span>
                  <CardMedia land={land} locale={locale} isRTL={isRTL} />
                  <CardBody land={land} locale={locale} isRTL={isRTL} activeType={activeType} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!loading && filtered.length === 0 && (
          <div className={styles.empty}>
            <div className={styles.emptyTitle}>
              {isRTL ? "لا توجد مشاريع مطابقة" : "No matching land projects"}
            </div>
            <div className={styles.emptySub}>
              {isRTL
                ? "غيّر التبويب أو جرّب كلمة بحث مختلفة."
                : "Try a different tab or search term."}
            </div>
          </div>
        )}

        {canLoadMore && (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            >
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
    { id: "all", en: "All", ar: "الكل" },
    { id: "properties", en: "Properties", ar: "العقارات" },
    { id: "offplan", en: "Offplan", ar: "الأوف بلان" },
    { id: "secondary", en: "Secondary", ar: "الجاهز" },
    { id: "rental", en: "Rental", ar: "الإيجار" },
  ];

  return (
    <div className={styles.tabsWrap}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tab} ${value === tab.id ? styles.tabActive : ""}`}
            onClick={() => onChange(tab.id)}
          >
            <span className={styles.tabLabel}>{isRTL ? tab.ar : tab.en}</span>
            <span className={styles.tabCount}>({counts?.[tab.id] || 0})</span>
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
        <Image
          src={thumb}
          alt={title}
          fill
          className={styles.cardImg}
          sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
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

function CardBody({ land, locale, isRTL, activeType }) {
  const title = pickLang(land.title, locale) || land.slug;
  const subtitle = pickLang(land.subtitle, locale);
  const area = pickLang(land.area, locale);
  const price = pickLang(land.price, locale);
  const tabType = getTabType(land);

  const typeLabelMap = {
    properties: isRTL ? "عقار" : "Property",
    offplan: isRTL ? "أوف بلان" : "Offplan",
    secondary: isRTL ? "جاهز" : "Secondary",
    rental: isRTL ? "إيجار" : "Rental",
  };

  return (
    <div className={styles.cardBody}>
      <div className={styles.pillsRow}>
        <span className={styles.pill}>{typeLabelMap[tabType]}</span>
        <span className={styles.pillSoft}>{land.developer || (isRTL ? "غير محدد" : "Unknown")}</span>
        {area && <span className={styles.pillSoft}>{area}</span>}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      {subtitle && <p className={styles.cardSub}>{subtitle}</p>}
      {price && (
        <div className={styles.priceWrap}>
          <span className={styles.cardPrice}>{price}</span>
        </div>
      )}
      <div className={styles.cardCtaRow}>
        <span className={styles.cardCta}>{isRTL ? "عرض التفاصيل" : "VIEW DETAILS"}</span>
      </div>
    </div>
  );
}
