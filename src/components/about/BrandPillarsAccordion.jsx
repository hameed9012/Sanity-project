"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "@/styles/about/BrandPillarsAccordion.module.css";
import { useLanguage } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

function getString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function AccordionItem({ title, children, initialOpen = false, itemRef }) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div
      ref={itemRef}
      className={`${styles.accItem} ${open ? styles.accItemActive : ""}`}
    >
      <button
        className={styles.accHeader}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={styles.icons} aria-hidden="true" />
        <h2 className={styles.accTitle}>{title}</h2>
      </button>

      <div className={`${styles.accBodyWrapper} ${open ? styles.accBodyOpen : ""}`}>
        <div className={styles.accBody}>{children}</div>
      </div>
    </div>
  );
}

export default function BrandPillarsAccordion({ content }) {
  const { locale } = useLanguage();
  const isAr = locale === "ar";

  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const setItemRef = (el, i) => {
    if (el) itemRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sectionRef.current || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRefs.current.filter(Boolean),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [content]);

  if (!content) return null;

  const VISION_DEFAULT_EN =
    "To be the most trusted name in Dubai luxury real estate — setting the standard for client-first advisory, investment intelligence, and curated property experiences.";
  const VISION_DEFAULT_AR =
    "أن نكون الاسم الأكثر ثقة في العقارات الفاخرة في دبي — من خلال وضع المعيار في الاستشارات التي تضع العميل أولاً، وذكاء الاستثمار، وتجارب العقارات المنتقاة.";

  const MISSION_DEFAULT_EN =
    "To guide discerning investors and homeowners through Dubai's dynamic property landscape with expert market knowledge, integrity, and a relentless commitment to delivering exceptional results.";
  const MISSION_DEFAULT_AR =
    "توجيه المستثمرين وأصحاب المنازل المميزين عبر المشهد العقاري الديناميكي في دبي بمعرفة سوقية متخصصة ونزاهة والتزام لا يتزعزع بتحقيق نتائج استثنائية.";

  const visionTitle = getString(isAr ? content.visionTitleAr : content.visionTitle) || "Vision";
  const visionText = getString(isAr ? content.visionTextAr : content.visionText) || (isAr ? VISION_DEFAULT_AR : VISION_DEFAULT_EN);
  const visionImage = content.visionImageUrl || null;
  const visionImageAlt = getString(isAr ? content.visionImageAltAr : content.visionImageAlt) || "Vision";

  const missionTitle = getString(isAr ? content.missionTitleAr : content.missionTitle) || "Mission";
  const missionText = getString(isAr ? content.missionTextAr : content.missionText) || (isAr ? MISSION_DEFAULT_AR : MISSION_DEFAULT_EN);
  const missionImage = content.missionImageUrl || null;
  const missionImageAlt = getString(isAr ? content.missionImageAltAr : content.missionImageAlt) || "Mission";

  const coreTitle = getString(isAr ? content.coreTitleAr : content.coreTitle) || "Core Values";
  const coreSubtitleTop = getString(isAr ? content.coreSubtitleTopAr : content.coreSubtitleTop);
  const coreSubtitleBottom = getString(isAr ? content.coreSubtitleBottomAr : content.coreSubtitleBottom);
  const pillars = Array.isArray(content.pillars) ? content.pillars : [];

  return (
    <section
      ref={sectionRef}
      className={styles.brandAccSec}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        <div className={styles.accordion}>

          {/* ── Vision ── */}
          <AccordionItem
            title={visionTitle}
            initialOpen={false}
            itemRef={(el) => setItemRef(el, 0)}
          >
            <div className={styles.twoColContent}>
              {visionImage && (
                <div className={styles.twoColLeft}>
                  <div style={{ position: "relative", width: 320, maxWidth: "100%", aspectRatio: "4/3", borderRadius: 10, overflow: "hidden" }}>
                    <Image
                      src={visionImage}
                      alt={visionImageAlt}
                      fill
                      className={styles.iconImage}
                    />
                  </div>
                </div>
              )}
              <div className={styles.twoColRight}>
                {visionText && (
                  <p className={`${styles.twoColParagraph} ${styles.disc}`}>
                    {visionText}
                  </p>
                )}
              </div>
            </div>
          </AccordionItem>

          {/* ── Mission ── */}
          <AccordionItem
            title={missionTitle}
            initialOpen={false}
            itemRef={(el) => setItemRef(el, 1)}
          >
            <div className={styles.twoColContent}>
              {missionImage && (
                <div className={styles.twoColLeft}>
                  <div style={{ position: "relative", width: 320, maxWidth: "100%", aspectRatio: "4/3", borderRadius: 10, overflow: "hidden" }}>
                    <Image
                      src={missionImage}
                      alt={missionImageAlt}
                      fill
                      className={styles.iconImage}
                    />
                  </div>
                </div>
              )}
              <div className={styles.twoColRight}>
                {missionText && (
                  <p className={`${styles.twoColParagraph} ${styles.disc}`}>
                    {missionText}
                  </p>
                )}
              </div>
            </div>
          </AccordionItem>

          {/* ── Core Values ── */}
          {pillars.length > 0 && (
            <AccordionItem
              title={coreTitle}
              initialOpen={false}
              itemRef={(el) => setItemRef(el, 2)}
            >
              {(coreSubtitleTop || coreSubtitleBottom) && (
                <div className={`${styles.style2} ${styles.accBodyHeadingStyle2}`}>
                  {coreSubtitleBottom && <span>{coreSubtitleBottom}</span>}
                  {coreSubtitleTop}
                </div>
              )}

              <div className={styles.brandAccBoxMain}>
                {pillars.map((pillar, i) => {
                  const pillarTitle = getString(isAr ? pillar.titleAr : pillar.title);
                  const pillarText = getString(isAr ? pillar.textAr : pillar.text);
                  const pillarImage = pillar.imageUrl || null;
                  const pillarAlt = getString(isAr ? pillar.imageAltAr : pillar.imageAlt) || pillarTitle;

                  return (
                    <div key={pillar._key || i} className={styles.brandAccBox}>
                      {pillarImage && (
                        <div className={styles.brandAccThumb}>
                          <img
                            src={pillarImage}
                            alt={pillarAlt}
                            className={styles.brandAccImage}
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className={styles.brandPillarContent}>
                        {pillarTitle && <h5>{pillarTitle}</h5>}
                        {pillarText && <p>{pillarText}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </AccordionItem>
          )}

        </div>
      </div>
    </section>
  );
}
