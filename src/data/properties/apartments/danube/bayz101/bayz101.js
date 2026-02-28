// src/data/properties/apartments/danube/bayz101.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /danube/bayz101
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint (EN + AR)
// ✅ FloorPlans specs ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/danube/bayz101";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png";

// PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("Bayz_101_brochure_Digital.pdf");
const FACTSHEET_PDF = cdn("Bayz101_A4_factsheet_EN.pdf");
const FLOORPLANS_PDF = cdn("Bayz101_floor_plans_ver2.pdf");
const ALT_BROCHURE_PDF = cdn("Bayz 101 By DANUBE 12th Jan 24.pdf");

// Floor plan images (EXACT filenames)
const FP_1BR = cdn("Bayz 101 1br floor plan.webp");
const FP_2BR = cdn("Bayz 101 2br floor plan.webp");

// Hero / Intro images (real files)
const HERO_BG = cdn("SCENE_1_NIGHT_WIDE.jpg");
const INTRO_MAIN = cdn("VIEW 19 NIGHT.jpg");

// Gallery (EXACT filenames - sample set from your folder)
const GALLERY = [
  cdn("SCENE_1_NIGHT_WIDE.jpg"),
  cdn("VIEW 19 NIGHT.jpg"),
  cdn("INFINITY POOL v002.jpg"),
  cdn("Gym.jpg"),
  cdn("Bowling.jpg"),
  cdn("Business center.jpg"),
  cdn("Kitchen.jpg"),
  cdn("Living_room.jpg"),
  cdn("Tennis Court.jpg"),
  cdn("SWING_.jpg"),
];

// Your spreadsheet info (Bayz 101)
const HANDOVER = "Q2 2028";
const PAYMENT_PLAN = "64% / 36%";

export const bayz101Data = {
  en: {
    seo: {
      title:
        "Bayz 101 by Danube | 1 & 2BR in Business Bay | From AED 2,476,000 | Q2 2028",
      description:
        "Bayz 101 by Danube in Business Bay offers 1 & 2-bedroom residences starting from AED 2,476,000 with a 64/36 payment plan and handover in Q2 2028.",
      keywords:
        "Bayz 101 by Danube, Business Bay, Danube Properties, 1BR, 2BR, Q2 2028, 64/36",
      canonical: "/properties/apartments/danube/bayz101",
    },

    project: {
      name: "Bayz 101",
      developer: "Danube",
      location: "Business Bay, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,476,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1BR, 2BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Danube Properties",
      rating: null,
    },

    intro: {
      title: "BAYZ 101 — ICONIC LIVING IN BUSINESS BAY",
      paragraphs: [
        "Bayz 101 by Danube is positioned in Business Bay—one of Dubai’s most dynamic urban districts. The project is designed for residents and investors seeking strong connectivity and a prime central address.",
        `Prices start from AED 2,476,000 with a ${PAYMENT_PLAN} payment plan and expected handover in ${HANDOVER}. Download the official documents below.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Fact Sheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
        {
          title: "Brochure (Alt PDF)",
          url: ALT_BROCHURE_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Bayz 101 visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,476,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "753.26 sq.ft",
          label: "Total Area (1BR)",
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
      title: "Bayz 101 Visuals",
      slides: GALLERY,
      projectTag: "Bayz 101",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "753.26 sq.ft",
            "Starting Price": "AED 2,476,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1054.11 sq.ft",
            "Starting Price": "AED 2,957,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Infinity Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Bowling", icon: "🎳", color: "#d7b46a" },
        { label: "Business Center", icon: "💼", color: "#d7b46a" },
        { label: "Tennis Court", icon: "🎾", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Bayz 101",
      address: "Bayz 101 by Danube, Business Bay, Dubai, UAE",
      lat: 25.191834,
      lng: 55.26334,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Prime connectivity across central Dubai." },
        { icon: "🏙️", text: "Located in Business Bay." },
        { icon: "🛍️", text: "Close to lifestyle, retail, and dining." },
      ],
    },

    cta: {
      title: "Interested in Bayz 101?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Bayz 101.",
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
        "بايز 101 من دانوب | 1 و2 غرفة في الخليج التجاري | يبدأ من 2,476,000 درهم | Q2 2028",
      description:
        "بايز 101 من دانوب في الخليج التجاري يوفر وحدات 1 و2 غرفة نوم تبدأ من 2,476,000 درهم مع خطة دفع 64/36 وتسليم في الربع الثاني 2028.",
      keywords:
        "بايز 101 دانوب, الخليج التجاري, 1 غرفة, 2 غرفة, Q2 2028, 64/36",
      canonical: "/properties/apartments/danube/bayz101",
    },

    project: {
      name: "بايز 101",
      developer: "دانوب",
      location: "الخليج التجاري، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "2,476,000 درهم",
      completionDate: "الربع الثاني 2028",
      paymentPlan: "64/36",
      type: "شقق سكنية",
      units: "1BR, 2BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "دانوب العقارية",
      rating: null,
    },

    intro: {
      title: "بايز 101 — أسلوب حياة مميز في الخليج التجاري",
      paragraphs: [
        "يقع مشروع بايز 101 من دانوب في الخليج التجاري، أحد أكثر المناطق الحيوية في دبي، مع اتصال قوي بالمناطق الرئيسية.",
        `يبدأ السعر من 2,476,000 درهم مع خطة دفع ${PAYMENT_PLAN} وتسليم متوقع في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTSHEET_PDF, type: "secondary" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
        { title: "ملف إضافي (PDF)", url: ALT_BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بايز 101",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,476,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "753.26 قدم²",
          label: "المساحة (1BR)",
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
      projectTag: "بايز 101",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "753.26 قدم مربع",
            "السعر الابتدائي": "2,476,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1054.11 قدم مربع",
            "السعر الابتدائي": "2,957,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "بولينج", icon: "🎳", color: "#d7b46a" },
        { label: "مركز أعمال", icon: "💼", color: "#d7b46a" },
        { label: "ملعب تنس", icon: "🎾", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بايز 101",
      address: "بايز 101 من دانوب، الخليج التجاري، دبي",
      lat: 25.191834,
      lng: 55.26334,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة وصول ممتازة داخل دبي." },
        { icon: "🏙️", text: "ضمن منطقة الخليج التجاري." },
        { icon: "🛍️", text: "بالقرب من التسوق والمطاعم." },
      ],
    },

    cta: {
      title: "مهتم ببايز 101؟",
      description:
        "أرسل بياناتك للحصول على التوافر وخيارات الوحدات والملفات الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default bayz101Data;
