// src/app/robots.js
import { SITE_URL } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // IMPORTANT: do NOT block /_next/ or your JS/CSS gets blocked
        disallow: ["/api/", "/dashboard/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
