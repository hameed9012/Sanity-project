// src/data/properties/apartments/samana/rome.js
// ✅ Folder: /samana/rome
// ✅ EN + AR
// ✅ 1BR / 2BR
// ✅ Mohammed Bin Rashid City
// ✅ Exact Bunny filenames
// ✅ Samana blueprint locked

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/rome";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// Developer square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Rome by Samana Developers.pdf");
const FLOORPLANS_PDF = cdn("Rome by Samana Developers Floorplans.pdf");

const FP_1BR = cdn("Rome by Samana 1br floor plan.webp");
const FP_2BR = cdn("Rome by samana 2br floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("12.webp"),
  cdn("32.webp"),
];

// ================= CONSTANTS =================
const PAYMENT_PLAN = "95% / 5%";
const HANDOVER = "Q2 2028";

// ======================================================
// DATA
// ======================================================
export const samanaRomeData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Rome by Samana | Luxury Apartments in MBR City",
      description:
        "Rome by Samana offers luxury 1 and 2 bedroom apartments in Mohammed Bin Rashid City. Starting from AED 2.11M with a 95/5 payment plan and handover in Q2 2028.",
      keywords:
        "Rome by Samana, Samana Rome Dubai, MBR City apartments, Samana Developers",
      canonical: "/properties/apartments/samana/rome",
    },

    project: {
      name: "Rome",
      developer: "Samana Developers",
      location: "Mohammed Bin Rashid City, Dubai",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,114,210",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
    },

    intro: {
      title: "ROME — ITALIAN-INSPIRED LIVING BY SAMANA",
      paragraphs: [
        "Rome by Samana is a refined residential development located in Mohammed Bin Rashid City, inspired by Italian elegance and modern architectural excellence.",
        `Apartments are available in 1 and 2 bedroom layouts starting from AED 2,114,210 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Rome by Samana",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🇮🇹",
          value: "Italian Design",
          label: "Inspired Architecture",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 2.11M",
          label: "Starting Price",
        },
        {
          bottom: "14%",
          right: "-20px",
          icon: "📍",
          value: "MBR City",
          label: "Prime Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Rome",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "941.79 sq.ft",
            "Starting Price": "AED 2,114,210",
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
            "Total Area": "1,198.39 sq.ft",
            "Starting Price": "AED 2,683,157",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Resort-Style Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fitness Center", icon: "🏋️", color: "#c9a24d" },
        { label: "Spa & Wellness", icon: "🧖", color: "#c9a24d" },
        { label: "Landscaped Gardens", icon: "🌿", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Rome by Samana",
      address: "Mohammed Bin Rashid City, Dubai",
      lat: 25.1290833,
      lng: 55.3558333,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "Located in Mohammed Bin Rashid City." },
        { icon: "🚗", text: "Minutes from Downtown Dubai and DIFC." },
        { icon: "🛣️", text: "Easy access to major highways." },
      ],
    },

    cta: {
      title: "Own an Apartment at Rome by Samana",
      description:
        "Request availability, prices, and official Samana documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "روما",
      developer: "سمانا للتطوير العقاري",
      location: "مدينة محمد بن راشد",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,114,210 درهم",
      completionDate: "الربع الثاني 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية فاخرة",
      units: "غرفة نوم واحدة وغرفتين",
    },

    hero: {
      backgroundUrl: GALLERY[0],
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
            "إجمالي المساحة": "941.79 قدم²",
            "السعر الابتدائي": "2,114,210 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,198.39 قدم²",
            "السعر الابتدائي": "2,683,157 درهم",
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

export default samanaRomeData;
