// src/data/projects/islands/sobha/al-sinniyyah-island.js
// ✅ Same constants + encodeURI cdn() + BASE pattern (like your other projects)
// ✅ Converts ALL Bunny links into cdn() (case/space safe)
// ✅ Keeps your current structure (EN + AR, variants, specs, etc.)
// Source reference: :contentReference[oaicite:1]{index=1}

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

// Folder in Bunny used everywhere in your file
const PROJECT_PATH = "al-sinniyyah-island";

/** Safe with spaces, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Core Images (spaces safe)
// ========================
const HERO_BG = cdn("hero-bg.jpg");
const HERO_INSET = cdn("hero-inset.jpg");
const INTRO_MAIN = cdn("intro-main.jpg");

// ========================
// Brochure PDF (spaces safe)
// ========================
const BROCHURE_PDF = cdn("Sobha Siniya Island Digital Brochure.pdf");

// ========================
// Gallery (spaces safe)
// ========================
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
// Floorplan PNGs (spaces safe)
// ========================
// 4BR
const FP_4BR_GROUND = cdn("Siniyah 4br Ground floor plan.png");
const FP_4BR_FIRST = cdn("Siniyah 4br first floor plan.png");
const FP_4BR_TERRACE = cdn("Siniyah 4Br terrace floor plan.png");

// 5BR
const FP_5BR_GROUND = cdn("Siniyah 5br ground floor plan.png");
const FP_5BR_FIRST = cdn("Siniya 5br First floor plan.png");
const FP_5BR_TERRACE = cdn("Siniya 5BR terrace floor plan.png");

// 6BR
const FP_6BR_GROUND = cdn("Siniya 6br Ground floor plan.png");
const FP_6BR_FIRST = cdn("Siniya 6br First floor plan.png");
const FP_6BR_SECOND = cdn("siniya 6br Second floor plan.png");

// 7BR
const FP_7BR_GROUND = cdn("Siniya 7br ground floor plan.png");
const FP_7BR_FIRST = cdn("Siniya 7br first floor plan.png");
const FP_7BR_SECOND = cdn("Siniya 7br seconf floor plan.png");

export const alSinniyyahIslandData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Sobha Siniya Island | Luxury Villas in Umm Al Quwain | Sobha Realty",
      description:
        "Premium luxury villas on Siniya Island, Umm Al Quwain. Experience island living with world-class amenities, lagoon views, and exclusive community by Sobha Realty.",
      keywords:
        "sobha Siniya island, umm al quwain, luxury villas, sobha realty, Siniya island uaq, beachfront villas",
      canonical: "/properties/villas/sobha/siniya-island",
    },

    project: {
      name: "Sobha Siniya Island",
      developer: "Sobha Realty",
      location: "Siniya Island, Umm Al Quwain",
      status: "Off-Plan",
      startingPrice: "AED 10.7M",
      completionDate: "2029-2030",
      type: "Residential",
      units: "Luxury Villas",
      paymentPlan: "60% / 40%",
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
          title: "Digital Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "🏝️",
          color: "#3A7BD5",
          size: "84.24 MB",
          category: "Overview",
          fileName: "Sobha Siniya Island Digital Brochure.pdf",
          description: "Complete project overview and lifestyle guide",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Sobha Siniya Island luxury villas",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "Siniya Island",
          label: "Private Island",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌊",
          value: "Beachfront",
          label: "Direct Access",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🏡",
          value: "Luxury Villas",
          label: "4-6 Bedrooms",
        },
      ],
    },

    gallery: {
      title: "A Visual Symphony",
      slides: GALLERY_SLIDES,
      projectTag: "Siniya Island",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br",
          bedrooms: 4,
          shortLabel: "4 BR",
          title: "4 Bedroom Villa",
          variants: [
            {
              id: "4br-type-a-ground",
              shortLabel: "Ground Floor",
              fullTitle: "4 Bedroom Villa (Type A - Ground Floor)",
              specs: {
                Unit: "4 BEDROOM VILLA",
                "Total Range": "approx. 3,850 SQ.FT.",
                "Starting Price": "AED 11,532,928",
                Handover: "Q4 2027",
              },
              images: [FP_4BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "4br-type-a-first",
              shortLabel: "First Floor",
              fullTitle: "4 Bedroom Villa (Type A - First Floor)",
              specs: {
                Unit: "4 BEDROOM VILLA",
                "Total Range": "approx. 2,500 SQ.FT.",
                "Starting Price": "AED 11,532,928",
                Handover: "Q4 2027",
              },
              images: [FP_4BR_FIRST],
            },
            {
              id: "4br-type-a-terrace",
              shortLabel: "Terrace Floor",
              fullTitle: "4 Bedroom Villa (Type A - Terrace Floor)",
              specs: {
                Unit: "4 BEDROOM VILLA",
                "Total Range": "approx. 2,220 SQ.FT.",
                "Starting Price": "AED 11,532,928",
                Handover: "Q4 2027",
              },
              images: [FP_4BR_TERRACE],
            },
          ],
        },

        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 BR",
          title: "5 Bedroom Villa",
          variants: [
            {
              id: "5br-ground",
              shortLabel: "Ground Floor",
              fullTitle: "5 Bedroom Villa (Type A - Ground Floor)",
              specs: {
                Unit: "5 BEDROOM VILLA",
                "Total Range": "approx. 5,900 SQ.FT.",
                "Starting Price": "AED 18,468,975",
                Handover: "Q4 2027",
              },
              images: [FP_5BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "5br-first",
              shortLabel: "First Floor",
              fullTitle: "5 Bedroom Villa (Type A - First Floor)",
              specs: {
                Unit: "5 BEDROOM VILLA",
                "Total Range": "approx. 3,650 SQ.FT.",
                "Starting Price": "AED 18,468,975",
                Handover: "Q4 2027",
              },
              images: [FP_5BR_FIRST],
            },
            {
              id: "5br-terrace",
              shortLabel: "Terrace Floor",
              fullTitle: "5 Bedroom Villa (Type A - Terrace Floor)",
              specs: {
                Unit: "5 BEDROOM VILLA",
                "Total Range": "approx. 2,650 SQ.FT.",
                "Starting Price": "AED 18,468,975",
                Handover: "Q4 2027",
              },
              images: [FP_5BR_TERRACE],
            },
          ],
        },

        {
          id: "6br",
          bedrooms: 6,
          shortLabel: "6 BR",
          title: "6 Bedroom Villa",
          variants: [
            {
              id: "6br-ground",
              shortLabel: "Ground Floor",
              fullTitle: "6 Bedroom Villa (Type A - Ground Floor)",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Range": "approx. 8,850 SQ.FT.",
                "Starting Price": "AED 23,375,592",
                Handover: "Q4 2027",
              },
              images: [FP_6BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "6br-first",
              shortLabel: "First Floor",
              fullTitle: "6 Bedroom Villa (Type A - First Floor)",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Range": "approx. 5,000 SQ.FT.",
                "Starting Price": "AED 23,375,592",
                Handover: "Q4 2027",
              },
              images: [FP_6BR_FIRST],
            },
            {
              id: "6br-second",
              shortLabel: "Second Floor",
              fullTitle: "6 Bedroom Villa (Type A - Second Floor)",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Range": "approx. 3,100 SQ.FT.",
                "Starting Price": "AED 23,375,592",
                Handover: "Q4 2027",
              },
              images: [FP_6BR_SECOND],
            },
          ],
        },

        {
          id: "7br",
          bedrooms: 7,
          shortLabel: "7 BR",
          title: "7 Bedroom Villa",
          variants: [
            {
              id: "7br-ground",
              shortLabel: "Ground Level",
              fullTitle: "7 Bedroom Villa (Ground Level)",
              specs: {
                Unit: "7 BEDROOM VILLA",
                "Total Range": "approx. 18,000 SQ.FT.",
                "Starting Price": "On Request",
                Handover: "Q4 2027",
              },
              images: [FP_7BR_GROUND],
            },
            {
              id: "7br-first",
              shortLabel: "First Floor",
              fullTitle: "7 Bedroom Villa (First Floor)",
              specs: {
                Unit: "7 BEDROOM VILLA",
                "Total Range": "approx. 11,200 SQ.FT.",
                "Starting Price": "On Request",
                Handover: "Q4 2027",
              },
              images: [FP_7BR_FIRST],
            },
            {
              id: "7br-second",
              shortLabel: "Second Floor",
              fullTitle: "7 Bedroom Villa (Second Floor)",
              specs: {
                Unit: "7 BEDROOM VILLA",
                "Total Range": "approx. 11,450 SQ.FT.",
                "Starting Price": "On Request",
                Handover: "Q4 2027",
              },
              images: [FP_7BR_SECOND],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Island Lifestyle Amenities",
      amenities: [
        { label: "PRIVATE BEACH CLUB", icon: "🏖️", color: "#d7b46a" },
        { label: "INFINITY POOLS", icon: "🏊", color: "#d7b46a" },
        { label: "MARINA & YACHT BERTHS", icon: "⛵", color: "#d7b46a" },
        { label: "WATERSPORTS CENTER", icon: "🛶", color: "#d7b46a" },
        { label: "FITNESS & WELLNESS CENTER", icon: "💪", color: "#d7b46a" },
        { label: "SPA & TREATMENT ROOMS", icon: "💆", color: "#d7b46a" },
        { label: "FINE DINING RESTAURANTS", icon: "🍽️", color: "#d7b46a" },
        { label: "BEACHSIDE CAFÉS", icon: "☕", color: "#d7b46a" },
        { label: "RETAIL PROMENADE", icon: "🛍️", color: "#d7b46a" },
        { label: "CHILDREN'S PLAY AREAS", icon: "👶", color: "#d7b46a" },
        { label: "KIDS CLUB", icon: "🎨", color: "#d7b46a" },
        { label: "MULTIPLE SWIMMING POOLS", icon: "💦", color: "#d7b46a" },
        { label: "TENNIS COURTS", icon: "🎾", color: "#d7b46a" },
        { label: "PADEL COURTS", icon: "🎾", color: "#d7b46a" },
        { label: "BASKETBALL COURT", icon: "🏀", color: "#d7b46a" },
        { label: "JOGGING & CYCLING TRACKS", icon: "🏃", color: "#d7b46a" },
        { label: "LANDSCAPED PARKS", icon: "🌿", color: "#d7b46a" },
        { label: "BARBEQUE AREAS", icon: "🍖", color: "#d7b46a" },
        { label: "COMMUNITY CENTER", icon: "🏛️", color: "#d7b46a" },
        { label: "BUSINESS CENTER", icon: "💼", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Island Location",
      projectName: "Sobha Siniya Island",
      address: "Siniya Island, Umm Al Quwain, UAE",
      lat: 25.565,
      lng: 55.555,
      zoom: 12,
      proximityFeatures: [
        { icon: "⏱️", text: "45 min from Dubai" },
        { icon: "🌊", text: "Direct beach access" },
        { icon: "🏝️", text: "Private island community" },
        { icon: "🛥️", text: "Marina facilities" },
      ],
    },

    nearbyAttractions: {
      title: "Island & Coastal Access",
      attractions: [
        { name: "UAQ Corniche", distance: "8 km", time: "12 min", icon: "🌊" },
        {
          name: "UAQ Marine Club",
          distance: "6 km",
          time: "10 min",
          icon: "⛵",
        },
        {
          name: "Dreamland Aqua Park",
          distance: "12 km",
          time: "15 min",
          icon: "🎢",
        },
        { name: "UAQ Museum", distance: "10 km", time: "14 min", icon: "🏛️" },
        {
          name: "Al Siniya Island",
          distance: "2 km",
          time: "5 min",
          icon: "🏝️",
        },
        { name: "UAQ Beaches", distance: "5 km", time: "8 min", icon: "🏖️" },
      ],
    },

    cta: {
      title: "Ready for Island Living?",
      description:
        "Contact our sales team to schedule a private viewing or request more information about available villas and pricing.",
      buttons: [
        { text: "Schedule Viewing", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title: "جزيرة شوبا السينية | فلل فاخرة في أم القيوين | Sobha Realty",
      description:
        "فلل فاخرة على جزيرة السينية في أم القيوين. أسلوب حياة جزيري مع إطلالات على البحيرة ومرافق عالمية المستوى ضمن مجتمع خاص من شوبا العقارية.",
      keywords:
        "جزيرة شوبا السينية, Sobha Siniya Island, أم القيوين, فلل فاخرة أم القيوين, جزيرة السينية, واجهة بحرية, فلل على البحيرة",
      canonical: "/properties/villas/sobha/siniya-island",
    },

    project: {
      name: "Sobha Siniya Island",
      developer: "Sobha Realty",
      location: "جزيرة السينية، أم القيوين",
      status: "تحت الإنشاء",
      startingPrice: "10.7 مليون درهم إماراتي",
      completionDate: "2029-2030",
      type: "سكني",
      units: "فلل فاخرة",
      paymentPlan: "60% / 40%",
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
          title: "الكتيّب الرقمي للمشروع",
          url: BROCHURE_PDF,
          type: "main",
          icon: "🏝️",
          color: "#3A7BD5",
          size: "84.24 MB",
          category: "نظرة عامة",
          fileName: "Sobha Siniya Island Digital Brochure.pdf",
          description: "نظرة شاملة على المشروع وأسلوب الحياة في جزيرة السينية",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "فلل فاخرة في مشروع شوبا سينية آيلاند",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "جزيرة السينية",
          label: "جزيرة خاصة",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌊",
          value: "شاطئ خاص",
          label: "وصول مباشر",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🏡",
          value: "فلل فاخرة",
          label: "6-4 غرف نوم",
        },
      ],
    },

    gallery: {
      title: "تجربة بصرية على الجزيرة",
      slides: GALLERY_SLIDES,
      projectTag: "Siniya Island",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br",
          bedrooms: 4,
          shortLabel: "4 غرف",
          title: "فيلا 4 غرف نوم",
          variants: [
            {
              id: "4br-type-a-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا 4 غرف نوم (النوع A - الطابق الأرضي)",
              specs: {
                "نوع الوحدة": "فيلا 4 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 3,850 قدم²",
                "السعر الابتدائي": "11,532,928 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_4BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "4br-type-a-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا 4 غرف نوم (النوع A - الطابق الأول)",
              specs: {
                "نوع الوحدة": "فيلا 4 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 2,500 قدم²",
                "السعر الابتدائي": "11,532,928 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_4BR_FIRST],
            },
            {
              id: "4br-type-a-terrace",
              shortLabel: "طابق التراس",
              fullTitle: "فيلا 4 غرف نوم (النوع A - طابق التراس)",
              specs: {
                "نوع الوحدة": "فيلا 4 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 2,220 قدم²",
                "السعر الابتدائي": "11,532,928 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_4BR_TERRACE],
            },
          ],
        },

        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 غرف",
          title: "فيلا 5 غرف نوم",
          variants: [
            {
              id: "5br-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا 5 غرف نوم (النوع A - الطابق الأرضي)",
              specs: {
                "نوع الوحدة": "فيلا 5 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 5,900 قدم²",
                "السعر الابتدائي": "18,468,975 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_5BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "5br-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا 5 غرف نوم (النوع A - الطابق الأول)",
              specs: {
                "نوع الوحدة": "فيلا 5 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 3,650 قدم²",
                "السعر الابتدائي": "18,468,975 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_5BR_FIRST],
            },
            {
              id: "5br-terrace",
              shortLabel: "طابق التراس",
              fullTitle: "فيلا 5 غرف نوم (النوع A - طابق التراس)",
              specs: {
                "نوع الوحدة": "فيلا 5 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 2,650 قدم²",
                "السعر الابتدائي": "18,468,975 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_5BR_TERRACE],
            },
          ],
        },

        {
          id: "6br",
          bedrooms: 6,
          shortLabel: "6 غرف",
          title: "فيلا 6 غرف نوم",
          variants: [
            {
              id: "6br-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا 6 غرف نوم (النوع A - الطابق الأرضي)",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 8,850 قدم²",
                "السعر الابتدائي": "23,375,592 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_6BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "6br-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا 6 غرف نوم (النوع A - الطابق الأول)",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 5,000 قدم²",
                "السعر الابتدائي": "23,375,592 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_6BR_FIRST],
            },
            {
              id: "6br-second",
              shortLabel: "الطابق الثاني",
              fullTitle: "فيلا 6 غرف نوم (النوع A - الطابق الثاني)",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 3,100 قدم²",
                "السعر الابتدائي": "23,375,592 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_6BR_SECOND],
            },
          ],
        },

        {
          id: "7br",
          bedrooms: 7,
          shortLabel: "7 غرف",
          title: "فيلا 7 غرف نوم",
          variants: [
            {
              id: "7br-ground",
              shortLabel: "المستوى الأرضي",
              fullTitle: "فيلا 7 غرف نوم (المستوى الأرضي)",
              specs: {
                "نوع الوحدة": "فيلا 7 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 18,000 قدم²",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_7BR_GROUND],
            },
            {
              id: "7br-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا 7 غرف نوم (الطابق الأول)",
              specs: {
                "نوع الوحدة": "فيلا 7 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 11,200 قدم²",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_7BR_FIRST],
            },
            {
              id: "7br-second",
              shortLabel: "الطابق الثاني",
              fullTitle: "فيلا 7 غرف نوم (الطابق الثاني)",
              specs: {
                "نوع الوحدة": "فيلا 7 غرف نوم",
                "نطاق المساحة الإجمالية": "تقريبًا 11,450 قدم²",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_7BR_SECOND],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "مرافق أسلوب حياة الجزيرة",
      amenities: [
        { label: "نادي شاطئي خاص", icon: "🏖️", color: "#d7b46a" },
        { label: "مسابح إنفينيتي", icon: "🏊", color: "#d7b46a" },
        { label: "مرسى ومراسي لليخوت", icon: "⛵", color: "#d7b46a" },
        { label: "مركز للرياضات المائية", icon: "🛶", color: "#d7b46a" },
        { label: "نادي صحي ولياقة", icon: "💪", color: "#d7b46a" },
        { label: "سبا وغرف علاجات", icon: "💆", color: "#d7b46a" },
        { label: "مطاعم راقية", icon: "🍽️", color: "#d7b46a" },
        { label: "مقاهي على الشاطئ", icon: "☕", color: "#d7b46a" },
        { label: "ممشى تجاري", icon: "🛍️", color: "#d7b46a" },
        { label: "مناطق ألعاب للأطفال", icon: "👶", color: "#d7b46a" },
        { label: "نادي للأطفال", icon: "🎨", color: "#d7b46a" },
        { label: "عدة مسابح", icon: "💦", color: "#d7b46a" },
        { label: "ملاعب تنس", icon: "🎾", color: "#d7b46a" },
        { label: "ملاعب بادل", icon: "🎾", color: "#d7b46a" },
        { label: "ملعب كرة سلة", icon: "🏀", color: "#d7b46a" },
        { label: "مسارات للجري وركوب الدراجات", icon: "🏃", color: "#d7b46a" },
        { label: "حدائق ومناظر طبيعية", icon: "🌿", color: "#d7b46a" },
        { label: "مناطق للشواء", icon: "🍖", color: "#d7b46a" },
        { label: "مركز مجتمعي", icon: "🏛️", color: "#d7b46a" },
        { label: "مركز أعمال", icon: "💼", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع الجزيرة",
      projectName: "Sobha Siniya Island",
      address: "جزيرة السينية، أم القيوين، الإمارات العربية المتحدة",
      lat: 25.565,
      lng: 55.555,
      zoom: 12,
      proximityFeatures: [
        { icon: "⏱️", text: "45 دقيقة من دبي" },
        { icon: "🌊", text: "وصول مباشر إلى الشاطئ" },
        { icon: "🏝️", text: "مجتمع جزيري خاص" },
        { icon: "🛥️", text: "مرافق للمرسى واليخوت" },
      ],
    },

    nearbyAttractions: {
      title: "الوصول إلى المعالم الساحلية",
      attractions: [
        {
          name: "كورنيش أم القيوين",
          distance: "8 كم",
          time: "12 دقيقة",
          icon: "🌊",
        },
        {
          name: "نادي أم القيوين البحري",
          distance: "6 كم",
          time: "10 دقائق",
          icon: "⛵",
        },
        {
          name: "حديقة دريم لاند المائية",
          distance: "12 كم",
          time: "15 دقيقة",
          icon: "🎢",
        },
        {
          name: "متحف أم القيوين",
          distance: "10 كم",
          time: "14 دقيقة",
          icon: "🏛️",
        },
        {
          name: "جزيرة السينية",
          distance: "2 كم",
          time: "5 دقائق",
          icon: "🏝️",
        },
        {
          name: "شواطئ أم القيوين",
          distance: "5 كم",
          time: "8 دقائق",
          icon: "🏖️",
        },
      ],
    },

    cta: {
      title: "جاهز لتجربة العيش على الجزيرة؟",
      description:
        "تواصل مع فريق المبيعات لحجز جولة خاصة أو طلب مزيد من المعلومات حول الأسعار والفلل المتاحة في شوبا سينية آيلاند.",
      buttons: [
        { text: "حجز جولة", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default alSinniyyahIslandData;
