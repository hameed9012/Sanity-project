// src/data/properties/apartments/tiger/ananda/anandaTigerData.js
// ✅ 100% Blueprint-aligned (same as your other files)
// - Uses your Bunny CDN pull zone + folder structure
// - Has cdn() helper with encodeURIComponent
// - paymentPlan exists in project + inside EVERY floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]
// - Includes the 3 payment plan options + January Offer as an explicit option

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const ANANDA_DIR = "/tiger/ananda";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${ANANDA_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Ananda Residences";
const PROJECT_NAME_AR = "أناندا ريزيدنس";

const LOCATION_EN = "Motor City, Dubai, UAE";
const LOCATION_AR = "موتور سيتي، دبي، الإمارات";

const HANDOVER_EN = "Q4 2028";
const HANDOVER_AR = "الربع الرابع 2028";

const FURNISHING_EN = "Fully Furnished";
const FURNISHING_AR = "مفروش بالكامل";

// Payment plan options (your exact text, normalized)
const PAYMENT_PLANS_EN = {
  noPhpp: "60% / 40% on completion",
  phpp24: "70% / 30% PHPP (24 months)",
  januaryOffer: "January Offer: 52% during construction – 48% over 48 months",
};

const PAYMENT_PLANS_AR = {
  noPhpp: "60% / 40% عند التسليم (بدون خطة بعد التسليم)",
  phpp24: "70% / 30% خطة بعد التسليم (24 شهر)",
  januaryOffer: "عرض يناير: 52% أثناء الإنشاء – 48% على 48 شهر",
};

// ✅ Blueprint: pick ONE primary plan for project.paymentPlan
// You can change this later if you want a different default shown on cards.
const PAYMENT_PLAN_PRIMARY_EN = PAYMENT_PLANS_EN.januaryOffer;
const PAYMENT_PLAN_PRIMARY_AR = PAYMENT_PLANS_AR.januaryOffer;

// ========================
// PDFs / Docs (exact filenames)
// ========================
const BROCHURE_PDF = cdn("ANANDA BROCHURE_UPDATED 17.09.pdf");
const FLOORPLANS_PDF = cdn("Ananda _ Floor Plans_ (1).pdf");
const PARKING_PLAN_PDF = cdn("PARKING_Plan - Ananda Residences.pdf");
const SPECS_PDF = cdn("Product Specification Inclusion 21oct24 v1.pdf");

// ========================
// Media
// ========================
const HERO_VIDEO = cdn("Ananda Residences - 2K_REEL.mp4");
const YT_VIDEO = cdn("YT_Ananda Residences - 2K.mp4");
const REEL_NO_CONTACT = cdn("Without Contact No_Ananda Residences_ Reel.mp4");

// Logos / Key visuals
const HERO_IMAGE = cdn("Ananda Towers - HIGH QUALITY (COMPRESSED).jpg");
const HERO_IMAGE_ALT = cdn("Ananda Towers - HIGH QUALITY Ve.jpg");
const LOGO_SVG = cdn("Ananda Residences - SVG.svg");
const LOGO_PNG = cdn("Ananda Residences - PNG.png");
const LOGO_WHITE = cdn("Ananda Residences - White Logo - PNG.png");

// Gallery images
const GALLERY_SLIDES = [
  HERO_IMAGE,
  HERO_IMAGE_ALT,

  cdn("Lobby 1.jpg"),
  cdn("Lobby 2.jpg"),
  cdn("Lobby 3.jpg"),
  cdn("Lobby 4.jpg"),

  cdn("Living (1).jpg"),
  cdn("Living (2).jpg"),
  cdn("Living (3).jpg"),

  cdn("BED.jpg"),
  cdn("Terrace 1.jpg"),
  cdn("Terrace 2.jpg"),

  cdn("Gym 1.png"),
  cdn("Gym 2.png"),

  cdn("B.jpg"),
  cdn("C1.jpg"),
];

// Fallback images for plans (since you didn’t list plan PNGs/JPGs for each unit)
const FP_STUDIO_IMG = cdn("ananda studio layout.webp");
const FP_1BR_IMG = cdn("ananda 1br layout.webp");
const FP_2BR_IMG = cdn("aananda 2br layout.png");

export const anandaTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Ananda Residences by Tiger | Studio, 1 & 2 Bedroom Apartments in Motor City | Handover Q4 2028",
      description:
        "Ananda Residences by Tiger in Motor City offers fully furnished Studio, 1BR, and 2BR apartments with multiple payment plan options including a January offer and handover in Q4 2028.",
      keywords:
        "Ananda Residences, Tiger, Motor City, Dubai apartments, fully furnished, studio apartment, 1 bedroom, 2 bedroom, payment plan, Q4 2028",
      canonical: "/properties/apartments/tiger/ananda-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: LOCATION_EN,
      status: "Off-Plan",
      startingPrice: "AED 775,000",
      completionDate: HANDOVER_EN,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_EN,

      type: "Apartments",
      units: "Studio, 1 & 2 Bedroom Apartments",
      furnishing: FURNISHING_EN,
      remark: FURNISHING_EN,

      // Extra: show all available plans if your UI renders it
      paymentPlanOptions: PAYMENT_PLANS_EN,
    },

    hero: {
      backgroundUrl: HERO_VIDEO, // ✅ video hero
      squareImageUrl: LOGO_PNG,
      companyName: "Tiger",
      rating: null,
      badges: ["Motor City", "Fully Furnished", "Handover Q4 2028"],
    },

    intro: {
      title: "Fully Furnished Living in Motor City",
      paragraphs: [
        "Ananda Residences by Tiger is a fully furnished residential address in Motor City, Dubai, offering modern interiors, premium lifestyle amenities, and flexible payment options.",
        "Choose from Studio, 1 Bedroom, or 2 Bedroom layouts with competitive entry prices and practical sizes.",
        `Handover: ${HANDOVER_EN}.`,
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "Brochure",
          fileName: "ANANDA BROCHURE_UPDATED 17.09.pdf",
          description: "Official brochure for Ananda Residences.",
        },
        {
          title: "Download Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "floorplans",
          icon: "📐",
          color: "#d7b46a",
          category: "Floor Plans",
          fileName: "Ananda _ Floor Plans_ (1).pdf",
          description: "Floor plan PDF for unit layouts.",
        },
        {
          title: "Product Specifications (PDF)",
          url: SPECS_PDF,
          type: "specs",
          icon: "🧾",
          color: "#d7b46a",
          category: "Specifications",
          fileName: "Product Specification Inclusion 21oct24 v1.pdf",
          description: "Inclusions and product specifications document.",
        },
        {
          title: "Parking Plan (PDF)",
          url: PARKING_PLAN_PDF,
          type: "parking",
          icon: "🅿️",
          color: "#d7b46a",
          category: "Parking",
          fileName: "PARKING_Plan - Ananda Residences.pdf",
          description: "Parking layout plan PDF.",
        },
      ],
      imgUrl: HERO_IMAGE,
      imgAlt: "Ananda Residences in Motor City by Tiger",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: HANDOVER_EN,
          label: "Handover",
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
          value: "Multiple",
          label: "Plans",
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
      brochureHref: FLOORPLANS_PDF,
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO",
            "Total Area": "320 SQ. FT",
            "Starting Price": "AED 775,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_STUDIO_IMG],
          features: [FURNISHING_EN],
        },
        {
          id: "1bhk",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            Unit: "1 BHK",
            "Total Area": "746 SQ. FT",
            "Starting Price": "AED 1,290,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_1BR_IMG],
          features: [FURNISHING_EN],
        },
        {
          id: "2bhk",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            Unit: "2 BHK",
            "Total Area": "1,214 SQ. FT",
            "Starting Price": "AED 1,800,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_2BR_IMG],
          features: [FURNISHING_EN],
        },
      ],
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Modern Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Terraces", icon: "🌇", color: "#d7b46a" },
        { label: "Fully Furnished", icon: "🛋️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: LOCATION_EN,
      // Placeholder until you share exact pin
      lat: 25.044,
      lng: 55.238,
      zoom: 12,
      proximityFeatures: [
        { icon: "🏎️", text: "Located in Motor City, Dubai" },
        { icon: "🛣️", text: "Convenient access to key Dubai districts" },
      ],
    },

    media: {
      title: "Videos",
      videos: [
        { title: "Main Reel (2K)", url: HERO_VIDEO },
        { title: "YouTube Video (2K)", url: YT_VIDEO },
        { title: "Reel (No Contact)", url: REEL_NO_CONTACT },
      ],
    },

    cta: {
      title: "Get Availability & Latest Offers",
      description:
        "Contact us to receive current availability, the best applicable payment plan, and all official PDFs for Ananda Residences.",
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
      title:
        "أناندا ريزيدنس من تايجر | استوديو، غرفة وغرفتين في موتور سيتي | التسليم Q4 2028",
      description:
        "أناندا ريزيدنس من تايجر في موتور سيتي يوفر شقق مفروشة بالكامل (استوديو، غرفة، غرفتين) مع خيارات متعددة لخطة الدفع وعرض يناير والتسليم في الربع الرابع 2028.",
      keywords:
        "أناندا ريزيدنس, تايجر, موتور سيتي, شقق دبي, مفروش بالكامل, استوديو, غرفة نوم, غرفتين, خطة الدفع, الربع الرابع 2028",
      canonical: "/properties/apartments/tiger/ananda-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: LOCATION_AR,
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 775,000 درهم",
      completionDate: HANDOVER_AR,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_AR,

      type: "شقق سكنية",
      units: "استوديو، غرفة وغرفتين",
      furnishing: FURNISHING_AR,
      remark: FURNISHING_AR,

      paymentPlanOptions: PAYMENT_PLANS_AR,
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: LOGO_WHITE,
      companyName: "Tiger",
      rating: null,
      badges: ["موتور سيتي", "مفروش بالكامل", "التسليم Q4 2028"],
    },

    intro: {
      title: "سكن مفروش بالكامل في موتور سيتي",
      paragraphs: [
        "أناندا ريزيدنس من تايجر هو مشروع سكني مفروش بالكامل في موتور سيتي، دبي، بتصميم عصري ومرافق نمط حياة مميزة وخيارات دفع مرنة.",
        "اختر من استوديو أو شقة غرفة نوم أو شقة غرفتين مع أسعار بداية قوية ومساحات عملية.",
        `التسليم: ${HANDOVER_AR}.`,
      ],
      brochures: [
        {
          title: "تحميل البروشور",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "بروشور",
          fileName: "ANANDA BROCHURE_UPDATED 17.09.pdf",
          description: "البروشور الرسمي لمشروع أناندا ريزيدنس.",
        },
        {
          title: "تحميل مخططات الوحدات (PDF)",
          url: FLOORPLANS_PDF,
          type: "floorplans",
          icon: "📐",
          color: "#d7b46a",
          category: "مخططات",
          fileName: "Ananda _ Floor Plans_ (1).pdf",
          description: "ملف PDF لمخططات الوحدات.",
        },
        {
          title: "مواصفات المنتج (PDF)",
          url: SPECS_PDF,
          type: "specs",
          icon: "🧾",
          color: "#d7b46a",
          category: "مواصفات",
          fileName: "Product Specification Inclusion 21oct24 v1.pdf",
          description: "وثيقة المواصفات والتجهيزات المتضمنة.",
        },
        {
          title: "مخطط المواقف (PDF)",
          url: PARKING_PLAN_PDF,
          type: "parking",
          icon: "🅿️",
          color: "#d7b46a",
          category: "مواقف",
          fileName: "PARKING_Plan - Ananda Residences.pdf",
          description: "مخطط مواقف السيارات.",
        },
      ],
      imgUrl: HERO_IMAGE,
      imgAlt: "أناندا ريزيدنس في موتور سيتي من تايجر",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: HANDOVER_AR,
          label: "التسليم",
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
          value: "خيارات",
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
      brochureHref: FLOORPLANS_PDF,
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "استوديو",
            "المساحة الإجمالية": "320 قدم²",
            "السعر الابتدائي": "775,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_STUDIO_IMG],
          features: [FURNISHING_AR],
        },
        {
          id: "1bhk",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة واحدة (1BHK)",
            "المساحة الإجمالية": "746 قدم²",
            "السعر الابتدائي": "1,290,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_1BR_IMG],
          features: [FURNISHING_AR],
        },
        {
          id: "2bhk",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "غرفتين (2BHK)",
            "المساحة الإجمالية": "1,214 قدم²",
            "السعر الابتدائي": "1,800,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_2BR_IMG],
          features: [FURNISHING_AR],
        },
      ],
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "لوبي عصري", icon: "🏢", color: "#d7b46a" },
        { label: "تراسات", icon: "🌇", color: "#d7b46a" },
        { label: "مفروش بالكامل", icon: "🛋️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address: LOCATION_AR,
      lat: 25.044,
      lng: 55.238,
      zoom: 12,
      proximityFeatures: [
        { icon: "🏎️", text: "يقع في موتور سيتي، دبي" },
        { icon: "🛣️", text: "سهولة الوصول إلى أهم مناطق دبي" },
      ],
    },

    media: {
      title: "فيديوهات",
      videos: [
        { title: "الفيديو الرئيسي (2K)", url: HERO_VIDEO },
        { title: "فيديو يوتيوب (2K)", url: YT_VIDEO },
        { title: "ريل بدون رقم", url: REEL_NO_CONTACT },
      ],
    },

    cta: {
      title: "احصل على التوفر وأحدث العروض",
      description:
        "تواصل معنا للحصول على التوفر الحالي وأفضل خطة دفع مناسبة وروابط جميع ملفات PDF الرسمية لمشروع أناندا.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default anandaTigerData;
