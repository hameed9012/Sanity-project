"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  const footerText = isRTL
    ? "© 2025  محمد قضماني للوساطة العقارية. جميع الحقوق محفوظة."
    : "© 2025 Mohamad Kodmane Real Estate Brokerage. All Rights Reserved.";

  return (
    <footer
      style={{
        backgroundColor: "#1b1b1b",
        color: "#bfbfbf",
        textAlign: "center",
        padding: "20px 0",
        borderTop: "1px solid rgba(212,175,55,0.3)",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      {footerText}
    </footer>
  );
}
