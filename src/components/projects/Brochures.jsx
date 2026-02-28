"use client";
import Link from "next/link";
import styles from "@/styles/projects/ProjectIntro.module.css";

/**
 * Universal Brochures Component - Works for ALL projects
 * Handles multiple brochure types with proper link handling
 */
export default function Brochures({ brochures, projectName }) {
  if (!brochures || brochures.length === 0) return null;

  return (
    <div className={styles.actionSection}>
      {brochures.map((brochure, index) => {
        // Use <a> for external PDFs, <Link> for internal routes
        const isExternalPdf =
          brochure.url.startsWith("http") || brochure.url.endsWith(".pdf");
        const BrochureComponent = isExternalPdf ? "a" : Link;
        const brochureProps = isExternalPdf
          ? {
              href: brochure.url,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {
              href: brochure.url,
            };

        return (
          <BrochureComponent
            key={index}
            {...brochureProps}
            className={`${styles.downloadBrochure} ${
              styles[brochure.type] || styles.main
            }`}
            aria-label={`View ${projectName} ${brochure.title.toLowerCase()}`}
          >
            <span className={styles.brochureText}>
              {brochure.title || "View Brochure"}
            </span>
            <div className={styles.downloadIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 16L12 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 11L12 16L17 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 20H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </BrochureComponent>
        );
      })}
    </div>
  );
}
