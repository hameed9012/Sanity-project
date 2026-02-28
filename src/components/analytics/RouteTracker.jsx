"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_MEASUREMENT_ID, FB_PIXEL_ID } from "@/lib/site";

export default function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");

    // GA4 page_view
    if (GA_MEASUREMENT_ID && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: url,
      });
    }

    // Meta Pixel page view
    if (FB_PIXEL_ID && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}
