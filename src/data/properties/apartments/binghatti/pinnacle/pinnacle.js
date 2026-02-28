// src/data/properties/apartments/binghatti/pinnacle.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/pinnacle
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/pinnacle";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs
// ⚠️ You did NOT list PDFs for Pinnacle in the folder.
// Keep them null to avoid broken links. Add later if uploaded.
const BROCHURE_PDF = null;
const FLOORPLANS_PDF = null;
const FACTS_PDF = null;
const LOCATION_PDF = null;

// Floor plan images (EXACT filenames)
const FP_2BR = cdn("Binghatti Pinnacle 2br floor plan.webp");
const FP_3BR = cdn("Binghatti Pinnacle 3br floor plan.webp");

// Gallery (EXACT filenames)
const GALLERY = [
  cdn("2Bedroom-Livingroom-Pinecal-04_Post.jpg"),
  cdn("2Bedroom-Livingroom-Pinecal-05_Post.jpg"),
  cdn("Binghatti Pinnacle C2.jpg"),
  cdn("Binghatti Pinnacle C4.jpg"),
  cdn("Binghatti Pinnacle C5.jpg"),
  cdn("Binghatti Pinnacle C6.jpg"),
  cdn("Binghatti Pinnacle C7.jpg"),
  cdn("View_01 R1.png"),
];

// Hero / Intro images (real files)
const HERO_BG = cdn("Binghatti Pinnacle C6.jpg");
const INTRO_MAIN = cdn("Binghatti Pinnacle C2.jpg");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// Unit info you gave
const HANDOVER = "Q2 2026";
const PAYMENT_PLAN = "60% / 40%";

export const pinnacleData = {
  en: {
    seo: {
      title:
        "Binghatti Pinnacle in Al Jaddaf | 2BR & 3BR Apartments | From AED 2,199,599",
      description:
        "Binghatti Pinnacle in Al Jaddaf offers modern apartments with spacious layouts and strong connectivity. 2-bedroom units start from AED 2,199,599 with a 60% / 40% payment plan and expected handover in Q2 2026.",
      keywords:
        "Binghatti Pinnacle, Al Jaddaf, Dubai apartments, 2 bedroom, 3 bedroom, Q2 2026, 60/40 payment plan",
      canonical: "/properties/apartments/binghatti/pinnacle",
    },

    project: {
      name: "Binghatti Pinnacle",
      developer: "Binghatti",
      location: "Al Jaddaf, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,199,599",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "BINGHATTI PINNACLE — MODERN LIVING IN AL JADDAF",
      paragraphs: [
        "Binghatti Pinnacle is located in Al Jaddaf, a well-connected Dubai district known for central access and growing residential demand. The development focuses on practical layouts, modern styling, and daily lifestyle convenience.",
        "Al Jaddaf’s location offers efficient access to key areas across Dubai, making it a strong option for end-users and an appealing choice for investors seeking a strategic address.",
        `2-bedroom apartments start from AED 2,199,599 with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. Explore the gallery and floor plan visuals below.`,
      ],
      brochures: [
        ...(BROCHURE_PDF
          ? [{ title: "Download Brochure", url: BROCHURE_PDF, type: "main" }]
          : []),
        ...(FACTS_PDF
          ? [{ title: "Project Facts", url: FACTS_PDF, type: "secondary" }]
          : []),
        ...(LOCATION_PDF
          ? [
              {
                title: "Location Document",
                url: LOCATION_PDF,
                type: "secondary",
              },
            ]
          : []),
        ...(FLOORPLANS_PDF
          ? [
              {
                title: "Floor Plans (PDF)",
                url: FLOORPLANS_PDF,
                type: "secondary",
              },
            ]
          : []),
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Pinnacle visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,199,599",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1078.44 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Al Jaddaf",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Pinnacle Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Pinnacle",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1078.44 sq.ft",
            "Starting Price": "AED 2,199,599",
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
            "Total Area": "1523.31 sq.ft",
            "Starting Price": "AED 3,120,799",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF, // stays null until you upload a PDF
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Modern Residential Lifestyle", icon: "🏡", color: "#d7b46a" },
        { label: "Central Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Spacious Layouts", icon: "📐", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Pinnacle",
      address: "Binghatti Pinnacle, Al Jaddaf, Dubai, UAE",
      lat: 25.2121178,
      lng: 55.3144749,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Al Jaddaf address with quick access across Dubai.",
        },
        {
          icon: "🛍️",
          text: "Near daily services, retail, and lifestyle needs.",
        },
        {
          icon: "🏙️",
          text: "A strategic district for end-users and investors.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Pinnacle?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Pinnacle.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  ar: {
    seo: {
      title: "بن غاطي بيناكل في الجداف | شقق 2 و3 غرف | يبدأ من 2,199,599 درهم",
      description:
        "بن غاطي بيناكل في الجداف مشروع سكني عصري بتخطيطات واسعة واتصال قوي. تبدأ شقق غرفتين من 2,199,599 درهم مع خطة دفع 60% / 40% وتسليم متوقع في الربع الثاني 2026.",
      keywords:
        "بن غاطي بيناكل, الجداف, شقق دبي, غرفتين, ثلاث غرف, Q2 2026, خطة دفع 60/40",
      canonical: "/properties/apartments/binghatti/pinnacle",
    },

    project: {
      name: "بن غاطي بيناكل",
      developer: "بن غاطي",
      location: "الجداف، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "2,199,599 درهم",
      completionDate: "الربع الثاني 2026",
      paymentPlan: "60% / 40%",
      type: "شقق سكنية",
      units: "غرفتان و3 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي بيناكل — سكن عصري في الجداف",
      paragraphs: [
        "يقع مشروع بن غاطي بيناكل في الجداف، وهي منطقة تتميز بسهولة الوصول والاتصال بمناطق دبي الرئيسية مع نمو ملحوظ في الطلب السكني. يركز المشروع على تصميم عصري وتخطيطات عملية تناسب السكن والاستثمار.",
        "يُعد موقع الجداف خيارًا مناسبًا للراغبين في التنقل السريع داخل دبي، كما يُعتبر جذابًا للمستثمرين الباحثين عن عنوان استراتيجي وفرص طلب إيجاري مستقر.",
        `تبدأ شقق غرفتين من 2,199,599 درهم مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. استعرض معرض الصور ومخططات الطوابق أدناه.`,
      ],
      brochures: [
        ...(BROCHURE_PDF
          ? [{ title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" }]
          : []),
        ...(FACTS_PDF
          ? [{ title: "ملف الحقائق", url: FACTS_PDF, type: "secondary" }]
          : []),
        ...(LOCATION_PDF
          ? [{ title: "ملف الموقع", url: LOCATION_PDF, type: "secondary" }]
          : []),
        ...(FLOORPLANS_PDF
          ? [
              {
                title: "مخططات الطوابق (PDF)",
                url: FLOORPLANS_PDF,
                type: "secondary",
              },
            ]
          : []),
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي بيناكل",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,199,599 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1078.44 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "الجداف",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي بيناكل",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1078.44 قدم مربع",
            "السعر الابتدائي": "2,199,599 درهم",
            "موعد التسليم": "الربع الثاني 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1523.31 قدم مربع",
            "السعر الابتدائي": "3,120,799 درهم",
            "موعد التسليم": "الربع الثاني 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF, // stays null until you upload a PDF
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "حياة سكنية عصرية", icon: "🏡", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "تخطيطات واسعة", icon: "📐", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
        { label: "خدمات قريبة", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي بيناكل",
      address: "بن غاطي بيناكل، الجداف، دبي، الإمارات",
      lat: 25.2121178,
      lng: 55.3144749,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "موقع عملي في الجداف مع سهولة الوصول داخل دبي." },
        { icon: "🛍️", text: "بالقرب من المتاجر والخدمات والاحتياجات اليومية." },
        { icon: "🏙️", text: "منطقة مناسبة للسكن والاستثمار." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي بيناكل؟",
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

export default pinnacleData;
