// src/data/properties/apartments/arada/safa/safa-1.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /arada/safa-1
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Payment plan: 35/65
// ✅ Includes brochure PDF + full gallery + 2BR + 3BR floorplans
// ✅ Location: Muwaileh Commercial (same as before)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/safa-1";

// Safe encoder for Bunny filenames (spaces / parentheses / unicode safe)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames in your folder)
// ========================
const BROCHURE_PDF = cdn("Safa-1-BROCHURE-9-1-2025-Digital.pdf");

const FP_2BR = cdn("Safa 1 2br floor plan.webp");
const FP_3BR = cdn("Safa 1 3br floor plan.webp");

// Pick strong hero / intro images from your folder
const HERO_BG = cdn("241010-Corner view-01.jpg");
const INTRO_MAIN = cdn("230508-Living room copy.jpg");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  HERO_BG,
  cdn("241011-pool view-01.jpg"),
  cdn("241011-Elevation-01.jpg"),
  cdn("Back corner view.jpg"),
  cdn("Back-elevation-view-v2.png"),
  cdn("230508-Living room copy.jpg"),
  cdn("BR V01_241017.jpg"),
];

// ========================
// Data
// ========================
export const safa1Data = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Safa 1 by Arada | 2BR & 3BR Apartments in Muwaileh, Sharjah | 35/65 Payment Plan | Handover Q3 2027",
      description:
        "Safa 1 by Arada offers modern 2 and 3-bedroom apartments in Muwaileh Commercial, Sharjah. Prices start from AED 1,671,000 with a 35% / 65% payment plan and handover expected in Q3 2027. Browse the official brochure, gallery, and verified floor plans — linked directly from your Bunny folder.",
      keywords:
        "Safa 1, Arada, Sharjah apartments, Muwaileh Commercial, 2 bedroom apartment Sharjah, 3 bedroom apartment Sharjah, 35/65 payment plan, Q3 2027 handover, Arada project Sharjah",
      canonical: "/properties/apartments/arada/safa-1",
    },

    project: {
      name: "Safa 1",
      developer: "Arada",
      location: "Muwaileh Commercial, Sharjah, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,671,000",
      completionDate: "Q3 2027",
      paymentPlan: "35% / 65%",
      type: "Apartments",
      units: "2BR & 3BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "A PRACTICAL, MODERN ADDRESS IN MUWAILEH",
      paragraphs: [
        "Safa 1 by Arada is a contemporary apartment offering in Muwaileh Commercial, Sharjah — designed for end-users and investors who want a balanced lifestyle with strong connectivity and daily convenience.",
        "The release includes 2-bedroom and 3-bedroom layouts, starting from AED 1,671,000, with a clear 35% / 65% payment plan and an expected handover in Q3 2027.",
        "Below you’ll find your exact Bunny folder assets: the official brochure PDF, a complete gallery set, and verified 2BR + 3BR floor plan images — built in the same blueprint you’re using across the website (EN + AR).",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Safa-1-BROCHURE-9-1-2025-Digital.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Safa 1 living room",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,671,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,314 sq.ft",
          label: "2BR Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q3 2027",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Safa 1 Visuals",
      slides: GALLERY,
      projectTag: "Safa 1",
    },

    // ✅ Apartments style: tabs per unit (no variants)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          shortLabel: "2 BR",
          bedrooms: 2,
          specs: {
            "Total Area": "1,314 sq.ft",
            "Starting Price": "AED 1,671,000",
            Handover: "Q3 2027",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          shortLabel: "3 BR",
          bedrooms: 3,
          specs: {
            "Total Area": "2,057 sq.ft",
            "Starting Price": "AED 2,432,000",
            Handover: "Q3 2027",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Contemporary Living Spaces", icon: "🏙️", color: "#d7b46a" },
        { label: "Pool & Lifestyle Facilities", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Family-Friendly Community", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "Landscaped Areas", icon: "🌿", color: "#d7b46a" },
        { label: "Easy Road Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Safa 1",
      address: "Muwaileh Commercial, Sharjah, UAE",
      // ✅ same as your Muwaileh Commercial pin
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "Located in Muwaileh Commercial, Sharjah." },
        { icon: "🚗", text: "Convenient connectivity across Sharjah." },
        {
          icon: "🛍️",
          text: "Close to retail, services, and daily essentials.",
        },
      ],
    },

    cta: {
      title: "Interested in Safa 1?",
      description:
        "Share your details to receive availability, unit options, and the official brochure for Safa 1 by Arada in Muwaileh, Sharjah.",
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
        "صفا 1 من أرادَ | شقق 2 و3 غرف في مويلح – الشارقة | خطة دفع 35/65 | التسليم Q3 2027",
      description:
        "صفا 1 من أرادَ يقدم شققًا عصرية من غرفتين وثلاث غرف في مويلح التجارية – الشارقة. الأسعار تبدأ من 1,671,000 درهم مع خطة دفع 35% / 65% وتسليم متوقع في الربع الثالث 2027. استعرض الكتيّب الرسمي، معرض الصور، ومخططات الوحدات المعتمدة — مرتبطة مباشرة من مجلد Bunny الخاص بك.",
      keywords:
        "صفا 1, أرادَ, شقق الشارقة, مويلح التجارية, شقة غرفتين الشارقة, شقة 3 غرف الشارقة, خطة دفع 35/65, تسليم 2027, مشاريع أرادَ",
      canonical: "/properties/apartments/arada/safa-1",
    },

    project: {
      name: "صفا 1",
      developer: "أرادَ",
      location: "مويلح التجارية، الشارقة، الإمارات",
      status: "على الخريطة",
      startingPrice: "1,671,000 درهم",
      completionDate: "الربع الثالث 2027",
      paymentPlan: "35% / 65%",
      type: "شقق سكنية",
      units: "غرفتان و3 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادَ",
      rating: null,
    },

    intro: {
      title: "عنوان عملي وعصري في مويلح",
      paragraphs: [
        "مشروع صفا 1 من أرادَ هو طرح شقق سكنية عصرية ضمن مويلح التجارية – الشارقة، مناسب للسكن أو للاستثمار لمن يبحث عن أسلوب حياة متوازن مع سهولة الوصول للخدمات والوجهات الأساسية.",
        "يشمل الطرح مخططات غرفتين وثلاث غرف، بسعر يبدأ من 1,671,000 درهم، مع خطة دفع واضحة 35% / 65% وتسليم متوقع في الربع الثالث 2027.",
        "ستجد أدناه ملفاتك كما رفعتها على Bunny: الكتيّب الرسمي، معرض صور كامل، ومخططات 2 غرف + 3 غرف — وبنفس البنية التي تعتمدها عبر الموقع (EN + AR).",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Safa-1-BROCHURE-9-1-2025-Digital.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "غرفة معيشة صفا 1",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,671,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,314 قدم²",
          label: "مساحة 2 غرف",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q3 2027",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "صفا 1",
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
            "إجمالي المساحة": "1,314 قدم مربع",
            "السعر الابتدائي": "1,671,000 درهم",
            "موعد التسليم": "الربع الثالث 2027",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف نوم",
          shortLabel: "3 غرف",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "2,057 قدم مربع",
            "السعر الابتدائي": "2,432,000 درهم",
            "موعد التسليم": "الربع الثالث 2027",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مساحات عصرية", icon: "🏙️", color: "#d7b46a" },
        { label: "مسبح ومرافق نمط حياة", icon: "🏊", color: "#d7b46a" },
        { label: "لياقة وصحة", icon: "💪", color: "#d7b46a" },
        { label: "بيئة مناسبة للعائلات", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "مساحات خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "سهولة الوصول للطرق", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "صفا 1",
      address: "مويلح التجارية، الشارقة، الإمارات",
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "ضمن مويلح التجارية – الشارقة." },
        { icon: "🚗", text: "سهولة الوصول لمحاور الشارقة الرئيسية." },
        { icon: "🛍️", text: "قريب من الخدمات والاحتياجات اليومية." },
      ],
    },

    cta: {
      title: "مهتم بصفا 1؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات ورابط الكتيّب الرسمي لمشروع صفا 1 من أرادَ في مويلح – الشارقة.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default safa1Data;
