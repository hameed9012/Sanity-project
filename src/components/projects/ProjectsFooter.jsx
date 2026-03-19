"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useAllProjects } from "@/components/SanityProjectsContext";
import styles from "@/styles/projects/ProjectsFooter.module.css";

function shuffleCopy(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function ProjectsFooter({ title = "" }) {
  const { allProjects } = useAllProjects();
  const [siteContact, setSiteContact] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/site-settings", { cache: "no-store" });
        const json = await res.json();
        if (active && json?.ok) {
          setSiteContact(json?.data?.contact || null);
        }
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, []);

  const featuredProjects = useMemo(() => {
    const valid = (allProjects || []).filter(
      (project) => !project?.isLand && project?.href && project?.nameEn
    );
    return shuffleCopy(valid).slice(0, 8);
  }, [allProjects]);

  const whatsappHref = siteContact?.whatsapp
    ? `https://wa.me/${String(siteContact.whatsapp).replace(/\D/g, "")}`
    : null;

  return (
    <footer className={styles.luxuryFooter}>
      <div className={styles.backgroundLuxury}>
        <div className={styles.goldGrid}></div>
        <div className={styles.goldGlow}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>{title || "Featured Projects"}</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.navigationGrid}>
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={project.href} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryTitle}>{project.nameEn}</div>
                <p className={styles.categoryDescription}>
                  {project.developer || project.location || "Dubai, UAE"}
                </p>
              </div>

              <div className={styles.projectsContainer}>
                <div className={styles.projectsList}>
                  <div className={styles.projectItem}>
                    <div className={styles.projectImage}>
                      {project.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.image}
                          alt={project.nameEn}
                          className={styles.image}
                          loading="lazy"
                        />
                      ) : (
                        <div className={styles.imageOverlay}></div>
                      )}
                      <div className={styles.imageOverlay}></div>
                    </div>
                    <div className={styles.projectInfo}>
                      <span className={styles.projectTitle}>{project.nameEn}</span>
                      <div className={styles.projectMeta}>
                        <span className={styles.projectType}>
                          {project.type || project.category || "Property"}
                        </span>
                        <span className={styles.projectArrow}>-></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cardAccent}></div>
            </Link>
          ))}
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactLine}></div>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>Call</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>Direct Consultation</div>
                <div className={styles.contactValue}>
                  {siteContact?.phone || siteContact?.whatsapp || "Add consultation phone"}
                </div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>Mail</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>
                  {siteContact?.email || "Add contact email"}
                </div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>WA</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>WhatsApp</div>
                <div className={styles.contactValue}>
                  {whatsappHref ? "Available" : "Contact team"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
