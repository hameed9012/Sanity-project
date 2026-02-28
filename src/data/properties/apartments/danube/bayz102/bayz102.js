// src/data/properties/apartments/danube/bayz102.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /danube/bayz102
// ✅ Exact filenames you listed
// ✅ Blueprint (EN + AR)
// ✅ FloorPlans specs ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/danube/bayz102";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png";

// PDFs
const BROCHURE_PDF = cdn("Bayz_102_brochure_EN.pdf");
const FACTSHEET_PDF = cdn("Bayz102_A4_factsheet_EN.pdf");
const PENTHOUSE_FLOORPLANS_PDF = cdn("Penthouses_Bayz102_floor_plan.pdf");

// Location doc (image)
const LOCATION_MAP = cdn("BAYZ102_location_map.jpg");

// Floor plan images (EXACT filenames)
const FP_1BR = cdn("Bay 102 1 br floor plan.webp");
const FP_2BR = cdn("Bayz 102 2br floor plan.webp");
const FP_5BR = cdn("Bay 102 5br floor plan.webp");

// Hero / Intro images
const HERO_BG = cdn("Air Taxi Hero Shot 8k.jpg");
const INTRO_MAIN = cdn("Bayz 102 View1_Day_Final.jpg");

// Gallery (sample set from your folder)
const GALLERY = [
  cdn("Air Taxi Hero Shot 8k.jpg"),
  cdn("Bayz 102 View1_Day_Final.jpg"),
  cdn("Bayz 102 View7_Night_Final_Option1.jpg"),
  cdn("Infinity Pool-final.jpg"),
  cdn("Business Centre.jpg"),
  cdn("Library.jpg"),
  cdn("Reception Lobby.jpg"),
  cdn("Aquatic Gym.jpg"),
  cdn("Pool with View-final.jpg"),
];

const HANDOVER = "Q2 2029";
const PAYMENT_PLAN = "64% / 36%";

export const bayz102Data = {
  en: {
    seo: {
      title:
        "Bayz 102 by Danube | 1 & 2BR + 5BR Penthouse | Business Bay | From AED 2,440,000 | Q2 2029",
      description:
        "Bayz 102 by Danube in Business Bay offers 1 & 2-bedroom residences plus a 5-bedroom penthouse. Starting from AED 2,440,000 with a 64/36 payment plan and handover in Q2 2029.",
      keywords:
        "Bayz 102 by Danube, Business Bay, 1BR, 2BR, 5BR penthouse, Q2 2029, 64/36",
      canonical: "/properties/apartments/danube/bayz102",
    },

    project: {
      name: "Bayz 102",
      developer: "Danube",
      location: "Business Bay, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,440,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1BR, 2BR, 5BR (Penthouse)",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Danube Properties",
      rating: null,
    },

    intro: {
      title: "BAYZ 102 — NEXT-LEVEL LIVING IN BUSINESS BAY",
      paragraphs: [
        "Bayz 102 by Danube is positioned in Business Bay with premium lifestyle features and striking visuals.",
        `Starting from AED 2,440,000 with a ${PAYMENT_PLAN} payment plan and expected handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Fact Sheet", url: FACTSHEET_PDF, type: "secondary" },
        {
          title: "Penthouse Floor Plans (PDF)",
          url: PENTHOUSE_FLOORPLANS_PDF,
          type: "secondary",
        },
        { title: "Location Map", url: LOCATION_MAP, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Bayz 102 visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,440,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "748.74 sq.ft",
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
      title: "Bayz 102 Visuals",
      slides: GALLERY,
      projectTag: "Bayz 102",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "748.74 sq.ft",
            "Starting Price": "AED 2,440,000",
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
            "Total Area": "1199.21 sq.ft",
            "Starting Price": "AED 3,145,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "5br-penthouse",
          title: "5 Bedroom (Penthouse)",
          bedrooms: 5,
          specs: {
            "Total Area": "7502.55 sq.ft",
            "Starting Price": "AED 31,944,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_5BR],
          features: ["—"],
        },
      ],
      brochureHref: PENTHOUSE_FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Infinity Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Business Centre", icon: "💼", color: "#d7b46a" },
        { label: "Library", icon: "📚", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Premium Lobby", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Bayz 102",
      address: "Bayz 102 by Danube, Business Bay, Dubai, UAE",
      lat: 25.1874375,
      lng: 55.2599375,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Strong access to Downtown and central Dubai." },
        { icon: "🏙️", text: "Located in Business Bay." },
        { icon: "🛍️", text: "Close to lifestyle destinations." },
      ],
    },

    cta: {
      title: "Interested in Bayz 102?",
      description:
        "Share your details to receive availability, unit options, and official documents for Bayz 102.",
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
        "بايز 102 من دانوب | 1 و2 غرفة + بنتهاوس 5 غرف | الخليج التجاري | يبدأ من 2,440,000 درهم | Q2 2029",
      description:
        "بايز 102 من دانوب في الخليج التجاري يوفر 1 و2 غرفة نوم بالإضافة إلى بنتهاوس 5 غرف. يبدأ من 2,440,000 درهم مع خطة دفع 64/36 وتسليم Q2 2029.",
      keywords:
        "بايز 102 دانوب, الخليج التجاري, 1 غرفة, 2 غرفة, بنتهاوس 5 غرف, Q2 2029, 64/36",
      canonical: "/properties/apartments/danube/bayz102",
    },

    project: {
      name: "بايز 102",
      developer: "دانوب",
      location: "الخليج التجاري، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "2,440,000 درهم",
      completionDate: "الربع الثاني 2029",
      paymentPlan: "64/36",
      type: "شقق سكنية",
      units: "1BR, 2BR, بنتهاوس 5 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "دانوب العقارية",
      rating: null,
    },

    intro: {
      title: "بايز 102 — مستوى جديد من الفخامة في الخليج التجاري",
      paragraphs: [
        `يبدأ السعر من 2,440,000 درهم مع خطة دفع ${PAYMENT_PLAN} وتسليم متوقع في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTSHEET_PDF, type: "secondary" },
        {
          title: "مخططات البنتهاوس (PDF)",
          url: PENTHOUSE_FLOORPLANS_PDF,
          type: "secondary",
        },
        { title: "خريطة الموقع", url: LOCATION_MAP, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بايز 102",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,440,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "748.74 قدم²",
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
      projectTag: "بايز 102",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "748.74 قدم مربع",
            "السعر الابتدائي": "2,440,000 درهم",
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
            "إجمالي المساحة": "1199.21 قدم مربع",
            "السعر الابتدائي": "3,145,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "5br-penthouse",
          title: "بنتهاوس 5 غرف",
          bedrooms: 5,
          specs: {
            "إجمالي المساحة": "7502.55 قدم مربع",
            "السعر الابتدائي": "31,944,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_5BR],
          features: ["—"],
        },
      ],
      brochureHref: PENTHOUSE_FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "مركز أعمال", icon: "💼", color: "#d7b46a" },
        { label: "مكتبة", icon: "📚", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "ردهة فاخرة", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بايز 102",
      address: "بايز 102 من دانوب، الخليج التجاري، دبي",
      lat: 25.1874375,
      lng: 55.2599375,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة وصول قوية إلى وسط دبي." },
        { icon: "🏙️", text: "ضمن منطقة الخليج التجاري." },
        { icon: "🛍️", text: "قريب من الوجهات الحيوية." },
      ],
    },

    cta: {
      title: "مهتم ببايز 102؟",
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

export default bayz102Data;
