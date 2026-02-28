// src/data/properties/apartments/tiger/altai-tower/alatiTowerTigerData.js
// ✅ 100% Blueprint-aligned
// - Uses your Bunny CDN pull zone + folder structure
// - paymentPlan exists in project + inside every floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const TIGER_ALATI_DIR = "/tiger/alati";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${TIGER_ALATI_DIR}/${encodeURIComponent(fileName)}`;

// ===== Project constants =====
const PROJECT_NAME_EN = "Altai Tower";
const PROJECT_NAME_AR = "برج التاي";

const PAYMENT_PLAN_EN = "30% DP & 70% during a month";
const PAYMENT_PLAN_AR = "30% دفعة أولى و 70% خلال شهر";

const FURNISHING_EN = "Fully Furnished";
const FURNISHING_AR = "مفروش بالكامل";

// ===== Media / Docs (exact filenames from your Bunny folder) =====
const HERO_VIDEO = cdn("altai tower video.mp4");
const BROCHURE_PDF = cdn("Altai Tower.pdf");
const HERO_IMAGE = `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`;

// ===== Gallery images (exact filenames) =====
const GALLERY_SLIDES = [
  // Apartments
  cdn("appartment revised0000.jpg"),
  cdn("appartment revised0000-2.jpg"),
  cdn("appartment revised0000-3.jpg"),
  cdn("appartment revised0000-4.jpg"),
  cdn("appartment revised0000-5.jpg"),
  cdn("appartment revised0000-7.jpg"),
  cdn("appartment revised0000-9.jpg"),
  cdn("appartment revised0000-10.jpg"),
  cdn("appartment revised0000-11.jpg"),

  // Lobby
  cdn("lobby0000.jpg"),
  cdn("lobby0000-2.jpg"),
  cdn("lobby0000-4.jpg"),
  cdn("lobby0000-5.jpg"),
  cdn("lobby0000-6.jpg"),

  // Pool
  cdn("pool0000-28.jpg"),
  cdn("pool0000-30.jpg"),
  cdn("pool0000-31.jpg"),
  cdn("pool0000-33.jpg"),
  cdn("pool0000-34.jpg"),
  cdn("pool0000-36.jpg"),

  // Studio shots (still useful in gallery)
  cdn("studio 0000-4.jpg"),
  cdn("studio 0000-5.jpg"),
];

export const altaiTowerTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Altai Tower by Tiger | 1 & 2 Bedroom Apartments | Fully Furnished",
      description:
        "Altai Tower by Tiger offers fully furnished 1 and 2 bedroom apartments with a simple payment plan: 30% down payment and 70% within a month.",
      keywords:
        "Altai Tower, Tiger, Dubai apartments, fully furnished, 1 bedroom apartment, 2 bedroom apartment, payment plan",
      canonical: "/properties/apartments/tiger/altai-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: "Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,000,000",
      completionDate: "TBA",

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_EN,

      type: "Apartments",
      units: "1 & 2 Bedroom Apartments",

      // Optional extra metadata (safe to keep if your UI reads it)
      furnishing: FURNISHING_EN,
      remark: FURNISHING_EN,
    },

    hero: {
      // ✅ video hero (if your UI supports video URLs here)
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: HERO_IMAGE,
      companyName: "Tiger",
      rating: null,
    },

    intro: {
      title: "Fully Furnished Apartments in Altai Tower",
      paragraphs: [
        "Altai Tower by Tiger offers a selection of fully furnished apartments designed for comfortable modern living.",
        "Choose from 1 bedroom and 2 bedroom layouts with competitive starting prices and clear sizing.",
        `Payment plan: ${PAYMENT_PLAN_EN}.`,
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "Brochure",
          fileName: "Altai Tower.pdf",
          description: "Official brochure PDF for Altai Tower.",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/alati/pool0000-34.jpg`,
      imgAlt: "Altai Tower by Tiger",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1M",
          label: "From",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🛋️",
          value: "Furnished",
          label: "Fully",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "30/70",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Gallery",
      slides: GALLERY_SLIDES,
      projectTag: PROJECT_NAME_EN,
    },

    // ✅ Blueprint floorPlans
    floorPlans: {
      type: "apartments",
      brochureHref: BROCHURE_PDF,
      plans: [
        {
          id: "1bhk",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            Unit: "1 BHK",
            "Total Area": "618 SQ. FT",
            "Starting Price": "AED 1,000,000",
            Handover: "Q1 2026",
            paymentPlan: PAYMENT_PLAN_EN,
          },
          // No dedicated floorplan images provided in the folder list
          // Using the best available project images so UI has visuals
          images: [cdn("altai 1br layout.webp")],
          features: [FURNISHING_EN],
        },
        {
          id: "2bhk",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            Unit: "2 BHK",
            "Total Area": "1,023 SQ. FT",
            "Starting Price": "AED 1,700,000",
            Handover: "Q1 2026",
            paymentPlan: PAYMENT_PLAN_EN,
          },
          images: [cdn("altai 2br layout.webp")],
          features: [FURNISHING_EN],
        },
      ],
    },

    amenities: {
      title: "Highlights",
      amenities: [
        { label: "Fully Furnished", icon: "🛋️", color: "#d7b46a" },
        { label: "Pool Lifestyle", icon: "🏊", color: "#d7b46a" },
        { label: "Modern Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Dubai Location", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address:
        "Street D6 - Al Barsha South Fifth - District 1 - Dubai, United Arab Emirates",
      // Exact coordinates from Google Maps link
      lat: 25.0330556,
      lng: 55.1734722,
      zoom: 17, // Increased zoom to show building detail
      proximityFeatures: [
        { icon: "📍", text: "Street D6, Al Barsha South Fifth, District 1" },
        { icon: "🚗", text: "Heart of Al Barsha district" },
        { icon: "🏙️", text: "Prime residential and commercial area" },
        { icon: "🛣️", text: "Close to Sheikh Zayed Road (E11)" },
        { icon: "🏢", text: "Near Mall of the Emirates and business hubs" },
      ],
    },

    cta: {
      title: "Want the latest availability?",
      description:
        "Contact us to receive updated pricing, unit options, and the official brochure for Altai Tower.",
      buttons: [
        { text: "Enquire Now", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // =========================
  // ARABIC
  // =========================
  ar: {
    seo: {
      title: "برج التاي من تايجر | شقق 1 و2 غرفة | مفروش بالكامل",
      description:
        "برج التاي من تايجر يوفر شقق مفروشة بالكامل (غرفة و غرفتين) مع خطة دفع واضحة: 30% دفعة أولى و70% خلال شهر.",
      keywords:
        "برج التاي, تايجر, شقق دبي, مفروش بالكامل, شقة غرفة نوم, شقة غرفتين, خطة دفع",
      canonical: "/properties/apartments/tiger/altai-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: "دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 1,000,000 درهم",
      completionDate: "الربع الأول 2026",

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_AR,

      type: "شقق سكنية",
      units: "شقق غرفة وغرفتين",
      furnishing: FURNISHING_AR,
      remark: FURNISHING_AR,
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: HERO_IMAGE,
      companyName: "Tiger",
      rating: null,
    },

    intro: {
      title: "شقق مفروشة بالكامل في برج التاي",
      paragraphs: [
        "برج التاي من تايجر يقدم خيارات سكنية مفروشة بالكامل بتصميم عصري ومريح.",
        "اختر بين شقق غرفة نوم واحدة أو غرفتين مع أسعار بداية قوية ومساحات واضحة.",
        `خطة الدفع: ${PAYMENT_PLAN_AR}.`,
      ],
      brochures: [
        {
          title: "تحميل البروشور",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "بروشور",
          fileName: "Altai Tower.pdf",
          description: "البروشور الرسمي لبرج التاي (PDF).",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/alati/pool0000-34.jpg`,
      imgAlt: "برج التاي من تايجر",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1M",
          label: "ابتداءً من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🛋️",
          value: "مفروش",
          label: "بالكامل",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "30/70",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "الصور",
      slides: GALLERY_SLIDES,
      projectTag: PROJECT_NAME_AR,
    },

    floorPlans: {
      type: "apartments",
      brochureHref: BROCHURE_PDF,
      plans: [
        {
          id: "1bhk",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "1 غرفة (1BHK)",
            "المساحة الإجمالية": "618 قدم²",
            "السعر الابتدائي": "1,000,000 درهم",
            "موعد التسليم": "الربع الأول 2026",
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [cdn("altai 1br layout.webp")],
          features: [FURNISHING_AR],
        },
        {
          id: "2bhk",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "2 غرف (2BHK)",
            "المساحة الإجمالية": "1,023 قدم²",
            "السعر الابتدائي": "1,700,000 درهم",
            "موعد التسليم": "الربع الأول 2026",
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [cdn("altai 2br layout.webp")],
          features: [FURNISHING_AR],
        },
      ],
    },

    amenities: {
      title: "أبرز المزايا",
      amenities: [
        { label: "مفروش بالكامل", icon: "🛋️", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "لوبي عصري", icon: "🏢", color: "#d7b46a" },
        { label: "موقع دبي", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address:
        "شارع D6 - البرشاء الجنوبي الخامس - المنطقة 1 - دبي، الإمارات العربية المتحدة",
      // الإحداثيات الدقيقة من رابط خرائط جوجل
      lat: 25.0330556,
      lng: 55.1734722,
      zoom: 17, // تكبير لرؤية تفاصيل المبنى
      proximityFeatures: [
        { icon: "📍", text: "شارع D6، البرشاء الجنوبي الخامس، المنطقة 1" },
        { icon: "🚗", text: "في قلب منطقة البرشاء" },
        { icon: "🏙️", text: "منطقة سكنية وتجارية مميزة" },
        { icon: "🛣️", text: "قرب شارع الشيخ زايد (E11)" },
        { icon: "🏢", text: "قرب مول الإمارات والمراكز التجارية" },
      ],
    },

    cta: {
      title: "مهتم ببرج التاي؟",
      description:
        "تواصل معنا للحصول على أحدث التوفر والأسعار والبروشور الرسمي لبرج التاي.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default altaiTowerTigerData;
