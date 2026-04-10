"use client";

import { use, useEffect, useState } from "react";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import VisualSymphony from "@/components/projects/VisualSymphony";
import FloorPlanShowcase from "@/components/projects/FloorPlanShowcase";
import AmenitiesShowcase from "@/components/projects/AmenitiesShowcase";
import ContactFormFinal from "@/components/projects/ContactFormFinal";
import MapDirections from "@/components/projects/MapDirections";
import RelatedProjects from "@/components/projects/RelatedProjects";
import MasterplanViewer from "@/components/projects/MasterplanViewer";
import { useLanguage } from "@/components/LanguageProvider";
import { getPrimaryBrochureUrl } from "@/lib/projectBrochure";

function normalizeAmenities(raw) {
  if (!raw) return { amenities: [] };

  const list =
    (Array.isArray(raw.amenities)    ? raw.amenities    : null) ||
    (Array.isArray(raw.amenitiesList) ? raw.amenitiesList : null) ||
    (Array.isArray(raw.items)         ? raw.items         : null) ||
    [];

  return {
    ...raw,
    amenities: list,
    title: raw.title || "",
  };
}

function toNumber(value) {
  const parsed = typeof value === "string" ? Number(value.trim()) : Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizePropertyType(raw) {
  const value = String(raw || "").toLowerCase().trim();
  if (value.includes("villa")) return "villas";
  if (value.includes("penthouse")) return "penthouses";
  if (value.includes("commercial") || value.includes("retail") || value.includes("office")) {
    return "commercial-retail";
  }
  return "apartments";
}

function normalizeDeveloperName(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return text;
}

function normalizeLocation(value) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text;
}

function normalizeListingStatus(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return text;
}

function normalizeUnitTypes(value) {
  return String(value || "")
    .replace(/\b1BR\b/gi, "1 Bedroom")
    .replace(/\b1\.5BR\b/gi, "1.5 Bedroom")
    .replace(/\b2BR\b/gi, "2 Bedroom")
    .replace(/\b3BR\b/gi, "3 Bedroom")
    .replace(/\b4BR\b/gi, "4 Bedroom")
    .replace(/\b5BR\b/gi, "5 Bedroom")
    .replace(/\b6BR\b/gi, "6 Bedroom")
    .replace(/\b7BR\b/gi, "7 Bedroom")
    .replace(/\b8BR\b/gi, "8 Bedroom")
    .replace(/\s+/g, " ")
    .trim();
}

function isLikelyGarbledText(value) {
  const text = String(value || "");
  if (!text) return false;
  return /Ã|â|Ø|Ù|ï¿½|�/.test(text);
}

function cleanLocalizedText(primary, fallback = "") {
  const value = String(primary || "").trim();
  if (!value || isLikelyGarbledText(value)) {
    return String(fallback || "").trim();
  }
  return value;
}

function normalizeBrokerData(rawBroker, locale) {
  if (!rawBroker || typeof rawBroker !== "object") return null;

  const name =
    locale === "ar"
      ? cleanLocalizedText(rawBroker?.nameAr, rawBroker?.name)
      : cleanLocalizedText(rawBroker?.name, rawBroker?.nameAr);
  const role =
    locale === "ar"
      ? cleanLocalizedText(rawBroker?.roleAr, rawBroker?.role)
      : cleanLocalizedText(rawBroker?.role, rawBroker?.roleAr);
  const languagesSource =
    locale === "ar"
      ? (Array.isArray(rawBroker?.languagesAr) && rawBroker.languagesAr.length
          ? rawBroker.languagesAr
          : rawBroker?.languages)
      : (Array.isArray(rawBroker?.languages) && rawBroker.languages.length
          ? rawBroker.languages
          : rawBroker?.languagesAr);

  const languages = Array.isArray(languagesSource)
    ? languagesSource.map((entry) => cleanLocalizedText(entry)).filter(Boolean)
    : [];

  const photo =
    rawBroker?.photo ||
    rawBroker?.photoCdn?.url ||
    rawBroker?.photoUpload?.asset?.url ||
    "";

  if (!name && !rawBroker?.phone && !rawBroker?.whatsapp && !photo) return null;

  return {
    name,
    nameAr: cleanLocalizedText(rawBroker?.nameAr, rawBroker?.name),
    role,
    roleAr: cleanLocalizedText(rawBroker?.roleAr, rawBroker?.role),
    phone: String(rawBroker?.phone || "").trim(),
    whatsapp: String(rawBroker?.whatsapp || "").trim(),
    languages,
    languagesAr: Array.isArray(rawBroker?.languagesAr)
      ? rawBroker.languagesAr.map((entry) => cleanLocalizedText(entry)).filter(Boolean)
      : [],
    photo,
  };
}


function developerToSlug(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/\s+(realty|properties|developments?|group|real\s+estate)\s*$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "";
}

function slugifyValue(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parsePriceToAED(value) {
  if (value === null || value === undefined) return null;

  const raw = String(value).trim().toLowerCase();
  if (!raw) return null;

  const numericPart = raw.replace(/[^\d.]/g, "");
  let parsed = Number(numericPart);

  if (!Number.isFinite(parsed) || parsed <= 0) return null;

  const compact = raw.replace(/\s+/g, "");
  if (/million/.test(raw) || /\d(?:\.\d+)?m\b/.test(compact)) {
    parsed *= 1_000_000;
  } else if (/thousand/.test(raw) || /\d(?:\.\d+)?k\b/.test(compact)) {
    parsed *= 1_000;
  }

  parsed = Math.round(parsed);
  return parsed > 0 ? parsed : null;
}


function normalizeStaticData(rawLocale, projectSlug, category, developerSlug) {
  if (!rawLocale) return null;

  const isAlreadyNormalized =
    rawLocale.hero &&
    rawLocale.intro &&
    rawLocale.gallery;

  if (!isAlreadyNormalized) return rawLocale;

  return {
    slug: projectSlug,
    category: category || "apartments",
    developerSlug: developerSlug || "",
    regionSlug: rawLocale.location?.regionSlug || "",
    startingPriceAED: parsePriceToAED(rawLocale.project?.startingPrice),

    // Pass through the remaining localized sections.
    ...rawLocale,

    // Normalize amenities into a predictable shape.
    amenities: normalizeAmenities(rawLocale.amenities),
  };
}


function extractMasterplan(brochures) {
  if (!Array.isArray(brochures)) return null;
  const mp = brochures.find(
    (b) => b && String(b.type || "").toLowerCase() === "masterplan"
  );
  if (mp && (mp.url || mp.href)) {
    return { url: mp.url || mp.href, title: mp.title || "Masterplan" };
  }
  return null;
}

function buildSanityProjectData(sanityDoc, locale) {
  if (sanityDoc?.en?.project || sanityDoc?.ar?.project) {
  const lang = locale === "ar" ? "ar" : "en";
  const content = sanityDoc?.[lang] || sanityDoc?.en || {};
  const project = content?.project || {};
  const hero = content?.hero || {};
  const gallery = content?.gallery || {};
  const amenities = content?.amenities || {};
  const floorPlans = content?.floorPlans || {};
  const location = content?.location || {};
  const intro = content?.intro || {};
  const brochureUrl = getPrimaryBrochureUrl(content, sanityDoc);
  const broker = normalizeBrokerData(
    sanityDoc?.assignedBroker || sanityDoc?._raw?.assignedBroker,
    locale
  );

  return {
    // Identity fields used by RelatedProjects scoring.
    slug: sanityDoc?.slug || "",
    category: sanityDoc?.type || "apartments",
    developerSlug: (project?.developer || "")
      .toLowerCase()
      .replace(/\s+(realty|properties|developments?|group|real\s+estate)\s*$/i, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "",
    regionSlug: sanityDoc?.regionSlug || "",
    startingPriceAED: parsePriceToAED(project?.startingPrice),
    brochureUrl,
    completionDate: project?.completionDate || "",
    handoverDate: project?.completionDate || "",
    paymentPlan: project?.paymentPlan || "",
    crestImage: sanityDoc?.crestImage || sanityDoc?.crestImageCdn?.url || "",
    broker,
    status: normalizeListingStatus(project?.status || sanityDoc?.status || ""),
    unitTypes: normalizeUnitTypes(project?.type || ""),

    // Standard fields for the project page.
    title: project?.name || sanityDoc?.name || "",
    developer: normalizeDeveloperName(project?.developer || sanityDoc?.developer || ""),
    project,
    location: normalizeLocation(project?.location || sanityDoc?.location || ""),

    hero: {
      backgroundUrl: hero?.backgroundUrl || "",
      squareImageUrl: hero?.squareImageUrl || "",
      title: project?.name || "",
      developer: normalizeDeveloperName(project?.developer || ""),
      location: normalizeLocation(project?.location || ""),
      startingPrice: project?.startingPrice || "",
      completionDate: project?.completionDate || "",
      status: normalizeListingStatus(project?.status || sanityDoc?.status || ""),
      type: normalizeUnitTypes(project?.type || ""),
    },

    intro: {
      title: intro?.title || project?.name || "",
      description: intro?.description || content?.description || "",
      paragraphs: Array.isArray(intro?.paragraphs) ? intro.paragraphs : [],
      brochures: brochureUrl
        ? [{ title: "Download Brochure", url: brochureUrl, type: "main" }]
        : [],
      imgUrl: intro?.imgUrl || "",
      imgAlt: intro?.imgAlt || "",
      stats: project?.stats || [],
    },

    masterplan: extractMasterplan(intro?.brochures),

    gallery: {
      images: Array.isArray(gallery?.slides)
        ? gallery.slides.map((g) =>
            typeof g === "string"
              ? { url: g, alt: project?.name || "" }
              : { url: g?.url || "", alt: g?.alt || project?.name || "" }
          )
        : [],
      slides: Array.isArray(gallery?.slides)
        ? gallery.slides.map((s) => (typeof s === "string" ? s : s?.url || "")).filter(Boolean)
        : [],
    },

    floorPlans: {
      plans: Array.isArray(floorPlans?.plans) ? floorPlans.plans : [],
    },

    // Amenities are always normalized.
    amenities: normalizeAmenities(
      Array.isArray(amenities?.items)
        ? { ...amenities, amenities: amenities.items }
        : Array.isArray(amenities?.amenities)
        ? amenities
        : amenities
    ),

    location: {
      lat: location?.lat || null,
      lng: location?.lng || null,
      address: normalizeLocation(project?.location || ""),
      proximityFeatures: Array.isArray(location?.proximityFeatures)
        ? location.proximityFeatures
        : [],
    },

    _sanity: true,
    _raw: sanityDoc,
    _rawLocalized: content,
  };
  }

  const localizedLocation =
    locale === "ar"
      ? sanityDoc?.locationAr || sanityDoc?.location || ""
      : sanityDoc?.location || "";
  const localizedTitle =
    locale === "ar"
      ? sanityDoc?.titleAr || sanityDoc?.title || ""
      : sanityDoc?.title || sanityDoc?.titleAr || "";
  const localizedDeveloper =
    locale === "ar"
      ? sanityDoc?.developerAr || sanityDoc?.developer || ""
      : sanityDoc?.developer || sanityDoc?.developerAr || "";
  const localizedDescription =
    locale === "ar"
      ? sanityDoc?.descriptionAr || sanityDoc?.description || ""
      : sanityDoc?.description || "";
  const brochureUrl = getPrimaryBrochureUrl(sanityDoc);
  const broker = normalizeBrokerData(sanityDoc?.assignedBroker, locale);
  const gallerySlides = Array.isArray(sanityDoc?.galleryImages)
    ? sanityDoc.galleryImages.map((item) => item?.url).filter(Boolean)
    : [];

  return {
    slug: sanityDoc?.slug || "",
    category: normalizePropertyType(sanityDoc?.propertyType || sanityDoc?.unitTypes),
    developerSlug: developerToSlug(sanityDoc?.developer || ""),
    regionSlug: sanityDoc?.regionSlug || "",
    startingPriceAED: parsePriceToAED(sanityDoc?.startingPrice),
    brochureUrl,
    completionDate: sanityDoc?.completionDate || "",
    handoverDate: sanityDoc?.completionDate || "",
    paymentPlan: sanityDoc?.paymentPlan || "",
    crestImage: sanityDoc?.crestImage || sanityDoc?.crestImageCdn?.url || "",
    broker,
    status: normalizeListingStatus(sanityDoc?.status || ""),
    unitTypes: normalizeUnitTypes(sanityDoc?.unitTypes || sanityDoc?.propertyType || ""),
    title: cleanLocalizedText(localizedTitle, sanityDoc?.title || ""),
    developer: cleanLocalizedText(localizedDeveloper, sanityDoc?.developer || ""),
    project: {
      name: cleanLocalizedText(localizedTitle, sanityDoc?.title || ""),
      developer: normalizeDeveloperName(cleanLocalizedText(localizedDeveloper, sanityDoc?.developer || "")),
      location: normalizeLocation(cleanLocalizedText(localizedLocation, sanityDoc?.location || "")),
      startingPrice: sanityDoc?.startingPrice || "",
      completionDate: sanityDoc?.completionDate || "",
      paymentPlan: sanityDoc?.paymentPlan || "",
      type: normalizeUnitTypes(sanityDoc?.unitTypes || sanityDoc?.propertyType || ""),
      status: normalizeListingStatus(sanityDoc?.status || ""),
    },
    hero: {
      backgroundUrl:
        sanityDoc?.heroVideo || sanityDoc?.heroImage || gallerySlides[0] || "",
      squareImageUrl: sanityDoc?.heroImage || gallerySlides[0] || "",
      title: cleanLocalizedText(localizedTitle, sanityDoc?.title || ""),
      companyName: normalizeDeveloperName(cleanLocalizedText(localizedDeveloper, sanityDoc?.developer || "")),
    },
    intro: {
      title: cleanLocalizedText(localizedTitle, sanityDoc?.title || ""),
      description: cleanLocalizedText(localizedDescription, sanityDoc?.description || ""),
      paragraphs: cleanLocalizedText(localizedDescription, sanityDoc?.description || "") ? [cleanLocalizedText(localizedDescription, sanityDoc?.description || "")] : [],
      brochures: brochureUrl
        ? [{ title: "Download Brochure", url: brochureUrl, type: "main" }]
        : [],
      imgUrl: sanityDoc?.heroImage || gallerySlides[0] || "",
      imgAlt: cleanLocalizedText(localizedTitle, sanityDoc?.title || ""),
      stats: [],
    },
    masterplan: sanityDoc?.masterplanUrl
      ? { url: sanityDoc.masterplanUrl, title: "Masterplan" }
      : null,
    gallery: {
      images: gallerySlides.map((url) => ({ url, alt: cleanLocalizedText(localizedTitle, sanityDoc?.title || "") })),
      slides: gallerySlides,
    },
    floorPlans: {
      plans: Array.isArray(sanityDoc?.floorPlans) ? sanityDoc.floorPlans : [],
    },
    amenities: normalizeAmenities({ title: "", amenities: sanityDoc?.amenities || [] }),
    location: {
      lat: sanityDoc?.lat || null,
      lng: sanityDoc?.lng || null,
      address: normalizeLocation(cleanLocalizedText(localizedLocation, sanityDoc?.location || "")),
      proximityFeatures: Array.isArray(sanityDoc?.nearbyPlaces)
        ? sanityDoc.nearbyPlaces.map((item) => ({
            icon: item?.icon || "location",
            name: {
              en: item?.name || "",
              ar: item?.nameAr || item?.name || "",
            },
            text: {
              en: item?.distance
                ? `${item?.name || ""} - ${item.distance}`
                : item?.name || "",
              ar: item?.distance
                ? `${item?.nameAr || item?.name || ""} - ${item.distance}`
                : item?.nameAr || item?.name || "",
            },
            distance: item?.distance || "",
            lat: toNumber(item?.lat),
            lng: toNumber(item?.lng),
            directionsUrl: item?.directionsUrl || "",
          }))
        : [],
    },
    _sanity: true,
    _raw: sanityDoc,
    _rawLocalized: sanityDoc,
  };
}

/* ProjectPage */
export default function ProjectPage({ params }) {
  const { locale } = useLanguage();
  const { category, developer, project } = use(params);

  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      // 1. Prefer live Sanity/API data so property pages stop drifting from backend content.
      try {
        const query = new URLSearchParams({
          slug: project,
          category,
          developer,
          project,
          locale: locale || "en",
        });
        const res = await fetch(`/api/sanity-projects?${query.toString()}`);
        if (res.ok) {
          const payload = await res.json();
          const doc = Array.isArray(payload)
            ? payload.find((d) => d.slug === project) || payload[0]
            : payload;
          if (doc) {
            setProjectData(buildSanityProjectData(doc, locale));
            setLoading(false);
            return;
          }
        }

        const fallbackRes = await fetch("/api/sanity-projects");
        if (fallbackRes.ok) {
          const allDocs = await fallbackRes.json();
          const matchedDoc = (Array.isArray(allDocs) ? allDocs : []).find((doc) => {
            const slugMatch =
              doc?.slug === project ||
              slugifyValue(doc?.title) === project ||
              slugifyValue(doc?.name) === project;
            const developerMatch =
              !developer ||
              slugifyValue(doc?.developer) === developer ||
              slugifyValue(doc?.developerSlug) === developer;
            const categoryMatch =
              !category ||
              slugifyValue(doc?.propertyType || doc?.unitTypes) === category ||
              slugifyValue(doc?.type) === category;

            return slugMatch && developerMatch && categoryMatch;
          });

          if (matchedDoc) {
            setProjectData(buildSanityProjectData(matchedDoc, locale));
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        console.error("Failed to load Sanity project data", e);
      }

      setProjectData(null);
      setLoading(false);
    }

    loadData();
  }, [category, developer, project, locale]);

  /* Loading state */
  if (loading) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)",
        color: "#fff", fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "20px", textAlign: "center",
      }}>
        <div style={{
          width: "80px", height: "80px", borderRadius: "50%",
          border: "3px solid transparent",
          borderTop: "3px solid #c9a26a", borderRight: "3px solid #c9a26a",
          animation: "spin 1s linear infinite", marginBottom: "30px",
        }} />
        <h2 style={{
          fontSize: "24px", fontWeight: "300", letterSpacing: "1px",
          background: "linear-gradient(90deg, #fff 0%, #c9a26a 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          {locale === "ar" ? "جارٍ تحميل المشروع..." : "Loading..."}
        </h2>
        <style jsx global>{`
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  /* Not found */
  if (!projectData) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "#0b0b0b", color: "#fff", textAlign: "center", padding: "20px",
      }}>
        <div style={{
          width: "60px", height: "60px",
          background: "linear-gradient(135deg, #c9a26a 0%, #a27b43 100%)",
          borderRadius: "50%", display: "flex", alignItems: "center",
          justifyContent: "center", marginBottom: "25px",
        }}>
          <span style={{ fontSize: "30px", color: "#0b0b0b", fontWeight: "bold" }}>!</span>
        </div>
        <h2 style={{ fontSize: "24px", fontWeight: "300", color: "#c9a26a", marginBottom: "15px" }}>
          {locale === "ar" ? "المشروع غير موجود" : "Project Not Found"}
        </h2>
        <p style={{ fontSize: "14px", color: "#888", maxWidth: "300px" }}>
          {locale === "ar" ? "تعذر العثور على المشروع المطلوب" : "Unable to find the requested project"}
        </p>
      </div>
    );
  }

  const shouldShowFloorPlans =
    projectData.floorPlans &&
    Array.isArray(projectData.floorPlans.plans) &&
    projectData.floorPlans.plans.length > 0;

  return (
    <main>
      <ProjectHero data={projectData.hero} projectData={projectData} />

      <ProjectIntro
        data={projectData.intro}
        projectData={projectData}
        rawProjectData={projectData._rawLocalized || projectData._raw || projectData}
      />

      <VisualSymphony data={projectData.gallery} />

      {shouldShowFloorPlans && (
        <FloorPlanShowcase data={projectData.floorPlans} projectData={projectData} />
      )}

      {projectData.masterplan && (
        <MasterplanViewer
          masterplan={projectData.masterplan}
          locale={locale}
          isRTL={locale === "ar"}
        />
      )}

      <AmenitiesShowcase
        data={projectData.amenities}
        projectData={projectData}
        locale={locale}
        isRTL={locale === "ar"}
      />

      <MapDirections
        data={projectData.location}
        projectData={projectData}
        locale={locale}
        isRTL={locale === "ar"}
      />

      {/* Related Projects — sits between map and contact form */}
      <RelatedProjects
        projectData={projectData}
        currentSlug={project}
      />

      <ContactFormFinal projectData={projectData} />
    </main>
  );
}
