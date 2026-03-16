"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "@/styles/PressReleasesSlider.module.css";
import { useLanguage } from "@/components/LanguageProvider";

const DEFAULT_PRESS_IMAGE =
  "https://luxury-real-estate-media.b-cdn.net/sobha-the-element/Aerial%20Shot.jpg";

function normalizeSanityArticle(article, locale) {
  const isAr = locale === "ar";

  return {
    id: article?._id || article?.slug,
    slug: article?.slug,
    title: isAr ? article?.titleAr || article?.title : article?.title || article?.titleAr,
    image: article?.mainImage || article?.hero?.image || DEFAULT_PRESS_IMAGE,
    publishedOn: article?.publishedAt
      ? new Date(article.publishedAt).toLocaleDateString(isAr ? "ar-AE" : "en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "",
  };
}

export default function PressReleasesSlider() {
  const router = useRouter();
  const { locale, t } = useLanguage();
  const isRTL = locale === "ar";

  const [sanityArticles, setSanityArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;

    async function loadArticles() {
      try {
        const response = await fetch("/api/sanity-articles", { cache: "no-store" });
        const data = response.ok ? await response.json() : [];
        if (!alive) return;
        setSanityArticles(Array.isArray(data) ? data : []);
      } catch {
        if (!alive) return;
        setSanityArticles([]);
      } finally {
        if (alive) setLoaded(true);
      }
    }

    loadArticles();
    return () => {
      alive = false;
    };
  }, []);

  const articles = useMemo(() => {
    const featuredArticles = sanityArticles.filter((article) => article?.featured !== false);
    return featuredArticles.map((article) => normalizeSanityArticle(article, locale));
  }, [locale, sanityArticles]);

  if (!loaded && sanityArticles.length === 0) return null;
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
            aria-label={t?.("pressReleases.aria.prev") || (isRTL ? "السابق" : "Previous")}
          >
            <span className={styles.arrowIcon} />
          </button>

          <button
            className={`${styles.navArrow} ${styles.navNext} stories-next`}
            aria-label={t?.("pressReleases.aria.next") || (isRTL ? "التالي" : "Next")}
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
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            centeredSlides
            spaceBetween={32}
            loop={articles.length > 1}
            speed={900}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 16,
              },
              769: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 32,
              },
            }}
            className={`${styles.storiesSlider} ${isRTL ? styles.rtlSlider : ""}`}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id || article.slug} className={styles.slide}>
                <article
                  className={styles.card}
                  onClick={() => router.push(`/articles/${article.slug}`)}
                >
                  <div className={styles.cardBox}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className={`${styles.image} ${styles.onlyDesk}`}
                        sizes="(max-width: 768px) 0px, (max-width: 1200px) 70vw, 900px"
                      />
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className={`${styles.image} ${styles.onlyMob}`}
                        sizes="100vw"
                      />
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
