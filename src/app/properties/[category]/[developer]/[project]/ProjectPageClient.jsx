"use client";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectIntro from "@/components/project/ProjectIntro";
import VisualSymphony from "@/components/project/VisualSymphony";
import ProjectLocation from "@/components/project/ProjectLocation";

export default function ProjectPageClient({ projectData, locale }) {
  if (!projectData) return null;

  return (
    <>
      {/* HERO */}
      <ProjectHero
        title={projectData.title}
        developer={projectData.developer}
        location={projectData.location}
      />

      {/* INTRO */}
      <ProjectIntro text={projectData.intro} />

      {/* VISUAL SYMPHONY */}
      {projectData.slides?.length > 0 && (
        <VisualSymphony
          data={{
            title: projectData.title,
            slides: projectData.slides,
          }}
          locale={locale}
        />
      )}

      {/* LOCATION */}
      <ProjectLocation location={projectData.mapLocation} />
    </>
  );
}
