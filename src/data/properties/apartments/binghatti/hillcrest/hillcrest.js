// src/data/properties/apartments/binghatti/hillcrest.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/hillcrest
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/hillcrest";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-hillcrest-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-hillcrest-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-hillcrest-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-hillcrest-project-location.pdf");

// Floor plan images (EXACT filenames)
const FP_STUDIO = cdn("Binghatti hillcrest studio floor plan.webp");
const FP_1BR = cdn("Binghatti hillcrest 1br floor plan.webp");
const FP_2BR = cdn("Binghatti hillcrest 2br floor plan.webp");

// Gallery (EXACT filenames)
const GALLERY = [
  cdn("01_View010000_Post copy.jpg"),
  cdn("01_View020000_Post copy.jpg"),
  cdn("01_View030000_Post copy.jpg"),
  cdn("01_View040000.jpg"),
  cdn("01_View050000.jpg"),
  cdn("01_View070000_Post.jpg"),
  cdn("250854_Binghatti_HillCrest_View01_Halfres.jpg"),
  cdn("250854_Binghatti_HillCrest_View02_Halfres.jpg"),
  cdn("250854_Binghatti_HillCrest_View03_Halfres.jpg"),
  cdn("bedroom - 03.jpg"),
  cdn("bedroom - 04.jpg"),
  cdn("Binghatti Hillcrest V2.jpg"),
  cdn("Binghatti Hillcrest V3.jpg"),
  cdn("Binghatti Hillcrest V4.jpg"),
  cdn("Binghatti Hillcrest V5.jpg"),
  cdn("Final_01.jpg"),
  cdn("Final_02.jpg"),
  cdn("Final_03.jpg"),
  cdn("living room - 01.jpg"),
  cdn("living room - 02.jpg"),
  cdn("living room - tv wall.jpg"),
];

// Hero / Intro images (real files)
const HERO_BG = cdn("01_View040000.jpg");
const INTRO_MAIN = cdn("Binghatti Hillcrest V3.jpg");

// Square image (your provided Binghatti avatar)
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// Project unit info (your data)
const HANDOVER = "Q4 2026";
const PAYMENT_PLAN = "50% / 50%";

export const hillcrestData = {
  en: {
    seo: {
      title:
        "Binghatti Hillcrest in Arjan | Studios, 1BR & 2BR Apartments | From AED 799,999",
      description:
        "Binghatti Hillcrest in Arjan offers contemporary residences designed for practical living and strong everyday comfort. Studios start from AED 799,999 with a 50% / 50% payment plan and expected handover in Q4 2026.",
      keywords:
        "Binghatti Hillcrest, Arjan, Dubai apartments, studio, 1 bedroom, 2 bedroom, Q4 2026, 50/50 payment plan",
      canonical: "/properties/apartments/binghatti/hillcrest",
    },

    project: {
      name: "Binghatti Hillcrest",
      developer: "Binghatti",
      location: "Arjan, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 799,999",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio, 1 Bedroom, 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "BINGHATTI HILLCREST — MODERN LIVING IN ARJAN",
      paragraphs: [
        "Binghatti Hillcrest is set in Arjan, a growing Dubai community known for its residential calm, steady demand, and straightforward access to key city corridors. The project is designed to balance architectural character with comfortable, liveable interiors.",
        "From studios to larger layouts, Hillcrest focuses on efficiency, natural flow, and a lifestyle that feels convenient day-to-day—whether you’re purchasing as an end-user or positioning for investment demand in a well-connected district.",
        `Studios start from AED 799,999 with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. You can also access the official brochure, project facts, location document, and floor plans below.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Document", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Hillcrest visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 799,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "359.93 sq.ft",
          label: "Studio Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Arjan",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Hillcrest Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Hillcrest",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "359.93 sq.ft",
            "Starting Price": "AED 799,999",
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
            "Total Area": "703.53 sq.ft",
            "Starting Price": "AED 1,299,999",
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
            "Total Area": "1109.55 sq.ft",
            "Starting Price": "AED 2,129,999",
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
        { label: "Contemporary Architecture", icon: "🏙️", color: "#d7b46a" },
        { label: "Resident-Friendly Layouts", icon: "🛋️", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
        { label: "Community Lifestyle", icon: "🏡", color: "#d7b46a" },
        { label: "Strong Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Hillcrest",
      address: "Binghatti Hillcrest, Arjan, Dubai, UAE",
      lat: 25.0665625,
      lng: 55.2339375,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Direct access to major routes connecting key Dubai districts.",
        },
        {
          icon: "🏡",
          text: "Arjan community atmosphere with growing residential demand.",
        },
        { icon: "🛍️", text: "Nearby daily services and lifestyle essentials." },
      ],
    },

    cta: {
      title: "Interested in Binghatti Hillcrest?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Hillcrest.",
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
        "بن غاطي هيلكريست في أرجان | استوديو و1 و2 غرفة | يبدأ من 799,999 درهم",
      description:
        "بن غاطي هيلكريست في أرجان يقدّم شققًا عصرية بتصميم عملي يركز على الراحة وسهولة الحياة اليومية. يبدأ الاستوديو من 799,999 درهم مع خطة دفع 50% / 50% وتسليم متوقع في الربع الرابع 2026.",
      keywords:
        "بن غاطي هيلكريست, أرجان, شقق دبي, استوديو, غرفة نوم, غرفتين, Q4 2026, خطة دفع 50/50",
      canonical: "/properties/apartments/binghatti/hillcrest",
    },

    project: {
      name: "بن غاطي هيلكريست",
      developer: "بن غاطي",
      location: "أرجان، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "799,999 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "استوديو، غرفة نوم، غرفتان",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي هيلكريست — أسلوب حياة عصري في أرجان",
      paragraphs: [
        "يقع مشروع بن غاطي هيلكريست في أرجان، وهي منطقة سكنية واعدة تتميز بالهدوء وسهولة الوصول إلى محاور الطرق الرئيسية في دبي. يجمع المشروع بين الطابع المعماري المميز والمساحات الداخلية المصممة للراحة.",
        "يقدّم المشروع خيارات متعددة من الاستوديو إلى الشقق الأكبر، مع تركيز واضح على التخطيط العملي وسلاسة الحركة داخل الوحدة لتناسب السكن اليومي أو الاستثمار في منطقة ذات طلب متزايد.",
        `يبدأ الاستوديو من 799,999 درهم مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. يمكنك أيضًا تحميل الكتيّب الرسمي وملف الحقائق وملف الموقع ومخططات الطوابق أدناه.`,
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
      imgAlt: "صور بن غاطي هيلكريست",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "799,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "359.93 قدم²",
          label: "مساحة الاستوديو",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "أرجان",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي هيلكريست",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "359.93 قدم مربع",
            "السعر الابتدائي": "799,999 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "703.53 قدم مربع",
            "السعر الابتدائي": "1,299,999 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1109.55 قدم مربع",
            "السعر الابتدائي": "2,129,999 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "50% / 50%",
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
        { label: "تصميم معماري عصري", icon: "🏙️", color: "#d7b46a" },
        { label: "تخطيطات مريحة", icon: "🛋️", color: "#d7b46a" },
        { label: "خدمات يومية قريبة", icon: "🛍️", color: "#d7b46a" },
        { label: "حياة مجتمعية", icon: "🏡", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي هيلكريست",
      address: "بن غاطي هيلكريست، أرجان، دبي، الإمارات",
      lat: 25.0665625,
      lng: 55.2339375,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول لمحاور الطرق الرئيسية في دبي." },
        { icon: "🏡", text: "منطقة أرجان بطابع سكني وطلب متزايد." },
        { icon: "🛍️", text: "بالقرب من الخدمات والمتاجر والاحتياجات اليومية." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي هيلكريست؟",
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

export default hillcrestData;
