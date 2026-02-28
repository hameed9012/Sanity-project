// src/data/properties/apartments/imtiaz/the-symphony.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR + 3BR + 4BR
// ✅ Bunny CDN filenames EXACT
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/imtiaz/the-symphony";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("The Symphony by Imtiaz_Brochure.pdf");
const PAYMENT_PLAN_PDF = cdn("The Symphony by Imtiaz-Payment plan.pdf");

// Floor plans
const FP_1BR = cdn("1 BR The Symphony Floor Plan.webp");
const FP_3BR = cdn("3 BR The Symphony Floor Plan.webp");
const FP_4BR = cdn("4 BR The Symphony Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("01.jpg"),
  cdn("02.jpg"),
  cdn("03.jpg"),
  cdn("04.jpg"),
  cdn("05.jpg"),
  cdn("06.jpg"),
  cdn("View 01.jpg"),
  cdn("View 02.jpg"),
  cdn("View 03.jpg"),
  cdn("View 04.jpg"),
  cdn("View 05.jpg"),
  cdn("View 06.jpg"),
  cdn("View 07.jpg"),
  cdn("View 08.jpg"),
  cdn("horizontal view 4k.jpg"),
  cdn("cam-0-1.jpg"),
  cdn("cam-02.jpg"),
  cdn("cam-03.jpg"),
  cdn("Gym-A.jpg"),
  cdn("CLUB.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2029";
const PAYMENT_PLAN = "60% / 40%";
const LOCATION_NAME = "Dubai";
const DEVELOPER = "Imtiaz Developments";

// ======================================================
// DATA
// ======================================================
export const theSymphonyData = {
  // ================= EN =================
  en: {
    seo: {
      title: "The Symphony by Imtiaz | Luxury Apartments for Sale in Dubai",
      description:
        "The Symphony by Imtiaz offers 1, 3 & 4 bedroom luxury residences with lagoon views. Starting from AED 1.66M, 60/40 payment plan, handover Q2 2029.",
      keywords: "The Symphony Imtiaz, luxury apartments Dubai, Imtiaz off plan",
      canonical: "/properties/apartments/imtiaz/the-symphony",
    },

    project: {
      name: "The Symphony",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,660,623",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Apartments",
      units: "1, 3 & 4 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("View 01.jpg"),
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "THE SYMPHONY — ICONIC LAGOON LIVING",
      paragraphs: [
        "The Symphony by Imtiaz is a landmark luxury residential development designed around serene lagoon views and architectural elegance.",
        "Offering spacious 1, 3 and 4 bedroom residences, the project blends refined interiors, resort-style amenities, and a prime Dubai location.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "The Symphony by Imtiaz",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌊",
          value: "Lagoon Views",
          label: "Signature Feature",
        },
        {
          bottom: "32%",
          left: "-40px",
          icon: "💎",
          value: "Luxury",
          label: "Premium Living",
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
      projectTag: "The Symphony",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "654.98 sq.ft",
            "Starting Price": "AED 1,660,623",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "1,908.54 sq.ft",
            "Starting Price": "AED 4,238,005",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 Bedroom Apartment",
          bedrooms: 4,
          specs: {
            "Total Area": "2,890.97 sq.ft",
            "Starting Price": "AED 7,268,930",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_4BR],
        },
      ],
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Lagoon Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Luxury Clubhouse", icon: "🏛️", color: "#c9a24d" },
        { label: "State-of-the-art Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Landscaped Podium", icon: "🌴", color: "#c9a24d" },
        { label: "Private Parking", icon: "🚗", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "The Symphony",
      address: LOCATION_NAME,
      lat: 25.1800684,
      lng: 55.3233068,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏙️", text: "Prime Dubai location" },
        { icon: "🚗", text: "Easy access to main highways" },
        { icon: "🌊", text: "Lagoon-centric community" },
      ],
    },

    cta: {
      title: "Own a Residence at The Symphony",
      description:
        "Request full pricing, availability and exclusive offers for The Symphony by Imtiaz.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "ذا سيمفوني",
      developer: "إمتياز للتطوير العقاري",
      location: "دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,660,623 درهم",
      completionDate: "الربع الثاني 2029",
      paymentPlan: "60% / 40%",
      type: "شقق فاخرة",
      units: "غرفة، 3 و 4 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("01 sunset lagoon 8k.png"),
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
            "إجمالي المساحة": "654.98 قدم²",
            "السعر الابتدائي": "1,660,623 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الثاني 2029",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,908.54 قدم²",
            "السعر الابتدائي": "4,238,005 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الثاني 2029",
          },
          images: [FP_3BR],
        },
        {
          title: "شقة أربع غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "2,890.97 قدم²",
            "السعر الابتدائي": "7,268,930 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الثاني 2029",
          },
          images: [FP_4BR],
        },
      ],
    },
  },
};

export default theSymphonyData;
