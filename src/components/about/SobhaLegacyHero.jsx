"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/about/SobhaLegacyHero.module.css";

gsap.registerPlugin(ScrollTrigger);

const CDN = "https://luxury-real-estate-media.b-cdn.net";
// const DESKTOP_IMAGE = `${CDN}/aquamont/intro-main.png`;
const DESKTOP_IMAGE = `/mohamad-kodmane.png`;
const MOBILE_IMAGE = `/mohamad-kodmane.png`;

export default function SobhaLegacyHero() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "ar";

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const bannerRef = useRef(null);

  const leftTextRef = useRef(null); // 18 YEARS BLOCK
  const rightTextRef = useRef(null); // DESCRIPTION BLOCK

  const overlayRef = useRef(null);
  const imageOverlayRef = useRef(null);

  /* ================= GSAP ANIMATIONS ================= */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ---------------------------------------------------
       💥 MOBILE + TABLETS — SLOW TEXT + FASTER IMAGE EXPAND
      ---------------------------------------------------- */
      if (window.innerWidth < 1000) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 6,
          },
        });

        /* FAST IMAGE EXPANSION (phones/tablets only) */
        gsap.fromTo(
          bannerRef.current,
          { scale: 0.88, opacity: 0.6 },
          {
            scale: 1.1, // WIDER + FASTER
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 95%",
              end: "top 40%",
              scrub: 4, // FASTER RESPONSE
            },
          }
        );

        /* TEXT BLOCKS — BOTH SLOW + EQUAL */
        tl.fromTo(
          rightTextRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2.4,
            ease: "power1.out",
          }
        ).fromTo(
          leftTextRef.current,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2.6, // slightly slower for luxury effect
            ease: "power1.out",
          },
          "-=1.2" // overlaps smoothly
        );

        return;
      }

      /* ---------------------------------------------------
       💻 DESKTOP BEHAVIOR (unchanged)
      ---------------------------------------------------- */
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

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div ref={overlayRef} className={styles.overlay} />

      <div ref={triggerRef} className={styles.stickyWrapper}>
        <div className={styles.heroInner}>
          {/* DESCRIPTION BLOCK */}
          <div
            ref={rightTextRef}
            className={
              locale === "ar" ? styles.leftTextBlock : styles.rightTextBlockRTL
            }
          >
            <div className={styles.textContainer}>
              <p className={styles.description}>
                {t("aboutHero.description1")}
              </p>
              <p className={styles.description}>
                {t("aboutHero.description2")}
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className={styles.bannerWrapper}>
            <div ref={bannerRef} className={styles.aboutBanner}>
              <div ref={imageOverlayRef} className={styles.imageOverlay} />
              <div className={styles.imageContainer}>
                <Image
                  src={DESKTOP_IMAGE}
                  alt={t("aboutHero.imageAltDesk")}
                  fill
                  priority
                  className={`${styles.bannerImage} ${styles.onlyDesk}`}
                />
              </div>
              <div className={styles.mobileImageContainer}>
                <Image
                  src={MOBILE_IMAGE}
                  alt={t("aboutHero.imageAltMob")}
                  fill
                  priority
                  className={`${styles.bannerImage} ${styles.onlyMob}`}
                />
              </div>
            </div>
          </div>

          {/* YEARS BLOCK */}
          <div
            ref={leftTextRef}
            className={
              locale === "ar" ? styles.rightTextBlockRTL : styles.leftTextBlock
            }
          >
            <div className={styles.luxuryBadge}>
              <span className={styles.badgeYearsNumber}>
                {t("aboutHero.yearsNumber")}
              </span>
              <span className={styles.badgeYearsPlus}>
                {t("aboutHero.yearsPlus")}
              </span>
            </div>

            <div className={styles.badgeShine} />

            <h3 className={styles.luxuryHeading}>
              <span className={styles.luxuryTop}>
                {t("aboutHero.labelTop")} <br />
              </span>

              <span className={styles.luxuryMain}>
                {t("aboutHero.line1")} <br />
                {t("aboutHero.line2")}
              </span>
            </h3>

            <p className={styles.sinceLine}>{t("aboutHero.since")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
