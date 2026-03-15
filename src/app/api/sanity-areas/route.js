import { sanityClient } from "@/lib/sanityClient";
import {
  getFallbackAreas,
  mergeAreaWithLocalData,
} from "@/lib/server/localContentOverlay";

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
        "heroImage": coalesce(heroImageCdn.url, heroImage),
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
        nearbyLandmarks[]{
          name,
          nameAr,
          distance,
          icon,
          lat,
          lng,
          directionsUrl
        },
        nearbyAreas[]{
          name,
          nameAr,
          distance,
          icon,
          slug
        },
        order,
        featured
      }`
      : `*[_type == "area"] | order(order asc) {
        _id,
        name,
        nameAr,
        "slug": slug.current,
        "heroImage": coalesce(heroImageCdn.url, heroImage),
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
        nearbyLandmarks[]{
          name,
          nameAr,
          distance,
          icon,
          lat,
          lng,
          directionsUrl
        },
        nearbyAreas[]{
          name,
          nameAr,
          distance,
          icon,
          slug
        },
        order,
        featured
      }`;

    const rawData = await sanityClient.fetch(query, { slug });
    const data = Array.isArray(rawData)
      ? rawData.map(mergeAreaWithLocalData)
      : mergeAreaWithLocalData(rawData);

    if (!data || (Array.isArray(data) && data.length === 0)) {
      const fallback = getFallbackAreas();
      const filteredFallback = slug ? fallback.find((item) => item.slug === slug) || null : fallback;
      return Response.json(filteredFallback);
    }

    return Response.json(data || (slug ? null : []));
  } catch (err) {
    console.error("sanity-areas API error:", err);
    const fallback = getFallbackAreas();
    const filteredFallback = slug ? fallback.find((item) => item.slug === slug) || null : fallback;
    return Response.json(filteredFallback, { status: 200 });
  }
}
