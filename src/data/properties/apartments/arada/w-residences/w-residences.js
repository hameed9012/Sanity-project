// src/data/properties/apartments/arada/w-residences.js

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/w-residences";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// PDF
const BROCHURE_PDF = cdn("w-residences-brochure.pdf");

// Floorplans
const FP_1BR = cdn("w the residence 1br floor plan.webp");
const FP_2BR = cdn("w the residence 2 br floor plan.webp");
const FP_3BR = cdn("w the residence 3br floor plan.webp");
const FP_4BR = cdn("w the residence 4br floor plan.webp");
const FP_5BR = cdn("W the residence 5br floor plan.webp");

// Gallery (use your folder list)
const GALLERY = [
  cdn("240522-Frontside-Landscape-10.jpg"),
  cdn("240524-Amphitheatre-03.jpg"),
  cdn("240524-Front-side-portrate-view-02.jpg"),
  cdn("240527-backside-portrate-10.jpg"),
  cdn("240528-Cabana-04.jpg"),
  cdn("240528-Gym-04.jpg"),
  cdn("240528-Looking-up-03.jpg"),
  cdn("240626-podium-pool-05-10K.jpg"),
  cdn("240626-Rooftop-pool-02.jpg"),
  cdn("240809-Golf-simulator-01.jpg"),
  cdn("240925-Amphitheatre-05.jpg"),
  cdn("240925-Duplex-closeup-view-03.jpg"),
  cdn("241003-TREATMENT-ROOM-v01.jpg"),
  cdn("241010_Duplex-closeup-view_10K.jpg"),
  cdn("2BR-KIT_240905-C.jpg"),
  cdn("2BR-TYP-BTR_240904-v01-B.jpg"),
  cdn("2BR-TYP-BTR_240905-v02-B.jpg"),
  cdn("4BR-LR-v01_240909.jpg"),
  cdn("Cinema-01-1-(1).jpg"),
  cdn("LOFT-240905-C4.jpg"),
  cdn("PH-FL-V01_240905.jpg"),
  cdn("PUBLIC-AREAS---KIDS-CLUB_240828-3-1.jpg"),
  cdn("ROOFTOP-POOL.jpg"),
];

// Hero / Intro
const HERO_BG = cdn("240626-podium-pool-05-10K.jpg");
const HERO_INSET = cdn("240524-Front-side-portrate-view-02.jpg");
const INTRO_MAIN = cdn("2BR-KIT_240905-C.jpg");

// Map (from your Google Maps pin)
const MAP = {
  lat: 25.0760751,
  lng: 55.1514071,
  zoom: 14,
  address: "W Residences JLT, Dubai, UAE",
};

export const wResidencesData = {
  en: {
    seo: {
      title:
        "W Residences | Luxury Apartments | 1–5BR | Payment Plan 50/50 | Handover Q4 2028",
      description:
        "W Residences by Arada offers 1–5 bedroom luxury residences with a 50/50 payment plan and handover in Q4 2028. Explore gallery, brochure, and floor plans.",
      keywords:
        "W Residences, Arada, luxury apartments Dubai, 1BR 2BR 3BR 4BR 5BR, 50/50 payment plan, Q4 2028",
      canonical: "/properties/apartments/arada/w-residences",
    },

    project: {
      name: "W Residences",
      developer: "Arada",
      location: "Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 4,320,000",
      completionDate: "Q4 2028",
      paymentPlan: "50% / 50%",
      type: "Luxury Residences",
      units: "1–5 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      insetImageUrl: HERO_INSET,
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "ICONIC W-STYLE LIVING",
      paragraphs: [
        "W Residences delivers a premium lifestyle with bold design, curated amenities, and elevated services — tailored for residents who want more than a home.",
        "Choose from spacious 1–5 bedroom residences with a 50/50 payment plan and expected handover in Q4 2028.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "w-residences-brochure.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "W Residences - interior lifestyle",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 4.32M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q4 2028",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "50/50",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "W Residences",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          shortLabel: "1 BR",
          bedrooms: 1,
          specs: {
            Unit: "1 Bedroom Residence",
            "Total Area": "1,066 sq.ft",
            "Starting Price": "AED 4,320,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          shortLabel: "2 BR",
          bedrooms: 2,
          specs: {
            Unit: "2 Bedroom Residence",
            "Total Area": "2,544 sq.ft",
            "Starting Price": "AED 14,985,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          shortLabel: "3 BR",
          bedrooms: 3,
          specs: {
            Unit: "3 Bedroom Residence",
            "Total Area": "2,733 sq.ft",
            "Starting Price": "AED 13,200,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          shortLabel: "4 BR",
          bedrooms: 4,
          specs: {
            Unit: "4 Bedroom Residence",
            "Total Area": "3,682 sq.ft",
            "Starting Price": "AED 18,315,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_4BR],
        },
        {
          id: "5br",
          title: "5 Bedroom",
          shortLabel: "5 BR",
          bedrooms: 5,
          specs: {
            Unit: "5 Bedroom Residence",
            "Total Area": "7,541 sq.ft",
            "Starting Price": "AED 40,060,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_5BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Rooftop Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Spa & Treatment Rooms", icon: "💆", color: "#d7b46a" },
        { label: "Cinema Room", icon: "🎬", color: "#d7b46a" },
        { label: "Kids Club", icon: "🧸", color: "#d7b46a" },
        { label: "Golf Simulator", icon: "⛳", color: "#d7b46a" },
        { label: "Cabana & Lounge Areas", icon: "🍹", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Location",
      projectName: "W Residences",
      address: MAP.address,
      lat: MAP.lat,
      lng: MAP.lng,
      zoom: MAP.zoom,
      proximityFeatures: [
        { icon: "📍", text: "Jumeirah Lake Towers (JLT), Dubai" },
        { icon: "🚗", text: "Excellent connectivity to main Dubai routes" },
        { icon: "🛍️", text: "Near retail, dining, and lifestyle hubs" },
      ],
    },

    cta: {
      title: "Interested in W Residences?",
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
        "W Residences | شقق فاخرة | 1–5 غرف | خطة دفع 50/50 | التسليم Q4 2028",
      description:
        "W Residences من أرادَ يوفر وحدات فاخرة من 1 إلى 5 غرف نوم مع خطة دفع 50/50 وموعد تسليم Q4 2028. شاهد الصور، الكتيّب، ومخططات الطوابق.",
      keywords:
        "W Residences, أرادَ, شقق فاخرة دبي, 1 غرفة 2 غرف 3 غرف 4 غرف 5 غرف, خطة دفع 50/50, تسليم Q4 2028",
      canonical: "/properties/apartments/arada/w-residences",
    },

    project: {
      name: "W Residences",
      developer: "أرادَ",
      location: "دبي، الإمارات",
      status: "على الخريطة",
      startingPrice: "4,320,000 درهم",
      completionDate: "Q4 2028",
      paymentPlan: "50% / 50%",
      type: "وحدات سكنية فاخرة",
      units: "1–5 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      insetImageUrl: HERO_INSET,
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادَ",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة W بمستوى فخم",
      paragraphs: [
        "W Residences يقدم تجربة سكنية فاخرة بتصميم جريء ومرافق مختارة بعناية وخدمات ترتقي بتجربة المعيشة.",
        "اختر بين وحدات 1–5 غرف نوم مع خطة دفع 50/50 وموعد تسليم متوقع في Q4 2028.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "w-residences-brochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "W Residences - نمط حياة فاخر",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "4.32M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q4 2028",
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "50/50",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "W Residences",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "وحدة 1 غرفة",
          shortLabel: "1 غرفة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "وحدة 1 غرفة نوم",
            "إجمالي المساحة": "1,066 قدم²",
            "السعر الابتدائي": "4,320,000 درهم",
            "موعد التسليم": "Q4 2028",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "وحدة 2 غرف",
          shortLabel: "2 غرف",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "وحدة 2 غرف نوم",
            "إجمالي المساحة": "2,544 قدم²",
            "السعر الابتدائي": "14,985,000 درهم",
            "موعد التسليم": "Q4 2028",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "وحدة 3 غرف",
          shortLabel: "3 غرف",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "وحدة 3 غرف نوم",
            "إجمالي المساحة": "2,733 قدم²",
            "السعر الابتدائي": "13,200,000 درهم",
            "موعد التسليم": "Q4 2028",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "وحدة 4 غرف",
          shortLabel: "4 غرف",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "وحدة 4 غرف نوم",
            "إجمالي المساحة": "3,682 قدم²",
            "السعر الابتدائي": "18,315,000 درهم",
            "موعد التسليم": "Q4 2028",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_4BR],
        },
        {
          id: "5br",
          title: "وحدة 5 غرف",
          shortLabel: "5 غرف",
          bedrooms: 5,
          specs: {
            "نوع الوحدة": "وحدة 5 غرف نوم",
            "إجمالي المساحة": "7,541 قدم²",
            "السعر الابتدائي": "40,060,000 درهم",
            "موعد التسليم": "Q4 2028",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_5BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "مسبح على السطح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "سبا وغرف علاجات", icon: "💆", color: "#d7b46a" },
        { label: "غرفة سينما", icon: "🎬", color: "#d7b46a" },
        { label: "نادي أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "محاكاة جولف", icon: "⛳", color: "#d7b46a" },
        { label: "كابانا ومناطق استرخاء", icon: "🍹", color: "#d7b46a" },
      ],
    },

    location: {
      title: "الموقع",
      projectName: "W Residences",
      address: MAP.address,
      lat: MAP.lat,
      lng: MAP.lng,
      zoom: MAP.zoom,
      proximityFeatures: [
        { icon: "📍", text: "أبراج بحيرات جميرا (JLT) – دبي" },
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية في دبي" },
        { icon: "🛍️", text: "بالقرب من مراكز التسوق والمطاعم" },
      ],
    },

    cta: {
      title: "مهتم بـ W Residences؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي والأسعار وروابط ملفات الكتيّب ومخططات الطوابق الرسمية.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default wResidencesData;
