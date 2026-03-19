"use client";

import Image from "next/image";
import styles from "@/styles/projects/MasterplanViewer.module.css";

/**
 * MasterplanViewer - Displays a masterplan image/PDF prominently
 * Supports both image URLs (jpg, png, webp) and PDF URLs
 */
export default function MasterplanViewer({ masterplan, locale, isRTL }) {
  if (!masterplan || !masterplan.url) return null;

  const url = masterplan.url;
  const title = masterplan.title || (isRTL ? "المخطط الرئيسي" : "Master Plan");
  const isPdf = /\.pdf(\?|$)/i.test(url);
  const sectionTitle = isRTL ? "المخطط الرئيسي" : "Master Plan";

  return (
    <section className={styles.section} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.accent} />
          <h2 className={styles.heading}>{sectionTitle}</h2>
        </div>

        <div className={styles.content}>
          {isPdf ? (
            <div className={styles.pdfWrapper}>
              <div className={styles.pdfPlaceholder}>
                <div className={styles.pdfIcon}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2V8H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 15H15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 11H12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className={styles.pdfLabel}>{title}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  <span>
                    {isRTL ? "عرض المخطط الرئيسي" : "View Master Plan"}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 3H21V9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ) : (
            <div className={styles.imageWrapper}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageLink}
              >
                <Image
                  src={url}
                  alt={title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayText}>
                    {isRTL
                      ? "انقر لعرض الحجم الكامل"
                      : "Click to view full size"}
                  </span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
