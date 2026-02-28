// src/data/properties/mixed-use/azizi/venice/venice.js
// ✅ Uses EXACT Bunny filenames from your folder list
// ✅ Same structure as your other Azizi files (EN + AR)
// ✅ FloorPlans contain ONLY: Total Area / Starting Price / Handover / Payment Plan

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/venice";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

/* -----------------------
  Files (exact names)
------------------------ */
const BROCHURE_PDF = cdn("Azizi Venice Buildings Brochure.pdf");
const FACTSHEET_PDF = cdn("Venice Factsheet.pdf");
const PAYMENT_PLAN_PDF = cdn("Payment Plan_Venice.pdf");

/* -----------------------
  Gallery (picked from your folder list)
------------------------ */
const GALLERY = [
  cdn("23770800_AZIZI_Villa Lagoon_20230908.jpg"),
  cdn("23770800_AZIZI_Balcony_20230908.jpg"),
  `https://luxury-real-estate-media.b-cdn.net/azizi/venice/AZIZI%20VENICE%20LIVING%20AND%20DINING%20VIEW.jpg`,
  cdn("AZIZI VENICE BEDROOM VIEW.jpg"),
  cdn("AZIZI VENICE KITCHEN VIEW.jpg"),
  cdn("AZIZI VENICE BATHROOM VIEW.jpg"),

  cdn("AV_Lobby01.jpg"),
  cdn("AV_Lobby02.jpg"),

  cdn("Clubhouse_Interior_Main.jpg"),
  cdn("Shot_3_Clubhouse_Day_Light.jpg"),
  cdn("Shot_4_Clubhouse_Interior_Static_Day.jpg"),

  cdn("AV-LR-010_Lagoon to Building View_01.jpg"),
  cdn("Dubai South_Azizi Venice_A 003_Infinity Pool View_01.jpg"),

  cdn("AZIZI_VENICE_MASTERPLAN_TOP_VIEW_NO_NUMBERS.jpg"),
];

/* -----------------------
  Floor plan images (from your folder list)
  - Only studio plan was listed explicitly
------------------------ */
const PLAN_STUDIO = cdn("venice-studio.png");

// Optional: retail / other plans are not present in the list you shared
const NO_PLAN_IMAGE = null;

/* -----------------------
  Export (same structure)
------------------------ */
export const aziziVenice = {
  slug: "venice",
  category: "villas",
  developerSlug: "azizi",
  projectSlug: "venice",

  en: {
    seo: {
      title: "Azizi Venice Dubai South | Prices, Floor Plans & Payment Plan",
      description:
        "Explore Azizi Venice by Azizi Developments in Dubai South: studios to 3-bedroom apartments + retail, starting prices, areas, payment plan options, gallery, and brochures.",
      keywords: [
        "Azizi Venice",
        "Azizi Developments",
        "Dubai South",
        "Dubai World Central",
        "Apartments",
        "Retail",
        "Lagoon community",
        "Off-plan Dubai",
      ],
      canonical: "/properties/apartments/azizi/venice",
    },

    project: {
      name: "Azizi Venice",
      developer: "Azizi Developments",
      location: "Dubai South (Dubai World Central), Dubai, UAE",
      status: "Off-plan",
      startingPrice: "AED 647,000",
      // Handover Q4 2026/phase across the community
      completionDate: "Q4 2026 (Q1 2026 – Q1 2027)",
      paymentPlan: "50% / 50% or 40% / 60% (offer/building dependent)",
      type: "Mixed-Use Community (Residential + Retail)",
      units: "Studios, 1, 2 & 3 Bedroom Apartments + Retail Units",
    },

    hero: {
      backgroundUrl: cdn("Shot_09_Boulevard aerial.jpeg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "WATERFRONT LIFESTYLE IN DUBAI SOUTH",
      paragraphs: [
        "Azizi Venice is a Venice-inspired waterfront community in Dubai South, built around a lagoon-style lifestyle with dining, leisure and walkable boulevards.",
        "The project offers a range of studios to 3-bedroom apartments, plus retail options—designed for end-users and investors seeking value in a fast-growing area near Al Maktoum International Airport.",
        "For official details, download the brochure, factsheet and payment plan below.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "factsheet" },
        {
          title: "Download Payment Plan",
          url: PAYMENT_PLAN_PDF,
          type: "payment-plan",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/venice/23770800_AZIZI_Balcony_20230908.jpg`,
      imgAlt: "Azizi Venice – exterior perspective",
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Venice",
      address: "Dubai South (Dubai World Central), Dubai, UAE",
      // Coordinates from public POI listing (2GIS)
      lat: 24.838711,
      lng: 55.133085,
      zoom: 14,
      proximityFeatures: [
        { icon: "✈️", text: "Near Al Maktoum International Airport (DWC)." },
        { icon: "🛣️", text: "Good access to E311 / E611 road network." },
        {
          icon: "🚆",
          text: "Planned metro connectivity (area development dependent).",
        },
      ],
    },

    amenities: {
      title: "Features & Amenities",
      amenities: [
        { label: "Lagoon Lifestyle", icon: "🌊", color: "#d7b46a" },
        { label: "Waterfront Boulevard", icon: "🛍️", color: "#d7b46a" },
        { label: "Clubhouse", icon: "🏟️", color: "#d7b46a" },
        { label: "Kids Areas", icon: "🧸", color: "#d7b46a" },
        { label: "Modern Lobby", icon: "🏢", color: "#d7b46a" },
      ],
    },

    gallery: {
      title: "Azizi Venice Gallery",
      slides: GALLERY,
      projectTag: "Azizi Venice – Dubai South",
    },

    floorPlans: {
      type: "mixed-use",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "381 sq.ft",
            "Starting Price": "AED 647,000",
            Handover: "Q4 2026",
            "Payment Plan": "50% / 50% or 40% / 60%",
          },
          images: [PLAN_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "735 sq.ft",
            "Starting Price": "AED 1,107,000",
            Handover: "Q4 2026",
            "Payment Plan": "50% / 50% or 40% / 60%",
          },
          images: [],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,153 sq.ft",
            "Starting Price": "AED 1,793,000",
            Handover: "Q4 2026",
            "Payment Plan": "50% / 50% or 40% / 60%",
          },
          images: [],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "1,643 sq.ft",
            "Starting Price": "AED 2,843,000",
            Handover: "Q4 2026",
            "Payment Plan": "50% / 50% or 40% / 60%",
          },
          images: [],
          features: ["—"],
        },
        {
          id: "retail",
          title: "Retail Units",
          bedrooms: null,
          specs: {
            "Total Area": "Min 687 sq.ft – Max 14,687 sq.ft",
            "Starting Price": "AED 2,697,000 – AED 53,448,000",
            Handover: "Q4 2026",
            "Payment Plan": "On request (see payment plan PDF / offer)",
          },
          images: NO_PLAN_IMAGE ? [NO_PLAN_IMAGE] : [],
          features: ["—"],
        },
      ],
    },

    cta: {
      title: "Interested in Azizi Venice?",
      description:
        "Share your details to receive updated availability, pricing, and the official Azizi Venice brochure & payment plan.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي فينيس دبي الجنوب | الأسعار والمخططات وخطة الدفع",
      description:
        "اكتشف مشروع عزيزي فينيس من عزيزي للتطوير في دبي الجنوب: استوديو إلى 3 غرف + وحدات تجارية، مع الأسعار والمساحات وخيارات خطة الدفع والمعرض والملفات الرسمية.",
      keywords: [
        "عزيزي فينيس",
        "عزيزي للتطوير",
        "دبي الجنوب",
        "دبي وورلد سنترال",
        "شقق",
        "محلات تجارية",
        "مجتمع لاجون",
        "عقارات على الخريطة",
      ],
      canonical: "/properties/apartments/azizi/venice",
    },

    project: {
      name: "عزيزي فينيس",
      developer: "عزيزي للتطوير",
      location: "دبي الجنوب (دبي وورلد سنترال)، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 647,000 درهم",
      completionDate: "تختلف حسب المبنى (Q1 2026 – Q1 2027)",
      paymentPlan: "50% / 50% أو 40% / 60% (حسب العرض/المبنى)",
      type: "مجتمع متعدد الاستخدامات (سكني + تجاري)",
      units: "استوديو، 1، 2، 3 غرف + وحدات تجارية",
    },

    hero: {
      backgroundUrl: cdn("Shot_09_Boulevard aerial.jpeg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة واجهة مائية في دبي الجنوب",
      paragraphs: [
        "عزيزي فينيس هو مجتمع واجهة مائية مستوحى من مدينة فينيس داخل دبي الجنوب، يتمحور حول تجربة لاجون مع ممشى نابض بالمطاعم والتجزئة والأنشطة.",
        "يوفر المشروع خيارات سكنية من الاستوديو حتى 3 غرف، إضافة إلى وحدات تجارية—مناسب للسكن والاستثمار في منطقة واعدة قرب مطار آل مكتوم الدولي.",
        "للتفاصيل الرسمية، حمّل الكتيّب والفاكت شيت وخطة الدفع أدناه.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "تحميل الفاكت شيت", url: FACTSHEET_PDF, type: "factsheet" },
        {
          title: "تحميل خطة الدفع",
          url: PAYMENT_PLAN_PDF,
          type: "payment-plan",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/venice/23770800_AZIZI_Balcony_20230908.jpg`,
      imgAlt: "Azizi Venice – exterior perspective",
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي فينيس",
      address: "دبي الجنوب (دبي وورلد سنترال)، دبي، الإمارات",
      lat: 24.838711,
      lng: 55.133085,
      zoom: 14,
      proximityFeatures: [
        { icon: "✈️", text: "بالقرب من مطار آل مكتوم الدولي (DWC)." },
        { icon: "🛣️", text: "سهولة الوصول إلى شبكات الطرق E311 / E611." },
        { icon: "🚆", text: "خط مترو مخطط مستقبلاً (حسب تطوير المنطقة)." },
      ],
    },

    amenities: {
      title: "المزايا والمرافق",
      amenities: [
        { label: "أسلوب حياة لاجون", icon: "🌊", color: "#d7b46a" },
        { label: "ممشى واجهة مائية", icon: "🛍️", color: "#d7b46a" },
        { label: "نادي/كلوب هاوس", icon: "🏟️", color: "#d7b46a" },
        { label: "مناطق أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "لوبّي عصري", icon: "🏢", color: "#d7b46a" },
      ],
    },

    gallery: {
      title: "معرض عزيزي فينيس",
      slides: GALLERY,
      projectTag: "عزيزي فينيس – دبي الجنوب",
    },

    floorPlans: {
      type: "mixed-use",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "المساحة الإجمالية": "381 قدم²",
            "السعر الابتدائي": "647,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "50% / 50% أو 40% / 60%",
          },
          images: [PLAN_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "شقة غرفة واحدة",
          bedrooms: 1,
          specs: {
            "المساحة الإجمالية": "735 قدم²",
            "السعر الابتدائي": "1,107,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "50% / 50% أو 40% / 60%",
          },
          images: [],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتين",
          bedrooms: 2,
          specs: {
            "المساحة الإجمالية": "1,153 قدم²",
            "السعر الابتدائي": "1,793,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "50% / 50% أو 40% / 60%",
          },
          images: [],
          features: ["—"],
        },
        {
          id: "3br",
          title: "شقة 3 غرف",
          bedrooms: 3,
          specs: {
            "المساحة الإجمالية": "1,643 قدم²",
            "السعر الابتدائي": "2,843,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "50% / 50% أو 40% / 60%",
          },
          images: [],
          features: ["—"],
        },
        {
          id: "retail",
          title: "وحدات تجارية",
          bedrooms: null,
          specs: {
            "المساحة الإجمالية": "حد أدنى 687 قدم² – حد أقصى 14,687 قدم²",
            السعر: "2,697,000 – 53,448,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "حسب الطلب (راجع ملف خطة الدفع/العرض)",
          },
          images: [],
          features: ["—"],
        },
      ],
    },

    cta: {
      title: "مهتم بعزيزي فينيس؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار والكتيّب الرسمي وخطة الدفع.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default aziziVenice;
