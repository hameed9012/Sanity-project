"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/where-to-live/AreaNarrative.module.css";
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
    // common shape: { en, ar }
    if (value[lang] != null) return pickLang(value[lang], lang);
    if (value.en != null) return pickLang(value.en, lang);
    // fallback: first string-ish field
    const first = Object.values(value).find((x) => typeof x === "string");
    return first ? String(first) : "";
  }
  return "";
}

function pickList(value, lang) {
  if (value == null) return [];
  const v = pickLang(value, lang);
  if (Array.isArray(v)) return v.map(String).filter(Boolean);
  if (typeof v === "string") return v ? [v] : [];
  return [];
}

function labelByLocale(isRTL, en, ar) {
  return isRTL ? ar : en;
}

/**
 * Breaks the string into new lines wherever it sees ✓
 * Example:
 * "Hello: ✓ One ✓ Two"  =>  "Hello:\n✓ One\n✓ Two"
 */
function breakOnCheckmarks(text) {
  if (!text) return "";
  const s = String(text);

  // Put a newline before every ✓ (and normalize spaces around it)
  // Keeps the checkmark visible at the start of each new line.
  const withLines = s
    .replace(/\s*✓\s*/g, "\n✓ ")
    .replace(/\n{2,}/g, "\n")
    .trim();

  return withLines;
}

export default function AreaNarrative({ regionData }) {
  const { locale } = useLanguage();
  const isRTL = String(locale || "")
    .toLowerCase()
    .startsWith("ar");
  const lang = isRTL ? "ar" : "en";

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  const [openIdx, setOpenIdx] = useState(0);

  const model = useMemo(() => {
    if (!regionData) return null;

    const areaTitle = labelByLocale(
      isRTL,
      "Area Narrative",
      "السرد العام للمنطقة"
    );
    const badge = labelByLocale(isRTL, "Area Overview", "نظرة عامة");

    const highlights = regionData.highlights || {};
    const neighbourhood = regionData.neighbourhood || {};
    const neighbourhoodTitles = regionData.neighbourhoodTitles || {};
    const investment = regionData.investmentHighlights || {};

    const about = pickLang(highlights.about, lang);

    const nutshellTitle =
      pickLang(highlights.nutshellTitle, lang) ||
      labelByLocale(isRTL, "In a Nutshell", "بإيجاز");

    const nutshell = pickList(highlights.inANutshell, lang);

    const nTitle1 =
      pickLang(neighbourhoodTitles.overview, lang) ||
      labelByLocale(isRTL, "Neighborhood Overview", "نظرة عامة على الحي");

    const nTitle2 =
      pickLang(neighbourhoodTitles.properties, lang) ||
      labelByLocale(isRTL, "Property Landscape", "مشهد العقارات");

    const nOverview = pickLang(neighbourhood.communityOverview, lang);
    const nProperties = pickLang(neighbourhood.propertiesOverview, lang);

    const invTitle =
      pickLang(investment.title, lang) ||
      labelByLocale(isRTL, "Investment Highlights", "أبرز النقاط الاستثمارية");

    const invPoints = Array.isArray(investment.points) ? investment.points : [];
    const invConclusionRaw = pickLang(investment.conclusion, lang);
    const invConclusion = breakOnCheckmarks(invConclusionRaw);

    return {
      badge,
      areaTitle,
      about,
      nutshellTitle,
      nutshell,
      nTitle1,
      nTitle2,
      nOverview,
      nProperties,
      invTitle,
      invPoints: invPoints.map((p) => ({
        title: pickLang(p?.title, lang),
        details: pickList(p?.details, lang),
      })),
      invConclusion,
    };
  }, [regionData, lang, isRTL]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !model) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set([headerRef.current, ...cardRefs.current], {
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

      if (cardRefs.current.length) {
        tl.fromTo(
          cardRefs.current,
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
      cardRefs.current = [];
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
            <span className={styles.kickerText}>{model.badge}</span>
          </div>

          <h2 className={styles.title}>{model.areaTitle}</h2>

          <div className={styles.rule} aria-hidden="true">
            <span className={styles.ruleLine} />
            <span className={styles.ruleGem} />
            <span className={styles.ruleLine} />
          </div>
        </header>

        {/* Top narrative grid */}
        <div className={styles.grid}>
          <article ref={addCardRef} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardDot} />
              <h3 className={styles.cardTitle}>
                {labelByLocale(isRTL, "About the Area", "عن المنطقة")}
              </h3>
            </div>
            {model.about ? <p className={styles.text}>{model.about}</p> : null}
          </article>

          <article ref={addCardRef} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardDot} />
              <h3 className={styles.cardTitle}>{model.nutshellTitle}</h3>
            </div>

            {Array.isArray(model.nutshell) && model.nutshell.length > 0 ? (
              <ul className={styles.bullets}>
                {model.nutshell.map((item, i) => (
                  <li key={i} className={styles.bullet}>
                    <span className={styles.bulletMark} aria-hidden="true" />
                    <span className={styles.bulletText}>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>

          <article ref={addCardRef} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardDot} />
              <h3 className={styles.cardTitle}>{model.nTitle1}</h3>
            </div>
            {model.nOverview ? (
              <p className={styles.text}>{model.nOverview}</p>
            ) : null}
          </article>

          <article ref={addCardRef} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardDot} />
              <h3 className={styles.cardTitle}>{model.nTitle2}</h3>
            </div>
            {model.nProperties ? (
              <p className={styles.text}>{model.nProperties}</p>
            ) : null}
          </article>
        </div>

        {/* Investment Highlights (accordion) */}
        {(model.invPoints?.length > 0 || model.invConclusion) && (
          <section ref={addCardRef} className={styles.accordionWrap}>
            <div className={styles.sectionHead}>
              <h3 className={styles.sectionTitle}>{model.invTitle}</h3>
              <div className={styles.sectionLine} aria-hidden="true" />
            </div>

            {model.invPoints?.length > 0 && (
              <div className={styles.accordion}>
                {model.invPoints.map((p, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div
                      key={idx}
                      className={`${styles.item} ${isOpen ? styles.open : ""}`}
                    >
                      <button
                        type="button"
                        className={styles.trigger}
                        onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.triggerLeft}>
                          <span className={styles.index}>
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className={styles.triggerText}>{p.title}</span>
                        </span>

                        <span className={styles.chev} aria-hidden="true">
                          <span />
                          <span />
                        </span>
                      </button>

                      <div className={styles.panel}>
                        <div className={styles.panelInner}>
                          {p.details?.length ? (
                            <ul className={styles.detailList}>
                              {p.details.map((d, i) => (
                                <li key={i} className={styles.detailItem}>
                                  <span
                                    className={styles.detailDot}
                                    aria-hidden="true"
                                  />
                                  <span className={styles.detailText}>{d}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {model.invConclusion ? (
              <div className={styles.conclusion}>
                <div className={styles.conclusionTop}>
                  <span className={styles.cardDot} />
                  <span className={styles.conclusionLabel}>
                    {labelByLocale(isRTL, "Conclusion", "الخلاصة")}
                  </span>
                </div>

                {/* IMPORTANT: pre-line so \n becomes real line breaks */}
                <p className={`${styles.text} ${styles.conclusionText}`}>
                  {model.invConclusion}
                </p>
              </div>
            ) : null}
          </section>
        )}
      </div>
    </section>
  );
}
