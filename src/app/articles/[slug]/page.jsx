import { notFound, redirect } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/server/articleQueries";
import SanityArticleTemplate from "@/components/articles/SanityArticleTemplate";

// If you ever rename slugs, map old → new here.
const slugAliases = {
  "dubai-off-plan-investment-guide": "off-plan-investment-dubai",
};

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

  return notFound();
}

export async function generateStaticParams() {
  const slugs = new Set();

  // Add Sanity slugs
  const sanityArticles = await getAllArticles().catch(() => []);
  sanityArticles.forEach((a) => {
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

  return { title: "Article Not Found" };
}
