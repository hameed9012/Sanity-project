// src/data/properties/apartments/danube/eleganz.js
// ✅ Folder: /danube/eleganz
// ✅ Ready project (Secondary) per spreadsheet
// ✅ Exact filenames you listed

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/danube/eleganz";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png";

const BROCHURE_PDF = cdn("ELEGANZ.pdf");
const FLOORPLANS_PDF = cdn("eleganz-floor-plans.pdf");

const HERO_BG = cdn("3.webp");
const INTRO_MAIN = cdn("16.webp");

const FP_1BR = cdn("Eleganz 1br floor plan.webp");

// Gallery (your 1..20 webp)
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
];

const HANDOVER = "Ready";
const PAYMENT_PLAN = "100%";

export const eleganzData = {
  en: {
    seo: {
      title: "Eleganz by Danube | 1BR Ready in JVC | From AED 1,642,000",
      description:
        "Eleganz by Danube in JVC offers ready 1-bedroom residences starting from AED 1,642,000 with a 100% payment plan.",
      keywords: "Eleganz by Danube, JVC, ready apartment, 1BR, 100% payment",
      canonical: "/properties/apartments/danube/eleganz",
    },

    project: {
      name: "Eleganz",
      developer: "Danube",
      location: "JVC, Dubai, UAE",
      status: "Secondary",
      startingPrice: "AED 1,642,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1BR",
      market: "secondary",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Danube Properties",
      rating: null,
    },

    intro: {
      title: "ELEGANZ — READY LIVING IN JVC",
      paragraphs: [
        "Eleganz by Danube is a ready residential option in JVC for buyers seeking immediate move-in potential.",
        `Starting from AED 1,642,000 with a ${PAYMENT_PLAN} payment plan.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Eleganz visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,642,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1019 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "JVC",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Eleganz Visuals",
      slides: GALLERY,
      projectTag: "Eleganz",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "1019 sq.ft",
            "Starting Price": "AED 1,642,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Ready Community Living", icon: "🏡", color: "#d7b46a" },
        { label: "JVC Location", icon: "📍", color: "#d7b46a" },
        { label: "Spacious Layout", icon: "📐", color: "#d7b46a" },
        { label: "Investor Friendly", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Eleganz",
      address: "Eleganz by Danube, JVC, Dubai, UAE",
      lat: 25.0495833,
      lng: 55.1974827,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access across Dubai." },
        { icon: "🏙️", text: "Located in JVC." },
        { icon: "🛍️", text: "Close to everyday amenities." },
      ],
    },

    cta: {
      title: "Interested in Eleganz?",
      description:
        "Share your details to receive availability and the official documents for Eleganz.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  ar: {
    seo: {
      title: "إليغانز من دانوب | 1 غرفة جاهز في JVC | يبدأ من 1,642,000 درهم",
      description:
        "إليغانز من دانوب في JVC يوفر وحدات جاهزة بغرفة نوم واحدة تبدأ من 1,642,000 درهم مع خطة دفع 100%.",
      keywords: "إليغانز دانوب, JVC, جاهز, 1 غرفة, 100%",
      canonical: "/properties/apartments/danube/eleganz",
    },

    project: {
      name: "إليغانز",
      developer: "دانوب",
      location: "JVC، دبي",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "1,642,000 درهم",
      completionDate: "جاهز",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "1BR",
      market: "secondary",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "دانوب العقارية",
      rating: null,
    },

    intro: {
      title: "إليغانز — سكن جاهز في JVC",
      paragraphs: [`يبدأ السعر من 1,642,000 درهم مع خطة دفع ${PAYMENT_PLAN}.`],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور إليغانز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,642,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1019 قدم²",
          label: "المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "JVC",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "إليغانز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "1019 قدم مربع",
            "السعر الابتدائي": "1,642,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "جاهز للسكن", icon: "🏡", color: "#d7b46a" },
        { label: "موقع JVC", icon: "📍", color: "#d7b46a" },
        { label: "مساحة واسعة", icon: "📐", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "إليغانز",
      address: "إليغانز من دانوب، JVC، دبي",
      lat: 25.0495833,
      lng: 55.1974827,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة وصول قوية داخل دبي." },
        { icon: "🏙️", text: "ضمن منطقة JVC." },
        { icon: "🛍️", text: "بالقرب من الخدمات اليومية." },
      ],
    },

    cta: {
      title: "مهتم بإليغانز؟",
      description: "أرسل بياناتك للحصول على التوافر والملفات الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default eleganzData;
