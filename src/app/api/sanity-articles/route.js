import { sanityClient } from "@/lib/sanityClient";
import {
  getFallbackArticles,
  mergeArticleWithLocalData,
} from "@/lib/server/localContentOverlay";

export async function GET() {
  try {
    const rawArticles = await sanityClient.fetch(`
      *[_type == "article"] | order(publishedAt desc) {
        _id,
        title,
        titleAr,
        "slug": slug.current,
        description,
        descriptionAr,
        "mainImage": coalesce(mainImageCdn.url, mainImage),
        category,
        publishedAt,
        readTime,
        featured,
        sections,
        body,
        bodyAr,
        hero{
          ...,
          "image": coalesce(imageCdn.url, image)
        },
        seoTitle,
        seoDescription,
      }
    `);
    const articles = Array.isArray(rawArticles)
      ? rawArticles.map(mergeArticleWithLocalData)
      : [];

    if (!articles.length) {
      return Response.json(getFallbackArticles());
    }

    return Response.json(articles);
  } catch (err) {
    console.error("sanity-articles API error:", err);
    return Response.json(getFallbackArticles(), { status: 200 });
  }
}
