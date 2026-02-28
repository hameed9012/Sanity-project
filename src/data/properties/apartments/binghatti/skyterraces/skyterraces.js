// src/data/properties/apartments/binghatti/skyterraces.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/skyterraces
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location (Motor City) — coordinates set for Dubai Motor City area

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/skyterraces";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT filenames)
const FLOORPLANS_PDF = cdn("skyterraces-floorplans.pdf");

// Not provided in your folder (keep null to avoid broken links)
const BROCHURE_PDF = null;
const FACTS_PDF = null;
const LOCATION_PDF = null;

// Floor plan images (EXACT filenames)
const FP_STUDIO = cdn("Binghatti Sky terraces studio floor plan.webp");
const FP_1BR = cdn("Binghatti sky terraces 1br floor plan.webp");
const FP_2BR = cdn("Binghatti Sky terraces 2br floor plan.webp");
const FP_3BR = cdn("Binghatti Sky terraces 3br floor plan.webp");

// Gallery (EXACT filenames)
const GALLERY = [cdn("1.webp"), cdn("2.webp")];

// Hero / Intro images (real files)
const HERO_BG = cdn("1.webp");
const INTRO_MAIN = cdn("2.webp");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// Unit info you gave
const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "70% / 30%";

export const skyterracesData = {
  en: {
    seo: {
      title:
        "Binghatti Sky Terraces in Dubai Motor City | Studio to 3BR | From AED 778,999",
      description:
        "Binghatti Sky Terraces in Dubai Motor City offers studios to 3-bedroom apartments with a 70% / 30% payment plan and expected handover in Q4 2027. Prices start from AED 778,999. Explore the gallery and floor plans.",
      keywords:
        "Binghatti Sky Terraces, Dubai Motor City, apartments, studio, 1 bedroom, 2 bedroom, 3 bedroom, Q4 2027, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/skyterraces",
    },

    project: {
      name: "Binghatti Sky Terraces",
      developer: "Binghatti",
      location: "Dubai Motor City, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 778,999",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio, 1, 2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "BINGHATTI SKY TERRACES — MODERN LIVING IN DUBAI MOTOR CITY",
      paragraphs: [
        "Binghatti Sky Terraces is located in Dubai Motor City, a well-known community valued for practical connectivity, a lived-in neighborhood atmosphere, and an active lifestyle setting.",
        "The project offers a range of layouts from studios to 3-bedroom apartments, designed for comfortable daily living and long-term value—whether for end-use or investment.",
        `Studios start from AED 778,999, with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. Browse the full gallery and download the floor plans PDF below.`,
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
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Sky Terraces visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 778,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "311.4 sq.ft",
          label: "Studio Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Motor City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Sky Terraces Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Sky Terraces",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "311.4 sq.ft",
            "Starting Price": "AED 778,999",
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
            "Total Area": "524.85 sq.ft",
            "Starting Price": "AED 1,199,999",
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
            "Total Area": "1055.08 sq.ft",
            "Starting Price": "AED 1,889,999",
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
            "Total Area": "2521.02 sq.ft",
            "Starting Price": "AED 2,944,999",
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
        { label: "Motor City Community", icon: "🏙️", color: "#d7b46a" },
        { label: "Modern Architecture", icon: "✨", color: "#d7b46a" },
        { label: "Practical Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Lifestyle Convenience", icon: "🛍️", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Sky Terraces",
      address: "Dubai Motor City, Dubai, UAE",
      // Motor City area coordinates (use your exact pin coords if you want it pixel-perfect)
      lat: 25.0469,
      lng: 55.2356,
      zoom: 15,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Easy access across Dubai via key road connections.",
        },
        {
          icon: "🏙️",
          text: "Located within Dubai Motor City community setting.",
        },
        {
          icon: "🛍️",
          text: "Close to daily services and lifestyle essentials.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Sky Terraces?",
      description:
        "Share your details to receive availability, unit options, and the floor plans for Binghatti Sky Terraces.",
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
        "بن غاطي سكاي تيراسز في موتور سيتي دبي | من استوديو إلى 3 غرف | يبدأ من 778,999 درهم",
      description:
        "بن غاطي سكاي تيراسز في موتور سيتي دبي يوفر شققًا من استوديو إلى 3 غرف مع خطة دفع 70% / 30% وتسليم متوقع في الربع الرابع 2027. يبدأ السعر من 778,999 درهم. استعرض الصور وحمّل مخططات الطوابق.",
      keywords:
        "بن غاطي سكاي تيراسز, موتور سيتي, دبي, شقق, استوديو, غرفة, غرفتين, 3 غرف, Q4 2027, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/skyterraces",
    },

    project: {
      name: "بن غاطي سكاي تيراسز",
      developer: "بن غاطي",
      location: "موتور سيتي، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "778,999 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "استوديو، غرفة، غرفتان، 3 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي سكاي تيراسز — سكن عصري في موتور سيتي",
      paragraphs: [
        "يقع مشروع بن غاطي سكاي تيراسز في موتور سيتي دبي، وهي منطقة معروفة بسهولة التنقل وأجوائها السكنية العملية ونمط حياتها النشط.",
        "يوفر المشروع تخطيطات متعددة من الاستوديو إلى شقق 3 غرف، مع تركيز على الراحة اليومية والقيمة طويلة المدى سواء للسكن أو الاستثمار.",
        `يبدأ سعر الاستوديو من 778,999 درهم مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. استعرض معرض الصور وحمّل ملف مخططات الطوابق أدناه.`,
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
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي سكاي تيراسز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "778,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "311.4 قدم²",
          label: "مساحة الاستوديو",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "موتور سيتي",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي سكاي تيراسز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "311.4 قدم مربع",
            "السعر الابتدائي": "778,999 درهم",
            "موعد التسليم": "الربع الرابع 2027",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "غرفة واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "524.85 قدم مربع",
            "السعر الابتدائي": "1,199,999 درهم",
            "موعد التسليم": "الربع الرابع 2027",
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
            "إجمالي المساحة": "1055.08 قدم مربع",
            "السعر الابتدائي": "1,889,999 درهم",
            "موعد التسليم": "الربع الرابع 2027",
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
            "إجمالي المساحة": "2521.02 قدم مربع",
            "السعر الابتدائي": "2,944,999 درهم",
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
        { label: "مجتمع موتور سيتي", icon: "🏙️", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "خدمات قريبة", icon: "🛍️", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي سكاي تيراسز",
      address: "موتور سيتي، دبي، الإمارات",
      lat: 25.0469,
      lng: 55.2356,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول عبر الطرق الرئيسية داخل دبي." },
        { icon: "🏙️", text: "ضمن منطقة موتور سيتي في دبي." },
        { icon: "🛍️", text: "بالقرب من الخدمات والاحتياجات اليومية." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي سكاي تيراسز؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات ومخططات الطوابق للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default skyterracesData;
