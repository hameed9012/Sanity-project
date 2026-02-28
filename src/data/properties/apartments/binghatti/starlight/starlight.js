// src/data/properties/apartments/binghatti/starlight.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/starlight
// ✅ Uses ONLY the exact filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Floorplan image uses EXACT filename: "Binghatti Starlight 2br floor plan.webp"
// ✅ Location lat/lng taken from your Google Maps pin
// ✅ Handover + Payment Plan are the same for all units (Q1 2026 | 70% / 30%)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/starlight";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-starlight-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-starlight-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-starlight-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-starlight-location.pdf");

// ✅ Floor plan image (EXACT filename)
const FP_2BR = cdn("Binghatti Starlight 2br floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("BINST_01_Aerial_A_High.jpg"),
  cdn("BINST_02_Aerial_B_High.jpg"),
  cdn("BINST_03_Aerial_C_High.jpg"),
  cdn("BINST_03_Aerial_C_High_Crop_02.jpg"),
];

// ✅ Hero / Intro images (choose from real files)
const HERO_BG = cdn("BINST_02_Aerial_B_High.jpg");
const INTRO_MAIN = cdn("BINST_03_Aerial_C_High.jpg");

// ✅ Your standard Binghatti square image
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Shared values (same for all units)
const HANDOVER_EN = "Q1 2026";
const PAYMENT_PLAN_EN = "70% / 30%";
const HANDOVER_AR = "الربع الأول 2026";
const PAYMENT_PLAN_AR = "70% / 30%";

export const starlightData = {
  en: {
    seo: {
      title:
        "Binghatti Starlight | 2BR Apartments in Al Jaddaf, Dubai | Q1 2026 | 70/30 Payment Plan",
      description:
        "Binghatti Starlight in Al Jaddaf offers a refined residential address with strong connectivity across Dubai. View the official brochure, project facts, location PDF, floor plans PDF, and your exact 2BR floor plan image—plus the complete aerial gallery.",
      keywords:
        "Binghatti Starlight, Al Jaddaf, Dubai apartments, 2BR, Q1 2026, 70/30 payment plan, Binghatti",
      canonical: "/properties/apartments/binghatti/starlight",
    },

    project: {
      name: "Binghatti Starlight",
      developer: "Binghatti",
      location: "Al Jaddaf, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,016,300",
      completionDate: HANDOVER_EN,
      paymentPlan: "70/30",
      type: "Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "A CONNECTED ADDRESS IN AL JADDAF",
      paragraphs: [
        "Binghatti Starlight is positioned in Al Jaddaf—an increasingly desirable Dubai district known for its central connectivity and proximity to key city anchors. The area offers practical daily access while staying close to major business and lifestyle hubs.",
        "With Binghatti’s signature architectural identity, the project focuses on lifestyle-forward living supported by strong road links and neighborhood convenience.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Project Location", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Starlight aerial render",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,016,300",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1190.49 sqft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: HANDOVER_EN,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Binghatti Starlight Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Starlight",
    },

    // ✅ FloorPlans: ONLY the 4 fields you approved
    // ✅ Handover + Payment Plan are the same for all units
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1190.49 sqft",
            "Starting Price": "AED 2,016,300",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_EN,
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
        { label: "Central Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Al Jaddaf Address", icon: "📍", color: "#d7b46a" },
        { label: "Modern Architecture", icon: "✨", color: "#d7b46a" },
        { label: "Lifestyle Living", icon: "🏡", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Starlight",
      address: "Binghatti Starlight, Al Jaddaf, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.2126111,
      lng: 55.3195278,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Fast access to key Dubai road corridors." },
        {
          icon: "🏙️",
          text: "Close to major lifestyle and business districts.",
        },
        { icon: "🛍️", text: "Everyday services and conveniences nearby." },
      ],
    },

    cta: {
      title: "Interested in Binghatti Starlight?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Starlight.",
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
        "بن غاطي ستارلايت | شقق غرفتين نوم في الجداف دبي | الربع الأول 2026 | خطة دفع 70/30",
      description:
        "بن غاطي ستارلايت في الجداف دبي يقدّم عنوانًا سكنيًا متصلًا بالمدينة مع سهولة الوصول إلى الوجهات الرئيسية. استعرض الكتيّب وملف الحقائق وملف الموقع ومخططات الطوابق وصورة مخطط 2BR ومعرض الصور.",
      keywords:
        "بن غاطي ستارلايت, الجداف, دبي, شقق غرفتين نوم, الربع الأول 2026, 70/30",
      canonical: "/properties/apartments/binghatti/starlight",
    },

    project: {
      name: "بن غاطي ستارلايت",
      developer: "بن غاطي",
      location: "الجداف، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "2,016,300 درهم",
      completionDate: HANDOVER_AR,
      paymentPlan: "70/30",
      type: "شقق سكنية",
      units: "غرفتين نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "عنوان متصل بدبي في منطقة الجداف",
      paragraphs: [
        "يقع مشروع بن غاطي ستارلايت في الجداف—إحدى المناطق التي تشهد طلبًا متزايدًا بفضل موقعها المركزي وسهولة الوصول إلى وجهات دبي الرئيسية. تتميز الجداف بكونها عملية للحياة اليومية وقريبة من المحاور الحيوية.",
        "يعكس المشروع هوية بن غاطي المعمارية المميزة مع تركيز على أسلوب حياة عصري ضمن موقع قوي من ناحية الاتصال والتنقل.",
        "ستجد أدناه الكتيّب الرسمي وملف الحقائق وملف الموقع وملف مخططات الطوابق الكامل، بالإضافة إلى صورة مخطط غرفتين نوم ومعرض الصور—وجميع الروابط مبنية على أسماء الملفات كما هي لضمان عمل الصفحة 100% دون أي تعديلات.",
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
      imgAlt: "تصوّر جوي لمشروع بن غاطي ستارلايت",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,016,300 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1190.49 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: HANDOVER_AR,
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي ستارلايت",
    },

    // ✅ AR FloorPlans: same structure + Arabic keys (4 fields only)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1190.49 قدم مربع",
            "السعر الابتدائي": "2,016,300 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_AR,
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
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "موقع الجداف", icon: "📍", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "أسلوب حياة", icon: "🏡", color: "#d7b46a" },
        { label: "قيمة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي ستارلايت",
      address: "بن غاطي ستارلايت، الجداف، دبي، الإمارات",
      lat: 25.2126111,
      lng: 55.3195278,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "وصول سريع لمحاور الطرق الرئيسية." },
        { icon: "🏙️", text: "قريب من مناطق الأعمال ونقاط الجذب." },
        { icon: "🛍️", text: "بالقرب من خدمات واحتياجات يومية." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي ستارلايت؟",
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

export default starlightData;
