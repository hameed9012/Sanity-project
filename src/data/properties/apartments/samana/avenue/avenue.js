// src/data/properties/apartments/samana/avenue.js
// ✅ Folder: /samana/avenue
// ✅ EN + AR
// ✅ 1BR + 2BR
// ✅ Dubai Land Residence Complex (DLRC)
// ✅ Exact Bunny filenames
// ✅ Samana blueprint (verified)

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/avenue";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// Samana square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("SAMANA AVENUE BROCHURE.pdf");
const FACTSHEET_PDF = cdn("SAMANA AVENUE FACTSHEET.pdf");
const FLOORPLANS_PDF = cdn("SAMANA AVENUE FLOOR PLAN.pdf");

const VIDEO = cdn("NEW SAMAN AVENUE LAUNCH 16X9 -.mp4");

const PAYMENT_PLAN = "80% / 20%";
const HANDOVER = "Q1 2026";

// Floor plans
const FP_1BR = cdn("Samana Avenue 1br floor plan .png");
const FP_2BR = cdn("Samana Avenue 2br floor plan.webp");

// ================= GALLERY (CLEAN SET) =================
const GALLERY = [
  cdn("1.png"),
  cdn("SD_Showa_appartment1.png"),
  cdn("SD_Showa_appartment2.png"),
  cdn("SD_Showa_appartment3.png"),
  cdn("SD_Showa_appartment4.png"),
  cdn("SD_Showa_appartment5.png"),
  cdn("SD_Showa_appartment6.png"),
];

// ======================================================
// DATA
// ======================================================
export const samanaAvenueData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Samana Avenue | 1 & 2 Bedroom Apartments in DLRC",
      description:
        "Samana Avenue offers 1 and 2 bedroom apartments in Dubai Land Residence Complex. Starting from AED 1,613,107 with an 80/20 payment plan and handover in Q1 2026.",
      keywords:
        "Samana Avenue, Samana Developers, DLRC apartments, Dubai Land Residence Complex",
      canonical: "/properties/apartments/samana/avenue",
    },

    project: {
      name: "Samana Avenue",
      developer: "Samana Developers",
      location: "Dubai Land Residence Complex (DLRC), Dubai",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,613,107",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "SAMANA AVENUE — MODERN URBAN LIVING",
      paragraphs: [
        "Samana Avenue is a contemporary residential development designed for modern lifestyles in Dubai Land Residence Complex.",
        `1 and 2 bedroom apartments start from AED 1,613,107 with an ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "Samana Avenue",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1.61M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "980 – 1,228 sq.ft",
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
      projectTag: "Samana Avenue",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "980.81 sq.ft",
            "Starting Price": "AED 1,613,107",
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
            "Total Area": "1,228.05 sq.ft",
            "Starting Price": "AED 1,956,469",
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
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Gym & Fitness", icon: "🏋️", color: "#c9a24d" },
        { label: "Spa & Sauna", icon: "🧖", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧒", color: "#c9a24d" },
        { label: "BBQ & Leisure Areas", icon: "🔥", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Avenue",
      address: "Dubai Land Residence Complex (DLRC), Dubai",
      lat: 25.0843125,
      lng: 55.3848125,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Close to Business Bay & Downtown Dubai." },
        { icon: "✈️", text: "Quick access to Dubai International Airport." },
      ],
    },

    cta: {
      title: "Invest in Samana Avenue",
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
      name: "سمانا أفينيو",
      developer: "سمانا للتطوير العقاري",
      location: "مجمع دبي لاند السكني",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,613,107 درهم",
      completionDate: "الربع الأول 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة نوم وغرفتين نوم",
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
          title: "غرفة نوم واحدة",
          specs: {
            "إجمالي المساحة": "980.81 قدم²",
            "السعر الابتدائي": "1,613,107 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,228.05 قدم²",
            "السعر الابتدائي": "1,956,469 درهم",
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

export default samanaAvenueData;
