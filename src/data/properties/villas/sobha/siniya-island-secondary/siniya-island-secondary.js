// siniya-island-secondary.js
// ✅ Standalone dataset (BLUEPRINT compliant)
// ✅ ONLY: 4BR RESALE VILLA floorplan slider (Ground / First / Terrace)
// ✅ ONLY 1 TAB (4 BR) -> plans[] has ONE item
// ✅ Bunny CDN-safe links (spaces/case safe) via cdn()

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

// Bunny folder name
const PROJECT_PATH = "al-sinniyyah-island";

/** Safe with spaces & special chars, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Core Images
// ========================
const HERO_BG = cdn("hero-bg.jpg");
const HERO_INSET = cdn("hero-inset.jpg");
const INTRO_MAIN = cdn("intro-main.jpg");

// ========================
// Brochure PDF (optional, kept for blueprint compatibility)
// ========================
const BROCHURE_PDF = cdn("Sobha Siniya Island Digital Brochure.pdf");

const GALLERY_SLIDES = [
  cdn("exterior-5a-front-01.jpg"),
  cdn("exterior-5a-pool-01.jpg"),
  cdn("exterior-5b-front-01.jpg"),
  cdn("exterior-5b-pool-01.jpg"),
  cdn("exterior-7b-typeb-facade-01.jpg"),
  cdn("exterior-7b-typeb-lagoon-01.jpg"),
  cdn("interior-5b-living-01.jpg"),
  cdn("Interior-5b-master-01.jpg"),
  HERO_INSET,
  HERO_BG,
];

// ========================
// ✅ RESALE 4BR Floorplans (Slider)
// ========================
const FP_4BR_RESALE_GROUND = cdn("4br-resale-ground-floor.png");
const FP_4BR_RESALE_FIRST = cdn("4br-resale-first-floor.png");
const FP_4BR_RESALE_TERRACE = cdn("4br-resale-terrace-floor.png");

export const siniyaIslandSecondaryData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "4 Bedroom Resale Villa | Siniya Island | Floor Plans & Payment Plan",
      description:
        "4 Bedroom Resale Villa (Siniya Island) — view resale floor plans (ground/first/terrace) with total area, price, handover, and payment plan.",
      keywords:
        "Siniya Island resale villa, 4 bedroom resale villa, floor plan, Umm Al Quwain, Sobha",
      canonical: "/properties/villas/sobha/siniya-island-secondary",
    },

    project: {
      name: "Siniya Island (Resale)",
      developer: "Sobha Realty",
      location: "Siniya Island, Umm Al Quwain",
      status: "Secondary",
      startingPrice: "AED 14,856,800",
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
      title: "ISLAND LIVING REDEFINED",
      paragraphs: [
        "Sobha Siniya Island presents an exclusive collection of luxury villas on the pristine shores of Umm Al Quwain. This master-planned island community combines natural beauty with sophisticated living, offering residents direct beach access, lagoon views, and world-class amenities.",
        "Choose from 4-6 bedroom luxury villas, each designed to maximize the island lifestyle with private gardens, pools, and premium finishes. Experience the perfect harmony of tranquility and luxury in one of the UAE's most promising destinations with 70% of the island dedicated to green spaces and amenities.",
      ],
      brochures: [
        {
          title: "Project Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#3A7BD5",
          size: "84.24 MB",
          category: "Overview",
          fileName: "Sobha Siniya Island Digital Brochure.pdf",
          description: "General project brochure (optional)",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Siniya Island villas",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "Siniya Island",
          label: "Resale",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🏡",
          value: "4 Bedroom",
          label: "Villa",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "📐",
          value: "4,822 SQ.FT.",
          label: "Total Area",
        },
      ],
    },

    // Kept for blueprint compatibility (can be empty if your UI doesn’t use it here)
    gallery: {
      title: "Gallery",
      slides: GALLERY_SLIDES,
      projectTag: "Siniya Island (Resale)",
    },

    // ✅ ONLY ONE FLOORPLAN TAB + ONLY RESALE VARIANTS (3 SLIDES)
    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br-resale",
          bedrooms: 4,
          shortLabel: "4 BR", // ✅ single tab label
          title: "4 Bedroom Resale Villa (Siniya Island)",
          badge: "RESALE VILLA", // ✅ optional (won’t break if unused)
          variants: [
            {
              id: "4br-resale-ground",
              shortLabel: "Ground Floor",
              fullTitle:
                "4 Bedroom Resale Villa (Siniya Island) — Ground Floor",
              badge: "RESALE VILLA",
              slideLabel: "1 / 3",
              specs: {
                Unit: "4 BEDROOM RESALE VILLA (SINIYA ISLAND)",
                "Total Area": "4,822 SQ.FT.",
                "Starting Price": "AED 14,856,800",
                Handover: "Q4 2027",
                "Payment Plan": "60% During Construction + 40% Upon Handover",
              },
              images: [FP_4BR_RESALE_GROUND],
            },
            {
              id: "4br-resale-first",
              shortLabel: "First Floor",
              fullTitle: "4 Bedroom Resale Villa (Siniya Island) — First Floor",
              badge: "RESALE VILLA",
              slideLabel: "2 / 3",
              specs: {
                Unit: "4 BEDROOM RESALE VILLA (SINIYA ISLAND)",
                "Total Area": "4,822 SQ.FT.",
                "Starting Price": "AED 14,856,800",
                Handover: "Q4 2027",
                "Payment Plan": "60% During Construction + 40% Upon Handover",
              },
              images: [FP_4BR_RESALE_FIRST],
            },
            {
              id: "4br-resale-terrace",
              shortLabel: "Terrace Floor",
              fullTitle:
                "4 Bedroom Resale Villa (Siniya Island) — Terrace Floor",
              badge: "RESALE VILLA",
              slideLabel: "3 / 3",
              specs: {
                Unit: "4 BEDROOM RESALE VILLA (SINIYA ISLAND)",
                "Total Area": "4,822 SQ.FT.",
                "Starting Price": "AED 14,856,800",
                Handover: "Q4 2027",
                "Payment Plan": "60% During Construction + 40% Upon Handover",
              },
              images: [FP_4BR_RESALE_TERRACE],
            },
          ],
        },
      ],
      // Optional (if your UI shows a brochure button near floorplans)
      brochureHref: BROCHURE_PDF,

      // Optional structured payment plan (if you want the card to render from data)
      paymentPlanCard: {
        duringConstruction: 60,
        uponHandover: 40,
        note: "60% During Construction + 40% Upon Handover",
      },
    },

    // Kept for blueprint compatibility
    amenities: { title: "Amenities", amenities: [] },

    // Kept for blueprint compatibility
    location: {
      title: "Location",
      projectName: "Siniya Island (Resale)",
      address: "Siniya Island, Umm Al Quwain, UAE",
      lat: 25.565,
      lng: 55.555,
      zoom: 12,
      proximityFeatures: [],
    },

    // Kept for blueprint compatibility
    cta: {
      title: "Interested in this resale unit?",
      description: "Contact us to check availability and arrange a viewing.",
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
      title: "فيلا إعادة بيع 4 غرف | جزيرة السينية | المخططات وخطة الدفع",
      description:
        "فيلا إعادة بيع 4 غرف (جزيرة السينية) — عرض مخططات الطوابق (الأرضي/الأول/التراس) مع المساحة والسعر والتسليم وخطة الدفع.",
      keywords:
        "جزيرة السينية إعادة بيع, فيلا 4 غرف إعادة بيع, مخطط طابق, أم القيوين, شوبا",
      canonical: "/properties/villas/sobha/siniya-island-secondary",
    },

    project: {
      name: "جزيرة السينية (إعادة بيع)",
      developer: "Sobha Realty",
      location: "جزيرة السينية، أم القيوين",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "14,856,800 درهم",
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
      title: "أسلوب حياة جزيري بمعايير جديدة",
      paragraphs: [
        "يقدّم مشروع شوبا سينية آيلاند مجموعة مميّزة من الفلل الفاخرة على شواطئ أم القيوين الهادئة. يجمع هذا المجتمع الجزيري المخطّط بعناية بين الطبيعة الخلابة والتصميم المعاصر، مع وصول مباشر إلى الشاطئ وإطلالات على البحيرات والمسطحات المائية.",
        "اختر بين فلل فاخرة من 4–6 غرف نوم، جميعها مصممة لتعظيم تجربة العيش على الجزيرة مع حدائق خاصة، مسابح، وتشطيبات فاخرة. 70% من مساحة الجزيرة مخصصة للمساحات الخضراء والمرافق.",
      ],
      brochures: [
        {
          title: "كتيّب المشروع",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#3A7BD5",
          size: "84.24 MB",
          category: "نظرة عامة",
          fileName: "Sobha Siniya Island Digital Brochure.pdf",
          description: "كتيّب عام للمشروع (اختياري)",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "فلل جزيرة السينية",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "جزيرة السينية",
          label: "إعادة بيع",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🏡",
          value: "4 غرف",
          label: "فيلا",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "📐",
          value: "4,822 قدم²",
          label: "المساحة",
        },
      ],
    },

    gallery: {
      title: "المعرض",
      slides: [HERO_INSET, HERO_BG],
      projectTag: "جزيرة السينية (إعادة بيع)",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br-resale",
          bedrooms: 4,
          shortLabel: "4 غرف", // ✅ single tab label (AR)
          title: "فيلا إعادة بيع 4 غرف (جزيرة السينية)",
          badge: "فيلا إعادة بيع",
          variants: [
            {
              id: "4br-resale-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا إعادة بيع 4 غرف (جزيرة السينية) — الطابق الأرضي",
              badge: "فيلا إعادة بيع",
              slideLabel: "1 / 3",
              specs: {
                "نوع الوحدة": "فيلا إعادة بيع 4 غرف (جزيرة السينية)",
                "المساحة الإجمالية": "4,822 قدم²",
                "السعر الابتدائي": "14,856,800 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": "60% أثناء الإنشاء + 40% عند التسليم",
              },
              images: [FP_4BR_RESALE_GROUND],
            },
            {
              id: "4br-resale-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا إعادة بيع 4 غرف (جزيرة السينية) — الطابق الأول",
              badge: "فيلا إعادة بيع",
              slideLabel: "2 / 3",
              specs: {
                "نوع الوحدة": "فيلا إعادة بيع 4 غرف (جزيرة السينية)",
                "المساحة الإجمالية": "4,822 قدم²",
                "السعر الابتدائي": "14,856,800 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": "60% أثناء الإنشاء + 40% عند التسليم",
              },
              images: [FP_4BR_RESALE_FIRST],
            },
            {
              id: "4br-resale-terrace",
              shortLabel: "طابق التراس",
              fullTitle: "فيلا إعادة بيع 4 غرف (جزيرة السينية) — طابق التراس",
              badge: "فيلا إعادة بيع",
              slideLabel: "3 / 3",
              specs: {
                "نوع الوحدة": "فيلا إعادة بيع 4 غرف (جزيرة السينية)",
                "المساحة الإجمالية": "4,822 قدم²",
                "السعر الابتدائي": "14,856,800 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": "60% أثناء الإنشاء + 40% عند التسليم",
              },
              images: [FP_4BR_RESALE_TERRACE],
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

    amenities: { title: "المرافق", amenities: [] },

    location: {
      title: "الموقع",
      projectName: "جزيرة السينية (إعادة بيع)",
      address: "جزيرة السينية، أم القيوين، الإمارات العربية المتحدة",
      lat: 25.565,
      lng: 55.555,
      zoom: 12,
      proximityFeatures: [],
    },

    cta: {
      title: "مهتم بهذه الوحدة (إعادة بيع)؟",
      description: "تواصل معنا للتحقق من التوفر وترتيب موعد للمعاينة.",
      buttons: [
        { text: "تواصل معنا", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default siniyaIslandSecondaryData;
