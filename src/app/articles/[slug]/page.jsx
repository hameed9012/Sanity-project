import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/server/articleQueries";
import SanityArticleTemplate from "@/components/articles/SanityArticleTemplate";

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug).catch(() => null);

  if (!article) {
    notFound();
  }

  return <SanityArticleTemplate article={article} />;
}