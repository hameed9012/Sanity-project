"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/PillarSection.module.css";
import { useLanguage } from "./LanguageProvider";

// Static fallback used while CMS loads or if Sanity is empty
const FALLBACK_PILLARS = [
  { id: 1, img: "/pillar-1.avif",   titleKey: "pillarsSection.pillar1.title", introKey: "pillarsSection.pillar1.intro", pointKeys: ["pillarsSection.pillar1.point1","pillarsSection.pillar1.point2","pillarsSection.pillar1.point3","pillarsSection.pillar1.point4","pillarsSection.pillar1.point5","pillarsSection.pillar1.point6","pillarsSection.pillar1.point7"] },
  { id: 2, img: "/pillar-2.png",    titleKey: "pillarsSection.pillar2.title", introKey: "pillarsSection.pillar2.intro", pointKeys: ["pillarsSection.pillar2.point1","pillarsSection.pillar2.point2","pillarsSection.pillar2.point3","pillarsSection.pillar2.point4"] },
  { id: 3, img: "/pillar-3-2.jpg",  titleKey: "pillarsSection.pillar3.title", introKey: "pillarsSection.pillar3.intro", pointKeys: ["pillarsSection.pillar3.point1","pillarsSection.pillar3.point2","pillarsSection.pillar3.point3"] },
];

let _cachedPillars = undefined;

async function fetchPillarsSettings() {
  if (_cachedPillars !== undefined) return _cachedPillars;
  try {
    const res = await fetch("/api/site-settings");
    if (!res.ok) { _cachedPillars = null; return null; }
    const { data } = await res.json();
    _cachedPillars = data?.pillars || null;
    return _cachedPillars;
  } catch {
    _cachedPillars = null;
    return null;
  }
}

export default function PillarsSection() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

  const [cms, setCms] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchPillarsSettings().then((data) => {
      setCms(data);
      setLoaded(true);
    });
  }, []);

  const heading =
    (isAr ? cms?.headingAr : cms?.heading) ||
    t("pillarsSection.heading");

  const hasCmsPillars = loaded && Array.isArray(cms?.items) && cms.items.length > 0;

  return (
    <section
      className={styles.newLaunchSection}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className={styles.titleSection}>
        <h2 className={`${styles.heading2} ${styles.linesOnSides}`}>
          {heading}
        </h2>
      </div>

      <div className={`${styles.container} ${styles.sectionSpaceTop} ${styles.sectionSpaceBottom} ${styles.latestImageBoxes}`}>
        <div className={styles.homeSlider}>
          <div className={styles.slidesWrapper}>
            {hasCmsPillars
              ? cms.items.map((pillar, index) => (
                  <div
                    key={pillar._key || index}
                    className={`${styles.slide} ${index === 1 ? styles.middleSlide : ""}`}
                  >
                    <div className={styles.latestBoxes}>
                      <div className={styles.latestBoxesCol}>
                        <div className={styles.latestBoxThumb}>
                          <img src={pillar.imageUrl} alt={isAr ? pillar.titleAr || pillar.title : pillar.title} />
                        </div>
                        <div className={styles.latestBoxContent}>
                          <h4>{isAr ? pillar.titleAr || pillar.title : pillar.title}</h4>
                          <p className={styles.pillarIntro}>
                            {isAr ? pillar.introAr || pillar.intro : pillar.intro}
                          </p>
                          <ul className={styles.pillarList}>
                            {((isAr ? pillar.pointsAr || pillar.points : pillar.points) || []).map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : FALLBACK_PILLARS.map((pillar, index) => (
                  <div
                    key={pillar.id}
                    className={`${styles.slide} ${index === 1 ? styles.middleSlide : ""}`}
                  >
                    <div className={styles.latestBoxes}>
                      <div className={styles.latestBoxesCol}>
                        <div className={styles.latestBoxThumb}>
                          <img src={pillar.img} alt={t(pillar.titleKey)} />
                        </div>
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