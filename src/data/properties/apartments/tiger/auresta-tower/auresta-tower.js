// src/data/properties/apartments/tiger/auresta/aurestaTigerData.js
// ✅ 100% Blueprint-aligned (same rules you enforced)
// - Uses your Bunny CDN pull zone + folder structure
// - cdn() helper with encodeURIComponent
// - paymentPlan exists in project + inside EVERY floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]
// - Includes all payment plan options + January Offer as an explicit option

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const AURESTA_DIR = "/tiger/auresta";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${AURESTA_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Auresta";
const PROJECT_NAME_AR = "أوريستا";

const LOCATION_EN = "Jumeirah Village Circle (JVC), Dubai, UAE";
const LOCATION_AR = "قرية جميرا الدائرية (JVC)، دبي، الإمارات";

const HANDOVER_EN = "Q4 2028";
const HANDOVER_AR = "الربع الرابع 2028";

const FURNISHING_EN = "Fully Furnished";
const FURNISHING_AR = "مفروش بالكامل";

// Payment plan options (your exact text, normalized)
const PAYMENT_PLANS_EN = {
  noPhpp: "60% / 40% on completion",
  phpp24: "70% / 30% PHPP (24 months)",
  januaryOffer: "January Offer: 52% during construction – 48% over 48 months",
};

const PAYMENT_PLANS_AR = {
  noPhpp: "60% / 40% عند التسليم (بدون خطة بعد التسليم)",
  phpp24: "70% / 30% خطة بعد التسليم (24 شهر)",
  januaryOffer: "عرض يناير: 52% أثناء الإنشاء – 48% على 48 شهر",
};

// ✅ Blueprint: choose ONE default plan shown on cards
const PAYMENT_PLAN_PRIMARY_EN = PAYMENT_PLANS_EN.januaryOffer;
const PAYMENT_PLAN_PRIMARY_AR = PAYMENT_PLANS_AR.januaryOffer;

// ========================
// PDFs / Docs (exact filenames)
// ========================
const BROCHURE_PDF = cdn("AURESTA _ Digital Brochure (1).pdf");
const FLOORPLANS_PDF = cdn("AURESTA _Floor Plans (1).pdf");

// ========================
// Key visuals
// ========================
const HERO_IMAGE = `https://luxury-real-estate-media.b-cdn.net/tiger/auresta/Pool.jpg`;
const HERO_IMAGE_ALT = `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`;
const TOP_VIEW = cdn("Top View.jpg");
const LANDSCAPE = cdn("landscape.jpg");

// ========================
// Gallery images (exact filenames)
// ========================
const GALLERY_SLIDES = [
  LANDSCAPE,

  cdn("Lobby 1.jpg"),
  cdn("Lobby 2.jpg"),
  cdn("Lobby 3.jpg"),
  TOP_VIEW,

  cdn("Living 1.jpg"),
  cdn("Living 2.jpg"),
  cdn("Living 3.jpg"),

  cdn("Bedroom 1.jpg"),
  cdn("Bedroom 2.jpg"),

  cdn("Corriedor.jpg"),
  cdn("Pool.jpg"),

  cdn("Exterior EXTENDED 1.jpg"),
  cdn("Exterior EXTENDED.jpg"),

  cdn("B.jpg"),
];

// Fallback images for plans (no dedicated floorplan PNG/JPG listed)
const FP_STUDIO_IMG = cdn("auresta tower studio layout.webp");
const FP_1BR_IMG = cdn("auresta tower 1br layout");
const FP_2BR_IMG = cdn("auresta tower 2br layout");

export const aurestaTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Auresta by Tiger | Studio, 1 & 2 Bedroom Apartments in JVC | Handover Q4 2028 | Fully Furnished",
      description:
        "Auresta by Tiger in JVC offers fully furnished Studio, 1BR, and 2BR apartments with multiple payment plan options including a January offer, and handover in Q4 2028.",
      keywords:
        "Auresta, Tiger, JVC, Dubai apartments, fully furnished, studio apartment, 1 bedroom, 2 bedroom, payment plan, Q4 2028",
      canonical: "/properties/apartments/tiger/auresta-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: LOCATION_EN,
      status: "Off-Plan",
      startingPrice: "AED 746,000",
      completionDate: HANDOVER_EN,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_EN,

      type: "Apartments",
      units: "Studio, 1 & 2 Bedroom Apartments",
      furnishing: FURNISHING_EN,
      remark: FURNISHING_EN,

      // Optional: show all plans if your UI renders it
      paymentPlanOptions: PAYMENT_PLANS_EN,
    },

    hero: {
      backgroundUrl: HERO_IMAGE,
      squareImageUrl: HERO_IMAGE_ALT,
      companyName: "Tiger",
      rating: null,
      badges: ["JVC", "Fully Furnished", "Handover Q4 2028"],
    },

    intro: {
      title: "Fully Furnished Living in JVC",
      paragraphs: [
        "Auresta by Tiger is a fully furnished residential project in Jumeirah Village Circle (JVC), offering contemporary interiors and lifestyle amenities for comfortable living.",
        "Choose from Studio, 1 Bedroom, or 2 Bedroom layouts with attractive starting prices and practical sizes.",
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
          fileName: "AURESTA _ Digital Brochure (1).pdf",
          description: "Official digital brochure for Auresta.",
        },
        {
          title: "Download Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "floorplans",
          icon: "📐",
          color: "#d7b46a",
          category: "Floor Plans",
          fileName: "AURESTA _Floor Plans (1).pdf",
          description: "Floor plan PDF for unit layouts.",
        },
      ],
      imgUrl: TOP_VIEW,
      imgAlt: "Auresta in JVC (top view)",
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
          value: "Multiple",
          label: "Plans",
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
      brochureHref: FLOORPLANS_PDF,
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO",
            "Total Area": "328 SQ. FT",
            "Starting Price": "AED 746,000",
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
            "Total Area": "670 SQ. FT",
            "Starting Price": "AED 1,170,000",
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
            "Total Area": "1,138 SQ. FT",
            "Starting Price": "AED 1,900,000",
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
        { label: "Modern Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Furnished Units", icon: "🛋️", color: "#d7b46a" },
        { label: "Lifestyle Community", icon: "🌿", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: LOCATION_EN,
      // Placeholder until you send exact pin
      lat: 25.055,
      lng: 55.203,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "Located in JVC, Dubai" },
        { icon: "🛣️", text: "Easy access to key Dubai districts" },
      ],
    },

    cta: {
      title: "Get Availability & Latest Offers",
      description:
        "Contact us to receive current availability, the best applicable payment plan, and all official PDFs for Auresta.",
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
        "أوريستا من تايجر | استوديو، غرفة وغرفتين في JVC | التسليم Q4 2028 | مفروش بالكامل",
      description:
        "أوريستا من تايجر في قرية جميرا الدائرية (JVC) يوفر شقق مفروشة بالكامل (استوديو، غرفة، غرفتين) مع خيارات متعددة لخطة الدفع وعرض يناير والتسليم في الربع الرابع 2028.",
      keywords:
        "أوريستا, تايجر, JVC, شقق دبي, مفروش بالكامل, استوديو, غرفة نوم, غرفتين, خطة الدفع, الربع الرابع 2028",
      canonical: "/properties/apartments/tiger/auresta-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: LOCATION_AR,
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 746,000 درهم",
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
      squareImageUrl: HERO_IMAGE_ALT,
      companyName: "Tiger",
      rating: null,
      badges: ["JVC", "مفروش بالكامل", "التسليم Q4 2028"],
    },

    intro: {
      title: "سكن مفروش بالكامل في JVC",
      paragraphs: [
        "أوريستا من تايجر مشروع سكني مفروش بالكامل في قرية جميرا الدائرية (JVC)، يوفر تصميمات داخلية عصرية ومرافق نمط حياة لراحة السكن.",
        "اختر من استوديو أو شقة غرفة نوم أو شقة غرفتين مع أسعار بداية قوية ومساحات عملية.",
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
          fileName: "AURESTA _ Digital Brochure (1).pdf",
          description: "البروشور الرسمي لمشروع أوريستا.",
        },
        {
          title: "تحميل مخططات الوحدات (PDF)",
          url: FLOORPLANS_PDF,
          type: "floorplans",
          icon: "📐",
          color: "#d7b46a",
          category: "مخططات",
          fileName: "AURESTA _Floor Plans (1).pdf",
          description: "ملف PDF لمخططات الوحدات.",
        },
      ],
      imgUrl: TOP_VIEW,
      imgAlt: "أوريستا في JVC (منظر علوي)",
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
          value: "خيارات",
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
      brochureHref: FLOORPLANS_PDF,
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "استوديو",
            "المساحة الإجمالية": "328 قدم²",
            "السعر الابتدائي": "746,000 درهم",
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
            "المساحة الإجمالية": "670 قدم²",
            "السعر الابتدائي": "1,170,000 درهم",
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
            "المساحة الإجمالية": "1,138 قدم²",
            "السعر الابتدائي": "1,900,000 درهم",
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
        { label: "لوبي عصري", icon: "🏢", color: "#d7b46a" },
        { label: "وحدات مفروشة", icon: "🛋️", color: "#d7b46a" },
        { label: "مجتمع حيوي", icon: "🌿", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address: LOCATION_AR,
      lat: 25.055,
      lng: 55.203,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "يقع في قرية جميرا الدائرية (JVC) – دبي" },
        { icon: "🛣️", text: "سهولة الوصول إلى أهم مناطق دبي" },
      ],
    },

    cta: {
      title: "احصل على التوفر وأحدث العروض",
      description:
        "تواصل معنا للحصول على التوفر الحالي وأفضل خطة دفع مناسبة وروابط ملفات PDF الرسمية لمشروع أوريستا.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default aurestaTigerData;
