export function selectAboutValue(locale, enValue, arValue) {
  return locale === "ar" ? arValue || "" : enValue || "";
}

export function selectAboutList(locale, enValue, arValue) {
  const value = locale === "ar" ? arValue : enValue;
  return Array.isArray(value) ? value.filter(Boolean) : [];
}
