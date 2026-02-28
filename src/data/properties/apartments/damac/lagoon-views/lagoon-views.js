// src/data/properties/apartments/damac/damac-lagoon-views/damac-lagoon-views.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ FULL EN + AR (same blueprint)
// ✅ Uses ONLY your Bunny filenames (ignores .DS_Store)
// ✅ FloorPlans = 4 fields ONLY (Total Area / Starting Price / Handover / Payment Plan)
// ✅ Includes Payment Plan JPGs
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-lagoon-views";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs
const BROCHURE_PDF = cdn("DAMAC LAGOON VIEWS - Digital Brochure (EN) V.02.pdf");
const BROCHURE_ALT_PDF = cdn(
  "DAMAC LAGOONS – LAGOON VIEWS – Digital Brochure (EN).pdf",
);

// Payment plan images
const PAYMENT_PLAN_LAUNCH = cdn("LAGOON VIEWS – Launch Payment Plan.jpg");
const PAYMENT_PLAN_REGULAR = cdn("LAGOON VIEWS – Regular Payment Plan.jpg");

// Floor plan images
const FP_1BR = `https://luxury-real-estate-media.b-cdn.net/damac/damac-lagoon-views/Damac%20lagoon%20views%201br%20%20floor%20plan%20.png`;
const FP_2BR = cdn("Damac lagoon views 2br floor plan.png");

// Gallery (EXACT filenames)
const GALLERY = [
  cdn("DAMAC - LAGOON VIEWS - 01.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 02.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 03.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 04.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 05.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 06.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 07.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 08.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 09.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 10.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 11.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 12.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 13.jpg"),
  cdn("DAMAC - LAGOON VIEWS - 14.JPG"),
  cdn("DAMAC - LAGOON VIEWS - 15.JPG"),
  cdn("DAMAC - LAGOON VIEWS - 16.jpg"),
];

export const damacLagoonViewsData = {
  en: {
    seo: {
      title:
        "Lagoon Views by DAMAC | 1 & 2 Bedroom Apartments in DAMAC Lagoons",
      description:
        "Lagoon Views by DAMAC in DAMAC Lagoons offers waterfront-inspired living with resort-style amenities. Explore 1 & 2 bedroom apartments with official brochure, payment plans, and floor plans.",
      keywords:
        "DAMAC Lagoon Views, DAMAC Lagoons, 1 bedroom apartment, 2 bedroom apartment, Dubai, payment plan, Q1 2027",
      canonical: "/properties/apartments/damac/lagoon-views",
    },

    project: {
      name: "DAMAC Lagoon Views",
      developer: "DAMAC Properties",
      location: "DAMAC Lagoons, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,620,000",
      completionDate: "Q1 2027",
      paymentPlan: "60/40",
      type: "Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("DAMAC - LAGOON VIEWS - 05.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "RESORT-STYLE LIVING INSIDE DAMAC LAGOONS",
      paragraphs: [
        "Lagoon Views by DAMAC is set within the DAMAC Lagoons master community—one of Dubai’s most lifestyle-driven residential destinations inspired by waterfront leisure. The project is designed around a resort-like atmosphere, blending everyday convenience with a holiday-style setting.",
        "The community concept emphasizes walkability, curated amenities, and an environment built for relaxation and recreation. This positioning makes Lagoon Views attractive for end users seeking a distinctive living experience, and for investors targeting a community-led rental proposition.",
        "Below you’ll find the official brochure PDFs, the payment plan images (launch and regular), the 1BR and 2BR floor plan images, and the full gallery—linked using your exact BunnyCDN filenames for perfect website rendering.",
      ],
      brochures: [
        { title: "Download Brochure (V.02)", url: BROCHURE_PDF, type: "main" },
        {
          title: "Download Brochure (Alt)",
          url: BROCHURE_ALT_PDF,
          type: "secondary",
        },
        {
          title: "Launch Payment Plan",
          url: PAYMENT_PLAN_LAUNCH,
          type: "secondary",
        },
        {
          title: "Regular Payment Plan",
          url: PAYMENT_PLAN_REGULAR,
          type: "secondary",
        },
      ],
      imgUrl: cdn("DAMAC - LAGOON VIEWS - 01.jpg"),
      imgAlt: "Lagoon Views by DAMAC exterior",
      floatingCards: [
        { icon: "💰", value: "AED 1,620,000", label: "Starting Price" },
        { icon: "📐", value: "803.85 sq.ft", label: "1BR Total Area" },
        { icon: "📅", value: "Q1 2027", label: "Handover" },
      ],
    },

    gallery: {
      title: "Lagoon Views Visuals",
      slides: GALLERY,
      projectTag: "DAMAC Lagoon Views",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "803.85 sq.ft",
            "Starting Price": "AED 1,620,000",
            Handover: "Q1 2027",
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
            "Total Area": "1157.00 sq.ft",
            "Starting Price": "AED 2,330,000",
            Handover: "Q1 2027",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Lagoon-Inspired Community", icon: "🌊", color: "#d7b46a" },
        { label: "Resort-Style Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Family-Friendly Spaces", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "Community Leisure", icon: "🏝️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC Lagoon Views",
      address: "DAMAC Lagoon Views, DAMAC Lagoons, Dubai, UAE",
      lat: 25.005984,
      lng: 55.229296,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏝️", text: "Located inside the DAMAC Lagoons community." },
        { icon: "🚗", text: "Well-connected to key Dubai road networks." },
        {
          icon: "🏙️",
          text: "Lifestyle-driven community designed for residents and investors.",
        },
      ],
    },

    cta: {
      title: "Interested in Lagoon Views?",
      description:
        "Share your details to receive availability, pricing guidance, and the official documents for Lagoon Views by DAMAC.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "لاجون فيوز من داماك | شقق غرفة وغرفتين في داماك لاجونز",
      description:
        "لاجون فيوز من داماك ضمن مجتمع داماك لاجونز يقدم أسلوب حياة مستوحى من الواجهة المائية مع مرافق بطابع منتجعات. اطّلع على الكتيّب وخطط الدفع ومخططات الوحدات.",
      keywords:
        "لاجون فيوز, داماك لاجونز, داماك, شقق دبي, خطة دفع, الربع الأول 2027",
      canonical: "/properties/apartments/damac/lagoon-views",
    },

    project: {
      name: "لاجون فيوز من داماك",
      developer: "داماك العقارية",
      location: "داماك لاجونز، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,620,000 درهم",
      completionDate: "الربع الأول 2027",
      paymentPlan: "60/40",
      type: "شقق سكنية",
      units: "غرفة وغرفتان",
    },

    hero: {
      backgroundUrl: cdn("DAMAC - LAGOON VIEWS - 05.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة منتجع داخل داماك لاجونز",
      paragraphs: [
        "يقع مشروع لاجون فيوز من داماك ضمن مجتمع داماك لاجونز—أحد أكثر الوجهات السكنية في دبي تركيزًا على نمط الحياة، والمستوحى من أجواء الواجهة المائية والمنتجعات.",
        "يركّز مفهوم المجتمع على المرافق الترفيهية والمساحات المفتوحة وتجربة معيشة يومية بطابع عطلة، ما يجعله مناسبًا للسكن وكذلك جذابًا للاستثمار من حيث الطلب على مجتمعات نمط الحياة.",
        "ستجد أدناه الكتيّب الرسمي وملفات خطة الدفع (إطلاق/عادي)، بالإضافة إلى مخططات 1BR و2BR ومعرض الصور الكامل—وجميع الروابط مبنية على أسماء ملفات BunnyCDN الخاصة بك كما هي لضمان عرض مثالي على الموقع.",
      ],
      brochures: [
        { title: "تحميل الكتيّب (V.02)", url: BROCHURE_PDF, type: "main" },
        {
          title: "تحميل كتيّب إضافي",
          url: BROCHURE_ALT_PDF,
          type: "secondary",
        },
        {
          title: "خطة الدفع (الإطلاق)",
          url: PAYMENT_PLAN_LAUNCH,
          type: "secondary",
        },
        {
          title: "خطة الدفع (العادية)",
          url: PAYMENT_PLAN_REGULAR,
          type: "secondary",
        },
      ],
      imgUrl: cdn("DAMAC - LAGOON VIEWS - 01.jpg"),
      imgAlt: "واجهة لاجون فيوز من داماك",
      floatingCards: [
        { icon: "💰", value: "1,620,000 درهم", label: "السعر يبدأ من" },
        { icon: "📐", value: "803.85 قدم²", label: "مساحة 1BR" },
        { icon: "📅", value: "الربع الأول 2027", label: "موعد التسليم" },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "لاجون فيوز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "803.85 قدم²",
            "السعر الابتدائي": "1,620,000 درهم",
            "موعد التسليم": "الربع الأول 2027",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1157.00 قدم²",
            "السعر الابتدائي": "2,330,000 درهم",
            "موعد التسليم": "الربع الأول 2027",
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
        { label: "مجتمع مستوحى من اللاجون", icon: "🌊", color: "#d7b46a" },
        { label: "مسابح بطابع منتجع", icon: "🏊", color: "#d7b46a" },
        { label: "لياقة وعافية", icon: "💪", color: "#d7b46a" },
        { label: "مناسب للعائلات", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "مناطق ترفيه", icon: "🏝️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "لاجون فيوز من داماك",
      address: "داماك لاجونز، دبي، الإمارات",
      lat: 25.005984,
      lng: 55.229296,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏝️", text: "داخل مجتمع داماك لاجونز." },
        { icon: "🚗", text: "اتصال جيد بالطرق الرئيسية في دبي." },
        { icon: "🏙️", text: "مجتمع نمط حياة مناسب للسكن والاستثمار." },
      ],
    },

    cta: {
      title: "مهتم بمشروع لاجون فيوز؟",
      description:
        "أرسل بياناتك للحصول على التوافر وتوجيه الأسعار والوثائق الرسمية لمشروع لاجون فيوز من داماك.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacLagoonViewsData;
