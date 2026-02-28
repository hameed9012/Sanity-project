// src/data/properties/apartments/binghatti/apex.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /binghatti/apex
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Includes ALL images you listed + ALL PDFs + floorplan image

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/apex";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// PDFs
const BROCHURE_PDF = cdn("Binghatti Apex - Digital Brochure.pdf");
const FACTS_PDF = cdn("Binghatti Apex - Project Facts.pdf");
const LOCATION_PDF = cdn("Binghatti Apex - Location Map.pdf");
const RES_FLOORPLANS_PDF = cdn("Binghatti Apex - Residential Floor Plan.pdf");
const RETAIL_FLOORPLANS_PDF = cdn("Office & Retail Floor Plan.pdf");

// Floorplan image
const FP_1BR = cdn("Binghatti Apex 1br floor plan.webp");

// Gallery (ALL images listed)
const GALLERY_FILES = [
  "7.jpg",
  "9.jpg",
  "a copy.jpg",
  "a1 copy.jpg",
  "a2 copy.jpg",
  "a3 copy.jpg",
  "C1.jpg",
  "C2.jpg",
  "C3.jpg",
  "C4.jpg",
  "C5.jpg",
  "C6.jpg",
  "CAMERA 1.jpg",
  "CAMERA 2.jpg",
  "CAMERA 3.jpg",
  "CAMERA 4.jpg",
  "CAMERA 5.jpg",
  "CAMERA 6.jpg",
  "CAMERA 7.jpg",
  "CAMERA 8.jpg",
  "E1.jpg",
  "E2.jpg",
];

const GALLERY = GALLERY_FILES.map(cdn);

// Hero / Intro images
const HERO_BG = cdn("C2.jpg");
const INTRO_MAIN = cdn("7.jpg");

export const apexData = {
  en: {
    seo: {
      title:
        "Binghatti Apex (JVC) | 1BR Apartments | From AED 1,474,399 | Handover Q2 2026 | 70/30",
      description:
        "Binghatti Apex in Jumeirah Village Circle (JVC) is a contemporary residential tower offering well-planned apartments with Binghatti’s signature design language. Explore the full Bunny gallery, official brochure, project facts, location map, and floor plan assets.",
      keywords:
        "Binghatti Apex, JVC apartments, Binghatti JVC, 1 bedroom apartment Dubai, Binghatti Developers, Handover Q2 2026, 70/30 payment plan",
      canonical: "/properties/apartments/binghatti/apex",
    },

    project: {
      name: "Binghatti Apex",
      developer: "Binghatti",
      location: "Jumeirah Village Circle (JVC), Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,474,399",
      completionDate: "Q2 2026",
      paymentPlan: "70% / 30%",
      type: "Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif",
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "A Modern Binghatti Address in JVC",
      paragraphs: [
        "Binghatti Apex brings a bold architectural identity to Jumeirah Village Circle (JVC), combining modern lines, strong façade rhythm, and a lifestyle designed around connectivity and comfort.",
        "Positioned in one of Dubai’s most in-demand residential districts, the project suits end-users and investors seeking a central community, daily convenience, and efficient layouts.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Binghatti Apex - Digital Brochure.pdf",
          category: "Overview",
          description: "Official digital brochure (PDF).",
        },
        {
          title: "Project Facts",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "Binghatti Apex - Project Facts.pdf",
          category: "Facts",
          description: "Key project facts & highlights (PDF).",
        },
        {
          title: "Location Map",
          url: LOCATION_PDF,
          type: "secondary",
          fileName: "Binghatti Apex - Location Map.pdf",
          category: "Location",
          description: "Project location map (PDF).",
        },
        {
          title: "Residential Floor Plans (PDF)",
          url: RES_FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Binghatti Apex - Residential Floor Plan.pdf",
          category: "Floor Plans",
          description: "Residential layouts (PDF).",
        },
        {
          title: "Office & Retail Floor Plans (PDF)",
          url: RETAIL_FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Office & Retail Floor Plan.pdf",
          category: "Floor Plans",
          description: "Office & retail layouts (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Apex visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,474,399",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "832 sq.ft",
          label: "From Size",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q2 2026",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Binghatti Apex Gallery",
      slides: GALLERY,
      projectTag: "Binghatti Apex",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          shortLabel: "1 BR",
          bedrooms: 1,
          specs: {
            Unit: "1 Bedroom",
            "Starting Price": "AED 1,474,399",
            "Total Area": "832 sq.ft",
            Handover: "Q2 2026",
            "Payment Plan": "70% / 30%",
          },
          images: [FP_1BR],
          features: [
            "Efficient layout",
            "Modern living & dining",
            "Contemporary façade identity",
          ],
        },
      ],
      brochureHref: RES_FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle Highlights",
      amenities: [
        { label: "Modern Tower Living", icon: "🏙️", color: "#d7b46a" },
        { label: "JVC Community Convenience", icon: "📍", color: "#d7b46a" },
        { label: "Investor-Friendly District", icon: "📈", color: "#d7b46a" },
        { label: "Signature Binghatti Design", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Apex",
      address: "Jumeirah Village Circle (JVC), Dubai, UAE",
      // ⚠️ Replace with EXACT lat/lng from your Google Maps pin for 100% accuracy
      lat: 25.0553,
      lng: 55.2066,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Easy access to main Dubai roads and business hubs.",
        },
        {
          icon: "🛍️",
          text: "Close to daily retail, cafés, and community services.",
        },
        { icon: "🏡", text: "Located in a high-demand residential district." },
      ],
    },

    cta: {
      title: "Interested in Binghatti Apex?",
      description:
        "Send your details to receive availability, unit options, and the official PDFs for Binghatti Apex.",
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
        "بن غاطي أبيكس (قرية جميرا الدائرية) | شقق 1 غرفة | من 1,474,399 درهم | تسليم Q2 2026 | خطة 70/30",
      description:
        "بن غاطي أبيكس في قرية جميرا الدائرية (JVC) مشروع سكني بطابع عصري وهوية تصميمية واضحة من بن غاطي. استعرض معرض الصور الكامل من Bunny والكتيّب الرسمي وملف الحقائق وخريطة الموقع ومخططات الطوابق.",
      keywords:
        "بن غاطي أبيكس, شقق JVC, Binghatti Apex, شقة غرفة نوم دبي, تسليم Q2 2026, خطة دفع 70/30",
      canonical: "/properties/apartments/binghatti/apex",
    },

    project: {
      name: "بن غاطي أبيكس",
      developer: "بن غاطي",
      location: "قرية جميرا الدائرية (JVC)، دبي، الإمارات",
      status: "على الخريطة",
      startingPrice: "1,474,399 درهم",
      completionDate: "Q2 2026",
      paymentPlan: "70% / 30%",
      type: "شقق",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif",
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "عنوان عصري من بن غاطي داخل JVC",
      paragraphs: [
        "يقدم بن غاطي أبيكس حضورًا معماريًا لافتًا داخل قرية جميرا الدائرية، مع واجهات حديثة وإيقاع تصميمي يعكس هوية بن غاطي.",
        "يقع المشروع في أحد أكثر المجتمعات طلبًا في دبي، ما يجعله خيارًا مناسبًا للسكن أو الاستثمار بفضل سهولة الوصول والخدمات اليومية.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Binghatti Apex - Digital Brochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
        {
          title: "ملف الحقائق",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "Binghatti Apex - Project Facts.pdf",
          category: "حقائق",
          description: "أبرز المعلومات والميزات (PDF).",
        },
        {
          title: "خريطة الموقع",
          url: LOCATION_PDF,
          type: "secondary",
          fileName: "Binghatti Apex - Location Map.pdf",
          category: "الموقع",
          description: "خريطة موقع المشروع (PDF).",
        },
        {
          title: "مخططات سكنية (PDF)",
          url: RES_FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Binghatti Apex - Residential Floor Plan.pdf",
          category: "مخططات",
          description: "مخططات الوحدات السكنية (PDF).",
        },
        {
          title: "مخططات المكاتب والتجزئة (PDF)",
          url: RETAIL_FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Office & Retail Floor Plan.pdf",
          category: "مخططات",
          description: "مخططات المكاتب والمحلات (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي أبيكس",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,474,399 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "832 قدم²",
          label: "المساحة من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q2 2026",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي أبيكس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          shortLabel: "1 غرفة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة نوم واحدة",
            "السعر الابتدائي": "1,474,399 درهم",
            "إجمالي المساحة": "832 قدم مربع",
            "موعد التسليم": "Q2 2026",
            "خطة الدفع": "70% / 30%",
          },
          images: [FP_1BR],
          features: [
            "تخطيط عملي",
            "مساحة معيشة عصرية",
            "هوية تصميمية من بن غاطي",
          ],
        },
      ],
      brochureHref: RES_FLOORPLANS_PDF,
    },

    amenities: {
      title: "أبرز المزايا",
      amenities: [
        { label: "حياة برجية عصرية", icon: "🏙️", color: "#d7b46a" },
        { label: "موقع داخل JVC", icon: "📍", color: "#d7b46a" },
        { label: "منطقة مناسبة للاستثمار", icon: "📈", color: "#d7b46a" },
        { label: "تصميم بن غاطي المميز", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي أبيكس",
      address: "قرية جميرا الدائرية (JVC)، دبي، الإمارات",
      // ⚠️ ضع الإحداثيات الدقيقة من دبوس Google Maps للمشروع
      lat: 25.0553,
      lng: 55.2066,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية في دبي." },
        { icon: "🛍️", text: "بالقرب من خدمات يومية ومتاجر ومقاهٍ." },
        { icon: "🏡", text: "ضمن مجتمع سكني عالي الطلب." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي أبيكس؟",
      description:
        "أرسل بياناتك للحصول على التوافر وخيارات الوحدات وروابط ملفات PDF الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default apexData;
