"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/about/BuildingExcellence.module.css";

gsap.registerPlugin(ScrollTrigger);

const SECTION_IMAGE = "/marina.jpg"; // put image in /public/about/

export default function BuildingExcellenceSection() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "ar";

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const mediaRef = useRef(null);
  const statRefs = useRef([]);

  const setStatRef = (el, index) => {
    if (el) statRefs.current[index] = el;
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        leftRef.current,
        { x: isRTL ? 80 : -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Media (middle)
      gsap.fromTo(
        mediaRef.current,
        { y: 26, rotate: -6, opacity: 0 },
        {
          y: 0,
          rotate: -4,
          opacity: 1,
          duration: 1.25,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Paragraph
      gsap.fromTo(
        rightRef.current,
        { x: isRTL ? -80 : 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Stats
      gsap.fromTo(
        statRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      // Counter
      statRefs.current.forEach((el, index) => {
        const span = el.querySelector("[data-count-span]");
        if (!span) return;

        const target = Number(t(`buildingExcellence.stats.${index}.count`));
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power1.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            span.textContent = Math.floor(counter.value);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [locale, isRTL, t]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      dir={isRTL ? "rtl" : "ltr"}
      style={{ "--heroImg": `url(${SECTION_IMAGE})` }}
    >
      <div className={styles.bgPattern} />
      <div className={styles.glowA} />
      <div className={styles.glowB} />

      <div className={styles.container}>
        {/* TOP GRID: heading | media | paragraph */}
        <div className={styles.topGrid}>
          {/* HEADING */}
          <div ref={leftRef} className={styles.leftCol}>
            <h2 className={styles.heading}>
              <span className={styles.headingPlain}>
                {t("buildingExcellence.heading.line1")}{" "}
              </span>
              <span className={styles.headingImageFill}>
                {t("buildingExcellence.heading.line2")}
              </span>
              <br />
              <span className={styles.headingPlain}>
                {t("buildingExcellence.heading.line3")}
              </span>
            </h2>

            <div className={styles.microLine} />
          </div>

          {/* UNIQUE MEDIA STACK (MIDDLE COLUMN - NOT ABSOLUTE) */}
          <div ref={mediaRef} className={styles.mediaCol} aria-hidden="true">
            <div className={styles.mediaStack}>
              <div className={styles.mediaBack} />

              <div className={styles.mediaCard}>
                <div className={styles.mediaFrame}>
                  <Image
                    src={SECTION_IMAGE}
                    alt={t("buildingExcellence.imageAlt")}
                    fill
                    priority
                    className={styles.mediaImage}
                  />
                  <div className={styles.mediaOverlay} />
                </div>
              </div>
            </div>
          </div>

          {/* PARAGRAPH */}
          <div ref={rightRef} className={styles.rightCol}>
            <p
              className={styles.paragraph}
              dangerouslySetInnerHTML={{
                __html: t("buildingExcellence.paragraph"),
              }}
            />
          </div>
        </div>

        {/* STATS GRID */}
        <div className={styles.statsGrid}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={(el) => setStatRef(el, i)}
              className={styles.statBoxWrapper}
            >
              <div className={styles.statBox}>
                <div className={styles.statTopLine} />

                <h3 className={styles.statTitle}>
                  <span data-count-span>
                    {t(`buildingExcellence.stats.${i}.count`)}
                  </span>
                  <span className={styles.statSuffix}>
                    {t(`buildingExcellence.stats.${i}.suffix`)}
                  </span>
                </h3>

                <div className={styles.statLabel}>
                  {t(`buildingExcellence.stats.${i}.label`)}
                </div>

                <div className={styles.statBottomLine} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomDivider} />
      </div>
    </section>
  );
}
