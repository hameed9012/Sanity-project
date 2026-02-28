// src/data/properties/apartments/imtiaz/cove-edition-6.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ STUDIO + 1BR ONLY
// ✅ Bunny CDN filenames EXACT
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/imtiaz/cove-edition-6";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Imtiaz_Cove Edition 6-Brochure.pdf");
const FACTSHEET_PDF = cdn("IMTIAZ_Cove Edition 6-Fact Sheet.pdf");
const PAYMENT_PLAN_PDF = cdn("IMTIAZ_Cove Edition 6-payment plan.pdf");
const FLOORPLANS_PDF = cdn("IMTIAZ-Cove Edition 6_Floor Plan.pdf");

// Floor plans
const FP_STUDIO = cdn("Studio Cove Edition 6 Floor Plan.webp");
const FP_1BR = cdn("1 BR Cove Edition 6 Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("7.jpg"),
  cdn("8.jpg"),
  cdn("9.jpg"),
  cdn("10.jpg"),
  cdn("11.jpg"),

  cdn("Corridor (1).jpg"),
  cdn("Corridor (2).jpg"),
  cdn("Corridor (3).jpg"),
  cdn("Corridor (4).jpg"),
  cdn("Corridor (5).jpg"),
  cdn("Corridor (6).jpg"),
  cdn("Corridor (7).jpg"),

  cdn("Gym (1).jpg"),
  cdn("Gym (2).jpg"),
  cdn("Gym (4).jpg"),
  cdn("Gym (6).jpg"),
  cdn("Gym (7).jpg"),
  cdn("Gym (8).jpg"),
  cdn("Gym (10).jpg"),

  cdn("Imtiaz Developments_Studio_1.jpg"),
  cdn("Imtiaz Developments_Studio_2.jpg"),
  cdn("Imtiaz Developments_Studio_3.jpg"),
  cdn("Imtiaz Developments_Studio_4.jpg"),
  cdn("Imtiaz Developments_Studio_5.jpg"),
  cdn("Imtiaz Developments_Studio_6.jpg"),
  cdn("Imtiaz Developments_Studio_7.jpg"),
  cdn("Imtiaz Developments_Studio_8.jpg"),

  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_1.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_10.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_12.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_13.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_15.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_16.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_17.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_18.jpg"),

  cdn("Imtiaz Developments2_living_room_1.jpg"),
  cdn("Imtiaz Developments2_living_room_2.jpg"),
  cdn("Imtiaz Developments2_living_room_3.jpg"),
  cdn("Imtiaz Developments2_living_room_1horizontal.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "50% / 50%";
const LOCATION_NAME = "Dubailand Residence Complex";
const DEVELOPER = "Imtiaz Developments";

// ======================================================
// DATA
// ======================================================
export const coveEdition6Data = {
  // ================= EN =================
  en: {
    seo: {
      title: "Cove Edition 6 by Imtiaz | Apartments for Sale in Dubailand",
      description:
        "Cove Edition 6 by Imtiaz offers studios and 1-bedroom apartments in Dubailand Residence Complex. Starting from AED 748K with handover Q4 2027.",
      keywords:
        "Cove Edition 6, Imtiaz Developments, Dubailand apartments, off plan Dubai",
      canonical: "/properties/apartments/imtiaz/cove-edition-6",
    },

    project: {
      name: "Cove Edition 6",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 748,250",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio & 1 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "COVE EDITION 6 — MODERN URBAN LIVING",
      paragraphs: [
        "Cove Edition 6 by Imtiaz Developments is a contemporary residential project located in Dubailand Residence Complex.",
        "The project combines modern architecture, efficient layouts, and lifestyle-driven amenities, making it ideal for end users and investors.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Cove Edition 6 Dubailand",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: LOCATION_NAME,
          label: "Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 748K",
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
      projectTag: "Cove Edition 6",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: "Studio",
          specs: {
            "Total Area": "406.33 sq.ft",
            "Starting Price": "AED 748,250",
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
            "Total Area": "817.41 sq.ft",
            "Starting Price": "AED 1,209,537",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Gymnasium", icon: "🏋️", color: "#c9a24d" },
        { label: "Residents Lounge", icon: "🛋️", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "Covered Parking", icon: "🚗", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Cove Edition 6",
      address: LOCATION_NAME,
      lat: 25.0963889,
      lng: 55.3773611,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to major highways" },
        { icon: "🏫", text: "Close to schools and universities" },
        { icon: "🛍️", text: "Near retail and leisure destinations" },
      ],
    },

    cta: {
      title: "Register Your Interest",
      description:
        "Get full availability, pricing, and official floor plans for Cove Edition 6 by Imtiaz.",
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
      title: "كوف إيديشن 6 من إمتياز | شقق للبيع في مجمع دبي لاند السكني",
      description:
        "يوفر مشروع كوف إيديشن 6 من إمتياز شقق استوديو وغرفة نوم واحدة في مجمع دبي لاند السكني. تبدأ الأسعار من 748,250 درهم مع تسليم في الربع الرابع 2027.",
      keywords:
        "كوف إيديشن 6، إمتياز للتطوير العقاري، شقق دبي لاند، عقارات على المخطط دبي",
      canonical: "/properties/apartments/imtiaz/cove-edition-6",
    },

    project: {
      name: "كوف إيديشن 6",
      developer: "إمتياز للتطوير العقاري",
      location: "مجمع دبي لاند السكني",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "748,250 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو وغرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "إمتياز للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "كوف إيديشن 6 — أسلوب حياة عصري في دبي لاند",
      paragraphs: [
        "كوف إيديشن 6 من إمتياز للتطوير العقاري هو مشروع سكني عصري يقع في مجمع دبي لاند السكني.",
        "يجمع المشروع بين التصميم الحديث، المساحات العملية، والمرافق العصرية، مما يجعله خيارًا مثاليًا للسكن والاستثمار.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ورقة المعلومات", url: FACTSHEET_PDF, type: "secondary" },
        { title: "خطة الدفع", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "كوف إيديشن 6 دبي لاند",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: LOCATION_NAME,
          label: "الموقع",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "748 ألف درهم",
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
      projectTag: "كوف إيديشن 6",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "شقة استوديو",
          bedrooms: "استوديو",
          specs: {
            "إجمالي المساحة": "406.33 قدم²",
            "السعر الابتدائي": "748,250 درهم",
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
            "إجمالي المساحة": "817.41 قدم²",
            "السعر الابتدائي": "1,209,537 درهم",
            "خطة الدفع": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "صالة للسكان", icon: "🛋️", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "مساحات خضراء", icon: "🌿", color: "#c9a24d" },
        { label: "مواقف سيارات مغطاة", icon: "🚗", color: "#c9a24d" },
        { label: "أمن على مدار الساعة", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كوف إيديشن 6",
      address: LOCATION_NAME,
      lat: 25.0963889,
      lng: 55.3773611,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية." },
        { icon: "🏫", text: "قريب من المدارس والجامعات." },
        { icon: "🛍️", text: "بالقرب من وجهات التسوق والترفيه." },
      ],
    },

    cta: {
      title: "سجّل اهتمامك الآن",
      description:
        "احصل على التوافر الكامل، الأسعار، والمخططات الرسمية لمشروع كوف إيديشن 6 من إمتياز.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default coveEdition6Data;
