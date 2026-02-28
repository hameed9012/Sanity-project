// src/data/properties/apartments/damac/golf-gate-two/golf-gate-two.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /damac/golf-gate-two
// ✅ Encodes spaces + parentheses safely
// ✅ EN + AR
// ✅ Hero background = your uploaded mp4
// ✅ Includes: Brochure PDF + Payment Plan image
// ✅ Gallery = only JPG/WEBP assets in the folder (skips .DS_Store / pdf / mp4)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/golf-gate-two";

// Encode filename safely (includes parentheses too)
const safeEncode = (fileName) =>
  encodeURIComponent(fileName).replace(/\(/g, "%28").replace(/\)/g, "%29");

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${safeEncode(fileName)}`;
const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames موجودة في نفس الفولدر)
// ========================
const HERO_VIDEO = cdn("GOLF GATE LAUNCH V2 16X9 EN.mp4"); // best 16:9 hero
const ALT_VIDEO = cdn("GOLF GATE 2 LAUNCH (EN).mp4");

const BROCHURE_PDF = cdn("GOLF GATE 2 - Brochure (EN).pdf");
const PAYMENT_PLAN_IMAGE = cdn("GOLF GATE 2 - PAYMENT PLAN.jpg");

const FP_2BR_IMAGE = cdn("Gold Gate 2 2br floor pla.webp");

// ========================
// Gallery (ONLY files موجودة فعلاً in /damac/golf-gate-two)
// ========================
const GALLERY = [
  // Exterior / key visuals
  cdn("Golf Vita - Mid Aerial - Day View.jpg"),
  cdn("Golf Vita - Mid Aerial -Night View.jpg"),
  cdn("Golf VIta Day View.jpg"),
  cdn("Golf VIta View 2.jpg"),
  cdn("Golf Vita - WaterFall 3.jpg"),
  cdn("Golf VIta - Balcony View - DAY.jpg"),
  cdn("Golf VIta - Balcony View.jpg"),
  cdn("GV Pool Day View_20211010-002 copy 2.jpg"),
  cdn("Golf Vita Pool Night 03_20211012 copy.jpg"),

  // Interior (note: TWO filenames include a space before ".jpg" — kept EXACT)
  cdn("220204_Golf Vita Apartment_2BHK_Living Cam-01 .jpg"),
  cdn("220204_Golf Vita Apartment_2BHK_Living Cam-02.jpg"),
  cdn("220204_Golf Vita Apartment_2BHK_Master Bathroom.jpg"),
  cdn("220204_Golf Vita Apartment_2BHK_Master Bedroom.jpg"),

  cdn("220204_Golf Vita Apartment_Living Cam-01 .jpg"),
  cdn("220204_Golf Vita Apartment_Living Cam-02.jpg"),
  cdn("220204_Golf Vita Apartment_Master Bathroom.jpg"),
  cdn("220204_Golf Vita Apartment_Master Bedroom.jpg"),
];

// ========================
// Location (from your pin)
// ========================
const MAPS_URL =
  "https://www.google.com/maps/place/GOLF+GATE-2/@25.0216794,55.2407919,17z/data=!4m10!1m2!2m1!1sdamac+golf+gate+2!3m6!1s0x3e5f710017fb7b85:0xc074a592b3e72038!8m2!3d25.0214825!4d55.243489!15sChFkYW1hYyBnb2xmIGdhdGUgMpIBEmFwYXJ0bWVudF9idWlsZGluZ-ABAA!16s%2Fg%2F11xt__84lz?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D";

// pin coords:
const LAT = 25.0214825;
const LNG = 55.243489;

// ========================
// Data
// ========================
export const golfGateTwoData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Golf Gate 2 by DAMAC | 2BR Apartment in DAMAC Hills | 70/30 | Q1 2027",
      description:
        "Golf Gate 2 by DAMAC in DAMAC Hills. 2BR from AED 1,986,000 with a 70/30 payment plan and handover in Q1 2027. Explore gallery, brochure, payment plan, floor plan, and exact location.",
      keywords:
        "Golf Gate 2, DAMAC Hills, DAMAC apartments, 2BR DAMAC Hills, 70/30 payment plan, Q1 2027",
      canonical: "/properties/apartments/damac/golf-gate-two",
    },

    project: {
      name: "Golf Gate 2",
      developer: "DAMAC Properties",
      location: "DAMAC Hills, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,986,000",
      completionDate: "Q1 2027",
      paymentPlan: "70% / 30%",
      type: "Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "GOLF GATE 2 — A MODERN ADDRESS IN DAMAC HILLS",
      paragraphs: [
        "Golf Gate 2 is a residential apartment option within DAMAC Hills, designed for buyers who want community living with lifestyle convenience and a clear purchase structure.",
        "This listing focuses on the 2-bedroom configuration with a 70/30 payment plan and expected handover in Q1 2027.",
        "All assets below are wired directly from your Bunny folder (no missing references): brochure PDF, payment plan image, 2BR floor plan, gallery images, and launch video.",
      ],
      brochures: [
        {
          title: "Download Brochure (EN)",
          url: BROCHURE_PDF,
          type: "main",
          category: "Brochure",
          fileName: "GOLF GATE 2 - Brochure (EN).pdf",
          description: "Official brochure PDF.",
        },
        {
          title: "View Payment Plan",
          url: PAYMENT_PLAN_IMAGE,
          type: "secondary",
          category: "Payment Plan",
          fileName: "GOLF GATE 2 - PAYMENT PLAN.jpg",
          description: "Official payment plan image.",
        },
      ],
      imgUrl: cdn("Golf Vita - Mid Aerial - Day View.jpg"),
      imgAlt: "Golf Gate 2 exterior visual",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,986,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1047.97 sq.ft",
          label: "2BR Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q1 2027",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Golf Gate 2 Visuals",
      slides: GALLERY,
      projectTag: "Golf Gate 2",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1047.97 sq.ft",
            "Starting Price": "AED 1,986,000",
            Handover: "Q1 2027",
            "Payment Plan": "70% / 30%",
          },
          images: [FP_2BR_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "DAMAC Hills Community", icon: "🏡", color: "#d7b46a" },
        { label: "Lifestyle & Leisure", icon: "🌿", color: "#d7b46a" },
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Easy Access", icon: "🚗", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Golf Gate 2",
      address: "DAMAC Hills, Dubai, UAE",
      lat: LAT,
      lng: LNG,
      zoom: 15,
      googleMapsUrl: MAPS_URL,
      proximityFeatures: [
        { icon: "📍", text: "Located in DAMAC Hills community." },
        { icon: "⛳", text: "Close to golf lifestyle destinations." },
        { icon: "🚗", text: "Convenient access to key Dubai routes." },
      ],
    },

    media: {
      videos: [
        { title: "Launch Video (16x9 EN)", url: HERO_VIDEO },
        { title: "Launch Video (EN)", url: ALT_VIDEO },
      ],
    },

    cta: {
      title: "Interested in Golf Gate 2?",
      description:
        "Share your details to receive updated availability, unit options, and official documents for Golf Gate 2.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title: "جولف غيت 2 من داماك | شقة 2 غرف في داماك هيلز | 70/30 | Q1 2027",
      description:
        "جولف غيت 2 من داماك في داماك هيلز. شقة غرفتين ابتداءً من 1,986,000 درهم مع خطة دفع 70/30 وتسليم Q1 2027. شاهد المعرض، البروشور، خطة الدفع، مخطط 2 غرف، والموقع بدقة.",
      keywords:
        "جولف غيت 2, داماك هيلز, شقق داماك, شقة غرفتين, خطة دفع 70/30, Q1 2027",
      canonical: "/properties/apartments/damac/golf-gate-two",
    },

    project: {
      name: "جولف غيت 2",
      developer: "داماك العقارية",
      location: "داماك هيلز، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,986,000 درهم",
      completionDate: "Q1 2027",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "غرفتان نوم",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "جولف غيت 2 — عنوان سكني حديث داخل داماك هيلز",
      paragraphs: [
        "جولف غيت 2 خيار شقق سكنية داخل داماك هيلز لمن يبحث عن سكن عملي ضمن مجتمع متكامل ونمط حياة مميز.",
        "هذه الصفحة تركز على خيار غرفتين نوم مع خطة دفع 70/30 وتسليم متوقع في الربع الأول 2027.",
        "كل الملفات هنا مربوطة مباشرة من فولدر Bunny الخاص بك (بدون ملفات ناقصة): البروشور، صورة خطة الدفع، مخطط 2 غرف، معرض الصور، وفيديو الإطلاق.",
      ],
      brochures: [
        {
          title: "تحميل البروشور (EN)",
          url: BROCHURE_PDF,
          type: "main",
          category: "Brochure",
          fileName: "GOLF GATE 2 - Brochure (EN).pdf",
          description: "البروشور الرسمي PDF.",
        },
        {
          title: "عرض خطة الدفع",
          url: PAYMENT_PLAN_IMAGE,
          type: "secondary",
          category: "Payment Plan",
          fileName: "GOLF GATE 2 - PAYMENT PLAN.jpg",
          description: "صورة خطة الدفع الرسمية.",
        },
      ],
      imgUrl: cdn("Golf Vita - Mid Aerial - Day View.jpg"),
      imgAlt: "جولف غيت 2",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,986,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1047.97 قدم²",
          label: "مساحة 2 غرف",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q1 2027",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "جولف غيت 2",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1047.97 قدم مربع",
            "السعر الابتدائي": "1,986,000 درهم",
            "موعد التسليم": "Q1 2027",
            "خطة الدفع": "70% / 30%",
          },
          images: [FP_2BR_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مجتمع داماك هيلز", icon: "🏡", color: "#d7b46a" },
        { label: "نمط حياة وترفيه", icon: "🌿", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "لياقة وصحة", icon: "💪", color: "#d7b46a" },
        { label: "سهولة الوصول", icon: "🚗", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "جولف غيت 2",
      address: "داماك هيلز، دبي، الإمارات",
      lat: LAT,
      lng: LNG,
      zoom: 15,
      googleMapsUrl: MAPS_URL,
      proximityFeatures: [
        { icon: "📍", text: "داخل مجتمع داماك هيلز." },
        { icon: "⛳", text: "قريب من وجهات نمط حياة الجولف." },
        { icon: "🚗", text: "سهولة الوصول لمحاور دبي الرئيسية." },
      ],
    },

    media: {
      videos: [
        { title: "فيديو الإطلاق (16x9 EN)", url: HERO_VIDEO },
        { title: "فيديو الإطلاق (EN)", url: ALT_VIDEO },
      ],
    },

    cta: {
      title: "مهتم بمشروع جولف غيت 2؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وخيارات الوحدات وروابط الملفات الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل البروشور", action: "download-brochure" },
      ],
    },
  },
};

export default golfGateTwoData;
