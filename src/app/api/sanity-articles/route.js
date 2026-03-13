import { sanityClient } from "@/lib/sanityClient";

export async function GET() {
  try {
    const articles = await sanityClient.fetch(`
      *[_type == "article"] | order(publishedAt desc) {
        _id,
        title,
        titleAr,
        "slug": slug.current,
        description,
        descriptionAr,
        mainImage,
        category,
        publishedAt,
        readTime,
        featured,
        seoTitle,
        seoDescription,
      }
    `);
    return Response.json(articles);
  } catch (err) {
    console.error("sanity-articles API error:", err);
    return Response.json([], { status: 500 });
  }
}