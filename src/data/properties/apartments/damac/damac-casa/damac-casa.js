// src/data/properties/apartments/damac/damac-casa/damac-casa.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Final verified unit data (1BR–4BR)
// ✅ FloorPlans object = ONLY 4 fields
// ✅ Uses ONLY your Bunny CDN filenames
// ✅ Canonical + location fixed

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-casa";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs
const BROCHURE_PDF = cdn("Damac Casa Brochure-Digital.pdf");
const FLOORPLAN_PDF = cdn("Damac Casa Brochure-Digital floorplans.pdf");
const PAYMENT_PLAN_IMG = cdn("Damac Casa PAYMENT PLAN.jpg");

// Floor plan images
const FP_1BR = cdn("Damac casa 1br floor plan.webp");
const FP_2BR = cdn("damac casa 2br floor ppan.webp");
const FP_3BR = cdn("damac casa 3br floor plan.webp");
const FP_4BR = cdn("damac casa 4br floor plan.webp");

// Gallery
const GALLERY = [
  cdn("one view with high resolution-20230920.jpg"),
  cdn("AS_MB-View 01.jpg"),
  cdn("AS_MB-View 02 .jpg"),
  cdn("AS_MW_View 01.jpg"),
  cdn("AS_MW_View 02.jpg"),
  cdn("GF Lobby 1.jpg"),
  cdn("GF Lobby 2.jpg"),
  cdn("GF Lobby 3.jpg"),
  cdn("Lift Lobby.jpg"),
  cdn("Al Sufouh_Gym_20230922.jpg"),
  cdn("Al Sufouh_Spa_Cam-02_20230922-People.jpg"),
  cdn("SPL LIVING DINING_01.jpg"),
  cdn("P1.jpg"),
  cdn("P2.jpg"),
  cdn("P3.jpg"),
  cdn("P4.jpg"),
  cdn("P5.jpg"),
  cdn("P6.jpg"),
  cdn("P7.jpg"),
  cdn("P8.jpg"),
  cdn("P9.jpg"),
  cdn("P10.jpg"),
  cdn("P11.jpg"),
  cdn("P12.jpg"),
];

export const damacCasaData = {
  en: {
    seo: {
      title: "DAMAC Casa | 1–4 Bedroom Luxury Residences in Media City, Dubai",
      description:
        "DAMAC Casa is a premium residential tower in Dubai Media City offering spacious 1 to 4 bedroom residences with panoramic skyline and coastal views, scheduled for handover in Q2 2028.",
      keywords:
        "DAMAC Casa, Media City apartments, luxury residences Dubai, DAMAC properties",
      canonical: "/properties/apartments/damac/damac-casa",
    },

    project: {
      name: "DAMAC Casa",
      developer: "DAMAC Properties",
      location: "Dubai Media City, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,997,000",
      completionDate: "Q2 2028",
      paymentPlan: "60/40",
      type: "Luxury Apartments",
      units: "1, 2, 3 & 4 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("one view with high resolution-20230920.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "ICONIC LUXURY LIVING IN DUBAI MEDIA CITY",
      paragraphs: [
        "DAMAC Casa is positioned in Dubai Media City, one of the city’s most established lifestyle and business districts, bordered by Palm Jumeirah, Al Sufouh, and Sheikh Zayed Road. The location offers a rare combination of urban connectivity and coastal proximity.",
        "Designed as a high-end residential landmark, DAMAC Casa focuses on spacious layouts, refined interiors, and elevated views of Dubai’s skyline and surrounding waterfront. Each residence emphasizes comfort, scale, and privacy—appealing to both end-users and long-term investors.",
        "With handover scheduled for Q2 2028 and a structured 60/40 payment plan, DAMAC Casa presents a balanced opportunity in a supply-restricted area known for stable demand and premium positioning.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Download Floor Plans (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
        {
          title: "Payment Plan",
          url: PAYMENT_PLAN_IMG,
          type: "secondary",
        },
      ],
      imgUrl: cdn("AS_MB-View 01.jpg"),
      imgAlt: "DAMAC Casa exterior view",
      floatingCards: [
        {
          icon: "💰",
          value: "AED 2.99M",
          label: "Starting Price",
        },
        {
          icon: "📅",
          value: "Q2 2028",
          label: "Handover",
        },
        {
          icon: "📍",
          value: "Media City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "DAMAC Casa Gallery",
      slides: GALLERY,
      projectTag: "DAMAC Casa",
    },

    // ✅ FINAL FloorPlans (STRICT FORMAT)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "1060.68 sq.ft",
            "Starting Price": "AED 2,997,000",
            Handover: "Q2 2028",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1598.01 sq.ft",
            "Starting Price": "AED 3,961,000",
            Handover: "Q2 2028",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "2011.13 sq.ft",
            "Starting Price": "AED 5,129,000",
            Handover: "Q2 2028",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "3886.42 sq.ft",
            "Starting Price": "AED 13,587,000",
            Handover: "Q2 2028",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC Casa",
      address: "Dubai Media City, Dubai, UAE",
      lat: 25.0972601,
      lng: 55.1556993,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌴", text: "Minutes from Palm Jumeirah." },
        { icon: "🚗", text: "Direct access to Sheikh Zayed Road." },
        { icon: "🏙️", text: "Close to Marina, JBR, and key business hubs." },
      ],
    },

    cta: {
      title: "Interested in DAMAC Casa?",
      description:
        "Request full availability, updated pricing, and official documents for DAMAC Casa in Dubai Media City.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },
};

export default damacCasaData;
