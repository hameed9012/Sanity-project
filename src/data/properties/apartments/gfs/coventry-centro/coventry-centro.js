// src/data/properties/apartments/gfs/coventry-centro.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR (safe parity)
// ✅ Off-plan
// ✅ 1BR ONLY
// ✅ Exact Bunny filenames
// ✅ Dubai Industrial City
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/gfs/coventry-centro";
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ CONFIRMED SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Coventry Centro.pdf");
const FLOORPLANS_PDF = cdn("coventry-centro-floorplans.pdf");

const HERO_BG = cdn("1.webp");
const INTRO_MAIN = cdn("4.webp");
const FP_1BR = cdn("Coventry Centro 1br floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("45.webp"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q3 2027";
const PAYMENT_PLAN = "80% / 20%";
const LOCATION_NAME = "Dubai Industrial City";
const DEVELOPER = "GFS Developments";

// ======================================================
// DATA
// ======================================================
export const coventryCentroData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Coventry Centro by GFS | 1 Bedroom Apartments in Dubai Industrial City",
      description:
        "Coventry Centro by GFS Developments offers modern 1-bedroom apartments in Dubai Industrial City starting from AED 884,520 with an 80/20 payment plan and handover in Q3 2027.",
      keywords:
        "Coventry Centro, GFS Developments, Dubai Industrial City apartments",
      canonical: "/properties/apartments/gfs/coventry-centro",
    },

    project: {
      name: "Coventry Centro",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 884,520",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "COVENTRY CENTRO — SMART LIVING IN INDUSTRIAL CITY",
      paragraphs: [
        "Coventry Centro by GFS Developments is a contemporary residential project located in Dubai Industrial City, designed with efficient layouts and strong investment value.",
        `1-bedroom apartments start from AED 884,520 with an ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Coventry Centro by GFS Developments",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 884,520",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "675 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Industrial City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Coventry Centro",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "675 sq.ft",
            "Starting Price": "AED 884,520",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features & Amenities",
      amenities: [
        { label: "Modern Architecture", icon: "🏢", color: "#d7b46a" },
        { label: "Efficient Layouts", icon: "📐", color: "#d7b46a" },
        { label: "Investor Friendly", icon: "📈", color: "#d7b46a" },
        { label: "Strategic Location", icon: "📍", color: "#d7b46a" },
        { label: "24/7 Security", icon: "🛡️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Coventry Centro",
      address: "Dubai Industrial City, Dubai, UAE",
      lat: 24.878895,
      lng: 55.043817,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "Direct access to Emirates Road." },
        { icon: "🏙️", text: "Located within Dubai Industrial City." },
        { icon: "🛍️", text: "Close to essential services and facilities." },
      ],
    },

    cta: {
      title: "Interested in Coventry Centro?",
      description:
        "Request availability, pricing, and official GFS documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    seo: {
      title: "كوفنتري سنترو من GFS | شقق غرفة نوم واحدة في دبي الصناعية",
      description:
        "كوفنتري سنترو من GFS يوفر شقق غرفة نوم واحدة في دبي الصناعية مع خطة سداد 80/20 والتسليم في الربع الثالث 2027.",
      keywords: "كوفنتري سنترو، GFS، دبي الصناعية، شقق على المخطط",
      canonical: "/properties/apartments/gfs/coventry-centro",
    },

    project: {
      name: "كوفنتري سنترو",
      developer: "جي إف إس للتطوير العقاري",
      location: "مدينة دبي الصناعية",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "884,520 درهم",
      completionDate: "الربع الثالث 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "GFS",
      rating: null,
    },

    intro: {
      title: "كوفنتري سنترو — أسلوب حياة ذكي في دبي الصناعية",
      paragraphs: [
        "كوفنتري سنترو هو مشروع سكني حديث من GFS في مدينة دبي الصناعية يتميز بمخططات عملية وقيمة استثمارية عالية.",
        "تبدأ شقق غرفة النوم الواحدة من 884,520 درهم مع خطة سداد مرنة.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "مخططات الطوابق", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "كوفنتري سنترو",
      floatingCards: [],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "كوفنتري سنترو",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "675 قدم²",
            "السعر الابتدائي": "884,520 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الثالث 2027",
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "تصميم عصري", icon: "🏢", color: "#d7b46a" },
        { label: "مخططات عملية", icon: "📐", color: "#d7b46a" },
        { label: "مناسب للاستثمار", icon: "📈", color: "#d7b46a" },
        { label: "موقع استراتيجي", icon: "📍", color: "#d7b46a" },
        { label: "أمن على مدار الساعة", icon: "🛡️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كوفنتري سنترو",
      address: "مدينة دبي الصناعية، دبي",
      lat: 24.878895,
      lng: 55.043817,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى طريق الإمارات." },
        { icon: "🏙️", text: "ضمن مدينة دبي الصناعية." },
        { icon: "🛍️", text: "قريب من الخدمات اليومية." },
      ],
    },

    cta: {
      title: "هل أنت مهتم بكوفنتري سنترو؟",
      description: "اطلب التوافر وقائمة الأسعار والمستندات الرسمية من المطور.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default coventryCentroData;
