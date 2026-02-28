// src/data/properties/apartments/binghatti/skyrise.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/skyrise
// ✅ Uses ONLY the exact filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Floorplan image uses EXACT filename: "Binghatti skyrise 1br floor plan.webp"
// ✅ Location lat/lng taken from your Google Maps pin
// ✅ Filled 100% with your provided unit data:
//    1BR | AED 2,163,249 | 70/30 | Q4 2026 | 829.36 sqft | Business Bay

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/skyrise";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-skyrise-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-skyrise-floorplans.pdf");
const FACTS_PDF = cdn("binghatti-skyrise-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-skyrise-location.pdf");

// ✅ Floor plan image (EXACT filename)
const FP_1BR = cdn("Binghatti skyrise 1br floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("Skyrise 1.jpg"),
  cdn("Skyrise 2.jpg"),
  cdn("Skyrise 3.jpg"),
  cdn("Skyrise 4.jpg"),
  cdn("Skyrise 5.jpg"),
  cdn("Skyrise 6.jpg"),
  cdn("Skyrise 7.jpg"),
  cdn("Skyrise 8.jpg"),
];

// ✅ Hero / Intro images (choose from real files)
const HERO_BG = cdn("Skyrise 3.jpg");
const INTRO_MAIN = cdn("Skyrise 2.jpg");

// ✅ Your standard Binghatti square image
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Location (from your Google Maps pin)
const LAT = 25.1816875;
const LNG = 55.2728125;

// ✅ Your provided pricing/unit facts (Skyrise)
const PROJECT_LOCATION_TEXT = "Business Bay, Dubai, UAE";
const HANDOVER = "Q4 2026";
const PAYMENT_PLAN_UI = "70% / 30%";
const PAYMENT_PLAN_RAW = "70/30";
const STARTING_PRICE_EN = "AED 2,163,249";
const STARTING_PRICE_AR = "2,163,249 درهم";
const TOTAL_AREA_EN = "829.36 sq.ft";
const TOTAL_AREA_AR = "829.36 قدم مربع";

export const skyriseData = {
  en: {
    seo: {
      title:
        "Binghatti Skyrise | 1BR Apartments in Business Bay | Brochure, Facts, Location & Floor Plans",
      description:
        "Binghatti Skyrise by Binghatti in Business Bay. View the full BunnyCDN gallery and official PDFs (brochure, facts, location, floor plans) plus the exact 1BR floor plan image — structured in your approved blueprint (EN + AR).",
      keywords:
        "Binghatti Skyrise, Binghatti, Business Bay, Dubai apartments, 1BR, brochure, floor plans, project facts, location map, Q4 2026, 70/30",
      canonical: "/properties/apartments/binghatti/skyrise",
    },

    project: {
      name: "Binghatti Skyrise",
      developer: "Binghatti",
      location: PROJECT_LOCATION_TEXT,
      status: "Off-Plan",
      startingPrice: STARTING_PRICE_EN,
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN_RAW,
      type: "Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "Binghatti Skyrise — A Business Bay Address",
      paragraphs: [
        "Binghatti Skyrise is positioned in Business Bay, offering a central Dubai lifestyle with strong connectivity to key districts.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "binghatti-skyrise-brochure.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
        {
          title: "Project Facts",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "binghatti-skyrise-project-facts.pdf",
          category: "Facts",
          description: "Key project facts (PDF).",
        },
        {
          title: "Location PDF",
          url: LOCATION_PDF,
          type: "secondary",
          fileName: "binghatti-skyrise-location.pdf",
          category: "Location",
          description: "Official location document (PDF).",
        },
        {
          title: "Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "binghatti-skyrise-floorplans.pdf",
          category: "Floor Plans",
          description: "Floor plans document (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Skyrise renders",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: STARTING_PRICE_EN,
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: TOTAL_AREA_EN,
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Business Bay",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Skyrise Gallery",
      slides: GALLERY,
      projectTag: "Binghatti Skyrise",
    },

    // ✅ FloorPlans: ONLY the 4 fields you approved (filled 100%)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": TOTAL_AREA_EN,
            "Starting Price": STARTING_PRICE_EN,
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN_UI,
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Business Bay Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Modern Architecture", icon: "✨", color: "#d7b46a" },
        { label: "Lifestyle Living", icon: "🏡", color: "#d7b46a" },
        { label: "Investment Potential", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Skyrise",
      address: "Binghatti Skyrise, Business Bay, Dubai, UAE",
      lat: LAT,
      lng: LNG,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "Central Business Bay address with high demand." },
        { icon: "🚗", text: "Strong access to major Dubai road corridors." },
        {
          icon: "🛍️",
          text: "Close to daily services, retail and lifestyle spots.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Skyrise?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Skyrise.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "بن غاطي سكاي رايز | شقق غرفة نوم واحدة في الخليج التجاري | الكتيّب والمخططات",
      description:
        "بن غاطي سكاي رايز من بن غاطي في الخليج التجاري. استعرض معرض الصور الكامل وملفات PDF الرسمية (الكتيّب، الحقائق، الموقع، المخططات) بالإضافة لصورة مخطط 1BR — بنفس هيكلة موقعك (EN + AR).",
      keywords:
        "بن غاطي سكاي رايز, الخليج التجاري, شقق دبي, غرفة نوم, كتيب, مخططات, Q4 2026, 70/30",
      canonical: "/properties/apartments/binghatti/skyrise",
    },

    project: {
      name: "بن غاطي سكاي رايز",
      developer: "بن غاطي",
      location: "الخليج التجاري، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: STARTING_PRICE_AR,
      completionDate: "الربع الرابع 2026",
      paymentPlan: PAYMENT_PLAN_RAW,
      type: "شقق",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي سكاي رايز — عنوان في الخليج التجاري",
      paragraphs: [
        "يقع مشروع بن غاطي سكاي رايز في الخليج التجاري، ليقدّم أسلوب حياة مركزي في دبي مع سهولة الوصول لأهم المناطق.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "binghatti-skyrise-brochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
        {
          title: "ملف الحقائق",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "binghatti-skyrise-project-facts.pdf",
          category: "حقائق",
          description: "أبرز المعلومات (PDF).",
        },
        {
          title: "ملف الموقع",
          url: LOCATION_PDF,
          type: "secondary",
          fileName: "binghatti-skyrise-location.pdf",
          category: "الموقع",
          description: "ملف الموقع الرسمي (PDF).",
        },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "binghatti-skyrise-floorplans.pdf",
          category: "مخططات",
          description: "ملف مخططات الطوابق (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي سكاي رايز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: STARTING_PRICE_AR,
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: TOTAL_AREA_AR,
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "الخليج التجاري",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي سكاي رايز",
    },

    // ✅ Arabic FloorPlans: 4 fields only (filled 100%)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": TOTAL_AREA_AR,
            "السعر الابتدائي": STARTING_PRICE_AR,
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": PAYMENT_PLAN_UI,
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "سهولة التنقل بالخليج التجاري", icon: "🛣️", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "أسلوب حياة", icon: "🏡", color: "#d7b46a" },
        { label: "قيمة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي سكاي رايز",
      address: "بن غاطي سكاي رايز، الخليج التجاري، دبي، الإمارات",
      lat: LAT,
      lng: LNG,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "عنوان مركزي في الخليج التجاري مع طلب قوي." },
        { icon: "🚗", text: "سهولة الوصول لمحاور الطرق الرئيسية." },
        { icon: "🛍️", text: "بالقرب من خدمات يومية ومتاجر." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي سكاي رايز؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات والوثائق الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default skyriseData;
