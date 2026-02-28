// src/data/properties/villas/arada/masaar/sequoia.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /arada/sequoia
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Includes BOTH PDFs + full gallery + 6BR floorplan image
// ✅ Location lat/lng from your Google Maps pin (exact)
// ✅ Payment Plan + Handover updated (45/55, Q2 2026)
// ✅ squareImageUrl: "/arada-developer.avif"

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/sequoia";

// Safe encoder for Bunny filenames (spaces / unicode safe)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// PDFs (EXACT filenames in your folder)
// ========================
const BROCHURE_PDF = cdn("Sequoia.pdf");
const FLOORPLANS_PDF = cdn("Sequoia_FloorPlan.pdf");

// ========================
// Floorplan (EXACT filename)
// ========================
const FP_6BR = cdn("Sequoia 6br floor plan.webp");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("12.webp"),
  cdn("15.webp"),
  cdn("15 (1).webp"),
  cdn("9560.webp"),
  cdn("9563.webp"),
  cdn("9564.webp"),
  cdn("D091D0B5D0B7D18BD0BCD18FD0BDD0BDD18BD0B9.webp"),
];

// Pick strong hero + intro images from your assets
const HERO_BG = cdn("2.webp");
const INTRO_MAIN = cdn("3.webp");

// ========================
// Data
// ========================
export const sequoiaData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Sequoia (Masaar) by Arada | 6BR Villa in Sharjah | Handover Q2 2026 | 45/55 Plan",
      description:
        "Sequoia at Masaar by Arada is a premium 6-bedroom villa in Sharjah’s nature-led community. With approx. 9,235 sq.ft of space, a 45/55 payment plan, and handover in Q2 2026, it’s built for families who want privacy, scale, and a green lifestyle. View the official brochure, floor plans PDF, gallery, and 6BR floor plan image from your Bunny folder.",
      keywords:
        "Sequoia Masaar, Arada Sequoia, Masaar by Arada, 6 bedroom villa Sharjah, Sequoia villa, Arada Masaar, forest community Sharjah, 45/55 payment plan, Q2 2026 handover",
      canonical: "/properties/villas/arada/sequoia",
    },

    project: {
      name: "Sequoia (Masaar)",
      developer: "Arada",
      location: "Masaar, Sharjah, UAE",
      status: "Off-Plan",
      startingPrice: "AED 9,460,000",
      completionDate: "Q2 2026",
      paymentPlan: "45% / 55%",
      type: "Villas",
      units: "6 Bedroom Villa",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "A 6-BEDROOM VILLA LIFESTYLE INSIDE MASAAR",
      paragraphs: [
        "Sequoia at Masaar by Arada is designed for buyers who want a large-scale family home wrapped in a calm, nature-first community in Sharjah.",
        "With an approximate area of 9,235 sq.ft, Sequoia offers generous indoor volumes, privacy-focused planning, and a lifestyle positioned around greenery and community wellness.",
        "Below you’ll find your exact Bunny assets: the official brochure PDF, floor plans PDF, a complete gallery set, and the 6-bedroom floor plan image — structured in the same blueprint you use across the website (EN + AR).",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Sequoia.pdf",
          category: "Overview",
          description: "Official project brochure (PDF).",
        },
        {
          title: "Download Floor Plans",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Sequoia_FloorPlan.pdf",
          category: "Floor Plans",
          description: "Floor plans PDF (unit layouts).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Sequoia (Masaar) by Arada visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 9,460,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "9,235 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q2 2026",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Sequoia Visuals",
      slides: GALLERY,
      projectTag: "Sequoia (Masaar)",
    },

    // ✅ Villas style (single plan, no variants needed)
    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "6br",
          title: "6 Bedroom Villa",
          shortLabel: "6 BR",
          bedrooms: 6,
          specs: {
            Unit: "6 Bedroom Villa",
            "Total Area": "9,235 sq.ft",
            "Starting Price": "AED 9,460,000",
            Handover: "Q2 2026",
            "Payment Plan": "45% / 55%",
          },
          images: [FP_6BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Lifestyle",
      amenities: [
        { label: "Nature-Led Community", icon: "🌿", color: "#d7b46a" },
        { label: "Large 6BR Villa Layout", icon: "🏡", color: "#d7b46a" },
        { label: "Family-Oriented Masterplan", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "Wellness & Outdoor Living", icon: "🏃", color: "#d7b46a" },
        { label: "Privacy & Space", icon: "🔒", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Sequoia (Masaar) by Arada",
      address: "Masaar, Sharjah, UAE",
      // ✅ exact from your Google Maps pin:
      lat: 25.2638769,
      lng: 55.5944654,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🌳",
          text: "Within Masaar’s green, walkable community concept.",
        },
        {
          icon: "🚗",
          text: "Good connectivity across Sharjah and key routes.",
        },
        { icon: "🏡", text: "A calm setting designed for family living." },
      ],
    },

    cta: {
      title: "Interested in Sequoia at Masaar?",
      description:
        "Share your details to receive updated availability, unit options, and the official PDFs for Sequoia (Masaar) by Arada.",
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
  // ✅ FIXED AR OBJECT (FULL PARITY + “WORKS” WITH BLUEPRINT COMPONENTS)
  ar: {
    seo: {
      title:
        "سيكويا (مسار) من أرادَ | فيلا 6 غرف في الشارقة | التسليم Q2 2026 | خطة 45/55",
      description:
        "سيكويا في مسار من أرادَ هي فيلا 6 غرف ضمن مجتمع طبيعي في الشارقة بمساحة تقريبية 9,235 قدم². مع خطة دفع 45% / 55% وموعد تسليم Q2 2026، توفر تجربة سكن عائلية واسعة بخصوصية عالية. استعرض الكتيّب الرسمي، ملف مخططات الطوابق PDF، معرض الصور، ومخطط 6 غرف من مجلد Bunny.",
      keywords:
        "سيكويا مسار, أرادَ, مسار الشارقة, فيلا 6 غرف الشارقة, Sequoia Masaar, خطة دفع 45/55, تسليم Q2 2026",
      canonical: "/properties/villas/arada/sequoia",
    },

    project: {
      name: "سيكويا (مسار)",
      developer: "أرادَ",
      location: "مسار، الشارقة، الإمارات",
      status: "على المخطط", // ✅ FIX (was: على الخريطة)
      market: "offplan", // ✅ FIX (missing)
      startingPrice: "9,460,000 درهم",
      completionDate: "Q2 2026",
      paymentPlan: "45% / 55%",
      type: "فلل",
      units: "فيلا 6 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادَ",
      rating: null,
    },

    intro: {
      title: "فيلا 6 غرف داخل مسار… أسلوب حياة وسط الطبيعة",
      paragraphs: [
        "سيكويا في مسار من أرادَ مصممة لمن يبحث عن منزل عائلي واسع ضمن مجتمع هادئ يركز على الطبيعة ونمط الحياة الصحي في الشارقة.",
        "بمساحة تقريبية 9,235 قدم²، تقدم سيكويا مساحات داخلية كبيرة وتخطيطًا عمليًا يركز على الخصوصية مع بيئة خضراء حولك.",
        "ستجد أدناه ملفاتك كما هي على Bunny: الكتيّب الرسمي، ملف مخططات الطوابق PDF، معرض صور كامل، ومخطط فيلا 6 غرف — وبنفس بنية البيانات المعتمدة في الموقع.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Sequoia.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي للمشروع (PDF).",
        },
        {
          title: "تحميل مخططات الطوابق",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Sequoia_FloorPlan.pdf",
          category: "مخططات الطوابق",
          description: "ملف PDF لمخططات الوحدات.",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "سيكويا (مسار) من أرادَ",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "9,460,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "9,235 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q2 2026",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "Sequoia (Masaar)", // ✅ keep stable tag like EN (safer for UI filters)
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "6br", // ✅ IMPORTANT
          title: "فيلا 6 غرف نوم",
          shortLabel: "6 BR",
          bedrooms: 6,
          // ✅ Using EN keys (safer if UI expects these keys + translates labels)
          specs: {
            Unit: "فيلا 6 غرف نوم",
            "Total Area": "9,235 قدم²",
            "Starting Price": "9,460,000 درهم",
            Handover: "Q2 2026",
            "Payment Plan": "45% / 55%",
          },
          images: [FP_6BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المميزات / أسلوب الحياة",
      amenities: [
        { label: "مجتمع طبيعي", icon: "🌿", color: "#d7b46a" },
        { label: "فيلا واسعة 6 غرف", icon: "🏡", color: "#d7b46a" },
        { label: "مناسب للعائلات", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "نمط حياة صحي وخارجي", icon: "🏃", color: "#d7b46a" },
        { label: "خصوصية ومساحة", icon: "🔒", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سيكويا (مسار) من أرادَ",
      address: "مسار، الشارقة، الإمارات العربية المتحدة",
      lat: 25.2638769,
      lng: 55.5944654,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌳", text: "ضمن مجتمع مسار بطابع أخضر وممرات للمشي." },
        { icon: "🚗", text: "سهولة الوصول إلى طرق الشارقة الرئيسية." },
        { icon: "🏡", text: "بيئة هادئة مصممة للعيش العائلي." },
      ],
    },

    cta: {
      title: "مهتم بسيكويا في مسار؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات وروابط ملفات PDF الرسمية لمشروع سيكويا (مسار) من أرادَ.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل مخططات الطوابق", action: "download-floorplans" },
      ],
    },
  },
};

export default sequoiaData;
