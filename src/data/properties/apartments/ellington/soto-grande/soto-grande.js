// src/data/properties/apartments/ellington/soto-grande.js
// ✅ Folder: /ellington/soto-grande
// ✅ EN + AR
// ✅ 1BR + 2BR + 3BR
// ✅ Exact Bunny filenames only
// ✅ Al Jazeera Al Hamra
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/soto-grande";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Soto Grande - Brochure.pdf");
const FLOORPLANS_PDF = cdn("Soto Grande - Floor Plan.pdf");
const PAYMENT_PLAN_PDF = cdn("Soto Grande - Payment Plan.pdf");

const HERO_BG = cdn("Soto Grande - hero shot 1.jpg");
const INTRO_MAIN = cdn("Soto Grande - hero shot 2.jpg");
const VIDEO = cdn("Soto Grande - concept video - square.mp4");

const FP_1BR = cdn("Soto grande 1br floor plan.webp");
const FP_2BR = cdn("Soto grande 2br floor plan.webp");
const FP_3BR = cdn("Soto grande 3br floor plan.webp");

// ⚠️ ONLY VERIFIED BUNNY FILES
const GALLERY = [
  cdn("Soto Grande - aerial view.jpg"),
  cdn("Soto Grande - hero shot 3.jpg"),
  cdn("Soto Grande - lagoon view.jpg"),
  cdn("Soto Grande- Beach view.jpg"),
  cdn("Soto Grande- balcony view.jpg"),
  cdn("Soto Grande- lobby lounge.jpg"),
  cdn("Soto Grande- club lounge.jpg"),
  cdn("Soto Grande- games room.jpg"),
  cdn("Soto Grande - fitness studio.jpeg"),
  cdn("Soto Grande- yoga studio.jpeg"),
  cdn("Soto Grande - Upper level pool.jpg"),
  cdn("Soto Grande - Upper level pool 2.jpg"),
  cdn("Soto Grande - Sky Bridge.jpg"),
  cdn("Soto Grande - courtyard.jpg"),
  cdn("Soto Grande - private dining and kitchen.jpg"),
  cdn("Soto Grande- kitchen.jpg"),
  cdn("Soto Grande- living area.jpg"),
  cdn("Soto Grande- premium bedroom.jpeg"),
  cdn("Soto Grande- typical bedroom.jpg"),
  cdn("Soto Grande - bathroom.jpg"),
  cdn("Soto Grande- wardrobe.jpeg"),
  cdn("Soto Grande- kids play area.jpeg"),
];

const HANDOVER = "Q4 2029";
const PAYMENT_PLAN = "70% / 30%";

// ======================================================
// DATA
// ======================================================
export const sotoGrandeData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Soto Grande by Ellington | Lagoon Living at Al Jazeera Al Hamra",
      description:
        "Soto Grande by Ellington offers lagoon-facing 1, 2 & 3 bedroom residences at Al Jazeera Al Hamra. Starting from AED 1,797,828 with a 70/30 payment plan and handover in Q4 2029.",
      keywords:
        "Soto Grande, Ellington Properties, Al Jazeera Al Hamra, lagoon apartments UAE",
      canonical: "/properties/apartments/ellington/soto-grande",
    },

    project: {
      name: "Soto Grande",
      developer: "Ellington Properties",
      location: "Al Jazeera Al Hamra, Ras Al Khaimah, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,797,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Lagoon Residences",
      units: "1, 2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "SOTO GRANDE — LAGOON-CENTRIC LIVING",
      paragraphs: [
        "Soto Grande by Ellington is a refined waterfront residential destination at Al Jazeera Al Hamra, combining lagoon views, architectural elegance, and resort-inspired amenities.",
        `Residences range from 1 to 3 bedrooms starting from AED 1,797,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        {
          title: "Payment Plan",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Soto Grande by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1.79M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "808 – 1,744 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Lagoon Living",
          label: "Waterfront Community",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Soto Grande",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "808.8 sq.ft",
            "Starting Price": "AED 1,797,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["Lagoon Views", "Open Living Layout"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,111.05 sq.ft",
            "Starting Price": "AED 2,493,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["Spacious Balcony", "Waterfront Outlook"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1,744.73 sq.ft",
            "Starting Price": "AED 4,004,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["Family-Sized Layout", "Premium Lagoon Views"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Lagoon Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Yoga Studios", icon: "🧘", color: "#d7b46a" },
        { label: "Sky Bridge & Courtyards", icon: "🌉", color: "#d7b46a" },
        { label: "Club Lounge & Dining", icon: "🍽️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Soto Grande",
      address: "Al Jazeera Al Hamra, Ras Al Khaimah, UAE",
      lat: 25.704324,
      lng: 55.78675,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "Lagoon-front community living." },
        { icon: "🏝️", text: "Close to beaches and resorts." },
        { icon: "🚗", text: "Direct access to RAK coastal roads." },
      ],
    },

    cta: {
      title: "Live the Lagoon Lifestyle at Soto Grande",
      description:
        "Request pricing, availability, and official Ellington documents today.",
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
      name: "سوتو غراندي",
      developer: "إلينغتون العقارية",
      location: "الجزيرة الحمراء، رأس الخيمة",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,797,828 درهم",
      completionDate: "الربع الرابع 2029",
      paymentPlan: PAYMENT_PLAN,
      type: "مساكن مطلة على البحيرة",
      units: "غرفة، غرفتين و ثلاث غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "إلينغتون العقارية",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "غرفة نوم واحدة",
          specs: {
            "إجمالي المساحة": "808.8 قدم²",
            "السعر الابتدائي": "1,797,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,111.05 قدم²",
            "السعر الابتدائي": "2,493,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          title: "ثلاث غرف نوم",
          specs: {
            "إجمالي المساحة": "1,744.73 قدم²",
            "السعر الابتدائي": "4,004,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },
  },
};

export default sotoGrandeData;
