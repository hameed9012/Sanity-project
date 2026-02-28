// src/data/properties/apartments/samana/skyviews.js
// ✅ Folder: /samana/skyviews
// ✅ EN + AR
// ✅ 2 Bedroom ONLY
// ✅ Dubai Production City
// ✅ Exact Bunny filenames used
// ✅ Samana standard blueprint

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/skyviews";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// Samana square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Skyview Brochure.pdf");
const FACTSHEET_PDF = cdn("Samana Sky View Factsheet.pdf");
const FLOORPLANS_PDF = cdn("Sykview Floor plan.pdf");
const PAYMENT_PLAN_PDF = cdn("SAMANA SKY VIEWS PAYMENT PLAN.pdf");

const VIDEO = cdn("SD_Sky views_Launch film - Landscape.mp4");

const PAYMENT_PLAN = "80% / 20%";
const HANDOVER = "Q4 2028";

// Floor plan
const FP_2BR = cdn("Samana Sky Views 2br floor plan.webp");

// ================= GALLERY (JPG ONLY) =================
const GALLERY = [
  cdn("LightsOn.jpg"),
  cdn("Podium.jpg"),
  cdn("Pool.jpg"),
  cdn("rainlight .jpg"),
  cdn("Lobby 1.jpg"),
  cdn("Lobby 2.jpg"),
  cdn("Lobby 3.jpg"),
  cdn("Lobby 4.jpg"),
  cdn("Lobby 5.jpg"),
  cdn("Lobby 6.jpg"),
  cdn("living (1).jpg"),
  cdn("living (2).jpg"),
  cdn("living (3).jpg"),
  cdn("living (4).jpg"),
  cdn("living (5).jpg"),
  cdn("living (6).jpg"),
  cdn("Bedroom (1).jpg"),
  cdn("Bedroom (2).jpg"),
  cdn("Bedroom (3).jpg"),
  cdn("Bedroom (4).jpg"),
  cdn("Bedroom (5).jpg"),
  cdn("Bedroom (6).jpg"),
  cdn("Bathroom (1).jpg"),
  cdn("Bathroom (2).jpg"),
  cdn("Bathroom (3).jpg"),
  cdn("GYM1.jpg"),
  cdn("GYM2.jpg"),
  cdn("GYM3.jpg"),
  cdn("GYM4.jpg"),
  cdn("GYM5.jpg"),
  cdn("GYM6.jpg"),
  cdn("Spa (1).jpg"),
  cdn("Spa (2).jpg"),
  cdn("Spa (3).jpg"),
  cdn("Spa (4).jpg"),
  cdn("Spa (5).jpg"),
  cdn("Spa (6).jpg"),
  cdn("Spa (7).jpg"),
  cdn("Spa (8).jpg"),
  cdn("Spa (9).jpg"),
  cdn("Spa (10).jpg"),
  cdn("Spa (11).jpg"),
  cdn("yoga.jpg"),
  cdn("kids (1).jpg"),
  cdn("kids (2).jpg"),
  cdn("kids (3).jpg"),
];

// ======================================================
// DATA
// ======================================================
export const samanaSkyViewsData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Samana Sky Views | 2 Bedroom Apartments in Dubai Production City",
      description:
        "Samana Sky Views offers spacious 2-bedroom apartments in Dubai Production City. Starting from AED 1,613,333 with an 80/20 payment plan and handover in Q4 2028.",
      keywords:
        "Samana Sky Views, Dubai Production City apartments, Samana Developers",
      canonical: "/properties/apartments/samana/skyviews",
    },

    project: {
      name: "Samana Sky Views",
      developer: "Samana Developers",
      location: "Dubai Production City, Dubai",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,613,333",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "SAMANA SKY VIEWS — ELEVATED LIVING",
      paragraphs: [
        "Samana Sky Views is a premium residential project designed for luxury living in Dubai Production City.",
        `Spacious 2-bedroom apartments start from AED 1,613,333 with an ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[4],
      imgAlt: "Samana Sky Views",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1.61M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,096 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Dubai Production City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Sky Views",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,096 sq.ft",
            "Starting Price": "AED 1,613,333",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Infinity Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Spa & Wellness", icon: "🧖", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Yoga Zone", icon: "🧘", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧒", color: "#c9a24d" },
        { label: "Golf & Leisure", icon: "⛳", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Sky Views",
      address: "Dubai Production City, Dubai",
      lat: 25.0398261,
      lng: 55.1906803,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Direct access to Sheikh Mohammed Bin Zayed Road.",
        },
        { icon: "🏙️", text: "Close to JVC, Motor City & Sports City." },
        {
          icon: "✈️",
          text: "Easy access to Al Maktoum International Airport.",
        },
      ],
    },

    cta: {
      title: "Invest in Samana Sky Views",
      description:
        "Request availability, pricing, and official Samana documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Payment Plan", action: "download-payment-plan" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "سمانا سكاي فيوز",
      developer: "سمانا للتطوير العقاري",
      location: "مدينة دبي للإنتاج",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,613,333 درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفتين نوم",
    },

    hero: {
      backgroundUrl: VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سمانا",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,096 قدم²",
            "السعر الابتدائي": "1,613,333 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default samanaSkyViewsData;
