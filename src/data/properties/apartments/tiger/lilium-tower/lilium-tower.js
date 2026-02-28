// src/data/properties/apartments/tiger/lilium/liliumTigerData.js
// ✅ 100% Blueprint-aligned (same strict rules)
// - Uses your Bunny CDN pull zone + folder structure
// - cdn() helper with encodeURIComponent
// - paymentPlan exists in project + inside EVERY floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]
// - Uses your exact Bunny filenames
// - Payment plan: 30% DP & 70% during a month
// - Fully Furnished

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const LILIUM_DIR = "/tiger/lilium";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${LILIUM_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Lilium Tower";
const PROJECT_NAME_AR = "برج ليليوم";

const LOCATION_EN = "Jumeirah Village Triangle (JVT), Dubai, UAE";
const LOCATION_AR = "مثلث قرية جميرا (JVT)، دبي، الإمارات";

const HANDOVER_EN = "Q4 2026";
const HANDOVER_AR = "الربع الرابع 2026";

const PAYMENT_PLAN_EN = "30% DP & 70% during a month";
const PAYMENT_PLAN_AR = "30% دفعة أولى و 70% خلال شهر";

const FURNISHING_EN = "Fully Furnished";
const FURNISHING_AR = "مفروش بالكامل";

// ========================
// PDFs / Docs (exact filenames)
// ========================
const BROCHURE_PDF = cdn("Lilium Tower .pdf");
const LAYOUT_PDF = cdn("LILIUM LAYOUT.pdf");

// ========================
// Media (exact filenames)
// ========================
const HERO_VIDEO = cdn("video (2).mp4");
const COMING_SOON_VIDEO = cdn("Lilium Coming soon.mp4");
const COMING_SOON_VIDEO_2 = cdn("Coming Soon_1 (1).mp4");

// ========================
// Key visuals (exact filenames)
// ========================
const HERO_IMAGE = cdn("Lilium Tower - JVT[42].png");
const PODIUM_TOP = cdn("230817 TOWER PODIUM top 2.jpg");

// ========================
// Gallery images (exact filenames)
// ========================
const GALLERY_SLIDES = [
  HERO_IMAGE,
  PODIUM_TOP,

  cdn("01.jpg"),
  cdn("02.jpg"),
  cdn("03.jpg"),
  cdn("04.jpg"),
  cdn("05.jpg"),
  cdn("06.jpg"),
  cdn("07.jpg"),

  cdn("01.RGB_color.jpg"),
  cdn("02.RGB_color.jpg"),
  cdn("03.RGB_color.jpg"),

  cdn("1.jpg"),
  cdn("2.jpg"),
  cdn("3.jpg"),
  cdn("4.jpg"),
  cdn("5.jpg"),
  cdn("6.jpg"),
  cdn("7.jpg"),

  cdn("11.jpg"),
  cdn("22.jpg"),
  cdn("33.jpg"),

  cdn("Gym_View02 copy.jpg"),
  cdn("Gym_View04 copy.jpg"),
  cdn("Gym_View050000 copy.jpg"),

  cdn("pool (2).jpg"),
  cdn("pergola (1).jpg"),
  cdn("plaground 1.jpg"),

  cdn("lilliun-tower-entrance_View03.jpg"),
  cdn("lilliun-tower-entrance_View020000.jpg"),
  cdn("lilliun-tower-entrance_View040000.jpg"),
  cdn("lilliun-tower-entrance_View050000.jpg"),

  cdn("FACILITIES ADS 2.png"),
  cdn("interior ADS 2.png"),
];

// Fallback image for plan (no unit floorplan images listed)
const PLAN_IMAGE_1BR = cdn("lilium 1br layout.webp");

export const liliumTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Lilium Tower by Tiger | 1 Bedroom Apartments in JVT | Fully Furnished",
      description:
        "Lilium Tower by Tiger in Jumeirah Village Triangle (JVT) offers fully furnished 1-bedroom apartments with a simple payment plan: 30% down payment and 70% within a month.",
      keywords:
        "Lilium Tower, Tiger, JVT, Dubai apartments, fully furnished, 1 bedroom apartment, payment plan",
      canonical: "/properties/apartments/tiger/lilium-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: LOCATION_EN,
      status: "Off-Plan",
      startingPrice: "AED 1,300,000",
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
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["JVT", "Fully Furnished"],
    },

    intro: {
      title: "Fully Furnished Living in JVT",
      paragraphs: [
        "Lilium Tower by Tiger is a residential project in JVT featuring fully furnished apartments designed for modern comfort and a refined lifestyle.",
        "Enjoy premium amenities, elegant interiors, and convenient connectivity across Dubai.",
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
          fileName: "Lilium Tower .pdf",
          description: "Official brochure for Lilium Tower (PDF).",
        },
        {
          title: "Download Layout (PDF)",
          url: LAYOUT_PDF,
          type: "layout",
          icon: "📐",
          color: "#d7b46a",
          category: "Layout",
          fileName: "LILIUM LAYOUT.pdf",
          description: "Official layout document (PDF).",
        },
      ],
      imgUrl: HERO_IMAGE,
      imgAlt: "Lilium Tower by Tiger (JVT)",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1.3M",
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
            "Total Area": "668 SQ. FT",
            "Starting Price": "AED 1,300,000",
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
        { label: "Kids Play Area", icon: "🧸", color: "#d7b46a" },
        { label: "Pergola / Outdoor", icon: "🌿", color: "#d7b46a" },
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
      videos: [
        { title: "Main Video", url: HERO_VIDEO },
        { title: "Coming Soon", url: COMING_SOON_VIDEO },
        { title: "Coming Soon (Alt)", url: COMING_SOON_VIDEO_2 },
      ],
    },

    cta: {
      title: "Get Availability",
      description:
        "Contact us to receive current availability, unit options, and the official brochure for Lilium Tower.",
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
      title: "برج ليليوم من تايجر | شقق غرفة نوم في JVT | مفروش بالكامل",
      description:
        "برج ليليوم من تايجر في مثلث قرية جميرا (JVT) يوفر شقق مفروشة بالكامل (غرفة نوم واحدة) مع خطة دفع: 30% دفعة أولى و70% خلال شهر.",
      keywords:
        "برج ليليوم, تايجر, JVT, شقق دبي, مفروش بالكامل, شقة غرفة نوم, خطة الدفع",
      canonical: "/properties/apartments/tiger/lilium-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: LOCATION_AR,
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 1,300,000 درهم",
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
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["JVT", "مفروش بالكامل"],
    },

    intro: {
      title: "سكن مفروش بالكامل في JVT",
      paragraphs: [
        "برج ليليوم من تايجر مشروع سكني في مثلث قرية جميرا (JVT) يوفر شقق مفروشة بالكامل بتصميم عصري ومرافق نمط حياة مميزة.",
        "استمتع بالمرافق الراقية وسهولة الوصول إلى أهم مناطق دبي.",
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
          fileName: "Lilium Tower .pdf",
          description: "البروشور الرسمي لبرج ليليوم (PDF).",
        },
        {
          title: "تحميل المخطط (PDF)",
          url: LAYOUT_PDF,
          type: "layout",
          icon: "📐",
          color: "#d7b46a",
          category: "مخطط",
          fileName: "LILIUM LAYOUT.pdf",
          description: "وثيقة المخطط الرسمي (PDF).",
        },
      ],
      imgUrl: HERO_IMAGE,
      imgAlt: "برج ليليوم من تايجر (JVT)",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1.3M",
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
            "المساحة الإجمالية": "668 قدم²",
            "السعر الابتدائي": "1,300,000 درهم",
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
        { label: "منطقة ألعاب أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "جلسات خارجية", icon: "🌿", color: "#d7b46a" },
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
      title: "فيديوهات",
      videos: [
        { title: "الفيديو الرئيسي", url: HERO_VIDEO },
        { title: "قريبًا", url: COMING_SOON_VIDEO },
        { title: "قريبًا (بديل)", url: COMING_SOON_VIDEO_2 },
      ],
    },

    cta: {
      title: "احصل على التوفر",
      description:
        "تواصل معنا للحصول على التوفر الحالي وخيارات الوحدات والبروشور الرسمي لبرج ليليوم.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default liliumTigerData;
