"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/LanguageTransitionWrapper.module.css";

export default function LanguageTransitionWrapper({ children }) {
  const { locale, isTransitioning } = useLanguage();

  return (
    <div
      className={`${styles.transitionWrapper} ${
        isTransitioning ? styles.transitioning : ""
      } ${locale === "ar" ? styles.rtl : styles.ltr}`}
      data-locale={locale}
    >
      {isTransitioning && (
        <div className={styles.transitionLoader}>
          <div className={styles.loaderBar}></div>
        </div>
      )}
      {children}
    </div>
  );
}
