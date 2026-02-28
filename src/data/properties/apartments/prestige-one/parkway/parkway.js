// src/data/properties/apartments/prestige-one/parkway.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR / 2BR / 3BR
// ✅ Bunny CDN filenames EXACT
// ✅ Prestige One Developments
// ✅ Bukadra – Meydan, Dubai
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/prestige-one/parkway";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png";

// ================= FILES =================
const FACTSHEET_PDF = cdn("Factsheet - Parkway.pdf");
const BROCHURE_PDF = cdn("Info Brochure - Parkway.pdf");
const FLOORPLANS_PDF = cdn(
  "Parkway By Prestige One-Unit Types And Floor Plan.pdf",
);

// Floor Plans
const FP_1BR = cdn("1 BR Parkway by Prestige One Floor Plan.webp");
const FP_2BR = cdn("2 BR Parkway by Prestige One Floor Plan.webp");
const FP_3BR = cdn("3 BR Parkway by Prestige One Floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("V08_Prestige_Exteriors_Landscape_1_.jpg"),
  cdn("V10_Prestige_Exteriors_Landscape_3.jpg"),
  cdn("Front Exterior - 4.jpg"),
  cdn("Lobby - 1.jpg"),
  cdn("Lobby - 3.jpg"),
  cdn("Living Area.jpg"),
  cdn("Kitchen.jpg"),
  cdn("Bedroom.jpg"),
  cdn("Bathroom.jpg"),
  cdn("Changing Room.jpg"),
  cdn("Lounge.jpg"),
  cdn("Game Room.jpg"),
  cdn("Indoor Cinema.jpg"),
  cdn("Kids' Play Area.jpg"),
  cdn("Yoga Area.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q1 2028";
const PAYMENT_PLAN = "65% / 35%";
const LOCATION_NAME = "Bukadra, Meydan, Dubai";
const DEVELOPER = "Prestige One Developments";

// ======================================================
// DATA
// ======================================================
export const parkwayData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Parkway by Prestige One | Apartments for Sale in Meydan, Dubai",
      description:
        "Parkway by Prestige One offers 1, 2 & 3 bedroom apartments in Bukadra, Meydan. Starting from AED 1.76M with handover Q1 2028.",
      keywords:
        "Parkway Prestige One, Meydan apartments, Bukadra Dubai, Prestige One Meydan",
      canonical: "/properties/apartments/prestige-one/parkway",
    },

    project: {
      name: "Parkway by Prestige One",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,760,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Apartments",
      units: "1, 2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "PARKWAY — CONTEMPORARY LIVING IN MEYDAN",
      paragraphs: [
        "Parkway by Prestige One is a premium residential development located in Bukadra, Meydan, offering modern architecture, refined interiors, and an elevated lifestyle.",
        "Designed for both end-users and investors, Parkway combines serene surroundings with excellent connectivity to Downtown Dubai and major road networks.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        { title: "Download Brochure", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[2],
      imgAlt: "Parkway by Prestige One Meydan",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "Meydan",
          label: "Prime Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 1.76M",
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
      projectTag: "Parkway",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "858.85 sq.ft",
            "Starting Price": "AED 1,760,000",
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
            "Total Area": "1,114.17 sq.ft",
            "Starting Price": "AED 2,400,000",
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
            "Total Area": "1,736.43 sq.ft",
            "Starting Price": "AED 3,500,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Indoor Cinema", icon: "🎬", color: "#c9a24d" },
        { label: "Game Room", icon: "🎮", color: "#c9a24d" },
        { label: "Yoga Area", icon: "🧘", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Residents Lounge", icon: "🛋️", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "Secure Lobby", icon: "🛡️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🔒", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Parkway by Prestige One",
      address: LOCATION_NAME,
      lat: 25.195,
      lng: 55.308,
      zoom: 15,
      proximityFeatures: [
        { icon: "🏙️", text: "Close to Meydan & Downtown Dubai" },
        { icon: "🚗", text: "Easy access to Sheikh Mohammed Bin Zayed Road" },
        { icon: "🏇", text: "Near Meydan Racecourse" },
      ],
    },

    cta: {
      title: "Secure Your Home in Meydan",
      description:
        "Request full pricing, availability, and official floor plans for Parkway by Prestige One.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "باركواي من بريستيج ون",
      developer: "بريستيج ون للتطوير العقاري",
      location: "بوكدرة، ميدان، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,760,000 درهم",
      completionDate: "الربع الأول 2028",
      paymentPlan: "65% / 35%",
      type: "شقق فاخرة",
      units: "غرفة، غرفتين و3 غرف نوم",
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
            "إجمالي المساحة": "858.85 قدم²",
            "السعر الابتدائي": "1,760,000 درهم",
            "خطة السداد": "65% / 35%",
            "موعد التسليم": "الربع الأول 2028",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,114.17 قدم²",
            "السعر الابتدائي": "2,400,000 درهم",
            "خطة السداد": "65% / 35%",
            "موعد التسليم": "الربع الأول 2028",
          },
          images: [FP_2BR],
        },
        {
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,736.43 قدم²",
            "السعر الابتدائي": "3,500,000 درهم",
            "خطة السداد": "65% / 35%",
            "موعد التسليم": "الربع الأول 2028",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default parkwayData;
