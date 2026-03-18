import { getArticleBySlug as sanityGetArticleBySlug, getAllArticles } from "../sanityQueries";
import { mergeArticleWithLocalData } from "./localContentOverlay";

export async function getArticleBySlug(slug) {
  const article = await sanityGetArticleBySlug(slug);
  // Merge with local data to enhance with fallback content and convert snippet strings to Portable Text blocks
  return article ? mergeArticleWithLocalData(article) : null;
}

export { getAllArticles };
