"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "@/styles/BrandPillarsAccordion.module.css";
import { useLanguage } from "./LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

let _cachedSettings = null;

async function fetchPillarsSettings() {
  if (_cachedSettings) return _cachedSettings;

  try {
    const res = await fetch("/api/site-settings");
    if (!res.ok) return null;

    const { data } = await res.json();
    _cachedSettings = data?.pillarsSection || null;
    return _cachedSettings;
  } catch {
    return null;
  }
}

function getString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export default function BrandPillarsAccordion() {
  const { locale } = useLanguage();
  const isAr = locale === "ar";

  const [cms, setCms] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const setItemRef = (el, index) => {
    if (el) itemRefs.current[index] = el;
  };

  useEffect(() => {
    fetchPillarsSettings().then(setCms);
  }, []);

  const pillars = Array.isArray(cms?.pillars) ? cms.pillars : [];

  useEffect(() => {
    if (!sectionRef.current || !pillars.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [pillars]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        {pillars.map((pillar, index) => {
          const title = getString(
            isAr ? pillar?.titleAr : pillar?.title
          );

          const description = getString(
            isAr ? pillar?.descriptionAr : pillar?.description
          );

          const isActive = activeIndex === index;

          return (
            <div
              key={pillar?._key || index}
              ref={(el) => setItemRef(el, index)}
              className={`${styles.item} ${
                isActive ? styles.active : ""
              }`}
            >
              <button
                className={styles.header}
                onClick={() =>
                  setActiveIndex(isActive ? -1 : index)
                }
              >
                <span className={styles.title}>{title}</span>

                <span className={styles.icon}>
                  {isActive ? "-" : "+"}
                </span>
              </button>

              <div
                className={styles.content}
                style={{
                  maxHeight: isActive ? "500px" : "0px",
                }}
              >
                {description && (
                  <p className={styles.description}>
                    {description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}