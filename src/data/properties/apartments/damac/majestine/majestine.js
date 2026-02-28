// src/data/properties/apartments/damac/damac-majestine/damac-majestine.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /damac/damac-majestine
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Ready + Full Cash (Ready) payment plan
// ✅ Includes brochure PDF + full gallery + 1BR floorplan
// ✅ Location lat/lng from your Google Maps pin (exact)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-majestine";

// Safe encoder for Bunny filenames
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames in your folder)
// ========================
const BROCHURE_PDF = cdn("DAMAC Majestine Jun 2018 MF.pdf");
const FP_1BR = cdn("Majestine 1br floor plan.webp");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  cdn("Majestine main image.png"),
  cdn("Majestine.jpg"),
  cdn("DAMAC Majestine Ext1.jpg"),
  cdn("DAMAC Majestine Int1.jpg"),
  cdn("DAMAC Majestine Int2.jpg"),
  cdn("DAMAC Majestine Int3.jpg"),
  cdn("DAMAC-MAJESTINE-IMG-01.png"),
  cdn("DAMAC-MAJESTINE-IMG-02.png"),
  cdn("DAMAC-MAJESTINE-IMG-03.png"),
  cdn("DAMAC-MAJESTINE-IMG-04.png"),
];

// ========================
// Data
// ========================
export const damacMajestineData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "DAMAC Majestine | 1BR Ready Apartments in Business Bay, Dubai | Full Cash (Ready)",
      description:
        "DAMAC Majestine is a ready waterfront-inspired residence in Business Bay, offering a practical Downtown-connected lifestyle near the Dubai Canal. Explore the official brochure, full gallery, and 1-bedroom floor plan — using your exact Bunny assets.",
      keywords:
        "DAMAC Majestine, Business Bay apartment, ready apartment Dubai, 1BR Business Bay, full cash ready, Dubai Canal",
      canonical: "/properties/apartments/damac/majestine",
    },

    project: {
      name: "DAMAC Majestine",
      developer: "DAMAC Properties",
      location: "Business Bay, Dubai, UAE",
      status: "Secondary",
      startingPrice: "AED 1,714,000",
      completionDate: "Ready",
      paymentPlan: "Full Cash (Ready)",
      type: "Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("Majestine main image.png"),
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "READY LIVING IN THE HEART OF BUSINESS BAY",
      paragraphs: [
        "DAMAC Majestine is a ready residential address in Business Bay, designed for buyers who want a central Dubai base with smooth access to Downtown, the Dubai Canal district, and key business and lifestyle destinations.",
        "The project suits end-users looking for a completed home they can move into immediately, as well as investors who prefer a ready asset in a high-demand area. With a ready status, the payment is positioned as full cash for immediate ownership.",
        "Below you’ll find your exact Bunny folder assets: the official brochure PDF, a complete gallery set, and a 1-bedroom floor plan image — all wired in the same structure you use across the website (EN + AR).",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "DAMAC Majestine Jun 2018 MF.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
      ],
      imgUrl: cdn("DAMAC Majestine Ext1.jpg"),
      imgAlt: "DAMAC Majestine exterior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,714,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "905 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "✅",
          value: "Ready",
          label: "Status",
        },
      ],
    },

    gallery: {
      title: "Majestine Visuals",
      slides: GALLERY,
      projectTag: "DAMAC Majestine",
    },

    // ✅ FloorPlans: ONLY the 4 fields you requested
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "905 sq.ft",
            "Starting Price": "AED 1,714,000",
            Handover: "Ready",
            "Payment Plan": "Full Cash (Ready)",
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Prime Business Bay Address", icon: "📍", color: "#d7b46a" },
        { label: "Ready-to-Move-In", icon: "✅", color: "#d7b46a" },
        { label: "Lifestyle Facilities", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Downtown Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC Majestine",
      address: "Business Bay, Dubai, UAE",
      // ✅ exact from your Google Maps pin
      lat: 25.186457,
      lng: 55.282055,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "Minutes from Downtown Dubai and key landmarks." },
        { icon: "🌊", text: "Near Dubai Canal lifestyle district." },
        { icon: "🚗", text: "Strong access to major roads across Dubai." },
      ],
    },

    cta: {
      title: "Interested in DAMAC Majestine?",
      description:
        "Share your details to receive current availability, unit options, and the official brochure for DAMAC Majestine in Business Bay.",
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
      title:
        "داماك ماجستين | شقق 1 غرفة جاهزة في الخليج التجاري دبي | دفع نقدي كامل (جاهز للتسليم)",
      description:
        "داماك ماجستين مشروع جاهز في الخليج التجاري يوفّر أسلوب حياة عملي قريب من وسط دبي وقناة دبي. يتضمن الكتيّب الرسمي، معرض الصور الكامل، ومخطط 1 غرفة — باستخدام ملفات Bunny الخاصة بك كما هي.",
      keywords:
        "داماك ماجستين, الخليج التجاري, شقة جاهزة دبي, شقة غرفة نوم, دفع نقدي كامل, قناة دبي",
      canonical: "/properties/apartments/damac/majestine",
    },

    project: {
      name: "داماك ماجستين",
      developer: "داماك العقارية",
      location: "الخليج التجاري، دبي، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "1,714,000 درهم",
      completionDate: "جاهز",
      paymentPlan: "دفع نقدي كامل (جاهز للتسليم)",
      type: "شقق سكنية",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: cdn("Majestine main image.png"),
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "سكن جاهز في قلب الخليج التجاري",
      paragraphs: [
        "يقع مشروع داماك ماجستين في الخليج التجاري ويُعد خيارًا مناسبًا لمن يبحث عن عنوان جاهز للسكن ضمن منطقة مركزية في دبي، مع وصول سهل لوسط دبي ومنطقة قناة دبي وأهم وجهات الأعمال ونمط الحياة.",
        "المشروع مناسب للسكن الفوري أو للاستثمار لمن يفضّل أصلًا جاهزًا في منطقة قوية الطلب. وبما أنه جاهز للتسليم، فإن خطة الدفع تُعرض كدفع نقدي كامل للحصول على ملكية فورية.",
        "ستجد أدناه ملفاتك كما رفعتها على Bunny: كتيّب المشروع الرسمي، معرض الصور الكامل، ومخطط 1 غرفة نوم — وبنفس بنية الموقع لديك (EN + AR).",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "DAMAC Majestine Jun 2018 MF.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
      ],
      imgUrl: cdn("DAMAC Majestine Ext1.jpg"),
      imgAlt: "واجهة داماك ماجستين",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,714,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "905 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "✅",
          value: "جاهز",
          label: "الحالة",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "داماك ماجستين",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "905 قدم مربع",
            "السعر الابتدائي": "1,714,000 درهم",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "دفع نقدي كامل (جاهز للتسليم)",
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "موقع قوي في الخليج التجاري", icon: "📍", color: "#d7b46a" },
        { label: "جاهز للسكن", icon: "✅", color: "#d7b46a" },
        { label: "مرافق أسلوب حياة", icon: "🏊", color: "#d7b46a" },
        { label: "لياقة وصحة", icon: "💪", color: "#d7b46a" },
        { label: "قرب وسط دبي", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "داماك ماجستين",
      address: "الخليج التجاري، دبي، الإمارات",
      lat: 25.186457,
      lng: 55.282055,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "قريب من وسط دبي والمعالم الرئيسية." },
        { icon: "🌊", text: "بالقرب من منطقة قناة دبي." },
        { icon: "🚗", text: "سهولة الوصول لمحاور دبي الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم بداماك ماجستين؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات ورابط الكتيّب الرسمي لمشروع داماك ماجستين في الخليج التجاري.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacMajestineData;
