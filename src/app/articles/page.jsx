import { getAllArticles } from "@/lib/sanityQueries";
import ArticlesClient from "./ArticlesClient";

export default async function ArticlesPage() {
  const sanityArticles = await getAllArticles().catch(() => []);
  return <ArticlesClient sanityArticles={sanityArticles} />;
}
