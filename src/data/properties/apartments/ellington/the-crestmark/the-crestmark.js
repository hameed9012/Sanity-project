// src/data/properties/apartments/ellington/the-crestmark.js
// ✅ Folder: /ellington/the-crestmark
// ✅ EN + AR
// ✅ 1BR only
// ✅ Exact filenames used
// ✅ Business Bay
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/the-crestmark";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("The Crestmark - Brochure.pdf");
const PAYMENT_PLAN_PDF = cdn("The-Crestmark-Payment-Plan.pdf");

const HERO_BG = cdn("The Crestmark - lobby.jpg");
const INTRO_MAIN = cdn("The Crestmark - hero shot.jpg");

const FP_1BR = cdn("The crestmark 1br floor plan.webp");
const VIDEO_TEASER = cdn("The Crestmark_Video Teaser 4.mp4");

const GALLERY = [
  cdn("The Crestmark - lobby.jpg"),
  cdn("The Crestmark - library lounge.jpg"),
  cdn("The Crestmark - kitchen.jpg"),
  cdn("The Crestmark - bathroom.jpg"),
  cdn("The Crestmark - balcony view.jpg"),
  cdn("The Crestmark - fitness studio.jpg"),
  cdn("The Crestmark - Kidtropolis.jpg"),
];

const HANDOVER = "Q1 2026";
const PAYMENT_PLAN = "30% / 70%";

// ======================================================
// DATA
// ======================================================
export const theCrestmarkData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "The Crestmark by Ellington | 1 Bedroom Apartments in Business Bay",
      description:
        "The Crestmark by Ellington Properties offers luxury 1-bedroom apartments in Business Bay, Dubai. Starting from AED 3,063,828 with a 30/70 payment plan and handover in Q1 2026.",
      keywords:
        "The Crestmark, Ellington Properties, Business Bay apartments, luxury 1 bedroom Dubai",
      canonical: "/properties/apartments/ellington/the-crestmark",
    },

    project: {
      name: "The Crestmark",
      developer: "Ellington Properties",
      location: "Business Bay, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 3,063,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
      videoUrl: VIDEO_TEASER,
    },

    intro: {
      title: "THE CRESTMARK — REFINED URBAN LIVING",
      paragraphs: [
        "The Crestmark by Ellington Properties is a contemporary residential development in the heart of Business Bay, designed for refined urban living with signature Ellington interiors.",
        `1-bedroom residences start from AED 3,063,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
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
      imgAlt: "The Crestmark by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3.06M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "988.23 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Business Bay",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "The Crestmark",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "988.23 sq.ft",
            "Starting Price": "AED 3,063,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["Premium Ellington Finishes"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Designer Lobby", icon: "🏛️", color: "#d7b46a" },
        { label: "Fitness Studio", icon: "🏋️", color: "#d7b46a" },
        { label: "Library Lounge", icon: "📚", color: "#d7b46a" },
        { label: "Family-Friendly Spaces", icon: "👨‍👩‍👧", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "The Crestmark",
      address: "Business Bay, Dubai, UAE",
      lat: 25.1870806,
      lng: 55.2838548,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏙️", text: "Prime Business Bay location." },
        { icon: "🚗", text: "Minutes from Downtown Dubai." },
        { icon: "🛣️", text: "Easy access to Sheikh Zayed Road." },
      ],
    },

    cta: {
      title: "Interested in The Crestmark?",
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
      name: "ذا كريستمارك",
      developer: "إلينغتون العقارية",
      location: "بزنس باي، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "3,063,828 درهم",
      completionDate: "الربع الأول 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق فاخرة",
      units: "غرفة نوم واحدة",
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
            "إجمالي المساحة": "988.23 قدم²",
            "السعر الابتدائي": "3,063,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },
  },
};

export default theCrestmarkData;
