// src/data/properties/apartments/samana/ivy-gardens-2.js
// ✅ Folder: /samana/ivy-gardens-2
// ✅ EN + AR
// ✅ Studio + 2BR only
// ✅ Exact Bunny filenames used
// ✅ Dubai Land Residence Complex (DLRC)
// ✅ Samana standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/ivy-gardens-2";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD SAMANA SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("IVY Garden 2 brochure.pdf");
const FACTSHEET_PDF = cdn("Factsheet IVY 2.pdf");
const FLOORPLANS_PDF = cdn("Floor Plan.pdf");

const PAYMENT_PLAN = "20% / 80%";
const HANDOVER = "Q4 2027";

const HERO_BG = cdn("IVY GARDENS LAUNCH FILM_16x9 .mp4");
const INTRO_MAIN = cdn("cam31smallpool.jpg");
const VIDEO = cdn("IVY GARDENS LAUNCH FILM_16x9 .mp4");

const FP_STUDIO = cdn("Ivy gardens 2 studio floor plan.webp");
const FP_2BR = cdn("Ivy Gardens 2 2br floor plan.webp");

// ================= GALLERY (VERIFIED FILES ONLY) =================
const GALLERY = [
  cdn("cam23zaerial.0000.jpg"),
  cdn("cam28aerial.0000.jpg"),
  cdn("cam38-exterior.jpg"),
  cdn("camera-exterior-02.jpg"),
  cdn("camera-exterior-03.jpg"),
  cdn("cam31smallpool.jpg"),
  cdn("cam32pool3.0200.jpg"),
  cdn("cam34pool4.jpg"),
  cdn("cam 36 padel.0000.jpg"),
  cdn("outdoorcinema.jpg"),
  cdn("Samana DLRC2 LOBBY (1).jpg"),
  cdn("Samana DLRC2 LOBBY (2).jpg"),
  cdn("Samana DLRC2 APARTMENT (1).jpg"),
  cdn("samana DLRC2 APARTMENT (2).jpg"),
  cdn("samana DLRC2 APARTMENT (3).jpg"),
  cdn("Samana DLRC2 BATHROOM (1).jpg"),
  cdn("Samana DLRC2 SPA (1).jpg"),
  cdn("Samana DLRC2 SAUNA (1).jpg"),
];

// ======================================================
// DATA
// ======================================================
export const ivyGardens2Data = {
  // ================= EN =================
  en: {
    seo: {
      title: "Samana Ivy Gardens 2 | Studios & 2 Bedroom Apartments in DLRC",
      description:
        "Samana Ivy Gardens 2 offers studios and 2-bedroom apartments in Dubai Land Residence Complex. Starting from AED 1,267,494 with a 20/80 payment plan and handover in Q4 2027.",
      keywords:
        "Samana Ivy Gardens 2, Samana Developers, DLRC apartments, Dubai Land Residence Complex",
      canonical: "/properties/apartments/samana/ivy-gardens-2",
    },

    project: {
      name: "Samana Ivy Gardens 2",
      developer: "Samana Developers",
      location: "Dubai Land Residence Complex (DLRC), Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,267,494",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "IVY GARDENS 2 — MODERN LIFESTYLE IN DLRC",
      paragraphs: [
        "Samana Ivy Gardens 2 is a contemporary residential development in Dubai Land Residence Complex, offering resort-style amenities and modern living.",
        `Studios and 2-bedroom apartments start from AED 1,267,494 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Samana Ivy Gardens 2",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1.26M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "683 – 1,195 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "DLRC",
          label: "Prime Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Ivy Gardens 2",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "683.66 sq.ft",
            "Starting Price": "AED 1,267,494",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["Private Balcony", "Modern Layout"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,195.48 sq.ft",
            "Starting Price": "AED 2,190,316",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["Spacious Living", "Resort Amenities"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Swimming Pools", icon: "🏊", color: "#c9a24d" },
        { label: "Outdoor Cinema", icon: "🎬", color: "#c9a24d" },
        { label: "Padel Court", icon: "🎾", color: "#c9a24d" },
        { label: "Spa & Sauna", icon: "🧖", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Ivy Gardens 2",
      address: "Dubai Land Residence Complex (DLRC), Dubai, UAE",
      lat: 25.1005625,
      lng: 55.3770625,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to major Dubai highways." },
        { icon: "🏙️", text: "Close to key Dubai destinations." },
        { icon: "🛍️", text: "Nearby retail and lifestyle hubs." },
      ],
    },

    cta: {
      title: "Invest in Samana Ivy Gardens 2",
      description:
        "Request availability, pricing, and official Samana documents today.",
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
      name: "سمايا آيفي جاردنز 2",
      developer: "سمانا للتطوير العقاري",
      location: "مجمع دبي لاند السكني",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,267,494 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو وغرفتين نوم",
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
          title: "استوديو",
          specs: {
            "إجمالي المساحة": "683.66 قدم²",
            "السعر الابتدائي": "1,267,494 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,195.48 قدم²",
            "السعر الابتدائي": "2,190,316 درهم",
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

export default ivyGardens2Data;
