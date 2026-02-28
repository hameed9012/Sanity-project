// src/data/properties/apartments/binghatti/cullinan.js
// ✅ Uses ONLY files موجودة فعلاً inside: /binghatti/cullinan
// ✅ Encodes spaces safely (spaces, special chars)
// ✅ EN + AR
// ✅ Includes ALL images you listed + ALL PDFs + floor plan image
// ✅ Updated with your confirmed facts (price, plan, handover, size, location, maps coords)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/cullinan";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (exact filenames)
const BROCHURE_PDF = cdn("binghatti-cullinan-brochure.pdf");
const FLOORPLANS_PDF = cdn("binghatti-cullinan-floor-plans.pdf");
const FACTS_PDF = cdn("binghatti-cullinan-project-facts.pdf");
const LOCATION_PDF = cdn("binghatti-cullinan-project-location.pdf");

// Floorplan image (exact filename)
const FP_1BR = cdn("Binghatti Culinan 1br floor plan.webp");

// Gallery (ALL images listed)
const GALLERY_FILES = [
  "1_View010000_Post copy.jpg",
  "1_View020000_Post copy.jpg",
  "1_View020000_Post People.jpg",
  "1_View030000_Post copy.jpg",
  "1_View040000_Post copy.jpg",
  "1.jpg",
  "11.jpg",
  "1bedroom-Cullinan-Bathroom-C011.jpg",
  "1bedroom-Cullinan-Bathroom-C022.jpg",
  "1bedroom-Cullinan-Bathroom-C033.jpg",
  "1bedroom-Cullinan-Bedroom-C01.jpg",
  "1bedroom-Cullinan-Bedroom-C02.jpg",
  "1bedroom-Cullinan-Bedroom-C03.jpg",
  "1bedroom-Cullinan-Bedroom-C04.jpg",
  "1bedroom-Cullinan-Livingroom-C01.jpg",
  "1bedroom-Cullinan-Livingroom-C02.jpg",
  "1bedroom-Cullinan-Livingroom-C03.jpg",
  "1bedroom-Cullinan-Livingroom-C04.jpg",
  "2.jpg",
  "22.jpg",
  "25014_Ameneties.jpg",
  "25014_Street_Shot.jpg",
  "25014_Street.png",
  "250862_Binghatti_Cullinam_View01_halfres.jpg",
  "250862_Binghatti_Cullinam_View02_halfres.jpg",
  "3.jpg",
  "33.jpg",
  "4.jpg",
  "44.jpg",
  "5.jpg",
  "55.jpg",
  "6.jpg",
  "66.jpg",
  "7.jpg",
  "8.jpg",
  "Aerial view1 copy.jpg",
  "Aerial view2 copy.jpg",
  "Aerial view3 copy.jpg",
  "Aerial view4 copy.jpg",
  "Aerial view5 copy.jpg",
  "Aerial view6 copy.jpg",
  "Bathroom 01.jpg",
  "Bathroom02.jpg",
  "Bedroom01.jpg",
  "Bedroom02.jpg",
  "Bedroom03.jpg",
  "Bedroom04.jpg",
];

const GALLERY = GALLERY_FILES.map(cdn);

// Hero / Intro images (choose from your real files)
const HERO_BG = cdn("25014_Street.png");
const INTRO_MAIN = cdn("1_View020000_Post People.jpg");

// Shared square image (given by you)
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

export const cullinanData = {
  en: {
    seo: {
      title:
        "Binghatti Cullinan | 1BR Apartments in Al Jaddaf | From AED 1,453,999 | Q2 2027",
      description:
        "Binghatti Cullinan is a modern residential address in Al Jaddaf, Dubai, offering 1-bedroom apartments from AED 1,453,999. Enjoy a smart layout of around 678 sq ft, a 70% / 30% payment plan, and an expected handover in Q2 2027.",
      keywords:
        "Binghatti Cullinan, Binghatti, Al Jaddaf apartments, Dubai off plan, 1 bedroom, 70% / 30%, Q2 2027",
      canonical: "/properties/apartments/binghatti/cullinan",
    },

    project: {
      name: "Binghatti Cullinan",
      developer: "Binghatti",
      location: "Al Jaddaf, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,453,999",
      completionDate: "Q2 2027",
      paymentPlan: "70% / 30%",
      type: "Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "Binghatti Cullinan — Modern Living in Al Jaddaf",
      paragraphs: [
        "Binghatti Cullinan offers a contemporary residential lifestyle in Al Jaddaf—an established Dubai district known for strong connectivity, waterfront character, and easy access to key destinations.",
        "The design focuses on clean lines, practical flow, and comfortable everyday living, creating a balanced option for both end-users and investors seeking a well-positioned address.",
        "1-bedroom apartments start from AED 1,453,999 with a 70% / 30% payment plan, an approximate size of 678.23 sq ft, and an expected handover in Q2 2027.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "binghatti-cullinan-brochure.pdf",
          category: "Overview",
          description: "Official project brochure (PDF).",
        },
        {
          title: "Project Facts",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "binghatti-cullinan-project-facts.pdf",
          category: "Facts",
          description: "Key project facts and details (PDF).",
        },
        {
          title: "Location Map",
          url: LOCATION_PDF,
          type: "secondary",
          fileName: "binghatti-cullinan-project-location.pdf",
          category: "Location",
          description: "Official location map (PDF).",
        },
        {
          title: "Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "binghatti-cullinan-floor-plans.pdf",
          category: "Floor Plans",
          description: "Full set of floor plans (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Binghatti Cullinan exterior and lifestyle visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,453,999",
          label: "Starting Price (1BR)",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "678.23 sq ft",
          label: "Approx. Size",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q2 2027",
          label: "Expected Handover",
        },
      ],
    },

    gallery: {
      title: "Binghatti Cullinan Gallery",
      slides: GALLERY,
      projectTag: "Binghatti Cullinan",
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
            "Starting Price": "AED 1,453,999",
            "Total Area": "678.23 sq ft",
            Handover: "Q2 2027",
            "Payment Plan": "70% / 30%",
            Location: "Al Jaddaf, Dubai",
          },
          images: [FP_1BR],
          features: [
            "Smart and efficient layout",
            "Comfortable day-to-day flow",
            "Contemporary interior direction",
          ],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Lifestyle Facilities", icon: "🏊", color: "#d7b46a" },
        { label: "Modern Lobby & Common Areas", icon: "✨", color: "#d7b46a" },
        { label: "Everyday Convenience", icon: "🛍️", color: "#d7b46a" },
        { label: "Investment-Friendly Location", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Cullinan",
      address: "Al Jaddaf, Dubai, UAE",
      // ✅ From your Google Maps pin
      lat: 25.2190625,
      lng: 55.3224375,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to major roads across Dubai." },
        { icon: "🏙️", text: "Well-connected district for daily commuting." },
        { icon: "🛍️", text: "Close to lifestyle and essential services." },
      ],
    },

    cta: {
      title: "Interested in Binghatti Cullinan?",
      description:
        "Share your details to receive current availability, unit options, and the official documents for Binghatti Cullinan.",
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
        "بن غاطي كولينان | شقق غرفة نوم واحدة في الجداف | تبدأ من 1,453,999 درهم | Q2 2027",
      description:
        "بن غاطي كولينان هو عنوان سكني عصري في منطقة الجداف بدبي، يضم شقق غرفة نوم واحدة تبدأ من 1,453,999 درهم. يتميز بتخطيط عملي بمساحة تقارب 678 قدم²، مع خطة دفع 70% / 30% وموعد تسليم متوقع في الربع الثاني 2027.",
      keywords:
        "بن غاطي كولينان, Binghatti Cullinan, شقق الجداف, دبي على الخريطة, غرفة نوم واحدة, 70% / 30%, 2027",
      canonical: "/properties/apartments/binghatti/cullinan",
    },

    project: {
      name: "بن غاطي كولينان",
      developer: "بن غاطي",
      location: "الجداف، دبي، الإمارات",
      status: "على الخريطة",
      startingPrice: "1,453,999 درهم",
      completionDate: "الربع الثاني 2027",
      paymentPlan: "70% / 30%",
      type: "شقق",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "بن غاطي كولينان — سكن عصري في الجداف",
      paragraphs: [
        "يقدم مشروع بن غاطي كولينان تجربة سكنية حديثة في منطقة الجداف بدبي—منطقة معروفة بسهولة الوصول وارتباطها الجيد بالوجهات الرئيسية والطابع الحيوي القريب من الواجهة المائية.",
        "يركّز التصميم على خطوط عصرية وتوزيع عملي للمساحات يمنح راحة حقيقية في الاستخدام اليومي، ما يجعله خياراً مناسباً للسكن والاستثمار في آنٍ واحد.",
        "تبدأ شقق غرفة نوم واحدة من 1,453,999 درهم مع خطة دفع 70% / 30%، وبمساحة تقريبية 678.23 قدم²، وتسليم متوقع في الربع الثاني 2027.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "binghatti-cullinan-brochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي للمشروع (PDF).",
        },
        {
          title: "ملف الحقائق",
          url: FACTS_PDF,
          type: "secondary",
          fileName: "binghatti-cullinan-project-facts.pdf",
          category: "حقائق",
          description: "معلومات المشروع الأساسية (PDF).",
        },
        {
          title: "خريطة الموقع",
          url: LOCATION_PDF,
          type: "secondary",
          fileName: "binghatti-cullinan-project-location.pdf",
          category: "الموقع",
          description: "خريطة الموقع الرسمية (PDF).",
        },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "binghatti-cullinan-floor-plans.pdf",
          category: "مخططات",
          description: "مجموعة مخططات الطوابق (PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور بن غاطي كولينان",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,453,999 درهم",
          label: "السعر يبدأ من (1BR)",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "678.23 قدم²",
          label: "المساحة التقريبية",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q2 2027",
          label: "التسليم المتوقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "بن غاطي كولينان",
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
            "السعر يبدأ من": "1,453,999 درهم",
            "إجمالي المساحة": "678.23 قدم²",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "70% / 30%",
            الموقع: "الجداف، دبي",
          },
          images: [FP_1BR],
          features: ["تخطيط عملي", "توزيع مريح للمساحات", "تصميم عصري"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مرافق أسلوب حياة", icon: "🏊", color: "#d7b46a" },
        { label: "مساحات مشتركة عصرية", icon: "✨", color: "#d7b46a" },
        { label: "خدمات يومية قريبة", icon: "🛍️", color: "#d7b46a" },
        { label: "منطقة مناسبة للاستثمار", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بن غاطي كولينان",
      address: "الجداف، دبي، الإمارات",
      // ✅ From your Google Maps pin
      lat: 25.2190625,
      lng: 55.3224375,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية في دبي." },
        { icon: "🏙️", text: "منطقة متصلة بشكل ممتاز للتنقل اليومي." },
        { icon: "🛍️", text: "بالقرب من الخدمات والمتاجر." },
      ],
    },

    cta: {
      title: "مهتم ببن غاطي كولينان؟",
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

export default cullinanData;
