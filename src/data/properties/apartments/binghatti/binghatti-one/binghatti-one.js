// src/data/properties/apartments/binghatti/binghatti-one.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/one
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/one";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("Premium-Generic-Digital-ONE.pdf");
const FLOORPLANS_PDF = cdn("Floor-Plans.pdf");
const FACTS_PDF = cdn("Project-Facts.pdf");
// ⚠️ Not listed in your folder screenshot, keep null to avoid broken link
const LOCATION_PDF = null;

// Floor plan images (EXACT filenames)
const FP_1BR = cdn("One BY binghatti 1br floor plan.webp");
const FP_2BR = cdn("One by Binghatti 2br floor plan.webp");

// Gallery (EXACT filenames)
const GALLERY = [
  cdn("One by Binghatti-1.jpg"),
  cdn("One by Binghatti-2.jpg"),
  cdn("One by Binghatti-3.jpg"),
  cdn("One by Binghatti-4.jpg"),
  cdn("One by Binghatti-5.jpg"),
  cdn("One by Binghatti-6.jpg"),
  cdn("One by Binghatti-7.jpg"),
  cdn("One by Binghatti-8.jpg"),
  cdn("One by Binghatti-9.jpg"),
  cdn("One by Binghatti-10.jpg"),
  cdn("One by Binghatti-11.jpg"),
  cdn("One by Binghatti-12.jpg"),
  cdn("One by Binghatti-13.jpg"),
  cdn("One by Binghatti-14.jpg"),
];

// Hero / Intro images (real files)
const HERO_BG = cdn("One by Binghatti-13.jpg");
const INTRO_MAIN = cdn("One by Binghatti-1.jpg");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// Unit info you gave
const HANDOVER = "Q4 2026";
const PAYMENT_PLAN = "70% / 30%";

export const binghattiOneData = {
  en: {
    seo: {
      title:
        "One by Binghatti in Business Bay | 1BR & 2BR Apartments | From AED 2,749,999",
      description:
        "One by Binghatti in Business Bay offers modern apartments with strong connectivity and a premium urban lifestyle. 1-bedroom units start from AED 2,749,999 with a 70% / 30% payment plan and expected handover in Q4 2026.",
      keywords:
        "One by Binghatti, Business Bay, Dubai apartments, 1 bedroom, 2 bedroom, Q4 2026, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/binghatti-one",
    },

    project: {
      name: "One by Binghatti",
      developer: "Binghatti",
      location: "Business Bay, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,749,999",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "ONE BY BINGHATTI — ELEVATED LIVING IN BUSINESS BAY",
      paragraphs: [
        "One by Binghatti is positioned in Business Bay, one of Dubai’s most dynamic districts—valued for its proximity to Downtown, major highways, and a wide selection of lifestyle destinations. The project is designed around a modern architectural identity with residences that focus on comfort, style, and everyday convenience.",
        "Business Bay continues to attract end-users and investors thanks to its central address, steady demand, and strong connectivity across Dubai. This makes One by Binghatti a strategic option whether you're buying to live in the city or to generate rental returns.",
        `1-bedroom residences start from AED 2,749,999 and 2-bedroom options start from AED 3,509,999, with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. Download the official brochure, project facts, and floor plans below, along with a full visual gallery.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        ...(LOCATION_PDF
          ? [
              {
                title: "Location Document",
                url: LOCATION_PDF,
                type: "secondary",
              },
            ]
          : []),
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "One by Binghatti visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,749,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "829.14 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Business Bay",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "One by Binghatti Visuals",
      slides: GALLERY,
      projectTag: "One by Binghatti",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "829.14 sq.ft",
            "Starting Price": "AED 2,749,999",
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
            "Total Area": "1587.24 sq.ft",
            "Starting Price": "AED 3,509,999",
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
        { label: "Business Bay Lifestyle", icon: "🏙️", color: "#d7b46a" },
        { label: "Modern Design Identity", icon: "✨", color: "#d7b46a" },
        { label: "Strong Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "One by Binghatti",
      address: "One by Binghatti, Business Bay, Dubai, UAE",
      lat: 25.1836495,
      lng: 55.2639147,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Central Business Bay address with easy access routes.",
        },
        {
          icon: "🛍️",
          text: "Close to dining, retail, and daily lifestyle options.",
        },
        { icon: "🏙️", text: "Strategic district for end-users and investors." },
      ],
    },

    cta: {
      title: "Interested in One by Binghatti?",
      description:
        "Share your details to receive availability, unit options, and the official documents for One by Binghatti.",
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
        "ون باي بن غاطي في بيزنس باي | شقق 1 و2 غرفة | يبدأ من 2,749,999 درهم",
      description:
        "ون باي بن غاطي في بيزنس باي يقدم شققًا عصرية مع اتصال قوي ونمط حياة حضري مميز. تبدأ شقق غرفة واحدة من 2,749,999 درهم مع خطة دفع 70% / 30% وتسليم متوقع في الربع الرابع 2026.",
      keywords:
        "ون باي بن غاطي, بيزنس باي, شقق دبي, غرفة واحدة, غرفتين, Q4 2026, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/binghatti-one",
    },

    project: {
      name: "ون باي بن غاطي",
      developer: "بن غاطي",
      location: "بيزنس باي، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "2,749,999 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "غرفة واحدة وغرفتان",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "ون باي بن غاطي — سكن راقٍ في بيزنس باي",
      paragraphs: [
        "يقع مشروع ون باي بن غاطي في بيزنس باي، وهي واحدة من أكثر مناطق دبي حيوية، وتتميز بقربها من داون تاون وسهولة الوصول عبر الطرق الرئيسية، إضافة إلى توفر خيارات واسعة من الوجهات والخدمات اليومية. يركز المشروع على هوية تصميمية عصرية مع وحدات سكنية عملية ومريحة.",
        "تستمر بيزنس باي في جذب الساكنين والمستثمرين بفضل موقعها المركزي والطلب المستقر وسهولة التنقل داخل دبي، مما يجعل المشروع خيارًا استراتيجيًا للسكن أو الاستثمار.",
        `تبدأ شقق غرفة واحدة من 2,749,999 درهم وتبدأ شقق غرفتين من 3,509,999 درهم، مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. يمكنك تحميل الكتيّب وملف الحقائق ومخططات الطوابق أدناه بالإضافة إلى معرض كامل للصور.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTS_PDF, type: "secondary" },
        ...(LOCATION_PDF
          ? [{ title: "ملف الموقع", url: LOCATION_PDF, type: "secondary" }]
          : []),
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور ون باي بن غاطي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,749,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "829.14 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "بيزنس باي",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "ون باي بن غاطي",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "829.14 قدم مربع",
            "السعر الابتدائي": "2,749,999 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1587.24 قدم مربع",
            "السعر الابتدائي": "3,509,999 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "نمط حياة بيزنس باي", icon: "🏙️", color: "#d7b46a" },
        { label: "هوية تصميم عصرية", icon: "✨", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
        { label: "خدمات قريبة", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "ون باي بن غاطي",
      address: "ون باي بن غاطي، بيزنس باي، دبي، الإمارات",
      lat: 25.1836495,
      lng: 55.2639147,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "موقع مركزي في بيزنس باي مع سهولة الوصول." },
        { icon: "🛍️", text: "بالقرب من المطاعم والمتاجر والخدمات اليومية." },
        { icon: "🏙️", text: "منطقة مناسبة للسكن والاستثمار." },
      ],
    },

    cta: {
      title: "مهتم بون باي بن غاطي؟",
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

export default binghattiOneData;
