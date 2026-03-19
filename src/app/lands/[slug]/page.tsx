"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import VisualSymphony from "@/components/projects/VisualSymphony";
import AmenitiesShowcase from "@/components/projects/AmenitiesShowcase";
import ContactFormFinal from "@/components/projects/ContactFormFinal";
import MapDirections from "@/components/projects/MapDirections";
import RelatedProjects from "@/components/projects/RelatedProjects";
import MasterplanViewer from "@/components/projects/MasterplanViewer";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

function pickGallerySlides(project) {
  const syntheticSlides = Array.isArray(project?.data?.gallery?.slides)
    ? project.data.gallery.slides
    : [];

  if (syntheticSlides.length > 0) {
    return syntheticSlides
      .map((item) => (typeof item === "string" ? item : item?.url))
      .filter(Boolean);
  }

  return Array.isArray(project?.gallery)
    ? project.gallery.filter(Boolean)
    : [];
}

function pickAmenities(project) {
  const syntheticAmenities = project?.data?.amenities?.amenities;
  if (Array.isArray(syntheticAmenities) && syntheticAmenities.length > 0) {
    return syntheticAmenities;
  }

  if (Array.isArray(project?.features?.en)) {
    return project.features.en.filter(Boolean);
  }

  return [];
}

function pickProximity(project) {
  const synthetic = project?.data?.location?.proximityFeatures;
  if (Array.isArray(synthetic) && synthetic.length > 0) {
    return synthetic;
  }

  return Array.isArray(project?.nearby)
    ? project.nearby
        .map((item) => ({
          icon: item?.icon || "location",
          text: item?.distance
            ? `${item?.name || ""} - ${item.distance}`
            : item?.name || "",
        }))
        .filter((item) => item.text)
    : [];
}

function pickBrochures(project) {
  // Pull full brochures array from synthetic data (local data files)
  const syntheticBrochures = Array.isArray(project?.data?.intro?.brochures)
    ? project.data.intro.brochures.filter((b) => b && (b.url || b.href))
    : [];

  if (syntheticBrochures.length > 0) {
    return syntheticBrochures;
  }

  // Fallback to single brochureUrl
  if (project?.brochureUrl) {
    return [{ title: "Download Brochure", url: project.brochureUrl, type: "main" }];
  }

  return [];
}

function pickMasterplan(project) {
  // Look for masterplan brochure entries in synthetic data
  const brochures = Array.isArray(project?.data?.intro?.brochures)
    ? project.data.intro.brochures
    : [];
  const masterplanBrochure = brochures.find(
    (b) => b && String(b.type || "").toLowerCase() === "masterplan"
  );
  if (masterplanBrochure) {
    return { url: masterplanBrochure.url || masterplanBrochure.href, title: masterplanBrochure.title || "Masterplan" };
  }

  // Check for masterplanUrl on the project
  const masterplanUrl =
    project?.masterplanUrl ||
    project?.masterPlanUrl ||
    project?.data?.masterplanUrl ||
    "";
  if (masterplanUrl) {
    return { url: masterplanUrl, title: "Masterplan" };
  }

  return null;
}

function landToProjectData(project, locale) {
  const slides = pickGallerySlides(project);
  const heroImage =
    project?.data?.hero?.squareImageUrl ||
    project?.data?.hero?.backgroundUrl ||
    slides[0] ||
    "";
  const backgroundUrl =
    project?.data?.hero?.backgroundUrl ||
    heroImage;
  const description =
    project?.data?.intro?.description ||
    project?.data?.intro?.paragraphs?.[0] ||
    project?.description?.[locale] ||
    project?.description?.en ||
    "";

  const developer = project?.developer || project?.data?.project?.developer || "";
  const location =
    project?.subtitle?.[locale] ||
    project?.subtitle?.en ||
    project?.data?.project?.location ||
    "";
  const title =
    project?.title?.[locale] ||
    project?.title?.en ||
    project?.name ||
    project?.slug ||
    "Land Project";
  const price =
    project?.price?.[locale] ||
    project?.price?.en ||
    project?.data?.project?.startingPrice ||
    "";
  const units =
    project?.area?.[locale] ||
    project?.area?.en ||
    project?.data?.project?.units ||
    "";

  return {
    slug: project?.slug || "",
    category: "lands",
    developerSlug: project?.developerSlug || "",
    regionSlug: project?.regionSlug || "",
    startingPriceAED: project?.startingPriceAED || null,
    project: {
      name: title,
      developer,
      location,
      startingPrice: price,
      completionDate: project?.completion?.[locale] || project?.completion?.en || "",
      paymentPlan: "",
      type: units || "Land",
      status: project?.status || "Land",
      units,
    },
    hero: {
      backgroundUrl,
      squareImageUrl: heroImage,
      title,
      companyName: developer,
      startingPrice: price,
      completionDate: project?.completion?.[locale] || project?.completion?.en || "",
      status: project?.status || "Land",
      type: units || "Land",
    },
    intro: {
      title,
      description,
      paragraphs: description ? [description] : [],
      brochures: pickBrochures(project),
      imgUrl: heroImage,
      imgAlt: title,
      stats: [],
    },
    masterplan: pickMasterplan(project),
    gallery: {
      title: "Project Gallery",
      projectTag: title,
      slides,
      images: slides.map((url) => ({ url, alt: title })),
    },
    floorPlans: {
      plans: [],
    },
    amenities: {
      title: locale === "ar" ? "المزايا" : "Features & Amenities",
      amenities: pickAmenities(project),
    },
    location: {
      lat: project?.data?.location?.lat ?? null,
      lng: project?.data?.location?.lng ?? null,
      address: location,
      proximityFeatures: pickProximity(project),
    },
    _sanity: true,
    _raw: project,
    _rawLocalized: project,
  };
}

export default function LandDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const { locale } = useLanguage();
  const { allProjects, loading } = useAllProjects();
  const isRTL = locale === "ar";

  const landProject = useMemo(() => {
    if (!slug) return null;

    return (allProjects || []).find((project) => {
      const status = String(project?.status || project?.devStatus || "").toLowerCase();
      return (
        project?.slug === slug &&
        (project?.isLand ||
          project?.category === "lands" ||
          status === "land" ||
          status === "lands")
      );
    });
  }, [allProjects, slug]);

  const projectData = useMemo(() => {
    if (!landProject) return null;
    return landToProjectData(landProject, locale === "ar" ? "ar" : "en");
  }, [landProject, locale]);

  if (loading && !projectData) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)",
          color: "#fff",
        }}
      >
        {locale === "ar" ? "جاري التحميل..." : "Loading..."}
      </div>
    );
  }

  if (!projectData) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0b",
          color: "#fff",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div>
          <h2 style={{ color: "#c9a26a", marginBottom: 12 }}>
            {locale === "ar" ? "المشروع غير موجود" : "Project Not Found"}
          </h2>
          <p style={{ color: "#bdbdbd" }}>
            {locale === "ar"
              ? "تعذر العثور على مشروع الأرض المطلوب."
              : "Unable to find the requested land project."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <ProjectHero
        data={projectData.hero}
        projectData={projectData}
        locale={locale}
        isRTL={isRTL}
      />
      <ProjectIntro
        data={projectData.intro}
        projectData={projectData}
        rawProjectData={projectData._rawLocalized || projectData._raw || projectData}
        locale={locale}
        isRTL={isRTL}
      />
      <VisualSymphony data={projectData.gallery} locale={locale} isRTL={isRTL} />
      {projectData.masterplan && (
        <MasterplanViewer
          masterplan={projectData.masterplan}
          locale={locale}
          isRTL={isRTL}
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
      <RelatedProjects projectData={projectData} currentSlug={projectData.slug} />
      <ContactFormFinal projectData={projectData} />
    </main>
  );
}
