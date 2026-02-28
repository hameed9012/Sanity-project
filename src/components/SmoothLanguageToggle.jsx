"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "./SmoothLanguageToggle.module.css";

export default function SmoothLanguageToggle() {
  const { locale, switchLanguage, isTransitioning } = useLanguage();

  return (
    <div className={styles.luxuryToggle}>
      <button
        onClick={() => switchLanguage(locale === "en" ? "ar" : "en")}
        disabled={isTransitioning}
        className={`${styles.toggleButton} ${
          isTransitioning ? styles.transitioning : ""
        } ${locale === "ar" ? styles.arabicActive : ""}`}
        aria-label={`Switch to ${locale === "en" ? "Arabic" : "English"}`}
      >
        <span className={styles.toggleTrack}>
          <span className={styles.toggleSlider} data-locale={locale}>
            <span className={styles.langText}>
              {locale === "en" ? "EN" : "AR"}
            </span>
          </span>
        </span>
        <div className={styles.toggleGlow} />
      </button>
    </div>
  );
}
