"use client";

import React, { useMemo } from "react";
import styles from "@/styles/developer/DeveloperFounder.module.css";
import { useLanguage } from "@/components/LanguageProvider";

export default function DeveloperFounder({ developer }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar" || locale?.startsWith("ar");

  const founder = useMemo(() => {
    const data = developer?.founder;
    if (!data) return null;

    const name = isRTL ? data?.nameAr || data?.name : data?.name || data?.nameAr;
    const title = isRTL ? data?.titleAr || data?.title : data?.title || data?.titleAr;
    const bio = isRTL ? data?.bioAr || data?.bio : data?.bio || data?.bioAr;
    const ctaLabel = isRTL
      ? data?.ctaLabelAr || data?.ctaLabel
      : data?.ctaLabel || data?.ctaLabelAr;

    if (!name && !title && !bio && !data?.imageUrl) return null;

    return {
      name,
      title,
      bio,
      ctaLabel,
      ctaUrl: data?.ctaUrl || "",
      imageUrl: data?.imageUrl || "",
    };
  }, [developer?.founder, isRTL]);

  if (!founder) return null;

  return (
    <section
      className={`${styles.wrap} ${isRTL ? styles.rtl : styles.ltr}`}
      dir={isRTL ? "rtl" : "ltr"}
      lang={locale || "en"}
      aria-label={isRTL ? "Developer Founder" : "Developer Founder"}
    >
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />

        {founder.imageUrl ? (
          <img
            src={founder.imageUrl}
            alt={founder.name || "Founder"}
            className={styles.heroImg}
            loading="lazy"
          />
        ) : (
          <div className={styles.heroImgFallback} />
        )}

        <div className={styles.brandMark} aria-hidden="true">
          <span className={styles.brandCircle}>O</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.kicker}>
            <span className={styles.kickerLine} />
            <span className={styles.kickerText}>
              {isRTL ? "Our Founder" : "Our Founder"}
            </span>
            <span className={styles.kickerLine} />
          </div>

          {founder.name ? <h2 className={styles.name}>{founder.name}</h2> : null}
          {founder.title ? <p className={styles.title}>{founder.title}</p> : null}
          {founder.bio ? <p className={styles.bio}>{founder.bio}</p> : null}

          {founder.ctaLabel && founder.ctaUrl ? (
            <div className={styles.actions}>
              <a
                href={founder.ctaUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.cta}
              >
                {founder.ctaLabel}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
