"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import styles from "@/styles/DubaiDemand.module.css";

export default function DubaiDemand() {
  const { locale, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const isRTL = locale === "ar";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  const luxuryImages = {
    background: `${CDN}/sky-parks/exterior-night-01.jpg`,
    visitors: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
    investors: `${CDN}/hartland/hero-bg.jpg`,
    corporations: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
  };

  const handleImageError = (imageKey) => {
    setImageErrors((prev) => ({ ...prev, [imageKey]: true }));
  };

  const getImageSrc = (imageKey) => {
    return imageErrors[imageKey]
      ? `/fallback-${imageKey}.jpg`
      : luxuryImages[imageKey];
  };

  // Translation for hardcoded text
  const translations = {
    comparisonText: isRTL ? "يتجاوز بـ" : "Outpaces by",
    yearOverYear: isRTL ? "سنوياً" : "YoY",
    visitorsNumber: isRTL ? "+25 مليون" : "25M+",
    investorsNumber: isRTL ? "+15 ألف" : "15K+",
    corporationsNumber: isRTL ? "+500" : "500+",
    priceGrowth: isRTL ? "+18%" : "+18%",
    rentalYield: isRTL ? "+22%" : "+22%",
    roi: isRTL ? "+35%" : "+35%",
    demandGrowth: isRTL ? "+25% سنوياً" : "+25% YoY",
    supplyGrowth: isRTL ? "+15% سنوياً" : "+15% YoY",
    demandValue: isRTL ? "100%" : "100%",
    supplyValue: isRTL ? "75%" : "75%",
    comparisonValue: isRTL ? "25%" : "25%",
  };

  return (
    <section
      className={`${styles.demandSection} ${isVisible ? styles.visible : ""} ${
        isRTL ? styles.rtl : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.backgroundElements}>
        <div
          className={styles.luxuryBackground}
          style={{ backgroundImage: `url(${getImageSrc("background")})` }}
          onError={() => handleImageError("background")}
        ></div>
        <div className={styles.backgroundOverlay}></div>
        <div className={styles.goldAccents}>
          <div className={styles.accentLine}></div>
          <div className={styles.accentDot}></div>
          <div className={styles.accentLine}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.mainHeader}>
          <div className={styles.headerBadge}>
            <span>{t("dubaiDemand.badge")}</span>
          </div>
          <h2 className={styles.sectionTitle}>{t("dubaiDemand.title")}</h2>
          <div className={styles.titleDivider}></div>
          <p className={styles.sectionDescription}>
            {t("dubaiDemand.description")}
          </p>
        </div>

        <div className={styles.dubaiWelcomes}>
          <div className={styles.welcomesHeader}>
            <h3 className={styles.welcomesTitle}>
              {t("dubaiDemand.welcomesTitle")}
            </h3>
            <div className={styles.welcomesDivider}></div>
          </div>

          <div className={styles.welcomesGrid}>
            <div className={styles.welcomeCard}>
              <div className={styles.cardVisual}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={getImageSrc("visitors")}
                    alt={t("dubaiDemand.visitorsTitle")}
                    className={styles.cardImage}
                    onError={() => handleImageError("visitors")}
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>
                  {t("dubaiDemand.visitorsTitle")}
                </h4>
                <p className={styles.cardDescription}>
                  {t("dubaiDemand.visitorsDesc")}
                </p>
                <div className={styles.cardStat}>
                  <span className={styles.statNumber}>
                    {translations.visitorsNumber}
                  </span>
                  <span className={styles.statLabel}>
                    {t("dubaiDemand.visitorsStat")}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.welcomeCard}>
              <div className={styles.cardVisual}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={getImageSrc("investors")}
                    alt={t("dubaiDemand.investorsTitle")}
                    className={styles.cardImage}
                    onError={() => handleImageError("investors")}
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>
                  {t("dubaiDemand.investorsTitle")}
                </h4>
                <p className={styles.cardDescription}>
                  {t("dubaiDemand.investorsDesc")}
                </p>
                <div className={styles.cardStat}>
                  <span className={styles.statNumber}>
                    {translations.investorsNumber}
                  </span>
                  <span className={styles.statLabel}>
                    {t("dubaiDemand.investorsStat")}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.welcomeCard}>
              <div className={styles.cardVisual}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={getImageSrc("corporations")}
                    alt={t("dubaiDemand.corporationsTitle")}
                    className={styles.cardImage}
                    onError={() => handleImageError("corporations")}
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 21v-8H7v8M7 3v5h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>
                  {t("dubaiDemand.corporationsTitle")}
                </h4>
                <p className={styles.cardDescription}>
                  {t("dubaiDemand.corporationsDesc")}
                </p>
                <div className={styles.cardStat}>
                  <span className={styles.statNumber}>
                    {translations.corporationsNumber}
                  </span>
                  <span className={styles.statLabel}>
                    {t("dubaiDemand.corporationsStat")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.resultSection}>
          <div className={styles.resultCard}>
            <div className={styles.resultVisual}>
              <div className={styles.luxuryChart}>
                <div className={styles.chartHeader}>
                  <h4 className={styles.chartMainTitle}>
                    {t("dubaiDemand.chartTitle")}
                  </h4>
                  <p className={styles.chartSubtitle}>
                    {t("dubaiDemand.chartSubtitle")}
                  </p>
                </div>
                <div className={styles.chartContainer}>
                  <div className={styles.chartBar} data-type="demand">
                    <div className={styles.barFill}>
                      <span className={styles.barValue}>
                        {translations.demandValue}
                      </span>
                    </div>
                    <div className={styles.barLabel}>
                      {t("dubaiDemand.chartDemandLabel")}
                    </div>
                    <div className={styles.barPercentage}>
                      {translations.demandGrowth}
                    </div>
                  </div>

                  <div className={styles.chartComparison}>
                    <div className={styles.comparisonArrow}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.comparisonText}>
                      <span>{translations.comparisonText}</span>
                      <span className={styles.comparisonValue}>
                        {translations.comparisonValue}
                      </span>
                    </div>
                  </div>

                  <div className={styles.chartBar} data-type="supply">
                    <div className={styles.barFill}>
                      <span className={styles.barValue}>
                        {translations.supplyValue}
                      </span>
                    </div>
                    <div className={styles.barLabel}>
                      {t("dubaiDemand.chartSupplyLabel")}
                    </div>
                    <div className={styles.barPercentage}>
                      {translations.supplyGrowth}
                    </div>
                  </div>
                </div>

                <div className={styles.chartLegend}>
                  <div className={styles.legendItem}>
                    <div
                      className={styles.legendColor}
                      style={{ background: "#d7b46a" }}
                    ></div>
                    <span>{t("dubaiDemand.chartDemandGrowth")}</span>
                  </div>
                  <div className={styles.legendItem}>
                    <div
                      className={styles.legendColor}
                      style={{ background: "rgba(215, 180, 106, 0.6)" }}
                    ></div>
                    <span>{t("dubaiDemand.chartSupplyGrowth")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.resultContent}>
              <div className={styles.resultHeader}>
                <div className={styles.resultBadge}>
                  <span>{t("dubaiDemand.resultBadge")}</span>
                </div>
                <h3 className={styles.resultTitle}>
                  {t("dubaiDemand.resultTitle")}
                </h3>
              </div>

              <div className={styles.resultText}>
                <p className={styles.resultHighlight}>
                  {t("dubaiDemand.resultHighlight")}
                </p>

                <div className={styles.resultStats}>
                  <div className={styles.resultStat}>
                    <span className={styles.statValue}>
                      {translations.priceGrowth}
                    </span>
                    <span className={styles.statLabel}>
                      {t("dubaiDemand.resultPriceGrowth")}
                    </span>
                  </div>
                  <div className={styles.resultStat}>
                    <span className={styles.statValue}>
                      {translations.rentalYield}
                    </span>
                    <span className={styles.statLabel}>
                      {t("dubaiDemand.resultRentalYield")}
                    </span>
                  </div>
                  <div className={styles.resultStat}>
                    <span className={styles.statValue}>{translations.roi}</span>
                    <span className={styles.statLabel}>
                      {t("dubaiDemand.resultRoi")}
                    </span>
                  </div>
                </div>

                <p className={styles.resultConclusion}>
                  {t("dubaiDemand.resultConclusion")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
