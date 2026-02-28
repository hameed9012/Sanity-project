// src/lib/getProjectCardMedia.js

const isVideoUrl = (url) => {
  if (!url || typeof url !== "string") return false;
  const clean = url.split("?")[0].toLowerCase();
  return (
    clean.endsWith(".mp4") ||
    clean.endsWith(".webm") ||
    clean.endsWith(".mov") ||
    clean.endsWith(".m4v") ||
    clean.endsWith(".ogg")
  );
};

/**
 * Returns:
 *  - { type: "video", url, poster }
 *  - { type: "image", url }
 *  - { type: "none", url: null }
 *
 * Supports:
 * 1) Full project data: { en: {...}, ar: {...} }
 * 2) Localized node: { hero: {...}, gallery: {...} }
 */
export const getProjectCardMedia = (data) => {
  if (!data) return { type: "none", url: null };

  // ✅ if you pass full object with en/ar
  // ✅ or if you pass localized object directly
  const node = data?.hero || data?.gallery ? data : data?.en || data?.ar || {};

  const hero = node?.hero || {};
  const gallery = node?.gallery || {};

  const bg = hero?.backgroundUrl || hero?.background || "";
  const poster = hero?.posterUrl || hero?.poster || hero?.image || null;

  // backgroundUrl exists:
  if (bg) {
    if (isVideoUrl(bg)) {
      return {
        type: "video",
        url: bg,
        poster: poster || gallery?.slides?.[0] || null,
      };
    }

    // image background
    return { type: "image", url: bg };
  }

  // fallback: gallery[0] -> hero.image
  return {
    type: "image",
    url: gallery?.slides?.[0] || hero?.image || null,
  };
};
