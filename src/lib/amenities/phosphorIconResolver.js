// src/lib/amenities/phosphorIconResolver.js
// All icon names verified against @phosphor-icons/react@^2.1.10
// Missing icons replaced: Dumbbell→Barbell, Pool→SwimmingPool, Ship→Waves,
// Slide→Playground, Sunset→SunHorizon, Bench→Park, Fountain→Drop,
// FilmProjector→ProjectorScreen, ChessKing→Strategy, Scanner→Scan, Hallway→Door
import * as PhosphorIcons from "@phosphor-icons/react";

const AMENITY_ICON_MAP = {
  // Water & Swimming
  pool: "SwimmingPool", swim: "SwimmingPool", swimming: "SwimmingPool",
  infinity: "WaveSine", jacuzzi: "Bathtub", tub: "Bathtub", bath: "Bathtub",
  hydrotherapy: "Waves", aqua: "Drop", water: "Drop", fountain: "Drop",
  waterfall: "Waves", plunge: "Waves", lagoon: "Waves", lazy: "WaveSine",
  river: "WaveSine", hot: "Fire",

  // Spa & Wellness
  spa: "Leaf", massage: "HandSoap", sauna: "Fire", steam: "Wind",
  wellness: "Heart", therapy: "FirstAid", treatment: "FirstAid",
  relaxation: "Moon", hammam: "Wind", turkish: "Wind", hamam: "Wind",
  facial: "Sparkle", beauty: "Sparkle", salon: "Scissors", barber: "Scissors",
  haircut: "Scissors", manicure: "Hand", nail: "Hand", aesthetic: "Sparkle",

  // Fitness
  gym: "Barbell", fitness: "Barbell", exercise: "PersonSimpleRun",
  workout: "PersonSimpleRun", weights: "Barbell", dumbbell: "Barbell",
  cardio: "Heartbeat", yoga: "PersonSimple", pilates: "PersonSimple",
  meditation: "Brain", stretching: "PersonSimple", aerobics: "PersonSimpleRun",
  crossfit: "Barbell", boxing: "BoxingGlove", martial: "BoxingGlove",
  karate: "BoxingGlove",

  // Sports
  tennis: "TennisBall", basketball: "Basketball", football: "SoccerBall",
  soccer: "SoccerBall", padel: "TennisBall", squash: "TennisBall",
  badminton: "TennisBall", volleyball: "Volleyball", cricket: "Baseball",
  baseball: "Baseball", golf: "Golf", bowling: "BowlingBall",
  dart: "Crosshair", chess: "Strategy", boardgame: "GameController",

  // Entertainment
  cinema: "FilmStrip", theater: "FilmStrip", movie: "FilmStrip",
  lounge: "Armchair", rooftop: "Buildings", club: "MicrophoneStage",
  bar: "BeerBottle", pub: "BeerBottle", restaurant: "Coffee",
  cafe: "Coffee", coffee: "Coffee", library: "Books", reading: "BookOpen",
  books: "Books", game: "GameController", gaming: "GameController",
  arcade: "GameController", karaoke: "Microphone", music: "MusicNotes",
  piano: "PianoKeys", stage: "MicrophoneStage", screening: "FilmStrip",
  projector: "ProjectorScreen",

  // Family & Kids
  kids: "Baby", children: "Baby", child: "Baby", play: "Balloon",
  playground: "Playground", nursery: "BabyCarriage", daycare: "BabyCarriage",
  baby: "Baby", family: "Users", parents: "Users",

  // Food & Dining
  bbq: "Hamburger", grill: "Hamburger", barbecue: "Hamburger",
  dining: "ForkKnife", kitchen: "CookingPot", breakfast: "Egg",
  dinner: "ForkKnife", chef: "ChefHat", cook: "CookingPot",
  bakery: "Bread", pastry: "Cake",

  // Outdoor
  garden: "Tree", park: "Park", jogging: "PersonSimpleRun",
  running: "PersonSimpleRun", track: "RoadHorizon", cycling: "Bicycle",
  bike: "Bicycle", walking: "PersonSimpleWalk", trail: "Mountains",
  hiking: "Mountains", picnic: "PicnicTable", bench: "Park",
  seating: "Armchair", view: "Binoculars", sunset: "SunHorizon",
  sunrise: "SunHorizon", terrace: "Plant", balcony: "Plant", patio: "Plant",
  courtyard: "Flower", atrium: "Flower", gazebo: "HouseLine",

  // Facilities
  parking: "Car", valet: "Car", security: "ShieldCheck", concierge: "Bellhop",
  reception: "Bell", elevator: "Elevator", lift: "Elevator",
  escalator: "Stairs", stairs: "Stairs", storage: "ArchiveBox",
  laundry: "TShirt", cleaning: "Broom", housekeeping: "Broom",
  maintenance: "Toolbox", luggage: "Suitcase", locker: "Lockers",
  shower: "Shower", toilet: "Toilet", bathroom: "Toilet", restroom: "Toilet",

  // Business
  business: "Briefcase", meeting: "Users", conference: "PresentationChart",
  coworking: "Laptop", office: "Laptop", wifi: "WifiHigh",
  internet: "Globe", network: "Globe", printer: "Printer",
  scanner: "Scan", phone: "Phone", computer: "Desktop", workstation: "Desktop",

  // Accessibility
  wheelchair: "Wheelchair", disabled: "Wheelchair", accessible: "Wheelchair",

  // Pets
  pet: "Dog", dog: "Dog", cat: "Cat", animal: "Cat",
  veterinary: "FirstAid", grooming: "Scissors",

  // Safety
  fire: "FireExtinguisher", extinguisher: "FireExtinguisher",
  firstaid: "FirstAid", emergency: "FirstAid", medical: "FirstAid",
  safety: "ShieldCheck", alarm: "Bell", cctv: "Camera",
  surveillance: "Camera", guard: "Shield", patrol: "Shield",

  // Services
  roomservice: "Bellhop", butler: "UserGear", private: "Lock",
  exclusive: "Crown", luxury: "Crown", premium: "Crown", vip: "Crown",
  chauffeur: "Car", driver: "Car", taxi: "Taxi", shuttle: "Bus",

  // Transport
  airport: "Airplane", flight: "Airplane", train: "Train", metro: "Train",
  bus: "Bus", ferry: "Waves", boat: "Waves", marina: "Anchor",
  dock: "Anchor", harbor: "Anchor", yacht: "Anchor",

  // Shopping
  shop: "Storefront", store: "Storefront", market: "ShoppingCart",
  mall: "Storefront", retail: "Storefront", pharmacy: "Pill",

  // Education
  education: "GraduationCap", school: "GraduationCap",
  university: "GraduationCap", classroom: "Chalkboard",
  study: "BookOpen", training: "BookOpen",

  // Religion
  prayer: "Mosque", mosque: "Mosque", chapel: "Church", church: "Church",

  // Community
  community: "UsersThree", social: "UsersThree", event: "Calendar",
  party: "Confetti", celebration: "Confetti", birthday: "Cake",
  gathering: "Users", clubhouse: "House", common: "Users",

  // Smart & Eco
  smart: "DeviceMobile", automation: "DeviceMobile",
  charging: "BatteryCharging", electric: "Lightning", ev: "Lightning",
  solar: "Sun", energy: "Lightning",

  // Time
  "24/7": "Clock", hour: "Clock", late: "MoonStars", night: "MoonStars",
  morning: "SunHorizon",

  // Luxury signals
  penthouse: "Crown", royal: "Crown", elite: "Crown",
  executive: "Briefcase", platinum: "Medal", gold: "Medal",
  diamond: "Diamond",

  // Building
  building: "Buildings", house: "House", home: "House",
  residence: "House", apartment: "BuildingApartment", tower: "Buildings",
  skyscraper: "Buildings", hall: "Door", lobby: "Door", entrance: "Door",

  // Catchalls
  branded: "Crown", skyline: "Buildings", panoramic: "Binoculars",
  "high-speed": "Elevator",
  cinemaRoom: "FilmStrip",
  clubhouse: "House",
  paddle: "TennisBall",
  lagoonBeach: "Anchor",
  cowork: "Briefcase",
  coworking: "Briefcase",
  businessCenter: "Briefcase",
  bbqArea: "Hamburger",
  kidsPool: "SwimmingPool",
  petPark: "Dog",
  yogaDeck: "PersonSimple",

  // Arabic keywords
  "مسبح": "SwimmingPool",
  "حمام سباحة": "SwimmingPool",
  "جاكوزي": "Bathtub",
  "سبا": "Leaf",
  "ساونا": "Fire",
  "بخار": "Wind",
  "نادي رياضي": "Barbell",
  "جيم": "Barbell",
  "لياقة": "Barbell",
  "يوغا": "PersonSimple",
  "تأمل": "Brain",
  "تنس": "TennisBall",
  "بادل": "TennisBall",
  "كرة": "SoccerBall",
  "سينما": "FilmStrip",
  "مسرح": "FilmStrip",
  "أطفال": "Baby",
  "اطفال": "Baby",
  "منطقة لعب": "Playground",
  "مطعم": "ForkKnife",
  "مقهى": "Coffee",
  "شواء": "Hamburger",
  "حديقة": "Tree",
  "بارك": "Park",
  "ممشى": "PersonSimpleWalk",
  "جري": "PersonSimpleRun",
  "دراجات": "Bicycle",
  "مواقف": "Car",
  "موقف": "Car",
  "أمن": "ShieldCheck",
  "امن": "ShieldCheck",
  "حراسة": "ShieldCheck",
  "كونسيرج": "Bellhop",
  "استقبال": "Bell",
  "مصعد": "Elevator",
  "واي فاي": "WifiHigh",
  "إنترنت": "WifiHigh",
  "انترنت": "WifiHigh",
  "مكتب": "Laptop",
  "أعمال": "Briefcase",
  "اعمال": "Briefcase",
  "غرفة اجتماعات": "PresentationChart",
  "شحن": "BatteryCharging",
  "سيارات كهربائية": "Lightning",
  "شاطئ": "Anchor",
  "مارينا": "Anchor",
  "يخت": "Anchor",
  "تسوق": "Storefront",
  "محلات": "Storefront",
  "مدرسة": "GraduationCap",
  "جامعة": "GraduationCap",
  "مسجد": "Mosque",
  "مجتمع": "UsersThree",
  "فعاليات": "Calendar",
  "ردهة": "Armchair",
  "لوبي": "Door",
  "تراس": "Plant",
  "شرفة": "Plant",
  "إطلالة": "Binoculars",
  "اطلالة": "Binoculars",
  "????": "SwimmingPool",
  "???? ?????": "SwimmingPool",
  "??????": "Bathtub",
  "???": "Leaf",
  "?????": "Fire",
  "????": "Wind",
  "???? ?????": "Barbell",
  "???": "Barbell",
  "?????": "Barbell",
  "????": "PersonSimple",
  "????": "Brain",
  "???": "TennisBall",
  "????": "TennisBall",
  "???": "SoccerBall",
  "?????": "FilmStrip",
  "????": "FilmStrip",
  "?????": "Baby",
  "?????": "Baby",
  "????? ???": "Playground",
  "????": "ForkKnife",
  "????": "Coffee",
  "????": "Hamburger",
  "?????": "Tree",
  "????": "Park",
  "????": "PersonSimpleWalk",
  "???": "PersonSimpleRun",
  "??????": "Bicycle",
  "?????": "Car",
  "????": "Car",
  "???": "ShieldCheck",
  "???": "ShieldCheck",
  "?????": "ShieldCheck",
  "???????": "Bellhop",
  "???????": "Bell",
  "????": "Elevator",
  "??? ???": "WifiHigh",
  "??????": "WifiHigh",
  "??????": "WifiHigh",
  "????": "Laptop",
  "?????": "Briefcase",
  "?????": "Briefcase",
  "???? ????????": "PresentationChart",
  "???": "BatteryCharging",
  "?????? ????????": "Lightning",
  "????": "Anchor",
  "??????": "Anchor",
  "???": "Anchor",
  "????": "Storefront",
  "?????": "Storefront",
  "?????": "GraduationCap",
  "?????": "GraduationCap",
  "????": "Mosque",
  "?????": "UsersThree",
  "???????": "Calendar",
  "????": "Armchair",
  "????": "Door",
  "????": "Plant",
  "????": "Plant",
  "??????": "Binoculars",
  "??????": "Binoculars",
};

function getIconByName(name) {
  if (!name) return null;
  if (PhosphorIcons[name]) return PhosphorIcons[name];
  const pascal = name.charAt(0).toUpperCase() + name.slice(1);
  if (PhosphorIcons[pascal]) return PhosphorIcons[pascal];
  const key = Object.keys(PhosphorIcons).find(
    (k) => k.toLowerCase() === name.toLowerCase()
  );
  return key ? PhosphorIcons[key] : null;
}

export function findIconForAmenity(label = "") {
  if (!label || typeof label !== "string") return PhosphorIcons.Buildings;

  const text = label
    .toLowerCase()
    .trim()
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, "")
    .replace(/أ|إ|آ/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى|ئ/g, "ي")
    .replace(/ؤ/g, "و");

  // Phase 1: keyword map
  for (const [kw, iconName] of Object.entries(AMENITY_ICON_MAP)) {
    if (text.includes(kw.toLowerCase())) {
      const icon = getIconByName(iconName);
      if (icon) return icon;
    }
  }

  // Phase 2: word-by-word
  const words = text.split(/[\s\-_,.()/]+/).filter((w) => w.length > 2);
  for (const word of words) {
    const iconName = AMENITY_ICON_MAP[word];
    if (iconName) {
      const icon = getIconByName(iconName);
      if (icon) return icon;
    }
  }

  // Phase 3: regex semantic patterns
  const patterns = [
    [/(pool|swim|aqua|hydro|splash|lagoon|lazy river)/i,             "SwimmingPool"],
    [/(gym|fit|exercise|workout|barbell|dumbbell|cardio|strength)/i, "Barbell"],
    [/(spa|sauna|steam|hammam|massage|wellness|jacuzzi)/i,           "Leaf"],
    [/(sport|game|ball|court|field|arena|playground)/i,              "TennisBall"],
    [/(food|restaurant|dining|meal|eat|drink|chef|grill|bbq)/i,      "ForkKnife"],
    [/(kid|child|baby|toddler|nursery|daycare|play)/i,               "Baby"],
    [/(cinema|theater|movie|film|screen|projector)/i,                "FilmStrip"],
    [/(business|office|work|meeting|conference|cowork)/i,            "Briefcase"],
    [/(safe|security|guard|patrol|cctv|surveillance|alarm)/i,        "ShieldCheck"],
    [/(smart|wifi|internet|network|digital|automation|ev|solar)/i,   "WifiHigh"],
    [/(outdoor|garden|park|terrace|balcony|patio|courtyard)/i,       "Tree"],
    [/(luxury|premium|exclusive|vip|royal|elite|diamond)/i,          "Crown"],
    [/(parking|valet|garage|car|vehicle)/i,                          "Car"],
    [/(concierge|butler|reception|bell|service)/i,                   "Bellhop"],
    [/(yoga|meditation|pilates|mindfulness|zen)/i,                   "PersonSimple"],
    [/(jogging|running|cycling|walking|trail|hiking)/i,              "PersonSimpleRun"],
    [/(beach|sea|ocean|waterfront|coast|marina|yacht)/i,             "Anchor"],
    [/(retail|shop|store|mall|boutique|supermarket)/i,               "Storefront"],
    [/(clubhouse|community hall|social lounge)/i,                    "House"],
    [/(pet|dog|cat)/i,                                               "Dog"],
    [/(kids pool|children pool)/i,                                   "SwimmingPool"],
    [/(bbq|barbecue|grill)/i,                                        "Hamburger"],
  ];

  for (const [pattern, iconName] of patterns) {
    if (pattern.test(text)) {
      const icon = getIconByName(iconName);
      if (icon) return icon;
    }
  }

  return PhosphorIcons.Buildings;
}

export function injectAmenityIcons({ amenities = [], locale = "en" }) {
  if (!Array.isArray(amenities)) return [];
  return amenities.map((amenity) => {
    const label = amenity?.label || amenity?.name || amenity?.title || "";
    const Icon = findIconForAmenity(label);
    return {
      ...amenity,
      PhosphorIcon: Icon || PhosphorIcons.Buildings,
      color: amenity?.color || "#d7b46a",
    };
  });
}

// Aliases for backward compatibility
export const findBestIconForAmenity = findIconForAmenity;
export const injectAmenityIconsWithFallback = injectAmenityIcons;
