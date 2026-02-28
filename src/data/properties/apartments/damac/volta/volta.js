// src/data/properties/apartments/damac/damac-volta/damac-volta.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses EXACT Bunny filenames you listed (no renaming)
// ✅ EN + AR
// ✅ Includes BOTH brochures (Digital + Floor Plan PDF)
// ✅ Includes full gallery + PAYMENT PLAN.jpg
// ✅ Includes 1BR + 4BR floor plan webp images
// ✅ FloorPlans uses ONLY 4 fields: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng taken exactly from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/-volta";

// Helper to build Bunny CDN URLs safely (encodes spaces, &, ~, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Brochures + Payment Plan
// ========================
const BROCHURE_DIGITAL_PDF = cdn("Volta BROCHURE 4sep23-Digital.pdf");
const BROCHURE_FLOORPLANS_PDF = cdn("Volta BROCHURE V2 11sep23-Floor plan.pdf");
const PAYMENT_PLAN_IMAGE = cdn("PAYMENT PLAN.jpg");

// ========================
// Floor Plans (EXACT filenames)
// ========================
const FP_1BR = `https://luxury-real-estate-media.b-cdn.net/damac/damac-volta/Volta%201br%20floor%20plan.webp`;
const FP_4BR = `https://luxury-real-estate-media.b-cdn.net/damac/damac-volta/Volta%204%20br%20floor%20plan.webp`;

// ========================
// Gallery (EXACT filenames)
// ========================
const GALLERY = [
  cdn("CAMERA_DAY VIEW_01.jpg"),
  cdn("CAMERA_VIEW_02.jpg"),

  cdn("SZR_01.jpg"),
  cdn("SZR_02_A.jpg"),
  cdn("SZR_02_B.jpg"),
  cdn("SZR_03_UPDATE.jpg"),
  cdn("SZR_04_NIGHT.jpg"),
  cdn("SZR_04.jpg"),
  cdn("SZR_05.jpg"),
  cdn("SZR_07_UPDATE.jpg"),
  cdn("SZR_08.jpg"),
  cdn("SZR_09.jpg"),
  cdn("SZR_10_UPDATE.jpg"),
  cdn("SZR_11_UPDATE.jpg"),
  cdn("SZR_12.jpg"),
  cdn("SZR_13.jpg"),

  cdn("GF Lobby 2.jpg"),
  cdn("GF Lobby 3.jpg"),
  cdn("GF Lobby 7.jpg"),

  cdn("P175-Sheikh Zayed Tower_Gym_Cam-02_20230830.jpg"),
  cdn("P175-Sheikh Zayed Tower_Gym_Cam-03_20230830.jpg"),
  cdn("P175-Sheikh Zayed Tower_Gym_Cam-05_20230830.jpg"),

  cdn("SZR_RA_M- Bathroom View 01.jpg"),
  cdn("SZR_RA_M- Bedroom D-View 01.jpg"),
  cdn("SZR_RA_M- Bedroom N-View 01.jpg"),
];

export const damacVoltaData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "DAMAC Volta | 1BR & 4BR Apartments in Business Bay, Dubai | 50/50 | Q2 2028",
      description:
        "DAMAC Volta is a modern high-rise residential address positioned for a connected Dubai lifestyle near key business and leisure districts. Explore the official brochures, full image gallery, payment plan, and floor plans for 1BR and 4BR layouts.",
      keywords:
        "DAMAC Volta, Business Bay apartments, 1BR apartment Dubai, 4BR apartment Dubai, DAMAC, payment plan 50/50, Q2 2028",
      canonical: "/properties/apartments/damac/volta",
    },

    project: {
      name: "DAMAC Volta",
      developer: "DAMAC Properties",
      location: "Business Bay, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,496,000",
      completionDate: "Q2 2028",
      paymentPlan: "50% / 50%",
      type: "Apartments",
      units: "1BR & 4BR",
    },

    hero: {
      backgroundUrl: cdn("SZR_04_NIGHT.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "A HIGH-RISE ADDRESS BUILT FOR A CONNECTED DUBAI ROUTINE",
      paragraphs: [
        "DAMAC Volta is positioned for residents who want a modern tower lifestyle with practical access to Dubai’s key movement corridors. The concept is simple: a clean, contemporary residential offering supported by a strong location and day-to-day convenience—ideal for end-users who value connectivity and for investors targeting central-demand areas.",
        "Rather than relying on vague marketing claims, this page is built directly from your BunnyCDN assets: two official brochure PDFs (digital brochure + floor plan brochure), the full project gallery, and a dedicated payment plan image—using the exact filenames you uploaded (no renaming).",
        "Below you’ll find the 1BR and 4BR floor plan images presented in the strict 4-field format you approved (Total Area / Starting Price / Handover / Payment Plan), plus a complete visuals section for quick content browsing.",
      ],
      brochures: [
        {
          title: "Download Digital Brochure",
          url: BROCHURE_DIGITAL_PDF,
          type: "main",
          category: "Overview",
          fileName: "Volta BROCHURE 4sep23-Digital.pdf",
          description: "Official digital brochure (EN)",
        },
        {
          title: "Download Floor Plans (PDF)",
          url: BROCHURE_FLOORPLANS_PDF,
          type: "secondary",
          category: "Floor Plans",
          fileName: "Volta BROCHURE V2 11sep23-Floor plan.pdf",
          description: "Floor plan brochure (PDF)",
        },
        {
          title: "View Payment Plan",
          url: PAYMENT_PLAN_IMAGE,
          type: "secondary",
          category: "Payment Plan",
          fileName: "PAYMENT PLAN.jpg",
          description: "Payment plan image",
        },
      ],
      imgUrl: cdn("CAMERA_DAY VIEW_01.jpg"),
      imgAlt: "DAMAC Volta exterior view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,496,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1031.18 sq.ft",
          label: "1BR Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q2 2028",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Volta Visuals",
      slides: GALLERY,
      projectTag: "DAMAC Volta",
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
            "Total Area": "1031.18 sq.ft",
            "Starting Price": "AED 2,496,000",
            Handover: "Q2 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "2358.91 sq.ft",
            "Starting Price": "AED 6,535,000",
            Handover: "Q2 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym & Fitness", icon: "💪", color: "#d7b46a" },
        { label: "Wellness Lifestyle", icon: "🧘", color: "#d7b46a" },
        { label: "Premium Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Prime Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC Volta",
      address: "Business Bay, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.1973752,
      lng: 55.2673895,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "Central Dubai access from a connected address." },
        { icon: "🚗", text: "Fast routes to major business & lifestyle hubs." },
        { icon: "🛣️", text: "Strong connectivity to key city corridors." },
      ],
    },

    cta: {
      title: "Interested in Volta?",
      description:
        "Share your details to receive the latest availability, pricing guidance, and the official brochures for DAMAC Volta.",
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
        "داماك فولتا | شقق 1 غرفة و4 غرف في الخليج التجاري دبي | 50/50 | Q2 2028",
      description:
        "داماك فولتا برج سكني عصري مناسب لمن يريد عنوانًا متصلًا بأهم مناطق دبي. استعرض الكتيّبات الرسمية، معرض الصور الكامل، صورة خطة الدفع، ومخططات 1 غرفة و4 غرف.",
      keywords:
        "داماك فولتا, شقق الخليج التجاري, شقة غرفة نوم دبي, شقة 4 غرف دبي, داماك, خطة دفع 50/50, الربع الثاني 2028",
      canonical: "/properties/apartments/damac/volta",
    },

    project: {
      name: "داماك فولتا",
      developer: "داماك العقارية",
      location: "الخليج التجاري، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "2,496,000 درهم",
      completionDate: "الربع الثاني 2028",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "1 غرفة و4 غرف",
    },

    hero: {
      backgroundUrl: cdn("SZR_04_NIGHT.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "عنوان برج سكني حديث ضمن أسلوب حياة متصل في دبي",
      paragraphs: [
        "مشروع داماك فولتا موجّه لمن يبحث عن تجربة سكنية في برج عصري مع وصول عملي وسهل لأهم مناطق دبي. الفكرة الأساسية هنا هي الجمع بين السكن الحديث والموقع المتصل، ما يجعله خيارًا مناسبًا للسكن وكذلك للاستثمار في منطقة ذات طلب قوي.",
        "هذه الصفحة مبنية مباشرة على ملفات BunnyCDN التي رفعتها: كتيّبان رسميان بصيغة PDF (الكتيّب الرقمي + كتيّب مخططات الطوابق)، معرض صور كامل، وصورة خطة الدفع—مع الحفاظ على أسماء الملفات كما هي تمامًا دون أي تعديل.",
        "ستجد أدناه مخطط 1 غرفة ومخطط 4 غرف بصيغة 4 حقول فقط كما اعتمدنا (إجمالي المساحة / السعر / موعد التسليم / خطة الدفع)، بالإضافة إلى قسم صور شامل لعرض المحتوى بسرعة.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب الرقمي",
          url: BROCHURE_DIGITAL_PDF,
          type: "main",
          category: "نظرة عامة",
          fileName: "Volta BROCHURE 4sep23-Digital.pdf",
          description: "الكتيّب الرسمي الرقمي (EN)",
        },
        {
          title: "تحميل مخططات الطوابق (PDF)",
          url: BROCHURE_FLOORPLANS_PDF,
          type: "secondary",
          category: "مخططات الطوابق",
          fileName: "Volta BROCHURE V2 11sep23-Floor plan.pdf",
          description: "كتيّب مخططات الطوابق (PDF)",
        },
        {
          title: "عرض خطة الدفع",
          url: PAYMENT_PLAN_IMAGE,
          type: "secondary",
          category: "خطة الدفع",
          fileName: "PAYMENT PLAN.jpg",
          description: "صورة خطة الدفع",
        },
      ],
      imgUrl: cdn("CAMERA_DAY VIEW_01.jpg"),
      imgAlt: "واجهة داماك فولتا",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,496,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1031.18 قدم²",
          label: "مساحة 1 غرفة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q2 2028",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "داماك فولتا",
    },

    // ✅ نفس البنية + type="apartments" + مفاتيح عربية (وبنفس 4 حقول فقط)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "1031.18 قدم مربع",
            "السعر الابتدائي": "2,496,000 درهم",
            "موعد التسليم": "الربع الثاني 2028",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "2358.91 قدم مربع",
            "السعر الابتدائي": "6,535,000 درهم",
            "موعد التسليم": "الربع الثاني 2028",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "أسلوب حياة صحي", icon: "🧘", color: "#d7b46a" },
        { label: "لوبي راقٍ", icon: "🏢", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "داماك فولتا",
      address: "الخليج التجاري، دبي، الإمارات",
      lat: 25.1973752,
      lng: 55.2673895,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "وصول عملي لمركز دبي والمناطق المحورية." },
        { icon: "🚗", text: "طرق سريعة نحو أهم وجهات الأعمال والحياة." },
        { icon: "🛣️", text: "اتصال قوي بمحاور دبي الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم بمشروع فولتا؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وإرشادات الأسعار وروابط الكتيّبات الرسمية لمشروع داماك فولتا.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacVoltaData;
