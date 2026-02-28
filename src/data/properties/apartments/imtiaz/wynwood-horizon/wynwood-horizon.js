// src/data/properties/apartments/imtiaz/wynwood-horizon.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR / 2BR / 3BR
// ✅ Exact Bunny filenames
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/imtiaz/wynwood-horizon-2";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Imtiaz_Wynwood Horizon_Brochure.pdf");
const PAYMENT_PLAN_PDF = cdn("IMTIAZ_WH-Payment plan.pdf");

// Floor plans
const FP_1BR = cdn("1 BR Wynwood Horizon Floor Plan.webp");
const FP_2BR = cdn("2 BR Wynwood Horizon Floor Plan.webp");
const FP_3BR = cdn("3 BR Wynwood Horizon Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("lobby-b (3).jpg"),
  cdn("lobby-g (3).jpg"),
  cdn("Clubc01-0414.jpg"),
  cdn("Clubc02-0414.jpg"),
  cdn("Clubc03-0414.jpg"),
  cdn("20250910_Stage-02_Round-04_Cam-04-POOL v1.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2028";
const PAYMENT_PLAN = "60% / 40%";
const LOCATION_NAME = "Bukadra";
const DEVELOPER = "Imtiaz Developments";

// ======================================================
// DATA
// ======================================================
export const wynwoodHorizonData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Wynwood Horizon by Imtiaz | Apartments for Sale in Bukadra",
      description:
        "Wynwood Horizon by Imtiaz offers 1, 2 & 3 bedroom apartments in Bukadra. Starting from AED 1.84M with a 60/40 payment plan and handover Q2 2028.",
      keywords: "Wynwood Horizon Imtiaz, Bukadra apartments, Imtiaz off plan",
      canonical: "/properties/apartments/imtiaz/wynwood-horizon",
    },

    project: {
      name: "Wynwood Horizon",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,848,529",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1, 2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("20250910_Round-6_cam-01-DREAM.jpg"),
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "WYNWOOD HORIZON — MODERN URBAN LIVING",
      paragraphs: [
        "Wynwood Horizon by Imtiaz is a contemporary residential project located in Bukadra, designed for modern urban lifestyles.",
        "The development offers thoughtfully planned 1, 2 and 3 bedroom apartments with premium finishes and lifestyle-driven amenities.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "Wynwood Horizon by Imtiaz",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "Urban Living",
          label: "Lifestyle",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📍",
          value: LOCATION_NAME,
          label: "Location",
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
      projectTag: "Wynwood Horizon",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "755.41 sq.ft",
            "Starting Price": "AED 1,848,529",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,303.51 sq.ft",
            "Starting Price": "AED 2,995,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "2,003.05 sq.ft",
            "Starting Price": "AED 4,546,785",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fitness Center", icon: "🏋️", color: "#c9a24d" },
        { label: "Residents Lounge", icon: "🛋️", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "Covered Parking", icon: "🚗", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Wynwood Horizon",
      address: LOCATION_NAME,
      lat: 25.1800696,
      lng: 55.3208756,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to major roads" },
        { icon: "🏙️", text: "Close to key Dubai districts" },
        { icon: "🛍️", text: "Nearby retail & services" },
      ],
    },

    cta: {
      title: "Own a Home at Wynwood Horizon",
      description:
        "Request full pricing, unit availability and exclusive offers for Wynwood Horizon by Imtiaz.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "وينوود هورايزن",
      developer: "إمتياز للتطوير العقاري",
      location: "بوكدرة",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,848,529 درهم",
      completionDate: "الربع الثاني 2028",
      paymentPlan: "60% / 40%",
      type: "شقق سكنية",
      units: "غرفة، غرفتين و3 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("20250910_Round-6_cam-01-DREAM.jpg"),
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Imtiaz",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "755.41 قدم²",
            "السعر الابتدائي": "1,848,529 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الثاني 2028",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,303.51 قدم²",
            "السعر الابتدائي": "2,995,000 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الثاني 2028",
          },
          images: [FP_2BR],
        },
        {
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "2,003.05 قدم²",
            "السعر الابتدائي": "4,546,785 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الثاني 2028",
          },
          images: [FP_3BR],
        },
      ],
    },
  },
};

export default wynwoodHorizonData;
