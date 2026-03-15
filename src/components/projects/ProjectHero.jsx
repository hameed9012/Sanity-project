"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/projects/ProjectHero.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

function isVideo(url = "") {
  return /\.(mp4|webm|ogg)$/i.test(url);
}

function getInitials(value) {
  const words = String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "MK";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ProjectHero({
  data,
  projectData,
  isRTL,
  locale,
  showScrollIndicator = true,
}) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  if (!data || !projectData) return null;

  const heroData = data;
  const projectInfo = projectData.project;
  const locationData = projectData.location;

  const projectName = getLocalizedText(projectInfo.name, activeLocale);
  const companyName = getLocalizedText(heroData.companyName, activeLocale);
  const locationName = getLocalizedText(projectInfo.location, activeLocale);
  const heroMeta = [companyName, locationName].filter(Boolean).join(" • ");

  const bgUrl = heroData.backgroundUrl || heroData.squareImageUrl || "";
  const isBgVideo = isVideo(bgUrl);
  const logoSrc = heroData.squareImageUrl || heroData.backgroundUrl || "";
  const proximityItems = Array.isArray(locationData?.proximityFeatures)
    ? locationData.proximityFeatures.filter((item) => item?.text)
    : [];
  const scrollLabel =
    activeLocale === "ar"
      ? "\u0627\u0646\u062a\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649"
      : "Scroll to content";

  const scrollToContent = () => {
    const secondWrapper = document.querySelector(`.${styles.secondWrapper}`);
    if (secondWrapper) {
      secondWrapper.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.root} dir={activeIsRTL ? "rtl" : "ltr"}>
      <section className={styles.hero}>
        <div className={styles.heroBgWrap}>
          {isBgVideo ? (
            <video
              className={styles.heroVideo}
              src={bgUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ) : bgUrl ? (
            <Image
              src={bgUrl}
              alt={projectName}
              fill
              priority
              sizes="100vw"
              className={styles.heroImage}
            />
          ) : (
            <div className={styles.heroImage} />
          )}

          <div className={styles.overlayContent}>
            <h1 className={styles.title}>{projectName}</h1>
            {heroMeta ? <p className={styles.subtitle}>{heroMeta}</p> : null}

            {projectInfo.startingPrice ? (
              <div className={styles.priceBadge}>{projectInfo.startingPrice}</div>
            ) : null}
          </div>

          <div className={styles.vignette} />

          {showScrollIndicator ? (
            <div
              className={styles.scrollIndicator}
              onClick={scrollToContent}
              role="button"
              tabIndex={0}
              aria-label={scrollLabel}
            >
              <div className={styles.scrollLine} />
              <span className={styles.scrollText}>
                {activeLocale === "ar" ? "\u0627\u0643\u062a\u0634\u0641" : "SCROLL"}
              </span>
            </div>
          ) : null}
        </div>
      </section>

      <section className={styles.secondWrapper}>
        <div className={styles.innerRow}>
          <div className={styles.detLogoContent}>
            <div className={styles.logoCard}>
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={`${projectName} logo`}
                  width={260}
                  height={140}
                  className={styles.logoImg}
                />
              ) : (
                <span className={styles.logoFallback}>{getInitials(projectName)}</span>
              )}
            </div>
          </div>

          {proximityItems.length > 0 ? (
            <div className={styles.nearbyGrid}>
              {proximityItems.map((item, index) => (
                <div key={index} className={styles.nearbyCard}>
                  <span className={styles.nearbyText}>
                    {getLocalizedText(item.text, activeLocale)}
                  </span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
