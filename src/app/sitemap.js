// src/app/sitemap.js
import { SITE_URL } from "@/lib/site";
import { getAllProjectCanonicalPaths } from "@/lib/project-data-sitemap"; // create this helper below

export default async function sitemap() {
  const now = new Date();

  const staticRoutes = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const projectPaths = await getAllProjectCanonicalPaths(); // returns ["/properties/apartments/azizi/david", ...]
  const projectRoutes = projectPaths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
