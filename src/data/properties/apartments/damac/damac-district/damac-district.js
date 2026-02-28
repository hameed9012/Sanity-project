// src/data/properties/apartments/damac/damac-district/damac-district.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /damac/damac-district
// ✅ Encodes spaces + parentheses safely (so 0_0 (1).png renders)
// ✅ EN + AR
// ✅ Hero background = your uploaded mp4
// ✅ Includes: One-pager PDF + Concept PDF + Floor Plans PDF
// ✅ Gallery = only JPG/PNG assets in the folder (skips .tif)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-district";

// Encode filename safely (includes parentheses too)
const safeEncode = (fileName) =>
  encodeURIComponent(fileName).replace(/\(/g, "%28").replace(/\)/g, "%29");

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${safeEncode(fileName)}`;
const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames موجودة في نفس الفولدر)
// ========================
const HERO_VIDEO = cdn("DAMAC_DISTRICT_LAUNCH_16X9_EN.mp4");

const ONE_PAGER_PDF = cdn("DAMAC DISTRICT_One pager_9_8-25_v2.pdf");
const CONCEPT_PDF = cdn("DamacDistrict_DB_Tower A_CONCEPT.pdf");
const FLOORPLANS_PDF = cdn("DamacDistrict_DB_Tower A_Floor plans.pdf");

// Floor plan image (EXACT filename — includes space before .png)
const FP_1BR_IMAGE = cdn("Damac district 1br floor plan .png");

// No dedicated 2BR image found in folder list -> use extracted PNG page fallback
const FP_2BR_FALLBACK_IMAGE = cdn("0_2.png");

// ========================
// Gallery (ONLY files موجودة فعلاً in /damac/damac-district)
// ========================
const GALLERY = [
  // Hero / key visuals
  cdn("VenturaResidence-HeroShot-Ext03-2025-06-13.jpg"),
  cdn("Gym Indoor.jpg"),
  cdn("PlaygroundArea.jpg"),
  cdn("250718_1666_c03.jpg"),
  cdn("1-1A.jpg"),
  cdn("1-2.jpg"),

  // Extracted PNG pages (from your folder)
  cdn("0_0.png"),
  cdn("0_0 (1).png"),
  cdn("0_0 (2).png"),
  cdn("0_0 (3).png"),

  cdn("0_1.png"),
  cdn("0_1 (1).png"),
  cdn("0_1 (2).png"),
  cdn("0_1 (3).png"),
  cdn("0_1 (4).png"),

  cdn("0_2.png"),
  cdn("0_2 (1).png"),
  cdn("0_2 (2).png"),
  cdn("0_2 (3).png"),
  cdn("0_2 (4).png"),

  cdn("0_3 (1).png"),
  cdn("0_3 (2).png"),
  cdn("0_3 (3).png"),
  cdn("0_3 (4).png"),
  cdn("0_3 (5).png"),
];

// ========================
// Data
// ========================
export const damacDistrictData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "DAMAC District at DAMAC Hills | 1BR & 2BR Apartments | 50/50 | Q3 2029",
      description:
        "DAMAC District is a new apartment destination within DAMAC Hills, built for buyers who want community living, modern layouts, and a clear payment structure. View the official launch video, one-pager, concept deck, floor plan PDFs, and a full gallery — using your exact Bunny assets.",
      keywords:
        "DAMAC District, DAMAC Hills apartments, 1BR DAMAC Hills, 2BR DAMAC Hills, 50/50 payment plan, Q3 2029",
      canonical: "/properties/apartments/damac/damac-district",
    },

    project: {
      name: "DAMAC District",
      developer: "DAMAC Properties",
      location: "DAMAC Hills, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,223,000",
      completionDate: "Q3 2029",
      paymentPlan: "50% / 50%",
      type: "Apartments",
      units: "1 Bedroom & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "A MODERN APARTMENT ADDRESS WITHIN DAMAC HILLS",
      paragraphs: [
        "DAMAC District is positioned inside DAMAC Hills for buyers who want apartment living in a master community that’s already established in Dubai. The focus is a practical home base with lifestyle facilities and a community environment — ideal for both end-users and long-term investors.",
        "The project offers well-sized 1-bedroom and 2-bedroom layouts with a clear off-plan structure and handover timeline. With delivery planned for Q3 2029 and a straightforward 50/50 payment plan, the buying journey stays simple and aligned with the construction schedule.",
        "Everything below is wired directly from your Bunny folder (no missing files): launch video, official PDFs (one-pager, concept, floor plans), and a gallery built ONLY from the assets موجودة inside damac-district.",
      ],
      brochures: [
        {
          title: "Download One-Pager",
          url: ONE_PAGER_PDF,
          type: "main",
          category: "Overview",
          fileName: "DAMAC DISTRICT_One pager_9_8-25_v2.pdf",
          description: "Quick highlights + positioning.",
        },
        {
          title: "Download Concept Deck",
          url: CONCEPT_PDF,
          type: "secondary",
          category: "Concept",
          fileName: "DamacDistrict_DB_Tower A_CONCEPT.pdf",
          description: "Concept narrative + visuals.",
        },
        {
          title: "Download Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
          category: "Floor Plans",
          fileName: "DamacDistrict_DB_Tower A_Floor plans.pdf",
          description: "Full floor plan pack (PDF).",
        },
      ],
      imgUrl: cdn("VenturaResidence-HeroShot-Ext03-2025-06-13.jpg"),
      imgAlt: "DAMAC District exterior visual",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,223,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "675.87 sq.ft",
          label: "1BR Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q3 2029",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "DAMAC District Visuals",
      slides: GALLERY,
      projectTag: "DAMAC District",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "675.87 sq.ft",
            "Starting Price": "AED 1,223,000",
            Handover: "Q3 2029",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_1BR_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1066.38 sq.ft",
            "Starting Price": "AED 1,827,000",
            Handover: "Q3 2029",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_2BR_FALLBACK_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Community Living", icon: "🏡", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Family Spaces", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "Leisure Facilities", icon: "🏊", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC District",
      address: "DAMAC Hills, Dubai, UAE",
      lat: 25.0160114,
      lng: 55.2486774,
      zoom: 15,
      proximityFeatures: [
        { icon: "📍", text: "Located within DAMAC Hills community." },
        { icon: "🚗", text: "Convenient access to major Dubai routes." },
        { icon: "🌿", text: "Lifestyle-oriented master community setting." },
      ],
    },

    cta: {
      title: "Interested in DAMAC District?",
      description:
        "Share your details to receive availability, updated unit options, and the official PDFs for DAMAC District.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download One-Pager", action: "download-brochure" },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title:
        "داماك ديستريكت في داماك هيلز | شقق 1 غرفة و2 غرف | 50/50 | Q3 2029",
      description:
        "داماك ديستريكت مشروع شقق جديد داخل داماك هيلز لمن يبحث عن سكن عملي ضمن مجتمع متكامل وخطة دفع واضحة. ستجد فيديو الإطلاق، والـ One-Pager، وملف الكونسبت، وملف مخططات الطوابق، ومعرض صور مبني فقط من ملفات Bunny الموجودة داخل فولدر damac-district.",
      keywords:
        "داماك ديستريكت, شقق داماك هيلز, شقة غرفة, شقة غرفتين, 50/50, الربع الثالث 2029",
      canonical: "/properties/apartments/damac/damac-district",
    },

    project: {
      name: "داماك ديستريكت",
      developer: "داماك العقارية",
      location: "داماك هيلز، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,223,000 درهم",
      completionDate: "الربع الثالث 2029",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "1 غرفة و2 غرف",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "عنوان شقق حديث داخل مجتمع داماك هيلز",
      paragraphs: [
        "داماك ديستريكت يقع داخل داماك هيلز لمن يريد شقة ضمن مجتمع متكامل ومعروف في دبي. الفكرة الأساسية هي سكن عملي مع مرافق وخدمات يومية وبيئة مجتمعية مناسبة للعيش والاستثمار.",
        "يقدّم المشروع خيارات 1 غرفة و2 غرف بمساحات مناسبة، مع جدول تسليم واضح. التسليم متوقع في الربع الثالث 2029 وخطة الدفع 50/50 تجعل مسار الشراء بسيطًا ومتماشيًا مع الجدول الإنشائي.",
        "كل ما تراه هنا مربوط مباشرة بملفاتك داخل Bunny (بدون ملفات ناقصة): فيديو الإطلاق، ملفات PDF الرسمية، ومعرض صور مبني فقط من الملفات الموجودة داخل فولدر damac-district.",
      ],
      brochures: [
        {
          title: "تحميل الـ One-Pager",
          url: ONE_PAGER_PDF,
          type: "main",
          category: "نظرة عامة",
          fileName: "DAMAC DISTRICT_One pager_9_8-25_v2.pdf",
          description: "ملف سريع يوضح أهم النقاط.",
        },
        {
          title: "تحميل ملف الكونسبت",
          url: CONCEPT_PDF,
          type: "secondary",
          category: "Concept",
          fileName: "DamacDistrict_DB_Tower A_CONCEPT.pdf",
          description: "سرد الكونسبت والصور الأساسية.",
        },
        {
          title: "تحميل مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
          category: "Floor Plans",
          fileName: "DamacDistrict_DB_Tower A_Floor plans.pdf",
          description: "حزمة مخططات الطوابق كاملة (PDF).",
        },
      ],
      imgUrl: cdn("VenturaResidence-HeroShot-Ext03-2025-06-13.jpg"),
      imgAlt: "داماك ديستريكت",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,223,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "675.87 قدم²",
          label: "مساحة 1 غرفة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q3 2029",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "داماك ديستريكت",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "675.87 قدم مربع",
            "السعر الابتدائي": "1,223,000 درهم",
            "موعد التسليم": "الربع الثالث 2029",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_1BR_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1066.38 قدم مربع",
            "السعر الابتدائي": "1,827,000 درهم",
            "موعد التسليم": "الربع الثالث 2029",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_2BR_FALLBACK_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مجتمع متكامل", icon: "🏡", color: "#d7b46a" },
        { label: "لياقة وصحة", icon: "💪", color: "#d7b46a" },
        { label: "مساحات عائلية", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "مرافق ترفيهية", icon: "🏊", color: "#d7b46a" },
        { label: "خدمات يومية", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "داماك ديستريكت",
      address: "داماك هيلز، دبي، الإمارات",
      lat: 25.0160114,
      lng: 55.2486774,
      zoom: 15,
      proximityFeatures: [
        { icon: "📍", text: "داخل مجتمع داماك هيلز." },
        { icon: "🚗", text: "سهولة الوصول لمحاور دبي الرئيسية." },
        { icon: "🌿", text: "بيئة مجتمعية متكاملة بنمط حياة." },
      ],
    },

    cta: {
      title: "مهتم بمشروع داماك ديستريكت؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وخيارات الوحدات وروابط الملفات الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الـ One-Pager", action: "download-brochure" },
      ],
    },
  },
};

export default damacDistrictData;
