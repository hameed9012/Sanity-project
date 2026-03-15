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
                ? "\u0627\u0633\u062a\u0639\u0631\u0636 \u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0623\u0631\u0627\u0636\u064a \u0628\u062d\u0633\u0628 \u0627\u0644\u062d\u0627\u0644\u0629 \u0648\u0627\u0628\u062d\u062b \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0623\u0648 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629"
                : "Browse land projects by status and search in Arabic or English"}
            </p>
          </div>
          <div className={styles.metaPill}>
            {isRTL ? (
              <>
                <span>\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639: </span>
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
                  ? "\u0627\u0628\u062d\u062b \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0623\u0648 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0623\u0648 \u0627\u0644\u0645\u0637\u0648\u0631"
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
            {isRTL ? "\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644..." : "Loading..."}
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
                  <span className={styles.brandBadge}>{isRTL ? "\u0627\u0644\u0631\u0627\u0633\u062e\u0648\u0646" : "Al Rasikhoon"}</span>
                  <CardMedia land={land} locale={locale} isRTL={isRTL} />
                  <CardBody land={land} locale={locale} isRTL={isRTL} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!loading && filtered.length === 0 && (
          <div className={styles.empty}>
            <div className={styles.emptyTitle}>
              {isRTL ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0634\u0627\u0631\u064a\u0639 \u0623\u0631\u0627\u0636\u064a \u0645\u0637\u0627\u0628\u0642\u0629" : "No matching land projects"}
            </div>
            <div className={styles.emptySub}>
              {isRTL
                ? "\u063a\u064a\u0651\u0631 \u0627\u0644\u062a\u0628\u0648\u064a\u0628 \u0623\u0648 \u062c\u0631\u0651\u0628 \u0643\u0644\u0645\u0629 \u0628\u062d\u062b \u0645\u062e\u062a\u0644\u0641\u0629."
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
              {isRTL ? "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0632\u064a\u062f" : "LOAD MORE"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function TypeTabs({ value, onChange, counts, isRTL }) {
  const tabs = [
    { id: "all", en: "All", ar: "\u0627\u0644\u0643\u0644" },
    { id: "properties", en: "Properties", ar: "\u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a" },
    { id: "offplan", en: "Offplan", ar: "\u0639\u0644\u0649 \u0627\u0644\u062e\u0627\u0631\u0637\u0629" },
    { id: "secondary", en: "Ready To Move", ar: "\u062c\u0627\u0647\u0632 \u0644\u0644\u0633\u0643\u0646" },
    { id: "rental", en: "Rental", ar: "\u0627\u0644\u0625\u064a\u062c\u0627\u0631" },
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
          <div className={styles.pdfHint}>{isRTL ? "\u0645\u0634\u0631\u0648\u0639" : "Project"}</div>
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
  const tabType = getTabType(land);

  const typeLabelMap = {
    properties: isRTL ? "\u0639\u0642\u0627\u0631" : "Property",
    offplan: isRTL ? "\u0639\u0644\u0649 \u0627\u0644\u062e\u0627\u0631\u0637\u0629" : "Offplan",
    secondary: isRTL ? "\u062c\u0627\u0647\u0632 \u0644\u0644\u0633\u0643\u0646" : "Ready To Move",
    rental: isRTL ? "\u0625\u064a\u062c\u0627\u0631" : "Rental",
  };

  return (
    <div className={styles.cardBody}>
      <div className={styles.pillsRow}>
        <span className={styles.pill}>{typeLabelMap[tabType]}</span>
        <span className={styles.pillSoft}>{land.developer || (isRTL ? "\u063a\u064a\u0631 \u0645\u062d\u062f\u062f" : "Unknown")}</span>
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
        <span className={styles.cardCta}>{isRTL ? "\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644" : "VIEW DETAILS"}</span>
      </div>
    </div>
  );
}
