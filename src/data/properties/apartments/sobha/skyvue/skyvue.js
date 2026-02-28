// src/data/properties/apartments/sobha/skyvue/skyvue.js
// ✅ Blueprint-compliant (Eleganz / Sobha standard)
// ✅ EN + AR
// ✅ Off-plan
// ✅ 1BR & 2BR
// ✅ Uses ONLY existing files
// ✅ Sobha Hartland II (MBR City)

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/sobha/skyvue";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD SOBHA SQUARE IMAGE
const SQUARE_IMAGE_URL = "/Sobha-Realty-Square-Logo.jpg";

// ================= FILES =================
const BROCHURE_ALTIER = cdn("SKYVUE ALTIER AT SOBHA HARTLAND 2_BROCHURE.pdf");
const BROCHURE_SPECTRA = cdn("Skyvue Spectra- Brochure.pdf");
const FACTBOOK_SOLAR = cdn("Skyvue Solair - Factbook.pdf");
const FACTBOOK_SPECTRA = cdn("Skyvue Spectra Factbook.pdf");

const HERO_BG = cdn("Amenities (1).jpg");
const INTRO_MAIN = cdn("A (3).jpg");

const VIDEO_TEASER = cdn("Skyvue Teaser.mp4");
const VIDEO_LAUNCH = cdn("Skyvue Altier - Launch Video.mp4");

const FP_1BR = cdn("Skyvue 1br floor plan.webp");
const FP_2BR = cdn("Skyvue 2br floor plan.webp");

// Curated gallery (representative, non-duplicated, safe load)
const GALLERY = [
  cdn("0_Community.jpg"),
  cdn("Entrance Lobby Cam 1.jpg"),
  cdn("Entrance Lobby Cam 2.jpg"),
  cdn("Amenities (1).jpg"),
  cdn("Amenities (2).jpg"),
  cdn("Amenities (3).jpg"),
  cdn("SKYVUE SPECTRA - CANAL SIDE VIEW 01.jpg"),
  cdn("SKYVUE SPECTRA - STREET SIDE VIEW 01.jpg"),
  cdn("SKYVUE SPECTRA - ENTRANCE VIEW.jpg"),
  cdn("Sobha Hartland II_night bird-eye view_2K.jpg"),
];

const HANDOVER = "Q2 2030";
const PAYMENT_PLAN = "60% / 40%";

// ======================================================
// DATA
// ======================================================
export const skyvueSobhaData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Sky Vue by Sobha | 1 & 2BR Apartments in Hartland II | From AED 1,621,651",
      description:
        "Sky Vue by Sobha in Sobha Hartland II offers premium 1 & 2-bedroom residences starting from AED 1,621,651 with a 60/40 payment plan and handover in Q2 2030.",
      keywords:
        "Sky Vue Sobha, Sobha Hartland II, MBR City apartments, Sobha off plan",
      canonical: "/properties/apartments/sobha/skyvue",
    },

    project: {
      name: "Sky Vue",
      developer: "Sobha Realty",
      location: "Sobha Hartland II, MBR City, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,621,651",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1BR & 2BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Sobha Realty",
      rating: null,
    },

    intro: {
      title: "SKY VUE — PANORAMIC LIVING IN HARTLAND II",
      paragraphs: [
        "Sky Vue by Sobha is a premium residential collection within Sobha Hartland II, designed to offer elevated living, canal-side views, and refined architectural elegance.",
        `Apartments start from AED 1,621,651 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Altier Brochure", url: BROCHURE_ALTIER, type: "main" },
        { title: "Spectra Brochure", url: BROCHURE_SPECTRA, type: "secondary" },
        { title: "Solair Factbook", url: FACTBOOK_SOLAR, type: "secondary" },
        { title: "Spectra Factbook", url: FACTBOOK_SPECTRA, type: "secondary" },
        { title: "Watch Teaser", url: VIDEO_TEASER, type: "video" },
        { title: "Launch Video", url: VIDEO_LAUNCH, type: "video" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Sky Vue Sobha visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,621,651",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "551.01 sq.ft",
          label: "Area From",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Hartland II",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Sky Vue",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "551.01 sq.ft",
            "Starting Price": "AED 1,621,651",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "839.48 sq.ft",
            "Starting Price": "AED 2,484,861",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_ALTIER,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Canal-Side Living", icon: "🌊", color: "#d7b46a" },
        { label: "Sky Lounges", icon: "🌇", color: "#d7b46a" },
        { label: "Resort-Style Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Sobha Craftsmanship", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Sky Vue",
      address:
        "Sky Vue by Sobha, Sobha Hartland II, Mohammed Bin Rashid City, Dubai",
      lat: 25.175632,
      lng: 55.3249611,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "Minutes from Downtown Dubai." },
        { icon: "🏙️", text: "Located in MBR City." },
        { icon: "🌳", text: "Waterfront & green surroundings." },
      ],
    },

    cta: {
      title: "Interested in Sky Vue?",
      description:
        "Submit your details to receive unit availability, prices, and official Sobha documents.",
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
      name: "سكاي فيو",
      developer: "شوبا العقارية",
      location: "هارتلاند 2، مدينة محمد بن راشد، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,621,651 درهم",
      completionDate: "الربع الثاني 2030",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "1 و 2 غرفة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "شوبا العقارية",
      rating: null,
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "غرفة نوم واحدة",
          specs: {
            "إجمالي المساحة": "551.01 قدم²",
            "السعر الابتدائي": "1,621,651 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "839.48 قدم²",
            "السعر الابتدائي": "2,484,861 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: BROCHURE_ALTIER,
    },
  },
};

export default skyvueSobhaData;
