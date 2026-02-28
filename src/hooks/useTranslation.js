import en from "@/i18n/en.json";
import ar from "@/i18n/ar.json";

export default function useTranslation(locale = "en") {
  const translations = locale === "ar" ? ar : en;

  function t(key, params = {}) {
    try {
      let result = key.split(".").reduce((obj, part) => {
        return obj ? obj[part] : undefined;
      }, translations);

      // Fallback to English if translation not found in Arabic
      if (result === undefined && locale === "ar") {
        result = key.split(".").reduce((obj, part) => {
          return obj ? obj[part] : key;
        }, en);
      }

      // Replace template variables
      if (result && typeof result === "string") {
        Object.keys(params).forEach((param) => {
          result = result.replace(`{${param}}`, params[param]);
        });
      }

      return result || key;
    } catch (error) {
      console.warn(`Translation error for key: ${key}`, error);
      return key;
    }
  }

  return { t };
}
