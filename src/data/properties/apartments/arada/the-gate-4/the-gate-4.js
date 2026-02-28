// src/data/properties/apartments/arada/the-gate-4.js

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/the-gate-4";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// PDF
const BROCHURE_PDF = cdn("The-GATE-4-Brochure-Digital.pdf");

// Floorplans (same filenames as your folder list)
const FP_2BR = cdn("The gate 3 and 4 2br floor plan.webp");
const FP_3BR = cdn("The gate 3 and 4 3br floor plan.webp");
const FP_4BR = cdn("The gate 3 and 4 4 br floor plan.webp");

// Gallery (Gate 4 has 4 images in folder)
const GALLERY = [
  cdn("Gate4-1BR.jpg"),
  cdn("Gate4-2BR.jpg"),
  cdn("Gate4-3BR.jpg"),
  cdn("Gate4-4BR.jpg"),
];

// Hero / Intro (use strongest building image)
const HERO_BG = cdn("Gate4-4BR.jpg");
const INTRO_MAIN = cdn("Gate4-2BR.jpg");

export const theGate4Data = {
  en: {
    seo: {
      title:
        "The Gate 4 by Arada | 2–4BR Apartments in Sharjah (Muwaileh) | Handover Q2 2027",
      description:
        "The Gate 4 by Arada offers 2–4 bedroom apartments in Muwaileh Commercial, Sharjah. Starting from AED 1,703,000 with a 35/65 payment plan and handover in Q2 2027. Explore gallery, brochure, and floor plans.",
      keywords:
        "The Gate 4, Arada, Sharjah apartments, Muwaileh Commercial, 2BR 3BR 4BR, 35/65 payment plan, Q2 2027",
      canonical: "/properties/apartments/arada/the-gate-4",
    },

    project: {
      name: "The Gate 4",
      developer: "Arada",
      location: "Muwaileh Commercial, Sharjah, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,703,000",
      completionDate: "Q2 2027",
      paymentPlan: "35% / 65%",
      type: "Apartments",
      units: "2–4 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "THE GATE 4 — MODERN SHARJAH LIFESTYLE",
      paragraphs: [
        "The Gate 4 by Arada delivers modern apartment living in Muwaileh Commercial, Sharjah — with practical layouts and clean contemporary finishes.",
        "This file uses your exact Bunny assets for Gate 4: official brochure PDF, gallery images, and the shared 2–4BR floor plan files.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "The-GATE-4-Brochure-Digital.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "The Gate 4 by Arada - visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1.703M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q2 2027",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📌",
          value: "Muwaileh",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "The Gate 4",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          shortLabel: "2 BR",
          bedrooms: 2,
          specs: {
            Unit: "2 Bedroom Apartment",
            "Total Area": "1,308 sq.ft",
            "Starting Price": "AED 1,703,000",
            Handover: "Q2 2027",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          shortLabel: "3 BR",
          bedrooms: 3,
          specs: {
            Unit: "3 Bedroom Apartment",
            "Total Area": "1,894 sq.ft",
            "Starting Price": "AED 2,354,000",
            Handover: "Q2 2027",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          shortLabel: "4 BR",
          bedrooms: 4,
          specs: {
            Unit: "4 Bedroom Apartment",
            "Total Area": "3,187 sq.ft",
            "Starting Price": "AED 4,047,000",
            Handover: "Q2 2027",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Modern Living", icon: "✨", color: "#d7b46a" },
        { label: "Lifestyle Facilities", icon: "🏛️", color: "#d7b46a" },
        { label: "Community Areas", icon: "🧩", color: "#d7b46a" },
        { label: "Sharjah Location", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Location",
      projectName: "The Gate 4",
      address: "Muwaileh Commercial, Sharjah, UAE",
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "Muwaileh Commercial, Sharjah" },
        { icon: "🚗", text: "Easy access to key routes" },
        { icon: "🛍️", text: "Near daily essentials" },
      ],
    },

    cta: {
      title: "Interested in The Gate 4?",
      description:
        "Send your details to receive updated availability, pricing, and the official brochure & floor plan files.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "ذا جيت 4 من أرادَ | شقق 2–4 غرف في الشارقة (المويلح) | التسليم Q2 2027",
      description:
        "ذا جيت 4 من أرادَ يوفر شقق 2–4 غرف في المويلح التجارية – الشارقة. يبدأ السعر من 1,703,000 درهم مع خطة دفع 35/65 وموعد تسليم Q2 2027. شاهد الصور، الكتيّب، ومخططات الطوابق.",
      keywords:
        "ذا جيت 4, أرادَ, شقق الشارقة, المويلح التجارية, 2 غرف 3 غرف 4 غرف, خطة دفع 35/65, تسليم Q2 2027",
      canonical: "/properties/apartments/arada/the-gate-4",
    },

    project: {
      name: "The Gate 4",
      developer: "أرادَ",
      location: "المويلح التجارية، الشارقة، الإمارات",
      status: "على الخريطة",
      startingPrice: "1,703,000 درهم",
      completionDate: "Q2 2027",
      paymentPlan: "35% / 65%",
      type: "شقق",
      units: "2–4 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادَ",
      rating: null,
    },

    intro: {
      title: "ذا جيت 4 — أسلوب حياة عصري",
      paragraphs: [
        "ذا جيت 4 من أرادَ يقدم شقق عصرية في المويلح التجارية بالشارقة مع تصاميم عملية ولمسات حديثة.",
        "هذا الملف يستخدم أصولك الفعلية على Bunny: كتيّب المشروع الرسمي PDF، صور المعرض، ومخططات الطوابق المشتركة من 2 إلى 4 غرف.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "The-GATE-4-Brochure-Digital.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "ذا جيت 4 - صور المشروع",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1.703M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q2 2027",
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📌",
          value: "المويلح",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "The Gate 4",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "شقة 2 غرف",
          shortLabel: "2 غرف",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "شقة 2 غرف نوم",
            "إجمالي المساحة": "1,308 قدم²",
            "السعر الابتدائي": "1,703,000 درهم",
            "موعد التسليم": "Q2 2027",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "شقة 3 غرف",
          shortLabel: "3 غرف",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "شقة 3 غرف نوم",
            "إجمالي المساحة": "1,894 قدم²",
            "السعر الابتدائي": "2,354,000 درهم",
            "موعد التسليم": "Q2 2027",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "شقة 4 غرف",
          shortLabel: "4 غرف",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "شقة 4 غرف نوم",
            "إجمالي المساحة": "3,187 قدم²",
            "السعر الابتدائي": "4,047,000 درهم",
            "موعد التسليم": "Q2 2027",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "حياة عصرية", icon: "✨", color: "#d7b46a" },
        { label: "مرافق نمط الحياة", icon: "🏛️", color: "#d7b46a" },
        { label: "مناطق مجتمعية", icon: "🧩", color: "#d7b46a" },
        { label: "موقع مميز في الشارقة", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "الموقع",
      projectName: "The Gate 4",
      address: "المويلح التجارية، الشارقة، الإمارات العربية المتحدة",
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "المويلح التجارية – الشارقة" },
        { icon: "🚗", text: "سهولة الوصول للطرق الرئيسية" },
        { icon: "🛍️", text: "بالقرب من الخدمات اليومية" },
      ],
    },

    cta: {
      title: "مهتم بذا جيت 4؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي والأسعار وروابط ملفات الكتيّب ومخططات الطوابق الرسمية.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default theGate4Data;
