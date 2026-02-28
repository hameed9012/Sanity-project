// src/data/properties/apartments/binghatti/haven.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/haven
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Handover + Payment Plan are consistent (as you said) — filled for 2BR
// ✅ Location lat/lng taken from your Google Maps pin
// ✅ Clean marketing paragraphs (no CDN/tech talk inside paragraphs)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/haven";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-haven-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-haven-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-haven-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-haven-location.pdf");

// ✅ Floor plan image (EXACT filename)
const FP_2BR = cdn("Binghatti haven 2br floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  // 1BHK series
  cdn("1BHK (1).jpg"),
  cdn("1BHK (2).jpg"),
  cdn("1BHK (3).jpg"),
  cdn("1BHK (4).jpg"),
  cdn("1BHK (5).jpg"),
  cdn("1BHK (6).jpg"),
  cdn("1BHK (7).jpg"),
  cdn("1BHK (8).jpg"),
  cdn("1BHK (9).jpg"),
  cdn("1BHK (10).jpg"),

  // C series
  cdn("C1.jpg"),
  cdn("C2.jpg"),
  cdn("C4.jpg"),
  cdn("C5.jpg"),
  cdn("C6.jpg"),
  cdn("C7.jpg"),
  cdn("C8.jpg"),
  cdn("C10.jpg"),
  cdn("C11.jpg"),

  // Lobby renders (note: "Heaven" spelling in filenames)
  cdn("Heaven_Lobby_C001_Post.jpg"),
  cdn("Heaven_Lobby_C002_Post.jpg"),
  cdn("Heaven_Lobby_C003_Post.jpg"),
  cdn("Heaven_Lobby_C004_Post.jpg"),
  cdn("Heaven_Lobby_C005_Post.jpg"),
  cdn("Heaven_Lobby_C006_Post.jpg"),

  // Studio set (note: "Heavven" spelling in filenames)
  cdn("Heavven_Studio_C01_Post.jpg"),
  cdn("Heavven_Studio_C02_Post.jpg"),
  cdn("Heavven_Studio_C03_Post.jpg"),
  cdn("Heavven_Studio_C04_Post.jpg"),
  cdn("Heavven_Studio_C05_Post.jpg"),
  cdn("Heavven_Studio_Bathroom_C01_Post.jpg"),
  cdn("Heavven_Studio_Bathroom_C02_Post.jpg"),
];

// ✅ Hero / Intro images (real files)
const HERO_BG = cdn("C6.jpg");
const INTRO_MAIN = cdn("Heaven_Lobby_C001_Post.jpg");

// ✅ Your Binghatti square image
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Unit terms (as provided)
const HANDOVER = "Q1 2026";
const PAYMENT_PLAN = "70% / 30%";

export const havenData = {
  en: {
    seo: {
      title:
        "Binghatti Haven in Dubai Sports City | 2BR Apartments | From AED 1,779,999",
      description:
        "Binghatti Haven in Dubai Sports City is a modern residential address designed for everyday comfort, offering practical layouts and lifestyle-focused living. 2-bedroom apartments start from AED 1,779,999 with a 70% / 30% payment plan and expected handover in Q1 2026.",
      keywords:
        "Binghatti Haven, Dubai Sports City, 2 bedroom apartment, off plan Dubai, 70/30 payment plan, Q1 2026",
      canonical: "/properties/apartments/binghatti/haven",
    },

    project: {
      name: "Binghatti Haven",
      developer: "Binghatti",
      location: "Dubai Sports City, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,779,999",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
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
      title: "BINGHATTI HAVEN — COMFORT-LED LIVING IN SPORTS CITY",
      paragraphs: [
        "Binghatti Haven is positioned in Dubai Sports City—an area valued for its practical connectivity, community feel, and everyday lifestyle infrastructure. The project is envisioned as a calm residential setting where modern design meets functional, livable spaces.",
        "The interiors are designed around efficiency and comfort: balanced room proportions, practical circulation, and a layout that supports long-term living. Whether you’re an end-user looking for a solid home base or an investor targeting a well-known community, Haven is built to feel easy and complete.",
        `The 2-bedroom residences start from AED 1,779,999 with an expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. Below you can access the official brochure, project facts, location document, and floor plans, along with a complete set of visuals.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Document", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Haven visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,779,999",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1252.75 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Sports City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Haven Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Haven",
    },

    // ✅ FloorPlans: ONLY the 4 fields you agreed on
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1252.75 sq.ft",
            "Starting Price": "AED 1,779,999",
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
        { label: "Modern Community Living", icon: "🏡", color: "#d7b46a" },
        { label: "Lifestyle-Oriented Design", icon: "✨", color: "#d7b46a" },
        { label: "Convenient Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Resident-Friendly Layouts", icon: "🛋️", color: "#d7b46a" },
        { label: "Everyday Essentials Nearby", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Haven",
      address: "Binghatti Haven, Dubai Sports City, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.0438125,
      lng: 55.2186875,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🏟️",
          text: "Dubai Sports City setting with an established community feel.",
        },
        { icon: "🚗", text: "Efficient access to key Dubai road corridors." },
        {
          icon: "🛍️",
          text: "Close to daily services, retail, and essentials.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Haven?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Haven.",
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
        "بن غاطي هافن في دبي سبورتس سيتي | شقق غرفتين | يبدأ من 1,779,999 درهم",
      description:
        "بن غاطي هافن في دبي سبورتس سيتي مشروع سكني عصري مصمم لراحة الحياة اليومية مع تخطيطات عملية وأسلوب حياة متوازن. تبدأ شقق الغرفتين من 1,779,999 درهم مع خطة دفع 70% / 30% وتسليم متوقع في الربع الأول 2026.",
      keywords:
        "بن غاطي هافن, دبي سبورتس سيتي, شقق غرفتين, على المخطط, خطة دفع 70/30, Q1 2026",
      canonical: "/properties/apartments/binghatti/haven",
    },

    project: {
      name: "بن غاطي هافن",
      developer: "بن غاطي",
      location: "دبي سبورتس سيتي، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,779,999 درهم",
      completionDate: "الربع الأول 2026",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "غرفتان نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي هافن — أسلوب حياة مريح في سبورتس سيتي",
      paragraphs: [
        "يقع مشروع بن غاطي هافن في دبي سبورتس سيتي، وهي منطقة معروفة بسهولة التنقل وروح المجتمع وتوفر الخدمات اليومية. تم تصميم المشروع ليقدّم بيئة سكنية هادئة تجمع بين التصميم العصري والعملية في توزيع المساحات.",
        "يركّز التصميم الداخلي على الراحة والكفاءة: مساحات متوازنة، حركة سهلة داخل الوحدة، وتخطيط مناسب للسكن طويل الأمد. سواء كنت تبحث عن منزل عملي أو فرصة استثمارية ضمن مجتمع معروف، يقدم هافن تجربة سكنية متكاملة.",
        `تبدأ شقق الغرفتين من 1,779,999 درهم مع تسليم متوقع في الربع الأول 2026 وخطة دفع ${PAYMENT_PLAN}. ستجد أدناه الملفات الرسمية ومخططات الطوابق ومعرضًا كاملاً للصور.`,
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
      imgAlt: "صور مشروع بن غاطي هافن",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,779,999 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1252.75 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "سبورتس سيتي",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي هافن",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1252.75 قدم مربع",
            "السعر الابتدائي": "1,779,999 درهم",
            "موعد التسليم": "الربع الأول 2026",
            "خطة الدفع": PAYMENT_PLAN,
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
        { label: "حياة مجتمعية عصرية", icon: "🏡", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "تخطيطات مريحة", icon: "🛋️", color: "#d7b46a" },
        { label: "خدمات يومية قريبة", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي هافن",
      address: "بن غاطي هافن، دبي سبورتس سيتي، دبي، الإمارات",
      lat: 25.0438125,
      lng: 55.2186875,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏟️", text: "ضمن دبي سبورتس سيتي بطابع مجتمعي واضح." },
        { icon: "🚗", text: "وصول سريع لمحاور الطرق الرئيسية في دبي." },
        { icon: "🛍️", text: "بالقرب من المتاجر والخدمات والاحتياجات اليومية." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي هافن؟",
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

export default havenData;
