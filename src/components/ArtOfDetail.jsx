"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import styles from "@/styles/ArtOfDetail.module.css";
import { useLanguage } from "./LanguageProvider";

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

function getString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export default function ArtOfDetail() {
  const sectionRef = useRef(null);
  const { locale } = useLanguage();
  const isAr = locale === "ar";

  const [cms, setCms] = useState(null);

  useEffect(() => {
    fetchArtOfDetailSettings().then(setCms);
  }, []);

  // Brand defaults — used when Sanity field is empty or contains wrong/old content
  const DEFAULTS = {
    sloganPre: "Where",
    sloganPreAr: "حيث",
    sloganMain: "The 1% Invest",
    sloganMainAr: "يستثمر أصحاب 1%",
    companyLine: "Mohamad Kodmani Real Estate Brokers",
    companyLineAr: "محمد قدماني للوساطة العقارية",
    description:
      "At Mohamad Kodmani Real Estate Brokers, luxury is never accidental. It is curated — from the address and the layout to the investment story behind every unit. We advise discerning clients on luxury property Dubai opportunities, off-plan releases, and investment strategies designed for capital preservation and upside.",
    descriptionAr:
      "في محمد قدماني للوساطة العقارية، الفخامة ليست مصادفة. إنها مُصمَّمة بعناية — من العنوان والتخطيط إلى قصة الاستثمار خلف كل وحدة. ننصح عملاءنا المميزين بفرص العقارات الفاخرة في دبي، والإصدارات على الخارطة، واستراتيجيات الاستثمار المصممة لصون رأس المال وتحقيق العوائد.",
    discoverMoreLabel: "Discover More",
    discoverMoreLabelAr: "اكتشف المزيد",
  };

  // Use CMS value if present, otherwise fall back to defaults
  function resolveField(cmsVal, fallback) {
    const v = getString(cmsVal);
    if (!v) return fallback;
    return v;
  }

  const sloganPre = resolveField(
    isAr ? cms?.sloganPreAr : cms?.sloganPre,
    isAr ? DEFAULTS.sloganPreAr : DEFAULTS.sloganPre
  );
  const sloganMain = resolveField(
    isAr ? cms?.sloganMainAr : cms?.sloganMain,
    isAr ? DEFAULTS.sloganMainAr : DEFAULTS.sloganMain
  );
  const companyLine = resolveField(
    isAr ? cms?.companyLineAr : cms?.companyLine,
    isAr ? DEFAULTS.companyLineAr : DEFAULTS.companyLine
  );
  const description = resolveField(
    isAr ? cms?.descriptionAr : cms?.description,
    isAr ? DEFAULTS.descriptionAr : DEFAULTS.description
  );

  const discoverLabel =
    getString(isAr ? cms?.discoverMoreLabelAr : cms?.discoverMoreLabel) ||
    (isAr ? DEFAULTS.discoverMoreLabelAr : DEFAULTS.discoverMoreLabel);

  const discoverUrl = getString(cms?.discoverMoreUrl);

  const ownerAlt = getString(isAr ? cms?.ownerAltAr : cms?.ownerAlt);

  const ownerImage =
    getString(cms?.ownerImageUrl) ||
    getString(cms?.ownerImageCdn?.url) ||
    getString(cms?.ownerImage);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const pill = sectionRef.current.querySelector(`.${styles.artAnimSec}`);
    const content = sectionRef.current.querySelector(`.${styles.artContentSec}`);

    if (!pill) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1000px)", () => {
      gsap.set(pill, {
        scale: 0.55,
        opacity: 0,
        borderTopLeftRadius: "50vw",
        borderTopRightRadius: "50vw",
        transformOrigin: "center bottom",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 130%",
          end: "top 25%",
          scrub: 0.8,
        },
      });

      tl.to(pill, {
        opacity: 1,
        scale: 0.65,
        borderTopLeftRadius: "50vw",
        borderTopRightRadius: "50vw",
        boxShadow: "0 15px 40px rgba(0,0,0,0.05)",
        duration: 0.25,
        ease: "none",
      });

      tl.to(pill, {
        scale: 1,
        boxShadow: "0 35px 90px rgba(0,0,0,0.10)",
        duration: 0.45,
        ease: "none",
      });

      tl.to(pill, {
        scale: 1.03,
        borderTopLeftRadius: "48px",
        borderTopRightRadius: "48px",
        duration: 0.3,
        ease: "none",
      });

      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 95%",
              end: "top 45%",
              scrub: 0.8,
            },
          }
        );
      }
    });

    mm.add("(max-width: 999px)", () => {
      gsap.set(pill, {
        scale: 0.55,
        opacity: 0,
        borderTopLeftRadius: "55vw",
        borderTopRightRadius: "55vw",
        transformOrigin: "center bottom",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 120%",
          end: "top 55%",
          scrub: 0.6,
        },
      });

      tl.to(pill, {
        opacity: 1,
        scale: 0.6,
        borderTopLeftRadius: "55vw",
        borderTopRightRadius: "55vw",
        boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
        duration: 0.25,
        ease: "none",
      });

      tl.to(pill, {
        scale: 0.92,
        borderTopLeftRadius: "40vw",
        borderTopRightRadius: "40vw",
        boxShadow: "0 20px 50px rgba(0,0,0,0.10)",
        duration: 0.45,
        ease: "none",
      });

      tl.to(pill, {
        scale: 1,
        borderTopLeftRadius: "38px",
        borderTopRightRadius: "38px",
        duration: 0.3,
        ease: "none",
      });

      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 115%",
              end: "top 70%",
              scrub: 0.7,
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.artOfDetailSec}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className={styles.artAnimSec}>
        <div className={styles.container}>
          <div className={`${styles.row} ${styles.h100vh}`}>
            <div className={styles.artContentSec}>
              {(sloganPre || sloganMain) && (
                <div className={styles.sloganV1}>
                  <div className={styles.sloganArchitectural}>
                    {sloganPre && (
                      <span className={styles.sloganPre}>{sloganPre}</span>
                    )}

                    {sloganMain && (
                      <div className={styles.sloganMainContainer}>
                        <span className={styles.sloganMain}>{sloganMain}</span>
                        <div className={styles.sloganDivider} />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {companyLine && (
                <p className={styles.companyLine}>{companyLine}</p>
              )}

              {description && (
                <p className={styles.description}>{description}</p>
              )}

              {discoverUrl && discoverLabel && (
                <div className={styles.buttonMain}>
                  <Link href={discoverUrl} className={styles.button1}>
                    {discoverLabel}
                    <i />
                  </Link>
                </div>
              )}
            </div>

            {ownerImage && (
              <div className={`${styles.ownerImgWrapper} ${styles.onlyDesk}`}>
                <Image
                  src={ownerImage}
                  alt={ownerAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.ownerImg}
                  priority
                />
              </div>
            )}

            {ownerImage && (
              <div className={`${styles.ownerImgMobile} ${styles.onlyMob}`}>
                <Image
                  src={ownerImage}
                  alt={ownerAlt}
                  width={280}
                  height={340}
                  className={styles.ownerImgMobileImg}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}