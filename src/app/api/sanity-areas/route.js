import { sanityClient } from "@/lib/sanityClient";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    const query = slug
      ? `*[_type == "area" && slug.current == $slug][0] {
        _id,
        name,
        nameAr,
        "slug": slug.current,
        heroImage,
        tagline,
        taglineAr,
        description,
        descriptionAr,
        location,
        avgBuyPrice,
        avgRentPrice,
        roi,
        regionSlug,
        highlights,
        highlightsAr,
        order,
        featured
      }`
      : `*[_type == "area"] | order(order asc) {
        _id,
        name,
        nameAr,
        "slug": slug.current,
        heroImage,
        tagline,
        taglineAr,
        description,
        descriptionAr,
        location,
        avgBuyPrice,
        avgRentPrice,
        roi,
        regionSlug,
        highlights,
        highlightsAr,
        order,
        featured
      }`;

    const data = await sanityClient.fetch(query, { slug });
    return Response.json(data || (slug ? null : []));
  } catch (err) {
    console.error("sanity-areas API error:", err);
    return Response.json(slug ? null : [], { status: 500 });
  }
}
