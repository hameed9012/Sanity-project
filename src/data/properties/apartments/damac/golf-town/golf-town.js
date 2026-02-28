// src/data/properties/apartments/damac/golf-town/golf-town.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /damac/golf-town
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Ready + Full Cash (Ready) for Studio (100%)
// ✅ Includes brochure PDF + hero video + full gallery + Studio & 3BR floorplans
// ✅ Location based on your Google Maps search pin area (using the coordinates you provided)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/golf-town";

// Safe encoder for Bunny filenames
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames in your folder)
// ========================
const HERO_VIDEO = cdn("Golf Town 960x540.mp4");
const BROCHURE_PDF = cdn("Golf Town at DAMAC Hills Jan 2019 RM.pdf");

const FP_STUDIO = cdn("Golf Town Studio floor plan.webp");
const FP_3BR = cdn("Golf Town 3br floor plan.webp");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  cdn("Golf Town Ext2.jpg"),
  cdn("Golf Town Ext3.jpg"),
  cdn("Golf Town Ext4.jpg"),
  cdn("Golf Town Ext5.jpg"),
  cdn("Golf Town Ext6.jpg"),
  cdn("Golf Town Int1.jpg"),
  cdn("Golf Town Int2.jpg"),
  cdn("Golf Town - 01.jpg"),
  cdn("Golf Town - 02.jpg"),
  cdn("Golf Town - 03.png"),
  cdn("DH_GolfApExterior.png"),
  cdn("DH_GT-GVInterior-2.png"),
  cdn("Golf Town BNK_7754.png"),
];

// ========================
// Data
// ========================
export const golfTownData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Golf Town at DAMAC Hills | Ready Apartments | Studio & 3BR | Full Cash (Ready)",
      description:
        "Golf Town at DAMAC Hills offers ready residences in a golf-community setting, ideal for end-users seeking a move-in home or investors targeting established demand. Explore your official brochure, hero video, full gallery, and floor plans for Studio and 3-bedroom units — using your exact Bunny assets.",
      keywords:
        "Golf Town DAMAC Hills, ready apartment DAMAC Hills, studio DAMAC Hills, 3BR DAMAC Hills, full cash ready, golf community Dubai",
      canonical: "/properties/apartments/damac/golf-town",
    },

    project: {
      name: "Golf Town",
      developer: "DAMAC Properties",
      location: "DAMAC Hills, Dubai, UAE",
      status: "Secondary",
      startingPrice: "AED 855,000",
      completionDate: "Ready",
      paymentPlan: "Full Cash (Ready)",
      type: "Apartments",
      units: "Studio & 3 Bedroom",
    },

    hero: {
      // ✅ mp4 -> your UI should render <video> when it sees .mp4
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "READY GOLF-COMMUNITY LIVING AT DAMAC HILLS",
      paragraphs: [
        "Golf Town is a ready residential option within DAMAC Hills, designed around a relaxed community lifestyle with golf-course surroundings and everyday convenience. It suits buyers who prefer established neighborhoods over off-plan timelines.",
        "For end-users, the advantage is simple: a completed home in a master community that’s already active and liveable. For investors, DAMAC Hills remains a recognizable destination with consistent rental interest driven by community amenities and connectivity.",
        "This page is connected to your exact Bunny folder assets: the official brochure PDF, the hero video, a full image gallery, and floor plans for both Studio and 3-bedroom units — delivered in the same structure you use across the website (EN + AR).",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Golf Town at DAMAC Hills Jan 2019 RM.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
      ],
      imgUrl: cdn("DH_GolfApExterior.png"),
      imgAlt: "Golf Town at DAMAC Hills exterior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 855,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "490.3 sq.ft",
          label: "Studio Area",
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
      title: "Golf Town Visuals",
      slides: GALLERY,
      projectTag: "Golf Town",
    },

    // ✅ FloorPlans: ONLY the 4 fields you requested
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "490.3 sq.ft",
            "Starting Price": "AED 855,000",
            Handover: "Ready",
            "Payment Plan": "Full Cash (Ready)",
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "2848 sq.ft",
            "Starting Price": "AED 3,882,000",
            Handover: "Ready",
            "Payment Plan": "Full Cash (Ready)",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Golf Community Lifestyle", icon: "⛳", color: "#d7b46a" },
        { label: "Ready-to-Move-In", icon: "✅", color: "#d7b46a" },
        { label: "Family-Friendly Community", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Convenient Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Golf Town - DAMAC Hills",
      address: "DAMAC Hills, Dubai, UAE",
      // ✅ using the coordinates you provided in your Google Maps search link
      lat: 25.0232319,
      lng: 55.2486211,
      zoom: 16,
      proximityFeatures: [
        { icon: "⛳", text: "Located within the DAMAC Hills golf community." },
        { icon: "🌿", text: "Community-style environment with open spaces." },
        { icon: "🚗", text: "Practical access to main Dubai routes." },
      ],
    },

    cta: {
      title: "Interested in Golf Town?",
      description:
        "Share your details to receive current availability, ready unit options, and the official brochure for Golf Town at DAMAC Hills.",
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
        "جولف تاون في داماك هيلز | وحدات جاهزة | استوديو و3 غرف | دفع نقدي كامل (جاهز للتسليم)",
      description:
        "جولف تاون في داماك هيلز يقدّم وحدات جاهزة ضمن مجتمع جولف متكامل. مناسب للسكن الفوري أو للاستثمار في منطقة قائمة. استعرض الكتيّب الرسمي والفيديو ومعرض الصور ومخططات الاستوديو و3 غرف — باستخدام ملفات Bunny الخاصة بك كما هي.",
      keywords:
        "جولف تاون داماك هيلز, شقة جاهزة داماك هيلز, استوديو داماك هيلز, شقة 3 غرف, دفع نقدي كامل, مجتمع جولف دبي",
      canonical: "/properties/apartments/damac/golf-town",
    },

    project: {
      name: "جولف تاون",
      developer: "داماك العقارية",
      location: "داماك هيلز، دبي، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "855,000 درهم",
      completionDate: "جاهز",
      paymentPlan: "دفع نقدي كامل (جاهز للتسليم)",
      type: "شقق سكنية",
      units: "استوديو و3 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "سكن جاهز ضمن مجتمع جولف في داماك هيلز",
      paragraphs: [
        "جولف تاون خيار سكني جاهز داخل داماك هيلز، يتميز بأجواء مجتمع متكامل ونمط حياة مريح ضمن بيئة جولف وخدمات يومية قريبة. مناسب لمن يفضّل المجتمعات القائمة على الانتظار في المشاريع على المخطط.",
        "للسكن، الفائدة واضحة: منزل جاهز داخل مجتمع فعّال ومأهول. وللاستثمار، تبقى داماك هيلز وجهة معروفة مع طلب إيجاري مستمر مدفوع بالمرافق المجتمعية وسهولة التنقل.",
        "هذه الصفحة مرتبطة بملفاتك كما رفعتها على Bunny: الكتيّب الرسمي، فيديو الهيرو، معرض الصور الكامل، ومخططات الاستوديو و3 غرف — وبنفس بنية الموقع لديك (EN + AR).",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Golf Town at DAMAC Hills Jan 2019 RM.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
      ],
      imgUrl: cdn("Golf Town Ext1.jpg"),
      imgAlt: "واجهة جولف تاون داماك هيلز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "855,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "490.3 قدم²",
          label: "مساحة الاستوديو",
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
      projectTag: "جولف تاون",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "490.3 قدم مربع",
            "السعر الابتدائي": "855,000 درهم",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "دفع نقدي كامل (جاهز للتسليم)",
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "2848 قدم مربع",
            "السعر الابتدائي": "3,882,000 درهم",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "دفع نقدي كامل (جاهز للتسليم)",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "نمط حياة مجتمع جولف", icon: "⛳", color: "#d7b46a" },
        { label: "جاهز للسكن", icon: "✅", color: "#d7b46a" },
        { label: "مناسب للعائلات", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "لياقة وصحة", icon: "💪", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Golf Town - DAMAC Hills",
      address: "داماك هيلز، دبي، الإمارات",
      lat: 25.0232319,
      lng: 55.2486211,
      zoom: 16,
      proximityFeatures: [
        { icon: "⛳", text: "ضمن مجتمع داماك هيلز للجولف." },
        { icon: "🌿", text: "بيئة مجتمعية مع مساحات مفتوحة." },
        { icon: "🚗", text: "سهولة الوصول لمحاور دبي الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم بجولف تاون؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات الجاهزة ورابط الكتيّب الرسمي لمشروع جولف تاون في داماك هيلز.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default golfTownData;
