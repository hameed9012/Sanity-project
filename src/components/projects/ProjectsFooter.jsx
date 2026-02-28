"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import menuData from "@/data/menuData";
import styles from "@/styles/projects/ProjectsFooter.module.css";

export default function ProjectsFooter({ title = "" }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const hrefFor = (categorySlug, developerSlug, projectSlug) =>
    `/properties/${categorySlug}/${developerSlug}/${projectSlug}`;

  return (
    <footer className={styles.luxuryFooter}>
      {/* Luxury Background */}
      <div className={styles.backgroundLuxury}>
        <div className={styles.goldGrid}></div>
        <div className={styles.goldGlow}></div>
      </div>

      <div className={styles.container}>
        {/* Elegant Header */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>{title}</h2>
          <div className={styles.titleLine}></div>
        </div>

        {/* Premium Navigation Grid */}
        <div className={styles.navigationGrid}>
          {menuData.categories.map((category) => (
            <div
              key={category.id}
              className={`${styles.categoryCard} ${
                activeCategory === category.id ? styles.cardActive : ""
              }`}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Category Header */}
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  {category.id === 1 && "🏢"}
                  {category.id === 2 && "🏡"}
                  {category.id === 3 && "🏬"}
                  {category.id === 4 && "🏔️"}
                </div>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
              </div>

              {/* Projects List */}
              <div className={styles.projectsContainer}>
                {category.developers.map((developer) => (
                  <div key={developer.id} className={styles.developerSection}>
                    {/* Developer Name - Only show if multiple developers */}
                    {category.developers.length > 1 && (
                      <div className={styles.developerName}>
                        {developer.name}
                        {developer.slug === "sobha" && (
                          <span className={styles.premiumTag}>PREMIUM</span>
                        )}
                      </div>
                    )}

                    {/* Projects */}
                    <div className={styles.projectsList}>
                      {developer.projects.map((project) => (
                        <Link
                          key={project.id}
                          href={hrefFor(
                            category.slug,
                            developer.slug,
                            project.slug,
                          )}
                          className={styles.projectItem}
                        >
                          <div className={styles.projectImage}>
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 60px, 70px"
                              className={styles.image}
                            />
                            <div className={styles.imageOverlay}></div>
                          </div>
                          <div className={styles.projectInfo}>
                            <span className={styles.projectTitle}>
                              {project.title}
                            </span>
                            <div className={styles.projectMeta}>
                              <span className={styles.projectType}>
                                {category.name}
                              </span>
                              <span className={styles.projectArrow}>→</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Gold Accent */}
              <div className={styles.cardAccent}></div>
            </div>
          ))}
        </div>

        {/* Luxury Contact Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactLine}></div>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>Direct Consultation</div>
                <div className={styles.contactValue}>+971 56 888 8906</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>💬</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>Instant Response</div>
                <div className={styles.contactValue}>WhatsApp Available</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>Prime Locations</div>
                <div className={styles.contactValue}>Dubai & UAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
