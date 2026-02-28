// src/data/properties/apartments/prestige-one/seaside.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 2BR / 3BR
// ✅ Prestige One Developments
// ✅ Dubai Islands
// ✅ Bunny CDN paths EXACT
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/prestige-one/seaside";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png";

// ================= FLOOR PLANS =================
const FP_2BR = cdn("2 BR Seaside by Prestige One Floor plan.webp");
const FP_3BR = cdn("3 BR Seaside by Prestige One floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("Exterior - Detailed Front View.jpg"),
  cdn("Seaside_Building Night.jpg"),
  cdn("Living Area and Kitchen.jpg"),
  cdn("Living Area, Kitchen.jpg"),
  cdn("Living Room.jpg"),
  cdn("Bedroom.jpg"),
  cdn("Bedroom 1.jpg"),
  cdn("Changing Room 2.jpg"),
  cdn("Master Bathroom.jpg"),
  cdn("Lobby.jpg"),
  cdn("Reception_Desk.jpg"),
  cdn("Corridor.jpg"),
  cdn("Lift 1.jpg"),
  cdn("Gym.jpg"),
  cdn("Spapool.jpg"),
  cdn("swimming pool.jpg"),
  cdn("Swimming Pool 2.jpg"),
  cdn("Mini Putt Golf.jpg"),
  cdn("Kids Play Area.jpg"),
  cdn("Kids Play Area (1).jpg"),
  cdn("Retail Shop.jpg"),
  cdn("Podium.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2026";
const PAYMENT_PLAN = "40% / 60%";
const LOCATION_NAME = "Dubai Islands";
const DEVELOPER = "Prestige One Developments";

// ======================================================
// DATA
// ======================================================
export const seasideData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Seaside by Prestige One | Waterfront Apartments in Dubai Islands",
      description:
        "Seaside by Prestige One offers luxury 2 & 3 bedroom apartments on Dubai Islands. Starting from AED 2.5M with handover Q4 2026.",
      keywords:
        "Seaside Prestige One, Dubai Islands apartments, Prestige One waterfront",
      canonical: "/properties/apartments/prestige-one/seaside",
    },

    project: {
      name: "Seaside by Prestige One",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,500,000",
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
    },

    intro: {
      title: "SEASIDE — WATERFRONT LIVING ON DUBAI ISLANDS",
      paragraphs: [
        "Seaside by Prestige One is a premium waterfront residential development located on Dubai Islands, designed for elevated coastal living.",
        "The project combines modern architecture, open-plan interiors, and resort-style amenities with direct access to the sea and panoramic island views.",
      ],
      imgUrl: GALLERY[2],
      imgAlt: "Seaside by Prestige One Dubai Islands",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Waterfront",
          label: "Island Living",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 2.5M",
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
      projectTag: "Seaside",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,202.76 sq.ft",
            "Starting Price": "AED 2,500,000",
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
            "Total Area": "1,975.39 sq.ft",
            "Starting Price": "AED 3,725,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#1e90ff" },
        { label: "Spa & Wellness", icon: "💆", color: "#1e90ff" },
        { label: "Gymnasium", icon: "🏋️", color: "#1e90ff" },
        { label: "Mini Golf", icon: "⛳", color: "#1e90ff" },
        { label: "Kids Play Area", icon: "🧸", color: "#1e90ff" },
        { label: "Retail Outlets", icon: "🛍️", color: "#1e90ff" },
        { label: "Podium Deck", icon: "🌴", color: "#1e90ff" },
        { label: "24/7 Security", icon: "🔒", color: "#1e90ff" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Seaside by Prestige One",
      address: LOCATION_NAME,
      lat: 25.2922382,
      lng: 55.302234,
      zoom: 15,
      proximityFeatures: [
        { icon: "🌊", text: "Direct access to Dubai Islands waterfront" },
        { icon: "🚗", text: "Easy connectivity to mainland Dubai" },
        { icon: "✈️", text: "Close to Dubai International Airport" },
      ],
    },

    cta: {
      title: "Live the Island Lifestyle",
      description:
        "Request prices, availability, and official floor plans for Seaside by Prestige One.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "سي سايد من بريستيج ون",
      developer: "بريستيج ون للتطوير العقاري",
      location: "جزر دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,500,000 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: "40% / 60%",
      type: "شقق على الواجهة البحرية",
      units: "غرفتين و3 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Prestige One",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,202.76 قدم²",
            "السعر الابتدائي": "2,500,000 درهم",
            "خطة السداد": "40% / 60%",
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_2BR],
        },
        {
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,975.39 قدم²",
            "السعر الابتدائي": "3,725,000 درهم",
            "خطة السداد": "40% / 60%",
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_3BR],
        },
      ],
    },
  },
};

export default seasideData;
