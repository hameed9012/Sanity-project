"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./articles.module.css";

function normalizeArticleImageSrc(value) {
  if (!value) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "object") {
    return String(
      value?.url ||
      value?.src ||
      value?.asset?.url ||
      value?.image?.url ||
      ""
    ).trim();
  }
  return "";
}

function normalizeArticle(article = {}) {
  return {
    ...article,
    title: article?.title || "",
    titleAr: article?.titleAr || "",
    description: article?.description || "",
    descriptionAr: article?.descriptionAr || "",
    category: article?.category || "",
    categoryAr: article?.categoryAr || "",
    readTime: article?.readTime || "",
    readTimeAr: article?.readTimeAr || "",
    mainImage: normalizeArticleImageSrc(article?.mainImage),
    hero: article?.hero
      ? {
          ...article.hero,
          image: normalizeArticleImageSrc(article.hero?.image),
        }
      : undefined,
  };
}

export default function ArticlesClient({ sanityArticles = [] }) {
  const router = useRouter();
  const { locale } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [siteContact, setSiteContact] = useState(null);
  const [articlesData, setArticlesData] = useState(() =>
    Array.isArray(sanityArticles) ? sanityArticles.map(normalizeArticle) : []
  );

  const isRTL = locale === "ar";

  const copy = {
    expertInsights: isRTL
      ? "\u0631\u0624\u0649 \u0627\u0644\u062e\u0628\u0631\u0627\u0621"
      : "Expert Insights",
    dubaiRealEstate: isRTL
      ? "\u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a \u0641\u064a \u062f\u0628\u064a"
      : "Dubai Real Estate",
    readArticle: isRTL
      ? "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0642\u0627\u0644"
      : "Read Article",
    noArticles: isRTL
      ? "\u0644\u0645 \u064a\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0645\u0642\u0627\u0644\u0627\u062a \u0628\u0639\u062f."
      : "No articles have been published yet.",
    trustStats: [
      {
        number: "15+",
        label: isRTL
          ? "\u0633\u0646\u0648\u0627\u062a \u062e\u0628\u0631\u0629"
          : "Years Experience",
      },
      {
        number: "500+",
        label: isRTL
          ? "\u0645\u0634\u0631\u0648\u0639 \u0645\u0643\u062a\u0645\u0644"
          : "Projects Completed",
      },
      {
        number: "98%",
        label: isRTL
          ? "\u0631\u0636\u0627 \u0627\u0644\u0639\u0645\u0644\u0627\u0621"
          : "Client Satisfaction",
      },
    ],
  };

  const track = (eventName, params = {}) => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") {
      return;
    }
    window.fbq("trackCustom", eventName, params);
  };

  const heroImages = useMemo(() => {
    return articlesData
      .filter((article) => normalizeArticleImageSrc(article?.mainImage || article?.hero?.image))
      .slice(0, 3)
      .map((article) => ({
        src: normalizeArticleImageSrc(article.mainImage || article.hero?.image),
        alt: isRTL
          ? article.titleAr || article.title || "Article"
          : article.title || article.titleAr || "Article",
        title: isRTL
          ? article.titleAr || article.title || "Article"
          : article.title || article.titleAr || "Article",
        description: isRTL
          ? article.descriptionAr || article.description || ""
          : article.description || article.descriptionAr || "",
      }));
  }, [articlesData, isRTL]);

  const listingData = useMemo(
    () => ({
      sectionHeader: {
        badge: isRTL
          ? "\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645"
          : "Media Center",
        title: isRTL ? "\u0623\u062d\u062f\u062b" : "Latest",
        highlight: isRTL ? "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a" : "Articles",
        subtitle: isRTL
          ? "\u0643\u0644 \u0645\u0642\u0627\u0644 \u062c\u062f\u064a\u062f \u0645\u0646 \u0633\u0627\u0646\u064a\u062a\u064a \u0633\u064a\u0638\u0647\u0631 \u0647\u0646\u0627 \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b."
          : "Every article added in Sanity appears here automatically.",
      },
      cta: {
        badge: isRTL ? "\u062a\u0648\u0627\u0635\u0644" : "Get In Touch",
        title: isRTL ? "\u0647\u0644 \u062a\u0631\u064a\u062f" : "Want",
        highlight: isRTL
          ? "\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0627\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u0629\u061f"
          : "investment guidance?",
        description: isRTL
          ? "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0645\u0633\u0627\u0639\u062f\u062a\u0643 \u0641\u064a \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0623\u0648 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629."
          : "Reach out and we will help you choose the right project or area.",
        buttons: [
          {
            text: isRTL ? "\u0648\u0627\u062a\u0633\u0627\u0628" : "WhatsApp",
            href: siteContact?.whatsapp
              ? `https://wa.me/${String(siteContact.whatsapp).replace(/\D/g, "")}`
              : "/contact-us",
            type: "primary",
          },
          {
            text: isRTL ? "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627" : "Contact Us",
            href: "/contact-us",
            type: "secondary",
          },
        ],
        trustNote: isRTL
          ? "\u0645\u0642\u0627\u0644\u0627\u062a \u0648\u0646\u0634\u0631\u0627\u062a \u0645\u062d\u062f\u0651\u062b\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0627\u0644\u0646\u0638\u0627\u0645"
          : "Articles and releases updated directly from the CMS",
      },
    }),
    [isRTL, siteContact]
  );

  const articles = useMemo(
    () =>
      articlesData.map((article) => ({
        id: article._id,
        slug: article.slug,
        title:
          locale === "ar" && article.titleAr ? article.titleAr : article.title,
        description:
          locale === "ar" && article.descriptionAr
            ? article.descriptionAr
            : article.description,
        image: normalizeArticleImageSrc(article.mainImage || article.hero?.image),
        readTime:
          locale === "ar" && article.readTimeAr
            ? article.readTimeAr
            : article.readTime || "5 min read",
        category:
          locale === "ar" && article.categoryAr
            ? article.categoryAr
            : article.category || "Investment",
        cta: copy.readArticle,
      })),
    [articlesData, copy.readArticle, locale]
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const res = await fetch("/api/site-settings", { cache: "no-store" });
        const json = await res.json();
        if (active && json?.ok) {
          setSiteContact(json?.data?.contact || null);
        }
      } catch {}
    })();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const res = await fetch(`/api/sanity-articles?ts=${Date.now()}`, {
          cache: "no-store",
        });
        const json = await res.json();
        if (!active || !Array.isArray(json) || !json.length) return;
        setArticlesData(json.map(normalizeArticle));
      } catch {}
    })();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!heroImages.length) return undefined;

    setCurrentImage(0);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length, locale]);

  const handleArticleClick = (article, location) => {
    track("ArticleClick", {
      slug: article.slug,
      title: article.title,
      category: article.category,
      location,
      locale,
    });
    router.push(`/articles/${article.slug}`);
  };

  const getCarouselTransform = () =>
    isRTL
      ? `translateX(${currentImage * 100}%)`
      : `translateX(-${currentImage * 100}%)`;

  return (
    <div
      className={`${styles.page} ${isVisible ? styles.visible : ""} ${
        isRTL ? styles.rtl : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {heroImages.length ? (
        <section className={styles.hero}>
          <div className={styles.heroCarousel}>
            <div
              className={styles.carouselTrack}
              style={{ transform: getCarouselTransform() }}
            >
              {heroImages.map((image, index) => (
                <div key={index} className={styles.carouselSlide}>
                  <div className={styles.heroBackground}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.heroImage}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className={styles.heroOverlay} />
                  </div>

                  <div className={styles.heroContent}>
                    <div className={styles.heroContentInner}>
                      <div className={styles.heroBadge}>
                        <span>{copy.expertInsights}</span>
                        <div className={styles.badgeLine} />
                      </div>

                      <h1 className={styles.heroTitle}>
                        {copy.dubaiRealEstate}{" "}
                        <span className={styles.highlight}>{image.title}</span>
                      </h1>

                      <p className={styles.heroSubtitle}>{image.description}</p>

                      <div className={styles.trustStats}>
                        {copy.trustStats.map((stat, indexKey) => (
                          <div key={indexKey} className={styles.statItem}>
                            <div className={styles.statNumber}>{stat.number}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.carouselNav}>
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.navDot} ${
                    currentImage === index ? styles.active : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                  type="button"
                />
              ))}
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${((currentImage + 1) / heroImages.length) * 100}%`,
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              {listingData.sectionHeader.badge}
            </div>
            <h2 className={styles.sectionTitle}>
              {listingData.sectionHeader.title}{" "}
              <span className={styles.highlight}>
                {listingData.sectionHeader.highlight}
              </span>
            </h2>
            <p className={styles.sectionSubtitle}>
              {listingData.sectionHeader.subtitle}
            </p>
          </div>

          <div className={styles.articlesGrid}>
            {articles.map((article) => (
              <article
                key={article.id}
                className={styles.articleCard}
                onClick={() => handleArticleClick(article, "card")}
              >
                <div className={styles.imageContainer}>
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className={styles.articleImage}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.imagePlaceholder} />
                  )}
                  <div className={styles.imageOverlay} />
                  <div className={styles.categoryBadge}>
                    <span>{article.category}</span>
                  </div>
                  <div className={styles.readTime}>
                    <span>{article.readTime}</span>
                  </div>
                  <div className={styles.cardHover}>
                    <div className={styles.hoverContent}>
                      <span>{copy.readArticle}</span>
                      <div className={styles.arrowIcon}>
                        {isRTL ? "<-" : "->"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleDescription}>
                    {article.description}
                  </p>

                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleArticleClick(article, "cta");
                    }}
                    className={styles.articleCTA}
                    type="button"
                  >
                    {article.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {!articles.length && (
            <p className={styles.sectionSubtitle}>{copy.noArticles}</p>
          )}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBadge}>{listingData.cta.badge}</div>

            <h2 className={styles.ctaTitle}>
              {listingData.cta.title}{" "}
              <span className={styles.highlight}>
                {listingData.cta.highlight}
              </span>
            </h2>

            <p className={styles.ctaDescription}>
              {listingData.cta.description}
            </p>

            <div className={styles.ctaButtons}>
              {listingData.cta.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={
                    button.type === "primary"
                      ? styles.primaryCTA
                      : styles.secondaryCTA
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("ArticlesCTAButtonClick", {
                      label: button.text,
                      href: button.href,
                      locale,
                    })
                  }
                >
                  {button.text}
                </a>
              ))}
            </div>

            <div className={styles.trustNote}>
              <strong>{listingData.cta.trustNote}</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
