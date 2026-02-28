// src/data/properties/apartments/binghatti/vintage.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/vintage
// ✅ Uses EXACT Bunny filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng taken from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/vintage";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-vintage-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-vintage-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-vintage-project-facts.pdf");
const LOCATION_MAP_PDF = cdn("binghatti-vintage-location-map.pdf");

// ✅ Floor plan images (EXACT filenames)
const FP_STUDIO = cdn("Binghatti Vintage studio floor plan.webp");
const FP_2BR = cdn("Binghatti Vintage 2br floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("01_View02_View020000_Post copy.jpg"),
  cdn("01_View02_View040000_Post copy.jpg"),
  cdn("01_View0s2_View01_Post copy.jpg"),
  cdn("01.jpg"),
  cdn("010000_Post copy.jpg"),
  cdn("02.jpg"),
  cdn("020000-Post copy.jpg"),
  cdn("03.jpg"),
  cdn("030000_Post copy.jpg"),
  cdn("04 copy.jpg"),
  cdn("04.jpg"),
  cdn("05 2.jpg"),
  cdn("05.jpg"),
  cdn("1.jpg"),
  cdn("10.jpg"),
  cdn("11.jpg"),
  cdn("12.jpg"),
  cdn("13.jpg"),
  cdn("14.jpg"),
  cdn("2.jpg"),
  cdn("250861_Binghatti_Vintage_View01_Halfres.jpg"),
  cdn("250861_Binghatti_Vintage_View02_Halfres.jpg"),
  cdn("250861_Binghatti_Vintage_View03_Halfres.jpg"),
  cdn("250861_Binghatti_Vintage_View04_Halfres.jpg"),
  cdn("250861_Binghatti_Vintage_View05_Halfres.jpg"),
  cdn("250861_Binghatti_Vintage_View06_Halfres.jpg"),
  cdn("3.jpg"),
  cdn("4.jpg"),
  cdn("5.jpg"),
  cdn("6.jpg"),
  cdn("7.png"),
  cdn("8 2.jpg"),
  cdn("8.jpg"),
  cdn("9.jpg"),
  cdn("final_01.jpg"),
  cdn("final_02.jpg"),
  cdn("final_03.jpg"),
  cdn("Screenshot 2025-11-05 113131.png"),
  cdn("Untitled-2_1.jpg"),
  cdn("Untitled-2_2.jpg"),
  cdn("Untitled-2_3.jpg"),
  cdn("Untitled-2_4.jpg"),
  cdn("Untitled-2_5.jpg"),
  cdn("Untitled-2_6.jpg"),
];

// ✅ Hero / Intro images
const HERO_BG = cdn("250861_Binghatti_Vintage_View04_Halfres.jpg");
const INTRO_MAIN = cdn("250861_Binghatti_Vintage_View01_Halfres.jpg");

// ✅ Developer avatar (your standard Binghatti image)
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Project numbers you provided
const HANDOVER = "Q1 2027";
const PAYMENT_PLAN = "60% / 40%";

export const vintageData = {
  en: {
    seo: {
      title:
        "Binghatti Vintage in Wadi Al Safa 3 | Studio & 2BR Apartments | From AED 720,999",
      description:
        "Binghatti Vintage in Wadi Al Safa 3 introduces a modern residential experience with practical layouts and a design-led lifestyle setting. Studios start from AED 720,999 with a 60% / 40% payment plan and expected handover in Q1 2027.",
      keywords:
        "Binghatti Vintage, Wadi Al Safa 3, studio, 2 bedroom, Dubai apartments, Q1 2027, 60/40 payment plan",
      canonical: "/properties/apartments/binghatti/vintage",
    },

    project: {
      name: "Binghatti Vintage",
      developer: "Binghatti",
      location: "Wadi Al Safa 3, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 720,999",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio, 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "BINGHATTI VINTAGE — A DISTINCTIVE MODERN ADDRESS",
      paragraphs: [
        "Binghatti Vintage is designed for residents who appreciate a clean contemporary aesthetic, functional planning, and a lifestyle that feels considered and well-balanced. The project focuses on comfortable day-to-day living with layouts that make practical sense—whether you’re buying for yourself or investing.",
        "Located in Wadi Al Safa 3, Vintage benefits from a growing residential environment with access to key routes and nearby conveniences. The setting supports long-term livability while keeping you connected to Dubai’s wider network of destinations.",
        `Studios start from AED 720,999 with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. You can download the official brochure, project facts, location map, and floor plans below.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Map", url: LOCATION_MAP_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Vintage exterior and lifestyle visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 720,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "372.43 sq.ft",
          label: "Studio Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Wadi Al Safa 3",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Vintage Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Vintage",
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
            "Total Area": "372.43 sq.ft",
            "Starting Price": "AED 720,999",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,570.99 sq.ft",
            "Starting Price": "AED 1,767,999",
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
        { label: "Design-Led Living", icon: "✨", color: "#d7b46a" },
        { label: "Practical Layouts", icon: "📐", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
        { label: "Connected Address", icon: "🛣️", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Vintage",
      address: "Binghatti Vintage, Wadi Al Safa 3, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.0889967,
      lng: 55.3176235,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Convenient access to major Dubai routes." },
        { icon: "🛍️", text: "Close to daily retail and lifestyle essentials." },
        {
          icon: "🏙️",
          text: "Growing residential environment with long-term demand.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Vintage?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Vintage.",
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
        "بن غاطي فينتاج في وادي الصفاء 3 | استوديو و2 غرفة | يبدأ من 720,999 درهم",
      description:
        "بن غاطي فينتاج في وادي الصفاء 3 يقدّم تجربة سكنية عصرية بتخطيطات عملية ولمسة تصميم مميزة. يبدأ الاستوديو من 720,999 درهم مع خطة دفع 60% / 40% وتسليم متوقع في الربع الأول 2027.",
      keywords:
        "بن غاطي فينتاج, وادي الصفاء 3, استوديو, غرفتين, شقق دبي, Q1 2027, خطة دفع 60/40",
      canonical: "/properties/apartments/binghatti/vintage",
    },

    project: {
      name: "بن غاطي فينتاج",
      developer: "بن غاطي",
      location: "وادي الصفاء 3، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "720,999 درهم",
      completionDate: "الربع الأول 2027",
      paymentPlan: "60% / 40%",
      type: "شقق سكنية",
      units: "استوديو، غرفتين نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي فينتاج — عنوان عصري بطابع تصميمي",
      paragraphs: [
        "يقدّم مشروع بن غاطي فينتاج أسلوب حياة سكني عصري يجمع بين البساطة الأنيقة والتخطيط العملي. تم تصميم الوحدات لتناسب احتياجات الحياة اليومية مع إحساس واضح بالراحة وسهولة الاستخدام.",
        "يقع المشروع في وادي الصفاء 3 ضمن بيئة سكنية متنامية، مع سهولة الوصول إلى الطرق الرئيسية والخدمات القريبة. وهو خيار مناسب للسكن أو الاستثمار في منطقة تتطور بشكل مستمر.",
        `يبدأ الاستوديو من 720,999 درهم مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. يمكنك تحميل الكتيّب الرسمي وملف الحقائق وخريطة الموقع ومخططات الطوابق أدناه.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTS_PDF, type: "secondary" },
        { title: "خريطة الموقع", url: LOCATION_MAP_PDF, type: "secondary" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي فينتاج",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "720,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "372.43 قدم²",
          label: "مساحة الاستوديو",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "وادي الصفاء 3",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي فينتاج",
    },

    // ✅ AR FloorPlans: 4 fields only
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "372.43 قدم مربع",
            "السعر الابتدائي": "720,999 درهم",
            "موعد التسليم": "الربع الأول 2027",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,570.99 قدم مربع",
            "السعر الابتدائي": "1,767,999 درهم",
            "موعد التسليم": "الربع الأول 2027",
            "خطة الدفع": "60% / 40%",
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
        { label: "خدمات قريبة", icon: "🛍️", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "قيمة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي فينتاج",
      address: "بن غاطي فينتاج، وادي الصفاء 3، دبي، الإمارات",
      lat: 25.0889967,
      lng: 55.3176235,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية في دبي." },
        { icon: "🛍️", text: "بالقرب من المتاجر والخدمات اليومية." },
        { icon: "🏙️", text: "بيئة سكنية متنامية مع طلب مستقبلي جيد." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي فينتاج؟",
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

export default vintageData;
