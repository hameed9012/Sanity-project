// src/data/properties/apartments/azizi/arian/arian.js
// ✅ Uses EXACT Bunny filenames from your folder list
// ✅ Same structure as your other Azizi apartment files (EN + AR)
// ✅ FloorPlans contain ONLY: Total Area / Starting Price / Handover / Payment Plan

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/arian";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

/* -----------------------
  Files (exact names)
------------------------ */
const FACTSHEET_PDF = cdn("AZIZI ARIAN Factsheet.pdf");

/* -----------------------
  Gallery images (exact names)
------------------------ */
const GALLERY = [
  cdn("360-DJAZ038-IMG-RENDER-01.jpg"),
  cdn("360-DJAZ038-IMG-RENDER-02.jpg"),

  cdn("LOBBY_01.jpg"),
  cdn("LOBBY_02.jpg"),
  cdn("LOBBY_03.jpg"),

  cdn("GYM_01.jpg"),
  cdn("GYM_02.jpg"),
  cdn("GYM_03.jpg"),

  cdn("CLUB-01.jpg"),
  cdn("CLUB-02.jpg"),
  cdn("CLUB-03.jpg"),

  cdn("CHANGEROOM- (1).jpg"),
  cdn("CHANGEROOM- (2).jpg"),
];

/* -----------------------
  Floor plan images (exact names)
------------------------ */
const PLAN_STUDIO = cdn("Arian Studio layou.png");
const PLAN_1BR = cdn("Arian 1br layoutt.png");
const PLAN_2BR = cdn("Arian 2br layoutt.png");
const PLAN_3BR = cdn("Arian 3br layoutt.png");

export const aziziAryanData = {
  en: {
    seo: {
      title:
        "Azizi Arian by Azizi Developments | Studio to 3 Bedroom Apartments in Jebel Ali, Dubai | Handover 31 Dec 2026",
      description:
        "Azizi Arian is a residential development in Jebel Ali (Downtown Jebel Ali), Dubai, offering studios, 1, 2, and 3-bedroom apartments with modern amenities and strong connectivity.",
      keywords:
        "Azizi Arian, Azizi Developments, Jebel Ali, Downtown Jebel Ali, Dubai apartments, studio, 1 bedroom, 2 bedroom, 3 bedroom, payment plan, handover 2026",
      canonical: "/properties/apartments/azizi/aryan",
    },

    project: {
      name: "Azizi Aryan",
      developer: "Azizi Developments",
      location: "Jebel Ali (Downtown Jebel Ali), Dubai, UAE",
      status: "Off-plan",
      startingPrice: "AED 974,000",
      completionDate: "31/12/2026",
      paymentPlan: "50% / 50% or 40% / 60%",
      type: "Residential Apartments",
      units: "Studios, 1, 2 & 3 Bedroom Apartments",
    },

    hero: {
      // No video in your folder list, so we use the strongest hero render
      backgroundUrl: cdn("360-DJAZ038-IMG-RENDER-01.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "URBAN LIVING IN JEBEL ALI WITH GREAT CONNECTIVITY",
      paragraphs: [
        "Azizi Arian is a modern residential address in Jebel Ali (Downtown Jebel Ali), offering studios, 1, 2, and 3-bedroom apartments designed for practical everyday living and investment value.",
        "Residents benefit from lifestyle facilities such as a gym, club/lounge spaces, and a welcoming lobby environment—supported by well-planned layouts and efficient circulation.",
        "For full official details, download the Azizi Arian factsheet below.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
      ],
      imgUrl: cdn("360-DJAZ038-IMG-RENDER-02.jpg"),
      imgAlt: "Azizi Arian – exterior render",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "From AED 974,000",
          label: "Starting Price",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📅",
          value: "31 Dec 2026",
          label: "Handover",
        },
        {
          bottom: "14%",
          right: "-20px",
          icon: "📍",
          value: "Jebel Ali",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Azizi Arian Gallery",
      slides: GALLERY,
      projectTag: "Azizi Arian – Jebel Ali",
    },

    // ✅ FloorPlans: ONLY the 4 agreed fields
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "595 sq.ft",
            "Starting Price": "AED 974,000",
            Handover: "31/12/2026",
            "Payment Plan": "50% / 50% or 40% / 60%",
          },
          images: [PLAN_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom (1BHK)",
          bedrooms: 1,
          specs: {
            "Total Area": "800 sq.ft",
            "Starting Price": "AED 1,416,000",
            Handover: "31/12/2026",
            "Payment Plan": "50% / 50% or 40% / 60%",
          },
          images: [PLAN_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom (2BHK)",
          bedrooms: 2,
          specs: {
            "Total Area": "988 sq.ft",
            "Starting Price": "AED 1,503,000",
            Handover: "31/12/2026",
            "Payment Plan": "50% / 50% or 40% / 60%",
          },
          images: [PLAN_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom (3BHK)",
          bedrooms: 3,
          specs: {
            "Total Area": "1,741 sq.ft",
            "Starting Price": "AED 2,370,000",
            Handover: "31/12/2026",
            "Payment Plan": "50% / 50% or 40% / 60%",
          },
          images: [PLAN_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "Features & Amenities",
      amenities: [
        { label: "Modern Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Club / Lounge", icon: "🏟️", color: "#d7b46a" },
        { label: "Changing Rooms", icon: "🚿", color: "#d7b46a" },
        { label: "Community Lifestyle", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Aryan",
      address: "Downtown Jebel Ali, Dubai, UAE",
      // Verified coordinates from Google Maps listing
      lat: 24.9784375,
      lng: 55.0920625,
      zoom: 16,
      proximityFeatures: [
        {
          icon: "🚇",
          text: "Close to metro connectivity in Downtown Jebel Ali.",
        },
        {
          icon: "🛣️",
          text: "Easy access to Sheikh Zayed Road and key districts.",
        },
        {
          icon: "🏢",
          text: "Near JAFZA and major business/logistics zones.",
        },
        {
          icon: "🛒",
          text: "Proximity to shopping centers and retail outlets.",
        },
        {
          icon: "🌴",
          text: "Access to parks and recreational facilities.",
        },
      ],
    },

    cta: {
      title: "Interested in Azizi Arian?",
      description:
        "Share your details to receive updated availability and the official Azizi Arian factsheet.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "عزيزي أريان من عزيزي | شقق استوديو إلى 3 غرف نوم في جبل علي، دبي | التسليم 31/12/2026",
      description:
        "عزيزي أريان مشروع سكني في جبل علي (داون تاون جبل علي) بدبي يوفّر شقق استوديو و1 و2 و3 غرف نوم مع مرافق عصرية واتصال ممتاز.",
      keywords:
        "عزيزي أريان, عزيزي, جبل علي, داون تاون جبل علي, شقق دبي, استوديو, غرفة, غرفتين, ثلاث غرف, خطة دفع, 2026",
      canonical: "/properties/apartments/azizi/aryan",
    },

    project: {
      name: "عزيزي أريان",
      developer: "عزيزي للتطوير العقاري",
      location: "جبل علي (داون تاون جبل علي)، دبي، الإمارات",
      status: "على البيع (قيد الإنشاء)",
      startingPrice: "974,000 درهم",
      completionDate: "31/12/2026",
      paymentPlan: "50% / 50% أو 40% / 60%",
      type: "شقق سكنية",
      units: "استوديو و1 و2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("360-DJAZ038-IMG-RENDER-01.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "سكن عصري في جبل علي مع اتصال ممتاز",
      paragraphs: [
        "عزيزي أريان مشروع سكني حديث في جبل علي (داون تاون جبل علي)، يقدّم شقق استوديو و1 و2 و3 غرف نوم بتخطيطات عملية تناسب السكن والاستثمار.",
        "يوفر المشروع مرافق أساسية مثل النادي الرياضي، مساحات النادي/اللاونج، ولوبي حديث—مع تصميم يركّز على الراحة اليومية.",
        "للحصول على التفاصيل الرسمية الكاملة، حمّل ورقة المعلومات الرسمية للمشروع من الرابط أدناه.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
      ],
      imgUrl: cdn("360-DJAZ038-IMG-RENDER-02.jpg"),
      imgAlt: "عزيزي أريان – منظور خارجي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "من 974,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📅",
          value: "31/12/2026",
          label: "موعد التسليم",
        },
        {
          bottom: "14%",
          right: "-20px",
          icon: "📍",
          value: "جبل علي",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي أريان – جبل علي",
    },

    // ✅ AR FloorPlans: same structure + type="apartments" + Arabic keys
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "595 قدم²",
            "السعر الابتدائي": "974,000 درهم",
            "موعد التسليم": "31/12/2026",
            "خطة الدفع": "50% / 50% أو 40% / 60%",
          },
          images: [PLAN_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة (1BHK)",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "800 قدم²",
            "السعر الابتدائي": "1,416,000 درهم",
            "موعد التسليم": "31/12/2026",
            "خطة الدفع": "50% / 50% أو 40% / 60%",
          },
          images: [PLAN_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم (2BHK)",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "988 قدم²",
            "السعر الابتدائي": "1,503,000 درهم",
            "موعد التسليم": "31/12/2026",
            "خطة الدفع": "50% / 50% أو 40% / 60%",
          },
          images: [PLAN_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "ثلاث غرف نوم (3BHK)",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,741 قدم²",
            "السعر الابتدائي": "2,370,000 درهم",
            "موعد التسليم": "31/12/2026",
            "خطة الدفع": "50% / 50% أو 40% / 60%",
          },
          images: [PLAN_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "لوبي حديث", icon: "🏢", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "نادي / لاونج", icon: "🏟️", color: "#d7b46a" },
        { label: "غرف تغيير ملابس", icon: "🚿", color: "#d7b46a" },
        { label: "أسلوب حياة مجتمعي", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي أريان",
      address: "داون تاون جبل علي، دبي، الإمارات",
      lat: 24.9784375,
      lng: 55.0920625,
      zoom: 16,
      proximityFeatures: [
        {
          icon: "🚇",
          text: "قريب من محطات المترو في داون تاون جبل علي.",
        },
        {
          icon: "🛣️",
          text: "سهولة الوصول إلى شارع الشيخ زايد والمناطق الحيوية.",
        },
        {
          icon: "🏢",
          text: "بالقرب من منطقة جبل علي الحرة (JAFZA).",
        },
        {
          icon: "🛒",
          text: "قرب من المراكز التجارية والمتاجر.",
        },
        {
          icon: "🌴",
          text: "إمكانية الوصول إلى المتنزهات والمرافق الترفيهية.",
        },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي أريان؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر ورابط ورقة المعلومات الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};
