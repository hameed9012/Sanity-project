"use client";

import React, { useEffect, useState } from "react";

import SobhaLegacyHero from "@/components/about/SobhaLegacyHero";
import BuildingExcellenceSection from "@/components/about/BuildingExcellenceSection";
import BrandPillarsAccordion from "@/components/about/BrandPillarsAccordion";
import JourneyTimeline from "@/components/about/JourneyTimeline";

import ServicesSection from "./ServicesSection";

export default function AboutPage() {
  const [about, setAbout] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const response = await fetch("/api/site-settings", { cache: "no-store" });
        const payload = await response.json();

        if (!active || !payload?.ok) return;
        setAbout(payload?.data?.about || null);
      } catch (error) {
        console.error("Failed to load About page settings", error);
      } finally {
        if (active) setLoaded(true);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  if (!loaded || !about) {
    return null;
  }

  // Apply content overrides for buildingExcellence stats
  const buildingExcellence = { ...about.buildingExcellence };
  if (Array.isArray(buildingExcellence.stats)) {
    buildingExcellence.stats = buildingExcellence.stats.map((stat) => {
      // Update "650M+" → "Targeting 1,000,000,000"
      if (stat?.count === 650 || String(stat?.suffix || "").includes("M+")) {
        return {
          ...stat,
          prefix: "Targeting",
          prefixAr: "نستهدف",
          count: null,
          countDisplay: "1,000,000,000",
          suffix: "",
          suffixAr: "",
          label: "In transaction volume for investors.",
          labelAr: "في حجم المعاملات للمستثمرين.",
        };
      }
      return stat;
    });
  }

  return (
    <main>
      <SobhaLegacyHero content={about.hero} />
      <BuildingExcellenceSection content={buildingExcellence} />
      <ServicesSection content={about.services} />
      <BrandPillarsAccordion content={about.accordion} />
      <JourneyTimeline content={about.journey} />
    </main>
  );
}
