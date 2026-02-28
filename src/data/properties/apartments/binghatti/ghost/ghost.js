// src/data/properties/apartments/binghatti/ghost.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/ghost
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Handover + Payment Plan are the SAME for all unit types (applied to 2BR + 3BR)
// ✅ Location lat/lng taken from your Google Maps pin
// ✅ Clean descriptions (no CDN/tech talk inside paragraphs)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/ghost";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-ghost-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-ghost-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-ghost-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-ghost-location.pdf");

// ✅ Floor plan images (EXACT filenames)
const FP_2BR = cdn("Binghatti ghost 2br floor plan.webp");
const FP_3BR = cdn("Binghatti ghost 3br floor plan.webp");

// ✅ Gallery images (EXACT filenames) — excludes .zip and .DS_Store
const GALLERY = [
  cdn("01_Post .jpg"), // note: space before ".jpg" is part of the filename
  cdn("02_Post.jpg"),
  cdn("03_Post.jpg"),
  cdn("202_Right_Shot.png"),
  cdn("24010_201_Bird_shot copy.png"),
  cdn("24010_204_semi_bird.png"),
  cdn("24010_206_Terrace_Sunset.png"),
  cdn("24010_211_Retail_03.png"),
  cdn("Dusk_Final.png"),
  cdn("Ghost Bedroom.jpg"),
  cdn("Ghost Kitchen Area.jpg"),
  cdn("Ghost Living area 2 copy.jpg"),
  cdn("Ghost Living area 2.jpg"),
  cdn("Ghost Living Area copy.png"),
  cdn("Ghost Living Area.jpg"),
  cdn("Ghost Master Bedroom.jpg"),
  cdn("Studio_C01-topaz-enhance-2x.jpeg"),
  cdn("Studio_C02-topaz-enhance-2x.jpeg"),
  cdn("Studio_C03-topaz-enhance-2x.jpeg"),
  cdn("Studio_C04-topaz-enhance-2x.jpeg"),
];

// ✅ Hero / Intro images (real files)
const HERO_BG = cdn("Dusk_Final.png");
const INTRO_MAIN = cdn("24010_206_Terrace_Sunset.png");

// ✅ Use your Binghatti square image
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Shared terms for all unit types (as requested)
const HANDOVER = "Q1 2026";
const PAYMENT_PLAN = "70% / 30%";

export const ghostData = {
  en: {
    seo: {
      title:
        "Binghatti Ghost in Al Jaddaf | 2BR & 3BR Apartments | From AED 2,124,998",
      description:
        "Binghatti Ghost in Al Jaddaf is a modern residential address offering spacious 2-bedroom and 3-bedroom apartments with bold architectural character and strong city connectivity. Starting from AED 2,124,998 with a 70% / 30% payment plan and expected handover in Q1 2026.",
      keywords:
        "Binghatti Ghost, Al Jaddaf, Dubai apartments, 2 bedroom, 3 bedroom, off plan Dubai, 70/30 payment plan, Q1 2026",
      canonical: "/properties/apartments/binghatti/ghost",
    },

    project: {
      name: "Binghatti Ghost",
      developer: "Binghatti",
      location: "Al Jaddaf, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,124,998",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN.replaceAll(" ", "").replace("/", "/"), // display stays "70% / 30%"
      type: "Apartments",
      units: "2 Bedroom & 3 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "BINGHATTI GHOST — BOLD DESIGN IN AL JADDAF",
      paragraphs: [
        "Binghatti Ghost brings a distinctive, modern architectural identity to Al Jaddaf—an area known for its strategic positioning between key Dubai districts. The project blends strong visual presence with practical layouts designed for real everyday living.",
        "With generous 2-bedroom and 3-bedroom options, the focus is on space and comfort: wider living zones, well-defined bedroom separation, and a flow that suits long-term residents and families. The overall experience is supported by contemporary interiors and lifestyle-oriented planning.",
        `Starting from AED 2,124,998 with an expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. Below you can access the official brochure, project facts, location document, and floor plans, alongside a full set of visuals.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Document", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Ghost visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,124,998",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1289.52 sq.ft",
          label: "2BR Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Al Jaddaf",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Ghost Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Ghost",
    },

    // ✅ FloorPlans: ONLY the 4 fields you agreed on
    // ✅ Handover + Payment Plan same for all unit types (2BR + 3BR)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1289.52 sq.ft",
            "Starting Price": "AED 2,124,998",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1602.74 sq.ft",
            "Starting Price": "AED 3,187,498",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Contemporary Architecture", icon: "🏙️", color: "#d7b46a" },
        { label: "Spacious Layouts", icon: "🏡", color: "#d7b46a" },
        { label: "Modern Interiors", icon: "✨", color: "#d7b46a" },
        { label: "Retail Integration", icon: "🛍️", color: "#d7b46a" },
        { label: "Strong Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Ghost",
      address: "Binghatti Ghost, Al Jaddaf, Dubai, UAE",
      lat: 25.2141469,
      lng: 55.3183547,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "Al Jaddaf address with strong central positioning.",
        },
        {
          icon: "🚗",
          text: "Easy access to key Dubai districts and main roads.",
        },
        { icon: "🛍️", text: "Everyday services and lifestyle options nearby." },
      ],
    },

    cta: {
      title: "Interested in Binghatti Ghost?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Ghost.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  ar: {
    seo: {
      title: "بن غاطي غوست في الجداف | شقق 2 و3 غرف | يبدأ من 2,124,998 درهم",
      description:
        "بن غاطي غوست في الجداف مشروع سكني عصري يقدم شققًا واسعة من غرفتين وثلاث غرف بطابع معماري جريء واتصال قوي بمناطق دبي الرئيسية. يبدأ من 2,124,998 درهم مع خطة دفع 70% / 30% وتسليم متوقع في الربع الأول 2026.",
      keywords:
        "بن غاطي غوست, الجداف, شقق دبي, غرفتين, ثلاث غرف, على المخطط, خطة دفع 70/30, Q1 2026",
      canonical: "/properties/apartments/binghatti/ghost",
    },

    project: {
      name: "بن غاطي غوست",
      developer: "بن غاطي",
      location: "الجداف، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "2,124,998 درهم",
      completionDate: "الربع الأول 2026",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "غرفتين وثلاث غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي غوست — تصميم جريء في الجداف",
      paragraphs: [
        "يقدّم مشروع بن غاطي غوست حضورًا معماريًا مميزًا في منطقة الجداف، وهي منطقة معروفة بموقعها الاستراتيجي وقربها من عدة مراكز مهمة في دبي. يجمع المشروع بين الطابع العصري والتوزيع العملي للمساحات لتناسب الحياة اليومية.",
        "مع خيارات واسعة من غرفتين وثلاث غرف، يركز المشروع على الراحة والمساحة: مناطق معيشة أكبر، توزيع مريح للغرف، وتجربة مناسبة للسكن طويل الأمد خصوصًا للعائلات. كما يدعم التصميم الداخلي الطابع الحديث والوظيفي.",
        `يبدأ السعر من 2,124,998 درهم مع تسليم متوقع في الربع الأول 2026 وخطة دفع ${PAYMENT_PLAN}. ستجد أدناه الملفات الرسمية ومخططات الطوابق ومعرضًا كاملاً للصور.`,
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
      imgAlt: "صور مشروع بن غاطي غوست",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,124,998 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1289.52 قدم²",
          label: "مساحة 2 غرف",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "الجداف",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي غوست",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1289.52 قدم مربع",
            "السعر الابتدائي": "2,124,998 درهم",
            "موعد التسليم": "الربع الأول 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1602.74 قدم مربع",
            "السعر الابتدائي": "3,187,498 درهم",
            "موعد التسليم": "الربع الأول 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "تصميم معماري عصري", icon: "🏙️", color: "#d7b46a" },
        { label: "مساحات واسعة", icon: "🏡", color: "#d7b46a" },
        { label: "تصميم داخلي حديث", icon: "✨", color: "#d7b46a" },
        { label: "متاجر وخدمات", icon: "🛍️", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي غوست",
      address: "بن غاطي غوست، الجداف، دبي، الإمارات",
      lat: 25.2141469,
      lng: 55.3183547,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "موقع في الجداف بقيمة استراتيجية قوية." },
        { icon: "🚗", text: "سهولة الوصول إلى أهم مناطق دبي والطرق الرئيسية." },
        { icon: "🛍️", text: "بالقرب من الخدمات والاحتياجات اليومية." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي غوست؟",
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

export default ghostData;
