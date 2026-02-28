// src/data/properties/apartments/binghatti/moonlight.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/moonlight
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/moonlight";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-moonlight-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-moonlight-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-moonlight-facts.pdf");
const LOCATION_PDF = cdn("binghatti-moonlight-location.pdf");

// Floor plan images (EXACT filenames)
const FP_1BR = cdn("Binghatti Moonlight 1br floor plan.webp");
const FP_2BR = cdn("Binghatti Moonlight 2br floor plan.webp");

// Gallery (EXACT filenames)
const GALLERY = [
  cdn("Exterior-1.webp"),
  cdn("Exterior-2.webp"),
  cdn("Exterior-3.webp"),
  cdn("Exterior-4.webp"),
  cdn("Exterior-5.webp"),
  cdn("Exterior-6.webp"),
];

// Hero / Intro images (real files)
const HERO_BG = cdn("Exterior-2.webp");
const INTRO_MAIN = cdn("Exterior-1.webp");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// Unit info you gave
const HANDOVER = "Q2 2026";
const PAYMENT_PLAN = "70% / 30%";

export const moonlightData = {
  en: {
    seo: {
      title:
        "Binghatti Moonlight in Al Jaddaf Waterfront | 1BR & 2BR Apartments | From AED 1,643,999",
      description:
        "Binghatti Moonlight at Al Jaddaf Waterfront offers modern residences with waterfront proximity and strong connectivity. 1-bedroom units start from AED 1,643,999 with a 70% / 30% payment plan and expected handover in Q2 2026.",
      keywords:
        "Binghatti Moonlight, Al Jaddaf Waterfront, Dubai apartments, 1 bedroom, 2 bedroom, Q2 2026, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/moonlight",
    },

    project: {
      name: "Binghatti Moonlight",
      developer: "Binghatti",
      location: "Al Jaddaf Waterfront, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,643,999",
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
      title: "BINGHATTI MOONLIGHT — WATERFRONT-ADJACENT LIVING IN AL JADDAF",
      paragraphs: [
        "Binghatti Moonlight is set within Al Jaddaf Waterfront, a district appreciated for its evolving lifestyle scene, central access, and proximity to Dubai Creek. The project focuses on modern design with practical layouts suited for end-users and investors.",
        "With convenient routes to key destinations and a location near waterfront experiences, Al Jaddaf Waterfront remains a strategic choice for residents who want connectivity without sacrificing a calmer neighborhood feel.",
        `1-bedroom residences start from AED 1,643,999 and 2-bedroom options start from AED 2,032,999, with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. Download the official brochure, project facts, location document, and floor plans below, along with a full visual gallery.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Document", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Moonlight visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,643,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "817.84 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Al Jaddaf Waterfront",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Moonlight Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Moonlight",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "817.84 sq.ft",
            "Starting Price": "AED 1,643,999",
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
            "Total Area": "1024.62 sq.ft",
            "Starting Price": "AED 2,032,999",
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
        { label: "Waterfront Proximity", icon: "🌊", color: "#d7b46a" },
        { label: "Modern Design", icon: "✨", color: "#d7b46a" },
        { label: "Central Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Moonlight",
      address: "Binghatti Moonlight, Al Jaddaf Waterfront, Dubai, UAE",
      lat: 25.2253009,
      lng: 55.3414399,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Well-connected Al Jaddaf Waterfront address." },
        {
          icon: "🌊",
          text: "Close to waterfront experiences and Dubai Creek.",
        },
        { icon: "🏙️", text: "Strategic district for end-users and investors." },
      ],
    },

    cta: {
      title: "Interested in Binghatti Moonlight?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Moonlight.",
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
        "بن غاطي مونلايت في واجهة الجداف المائية | شقق 1 و2 غرفة | يبدأ من 1,643,999 درهم",
      description:
        "بن غاطي مونلايت في واجهة الجداف المائية يقدم شققًا عصرية بالقرب من الواجهة المائية مع اتصال قوي. تبدأ شقق غرفة واحدة من 1,643,999 درهم مع خطة دفع 70% / 30% وتسليم متوقع في الربع الثاني 2026.",
      keywords:
        "بن غاطي مونلايت, واجهة الجداف المائية, شقق دبي, غرفة واحدة, غرفتين, Q2 2026, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/moonlight",
    },

    project: {
      name: "بن غاطي مونلايت",
      developer: "بن غاطي",
      location: "واجهة الجداف المائية، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,643,999 درهم",
      completionDate: "الربع الثاني 2026",
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
      title: "بن غاطي مونلايت — قرب الواجهة المائية في الجداف",
      paragraphs: [
        "يقع مشروع بن غاطي مونلايت ضمن واجهة الجداف المائية، وهي منطقة تتميز بسهولة الوصول وتطور نمط الحياة وقربها من خور دبي. يركز المشروع على تصميم عصري وتخطيطات عملية تناسب السكن والاستثمار.",
        "تُعد واجهة الجداف المائية خيارًا مناسبًا لمن يرغب في موقع قريب من التجارب المائية مع الحفاظ على طابع سكني هادئ نسبيًا، مع سهولة الوصول إلى الوجهات الرئيسية في دبي.",
        `تبدأ شقق غرفة واحدة من 1,643,999 درهم وتبدأ شقق غرفتين من 2,032,999 درهم، مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. يمكنك تحميل الملفات الرسمية ومخططات الطوابق ومعرض الصور أدناه.`,
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
      imgAlt: "صور بن غاطي مونلايت",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,643,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "817.84 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "واجهة الجداف المائية",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي مونلايت",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "817.84 قدم مربع",
            "السعر الابتدائي": "1,643,999 درهم",
            "موعد التسليم": "الربع الثاني 2026",
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
            "إجمالي المساحة": "1024.62 قدم مربع",
            "السعر الابتدائي": "2,032,999 درهم",
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
        { label: "قرب الواجهة المائية", icon: "🌊", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
        { label: "خدمات قريبة", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي مونلايت",
      address: "بن غاطي مونلايت، واجهة الجداف المائية، دبي، الإمارات",
      lat: 25.2253009,
      lng: 55.3414399,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "موقع عملي في واجهة الجداف المائية مع سهولة الوصول.",
        },
        { icon: "🌊", text: "قريب من خور دبي والتجارب المائية." },
        { icon: "🏙️", text: "منطقة مناسبة للسكن والاستثمار." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي مونلايت؟",
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

export default moonlightData;
