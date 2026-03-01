"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/styles/where-to-live/WhereToLive.module.css";
import { whereToLiveRegionDetails } from "@/data/whereToLiveData/whereToLiveRegionDetails";
import { filterWhereToLive } from "@/lib/whereToLive/filterWhereToLive";
import { useCompare } from "@/components/compare/CompareProvider";
import CompareModal from "@/components/compare/CompareModal";
import { useLanguage } from "@/components/LanguageProvider";

const PAGE_SIZE = 9;
const initialFilters = { search: "", avgBuy: "", avgRent: "", roi: "" };

function buildAreaHref(slug) { return `/where-to-live/${slug}`; }

function pickLang(v, locale) {
  if (v == null) return "";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (Array.isArray(v)) return v.map((x) => pickLang(x, locale)).filter(Boolean).join(" ");
  if (v && typeof v === "object") {
    if (v[locale] != null) return pickLang(v[locale], locale);
    if (v.en != null) return pickLang(v.en, locale);
    const firstStr = Object.values(v).find((x) => typeof x === "string");
    return firstStr ? String(firstStr) : "";
  }
  return "";
}

function toSlug(name) {
  return String(name || "").toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

// Build areas from static whereToLiveRegionDetails
function buildStaticAreas(locale) {
  const src = whereToLiveRegionDetails || {};
  return Object.keys(src).map((slugKey) => {
    const region = src[slugKey];
    if (!region) return null;
    const slug = region.slug || slugKey || toSlug(pickLang(region.name, locale));
    const name = pickLang(region.name, locale) || "Unknown Area";
    const location = pickLang(region.summary?.location, locale) || "";
    const avgBuy = pickLang(region.summary?.avgBuy, locale) || "";
    const avgRent = pickLang(region.summary?.avgRent, locale) || "";
    const roi = pickLang(region.summary?.roi, locale) || "";
    const image = region.heroImage || "";
    const description =
      pickLang(region.summary?.description, locale) ||
      pickLang(region.summary?.intro, locale) ||
      pickLang(region.hero?.subtitle, locale) ||
      location || "";
    return { slug, id: slug, name, location, roi: roi || "ROI varies", avgBuy: avgBuy || "Avg. buy varies", avgRent: avgRent || "Avg. rent varies", image, description };
  }).filter(Boolean);
}

// Convert a Sanity area doc to the area card shape
function sanityAreaToCard(doc, locale) {
  return {
    slug: doc.slug,
    id: doc.slug,
    name: locale === "ar" ? (doc.nameAr || doc.name) : doc.name,
    location: doc.location || "",
    roi: doc.roi || "ROI varies",
    avgBuy: doc.avgBuyPrice || "Avg. buy varies",
    avgRent: doc.avgRentPrice || "Avg. rent varies",
    image: doc.heroImage || "",
    description: locale === "ar" ? (doc.descriptionAr || doc.description || "") : (doc.description || ""),
    _fromSanity: true,
  };
}

export default function WhereToLivePage() {
  const pathname = usePathname();
  const compare = useCompare();
  const { locale: ctxLocale, t: ctxT } = useLanguage();
  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";

  const [sanityAreas, setSanityAreas] = React.useState([]);
  const [compareMode, setCompareMode] = React.useState(false);
  const [filters, setFilters] = React.useState(initialFilters);
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  const tLoose = React.useCallback((key) => {
    if (typeof ctxT !== "function") return undefined;
    const v = ctxT(key);
    if (!v || v === key) return undefined;
    return v;
  }, [ctxT]);
  const t = React.useCallback((key, fallback) => tLoose(key) ?? fallback, [tLoose]);

  // Fetch Sanity areas
  React.useEffect(() => {
    fetch("/api/sanity-areas")
      .then((r) => r.ok ? r.json() : [])
      .then((data) => setSanityAreas(Array.isArray(data) ? data : []))
      .catch(() => setSanityAreas([]));
  }, []);

  React.useEffect(() => {
    if (pathname !== "/where-to-live") return;
    setFilters(initialFilters);
    setVisibleCount(PAGE_SIZE);
  }, [pathname]);

  React.useEffect(() => { setVisibleCount(PAGE_SIZE); }, [filters.search, filters.avgBuy, filters.avgRent, filters.roi]);

  // Merge: Sanity areas first, then static (skip duplicates by slug)
  const allAreas = React.useMemo(() => {
    const sanityCards = sanityAreas.map((doc) => sanityAreaToCard(doc, locale));
    const sanitySlugSet = new Set(sanityCards.map((a) => a.slug));
    const staticAreas = buildStaticAreas(locale).filter((a) => !sanitySlugSet.has(a.slug));
    return [...sanityCards, ...staticAreas];
  }, [sanityAreas, locale]);

  const { filtered, hasActiveFilters } = React.useMemo(() => filterWhereToLive(allAreas, filters), [allAreas, filters]);
  const visibleAreas = React.useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;
  const onResetAll = React.useCallback(() => { setFilters(initialFilters); setVisibleCount(PAGE_SIZE); }, []);
  const selectedAreas = React.useMemo(() => {
    const bySlug = new Map(allAreas.map((a) => [a.slug, a]));
    return (compare.selected || []).map((slug) => bySlug.get(slug)).filter(Boolean);
  }, [allAreas, compare.selected]);

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <Hero />
      <div className={styles.container}>
        <InlineSearch
          value={filters.search}
          placeholder={t("whereToLivePage.searchPlaceholder", isRTL ? "ابحث حسب المنطقة أو الموقع أو العائد" : "Search by area, location, ROI")}
          clearLabel={t("common.clear", isRTL ? "مسح" : "Clear")}
          onChange={(v) => setFilters((prev) => ({ ...prev, search: v }))}
          onClear={() => setFilters((prev) => ({ ...prev, search: "" }))}
        />

        <div className={styles.metaRow}>
          <div className={styles.metaText}>
            {t("whereToLivePage.showing", isRTL ? "عرض" : "Showing")} <b>{Math.min(visibleCount, filtered.length)}</b> {t("common.of", isRTL ? "من" : "of")} <b>{filtered.length}</b> {t("whereToLivePage.areas", isRTL ? "منطقة" : "areas")}
          </div>
          <div className={styles.metaActions}>
            <button type="button" className={styles.compareToggleBtn} onClick={() => setCompareMode((v) => !v)}>
              {compareMode ? t("whereToLivePage.exitCompare", isRTL ? "إنهاء المقارنة" : "Exit Compare") : t("whereToLivePage.compareAreas", isRTL ? "قارن المناطق" : "Compare Areas")}
            </button>
            {hasActiveFilters && (
              <button type="button" className={styles.resetBtn} onClick={onResetAll}>
                {t("whereToLivePage.resetFilters", isRTL ? "إعادة ضبط الفلاتر" : "Reset filters")}
              </button>
            )}
          </div>
        </div>

        <div className={styles.cardsSection}>
          <AreaCards areas={visibleAreas} onResetFilters={onResetAll} compareMode={compareMode} compare={compare} t={t} isRTL={isRTL} />
        </div>

        {canLoadMore && (
          <div className={styles.loadMoreWrap}>
            <button type="button" className={styles.loadMoreBtn} onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
              {t("whereToLivePage.loadMore", isRTL ? "عرض المزيد" : "LOAD MORE")}
            </button>
          </div>
        )}
        {!canLoadMore && filtered.length > 0 && (
          <div className={styles.endText}>{t("whereToLivePage.endText", isRTL ? "لقد وصلت إلى النهاية." : "You've reached the end.")}</div>
        )}
      </div>

      <CompareBarInline selectedAreas={selectedAreas} selectedSlugs={compare.selected || []} onRemove={(slug) => compare.remove(slug)} onClear={() => compare.clear()} onOpen={() => compare.open()} t={t} isRTL={isRTL} />
      <CompareModal />
    </div>
  );
}

function Hero() {
  return <div className={styles.hero}><div className={styles.heroOverlay} /><div className={styles.heroTop}></div></div>;
}

function InlineSearch({ value, onChange, onClear, placeholder, clearLabel }) {
  return (
    <div className={styles.inlineSearchWrap}>
      <input value={value || ""} onChange={(e) => onChange?.(e.target.value)} placeholder={placeholder} className={styles.inlineSearchInput} />
      {value && <button type="button" className={styles.inlineSearchClear} onClick={onClear}>{clearLabel}</button>}
    </div>
  );
}

function AreaCards({ areas, onResetFilters, compareMode, compare, t, isRTL }) {
  if (!areas || areas.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>{t("whereToLivePage.noResults", isRTL ? "لا توجد مناطق تطابق معايير البحث." : "No areas match your search criteria.")}</p>
        <button type="button" className={styles.resetBtn} onClick={onResetFilters}>{t("whereToLivePage.resetFilters", isRTL ? "إعادة ضبط الفلاتر" : "Reset filters")}</button>
      </div>
    );
  }
  return (
    <div className={styles.featuredGrid}>
      {areas.map((area) => <AreaCard key={area.slug || area.id || area.name} area={area} compareMode={compareMode} compare={compare} t={t} isRTL={isRTL} />)}
    </div>
  );
}

function AreaCard({ area, compareMode, compare, t, isRTL }) {
  const slug = area.slug;
  const href = buildAreaHref(slug || "");
  const isSelected = compare?.has?.(slug);
  const [imgOk, setImgOk] = React.useState(true);
  React.useEffect(() => { setImgOk(true); }, [area.image]);

  const cardInner = (
    <>
      <div className={styles.roiBadge}>{area.roi}</div>
      {compareMode && <div className={`${styles.comparePill} ${isSelected ? styles.comparePillActive : ""}`}>{isSelected ? t("whereToLivePage.selected", isRTL ? "تم الاختيار" : "Selected") : t("whereToLivePage.select", isRTL ? "اختر" : "Select")}</div>}
      <div className={styles.imageContainer}>
        {area.image && imgOk ? (
          <Image src={area.image} alt={area.name} fill sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw" className={styles.projectImage} unoptimized onError={() => setImgOk(false)} />
        ) : (
          <div className={styles.imageFallback}><div className={styles.imageFallbackInner}><span className={styles.imageFallbackTitle}>{area.name}</span><span className={styles.imageFallbackSub}>{isRTL ? "دليل المنطقة" : "Area Guide"}</span></div></div>
        )}
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{area.name}</h3>
        <p className={styles.projectDescription}>{area.description}</p>
        <div className={styles.projectDetails}>
          <div className={styles.detailItem}><span className={styles.detailLabel}>{t("whereToLivePage.avgBuyLabel", isRTL ? "متوسط الشراء" : "AVG. BUY")}</span><span className={styles.detailValue}>{area.avgBuy}</span></div>
          <div className={styles.detailItem}><span className={styles.detailLabel}>{t("whereToLivePage.avgRentLabel", isRTL ? "متوسط الإيجار" : "AVG. RENT")}</span><span className={styles.detailValue}>{area.avgRent}</span></div>
          <div className={styles.detailItem}><span className={styles.detailLabel}>{t("whereToLivePage.roiLabel", isRTL ? "العائد" : "ROI")}</span><span className={styles.detailValue}>{area.roi}</span></div>
        </div>
        <button className={styles.projectCTA} type="button">
          {compareMode ? (isSelected ? t("whereToLivePage.selectedCta", isRTL ? "تم الاختيار" : "SELECTED") : t("whereToLivePage.selectToCompare", isRTL ? "اختر للمقارنة" : "SELECT TO COMPARE")) : t("whereToLivePage.exploreArea", isRTL ? "استكشف المنطقة" : "EXPLORE AREA")}
        </button>
      </div>
    </>
  );

  if (compareMode) {
    return <div className={`${styles.featuredCard} ${styles.compareCard} ${isSelected ? styles.compareCardSelected : ""}`} onClick={() => compare.toggle(slug)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") compare.toggle(slug); }}>{cardInner}</div>;
  }
  return <Link href={href} className={styles.featuredCard}>{cardInner}</Link>;
}

function CompareBarInline({ selectedAreas, selectedSlugs, onRemove, onClear, onOpen, t, isRTL }) {
  const count = selectedSlugs?.length || 0;
  if (count === 0) return null;
  const a = selectedAreas?.[0];
  const b = selectedAreas?.[1];
  return (
    <div className={styles.compareBarWrap}>
      <div className={styles.compareBar}>
        <div className={styles.compareBarLeft}>
          <div className={styles.compareBarTitle}>{t("whereToLivePage.compareAreas", isRTL ? "قارن المناطق" : "Compare Areas")}</div>
          <div className={styles.compareChips}>
            <ChipInline label={a?.name || selectedSlugs[0]} img={a?.image} onRemove={() => onRemove(selectedSlugs[0])} removeLabel={t("whereToLivePage.remove", isRTL ? "إزالة" : "Remove")} />
            {selectedSlugs[1] ? <ChipInline label={b?.name || selectedSlugs[1]} img={b?.image} onRemove={() => onRemove(selectedSlugs[1])} removeLabel={t("whereToLivePage.remove", isRTL ? "إزالة" : "Remove")} /> : <div className={styles.compareHint}>{t("whereToLivePage.pickOneMoreArea", isRTL ? "اختر منطقة أخرى" : "Pick 1 more area")}</div>}
          </div>
        </div>
        <div className={styles.compareBarActions}>
          <button type="button" className={styles.compareClearBtn} onClick={onClear}>{t("common.clear", isRTL ? "مسح" : "Clear")}</button>
          <button type="button" className={`${styles.compareGoBtn} ${count < 2 ? styles.compareGoBtnDisabled : ""}`} onClick={onOpen} disabled={count < 2}>{t("whereToLivePage.compare", isRTL ? "مقارنة" : "Compare")}</button>
        </div>
      </div>
    </div>
  );
}

function ChipInline({ label, img, onRemove, removeLabel }) {
  return (
    <div className={styles.compareChip}>
      {img && <img src={img} alt={label} className={styles.compareChipImg} />}
      <span className={styles.compareChipText}>{label}</span>
      <button type="button" className={styles.compareChipRemove} onClick={(e) => { e.preventDefault(); e.stopPropagation(); onRemove?.(); }} aria-label={removeLabel}>✕</button>
    </div>
  );
}