// src/components/filters/ProjectsFiltersBar.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/filter/ProjectsFiltersBar.module.css";

// ✅ Unified options that match your regionProjectsIndex data
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
  { value: 0, labelKey: "whereToLive.filters.bedroomOptions.studio" },
  { value: 1, labelKey: "whereToLive.filters.bedroomOptions.one" },
  { value: 2, labelKey: "whereToLive.filters.bedroomOptions.two" },
  { value: 3, labelKey: "whereToLive.filters.bedroomOptions.three" },
  { value: 4, labelKey: "whereToLive.filters.bedroomOptions.four" },
  { value: 5, labelKey: "whereToLive.filters.bedroomOptions.fivePlus" },
];

const PRICE_RANGE = { min: 0, max: 100000000 };
const SIZE_RANGE = { min: 0, max: 100000 };

const formatNumber = (num, locale = "en") => {
  if (num === null || num === undefined || num === "") return "";
  return new Intl.NumberFormat(locale === "ar" ? "ar-AE" : "en-US").format(num);
};

const parseFormattedNumber = (str) => {
  const cleaned = String(str || "")
    .replace(/,/g, "")
    .replace(/\s/g, "");
  return cleaned ? parseInt(cleaned, 10) : "";
};

const RangeSlider = ({ min, max, values, onChange, formatLabel }) => {
  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = parseInt(value, 10);
    if (index === 0 && newValues[0] > newValues[1]) newValues[1] = newValues[0];
    if (index === 1 && newValues[1] < newValues[0]) newValues[0] = newValues[1];
    onChange(newValues);
  };

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={min}
          max={max}
          value={values[0]}
          onChange={(e) => handleChange(0, e.target.value)}
          className={styles.slider}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={values[1]}
          onChange={(e) => handleChange(1, e.target.value)}
          className={styles.slider}
        />
      </div>
      <div className={styles.sliderValues}>
        <span>
          {formatLabel ? formatLabel(values[0]) : formatNumber(values[0])}
        </span>
        <span>
          {formatLabel ? formatLabel(values[1]) : formatNumber(values[1])}
        </span>
      </div>
    </div>
  );
};

export default function ProjectsFiltersBar({
  filters,
  onChange,
  onOpenFullFilters,
}) {
  const { t, locale } = useLanguage();
  const isRTL = locale === "ar";

  const safeT = (key, values, fallback) => {
    try {
      const v = t?.(key, values);
      if (v === undefined || v === null || v === "" || v === key)
        return fallback;
      return v;
    } catch {
      return fallback;
    }
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const [priceRange, setPriceRange] = useState([
    PRICE_RANGE.min,
    PRICE_RANGE.max,
  ]);
  const [sizeRange, setSizeRange] = useState([SIZE_RANGE.min, SIZE_RANGE.max]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setPriceRange([
      filters.minPrice || PRICE_RANGE.min,
      filters.maxPrice || PRICE_RANGE.max,
    ]);
  }, [filters.minPrice, filters.maxPrice]);

  useEffect(() => {
    setSizeRange([
      filters.minSize || SIZE_RANGE.min,
      filters.maxSize || SIZE_RANGE.max,
    ]);
  }, [filters.minSize, filters.maxSize]);

  const toggleDropdown = (key) =>
    setOpenDropdown((prev) => (prev === key ? null : key));

  const handleFormattedInputChange = (field, value) => {
    const numericValue = value ? parseFormattedNumber(value) : "";
    onChange({ ...filters, [field]: numericValue });
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    onChange({ ...filters, minPrice: newRange[0], maxPrice: newRange[1] });
  };

  const handleSizeRangeChange = (newRange) => {
    setSizeRange(newRange);
    onChange({ ...filters, minSize: newRange[0], maxSize: newRange[1] });
  };

  const toggleArrayFilter = (key, value) => {
    const current = filters[key] || [];
    const exists = current.includes(value);
    const next = exists
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange({ ...filters, [key]: next });
  };

  const clearFilter = (filterKeys) => {
    const newFilters = { ...filters };
    filterKeys.forEach((key) => {
      newFilters[key] = Array.isArray(newFilters[key]) ? [] : "";
    });
    onChange(newFilters);
  };

  const hasActiveFilters =
    filters.search ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.minSize ||
    filters.maxSize ||
    (filters.devStatus && filters.devStatus.length > 0) ||
    (filters.unitTypes && filters.unitTypes.length > 0) ||
    (filters.bedrooms && filters.bedrooms.length > 0);

  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.filtersBar}>
        {/* Left side */}
        <div className={styles.leftGroup}>
          <button
            className={styles.searchFiltersButton}
            onClick={onOpenFullFilters}
            type="button"
          >
            <span className={styles.iconCircle}>🔍</span>
            <span>
              {safeT(
                "whereToLive.filters.searchAndFilters",
                undefined,
                isRTL ? "بحث وفلاتر" : "Search & Filters"
              )}
            </span>
            {hasActiveFilters && (
              <span className={styles.activeDot} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Right side */}
        <div ref={dropdownRef} className={styles.rightGroup}>
          {/* Price */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.minPrice || filters.maxPrice
                  ? styles.dropdownButtonActive
                  : ""
              }`}
              onClick={() => toggleDropdown("price")}
              type="button"
            >
              <span>
                {safeT(
                  "whereToLive.filters.price",
                  undefined,
                  isRTL ? "السعر" : "Price"
                )}
              </span>
              {(filters.minPrice || filters.maxPrice) && (
                <span className={styles.filterBadge}>•</span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>

            {openDropdown === "price" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>
                    {safeT(
                      "whereToLive.filters.priceRangeLabel",
                      undefined,
                      isRTL ? "نطاق السعر" : "Price range"
                    )}
                  </h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["minPrice", "maxPrice"])}
                    type="button"
                  >
                    {safeT("common.clear", undefined, isRTL ? "مسح" : "Clear")}
                  </button>
                </div>

                <RangeSlider
                  min={PRICE_RANGE.min}
                  max={PRICE_RANGE.max}
                  values={priceRange}
                  onChange={handlePriceRangeChange}
                  formatLabel={(value) =>
                    safeT(
                      "whereToLive.filters.priceRangeValue",
                      { value: formatNumber(value, locale) },
                      isRTL
                        ? `د.إ ${formatNumber(value, locale)}`
                        : `AED ${formatNumber(value, locale)}`
                    )
                  }
                />

                <div className={styles.rangeRow}>
                  <div className={styles.rangeField}>
                    <label>
                      {safeT(
                        "whereToLive.filters.minPriceLabel",
                        undefined,
                        isRTL ? "الحد الأدنى" : "Min"
                      )}
                    </label>
                    <input
                      type="text"
                      placeholder={safeT(
                        "common.from",
                        undefined,
                        isRTL ? "من" : "From"
                      )}
                      value={formatNumber(filters.minPrice, locale) || ""}
                      onChange={(e) =>
                        handleFormattedInputChange("minPrice", e.target.value)
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                  <div className={styles.rangeField}>
                    <label>
                      {safeT(
                        "whereToLive.filters.maxPriceLabel",
                        undefined,
                        isRTL ? "الحد الأقصى" : "Max"
                      )}
                    </label>
                    <input
                      type="text"
                      placeholder={safeT(
                        "common.to",
                        undefined,
                        isRTL ? "إلى" : "To"
                      )}
                      value={formatNumber(filters.maxPrice, locale) || ""}
                      onChange={(e) =>
                        handleFormattedInputChange("maxPrice", e.target.value)
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Size */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.minSize || filters.maxSize
                  ? styles.dropdownButtonActive
                  : ""
              }`}
              onClick={() => toggleDropdown("size")}
              type="button"
            >
              <span>
                {safeT(
                  "whereToLive.filters.size",
                  undefined,
                  isRTL ? "المساحة" : "Size"
                )}
              </span>
              {(filters.minSize || filters.maxSize) && (
                <span className={styles.filterBadge}>•</span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>

            {openDropdown === "size" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>
                    {safeT(
                      "whereToLive.filters.sizeRangeLabel",
                      undefined,
                      isRTL ? "نطاق المساحة" : "Size range"
                    )}
                  </h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["minSize", "maxSize"])}
                    type="button"
                  >
                    {safeT("common.clear", undefined, isRTL ? "مسح" : "Clear")}
                  </button>
                </div>

                <RangeSlider
                  min={SIZE_RANGE.min}
                  max={SIZE_RANGE.max}
                  values={sizeRange}
                  onChange={handleSizeRangeChange}
                  formatLabel={(value) =>
                    safeT(
                      "whereToLive.filters.sizeRangeValue",
                      { value: formatNumber(value, locale) },
                      isRTL
                        ? `${formatNumber(value, locale)} قدم²`
                        : `${formatNumber(value, locale)} sqft`
                    )
                  }
                />

                <div className={styles.rangeRow}>
                  <div className={styles.rangeField}>
                    <label>
                      {safeT(
                        "whereToLive.filters.minSizeLabel",
                        undefined,
                        isRTL ? "الحد الأدنى" : "Min"
                      )}
                    </label>
                    <input
                      type="text"
                      placeholder={safeT(
                        "common.from",
                        undefined,
                        isRTL ? "من" : "From"
                      )}
                      value={formatNumber(filters.minSize, locale) || ""}
                      onChange={(e) =>
                        handleFormattedInputChange("minSize", e.target.value)
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                  <div className={styles.rangeField}>
                    <label>
                      {safeT(
                        "whereToLive.filters.maxSizeLabel",
                        undefined,
                        isRTL ? "الحد الأقصى" : "Max"
                      )}
                    </label>
                    <input
                      type="text"
                      placeholder={safeT(
                        "common.to",
                        undefined,
                        isRTL ? "إلى" : "To"
                      )}
                      value={formatNumber(filters.maxSize, locale) || ""}
                      onChange={(e) =>
                        handleFormattedInputChange("maxSize", e.target.value)
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Unit type */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.unitTypes?.length > 0 ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("unitType")}
              type="button"
            >
              <span>
                {safeT(
                  "whereToLive.filters.unitType",
                  undefined,
                  isRTL ? "نوع الوحدة" : "Unit type"
                )}
              </span>
              {filters.unitTypes?.length > 0 && (
                <span className={styles.filterBadge}>
                  {filters.unitTypes.length}
                </span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>

            {openDropdown === "unitType" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>
                    {safeT(
                      "whereToLive.filters.unitTypeLabel",
                      undefined,
                      isRTL ? "نوع الوحدة" : "Unit type"
                    )}
                  </h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["unitTypes"])}
                    type="button"
                  >
                    {safeT("common.clear", undefined, isRTL ? "مسح" : "Clear")}
                  </button>
                </div>

                <div className={styles.chipGrid}>
                  {unitTypeOptions.map((type) => (
                    <button
                      key={type.value}
                      className={`${styles.chip} ${
                        filters.unitTypes?.includes(type.value)
                          ? styles.chipActive
                          : ""
                      }`}
                      onClick={() => toggleArrayFilter("unitTypes", type.value)}
                      type="button"
                    >
                      {safeT(type.labelKey, undefined, type.value)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Status */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.devStatus?.length > 0 ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("devStatus")}
              type="button"
            >
              <span>
                {safeT(
                  "whereToLive.filters.status",
                  undefined,
                  isRTL ? "الحالة" : "Status"
                )}
              </span>
              {filters.devStatus?.length > 0 && (
                <span className={styles.filterBadge}>
                  {filters.devStatus.length}
                </span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>

            {openDropdown === "devStatus" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>
                    {safeT(
                      "whereToLive.filters.statusLabel",
                      undefined,
                      isRTL ? "حالة التطوير" : "Development status"
                    )}
                  </h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["devStatus"])}
                    type="button"
                  >
                    {safeT("common.clear", undefined, isRTL ? "مسح" : "Clear")}
                  </button>
                </div>

                <div className={styles.chipRow}>
                  {devStatusOptions.map((status) => (
                    <button
                      key={status.value}
                      className={`${styles.chip} ${
                        filters.devStatus?.includes(status.value)
                          ? styles.chipActive
                          : ""
                      }`}
                      onClick={() =>
                        toggleArrayFilter("devStatus", status.value)
                      }
                      type="button"
                    >
                      {safeT(status.labelKey, undefined, status.value)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bedrooms */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.bedrooms?.length > 0 ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("bedrooms")}
              type="button"
            >
              <span>
                {safeT(
                  "whereToLive.filters.bedrooms",
                  undefined,
                  isRTL ? "غرف النوم" : "Bedrooms"
                )}
              </span>
              {filters.bedrooms?.length > 0 && (
                <span className={styles.filterBadge}>
                  {filters.bedrooms.length}
                </span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>

            {openDropdown === "bedrooms" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>
                    {safeT(
                      "whereToLive.filters.bedroomsLabel",
                      undefined,
                      isRTL ? "غرف النوم" : "Bedrooms"
                    )}
                  </h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["bedrooms"])}
                    type="button"
                  >
                    {safeT("common.clear", undefined, isRTL ? "مسح" : "Clear")}
                  </button>
                </div>

                <div className={styles.chipRow}>
                  {bedroomOptions.map((b) => (
                    <button
                      key={b.value}
                      className={`${styles.chip} ${
                        filters.bedrooms?.includes(b.value)
                          ? styles.chipActive
                          : ""
                      }`}
                      onClick={() => toggleArrayFilter("bedrooms", b.value)}
                      type="button"
                    >
                      {safeT(b.labelKey, undefined, String(b.value))}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
