// src/data/properties/apartments/gfs/coventry-gardens-2.js
// ✅ Folder: /gfs/coventry-gardens-2
// ✅ EN + AR
// ✅ Off-plan
// ✅ 1BR
// ✅ Exact filenames (ignores .DS_Store)
// ✅ DLRC location
// ✅ Square image confirmed

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/gfs/coventry-gardens-2";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ CONFIRMED SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Coventry Gardens 2.pdf");
const FLOORPLANS_PDF = cdn("Coventry Gardens 2 FloorPlans.pdf");

const HERO_BG = cdn("5.webp");
const INTRO_MAIN = cdn("4.webp");

const FP_1BR = cdn("Coventry gardens 2 1br floor plan.webp");

// Gallery (1–7.webp)
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
];

const HANDOVER = "Q3 2027";
const PAYMENT_PLAN = "90% / 10%";

// ======================================================
// DATA
// ======================================================
export const coventryGardens2Data = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Coventry Gardens 2 by GFS | 1BR Apartments in DLRC | From AED 1,100,000",
      description:
        "Coventry Gardens 2 by GFS Developments offers modern 1-bedroom apartments in Dubai Land Residence Complex (DLRC), starting from AED 1,100,000 with a 90/10 payment plan and handover in Q3 2027.",
      keywords:
        "Coventry Gardens 2, GFS Developments, DLRC apartments, off plan Dubai",
      canonical: "/properties/apartments/gfs/coventry-gardens-2",
    },

    project: {
      name: "Coventry Gardens 2",
      developer: "GFS Developments",
      location: "Dubai Land Residence Complex (DLRC), Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,100,000",
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
      title: "COVENTRY GARDENS 2 — MODERN LIVING IN DLRC",
      paragraphs: [
        "Coventry Gardens 2 by GFS Developments is a contemporary residential project in Dubai Land Residence Complex, designed for comfortable living and long-term investment value.",
        `1-bedroom apartments start from AED 1,100,000 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
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
      imgAlt: "Coventry Gardens 2 by GFS",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,100,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "770 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "DLRC",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Coventry Gardens 2",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "770 sq.ft",
            "Starting Price": "AED 1,100,000",
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
        { label: "Smart Layouts", icon: "📐", color: "#d7b46a" },
        { label: "Investor Friendly", icon: "📈", color: "#d7b46a" },
        { label: "DLRC Location", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Coventry Gardens 2",
      address: "Coventry Gardens 2, Dubai Land Residence Complex (DLRC), Dubai",
      lat: 25.0950618,
      lng: 55.3790747,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "Direct access to major highways." },
        { icon: "🏙️", text: "Located in DLRC community." },
        { icon: "🛍️", text: "Near daily lifestyle amenities." },
      ],
    },

    cta: {
      title: "Interested in Coventry Gardens 2?",
      description:
        "Submit your details to receive availability, pricing, and official GFS documents.",
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
      name: "كوفنتري جاردنز 2",
      developer: "جي إف إس للتطوير العقاري",
      location: "دبي لاند ريزيدنس كومبلكس، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,100,000 درهم",
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
            "إجمالي المساحة": "770 قدم²",
            "السعر الابتدائي": "1,100,000 درهم",
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

export default coventryGardens2Data;
