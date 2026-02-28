// src/lib/site.js
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mohamadkodmani.ae";

export const SITE_NAME = "Mohamad Kodmani";

export const DEFAULT_TITLE =
  "Mohamad Kodmani | Dubai Real Estate Advisor & Property Investment Expert";

export const DEFAULT_DESCRIPTION =
  "Luxury real estate in Dubai. Explore premium apartments, villas, and investment opportunities with a trusted advisor.";

export const DEFAULT_OG_IMAGE =
  process.env.NEXT_PUBLIC_OG_IMAGE || `${SITE_URL}/og.jpg`;

// Tracking IDs (safe if empty)
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";
