// src/data/properties/apartments/arada/akala/akala.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /arada/akala
// ✅ Encodes spaces safely (so "floor plan .png" works)
// ✅ EN + AR
// ✅ Off-Plan + Payment Plan 55/45 + Handover Q4 2029
// ✅ Includes brochure PDF + full gallery + 1BR–6BR floorplans (6BR price/area = On Request)
// ✅ Location lat/lng from your Google Maps pin (exact)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/akala";

// Safe encoder for Bunny filenames
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames in your folder)
// ========================
const BROCHURE_PDF = cdn("Akala-Residences-Tower-1-Brochure_Final-2.pdf");

// Floor Plans (EXACT filenames)
const FP_1BR = cdn("akala residences 1br floor plan.webp");
const FP_2BR = cdn("Akala residences 2br floor plan.webp");
const FP_3BR = cdn("akala residences 3br floor plans.webp");
const FP_4BR = cdn("akala residences 4br floor plan.webp");
const FP_5BR = cdn("akala residences 5br floor plan.webp");
const FP_6BR = cdn("akala residences 6br floor plan .png"); // note: space before .png

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  cdn("2B-Master-bedroom-02.jpg"),
  cdn("3B-living-03.jpg"),
  cdn("4B-Living-03.jpg"),
  cdn("4B-Master-bedroom-02.jpg"),
  cdn("5B-Massage-room.jpg"),
  cdn("5B-master-bathroom.jpg"),
  cdn("6B-closet.jpg"),
];

// ========================
// Data
// ========================
export const akalaResidencesData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Akala Residences by Arada | 1–5BR Luxury Residences in DIFC, Dubai | 55/45 | Q4 2029",
      description:
        "Akala Residences by Arada is a luxury residential address in DIFC, Dubai, offering large-format 1 to 5-bedroom homes with a clear 55/45 payment plan and handover in Q4 2029. Explore the official brochure, curated interior gallery, and detailed floor plan images (1BR–6BR) — wired directly from your Bunny CDN folder for a seamless viewing experience.",
      keywords:
        "Akala Residences, Arada, DIFC apartments, luxury residences DIFC, 1 bedroom DIFC, 2 bedroom DIFC, 3 bedroom DIFC, 4 bedroom DIFC, 5 bedroom DIFC, 55/45 payment plan, Q4 2029 Dubai",
      canonical: "/properties/apartments/arada/akala",
    },

    project: {
      name: "Akala Residences",
      developer: "Arada",
      location: "DIFC, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 3,880,000",
      completionDate: "Q4 2029",
      paymentPlan: "55% / 45%",
      type: "Apartments",
      units: "1 Bedroom to 5 Bedroom",
    },

    hero: {
      // Using an existing high-quality interior as hero background (no missing assets)
      backgroundUrl: cdn("4B-Living-03.jpg"),
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "LUXURY RESIDENCES IN DIFC WITH LARGE HOME SIZES",
      paragraphs: [
        "Akala Residences by Arada is positioned in DIFC for buyers who value a central, premium Dubai address paired with spacious layouts and a clean payment structure.",
        "With handover planned for Q4 2029 and a 55/45 payment plan, the project targets end-users and investors seeking long-term value in one of Dubai’s most established districts.",
        "Below you’ll find your exact Bunny folder assets: the official brochure PDF, a curated interior gallery, and floor plan images — built in the same EN + AR structure used across your website.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Akala-Residences-Tower-1-Brochure_Final-2.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
      ],
      imgUrl: cdn("3B-living-03.jpg"),
      imgAlt: "Akala Residences interior living area",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3,880,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1044.1 sq.ft",
          label: "1BR Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q4 2029",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Akala Residences Visuals",
      slides: GALLERY,
      projectTag: "Akala Residences",
    },

    // ✅ FloorPlans: ONLY the 4 fields you requested
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "1044.1 sq.ft",
            "Starting Price": "AED 3,880,000",
            Handover: "Q4 2029",
            "Payment Plan": "55% / 45%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1722.55 sq.ft",
            "Starting Price": "AED 6,060,000",
            Handover: "Q4 2029",
            "Payment Plan": "55% / 45%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "3126.14 sq.ft",
            "Starting Price": "AED 15,185,000",
            Handover: "Q4 2029",
            "Payment Plan": "55% / 45%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "3647.94 sq.ft",
            "Starting Price": "AED 18,380,000",
            Handover: "Q4 2029",
            "Payment Plan": "55% / 45%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br",
          title: "5 Bedroom",
          bedrooms: 5,
          specs: {
            "Total Area": "6256.59 sq.ft",
            "Starting Price": "AED 34,545,000",
            Handover: "Q4 2029",
            "Payment Plan": "55% / 45%",
          },
          images: [FP_5BR],
          features: ["—"],
        },
        {
          // ✅ floor plan exists, but no confirmed price/area was provided
          id: "6br",
          title: "6 Bedroom",
          bedrooms: 6,
          specs: {
            "Total Area": "On Request",
            "Starting Price": "On Request",
            Handover: "Q4 2029",
            "Payment Plan": "55% / 45%",
          },
          images: [FP_6BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Prime DIFC Address", icon: "📍", color: "#d7b46a" },
        { label: "Spacious Luxury Layouts", icon: "🏠", color: "#d7b46a" },
        { label: "Premium Interiors", icon: "✨", color: "#d7b46a" },
        { label: "Wellness Lifestyle", icon: "💪", color: "#d7b46a" },
        { label: "City Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Akala Residences",
      address: "DIFC, Dubai, UAE",
      // ✅ exact from your Google Maps pin
      lat: 25.2061498,
      lng: 55.2767975,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "Central DIFC location within Dubai’s core." },
        { icon: "🚗", text: "Easy access to major Dubai road connections." },
        { icon: "📍", text: "Close to key business and lifestyle districts." },
      ],
    },

    cta: {
      title: "Interested in Akala Residences?",
      description:
        "Share your details to receive current availability, unit options, and the official brochure for Akala Residences by Arada.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title:
        "أكالا ريزيدنس من أرادا | شقق فاخرة 1–5 غرف في DIFC دبي | 55/45 | الربع الرابع 2029",
      description:
        "أكالا ريزيدنس من أرادا مشروع سكني فاخر في مركز دبي المالي العالمي (DIFC)، يقدّم وحدات واسعة من 1 إلى 5 غرف نوم مع خطة دفع واضحة 55/45 وموعد تسليم في الربع الرابع 2029. استعرض الكتيّب الرسمي، معرض الصور الداخلي، ومخططات الطوابق (1–6 غرف) — جميعها مرتبطة مباشرة بملفات Bunny الخاصة بك بدون أي ملفات ناقصة.",
      keywords:
        "أكالا ريزيدنس, أرادا, DIFC دبي, شقق فاخرة DIFC, شقة غرفة, شقة غرفتين, شقة 3 غرف, شقة 4 غرف, شقة 5 غرف, خطة دفع 55/45, الربع الرابع 2029",
      canonical: "/properties/apartments/arada/akala",
    },

    project: {
      name: "أكالا ريزيدنس",
      developer: "أرادا",
      location: "DIFC، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "3,880,000 درهم",
      completionDate: "الربع الرابع 2029",
      paymentPlan: "55% / 45%",
      type: "شقق سكنية",
      units: "من 1 إلى 5 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("4B-Living-03.jpg"),
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادا",
      rating: null,
    },

    intro: {
      title: "شقق فاخرة في DIFC بمساحات كبيرة",
      paragraphs: [
        "يقع مشروع أكالا ريزيدنس من أرادا في DIFC لمن يبحث عن عنوان فاخر في قلب دبي مع مساحات واسعة وخطة دفع واضحة.",
        "مع تسليم متوقع في الربع الرابع 2029 وخطة دفع 55/45، يُعد المشروع خيارًا مناسبًا للسكن والاستثمار طويل المدى في واحدة من أقوى مناطق دبي.",
        "ستجد أدناه ملفاتك كما هي داخل Bunny: الكتيّب الرسمي، معرض الصور، ومخططات الطوابق — وبنفس بنية الموقع لديك (EN + AR).",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Akala-Residences-Tower-1-Brochure_Final-2.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
      ],
      imgUrl: cdn("3B-living-03.jpg"),
      imgAlt: "مساحة معيشة داخل أكالا ريزيدنس",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3,880,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1044.1 قدم²",
          label: "مساحة 1 غرفة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q4 2029",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "أكالا ريزيدنس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "1044.1 قدم مربع",
            "السعر الابتدائي": "3,880,000 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة الدفع": "55% / 45%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1722.55 قدم مربع",
            "السعر الابتدائي": "6,060,000 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة الدفع": "55% / 45%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "3126.14 قدم مربع",
            "السعر الابتدائي": "15,185,000 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة الدفع": "55% / 45%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "3647.94 قدم مربع",
            "السعر الابتدائي": "18,380,000 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة الدفع": "55% / 45%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br",
          title: "5 غرف نوم",
          bedrooms: 5,
          specs: {
            "إجمالي المساحة": "6256.59 قدم مربع",
            "السعر الابتدائي": "34,545,000 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة الدفع": "55% / 45%",
          },
          images: [FP_5BR],
          features: ["—"],
        },
        {
          id: "6br",
          title: "6 غرف نوم",
          bedrooms: 6,
          specs: {
            "إجمالي المساحة": "عند الطلب",
            "السعر الابتدائي": "عند الطلب",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة الدفع": "55% / 45%",
          },
          images: [FP_6BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "موقع قوي في DIFC", icon: "📍", color: "#d7b46a" },
        { label: "مساحات واسعة وفاخرة", icon: "🏠", color: "#d7b46a" },
        { label: "تشطيبات راقية", icon: "✨", color: "#d7b46a" },
        { label: "نمط حياة صحي", icon: "💪", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "أكالا ريزيدنس",
      address: "DIFC، دبي، الإمارات",
      lat: 25.2061498,
      lng: 55.2767975,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "موقع مركزي داخل DIFC." },
        { icon: "🚗", text: "سهولة الوصول لمحاور دبي الرئيسية." },
        { icon: "📍", text: "قريب من وجهات الأعمال ونمط الحياة." },
      ],
    },

    cta: {
      title: "مهتم بأكالا ريزيدنس؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات ورابط الكتيّب الرسمي لمشروع أكالا ريزيدنس من أرادا.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default akalaResidencesData;
