// src/data/properties/apartments/evolutions/exotica.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR (complete parity)
// ✅ 1BR / 2BR ONLY
// ✅ JVC (Jumeirah Village Circle)
// ✅ Exact Bunny filenames
// ✅ Evolutions / Al Marina standard
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/evolutions/exotica";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL = "/evolutions.jpg";

// ================= FILES =================
const HERO_VIDEO = cdn("Exotica Launch Film.mp4");

const BROCHURE_PDF = cdn("Exotica Brochure.pdf");
const FACTSHEET_PDF = cdn("Exotica Factsheet.pdf");
const FLOORPLANS_PDF = cdn("Exotica Individual Unit Floor Plans.pdf");

// Floor plans
const FP_1BR = cdn("Exotica-1BR-Type 1 (1).jpg");
const FP_2BR = cdn("Exotica-2BR-Type 1 (1).jpg");

// ================= GALLERY =================
const GALLERY = [
  cdn("View_5.jpg"),
  cdn("View_6.jpg"),
  cdn("View_7.jpg"),
  cdn("View_8.jpg"),
  cdn("View_9.jpeg"),
  cdn("View_10.jpg"),
  cdn("View_11.jpg"),
  cdn("View_12.jpg"),
  cdn("View_13.jpg"),
  cdn("View_14.jpg"),
  cdn("View_15.jpg"),
  cdn("View_16Aerial.jpg"),
  cdn("View_17_Day.jpg"),
  cdn("View_17_Night.jpg"),
  cdn("KWEC-EXOTICA-LOBBY 1.jpg"),
  cdn("KWEC-EXOTICA-LOBBY 2.jpg"),
  cdn("KWEC-EXOTICA-GYM 1.jpg"),
  cdn("KWEC-EXOTICA-GYM 2.jpg"),
  cdn("KWEC-EXOTICA-TYPICAL CORRIDORS.jpg"),
  cdn("cello_interiors_livingroom_A.jpg"),
  cdn("cello_interiors_kitchen_A.jpg"),
  cdn("sky_interiors_bedroom.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q3 2026";
const PAYMENT_PLAN = "50% / 50%";
const LOCATION_NAME = "Jumeirah Village Circle (JVC)";
const DEVELOPER = "Al Marina Developments";

// ======================================================
// DATA
// ======================================================
export const exoticaData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Exotica by Al Marina | Apartments in JVC Dubai",
      description:
        "Exotica by Al Marina Developments offers 1 and 2 bedroom apartments in Jumeirah Village Circle (JVC). Starting from AED 966,200 with 50/50 payment plan and handover in Q3 2026.",
      keywords: "Exotica JVC, Al Marina Developments, apartments in JVC Dubai",
      canonical: "/properties/apartments/evolutions/exotica",
    },

    project: {
      name: "Exotica",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 966,200",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
      videoUrl: HERO_VIDEO,
    },

    intro: {
      title: "EXOTICA — CONTEMPORARY LIVING IN JVC",
      paragraphs: [
        "Exotica by Al Marina Developments is a modern residential project located in the heart of Jumeirah Village Circle, combining refined architecture with practical urban living.",
        "The development offers thoughtfully planned 1 and 2 bedroom apartments with strong investment appeal and a balanced payment plan.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "Exotica JVC Dubai",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "JVC",
          label: "Prime Location",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "AED 966K",
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
      projectTag: "Exotica",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "590.19 sq.ft",
            "Starting Price": "AED 966,200",
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
            "Total Area": "1,141.19 sq.ft",
            "Starting Price": "AED 1,540,604",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Elegant Lobby", icon: "🏢", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Retail Outlets", icon: "🛍️", color: "#c9a24d" },
        { label: "Landscaped Areas", icon: "🌿", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Exotica",
      address: LOCATION_NAME,
      lat: 25.058956,
      lng: 55.2159658,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Minutes from Dubai Marina & Downtown." },
        { icon: "🛍️", text: "Close to Circle Mall and community retail." },
      ],
    },

    cta: {
      title: "Invest in Exotica",
      description:
        "Request availability, price lists, and official Al Marina documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    seo: {
      title: "إكزوتيكا من المارينا | شقق في قرية جميرا الدائرية",
      description:
        "إكزوتيكا من المارينا توفر شقق غرفة وغرفتين نوم في قرية جميرا الدائرية مع خطة سداد 50/50 والتسليم في الربع الثالث 2026.",
      keywords: "إكزوتيكا، قرية جميرا الدائرية، شقق على المخطط",
      canonical: "/properties/apartments/evolutions/exotica",
    },

    project: {
      name: "إكزوتيكا",
      developer: "المارينا للتطوير العقاري",
      location: "قرية جميرا الدائرية",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "966,200 درهم",
      completionDate: "الربع الثالث 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة وغرفتين نوم",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "المارينا",
      rating: null,
    },

    intro: {
      title: "إكزوتيكا — أسلوب حياة عصري في قرية جميرا الدائرية",
      paragraphs: [
        "إكزوتيكا هو مشروع سكني حديث من المارينا في قرية جميرا الدائرية يتميز بتصميم أنيق ومخططات عملية.",
        "يوفر المشروع شقق بغرفة وغرفتين نوم مع قيمة استثمارية قوية.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف المعلومات", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "إكزوتيكا قرية جميرا الدائرية",
      floatingCards: [],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "إكزوتيكا",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "590.19 قدم²",
            "السعر الابتدائي": "966,200 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الثالث 2026",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,141.19 قدم²",
            "السعر الابتدائي": "1,540,604 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الثالث 2026",
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "ردهة أنيقة", icon: "🏢", color: "#c9a24d" },
        { label: "منطقة أطفال", icon: "🧸", color: "#c9a24d" },
        { label: "مناطق خضراء", icon: "🌿", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "إكزوتيكا",
      address: "قرية جميرا الدائرية، دبي",
      lat: 25.058956,
      lng: 55.2159658,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية." },
        { icon: "🏙️", text: "قريب من مناطق دبي الحيوية." },
        { icon: "🛍️", text: "قريب من المرافق التجارية." },
      ],
    },

    cta: {
      title: "استثمر في إكزوتيكا",
      description: "اطلب قائمة الأسعار والتوافر والمستندات الرسمية الآن.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default exoticaData;
