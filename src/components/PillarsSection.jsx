"use client";

import styles from "@/styles/PillarSection.module.css";
import { useLanguage } from "./LanguageProvider";

const pillarsConfig = [
  {
    id: 1,
    img: "/pillar-1.avif",
    titleKey: "pillarsSection.pillar1.title",
    introKey: "pillarsSection.pillar1.intro",
    pointKeys: [
      "pillarsSection.pillar1.point1",
      "pillarsSection.pillar1.point2",
      "pillarsSection.pillar1.point3",
      "pillarsSection.pillar1.point4",
      "pillarsSection.pillar1.point5",
      "pillarsSection.pillar1.point6",
      "pillarsSection.pillar1.point7",
    ],
  },
  {
    id: 2,
    img: "/pillar-2.png",
    titleKey: "pillarsSection.pillar2.title",
    introKey: "pillarsSection.pillar2.intro",
    pointKeys: [
      "pillarsSection.pillar2.point1",
      "pillarsSection.pillar2.point2",
      "pillarsSection.pillar2.point3",
      "pillarsSection.pillar2.point4",
    ],
  },
  {
    id: 3,
    img: "/pillar-3-2.jpg",
    titleKey: "pillarsSection.pillar3.title",
    introKey: "pillarsSection.pillar3.intro",
    pointKeys: [
      "pillarsSection.pillar3.point1",
      "pillarsSection.pillar3.point2",
      "pillarsSection.pillar3.point3",
    ],
  },
];

export default function PillarsSection() {
  const { t, locale } = useLanguage();

  return (
    <section
      className={styles.newLaunchSection}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <div className={styles.titleSection}>
        <h2 className={`${styles.heading2} ${styles.linesOnSides}`}>
          {t("pillarsSection.heading")}
        </h2>
      </div>

      <div
        className={`${styles.container} ${styles.sectionSpaceTop} ${styles.sectionSpaceBottom} ${styles.latestImageBoxes}`}
      >
        {/* Three pillars */}
        <div className={styles.homeSlider}>
          <div className={styles.slidesWrapper}>
            {pillarsConfig.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`${styles.slide} ${
                  index === 1 ? styles.middleSlide : ""
                }`}
              >
                <div className={styles.latestBoxes}>
                  <div className={styles.latestBoxesCol}>
                    {/* Image */}
                    <div className={styles.latestBoxThumb}>
                      <img src={pillar.img} alt={t(pillar.titleKey)} />
                    </div>

                    {/* Content */}
                    <div className={styles.latestBoxContent}>
                      <h4>{t(pillar.titleKey)}</h4>
                      <p className={styles.pillarIntro}>{t(pillar.introKey)}</p>
                      <ul className={styles.pillarList}>
                        {pillar.pointKeys.map((key) => (
                          <li key={key}>{t(key)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
