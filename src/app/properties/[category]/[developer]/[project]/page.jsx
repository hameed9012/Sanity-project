"use client";

import { use, useEffect, useState } from "react";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import VisualSymphony from "@/components/projects/VisualSymphony";
import FloorPlanShowcase from "@/components/projects/FloorPlanShowcase";
import AmenitiesShowcase from "@/components/projects/AmenitiesShowcase";
import ContactFormFinal from "@/components/projects/ContactFormFinal";
import { getProjectData } from "@/lib/project-data";
import { useLanguage } from "@/components/LanguageProvider";
import MapDirections from "@/components/projects/MapDirections";
import GenerateSalesOfferButton from "@/components/projects/GenerateSalesOfferButton";

export default function ProjectPage({ params }) {
  const { locale } = useLanguage();

  // ✅ unwrap params (Next.js 16)
  const { category, developer, project } = use(params);

  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getProjectData(category, developer, project, locale);
      setProjectData(data);
      setLoading(false);
    }

    loadData();
  }, [category, developer, project, locale]);

  // Luxury Loading State
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)",
          color: "#fff",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* Animated gold ring */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "3px solid transparent",
            borderTop: "3px solid #c9a26a",
            borderRight: "3px solid #c9a26a",
            animation: "spin 1s linear infinite",
            marginBottom: "30px",
          }}
        />

        {/* Loading text with gold accent */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "300",
            letterSpacing: "1px",
            marginBottom: "10px",
            background: "linear-gradient(90deg, #fff 0%, #c9a26a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {locale === "ar" ? "جاري التحميل..." : "Loading..."}
        </h2>

        {/* Subtitle with opacity effect */}
        <p
          style={{
            fontSize: "14px",
            fontWeight: "300",
            color: "#888",
            letterSpacing: "0.5px",
            maxWidth: "300px",
            lineHeight: "1.5",
            opacity: 0.8,
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          {locale === "ar" ? "جاري التحميل" : "Loading"}
        </p>

        {/* Decorative gold line */}
        <div
          style={{
            width: "120px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, #c9a26a 50%, transparent 100%)",
            marginTop: "40px",
          }}
        />

        {/* Inline CSS for animations */}
        <style jsx global>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.8;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </div>
    );
  }

  // Error State
  if (!projectData) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0b",
          color: "#fff",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* Gold icon for error state */}
        <div
          style={{
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #c9a26a 0%, #a27b43 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "25px",
            boxShadow: "0 4px 20px rgba(201, 162, 106, 0.3)",
          }}
        >
          <span
            style={{ fontSize: "30px", color: "#0b0b0b", fontWeight: "bold" }}
          >
            !
          </span>
        </div>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: "300",
            letterSpacing: "1px",
            marginBottom: "15px",
            color: "#c9a26a",
          }}
        >
          {locale === "ar" ? "المشروع غير موجود" : "Project Not Found"}
        </h2>

        <p
          style={{
            fontSize: "14px",
            fontWeight: "300",
            color: "#888",
            letterSpacing: "0.5px",
            maxWidth: "300px",
            lineHeight: "1.5",
          }}
        >
          {locale === "ar"
            ? "تعذر العثور على المشروع المطلوب"
            : "Unable to find the requested project"}
        </p>
      </div>
    );
  }

  // ✅ floorplans visible only when we really want them
  const shouldShowFloorPlans =
    project !== "lumenaalta" &&
    project !== "riviera-retails" &&
    projectData.floorPlans &&
    Array.isArray(projectData.floorPlans.plans) &&
    projectData.floorPlans.plans.length > 0;

  return (
    <main>
      <ProjectHero data={projectData.hero} projectData={projectData} />
      <ProjectIntro data={projectData.intro} projectData={projectData} />
      <VisualSymphony data={projectData.gallery} />
      <FloorPlanShowcase
        data={projectData.floorPlans}
        projectData={projectData}
      />
      <MapDirections
        data={projectData.location}
        projectData={projectData}
        locale={locale}
        isRTL={locale === "ar"}
      />
      <AmenitiesShowcase
        data={projectData.amenities}
        projectData={projectData}
      />
      <ContactFormFinal projectData={projectData} />
      {/* ✅ Put it at the end (no fixed, no overlay issues on mobile) */}
      {/* <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "18px 16px 40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GenerateSalesOfferButton projectData={projectData} />
      </section> */}
    </main>
  );
}
