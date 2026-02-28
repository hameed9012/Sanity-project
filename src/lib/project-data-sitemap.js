// src/lib/project-data-sitemap.js

/**
 * ✅ You must return ALL canonical URLs for projects here.
 * Best source in your case:
 * - regionProjectsIndex (the index you’re building)
 * OR
 * - a single array file that lists your project pages
 *
 * Below is a safe pattern: you maintain ONE array and sitemap is always correct.
 */

import { regionProjectsIndex } from "@/data/regionProjectsIndex"; // if you have it

export async function getAllProjectCanonicalPaths() {
  // If you don't have regionProjectsIndex yet, temporarily return [] to avoid crashes.
  if (!regionProjectsIndex) return [];

  // Example shape expected: { regionSlug: { projects: [{ canonical: "/properties/..." }, ...] } }
  const paths = [];

  for (const region of Object.values(regionProjectsIndex)) {
    const projects = region?.projects || [];
    for (const p of projects) {
      if (p?.canonical) paths.push(p.canonical);
    }
  }

  // Deduplicate
  return Array.from(new Set(paths));
}
