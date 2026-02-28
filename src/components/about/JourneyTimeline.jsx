"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/about/JourneyTimeline.module.css";

export default function JourneyTimeline() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "ar";

  const STEPS = [
    {
      year: "2006",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80",
      title: t("journey.2006.title"),
      description: t("journey.2006.description"),
    },
    {
      year: "2013",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("journey.2013.title"),
      description: t("journey.2013.description"),
    },
    {
      year: "2016",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2070&q=80",
      title: t("journey.2016.title"),
      description: t("journey.2016.description"),
    },
    {
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2070&q=80",
      title: t("journey.2023.title"),
      description: t("journey.2023.description"),
    },
    {
      year: "2023_2025",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80",
      title: t("journey.2023_2025.title"),
      description: t("journey.2023_2025.description"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section} dir={isRTL ? "rtl" : "ltr"}>
      {/* Heading */}
      <div className={styles.headingBlock}>
        <p className={styles.kicker}>{t("journey.kicker")}</p>
        <h2 className={styles.heading}>{t("journey.heading")}</h2>
      </div>

      {/* Timeline Row */}
      <div className={styles.timelineRow}>
        {STEPS.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={step.year}
              type="button"
              className={`${styles.timelineItem} ${
                isActive ? styles.isActive : styles.isInactive
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              {/* Background + Scrim */}
              <div className={styles.imageWrapper}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className={styles.image}
                  sizes="(min-width: 1200px) 70vw, 100vw"
                  priority={index === 0}
                />
                <div className={styles.scrim} />
              </div>

              {/* COLLAPSED YEAR */}
              <div className={styles.yearOnly}>
                <span className={styles.year}>{step.year}</span>
              </div>

              {/* EXPANDED CONTENT */}
              <div className={styles.content}>
                <div className={styles.contentInner}>
                  <div className={styles.yearTitleRow}>
                    <span className={styles.year}>{step.year}</span>
                    <span className={styles.dash}> — </span>
                    <span className={styles.title}>{step.title}</span>
                  </div>
                  <p className={styles.description}>{step.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
