"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "@/styles/PillarSection.module.css";
import { useLanguage } from "./LanguageProvider";

let cachedPillars;

async function fetchPillarsSettings() {
  if (cachedPillars !== undefined) return cachedPillars;

  try {
    const response = await fetch("/api/site-settings", { cache: "no-store" });
    if (!response.ok) {
      cachedPillars = null;
      return null;
    }

    const { data } = await response.json();
    cachedPillars = data?.pillars || null;
    return cachedPillars;
  } catch {
    cachedPillars = null;
    return null;
  }
}

export default function PillarsSection() {
  const { t, locale } = useLanguage();
  const isArabic = locale === "ar";

  const [cms, setCms] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchPillarsSettings().then((data) => {
      setCms(data);
      setLoaded(true);
    });
  }, []);

  const heading = (isArabic ? cms?.headingAr : cms?.heading) || t("pillarsSection.heading");
  const items = useMemo(
    () =>
      (Array.isArray(cms?.items) ? cms.items : []).filter(
        (item) => item && (item.imageUrl || item.title || item.titleAr)
      ),
    [cms]
  );

  if (!loaded) return null;
  if (!items.length) return null;

  return (
    <section className={styles.newLaunchSection} dir={isArabic ? "rtl" : "ltr"}>
      <div className={styles.titleSection}>
        <h2 className={`${styles.heading2} ${styles.linesOnSides}`}>{heading}</h2>
      </div>

      <div
        className={`${styles.container} ${styles.sectionSpaceTop} ${styles.sectionSpaceBottom} ${styles.latestImageBoxes}`}
      >
        <div className={styles.homeSlider}>
          <div className={styles.slidesWrapper}>
            {items.map((pillar, index) => (
              <div
                key={pillar._key || index}
                className={`${styles.slide} ${index === 1 ? styles.middleSlide : ""}`}
              >
                <div className={styles.latestBoxes}>
                  <div className={styles.latestBoxesCol}>
                    <div className={styles.latestBoxThumb}>
                      <img
                        src={pillar.imageUrl}
                        alt={isArabic ? pillar.titleAr || pillar.title : pillar.title}
                      />
                    </div>
                    <div className={styles.latestBoxContent}>
                      <h4>{isArabic ? pillar.titleAr || pillar.title : pillar.title}</h4>
                      {(isArabic ? pillar.introAr || pillar.intro : pillar.intro) ? (
                        <p className={styles.pillarIntro}>
                          {isArabic ? pillar.introAr || pillar.intro : pillar.intro}
                        </p>
                      ) : null}
                      <ul className={styles.pillarList}>
                        {((isArabic ? pillar.pointsAr || pillar.points : pillar.points) || []).map(
                          (point, pointIndex) => (
                            <li key={`${pillar._key || index}-${pointIndex}`}>{point}</li>
                          )
                        )}
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
