// src/data/projects/islands/ajmal-makan/al-thuraya-island.js
// ✅ Re-rendered to match the Al-Sinniyyah Island pattern
// ✅ Uses BUNNY_CDN_BASE_URL + PROJECT_PATH + encodeURI cdn()
// ✅ ALL Bunny links are cdn() (space/case safe)
// ✅ EN + AR
// ✅ 5BR / 6BR / 8BR (villas) with variants for 8BR floors
// ✅ Uses your exact filenames from the Bunny folder listing

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

// Folder in Bunny used everywhere in this file
const PROJECT_PATH = "ajmal-makan/al-thuraya-island";

/** Safe with spaces, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Core / Hero Picks (from your file list)
// ========================
const HERO_BG = cdn("CAM03-LARGE VILLA-LAGOON FRONT.png");
const INTRO_MAIN = cdn("CAM 18 - MENSION LIFE STYLE-with pp.png");

// ========================
// Gallery (exact filenames)
// ========================
const GALLERY_SLIDES = [
  // numbered renders
  cdn("1.png"),
  cdn("2.png"),
  cdn("3.png"),
  cdn("4.png"),
  cdn("5.png"),
  cdn("6.png"),
  cdn("7.png"),
  cdn("8.png"),

  // key lifestyle/hero-grade renders (exact)
  cdn("CAM02-Drone View_02.png"),
  cdn("CAM03-Drone View_.png"),
  cdn("CAM04-Drone View.png"),
  cdn("CAM05-Drone View.png"),
  cdn("CAM03-LARGE VILLA-LAGOON FRONT.png"),
  cdn("CAM02-LARGE VILLA-LAGOON BOAT.png"),
  cdn("CAM01-STANDARD VILLA-LAGOON-KAYAK.png"),
  cdn("CAM01-STANDARD VILLA-LAGOON-FISH.png"),
  cdn("CAM 13 - LAGOON MENSION LIFE STYLE - WITH CUTOUTS.png"),
  cdn("CAM 16 - LAGOON MENSION FRONT PROTOTYPE-with pp.png"),
  cdn("Entrance Opt 03 5K.png"),
  cdn("Formal Living & Dining 5K.png"),
  cdn("Master bedroom 5K.png"),
  cdn("Master Ensuite 5k.png"),
  cdn("Seabreeze copyb.jpg"),
  cdn("Sereene.jpg"),
];

// ========================
// Floor Plans (exact filenames)
// ========================
const FP_5BR = cdn("Al Thuraya Island 5BR Floor Plan.webp");
const FP_6BR = cdn("Al Thuraya Island 6BR Floor Plan.webp");

// 8BR: 3 separate images (exact)
const FP_8BR_GROUND = cdn("8 BR Al Thuraya Island Ground Floor.png");
const FP_8BR_FIRST = cdn("8 BR Al Thuraya Island First Floor.png");
const FP_8BR_ROOF = cdn("8 BR Al Thuraya Island Roof.png");

// ========================
// PDFs (NOT provided in your listing)
// Keep null so UI won’t show broken links.
// When you upload PDFs, swap these to cdn("file.pdf").
// ========================
const BROCHURE_PDF = null;
const FACT_SHEET_PDF = null;

// ========================
// Constants
// ========================
const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "40% / 60%";
const LOCATION_NAME = "Al Hamriyah (Sharjah Waterfront City)";
const DEVELOPER = "Ajmal Makan";

// Map (your Google Maps pin for AlThuraya Island)
const MAP_LAT = 25.5047288;
const MAP_LNG = 55.5284053;

export const alThurayaIslandData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Al Thuraya Island by Ajmal Makan | Luxury Villas in Al Hamriyah (Sharjah Waterfront City)",
      description:
        "Al Thuraya Island by Ajmal Makan offers 5, 6 & 8-bedroom luxury villas in Al Hamriyah (Sharjah Waterfront City). Starting from AED 4.121M with a 40/60 payment plan and handover Q4 2027.",
      keywords:
        "Al Thuraya Island, Ajmal Makan, Sharjah Waterfront City, Al Hamriyah villas, lagoon villas, luxury villas",
      canonical: "/properties/villas/ajmal-makan/al-thuraya-island",
    },

    project: {
      name: "Al Thuraya Island",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-Plan",
      market: "offplan",
      startingPrice: "AED 4,121,000",
      completionDate: HANDOVER,
      type: "Island Community",
      units: "5, 6 & 8 Bedroom Villas",
      paymentPlan: PAYMENT_PLAN,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png",
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "ISLAND LIVING IN SHARJAH WATERFRONT CITY",
      paragraphs: [
        "Al Thuraya Island by Ajmal Makan is a premium villa community within Sharjah Waterfront City in Al Hamriyah, crafted for residents seeking privacy, space, and a waterfront lifestyle.",
        "Choose from 5, 6, and 8-bedroom villas with generous built-up areas and refined layouts, complemented by a vibrant coastal environment and community amenities.",
      ],
      brochures: [
        ...(BROCHURE_PDF
          ? [
              {
                title: "Download Brochure",
                url: BROCHURE_PDF,
                type: "main",
                icon: "🏝️",
                color: "#3A7BD5",
                category: "Overview",
                fileName: "Al Thuraya Island Brochure.pdf",
                description: "Project overview and lifestyle guide",
              },
            ]
          : []),
        ...(FACT_SHEET_PDF
          ? [
              {
                title: "Fact Sheet",
                url: FACT_SHEET_PDF,
                type: "secondary",
                icon: "📄",
                color: "#3A7BD5",
                category: "Facts",
                fileName: "Al Thuraya Island Fact Sheet.pdf",
                description: "Key specs, unit mix and highlights",
              },
            ]
          : []),
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Al Thuraya Island luxury villas by Ajmal Makan",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "Island Living",
          label: "Lifestyle",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📍",
          value: "Al Hamriyah",
          label: "Location",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY_SLIDES,
      projectTag: "Al Thuraya Island",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 BR",
          title: "5 Bedroom Villa",
          variants: [
            {
              id: "5br-floorplan",
              shortLabel: "Floor Plan",
              fullTitle: "5 Bedroom Villa (Floor Plan)",
              specs: {
                Unit: "5 BEDROOM VILLA",
                "Total Area": "4,006.16 sq.ft",
                "Starting Price": "AED 4,121,000",
                "Payment Plan": PAYMENT_PLAN,
                Handover: HANDOVER,
              },
              images: [FP_5BR],
              ...(BROCHURE_PDF ? { brochureUrl: BROCHURE_PDF } : {}),
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
              id: "6br-floorplan",
              shortLabel: "Floor Plan",
              fullTitle: "6 Bedroom Villa (Floor Plan)",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Area": "7,159.08 sq.ft",
                "Starting Price": "AED 6,063,000",
                "Payment Plan": PAYMENT_PLAN,
                Handover: HANDOVER,
              },
              images: [FP_6BR],
              ...(BROCHURE_PDF ? { brochureUrl: BROCHURE_PDF } : {}),
            },
          ],
        },

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
                Unit: "8 BEDROOM VILLA",
                "Total Area": "10,954.03 sq.ft",
                "Starting Price": "AED 13,030,000",
                "Payment Plan": PAYMENT_PLAN,
                Handover: HANDOVER,
              },
              images: [FP_8BR_GROUND],
              ...(BROCHURE_PDF ? { brochureUrl: BROCHURE_PDF } : {}),
            },
            {
              id: "8br-first",
              shortLabel: "First Floor",
              fullTitle: "8 Bedroom Villa (First Floor)",
              specs: {
                Unit: "8 BEDROOM VILLA",
                "Total Area": "10,954.03 sq.ft",
                "Starting Price": "AED 13,030,000",
                "Payment Plan": PAYMENT_PLAN,
                Handover: HANDOVER,
              },
              images: [FP_8BR_FIRST],
            },
            {
              id: "8br-roof",
              shortLabel: "Roof",
              fullTitle: "8 Bedroom Villa (Roof)",
              specs: {
                Unit: "8 BEDROOM VILLA",
                "Total Area": "10,954.03 sq.ft",
                "Starting Price": "AED 13,030,000",
                "Payment Plan": PAYMENT_PLAN,
                Handover: HANDOVER,
              },
              images: [FP_8BR_ROOF],
            },
          ],
        },
      ],
      ...(BROCHURE_PDF ? { brochureHref: BROCHURE_PDF } : {}),
    },

    amenities: {
      title: "Lifestyle Amenities",
      amenities: [
        { label: "WATERFRONT COMMUNITY", icon: "🌊", color: "#d7b46a" },
        { label: "LAGOON-STYLE VIEWS", icon: "🏝️", color: "#d7b46a" },
        { label: "COMMUNITY FACILITIES", icon: "🏛️", color: "#d7b46a" },
        { label: "LANDSCAPED AREAS", icon: "🌿", color: "#d7b46a" },
        { label: "PRIVATE OUTDOOR SPACES", icon: "🏡", color: "#d7b46a" },
        { label: "24/7 SECURITY", icon: "🛡️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Al Thuraya Island",
      address: LOCATION_NAME,
      lat: MAP_LAT,
      lng: MAP_LNG,
      zoom: 15,
      proximityFeatures: [
        {
          icon: "🗺️",
          text: "Located in Sharjah Waterfront City (Al Hamriyah)",
        },
        { icon: "🌊", text: "Waterfront community lifestyle" },
        { icon: "🚗", text: "Road connectivity to Sharjah & nearby districts" },
      ],
    },

    cta: {
      title: "Ready to Own on Al Thuraya Island?",
      description:
        "Contact us for updated availability, unit options, and the best offers for Al Thuraya Island by Ajmal Makan.",
      buttons: [
        { text: "Enquire Now", type: "primary", url: "/contact" },
        ...(BROCHURE_PDF
          ? [
              {
                text: "Download Brochure",
                type: "secondary",
                url: BROCHURE_PDF,
              },
            ]
          : []),
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title:
        "جزيرة الثريا من عجمان مكان | فلل فاخرة في الحمريّة (مدينة الشارقة الواجهة البحرية)",
      description:
        "جزيرة الثريا من عجمان مكان توفر فلل 5 و6 و8 غرف نوم في الحمريّة ضمن مدينة الشارقة الواجهة البحرية. تبدأ الأسعار من 4,121,000 درهم مع خطة سداد 40/60 والتسليم في الربع الرابع 2027.",
      keywords:
        "جزيرة الثريا, عجمان مكان, مدينة الشارقة الواجهة البحرية, فلل الحمريّة, فلل فاخرة, فلل على المخطط",
      canonical: "/properties/villas/ajmal-makan/al-thuraya-island",
    },

    project: {
      name: "جزيرة الثريا",
      developer: "عجمان مكان",
      location: "الحمريّة (مدينة الشارقة الواجهة البحرية)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "4,121,000 درهم",
      completionDate: "الربع الرابع 2027",
      type: "مجتمع جزيرة",
      units: "فلل 5 و6 و8 غرف نوم",
      paymentPlan: "40% / 60%",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png",
      companyName: "Ajmal Makan",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة جزيري في مدينة الشارقة الواجهة البحرية",
      paragraphs: [
        "جزيرة الثريا من عجمان مكان هي مجتمع فلل فاخر ضمن مدينة الشارقة الواجهة البحرية في منطقة الحمريّة، مصمم لمن يبحث عن الخصوصية والمساحات الواسعة والحياة على الواجهة البحرية.",
        "اختر بين فلل 5 و6 و8 غرف نوم بمساحات كبيرة وتخطيطات راقية ضمن بيئة ساحلية نابضة بالحياة.",
      ],
      brochures: [
        ...(BROCHURE_PDF
          ? [
              {
                title: "تحميل البروشور",
                url: BROCHURE_PDF,
                type: "main",
                icon: "🏝️",
                color: "#3A7BD5",
                category: "نظرة عامة",
                fileName: "Al Thuraya Island Brochure.pdf",
                description: "نظرة شاملة على المشروع وأسلوب الحياة",
              },
            ]
          : []),
        ...(FACT_SHEET_PDF
          ? [
              {
                title: "ملف المعلومات",
                url: FACT_SHEET_PDF,
                type: "secondary",
                icon: "📄",
                color: "#3A7BD5",
                category: "معلومات",
                fileName: "Al Thuraya Island Fact Sheet.pdf",
                description: "أهم المواصفات ومزيج الوحدات",
              },
            ]
          : []),
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "جزيرة الثريا - فلل فاخرة من عجمان مكان",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "حياة الجزيرة",
          label: "نمط الحياة",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📍",
          value: "الحمريّة",
          label: "الموقع",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "📅",
          value: "الربع الرابع 2027",
          label: "التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY_SLIDES,
      projectTag: "جزيرة الثريا",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 غرف",
          title: "فيلا 5 غرف نوم",
          variants: [
            {
              id: "5br-floorplan",
              shortLabel: "المخطط",
              fullTitle: "فيلا 5 غرف نوم (المخطط)",
              specs: {
                "نوع الوحدة": "فيلا 5 غرف نوم",
                "إجمالي المساحة": "4,006.16 قدم²",
                "السعر الابتدائي": "4,121,000 درهم",
                "خطة السداد": PAYMENT_PLAN,
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_5BR],
              ...(BROCHURE_PDF ? { brochureUrl: BROCHURE_PDF } : {}),
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
              id: "6br-floorplan",
              shortLabel: "المخطط",
              fullTitle: "فيلا 6 غرف نوم (المخطط)",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "إجمالي المساحة": "7,159.08 قدم²",
                "السعر الابتدائي": "6,063,000 درهم",
                "خطة السداد": PAYMENT_PLAN,
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_6BR],
              ...(BROCHURE_PDF ? { brochureUrl: BROCHURE_PDF } : {}),
            },
          ],
        },

        {
          id: "8br",
          bedrooms: 8,
          shortLabel: "8 غرف",
          title: "فيلا 8 غرف نوم",
          variants: [
            {
              id: "8br-ground",
              shortLabel: "الأرضي",
              fullTitle: "فيلا 8 غرف نوم (الطابق الأرضي)",
              specs: {
                "نوع الوحدة": "فيلا 8 غرف نوم",
                "إجمالي المساحة": "10,954.03 قدم²",
                "السعر الابتدائي": "13,030,000 درهم",
                "خطة السداد": PAYMENT_PLAN,
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_8BR_GROUND],
              ...(BROCHURE_PDF ? { brochureUrl: BROCHURE_PDF } : {}),
            },
            {
              id: "8br-first",
              shortLabel: "الأول",
              fullTitle: "فيلا 8 غرف نوم (الطابق الأول)",
              specs: {
                "نوع الوحدة": "فيلا 8 غرف نوم",
                "إجمالي المساحة": "10,954.03 قدم²",
                "السعر الابتدائي": "13,030,000 درهم",
                "خطة السداد": PAYMENT_PLAN,
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_8BR_FIRST],
            },
            {
              id: "8br-roof",
              shortLabel: "السطح",
              fullTitle: "فيلا 8 غرف نوم (السطح)",
              specs: {
                "نوع الوحدة": "فيلا 8 غرف نوم",
                "إجمالي المساحة": "10,954.03 قدم²",
                "السعر الابتدائي": "13,030,000 درهم",
                "خطة السداد": PAYMENT_PLAN,
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_8BR_ROOF],
            },
          ],
        },
      ],
      ...(BROCHURE_PDF ? { brochureHref: BROCHURE_PDF } : {}),
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مجتمع على الواجهة البحرية", icon: "🌊", color: "#d7b46a" },
        { label: "إطلالات بحيرات", icon: "🏝️", color: "#d7b46a" },
        { label: "مرافق مجتمعية", icon: "🏛️", color: "#d7b46a" },
        { label: "مساحات خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "مساحات خارجية خاصة", icon: "🏡", color: "#d7b46a" },
        { label: "أمن 24/7", icon: "🛡️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "جزيرة الثريا",
      address: LOCATION_NAME,
      lat: MAP_LAT,
      lng: MAP_LNG,
      zoom: 15,
      proximityFeatures: [
        { icon: "🗺️", text: "ضمن مدينة الشارقة الواجهة البحرية (الحمريّة)" },
        { icon: "🌊", text: "مجتمع سكني على الواجهة البحرية" },
        { icon: "🚗", text: "سهولة الوصول إلى الشارقة والمناطق القريبة" },
      ],
    },

    cta: {
      title: "جاهز لامتلاك في جزيرة الثريا؟",
      description:
        "تواصل معنا لمعرفة التوافر الحالي وخيارات الوحدات وأفضل العروض لجزيرة الثريا من عجمان مكان.",
      buttons: [
        { text: "سجل اهتمامك", type: "primary", url: "/contact" },
        ...(BROCHURE_PDF
          ? [{ text: "تحميل البروشور", type: "secondary", url: BROCHURE_PDF }]
          : []),
      ],
    },
  },
};

export default alThurayaIslandData;
