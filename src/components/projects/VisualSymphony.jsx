"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "@/styles/projects/VisualSymphony.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

export default function VisualSymphony({ data, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!data || !data.slides || data.slides.length === 0) return null;

  // SSR-safe loading state
  if (!mounted) {
    return (
      <section
        className={styles.section}
        dir={activeIsRTL ? "rtl" : "ltr"}
        aria-label={getLocalizedText(data.title, activeLocale) || "Gallery"}
      >
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>
            {getLocalizedText(data.title, activeLocale)}
          </h2>
          <div className={styles.loadingState}>
            {activeIsRTL ? "جاري تحميل المعرض..." : "Loading gallery..."}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={styles.section}
      dir={activeIsRTL ? "rtl" : "ltr"}
      aria-label={`${getLocalizedText(data.title, activeLocale)} gallery`}
    >
      <div className={styles.wrapper}>
        {/* Title – Sobha style */}
        <h2 className={styles.heading}>
          {getLocalizedText(data.title, activeLocale)}
        </h2>

        {/* Slider – force LTR behaviour */}
        <div className={styles.slider} dir="ltr">
          <div className={styles.swiperShell}>
            <Swiper
              modules={[Navigation, A11y, Autoplay, Keyboard]}
              className={`visual-symphony-swiper visual-symphony-slider ${styles.swiper}`}
              navigation={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"} // <— key for Sobha behaviour
              spaceBetween={0} // we control overlap with margin-right
              speed={500}
              grabCursor={true}
              keyboard={{ enabled: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {data.slides.map((src, index) => (
                <SwiperSlide key={index} className={styles.slideItem}>
                  <div className={styles.slideInner}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={src}
                        alt={`${
                          getLocalizedText(data.projectTag, activeLocale) ||
                          "Project"
                        } ${activeIsRTL ? "منظر" : "view"} ${index + 1}`}
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
