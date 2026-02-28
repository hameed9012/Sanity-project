// src/data/properties/apartments/tiger/skytower/tigerSkyTigerData.js
// ✅ 100% Blueprint-aligned (same strict rules)
// - Uses your Bunny CDN pull zone + folder structure
// - cdn() helper with encodeURIComponent
// - paymentPlan exists in project + inside EVERY floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]
// - Includes both plans (No PHPP + PHPP 24M) + January Offer
// - Uses your exact Bunny filenames

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const TIGER_SKY_DIR = "/tiger/skytower";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${TIGER_SKY_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Tiger Sky";
const PROJECT_NAME_AR = "تايجر سكاي";

const LOCATION_EN = "Business Bay, Dubai, UAE";
const LOCATION_AR = "بزنس باي، دبي، الإمارات";

const HANDOVER_EN = "Q4 2028–2030";
const HANDOVER_AR = "الربع الرابع 2028–2030";

const FURNISHING_EN = "Fully Furnished";
const FURNISHING_AR = "مفروش بالكامل";

// Payment plan options (your exact text, normalized)
const PAYMENT_PLANS_EN = {
  noPhpp: "60% / 40% on completion",
  phpp24: "70% / 30% PHPP (24 months)",
  januaryOffer: "52% during construction – 48% over 48 months (January Offer)",
};

const PAYMENT_PLANS_AR = {
  noPhpp: "60% / 40% عند التسليم (بدون خطة بعد التسليم)",
  phpp24: "70% / 30% خطة بعد التسليم (24 شهر)",
  januaryOffer: "52% أثناء الإنشاء – 48% على 48 شهر (عرض يناير)",
};

// ✅ Blueprint: choose ONE default plan shown on cards
const PAYMENT_PLAN_PRIMARY_EN = PAYMENT_PLANS_EN.noPhpp;
const PAYMENT_PLAN_PRIMARY_AR = PAYMENT_PLANS_AR.noPhpp;

// ========================
// PDFs / Docs (exact filenames)
// ========================
const BROCHURE_PDF = cdn("Tiger Sky - Digital .pdf");

// ========================
// Gallery images (exact filenames)
// ========================
const HERO_IMAGE = `https://luxury-real-estate-media.b-cdn.net/tiger/skytower/Arabic%20Style%20%20(02).jpg`;

const GALLERY_SLIDES = [
  HERO_IMAGE,

  cdn("V1 3.jpg"),
  cdn("v2 3.jpg"),
  cdn("V3 3.jpg"),
  cdn("V4 3.jpg"),
  cdn("V5.jpg"),
  cdn("v6 2.jpg"),
  cdn("V7 2.jpg"),
  cdn("V7 low.jpg"),
  cdn("V8 1.jpg"),
  cdn("V8 Forest 1.jpg"),
  cdn("V9 8.jpg"),

  cdn("pool view 2.jpg"),
  cdn("resturent view 2.jpg"),
  cdn("res copy 1.jpg"),

  cdn("Arabic Style (01).jpg"),
  cdn("Arabic Style (02).jpg"),
  cdn("Arabic Style (03).jpg"),
  cdn("Arabic Style (04).jpg"),
  cdn("Arabic Style (05).jpg"),

  cdn("Chines Style (01).jpg"),
  cdn("Chines Style (02).jpeg"),
  cdn("Chines Style (03).jpeg"),
  cdn("Chines Style (04).jpeg"),
  cdn("Chines Style (05).jpeg"),

  cdn("French Style (01).jpg"),
  cdn("French Style (02).jpg"),
  cdn("French Style (03).jpg"),
  cdn("French Style (04).jpg"),
  cdn("French Style (05).jpg"),

  cdn("Greel Style (01).jpg"),
  cdn("Greel Style (02).jpg"),
  cdn("Greel Style (03).jpg"),
  cdn("Greel Style (04).jpg"),
  cdn("Greel Style (05).jpg"),
];

// Fallback images for plans (no dedicated floorplan images listed)
const FP_1BR_IMG = cdn("tiger sky tower 1br layout.webp");
const FP_2BR_IMG = cdn("tiger sky tower 2br layout.webp");
const FP_3BR_IMG = cdn("tiger sky tower 3br layout.webp");
const FP_4BR_IMG = cdn("tiger sky tower 4br layout.webp");

export const tigerSkyTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Tiger Sky by Tiger | 1–4 Bedroom Apartments in Business Bay | Handover Q4 2028–2030 | Fully Furnished",
      description:
        "Tiger Sky by Tiger in Business Bay offers fully furnished 1, 2, 3, and 4 bedroom apartments with multiple payment plan options including a January offer. Handover Q4 2028–2030.",
      keywords:
        "Tiger Sky, Tiger, Business Bay, Dubai apartments, fully furnished, 1 bedroom, 2 bedroom, 3 bedroom, 4 bedroom, payment plan, Q4 2028, 2030",
      canonical: "/properties/apartments/tiger/sky-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: LOCATION_EN,
      status: "Off-Plan",
      startingPrice: "AED 2,600,000",
      completionDate: HANDOVER_EN,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_EN,

      type: "Apartments",
      units: "1–4 Bedroom Apartments",
      furnishing: FURNISHING_EN,
      remark: FURNISHING_EN,

      paymentPlanOptions: PAYMENT_PLANS_EN,
    },

    hero: {
      backgroundUrl: HERO_IMAGE,
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["Business Bay", "Fully Furnished", "Handover Q4 2028–2030"],
    },

    intro: {
      title: "Fully Furnished Living in Business Bay",
      paragraphs: [
        "Tiger Sky by Tiger is a fully furnished residential project in Business Bay, Dubai, offering iconic living with premium interiors and lifestyle facilities.",
        "Choose from 1, 2, 3, or 4 bedroom layouts with strong unit sizes and flexible payment plan options.",
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
          fileName: "Tiger Sky - Digital .pdf",
          description: "Official brochure for Tiger Sky (PDF).",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/skytower/V7%20low.jpg`,
      imgAlt: "Tiger Sky by Tiger (Business Bay)",
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
          value: "3 Plans",
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
          id: "1bhk",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            Unit: "1 BHK",
            "Total Area": "873 SQ. FT",
            "Starting Price": "AED 2,600,000",
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
            "Total Area": "1,399 SQ. FT",
            "Starting Price": "AED 3,600,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_2BR_IMG],
          features: [FURNISHING_EN],
        },
        {
          id: "3bhk",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            Unit: "3 BHK",
            "Total Area": "1,913 SQ. FT",
            "Starting Price": "AED 5,000,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_3BR_IMG],
          features: [FURNISHING_EN],
        },
        {
          id: "4bhk",
          title: "4 Bedroom Apartment",
          bedrooms: 4,
          specs: {
            Unit: "4 BHK",
            "Total Area": "2,651 SQ. FT",
            "Starting Price": "AED 8,500,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_4BR_IMG],
          features: [FURNISHING_EN],
        },
      ],
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Restaurants", icon: "🍽️", color: "#d7b46a" },
        { label: "Luxury Interiors", icon: "✨", color: "#d7b46a" },
        { label: "Fully Furnished", icon: "🛋️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: LOCATION_EN,
      // Placeholder until you share exact pin
      lat: 25.189,
      lng: 55.267,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "Located in Business Bay, Dubai" },
        { icon: "🏙️", text: "Close to Downtown & Canal District" },
      ],
    },

    cta: {
      title: "Get Availability & Payment Plan",
      description:
        "Contact us to receive availability, unit options, and the best applicable payment plan for Tiger Sky.",
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
        "تايجر سكاي من تايجر | شقق 1–4 غرف في بزنس باي | التسليم Q4 2028–2030 | مفروش بالكامل",
      description:
        "تايجر سكاي من تايجر في بزنس باي يوفر شقق مفروشة بالكامل (غرفة إلى 4 غرف) مع عدة خيارات لخطة الدفع بما في ذلك عرض يناير. التسليم Q4 2028–2030.",
      keywords:
        "تايجر سكاي, تايجر, بزنس باي, شقق دبي, مفروش بالكامل, 1 غرفة, 2 غرف, 3 غرف, 4 غرف, خطة الدفع, 2028, 2030",
      canonical: "/properties/apartments/tiger/sky-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: LOCATION_AR,
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 2,600,000 درهم",
      completionDate: HANDOVER_AR,

      // ✅ Blueprint: paymentPlan in project

      paymentPlan: PAYMENT_PLAN_PRIMARY_AR,

      type: "شقق سكنية",
      units: "شقق من 1 إلى 4 غرف",
      furnishing: FURNISHING_AR,
      remark: FURNISHING_AR,

      paymentPlanOptions: PAYMENT_PLANS_AR,
    },

    hero: {
      backgroundUrl: HERO_IMAGE,
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["بزنس باي", "مفروش بالكامل", "التسليم Q4 2028–2030"],
    },

    intro: {
      title: "سكن مفروش بالكامل في بزنس باي",
      paragraphs: [
        "تايجر سكاي من تايجر مشروع سكني مفروش بالكامل في بزنس باي – دبي، يجمع بين الإطلالات المميزة والتصميم الداخلي الفاخر.",
        "اختر من شقق 1 أو 2 أو 3 أو 4 غرف مع مساحات قوية وخيارات متعددة لخطة الدفع.",
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
          fileName: "Tiger Sky - Digital .pdf",
          description: "البروشور الرسمي لمشروع تايجر سكاي (PDF).",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/skytower/V7%20low.jpg`,
      imgAlt: "تايجر سكاي من تايجر (بزنس باي)",
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
          value: "3 خطط",
          label: "الدفع",
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
          id: "1bhk",
          title: "شقة غرفة واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة واحدة (1BHK)",
            "المساحة الإجمالية": "873 قدم²",
            "السعر الابتدائي": "2,600,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_1BR_IMG],
          features: [FURNISHING_AR],
        },
        {
          id: "2bhk",
          title: "شقة غرفتين",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "غرفتين (2BHK)",
            "المساحة الإجمالية": "1,399 قدم²",
            "السعر الابتدائي": "3,600,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_2BR_IMG],
          features: [FURNISHING_AR],
        },
        {
          id: "3bhk",
          title: "شقة 3 غرف",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "3 غرف (3BHK)",
            "المساحة الإجمالية": "1,913 قدم²",
            "السعر الابتدائي": "5,000,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_3BR_IMG],
          features: [FURNISHING_AR],
        },
        {
          id: "4bhk",
          title: "شقة 4 غرف",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "4 غرف (4BHK)",
            "المساحة الإجمالية": "2,651 قدم²",
            "السعر الابتدائي": "8,500,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_4BR_IMG],
          features: [FURNISHING_AR],
        },
      ],
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "مطاعم", icon: "🍽️", color: "#d7b46a" },
        { label: "تصميم فاخر", icon: "✨", color: "#d7b46a" },
        { label: "مفروش بالكامل", icon: "🛋️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address: LOCATION_AR,
      lat: 25.189,
      lng: 55.267,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "يقع في بزنس باي – دبي" },
        { icon: "🏙️", text: "قريب من داون تاون وقناة دبي" },
      ],
    },

    cta: {
      title: "احصل على التوفر وخطة الدفع",
      description:
        "تواصل معنا للحصول على التوفر وخيارات الوحدات وأفضل خطة دفع مناسبة لمشروع تايجر سكاي.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default tigerSkyTigerData;
