"use client";

import { useState } from "react";
import Image from "next/image";

import { useLanguage } from "@/components/LanguageProvider";
import { selectAboutValue } from "@/lib/aboutPage";
import styles from "@/styles/about/BrandPillarsAccordion.module.css";

export default function BrandPillarsAccordion({ content }) {
  const [active, setActive] = useState(null);
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  if (!content) {
    return null;
  }

  const pillars = Array.isArray(content?.pillars) ? content.pillars : [];
  const visionTitle = selectAboutValue(locale, content.visionTitle, content.visionTitleAr);
  const visionText = selectAboutValue(locale, content.visionText, content.visionTextAr);
  const missionTitle = selectAboutValue(locale, content.missionTitle, content.missionTitleAr);
  const missionText = selectAboutValue(locale, content.missionText, content.missionTextAr);
  const coreTitle = selectAboutValue(locale, content.coreTitle, content.coreTitleAr);
  const coreSubtitleTop = selectAboutValue(
    locale,
    content.coreSubtitleTop,
    content.coreSubtitleTopAr
  );
  const coreSubtitleBottom = selectAboutValue(
    locale,
    content.coreSubtitleBottom,
    content.coreSubtitleBottomAr
  );

  const toggle = (id) => setActive((previous) => (previous === id ? null : id));
  const isOpen = (id) => active === id;

  return (
    <section className={styles.brandAccSec} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.accordion}>
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
              <h2 className={styles.accTitle}>{visionTitle}</h2>
            </button>

            <div
              id="acc-vision"
              className={`${styles.accBodyWrapper} ${
                isOpen("vision") ? styles.accBodyOpen : ""
              }`}
            >
              <div className={styles.accBody}>
                <div className={styles.twoColContent}>
                  {content?.visionImageUrl ? (
                    <Image
                      src={content.visionImageUrl}
                      alt={selectAboutValue(
                        locale,
                        content.visionImageAlt,
                        content.visionImageAltAr
                      )}
                      width={900}
                      height={650}
                      className={styles.iconImage}
                      priority={false}
                      sizes="(max-width: 900px) 100vw, 500px"
                    />
                  ) : null}

                  {visionText ? (
                    <p className={`${styles.disc} ${styles.twoColParagraph}`}>{visionText}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

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
              <h2 className={styles.accTitle}>{missionTitle}</h2>
            </button>

            <div
              id="acc-mission"
              className={`${styles.accBodyWrapper} ${
                isOpen("mission") ? styles.accBodyOpen : ""
              }`}
            >
              <div className={styles.accBody}>
                <div className={styles.twoColContent}>
                  {content?.missionImageUrl ? (
                    <Image
                      src={content.missionImageUrl}
                      alt={selectAboutValue(
                        locale,
                        content.missionImageAlt,
                        content.missionImageAltAr
                      )}
                      width={900}
                      height={650}
                      className={styles.iconImage}
                      sizes="(max-width: 900px) 100vw, 500px"
                    />
                  ) : null}

                  {missionText ? (
                    <p className={`${styles.disc} ${styles.twoColParagraph}`}>{missionText}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

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
              <h2 className={styles.accTitle}>{coreTitle}</h2>
            </button>

            <div
              id="acc-pillars"
              className={`${styles.accBodyWrapper} ${
                isOpen("pillars") ? styles.accBodyOpen : ""
              }`}
            >
              <div className={styles.accBody}>
                <h2 className={`${styles.style2} ${styles.accBodyHeadingStyle2}`}>
                  <span>{coreSubtitleTop}</span>
                  {coreSubtitleBottom}
                </h2>

                {!!pillars.length ? (
                  <div className={styles.brandAccBoxMain}>
                    {pillars.map((pillar, index) => (
                      <div
                        key={pillar?._key || `${pillar?.title || "pillar"}-${index}`}
                        className={styles.brandAccBox}
                      >
                        {pillar?.imageUrl ? (
                          <Image
                            src={pillar.imageUrl}
                            width={420}
                            height={550}
                            alt={selectAboutValue(locale, pillar?.imageAlt, pillar?.imageAltAr)}
                            className={styles.brandAccImage}
                            sizes="(max-width: 900px) 100vw, 420px"
                          />
                        ) : null}

                        <div className={styles.brandPillarContent}>
                          <h5>{selectAboutValue(locale, pillar?.title, pillar?.titleAr)}</h5>
                          <p className={styles.disc}>
                            {selectAboutValue(locale, pillar?.text, pillar?.textAr)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
