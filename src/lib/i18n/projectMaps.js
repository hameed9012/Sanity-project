// src/lib/i18n/projectMaps.js

// Map your PROJECT_DATA_MAP keys -> translation keys in your JSON (projectNames.*)
export const PROJECT_NAME_KEY_MAP = {
  // ==================== SOBHA ====================
  "sobha-one": "sobhaOne",
  "the-element": "sobhaTheElement",
  skyparks: "sobhaSkyParks",
  central: "sobhaCentral",
  aquamont: "sobhaAquamont",
  "aqua-crest": "sobhaAquaCrest",
  orbis: "sobhaOrbis",
  "sobha-solis": "sobhaSolis",
  "sobha-estates": "sobhaEstates",
  "siniya-island": "sobhaSiniyaIsland",
  "sobha-elwood": "sobhaElwood",
  "seahaven-penthouse": "sobhaSeaHavenPenthouse",
  verde: "sobhaVerde",
  reserve: "sobhaReserve",

  // ==================== DAMAC ====================
  "chelsea-residences": "chelseaResidences",
  "safa-gate": "damacSafaGate",
  "damac-islands-2": "damacIslands2",
  "mercedes-benz": "mercedesBenz",

  // ==================== AZIZI ====================
  milan: "aziziMilan",
  amir: "aziziAmir",
  "creek-views-1": "aziziCreekViews1",
  "creek-views-2": "aziziCreekViews2",
  "creek-views-3": "aziziCreekViews3",
  david: "aziziDavid",
  aryan: "aziziArian",
  abraham: "aziziAbraham",
  "farishta-2": "aziziFarishta2",
  gabriel: "aziziGabriel",
  lina: "aziziLina",
  noura: "aziziNoura",
  raffi: "aziziRaffi",
  sikander: "aziziSikander",
  wares: "aziziWares",
  emerald: "aziziEmerald",
  monaco: "aziziMonaco",
  venice: "aziziVenice",
  "riviera-retails": "aziziRivieraRetails",
  leily: "aziziLeily", // ✅ ADDED

  // ==================== ARADA ====================
  massar: "aradaMassar3",
  armani: "armaniBeachResidences",

  // ==================== SAMANA ====================
  "imperial-garden": "imperialGarden",
  "boulevard-heights": "boulevardHeights",

  // ==================== BINGHATTI ====================
  aquarise: "aquarise",
  bugatti: "bugattiResidences",

  // ==================== PRESTIGE ONE ====================
  "hilton-residences": "hiltonResidencesDMC",

  // ==================== TIGER ====================
  orchid: "orchidTiger",
  "altai-tower": "alatiTower",
  "ananda-tower": "anandaTower",
  "auresta-tower": "aurestaTower",
  "elbrus-tower": "elbrusTower",
  "guzel-tower": "guzelTower",
  "jade-tower": "jadeTower",
  "lilium-tower": "liliumTower",
  "red-square-tower": "redSquareTower",
  "sky-tower": "skyTower",
  "volga-tower": "volgaTower",

  // ==================== GULF LAND PROPERTY ====================
  "tonino-lamborghini-residences": "toninoLamborghiniResidences",

  // ==================== EVOLUTIONS ====================
  "butterfly-towers": "butterflyTowers",

  // ==================== GFS ====================
  "coventry-curve-2": "coventryCurve2",

  // ==================== LAZORD (slug: lapis) ====================
  lapis: "lazordByLapis",

  // ==================== ELLINGTON ====================
  "eltiera-views": "eltieraViews",

  // ==================== DANUBE ====================
  "danube-shahrukhz": "shahrukhzByDanube",
  "danube-aspirz": "danubeAspirz",

  // ==================== AJMAL MAKAN ====================
  "the-view-island": "theViewIsland",

  // ==================== TARAF ====================
  "terra-golf-phase-2": "terraGolfPhase2",

  // ==================== REPORTAGE ====================
  "reportage-hills": "reportageHills",
};

// Map your folder developer slugs -> translation keys in your JSON (developers.*)
export const DEVELOPER_KEY_MAP = {
  sobha: "sobhaRealty",
  damac: "damacProperties",
  azizi: "aziziDevelopments",
  arada: "arada",
  binghatti: "binghatti",
  samana: "samana",
  "prestige-one": "prestigeOneDevelopments",
  tiger: "tiger",
  "gulf-land-property": "gulfLandProperty",
  evolutions: "evolutions",
  gfs: "gfs",
  lazord: "lazord",
  lapis: "lazord", // Alias since lapis uses lazord translations
  ellington: "ellington",
  danube: "danubeProperties",
  "ajmal-makan": "ajmalMakan",
  taraf: "taraf",
  reportage: "reportage",
  nakheel: "nakheel",

  // aliases
  "gulf-land": "gulfLandProperty",
  "ellington-properties": "ellington",
  prestigeone: "prestigeOneDevelopments",
  ajmal: "ajmalMakan",
};

// Your UI categories JSON uses: apartments, villas, commercial, penthouses, mixedUse
export const CATEGORY_KEY_MAP = {
  apartments: "apartments",
  villas: "villas",
  "commercial-retail": "commercial",
  penthouses: "penthouses",
  "mixed-use": "mixedUse",
  commercial: "commercial",
  retail: "commercial",
  office: "commercial",
};

// Safe translation function with fallback
export const safeT = (t, key, values, fallback) => {
  try {
    const v = t?.(key, values);
    if (v === undefined || v === null || v === "" || v === key) return fallback;
    return v;
  } catch {
    return fallback;
  }
};

// Helper function to get translation for project
export const getProjectTranslation = (t, projectSlug, fallback = "") => {
  const translationKey = PROJECT_NAME_KEY_MAP[projectSlug];
  if (!translationKey) return fallback || projectSlug;
  return safeT(
    t,
    `projectNames.${translationKey}`,
    null,
    fallback || projectSlug,
  );
};

// Helper function to get translation for developer
export const getDeveloperTranslation = (t, developerSlug, fallback = "") => {
  const normalizedSlug = String(developerSlug || "").toLowerCase();

  let translationKey = DEVELOPER_KEY_MAP[normalizedSlug];

  if (!translationKey) {
    for (const [key, value] of Object.entries(DEVELOPER_KEY_MAP)) {
      if (normalizedSlug.includes(key) || key.includes(normalizedSlug)) {
        translationKey = value;
        break;
      }
    }
  }

  if (!translationKey) return fallback || developerSlug;
  return safeT(
    t,
    `developers.${translationKey}`,
    null,
    fallback || developerSlug,
  );
};

// Helper function to get translation for category
export const getCategoryTranslation = (t, categorySlug, fallback = "") => {
  const translationKey = CATEGORY_KEY_MAP[categorySlug];
  if (!translationKey) return fallback || categorySlug;
  return safeT(
    t,
    `categories.${translationKey}`,
    null,
    fallback || categorySlug,
  );
};

// Get all project slugs for iteration
export const getAllProjectSlugs = () => Object.keys(PROJECT_NAME_KEY_MAP);

export const hasProjectTranslation = (projectSlug) =>
  Object.prototype.hasOwnProperty.call(PROJECT_NAME_KEY_MAP, projectSlug);

export const hasDeveloperTranslation = (developerSlug) => {
  const normalizedSlug = String(developerSlug || "").toLowerCase();
  if (Object.prototype.hasOwnProperty.call(DEVELOPER_KEY_MAP, normalizedSlug))
    return true;

  for (const key of Object.keys(DEVELOPER_KEY_MAP)) {
    if (normalizedSlug.includes(key) || key.includes(normalizedSlug))
      return true;
  }
  return false;
};

export const hasCategoryTranslation = (categorySlug) =>
  Object.prototype.hasOwnProperty.call(CATEGORY_KEY_MAP, categorySlug);

// Get all projects by developer (keyword matching)
export const getProjectsByDeveloper = (developerSlug) => {
  const allProjects = getAllProjectSlugs();
  const normalizedSlug = String(developerSlug || "").toLowerCase();

  const developerKeywords = {
    sobha: [
      "sobha",
      "aqua",
      "central",
      "skyparks",
      "orbis",
      "solis",
      "verde",
      "reserve",
      "element",
      "elwood",
      "siniya",
      "seahaven",
      "estates",
      "one",
    ],
    damac: ["damac", "chelsea", "safa", "mercedes", "islands"],
    azizi: [
      "azizi",
      "milan",
      "amir",
      "creek",
      "david",
      "emerald",
      "farishta",
      "gabriel",
      "lina",
      "noura",
      "raffi",
      "sikander",
      "wares",
      "aryan",
      "venice",
      "abraham",
      "monaco",
      "riviera",
      "leily", // ✅ ADDED
    ],
    arada: ["arada", "massar", "armani"],
    samana: ["samana", "imperial", "boulevard"],
    binghatti: ["binghatti", "aquarise", "bugatti", "mercedes"],
    tiger: [
      "tiger",
      "orchid",
      "alati",
      "ananda",
      "auresta",
      "elbrus",
      "guzel",
      "jade",
      "lilium",
      "red-square",
      "sky",
      "volga",
    ],
    "gulf-land-property": ["tonino", "lamborghini"],
    evolutions: ["butterfly"],
    gfs: ["coventry"],
    lazord: ["lapis"],
    ellington: ["eltiera"],
    danube: ["danube", "shahrukhz", "aspirz"],
    "ajmal-makan": ["view-island"],
    taraf: ["terra", "golf"],
    reportage: ["reportage"],
    "prestige-one": ["hilton"],
  };

  const keywords = developerKeywords[normalizedSlug] || [normalizedSlug];

  return allProjects.filter((project) =>
    keywords.some((keyword) => String(project).includes(keyword)),
  );
};

// Get project developer slug from project slug
export const getDeveloperFromProject = (projectSlug) => {
  const projectToDeveloperMap = {
    // Sobha
    "sobha-one": "sobha",
    "the-element": "sobha",
    skyparks: "sobha",
    central: "sobha",
    aquamont: "sobha",
    "aqua-crest": "sobha",
    orbis: "sobha",
    "sobha-solis": "sobha",
    "sobha-estates": "sobha",
    "siniya-island": "sobha",
    "sobha-elwood": "sobha",
    "seahaven-penthouse": "sobha",
    verde: "sobha",
    reserve: "sobha",

    // Damac
    "chelsea-residences": "damac",
    "safa-gate": "damac",
    "damac-islands-2": "damac",
    "mercedes-benz": "damac",

    // Azizi
    milan: "azizi",
    amir: "azizi",
    "creek-views-1": "azizi",
    "creek-views-2": "azizi",
    "creek-views-3": "azizi",
    david: "azizi",
    aryan: "azizi",
    abraham: "azizi",
    "farishta-2": "azizi",
    gabriel: "azizi",
    lina: "azizi",
    noura: "azizi",
    raffi: "azizi",
    sikander: "azizi",
    wares: "azizi",
    "riviera-retails": "azizi",
    emerald: "azizi",
    monaco: "azizi",
    venice: "azizi",
    leily: "azizi", // ✅ ADDED

    // Arada
    massar: "arada",
    armani: "arada",

    // Samana
    "imperial-garden": "samana",
    "boulevard-heights": "samana",

    // Binghatti
    aquarise: "binghatti",
    bugatti: "binghatti",

    // Prestige One
    "hilton-residences": "prestige-one",

    // Tiger
    orchid: "tiger",
    "altai-tower": "tiger",
    "ananda-tower": "tiger",
    "auresta-tower": "tiger",
    "elbrus-tower": "tiger",
    "guzel-tower": "tiger",
    "jade-tower": "tiger",
    "lilium-tower": "tiger",
    "red-square-tower": "tiger",
    "sky-tower": "tiger",
    "volga-tower": "tiger",

    // Gulf Land Property
    "tonino-lamborghini-residences": "gulf-land-property",

    // Evolutions
    "butterfly-towers": "evolutions",

    // GFS
    "coventry-curve-2": "gfs",

    // Lazord/Lapis
    lapis: "lazord",

    // Ellington
    "eltiera-views": "ellington",

    // Danube
    "danube-shahrukhz": "danube",
    "danube-aspirz": "danube",

    // Ajmal Makan
    "the-view-island": "ajmal-makan",

    // Taraf
    "terra-golf-phase-2": "taraf",

    // Reportage
    "reportage-hills": "reportage",
  };

  return projectToDeveloperMap[projectSlug] || "";
};

// Get project category from project slug
export const getCategoryFromProject = (projectSlug) => {
  const projectCategoryMap = {
    // Villas
    "sobha-estates": "villas",
    "siniya-island": "villas",
    "sobha-elwood": "villas",
    verde: "villas",
    reserve: "villas",
    massar: "villas",
    "damac-islands-2": "villas",
    "the-view-island": "villas",
    "terra-golf-phase-2": "villas",
    monaco: "villas",

    // Penthouses
    "seahaven-penthouse": "penthouses",
    bugatti: "penthouses",

    // Commercial/Retail
    "riviera-retails": "commercial-retail",
    "danube-shahrukhz": "commercial-retail",
    "danube-aspirz": "commercial-retail",
    emerald: "commercial-retail",
  };

  return projectCategoryMap[projectSlug] || "apartments";
};

// Comprehensive project info getter
export const getProjectInfo = (t, projectSlug) => {
  const projectName = getProjectTranslation(t, projectSlug, projectSlug);
  const developerSlug = getDeveloperFromProject(projectSlug);
  const developerName = getDeveloperTranslation(
    t,
    developerSlug,
    developerSlug,
  );
  const categorySlug = getCategoryFromProject(projectSlug);
  const categoryName = getCategoryTranslation(t, categorySlug, categorySlug);

  return {
    projectSlug,
    projectName,
    developerSlug,
    developerName,
    categorySlug,
    categoryName,
    translationKey: PROJECT_NAME_KEY_MAP[projectSlug],
  };
};

// Batch translation for multiple projects
export const batchTranslateProjects = (t, projectSlugs) => {
  return projectSlugs.map((slug) => getProjectInfo(t, slug));
};
