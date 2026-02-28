// src/data/properties/apartments/samana/barari-heights.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR (1:1)
// ✅ Studio only
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/barari-heights";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// FILES
const BROCHURE_PDF = cdn("SAMANA BARARI HEIGHTS BROCHURE.pdf");
const FACTSHEET_PDF = cdn("SAMANA BARARI HEIGHTS FACTSHEET.pdf");
const FLOORPLANS_PDF = cdn("SAMANA BARARI HEIGHTS FLOOR PLAN Revised.pdf");

const HERO_BG = cdn("BARARI HEIGHTS -LAUNCH HD.mp4");
const INTRO_MAIN = cdn("Aerial-day RV.png");
const FP_STUDIO = cdn("Samana Barari heights studio floor plan.webp");

const GALLERY = [
  cdn("Aerial-day RV.png"),
  cdn("Semi arial elbarari view 1.png"),
  cdn("DeckView.jpg"),
  cdn("bbqarealowerpodium.jpg"),
  cdn("BonfireSeating.jpg"),
  cdn("Kidsarea.jpg"),
  cdn("apartment02.tif"),
  cdn("bedroom01.tif"),
  cdn("bedroom02.tif"),
  cdn("lobby01.tif"),
  cdn("Spa01.jpg"),
  cdn("AquaGym.tif"),
  cdn("cigarroom02-01.jpg"),
];

const HANDOVER = "Q3 2028";
const PAYMENT_PLAN = "67% / 33%";
const LOCATION_NAME = "Majan, Dubai, UAE";
const DEVELOPER = "Samana Developers";

export const samanaBarariHeightsData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Samana Barari Heights | Studio Apartments in Majan Dubai",
      description:
        "Samana Barari Heights by Samana Developers offers premium studio apartments in Majan, Dubai with nature-inspired living and resort-style amenities.",
      keywords:
        "Samana Barari Heights, Majan apartments, Samana Developers Dubai",
      canonical: "/properties/apartments/samana/barari-heights",
    },

    project: {
      name: "Samana Barari Heights",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 921,111",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
      videoUrl: HERO_BG,
    },

    intro: {
      title: "SAMANA BARARI HEIGHTS — NATURE-INSPIRED URBAN LIVING",
      paragraphs: [
        "Samana Barari Heights is a contemporary residential development in Majan, offering tranquil green surroundings combined with modern architecture.",
        `Studios start from AED 921,111 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Samana Barari Heights",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 921K",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "382.77 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Majan",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Barari Heights",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "382.77 sq.ft",
            "Starting Price": "AED 921,111",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_STUDIO],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Aqua Gym", icon: "💦", color: "#c9a24d" },
        { label: "Spa & Wellness", icon: "🧖", color: "#c9a24d" },
        { label: "BBQ & Bonfire Areas", icon: "🔥", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Barari Heights",
      address: LOCATION_NAME,
      lat: 25.0943763,
      lng: 55.3250522,
      zoom: 15,
      proximityFeatures: [
        {
          icon: "🛣️",
          text: "Direct access to Sheikh Mohammed Bin Zayed Road.",
        },
        { icon: "🌳", text: "Close to Al Barari greenery." },
        { icon: "🏙️", text: "Minutes from Dubai lifestyle destinations." },
      ],
    },

    cta: {
      title: "Invest in Samana Barari Heights",
      description:
        "Request pricing, availability, and official Samana documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    seo: {
      title: "سمانا براري هايتس | شقق استوديو في ماجان دبي",
      description:
        "سمانا براري هايتس من سمانا للتطوير العقاري يوفر شقق استوديو فاخرة في ماجان مع أسلوب حياة مستوحى من الطبيعة.",
      keywords: "سمانا براري هايتس، ماجان، شقق دبي",
      canonical: "/properties/apartments/samana/barari-heights",
    },

    project: {
      name: "سمانا براري هايتس",
      developer: "سمانا للتطوير العقاري",
      location: "ماجان، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "921,111 درهم",
      completionDate: "الربع الثالث 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سمانا",
      rating: null,
    },

    intro: {
      title: "سمانا براري هايتس — أسلوب حياة مستوحى من الطبيعة",
      paragraphs: [
        "سمانا براري هايتس هو مشروع سكني عصري يقع في ماجان ويجمع بين الهدوء والطبيعة والتصميم الحديث.",
        `تبدأ الأسعار من 921,111 درهم مع تسليم متوقع في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف المعلومات", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "سمانا براري هايتس",
      floatingCards: [],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "سمانا براري هايتس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "382.77 قدم²",
            "السعر الابتدائي": "921,111 درهم",
            "خطة الدفع": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_STUDIO],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي مائي", icon: "💦", color: "#c9a24d" },
        { label: "سبا وعافية", icon: "🧖", color: "#c9a24d" },
        { label: "مناطق شواء", icon: "🔥", color: "#c9a24d" },
        { label: "منطقة أطفال", icon: "🧸", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سمانا براري هايتس",
      address: "ماجان، دبي",
      lat: 25.0943763,
      lng: 55.3250522,
      zoom: 15,
      proximityFeatures: [
        { icon: "🛣️", text: "سهولة الوصول إلى شارع الشيخ محمد بن زايد." },
        { icon: "🌳", text: "بالقرب من منطقة البراري الخضراء." },
        { icon: "🏙️", text: "قريب من وجهات دبي الرئيسية." },
      ],
    },

    cta: {
      title: "استثمر في سمانا براري هايتس",
      description:
        "احصل على الأسعار والتوافر والمستندات الرسمية من سمانا اليوم.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default samanaBarariHeightsData;
