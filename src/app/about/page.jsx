"use client";
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./about.module.css";
import Image from "next/image";
import SobhaLegacyHero from "@/components/about/SobhaLegacyHero";
import ServicesSection from "./ServicesSection";
import BuildingExcellenceSection from "@/components/about/BuildingExcellenceSection";
import BrandPillarsAccordion from "@/components/about/BrandPillarsAccordion";
import JourneyTimeline from "@/components/about/JourneyTimeline";

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const CDN = "https://luxury-real-estate-media.b-cdn.net";
  const isRTL = locale === "ar";

  const badgeTranslations = {
    dldCertified: isRTL ? "معتمد من دائرة الأراضي والأملاك" : "DLD Certified",
    premiumPartner: isRTL ? "شريك متميز" : "Premium Partner",
    roi: isRTL ? "15-30% عائد استثماري" : "15-30% ROI",
  };

  return (
    <>
      <SobhaLegacyHero />
      <BuildingExcellenceSection />
      <ServicesSection />
      <BrandPillarsAccordion />
      <JourneyTimeline />
    </>
  );
}
