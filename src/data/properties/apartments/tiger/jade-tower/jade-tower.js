// src/data/properties/apartments/tiger/jade/jadeTigerData.js
// ✅ 100% Blueprint-aligned (same strict rules)
// - Uses your Bunny CDN pull zone + folder structure
// - cdn() helper with encodeURIComponent
// - paymentPlan exists in project + inside EVERY floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]
// - Includes both payment plan options (No PHPP + PHPP 24M)
// - Uses your exact Bunny filenames

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const JADE_DIR = "/tiger/jade";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${JADE_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Jade Tower";
const PROJECT_NAME_AR = "برج جايد";

const LOCATION_EN = "Majan, Dubai, UAE";
const LOCATION_AR = "مجان، دبي، الإمارات";

const HANDOVER_EN = "Q1 2027";
const HANDOVER_AR = "الربع الأول 2027";

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
const BROCHURE_PDF = cdn("Jade Tower_Digital.pdf");

// ========================
// Media
// ========================
const HERO_VIDEO = cdn("jade landscape final.mp4");

// ========================
// Gallery images (exact filenames)
// ========================
const GALLERY_SLIDES = [
  cdn("HR LIVING CAMERA 1.png"),
  cdn("HR LIVING CAMERA 2.png"),
  cdn("HR LIVING CAMERA 3.png"),
  cdn("HR LIVING CAMERA 11.png"),
  cdn("HR LIVING CAMERA 22.png"),

  cdn("HR BEDROOM CAMERA 1.png"),
  cdn("HR BEDROOM CAMERA 2 (1).png"),

  cdn("T & B CAMERA 1.png"),
  cdn("T & B CAMERA 2.png"),

  cdn("HR POOL CAMERA 1.png"),
  cdn("HR POOL CAMERA 2.png"),

  cdn("HR CORRIDOR.png"),
  cdn("HR LIFT.png"),

  cdn("HR CAMERA 1.png"),
  cdn("HR CAMERA 2.png"),
];

// Fallback images for plans (no dedicated floorplan pdf/images provided)
const FP_1BR_IMG = cdn("jade tower 1br layout.webp");
const FP_2BR_IMG = cdn("jade tower 2br layout.webp");

export const jadeTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Jade Tower by Tiger | 1 & 2 Bedroom Apartments in Majan | Handover Q1 2027 | Fully Furnished",
      description:
        "Jade Tower by Tiger in Majan offers fully furnished 1 and 2 bedroom apartments with flexible payment plan options and handover in Q1 2027.",
      keywords:
        "Jade Tower, Tiger, Majan, Dubai apartments, fully furnished, 1 bedroom, 2 bedroom, payment plan, Q1 2027",
      canonical: "/properties/apartments/tiger/jade-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: LOCATION_EN,
      status: "Off-Plan",
      startingPrice: "AED 981,000",
      completionDate: HANDOVER_EN,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_EN,

      type: "Apartments",
      units: "1 & 2 Bedroom Apartments",
      furnishing: FURNISHING_EN,
      remark: FURNISHING_EN,

      // optional (if UI needs it)
      paymentPlanOptions: PAYMENT_PLANS_EN,
    },

    hero: {
      backgroundUrl: HERO_VIDEO, // ✅ video hero
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["Majan", "Fully Furnished", "Handover Q1 2027"],
    },

    intro: {
      title: "Fully Furnished Living in Majan",
      paragraphs: [
        "Jade Tower by Tiger is a fully furnished residential project in Majan, Dubai, designed for modern comfort and easy access to key areas.",
        "Choose from 1 Bedroom or 2 Bedroom layouts with practical sizes and strong entry pricing.",
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
          fileName: "Jade Tower_Digital.pdf",
          description: "Official digital brochure for Jade Tower.",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/jade/HR%20%20POOL%20CAMERA%201.png`,
      imgAlt: "Jade Tower in Majan by Tiger",
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
          id: "1bhk",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            Unit: "1 BHK",
            "Total Area": "743 SQ. FT",
            "Starting Price": "AED 981,000",
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
            "Total Area": "1,262 SQ. FT",
            "Starting Price": "AED 1,500,000",
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
        { label: "Modern Living", icon: "✨", color: "#d7b46a" },
        { label: "Fully Furnished", icon: "🛋️", color: "#d7b46a" },
        { label: "Convenient Location", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: LOCATION_EN,
      // Placeholder until you share exact pin
      lat: 25.089,
      lng: 55.318,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "Located in Majan, Dubai" },
        { icon: "🛣️", text: "Easy connectivity to key districts" },
      ],
    },

    media: {
      title: "Video",
      videos: [{ title: "Jade Tower (Landscape)", url: HERO_VIDEO }],
    },

    cta: {
      title: "Get Availability & Payment Plan",
      description:
        "Contact us to receive availability, unit options, and the best applicable payment plan for Jade Tower.",
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
        "برج جايد من تايجر | شقق غرفة وغرفتين في مجان | التسليم Q1 2027 | مفروش بالكامل",
      description:
        "برج جايد من تايجر في مجان يوفر شقق مفروشة بالكامل (غرفة وغرفتين) مع خيارات متعددة لخطة الدفع والتسليم في الربع الأول 2027.",
      keywords:
        "برج جايد, تايجر, مجان, شقق دبي, مفروش بالكامل, غرفة نوم, غرفتين, خطة الدفع, الربع الأول 2027",
      canonical: "/properties/apartments/tiger/jade-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: LOCATION_AR,
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 981,000 درهم",
      completionDate: HANDOVER_AR,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_AR,

      type: "شقق سكنية",
      units: "شقق غرفة وغرفتين",
      furnishing: FURNISHING_AR,
      remark: FURNISHING_AR,

      paymentPlanOptions: PAYMENT_PLANS_AR,
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["مجان", "مفروش بالكامل", "التسليم Q1 2027"],
    },

    intro: {
      title: "سكن مفروش بالكامل في مجان",
      paragraphs: [
        "برج جايد من تايجر مشروع سكني مفروش بالكامل في مجان – دبي، مصمم لراحة عصرية وسهولة الوصول إلى أهم المناطق.",
        "اختر من شقق غرفة نوم أو شقق غرفتين مع مساحات عملية وأسعار بداية قوية.",
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
          fileName: "Jade Tower_Digital.pdf",
          description: "البروشور الرسمي لمشروع برج جايد.",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/jade/HR%20%20POOL%20CAMERA%201.png`,
      imgAlt: "برج جايد في مجان من تايجر",
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
          id: "1bhk",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة واحدة (1BHK)",
            "المساحة الإجمالية": "743 قدم²",
            "السعر الابتدائي": "981,000 درهم",
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
            "المساحة الإجمالية": "1,262 قدم²",
            "السعر الابتدائي": "1,500,000 درهم",
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
        { label: "سكن عصري", icon: "✨", color: "#d7b46a" },
        { label: "مفروش بالكامل", icon: "🛋️", color: "#d7b46a" },
        { label: "موقع مميز", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address: LOCATION_AR,
      lat: 25.089,
      lng: 55.318,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "يقع في مجان – دبي" },
        { icon: "🛣️", text: "سهولة الوصول إلى أهم المناطق" },
      ],
    },

    media: {
      title: "فيديو",
      videos: [{ title: "فيديو برج جايد", url: HERO_VIDEO }],
    },

    cta: {
      title: "احصل على التوفر وخطة الدفع",
      description:
        "تواصل معنا للحصول على التوفر وخيارات الوحدات وأفضل خطة دفع مناسبة لمشروع برج جايد.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default jadeTigerData;
