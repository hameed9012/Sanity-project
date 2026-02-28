// lib/text-utils.js

/**
 * Utility function to get localized text
 * Handles both bilingual objects and simple strings
 */
export function getLocalizedText(text, locale = "en") {
  if (!text) return "";

  // Handle bilingual object {en: 'text', ar: 'نص'}
  if (typeof text === "object" && text !== null) {
    // Check if it has the current locale
    if (text[locale]) {
      return text[locale];
    }
    // Check if it has English as fallback
    if (text.en) {
      return text.en;
    }
    // If it's an object but no language keys, return the first value
    const firstKey = Object.keys(text)[0];
    return text[firstKey] || "";
  }

  // Handle string (simple structure)
  return text;
}

/**
 * Utility function to check if text needs localization
 */
export function isBilingualText(text) {
  return typeof text === "object" && text !== null && (text.en || text.ar);
}
