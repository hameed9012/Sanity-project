// src/data/properties/apartments/danube/diamondz.js
// ✅ Folder: /danube/diamondz
// ✅ Exact filenames you listed
// ✅ Spreadsheet-driven floorplan specs

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/danube/diamondz";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png";

const BROCHURE_PDF = cdn("Diamondz_brochure_EN.pdf");
const FLOORPLANS_PDF = cdn("Diamondz_floor_plans_ver1.pdf");

const HERO_BG = cdn("Exterior.jpg");
const INTRO_MAIN = cdn("A V7s.jpg");

// Floor plan images (EXACT)
const FP_1BR = cdn("Diamondz 1br floor plan.webp");
const FP_2BR = cdn("Diamondz 2br floor plan.webp");
const FP_3BR = cdn("Diamondz 3br floor plan.webp");
const FP_4BR = cdn("Diamondz 4 br floor plan.webp");

// Gallery sample (EXACT filenames)
const GALLERY = [
  cdn("Exterior.jpg"),
  cdn("A V7s.jpg"),
  cdn("Roof Top Pool bar.jpg"),
  cdn("Gym-Edited1.jpg"),
  cdn("Prayer Hall.jpg"),
  cdn("Kids.jpg"),
  cdn("SPA_011.jpg"),
  cdn("2BR-Bedroom.jpg"),
  cdn("Ain Dubai View.jpg"),
];

const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "69% / 31%";

export const diamondzData = {
  en: {
    seo: {
      title: "Diamondz by Danube | 1–4BR in JLT | From AED 1,913,000 | Q4 2027",
      description:
        "Diamondz by Danube in JLT offers 1 to 4-bedroom residences starting from AED 1,913,000 with a 69/31 payment plan and handover in Q4 2027.",
      keywords: "Diamondz by Danube, JLT, 1BR, 2BR, 3BR, 4BR, 69/31, Q4 2027",
      canonical: "/properties/apartments/danube/diamondz",
    },

    project: {
      name: "Diamondz",
      developer: "Danube",
      location: "JLT, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,913,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1BR, 2BR, 3BR, 4BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Danube Properties",
      rating: null,
    },

    intro: {
      title: "DIAMONDZ — ELEVATED LIVING IN JLT",
      paragraphs: [
        "Diamondz by Danube is located in JLT with a lifestyle-focused concept and strong demand potential.",
        `Starting from AED 1,913,000 with a ${PAYMENT_PLAN} payment plan and expected handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Diamondz visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,913,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "751.32 sq.ft",
          label: "Total Area (1BR)",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "JLT",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Diamondz Visuals",
      slides: GALLERY,
      projectTag: "Diamondz",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "751.32 sq.ft",
            "Starting Price": "AED 1,913,000",
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
            "Total Area": "1107.28 sq.ft",
            "Starting Price": "AED 2,703,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1519 sq.ft",
            "Starting Price": "AED 3,650,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "1970.97 sq.ft",
            "Starting Price": "AED 4,750,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_4BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Rooftop Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Kids Area", icon: "🧸", color: "#d7b46a" },
        { label: "Prayer Hall", icon: "🕌", color: "#d7b46a" },
        { label: "Spa", icon: "🧖", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Diamondz",
      address: "Diamondz by Danube, JLT, Dubai, UAE",
      lat: 25.063857,
      lng: 55.14095,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "Located in JLT." },
        { icon: "🚗", text: "Strong access to major Dubai routes." },
        { icon: "🛍️", text: "Close to retail, dining, and lifestyle." },
      ],
    },

    cta: {
      title: "Interested in Diamondz?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Diamondz.",
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
        "دايموندز من دانوب | 1–4 غرف في JLT | يبدأ من 1,913,000 درهم | Q4 2027",
      description:
        "دايموندز من دانوب في JLT يوفر وحدات من 1 إلى 4 غرف نوم. يبدأ من 1,913,000 درهم مع خطة دفع 69/31 وتسليم Q4 2027.",
      keywords:
        "دايموندز دانوب, JLT, 1 غرفة, 2 غرفة, 3 غرفة, 4 غرفة, 69/31, Q4 2027",
      canonical: "/properties/apartments/danube/diamondz",
    },

    project: {
      name: "دايموندز",
      developer: "دانوب",
      location: "JLT، دبي",
      status: "على المخطط",
      startingPrice: "1,913,000 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "1BR, 2BR, 3BR, 4BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "دانوب العقارية",
      rating: null,
    },

    intro: {
      title: "دايموندز — أسلوب حياة راقٍ في JLT",
      paragraphs: [
        `يبدأ السعر من 1,913,000 درهم مع خطة دفع ${PAYMENT_PLAN} وتسليم متوقع في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور دايموندز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,913,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "751.32 قدم²",
          label: "المساحة (1BR)",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "JLT",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "دايموندز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "751.32 قدم مربع",
            "السعر الابتدائي": "1,913,000 درهم",
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
            "إجمالي المساحة": "1107.28 قدم مربع",
            "السعر الابتدائي": "2,703,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1519 قدم مربع",
            "السعر الابتدائي": "3,650,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "أربع غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "1970.97 قدم مربع",
            "السعر الابتدائي": "4,750,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_4BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح علوي", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "منطقة أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "مصلى", icon: "🕌", color: "#d7b46a" },
        { label: "سبا", icon: "🧖", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "دايموندز",
      address: "دايموندز من دانوب، JLT، دبي",
      lat: 25.063857,
      lng: 55.14095,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "ضمن منطقة JLT." },
        { icon: "🚗", text: "سهولة وصول قوية للطرق الرئيسية." },
        { icon: "🛍️", text: "بالقرب من الخدمات والمطاعم." },
      ],
    },

    cta: {
      title: "مهتم بدايموندز؟",
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

export default diamondzData;
