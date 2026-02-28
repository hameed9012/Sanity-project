// src/data/properties/apartments/binghatti/titania.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/titania
// ✅ Uses ONLY the exact filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Floorplan images use EXACT filenames you listed
// ✅ Location lat/lng taken from your Google Maps pin
// ✅ Handover + Payment Plan are the same for all units (Q1 2027 | 70% / 30%)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/titania";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs (exact filenames)
const BROCHURE_PDF = cdn("binghatti-titania-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-titania-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-titania-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-titania-project-location.pdf");

// ✅ Floor plan images (exact filenames)
const FP_STUDIO = cdn("Binghatti titania studio floor plan.webp");
const FP_1BR = cdn("Binghatti titania 1br floor plan.webp");
const FP_2BR = cdn("Binghatti titania 2be floor plan.webp");

// ✅ Gallery files (ONLY your listed images; excludes PDFs + floorplans + .DS_Store)
const GALLERY = [
  cdn("01_View010000_Logo2.jpg"),
  cdn("01_View030000_Post.jpg"),
  cdn("01_View040000_Logo01.jpg"),
  cdn("01_View050000_Post.jpg"),
  cdn("01_View060000_Logo03.jpg"),
  cdn("1.jpg"),
  cdn("1.png"),
  cdn("2.png"),
  cdn("3.png"),
  cdn("4.png"),
  cdn("5.png"),
  cdn("6.png"),
  cdn("7.png"),
  cdn("8.png"),
  cdn("9.png"),
  cdn("10.png"),
  cdn("11.png"),
  cdn("12.png"),
  cdn("13.png"),
  cdn("Binghatti Titania V1.jpg"),
  cdn("Binghatti Titania V2.jpg"),
  cdn("Binghatti Titania V3.jpg"),
  cdn("Binghatti Titania V4.jpg"),
  cdn("Binghatti Titania V5.jpg"),
  cdn("no woman no sculpture.jpg"),
  cdn("pool nightshot no woman copy.jpg"),
  cdn("R2.jpg"),
  cdn("R3.jpg"),
  cdn("Titaina_SS_shots_coverd_clothes.jpg"),
  cdn("View01_Post.jpg"),
  cdn("View02_Post.jpg"),
];

// ✅ Hero / Intro images (from your real files)
const HERO_BG = cdn("Binghatti Titania V5.jpg");
const INTRO_MAIN = cdn("Binghatti Titania V3.jpg");

// ✅ Your standard Binghatti square image
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Shared values (same for all units)
const HANDOVER_EN = "Q1 2027";
const PAYMENT_PLAN_EN = "70% / 30%";
const HANDOVER_AR = "الربع الأول 2027";
const PAYMENT_PLAN_AR = "70% / 30%";

export const titaniaData = {
  en: {
    seo: {
      title:
        "Binghatti Titania | Apartments in Majan, Dubai | Q1 2027 | 70/30 Payment Plan",
      description:
        "Binghatti Titania is a contemporary residential development in Majan, offering thoughtfully planned layouts across studio, 1-bedroom, and 2-bedroom residences. Explore official documents, floor plans, and project visuals.",
      keywords:
        "Binghatti Titania, Majan Dubai, studio, 1BR, 2BR, Q1 2027, 70/30 payment plan, Binghatti",
      canonical: "/properties/apartments/binghatti/titania",
    },

    project: {
      name: "Binghatti Titania",
      developer: "Binghatti",
      location: "Majan, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 679,999",
      completionDate: HANDOVER_EN,
      paymentPlan: "70/30",
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
      title: "A MODERN RESIDENTIAL ADDRESS IN MAJAN",
      paragraphs: [
        "Binghatti Titania brings Binghatti’s contemporary design language to Majan—an evolving community positioned for convenient movement across Dubai while offering a more relaxed residential atmosphere compared to core city districts.",
        "The project is shaped around practical day-to-day living: efficient layouts, modern interior flow, and a strong visual identity that reflects Binghatti’s signature architectural rhythm.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Project Location", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Titania project visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "Majan",
          label: "Location",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: HANDOVER_EN,
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: PAYMENT_PLAN_EN,
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Binghatti Titania Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Titania",
    },

    // ✅ FloorPlans: ONLY the 4 fields you approved
    // ✅ Handover + Payment Plan are the same for all units
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "365.43 sqft",
            "Starting Price": "AED 679,999",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "795.13 sqft",
            "Starting Price": "AED 1,085,999",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1197.61 sqft",
            "Starting Price": "AED 1,549,999",
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
        { label: "Modern Architecture", icon: "✨", color: "#d7b46a" },
        { label: "Practical Layouts", icon: "📐", color: "#d7b46a" },
        { label: "Community Living", icon: "🏡", color: "#d7b46a" },
        { label: "City Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Titania",
      address: "Binghatti Titania, Majan, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.0858125,
      lng: 55.3150625,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Convenient access to main Dubai road corridors." },
        { icon: "🏙️", text: "A growing district with strong future upside." },
        {
          icon: "🛍️",
          text: "Nearby daily services and lifestyle conveniences.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Titania?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Titania.",
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
        "بن غاطي تيتانيا | شقق في مجان دبي | الربع الأول 2027 | خطة دفع 70/30",
      description:
        "بن غاطي تيتانيا مشروع سكني عصري في مجان بدبي، يقدّم وحدات استوديو وغرفة نوم وغرفتين نوم بتخطيطات عملية وهوية تصميمية حديثة. استعرض الوثائق الرسمية ومخططات الطوابق ومعرض الصور.",
      keywords:
        "بن غاطي تيتانيا, مجان دبي, استوديو, غرفة نوم, غرفتين نوم, الربع الأول 2027, 70/30",
      canonical: "/properties/apartments/binghatti/titania",
    },

    project: {
      name: "بن غاطي تيتانيا",
      developer: "بن غاطي",
      location: "مجان، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "679,999 درهم",
      completionDate: HANDOVER_AR,
      paymentPlan: "70/30",
      type: "شقق سكنية",
      units: "استوديو، غرفة نوم، غرفتين نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "عنوان سكني عصري في مجان",
      paragraphs: [
        "يقدّم مشروع بن غاطي تيتانيا تجربة سكنية حديثة في مجان—إحدى المناطق المتنامية في دبي، والتي تتميز بسهولة الحركة والاتصال مع مختلف وجهات المدينة، مع أجواء سكنية أكثر هدوءًا مقارنةً بالمناطق المركزية.",
        "يركّز المشروع على التفاصيل العملية للحياة اليومية: تخطيطات فعّالة، توزيع مريح للمساحات، وهوية معمارية تعكس أسلوب بن غاطي المميز بإيقاع واجهات واضح وحضور بصري معاصر.",
        "ستجد أدناه الكتيّب الرسمي وملف الحقائق ووثيقة الموقع وملف مخططات الطوابق الكامل، بالإضافة إلى صور مخططات الاستوديو و1BR و2BR ومعرض الصور الكامل—وجميع الروابط مبنية على أسماء الملفات كما هي لضمان عمل الصفحة 100% دون أي تعديلات.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTS_PDF, type: "secondary" },
        { title: "وثيقة الموقع", url: LOCATION_PDF, type: "secondary" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور مشروع بن غاطي تيتانيا",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "مجان",
          label: "الموقع",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: HANDOVER_AR,
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: PAYMENT_PLAN_AR,
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي تيتانيا",
    },

    // ✅ AR FloorPlans: same structure + Arabic keys (4 fields only)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "365.43 قدم مربع",
            "السعر الابتدائي": "679,999 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "795.13 قدم مربع",
            "السعر الابتدائي": "1,085,999 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1197.61 قدم مربع",
            "السعر الابتدائي": "1,549,999 درهم",
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
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "تخطيط عملي", icon: "📐", color: "#d7b46a" },
        { label: "حياة مجتمعية", icon: "🏡", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "قيمة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي تيتانيا",
      address: "بن غاطي تيتانيا، مجان، دبي، الإمارات",
      lat: 25.0858125,
      lng: 55.3150625,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى محاور الطرق الرئيسية في دبي." },
        { icon: "🏙️", text: "منطقة متنامية بفرص مستقبلية واعدة." },
        { icon: "🛍️", text: "بالقرب من خدمات يومية واحتياجات أساسية." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي تيتانيا؟",
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

export default titaniaData;
