// src/data/properties/apartments/ajmal-makan/blue-beach.js
// ✅ FULL BLUEPRINT COMPLIANT (matches Wynwood Horizon structure)
// ✅ EN + AR
// ✅ 1BR / 2BR / 3BR
// ✅ Exact Bunny filenames (from your folder listing)
// ✅ Includes Brochure + Fact Sheet PDFs
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ajmal-makan/blue-beach";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Brochure BBR English.pdf");
const FACT_SHEET_PDF = cdn("Fact Sheet For BBR English.pdf");

// ================= FLOOR PLANS =================
const FP_1BR = cdn("1 BR The Blue Beach Residence Floor Plan.webp");
const FP_2BR = cdn("2 BR The Blue Beach Residence Floor plan.webp");
const FP_3BR = cdn("3 BR The Blue Beach Residence Floor plan.webp");

// ================= GALLERY =================
// Using a strong set of renders + the BBA sequence (all exact filenames)
const GALLERY = [
  cdn("S2AMC_K02_241210_BEACH_FINAL.jpg"),
  cdn("S2AMC_K06_241210_PROMENADE_FINAL.jpg"),
  cdn("S2AMC_K05_250107_STREET_FINAL.jpg"),
  cdn("S2AMC_K07_250107_STREET_FINAL.jpg"),
  cdn("S2AMC_K04_241210_CLOSE-UP_FINAL.jpg"),
  cdn("S2AMC_K08_250107_FINAL.jpg"),
  cdn("S2AMC_K09_250107_FINAL.Rev01.jpg"),
  cdn("S2AMC_K10_250107_FINAL copy.jpg"),
  cdn("S2AMC_K11_250107_REAR-I-RATIONAL_FINAL copy.jpg"),
  cdn("S2AMC_K12_250107_REAR-U-RATIONAL_FINAL copy.jpg"),
  cdn("Visual_1.png"),
  cdn("Visual_2.png"),
  cdn("Visual_3.png"),
  cdn("Visual_4.png"),
  cdn("Visual_5.png"),
  cdn("Visual_6.png"),
  cdn("BBA_001.jpg"),
  cdn("BBA_002.jpg"),
  cdn("BBA_003.jpg"),
  cdn("BBA_004.jpg"),
  cdn("BBA_005.jpg"),
  cdn("BBA_006.jpg"),
  cdn("BBA_007.jpg"),
  cdn("BBA_008.jpg"),
  cdn("BBA_009.jpg"),
  cdn("BBA_010.jpg"),
  cdn("BBA_011.jpg"),
  cdn("BBA_012.jpg"),
  cdn("BBA_013.jpg"),
  cdn("BBA_014.jpg"),
  cdn("BBA_015.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "40% / 60%";
const LOCATION_NAME = "Al Hamriyah (Sharjah Waterfront City)";
const DEVELOPER = "Ajmal Makan";

// Map pin you provided (BlueBay Walk Block A)
const MAP_LAT = 25.4957698;
const MAP_LNG = 55.5369558;

// ======================================================
// DATA
// ======================================================
export const blueBeachData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "The Blue Beach Residence by Ajmal Makan | Apartments for Sale in Al Hamriyah",
      description:
        "The Blue Beach Residence by Ajmal Makan offers 1, 2 & 3 bedroom apartments in Al Hamriyah (Sharjah Waterfront City). Starting from AED 951K with a 40/60 payment plan and handover Q4 2027.",
      keywords:
        "Blue Beach Residence, Ajmal Makan, Al Hamriyah apartments, Sharjah Waterfront City, off plan apartments",
      canonical: "/properties/apartments/ajmal-makan/blue-beach",
    },

    project: {
      name: "The Blue Beach Residence",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 951,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1, 2 & 3 Bedroom",
    },

    hero: {
      // Strong hero-grade render from your folder list
      backgroundUrl: cdn("S2AMC_K02_241210_BEACH_FINAL.jpg"),
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "THE BLUE BEACH RESIDENCE — COASTAL LIVING AT SHARJAH WATERFRONT",
      paragraphs: [
        "The Blue Beach Residence by Ajmal Makan is a waterfront apartment community in Al Hamriyah within Sharjah Waterfront City, designed around beachside living and everyday comfort.",
        "Offering 1, 2, and 3-bedroom apartments, the project combines spacious layouts with a vibrant promenade lifestyle and coastal views.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Fact Sheet", url: FACT_SHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "The Blue Beach Residence by Ajmal Makan",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏖️",
          value: "Beach Lifestyle",
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
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Blue Beach Residence",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "942.22 sq.ft",
            "Starting Price": "AED 951,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,320.51 sq.ft",
            "Starting Price": "AED 1,227,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "1,999.25 sq.ft",
            "Starting Price": "AED 1,658,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Beach & Promenade Access", icon: "🏖️", color: "#c9a24d" },
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fitness Center", icon: "🏋️", color: "#c9a24d" },
        { label: "Retail & Community Walk", icon: "🛍️", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "The Blue Beach Residence",
      address: LOCATION_NAME,
      lat: MAP_LAT,
      lng: MAP_LNG,
      zoom: 15,
      proximityFeatures: [
        { icon: "🌊", text: "Beachfront lifestyle in Sharjah Waterfront City" },
        { icon: "🚶", text: "Promenade-style community walk" },
        { icon: "🚗", text: "Connectivity to Sharjah & nearby districts" },
      ],
    },

    cta: {
      title: "Own a Home at The Blue Beach Residence",
      description:
        "Request full pricing, unit availability and exclusive offers for The Blue Beach Residence by Ajmal Makan.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    seo: {
      title: "ذا بلو بيتش ريزيدنس من عجمان مكان | شقق للبيع في الحمريّة",
      description:
        "ذا بلو بيتش ريزيدنس من عجمان مكان يوفر شقق 1 و2 و3 غرف نوم في الحمريّة (مدينة الشارقة الواجهة البحرية). تبدأ الأسعار من 951,000 درهم مع خطة سداد 40/60 والتسليم في الربع الرابع 2027.",
      keywords:
        "ذا بلو بيتش ريزيدنس, عجمان مكان, شقق الحمريّة, مدينة الشارقة الواجهة البحرية, شقق على المخطط",
      canonical: "/properties/apartments/ajmal-makan/blue-beach",
    },

    project: {
      name: "ذا بلو بيتش ريزيدنس",
      developer: "عجمان مكان",
      location: "الحمريّة (مدينة الشارقة الواجهة البحرية)",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "951,000 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: "40% / 60%",
      type: "شقق سكنية",
      units: "غرفة وغرفتين و3 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("S2AMC_K02_241210_BEACH_FINAL.jpg"),
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ajmal Makan",
      rating: null,
    },

    intro: {
      title:
        "ذا بلو بيتش ريزيدنس — أسلوب حياة على الشاطئ في مدينة الشارقة الواجهة البحرية",
      paragraphs: [
        "ذا بلو بيتش ريزيدنس من عجمان مكان هو مشروع شقق على الواجهة البحرية في منطقة الحمريّة ضمن مدينة الشارقة الواجهة البحرية، مصمم لأسلوب حياة شاطئي مريح ومليء بالحيوية.",
        "يوفر المشروع شقق 1 و2 و3 غرف نوم بمساحات واسعة وتصاميم عملية مع أجواء ممشى مجتمعي وإطلالات ساحلية.",
      ],
      brochures: [
        { title: "تحميل البروشور", url: BROCHURE_PDF, type: "main" },
        { title: "ملف المعلومات", url: FACT_SHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "ذا بلو بيتش ريزيدنس من عجمان مكان",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏖️",
          value: "حياة الشاطئ",
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
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "الربع الرابع 2027",
          label: "التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "ذا بلو بيتش ريزيدنس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "942.22 قدم²",
            "السعر الابتدائي": "951,000 درهم",
            "خطة السداد": "40% / 60%",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,320.51 قدم²",
            "السعر الابتدائي": "1,227,000 درهم",
            "خطة السداد": "40% / 60%",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,999.25 قدم²",
            "السعر الابتدائي": "1,658,000 درهم",
            "خطة السداد": "40% / 60%",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [FP_3BR],
        },
      ],
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "وصول للشاطئ والممشى", icon: "🏖️", color: "#c9a24d" },
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "مناطق تجزئة وممشى مجتمعي", icon: "🛍️", color: "#c9a24d" },
        { label: "مساحات خضراء", icon: "🌿", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "ذا بلو بيتش ريزيدنس",
      address: "الحمريّة (مدينة الشارقة الواجهة البحرية)",
      lat: MAP_LAT,
      lng: MAP_LNG,
      zoom: 15,
      proximityFeatures: [
        {
          icon: "🌊",
          text: "أسلوب حياة شاطئي ضمن مدينة الشارقة الواجهة البحرية",
        },
        { icon: "🚶", text: "ممشى مجتمعي نابض بالحياة" },
        { icon: "🚗", text: "سهولة الوصول إلى الشارقة والمناطق القريبة" },
      ],
    },

    cta: {
      title: "امتلك شقة في ذا بلو بيتش ريزيدنس",
      description:
        "اطلب الأسعار التفصيلية وتوافر الوحدات والعروض الحصرية لمشروع ذا بلو بيتش ريزيدنس من عجمان مكان.",
      buttons: [
        { label: "سجل اهتمامك", action: "enquire" },
        { label: "تحميل البروشور", action: "download-brochure" },
      ],
    },
  },
};

export default blueBeachData;
