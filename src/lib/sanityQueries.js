import { sanityClient } from "./sanityClient";

// ─────────────────────────────────────────────────────
// PROPERTIES
// ─────────────────────────────────────────────────────

export async function getSanityPropertyBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "property" && slug.current == $slug][0] {
      _id,
      "slug": slug.current,
      status,
      developer,
      location,
      featured,
      en,
      ar,
    }`,
    { slug }
  );
}

export async function getAllProperties(statusFilter) {
  const filter = statusFilter
    ? `*[_type == "property" && status == "${statusFilter}"]`
    : `*[_type == "property"]`;

  return sanityClient.fetch(`
    ${filter} {
      _id,
      "slug": slug.current,
      status,
      developer,
      location,
      featured,
      "name": en.project.name,
      "startingPrice": en.project.startingPrice,
      "heroImage": en.hero.backgroundUrl,
      "developerLogo": en.hero.squareImageUrl,
    }
  `);
}

// ─────────────────────────────────────────────────────
// ARTICLES
// ─────────────────────────────────────────────────────

export async function getAllArticles() {
  return sanityClient.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      titleAr,
      "slug": slug.current,
      description,
      descriptionAr,
      mainImage,
      category,
      publishedAt,
      readTime,
      seoTitle,
      seoDescription,
    }
  `);
}

export async function getArticleBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      titleAr,
      "slug": slug.current,
      description,
      descriptionAr,
      mainImage,
      category,
      publishedAt,
      readTime,
      body,
      bodyAr,
      seoTitle,
      seoDescription,
      seoKeywords,
    }`,
    { slug }
  );
}

// ─────────────────────────────────────────────────────
// DEVELOPERS
// ─────────────────────────────────────────────────────

export async function getAllDevelopers() {
  return sanityClient.fetch(`
    *[_type == "developer"] {
      _id,
      name,
      "slug": slug.current,
      tagline,
      logoUrl,
    }
  `);
}

export async function getDeveloperBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "developer" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      tagline,
      logoUrl,
      about,
      aboutAr,
      stats,
      highlights,
    }`,
    { slug }
  );
}

// ─────────────────────────────────────────────────────
// HERO SLIDES
// ─────────────────────────────────────────────────────

export async function getHeroSlides() {
  return sanityClient.fetch(`
    *[_type == "heroSlide"] | order(order asc) {
      _id,
      title,
      titleAr,
      subtitle,
      subtitleAr,
      backgroundUrl,
      ctaLabel,
      ctaLabelAr,
      ctaUrl,
      order,
    }
  `);
}