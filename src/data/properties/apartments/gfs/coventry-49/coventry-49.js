// src/data/properties/apartments/gfs/coventry-49.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ Off-plan
// ✅ 1BR + 2BR
// ✅ Dubai South
// ✅ PRODUCTION FIXED

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/gfs/coventry-49";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("coventry-49-brochure.pdf");
const FLOORPLANS_PDF = cdn("coventry-49-floorplans.pdf");

const HERO_BG = cdn("1.webp");
const INTRO_MAIN = cdn("4.webp");

const FP_1BR = cdn("Coventry 49 1br floor plan.webp");
const FP_2BR = cdn("Coventry 49 2br floor plan.webp");

// ================= GALLERY =================
const GALLERY = Array.from({ length: 12 }, (_, i) => cdn(`${i + 1}.webp`));

// ================= CONSTANTS =================
const HANDOVER = "Q3 2027";
const PAYMENT_PLAN = "41% / 59%";
const LOCATION_NAME = "Dubai South (Madinat Al Mataar)";
const DEVELOPER = "GFS Developments";

// ======================================================
// DATA
// ======================================================
export const coventry49Data = {
  // ================= EN =================
  en: {
    seo: {
      title: "Coventry 49 by GFS | 1 & 2 Bedroom Apartments in Dubai South",
      description:
        "Coventry 49 by GFS Developments offers modern 1 and 2 bedroom apartments in Dubai South starting from AED 1,048,190 with a 41/59 payment plan and handover in Q3 2027.",
      keywords: "Coventry 49, GFS Developments, Dubai South apartments",
      canonical: "/properties/apartments/gfs/coventry-49",
    },

    project: {
      name: "Coventry 49",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,048,190",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
    },

    intro: {
      title: "COVENTRY 49 — CONTEMPORARY LIVING IN DUBAI SOUTH",
      paragraphs: [
        "Coventry 49 by GFS Developments is a modern residential project in Dubai South.",
        `Apartments start from AED 1,048,190 with ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF },
        { title: "Floor Plans", url: FLOORPLANS_PDF },
      ],
      imgUrl: INTRO_MAIN,
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "733 sq.ft",
            "Starting Price": "AED 1,048,190",
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
            "Total Area": "848 sq.ft",
            "Starting Price": "AED 1,170,240",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "كوفنتري 49",
      developer: "جي إف إس للتطوير العقاري",
      location: "دبي الجنوب (مدينة المطار)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,048,190 درهم",
      completionDate: "الربع الثالث 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة نوم واحدة وغرفتين",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "جي إف إس للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "كوفنتري 49 — أسلوب حياة عصري في دبي الجنوب",
      paragraphs: [
        "كوفنتري 49 من جي إف إس للتطوير العقاري هو مشروع سكني حديث يقع في دبي الجنوب، ويتميز بتصاميم ذكية ومساحات عملية تناسب السكن والاستثمار.",
        `تبدأ أسعار الشقق من 1,048,190 درهم مع خطة سداد ${PAYMENT_PLAN} وموعد تسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF },
        { title: "مخططات الوحدات", url: FLOORPLANS_PDF },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "كوفنتري 49 دبي الجنوب",
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Coventry 49",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "733 قدم²",
            "السعر الابتدائي": "1,048,190 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الثالث 2027",
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "848 قدم²",
            "السعر الابتدائي": "1,170,240 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الثالث 2027",
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "تصميم معماري حديث", icon: "🏢", color: "#d7b46a" },
        { label: "مخططات ذكية", icon: "📐", color: "#d7b46a" },
        { label: "فرصة استثمارية قوية", icon: "📈", color: "#d7b46a" },
        { label: "موقع دبي الجنوب", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كوفنتري 49",
      address: "دبي الجنوب (مدينة المطار)",
      lat: 24.9408083,
      lng: 55.1737651,
      zoom: 16,
      proximityFeatures: [
        { icon: "✈️", text: "بالقرب من مطار آل مكتوم الدولي" },
        { icon: "🚗", text: "سهولة الوصول إلى شارع الإمارات" },
        { icon: "🏙️", text: "ضمن مجتمع دبي الجنوب المتكامل" },
      ],
    },

    cta: {
      title: "مهتم بمشروع كوفنتري 49؟",
      description:
        "سجّل بياناتك الآن للحصول على الأسعار المحدثة والتوافر والمستندات الرسمية من المطور.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default coventry49Data;
