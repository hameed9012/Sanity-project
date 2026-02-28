"use client";

import React from "react";
import styles from "@/styles/properties/PropertiesSearchBar.module.css";
import { useLanguage } from "@/components/LanguageProvider";

const isArLocale = (locale) =>
  locale === "ar" || String(locale || "").startsWith("ar");

export default function PropertiesSearchBar({
  options,
  value,
  onChange,
  onSearch,
  onReset,
}) {
  const { locale } = useLanguage();
  const isAr = isArLocale(locale);

  const t = (en, ar) => (isAr ? ar : en);

  return (
    <div className={styles.wrap} dir={isAr ? "rtl" : "ltr"}>
      <div className={styles.row}>
        <FilterSelect
          label={t("PROPERTY TYPE", "نوع العقار")}
          value={value.type}
          onChange={(v) => onChange({ ...value, type: v })}
          items={options.types}
          placeholder={t("All", "الكل")}
        />

        <FilterSelect
          label={t("BEDROOMS", "عدد الغرف")}
          value={value.bedrooms}
          onChange={(v) => onChange({ ...value, bedrooms: v })}
          items={options.bedrooms}
          placeholder={t("All", "الكل")}
        />

        <FilterSelect
          label={t("PRICE (AED)", "السعر (درهم)")}
          value={value.price}
          onChange={(v) => onChange({ ...value, price: v })}
          items={options.prices}
          placeholder={t("All", "الكل")}
        />

        <FilterSelect
          label={t("CITY", "المدينة")}
          value={value.city}
          onChange={(v) => onChange({ ...value, city: v })}
          items={options.cities}
          placeholder={t("All", "الكل")}
        />

        <FilterSelect
          label={t("LOCATION", "المنطقة")}
          value={value.location}
          onChange={(v) => onChange({ ...value, location: v })}
          items={options.locations}
          placeholder={t("All", "الكل")}
        />

        <div className={styles.actions}>
          <button className={styles.searchBtn} onClick={onSearch} type="button">
            {t("SEARCH", "بحث")}
          </button>
          <button className={styles.resetBtn} onClick={onReset} type="button">
            {t("RESET", "إعادة ضبط")}
          </button>
        </div>
      </div>

      <div className={styles.sortRow}>
        <div className={styles.sortLeft}>
          <span className={styles.sortIcon}>⇅</span>
          <span className={styles.sortText}>
            {t("SORT BY PRICE", "ترتيب حسب السعر")}
          </span>
        </div>

        <select
          className={styles.sortSelect}
          value={value.sort}
          onChange={(e) => onChange({ ...value, sort: e.target.value })}
        >
          <option value="">{t("Select", "اختر")}</option>
          <option value="price_desc">
            {t("High to Low", "من الأعلى للأقل")}
          </option>
          <option value="price_asc">
            {t("Low to High", "من الأقل للأعلى")}
          </option>
        </select>
      </div>
    </div>
  );
}

function FilterSelect({ label, items = [], value, onChange, placeholder }) {
  return (
    <div className={styles.item}>
      <div className={styles.label}>{label}</div>
      <select
        className={styles.select}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {items.map((it) => (
          <option key={it.value} value={it.value}>
            {it.label}
          </option>
        ))}
      </select>
    </div>
  );
}
