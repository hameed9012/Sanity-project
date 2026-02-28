"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ArticleTemplate.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { PortableText } from "@portabletext/react";

// Portable Text components for rendering Sanity rich text
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
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <div className={styles.contentImage}>
          <img src={value.asset.url} alt={value.alt || ""} />
        </div>
      ) : null,
  },
};

export default function SanityArticleTemplate({ article }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  const title = isRTL && article.titleAr ? article.titleAr : article.title;
  const description =
    isRTL && article.descriptionAr ? article.descriptionAr : article.description;
  const body = isRTL && article.bodyAr ? article.bodyAr : article.body;

  const publishDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString(
        isRTL ? "ar-AE" : "en-US",
        { year: "numeric", month: "long", day: "numeric" }
      )
    : null;

  return (
    <div
      className={styles.articlePage}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* HERO */}
      <section className={styles.hero}>
        {article.mainImage && (
          <div className={styles.heroBackground}>
            <img
              src={article.mainImage}
              alt={title}
              className={styles.heroImage}
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
            />
          </div>
        )}

        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <Link href="/articles">
              {isRTL ? "المقالات" : "Articles"}
            </Link>
            <span> / </span>
            <span>{article.category || (isRTL ? "مقال" : "Article")}</span>
          </div>

          <div className={styles.metaRow}>
            {article.category && (
              <span className={styles.categoryTag}>{article.category}</span>
            )}
            {article.readTime && (
              <span className={styles.readTime}>{article.readTime}</span>
            )}
          </div>

          <h1 className={styles.heroTitle}>{title}</h1>

          {description && (
            <p className={styles.heroSubtitle}>{description}</p>
          )}

          {publishDate && (
            <div className={styles.publishDate}>{publishDate}</div>
          )}
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className={styles.articleContent}>
        <div className={styles.contentWrapper}>
          {body && body.length > 0 ? (
            <PortableText value={body} components={ptComponents} />
          ) : (
            <p style={{ color: "#888", textAlign: "center", padding: "40px 0" }}>
              {isRTL ? "المحتوى قيد الإعداد..." : "Content coming soon..."}
            </p>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className={styles.consultationCTA}>
        <div className={styles.ctaContent}>
          <h2>{isRTL ? "هل أنت مستعد للاستثمار؟" : "Ready to Invest?"}</h2>
          <p>
            {isRTL
              ? "تواصل مع خبرائنا للحصول على استشارة مجانية"
              : "Get a free consultation with our experts today"}
          </p>
          <a
            href="https://wa.me/971568888906"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            {isRTL ? "تواصل معنا" : "Contact Us"}
          </a>
        </div>
      </section>
    </div>
  );
}