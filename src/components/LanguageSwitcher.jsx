"use client";

import { useLanguage } from "./LanguageProvider";
import styles from "@/styles/SmoothLanguageToggle.module.css";

export default function LanguageSwitcher() {
  const { locale, switchLanguage, isTransitioning } = useLanguage();

  return (
    <div className={styles.luxuryToggle}>
      <button
        className={`${styles.toggleButton} ${
          isTransitioning ? styles.transitioning : ""
        }`}
        onClick={() => switchLanguage(locale === "en" ? "ar" : "en")}
      >
        <span className={styles.toggleTrack}>
          <span className={styles.toggleSlider} data-locale={locale}>
            <span className={styles.langText}>
              {locale === "en" ? "EN" : "AR"}
            </span>
          </span>
        </span>

        <span className={styles.toggleGlow}></span>
      </button>
    </div>
  );
}
