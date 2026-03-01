import { sanityClient } from "@/lib/sanityClient";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const filter = slug
      ? `*[_type == "developer" && slug.current == "${slug}"][0]`
      : `*[_type == "developer"] | order(_createdAt asc)`;

    const data = await sanityClient.fetch(`
      ${filter} {
        _id,
        name,
        "slug": slug.current,
        tagline,
        logoUrl,
        heroImageUrl,
        about,
        aboutAr,
        stats,
        highlights,
      }
    `);
    return Response.json(data || (slug ? null : []));
  } catch (err) {
    console.error("sanity-developer API error:", err);
    return Response.json(slug ? null : [], { status: 500 });
  }
}