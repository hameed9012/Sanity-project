"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./articles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import articlesData from "@/data/articles/articles-data";
import { useLanguage } from "@/components/LanguageProvider";

export default function ArticlesClient({ sanityArticles = [] }) {
  const router = useRouter();
  const { locale } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [siteContact, setSiteContact] = useState(null);

  const isRTL = locale === "ar";
  const CDN = "https://luxury-real-estate-media.b-cdn.net";
  const hasSanityArticles = sanityArticles.length > 0;

  // 🔹 Meta Pixel helper
  const track = (eventName, params = {}) => {
    if (typeof window === "undefined" || typeof window.fbq !== "function")
      return;
    window.fbq("trackCustom", eventName, params);
  };

  const fallbackHeroImages = useMemo(
    () => [
      {
        src: `${CDN}/sky-parks/exterior-night-01.jpg`,
        alt: isRTL
          ? "تحليلات سوق العقارات في دبي"
          : "Dubai Real Estate Market Insights",
        title: isRTL ? "دليل الاستثمار" : "Investment Guides",
        description: isRTL
          ? "حقّق أقصى عائد من خلال الاستثمار الاستراتيجي في العقارات"
          : "Maximize returns with strategic property investments",
      },
      {
        src: `${CDN}/hartland/hero-bg.jpg`,
        alt: isRTL ? "استراتيجيات الاستثمار" : "Investment Strategies",
        title: isRTL ? "تحليل السوق" : "Market Analysis",
        description: isRTL
          ? "رؤى الخبراء حول اتجاهات العقارات الفاخرة في دبي"
          : "Expert insights on Dubai's luxury property trends",
      },
      {
        src: `${CDN}/lumena-alta/hero-bg.jpg`,
        alt: isRTL ? "تطوير العقارات" : "Property Development",
        title: isRTL ? "أخبار التطوير" : "Development News",
        description: isRTL
          ? "أحدث التحديثات حول المشاريع العقارية المتميزة في دبي"
          : "Latest updates on premium Dubai developments",
      },
    ],
    [CDN, isRTL]
  );

  const heroImages = useMemo(() => {
    if (!hasSanityArticles) return fallbackHeroImages;

    const slides = sanityArticles
      .filter((article) => article?.mainImage || article?.hero?.image)
      .slice(0, 3)
      .map((article) => ({
        src: article.mainImage || article.hero?.image,
        alt:
          isRTL
            ? article.titleAr || article.title || "Article"
            : article.title || article.titleAr || "Article",
        title:
          isRTL
            ? article.titleAr || article.title || "Article"
            : article.title || article.titleAr || "Article",
        description:
          isRTL
            ? article.descriptionAr || article.description || ""
            : article.description || article.descriptionAr || "",
      }));

    return slides.length > 0 ? slides : fallbackHeroImages;
  }, [fallbackHeroImages, hasSanityArticles, isRTL, sanityArticles]);

  const trustStats = useMemo(
    () => [
      { number: "15+", label: isRTL ? "سنوات خبرة" : "Years Experience" },
      { number: "500+", label: isRTL ? "مشروع مكتمل" : "Projects Completed" },
      { number: "98%", label: isRTL ? "رضا العملاء" : "Client Satisfaction" },
    ],
    [isRTL]
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
        if (active && json?.ok) setSiteContact(json?.data?.contact || null);
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

  // ── Use Sanity articles if available, otherwise fall back to static data ──
  const listingData = hasSanityArticles
    ? {
        sectionHeader: {
          badge: isRTL ? "مركز الإعلام" : "Media Center",
          title: isRTL ? "أحدث" : "Latest",
          highlight: isRTL ? "المقالات" : "Articles",
          subtitle: isRTL
            ? "كل مقال جديد مضاف من النظام سيظهر هنا تلقائياً."
            : "Every article added in Sanity appears here automatically.",
        },
        cta: {
          badge: isRTL ? "تواصل" : "Get In Touch",
          title: isRTL ? "هل تريد" : "Want",
          highlight: isRTL ? "استشارة استثمارية؟" : "investment guidance?",
          description: isRTL
            ? "تواصل معنا لمساعدتك في اختيار المشروع أو المنطقة المناسبة."
            : "Reach out and we will help you choose the right project or area.",
          buttons: [
            {
              text: isRTL ? "واتساب" : "WhatsApp",
              href: siteContact?.whatsapp
                ? `https://wa.me/${String(siteContact.whatsapp).replace(/\D/g, "")}`
                : "https://wa.me/971568888906",
              type: "primary",
            },
            {
              text: isRTL ? "اتصل بنا" : "Contact Us",
              href: "/contact-us",
              type: "secondary",
            },
          ],
          trustNote: isRTL
            ? "مقالات ونشرات محدثة مباشرة من النظام"
            : "Articles and releases updated directly from the CMS",
        },
      }
    : articlesData.getListingData(locale);

  const articles =
    hasSanityArticles
      ? sanityArticles.map((a) => ({
          id: a._id,
          slug: a.slug,
          title: locale === "ar" && a.titleAr ? a.titleAr : a.title,
          description:
            locale === "ar" && a.descriptionAr
              ? a.descriptionAr
              : a.description,
          image: a.mainImage || "/off-plan.jpg",
          readTime: a.readTime || "5 min read",
          category: a.category || "Investment",
          cta: locale === "ar" ? "اقرأ المقال" : "Read Article",
        }))
      : articlesData.getAllArticles(locale);

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
      {/* HERO (carousel) */}
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
                      <span>{isRTL ? "رؤى الخبراء" : "Expert Insights"}</span>
                      <div className={styles.badgeLine} />
                    </div>

                    <h1 className={styles.heroTitle}>
                      {isRTL ? "العقارات في دبي" : "Dubai Real Estate"}{" "}
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

      {/* ARTICLES GRID */}
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
                      <span>{isRTL ? "اقرأ المقال" : "Read Article"}</span>
                      <div className={styles.arrowIcon}>
                        {isRTL ? "←" : "→"}
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
        </div>
      </section>

      {/* CTA */}
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
