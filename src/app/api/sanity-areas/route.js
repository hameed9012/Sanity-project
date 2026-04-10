import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN || process.env.SANITY_API_TOKEN,
});

const ALLOWED_ORIGINS = new Set([
  "http://localhost:5500",
  "http://127.0.0.1:5500",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
]);

function corsHeaders(origin = "") {
  const allowOrigin = ALLOWED_ORIGINS.has(origin)
    ? origin
    : "http://localhost:5500";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(body, init = {}, origin = "") {
  const headers = {
    "Content-Type": "application/json",
    ...corsHeaders(origin),
    ...(init.headers || {}),
  };

  return Response.json(body, {
    ...init,
    headers,
  });
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin") || ""),
  });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const origin = request.headers.get("origin") || "";

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
        locationAr,
        avgBuyPrice,
        avgBuyPriceAr,
        avgRentPrice,
        avgRentPriceAr,
        roi,
        roiAr,
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
        locationAr,
        avgBuyPrice,
        avgBuyPriceAr,
        avgRentPrice,
        avgRentPriceAr,
        roi,
        roiAr,
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
    return jsonResponse(rawData || (slug ? null : []), { status: 200 }, origin);
  } catch (err) {
    console.error("sanity-areas API error:", err);
    return jsonResponse(slug ? null : [], { status: 500 }, origin);
  }
}
