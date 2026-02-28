// src/lib/seo.js
import { SITE_URL } from "./site";

export const siteUrl = SITE_URL;

export function canonicalUrl(pathname = "/") {
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(p, SITE_URL).toString();
}
