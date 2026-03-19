"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/where-to-live/AreaGuideHero.module.css";

import { useLanguage } from "@/components/LanguageProvider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

// ------------------------------
// Helpers (same pattern as DeveloperHero)
// ------------------------------
function toCdnUrl(src, CDN) {
  if (!src) return "";
  const s = String(src).trim();
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;

  const cleanCDN = String(CDN || "").replace(/\/$/, "");
  const cleanSrc = s.replace(/^\//, "");
  return `${cleanCDN}/${cleanSrc}`;
}

function isProbablyValidImageUrl(url) {
  if (!url) return false;
  const u = String(url).trim();
  if (!u) return false;
  if (u.includes("undefined") || u.includes("null")) return false;
  return true;
}

export default function AreaGuideHero({ regionData }) {
  const { locale, t } = useLanguage();

  const safeT = (key, values, fallback) => {
    try {
      const v = t?.(key, values);
      if (v === undefined || v === null || v === "" || v === key)
        return fallback;
      return v;
    } catch {
      return fallback;
    }
  };

  const lang = locale || "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const titleRef = useRef(null);
  const ornamentRef = useRef(null);

  const CDN =
    process.env.NEXT_PUBLIC_CDN ||
    process.env.NEXT_PUBLIC_CDN_URL ||
    "https://luxury-real-estate-media.b-cdn.net";

  // Resolve area data safely (your current area data shapes)
  const resolved = useMemo(() => {
    const name =
      regionData?.name ||
      regionData?.details?.name?.[lang] ||
      regionData?.details?.name?.en ||
      regionData?.details?.name?.ar ||
      "";

    const summary = regionData?.summary || regionData?.details?.summary || {};

    const location =
      summary?.location ||
      regionData?.location ||
      regionData?.details?.location ||
      "—";

    const avgBuy = summary?.avgBuy || regionData?.avgBuy || "—";
    const avgRent = summary?.avgRent || regionData?.avgRent || "—";
    const roi = summary?.roi || regionData?.roi || "—";

    const heroImage =
      regionData?.heroImage || regionData?.details?.heroImage || "";

    const gallerySlides =
      Array.isArray(regionData?.gallerySlides) &&
      regionData.gallerySlides.length
        ? regionData.gallerySlides
        : Array.isArray(regionData?.details?.gallerySlides) &&
          regionData.details.gallerySlides.length
        ? regionData.details.gallerySlides
        : heroImage
        ? [heroImage]
        : [];

    return { name, location, avgBuy, avgRent, roi, heroImage, gallerySlides };
  }, [regionData, lang]);

  const hardFallback = resolved.heroImage
    ? toCdnUrl(resolved.heroImage, CDN)
    : `${String(CDN).replace(/\/$/, "")}/fallback.jpg`;

  const [brokenMap, setBrokenMap] = useState({});
  useEffect(() => {
    setBrokenMap({});
  }, [resolved.name, locale]);

  // Normalized unique images
  const images = useMemo(() => {
    const normalized = (resolved.gallerySlides || [])
      .map((src) => toCdnUrl(src, CDN))
      .filter(isProbablyValidImageUrl)
      .filter((src, i, arr) => arr.indexOf(src) === i);

    return normalized.length ? normalized : [hardFallback];
  }, [resolved.gallerySlides, CDN, hardFallback]);

  const useSwiper = images.length > 1;

  const safeSrc = (src) => (brokenMap[src] ? hardFallback : src);

  // Labels / breadcrumb (same structure as DeveloperHero)
  const titleSub = safeT("areaHero.subtitle", undefined, "Dubai Area Guide");
  const bcHome = safeT("areaHero.breadcrumb.home", undefined, "Home");
  const bcAreas = safeT(
    "areaHero.breadcrumb.areas",
    undefined,
    "Where to Live"
  );

  // Optional: tiny facts pill line (kept minimal + elegant)
  const facts = useMemo(() => {
    const parts = [];
    if (resolved.location && resolved.location !== "—")
      parts.push(resolved.location);
    if (resolved.roi && resolved.roi !== "—") parts.push(`ROI ${resolved.roi}`);
    if (resolved.avgBuy && resolved.avgBuy !== "—")
      parts.push(`Buy ${resolved.avgBuy}`);
    if (resolved.avgRent && resolved.avgRent !== "—")
      parts.push(`Rent ${resolved.avgRent}`);
    return parts;
  }, [resolved.location, resolved.roi, resolved.avgBuy, resolved.avgRent]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        visualRef.current,
        { clipPath: "polygon(0% 10%, 100% 5%, 100% 90%, 0% 95%)", scale: 1.1 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 1.8,
          ease: "power3.inOut",
        }
      );

      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1.0"
      );

      tl.fromTo(
        ornamentRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );

      if (window.innerWidth > 768) {
        gsap.to(visualRef.current, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [resolved.name]);

  if (!regionData) return null;

  return (
    <section ref={sectionRef} className={styles.hero} dir={dir} lang={lang}>
      <div className={styles.geometricBg}>
        <div className={styles.geometricShape1} />
        <div className={styles.geometricShape2} />
        <div className={styles.geometricShape3} />
      </div>

      <div className={styles.heroContainer}>
        <div ref={visualRef} className={styles.visualArea}>
          {useSwiper ? (
            <Swiper
              key={`${resolved.name}-${locale}`}
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop
              speed={1200}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className={styles.heroSwiper}
            >
              {images.map((src, idx) => (
                <SwiperSlide key={`${src}-${idx}`} className={styles.heroSlide}>
                  <Image
                    src={safeSrc(src)}
                    alt={resolved.name}
                    fill
                    priority={idx === 0}
                    className={styles.heroImage}
                    sizes="100vw"
                    onError={() =>
                      setBrokenMap((prev) => ({ ...prev, [src]: true }))
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Image
              src={safeSrc(images?.[0] || hardFallback)}
              alt={resolved.name}
              fill
              priority
              className={styles.heroImage}
              sizes="100vw"
              onError={() =>
                setBrokenMap((prev) => ({ ...prev, [images?.[0]]: true }))
              }
            />
          )}

          <div className={styles.imageOverlay} />
        </div>

        <div className={styles.contentLayer}>
          <div ref={titleRef} className={styles.titleContainer}>
            <h1 className={styles.title}>
              <span className={styles.titleMain} data-text={resolved.name}>
                {resolved.name}
              </span>
              <span className={styles.titleSub}>{titleSub}</span>
            </h1>

            {/* {facts.length > 0 && (
              <div className={styles.factsRow} aria-label="Area facts">
                {facts.slice(0, 4).map((txt, i) => (
                  <span key={`${txt}-${i}`} className={styles.factPill}>
                    {txt}
                  </span>
                ))}
              </div>
            )} */}
          </div>

          <div ref={ornamentRef} className={styles.titleOrnament} />

          <div className={styles.breadcrumb}>
            <span>{bcHome}</span>
            <span className={styles.breadcrumbDivider}>/</span>
            <span>{bcAreas}</span>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.breadcrumbCurrent}>{resolved.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
