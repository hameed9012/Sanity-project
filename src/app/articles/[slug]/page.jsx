import { notFound, redirect } from "next/navigation";
import ArticleTemplate from "@/components/articles/ArticleTemplate";
import articlesData from "@/data/articles/articles-data";
import ArticleViewClient from "@/components/ArticleViewClient";
import { getArticleBySlug, getAllArticles } from "@/lib/sanityQueries";
import SanityArticleTemplate from "@/components/articles/SanityArticleTemplate";

// If you ever rename slugs, map old → new here.
const slugAliases = {
  "dubai-off-plan-investment-guide": "off-plan-investment-dubai",
};

function tryCall(fn) {
  try {
    return fn();
  } catch {
    return null;
  }
}

function getStaticArticle(slug) {
  const get = articlesData?.getArticleBySlug;

  const direct =
    tryCall(() => get?.(slug, "en")) ||
    tryCall(() => get?.(slug, "ar")) ||
    tryCall(() => get?.(slug));

  if (direct) return direct;

  const listEn = tryCall(() => articlesData?.getAllArticles?.("en")) || [];
  const listAr = tryCall(() => articlesData?.getAllArticles?.("ar")) || [];
  const merged = [...listEn, ...listAr].filter(Boolean);
  return merged.find((a) => a?.slug === slug) || null;
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  if (!slug) return notFound();

  const resolved = slugAliases[slug] || slug;
  if (slugAliases[slug]) redirect(`/articles/${resolved}`);

  // 1. Try Sanity first
  const sanityArticle = await getArticleBySlug(resolved).catch(() => null);

  if (sanityArticle) {
    return <SanityArticleTemplate article={sanityArticle} />;
  }

  // 2. Fall back to static data
  const article = getStaticArticle(resolved);
  if (!article) return notFound();

  const title = article.articleData?.hero?.title || "Article";

  return (
    <ArticleViewClient slug={resolved} title={title}>
      <ArticleTemplate article={article} slug={resolved} />
    </ArticleViewClient>
  );
}

export async function generateStaticParams() {
  const slugs = new Set();

  // Add Sanity slugs
  const sanityArticles = await getAllArticles().catch(() => []);
  sanityArticles.forEach((a) => {
    if (a?.slug) slugs.add(a.slug);
  });

  // Add static slugs
  const en = tryCall(() => articlesData?.getAllArticles?.("en")) || [];
  const ar = tryCall(() => articlesData?.getAllArticles?.("ar")) || [];
  [...en, ...ar].forEach((a) => {
    if (a?.slug) slugs.add(a.slug);
  });

  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!slug) return { title: "Articles" };

  const resolved = slugAliases[slug] || slug;

  // Try Sanity metadata first
  const sanityArticle = await getArticleBySlug(resolved).catch(() => null);
  if (sanityArticle) {
    return {
      title: sanityArticle.seoTitle || sanityArticle.title,
      description: sanityArticle.seoDescription || sanityArticle.description,
      openGraph: {
        title: sanityArticle.seoTitle || sanityArticle.title,
        description: sanityArticle.seoDescription || sanityArticle.description,
        images: sanityArticle.mainImage ? [sanityArticle.mainImage] : [],
        type: "article",
      },
    };
  }

  // Fall back to static metadata
  const article = getStaticArticle(resolved);
  if (!article) return { title: "Article Not Found" };

  const title = article.articleData?.hero?.title || "Article";
  const description = article.articleData?.hero?.subtitle || "";
  const image = article.image || article.articleData?.hero?.image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : [],
      type: "article",
    },
  };
}