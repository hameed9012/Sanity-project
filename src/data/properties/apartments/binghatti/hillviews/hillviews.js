// src/data/properties/apartments/binghatti/hillviews.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/hillviews
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/hillviews";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("binghatti-hillviews-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-hillviews-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-hillviews-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-hillviews-location.pdf");

// Floor plan image (EXACT filename)
const FP_STUDIO = cdn("Binghatti hillviews studio floor plan.webp");

// Gallery (EXACT filenames)
const GALLERY = [
  cdn("Hillviews-1.jpg"),
  cdn("Hillviews-2.jpg"),
  cdn("Hillviews-3.jpg"),
  cdn("Hillviews-4.jpg"),
  cdn("Hillviews-5.jpg"),
  cdn("Hillviews-6.jpg"),
  cdn("Hillviews-7.jpg"),
];

// Hero / Intro images (real files)
const HERO_BG = cdn("Hillviews-3.jpg");
const INTRO_MAIN = cdn("Hillviews-2.jpg");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// Your unit info
const HANDOVER = "Q1 2026";
const PAYMENT_PLAN = "70% / 30%";

export const hillviewsData = {
  en: {
    seo: {
      title:
        "Binghatti Hillviews in Dubai Science Park | Studio Apartments | From AED 824,000",
      description:
        "Binghatti Hillviews in Dubai Science Park offers a modern studio lifestyle designed for practicality, comfort, and connectivity. Studios start from AED 824,000 with a 70% / 30% payment plan and expected handover in Q1 2026.",
      keywords:
        "Binghatti Hillviews, Dubai Science Park, studio apartment, Q1 2026, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/hillviews",
    },

    project: {
      name: "Binghatti Hillviews",
      developer: "Binghatti",
      location: "Dubai Science Park, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 824,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "BINGHATTI HILLVIEWS — SMART STUDIO LIVING",
      paragraphs: [
        "Binghatti Hillviews is located in Dubai Science Park, a district recognized for its connectivity and steady residential demand. The project is positioned for residents who want a practical address with easy access to everyday essentials and key routes.",
        "The studio concept is designed around efficiency and comfort—ideal for modern urban routines, first-time buyers, or investors seeking a compact layout in a well-placed community.",
        `Studios start from AED 824,000 with expected handover in ${HANDOVER} and a ${PAYMENT_PLAN} payment plan. Download the official brochure, project facts, location document, and floor plans below.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "secondary" },
        { title: "Location Document", url: LOCATION_PDF, type: "secondary" },
        { title: "Floor Plans (PDF)", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Hillviews visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 824,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "410.43 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Science Park",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Hillviews Visuals",
      slides: GALLERY,
      projectTag: "Binghatti Hillviews",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "410.43 sq.ft",
            "Starting Price": "AED 824,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Modern Studio Lifestyle", icon: "✨", color: "#d7b46a" },
        { label: "Practical Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
        { label: "Comfort-Focused Layouts", icon: "🛋️", color: "#d7b46a" },
        { label: "Investor-Friendly Option", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Hillviews",
      address: "Binghatti Hillviews, Dubai Science Park, Dubai, UAE",
      lat: 25.0785564,
      lng: 55.2489443,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Strong road connectivity to key Dubai destinations.",
        },
        { icon: "🧭", text: "Well-positioned within Dubai Science Park." },
        {
          icon: "🛍️",
          text: "Close to daily services, retail, and essentials.",
        },
      ],
    },

    cta: {
      title: "Interested in Binghatti Hillviews?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Binghatti Hillviews.",
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
        "بن غاطي هيلفيوز في دبي ساينس بارك | استوديو | يبدأ من 824,000 درهم",
      description:
        "بن غاطي هيلفيوز في دبي ساينس بارك يقدّم استوديوهات عصرية بتخطيط عملي وراحة يومية واتصال قوي. يبدأ الاستوديو من 824,000 درهم مع خطة دفع 70% / 30% وتسليم متوقع في الربع الأول 2026.",
      keywords:
        "بن غاطي هيلفيوز, دبي ساينس بارك, استوديو, Q1 2026, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/hillviews",
    },

    project: {
      name: "بن غاطي هيلفيوز",
      developer: "بن غاطي",
      location: "دبي ساينس بارك، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "824,000 درهم",
      completionDate: "الربع الأول 2026",
      paymentPlan: "70% / 30%",
      type: "شقق سكنية",
      units: "استوديو",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي هيلفيوز — استوديو عملي للحياة العصرية",
      paragraphs: [
        "يقع مشروع بن غاطي هيلفيوز في دبي ساينس بارك، وهي منطقة تتميز بسهولة الوصول وطلب سكني جيد. يقدم المشروع عنوانًا عمليًا يناسب نمط الحياة اليومي مع قرب الخدمات والطرق الرئيسية.",
        "يركّز مفهوم الاستوديو على الكفاءة والراحة، وهو خيار مناسب للمشتري لأول مرة أو للاستثمار ضمن منطقة ذات موقع جيد وتخطيط عملي.",
        `يبدأ الاستوديو من 824,000 درهم مع تسليم متوقع في ${HANDOVER} وخطة دفع ${PAYMENT_PLAN}. ستجد أدناه الملفات الرسمية ومخططات الطوابق ومعرضًا للصور.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الحقائق", url: FACTS_PDF, type: "secondary" },
        { title: "ملف الموقع", url: LOCATION_PDF, type: "secondary" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي هيلفيوز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "824,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "410.43 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "ساينس بارك",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي هيلفيوز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "410.43 قدم مربع",
            "السعر الابتدائي": "824,000 درهم",
            "موعد التسليم": "الربع الأول 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "حياة عصرية", icon: "✨", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
        { label: "خدمات قريبة", icon: "🛍️", color: "#d7b46a" },
        { label: "تخطيط عملي", icon: "🛋️", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي هيلفيوز",
      address: "بن غاطي هيلفيوز، دبي ساينس بارك، دبي، الإمارات",
      lat: 25.0785564,
      lng: 55.2489443,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "اتصال قوي بالطرق الرئيسية في دبي." },
        { icon: "🧭", text: "موقع مميز داخل دبي ساينس بارك." },
        { icon: "🛍️", text: "بالقرب من الخدمات والاحتياجات اليومية." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي هيلفيوز؟",
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

export default hillviewsData;
