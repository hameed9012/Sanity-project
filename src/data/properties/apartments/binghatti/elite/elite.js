// src/data/properties/apartments/binghatti/elite.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/elite
// ✅ Uses ONLY the exact filenames you listed
// ✅ Encodes spaces safely (spaces, special chars)
// ✅ EN + AR
// ✅ Uses your exact squareImageUrl
// ✅ Updated with your confirmed unit facts + coordinates
// ✅ Payment plan format: "70% / 30%"
// ✅ Clean descriptions (no CDN/tech talk inside paragraphs)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/elite";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (exact filenames)
const BROCHURE_PDF = cdn("binghatti-elite-brochure.pdf");
const FLOORPLAN_PDF = cdn("binghatti-elite-floor-plan.pdf");
const FACTS_PDF = cdn("binghatti-elite-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-elite-location.pdf");

// Floorplan image (exact filename)
const FP_1BR = cdn("Binghatti Elite 1br floor plan.webp");
const FP_STUDIO = cdn("Binghatti elite studio floor plan .png");

// Gallery (ALL files you listed - images only)
const GALLERY_FILES = [
  "Binghatti Elite Bathroom.png",
  "Binghatti Elite Bedroom 1.png",
  "Binghatti Elite Bedroom 2.png",
  "Binghatti Elite Kitchen.png",
  "Binghatti Elite Living 2.png",
  "Binghatti Elite Living.png",
  "Binghatti Elite_C01.tif",
  "Binghatti Elite_C02.jpg",
  "Binghatti Elite_C03_Post.jpg",
  "Binghatti Elite_C04_Post.jpg",
  "Binghatti Elite_Studio-C01_Post.jpg",
  "Binghatti Elite_Studio-C02_Post.jpg",
  "Binghatti Elite_Studio-C03_Post.jpg",
  "C1.jpg",
  "C10-1027.jpg",
  "C2.jpg",
  "C4-2-1031.jpg",
  "C4-2.jpg",
  "C5-1101.jpg",
  "C6-1101.jpg",
  "C7.jpg",
  "C8.jpg",
  "C9.jpg",
  "ISO.png",
];

const GALLERY = GALLERY_FILES.map(cdn);

// Hero / Intro images (choose from real files موجودة)
const HERO_BG = cdn("Binghatti Elite_C03_Post.jpg");
const INTRO_MAIN = cdn("Binghatti Elite_C03_Post.jpg");

// ✅ Your exact square image
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Confirmed facts from you
const PROJECT_FACTS = {
  location: "Dubai Production City, Dubai, UAE",
  status: "Off-Plan",
  paymentPlan: "70% / 30%",
  units: [
    {
      id: "studio",
      title: "Studio",
      shortLabel: "Studio",
      bedrooms: 0,
      startingPrice: "AED 818,749",
      area: "377.28 sq ft",
      handover: "Q2 2026",
    },
    {
      id: "1br",
      title: "1 Bedroom",
      shortLabel: "1 BR",
      bedrooms: 1,
      startingPrice: "AED 1,124,999",
      area: "654.66 sq ft",
      handover: "Q2 2026",
    },
  ],
  coords: {
    // From your Google Maps pin
    lat: 25.0384967,
    lng: 55.1904193,
    zoom: 17,
  },
};

export const eliteData = {
  en: {
    seo: {
      title:
        "Binghatti Elite | Dubai Production City | From AED 818,749 | Payment Plan 70% / 30%",
      description:
        "Binghatti Elite in Dubai Production City offers studio and 1-bedroom apartments with modern layouts, contemporary interiors, and strong connectivity. Studios start from AED 818,749 with an expected handover in Q2 2026 and a 70% / 30% payment plan.",
      keywords:
        "Binghatti Elite, Dubai Production City, Binghatti, studio apartment Dubai, 1 bedroom Dubai, off plan Dubai, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/elite",
    },

    project: {
      name: "Binghatti Elite",
      developer: "Binghatti",
      location: PROJECT_FACTS.location,
      status: PROJECT_FACTS.status,
      startingPrice: "AED 818,749",
      completionDate: "Q2 2026",
      paymentPlan: PROJECT_FACTS.paymentPlan,
      type: "Apartments",
      units: "Studio & 1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "Binghatti Elite — Smart Urban Living in Dubai Production City",
      paragraphs: [
        "Binghatti Elite is designed for a modern, practical lifestyle—where smart layouts, comfortable living spaces, and a contemporary interior direction come together in one address.",
        "Located in Dubai Production City, the project is positioned for easy day-to-day movement across the city, while offering a well-balanced option for end-users and investors looking for long-term value.",
        "Studios start from AED 818,749 with an expected handover in Q2 2026 and a 70% / 30% payment plan. 1-bedroom options are also available with larger layouts for those who prefer more space.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "binghatti-elite-brochure.pdf",
          category: "Overview",
          description: "Official project brochure (PDF).",
        },
        {
          title: "Project Facts",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "binghatti-elite-project-facts.pdf",
          category: "Facts",
          description: "Key project facts and details (PDF).",
        },
        {
          title: "Location Document",
          url: LOCATION_PDF,
          type: "secondary",
          fileName: "binghatti-elite-location.pdf",
          category: "Location",
          description: "Official location document (PDF).",
        },
        {
          title: "Floor Plans (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
          fileName: "binghatti-elite-floor-plan.pdf",
          category: "Floor Plans",
          description: "Floor plans document (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Elite exterior and lifestyle visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 818,749",
          label: "Starting Price (Studio)",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q2 2026",
          label: "Expected Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📌",
          value: "Dubai Production City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Binghatti Elite Gallery",
      slides: GALLERY,
      projectTag: "Binghatti Elite",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          shortLabel: "Studio",
          bedrooms: 0,
          specs: {
            Unit: "Studio",
            "Starting Price": "AED 818,749",
            "Total Area": "377.28 sq ft",
            Handover: "Q2 2026",
            "Payment Plan": PROJECT_FACTS.paymentPlan,
            Location: "Dubai Production City",
          },
          // No studio floorplan image was provided in your list, so keeping images empty
          images: [FP_STUDIO],
          features: [
            "Compact, efficient layout",
            "Ideal for first-time buyers and investors",
            "Modern interior direction",
          ],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          shortLabel: "1 BR",
          bedrooms: 1,
          specs: {
            Unit: "1 Bedroom",
            "Starting Price": "AED 1,124,999",
            "Total Area": "654.66 sq ft",
            handover: "Q2 2026",

            "Payment Plan": PROJECT_FACTS.paymentPlan,
            Location: "Dubai Production City",
          },
          images: [FP_1BR],
          features: [
            "Comfortable living layout",
            "More space for daily living",
            "Contemporary finishes",
          ],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Lifestyle Facilities", icon: "🏊", color: "#d7b46a" },
        { label: "Modern Common Areas", icon: "✨", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Elite",
      address: PROJECT_FACTS.location,
      lat: PROJECT_FACTS.coords.lat,
      lng: PROJECT_FACTS.coords.lng,
      zoom: PROJECT_FACTS.coords.zoom,
      proximityFeatures: [
        { icon: "🚗", text: "Convenient access to key Dubai roads." },
        { icon: "🏙️", text: "Positioned for smooth city connectivity." },
        { icon: "🛍️", text: "Everyday services and lifestyle needs nearby." },
      ],
    },

    cta: {
      title: "Interested in Binghatti Elite?",
      description:
        "Share your details to receive the latest availability, unit options, and the official documents for Binghatti Elite.",
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
        "بن غاطي إيليت | دبي برودكشن سيتي | يبدأ من 818,749 درهم | خطة دفع 70% / 30%",
      description:
        "بن غاطي إيليت في دبي برودكشن سيتي يقدم شقق استوديو وغرفة نوم واحدة بتخطيطات عملية وتصميم داخلي عصري وموقع متصل بشكل ممتاز. يبدأ الاستوديو من 818,749 درهم مع تسليم متوقع في الربع الثاني 2026 وخطة دفع 70% / 30%.",
      keywords:
        "بن غاطي إيليت, دبي برودكشن سيتي, شقق دبي, استوديو, غرفة نوم واحدة, على الخريطة, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/elite",
    },

    project: {
      name: "بن غاطي إيليت",
      developer: "بن غاطي",
      location: "دبي برودكشن سيتي، دبي، الإمارات",
      status: "على الخريطة",
      startingPrice: "818,749 درهم",
      completionDate: "الربع الثاني 2026",
      paymentPlan: PROJECT_FACTS.paymentPlan,
      type: "شقق",
      units: "استوديو وغرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي إيليت — سكن عملي في دبي برودكشن سيتي",
      paragraphs: [
        "يقدّم مشروع بن غاطي إيليت أسلوب حياة عصري بتخطيطات ذكية ومساحات مريحة وتصميم داخلي حديث يناسب الاستخدام اليومي.",
        "يقع المشروع في دبي برودكشن سيتي، ما يمنحك اتصالاً جيداً بمختلف مناطق دبي ويجعل المشروع خياراً مناسباً للسكن أو الاستثمار على المدى الطويل.",
        "يبدأ الاستوديو من 818,749 درهم مع تسليم متوقع في الربع الثاني 2026 وخطة دفع 70% / 30%. كما تتوفر خيارات غرفة نوم واحدة بمساحات أكبر لمن يفضّل مساحة إضافية.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "binghatti-elite-brochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي للمشروع (PDF).",
        },
        {
          title: "ملف الحقائق",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "binghatti-elite-project-facts.pdf",
          category: "حقائق",
          description: "معلومات المشروع الأساسية (PDF).",
        },
        {
          title: "ملف الموقع",
          url: LOCATION_PDF,
          type: "secondary",
          fileName: "binghatti-elite-location.pdf",
          category: "الموقع",
          description: "ملف الموقع الرسمي (PDF).",
        },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
          fileName: "binghatti-elite-floor-plan.pdf",
          category: "مخططات",
          description: "ملف مخططات الطوابق (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي إيليت",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "818,749 درهم",
          label: "السعر يبدأ من (استوديو)",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q2 2026",
          label: "التسليم المتوقع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📌",
          value: "دبي برودكشن سيتي",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي إيليت",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          shortLabel: "استوديو",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "استوديو",
            "السعر يبدأ من": "818,749 درهم",
            "إجمالي المساحة": "377.28 قدم²",
            "موعد التسليم": "الربع الثاني 2026",
            "خطة الدفع": PROJECT_FACTS.paymentPlan,
            الموقع: "دبي برودكشن سيتي",
          },
          images: [FP_STUDIO],
          features: ["تخطيط عملي", "مناسب للاستثمار", "تصميم عصري"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          shortLabel: "1 غرفة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة نوم واحدة",
            "السعر يبدأ من": "1,124,999 درهم",
            "إجمالي المساحة": "654.66 قدم²",
            "موعد التسليم": "الربع الثاني 2026",
            "خطة الدفع": PROJECT_FACTS.paymentPlan,
            الموقع: "دبي برودكشن سيتي",
          },
          images: [FP_1BR],
          features: ["مساحة أكبر للمعيشة", "توزيع مريح", "تشطيبات عصرية"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مرافق أسلوب حياة", icon: "🏊", color: "#d7b46a" },
        { label: "مساحات مشتركة عصرية", icon: "✨", color: "#d7b46a" },
        { label: "خدمات يومية قريبة", icon: "🛍️", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي إيليت",
      address: "دبي برودكشن سيتي، دبي، الإمارات",
      lat: PROJECT_FACTS.coords.lat,
      lng: PROJECT_FACTS.coords.lng,
      zoom: PROJECT_FACTS.coords.zoom,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية في دبي." },
        { icon: "🏙️", text: "منطقة متصلة بشكل ممتاز للتنقل اليومي." },
        { icon: "🛍️", text: "بالقرب من الخدمات والمتاجر." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي إيليت؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات والملفات الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default eliteData;
