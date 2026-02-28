"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/about/BrandPillarsAccordion.module.css";

// ✅ Local images from /public (your files)
const IMAGES = {
  vision: "/economic-opportunity.jpg", // or "/vision.jpg" if you prefer (see note below)
  mission: "/mission.webp",
  transparency: "/transparency.avif",
  expertise: "/expertise.webp",
  results: "/results.webp",
};

export default function BrandPillarsAccordion() {
  const [active, setActive] = useState(null);
  const { t, locale } = useLanguage();
  const isRTL = locale === "ar";

  const toggle = (id) => setActive((prev) => (prev === id ? null : id));
  const isOpen = (id) => active === id;

  return (
    <section className={styles.brandAccSec} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.accordion}>
          {/* ================== VISION ================== */}
          <div
            className={`${styles.accItem} ${
              isOpen("vision") ? styles.accItemActive : ""
            }`}
          >
            <button
              type="button"
              className={styles.accHeader}
              onClick={() => toggle("vision")}
              aria-expanded={isOpen("vision")}
              aria-controls="acc-vision"
            >
              <span className={styles.icons} />
              <h2 className={styles.accTitle}>{t("pillars.vision.title")}</h2>
            </button>

            <div
              id="acc-vision"
              className={`${styles.accBodyWrapper} ${
                isOpen("vision") ? styles.accBodyOpen : ""
              }`}
            >
              <div className={styles.accBody}>
                <div className={styles.twoColContent}>
                  <Image
                    src={IMAGES.vision}
                    alt={t("pillars.vision.title")}
                    width={900}
                    height={650}
                    className={styles.iconImage}
                    priority={false}
                    sizes="(max-width: 900px) 100vw, 500px"
                  />

                  <p className={`${styles.disc} ${styles.twoColParagraph}`}>
                    {t("pillars.vision.text")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================== MISSION ================== */}
          <div
            className={`${styles.accItem} ${
              isOpen("mission") ? styles.accItemActive : ""
            }`}
          >
            <button
              type="button"
              className={styles.accHeader}
              onClick={() => toggle("mission")}
              aria-expanded={isOpen("mission")}
              aria-controls="acc-mission"
            >
              <span className={styles.icons} />
              <h2 className={styles.accTitle}>{t("pillars.mission.title")}</h2>
            </button>

            <div
              id="acc-mission"
              className={`${styles.accBodyWrapper} ${
                isOpen("mission") ? styles.accBodyOpen : ""
              }`}
            >
              <div className={styles.accBody}>
                <div className={styles.twoColContent}>
                  <Image
                    src={IMAGES.mission}
                    alt={t("pillars.mission.title")}
                    width={900}
                    height={650}
                    className={styles.iconImage}
                    sizes="(max-width: 900px) 100vw, 500px"
                  />

                  <p className={`${styles.disc} ${styles.twoColParagraph}`}>
                    {t("pillars.mission.text")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================== CORE PILLARS ================== */}
          <div
            className={`${styles.accItem} ${
              isOpen("pillars") ? styles.accItemActive : ""
            }`}
          >
            <button
              type="button"
              className={styles.accHeader}
              onClick={() => toggle("pillars")}
              aria-expanded={isOpen("pillars")}
              aria-controls="acc-pillars"
            >
              <span className={styles.icons} />
              <h2 className={styles.accTitle}>{t("pillars.core.title")}</h2>
            </button>

            <div
              id="acc-pillars"
              className={`${styles.accBodyWrapper} ${
                isOpen("pillars") ? styles.accBodyOpen : ""
              }`}
            >
              <div className={styles.accBody}>
                <h2
                  className={`${styles.style2} ${styles.accBodyHeadingStyle2}`}
                >
                  <span>{t("pillars.core.subtitleTop")}</span>
                  {t("pillars.core.subtitleBottom")}
                </h2>

                <div className={styles.brandAccBoxMain}>
                  {/* Transparency */}
                  <div className={styles.brandAccBox}>
                    <Image
                      src={IMAGES.transparency}
                      width={420}
                      height={550}
                      alt={t("pillars.core.p1.title")}
                      className={styles.brandAccImage}
                      sizes="(max-width: 900px) 100vw, 420px"
                    />
                    <div className={styles.brandPillarContent}>
                      <h5>{t("pillars.core.p1.title")}</h5>
                      <p className={styles.disc}>{t("pillars.core.p1.text")}</p>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className={styles.brandAccBox}>
                    <Image
                      src={IMAGES.expertise}
                      width={420}
                      height={550}
                      alt={t("pillars.core.p2.title")}
                      className={styles.brandAccImage}
                      sizes="(max-width: 900px) 100vw, 420px"
                    />
                    <div className={styles.brandPillarContent}>
                      <h5>{t("pillars.core.p2.title")}</h5>
                      <p className={styles.disc}>{t("pillars.core.p2.text")}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className={styles.brandAccBox}>
                    <Image
                      src={IMAGES.results}
                      width={420}
                      height={550}
                      alt={t("pillars.core.p3.title")}
                      className={styles.brandAccImage}
                      sizes="(max-width: 900px) 100vw, 420px"
                    />
                    <div className={styles.brandPillarContent}>
                      <h5>{t("pillars.core.p3.title")}</h5>
                      <p className={styles.disc}>{t("pillars.core.p3.text")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* end accordion */}
        </div>
      </div>
    </section>
  );
}
