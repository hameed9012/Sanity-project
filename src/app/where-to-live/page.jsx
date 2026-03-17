"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/where-to-live/WhereToLive.module.css";
import { useCompare } from "@/components/compare/CompareProvider";
import CompareModal from "@/components/compare/CompareModal";
import { useLanguage } from "@/components/LanguageProvider";
import staticAreas from "../../../areas.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const PAGE_SIZE = 9;
const INITIAL_FILTERS = { search: "", avgBuy: "", avgRent: "", roi: "" };
const ARABIC_DIACRITICS = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g;

const STATIC_AREAS = Array.isArray(staticAreas) ? staticAreas : [];
const STATIC_AREA_MAP = STATIC_AREAS.reduce((map, area) => {
  if (area?.slug && !map.has(area.slug)) map.set(area.slug, area);
  return map;
}, new Map());

function buildAreaHref(slug) {
  return `/where-to-live/${slug}`;
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

function normalizeSearchText(value) {
  return String(value || "")
    .replace(ARABIC_DIACRITICS, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/[ىئ]/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function pickStaticValue(staticArea, key, locale) {
  if (!staticArea) return "";
  const suffix = locale === "ar" ? "ar" : "en";
  const primary = staticArea[`${key}_${suffix}`];
  if (primary) return primary;
  return staticArea[`${key}_en`] || staticArea[`${key}_ar`] || "";
}

function sanityAreaToCard(doc, locale, staticArea) {
  const name =
    (locale === "ar"
      ? doc?.nameAr || doc?.name
      : doc?.name || doc?.nameAr) || pickStaticValue(staticArea, "name", locale);

  const location =
    (locale === "ar"
      ? doc?.locationAr || doc?.location
      : doc?.location || doc?.locationAr) ||
    pickStaticValue(staticArea, "location", locale);

  const description =
    (locale === "ar"
      ? doc?.descriptionAr || doc?.description
      : doc?.description || doc?.descriptionAr) ||
    pickStaticValue(staticArea, "description", locale);

  const avgBuyRaw = doc?.avgBuyPrice || pickStaticValue(staticArea, "avgBuy", locale);
  const avgRentRaw = doc?.avgRentPrice || pickStaticValue(staticArea, "avgRent", locale);
  const roiRaw = doc?.roi || pickStaticValue(staticArea, "roi", locale);

  const heroImage =
    doc?.heroImage ||
    staticArea?.heroImage ||
    (Array.isArray(staticArea?.gallery) ? staticArea.gallery[0] : "");

  return {
    slug: doc?.slug || staticArea?.slug,
    id: doc?.slug || staticArea?.slug,
    name,
    location: location || "",
    roi: normalizeRoiLabel(roiRaw, locale === "ar" ? "\u0627\u0644\u0639\u0627\u0626\u062f \u062d\u0633\u0628 \u0627\u0644\u0633\u0648\u0642" : "ROI varies"),
    avgBuy: normalizeMoneyLabel(
      avgBuyRaw,
      locale,
      locale === "ar"
        ? "\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u062d\u0633\u0628 \u0627\u0644\u0633\u0648\u0642"
        : "Market-based pricing"
    ),
    avgRent: normalizeMoneyLabel(
      avgRentRaw,
      locale,
      locale === "ar"
        ? "\u0627\u0644\u0625\u064a\u062c\u0627\u0631 \u062d\u0633\u0628 \u0627\u0644\u0633\u0648\u0642"
        : "Market-based rent"
    ),
    image: heroImage || "",
    description: description || "",
    _fromSanity: Boolean(doc),
  };
}

function filterWhereToLive(areas, filters) {
  let filtered = areas;

  if (filters.search) {
    const term = normalizeSearchText(filters.search);
    filtered = filtered.filter((area) => {
      const haystack = normalizeSearchText(
        [area.name, area.location, area.description, area.roi, area.avgBuy, area.avgRent]
          .filter(Boolean)
          .join(" ")
      );
      return haystack.includes(term);
    });
  }

  const hasActiveFilters = Boolean(
    filters.search || filters.avgBuy || filters.avgRent || filters.roi
  );

  return { filtered, hasActiveFilters };
}

export default function WhereToLivePage() {
  const pathname = usePathname();
  const compare = useCompare();
  const { locale: ctxLocale, t: ctxT } = useLanguage();
  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";

  const [sanityAreas, setSanityAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [compareMode, setCompareMode] = useState(false);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const tLoose = React.useCallback(
    (key) => {
      if (typeof ctxT !== "function") return undefined;
      const value = ctxT(key);
      return !value || value === key ? undefined : value;
    },
    [ctxT]
  );

  const t = React.useCallback((key, fallback) => tLoose(key) ?? fallback, [tLoose]);

  useEffect(() => {
    setLoading(true);
    fetch("/api/sanity-areas")
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => setSanityAreas(Array.isArray(data) ? data : []))
      .catch(() => setSanityAreas([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (pathname !== "/where-to-live") return;
    setFilters(INITIAL_FILTERS);
    setVisibleCount(PAGE_SIZE);
  }, [pathname]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filters.search, filters.avgBuy, filters.avgRent, filters.roi]);

  const allAreas = useMemo(() => {
    const bySlug = new Map();

    (sanityAreas || []).forEach((doc) => {
      if (!doc?.slug) return;
      const fallback = STATIC_AREA_MAP.get(doc.slug);
      bySlug.set(doc.slug, sanityAreaToCard(doc, locale, fallback));
    });

    STATIC_AREA_MAP.forEach((staticArea, slug) => {
      if (bySlug.has(slug)) return;
      bySlug.set(slug, sanityAreaToCard(null, locale, staticArea));
    });

    return Array.from(bySlug.values()).filter((area) => area?.slug);
  }, [locale, sanityAreas]);

  const heroImages = useMemo(() => {
    const images = (allAreas || [])
      .map((area) => area.image)
      .filter(Boolean)
      .filter((src, index, arr) => arr.indexOf(src) === index);
    return images.length ? images : STATIC_AREAS.map((area) => area.heroImage).filter(Boolean);
  }, [allAreas]);

  const { filtered, hasActiveFilters } = useMemo(
    () => filterWhereToLive(allAreas, filters),
    [allAreas, filters]
  );

  const visibleAreas = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const canLoadMore = visibleCount < filtered.length;

  const onResetAll = React.useCallback(() => {
    setFilters(INITIAL_FILTERS);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const selectedAreas = useMemo(() => {
    const bySlug = new Map(allAreas.map((area) => [area.slug, area]));
    return (compare.selected || [])
      .map((slug) => bySlug.get(slug))
      .filter(Boolean);
  }, [allAreas, compare.selected]);

  const showingLabel = isRTL ? "\u0639\u0631\u0636" : "Showing";
  const ofLabel = isRTL ? "\u0645\u0646" : "of";
  const areasLabel = isRTL ? "\u0645\u0646\u0637\u0642\u0629" : "areas";

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <Hero images={heroImages} />

      <div className={styles.container}>
        <InlineSearch
          value={filters.search}
          placeholder={t(
            "whereToLivePage.searchPlaceholder",
            isRTL
              ? "\u0627\u0628\u062d\u062b \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0623\u0648 \u0627\u0644\u0645\u0648\u0642\u0639 \u0623\u0648 ROI"
              : "Search by area, location, or ROI"
          )}
          clearLabel={t("common.clear", isRTL ? "\u0645\u0633\u062d" : "Clear")}
          onChange={(value) => setFilters((prev) => ({ ...prev, search: value }))}
          onClear={() => setFilters((prev) => ({ ...prev, search: "" }))}
        />

        {loading && allAreas.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#888" }}>
            {isRTL
              ? "\u062c\u0627\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0646\u0627\u0637\u0642..."
              : "Loading areas..."}
          </div>
        ) : null}

        <div className={styles.metaRow}>
          <div className={styles.metaText}>
            {showingLabel} <b>{Math.min(visibleCount, filtered.length)}</b> {ofLabel}{" "}
            <b>{filtered.length}</b> {areasLabel}
          </div>

          <div className={styles.metaActions}>
            <button
              type="button"
              className={styles.compareToggleBtn}
              onClick={() => setCompareMode((value) => !value)}
            >
              {compareMode
                ? t(
                    "whereToLivePage.exitCompare",
                    isRTL
                      ? "\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629"
                      : "Exit Compare"
                  )
                : t(
                    "whereToLivePage.compareAreas",
                    isRTL ? "\u0642\u0627\u0631\u0646 \u0627\u0644\u0645\u0646\u0627\u0637\u0642" : "Compare Areas"
                  )}
            </button>

            {hasActiveFilters ? (
              <button type="button" className={styles.resetBtn} onClick={onResetAll}>
                {t(
                  "whereToLivePage.resetFilters",
                  isRTL
                    ? "\u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062a\u0631"
                    : "Reset filters"
                )}
              </button>
            ) : null}
          </div>
        </div>

        <div className={styles.cardsSection}>
          <AreaCards
            areas={visibleAreas}
            onResetFilters={onResetAll}
            compareMode={compareMode}
            compare={compare}
            t={t}
            isRTL={isRTL}
            loading={loading}
          />
        </div>

        {canLoadMore ? (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            >
              {t(
                "whereToLivePage.loadMore",
                isRTL ? "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f" : "LOAD MORE"
              )}
            </button>
          </div>
        ) : null}

        {!canLoadMore && filtered.length > 0 ? (
          <div className={styles.endText}>
            {t(
              "whereToLivePage.endText",
              isRTL
                ? "\u0644\u0642\u062f \u0648\u0635\u0644\u062a \u0625\u0644\u0649 \u0627\u0644\u0646\u0647\u0627\u064a\u0629."
                : "You've reached the end."
            )}
          </div>
        ) : null}
      </div>

      <CompareBarInline
        selectedAreas={selectedAreas}
        selectedSlugs={compare.selected || []}
        onRemove={(slug) => compare.remove(slug)}
        onClear={() => compare.clear()}
        onOpen={() => compare.open()}
        t={t}
        isRTL={isRTL}
      />

      <CompareModal />
    </div>
  );
}

function Hero({ images }) {
  const hasImages = Array.isArray(images) && images.length > 0;

  return (
    <div className={styles.hero}>
      <div className={styles.heroMedia}>
        {hasImages && images.length > 1 ? (
          <Swiper
            className={styles.heroSwiper}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={1300}
            autoplay={{ delay: 2600, disableOnInteraction: false }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={`${src}-${index}`} className={styles.heroSlide}>
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={index === 0}
                  className={styles.heroImage}
                  sizes="100vw"
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : hasImages && images[0] ? (
          <div className={styles.heroSlide}>
            <Image
              src={images[0]}
              alt=""
              fill
              priority
              className={styles.heroImage}
              sizes="100vw"
              unoptimized
            />
          </div>
        ) : (
          <div className={styles.heroFallback} />
        )}
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroTop} />
    </div>
  );
}

function InlineSearch({ value, onChange, onClear, placeholder, clearLabel }) {
  return (
    <div className={styles.inlineSearchWrap}>
      <input
        value={value || ""}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        className={styles.inlineSearchInput}
      />
      {value ? (
        <button type="button" className={styles.inlineSearchClear} onClick={onClear}>
          {clearLabel}
        </button>
      ) : null}
    </div>
  );
}

function AreaCards({ areas, onResetFilters, compareMode, compare, t, isRTL, loading }) {
  if (!loading && (!areas || areas.length === 0)) {
    return (
      <div className={styles.noResults}>
        <p>
          {t(
            "whereToLivePage.noResults",
            isRTL
              ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0646\u0627\u0637\u0642 \u062a\u0637\u0627\u0628\u0642 \u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0628\u062d\u062b."
              : "No areas match your search criteria."
          )}
        </p>
        <button type="button" className={styles.resetBtn} onClick={onResetFilters}>
          {t(
            "whereToLivePage.resetFilters",
            isRTL
              ? "\u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062a\u0631"
              : "Reset filters"
          )}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.featuredGrid}>
      {areas.map((area) => (
        <AreaCard
          key={area.slug || area.id || area.name}
          area={area}
          compareMode={compareMode}
          compare={compare}
          t={t}
          isRTL={isRTL}
        />
      ))}
    </div>
  );
}

function AreaCard({ area, compareMode, compare, t, isRTL }) {
  const slug = area.slug;
  const href = buildAreaHref(slug || "");
  const isSelected = compare?.has?.(slug);
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    setImgOk(true);
  }, [area.image]);

  const cardInner = (
    <>
      <div className={styles.roiBadge}>{area.roi}</div>

      {compareMode ? (
        <div
          className={`${styles.comparePill} ${
            isSelected ? styles.comparePillActive : ""
          }`}
        >
          {isSelected
            ? t(
                "whereToLivePage.selected",
                isRTL ? "\u062a\u0645 \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631" : "Selected"
              )
            : t(
                "whereToLivePage.select",
                isRTL ? "\u0627\u062e\u062a\u0631" : "Select"
              )}
        </div>
      ) : null}

      <div className={styles.imageContainer}>
        {area.image && imgOk ? (
          <Image
            src={area.image}
            alt={area.name}
            fill
            sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.projectImage}
            unoptimized
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className={styles.imageFallback}>
            <div className={styles.imageFallbackInner}>
              <span className={styles.imageFallbackTitle}>{area.name}</span>
              <span className={styles.imageFallbackSub}>
                {isRTL
                  ? "\u062f\u0644\u064a\u0644 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
                  : "Area Guide"}
              </span>
            </div>
          </div>
        )}

        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{area.name}</h3>
        <p className={styles.projectDescription}>{area.description}</p>

        <div className={styles.projectDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>
              {t(
                "whereToLivePage.avgBuyLabel",
                isRTL ? "\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0634\u0631\u0627\u0621" : "AVG. BUY"
              )}
            </span>
            <span className={styles.detailValue}>{area.avgBuy}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>
              {t(
                "whereToLivePage.avgRentLabel",
                isRTL ? "\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0625\u064a\u062c\u0627\u0631" : "AVG. RENT"
              )}
            </span>
            <span className={styles.detailValue}>{area.avgRent}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>
              {t("whereToLivePage.roiLabel", "ROI")}
            </span>
            <span className={styles.detailValue}>{area.roi}</span>
          </div>
        </div>

        <button className={styles.projectCTA} type="button">
          {compareMode
            ? isSelected
              ? t(
                  "whereToLivePage.selectedCta",
                  isRTL ? "\u062a\u0645 \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631" : "SELECTED"
                )
              : t(
                  "whereToLivePage.selectToCompare",
                  isRTL
                    ? "\u0627\u062e\u062a\u0631 \u0644\u0644\u0645\u0642\u0627\u0631\u0646\u0629"
                    : "SELECT TO COMPARE"
                )
            : t(
                "whereToLivePage.exploreArea",
                isRTL
                  ? "\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"
                  : "EXPLORE AREA"
              )}
        </button>
      </div>
    </>
  );

  if (compareMode) {
    return (
      <div
        className={`${styles.featuredCard} ${styles.compareCard} ${
          isSelected ? styles.compareCardSelected : ""
        }`}
        onClick={() => compare.toggle(slug)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") compare.toggle(slug);
        }}
      >
        {cardInner}
      </div>
    );
  }

  return (
    <Link href={href} className={styles.featuredCard}>
      {cardInner}
    </Link>
  );
}

function CompareBarInline({
  selectedAreas,
  selectedSlugs,
  onRemove,
  onClear,
  onOpen,
  t,
  isRTL,
}) {
  const count = selectedSlugs?.length || 0;
  if (count === 0) return null;

  const areaA = selectedAreas?.[0];
  const areaB = selectedAreas?.[1];

  return (
    <div className={styles.compareBarWrap}>
      <div className={styles.compareBar}>
        <div className={styles.compareBarLeft}>
          <div className={styles.compareBarTitle}>
            {t(
              "whereToLivePage.compareAreas",
              isRTL ? "\u0642\u0627\u0631\u0646 \u0627\u0644\u0645\u0646\u0627\u0637\u0642" : "Compare Areas"
            )}
          </div>

          <div className={styles.compareChips}>
            <ChipInline
              label={areaA?.name || selectedSlugs[0]}
              img={areaA?.image}
              onRemove={() => onRemove(selectedSlugs[0])}
              removeLabel={t("whereToLivePage.remove", isRTL ? "\u0625\u0632\u0627\u0644\u0629" : "Remove")}
            />
            {selectedSlugs[1] ? (
              <ChipInline
                label={areaB?.name || selectedSlugs[1]}
                img={areaB?.image}
                onRemove={() => onRemove(selectedSlugs[1])}
                removeLabel={t(
                  "whereToLivePage.remove",
                  isRTL ? "\u0625\u0632\u0627\u0644\u0629" : "Remove"
                )}
              />
            ) : (
              <div className={styles.compareHint}>
                {t(
                  "whereToLivePage.pickOneMoreArea",
                  isRTL
                    ? "\u0627\u062e\u062a\u0631 \u0645\u0646\u0637\u0642\u0629 \u0623\u062e\u0631\u0649"
                    : "Pick 1 more area"
                )}
              </div>
            )}
          </div>
        </div>

        <div className={styles.compareBarActions}>
          <button type="button" className={styles.compareClearBtn} onClick={onClear}>
            {t("common.clear", isRTL ? "\u0645\u0633\u062d" : "Clear")}
          </button>
          <button
            type="button"
            className={`${styles.compareGoBtn} ${
              count < 2 ? styles.compareGoBtnDisabled : ""
            }`}
            onClick={onOpen}
            disabled={count < 2}
          >
            {t("whereToLivePage.compare", isRTL ? "\u0645\u0642\u0627\u0631\u0646\u0629" : "Compare")}
          </button>
        </div>
      </div>
    </div>
  );
}

function ChipInline({ label, img, onRemove, removeLabel }) {
  return (
    <div className={styles.compareChip}>
      {img ? <img src={img} alt={label} className={styles.compareChipImg} /> : null}
      <span className={styles.compareChipText}>{label}</span>
      <button
        type="button"
        className={styles.compareChipRemove}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onRemove?.();
        }}
        aria-label={removeLabel}
      >
        x
      </button>
    </div>
  );
}
