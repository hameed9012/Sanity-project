// src/data/properties/apartments/evolutions/hyde-residences.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR / 2BR
// ✅ Dubai Hills Estate
// ✅ Exact Bunny filenames only
// ✅ Evolutions standard

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/evolutions/hyde-residences";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL = "/evolutions.jpg";

// ================= FILES =================
const BROCHURE_PDF = cdn("ENGLISH_Hyde Residences Brochure.pdf");
const FACTSHEET_PDF = cdn("ENGLISH_Hyde Residences Factsheet.pdf");
const FLOORPLANS_PDF = cdn("Hyde Residences Floor Plans.pdf");

// Floor plans
const FP_1BR = cdn("1 BR Hyde Residences Floor plan.webp");
const FP_2BR = cdn("2 BR Hyde Residences Floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("View_1Ba.jpg"),
  cdn("View-3.jpg"),
  cdn("View_2.jpg"),
  cdn("View_4.jpg"),
  cdn("View_5.jpg"),
  cdn("View_6.jpg"),
  cdn("View 7.jpg"),

  cdn("LOBBY.jpg"),
  cdn("LIFT LOBBY.jpg"),
  cdn("GYM.jpg"),
  cdn("SCREENING ROOM.jpg"),
  cdn("LISTENING ROOM.jpg"),
  cdn("WFH LIBRARY.jpg"),
  cdn("SUMMER HOUSE.jpg"),

  cdn("1BED_LIVING_VIEW_1.jpg"),
  cdn("1BED_LIVING_VIEW_3.jpg"),
  cdn("1BED_LIVING_VIEW_5.jpg"),
  cdn("1BED_BR_VIEW_1.jpg"),
  cdn("1BED_BR_VIEW_3.jpg"),
  cdn("1BED_BR_VIEW_5.jpg"),

  cdn("2BED_LOUNGE_VIEW_2.jpg"),
  cdn("2BED_LOUNGE_VIEW_7.jpg"),
  cdn("2BED_LOUNGE_VIEW_8.jpg"),
  cdn("2BED_KITCHEN_DINING.jpg"),
  cdn("2BED_BR_VIEW_2.jpg"),
  cdn("2BED_BR_VIEW_4.jpg"),

  cdn("3BED_LIVING_VIEW_1.5.jpg"),
  cdn("3BED_KITCHEN_DINING.jpg"),
  cdn("3BED_BR_VIEW_1.5.jpg"),

  cdn("BATHROOM_1.jpg"),
  cdn("BATHROOM_2.jpg"),
  cdn("KIDS ROOM.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2026";
const PAYMENT_PLAN = "50% / 50%";
const LOCATION_NAME = "Dubai Hills Estate";
const DEVELOPER = "Cityview Developments";

// ======================================================
// DATA
// ======================================================
export const hydeResidencesData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Hyde Residences | Apartments in Dubai Hills Estate",
      description:
        "Hyde Residences by Cityview Developments offers 1 and 2 bedroom apartments in Dubai Hills Estate. Starting from AED 2,423,617 with 50/50 payment plan and handover in Q4 2026.",
      keywords:
        "Hyde Residences Dubai Hills, Hyde apartments Dubai, Dubai Hills apartments",
      canonical: "/properties/apartments/evolutions/hyde-residences",
    },

    project: {
      name: "Hyde Residences",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,423,617",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Cityview Developments",
      rating: null,
    },

    intro: {
      title: "HYDE RESIDENCES — LIFESTYLE LIVING IN DUBAI HILLS",
      paragraphs: [
        "Hyde Residences is a premium residential development by Cityview Developments, located in the heart of Dubai Hills Estate, offering refined urban living with hotel-inspired amenities.",
        "The project features spacious 1 and 2 bedroom apartments designed for modern lifestyles with a balanced payment plan and excellent connectivity.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Hyde Residences Dubai Hills",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "Dubai Hills",
          label: "Prime Location",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "AED 2.42M",
          label: "Starting Price",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Hyde Residences",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "832 sq.ft",
            "Starting Price": "AED 2,423,617",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,335 sq.ft",
            "Starting Price": "AED 3,968,977",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Cinema & Screening Room", icon: "🎬", color: "#c9a24d" },
        { label: "Listening Lounge", icon: "🎧", color: "#c9a24d" },
        { label: "Work From Home Library", icon: "💻", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Landscaped Gardens", icon: "🌿", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Hyde Residences",
      address: LOCATION_NAME,
      lat: 25.1038169,
      lng: 55.2420399,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏞️", text: "Located within Dubai Hills Estate" },
        { icon: "🛍️", text: "Close to Dubai Hills Mall" },
        { icon: "🏥", text: "Near Kings College Hospital" },
        { icon: "🚗", text: "Easy access to Al Khail Road" },
      ],
    },

    cta: {
      title: "Invest in Hyde Residences",
      description:
        "Request availability, floor plans, and official Cityview documents.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "هايد ريزيدنس",
      developer: "سيتي فيو للتطوير العقاري",
      location: "دبي هيلز",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,423,617 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "غرفة وغرفتين نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Cityview",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "832 قدم²",
            "السعر الابتدائي": "2,423,617 درهم",
            "خطة السداد": "50% / 50%",
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,335 قدم²",
            "السعر الابتدائي": "3,968,977 درهم",
            "خطة السداد": "50% / 50%",
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default hydeResidencesData;
