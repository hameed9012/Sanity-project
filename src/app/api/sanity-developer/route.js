import { sanityClient } from "@/lib/sanityClient";
import {
  getFallbackDevelopers,
  getFallbackProperties,
  mergeDeveloperWithLocalData,
} from "@/lib/server/localContentOverlay";

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

function withScopedProjects(developer) {
  if (!developer) return developer;

  const allProjects = getFallbackProperties();
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
      ? rawData.map((item) => withScopedProjects(mergeDeveloperWithLocalData(item)))
      : withScopedProjects(mergeDeveloperWithLocalData(rawData));

    if (!data || (Array.isArray(data) && data.length === 0)) {
      const fallback = getFallbackDevelopers();
      const hydratedFallback = fallback.map(withScopedProjects);
      const filteredFallback = slug ? hydratedFallback.find((item) => item.slug === slug) || null : hydratedFallback;
      return Response.json(filteredFallback);
    }

    return Response.json(data || (slug ? null : []));
  } catch (err) {
    console.error("sanity-developer API error:", err);
    const fallback = getFallbackDevelopers();
    const hydratedFallback = fallback.map(withScopedProjects);
    const filteredFallback = slug ? hydratedFallback.find((item) => item.slug === slug) || null : hydratedFallback;
    return Response.json(filteredFallback, { status: 200 });
  }
}
