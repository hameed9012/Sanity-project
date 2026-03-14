import {
  getAllAreas,
  getAllArticles,
  getAllDevelopers,
  getAllProperties,
} from "@/lib/sanityQueries";

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+(realty|properties|developments?|group|real\s+estate)\s*$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeCategory(property) {
  const raw = String(
    property?.category ||
      property?.type ||
      property?.propertyType ||
      property?.unitTypes ||
      ""
  ).toLowerCase();

  if (property?.isLand || raw.includes("land")) return "lands";
  if (raw.includes("villa")) return "villas";
  if (raw.includes("penthouse")) return "penthouses";
  if (raw.includes("commercial") || raw.includes("retail") || raw.includes("office")) {
    return "commercial-retail";
  }
  return "apartments";
}

export async function getAllProjectCanonicalPaths() {
  const [properties, developers, articles, areas] = await Promise.all([
    getAllProperties().catch(() => []),
    getAllDevelopers().catch(() => []),
    getAllArticles().catch(() => []),
    getAllAreas().catch(() => []),
  ]);

  const propertyPaths = (properties || [])
    .map((property) => {
      const slug = property?.slug;
      if (!slug) return null;

      const category = normalizeCategory(property);
      if (category === "lands") return `/lands/${slug}`;

      const developerSlug =
        property?.developerSlug ||
        slugify(property?.developer || property?.developerName || "");

      if (!developerSlug) return null;
      return `/properties/${category}/${developerSlug}/${slug}`;
    })
    .filter(Boolean);

  const developerPaths = (developers || [])
    .map((developer) => (developer?.slug ? `/developers/${developer.slug}` : null))
    .filter(Boolean);

  const articlePaths = (articles || [])
    .map((article) => (article?.slug ? `/articles/${article.slug}` : null))
    .filter(Boolean);

  const areaPaths = (areas || [])
    .map((area) => (area?.slug ? `/where-to-live/${area.slug}` : null))
    .filter(Boolean);

  return Array.from(
    new Set([...propertyPaths, ...developerPaths, ...articlePaths, ...areaPaths])
  );
}
