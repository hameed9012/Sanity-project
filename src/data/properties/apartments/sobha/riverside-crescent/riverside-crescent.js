// src/data/properties/apartments/sobha/riverside-crescent/310-riverside-crescent.js
// ✅ Blueprint-compliant (Eleganz / Sobha standard)
// ✅ EN + AR
// ✅ Off-plan
// ✅ 2.5BR
// ✅ Uses ONLY uploaded files (exact filenames)
// ✅ Sobha Hartland 2 (MBR City)

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/sobha/riverside-crescent";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const SQUARE_IMAGE_URL = "/Sobha-Realty-Square-Logo.jpg";
// ================= FILES =================
const BROCHURE_PDF = cdn("310 Riverside Crescent Brochure.pdf");
const MASTER_BROCHURE_PDF = cdn("Riverside Crescent Brochure.pdf");
const FACTBOOK_PDF = cdn("Riverside Crescent Factbook.pdf");

const HERO_BG = cdn("310 (9).jpg");
const INTRO_MAIN = cdn("310 (10).jpg");

const FLOORPLAN_25BR = cdn("Sobha 310 riverside cresent 2.5br floor plan.webp");

const GALLERY = [
  cdn("310 (9).jpg"),
  cdn("310 (10).jpg"),
  cdn("310 (11).jpg"),
  cdn("310 (12).jpg"),
  cdn("Balcony Shot 1.jpg"),
  cdn("Balcony Shot 2.jpg"),
];

const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "40% / 60%";

// ======================================================
// DATA
// ======================================================
export const riversideCrescent310Data = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "310 Riverside Crescent by Sobha | 2.5BR in Hartland 2 | From AED 3,419,832",
      description:
        "310 Riverside Crescent by Sobha in Sobha Hartland 2 (MBR City) offers 2.5-bedroom waterfront residences starting from AED 3,419,832 with a 40/60 payment plan and handover in Q4 2027.",
      keywords:
        "310 Riverside Crescent, Sobha Hartland 2, MBR City apartments, Sobha waterfront",
      canonical: "/properties/apartments/sobha/310-riverside-crescent",
    },

    project: {
      name: "310 Riverside Crescent",
      developer: "Sobha Realty",
      location: "Sobha Hartland 2, MBR City, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 3,419,832",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "2.5 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Sobha Realty",
      rating: null,
    },

    intro: {
      title: "310 RIVERSIDE CRESCENT — WATERFRONT LIVING AT HARTLAND 2",
      paragraphs: [
        "310 Riverside Crescent by Sobha is a premium waterfront residential tower located in Sobha Hartland 2 within Mohammed Bin Rashid City.",
        `The project offers spacious 2.5-bedroom residences starting from AED 3,419,832 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Master Brochure",
          url: MASTER_BROCHURE_PDF,
          type: "secondary",
        },
        {
          title: "Project Factbook",
          url: FACTBOOK_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "310 Riverside Crescent visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3,419,832",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1424.93 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Hartland 2",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "310 Riverside Crescent",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2-5br",
          title: "2.5 Bedroom",
          bedrooms: 2.5,
          specs: {
            "Total Area": "1424.93 sq.ft",
            "Starting Price": "AED 3,419,832",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FLOORPLAN_25BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Waterfront Living", icon: "🌊", color: "#d7b46a" },
        { label: "Sobha Hartland 2", icon: "🏙️", color: "#d7b46a" },
        { label: "Spacious Layouts", icon: "📐", color: "#d7b46a" },
        { label: "Luxury Finishes", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "310 Riverside Crescent",
      address:
        "310 Riverside Crescent, Sobha Hartland 2, Mohammed Bin Rashid City, Dubai",
      lat: 25.1762094,
      lng: 55.3250065,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Minutes from Downtown Dubai." },
        { icon: "🏙️", text: "Located in MBR City." },
        { icon: "🌳", text: "Surrounded by green and waterfront zones." },
      ],
    },

    cta: {
      title: "Interested in 310 Riverside Crescent?",
      description:
        "Submit your details to receive unit availability, prices, and official Sobha documents.",
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
      title:
        "310 ريفرسايد كريسنت من شوبا | 2.5 غرفة في هارتلاند 2 | من 3,419,832 درهم",
      description:
        "310 ريفرسايد كريسنت من شوبا في هارتلاند 2 بمدينة محمد بن راشد يوفر شقق 2.5 غرفة تبدأ من 3,419,832 درهم مع خطة دفع 40/60 وتسليم في الربع الرابع 2027.",
      keywords: "310 ريفرسايد كريسنت, شوبا, هارتلاند 2, MBR",
      canonical: "/properties/apartments/sobha/310-riverside-crescent",
    },

    project: {
      name: "310 ريفرسايد كريسنت",
      developer: "شوبا العقارية",
      location: "هارتلاند 2، مدينة محمد بن راشد، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "3,419,832 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "2.5 غرفة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "شوبا العقارية",
      rating: null,
    },

    intro: {
      title: "310 ريفرسايد كريسنت — أسلوب حياة فاخر على الواجهة المائية",
      paragraphs: [
        `يبدأ السعر من 3,419,832 درهم مع خطة دفع ${PAYMENT_PLAN} وتسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "كتيّب المشروع", url: MASTER_BROCHURE_PDF, type: "secondary" },
        { title: "دليل المشروع", url: FACTBOOK_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور 310 ريفرسايد كريسنت",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3,419,832 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1424.93 قدم²",
          label: "المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "هارتلاند 2",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "310 ريفرسايد كريسنت",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2-5br",
          title: "2.5 غرفة نوم",
          bedrooms: 2.5,
          specs: {
            "إجمالي المساحة": "1424.93 قدم²",
            "السعر الابتدائي": "3,419,832 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FLOORPLAN_25BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "واجهة مائية", icon: "🌊", color: "#d7b46a" },
        { label: "هارتلاند 2", icon: "🏙️", color: "#d7b46a" },
        { label: "مساحات واسعة", icon: "📐", color: "#d7b46a" },
        { label: "تشطيبات فاخرة", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "310 ريفرسايد كريسنت",
      address: "310 ريفرسايد كريسنت، هارتلاند 2، مدينة محمد بن راشد، دبي",
      lat: 25.1762094,
      lng: 55.3250065,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "قريب من وسط دبي." },
        { icon: "🏙️", text: "ضمن مدينة محمد بن راشد." },
        { icon: "🌳", text: "مناطق خضراء وواجهة مائية." },
      ],
    },

    cta: {
      title: "مهتم بـ 310 ريفرسايد كريسنت؟",
      description: "أرسل بياناتك للحصول على التوافر والأسعار والملفات الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default riversideCrescent310Data;
