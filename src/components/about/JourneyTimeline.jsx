"use client";

import { useState } from "react";
import Image from "next/image";

import { useLanguage } from "@/components/LanguageProvider";
import { selectAboutValue } from "@/lib/aboutPage";
import styles from "@/styles/about/JourneyTimeline.module.css";

export default function JourneyTimeline({ content }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = Array.isArray(content?.steps) ? content.steps : [];

  if (!content || !steps.length) {
    return null;
  }

  const kicker = selectAboutValue(locale, content.kicker, content.kickerAr);
  const heading = selectAboutValue(locale, content.heading, content.headingAr);

  return (
    <section className={styles.section} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.headingBlock}>
        {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
        {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
      </div>

      <div className={styles.timelineRow}>
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const year = selectAboutValue(locale, step?.year, step?.yearAr);
          const title = selectAboutValue(locale, step?.title, step?.titleAr);
          const description = selectAboutValue(locale, step?.description, step?.descriptionAr);
          const imageAlt = selectAboutValue(locale, step?.imageAlt, step?.imageAltAr);

          return (
            <button
              key={step?._key || `${step?.year || "step"}-${index}`}
              type="button"
              className={`${styles.timelineItem} ${
                isActive ? styles.isActive : styles.isInactive
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <div className={styles.imageWrapper}>
                {step?.imageUrl ? (
                  <Image
                    src={step.imageUrl}
                    alt={imageAlt}
                    fill
                    className={styles.image}
                    sizes="(min-width: 1200px) 70vw, 100vw"
                    priority={index === 0}
                  />
                ) : null}
                <div className={styles.scrim} />
              </div>

              <div className={styles.yearOnly}>
                <span className={styles.year}>{year}</span>
              </div>

              <div className={styles.content}>
                <div className={styles.contentInner}>
                  <div className={styles.yearTitleRow}>
                    <span className={styles.year}>{year}</span>
                    <span className={styles.dash}> - </span>
                    <span className={styles.title}>{title}</span>
                  </div>
                  {description ? <p className={styles.description}>{description}</p> : null}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
