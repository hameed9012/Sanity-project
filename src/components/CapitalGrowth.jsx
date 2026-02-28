"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import styles from "@/styles/CapitalGrowth.module.css";

export default function CapitalGrowth() {
  const { locale, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  const isRTL = locale === "ar";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  const luxuryImages = [
    {
      url: `${CDN}/hartland/hero-bg.jpg`,
      alt: "Sobha Hartland Luxury Villas",
      title: "Premium Waterfront Villas",
      description: "Prime waterfront addresses with strong rental demand",
    },
    {
      url: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
      alt: "Al Sinniyyah Island Villas",
      title: "Private Island Living",
      description: "Exclusive island developments offering exceptional privacy",
    },
    {
      url: `${CDN}/massar-3/hero-bg.jpg`,
      alt: "Arada Massar Luxury Villas",
      title: "Gated Community Excellence",
      description: "Green, family-focused villa communities",
    },
  ];

  const growthMetrics = [
    {
      value: t("capitalGrowth.metricLocationsValue"),
      label: t("capitalGrowth.metricLocationsLabel"),
      description: t("capitalGrowth.metricLocationsDesc"),
      image: luxuryImages[1].url,
      alt: luxuryImages[1].alt,
    },
    {
      value: t("capitalGrowth.metricAmenitiesValue"),
      label: t("capitalGrowth.metricAmenitiesLabel"),
      description: t("capitalGrowth.metricAmenitiesDesc"),
      image: luxuryImages[0].url,
      alt: luxuryImages[0].alt,
    },
    {
      value: t("capitalGrowth.metricReturnsValue"),
      label: t("capitalGrowth.metricReturnsLabel"),
      description: t("capitalGrowth.metricReturnsDesc"),
      image: luxuryImages[2].url,
      alt: luxuryImages[2].alt,
    },
    {
      value: t("capitalGrowth.metricCommunityValue"),
      label: t("capitalGrowth.metricCommunityLabel"),
      description: t("capitalGrowth.metricCommunityDesc"),
      image: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: "Luxury Community Living",
    },
  ];

  return (
    <section
      className={`${styles.capitalGrowthSection} ${
        isVisible ? styles.visible : ""
      } ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div
            className={styles.heroBackground}
            style={{ backgroundImage: `url('${luxuryImages[0].url}')` }}
          >
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>{t("capitalGrowth.heroBadge")}</span>
            </div>
            <h1 className={styles.heroTitle}>{t("capitalGrowth.heroTitle")}</h1>
            <p className={styles.heroSubtitle}>
              {t("capitalGrowth.heroSubtitle")}
            </p>
          </div>
        </div>

        <div className={styles.metricsGallery}>
          <div className={styles.galleryHeader}>
            <h2 className={styles.galleryTitle}>
              {t("capitalGrowth.galleryTitle")}
            </h2>
            <p className={styles.gallerySubtitle}>
              {t("capitalGrowth.gallerySubtitle")}
            </p>
          </div>

          <div className={styles.galleryContainer}>
            <div className={styles.metricsNav}>
              {growthMetrics.map((metric, index) => (
                <button
                  key={index}
                  className={`${styles.navButton} ${
                    activeMetric === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveMetric(index)}
                >
                  <span className={styles.navValue}>{metric.value}</span>
                  <span className={styles.navLabel}>{metric.label}</span>
                </button>
              ))}
            </div>

            <div className={styles.metricsDisplay}>
              <div className={styles.metricImage}>
                <img
                  src={growthMetrics[activeMetric].image}
                  alt={growthMetrics[activeMetric].alt}
                  className={styles.displayImage}
                />
                <div className={styles.metricInfo}>
                  <div className={styles.metricValueLarge}>
                    {growthMetrics[activeMetric].value}
                  </div>
                  <div className={styles.metricLabelLarge}>
                    {growthMetrics[activeMetric].label}
                  </div>
                  <div className={styles.metricDescription}>
                    {growthMetrics[activeMetric].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fullWidthIntegratedSection}>
          <div className={styles.fullWidthIntegratedCard}>
            <div className={styles.topRow}>
              <div className={styles.portfolioMix}>
                <div className={styles.mixHeader}>
                  <h3 className={styles.mixTitle}>
                    {t("capitalGrowth.mixTitle")}
                  </h3>
                  <p className={styles.mixSubtitle}>
                    {t("capitalGrowth.mixSubtitle")}
                  </p>
                </div>

                <div className={styles.mixBars}>
                  <div className={styles.barItem}>
                    <div className={styles.barLabel}>
                      <span>
                        {t("capitalGrowth.mixUnderConstructionLabel")}
                      </span>
                      <span className={styles.barPercentage}>63%</span>
                    </div>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.barFill}
                        style={{ width: "63%" }}
                      ></div>
                    </div>
                  </div>

                  <div className={styles.barItem}>
                    <div className={styles.barLabel}>
                      <span>{t("capitalGrowth.mixReadyLabel")}</span>
                      <span className={styles.barPercentage}>37%</span>
                    </div>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.barFill}
                        style={{ width: "37%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className={styles.mixInsight}>
                  <p className={styles.insightText}>
                    <strong>{t("capitalGrowth.mixInsight")}</strong>
                  </p>
                </div>
              </div>

              <div className={styles.fundamentalsBlock}>
                <div className={styles.fundamentalsContent}>
                  <h2 className={styles.fundamentalsTitle}>
                    {t("capitalGrowth.fundamentalsTitle")}
                  </h2>

                  <div className={styles.fundamentalsStats}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>
                        {t("capitalGrowth.fundamentalsStat1Value")}
                      </div>
                      <div className={styles.statLabel}>
                        {t("capitalGrowth.fundamentalsStat1Label")}
                      </div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>
                        {t("capitalGrowth.fundamentalsStat2Value")}
                      </div>
                      <div className={styles.statLabel}>
                        {t("capitalGrowth.fundamentalsStat2Label")}
                      </div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>
                        {t("capitalGrowth.fundamentalsStat3Value")}
                      </div>
                      <div className={styles.statLabel}>
                        {t("capitalGrowth.fundamentalsStat3Label")}
                      </div>
                    </div>
                  </div>

                  <p className={styles.fundamentalsText}>
                    <strong>{t("capitalGrowth.fundamentalsText")}</strong>
                  </p>

                  <div className={styles.sourceNote}>
                    <strong>{t("capitalGrowth.fundamentalsSource")}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bottomRow}>
              <div className={styles.fullWidthImageContainer}>
                <img
                  src={luxuryImages[1].url}
                  alt={t("capitalGrowth.communitiesTitle")}
                  className={styles.fullWidthImage}
                />
                <div className={styles.fullWidthImageOverlay}>
                  <div className={styles.fullWidthImageContent}>
                    <h3 className={styles.fullWidthImageTitle}>
                      {t("capitalGrowth.communitiesTitle")}
                    </h3>
                    <p className={styles.fullWidthImageDescription}>
                      {t("capitalGrowth.communitiesDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
