"use client";

import React, { useEffect, useState } from "react";
import ContactFormSimplified from "@/components/ContactFormSimplified";
import { useLanguage } from "@/components/LanguageProvider";
import { buildKodmaniWhatsAppHref, queueKodmaniApprovalLead } from "@/lib/whatsapp";

export default function ContactPage() {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";
  const [contact, setContact] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/site-settings", { cache: "no-store" });
        const json = await res.json();
        if (active && json?.ok) {
          setContact(json?.data?.contact || null);
        }
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, []);

  const whatsappHref = buildKodmaniWhatsAppHref(contact?.whatsapp, {
    locale,
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
    pagePath: typeof window !== "undefined" ? window.location.pathname : "/contact-us",
    sourceLabel: isRTL ? "صفحة التواصل" : "Contact Page",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "120px 20px 80px",
        backgroundColor: "#fff",
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gap: "24px",
        }}
      >
        {(contact?.phone || contact?.email || whatsappHref) && (
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {contact?.phone ? (
              <span style={pillStyle}>{contact.phone}</span>
            ) : null}
            {contact?.email ? (
              <a href={`mailto:${contact.email}`} style={pillStyle}>
                {contact.email}
              </a>
            ) : null}
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                style={pillStyle}
                onClick={() =>
                  queueKodmaniApprovalLead({
                    locale,
                    pageUrl: typeof window !== "undefined" ? window.location.href : "",
                    pagePath:
                      typeof window !== "undefined"
                        ? window.location.pathname
                        : "/contact-us",
                    sourceLabel: isRTL ? "صفحة التواصل" : "Contact Page",
                  })
                }
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        )}

        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <ContactFormSimplified />
        </div>
      </div>
    </div>
  );
}

const pillStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  padding: "12px 20px",
  borderRadius: "999px",
  border: "1px solid rgba(201, 162, 106, 0.35)",
  background: "rgba(201, 162, 106, 0.08)",
  color: "#111",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};
