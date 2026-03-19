"use client";

import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/where-to-live/MarketInsights.module.css";
import { useLanguage } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

function isObj(v) {
  return v && typeof v === "object" && !Array.isArray(v);
}

function pickLang(value, lang) {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number")
    return String(value);
  if (Array.isArray(value)) return value;
  if (isObj(value)) {
    if (value[lang] != null) return pickLang(value[lang], lang);
    if (value.en != null) return pickLang(value.en, lang);
    const first = Object.values(value).find((x) => typeof x === "string");
    return first ? String(first) : "";
  }
  return "";
}

function labelByLocale(isRTL, en, ar) {
  return isRTL ? ar : en;
}

function formatAED(val, isRTL) {
  if (val == null || val === "") return "";
  if (typeof val === "number") {
    try {
      return new Intl.NumberFormat(isRTL ? "ar-AE" : "en-AE", {
        style: "currency",
        currency: "AED",
        maximumFractionDigits: 0,
      }).format(val);
    } catch {
      return `AED ${Math.round(val).toLocaleString()}`;
    }
  }
  return String(val);
}

function formatPercent(val, isRTL) {
  if (val == null || val === "") return "";
  const n = typeof val === "number" ? val : Number(val);
  if (Number.isFinite(n)) {
    try {
      return (
        new Intl.NumberFormat(isRTL ? "ar-AE" : "en-AE", {
          maximumFractionDigits: 2,
        }).format(n) + "%"
      );
    } catch {
      return `${n.toFixed(2)}%`;
    }
  }
  return String(val);
}

export default function MarketInsights({ regionData }) {
  const { locale } = useLanguage();
  const isRTL = String(locale || "")
    .toLowerCase()
    .startsWith("ar");
  const lang = isRTL ? "ar" : "en";

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const blockRefs = useRef([]);
  const addBlockRef = (el) => {
    if (el && !blockRefs.current.includes(el)) blockRefs.current.push(el);
  };

  const model = useMemo(() => {
    if (!regionData) return null;

    const mT = regionData?.translations?.market || {};

    const title =
      pickLang(mT.title, lang) ||
      labelByLocale(isRTL, "Market Insights", "تحليلات السوق");
    const subtitle =
      pickLang(mT.subtitle, lang) ||
      labelByLocale(
        isRTL,
        "Rental, sales and ROI signals for this area.",
        "اتجاهات الإيجار والبيع والعائد لهذه المنطقة."
      );

    const rentalLabel =
      pickLang(mT.rentalTrends, lang) ||
      labelByLocale(isRTL, "Rental Trends", "اتجاهات الإيجار");
    const salesLabel =
      pickLang(mT.salesTrends, lang) ||
      labelByLocale(isRTL, "Sales Trends", "اتجاهات البيع");
    const roiLabel =
      pickLang(mT.roi, lang) ||
      labelByLocale(
        isRTL,
        "ROI",
        "ROI"
      );

    const summary = regionData.summary || {};
    const avgBuy = pickLang(summary.avgBuy, lang);
    const avgRent = pickLang(summary.avgRent, lang);
    const roi = pickLang(summary.roi, lang);

    const market = regionData.market || {};
    const rental = Array.isArray(market.rentalTrends)
      ? market.rentalTrends
      : [];
    const sales = Array.isArray(market.salesTrends) ? market.salesTrends : [];
    const roiBy = Array.isArray(market.roiByType) ? market.roiByType : [];

    const rentalRows = rental.map((r) => ({
      type: pickLang(r?.type, lang),
      value: r?.averageRentAED,
    }));

    const salesRows = sales.map((s) => ({
      type: pickLang(s?.type, lang),
      value: s?.averagePriceAED,
    }));

    const roiRows = roiBy.map((x) => ({
      type: pickLang(x?.type, lang),
      value: x?.roiPercent,
    }));

    return {
      title,
      subtitle,
      rentalLabel,
      salesLabel,
      roiLabel,
      quick: { avgBuy, avgRent, roi },
      rentalRows,
      salesRows,
      roiRows,
    };
  }, [regionData, lang, isRTL]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !model) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set([headerRef.current, ...blockRefs.current], {
      opacity: 1,
      y: 0,
      clearProps: "transform,filter",
    });

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          end: "bottom 18%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, immediateRender: false }
        );
      }

      if (blockRefs.current.length) {
        tl.fromTo(
          blockRefs.current,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            immediateRender: false,
          },
          "-=0.25"
        );
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => {
      ctx.revert();
      blockRefs.current = [];
    };
  }, [model]);

  if (!regionData || !model) return null;

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.hairlineTop} aria-hidden="true" />
      <div className={styles.hairlineBottom} aria-hidden="true" />

      <div className={styles.container}>
        <header ref={headerRef} className={styles.header}>
          <div className={styles.kicker}>
            <span className={styles.kickerDot} />
            <span className={styles.kickerText}>
              {labelByLocale(isRTL, "Market Ledger", "\u0633\u062c\u0644 \u0627\u0644\u0633\u0648\u0642")}
            </span>
          </div>

          <h2 className={styles.title}>{model.title}</h2>
          <p className={styles.subtitle}>{model.subtitle}</p>

          <div className={styles.rule} aria-hidden="true">
            <span className={styles.ruleLine} />
            <span className={styles.ruleGem} />
            <span className={styles.ruleLine} />
          </div>
        </header>

        {/* Quick stats */}
        <div className={styles.quickGrid}>
          <div ref={addBlockRef} className={styles.quickCard}>
            <div className={styles.quickTop}>
              <span className={styles.dot} />
              <span className={styles.quickLabel}>
                {labelByLocale(isRTL, "Avg Buy", "متوسط الشراء")}
              </span>
            </div>
            <div className={styles.quickValue}>{model.quick.avgBuy || "—"}</div>
          </div>

          <div ref={addBlockRef} className={styles.quickCard}>
            <div className={styles.quickTop}>
              <span className={styles.dot} />
              <span className={styles.quickLabel}>
                {labelByLocale(isRTL, "Avg Rent", "متوسط الإيجار")}
              </span>
            </div>
            <div className={styles.quickValue}>{model.quick.avgRent || "—"}</div>
          </div>

          <div ref={addBlockRef} className={styles.quickCard}>
            <div className={styles.quickTop}>
              <span className={styles.dot} />
              <span className={styles.quickLabel}>
                {labelByLocale(isRTL, "ROI", "العائد")}
              </span>
            </div>
            <div className={styles.quickValue}>{model.quick.roi || "—"}</div>
          </div>
        </div>

        {/* Trend tables */}
        <div className={styles.tables}>
          <article ref={addBlockRef} className={styles.tableCard}>
            <div className={styles.tableHead}>
              <span className={styles.dot} />
              <h3 className={styles.tableTitle}>{model.rentalLabel}</h3>
            </div>

            <div className={styles.rows}>
              {model.rentalRows?.length ? (
                model.rentalRows.map((r, i) => (
                  <div key={i} className={styles.row}>
                    <span className={styles.rowKey}>{r.type}</span>
                    <span className={styles.rowVal}>
                      {formatAED(r.value, isRTL)}
                    </span>
                  </div>
                ))
              ) : (
                <div className={styles.empty}>
                  {labelByLocale(
                    isRTL,
                    "No rental data available.",
                    "لا توجد بيانات إيجار."
                  )}
                </div>
              )}
            </div>
          </article>

          <article ref={addBlockRef} className={styles.tableCard}>
            <div className={styles.tableHead}>
              <span className={styles.dot} />
              <h3 className={styles.tableTitle}>{model.salesLabel}</h3>
            </div>

            <div className={styles.rows}>
              {model.salesRows?.length ? (
                model.salesRows.map((s, i) => (
                  <div key={i} className={styles.row}>
                    <span className={styles.rowKey}>{s.type}</span>
                    <span className={styles.rowVal}>
                      {formatAED(s.value, isRTL)}
                    </span>
                  </div>
                ))
              ) : (
                <div className={styles.empty}>
                  {labelByLocale(
                    isRTL,
                    "No sales data available.",
                    "لا توجد بيانات بيع."
                  )}
                </div>
              )}
            </div>
          </article>

          <article ref={addBlockRef} className={styles.tableCard}>
            <div className={styles.tableHead}>
              <span className={styles.dot} />
              <h3 className={styles.tableTitle}>{model.roiLabel}</h3>
            </div>

            <div className={styles.rows}>
              {model.roiRows?.length ? (
                model.roiRows.map((x, i) => (
                  <div key={i} className={styles.row}>
                    <span className={styles.rowKey}>{x.type}</span>
                    <span className={styles.rowVal}>
                      {formatPercent(x.value, isRTL)}
                    </span>
                  </div>
                ))
              ) : (
                <div className={styles.empty}>
                  {labelByLocale(
                    isRTL,
                    "No ROI data available.",
                    "\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a ROI."
                  )}
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
