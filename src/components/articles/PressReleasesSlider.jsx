"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "@/styles/PressReleasesSlider.module.css";
import { useLanguage } from "@/components/LanguageProvider";

export default function PressReleasesSlider() {
  const router = useRouter();
  const { locale, t } = useLanguage();
  const isRTL = locale === "ar";

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/sanity-articles")
      .then((r) => r.ok ? r.json() : [])
      .then((data) => {
        const mapped = (Array.isArray(data) ? data : []).map((a) => ({
          id: a._id,
          slug: a.slug,
          title: (locale === "ar" && a.titleAr) ? a.titleAr : a.title,
          image: a.mainImage || "/off-plan.jpg",
          publishedOn: a.publishedAt
            ? new Date(a.publishedAt).toLocaleDateString(
                locale === "ar" ? "ar-AE" : "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )
            : "",
        }));
        setArticles(mapped);
      })
      .catch(() => setArticles([]));
  }, [locale]);

  if (!articles.length) return null;

  return (
    <section
      className={styles.sobhaStoriesSec}
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="press-releases-heading"
    >
      <div className={styles.container}>
        <h2 id="press-releases-heading" className={styles.heading}>
          {t?.("pressReleases.heading") || (isRTL ? "البيانات الصحفية" : "PRESS RELEASES")}
        </h2>

        <div className={styles.sliderShell}>
          <button
            className={`${styles.navArrow} ${styles.navPrev} stories-prev`}
            aria-label={t?.("pressReleases.aria.prev") || (isRTL ? "البيان السابق" : "Previous press release")}
          >
            <span className={styles.arrowIcon} />
          </button>
          <button
            className={`${styles.navArrow} ${styles.navNext} stories-next`}
            aria-label={t?.("pressReleases.aria.next") || (isRTL ? "البيان التالي" : "Next press release")}
          >
            <span className={styles.arrowIcon} />
          </button>

          <Swiper
            key={locale}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: isRTL ? ".stories-next" : ".stories-prev",
              nextEl: isRTL ? ".stories-prev" : ".stories-next",
            }}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop
            speed={900}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: false, spaceBetween: 16 },
              769: { slidesPerView: "auto", centeredSlides: true, spaceBetween: 32 },
            }}
            className={`${styles.storiesSlider} ${isRTL ? styles.rtlSlider : ""}`}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id || article.slug} className={styles.slide}>
                <article className={styles.card} onClick={() => router.push(`/articles/${article.slug}`)}>
                  <div className={styles.cardBox}>
                    <div className={styles.imageWrap}>
                      <Image src={article.image} alt={article.title} fill
                        className={`${styles.image} ${styles.onlyDesk}`}
                        sizes="(max-width: 768px) 0px, (max-width: 1200px) 70vw, 900px" />
                      <Image src={article.image} alt={article.title} fill
                        className={`${styles.image} ${styles.onlyMob}`} sizes="100vw" />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.storyTitle}>
                        <h3 className={styles.cardTitle}>{article.title}</h3>
                      </div>
                      <div className={styles.storyPublish}>
                        <div className={styles.datePlace}>
                          <span className={styles.publishedDate}>{article.publishedOn}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.viewAllRow}>
          <Link href="/articles" className={styles.viewAllBtn}>
            {t?.("pressReleases.viewAll") || (isRTL ? "عرض الكل" : "VIEW ALL")}
          </Link>
        </div>
      </div>
    </section>
  );
}