// src/data/properties/apartments/gfs/coventry-twins.js
// ✅ Folder: /gfs/coventry-twins
// ✅ EN + AR
// ✅ 1BR only
// ✅ Exact filenames
// ✅ International City (Warsan First)
// ✅ GFS standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/gfs/coventry-twins";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD GFS SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("coventry-twins-brochure.pdf");
const FLOORPLANS_PDF = cdn("coventry-twins-floorplans.pdf");

const HERO_BG = cdn("2.webp");
const INTRO_MAIN = cdn("4.webp");

const FP_1BR = cdn("Coventry Twins 1br floor plans.webp");

// Gallery
const GALLERY = [
  cdn("1.webp"),
  cdn("3.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("2.webp"),
  cdn("8.webp"),
];

const HANDOVER = "Q3 2027";
const PAYMENT_PLAN = "79% / 21%";

// ======================================================
// DATA
// ======================================================
export const coventryTwinsData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Coventry Twins by GFS | 1BR Apartments in International City Dubai",
      description:
        "Coventry Twins by GFS Developments offers 1-bedroom apartments in International City (Warsan First), starting from AED 833,033 with a 79/21 payment plan and handover in Q3 2027.",
      keywords:
        "Coventry Twins, GFS Developments, International City apartments, off plan Dubai",
      canonical: "/properties/apartments/gfs/coventry-twins",
    },

    project: {
      name: "Coventry Twins",
      developer: "GFS Developments",
      location: "International City (Warsan First), Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 833,033",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "GFS Developments",
      rating: null,
    },

    intro: {
      title: "COVENTRY TWINS — SMART INVESTMENT IN INTERNATIONAL CITY",
      paragraphs: [
        "Coventry Twins by GFS Developments is a modern residential project located in Warsan First, International City, designed for investors seeking high rental yield.",
        `1-bedroom apartments start from AED 833,033 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Coventry Twins by GFS",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 833,033",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "640 sq.ft",
          label: "Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "International City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Coventry Twins",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "640 sq.ft",
            "Starting Price": "AED 833,033",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Modern Architecture", icon: "🏢", color: "#d7b46a" },
        { label: "High Rental Yield", icon: "📈", color: "#d7b46a" },
        { label: "Smart Layouts", icon: "📐", color: "#d7b46a" },
        { label: "Prime Location", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Coventry Twins",
      address: "Warsan First, International City, Dubai, UAE",
      lat: 25.1675055,
      lng: 55.4086404,
      zoom: 15,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Direct access to Sheikh Mohammed Bin Zayed Road.",
        },
        { icon: "🏙️", text: "Minutes from Dubai Silicon Oasis." },
        { icon: "📈", text: "Affordable investment community." },
      ],
    },

    cta: {
      title: "Interested in Coventry Twins?",
      description:
        "Get availability, prices, and official GFS documents directly from our advisors.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "كوفنتري توينز",
      developer: "جي إف إس للتطوير العقاري",
      location: "المدينة العالمية (ورسان الأولى)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "833,033 درهم",
      completionDate: "الربع الثالث 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "جي إف إس للتطوير العقاري",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "غرفة نوم واحدة",
          specs: {
            "إجمالي المساحة": "640 قدم²",
            "السعر الابتدائي": "833,033 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default coventryTwinsData;
