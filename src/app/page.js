"use client";

import HeroProjectsSlider from "@/components/HeroProjectsSlider";
import ArtOfDetail from "@/components/ArtOfDetail";
import PillarsSection from "@/components/PillarsSection";
import PressReleasesSlider from "@/components/articles/PressReleasesSlider";

export default function HomePage() {
  return (
    <>
      <HeroProjectsSlider />
      <ArtOfDetail />
      <PillarsSection />
      <PressReleasesSlider />
    </>
  );
}
