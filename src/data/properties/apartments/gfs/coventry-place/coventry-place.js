// src/data/properties/apartments/gfs/coventry-place.js
// ✅ Folder: /gfs/coventry-place
// ✅ EN + AR
// ✅ Studio + 1BR + 2BR
// ✅ Exact filenames (ignores .DS_Store)
// ✅ Dubai Production City
// ✅ GFS square logo (standard)

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/gfs/coventry-place";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD GFS SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Coventry Place.pdf");
const FLOORPLANS_PDF = cdn("Coventry Place Floorplans.pdf");

const HERO_BG = cdn("4.webp");
const INTRO_MAIN = cdn("9.webp");

const FP_STUDIO = cdn("Conventry Place studio floor plan.webp");
const FP_1BR = cdn("Coventry Place 1br floor plan.webp");
const FP_2BR = cdn("Coventry place 2br flooro plan.webp");

// Gallery 1–10.webp
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
];

const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "80% / 20%";

// ======================================================
// DATA
// ======================================================
export const coventryPlaceData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Coventry Place by GFS | Studio, 1 & 2BR Apartments in Dubai Production City",
      description:
        "Coventry Place by GFS Developments offers studios, 1 and 2-bedroom apartments in Dubai Production City starting from AED 682,710 with an 80/20 payment plan and handover in Q4 2027.",
      keywords:
        "Coventry Place, GFS Developments, Dubai Production City apartments, off plan Dubai",
      canonical: "/properties/apartments/gfs/coventry-place",
    },

    project: {
      name: "Coventry Place",
      developer: "GFS Developments",
      location: "Dubai Production City, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 682,710",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio, 1BR & 2BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "GFS Developments",
      rating: null,
    },

    intro: {
      title: "COVENTRY PLACE — SMART LIVING IN DUBAI PRODUCTION CITY",
      paragraphs: [
        "Coventry Place by GFS Developments is a modern residential project offering practical layouts designed for both end-users and investors.",
        `Apartments start from AED 682,710 with an ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Coventry Place by GFS",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 682,710",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "422 sq.ft",
          label: "Area From",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Production City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Coventry Place",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "422 sq.ft",
            "Starting Price": "AED 682,710",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "717 sq.ft",
            "Starting Price": "AED 1,159,389",
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
            "Total Area": "1,168 sq.ft",
            "Starting Price": "AED 1,716,960",
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
        { label: "Modern Design", icon: "🏢", color: "#d7b46a" },
        { label: "Smart Layouts", icon: "📐", color: "#d7b46a" },
        { label: "Investor Friendly", icon: "📈", color: "#d7b46a" },
        { label: "Prime Community", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Coventry Place",
      address: "Dubai Production City, Dubai, UAE",
      lat: 25.0275695,
      lng: 55.1817037,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Close to JVC and Motor City." },
        { icon: "📈", text: "High rental demand area." },
      ],
    },

    cta: {
      title: "Interested in Coventry Place?",
      description:
        "Get pricing, availability, and official GFS documents directly from our team.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  // ================= AR =================
  // ================= AR =================
  ar: {
    seo: {
      title:
        "كوفنتري بليس من GFS | شقق استوديو وغرفة وغرفتين في مدينة دبي للإنتاج",
      description:
        "يوفر مشروع كوفنتري بليس من GFS شقق استوديو وغرفة وغرفتين نوم في مدينة دبي للإنتاج، بأسعار تبدأ من 682,710 درهم مع خطة سداد 80/20 وتسليم في الربع الرابع 2027.",
      keywords:
        "كوفنتري بليس، GFS، شقق مدينة دبي للإنتاج، عقارات دبي على المخطط",
      canonical: "/properties/apartments/gfs/coventry-place",
    },

    project: {
      name: "كوفنتري بليس",
      developer: "جي إف إس للتطوير العقاري",
      location: "مدينة دبي للإنتاج، دبي، الإمارات",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "682,710 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو، غرفة نوم واحدة، غرفتين نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "جي إف إس للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "كوفنتري بليس — أسلوب حياة ذكي في مدينة دبي للإنتاج",
      paragraphs: [
        "كوفنتري بليس من GFS هو مشروع سكني حديث يقدّم مخططات عملية تناسب السكن والاستثمار.",
        `تبدأ الأسعار من 682,710 درهم مع خطة سداد ${PAYMENT_PLAN} وتسليم في ${HANDOVER}.`,
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
      imgAlt: "كوفنتري بليس من GFS",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "682,710 درهم",
          label: "السعر الابتدائي",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "422 قدم²",
          label: "المساحة من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "مدينة دبي للإنتاج",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض المشروع",
      slides: GALLERY,
      projectTag: "كوفنتري بليس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "422 قدم²",
            "السعر الابتدائي": "682,710 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "717 قدم²",
            "السعر الابتدائي": "1,159,389 درهم",
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
            "إجمالي المساحة": "1,168 قدم²",
            "السعر الابتدائي": "1,716,960 درهم",
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
      title: "المزايا والمرافق",
      amenities: [
        { label: "تصميم عصري", icon: "🏢", color: "#d7b46a" },
        { label: "مخططات ذكية", icon: "📐", color: "#d7b46a" },
        { label: "مناسب للاستثمار", icon: "📈", color: "#d7b46a" },
        { label: "مجتمع مميز", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كوفنتري بليس",
      address: "مدينة دبي للإنتاج، دبي، الإمارات",
      lat: 25.0275695,
      lng: 55.1817037,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى شارع محمد بن زايد." },
        { icon: "🏙️", text: "قريب من JVC ومدينة السيارات." },
        { icon: "📈", text: "منطقة ذات طلب إيجاري مرتفع." },
      ],
    },

    cta: {
      title: "هل أنت مهتم بكوفنتري بليس؟",
      description:
        "احصل على الأسعار والتوافر والوثائق الرسمية من فريقنا مباشرة.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default coventryPlaceData;
