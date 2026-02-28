"use client";

import { useMemo, useState } from "react";
import { injectAmenityIcons } from "@/lib/amenities/phosphorIconResolver";
import { useLanguage } from "@/components/LanguageProvider";
import SalesOfferPreferencesModal from "@/components/projects/SalesOfferPreferencesModal";

function pickLocaleBlock(projectData, locale) {
  if (projectData?.en || projectData?.ar)
    return projectData?.[locale] || projectData?.en;
  return projectData;
}

function isProbablyVideo(url) {
  const u = String(url || "").toLowerCase();
  return u.endsWith(".mp4") || u.endsWith(".mov") || u.includes(".mp4?");
}

function extractNumberFromText(text) {
  // Extract "1,183,000" => 1183000
  const raw = String(text || "")
    .replace(/[^\d.,]/g, "")
    .replace(/,/g, "");

  // If multiple dots, keep first (rare)
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
    // fallback
    return `${amount} ${currency}`;
  }
}

function convertAreaString(value, targetUnit, locale) {
  // Handles: "466 sq.ft", "466 قدم²", "43 m²", "43 متر²" etc.
  const num = extractNumberFromText(value);
  if (!num) return value;

  const s = String(value || "").toLowerCase();

  const isFt =
    s.includes("sq.ft") ||
    s.includes("sqft") ||
    s.includes("ft") ||
    s.includes("قدم");
  const isM =
    s.includes("m²") ||
    s.includes("m2") ||
    s.includes("متر") ||
    s.includes("م²");

  // if unknown, assume ft² because your data uses ft² heavily
  const currentUnit = isM ? "m2" : "ft2";

  let out = num;

  // 1 sqft = 0.092903 m2
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
  // We assume your base prices are AED in your dataset.
  // If currency is AED -> keep original.
  if (!value) return value;
  if (!currency || currency === "AED") return value;
  if (!fxRate || !Number.isFinite(fxRate)) return value;

  const amountAed = extractNumberFromText(value);
  if (!amountAed) return value;

  const converted = amountAed * fxRate;
  return formatCurrency(converted, currency, locale);
}

function buildSalesOfferPayload(projectData, prefs, currentLocale) {
  // prefs.pdfLang is the PDF language chosen in modal
  const pdfLocale = prefs?.pdfLang || currentLocale;
  const d = pickLocaleBlock(projectData, pdfLocale) || {};

  const projectName = d?.project?.name || "Project";
  const projectSlug =
    d?.seo?.canonical ||
    d?.project?.slug ||
    d?.projectSlug ||
    d?.project?.name?.toLowerCase?.()?.replace(/\s+/g, "-") ||
    "sales-offer";

  // ✅ Cover image: avoid mp4
  const heroBg = d?.hero?.backgroundUrl || "";
  const coverImage = !isProbablyVideo(heroBg)
    ? heroBg
    : d?.intro?.imgUrl || d?.gallery?.slides?.[0] || "";

  // ✅ Amenities with injected iconUrl
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

  // ✅ Description comes from modal (editable + AI)
  const generalFacts =
    prefs?.description ||
    (Array.isArray(d?.intro?.paragraphs)
      ? d.intro.paragraphs.join("\n\n")
      : "") ||
    d?.seo?.description ||
    "";

  // ✅ Currency conversion data from modal
  const chosenCurrency = prefs?.currency || "AED";
  const fxRate = prefs?.fx?.rate; // 1 AED = fxRate CURRENCY

  // ✅ Facts conversion (starting price)
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
              pdfLocale,
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

  // ✅ Floorplans: convert Total Area + Starting Price in specs if possible
  const targetUnit = prefs?.measureUnit || "ft2";

  const floorPlans = Array.isArray(d?.floorPlans?.plans)
    ? d.floorPlans.plans
    : [];
  const convertedFloorPlans = floorPlans.map((p) => {
    const specs = { ...(p?.specs || {}) };

    // EN key
    if (specs["Total Area"]) {
      specs["Total Area"] = convertAreaString(
        specs["Total Area"],
        targetUnit,
        pdfLocale,
      );
    }
    // AR key
    if (specs["إجمالي المساحة"]) {
      specs["إجمالي المساحة"] = convertAreaString(
        specs["إجمالي المساحة"],
        targetUnit,
        pdfLocale,
      );
    }

    // Prices keys
    if (specs["Starting Price"]) {
      specs["Starting Price"] = maybeConvertMoneyString(
        specs["Starting Price"],
        chosenCurrency,
        fxRate,
        pdfLocale,
      );
    }
    if (specs["السعر الابتدائي"]) {
      specs["السعر الابتدائي"] = maybeConvertMoneyString(
        specs["السعر الابتدائي"],
        chosenCurrency,
        fxRate,
        pdfLocale,
      );
    }

    return { ...p, specs };
  });

  return {
    // ✅ Everything the PDF route needs
    locale: pdfLocale,

    projectSlug: String(projectSlug)
      .replaceAll("/", "")
      .replaceAll("properties", ""),
    projectName,

    coverImage,

    createdAtLabel: pdfLocale === "ar" ? "تاريخ الإنشاء" : "Date of creation",
    createdAtValue: new Date().toLocaleDateString(
      pdfLocale === "ar" ? "ar" : "en",
    ),

    // ✅ Keep prefs for PDF rendering (important)
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

  // You can pass a custom AI function later, or keep it null for now.
  const onImproveWithAI = null;

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

      if (!res.ok) throw new Error("Failed to generate PDF");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (e) {
      console.error(e);
      alert("PDF generation failed. Check console.");
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
        style={{
          padding: "12px 16px",
          borderRadius: 10,
          border: "1px solid #E7E7E7",
          background: busy ? "#111" : "#2E2E2E",
          color: "#fff",
          cursor: busy ? "not-allowed" : "pointer",
          fontWeight: 600,
          width: "100%",
          maxWidth: 420,
        }}
      >
        {busy
          ? locale === "ar"
            ? "جاري الإنشاء..."
            : "Generating..."
          : locale === "ar"
            ? "إنشاء عرض بيع"
            : "Generate Sales Offer"}
      </button>

      <SalesOfferPreferencesModal
        open={open}
        onClose={() => setOpen(false)}
        projectData={projectData}
        locale={locale}
        onGenerate={handleGenerateFromModal}
        onImproveWithAI={onImproveWithAI}
      />
    </>
  );
}
