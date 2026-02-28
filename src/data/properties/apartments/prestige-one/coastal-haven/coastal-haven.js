// src/data/properties/apartments/prestige-one/coastal-haven.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 2BR / 3BR
// ✅ Exact Bunny filenames ONLY
// ✅ Prestige Harbour (Prestige One)
// ✅ Dubai Islands
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/prestige-one/coastal-haven";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Coastal Haven by Prestige Harbour Brochure.pdf");
const FACTSHEET_PDF = cdn("Coastal Haven Fact Sheet.pdf");
const MARKETING_VIDEO = cdn("Coastal Haven - Marketing Video (Compressed).mp4");

// Floor plans
const FP_2BR = cdn("2 BR Coastal Haven Floor plan.webp");
const FP_3BR = cdn("3 BR Coastal Haven Floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("01 Facade.jpg"),
  cdn("02 Facade.jpg"),
  cdn("01 Main Entrance.jpg"),
  cdn("05 Typical Lift Lobby.jpg"),
  cdn("01 Game Room View.jpg"),
  cdn("02 Game Room View.jpg"),
  cdn("03 Gym.jpg"),
  cdn("04 Kids Play Area.jpg"),
  cdn("05 Lounge.jpg"),
  cdn("06 Lounge.jpg"),
  cdn("07 1-Bedroom-LivingRoom.jpg"),
  cdn("01 1-Bedroom.jpg"),
  cdn("02 2-Bedroom.jpg"),
  cdn("03 2-Bedroom.jpg"),
  cdn("04 3-Bedroom - living dining.jpg"),
  cdn("06 3-Bedroom Kitchen.jpg"),
  cdn("05 3-Bedroom penthouse - living dining.jpg"),
  cdn("Pent Bedroom.jpg"),
  cdn("Pent Kitchen.jpg"),
  cdn("Bathroom.jpg"),
  cdn("Powder Room.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q1 2028";
const PAYMENT_PLAN = "40% / 60%";
const LOCATION_NAME = "Dubai Islands";
const DEVELOPER = "Prestige Harbour Developments";

// ======================================================
// DATA
// ======================================================
export const coastalHavenData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Coastal Haven by Prestige Harbour | Apartments for Sale in Dubai Islands",
      description:
        "Coastal Haven by Prestige Harbour offers waterfront 2 & 3 bedroom apartments on Dubai Islands. Starting from AED 2.65M with handover in Q1 2028.",
      keywords:
        "Coastal Haven, Prestige Harbour, Dubai Islands apartments, waterfront apartments Dubai",
      canonical: "/properties/apartments/prestige-one/coastal-haven",
    },

    project: {
      name: "Coastal Haven",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,650,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Waterfront Apartments",
      units: "2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
      videoUrl: MARKETING_VIDEO,
    },

    intro: {
      title: "COASTAL HAVEN — WATERFRONT LIVING ON DUBAI ISLANDS",
      paragraphs: [
        "Coastal Haven is a premium waterfront residential development by Prestige Harbour, located on the iconic Dubai Islands.",
        "Designed for elevated coastal living, the project blends contemporary architecture with leisure-focused amenities and panoramic sea views.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Coastal Haven Dubai Islands",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Waterfront",
          label: "Dubai Islands",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 2.65M",
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
      projectTag: "Coastal Haven",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,200.39 sq.ft",
            "Starting Price": "AED 2,650,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "1,665.61 sq.ft",
            "Starting Price": "AED 3,837,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Waterfront Living", icon: "🌊", color: "#c9a24d" },
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Game Room", icon: "🎮", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Residents Lounge", icon: "🛋️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Coastal Haven",
      address: LOCATION_NAME,
      lat: 25.2904375,
      lng: 55.3080625,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌴", text: "Prime waterfront destination on Dubai Islands" },
        { icon: "🚗", text: "Direct connectivity to Deira & Downtown Dubai" },
        { icon: "✈️", text: "Easy access to Dubai International Airport" },
      ],
    },

    cta: {
      title: "Own a Waterfront Home at Coastal Haven",
      description:
        "Get full price lists, availability, and official Prestige Harbour documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "كوستال هيفن",
      developer: "بريستيج هاربر للتطوير العقاري",
      location: "جزر دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,650,000 درهم",
      completionDate: "الربع الأول 2028",
      paymentPlan: "40% / 60%",
      type: "شقق واجهة بحرية",
      units: "غرفتين و3 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Prestige Harbour",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,200.39 قدم²",
            "السعر الابتدائي": "2,650,000 درهم",
            "خطة السداد": "40% / 60%",
            "موعد التسليم": "الربع الأول 2028",
          },
          images: [FP_2BR],
        },
        {
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,665.61 قدم²",
            "السعر الابتدائي": "3,837,000 درهم",
            "خطة السداد": "40% / 60%",
            "موعد التسليم": "الربع الأول 2028",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },
  },
};

export default coastalHavenData;
