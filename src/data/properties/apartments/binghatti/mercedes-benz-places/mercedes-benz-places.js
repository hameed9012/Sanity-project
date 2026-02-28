// src/data/properties/apartments/binghatti/mercedes-benz-places-binghatti.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/mercedes-benz-places-binghatti
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/mercedes-benz-places-binghatti";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("Mercedes-Benz Places by Binghatti.pdf");
const FLOORPLANS_PDF = cdn("Mercedes-Benz-Places-Binghatti-Floor-Plans.pdf");
const FACTS_PDF = cdn("Mercedes-Benz Places Binghatti Project Facts.pdf");
const LOCATION_PDF = cdn("Mercedes-Benz Places Binghatti Map.pdf");

// Floor plan images (EXACT filenames)
const FP_2BR = cdn("Mercedes benz places 2br floor plan .png");
const FP_3BR = cdn("Mercedes benz places 3br floor plan .png");
const FP_4BR = cdn("Mercedes benz places 4br floor plan .png");

// Gallery (EXACT filenames) — include all .webp images listed (skipping .DS_Store)
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("12.webp"),
  cdn("13.webp"),
  cdn("14.webp"),
  cdn("15.webp"),
  cdn("16.webp"),
  cdn("17.webp"),
  cdn("18.webp"),
];

// Hero / Intro images (real files)
const HERO_BG = cdn("13.webp");
const INTRO_MAIN = cdn("12.webp");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// Unit info you gave
const HANDOVER = "Q4 2026";
const PAYMENT_PLAN = "70% / 30%";

export const mercedesBenzPlacesBinghattiData = {
  en: {
    seo: {
      title:
        "Mercedes-Benz Places by Binghatti in Downtown | 2BR to 4BR | From AED 11,299,999",
      description:
        "Mercedes-Benz Places by Binghatti is a premium branded residence in Downtown Dubai. 2-bedroom units start from AED 11,299,999 with a 70% / 30% payment plan and expected handover in Q4 2026. Explore visuals, project facts, map, and floor plans.",
      keywords:
        "Mercedes-Benz Places by Binghatti, Downtown Dubai, branded residences, 2 bedroom, 3 bedroom, 4 bedroom, Q4 2026, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/mercedes-benz-places",
    },

    project: {
      name: "Mercedes-Benz Places by Binghatti",
      developer: "Binghatti",
      location: "Downtown Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 11,299,999",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "2, 3 & 4 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title:
        "MERCEDES-BENZ PLACES BY BINGHATTI — ICONIC BRANDED LIVING IN DOWNTOWN",
      paragraphs: [
        "Mercedes-Benz Places by Binghatti delivers a distinctive branded-residence concept in one of Dubai’s most prestigious urban addresses. The project is designed to reflect a strong identity, premium detailing, and a lifestyle experience aligned with luxury living standards.",
        "Located in the Downtown area, the development benefits from strong connectivity, landmark proximity, and high-end demand—making it compelling for both end-users and investors seeking a standout property proposition.",
        `2-bedroom residences start from AED 11,299,999, with 3-bedroom options from AED 19,999,999 and 4-bedroom units from AED 30,000,000. Expected handover is ${HANDOVER} with a ${PAYMENT_PLAN} payment plan. Download the brochure, project facts, map, and floor plans below, and explore the full gallery.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location / Map", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Mercedes-Benz Places by Binghatti visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 11,299,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1835.88 sq.ft",
          label: "2BR Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Downtown",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Mercedes-Benz Places by Binghatti Visuals",
      slides: GALLERY,
      projectTag: "Mercedes-Benz Places by Binghatti",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1835.88 sq.ft",
            "Starting Price": "AED 11,299,999",
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
            "Total Area": "2709.05 sq.ft",
            "Starting Price": "AED 19,999,999",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "3603.43 sq.ft",
            "Starting Price": "AED 30,000,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_4BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Branded Residence Concept", icon: "⭐", color: "#d7b46a" },
        { label: "Premium Luxury Living", icon: "✨", color: "#d7b46a" },
        { label: "Downtown Address", icon: "🏙️", color: "#d7b46a" },
        { label: "High-End Investor Appeal", icon: "📈", color: "#d7b46a" },
        { label: "Iconic Design Identity", icon: "🏛️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Mercedes-Benz Places by Binghatti",
      address: "Mercedes-Benz Places by Binghatti, Downtown Dubai, UAE",
      lat: 25.188485,
      lng: 55.2799832,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Prime Downtown connectivity to key Dubai destinations.",
        },
        {
          icon: "🏙️",
          text: "Close to landmarks and premium lifestyle attractions.",
        },
        { icon: "⭐", text: "A standout branded-living address in the city." },
      ],
    },

    cta: {
      title: "Interested in Mercedes-Benz Places by Binghatti?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Mercedes-Benz Places by Binghatti.",
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
        "ميرسيدس-بنز بليسز من بن غاطي في داون تاون | من 2 إلى 4 غرف | يبدأ من 11,299,999 درهم",
      description:
        "ميرسيدس-بنز بليسز من بن غاطي مشروع سكني فاخر بعلامة تجارية في داون تاون دبي. تبدأ وحدات غرفتين من 11,299,999 درهم مع خطة دفع 70% / 30% وتسليم متوقع في الربع الرابع 2026. استعرض الصور وحمّل الملفات الرسمية والمخططات.",
      keywords:
        "ميرسيدس-بنز بليسز بن غاطي, داون تاون دبي, شقق فاخرة بعلامة تجارية, غرفتين, 3 غرف, 4 غرف, Q4 2026, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/mercedes-benz-places",
    },

    project: {
      name: "ميرسيدس-بنز بليسز من بن غاطي",
      developer: "بن غاطي",
      location: "داون تاون دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "11,299,999 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "غرفتان، 3 غرف، 4 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "ميرسيدس-بنز بليسز من بن غاطي — سكن بعلامة تجارية في داون تاون",
      paragraphs: [
        "يقدم مشروع ميرسيدس-بنز بليسز من بن غاطي مفهوم السكن الفاخر بعلامة تجارية، مع هوية تصميم قوية وتفاصيل راقية وتجربة نمط حياة تتماشى مع أعلى معايير الفخامة.",
        "يستفيد المشروع من موقعه في داون تاون دبي، حيث الاتصال القوي وقرب المعالم والطلب المرتفع على العقارات الفاخرة، مما يجعله خيارًا جذابًا للسكن أو الاستثمار.",
        `تبدأ وحدات غرفتين من 11,299,999 درهم، وتبدأ وحدات 3 غرف من 19,999,999 درهم، وتبدأ وحدات 4 غرف من 30,000,000 درهم. التسليم المتوقع في ${HANDOVER} مع خطة دفع ${PAYMENT_PLAN}. حمّل الكتيّب وملف الحقائق وملف الموقع ومخططات الطوابق أدناه واستعرض معرض الصور.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTS_PDF, type: "secondary" },
        { title: "ملف الموقع / الخريطة", url: LOCATION_PDF, type: "secondary" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور ميرسيدس-بنز بليسز من بن غاطي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "11,299,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1835.88 قدم²",
          label: "مساحة 2 غرف",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "داون تاون",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "ميرسيدس-بنز بليسز من بن غاطي",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1835.88 قدم مربع",
            "السعر الابتدائي": "11,299,999 درهم",
            "موعد التسليم": "الربع الرابع 2026",
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
            "إجمالي المساحة": "2709.05 قدم مربع",
            "السعر الابتدائي": "19,999,999 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 غرف",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "3603.43 قدم مربع",
            "السعر الابتدائي": "30,000,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_4BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "سكن فاخر بعلامة تجارية", icon: "⭐", color: "#d7b46a" },
        { label: "فخامة وتشطيبات راقية", icon: "✨", color: "#d7b46a" },
        { label: "موقع داون تاون", icon: "🏙️", color: "#d7b46a" },
        { label: "فرصة استثمارية قوية", icon: "📈", color: "#d7b46a" },
        { label: "هوية تصميم مميزة", icon: "🏛️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "ميرسيدس-بنز بليسز من بن غاطي",
      address: "ميرسيدس-بنز بليسز من بن غاطي، داون تاون دبي، الإمارات",
      lat: 25.188485,
      lng: 55.2799832,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "اتصال قوي من داون تاون إلى أهم وجهات دبي." },
        { icon: "🏙️", text: "قريب من المعالم والوجهات الفاخرة." },
        { icon: "⭐", text: "عنوان مميز للسكن بعلامة تجارية." },
      ],
    },

    cta: {
      title: "مهتم بميرسيدس-بنز بليسز من بن غاطي؟",
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

export default mercedesBenzPlacesBinghattiData;
