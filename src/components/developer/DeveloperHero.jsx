// src/components/developer/DeveloperHero.jsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/developer/DeveloperHero.module.css";

import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

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

export default function DeveloperHero({ developer }) {
  const { locale, t } = useLanguage();
  const { allProjects } = useAllProjects();

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

  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const ornamentRef = useRef(null);

  const CDN =
    process.env.NEXT_PUBLIC_CDN ||
    process.env.NEXT_PUBLIC_CDN_URL ||
    "https://luxury-real-estate-media.b-cdn.net";

  const hardFallback = developer?.heroImage
    ? toCdnUrl(developer.heroImage, CDN)
    : `${String(CDN).replace(/\/$/, "")}/fallback.jpg`;

  const [brokenMap, setBrokenMap] = useState({});

  useEffect(() => {
    setBrokenMap({});
  }, [developer?.slug, developer?.name, locale]);

  const { images, projectsCount } = useMemo(() => {
    if (!developer) return { images: [hardFallback], projectsCount: 0 };

    const devSlug = String(developer.slug || "")
      .trim()
      .toLowerCase();
    const devName = String(developer.name || "")
      .trim()
      .toLowerCase();

    const allImages = [];
    const projectImages = [];

    allProjects?.forEach((project) => {
      const projectDevSlug = String(
        project?.developerSlug || project?.developer || ""
      )
        .trim()
        .toLowerCase();
      const projectDevName = String(project?.developer || "")
        .trim()
        .toLowerCase();

      const match =
        (devSlug && projectDevSlug === devSlug) ||
        (devName && projectDevName === devName);

      if (!match) return;

      const projectImagesForCard = [
        project?.image,
        project?.data?.hero?.backgroundUrl,
        project?.data?.hero?.squareImageUrl,
        ...(project?.data?.gallery?.slides || []),
      ].filter(Boolean);

      projectImagesForCard.forEach((src) => {
        projectImages.push(src);
        allImages.push(src);
      });
    });

    if (developer?.heroImage) allImages.unshift(developer.heroImage);

    const normalizedUnique = allImages
      .map((src) => toCdnUrl(src, CDN))
      .filter(isProbablyValidImageUrl)
      .filter((src, i, arr) => arr.indexOf(src) === i);

    const uniqueProjectImages = projectImages
      .map((src) => toCdnUrl(src, CDN))
      .filter(isProbablyValidImageUrl)
      .filter((src, i, arr) => arr.indexOf(src) === i);

    const finalImages = normalizedUnique.length
      ? normalizedUnique
      : [hardFallback];

    return {
      images: finalImages,
      projectsCount: uniqueProjectImages.length,
    };
  }, [developer, CDN, hardFallback, allProjects]);

  const useSwiper = projectsCount > 1 && images.length > 1;

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
        logoRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.4)" },
        "-=1.2"
      );

      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
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
  }, [developer]);

  if (!developer) return null;

  const displayName = developer.displayName || developer.name || "";

  const safeSrc = (src) => (brokenMap[src] ? hardFallback : src);

  const titleSub = safeT(
    "developerHero.subtitle",
    undefined,
    "Developer Portfolio"
  );
  const bcHome = safeT("developerHero.breadcrumb.home", undefined, "Home");
  const bcDevs = safeT(
    "developerHero.breadcrumb.developers",
    undefined,
    "Developers"
  );

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.geometricBg}>
        <div className={styles.geometricShape1}></div>
        <div className={styles.geometricShape2}></div>
        <div className={styles.geometricShape3}></div>
      </div>

      <div className={styles.heroContainer}>
        <div ref={visualRef} className={styles.visualArea}>
          {useSwiper ? (
            <Swiper
              key={`${developer.slug || developer.name}-${locale}`}
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop
              speed={1200}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className={styles.heroSwiper}
            >
              {images.map((src, idx) => (
                <SwiperSlide key={`${src}-${idx}`} className={styles.heroSlide}>
                  <Image
                    src={safeSrc(src)}
                    alt={displayName}
                    fill
                    priority={idx === 0}
                    className={styles.heroImage}
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
              alt={displayName}
              fill
              priority
              className={styles.heroImage}
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
              <span className={styles.titleMain} data-text={displayName}>
                {displayName}
              </span>
              <span className={styles.titleSub}>{titleSub}</span>
            </h1>
          </div>

          <div ref={ornamentRef} className={styles.titleOrnament}></div>

          <div className={styles.breadcrumb}>
            <span>{bcHome}</span>
            <span className={styles.breadcrumbDivider}>/</span>
            <span>{bcDevs}</span>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.breadcrumbCurrent}>{displayName}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
