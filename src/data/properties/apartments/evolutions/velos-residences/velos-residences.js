// src/data/properties/apartments/evolutions/velos-residence.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ Studio / 1BR / 2BR
// ✅ Exact Bunny filenames ONLY
// ✅ CityView Developments
// ✅ Dubai Motor City
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/evolutions/velos-residence";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL = "/evolutions.jpg";

// ================= FILES =================
const BROCHURE_PDF = cdn("ENGLISH_Velos Brochure.pdf");
const FACTSHEET_PDF = cdn("Velos Factsheet.pdf");
const PAYMENT_PLAN_PDF = cdn("Velos Payment Plan.pdf");
const FLOORPLANS_PDF = cdn("Velos Individual Units Floor Plans.pdf");
const LAUNCH_VIDEO = cdn("Velos Launch Film.mp4");

// Floor plans
const FP_STUDIO = cdn("Studio Velos Residence Floor Plan.webp");
const FP_1BR = cdn("1 BR Velos Residence Floor Plan.webp");
const FP_2BR = cdn("2 BR Velos Residence Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("mth_mrgt_mc_view 01_a03.jpg"),
  cdn("mth_mrgt_mc_view 02_a03.jpg"),
  cdn("mth_mrgt_mc_View 03_a03.jpg"),
  cdn("mth_mrgt_mc_view 04_a03.jpg"),
  cdn("mth_mrgt_mc_View 05_a02.jpg"),
  cdn("mth_mrgt_mc_View 06_a03.jpg"),
  cdn("mth_mrgt_mc_View 07_a04.jpg"),
  cdn("mth_mrgt_mc_view 08_a03.jpg"),
  cdn("mth_mrgt_mc_view 09_a02.jpg"),
  cdn("mth_mrgt_mc_view 10_a02.jpg"),
  cdn("mth_mrgt_mc_view 11_a02.jpg"),
  cdn("mth_mrgt_mc_View 12_a04.jpg"),
  cdn("mth_mrgt_mc_view 13_a02.jpg"),
  cdn("mth_mrgt_mc_view 14_a02.jpg"),
  cdn("mth_mrgt_mc_view 15_a02.jpg"),
  cdn("mth_mrgt_mc_View 16_a01.jpg"),
  cdn("mth_mrgt_mc_View 17_a03.jpg"),
  cdn("mth_mrgt_mc_View 18_a02.jpg"),
  cdn("mth_mrgt_mc_view 19_a01.jpg"),
  cdn("mth_mrgt_mc_View 20_a02.jpg"),
  cdn("mth_mrgt_mc_View 21_a02.jpg"),
  cdn("mth_mrgt_mc_view 22_a02.jpg"),
  cdn("mth_mrgt_mc_View 23_a02.jpg"),
  cdn("mth_mrgt_mc_View 24_a02.jpg"),
  cdn("mth_mrgt_mc_View 25_a03.jpg"),
  cdn("mth_mrgt_mc_View 26_a02.jpg"),
  cdn("mth_mrgt_mc_View 27_a02.jpg"),
  cdn("mth_mrgt_mc_View 28_a02.jpg"),
  cdn("mth_mrgt_mc_View 29_a03.jpg"),
  cdn("mth_mrgt_mc_View 31_a03.jpg"),
  cdn("mth_mrgt_mc_View 32_a02.jpg"),
  cdn("mth_mrgt_mc_View 33_a01.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2028";
const PAYMENT_PLAN = "35% / 65%";
const LOCATION_NAME = "Dubai Motor City";
const DEVELOPER = "CityView Developments";

// ======================================================
// DATA
// ======================================================
export const velosResidenceData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Velos Residence by CityView | Apartments in Motor City Dubai",
      description:
        "Velos Residence by CityView Developments offers studios, 1 & 2 bedroom apartments in Dubai Motor City. Starting from AED 825,777 with handover in Q2 2028.",
      keywords:
        "Velos Residence, CityView Developments, Motor City apartments Dubai",
      canonical: "/properties/apartments/evolutions/velos-residence",
    },

    project: {
      name: "Velos Residence",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 825,777",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
      videoUrl: LAUNCH_VIDEO,
    },

    intro: {
      title: "VELOS RESIDENCE — MODERN LIVING IN MOTOR CITY",
      paragraphs: [
        "Velos Residence is a contemporary residential project by CityView Developments, located in the heart of Dubai Motor City.",
        "Designed for modern lifestyles, the project offers thoughtfully planned apartments with premium finishes and excellent connectivity.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Velos Residence Motor City",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: LOCATION_NAME,
          label: "Prime Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 825K",
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
      projectTag: "Velos",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "345 sq.ft",
            "Starting Price": "AED 825,777",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "712 sq.ft",
            "Starting Price": "AED 1,258,777",
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
            "Total Area": "991 sq.ft",
            "Starting Price": "AED 1,973,777",
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
        { label: "Fitness Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Lobby & Reception", icon: "🏛️", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Velos Residence",
      address: LOCATION_NAME,
      lat: 25.0512989,
      lng: 55.2484132,
      zoom: 12,
      proximityFeatures: [
        { icon: "🏎️", text: "Located in Dubai Motor City" },
        { icon: "🚗", text: "Easy access to major highways" },
        { icon: "🛍️", text: "Close to retail & lifestyle hubs" },
      ],
    },

    cta: {
      title: "Invest in Velos Residence",
      description:
        "Request updated pricing, availability, and official CityView documents.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "فيلوس ريزيدنس",
      developer: "سيتي فيو للتطوير العقاري",
      location: "دبي موتور سيتي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "825,777 درهم",
      completionDate: "الربع الثاني 2028",
      paymentPlan: "35% / 65%",
      type: "شقق سكنية",
      units: "استوديو، غرفة، غرفتين نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "CityView",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "345 قدم²",
            "السعر الابتدائي": "825,777 درهم",
            "خطة السداد": "35% / 65%",
            "موعد التسليم": "الربع الثاني 2028",
          },
          images: [FP_STUDIO],
        },
        {
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "712 قدم²",
            "السعر الابتدائي": "1,258,777 درهم",
            "خطة السداد": "35% / 65%",
            "موعد التسليم": "الربع الثاني 2028",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "991 قدم²",
            "السعر الابتدائي": "1,973,777 درهم",
            "خطة السداد": "35% / 65%",
            "موعد التسليم": "الربع الثاني 2028",
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default velosResidenceData;
