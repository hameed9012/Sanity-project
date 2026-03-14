import { sanityClient } from "@/lib/sanityClient";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    const filter = slug
      ? `*[_type == "developer" && slug.current == "${slug}"][0]`
      : `*[_type == "developer"] | order(_createdAt asc)`;

    const data = await sanityClient.fetch(`
      ${filter} {
        _id,
        name,
        nameAr,
        "slug": slug.current,
        tagline,
        taglineAr,
        "logoUrl": coalesce(logoCdn.url, logoUrl),
        "heroImageUrl": coalesce(heroImageCdn.url, heroImageUrl),
        about,
        aboutAr,
        stats,
        highlights,
        founder{
          name,
          nameAr,
          title,
          titleAr,
          bio,
          bioAr,
          ctaLabel,
          ctaLabelAr,
          ctaUrl,
          "imageUrl": coalesce(imageCdn.url, imageUrl)
        }
      }
    `);
    return Response.json(data || (slug ? null : []));
  } catch (err) {
    console.error("sanity-developer API error:", err);
    return Response.json(slug ? null : [], { status: 500 });
  }
}
