// src/data/properties/apartments/tiger/volga/volgaTigerData.js
// ✅ 100% Blueprint-aligned (same strict rules)
// - Uses your Bunny CDN pull zone + folder structure
// - cdn() helper with encodeURIComponent
// - paymentPlan exists in project + inside EVERY floor plan specs (EN: paymentPlan / AR: "خطة الدفع")
// - floorPlans shape: { type, plans, brochureHref }
// - each plan includes: bedrooms, specs.Unit, images[], features[]
// - Includes both plans (No PHPP + PHPP 24M)
// - Uses your exact Bunny filenames
// - Remark: Fully Furnished + Private swimming pool in each apartment balcony

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const VOLGA_DIR = "/tiger/volga";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${VOLGA_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Volga Tower";
const PROJECT_NAME_AR = "برج فولغا";

const LOCATION_EN = "Jumeirah Village Triangle (JVT), Dubai, UAE";
const LOCATION_AR = "مثلث قرية جميرا (JVT)، دبي، الإمارات";

const HANDOVER_EN = "Q4 2026";
const HANDOVER_AR = "الربع الرابع 2026";

const REMARK_EN =
  "Fully Furnished + Private swimming pool in each apartment balcony";
const REMARK_AR = "مفروش بالكامل + مسبح خاص في شرفة كل شقة";

const FURNISHING_EN = "Fully Furnished";
const FURNISHING_AR = "مفروش بالكامل";

// Payment plan options (your exact text, normalized)
const PAYMENT_PLANS_EN = {
  noPhpp: "60% / 40% on completion",
  phpp24: "70% / 30% (24 months)",
};

const PAYMENT_PLANS_AR = {
  noPhpp: "60% / 40% عند التسليم (بدون خطة بعد التسليم)",
  phpp24: "70% / 30% خطة بعد التسليم (24 شهر)",
};

// ✅ Blueprint: choose ONE default plan shown on cards
const PAYMENT_PLAN_PRIMARY_EN = PAYMENT_PLANS_EN.noPhpp;
const PAYMENT_PLAN_PRIMARY_AR = PAYMENT_PLANS_AR.noPhpp;

// ========================
// PDFs / Docs (exact filenames)
// ========================
const BROCHURE_PDF = cdn("Volga Tower JVT (2).pdf");

// ========================
// Media (exact filenames)
// ========================
const HERO_VIDEO = cdn("Volga Video (2).mp4");

// ========================
// Gallery images (exact filenames)
// ========================
const HERO_IMAGE = cdn("Outdoor 002.jpg");

const GALLERY_SLIDES = [
  HERO_IMAGE,

  cdn("01.jpg"),
  cdn("02.jpg"),
  cdn("03.jpg"),
  cdn("03 (1).jpg"),
  cdn("04.jpg"),
  cdn("05.jpg"),
  cdn("06.jpg"),
  cdn("07.jpg"),
  cdn("08.jpg"),
  cdn("10.jpg"),

  cdn("Outdoor 001 (2).jpg"),
  cdn("Outdoor01 0001.jpg"),
  cdn("Outdoor01 0002.jpg"),

  cdn("Gym_View_01.jpg"),
  cdn("Gym_View_02.jpg"),
  cdn("Gym_View_05.jpg"),
  cdn("Gym_View_06.jpg"),
  cdn("Gym_View_07.jpg"),
  cdn("Gym_View_08.jpg"),

  cdn("CAMERA 01.jpg"),
  cdn("CAMERA 02.jpg"),
  cdn("CAMERA 03.jpg"),
  cdn("CAMERA 04.jpg"),
  cdn("CAMERS 5.png"),

  cdn("parking 1.jpg"),

  cdn("1Bk K.jpg"),
  cdn("Villa01_3D_DAY0000.jpg"),
  cdn("njnokmVilla01_3D_DAY0000.jpg"),

  cdn("124566999.jpg"),
  cdn("12578999.jpg"),
  cdn("1478.jpg"),
  cdn("4532111.jpg"),
  cdn("gvbvjhbih.jpg"),
  cdn("ugvuhvh.jpg"),
  cdn("utftyfvuy.jpg"),
  cdn("hbuhb.jpg"),

  // NOTE: .tif files are listed in Bunny but many web setups don't serve tif well.
  // If your site supports tif, you can add them. Otherwise, keep them out to avoid broken images.
  // cdn("28.tif"), cdn("29.tif"), ... etc
];

// Fallback images for plans (no explicit floorplan image files listed)
const FP_1BR_IMG = cdn("1Bk K.jpg");
const FP_2BR_IMG = cdn("CAMERA 02.jpg");
const FP_3BR_IMG = cdn("CAMERA 03.jpg");
const FP_4BR_IMG = cdn("CAMERA 04.jpg");

export const volgaTigerData = {
  // =========================
  // ENGLISH
  // =========================
  en: {
    seo: {
      title:
        "Volga Tower by Tiger | 1–4 Bedroom Apartments in JVT | Fully Furnished | Private Pool Balcony",
      description:
        "Volga Tower by Tiger in JVT offers fully furnished 1–4 bedroom apartments with private swimming pool on each apartment balcony, plus flexible payment plan options.",
      keywords:
        "Volga Tower, Tiger, JVT, Dubai apartments, fully furnished, private pool balcony, 1 bedroom, 2 bedroom, 3 bedroom, 4 bedroom, payment plan",
      canonical: "/properties/apartments/tiger/volga-tower",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: "Tiger",
      location: LOCATION_EN,
      status: "Off-Plan",
      startingPrice: "AED 1,700,000",
      completionDate: HANDOVER_EN,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_EN,

      type: "Apartments",
      units: "1–4 Bedroom Apartments",
      furnishing: FURNISHING_EN,
      remark: REMARK_EN,

      paymentPlanOptions: PAYMENT_PLANS_EN,
    },

    hero: {
      backgroundUrl: HERO_VIDEO, // ✅ video hero
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["JVT", "Fully Furnished", "Private Pool Balcony"],
    },

    intro: {
      title: "Luxury Living in JVT with Private Pool Balcony",
      paragraphs: [
        "Volga Tower by Tiger is a premium residential project in JVT featuring fully furnished apartments with a private swimming pool in each apartment balcony.",
        "Choose from 1, 2, 3, or 4 bedroom layouts with strong sizes and competitive pricing.",
        `Remark: ${REMARK_EN}.`,
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "Brochure",
          fileName: "Volga Tower JVT (2).pdf",
          description: "Official brochure for Volga Tower (PDF).",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/volga/4532111.jpg`,
      imgAlt: "Volga Tower by Tiger (JVT)",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏊",
          value: "Private Pool",
          label: "Balcony",
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
          value: "2 Plans",
          label: "Payment",
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
            "Total Area": "783 SQ. FT",
            "Starting Price": "AED 1,700,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_1BR_IMG],
          features: [FURNISHING_EN, "Private Pool Balcony"],
        },
        {
          id: "2bhk",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            Unit: "2 BHK",
            "Total Area": "1,188 SQ. FT",
            "Starting Price": "AED 2,500,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_2BR_IMG],
          features: [FURNISHING_EN, "Private Pool Balcony"],
        },
        {
          id: "3bhk",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            Unit: "3 BHK",
            "Total Area": "1,876 SQ. FT",
            "Starting Price": "AED 3,500,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_3BR_IMG],
          features: [FURNISHING_EN, "Private Pool Balcony"],
        },
        {
          id: "4bhk",
          title: "4 Bedroom Apartment",
          bedrooms: 4,
          specs: {
            Unit: "4 BHK",
            "Total Area": "2,234 SQ. FT",
            "Starting Price": "AED 4,490,000",
            Handover: HANDOVER_EN,
            paymentPlan: PAYMENT_PLAN_PRIMARY_EN,
          },
          images: [FP_4BR_IMG],
          features: [FURNISHING_EN, "Private Pool Balcony"],
        },
      ],
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Private Pool Balcony", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Outdoor Areas", icon: "🌿", color: "#d7b46a" },
        { label: "Fully Furnished", icon: "🛋️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: LOCATION_EN,
      // Placeholder until you share exact pin
      lat: 25.054,
      lng: 55.221,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "Located in JVT, Dubai" },
        { icon: "🛣️", text: "Easy access to key Dubai districts" },
      ],
    },

    media: {
      title: "Video",
      videos: [{ title: "Volga Video", url: HERO_VIDEO }],
    },

    cta: {
      title: "Get Availability & Payment Plan",
      description:
        "Contact us to receive availability, unit options, and the best applicable payment plan for Volga Tower.",
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
        "برج فولغا من تايجر | شقق 1–4 غرف في JVT | مفروش بالكامل | مسبح خاص في الشرفة",
      description:
        "برج فولغا من تايجر في مثلث قرية جميرا (JVT) يوفر شقق مفروشة بالكامل من 1 إلى 4 غرف مع مسبح خاص في شرفة كل شقة وخيارات متعددة لخطة الدفع.",
      keywords:
        "برج فولغا, تايجر, JVT, شقق دبي, مفروش بالكامل, مسبح خاص في الشرفة, 1 غرفة, 2 غرف, 3 غرف, 4 غرف, خطة الدفع",
      canonical: "/properties/apartments/tiger/volga-tower",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: "Tiger",
      location: LOCATION_AR,
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 1,700,000 درهم",
      completionDate: HANDOVER_AR,

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_PRIMARY_AR,

      type: "شقق سكنية",
      units: "شقق من 1 إلى 4 غرف",
      furnishing: FURNISHING_AR,
      remark: REMARK_AR,

      paymentPlanOptions: PAYMENT_PLANS_AR,
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
      companyName: "Tiger",
      rating: null,
      badges: ["JVT", "مفروش بالكامل", "مسبح خاص في الشرفة"],
    },

    intro: {
      title: "سكن فاخر في JVT مع مسبح خاص في الشرفة",
      paragraphs: [
        "برج فولغا من تايجر مشروع سكني مميز في JVT يوفر شقق مفروشة بالكامل مع مسبح خاص في شرفة كل شقة.",
        "اختر من شقق 1 أو 2 أو 3 أو 4 غرف مع مساحات قوية وأسعار منافسة.",
        `ملاحظة: ${REMARK_AR}.`,
      ],
      brochures: [
        {
          title: "تحميل البروشور",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          category: "بروشور",
          fileName: "Volga Tower JVT (2).pdf",
          description: "البروشور الرسمي لبرج فولغا (PDF).",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/tiger/volga/4532111.jpg`,
      imgAlt: "برج فولغا من تايجر (JVT)",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏊",
          value: "مسبح خاص",
          label: "في الشرفة",
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
          value: "خيارين",
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
          title: "شقة غرفة واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة واحدة (1BHK)",
            "المساحة الإجمالية": "783 قدم²",
            "السعر الابتدائي": "1,700,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_1BR_IMG],
          features: [FURNISHING_AR, "مسبح خاص في الشرفة"],
        },
        {
          id: "2bhk",
          title: "شقة غرفتين",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "غرفتين (2BHK)",
            "المساحة الإجمالية": "1,188 قدم²",
            "السعر الابتدائي": "2,500,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_2BR_IMG],
          features: [FURNISHING_AR, "مسبح خاص في الشرفة"],
        },
        {
          id: "3bhk",
          title: "شقة 3 غرف",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "3 غرف (3BHK)",
            "المساحة الإجمالية": "1,876 قدم²",
            "السعر الابتدائي": "3,500,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_3BR_IMG],
          features: [FURNISHING_AR, "مسبح خاص في الشرفة"],
        },
        {
          id: "4bhk",
          title: "شقة 4 غرف",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "4 غرف (4BHK)",
            "المساحة الإجمالية": "2,234 قدم²",
            "السعر الابتدائي": "4,490,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_PRIMARY_AR,
          },
          images: [FP_4BR_IMG],
          features: [FURNISHING_AR, "مسبح خاص في الشرفة"],
        },
      ],
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "مسبح خاص في الشرفة", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "مساحات خارجية", icon: "🌿", color: "#d7b46a" },
        { label: "مفروش بالكامل", icon: "🛋️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address: LOCATION_AR,
      lat: 25.054,
      lng: 55.221,
      zoom: 12,
      proximityFeatures: [
        { icon: "📍", text: "يقع في مثلث قرية جميرا (JVT) – دبي" },
        { icon: "🛣️", text: "سهولة الوصول إلى أهم مناطق دبي" },
      ],
    },

    media: {
      title: "فيديو",
      videos: [{ title: "فيديو فولغا", url: HERO_VIDEO }],
    },

    cta: {
      title: "احصل على التوفر وخطة الدفع",
      description:
        "تواصل معنا للحصول على التوفر وخيارات الوحدات وأفضل خطة دفع مناسبة لمشروع برج فولغا.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default volgaTigerData;
