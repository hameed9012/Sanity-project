export const DEFAULT_LOCALE = "en";

export function getLocaleFromParams(params, fallback = DEFAULT_LOCALE) {
  // works with app router params: { locale: "en" | "ar" }
  return params?.locale === "ar" ? "ar" : fallback;
}

/**
 * Reads values like:
 *  - string: "hello"
 *  - number: 123
 *  - { en: "...", ar: "..." }
 *  - { en: [...], ar: [...] }
 */
export function t(value, locale = DEFAULT_LOCALE) {
  if (value == null) return "";

  // string/number
  if (typeof value === "string" || typeof value === "number")
    return String(value);

  // array (already localized)
  if (Array.isArray(value)) return value;

  // localized object {en, ar}
  if (typeof value === "object") {
    if ("en" in value || "ar" in value) {
      return value[locale] ?? value.en ?? value.ar ?? "";
    }
  }

  // anything else
  return "";
}

export function tArray(value, locale = DEFAULT_LOCALE) {
  const v = t(value, locale);
  return Array.isArray(v) ? v : v ? [v] : [];
}

export function dir(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
