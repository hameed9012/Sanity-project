// src/data/properties/apartments/arada/nesba/nesba-3.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /arada/nesba
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Payment plan: 35/65
// ✅ Includes 2 brochures + full gallery + 2BR floorplan
// ✅ Location lat/lng from your Muwaileh Commercial maps link

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/nesba";

// Safe encoder for Bunny filenames (spaces / parentheses / unicode safe)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames in your folder)
// ========================
const BROCHURE_1_PDF = cdn("Nesba-1-BROCHURE-2.pdf");
const BROCHURE_2_PDF = cdn("Nesba-2-BROCHURE.pdf");

const FP_2BR = cdn("Nesba 3 2br floor plan.webp");

// Pick strong hero / intro images from your folder
const HERO_BG = cdn("Boulevard-building-Corner-view-02-(2).jpg");
const INTRO_MAIN = cdn("230419-Living-room-(1).jpg");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  HERO_BG,
  cdn("230425-pool-view.jpg"),
  cdn("230425-pool-view-B-(1).jpg"),
  cdn("230419-Living-room-(1).jpg"),
  cdn("230427-Kitchen-(1).jpg"),
  cdn("Back-corner-view.jpg"),
  cdn("Back-corner-view-B.jpg"),
  cdn("Back-elevation-view.jpg"),
  cdn("Back-elevation-view-(1).jpg"),
  cdn("Boulevard-building-elevation-(1).jpg"),
  cdn("Boulevard-building-side-elevation-B-(1).jpg"),
];

// ========================
// Data
// ========================
export const nesba3Data = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Nesba 3 by Arada | 2BR Apartments in Muwaileh, Sharjah | 35/65 Payment Plan | Handover Q2 2027",
      description:
        "Nesba 3 by Arada offers a modern 2-bedroom apartment lifestyle in Muwaileh Commercial, Sharjah. Starting from AED 1,655,000 with a 35% / 65% payment plan and handover in Q2 2027. Explore the official brochures, full gallery, and the 2BR floor plan — wired using your exact Bunny folder assets.",
      keywords:
        "Nesba 3, Arada, Sharjah apartments, Muwaileh Commercial, 2 bedroom apartment Sharjah, 35/65 payment plan, Q2 2027 handover, Arada project Sharjah",
      canonical: "/properties/apartments/arada/nesba-3",
    },

    project: {
      name: "Nesba 3",
      developer: "Arada",
      location: "Muwaileh Commercial, Sharjah, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,655,000",
      completionDate: "Q2 2027",
      paymentPlan: "35% / 65%",
      type: "Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "MODERN APARTMENT LIVING IN MUWAILEH, SHARJAH",
      paragraphs: [
        "Nesba 3 by Arada is designed for buyers seeking a practical, well-connected address in Muwaileh Commercial, Sharjah — ideal for end-users and investors looking for a contemporary apartment lifestyle.",
        "This release features 2-bedroom apartments with a total area of around 1,276 sq.ft, starting from AED 1,655,000, with a clear 35% / 65% payment plan and an expected handover in Q2 2027.",
        "Below you’ll find your exact Bunny folder assets: two official brochures, a complete gallery set, and the 2-bedroom floor plan image — structured in the same blueprint you’re using across the website (EN + AR).",
      ],
      brochures: [
        {
          title: "Download Brochure (Nesba 1)",
          url: BROCHURE_1_PDF,
          type: "main",
          fileName: "Nesba-1-BROCHURE-2.pdf",
          category: "Overview",
          description: "Official brochure PDF (Nesba 1).",
        },
        {
          title: "Download Brochure (Nesba 2)",
          url: BROCHURE_2_PDF,
          type: "secondary",
          fileName: "Nesba-2-BROCHURE.pdf",
          category: "Overview",
          description: "Official brochure PDF (Nesba 2).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Nesba 3 living room",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,655,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,276 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q2 2027",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Nesba 3 Visuals",
      slides: GALLERY,
      projectTag: "Nesba 3",
    },

    // ✅ Apartments style: single plans (no variants)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          shortLabel: "2 BR",
          bedrooms: 2,
          specs: {
            "Total Area": "1,276 sq.ft",
            "Starting Price": "AED 1,655,000",
            Handover: "Q2 2027",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_2_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        {
          label: "Contemporary Apartment Living",
          icon: "🏙️",
          color: "#d7b46a",
        },
        {
          label: "Family-Friendly Community Feel",
          icon: "👨‍👩‍👧‍👦",
          color: "#d7b46a",
        },
        { label: "Lifestyle Facilities Nearby", icon: "🛍️", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Landscaped Outdoor Areas", icon: "🌿", color: "#d7b46a" },
        { label: "Easy Road Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Nesba 3",
      address: "Muwaileh Commercial, Sharjah, UAE",
      // ✅ from your Muwaileh Commercial maps link
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "Located in Muwaileh Commercial, Sharjah." },
        { icon: "🚗", text: "Good access to main Sharjah road network." },
        {
          icon: "🏙️",
          text: "Close to daily conveniences, retail, and services.",
        },
      ],
    },

    cta: {
      title: "Interested in Nesba 3?",
      description:
        "Share your details to receive availability, unit options, and the brochures for Nesba 3 by Arada in Muwaileh, Sharjah.",
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
        "نِسبة 3 من أرادَ | شقق غرفتين في مويلح – الشارقة | خطة دفع 35/65 | التسليم Q2 2027",
      description:
        "نِسبة 3 من أرادَ توفر أسلوب حياة عصري لشقق غرفتين في مويلح التجارية – الشارقة. السعر يبدأ من 1,655,000 درهم مع خطة دفع 35% / 65% وتسليم متوقع في الربع الثاني 2027. استعرض الكتيّبات الرسمية، معرض الصور الكامل، ومخطط 2 غرفة — باستخدام ملفات Bunny الخاصة بك كما هي.",
      keywords:
        "نسبة 3, أرادَ, شقق الشارقة, مويلح التجارية, شقة غرفتين الشارقة, خطة دفع 35/65, تسليم 2027, مشاريع أرادَ",
      canonical: "/properties/apartments/arada/nesba-3",
    },

    project: {
      name: "نِسبة 3",
      developer: "أرادَ",
      location: "مويلح التجارية، الشارقة، الإمارات",
      status: "على الخريطة",
      startingPrice: "1,655,000 درهم",
      completionDate: "الربع الثاني 2027",
      paymentPlan: "35% / 65%",
      type: "شقق سكنية",
      units: "غرفتان نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادَ",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة عصري في مويلح – الشارقة",
      paragraphs: [
        "يقدّم مشروع نِسبة 3 من أرادَ خيارًا مناسبًا لمن يبحث عن شقق عصرية ضمن عنوان عملي ومترابط في مويلح التجارية – الشارقة، سواء للسكن أو للاستثمار.",
        "يضم هذا الطرح شقق غرفتين بمساحة إجمالية تقارب 1,276 قدم²، بسعر يبدأ من 1,655,000 درهم، مع خطة دفع واضحة 35% / 65% وتسليم متوقع في الربع الثاني 2027.",
        "ستجد أدناه ملفاتك كما رفعتها على Bunny: كتيّبان رسميان، معرض صور كامل، ومخطط شقة غرفتين — وبنفس البنية التي تعتمدها عبر الموقع (EN + AR).",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب (نِسبة 1)",
          url: BROCHURE_1_PDF,
          type: "main",
          fileName: "Nesba-1-BROCHURE-2.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي PDF (نِسبة 1).",
        },
        {
          title: "تحميل الكتيّب (نِسبة 2)",
          url: BROCHURE_2_PDF,
          type: "secondary",
          fileName: "Nesba-2-BROCHURE.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي PDF (نِسبة 2).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "غرفة معيشة مشروع نِسبة 3",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,655,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,276 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q2 2027",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "نِسبة 3",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان نوم",
          shortLabel: "2 غرف",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,276 قدم مربع",
            "السعر الابتدائي": "1,655,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_2_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "شقق عصرية", icon: "🏙️", color: "#d7b46a" },
        { label: "بيئة مناسبة للعائلات", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "قرب الخدمات اليومية", icon: "🛍️", color: "#d7b46a" },
        { label: "لياقة وصحة", icon: "💪", color: "#d7b46a" },
        { label: "مساحات خارجية خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "سهولة الوصول للطرق", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "نِسبة 3",
      address: "مويلح التجارية، الشارقة، الإمارات",
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "ضمن مويلح التجارية – الشارقة." },
        { icon: "🚗", text: "سهولة الوصول لمحاور الشارقة الرئيسية." },
        { icon: "🏙️", text: "قريب من الخدمات والمتاجر والاحتياجات اليومية." },
      ],
    },

    cta: {
      title: "مهتم بنِسبة 3؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات وروابط الكتيّبات الخاصة بمشروع نِسبة 3 من أرادَ في مويلح – الشارقة.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default nesba3Data;
