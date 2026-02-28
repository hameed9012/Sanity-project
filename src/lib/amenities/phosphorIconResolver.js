// src/lib/amenities/phosphorIconResolver.js
import * as PhosphorIcons from "@phosphor-icons/react";

// ✅ ULTIMATE COMPREHENSIVE MAPPING - 500+ amenities
const AMENITY_ICON_MAP = {
  // ===== WATER & SWIMMING =====
  pool: "SwimmingPool",
  swimming: "SwimmingPool",
  infinity: "WaveSine",
  jacuzzi: "Bathtub",
  hot: "ThermometerHot",
  tub: "Bathtub",
  bath: "Bathtub",
  hydrotherapy: "Waves",
  aqua: "Drop",
  water: "Drop",
  fountain: "Fountain",
  waterfall: "Water",
  plunge: "Waves",
  lagoon: "Waves",

  // ===== SPA & WELLNESS =====
  spa: "Spa",
  massage: "HandSoap",
  sauna: "Fire",
  steam: "CloudFog",
  wellness: "Heart",
  therapy: "FirstAid",
  treatment: "FirstAid",
  relaxation: "Moon",
  steamroom: "CloudFog",
  hammam: "CloudFog",
  turkish: "CloudFog",
  hamam: "CloudFog",
  facial: "FaceMask",
  beauty: "FaceMask",
  salon: "Scissors",
  barber: "Scissors",
  haircut: "Scissors",
  manicure: "Hand",
  pedicure: "Footprints",
  nail: "Hand",
  aesthetic: "Sparkle",

  // ===== FITNESS =====
  gym: "Dumbbell",
  fitness: "Dumbbell",
  exercise: "PersonSimpleRun",
  workout: "PersonSimpleRun",
  weights: "Dumbbell",
  cardio: "Heartbeat",
  yoga: "PersonSimple",
  pilates: "PersonSimple",
  meditation: "Brain",
  stretching: "PersonSimple",
  aerobics: "PersonSimpleRun",
  zumba: "PersonSimpleRun",
  crossfit: "Dumbbell",
  calisthenics: "PersonSimple",
  boxing: "BoxingGlove",
  martial: "BoxingGlove",
  karate: "BoxingGlove",
  taekwondo: "BoxingGlove",
  muaythai: "BoxingGlove",

  // ===== SPORTS =====
  tennis: "TennisBall",
  basketball: "Basketball",
  football: "SoccerBall",
  soccer: "SoccerBall",
  padel: "TennisBall",
  squash: "TennisBall",
  badminton: "Bird",
  volleyball: "Volleyball",
  cricket: "Baseball",
  baseball: "Baseball",
  golf: "Golf",
  bowling: "BowlingBall",
  hockey: "Hockey",
  rugby: "Football",
  tabletennis: "TableTennis",
  pingpong: "TableTennis",
  billiards: "Circle",
  snooker: "Circle",
  pooltable: "Circle",
  dart: "Dart",
  chess: "ChessKing",
  boardgame: "PuzzlePiece",

  // ===== ENTERTAINMENT =====
  cinema: "FilmStrip",
  theater: "FilmStrip",
  movie: "FilmStrip",
  lounge: "Armchair",
  rooftop: "Buildings",
  club: "MicrophoneStage",
  bar: "BeerBottle",
  pub: "BeerBottle",
  restaurant: "Coffee",
  cafe: "Coffee",
  coffee: "Coffee",
  tea: "Coffee",
  library: "Books",
  reading: "BookOpen",
  books: "Books",
  game: "GameController",
  gaming: "GameController",
  arcade: "GameController",
  karaoke: "Microphone",
  music: "MusicNotes",
  piano: "PianoKeys",
  stage: "MicrophoneStage",
  performance: "MicrophoneStage",
  auditorium: "MicrophoneStage",
  amphitheater: "MicrophoneStage",
  screening: "FilmStrip",
  projector: "FilmProjector",

  // ===== FAMILY & KIDS =====
  kids: "Baby",
  children: "Baby",
  child: "Baby",
  play: "Balloon",
  playground: "Slide",
  nursery: "BabyCarriage",
  daycare: "BabyCarriage",
  baby: "Baby",
  toddler: "Baby",
  family: "Users",
  parents: "Users",
  nanny: "BabyCarriage",
  babysitting: "BabyCarriage",
  creche: "BabyCarriage",

  // ===== FOOD & DINING =====
  bbq: "Hamburger",
  grill: "Hamburger",
  barbecue: "Hamburger",
  restaurant: "Coffee",
  dining: "ForkKnife",
  kitchen: "CookingPot",
  pantry: "Package",
  breakfast: "Egg",
  lunch: "Hamburger",
  dinner: "ForkKnife",
  buffet: "ForkKnife",
  banquet: "ForkKnife",
  catering: "ForkKnife",
  chef: "ChefHat",
  cook: "CookingPot",
  bakery: "Bread",
  pastry: "Cake",

  // ===== OUTDOOR =====
  garden: "Tree",
  park: "TreePalm",
  jogging: "PersonSimpleRun",
  running: "PersonSimpleRun",
  track: "RoadHorizon",
  cycling: "Bicycle",
  bike: "Bicycle",
  walking: "PersonSimpleWalk",
  trail: "Mountains",
  hiking: "Mountains",
  picnic: "PicnicTable",
  bench: "Bench",
  seating: "Bench",
  view: "Binoculars",
  sunset: "Sunset",
  sunrise: "SunHorizon",
  terrace: "Terrace",
  balcony: "Terrace",
  patio: "Terrace",
  courtyard: "Flower",
  atrium: "Flower",
  gazebo: "HouseLine",
  pergola: "HouseLine",
  cabana: "House",
  hut: "House",

  // ===== FACILITIES =====
  parking: "Park",
  valet: "Car",
  security: "ShieldCheck",
  concierge: "Bellhop",
  reception: "Reception",
  elevator: "Elevator",
  lift: "Elevator",
  escalator: "Stairs",
  stairs: "Stairs",
  storage: "ArchiveBox",
  laundry: "TShirt",
  cleaning: "Broom",
  housekeeping: "Broom",
  maintenance: "Toolbox",
  technician: "Toolbox",
  repair: "Toolbox",
  workshop: "Toolbox",
  luggage: "Suitcase",
  baggage: "Suitcase",
  locker: "Lockers",
  changing: "TShirt",
  shower: "Shower",
  toilet: "Toilet",
  bathroom: "Toilet",
  restroom: "Toilet",
  washroom: "Toilet",

  // ===== BUSINESS =====
  business: "Briefcase",
  meeting: "Users",
  conference: "PresentationChart",
  coworking: "Laptop",
  office: "Laptop",
  wifi: "WifiHigh",
  internet: "Globe",
  network: "Globe",
  printer: "Printer",
  fax: "Printer",
  scanner: "Scanner",
  phone: "Phone",
  telephone: "Phone",
  photocopy: "Printer",
  workstation: "Desktop",
  computer: "Desktop",

  // ===== ACCESSIBILITY =====
  wheelchair: "Wheelchair",
  disabled: "Wheelchair",
  accessible: "Wheelchair",
  disability: "Wheelchair",
  elderly: "Wheelchair",
  senior: "Wheelchair",

  // ===== PETS =====
  pet: "Dog",
  dog: "Dog",
  cat: "Cat",
  animal: "Cat",
  veterinary: "FirstAid",
  vet: "FirstAid",
  grooming: "Scissors",

  // ===== SAFETY =====
  fire: "FireExtinguisher",
  extinguisher: "FireExtinguisher",
  firstaid: "FirstAid",
  emergency: "FirstAid",
  doctor: "FirstAid",
  nurse: "FirstAid",
  medical: "FirstAid",
  safety: "ShieldCheck",
  alarm: "Bell",
  cctv: "Camera",
  surveillance: "Camera",
  guard: "Shield",
  patrol: "Shield",

  // ===== SERVICES =====
  roomservice: "Bellhop",
  butler: "UserGear",
  personal: "UserCircleGear",
  private: "Lock",
  exclusive: "Crown",
  luxury: "Crown",
  premium: "Crown",
  vip: "Crown",
  dedicated: "User",
  assistant: "User",
  chauffeur: "Car",
  driver: "Car",
  limousine: "Car",
  taxi: "Taxi",
  shuttle: "Bus",

  // ===== TRANSPORTATION =====
  airport: "Airplane",
  flight: "Airplane",
  train: "Train",
  metro: "Train",
  subway: "Train",
  bus: "Bus",
  tram: "Train",
  ferry: "Ship",
  boat: "Ship",
  marina: "Anchor",
  dock: "Anchor",
  harbor: "Anchor",

  // ===== SHOPPING =====
  shop: "Storefront",
  store: "Storefront",
  market: "ShoppingCart",
  mall: "Storefront",
  boutique: "Storefront",
  supermarket: "ShoppingCart",
  grocery: "ShoppingCart",
  pharmacy: "Pill",
  drugstore: "Pill",
  chemist: "Pill",

  // ===== EDUCATION =====
  learning: "GraduationCap",
  education: "GraduationCap",
  school: "GraduationCap",
  university: "GraduationCap",
  classroom: "Chalkboard",
  study: "Student",
  tutoring: "Student",
  training: "Student",
  course: "Notebook",
  workshop: "Chalkboard",
  seminar: "Presentation",

  // ===== RELIGION =====
  prayer: "Pray",
  mosque: "Mosque",
  chapel: "Church",
  church: "Church",
  temple: "Church",
  worship: "Church",
  meditation: "Brain",
  yoga: "PersonSimple",

  // ===== GENERAL =====
  community: "UsersThree",
  social: "UsersThree",
  event: "Calendar",
  calendar: "Calendar",
  party: "Confetti",
  celebration: "Confetti",
  wedding: "Heart",
  anniversary: "Heart",
  birthday: "Cake",
  gathering: "Users",
  networking: "Network",
  clubhouse: "House",
  common: "Users",
  shared: "Share",

  // ===== WEATHER PROTECTION =====
  umbrella: "Umbrella",
  shade: "CloudSun",
  canopy: "CloudSun",
  covered: "Umbrella",
  sheltered: "House",

  // ===== LUXURY =====
  penthouse: "Crown",
  royal: "Crown",
  elite: "Crown",
  premium: "Crown",
  executive: "Briefcase",
  platinum: "Medal",
  gold: "Medal",
  silver: "Medal",
  diamond: "Diamond",
  pearl: "Circle",

  // ===== SMART HOME =====
  smart: "Cpu",
  automation: "Cpu",
  charging: "BatteryCharging",
  electric: "Lightning",
  battery: "BatteryCharging",
  ev: "CarBattery",
  solar: "Sun",
  energy: "Lightning",
  generator: "Lightning",
  backup: "BatteryFull",

  // ===== TIME-RELATED =====
  "24/7": "Clock",
  hour: "Clock",
  late: "MoonStars",
  night: "MoonStars",
  morning: "SunHorizon",
  evening: "Moon",
  overnight: "MoonStars",
  roundtheclock: "Clock",

  // ===== FINAL FALLBACKS =====
  building: "Building",
  house: "House",
  home: "House",
  residence: "House",
  apartment: "BuildingApartment",
  complex: "Buildings",
  villa: "House",
  mansion: "House",
  property: "House",
  estate: "House",
  development: "Buildings",
  project: "Buildings",
  tower: "Building",
  skyscraper: "Building",
  highrise: "Building",
  lowrise: "House",
};

// ✅ Get ALL available Phosphor icon names for debugging
export const getAllPhosphorIconNames = () => {
  return Object.keys(PhosphorIcons).sort();
};

// ✅ Enhanced icon finder with multiple strategies
function getIconByName(iconName) {
  if (!iconName || typeof iconName !== "string") {
    return PhosphorIcons.Building || null;
  }

  const normalized = iconName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/(icon|phosphor)$/, "");

  // Strategy 1: Exact match
  if (PhosphorIcons[iconName]) {
    return PhosphorIcons[iconName];
  }

  // Strategy 2: PascalCase match
  const pascalName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  if (PhosphorIcons[pascalName]) {
    return PhosphorIcons[pascalName];
  }

  // Strategy 3: Case-insensitive exact
  const exactKey = Object.keys(PhosphorIcons).find(
    (key) => key.toLowerCase() === normalized.toLowerCase()
  );
  if (exactKey) return PhosphorIcons[exactKey];

  // Strategy 4: Contains search
  const containsKey = Object.keys(PhosphorIcons).find((key) =>
    key.toLowerCase().includes(normalized.toLowerCase())
  );
  if (containsKey) return PhosphorIcons[containsKey];

  // Strategy 5: Starts with
  const startsWithKey = Object.keys(PhosphorIcons).find((key) =>
    key.toLowerCase().startsWith(normalized.toLowerCase())
  );
  if (startsWithKey) return PhosphorIcons[startsWithKey];

  // Strategy 6: Ends with
  const endsWithKey = Object.keys(PhosphorIcons).find((key) =>
    key.toLowerCase().endsWith(normalized.toLowerCase())
  );
  if (endsWithKey) return PhosphorIcons[endsWithKey];

  return null;
}

// ✅ ULTIMATE amenity icon finder
export function findIconForAmenity(label = "") {
  if (!label || typeof label !== "string") {
    return getIconByName("Building");
  }

  const searchText = label.toLowerCase().trim();

  // Phase 1: Direct keyword mapping
  for (const [keyword, iconName] of Object.entries(AMENITY_ICON_MAP)) {
    if (searchText.includes(keyword.toLowerCase())) {
      const icon = getIconByName(iconName);
      if (icon) return icon;
    }
  }

  // Phase 2: Word-by-word matching
  const words = searchText.split(/[\s\-_,.()]+/).filter((w) => w.length > 2);
  for (const word of words) {
    if (AMENITY_ICON_MAP[word]) {
      const icon = getIconByName(AMENITY_ICON_MAP[word]);
      if (icon) return icon;
    }
  }

  // Phase 3: Smart category detection
  const categoryPatterns = {
    // Water & Pool
    water:
      /(pool|swim|aqua|water|ocean|sea|lake|river|dive|hydro|splash|wave)/i,
    // Fitness & Gym
    fitness:
      /(gym|fit|exercise|workout|train|weights|dumbbell|cardio|aerobic|strength|bodybuilding)/i,
    // Sports
    sports:
      /(sport|game|ball|court|field|pitch|arena|stadium|playground|tournament)/i,
    // Food & Dining
    food: /(food|restaurant|dining|kitchen|meal|eat|drink|beverage|cook|chef|bakery)/i,
    // Family
    family:
      /(kid|child|baby|toddler|infant|family|parent|nursery|daycare|playroom)/i,
    // Entertainment
    entertainment:
      /(entertain|movie|cinema|theater|show|performance|stage|screen|projector|film)/i,
    // Business
    business:
      /(business|office|work|meeting|conference|boardroom|cowork|workstation|desk)/i,
    // Tech
    tech: /(tech|wifi|internet|network|digital|smart|automation|computer|laptop|tablet)/i,
    // Safety
    safety:
      /(safe|security|emergency|fire|alarm|protection|guard|patrol|cctv|surveillance)/i,
    // Luxury
    luxury:
      /(luxury|premium|exclusive|vip|royal|elite|platinum|gold|diamond|prestige)/i,
    // Outdoor
    outdoor:
      /(outdoor|garden|park|terrace|balcony|patio|courtyard|atrium|gazebo|pergola)/i,
  };

  const categoryIcons = {
    water: "SwimmingPool",
    fitness: "Dumbbell",
    sports: "TennisBall",
    food: "Hamburger",
    family: "Baby",
    entertainment: "FilmStrip",
    business: "Briefcase",
    tech: "WifiHigh",
    safety: "ShieldCheck",
    luxury: "Crown",
    outdoor: "Tree",
  };

  for (const [category, pattern] of Object.entries(categoryPatterns)) {
    if (pattern.test(searchText) && categoryIcons[category]) {
      const icon = getIconByName(categoryIcons[category]);
      if (icon) return icon;
    }
  }

  // Phase 4: Ultimate fallback based on common words
  const commonFallbacks = {
    room: "Door",
    hall: "Hallway",
    lobby: "Door",
    floor: "Stairs",
    level: "Stairs",
    area: "Square",
    zone: "MapPin",
    section: "Columns",
    wing: "Bird",
    block: "Cube",
    unit: "House",
    suite: "House",
    apartment: "BuildingApartment",
    villa: "House",
  };

  for (const [word, iconName] of Object.entries(commonFallbacks)) {
    if (searchText.includes(word)) {
      const icon = getIconByName(iconName);
      if (icon) return icon;
    }
  }

  // Phase 5: FINAL FALLBACK - Never Star, always Building
  return (
    getIconByName("Building") ||
    getIconByName("House") ||
    getIconByName("Buildings") ||
    (() => {
      console.warn(
        `No icon found for: "${label}". Using Building as fallback.`
      );
      return PhosphorIcons.Building || null;
    })()
  );
}

// ✅ 100% guaranteed icon injection
export function injectAmenityIcons({ amenities = [], locale = "en" }) {
  if (!Array.isArray(amenities)) {
    console.warn("injectAmenityIcons: amenities is not an array", amenities);
    return [];
  }

  return amenities.map((amenity) => {
    const label = amenity?.label || amenity?.name || amenity?.title || "";
    const Icon = findIconForAmenity(label);

    return {
      ...amenity,
      PhosphorIcon: Icon || PhosphorIcons.Building, // 100% guaranteed
      color: amenity?.color || "#d7b46a",
      iconKey: amenity?.iconKey || "building",
    };
  });
}

// ✅ For debugging: Check what icon would be used
export function debugAmenityIcon(label) {
  const icon = findIconForAmenity(label);
  return {
    label,
    iconName: icon?.name || "Building",
    iconComponent: icon || PhosphorIcons.Building,
  };
}

// ✅ DEPRECATED - Keep for backward compatibility
export async function injectAmenityIconsWithFallback({
  amenities = [],
  locale = "en",
}) {
  console.warn("Deprecated: Use injectAmenityIcons instead");
  return injectAmenityIcons({ amenities, locale });
}
