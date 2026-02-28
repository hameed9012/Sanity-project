// src/data/properties/apartments/damac/damac-hills-radisson/damac-hills-radisson.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ EN + AR (same blueprint)
// ✅ Hero background = your uploaded video (mp4)
// ✅ Uses ONLY your uploaded Bunny filenames (ignores .DS_Store)
// ✅ FloorPlans = 4 fields ONLY (Total Area / Starting Price / Handover / Payment Plan)
// ✅ Location lat/lng taken exactly from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-hills-radisson";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const BROCHURE_PDF = cdn("2021_March_DH Radisson Brochure.pdf");
const HERO_VIDEO = cdn("Radisson - July 2019.mp4");
const STUDIO_FLOORPLAN = cdn("radison damac hills studio floor plans.webp");

// ✅ Gallery / visuals (EXACT filenames)
const GALLERY = [
  cdn("Radisson Hotel Dubai DAMAC Hills Ext1.jpg"),
  cdn("Radisson Hotel Dubai DAMAC Hills Ext2.jpg"),
  cdn("DH_RadissonExterior-1-01.png"),
  cdn("DH_RadissonExterior-2-02.png"),
  cdn("DH_RadissonLobby-1-01.png"),
  cdn("DH_RadissonLobby-2-02.png"),
  cdn("DH_RadissonLobby-3-03.png"),
  cdn("Radisson Hotel Dubai DAMAC Hills Int1.jpg"),
  cdn("Radisson Hotel Dubai DAMAC Hills Int2.jpg"),
  cdn("DH_RadissonRoom.png"),
  cdn("DH_RadissonMaster-Plc.png"),
];

export const damacHillsRadissonData = {
  en: {
    seo: {
      title:
        "Damac Hills – Radisson Hotel Residences | Studio | Ready | 100% Payment",
      description:
        "A ready studio residence at Radisson Hotel Dubai DAMAC Hills, offering hotel-style living in an established community. Studio unit with 478.24 sq.ft and 100% payment (ready).",
      keywords:
        "Radisson Hotel Dubai DAMAC Hills, Damac Hills, studio, ready property, 100% payment plan, hotel apartments",
      canonical: "/properties/apartments/damac/damac-hills-radisson",
    },

    project: {
      name: "Damac Hills – Radisson",
      developer: "DAMAC Properties",
      location: "DAMAC Hills, Dubai, UAE",
      status: "Secondary",
      startingPrice: "AED 914,550",
      completionDate: "Ready",
      "Payment Plan": "Full Cash (Ready)",
      type: "Hotel Residences",
      units: "Studio",
    },

    hero: {
      // ✅ mp4 -> your UI should render <video> when it sees .mp4
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "READY STUDIO IN RADISSON – DAMAC HILLS",
      paragraphs: [
        "Radisson Hotel Dubai DAMAC Hills offers a practical “ready” lifestyle option inside one of Dubai’s most established communities. This studio is ideal for buyers who want immediate use, straightforward ownership, and a location that works for both personal stays and rental demand.",
        "The appeal here is simple: a branded hotel environment, familiar service standards, and DAMAC Hills community access—without waiting for handover. You get a compact, efficient layout with a clear size and a clean pricing reference.",
        "Below you’ll find the official brochure, the studio floor plan image, full visuals from your uploaded assets, and the location pin taken directly from Google Maps.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Studio Floor Plan (Image)",
          url: STUDIO_FLOORPLAN,
          type: "secondary",
        },
      ],
      imgUrl: cdn("Radisson Hotel Dubai DAMAC Hills Ext1.jpg"),
      imgAlt: "Radisson Hotel Dubai DAMAC Hills exterior",
      floatingCards: [
        {
          icon: "💰",
          value: "AED 914,550",
          label: "Price",
        },
        {
          icon: "📐",
          value: "478.24 sq.ft",
          label: "Total Area",
        },
        {
          icon: "✅",
          value: "Ready",
          label: "Status",
        },
      ],
    },

    gallery: {
      title: "Project Visuals",
      slides: GALLERY,
      projectTag: "Damac Hills – Radisson",
    },

    // ✅ STRICT FloorPlans structure: ONLY 4 fields
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "478.24 sq.ft",
            "Starting Price": "AED 914,550",
            Handover: "Ready",
            "Payment Plan": "Full Cash (Ready)",
          },
          images: [STUDIO_FLOORPLAN],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Hotel-Style Living", icon: "🏨", color: "#d7b46a" },
        { label: "Lobby & Concierge", icon: "🛎️", color: "#d7b46a" },
        { label: "Pool & Leisure", icon: "🏊", color: "#d7b46a" },
        { label: "Gym / Fitness", icon: "💪", color: "#d7b46a" },
        { label: "DAMAC Hills Community", icon: "🌿", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Radisson Hotel Dubai DAMAC Hills",
      address: "DAMAC Hills, Dubai, UAE",
      // ✅ exactly from your Google Maps pin
      lat: 25.0187618,
      lng: 55.2463001,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌿", text: "Inside DAMAC Hills lifestyle community." },
        { icon: "🏨", text: "Branded Radisson hotel environment." },
        { icon: "🚗", text: "Good connectivity to key Dubai routes." },
      ],
    },

    cta: {
      title: "Interested in this Ready Studio?",
      description:
        "Share your details to receive full availability, viewing guidance, and the official brochure for Radisson at DAMAC Hills.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "داماك هيلز – راديسون | استوديو | جاهز | دفع 100%",
      description:
        "استوديو جاهز في Radisson Hotel Dubai DAMAC Hills داخل مجتمع داماك هيلز. مساحة 478.24 قدم² وسعر مرجعي 914,550 درهم مع خطة دفع 100% (جاهز).",
      keywords:
        "راديسون داماك هيلز, داماك هيلز, استوديو, عقار جاهز, دفع 100%, شقق فندقية",
      canonical: "/properties/apartments/damac/damac-hills-radisson",
    },

    project: {
      name: "داماك هيلز – راديسون",
      developer: "داماك العقارية",
      location: "داماك هيلز، دبي، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "914,550 درهم",
      completionDate: "جاهز",
      paymentPlan: "100%",
      type: "وحدات فندقية",
      units: "استوديو",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "استوديو جاهز في راديسون – داماك هيلز",
      paragraphs: [
        "يقدّم Radisson Hotel Dubai DAMAC Hills خيارًا عمليًا للوحدات الجاهزة داخل أحد أكثر المجتمعات استقرارًا في دبي. هذا الاستوديو مناسب لمن يريد سكنًا أو استثمارًا جاهزًا بدون انتظار التسليم.",
        "الميزة الأساسية هنا واضحة: بيئة فندقية بعلامة راديسون مع مستوى خدمات معروف، إضافة إلى أسلوب حياة داماك هيلز المتكامل—مما يدعم الاستخدام الشخصي والطلب الإيجاري.",
        "ستجد أدناه الكتيّب الرسمي، وصورة مخطط الاستوديو، ومعرض الصور الكامل من ملفاتك المرفوعة، بالإضافة إلى موقع المشروع وفق إحداثيات Google Maps مباشرة.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "مخطط الاستوديو (صورة)",
          url: STUDIO_FLOORPLAN,
          type: "secondary",
        },
      ],
      imgUrl: cdn("Radisson Hotel Dubai DAMAC Hills Ext1.jpg"),
      imgAlt: "واجهة راديسون داماك هيلز",
      floatingCards: [
        { icon: "💰", value: "914,550 درهم", label: "السعر" },
        { icon: "📐", value: "478.24 قدم²", label: "المساحة" },
        { icon: "✅", value: "جاهز", label: "الحالة" },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "داماك هيلز – راديسون",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "478.24 قدم مربع",
            "السعر الابتدائي": "914,550 درهم",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "دفع نقدي كامل (جاهز للتسليم)",
          },
          images: [STUDIO_FLOORPLAN],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "أسلوب حياة فندقي", icon: "🏨", color: "#d7b46a" },
        { label: "لوبي وخدمات", icon: "🛎️", color: "#d7b46a" },
        { label: "مسبح وترفيه", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "مجتمع داماك هيلز", icon: "🌿", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Radisson Hotel Dubai DAMAC Hills",
      address: "داماك هيلز، دبي، الإمارات",
      lat: 25.0187618,
      lng: 55.2463001,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌿", text: "داخل مجتمع داماك هيلز المتكامل." },
        { icon: "🏨", text: "بيئة فندقية بعلامة راديسون." },
        { icon: "🚗", text: "اتصال جيد بمحاور دبي الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم بهذا الاستوديو الجاهز؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي، وإرشادات المعاينة، والكتيّب الرسمي لوحدات راديسون في داماك هيلز.",
      buttons: [
        { label: "اطلب معلومات الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacHillsRadissonData;
