// src/data/properties/apartments/binghatti/skyblade.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/skyblade
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/skyblade";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-skyblade-digital-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-skyblade-floorplan.pdf");
const FACTS_PDF = cdn("binghatti-skyblade-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-skyblade-project-location.pdf");

// Floor plan image (EXACT filename provided)
const FP_1BR = cdn("Binghatti skyblade 1br floor plan .png");
const FP_3BR = cdn("Binghatti Sky blade 3br floor plan.webp");

// Gallery (EXACT filenames - includes all images listed)
const GALLERY = [
  cdn("Skyblade Exterior-1.jpg"),
  cdn("Skyblade Exterior-2.jpg"),
  cdn("Skyblade Exterior-3.jpg"),
  cdn("Skyblade Exterior-4.jpg"),
  cdn("Skyblade Exterior-5.jpg"),
  cdn("Skyblade Exterior-6.jpg"),
  cdn("Skyblade Exterior-7.jpg"),
  cdn("Skyblade Interior-1.jpg"),
  cdn("Skyblade Interior-2.jpg"),
  cdn("Skyblade Interior-3.jpg"),
  cdn("Skyblade Interior-4.jpg"),
  cdn("Skyblade Interior-5.jpg"),
  cdn("Skyblade Interior-6.jpg"),
  cdn("Skyblade Interior-7.jpg"),
  cdn("Skyblade Interior-8.jpg"),
  cdn("Skyblade Interior-9.jpg"),
  cdn("Skyblade Interior-10.jpg"),
];

// Hero / Intro images (real files)
const HERO_BG = cdn("Skyblade Exterior-4.jpg");
const INTRO_MAIN = cdn("Skyblade Interior-1.jpg");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// Unit info you gave
const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "70% / 30%";

export const skybladeData = {
  en: {
    seo: {
      title:
        "Binghatti Skyblade in Downtown Dubai | 1BR & 3BR Apartments | From AED 3,264,999",
      description:
        "Binghatti Skyblade in Downtown Dubai offers modern apartments with strong connectivity and a premium urban lifestyle. 1-bedroom units start from AED 3,264,999 with a 70% / 30% payment plan and expected handover in Q4 2027.",
      keywords:
        "Binghatti Skyblade, Downtown Dubai, Dubai apartments, 1 bedroom, 3 bedroom, Q4 2027, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/skyblade",
    },

    project: {
      name: "Binghatti Skyblade",
      developer: "Binghatti",
      location: "Downtown Dubai, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 3,264,999",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "BINGHATTI SKYBLADE — URBAN LIVING IN DOWNTOWN DUBAI",
      paragraphs: [
        "Binghatti Skyblade is designed for buyers who want modern interiors, strong everyday convenience, and a location that keeps you close to Dubai’s key destinations. The project combines contemporary styling with practical layouts for end-users and investors.",
        "Downtown Dubai remains one of the city’s most recognized lifestyle districts—ideal for those who value proximity to attractions, business hubs, and premium retail and dining options.",
        `Prices start from AED 3,264,999 with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. Access the official brochure, project facts, location document, and floor plans below, along with a full image gallery.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Document", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Skyblade visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3,264,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "765.31 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Downtown Dubai",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Skyblade Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Skyblade",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "765.31 sq.ft",
            "Starting Price": "AED 3,264,999",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "2184.32 sq.ft",
            "Starting Price": "AED 13,389,999",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Downtown Lifestyle", icon: "🏙️", color: "#d7b46a" },
        { label: "Modern Interiors", icon: "✨", color: "#d7b46a" },
        { label: "Strong Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Skyblade",
      address: "Binghatti Skyblade, Downtown Dubai, Dubai, UAE",
      lat: 25.1895452,
      lng: 55.2724951,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Central Downtown address with easy access routes.",
        },
        { icon: "🛍️", text: "Close to premium retail, dining, and services." },
        {
          icon: "🏙️",
          text: "A high-demand district for end-users and investors.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Skyblade?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Skyblade.",
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
        "بن غاطي سكاي بليد في داون تاون دبي | شقق 1 و3 غرف | يبدأ من 3,264,999 درهم",
      description:
        "بن غاطي سكاي بليد في داون تاون دبي يقدم شققًا عصرية مع اتصال قوي ونمط حياة حضري مميز. تبدأ شقق غرفة واحدة من 3,264,999 درهم مع خطة دفع 70% / 30% وتسليم متوقع في الربع الرابع 2027.",
      keywords:
        "بن غاطي سكاي بليد, داون تاون دبي, شقق دبي, غرفة واحدة, ثلاث غرف, Q4 2027, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/skyblade",
    },

    project: {
      name: "بن غاطي سكاي بليد",
      developer: "بن غاطي",
      location: "داون تاون دبي، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "3,264,999 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "غرفة واحدة و3 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي سكاي بليد — أسلوب حياة حضري في داون تاون دبي",
      paragraphs: [
        "يقدم مشروع بن غاطي سكاي بليد تجربة سكنية عصرية لمن يبحث عن تصميم حديث وراحة يومية وموقع قريب من أهم وجهات دبي. يجمع المشروع بين التفاصيل المعاصرة وتخطيطات عملية تناسب السكن والاستثمار.",
        "تُعد داون تاون دبي من أكثر المناطق شهرة في المدينة، وهي خيار مثالي للراغبين في القرب من المعالم الرئيسية ومراكز الأعمال وأفضل خيارات التسوق والمطاعم.",
        `تبدأ الأسعار من 3,264,999 درهم مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. ستجد أدناه الملفات الرسمية ومخططات الطوابق ومعرضًا كاملًا للصور.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTS_PDF, type: "secondary" },
        { title: "ملف الموقع", url: LOCATION_PDF, type: "secondary" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي سكاي بليد",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3,264,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "765.31 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "داون تاون دبي",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي سكاي بليد",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "765.31 قدم مربع",
            "السعر الابتدائي": "3,264,999 درهم",
            "موعد التسليم": "الربع الرابع 2027",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "2184.32 قدم مربع",
            "السعر الابتدائي": "13,389,999 درهم",
            "موعد التسليم": "الربع الرابع 2027",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "نمط حياة داون تاون", icon: "🏙️", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
        { label: "خدمات قريبة", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي سكاي بليد",
      address: "بن غاطي سكاي بليد، داون تاون دبي، دبي، الإمارات",
      lat: 25.1895452,
      lng: 55.2724951,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "موقع مركزي في داون تاون مع سهولة الوصول." },
        { icon: "🛍️", text: "بالقرب من التسوق والمطاعم والخدمات اليومية." },
        { icon: "🏙️", text: "منطقة عالية الطلب للسكن والاستثمار." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي سكاي بليد؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات والوثائق الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default skybladeData;
