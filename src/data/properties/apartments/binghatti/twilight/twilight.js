// src/data/properties/apartments/binghatti/twilight.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/twilight
// ✅ Uses ONLY the exact filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Floorplan image uses EXACT filename: "Binghatti Twilight 2br floor plan.webp"
// ✅ Location lat/lng taken from your Google Maps pin
// ✅ Filled with your provided 2BR numbers (AED 1,908,000 | 70/30 | Q1 2026 | 1074.35 sqft)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/twilight";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs (exact filenames)
const BROCHURE_PDF = cdn("binghatti-twilight-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-twilight-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-twilight-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-twilight-location.pdf");

// ✅ Floor plan image (exact filename)
const FP_2BR = cdn("Binghatti Twilight 2br floor plan.webp");

// ✅ Gallery images (exact filenames)
const GALLERY = [
  cdn("Exterior-1.jpg"),
  cdn("Exterior-2.jpg"),
  cdn("Exterior-3.jpg"),
  cdn("Exterior-4.jpg"),
  cdn("Exterior-5.jpg"),
  cdn("Exterior-6.jpg"),
  cdn("Exterior-7.jpg"),
];

// ✅ Hero / Intro images (from your real files)
const HERO_BG = cdn("Exterior-7.jpg");
const INTRO_MAIN = cdn("Exterior-4.jpg");

// ✅ Your standard Binghatti square image
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

export const twilightData = {
  en: {
    seo: {
      title:
        "Binghatti Twilight | 2BR Apartments in Al Jaddaf Waterfront | Q1 2026 | 70/30",
      description:
        "Binghatti Twilight is a contemporary residential project in Al Jaddaf Waterfront, offering design-led architecture, practical layouts, and strong connectivity to Dubai’s major destinations. Explore the official brochure, project facts, location document, floor plans, and full visuals.",
      keywords:
        "Binghatti Twilight, Al Jaddaf Waterfront, 2BR apartment, Q1 2026, 70/30 payment plan, Dubai",
      canonical: "/properties/apartments/binghatti/twilight",
    },

    project: {
      name: "Binghatti Twilight",
      developer: "Binghatti",
      location: "Al Jaddaf Waterfront, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,908,000",
      completionDate: "Q1 2026",
      paymentPlan: "70/30",
      type: "Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "A CONNECTED WATERFRONT ADDRESS IN AL JADDAF",
      paragraphs: [
        "Binghatti Twilight is positioned in Al Jaddaf Waterfront—an emerging Dubai district known for its strategic connectivity, lifestyle convenience, and proximity to key hubs. The project reflects Binghatti’s modern design identity with bold architecture and functional planning built for real daily living.",
        "Al Jaddaf Waterfront appeals to both end-users and investors thanks to its access to major routes and nearby city anchors. Whether you’re commuting, visiting Downtown, or moving around Dubai, the location supports a practical urban rhythm while still offering a calmer residential setting.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Document", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Twilight exterior visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,908,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1074.35 sqft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Al Jaddaf Waterfront",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Twilight Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Twilight",
    },

    // ✅ FloorPlans: ONLY the 4 fields you approved
    // ✅ Payment Plan formatted like your example: "70% / 30%"
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1074.35 sqft",
            "Starting Price": "AED 1,908,000",
            Handover: "Q1 2026",
            "Payment Plan": "70% / 30%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Waterfront District", icon: "🌊", color: "#d7b46a" },
        { label: "Modern Architecture", icon: "✨", color: "#d7b46a" },
        { label: "Practical Layouts", icon: "📐", color: "#d7b46a" },
        { label: "City Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Twilight",
      address: "Binghatti Twilight, Al Jaddaf Waterfront, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.2246875,
      lng: 55.3409375,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Quick access to major roads and key Dubai destinations.",
        },
        {
          icon: "🏙️",
          text: "Connected city address with strong residential and rental demand.",
        },
        {
          icon: "🌊",
          text: "Waterfront setting that balances lifestyle and convenience.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Twilight?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Twilight.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "بن غاطي تويلايت | شقق غرفتين نوم في واجهة الجداف المائية | الربع الأول 2026 | 70/30",
      description:
        "بن غاطي تويلايت مشروع سكني عصري في واجهة الجداف المائية بدبي، يجمع بين هوية تصميمية حديثة وتخطيطات عملية وموقع متصل بقلب المدينة. استعرض الكتيّب الرسمي وملف الحقائق ووثيقة الموقع ومخططات الطوابق ومعرض الصور.",
      keywords:
        "بن غاطي تويلايت, واجهة الجداف المائية, شقة غرفتين نوم, الربع الأول 2026, خطة دفع 70/30, دبي",
      canonical: "/properties/apartments/binghatti/twilight",
    },

    project: {
      name: "بن غاطي تويلايت",
      developer: "بن غاطي",
      location: "واجهة الجداف المائية، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,908,000 درهم",
      completionDate: "الربع الأول 2026",
      paymentPlan: "70/30",
      type: "شقق سكنية",
      units: "غرفتين نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "عنوان متصل ضمن واجهة الجداف المائية",
      paragraphs: [
        "يقع مشروع بن غاطي تويلايت ضمن واجهة الجداف المائية، وهي من المناطق المتنامية في دبي التي تتميز بسهولة الوصول إلى الوجهات الرئيسية وقربها من مراكز المدينة. يعكس المشروع الهوية المعمارية الحديثة لبن غاطي مع تصميم جريء وتخطيط عملي يناسب الحياة اليومية.",
        "تجذب واجهة الجداف المائية الساكنين والمستثمرين على حد سواء بفضل الاتصال القوي ومحاور الطرق الرئيسية، ما يجعلها خيارًا مناسبًا للسكن طويل الأمد أو للاستثمار بعوائد إيجارية واعدة.",
        "ستجد أدناه الكتيّب الرسمي وملف الحقائق ووثيقة الموقع وملف مخططات الطوابق الكامل، بالإضافة إلى صورة مخطط غرفتين نوم ومعرض الصور الكامل—وجميع الروابط مبنية على أسماء الملفات كما هي لضمان عمل الصفحة 100% دون أي تعديلات.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTS_PDF, type: "secondary" },
        { title: "وثيقة الموقع", url: LOCATION_PDF, type: "secondary" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي تويلايت الخارجية",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,908,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1074.35 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "واجهة الجداف المائية",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي تويلايت",
    },

    // ✅ AR FloorPlans: same structure + Arabic keys (4 fields only)
    // ✅ Payment Plan formatted like your example: "70% / 30%"
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1074.35 قدم مربع",
            "السعر الابتدائي": "1,908,000 درهم",
            "موعد التسليم": "الربع الأول 2026",
            "خطة الدفع": "70% / 30%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "منطقة واجهة مائية", icon: "🌊", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
        { label: "تخطيط عملي", icon: "📐", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "قيمة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي تويلايت",
      address: "بن غاطي تويلايت، واجهة الجداف المائية، دبي، الإمارات",
      lat: 25.2246875,
      lng: 55.3409375,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "وصول سريع إلى الطرق الرئيسية ووجهات دبي." },
        { icon: "🏙️", text: "موقع متصل بقيمة طلب سكني وإيجاري قوية." },
        { icon: "🌊", text: "أجواء واجهة مائية تجمع بين الراحة والعملية." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي تويلايت؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات والوثائق الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default twilightData;
