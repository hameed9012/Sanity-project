"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import styles from "@/styles/ArticleTemplate.module.css";
import { useLanguage } from "@/components/LanguageProvider";

const slugify = (s = "") =>
  String(s).toLowerCase().trim().replace(/[^a-z0-9\u0600-\u06FF]+/g, "-");

const ptComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
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

function Chip({ children, className }) {
  return (
    <span className={`${styles.readTime} ${className || ""}`}>{children}</span>
  );
}

function AnimatedHeroImage({ src, alt }) {
  const imgRef = useRef(null);

  useEffect(() => {
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
    <div className={styles.heroBackground}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={styles.heroImage}
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

function isPortableText(value) {
  return (
    Array.isArray(value) &&
    value.some((item) => item && typeof item === "object" && item._type)
  );
}

function renderBody(value) {
  if (!value) return null;

  if (isPortableText(value)) {
    return <PortableText value={value} components={ptComponents} />;
  }

  if (typeof value === "string") {
    return <div dangerouslySetInnerHTML={{ __html: value }} />;
  }

  if (Array.isArray(value) && value.every((item) => typeof item === "string")) {
    return value.map((text, index) => <p key={index}>{text}</p>);
  }

  return null;
}

function StatsGrid({ stats, isRTL }) {
  if (!Array.isArray(stats) || stats.length === 0) return null;

  return (
    <div className={styles.statsGrid}>
      {stats.map((s, i) => (
        <div className={styles.statCard} key={s?._key || i}>
          <div className={styles.statNumber}>{s?.number}</div>
          <div className={styles.statLabel}>
            {isRTL ? s?.labelAr || s?.label : s?.label || s?.labelAr}
          </div>
          {s?.description ? <small>{s.description}</small> : null}
        </div>
      ))}
    </div>
  );
}

function KeyPoints({ points }) {
  if (!Array.isArray(points) || points.length === 0) return null;

  return (
    <div className={styles.keyPoints}>
      <ul>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ExpertQuote({ quote, isRTL }) {
  const text = isRTL ? quote?.textAr || quote?.text : quote?.text || quote?.textAr;
  if (!text) return null;

  return (
    <blockquote className={styles.expertQuote}>
      <em>"{text}"</em>
      {quote?.author ? <cite>— {quote.author}</cite> : null}
    </blockquote>
  );
}

function MarketAnalysis({ block, isRTL }) {
  const metrics = block?.metrics || [];
  if (!metrics.length) return null;

  const title = isRTL ? block?.titleAr || block?.title : block?.title || block?.titleAr;

  return (
    <div className={styles.marketAnalysis}>
      {title ? <h3>{title}</h3> : null}
      <div className={styles.metricsGrid}>
        {metrics.map((m, i) => (
          <div className={styles.metric} key={m?._key || i}>
            <h4>{m?.title}</h4>
            <div className={styles.metricValue}>{m?.value}</div>
            <div className={styles.metricDescription}>
              {isRTL ? m?.descriptionAr || m?.description : m?.description || m?.descriptionAr}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardGrid({ items, wrapperClass, itemClass, titleKey = "title", descKey = "description" }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className={wrapperClass}>
      {items.map((item, i) => (
        <div className={itemClass} key={item?._key || i}>
          {item?.[titleKey] ? <h4>{item[titleKey]}</h4> : null}
          {item?.[descKey] ? <p>{item[descKey]}</p> : null}
        </div>
      ))}
    </div>
  );
}

function CaseStudy({ caseStudy }) {
  const comps = caseStudy?.comparisons || [];
  if (!comps.length) return null;

  return (
    <div className={styles.caseStudy}>
      {caseStudy?.title ? <h3>{caseStudy.title}</h3> : null}
      <div className={styles.comparison}>
        {comps.map((c, i) => (
          <div className={styles.comparisonItem} key={c?._key || i}>
            <h5>{c?.location}</h5>
            <div className={styles.taxBreakdown}>
              {(c?.taxes || []).map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
            <div className={styles.totalTax}>{c?.totalTax}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FutureProjections({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className={styles.futureProjections}>
      {items.map((p, i) => (
        <div className={styles.projection} key={p?._key || i}>
          <h4>{p?.title || p?.year}</h4>
          <ul>
            {(p?.items || []).map((it, idx) =>
              typeof it === "string" ? (
                <li key={idx}>{it}</li>
              ) : (
                <li key={idx}>
                  {it?.label}: {it?.value}
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Roadmap({ steps }) {
  if (!Array.isArray(steps) || steps.length === 0) return null;

  return (
    <div className={styles.roadmap}>
      {steps.map((s, i) => (
        <div className={styles.roadmapStep} key={s?._key || i}>
          <div className={styles.stepNumber}>{s?.step || s?.number}</div>
          <div className={styles.stepContent}>
            <h4>{s?.title}</h4>
            <p>{s?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function RentalYields({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className={styles.investmentOpportunities}>
      {items.map((r, i) => (
        <div className={styles.opportunity} key={r?._key || i} style={{ padding: 0 }}>
          {r?.image ? (
            <div style={{ position: "relative", width: "100%", height: 160 }}>
              <img
                src={r.image}
                alt={r.location || "Yield"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
            </div>
          ) : null}
          <div style={{ padding: 20 }}>
            <h4>{r?.location}</h4>
            <p><strong>Avg Yield:</strong> {r?.averageYield}</p>
            <p><strong>Premium Yield:</strong> {r?.premiumYield}</p>
            <p><strong>Avg Rent:</strong> {r?.averageRent}</p>
            <p><strong>Type:</strong> {r?.propertyType}</p>
            <p><strong>Demand:</strong> {r?.demand}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalysisBlocks({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
      {items.map((a, i) => (
        <div className={styles.opportunity} key={a?._key || i}>
          <h4>{a?.title}</h4>
          {(a?.data || []).map((d, idx) => (
            <p key={idx}>
              <strong>{d?.label}:</strong> {d?.value}
            </p>
          ))}
          {a?.description ? <p style={{ opacity: 0.8 }}>{a.description}</p> : null}
        </div>
      ))}
    </div>
  );
}

function GrowthTimeline({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div>
      {items.map((g, i) => (
        <div key={g?._key || i} style={{ borderBottom: "1px solid #e9ecef", padding: "10px 0" }}>
          <h4 style={{ margin: 0 }}>
            {g?.year}: {g?.title}
          </h4>
          <p style={{ margin: "6px 0" }}>
            {g?.description} {g?.growth ? `(${g.growth})` : ""}
          </p>
        </div>
      ))}
    </div>
  );
}

function ProcessSteps({ steps }) {
  if (!Array.isArray(steps) || steps.length === 0) return null;
  return <Roadmap steps={steps} />;
}

function CaseStudies({ caseStudies, isRTL }) {
  if (!Array.isArray(caseStudies) || caseStudies.length === 0) return null;

  const labels = {
    investment: isRTL ? "الاستثمار" : "Investment",
    downPayment: isRTL ? "الدفعة الأولى" : "Down Payment",
    salePrice: isRTL ? "سعر البيع" : "Sale Price",
    profit: isRTL ? "الربح" : "Profit",
    roi: isRTL ? "العائد على الاستثمار" : "ROI",
    timeframe: isRTL ? "الفترة الزمنية" : "Timeframe",
  };

  return (
    <div className={styles.caseStudies}>
      {caseStudies.map((cs, i) => (
        <div className={styles.caseStudyItem} key={cs?._key || i}>
          <h4>{cs?.title}</h4>
          <div className={styles.caseStudyDetails}>
            <p><strong>{labels.investment}:</strong> {cs?.investment}</p>
            <p><strong>{labels.downPayment}:</strong> {cs?.downPayment}</p>
            <p><strong>{labels.salePrice}:</strong> {cs?.salePrice}</p>
            <p><strong>{labels.profit}:</strong> {cs?.profit}</p>
            <p><strong>{labels.roi}:</strong> {cs?.roi}</p>
            <p><strong>{labels.timeframe}:</strong> {cs?.timeframe}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Risks({ risks, isRTL }) {
  if (!Array.isArray(risks) || risks.length === 0) return null;

  const labels = {
    risk: isRTL ? "المخاطر" : "Risk",
    mitigation: isRTL ? "التخفيف" : "Mitigation",
  };

  return (
    <div className={styles.risks}>
      {risks.map((r, i) => (
        <div className={styles.riskItem} key={r?._key || i}>
          <h4>{r?.title}</h4>
          <p><strong>{labels.risk}:</strong> {r?.risk}</p>
          <p><strong>{labels.mitigation}:</strong> {r?.mitigation}</p>
        </div>
      ))}
    </div>
  );
}

function Developments({ developments, isRTL }) {
  if (!Array.isArray(developments) || developments.length === 0) return null;

  const labels = {
    developer: isRTL ? "المطور" : "Developer",
    price: isRTL ? "السعر" : "Price",
    roi: isRTL ? "العائد المتوقع" : "ROI",
    completion: isRTL ? "موعد التسليم" : "Completion",
  };

  return (
    <div className={styles.developments}>
      {developments.map((d, i) => (
        <div className={styles.developmentItem} key={d?._key || i}>
          <h4>{d?.name}</h4>
          <p><strong>{labels.developer}:</strong> {d?.developer}</p>
          <p><strong>{labels.price}:</strong> {d?.price}</p>
          <p><strong>{labels.roi}:</strong> {d?.roi}</p>
          <p><strong>{labels.completion}:</strong> {d?.completion}</p>
        </div>
      ))}
    </div>
  );
}

function Strategies({ strategies }) {
  if (!Array.isArray(strategies) || strategies.length === 0) return null;

  return (
    <div className={styles.strategies}>
      {strategies.map((s, i) => (
        <div className={styles.strategyItem} key={s?._key || i}>
          <h4>{s?.title}</h4>
          <p>{s?.description}</p>
        </div>
      ))}
    </div>
  );
}

function Section({ section, isRTL }) {
  const title = isRTL ? section?.titleAr || section?.title : section?.title || section?.titleAr;
  const html = isRTL
    ? section?.contentAr || section?.content
    : section?.content || section?.contentAr;
  const body = isRTL ? section?.bodyAr || section?.body : section?.body || section?.bodyAr;
  const keyPoints = isRTL ? section?.keyPointsAr || section?.keyPoints : section?.keyPoints || section?.keyPointsAr;
  const stats = section?.stats || [];
  const image = section?.image || section?.mainImage || section?.heroImage || "";
  const expertQuote = section?.expertQuote || {};
  const marketAnalysis = section?.marketAnalysis || null;
  const advantages = section?.positioningAdvantages || section?.advantages || [];
  const opportunities = section?.investmentOpportunities || section?.opportunities || [];
  const futureProjections = section?.futureProjections || section?.projections || [];
  const appreciationMetrics = section?.appreciationMetrics || [];
  const marketHealth = section?.marketHealth || [];

  return (
    <section className={styles.contentSection} id={section?.id || slugify(title || "")}>
      {title ? <h2>{title}</h2> : null}

      {image ? (
        <div style={{ margin: "22px 0", borderRadius: 12, overflow: "hidden" }}>
          <img src={image} alt={title || "Section"} style={{ width: "100%", display: "block", objectFit: "cover" }} />
        </div>
      ) : null}

      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : renderBody(body)}

      <StatsGrid stats={stats} isRTL={isRTL} />
      <KeyPoints points={keyPoints} />
      <ExpertQuote quote={expertQuote} isRTL={isRTL} />
      {marketAnalysis ? <MarketAnalysis block={marketAnalysis} isRTL={isRTL} /> : null}

      <CardGrid items={section?.taxBenefits} wrapperClass={styles.taxBenefits} itemClass={styles.taxBenefit} />
      {section?.caseStudy ? <CaseStudy caseStudy={section.caseStudy} /> : null}
      <CardGrid items={advantages} wrapperClass={styles.positioningAdvantages} itemClass={styles.advantage} />
      <CardGrid items={opportunities} wrapperClass={styles.investmentOpportunities} itemClass={styles.opportunity} />
      <FutureProjections items={futureProjections} />
      <Roadmap steps={section?.roadmap} />
      <RentalYields items={section?.rentalYields} />
      <AnalysisBlocks items={section?.analysis} />
      <GrowthTimeline items={section?.growthTimeline} />
      <ProcessSteps steps={section?.processSteps} />
      <CaseStudies caseStudies={section?.caseStudies} isRTL={isRTL} />
      <Risks risks={section?.risks} isRTL={isRTL} />
      <Developments developments={section?.developments} isRTL={isRTL} />
      <Strategies strategies={section?.strategies} />

      {appreciationMetrics.length > 0 ? (
        <div className={styles.marketAnalysis} style={{ marginTop: 20 }}>
          <h3>{isRTL ? "مقاييس التقدير" : "Appreciation Metrics"}</h3>
          <div className={styles.metricsGrid}>
            {appreciationMetrics.map((m, i) => (
              <div className={styles.metric} key={m?._key || i}>
                <h4>{m?.label}</h4>
                <div className={styles.metricValue}>{m?.value}</div>
                <div className={styles.metricDescription}>{m?.trend}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {marketHealth.length > 0 ? (
        <div className={styles.marketAnalysis} style={{ marginTop: 20 }}>
          <h3>{isRTL ? "صحة السوق" : "Market Health"}</h3>
          <div className={styles.metricsGrid}>
            {marketHealth.map((m, i) => (
              <div className={styles.metric} key={m?._key || i}>
                <h4>{m?.label}</h4>
                <div className={styles.metricValue}>{m?.value}</div>
                <div className={styles.metricDescription}>{m?.status}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default function SanityArticleTemplate({ article }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";
  const [siteContact, setSiteContact] = useState(null);

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
  const author = article?.author || {};

  const title = isRTL ? hero?.titleAr || article?.titleAr || hero?.title || article?.title : hero?.title || article?.title || hero?.titleAr || article?.titleAr;
  const subtitle = isRTL
    ? hero?.subtitleAr || article?.descriptionAr || hero?.subtitle || article?.description
    : hero?.subtitle || article?.description || hero?.subtitleAr || article?.descriptionAr;

  const heroImage = hero?.image || article?.mainImage || "";
  const toc = isRTL ? article?.tableOfContentsAr || article?.tableOfContents : article?.tableOfContents || article?.tableOfContentsAr;
  const sections = Array.isArray(article?.sections) ? article.sections : [];
  const body = isRTL ? article?.bodyAr || article?.body : article?.body || article?.bodyAr;

  const publishDate = article?.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString(isRTL ? "ar-AE" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const contactHref =
    cta?.buttonUrl ||
    (siteContact?.whatsapp
      ? `https://wa.me/${String(siteContact.whatsapp).replace(/\D/g, "")}`
      : "/contact-us");

  const displayAuthorName = isRTL
    ? author?.nameAr || author?.name
    : author?.name || author?.nameAr;

  const displayAuthorRole = isRTL
    ? author?.roleAr || author?.role
    : author?.role || author?.roleAr;

  const authorInitials =
    author?.initials ||
    (displayAuthorName
      ? displayAuthorName
          .split(" ")
          .slice(0, 2)
          .map((part) => part[0])
          .join("")
          .toUpperCase()
      : "");

  const categoryLabel = isRTL ? article?.categoryAr || article?.category : article?.category || article?.categoryAr;
  const readTimeLabel = isRTL ? article?.readTimeAr || article?.readTime : article?.readTime || article?.readTimeAr;

  const contentSections = useMemo(() => {
    if (sections.length > 0) return sections;
    if (!body) return [];
    return [
      {
        id: "overview",
        title: isRTL ? "نظرة عامة" : "Overview",
        body,
      },
    ];
  }, [sections, body, isRTL]);

  return (
    <article className={styles.articlePage} dir={isRTL ? "rtl" : "ltr"}>
      <header className={styles.hero}>
        {heroImage ? <AnimatedHeroImage src={heroImage} alt={title} /> : null}

        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <Link href="/">{isRTL ? "الرئيسية" : "Home"}</Link> /{" "}
            <Link href="/articles">{isRTL ? "المقالات" : "Articles"}</Link> /{" "}
            <span>{categoryLabel || (isRTL ? "مقال" : "Article")}</span>
          </nav>

          <div className={styles.articleMeta}>
            {readTimeLabel ? <Chip>{readTimeLabel}</Chip> : null}
            {categoryLabel ? <Chip className={styles.category}>{categoryLabel}</Chip> : null}
            {publishDate ? <Chip className={styles.publishDate}>{publishDate}</Chip> : null}
          </div>

          {title ? <h1 className={styles.heroTitle}>{title}</h1> : null}
          {subtitle ? <p className={styles.heroSubtitle}>{subtitle}</p> : null}

          {displayAuthorName || displayAuthorRole ? (
            <div className={styles.author}>
              {author?.avatar ? (
                <img
                  src={author.avatar}
                  alt={displayAuthorName || "Author"}
                  className={styles.authorAvatar}
                />
              ) : authorInitials ? (
                <div className={styles.authorAvatar}>{authorInitials}</div>
              ) : null}

              <div className={styles.authorInfo}>
                {displayAuthorName ? <strong>{displayAuthorName}</strong> : null}
                {displayAuthorRole ? <span>{displayAuthorRole}</span> : null}
              </div>
            </div>
          ) : null}
        </div>
      </header>

      {Array.isArray(toc) && toc.length > 0 ? (
        <aside className={styles.tableOfContents}>
          <h2>{isRTL ? "جدول المحتويات" : "Table of Contents"}</h2>
          <nav>
            <ul>
              {toc.map((item, i) => {
                const label = typeof item === "string"
                  ? item
                  : isRTL
                    ? item?.titleAr || item?.title || item?.label
                    : item?.title || item?.titleAr || item?.label;

                return label ? (
                  <li key={i}>
                    <a href={`#${slugify(label)}`}>{label}</a>
                  </li>
                ) : null;
              })}
            </ul>
          </nav>
        </aside>
      ) : null}

      <main className={styles.articleContent}>
        {contentSections.map((section, idx) => (
          <Section key={section?._key || section?.id || idx} section={section} isRTL={isRTL} />
        ))}

        <section className={styles.contentSection}>
          <div className={styles.inArticleCTA}>
            <h3>
              {(isRTL ? cta?.inlineTitleAr : cta?.inlineTitle) ||
                (isRTL ? "مستعد لاتخاذ الإجراء؟" : "Ready to Take Action?")}
            </h3>
            <p>
              {(isRTL ? cta?.inlineDescriptionAr : cta?.inlineDescription) ||
                (isRTL
                  ? "احصل على إرشادات مخصصة بناءً على هذا التحليل لتعظيم عوائدك."
                  : "Get personalized guidance based on this analysis to maximize your returns.")}
            </p>
            <a
              href={contactHref}
              target={contactHref.startsWith("http") ? "_blank" : undefined}
              rel={contactHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className={styles.ctaButton}
            >
              {(isRTL ? cta?.buttonLabelAr : cta?.buttonLabel) ||
                (isRTL ? "احصل على استشارة الخبراء" : "Get Expert Consultation")}
            </a>
          </div>
        </section>
      </main>

      <section className={styles.finalCTA}>
        <div className={styles.ctaContent}>
          <h2>
            {(isRTL ? cta?.titleAr : cta?.title) ||
              (isRTL ? "مستعد لتنفيذ هذه الاستراتيجيات؟" : "Ready to Implement These Strategies?")}
          </h2>
          <p>
            {(isRTL ? cta?.descriptionAr : cta?.description) ||
              (isRTL
                ? "اتخذ الخطوة التالية في رحلتك الاستثمارية مع إرشادات مخصصة ودعم الخبراء."
                : "Take the next step in your investment journey with personalized guidance and expert support.")}
          </p>
          <div className={styles.ctaButtons}>
            <a
              href={contactHref}
              target={contactHref.startsWith("http") ? "_blank" : undefined}
              rel={contactHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className={styles.primaryCTA}
            >
              {(isRTL ? cta?.buttonLabelAr : cta?.buttonLabel) ||
                (isRTL ? "احصل على خطة استثمار مخصصة" : "Get Personalized Investment Plan")}
            </a>

            {cta?.secondaryButtonUrl ? (
              <a
                href={cta.secondaryButtonUrl}
                className={styles.secondaryCTA}
                target={cta.secondaryButtonUrl.startsWith("http") ? "_blank" : undefined}
                rel={cta.secondaryButtonUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {(isRTL ? cta?.secondaryButtonLabelAr : cta?.secondaryButtonLabel) ||
                  (isRTL ? "استشارة سريعة" : "Quick Consultation")}
              </a>
            ) : null}
          </div>

          {(isRTL ? cta?.trustNoteAr : cta?.trustNote) ? (
            <div className={styles.guarantee}>
              <strong>{isRTL ? cta?.trustNoteAr || cta?.trustNote : cta?.trustNote || cta?.trustNoteAr}</strong>
            </div>
          ) : null}
        </div>
      </section>
    </article>
  );
}