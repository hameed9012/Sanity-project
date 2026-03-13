"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./articles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

export default function ArticlesClient({ sanityArticles = [] }) {
  const router = useRouter();
  const { locale } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [siteContact, setSiteContact] = useState(null);

  const isRTL = locale === "ar";
  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  const track = (eventName, params = {}) => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") {
      return;
    }
    window.fbq("trackCustom", eventName, params);
  };

  const fallbackHeroImages = useMemo(
    () => [
      {
        src: `${CDN}/sky-parks/exterior-night-01.jpg`,
        alt: isRTL ? "Dubai articles" : "Dubai Real Estate Market Insights",
        title: isRTL ? "Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø§Ø³ØªØ«Ù…Ø§Ø±" : "Investment Guides",
        description: isRTL
          ? "Ù…Ù‚Ø§Ù„Ø§Øª ÙˆØªØ­Ù„ÙŠÙ„Ø§Øª Ø­Ø¯ÙŠØ«Ø© Ø¹Ù† Ø³ÙˆÙ‚ Ø§Ù„Ø¹Ù‚Ø§Ø± ÙÙŠ Ø¯Ø¨ÙŠ."
          : "Fresh market intelligence and investment guidance from Dubai real estate.",
      },
      {
        src: `${CDN}/hartland/hero-bg.jpg`,
        alt: isRTL ? "Market analysis" : "Investment Strategies",
        title: isRTL ? "ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø³ÙˆÙ‚" : "Market Analysis",
        description: isRTL
          ? "ØªØºØ·ÙŠØ© Ù„Ù„Ø§ØªØ¬Ø§Ù‡Ø§Øª ÙˆØ§Ù„ÙØ±Øµ Ø§Ù„Ø¹Ù‚Ø§Ø±ÙŠØ© Ø§Ù„Ø£ÙƒØ«Ø± Ø£Ù‡Ù…ÙŠØ©."
          : "Coverage of the trends, launches, and opportunities shaping the market.",
      },
      {
        src: `${CDN}/lumena-alta/hero-bg.jpg`,
        alt: isRTL ? "Development news" : "Property Development",
        title: isRTL ? "Ø£Ø®Ø¨Ø§Ø± Ø§Ù„ØªØ·ÙˆÙŠØ±" : "Development News",
        description: isRTL
          ? "ÙƒÙ„ Ù…Ù‚Ø§Ù„ Ø¬Ø¯ÙŠØ¯ Ù…Ù† Ø³Ø§Ù†ÙŠØªÙŠ Ø³ÙŠØ¸Ù‡Ø± Ù‡Ù†Ø§ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹."
          : "Every new article published in Sanity appears here automatically.",
      },
    ],
    [CDN, isRTL]
  );

  const heroImages = useMemo(() => {
    const slides = sanityArticles
      .filter((article) => article?.mainImage || article?.hero?.image)
      .slice(0, 3)
      .map((article) => ({
        src: article.mainImage || article.hero?.image,
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

    return slides.length > 0 ? slides : fallbackHeroImages;
  }, [fallbackHeroImages, isRTL, sanityArticles]);

  const trustStats = useMemo(
    () => [
      { number: "15+", label: isRTL ? "Ø³Ù†ÙˆØ§Øª Ø®Ø¨Ø±Ø©" : "Years Experience" },
      { number: "500+", label: isRTL ? "Ù…Ø´Ø±ÙˆØ¹ Ù…ÙƒØªÙ…Ù„" : "Projects Completed" },
      { number: "98%", label: isRTL ? "Ø±Ø¶Ø§ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡" : "Client Satisfaction" },
    ],
    [isRTL]
  );

  const listingData = useMemo(
    () => ({
      sectionHeader: {
        badge: isRTL ? "Ù…Ø±ÙƒØ² Ø§Ù„Ø¥Ø¹Ù„Ø§Ù…" : "Media Center",
        title: isRTL ? "Ø£Ø­Ø¯Ø«" : "Latest",
        highlight: isRTL ? "Ø§Ù„Ù…Ù‚Ø§Ù„Ø§Øª" : "Articles",
        subtitle: isRTL
          ? "ÙƒÙ„ Ù…Ù‚Ø§Ù„ Ø¬Ø¯ÙŠØ¯ Ù…Ù† Ø³Ø§Ù†ÙŠØªÙŠ Ø³ÙŠØ¸Ù‡Ø± Ù‡Ù†Ø§ ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹."
          : "Every article added in Sanity appears here automatically.",
      },
      cta: {
        badge: isRTL ? "ØªÙˆØ§ØµÙ„" : "Get In Touch",
        title: isRTL ? "Ù‡Ù„ ØªØ±ÙŠØ¯" : "Want",
        highlight: isRTL ? "Ø§Ø³ØªØ´Ø§Ø±Ø© Ø§Ø³ØªØ«Ù…Ø§Ø±ÙŠØ©ØŸ" : "investment guidance?",
        description: isRTL
          ? "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§ Ù„Ù…Ø³Ø§Ø¹Ø¯ØªÙƒ ÙÙŠ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ø£Ùˆ Ø§Ù„Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø©."
          : "Reach out and we will help you choose the right project or area.",
        buttons: [
          {
            text: isRTL ? "ÙˆØ§ØªØ³Ø§Ø¨" : "WhatsApp",
            href: siteContact?.whatsapp
              ? `https://wa.me/${String(siteContact.whatsapp).replace(/\D/g, "")}`
              : "https://wa.me/971568888906",
            type: "primary",
          },
          {
            text: isRTL ? "Ø§ØªØµÙ„ Ø¨Ù†Ø§" : "Contact Us",
            href: "/contact-us",
            type: "secondary",
          },
        ],
        trustNote: isRTL
          ? "Ù…Ù‚Ø§Ù„Ø§Øª ÙˆÙ†Ø´Ø±Ø§Øª Ù…Ø­Ø¯Ø«Ø© Ù…Ø¨Ø§Ø´Ø±Ø© Ù…Ù† Ø§Ù„Ù†Ø¸Ø§Ù…"
          : "Articles and releases updated directly from the CMS",
      },
    }),
    [isRTL, siteContact]
  );

  const articles = useMemo(
    () =>
      sanityArticles.map((article) => ({
        id: article._id,
        slug: article.slug,
        title:
          locale === "ar" && article.titleAr ? article.titleAr : article.title,
        description:
          locale === "ar" && article.descriptionAr
            ? article.descriptionAr
            : article.description,
        image: article.mainImage || fallbackHeroImages[0]?.src || "",
        readTime: article.readTime || "5 min read",
        category: article.category || "Investment",
        cta: locale === "ar" ? "Ø§Ù‚Ø±Ø£ Ø§Ù„Ù…Ù‚Ø§Ù„" : "Read Article",
      })),
    [fallbackHeroImages, locale, sanityArticles]
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

  const getCarouselTransform = () => {
    return isRTL
      ? `translateX(${currentImage * 100}%)`
      : `translateX(-${currentImage * 100}%)`;
  };

  return (
    <div
      className={`${styles.page} ${isVisible ? styles.visible : ""} ${
        isRTL ? styles.rtl : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <section className={styles.hero}>
        <div className={styles.heroCarousel}>
          <div
            className={styles.carouselTrack}
            style={{ transform: getCarouselTransform() }}
          >
            {heroImages.map((image, index) => (
              <div key={index} className={styles.carouselSlide}>
                <div className={styles.heroBackground}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={styles.heroImage}
                    priority
                  />
                  <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                  <div className={styles.heroContentInner}>
                    <div className={styles.heroBadge}>
                      <span>{isRTL ? "Ø±Ø¤Ù‰ Ø§Ù„Ø®Ø¨Ø±Ø§Ø¡" : "Expert Insights"}</span>
                      <div className={styles.badgeLine} />
                    </div>

                    <h1 className={styles.heroTitle}>
                      {isRTL ? "Ø§Ù„Ø¹Ù‚Ø§Ø±Ø§Øª ÙÙŠ Ø¯Ø¨ÙŠ" : "Dubai Real Estate"}{" "}
                      <span className={styles.highlight}>{image.title}</span>
                    </h1>

                    <p className={styles.heroSubtitle}>{image.description}</p>

                    <div className={styles.trustStats}>
                      {trustStats.map((stat, i) => (
                        <div key={i} className={styles.statItem}>
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
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className={styles.articleImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.categoryBadge}>
                    <span>{article.category}</span>
                  </div>
                  <div className={styles.readTime}>
                    <span>{article.readTime}</span>
                  </div>
                  <div className={styles.cardHover}>
                    <div className={styles.hoverContent}>
                      <span>{isRTL ? "Ø§Ù‚Ø±Ø£ Ø§Ù„Ù…Ù‚Ø§Ù„" : "Read Article"}</span>
                      <div className={styles.arrowIcon}>
                        {isRTL ? "â†" : "â†’"}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleArticleClick(article, "cta");
                    }}
                    className={styles.articleCTA}
                  >
                    {article.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {!articles.length && (
            <p className={styles.sectionSubtitle}>
              {isRTL
                ? "Ù„Ù… ÙŠØªÙ… Ø¥Ø¶Ø§ÙØ© Ù…Ù‚Ø§Ù„Ø§Øª Ø¨Ø¹Ø¯."
                : "No articles have been published yet."}
            </p>
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
              {listingData.cta.buttons.map((b, i) => (
                <a
                  key={i}
                  href={b.href}
                  className={
                    b.type === "primary"
                      ? styles.primaryCTA
                      : styles.secondaryCTA
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("ArticlesCTAButtonClick", {
                      label: b.text,
                      href: b.href,
                      locale,
                    })
                  }
                >
                  {b.text}
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
