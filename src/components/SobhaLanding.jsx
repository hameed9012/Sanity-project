"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "@/styles/SobhaLanding.module.css";
import { useAllProjects } from "@/components/SanityProjectsContext";

export default function SobhaLanding() {
  const [showModal, setShowModal] = useState(false);
  const { allProjects } = useAllProjects();

  // 🔹 Auto-open ADIB modal once
  useEffect(() => {
    const seen = localStorage.getItem("sobha_adib_seen");
    if (!seen) {
      setShowModal(true);
      localStorage.setItem("sobha_adib_seen", "1");
    }
  }, []);

  // 🔹 Pull ALL Sobha projects automatically
  const sobhaProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const developerSlug = String(p?.developerSlug || "").toLowerCase();
      const developerName = String(p?.developer || "").toLowerCase();
      return developerSlug === "sobha" || developerName.includes("sobha");
    });
  }, [allProjects]);

  return (
    <>
      {/* ================= MODAL ================= */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.modalClose}
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <span className={styles.modalBadge}>SOBHA × ADIB</span>

            <h2 className={styles.modalTitle}>Off-Plan Home Financing</h2>

            <p className={styles.modalText}>
              A strategic partnership between Sobha Realty and Abu Dhabi Islamic
              Bank allowing buyers to access Sharia-compliant home finance once
              construction reaches <strong>35%</strong>.
            </p>

            <div className={styles.modalGrid}>
              <div>Sharia-Compliant Finance</div>
              <div>Available at 35% Construction</div>
              <div>Sobha-Exclusive Projects</div>
            </div>

            <button
              className={styles.modalCTA}
              onClick={() => setShowModal(false)}
            >
              View Sobha Projects
            </button>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <span className={styles.heroBadge}>Sobha Status Portfolio</span>
        <h1 className={styles.heroTitle}>Sobha Off-Plan Projects</h1>
        <p className={styles.heroSubtitle}>
          Precision-built residences backed by institutional-grade financing.
        </p>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className={styles.projects}>
        {sobhaProjects.map((project) => (
          <a
            key={project.slug}
            href={project.href || `/properties/${project.type || "apartments"}/${project.developerSlug || "sobha"}/${project.slug}`}
            className={styles.card}
          >
            <div
              className={styles.cardImage}
              style={{
                backgroundImage: `url(${project.image || project.data?.hero?.backgroundUrl || ""})`,
              }}
            />

            <div className={styles.cardBody}>
              <h3>{project.title || project.name || project.nameEn}</h3>
              <p>{project.location}</p>
              {project.startingPrice && project.startingPrice !== "0" && (
                <span>Starting from {project.startingPrice}</span>
              )}
            </div>
          </a>
        ))}
      </section>
    </>
  );
}
