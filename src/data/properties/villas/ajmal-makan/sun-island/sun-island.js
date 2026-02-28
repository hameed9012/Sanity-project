// src/data/properties/villas/ajmal-makan/sun-island.js
// ✅ FULLY ALIGNED WITH SOBHA SINIYA BLUEPRINT
// ✅ UI-SAFE STRUCTURE (tabs, variants, specs)
// ✅ ONLY 4BR / 5BR / 7BR
// ✅ READY + 100% PAYMENT
// ✅ EN + AR

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "ajmal-makan/sun-island";

/** CDN helper */
const cdn = (file) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${file}`);

// ========================
// CORE
// ========================
const DEVELOPER = "Ajmal Makan";
const LOCATION = "Al Hamriya, Sharjah, UAE";
const HANDOVER = "Ready";
const PAYMENT_PLAN = "100%";

const MAP_LAT = 25.5002278;
const MAP_LNG = 55.5052387;

// ========================
// HERO / MEDIA
// ========================
const HERO_BG = cdn("Video Sun Island & Blue Bay Walk 2024 - 2025 LQ.mp4");
const INTRO_MAIN = cdn("Sunisland (1).jpg");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png";

// ========================
// GALLERY
// ========================
const GALLERY_SLIDES = Array.from({ length: 20 }, (_, i) =>
  cdn(`${i + 1}.jpg`),
);

// ========================
// FLOOR PLAN IMAGES
// ========================
const FP_4BR = [cdn("Sun Island Villas 4BR Floor plan.webp")];
const FP_5BR = [cdn("Sun Island Villas 5BR Floor plan.webp")];
const FP_7BR = [cdn("Sun Island Villas 7 BR Floor plan.webp")];

// ========================
// EXPORT
// ========================
export const sunIslandData = {
  // ======================
  // EN
  // ======================
  en: {
    seo: {
      title: "Sun Island Villas by Ajmal Makan | Ready Villas in Al Hamriya",
      description:
        "Sun Island Villas by Ajmal Makan offers ready 4, 5 & 7 bedroom waterfront villas in Al Hamriya, Sharjah with a 100% payment plan.",
      canonical: "/properties/villas/ajmal-makan/sun-island",
    },

    project: {
      name: "Sun Island Villas",
      developer: DEVELOPER,
      location: LOCATION,
      status: "Secondary",
      startingPrice: "AED 3,075,000",
      type: "Residential",
      units: "4, 5 & 7 Bedroom Villas",
      paymentPlan: PAYMENT_PLAN,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
    },

    intro: {
      title: "READY WATERFRONT VILLAS IN AL HAMRIYA",
      paragraphs: [
        "Sun Island Villas by Ajmal Makan is a completed waterfront community in Al Hamriya, Sharjah.",
        "The project features spacious family villas with modern layouts, private outdoor areas, and coastal surroundings.",
      ],
      imgUrl: INTRO_MAIN,
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY_SLIDES,
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br",
          bedrooms: 4,
          shortLabel: "4 BR",
          title: "4 Bedroom Villa",
          variants: [
            {
              id: "4br-villa",
              shortLabel: "Villa",
              fullTitle: "4 Bedroom Villa",
              specs: {
                Unit: "4BR Villa",
                "Total Area": "2,773.97 SQ.FT.",
                "Starting Price": "AED 3,075,000",
                Payment: PAYMENT_PLAN,
                Handover: HANDOVER,
                Location: "Al Hamriya",
              },
              images: FP_4BR,
            },
          ],
        },

        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 BR",
          title: "5 Bedroom Villa",
          variants: [
            {
              id: "5br-villa",
              shortLabel: "Villa",
              fullTitle: "5 Bedroom Villa",
              specs: {
                Unit: "5BR Villa",
                "Total Area": "3,799.01 SQ.FT.",
                "Starting Price": "AED 4,250,000",
                Payment: PAYMENT_PLAN,
                Handover: HANDOVER,
                Location: "Al Hamriya",
              },
              images: FP_5BR,
            },
          ],
        },

        {
          id: "7br",
          bedrooms: 7,
          shortLabel: "7 BR",
          title: "7 Bedroom Villa",
          variants: [
            {
              id: "7br-villa",
              shortLabel: "Villa",
              fullTitle: "7 Bedroom Villa",
              specs: {
                Unit: "7BR Villa",
                "Total Area": "5,119.96 SQ.FT.",
                "Starting Price": "AED 7,900,000",
                Payment: PAYMENT_PLAN,
                Handover: HANDOVER,
                Location: "Al Hamriya",
              },
              images: FP_7BR,
            },
          ],
        },
      ],
    },

    location: {
      title: "Project Location",
      address: LOCATION,
      lat: MAP_LAT,
      lng: MAP_LNG,
    },
  },

  // ======================
  // AR
  // ======================
  ar: {
    project: {
      name: "فلل صن آيلاند",
      developer: "عجمان مكان",
      location: LOCATION,
      status: "ثانوي (إعادة بيع)",
      startingPrice: "3,075,000 درهم",
      paymentPlan: "100%",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br",
          bedrooms: 4,
          shortLabel: "4 غرف",
          title: "فيلا 4 غرف نوم",
          variants: [
            {
              fullTitle: "فيلا 4 غرف نوم",
              specs: {
                "نوع الوحدة": "فيلا 4 غرف",
                المساحة: "2,773.97 قدم²",
                السعر: "3,075,000 درهم",
                الحالة: "جاهز",
              },
              images: FP_4BR,
            },
          ],
        },
        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 غرف",
          title: "فيلا 5 غرف نوم",
          variants: [
            {
              fullTitle: "فيلا 5 غرف نوم",
              specs: {
                "نوع الوحدة": "فيلا 5 غرف",
                المساحة: "3,799.01 قدم²",
                السعر: "4,250,000 درهم",
                الحالة: "جاهز",
              },
              images: FP_5BR,
            },
          ],
        },
        {
          id: "7br",
          bedrooms: 7,
          shortLabel: "7 غرف",
          title: "فيلا 7 غرف نوم",
          variants: [
            {
              fullTitle: "فيلا 7 غرف نوم",
              specs: {
                "نوع الوحدة": "فيلا 7 غرف",
                المساحة: "5,119.96 قدم²",
                السعر: "7,900,000 درهم",
                الحالة: "جاهز",
              },
              images: FP_7BR,
            },
          ],
        },
      ],
    },
  },
};

export default sunIslandData;
