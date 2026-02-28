// src/data/properties/apartments/binghatti/skyhall.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/skyhall
// ✅ Uses ONLY the exact Bunny filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Floorplan images use EXACT filenames:
//    - "Binghatti skyhall studio floor plan.webp"
//    - "Binghatti Skyhall 1br floor plan.webp"
// ✅ Location lat/lng taken from your Google Maps pin
// ✅ Filled 100% with your provided unit data:
//    Studio | AED 1,500,000 | 70/30 | Q4 2026 | 402.25 sqft | Business Bay
//    1BR    | AED 1,904,000 | 70/30 | Q4 2026 | 834.96 sqft | Business Bay

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/skyhall";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-skyhall-brochure.pdf");
const FLOORPLAN_PDF = cdn("binghatti-skyhall-floor-plan.pdf");
const FACTS_PDF = cdn("binghatti-skyhall-project-facts.pdf");

// ✅ Floor plan images (EXACT filenames)
const FP_STUDIO = cdn("Binghatti skyhall studio floor plan.webp");
const FP_1BR = cdn("Binghatti Skyhall 1br floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("201_Night_Canal_View copy-1.jpg"),
  cdn("gym_View01.jpg"),
  cdn("gym_View02.jpg"),
  cdn("gym_View03.jpg"),
  cdn("Lobby 1.jpg"),
  cdn("Lobby 2.jpg"),
  cdn("Skyhall view04b-05.jpg"),
  cdn("Skyhall view08b-05.jpg"),
  cdn("syunset.jpg"),
  cdn("V1.jpg"),
  cdn("V2.jpg"),
  cdn("V3.jpg"),
];

// ✅ Hero / Intro images (pick from real files)
const HERO_BG = cdn("Skyhall view08b-05.jpg");
const INTRO_MAIN = cdn("V2.jpg");

// ✅ Your standard Binghatti square image
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Location (from your Google Maps pin)
const LAT = 25.1810739;
const LNG = 55.2761441;

// ✅ Your provided project facts
const PROJECT_NAME_EN = "Binghatti Skyhall";
const PROJECT_NAME_AR = "بن غاطي سكاي هول";
const PROJECT_LOCATION_EN = "Business Bay, Dubai, UAE";
const PROJECT_LOCATION_AR = "الخليج التجاري، دبي، الإمارات";
const HANDOVER_EN = "Q4 2026";
const HANDOVER_AR = "الربع الرابع 2026";
const PAYMENT_PLAN_UI = "70% / 30%";
const PAYMENT_PLAN_RAW = "70/30";

// ✅ Units (your data)
const UNIT_STUDIO_PRICE_EN = "AED 1,500,000";
const UNIT_STUDIO_PRICE_AR = "1,500,000 درهم";
const UNIT_STUDIO_AREA_EN = "402.25 sq.ft";
const UNIT_STUDIO_AREA_AR = "402.25 قدم مربع";

const UNIT_1BR_PRICE_EN = "AED 1,904,000";
const UNIT_1BR_PRICE_AR = "1,904,000 درهم";
const UNIT_1BR_AREA_EN = "834.96 sq.ft";
const UNIT_1BR_AREA_AR = "834.96 قدم مربع";

// ✅ Starting price should be the lowest available (Studio)
const STARTING_PRICE_EN = UNIT_STUDIO_PRICE_EN;
const STARTING_PRICE_AR = UNIT_STUDIO_PRICE_AR;

export const skyhallData = {
  en: {
    seo: {
      title:
        "Binghatti Skyhall | Studio & 1BR Apartments in Business Bay | Brochure, Facts & Floor Plans",
      description:
        "Binghatti Skyhall by Binghatti in Business Bay. Explore the full BunnyCDN gallery and official PDFs (brochure, project facts, floor plan) plus studio & 1BR floor plan images — structured in your approved blueprint (EN + AR).",
      keywords:
        "Binghatti Skyhall, Binghatti, Business Bay, Dubai apartments, studio, 1BR, brochure, floor plan, Q4 2026, 70/30",
      canonical: "/properties/apartments/binghatti/skyhall",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Binghatti",
      location: PROJECT_LOCATION_EN,
      status: "Off-Plan",
      startingPrice: STARTING_PRICE_EN,
      completionDate: HANDOVER_EN,
      paymentPlan: PAYMENT_PLAN_RAW,
      type: "Apartments",
      units: "Studio, 1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "Binghatti Skyhall — Business Bay Living",
      paragraphs: [
        "Binghatti Skyhall is set in Business Bay, a central Dubai district known for strong connectivity and lifestyle convenience.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "binghatti-skyhall-brochure.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
        {
          title: "Project Facts",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "binghatti-skyhall-project-facts.pdf",
          category: "Facts",
          description: "Key project facts (PDF).",
        },
        {
          title: "Floor Plan (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
          fileName: "binghatti-skyhall-floor-plan.pdf",
          category: "Floor Plans",
          description: "Floor plans document (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Skyhall renders",
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
          icon: "📅",
          value: HANDOVER_EN,
          label: "Handover",
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
      title: "Binghatti Skyhall Gallery",
      slides: GALLERY,
      projectTag: PROJECT_NAME_EN,
    },

    // ✅ FloorPlans: ONLY the 4 fields you approved (filled 100%)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": UNIT_STUDIO_AREA_EN,
            "Starting Price": UNIT_STUDIO_PRICE_EN,
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_UI,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": UNIT_1BR_AREA_EN,
            "Starting Price": UNIT_1BR_PRICE_EN,
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_UI,
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Business Bay Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Modern Living", icon: "✨", color: "#d7b46a" },
        { label: "Lifestyle Facilities", icon: "🏡", color: "#d7b46a" },
        { label: "Investment Potential", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: "Binghatti Skyhall, Business Bay, Dubai, UAE",
      lat: LAT,
      lng: LNG,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "Central Business Bay address with strong demand.",
        },
        {
          icon: "🚗",
          text: "Fast access to Downtown Dubai and key corridors.",
        },
        { icon: "🛍️", text: "Close to retail, dining and daily services." },
      ],
    },

    cta: {
      title: "Interested in Binghatti Skyhall?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Skyhall.",
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
        "بن غاطي سكاي هول | استوديو وغرفة نوم واحدة في الخليج التجاري | الكتيّب والمخططات",
      description:
        "بن غاطي سكاي هول من بن غاطي في الخليج التجاري. استعرض معرض الصور الكامل وملفات PDF الرسمية (الكتيّب، الحقائق، مخطط الطابق) بالإضافة إلى صور مخططات الاستوديو و1BR — بنفس هيكلة موقعك (EN + AR).",
      keywords:
        "بن غاطي سكاي هول, الخليج التجاري, شقق دبي, استوديو, غرفة نوم, كتيب, مخططات, الربع الرابع 2026, 70/30",
      canonical: "/properties/apartments/binghatti/skyhall",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "بن غاطي",
      location: PROJECT_LOCATION_AR,
      status: "على المخطط",
      startingPrice: STARTING_PRICE_AR,
      completionDate: HANDOVER_AR,
      paymentPlan: PAYMENT_PLAN_RAW,
      type: "شقق",
      units: "استوديو، غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي سكاي هول — أسلوب حياة في الخليج التجاري",
      paragraphs: [
        "يقع مشروع بن غاطي سكاي هول في الخليج التجاري، أحد أكثر مواقع دبي مركزيةً وسهولة في الوصول.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "binghatti-skyhall-brochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
        {
          title: "ملف الحقائق",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "binghatti-skyhall-project-facts.pdf",
          category: "حقائق",
          description: "أبرز المعلومات (PDF).",
        },
        {
          title: "مخطط الطابق (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
          fileName: "binghatti-skyhall-floor-plan.pdf",
          category: "مخططات",
          description: "ملف مخطط الطابق (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي سكاي هول",
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
          icon: "📅",
          value: HANDOVER_AR,
          label: "موعد التسليم",
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
      projectTag: PROJECT_NAME_AR,
    },

    // ✅ Arabic FloorPlans: 4 fields only (filled 100%)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": UNIT_STUDIO_AREA_AR,
            "السعر الابتدائي": UNIT_STUDIO_PRICE_AR,
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_UI,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": UNIT_1BR_AREA_AR,
            "السعر الابتدائي": UNIT_1BR_PRICE_AR,
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_UI,
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "سهولة التنقل بالخليج التجاري", icon: "🛣️", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "مرافق أسلوب حياة", icon: "🏡", color: "#d7b46a" },
        { label: "قيمة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address: "بن غاطي سكاي هول، الخليج التجاري، دبي، الإمارات",
      lat: LAT,
      lng: LNG,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "عنوان مركزي في الخليج التجاري مع طلب قوي." },
        { icon: "🚗", text: "وصول سريع لوسط دبي والمحاور الرئيسية." },
        { icon: "🛍️", text: "بالقرب من المتاجر والمطاعم والخدمات اليومية." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي سكاي هول؟",
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

export default skyhallData;
