"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/where-to-live/AreaConnections.module.css";

function looksLikeEmoji(value) {
  const text = String(value || "").trim();
  if (!text) return false;
  return /[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/u.test(text);
}

function normalizeIcon(icon, fallback = "📍") {
  const raw = String(icon || "").trim();
  if (!raw) return fallback;
  if (looksLikeEmoji(raw)) return raw;

  const text = raw.toLowerCase();
  if (text.includes("airport") || text.includes("plane")) return "✈️";
  if (text.includes("mall") || text.includes("shopping") || text.includes("retail")) return "🛍️";
  if (text.includes("beach") || text.includes("sea") || text.includes("water")) return "🌊";
  if (text.includes("metro") || text.includes("transport") || text.includes("road")) return "🚇";
  if (text.includes("school") || text.includes("education") || text.includes("university")) return "🎓";
  if (text.includes("business") || text.includes("tower") || text.includes("office") || text.includes("range")) return "🏙️";
  if (text.includes("park") || text.includes("garden") || text.includes("family")) return "🌳";
  if (text.includes("area") || text.includes("community") || text.includes("district")) return "🧭";
  return fallback;
}

function buildDirectionsUrl(item) {
  if (item?.directionsUrl) return item.directionsUrl;

  const lat = Number(item?.lat);
  const lng = Number(item?.lng);
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }

  return "";
}

function Section({ title, subtitle, items, renderItem, isRTL }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className={styles.section} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.sectionHeader}>
        <div className={styles.kicker}>{isRTL ? "حول المنطقة" : "Around the Area"}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.grid}>{items.map(renderItem)}</div>
    </section>
  );
}

export default function AreaConnections({ regionData }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  const landmarks = useMemo(
    () =>
      (Array.isArray(regionData?.nearbyLandmarks) ? regionData.nearbyLandmarks : []).filter(
        (item) => item?.name
      ),
    [regionData]
  );

  const nearbyAreas = useMemo(
    () =>
      (Array.isArray(regionData?.nearbyAreas) ? regionData.nearbyAreas : []).filter(
        (item) => item?.name
      ),
    [regionData]
  );

  if (!landmarks.length && !nearbyAreas.length) return null;

  return (
    <div className={styles.wrapper}>
      <Section
        isRTL={isRTL}
        title={isRTL ? "المعالم القريبة" : "Nearby Landmarks"}
        subtitle={
          isRTL
            ? "أضف المعالم المهمة من لوحة التحكم لتظهر هنا تلقائياً."
            : "Add key landmarks in Sanity and they will appear here automatically."
        }
        items={landmarks}
        renderItem={(item, index) => {
          const directionsUrl = buildDirectionsUrl(item);

          return (
            <article key={`${item.name}-${index}`} className={styles.card}>
              <div className={styles.icon}>{normalizeIcon(item.icon, "📍")}</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <p className={styles.cardMeta}>
                  {item.distance ||
                    (isRTL ? "معلم قريب من المنطقة" : "Nearby landmark")}
                </p>
                {directionsUrl ? (
                  <a
                    className={styles.link}
                    href={directionsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {isRTL ? "عرض الاتجاهات" : "Open directions"}
                  </a>
                ) : null}
              </div>
            </article>
          );
        }}
      />

      <Section
        isRTL={isRTL}
        title={isRTL ? "المناطق القريبة" : "Nearby Areas"}
        subtitle={
          isRTL
            ? "يمكنك أيضاً ربط المناطق القريبة بصفحات دليل المناطق."
            : "You can also connect nearby areas directly to their area-guide pages."
        }
        items={nearbyAreas}
        renderItem={(item, index) => {
          const content = (
            <>
              <div className={styles.icon}>{normalizeIcon(item.icon, "🧭")}</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <p className={styles.cardMeta}>
                  {item.distance || (isRTL ? "منطقة مجاورة" : "Nearby area")}
                </p>
                {item.slug ? (
                  <span className={styles.link}>
                    {isRTL ? "فتح صفحة المنطقة" : "Open area page"}
                  </span>
                ) : null}
              </div>
            </>
          );

          if (item.slug) {
            return (
              <Link
                key={`${item.name}-${index}`}
                href={`/where-to-live/${item.slug}`}
                className={`${styles.card} ${styles.cardLink}`}
              >
                {content}
              </Link>
            );
          }

          return (
            <article key={`${item.name}-${index}`} className={styles.card}>
              {content}
            </article>
          );
        }}
      />
    </div>
  );
}
