// src/data/properties/apartments/damac/damac-canal-crown/damac-canal-crown.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses EXACT Bunny filenames you provided (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR) + floorPlans has ONLY 4 fields
// ✅ Floorplan image uses EXACT filename: "canal crown 2br floor plan.webp"
// ✅ Location lat/lng taken from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-canal-crown";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const BROCHURE_PDF = cdn("CANAL CROWN BROCHURE DIGITAL EN.pdf");

// ✅ Floor plan image (EXACT filename)
const FP_2BR = cdn("canal crown 2br floor plan.webp");

// ✅ Optional: payment plan image (still in gallery too)
const PAYMENT_PLAN_IMAGE = cdn("CC launch Payment Plan.jpg");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("1 copy.jpg"),
  cdn("2 copy.png"),
  cdn("3 A3.jpg"),
  cdn("4 copy.jpg"),
  cdn("5 copy.jpg"),
  cdn("5_View01 copy.jpg"),
  cdn("5_View02 copy.jpg"),
  cdn("5_View03 copy.jpg"),
  cdn("5_View04 copy.jpg"),

  cdn("GF LIFT LOBBY.jpg"),
  cdn("CC launch Payment Plan.jpg"),

  cdn("V9.jpg"),
  cdn("V13.jpg"),
  cdn("V14.jpg"),
  cdn("V15B.jpg"),
  cdn("V16B.jpg"),

  cdn("view_View01_1 copy.jpg"),
  cdn("view_View02 (1) copy.jpg"),
  cdn("view3_1 copy.jpg"),
];

export const damacCanalCrownData = {
  en: {
    seo: {
      title:
        "Canal Crown by DAMAC | 2BR Apartments in Business Bay, Dubai Canal",
      description:
        "Canal Crown by DAMAC is a Dubai Canal-front residential tower in Business Bay, offering premium waterfront living with a 60/40 payment plan and handover in Q4 2027.",
      keywords:
        "Canal Crown, DAMAC, Business Bay, Dubai Canal, 2BR apartment, 60/40 payment plan, Q4 2027",
      canonical: "/properties/apartments/damac/canal-crown",
    },

    project: {
      name: "Canal Crown",
      developer: "DAMAC Properties",
      location: "Business Bay (Dubai Canal), Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 3,500,000",
      completionDate: "Q4 2027",
      paymentPlan: "60/40",
      type: "Apartments",
      units: "2 Bedroom",
    },

    hero: {
      // No video provided; use a strong waterfront/hero visual
      backgroundUrl: cdn("view_View02 (1) copy.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "WATERFRONT LIVING ON THE DUBAI CANAL IN BUSINESS BAY",
      paragraphs: [
        "Canal Crown by DAMAC is positioned directly along the Dubai Canal, combining a waterfront address with the practicality of Business Bay—a district known for its central connectivity and proximity to Downtown Dubai.",
        "The project is designed for residents who value skyline views, canal-side lifestyle, and quick access to Dubai’s key commercial and leisure hubs. From daily commutes to weekend plans, you’re placed within minutes of the city’s main arteries and destinations.",
        "Below you’ll find the official digital brochure, a dedicated 2-bedroom floor plan image, and the complete project gallery—built using your exact BunnyCDN filenames to ensure your website renders perfectly with zero manual fixes.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
      ],
      imgUrl: cdn("view_View01_1 copy.jpg"),
      imgAlt: "Canal Crown tower and Dubai Canal view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3,500,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1408.24 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Dubai Canal",
          label: "Waterfront Address",
        },
      ],
    },

    gallery: {
      title: "Canal Crown Visuals",
      slides: GALLERY,
      projectTag: "Canal Crown",
    },

    // ✅ FloorPlans: ONLY the 4 fields you requested (with your 2BR data)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1408.24 sq.ft",
            "Starting Price": "AED 3,500,000",
            Handover: "Q4 2027",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Dubai Canal Waterfront", icon: "🌊", color: "#d7b46a" },
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym & Fitness", icon: "💪", color: "#d7b46a" },
        { label: "Lobby & Concierge", icon: "🏢", color: "#d7b46a" },
        { label: "Business Bay Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Canal Crown",
      address: "Damac Canal Crown, Business Bay, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.1823992,
      lng: 55.2718197,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "Minutes from Downtown Dubai and Business Bay hubs.",
        },
        { icon: "🌊", text: "Front-row Dubai Canal lifestyle and views." },
        { icon: "🚗", text: "Quick access to major roads and city districts." },
      ],
    },

    cta: {
      title: "Interested in Canal Crown?",
      description:
        "Share your details to receive the latest availability, unit options, and the official brochure for Canal Crown by DAMAC.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "كانال كراون من داماك | شقق غرفتين في الخليج التجاري على قناة دبي",
      description:
        "كانال كراون من داماك برج سكني على واجهة قناة دبي في الخليج التجاري، بخطة دفع 60/40 وتسليم في الربع الرابع 2027.",
      keywords:
        "كانال كراون, داماك, الخليج التجاري, قناة دبي, شقة غرفتين, 60/40, Q4 2027",
      canonical: "/properties/apartments/damac/canal-crown",
    },

    project: {
      name: "كانال كراون",
      developer: "داماك العقارية",
      location: "الخليج التجاري (قناة دبي)، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "3,500,000 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: "60/40",
      type: "شقق سكنية",
      units: "غرفتان نوم",
    },

    hero: {
      backgroundUrl: cdn("view_View02 (1) copy.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "حياة على الواجهة المائية لقناة دبي في قلب الخليج التجاري",
      paragraphs: [
        "يقع مشروع كانال كراون من داماك مباشرة على قناة دبي، ليجمع بين عنوان على الواجهة المائية وسهولة الوصول التي تشتهر بها منطقة الخليج التجاري، مع قرب واضح من وسط دبي.",
        "يستهدف المشروع الباحثين عن إطلالات على الأفق وأسلوب حياة بمحاذاة القناة، مع موقع عملي يختصر المسافات إلى أبرز المراكز التجارية والترفيهية في دبي.",
        "ستجد أدناه الكتيّب الرقمي الرسمي، وصورة مخطط شقة غرفتين، ومعرض الصور الكامل—وجميع الروابط مبنية على أسماء ملفات BunnyCDN الخاصة بك كما هي تمامًا لضمان عرض مثالي على الموقع دون أي تعديلات يدوية.",
      ],
      brochures: [{ title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" }],
      imgUrl: cdn("view_View01_1 copy.jpg"),
      imgAlt: "كانال كراون وإطلالة قناة دبي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3,500,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1408.24 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "قناة دبي",
          label: "واجهة مائية",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "كانال كراون",
    },

    // ✅ AR FloorPlans: same structure + type="apartments" + Arabic keys (4 fields only)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1408.24 قدم مربع",
            "السعر الابتدائي": "3,500,000 درهم",
            "موعد التسليم": "الربع الرابع 2027",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "واجهة قناة دبي", icon: "🌊", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "لوبي وخدمات", icon: "🏢", color: "#d7b46a" },
        {
          label: "سهولة التنقل في الخليج التجاري",
          icon: "🛣️",
          color: "#d7b46a",
        },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كانال كراون",
      address: "Damac Canal Crown، الخليج التجاري، دبي، الإمارات",
      lat: 25.1823992,
      lng: 55.2718197,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "قريب من وسط دبي ومحاور الأعمال في الخليج التجاري.",
        },
        { icon: "🌊", text: "إطلالات وأجواء الواجهة المائية لقناة دبي." },
        { icon: "🚗", text: "وصول سريع للطرق الرئيسية ومناطق دبي." },
      ],
    },

    cta: {
      title: "مهتم بمشروع كانال كراون؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وتفاصيل الوحدات وروابط الكتيّب الرسمي لمشروع كانال كراون من داماك.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacCanalCrownData;
