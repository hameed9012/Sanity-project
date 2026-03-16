import { sanityClient } from "./sanityClient";

const PROPERTY_PROJECTION = `
  _id,
  _createdAt,
  _updatedAt,
  "slug": slug.current,
  "name": coalesce(name, en.project.name, project.name),
  "nameEn": coalesce(name, en.project.name, project.name),
  "nameAr": coalesce(nameAr, ar.project.name),
  "description": coalesce(description, en.description, en.overview),
  "descriptionAr": coalesce(descriptionAr, ar.description, ar.overview),
  status,
  listingStatus,
  propertyType,
  type,
  category,
  featured,
  isLand,
  developer,
  developerName,
  developerSlug,
  regionSlug,
  areaSlug,
  location,
  handover,
  handoverQuarter,
  completionDate,
  completionYear,
  priceAED,
  startingPrice,
  startingPriceAED,
  sizeSqft,
  sizeSqftMin,
  sizeSqftMax,
  minBedrooms,
  maxBedrooms,
  bedrooms,
  bathrooms,
  "heroImage": coalesce(heroImageCdn.url, heroImageUpload.asset->url, heroImage),
  heroImageUrl,
  image,
  heroVideo,
  brochureUrl,
  videoUrl,
  video,
  amenities,
  floorPlans,
  paymentPlan,
  nearbyPlaces,
  coordinates,
  lat,
  lng,
  gallery,
  hero,
  project,
  en,
  ar
`;

const ARTICLE_PROJECTION = `
  _id,
  _createdAt,
  _updatedAt,
  title,
  titleAr,
  "slug": slug.current,
  description,
  descriptionAr,
  "mainImage": coalesce(mainImageCdn.url, mainImage),
  category,
  publishedAt,
  readTime,
  featured,
  hero{
    ...,
    "image": coalesce(imageCdn.url, image)
  },
  body,
  bodyAr,
  tableOfContents,
  tableOfContentsAr,
  sections[]{
    ...,
    expertQuote{
      ...,
      text,
      textAr
    }
  },
  cta,
  seoTitle,
  seoDescription,
  seoKeywords
`;

export async function getSanityPropertyBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "property" && slug.current == $slug][0]{${PROPERTY_PROJECTION}}`,
    { slug }
  );
}

export async function getAllProperties(statusFilter) {
  const params = {};
  const filter = statusFilter
    ? `*[_type == "property" && coalesce(status, listingStatus) == $statusFilter]`
    : `*[_type == "property"]`;

  if (statusFilter) params.statusFilter = statusFilter;

  return sanityClient.fetch(
    `${filter} | order(featured desc, _updatedAt desc){${PROPERTY_PROJECTION}}`,
    params
  );
}

export async function getAllArticles() {
  return sanityClient.fetch(
    `*[_type == "article"] | order(featured desc, publishedAt desc, _updatedAt desc){${ARTICLE_PROJECTION}}`
  );
}

export async function getArticleBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0]{${ARTICLE_PROJECTION}}`,
    { slug }
  );
}

export async function getAllDevelopers() {
  return sanityClient.fetch(`
    *[_type == "developer"] | order(name asc) {
      _id,
      _updatedAt,
      name,
      nameAr,
      "slug": slug.current,
      tagline,
      taglineAr,
      "logoUrl": coalesce(logoCdn.url, logoUrl),
      "coverImage": coalesce(heroImageCdn.url, coverImage),
      "coverImageUrl": coalesce(heroImageCdn.url, coverImageUrl),
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
}

export async function getDeveloperBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "developer" && slug.current == $slug][0] {
      _id,
      _updatedAt,
      name,
      nameAr,
      "slug": slug.current,
      tagline,
      taglineAr,
      "logoUrl": coalesce(logoCdn.url, logoUrl),
      "coverImage": coalesce(heroImageCdn.url, coverImage),
      "coverImageUrl": coalesce(heroImageCdn.url, coverImageUrl),
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
    }`,
    { slug }
  );
}

export async function getAllAreas() {
  return sanityClient.fetch(`
    *[_type == "area"] | order(order asc, name asc) {
      _id,
      _updatedAt,
      name,
      nameAr,
      "slug": slug.current,
      "heroImage": coalesce(heroImageCdn.url, heroImage),
      heroImageUrl,
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
    }
  `);
}

export async function getAreaBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "area" && slug.current == $slug][0] {
      _id,
      _updatedAt,
      name,
      nameAr,
      "slug": slug.current,
      "heroImage": coalesce(heroImageCdn.url, heroImage),
      heroImageUrl,
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
    }`,
    { slug }
  );
}
