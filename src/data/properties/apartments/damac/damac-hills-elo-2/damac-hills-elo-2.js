// src/data/properties/apartments/damac/damac-hills-2-elo-2/damac-hills-2-elo-2.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ FULL EN + AR (same blueprint you approved)
// ✅ Uses ONLY your uploaded Bunny filenames (ignores .DS_Store)
// ✅ Hero background is the project VIDEO (ELO 2 LAUNCH 16X9 EN.mp4)
// ✅ FloorPlans = 4 fields ONLY (Total Area / Starting Price / Handover / Payment Plan)
// ✅ Floorplan image uses EXACT filename: "Elo 2 2br floor plans.webp"
// ✅ Location lat/lng taken from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-hills-2-elo-2";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const FACTSHEET_PDF = cdn("D2 - ELO 2 - Facesheet.pdf");
const BROCHURE_PDF = cdn("D2 - ELO 2 Digital Brochure (EN).pdf");
const VIDEO_HERO = cdn("ELO 2 LAUNCH 16X9 EN.mp4");

// ✅ Floor plan image (EXACT filename)
const FP_2BR = cdn("Elo 2 2br floor plans.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("D2 - ELO - 01.jpg"),
  cdn("D2 - ELO - 02.jpg"),
  cdn("D2 - ELO - 03.jpg"),
  cdn("D2 - ELO - 04.jpg"),
  cdn("D2 - ELO - 05.jpg"),
  cdn("D2 - ELO - 06.jpg"),
  cdn("D2 - ELO - 07.jpg"),
  cdn("D2 - ELO - 08.jpg"),
  cdn("D2 - ELO - 09.jpg"),
  cdn("D2 - ELO - 10.jpg"),
  cdn("D2 - ELO - 11.jpg"),
  cdn("D2 - ELO - 12.jpg"),
  cdn("D2 - ELO - 13.jpg"),
];

export const damacHills2Elo2Data = {
  en: {
    seo: {
      title:
        "Damac Hills 2 – ELO 2 by DAMAC | 2BR Apartments with 70/30 Payment Plan (Q2 2027)",
      description:
        "ELO 2 at DAMAC Hills 2 offers modern 2-bedroom apartments in a master-planned community designed for lifestyle, greenery, and value. Explore the official brochure, factsheet, floor plan, and full visual gallery.",
      keywords:
        "ELO 2, DAMAC Hills 2, DAMAC, 2 bedroom apartment, 70/30 payment plan, Q2 2027, Dubai",
      canonical: "/properties/apartments/damac/damac-hills-elo-2",
    },

    project: {
      name: "Damac Hills 2 – ELO 2",
      developer: "DAMAC Properties",
      location: "Damac Hills 2, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,312,000",
      completionDate: "Q2 2027",
      paymentPlan: "70/30",
      type: "Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "SMART 2-BEDROOM LIVING INSIDE A LIFESTYLE MASTER COMMUNITY",
      paragraphs: [
        "ELO 2 at DAMAC Hills 2 is designed for buyers who want a clean, modern apartment layout inside a large, amenity-rich community—without paying premium-central pricing. The project balances lifestyle and practicality: contemporary interiors, strong community planning, and the kind of outdoor-focused environment that makes day-to-day living feel calmer and more spacious.",
        "DAMAC Hills 2 is known for its “everything-in-one-place” approach—open areas, leisure zones, and community facilities that support families, young professionals, and rental demand. ELO 2 is positioned as a value-driven entry into that ecosystem, with a clear payment structure and a handover timeline that fits long-term planning.",
        "Below you’ll find the official factsheet and brochure, the exact 2-bedroom floor plan image, and the full gallery—built using your exact BunnyCDN filenames for perfect rendering on your website.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        {
          title: "Download Brochure (PDF)",
          url: BROCHURE_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("D2 - ELO - 04.jpg"),
      imgAlt: "ELO 2 at DAMAC Hills 2 - exterior render",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,312,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "990.93 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Damac Hills 2",
          label: "Community",
        },
      ],
    },

    gallery: {
      title: "ELO 2 Visuals",
      slides: GALLERY,
      projectTag: "Damac Hills 2 – ELO 2",
    },

    // ✅ FloorPlans: ONLY the 4 fields you agreed on
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "990.93 sq.ft",
            "Starting Price": "AED 1,312,000",
            Handover: "Q2 2027",
            "Payment Plan": "70% / 30%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        {
          label: "Master-Planned Community Living",
          icon: "🏡",
          color: "#d7b46a",
        },
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym & Fitness", icon: "💪", color: "#d7b46a" },
        { label: "Parks & Open Spaces", icon: "🌿", color: "#d7b46a" },
        {
          label: "Family-Friendly Lifestyle Zones",
          icon: "🎯",
          color: "#d7b46a",
        },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Damac Hills 2 – ELO 2",
      address: "ELO Tower by DAMAC, Damac Hills 2, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 24.9833445,
      lng: 55.3921669,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🌿",
          text: "Located inside DAMAC Hills 2—built around open space and lifestyle zones.",
        },
        {
          icon: "🛣️",
          text: "Community access designed for practical movement to major Dubai routes.",
        },
        {
          icon: "🏡",
          text: "A calmer residential setting with amenities supporting long-term living and rentals.",
        },
      ],
    },

    cta: {
      title: "Interested in ELO 2 at DAMAC Hills 2?",
      description:
        "Share your details to receive updated availability, pricing guidance, and the official documents for ELO 2 by DAMAC.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "داماك هيلز 2 – إيلو 2 من داماك | شقق غرفتين بخطة دفع 70/30 (Q2 2027)",
      description:
        "إيلو 2 في داماك هيلز 2 يقدّم شقق غرفتين بتصميم عصري داخل مجتمع متكامل يعتمد على أسلوب حياة عملي ومساحات خضراء. اطّلع على الكتيّب وورقة المعلومات والمخطط ومعرض الصور.",
      keywords: "إيلو 2, داماك هيلز 2, داماك, شقق غرفتين, 70/30, Q2 2027, دبي",
      canonical: "/properties/apartments/damac/damac-hills-elo-2",
    },

    project: {
      name: "داماك هيلز 2 – إيلو 2",
      developer: "داماك العقارية",
      location: "داماك هيلز 2، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,312,000 درهم",
      completionDate: "الربع الثاني 2027",
      paymentPlan: "70/30",
      type: "شقق سكنية",
      units: "غرفتان نوم",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "شقق غرفتين بتصميم عصري داخل مجتمع متكامل بأسلوب حياة عملي",
      paragraphs: [
        "مشروع إيلو 2 في داماك هيلز 2 موجّه للباحثين عن شقة حديثة بتخطيط ذكي داخل مجتمع كبير غني بالمرافق—مع قيمة أفضل مقارنة بالمناطق المركزية الأعلى تكلفة. الفكرة هنا هي تحقيق توازن بين الرفاهية اليومية والراحة العملية: مساحات داخلية معاصرة، تخطيط مجتمعي واضح، وأجواء أكثر هدوءًا وانفتاحًا.",
        "تشتهر داماك هيلز 2 بفلسفة “كل شيء بالقرب منك” عبر مناطق ترفيهية ومساحات مفتوحة ومرافق تخدم العائلات والمقيمين وتدعم الطلب الإيجاري. ويأتي إيلو 2 كخيار قوي للدخول إلى هذا المجتمع مع خطة دفع واضحة وتوقيت تسليم مناسب للتخطيط طويل المدى.",
        "ستجد أدناه ورقة المعلومات والكتيّب الرسميين، وصورة مخطط غرفتين بالاسم الأصلي، بالإضافة إلى معرض الصور الكامل—وجميع الروابط مبنية على أسماء ملفات BunnyCDN الخاصة بك كما هي لضمان عرض 100%.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
        { title: "تحميل الكتيّب (PDF)", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: cdn("D2 - ELO - 04.jpg"),
      imgAlt: "إيلو 2 في داماك هيلز 2 - واجهة المشروع",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,312,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "990.93 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Damac Hills 2",
          label: "المجتمع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "داماك هيلز 2 – إيلو 2",
    },

    // ✅ AR FloorPlans: same structure + Arabic keys (4 fields only)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "990.93 قدم²",
            "السعر الابتدائي": "1,312,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "70% / 30%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مجتمع سكني متكامل", icon: "🏡", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "مساحات خضراء وحدائق", icon: "🌿", color: "#d7b46a" },
        { label: "مناطق ترفيه للعائلات", icon: "🎯", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "داماك هيلز 2 – إيلو 2",
      address: "ELO Tower by DAMAC، داماك هيلز 2، دبي، الإمارات",
      lat: 24.9833445,
      lng: 55.3921669,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🌿",
          text: "داخل داماك هيلز 2 مع تركيز على المساحات المفتوحة.",
        },
        { icon: "🛣️", text: "وصول عملي لطرق دبي الرئيسية حسب تخطيط المجتمع." },
        {
          icon: "🏡",
          text: "بيئة سكنية هادئة مناسبة للعيش والاستثمار الإيجاري.",
        },
      ],
    },

    cta: {
      title: "مهتم بمشروع إيلو 2 في داماك هيلز 2؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وتفاصيل الأسعار والوثائق الرسمية لمشروع إيلو 2 من داماك.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacHills2Elo2Data;
