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
import articlesData from "@/data/articles/articles-data";
import { useLanguage } from "@/components/LanguageProvider";

function normalizeSanityArticle(article, locale) {
  const isAr = locale === "ar";
  const title = isAr ? article?.titleAr || article?.title : article?.title || article?.titleAr;
  const description = isAr
    ? article?.descriptionAr || article?.description
    : article?.description || article?.descriptionAr;

  return {
    id: article?._id || article?.slug,
    slug: article?.slug,
    title: title || "Article",
    description: description || "",
    image: article?.mainImage || "/article-placeholder.jpg",
    publishedOn: article?.publishedAt
      ? new Date(article.publishedAt).toLocaleDateString(isAr ? "ar-AE" : "en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "",
    date: article?.publishedAt || "",
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

  const fallbackArticles = useMemo(
    () => articlesData.getAllArticles(locale),
    [locale]
  );

  const articles = useMemo(() => {
    if (sanityArticles.length > 0) {
      return sanityArticles.map((article) => normalizeSanityArticle(article, locale));
    }
    return fallbackArticles;
  }, [fallbackArticles, locale, sanityArticles]);

  if (!loaded && sanityArticles.length === 0 && fallbackArticles.length === 0) return null;
  if (!articles.length) return null;

  const handleClick = (article) => {
    router.push(`/articles/${article.slug}`);
  };

  return (
    <section
      className={styles.sobhaStoriesSec}
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="press-releases-heading"
    >
      <div className={styles.container}>
        {/* Heading */}
        <h2 id="press-releases-heading" className={styles.heading}>
          {t?.("pressReleases.heading") ||
            (isRTL ? "البيانات الصحفية" : "PRESS RELEASES")}
        </h2>

        <div className={styles.sliderShell}>
          {/* arrows */}
          <button
            className={`${styles.navArrow} ${styles.navPrev} stories-prev`}
            aria-label={
              t?.("pressReleases.aria.prev") ||
              (isRTL ? "البيان السابق" : "Previous press release")
            }
          >
            <span className={styles.arrowIcon} />
          </button>

          <button
            className={`${styles.navArrow} ${styles.navNext} stories-next`}
            aria-label={
              t?.("pressReleases.aria.next") ||
              (isRTL ? "البيان التالي" : "Next press release")
            }
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
            loop
            speed={900}
            breakpoints={{
              // ✅ Mobile: ONE full card (no peeking)
              0: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 16,
              },

              // ✅ Desktop/tablet: ONE focused card + left/right peeking
              769: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 32,
              },
            }}
            className={`${styles.storiesSlider} ${
              isRTL ? styles.rtlSlider : ""
            }`}
          >
            {articles.map((article) => (
              <SwiperSlide
                key={article.id || article.slug}
                className={styles.slide}
              >
                <article
                  className={styles.card}
                  onClick={() => handleClick(article)}
                >
                  <div className={styles.cardBox}>
                    {/* IMAGE */}
                    <div className={styles.imageWrap}>
                      {/* desktop */}
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className={`${styles.image} ${styles.onlyDesk}`}
                        sizes="(max-width: 768px) 0px,
                               (max-width: 1200px) 70vw,
                               900px"
                      />
                      {/* mobile */}
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className={`${styles.image} ${styles.onlyMob}`}
                        sizes="100vw"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className={styles.cardContent}>
                      <div className={styles.storyTitle}>
                        <h3 className={styles.cardTitle}>{article.title}</h3>
                      </div>

                      <div className={styles.storyPublish}>
                        <div className={styles.datePlace}>
                          {/* If you want label visible, uncomment below */}
                          {/* <span className={styles.publishedLabel}>
                            {t?.("pressReleases.publishedLabel") ||
                              (isRTL ? "تاريخ النشر" : "Published on")}
                          </span> */}
                          <span className={styles.publishedDate}>
                            {article.publishedOn || article.date || ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* VIEW ALL */}
        <div className={styles.viewAllRow}>
          <Link href="/articles" className={styles.viewAllBtn}>
            {t?.("pressReleases.viewAll") || (isRTL ? "عرض الكل" : "VIEW ALL")}
          </Link>
        </div>
      </div>
    </section>
  );
}
