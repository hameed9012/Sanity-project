// src/data/properties/villas/damac/belair/belair.js
// ✅ Same constants + encodeURI cdn() + BASE pattern (like your working example)
// ✅ Converts ALL Bunny links into cdn() (case/space safe)
// ✅ EN + AR
// ✅ Hero background = your uploaded video (mp4)
// ✅ Includes brochure + full gallery + 8BR floorplans (Ground/First/Roof)
// ✅ Location lat/lng taken exactly from your Google Maps pin
//
// IMPORTANT:
// Bunny folder confirmed as: /damac/bel-air
// If you ever rename the folder, update PROJECT_PATH.

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "damac/bel-air";

/** Safe with spaces, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Brochure + Hero Video
// ========================
const BROCHURE_PDF = cdn("24.03.21 BELAIR TRUMP ESTATE BROCHURE - ENGLISH.pdf");
const HERO_VIDEO = cdn("TE_BELAIR_16X9_EN.mp4");

// ========================
// Gallery (EXACT filenames)
// ========================
const GALLERY_SLIDES = [
  cdn("Bel Air - Trump Estates - 03.jpg"),
  cdn("Bel Air - Trump Estates - DMA_VTE_08.jpg"),
  cdn("Bel Air - Trump Estates - Family Area (1).jpg"),
  cdn("Bel Air - Trump Estates - Family Area.jpg"),
  cdn("Bel Air - Trump Estates - Majlis Seating (1).jpg"),
  cdn("Bel Air - Trump Estates - Roof Terrace.JPG"),
  cdn("Bel Air - Trump Estates - TIGC.jpg"),
  cdn("Bel Air - Trump Estates - V5 - Staircase.jpg"),
  cdn("Bel Air - Trump Estates - V5 Master Bathroom.jpg"),
];

// ========================
// Floorplans (EXACT filenames)
// NOTE: filenames contain a space BEFORE ".png" (keep exactly)
// ========================
const FP_8BR_GROUND = cdn("Belair 8br ground floor plan .png");
const FP_8BR_FIRST = cdn("Belair 8br first floor plan .png");
const FP_8BR_ROOF = cdn("Belair 8br roof floor plan .png");

export const belairTrumpEstatesData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Belair Trump Estates at DAMAC Hills | Ready 8BR Villa | Full Cash (Ready)",
      description:
        "Belair (Trump Estates) at DAMAC Hills is a ready ultra-luxury 8-bedroom villa option designed for buyers who want space, privacy, and community lifestyle in one of Dubai’s most established residential destinations. Explore brochure, gallery, and full floor plans (ground/first/roof).",
      keywords:
        "Belair, Trump Estates, DAMAC Hills, ready villa Dubai, 8BR villa, DAMAC villas, luxury villas DAMAC Hills, full cash ready",
      canonical: "/properties/villas/damac/belair-trump-estates",
    },

    project: {
      name: "Belair (Trump Estates)",
      developer: "DAMAC Properties",
      location: "DAMAC Hills, Dubai, UAE",
      status: "Secondary",
      startingPrice: "AED 19,062,000",
      completionDate: "Ready",
      paymentPlan: "Full Cash (Ready)",
      type: "Villas",
      units: "8 Bedroom Villa",
    },

    hero: {
      // ✅ mp4 -> your UI should render <video> when it sees .mp4
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "A READY STATEMENT VILLA IN DAMAC HILLS",
      paragraphs: [
        "Belair (Trump Estates) at DAMAC Hills is for buyers who want a villa lifestyle that feels complete from day one—an established community environment, premium residential positioning, and layouts built around scale and privacy. Rather than betting on future delivery, this is a ready home option that suits immediate living, upgrading, or portfolio ownership.",
        "DAMAC Hills remains one of Dubai’s most recognized master communities, shaped around green open spaces, leisure zones, and daily-life convenience. Belair complements that by focusing on generous internal volumes, refined entertaining areas, and outdoor terrace-style living that feels naturally aligned with the community setting.",
        "Below you’ll find the official brochure, a curated gallery using your exact BunnyCDN filenames (no renaming), and the 8-bedroom floor plan set as separate variants—Ground Floor, First Floor, and Roof Floor. Because the villa is ready, the payment plan is set as Full Cash (Ready) across the unit specs.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          category: "Overview",
          fileName: "24.03.21 BELAIR TRUMP ESTATE BROCHURE - ENGLISH.pdf",
          description: "Official Belair Trump Estates brochure (EN)",
        },
      ],
      imgUrl: cdn("Bel Air - Trump Estates - Roof Terrace.JPG"),
      imgAlt: "Belair Trump Estates roof terrace",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 19,062,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "9187 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "✅",
          value: "Ready",
          label: "Delivery Status",
        },
      ],
    },

    gallery: {
      title: "Belair Visuals",
      slides: GALLERY_SLIDES,
      projectTag: "Belair Trump Estates",
    },

    // ✅ Floorplans in variants (same working structure)
    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "8br",
          bedrooms: 8,
          shortLabel: "8 BR",
          title: "8 Bedroom Villa",
          variants: [
            {
              id: "8br-ground",
              shortLabel: "Ground Floor",
              fullTitle: "8 Bedroom Villa (Ground Floor)",
              specs: {
                "Total Area": "9187 sq.ft",
                "Starting Price": "AED 19,062,000",
                Handover: "Ready",
                "Payment Plan": "Full Cash (Ready)",
              },
              images: [FP_8BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "8br-first",
              shortLabel: "First Floor",
              fullTitle: "8 Bedroom Villa (First Floor)",
              specs: {
                "Total Area": "9187 sq.ft",
                "Starting Price": "AED 19,062,000",
                Handover: "Ready",
                "Payment Plan": "Full Cash (Ready)",
              },
              images: [FP_8BR_FIRST],
            },
            {
              id: "8br-roof",
              shortLabel: "Roof Floor",
              fullTitle: "8 Bedroom Villa (Roof Floor)",
              specs: {
                "Total Area": "9187 sq.ft",
                "Starting Price": "AED 19,062,000",
                Handover: "Ready",
                "Payment Plan": "Full Cash (Ready)",
              },
              images: [FP_8BR_ROOF],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Established Community Living", icon: "🏡", color: "#d7b46a" },
        { label: "Premium Villa Positioning", icon: "👑", color: "#d7b46a" },
        { label: "Terraces & Outdoor Living", icon: "🌿", color: "#d7b46a" },
        { label: "Spacious Entertaining Areas", icon: "🍽️", color: "#d7b46a" },
        { label: "Connected Access", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Belair - DAMAC Hills",
      address: "DAMAC Hills, Dubai, UAE",
      // ✅ exactly from your Google Maps pin
      lat: 25.0188236,
      lng: 55.2491493,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌿", text: "Inside DAMAC Hills master community." },
        { icon: "🏡", text: "Villa-focused residential district." },
        { icon: "🚗", text: "Convenient access to key Dubai routes." },
      ],
    },

    cta: {
      title: "Interested in Belair (Trump Estates)?",
      description:
        "Share your details to receive the latest viewing options, availability guidance, and the official Belair brochure.",
      buttons: [
        { text: "Enquire Now", type: "primary", action: "enquire" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title:
        "بيل إير (ترامب إستيتس) في داماك هيلز | فيلا 8 غرف جاهزة | دفع نقدي كامل",
      description:
        "بيل إير (ترامب إستيتس) في داماك هيلز خيار فيلا فاخرة جاهزة من 8 غرف ضمن أحد أكثر مجتمعات دبي السكنية شهرة واستقرارًا. استعرض الكتيّب الرسمي، معرض الصور، ومخططات الطوابق (الأرضي/الأول/السطح).",
      keywords:
        "بيل إير, ترامب إستيتس, داماك هيلز, فيلا 8 غرف دبي, فلل داماك, فيلا جاهزة, دفع نقدي كامل",
      canonical: "/properties/villas/damac/belair-trump-estates",
    },

    project: {
      name: "بيل إير (ترامب إستيتس)",
      developer: "داماك العقارية",
      location: "داماك هيلز، دبي، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "19,062,000 درهم",
      completionDate: "جاهز",
      paymentPlan: "دفع نقدي كامل (جاهز للتسليم)",
      type: "فلل",
      units: "فيلا 8 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "فيلا جاهزة بمستوى راقٍ داخل داماك هيلز",
      paragraphs: [
        "مشروع بيل إير (ترامب إستيتس) داخل داماك هيلز مناسب لمن يبحث عن فيلا فاخرة “جاهزة” ضمن مجتمع قائم ومتكامل—حيث تكون تجربة الحياة اليومية متاحة فورًا دون انتظار التسليم. التركيز هنا على المساحة والخصوصية، مع تخطيط يخدم السكن العائلي والضيافة بأسلوب راقٍ.",
        "داماك هيلز من أكثر المجتمعات شهرة في دبي، ويتميّز بمفهوم المدينة السكنية المتكاملة: مساحات خضراء، مرافق، وخدمات يومية تجعل الاستقرار السكني والطلب طويل الأمد أكثر قوة. وتأتي بيل إير كخيار يرفع مستوى التجربة بخصوصية أعلى ومقاسات كبيرة تعكس طابع الفلل الفاخرة.",
        "ستجد أدناه الكتيّب الرسمي، ومعرض الصور باستخدام أسماء ملفات BunnyCDN كما هي تمامًا، بالإضافة إلى مخططات الفيلا 8 غرف ضمن “Variants” منفصلة: الطابق الأرضي، الطابق الأول، وطابق السطح. وبما أن الوحدة جاهزة، تم ضبط خطة الدفع كـ (دفع نقدي كامل – جاهز للتسليم) داخل مواصفات المخططات.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          category: "نظرة عامة",
          fileName: "24.03.21 BELAIR TRUMP ESTATE BROCHURE - ENGLISH.pdf",
          description: "الكتيّب الرسمي لمشروع بيل إير (EN)",
        },
      ],
      imgUrl: cdn("Bel Air - Trump Estates - Roof Terrace.JPG"),
      imgAlt: "تراس بيل إير",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "19,062,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "9187 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "✅",
          value: "جاهز",
          label: "حالة التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY_SLIDES,
      projectTag: "بيل إير (ترامب إستيتس)",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "8br",
          bedrooms: 8,
          shortLabel: "8 غرف",
          title: "فيلا 8 غرف نوم",
          variants: [
            {
              id: "8br-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا 8 غرف نوم (الطابق الأرضي)",
              specs: {
                "إجمالي المساحة": "9187 قدم²",
                "السعر الابتدائي": "19,062,000 درهم",
                "موعد التسليم": "جاهز",
                "خطة الدفع": "دفع نقدي كامل (جاهز للتسليم)",
              },
              images: [FP_8BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "8br-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا 8 غرف نوم (الطابق الأول)",
              specs: {
                "إجمالي المساحة": "9187 قدم²",
                "السعر الابتدائي": "19,062,000 درهم",
                "موعد التسليم": "جاهز",
                "خطة الدفع": "دفع نقدي كامل (جاهز للتسليم)",
              },
              images: [FP_8BR_FIRST],
            },
            {
              id: "8br-roof",
              shortLabel: "طابق السطح",
              fullTitle: "فيلا 8 غرف نوم (طابق السطح)",
              specs: {
                "إجمالي المساحة": "9187 قدم²",
                "السعر الابتدائي": "19,062,000 درهم",
                "موعد التسليم": "جاهز",
                "خطة الدفع": "دفع نقدي كامل (جاهز للتسليم)",
              },
              images: [FP_8BR_ROOF],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مجتمع متكامل", icon: "🏡", color: "#d7b46a" },
        { label: "تموضع فلل راقٍ", icon: "👑", color: "#d7b46a" },
        { label: "تراسات ومساحات خارجية", icon: "🌿", color: "#d7b46a" },
        { label: "مساحات ضيافة واسعة", icon: "🍽️", color: "#d7b46a" },
        { label: "سهولة الوصول", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Belair - DAMAC Hills",
      address: "داماك هيلز، دبي، الإمارات",
      lat: 25.0188236,
      lng: 55.2491493,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌿", text: "ضمن مجتمع داماك هيلز المتكامل." },
        { icon: "🏡", text: "منطقة فلل بخصوصية أعلى." },
        { icon: "🚗", text: "سهولة الوصول لمحاور دبي الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم ببيل إير (ترامب إستيتس)؟",
      description:
        "أرسل بياناتك للحصول على خيارات المعاينة وأحدث التوافر، مع رابط الكتيّب الرسمي لمشروع بيل إير داخل داماك هيلز.",
      buttons: [
        { text: "اطلب معلومات الآن", type: "primary", action: "enquire" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default belairTrumpEstatesData;
