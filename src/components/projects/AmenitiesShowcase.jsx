// src/components/AmenitiesShowcase.jsx
"use client";

import { useState, useRef, useMemo } from "react";
import styles from "@/styles/projects/AmenitiesShowcase.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";
import { Building } from "@phosphor-icons/react";

// ✅ Import the icon resolver
import { injectAmenityIcons } from "@/lib/amenities/phosphorIconResolver";

export default function AmenitiesShowcase({
  data,
  projectData,
  isRTL,
  locale,
}) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  if (!data || !projectData) return null;

  const [activeAmenity, setActiveAmenity] = useState(null);
  const sectionRef = useRef(null);

  // ✅ 100% guaranteed icon injection (SYNCHRONOUS)
  const amenitiesData = useMemo(() => {
    const list = Array.isArray(data?.amenities) ? data.amenities : [];
    return {
      ...data,
      amenities: injectAmenityIcons({
        amenities: list,
        locale: activeLocale,
      }),
    };
  }, [data, activeLocale]);

  // ✅ JSON-LD (SEO)
  const jsonLd = useMemo(() => {
    const projectName = getLocalizedText(
      projectData?.project?.name,
      activeLocale
    );

    return {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: projectName,
      description: getLocalizedText(
        projectData?.seo?.description,
        activeLocale
      ),
      amenities: (amenitiesData?.amenities || []).map((amenity) =>
        getLocalizedText(amenity?.label, activeLocale)
      ),
    };
  }, [amenitiesData, projectData, activeLocale]);

  return (
    <section
      ref={sectionRef}
      className={styles.amenitiesSection}
      aria-label={`${getLocalizedText(
        projectData?.project?.name,
        activeLocale
      )} ${activeIsRTL ? "المرافق" : "amenities"}`}
      dir={activeIsRTL ? "rtl" : "ltr"}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.container}>
        <h2 className={styles.title}>
          {getLocalizedText(amenitiesData?.title, activeLocale)}
        </h2>

        <div className={styles.row}>
          {(amenitiesData?.amenities || []).map((amenity, index) => {
            const label = getLocalizedText(amenity?.label, activeLocale);
            const Icon = amenity?.PhosphorIcon || Building; // 100% guaranteed

            return (
              <div key={`${label}-${index}`} className={styles.col}>
                <button
                  type="button"
                  className={`${styles.greyCard} ${
                    activeAmenity === index ? styles.greyCardActive : ""
                  }`}
                  onMouseEnter={() => setActiveAmenity(index)}
                  onMouseLeave={() => setActiveAmenity(null)}
                  onFocus={() => setActiveAmenity(index)}
                  onBlur={() => setActiveAmenity(null)}
                  aria-label={label}
                >
                  <span className={styles.iconWrapper}>
                    <Icon
                      size={60}
                      weight="thin"
                      color={amenity?.color || "#d7b46a"}
                      aria-hidden
                    />
                  </span>
                  <p className={styles.label}>{label}</p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
