// src/data/properties/apartments/damac/safa-two/safa-two.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /damac/safa-two
// ✅ Encodes spaces + parentheses safely
// ✅ EN + AR
// ✅ Hero background = your uploaded mp4
// ✅ Includes: Brochure PDF
// ✅ Gallery = only assets موجودة فعلاً in the folder
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/safa-two";

// Encode filename safely (includes parentheses too)
const safeEncode = (fileName) =>
  encodeURIComponent(fileName).replace(/\(/g, "%28").replace(/\)/g, "%29");

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${safeEncode(fileName)}`;
const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames موجودة في نفس الفولدر)
// ========================
const HERO_VIDEO = cdn("SAFA TWO - LAUNCH VIDEO - EN.mp4");
const BROCHURE_PDF = cdn("SAFA TWO - BROCHURE - EN (LR).pdf");

// Floor plans (EXACT filenames)
const FP_1BR_IMAGE = cdn("Safa two de gri 1br floor plan.webp");
const FP_2BR_IMAGE = cdn("Safa two de 2br floor plan.webp");
const FP_3BR_IMAGE = cdn("safa two de 3br floor plan.webp");
const FP_5BR_IMAGE = cdn("safa two de 5br floor plan.webp");

// ========================
// Gallery (ONLY files موجودة فعلاً in /damac/safa-two)
// ========================
const GALLERY = [
  // Main exteriors / views
  cdn("SAFA TWO - Exterior 1.jpg"),
  cdn("SAFA TWO - Exterior 2.jpg"),
  cdn("SAFA TWO - View 1.jpg"),
  cdn("Sky View.jpg"),
  cdn("Sky Pool.jpg"),
  cdn("Floating Pool.jpg"),

  // Signature experiences
  cdn("Glass Slide.jpg"),
  cdn("Edge Walk.jpg"),
  cdn("Ruby Heart.jpg"),

  // Arrival / lobby / podium
  cdn("SAFA TWO - Drop Off.jpg"),
  cdn("LOBBY.jpg"),
  cdn("Podium.jpg"),
  cdn("Podium 2.jpg"),

  // Units / interiors
  cdn("2BR.jpg"),
  cdn("2BR - Master BR.jpg"),

  // Penthouses
  cdn("AYKON-PENTHOUSE_v3_05JUN22-FINAL_adjusted.jpg"),
  cdn("Penthouse Pool.jpg"),
  cdn("Penthouse - 2.jpg"),
  cdn("Penthouse 3.jpg"),
  cdn("Penthouse 4.jpg"),
];

// ========================
// Location (from your pin)
// ========================
const MAPS_URL =
  "https://www.google.com/maps/place/Safa+Two+de+GRISOGONO/@25.1811875,55.2498626,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f692c6e69af5d:0x24d193955a81185a!8m2!3d25.1811875!4d55.2524375!16s%2Fg%2F11t2_4jcsg?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D";

const LAT = 25.1811875;
const LNG = 55.2524375;

// ========================
// Data
// ========================
export const safaTwoData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Safa Two de GRISOGONO by DAMAC | 1–3BR Apartments & 5BR Penthouses | 40/60 | Q1 2027",
      description:
        "Safa Two de GRISOGONO by DAMAC near Safa Park. Explore official launch video, brochure, gallery, floor plans (1–3BR + 5BR penthouses), payment plan, and exact location.",
      keywords:
        "Safa Two, de Grisogono, DAMAC, Safa Park, 1BR, 2BR, 3BR, 5BR penthouse, 40/60 payment plan, Q1 2027",
      canonical: "/properties/apartments/damac/safa-two",
    },

    project: {
      name: "Safa Two de GRISOGONO",
      developer: "DAMAC Properties",
      location: "Safa Park, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 3,263,000",
      completionDate: "Q1 2027",
      paymentPlan: "40% / 60%",
      type: "Apartments & Penthouses",
      units: "1BR, 2BR, 3BR & 5BR Penthouses",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "SAFA TWO — ICONIC LUXURY BY DE GRISOGONO",
      paragraphs: [
        "Safa Two de GRISOGONO is a statement luxury tower by DAMAC, designed around bold experiences and signature sky-level amenities near Safa Park.",
        "This page includes your official Bunny assets only: launch video, brochure, curated gallery, and floor plan images for 1BR, 2BR, 3BR, and 5BR penthouses.",
        "Key buyer clarity: handover is planned for Q1 2027 with a 40/60 payment plan, and unit sizes/prices are listed per configuration below.",
      ],
      brochures: [
        {
          title: "Download Brochure (EN)",
          url: BROCHURE_PDF,
          type: "main",
          category: "Brochure",
          fileName: "SAFA TWO - BROCHURE - EN (LR).pdf",
          description: "Official brochure PDF (low-res).",
        },
      ],
      imgUrl: cdn("SAFA TWO - Exterior 1.jpg"),
      imgAlt: "Safa Two exterior visual",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3,263,000",
          label: "1BR Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1009.98 sq.ft",
          label: "1BR Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q1 2027",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Safa Two Visuals",
      slides: GALLERY,
      projectTag: "Safa Two de GRISOGONO",
    },

    floorPlans: {
      type: "apartments-penthouses",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "1009.98 sq.ft",
            "Starting Price": "AED 3,263,000",
            Handover: "Q1 2027",
            "Payment Plan": "40% / 60%",
          },
          images: [FP_1BR_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1413.52 sq.ft",
            "Starting Price": "AED 4,722,000",
            Handover: "Q1 2027",
            "Payment Plan": "40% / 60%",
          },
          images: [FP_2BR_IMAGE],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1673.47 sq.ft",
            "Starting Price": "AED 4,485,000",
            Handover: "Q1 2027",
            "Payment Plan": "40% / 60%",
          },
          images: [FP_3BR_IMAGE],
          features: ["—"],
        },
        {
          id: "5br",
          title: "5 Bedroom (Penthouses)",
          bedrooms: 5,
          specs: {
            "Total Area": "8610.91 sq.ft",
            "Starting Price": "AED 50,547,000",
            Handover: "Q1 2027",
            "Payment Plan": "40% / 60%",
          },
          images: [FP_5BR_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Sky-Level Experiences", icon: "✨", color: "#d7b46a" },
        { label: "Signature Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Luxury Lobby", icon: "🏛️", color: "#d7b46a" },
        { label: "Iconic Design Identity", icon: "💎", color: "#d7b46a" },
        { label: "Prime Safa Park Area", icon: "🌿", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Safa Two de GRISOGONO",
      address: "Safa Park, Dubai, UAE",
      lat: LAT,
      lng: LNG,
      zoom: 15,
      googleMapsUrl: MAPS_URL,
      proximityFeatures: [
        { icon: "📍", text: "Near Safa Park and central Dubai zones." },
        { icon: "🚗", text: "Easy access to Sheikh Zayed Road corridors." },
        {
          icon: "🏙️",
          text: "High-connectivity location for lifestyle living.",
        },
      ],
    },

    cta: {
      title: "Interested in Safa Two?",
      description:
        "Share your details to receive updated availability, unit options, and the official brochure for Safa Two de GRISOGONO.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title:
        "سافا تو دي جريسوغونو من داماك | شقق 1–3 غرف وبنتهاوس 5 غرف | 40/60 | Q1 2027",
      description:
        "سافا تو دي جريسوغونو من داماك بالقرب من حديقة الصفا. شاهد فيديو الإطلاق، البروشور، معرض الصور، ومخططات الطوابق (1–3 غرف + بنتهاوس 5 غرف) مع الموقع الدقيق.",
      keywords:
        "سافا تو, دي جريسوغونو, داماك, حديقة الصفا, 1 غرفة, 2 غرف, 3 غرف, بنتهاوس 5 غرف, 40/60, Q1 2027",
      canonical: "/properties/apartments/damac/safa-two",
    },

    project: {
      name: "سافا تو دي جريسوغونو",
      developer: "داماك العقارية",
      location: "منطقة حديقة الصفا، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "3,263,000 درهم",
      completionDate: "Q1 2027",
      paymentPlan: "40% / 60%",
      type: "شقق وبنتهاوس",
      units: "1 غرفة، 2 غرف، 3 غرف وبنتهاوس 5 غرف",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "سافا تو — فخامة أيقونية بتوقيع دي جريسوغونو",
      paragraphs: [
        "سافا تو دي جريسوغونو برج فاخر من داماك بتجارب مميزة ومرافق سكاي ليفل لأسلوب حياة استثنائي بالقرب من حديقة الصفا.",
        "كل الملفات هنا مربوطة مباشرة من فولدر Bunny الخاص بك: فيديو الإطلاق، البروشور، معرض صور من الملفات المتاحة فقط، ومخططات طوابق 1 و2 و3 غرف وبنتهاوس 5 غرف.",
        "معلومة الشراء الأساسية: التسليم متوقع Q1 2027 وخطة الدفع 40/60، مع توضيح الأسعار والمساحات حسب نوع الوحدة أدناه.",
      ],
      brochures: [
        {
          title: "تحميل البروشور (EN)",
          url: BROCHURE_PDF,
          type: "main",
          category: "Brochure",
          fileName: "SAFA TWO - BROCHURE - EN (LR).pdf",
          description: "البروشور الرسمي PDF (جودة منخفضة).",
        },
      ],
      imgUrl: cdn("SAFA TWO - Exterior 1.jpg"),
      imgAlt: "سافا تو",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3,263,000 درهم",
          label: "سعر 1 غرفة يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1009.98 قدم²",
          label: "مساحة 1 غرفة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q1 2027",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "سافا تو دي جريسوغونو",
    },

    floorPlans: {
      type: "apartments-penthouses",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "1009.98 قدم مربع",
            "السعر الابتدائي": "3,263,000 درهم",
            "موعد التسليم": "Q1 2027",
            "خطة الدفع": "40% / 60%",
          },
          images: [FP_1BR_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1413.52 قدم مربع",
            "السعر الابتدائي": "4,722,000 درهم",
            "موعد التسليم": "Q1 2027",
            "خطة الدفع": "40% / 60%",
          },
          images: [FP_2BR_IMAGE],
          features: ["—"],
        },
        {
          id: "3br",
          title: "ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1673.47 قدم مربع",
            "السعر الابتدائي": "4,485,000 درهم",
            "موعد التسليم": "Q1 2027",
            "خطة الدفع": "40% / 60%",
          },
          images: [FP_3BR_IMAGE],
          features: ["—"],
        },
        {
          id: "5br",
          title: "بنتهاوس 5 غرف",
          bedrooms: 5,
          specs: {
            "إجمالي المساحة": "8610.91 قدم مربع",
            "السعر الابتدائي": "50,547,000 درهم",
            "موعد التسليم": "Q1 2027",
            "خطة الدفع": "40% / 60%",
          },
          images: [FP_5BR_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "تجارب سكاي ليفل", icon: "✨", color: "#d7b46a" },
        { label: "مسابح مميزة", icon: "🏊", color: "#d7b46a" },
        { label: "لوبي فاخر", icon: "🏛️", color: "#d7b46a" },
        { label: "هوية تصميم أيقونية", icon: "💎", color: "#d7b46a" },
        { label: "موقع قريب من الصفا", icon: "🌿", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سافا تو دي جريسوغونو",
      address: "منطقة حديقة الصفا، دبي، الإمارات",
      lat: LAT,
      lng: LNG,
      zoom: 15,
      googleMapsUrl: MAPS_URL,
      proximityFeatures: [
        { icon: "📍", text: "قريب من حديقة الصفا ومناطق دبي المركزية." },
        { icon: "🚗", text: "سهولة الوصول لشارع الشيخ زايد." },
        { icon: "🏙️", text: "موقع متصل ومناسب للحياة العصرية." },
      ],
    },

    cta: {
      title: "مهتم بمشروع سافا تو؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وخيارات الوحدات وروابط الملفات الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل البروشور", action: "download-brochure" },
      ],
    },
  },
};

export default safaTwoData;
