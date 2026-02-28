// src/data/properties/apartments/samana/barari-lagoons.js
// ✅ Folder: /samana/barari-lagoons
// ✅ Uses ONLY existing Bunny filenames
// ✅ EN + AR
// ✅ 2BR only
// ✅ Majan, Dubai
// ✅ Samana standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/barari-lagoons";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// Samana square logo (global)
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("BARARI LAGOONS BROCHURE.pdf");
const FACTSHEET_PDF = cdn("BARARI LAGOONS FACTSHEET.pdf");
const FLOORPLANS_PDF = cdn("BARARI LAGOONS FLOOR PLAN.pdf");
const PAYMENT_PLAN_PDF = cdn("BARARI LAGOONS PAYMENT PLAN.pdf");

const PAYMENT_PLAN = "20% / 80%";
const HANDOVER = "Q1 2028";

// Media
const HERO_BG = cdn("Barari lagoons Launch film Reel 2.mp4");
const INTRO_MAIN = cdn("Shot01.jpg");
const VIDEO = HERO_BG;

// Floor plan
const FP_2BR = cdn("Samana Barari lagoons 2br floor plan.webp");

// ================= GALLERY (STRICT) =================
const GALLERY = [
  cdn("Shot02.jpg"),
  cdn("Shot03.jpg"),
  cdn("Shot04.jpg"),
  cdn("Shot04-Wide.jpg"),
  cdn("Shot05.jpg"),
  cdn("Shot06.jpg"),
  cdn("Shot07.jpg"),
  cdn("Shot08.jpg"),
  cdn("Shot09.jpg"),
  cdn("Shot10.jpg"),
  cdn("Shot11.jpg"),
  cdn("Samana-Majan 3-Apartment 1.jpg"),
  cdn("Samana-Majan 3-Apartment 2.jpg"),
  cdn("Samana-Majan 3-Apartment 3.jpg"),
  cdn("Samana-Majan 3-Apartment 4.jpg"),
  cdn("Samana-Majan 3-Apartment 5.jpg"),
  cdn("Samana-DLRC4-Lobby (1).jpg"),
  cdn("Samana-DLRC4-Lobby (2).jpg"),
  cdn("Samana-DLRC4-Lobby (3).jpg"),
  cdn("Samana-DLRC4-Lobby (4).jpg"),
  cdn("Samana-DLRC4-Lobby (5).jpg"),
  cdn("MAJAN 3 GYM CAMERA 1 .jpg"),
  cdn("MAJAN 3 GYM CAMERA 2.jpg"),
  cdn("MAJAN 3 GYM CAMERA 3.jpg"),
  cdn("MAJAN 3 GYM CAMERA 4.jpg"),
  cdn("MAJAN 3 GYM CAMERA 5.jpg"),
  cdn("MAJAN 3 GYM CAMERA 6.jpg"),
  cdn("MAJAN 3 GYM CAMERA 7.jpg"),
];

// ======================================================
// DATA
// ======================================================
export const samanaBarariLagoonsData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Samana Barari Lagoons | 2BR Apartments in Majan, Dubai",
      description:
        "Samana Barari Lagoons offers luxury 2-bedroom apartments in Majan, Dubai. Starting from AED 2.43M with a 20/80 payment plan and handover in Q1 2028.",
      keywords:
        "Samana Barari Lagoons, Majan apartments, Samana Developers Dubai",
      canonical: "/properties/apartments/samana/barari-lagoons",
    },

    project: {
      name: "Samana Barari Lagoons",
      developer: "Samana Developers",
      location: "Majan, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,438,389",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "SAMANA BARARI LAGOONS — RESORT-STYLE LIVING IN MAJAN",
      paragraphs: [
        "Samana Barari Lagoons is a premium residential development designed around water-inspired leisure and modern urban comfort.",
        `2-bedroom apartments start from AED 2,438,389 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Samana Barari Lagoons Majan",
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
          value: "1,343 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Majan",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Barari Lagoons",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,343.02 sq.ft",
            "Starting Price": "AED 2,438,389",
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
        { label: "Lagoon-Style Pool", icon: "🏝️", color: "#c9a24d" },
        { label: "Indoor & Outdoor Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Luxury Lobby", icon: "🏛️", color: "#c9a24d" },
        { label: "Resort-Style Living", icon: "🌊", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Barari Lagoons",
      address: "Majan, Dubai, UAE",
      lat: 25.0929375,
      lng: 55.3209375,
      zoom: 17,
      proximityFeatures: [
        { icon: "🛣️", text: "Quick access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🌳", text: "Close to Al Barari green community." },
        { icon: "🏙️", text: "Minutes from major Dubai destinations." },
      ],
    },

    cta: {
      title: "Own a Home at Samana Barari Lagoons",
      description:
        "Request prices, availability, and official Samana documents today.",
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
      name: "سمانا براري لاجونز",
      developer: "سمانا للتطوير العقاري",
      location: "ماجان، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,438,389 درهم",
      completionDate: "الربع الأول 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفتين نوم",
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
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,343.02 قدم²",
            "السعر الابتدائي": "2,438,389 درهم",
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

export default samanaBarariLagoonsData;
