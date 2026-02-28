// src/data/properties/apartments/samana/ibiza.js
// ✅ Folder: /samana/ibiza
// ✅ Uses ONLY provided Bunny filenames
// ✅ EN + AR
// ✅ Studio / 1BR / 2BR
// ✅ DLRC
// ✅ Samana standard blueprint

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/ibiza";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// Samana square logo (global)
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("SAMANA IBIZA BROCHURE.pdf");
const FACTSHEET_PDF = cdn("SAMANA IBIZA FACTSHEET.pdf");
const FLOORPLANS_PDF = cdn("SAMANA IBIZA FLOOR PLAN.pdf");
const PAYMENT_PLAN_PDF = cdn("SAMANA IBIZA PAYMENT PLAN.pdf");

const VIDEO = cdn("Ibiza Launch Film.mp4");

const PAYMENT_PLAN = "75% / 25%";
const HANDOVER = "Q1 2028";

// Floor plans
const FP_STUDIO = cdn("Samana Ibiza studio floor plan.webp");
const FP_1BR = cdn("Samana Ibiza 1br floor plan.webp");
const FP_2BR = cdn("Samana Ibiza 2br floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("4K CAMERA2.jpg"),
  cdn("4K CAMERA 2.jpg"),
  cdn("4K CAMERA 3.jpg"),
  cdn("CAM 1.jpg"),
  cdn("CAM 2.jpg"),
  cdn("CAM 3.jpg"),
  cdn("CAM 4.jpg"),
  cdn("CAM 5.jpg"),
  cdn("Shot01.jpg"),
  cdn("Shot02.jpg"),
  cdn("Pool01.jpg"),
  cdn("Pool02.jpg"),
  cdn("LOBBY CAM 1.jpg"),
  cdn("LOBBY CAM 2.jpg"),
  cdn("LOBBY CAM 3.jpg"),
  cdn("living.jpg"),
  cdn("living2.jpg"),
  cdn("living3.jpg"),
  cdn("living4.jpg"),
  cdn("Bedroom 1.jpg"),
  cdn("Bedroom 2.jpg"),
  cdn("Bedroom 3.jpg"),
  cdn("Bedroom 4.jpg"),
  cdn("bath.jpeg"),
  cdn("SAUNA FINAL REDNER.jpg"),
  cdn("SAUNA FINAL RENDER CAMERA 2.jpg"),
  cdn("SPA 4K CAMERA 1.jpg"),
];

// ======================================================
// DATA
// ======================================================
export const samanaIbizaData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Samana Ibiza | Apartments in DLRC Dubai",
      description:
        "Samana Ibiza offers studio, 1 & 2 bedroom apartments in DLRC Dubai. Starting from AED 838K with a 75/25 payment plan and handover Q1 2028.",
      keywords: "Samana Ibiza, DLRC apartments, Samana Developers Dubai",
      canonical: "/properties/apartments/samana/ibiza",
    },

    project: {
      name: "Samana Ibiza",
      developer: "Samana Developers",
      location: "Dubai Land Residence Complex (DLRC), Dubai",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 838,420",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "SAMANA IBIZA — RESORT-STYLE LIVING IN DLRC",
      paragraphs: [
        "Samana Ibiza brings Mediterranean-inspired resort living to Dubai Land Residence Complex.",
        `Apartments start from AED 838,420 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "Samana Ibiza DLRC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 838K",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "457 sq.ft",
          label: "Studio Size",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "DLRC",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Ibiza",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "457.36 sq.ft",
            "Starting Price": "AED 838,420",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "826.34 sq.ft",
            "Starting Price": "AED 1,203,061",
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
            "Total Area": "1,389.84 sq.ft",
            "Starting Price": "AED 1,918,400",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Resort Pool", icon: "🏝️", color: "#c9a24d" },
        { label: "Spa & Sauna", icon: "💆", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Luxury Lobby", icon: "🏛️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Ibiza",
      address: "Dubai Land Residence Complex (DLRC), Dubai",
      lat: 25.0976594,
      lng: 55.379564,
      zoom: 17,
      proximityFeatures: [
        { icon: "🛣️", text: "Easy access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Close to major Dubai landmarks." },
        { icon: "🌳", text: "Family-friendly residential community." },
      ],
    },

    cta: {
      title: "Own a Home at Samana Ibiza",
      description:
        "Request availability, prices, and official Samana documents today.",
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
      name: "سمانا إيبيزا",
      developer: "سمانا للتطوير العقاري",
      location: "مجمع دبي لاند السكني",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "838,420 درهم",
      completionDate: "الربع الأول 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو، غرفة وغرفتين",
    },

    hero: {
      backgroundUrl: VIDEO,
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
            "إجمالي المساحة": "457.36 قدم²",
            "السعر الابتدائي": "838,420 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
        },
        {
          title: "غرفة نوم",
          specs: {
            "إجمالي المساحة": "826.34 قدم²",
            "السعر الابتدائي": "1,203,061 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,389.84 قدم²",
            "السعر الابتدائي": "1,918,400 درهم",
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

export default samanaIbizaData;
