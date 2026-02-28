"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import styles from "@/styles/OurServices.module.css";

export default function OurServices() {
  const { locale, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const isRTL = locale === "ar";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // Translation for hardcoded text
  const translations = {
    satisfaction: isRTL ? "100%" : "100%",
    managed: isRTL ? "+500" : "500+",
    experience: isRTL ? "+15" : "15+",
  };

  // Service features translations for both languages
  const serviceFeatures = {
    service1: isRTL
      ? [
          "تحليل المحفظة وتطوير الاستراتيجية",
          "البحث السوقي وتحديد الفرص",
          "تقييم المخاطر وتخطيط التنويع",
          "تحديد الجدول الزمني والهدف الاستثماري",
          "مراقبة الأداء والتحسين المستمر",
        ]
      : [
          "Portfolio analysis & strategy development",
          "Market research & opportunity identification",
          "Risk assessment & diversification planning",
          "Investment timeline & goal setting",
          "Performance monitoring & optimization",
        ],
    service2: isRTL
      ? [
          "فحص العقار والتحقق من الجودة",
          "التنسيق مع المطور وإتمام المستندات",
          "تحديد العيوب وإيجاد الحلول",
          "إدارة عملية التسليم",
          "الدعم والإرشاد بعد التسليم",
        ]
      : [
          "Property inspection & quality verification",
          "Developer coordination & documentation",
          "Defect identification & resolution",
          "Handover process management",
          "Post-handover support & guidance",
        ],
    service3: isRTL
      ? [
          "فحص المستأجرين وإدارة العقود",
          "تحصيل الإيجار والتقارير المالية",
          "تنسيق الصيانة والعناية بالعقار",
          "الامتثال القانوني وإدارة المستندات",
          "خدمات الدعم الطارئ على مدار 24/7",
        ]
      : [
          "Tenant screening & lease management",
          "Rent collection & financial reporting",
          "Maintenance coordination & property care",
          "Legal compliance & documentation",
          "24/7 emergency support services",
        ],
    service4: isRTL
      ? [
          "التقييم السوقي واستراتيجية التسعير",
          "التسويق وعرض العقار",
          "فحص المشترين والمفاوضات",
          "المستندات القانونية وإدارة المعاملات",
          "استراتيجيات تعظيم أرباح رأس المال",
        ]
      : [
          "Market valuation & pricing strategy",
          "Marketing & property presentation",
          "Buyer screening & negotiation",
          "Legal documentation & transaction management",
          "Capital gains optimization strategies",
        ],
    service5: isRTL
      ? [
          "مفاهيم التصميم الداخلي المخصص",
          "اختيار الأثاث والتوريد",
          "إدارة المشروع والتركيب",
          "مراقبة الجودة والفحص النهائي",
          "التنسيق لجاذبية الإيجار القصوى",
        ]
      : [
          "Custom interior design concepts",
          "Furniture selection & procurement",
          "Project management & installation",
          "Quality control & final inspection",
          "Styling for maximum rental appeal",
        ],
  };

  const services = [
    {
      id: 1,
      title: t("services.service1Title"),
      description: t("services.service1Desc"),
      features: serviceFeatures.service1,
      image: `${CDN}/sky-parks/exterior-night-01.jpg`,
      color: "#d7b46a",
      stage: t("services.service1Stage"),
    },
    {
      id: 2,
      title: t("services.service2Title"),
      description: t("services.service2Desc"),
      features: serviceFeatures.service2,
      image: `${CDN}/hartland/hero-bg.jpg`,
      color: "#c4a15d",
      stage: t("services.service2Stage"),
    },
    {
      id: 3,
      title: t("services.service3Title"),
      description: t("services.service3Desc"),
      features: serviceFeatures.service3,
      image: `${CDN}/lumena-alta/hero-bg.jpg`,
      color: "#b8941f",
      stage: t("services.service3Stage"),
    },
    {
      id: 4,
      title: t("services.service4Title"),
      description: t("services.service4Desc"),
      features: serviceFeatures.service4,
      image: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
      color: "#d7b46a",
      stage: t("services.service4Stage"),
    },
    {
      id: 5,
      title: t("services.service5Title"),
      description: t("services.service5Desc"),
      features: serviceFeatures.service5,
      image: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
      color: "#c4a15d",
      stage: t("services.service5Stage"),
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
          <h1 className={styles.mainTitle}>{t("services.headerTitle")}</h1>
          <div className={styles.titleDivider}></div>
          <p className={styles.tagline}>{t("services.headerTagline")}</p>
        </div>

        <div className={styles.journeySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t("services.journeyTitle")}
            </h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionSubtitle}>
              {t("services.journeySubtitle")}
            </p>
          </div>

          <div className={styles.journeyTimeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineStage}>
                <div className={styles.stageBadge}>1</div>
                <h3 className={styles.stageTitle}>
                  {t("services.journeyStep1Title")}
                </h3>
              </div>
              <p className={styles.stageDescription}>
                {t("services.journeyStep1Desc")}
              </p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineStage}>
                <div className={styles.stageBadge}>2</div>
                <h3 className={styles.stageTitle}>
                  {t("services.journeyStep2Title")}
                </h3>
              </div>
              <p className={styles.stageDescription}>
                {t("services.journeyStep2Desc")}
              </p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineStage}>
                <div className={styles.stageBadge}>3</div>
                <h3 className={styles.stageTitle}>
                  {t("services.journeyStep3Title")}
                </h3>
              </div>
              <p className={styles.stageDescription}>
                {t("services.journeyStep3Desc")}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.servicesShowcase}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t("services.servicesTitle")}
            </h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionSubtitle}>
              {t("services.servicesSubtitle")}
            </p>
          </div>

          <div className={styles.showcaseContainer}>
            <div className={styles.servicesNav}>
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`${styles.serviceNavItem} ${
                    activeService === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveService(index)}
                  style={{
                    borderLeftColor:
                      activeService === index ? service.color : "transparent",
                  }}
                >
                  <div className={styles.navStage}>{service.stage}</div>
                  <div className={styles.navContent}>
                    <span className={styles.navTitle}>{service.title}</span>
                    <span className={styles.navDescription}>
                      {service.description}
                    </span>
                  </div>
                  <div className={styles.navIndicator}>
                    <div
                      className={styles.indicatorDot}
                      style={{ backgroundColor: service.color }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>

            <div className={styles.serviceDisplay}>
              <div
                className={styles.displayBackground}
                style={{
                  backgroundImage: `url('${services[activeService].image}')`,
                }}
              >
                <div className={styles.displayOverlay}></div>
              </div>

              <div className={styles.displayContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceStage}>
                    {services[activeService].stage}
                  </div>
                  <div>
                    <h3 className={styles.serviceTitle}>
                      {services[activeService].title}
                    </h3>
                    <p className={styles.serviceDescription}>
                      {services[activeService].description}
                    </p>
                  </div>
                </div>

                <div className={styles.featuresGrid}>
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <div
                        className={styles.featureIcon}
                        style={{
                          backgroundColor: services[activeService].color,
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className={styles.featureText}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.serviceStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>
                      {translations.satisfaction}
                    </div>
                    <div className={styles.statLabel}>
                      {t("services.statsSatisfaction")}
                    </div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>
                      {translations.managed}
                    </div>
                    <div className={styles.statLabel}>
                      {t("services.statsManaged")}
                    </div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>
                      {translations.experience}
                    </div>
                    <div className={styles.statLabel}>
                      {t("services.statsExperience")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.promiseSection}>
          <div className={styles.promiseCard}>
            <div className={styles.promiseMain}>
              <div className={styles.promiseHeader}>
                <div className={styles.promiseOrnament}></div>
                <h2 className={styles.promiseTitle}>
                  {t("services.promiseTitle")}
                </h2>
              </div>

              <div className={styles.promiseBody}>
                <p className={styles.promiseStatement}>
                  {t("services.promiseStatement")}
                </p>

                <div className={styles.promiseHighlight}>
                  <div className={styles.highlightAccent}></div>
                  <div className={styles.highlightText}>
                    {t("services.promiseHighlight")}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.promiseVisual}>
              <div
                className={styles.promiseImage}
                style={{
                  backgroundImage: `url('${CDN}/al-sinniyyah-island/hero-bg.jpg')`,
                }}
              >
                <div className={styles.promiseOverlay}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
