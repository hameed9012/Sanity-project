import { sanityClient } from "@/lib/sanityClient";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    let query;
    if (slug) {
      query = `*[_type == "property" && slug.current == $slug][0]{
        _id,
        "slug": slug.current,
        title,
        titleAr,
        developer,
        location,
        locationAr,
        status,
        propertyType,
        regionSlug,
        startingPrice,
        completionDate,
        paymentPlan,
        unitTypes,
        featured,
        heroImage,
        heroVideo,
        galleryImages[],
        brochureUrl,
        description,
        descriptionAr,
        amenities[],
        floorPlans[]{
          title,
          bedrooms,
          size,
          price,
          images[],
        },
        lat,
        lng,
        nearbyPlaces[],
      }`;
    } else {
      query = `*[_type == "property"] | order(_createdAt desc){
        _id,
        "slug": slug.current,
        title,
        titleAr,
        developer,
        location,
        locationAr,
        status,
        propertyType,
        regionSlug,
        startingPrice,
        completionDate,
        paymentPlan,
        unitTypes,
        featured,
        heroImage,
        heroVideo,
        galleryImages[],
        brochureUrl,
        description,
        descriptionAr,
        amenities[],
        floorPlans[]{
          title,
          bedrooms,
          size,
          price,
          images[],
        },
        lat,
        lng,
        nearbyPlaces[],
      }`;
    }

    const params = slug ? { slug } : {};
    const data = await sanityClient.fetch(query, params);
    return Response.json(data || (slug ? null : []));
  } catch (err) {
    console.error("sanity-projects API error:", err);
    return Response.json(slug ? null : [], { status: 500 });
  }
}
