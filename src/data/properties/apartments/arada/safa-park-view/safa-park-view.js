// src/data/properties/apartments/arada/safa/safa-park-view.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /arada/safa-park-view
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Payment plan: 35/65
// ✅ Includes BOTH PDFs + full gallery + 1BR/2BR/3BR floorplans
// ✅ Location: Muwaileh Commercial, Sharjah (same pin)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/safa-park-view";

// Safe encoder for Bunny filenames (spaces / unicode safe)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// PDFs (EXACT filenames in your folder)
// ========================
const BROCHURE_PDF = cdn("Safa Parkview.pdf");
const FLOORPLANS_PDF = cdn("Safa Parkview Floor Plans.pdf");

// ========================
// Floorplans (EXACT filenames)
// ========================
const FP_1BR = cdn("Safa Parkview 1br floor plan.webp");
const FP_2BR = cdn("Safa Parkview 2br floor plan.webp");
const FP_3BR = cdn("Safa parkview 3br floor plan.webp");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  cdn("img113.webp"),
  cdn("img601.webp"),
  cdn("img161.webp"),
  cdn("img181.webp"),
  cdn("img177.webp"),
  cdn("img378.webp"),
  cdn("img241.webp"),
  cdn("img1228129.webp"),
];

// Choose strong hero + intro images from your assets
const HERO_BG = cdn("img601.webp");
const INTRO_MAIN = cdn("img241.webp");

// ========================
// Data
// ========================
export const safaParkViewData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Safa Park View by Arada | 1BR–3BR Apartments in Muwaileh, Sharjah | 35/65 Payment Plan | Handover Q4 2027",
      description:
        "Safa Park View by Arada offers 1, 2 and 3-bedroom apartments in Muwaileh Commercial, Sharjah. Prices start from AED 1,582,000 with a 35% / 65% payment plan and handover expected in Q4 2027. Explore the official brochure, dedicated floorplans PDF, gallery, and verified unit floor plan images — wired directly from your Bunny folder.",
      keywords:
        "Safa Park View, Arada, Sharjah apartments, Muwaileh Commercial, 1 bedroom apartment Sharjah, 2 bedroom apartment Sharjah, 3 bedroom apartment Sharjah, 35/65 payment plan, Q4 2027 handover, Arada projects Sharjah",
      canonical: "/properties/apartments/arada/safa-park-view",
    },

    project: {
      name: "Safa Park View",
      developer: "Arada",
      location: "Muwaileh Commercial, Sharjah, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,582,000",
      completionDate: "Q4 2027",
      paymentPlan: "35% / 65%",
      type: "Apartments",
      units: "1BR, 2BR & 3BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "PARK-SIDE LIVING IN MUWAILEH, SHARJAH",
      paragraphs: [
        "Safa Park View by Arada is designed for buyers seeking a practical Sharjah address with modern living spaces and strong daily convenience in Muwaileh Commercial.",
        "Choose from 1, 2, and 3-bedroom residences, with prices starting from AED 1,582,000 and a clear 35% / 65% payment plan. The expected handover is Q4 2027.",
        "Below you’ll find your exact Bunny assets: the official brochure PDF, a dedicated floorplans PDF, a complete gallery set, and verified unit floor plan images — built in the same blueprint structure you’re using across the website (EN + AR).",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Safa Parkview.pdf",
          category: "Overview",
          description: "Official project brochure (PDF).",
        },
        {
          title: "Download Floor Plans",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Safa Parkview Floor Plans.pdf",
          category: "Floor Plans",
          description: "Complete floor plans PDF (all unit types).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Safa Park View visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,582,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,069 sq.ft",
          label: "1BR Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Safa Park View Visuals",
      slides: GALLERY,
      projectTag: "Safa Park View",
    },

    // ✅ Apartments style: tabs per unit (no variants)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          shortLabel: "1 BR",
          bedrooms: 1,
          specs: {
            "Total Area": "1,069 sq.ft",
            "Starting Price": "AED 1,582,000",
            Handover: "Q4 2027",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          shortLabel: "2 BR",
          bedrooms: 2,
          specs: {
            "Total Area": "1,233 sq.ft",
            "Starting Price": "AED 1,606,000",
            Handover: "Q4 2027",
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
            "Total Area": "2,717 sq.ft",
            "Starting Price": "AED 3,765,000",
            Handover: "Q4 2027",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      // If your UI uses this as the "download floorplans" button, keep it here:
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Park-Adjacent Lifestyle", icon: "🌳", color: "#d7b46a" },
        { label: "Contemporary Residences", icon: "🏙️", color: "#d7b46a" },
        { label: "Pool & Leisure Spaces", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Family-Friendly Community", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "Easy Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Safa Park View",
      address: "Muwaileh Commercial, Sharjah, UAE",
      // ✅ same pin you used for Muwaileh Commercial
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "Located in Muwaileh Commercial, Sharjah." },
        { icon: "🚗", text: "Convenient access to key Sharjah roads." },
        { icon: "🛍️", text: "Near retail, services, and daily essentials." },
      ],
    },

    cta: {
      title: "Interested in Safa Park View?",
      description:
        "Share your details to receive availability, unit options, and both PDFs (brochure + floor plans) for Safa Park View by Arada in Muwaileh, Sharjah.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title:
        "صفا بارك فيو من أرادَ | شقق 1–3 غرف في مويلح – الشارقة | خطة دفع 35/65 | التسليم Q4 2027",
      description:
        "صفا بارك فيو من أرادَ يقدم شققًا من غرفة إلى 3 غرف في مويلح التجارية – الشارقة. الأسعار تبدأ من 1,582,000 درهم مع خطة دفع 35% / 65% وتسليم متوقع في الربع الرابع 2027. استعرض الكتيّب الرسمي، ملف مخططات الطوابق PDF، معرض الصور، ومخططات الوحدات المعتمدة — مرتبطة مباشرة من مجلد Bunny الخاص بك.",
      keywords:
        "صفا بارك فيو, أرادَ, شقق الشارقة, مويلح التجارية, شقة غرفة نوم الشارقة, شقة غرفتين الشارقة, شقة 3 غرف الشارقة, خطة دفع 35/65, تسليم 2027, مشاريع أرادَ",
      canonical: "/properties/apartments/arada/safa-park-view",
    },

    project: {
      name: "صفا بارك فيو",
      developer: "أرادَ",
      location: "مويلح التجارية، الشارقة، الإمارات",
      status: "على الخريطة",
      startingPrice: "1,582,000 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: "35% / 65%",
      type: "شقق سكنية",
      units: "1 و2 و3 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادَ",
      rating: null,
    },

    intro: {
      title: "إطلالة على أسلوب حياة قريب من الحديقة في مويلح",
      paragraphs: [
        "مشروع صفا بارك فيو من أرادَ يوفر شققًا عصرية ضمن مويلح التجارية – الشارقة، مناسب لمن يبحث عن عنوان عملي مع مرافق يومية وخيارات سكن متعددة.",
        "اختر بين 1 و2 و3 غرف نوم، بسعر يبدأ من 1,582,000 درهم مع خطة دفع واضحة 35% / 65% وتسليم متوقع في الربع الرابع 2027.",
        "ستجد أدناه ملفاتك كما رفعتها على Bunny: الكتيّب الرسمي، ملف مخططات الطوابق PDF، معرض صور كامل، ومخططات وحدات معتمدة — وبنفس البنية التي تعتمدها عبر الموقع (EN + AR).",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Safa Parkview.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي للمشروع (PDF).",
        },
        {
          title: "تحميل مخططات الطوابق",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Safa Parkview Floor Plans.pdf",
          category: "مخططات الطوابق",
          description: "ملف PDF يحتوي على جميع مخططات الوحدات.",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور صفا بارك فيو",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,582,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,069 قدم²",
          label: "مساحة 1 غرفة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "صفا بارك فيو",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          shortLabel: "1 غرفة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "1,069 قدم مربع",
            "السعر الابتدائي": "1,582,000 درهم",
            "موعد التسليم": "الربع الرابع 2027",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          shortLabel: "2 غرف",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,233 قدم مربع",
            "السعر الابتدائي": "1,606,000 درهم",
            "موعد التسليم": "الربع الرابع 2027",
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
            "إجمالي المساحة": "2,717 قدم مربع",
            "السعر الابتدائي": "3,765,000 درهم",
            "موعد التسليم": "الربع الرابع 2027",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "أسلوب حياة قرب الحديقة", icon: "🌳", color: "#d7b46a" },
        { label: "شقق عصرية", icon: "🏙️", color: "#d7b46a" },
        { label: "مسبح ومناطق ترفيه", icon: "🏊", color: "#d7b46a" },
        { label: "لياقة وصحة", icon: "💪", color: "#d7b46a" },
        { label: "بيئة مناسبة للعائلات", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "سهولة الوصول", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "صفا بارك فيو",
      address: "مويلح التجارية، الشارقة، الإمارات",
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "ضمن مويلح التجارية – الشارقة." },
        { icon: "🚗", text: "سهولة الوصول لمحاور الشارقة." },
        { icon: "🛍️", text: "قريب من الخدمات والاحتياجات اليومية." },
      ],
    },

    cta: {
      title: "مهتم بصفا بارك فيو؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات وروابط ملفات PDF (الكتيّب + مخططات الطوابق) لمشروع صفا بارك فيو من أرادَ في مويلح – الشارقة.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل مخططات الطوابق", action: "download-floorplans" },
      ],
    },
  },
};

export default safaParkViewData;
