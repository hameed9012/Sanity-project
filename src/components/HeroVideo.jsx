"use client";
import React, { useState } from "react";
import styles from "@/styles/HeroVideo.module.css";
import { useLanguage } from "./LanguageProvider"; // Adjust path as needed

export default function HeroVideo() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { locale, t } = useLanguage();

  // Video translations
  const videoTranslations = {
    playVideo: t("video.playVideo", "Play Video"),
    duration: t("video.duration", "Duration"),
    views: t("video.views", "Views"),
    videoTitle: t("video.videoTitle", "Investment Strategy Video"),
    videoDescription: t(
      "video.videoDescription",
      "Exclusive insights on off-plan investments and portfolio management"
    ),
    close: t("video.close", "Close"),
    minutes: t("video.minutes", "min"),
  };

  return (
    <section
      className={`${styles.videoSection} ${locale === "ar" ? styles.rtl : ""}`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        {/* VIDEO COMPONENT - 100% FULL WIDTH */}
        <div className={styles.videoContainer}>
          <div
            className={styles.videoCard}
            onClick={() => setShowVideoModal(true)}
          >
            <div className={styles.videoThumbnail}>
              {/* Fallback if image doesn't load */}
              {!imageError ? (
                <img
                  src="/video-thumbnail.png"
                  alt={videoTranslations.videoTitle}
                  className={styles.thumbnailImage}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className={styles.fallbackBackground}>
                  <div className={styles.fallbackText}>
                    <h3>{t("Header.title", "MOHAMAD KODMANE")}</h3>
                    <p>{videoTranslations.videoTitle}</p>
                  </div>
                </div>
              )}

              <div className={styles.videoOverlay}></div>

              {/* Video Info - LARGER TEXT */}
              <div
                className={`${styles.videoInfo} ${
                  locale === "ar" ? styles.videoInfoRtl : ""
                }`}
              >
                <div className={styles.videoBadge}>
                  <span className={styles.badgeIcon}>▶️</span>
                  {videoTranslations.playVideo}
                </div>
                <div className={styles.videoStats}>
                  <div className={styles.videoStat}>
                    <span className={styles.statNumber}>15:42</span>
                    <span className={styles.statLabel}>
                      {videoTranslations.duration}
                    </span>
                  </div>
                  <div className={styles.videoStat}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>
                      {videoTranslations.views}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO CAPTION */}
        {/* <div className={styles.videoCaption}>
          <p className={styles.captionSub}>
            {videoTranslations.videoDescription}
          </p>
        </div> */}
      </div>

      {/* VIDEO MODAL - 100% FULL WIDTH */}
      {showVideoModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`${styles.closeButton} ${
                locale === "ar" ? styles.closeButtonRtl : ""
              }`}
              onClick={() => setShowVideoModal(false)}
              aria-label={videoTranslations.close}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://drive.google.com/file/d/1RdxoerPUOKV5mkI-cC7AVQmY19jt-0jw/preview?autoplay=1"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={videoTranslations.videoTitle}
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
