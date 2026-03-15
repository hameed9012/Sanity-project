"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "@/styles/projects/MapDirections.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

function toNumber(value) {
  const parsed = typeof value === "string" ? Number(value.trim()) : Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function isValidLatLng(lat, lng) {
  return (
    typeof lat === "number" &&
    typeof lng === "number" &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}

function buildInlineMarkerEl({ isProject, label }) {
  const wrap = document.createElement("div");
  wrap.setAttribute("tabindex", "-1");
  wrap.style.display = "flex";
  wrap.style.flexDirection = "column";
  wrap.style.alignItems = "center";
  wrap.style.gap = "6px";
  wrap.style.cursor = "pointer";

  const dot = document.createElement("div");
  const size = isProject ? 22 : 16;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.borderRadius = "999px";
  dot.style.background = isProject
    ? "linear-gradient(135deg, #c9a26a 0%, #a27b43 100%)"
    : "#c9a26a";
  dot.style.border = `${isProject ? 3 : 2}px solid #f5e3b8`;
  dot.style.boxShadow = isProject
    ? "0 0 0 8px rgba(201,162,106,0.25), 0 4px 16px rgba(0,0,0,0.5)"
    : "0 0 0 5px rgba(201,162,106,0.18), 0 2px 8px rgba(0,0,0,0.4)";
  wrap.appendChild(dot);

  if (isProject && label) {
    const chip = document.createElement("div");
    chip.textContent = label;
    chip.style.background = "rgba(10,10,10,0.88)";
    chip.style.color = "#c9a26a";
    chip.style.border = "1px solid rgba(201,162,106,0.4)";
    chip.style.padding = "4px 10px";
    chip.style.borderRadius = "999px";
    chip.style.fontSize = "11px";
    chip.style.fontWeight = "600";
    chip.style.letterSpacing = "0.08em";
    chip.style.whiteSpace = "nowrap";
    chip.style.backdropFilter = "blur(6px)";
    chip.style.boxShadow = "0 4px 14px rgba(0,0,0,0.55)";
    wrap.appendChild(chip);
  }

  return wrap;
}

function buildInlinePopupEl({ title, desc, dirLabel, directionsUrl }) {
  const wrap = document.createElement("div");
  wrap.style.fontFamily = "system-ui, -apple-system, Segoe UI, Roboto, Arial";
  wrap.style.fontSize = "12px";
  wrap.style.lineHeight = "1.5";
  wrap.style.color = "#eee";
  wrap.style.maxWidth = "240px";
  wrap.style.background = "#111";
  wrap.style.borderRadius = "8px";
  wrap.style.padding = "12px 14px";

  const heading = document.createElement("div");
  heading.textContent = title || "";
  heading.style.fontWeight = "700";
  heading.style.marginBottom = "4px";
  heading.style.color = "#c9a26a";
  heading.style.fontSize = "13px";
  wrap.appendChild(heading);

  if (desc) {
    const body = document.createElement("div");
    body.textContent = desc;
    body.style.color = "#aaa";
    wrap.appendChild(body);
  }

  if (directionsUrl) {
    const link = document.createElement("a");
    link.href = directionsUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = dirLabel;
    link.style.display = "inline-block";
    link.style.marginTop = "10px";
    link.style.fontSize = "11px";
    link.style.letterSpacing = "0.14em";
    link.style.textTransform = "uppercase";
    link.style.color = "#c9a26a";
    link.style.textDecoration = "none";
    link.onmouseenter = () => {
      link.style.textDecoration = "underline";
    };
    link.onmouseleave = () => {
      link.style.textDecoration = "none";
    };
    wrap.appendChild(link);
  }

  return wrap;
}

function slugifyCategory(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function inferLandmarkCategory(icon, text, locale = "en") {
  const combined = `${icon || ""} ${text || ""}`.toLowerCase();
  const categories = [
    {
      id: "airport",
      label: { en: "Airport", ar: "المطار" },
      match: ["airport", "air", "مطار"],
    },
    {
      id: "shopping",
      label: { en: "Shopping", ar: "التسوق" },
      match: ["mall", "retail", "shopping", "دبي مول", "مول", "تسوق", "متاجر"],
    },
    {
      id: "beach",
      label: { en: "Beach", ar: "الشاطئ" },
      match: ["beach", "sea", "lagoon", "waterfront", "شاطئ", "بحر", "واجهة"],
    },
    {
      id: "downtown",
      label: { en: "City", ar: "المدينة" },
      match: ["burj", "downtown", "business", "difc", "وسط", "برج", "أعمال"],
    },
    {
      id: "school",
      label: { en: "Education", ar: "التعليم" },
      match: ["school", "university", "education", "مدرس", "جامعة", "تعليم"],
    },
    {
      id: "transport",
      label: { en: "Connectivity", ar: "الاتصال" },
      match: ["metro", "road", "highway", "access", "connect", "طريق", "مترو", "وصول"],
    },
    {
      id: "leisure",
      label: { en: "Lifestyle", ar: "نمط الحياة" },
      match: ["park", "play", "club", "lifestyle", "garden", "حديقة", "نمط", "نادي"],
    },
  ];

  const found = categories.find((category) =>
    category.match.some((term) => combined.includes(term))
  );

  if (found) return found;
  return {
    id: locale === "ar" ? "معالم" : "landmarks",
    label: { en: "Landmarks", ar: "المعالم" },
  };
}

function parseLandmarkFeature(item, locale = "en") {
  if (!item) return null;
  const rawText =
    getLocalizedText(item.text, locale) ||
    getLocalizedText(item.name, locale) ||
    String(item.text || item.name || "").trim();

  if (!rawText) return null;

  const distance =
    item.distance ||
    rawText.match(/(\d+\s*(?:min|mins|minutes|km|m)\b)/i)?.[1] ||
    rawText.match(/(\d+\s*(?:دقيقة|دقائق|كم|متر))/i)?.[1] ||
    "";

  const name = distance
    ? rawText.replace(distance, "").replace(/[-–—,:|]+/g, " ").replace(/\s+/g, " ").trim()
    : rawText;

  const category = inferLandmarkCategory(item.icon, rawText, locale);
  const lat = toNumber(item.lat ?? item.latitude);
  const lng = toNumber(item.lng ?? item.longitude);

  return {
    id: item.id || `${category.id}-${slugifyCategory(name || rawText)}`,
    categoryId: category.id,
    categoryLabel: category.label,
    icon: item.icon || "📍",
    name: name || rawText,
    description: distance ? distance : rawText,
    distance,
    lat,
    lng,
    directionsUrl: item.directionsUrl
      ? item.directionsUrl
      : isValidLatLng(lat, lng)
      ? `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
      : "",
  };
}

export default function MapDirections({ data, projectData, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : String(activeLocale).startsWith("ar");

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const lastViewportKeyRef = useRef("");

  const [mapbox, setMapbox] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [tokenError, setTokenError] = useState(false);
  const [coordError, setCoordError] = useState("");

  const normalized = useMemo(() => {
    if (data?.center && data?.categories && data?.points) return data;

    const lat = toNumber(data?.lat);
    const lng = toNumber(data?.lng);

    if (lat === null || lng === null || !isValidLatLng(lat, lng)) return null;

    const title =
      typeof data?.title === "string"
        ? { en: data.title, ar: data.title }
        : data?.title || {
            en: "Project Location",
            ar: "\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
          };

    const projectName =
      typeof data?.projectName === "string"
        ? { en: data.projectName, ar: data.projectName }
        : data?.projectName ||
          projectData?.project?.name || {
            en: "Project",
            ar: "\u0627\u0644\u0645\u0634\u0631\u0648\u0639",
          };

    const address =
      typeof data?.address === "string"
        ? { en: data.address, ar: data.address }
        : data?.address || {
            en: "Dubai, United Arab Emirates",
            ar: "\u062f\u0628\u064a\u060c \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629",
          };

    const rawProximityFeatures = Array.isArray(data?.proximityFeatures)
      ? data.proximityFeatures
      : Array.isArray(projectData?.location?.proximityFeatures)
      ? projectData.location.proximityFeatures
      : [];

    const landmarks = rawProximityFeatures
      .map((feature) => parseLandmarkFeature(feature, activeLocale))
      .filter(Boolean);

    const categories = [
      {
        id: "all",
        label: {
          en: "All Nearby",
          ar: "\u0643\u0644 \u0627\u0644\u0623\u0645\u0627\u0643\u0646",
        },
      },
      ...Array.from(
        new Map(
          landmarks.map((item) => [
            item.categoryId,
            { id: item.categoryId, label: item.categoryLabel },
          ])
        ).values()
      ),
    ];

    const landmarkPoints = landmarks
      .filter((item) => isValidLatLng(item.lat, item.lng))
      .map((item) => ({
        id: item.id,
        categoryId: item.categoryId,
        name: { en: item.name, ar: item.name },
        description: {
          en: item.distance || item.description,
          ar: item.distance || item.description,
        },
        lat: item.lat,
        lng: item.lng,
        directionsUrl: item.directionsUrl,
      }));

    return {
      title,
      center: { lat, lng },
      zoom: toNumber(data?.zoom) ?? 13,
      categories,
      landmarks,
      points: [
        {
          id: "project",
          categoryId: "all",
          name: projectName,
          description: address,
          lat,
          lng,
          directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
        },
        ...landmarkPoints,
      ],
    };
  }, [activeLocale, data, projectData]);

  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (normalized?.categories?.length) {
      setActiveCategory(normalized.categories[0].id);
    }
  }, [normalized?.categories]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const mod = await import("mapbox-gl");
        if (cancelled) return;

        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
        if (!token) {
          setTokenError(true);
          return;
        }

        mod.default.accessToken = token;
        setMapbox(mod.default);
      } catch {
        setTokenError(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!mapbox || !mapContainerRef.current) return;

    if (!normalized?.center) {
      setCoordError(
        activeIsRTL
          ? "\u0625\u062d\u062f\u0627\u062b\u064a\u0627\u062a \u0627\u0644\u0645\u0648\u0642\u0639 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629 (lat/lng)."
          : "Invalid location coordinates (lat/lng)."
      );
      return;
    }

    if (mapRef.current) return;

    const center = [normalized.center.lng, normalized.center.lat];
    const map = new mapbox.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center,
      zoom: normalized.zoom || 13,
      attributionControl: false,
      fadeDuration: 0,
      renderWorldCopies: false,
    });

    map.addControl(new mapbox.NavigationControl(), "top-right");
    map.once("load", () => setMapLoaded(true));
    mapRef.current = map;

    return () => {
      try {
        mapRef.current?.remove();
      } finally {
        mapRef.current = null;
      }
    };
  }, [activeIsRTL, mapbox, normalized]);

  useEffect(() => {
    if (!mapRef.current || !mapbox || !normalized || !mapLoaded) return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    const points = Array.isArray(normalized.points) ? normalized.points : [];
    if (!points.length) return;

    const visiblePoints = points.filter((point) => {
      if (point.id === "project") return true;
      if (!activeCategory || activeCategory === "all") return true;
      return point.categoryId === activeCategory;
    });

    if (!visiblePoints.length) return;

    const bounds = new mapbox.LngLatBounds();

    visiblePoints.forEach((point) => {
      const lat = toNumber(point.lat);
      const lng = toNumber(point.lng);
      if (lat === null || lng === null || !isValidLatLng(lat, lng)) return;

      const isProject = point.id === "project";
      const name = getLocalizedText(point.name, activeLocale) || "";
      const desc = point.description
        ? getLocalizedText(point.description, activeLocale)
        : "";
      const markerEl = buildInlineMarkerEl({
        isProject,
        label: isProject ? name : null,
      });

      const dirLabel = activeIsRTL
        ? "\u0627\u0644\u0627\u062a\u062c\u0627\u0647\u0627\u062a"
        : "Directions";
      const popupNode = buildInlinePopupEl({
        title: name,
        desc,
        dirLabel,
        directionsUrl: point.directionsUrl,
      });

      const popup = new mapbox.Popup({
        offset: 28,
        focusAfterOpen: false,
        className: "dark-popup",
      }).setDOMContent(popupNode);

      const marker = new mapbox.Marker({ element: markerEl })
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(mapRef.current);

      markersRef.current.push(marker);
      bounds.extend([lng, lat]);

      if (isProject && visiblePoints.length === 1) {
        marker.togglePopup();
      }
    });

    if (visiblePoints.length === 1) {
      const only = visiblePoints[0];
      const lat = toNumber(only.lat);
      const lng = toNumber(only.lng);
      if (lat !== null && lng !== null) {
        mapRef.current.flyTo({
          center: [lng, lat],
          zoom: normalized.zoom || 13,
          essential: true,
        });
      }
      return;
    }

    const viewportKey = visiblePoints
      .map((point) => `${point.id}:${point.lat}:${point.lng}`)
      .join("|");

    if (!bounds.isEmpty() && lastViewportKeyRef.current !== viewportKey) {
      lastViewportKeyRef.current = viewportKey;
      mapRef.current.fitBounds(bounds, {
        padding: { top: 60, bottom: 60, left: 80, right: 80 },
        duration: 450,
      });
    }
  }, [activeCategory, activeIsRTL, activeLocale, mapLoaded, mapbox, normalized]);

  const title = normalized?.title
    ? getLocalizedText(normalized.title, activeLocale)
    : activeIsRTL
      ? "\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"
      : "Project Location";

  return (
    <section className={styles.mapSection} dir={activeIsRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{title}</h2>

        {normalized?.categories?.length > 1 ? (
          <div className={styles.categoryTabs}>
            {normalized.categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`${styles.tab} ${activeCategory === category.id ? styles.tabActive : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {getLocalizedText(category.label, activeLocale)}
              </button>
            ))}
          </div>
        ) : null}

        {tokenError ? (
          <div className={styles.warning}>
            {activeIsRTL
              ? "\u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u063a\u064a\u0631 \u0645\u062a\u0627\u062d\u0629. \u0623\u0636\u0641 NEXT_PUBLIC_MAPBOX_TOKEN \u062b\u0645 \u0623\u0639\u062f \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u062e\u0627\u062f\u0645."
              : "Map is not available. Add NEXT_PUBLIC_MAPBOX_TOKEN then restart the server."}
          </div>
        ) : null}

        {coordError ? <div className={styles.warning}>{coordError}</div> : null}

        <div className={styles.mapWrapper}>
          <div ref={mapContainerRef} className={styles.mapInner} />
        </div>

        {Array.isArray(normalized?.landmarks) && normalized.landmarks.length > 0 ? (
          <div className={styles.landmarksPanel}>
            <div className={styles.landmarksHeading}>
              {activeIsRTL ? "\u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0648\u0623\u0632\u0645\u0646\u0629 \u0627\u0644\u0648\u0635\u0648\u0644" : "Key Landmarks & Travel Times"}
            </div>
            <div className={styles.landmarksGrid}>
              {normalized.landmarks
                .filter((item) => activeCategory === "all" || item.categoryId === activeCategory)
                .map((item) => (
                  <div key={item.id} className={styles.landmarkCard}>
                    <div className={styles.landmarkIcon}>{item.icon || "📍"}</div>
                    <div className={styles.landmarkContent}>
                      <div className={styles.landmarkName}>{item.name}</div>
                      <div className={styles.landmarkMeta}>
                        {item.distance || item.description || (activeIsRTL ? "\u0645\u0639\u0644\u0645 \u0642\u0631\u064a\u0628" : "Nearby landmark")}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
