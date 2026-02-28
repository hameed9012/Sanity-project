// src/data/properties/apartments/imtiaz/sunset-bay-grand.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR + 2BR
// ✅ Bunny CDN filenames EXACT
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/imtiaz/sunset-bay-grand";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("IMTIAZ_Sunset Bay Grand-Brochure.pdf");
const FACTSHEET_PDF = cdn("IMTIAZ_Sunset Bay Grand-Factsheet.pdf");
const FLOORPLANS_PDF = cdn("Sunset Bay grand by Imtiaz - Floor Plan.pdf");

// Floor plans
const FP_1BR = cdn("1 BR Sunset Bay Grand Floor Plan.webp");
const FP_2BR = cdn("2 BR Sunset Bay Grand Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("View 01.jpg"),
  cdn("View 02.jpg"),
  cdn("View 03.jpg"),
  cdn("View 04.jpg"),
  cdn("View 05.jpg"),
  cdn("View 06.jpg"),
  cdn("1.jpg"),
  cdn("2.jpg"),
  cdn("3.jpg"),
  cdn("4.jpg"),
  cdn("5.jpg"),
  cdn("6.jpg"),
  cdn("7.jpg"),
  cdn("8.jpg"),
  cdn("9.jpg"),
  cdn("10.jpg"),
  cdn("11.jpg"),
  cdn("12.jpg"),
  cdn("13.jpg"),
  cdn("Club_A.jpg"),
  cdn("Club_B.jpg"),
  cdn("Club_C.jpg"),
  cdn("Club_D.jpg"),
  cdn("Gym_C01.jpg"),
  cdn("Gym_C02.jpg"),
  cdn("Gym_C03.jpg"),
  cdn("Gym_C04.jpg"),
  cdn("Gym_C05.jpg"),
  cdn("1BHK Kitchen High-Resolution.jpg"),
  cdn("1bhk bathroom-C01.jpg"),
  cdn("1bhk bathroom-C02.jpg"),
  cdn("1bhk_wardrobe_C1.jpg"),
  cdn("1bhk_wardrobe_C2.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "60% / 40%";
const LOCATION_NAME = "Dubai Islands";
const DEVELOPER = "Imtiaz Developments";

// ======================================================
// DATA
// ======================================================
export const sunsetBayGrandData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Sunset Bay Grand by Imtiaz | Waterfront Apartments in Dubai Islands",
      description:
        "Sunset Bay Grand by Imtiaz offers 1 & 2 bedroom waterfront apartments in Dubai Islands. Starting from AED 2.32M with handover Q4 2027.",
      keywords:
        "Sunset Bay Grand, Imtiaz, Dubai Islands apartments, waterfront apartments Dubai",
      canonical: "/properties/apartments/imtiaz/sunset-bay-grand",
    },

    project: {
      name: "Sunset Bay Grand",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 2,328,640",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Waterfront Residential Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "SUNSET BAY GRAND — WATERFRONT LIVING BY IMTIAZ",
      paragraphs: [
        "Sunset Bay Grand by Imtiaz Developments is a premium waterfront residential project offering spacious 1 and 2-bedroom apartments with elegant interiors.",
        "Located within Dubai Islands, the development blends resort-style amenities with strong investment potential and scenic coastal views.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Sunset Bay Grand Dubai Islands",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Waterfront",
          label: "Dubai Islands",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 2.32M",
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
      projectTag: "Sunset Bay Grand",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "840.99 sq.ft",
            "Starting Price": "AED 2,328,640",
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
            "Total Area": "1,438.16 sq.ft",
            "Starting Price": "AED 3,188,791",
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
        { label: "Waterfront Views", icon: "🌊", color: "#c9a24d" },
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Clubhouse", icon: "🛋️", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌴", color: "#c9a24d" },
        { label: "Covered Parking", icon: "🚗", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Sunset Bay Grand",
      address: LOCATION_NAME,
      lat: 25.2889726,
      lng: 55.296983,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "Prime waterfront setting" },
        { icon: "🚗", text: "Easy access to mainland Dubai" },
        { icon: "🏝️", text: "Part of Dubai Islands master plan" },
      ],
    },

    cta: {
      title: "Own a Waterfront Home at Sunset Bay Grand",
      description:
        "Request full availability, pricing, and floor plans for Sunset Bay Grand by Imtiaz.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "صن ست باي جراند",
      developer: "إمتياز للتطوير العقاري",
      location: "جزر دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "2,328,640 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: "60% / 40%",
      type: "شقق سكنية على الواجهة البحرية",
      units: "غرفة وغرفتين نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
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
            "إجمالي المساحة": "840.99 قدم²",
            "السعر الابتدائي": "2,328,640 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,438.16 قدم²",
            "السعر الابتدائي": "3,188,791 درهم",
            "خطة السداد": "60% / 40%",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },
  },
};

export default sunsetBayGrandData;
