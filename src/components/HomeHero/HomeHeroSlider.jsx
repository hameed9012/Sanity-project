"use client";

import { useEffect, useState } from "react";
import styles from "./HomeHeroSlider.module.css";

export default function HomeHeroSlider({ locale = "en" }) {
  const [slides, setSlides] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const isAr = locale === "ar";

  useEffect(() => {
    let mounted = true;

    async function loadSlides() {
      try {
        const response = await fetch("/api/site-settings", { cache: "no-store" });
        const siteSettingsResponse = response.ok ? await response.json() : null;

        if (!mounted) return;

        const siteSettingSlides = (siteSettingsResponse?.data?.heroSlides || []).map((slide) => ({
          titleEn: slide?.title,
          titleAr: slide?.titleAr,
          link: slide?.ctaUrl || "/properties",
          image: slide?.imageUrl || slide?.backgroundUrl,
        }));

        const normalized = siteSettingSlides.filter(
          (slide) => slide?.image
        );

        setSlides(normalized);
      } catch (error) {
        console.error("Home hero slider fetch failed:", error);
        if (mounted) setSlides([]);
      } finally {
        if (mounted) setLoaded(true);
      }
    }

    loadSlides();

    return () => {
      mounted = false;
    };
  }, []);

  if (!loaded) return null;
  if (!slides.length) return null;

  return (
    <section className={styles.heroWrapper}>
      {slides.map((slide, index) => (
        <a
          key={index}
          href={slide.link || "#"}
          className={styles.slide}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}>
            <h2 className={isAr ? styles.rtlTitle : styles.ltrTitle}>
              {isAr ? slide.titleAr || slide.titleEn : slide.titleEn || slide.titleAr}
            </h2>
          </div>
        </a>
      ))}
    </section>
  );
}
