// src/data/properties/apartments/damac/damac-altitude/damac-altitude.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses EXACT Bunny filenames you listed
// ✅ Strong, accurate “AYKON-style” project paragraphs
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan (your 2BR data)
// ✅ Floorplan image uses EXACT filename: "Altitude de grisogono 2br Floor plan.webp"
// ✅ Location lat/lng kept as you set it

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-altitude";

// Helper to build Bunny CDN URLs safely (encodes spaces, &, ~, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const BROCHURE_PDF = cdn("Altitude Digital Brochure EN.pdf");

// ✅ Floor plan (EXACT filename)
const FP_2BR = cdn("Altitude de grisogono 2br Floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("V1.jpg"),
  cdn("V2.jpg"),
  cdn("V3.jpg"),
  cdn("V4.jpg"),
  cdn("V5.jpg"),
  cdn("V6.jpg"),
  cdn("V7.jpg"),
  cdn("V8.jpg"),
  cdn("V9.jpg"),
  cdn("V10.jpg"),
  cdn("V11.jpg"),
  cdn("V12.jpg"),
  cdn("V13.jpg"),
  cdn("V14.jpg"),
  cdn("V15.jpg"),
  cdn("V15B.jpg"),
  cdn("V16A.jpg"),
  cdn("V16B.jpg"),
  cdn("V17.jpg"),
  cdn("V18.jpg"),
  cdn("V19.jpg"),

  cdn("BUB02F~1.JPG"),
  cdn("BUCC05~1.JPG"),
  cdn("BUSINE~3.JPG"),
  cdn("BUSINE~4.JPG"),

  cdn("Cam 01-09 copy.jpg"),
  cdn("cam 02-05 copy.jpg"),

  cdn("DB2-SL-LIVING&DINING_01.jpg"),
  cdn("DB2-SL-LIVING&DINING_02.jpg"),
  cdn("DB2-SL-LIVING&DINING_03.jpg"),
  cdn("DB2-SL-LIVING&DINING_04.jpg"),
  cdn("DB2-SL-LIVING&DINING_05.jpg"),

  cdn("Business Bay Opal Plot-4_Luxury_Dinning_20230511.jpg"),
  cdn("Business Bay Opal Plot-4_Luxury_Kitchen_20230511.jpg"),

  cdn("Damac Lagoons_Spa_Cam-01_20231214 copy.jpg"),

  cdn("salon_20240119.jpg"),
  cdn("salon 2_20240119.jpg"),
];

export const damacAltitudeData = {
  en: {
    seo: {
      title:
        "DAMAC Altitude by de GRISOGONO | 2BR Apartments in Business Bay | Q1 2028",
      description:
        "DAMAC Altitude by de GRISOGONO is a design-led high-rise address in Business Bay, positioned for buyers who want skyline living close to Downtown Dubai and the Dubai Canal. Explore brochure, full gallery, and the 2BR floor plan with a 60/40 payment plan and Q1 2028 handover.",
      keywords:
        "DAMAC Altitude, de GRISOGONO, Business Bay, Dubai, 2BR apartment, payment plan 60/40, Q1 2028",
      canonical: "/properties/apartments/damac/altitude",
    },

    project: {
      name: "Altitude by DAMAC & de GRISOGONO",
      developer: "DAMAC Properties",
      location: "Business Bay, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 3,334,000",
      completionDate: "Q1 2028",
      paymentPlan: "60% / 40%",
      type: "Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("DB2-SL-LIVING&DINING_05.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "DESIGN-LED SKYLINE LIVING IN BUSINESS BAY",
      paragraphs: [
        "Altitude by DAMAC & de GRISOGONO is shaped around a bold design identity and a premium tower lifestyle, set within Business Bay—one of Dubai’s most in-demand districts for residents who want central connectivity without compromising on a modern, high-rise experience.",
        "The key advantage here is the address: Business Bay sits in the heart of the city’s daily movement, with fast access to Downtown Dubai, the Dubai Canal environment, and major business and lifestyle routes. That balance makes Altitude attractive for end-users and for investors targeting rental demand in a central hub.",
        "Below you’ll find the official brochure, a complete gallery using your exact BunnyCDN filenames, and the 2-bedroom floor plan presented in the strict 4-field format you approved (Total Area / Starting Price / Handover / Payment Plan).",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          category: "Overview",
          fileName: "Altitude Digital Brochure EN.pdf",
          description: "Official Altitude brochure (EN)",
        },
      ],
      imgUrl: cdn("V11.jpg"),
      imgAlt: "Altitude by DAMAC & de GRISOGONO exterior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3,334,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1335.91 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Business Bay",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Altitude Visuals",
      slides: GALLERY,
      projectTag: "Altitude by DAMAC & de GRISOGONO",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1335.91 sq.ft",
            "Starting Price": "AED 3,334,000",
            Handover: "Q1 2028",
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
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym & Fitness", icon: "💪", color: "#d7b46a" },
        { label: "Luxury Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Lifestyle & Dining", icon: "🍽️", color: "#d7b46a" },
        { label: "Prime Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Altitude by DAMAC & de GRISOGONO",
      address: "Business Bay, Dubai, UAE",
      lat: 25.1822694,
      lng: 55.2813387,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "Central Business Bay positioning." },
        { icon: "🌊", text: "Close to the Dubai Canal lifestyle corridor." },
        { icon: "🚗", text: "Easy access to major Dubai roads and hubs." },
      ],
    },

    cta: {
      title: "Interested in Altitude?",
      description:
        "Share your details to receive the latest availability, pricing guidance, and the official brochure for Altitude by DAMAC & de GRISOGONO.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "داماك ألتتيود من دي غريزوغونو | شقق غرفتين في الخليج التجاري | Q1 2028",
      description:
        "داماك ألتتيود من دي غريزوغونو مشروع برج سكني بطابع تصميمي مميز في الخليج التجاري، مناسب لمن يريد أسلوب حياة أبراج قريب من وسط دبي وقناة دبي. استعرض الكتيّب، معرض الصور، ومخطط 2 غرف بخطة دفع 60/40 وتسليم الربع الأول 2028.",
      keywords:
        "داماك ألتتيود, دي غريزوغونو, الخليج التجاري, دبي, شقة غرفتين, 60/40, الربع الأول 2028",
      canonical: "/properties/apartments/damac/altitude",
    },

    project: {
      name: "داماك ألتتيود من دي غريزوغونو",
      developer: "داماك العقارية",
      location: "الخليج التجاري، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "3,334,000 درهم",
      completionDate: "الربع الأول 2028",
      paymentPlan: "60% / 40%",
      type: "شقق سكنية",
      units: "غرفتان نوم",
    },

    hero: {
      backgroundUrl: cdn("DB2-SL-LIVING&DINING_05.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة أبراج بطابع تصميمي في قلب الخليج التجاري",
      paragraphs: [
        "مشروع داماك ألتتيود من دي غريزوغونو يعتمد على هوية تصميمية قوية وتجربة برج سكني راقية، ضمن الخليج التجاري—إحدى أكثر مناطق دبي طلبًا لمن يبحث عن عنوان مركزي واتصال عملي دون التنازل عن أجواء الأبراج الحديثة.",
        "قوة المشروع تبدأ من الموقع: الخليج التجاري يقع في قلب حركة المدينة اليومية، مع وصول سريع لوسط دبي وأجواء قناة دبي، إضافة إلى اتصال سهل بالمحاور الرئيسية. هذا التوازن يجعله خيارًا مناسبًا للسكن والاستثمار ضمن منطقة ذات طلب إيجاري مستمر.",
        "ستجد أدناه الكتيّب الرسمي، ومعرض صور كامل بأسماء ملفات BunnyCDN كما هي تمامًا، بالإضافة إلى مخطط شقة غرفتين بصيغة 4 حقول فقط كما اتفقنا (إجمالي المساحة / السعر / موعد التسليم / خطة الدفع).",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          category: "نظرة عامة",
          fileName: "Altitude Digital Brochure EN.pdf",
          description: "الكتيّب الرسمي لمشروع ألتتيود (EN)",
        },
      ],
      imgUrl: cdn("V11.jpg"),
      imgAlt: "واجهة داماك ألتتيود",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3,334,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1335.91 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "الخليج التجاري",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "داماك ألتتيود من دي غريزوغونو",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1335.91 قدم مربع",
            "السعر الابتدائي": "3,334,000 درهم",
            "موعد التسليم": "الربع الأول 2028",
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
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "لوبي فاخر", icon: "🏢", color: "#d7b46a" },
        { label: "مطاعم وخيارات حياة", icon: "🍽️", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "داماك ألتتيود من دي غريزوغونو",
      address: "الخليج التجاري، دبي، الإمارات",
      lat: 25.1822694,
      lng: 55.2813387,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "تموضع مركزي داخل الخليج التجاري." },
        { icon: "🌊", text: "قريب من أجواء قناة دبي." },
        { icon: "🚗", text: "وصول سريع لمحاور دبي الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم بمشروع ألتتيود؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وإرشادات الأسعار ورابط الكتيّب الرسمي لمشروع داماك ألتتيود من دي غريزوغونو.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacAltitudeData;
