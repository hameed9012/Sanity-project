"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/where-to-live/LocationFAQ.module.css";
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

function humanizeKey(key) {
  // burjKhalifaMinutes -> Burj Khalifa
  const clean = String(key)
    .replace(/Minutes$/i, "")
    .replace(/Km$/i, "");
  const spaced = clean
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export default function LocationFAQ({ regionData }) {
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

  const [openFaq, setOpenFaq] = useState(0);

  const model = useMemo(() => {
    if (!regionData) return null;

    const title = labelByLocale(
      isRTL,
      "Location & FAQ",
      "الموقع والأسئلة الشائعة"
    );
    const badge = labelByLocale(isRTL, "Location Signals", "مؤشرات الموقع");

    const locationText = pickLang(regionData?.summary?.location, lang);
    const cards =
      regionData?.locationCards && typeof regionData.locationCards === "object"
        ? regionData.locationCards
        : {};

    const entries = Object.entries(cards || {})
      .filter(([, v]) => v !== null && v !== undefined && v !== "")
      .map(([k, v]) => ({
        key: k,
        label: humanizeKey(k),
        value: typeof v === "number" ? v : String(v),
        unit: /minutes$/i.test(k) ? labelByLocale(isRTL, "min", "دقيقة") : "",
      }));

    const faqs = Array.isArray(regionData?.faqs) ? regionData.faqs : [];
    const normalizedFaqs = faqs
      .map((f) => ({
        q: pickLang(f?.question, lang),
        a: pickLang(f?.answer, lang),
      }))
      .filter((x) => x.q && x.a);

    return { title, badge, locationText, entries, faqs: normalizedFaqs };
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
            <span className={styles.kickerText}>{model.badge}</span>
          </div>

          <h2 className={styles.title}>{model.title}</h2>

          <div className={styles.rule} aria-hidden="true">
            <span className={styles.ruleLine} />
            <span className={styles.ruleGem} />
            <span className={styles.ruleLine} />
          </div>
        </header>

        <div className={styles.grid}>
          {/* Location Narrative */}
          <article ref={addBlockRef} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardDot} />
              <h3 className={styles.cardTitle}>
                {labelByLocale(isRTL, "Location Narrative", "وصف الموقع")}
              </h3>
            </div>

            {model.locationText ? (
              <p className={styles.text}>{model.locationText}</p>
            ) : null}

            {model.entries?.length ? (
              <div className={styles.metrics}>
                {model.entries.map((e) => (
                  <div key={e.key} className={styles.metric}>
                    <div className={styles.metricTop}>
                      <span className={styles.metricDot} />
                      <span className={styles.metricLabel}>{e.label}</span>
                    </div>
                    <div className={styles.metricValue}>
                      {e.value}
                      {e.unit ? (
                        <span className={styles.metricUnit}> {e.unit}</span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </article>

          {/* FAQ */}
          <article ref={addBlockRef} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardDot} />
              <h3 className={styles.cardTitle}>
                {labelByLocale(
                  isRTL,
                  "Frequently Asked Questions",
                  "الأسئلة الشائعة"
                )}
              </h3>
            </div>

            {model.faqs?.length ? (
              <div className={styles.faqs}>
                {model.faqs.map((f, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`${styles.faq} ${isOpen ? styles.open : ""}`}
                    >
                      <button
                        type="button"
                        className={styles.faqQ}
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.faqQText}>{f.q}</span>
                        <span className={styles.chev} aria-hidden="true">
                          <span />
                          <span />
                        </span>
                      </button>

                      <div className={styles.faqA}>
                        <div className={styles.faqAInner}>
                          <p className={styles.text}>{f.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className={styles.text}>
                {labelByLocale(
                  isRTL,
                  "No FAQs available for this area yet.",
                  "لا توجد أسئلة شائعة لهذه المنطقة حالياً."
                )}
              </p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
