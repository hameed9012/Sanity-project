import { getAllArticles } from "@/lib/server/articleQueries";
import ArticlesClient from "./ArticlesClient";

export default async function ArticlesPage() {
  const sanityArticles = await getAllArticles().catch(() => []);
  return <ArticlesClient sanityArticles={sanityArticles} />;
}
