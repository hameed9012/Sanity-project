// src/data/properties/apartments/damac/damac-riverside-views/damac-riverside-views.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ FULL EN + AR (same structure)
// ✅ Uses ONLY your uploaded Bunny filenames (ignores .DS_Store)
// ✅ Hero uses VIDEO background
// ✅ FloorPlans = 4 fields ONLY (Area / Price / Handover / Payment Plan)
// ✅ Floorplan images use your exact filenames

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-riverside-views";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs
const FACTSHEET_PDF = cdn("DAMAC RIVERSIDE VIEWS - Factsheet.pdf");
const FLOORPLAN_PDF = cdn("DAMAC RIVERSIDE VIEWS - Floor Plans - (EN).pdf");
const PAYMENT_PLAN_PDF = cdn("DAMAC RIVERSIDE VIEWS - Launch Payment Plan.pdf");

// ✅ Video (Hero)
const HERO_VIDEO = cdn("DAMAC RIVERSIDE VIEWS - Presentation Video - HR.mp4");

// ✅ Floorplan Images (EXACT filenames you listed)
const FP_1BR = cdn("damac riverside views 1br floor plan.webp");
const FP_2BR = cdn("rIVERSIDE VIEWS 2BR FLOOR PLAN.webp");

// ✅ Gallery (EXACT filenames)
const GALLERY = [
  cdn("DAMAC RIVERSIDE VIEWS - Render 01.jpg"),
  cdn("DAMAC RIVERSIDE VIEWS - Render 02.jpg"),
  cdn("DAMAC RIVERSIDE VIEWS - Render 03.jpg"),
  cdn("DAMAC RIVERSIDE VIEWS - Render 04.jpg"),
  cdn("DAMAC RIVERSIDE VIEWS - Render 05.jpg"),
  cdn("DAMAC RIVERSIDE VIEWS - Render 06.jpg"),
  cdn("DAMAC RIVERSIDE VIEWS - Render 07.jpg"),
];

export const damacRiversideViewsData = {
  en: {
    seo: {
      title:
        "DAMAC Riverside Views | 1 & 2 Bedroom Apartments in Dubai Investment Park",
      description:
        "DAMAC Riverside Views is a new residential address in Dubai Investment Park offering spacious 1 & 2 bedroom apartments with a 70/30 payment plan and handover in Q1 2029.",
      keywords:
        "DAMAC Riverside Views, Dubai Investment Park, DIP apartments, DAMAC, 70/30 payment plan, Q1 2029",
      canonical: "/properties/apartments/damac/riverside-views",
    },

    project: {
      name: "DAMAC Riverside Views",
      developer: "DAMAC Properties",
      location: "Dubai Investment Park (DIP), Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,503,000",
      completionDate: "Q1 2029",
      paymentPlan: "70/30",
      type: "Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      mediaType: "video",
      backgroundUrl: HERO_VIDEO, // ✅ VIDEO HERO
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "A WATER-LED COMMUNITY CONCEPT IN DUBAI INVESTMENT PARK",
      paragraphs: [
        "DAMAC Riverside Views is planned as a lifestyle-forward community within Dubai Investment Park, combining modern apartment living with a calmer, water-inspired environment and open visual corridors.",
        "The location is practical for daily movement across Dubai—particularly for residents who value access to key highways and business zones—while still prioritizing livability, space, and long-term comfort.",
        "Below you’ll find the official factsheet, full floor plan PDF, payment plan document, and the exact 1BR/2BR floor plan images—linked using your BunnyCDN filenames exactly as uploaded.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        {
          title: "Download Floor Plans (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
        {
          title: "Payment Plan (PDF)",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("DAMAC RIVERSIDE VIEWS - Render 01.jpg"),
      imgAlt: "DAMAC Riverside Views render",
      floatingCards: [
        { icon: "💰", value: "AED 1,503,000", label: "Starting Price" },
        { icon: "📅", value: "Q1 2029", label: "Handover" },
        { icon: "📍", value: "DIP", label: "Dubai Investment Park" },
      ],
    },

    gallery: {
      title: "Riverside Views Visuals",
      slides: GALLERY,
      projectTag: "DAMAC Riverside Views",
    },

    // ✅ FloorPlans: 4 fields only + images wired correctly
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "997.71 sq.ft",
            "Starting Price": "AED 1,503,000",
            Handover: "Q1 2029",
            "Payment Plan": "70% / 30%",
          },
          images: [FP_1BR], // ✅ now included
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1482.94 sq.ft",
            "Starting Price": "AED 1,975,000",
            Handover: "Q1 2029",
            "Payment Plan": "70% / 30%",
          },
          images: [FP_2BR], // ✅ now included
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Water-Inspired Community", icon: "🌊", color: "#d7b46a" },
        { label: "Swimming Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Green Open Spaces", icon: "🌿", color: "#d7b46a" },
        { label: "Family-Friendly Planning", icon: "🏡", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC Riverside Views",
      address: "Dubai Investment Park, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 24.9817797,
      lng: 55.2275966,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏭", text: "Located within Dubai Investment Park (DIP)." },
        { icon: "🚗", text: "Fast access to major roads and city corridors." },
        {
          icon: "📈",
          text: "Positioned in a district with long-term expansion potential.",
        },
      ],
    },

    cta: {
      title: "Interested in Riverside Views?",
      description:
        "Share your details to receive the latest availability, unit options, and the official documents for DAMAC Riverside Views.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "ريفرسايد فيوز من داماك | شقق غرفة وغرفتين في دبي للاستثمار",
      description:
        "ريفرسايد فيوز من داماك مشروع سكني جديد في دبي للاستثمار يقدم شقق غرفة وغرفتين مع خطة دفع 70/30 وتسليم في الربع الأول 2029.",
      keywords:
        "ريفرسايد فيوز, داماك, دبي للاستثمار, شقق, خطة دفع 70/30, الربع الأول 2029",
      canonical: "/properties/apartments/damac/riverside-views",
    },

    project: {
      name: "ريفرسايد فيوز من داماك",
      developer: "داماك العقارية",
      location: "دبي للاستثمار، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,503,000 درهم",
      completionDate: "الربع الأول 2029",
      paymentPlan: "70/30",
      type: "شقق سكنية",
      units: "غرفة وغرفتان",
    },

    hero: {
      mediaType: "video",
      backgroundUrl: HERO_VIDEO, // ✅ VIDEO HERO
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "مجتمع سكني بهوية مستوحاة من الماء في دبي للاستثمار",
      paragraphs: [
        "يقدّم مشروع ريفرسايد فيوز من داماك مفهومًا سكنيًا جديدًا ضمن دبي للاستثمار، يجمع بين التصميم العصري وأجواء أكثر هدوءًا مع مساحات مفتوحة وطابع حياة مريح.",
        "يمتاز الموقع بسهولة الحركة اليومية عبر دبي، خصوصًا لمن يفضلون القرب من المحاور والطرق الرئيسية، مع الحفاظ على جودة المعيشة والمساحات الواسعة.",
        "في الأسفل ستجد ورقة المعلومات الرسمية وملف مخططات الطوابق وخطة الدفع، إضافة إلى صور مخططات 1BR و2BR—كلها مربوطة بأسماء ملفات BunnyCDN كما هي تمامًا.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
        {
          title: "تحميل مخططات الطوابق (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
        { title: "خطة الدفع (PDF)", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: cdn("DAMAC RIVERSIDE VIEWS - Render 01.jpg"),
      imgAlt: "ريفرسايد فيوز من داماك",
      floatingCards: [
        { icon: "💰", value: "1,503,000 درهم", label: "السعر يبدأ من" },
        { icon: "📅", value: "الربع الأول 2029", label: "موعد التسليم" },
        { icon: "📍", value: "DIP", label: "دبي للاستثمار" },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "ريفرسايد فيوز",
    },

    // ✅ نفس هيكل EN تمامًا + مفاتيح عربية (4 حقول فقط)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "997.71 قدم²",
            "السعر الابتدائي": "1,503,000 درهم",
            "موعد التسليم": "الربع الأول 2029",
            "خطة الدفع": "70% / 30%",
          },
          images: [FP_1BR], // ✅ now included
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1482.94 قدم²",
            "السعر الابتدائي": "1,975,000 درهم",
            "موعد التسليم": "الربع الأول 2029",
            "خطة الدفع": "70% / 30%",
          },
          images: [FP_2BR], // ✅ now included
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "هوية مستوحاة من الماء", icon: "🌊", color: "#d7b46a" },
        { label: "مسابح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي وعافية", icon: "💪", color: "#d7b46a" },
        { label: "مساحات خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "مناسب للعائلات", icon: "🏡", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "ريفرسايد فيوز من داماك",
      address: "دبي للاستثمار، دبي، الإمارات",
      lat: 24.9817797,
      lng: 55.2275966,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏭", text: "ضمن منطقة دبي للاستثمار (DIP)." },
        { icon: "🚗", text: "وصول سريع للطرق الرئيسية ومحاور المدينة." },
        { icon: "📈", text: "منطقة واعدة بخطط توسع وبنية تحتية متنامية." },
      ],
    },

    cta: {
      title: "مهتم بريفرسايد فيوز؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وخيارات الوحدات والوثائق الرسمية لمشروع ريفرسايد فيوز من داماك.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};

export default damacRiversideViewsData;
