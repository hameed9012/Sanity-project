// src/data/properties/villas/reportage/taormina-village.js
// ✅ Folder: /reportage/taormina-village
// ✅ EN + AR
// ✅ 3BR & 4BR Villas
// ✅ Wadi Al Safa 3
// ✅ Reportage Properties
// ✅ Bunny CDN filenames EXACT
// ✅ Same master blueprint used across platform

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/reportage/taormina-village";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// Developer logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/reportage.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("TAORMINA BROCHURE ARTWORK tk06.pdf");
const FACTSHEET_PDF = cdn("Fact Sheet - Taormina Village.pdf");

// Floor plans
const FP_3BR = cdn("Taormina Village 3BR Floor Plan.webp");
const FP_4BR = cdn("Taormina Village 4BR Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("CGI-Villa-1.jpg"),
  cdn("CGI-Villa-5.jpg"),
  cdn("CGI-Villa-3 copy.jpg"),
  cdn("CGI-Gate.jpg"),
  cdn("CGI-Garden.jpg"),
  cdn("CGI-Pool copy.jpg"),
  cdn("CGI-Night copy.jpg"),
  cdn("CGI-Living-Room.0000.jpg"),
  cdn("CGI-Living-Room copy.jpg"),
  cdn("Modern-Living.jpg"),
  cdn("Classic-Bedroom.jpg"),
  cdn("Master_Bedroom-CGI.jpg"),
  cdn("CGI-Master-Bedroom copy.jpg"),
  cdn("CGI-Kitchen.0000.jpg"),
  cdn("CGI-Yoga.jpg"),
  cdn("GG-Villa-2.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2028";
const LOCATION_NAME = "Wadi Al Safa 3";

// ======================================================
// DATA
// ======================================================
export const taorminaVillageData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Taormina Village by Reportage | Villas in Dubai",
      description:
        "Taormina Village by Reportage Properties offers 3 and 4 bedroom villas in Wadi Al Safa 3. Starting from AED 3.17M with handover in Q2 2028.",
      keywords:
        "Taormina Village, Reportage Villas, Wadi Al Safa 3, Dubai villas",
      canonical: "/properties/villas/reportage/taormina-village",
    },

    project: {
      name: "Taormina Village",
      developer: "Reportage Properties",
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 3,179,629",
      completionDate: HANDOVER,
      paymentPlan: "30% / 70%",
      type: "Residential Villas",
      units: "3 & 4 Bedroom Villas",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Reportage Properties",
      rating: null,
    },

    intro: {
      title: "TAORMINA VILLAGE — PRIVATE VILLA LIVING",
      paragraphs: [
        "Taormina Village is a premium villa community by Reportage Properties, designed with Mediterranean-inspired architecture and modern interiors.",
        `Located in ${LOCATION_NAME}, the project offers spacious 3 and 4 bedroom villas with private outdoor spaces and lifestyle amenities. Handover is scheduled for ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Taormina Village Villas",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏡",
          value: "Villas",
          label: "Private Living",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "AED 3.17M",
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
      projectTag: "Taormina",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "3br",
          title: "3 Bedroom Villa",
          bedrooms: 3,
          specs: {
            "Total Area": "1,641 sq.ft",
            "Starting Price": "AED 3,179,629",
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 Bedroom Villa",
          bedrooms: 4,
          specs: {
            "Total Area": "1,993 sq.ft",
            "Starting Price": "AED 3,622,488",
            Handover: HANDOVER,
          },
          images: [FP_4BR],
        },
      ],
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Private Gardens", icon: "🌿", color: "#c9a24d" },
        { label: "Yoga Areas", icon: "🧘", color: "#c9a24d" },
        { label: "Community Parks", icon: "🌳", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Taormina Village",
      address: LOCATION_NAME,
      lat: 25.0923252,
      lng: 55.307342,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Connected to major Dubai destinations." },
        { icon: "🏫", text: "Nearby schools and community facilities." },
      ],
    },

    cta: {
      title: "Own a Villa in Taormina Village",
      description:
        "Get full availability, official floor plans, and payment details from Reportage Properties.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    project: {
      name: "قرية تاورمينا",
      developer: "ريبورتاج العقارية",
      location: "وادي الصفا 3",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "3,179,629 درهم",
      completionDate: "الربع الثاني 2028",
      type: "فلل سكنية",
      units: "فلل 3 و4 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "ريبورتاج",
      rating: null,
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          title: "فيلا 3 غرف نوم",
          specs: {
            "إجمالي المساحة": "1,641 قدم²",
            "السعر الابتدائي": "3,179,629 درهم",
            "موعد التسليم": HANDOVER,
          },
          images: [FP_3BR],
        },
        {
          title: "فيلا 4 غرف نوم",
          specs: {
            "إجمالي المساحة": "1,993 قدم²",
            "السعر الابتدائي": "3,622,488 درهم",
            "موعد التسليم": HANDOVER,
          },
          images: [FP_4BR],
        },
      ],
    },
  },
};

export default taorminaVillageData;
