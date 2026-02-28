"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import styles from "@/styles/OffPlanInvestment.module.css";

export default function OffPlanInvestment() {
  const { locale, t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const isRTL = locale === "ar";

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  const propertyImages = [
    {
      src: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: isRTL
        ? "شقق فاخرة في سكاي باركس"
        : "Sobha SkyParks Luxury Apartment",
      title: isRTL ? "شقق عصرية" : "Modern Apartments",
      description: isRTL
        ? "مواقع مميزة بإطلالات بانورامية على المدينة"
        : "Prime locations with panoramic city views",
    },
    {
      src: `${CDN}/hartland/hero-bg.jpg`,
      alt: isRTL ? "فلل فاخرة في هارتلاند" : "Sobha Hartland Luxury Villas",
      title: isRTL ? "فلل فاخرة" : "Luxury Villas",
      description: isRTL
        ? "مساحات معيشة واسعة في مجمعات سكنية مسوّرة"
        : "Spacious living in gated communities",
    },
    {
      src: `${CDN}/lumena-alta/hero-bg.jpg`,
      alt: isRTL ? "برج لومينا ألتا التجاري" : "Lumena Alta Commercial Tower",
      title: isRTL ? "مساحات تجارية" : "Commercial Spaces",
      description: isRTL
        ? "فرص متميزة للمكاتب ومساحات البيع بالتجزئة"
        : "Premium office and retail opportunities",
    },
  ];

  return (
    <section
      className={`${styles.investmentSection} ${
        isVisible ? styles.visible : ""
      } ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t("offPlan.sectionTitle")}</h2>
          <div className={styles.goldDivider}></div>
          <p className={styles.sectionDescription}>
            {t("offPlan.sectionDescriptionMain")}
          </p>
          <p className={styles.sectionSubDescription}>
            {t("offPlan.sectionDescriptionSub")}
          </p>
        </div>

        <div className={styles.visualHero}>
          <div className={styles.imageCarousel}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: isRTL
                  ? `translateX(${currentImage * 100}%)`
                  : `translateX(-${currentImage * 100}%)`,
              }}
            >
              {propertyImages.map((image, index) => (
                <div key={index} className={styles.carouselSlide}>
                  <div className={styles.imageContainer}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.propertyImage}
                    />
                    <div className={styles.imageOverlay}></div>
                    <div className={styles.imageContent}>
                      <h3 className={styles.imageTitle}>{image.title}</h3>
                      <p className={styles.imageDescription}>
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.carouselNav}>
              {propertyImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.navDot} ${
                    currentImage === index ? styles.active : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                ></button>
              ))}
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${
                    ((currentImage + 1) / propertyImages.length) * 100
                  }%`,
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
          </div>

          <div className={styles.statsOverlay}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>7-9%</div>
              <div className={styles.statLabel}>
                {t("offPlan.statRoiLabel")}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>40%</div>
              <div className={styles.statLabel}>
                {t("offPlan.statPriceAdvantageLabel")}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>0%</div>
              <div className={styles.statLabel}>
                {t("offPlan.statTaxLabel")}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.strategyOverview}>
          <p className={styles.strategyText}>{t("offPlan.strategyText")}</p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.definitionCard}>
            <div className={styles.definitionHeader}>
              <div className={styles.definitionIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.definitionTitle}>
                {t("offPlan.definitionTitle")}
              </h3>
            </div>
            <div className={styles.definitionContent}>
              <p className={styles.definitionText}>
                {t("offPlan.definitionShort")}
              </p>
              <div className={styles.paymentHighlight}>
                <span className={styles.highlightText}>
                  {t("offPlan.definitionHighlight")}
                </span>
              </div>
              <div className={styles.paymentNote}>
                {t("offPlan.definitionNote")}
              </div>
            </div>
          </div>

          <div className={styles.benefitsCard}>
            <div className={styles.benefitsHeader}>
              <h3 className={styles.benefitsTitle}>
                {t("offPlan.benefitsTitle")}
              </h3>
              <div className={styles.benefitsIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <div className={styles.iconCircle}>
                    <span>1</span>
                  </div>
                </div>
                <div className={styles.benefitContent}>
                  <h4 className={styles.benefitHeading}>
                    {t("offPlan.benefit1Title")}
                  </h4>
                  <p className={styles.benefitDescription}>
                    {t("offPlan.benefit1Desc")}
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <div className={styles.iconCircle}>
                    <span>2</span>
                  </div>
                </div>
                <div className={styles.benefitContent}>
                  <h4 className={styles.benefitHeading}>
                    {t("offPlan.benefit2Title")}
                  </h4>
                  <p className={styles.benefitDescription}>
                    {t("offPlan.benefit2Desc")}
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <div className={styles.iconCircle}>
                    <span>3</span>
                  </div>
                </div>
                <div className={styles.benefitContent}>
                  <h4 className={styles.benefitHeading}>
                    {t("offPlan.benefit3Title")}
                  </h4>
                  <p className={styles.benefitDescription}>
                    {t("offPlan.benefit3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.timelineSection}>
          <h3 className={styles.timelineTitle}>{t("offPlan.timelineTitle")}</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>{t("offPlan.timelineStep1Title")}</h4>
                <p>{t("offPlan.timelineStep1Desc")}</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>{t("offPlan.timelineStep2Title")}</h4>
                <p>{t("offPlan.timelineStep2Desc")}</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>{t("offPlan.timelineStep3Title")}</h4>
                <p>{t("offPlan.timelineStep3Desc")}</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>{t("offPlan.timelineStep4Title")}</h4>
                <p>{t("offPlan.timelineStep4Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
