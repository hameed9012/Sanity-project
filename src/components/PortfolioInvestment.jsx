"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import styles from "@/styles/PortfolioInvestment.module.css";

const CDN = "https://luxury-real-estate-media.b-cdn.net";

export default function PortfolioInvestment() {
  const { locale, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(3);

  const isRTL = locale === "ar";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Growth data with translations
  const growthData = {
    years: [1, 3, 5, 7],
    values: [100, 158, 242, 356],
    percentages: ["+0%", "+58%", "+142%", "+256%"],
    descriptions: [
      locale === "ar"
        ? "مرحلة الاستثمار الأولي مع اختيار عقاري استراتيجي"
        : "Initial investment phase with strategic property selection",
      locale === "ar"
        ? "نمو رأسمالي قوي من استثماراتقيد الإنشاء تنضج"
        : "Strong capital growth from off-plan investments maturing",
      locale === "ar"
        ? "تنويع المحفظة يظهر عوائد كبيرة"
        : "Portfolio diversification showing significant returns",
      locale === "ar"
        ? "تراكم ثروة طويلة الأجل بأقصى عائد استثماري"
        : "Long-term wealth accumulation with maximum ROI",
    ],
  };

  const portfolioProperties = [
    {
      src: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: "Skyline Wealth Generation",
      category: t("portfolio.card1Category"),
      title: t("portfolio.card1Title"),
      metrics: t("portfolio.card1Metrics"),
      description: t("portfolio.card1Desc"),
    },
    {
      src: `${CDN}/hartland/hero-bg.jpg`,
      alt: "Future Value Creation",
      category: t("portfolio.card2Category"),
      title: t("portfolio.card2Title"),
      metrics: t("portfolio.card2Metrics"),
      description: t("portfolio.card2Desc"),
    },
    {
      src: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
      alt: "Luxury Lifestyle Integration",
      category: t("portfolio.card3Category"),
      title: t("portfolio.card3Title"),
      metrics: t("portfolio.card3Metrics"),
      description: t("portfolio.card3Desc"),
    },
  ];

  // Performance highlights with translations
  const performanceHighlights = [
    {
      value: "63%",
      label:
        locale === "ar" ? "نمو مبيعاتقيد الإنشاء" : "Off-plan sales growth",
      trend: locale === "ar" ? "زيادة سنوية" : "Year-over-year increase",
      icon: "📊",
    },
    {
      value: "19.3%",
      label:
        locale === "ar" ? "زيادة العائد الإيجاري" : "Rental yield increase",
      trend: locale === "ar" ? "مواقع متميزة" : "Premium locations",
      icon: "🏢",
    },
    {
      value: "10%",
      label: locale === "ar" ? "ارتفاع الأسعار" : "Price appreciation",
      trend: locale === "ar" ? "متوسط سنوي" : "Annual average",
      icon: "💵",
    },
    {
      value: "119,800",
      label: locale === "ar" ? "إجمالي المعاملات" : "Total transactions",
      trend: locale === "ar" ? "حجم السوق" : "Market volume",
      icon: "🧾",
    },
  ];

  return (
    <section
      className={`${styles.portfolioSection} ${
        isVisible ? styles.visible : ""
      } ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        <div className={styles.elegantHeader}>
          <div className={styles.headerOrnament}>
            <div className={styles.ornamentLine}></div>
            <div className={styles.ornamentDot}></div>
            <div className={styles.ornamentLine}></div>
          </div>
          <h1 className={styles.mainTitle}>{t("portfolio.headerTitle")}</h1>
          <div className={styles.titleDivider}></div>
          <p className={styles.tagline}>{t("portfolio.headerTagline")}</p>
        </div>

        <div className={styles.propertiesGrid}>
          {portfolioProperties.map((property, index) => (
            <div key={index} className={styles.propertyCard}>
              <div className={styles.cardImage}>
                <img
                  src={property.src}
                  alt={property.alt}
                  className={styles.propertyImage}
                  loading="lazy"
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.propertyCategory}>
                    {property.category}
                  </span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.propertyTitle}>{property.title}</h3>
                <div className={styles.propertyMetrics}>{property.metrics}</div>
                <p className={styles.propertyDescription}>
                  {property.description}
                </p>
                <div className={styles.cardDivider}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.growthSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t("portfolio.growthTitle")}
            </h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionSubtitle}>
              {t("portfolio.growthSubtitle")}
            </p>
          </div>

          <div className={styles.growthVisualization}>
            <div className={styles.yearSelector}>
              {growthData.years.map((year, index) => (
                <button
                  key={year}
                  className={`${styles.yearButton} ${
                    activeYear === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveYear(index)}
                >
                  <span className={styles.yearLabel}>
                    {t("portfolio.yearLabel")} {year}
                  </span>
                  <span className={styles.yearReturn}>
                    {growthData.percentages[index]}
                  </span>
                </button>
              ))}
            </div>

            <div className={styles.growthChart}>
              <div className={styles.chartContainer}>
                <div className={styles.growthLine}>
                  {growthData.values.map((value, index) => (
                    <div
                      key={index}
                      className={`${styles.dataPoint} ${
                        index <= activeYear ? styles.active : ""
                      } ${index === activeYear ? styles.current : ""}`}
                      style={{
                        left: `${
                          (index / (growthData.values.length - 1)) * 100
                        }%`,
                        bottom: `${((value - 100) / 300) * 100}%`,
                      }}
                    >
                      <div className={styles.pointValue}>
                        {locale === "ar" ? `${value} ألف` : `$${value}K`}
                      </div>
                      <div className={styles.pointDot}></div>
                    </div>
                  ))}

                  <div className={styles.connectionLines}>
                    {growthData.values.slice(0, -1).map((_, index) => (
                      <div
                        key={index}
                        className={`${styles.connectionLine} ${
                          index < activeYear ? styles.active : ""
                        }`}
                        style={{
                          left: `${
                            (index / (growthData.values.length - 1)) * 100
                          }%`,
                          width: `${
                            (1 / (growthData.values.length - 1)) * 100
                          }%`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className={styles.yAxis}>
                  <span className={styles.yLabel}>
                    {locale === "ar" ? "100 ألف" : "$100K"}
                  </span>
                  <span className={styles.yLabel}>
                    {locale === "ar" ? "200 ألف" : "$200K"}
                  </span>
                  <span className={styles.yLabel}>
                    {locale === "ar" ? "300 ألف" : "$300K"}
                  </span>
                  <span className={styles.yLabel}>
                    {locale === "ar" ? "400 ألف" : "$400K"}
                  </span>
                </div>

                <div className={styles.xAxis}>
                  {growthData.years.map((year, index) => (
                    <span key={year} className={styles.xLabel}>
                      {t("portfolio.yearLabel")} {year}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.currentInfo}>
                <div className={styles.infoCard}>
                  <div className={styles.infoHeader}>
                    <h3 className={styles.infoTitle}>
                      {locale === "ar" ? "أداء" : "Performance"}{" "}
                      {t("portfolio.yearLabel")} {growthData.years[activeYear]}
                    </h3>
                    <div className={styles.infoReturn}>
                      {growthData.percentages[activeYear]}
                    </div>
                  </div>
                  <p className={styles.infoDescription}>
                    {growthData.descriptions[activeYear]}
                  </p>
                  <div className={styles.progressIndicator}>
                    <div
                      className={styles.progressBar}
                      style={{
                        width: `${
                          (activeYear / (growthData.years.length - 1)) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.performanceSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t("portfolio.marketInsightsTitle")}
            </h2>
            <div className={styles.sectionDivider}></div>
          </div>
          <div className={styles.performanceGrid}>
            {performanceHighlights.map((highlight, index) => (
              <div key={index} className={styles.performanceCard}>
                <div className={styles.cardOrnament}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardValue}>{highlight.value}</div>
                  <div className={styles.cardLabel}>{highlight.label}</div>
                  <div className={styles.cardTrend}>{highlight.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.philosophySection}>
          <div className={styles.philosophyGrid}>
            <div className={styles.objectivesCard}>
              <div className={styles.objectivesHeader}>
                <div className={styles.headerAccent}></div>
                <h3 className={styles.objectivesTitle}>
                  {t("portfolio.philosophyObjectivesTitle")}
                </h3>
              </div>
              <div className={styles.objectivesList}>
                <div className={styles.objectiveItem}>
                  <div className={styles.objectiveMarker}></div>
                  <div className={styles.objectiveContent}>
                    <h4 className={styles.objectiveHeading}>
                      {t("portfolio.objective1")}
                    </h4>
                  </div>
                </div>
                <div className={styles.objectiveItem}>
                  <div className={styles.objectiveMarker}></div>
                  <div className={styles.objectiveContent}>
                    <h4 className={styles.objectiveHeading}>
                      {t("portfolio.objective2")}
                    </h4>
                  </div>
                </div>
                <div className={styles.objectiveItem}>
                  <div className={styles.objectiveMarker}></div>
                  <div className={styles.objectiveContent}>
                    <h4 className={styles.objectiveHeading}>
                      {t("portfolio.objective3")}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.promiseCard}>
              <div className={styles.promiseHeader}>
                <div className={styles.promiseOrnament}></div>
                <h3 className={styles.promiseTitle}>
                  {t("portfolio.managementTitle")}
                </h3>
              </div>
              <div className={styles.promiseContent}>
                <p className={styles.promiseStatement}>
                  {t("portfolio.managementStatement")}
                </p>
                <div className={styles.promiseHighlight}>
                  <div className={styles.highlightAccent}></div>
                  <span className={styles.highlightText}>
                    {t("portfolio.managementHighlight")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
