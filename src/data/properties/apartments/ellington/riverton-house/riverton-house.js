// src/data/properties/apartments/ellington/riverton-house.js
// ✅ Folder: /ellington/riverton-house
// ✅ EN + AR
// ✅ 1BR + 2BR
// ✅ Exact filenames used (Bunny verified)
// ✅ Bukadra
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/riverton-house";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Riverton House - Brochure.pdf");
const FLOORPLANS_PDF = cdn("Riverton House - Floor Plan.pdf");
const PAYMENT_PLAN_PDF = cdn("Riverton House - Payment Plan.pdf");

const HERO_BG = cdn("Riverton House - Hero Shot.jpg");
const INTRO_MAIN = cdn("Riverton House - Living area.jpg");
const VIDEO = cdn("Riverton House - video - square.mp4");

const FP_1BR = cdn("Riverton House 1br floor plan.webp");
const FP_2BR = cdn("Riverton House 2br floor plan.webp");

// ⚠️ ONLY VERIFIED FILES
const GALLERY = [
  cdn("Riverton House - aerial view.jpg"),
  cdn("Riverton House - Lobby.jpg"),
  cdn("Riverton House - Living area.jpg"),
  cdn("Riverton House - Kitchen.jpg"),
  cdn("Riverton House - Bathroom.jpg"),
  cdn("Riverton House - Master bedroom.jpg"),
  cdn("Riverton House - balcony view.jpg"),
  cdn("Riverton House - Outdoor Space.jpg"),
  cdn("Riverton House - Pool Deck.jpg"),
  cdn("Riverton House - Pool View .jpg"),
  cdn("Riverton House - Hero Shot.jpg"),
  cdn("Riverton House - Pool View 2.jpg"),
  cdn("Riverton House - bbq deck.jpg"),
  cdn("Riverton House - Clubhouse.jpeg"),
  cdn("Riverton House - Supper Club.jpeg"),
  cdn("Riverton House - Fitness Studio.jpeg"),
  cdn("Riverton House - Yoga studio.jpg"),
  cdn("Riverton House - Wellness Room.tif"),
  cdn("Riverton House - Treatment Room.jpg"),
  cdn("Riverton House - Kids Play Area.jpg"),
];

const HANDOVER = "Q2 2028";
const PAYMENT_PLAN = "70% / 30%";

// ======================================================
// DATA
// ======================================================
export const rivertonHouseData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Riverton House by Ellington | 1 & 2 Bedroom Apartments in Bukadra",
      description:
        "Riverton House by Ellington Properties offers refined 1 & 2 bedroom residences in Bukadra, Dubai. Starting from AED 2,196,828 with a 70/30 payment plan and handover in Q2 2028.",
      keywords:
        "Riverton House, Ellington Properties, Bukadra apartments, luxury residences Dubai",
      canonical: "/properties/apartments/ellington/riverton-house",
    },

    project: {
      name: "Riverton House",
      developer: "Ellington Properties",
      location: "Bukadra, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,196,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "RIVERTON HOUSE — MODERN URBAN ELEGANCE",
      paragraphs: [
        "Riverton House by Ellington Properties is a refined residential development in Bukadra, blending contemporary architecture with carefully curated lifestyle amenities.",
        `Residences include 1 and 2-bedroom apartments starting from AED 2,196,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        {
          title: "Payment Plan",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Riverton House by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2.19M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "789 – 1,213 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Bukadra",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Riverton House",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "789.42 sq.ft",
            "Starting Price": "AED 2,196,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["Elegant Interiors", "Private Balcony"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,213.1 sq.ft",
            "Starting Price": "AED 3,412,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["Spacious Layout", "Modern Design"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Swimming Pools & Decks", icon: "🏊", color: "#d7b46a" },
        { label: "Wellness & Yoga Rooms", icon: "🧘", color: "#d7b46a" },
        { label: "Fitness Studio", icon: "🏋️", color: "#d7b46a" },
        { label: "Social & Kids Spaces", icon: "👨‍👩‍👧", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Riverton House",
      address: "Bukadra, Dubai, UAE",
      lat: 25.1818333,
      lng: 55.3261667,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "Minutes from Downtown Dubai." },
        { icon: "🛣️", text: "Direct access to major highways." },
        { icon: "🏙️", text: "Connected urban neighborhood." },
      ],
    },

    cta: {
      title: "Discover Riverton House",
      description:
        "Request availability, pricing, and official Ellington documents today.",
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
      name: "ريفرتون هاوس",
      developer: "إلينغتون العقارية",
      location: "بوكدرة، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,196,828 درهم",
      completionDate: "الربع الثاني 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق فاخرة",
      units: "غرفة و غرفتين نوم",
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
          title: "غرفة نوم واحدة",
          specs: {
            "إجمالي المساحة": "789.42 قدم²",
            "السعر الابتدائي": "2,196,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتي نوم",
          specs: {
            "إجمالي المساحة": "1,213.1 قدم²",
            "السعر الابتدائي": "3,412,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },
  },
};

export default rivertonHouseData;
