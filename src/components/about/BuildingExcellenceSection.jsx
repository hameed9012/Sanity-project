"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "@/components/LanguageProvider";
import { selectAboutValue } from "@/lib/aboutPage";
import styles from "@/styles/about/BuildingExcellence.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function BuildingExcellenceSection({ content }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const mediaRef = useRef(null);
  const statRefs = useRef([]);

  const setStatRef = (element, index) => {
    if (element) statRefs.current[index] = element;
  };

  const stats = Array.isArray(content?.stats) ? content.stats : [];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
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

      statRefs.current.forEach((element, index) => {
        const span = element?.querySelector("[data-count-span]");
        if (!span) return;

        const target = Number(stats[index]?.count);
        if (!Number.isFinite(target)) return;

        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power1.out",
          scrollTrigger: { trigger: element, start: "top 85%" },
          onUpdate: () => {
            span.textContent = Math.floor(counter.value);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL, stats]);

  if (!content?.imageUrl) {
    return null;
  }

  const headingLineOne = selectAboutValue(
    locale,
    content.headingLine1,
    content.headingLine1Ar
  );

  const headingLineTwo = selectAboutValue(
    locale,
    content.headingLine2,
    content.headingLine2Ar
  );

  const headingLineThree = selectAboutValue(
    locale,
    content.headingLine3,
    content.headingLine3Ar
  );

  const paragraph = selectAboutValue(
    locale,
    content.paragraph,
    content.paragraphAr
  );

  const imageAlt = selectAboutValue(
    locale,
    content.imageAlt,
    content.imageAltAr
  );

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      dir={isRTL ? "rtl" : "ltr"}
      style={{ "--heroImg": `url(${content.imageUrl})` }}
    >
      <div className={styles.bgPattern} />
      <div className={styles.glowA} />
      <div className={styles.glowB} />

      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div ref={leftRef} className={styles.leftCol}>
            <h2 className={styles.heading}>
              <span className={styles.headingPlain}>{headingLineOne} </span>
              <span className={styles.headingImageFill}>{headingLineTwo}</span>
              <br />
              <span className={styles.headingPlain}>{headingLineThree}</span>
            </h2>

            <div className={styles.microLine} />
          </div>

          <div ref={mediaRef} className={styles.mediaCol} aria-hidden="true">
            <div className={styles.mediaStack}>
              <div className={styles.mediaBack} />

              <div className={styles.mediaCard}>
                <div className={styles.mediaFrame}>
                  <Image
                    src={content.imageUrl}
                    alt={imageAlt}
                    fill
                    priority
                    className={styles.mediaImage}
                  />
                  <div className={styles.mediaOverlay} />
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef} className={styles.rightCol}>
            {paragraph ? (
              <p
                className={styles.paragraph}
                dangerouslySetInnerHTML={{
                  __html: paragraph,
                }}
              />
            ) : null}
          </div>
        </div>

        {!!stats.length ? (
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div
                key={stat?._key || `${stat?.label || "stat"}-${index}`}
                ref={(element) => setStatRef(element, index)}
                className={styles.statBoxWrapper}
              >
                <div className={styles.statBox}>
                  <div className={styles.statTopLine} />

                  <h3 className={styles.statTitle}>
                    <span data-count-span>{stat?.count || ""}</span>
                    <span className={styles.statSuffix}>
                      {selectAboutValue(locale, stat?.suffix, stat?.suffixAr)}
                    </span>
                  </h3>

                  <div className={styles.statLabel}>
                    {selectAboutValue(locale, stat?.label, stat?.labelAr)}
                  </div>

                  <div className={styles.statBottomLine} />
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className={styles.bottomDivider} />
      </div>
    </section>
  );
}