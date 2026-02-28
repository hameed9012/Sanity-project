"use client";

import { useEffect } from "react";

export default function ArticleViewClient({ slug, title, children }) {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") {
      return;
    }

    window.fbq("trackCustom", "ArticleView", {
      slug,
      title,
    });
  }, [slug, title]);

  return children;
}
