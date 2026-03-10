// src/data/dubai-areas-geojson.js
//
// Polygon boundaries for Dubai communities, keyed by actual DLD area names
// (the area_name_en field from DLD transactions — these are the join keys).
//
// Each feature has:
//   dldName  → exact DLD area_name_en value (used to join with dld-area-stats.json)
//   name     → common marketing name shown to users in the sidebar / UI
//
// To add more areas: find the area_name_en in your DLD export,
// look up approximate bounds on Google Maps, add an entry below.
//
// Official shapefile available at:
//   https://www.dubaipulse.gov.ae/data/dm-location/dm_community-open
//   (same Dubai Pulse account — download and replace these approximations)

export const DUBAI_AREAS_GEOJSON = {
  type: "FeatureCollection",
  features: [

    // ── Top transaction volume areas ────────────────────────────────────
    {
      type: "Feature",
      properties: { dldName: "Marsa Dubai",            name: "Dubai Marina" },
      geometry: { type: "Polygon", coordinates: [[[55.134, 25.076],[55.158, 25.076],[55.158, 25.094],[55.134, 25.094],[55.134, 25.076]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Barsha South Fourth", name: "Jumeirah Village Circle (JVC)" },
      geometry: { type: "Polygon", coordinates: [[[55.200, 25.054],[55.226, 25.054],[55.226, 25.077],[55.200, 25.077],[55.200, 25.054]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Burj Khalifa",           name: "Downtown Dubai" },
      geometry: { type: "Polygon", coordinates: [[[55.270, 25.190],[55.289, 25.190],[55.289, 25.205],[55.270, 25.205],[55.270, 25.190]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Thanyah Fifth",       name: "Jumeirah Lake Towers (JLT)" },
      geometry: { type: "Polygon", coordinates: [[[55.150, 25.066],[55.170, 25.066],[55.170, 25.084],[55.150, 25.084],[55.150, 25.066]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Business Bay",           name: "Business Bay" },
      geometry: { type: "Polygon", coordinates: [[[55.260, 25.180],[55.290, 25.180],[55.290, 25.198],[55.260, 25.198],[55.260, 25.180]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Palm Jumeirah",          name: "Palm Jumeirah" },
      geometry: { type: "Polygon", coordinates: [[[55.115, 25.106],[55.155, 25.106],[55.155, 25.148],[55.115, 25.148],[55.115, 25.106]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Merkadh",             name: "Meydan / Sobha Hartland" },
      geometry: { type: "Polygon", coordinates: [[[55.295, 25.155],[55.325, 25.155],[55.325, 25.180],[55.295, 25.180],[55.295, 25.155]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Hadaeq Sheikh Mohammed Bin Rashid", name: "Dubai Hills Estate" },
      geometry: { type: "Polygon", coordinates: [[[55.216, 25.107],[55.256, 25.107],[55.256, 25.138],[55.216, 25.138],[55.216, 25.107]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Khairan First",       name: "Dubai Creek Harbour" },
      geometry: { type: "Polygon", coordinates: [[[55.348, 25.192],[55.386, 25.192],[55.386, 25.224],[55.348, 25.224],[55.348, 25.192]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Madinat Dubai Almelaheyah", name: "Dubai Maritime City / South" },
      geometry: { type: "Polygon", coordinates: [[[55.120, 24.942],[55.190, 24.942],[55.190, 24.992],[55.120, 24.992],[55.120, 24.942]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Jabal Ali First",        name: "Jebel Ali" },
      geometry: { type: "Polygon", coordinates: [[[55.020, 25.016],[55.060, 25.016],[55.060, 25.040],[55.020, 25.040],[55.020, 25.016]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Madinat Al Mataar",      name: "Dubai South / Airport Area" },
      geometry: { type: "Polygon", coordinates: [[[55.150, 24.882],[55.200, 24.882],[55.200, 24.920],[55.150, 24.920],[55.150, 24.882]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Wadi Al Safa 5",         name: "Wadi Al Safa (Arabian Ranches area)" },
      geometry: { type: "Polygon", coordinates: [[[55.248, 25.056],[55.278, 25.056],[55.278, 25.076],[55.248, 25.076],[55.248, 25.056]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Hebiah First",        name: "Damac Hills Area" },
      geometry: { type: "Polygon", coordinates: [[[55.234, 25.036],[55.264, 25.036],[55.264, 25.058],[55.234, 25.058],[55.234, 25.036]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Me'Aisem First",         name: "Motor City / Studio City" },
      geometry: { type: "Polygon", coordinates: [[[55.168, 25.030],[55.198, 25.030],[55.198, 25.054],[55.168, 25.054],[55.168, 25.030]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Jadaf",               name: "Al Jaddaf" },
      geometry: { type: "Polygon", coordinates: [[[55.330, 25.208],[55.355, 25.208],[55.355, 25.228],[55.330, 25.228],[55.330, 25.208]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Wasl",                name: "Al Wasl / Jumeirah" },
      geometry: { type: "Polygon", coordinates: [[[55.235, 25.192],[55.262, 25.192],[55.262, 25.210],[55.235, 25.210],[55.235, 25.192]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Satwa",               name: "Al Satwa" },
      geometry: { type: "Polygon", coordinates: [[[55.258, 25.210],[55.278, 25.210],[55.278, 25.228],[55.258, 25.228],[55.258, 25.210]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Kifaf",               name: "Al Kifaf / World Trade Centre" },
      geometry: { type: "Polygon", coordinates: [[[55.285, 25.222],[55.300, 25.222],[55.300, 25.234],[55.285, 25.234],[55.285, 25.222]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Nadd Hessa",             name: "Nadd Hessa / Sports City" },
      geometry: { type: "Polygon", coordinates: [[[55.354, 25.188],[55.378, 25.188],[55.378, 25.208],[55.354, 25.208],[55.354, 25.188]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Mirdif",                 name: "Mirdif" },
      geometry: { type: "Polygon", coordinates: [[[55.420, 25.212],[55.450, 25.212],[55.450, 25.234],[55.420, 25.234],[55.420, 25.212]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Warsan First",        name: "Warsan / International City" },
      geometry: { type: "Polygon", coordinates: [[[55.400, 25.160],[55.440, 25.160],[55.440, 25.190],[55.400, 25.190],[55.400, 25.160]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Safouh Second",       name: "Al Sufouh / Media City" },
      geometry: { type: "Polygon", coordinates: [[[55.162, 25.098],[55.190, 25.098],[55.190, 25.118],[55.162, 25.118],[55.162, 25.098]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Thanyah Third",       name: "Barsha Heights (TECOM)" },
      geometry: { type: "Polygon", coordinates: [[[55.178, 25.092],[55.202, 25.092],[55.202, 25.112],[55.178, 25.112],[55.178, 25.092]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Dubai Investment Park First",  name: "Dubai Investment Park (DIP)" },
      geometry: { type: "Polygon", coordinates: [[[55.162, 24.992],[55.200, 24.992],[55.200, 25.022],[55.162, 25.022],[55.162, 24.992]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Dubai Investment Park Second", name: "Dubai Investment Park 2" },
      geometry: { type: "Polygon", coordinates: [[[55.198, 24.988],[55.234, 24.988],[55.234, 25.016],[55.198, 25.016],[55.198, 24.988]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Jumeirah First",         name: "Jumeirah 1" },
      geometry: { type: "Polygon", coordinates: [[[55.214, 25.196],[55.244, 25.196],[55.244, 25.216],[55.214, 25.216],[55.214, 25.196]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Al Hebiah Fourth",       name: "Al Hebiah / DAMAC Hills 2 area" },
      geometry: { type: "Polygon", coordinates: [[[55.282, 25.000],[55.320, 25.000],[55.320, 25.028],[55.282, 25.028],[55.282, 25.000]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Wadi Al Safa 3",         name: "Wadi Al Safa 3 / Reem" },
      geometry: { type: "Polygon", coordinates: [[[55.302, 25.064],[55.330, 25.064],[55.330, 25.086],[55.302, 25.086],[55.302, 25.064]]] },
    },
    {
      type: "Feature",
      properties: { dldName: "Nad Al Shiba First",     name: "Nad Al Sheba 1" },
      geometry: { type: "Polygon", coordinates: [[[55.314, 25.146],[55.344, 25.146],[55.344, 25.170],[55.314, 25.170],[55.314, 25.146]]] },
    },
  ],
};