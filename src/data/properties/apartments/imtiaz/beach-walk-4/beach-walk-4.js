// src/data/properties/apartments/imtiaz/beach-walk-4.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR / 2BR / 3BR
// ✅ Bunny CDN filenames EXACT
// ✅ Imtiaz Developments
// ✅ Dubai Islands
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/imtiaz/beach-walk-4";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png";

// ================= FILES =================
const FACTSHEET_PDF = cdn("BeachWalk 4 by Imtiaz - Fact Sheet.pdf");
const PAYMENT_PLAN_PDF = cdn("Beachwalk 4 by Imtiaz - Payment plan.pdf");
const FLOORPLANS_PDF = cdn("IMTIAZ_Beachwalk 4- Floorplan.pdf");

// Floor Plans
const FP_1BR = cdn("1 BR Beach Walk 4 Floor Plan.webp");
const FP_2BR = cdn("2 BR Beach Walk 4 Floor Plan.webp");
const FP_3BR = cdn("3 BR Beach Walk 4 Floor Plan.webp");

// ================= GALLERY (ALL IMAGES) =================
const GALLERY = [
  cdn("1.jpg"),
  cdn("2.jpg"),
  cdn("3.jpg"),
  cdn("4.jpg"),
  cdn("5.jpg"),
  cdn("6.jpg"),
  cdn("7.jpg"),
  cdn("8.jpg"),

  cdn("Lobby-1.jpg"),
  cdn("Lobby-3.jpg"),
  cdn("Lobby-8.jpg"),

  cdn("Lift-1.jpg"),
  cdn("Lift-2.jpg"),
  cdn("Corridor-3.jpg"),

  cdn("Club_A.jpg"),
  cdn("Club_B.jpg"),
  cdn("Club_C.jpg"),
  cdn("Club_D.jpg"),

  cdn("Gym_C01.jpg"),
  cdn("Gym_C02.jpg"),
  cdn("Gym_C03.jpg"),
  cdn("Gym_C04.jpg"),
  cdn("Gym_C05.jpg"),

  cdn("1BHK Kitchen High-Resolution.jpg"),
  cdn("1bhk bathroom-C01.jpg"),
  cdn("1bhk bathroom-C02.jpg"),
  cdn("1bhk_wardrobe_C1.jpg"),
  cdn("1bhk_wardrobe_C2.jpg"),

  cdn("c01-0704.jpg"),
  cdn("c02-0704.jpg"),

  cdn("MASTERPLAN.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2027";
const PAYMENT_PLAN = "60% / 40%";
const LOCATION_NAME = "Dubai Islands";
const DEVELOPER = "Imtiaz Developments";

// ======================================================
// DATA
// ======================================================
export const beachWalk4Data = {
  // ================= EN =================
  en: {
    seo: {
      title: "Beach Walk 4 by Imtiaz | Apartments for Sale in Dubai Islands",
      description:
        "Beach Walk 4 by Imtiaz offers 1, 2 & 3 bedroom beachfront apartments in Dubai Islands. Starting from AED 2.37M with handover Q2 2027.",
      keywords:
        "Beach Walk 4, Imtiaz Developments, Dubai Islands apartments, beachfront living",
      canonical: "/properties/apartments/imtiaz/beach-walk-4",
    },

    project: {
      name: "Beach Walk 4",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,376,030",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Beachfront Apartments",
      units: "1, 2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "BEACH WALK 4 — ELEVATED COASTAL LIVING",
      paragraphs: [
        "Beach Walk 4 by Imtiaz Developments is a premium residential project located on Dubai Islands, offering uninterrupted coastal living.",
        "Designed with refined interiors, resort-style amenities, and spacious layouts, the project is ideal for end-users and investors alike.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Beach Walk 4 Dubai Islands",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Beachfront",
          label: "Dubai Islands",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 2.37M",
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
      projectTag: "Beach Walk 4",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "776.08 sq.ft",
            "Starting Price": "AED 2,376,030",
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
            "Total Area": "1,305.24 sq.ft",
            "Starting Price": "AED 3,508,936",
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
            "Total Area": "1,790.57 sq.ft",
            "Starting Price": "AED 5,336,218",
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
        { label: "Beach Access", icon: "🏖️", color: "#c9a24d" },
        { label: "Infinity Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Club Lounge", icon: "🛋️", color: "#c9a24d" },
        { label: "Fitness Center", icon: "🏋️", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Concierge", icon: "🛎️", color: "#c9a24d" },
        { label: "Covered Parking", icon: "🚗", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Beach Walk 4",
      address: LOCATION_NAME,
      lat: 25.2998947,
      lng: 55.296981,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "Direct access to Dubai Islands beaches" },
        { icon: "🚗", text: "Easy connectivity to mainland Dubai" },
        { icon: "🏙️", text: "Minutes from retail & leisure destinations" },
      ],
    },

    cta: {
      title: "Secure Your Beachfront Home",
      description:
        "Get full availability, floor plans, and official Imtiaz pricing for Beach Walk 4.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "بيتش ووك 4",
      developer: "إمتياز للتطوير العقاري",
      location: "جزر دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,376,030 درهم",
      completionDate: "الربع الثاني 2027",
      paymentPlan: "60% / 40%",
      type: "شقق مطلة على البحر",
      units: "غرفة، غرفتين و3 غرف نوم",
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
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "776.08 قدم²",
            "السعر الابتدائي": "2,376,030 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الثاني 2027",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,305.24 قدم²",
            "السعر الابتدائي": "3,508,936 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الثاني 2027",
          },
          images: [FP_2BR],
        },
        {
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,790.57 قدم²",
            "السعر الابتدائي": "5,336,218 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الثاني 2027",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default beachWalk4Data;
