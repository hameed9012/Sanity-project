"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import styles from "@/styles/ArtOfDetail.module.css";
import { useLanguage } from "./LanguageProvider";

// Fetch once and cache at module level for the session
let _cachedSettings = null;
async function fetchArtOfDetailSettings() {
  if (_cachedSettings) return _cachedSettings;
  try {
    const res = await fetch("/api/site-settings");
    if (!res.ok) return null;
    const { data } = await res.json();
    _cachedSettings = data?.artOfDetail || null;
    return _cachedSettings;
  } catch {
    return null;
  }
}

export default function ArtOfDetail() {
  const sectionRef = useRef(null);
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

  const [cms, setCms] = useState(null);
  useEffect(() => {
    fetchArtOfDetailSettings().then(setCms);
  }, []);

  // CMS-first, translation-key fallback
  const sloganPre  = (isAr ? cms?.sloganPreAr  : cms?.sloganPre)  || t("artOfDetail.sloganPre");
  const sloganMain = (isAr ? cms?.sloganMainAr : cms?.sloganMain) || t("artOfDetail.sloganMain");
  const companyLine= (isAr ? cms?.companyLineAr: cms?.companyLine)|| t("artOfDetail.companyLine");
  const description= (isAr ? cms?.descriptionAr: cms?.description)|| t("artOfDetail.description");
  const discoverUrl= cms?.discoverMoreUrl || "/about";
  const ownerImage = cms?.ownerImage || "/boss-nobg.png";

  // ─── GSAP animations (unchanged) ────────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const pill    = sectionRef.current.querySelector(`.${styles.artAnimSec}`);
    const content = sectionRef.current.querySelector(`.${styles.artContentSec}`);
    if (!pill) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1000px)", () => {
      gsap.set(pill, {
        scale: 0.55, opacity: 0,
        borderTopLeftRadius: "50vw", borderTopRightRadius: "50vw",
        transformOrigin: "center bottom", boxShadow: "0 0 0 rgba(0,0,0,0)",
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 130%", end: "top 25%", scrub: 0.8 },
      });
      tl.to(pill, { opacity: 1, scale: 0.65, borderTopLeftRadius: "50vw", borderTopRightRadius: "50vw", boxShadow: "0 15px 40px rgba(0,0,0,0.05)", duration: 0.25, ease: "none" });
      tl.to(pill, { scale: 1, boxShadow: "0 35px 90px rgba(0,0,0,0.10)", duration: 0.45, ease: "none" });
      tl.to(pill, { scale: 1.03, borderTopLeftRadius: "48px", borderTopRightRadius: "48px", duration: 0.3, ease: "none" });

      if (content) {
        gsap.fromTo(content, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top 95%", end: "top 45%", scrub: 0.8 },
        });
      }
    });

    mm.add("(max-width: 999px)", () => {
      gsap.set(pill, {
        scale: 0.55, opacity: 0,
        borderTopLeftRadius: "55vw", borderTopRightRadius: "55vw",
        transformOrigin: "center bottom", boxShadow: "0 0 0 rgba(0,0,0,0)",
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 120%", end: "top 55%", scrub: 0.6 },
      });
      tl.to(pill, { opacity: 1, scale: 0.6, borderTopLeftRadius: "55vw", borderTopRightRadius: "55vw", boxShadow: "0 8px 22px rgba(0,0,0,0.05)", duration: 0.25, ease: "none" });
      tl.to(pill, { scale: 0.92, borderTopLeftRadius: "55vw", borderTopRightRadius: "55vw", boxShadow: "0 20px 55px rgba(0,0,0,0.08)", duration: 0.35, ease: "none" });
      tl.to(pill, { scale: 1, borderTopLeftRadius: "40px", borderTopRightRadius: "40px", boxShadow: "0 28px 70px rgba(0,0,0,0.10)", duration: 0.4, ease: "none" });

      if (content) {
        gsap.fromTo(content, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top 105%", end: "top 65%", scrub: 0.6 },
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.artSection}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className={styles.artAnimSec}>
        <div className={styles.artAnimBg}>
          <Image
            src={ownerImage}
            alt={t("artOfDetail.ownerAlt") || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.artImage}
            priority={false}
          />
        </div>
      </div>

      <div className={styles.artContentSec}>
        <p className={styles.sloganPre}>{sloganPre}</p>
        <h2 className={styles.sloganMain}>{sloganMain}</h2>
        <p className={styles.companyLine}>{companyLine}</p>
        <p className={styles.description}>{description}</p>
        <Link href={discoverUrl} className={styles.discoverBtn}>
          {t("artOfDetail.discoverMore") || (isAr ? "اكتشف المزيد" : "Discover More")}
        </Link>
      </div>
    </section>
  );
}