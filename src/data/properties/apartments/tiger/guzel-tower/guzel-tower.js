// src/data/properties/apartments/tiger/guzel/guzelTigerData.js
// ✅ 100% Blueprint-aligned (same strict rules you enforced)
// - Uses your Bunny CDN pull zone + folder structure
// - cdn() helper with encodeURIComponent
// - paymentPlan exists in project + inside EVERY floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]
// - Includes all payment plan options (No PHPP + PHPP 24M)
// - Uses your exact Bunny filenames

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const GUZEL_DIR = "/tiger/guzel";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${GUZEL_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Guzel Towers";
const PROJECT_NAME_AR = "أبراج غوزيل";

const LOCATION_EN = "Jumeirah Village Triangle (JVT), Dubai, UAE";
const LOCATION_AR = "مثلث قرية جميرا (JVT)، دبي، الإمارات";

const HANDOVER_EN = "Q4 2027";
const HANDOVER_AR = "الربع الرابع 2027";

const FURNISHING_EN = "Fully Furnished";
const FURNISHING_AR = "مفروش بالكامل";

// Payment plan options (your exact text, normalized)
const PAYMENT_PLANS_EN = {
  noPhpp: "70% / 30% on completion",
  phpp24: "80% / 20% PHPP (24 months)",
};

const PAYMENT_PLANS_AR = {
  noPhpp: "70% / 30% عند التسليم (بدون خطة بعد التسليم)",
  phpp24: "80% / 20% خطة بعد التسليم (24 شهر)",
};

// ✅ Blueprint: choose ONE default plan shown on cards
const PAYMENT_PLAN_PRIMARY_EN = PAYMENT_PLANS_EN.noPhpp;
const PAYMENT_PLAN_PRIMARY_AR = PAYMENT_PLANS_AR.noPhpp;

// ========================
// PDFs / Docs (exact filenames)
// ========================
const BROCHURE_PDF = cdn("Digital Brochure - Guzel Towers.pdf");
const BROCHURE_PDF_COMPRESSED = cdn(
  "Digital Brochure - Guzel Towers (Compressed).pdf"
);
const FLOORPLANS_PDF = cdn("Guzel Towers - Floor Plans.pdf");
const FACTSHEET_PDF = cdn("Guzel - Fact Sheet .pdf");

// ========================
// Media
// ========================
const HERO_VIDEO = cdn("Guzel Towers - JVT.mp4");

// ========================
// Gallery images (exact filenames)
// ========================
const GALLERY_SLIDES = [
  cdn("001.jpg"),
  cdn("002.jpg"),
  cdn("003.jpg"),
  cdn("004.jpg"),
  cdn("005.jpg"),
  cdn("006.jpg"),
  cdn("007.jpg"),
  cdn("008.jpg"),
  cdn("009.jpg"),
  cdn("010.jpg"),
  cdn("011.jpg"),
  cdn("012.jpg"),
  cdn("013.jpg"),
  cdn("014.jpg"),
  cdn("015.jpg"),
  cdn("001 - B.jpg"),
];

// Fallback images for plans (no dedicated floorplan images listed)
const FP_STUDIO_IMG = cdn("guzel towers studio layout.webp");
const FP_1BR_IMG = cdn("guzel tower 1br layout.webp");
const FP_2BR_IMG = cdn("guzel towers 2br layout.webp");

export const guzelTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Guzel Towers by Tiger | Studio, 1 & 2 Bedroom Apartments in JVT | Handover Q4 2027 | Fully Furnished",
      description:
        "Guzel Towers by Tiger in JVT offers fully furnished Studio, 1BR, and 2BR apartments with flexible payment plan options and handover in Q4 2027.",
      keywords:
        "Guzel Towers, Tiger, JVT, Dubai apartments, fully furnished, studio apartment, 1 bedroom, 2 bedroom, payment plan, Q4 2027",
      canonical: "/properties/apartments/tiger/guzel-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: LOCATION_EN,
      status: "Off-Plan",
      startingPrice: "AED 794,000",
      completionDate: HANDOVER_EN,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_EN,

      type: "Apartments",
      units: "Studio, 1 & 2 Bedroom Apartments",
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
      badges: ["JVT", "Fully Furnished", "Handover Q4 2027"],
    },

    intro: {
      title: "Fully Furnished Living in JVT",
      paragraphs: [
        "Guzel Towers by Tiger is a fully furnished residential address in Jumeirah Village Triangle (JVT), offering stylish interiors and a modern lifestyle.",
        "Choose from Studio, 1 Bedroom, or 2 Bedroom layouts with practical sizes and competitive entry pricing.",
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
          fileName: "Digital Brochure - Guzel Towers.pdf",
          description: "Official digital brochure for Guzel Towers.",
        },
        {
          title: "Download Brochure (Compressed)",
          url: BROCHURE_PDF_COMPRESSED,
          type: "brochure",
          icon: "📄",
          color: "#d7b46a",
          category: "Brochure",
          fileName: "Digital Brochure - Guzel Towers (Compressed).pdf",
          description: "Compressed brochure for faster download.",
        },
        {
          title: "Download Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "floorplans",
          icon: "📐",
          color: "#d7b46a",
          category: "Floor Plans",
          fileName: "Guzel Towers - Floor Plans.pdf",
          description: "Floor plan PDF for unit layouts.",
        },
        {
          title: "Download Fact Sheet (PDF)",
          url: FACTSHEET_PDF,
          type: "factsheet",
          icon: "🧾",
          color: "#d7b46a",
          category: "Fact Sheet",
          fileName: "Guzel - Fact Sheet .pdf",
          description: "Official project fact sheet.",
        },
      ],
      imgUrl: cdn("003.jpg"),
      imgAlt: "Guzel Towers in JVT by Tiger",
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
      brochureHref: FLOORPLANS_PDF,
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO",
            "Total Area": "350 SQ. FT",
            "Starting Price": "AED 794,000",
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
            "Total Area": "677 SQ. FT",
            "Starting Price": "AED 1,110,000",
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
            "Total Area": "1,074 SQ. FT",
            "Starting Price": "AED 1,700,000",
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
        { label: "Fully Furnished", icon: "🛋️", color: "#d7b46a" },
        { label: "Modern Lifestyle", icon: "✨", color: "#d7b46a" },
        { label: "Community Living", icon: "🏘️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: LOCATION_EN,
      // Placeholder until you send exact pin
      lat: 25.054,
      lng: 55.221,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "Located in JVT, Dubai" },
        { icon: "🛣️", text: "Easy access to key Dubai districts" },
      ],
    },

    media: {
      title: "Video",
      videos: [{ title: "Guzel Towers - JVT", url: HERO_VIDEO }],
    },

    cta: {
      title: "Get Availability & Payment Plan",
      description:
        "Contact us to receive availability, unit options, and the best applicable payment plan for Guzel Towers.",
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
        "أبراج غوزيل من تايجر | استوديو، غرفة وغرفتين في JVT | التسليم Q4 2027 | مفروش بالكامل",
      description:
        "أبراج غوزيل من تايجر في مثلث قرية جميرا (JVT) يوفر شقق مفروشة بالكامل (استوديو، غرفة، غرفتين) مع خيارات متعددة لخطة الدفع والتسليم في الربع الرابع 2027.",
      keywords:
        "أبراج غوزيل, تايجر, JVT, شقق دبي, مفروش بالكامل, استوديو, غرفة نوم, غرفتين, خطة الدفع, الربع الرابع 2027",
      canonical: "/properties/apartments/tiger/guzel-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: LOCATION_AR,
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 794,000 درهم",
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
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["JVT", "مفروش بالكامل", "التسليم Q4 2027"],
    },

    intro: {
      title: "سكن مفروش بالكامل في JVT",
      paragraphs: [
        "أبراج غوزيل من تايجر مشروع سكني مفروش بالكامل في مثلث قرية جميرا (JVT)، بتصميم عصري ونمط حياة مريح.",
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
          fileName: "Digital Brochure - Guzel Towers.pdf",
          description: "البروشور الرسمي لمشروع أبراج غوزيل.",
        },
        {
          title: "تحميل البروشور (نسخة خفيفة)",
          url: BROCHURE_PDF_COMPRESSED,
          type: "brochure",
          icon: "📄",
          color: "#d7b46a",
          category: "بروشور",
          fileName: "Digital Brochure - Guzel Towers (Compressed).pdf",
          description: "نسخة خفيفة للتحميل السريع.",
        },
        {
          title: "تحميل مخططات الوحدات (PDF)",
          url: FLOORPLANS_PDF,
          type: "floorplans",
          icon: "📐",
          color: "#d7b46a",
          category: "مخططات",
          fileName: "Guzel Towers - Floor Plans.pdf",
          description: "ملف PDF لمخططات الوحدات.",
        },
        {
          title: "تحميل ورقة المعلومات (PDF)",
          url: FACTSHEET_PDF,
          type: "factsheet",
          icon: "🧾",
          color: "#d7b46a",
          category: "ورقة معلومات",
          fileName: "Guzel - Fact Sheet .pdf",
          description: "ورقة معلومات رسمية للمشروع.",
        },
      ],
      imgUrl: cdn("003.jpg"),
      imgAlt: "أبراج غوزيل في JVT من تايجر",
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
      brochureHref: FLOORPLANS_PDF,
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "استوديو",
            "المساحة الإجمالية": "350 قدم²",
            "السعر الابتدائي": "794,000 درهم",
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
            "المساحة الإجمالية": "677 قدم²",
            "السعر الابتدائي": "1,110,000 درهم",
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
            "المساحة الإجمالية": "1,074 قدم²",
            "السعر الابتدائي": "1,700,000 درهم",
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
        { label: "مفروش بالكامل", icon: "🛋️", color: "#d7b46a" },
        { label: "نمط حياة عصري", icon: "✨", color: "#d7b46a" },
        { label: "مجتمع متكامل", icon: "🏘️", color: "#d7b46a" },
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

    media: {
      title: "فيديو",
      videos: [{ title: "أبراج غوزيل - JVT", url: HERO_VIDEO }],
    },

    cta: {
      title: "احصل على التوفر وخطة الدفع",
      description:
        "تواصل معنا للحصول على التوفر وخيارات الوحدات وأفضل خطة دفع مناسبة لمشروع أبراج غوزيل.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default guzelTigerData;
