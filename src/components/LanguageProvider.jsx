"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Import your JSON files from the correct path
import enTranslations from "@/i18n/en.json";
import arTranslations from "@/i18n/ar.json";

const LanguageContext = createContext();

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const [displayLocale, setDisplayLocale] = useState("en");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const translations = {
    en: enTranslations,
    ar: arTranslations,
  };

  // ADD THIS: Translation function
  const t = (key, params = {}) => {
    const keys = key.split(".");
    let translation =
      keys.reduce((obj, k) => obj?.[k], translations[locale]) || key;

    // Replace template variables
    if (typeof translation === "string") {
      Object.keys(params).forEach((param) => {
        translation = translation.replace(`{${param}}`, params[param]);
      });
    }

    return translation;
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem("lang");
    if (savedLocale && (savedLocale === "en" || savedLocale === "ar")) {
      setLocale(savedLocale);
      setDisplayLocale(savedLocale);
      applyLanguageSettings(savedLocale);
    } else {
      setLocale("en");
      setDisplayLocale("en");
      localStorage.setItem("lang", "en");
      applyLanguageSettings("en");
    }
  }, []);

  const applyLanguageSettings = (lang) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const switchLanguage = async (newLocale) => {
    if (newLocale === locale || isTransitioning) return;

    try {
      setIsTransitioning(true);
      document.body.classList.add("language-transitioning");
      setLocale(newLocale);
      setDisplayLocale(newLocale);
      localStorage.setItem("lang", newLocale);
      applyLanguageSettings(newLocale);

      await new Promise((resolve) => setTimeout(resolve, 200));
      document.body.classList.remove("language-transitioning");
    } catch (error) {
      console.error("Language transition error:", error);
    } finally {
      setIsTransitioning(false);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        locale: displayLocale,
        switchLanguage,
        isTransitioning,
        t, // ADD THIS: Include the t function in the context
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
