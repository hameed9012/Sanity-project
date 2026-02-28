// address-villas-hillcrest-secondary.js
// ✅ Standalone dataset (BLUEPRINT compliant)
// ✅ ONLY: RESALE VILLA floorplan slider (Basement / Ground / First / Roof)
// ✅ ONLY 1 TAB
// ✅ Bunny CDN-safe links (spaces/case safe) via cdn()

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

// Bunny folder name
const PROJECT_PATH = "emaar/address-villa-hills-crest";

/** Safe with spaces & special chars, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Core Images
// ========================
const HERO_BG = cdn("13.webp");
const HERO_INSET = cdn("2.webp");
const INTRO_MAIN = cdn("3.webp");

// ========================
// Brochure PDF
// ========================
const BROCHURE_PDF = cdn("Address Villas Hillcrest.pdf");

// ========================
// Gallery
// ========================
const GALLERY_SLIDES = [
  cdn("1.jpg"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("12.webp"),
  cdn("13.webp"),
];

// ========================
// ✅ RESALE Floorplans (Slider)
// ========================
const FP_BASEMENT = cdn("basement.png");
const FP_GROUND = cdn("ground-floor.png");
const FP_FIRST = cdn("first-floor.png");
const FP_ROOF = cdn("roof-floor.png");

export const addressVillasHillcrestSecondaryData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Luxury Resale Villa | Address Villas Hillcrest Dubai Hills | Floor Plans & Details",
      description:
        "Luxury resale villa at Address Villas Hillcrest, Dubai Hills Estate — view basement, ground, first and roof floor plans with area, features and brochure.",
      keywords:
        "Address Villas Hillcrest resale, Dubai Hills villa resale, Emaar luxury villa, Address branded villas",
      canonical: "/properties/villas/emaar/address-villas-hillcrest-secondary",
    },

    project: {
      name: "Address Villas Hillcrest (Resale)",
      developer: "Emaar",
      location: "Dubai Hills Estate, Dubai",
      status: "Secondary",
      startingPrice: "AED 31,000,000",
      completionDate: "Ready",
      type: "Residential",
      units: "Luxury Resale Villa",
      paymentPlan: "Ready Property",
      baseMediaUrl: BASE,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/emaar-logo.jpg",
      companyName: "Emaar",
      rating: 4.8,
    },

    intro: {
      title: "BRANDED LUXURY LIVING IN DUBAI HILLS",
      paragraphs: [
        "Address Villas Hillcrest represents the pinnacle of branded luxury living by Emaar. Located in the prestigious Dubai Hills Estate, these ready villas combine contemporary architecture with the signature hospitality standards of Address Hotels & Resorts.",
        "Surrounded by lush greenery, scenic walkways, and premium lifestyle amenities, this resale villa offers spacious interiors, elegant finishes, and exceptional privacy — ideal for end users and investors seeking a refined address in Dubai.",
      ],
      brochures: [
        {
          title: "Project Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#3A7BD5",
          size: "10.55 MB",
          category: "Overview",
          fileName: "Address Villas Hillcrest.pdf",
          description: "Official Address Villas Hillcrest brochure",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Address Villas Hillcrest Dubai Hills",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏡",
          value: "Address",
          label: "Branded Villa",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📍",
          value: "Dubai Hills",
          label: "Prime Location",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🛏️",
          value: "Luxury Villa",
          label: "Resale",
        },
      ],
    },

    gallery: {
      title: "Gallery",
      slides: GALLERY_SLIDES,
      projectTag: "Address Villas Hillcrest (Resale)",
    },

    // ✅ ONLY ONE FLOORPLAN TAB
    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "resale-villa",
          bedrooms: 5,
          shortLabel: "Villa",
          title: "Luxury Resale Villa (Address Villas Hillcrest)",
          badge: "RESALE VILLA",
          variants: [
            {
              id: "basement",
              shortLabel: "Basement",
              fullTitle:
                "Luxury Resale Villa (Address Villas Hillcrest) — Basement",
              badge: "RESALE VILLA",
              slideLabel: "1 / 4",
              specs: {
                "Unit Type": "Luxury Resale Villa",
                "Total Area": "On request",
                "Starting Price": "On request",
                Handover: "Ready",
                "Payment Plan": "Ready Property",
                Location: "Dubai Hills Estate",
                Developer: "Emaar",
              },
              images: [FP_BASEMENT],
            },
            {
              id: "ground",
              shortLabel: "Ground Floor",
              fullTitle:
                "Luxury Resale Villa (Address Villas Hillcrest) — Ground Floor",
              badge: "RESALE VILLA",
              slideLabel: "2 / 4",
              specs: {
                "Unit Type": "Luxury Resale Villa",
                "Total Area": "On request",
                "Starting Price": "On request",
                Handover: "Ready",
                "Payment Plan": "Ready Property",
                Location: "Dubai Hills Estate",
                Developer: "Emaar",
              },
              images: [FP_GROUND],
            },
            {
              id: "first",
              shortLabel: "First Floor",
              fullTitle:
                "Luxury Resale Villa (Address Villas Hillcrest) — First Floor",
              badge: "RESALE VILLA",
              slideLabel: "3 / 4",
              specs: {
                "Unit Type": "Luxury Resale Villa",
                "Total Area": "On request",
                "Starting Price": "On request",
                Handover: "Ready",
                "Payment Plan": "Ready Property",
                Location: "Dubai Hills Estate",
                Developer: "Emaar",
              },
              images: [FP_FIRST],
            },
            {
              id: "roof",
              shortLabel: "Roof Floor",
              fullTitle:
                "Luxury Resale Villa (Address Villas Hillcrest) — Roof Floor",
              badge: "RESALE VILLA",
              slideLabel: "4 / 4",
              specs: {
                "Unit Type": "Luxury Resale Villa",
                "Total Area": "On request",
                "Starting Price": "On request",
                Handover: "Ready",
                "Payment Plan": "Ready Property",
                Location: "Dubai Hills Estate",
                Developer: "Emaar",
              },
              images: [FP_ROOF],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities",
      amenities: [
        "Branded Address Living",
        "Private Garden",
        "Swimming Pool",
        "Kids Play Areas",
        "Yoga & Wellness Decks",
        "Community Centre",
        "Landscaped Green Spaces",
      ],
    },

    location: {
      title: "Location",
      projectName: "Address Villas Hillcrest (Resale)",
      address: "Dubai Hills Estate, Dubai, United Arab Emirates",
      lat: 25.1063004,
      lng: 55.2485124,
      zoom: 14,
      proximityFeatures: [
        "Dubai Hills Park",
        "Dubai Hills Mall",
        "Downtown Dubai",
        "Jumeirah Beach",
        "DXB International Airport",
      ],
    },

    cta: {
      title: "Interested in this resale villa?",
      description:
        "Contact us today to arrange a private viewing and receive full pricing and availability details.",
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
      title: "فيلا فاخرة إعادة بيع | فلل العنوان هيلكريست دبي هيلز | المخططات",
      description:
        "فيلا فاخرة إعادة بيع في فلل العنوان هيلكريست، دبي هيلز — عرض مخططات الطوابق والقبو والسطح.",
      keywords: "فلل العنوان هيلكريست إعادة بيع, دبي هيلز فيلا فاخرة, إعمار",
      canonical: "/properties/villas/emaar/address-villas-hillcrest-secondary",
    },

    project: {
      name: "فلل العنوان هيلكريست (إعادة بيع)",
      developer: "إعمار",
      location: "دبي هيلز استيت، دبي",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "31,000,000 درهم",
      completionDate: "جاهز",
      type: "سكني",
      units: "فيلا فاخرة",
      paymentPlan: "عقار جاهز",
      baseMediaUrl: BASE,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/emaar-logo.jpg",
      companyName: "إعمار",
      rating: 4.8,
    },

    intro: {
      title: "حياة فاخرة بعلامة العنوان",
      paragraphs: [
        "تمثل فلل العنوان هيلكريست قمة الفخامة السكنية بعلامة إعمار في دبي هيلز استيت، مع تصميم عصري وخدمات فندقية راقية.",
        "تتميز هذه الفيلا الجاهزة بإطلالات خضراء ومساحات داخلية واسعة وتشطيبات راقية، ما يجعلها خيارًا مثاليًا للسكن أو الاستثمار.",
      ],
      brochures: [
        {
          title: "كتيب المشروع",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#3A7BD5",
          size: "10.55 ميجابايت",
          category: "نظرة عامة",
          fileName: "Address Villas Hillcrest.pdf",
          description: "الكتيب الرسمي لفلل العنوان هيلكريست",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "فلل العنوان هيلكريست دبي هيلز",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏡",
          value: "العنوان",
          label: "فيلا فاخرة",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📍",
          value: "دبي هيلز",
          label: "موقع مميز",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🛏️",
          value: "إعادة بيع",
          label: "جاهز",
        },
      ],
    },

    gallery: {
      title: "المعرض",
      slides: GALLERY_SLIDES,
      projectTag: "فلل العنوان هيلكريست (إعادة بيع)",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "resale-villa",
          bedrooms: 5,
          shortLabel: "فيلا",
          title: "فيلا فاخرة إعادة بيع (فلل العنوان هيلكريست)",
          badge: "فيلا إعادة بيع",
          variants: [
            {
              id: "basement",
              shortLabel: "القبو",
              fullTitle: "فيلا فاخرة إعادة بيع — القبو",
              badge: "فيلا إعادة بيع",
              slideLabel: "1 / 4",
              specs: {
                "نوع الوحدة": "فيلا فاخرة",
                "المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "جاهز",
                "خطة الدفع": "عقار جاهز",
                الموقع: "دبي هيلز استيت",
                المطور: "إعمار",
              },
              images: [FP_BASEMENT],
            },
            {
              id: "ground",
              shortLabel: "الأرضي",
              fullTitle: "فيلا فاخرة إعادة بيع — الطابق الأرضي",
              badge: "فيلا إعادة بيع",
              slideLabel: "2 / 4",
              specs: {
                "نوع الوحدة": "فيلا فاخرة",
                "المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "جاهز",
                "خطة الدفع": "عقار جاهز",
                الموقع: "دبي هيلز استيت",
                المطور: "إعمار",
              },
              images: [FP_GROUND],
            },
            {
              id: "first",
              shortLabel: "الأول",
              fullTitle: "فيلا فاخرة إعادة بيع — الطابق الأول",
              badge: "فيلا إعادة بيع",
              slideLabel: "3 / 4",
              specs: {
                "نوع الوحدة": "فيلا فاخرة",
                "المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "جاهز",
                "خطة الدفع": "عقار جاهز",
                الموقع: "دبي هيلز استيت",
                المطور: "إعمار",
              },
              images: [FP_FIRST],
            },
            {
              id: "roof",
              shortLabel: "السطح",
              fullTitle: "فيلا فاخرة إعادة بيع — السطح",
              badge: "فيلا إعادة بيع",
              slideLabel: "4 / 4",
              specs: {
                "نوع الوحدة": "فيلا فاخرة",
                "المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "جاهز",
                "خطة الدفع": "عقار جاهز",
                الموقع: "دبي هيلز استيت",
                المطور: "إعمار",
              },
              images: [FP_ROOF],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        "حياة بعلامة العنوان",
        "حديقة خاصة",
        "مسبح",
        "مناطق لعب للأطفال",
        "مساحات يوغا وعافية",
        "مركز مجتمعي",
        "مساحات خضراء",
      ],
    },

    location: {
      title: "الموقع",
      projectName: "فلل العنوان هيلكريست (إعادة بيع)",
      address: "دبي هيلز استيت، دبي، الإمارات العربية المتحدة",
      lat: 25.1063004,
      lng: 55.2485124,
      zoom: 14,
      proximityFeatures: [
        "حديقة دبي هيلز",
        "دبي هيلز مول",
        "وسط مدينة دبي",
        "شاطئ جميرا",
        "مطار دبي الدولي",
      ],
    },

    cta: {
      title: "هل أنت مهتم بهذه الفيلا؟",
      description:
        "تواصل معنا اليوم لترتيب موعد معاينة خاصة والحصول على تفاصيل الأسعار والتوفر.",
      buttons: [
        { text: "تواصل معنا", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default addressVillasHillcrestSecondaryData;
