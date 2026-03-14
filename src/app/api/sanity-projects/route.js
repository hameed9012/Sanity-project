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

function parsePriceToAED(value) {
  if (value === null || value === undefined) return null;

  const raw = String(value).trim().toLowerCase();
  if (!raw) return null;

  const numericPart = raw.replace(/[^\d.]/g, "");
  let parsed = Number(numericPart);

  if (!Number.isFinite(parsed) || parsed <= 0) return null;

  const compact = raw.replace(/\s+/g, "");
  if (/million/.test(raw) || /\d(?:\.\d+)?m\b/.test(compact)) {
    parsed *= 1_000_000;
  } else if (/thousand/.test(raw) || /\d(?:\.\d+)?k\b/.test(compact)) {
    parsed *= 1_000;
  }

  parsed = Math.round(parsed);
  return parsed >= 10_000 ? parsed : null;
}

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
    priceAED: parsePriceToAED(item?.startingPrice),
    startingPriceAED: parsePriceToAED(item?.startingPrice),
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
