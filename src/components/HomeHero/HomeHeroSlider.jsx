"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import styles from "./HomeHeroSlider.module.css";

export default function HomeHeroSlider({ locale = "en" }) {
  const [slides, setSlides] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const isAr = locale === "ar";

  useEffect(() => {
    let mounted = true;

    async function loadSlides() {
      try {
        const query = `*[_type == "heroSection"][0]{
          slides[]{
            titleEn,
            titleAr,
            link,
            "image": image.asset->url
          }
        }`;

        const data = await client.fetch(query);

        if (!mounted) return;

        const normalized = (data?.slides || []).filter(
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