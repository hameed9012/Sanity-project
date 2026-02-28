// src/data/properties/apartments/samana/parkville.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR (1:1 keys)
// ✅ Production-ready
// ✅ Exact Bunny filenames
// ✅ Samana standard

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/parkville";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("SAMANA PARKVILLE.pdf");
const FACTSHEET_PDF = cdn("SAMANA PARKVILLE FACTSHEET.pdf");
const FLOORPLANS_PDF = cdn("SAMANA PARKVILLE FLOOR PLAN.pdf");
const PAYMENT_PLAN_PDF = cdn("SAMANA PARKVILLE Payment Plan_1.pdf");

// Floor plans
const FP_STUDIO = cdn("Samana Parkville studio floor pla.webp");
const FP_1BR = cdn("Samana Parkville 1br floor plan.webp");
const FP_2BR = cdn("Samana Parkville 2br floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("Blue hour eye level.jpg"),
  cdn("Podium 01.jpg"),
  cdn("Lobby 01.jpg"),
  cdn("Lobby 02.jpg"),
  cdn("Living 01.jpg"),
  cdn("Living 02.jpg"),
  cdn("Living 03.jpg"),
  cdn("Living 04.jpg"),
  cdn("Living 05.jpg"),
  cdn("Bedroom 01.jpg"),
  cdn("Bedroom 02.jpg"),
  cdn("Bedroom.03.jpg"),
  cdn("Bathroom.jpg"),
  cdn("GYM 01.jpg"),
  cdn("GYM 02.jpg"),
  cdn("Cinema.jpg"),
  cdn("Kids area .jpg"),
  cdn("SAUNA.jpg"),
  cdn("walk inside.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2028";
const PAYMENT_PLAN = "Refer to payment plan";
const LOCATION_NAME = "Dubai Land Residence Complex (DLRC)";
const DEVELOPER = "Samana Developers";

// ======================================================
// DATA
// ======================================================
export const samanaParkvilleData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Samana Parkville | Apartments in DLRC Dubai",
      description:
        "Samana Parkville by Samana Developers offers studio, 1 and 2 bedroom apartments in Dubai Land Residence Complex. Starting from AED 789,000 with handover in Q2 2028.",
      keywords:
        "Samana Parkville, Samana DLRC, Parkville by Samana, Dubai apartments",
      canonical: "/properties/apartments/samana/parkville",
    },

    project: {
      name: "Samana Parkville",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 789,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "SAMANA PARKVILLE — MODERN LIVING IN DLRC",
      paragraphs: [
        "Samana Parkville is a contemporary residential development located in Dubai Land Residence Complex, designed to offer modern living with resort-style amenities.",
        `The project features Studio, 1 and 2 bedroom apartments starting from AED 789,000 with handover scheduled for ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Samana Parkville DLRC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "DLRC",
          label: "Prime Community",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "AED 789K",
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
      projectTag: "Samana Parkville",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "420.22 sq.ft",
            "Starting Price": "AED 789,000",
            Handover: HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "767.04 sq.ft",
            "Starting Price": "AED 1,109,000",
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,464.11 sq.ft",
            "Starting Price": "AED 1,644,000",
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
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fitness Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Cinema Room", icon: "🎬", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Sauna & Wellness", icon: "🧖", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Parkville",
      address: LOCATION_NAME,
      lat: 25.0937438,
      lng: 55.3736901,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Connected to major Dubai districts." },
        { icon: "🛍️", text: "Close to retail and lifestyle destinations." },
      ],
    },

    cta: {
      title: "Invest in Samana Parkville",
      description:
        "Request full price lists, availability, and official Samana Developers documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    seo: {
      title: "سمانا باركفيل | شقق في مجمع دبي لاند السكني",
      description:
        "سمانا باركفيل من سمانا للتطوير العقاري يوفر شقق استوديو، غرفة وغرفتين نوم في مجمع دبي لاند السكني بأسعار تبدأ من 789,000 درهم.",
      keywords: "سمانا باركفيل، سمانا، مجمع دبي لاند السكني، شقق دبي",
      canonical: "/properties/apartments/samana/parkville",
    },

    project: {
      name: "سمانا باركفيل",
      developer: "سمانا للتطوير العقاري",
      location: "مجمع دبي لاند السكني",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "789,000 درهم",
      completionDate: "الربع الثاني 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو، غرفة وغرفتين",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سمانا",
      rating: null,
    },

    intro: {
      title: "سمانا باركفيل — أسلوب حياة عصري في دبي لاند",
      paragraphs: [
        "سمانا باركفيل هو مشروع سكني عصري من سمانا للتطوير العقاري يقع في مجمع دبي لاند السكني، ويقدم أسلوب حياة متوازن مع مرافق فاخرة.",
        `تبدأ الأسعار من 789,000 درهم مع تسليم متوقع في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف المعلومات", url: FACTSHEET_PDF, type: "secondary" },
        { title: "خطة الدفع", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "سمانا باركفيل",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "DLRC",
          label: "الموقع",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "789,000 درهم",
          label: "السعر الابتدائي",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "سمانا باركفيل",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "420.22 قدم²",
            "السعر الابتدائي": "789,000 درهم",
            "موعد التسليم": HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "767.04 قدم²",
            "السعر الابتدائي": "1,109,000 درهم",
            "موعد التسليم": HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,464.11 قدم²",
            "السعر الابتدائي": "1,644,000 درهم",
            "موعد التسليم": HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "سينما", icon: "🎬", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "ساونا وعافية", icon: "🧖", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سمانا باركفيل",
      address: "مجمع دبي لاند السكني",
      lat: 25.0937438,
      lng: 55.3736901,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى شارع الشيخ محمد بن زايد." },
        { icon: "🏙️", text: "مرتبط بمناطق دبي الرئيسية." },
        { icon: "🛍️", text: "قريب من مراكز التسوق والخدمات." },
      ],
    },

    cta: {
      title: "استثمر في سمانا باركفيل",
      description:
        "اطلب الأسعار، التوافر، والمستندات الرسمية من سمانا للتطوير العقاري اليوم.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default samanaParkvilleData;
