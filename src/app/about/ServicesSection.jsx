"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/about/ServicesSection.module.css";

export default function ServicesSection() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "ar";

  return (
    <section
      id="services"
      className={styles.servicesSection}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerContainer}>
          <h2 className={styles.sectionTitle}>{t("services.title")}</h2>

          <div className={styles.headerContent}>
            <p
              className={styles.sectionIntro}
              dangerouslySetInnerHTML={{ __html: t("services.intro") }}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <div className={styles.iconCircle}>1</div>
            </div>

            <h3 className={styles.cardTitle}>{t("services.cards.0.title")}</h3>

            <ul className={styles.serviceList}>
              {t("services.cards.0.items", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index} className={styles.listItem}>
                    <span className={styles.bullet}></span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <div className={styles.iconCircle}>2</div>
            </div>

            <h3 className={styles.cardTitle}>{t("services.cards.1.title")}</h3>

            <ul className={styles.serviceList}>
              {t("services.cards.1.items", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index} className={styles.listItem}>
                    <span className={styles.bullet}></span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <div className={styles.iconCircle}>3</div>
            </div>

            <h3 className={styles.cardTitle}>{t("services.cards.2.title")}</h3>

            <ul className={styles.serviceList}>
              {t("services.cards.2.items", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index} className={styles.listItem}>
                    <span className={styles.bullet}></span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div className={styles.footerContainer}>
          <p
            className={styles.footerText}
            dangerouslySetInnerHTML={{ __html: t("services.footer") }}
          />
        </div>
      </div>
    </section>
  );
}
