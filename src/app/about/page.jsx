"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./about.module.css";
import SobhaLegacyHero from "@/components/about/SobhaLegacyHero";
import ServicesSection from "./ServicesSection";
import BuildingExcellenceSection from "@/components/about/BuildingExcellenceSection";
import BrandPillarsAccordion from "@/components/about/BrandPillarsAccordion";
import JourneyTimeline from "@/components/about/JourneyTimeline";

function localized(locale, enValue, arValue) {
  return locale === "ar" ? arValue || enValue || "" : enValue || arValue || "";
}

function FallbackAbout() {
  return (
    <>
      <SobhaLegacyHero />
      <BuildingExcellenceSection />
      <ServicesSection />
      <BrandPillarsAccordion />
      <JourneyTimeline />
    </>
  );
}

export default function AboutPage() {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";
  const [about, setAbout] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/site-settings", { cache: "no-store" });
        const json = await res.json();
        if (!active || !json?.ok) return;
        setAbout(json?.data?.about || null);
      } catch (error) {
        console.error("Failed to load About page settings", error);
      } finally {
        if (active) setLoaded(true);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const title = localized(locale, about?.title, about?.titleAr);
  const badge = localized(locale, about?.badge, about?.badgeAr);
  const subtitle = localized(locale, about?.subtitle, about?.subtitleAr);
  const sections = Array.isArray(about?.sections) ? about.sections : [];

  if (!loaded) return null;
  if (!title && sections.length === 0) return <FallbackAbout />;

  return (
    <main className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              {badge ? <div className={styles.badge}>{badge}</div> : null}
              <h1>{title}</h1>
              {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            </div>
            {about?.heroImageUrl ? (
              <div className={styles.photoSection}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={about.heroImageUrl}
                    alt={title || "About"}
                    fill
                    className={styles.image}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {sections.map((section, index) => {
        const heading = localized(locale, section?.heading, section?.headingAr);
        const body = locale === "ar" ? section?.bodyAr || section?.body || [] : section?.body || section?.bodyAr || [];

        return (
          <section
            key={`${heading || "section"}-${index}`}
            className={index % 2 === 0 ? styles.missionSection : styles.hero}
          >
            <div className={styles.container}>
              <div className={styles.missionContent}>
                {heading ? <h2>{heading}</h2> : null}
                {Array.isArray(body)
                  ? body.filter(Boolean).map((paragraph, paragraphIndex) => (
                      <p key={`${heading || index}-${paragraphIndex}`}>{paragraph}</p>
                    ))
                  : null}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
