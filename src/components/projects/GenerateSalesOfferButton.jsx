"use client";

import { useEffect, useState } from "react";
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

function formatCreationDate() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = String(now.getFullYear());
  return `${dd}.${mm}.${yyyy}`;
}

function uniqueStrings(values) {
  return [...new Set((Array.isArray(values) ? values : []).map((value) => String(value || "").trim()).filter(Boolean))];
}

function looksLikeImage(url) {
  const value = String(url || "").toLowerCase();
  if (!value) return false;
  return !isProbablyVideo(value) && !value.endsWith(".pdf");
}

function getImageUrl(item) {
  if (!item) return "";
  if (typeof item === "string") return item;
  return item?.url || item?.src || item?.href || item?.image || "";
}

function getProjectName(d) {
  return (
    d?.project?.name ||
    d?.title ||
    d?.name ||
    ""
  );
}

function getProjectSlug(d) {
  const raw =
    d?.seo?.canonical ||
    d?.project?.slug ||
    d?.slug ||
    d?.projectSlug ||
    getProjectName(d)?.toLowerCase?.()?.replace(/\s+/g, "-") ||
    "sales-offer";

  return typeof raw === "string" ? raw : raw?.current || "sales-offer";
}

function getProjectDeveloper(d) {
  return d?.project?.developer || d?.developer || "";
}

function getProjectLocation(d) {
  return (
    d?.location?.address ||
    d?.project?.location ||
    d?.location ||
    ""
  );
}

function getHeroImage(d) {
  return (
    d?.hero?.backgroundUrl ||
    d?.hero?.squareImageUrl ||
    d?.heroImage ||
    ""
  );
}

function collectProjectImages(d) {
  const slides = Array.isArray(d?.gallery?.slides) ? d.gallery.slides : [];
  const floorPlans = Array.isArray(d?.floorPlans?.plans) ? d.floorPlans.plans : [];
  const galleryImages = Array.isArray(d?.galleryImages) ? d.galleryImages : [];

  return uniqueStrings([
    getHeroImage(d),
    d?.intro?.imgUrl,
    ...slides.map((item) => getImageUrl(item)),
    ...galleryImages.map((item) => getImageUrl(item)),
    ...floorPlans.flatMap((plan) => (Array.isArray(plan?.images) ? plan.images : [])),
  ]).filter(looksLikeImage);
}

function parsePaymentPlanStages(value) {
  const text = String(value || "").trim();
  if (!text) return [];

  const percents = text.match(/\d+(?:\.\d+)?%/g) || [];
  if (!percents.length) {
    return [{ percent: text, caption: "Payment plan" }];
  }

  return percents.map((percent, index) => ({
    percent,
    caption:
      index === 0
        ? "Booking / during construction"
        : index === percents.length - 1
        ? "On handover"
        : `Stage ${index + 1}`,
  }));
}

function buildUnitRows(floorPlans, pdfLocale, chosenCurrency, fxRate, targetUnit) {
  const groups = new Map();

  floorPlans.forEach((plan) => {
    const specs = plan?.specs || {};
    const label = plan?.title || plan?.name || "Unit";
    const key = String(label).trim().toLowerCase();
    const current = groups.get(key) || {
      unitType: label,
      bedrooms: plan?.bedrooms ?? specs.Bedrooms ?? "-",
      amountCount: 0,
      areas: [],
      prices: [],
    };

    current.amountCount += 1;

    const rawArea =
      specs["Total Area"] ||
      specs.Area ||
      specs.Size ||
      plan?.size ||
      "";
    const rawPrice =
      specs["Starting Price"] ||
      specs["Price From"] ||
      plan?.price ||
      "";

    if (rawArea) current.areas.push(rawArea);
    if (rawPrice) current.prices.push(rawPrice);
    groups.set(key, current);
  });

  return Array.from(groups.values()).map((group) => {
    const area = group.areas[0]
      ? convertAreaString(group.areas[0], targetUnit, pdfLocale)
      : "";
    const priceFrom = group.prices[0]
      ? maybeConvertMoneyString(group.prices[0], chosenCurrency, fxRate, pdfLocale)
      : "";

    return {
      unitType: group.unitType,
      bedrooms: group.bedrooms,
      amount: `${group.amountCount}/${group.amountCount}`,
      area,
      priceFrom,
    };
  });
}

async function fetchDeveloperProfile(projectData) {
  const developerName =
    projectData?.project?.developer ||
    projectData?.developer ||
    "";

  const developerSlug =
    projectData?.developerSlug ||
    developerName
      .toLowerCase()
      .replace(/\s+(realty|properties|developments?|group|real\s+estate)\s*$/i, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  try {
    if (developerSlug) {
      const bySlug = await fetch(`/api/sanity-developer?slug=${encodeURIComponent(developerSlug)}`, {
        cache: "no-store",
      });
      if (bySlug.ok) {
        const json = await bySlug.json();
        if (json) return json;
      }
    }

    const all = await fetch("/api/sanity-developer", { cache: "no-store" });
    if (!all.ok) return null;
    const list = await all.json();

    return (Array.isArray(list) ? list : []).find((item) => {
      const haystack = `${item?.name || ""} ${item?.slug || ""}`.toLowerCase();
      return developerName && haystack.includes(String(developerName).toLowerCase());
    }) || null;
  } catch {
    return null;
  }
}

function buildSalesOfferPayload(projectData, prefs, currentLocale, siteData, developerData) {
  const pdfLocale = prefs?.pdfLang || currentLocale;
  const d = pickLocaleBlock(projectData, pdfLocale) || {};

  const projectName = getProjectName(d) || "Project";
  const projectSlug = getProjectSlug(d);

  const heroBg = getHeroImage(d);
  const firstSlide = d?.gallery?.slides?.[0];
  const firstSlideUrl = typeof firstSlide === "string" ? firstSlide : firstSlide?.url || "";
  const coverImage = !isProbablyVideo(heroBg)
    ? heroBg
    : d?.intro?.imgUrl || firstSlideUrl || collectProjectImages(d)[0] || "";

  const developerSlugGuess =
    projectData?.project?.developerSlug ||
    projectData?.project?.developer?.slug ||
    projectData?.project?.developer ||
    getProjectDeveloper(d) ||
    "";

  const amenitiesRaw = Array.isArray(d?.amenities?.amenities)
    ? d.amenities.amenities
    : Array.isArray(d?.amenities)
    ? d.amenities
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
    d?.intro?.description ||
    d?.description ||
    d?.seo?.description ||
    "";

  const chosenCurrency = prefs?.currency || "AED";
  const fxRate = prefs?.fx?.rate;
  const targetUnit = prefs?.measureUnit || "ft2";

  const floorPlans = Array.isArray(d?.floorPlans?.plans)
    ? d.floorPlans.plans
    : Array.isArray(d?.floorPlans)
    ? d.floorPlans
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

  const projectImages = collectProjectImages(d);
  const developerDescription = Array.isArray(developerData?.about)
    ? developerData.about.join("\n\n")
    : developerData?.about || developerData?.description || "";
  const developerImages = uniqueStrings([
    developerData?.heroImageUrl,
    developerData?.coverImage,
    developerData?.coverImageUrl,
  ]).filter(looksLikeImage);
  const masterplanUrl =
    d?.masterplan?.url ||
    d?.masterplanUrl ||
    (Array.isArray(d?.intro?.brochures)
      ? d.intro.brochures.find((item) =>
          String(item?.type || "").toLowerCase().includes("master")
        )?.url
      : "");
  const paymentPlanValue = d?.project?.paymentPlan || "";
  const descriptionParts = generalFacts
    ? String(generalFacts)
        .split(/\n\s*\n/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  return {
    locale: pdfLocale,
    projectSlug: String(projectSlug)
      .replaceAll("/", "")
      .replaceAll("properties", ""),
    projectName,
    coverImage,
    overviewImage:
      d?.intro?.imgUrl || d?.hero?.squareImageUrl || projectImages[0] || coverImage,
    createdAtLabel: pdfLocale === "ar" ? "تاريخ الإنشاء" : "Date of creation",
    createdAtValue: formatCreationDate(),
    agent: {
      name: "Mohamad Kodmani",
      company: "Mohamad Kodmani Real Estate Brokers LLC",
      phone: siteData?.contact?.whatsapp || siteData?.contact?.phone || "",
      email: siteData?.contact?.email || "",
      avatar:
        siteData?.artOfDetail?.ownerImageUrl ||
        "https://luxury-real-estate-media.b-cdn.net/agents/mohamad.jpg",
    },
    developer: {
      name: developerData?.name || getProjectDeveloper(d) || "",
      logo: developerData?.logoUrl || "",
      description: developerDescription,
      images: developerImages,
    },
    description: generalFacts,
    finishing: d?.project?.finishing || d?.finishing || "",
    kitchen: d?.project?.kitchen || d?.kitchen || "",
    furnishing: d?.project?.furnishing || d?.furnishing || "",
    gallery: projectImages,
    location: {
      address: getProjectLocation(d),
      district: getProjectLocation(d),
      lat: d?.location?.lat || d?.lat || null,
      lng: d?.location?.lng || d?.lng || null,
    },
    locationDescription:
      d?.location?.description ||
      d?.location?.benefits ||
      d?.description ||
      descriptionParts.slice(1).join("\n\n") ||
      generalFacts,
    masterplanImage: masterplanUrl,
    paymentPlanText: paymentPlanValue || d?.paymentPlan || "",
    paymentPlans: paymentPlanValue
      ? [
          {
            title: paymentPlanValue,
            summary: `Structured directly from Sanity payment-plan data for ${projectName}.`,
            stages: parsePaymentPlanStages(paymentPlanValue),
          },
        ]
      : d?.paymentPlan
      ? [
          {
            title: d.paymentPlan,
            summary: `Structured directly from Sanity payment-plan data for ${projectName}.`,
            stages: parsePaymentPlanStages(d.paymentPlan),
          },
        ]
      : [],
    unitRows: buildUnitRows(
      convertedFloorPlans,
      pdfLocale,
      chosenCurrency,
      fxRate,
      targetUnit
    ),
    floorPlans: convertedFloorPlans,
    amenities,
  };
}

export default function GenerateSalesOfferButton({ projectData }) {
  const { locale } = useLanguage();
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const [siteData, setSiteData] = useState(null);

  const on = null;

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/site-settings", { cache: "no-store" });
        const json = await res.json();
        if (active && json?.ok) {
          setSiteData(json?.data || null);
        }
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, []);

  const handleGenerateFromModal = async (prefs) => {
    try {
      setOpen(false);
      setBusy(true);

      const developerData = await fetchDeveloperProfile(projectData);
      const payload = buildSalesOfferPayload(
        projectData,
        prefs,
        locale,
        siteData,
        developerData
      );

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
          opacity: busy ? 0.7 : 1,
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
