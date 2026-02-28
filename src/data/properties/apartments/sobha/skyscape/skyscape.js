// src/data/properties/apartments/sobha/skyscape/skyscape.js
// ✅ Blueprint-compliant (Eleganz / Sobha standard)
// ✅ EN + AR
// ✅ Off-plan
// ✅ 1BR / 2BR / 3BR
// ✅ Uses ONLY existing files
// ✅ Sobha Hartland II (MBR City)

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/sobha/skyscape";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARDIZED SQUARE IMAGE
const SQUARE_IMAGE_URL = "/Sobha-Realty-Square-Logo.jpg";

// ================= FILES =================
const ONE_PAGER_PDF = cdn("One Pager Skyscape copy.pdf");
const FACTBOOK_AURA = cdn("Skyscape Aura - Factbook.pdf");
const FACTBOOK_ALTIUS = cdn("Skyscape Altius - Factbook.pdf");

const HERO_BG = cdn("I (Sky lounge 1).jpg");
const INTRO_MAIN = cdn("Hartland II A02_C1-5.jpg");

const FP_1BR = cdn("Skyscape 1br floor plan.webp");
const FP_2BR = cdn("Skyscape 2br floor plan.webp");
const FP_3BR = cdn("Skyscape 3br floor plan.webp");

const GALLERY = [
  cdn("Hartland II A02_C1-5.jpg"),
  cdn("I (Lobby).jpg"),
  cdn("I (Entrance Lobby).jpg"),
  cdn("I (Entrance Lobby 1).jpg"),
  cdn("I (Sky lounge 1).jpg"),
  cdn("I (Sky lounge 2).jpg"),
  cdn("Masters Bedroom-001.jpg"),
  cdn("SobhaHL2-BalconyShot01.jpg"),
  cdn("SobhaHL2-BurjKhalifaView02.jpg"),
  cdn("SobhaHL2-CircularPooL.jpg"),
  cdn("TOBLERONE 234 View 02_20240511 01.jpg"),
];

const HANDOVER = "Q4 2028";
const PAYMENT_PLAN = "60% / 40%";

// ======================================================
// DATA
// ======================================================
export const skyscapeSobhaData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Sky Scape by Sobha | 1–3BR Apartments in Hartland II | From AED 1,897,290",
      description:
        "Sky Scape by Sobha in Sobha Hartland II offers premium 1, 2 & 3-bedroom residences starting from AED 1,897,290 with a 60/40 payment plan and handover in Q4 2028.",
      keywords:
        "Sky Scape Sobha, Sobha Hartland II, MBR City apartments, Sobha off plan",
      canonical: "/properties/apartments/sobha/skyscape",
    },

    project: {
      name: "Sky Scape",
      developer: "Sobha Realty",
      location: "Sobha Hartland II, MBR City, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,897,290",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1BR, 2BR & 3BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Sobha Realty",
      rating: null,
    },

    intro: {
      title: "SKY SCAPE — ELEVATED LIVING IN HARTLAND II",
      paragraphs: [
        "Sky Scape by Sobha is a landmark residential development in Sobha Hartland II, offering elevated living with panoramic views, refined interiors, and world-class amenities.",
        `Residences start from AED 1,897,290 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "One Pager", url: ONE_PAGER_PDF, type: "main" },
        { title: "Aura Factbook", url: FACTBOOK_AURA, type: "secondary" },
        { title: "Altius Factbook", url: FACTBOOK_ALTIUS, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Sky Scape Sobha visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,897,290",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "816.77 sq.ft",
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
      projectTag: "Sky Scape",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "816.77 sq.ft",
            "Starting Price": "AED 1,897,290",
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
            "Total Area": "1383.27 sq.ft",
            "Starting Price": "AED 3,306,826",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1595.21 sq.ft",
            "Starting Price": "AED 4,033,775",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: ONE_PAGER_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Sky Lounges", icon: "🌇", color: "#d7b46a" },
        { label: "Infinity Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Panoramic Views", icon: "🌆", color: "#d7b46a" },
        { label: "Luxury Interiors", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Sky Scape",
      address:
        "Sky Scape by Sobha, Sobha Hartland II, Mohammed Bin Rashid City, Dubai",
      lat: 25.1762,
      lng: 55.325,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "Quick access to Downtown Dubai." },
        { icon: "🏙️", text: "Located in MBR City." },
        { icon: "🌳", text: "Green master-planned community." },
      ],
    },

    cta: {
      title: "Interested in Sky Scape?",
      description:
        "Submit your details to receive prices, availability, and official Sobha documents.",
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
      name: "سكاي سكيب",
      developer: "شوبا العقارية",
      location: "هارتلاند 2، مدينة محمد بن راشد، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,897,290 درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "1، 2 و 3 غرف",
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
            "إجمالي المساحة": "816.77 قدم²",
            "السعر الابتدائي": "1,897,290 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          title: "غرفتين نوم",
          specs: {
            "إجمالي المساحة": "1383.27 قدم²",
            "السعر الابتدائي": "3,306,826 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          title: "ثلاث غرف نوم",
          specs: {
            "إجمالي المساحة": "1595.21 قدم²",
            "السعر الابتدائي": "4,033,775 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: ONE_PAGER_PDF,
    },
  },
};

export default skyscapeSobhaData;
