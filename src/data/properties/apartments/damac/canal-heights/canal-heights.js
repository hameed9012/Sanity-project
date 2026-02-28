// src/data/properties/apartments/damac/damac-canal-heights/damac-canal-heights.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses EXACT Bunny filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Floorplan image uses EXACT filename: "canal heights 2br floor plan.webp"
// ✅ Location lat/lng taken from your Google Maps pin
// ✅ FloorPlans specs filled with your provided 2BR numbers (AED 3,538,000 | 60/40 | Q2 2027 | 1350.22 sq.ft)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-canal-heights";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const BROCHURE_PDF = cdn("CANAL HEIGHTS 2 DIGITAL BROCHURE EN.pdf");
const FLOORPLAN_PDF = cdn("CANAL HEIGHTS 2 DIGITAL BROCHURE EN Floor Plan.pdf");

// ✅ Optional extra PDF
const ROOF_VIEW_PDF = cdn("Roof View 2.pdf");

// ✅ Floor plan image (EXACT filename)
const FP_2BR = cdn("canal heights 2br floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("C2-09mar23.png"),
  cdn("C1-08mar23.jpg"),
  cdn("C4-09mar23.jpg"),
  cdn("V7-09mar23.jpg"),
  cdn("V9-09mar23.jpg"),
  cdn("V3B.jpg"),
  cdn("V5B.jpg"),
  cdn("V6.jpg"),

  cdn("Super Lux_Pool Render.jpeg"),

  cdn("LOBBY 2702 001.jpg"),
  cdn("LOBBY 2702 002.jpg"),
  cdn("LOBBY 2702 003.jpg"),
  cdn("lobby 2702 02.jpg"),
  cdn("lift lobby.jpg"),

  cdn("Living room.jpg"),
  cdn("Dinng room.jpg"),
  cdn("bedroom .jpg"),

  cdn("salon 2702.jpg"),
  cdn("salon 2702 01.jpg"),

  cdn("image00001 (1)A.jpg"),
  cdn("image00002.jpg"),

  cdn("CAFFE 2402 (1).png"),
];

export const damacCanalHeightsData = {
  en: {
    seo: {
      title:
        "Canal Heights by DAMAC | 2BR Apartments in Business Bay on Dubai Canal",
      description:
        "Canal Heights by DAMAC is a Dubai Canal-front residential address in Business Bay, designed for premium waterfront living with fast access to Downtown Dubai and key city hubs.",
      keywords:
        "Canal Heights, DAMAC, Business Bay, Dubai Canal, 2BR apartment, Q2 2027, 60/40 payment plan",
      canonical: "/properties/apartments/damac/canal-heights",
    },

    project: {
      name: "Canal Heights",
      developer: "DAMAC Properties",
      location: "Business Bay (Dubai Canal), Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 3,538,000",
      completionDate: "Q2 2027",
      paymentPlan: "60/40",
      type: "Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("C2-09mar23.png"),
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "DUBAI CANAL LIVING WITH BUSINESS BAY CONNECTIVITY",
      paragraphs: [
        "Canal Heights by DAMAC is positioned along the Dubai Canal in Business Bay—one of Dubai’s most consistently in-demand districts for residents and investors. The waterfront setting brings a calmer, lifestyle-driven feel, while the location stays highly practical for day-to-day movement across the city.",
        "From this address, you’re well placed for Downtown Dubai, DIFC, and major arterial roads, making the project suitable for professionals, end-users, and investors targeting strong central demand. The project’s visual language focuses on contemporary luxury: curated interiors, standout lobby spaces, and amenity-led living that complements the canal-side environment.",
        "Below you’ll find the official digital brochure, the floor plan PDF, a dedicated 2-bedroom floor plan image, and the full gallery—linked using your exact BunnyCDN filenames for perfect rendering on your website.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Download Floor Plans (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
        { title: "Roof View (PDF)", url: ROOF_VIEW_PDF, type: "secondary" },
      ],
      imgUrl: cdn("Super Lux_Pool Render.jpeg"),
      imgAlt: "Canal Heights pool render",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3,538,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1350.22 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Dubai Canal",
          label: "Waterfront",
        },
      ],
    },

    gallery: {
      title: "Canal Heights Visuals",
      slides: GALLERY,
      projectTag: "Canal Heights",
    },

    // ✅ FloorPlans: ONLY the 4 fields you agreed on (filled with your 2BR data)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1350.22 sq.ft",
            "Starting Price": "AED 3,538,000",
            Handover: "Q2 2027",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Dubai Canal Waterfront", icon: "🌊", color: "#d7b46a" },
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym & Fitness", icon: "💪", color: "#d7b46a" },
        { label: "Luxury Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Central Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Canal Heights",
      address: "Canal Heights 1 & 2, Business Bay, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.1837367,
      lng: 55.2792066,
      zoom: 18,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "Business Bay with quick access to Downtown Dubai.",
        },
        { icon: "🌊", text: "Steps from Dubai Canal promenades and views." },
        { icon: "🚗", text: "Easy access to major roads and city hubs." },
      ],
    },

    cta: {
      title: "Interested in Canal Heights?",
      description:
        "Share your details to receive availability, pricing guidance, and the official documents for Canal Heights by DAMAC.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "كانال هايتس من داماك | شقق غرفتين في الخليج التجاري على قناة دبي",
      description:
        "كانال هايتس من داماك عنوان سكني على واجهة قناة دبي في الخليج التجاري، يجمع بين أسلوب حياة الواجهة المائية وسهولة الوصول لمراكز الأعمال وأبرز وجهات دبي.",
      keywords:
        "كانال هايتس, داماك, الخليج التجاري, قناة دبي, شقة غرفتين, Q2 2027, 60/40",
      canonical: "/properties/apartments/damac/canal-heights",
    },

    project: {
      name: "كانال هايتس",
      developer: "داماك العقارية",
      location: "الخليج التجاري (قناة دبي)، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "3,538,000 درهم",
      completionDate: "الربع الثاني 2027",
      paymentPlan: "60/40",
      type: "شقق سكنية",
      units: "غرفتان نوم",
    },

    hero: {
      backgroundUrl: cdn("C2-09mar23.png"),
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "حياة على قناة دبي مع اتصال قوي بالخليج التجاري",
      paragraphs: [
        "يقع مشروع كانال هايتس من داماك على قناة دبي ضمن الخليج التجاري—وهي من أكثر المناطق طلبًا للسكن والاستثمار في دبي. الواجهة المائية تمنح أسلوب حياة أكثر هدوءًا وجاذبية، بينما يبقى الموقع عمليًا وقريبًا من قلب المدينة.",
        "من هذا العنوان، يمكنك الوصول بسهولة إلى وسط دبي وDIFC والمحاور الرئيسية، ما يجعل المشروع مناسبًا للمقيمين والمهنيين وكذلك للمستثمرين الذين يستهدفون منطقة ذات طلب مركزي قوي. ويعكس المشروع طابعًا عصريًا فاخرًا من حيث المساحات الداخلية واللوبي والمرافق المصممة لتكمل أجواء القناة.",
        "ستجد أدناه الكتيّب الرقمي الرسمي وملف مخططات الطوابق (PDF) وصورة مخطط غرفتين، بالإضافة إلى معرض الصور الكامل—وكل الروابط مبنية على أسماء ملفات BunnyCDN الخاصة بك كما هي لضمان عرض مثالي على الموقع.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "تحميل مخططات الطوابق (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
        { title: "Roof View (PDF)", url: ROOF_VIEW_PDF, type: "secondary" },
      ],
      imgUrl: cdn("Super Lux_Pool Render.jpeg"),
      imgAlt: "تصوّر المسبح في كانال هايتس",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3,538,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1350.22 قدم²",
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
      projectTag: "كانال هايتس",
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
            "إجمالي المساحة": "1350.22 قدم مربع",
            "السعر الابتدائي": "3,538,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "واجهة قناة دبي", icon: "🌊", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "لوبي فاخر", icon: "🏢", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كانال هايتس",
      address: "Canal Heights 1 & 2، الخليج التجاري، دبي، الإمارات",
      lat: 25.1837367,
      lng: 55.2792066,
      zoom: 18,
      proximityFeatures: [
        { icon: "🏙️", text: "الخليج التجاري مع قرب واضح من وسط دبي." },
        { icon: "🌊", text: "بالقرب من ممشى قناة دبي وأجواء الواجهة المائية." },
        { icon: "🚗", text: "وصول سريع للطرق الرئيسية ومراكز الأعمال." },
      ],
    },

    cta: {
      title: "مهتم بمشروع كانال هايتس؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وتفاصيل الوحدات والوثائق الرسمية لمشروع كانال هايتس من داماك.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacCanalHeightsData;
