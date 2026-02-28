// src/data/properties/apartments/evolutions/the-elysian.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR (1:1 parity)
// ✅ Studio / 1BR / 2BR / 3BR
// ✅ Exact Bunny filenames
// ✅ Evolutions (MFOUR)
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/evolutions/the-elysian";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL = "/evolutions.jpg";

// ================= FILES =================
const BROCHURE_PDF = cdn("ENGLISH_The Elysian Brochure.pdf");
const FACTSHEET_PDF = cdn("The Elysian Factsheet.pdf");
const PAYMENT_PLAN_PDF = cdn("The Elysian Payment Plan.pdf");
const CGIS_PDF = cdn("The Elysian - Stills CGIs.pdf");
const LAUNCH_VIDEO = cdn("The Elysian Launch Film.mp4");

// Floor plans
const FP_STUDIO = cdn("Studio The Elysian Floor Plan.webp");
const FP_1BR = cdn("1 BR The Elysian Floor Plan.webp");
const FP_2BR = cdn("2 BR The Elysian Floor Plan.webp");
const FP_3BR = cdn("3 BR The Elysian Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("mth_evo_JGC_View 01_a03.jpg"),
  cdn("mth_evo_JGC_View 02a_a03.jpg"),
  cdn("mth_evo_JGC_View 02b_a03.jpg"),
  cdn("mth_evo_JGC_View 03_a04.jpg"),
  cdn("mth_evo_JGC_View 04_a02.jpg"),
  cdn("mth_evo_JGC_View 05_a03.jpg"),
  cdn("mth_evo_JGC_View 06_a02.jpg"),
  cdn("mth_evo_JGC_View 07_a02.jpg"),
  cdn("mth_evo_JGC_View 08_b02.jpg"),
  cdn("mth_evo_JGC_View 09_a04.jpg"),
  cdn("mth_evo_JGC_View 11_a03.jpg"),
  cdn("mth_evo_JGC_View 12_b02.jpg"),
  cdn("mth_evo_JGC_View 13_a03.jpg"),
  cdn("mth_evo_JGC_View 15_a03.jpg"),
  cdn("mth_evo_JGC_View 15_b03.jpg"),
  cdn("mth_evo_JGC_View 16_a03.jpg"),
  cdn("mth_evo_JGC_View 17_a03.jpg"),
  cdn("mth_evo_JGC_View 18_a03.jpg"),
  cdn("mth_evo_JGC_View 19_a03.jpg"),
  cdn("mth_evo_JGC_View 20_a03.jpg"),
  cdn("mth_evo_JGC_View 21_a03.jpg"),
  cdn("mth_evo_JGC_View 22_a03.jpg"),
  cdn("mth_evo_JGC_View 23_a02.jpg"),
  cdn("mth_evo_JGC_View 24_a01.jpg"),
  cdn("mth_evo_JGC_View 25_a03.jpg"),
  cdn("mth_evo_JGC_View 26_a02.jpg"),
  cdn("mth_evo_JGC_View 27_a03.jpg"),
  cdn("mth_evo_JGC_View 27_b03.jpg"),
  cdn("mth_evo_JGC_View 28_a03.jpg"),
  cdn("mth_evo_JGC_View 29_a01.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "50% / 50%";
const LOCATION_NAME = "Dubai";
const DEVELOPER = "MFOUR";

// ======================================================
// DATA
// ======================================================
export const theElysianData = {
  // ================= EN =================
  en: {
    seo: {
      title: "The Elysian by MFOUR | Luxury Apartments in Dubai",
      description:
        "The Elysian by MFOUR offers studios, 1, 2 & 3 bedroom luxury apartments in Dubai with modern architecture, premium finishes and a 50/50 payment plan.",
      keywords: "The Elysian Dubai, MFOUR apartments, luxury apartments Dubai",
      canonical: "/properties/apartments/evolutions/the-elysian",
    },

    project: {
      name: "The Elysian",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 951,777",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio, 1, 2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
      videoUrl: LAUNCH_VIDEO,
    },

    intro: {
      title: "THE ELYSIAN — ELEVATED LIVING IN DUBAI",
      paragraphs: [
        "The Elysian is a premium residential development by MFOUR, designed to deliver refined living through contemporary architecture and elegant interiors.",
        "With multiple unit types, premium amenities, and a balanced payment plan, The Elysian is ideal for both end users and long-term investors.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "The Elysian Dubai",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "Dubai",
          label: "Prime Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 951K",
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
      projectTag: "The Elysian",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "362.75 sq.ft",
            "Starting Price": "AED 951,777",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "709.13 sq.ft",
            "Starting Price": "AED 1,561,777",
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
            "Total Area": "771.45 sq.ft",
            "Starting Price": "AED 1,764,777",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "3,145.67 sq.ft",
            "Starting Price": "AED 5,994,777",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: CGIS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Reception & Lobby", icon: "🏛️", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "Kids Areas", icon: "🧸", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "The Elysian",
      address: LOCATION_NAME,
      lat: 25.227215,
      lng: 55.281404,
      zoom: 12,
      proximityFeatures: [
        { icon: "🏙️", text: "Central Dubai Location" },
        { icon: "🚗", text: "Easy highway connectivity" },
        { icon: "🛍️", text: "Retail & lifestyle nearby" },
      ],
    },

    cta: {
      title: "Invest in The Elysian",
      description:
        "Get full pricing, availability, and official documents directly from the developer.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    seo: {
      title: "ذا إليسيان من إم فور | شقق فاخرة في دبي",
      description:
        "ذا إليسيان من إم فور يوفر شقق استوديو وغرفة وغرفتين وثلاث غرف نوم في دبي مع تصميم عصري وخطة دفع 50/50.",
      keywords: "ذا إليسيان دبي، شقق إم فور، شقق فاخرة دبي",
      canonical: "/properties/apartments/evolutions/the-elysian",
    },

    project: {
      name: "ذا إليسيان",
      developer: "إم فور",
      location: "دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "951,777 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "استوديو، غرفة، غرفتين، ثلاث غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "MFOUR",
      rating: null,
    },

    intro: {
      title: "ذا إليسيان — أسلوب حياة راقٍ في دبي",
      paragraphs: [
        "ذا إليسيان هو مشروع سكني فاخر من إم فور يقدم تصاميم عصرية ومساحات معيشة أنيقة.",
        "يوفر المشروع وحدات متنوعة مع مرافق متكاملة وخطة سداد متوازنة.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف المعلومات", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "ذا إليسيان دبي",
      floatingCards: [],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "ذا إليسيان",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "362.75 قدم²",
            "السعر الابتدائي": "951,777 درهم",
            "خطة السداد": "50% / 50%",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_STUDIO],
        },
        {
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "709.13 قدم²",
            "السعر الابتدائي": "1,561,777 درهم",
            "خطة السداد": "50% / 50%",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "771.45 قدم²",
            "السعر الابتدائي": "1,764,777 درهم",
            "خطة السداد": "50% / 50%",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_2BR],
        },
        {
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "3,145.67 قدم²",
            "السعر الابتدائي": "5,994,777 درهم",
            "خطة السداد": "50% / 50%",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: CGIS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "ردهة استقبال", icon: "🏛️", color: "#c9a24d" },
        { label: "مساحات خضراء", icon: "🌿", color: "#c9a24d" },
        { label: "مناطق أطفال", icon: "🧸", color: "#c9a24d" },
        { label: "أمن على مدار الساعة", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "ذا إليسيان",
      address: "دبي",
      lat: 25.227215,
      lng: 55.281404,
      zoom: 12,
      proximityFeatures: [
        { icon: "🏙️", text: "موقع مركزي في دبي" },
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية" },
        { icon: "🛍️", text: "قريب من وجهات التسوق والترفيه" },
      ],
    },

    cta: {
      title: "استثمر في ذا إليسيان",
      description:
        "احصل على الأسعار والتوافر والمستندات الرسمية مباشرة من المطور.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default theElysianData;
