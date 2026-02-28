// src/data/properties/apartments/azizi/noura/noura.js
// ✅ Same structure style as your working Azizi files (EN + AR)
// ✅ Bunny filenames EXACTLY as in your screenshot
// ✅ FloorPlans contain ONLY the 4 agreed fields:
//    Total Area / Starting Price / Handover / Payment Plan
// ✅ Location coordinates based on the Google Maps lat/lng you requested

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/noura";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT)
const FACTSHEET_EN_PDF = cdn("Azizi Noura Factsheet EN.pdf");
const FLOORPLATES_RETAIL_PDF = cdn("Azizi Noura Floorplates & Retail.pdf");
const PAYMENT_PLAN_PDF = cdn("Payment Plan.pdf");

// Gallery images (EXACT)
const GALLERY = [
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 01.jpg"),
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 02.jpg"),
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 03.jpg"),
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 04.jpg"),
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 04_01.jpg"),
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 05.jpg"),
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 06.jpg"),
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 07.jpg"),
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 08.jpg"),
  cdn("AZIZI Downtown Jebel Ali Plot 09_View 09.jpg"),
];

// Hero background (image since no video provided in your folder)
const HERO_BG = cdn("AZIZI Downtown Jebel Ali Plot 09_View 05.jpg");

// Plan images (no separate plan images listed → use strong project visuals)
const STUDIO_PLAN_IMG = `https://luxury-real-estate-media.b-cdn.net/azizi/noura/Noura%20Studioo.png`;
const ONE_BR_PLAN_IMG = `https://luxury-real-estate-media.b-cdn.net/azizi/noura/Noura%201br.png`;
const TWO_BR_PLAN_IMG = `https://luxury-real-estate-media.b-cdn.net/azizi/noura/Noura%202br.png`;

export const aziziNouraData = {
  en: {
    seo: {
      title: "Azizi Noura | Apartments in Downtown Jebel Ali (Studios to 2BR)",
      description:
        "Azizi Noura is a modern residential development by Azizi in Downtown Jebel Ali, offering studios, 1-bedroom and 2-bedroom apartments with a 50/50 payment plan and handover on Q4 2027.",
      keywords:
        "Azizi Noura, Azizi Developments, Downtown Jebel Ali, Jebel Ali, Dubai apartments, studio, 1 bedroom, 2 bedroom, 50/50 payment plan, 2027 handover",
      canonical: "/properties/apartments/azizi/noura",
    },

    project: {
      name: "Azizi Noura",
      developer: "Azizi Developments",
      location: "Downtown Jebel Ali, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 585,000",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
      type: "Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "MODERN LIVING IN DOWNTOWN JEBEL ALI",
      paragraphs: [
        "Azizi Noura is a contemporary residential project by Azizi Developments in Downtown Jebel Ali, designed for comfortable urban living with strong connectivity.",
        "The project offers a selection of Studio, 1-bedroom, and 2-bedroom apartments with practical layouts and modern finishes.",
        "Download the official factsheet, floorplates, and payment plan PDFs to review full details.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_EN_PDF, type: "main" },
        {
          title: "Download Floorplates & Retail",
          url: FLOORPLATES_RETAIL_PDF,
          type: "secondary",
        },
        {
          title: "Download Payment Plan",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("AZIZI Downtown Jebel Ali Plot 09_View 04.jpg"),
      imgAlt: "Azizi Noura exterior view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "From AED 585,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "50% / 50%",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Azizi Noura Visuals",
      slides: GALLERY,
      projectTag: "Azizi Noura",
    },

    // ✅ ONLY the 4 fields you agreed on
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "339 sq.ft",
            "Starting Price": "AED 585,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [STUDIO_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "656 sq.ft",
            "Starting Price": "AED 983,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [ONE_BR_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,144 sq.ft",
            "Starting Price": "AED 1,562,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [TWO_BR_PLAN_IMG],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_EN_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Kids Play Area", icon: "🧸", color: "#d7b46a" },
        { label: "Lobby & Security", icon: "🛡️", color: "#d7b46a" },
        { label: "Parking", icon: "🅿️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Noura",
      address: "Downtown Jebel Ali, Dubai, UAE",
      lat: 24.972377772669283,
      lng: 55.08994028464649,
      zoom: 16,
      proximityFeatures: [
        { icon: "🛣️", text: "Fast access to Sheikh Zayed Road corridors." },
        { icon: "🚇", text: "Well-connected area in Jebel Ali." },
        { icon: "🏙️", text: "Near key business and lifestyle districts." },
      ],
    },

    cta: {
      title: "Interested in Azizi Noura?",
      description:
        "Send your details to receive the latest availability, pricing, and the official documents for Azizi Noura.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي نورة | شقق في داون تاون جبل علي (استوديو حتى غرفتين)",
      description:
        "عزيزي نورة مشروع سكني حديث من عزيزي في داون تاون جبل علي، يوفّر استوديو وشقق غرفة وغرفتين مع خطة دفع 50/50 وموعد تسليم Q4 2027.",
      keywords:
        "عزيزي نورة، عزيزي، داون تاون جبل علي، شقق دبي، استوديو، غرفة، غرفتين، خطة دفع 50/50، تسليم 2027",
      canonical: "/properties/apartments/azizi/noura",
    },

    project: {
      name: "عزيزي نورة",
      developer: "عزيزي للتطوير العقاري",
      location: "داون تاون جبل علي، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "585,000 درهم",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "استوديو، غرفة، غرفتين",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي",
      rating: null,
    },

    intro: {
      title: "حياة عصرية في داون تاون جبل علي",
      paragraphs: [
        "عزيزي نورة مشروع سكني حديث من عزيزي للتطوير العقاري في داون تاون جبل علي، مصمم لأسلوب حياة مريح مع اتصال قوي بمناطق دبي الرئيسية.",
        "يوفّر المشروع وحدات استوديو وشقق غرفة نوم واحدة وغرفتي نوم بتخطيطات عملية وتشطيبات عصرية.",
        "يمكنك تحميل ورقة المعلومات الرسمية وملفات المخططات وخطة الدفع للاطلاع على التفاصيل الكاملة.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_EN_PDF, type: "main" },
        {
          title: "تحميل المخططات (Floorplates & Retail)",
          url: FLOORPLATES_RETAIL_PDF,
          type: "secondary",
        },
        {
          title: "تحميل خطة الدفع",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("AZIZI Downtown Jebel Ali Plot 09_View 04.jpg"),
      imgAlt: "إطلالة خارجية لمشروع عزيزي نورة",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "ابتداءً من 585,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "50% / 50%",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي نورة",
    },

    // ✅ ONLY the 4 fields you agreed on (AR keys)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "339 قدم²",
            "السعر الابتدائي": "585,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [STUDIO_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "656 قدم²",
            "السعر الابتدائي": "983,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [ONE_BR_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,144 قدم²",
            "السعر الابتدائي": "1,562,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [TWO_BR_PLAN_IMG],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_EN_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#d7b46a" },
        { label: "لوبي وأمن", icon: "🛡️", color: "#d7b46a" },
        { label: "مواقف سيارات", icon: "🅿️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي نورة",
      address: "داون تاون جبل علي، دبي، الإمارات",
      lat: 24.972377772669283,
      lng: 55.08994028464649,
      zoom: 16,
      proximityFeatures: [
        { icon: "🛣️", text: "سهولة الوصول إلى طرق دبي الرئيسية." },
        { icon: "🚇", text: "منطقة متصلة جيداً ضمن جبل علي." },
        { icon: "🏙️", text: "بالقرب من مناطق الأعمال والخدمات." },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي نورة؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار وروابط الملفات الرسمية لمشروع عزيزي نورة.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};
