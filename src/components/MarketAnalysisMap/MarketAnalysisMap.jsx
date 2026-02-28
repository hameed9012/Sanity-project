"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "@/styles/MarketAnalysisMap/MarketAnalysisMap.module.css";
import { PROJECT_DATA_MAP } from "@/lib/project-data";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

/* =========================
   Enhanced data extraction with AR support
========================= */
function extractLatLngFromProjectData(projectData, locale = "en") {
  // Try requested locale first
  const localeData = projectData?.[locale];
  const lat = localeData?.location?.lat;
  const lng = localeData?.location?.lng;

  if (
    typeof lat === "number" &&
    !isNaN(lat) &&
    typeof lng === "number" &&
    !isNaN(lng)
  ) {
    return { lat, lng };
  }

  // Fallback to English
  const enData = projectData?.en;
  const enLat = enData?.location?.lat;
  const enLng = enData?.location?.lng;

  if (
    typeof enLat === "number" &&
    !isNaN(enLat) &&
    typeof enLng === "number" &&
    !isNaN(enLng)
  ) {
    return { lat: enLat, lng: enLng };
  }

  return null;
}

function extractCompletionStatus(projectData, locale = "en") {
  const localeData = projectData?.[locale];
  const status = localeData?.project?.status || "";
  const statusStr = String(status).toLowerCase().trim();

  if (
    statusStr.includes("off-plan") ||
    statusStr.includes("off plan") ||
    statusStr.includes("offplan") ||
    statusStr.includes("تحت الإنشاء")
  ) {
    return "Off-plan";
  }
  if (
    statusStr.includes("ready") ||
    statusStr.includes("existing") ||
    statusStr.includes("جاهز") ||
    statusStr.includes("قائم")
  ) {
    return "Ready";
  }
  if (statusStr.includes("completed") || statusStr.includes("منجز")) {
    return "Completed";
  }
  if (statusStr.includes("almost") || statusStr.includes("شبه جاهز")) {
    return "Almost Ready";
  }
  if (statusStr.includes("launched") || statusStr.includes("تم الإطلاق")) {
    return "Just Launched";
  }
  return "Show All";
}

function extractPropertyType(projectData, locale = "en") {
  const localeData = projectData?.[locale];
  const type = localeData?.project?.type || "";
  const units = localeData?.project?.units || "";
  const combined = (type + " " + units).toLowerCase();

  if (combined.includes("villa") || combined.includes("فيلا")) return "Villa";
  if (
    combined.includes("penthouse") ||
    combined.includes("penth") ||
    combined.includes("بنتهاوس") ||
    combined.includes("دوبلكس")
  ) {
    return "Penthouse";
  }
  if (
    combined.includes("commercial") ||
    combined.includes("retail") ||
    combined.includes("office") ||
    combined.includes("تجاري") ||
    combined.includes("مكتبي")
  ) {
    return "Commercial";
  }
  return "Apartment";
}

function extractStartingPrice(projectData) {
  // Try English first
  const enProject = projectData?.en?.project;
  const enPrice = enProject?.startingPrice;
  if (enPrice) {
    const parsed = parseAED(enPrice);
    if (parsed !== null && parsed > 0) {
      return parsed;
    }
  }

  // Try Arabic
  const arProject = projectData?.ar?.project;
  const arPrice = arProject?.startingPrice;
  if (arPrice) {
    const parsed = parseAED(arPrice);
    if (parsed !== null && parsed > 0) {
      return parsed;
    }
  }

  // Check floor plans
  const enPlans = projectData?.en?.floorPlans?.plans || [];
  let minPrice = null;

  for (const plan of enPlans) {
    const planSpecs = plan.specs || {};
    const planPriceKeys = [
      "Starting Price",
      "Price",
      "startingPrice",
      "السعر الابتدائي",
      "السعر",
    ];

    for (const key of planPriceKeys) {
      if (planSpecs[key]) {
        const parsed = parseAED(planSpecs[key]);
        if (parsed !== null && parsed > 0) {
          if (minPrice === null || parsed < minPrice) {
            minPrice = parsed;
          }
        }
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
      if (minPpsf === null || ppsf < minPpsf) {
        minPpsf = ppsf;
      }
    }
  }

  return minPpsf;
}

function extractAreaFromSpecs(specs) {
  const areaKeys = [
    "Total Area",
    "Area",
    "المساحة الإجمالية",
    "المساحة",
    "Total",
    "إجمالي المساحة",
    "المساحة الكلية",
  ];

  for (const key of areaKeys) {
    if (specs[key]) {
      const parsed = parseSqft(specs[key]);
      if (parsed !== null && parsed > 0) {
        return parsed;
      }
    }
  }
  return null;
}

function extractPriceFromSpecs(specs) {
  const priceKeys = [
    "Starting Price",
    "Price",
    "startingPrice",
    "السعر الابتدائي",
    "السعر",
    "يبدأ من",
  ];

  for (const key of priceKeys) {
    if (specs[key]) {
      const parsed = parseAED(specs[key]);
      if (parsed !== null && parsed > 0) {
        return parsed;
      }
    }
  }
  return null;
}

function extractBedroomRange(projectData) {
  const plans = projectData?.en?.floorPlans?.plans || [];
  let minBeds = Infinity;
  let maxBeds = 0;

  for (const plan of plans) {
    let beds = plan.bedrooms;

    // Handle string values like "0" for studio
    if (typeof beds === "string") {
      beds = parseFloat(beds);
    }

    if (typeof beds === "number" && !isNaN(beds)) {
      // Skip studio (0 bedrooms) from bed count range
      if (beds > 0) {
        minBeds = Math.min(minBeds, beds);
        maxBeds = Math.max(maxBeds, beds);
      }
    }
  }

  if (minBeds === Infinity) minBeds = null;
  if (maxBeds === 0) maxBeds = minBeds;

  // If we have studios but no bedrooms, set to null
  if (
    minBeds === null &&
    plans.some((p) => p.bedrooms === 0 || p.bedrooms === "0")
  ) {
    return { minBeds: null, maxBeds: null, hasStudio: true };
  }

  return {
    minBeds,
    maxBeds,
    hasStudio: plans.some((p) => p.bedrooms === 0 || p.bedrooms === "0"),
  };
}

function extractAreaRange(projectData) {
  const plans = projectData?.en?.floorPlans?.plans || [];
  let minArea = Infinity;
  let maxArea = 0;

  for (const plan of plans) {
    const area = extractAreaFromSpecs(plan.specs || {});
    if (area !== null && area > 0) {
      minArea = Math.min(minArea, area);
      maxArea = Math.max(maxArea, area);
    }
  }

  if (minArea === Infinity) minArea = null;
  if (maxArea === 0) maxArea = minArea;

  return { minArea, maxArea };
}

function extractSidebarData(projectData, locale = "en") {
  const localeData = projectData?.[locale] || projectData?.en || {};
  const project = localeData.project || {};
  const intro = localeData.intro || {};
  const hero = localeData.hero || {};
  const gallery = localeData.gallery || {};
  const floorPlans = localeData.floorPlans || {};

  // Extract payment plan from floor plans if available
  let paymentPlan = project.paymentPlan || "";
  if (!paymentPlan && floorPlans.plans && floorPlans.plans.length > 0) {
    const firstPlan = floorPlans.plans[0];
    if (firstPlan.specs && firstPlan.specs["Payment Plan"]) {
      paymentPlan = firstPlan.specs["Payment Plan"];
    } else if (firstPlan.specs && firstPlan.specs["خطة الدفع"]) {
      paymentPlan = firstPlan.specs["خطة الدفع"];
    }
  }

  return {
    developer: project.developer || "Not specified",
    community: project.location || "Not specified",
    description:
      intro.paragraphs?.[0] ||
      intro.description?.[0] ||
      "No description available",
    launchDate: project.launchDate || "Not specified",
    completionDate: project.completionDate || "Not specified",
    constructionProgress: project.constructionProgress || "Not specified",
    units: project.units || "Not specified",
    paymentPlan: paymentPlan,
    heroImage: hero.backgroundUrl || gallery.slides?.[0] || null,
  };
}

function parseAED(value) {
  if (typeof value === "number" && !isNaN(value)) return value;
  if (!value) return null;

  const str = String(value).trim().toLowerCase().replace(/,/g, "");

  let multiplier = 1;
  if (str.includes("b")) multiplier = 1e9;
  else if (str.includes("m")) multiplier = 1e6;
  else if (str.includes("k")) multiplier = 1e3;

  const numStr = str.replace(/[^\d.]/g, "");
  if (!numStr) return null;

  const num = parseFloat(numStr);
  if (isNaN(num)) return null;

  return num * multiplier;
}

function parseSqft(value) {
  if (typeof value === "number" && !isNaN(value)) return value;
  if (!value) return null;

  const str = String(value).toLowerCase().replace(/,/g, "");

  const cleanStr = str
    .replace(/[^\d.]/g, "")
    .replace(/approx\.?/g, "")
    .trim();
  if (!cleanStr) return null;

  const num = parseFloat(cleanStr);
  if (isNaN(num)) return null;

  return num;
}

/* =========================
   Main data processing
========================= */
function buildMarketProjectsIndex(projectMap, locale = "en") {
  const projects = [];

  for (const [slug, projectData] of Object.entries(projectMap)) {
    try {
      const coords = extractLatLngFromProjectData(projectData, locale);
      if (!coords) {
        console.warn(`Skipping ${slug}: No valid coordinates`);
        continue;
      }

      const propertyType = extractPropertyType(projectData, locale);
      const completionStatus = extractCompletionStatus(projectData, locale);
      const startingPrice = extractStartingPrice(projectData);
      const priceSqft = extractPricePerSqft(projectData);
      const bedroomRange = extractBedroomRange(projectData);
      const areaRange = extractAreaRange(projectData);
      const sidebarData = extractSidebarData(projectData, locale);

      const localeData = projectData?.[locale] || projectData?.en || {};
      const projectLocale = localeData.project || {};

      projects.push({
        slug,
        name: projectLocale.name || slug.replace(/-/g, " "),
        lat: coords.lat,
        lng: coords.lng,
        propertyType,
        completionStatus,
        minBedrooms: bedroomRange.minBeds,
        maxBedrooms: bedroomRange.maxBeds,
        hasStudio: bedroomRange.hasStudio,
        startingPrice,
        priceSqft,
        minArea: areaRange.minArea,
        maxArea: areaRange.maxArea,
        raw: projectData,
        sidebar: sidebarData,
      });
    } catch (error) {
      console.error(`Error processing project ${slug}:`, error);
    }
  }

  console.log(`✅ Built ${projects.length} projects from data`);
  return projects;
}

/* =========================
   Remaining helper functions
========================= */
function isFiniteNumber(n) {
  return typeof n === "number" && Number.isFinite(n);
}

function formatNumber(n) {
  if (!isFiniteNumber(n)) return "—";
  return n.toLocaleString("en-US");
}

function formatCurrencyAED(n, locale = "en") {
  if (!isFiniteNumber(n)) return "—";
  if (n >= 1e9)
    return `${locale === "ar" ? "د.إ " : "AED "}${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6)
    return `${locale === "ar" ? "د.إ " : "AED "}${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3)
    return `${locale === "ar" ? "د.إ " : "AED "}${(n / 1e3).toFixed(1)}K`;
  return `${locale === "ar" ? "د.إ " : "AED "}${formatNumber(Math.round(n))}`;
}

function formatMetric(n, metricKey, locale = "en") {
  if (!isFiniteNumber(n)) return "—";
  if (metricKey === "priceSqft")
    return `${formatNumber(Math.round(n))} ${
      locale === "ar" ? "د.إ/قدم²" : "AED/sqft"
    }`;
  return formatCurrencyAED(n, locale);
}

function getMetricValue(p, metricKey) {
  const v = p?.[metricKey];
  return isFiniteNumber(v) ? v : null;
}

function buildGeoJSONAll(projects, locale = "en") {
  return {
    type: "FeatureCollection",
    features: projects.map((p) => ({
      type: "Feature",
      properties: {
        slug: p.slug,
        name: p.name,
        propertyType: p.propertyType,
        completionStatus: p.completionStatus,
        minBedrooms: p.minBedrooms,
        maxBedrooms: p.maxBedrooms,
        hasStudio: p.hasStudio,
        startingPrice: p.startingPrice,
        priceSqft: p.priceSqft,
        minArea: p.minArea,
        maxArea: p.maxArea,
        developer: p.sidebar?.developer || "",
        community: p.sidebar?.community || "",
        description: p.sidebar?.description || "",
        completionDate: p.sidebar?.completionDate || "",
        paymentPlan: p.sidebar?.paymentPlan || "",
      },
      geometry: {
        type: "Point",
        coordinates: [p.lng, p.lat],
      },
    })),
  };
}

function buildMapboxFilter({
  propertyType,
  beds,
  completionStatus,
  priceMetricKey,
  appliedMin,
  appliedMax,
}) {
  const f = ["all"];

  if (propertyType && propertyType !== "All") {
    f.push(["==", ["get", "propertyType"], propertyType]);
  }

  if (completionStatus && completionStatus !== "Show All") {
    f.push(["==", ["get", "completionStatus"], completionStatus]);
  }

  if (beds != null) {
    if (beds === "studio") {
      f.push(["==", ["get", "hasStudio"], true]);
    } else if (beds === 6) {
      f.push([">=", ["get", "maxBedrooms"], 6]);
    } else {
      f.push(["<=", ["get", "minBedrooms"], beds]);
      f.push([">=", ["get", "maxBedrooms"], beds]);
    }
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

/* =========================
   UI Constants
========================= */
const METRICS = [
  { key: "priceSqft", label: "Price /sqft", unit: "AED/sqft" },
  { key: "startingPrice", label: "Starting Price", unit: "AED" },
];

const COMPLETION_OPTIONS = [
  "Show All",
  "Ready",
  "Off-plan",
  "Completed",
  "Almost Ready",
  "Just Launched",
];

const BED_OPTIONS = [
  { value: null, label: "All Beds" },
  { value: "studio", label: "Studio" },
  { value: 1, label: "1 Bed" },
  { value: 2, label: "2 Beds" },
  { value: 3, label: "3 Beds" },
  { value: 4, label: "4 Beds" },
  { value: 5, label: "5 Beds" },
  { value: 6, label: "6+ Beds" },
];

/* =========================
   Main Component
========================= */
export default function MarketAnalysisMap() {
  const router = useRouter();
  const { locale } = useLanguage();
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const mapInitialized = useRef(false);

  // UI state
  const [is3D, setIs3D] = useState(false);
  const [metricKey, setMetricKey] = useState("priceSqft");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Filters
  const [propertyType, setPropertyType] = useState("All");
  const [beds, setBeds] = useState(null);
  const [completionStatus, setCompletionStatus] = useState("Show All");

  // Price modal
  const [priceModalTab, setPriceModalTab] = useState("Starting Price");
  const [priceMinInput, setPriceMinInput] = useState("");
  const [priceMaxInput, setPriceMaxInput] = useState("Maximum");
  const [appliedMin, setAppliedMin] = useState(0);
  const [appliedMax, setAppliedMax] = useState(null);

  // Search
  const [searchQuery, setSearchQuery] = useState("");

  // Sidebar
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Map loading state
  const [mapLoaded, setMapLoaded] = useState(false);

  // ✅ Build projects with locale support
  const allProjects = useMemo(() => {
    console.log("Building projects from data map with locale:", locale);
    const projects = buildMarketProjectsIndex(PROJECT_DATA_MAP, locale);
    console.log(`Built ${projects.length} projects from data`);
    return projects;
  }, [locale]);

  const allGeoJSON = useMemo(() => {
    console.log("Generating GeoJSON with locale:", locale);
    return buildGeoJSONAll(allProjects, locale);
  }, [allProjects, locale]);

  const selectedProject = useMemo(() => {
    if (!selectedSlug) return null;
    const project = allProjects.find((p) => p.slug === selectedSlug);
    return project || null;
  }, [selectedSlug, allProjects]);

  const priceMetricKey = useMemo(() => {
    return priceModalTab === "Price /sqft" ? "priceSqft" : "startingPrice";
  }, [priceModalTab]);

  const mapboxFilter = useMemo(() => {
    return buildMapboxFilter({
      propertyType,
      beds,
      completionStatus,
      priceMetricKey,
      appliedMin,
      appliedMax,
    });
  }, [
    propertyType,
    beds,
    completionStatus,
    priceMetricKey,
    appliedMin,
    appliedMax,
  ]);

  const filteredProjects = useMemo(() => {
    const hasMin = isFiniteNumber(appliedMin) && appliedMin !== 0;
    const hasMax = isFiniteNumber(appliedMax);

    return allProjects.filter((p) => {
      // Property type filter
      if (
        propertyType &&
        propertyType !== "All" &&
        p.propertyType !== propertyType
      ) {
        return false;
      }

      // Beds filter
      if (beds != null) {
        if (beds === "studio") {
          if (!p.hasStudio) return false;
        } else if (beds === 6) {
          if (p.maxBedrooms < 6) return false;
        } else {
          if (beds < (p.minBedrooms || 0) || beds > (p.maxBedrooms || 0))
            return false;
        }
      }

      // Completion status filter
      if (
        completionStatus &&
        completionStatus !== "Show All" &&
        p.completionStatus !== completionStatus
      ) {
        return false;
      }

      // Price filter
      if (hasMin || hasMax) {
        const value = getMetricValue(p, priceMetricKey);
        if (!isFiniteNumber(value)) return false;
        if (hasMin && value < appliedMin) return false;
        if (hasMax && value > appliedMax) return false;
      }

      return true;
    });
  }, [
    allProjects,
    propertyType,
    beds,
    completionStatus,
    appliedMin,
    appliedMax,
    priceMetricKey,
  ]);

  // Labels
  const metricLabel =
    METRICS.find((m) => m.key === metricKey)?.label || "Metric";
  const bedsLabel =
    beds == null
      ? "Beds"
      : beds === "studio"
      ? "Studio"
      : beds === 6
      ? "6+ Beds"
      : `${beds} ${beds === 1 ? "Bed" : "Beds"}`;

  const pricePillLabel = useMemo(() => {
    const tab = priceModalTab === "Price /sqft" ? " /sqft" : "";
    const min = appliedMin ? formatNumber(appliedMin) : "0";
    return `From ${locale === "ar" ? "د.إ " : "AED "}${min}${tab}`;
  }, [priceModalTab, appliedMin, locale]);

  /* =========================
     Map initialization
  ========================= */
  useEffect(() => {
    if (mapInitialized.current) return;
    let cancelled = false;

    const initMap = async () => {
      try {
        const mapboxgl = (await import("mapbox-gl")).default;
        if (cancelled || !mapContainerRef.current) return;

        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
        if (!token) {
          console.error("Missing NEXT_PUBLIC_MAPBOX_TOKEN");
          return;
        }
        mapboxgl.accessToken = token;

        if (mapRef.current) return;

        console.log("🔄 Initializing map with", allProjects.length, "projects");

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

        map.addControl(
          new mapboxgl.NavigationControl({ showCompass: false }),
          "top-right"
        );

        // Add scale control
        map.addControl(
          new mapboxgl.ScaleControl({
            maxWidth: 100,
            unit: "metric",
          }),
          "bottom-left"
        );

        mapRef.current = map;
        mapInitialized.current = true;

        map.on("load", () => {
          console.log("✅ Map loaded successfully");
          setMapLoaded(true);

          // Add source
          map.addSource("market-points", {
            type: "geojson",
            data: allGeoJSON,
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50,
          });

          // Add cluster layers
          map.addLayer({
            id: "clusters",
            type: "circle",
            source: "market-points",
            filter: ["has", "point_count"],
            paint: {
              "circle-color": [
                "step",
                ["get", "point_count"],
                "#60a5fa",
                10,
                "#3b82f6",
                30,
                "#1d4ed8",
              ],
              "circle-radius": [
                "step",
                ["get", "point_count"],
                15,
                10,
                20,
                30,
                25,
              ],
              "circle-opacity": 0.9,
              "circle-stroke-width": 2,
              "circle-stroke-color": "#ffffff",
            },
          });

          map.addLayer({
            id: "cluster-count",
            type: "symbol",
            source: "market-points",
            filter: ["has", "point_count"],
            layout: {
              "text-field": "{point_count_abbreviated}",
              "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
              "text-size": 12,
            },
            paint: {
              "text-color": "#ffffff",
            },
          });

          // Add individual points layer
          map.addLayer({
            id: "market-dots",
            type: "circle",
            source: "market-points",
            filter: ["!", ["has", "point_count"]],
            paint: {
              "circle-color": "#3b82f6",
              "circle-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                5,
                8,
                10,
                12,
                14,
                16,
              ],
              "circle-stroke-width": 2,
              "circle-stroke-color": "#ffffff",
              "circle-opacity": 0.9,
            },
          });

          // Add hover effect layer
          map.addLayer({
            id: "market-dots-hover",
            type: "circle",
            source: "market-points",
            filter: ["==", ["get", "slug"], ""],
            paint: {
              "circle-color": "#60a5fa",
              "circle-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                5,
                12,
                10,
                16,
                14,
                20,
              ],
              "circle-stroke-width": 3,
              "circle-stroke-color": "#ffffff",
              "circle-opacity": 1,
            },
          });

          // Add selected point source
          map.addSource("selected-point", {
            type: "geojson",
            data: { type: "FeatureCollection", features: [] },
          });

          map.addLayer({
            id: "selected-ring",
            type: "circle",
            source: "selected-point",
            paint: {
              "circle-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                5,
                20,
                14,
                30,
              ],
              "circle-color": "rgba(0,0,0,0)",
              "circle-stroke-width": [
                "interpolate",
                ["linear"],
                ["zoom"],
                5,
                3,
                14,
                5,
              ],
              "circle-stroke-color": "#fbbf24",
            },
          });

          // Apply initial filters
          map.setFilter("market-dots", mapboxFilter);
          map.setFilter("clusters", mapboxFilter);

          // Mouse hover interaction
          let hoveredStateId = null;

          map.on("mousemove", "market-dots", (e) => {
            if (e.features.length > 0) {
              if (hoveredStateId) {
                map.setFilter("market-dots-hover", ["==", ["get", "slug"], ""]);
              }
              hoveredStateId = e.features[0].properties.slug;
              map.setFilter("market-dots-hover", [
                "==",
                ["get", "slug"],
                hoveredStateId,
              ]);
              map.getCanvas().style.cursor = "pointer";
            }
          });

          map.on("mouseleave", "market-dots", () => {
            if (hoveredStateId) {
              map.setFilter("market-dots-hover", ["==", ["get", "slug"], ""]);
            }
            map.getCanvas().style.cursor = "";
          });

          // Click handler for points
          map.on("click", "market-dots", (e) => {
            const feature = e.features?.[0];
            if (!feature) return;

            const slug = feature.properties.slug;
            if (!slug) return;

            console.log("📍 Clicked project:", slug, feature.properties.name);
            setSelectedSlug(slug);
            setSidebarOpen(true);

            // Highlight selected point
            const coordinates = feature.geometry.coordinates.slice();
            const src = map.getSource("selected-point");
            if (src && typeof src.setData === "function") {
              src.setData({
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates,
                    },
                  },
                ],
              });
            }

            // Fly to point with smooth animation
            map.flyTo({
              center: coordinates,
              zoom: 14,
              duration: 1200,
              essential: true,
              curve: 1.42,
            });
          });

          // Click handler for clusters
          map.on("click", "clusters", (e) => {
            const features = map.queryRenderedFeatures(e.point, {
              layers: ["clusters"],
            });
            if (features.length === 0) return;

            const clusterId = features[0].properties.cluster_id;
            const source = map.getSource("market-points");

            source.getClusterExpansionZoom(clusterId, (err, zoom) => {
              if (err) return;

              map.easeTo({
                center: features[0].geometry.coordinates,
                zoom: Math.min(zoom, 16),
                duration: 800,
                essential: true,
              });
            });
          });

          // Cursor changes
          map.on("mouseenter", "market-dots", () => {
            map.getCanvas().style.cursor = "pointer";
          });

          map.on("mouseleave", "market-dots", () => {
            map.getCanvas().style.cursor = "";
          });

          map.on("mouseenter", "clusters", () => {
            map.getCanvas().style.cursor = "pointer";
          });

          map.on("mouseleave", "clusters", () => {
            map.getCanvas().style.cursor = "";
          });
        });

        map.on("error", (e) => {
          console.error("Map error:", e.error);
        });
      } catch (error) {
        console.error("Failed to load map:", error);
      }
    };

    initMap();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        try {
          mapRef.current.remove();
        } catch (e) {
          console.warn("Error removing map:", e);
        }
        mapRef.current = null;
        mapInitialized.current = false;
      }
    };
  }, []);

  /* =========================
     3D View Toggle Effect - Fixed
  ========================= */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;

    if (is3D) {
      // Enable 3D view
      map.easeTo({
        pitch: 60,
        bearing: -20,
        duration: 1500,
        essential: true,
      });

      // Add terrain
      if (!map.getSource("mapbox-dem")) {
        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxzoom: 14,
        });
      }

      // Wait a bit for terrain to load, then set it
      setTimeout(() => {
        try {
          map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
        } catch (e) {
          console.warn("Could not set terrain:", e);
        }
      }, 500);
    } else {
      // Return to 2D view
      map.easeTo({
        pitch: 0,
        bearing: 0,
        duration: 1200,
        essential: true,
      });

      // Remove terrain
      try {
        if (map.getTerrain()) {
          map.setTerrain(null);
        }
      } catch (e) {
        console.warn("Error removing terrain:", e);
      }
    }
  }, [is3D, mapLoaded]);

  // Update source data when projects change
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;

    const source = map.getSource("market-points");
    if (source && typeof source.setData === "function") {
      console.log("🔄 Updating map with", allProjects.length, "projects");
      source.setData(allGeoJSON);
    }
  }, [allGeoJSON, mapLoaded]);

  // Update filters
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;

    try {
      if (map.getLayer("market-dots")) {
        map.setFilter("market-dots", mapboxFilter);
      }

      if (map.getLayer("clusters")) {
        map.setFilter("clusters", mapboxFilter);
      }
    } catch (error) {
      console.error("Error updating filters:", error);
    }
  }, [mapboxFilter, mapLoaded]);

  // Search results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return allProjects
      .filter((p) => p.name.toLowerCase().includes(q))
      .slice(0, 12);
  }, [allProjects, searchQuery]);

  // Fly to project function
  const flyToProject = (project) => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;

    map.flyTo({
      center: [project.lng, project.lat],
      zoom: 14,
      duration: 1200,
      pitch: is3D ? 60 : 0,
      essential: true,
      curve: 1.42,
    });

    setSelectedSlug(project.slug);
    setSidebarOpen(true);

    // Update selected point
    const src = map.getSource("selected-point");
    if (src && typeof src.setData === "function") {
      src.setData({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [project.lng, project.lat],
            },
          },
        ],
      });
    }

    setSearchOpen(false);
    setSearchQuery("");
  };

  // Price apply/reset
  const applyPrice = () => {
    const min = Number(String(priceMinInput || "").replace(/[^\d.]/g, ""));
    const minOk = Number.isFinite(min) ? min : 0;

    const maxRaw = String(priceMaxInput || "")
      .trim()
      .toLowerCase();
    let maxOk = null;
    if (maxRaw && maxRaw !== "maximum") {
      const m = Number(maxRaw.replace(/[^\d.]/g, ""));
      if (Number.isFinite(m)) maxOk = m;
    }

    setAppliedMin(minOk);
    setAppliedMax(maxOk);
    setOpenDropdown(null);
  };

  const resetPrice = () => {
    setPriceMinInput("");
    setPriceMaxInput("Maximum");
    setAppliedMin(0);
    setAppliedMax(null);
  };

  // View project details
  const viewProjectDetails = () => {
    if (!selectedProject) return;

    // Find the project in the data to get its full path
    const projectData = PROJECT_DATA_MAP[selectedProject.slug];
    if (!projectData) return;

    // Navigate to project page - adjust this based on your routing structure
    const path = `/properties/${selectedProject.slug}`;
    router.push(path);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles.pillWrap}`)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Format bedroom display
  const formatBedrooms = (project) => {
    if (
      project.hasStudio &&
      (!project.minBedrooms || project.minBedrooms === 0)
    ) {
      return "Studio";
    }

    if (project.minBedrooms === project.maxBedrooms) {
      return `${project.minBedrooms} ${
        project.minBedrooms === 1 ? "Bed" : "Beds"
      }`;
    }

    if (project.minBedrooms && project.maxBedrooms) {
      return `${project.minBedrooms}-${project.maxBedrooms} Beds`;
    }

    return project.hasStudio ? "Studio" : "—";
  };

  // Parse payment plan for display
  const parsePaymentPlanForDisplay = (paymentPlanText) => {
    if (!paymentPlanText) return [];

    const plans = paymentPlanText.split(/\s+or\s+|\s+أو\s+/i);
    return plans.map((plan, index) => ({
      id: index + 1,
      label:
        locale === "ar"
          ? `خطة الدفع ${index + 1}`
          : `Payment Plan ${index + 1}`,
      text: plan.trim(),
    }));
  };

  return (
    <section className={styles.wrapper}>
      {/* Filters bar */}
      <div className={styles.topBar}>
        <div className={styles.pillsRow}>
          {/* Metric dropdown */}
          <div className={styles.pillWrap}>
            <button
              className={styles.pill}
              onClick={() =>
                setOpenDropdown((v) => (v === "metric" ? null : "metric"))
              }
              type="button"
            >
              <span className={styles.pillIcon}>🗺️</span>
              <span>{metricLabel}</span>
              <span className={styles.caret}>▾</span>
            </button>

            {openDropdown === "metric" && (
              <div className={styles.dropdown}>
                {METRICS.map((m) => (
                  <button
                    key={m.key}
                    className={styles.dropdownItem}
                    onClick={() => {
                      setMetricKey(m.key);
                      setOpenDropdown(null);
                    }}
                    type="button"
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className={styles.pillWrap}>
            <button
              className={styles.pill}
              onClick={() => setSearchOpen(true)}
              type="button"
            >
              <span className={styles.pillIcon}>🔍</span>
              <span>
                {locale === "ar" ? "ابحث عن مشروع" : "Find a Project"}
              </span>
              <span className={styles.caret}>▸</span>
            </button>
          </div>

          {/* Property type */}
          <div className={styles.pillWrap}>
            <button
              className={styles.pill}
              onClick={() =>
                setOpenDropdown((v) => (v === "type" ? null : "type"))
              }
              type="button"
            >
              <span className={styles.pillIcon}>🏠</span>
              <span>{propertyType}</span>
              <span className={styles.caret}>▾</span>
            </button>

            {openDropdown === "type" && (
              <div className={styles.dropdown}>
                {["All", "Apartment", "Villa", "Penthouse", "Commercial"].map(
                  (t) => (
                    <button
                      key={t}
                      className={styles.dropdownItem}
                      onClick={() => {
                        setPropertyType(t);
                        setOpenDropdown(null);
                      }}
                      type="button"
                    >
                      {t}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Beds */}
          <div className={styles.pillWrap}>
            <button
              className={styles.pill}
              onClick={() =>
                setOpenDropdown((v) => (v === "beds" ? null : "beds"))
              }
              type="button"
            >
              <span className={styles.pillIcon}>🛏️</span>
              <span>{bedsLabel}</span>
              <span className={styles.caret}>▾</span>
            </button>

            {openDropdown === "beds" && (
              <div className={styles.dropdown}>
                {BED_OPTIONS.map((option) => (
                  <button
                    key={option.value ?? "all"}
                    className={styles.dropdownItem}
                    onClick={() => {
                      setBeds(option.value);
                      setOpenDropdown(null);
                    }}
                    type="button"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Price */}
          <div className={styles.pillWrap}>
            <button
              className={styles.pill}
              onClick={() =>
                setOpenDropdown((v) => (v === "price" ? null : "price"))
              }
              type="button"
            >
              <span className={styles.pillIcon}>🏷️</span>
              <span>{pricePillLabel}</span>
              <span className={styles.caret}>▾</span>
            </button>

            {openDropdown === "price" && (
              <div className={styles.priceModal}>
                <div className={styles.priceTabs}>
                  <button
                    className={`${styles.priceTab} ${
                      priceModalTab === "Starting Price"
                        ? styles.priceTabActive
                        : ""
                    }`}
                    onClick={() => setPriceModalTab("Starting Price")}
                    type="button"
                  >
                    {locale === "ar" ? "السعر الابتدائي" : "Starting Price"}
                  </button>
                  <button
                    className={`${styles.priceTab} ${
                      priceModalTab === "Price /sqft"
                        ? styles.priceTabActive
                        : ""
                    }`}
                    onClick={() => setPriceModalTab("Price /sqft")}
                    type="button"
                  >
                    {locale === "ar" ? "السعر /قدم²" : "Price /sqft"}
                  </button>
                </div>

                <div className={styles.priceGrid}>
                  <div className={styles.priceField}>
                    <div className={styles.priceLabel}>
                      {priceModalTab === "Price /sqft"
                        ? locale === "ar"
                          ? "د.إ/قدم²"
                          : "AED/sqft"
                        : locale === "ar"
                        ? "د.إ"
                        : "AED"}
                    </div>
                    <input
                      className={styles.priceInput}
                      value={priceMinInput}
                      onChange={(e) => setPriceMinInput(e.target.value)}
                      placeholder="0"
                      type="number"
                    />
                  </div>

                  <div className={styles.priceField}>
                    <div className={styles.priceLabel}>
                      {priceModalTab === "Price /sqft"
                        ? locale === "ar"
                          ? "د.إ/قدم²"
                          : "AED/sqft"
                        : locale === "ar"
                        ? "د.إ"
                        : "AED"}
                    </div>
                    <input
                      className={styles.priceInput}
                      value={priceMaxInput}
                      onChange={(e) => setPriceMaxInput(e.target.value)}
                      placeholder={locale === "ar" ? "الحد الأقصى" : "Maximum"}
                      type="text"
                    />
                  </div>

                  <button
                    className={styles.resetBtn}
                    onClick={resetPrice}
                    type="button"
                  >
                    {locale === "ar" ? "إعادة تعيين" : "Reset"}
                  </button>
                  <button
                    className={styles.applyBtn}
                    onClick={applyPrice}
                    type="button"
                  >
                    {locale === "ar" ? "تطبيق" : "Apply"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Completion status */}
          <div className={styles.pillWrap}>
            <button
              className={styles.pill}
              onClick={() =>
                setOpenDropdown((v) =>
                  v === "completion" ? null : "completion"
                )
              }
              type="button"
            >
              <span className={styles.pillIcon}>🏗️</span>
              <span>
                {locale === "ar" ? "حالة الإنجاز" : "Completion Status"}
              </span>
              <span className={styles.caret}>▾</span>
            </button>

            {openDropdown === "completion" && (
              <div className={styles.dropdown}>
                {COMPLETION_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    className={styles.dropdownItem}
                    onClick={() => {
                      setCompletionStatus(opt);
                      setOpenDropdown(null);
                    }}
                    type="button"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <label className={styles.toggle3D}>
          <input
            type="checkbox"
            checked={is3D}
            onChange={(e) => setIs3D(e.target.checked)}
          />
          {locale === "ar" ? "تفعيل العرض ثلاثي الأبعاد" : "Enable 3D View"}
        </label>
      </div>

      <div className={styles.mapShell}>
        {/* Map container */}
        <div ref={mapContainerRef} className={styles.mapContainer}>
          {!mapLoaded && (
            <div className={styles.mapLoading}>
              <div className={styles.loadingSpinner}></div>
              {locale === "ar"
                ? "جاري تحميل الخريطة التفاعلية..."
                : "Loading interactive map..."}
            </div>
          )}
        </div>

        {/* Results counter */}
        <div className={styles.resultsCounter}>
          {filteredProjects.length} {locale === "ar" ? "من" : "of"}{" "}
          {allProjects.length} {locale === "ar" ? "مشروع" : "projects"}
        </div>

        {/* Sidebar */}
        <div
          className={`${styles.sidebar} ${
            sidebarOpen ? styles.sidebarOpen : ""
          }`}
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <div className={styles.sidebarHeader}>
            <button
              className={styles.sidebarClose}
              onClick={() => setSidebarOpen(false)}
              type="button"
              aria-label="Close sidebar"
            >
              ✕
            </button>

            <div className={styles.sidebarTitleWrap}>
              <div className={styles.sidebarTitle}>
                {selectedProject?.name ||
                  (locale === "ar" ? "اختر مشروعًا" : "Select a project")}
              </div>
              <div className={styles.sidebarSub}>
                {selectedProject?.sidebar?.community ||
                  (locale === "ar" ? "غير محدد" : "Not specified")}
                {selectedProject?.sidebar?.developer
                  ? ` • ${selectedProject.sidebar.developer}`
                  : ""}
              </div>
            </div>
          </div>

          {selectedProject ? (
            <>
              <div className={styles.sidebarHero}>
                {selectedProject.sidebar?.heroImage ? (
                  <img
                    src={selectedProject.sidebar.heroImage}
                    alt={selectedProject.name}
                    className={styles.sidebarImg}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="sidebarImgFallback">No image available</div>';
                    }}
                  />
                ) : (
                  <div className={styles.sidebarImgFallback}>
                    {locale === "ar"
                      ? "لا توجد صورة متاحة"
                      : "No image available"}
                  </div>
                )}
              </div>

              <div className={styles.sidebarBody}>
                <div className={styles.sidebarPriceBlock}>
                  <div className={styles.sidebarPriceLabel}>
                    {locale === "ar" ? "يبدأ من" : "Starting from"}
                  </div>
                  <div className={styles.sidebarPriceValue}>
                    {formatCurrencyAED(selectedProject.startingPrice, locale)}
                  </div>

                  <div className={styles.sidebarMiniGrid}>
                    <div className={styles.sidebarMiniItem}>
                      <div className={styles.sidebarMiniLabel}>
                        {locale === "ar" ? "السعر /قدم²" : "Price /sqft"}
                      </div>
                      <div className={styles.sidebarMiniValue}>
                        {selectedProject.priceSqft
                          ? formatMetric(
                              selectedProject.priceSqft,
                              "priceSqft",
                              locale
                            )
                          : "—"}
                      </div>
                    </div>

                    <div className={styles.sidebarMiniItem}>
                      <div className={styles.sidebarMiniLabel}>
                        {locale === "ar" ? "غرف النوم" : "Beds"}
                      </div>
                      <div className={styles.sidebarMiniValue}>
                        {formatBedrooms(selectedProject)}
                      </div>
                    </div>

                    <div className={styles.sidebarMiniItem}>
                      <div className={styles.sidebarMiniLabel}>
                        {locale === "ar" ? "المساحة (قدم²)" : "Area (sqft)"}
                      </div>
                      <div className={styles.sidebarMiniValue}>
                        {selectedProject.minArea
                          ? selectedProject.maxArea &&
                            selectedProject.maxArea !== selectedProject.minArea
                            ? `${formatNumber(
                                Math.round(selectedProject.minArea)
                              )} - ${formatNumber(
                                Math.round(selectedProject.maxArea)
                              )}`
                            : `${formatNumber(
                                Math.round(selectedProject.minArea)
                              )}`
                          : "—"}
                      </div>
                    </div>

                    <div className={styles.sidebarMiniItem}>
                      <div className={styles.sidebarMiniLabel}>
                        {locale === "ar" ? "الحالة" : "Status"}
                      </div>
                      <div className={styles.sidebarMiniValue}>
                        {selectedProject.completionStatus}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div className={styles.datesGrid}>
                  <div className={styles.dateItem}>
                    <div className={styles.dateLabel}>
                      {locale === "ar" ? "تاريخ الإنجاز" : "Completion date"}
                    </div>
                    <div className={styles.dateValue}>
                      {selectedProject.sidebar?.completionDate || "—"}
                    </div>
                  </div>
                  <div className={styles.dateItem}>
                    <div className={styles.dateLabel}>
                      {locale === "ar" ? "خطة الدفع" : "Payment Plan"}
                    </div>
                    <div className={styles.dateValue}>
                      {selectedProject.sidebar?.paymentPlan ? (
                        <div className={styles.paymentPlanCard}>
                          {(() => {
                            const paymentPlans = parsePaymentPlanForDisplay(
                              selectedProject.sidebar.paymentPlan
                            );
                            if (paymentPlans.length === 1) {
                              return (
                                <div className={styles.paymentPlanValue}>
                                  {paymentPlans[0].text}
                                </div>
                              );
                            } else if (paymentPlans.length > 1) {
                              return (
                                <div className={styles.multiPaymentPlan}>
                                  {paymentPlans.map((plan) => (
                                    <div
                                      key={plan.id}
                                      className={styles.paymentPlanItem}
                                    >
                                      <div
                                        className={styles.paymentPlanItemHeader}
                                      >
                                        <div
                                          className={
                                            styles.paymentPlanItemLabel
                                          }
                                        >
                                          {plan.label}
                                        </div>
                                        <div
                                          className={styles.paymentPlanBadge}
                                        >
                                          {locale === "ar" ? "خطة" : "Plan"}
                                        </div>
                                      </div>
                                      <div
                                        className={
                                          styles.paymentPlanItemContent
                                        }
                                      >
                                        {plan.text}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              );
                            }
                            return "—";
                          })()}
                        </div>
                      ) : (
                        "—"
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className={styles.descBlock}>
                  <div className={styles.descTitle}>
                    {locale === "ar" ? "الوصف" : "Description"}
                  </div>
                  <div className={styles.descText}>
                    {selectedProject.sidebar?.description ||
                      (locale === "ar"
                        ? "لا يوجد وصف متاح لهذا المشروع."
                        : "No description available for this project.")}
                  </div>
                </div>

                {/* Actions */}
                <div className={styles.sidebarActions}>
                  <button
                    className={styles.actionBtn}
                    onClick={viewProjectDetails}
                    type="button"
                  >
                    {locale === "ar" ? "عرض التفاصيل" : "View Details"}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.sidebarEmpty}>
              <div className={styles.sidebarEmptyIcon}>📍</div>
              <div className={styles.sidebarEmptyText}>
                {locale === "ar"
                  ? "انقر على نقطة زرقاء لعرض تفاصيل المشروع."
                  : "Click on a blue pin to view project details."}
              </div>
            </div>
          )}
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div
            className={styles.searchOverlay}
            onMouseDown={() => setSearchOpen(false)}
          >
            <div
              className={styles.searchModal}
              onMouseDown={(e) => e.stopPropagation()}
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              <div className={styles.searchInputRow}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  className={styles.searchInput}
                  placeholder={
                    locale === "ar" ? "ابحث عن مشروع..." : "Search project..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  className={styles.searchClose}
                  onClick={() => setSearchOpen(false)}
                  type="button"
                >
                  ✕
                </button>
              </div>

              <div className={styles.searchList}>
                {searchResults.length === 0 ? (
                  <div className={styles.searchEmpty}>
                    {searchQuery
                      ? locale === "ar"
                        ? "لم يتم العثور على مشاريع"
                        : "No projects found"
                      : locale === "ar"
                      ? "ابدأ الكتابة للبحث"
                      : "Start typing to search"}
                  </div>
                ) : (
                  searchResults.map((p) => (
                    <button
                      key={p.slug}
                      className={styles.searchItem}
                      onClick={() => flyToProject(p)}
                      type="button"
                    >
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
