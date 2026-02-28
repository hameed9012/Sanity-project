// src/data/properties/apartments/binghatti/hillside.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/hillside
// ✅ Uses EXACT Bunny filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/hillside";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-hillside-brochure.pdf");
const FLOORPLAN_PDF = cdn("binghatti-hillside-floor-plan.pdf");
const FACTS_PDF = cdn("binghatti-hillside-project-facts.pdf");
const LOCATION_MAP_PDF = cdn("binghatti-hillside-location-map.pdf");

// ✅ Floor plan images (EXACT filenames)
const FP_STUDIO = cdn("Binghatti hillside studio floor plan.webp");
const FP_1BR = cdn("Binghatti Hillside 1br floor plan .png");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("250843_Binghatti_Hillside_View01_Halfres.jpg"),
  cdn("250843_Binghatti_Hillside_View02_Halfres.jpg"),
  cdn("ShotView_01.png"),
  cdn("ShotView_02.png"),
  cdn("ShotView_03.png"),
  cdn("ShotView_04.png"),
  cdn("C1.jpg"),
  cdn("C2.jpg"),
  cdn("C3.jpg"),
  cdn("C4.jpg"),
  cdn("C5.jpg"),
  cdn("C6.jpg"),
  cdn("C7.jpg"),
  cdn("C8.jpg"),
  cdn("Hillside-1Bedroom-01_Post.jpg"),
  cdn("Hillside-1Bedroom-02_Post.jpg"),
  cdn("Hillside-1Bedroom-03_Post.jpg"),
  cdn("Hillside-1Bedroom-04_Post.jpg"),
  cdn("Hillside-1Bedroom-Bedroom-01_Post.jpg"),
  cdn("Hillside-1Bedroom-Kitchen-01_Post.jpg"),
];

// ✅ Hero / Intro images
const HERO_BG = cdn("ShotView_02.png");
const INTRO_MAIN = cdn("ShotView_03.png");

// ✅ Developer avatar (your standard Binghatti image)
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Shared values (as you said: always same for the project)
const HANDOVER = "Q4 2026";
const PAYMENT_PLAN = "70% / 30%";

export const hillsideData = {
  en: {
    seo: {
      title:
        "Binghatti Hillside in Al Barsha | Studio & 1BR Apartments | From AED 774,999",
      description:
        "Binghatti Hillside in Al Barsha offers modern residences designed around practical layouts, everyday comfort, and strong connectivity. Studios start from AED 774,999 with a 70% / 30% payment plan and expected handover in Q4 2026.",
      keywords:
        "Binghatti Hillside, Al Barsha, studio, 1 bedroom, Dubai apartments, Q4 2026, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/hillside",
    },

    project: {
      name: "Binghatti Hillside",
      developer: "Binghatti",
      location: "Al Barsha, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 774,999",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio, 1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "BINGHATTI HILLSIDE — PRACTICAL LIVING IN AL BARSHA",
      paragraphs: [
        "Binghatti Hillside is positioned in Al Barsha, a Dubai district valued for its central connectivity and everyday convenience. The project is designed for residents who want a practical address with smooth access to key routes and nearby lifestyle essentials.",
        "From efficient studio layouts to more spacious 1-bedroom options, Hillside focuses on functional planning, comfortable interiors, and a modern residential experience—ideal for end-users and investors seeking a well-connected neighborhood.",
        `Studios start from AED 774,999 with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. You can download the official brochure, project facts, location map, and floor plan documents below.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Map", url: LOCATION_MAP_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Hillside exterior and lifestyle visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 774,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "359.3 sq.ft",
          label: "Studio Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Al Barsha",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Hillside Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Hillside",
    },

    // ✅ FloorPlans: ONLY the 4 fields you approved
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "359.3 sq.ft",
            "Starting Price": "AED 774,999",
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
            "Total Area": "855.44 sq.ft",
            "Starting Price": "AED 1,299,999",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Central Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
        { label: "Modern Residential Design", icon: "✨", color: "#d7b46a" },
        { label: "Efficient Layout Planning", icon: "📐", color: "#d7b46a" },
        { label: "Investor-Friendly Option", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Hillside",
      address: "Binghatti Hillside, Al Barsha, Dubai, UAE",
      // ✅ From your Google Maps pin
      lat: 25.0710625,
      lng: 55.2463125,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Quick access to major Dubai road corridors." },
        {
          icon: "🛍️",
          text: "Close to daily services, retail, and essentials.",
        },
        {
          icon: "🏙️",
          text: "A well-known Al Barsha address with strong demand.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Hillside?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Hillside.",
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
        "بن غاطي هيلسايد في البرشاء | استوديو و1 غرفة | يبدأ من 774,999 درهم",
      description:
        "بن غاطي هيلسايد في البرشاء يقدّم شققًا عصرية بتخطيطات عملية وراحة يومية واتصال قوي. يبدأ الاستوديو من 774,999 درهم مع خطة دفع 70% / 30% وتسليم متوقع في الربع الرابع 2026.",
      keywords:
        "بن غاطي هيلسايد, البرشاء, استوديو, غرفة نوم, شقق دبي, Q4 2026, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/hillside",
    },

    project: {
      name: "بن غاطي هيلسايد",
      developer: "بن غاطي",
      location: "البرشاء، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "774,999 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "استوديو، غرفة نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي هيلسايد — أسلوب حياة عملي في البرشاء",
      paragraphs: [
        "يقع مشروع بن غاطي هيلسايد في البرشاء، وهي منطقة معروفة بسهولة التنقل وتوفر الخدمات اليومية وقربها من الوجهات الرئيسية في دبي. يقدّم المشروع تجربة سكنية عصرية بتركيز واضح على التخطيط العملي والراحة.",
        "يوفّر المشروع خيارات تبدأ من الاستوديو إلى شقق غرفة نوم واحدة بمساحات مدروسة تناسب أسلوب الحياة اليومي، كما يُعد خيارًا مناسبًا للسكن أو الاستثمار في منطقة ذات طلب جيد.",
        `يبدأ الاستوديو من 774,999 درهم مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. يمكنك تحميل الكتيّب الرسمي وملف الحقائق وملف خريطة الموقع وملف المخططات أدناه.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTS_PDF, type: "secondary" },
        { title: "خريطة الموقع", url: LOCATION_MAP_PDF, type: "secondary" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي هيلسايد",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "774,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "359.3 قدم²",
          label: "مساحة الاستوديو",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "البرشاء",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي هيلسايد",
    },

    // ✅ AR FloorPlans: same structure + 4 fields only
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "359.3 قدم مربع",
            "السعر الابتدائي": "774,999 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "70% / 30%",
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "855.44 قدم مربع",
            "السعر الابتدائي": "1,299,999 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "70% / 30%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "خدمات يومية قريبة", icon: "🛍️", color: "#d7b46a" },
        { label: "تصميم سكني عصري", icon: "✨", color: "#d7b46a" },
        { label: "تخطيط عملي", icon: "📐", color: "#d7b46a" },
        { label: "خيار مناسب للاستثمار", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي هيلسايد",
      address: "بن غاطي هيلسايد، البرشاء، دبي، الإمارات",
      lat: 25.0710625,
      lng: 55.2463125,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "وصول سريع لمحاور الطرق الرئيسية في دبي." },
        { icon: "🛍️", text: "بالقرب من المتاجر والخدمات والاحتياجات اليومية." },
        { icon: "🏙️", text: "منطقة البرشاء معروفة بطلب سكني قوي." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي هيلسايد؟",
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

export default hillsideData;
