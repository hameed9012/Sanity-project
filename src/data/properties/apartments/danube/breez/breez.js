// src/data/properties/apartments/danube/breez.js
// ✅ Folder: /danube/breez
// ✅ Exact filenames you listed
// ✅ Spreadsheet-driven floorplan specs

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/danube/breez";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png";

const BROCHURE_PDF = cdn("Breez_brochure_EN (1).pdf");
const FLOORPLANS_PDF = cdn("Breez_Floor_Plan.pdf");
const AMENITIES_IMAGE = cdn("BREEZ - Amenities.jpg");

const HERO_BG = cdn("Exterior Night View.jpg");
const INTRO_MAIN = cdn("Exterior 01.jpg");

// Floor plan images (EXACT)
const FP_STUDIO = cdn("Breez studio floor plan.webp");
const FP_1BR = cdn("Breezz 1br floor plan .png");
const FP_2BR = cdn("Breezz 2br floor plan .png");

const GALLERY = [
  cdn("Exterior Night View.jpg"),
  cdn("Master Exterior.jpg"),
  cdn("Exterior 01.jpg"),
  cdn("Lobby 01.jpg"),
  cdn("Pool.jpg"),
  cdn("Gym.jpg"),
  cdn("Spa.jpg"),
  cdn("Kids Splash Pool.jpg"),
  cdn("View Deck.jpg"),
];

const HANDOVER = "Q1 2029";
const PAYMENT_PLAN = "70% / 30%";

export const breezData = {
  en: {
    seo: {
      title:
        "Breez by Danube | Studio, 1 & 2BR in Maritime City | From AED 1,308,000 | Q1 2029",
      description:
        "Breez by Danube in Maritime City offers Studio, 1 & 2-bedroom residences starting from AED 1,308,000 with a 70/30 payment plan and handover in Q1 2029.",
      keywords:
        "Breez by Danube, Maritime City, Studio, 1BR, 2BR, 70/30, Q1 2029",
      canonical: "/properties/apartments/danube/breez",
    },

    project: {
      name: "Breez",
      developer: "Danube",
      location: "Maritime City, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,308,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio, 1BR, 2BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Danube Properties",
      rating: null,
    },

    intro: {
      title: "BREEZ — COASTAL LIFESTYLE IN MARITIME CITY",
      paragraphs: [
        "Breez by Danube brings a modern residential experience to Maritime City with lifestyle amenities and strong connectivity.",
        `Starting from AED 1,308,000 with a ${PAYMENT_PLAN} payment plan and expected handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Amenities", url: AMENITIES_IMAGE, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Breez visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,308,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "368.02 sq.ft",
          label: "Total Area (Studio)",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Maritime City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Breez Visuals",
      slides: GALLERY,
      projectTag: "Breez",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "368.02 sq.ft",
            "Starting Price": "AED 1,308,000",
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
            "Total Area": "667.36 sq.ft",
            "Starting Price": "AED 2,150,000",
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
            "Total Area": "1025.8 sq.ft",
            "Starting Price": "AED 3,804,000",
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
        { label: "Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Spa", icon: "🧖", color: "#d7b46a" },
        { label: "Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Kids Area", icon: "🧸", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Breez",
      address: "Breez by Danube, Maritime City, Dubai, UAE",
      lat: 25.268681,
      lng: 55.270191,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌊", text: "Coastal lifestyle in Maritime City." },
        { icon: "🚗", text: "Strong connectivity across Dubai." },
        { icon: "🛍️", text: "Close to daily essentials and lifestyle venues." },
      ],
    },

    cta: {
      title: "Interested in Breez?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Breez.",
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
        "بريز من دانوب | استوديو و1 و2 غرفة | مارايتيم سيتي | يبدأ من 1,308,000 درهم | Q1 2029",
      description:
        "بريز من دانوب في مارايتيم سيتي يوفر استوديو و1 و2 غرفة نوم. يبدأ من 1,308,000 درهم مع خطة دفع 70/30 وتسليم Q1 2029.",
      keywords:
        "بريز دانوب, مارايتيم سيتي, استوديو, 1 غرفة, 2 غرفة, 70/30, Q1 2029",
      canonical: "/properties/apartments/danube/breez",
    },

    project: {
      name: "بريز",
      developer: "دانوب",
      location: "مارايتيم سيتي، دبي",
      status: "على المخطط",
      startingPrice: "1,308,000 درهم",
      completionDate: "الربع الأول 2029",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو، 1BR، 2BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "دانوب العقارية",
      rating: null,
    },

    intro: {
      title: "بريز — أسلوب حياة ساحلي في مارايتيم سيتي",
      paragraphs: [
        `يبدأ السعر من 1,308,000 درهم مع خطة دفع ${PAYMENT_PLAN} وتسليم متوقع في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
        { title: "المرافق", url: AMENITIES_IMAGE, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بريز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,308,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "368.02 قدم²",
          label: "المساحة (استوديو)",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "مارايتيم سيتي",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بريز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "368.02 قدم مربع",
            "السعر الابتدائي": "1,308,000 درهم",
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
            "إجمالي المساحة": "667.36 قدم مربع",
            "السعر الابتدائي": "2,150,000 درهم",
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
            "إجمالي المساحة": "1025.8 قدم مربع",
            "السعر الابتدائي": "3,804,000 درهم",
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
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "سبا", icon: "🧖", color: "#d7b46a" },
        { label: "سينما", icon: "🎬", color: "#d7b46a" },
        { label: "منطقة أطفال", icon: "🧸", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بريز",
      address: "بريز من دانوب، مارايتيم سيتي، دبي",
      lat: 25.268681,
      lng: 55.270191,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌊", text: "أسلوب حياة قريب من البحر." },
        { icon: "🚗", text: "سهولة تنقل قوية داخل دبي." },
        { icon: "🛍️", text: "قريب من الخدمات والاحتياجات اليومية." },
      ],
    },

    cta: {
      title: "مهتم ببريز؟",
      description:
        "أرسل بياناتك للحصول على التوافر وخيارات الوحدات والملفات الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default breezData;
