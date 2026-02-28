// src/data/properties/apartments/tiger/elbrus/elbrusTigerData.js
// ✅ 100% Blueprint-aligned (same strict rules)
// - Uses your Bunny CDN pull zone + folder structure
// - cdn() helper with encodeURIComponent
// - paymentPlan exists in project + inside EVERY floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]
// - Uses your exact Bunny filenames

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const ELBRUS_DIR = "/tiger/elbrus";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${ELBRUS_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Elbrus Tower";
const PROJECT_NAME_AR = "برج إلبروس";

const LOCATION_EN = "Jumeirah Village Triangle (JVT), Dubai, UAE";
const LOCATION_AR = "مثلث قرية جميرا (JVT)، دبي، الإمارات";

const HANDOVER_EN = "Q4 2026";
const HANDOVER_AR = "الربع الرابع 2026";

const PAYMENT_PLAN_EN = "30% DP & 70% during a month";
const PAYMENT_PLAN_AR = "30% دفعة أولى و 70% خلال شهر";

const FURNISHING_EN = "Fully Furnished";
const FURNISHING_AR = "مفروش بالكامل";

// ========================
// Media / Docs (exact filenames)
// ========================
const HERO_VIDEO = cdn("Elbrus Tower.mp4");
const BROCHURE_PDF = cdn("Elbrous Brochure (4).pdf");
const HERO_IMAGE = `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`;

// ========================
// Gallery images (exact filenames)
// ========================
const GALLERY_SLIDES = [
  cdn("Appartmet.jpg"),
  cdn("Dinning Room.jpg"),
  cdn("Bedroom Final.jpg"),

  cdn("bathroom 1.jpg"),
  cdn("Bathroom 2.jpg"),

  cdn("Corriedor.jpg"),

  cdn("Lobby 1.jpg"),
  cdn("Lobby 2.jpg"),
  cdn("Lobby 33.jpg"),

  cdn("Gym 1.jpg"),
  cdn("Gym 2.jpg"),
  cdn("Gym 3.jpg"),

  cdn("Pool Area.jpg"),
];

// Fallback image for plan (no dedicated floorplan png/jpg listed)
const PLAN_IMAGE_1BR = cdn("elbrus 1br layout.webp");

export const elbrusTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Elbrus Tower by Tiger | 1 Bedroom Apartments in JVT | Fully Furnished",
      description:
        "Elbrus Tower by Tiger in Jumeirah Village Triangle (JVT) offers fully furnished 1-bedroom apartments with a simple payment plan: 30% down payment and 70% within a month.",
      keywords:
        "Elbrus Tower, Tiger, JVT, Dubai apartments, fully furnished, 1 bedroom apartment, payment plan",
      canonical: "/properties/apartments/tiger/elbrus-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: LOCATION_EN,
      status: "Off-Plan",
      startingPrice: "AED 1,200,000",
      completionDate: HANDOVER_EN,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_EN,

      type: "Apartments",
      units: "1 Bedroom Apartments",
      furnishing: FURNISHING_EN,
      remark: FURNISHING_EN,
    },

    hero: {
      backgroundUrl: HERO_VIDEO, // ✅ video hero
      squareImageUrl: HERO_IMAGE,
      companyName: "Tiger",
      rating: null,
      badges: ["JVT", "Fully Furnished"],
    },

    intro: {
      title: "Fully Furnished Living in JVT",
      paragraphs: [
        "Elbrus Tower by Tiger is a residential project in Jumeirah Village Triangle (JVT), offering fully furnished apartments designed for comfortable modern living.",
        "Enjoy elegant interiors, premium lifestyle facilities, and convenient access to key Dubai districts.",
        `Payment plan: ${PAYMENT_PLAN_EN}.`,
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "Brochure",
          fileName: "Elbrous Brochure (4).pdf",
          description: "Official brochure for Elbrus Tower (PDF).",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/elbrus/Pool%20Area.jpg`,
      imgAlt: "Elbrus Tower by Tiger (JVT)",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1.2M",
          label: "From",
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
          value: "30/70",
          label: "Payment Plan",
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
            "Total Area": "648 SQ. FT",
            "Starting Price": "AED 1,200,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_EN,
          },
          images: [PLAN_IMAGE_1BR],
          features: [FURNISHING_EN],
        },
      ],
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Modern Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Fully Furnished", icon: "🛋️", color: "#d7b46a" },
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
        { icon: "🛣️", text: "Easy access to major Dubai roads" },
      ],
    },

    media: {
      title: "Videos",
      videos: [{ title: "Elbrus Tower Video", url: HERO_VIDEO }],
    },

    cta: {
      title: "Get Availability",
      description:
        "Contact us to receive current availability, unit options, and the official brochure for Elbrus Tower.",
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
      title: "برج إلبروس من تايجر | شقق غرفة نوم في JVT | مفروش بالكامل",
      description:
        "برج إلبروس من تايجر في مثلث قرية جميرا (JVT) يوفر شقق مفروشة بالكامل (غرفة نوم واحدة) مع خطة دفع: 30% دفعة أولى و70% خلال شهر.",
      keywords:
        "برج إلبروس, تايجر, JVT, شقق دبي, مفروش بالكامل, شقة غرفة نوم, خطة الدفع",
      canonical: "/properties/apartments/tiger/elbrus-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: LOCATION_AR,
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 1,200,000 درهم",
      completionDate: HANDOVER_AR,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_AR,

      type: "شقق سكنية",
      units: "شقق غرفة نوم واحدة",
      furnishing: FURNISHING_AR,
      remark: FURNISHING_AR,
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: HERO_IMAGE,
      companyName: "Tiger",
      rating: null,
      badges: ["JVT", "مفروش بالكامل"],
    },

    intro: {
      title: "سكن مفروش بالكامل في JVT",
      paragraphs: [
        "برج إلبروس من تايجر مشروع سكني في مثلث قرية جميرا (JVT) يوفر شقق مفروشة بالكامل بتصميم عصري ومرافق نمط حياة مميزة.",
        "استمتع بالتصميمات الداخلية الأنيقة وسهولة الوصول إلى أهم مناطق دبي.",
        `خطة الدفع: ${PAYMENT_PLAN_AR}.`,
      ],
      brochures: [
        {
          title: "تحميل البروشور",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "بروشور",
          fileName: "Elbrous Brochure (4).pdf",
          description: "البروشور الرسمي لبرج إلبروس (PDF).",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/elbrus/Pool%20Area.jpg`,
      imgAlt: "برج إلبروس من تايجر (JVT)",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1.2M",
          label: "ابتداءً من",
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
          value: "30/70",
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
            "المساحة الإجمالية": "648 قدم²",
            "السعر الابتدائي": "1,200,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [PLAN_IMAGE_1BR],
          features: [FURNISHING_AR],
        },
      ],
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "لوبي عصري", icon: "🏢", color: "#d7b46a" },
        { label: "مفروش بالكامل", icon: "🛋️", color: "#d7b46a" },
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
        { icon: "🛣️", text: "سهولة الوصول إلى الطرق الرئيسية" },
      ],
    },

    media: {
      title: "فيديو",
      videos: [{ title: "فيديو برج إلبروس", url: HERO_VIDEO }],
    },

    cta: {
      title: "احصل على التوفر",
      description:
        "تواصل معنا للحصول على التوفر الحالي وخيارات الوحدات والبروشور الرسمي لبرج إلبروس.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default elbrusTigerData;
