import { sanityClient } from "@/lib/sanityClient";

export async function GET() {
  try {
    const properties = await sanityClient.fetch(`
      *[_type == "property"] {
        _id,
        "slug": slug.current,
        status,
        developer,
        location,
        featured,
        type,
        regionSlug,
        en,
        ar,
      }
    `);
    return Response.json(properties);
  } catch (err) {
    console.error("sanity-projects API error:", err);
    return Response.json([], { status: 500 });
  }
}