import { sanityClient } from "@/lib/sanityClient";

const PROPERTY_QUERY = `
  _id,
  "slug": slug.current,
  title,
  titleAr,
  developer,
  location,
  locationAr,
  status,
  propertyType,
  type,
  regionSlug,
  areaSlug,
  startingPrice,
  completionDate,
  paymentPlan,
  unitTypes,
  featured,
  heroImage,
  heroImageUpload{
    asset->
  },
  heroVideo,
  galleryImages[]{
    ...,
    imageUpload{
      asset->
    }
  },
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
`;

function normalizeProperty(item) {
  if (!item) return item;

  const galleryImages = Array.isArray(item.galleryImages)
    ? item.galleryImages.map((entry) => {
        if (typeof entry === "string") return { url: entry };
        return {
          ...entry,
          url: entry?.url || entry?.imageUpload?.asset?.url || "",
        };
      })
    : [];

  return {
    ...item,
    heroImage: item?.heroImage || item?.heroImageUpload?.asset?.url || "",
    galleryImages,
  };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    const query = slug
      ? `*[_type == "property" && slug.current == $slug][0]{${PROPERTY_QUERY}}`
      : `*[_type == "property"] | order(_createdAt desc){${PROPERTY_QUERY}}`;

    const params = slug ? { slug } : {};
    const rawData = await sanityClient.fetch(query, params);
    const data = Array.isArray(rawData)
      ? rawData.map(normalizeProperty)
      : normalizeProperty(rawData);

    return Response.json(data || (slug ? null : []));
  } catch (err) {
    console.error("sanity-projects API error:", err);
    return Response.json(slug ? null : [], { status: 500 });
  }
}
