"use client";

import { useState } from "react";
import { injectAmenityIcons } from "@/lib/amenities/phosphorIconResolver";
import { useLanguage } from "@/components/LanguageProvider";
import SalesOfferPreferencesModal from "@/components/projects/SalesOfferPreferencesModal";
import styles from "@/styles/projects/ProjectIntro.module.css";

function pickLocaleBlock(projectData, locale) {
  if (projectData?.en || projectData?.ar) {
    return projectData?.[locale] || projectData?.en;
  }
  return projectData;
}

function isProbablyVideo(url) {
  const u = String(url || "").toLowerCase();
  return u.endsWith(".mp4") || u.endsWith(".mov") || u.includes(".mp4?");
}

function extractNumberFromText(text) {
  const raw = String(text || "")
    .replace(/[^\d.,]/g, "")
    .replace(/,/g, "");

  const parts = raw.split(".");
  const normalized =
    parts.length > 2 ? `${parts[0]}.${parts.slice(1).join("")}` : raw;

  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}

function formatCurrency(amount, currency, locale) {
  try {
    const loc = locale === "ar" ? "ar-AE" : "en-US";
    return new Intl.NumberFormat(loc, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${amount} ${currency}`;
  }
}

function convertAreaString(value, targetUnit, locale) {
  const num = extractNumberFromText(value);
  if (!num) return value;

  const s = String(value || "").toLowerCase();

  const isM =
    s.includes("m²") ||
    s.includes("m2") ||
    s.includes("متر") ||
    s.includes("م²");

  const currentUnit = isM ? "m2" : "ft2";

  let out = num;

  if (currentUnit === "ft2" && targetUnit === "m2") out = num * 0.092903;
  if (currentUnit === "m2" && targetUnit === "ft2") out = num / 0.092903;

  const rounded =
    targetUnit === "m2" ? Math.round(out * 10) / 10 : Math.round(out);

  if (locale === "ar") {
    return targetUnit === "m2" ? `${rounded} متر²` : `${rounded} قدم²`;
  }

  return targetUnit === "m2" ? `${rounded} m²` : `${rounded} sq.ft`;
}

function maybeConvertMoneyString(value, currency, fxRate, locale) {
  if (!value) return value;
  if (!currency || currency === "AED") return value;
  if (!fxRate || !Number.isFinite(fxRate)) return value;

  const amountAed = extractNumberFromText(value);
  if (!amountAed) return value;

  const converted = amountAed * fxRate;
  return formatCurrency(converted, currency, locale);
}

function buildSalesOfferPayload(projectData, prefs, currentLocale) {
  const pdfLocale = prefs?.pdfLang || currentLocale;
  const d = pickLocaleBlock(projectData, pdfLocale) || {};

  const projectName = d?.project?.name || "Project";
  const projectSlug =
    d?.seo?.canonical ||
    d?.project?.slug ||
    d?.projectSlug ||
    d?.project?.name?.toLowerCase?.()?.replace(/\s+/g, "-") ||
    "sales-offer";

  const heroBg = d?.hero?.backgroundUrl || "";
  const coverImage = !isProbablyVideo(heroBg)
    ? heroBg
    : d?.intro?.imgUrl || d?.gallery?.slides?.[0] || "";

  const developerSlugGuess =
    projectData?.project?.developerSlug ||
    projectData?.project?.developer?.slug ||
    projectData?.project?.developer ||
    d?.project?.developer ||
    "";

  const amenitiesRaw = Array.isArray(d?.amenities?.amenities)
    ? d.amenities.amenities
    : [];

  const amenities = injectAmenityIcons({
    amenities: amenitiesRaw,
    developerSlug: developerSlugGuess,
  }).map((a) => ({
    label: a?.label || "",
    iconUrl: a?.iconUrl || "",
  }));

  const generalFacts =
    prefs?.description ||
    (Array.isArray(d?.intro?.paragraphs)
      ? d.intro.paragraphs.join("\n\n")
      : "") ||
    d?.seo?.description ||
    "";

  const chosenCurrency = prefs?.currency || "AED";
  const fxRate = prefs?.fx?.rate;

  const facts = [
    prefs?.displaySettings?.developer === false
      ? null
      : d?.project?.developer
        ? {
            label: pdfLocale === "ar" ? "المطور" : "Developer",
            value: d.project.developer,
          }
        : null,

    d?.project?.location
      ? {
          label: pdfLocale === "ar" ? "الموقع" : "Location",
          value: d.project.location,
        }
      : null,

    prefs?.displaySettings?.unitPrices === false
      ? null
      : d?.project?.startingPrice
        ? {
            label: pdfLocale === "ar" ? "السعر الابتدائي" : "Starting price",
            value: maybeConvertMoneyString(
              d.project.startingPrice,
              chosenCurrency,
              fxRate,
              pdfLocale
            ),
          }
        : null,

    d?.project?.completionDate
      ? {
          label: pdfLocale === "ar" ? "التسليم" : "Handover",
          value: d.project.completionDate,
        }
      : null,

    d?.project?.paymentPlan
      ? {
          label: pdfLocale === "ar" ? "خطة الدفع" : "Payment plan",
          value: d.project.paymentPlan,
        }
      : null,

    d?.project?.units
      ? {
          label: pdfLocale === "ar" ? "الوحدات" : "Units",
          value: d.project.units,
        }
      : null,
  ].filter(Boolean);

  const targetUnit = prefs?.measureUnit || "ft2";

  const floorPlans = Array.isArray(d?.floorPlans?.plans)
    ? d.floorPlans.plans
    : [];

  const convertedFloorPlans = floorPlans.map((p) => {
    const specs = { ...(p?.specs || {}) };

    if (specs["Total Area"]) {
      specs["Total Area"] = convertAreaString(
        specs["Total Area"],
        targetUnit,
        pdfLocale
      );
    }

    if (specs["إجمالي المساحة"]) {
      specs["إجمالي المساحة"] = convertAreaString(
        specs["إجمالي المساحة"],
        targetUnit,
        pdfLocale
      );
    }

    if (specs["Starting Price"]) {
      specs["Starting Price"] = maybeConvertMoneyString(
        specs["Starting Price"],
        chosenCurrency,
        fxRate,
        pdfLocale
      );
    }

    if (specs["السعر الابتدائي"]) {
      specs["السعر الابتدائي"] = maybeConvertMoneyString(
        specs["السعر الابتدائي"],
        chosenCurrency,
        fxRate,
        pdfLocale
      );
    }

    return { ...p, specs };
  });

  return {
    locale: pdfLocale,
    projectSlug: String(projectSlug)
      .replaceAll("/", "")
      .replaceAll("properties", ""),
    projectName,
    coverImage,
    createdAtLabel: pdfLocale === "ar" ? "تاريخ الإنشاء" : "Date of creation",
    createdAtValue: new Date().toLocaleDateString(
      pdfLocale === "ar" ? "ar" : "en"
    ),
    preferences: {
      pdfLang: pdfLocale,
      currency: chosenCurrency,
      measureUnit: targetUnit,
      displaySettings: prefs?.displaySettings || {},
      fx: prefs?.fx || null,
    },
    agent: {
      name: "Mohamad Kodmani",
      company: "Mohamad Kodmani Real Estate Brokers LLC",
      phone: "+971568888906",
      email: "mohamadkodmani@gmail.com",
      avatar: "https://luxury-real-estate-media.b-cdn.net/agents/mohamad.jpg",
    },
    sections: {
      generalFacts,
      finishing: d?.project?.finishing || d?.finishing || "",
      kitchen: d?.project?.kitchen || d?.kitchen || "",
      furnishing: d?.project?.furnishing || d?.furnishing || "",
      location: d?.location?.address || d?.project?.location || "",
    },
    facts,
    gallery: Array.isArray(d?.gallery?.slides) ? d.gallery.slides : [],
    floorPlans: convertedFloorPlans,
    amenities,
  };
}

export default function GenerateSalesOfferButton({ projectData }) {
  const { locale } = useLanguage();
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);

  const on = null;

  const handleGenerateFromModal = async (prefs) => {
    try {
      setOpen(false);
      setBusy(true);

      const payload = buildSalesOfferPayload(projectData, prefs, locale);

      const res = await fetch("/api/sales-offer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let message = "Failed to generate PDF";
        try {
          const err = await res.json();
          if (err?.message) message = err.message;
          if (err?.error) message = err.error;
        } catch {}
        throw new Error(message);
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (e) {
      console.error(e);
      alert(e?.message || "PDF generation failed. Check console.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={busy}
        className={styles.downloadBrochure}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          cursor: busy ? "not-allowed" : "pointer",
          opacity: busy ? 0.7 : 1
        }}
      >
        <span className={styles.brochureText}>
          {busy
            ? locale === "ar"
              ? "جاري الإنشاء..."
              : "Generating..."
            : locale === "ar"
            ? "إنشاء عرض بيع"
            : "Generate Sales Offer"}
        </span>

        <div className={styles.downloadIcon}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 4H14L19 9V20H7V4Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M14 4V9H19"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M10 13H16"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M10 17H14"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </button>

      <SalesOfferPreferencesModal
        open={open}
        onClose={() => setOpen(false)}
        projectData={projectData}
        locale={locale}
        onGenerate={handleGenerateFromModal}
        on={on}
      />
    </>
  );
}