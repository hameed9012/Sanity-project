// src/data/properties/apartments/arada/inaura/inaura.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /arada/inaura
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Off-Plan + Payment Plan 50/50
// ✅ Handover Q2 2030
// ✅ Includes brochure PDF + full gallery + all floorplans (1–6BR)
// ✅ Location lat/lng from your Google Maps pin (exact)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/inaura";

// Safe encoder for Bunny filenames (spaces + special chars)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames in your folder)
// ========================
const BROCHURE_PDF = cdn("inaura-brochure.pdf");

// Floorplans (EXACT filenames)
const FP_1BR = cdn("Inaura Hotels 1br floor plans.webp");
const FP_2BR = cdn("Inaura Hotels 2br floor plans.webp");
const FP_3BR = cdn("Inaura 3br floor plan.webp");
const FP_4BR = cdn("Inaura hotels 4br floor plan.webp");
const FP_5BR = cdn("Inaura 5br floor plan.webp");
const FP_6BR = cdn("Inaura 6br floor plan.webp");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  cdn("EXT02_Hero_B3_12K-01.jpg"),
  cdn("EXT03_Hero-Fountain_B3.jpg"),
  cdn("EXT04_Podium_B3.jpg"),
  cdn("EXT05_Arrival_B4.jpg"),
  cdn("EXT06_Community_Pool_A_B3.jpg"),
  cdn("EXT07_Community_Pool_B_B3.jpg"),
  cdn("EXT09_Crown-Detail_B3.jpg"),
  cdn("EXT10_Rooftop_Pool__B3.jpg"),
  cdn("04_Pearl.jpg"),
  cdn("1B-Living-02.jpg"),
  cdn("2B-Living-02.jpg"),
  cdn("2B-Master-Bedroom.jpg"),
  cdn("3B-Living.jpg"),
  cdn("3B-master-bedroom.jpg"),
  cdn("3B-Master-bathroom-cam-2-opt-02.jpg"),
  cdn("4B-master-bedroom.jpg"),
  cdn("5B-Living-01.jpg"),
  cdn("5B-Dressing.jpg"),
  cdn("6B-Dining.jpg"),
  cdn("6B-Living-01.jpg"),
  cdn("6B-Master-Bedroom-01.jpg"),
  cdn("6B-Master-bathroom.jpg"),
  cdn("6B-Office.jpg"),
  cdn("05_Sky-Villa-6BR_Foyer.jpg"),
  cdn("Cinema.jpg"),
  cdn("Formative-Gym-01.jpg"),
  cdn("Kids-area.jpg"),
  cdn("Podcast-studio.jpg"),
  cdn("Restaurant.jpg"),
  cdn("Sauna.jpg"),
  cdn("Spa-pool.jpg"),
  cdn("Steam.jpg"),
  cdn("Yoga.jpg"),
  cdn("sky-club.jpg"),
];

// ========================
// Data
// ========================
export const inauraData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Inaura Hotels & Residences Downtown by Arada | 1–6BR Homes in Dubai | 50/50 | Handover Q2 2030",
      description:
        "Inaura Hotels & Residences Downtown by Arada is a luxury mixed hospitality-and-residential address in Dubai, offering residences from 1 to 4 bedrooms plus 5 and 6-bedroom Sky Villas. With a clear 50/50 payment plan and handover in Q2 2030, Inaura is positioned for buyers seeking long-term value in a prime central location. Explore the official brochure, full image gallery, and complete floor plans (1–6BR) — all wired directly from your Bunny CDN folder for zero missing assets and maximum site performance.",
      keywords:
        "Inaura Hotels and Residences, Arada Inaura, Downtown Dubai residences, Dubai luxury apartments, Sky Villas Dubai, 50/50 payment plan, Q2 2030 handover",
      canonical: "/properties/apartments/arada/inaura",
    },

    project: {
      name: "Inaura Hotels & Residences Downtown",
      developer: "Arada",
      location: "Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 3,599,000",
      completionDate: "Q2 2030",
      paymentPlan: "50% / 50%",
      type: "Hotels & Residences",
      units: "1–4BR Residences + 5–6BR Sky Villas",
    },

    hero: {
      backgroundUrl: cdn("EXT01_Hero_B3_12k-02.jpg"),
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "A LUXURY HOTEL-STYLE ADDRESS WITH SKY VILLAS IN CENTRAL DUBAI",
      paragraphs: [
        "Inaura Hotels & Residences Downtown by Arada brings hospitality-grade living to a central Dubai setting, combining serviced lifestyle expectations with private residential space.",
        "The collection spans 1 to 4-bedroom residences, alongside 5 and 6-bedroom Sky Villas for buyers prioritizing scale, privacy, and a statement home experience.",
        "Below you’ll find your exact Bunny folder assets: the official brochure PDF, a complete gallery set, and the full floor plan set from 1BR to 6BR — all connected using the same structure as your Majestine blueprint (EN + AR).",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "inaura-brochure.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
      ],
      imgUrl: cdn("EXT02_Hero_B3_12K-01.jpg"),
      imgAlt: "Inaura Hotels & Residences exterior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3,599,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q2 2030",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📄",
          value: "50% / 50%",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Inaura Visuals",
      slides: GALLERY,
      projectTag: "Inaura Hotels & Residences",
    },

    // ✅ FloorPlans: ONLY the 4 fields you requested
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "705 sq.ft",
            "Starting Price": "AED 3,599,000",
            Handover: "Q2 2030",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1272 sq.ft",
            "Starting Price": "AED 6,390,000",
            Handover: "Q2 2030",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "4034 sq.ft",
            "Starting Price": "AED 14,680,000",
            Handover: "Q2 2030",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "4034 sq.ft",
            "Starting Price": "AED 20,705,000",
            Handover: "Q2 2030",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br-sky-villa",
          title: "5 Bedroom (Sky Villa)",
          bedrooms: 5,
          specs: {
            "Total Area": "6781 sq.ft",
            "Starting Price": "AED 41,050,000",
            Handover: "Q2 2030",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_5BR],
          features: ["—"],
        },
        {
          id: "6br-sky-villa",
          title: "6 Bedroom (Sky Villa)",
          bedrooms: 6,
          specs: {
            "Total Area": "17770 sq.ft",
            "Starting Price": "AED 130,000,000",
            Handover: "Q2 2030",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_6BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Hotel-Style Living", icon: "🏨", color: "#d7b46a" },
        { label: "Sky Villas Collection", icon: "🏡", color: "#d7b46a" },
        { label: "Rooftop Pool & Leisure", icon: "🏊", color: "#d7b46a" },
        { label: "Wellness & Fitness", icon: "💪", color: "#d7b46a" },
        { label: "Dining & Social Spaces", icon: "🍽️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Inaura Hotels & Residences Downtown",
      address: "Dubai, UAE",
      // ✅ exact from your Google Maps pin
      lat: 25.189375,
      lng: 55.2806818,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏙️", text: "Central Dubai lifestyle positioning." },
        { icon: "🛣️", text: "Strong connectivity to major roads." },
        { icon: "✨", text: "Hospitality-led living with premium amenities." },
      ],
    },

    cta: {
      title: "Interested in Inaura?",
      description:
        "Share your details to receive availability, unit options, and the official brochure for Inaura Hotels & Residences Downtown by Arada.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title:
        "إيناورا فنادق وشقق من أرادا | وحدات 1–6 غرف في دبي | 50/50 | التسليم Q2 2030",
      description:
        "إيناورا فنادق وشقق (Downtown) من أرادا هو عنوان فاخر يجمع أسلوب الضيافة مع السكن الخاص في موقع مركزي بدبي، ويقدّم وحدات من 1 إلى 4 غرف نوم بالإضافة إلى فلل سكاي 5 و6 غرف. مع خطة دفع واضحة 50/50 وتسليم في الربع الثاني 2030، يعتبر إيناورا خيارًا مناسبًا للباحثين عن قيمة طويلة الأمد ومعيشة بمعايير فندقية. استعرض الكتيّب الرسمي ومعرض الصور الكامل ومخططات الوحدات من 1 إلى 6 غرف — جميعها مرتبطة مباشرة بملفات Bunny الخاصة بك لضمان عدم وجود أي ملفات ناقصة.",
      keywords:
        "إيناورا, أرادا, فنادق وشقق دبي, شقق فاخرة دبي, سكاي فيلا, خطة دفع 50/50, تسليم Q2 2030",
      canonical: "/properties/apartments/arada/inaura",
    },

    project: {
      name: "إيناورا فنادق وشقق",
      developer: "أرادا",
      location: "دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "3,599,000 درهم",
      completionDate: "Q2 2030",
      paymentPlan: "50% / 50%",
      type: "فنادق وشقق",
      units: "1–4 غرف + فلل سكاي 5–6 غرف",
    },

    hero: {
      backgroundUrl: cdn("EXT01_Hero_B3_12k-02.jpg"),
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادا",
      rating: null,
    },

    intro: {
      title: "عنوان فاخر بمعايير فندقية مع فلل سكاي في دبي",
      paragraphs: [
        "إيناورا من أرادا يجمع بين أسلوب الحياة الفندقي والخدمة الراقية مع مساحات سكنية خاصة ضمن موقع مركزي في دبي.",
        "التشكيلة تشمل وحدات من 1 إلى 4 غرف نوم، بالإضافة إلى فلل سكاي 5 و6 غرف لمن يبحث عن مساحات أكبر وخصوصية وتجربة سكنية استثنائية.",
        "ستجد أدناه ملفاتك كما رفعتها على Bunny: الكتيّب الرسمي، معرض الصور، ومخططات 1–6 غرف — وبنفس بنية مشروعك المرجعي (EN + AR).",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "inaura-brochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
      ],
      imgUrl: cdn("EXT02_Hero_B3_12K-01.jpg"),
      imgAlt: "واجهة إيناورا",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3,599,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q2 2030",
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📄",
          value: "50% / 50%",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "إيناورا",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "705 قدم مربع",
            "السعر الابتدائي": "3,599,000 درهم",
            "موعد التسليم": "Q2 2030",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1272 قدم مربع",
            "السعر الابتدائي": "6,390,000 درهم",
            "موعد التسليم": "Q2 2030",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "4034 قدم مربع",
            "السعر الابتدائي": "14,680,000 درهم",
            "موعد التسليم": "Q2 2030",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "4034 قدم مربع",
            "السعر الابتدائي": "20,705,000 درهم",
            "موعد التسليم": "Q2 2030",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br-sky-villa",
          title: "5 غرف (سكاي فيلا)",
          bedrooms: 5,
          specs: {
            "إجمالي المساحة": "6781 قدم مربع",
            "السعر الابتدائي": "41,050,000 درهم",
            "موعد التسليم": "Q2 2030",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_5BR],
          features: ["—"],
        },
        {
          id: "6br-sky-villa",
          title: "6 غرف (سكاي فيلا)",
          bedrooms: 6,
          specs: {
            "إجمالي المساحة": "17770 قدم مربع",
            "السعر الابتدائي": "130,000,000 درهم",
            "موعد التسليم": "Q2 2030",
            "خطة الدفع": "50% / 50%",
          },
          images: [FP_6BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "أسلوب حياة فندقي", icon: "🏨", color: "#d7b46a" },
        { label: "فلل سكاي فاخرة", icon: "🏡", color: "#d7b46a" },
        { label: "مسبح على السطح", icon: "🏊", color: "#d7b46a" },
        { label: "عافية ولياقة", icon: "💪", color: "#d7b46a" },
        { label: "مطاعم ومساحات اجتماعية", icon: "🍽️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "إيناورا فنادق وشقق",
      address: "دبي، الإمارات",
      lat: 25.189375,
      lng: 55.2806818,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏙️", text: "موقع مركزي ضمن دبي." },
        { icon: "🛣️", text: "سهولة الوصول للطرق الرئيسية." },
        { icon: "✨", text: "تجربة سكنية بمعايير ضيافة." },
      ],
    },

    cta: {
      title: "مهتم بإيناورا؟",
      description:
        "أرسل بياناتك للحصول على التوافر وخيارات الوحدات ورابط الكتيّب الرسمي لمشروع إيناورا فنادق وشقق من أرادا.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default inauraData;
