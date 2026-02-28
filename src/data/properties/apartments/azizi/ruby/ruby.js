// src/data/properties/apartments/azizi/ruby.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR / 2BR / 3BR
// ✅ Bunny CDN filenames EXACT
// ✅ Azizi Developments
// ✅ JVC
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/ruby";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg";

// ================= FILES =================
const FACTSHEET_PDF = cdn("Ruby Factsheet English.pdf");
const LAUNCH_EDM_PDF = cdn("Azizi Ruby LAUNCH EDM.pdf");

// Floor Plans
const FP_1BR = cdn("Azizi Ruby 1br floor plan.webp");
const FP_2BR = cdn("Azizi Ruby 2br floor plan.webp");
const FP_3BR = cdn("Azizi Ruby 3br floor plan.webp");

// ================= GALLERY (ALL IMAGES) =================
const GALLERY = [
  cdn("360-JVC-15BMRM-VIEW 1.jpg"),
  cdn("360-JVC-15BMRM-VIEW 2.png"),
  cdn("360-JVC-15BMRM-VIEW 3.jpg"),
  cdn("360-JVC-15BMRM-VIEW 4.png"),
  cdn("360-JVC-15BMRM-VIEW 5.png"),
  cdn("LOBBY_01.jpg"),
  cdn("LOBBY_02.jpg"),
  cdn("LOBBY_03.jpg"),
  cdn("CLUB-01.jpg"),
  cdn("CLUB-02.jpg"),
  cdn("CLUB-03.jpg"),
  cdn("GYM_01.jpg"),
  cdn("GYM_02.jpg"),
  cdn("GYM_03.jpg"),
  cdn("CHANGEROOM- (1).jpg"),
  cdn("CHANGEROOM- (2).jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2026";
const PAYMENT_PLAN = "50% / 50%";
const LOCATION_NAME = "Jumeirah Village Circle (JVC)";
const DEVELOPER = "Azizi Developments";

// ======================================================
// DATA
// ======================================================
export const aziziRubyData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Azizi Ruby Apartments for Sale in JVC | Azizi Developments",
      description:
        "Azizi Ruby offers 1, 2 & 3 bedroom apartments in Jumeirah Village Circle (JVC). Starting from AED 1.114M with handover Q4 2026.",
      keywords:
        "Azizi Ruby, Azizi JVC, apartments for sale in JVC, Azizi Developments",
      canonical: "/properties/apartments/azizi/ruby",
    },

    project: {
      name: "Azizi Ruby",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,114,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1, 2 & 3 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: GALLERY[4],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "AZIZI RUBY — MODERN LIVING IN JVC",
      paragraphs: [
        "Azizi Ruby is a contemporary residential development located in the heart of Jumeirah Village Circle, designed for comfortable urban living.",
        "The project features modern architecture, lifestyle amenities, and excellent connectivity across Dubai.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        { title: "Launch Brochure", url: LAUNCH_EDM_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Azizi Ruby JVC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "JVC",
          label: "Prime Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 1.11M",
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
      projectTag: "Azizi Ruby",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "704.83 sq.ft",
            "Starting Price": "AED 1,114,000",
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
            "Total Area": "1,109.12 sq.ft",
            "Starting Price": "AED 1,702,000",
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
            "Starting Price": "AED 2,172,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Clubhouse", icon: "🛋️", color: "#c9a24d" },
        { label: "Changing Rooms", icon: "🚿", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "Retail Nearby", icon: "🛍️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
        { label: "Covered Parking", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Ruby",
      address: LOCATION_NAME,
      lat: 25.059475,
      lng: 55.203902,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏘️", text: "Located in Jumeirah Village Circle" },
        {
          icon: "🚗",
          text: "Easy access to Al Khail Road & Sheikh Mohammed Bin Zayed Road",
        },
        { icon: "🏙️", text: "Minutes from Dubai Marina & Downtown" },
      ],
    },

    cta: {
      title: "Own a Home in JVC",
      description:
        "Get the best prices, unit availability, and floor plans for Azizi Ruby.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title:
        "عزيزي روبي | شقق 1 و2 و3 غرف نوم للبيع في قرية جميرا الدائرية (JVC)",
      description:
        "عزيزي روبي من عزيزي للتطوير العقاري يوفر شقق 1 و2 و3 غرف نوم في قرية جميرا الدائرية (JVC). تبدأ الأسعار من 1,114,000 درهم مع التسليم في الربع الرابع 2026 وخطة سداد 50/50.",
      keywords: "عزيزي روبي، شقق JVC، عزيزي للتطوير العقاري، شقق دبي",
      canonical: "/properties/apartments/azizi/ruby",
    },

    project: {
      name: "عزيزي روبي",
      developer: "عزيزي للتطوير العقاري",
      location: "قرية جميرا الدائرية (JVC)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,114,000 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "شقق 1 و2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[4], // keep same style as EN
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "عزيزي روبي — أسلوب حياة عصري في قرية جميرا الدائرية",
      paragraphs: [
        "عزيزي روبي هو مشروع سكني عصري يقع في قلب قرية جميرا الدائرية (JVC) ومصمم لتوفير تجربة سكن حضرية مريحة.",
        "يتميز المشروع بهندسة معمارية حديثة ومرافق أسلوب حياة واتصال ممتاز بمختلف مناطق دبي.",
      ],
      brochures: [
        { title: "تحميل الفاكت شيت", url: FACTSHEET_PDF, type: "main" },
        { title: "بروشور الإطلاق", url: LAUNCH_EDM_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "عزيزي روبي JVC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "JVC",
          label: "موقع مميز",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "1.11M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "الربع الرابع 2026",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Azizi Ruby",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br", // ✅ IMPORTANT
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "704.83 قدم²",
            "السعر الابتدائي": "1,114,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_1BR],
        },
        {
          id: "2br", // ✅ IMPORTANT
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,109.12 قدم²",
            "السعر الابتدائي": "1,702,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_2BR],
        },
        {
          id: "3br", // ✅ IMPORTANT
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "السعر الابتدائي": "2,172,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي مجهز بالكامل", icon: "🏋️", color: "#c9a24d" },
        { label: "نادٍ اجتماعي", icon: "🛋️", color: "#c9a24d" },
        { label: "غرف تغيير الملابس", icon: "🚿", color: "#c9a24d" },
        { label: "مساحات خضراء", icon: "🌿", color: "#c9a24d" },
        { label: "متاجر قريبة", icon: "🛍️", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
        { label: "مواقف سيارات مغطاة", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي روبي",
      address: "قرية جميرا الدائرية (JVC)",
      lat: 25.059475,
      lng: 55.203902,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏘️", text: "يقع داخل قرية جميرا الدائرية (JVC)." },
        {
          icon: "🚗",
          text: "سهولة الوصول إلى شارع الخيل وشارع محمد بن زايد.",
        },
        { icon: "🏙️", text: "دقائق من دبي مارينا وداون تاون." },
      ],
    },

    cta: {
      title: "امتلك منزلك في قرية جميرا الدائرية",
      description:
        "احصل على أفضل الأسعار والتوافر ومخططات الوحدات لمشروع عزيزي روبي.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الفاكت شيت", action: "download-brochure" },
      ],
    },
  },
};

export default aziziRubyData;
