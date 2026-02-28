// src/data/properties/apartments/binghatti/hills.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/hills
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/hills";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-hills-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-hills-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-hills-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-hills-location.pdf");

// Floor plan image (EXACT filename provided)
const FP_2BR = cdn("Binghatti hills 2br floor plan.webp");

// Gallery (EXACT filenames - includes all images listed + zip present but not used in slides)
const GALLERY = [
  cdn("1 Bedroom 1.jpg"),
  cdn("1 Bedroom 2.jpg"),
  cdn("1 Bedroom 3.jpg"),
  cdn("2 Bedroom i1.jpg"),
  cdn("2 Bedroom i2.jpg"),
  cdn("Binghatti Hills E1.jpg"),
  cdn("Binghatti Hills E2.png"),
  cdn("Binghatti Hills E3.png"),
  cdn("Binghatti Hills E4.png"),
  cdn("Binghatti Hills E5.png"),
  cdn("Binghatti Hills E6.png"),
  cdn("Binghatti Hills E7.png"),
  cdn("Binghatti Hills E8.png"),
  cdn("Binghatti Hills E9.png"),
  cdn("Binghatti Hills E10.png"),
  cdn("Binghatti Hills E11.jpg"),
  cdn("Binghatti Hills E12.jpg"),
  cdn("Binghatti Hills E13.jpg"),
  cdn("Binghatti Hills E14.png"),
  cdn("Studio_01.jpg"),
  cdn("Studio_02.jpg"),
  cdn("Studio_03.jpg"),
];

// Hero / Intro images (real files)
const HERO_BG = cdn("Binghatti Hills E11.jpg");
const INTRO_MAIN = cdn("Binghatti Hills E1.jpg");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// Unit info you gave
const HANDOVER = "Q2 2026";
const PAYMENT_PLAN = "70% / 30%";

export const hillsData = {
  en: {
    seo: {
      title:
        "Binghatti Hills in Al Barsha | 2BR Apartments | From AED 2,449,999",
      description:
        "Binghatti Hills in Al Barsha is a modern residential project designed around comfortable layouts and strong everyday connectivity. 2-bedroom apartments start from AED 2,449,999 with a 70% / 30% payment plan and expected handover in Q2 2026.",
      keywords:
        "Binghatti Hills, Al Barsha, Dubai apartments, 2 bedroom, Q2 2026, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/hills",
    },

    project: {
      name: "Binghatti Hills",
      developer: "Binghatti",
      location: "Al Barsha, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,449,999",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "BINGHATTI HILLS — CONNECTED LIVING IN AL BARSHA",
      paragraphs: [
        "Binghatti Hills is positioned in Al Barsha, a well-known Dubai district appreciated for accessibility, daily convenience, and steady residential demand. The development focuses on a lifestyle that feels easy to live—supported by practical layouts and a modern design approach.",
        "Whether you are buying for end-use or investment, Al Barsha remains a strategic choice: close to multiple key destinations while still offering a lived-in neighborhood feel with services, retail, and essential infrastructure nearby.",
        `2-bedroom residences start from AED 2,449,999 with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. You can access the official brochure, project facts, location document, and floor plans below, alongside a complete set of visuals.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Document", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Hills visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,449,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1559.66 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Al Barsha",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Hills Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Hills",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1559.66 sq.ft",
            "Starting Price": "AED 2,449,999",
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
        { label: "Modern Residential Lifestyle", icon: "🏡", color: "#d7b46a" },
        { label: "Strong Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Lifestyle Convenience", icon: "🛍️", color: "#d7b46a" },
        { label: "Contemporary Design", icon: "✨", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Hills",
      address: "Binghatti Hills, Al Barsha, Dubai, UAE",
      lat: 25.0709896,
      lng: 55.2488014,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Well-connected Al Barsha address with practical access.",
        },
        {
          icon: "🛍️",
          text: "Close to everyday retail, services, and lifestyle needs.",
        },
        {
          icon: "🏙️",
          text: "A strategic district for end-users and investors.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Hills?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Hills.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  ar: {
    seo: {
      title: "بن غاطي هيلز في البرشاء | شقق غرفتين | يبدأ من 2,449,999 درهم",
      description:
        "بن غاطي هيلز في البرشاء مشروع سكني عصري يتميز بتخطيطات مريحة واتصال قوي بالوجهات الرئيسية. تبدأ شقق الغرفتين من 2,449,999 درهم مع خطة دفع 70% / 30% وتسليم متوقع في الربع الثاني 2026.",
      keywords:
        "بن غاطي هيلز, البرشاء, شقق دبي, غرفتين, Q2 2026, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/hills",
    },

    project: {
      name: "بن غاطي هيلز",
      developer: "بن غاطي",
      location: "البرشاء، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "2,449,999 درهم",
      completionDate: "الربع الثاني 2026",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "غرفتان نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي هيلز — موقع عملي في البرشاء",
      paragraphs: [
        "يقع مشروع بن غاطي هيلز في البرشاء، وهي منطقة معروفة بسهولة التنقل وتوفر الخدمات اليومية وطلب سكني مستقر. يركز المشروع على أسلوب حياة عملي مع تصميم عصري وتخطيطات مريحة.",
        "تُعد البرشاء خيارًا استراتيجيًا للسكن أو الاستثمار لقربها من عدة وجهات رئيسية، إضافة إلى وجود بنية تحتية وخدمات ومتاجر تجعل الحياة اليومية أسهل وأكثر راحة.",
        `تبدأ شقق الغرفتين من 2,449,999 درهم مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. ستجد أدناه الملفات الرسمية ومخططات الطوابق ومعرضًا كاملًا للصور.`,
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
      imgAlt: "صور بن غاطي هيلز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,449,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1559.66 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "البرشاء",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي هيلز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1559.66 قدم مربع",
            "السعر الابتدائي": "2,449,999 درهم",
            "موعد التسليم": "الربع الثاني 2026",
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
        { label: "حياة سكنية عصرية", icon: "🏡", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "خدمات قريبة", icon: "🛍️", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي هيلز",
      address: "بن غاطي هيلز، البرشاء، دبي، الإمارات",
      lat: 25.0709896,
      lng: 55.2488014,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "موقع عملي في البرشاء مع سهولة الوصول." },
        { icon: "🛍️", text: "بالقرب من المتاجر والخدمات والاحتياجات اليومية." },
        { icon: "🏙️", text: "منطقة مناسبة للسكن والاستثمار." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي هيلز؟",
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

export default hillsData;
