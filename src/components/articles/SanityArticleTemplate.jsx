"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import styles from "@/styles/ArticleTemplate.module.css";
import { useLanguage } from "@/components/LanguageProvider";

const ptComponents = {
  block: {
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
    h1: ({ children }) => <h1 className={styles.heading1}>{children}</h1>,
    h2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.heading3}>{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className={styles.expertQuote}>
        <em>{children}</em>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

function AnimatedHeroImage({ src, alt }) {
  const imgRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    let rafId = null;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.08)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={wrapRef} className={styles.heroBackground}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={styles.heroImage}
        style={{
          width: "100%",
          height: "115%",
          objectFit: "cover",
          opacity: 0.35,
          transformOrigin: "center top",
          willChange: "transform",
          animation: "heroPanZoom 18s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes heroPanZoom {
          0% { transform: scale(1.08) translate(0%, 0%); }
          33% { transform: scale(1.12) translate(-1.5%, -0.5%); }
          66% { transform: scale(1.1) translate(1.5%, 0.5%); }
          100% { transform: scale(1.08) translate(0%, -1%); }
        }
      `}</style>
    </div>
  );
}

function SectionContent({ section, isRTL }) {
  const title = isRTL ? section?.titleAr || section?.title : section?.title || section?.titleAr;
  const body = isRTL ? section?.bodyAr || section?.body : section?.body || section?.bodyAr;
  const keyPoints = isRTL
    ? section?.keyPointsAr || section?.keyPoints
    : section?.keyPoints || section?.keyPointsAr;
  const quote = isRTL
    ? section?.expertQuote?.textAr || section?.expertQuote?.text
    : section?.expertQuote?.text || section?.expertQuote?.textAr;

  return (
    <section className={styles.contentSection}>
      {title ? <h2 className={styles.heading2}>{title}</h2> : null}
      {Array.isArray(body) && body.length > 0 ? (
        <PortableText value={body} components={ptComponents} />
      ) : null}
      {Array.isArray(keyPoints) && keyPoints.length > 0 ? (
        <ul className={styles.keyPoints}>
          {keyPoints.map((point, index) => (
            <li key={`${title || "section"}-${index}`}>{point}</li>
          ))}
        </ul>
      ) : null}
      {quote ? (
        <blockquote className={styles.expertQuote}>
          <em>{quote}</em>
        </blockquote>
      ) : null}
    </section>
  );
}

export default function SanityArticleTemplate({ article }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";
  const [siteContact, setSiteContact] = React.useState(null);

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

  const hero = article?.hero || {};
  const cta = article?.cta || {};
  const title = (isRTL ? hero?.titleAr || article?.titleAr : hero?.title || article?.title) || article?.title;
  const description =
    (isRTL ? hero?.subtitleAr || article?.descriptionAr : hero?.subtitle || article?.description) ||
    article?.description;
  const heroImage = hero?.image || article?.mainImage;
  const sections = Array.isArray(article?.sections) ? article.sections : [];
  const body = isRTL ? article?.bodyAr || article?.body : article?.body || article?.bodyAr;
  const contactHref = cta?.buttonUrl
    || (siteContact?.whatsapp
      ? `https://wa.me/${String(siteContact.whatsapp).replace(/\D/g, "")}`
      : "/contact-us");

  const publishDate = article?.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString(isRTL ? "ar-AE" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className={styles.articlePage} dir={isRTL ? "rtl" : "ltr"}>
      <section className={styles.hero}>
        {heroImage ? <AnimatedHeroImage src={heroImage} alt={title} /> : null}

        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <Link href="/articles">{isRTL ? "المقالات" : "Articles"}</Link>
            <span> / </span>
            <span>{article?.category || (isRTL ? "مقال" : "Article")}</span>
          </div>

          <div className={styles.metaRow}>
            {article?.category ? <span className={styles.categoryTag}>{article.category}</span> : null}
            {article?.readTime ? <span className={styles.readTime}>{article.readTime}</span> : null}
          </div>

          <h1 className={styles.heroTitle}>{title}</h1>
          {description ? <p className={styles.heroSubtitle}>{description}</p> : null}
          {publishDate ? <div className={styles.publishDate}>{publishDate}</div> : null}
        </div>
      </section>

      <article className={styles.articleContent}>
        <div className={styles.contentWrapper}>
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <SectionContent key={section?.id || index} section={section} isRTL={isRTL} />
            ))
          ) : Array.isArray(body) && body.length > 0 ? (
            <PortableText value={body} components={ptComponents} />
          ) : (
            <p style={{ color: "#888", textAlign: "center", padding: "40px 0" }}>
              {isRTL ? "المحتوى قيد الإعداد..." : "Content coming soon..."}
            </p>
          )}
        </div>
      </article>

      <section className={styles.consultationCTA}>
        <div className={styles.ctaContent}>
          <h2>{(isRTL ? cta?.titleAr : cta?.title) || (isRTL ? "هل أنت مستعد للاستثمار؟" : "Ready to Invest?")}</h2>
          <p>
            {(isRTL ? cta?.descriptionAr : cta?.description) ||
              (isRTL
                ? "تواصل مع خبرائنا للحصول على استشارة مجانية"
                : "Get a free consultation with our experts today")}
          </p>
          <a
            href={contactHref}
            target={contactHref.startsWith("http") ? "_blank" : undefined}
            rel={contactHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className={styles.ctaButton}
          >
            {(isRTL ? cta?.buttonLabelAr : cta?.buttonLabel) || (isRTL ? "تواصل معنا" : "Contact Us")}
          </a>
        </div>
      </section>
    </div>
  );
}
