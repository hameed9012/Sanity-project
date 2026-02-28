"use client";

import React from "react";
import styles from "@/styles/FloatingWhatsApp.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import * as ga from "@/lib/ga";

export default function WhatsappFloatingButton() {
  const { locale, t } = useLanguage?.() || { locale: "en" };
  const isRTL = locale === "ar";

  const label = t?.("cta.whatsapp") || (isRTL ? "واتساب" : "WHATSAPP");

  // Default WhatsApp base (we will build the final link on click)
  const whatsappBase = "https://wa.me/971568888906";

  const handleClick = () => {
    // ✅ Always accurate URL at click time
    const fullUrl = typeof window !== "undefined" ? window.location.href : "";

    const path = typeof window !== "undefined" ? window.location.pathname : "";

    // ✅ If it's only "/" render "Home"
    const pageName = path === "/" ? "Home" : path;

    // ✅ Build message (include Home + full URL)
    const message = `Hi Mohamad, I'm interested in your properties.\n\nPage: ${pageName}\nLink: ${fullUrl}`;

    const whatsappHref = `${whatsappBase}?text=${encodeURIComponent(message)}`;

    // ✅ GA4 event (for Google Ads import later)
    try {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", {
          page_location: fullUrl,
          page_path: path,
          locale: locale || "en",
          placement: "floating_button",
        });
      }
    } catch (e) {}

    // ✅ Keep your existing tracker too (optional)
    try {
      ga.event?.({
        action: "click_whatsapp",
        category: "engagement",
        label: "floating_whatsapp_button",
      });
    } catch (e) {}

    // ✅ Open WhatsApp with the correct message
    if (typeof window !== "undefined") {
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={`${styles.whatsappWrapper} ${isRTL ? styles.rtl : ""}`}>
      <button
        type="button"
        className={styles.whatsappButton}
        aria-label={label}
        onClick={handleClick}
      >
        <span className={styles.label}>{label}</span>

        <span className={styles.icon} aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22.466 22.574"
          >
            <path
              d="M19.251,3.281a11.189,11.189,0,0,0-17.606,13.5l-1.588,5.8,
                 5.929-1.556a11.174,11.174,0,0,0,5.345,1.362h0a11.192,
                 11.192,0,0,0,7.914-19.1Zm-7.913,17.21h0a9.273,
                 9.273,0,0,1-4.732-1.3l-.34-.2-3.519.923.94-3.431-.221-.352a9.3,
                 9.3,0,1,1,7.876,4.358Zm5.1-6.963c-.279-.14-1.654-.816-1.91-.91s-.442-.14-.629.139-.721.91-.885,1.1-.326.21-.606.07a7.629,
                 7.629,0,0,1-2.248-1.387A8.414,8.414,0,0,1,8.6,
                 10.6c-.163-.28-.017-.431.122-.57s.279-.326.42-.49a1.857,
                 1.857,0,0,0,.281-.466.514.514,0,0,0-.024-.49c-.071-.139-.629-1.515-.862-2.075s-.457-.471-.629-.48-.349-.009-.536-.009a1.024,
                 1.024,0,0,0-.745.35A3.138,3.138,0,0,0,5.653,
                 8.7a5.439,5.439,0,0,0,1.141,2.891,12.454,12.454,0,0,0,
                 4.774,4.22,16.172,16.172,0,0,0,1.593.589,3.842,
                 3.842,0,0,0,1.761.111,2.879,2.879,0,0,0,1.887-1.329,
                 2.325,2.325,0,0,0,.161-1.329c-.068-.115-.254-.184-.534-.325Z"
              fill="#ffffff"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
