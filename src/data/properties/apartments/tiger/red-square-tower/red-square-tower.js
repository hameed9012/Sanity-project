// src/data/properties/apartments/tiger/red-square-tower/redSquareTigerData.js
// ✅ 100% Blueprint-aligned (same strict rules)
// ✅ Uses YOUR specified Bunny CDN base: https://luxury-real-estate-media.b-cdn.net
// - cdn() helper with encodeURIComponent
// - paymentPlan exists in project + inside EVERY floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]
// - Includes both payment plan options (No PHPP + PHPP 24M)
// - Uses your exact Bunny filenames

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const RED_SQUARE_DIR = "/tiger/red-square";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${RED_SQUARE_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Red Square";
const PROJECT_NAME_AR = "ريد سكوير";

const LOCATION_EN = "Jumeirah Village Triangle (JVT), Dubai, UAE";
const LOCATION_AR = "مثلث قرية جميرا (JVT)، دبي، الإمارات";

const HANDOVER_EN = "Q4 2026";
const HANDOVER_AR = "الربع الرابع 2026";

const FURNISHING_EN = "Fully Furnished";
const FURNISHING_AR = "مفروش بالكامل";

// Payment plan options (your exact text, normalized)
const PAYMENT_PLANS_EN = {
  noPhpp: "60% / 40% on completion",
  phpp24: "70% / 30% PHPP (24 months)",
};

const PAYMENT_PLANS_AR = {
  noPhpp: "60% / 40% عند التسليم (بدون خطة بعد التسليم)",
  phpp24: "70% / 30% خطة بعد التسليم (24 شهر)",
};

// ✅ Blueprint: choose ONE default plan shown on cards
const PAYMENT_PLAN_PRIMARY_EN = PAYMENT_PLANS_EN.noPhpp;
const PAYMENT_PLAN_PRIMARY_AR = PAYMENT_PLANS_AR.noPhpp;

// ========================
// PDFs / Docs (exact filenames)
// ========================
const BROCHURE_PDF = cdn("Red Square v4.pdf");

// ========================
// Gallery images (exact filenames)
// ========================
const HERO_IMAGE = `https://luxury-real-estate-media.b-cdn.net/tiger/red-square/Copy%20of%20main-pool.jpg`;

const GALLERY_SLIDES = [
  cdn("Copy of lounge main.jpg"),
  cdn("Copy of lounge.jpg"),
  cdn("Copy of lounge 2.jpg"),

  cdn("Copy of sitting room.jpg"),
  cdn("Copy of dining.jpg"),

  cdn("Copy of corridor.jpg"),

  cdn("bedroom.jpg"),
  cdn("Copy of bedroom.jpg"),

  cdn("Copy of bathroom.jpg"),
  cdn("Copy of toilet.jpg"),

  cdn("Copy of main-pool.jpg"),

  cdn("Copy of gym.png"),
  cdn("Copy of gym 2.png"),
];

// Fallback images for plans (no dedicated floorplan images listed)
const FP_STUDIO_IMG = cdn("redsquare studio layout.png");
const FP_1BR_IMG = cdn("redsquare 1br layout.webp");
const FP_2BR_IMG = cdn("redsquare 2br layout.webp");

export const redSquareTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Red Square by Tiger | Studio, 1 & 2 Bedroom Apartments in JVT | Handover Q4 2026 | Fully Furnished",
      description:
        "Red Square by Tiger in JVT offers fully furnished Studio, 1BR, and 2BR apartments with flexible payment plan options and handover in Q4 2026.",
      keywords:
        "Red Square, Tiger, JVT, Dubai apartments, fully furnished, studio apartment, 1 bedroom, 2 bedroom, payment plan, Q4 2026",
      canonical: "/properties/apartments/tiger/red-square-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: LOCATION_EN,
      status: "Off-Plan",
      startingPrice: "AED 650,000",
      completionDate: HANDOVER_EN,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_EN,

      type: "Apartments",
      units: "Studio, 1 & 2 Bedroom Apartments",
      furnishing: FURNISHING_EN,
      remark: FURNISHING_EN,

      paymentPlanOptions: PAYMENT_PLANS_EN,
    },

    hero: {
      backgroundUrl: HERO_IMAGE,
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["JVT", "Fully Furnished", "Handover Q4 2026"],
    },

    intro: {
      title: "Fully Furnished Living in JVT",
      paragraphs: [
        "Red Square by Tiger is a fully furnished residential project in Jumeirah Village Triangle (JVT), offering modern interiors and lifestyle amenities.",
        "Choose from Studio, 1 Bedroom, or 2 Bedroom layouts with strong entry pricing and practical sizes.",
        `Handover: ${HANDOVER_EN}.`,
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "Brochure",
          fileName: "Red Square v4.pdf",
          description: "Official brochure for Red Square (PDF).",
        },
      ],
      imgUrl: HERO_IMAGE,
      imgAlt: "Red Square by Tiger (JVT)",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: HANDOVER_EN,
          label: "Handover",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🛋️",
          value: "Furnished",
          label: "Fully",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "2 Plans",
          label: "Payment",
        },
      ],
    },

    gallery: {
      title: "Gallery",
      slides: GALLERY_SLIDES,
      projectTag: PROJECT_NAME_EN,
    },

    // ✅ Blueprint floorPlans
    floorPlans: {
      type: "apartments",
      brochureHref: BROCHURE_PDF,
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO",
            "Total Area": "300 SQ. FT",
            "Starting Price": "AED 650,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_STUDIO_IMG],
          features: [FURNISHING_EN],
        },
        {
          id: "1bhk",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            Unit: "1 BHK",
            "Total Area": "1,023 SQ. FT",
            "Starting Price": "AED 1,125,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_1BR_IMG],
          features: [FURNISHING_EN],
        },
        {
          id: "2bhk",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            Unit: "2 BHK",
            "Total Area": "922 SQ. FT",
            "Starting Price": "AED 1,600,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_2BR_IMG],
          features: [FURNISHING_EN],
        },
      ],
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Modern Lounge", icon: "🛋️", color: "#d7b46a" },
        { label: "Fully Furnished", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: LOCATION_EN,
      // Placeholder until you share exact pin
      lat: 25.054,
      lng: 55.221,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "Located in JVT, Dubai" },
        { icon: "🛣️", text: "Easy access to key Dubai districts" },
      ],
    },

    cta: {
      title: "Get Availability & Payment Plan",
      description:
        "Contact us to receive availability, unit options, and the best applicable payment plan for Red Square.",
      buttons: [
        { text: "Enquire Now", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // =========================
  // ARABIC
  // =========================
  ar: {
    seo: {
      title:
        "ريد سكوير من تايجر | استوديو، غرفة وغرفتين في JVT | التسليم Q4 2026 | مفروش بالكامل",
      description:
        "ريد سكوير من تايجر في مثلث قرية جميرا (JVT) يوفر شقق مفروشة بالكامل (استوديو، غرفة، غرفتين) مع خيارات متعددة لخطة الدفع والتسليم في الربع الرابع 2026.",
      keywords:
        "ريد سكوير, تايجر, JVT, شقق دبي, مفروش بالكامل, استوديو, غرفة نوم, غرفتين, خطة الدفع, الربع الرابع 2026",
      canonical: "/properties/apartments/tiger/red-square-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: LOCATION_AR,
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 650,000 درهم",
      completionDate: HANDOVER_AR,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_AR,

      type: "شقق سكنية",
      units: "استوديو، غرفة وغرفتين",
      furnishing: FURNISHING_AR,
      remark: FURNISHING_AR,

      paymentPlanOptions: PAYMENT_PLANS_AR,
    },

    hero: {
      backgroundUrl: HERO_IMAGE,
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["JVT", "مفروش بالكامل", "التسليم Q4 2026"],
    },

    intro: {
      title: "سكن مفروش بالكامل في JVT",
      paragraphs: [
        "ريد سكوير من تايجر مشروع سكني مفروش بالكامل في مثلث قرية جميرا (JVT)، بتصميم عصري ومرافق نمط حياة مميزة.",
        "اختر من استوديو أو شقة غرفة نوم أو شقة غرفتين مع مساحات عملية وأسعار بداية قوية.",
        `التسليم: ${HANDOVER_AR}.`,
      ],
      brochures: [
        {
          title: "تحميل البروشور",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "بروشور",
          fileName: "Red Square v4.pdf",
          description: "البروشور الرسمي لمشروع ريد سكوير (PDF).",
        },
      ],
      imgUrl: HERO_IMAGE,
      imgAlt: "ريد سكوير من تايجر (JVT)",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: HANDOVER_AR,
          label: "التسليم",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🛋️",
          value: "مفروش",
          label: "بالكامل",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "خيارين",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "الصور",
      slides: GALLERY_SLIDES,
      projectTag: PROJECT_NAME_AR,
    },

    floorPlans: {
      type: "apartments",
      brochureHref: BROCHURE_PDF,
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "استوديو",
            "المساحة الإجمالية": "300 قدم²",
            "السعر الابتدائي": "650,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_STUDIO_IMG],
          features: [FURNISHING_AR],
        },
        {
          id: "1bhk",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة واحدة (1BHK)",
            "المساحة الإجمالية": "1,023 قدم²",
            "السعر الابتدائي": "1,125,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_1BR_IMG],
          features: [FURNISHING_AR],
        },
        {
          id: "2bhk",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "غرفتين (2BHK)",
            "المساحة الإجمالية": "922 قدم²",
            "السعر الابتدائي": "1,600,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_2BR_IMG],
          features: [FURNISHING_AR],
        },
      ],
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "لاونج عصري", icon: "🛋️", color: "#d7b46a" },
        { label: "مفروش بالكامل", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address: LOCATION_AR,
      lat: 25.054,
      lng: 55.221,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "يقع في مثلث قرية جميرا (JVT) – دبي" },
        { icon: "🛣️", text: "سهولة الوصول إلى أهم مناطق دبي" },
      ],
    },

    cta: {
      title: "احصل على التوفر وخطة الدفع",
      description:
        "تواصل معنا للحصول على التوفر وخيارات الوحدات وأفضل خطة دفع مناسبة لمشروع ريد سكوير.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default redSquareTigerData;
