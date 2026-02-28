// src/data/properties/apartments/gfs/coventry-curve.js
// ✅ Folder: /gfs/coventry-curve
// ✅ EN + AR
// ✅ 1BR only
// ✅ Exact filenames
// ✅ Industrial City
// ✅ GFS standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/gfs/coventry-curve";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD GFS SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Coventry Curve.pdf");
const FLOORPLANS_PDF = cdn("Coventry Curve Floor plan.pdf");

const HERO_BG = cdn("7.webp");
const INTRO_MAIN = cdn("4.webp");

const FP_1BR = cdn("Conventry curve 1br floor plan.webp");

// Gallery (exact order)
const GALLERY = [
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
];

const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "80% / 20%";

// ======================================================
// DATA
// ======================================================
export const coventryCurveData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Coventry Curve by GFS | 1BR Apartments in Dubai Industrial City",
      description:
        "Coventry Curve by GFS Developments offers modern 1-bedroom apartments in Dubai Industrial City, starting from AED 905,864 with an 80/20 payment plan and handover in Q4 2027.",
      keywords:
        "Coventry Curve, GFS Developments, Industrial City apartments, off plan Dubai",
      canonical: "/properties/apartments/gfs/coventry-curve",
    },

    project: {
      name: "Coventry Curve",
      developer: "GFS Developments",
      location: "Dubai Industrial City, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 905,864",
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
      title: "COVENTRY CURVE — SMART LIVING IN INDUSTRIAL CITY",
      paragraphs: [
        "Coventry Curve by GFS Developments is a contemporary residential project located in Dubai Industrial City, offering practical layouts and strong investment potential.",
        `1-bedroom apartments start from AED 905,864 with an ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
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
      imgAlt: "Coventry Curve by GFS",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 905,864",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "698 sq.ft",
          label: "Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Industrial City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Coventry Curve",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "698 sq.ft",
            "Starting Price": "AED 905,864",
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
        { label: "Efficient Layouts", icon: "📐", color: "#d7b46a" },
        { label: "High Rental Yield", icon: "📈", color: "#d7b46a" },
        { label: "Strategic Location", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Coventry Curve",
      address: "Dubai Industrial City, Dubai, UAE",
      lat: 24.8740822,
      lng: 55.0404139,
      zoom: 15,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Direct access to Sheikh Mohammed Bin Zayed Road.",
        },
        { icon: "🏭", text: "Close to major industrial and logistics hubs." },
        { icon: "🏙️", text: "Easy connectivity to Dubai South and Jebel Ali." },
      ],
    },

    cta: {
      title: "Interested in Coventry Curve?",
      description:
        "Request full availability, prices, and official GFS documents directly from our advisors.",
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
      name: "كوفنتري كيرف",
      developer: "جي إف إس للتطوير العقاري",
      location: "مدينة دبي الصناعية",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "905,864 درهم",
      completionDate: "الربع الرابع 2027",
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
            "إجمالي المساحة": "698 قدم²",
            "السعر الابتدائي": "905,864 درهم",
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

export default coventryCurveData;
