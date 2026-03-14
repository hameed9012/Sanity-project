"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/projects/ProjectHero.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

// You'll need to install or create an icon component
// For now, I'll assume you have an Icon component or you can add emoji/icons via your CMS

function isVideo(url = "") {
  return /\.(mp4|webm|ogg)$/i.test(url);
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

  const bgUrl = heroData.backgroundUrl || heroData.squareImageUrl || "";
  const isBgVideo = isVideo(bgUrl);
  const logoSrc = heroData.squareImageUrl || heroData.backgroundUrl || "";

  const scrollToContent = () => {
    const secondWrapper = document.querySelector(`.${styles.secondWrapper}`);
    if (secondWrapper) {
      secondWrapper.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.root} dir={activeIsRTL ? "rtl" : "ltr"}>
      {/* HERO */}
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
            <p className={styles.subtitle}>
              {companyName} / {locationName}
            </p>

            {projectInfo.startingPrice && (
              <div className={styles.priceBadge}>
                {projectInfo.startingPrice}
              </div>
            )}
          </div>

          <div className={styles.vignette} />

          {showScrollIndicator && (
            <div
              className={styles.scrollIndicator}
              onClick={scrollToContent}
              role="button"
              tabIndex={0}
              aria-label="Scroll to content"
            >
              <div className={styles.scrollLine} />
              <span className={styles.scrollText}>
                {activeLocale === "ar" ? "اسفل" : "SCROLL"}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* LOGO + INFO */}
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
              ) : null}
            </div>
          </div>

          {/* Nearby Highlights */}
          {locationData?.proximityFeatures && (
            <div className={styles.nearbyGrid}>
              {locationData.proximityFeatures.map((item, i) => (
                <div key={i} className={styles.nearbyCard}>
                  <span className={styles.nearbyText}>
                    {getLocalizedText(item.text, activeLocale)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
