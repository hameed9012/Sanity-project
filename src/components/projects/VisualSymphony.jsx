"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "@/styles/projects/VisualSymphony.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

export default function VisualSymphony({ data, isRTL, locale }) {
  const { locale: ctxLocale, t } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";
  const galleryLabel = t("projectPage.gallerySection") || "Gallery";
  const loadingLabel =
    t("projectPage.loadingGallery") || "Loading gallery...";
  const projectLabel = t("projectPage.projectLabel") || "Project";
  const galleryViewLabel = t("projectPage.galleryView") || "view";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const normalizedSlides = React.useMemo(() => {
    if (!data?.slides || !Array.isArray(data.slides)) return [];
    return data.slides
      .map((slide) =>
        typeof slide === "string" ? slide : slide?.url || slide?.src || ""
      )
      .filter(Boolean);
  }, [data?.slides]);

  if (!data || normalizedSlides.length === 0) return null;

  if (!mounted) {
    return (
      <section
        className={styles.section}
        dir={activeIsRTL ? "rtl" : "ltr"}
        aria-label={getLocalizedText(data.title, activeLocale) || galleryLabel}
      >
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>
            {getLocalizedText(data.title, activeLocale)}
          </h2>
          <div className={styles.loadingState}>{loadingLabel}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={styles.section}
      dir={activeIsRTL ? "rtl" : "ltr"}
      aria-label={`${getLocalizedText(data.title, activeLocale)} ${galleryLabel}`}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          {getLocalizedText(data.title, activeLocale)}
        </h2>

        <div className={styles.slider} dir="ltr">
          <div className={styles.swiperShell}>
            <Swiper
              modules={[Navigation, A11y, Autoplay, Keyboard]}
              className={`visual-symphony-swiper visual-symphony-slider ${styles.swiper}`}
              navigation={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={0}
              speed={500}
              grabCursor={true}
              keyboard={{ enabled: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {normalizedSlides.map((src, index) => (
                <SwiperSlide key={index} className={styles.slideItem}>
                  <div className={styles.slideInner}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={src}
                        alt={`${
                          getLocalizedText(data.projectTag, activeLocale) ||
                          projectLabel
                        } ${galleryViewLabel} ${index + 1}`}
                        width={1600}
                        height={900}
                        priority={index === 0}
                        className={styles.image}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
