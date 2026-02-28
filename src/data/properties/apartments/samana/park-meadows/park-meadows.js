// src/data/properties/apartments/samana/park-meadows.js
// ✅ Folder: /samana/park-meadows
// ✅ EN + AR
// ✅ Studio / 1BR / 2BR
// ✅ DLRC
// ✅ Exact Bunny filenames ONLY
// ✅ Samana standard blueprint

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/samana/park-meadows";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// Samana square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/samana.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("PARK MEADOWS BROCHURE.pdf");
const FACTSHEET_PDF = cdn("PARK MEADOWS FACTSHEET.pdf");
const FLOORPLANS_PDF = cdn("PARK MEADOWS FLOOR PLAN.pdf");
const PAYMENT_PLAN_PDF = cdn("PARK MEADOWS PAYMENT PLAN.pdf");

const VIDEO = cdn("Park Meadows Launch Video.mp4");

const PAYMENT_PLAN = "15% / 85%";
const HANDOVER = "Q3 2027";

// Floor plans
const FP_STUDIO = cdn("Samana Park Meadows Studio floor plan .png");
const FP_1BR = cdn("Samana Park Meadows 1br floor plan .png");
const FP_2BR = cdn("Samana Park Meadows 2br floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("aerialroof.jpg"),
  cdn("Side Elevation.jpg"),
  cdn("Street Day.jpg"),
  cdn("Street Haze.jpg"),
  cdn("Balcony.jpg"),
  cdn("PoolArea01.jpg"),
  cdn("poolroof02.jpg"),
  cdn("gymroof.jpg"),
  cdn("basketball.jpg"),
  cdn("bbqarea.jpg"),
  cdn("cinema.jpg"),
  cdn("kidsarea.jpg"),
  cdn("DLC4 GYM CAM1.jpg"),
  cdn("DLC4 GYM CAM2.jpg"),
  cdn("DLC4 GYM CAM3.jpg"),
  cdn("DLC4 GYM CAM4.jpg"),
  cdn("DLC4 GYM CAM5.jpg"),
  cdn("DLC4 GYM CAM6.jpg"),
  cdn("DLC4 GYM CAM7.jpg"),
  cdn("DLC4 SAMANA SAUNA CAM 1.jpg"),
  cdn("DLC4 SAMANA SAUNA CAM 2.jpg"),
  cdn("DLC4 SAMANA SAUNA CAM 3.jpg"),
  cdn("DLC4 SAMANA SPA CAM 1.jpg"),
  cdn("DLC4 SAMANA SPA CAM 2.jpg"),
  cdn("DLC4 SAMANA SPA CAM 3.jpg"),
  cdn("DLC4 SAMANA SPA CAM 4.jpg"),
  cdn("DLC4 SAMANA SPA CAM 4K.jpg"),
  cdn("SAMANA - DLRC 3 - Lobby View 1.jpg"),
  cdn("SAMANA - DLRC 3 - Lobby View 2.jpg"),
  cdn("SAMANA - DLRC 3 - Lobby View 3.jpg"),
  cdn("Samana-DLRC4-Apartment (1).jpg"),
  cdn("Samana-DLRC4-Apartment (6).jpg"),
  cdn("Samana-DLRC4-Apartment (7).jpg"),
  cdn("Samana-DLRC4-Apartment (8).jpg"),
  cdn("Samana-DLRC4-Apartment (9).jpg"),
];

// ======================================================
// DATA
// ======================================================
export const samanaParkMeadowsData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Samana Park Meadows | Apartments in DLRC Dubai",
      description:
        "Samana Park Meadows offers studio, 1 & 2 bedroom apartments in DLRC Dubai. Starting from AED 752,178 with a 15/85 payment plan and handover Q3 2027.",
      keywords: "Samana Park Meadows, DLRC apartments, Samana Developers",
      canonical: "/properties/apartments/samana/park-meadows",
    },

    project: {
      name: "Samana Park Meadows",
      developer: "Samana Developers",
      location: "Dubai Land Residence Complex (DLRC), Dubai",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 752,178",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Samana Developers",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "SAMANA PARK MEADOWS — GREEN LIVING IN DLRC",
      paragraphs: [
        "Samana Park Meadows is a modern residential development offering resort-style living in Dubai Land Residence Complex.",
        `Apartments start from AED 752,178 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[6],
      imgAlt: "Samana Park Meadows DLRC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 752K",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "469 sq.ft",
          label: "Studio Size",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "DLRC",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Samana Park Meadows",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "469.09 sq.ft",
            "Starting Price": "AED 752,178",
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
            "Total Area": "847.55 sq.ft",
            "Starting Price": "AED 1,131,970",
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
            "Total Area": "1,304.58 sq.ft",
            "Starting Price": "AED 1,580,020",
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
        { label: "Resort Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Spa & Sauna", icon: "🧖", color: "#c9a24d" },
        { label: "Gym & Fitness", icon: "🏋️", color: "#c9a24d" },
        { label: "Outdoor Cinema", icon: "🎬", color: "#c9a24d" },
        { label: "Kids Play Area", icon: "🧒", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Park Meadows",
      address: "Dubai Land Residence Complex (DLRC), Dubai",
      lat: 25.0908477,
      lng: 55.3842349,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Quick access to Sheikh Mohammed Bin Zayed Road." },
        { icon: "🏙️", text: "Close to major Dubai attractions." },
        { icon: "🌳", text: "Green residential surroundings." },
      ],
    },

    cta: {
      title: "Invest in Samana Park Meadows",
      description:
        "Request prices, availability, and official Samana documents today.",
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
      title: "سمانا بارك ميدوز | شقق في مجمع دبي لاند السكني",
      description:
        "يوفر مشروع سمانا بارك ميدوز شقق استوديو وغرفة وغرفتين نوم في مجمع دبي لاند السكني. تبدأ الأسعار من 752,178 درهم مع خطة سداد 15/85 وتسليم في الربع الثالث 2027.",
      keywords: "سمانا بارك ميدوز، شقق DLRC، سمانا للتطوير العقاري",
      canonical: "/properties/apartments/samana/park-meadows",
    },

    project: {
      name: "سمانا بارك ميدوز",
      developer: "سمانا للتطوير العقاري",
      location: "مجمع دبي لاند السكني (DLRC)، دبي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "752,178 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو، غرفة نوم واحدة، غرفتين نوم",
    },

    hero: {
      backgroundUrl: VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سمانا للتطوير العقاري",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "سمانا بارك ميدوز — أسلوب حياة أخضر في مجمع دبي لاند",
      paragraphs: [
        "سمانا بارك ميدوز هو مشروع سكني عصري يقدّم أسلوب حياة منتجعي داخل مجمع دبي لاند السكني.",
        `تبدأ أسعار الشقق من 752,178 درهم مع خطة سداد ${PAYMENT_PLAN} وتسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ورقة المعلومات", url: FACTSHEET_PDF, type: "secondary" },
        { title: "مخططات الطوابق", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "خطة الدفع", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[6],
      imgAlt: "سمانا بارك ميدوز مجمع دبي لاند",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "752 ألف درهم",
          label: "السعر الابتدائي",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "469 قدم²",
          label: "مساحة الاستوديو",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "DLRC",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض المشروع",
      slides: GALLERY,
      projectTag: "سمانا بارك ميدوز",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "469.09 قدم²",
            "السعر الابتدائي": "752,178 درهم",
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
            "إجمالي المساحة": "847.55 قدم²",
            "السعر الابتدائي": "1,131,970 درهم",
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
            "إجمالي المساحة": "1,304.58 قدم²",
            "السعر الابتدائي": "1,580,020 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح منتجعي", icon: "🏊", color: "#c9a24d" },
        { label: "سبا وساونا", icon: "🧖", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "سينما خارجية", icon: "🎬", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧒", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سمانا بارك ميدوز",
      address: "مجمع دبي لاند السكني (DLRC)، دبي",
      lat: 25.0908477,
      lng: 55.3842349,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى شارع محمد بن زايد." },
        { icon: "🏙️", text: "قريب من أهم وجهات دبي." },
        { icon: "🌳", text: "بيئة سكنية خضراء وهادئة." },
      ],
    },

    cta: {
      title: "استثمر في سمانا بارك ميدوز",
      description: "اطلب الأسعار والتوافر والوثائق الرسمية من سمانا اليوم.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "خطة الدفع", action: "download-payment-plan" },
      ],
    },
  },
};

export default samanaParkMeadowsData;
