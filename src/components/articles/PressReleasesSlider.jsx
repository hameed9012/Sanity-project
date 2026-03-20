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

const DEFAULT_PRESS_IMAGE = "";

function normalizeSanityArticle(article, locale) {
  const isAr = locale === "ar";

  return {
    id: article?._id || article?.slug?.current || article?.slug,
    slug:
      typeof article?.slug === "object"
        ? article?.slug?.current
        : article?.slug,
    title: isAr
      ? article?.titleAr || article?.title
      : article?.title || article?.titleAr,
    image:
      article?.mainImage ||
      article?.hero?.image ||
      article?.image ||
      DEFAULT_PRESS_IMAGE,
    logo: article?.featuredLogo || "",
    publishedOn: article?.publishedAt
      ? new Date(article.publishedAt).toLocaleDateString(
          isAr ? "ar-AE" : "en-US",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        )
      : article?.date || "",
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
        const response = await fetch("/api/sanity-articles", {
          cache: "no-store",
        });
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
    const featuredArticles = sanityArticles.filter(
      (article) => article?.featured === true
    );

    return featuredArticles
      .map((article) => normalizeSanityArticle(article, locale))
      .filter((article) => article.slug && article.title);
  }, [locale, sanityArticles]);

  if (!loaded && sanityArticles.length === 0) return null;
  if (!articles.length) return null;

  const handleClick = (article) => {
    if (!article?.slug) return;
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
            type="button"
          >
            <span className={styles.arrowIcon} />
          </button>

          <button
            className={`${styles.navArrow} ${styles.navNext} stories-next`}
            aria-label={
              t?.("pressReleases.aria.next") ||
              (isRTL ? "البيان التالي" : "Next press release")
            }
            type="button"
          >
            <span className={styles.arrowIcon} />
          </button>

          <Swiper
            key={locale}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".stories-prev",
              nextEl: ".stories-next",
            }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            loop={articles.length > 2}
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
                      {article.image ? (
                        <>
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            unoptimized
                            className={`${styles.image} ${styles.onlyDesk}`}
                            sizes="(max-width: 768px) 0px, (max-width: 1200px) 70vw, 900px"
                          />
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            unoptimized
                            className={`${styles.image} ${styles.onlyMob}`}
                            sizes="100vw"
                          />
                        </>
                      ) : (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#c8a96b",
                            fontSize: 18,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {article.title}
                        </div>
                      )}

                      {/* LOGO BADGE */}
                      {article.logo ? (
                        <div className={styles.logoBadge}>
                          <Image
                            src={article.logo}
                            alt=""
                            width={56}
                            height={44}
                            unoptimized
                            style={{ objectFit: "contain", width: "100%", height: "100%" }}
                          />
                        </div>
                      ) : null}
                    </div>

                    {/* CONTENT */}
                    <div className={styles.cardContent}>
                      <div className={styles.storyTitle}>
                        <h3 className={styles.cardTitle}>
                          {article.title}
                        </h3>
                      </div>

                      {/* 🔥 GOLD DATE TAG */}
                      <div className={styles.storyPublish}>
                        <div className={styles.datePlace}>
                          <span className={styles.publishedLabel}>
                            {article.publishedOn}
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
            {t?.("pressReleases.viewAll") ||
              (isRTL ? "عرض الكل" : "VIEW ALL")}
          </Link>
        </div>
      </div>
    </section>
  );
}