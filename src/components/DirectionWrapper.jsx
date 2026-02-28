"use client";

import { useLanguage } from "./LanguageProvider";
import { useEffect } from "react";

export default function DirectionWrapper({ children }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  useEffect(() => {
    document.body.setAttribute("dir", isRTL ? "rtl" : "ltr");
  }, [isRTL]);

  return children;
}
