// src/data/properties/apartments/ellington/the-quayside.js
// ✅ Folder: /ellington/the-quayside
// ✅ EN + AR
// ✅ 2BR only
// ✅ Exact Bunny filenames used
// ✅ Business Bay
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/the-quayside";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("The Quayside - Brochure.pdf");
const FLOORPLANS_PDF = cdn("The Quayside - Floor Plan.pdf");
const PAYMENT_PLAN_PDF = cdn("The Quayside - Payment Plan.pdf");
const MAP_PDF = cdn("The Quayside - Map.pdf");

const HERO_BG = cdn("EN_The_Quayside_intro HD_op.mp4");
const INTRO_MAIN = cdn("The Quayside - lobby.jpg");
const VIDEO_INTRO = cdn("EN_The_Quayside_intro HD_op.mp4");
const VIDEO_EXTERIOR = cdn("The_Quayside_exterior.mp4");

const FP_2BR = cdn("The quayside 2br floor plan.webp");

// ⚠️ VERIFIED GALLERY ONLY (from your Bunny list)
const GALLERY = [
  cdn("The Quayside - clubhouse.jpg"),
  cdn("The Quayside - pool deck.jpg"),
  cdn("The Quayside - living room.jpg"),
  cdn("The Quayside - lobby.jpg"),
  cdn("The Quayside - living room -night.png"),
  cdn("The Quayside - kitchen 1.jpg"),
  cdn("The Quayside - kitchen 2.jpg"),
  cdn("The Quayside - changing room.jpg"),
];

const HANDOVER = "Q1 2026";
const PAYMENT_PLAN = "70% / 30%";

// ======================================================
// DATA
// ======================================================
export const theQuaysideData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "The Quayside by Ellington | 2 Bedroom Waterfront Apartments in Business Bay",
      description:
        "The Quayside by Ellington offers luxury 2-bedroom waterfront apartments in Business Bay. Starting from AED 3,745,828 with a 70/30 payment plan and handover in Q1 2026.",
      keywords:
        "The Quayside, Ellington Properties, Business Bay apartments, waterfront living Dubai",
      canonical: "/properties/apartments/ellington/the-quayside",
    },

    project: {
      name: "The Quayside",
      developer: "Ellington Properties",
      location: "Business Bay, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 3,745,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Waterfront Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
      videoUrl: VIDEO_EXTERIOR,
    },

    intro: {
      title: "THE QUAYSIDE — CANAL-FRONT URBAN LIVING",
      paragraphs: [
        "The Quayside by Ellington is a refined waterfront residential development overlooking the Dubai Canal in Business Bay.",
        `2-bedroom residences start from AED 3,745,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
        { title: "Location Map", url: MAP_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "The Quayside by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3.74M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,420.84 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Dubai Canal",
          label: "Waterfront Views",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "The Quayside",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,420.84 sq.ft",
            "Starting Price": "AED 3,745,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["Canal Views", "Open-Plan Living"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Canal-View Pool Deck", icon: "🏊", color: "#d7b46a" },
        { label: "Clubhouse Lounge", icon: "🏛️", color: "#d7b46a" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Designer Interiors", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "The Quayside",
      address: "Business Bay, Dubai, UAE",
      lat: 25.1809087,
      lng: 55.2654924,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌆", text: "Waterfront Business Bay setting." },
        { icon: "🚗", text: "Minutes from Downtown Dubai." },
        { icon: "🛣️", text: "Direct access to Sheikh Zayed Road." },
      ],
    },

    cta: {
      title: "Own a Waterfront Apartment at The Quayside",
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
      name: "ذا كواي سايد",
      developer: "إلينغتون العقارية",
      location: "بزنس باي، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "3,745,828 درهم",
      completionDate: "الربع الأول 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق مطلة على القناة",
      units: "غرفتين نوم",
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
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,420.84 قدم²",
            "السعر الابتدائي": "3,745,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default theQuaysideData;
