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
import { getProjectData } from "@/lib/project-data";
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
    startingPriceAED: rawLocale.project?.startingPrice
      ? parseInt(String(rawLocale.project.startingPrice).replace(/[^0-9]/g, ""), 10) || null
      : null,

    // ── pass through everything else ─────────────────────────
    ...rawLocale,

    // ── normalize amenities shape ─────────────────────────────
    amenities: normalizeAmenities(rawLocale.amenities),
  };
}


function buildSanityProjectData(sanityDoc, locale) {
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
    startingPriceAED: project?.startingPrice
      ? parseInt(String(project.startingPrice).replace(/[^0-9]/g, ""), 10) || null
      : null,

    // ── standard fields ───────────────────────────────────────
    title: project?.name || sanityDoc?.name || "",
    developer: project?.developer || sanityDoc?.developer || "",
    location: project?.location || sanityDoc?.location || "",

    hero: {
      backgroundUrl: hero?.backgroundUrl || "",
      squareImageUrl: hero?.squareImageUrl || "",
      title: project?.name || "",
      developer: project?.developer || "",
      location: project?.location || "",
      startingPrice: project?.startingPrice || "",
      completionDate: project?.completionDate || "",
      status: project?.status || sanityDoc?.status || "",
      type: project?.type || "",
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
      address: project?.location || "",
      proximityFeatures: Array.isArray(location?.proximityFeatures)
        ? location.proximityFeatures
        : [],
    },

    _sanity: true,
    _raw: sanityDoc,
    _rawLocalized: content,
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

      // 1. Try static data first (returns locale sub-object directly)
      const staticData = await getProjectData(category, developer, project, locale);
      if (staticData) {
        setProjectData(normalizeStaticData(staticData, project, category, developer));
        setLoading(false);
        return;
      }

      // 2. Fall back to Sanity
      try {
        const res = await fetch(`/api/sanity-projects?slug=${project}`);
        if (res.ok) {
          const docs = await res.json();
          const doc = docs.find((d) => d.slug === project) || docs[0];
          if (doc) {
            setProjectData(buildSanityProjectData(doc, locale));
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