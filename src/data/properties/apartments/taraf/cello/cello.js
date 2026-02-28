// src/data/properties/apartments/taraf/cello.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR (complete parity)
// ✅ Exact Bunny filenames only
// ✅ JVC location
// ✅ 1BR / 2BR / 3BR
// ✅ Payment plan formatted correctly
// ✅ Production safe

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/taraf/cello";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/taraf.webp";

// ================= FILES =================
const HERO_VIDEO = cdn("Cello_Film.mp4");

const BROCHURE_PDF = cdn("Cello_Brochure.pdf");
const FACTSHEET_PDF = cdn("Cello_3 Pager Factsheet.pdf");
const FLOORPLANS_PDF = cdn("Cello_Floor & Unit Plans.pdf");
const PAYMENT_PLAN_PDF = cdn("Cello_Payment Plan.pdf");

// Floor plans
const FP_1BR = cdn("1 BR Cello by Taraf Floor plan.webp");
const FP_2BR = cdn("2 BR Cello by Taraf Floor plan.webp");
const FP_3BR = cdn("3 BR Cello by Taraf Floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("Cello_Exterior_09_High Resolution.jpg"),
  cdn("Cello_Exterior_10_High Reoslution.jpg"),
  cdn("Cello_Exterior_11_High Resolution.jpg"),
  cdn("Cello_Exterior_12_High Resolution.jpg"),
  cdn("Cello_Balcony_High Resolution.jpg"),
  cdn("cello_interiors_livingroom_A.jpg"),
  cdn("cello_interiors_kitchen_A.jpg"),
  cdn("sky_interiors_bedroom.jpg"),
  cdn("sky_interiors_close_up.jpg"),
  cdn("Cello_Multipurpose Room_High Resolution.jpg"),
  cdn("Cello_Multipurpose_View 02_High Resolution.jpg"),
  cdn("TRF-SA-SKY-JPEG-ID-800001 Typical Corridor.jpg"),
  cdn("TRF-SA-SKY-JPEG-ID-800002 Lift Lobby.jpg"),
  cdn("TRF-SA-SKY-JPEG-ID-800009 Master Bathroom.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q1 2027";
const PAYMENT_PLAN = "60% / 40%";
const LOCATION_NAME = "Jumeirah Village Circle (JVC)";
const DEVELOPER = "Taraf Developments";

// ======================================================
// DATA
// ======================================================
export const celloData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Cello by Taraf | 1, 2 & 3 Bedroom Apartments in JVC Dubai",
      description:
        "Cello by Taraf Developments offers premium 1, 2 and 3 bedroom apartments in Jumeirah Village Circle (JVC). Starting from AED 1,148,700 with a 60/40 payment plan and handover in Q1 2027.",
      keywords:
        "Cello by Taraf, Taraf Cello JVC, apartments in JVC, luxury apartments Dubai",
      canonical: "/properties/apartments/taraf/cello",
    },

    project: {
      name: "Cello",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,148,700",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1, 2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
      videoUrl: HERO_VIDEO,
    },

    intro: {
      title: "CELLO — CONTEMPORARY LIVING IN JVC",
      paragraphs: [
        "Cello by Taraf Developments is a refined residential project located in Jumeirah Village Circle, designed with a strong architectural identity and modern urban lifestyle in mind.",
        "The project offers spacious 1, 2, and 3 bedroom apartments with elegant interiors, premium finishes, and thoughtfully designed layouts for comfortable living and long-term investment.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[4],
      imgAlt: "Cello by Taraf",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "JVC",
          label: "Prime Location",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "AED 1.14M",
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
      projectTag: "Cello",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "733 sq.ft",
            "Starting Price": "AED 1,148,700",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,330.74 sq.ft",
            "Starting Price": "AED 1,781,850",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "1,754.95 sq.ft",
            "Starting Price": "AED 2,514,750",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Multipurpose Room", icon: "🎯", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Retail & Dining", icon: "🛍️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
        { label: "Basement Parking", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Cello",
      address: LOCATION_NAME,
      lat: 25.0517477,
      lng: 55.1985818,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Easy access to Al Khail Road & Sheikh Mohammed Bin Zayed Road",
        },
        {
          icon: "🏙️",
          text: "Minutes from Dubai Marina & Downtown Dubai",
        },
        {
          icon: "🛍️",
          text: "Close to Circle Mall and lifestyle destinations",
        },
      ],
    },

    cta: {
      title: "Invest in Cello by Taraf",
      description:
        "Request full availability, price lists, and official Taraf documents.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN)
  ar: {
    seo: {
      title: "سيلو من تراف | شقق 1 و2 و3 غرف نوم في قرية جميرا الدائرية (JVC)",
      description:
        "سيلو من تراف للتطوير العقاري يقدم شقق فاخرة بغرفة وغرفتين و3 غرف نوم في قرية جميرا الدائرية (JVC). تبدأ الأسعار من 1,148,700 درهم مع خطة سداد 60/40 والتسليم في الربع الأول 2027.",
      keywords: "سيلو من تراف، تراف سيلو JVC، شقق قرية جميرا، شقق فاخرة دبي",
      canonical: "/properties/apartments/taraf/cello",
    },

    project: {
      name: "سيلو",
      developer: "تراف للتطوير العقاري",
      location: "قرية جميرا الدائرية (JVC)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,148,700 درهم",
      completionDate: "الربع الأول 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة، غرفتين و3 غرف",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "تراف للتطوير العقاري",
      rating: null,
      videoUrl: HERO_VIDEO,
    },

    // ✅ ADDED (was missing)
    intro: {
      title: "سيلو — أسلوب حياة عصري في قرية جميرا الدائرية",
      paragraphs: [
        "سيلو من تراف للتطوير العقاري هو مشروع سكني راقٍ في قرية جميرا الدائرية، يتميّز بهوية معمارية واضحة وتصميم يلائم نمط الحياة الحضري الحديث.",
        "يوفر المشروع شقق 1 و2 و3 غرف نوم بمساحات مريحة وتشطيبات فاخرة وتوزيعات مدروسة لتجربة سكنية متوازنة وفرصة استثمارية طويلة الأمد.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "فاكت شيت", url: FACTSHEET_PDF, type: "secondary" },
        { title: "خطة السداد", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[4],
      imgAlt: "سيلو من تراف",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "JVC",
          label: "موقع مميز",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "1.14M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "الربع الأول 2027",
          label: "موعد التسليم",
        },
      ],
    },

    // ✅ ADDED (was missing)
    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Cello",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "733 قدم²",
            "السعر الابتدائي": "1,148,700 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الأول 2027",
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,330.74 قدم²",
            "السعر الابتدائي": "1,781,850 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الأول 2027",
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,754.95 قدم²",
            "السعر الابتدائي": "2,514,750 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الأول 2027",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي مجهز", icon: "🏋️", color: "#c9a24d" },
        { label: "قاعة متعددة الاستخدامات", icon: "🎯", color: "#c9a24d" },
        { label: "مساحات خضراء", icon: "🌿", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "محلات ومطاعم", icon: "🛍️", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
        { label: "مواقف سيارات", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سيلو",
      address: "قرية جميرا الدائرية (JVC)",
      lat: 25.0517477,
      lng: 55.1985818,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى شارع الخيل وشارع محمد بن زايد." },
        { icon: "🏙️", text: "دقائق من دبي مارينا وداون تاون دبي." },
        { icon: "🛍️", text: "بالقرب من سيركل مول والوجهات الخدمية." },
      ],
    },

    cta: {
      title: "استثمر في سيلو من تراف",
      description: "اطلب التوافر الكامل وقوائم الأسعار والملفات الرسمية الآن.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default celloData;
