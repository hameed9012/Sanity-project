"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useAllProjects } from "@/components/SanityProjectsContext";
import { useLanguage } from "@/components/LanguageProvider";
import {
  buildKodmaniWhatsAppHref,
  queueKodmaniApprovalLead,
} from "@/lib/whatsapp";
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
  const { locale } = useLanguage();
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");
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
      (project) => !project?.isLand && project?.href && (project?.nameEn || project?.nameAr || project?.name)
    );
    return shuffleCopy(valid).slice(0, 8);
  }, [allProjects]);

  const getProjectTitle = (project) =>
    isAr
      ? project?.nameAr || project?.nameEn || project?.name || ""
      : project?.nameEn || project?.name || project?.nameAr || "";

  const getProjectMeta = (project) =>
    isAr
      ? project?.developerNameAr ||
        project?.developerAr ||
        project?.locationAr ||
        project?.developer ||
        project?.location ||
        "دبي، الإمارات"
      : project?.developer || project?.location || project?.developerNameAr || "Dubai, UAE";

  const getProjectType = (project) =>
    isAr
      ? project?.unitTypeAr || project?.statusDisplayAr || project?.type || "عقار"
      : project?.type || project?.category || project?.unitTypeAr || "Property";

  const whatsappHref = buildKodmaniWhatsAppHref(siteContact?.whatsapp, {
    locale,
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
    pagePath: typeof window !== "undefined" ? window.location.pathname : "",
    sourceLabel: "Projects Footer",
  });

  const handleFooterWhatsAppClick = () => {
    queueKodmaniApprovalLead({
      locale,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      pagePath: typeof window !== "undefined" ? window.location.pathname : "",
      sourceLabel: "Projects Footer",
    });
  };

  return (
    <footer className={styles.luxuryFooter}>
      <div className={styles.backgroundLuxury}>
        <div className={styles.goldGrid}></div>
        <div className={styles.goldGlow}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            {title || (isAr ? "مشاريع مميزة" : "Featured Projects")}
          </h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.navigationGrid}>
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={project.href} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryTitle}>{getProjectTitle(project)}</div>
                <p className={styles.categoryDescription}>
                  {getProjectMeta(project)}
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
                          alt={getProjectTitle(project)}
                          className={styles.image}
                          loading="lazy"
                        />
                      ) : (
                        <div className={styles.imageOverlay}></div>
                      )}
                      <div className={styles.imageOverlay}></div>
                    </div>
                    <div className={styles.projectInfo}>
                      <span className={styles.projectTitle}>{getProjectTitle(project)}</span>
                      <div className={styles.projectMeta}>
                        <span className={styles.projectType}>
                          {getProjectType(project)}
                        </span>
                        <span className={styles.projectArrow}>{"->"}</span>
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
                {siteContact?.phone || siteContact?.whatsapp ? (
                  <a
                    href={`tel:${siteContact?.phone || siteContact?.whatsapp}`}
                    className={styles.contactValue}
                  >
                    {siteContact?.phone || siteContact?.whatsapp}
                  </a>
                ) : (
                  <div className={styles.contactValue}>Add consultation phone</div>
                )}
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>Mail</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>Email</div>
                {siteContact?.email ? (
                  <a
                    href={`mailto:${siteContact.email}`}
                    className={styles.contactValue}
                  >
                    {siteContact.email}
                  </a>
                ) : (
                  <div className={styles.contactValue}>Add contact email</div>
                )}
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>WA</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>WhatsApp</div>
                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles.contactValue}
                    onClick={handleFooterWhatsAppClick}
                  >
                    Available
                  </a>
                ) : (
                  <div className={styles.contactValue}>Contact team</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
