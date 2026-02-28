// src/data/properties/apartments/damac/golf-greens/golf-greens.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY your uploaded Bunny filenames (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ Hero background = your uploaded video (mp4)
// ✅ Payment plan image included
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Floorplan images use EXACT filenames you listed
// ✅ Location lat/lng taken exactly from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/golf-greens";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const BROCHURE_PDF = cdn("GOLF GREENS - Digital Brochure (EN).pdf");
const HERO_VIDEO = cdn("GOLF GREENS - Launch Video (EN).mp4");
const PAYMENT_PLAN_IMG = cdn("Golf Greens - Payment Plan.jpg");

// ✅ Floor plan images (EXACT filenames)
const FP_1BR = cdn("golf greens 1 br floor plans.webp");
const FP_2BR = cdn("golf greens 2br floor plans.webp");
const FP_3BR_LOWER = cdn("Golf greens 3br lower floor plan.png");
const FP_3BR_UPPER = cdn("Golf greens 3br upper floor plan.png");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("01.jpg"),
  cdn("02.jpg"),
  cdn("03.jpg"),
  cdn("04.jpg"),
  cdn("05.jpg"),
  cdn("06.jpg"),
  cdn("07.jpg"),
  cdn("08.jpg"),
  cdn("09.jpg"),
  cdn("10.jpg"),
  cdn("11.jpg"),
  cdn("12.jpg"),
];

export const golfGreensData = {
  en: {
    seo: {
      title:
        "Golf Greens by DAMAC | Golf-View Apartments in DAMAC Hills | Q1 2027",
      description:
        "Golf Greens by DAMAC is a golf-facing residential address in DAMAC Hills, crafted around green open views, resort-style amenities, and everyday connectivity. Choose from 1, 2 & 3 bedroom homes designed for end-users and investors seeking long-term demand in one of Dubai’s most established lifestyle communities.",
      keywords:
        "Golf Greens, DAMAC, DAMAC Hills, golf view apartments, 1BR, 2BR, 3BR, Q1 2027, 50/50 payment plan",
      canonical: "/properties/apartments/damac/golf-greens",
    },

    project: {
      name: "Golf Greens",
      developer: "DAMAC Properties",
      location: "DAMAC Hills, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,727,000",
      completionDate: "Q1 2027",
      paymentPlan: "50/50",
      type: "Apartments",
      units: "1, 2 & 3 Bedroom",
    },

    hero: {
      // ✅ Video hero (your UI should render <video> when it sees .mp4)
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "GOLF-FRONT LIVING IN DAMAC HILLS",
      paragraphs: [
        "Golf Greens by DAMAC is built for buyers who want everyday calm without losing city access. Set within DAMAC Hills, the project anchors itself around open green outlooks and a community lifestyle that feels established and liveable—not speculative. The setting is defined by wide views, landscaped corridors, and a golf-centric atmosphere that stays consistently attractive for residents and long-term tenants.",
        "What makes DAMAC Hills enduring is its community structure: internal amenities, leisure zones, and a residential ecosystem that supports real day-to-day living. Golf Greens complements this with a clean, contemporary positioning and layouts that work for both end-users and investors—especially those who value view-driven demand and lifestyle-led rentals.",
        "Below you’ll find your official brochure, the payment plan image, a full gallery linked with your exact BunnyCDN filenames, and the floor plan section in the strict 4-field format we agreed on—using the exact floor plan images you uploaded (2BR plan + 3BR lower/upper plans).",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Payment Plan (Image)",
          url: PAYMENT_PLAN_IMG,
          type: "secondary",
        },
      ],
      imgUrl: cdn("08.jpg"),
      imgAlt: "Golf Greens lifestyle view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,727,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1006.53 sq.ft",
          label: "1BR Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "⛳",
          value: "DAMAC Hills",
          label: "Golf Community",
        },
      ],
    },

    gallery: {
      title: "Golf Greens Visuals",
      slides: GALLERY,
      projectTag: "Golf Greens",
    },

    // ✅ FloorPlans: ONLY the 4 fields you agreed on
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "1006.53 sq.ft",
            "Starting Price": "AED 1,727,000",
            Handover: "Q1 2027",
            "Payment Plan": "50% / 50%",
          },
          // You did NOT upload a 1BR floorplan image for Golf Greens
          // so we keep it image-less (prevents broken links).
          images: [],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1344.74 sq.ft",
            "Starting Price": "AED 2,354,000",
            Handover: "Q1 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom (Duplex Layout)",
          bedrooms: 3,
          specs: {
            "Total Area": "3890.08 sq.ft",
            "Starting Price": "AED 4,940,000",
            Handover: "Q1 2027",
            "Payment Plan": "50% / 50%",
          },
          // ✅ Both levels as you uploaded
          images: [FP_3BR_LOWER, FP_3BR_UPPER],
          features: ["Lower Floor + Upper Floor plans included"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Golf Community Living", icon: "⛳", color: "#d7b46a" },
        { label: "Resort-Style Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Landscaped Outdoor Areas", icon: "🌿", color: "#d7b46a" },
        { label: "Family-Friendly Zones", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Golf Greens",
      address: "DAMAC Hills, Dubai, UAE",
      // ✅ exactly from your Google Maps pin
      lat: 25.0139366,
      lng: 55.2526407,
      zoom: 16,
      proximityFeatures: [
        {
          icon: "⛳",
          text: "Set within DAMAC Hills golf lifestyle community.",
        },
        { icon: "🚗", text: "Connected to key Dubai routes and hubs." },
        { icon: "🌿", text: "Green open views and landscaped surroundings." },
      ],
    },

    cta: {
      title: "Interested in Golf Greens?",
      description:
        "Share your details to receive availability, pricing guidance, and the official brochure for Golf Greens by DAMAC in DAMAC Hills.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "جولف جرينز من داماك | شقق بإطلالات جولف في داماك هيلز | Q1 2027",
      description:
        "جولف جرينز من داماك مشروع سكني بإطلالات خضراء ضمن داماك هيلز، يجمع بين أسلوب حياة مجتمعي متكامل ومرافق ترفيهية واتصال عملي بالمدينة. خيارات 1 و2 و3 غرف نوم مناسبة للسكن والاستثمار.",
      keywords:
        "جولف جرينز, داماك, داماك هيلز, شقق بإطلالة جولف, خطة دفع 50/50, Q1 2027",
      canonical: "/properties/apartments/damac/golf-greens",
    },

    project: {
      name: "جولف جرينز",
      developer: "داماك العقارية",
      location: "داماك هيلز، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,727,000 درهم",
      completionDate: "الربع الأول 2027",
      paymentPlan: "50/50",
      type: "شقق سكنية",
      units: "1 و2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "حياة بإطلالات جولف داخل داماك هيلز",
      paragraphs: [
        "يقدّم مشروع جولف جرينز من داماك تجربة سكنية هادئة تعتمد على الإطلالات الخضراء وأجواء مجتمعية متكاملة داخل داماك هيلز. هنا لا تحصل فقط على منزل، بل على نمط حياة يومي يشعر بالاستقرار والجاهزية—مع مساحات مفتوحة ومناظر واسعة تضيف قيمة دائمة للسكن والاستثمار.",
        "تتميز داماك هيلز بأنها مجتمع قائم بذاته: مرافق وخدمات وأنشطة ومساحات ترفيهية تدعم الحياة اليومية فعليًا، ما يجعل الطلب على السكن طويل الأمد أكثر ثباتًا. ويأتي جولف جرينز كخيار حديث بطرح واضح ومخططات عملية تناسب المقيمين والمستثمرين الباحثين عن طلب قائم على أسلوب الحياة والإطلالة.",
        "ستجد أدناه الكتيّب الرسمي، وصورة خطة الدفع، ومعرض الصور الكامل بأسماء ملفات BunnyCDN كما هي، بالإضافة إلى قسم مخططات الطوابق بصيغة 4 حقول فقط كما اتفقنا—مع صور المخططات المرفوعة لوحدة 2 غرف نوم، ومخططي الدور السفلي/العلوي لوحدة 3 غرف.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "خطة الدفع (صورة)", url: PAYMENT_PLAN_IMG, type: "secondary" },
      ],
      imgUrl: cdn("08.jpg"),
      imgAlt: "إطلالة جولف جرينز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,727,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1006.53 قدم²",
          label: "مساحة 1 غرفة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "⛳",
          value: "داماك هيلز",
          label: "مجتمع جولف",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "جولف جرينز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "1006.53 قدم مربع",
            "السعر الابتدائي": "1,727,000 درهم",
            "موعد التسليم": "الربع الأول 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1344.74 قدم مربع",
            "السعر الابتدائي": "2,354,000 درهم",
            "موعد التسليم": "الربع الأول 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف نوم (مخطط دورين)",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "3890.08 قدم مربع",
            "السعر الابتدائي": "4,940,000 درهم",
            "موعد التسليم": "الربع الأول 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_3BR_LOWER, FP_3BR_UPPER],
          features: ["مخطط الدور السفلي + الدور العلوي"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مجتمع جولف", icon: "⛳", color: "#d7b46a" },
        { label: "مسابح", icon: "🏊", color: "#d7b46a" },
        { label: "لياقة وعافية", icon: "💪", color: "#d7b46a" },
        { label: "مساحات خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "مناطق عائلية", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "جولف جرينز",
      address: "داماك هيلز، دبي، الإمارات",
      lat: 25.0139366,
      lng: 55.2526407,
      zoom: 16,
      proximityFeatures: [
        { icon: "⛳", text: "ضمن مجتمع داماك هيلز ذي الطابع الجولفي." },
        { icon: "🚗", text: "اتصال عملي بمحاور دبي الرئيسية." },
        { icon: "🌿", text: "إطلالات خضراء ومساحات مفتوحة." },
      ],
    },

    cta: {
      title: "مهتم بمشروع جولف جرينز؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار والوثائق الرسمية لمشروع جولف جرينز من داماك في داماك هيلز.",
      buttons: [
        { label: "اطلب معلومات الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default golfGreensData;
