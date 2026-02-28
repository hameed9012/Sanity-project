"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import styles from "@/styles/DubaiEconomicGrowth.module.css";

export default function DubaiEconomicGrowth() {
  const { locale, t } = useLanguage();
  const [activeSector, setActiveSector] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const isRTL = locale === "ar";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  const luxuryImages = {
    background: `${CDN}/sky-parks/exterior-night-01.jpg`,
    trade: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
    finance: `${CDN}/hartland/hero-bg.jpg`,
    technology: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
    infrastructure: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
  };

  const sectors = [
    {
      name: t("dubaiEconomy.sector1Name"),
      description: t("dubaiEconomy.sector1Desc"),
      icon: "🌍",
      color: "#d7b46a",
      image: luxuryImages.trade,
    },
    {
      name: t("dubaiEconomy.sector2Name"),
      description: t("dubaiEconomy.sector2Desc"),
      icon: "🏢",
      color: "#b8943c",
      image: luxuryImages.finance,
    },
    {
      name: t("dubaiEconomy.sector3Name"),
      description: t("dubaiEconomy.sector3Desc"),
      icon: "💻",
      color: "#9c7a2a",
      image: luxuryImages.technology,
    },
    {
      name: t("dubaiEconomy.sector4Name"),
      description: t("dubaiEconomy.sector4Desc"),
      icon: "🚀",
      color: "#7d6320",
      image: luxuryImages.infrastructure,
    },
  ];

  return (
    <section
      className={`${styles.growthSection} ${isVisible ? styles.visible : ""} ${
        isRTL ? styles.rtl : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.backgroundElements}>
        <div
          className={styles.luxuryBackground}
          style={{ backgroundImage: `url(${luxuryImages.background})` }}
        ></div>
        <div className={styles.backgroundOverlay}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.circuitPattern}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.mainHeader}>
          <div className={styles.headerVisual}>
            <div className={styles.growthVisual}>
              <div className={styles.globeContainer}>
                <div className={styles.globe}>
                  <div className={styles.globeLine}></div>
                  <div className={styles.globeLine}></div>
                  <div className={styles.globeLine}></div>
                  <div className={styles.globeCore}></div>
                </div>
                <div className={styles.risingParticles}>
                  <div className={styles.particle}></div>
                  <div className={styles.particle}></div>
                  <div className={styles.particle}></div>
                  <div className={styles.particle}></div>
                  <div className={styles.particle}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>
              {t("dubaiEconomy.sectionTitle")}
            </h2>
            <div className={styles.goldDivider}></div>
            <p className={styles.sectionDescription}>
              {t("dubaiEconomy.descriptionMain")}
            </p>
            <p className={styles.sectionSubtitle}>
              {t("dubaiEconomy.descriptionSub")}
            </p>
          </div>
        </div>

        <div className={styles.economySection}>
          <div className={styles.economyCard}>
            <div className={styles.economyHeader}>
              <h3 className={styles.economyTitle}>
                {t("dubaiEconomy.driversTitle")}
              </h3>
              <div className={styles.economyIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.sectorsGrid}>
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className={`${styles.sectorItem} ${
                    activeSector === index ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveSector(index)}
                  style={{ "--sector-color": sector.color }}
                >
                  <div className={styles.sectorVisual}>
                    <div className={styles.sectorImageContainer}>
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className={styles.sectorImage}
                      />
                      <div className={styles.sectorOverlay}></div>
                    </div>
                    <div className={styles.sectorIcon}>
                      <span>{sector.icon}</span>
                      <div className={styles.sectorGlow}></div>
                    </div>
                  </div>
                  <div className={styles.sectorContent}>
                    <h4 className={styles.sectorName}>{sector.name}</h4>
                    <p className={styles.sectorDescription}>
                      {sector.description}
                    </p>
                    <div className={styles.sectorProgress}>
                      <div
                        className={styles.progressBar}
                        style={{ width: `${100 + index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.resultSection}>
          <div className={styles.resultCard}>
            <div className={styles.resultVisual}>
              <div className={styles.economyImpact}>
                <div className={styles.impactChart}>
                  <div className={styles.chartBar} data-type="economy">
                    <div className={styles.barFill} style={{ height: "95%" }}>
                      <span className={styles.barValue}>95%</span>
                    </div>
                    <div className={styles.barLabel}>
                      {t("dubaiEconomy.economyBarLabel")}
                    </div>
                  </div>
                  <div className={styles.chartArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.chartBar} data-type="realestate">
                    <div className={styles.barFill} style={{ height: "88%" }}>
                      <span className={styles.barValue}>88%</span>
                    </div>
                    <div className={styles.barLabel}>
                      {t("dubaiEconomy.realEstateBarLabel")}
                    </div>
                  </div>
                </div>
                <div className={styles.chartTitle}>
                  {t("dubaiEconomy.impactTitle")}
                </div>
              </div>
            </div>

            <div className={styles.resultContent}>
              <div className={styles.resultHeader}>
                <h3 className={styles.resultTitle}>
                  {t("dubaiEconomy.resultTitle")}
                </h3>
              </div>

              <div className={styles.resultText}>
                <p className={styles.resultHighlight}>
                  {t("dubaiEconomy.resultHighlight")}
                </p>

                <div className={styles.resultStats}>
                  <div className={styles.resultStat}>
                    <span className={styles.statValue}>+6.8%</span>
                    <span className={styles.statLabel}>
                      {t("dubaiEconomy.resultGdp")}
                    </span>
                  </div>
                  <div className={styles.resultStat}>
                    <span className={styles.statValue}>+18%</span>
                    <span className={styles.statLabel}>
                      {t("dubaiEconomy.resultValues")}
                    </span>
                  </div>
                  <div className={styles.resultStat}>
                    <span className={styles.statValue}>+22%</span>
                    <span className={styles.statLabel}>
                      {t("dubaiEconomy.resultYields")}
                    </span>
                  </div>
                </div>

                <div className={styles.investmentFeatures}>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>🛡️</div>
                    <span>{t("dubaiEconomy.featureSecurity")}</span>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>📈</div>
                    <span>{t("dubaiEconomy.featureStability")}</span>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>🌍</div>
                    <span>{t("dubaiEconomy.featureGlobalAppeal")}</span>
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
