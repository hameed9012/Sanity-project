// src/components/filters/ProjectsFiltersModal.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/filter/ProjectsFiltersModal.module.css";

const PRICE_RANGE = { min: 0, max: 100000000 };
const SIZE_RANGE = { min: 0, max: 100000 };

// ✅ Unified options matching your data
const devStatusOptions = [
  { value: "Completed", labelKey: "projects.status.completed" },
  { value: "Presale", labelKey: "projects.status.presale" },
  {
    value: "Under Construction",
    labelKey: "projects.status.underConstruction",
  },
  { value: "Announced", labelKey: "projects.status.announced" },
  { value: "On Sale", labelKey: "projects.status.onSale" },
  { value: "Off Plan", labelKey: "projects.status.offPlan" },
  { value: "Off-Plan", labelKey: "projects.status.offPlan" },
  { value: "Ready", labelKey: "projects.status.ready" },
  { value: "Ready & Off-Plan", labelKey: "projects.status.readyAndOffPlan" },
  { value: "Available", labelKey: "projects.status.available" },
];

const unitTypeOptions = [
  { value: "Apartments", labelKey: "categories.apartments" },
  { value: "Apartment", labelKey: "categories.apartments" },
  { value: "Villas", labelKey: "categories.villas" },
  { value: "Villa", labelKey: "categories.villas" },
  { value: "Luxury Villas", labelKey: "categories.villas" },
  { value: "Penthouse", labelKey: "categories.penthouses" },
  { value: "Penthouses", labelKey: "categories.penthouses" },
  { value: "Townhouses & Villas", labelKey: "categories.villas" },
  { value: "Villas & Townhouses", labelKey: "categories.villas" },
  { value: "Office Spaces", labelKey: "categories.commercial" },
  { value: "Retail Spaces", labelKey: "categories.commercial" },
  { value: "Retail Units", labelKey: "categories.commercial" },
  { value: "Commercial", labelKey: "categories.commercial" },
  { value: "Mixed Use", labelKey: "categories.mixedUse" },
  { value: "Branded Residences", labelKey: "projects.cards.brandedResidences" },
  { value: "Residential Tower", labelKey: "projects.cards.residentialTower" },
];

const bedroomOptions = [
  { labelKey: "whereToLive.filters.bedroomOptions.studio", value: 0 },
  { labelKey: "whereToLive.filters.bedroomOptions.one", value: 1 },
  { labelKey: "whereToLive.filters.bedroomOptions.two", value: 2 },
  { labelKey: "whereToLive.filters.bedroomOptions.three", value: 3 },
  { labelKey: "whereToLive.filters.bedroomOptions.four", value: 4 },
  { labelKey: "whereToLive.filters.bedroomOptions.fivePlus", value: 5 },
];

const formatNumber = (num, locale) => {
  if (num === null || num === undefined || num === "") return "";
  const n = Number(num);
  if (Number.isNaN(n)) return "";
  return new Intl.NumberFormat(locale === "ar" ? "ar-AE" : "en-US").format(n);
};

const parseFormattedNumber = (str) => {
  const cleaned = String(str || "")
    .replace(/,/g, "")
    .replace(/\s/g, "");
  if (!cleaned) return null;
  const n = parseInt(cleaned, 10);
  return Number.isNaN(n) ? null : n;
};

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

const makeSafeT = (t) => (key, values, fallback) => {
  try {
    const raw = t?.(key, values);
    if (raw === undefined || raw === null || raw === "" || raw === key) {
      return fallback;
    }
    return raw;
  } catch {
    return fallback;
  }
};

const RangeSlider = ({ min, max, values, onChange, formatLabel }) => {
  const v0 = Number.isFinite(Number(values?.[0])) ? Number(values[0]) : min;
  const v1 = Number.isFinite(Number(values?.[1])) ? Number(values[1]) : max;

  const safeValues = [
    clamp(Math.min(v0, v1), min, max),
    clamp(Math.max(v0, v1), min, max),
  ];

  const handleChange = (index, value) => {
    const n = parseInt(value, 10);
    const next = [...safeValues];
    next[index] = Number.isNaN(n) ? next[index] : clamp(n, min, max);

    if (next[0] > next[1]) next[1] = next[0];
    if (next[1] < next[0]) next[0] = next[1];

    onChange(next);
  };

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={min}
          max={max}
          value={safeValues[0]}
          onChange={(e) => handleChange(0, e.target.value)}
          className={styles.slider}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={safeValues[1]}
          onChange={(e) => handleChange(1, e.target.value)}
          className={styles.slider}
        />
      </div>
      <div className={styles.sliderValues}>
        <span>{formatLabel ? formatLabel(safeValues[0]) : safeValues[0]}</span>
        <span>{formatLabel ? formatLabel(safeValues[1]) : safeValues[1]}</span>
      </div>
    </div>
  );
};

export default function ProjectsFiltersModal({
  isOpen,
  filters,
  onChange,
  onClose,
  onReset,
  onApply,
  totalProjects = 0,
}) {
  const { t, locale: ctxLocale } = useLanguage();
  const safeT = useMemo(() => makeSafeT(t), [t]);

  const locale = ctxLocale || "en";
  const isRTL = locale === "ar";

  const [priceRange, setPriceRange] = useState([
    PRICE_RANGE.min,
    PRICE_RANGE.max,
  ]);
  const [sizeRange, setSizeRange] = useState([SIZE_RANGE.min, SIZE_RANGE.max]);

  useEffect(() => {
    if (!isOpen) return;
    const handle = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setPriceRange([
      filters?.minPrice ?? PRICE_RANGE.min,
      filters?.maxPrice ?? PRICE_RANGE.max,
    ]);
  }, [isOpen, filters?.minPrice, filters?.maxPrice]);

  useEffect(() => {
    if (!isOpen) return;
    setSizeRange([
      filters?.minSize ?? SIZE_RANGE.min,
      filters?.maxSize ?? SIZE_RANGE.max,
    ]);
  }, [isOpen, filters?.minSize, filters?.maxSize]);

  if (!isOpen) return null;

  const updateField = (key, value) =>
    onChange({ ...(filters || {}), [key]: value });

  const handleFormattedInputChange = (field, value) => {
    updateField(field, value ? parseFormattedNumber(value) : null);
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    onChange({
      ...(filters || {}),
      minPrice: newRange[0],
      maxPrice: newRange[1],
    });
  };

  const handleSizeRangeChange = (newRange) => {
    setSizeRange(newRange);
    onChange({
      ...(filters || {}),
      minSize: newRange[0],
      maxSize: newRange[1],
    });
  };

  const toggleArrayField = (key, value) => {
    const current = (filters?.[key] || []).slice();
    const exists = current.includes(value);
    updateField(
      key,
      exists ? current.filter((v) => v !== value) : [...current, value]
    );
  };

  const applyLabel = safeT(
    "whereToLive.filters.showProjects",
    { count: totalProjects },
    isRTL ? `عرض ${totalProjects} مشروع` : `Show ${totalProjects} projects`
  );

  const priceLabel = (value) =>
    safeT(
      "whereToLive.filters.priceRangeValue",
      { value: formatNumber(value, locale) },
      isRTL
        ? `د.إ ${formatNumber(value, locale)}`
        : `AED ${formatNumber(value, locale)}`
    );

  const sizeLabel = (value) =>
    safeT(
      "whereToLive.filters.sizeRangeValue",
      { value: formatNumber(value, locale) },
      isRTL
        ? `${formatNumber(value, locale)} قدم²`
        : `${formatNumber(value, locale)} sqft`
    );

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className={styles.header}>
          <h2>
            {safeT(
              "whereToLive.filters.modalTitle",
              undefined,
              isRTL ? "فلترة المشاريع" : "Filter Projects"
            )}
          </h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label={isRTL ? "إغلاق" : "Close"}
            type="button"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalContent}>
          {/* Search */}
          <div className={styles.fieldBlock}>
            <label>
              {safeT(
                "whereToLive.filters.searchLabel",
                undefined,
                isRTL ? "بحث" : "Search"
              )}
            </label>
            <input
              type="text"
              placeholder={safeT(
                "whereToLive.filters.searchPlaceholder",
                undefined,
                isRTL
                  ? "اكتب اسم مشروع، مطوّر، أو منطقة"
                  : "Type a project, developer or district"
              )}
              value={filters?.search || ""}
              onChange={(e) => updateField("search", e.target.value)}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          {/* Price */}
          <div className={styles.fieldBlock}>
            <label>
              {safeT(
                "whereToLive.filters.priceRangeLabel",
                undefined,
                isRTL ? "السعر (درهم)" : "Price (AED)"
              )}
            </label>

            <RangeSlider
              min={PRICE_RANGE.min}
              max={PRICE_RANGE.max}
              values={priceRange}
              onChange={handlePriceRangeChange}
              formatLabel={priceLabel}
            />

            <div className={styles.twoCol}>
              <div>
                <span className={styles.subLabel}>
                  {safeT(
                    "whereToLive.filters.minPriceLabel",
                    undefined,
                    isRTL ? "الحد الأدنى للسعر" : "Minimum price"
                  )}
                </span>
                <input
                  type="text"
                  placeholder={safeT(
                    "common.from",
                    undefined,
                    isRTL ? "من" : "From"
                  )}
                  value={formatNumber(filters?.minPrice, locale)}
                  onChange={(e) =>
                    handleFormattedInputChange("minPrice", e.target.value)
                  }
                  dir={isRTL ? "rtl" : "ltr"}
                />
              </div>
              <div>
                <span className={styles.subLabel}>
                  {safeT(
                    "whereToLive.filters.maxPriceLabel",
                    undefined,
                    isRTL ? "الحد الأقصى للسعر" : "Maximum price"
                  )}
                </span>
                <input
                  type="text"
                  placeholder={safeT(
                    "common.to",
                    undefined,
                    isRTL ? "إلى" : "To"
                  )}
                  value={formatNumber(filters?.maxPrice, locale)}
                  onChange={(e) =>
                    handleFormattedInputChange("maxPrice", e.target.value)
                  }
                  dir={isRTL ? "rtl" : "ltr"}
                />
              </div>
            </div>
          </div>

          {/* Size */}
          <div className={styles.fieldBlock}>
            <label>
              {safeT(
                "whereToLive.filters.sizeRangeLabel",
                undefined,
                isRTL ? "المساحة (قدم²)" : "Property size (sqft)"
              )}
            </label>

            <RangeSlider
              min={SIZE_RANGE.min}
              max={SIZE_RANGE.max}
              values={sizeRange}
              onChange={handleSizeRangeChange}
              formatLabel={sizeLabel}
            />

            <div className={styles.twoCol}>
              <div>
                <span className={styles.subLabel}>
                  {safeT(
                    "whereToLive.filters.minSizeLabel",
                    undefined,
                    isRTL ? "الحد الأدنى للمساحة" : "Minimum size"
                  )}
                </span>
                <input
                  type="text"
                  placeholder={safeT(
                    "common.from",
                    undefined,
                    isRTL ? "من" : "From"
                  )}
                  value={formatNumber(filters?.minSize, locale)}
                  onChange={(e) =>
                    handleFormattedInputChange("minSize", e.target.value)
                  }
                  dir={isRTL ? "rtl" : "ltr"}
                />
              </div>
              <div>
                <span className={styles.subLabel}>
                  {safeT(
                    "whereToLive.filters.maxSizeLabel",
                    undefined,
                    isRTL ? "الحد الأقصى للمساحة" : "Maximum size"
                  )}
                </span>
                <input
                  type="text"
                  placeholder={safeT(
                    "common.to",
                    undefined,
                    isRTL ? "إلى" : "To"
                  )}
                  value={formatNumber(filters?.maxSize, locale)}
                  onChange={(e) =>
                    handleFormattedInputChange("maxSize", e.target.value)
                  }
                  dir={isRTL ? "rtl" : "ltr"}
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className={styles.fieldBlock}>
            <label>
              {safeT(
                "whereToLive.filters.statusLabel",
                undefined,
                isRTL ? "حالة التطوير" : "Development status"
              )}
            </label>
            <div className={styles.chipsRow}>
              {devStatusOptions.map((opt) => (
                <button
                  key={opt.value}
                  className={`${styles.chip} ${
                    filters?.devStatus?.includes(opt.value)
                      ? styles.chipActive
                      : ""
                  }`}
                  onClick={() => toggleArrayField("devStatus", opt.value)}
                  type="button"
                >
                  {safeT(opt.labelKey, undefined, opt.value)}
                </button>
              ))}
            </div>
          </div>

          {/* Unit type */}
          <div className={styles.fieldBlock}>
            <label>
              {safeT(
                "whereToLive.filters.unitTypeLabel",
                undefined,
                isRTL ? "نوع الوحدة" : "Unit type"
              )}
            </label>
            <div className={styles.chipsRow}>
              {unitTypeOptions.map((opt) => (
                <button
                  key={opt.value}
                  className={`${styles.chip} ${
                    filters?.unitTypes?.includes(opt.value)
                      ? styles.chipActive
                      : ""
                  }`}
                  onClick={() => toggleArrayField("unitTypes", opt.value)}
                  type="button"
                >
                  {safeT(opt.labelKey, undefined, opt.value)}
                </button>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div className={styles.fieldBlock}>
            <label>
              {safeT(
                "whereToLive.filters.bedroomsLabel",
                undefined,
                isRTL ? "غرف النوم" : "Bedrooms"
              )}
            </label>
            <div className={styles.chipsRow}>
              {bedroomOptions.map((b) => (
                <button
                  key={b.value}
                  className={`${styles.chip} ${
                    filters?.bedrooms?.includes(b.value)
                      ? styles.chipActive
                      : ""
                  }`}
                  onClick={() => toggleArrayField("bedrooms", b.value)}
                  type="button"
                >
                  {safeT(b.labelKey, undefined, String(b.value))}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button
            className={styles.resetButton}
            onClick={onReset}
            type="button"
          >
            {safeT(
              "developersDashboard.filters.clearAll",
              undefined,
              isRTL ? "مسح الكل" : "Clear all"
            )}
          </button>

          <button
            className={styles.applyButton}
            onClick={() => onApply?.(filters)}
            type="button"
          >
            {applyLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
