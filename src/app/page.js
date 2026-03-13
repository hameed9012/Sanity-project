"use client";

import { useLanguage } from "@/components/LanguageProvider";
import HeroProjectsSlider from "@/components/HeroProjectsSlider";
import ArtOfDetail from "@/components/ArtOfDetail";
import PillarsSection from "@/components/PillarsSection";
import HomeHeroSlider from "@/components/HomeHero/HomeHeroSlider";
import PressReleasesSlider from "@/components/articles/PressReleasesSlider";

export default function HomePage() {
  const { locale } = useLanguage();

  return (
    <>
      <HeroProjectsSlider />
      <ArtOfDetail />
      <PillarsSection />
      <HomeHeroSlider locale={locale} />
      <PressReleasesSlider />
    </>
  );
}