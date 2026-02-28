"use client";

import React, { useMemo, useState } from "react";
import styles from "@/styles/projects/ProjectSelling.module.css";
import { useLanguage } from "@/components/LanguageProvider";

// Props:
// - selling: data.selling
// - cta: data.cta
// - project: data.project (optional)
// - locale / isRTL optional (same pattern as your ProjectIntro) :contentReference[oaicite:3]{index=3}
export default function ProjectSelling({
  selling,
  cta,
  project,
  locale,
  isRTL,
}) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  const [openIdx, setOpenIdx] = useState(0);

  const safe = useMemo(() => {
    if (!selling) return null;

    return {
      oneLiner: selling.oneLiner || "",
      idealFor: Array.isArray(selling.idealFor) ? selling.idealFor : [],
      keyBenefits: Array.isArray(selling.keyBenefits)
        ? selling.keyBenefits
        : [],
      lifestyle: selling.lifestyle || null,
      investment: selling.investment || null,
      objections: Array.isArray(selling.objections) ? selling.objections : [],
      urgency: Array.isArray(selling.urgency) ? selling.urgency : [],
    };
  }, [selling]);

  if (!safe) return null;

  const t = {
    heading: activeIsRTL ? "لماذا هذا المشروع؟" : "Why This Project?",
    idealFor: activeIsRTL ? "مناسب لـ" : "Ideal For",
    benefits: activeIsRTL ? "أهم المميزات" : "Key Benefits",
    lifestyle: activeIsRTL ? "أسلوب الحياة" : "Lifestyle",
    investment: activeIsRTL ? "منطق الاستثمار" : "Investment Logic",
    objections: activeIsRTL ? "أسئلة شائعة قبل الشراء" : "Buyer Questions",
    urgency: activeIsRTL ? "لماذا الآن؟" : "Why Now?",
    ctaTitle: activeIsRTL ? "الخطوة التالية" : "Next Step",
    getInfo: activeIsRTL
      ? "احصل على التوافر والمخططات"
      : "Get availability & layouts",
  };

  const buttons = (cta && Array.isArray(cta.buttons) && cta.buttons) || [];

  return (
    <section className={styles.wrap} dir={activeIsRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.kicker}>{t.heading}</p>
          <h2 className={styles.title}>
            {project?.name ? project.name : activeIsRTL ? "المشروع" : "Project"}
          </h2>
          <p className={styles.oneLiner}>{safe.oneLiner}</p>

          {safe.idealFor.length > 0 && (
            <div className={styles.chipsRow}>
              <span className={styles.chipsLabel}>{t.idealFor}</span>
              <div className={styles.chips}>
                {safe.idealFor.map((x, i) => (
                  <span key={`${x}-${i}`} className={styles.chip}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Key Benefits */}
        {safe.keyBenefits.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t.benefits}</h3>
            <div className={styles.cards}>
              {safe.keyBenefits.map((b, i) => (
                <div key={b.title || i} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon}>{b.icon || "✨"}</span>
                    <h4 className={styles.cardTitle}>{b.title}</h4>
                  </div>
                  <p className={styles.cardText}>{b.proof}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lifestyle */}
        {safe.lifestyle && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              {safe.lifestyle.title || t.lifestyle}
            </h3>

            <div className={styles.split}>
              <div className={styles.panel}>
                <p className={styles.panelText}>{safe.lifestyle.story}</p>
              </div>

              {Array.isArray(safe.lifestyle.bullets) &&
                safe.lifestyle.bullets.length > 0 && (
                  <div className={styles.panel}>
                    <ul className={styles.list}>
                      {safe.lifestyle.bullets.map((x, i) => (
                        <li key={`${x}-${i}`} className={styles.listItem}>
                          <span className={styles.bulletDot} />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        )}

        {/* Investment */}
        {safe.investment && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              {safe.investment.title || t.investment}
            </h3>

            <div className={styles.grid2}>
              <div className={styles.panel}>
                <p className={styles.panelHeading}>
                  {activeIsRTL ? "الخلاصة" : "Thesis"}
                </p>
                <ul className={styles.list}>
                  {(safe.investment.thesis || []).map((x, i) => (
                    <li key={`${x}-${i}`} className={styles.listItem}>
                      <span className={styles.bulletDot} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.panel}>
                <p className={styles.panelHeading}>
                  {activeIsRTL ? "عوامل الطلب" : "Demand Drivers"}
                </p>
                <ul className={styles.list}>
                  {(safe.investment.demandDrivers || []).map((x, i) => (
                    <li key={`${x}-${i}`} className={styles.listItem}>
                      <span className={styles.bulletDot} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                {Array.isArray(safe.investment.exitStrategy) &&
                  safe.investment.exitStrategy.length > 0 && (
                    <div className={styles.exitRow}>
                      {safe.investment.exitStrategy.map((x, i) => (
                        <span key={`${x}-${i}`} className={styles.pill}>
                          {x}
                        </span>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}

        {/* Objections / FAQ */}
        {safe.objections.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t.objections}</h3>

            <div className={styles.accordion}>
              {safe.objections.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <button
                    key={item.q || idx}
                    type="button"
                    className={`${styles.accItem} ${
                      isOpen ? styles.accOpen : ""
                    }`}
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  >
                    <div className={styles.accHead}>
                      <span className={styles.accQ}>{item.q}</span>
                      <span className={styles.accIcon}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                    <div className={styles.accBody}>
                      <p className={styles.accA}>{item.a}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Urgency */}
        {safe.urgency.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t.urgency}</h3>
            <div className={styles.urgencyBox}>
              {safe.urgency.map((x, i) => (
                <div key={`${x}-${i}`} className={styles.urgencyRow}>
                  <span className={styles.urgencyDot} />
                  <span className={styles.urgencyText}>{x}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <p className={styles.ctaTitle}>{t.ctaTitle}</p>
            <p className={styles.ctaDesc}>{cta?.description || t.getInfo}</p>
          </div>

          <div className={styles.ctaBtns}>
            {buttons.length === 0 ? (
              <a href="/contact" className={styles.primaryBtn}>
                {activeIsRTL ? "تواصل معنا" : "Contact Us"}
              </a>
            ) : (
              buttons.map((b, i) => (
                <a
                  key={`${b.text}-${i}`}
                  href={b.url}
                  className={
                    b.type === "secondary"
                      ? styles.secondaryBtn
                      : styles.primaryBtn
                  }
                  target={b.url?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    b.url?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {b.text}
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
