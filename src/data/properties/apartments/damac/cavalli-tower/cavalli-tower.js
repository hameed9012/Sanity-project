// src/data/properties/penthouses/damac/cavalli-tower.js
// ✅ FULL BLUEPRINT COMPLIANT (Exotica reference)
// ✅ EN + AR
// ✅ 3BR & 4BR Penthouses
// ✅ Off-plan
// ✅ Exact Bunny filenames only
// ✅ DAMAC / Cavalli standard

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/damac/cavalli-tower";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL = "/damac-logo.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Cavalli Tower.pdf");
const FLOORPLANS_PDF = cdn("Cavalli_Tower_FloorPlan-2.pdf");

// Floor plans
const FP_3BR = cdn("cavalli tower 3br floor plan.webp");
const FP_4BR = cdn("cavalli tower 4br floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("12.webp"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2026";
const PAYMENT_PLAN = "90% / 10%";
const LOCATION_NAME = "Al Safouh, Dubai";
const DEVELOPER = "DAMAC Properties";

// ======================================================
// DATA
// ======================================================
export const cavalliTowerData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Cavalli Tower by DAMAC | Ultra-Luxury Penthouses in Al Safouh",
      description:
        "Cavalli Tower by DAMAC offers ultra-luxury 3 and 4 bedroom penthouses in Al Safouh, Dubai. Branded residences with exclusive sea views and handover in Q2 2026.",
      keywords:
        "Cavalli Tower, DAMAC Cavalli, luxury penthouses Dubai, Al Safouh penthouse",
      canonical: "/properties/apartments/damac/cavalli-tower",
    },

    project: {
      name: "Cavalli Tower",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 79,618,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Branded Luxury Penthouses",
      units: "3 & 4 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "DAMAC x Roberto Cavalli",
      rating: null,
    },

    intro: {
      title: "CAVALLI TOWER — ICONIC BRANDED LUXURY",
      paragraphs: [
        "Cavalli Tower by DAMAC is an ultra-luxury branded residential tower designed in collaboration with Roberto Cavalli, offering breathtaking sea views and bold architectural expression.",
        "Located in Al Safouh, the tower features limited-edition 3 and 4 bedroom penthouses crafted for elite living and high-net-worth investors.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Cavalli Tower DAMAC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏖️",
          value: "Sea Views",
          label: "Panoramic Views",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💎",
          value: "Branded",
          label: "Roberto Cavalli",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Cavalli Tower",
    },

    floorPlans: {
      type: "penthouses",
      plans: [
        {
          id: "3br",
          title: "3 Bedroom Penthouse",
          bedrooms: 3,
          specs: {
            "Total Area": "15,300.36 sq.ft",
            "Starting Price": "AED 86,967,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 Bedroom Penthouse",
          bedrooms: 4,
          specs: {
            "Total Area": "12,807.33 sq.ft",
            "Starting Price": "AED 79,618,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Private Beach Access", icon: "🏖️", color: "#c9a24d" },
        { label: "Infinity Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Luxury Spa", icon: "💆", color: "#c9a24d" },
        { label: "Private Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Concierge Services", icon: "🛎️", color: "#c9a24d" },
        { label: "Valet Parking", icon: "🚘", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Cavalli Tower",
      address: LOCATION_NAME,
      lat: 25.0914208,
      lng: 55.1506263,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏖️", text: "Located directly on Dubai coastline" },
        { icon: "🏙️", text: "Minutes from Dubai Marina & Palm Jumeirah" },
        { icon: "🚗", text: "Easy access to Sheikh Zayed Road" },
      ],
    },

    cta: {
      title: "Own a Cavalli Branded Penthouse",
      description:
        "Request pricing, availability, and official DAMAC documentation.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title: "برج كافالي من داماك | بنتهاوس فائق الفخامة في الصفوح دبي",
      description:
        "برج كافالي من داماك يقدم بنتهاوس فائق الفخامة 3 و4 غرف نوم في الصفوح دبي ضمن مساكن بعلامة روبرتو كافالي مع إطلالات بحرية وتسليم في الربع الثاني 2026.",
      keywords: "برج كافالي، داماك كافالي، بنتهاوس فاخر دبي، بنتهاوس الصفوح",
      canonical: "/properties/apartments/damac/cavalli-tower",
    },

    project: {
      name: "برج كافالي",
      developer: "داماك العقارية",
      location: "الصفوح، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "79,618,000 درهم",
      completionDate: "الربع الثاني 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "بنتهاوس فاخر بعلامة تجارية",
      units: "3 و4 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "داماك × روبرتو كافالي",
      rating: null,
    },

    intro: {
      title: "برج كافالي — فخامة أيقونية بعلامة تجارية",
      paragraphs: [
        "برج كافالي من داماك هو برج سكني فائق الفخامة بعلامة تجارية بالتعاون مع روبرتو كافالي، يتميز بإطلالات بحرية خلابة وتصميم معماري جريء.",
        "يقع في منطقة الصفوح، ويوفر بنتهاوس حصري 3 و4 غرف نوم مصمم لأسلوب حياة النخبة والمستثمرين ذوي الملاءة العالية.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "مخططات الوحدات", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "برج كافالي داماك",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏖️",
          value: "إطلالات بحرية",
          label: "مناظر بانورامية",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💎",
          value: "علامة تجارية",
          label: "روبرتو كافالي",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "الربع الثاني 2026",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Cavalli Tower",
    },

    floorPlans: {
      type: "penthouses",
      plans: [
        {
          id: "3br", // ✅ IMPORTANT
          title: "بنتهاوس 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "15,300.36 قدم²",
            "السعر الابتدائي": "86,967,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الثاني 2026",
          },
          images: [FP_3BR],
        },
        {
          id: "4br", // ✅ IMPORTANT
          title: "بنتهاوس 4 غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "12,807.33 قدم²",
            "السعر الابتدائي": "79,618,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الثاني 2026",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "وصول خاص للشاطئ", icon: "🏖️", color: "#c9a24d" },
        { label: "مسبح إنفينيتي", icon: "🏊", color: "#c9a24d" },
        { label: "سبا فاخر", icon: "💆", color: "#c9a24d" },
        { label: "نادي رياضي خاص", icon: "🏋️", color: "#c9a24d" },
        { label: "خدمات كونسيرج", icon: "🛎️", color: "#c9a24d" },
        { label: "خدمة صف سيارات", icon: "🚘", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "برج كافالي",
      address: "الصفوح، دبي",
      lat: 25.0914208,
      lng: 55.1506263,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏖️", text: "يقع مباشرة على ساحل دبي." },
        { icon: "🏙️", text: "دقائق من دبي مارينا ونخلة جميرا." },
        { icon: "🚗", text: "سهولة الوصول إلى شارع الشيخ زايد." },
      ],
    },

    cta: {
      title: "امتلك بنتهاوس كافالي بعلامة تجارية",
      description: "اطلب الأسعار والتوافر والملفات الرسمية من داماك.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default cavalliTowerData;
