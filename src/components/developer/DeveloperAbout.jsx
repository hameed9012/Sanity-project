"use client";

import React, { useMemo } from "react";
import styles from "@/styles/developer/DeveloperAbout.module.css";
import { useLanguage } from "@/components/LanguageProvider";

function getTObject(t, key) {
  if (!t) return null;
  try {
    const v = t(key, { returnObjects: true });
    if (v && typeof v === "object" && v !== key) return v;
  } catch {}
  return null;
}

function safeT(t, key, fallback, values) {
  try {
    const v = t?.(key, values);
    if (v === undefined || v === null || v === "" || v === key) return fallback;
    return v;
  } catch {
    return fallback;
  }
}

function formatSlugToName(slug) {
  if (!slug) return "";
  return String(slug)
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function DeveloperAbout({ developer }) {
  const { t, locale } = useLanguage();

  const model = useMemo(() => {
    if (!developer?.slug) return null;

    const key = String(developer.slug);
    const base = `developerProfiles.${key}`;
    const profileObj = getTObject(t, base);

    // HERO
    const heroTitle =
      profileObj?.hero?.title ||
      safeT(t, `${base}.hero.title`, "") ||
      developer.displayName ||
      developer.name ||
      formatSlugToName(key);

    const heroTagline =
      profileObj?.hero?.tagline || safeT(t, `${base}.hero.tagline`, "");

    const heroSubtitle =
      profileObj?.hero?.subtitle || safeT(t, `${base}.hero.subtitle`, "");

    // WHY* (Insight cards)
    let whyKey = null;
    if (profileObj && typeof profileObj === "object") {
      whyKey =
        Object.keys(profileObj).find((k) =>
          String(k).toLowerCase().startsWith("why")
        ) || null;
    }
    const whyList = Array.isArray(profileObj?.[whyKey])
      ? profileObj[whyKey]
      : [];

    // SUMMARY + PERSPECTIVE
    const summary = profileObj?.summary || safeT(t, `${base}.summary`, "");
    const investmentPerspective =
      profileObj?.investmentPerspective ||
      safeT(t, `${base}.investmentPerspective`, "");

    // Labels (translatable)
    const sectionKicker = safeT(
      t,
      "developerAbout.kicker",
      "Developer Profile"
    );
    const whyTitle = safeT(t, "developerAbout.whyTitle", "Why");

    const summaryTitle = safeT(t, "developerAbout.summaryTitle", "Summary");
    const perspectiveTitle = safeT(
      t,
      "developerAbout.perspectiveTitle",
      "Investment Perspective"
    );

    // Insight label format
    const insightWord = safeT(t, "developerAbout.insightWord", "Insight");
    // If you want Arabic label like "لمحة 01" you can translate insightWord in ar.json.

    const displayName =
      developer.displayName ||
      developer.name ||
      heroTitle ||
      formatSlugToName(key);

    return {
      key,
      displayName,

      hero: { title: heroTitle, tagline: heroTagline, subtitle: heroSubtitle },
      whyTitle,
      whyList,

      summaryTitle,
      perspectiveTitle,
      summary,
      investmentPerspective,

      sectionKicker,
      insightWord,
      isRTL: String(locale || "")
        .toLowerCase()
        .startsWith("ar"),
    };
  }, [developer, t, locale]);

  if (!developer || !model) return null;

  const { hero, whyList } = model;

  return (
    <section className={styles.about}>
      {/* Backdrops */}
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.hairlineTop} aria-hidden="true" />
      <div className={styles.hairlineBottom} aria-hidden="true" />

      <div className={styles.container}>
        {/* =========================
            HERO (luxury header)
        ========================== */}
        <header className={styles.heroHeader}>
          <div className={styles.heroKicker}>
            <span className={styles.heroKickerDot} />
            <span className={styles.heroKickerText}>{model.sectionKicker}</span>
          </div>

          <h1 className={styles.heroTitle}>{hero.title}</h1>

          {hero.tagline ? (
            <p className={styles.heroTagline}>{hero.tagline}</p>
          ) : null}
          {hero.subtitle ? (
            <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          ) : null}

          <div className={styles.heroRule} aria-hidden="true">
            <span className={styles.ruleLine} />
            <span className={styles.ruleGem} />
            <span className={styles.ruleLine} />
          </div>
        </header>

        {/* =========================
            SECTION 1 — WHY (INSIGHT CARDS)
        ========================== */}
        {Array.isArray(whyList) && whyList.length > 0 && (
          <section className={styles.insights}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>{model.whyTitle}</h2>
              <div className={styles.sectionLine} aria-hidden="true" />
            </div>

            <div className={styles.insightsGrid}>
              {whyList.map((item, idx) => {
                const number = String(idx + 1).padStart(2, "0");
                const label = `${model.insightWord} ${number}`;

                return (
                  <article key={idx} className={styles.insightCard}>
                    <div className={styles.insightTop}>
                      <div className={styles.insightLabel}>
                        <span className={styles.insightLabelDot} />
                        <span className={styles.insightLabelText}>{label}</span>
                      </div>

                      <div
                        className={styles.insightOrnament}
                        aria-hidden="true"
                      >
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    {item?.title ? (
                      <h3 className={styles.insightTitle}>{item.title}</h3>
                    ) : null}

                    {item?.description ? (
                      <p className={styles.insightText}>{item.description}</p>
                    ) : null}

                    <div className={styles.insightCorners} aria-hidden="true">
                      <span className={styles.cTL} />
                      <span className={styles.cTR} />
                      <span className={styles.cBL} />
                      <span className={styles.cBR} />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================
            SUMMARY + INVESTMENT PERSPECTIVE
        ========================== */}
        {(model.summary || model.investmentPerspective) && (
          <section className={styles.summaryWrap}>
            <div className={styles.summaryGrid}>
              {model.summary ? (
                <div className={styles.summaryCard}>
                  <div className={styles.summaryCardTop}>
                    <span className={styles.summaryDot} />
                    <h3 className={styles.summaryTitle}>
                      {model.summaryTitle}
                    </h3>
                  </div>
                  <p className={styles.summaryText}>{model.summary}</p>
                </div>
              ) : null}

              {model.investmentPerspective ? (
                <div className={styles.summaryCard}>
                  <div className={styles.summaryCardTop}>
                    <span className={styles.summaryDot} />
                    <h3 className={styles.summaryTitle}>
                      {model.perspectiveTitle}
                    </h3>
                  </div>
                  <p className={styles.summaryText}>
                    {model.investmentPerspective}
                  </p>
                </div>
              ) : null}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
