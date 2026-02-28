// sobha-elwood-secondary.js
// ✅ Standalone dataset (BLUEPRINT compliant)
// ✅ ONLY: 4BR RESALE VILLA floorplan slider (Ground / First)
// ✅ ONLY 1 TAB (4 BR) -> plans[] has ONE item
// ✅ Bunny CDN-safe links (spaces/case safe) via cdn()

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

// Bunny folder name
const PROJECT_PATH = "sobha-elwood";

/** Safe with spaces & special chars, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Core Images
// ========================
const HERO_BG = cdn("TYPE 4A FRONT.jpg");
const HERO_INSET = cdn("ELWOOD 4BR Type A_1.jpg");
const INTRO_MAIN = cdn("TYPE 4A COURTYARD.jpg");

// ========================
// Brochure PDF
// ========================
const BROCHURE_PDF = cdn("Sobha Elwood Brochure_29 July 2025.pdf");

const GALLERY_SLIDES = [
  cdn("TYPE 4A FRONT.jpg"),
  cdn("TYPE 4A COURTYARD.jpg"),
  cdn("TYPE 4C FRONT.jpg"),
  cdn("TYPE 4C COURTYARD.jpg"),
  cdn("ELWOOD 4BR Type A_1.jpg"),
  cdn("4 BR tybe A _ bathroom_.jpg"),
  cdn("ELWOOD Kitchen 4 BR TYPE A 3.jpg"),
  HERO_INSET,
  HERO_BG,
];

// ========================
// ✅ RESALE 4BR Floorplans (Slider) - ONLY RESALE VARIANTS
// ========================
const FP_4BR_RESALE_GROUND = cdn("4br-elwood-resale-ground-floor.png");
const FP_4BR_RESALE_FIRST = cdn("4br-elwood-resale-first-floor.png");

export const sobhaElwoodSecondaryData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "4 Bedroom Resale Villa | Sobha Elwood Dubai Land | Floor Plans & Payment Plan",
      description:
        "4 Bedroom Resale Villa (Sobha Elwood) — view resale floor plans (ground/first) with total area, price, handover, and 60/40 payment plan.",
      keywords:
        "Sobha Elwood resale villa, 4 bedroom resale villa, Dubai Land, floor plan, Elwood Estates, Sobha Realty",
      canonical: "/properties/villas/sobha/sobha-elwood-secondary",
    },

    project: {
      name: "Sobha Elwood (Resale)",
      developer: "Sobha Realty",
      location: "Dubai Land, Dubai",
      status: "Secondary",
      startingPrice: "AED 9,915,280",
      completionDate: "Q4 2027",
      type: "Residential",
      units: "4 Bedroom Resale Villa",
      paymentPlan: "60% / 40%",
      baseMediaUrl: BASE,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/Sobha-Realty-Square-Logo.jpg",
      companyName: "Sobha Realty",
      rating: 4.7,
    },

    intro: {
      title: "MODERN FAMILY LIVING IN DUBAI LAND",
      paragraphs: [
        "Presenting this stunning 4-bedroom plus maid's villa with private pool in the highly anticipated Sobha Elwood Estates. Designed for modern family living, the villa features spacious interiors, premium finishes, and lush landscaped gardens.",
        "Located in the fast-growing Dubai Land area along Al Ain Road, residents benefit from excellent connectivity, nearby schools, retail, and leisure options. With its prime location and quality build, this villa offers strong capital appreciation potential for investors and exceptional comfort for end users seeking a luxury family home in a thriving new community.",
      ],
      brochures: [
        {
          title: "Project Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#3A7BD5",
          size: "96.88 MB",
          category: "Overview",
          fileName: "Sobha Elwood Brochure_29 July 2025.pdf",
          description: "Official Sobha Elwood brochure",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Sobha Elwood villa courtyard",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏡",
          value: "Sobha Elwood",
          label: "Resale",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🛏️",
          value: "4 Bedroom",
          label: "Villa",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "📐",
          value: "4,994 SQ.FT.",
          label: "Built-up Area",
        },
      ],
    },

    gallery: {
      title: "Gallery",
      slides: GALLERY_SLIDES,
      projectTag: "Sobha Elwood (Resale)",
    },

    // ✅ ONLY ONE FLOORPLAN TAB + ONLY RESALE VARIANTS (2 SLIDES)
    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br-resale",
          bedrooms: 4,
          shortLabel: "4 BR",
          title: "4 Bedroom Resale Villa (Sobha Elwood)",
          badge: "RESALE VILLA",
          variants: [
            {
              id: "4br-resale-ground",
              shortLabel: "Ground Floor",
              fullTitle: "4 Bedroom Resale Villa (Sobha Elwood) — Ground Floor",
              badge: "RESALE VILLA",
              slideLabel: "1 / 2",
              specs: {
                Unit: "4 BEDROOM RESALE VILLA (SOBHA ELWOOD)",
                "Built-up Area": "4,994 SQ.FT.",
                "Starting Price": "AED 9,915,280",
                Handover: "Q4 2027",
                "Payment Plan": "60% During Construction + 40% Upon Handover",
                "Property Features":
                  "4 Bedrooms, 5 Bathrooms, Maid Room, Private Pool, Private Garden",
              },
              images: [FP_4BR_RESALE_GROUND],
            },
            {
              id: "4br-resale-first",
              shortLabel: "First Floor",
              fullTitle: "4 Bedroom Resale Villa (Sobha Elwood) — First Floor",
              badge: "RESALE VILLA",
              slideLabel: "2 / 2",
              specs: {
                Unit: "4 BEDROOM RESALE VILLA (SOBHA ELWOOD)",
                "Built-up Area": "4,994 SQ.FT.",
                "Starting Price": "AED 9,915,280",
                Handover: "Q4 2027",
                "Payment Plan": "60% During Construction + 40% Upon Handover",
                "Property Features":
                  "4 Bedrooms, 5 Bathrooms, Maid Room, Private Pool, Private Garden",
              },
              images: [FP_4BR_RESALE_FIRST],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
      paymentPlanCard: {
        duringConstruction: 60,
        uponHandover: 40,
        note: "60% During Construction + 40% Upon Handover",
      },
    },

    amenities: {
      title: "Amenities",
      amenities: [
        "Private Pool",
        "Private Garden",
        "Maid Room",
        "Premium Finishes",
        "Lush Landscaped Gardens",
        "Modern Family Living Design",
      ],
    },

    location: {
      title: "Location",
      projectName: "Sobha Elwood (Resale)",
      address: "Dubai Land, Dubai, United Arab Emirates",
      lat: 25.0206231, // Coordinates from Google Maps link
      lng: 55.44954,
      zoom: 14,
      proximityFeatures: [
        "Excellent connectivity to major highways",
        "Nearby schools",
        "Retail & shopping options",
        "Healthcare facilities",
        "Entertainment destinations",
      ],
    },

    cta: {
      title: "Interested in this resale villa?",
      description:
        "Contact us to check availability, arrange a viewing, and discuss exclusive payment plans.",
      buttons: [
        { text: "Contact Us", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title: "فيلا إعادة بيع 4 غرف | شوبا إلوود دبي لاند | المخططات وخطة الدفع",
      description:
        "فيلا إعادة بيع 4 غرف (شوبا إلوود) — عرض مخططات الطوابق (الأرضي/الأول) مع المساحة والسعر والتسليم وخطة الدفع 60/40.",
      keywords:
        "شوبا إلوود إعادة بيع, فيلا 4 غرف إعادة بيع, دبي لاند, مخطط طابق, إلوود استيتس, شوبا ريالتي",
      canonical: "/properties/villas/sobha/sobha-elwood-secondary",
    },

    project: {
      name: "شوبا إلوود (إعادة بيع)",
      developer: "Sobha Realty",
      location: "دبي لاند، دبي",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "9,915,280 درهم",
      completionDate: "الربع الرابع 2027",
      type: "سكني",
      units: "فيلا إعادة بيع 4 غرف",
      paymentPlan: "60% / 40%",
      baseMediaUrl: BASE,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/Sobha-Realty-Square-Logo.jpg",
      companyName: "Sobha Realty",
      rating: 4.7,
    },

    intro: {
      title: "حياة عائلية عصرية في دبي لاند",
      paragraphs: [
        "تقدم هذه الفيلا المذهلة المكونة من 4 غرف نوم بالإضافة إلى غرفة خادم مع مسبح خاص في مشروع شوبا إلوود إستيتس المنتظر بشدة. مصممة للحياة العائلية العصرية، وتتميز الفيلا بديكورات داخلية فسيحة وتشطيبات فاخرة وحدائق خضراء.",
        "تقع في منطقة دبي لاند سريعة النمو على طريق العين، حيث يستفيد السكان من اتصال ممتاز ومدارس قريبة ومرافق تسوق وترفيه. مع موقعها المتميز وجودة البناء، تقدم هذه الفيلا إمكانات قوية لتقدير رأس المال للمستثمرين وراحة استثنائية للمستخدمين النهائيين الذين يبحثون عن منزل عائلي فاخر في مجتمع جديد مزدهر.",
      ],
      brochures: [
        {
          title: "كتيب المشروع",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#3A7BD5",
          size: "96.88 ميجابايت",
          category: "نظرة عامة",
          fileName: "Sobha Elwood Brochure_29 July 2025.pdf",
          description: "الكتيب الرسمي لمشروع شوبا إلوود",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "فيلا شوبا إلوود",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏡",
          value: "شوبا إلوود",
          label: "إعادة بيع",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🛏️",
          value: "4 غرف نوم",
          label: "فيلا",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "📐",
          value: "4,994 قدم²",
          label: "المساحة",
        },
      ],
    },

    gallery: {
      title: "المعرض",
      slides: GALLERY_SLIDES,
      projectTag: "شوبا إلوود (إعادة بيع)",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br-resale",
          bedrooms: 4,
          shortLabel: "4 غرف",
          title: "فيلا إعادة بيع 4 غرف (شوبا إلوود)",
          badge: "فيلا إعادة بيع",
          variants: [
            {
              id: "4br-resale-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا إعادة بيع 4 غرف (شوبا إلوود) — الطابق الأرضي",
              badge: "فيلا إعادة بيع",
              slideLabel: "1 / 2",
              specs: {
                "نوع الوحدة": "فيلا إعادة بيع 4 غرف (شوبا إلوود)",
                "المساحة الإجمالية": "4,994 قدم²",
                "السعر الابتدائي": "9,915,280 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": "60% أثناء الإنشاء + 40% عند التسليم",
                "مزايا العقار":
                  "4 غرف نوم، 5 حمامات، غرفة خادمة، مسبح خاص، حديقة خاصة",
              },
              images: [FP_4BR_RESALE_GROUND],
            },
            {
              id: "4br-resale-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا إعادة بيع 4 غرف (شوبا إلوود) — الطابق الأول",
              badge: "فيلا إعادة بيع",
              slideLabel: "2 / 2",
              specs: {
                "نوع الوحدة": "فيلا إعادة بيع 4 غرف (شوبا إلوود)",
                "المساحة الإجمالية": "4,994 قدم²",
                "السعر الابتدائي": "9,915,280 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": "60% أثناء الإنشاء + 40% عند التسليم",
                "مزايا العقار":
                  "4 غرف نوم، 5 حمامات، غرفة خادمة، مسبح خاص، حديقة خاصة",
              },
              images: [FP_4BR_RESALE_FIRST],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
      paymentPlanCard: {
        duringConstruction: 60,
        uponHandover: 40,
        note: "60% أثناء الإنشاء + 40% عند التسليم",
      },
    },

    amenities: {
      title: "المرافق",
      amenities: [
        "مسبح خاص",
        "حديقة خاصة",
        "غرفة خادمة",
        "تشطيبات فاخرة",
        "حدائق خضراء مصممة",
        "تصميم معيشة عائلي عصرى",
      ],
    },

    location: {
      title: "الموقع",
      projectName: "شوبا إلوود (إعادة بيع)",
      address: "دبي لاند، دبي، الإمارات العربية المتحدة",
      lat: 25.0206231,
      lng: 55.44954,
      zoom: 14,
      proximityFeatures: [
        "اتصال ممتاز بالطرق الرئيسية",
        "مدارس قريبة",
        "خيارات تسوق وتجزئة",
        "مرافق رعاية صحية",
        "وجهات ترفيهية",
      ],
    },

    cta: {
      title: "مهتم بهذه الفيلا (إعادة بيع)؟",
      description:
        "تواصل معنا للتحقق من التوفر وترتيب موعد للمعاينة ومناقشة خطط الدفع الحصرية.",
      buttons: [
        { text: "تواصل معنا", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default sobhaElwoodSecondaryData;
