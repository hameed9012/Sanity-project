import { getAllArticles } from "@/lib/sanityQueries";
import articlesData from "@/data/articles/articles-data";
import ArticlesClient from "./ArticlesClient";

export default async function ArticlesPage() {
  const sanityArticles = await getAllArticles().catch(() => []);
  return <ArticlesClient sanityArticles={sanityArticles} />;
}