"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";
import useTranslation from "@/hooks/useTranslation";
import styles from "@/styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const isRTL = locale === "ar";

  return (
    <header className={styles.header} dir={isRTL ? "rtl" : "ltr"}>
      {/* MOBILE BACKGROUND IMAGE - SHOWS ONLY ON MOBILE */}
      <div className={styles.mobileBackground}>
        <Image
          src="/mohamad-kodmane.png"
          alt={
            isRTL
              ? "محمد قضماني - مستشار عقاري"
              : "Mohamad Kodmane - Real Estate Advisor"
          }
          fill
          className={styles.mobileBgImage}
          quality={80}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
          sizes="100vw"
        />
        <div className={styles.mobileBgOverlay}></div>
      </div>

      {/* DESKTOP BACKGROUND ELEMENTS */}
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.line}></div>

        {/* DESKTOP OWNER PICTURE - NOW VISIBLE ON ALL SCREENS */}
        <div
          className={`${styles.ownerBackground} ${
            isRTL ? styles.ownerBackgroundRTL : ""
          }`}
        >
          <Image
            src="/mohamad-kodmane.png"
            alt={
              isRTL
                ? "محمد قضماني - مستشار عقاري"
                : "Mohamad Kodmane - Real Estate Advisor"
            }
            width={220}
            height={220}
            className={styles.ownerBgImage}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
            sizes="(max-width: 768px) 100px, (max-width: 1200px) 180px, 220px"
          />
          <div className={styles.ownerBgOverlay}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* CREATIVE ASYMMETRICAL LAYOUT */}
          <div className={styles.creativeLayout}>
            {/* LOGO - OPTIMIZED NEXT.JS IMAGE */}
            <div className={styles.logoSection}>
              <div className={styles.logoContainer}>
                <Image
                  src="/logo.jpg"
                  alt={
                    isRTL ? "محمد قضماني للعقار" : "Mohamad Kodmane Real Estate"
                  }
                  width={320}
                  height={320}
                  className={styles.logoImage}
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
                />
                <div className={styles.logoGlow}></div>
              </div>
            </div>

            {/* CONTENT - ORGANIC FLOW */}
            <div className={styles.contentFlow}>
              <div className={styles.nameReveal}>
                <h1
                  className={`${styles.firstName} ${
                    isRTL ? styles.firstNameRTL : ""
                  }`}
                >
                  {t("Header.title")}
                </h1>
              </div>

              <div className={styles.titleElegant}>
                <h2
                  className={`${styles.subtitle} ${
                    isRTL ? styles.subtitleRTL : ""
                  }`}
                >
                  {t("Header.subtitle")}
                </h2>
              </div>

              <div className={styles.descriptionOrganic}>
                <p
                  className={`${styles.organicText} ${
                    isRTL ? styles.organicTextRTL : ""
                  }`}
                >
                  {t("Header.introPrefix")}
                  <strong
                    className={`${styles.highlight} ${
                      isRTL ? styles.highlightRTL : ""
                    }`}
                  >
                    {t("Header.companyName")}
                  </strong>
                  {t("Header.introSuffix")}
                </p>

                <p
                  className={`${styles.organicText} ${
                    isRTL ? styles.organicTextRTL : ""
                  }`}
                >
                  {t("Header.portfolio")}
                </p>

                <p
                  className={`${styles.organicText} ${
                    isRTL ? styles.organicTextRTL : ""
                  }`}
                >
                  {t("Header.expertise")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
