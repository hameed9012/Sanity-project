// src/data/properties/apartments/imtiaz/pearl-house-4.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR + 2BR ONLY
// ✅ Bunny CDN filenames EXACT
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/imtiaz/pearl-house-4";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("IMTIAZ_Pearl House 4-Brochure.pdf");
const FACTSHEET_PDF = cdn("IMTIAZ_Pearl House 4-Fact Sheet.pdf");
const PAYMENT_PLAN_PDF = cdn("IMTIAZ_Pearl House 4-Payment plan.pdf");
const FLOORPLANS_PDF = cdn("PEARL HOUSE 4 - FLOOR PLAN.pdf");

// Floor plans
const FP_1BR = cdn("1 BR Pearl House IV Floor Plan.webp");
const FP_2BR = cdn("2 BR Pearl House IV Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("1.jpg"),
  cdn("2.jpg"),
  cdn("3.jpg"),
  cdn("4.jpg"),
  cdn("5.jpg"),
  cdn("6.jpg"),
  cdn("7.jpg"),
  cdn("8.jpg"),
  cdn("9.jpg"),
  cdn("10.jpg"),
  cdn("13.jpg"),
  cdn("15.jpg"),
  cdn("16.jpg"),
  cdn("17.jpg"),
  cdn("18.jpg"),
  cdn("19.jpg"),
  cdn("20.jpg"),
  cdn("01.jpg"),
  cdn("02.jpg"),
  cdn("03.jpg"),
  cdn("04.jpg"),
  cdn("05.jpg"),
  cdn("06.jpg"),
  cdn("07.jpg"),
  cdn("08.jpg"),
  cdn("08A.jpg"),
  cdn("09.jpg"),
  cdn("1 bhk-1.jpg"),
  cdn("1 bhk-2.jpg"),
  cdn("1 bhk-3.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "60% / 40%";
const LOCATION_NAME = "JVC (Jumeirah Village Circle)";
const DEVELOPER = "Imtiaz Developments";

// ======================================================
// DATA
// ======================================================
export const pearlHouse4Data = {
  // ================= EN =================
  en: {
    seo: {
      title: "Pearl House IV by Imtiaz | Apartments for Sale in JVC Dubai",
      description:
        "Pearl House IV by Imtiaz offers 1 & 2 bedroom apartments in JVC. Starting from AED 1.299M with 60/40 payment plan and handover Q4 2027.",
      keywords:
        "Pearl House 4, Imtiaz, JVC apartments, apartments for sale JVC",
      canonical: "/properties/apartments/imtiaz/pearl-house-4",
    },

    project: {
      name: "Pearl House IV",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,299,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "PEARL HOUSE IV — MODERN LIVING IN JVC",
      paragraphs: [
        "Pearl House IV by Imtiaz Developments is a contemporary residential project offering thoughtfully designed 1 and 2-bedroom apartments in Jumeirah Village Circle.",
        "The project combines elegant interiors, efficient layouts, and a strong investment proposition in one of Dubai’s most in-demand communities.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Pearl House IV JVC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "JVC",
          label: "Prime Community",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 1.299M",
          label: "Starting Price",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Pearl House IV",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "826.67 sq.ft",
            "Starting Price": "AED 1,299,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,205.45 sq.ft",
            "Starting Price": "AED 1,750,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌴", color: "#c9a24d" },
        { label: "Covered Parking", icon: "🚗", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Pearl House IV",
      address: LOCATION_NAME,
      lat: 25.0606733,
      lng: 55.20323,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏙️", text: "Located in JVC" },
        { icon: "🚗", text: "Easy access to major roads" },
        { icon: "🛍️", text: "Near retail & lifestyle hubs" },
      ],
    },

    cta: {
      title: "Invest in Pearl House IV",
      description:
        "Request full pricing, availability, and floor plans for Pearl House IV by Imtiaz.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title:
        "بيرل هاوس IV من إمتياز | شقق 1 و2 غرف نوم للبيع في قرية جميرا الدائرية (JVC)",
      description:
        "بيرل هاوس IV من إمتياز للتطوير العقاري يوفر شقق 1 و2 غرف نوم في قرية جميرا الدائرية (JVC). تبدأ الأسعار من 1,299,000 درهم مع خطة سداد 60/40 والتسليم في الربع الرابع 2027.",
      keywords: "بيرل هاوس 4، إمتياز، شقق JVC، شقق للبيع في JVC",
      canonical: "/properties/apartments/imtiaz/pearl-house-4",
    },

    project: {
      name: "بيرل هاوس IV",
      developer: "إمتياز للتطوير العقاري",
      location: "قرية جميرا الدائرية (JVC)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,299,000 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة وغرفتين نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "إمتياز للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "بيرل هاوس IV — أسلوب حياة عصري في قرية جميرا الدائرية",
      paragraphs: [
        "بيرل هاوس IV من إمتياز للتطوير العقاري هو مشروع سكني حديث يوفر شقق 1 و2 غرف نوم بتصاميم مدروسة في قرية جميرا الدائرية (JVC).",
        "يجمع المشروع بين تشطيبات أنيقة وتوزيعات عملية وفرصة استثمارية قوية داخل واحدة من أكثر مجتمعات دبي طلبًا.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "تحميل الفاكت شيت", url: FACTSHEET_PDF, type: "secondary" },
        { title: "خطة السداد", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "بيرل هاوس IV قرية جميرا الدائرية",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "JVC",
          label: "مجتمع مميز",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "1.299M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "الربع الرابع 2027",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Pearl House IV",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br", // ✅ IMPORTANT
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "826.67 قدم²",
            "السعر الابتدائي": "1,299,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_1BR],
        },
        {
          id: "2br", // ✅ IMPORTANT
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,205.45 قدم²",
            "السعر الابتدائي": "1,750,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي مجهز بالكامل", icon: "🏋️", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "مساحات خضراء", icon: "🌴", color: "#c9a24d" },
        { label: "مواقف سيارات مغطاة", icon: "🚗", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بيرل هاوس IV",
      address: "قرية جميرا الدائرية (JVC)",
      lat: 25.0606733,
      lng: 55.20323,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏙️", text: "يقع داخل قرية جميرا الدائرية (JVC)." },
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية." },
        { icon: "🛍️", text: "بالقرب من وجهات التسوق والخدمات." },
      ],
    },

    cta: {
      title: "استثمر في بيرل هاوس IV",
      description:
        "اطلب الأسعار والتوافر ومخططات الوحدات لمشروع بيرل هاوس IV من إمتياز.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default pearlHouse4Data;
