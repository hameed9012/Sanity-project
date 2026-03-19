"use client";

import React, { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "@/styles/MarketAnalysisMap/MarketAnalysisMap.module.css";
import { PROJECT_DATA_MAP } from "@/lib/project-data";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { DUBAI_AREAS_GEOJSON } from "@/data/dubai-areas-geojson";

/* ==========================================================================
   Data extraction helpers (unchanged from original)
========================================================================== */
function extractLatLngFromProjectData(projectData, locale = "en") {
  const localeData = projectData?.[locale];
  const lat = localeData?.location?.lat;
  const lng = localeData?.location?.lng;
  if (typeof lat === "number" && !isNaN(lat) && typeof lng === "number" && !isNaN(lng)) {
    return { lat, lng };
  }
  const enData = projectData?.en;
  const enLat = enData?.location?.lat;
  const enLng = enData?.location?.lng;
  if (typeof enLat === "number" && !isNaN(enLat) && typeof enLng === "number" && !isNaN(enLng)) {
    return { lat: enLat, lng: enLng };
  }
  return null;
}

function extractCompletionStatus(projectData, locale = "en") {
  const localeData = projectData?.[locale];
  const status = localeData?.project?.status || "";
  const s = String(status).toLowerCase().trim();
  if (s.includes("off-plan") || s.includes("off plan") || s.includes("offplan") || s.includes("تحت الإنشاء")) return "Off-plan";
  if (s.includes("ready") || s.includes("existing") || s.includes("جاهز") || s.includes("قائم")) return "Ready";
  if (s.includes("completed") || s.includes("منجز")) return "Completed";
  if (s.includes("almost") || s.includes("شبه جاهز")) return "Almost Ready";
  if (s.includes("launched") || s.includes("تم الإطلاق")) return "Just Launched";
  return "Show All";
}

function extractPropertyType(projectData, locale = "en") {
  const localeData = projectData?.[locale];
  const type = localeData?.project?.type || "";
  const units = localeData?.project?.units || "";
  const combined = (type + " " + units).toLowerCase();
  if (combined.includes("villa") || combined.includes("فيلا")) return "Villa";
  if (combined.includes("penthouse") || combined.includes("penth") || combined.includes("بنتهاوس") || combined.includes("دوبلكس")) return "Penthouse";
  if (combined.includes("commercial") || combined.includes("retail") || combined.includes("office") || combined.includes("تجاري") || combined.includes("مكتبي")) return "Commercial";
  return "Apartment";
}

function extractStartingPrice(projectData) {
  const enProject = projectData?.en?.project;
  const enPrice = enProject?.startingPrice;
  if (enPrice) { const parsed = parseAED(enPrice); if (parsed !== null && parsed > 0) return parsed; }
  const arProject = projectData?.ar?.project;
  const arPrice = arProject?.startingPrice;
  if (arPrice) { const parsed = parseAED(arPrice); if (parsed !== null && parsed > 0) return parsed; }
  const enPlans = projectData?.en?.floorPlans?.plans || [];
  let minPrice = null;
  for (const plan of enPlans) {
    const planSpecs = plan.specs || {};
    for (const key of ["Starting Price","Price","startingPrice","السعر الابتدائي","السعر"]) {
      if (planSpecs[key]) {
        const parsed = parseAED(planSpecs[key]);
        if (parsed !== null && parsed > 0) { if (minPrice === null || parsed < minPrice) minPrice = parsed; }
      }
    }
  }
  return minPrice;
}

function extractPricePerSqft(projectData) {
  const plans = projectData?.en?.floorPlans?.plans || [];
  let minPpsf = null;
  for (const plan of plans) {
    const specs = plan.specs || {};
    const area = extractAreaFromSpecs(specs);
    const price = extractPriceFromSpecs(specs);
    if (area !== null && price !== null && area > 0) {
      const ppsf = price / area;
      if (minPpsf === null || ppsf < minPpsf) minPpsf = ppsf;
    }
  }
  return minPpsf;
}

function extractAreaFromSpecs(specs) {
  for (const key of ["Total Area","Area","المساحة الإجمالية","المساحة","Total","إجمالي المساحة","المساحة الكلية"]) {
    if (specs[key]) { const parsed = parseSqft(specs[key]); if (parsed !== null && parsed > 0) return parsed; }
  }
  return null;
}

function extractPriceFromSpecs(specs) {
  for (const key of ["Starting Price","Price","startingPrice","السعر الابتدائي","السعر","يبدأ من"]) {
    if (specs[key]) { const parsed = parseAED(specs[key]); if (parsed !== null && parsed > 0) return parsed; }
  }
  return null;
}

function extractBedroomRange(projectData) {
  const plans = projectData?.en?.floorPlans?.plans || [];
  let minBeds = Infinity, maxBeds = 0, hasStudio = false;
  for (const plan of plans) {
    let beds = plan.bedrooms;
    if (typeof beds === "string") beds = parseFloat(beds);
    if (beds === 0) { hasStudio = true; continue; }
    if (typeof beds === "number" && !isNaN(beds) && beds > 0) {
      minBeds = Math.min(minBeds, beds);
      maxBeds = Math.max(maxBeds, beds);
    }
  }
  return {
    minBeds: minBeds === Infinity ? null : minBeds,
    maxBeds: maxBeds === 0 ? null : maxBeds,
    hasStudio,
  };
}

function extractAreaRange(projectData) {
  const plans = projectData?.en?.floorPlans?.plans || [];
  let minArea = null, maxArea = null;
  for (const plan of plans) {
    const area = extractAreaFromSpecs(plan.specs || {});
    if (area !== null && area > 0) {
      if (minArea === null || area < minArea) minArea = area;
      if (maxArea === null || area > maxArea) maxArea = area;
    }
  }
  return { minArea, maxArea };
}

function extractSidebarData(projectData, locale = "en") {
  const localeData = projectData?.[locale] || projectData?.en || {};
  const project = localeData.project || {};
  const location = localeData.location || {};
  const gallery = localeData.gallery || {};
  const heroImage = localeData.hero?.backgroundUrl || gallery?.slides?.[0]?.url || null;
  return {
    heroImage,
    description: project.description || "",
    community: location.community || location.area || "",
    developer: project.developer || "",
    completionDate: project.handover || project.completionDate || "",
    paymentPlan: project.paymentPlan || "",
  };
}

function parseAED(str) {
  if (typeof str === "number") return str;
  if (!str) return null;
  const s = String(str).replace(/[^0-9.,BMKmk]/g, "").toLowerCase();
  if (!s) return null;
  const n = parseFloat(s.replace(/,/g, ""));
  if (isNaN(n)) return null;
  if (str.toString().toLowerCase().includes("b")) return n * 1e9;
  if (str.toString().toLowerCase().includes("m")) return n * 1e6;
  if (str.toString().toLowerCase().includes("k")) return n * 1e3;
  return n;
}

function parseSqft(str) {
  if (typeof str === "number") return str;
  if (!str) return null;
  const s = String(str).replace(/[^0-9.,]/g, "");
  const n = parseFloat(s.replace(/,/g, ""));
  return isNaN(n) ? null : n;
}

function buildMarketProjectsIndex(projectMap, locale = "en") {
  const projects = [];
  for (const [slug, projectData] of Object.entries(projectMap)) {
    try {
      const coords = extractLatLngFromProjectData(projectData, locale);
      if (!coords) continue;
      const localeData = projectData?.[locale] || projectData?.en || {};
      const projectLocale = localeData.project || {};
      const propertyType = extractPropertyType(projectData, locale);
      const completionStatus = extractCompletionStatus(projectData, locale);
      const startingPrice = extractStartingPrice(projectData);
      const priceSqft = extractPricePerSqft(projectData);
      const bedroomRange = extractBedroomRange(projectData);
      const areaRange = extractAreaRange(projectData);
      const sidebarData = extractSidebarData(projectData, locale);
      projects.push({
        slug, name: projectLocale.name || slug.replace(/-/g, " "),
        lat: coords.lat, lng: coords.lng,
        propertyType, completionStatus,
        minBedrooms: bedroomRange.minBeds, maxBedrooms: bedroomRange.maxBeds,
        hasStudio: bedroomRange.hasStudio, startingPrice, priceSqft,
        minArea: areaRange.minArea, maxArea: areaRange.maxArea,
        raw: projectData, sidebar: sidebarData,
      });
    } catch (e) { /* skip */ }
  }
  return projects;
}

const MARKET_INDEX_CACHE = new Map();

function getCachedMarketProjectsIndex(locale = "en") {
  const key = String(locale || "en");
  if (MARKET_INDEX_CACHE.has(key)) return MARKET_INDEX_CACHE.get(key);
  const result = buildMarketProjectsIndex(PROJECT_DATA_MAP, key);
  MARKET_INDEX_CACHE.set(key, result);
  return result;
}

function buildGeoJSONAll(projects) {
  return {
    type: "FeatureCollection",
    features: projects.map((p) => ({
      type: "Feature",
      properties: {
        slug: p.slug, name: p.name, propertyType: p.propertyType,
        completionStatus: p.completionStatus, minBedrooms: p.minBedrooms,
        maxBedrooms: p.maxBedrooms, hasStudio: p.hasStudio,
        startingPrice: p.startingPrice, priceSqft: p.priceSqft,
        minArea: p.minArea, maxArea: p.maxArea,
        developer: p.sidebar?.developer || "", community: p.sidebar?.community || "",
        description: p.sidebar?.description || "", completionDate: p.sidebar?.completionDate || "",
        paymentPlan: p.sidebar?.paymentPlan || "",
      },
      geometry: { type: "Point", coordinates: [p.lng, p.lat] },
    })),
  };
}

function buildMapboxFilter({ propertyType, beds, completionStatus, priceMetricKey, appliedMin, appliedMax }) {
  const f = ["all"];
  if (propertyType && propertyType !== "All") f.push(["==", ["get", "propertyType"], propertyType]);
  if (completionStatus && completionStatus !== "Show All") f.push(["==", ["get", "completionStatus"], completionStatus]);
  if (beds != null) {
    if (beds === "studio") f.push(["==", ["get", "hasStudio"], true]);
    else if (beds === 6) f.push([">=", ["get", "maxBedrooms"], 6]);
    else { f.push(["<=", ["get", "minBedrooms"], beds]); f.push([">=", ["get", "maxBedrooms"], beds]); }
  }
  const hasMin = isFiniteNumber(appliedMin) && appliedMin !== 0;
  const hasMax = isFiniteNumber(appliedMax);
  if (hasMin || hasMax) {
    f.push(["has", priceMetricKey]);
    if (hasMin) f.push([">=", ["get", priceMetricKey], appliedMin]);
    if (hasMax) f.push(["<=", ["get", priceMetricKey], appliedMax]);
  }
  return f;
}

/* ==========================================================================
   Formatting helpers
========================================================================== */
function isFiniteNumber(n) { return typeof n === "number" && Number.isFinite(n); }
function formatNumber(n) { if (!isFiniteNumber(n)) return "—"; return n.toLocaleString("en-US"); }
function formatCurrencyAED(n, locale = "en") {
  if (!isFiniteNumber(n)) return "—";
  const prefix = locale === "ar" ? "د.إ " : "AED ";
  if (n >= 1e9) return `${prefix}${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `${prefix}${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `${prefix}${(n / 1e3).toFixed(1)}K`;
  return `${prefix}${formatNumber(Math.round(n))}`;
}
function formatMetric(n, metricKey, locale = "en") {
  if (!isFiniteNumber(n)) return "—";
  if (metricKey === "priceSqft") return `${formatNumber(Math.round(n))} ${locale === "ar" ? "د.إ/قدم²" : "AED/sqft"}`;
  return formatCurrencyAED(n, locale);
}
function getMetricValue(p, metricKey) {
  const v = p?.[metricKey];
  return isFiniteNumber(v) ? v : null;
}

/* ==========================================================================
   Area mode helpers
========================================================================== */
// Build enriched GeoJSON by joining DUBAI_AREAS_GEOJSON with DLD stats.
// Join key = feature.properties.dldName (internal DLD municipality name)
// Display name = feature.properties.name (common marketing name)
function buildAreaGeoJSON(areaStats) {
  return {
    type: "FeatureCollection",
    features: DUBAI_AREAS_GEOJSON.features.map((feature) => {
      const dldName  = feature.properties.dldName;  // join key
      const stats = areaStats[dldName] || {};
      return {
        ...feature,
        properties: {
          ...feature.properties,
          ...stats,
          // ensure numeric fields for Mapbox expressions
          rentalYield:         stats.rentalYield         ?? 0,
          capitalAppreciation: stats.capitalAppreciation ?? 0,
          totalROI:            stats.totalROI            ?? 0,
          avgPriceSqft:        stats.avgPriceSqft        ?? 0,
          avgSalePrice:        stats.avgSalePrice        ?? 0,
          transactionCount:    stats.transactionCount    ?? 0,
          hasData:             !!stats.avgPriceSqft,
        },
      };
    }),
  };
}

// Color scale for area heatmap (dark purple → gold)
const AREA_COLOR_STOPS = {
  rentalYield:         [0, "#1a1a2e", 3, "#16213e", 5, "#0f3460", 7, "#533483", 9, "#e94560", 12, "#f5a623"],
  capitalAppreciation: [0, "#1a1a2e", 5, "#16213e", 8, "#0f3460", 12, "#533483", 16, "#e94560", 20, "#f5a623"],
  totalROI:            [0, "#1a1a2e", 8, "#16213e", 12, "#0f3460", 16, "#533483", 20, "#e94560", 25, "#f5a623"],
  avgPriceSqft:        [0, "#1a1a2e", 500, "#16213e", 1000, "#0f3460", 1500, "#533483", 2000, "#e94560", 3000, "#f5a623"],
};

function buildAreaColorExpression(metricKey) {
  const stops = AREA_COLOR_STOPS[metricKey] || AREA_COLOR_STOPS.totalROI;
  const expr = ["interpolate", ["linear"], ["get", metricKey]];
  for (let i = 0; i < stops.length; i += 2) {
    expr.push(stops[i], stops[i + 1]);
  }
  return expr;
}

/* ==========================================================================
   UI Constants
========================================================================== */
const VIEW_MODES = [
  { key: "projects", labelEn: "Projects", labelAr: "مشاريع" },
  { key: "areas",    labelEn: "Areas",    labelAr: "مناطق"  },
];

const AREA_METRICS = [
  { key: "totalROI",            labelEn: "Total ROI %",           labelAr: "إجمالي العائد %",        unit: "%"        },
  { key: "rentalYield",         labelEn: "Rental Yield %",        labelAr: "العائد الإيجاري %",       unit: "%"        },
  { key: "capitalAppreciation", labelEn: "Capital Appreciation %",labelAr: "تقدير رأس المال %",       unit: "%"        },
  { key: "avgPriceSqft",        labelEn: "Avg Price /sqft",       labelAr: "متوسط السعر/قدم²",        unit: "AED/sqft" },
];

const PROJECT_METRICS = [
  { key: "priceSqft",     label: "Price /sqft",     unit: "AED/sqft" },
  { key: "startingPrice", label: "Starting Price",   unit: "AED"      },
];

const COMPLETION_OPTIONS = ["Show All","Ready","Off-plan","Completed","Almost Ready","Just Launched"];
const BED_OPTIONS = [
  { value: null,     label: "All Beds" },
  { value: "studio", label: "Studio"   },
  { value: 1,        label: "1 Bed"    },
  { value: 2,        label: "2 Beds"   },
  { value: 3,        label: "3 Beds"   },
  { value: 4,        label: "4 Beds"   },
  { value: 5,        label: "5 Beds"   },
  { value: 6,        label: "6+ Beds"  },
];

/* ==========================================================================
   Main Component
========================================================================== */
export default function MarketAnalysisMap() {
  const router = useRouter();
  const { locale } = useLanguage();
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const mapInitialized = useRef(false);
  const isRTL = locale === "ar";

  // ── View mode ──────────────────────────────────────────────────────────
  const [viewMode, setViewMode] = useState("projects"); // "projects" | "areas"

  // ── Shared state ───────────────────────────────────────────────────────
  const [is3D, setIs3D] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // ── Projects mode state ────────────────────────────────────────────────
  const [metricKey, setMetricKey] = useState("priceSqft");
  const [searchOpen, setSearchOpen] = useState(false);
  const [propertyType, setPropertyType] = useState("All");
  const [beds, setBeds] = useState(null);
  const [completionStatus, setCompletionStatus] = useState("Show All");
  const [priceModalTab, setPriceModalTab] = useState("Starting Price");
  const [priceMinInput, setPriceMinInput] = useState("");
  const [priceMaxInput, setPriceMaxInput] = useState("Maximum");
  const [appliedMin, setAppliedMin] = useState(0);
  const [appliedMax, setAppliedMax] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Areas mode state ───────────────────────────────────────────────────
  const [areaMetricKey, setAreaMetricKey] = useState("totalROI");
  const [areaStats, setAreaStats] = useState(null);  // raw from API
  const [areaLoading, setAreaLoading] = useState(false);
  const [areaError, setAreaError] = useState(null);
  const [areaDataSource, setAreaDataSource] = useState(null); // "file" | "cache" | "empty"
  const [areaDataAsOf, setAreaDataAsOf] = useState(null);
  const [areaMinROI,     setAreaMinROI]     = useState("");
  const [areaMaxPrice,   setAreaMaxPrice]   = useState("");
  const [areaMinTxn,     setAreaMinTxn]     = useState(0);
  const [areaFilterOpen, setAreaFilterOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);  // { name, stats }
  const [areaSidebarOpen, setAreaSidebarOpen] = useState(false);

  // ── Projects data ──────────────────────────────────────────────────────
  const allProjects = useMemo(() => getCachedMarketProjectsIndex(locale), [locale]);

  const selectedProject = useMemo(() => {
    if (!selectedSlug) return null;
    return allProjects.find((p) => p.slug === selectedSlug) || null;
  }, [selectedSlug, allProjects]);

  const priceMetricKey = useMemo(() => priceModalTab === "Price /sqft" ? "priceSqft" : "startingPrice", [priceModalTab]);
  const metricLabel = useMemo(() => PROJECT_METRICS.find((m) => m.key === metricKey)?.label || "Metric", [metricKey]);

  const mapboxFilter = useMemo(() => buildMapboxFilter({ propertyType, beds, completionStatus, priceMetricKey, appliedMin, appliedMax }), [propertyType, beds, completionStatus, priceMetricKey, appliedMin, appliedMax]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      if (propertyType !== "All" && p.propertyType !== propertyType) return false;
      if (completionStatus !== "Show All" && p.completionStatus !== completionStatus) return false;
      if (beds != null) {
        if (beds === "studio" && !p.hasStudio) return false;
        if (typeof beds === "number" && beds !== "studio") {
          if (p.minBedrooms == null || p.maxBedrooms == null) return false;
          if (beds < p.minBedrooms || beds > p.maxBedrooms) return false;
        }
      }
      if (appliedMin > 0) { const v = p[priceMetricKey]; if (!v || v < appliedMin) return false; }
      if (appliedMax != null) { const v = p[priceMetricKey]; if (!v || v > appliedMax) return false; }
      return true;
    });
  }, [allProjects, propertyType, completionStatus, beds, appliedMin, appliedMax, priceMetricKey]);

  const filteredGeoJSON = useMemo(() => buildGeoJSONAll(filteredProjects), [filteredProjects]);

  const searchResults = useMemo(() => {
    if (!deferredSearchQuery.trim()) return [];
    const q = deferredSearchQuery.toLowerCase();
    return allProjects.filter((p) => p.name.toLowerCase().includes(q) || p.sidebar?.community?.toLowerCase?.().includes(q)).slice(0, 10);
  }, [deferredSearchQuery, allProjects]);

  // ── Area GeoJSON with stats joined ─────────────────────────────────────
  // ── Area GeoJSON with stats joined (and filtered) ──────────────────────
  const areaGeoJSON = useMemo(() => buildAreaGeoJSON(areaStats || {}), [areaStats]);

  // filtered subset — applied as Mapbox filter expression on area layers
  const areaMapboxFilter = useMemo(() => {
    const f = ["all"];
    const minROI = parseFloat(areaMinROI);
    const maxPsf = parseFloat(areaMaxPrice);
    const minTxn = parseInt(areaMinTxn) || 0;
    if (!isNaN(minROI) && minROI > 0) {
      f.push([">=", ["get", "totalROI"], minROI]);
    }
    if (!isNaN(maxPsf) && maxPsf > 0) {
      f.push(["<=", ["get", "avgPriceSqft"], maxPsf]);
    }
    if (minTxn > 0) {
      f.push([">=", ["get", "transactionCount"], minTxn]);
    }
    f.push(["==", ["get", "hasData"], true]);
    return f;
  }, [areaMinROI, areaMaxPrice, areaMinTxn]);

  const activeAreaFiltersCount = useMemo(() => {
    let c = 0;
    if (parseFloat(areaMinROI) > 0) c++;
    if (parseFloat(areaMaxPrice) > 0) c++;
    if (parseInt(areaMinTxn) > 0) c++;
    return c;
  }, [areaMinROI, areaMaxPrice, areaMinTxn]);


  // ── Fetch area stats ───────────────────────────────────────────────────
  const fetchAreaStats = useCallback(async () => {
    if (areaStats) return; // already loaded
    setAreaLoading(true);
    setAreaError(null);
    try {
      const res = await fetch("/api/dld-areas", { cache: "no-store" });
      const json = await res.json();
      if (json.ok) {
        setAreaStats(json.data);
        setAreaDataSource(json.source);
        setAreaDataAsOf(json.dataAsOf || null);
      } else {
        setAreaError(json.error || "Failed to load area data");
        setAreaStats(json.data || {}); // use mock fallback if included
      }
    } catch (e) {
      setAreaError(e.message);
    } finally {
      setAreaLoading(false);
    }
  }, [areaStats]);

  // Fetch area stats when entering areas mode
  useEffect(() => {
    if (viewMode === "areas") fetchAreaStats();
  }, [viewMode, fetchAreaStats]);

  // ── Map init ───────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      if (mapInitialized.current) return;

      const mapboxgl = (await import("mapbox-gl")).default;
      if (cancelled || !mapContainerRef.current) return;

      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
      if (!token) { console.error("Missing NEXT_PUBLIC_MAPBOX_TOKEN"); return; }

      mapboxgl.accessToken = token;
      if (mapRef.current) return;
      mapInitialized.current = true;

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [55.2708, 25.2048],
        zoom: 10,
        pitch: 0,
        bearing: 0,
        antialias: true,
        attributionControl: false,
        optimizeForTerrain: true,
        maxPitch: 85,
        maxZoom: 22,
        minZoom: 5,
      });

      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
      map.addControl(new mapboxgl.ScaleControl({ maxWidth: 100, unit: "metric" }), "bottom-left");

      map.on("load", () => {
        if (cancelled) return;
        mapRef.current = map;

        // ── Project layers ────────────────────────────────────────────
        map.addSource("market-points", {
          type: "geojson",
          // Keep the source aligned with the memoized dataset used by later updates.
          data: filteredGeoJSON,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        });

        map.addLayer({
          id: "clusters", type: "circle", source: "market-points",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": ["step", ["get", "point_count"], "#60a5fa", 10, "#3b82f6", 30, "#1d4ed8"],
            "circle-radius": ["step", ["get", "point_count"], 15, 10, 20, 30, 25],
            "circle-opacity": 0.9, "circle-stroke-width": 2, "circle-stroke-color": "#ffffff",
          },
        });
        map.addLayer({
          id: "cluster-count", type: "symbol", source: "market-points",
          filter: ["has", "point_count"],
          layout: { "text-field": "{point_count_abbreviated}", "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"], "text-size": 12 },
          paint: { "text-color": "#ffffff" },
        });
        map.addLayer({
          id: "market-dots", type: "circle", source: "market-points",
          filter: ["!", ["has", "point_count"]],
          paint: {
            "circle-color": "#3b82f6",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 8, 10, 12, 14, 16],
            "circle-stroke-width": 2, "circle-stroke-color": "#ffffff", "circle-opacity": 0.9,
          },
        });
        map.addLayer({
          id: "market-dots-hover", type: "circle", source: "market-points",
          filter: ["==", ["get", "slug"], ""],
          paint: {
            "circle-color": "#60a5fa",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 12, 10, 16, 14, 20],
            "circle-stroke-width": 3, "circle-stroke-color": "#ffffff", "circle-opacity": 1,
          },
        });
        map.addSource("selected-point", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
        map.addLayer({
          id: "selected-ring", type: "circle", source: "selected-point",
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 20, 10, 24, 14, 30],
            "circle-color": "transparent", "circle-stroke-width": 3, "circle-stroke-color": "#f59e0b", "circle-opacity": 1,
          },
        });

        // ── Area layers ────────────────────────────────────────────────
        map.addSource("area-polygons", {
          type: "geojson",
          data: { type: "FeatureCollection", features: [] }, // populated later
        });

        // Fill layer (heatmap)
        map.addLayer({
          id: "area-fill", type: "fill", source: "area-polygons",
          layout: { visibility: "none" },
          paint: {
            "fill-color": ["case", ["get", "hasData"], ["interpolate", ["linear"], ["get", "totalROI"], 0, "#1a1a2e", 8, "#0f3460", 16, "#533483", 22, "#e94560", 28, "#f5a623"], "#1a1a2e"],
            "fill-opacity": 0.75,
          },
        });

        // Extrusion layer (3D)
        map.addLayer({
          id: "area-extrusion", type: "fill-extrusion", source: "area-polygons",
          layout: { visibility: "none" },
          paint: {
            "fill-extrusion-color": ["case", ["get", "hasData"], ["interpolate", ["linear"], ["get", "totalROI"], 0, "#1a1a2e", 8, "#0f3460", 16, "#533483", 22, "#e94560", 28, "#f5a623"], "#1a1a2e"],
            "fill-extrusion-height": ["*", ["get", "totalROI"], 2000],
            "fill-extrusion-base": 0,
            "fill-extrusion-opacity": 0.85,
          },
        });

        // Outline
        map.addLayer({
          id: "area-outline", type: "line", source: "area-polygons",
          layout: { visibility: "none" },
          paint: { "line-color": "rgba(255,255,255,0.3)", "line-width": 1 },
        });

        // Hover highlight
        map.addLayer({
          id: "area-hover", type: "fill", source: "area-polygons",
          filter: ["==", ["get", "dldName"], ""],
          layout: { visibility: "none" },
          paint: { "fill-color": "rgba(255,255,255,0.15)", "fill-outline-color": "rgba(255,255,255,0.8)" },
        });

        // ── Project dot click ─────────────────────────────────────────
        map.on("click", "market-dots", (e) => {
          const feature = e.features?.[0];
          if (!feature) return;
          const slug = feature.properties?.slug;
          if (!slug) return;
          setSelectedSlug(slug);
          setSidebarOpen(true);
          map.getSource("selected-point").setData({
            type: "FeatureCollection",
            features: [{ type: "Feature", properties: {}, geometry: feature.geometry }],
          });
        });

        // ── Area polygon click ─────────────────────────────────────────
        map.on("click", "area-fill", (e) => {
          const feature = e.features?.[0];
          if (!feature) return;
          const dldName    = feature.properties?.dldName;
          const displayName = feature.properties?.name || dldName;
          const nameAr     = feature.properties?.areaNameAr || displayName;
          if (!dldName) return;
          setSelectedArea({ name: displayName, dldName, nameAr, stats: feature.properties });
          setAreaSidebarOpen(true);
          map.setFilter("area-hover", ["==", ["get", "dldName"], dldName]);
        });

        map.on("click", "area-extrusion", (e) => {
          const feature = e.features?.[0];
          if (!feature) return;
          const dldName    = feature.properties?.dldName;
          const displayName = feature.properties?.name || dldName;
          const nameAr     = feature.properties?.areaNameAr || displayName;
          if (!dldName) return;
          setSelectedArea({ name: displayName, dldName, nameAr, stats: feature.properties });
          setAreaSidebarOpen(true);
          map.setFilter("area-hover", ["==", ["get", "dldName"], dldName]);
        });

        // Hover highlight for project dots
        map.on("mousemove", "market-dots", (e) => {
          map.getCanvas().style.cursor = "pointer";
          const slug = e.features?.[0]?.properties?.slug;
          if (slug) map.setFilter("market-dots-hover", ["==", ["get", "slug"], slug]);
        });
        map.on("mouseleave", "market-dots", () => {
          map.getCanvas().style.cursor = "";
          map.setFilter("market-dots-hover", ["==", ["get", "slug"], ""]);
        });

        // Cursor for other interactive layers
        for (const layer of ["clusters", "area-fill", "area-extrusion"]) {
          map.on("mouseenter", layer, () => { map.getCanvas().style.cursor = "pointer"; });
          map.on("mouseleave", layer, () => { map.getCanvas().style.cursor = ""; });
        }

        setMapLoaded(true);
      });
    };

    init();
    return () => { cancelled = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── 3D toggle ──────────────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;
    if (is3D) {
      map.easeTo({ pitch: 60, bearing: -20, duration: 1500, essential: true });
      if (!map.getSource("mapbox-dem")) {
        map.addSource("mapbox-dem", { type: "raster-dem", url: "mapbox://mapbox.mapbox-terrain-dem-v1", tileSize: 512, maxzoom: 14 });
      }
      setTimeout(() => { try { map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 }); } catch (e) {} }, 500);
    } else {
      map.easeTo({ pitch: 0, bearing: 0, duration: 1200, essential: true });
      try { if (map.getTerrain()) map.setTerrain(null); } catch (e) {}
    }
  }, [is3D, mapLoaded]);

  // ── Switch view mode layers ────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;

    const projectLayers = ["clusters", "cluster-count", "market-dots", "market-dots-hover", "selected-ring"];
    const areaLayers    = ["area-fill", "area-outline", "area-hover", ...(is3D ? ["area-extrusion"] : [])];
    const areaHideLayers= ["area-fill", "area-extrusion", "area-outline", "area-hover"];

    if (viewMode === "projects") {
      projectLayers.forEach((l) => { try { map.setLayoutProperty(l, "visibility", "visible"); } catch {} });
      areaHideLayers.forEach((l) => { try { map.setLayoutProperty(l, "visibility", "none"); } catch {} });
    } else {
      projectLayers.forEach((l) => { try { map.setLayoutProperty(l, "visibility", "none"); } catch {} });
      // Show the right area layers (fill vs extrusion based on 3D)
      try {
        map.setLayoutProperty("area-fill",      "visibility", is3D ? "none"    : "visible");
        map.setLayoutProperty("area-extrusion",  "visibility", is3D ? "visible" : "none");
        map.setLayoutProperty("area-outline",    "visibility", "visible");
        map.setLayoutProperty("area-hover",      "visibility", "visible");
      } catch {}
    }
  }, [viewMode, is3D, mapLoaded]);

  // ── Update area GeoJSON on map when stats load or metric changes ───────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;
    const src = map.getSource("area-polygons");
    if (!src) return;

    src.setData(areaGeoJSON);

    // Update color expressions for active metric
    const colorExpr = buildAreaColorExpression(areaMetricKey);
    const heightExpr = ["*", ["get", areaMetricKey], areaMetricKey === "avgPriceSqft" ? 10 : 2000];

    try {
      map.setPaintProperty("area-fill",      "fill-color",              ["case", ["get", "hasData"], colorExpr, "#1a1a2e"]);
      map.setPaintProperty("area-extrusion", "fill-extrusion-color",    ["case", ["get", "hasData"], colorExpr, "#1a1a2e"]);
      map.setPaintProperty("area-extrusion", "fill-extrusion-height",   heightExpr);
    } catch {}
  }, [areaGeoJSON, areaMetricKey, mapLoaded]);

  // ── Update project source data when filtered ───────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;
    const src = map.getSource("market-points");
    if (src) src.setData(filteredGeoJSON);
  }, [filteredGeoJSON, mapLoaded]);

  // ── Apply project filter ───────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;
    try {
      map.setFilter("market-dots", mapboxFilter);
      map.setFilter("clusters",    mapboxFilter);
    } catch {}
  }, [mapboxFilter, mapLoaded]);


  // ── Apply area filter to Mapbox layers ────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;
    try {
      map.setFilter("area-fill",      areaMapboxFilter);
      map.setFilter("area-extrusion", areaMapboxFilter);
    } catch {}
  }, [areaMapboxFilter, mapLoaded]);
  // ── Fly to selected project ────────────────────────────────────────────
  const flyToProject = useCallback((p) => {
    const map = mapRef.current;
    if (!map) return;
    map.flyTo({ center: [p.lng, p.lat], zoom: 15, duration: 1200, essential: true });
    setSelectedSlug(p.slug);
    setSidebarOpen(true);
    setSearchOpen(false);
    setSearchQuery("");
    map.getSource("selected-point")?.setData({
      type: "FeatureCollection",
      features: [{ type: "Feature", properties: {}, geometry: { type: "Point", coordinates: [p.lng, p.lat] } }],
    });
  }, []);

  const viewProjectDetails = useCallback(() => {
    if (!selectedProject) return;
    // Build the correct URL path: /properties/{category}/{developer}/{slug}
    const raw = selectedProject.raw || {};
    const enProject = raw?.en?.project || {};
    const status = String(enProject.status || "").toLowerCase();
    let category = "offplan";
    if (status.includes("ready") || status.includes("existing") || status.includes("completed")) category = "secondary";
    const developerSlug = String(enProject.developer || "")
      .toLowerCase()
      .replace(/\s+(realty|properties|developments?|group|real\s+estate)\s*$/i, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "developer";
    router.push(`/properties/${category}/${developerSlug}/${selectedProject.slug}`);
  }, [selectedProject, router]);

  // Close dropdowns on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const handle = (e) => {
      if (!e.target.closest("[data-dropdown]")) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [openDropdown]);

  // ── Format bedrooms ────────────────────────────────────────────────────
  const formatBedrooms = (project) => {
    if (project.hasStudio && (!project.minBedrooms || project.minBedrooms === 0)) return "Studio";
    if (project.minBedrooms === project.maxBedrooms) return `${project.minBedrooms} ${project.minBedrooms === 1 ? "Bed" : "Beds"}`;
    if (project.minBedrooms && project.maxBedrooms) return `${project.minBedrooms}-${project.maxBedrooms} Beds`;
    return project.hasStudio ? "Studio" : "—";
  };

  const parsePaymentPlanForDisplay = (text) => {
    if (!text) return [];
    return text.split(/\s+or\s+|\s+أو\s+/i).map((plan, i) => ({ id: i + 1, label: locale === "ar" ? `خطة الدفع ${i + 1}` : `Payment Plan ${i + 1}`, text: plan.trim() }));
  };

  // ── Area metric label ──────────────────────────────────────────────────
  const currentAreaMetric = AREA_METRICS.find((m) => m.key === areaMetricKey) || AREA_METRICS[0];
  const areaMetricLabel = locale === "ar" ? currentAreaMetric.labelAr : currentAreaMetric.labelEn;

  // ── Format area stat value ─────────────────────────────────────────────
  const formatAreaStat = (key, value) => {
    if (value == null || value === 0) return "—";
    if (key === "avgPriceSqft") return `${formatNumber(Math.round(value))} AED/sqft`;
    if (key === "avgSalePrice" || key === "avgAnnualRent") return formatCurrencyAED(value, locale);
    return `${parseFloat(value).toFixed(1)}%`;
  };

  // ── Legend values ──────────────────────────────────────────────────────
  const legendItems = useMemo(() => {
    const stops = AREA_COLOR_STOPS[areaMetricKey] || AREA_COLOR_STOPS.totalROI;
    const items = [];
    for (let i = stops.length - 2; i >= 0; i -= 2) {
      items.push({ value: stops[i], color: stops[i + 1] });
    }
    return items;
  }, [areaMetricKey]);

  return (
    <section className={styles.wrapper} dir={isRTL ? "rtl" : "ltr"}>
      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <div className={styles.topBar}>
        <div className={styles.pillsRow}>

          {/* View mode toggle */}
          <div className={styles.viewModeToggle}>
            {VIEW_MODES.map((m) => (
              <button
                key={m.key}
                type="button"
                className={`${styles.viewModeBtn} ${viewMode === m.key ? styles.viewModeBtnActive : ""}`}
                onClick={() => setViewMode(m.key)}
              >
                {locale === "ar" ? m.labelAr : m.labelEn}
              </button>
            ))}
          </div>

          {viewMode === "projects" && (
            <>
              {/* Metric dropdown */}
              <div className={styles.pillWrap} data-dropdown>
                <button className={styles.pill} onClick={() => setOpenDropdown((v) => v === "metric" ? null : "metric")} type="button">
                  <span className={styles.pillIcon}>🗺️</span>
                  <span>{metricLabel}</span>
                  <span className={styles.caret}>▾</span>
                </button>
                {openDropdown === "metric" && (
                  <div className={styles.dropdown}>
                    {PROJECT_METRICS.map((m) => (
                      <button key={m.key} className={styles.dropdownItem} onClick={() => { setMetricKey(m.key); setOpenDropdown(null); }} type="button">{m.label}</button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search */}
              <div className={styles.pillWrap} data-dropdown>
                <button className={styles.pill} onClick={() => setSearchOpen(true)} type="button">
                  <span className={styles.pillIcon}>🔍</span>
                  <span>{locale === "ar" ? "ابحث عن مشروع" : "Find a Project"}</span>
                  <span className={styles.caret}>▸</span>
                </button>
              </div>

              {/* Property type */}
              <div className={styles.pillWrap} data-dropdown>
                <button className={styles.pill} onClick={() => setOpenDropdown((v) => v === "type" ? null : "type")} type="button">
                  <span className={styles.pillIcon}>🏠</span>
                  <span>{propertyType}</span>
                  <span className={styles.caret}>▾</span>
                </button>
                {openDropdown === "type" && (
                  <div className={styles.dropdown}>
                    {["All","Apartment","Villa","Penthouse","Commercial"].map((t) => (
                      <button key={t} className={styles.dropdownItem} onClick={() => { setPropertyType(t); setOpenDropdown(null); }} type="button">{t}</button>
                    ))}
                  </div>
                )}
              </div>

              {/* Beds */}
              <div className={styles.pillWrap} data-dropdown>
                <button className={styles.pill} onClick={() => setOpenDropdown((v) => v === "beds" ? null : "beds")} type="button">
                  <span className={styles.pillIcon}>🛏</span>
                  <span>{BED_OPTIONS.find((b) => b.value === beds)?.label || "All Beds"}</span>
                  <span className={styles.caret}>▾</span>
                </button>
                {openDropdown === "beds" && (
                  <div className={styles.dropdown}>
                    {BED_OPTIONS.map((b) => (
                      <button key={String(b.value)} className={styles.dropdownItem} onClick={() => { setBeds(b.value); setOpenDropdown(null); }} type="button">{b.label}</button>
                    ))}
                  </div>
                )}
              </div>

              {/* Completion */}
              <div className={styles.pillWrap} data-dropdown>
                <button className={styles.pill} onClick={() => setOpenDropdown((v) => v === "completion" ? null : "completion")} type="button">
                  <span className={styles.pillIcon}>📅</span>
                  <span>{completionStatus}</span>
                  <span className={styles.caret}>▾</span>
                </button>
                {openDropdown === "completion" && (
                  <div className={styles.dropdown}>
                    {COMPLETION_OPTIONS.map((opt) => (
                      <button key={opt} className={styles.dropdownItem} onClick={() => { setCompletionStatus(opt); setOpenDropdown(null); }} type="button">{opt}</button>
                    ))}
                  </div>
                )}
              </div>

              {/* Starting Price */}
              <div className={styles.pillWrap} data-dropdown>
                <button className={styles.pill} onClick={() => setOpenDropdown((v) => v === "price" ? null : "price")} type="button">
                  <span className={styles.pillIcon}>💰</span>
                  <span>{appliedMin > 0 || appliedMax != null ? `${appliedMin > 0 ? formatCurrencyAED(appliedMin, locale) : "Any"} – ${appliedMax != null ? formatCurrencyAED(appliedMax, locale) : "Any"}` : (locale === "ar" ? "السعر الابتدائي" : "Starting Price")}</span>
                  <span className={styles.caret}>▾</span>
                </button>
                {openDropdown === "price" && (
                  <div className={styles.priceModal}>
                    <div className={styles.priceTabs}>
                      {PROJECT_METRICS.map((m) => (
                        <button key={m.key} className={`${styles.priceTab} ${priceModalTab === m.label ? styles.priceTabActive : ""}`} onClick={() => setPriceModalTab(m.label)} type="button">{m.label}</button>
                      ))}
                    </div>
                    <div className={styles.priceGrid}>
                      <div className={styles.priceField}>
                        <div className={styles.priceLabel}>{locale === "ar" ? "الحد الأدنى" : "MIN"}</div>
                        <input className={styles.priceInput} type="text" placeholder="0" value={priceMinInput} onChange={(e) => setPriceMinInput(e.target.value)} />
                      </div>
                      <div className={styles.priceField}>
                        <div className={styles.priceLabel}>{locale === "ar" ? "الحد الأقصى" : "MAX"}</div>
                        <input className={styles.priceInput} type="text" placeholder="Maximum" value={priceMaxInput === "Maximum" ? "" : priceMaxInput} onChange={(e) => setPriceMaxInput(e.target.value || "Maximum")} />
                      </div>
                    </div>
                    <div style={{ padding: "0 12px 12px", display: "flex", gap: 8 }}>
                      <button type="button" className={styles.pill} style={{ flex: 1, justifyContent: "center" }} onClick={() => {
                        const min = parseAED(priceMinInput);
                        const max = priceMaxInput === "Maximum" ? null : parseAED(priceMaxInput);
                        setAppliedMin(min || 0);
                        setAppliedMax(max);
                        setOpenDropdown(null);
                      }}>{locale === "ar" ? "تطبيق" : "Apply"}</button>
                      <button type="button" className={styles.pill} style={{ justifyContent: "center" }} onClick={() => {
                        setPriceMinInput("");
                        setPriceMaxInput("Maximum");
                        setAppliedMin(0);
                        setAppliedMax(null);
                        setOpenDropdown(null);
                      }}>{locale === "ar" ? "إعادة" : "Reset"}</button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {viewMode === "areas" && (
            <>
              {/* ── Metric selector ── */}
              <div className={styles.pillWrap} data-dropdown>
                <button
                  className={styles.pill}
                  onClick={() => setOpenDropdown((v) => v === "areametric" ? null : "areametric")}
                  type="button"
                >
                  <span className={styles.pillIcon}>📊</span>
                  <span>{areaMetricLabel}</span>
                  <span className={styles.caret}>▾</span>
                </button>
                {openDropdown === "areametric" && (
                  <div className={styles.dropdown}>
                    {AREA_METRICS.map((m) => (
                      <button
                        key={m.key}
                        className={`${styles.dropdownItem} ${areaMetricKey === m.key ? styles.dropdownItemActive : ""}`}
                        onClick={() => { setAreaMetricKey(m.key); setOpenDropdown(null); }}
                        type="button"
                      >
                        {locale === "ar" ? m.labelAr : m.labelEn}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Filter button ── */}
              <div className={styles.pillWrap} data-dropdown>
                <button
                  className={`${styles.pill} ${activeAreaFiltersCount > 0 ? styles.pillActive : ""}`}
                  onClick={() => setAreaFilterOpen((v) => !v)}
                  type="button"
                >
                  <span className={styles.pillIcon}>⚙️</span>
                  <span>{locale === "ar" ? "تصفية" : "Filter"}</span>
                  {activeAreaFiltersCount > 0 && (
                    <span className={styles.filterBadge}>{activeAreaFiltersCount}</span>
                  )}
                  <span className={styles.caret}>▾</span>
                </button>

                {areaFilterOpen && (
                  <div className={styles.areaFilterPanel}>
                    <div className={styles.areaFilterTitle}>
                      {locale === "ar" ? "تصفية المناطق" : "Filter Areas"}
                    </div>

                    {/* Min ROI */}
                    <div className={styles.areaFilterRow}>
                      <label className={styles.areaFilterLabel}>
                        {locale === "ar" ? "الحد الأدنى للعائد %" : "Min ROI %"}
                      </label>
                      <input
                        type="number"
                        className={styles.areaFilterInput}
                        placeholder="e.g. 10"
                        value={areaMinROI}
                        onChange={(e) => setAreaMinROI(e.target.value)}
                        min="0"
                        max="100"
                      />
                    </div>

                    {/* Max price/sqft */}
                    <div className={styles.areaFilterRow}>
                      <label className={styles.areaFilterLabel}>
                        {locale === "ar" ? "الحد الأقصى للسعر (درهم/قدم)" : "Max Price AED/sqft"}
                      </label>
                      <input
                        type="number"
                        className={styles.areaFilterInput}
                        placeholder="e.g. 2000"
                        value={areaMaxPrice}
                        onChange={(e) => setAreaMaxPrice(e.target.value)}
                        min="0"
                      />
                    </div>

                    {/* Min transaction count */}
                    <div className={styles.areaFilterRow}>
                      <label className={styles.areaFilterLabel}>
                        {locale === "ar" ? "الحد الأدنى للمعاملات" : "Min Transactions"}
                      </label>
                      <div className={styles.areaFilterTabs}>
                        {[0, 10, 25, 50].map((v) => (
                          <button
                            key={v}
                            type="button"
                            className={`${styles.areaFilterTab} ${areaMinTxn === v ? styles.areaFilterTabActive : ""}`}
                            onClick={() => setAreaMinTxn(v)}
                          >
                            {v === 0 ? (locale === "ar" ? "الكل" : "All") : `${v}+`}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Reset */}
                    {activeAreaFiltersCount > 0 && (
                      <button
                        type="button"
                        className={styles.areaFilterReset}
                        onClick={() => { setAreaMinROI(""); setAreaMaxPrice(""); setAreaMinTxn(0); }}
                      >
                        {locale === "ar" ? "إعادة ضبط الفلاتر" : "Reset filters"}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Active filter chips */}
              {activeAreaFiltersCount > 0 && (
                <div className={styles.activeFilterChips}>
                  {parseFloat(areaMinROI) > 0 && (
                    <span className={styles.filterChip}>
                      ROI ≥ {areaMinROI}%
                      <button type="button" onClick={() => setAreaMinROI("")}>×</button>
                    </span>
                  )}
                  {parseFloat(areaMaxPrice) > 0 && (
                    <span className={styles.filterChip}>
                      ≤ {Number(areaMaxPrice).toLocaleString()} AED/sqft
                      <button type="button" onClick={() => setAreaMaxPrice("")}>×</button>
                    </span>
                  )}
                  {areaMinTxn > 0 && (
                    <span className={styles.filterChip}>
                      {areaMinTxn}+ txns
                      <button type="button" onClick={() => setAreaMinTxn(0)}>×</button>
                    </span>
                  )}
                </div>
              )}

              {/* Data source badge */}
              {areaDataSource && !areaLoading && (
                <div className={`${styles.sourceBadge} ${areaDataSource === "empty" ? styles.sourceBadgeMock : styles.sourceBadgeLive}`}>
                  {areaDataSource === "empty"
                    ? "⚠️ No data"
                    : `🟢 DLD${areaDataAsOf ? ` · ${areaDataAsOf}` : ""}`}
                </div>
              )}

              {/* Loading indicator */}
              {areaLoading && (
                <div className={styles.areaLoadingPill}>
                  <span className={styles.areaLoadingDot} />
                  {locale === "ar" ? "جاري التحميل..." : "Loading..."}
                </div>
              )}
            </>
          )}
        </div>

        {/* 3D toggle */}
        <label className={styles.toggle3D}>
          <input type="checkbox" checked={is3D} onChange={(e) => setIs3D(e.target.checked)} />
          {locale === "ar" ? "عرض ثلاثي الأبعاد" : "Enable 3D View"}
        </label>
      </div>

      {/* ── Map shell ──────────────────────────────────────────────── */}
      <div className={styles.mapShell}>
        <div ref={mapContainerRef} className={styles.mapContainer}>
          {!mapLoaded && (
            <div className={styles.mapLoading}>
              <div className={styles.loadingSpinner} />
              {locale === "ar" ? "جاري تحميل الخريطة التفاعلية..." : "Loading interactive map..."}
            </div>
          )}
        </div>

        {/* Results counter — projects mode */}
        {viewMode === "projects" && (
          <div className={styles.resultsCounter}>
            {filteredProjects.length} {locale === "ar" ? "من" : "of"} {allProjects.length} {locale === "ar" ? "مشروع" : "projects"}
          </div>
        )}

        {/* Area legend — areas mode */}
        {viewMode === "areas" && !areaLoading && (
          <div className={styles.areaLegend}>
            <div className={styles.areaLegendTitle}>{areaMetricLabel}</div>
            <div className={styles.areaLegendScale}>
              {legendItems.map((item, i) => (
                <div key={i} className={styles.areaLegendItem}>
                  <div className={styles.areaLegendSwatch} style={{ background: item.color }} />
                  <span className={styles.areaLegendValue}>
                    {areaMetricKey === "avgPriceSqft" ? `${item.value.toLocaleString()} AED` : `${item.value}%`}
                  </span>
                </div>
              ))}
            </div>
            {areaDataSource === "empty" && (
              <div className={styles.areaLegendNote}>
                ⚠️ {locale === "ar" ? "لا توجد بيانات — شغّل سكريبت المعالجة" : "No data — run process-dld-transactions.mjs"}
              </div>
            )}
          </div>
        )}

        {/* ── PROJECTS sidebar ─────────────────────────────────────── */}
        <div className={`${styles.sidebar} ${sidebarOpen && viewMode === "projects" ? styles.sidebarOpen : ""}`} dir={isRTL ? "rtl" : "ltr"}>
          <div className={styles.sidebarHeader}>
            <button className={styles.sidebarClose} onClick={() => setSidebarOpen(false)} type="button" aria-label="Close sidebar">✕</button>
            <div className={styles.sidebarTitleWrap}>
              <div className={styles.sidebarTitle}>{selectedProject?.name || (locale === "ar" ? "اختر مشروعًا" : "Select a project")}</div>
              <div className={styles.sidebarSub}>
                {selectedProject?.sidebar?.community || (locale === "ar" ? "غير محدد" : "Not specified")}
                {selectedProject?.sidebar?.developer ? ` • ${selectedProject.sidebar.developer}` : ""}
              </div>
            </div>
          </div>

          {selectedProject ? (
            <>
              <div className={styles.sidebarHero}>
                {selectedProject.sidebar?.heroImage ? (
                  <img src={selectedProject.sidebar.heroImage} alt={selectedProject.name} className={styles.sidebarImg} onError={(e) => { e.target.style.display = "none"; }} />
                ) : (
                  <div className={styles.sidebarImgFallback}>{locale === "ar" ? "لا توجد صورة متاحة" : "No image available"}</div>
                )}
              </div>
              <div className={styles.sidebarBody}>
                <div className={styles.sidebarPriceBlock}>
                  <div className={styles.sidebarPriceLabel}>{locale === "ar" ? "يبدأ من" : "Starting from"}</div>
                  <div className={styles.sidebarPriceValue}>{formatCurrencyAED(selectedProject.startingPrice, locale)}</div>
                  <div className={styles.sidebarMiniGrid}>
                    <div className={styles.sidebarMiniItem}>
                      <div className={styles.sidebarMiniLabel}>{locale === "ar" ? "السعر /قدم²" : "Price /sqft"}</div>
                      <div className={styles.sidebarMiniValue}>{selectedProject.priceSqft ? formatMetric(selectedProject.priceSqft, "priceSqft", locale) : "—"}</div>
                    </div>
                    <div className={styles.sidebarMiniItem}>
                      <div className={styles.sidebarMiniLabel}>{locale === "ar" ? "غرف النوم" : "Beds"}</div>
                      <div className={styles.sidebarMiniValue}>{formatBedrooms(selectedProject)}</div>
                    </div>
                    <div className={styles.sidebarMiniItem}>
                      <div className={styles.sidebarMiniLabel}>{locale === "ar" ? "المساحة (قدم²)" : "Area (sqft)"}</div>
                      <div className={styles.sidebarMiniValue}>
                        {selectedProject.minArea ? (selectedProject.maxArea && selectedProject.maxArea !== selectedProject.minArea ? `${formatNumber(Math.round(selectedProject.minArea))} - ${formatNumber(Math.round(selectedProject.maxArea))}` : `${formatNumber(Math.round(selectedProject.minArea))}`) : "—"}
                      </div>
                    </div>
                    <div className={styles.sidebarMiniItem}>
                      <div className={styles.sidebarMiniLabel}>{locale === "ar" ? "الحالة" : "Status"}</div>
                      <div className={styles.sidebarMiniValue}>{selectedProject.completionStatus}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.datesGrid}>
                  <div className={styles.dateItem}>
                    <div className={styles.dateLabel}>{locale === "ar" ? "تاريخ الإنجاز" : "Completion date"}</div>
                    <div className={styles.dateValue}>{selectedProject.sidebar?.completionDate || "—"}</div>
                  </div>
                  <div className={styles.dateItem}>
                    <div className={styles.dateLabel}>{locale === "ar" ? "خطة الدفع" : "Payment Plan"}</div>
                    <div className={styles.dateValue}>
                      {selectedProject.sidebar?.paymentPlan ? (
                        <div className={styles.paymentPlanCard}>
                          {(() => {
                            const plans = parsePaymentPlanForDisplay(selectedProject.sidebar.paymentPlan);
                            if (plans.length === 1) return <div className={styles.paymentPlanValue}>{plans[0].text}</div>;
                            if (plans.length > 1) return (
                              <div className={styles.multiPaymentPlan}>
                                {plans.map((plan) => (
                                  <div key={plan.id} className={styles.paymentPlanItem}>
                                    <div className={styles.paymentPlanItemHeader}>
                                      <div className={styles.paymentPlanItemLabel}>{plan.label}</div>
                                      <div className={styles.paymentPlanBadge}>{locale === "ar" ? "خطة" : "Plan"}</div>
                                    </div>
                                    <div className={styles.paymentPlanItemContent}>{plan.text}</div>
                                  </div>
                                ))}
                              </div>
                            );
                            return "—";
                          })()}
                        </div>
                      ) : "—"}
                    </div>
                  </div>
                </div>
                <div className={styles.descBlock}>
                  <div className={styles.descTitle}>{locale === "ar" ? "الوصف" : "Description"}</div>
                  <div className={styles.descText}>{selectedProject.sidebar?.description || (locale === "ar" ? "لا يوجد وصف متاح لهذا المشروع." : "No description available for this project.")}</div>
                </div>
                <div className={styles.sidebarActions}>
                  <button className={styles.actionBtn} onClick={viewProjectDetails} type="button">{locale === "ar" ? "عرض التفاصيل" : "View Details"}</button>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.sidebarEmpty}>
              <div className={styles.sidebarEmptyIcon}>📍</div>
              <div className={styles.sidebarEmptyText}>{locale === "ar" ? "انقر على نقطة زرقاء لعرض تفاصيل المشروع." : "Click on a blue pin to view project details."}</div>
            </div>
          )}
        </div>

        {/* ── AREAS sidebar ────────────────────────────────────────── */}
        <div className={`${styles.sidebar} ${areaSidebarOpen && viewMode === "areas" ? styles.sidebarOpen : ""}`} dir={isRTL ? "rtl" : "ltr"}>
          <div className={styles.sidebarHeader}>
            <button className={styles.sidebarClose} onClick={() => { setAreaSidebarOpen(false); setSelectedArea(null); }} type="button" aria-label="Close">✕</button>
            <div className={styles.sidebarTitleWrap}>
              <div className={styles.sidebarTitle}>{selectedArea ? (locale === "ar" ? selectedArea.nameAr : selectedArea.name) : (locale === "ar" ? "اختر منطقة" : "Select an Area")}</div>
              <div className={styles.sidebarSub}>{locale === "ar" ? "بيانات الاستثمار العقاري" : "Real Estate Investment Data"}</div>
            </div>
          </div>

          {selectedArea?.stats ? (
            <div className={styles.sidebarBody}>
              {/* ROI Highlight */}
              <div className={styles.sidebarPriceBlock}>
                <div className={styles.sidebarPriceLabel}>{locale === "ar" ? "إجمالي العائد على الاستثمار" : "Total ROI"}</div>
                <div className={`${styles.sidebarPriceValue} ${styles.roiValue}`}>
                  {selectedArea.stats.totalROI ? `${parseFloat(selectedArea.stats.totalROI).toFixed(1)}%` : "—"}
                </div>
                <div className={styles.sidebarMiniGrid}>
                  <div className={styles.sidebarMiniItem}>
                    <div className={styles.sidebarMiniLabel}>{locale === "ar" ? "العائد الإيجاري" : "Rental Yield"}</div>
                    <div className={styles.sidebarMiniValue}>{formatAreaStat("rentalYield", selectedArea.stats.rentalYield)}</div>
                  </div>
                  <div className={styles.sidebarMiniItem}>
                    <div className={styles.sidebarMiniLabel}>{locale === "ar" ? "تقدير رأس المال" : "Capital Appreciation"}</div>
                    <div className={styles.sidebarMiniValue}>{formatAreaStat("capitalAppreciation", selectedArea.stats.capitalAppreciation)}</div>
                  </div>
                  <div className={styles.sidebarMiniItem}>
                    <div className={styles.sidebarMiniLabel}>{locale === "ar" ? "متوسط السعر/قدم²" : "Avg Price/sqft"}</div>
                    <div className={styles.sidebarMiniValue}>{formatAreaStat("avgPriceSqft", selectedArea.stats.avgPriceSqft)}</div>
                  </div>
                  <div className={styles.sidebarMiniItem}>
                    <div className={styles.sidebarMiniLabel}>{locale === "ar" ? "متوسط سعر البيع" : "Avg Sale Price"}</div>
                    <div className={styles.sidebarMiniValue}>{formatAreaStat("avgSalePrice", selectedArea.stats.avgSalePrice)}</div>
                  </div>
                </div>
              </div>

              {/* Detailed stats */}
              <div className={styles.datesGrid}>
                <div className={styles.dateItem}>
                  <div className={styles.dateLabel}>{locale === "ar" ? "متوسط الإيجار السنوي" : "Avg Annual Rent"}</div>
                  <div className={styles.dateValue}>{formatAreaStat("avgAnnualRent", selectedArea.stats.avgAnnualRent)}</div>
                </div>
                <div className={styles.dateItem}>
                  <div className={styles.dateLabel}>{locale === "ar" ? "عدد المعاملات" : "Transaction Volume"}</div>
                  <div className={styles.dateValue}>{selectedArea.stats.transactionCount ? selectedArea.stats.transactionCount.toLocaleString() : "—"}</div>
                </div>
              </div>

              {/* Formulas */}
              <div className={styles.descBlock}>
                <div className={styles.descTitle}>{locale === "ar" ? "كيف يُحسب العائد؟" : "How is ROI calculated?"}</div>
                <div className={styles.descText} style={{ fontSize: 12, lineHeight: 1.7, opacity: 0.75 }}>
                  {locale === "ar"
                    ? "العائد الإيجاري = (متوسط الإيجار السنوي ÷ متوسط سعر البيع) × 100\nتقدير رأس المال = ((السعر هذا العام − السعر العام الماضي) ÷ السعر العام الماضي) × 100\nإجمالي العائد = العائد الإيجاري + تقدير رأس المال"
                    : "Rental Yield = (Avg Annual Rent ÷ Avg Sale Price) × 100\nCapital Appreciation = ((This year price − Last year price) ÷ Last year price) × 100\nTotal ROI = Rental Yield + Capital Appreciation"}
                </div>
                <div className={styles.descText} style={{ fontSize: 11, marginTop: 8, opacity: 0.55 }}>
                  {locale === "ar" ? `المصدر: بيانات DLD - دائرة الأراضي والأملاك${areaDataAsOf ? ` · ${areaDataAsOf}` : ""}` : `Source: DLD — Dubai Land Department${areaDataAsOf ? ` · ${areaDataAsOf}` : ""}`}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.sidebarEmpty}>
              <div className={styles.sidebarEmptyIcon}>🏙️</div>
              <div className={styles.sidebarEmptyText}>{locale === "ar" ? "انقر على منطقة ملوّنة لعرض بيانات الاستثمار." : "Click on a colored area to view investment data."}</div>
            </div>
          )}
        </div>

        {/* ── Search overlay (projects mode) ──────────────────────── */}
        {searchOpen && (
          <div className={styles.searchOverlay} onMouseDown={() => setSearchOpen(false)}>
            <div className={styles.searchModal} onMouseDown={(e) => e.stopPropagation()} dir={isRTL ? "rtl" : "ltr"}>
              <div className={styles.searchInputRow}>
                <span className={styles.searchIcon}>🔍</span>
                <input className={styles.searchInput} placeholder={locale === "ar" ? "ابحث عن مشروع..." : "Search project..."} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} autoFocus />
                <button className={styles.searchClose} onClick={() => setSearchOpen(false)} type="button">✕</button>
              </div>
              <div className={styles.searchList}>
                {searchResults.length === 0 ? (
                  <div className={styles.searchEmpty}>{searchQuery ? (locale === "ar" ? "لم يتم العثور على مشاريع" : "No projects found") : (locale === "ar" ? "ابدأ الكتابة للبحث" : "Start typing to search")}</div>
                ) : (
                  searchResults.map((p) => (
                    <button key={p.slug} className={styles.searchItem} onClick={() => flyToProject(p)} type="button">
                      <span className={styles.searchBuildingIcon}>🏢</span>
                      <span className={styles.searchName}>{p.name}</span>
                      <span className={styles.searchTag}>{p.propertyType}</span>
                      <span className={styles.searchArrow}>↵</span>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
