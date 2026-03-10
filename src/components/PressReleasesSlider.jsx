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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/sanity-articles")
      .then((r) => r.json())
      .then((data) => {
        // Only show featured articles (or all if none marked featured)
        const featured = data.filter((a) => a.featured !== false);
        setArticles(featured.length > 0 ? featured : data);
      })
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (!articles.length) return null;

  const getTitle = (article) =>
    isRTL && article.titleAr ? article.titleAr : article.title;

  const getDescription = (article) =>
    isRTL && article.descriptionAr ? article.descriptionAr : article.description;

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
        <h2 id="press-releases-heading" className={styles.heading}>
          {t?.("pressReleases.heading") ||
            (isRTL ? "البيانات الصحفية" : "PRESS RELEASES")}
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
              0:   { slidesPerView: 1,      centeredSlides: false, spaceBetween: 16 },
              769: { slidesPerView: "auto", centeredSlides: true,  spaceBetween: 32 },
            }}
            className={`${styles.storiesSlider} ${isRTL ? styles.rtlSlider : ""}`}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.slug} className={styles.storySlide}>
                <article
                  className={styles.storyCard}
                  onClick={() => handleClick(article)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleClick(article)}
                >
                  {/* Image */}
                  <div className={styles.storyImageWrap}>
                    {article.mainImage ? (
                      <Image
                        src={article.mainImage.startsWith("http") ? article.mainImage : article.mainImage}
                        alt={getTitle(article)}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className={styles.storyImage}
                      />
                    ) : (
                      <div className={styles.storyImagePlaceholder} />
                    )}
                    {article.category && (
                      <span className={styles.categoryBadge}>{article.category}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className={styles.storyContent}>
                    {article.readTime && (
                      <span className={styles.readTime}>{article.readTime}</span>
                    )}
                    <h3 className={styles.storyTitle}>{getTitle(article)}</h3>
                    {getDescription(article) && (
                      <p className={styles.storyDescription}>
                        {getDescription(article)}
                      </p>
                    )}
                    <Link
                      href={`/articles/${article.slug}`}
                      className={styles.readMoreLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isRTL ? "اقرأ المزيد" : "Read More"} →
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}