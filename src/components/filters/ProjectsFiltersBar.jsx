"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/filter/ProjectsFiltersBar.module.css";

const devStatusOptions = [
  { value: "Completed", labelKey: "projects.status.completed" },
  { value: "Presale", labelKey: "projects.status.presale" },
  {
    value: "Under Construction",
    labelKey: "projects.status.underConstruction",
  },
  { value: "Announced", labelKey: "projects.status.announced" },
  { value: "On Sale", labelKey: "projects.status.onSale" },
  { value: "Off-plan", labelKey: "projects.status.offPlan" },
  { value: "Ready To Move", labelKey: "projects.status.ready" },
  { value: "Ready & Off-Plan", labelKey: "projects.status.readyAndOffPlan" },
  { value: "Available", labelKey: "projects.status.available" },
];

const unitTypeOptions = [
  { value: "Apartments", labelKey: "categories.apartments" },
  { value: "Villas", labelKey: "categories.villas" },
  { value: "Penthouses", labelKey: "categories.penthouses" },
  { value: "Commercial/Retail", labelKey: "categories.commercial" },
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
    const next = [...values];
    next[index] = parseInt(value, 10);
    if (index === 0 && next[0] > next[1]) next[1] = next[0];
    if (index === 1 && next[1] < next[0]) next[0] = next[1];
    onChange(next);
  };

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={min}
          max={max}
          value={values[0]}
          onChange={(event) => handleChange(0, event.target.value)}
          className={styles.slider}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={values[1]}
          onChange={(event) => handleChange(1, event.target.value)}
          className={styles.slider}
        />
      </div>
      <div className={styles.sliderValues}>
        <span>{formatLabel ? formatLabel(values[0]) : formatNumber(values[0])}</span>
        <span>{formatLabel ? formatLabel(values[1]) : formatNumber(values[1])}</span>
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
  const dropdownRef = useRef(null);

  const safeT = (key, values, fallback) => {
    try {
      const value = t?.(key, values);
      if (value === undefined || value === null || value === "" || value === key) {
        return fallback;
      }
      return value;
    } catch {
      return fallback;
    }
  };

  const copy = {
    searchAndFilters: safeT(
      "whereToLive.filters.searchAndFilters",
      undefined,
      isRTL ? "\u0628\u062d\u062b \u0648\u0641\u0644\u0627\u062a\u0631" : "Search & Filters"
    ),
    price: safeT(
      "whereToLive.filters.price",
      undefined,
      isRTL ? "\u0627\u0644\u0633\u0639\u0631" : "Price"
    ),
    priceRange: safeT(
      "whereToLive.filters.priceRangeLabel",
      undefined,
      isRTL ? "\u0646\u0637\u0627\u0642 \u0627\u0644\u0633\u0639\u0631" : "Price range"
    ),
    size: safeT(
      "whereToLive.filters.size",
      undefined,
      isRTL ? "\u0627\u0644\u0645\u0633\u0627\u062d\u0629" : "Size"
    ),
    sizeRange: safeT(
      "whereToLive.filters.sizeRangeLabel",
      undefined,
      isRTL ? "\u0646\u0637\u0627\u0642 \u0627\u0644\u0645\u0633\u0627\u062d\u0629" : "Size range"
    ),
    min: safeT(
      "whereToLive.filters.minSizeLabel",
      undefined,
      isRTL ? "\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649" : "Min"
    ),
    max: safeT(
      "whereToLive.filters.maxSizeLabel",
      undefined,
      isRTL ? "\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649" : "Max"
    ),
    from: safeT("common.from", undefined, isRTL ? "\u0645\u0646" : "From"),
    to: safeT("common.to", undefined, isRTL ? "\u0625\u0644\u0649" : "To"),
    unitType: safeT(
      "whereToLive.filters.unitType",
      undefined,
      isRTL ? "\u0646\u0648\u0639 \u0627\u0644\u0648\u062d\u062f\u0629" : "Unit type"
    ),
    status: safeT(
      "whereToLive.filters.status",
      undefined,
      isRTL ? "\u0627\u0644\u062d\u0627\u0644\u0629" : "Status"
    ),
    statusLong: safeT(
      "whereToLive.filters.statusLabel",
      undefined,
      isRTL
        ? "\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"
        : "Project status"
    ),
    bedrooms: safeT(
      "whereToLive.filters.bedrooms",
      undefined,
      isRTL ? "\u063a\u0631\u0641 \u0627\u0644\u0646\u0648\u0645" : "Bedrooms"
    ),
    clear: safeT(
      "common.clear",
      undefined,
      isRTL ? "\u0645\u0633\u062d" : "Clear"
    ),
    sqftValue: (value) =>
      safeT(
        "whereToLive.filters.sizeRangeValue",
        { value: formatNumber(value, locale) },
        isRTL
          ? `${formatNumber(value, locale)} \u0642\u062f\u0645\u00b2`
          : `${formatNumber(value, locale)} sqft`
      ),
    priceValue: (value) =>
      safeT(
        "whereToLive.filters.priceRangeValue",
        { value: formatNumber(value, locale) },
        isRTL
          ? `${formatNumber(value, locale)} \u062f.\u0625`
          : `AED ${formatNumber(value, locale)}`
      ),
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const [priceRange, setPriceRange] = useState([
    PRICE_RANGE.min,
    PRICE_RANGE.max,
  ]);
  const [sizeRange, setSizeRange] = useState([SIZE_RANGE.min, SIZE_RANGE.max]);

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

  const toggleDropdown = (key) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  const handleFormattedInputChange = (field, value) => {
    const numericValue = value ? parseFormattedNumber(value) : "";
    onChange({ ...filters, [field]: numericValue });
  };

  const handlePriceRangeChange = (nextRange) => {
    setPriceRange(nextRange);
    onChange({ ...filters, minPrice: nextRange[0], maxPrice: nextRange[1] });
  };

  const handleSizeRangeChange = (nextRange) => {
    setSizeRange(nextRange);
    onChange({ ...filters, minSize: nextRange[0], maxSize: nextRange[1] });
  };

  const toggleArrayFilter = (key, value) => {
    const current = filters[key] || [];
    const exists = current.includes(value);
    const next = exists
      ? current.filter((item) => item !== value)
      : [...current, value];
    onChange({ ...filters, [key]: next });
  };

  const clearFilter = (filterKeys) => {
    const nextFilters = { ...filters };
    filterKeys.forEach((key) => {
      nextFilters[key] = Array.isArray(nextFilters[key]) ? [] : "";
    });
    onChange(nextFilters);
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
        <div className={styles.leftGroup}>
          <button
            className={styles.searchFiltersButton}
            onClick={onOpenFullFilters}
            type="button"
          >
            <span className={styles.iconCircle}>SF</span>
            <span>{copy.searchAndFilters}</span>
            {hasActiveFilters && <span className={styles.activeDot} aria-hidden="true" />}
          </button>
        </div>

        <div ref={dropdownRef} className={styles.rightGroup}>
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
              <span>{copy.price}</span>
              {(filters.minPrice || filters.maxPrice) && (
                <span className={styles.filterBadge} aria-hidden="true" />
              )}
              <span className={styles.chevron}>v</span>
            </button>

            {openDropdown === "price" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{copy.priceRange}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["minPrice", "maxPrice"])}
                    type="button"
                  >
                    {copy.clear}
                  </button>
                </div>

                <RangeSlider
                  min={PRICE_RANGE.min}
                  max={PRICE_RANGE.max}
                  values={priceRange}
                  onChange={handlePriceRangeChange}
                  formatLabel={copy.priceValue}
                />

                <div className={styles.rangeRow}>
                  <div className={styles.rangeField}>
                    <label>{copy.from}</label>
                    <input
                      type="text"
                      placeholder={copy.from}
                      value={formatNumber(filters.minPrice, locale) || ""}
                      onChange={(event) =>
                        handleFormattedInputChange("minPrice", event.target.value)
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                  <div className={styles.rangeField}>
                    <label>{copy.to}</label>
                    <input
                      type="text"
                      placeholder={copy.to}
                      value={formatNumber(filters.maxPrice, locale) || ""}
                      onChange={(event) =>
                        handleFormattedInputChange("maxPrice", event.target.value)
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.minSize || filters.maxSize ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("size")}
              type="button"
            >
              <span>{copy.size}</span>
              {(filters.minSize || filters.maxSize) && (
                <span className={styles.filterBadge} aria-hidden="true" />
              )}
              <span className={styles.chevron}>v</span>
            </button>

            {openDropdown === "size" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{copy.sizeRange}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["minSize", "maxSize"])}
                    type="button"
                  >
                    {copy.clear}
                  </button>
                </div>

                <RangeSlider
                  min={SIZE_RANGE.min}
                  max={SIZE_RANGE.max}
                  values={sizeRange}
                  onChange={handleSizeRangeChange}
                  formatLabel={copy.sqftValue}
                />

                <div className={styles.rangeRow}>
                  <div className={styles.rangeField}>
                    <label>{copy.min}</label>
                    <input
                      type="text"
                      placeholder={copy.from}
                      value={formatNumber(filters.minSize, locale) || ""}
                      onChange={(event) =>
                        handleFormattedInputChange("minSize", event.target.value)
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                  <div className={styles.rangeField}>
                    <label>{copy.max}</label>
                    <input
                      type="text"
                      placeholder={copy.to}
                      value={formatNumber(filters.maxSize, locale) || ""}
                      onChange={(event) =>
                        handleFormattedInputChange("maxSize", event.target.value)
                      }
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.unitTypes?.length > 0 ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("unitType")}
              type="button"
            >
              <span>{copy.unitType}</span>
              {filters.unitTypes?.length > 0 && (
                <span className={styles.filterBadge}>{filters.unitTypes.length}</span>
              )}
              <span className={styles.chevron}>v</span>
            </button>

            {openDropdown === "unitType" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{copy.unitType}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["unitTypes"])}
                    type="button"
                  >
                    {copy.clear}
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

          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.devStatus?.length > 0 ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("devStatus")}
              type="button"
            >
              <span>{copy.status}</span>
              {filters.devStatus?.length > 0 && (
                <span className={styles.filterBadge}>{filters.devStatus.length}</span>
              )}
              <span className={styles.chevron}>v</span>
            </button>

            {openDropdown === "devStatus" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{copy.statusLong}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["devStatus"])}
                    type="button"
                  >
                    {copy.clear}
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
                      onClick={() => toggleArrayFilter("devStatus", status.value)}
                      type="button"
                    >
                      {safeT(status.labelKey, undefined, status.value)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.bedrooms?.length > 0 ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("bedrooms")}
              type="button"
            >
              <span>{copy.bedrooms}</span>
              {filters.bedrooms?.length > 0 && (
                <span className={styles.filterBadge}>{filters.bedrooms.length}</span>
              )}
              <span className={styles.chevron}>v</span>
            </button>

            {openDropdown === "bedrooms" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{copy.bedrooms}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["bedrooms"])}
                    type="button"
                  >
                    {copy.clear}
                  </button>
                </div>

                <div className={styles.chipRow}>
                  {bedroomOptions.map((bedroom) => (
                    <button
                      key={bedroom.value}
                      className={`${styles.chip} ${
                        filters.bedrooms?.includes(bedroom.value)
                          ? styles.chipActive
                          : ""
                      }`}
                      onClick={() => toggleArrayFilter("bedrooms", bedroom.value)}
                      type="button"
                    >
                      {safeT(bedroom.labelKey, undefined, String(bedroom.value))}
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
