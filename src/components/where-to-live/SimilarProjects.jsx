// src/components/projects/SimilarProjectsSwiper.jsx
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard } from "swiper/modules";
import styles from "@/styles/where-to-live/SimiliarProjects.module.css";
import { regionProjectsIndex } from "@/data/regionProjectsIndex";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SimilarProjectsSwiper = ({
  currentProject,
  currentRegion,
  maxProjects = 12,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Find ALL similar projects
  const allSimilarProjects = useMemo(() => {
    if (!currentProject && !currentRegion) return [];

    const allProjects = regionProjectsIndex.filter(
      (project) => project.regionSlug !== null // Only show projects with regions
    );

    // If we have a current project, find similar ones
    if (currentProject) {
      return allProjects
        .filter((project) => {
          // Exclude the current project
          if (project.slug === currentProject.slug) return false;

          // Calculate similarity score
          let score = 0;

          // Same region - high priority
          if (project.regionSlug === currentProject.regionSlug) score += 3;

          // Same unit type - high priority
          if (project.unitType === currentProject.unitType) score += 2;

          // Similar price range (within 30%)
          const currentPrice =
            currentProject.priceAED || currentProject.startingPriceAED || 0;
          const projectPrice =
            project.priceAED || project.startingPriceAED || 0;
          if (currentPrice > 0 && projectPrice > 0) {
            const priceRatio =
              Math.min(currentPrice, projectPrice) /
              Math.max(currentPrice, projectPrice);
            if (priceRatio > 0.7) score += 2;
          }

          // Same developer
          if (project.developer === currentProject.developer) score += 1;

          // Similar bedrooms
          const currentMinBeds = currentProject.minBedrooms || 0;
          const projectMinBeds = project.minBedrooms || 0;
          if (Math.abs(currentMinBeds - projectMinBeds) <= 1) score += 1;

          return score > 0;
        })
        .sort((a, b) => {
          // Recalculate scores for sorting
          const getScore = (project) => {
            let score = 0;
            if (project.regionSlug === currentProject.regionSlug) score += 3;
            if (project.unitType === currentProject.unitType) score += 2;

            const currentPrice =
              currentProject.priceAED || currentProject.startingPriceAED || 0;
            const projectPrice =
              project.priceAED || project.startingPriceAED || 0;
            if (currentPrice > 0 && projectPrice > 0) {
              const priceRatio =
                Math.min(currentPrice, projectPrice) /
                Math.max(currentPrice, projectPrice);
              if (priceRatio > 0.7) score += 2;
            }

            if (project.developer === currentProject.developer) score += 1;

            const currentMinBeds = currentProject.minBedrooms || 0;
            const projectMinBeds = project.minBedrooms || 0;
            if (Math.abs(currentMinBeds - projectMinBeds) <= 1) score += 1;

            return score;
          };

          return getScore(b) - getScore(a);
        })
        .slice(0, maxProjects);
    }

    // If we only have a region, show other projects from the same region
    if (currentRegion) {
      return allProjects
        .filter((project) => project.regionSlug === currentRegion)
        .slice(0, maxProjects);
    }

    return [];
  }, [currentProject, currentRegion, maxProjects]);

  if (!mounted) {
    return (
      <section className={styles.similarSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              {currentProject
                ? "Similar Projects"
                : `More Projects in ${
                    currentRegion?.replace(/-/g, " ").toUpperCase() || "Dubai"
                  }`}
            </h2>
            <p className={styles.subtitle}>
              {currentProject
                ? "Discover other properties you might like"
                : "Explore other developments in this area"}
            </p>
          </div>
          <div className={styles.loadingState}>Loading similar projects...</div>
        </div>
      </section>
    );
  }

  if (!allSimilarProjects || allSimilarProjects.length === 0) {
    return null;
  }

  const formatPrice = (price) => {
    if (!price) return "Price on request";
    return `AED ${new Intl.NumberFormat().format(price)}`;
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return styles.statusCompleted;
      case "Presale":
        return styles.statusPresale;
      case "Under Construction":
        return styles.statusUnderConstruction;
      case "Announced":
        return styles.statusAnnounced;
      default:
        return "";
    }
  };

  const getStatusText = (project) => {
    return project.devStatus || project.status || "Available";
  };

  return (
    <section className={styles.similarSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {currentProject
              ? "Similar Projects"
              : `More Projects in ${
                  currentRegion?.replace(/-/g, " ").toUpperCase() || "Dubai"
                }`}
          </h2>
          <p className={styles.subtitle}>
            {currentProject
              ? "Discover other properties you might like"
              : "Explore other developments in this area"}
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation, A11y, Keyboard]}
            className={styles.swiper}
            navigation={true}
            slidesPerView={"auto"}
            spaceBetween={24}
            centeredSlides={false}
            loop={false}
            keyboard={{ enabled: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {allSimilarProjects.map((project, index) => (
              <SwiperSlide
                key={`${project.slug}-${index}`}
                className={styles.slide}
              >
                <div className={styles.projectCard}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className={styles.cardImage}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  {!project.image && (
                    <div className={styles.imagePlaceholder}>
                      {project.name || "Project Image"}
                    </div>
                  )}

                  <div
                    className={`${styles.statusBadge} ${getStatusClass(
                      getStatusText(project)
                    )}`}
                  >
                    {getStatusText(project)}
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.developer}>
                        {project.developer}
                      </div>
                      <h3 className={styles.projectName}>{project.name}</h3>
                      <div className={styles.location}>
                        📍 {project.location || "Dubai"}
                      </div>
                    </div>

                    <div className={styles.cardDetails}>
                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Price</span>
                        <span
                          className={`${styles.detailValue} ${styles.price}`}
                        >
                          {formatPrice(
                            project.priceAED || project.startingPriceAED
                          )}
                        </span>
                      </div>

                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Type</span>
                        <span className={styles.detailValue}>
                          {project.unitType || project.type}
                        </span>
                      </div>

                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Size</span>
                        <span className={styles.detailValue}>
                          {project.sizeSqft
                            ? `${new Intl.NumberFormat().format(
                                project.sizeSqft
                              )} sqft`
                            : "N/A"}
                        </span>
                      </div>
                    </div>

                    <div className={styles.bedrooms}>
                      🛏️ {project.bedrooms}
                      {project.minBedrooms !== undefined &&
                        project.maxBedrooms !== undefined && (
                          <span className={styles.bedroomRange}>
                            (
                            {project.minBedrooms === project.maxBedrooms
                              ? `${project.minBedrooms} BR`
                              : `${project.minBedrooms}-${project.maxBedrooms} BR`}
                            )
                          </span>
                        )}
                    </div>

                    <button
                      className={styles.viewButton}
                      onClick={() => window.open(project.href, "_blank")}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SimilarProjectsSwiper;
