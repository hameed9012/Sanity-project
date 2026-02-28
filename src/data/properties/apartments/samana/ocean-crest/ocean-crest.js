// src/data/properties/apartments/samana/ocean-crest.js
// ✅ Folder: /samana/ocean-crest
// ✅ EN + AR
// ✅ 1BR / 2BR / 3BR / 4BR
// ✅ Exact Bunny filenames only
// ✅ Dubai Islands
// ✅ Samana standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/ocean-crest";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD SAMANA SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Ocean Crest Brochure.pdf");
const FACTSHEET_PDF = cdn("OceanCrest Factsheet.pdf");
const FLOORPLANS_PDF = cdn("Ocean Crest Floor Plan Brochure (3).pdf");
const PAYMENT_PLAN_PDF = cdn("Payment Plan.pdf");

const PAYMENT_PLAN = "50% / 50%";
const HANDOVER = "Q3 2028";

const HERO_BG = cdn("250610_OCEAN PEARL 4_C5 AERIAL 01_DRAFT 1.jpg");
const INTRO_MAIN = cdn("250603_OCEAN PEARL 4_exterior_C07_001_Draft_01.jpg");
const VIDEO = cdn("Ocean Crest Teaser_Landscape.mp4");

// Floor Plans
const FP_1BR = cdn("Samana ocean crest 1br floor plan.webp");
const FP_2BR = cdn("Samana ocean crest 2br floor plan.webp");
const FP_3BR = cdn("Samana ocean crest 3 br floor plan.webp");
const FP_4BR = cdn("Samana ocean crest 4br floor plan.webp");

// ================= GALLERY (VERIFIED FILES ONLY) =================
const GALLERY = [
  cdn("250603_OCEAN PEARL 4_exterior_C09_Draft_01.jpg"),
  cdn("250604_OCEAN PEARL 4_exterior_C01_Draft_01.jpg"),
  cdn("250604_OCEAN PEARL 4_exterior_C02_Draft_01.jpg"),
  cdn("250610_OCEAN PEARL 4_C2 Street 1_DRAFT 1.jpg"),
  cdn("250610_OCEAN PEARL 4_C2 Street 2_DRAFT 1.jpg"),
  cdn("250610_OCEAN PEARL 4_C6 Balcony_DRAFT 1.jpg"),
  cdn("Lobby View_01-Final.png"),
  cdn("Lobby View_02_Final.png"),
  cdn("1.jpg"),
  cdn("2.jpg"),
  cdn("3.jpg"),
  cdn("4.jpg"),
  cdn("250603_OCEAN PEARL 4_exterior_C07_001_Draft_01.jpg"),
  cdn("5.jpg"),
  cdn("6.jpg"),
  cdn("7.jpg"),
  cdn("8.jpg"),
];

// ======================================================
// DATA
// ======================================================
export const oceanCrestData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Samana Ocean Crest | 1–4 Bedroom Waterfront Apartments in Dubai Islands",
      description:
        "Samana Ocean Crest offers 1, 2, 3 & 4 bedroom waterfront apartments in Dubai Islands. Starting from AED 2.18M with a 50/50 payment plan and handover in Q3 2028.",
      keywords:
        "Samana Ocean Crest, Samana Developers, Dubai Islands apartments, waterfront apartments Dubai",
      canonical: "/properties/apartments/samana/ocean-crest",
    },

    project: {
      name: "Samana Ocean Crest",
      developer: "Samana Developers",
      location: "Dubai Islands, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,180,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Waterfront Apartments",
      units: "1–4 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "OCEAN CREST — WATERFRONT LIVING ON DUBAI ISLANDS",
      paragraphs: [
        "Samana Ocean Crest is a premium waterfront residential development located on Dubai Islands, offering uninterrupted sea views and resort-style living.",
        `Apartments range from 1 to 4 bedrooms, starting from AED 2.18M with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Samana Ocean Crest Dubai Islands",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2.18M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "909 – 2,433 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Dubai Islands",
          label: "Waterfront",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Ocean Crest",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "909 sq.ft",
            "Starting Price": "AED 2,180,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,536 sq.ft",
            "Starting Price": "AED 3,570,000",
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
            "Total Area": "1,709 sq.ft",
            "Starting Price": "AED 4,000,000",
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
            "Total Area": "2,433 sq.ft",
            "Starting Price": "AED 4,760,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Infinity Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Private Beach Access", icon: "🏖️", color: "#c9a24d" },
        { label: "Spa & Wellness", icon: "🧖", color: "#c9a24d" },
        { label: "Luxury Lobby", icon: "🏛️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Ocean Crest",
      address: "Dubai Islands, Dubai, UAE",
      lat: 25.286,
      lng: 55.2986111,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "Direct access to major Dubai road networks." },
        { icon: "✈️", text: "Quick connectivity to DXB Airport." },
        { icon: "🏝️", text: "Exclusive island lifestyle with sea views." },
      ],
    },

    cta: {
      title: "Own a Waterfront Home at Ocean Crest",
      description:
        "Get full pricing, unit availability, and official Samana documents.",
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
      name: "سمايا أوشن كريست",
      developer: "سمانا للتطوير العقاري",
      location: "جزر دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,180,000 درهم",
      completionDate: "الربع الثالث 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق واجهة بحرية",
      units: "من غرفة إلى أربع غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سمانا",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "غرفة نوم واحدة",
          specs: {
            "إجمالي المساحة": "909 قدم²",
            "السعر الابتدائي": "2,180,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,536 قدم²",
            "السعر الابتدائي": "3,570,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          title: "ثلاث غرف نوم",
          specs: {
            "إجمالي المساحة": "1,709 قدم²",
            "السعر الابتدائي": "4,000,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
        },
        {
          title: "أربع غرف نوم",
          specs: {
            "إجمالي المساحة": "2,433 قدم²",
            "السعر الابتدائي": "4,760,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default oceanCrestData;
