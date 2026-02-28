// src/lib/tracking.js
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export function trackPageView(url) {
  if (typeof window === "undefined") return;

  // GA4 pageview
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("config", GA_ID, { page_path: url });
  }

  // Meta Pixel pageview
  if (META_PIXEL_ID && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;

  // GA4 event
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  // Meta Pixel custom event
  if (META_PIXEL_ID && typeof window.fbq === "function") {
    window.fbq("trackCustom", name, params);
  }
}
