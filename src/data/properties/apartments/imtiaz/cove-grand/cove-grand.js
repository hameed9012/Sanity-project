// src/data/properties/apartments/imtiaz/cove-grand.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 3BR ONLY
// ✅ Bunny CDN filenames EXACT
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/imtiaz/cove-grand";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Cove Grand by Imtiaz-Brochure.pdf");
const FLOORPLAN_PDF = cdn("3 BR Cove Grand Floor Plan.webp");

// Floor plan
const FP_3BR = cdn("3 BR Cove Grand Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("1.jpg"),
  cdn("2.jpg"),
  cdn("3.jpg"),
  cdn("4.jpg"),
  cdn("5.jpg"),
  cdn("6.jpg"),
  cdn("7.jpg"),
  cdn("8.jpg"),
  cdn("9 (3).jpg"),
  cdn("10 (2a).jpg"),
  cdn("11.jpg"),
  cdn("12.jpg"),
  cdn("13.jpg"),
  cdn("14.jpg"),

  cdn("Corridor (1).jpg"),
  cdn("Corridor (2).jpg"),
  cdn("Corridor (3).jpg"),
  cdn("Corridor (4).jpg"),
  cdn("Corridor (5).jpg"),
  cdn("Corridor (6).jpg"),
  cdn("Corridor (7).jpg"),

  cdn("Gym (1).jpg"),
  cdn("Gym (2).jpg"),
  cdn("Gym (4).jpg"),
  cdn("Gym (6).jpg"),
  cdn("Gym (7).jpg"),
  cdn("Gym (8).jpg"),
  cdn("Gym (10).jpg"),

  cdn("Imitiaz_Developments_Bedroom_03_01.jpg"),
  cdn("Imitiaz_Developments_Bedroom_03_02.jpg"),
  cdn("Imitiaz_Developments_Bedroom_03_03.jpg"),
  cdn("Imitiaz_Developments_Bedroom_03_04.jpg"),
  cdn("Imitiaz_Developments_Bedroom_03_05.jpg"),
  cdn("Imitiaz_Developments_Bedroom_03_06.jpg"),
  cdn("Imitiaz_Developments_Bedroom_03_07.jpg"),
  cdn("Imitiaz_Developments_Bedroom_03_08.jpg"),
  cdn("Imitiaz_Developments_Bedroom_03_09.jpg"),
  cdn("Imitiaz_Developments_Bedroom_03_10.jpg"),

  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_1.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_10.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_12.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_13.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_15.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_16.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_17.jpg"),
  cdn("Imitiaz_Developments_Living_Kitchen_04_18.07_18.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q3 2027";
const PAYMENT_PLAN = "50% / 50%";
const LOCATION_NAME = "Dubailand Residence Complex";
const DEVELOPER = "Imtiaz Developments";

// ======================================================
// DATA
// ======================================================
export const coveGrandData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Cove Grand by Imtiaz | 3 Bedroom Apartments in Dubailand",
      description:
        "Cove Grand by Imtiaz offers spacious 3-bedroom apartments in Dubailand Residence Complex. Starting from AED 2.19M with handover Q3 2027.",
      keywords:
        "Cove Grand, Imtiaz Developments, Dubailand apartments, 3 bedroom Dubai",
      canonical: "/properties/apartments/imtiaz/cove-grand",
    },

    project: {
      name: "Cove Grand",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,197,707",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Residential Apartments",
      units: "3 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("4.jpg"),
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "COVE GRAND — ELEVATED LIVING IN DUBAILAND",
      paragraphs: [
        "Cove Grand by Imtiaz Developments is a premium residential project offering spacious 3-bedroom apartments designed for modern family living.",
        "Located in Dubailand Residence Complex, the project combines generous layouts, refined interiors, and resort-style amenities.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Cove Grand Dubailand",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: LOCATION_NAME,
          label: "Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 2.19M",
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
      projectTag: "Cove Grand",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "1,604 sq.ft",
            "Starting Price": "AED 2,197,707",
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
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Residents Lounge", icon: "🛋️", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Landscaped Gardens", icon: "🌿", color: "#c9a24d" },
        { label: "Covered Parking", icon: "🚗", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Cove Grand",
      address: LOCATION_NAME,
      lat: 25.094554,
      lng: 55.375456,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "Direct access to major Dubai highways" },
        { icon: "🏫", text: "Near schools and educational hubs" },
        { icon: "🛍️", text: "Close to retail and lifestyle destinations" },
      ],
    },

    cta: {
      title: "Own a Spacious 3 Bedroom Home",
      description:
        "Request full availability, floor plans, and official pricing for Cove Grand by Imtiaz.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "كوف جراند",
      developer: "إمتياز للتطوير العقاري",
      location: "مجمع دبي لاند السكني",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,197,707 درهم",
      completionDate: "الربع الثالث 2027",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية فاخرة",
      units: "3 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Imtiaz",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,604 قدم²",
            "السعر الابتدائي": "2,197,707 درهم",
            "خطة السداد": "50% / 50%",
            "موعد التسليم": "الربع الثالث 2027",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },
  },
};

export default coveGrandData;
