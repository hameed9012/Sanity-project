// e.g. src/app/where-to-live/[slug]/page.jsx
"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";

import { useLanguage } from "@/components/LanguageProvider";

import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import ProjectCards from "@/components/projects/ProjectCards";
import AreaGuideHero from "@/components/where-to-live/AreaGuideHero";
import AreaNarrative from "@/components/where-to-live/AreaNarrative";
import MarketInsights from "@/components/where-to-live/MarketInsights";
import LocationFAQ from "@/components/where-to-live/LocationFAQ";

import { regionProjectsIndex } from "@/data/regionProjectsIndex";
import { getWhereToLiveRegionLocalized } from "@/data/whereToLiveData/whereToLiveRegionDetails";

export default function ProjectsPage() {
  const { slug } = useParams();
  const { locale, t } = useLanguage(); // locale is used by regionData, t for text

  const regionData = getWhereToLiveRegionLocalized(slug, locale);

  const [filters, setFilters] = useState({
    search: "",
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: "",
    devStatus: [],
    unitTypes: [],
    bedrooms: [],
    completionYears: [],
    postHandoverOnly: false,
    minPostHandoverMonths: 1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return regionProjectsIndex.filter((project) => {
      if (slug && project.regionSlug !== slug) return false;

      // SEARCH
      if (filters.search.trim() !== "") {
        const search = filters.search.toLowerCase().trim();
        const fields = [
          project.name,
          project.developer,
          project.location,
          project.bedrooms,
          project.unitType,
        ]
          .filter(Boolean)
          .map((f) => f.toLowerCase());

        if (!fields.some((f) => f.includes(search))) return false;
      }

      // PRICE
      const p = project.priceAED || project.startingPriceAED || 0;
      if (filters.minPrice && p < Number(filters.minPrice)) return false;
      if (filters.maxPrice && p > Number(filters.maxPrice)) return false;

      // SIZE
      const s = project.sizeSqft || 0;
      if (filters.minSize && s < Number(filters.minSize)) return false;
      if (filters.maxSize && s > Number(filters.maxSize)) return false;

      // DEV STATUS
      if (
        filters.devStatus.length > 0 &&
        !filters.devStatus.includes(project.devStatus)
      )
        return false;

      // UNIT TYPES
      if (
        filters.unitTypes.length > 0 &&
        !filters.unitTypes.includes(project.unitType)
      )
        return false;

      // BEDROOMS
      if (filters.bedrooms.length > 0) {
        const match = filters.bedrooms.some((br) => {
          const min = project.minBedrooms || 0;
          const max = project.maxBedrooms || min;
          if (br === 5) return min >= 5;
          return br >= min && br <= max;
        });
        if (!match) return false;
      }

      // COMPLETION YEAR
      if (
        filters.completionYears.length > 0 &&
        !filters.completionYears.includes(project.completionYear)
      )
        return false;

      // POST-HANDOVER
      if (filters.postHandoverOnly && !project.hasPostHandover) return false;

      if (
        filters.minPostHandoverMonths > 1 &&
        (!project.hasPostHandover ||
          project.postHandoverMonths < filters.minPostHandoverMonths)
      )
        return false;

      return true;
    });
  }, [filters, slug]);

  const handleResetFilters = () => {
    setFilters({
      search: "",
      minPrice: "",
      maxPrice: "",
      minSize: "",
      maxSize: "",
      devStatus: [],
      unitTypes: [],
      bedrooms: [],
      completionYears: [],
      postHandoverOnly: false,
      minPostHandoverMonths: 1,
    });
  };

  const activeFilterCount = [
    filters.search,
    filters.minPrice,
    filters.maxPrice,
    filters.minSize,
    filters.maxSize,
    filters.devStatus.length,
    filters.unitTypes.length,
    filters.bedrooms.length,
    filters.completionYears.length,
    filters.postHandoverOnly,
    filters.minPostHandoverMonths > 1,
  ].filter(Boolean).length;

  const summaryText =
    t("projects.listing.resultsSummary", {
      count: filteredProjects.length,
      region: regionData?.name ?? "",
    }) ||
    `Showing ${filteredProjects.length} projects in ${regionData?.name ?? ""}`;

  const filtersAppliedText =
    activeFilterCount > 0
      ? t("projects.listing.filtersApplied", {
          count: activeFilterCount,
        }) ||
        `(${activeFilterCount} filter${
          activeFilterCount !== 1 ? "s" : ""
        } applied)`
      : "";

  return (
    <>
      {/* HERO SECTION */}
      <AreaGuideHero regionData={regionData} />

      {/* ABOUT + MARKET DATA */}
      <AreaNarrative regionData={regionData} />
      <MarketInsights regionData={regionData} />

      {/* FILTER BAR */}
      <ProjectsFiltersBar
        filters={filters}
        onChange={setFilters}
        onOpenFullFilters={() => setIsModalOpen(true)}
      />

      <ProjectsFiltersModal
        isOpen={isModalOpen}
        filters={filters}
        onChange={setFilters}
        onClose={() => setIsModalOpen(false)}
        onReset={handleResetFilters}
        totalProjects={filteredProjects.length}
      />

      {/* PROJECT CARDS */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            padding: "20px 0",
            fontSize: "15px",
            color: "#64748b",
            borderBottom: "1.5px solid #e2e8f0",
            marginBottom: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "500",
          }}
        >
          <span>
            {summaryText}
            {filtersAppliedText && <> {filtersAppliedText}</>}
          </span>

          {activeFilterCount > 0 && (
            <button
              onClick={handleResetFilters}
              style={{
                background: "none",
                border: "1px solid #dc2626",
                color: "#dc2626",
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "13px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              {t("projects.listing.clearAllFilters") || "Clear All Filters"}
            </button>
          )}
        </div>

        <ProjectCards
          projects={filteredProjects}
          onResetFilters={handleResetFilters}
        />
      </div>

      {/* FAQ */}
      <LocationFAQ regionData={regionData} />
    </>
  );
}
