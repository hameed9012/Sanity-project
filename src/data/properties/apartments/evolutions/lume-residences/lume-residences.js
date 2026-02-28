// src/data/properties/apartments/evolutions/lume-residences.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ Studio / 1BR / 2BR
// ✅ JVC (Jumeirah Village Circle)
// ✅ Exact Bunny filenames only
// ✅ Evolutions / S&S Developments

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/evolutions/lume-residences";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL = "/evolutions.jpg";

// ================= FILES =================
const BROCHURE_PDF = cdn("ENGLISH_LUME Residences Brochure.pdf");
const FACTSHEET_PDF = cdn("ENGLISH_LUME Residences Factsheet.pdf");
const FLOORPLANS_PDF = cdn("LUME Residences Floor Plans.pdf");
const LAUNCH_VIDEO = cdn("LUME Residences Launch Film.mp4");

// Floor plans
const FP_STUDIO = cdn("Studio Lume Residences Floor Plan.webp");
const FP_1BR = cdn("1 BR Lume Residences Floor Plan.webp");
const FP_2BR = cdn("2 BR Lume Residences Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("mth_JVC_Lume_View 01_a02.jpg"),
  cdn("mth_JVC_Lume_View 02_a03.jpg"),
  cdn("mth_JVC_Lume_View 03_a02.jpg"),
  cdn("mth_JVC_Lume_View 04_a02.jpg"),
  cdn("mth_JVC_Lume_View 05_a02.jpg"),
  cdn("mth_JVC_Lume_View 06_a02.jpg"),
  cdn("mth_JVC_Lume_View 07_a03.jpg"),
  cdn("mth_JVC_Lume_View 08_a02.jpg"),
  cdn("mth_JVC_Lume_View 09_a02.jpg"),
  cdn("mth_JVC_Lume_View 10_a02.jpg"),
  cdn("mth_JVC_Lume_View 11_a01.jpg"),
  cdn("mth_JVC_Lume_View 12_a01.jpg"),
  cdn("mth_JVC_Lume_View 13_a01.jpg"),
  cdn("mth_JVC_Lume_View 14_a01.jpg"),
  cdn("mth_JVC_Lume_View 15_a01.jpg"),
  cdn("mth_JVC_Lume_View 16_a01.jpg"),
  cdn("mth_JVC_Lume_View 16_b01.jpg"),
  cdn("mth_JVC_Lume_View 17_a02.jpg"),
  cdn("mth_JVC_Lume_View 18_a02.jpg"),
  cdn("mth_JVC_Lume_View 19_a02.jpg"),
  cdn("mth_JVC_Lume_View 20_a02.jpg"),
  cdn("mth_JVC_Lume_View 21_a01.jpg"),
  cdn("mth_JVC_Lume_View 22_a01.jpg"),
  cdn("mth_JVC_Lume_View 23_a02.jpg"),
  cdn("mth_JVC_Lume_View 24_a01.jpg"),
  cdn("mth_JVC_Lume_View 25_a01.jpg"),
  cdn("mth_JVC_Lume_View 26_a01.jpg"),
  cdn("mth_JVC_Lume_View 27_a01.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2027";
const PAYMENT_PLAN = "60% / 40%";
const LOCATION_NAME = "Jumeirah Village Circle (JVC)";
const DEVELOPER = "S&S Developments";

// ======================================================
// DATA
// ======================================================
export const lumeResidencesData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Lume Residences at JVC | Apartments by S&S Developments",
      description:
        "Lume Residences by S&S Developments offers studios, 1 and 2 bedroom apartments in JVC. Starting from AED 707,777 with 60/40 payment plan and handover in Q2 2027.",
      keywords:
        "Lume Residences JVC, apartments in JVC, S&S Developments Dubai",
      canonical: "/properties/apartments/evolutions/lume-residences",
    },

    project: {
      name: "Lume Residences",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 707,777",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "S&S Developments",
      rating: null,
      videoUrl: LAUNCH_VIDEO,
    },

    intro: {
      title: "LUME RESIDENCES — CONTEMPORARY LIVING IN JVC",
      paragraphs: [
        "Lume Residences is a modern residential project by S&S Developments located in the heart of Jumeirah Village Circle, offering stylish apartments with functional layouts.",
        "The development combines affordability, smart design, and a flexible payment plan, making it ideal for investors and end users alike.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Lume Residences JVC",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "📍",
          value: "JVC",
          label: "Prime Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 707K",
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
      projectTag: "Lume Residences",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "335.08 sq.ft",
            "Starting Price": "AED 707,777",
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
            "Total Area": "563.39 sq.ft",
            "Starting Price": "AED 951,777",
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
            "Total Area": "1,118.37 sq.ft",
            "Starting Price": "AED 1,586,777",
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
        { label: "Outdoor Seating Areas", icon: "🌴", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Landscaped Gardens", icon: "🌿", color: "#c9a24d" },
        { label: "Retail Nearby", icon: "🛍️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Lume Residences",
      address: LOCATION_NAME,
      lat: 25.0543559,
      lng: 55.1988717,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏫", text: "Close to schools and nurseries" },
        { icon: "🛍️", text: "Near Circle Mall JVC" },
        { icon: "🚗", text: "Easy access to Al Khail Road" },
        { icon: "🏙️", text: "15 minutes to Dubai Marina" },
      ],
    },

    cta: {
      title: "Own a Home at Lume Residences",
      description:
        "Contact us for full pricing, availability, and official S&S documents.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ================= AR =================
  ar: {
    seo: {
      title: "لوم ريزيدنس في قرية جميرا الدائرية | شقق من S&S للتطوير",
      description:
        "يوفر مشروع لوم ريزيدنس من S&S للتطوير العقاري شقق استوديو وغرفة وغرفتين نوم في قرية جميرا الدائرية. تبدأ الأسعار من 707,777 درهم مع خطة سداد 60/40 وتسليم في الربع الثاني 2027.",
      keywords:
        "لوم ريزيدنس، شقق قرية جميرا الدائرية، إس آند إس للتطوير العقاري دبي",
      canonical: "/properties/apartments/evolutions/lume-residences",
    },

    project: {
      name: "لوم ريزيدنس",
      developer: "S&S للتطوير العقاري",
      location: "قرية جميرا الدائرية (JVC)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "707,777 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو، غرفة نوم واحدة، غرفتين نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "S&S للتطوير العقاري",
      rating: null,
      videoUrl: LAUNCH_VIDEO,
    },

    intro: {
      title: "لوم ريزيدنس — أسلوب حياة عصري في قرية جميرا الدائرية",
      paragraphs: [
        "لوم ريزيدنس هو مشروع سكني حديث من تطوير S&S يقع في قلب قرية جميرا الدائرية، ويوفر شققًا أنيقة بتصاميم عملية تناسب السكن والاستثمار.",
        "يجمع المشروع بين السعر المناسب، والتصميم الذكي، وخطة سداد مرنة، مما يجعله خيارًا مثاليًا للمستثمرين والمستخدمين النهائيين.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ورقة المعلومات", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "لوم ريزيدنس قرية جميرا الدائرية",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "📍",
          value: "JVC",
          label: "موقع مميز",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "707 ألف درهم",
          label: "السعر الابتدائي",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض المشروع",
      slides: GALLERY,
      projectTag: "لوم ريزيدنس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "شقة استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "335.08 قدم²",
            "السعر الابتدائي": "707,777 درهم",
            "خطة الدفع": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "563.39 قدم²",
            "السعر الابتدائي": "951,777 درهم",
            "خطة الدفع": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,118.37 قدم²",
            "السعر الابتدائي": "1,586,777 درهم",
            "خطة الدفع": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
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
        { label: "مناطق جلوس خارجية", icon: "🌴", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "حدائق منسّقة", icon: "🌿", color: "#c9a24d" },
        { label: "محلات قريبة", icon: "🛍️", color: "#c9a24d" },
        { label: "أمن على مدار الساعة", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "لوم ريزيدنس",
      address: LOCATION_NAME,
      lat: 25.0543559,
      lng: 55.1988717,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏫", text: "بالقرب من المدارس ورياض الأطفال" },
        { icon: "🛍️", text: "قريب من سيركل مول – JVC" },
        { icon: "🚗", text: "سهولة الوصول إلى شارع الخيل" },
        { icon: "🏙️", text: "15 دقيقة إلى دبي مارينا" },
      ],
    },

    cta: {
      title: "امتلك شقة في لوم ريزيدنس",
      description:
        "تواصل معنا للحصول على الأسعار الكاملة والتوافر والوثائق الرسمية من S&S.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default lumeResidencesData;
