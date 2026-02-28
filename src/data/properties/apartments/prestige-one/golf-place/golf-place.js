// src/data/properties/apartments/prestige-one/golf-place.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ Studio / 1BR / 2BR / 3BR
// ✅ Bunny CDN filenames EXACT
// ✅ Prestige One
// ✅ Dubai Sports City
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/prestige-one/golf-place";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png";

// ================= FILES =================
const FACTSHEET_PDF = cdn("Fact sheet - Golf place.pdf");

// Floor Plans
const FP_1BR = cdn("1 BR Golf Place Floor Plan.webp");
const FP_2BR = cdn("2 BR Golf Place Floor Plan.webp");
const FP_3BR = cdn("3 BR Golf Place Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("Golf Place- Amenities- Infinity Pool.jpg"),
  cdn("Golf Place- Amenities- Rooftop.jpg"),
  cdn("Golf Place- Amenities- Podium.jpg"),
  cdn("Golf Place- Amenities- Private Pool.png"),
  cdn("Golf Place- Amenities- running track.png"),
  cdn("Club Lounge 02.jpg"),
  cdn("Mens Gym 01.jpg"),
  cdn("Mens Gym 04.jpg"),
  cdn("WOMEN Locker_View01.jpg"),
  cdn("Kids 1.jpg"),
  cdn("Kids 2.jpg"),
  cdn("CORRIDOR 03.jpg"),
  cdn("Golf Place- Studio 01.jpg"),
  cdn("Golf Place- Studio 02.jpg"),
  cdn("Golf Place- Studio 03.jpg"),
  cdn("Golf Place- 1BHK- living 03.jpg"),
  cdn("Golf Place- 1BHK- living 05.jpg"),
  cdn("Golf Place- 1BHK- master bedroom 02.jpg"),
  cdn("Golf Place- 2BHK- living 03.jpg"),
  cdn("Golf Place- 3BHK- living 2.jpg"),
  cdn("Golf Place- 3BHK- living 3.jpg"),
  cdn("Golf Place- 3BHK- living 3 (1).jpg"),
  cdn("Golf Place- 3BHK- master bedroom 02.jpg"),
  cdn("Golf Place- 3BHK- bedroom 3 v02.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2027";
const PAYMENT_PLAN = "65% / 35%";
const LOCATION_NAME = "Dubai Sports City";
const DEVELOPER = "Prestige One Developments";

// ======================================================
// DATA
// ======================================================
export const golfPlaceData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Golf Place by Prestige One | Apartments for Sale in Dubai Sports City",
      description:
        "Golf Place by Prestige One offers studio, 1, 2 & 3 bedroom apartments in Dubai Sports City. Starting from AED 1.49M with handover Q2 2027.",
      keywords:
        "Golf Place Dubai, Prestige One, Dubai Sports City apartments, golf community",
      canonical: "/properties/apartments/prestige-one/golf-place",
    },

    project: {
      name: "Golf Place",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,491,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Golf Community Apartments",
      units: "Studio, 1, 2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "GOLF PLACE — LUXURY LIVING IN DUBAI SPORTS CITY",
      paragraphs: [
        "Golf Place by Prestige One is a modern residential development located in the heart of Dubai Sports City, offering golf-facing views and premium amenities.",
        "The project blends contemporary design with wellness-focused facilities, creating a balanced lifestyle for residents and investors.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Golf Place Dubai Sports City",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "⛳",
          value: "Golf Views",
          label: "Premium Community",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 1.49M",
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
      projectTag: "Golf Place",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "976.39 sq.ft",
            "Starting Price": "AED 1,491,000",
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
            "Total Area": "1,374.77 sq.ft",
            "Starting Price": "AED 1,770,000",
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
            "Total Area": "1,720.29 sq.ft",
            "Starting Price": "AED 2,325,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Golf Views", icon: "⛳", color: "#c9a24d" },
        { label: "Infinity Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Rooftop Lounge", icon: "🌇", color: "#c9a24d" },
        { label: "Running Track", icon: "🏃", color: "#c9a24d" },
        { label: "Gym Facilities", icon: "🏋️", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Club Lounge", icon: "🛋️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Golf Place",
      address: LOCATION_NAME,
      lat: 25.1220004,
      lng: 55.2726208,
      zoom: 16,
      proximityFeatures: [
        { icon: "⛳", text: "Overlooking golf courses" },
        {
          icon: "🚗",
          text: "Easy access to Hessa Street & Sheikh Mohammed Bin Zayed Road",
        },
        { icon: "🏟️", text: "Minutes from Dubai Sports City facilities" },
      ],
    },

    cta: {
      title: "Live in a Golf-Focused Community",
      description:
        "Get full availability, floor plans, and official Prestige One pricing for Golf Place.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "جولف بليس",
      developer: "بريستيج ون للتطوير العقاري",
      location: "دبي سبورتس سيتي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,491,000 درهم",
      completionDate: "الربع الثاني 2027",
      paymentPlan: "65% / 35%",
      type: "شقق مطلة على الجولف",
      units: "استوديو، غرفة، غرفتين و3 غرف نوم",
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
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "976.39 قدم²",
            "السعر الابتدائي": "1,491,000 درهم",
            "خطة السداد": "65% / 35%",
            "موعد التسليم": "الربع الثاني 2027",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,374.77 قدم²",
            "السعر الابتدائي": "1,770,000 درهم",
            "خطة السداد": "65% / 35%",
            "موعد التسليم": "الربع الثاني 2027",
          },
          images: [FP_2BR],
        },
        {
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,720.29 قدم²",
            "السعر الابتدائي": "2,325,000 درهم",
            "خطة السداد": "65% / 35%",
            "موعد التسليم": "الربع الثاني 2027",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },
  },
};

export default golfPlaceData;
