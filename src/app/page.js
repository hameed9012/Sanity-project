"use client";

import HeroProjectsSlider from "@/components/HeroProjectsSlider";
import ArtOfDetail from "@/components/ArtOfDetail";
import PillarsSection from "@/components/PillarsSection";
import FeaturedProjectsSlider from "@/components/FeaturedProjectsSlider";
import PressReleasesSlider from "@/components/articles/PressReleasesSlider";

export default function HomePage() {
  return (
    <>
      <HeroProjectsSlider />
      <ArtOfDetail />
      <PillarsSection />
      <FeaturedProjectsSlider />
      <PressReleasesSlider />
    </>
  );
}