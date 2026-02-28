// src/data/properties/apartments/samana/samana-resorts.js
// ✅ Folder: /samana/samana-resorts
// ✅ EN + AR
// ✅ Studio / 1BR / 2BR
// ✅ Exact Bunny filenames only
// ✅ Dubai Production City
// ✅ Samana standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/samana-resorts";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD SAMANA SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("SAMANA RESORTS BROCHURE.pdf");
const FACTSHEET_PDF = cdn("SAMANA RESORTS FACTSHEET.pdf");
const FLOORPLANS_PDF = cdn("SAMANA RESORTS FLOOR PLAN.pdf");
const PAYMENT_PLAN_PDF = cdn("SAMANA RESORTS PAYMENT PLAN.pdf");

const PAYMENT_PLAN = "75% / 25%";
const HANDOVER = "Q2 2028";

// Hero / Media
const HERO_BG = cdn("Aerial01CC.jpg");
const INTRO_MAIN = cdn("pool1.0060.jpg");

// Floor plans
const FP_STUDIO = cdn("Samana Resorts studio floor plan .png");
const FP_1BR = cdn("Samana Resorts 1br floor plan.webp");
const FP_2BR = cdn("Samana Resorts 2BR floor plan .png");

// ================= GALLERY (VERIFIED FILES ONLY) =================
const GALLERY = [
  cdn("plaza1.0060.jpg"),
  cdn("pool1.0060.jpg"),
  cdn("outdoorcinema.0060.jpg"),
  cdn("outdoorgym.jpg"),
  cdn("Golf.0000.jpg"),
  cdn("Basketball1.0014.jpg"),
  cdn("seatingbbq.0014.jpg"),
  cdn("SeatingNew.jpg"),
  cdn("YogaNew.jpg"),
  cdn("Smana Gym 1.jpg"),
  cdn("Samana Gym 2.jpg"),
  cdn("SAMANA LOBBY CAM 01 logo.jpg"),
  cdn("SAMANA LOBBY CAM 02.jpg"),
  cdn("SAMANA LOBBY CAM 03.jpg"),
  cdn("SAMANA LOBBY CAM 04.jpg"),
  cdn("SAMANA LOBBY CAM 05.jpg"),
  cdn("Apartment-samana (1).jpg"),
  cdn("Apartment-samana (2).jpg"),
  cdn("Apartment-samana (3).jpg"),
  cdn("Apartment-samana (4).jpg"),
  cdn("Apartment-samana (5).jpg"),
  cdn("SAMANA SPA4 CAM 1.jpg"),
  cdn("SAMANA SPA4 CAM 2.jpg"),
  cdn("SAMANA SPA4 CAM 4.jpg"),
  cdn("SAMANA SPA4 CAM 5.jpg"),
];

// ======================================================
// DATA
// ======================================================
export const samanaResortsData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Samana Resorts | Studios, 1 & 2 Bedroom Apartments in Dubai Production City",
      description:
        "Samana Resorts offers studios, 1 and 2 bedroom apartments in Dubai Production City. Starting from AED 696,000 with a 75/25 payment plan and handover in Q2 2028.",
      keywords:
        "Samana Resorts, Samana Developers, Dubai Production City apartments, off-plan Dubai",
      canonical: "/properties/apartments/samana/samana-resorts",
    },

    project: {
      name: "Samana Resorts",
      developer: "Samana Developers",
      location: "Dubai Production City, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 696,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Resort-Style Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
    },

    intro: {
      title: "SAMANA RESORTS — RESORT LIVING IN DUBAI PRODUCTION CITY",
      paragraphs: [
        "Samana Resorts is a resort-inspired residential development offering lifestyle-focused amenities and contemporary living in Dubai Production City.",
        `Studios, 1 and 2-bedroom apartments start from AED 696,000 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Samana Resorts Dubai Production City",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 696K",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "436 – 1,606 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Dubai Production City",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Resorts",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "436.37 sq.ft",
            "Starting Price": "AED 696,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "889.10 sq.ft",
            "Starting Price": "AED 1,119,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,606.94 sq.ft",
            "Starting Price": "AED 1,559,420",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Resort Pools", icon: "🏊", color: "#c9a24d" },
        { label: "Outdoor Cinema", icon: "🎬", color: "#c9a24d" },
        { label: "Gym & Wellness", icon: "🏋️", color: "#c9a24d" },
        { label: "Spa & Sauna", icon: "🧖", color: "#c9a24d" },
        { label: "Sports Courts", icon: "🏀", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Resorts",
      address: "Dubai Production City, Dubai, UAE",
      lat: 25.0391875,
      lng: 55.1929375,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Close to key Dubai business districts." },
        { icon: "🛍️", text: "Nearby retail and lifestyle destinations." },
      ],
    },

    cta: {
      title: "Invest in Samana Resorts",
      description:
        "Request pricing, availability, and official Samana documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Payment Plan", action: "download-payment-plan" },
      ],
    },
  },

  // ================= AR =================
  // ================= AR =================
  ar: {
    seo: {
      title: "سامانا ريزورتس | شقق استوديو وغرفة وغرفتين في مدينة دبي للإنتاج",
      description:
        "يوفر مشروع سامانا ريزورتس شقق استوديو وغرفة وغرفتين نوم في مدينة دبي للإنتاج. تبدأ الأسعار من 696,000 درهم مع خطة سداد 75/25 وتسليم في الربع الثاني 2028.",
      keywords:
        "سامانا ريزورتس، سمانا للتطوير العقاري، شقق مدينة دبي للإنتاج، عقارات دبي على المخطط",
      canonical: "/properties/apartments/samana/samana-resorts",
    },

    project: {
      name: "سامانا ريزورتس",
      developer: "سمانا للتطوير العقاري",
      location: "مدينة دبي للإنتاج، دبي، الإمارات",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "696,000 درهم",
      completionDate: "الربع الثاني 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية بنمط المنتجعات",
      units: "استوديو، غرفة نوم واحدة، غرفتين نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سمانا للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "سامانا ريزورتس — أسلوب حياة منتجعي في مدينة دبي للإنتاج",
      paragraphs: [
        "سامانا ريزورتس هو مشروع سكني مستوحى من أسلوب المنتجعات، يقدّم مرافق متكاملة ونمط حياة عصري في مدينة دبي للإنتاج.",
        `تبدأ أسعار شقق الاستوديو وغرفة وغرفتين نوم من 696,000 درهم مع خطة سداد ${PAYMENT_PLAN} وتسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ورقة الحقائق", url: FACTSHEET_PDF, type: "secondary" },
        { title: "مخططات الطوابق", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "خطة الدفع", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "سامانا ريزورتس مدينة دبي للإنتاج",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "696 ألف درهم",
          label: "السعر الابتدائي",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "436 – 1,606 قدم²",
          label: "المساحات",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "مدينة دبي للإنتاج",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض المشروع",
      slides: GALLERY,
      projectTag: "سامانا ريزورتس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "436.37 قدم²",
            "السعر الابتدائي": "696,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "889.10 قدم²",
            "السعر الابتدائي": "1,119,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,606.94 قدم²",
            "السعر الابتدائي": "1,559,420 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "أسلوب الحياة والمرافق",
      amenities: [
        { label: "مسابح بنمط المنتجعات", icon: "🏊", color: "#c9a24d" },
        { label: "سينما خارجية", icon: "🎬", color: "#c9a24d" },
        { label: "نادي رياضي وعافية", icon: "🏋️", color: "#c9a24d" },
        { label: "سبا وساونا", icon: "🧖", color: "#c9a24d" },
        { label: "ملاعب رياضية", icon: "🏀", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سامانا ريزورتس",
      address: "مدينة دبي للإنتاج، دبي، الإمارات",
      lat: 25.0391875,
      lng: 55.1929375,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى شارع محمد بن زايد." },
        { icon: "🏙️", text: "قريب من مناطق الأعمال الرئيسية في دبي." },
        { icon: "🛍️", text: "قريب من وجهات التسوق ونمط الحياة." },
      ],
    },

    cta: {
      title: "استثمر في سامانا ريزورتس",
      description: "اطلب الأسعار والتوافر والوثائق الرسمية من سمانا اليوم.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "خطة الدفع", action: "download-payment-plan" },
      ],
    },
  },
};

export default samanaResortsData;
