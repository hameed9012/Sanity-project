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
        "mainImage": coalesce(mainImageCdn.url, mainImage),
        category,
        categoryAr,
        publishedAt,
        readTime,
        readTimeAr,
        featured,
        featuredLogo,
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

    return Response.json(Array.isArray(articles) ? articles : []);
  } catch (err) {
    console.error("sanity-articles API error:", err);
    return Response.json([], { status: 500 });
  }
}
