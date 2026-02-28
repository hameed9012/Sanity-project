// src/data/properties/apartments/ellington/belgravia-gardens.js
// ✅ Folder: /ellington/belgravia-gardens
// ✅ EN + AR
// ✅ 2BR + 3BR only
// ✅ Exact filenames used
// ✅ Wadi Al Safa 2
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/belgravia-gardens";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("EN_Belgravia Gardens - Brochure.pdf");
const PAYMENT_PLAN_PDF = cdn("Belgravia Gardens - Payment Plan.pdf");
const LOCATION_MAP_PDF = cdn("Belgravia Gardens - Maps.pdf");

const HERO_BG = cdn("Belgravia Gardens - concept video - horizontal.mp4");
const INTRO_MAIN = `https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20leisure%20pool.jpg`;
const FP_2BR = cdn("Belgravia Gardens 2br floor plan.webp");
const FP_3BR = cdn("Belgravia gardens 3br floor plan.webp");

const GALLERY = [
  // 1
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20-%20aerial%20view.jpg",

  // 2
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20-%20main%20entrance.jpg",

  // 3 ❗ DOUBLE SPACE FIXED
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20view%20from%20entrance.jpg",

  // 4 ❗ DOUBLE SPACE FIXED
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20view%20from%20urban%20beach.jpg",

  // 5
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20leisure%20pool.jpg",

  // 6
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20lazy%20river.jpg",

  // 7
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20clubhouse.jpg",

  // 8
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20-%20fitness%20studio.jpeg",

  // 9
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20-%20cinema%20room.jpeg",

  // 10
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20-%20co-working%20hub.jpeg",

  // 11
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20-%20private%20dining.jpeg",

  // 12 ❗ DOUBLE SPACE FIXED
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20kids%20play%20area.jpeg",

  // 13 ❗ DOUBLE SPACE FIXED
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20-%20kids%20nap%20area.jpg",
  // 14 ❗ DOUBLE SPACE FIXED
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20kitchen.jpeg",

  // 15 ❗ DOUBLE SPACE FIXED
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20bathroom.jpeg",

  // 16 ❗ DOUBLE SPACE FIXED
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20bedroom.jpeg",

  // 17 ❗ DOUBLE SPACE FIXED
  "https://luxury-real-estate-media.b-cdn.net/ellington/belgravia-gardens/Belgravia%20Gardens%20%20-%20master%20bedroom.jpeg",
];

const HANDOVER = "Q3 2028";
const PAYMENT_PLAN = "70% / 30%";

// ======================================================
// DATA
// ======================================================
export const belgraviaGardensData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Belgravia Gardens by Ellington | Luxury 2 & 3 Bedroom Residences in Wadi Al Safa 2",
      description:
        "Belgravia Gardens by Ellington offers resort-inspired 2 & 3 bedroom residences in Wadi Al Safa 2. Starting from AED 2,511,828 with a 70/30 payment plan and handover in Q3 2028.",
      keywords:
        "Belgravia Gardens, Ellington Properties, Wadi Al Safa 2, luxury apartments Dubai",
      canonical: "/properties/apartments/ellington/belgravia-gardens",
    },

    project: {
      name: "Belgravia Gardens",
      developer: "Ellington Properties",
      location: "Wadi Al Safa 2, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,511,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Garden Living Residences",
      units: "2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
    },

    intro: {
      title: "BELGRAVIA GARDENS — RESORT-INSPIRED GARDEN LIVING",
      paragraphs: [
        "Belgravia Gardens by Ellington is a refined residential community in Wadi Al Safa 2, designed as an urban resort with landscaped gardens, water features, and elegant architecture.",
        `Residences include spacious 2 and 3-bedroom homes starting from AED 2,511,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
        { title: "Location Map", url: LOCATION_MAP_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Belgravia Gardens by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2.51M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,409 – 1,705 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌿",
          value: "Wadi Al Safa 2",
          label: "Green Community",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Belgravia Gardens",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,409.1 sq.ft",
            "Starting Price": "AED 2,511,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["Garden Views", "Open Layout"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1,705.43 sq.ft",
            "Starting Price": "AED 2,814,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["Spacious Living", "Resort-Style Design"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Lazy River & Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Cinema & Lounge Areas", icon: "🎬", color: "#d7b46a" },
        { label: "Fitness & Wellness Spaces", icon: "🧘", color: "#d7b46a" },
        { label: "Kids & Family Zones", icon: "👨‍👩‍👧", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Belgravia Gardens",
      address: "Wadi Al Safa 2, Dubai, UAE",
      lat: 25.0958361,
      lng: 55.3383534,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌿", text: "Resort-style green surroundings." },
        { icon: "🚗", text: "Easy access to major Dubai highways." },
        { icon: "🏙️", text: "Close to key lifestyle destinations." },
      ],
    },

    cta: {
      title: "Own a Home at Belgravia Gardens",
      description:
        "Request pricing, availability, and official Ellington documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Payment Plan", action: "download-payment-plan" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "بلغرافيا جاردنز",
      developer: "إلينغتون العقارية",
      location: "وادي الصفا 2، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,511,828 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "مساكن حدائق راقية",
      units: "2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "إلينغتون العقارية",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "غرفتان نوم",
          specs: {
            "إجمالي المساحة": "1,409.1 قدم²",
            "السعر الابتدائي": "2,511,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          title: "3 غرف نوم",
          specs: {
            "إجمالي المساحة": "1,705.43 قدم²",
            "السعر الابتدائي": "2,814,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },
  },
};

export default belgraviaGardensData;
