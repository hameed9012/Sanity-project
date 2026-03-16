"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "@/components/LanguageProvider";
import { selectAboutValue } from "@/lib/aboutPage";
import styles from "@/styles/about/SobhaLegacyHero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function SobhaLegacyHero({ content }) {
  const { locale } = useLanguage();

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const bannerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const overlayRef = useRef(null);
  const imageOverlayRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (window.innerWidth < 1000) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 6,
          },
        });

        gsap.fromTo(
          bannerRef.current,
          { scale: 0.88, opacity: 0.6 },
          {
            scale: 1.1,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 95%",
              end: "top 40%",
              scrub: 4,
            },
          }
        );

        timeline
          .fromTo(
            rightTextRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2.4,
              ease: "power1.out",
            }
          )
          .fromTo(
            leftTextRef.current,
            { y: 70, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2.6,
              ease: "power1.out",
            },
            "-=1.2"
          );

        return;
      }

      gsap.set(bannerRef.current, {
        clipPath: "inset(0% 25% round 20px)",
        scale: 1.05,
      });

      const bannerAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      bannerAnimation
        .to(bannerRef.current, {
          clipPath: "inset(0% 0% round 20px)",
          scale: 1,
          duration: 2,
        })
        .to(imageOverlayRef.current, {
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.25), rgba(0,0,0,0.18), rgba(0,0,0,0.25))",
        })
        .to(overlayRef.current, { opacity: 0 });

      gsap.fromTo(
        rightTextRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightTextRef.current,
            start: "top 80%",
            end: "bottom 60%",
          },
        }
      );

      gsap.fromTo(
        leftTextRef.current,
        { y: 0, opacity: 1 },
        {
          y: -40,
          opacity: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "center top",
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!content?.imageUrl) {
    return null;
  }

  const descriptionOne = selectAboutValue(locale, content.description1, content.description1Ar);
  const descriptionTwo = selectAboutValue(locale, content.description2, content.description2Ar);
  const yearsNumber = selectAboutValue(locale, content.yearsNumber, content.yearsNumberAr);
  const yearsSuffix = selectAboutValue(locale, content.yearsSuffix, content.yearsSuffixAr);
  const labelTop = selectAboutValue(locale, content.labelTop, content.labelTopAr);
  const lineOne = selectAboutValue(locale, content.line1, content.line1Ar);
  const lineTwo = selectAboutValue(locale, content.line2, content.line2Ar);
  const sinceLabel = selectAboutValue(locale, content.sinceLabel, content.sinceLabelAr);
  const imageAlt = selectAboutValue(locale, content.imageAlt, content.imageAltAr);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div ref={overlayRef} className={styles.overlay} />

      <div ref={triggerRef} className={styles.stickyWrapper}>
        <div className={styles.heroInner}>
          <div
            ref={rightTextRef}
            className={locale === "ar" ? styles.leftTextBlock : styles.rightTextBlockRTL}
          >
            <div className={styles.textContainer}>
              {descriptionOne ? <p className={styles.description}>{descriptionOne}</p> : null}
              {descriptionTwo ? <p className={styles.description}>{descriptionTwo}</p> : null}
            </div>
          </div>

          <div className={styles.bannerWrapper}>
            <div ref={bannerRef} className={styles.aboutBanner}>
              <div ref={imageOverlayRef} className={styles.imageOverlay} />
              <div className={styles.imageContainer}>
                <Image
                  src={content.imageUrl}
                  alt={imageAlt}
                  fill
                  priority
                  className={`${styles.bannerImage} ${styles.onlyDesk}`}
                />
              </div>
              <div className={styles.mobileImageContainer}>
                <Image
                  src={content.imageUrl}
                  alt={imageAlt}
                  fill
                  priority
                  className={`${styles.bannerImage} ${styles.onlyMob}`}
                />
              </div>
            </div>
          </div>

          <div
            ref={leftTextRef}
            className={locale === "ar" ? styles.rightTextBlockRTL : styles.leftTextBlock}
          >
            <div className={styles.luxuryBadge}>
              <span className={styles.badgeYearsNumber}>{yearsNumber}</span>
              <span className={styles.badgeYearsPlus}>{yearsSuffix}</span>
            </div>

            <div className={styles.badgeShine} />

            <h3 className={styles.luxuryHeading}>
              <span className={styles.luxuryTop}>
                {labelTop}
                <br />
              </span>

              <span className={styles.luxuryMain}>
                {lineOne}
                <br />
                {lineTwo}
              </span>
            </h3>

            {sinceLabel ? <p className={styles.sinceLine}>{sinceLabel}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
