// src/data/properties/apartments/azizi/raffi/raffi.js
// ✅ Same structure as your working Azizi files: { en: {...}, ar: {...} }
// ✅ BunnyCDN filenames EXACTLY as your screenshot
// ✅ FloorPlans ONLY contain: Total Area / Starting Price / Handover / Payment Plan

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/raffi";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs (EXACT filenames)
const FACTSHEET_PDF = cdn("AZIZI RAFFI_FACTSHEET.pdf");
const BROCHURE_PDF = cdn("AFC-054B.pdf");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("AFC-054B-D-101-IMG01_DAY.jpg"),
  cdn("AFC-054B-D-102-IMG01_NIGHT.jpg"),
  cdn("AFC-054B-D-103-IMG02_DAY.jpg"),
  cdn("AFC-054B-D-104-IMG02_NIGHT.jpg"),
  cdn("AFC-054B-D-201-IMG-GF-LOBBY-RETAIL.jpg"),
  cdn("AFC-054B-D-202-IMG-GF-LOBBY-RETAIL.jpg"),
  cdn("AFC-054B-D-203-IMG-GYM.jpg"),
  cdn("AFC-054B-D-204-IMG-UNIT.jpg"),
  cdn("AFC-054B-D-205-IMG-UNIT.jpg"),
  cdn("AFC-054B-D-206-IMG-UNIT.jpg"),
  cdn("AFC-054B-D-207-IMG-UNIT.jpg"),
];

// ✅ Hero image (no mp4 listed in your Raffi folder)
const HERO_BG = cdn("AFC-054B-D-101-IMG01_DAY.jpg");

// ✅ Plan images (since no separate floorplan images were listed, we reuse strong unit visuals)
const STUDIO_PLAN_IMG = `https://luxury-real-estate-media.b-cdn.net/azizi/raffi/raffi%20studio.png`;
const ONE_BED_PLAN_IMG = `https://luxury-real-estate-media.b-cdn.net/azizi/raffi/raffi%201br.png`;
const TWO_BED_PLAN_IMG = `https://luxury-real-estate-media.b-cdn.net/azizi/raffi/raffi%202br.png`;
const THREE_BED_PLAN_IMG = `https://luxury-real-estate-media.b-cdn.net/azizi/raffi/raffi%203br.png`;

export const aziziRaffiData = {
  en: {
    seo: {
      title: "Azizi Raffi | Apartments in Al Furjan, Dubai | Handover Q4 2026",
      description:
        "Azizi Raffi by Azizi Developments is an off-plan residential project in Al Furjan, Dubai, offering studios and 1–3 bedroom apartments with flexible payment plans and handover expected in Q4 2026.",
      keywords:
        "Azizi Raffi, Azizi Developments, Al Furjan apartments, Dubai off plan, studio, 1 bedroom, 2 bedroom, 3 bedroom, Q4 2026",
      canonical: "/properties/apartments/azizi/raffi",
    },

    project: {
      name: "Azizi Raffi",
      developer: "Azizi Developments",
      location: "Al Furjan, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 787,000",
      completionDate: "Q4 2026",
      paymentPlan: "50% / 50%",
      type: "Apartments",
      units: "Studios, 1, 2 & 3 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "A MODERN RESIDENTIAL ADDRESS IN AL FURJAN",
      paragraphs: [
        "Azizi Raffi is a contemporary residential project by Azizi Developments located in Al Furjan, a well-connected and fast-growing community in Dubai.",
        "The project offers a selection of studios and 1–3 bedroom apartments designed for comfortable living, with practical layouts and modern finishes.",
        "Download the official factsheet and brochure to review full specifications, master information, and details.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        { title: "Download Brochure", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: cdn("AFC-054B-D-201-IMG-GF-LOBBY-RETAIL.jpg"),
      imgAlt: "Azizi Raffi lobby and retail area",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q4 2026",
          label: "Handover",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "50% /50%",
          label: "Payment Plan",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Al Furjan",
          label: "Dubai",
        },
      ],
    },

    gallery: {
      title: "Azizi Raffi Visuals",
      slides: GALLERY,
      projectTag: "Azizi Raffi",
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
            "Total Area": "365 sq.ft",
            "Starting Price": "AED 787,000",
            Handover: "Q4 2026",
            "Payment Plan": "50% /50%",
          },
          images: [STUDIO_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "776 sq.ft",
            "Starting Price": "AED 1,079,000",
            Handover: "Q4 2026",
            "Payment Plan": "50% /50%",
          },
          images: [ONE_BED_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,160 sq.ft",
            "Starting Price": "AED 2,024,000",
            Handover: "Q4 2026",
            "Payment Plan": "50% /50%",
          },
          images: [TWO_BED_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1,493 sq.ft",
            "Starting Price": "AED 2,514,000",
            Handover: "Q4 2026",
            "Payment Plan": "50% /50%",
          },
          images: [THREE_BED_PLAN_IMG],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Lobby & Retail", icon: "🛍️", color: "#d7b46a" },
        { label: "Modern Interiors", icon: "🛋️", color: "#d7b46a" },
        { label: "Community Living", icon: "🏡", color: "#d7b46a" },
        { label: "Strong Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Raffi",
      address: "Al Furjan, Dubai, United Arab Emirates",
      lat: 25.0267946,
      lng: 55.1471991,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚇", text: "Close to key transport links in Al Furjan." },
        { icon: "🛍️", text: "Easy access to shopping and daily essentials." },
        { icon: "🏖️", text: "Quick drive to major Dubai destinations." },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي رافي | شقق في الفرجان دبي | التسليم Q4 2026",
      description:
        "عزيزي رافي من عزيزي للتطوير العقاري مشروع سكني قيد الإنشاء في الفرجان – دبي، يضم استوديو وشقق 1–3 غرف نوم مع خطط دفع مرنة وموعد تسليم متوقع Q4 2026.",
      keywords:
        "عزيزي رافي, عزيزي, شقق الفرجان, عقارات دبي قيد الإنشاء, استوديو, غرفة, غرفتين, ثلاث غرف, Q4 2026",
      canonical: "/properties/apartments/azizi/raffi",
    },

    project: {
      name: "عزيزي رافي",
      developer: "عزيزي للتطوير العقاري",
      location: "الفرجان، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "787,000 درهم",
      completionDate: "Q4 2026",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "استوديو، 1، 2، 3 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي",
      rating: null,
    },

    intro: {
      title: "عنوان سكني عصري في الفرجان",
      paragraphs: [
        "عزيزي رافي مشروع سكني حديث من عزيزي للتطوير العقاري في منطقة الفرجان – دبي، ضمن مجتمع متنامٍ يتميز بسهولة الوصول والاتصال.",
        "يوفّر المشروع وحدات متنوعة تشمل الاستوديو وشقق 1–3 غرف نوم بتصميم عملي وتشطيبات عصرية.",
        "يمكنك تحميل ورقة المعلومات الرسمية والبروشور للاطلاع على التفاصيل الكاملة والمواصفات.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
        { title: "تحميل البروشور", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: cdn("AFC-054B-D-201-IMG-GF-LOBBY-RETAIL.jpg"),
      imgAlt: "اللوبي والمنطقة التجارية في عزيزي رافي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q4 2026",
          label: "موعد التسليم",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "50/50 أو 40/60",
          label: "خطة الدفع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "الفرجان",
          label: "دبي",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي رافي",
    },

    // ✅ AR FloorPlans: ONLY the 4 agreed fields
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "365 قدم²",
            "السعر الابتدائي": "787,000 درهم",
            "موعد التسليم": "Q4 2026",
            "خطة الدفع": "50/50 أو 40/60",
          },
          images: [STUDIO_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "776 قدم²",
            "السعر الابتدائي": "1,079,000 درهم",
            "موعد التسليم": "Q4 2026",
            "خطة الدفع": "50/50 أو 40/60",
          },
          images: [ONE_BED_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,160 قدم²",
            "السعر الابتدائي": "2,024,000 درهم",
            "موعد التسليم": "Q4 2026",
            "خطة الدفع": "50/50 أو 40/60",
          },
          images: [TWO_BED_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "3br",
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,493 قدم²",
            "السعر الابتدائي": "2,514,000 درهم",
            "موعد التسليم": "Q4 2026",
            "خطة الدفع": "50/50 أو 40/60",
          },
          images: [THREE_BED_PLAN_IMG],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "لوبي ومنطقة تجارية", icon: "🛍️", color: "#d7b46a" },
        { label: "تشطيبات عصرية", icon: "🛋️", color: "#d7b46a" },
        { label: "مجتمع سكني متكامل", icon: "🏡", color: "#d7b46a" },
        { label: "اتصال ممتاز", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي رافي",
      address: "الفرجان، دبي، الإمارات العربية المتحدة",
      lat: 25.0267946,
      lng: 55.1471991,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚇", text: "قريب من وسائل النقل والطرق الرئيسية في الفرجان." },
        { icon: "🛍️", text: "سهولة الوصول إلى الخدمات اليومية والتسوق." },
        { icon: "🏖️", text: "قريب من أبرز وجهات دبي بالسيارة." },
      ],
    },
  },
};
