// src/components/filters/ProjectsFiltersModal.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/filter/ProjectsFiltersModal.module.css";

const STORAGE_KEY = "mk_search_history";
const MAX_HISTORY = 12;

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

const loadHistory = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
};

const saveHistory = (items) => {
  if (typeof window === "undefined") return;
  try {
    const next = Array.isArray(items) ? items.filter(Boolean).slice(0, MAX_HISTORY) : [];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
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

  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!isOpen) return;
    setHistory(loadHistory());
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handle = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateSearch = (value) => {
    onChange({ ...(filters || {}), search: value });
  };

  const addToHistory = (value) => {
    const normalized = String(value || "").trim();
    if (!normalized) return;
    const next = [
      normalized,
      ...(history.filter((item) => item !== normalized)),
    ].slice(0, MAX_HISTORY);
    setHistory(next);
    saveHistory(next);
  };

  const applyLabel = safeT(
    "whereToLive.filters.showProjects",
    { count: totalProjects },
    isRTL ? `عرض ${totalProjects} مشروع` : `Show ${totalProjects} projects`,
  );

  const handleApply = () => {
    const query = String(filters?.search || "").trim();
    if (query) {
      addToHistory(query);
    }

    onApply?.(filters);
    onClose?.();
  };

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
              "whereToLive.filters.searchHistoryTitle",
              undefined,
              isRTL ? "بحث سابق" : "Search history",
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
          <div className={styles.fieldBlock}>
            <label>
              {safeT(
                "whereToLive.filters.searchLabel",
                undefined,
                isRTL ? "بحث" : "Search",
              )}
            </label>
            <input
              type="text"
              placeholder={safeT(
                "whereToLive.filters.searchPlaceholder",
                undefined,
                isRTL
                  ? "اكتب اسم مشروع، مطوّر، أو منطقة"
                  : "Type a project, developer or district",
              )}
              value={filters?.search || ""}
              onChange={(e) => updateSearch(e.target.value)}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          <div className={styles.fieldBlock}>
            <div className={styles.recentHeader}>
              <span>
                {safeT(
                  "whereToLive.filters.recentSearches",
                  undefined,
                  isRTL ? "عمليات البحث السابقة" : "Recent searches",
                )}
              </span>
              <button
                type="button"
                className={styles.clearHistory}
                onClick={() => {
                  setHistory([]);
                  saveHistory([]);
                }}
              >
                {safeT(
                  "whereToLive.filters.clearHistory",
                  undefined,
                  isRTL ? "مسح" : "Clear",
                )}
              </button>
            </div>

            <div className={styles.historyList}>
              {history.length > 0 ? (
                history.map((item, index) => (
                  <button
                    key={`${item}-${index}`}
                    type="button"
                    className={styles.historyItem}
                    onClick={() => updateSearch(item)}
                  >
                    {item}
                  </button>
                ))
              ) : (
                <div className={styles.historyEmpty}>
                  {safeT(
                    "whereToLive.filters.noRecentSearches",
                    undefined,
                    isRTL ? "لم يتم العثور على عمليات بحث سابقة" : "No recent searches yet",
                  )}
                </div>
              )}
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
              isRTL ? "مسح الكل" : "Clear all",
            )}
          </button>

          <button
            className={styles.applyButton}
            onClick={handleApply}
            type="button"
          >
            {applyLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
