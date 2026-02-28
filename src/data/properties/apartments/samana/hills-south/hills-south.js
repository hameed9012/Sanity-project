// src/data/properties/apartments/samana/hills-south.js
// ✅ Folder: /samana/hills-south
// ✅ EN + AR
// ✅ 1BR only
// ✅ Exact Bunny filenames used
// ✅ Industrial City (Dubai South / Industrial City)
// ✅ Samana standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/hills-south";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD SAMANA SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("SAMANA HILLS SOUTH.pdf");
const FACTSHEET_PDF = cdn("Samana Hills Factsheet.pdf");
const FLOORPLANS_PDF = cdn("SAMANA SOUTH HILLS FLOOR PLAN.pdf");
const PAYMENT_PLAN_PDF = cdn("SAMANA HILLS SOUTH PAYMENT PLAN.pdf");

const PAYMENT_PLAN = "50% / 50%";
const HANDOVER = "Q4 2028";

// Media
const HERO_BG = cdn("Launch Video.mp4");
const INTRO_MAIN = cdn("DIC SAMANA_C01_8K.jpeg");

// Floor plan
const FP_1BR = cdn("Samana Hill south 1br floor plan.webp");

// ================= GALLERY (VERIFIED FILES ONLY) =================
const GALLERY = [
  cdn("DIC SAMANA_C01_8K.jpeg"),
  cdn("DIC SAMANA_C03_8K.jpeg"),
  cdn("DIC SAMANA_C04_8K.jpeg"),
  cdn("DIC SAMANA_C05_8K.jpeg"),
  cdn("DIC SAMANA_C06_8K.jpeg"),
  cdn("DIC SAMANA_C07_8K.jpeg"),
  cdn("DIC SAMANA_C08_8K.jpeg"),
  cdn("DIC SAMANA_C09 Cinema_8K.jpeg"),
  cdn("DIC SAMANA_C10_8K.jpeg"),
  cdn("DIC SAMANA_C11_8K.jpeg"),
  cdn("DIC SAMANA_C12_8K.jpeg"),
  cdn("DIC SAMANA_C13_8K.jpeg"),
  cdn("DIC SAMANA_C14_8K.jpeg"),
  cdn("DIC SAMANA_C15_8K.jpeg"),
  cdn("DIC SAMANA_C16_Aerial_8K.jpeg"),
  cdn("DIC SAMANA_C17 Topview_8K.jpeg"),
  cdn("DIC SAMANA_C18_8K.jpeg"),
  cdn("Reception_view_01.png"),
  cdn("Reception_view_02.png"),
  cdn("Spa.tif"),
  cdn("cigarroom-01-02.tif"),
];

// ======================================================
// DATA
// ======================================================
export const samanaHillsSouthData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Samana Hills South | 1 Bedroom Apartments in Industrial City, Dubai",
      description:
        "Samana Hills South offers modern 1-bedroom apartments in Industrial City, Dubai. Starting from AED 1,155,664 with a 50/50 payment plan and handover in Q4 2028.",
      keywords:
        "Samana Hills South, Industrial City apartments, Dubai South, Samana Developers",
      canonical: "/properties/apartments/samana/hills-south",
    },

    project: {
      name: "Samana Hills South",
      developer: "Samana Developers",
      location: "Industrial City, Dubai South, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,155,664",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
      videoUrl: HERO_BG,
    },

    intro: {
      title: "SAMANA HILLS SOUTH — CONTEMPORARY LIVING IN DUBAI SOUTH",
      paragraphs: [
        "Samana Hills South is a modern residential development designed for urban comfort, located in Industrial City within Dubai South.",
        `1-bedroom apartments start from AED 1,155,664 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Samana Hills South Dubai",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1.15M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "659 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Dubai South",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Hills South",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "659 sq.ft",
            "Starting Price": "AED 1,155,664",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Cinema Room", icon: "🎬", color: "#c9a24d" },
        { label: "Gym & Wellness", icon: "🏋️", color: "#c9a24d" },
        { label: "Spa & Relaxation Areas", icon: "🧖", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Hills South",
      address: "Industrial City, Dubai South, UAE",
      lat: 24.875247,
      lng: 55.050572,
      zoom: 11,
      proximityFeatures: [
        { icon: "✈️", text: "Close to Al Maktoum International Airport." },
        { icon: "🛣️", text: "Easy access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Located within Dubai South master community." },
      ],
    },

    cta: {
      title: "Invest in Samana Hills South",
      description:
        "Request availability, pricing, and official Samana documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Payment Plan", action: "download-payment-plan" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title: "سمانا هيلز الجنوب | شقق غرفة نوم واحدة في المدينة الصناعية، دبي",
      description:
        "سمانا هيلز الجنوب يوفر شقق غرفة نوم واحدة عصرية في المدينة الصناعية ضمن دبي الجنوب. تبدأ الأسعار من 1,155,664 درهم مع خطة سداد 50/50 والتسليم في الربع الرابع 2028.",
      keywords:
        "سمانا هيلز الجنوب، شقق المدينة الصناعية، دبي الجنوب، سمانا للتطوير العقاري",
      canonical: "/properties/apartments/samana/hills-south",
    },

    project: {
      name: "سمانا هيلز الجنوب",
      developer: "سمانا للتطوير العقاري",
      location: "المدينة الصناعية، دبي الجنوب، الإمارات",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,155,664 درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سمانا للتطوير العقاري",
      rating: null,
      videoUrl: HERO_BG, // ✅ parity with EN
    },

    intro: {
      title: "سمانا هيلز الجنوب — أسلوب حياة عصري في دبي الجنوب",
      paragraphs: [
        "سمانا هيلز الجنوب هو مشروع سكني عصري مصمم لراحة الحياة الحضرية، ويقع في المدينة الصناعية ضمن دبي الجنوب.",
        `تبدأ أسعار شقق غرفة نوم واحدة من 1,155,664 درهم مع خطة سداد ${PAYMENT_PLAN} والتسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "فاكت شيت", url: FACTSHEET_PDF, type: "secondary" },
        { title: "مخططات الوحدات", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "خطة السداد", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "سمانا هيلز الجنوب دبي الجنوب",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1.15M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "659 قدم²",
          label: "المساحة الإجمالية",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "دبي الجنوب",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Samana Hills South",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br", // ✅ IMPORTANT
          title: "غرفة نوم واحدة",
          bedrooms: 1, // ✅ parity with EN
          specs: {
            "إجمالي المساحة": "659 قدم²",
            "السعر الابتدائي": "1,155,664 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": PAYMENT_PLAN, // ✅ keep same key style as others
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
        { label: "غرفة سينما", icon: "🎬", color: "#c9a24d" },
        { label: "نادي رياضي وعافية", icon: "🏋️", color: "#c9a24d" },
        { label: "سبا ومناطق استرخاء", icon: "🧖", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سمانا هيلز الجنوب",
      address: "المدينة الصناعية، دبي الجنوب، الإمارات",
      lat: 24.875247,
      lng: 55.050572,
      zoom: 11,
      proximityFeatures: [
        { icon: "✈️", text: "قريب من مطار آل مكتوم الدولي." },
        { icon: "🛣️", text: "سهولة الوصول إلى شارع محمد بن زايد." },
        { icon: "🏙️", text: "ضمن مجتمع دبي الجنوب الرئيسي." },
      ],
    },

    cta: {
      title: "استثمر في سمانا هيلز الجنوب",
      description: "اطلب التوافر والأسعار والملفات الرسمية من سمانا اليوم.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "خطة السداد", action: "download-payment-plan" },
      ],
    },
  },
};

export default samanaHillsSouthData;
