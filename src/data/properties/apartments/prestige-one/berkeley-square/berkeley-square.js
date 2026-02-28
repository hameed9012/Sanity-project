// src/data/properties/apartments/prestige-one/berkeley-square.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR / 3BR
// ✅ Exact Bunny filenames ONLY
// ✅ Prestige One Developments
// ✅ JVC – Jumeirah Village Circle
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/prestige-one/berkeley-square";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Berkeley Square Info Brochure.pdf");
const FACTSHEET_PDF = cdn("Berkeley Square Factsheet.pdf");
const MARKETING_VIDEO = cdn("Berkeley Square Marketing Video-V10.mp4");

// Floor plans
const FP_1BR = cdn("1 BR Berkeley Square Floor plan.webp");
const FP_3BR = cdn("3 BR Berkeley Square Floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("Berkeley Square Facade View 4.png"),
  cdn("Berkeley Square Pool Retreat Night.png"),
  cdn("Berkeley Square Poolside Seating Night.png"),
  cdn("Berkeley Square Padel Court Night View.png"),
  cdn("Berkeley Square Living Room 2.jpg"),
  cdn("Berkeley Square- 1BHK- BEDROOM.png"),
  cdn("Berkeley Square- 1BHK- Dresser.png"),
  cdn("Berkeley Square- 2BR- Living Room.png"),
  cdn("Berkeley Square- 2BR- Bedroom 1.png"),
  cdn("Berkeley Square- 3BR- Bedroom 2.png"),
  cdn("Berkeley Square- STUDIO 02.png"),
  cdn("Berkeley Square- STUDIO 03.png"),
  cdn("Berkeley Square- PANTRY.png"),
  cdn("Kitchen.jpg"),
  cdn("Living Area.jpeg"),
  cdn("Living Area and Dining.jpeg"),
  cdn("Berkeley Square- Lobby 2.jpg"),
  cdn("Berkeley Square- Lobby 3.jpg"),
  cdn("Berkeley Square- Clubhouse 1.jpeg"),
  cdn("Berkeley Square- Clubhouse 3.jpg"),
  cdn("Berkeley Square- Podcast Room.jpeg"),
  cdn("Gym 4.jpg"),
  cdn("Kids play area 1.jpeg"),
  cdn("Kids play area 2.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q1 2028";
const PAYMENT_PLAN = "65% / 35%";
const LOCATION_NAME = "Jumeirah Village Circle (JVC)";
const DEVELOPER = "Prestige One Developments";

// ======================================================
// DATA
// ======================================================
export const berkeleySquareData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Berkeley Square by Prestige One | Apartments for Sale in JVC Dubai",
      description:
        "Berkeley Square by Prestige One Developments offers luxury 1 & 3 bedroom apartments in JVC Dubai. Starting from AED 1,403,000 with handover in Q1 2028.",
      keywords:
        "Berkeley Square, Prestige One, JVC apartments, luxury apartments Dubai",
      canonical: "/properties/apartments/prestige-one/berkeley-square",
    },

    project: {
      name: "Berkeley Square",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,403,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
      videoUrl: MARKETING_VIDEO,
    },

    intro: {
      title: "BERKELEY SQUARE — CONTEMPORARY LIVING IN JVC",
      paragraphs: [
        "Berkeley Square is a refined residential development by Prestige One Developments, located in the heart of Jumeirah Village Circle.",
        "The project blends modern architecture with lifestyle-focused amenities, offering elegant apartments designed for comfort and investment value.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Berkeley Square JVC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "JVC",
          label: "Prime Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 1.4M",
          label: "Starting Price",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Berkeley Square",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "784.04 sq.ft",
            "Starting Price": "AED 1,403,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "2,583.98 sq.ft",
            "Starting Price": "AED 2,911,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Padel Court", icon: "🎾", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Clubhouse & Lounge", icon: "🏛️", color: "#c9a24d" },
        { label: "Podcast Room", icon: "🎙️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Berkeley Square",
      address: LOCATION_NAME,
      lat: 25.0484536,
      lng: 55.2096604,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Al Khail Road & Hessa Street" },
        { icon: "🏙️", text: "Minutes from Dubai Marina & Downtown" },
        { icon: "🛍️", text: "Surrounded by retail & lifestyle destinations" },
      ],
    },

    cta: {
      title: "Invest in Berkeley Square",
      description:
        "Request updated prices, availability, and official Prestige One documents.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title:
        "بيركلي سكوير من بريستيج ون | شقق للبيع في قرية جميرا الدائرية (JVC)",
      description:
        "بيركلي سكوير من بريستيج ون للتطوير العقاري يوفر شقق فاخرة 1 و3 غرف نوم في قرية جميرا الدائرية (JVC) دبي. تبدأ الأسعار من 1,403,000 درهم مع التسليم في الربع الأول 2028 وخطة سداد 65/35.",
      keywords: "بيركلي سكوير، بريستيج ون، شقق JVC، شقق فاخرة دبي",
      canonical: "/properties/apartments/prestige-one/berkeley-square",
    },

    project: {
      name: "بيركلي سكوير",
      developer: "بريستيج ون للتطوير العقاري",
      location: "قرية جميرا الدائرية (JVC)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,403,000 درهم",
      completionDate: "الربع الأول 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "1 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بريستيج ون للتطوير العقاري",
      rating: null,
      videoUrl: MARKETING_VIDEO, // ✅ parity
    },

    intro: {
      title: "بيركلي سكوير — أسلوب حياة عصري في قرية جميرا الدائرية",
      paragraphs: [
        "بيركلي سكوير هو مشروع سكني راقٍ من بريستيج ون للتطوير العقاري، يقع في قلب قرية جميرا الدائرية (JVC).",
        "يجمع المشروع بين العمارة الحديثة ومرافق نمط الحياة، ويوفر شقق أنيقة مصممة للراحة وقيمة استثمارية قوية.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "فاكت شيت", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "بيركلي سكوير JVC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "JVC",
          label: "موقع مميز",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "1.4M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "الربع الأول 2028",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Berkeley Square",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br", // ✅ IMPORTANT
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "784.04 قدم²",
            "السعر الابتدائي": "1,403,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الأول 2028",
          },
          images: [FP_1BR],
        },
        {
          id: "3br", // ✅ IMPORTANT
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "2,583.98 قدم²",
            "السعر الابتدائي": "2,911,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الأول 2028",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "ملعب بادل", icon: "🎾", color: "#c9a24d" },
        { label: "نادي رياضي مجهز بالكامل", icon: "🏋️", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "نادي وصالة", icon: "🏛️", color: "#c9a24d" },
        { label: "غرفة بودكاست", icon: "🎙️", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بيركلي سكوير",
      address: "قرية جميرا الدائرية (JVC)",
      lat: 25.0484536,
      lng: 55.2096604,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى شارع الخيل وشارع حصة." },
        { icon: "🏙️", text: "دقائق من دبي مارينا وداون تاون." },
        { icon: "🛍️", text: "محاط بوجهات التسوق والخدمات." },
      ],
    },

    cta: {
      title: "استثمر في بيركلي سكوير",
      description:
        "اطلب الأسعار المحدثة والتوافر والملفات الرسمية من بريستيج ون.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default berkeleySquareData;
