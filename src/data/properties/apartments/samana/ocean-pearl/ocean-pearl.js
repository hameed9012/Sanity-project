// src/data/properties/apartments/samana/ocean-pearl.js
// ✅ Folder: /samana/ocean-pearl
// ✅ EN + AR
// ✅ 2BR / 3BR / 4BR
// ✅ Dubai Islands
// ✅ Exact Bunny filenames
// ✅ Samana blueprint (locked)

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/ocean-pearl";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// Developer square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Ocean Pearl.pdf");
const FLOORPLANS_PDF = cdn("ocean-pearl-floorplans.pdf");

// Floor plans
const FP_2BR = cdn("Ocean Pearl 1&2 2br floor plan.webp");
const FP_3BR = cdn("Ocean Pearl 1&2 3br floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("12.webp"),
  cdn("13.webp"),
];

// ================= CONSTANTS =================
const PAYMENT_PLAN = "58% / 42%";
const HANDOVER = "Q4 2026";

// ======================================================
// DATA
// ======================================================
export const samanaOceanPearlData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Ocean Pearl by Samana | Luxury Apartments in Dubai Islands",
      description:
        "Ocean Pearl by Samana offers luxury 2, 3 and 4 bedroom apartments in Dubai Islands. Starting from AED 3.94M with a 58/42 payment plan and handover in Q4 2026.",
      keywords:
        "Ocean Pearl Samana, Dubai Islands apartments, Samana Developers, waterfront apartments Dubai",
      canonical: "/properties/apartments/samana/ocean-pearl",
    },

    project: {
      name: "Ocean Pearl",
      developer: "Samana Developers",
      location: "Dubai Islands, Dubai",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 3,940,444",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Waterfront Apartments",
      units: "2, 3 & 4 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
    },

    intro: {
      title: "OCEAN PEARL — WATERFRONT LUXURY BY SAMANA",
      paragraphs: [
        "Ocean Pearl by Samana is a premium waterfront residential development located in Dubai Islands, offering panoramic sea views and refined coastal living.",
        `Apartments are available in 2, 3 and 4 bedroom layouts starting from AED 3,940,444 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Ocean Pearl by Samana",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Waterfront",
          label: "Sea View Living",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "AED 3.94M",
          label: "Starting Price",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Dubai Islands",
          label: "Prime Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Ocean Pearl",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,534.5 sq.ft",
            "Starting Price": "AED 3,940,444",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1,439.35 sq.ft",
            "Starting Price": "AED 4,278,811",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "1,973.67 sq.ft",
            "Starting Price": "AED 5,051,588",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR], // no separate 4BR file provided
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Private Beach Access", icon: "🏖️", color: "#c9a24d" },
        { label: "Infinity Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Luxury Spa", icon: "🧖", color: "#c9a24d" },
        { label: "Fitness Center", icon: "🏋️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Ocean Pearl",
      address: "Dubai Islands, Dubai",
      lat: 25.2998125,
      lng: 55.3148125,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌊", text: "Located directly on Dubai Islands waterfront." },
        { icon: "🚗", text: "Easy access to Deira and Downtown Dubai." },
        { icon: "✈️", text: "Close to Dubai International Airport." },
      ],
    },

    cta: {
      title: "Own a Waterfront Home at Ocean Pearl",
      description:
        "Request prices, availability, and official Samana documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ================= AR =================
  ar: {
    seo: {
      title: "أوشن بيرل من سمانا | شقق فاخرة في جزر دبي",
      description:
        "أوشن بيرل من سمانا يوفر شقق 2 و3 و4 غرف نوم في جزر دبي. يبدأ السعر من 3,940,444 درهم مع خطة دفع 58% / 42% وموعد تسليم Q4 2026.",
      keywords:
        "أوشن بيرل سمانا, جزر دبي, شقق على الواجهة البحرية, سمانا للتطوير العقاري",
      canonical: "/properties/apartments/samana/ocean-pearl",
    },

    project: {
      name: "أوشن بيرل",
      developer: "سمانا للتطوير العقاري",
      location: "جزر دبي، دبي",
      status: "على المخطط",
      market: "offplan", // ✅ IMPORTANT
      startingPrice: "3,940,444 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق فاخرة على الواجهة البحرية",
      units: "2، 3 و 4 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سمانا",
      rating: null,
    },

    intro: {
      title: "أوشن بيرل — فخامة على الواجهة البحرية من سمانا",
      paragraphs: [
        "أوشن بيرل من سمانا هو مشروع سكني فاخر على الواجهة البحرية في جزر دبي، يوفر إطلالات بحرية وتصاميم عصرية.",
        `يتوفر بوحدات 2 و3 و4 غرف نوم بأسعار تبدأ من 3,940,444 درهم مع خطة دفع ${PAYMENT_PLAN} وموعد تسليم ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "مخططات الطوابق", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "أوشن بيرل من سمانا",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "واجهة بحرية",
          label: "إطلالات بحرية",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "3.94M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "جزر دبي",
          label: "موقع مميز",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Ocean Pearl", // ✅ keep stable tag like EN
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          // ✅ keep EN keys (many UIs expect them)
          specs: {
            "Total Area": "1,534.5 قدم²",
            "Starting Price": "3,940,444 درهم",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "Total Area": "1,439.35 قدم²",
            "Starting Price": "4,278,811 درهم",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "شقة أربع غرف نوم",
          bedrooms: 4,
          specs: {
            "Total Area": "1,973.67 قدم²",
            "Starting Price": "5,051,588 درهم",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR], // no separate 4BR file provided
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "وصول خاص للشاطئ", icon: "🏖️", color: "#c9a24d" },
        { label: "مسبح إنفينيتي", icon: "🏊", color: "#c9a24d" },
        { label: "سبا فاخر", icon: "🧖", color: "#c9a24d" },
        { label: "مركز لياقة", icon: "🏋️", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "أوشن بيرل",
      address: "جزر دبي، دبي",
      lat: 25.2998125,
      lng: 55.3148125,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌊", text: "موقع مباشر على واجهة جزر دبي." },
        { icon: "🚗", text: "سهولة الوصول إلى ديرة ووسط دبي." },
        { icon: "✈️", text: "قريب من مطار دبي الدولي." },
      ],
    },

    cta: {
      title: "امتلك منزلاً على الواجهة البحرية في أوشن بيرل",
      description: "اطلب الأسعار والتوافر والملفات الرسمية من سمانا اليوم.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default samanaOceanPearlData;
