// src/data/properties/apartments/arada/the-gate-3.js

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/the-gate-3";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// PDFs
const BROCHURE_PDF = cdn("THE GATE 3 BROCHURE.pdf");

// Floorplans (shared names)
const FP_2BR = cdn("The gate 3 and 4 2br floor plan.webp");
const FP_3BR = cdn("The gate 3 and 4 3br floor plan.webp");
const FP_4BR = cdn("The gate 3 and 4 4 br floor plan.webp");

// Gallery images (folder list)
const GALLERY = [
  cdn("240827-screen-side-corner-view-04-HD.jpg"),
  cdn("240829-building-3-parkside-elevation-view-01-HD.jpg"),
  cdn("240829-Pool-view-01.jpg"),
  cdn("240830-Building-3-corner-view-01-HD.jpg"),
  cdn("240902-Bedroom.jpg"),
  cdn("240902-Living-room.jpg"),
  cdn("240902-Streetside-03.jpg"),
  cdn("240912-GYM-01.jpg"),
];

// Hero / Intro
const HERO_BG = cdn("240830-Building-3-corner-view-01-HD.jpg");
const INTRO_MAIN = cdn("240902-Living-room.jpg");

export const theGate3Data = {
  en: {
    seo: {
      title:
        "The Gate 3 by Arada | 2–4BR Apartments in Sharjah (Muwaileh) | Handover Q2 2027",
      description:
        "The Gate 3 by Arada offers 2–4 bedroom apartments in Muwaileh Commercial, Sharjah. Starting from AED 1,703,000 with a 35/65 payment plan and handover in Q2 2027. Explore gallery, brochure, and floor plans.",
      keywords:
        "The Gate 3, Arada, Sharjah apartments, Muwaileh Commercial, 2BR 3BR 4BR, 35/65 payment plan, Q2 2027",
      canonical: "/properties/apartments/arada/the-gate-3",
    },

    project: {
      name: "The Gate 3",
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
      title: "URBAN LIVING IN MUWAILEH",
      paragraphs: [
        "The Gate 3 by Arada is designed for modern Sharjah living in Muwaileh Commercial, combining strong layouts with lifestyle amenities.",
        "Choose from 2, 3, and 4-bedroom residences with a flexible 35/65 payment plan and an expected handover in Q2 2027.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "THE GATE 3 BROCHURE.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "The Gate 3 by Arada - interior",
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
      projectTag: "The Gate 3",
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
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Community Areas", icon: "🏛️", color: "#d7b46a" },
        { label: "Modern Interiors", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Location",
      projectName: "The Gate 3",
      address: "Muwaileh Commercial, Sharjah, UAE",
      // ✅ Same area as you stated (Muwaileh Commercial)
      // If you later send a Maps pin, I’ll update these to exact coordinates.
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "Muwaileh Commercial, Sharjah" },
        { icon: "🚗", text: "Easy access to main Sharjah routes" },
        { icon: "🛍️", text: "Close to daily essentials" },
      ],
    },

    cta: {
      title: "Interested in The Gate 3?",
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
        "ذا جيت 3 من أرادَ | شقق 2–4 غرف في الشارقة (المويلح) | التسليم Q2 2027",
      description:
        "ذا جيت 3 من أرادَ يوفر شقق 2–4 غرف في المويلح التجارية – الشارقة. يبدأ السعر من 1,703,000 درهم مع خطة دفع 35/65 وموعد تسليم Q2 2027. شاهد الصور، الكتيّب، ومخططات الطوابق.",
      keywords:
        "ذا جيت 3, أرادَ, شقق الشارقة, المويلح التجارية, 2 غرف 3 غرف 4 غرف, خطة دفع 35/65, تسليم Q2 2027",
      canonical: "/properties/apartments/arada/the-gate-3",
    },

    project: {
      name: "The Gate 3",
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
      title: "حياة عصرية في المويلح",
      paragraphs: [
        "ذا جيت 3 من أرادَ يقدم أسلوب حياة عصري في المويلح التجارية بالشارقة مع تصاميم عملية ومرافق مريحة.",
        "اختر بين شقق 2 و3 و4 غرف نوم مع خطة دفع 35/65 وموعد تسليم متوقع في Q2 2027.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "THE GATE 3 BROCHURE.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "ذا جيت 3 - صور داخلية",
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
      projectTag: "The Gate 3",
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
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "مناطق مجتمعية", icon: "🏛️", color: "#d7b46a" },
        { label: "تصميم داخلي عصري", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "الموقع",
      projectName: "The Gate 3",
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
      title: "مهتم بذا جيت 3؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي والأسعار وروابط ملفات الكتيّب ومخططات الطوابق الرسمية.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default theGate3Data;
