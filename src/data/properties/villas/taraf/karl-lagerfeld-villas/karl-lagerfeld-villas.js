// src/data/properties/villas/taraf/karl-lagerfeld-villas.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ Villas
// ✅ Exact Bunny filenames only
// ✅ Wadi Al Safa 3
// ✅ Ultra-luxury Taraf standard

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/taraf/karl-lagerfeld-villa";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/taraf.webp";

// ================= FILES =================
const HERO_VIDEO = cdn("Karl Lagerfeld Villas by Taraf_Project Video.mp4");

const BROCHURE_PDF = cdn("Karl Villas Brochure_30_02_24.pdf");
const FACTSHEET_PDF = cdn("Karl Lagerfeld Villas by Taraf_Factsheet.pdf");
const MASTERPLAN_PDF = cdn(
  "Karl Lagerfeld Villas by Taraf_Masterplan Details.pdf",
);
const PAYMENT_PLAN_PDF = cdn("Karl Lagerfeld Villas by Taraf_Payment Plan.pdf");

// Floor plans
const FP_6BR = cdn("6 BR Villa Taraf Karl Lagerfeld Villas Floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("5 BedLarge Light_front.jpg"),
  cdn("Arrival 14.jpg"),
  cdn("5 BedLarge Light_rear.jpg"),
  cdn("5 BedSmall Light_Front.jpg"),
  cdn("6 Bed Light_front.jpg"),
  cdn("6 Bed Light_rear.jpg"),
  cdn("6 Bed Dark_rear.jpg"),
  cdn("6 Bed_Park_03.jpg"),
  cdn("6Bed_Pool View_05.jpg"),
  cdn("6Bed_Pool View_05_Purple.jpg"),
  cdn("7 Bed Light_rear.jpg"),
  cdn("7 Bed Dark_rear.jpg"),
  cdn("7 Bed Pool View_01.jpg"),
  cdn("Living 10.jpg"),
  cdn("Dining 09.jpg"),
  cdn("Master Bedroom_13.jpg"),
  cdn("MasterBath.jpg"),
  cdn("Typical bedroom_09.jpg"),
  cdn("Typical_Bathroom_08.jpg"),
  cdn("Clubhouse Catwalk.jpg"),
  cdn("ClubHouse Lounge_27.jpg"),
  cdn("ClubHouse Entertainment_01.jpg"),
  cdn("Clubhouse_GYM.tif"),
  cdn("Clubhouse_YOGA.tif"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q3 2027";
const PAYMENT_PLAN = "40% / 60%";
const LOCATION_NAME = "Wadi Al Safa 3";
const DEVELOPER = "Taraf Developments";

// ======================================================
// DATA
// ======================================================
export const karlLagerfeldVillasData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Karl Lagerfeld Villas by Taraf | 6 Bedroom Ultra-Luxury Villas in Dubai",
      description:
        "Karl Lagerfeld Villas by Taraf Developments offers exclusive 6 bedroom branded villas in Wadi Al Safa 3, Dubai. Starting from AED 25,105,500 with 40/60 payment plan and handover in Q3 2027.",
      keywords:
        "Karl Lagerfeld Villas Dubai, Taraf Villas, branded villas Dubai, luxury villas Wadi Al Safa",
      canonical: "/properties/villas/taraf/karl-lagerfeld-villas",
    },

    project: {
      name: "Karl Lagerfeld Villas",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 25,105,500",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Branded Luxury Villas",
      units: "6 Bedroom Villas",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Karl Lagerfeld × Taraf",
      rating: null,
    },

    intro: {
      title: "KARL LAGERFELD VILLAS — ICONIC BRANDED LUXURY",
      paragraphs: [
        "Karl Lagerfeld Villas by Taraf Developments represent an unprecedented level of branded luxury living in Dubai, blending timeless fashion heritage with architectural excellence.",
        "The collection features ultra-exclusive 6 bedroom villas with expansive layouts, private gardens, premium finishes, and curated amenities designed for elite lifestyles.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Master Plan", url: MASTERPLAN_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "Karl Lagerfeld Villas Dubai",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "👑",
          value: "Branded",
          label: "Karl Lagerfeld",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💎",
          value: "AED 25.1M",
          label: "Starting Price",
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
      projectTag: "Karl Lagerfeld Villas",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "6br",
          title: "6 Bedroom Villa",
          bedrooms: 6,
          specs: {
            "Total Area": "11,345 sq.ft",
            "Starting Price": "AED 25,105,500",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_6BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Private Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Clubhouse & Lounge", icon: "🥂", color: "#c9a24d" },
        { label: "Fitness Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Yoga Studio", icon: "🧘", color: "#c9a24d" },
        { label: "Entertainment Spaces", icon: "🎭", color: "#c9a24d" },
        { label: "Landscaped Gardens", icon: "🌿", color: "#c9a24d" },
        { label: "Gated Community", icon: "🛡️", color: "#c9a24d" },
        { label: "Private Parking", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Karl Lagerfeld Villas",
      address: LOCATION_NAME,
      lat: 25.1297986,
      lng: 55.3438083,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Direct access to Sheikh Mohammed Bin Zayed Road" },
        { icon: "🏙️", text: "Close to Downtown Dubai & Business Bay" },
        { icon: "🛍️", text: "Near premium lifestyle and leisure destinations" },
      ],
    },

    cta: {
      title: "Own a Karl Lagerfeld Villa",
      description:
        "Request private viewings, floor plans, and exclusive availability.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title: "فلل كارل لاغرفيلد من تراف | فلل فاخرة للغاية 6 غرف نوم في دبي",
      description:
        "فلل كارل لاغرفيلد من تراف للتطوير العقاري توفر فلل بعلامة كارل لاغرفيلد مكونة من 6 غرف نوم في وادي الصفا 3 دبي. تبدأ الأسعار من 25,105,500 درهم مع خطة سداد 40/60 والتسليم في الربع الثالث 2027.",
      keywords:
        "فلل كارل لاغرفيلد دبي، فلل تراف، فلل بعلامة تجارية دبي، فلل فاخرة وادي الصفا",
      canonical: "/properties/villas/taraf/karl-lagerfeld-villas",
    },

    project: {
      name: "فلل كارل لاغرفيلد",
      developer: "تراف للتطوير العقاري",
      location: "وادي الصفا 3",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "25,105,500 درهم",
      completionDate: "الربع الثالث 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "فلل فاخرة بعلامة تجارية",
      units: "فلل 6 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "كارل لاغرفيلد × تراف",
      rating: null,
      // (EN doesn't include videoUrl here, keep parity)
    },

    intro: {
      title: "فلل كارل لاغرفيلد — فخامة أيقونية بعلامة تجارية",
      paragraphs: [
        "فلل كارل لاغرفيلد من تراف للتطوير العقاري تمثل مستوى غير مسبوق من الفخامة بعلامة تجارية في دبي، تمزج إرث الموضة الخالد مع التميز المعماري.",
        "تضم المجموعة فلل فائقة الحصرية من 6 غرف نوم بتصاميم واسعة وحدائق خاصة وتشطيبات راقية ومرافق مختارة بعناية لأسلوب حياة النخبة.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "فاكت شيت", url: FACTSHEET_PDF, type: "secondary" },
        { title: "المخطط الرئيسي", url: MASTERPLAN_PDF, type: "secondary" },
        { title: "خطة السداد", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "فلل كارل لاغرفيلد دبي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "👑",
          value: "بعلامة تجارية",
          label: "كارل لاغرفيلد",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💎",
          value: "25.1M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "الربع الثالث 2027",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Karl Lagerfeld Villas",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "6br", // ✅ IMPORTANT
          title: "فيلا 6 غرف نوم",
          bedrooms: 6,
          specs: {
            "إجمالي المساحة": "11,345 قدم²",
            "السعر الابتدائي": "25,105,500 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الثالث 2027",
          },
          images: [FP_6BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح خاص", icon: "🏊", color: "#c9a24d" },
        { label: "نادي وصالة", icon: "🥂", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "استوديو يوغا", icon: "🧘", color: "#c9a24d" },
        { label: "مساحات ترفيه", icon: "🎭", color: "#c9a24d" },
        { label: "حدائق ومناظر طبيعية", icon: "🌿", color: "#c9a24d" },
        { label: "مجتمع مسوّر", icon: "🛡️", color: "#c9a24d" },
        { label: "مواقف خاصة", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "فلل كارل لاغرفيلد",
      address: "وادي الصفا 3",
      lat: 25.1297986,
      lng: 55.3438083,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "وصول مباشر إلى شارع محمد بن زايد." },
        { icon: "🏙️", text: "بالقرب من داون تاون دبي وبزنس باي." },
        { icon: "🛍️", text: "قريب من وجهات نمط الحياة والترفيه الراقية." },
      ],
    },

    cta: {
      title: "امتلك فيلا كارل لاغرفيلد",
      description: "اطلب معاينات خاصة ومخططات الوحدات والتوافر الحصري الآن.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default karlLagerfeldVillasData;
