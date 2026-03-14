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
import { useLanguage } from "@/components/LanguageProvider";

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
  const slug = text
    .toLowerCase()
    .replace(/\s+(realty|properties|developments?|group|real\s+estate)\s*$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const map = {
    sobha: "Sobha Realty",
    azizi: "Azizi Developments",
    danube: "Danube Properties",
    damac: "DAMAC Properties",
    tiger: "Tiger Properties",
    arada: "Arada",
    binghatti: "Binghatti",
  };
  return map[slug] || text;
}

function normalizeLocation(value) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  const labels = {
    "business bay": "Business Bay, Dubai, UAE",
    downtown: "Downtown Dubai, UAE",
    "dubai harbour": "Dubai Harbour, Dubai, UAE",
    "dubai south": "Dubai South, Dubai, UAE",
    "ras al khor": "Ras Al Khor, Dubai, UAE",
    "mbr city": "Mohammed Bin Rashid City, Dubai, UAE",
    sharjah: "Sharjah, UAE",
    jlt: "Jumeirah Lake Towers, Dubai, UAE",
    jvc: "Jumeirah Village Circle, Dubai, UAE",
    jvt: "Jumeirah Village Triangle, Dubai, UAE",
    difc: "DIFC, Dubai, UAE",
  };
  return labels[text.toLowerCase()] || text;
}

function normalizeListingStatus(value) {
  const text = String(value || "").toLowerCase().trim();
  if (!text) return "Off-plan";
  if (text.includes("rent")) return "Rental";
  if (text.includes("secondary") || text.includes("resale") || text.includes("ready")) {
    return "Ready To Move";
  }
  if (text.includes("sold")) return "Sold-out";
  return "Off-plan";
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

function developerToSlug(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/\s+(realty|properties|developments?|group|real\s+estate)\s*$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "unknown";
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
    developerSlug: developerSlug || "unknown",
    regionSlug: rawLocale.location?.regionSlug || "",
    startingPriceAED: parsePriceToAED(rawLocale.project?.startingPrice),

    // ── pass through everything else ─────────────────────────
    ...rawLocale,

    // ── normalize amenities shape ─────────────────────────────
    amenities: normalizeAmenities(rawLocale.amenities),
  };
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

  return {
    // ── identity for RelatedProjects scoring ─────────────────
    slug: sanityDoc?.slug || "",
    category: sanityDoc?.type || "apartments",
    developerSlug: (project?.developer || "")
      .toLowerCase()
      .replace(/\s+(realty|properties|developments?|group|real\s+estate)\s*$/i, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "unknown",
    regionSlug: sanityDoc?.regionSlug || "",
    startingPriceAED: parsePriceToAED(project?.startingPrice),

    // ── standard fields ───────────────────────────────────────
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
      brochures: Array.isArray(intro?.brochures) ? intro.brochures : [],
      imgUrl: intro?.imgUrl || "",
      imgAlt: intro?.imgAlt || "",
      stats: project?.stats || [],
    },

    gallery: {
      images: Array.isArray(gallery?.slides)
        ? gallery.slides.map((g) =>
            typeof g === "string"
              ? { url: g, alt: project?.name || "" }
              : { url: g?.url || "", alt: g?.alt || project?.name || "" }
          )
        : [],
      slides: Array.isArray(gallery?.slides) ? gallery.slides : [],
    },

    floorPlans: {
      plans: Array.isArray(floorPlans?.plans) ? floorPlans.plans : [],
    },

    // ── amenities: always normalised ──────────────────────────
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
  const localizedDescription =
    locale === "ar"
      ? sanityDoc?.descriptionAr || sanityDoc?.description || ""
      : sanityDoc?.description || "";
  const gallerySlides = Array.isArray(sanityDoc?.galleryImages)
    ? sanityDoc.galleryImages.map((item) => item?.url).filter(Boolean)
    : [];

  return {
    slug: sanityDoc?.slug || "",
    category: normalizePropertyType(sanityDoc?.propertyType || sanityDoc?.unitTypes),
    developerSlug: developerToSlug(sanityDoc?.developer || ""),
    regionSlug: sanityDoc?.regionSlug || "",
    startingPriceAED: parsePriceToAED(sanityDoc?.startingPrice),
    title: sanityDoc?.title || "",
    developer: sanityDoc?.developer || "",
    project: {
      name: sanityDoc?.title || "",
      developer: normalizeDeveloperName(sanityDoc?.developer || ""),
      location: normalizeLocation(localizedLocation),
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
      title: sanityDoc?.title || "",
      companyName: normalizeDeveloperName(sanityDoc?.developer || ""),
    },
    intro: {
      title: sanityDoc?.title || "",
      description: localizedDescription,
      paragraphs: localizedDescription ? [localizedDescription] : [],
      brochures: sanityDoc?.brochureUrl
        ? [{ title: "Download Brochure", url: sanityDoc.brochureUrl, type: "main" }]
        : [],
      imgUrl: sanityDoc?.heroImage || gallerySlides[0] || "",
      imgAlt: sanityDoc?.title || "",
      stats: [],
    },
    gallery: {
      images: gallerySlides.map((url) => ({ url, alt: sanityDoc?.title || "" })),
      slides: gallerySlides,
    },
    floorPlans: {
      plans: Array.isArray(sanityDoc?.floorPlans) ? sanityDoc.floorPlans : [],
    },
    amenities: normalizeAmenities({ title: "", amenities: sanityDoc?.amenities || [] }),
    location: {
      lat: sanityDoc?.lat || null,
      lng: sanityDoc?.lng || null,
      address: normalizeLocation(localizedLocation),
      proximityFeatures: Array.isArray(sanityDoc?.nearbyPlaces)
        ? sanityDoc.nearbyPlaces.map((item) => ({
            icon: item?.icon || "location",
            text: item?.distance
              ? `${item?.name || ""} - ${item.distance}`
              : item?.name || "",
          }))
        : [],
    },
    _sanity: true,
    _raw: sanityDoc,
    _rawLocalized: sanityDoc,
  };
}

/* ─────────────────────────────────────────────────────────────────
   ProjectPage
───────────────────────────────────────────────────────────────── */
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
        const res = await fetch(`/api/sanity-projects?slug=${project}`);
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

  /* ── Loading state ─────────────────────────────────────── */
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
          {locale === "ar" ? "جاري التحميل..." : "Loading..."}
        </h2>
        <style jsx global>{`
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  /* ── Not found ─────────────────────────────────────────── */
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
    project !== "lumenaalta" &&
    project !== "riviera-retails" &&
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
