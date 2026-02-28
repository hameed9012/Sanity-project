// src/data/properties/apartments/reportage/verdana-10.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR (1:1 keys)
// ✅ Production-ready
// ✅ Exact Bunny filenames
// ✅ Reportage standard

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/reportage/verdana-10";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/reportage.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("VERDANA X BROCHURE DIGITAL.pdf");
const FACTSHEET_PDF = cdn("Fact Sheet - Verdana 10 (1).pdf");
const FLOORPLANS_PDF = cdn("VERDANA X Floor Plan.pdf");

const HERO_VIDEO = cdn("02- verdana.mp4");
const FP_1BR = cdn("Verdana 1BR Floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("03-tower view night copy.jpg"),
  cdn("01-verdana.jpg"),
  cdn("04-verdana.jpg"),
  cdn("05-verdana.jpg"),
  cdn("06-verdana.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2028";
const PAYMENT_PLAN = "30% / 70%";
const LOCATION_NAME = "Dubai Investments Park (DIP)";
const DEVELOPER = "Reportage Properties";

// ======================================================
// DATA
// ======================================================
export const verdana10Data = {
  // ================= EN =================
  en: {
    seo: {
      title: "Verdana 10 by Reportage | Apartments in Dubai Investments Park",
      description:
        "Verdana 10 by Reportage Properties offers modern 1-bedroom apartments in Dubai Investments Park. Starting from AED 920,000 with handover in Q4 2028.",
      keywords:
        "Verdana 10, Reportage Properties, DIP apartments, off-plan Dubai",
      canonical: "/properties/apartments/reportage/verdana-10",
    },

    project: {
      name: "Verdana 10",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 920,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      videoUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "VERDANA 10 — SMART URBAN LIVING",
      paragraphs: [
        "Verdana 10 by Reportage Properties is a modern residential development located in Dubai Investments Park, designed to offer smart urban living surrounded by greenery.",
        `Apartments start from AED 920,000 with a ${PAYMENT_PLAN} payment plan and handover expected in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "Verdana 10 Dubai Investments Park",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 920K",
          label: "Starting Price",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📍",
          value: "DIP",
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
      projectTag: "Verdana 10",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "738 sq.ft",
            "Starting Price": "AED 920,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Gymnasium", icon: "🏋️", color: "#c9a24d" },
        { label: "Landscaped Gardens", icon: "🌿", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Retail Outlets", icon: "🛍️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Verdana 10",
      address: LOCATION_NAME,
      lat: 24.9887583,
      lng: 55.1674557,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Close to Jebel Ali and Expo City Dubai." },
        {
          icon: "✈️",
          text: "Convenient access to Al Maktoum International Airport.",
        },
      ],
    },

    cta: {
      title: "Invest in Verdana 10",
      description:
        "Request prices, availability, and official Reportage Properties documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    seo: {
      title: "فيردانا 10 من ربورتاج | شقق في دبي إنفستمنتس بارك",
      description:
        "فيردانا 10 من ربورتاج العقارية يوفر شقق غرفة نوم واحدة في دبي إنفستمنتس بارك بأسعار تبدأ من 920,000 درهم مع تسليم في الربع الرابع 2028.",
      keywords: "فيردانا 10، ربورتاج العقارية، شقق دبي إنفستمنتس بارك",
      canonical: "/properties/apartments/reportage/verdana-10",
    },

    project: {
      name: "فيردانا 10",
      developer: "ربورتاج العقارية",
      location: "دبي إنفستمنتس بارك",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "920,000 درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      videoUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Reportage",
      rating: null,
    },

    intro: {
      title: "فيردانا 10 — أسلوب حياة حضري ذكي",
      paragraphs: [
        "فيردانا 10 من ربورتاج العقارية هو مشروع سكني عصري يقع في دبي إنفستمنتس بارك، ويوفر بيئة معيشية متوازنة محاطة بالمساحات الخضراء.",
        `تبدأ الأسعار من 920,000 درهم مع خطة سداد ${PAYMENT_PLAN} وتسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف المعلومات", url: FACTSHEET_PDF, type: "secondary" },
        { title: "مخططات الطوابق", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "فيردانا 10 دبي إنفستمنتس بارك",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "920 ألف درهم",
          label: "السعر الابتدائي",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📍",
          value: "DIP",
          label: "الموقع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "فيردانا 10",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "738 قدم²",
            "السعر الابتدائي": "920,000 درهم",
            "خطة الدفع": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "حدائق خضراء", icon: "🌿", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "محلات تجزئة", icon: "🛍️", color: "#c9a24d" },
        { label: "أمن على مدار الساعة", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "فيردانا 10",
      address: "دبي إنفستمنتس بارك",
      lat: 24.9887583,
      lng: 55.1674557,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى شارع الشيخ محمد بن زايد." },
        { icon: "🏙️", text: "قريب من جبل علي وإكسبو سيتي دبي." },
        { icon: "✈️", text: "سهولة الوصول إلى مطار آل مكتوم الدولي." },
      ],
    },

    cta: {
      title: "استثمر في فيردانا 10",
      description:
        "اطلب الأسعار، التوافر، والمستندات الرسمية من ربورتاج العقارية اليوم.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default verdana10Data;
