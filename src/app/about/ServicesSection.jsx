"use client";

import React from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { selectAboutList, selectAboutValue } from "@/lib/aboutPage";
import styles from "@/styles/about/ServicesSection.module.css";

export default function ServicesSection({ content }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";
  const cards = Array.isArray(content?.cards) ? content.cards : [];

  if (!content) {
    return null;
  }

  const title = selectAboutValue(locale, content.title, content.titleAr);
  const intro = selectAboutValue(locale, content.intro, content.introAr);
  const footer = selectAboutValue(locale, content.footer, content.footerAr);

  return (
    <section
      id="services"
      className={styles.servicesSection}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          {title ? <h2 className={styles.sectionTitle}>{title}</h2> : null}

          <div className={styles.headerContent}>
            {intro ? (
              <p
                className={styles.sectionIntro}
                dangerouslySetInnerHTML={{ __html: intro }}
              />
            ) : null}
          </div>
        </div>

        {!!cards.length ? (
          <div className={styles.servicesGrid}>
            {cards.map((card, index) => {
              const items = selectAboutList(locale, card?.items, card?.itemsAr);

              return (
                <div
                  key={card?._key || `${card?.title || "card"}-${index}`}
                  className={styles.serviceCard}
                >
                  <div className={styles.cardIcon}>
                    <div className={styles.iconCircle}>{index + 1}</div>
                  </div>

                  <h3 className={styles.cardTitle}>
                    {selectAboutValue(locale, card?.title, card?.titleAr)}
                  </h3>

                  <ul className={styles.serviceList}>
                    {items.map((item, itemIndex) => (
                      <li key={`${card?._key || index}-${itemIndex}`} className={styles.listItem}>
                        <span className={styles.bullet} />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}

        {footer ? (
          <div className={styles.footerContainer}>
            <p
              className={styles.footerText}
              dangerouslySetInnerHTML={{ __html: footer }}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
