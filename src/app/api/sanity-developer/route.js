import { sanityClient } from "@/lib/sanityClient";

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

async function withScopedProjects(developer) {
  if (!developer) return developer;

  const allProjects = await sanityClient.fetch(`*[_type == "property"]{
    _id,
    "slug": slug.current,
    title,
    titleAr,
    developer,
    "heroImage": coalesce(heroImageCdn.url, heroImageUpload.asset->url, heroImage),
    location,
    locationAr,
    status,
    propertyType,
    landCategory,
    regionSlug,
    areaSlug,
    startingPrice,
    completionDate
  }`);
  const tokens = new Set(
    [
      developer.slug,
      developer.name,
      developer.nameAr,
      slugify(developer.name),
    ]
      .filter(Boolean)
      .map(normalize)
  );

  const projects = allProjects.filter((project) => {
    const haystack = [
      project?.developer,
      project?.developerSlug,
      project?.developerNameEn,
      project?.developerNameAr,
    ]
      .filter(Boolean)
      .map(normalize)
      .join(" ");

    return Array.from(tokens).some((token) => token && haystack.includes(token));
  });

  return {
    ...developer,
    projects,
  };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    const filter = slug
      ? `*[_type == "developer" && slug.current == "${slug}"][0]`
      : `*[_type == "developer"] | order(_createdAt asc)`;

    const rawData = await sanityClient.fetch(`
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
    const data = Array.isArray(rawData)
      ? await Promise.all(rawData.map((item) => withScopedProjects(item)))
      : await withScopedProjects(rawData);

    return Response.json(data || (slug ? null : []));
  } catch (err) {
    console.error("sanity-developer API error:", err);
    return Response.json(slug ? null : [], { status: 500 });
  }
}
