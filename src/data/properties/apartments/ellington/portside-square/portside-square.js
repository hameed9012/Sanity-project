// src/data/properties/apartments/ellington/portside-square.js
// ✅ Folder: /ellington/portside-square
// ✅ EN + AR
// ✅ 1BR + 2BR
// ✅ Exact filenames used
// ✅ Maritime City
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/portside-square";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Portside Square_Brochure.pdf");
const PAYMENT_PLAN_PDF = cdn("Portside Square - Payment Plan.pdf");

const HERO_BG = cdn("Portside Square - Heroshot 3.jpg");
const INTRO_MAIN = cdn("Portside Square - Heroshot 2.jpg");

const FP_1BR = cdn("Portside square 1br floor pan.webp");
const FP_2BR = cdn("Portside square 2br floor plan.webp");

const GALLERY = [
  cdn("Portside Square - Heroshot 1.jpg"),
  cdn("Portside Square - Heroshot 2.jpg"),
  cdn("Portside Square - Heroshot 3.jpg"),
  cdn("Portside Square - Marina View.jpg"),
  cdn("Portside Square - Yacht View.jpg"),
  cdn("Portside Square - Lobby.jpg"),
  cdn("Portside Square - Living Room.jpg"),
  cdn("Portside Square - Kitchen.jpg"),
  `https://luxury-real-estate-media.b-cdn.net/ellington/portside-square/Portside%20Square%20-%20%20Bathroom.jpg`,
  cdn("Portside Square - Master Bedroom.jpg"),
  `https://luxury-real-estate-media.b-cdn.net/ellington/portside-square/Portside%20Square%20%20-%20Wardrobe.jpg`,
  `https://luxury-real-estate-media.b-cdn.net/ellington/portside-square/Portside%20Square%20-%20%20Master%20Bedroom%20Wardrobe.jpg`,
  cdn("Portside Square - Fitness Studio.jpg"),
  cdn("Portside Square - Spa.jpg"),
  cdn("Portside Square - Pool View.jpg"),
  cdn("Portside Square - Running Track.jpg"),
  cdn("Portside Square - Outdoor Amenities.jpg"),
  cdn("Portside Square - Clubhouse.jpg"),
  `https://luxury-real-estate-media.b-cdn.net/ellington/portside-square/Portside%20Square%20-%20%20Co-Working.jpg`,
  cdn("Portside Square - Kids Play Area.jpg"),
  cdn("Portside Square - Arcade Room.jpeg"),
  cdn("Portside Square - Pavilion.png"),
  cdn("Portside Square - Pavilion & Retail Drop-off.jpg"),
  cdn("Portside Square - Residential Drop-off.png"),
  cdn("Portside Square - Office Drop-off.png"),
  cdn("Portside Square - Office Heroshot.jpg"),
  cdn("Portside Square - Close-up Shot.jpg"),
];

const HANDOVER = "Q4 2029";
const PAYMENT_PLAN = "70% / 30%";

// ======================================================
// DATA
// ======================================================
export const portsideSquareData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Portside Square by Ellington | 1 & 2 Bedroom Apartments in Maritime City",
      description:
        "Portside Square by Ellington Properties offers luxury 1 & 2 bedroom waterfront apartments in Dubai Maritime City. Starting from AED 2,437,828 with a 70/30 payment plan and handover in Q4 2029.",
      keywords:
        "Portside Square, Ellington Properties, Maritime City apartments, waterfront living Dubai",
      canonical: "/properties/apartments/ellington/portside-square",
    },

    project: {
      name: "Portside Square",
      developer: "Ellington Properties",
      location: "Dubai Maritime City, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,437,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Waterfront Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
    },

    intro: {
      title: "PORTSIDE SQUARE — WATERFRONT LIVING REIMAGINED",
      paragraphs: [
        "Portside Square by Ellington Properties is a contemporary waterfront residential destination in Dubai Maritime City, designed around lifestyle, movement, and refined interiors.",
        `Residences include 1 and 2-bedroom apartments starting from AED 2,437,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Payment Plan",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Portside Square by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2.43M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "811 – 1,172 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Maritime City",
          label: "Waterfront Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Portside Square",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "811.82 sq.ft",
            "Starting Price": "AED 2,437,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["Waterfront Living", "Ellington Interiors"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,172.95 sq.ft",
            "Starting Price": "AED 3,349,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["Marina Views", "Spacious Layout"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Marina & Yacht Views", icon: "⛵", color: "#d7b46a" },
        { label: "Swimming Pools & Spa", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Running Track", icon: "🏃", color: "#d7b46a" },
        { label: "Co-working & Social Spaces", icon: "💼", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Portside Square",
      address: "Dubai Maritime City, Dubai, UAE",
      lat: 25.2604167,
      lng: 55.2818056,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "Prime waterfront setting." },
        { icon: "🚗", text: "Easy access to Downtown Dubai." },
        { icon: "🛳️", text: "Steps from marina and cruise terminals." },
      ],
    },

    cta: {
      title: "Own a Waterfront Home at Portside Square",
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
      name: "بورتسايد سكوير",
      developer: "إلينغتون العقارية",
      location: "مدينة دبي الملاحية",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,437,828 درهم",
      completionDate: "الربع الرابع 2029",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق مطلة على الواجهة البحرية",
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
            "إجمالي المساحة": "811.82 قدم²",
            "السعر الابتدائي": "2,437,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتي نوم",
          specs: {
            "إجمالي المساحة": "1,172.95 قدم²",
            "السعر الابتدائي": "3,349,828 درهم",
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

export default portsideSquareData;
