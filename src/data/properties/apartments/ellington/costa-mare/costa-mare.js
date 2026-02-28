// src/data/properties/apartments/ellington/costa-mare.js
// ✅ Folder: /ellington/costa-mare
// ✅ EN + AR
// ✅ 1BR + 2BR
// ✅ Exact Bunny filenames only (no assumptions)
// ✅ Al Marjan Island
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/costa-mare";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Costa Mare - Brochure.pdf");
const PAYMENT_PLAN_PDF = cdn("Costa Mare - Payment Plan.pdf");

const HERO_BG = cdn("Costa Mare - hero shot 1.jpg");
const INTRO_MAIN = cdn("Costa Mare - hero shot 5.jpg");
const VIDEO = cdn("Costa Mare - concept video - horizontal.mp4");

const FP_1BR = cdn("Costa mare 1br floor plan.webp");
const FP_2BR = cdn("Costa Mare 2br floor plan.webp");

// ⚠️ ONLY VERIFIED FILES FROM BUNNY
const GALLERY = [
  cdn("Costa Mare - hero shot 3.jpg"),
  cdn("Costa Mare - hero shot 5.jpg"),
  cdn("Costa Mare - hero shot 6.jpg"),
  cdn("Costa Mare - Facade 1.jpg"),
  cdn("Costa Mare - Facade 2.jpg"),
  cdn("Costa Mare - Facade 3.jpg"),
  cdn("Costa Mare - Balcony view.jpg"),
  cdn("Costa Mare - Drop off 1.jpg"),
  cdn("Costa Mare - Drop off 2.jpg"),
  cdn("Costa Mare - Lobby.jpg"),
  cdn("Costa Mare - Living & Dining.jpg"),
  cdn("Costa Mare - Kitchen.jpg"),
  cdn("Costa Mare - Master Bedroom.jpg"),
  cdn("Costa Mare - Master Bathroom.jpg"),
  cdn("Costa Mare - Gym.jpg"),
  cdn("Costa Mare - Spa.jpg"),
  cdn("Costa Mare - Yoga.jpg"),
  cdn("Costa Mare - wellness amenities floor.jpg"),
  cdn("Costa Mare - Ground floor pool.jpg"),
  cdn("Costa Mare - high floor amenities deck 1.jpg"),
  cdn("Costa Mare - high floor amenities deck 2.jpg"),
  cdn("Costa Mare - high floor pool 1.jpg"),
  cdn("Costa Mare - high floor pool 2.jpg"),
  cdn("Costa Mare - Immersive Dining.jpg"),
  cdn("Costa Mare - Kids Area.jpg"),
  cdn("Costa Mare -Clubhouse.jpg"),
  cdn("Costa Mare - Penthouse.jpg"),
];

const HANDOVER = "Q3 2028";
const PAYMENT_PLAN = "70% / 30%";

// ======================================================
// DATA
// ======================================================
export const costaMareData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Costa Mare by Ellington | Seafront Apartments on Al Marjan Island",
      description:
        "Costa Mare by Ellington offers luxury 1 & 2 bedroom apartments on Al Marjan Island. Starting from AED 2,973,828 with a 70/30 payment plan and handover in Q3 2028.",
      keywords:
        "Costa Mare, Ellington Properties, Al Marjan Island apartments, seafront living UAE",
      canonical: "/properties/apartments/ellington/costa-mare",
    },

    project: {
      name: "Costa Mare",
      developer: "Ellington Properties",
      location: "Al Marjan Island, Ras Al Khaimah, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,973,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Seafront Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "COSTA MARE — ELEVATED SEAFRONT LIVING",
      paragraphs: [
        "Costa Mare by Ellington is a refined residential address on Al Marjan Island, blending coastal architecture with immersive lifestyle amenities.",
        `Residences start from AED 2,973,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Payment Plan",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Costa Mare by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2.97M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "840 – 1,095 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Al Marjan Island",
          label: "Seafront Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Costa Mare",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "840.88 sq.ft",
            "Starting Price": "AED 2,973,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["Sea Views", "Open Living Layout"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,095.77 sq.ft",
            "Starting Price": "AED 3,367,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["Spacious Living", "Premium Finishes"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Infinity Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Wellness & Spa", icon: "💆", color: "#d7b46a" },
        { label: "Fitness & Yoga Studios", icon: "🧘", color: "#d7b46a" },
        { label: "Immersive Dining", icon: "🍽️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Costa Mare",
      address: "Al Marjan Island, Ras Al Khaimah, UAE",
      lat: 25.704324, // Al Marjan Island center-safe
      lng: 55.784175,
      zoom: 15,
      proximityFeatures: [
        { icon: "🏝️", text: "Prime Al Marjan Island address." },
        { icon: "🌊", text: "Direct beach and sea views." },
        { icon: "🚗", text: "Easy access to RAK city and resorts." },
      ],
    },

    cta: {
      title: "Own a Seafront Home at Costa Mare",
      description:
        "Get official pricing, availability, and Ellington documentation today.",
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
      name: "كوستا ماري",
      developer: "إلينغتون العقارية",
      location: "جزيرة المرجان، رأس الخيمة",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,973,828 درهم",
      completionDate: "الربع الثالث 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق مطلة على البحر",
      units: "غرفة وغرفتين نوم",
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
            "إجمالي المساحة": "840.88 قدم²",
            "السعر الابتدائي": "2,973,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1,095.77 قدم²",
            "السعر الابتدائي": "3,367,828 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },
  },
};

export default costaMareData;
