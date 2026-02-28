// src/data/properties/apartments/azizi/azizi-grand.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 2BR
// ✅ Bunny CDN filenames EXACT
// ✅ Azizi Developments
// ✅ Dubai Sports City
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/azizi-grand";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg";

// ================= FILES =================
const FACTSHEET_PDF = cdn("Azizi Grand Factsheet.pdf");
const BROCHURE_PDF = cdn("Azizi Grand Brochure.pdf");

// Floor Plans
const FP_2BR = cdn("Azizi Grand 2br floor plan.webp");

// ================= GALLERY (IMAGES ONLY) =================
const GALLERY = [
  cdn("Sport City_Facade Night_2K.jpg"),
  cdn("Sport City_Balcony View_2K.jpg"),
  cdn("Grand View 1.jpg"),
  cdn("Grand View 2.jpg"),
  cdn("Grand View 3.jpg"),
  cdn("Grand View 4.jpg"),
  cdn("Top View.jpg"),
  cdn("Grand Reception Top View.jpg"),
  cdn("Living.jpg"),
  cdn("Bedroom.jpg"),
  cdn("Kitchen.jpg"),
  cdn("Bathroom.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q1 2026";
const PAYMENT_PLAN = "40% / 60%";
const LOCATION_NAME = "Dubai Sports City";
const DEVELOPER = "Azizi Developments";

// ======================================================
// DATA
// ======================================================
export const aziziGrandData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Azizi Grand Apartments for Sale in Dubai Sports City | Azizi Developments",
      description:
        "Azizi Grand offers spacious 2-bedroom apartments in Dubai Sports City. Starting from AED 1.6M with handover in Q1 2026.",
      keywords:
        "Azizi Grand, Azizi Developments, Dubai Sports City apartments, Azizi off plan",
      canonical: "/properties/apartments/azizi/azizi-grand",
    },

    project: {
      name: "Azizi Grand",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,605,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "2 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "AZIZI GRAND — CONTEMPORARY LIVING IN DUBAI SPORTS CITY",
      paragraphs: [
        "Azizi Grand is a modern residential development by Azizi Developments, located in the vibrant Dubai Sports City community.",
        "The project features spacious layouts, contemporary architecture, and excellent connectivity, making it ideal for both end users and investors.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        { title: "Download Brochure", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Azizi Grand Dubai Sports City",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: LOCATION_NAME,
          label: "Prime Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 1.6M",
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
      projectTag: "Azizi Grand",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,156.27 sq.ft",
            "Starting Price": "AED 1,605,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "Retail Outlets", icon: "🛍️", color: "#c9a24d" },
        { label: "Covered Parking", icon: "🚗", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Grand",
      address: LOCATION_NAME,
      lat: 25.0386827,
      lng: 55.2035727,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏟️", text: "Located in Dubai Sports City" },
        { icon: "🚗", text: "Easy access to Sheikh Mohammed Bin Zayed Road" },
        { icon: "🏫", text: "Close to schools, retail & leisure destinations" },
      ],
    },

    cta: {
      title: "Own a Spacious Apartment in Dubai Sports City",
      description:
        "Get full availability, floor plans, and official Azizi pricing for Azizi Grand.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "عزيزي جراند",
      developer: "عزيزي للتطوير العقاري",
      location: "مدينة دبي الرياضية",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,605,000 درهم",
      completionDate: "الربع الأول 2026",
      paymentPlan: "40% / 60%",
      type: "شقق سكنية",
      units: "شقق غرفتين نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Azizi",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,156.27 قدم²",
            "السعر الابتدائي": "1,605,000 درهم",
            "خطة السداد": "40% / 60%",
            "موعد التسليم": "الربع الأول 2026",
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },
  },
};

export default aziziGrandData;
