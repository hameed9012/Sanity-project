// src/data/properties/apartments/danube/fashionz/fashionz.js
// ✅ Blueprint-matched with Eleganz (100%)
// ✅ EN + AR
// ✅ Off-plan project
// ✅ 1BR + 2BR
// ✅ Uses ONLY existing files (typos preserved)

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/danube/fashionz";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Fashionz-brochure.pdf");
const FACT_SHEET_PDF = cdn("03 Fact Sheet Design.pdf");
const WALKTHROUGH_VIDEO = cdn("Fashionz walkthrough.mp4");

const HERO_BG = cdn("DAY-VIEW.jpg");
const INTRO_MAIN = HERO_BG;

const FP_1BR = cdn("Fashionz 1br floor plan.webp");
const FP_2BR = cdn("Fashioz 2br floor plan.webp"); // typo preserved

const GALLERY = [
  "DAY-VIEW.jpg",
  "Night--View-2.jpg",
  "View-1.jpg",
  "view01.png",
  "JVT_C05.jpg",
  "JVT_C06.jpg",
  "JVT_C07.jpg",
  "1BHK-LIVING-VIEW-1.jpg",
  "1BHK-LIVING-VIEW-2.jpg",
  "2BHK-LIVING-VIEW-1.jpg",
  "2BHK-Bedroom-VIEW-1.jpg",
  "BATH-1.jpg",
  "Main-Lobby-View-1.jpg",
  "Lift-Lobby-View-2.jpg",
  "Gym-B.jpg",
  "SPA-B-Updated-230410.jpg",
  "Roof-View-1-230412.jpg",
  "Branded-Salon-A.jpg",
].map(cdn);

const HANDOVER = "Q4 2026";
const PAYMENT_PLAN = "55% / 45%";

// ======================================================
// DATA
// ======================================================
export const fashionzDanubeData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Fashionz by Danube | 1 & 2BR Apartments in JVT | From AED 1,436,000",
      description:
        "Fashionz by Danube in JVT offers stylish 1 & 2-bedroom apartments starting from AED 1,436,000 with a 55/45 payment plan and handover in Q4 2026.",
      keywords:
        "Fashionz by Danube, JVT apartments, off plan Dubai, Danube Properties",
      canonical: "/properties/apartments/danube/fashionz",
    },

    project: {
      name: "Fashionz",
      developer: "Danube",
      location: "Jumeirah Village Triangle (JVT), Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,436,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1BR & 2BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Danube Properties",
      rating: null,
    },

    intro: {
      title: "FASHIONZ — DESIGNER LIVING IN JVT",
      paragraphs: [
        "Fashionz by Danube is a contemporary off-plan residential project in Jumeirah Village Triangle, blending modern design with lifestyle-focused amenities.",
        `Apartments start from AED 1,436,000 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Fact Sheet", url: FACT_SHEET_PDF, type: "secondary" },
        { title: "Watch Walkthrough", url: WALKTHROUGH_VIDEO, type: "video" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Fashionz by Danube visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,436,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "870.58 sq.ft",
          label: "Area From",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "JVT",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Fashionz Visuals",
      slides: GALLERY,
      projectTag: "Fashionz",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "870.58 sq.ft",
            "Starting Price": "AED 1,436,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1178.11 sq.ft",
            "Starting Price": "AED 1,875,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Spa", icon: "💆", color: "#d7b46a" },
        { label: "Rooftop Lounge", icon: "🌇", color: "#d7b46a" },
        { label: "Branded Salon", icon: "✂️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Fashionz",
      address: "Fashionz by Danube, JVT, Dubai, UAE",
      lat: 25.042081,
      lng: 55.1887565,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to major highways." },
        { icon: "🏙️", text: "Located in JVT." },
        { icon: "🛍️", text: "Close to daily amenities." },
      ],
    },

    cta: {
      title: "Interested in Fashionz?",
      description:
        "Share your details to receive availability, prices, and official documents for Fashionz by Danube.",
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
      title: "فاشنز من دانوب | شقق 1 و2 غرفة في JVT | تبدأ من 1,436,000 درهم",
      description:
        "فاشنز من دانوب في مثلث قرية جميرا يوفر شققًا على المخطط تبدأ من 1,436,000 درهم مع خطة دفع 55/45 وتسليم في الربع الرابع 2026.",
      keywords: "فاشنز دانوب, JVT, على المخطط, شقق دانوب",
      canonical: "/properties/apartments/danube/fashionz",
    },

    project: {
      name: "فاشنز",
      developer: "دانوب",
      location: "مثلث قرية جميرا (JVT)، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,436,000 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "1 و 2 غرفة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "دانوب العقارية",
      rating: null,
    },

    intro: {
      title: "فاشنز — أسلوب حياة عصري في JVT",
      paragraphs: [
        `يبدأ السعر من 1,436,000 درهم مع خطة دفع ${PAYMENT_PLAN} وتسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف المعلومات", url: FACT_SHEET_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور فاشنز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,436,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "870.58 قدم²",
          label: "المساحة من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "JVT",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "فاشنز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "870.58 قدم²",
            "السعر الابتدائي": "1,436,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1178.11 قدم²",
            "السعر الابتدائي": "1,875,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "سبا", icon: "💆", color: "#d7b46a" },
        { label: "تراس علوي", icon: "🌇", color: "#d7b46a" },
        { label: "صالون بعلامة تجارية", icon: "✂️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "فاشنز",
      address: "فاشنز من دانوب، JVT، دبي",
      lat: 25.042081,
      lng: 55.1887565,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول للطرق الرئيسية." },
        { icon: "🏙️", text: "ضمن منطقة JVT." },
        { icon: "🛍️", text: "بالقرب من الخدمات اليومية." },
      ],
    },

    cta: {
      title: "مهتم بفاشنز؟",
      description: "أرسل بياناتك للحصول على التوافر والملفات الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default fashionzDanubeData;
