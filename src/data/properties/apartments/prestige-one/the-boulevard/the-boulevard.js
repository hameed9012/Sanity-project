// src/data/properties/apartments/prestige-one/the-boulevard.js
// ✅ FULL BLUEPRINT – PRODUCTION READY
// ✅ Exact Bunny filenames
// ✅ EN + AR
// ✅ Studio + 2BR only
// ✅ Dubailand Residence Complex
// ✅ Prestige One compliant

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/prestige-one/the-boulevard";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("The Boulevard - Fact Sheet.pdf");
const MARKETING_VIDEO = cdn("The Boulevard Marketing Video.mp4");

const FP_STUDIO = cdn("Studio The Boulevard Floor plan.webp");
const FP_2BR = cdn("2 BR The Boulevard Floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("NIGHT 4c.jpg"),
  cdn("2_Side View.jpg"),
  cdn("7.png"),
  cdn("14.jpg"),
  cdn("3.jpg"),
  cdn("4.jpg"),
  cdn("5.jpg"),
  cdn("9F.jpg"),
  cdn("ART4.jpg"),
  cdn("1_Studio_V02-2.jpg"),
  cdn("2_Studio_V02-2.jpg"),
  cdn("1BHK - 04.jpg"),
  cdn("1BHK - 05.jpg"),
  cdn("1_Gym.jpg"),
  cdn("2_Gym.jpg"),
  cdn("P7.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q3 2027";
const PAYMENT_PLAN = "55% / 45%";
const LOCATION_NAME = "Dubailand Residence Complex";

// ======================================================
// DATA
// ======================================================
export const theBoulevardData = {
  // ================= EN =================
  en: {
    seo: {
      title: "The Boulevard by Prestige One | Apartments in Dubailand",
      description:
        "The Boulevard by Prestige One offers modern studio and 2-bedroom apartments in Dubailand Residence Complex. Starting from AED 781,000 with handover in Q3 2027.",
      keywords:
        "The Boulevard Prestige One, Dubailand apartments, Prestige One Dubai, off-plan apartments Dubailand",
      canonical: "/properties/apartments/prestige-one/the-boulevard",
    },

    project: {
      name: "The Boulevard",
      developer: "Prestige One Developments",
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 781,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio & 2 Bedroom",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      videoUrl: MARKETING_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Prestige One",
      rating: null,
    },

    intro: {
      title: "THE BOULEVARD — CONTEMPORARY LIVING IN DUBAILAND",
      paragraphs: [
        "The Boulevard by Prestige One is a modern residential development located in the heart of Dubailand Residence Complex, designed to offer a balanced lifestyle with contemporary architecture and premium amenities.",
        `The project features well-designed Studio and 2 Bedroom apartments starting from AED 781,000 with a flexible ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "The Boulevard by Prestige One",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "Dubailand",
          label: "Prime Community",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "AED 781K",
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
      projectTag: "The Boulevard",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "437.98 sq.ft",
            "Starting Price": "AED 781,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,025.26 sq.ft",
            "Starting Price": "AED 1,471,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Indoor Lounge Areas", icon: "🛋️", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Retail Outlets", icon: "🛍️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "The Boulevard",
      address: LOCATION_NAME,
      lat: 25.0926875,
      lng: 55.3820625,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to major Dubai highways." },
        { icon: "🏙️", text: "Well-connected to key Dubai destinations." },
        {
          icon: "🛍️",
          text: "Close to retail, leisure and community facilities.",
        },
      ],
    },

    cta: {
      title: "Invest in The Boulevard",
      description:
        "Request full price lists, availability, floor plans, and official Prestige One documents.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ================= AR =================
  ar: {
    seo: {
      title: "ذا بوليفارد من بريستيج ون | شقق سكنية في دبي لاند",
      description:
        "يوفر مشروع ذا بوليفارد من بريستيج ون شقق استوديو وشقق بغرفتي نوم في مجمع دبي لاند السكني، بأسعار تبدأ من 781,000 درهم مع تسليم في الربع الثالث 2027.",
      keywords:
        "ذا بوليفارد بريستيج ون، شقق دبي لاند، بريستيج ون دبي، عقارات على المخطط دبي",
      canonical: "/properties/apartments/prestige-one/the-boulevard",
    },

    project: {
      name: "ذا بوليفارد",
      developer: "بريستيج ون للتطوير العقاري",
      location: LOCATION_NAME,
      status: "على المخطط",
      market: "offplan",
      startingPrice: "781,000 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو وغرفتين نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      videoUrl: MARKETING_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Prestige One",
      rating: null,
    },

    intro: {
      title: "ذا بوليفارد — أسلوب حياة عصري في دبي لاند",
      paragraphs: [
        "ذا بوليفارد من بريستيج ون هو مشروع سكني عصري يقع في قلب مجمع دبي لاند السكني، صُمم ليقدم نمط حياة متوازن يجمع بين العمارة الحديثة والمرافق الراقية.",
        `يضم المشروع شقق استوديو وشقق بغرفتي نوم تبدأ أسعارها من 781,000 درهم مع خطة سداد مرنة ${PAYMENT_PLAN} وتسليم في ${HANDOVER}.`,
      ],
      brochures: [{ title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" }],
      imgUrl: GALLERY[1],
      imgAlt: "ذا بوليفارد من بريستيج ون",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "دبي لاند",
          label: "مجتمع مميز",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "781 ألف درهم",
          label: "السعر الابتدائي",
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
      title: "معرض المشروع",
      slides: GALLERY,
      projectTag: "ذا بوليفارد",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "شقة استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "437.98 قدم²",
            "السعر الابتدائي": "781,000 درهم",
            "خطة الدفع": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,025.26 قدم²",
            "السعر الابتدائي": "1,471,000 درهم",
            "خطة الدفع": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي متكامل", icon: "🏋️", color: "#c9a24d" },
        { label: "صالات داخلية للسكان", icon: "🛋️", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "محلات تجزئة", icon: "🛍️", color: "#c9a24d" },
        { label: "أمن على مدار الساعة", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "ذا بوليفارد",
      address: LOCATION_NAME,
      lat: 25.0926875,
      lng: 55.3820625,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الطرق السريعة الرئيسية في دبي." },
        { icon: "🏙️", text: "اتصال ممتاز بأهم وجهات دبي." },
        {
          icon: "🛍️",
          text: "قريب من مرافق التسوق والترفيه والخدمات المجتمعية.",
        },
      ],
    },

    cta: {
      title: "استثمر في ذا بوليفارد",
      description:
        "اطلب قوائم الأسعار الكاملة، التوافر، المخططات، والوثائق الرسمية من بريستيج ون.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default theBoulevardData;
