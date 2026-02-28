// src/data/properties/apartments/samana/ocean-bay.js
// ✅ Folder: /samana/ocean-bay
// ✅ EN + AR
// ✅ 1BR / 2BR / 3BR / 4BR
// ✅ Exact Bunny filenames only
// ✅ Dubai Islands (Nakhlat Deira)
// ✅ Samana standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/ocean-bay";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD SAMANA SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("OCEAN BAY BROCHURE - HIGH RES.pdf");
const FACTSHEET_PDF = cdn("Samana Ocean Bay Factsheet.pdf");
const FLOORPLANS_PDF = cdn("SAMANA OCEAN BAY FLOOR PLAN.pdf");
const PAYMENT_PLAN_PDF = cdn("SAMANA OCEAN BAY PAYMENT PLAN.pdf");

const PAYMENT_PLAN = "30% / 70%";
const HANDOVER = "Q4 2028";

// Hero / Media
const HERO_BG = cdn("Ocean Bay Launch Video - Landscape.mp4");
const INTRO_MAIN = cdn("RARE.7437 - OCEAN PEARL 3_C02 (01)_Rev01.jpeg");

// Floor plans
const FP_1BR = cdn("Samana Ocean Bay 1br floor plan.webp");
const FP_2BR = cdn("Samana Ocean Bay 2br floor plan.webp");
const FP_3BR = cdn("Samana Ocean Bay 3br floor plan.webp");
const FP_4BR = cdn("Samana Ocean Bay 4br floor plan.webp");

// ================= GALLERY (VERIFIED FILES ONLY) =================
const GALLERY = [
  cdn("RARE.7437 - OCEAN PEARL 3_C01 Street 03_Rev01.jpeg"),
  cdn("RARE.7437 - OCEAN PEARL 3_C02 (02)_Rev01.jpeg"),
  cdn("RARE.7437 - OCEAN PEARL 3_C03_Rev01.jpeg"),
  cdn("RARE.7437 - OCEAN PEARL 3_C04_Rev01.jpeg"),
  cdn("RARE.7437 - OCEAN PEARL 3_C05_Rev01.jpeg"),
  cdn("RARE.7437 - OCEAN PEARL 3_C06_Rev01.jpeg"),
  cdn("RARE.7437 - OCEAN PEARL 3_C07_Rev01.jpeg"),
  cdn("RARE.7437 - OCEAN PEARL 3_C13_Rev01.jpeg"),
  cdn("250623_RR7399 OCEAN PEARL 3_C01 warm mood.jpg"),
  cdn("250623_RR7399 OCEAN PEARL 3_C02 warm mood.jpg"),
  cdn("250623_RR7399 OCEAN PEARL 3_C032 warm mood.jpg"),
  cdn("250623_RR7399 OCEAN PEARL 3_C03.jpg"),
  cdn("250623_RR7399 OCEAN PEARL 3_C05.jpg"),
  cdn("250623_RR7399 OCEAN PEARL 3_C06.jpg"),
  cdn("25023_Ocean Pearl 03_C11 balcony(02).jpg"),
  cdn("250623_Ocean Pearl 03_C11 balcony(01).jpg"),
  cdn("Living room -View_03.png"),
  cdn("Living room -View_04.png"),
  cdn("Living room -View_05.png"),
  cdn("Living room -02.png"),
  cdn("Kitchen view-01.png"),
  cdn("Bedroom_View_01.png"),
  cdn("Bedroom_View_02.png"),
  cdn("Bathroom View-01.png"),
  cdn("Gym-View-01.png"),
  cdn("Gym-View-02.png"),
];

// ======================================================
// DATA
// ======================================================
export const oceanBayData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Samana Ocean Bay | 1–4 Bedroom Waterfront Apartments in Dubai Islands",
      description:
        "Samana Ocean Bay offers 1 to 4 bedroom waterfront apartments in Dubai Islands. Starting from AED 2,289,208 with a 30/70 payment plan and handover in Q4 2028.",
      keywords:
        "Samana Ocean Bay, Dubai Islands apartments, Nakhlat Deira, waterfront apartments Dubai",
      canonical: "/properties/apartments/samana/ocean-bay",
    },

    project: {
      name: "Samana Ocean Bay",
      developer: "Samana Developers",
      location: "Dubai Islands (Nakhlat Deira), Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,289,208",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Waterfront Apartments",
      units: "1, 2, 3 & 4 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
      videoUrl: HERO_BG,
    },

    intro: {
      title: "SAMANA OCEAN BAY — WATERFRONT LIVING AT DUBAI ISLANDS",
      paragraphs: [
        "Samana Ocean Bay is a premium waterfront residential development located at Dubai Islands, offering uninterrupted sea views and resort-style living.",
        `Apartments range from 1 to 4 bedrooms starting from AED 2.28M with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Samana Ocean Bay Dubai Islands",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2.28M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "830 – 2,239 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Dubai Islands",
          label: "Waterfront",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Ocean Bay",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "830.54 sq.ft",
            "Starting Price": "AED 2,289,208",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,212.88 sq.ft",
            "Starting Price": "AED 3,366,684",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1,553.02 sq.ft",
            "Starting Price": "AED 4,108,515",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "2,239.11 sq.ft",
            "Starting Price": "AED 5,413,333",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Infinity Pools", icon: "🏊", color: "#c9a24d" },
        { label: "Private Beach Access", icon: "🏝️", color: "#c9a24d" },
        { label: "Gym & Wellness", icon: "🏋️", color: "#c9a24d" },
        { label: "Sea View Residences", icon: "🌊", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Ocean Bay",
      address: "Dubai Islands (Nakhlat Deira), Dubai, UAE",
      lat: 25.2985641,
      lng: 55.3122779,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚗", text: "Direct access to mainland Dubai." },
        { icon: "🏙️", text: "Minutes from Deira and Downtown." },
        { icon: "✈️", text: "Easy access to Dubai International Airport." },
      ],
    },

    cta: {
      title: "Invest in Samana Ocean Bay",
      description:
        "Request pricing, availability, and official Samana documents today.",
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
      name: "سمانا أوشن باي",
      developer: "سمانا للتطوير العقاري",
      location: "جزر دبي (نخلة ديرة)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,289,208 درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق واجهة بحرية",
      units: "غرفة إلى أربع غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سمانا",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "غرفة نوم واحدة",
          specs: {
            "إجمالي المساحة": "830.54 قدم²",
            "السعر الابتدائي": "2,289,208 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,212.88 قدم²",
            "السعر الابتدائي": "3,366,684 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          title: "ثلاث غرف نوم",
          specs: {
            "إجمالي المساحة": "1,553.02 قدم²",
            "السعر الابتدائي": "4,108,515 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
        },
        {
          title: "أربع غرف نوم",
          specs: {
            "إجمالي المساحة": "2,239.11 قدم²",
            "السعر الابتدائي": "5,413,333 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default oceanBayData;
