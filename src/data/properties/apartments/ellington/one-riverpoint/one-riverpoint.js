// src/data/properties/apartments/ellington/one-river-point.js
// ✅ Folder: /ellington/one-riverpoint
// ✅ EN + AR
// ✅ 1BR + 2BR + 4BR
// ✅ Exact Bunny filenames only
// ✅ Business Bay
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/one-riverpoint";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("ORP-Floor Plan.pdf");
const PAYMENT_PLAN_PDF = cdn("ORP_Payment Plan.pdf");
const MAP_PDF = cdn("ORP-Downtown Map.pdf");

const HERO_BG = cdn("ORP_Concept Video.mp4");
const INTRO_MAIN = cdn("One River Point_Facade roof.jpg");
const VIDEO = cdn("ORP_Concept Video.mp4");

const FP_1BR = cdn("One river point 1br floor plan.webp");
const FP_2BR = cdn("One river point 2br floor plan.webp");
const FP_4BR = cdn("One River point 4br floor plan.webp");

// ⚠️ ONLY VERIFIED FILES FROM BUNNY
const GALLERY = [
  cdn("One River Point_View- Canal side.jpg"),
  cdn("One River Point_Arrival Area.jpg"),
  cdn("One River Point_Lobby Reception.jpg"),
  cdn("One River Point_Lobby Lounge_.jpg"),
  cdn("One River Point_Lift Lobby.jpg"),
  cdn("One River Point_Kitchen.jpg"),
  cdn("One River Point_Bathroom.jpg"),
  cdn("One River Point_Duplex living and dining.jpg"),
  cdn("One River Point_Pool.jpg"),
  cdn("One River Point_Fitness studio.jpg"),
  cdn("One River Point_Yoga.jpg"),
  cdn("One River Point_Immersive room.jpg"),
  cdn("One River Point_Club House.jpg"),
  cdn("One River Point_ Kids Play.jpg"),
];

const HANDOVER = "Q2 2027";
const PAYMENT_PLAN = "70% / 30%";

// ======================================================
// DATA
// ======================================================
export const oneRiverPointData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "One River Point by Ellington | Waterfront Residences in Business Bay",
      description:
        "One River Point by Ellington offers luxury 1, 2 & 4 bedroom residences in Business Bay. Starting from AED 3,411,828 with a 70/30 payment plan and handover in Q2 2027.",
      keywords:
        "One River Point, Ellington Properties, Business Bay waterfront apartments",
      canonical: "/properties/apartments/ellington/one-river-point",
    },

    project: {
      name: "One River Point",
      developer: "Ellington Properties",
      location: "Business Bay, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 3,411,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Waterfront Residences",
      units: "1, 2 & 4 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "ONE RIVER POINT — ICONIC CANAL-SIDE LIVING",
      paragraphs: [
        "One River Point by Ellington is a landmark waterfront development in Business Bay, offering refined architecture and uninterrupted Dubai Canal views.",
        `Residences start from AED 3,411,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Floor Plans", url: BROCHURE_PDF, type: "main" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
        { title: "Location Map", url: MAP_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "One River Point by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3.41M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,199 – 5,576 sq.ft",
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
      projectTag: "One River Point",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "1,199.53 sq.ft",
            "Starting Price": "AED 3,411,828",
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
            "Total Area": "1,461.63 sq.ft",
            "Starting Price": "AED 4,338,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "5,576.24 sq.ft",
            "Starting Price": "AED 16,180,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Canal-View Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Yoga Studios", icon: "🧘", color: "#d7b46a" },
        { label: "Clubhouse & Immersive Rooms", icon: "🏛️", color: "#d7b46a" },
        { label: "Kids Play Areas", icon: "👨‍👩‍👧", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "One River Point",
      address: "Business Bay, Dubai, UAE",
      lat: 25.181766,
      lng: 55.261112,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌆", text: "Prime Business Bay waterfront." },
        { icon: "🚗", text: "Minutes from Downtown Dubai." },
        { icon: "🛣️", text: "Direct access to Sheikh Zayed Road." },
      ],
    },

    cta: {
      title: "Own a Waterfront Home at One River Point",
      description:
        "Request pricing, availability, and official Ellington documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Floor Plans", action: "download-brochure" },
        { label: "Payment Plan", action: "download-payment-plan" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "ون ريفر بوينت",
      developer: "إلينغتون العقارية",
      location: "بزنس باي، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "3,411,828 درهم",
      completionDate: "الربع الثاني 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "مساكن مطلة على القناة",
      units: "1 و2 و4 غرف نوم",
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
            "إجمالي المساحة": "1,199.53 قدم²",
            "السعر الابتدائي": "3,411,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,461.63 قدم²",
            "السعر الابتدائي": "4,338,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          title: "4 غرف نوم",
          specs: {
            "إجمالي المساحة": "5,576.24 قدم²",
            "السعر الابتدائي": "16,180,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },
  },
};

export default oneRiverPointData;
