// src/components/developer/DeveloperFounder.jsx
"use client";

import React, { useMemo } from "react";
import styles from "@/styles/developer/DeveloperFounder.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { developerFounders } from "@/data/developerFounder";

export default function DeveloperFounder({ developer }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar" || locale?.startsWith("ar");

  const founder = useMemo(() => {
    if (!developer?.slug) return null;
    return developerFounders?.[developer.slug] || null;
  }, [developer?.slug]);

  // ✅ This is why it "shows nothing": if no data for slug -> returns null
  if (!founder) return null;

  const bio = isRTL ? founder?.bio?.ar : founder?.bio?.en;
  const ctaLabel = isRTL ? founder?.ctaLabel?.ar : founder?.ctaLabel?.en;

  return (
    <section
      className={`${styles.wrap} ${isRTL ? styles.rtl : styles.ltr}`}
      dir={isRTL ? "rtl" : "ltr"}
      lang={locale || "en"}
      aria-label={isRTL ? "مؤسس المطور" : "Developer Founder"}
    >
      {/* HERO IMAGE AREA */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />

        {founder.imageUrl ? (
          <img
            src={founder.imageUrl}
            alt={founder.name}
            className={styles.heroImg}
            loading="lazy"
          />
        ) : (
          <div className={styles.heroImgFallback} />
        )}

        <div className={styles.brandMark} aria-hidden="true">
          <span className={styles.brandCircle}>◌</span>
        </div>
      </div>

      {/* WHITE BIO CARD */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.kicker}>
            <span className={styles.kickerLine} />
            <span className={styles.kickerText}>
              {isRTL ? "مؤسسنا" : "Our Founder"}
            </span>
            <span className={styles.kickerLine} />
          </div>

          <h2 className={styles.name}>{founder.name}</h2>
          <p className={styles.title}>{founder.title}</p>

          {bio && <p className={styles.bio}>{bio}</p>}
        </div>
      </div>
    </section>
  );
}
