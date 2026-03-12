"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "@/styles/projects/MapDirections.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

function toNumber(v) {
  const n = typeof v === "string" ? Number(v.trim()) : Number(v);
  return Number.isFinite(n) ? n : null;
}

function isValidLatLng(lat, lng) {
  return (
    typeof lat === "number" &&
    typeof lng === "number" &&
    lat >= -90 && lat <= 90 &&
    lng >= -180 && lng <= 180
  );
}

// ─── Dark gold pin element ────────────────────────────────────
function buildInlineMarkerEl({ isProject, label }) {
  const wrap = document.createElement("div");
  wrap.setAttribute("tabindex", "-1");
  wrap.style.display = "flex";
  wrap.style.flexDirection = "column";
  wrap.style.alignItems = "center";
  wrap.style.gap = "6px";
  wrap.style.cursor = "pointer";

  // Pin dot
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

  // Label chip — only for the main project pin
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

  const h = document.createElement("div");
  h.textContent = title || "";
  h.style.fontWeight = "700";
  h.style.marginBottom = "4px";
  h.style.color = "#c9a26a";
  h.style.fontSize = "13px";
  wrap.appendChild(h);

  if (desc) {
    const p = document.createElement("div");
    p.textContent = desc;
    p.style.color = "#aaa";
    wrap.appendChild(p);
  }

  if (directionsUrl) {
    const a = document.createElement("a");
    a.href = directionsUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = dirLabel;
    a.style.display = "inline-block";
    a.style.marginTop = "10px";
    a.style.fontSize = "11px";
    a.style.letterSpacing = "0.14em";
    a.style.textTransform = "uppercase";
    a.style.color = "#c9a26a";
    a.style.textDecoration = "none";
    a.onmouseenter = () => (a.style.textDecoration = "underline");
    a.onmouseleave = () => (a.style.textDecoration = "none");
    wrap.appendChild(a);
  }

  return wrap;
}

export default function MapDirections({ data, projectData, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : String(activeLocale).startsWith("ar");

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  const [mapbox, setMapbox] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [tokenError, setTokenError] = useState(false);
  const [coordError, setCoordError] = useState("");

  const normalized = useMemo(() => {
    if (data && data.center && data.categories && data.points) return data;

    const lat = toNumber(data?.lat);
    const lng = toNumber(data?.lng);

    if (lat === null || lng === null || !isValidLatLng(lat, lng)) return null;

    const title =
      typeof data?.title === "string"
        ? { en: data.title, ar: data.title }
        : data?.title || { en: "Project Location", ar: "موقع المشروع" };

    const projectName =
      typeof data?.projectName === "string"
        ? { en: data.projectName, ar: data.projectName }
        : data?.projectName ||
          projectData?.project?.name || { en: "Project", ar: "المشروع" };

    const address =
      typeof data?.address === "string"
        ? { en: data.address, ar: data.address }
        : data?.address || {
            en: "Dubai, United Arab Emirates",
            ar: "دبي، الإمارات العربية المتحدة",
          };

    const zoom = toNumber(data?.zoom) ?? 13;

    return {
      title,
      center: { lat, lng },
      zoom,
      categories: [{ id: "all", label: { en: "All Nearby", ar: "كل الأماكن" } }],
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
      ],
    };
  }, [data, projectData]);

  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (normalized?.categories?.length) {
      setActiveCategory(normalized.categories[0].id);
    }
  }, [normalized?.categories]);

  // Load mapbox
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mod = await import("mapbox-gl");
        if (cancelled) return;
        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
        if (!token) { setTokenError(true); return; }
        mod.default.accessToken = token;
        setMapbox(mod.default);
      } catch {
        setTokenError(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Init map — DARK style
  useEffect(() => {
    if (!mapbox || !mapContainerRef.current) return;

    if (!normalized?.center) {
      setCoordError(
        activeIsRTL
          ? "إحداثيات الموقع غير صحيحة (lat/lng)."
          : "Invalid location coordinates (lat/lng)."
      );
      return;
    }

    if (mapRef.current) return;

    const center = [normalized.center.lng, normalized.center.lat];

    const map = new mapbox.Map({
      container: mapContainerRef.current,
      // ✅ Dark map style
      style: "mapbox://styles/mapbox/dark-v11",
      center,
      zoom: normalized.zoom || 13,
    });

    map.addControl(new mapbox.NavigationControl(), "top-right");
    map.once("load", () => setMapLoaded(true));
    mapRef.current = map;

    return () => {
      try { mapRef.current?.remove(); } finally { mapRef.current = null; }
    };
  }, [mapbox, normalized, activeIsRTL]);

  // Markers update — only fires after map style has fully loaded
  useEffect(() => {
    if (!mapRef.current || !mapbox || !normalized || !mapLoaded) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    const points = Array.isArray(normalized.points) ? normalized.points : [];
    if (!points.length) return;

    const visiblePoints = points.filter((p) => {
      if (p.id === "project") return true;
      if (!activeCategory || activeCategory === "all") return true;
      return p.categoryId === activeCategory;
    });

    if (!visiblePoints.length) return;

    const bounds = new mapbox.LngLatBounds();

    visiblePoints.forEach((pt) => {
      const lat = toNumber(pt.lat);
      const lng = toNumber(pt.lng);
      if (lat === null || lng === null || !isValidLatLng(lat, lng)) return;

      const isProject = pt.id === "project";
      const name = getLocalizedText(pt.name, activeLocale) || "";
      const desc = pt.description ? getLocalizedText(pt.description, activeLocale) : "";

      // ✅ Pass project name to the pin label (only for main project pin)
      const el = buildInlineMarkerEl({ isProject, label: isProject ? name : null });

      const dirLabel = activeIsRTL ? "الاتجاهات" : "Directions";
      const popupNode = buildInlinePopupEl({
        title: name,
        desc,
        dirLabel,
        directionsUrl: pt.directionsUrl,
      });

      const popup = new mapbox.Popup({
        offset: 28,
        focusAfterOpen: false,
        className: "dark-popup",
      }).setDOMContent(popupNode);

      const marker = new mapbox.Marker({ element: el })
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(mapRef.current);

      markersRef.current.push(marker);
      bounds.extend([lng, lat]);

      if (isProject) marker.togglePopup();
    });

    if (visiblePoints.length === 1) {
      const only = visiblePoints[0];
      const lat = toNumber(only.lat);
      const lng = toNumber(only.lng);
      if (lat !== null && lng !== null) {
        mapRef.current.flyTo({ center: [lng, lat], zoom: normalized.zoom || 13, essential: true });
      }
      return;
    }

    if (!bounds.isEmpty()) {
      mapRef.current.fitBounds(bounds, {
        padding: { top: 60, bottom: 60, left: 80, right: 80 },
        duration: 700,
      });
    }
  }, [activeCategory, normalized, activeLocale, activeIsRTL, mapbox, mapLoaded]);

  const title = normalized?.title
    ? getLocalizedText(normalized.title, activeLocale)
    : activeIsRTL ? "موقع المشروع" : "Project Location";

  return (
    <section className={styles.mapSection} dir={activeIsRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{title}</h2>

        {tokenError && (
          <div className={styles.warning}>
            {activeIsRTL
              ? "الخريطة غير متاحة. أضف NEXT_PUBLIC_MAPBOX_TOKEN ثم أعد تشغيل السيرفر."
              : "Map is not available. Add NEXT_PUBLIC_MAPBOX_TOKEN then restart the server."}
          </div>
        )}

        {coordError && <div className={styles.warning}>{coordError}</div>}

        <div className={styles.mapWrapper}>
          <div ref={mapContainerRef} className={styles.mapInner} />
        </div>
      </div>
    </section>
  );
}