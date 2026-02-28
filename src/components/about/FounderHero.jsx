"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/about/FounderHero.module.css";

export default function FounderHero() {
  const sectionRef = useRef(null);
  const towerRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !towerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop scroll zoom (property behind zooms OUT while scrolling)
    mm.add("(min-width: 900px)", () => {
      gsap.fromTo(
        towerRef.current,
        { scale: 1.25, yPercent: 5 },
        {
          scale: 1,
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom", // when hero bottom enters viewport
            end: "top center", // stop zoom mid-screen
            scrub: 0.9,
          },
        }
      );
    });

    // Slight effect on mobile (subtle so it doesn’t break layout)
    mm.add("(max-width: 899px)", () => {
      gsap.fromTo(
        towerRef.current,
        { scale: 1.15, yPercent: 5 },
        {
          scale: 1,
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 40%",
            scrub: 0.7,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.heroInner}>
        {/* LEFT – QUOTE + SIGNATURE + SLOGAN */}
        <div className={styles.leftCol}>
          <div className={styles.quoteBlock}>
            <span className={styles.quoteMarkLeft}>“</span>

            <p className={styles.quoteText}>
              PERFECTION
              <br />
              IS NOT A DREAM,
              <br />
              BUT A REALITY
              <br />
              THAT I STRIVE
              <br />
              TOWARDS
              <br />
              IN MY WORK
            </p>

            <span className={styles.quoteMarkRight}>”</span>
          </div>

          <div className={styles.signatureBlock}>
            <span className={styles.signatureInitials}>MK</span>
            <span className={styles.signatureLine} />
            <div className={styles.signatureMeta}>
              <span className={styles.signatureName}>Mohamad Kodmani</span>
              <span className={styles.signatureTitle}>Founder</span>
            </div>
          </div>

          {/* SLOGAN (taken from your ArtOfDetail component) */}
          <div className={styles.sloganWrapper}>
            <span className={styles.sloganPre}>Where</span>
            <div className={styles.sloganMainRow}>
              <span className={styles.sloganMain}>The 1% Own</span>
              <span className={styles.sloganDivider} />
            </div>
          </div>
        </div>

        {/* RIGHT – BOSS + PROPERTY BEHIND */}
        <div className={styles.rightCol}>
          {/* Property / tower image behind */}
          <div ref={towerRef} className={styles.towerWrapper}>
            <Image
              src="https://luxury-real-estate-media.b-cdn.net/hartland/hero-bg.jpg" // TODO: put your tower / property image here
              alt="Luxury tower"
              fill
              priority
              className={styles.towerImg}
            />
          </div>

          {/* Boss image on top */}
          <div className={styles.bossWrapper}>
            <Image
              src="/boss-nobg.png"
              alt="Mohamad Kodmani"
              fill
              priority
              className={styles.bossImg}
            />
          </div>
        </div>
      </div>

      {/* subtle bottom fade like Sobha */}
      <div className={styles.bottomFade} />
    </section>
  );
}
