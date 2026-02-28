// ✅ src/data/properties/apartments/omniyat/vela-viento/vela-viento.js
// Reference style: Masaar Azalea blueprint (same structure, strong EN/AR paragraphs)
// ✅ Uses ONLY files موجودة فعلاً inside: /omniyat/vela-viento
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Includes 2 PDFs (Broker Guideline + Fact Sheet) + full gallery + video + 2/3/4BR floor plans
// ✅ Location lat/lng from your Google Maps pin (exact)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/omniyat/vela-viento";

// Safe encoder for Bunny filenames (spaces/case safe)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

/* ===================== PDFs (EXACT filenames) ===================== */
const BROKER_GUIDELINE_PDF = cdn("Vela Viento Broker Guideline.pdf");
const FACT_SHEET_PDF = cdn("VELA Viento Fact Sheet.pdf");

/* ===================== Floor Plans ===================== */
const FP_2BR = cdn("vela viento 2br floor plan.webp");
const FP_3BR = cdn("vela viento 3br floor plan.webp");
const FP_4BR = cdn("Vela viento 4br floor plan.webp");

/* ===================== Video ===================== */
const HERO_VIDEO = cdn("Vela Vieno - Hero Video_16x9_Clean.mp4");

/* ===================== Gallery (ONLY your folder files) ===================== */
const GALLERY = [
  // Hero / exteriors
  cdn("01 VELA Viento Sunrise Hero.jpg"),
  cdn("02 VELA Viento Nigttime Hero 2.jpg"),
  cdn("03 VELA Viento Nighttime Hero.jpg"),
  cdn("04 VELA Viento Penthouse.jpg"),

  // Marasi Bay island / masterplan / context
  cdn("01 Marasi Bay Island by OMNIYAT.jpg"),
  cdn("02 Marasi Bay Island by OMNIYAT.jpg"),
  cdn("03 Marasi Bay Island by OMNIYAT.jpg"),
  cdn("04 Marasi Bay Island by OMNIYAT - Beach Club.jpg"),
  cdn("05 Marasi Bay - OMNIYAT - South Bay Amenities 1.jpg"),
  cdn("08 Marasi Bay by OMNIYAT - South Bay Amenities 2.jpg"),
  cdn("09 Marasi Bay by OMNIYAT - Waterfront Promenade 1.jpg"),
  cdn("10 Marasi Bay by OMNIYAT - Waterfront Promenade 2.jpg"),
  cdn("11 Marasi Bay - OMNIYAT - Art Trail.jpg"),
  cdn("12 Marasi Bay - OMNIYAT - Marina.jpg"),
  cdn("06 Sunset Park by OMNIYAT 1.jpg"),
  cdn("07 Sunset Park by OMNIYAT 2.jpg"),
  cdn("NEW 01 Marasi Bay - OMNIYAT - Family Shot.jpg"),
  cdn("NEW 02 Marasi Bay - OMNIYAT - Masterplan.jpg"),
  cdn("NEW 03 Marasi Bay - OMNIYAT - South Bay .jpg"),
  cdn("NEW 04 Marasi Bay - OMNIYAT - VELA & VELA Viento & Sunset Park.jpg"),

  // Balconies
  cdn("VELA Viento Balcony 1 Low View.jpg"),
  cdn("VELA Viento Balcony 1 Medium View.jpg"),
  cdn("VELA Viento Balcony 1 Higher View.jpg"),
  cdn("VELA Viento Balcony 2 Low View.jpg"),
  cdn("VELA Viento Balcony 2 Medium View.jpg"),
  cdn("VELA Viento Balcony 2 Higher View.jpg"),

  // Lifestyle / amenities
  cdn("2 VELA Viento Indoor Podium Pool.jpg"),
  cdn("1 VELA Viento Gym 2.jpeg"),
  cdn("5 VELA Viento Spa.jpg"),
  cdn("6 VELA Viento Cinema.jpg"),
  cdn("8 VELA Viento Yoga Studio.jpg"),
  cdn("7 VELA Viento Meeting Room.jpeg"),
  cdn("4 VELA Viento Cafe.jpg"),
  cdn("3 VELA Viento Zen Garden.jpg"),

  // Horizon interiors (show unit vibe)
  cdn("1 VELA Viento Horizon Lift Lobby.jpg"),
  cdn("2 VELA Viento Horizon Formal Living.jpg"),
  cdn("3 VELA Viento Horizon Family Living.jpg"),
  cdn("6 VELA Viento Horizon Living.jpg"),
  cdn("1 VELA Viento Horizon Show Kitchen.jpg"),
  cdn("5 VELA Viento Horizon Kitchen Dining.jpg"),
  cdn("4 VELA Viento Horizon Guest Bedroom 1.jpg"),
  cdn("5 VELA Viento Horizon Guest Bedroom 2.jpg"),
  cdn("7 VELA Viento Horizon Master Bedroom.jpg"),
  cdn("9 VELA Viento Horizon Master Bathroom.jpg"),
  cdn("8 VELA Viento Horizon Walk-in Closet.jpg"),
  cdn("2 VELA Viento Horizon Vestibule.jpg"),
  cdn("3 VELA Viento Horizon Vestibule Opt 2.jpg"),
  cdn("4 VELA Viento Horizon Powder Room.jpg"),
];

/* ===================== Hero / Intro ===================== */
const HERO_BG = cdn("Vela Vieno - Hero Video_16x9_Clean.mp4");
const INTRO_MAIN = cdn("1 VELA Viento Horizon Lift Lobby.jpg");

/* ===================== Quick Facts (from your sheet) ===================== */
const STATUS = "Off-Plan";
const COMPLETION = "Q1 2027";
const PAYMENT_PLAN = "60% / 40%";
const STARTING_PRICE = "AED 21,858,826";
const LOCATION_LABEL = "Business Bay";

/* ===================== Google Maps ===================== */
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Vela+Viento+by+Omniyat/@25.1906521,55.2874134,17z/data=!4m10!1m2!2m1!1svela+viento!3m6!1s0x3e5f69371f853043:0x3282bedc6843f2f8!8m2!3d25.1905379!4d55.2900538!15sCgt2ZWxhIHZpZW50b5IBEmFwYXJ0bWVudF9idWlsZGluZ-ABAA!16s%2Fg%2F11lcbz83h4";

export const omniyatVelaVientoData = {
  /* ============================
   * EN
   * ============================ */
  en: {
    seo: {
      title:
        "VELA Viento by OMNIYAT | 2–4BR Residences in Business Bay (Marasi Bay) | Handover Q1 2027 | 60/40 Payment",
      description:
        "VELA Viento by OMNIYAT is a next-generation waterfront address in Business Bay’s Marasi Bay. Explore the official fact sheet, broker guideline, hero video, full gallery, and 2–4BR floor plans. Starting from AED 21,858,826 with a 60/40 payment plan and handover in Q1 2027.",
      keywords:
        "VELA Viento, OMNIYAT, Business Bay, Marasi Bay, Dubai luxury residences, 2BR 3BR 4BR, 60/40 payment plan, Q1 2027 handover, waterfront living",
      canonical: "/properties/apartments/omniyat/vela-viento",
    },

    project: {
      name: "VELA Viento",
      developer: "OMNIYAT",
      location: "Marasi Bay, Business Bay, Dubai, UAE",
      status: STATUS,
      startingPrice: STARTING_PRICE,
      completionDate: COMPLETION,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Residences",
      units: "2–4 Bedroom",
      baseUrl: BASE,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "OMNIYAT",
      rating: null,
    },

    intro: {
      title: "WATERFRONT PRESTIGE AT MARASI BAY",
      paragraphs: [
        "VELA Viento by OMNIYAT is designed for buyers who want a future-facing Dubai address—one that blends waterfront calm with central-city energy. Set within Marasi Bay in Business Bay, the project sits at the heart of a lifestyle zone defined by promenades, marina experiences, curated parks, and a refined sense of arrival.",
        "This is not simply a tower with views—VELA Viento is positioned as a “district-defining” residence. The surrounding environment is planned like a destination: sunset parks, art trails, waterfront walkways, and a marina backdrop that makes daily life feel like a resort routine while keeping Downtown and DIFC within easy reach.",
        "Inside, the concept is equally deliberate. From lift-lobby moments to horizon-style interiors, the palette and spatial planning focus on luxury that feels calm and architectural—more refined than flashy. Amenities like podium pools, spa zones, fitness and yoga studios, cinema and meeting spaces support a complete lifestyle for both end-users and high-profile second-home owners.",
      ],
      brochures: [
        {
          title: "Download Fact Sheet",
          url: FACT_SHEET_PDF,
          type: "main",
          fileName: "VELA Viento Fact Sheet.pdf",
          category: "Overview",
          description: "Official fact sheet (PDF).",
        },
        {
          title: "Download Broker Guideline",
          url: BROKER_GUIDELINE_PDF,
          type: "secondary",
          fileName: "Vela Viento Broker Guideline.pdf",
          category: "Sales Kit",
          description: "Official broker guideline (PDF).",
        },
      ],
      videoUrl: HERO_VIDEO,
      imgUrl: INTRO_MAIN,
      imgAlt: "VELA Viento - lift lobby / interior experience",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 21.86M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q1 2027",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🧾",
          value: "60/40",
          label: "Payment Plan",
        },
        {
          top: "44%",
          left: "-40px",
          icon: "📍",
          value: "Marasi Bay",
          label: "Waterfront Location",
        },
      ],
      highlights: [
        "Prime Marasi Bay waterfront positioning in Business Bay",
        "Destination-style master environment: promenade, marina, parks, art trail",
        "Amenity-led lifestyle: pool, spa, gym, yoga, cinema, meeting spaces",
        "2–4BR layouts with large areas + strong end-user appeal",
      ],
    },

    gallery: {
      title: "VELA Viento Gallery",
      slides: GALLERY,
      projectTag: "VELA Viento",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom Residence",
          shortLabel: "2 BR",
          bedrooms: 2,
          specs: {
            Unit: "2 Bedroom Residence",
            "Total Area": "3,862 sq.ft",
            "Starting Price": "AED 21,858,826",
            Handover: "Q1 2027",
            "Payment Plan": "60% / 40%",
            Location: "Business Bay (Marasi Bay)",
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Residence",
          shortLabel: "3 BR",
          bedrooms: 3,
          specs: {
            Unit: "3 Bedroom Residence",
            "Total Area": "5,441 sq.ft",
            "Starting Price": "AED 37,571,930",
            Handover: "Q1 2027",
            "Payment Plan": "60% / 40%",
            Location: "Business Bay (Marasi Bay)",
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 Bedroom Residence",
          shortLabel: "4 BR",
          bedrooms: 4,
          specs: {
            Unit: "4 Bedroom Residence",
            "Total Area": "6,090 sq.ft",
            "Starting Price": "AED 51,150,131",
            Handover: "Q1 2027",
            "Payment Plan": "60% / 40%",
            Location: "Business Bay (Marasi Bay)",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: FACT_SHEET_PDF,
    },

    amenities: {
      title: "Amenities",
      amenities: [
        {
          label: "Waterfront Promenade Lifestyle",
          icon: "🌊",
          color: "#d7b46a",
        },
        { label: "Indoor / Podium Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Spa & Wellness", icon: "🧘", color: "#d7b46a" },
        { label: "High-End Gym", icon: "💪", color: "#d7b46a" },
        { label: "Yoga Studio", icon: "🧘‍♀️", color: "#d7b46a" },
        { label: "Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Meeting Room", icon: "🗂️", color: "#d7b46a" },
        { label: "Café / Social Spaces", icon: "☕", color: "#d7b46a" },
        { label: "Zen Garden", icon: "🌿", color: "#d7b46a" },
        { label: "Marina & Bay Atmosphere", icon: "⛵", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Location",
      projectName: "VELA Viento",
      address: "Marasi Bay, Business Bay, Dubai, UAE",
      lat: 25.1905379,
      lng: 55.2900538,
      zoom: 16,
      googleMapsUrl: GOOGLE_MAPS_URL,
      proximityFeatures: [
        {
          icon: "📍",
          text: "Marasi Bay — curated waterfront district in Business Bay.",
        },
        { icon: "🏙️", text: "Fast access to Downtown Dubai and DIFC." },
        {
          icon: "🚗",
          text: "Connected to major city routes for daily mobility.",
        },
      ],
    },

    cta: {
      title: "Interested in VELA Viento?",
      description:
        "Share your details to receive current availability, private unit options, and the official fact sheet, broker guideline, video, and floor plan files for VELA Viento by OMNIYAT.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Fact Sheet", action: "download-brochure" },
      ],
    },
  },

  /* ============================
   * AR
   * ============================ */
  ar: {
    seo: {
      title:
        "فيلا فينتو من أمنيات | 2–4 غرف في الخليج التجاري (مرسى باي) | التسليم Q1 2027 | خطة دفع 60/40",
      description:
        "فيلا فينتو من أمنيات هو عنوان واجهة بحرية جديد في مرسى باي بالخليج التجاري. استعرض ملف الحقائق الرسمي، دليل الوسطاء، فيديو البطل، معرض الصور الكامل، ومخططات 2–4 غرف. يبدأ السعر من 21,858,826 درهم مع خطة دفع 60/40 وتسليم Q1 2027.",
      keywords:
        "فيلا فينتو, أمنيات, الخليج التجاري, مرسى باي, دبي شقق فاخرة, 2 غرف 3 غرف 4 غرف, خطة دفع 60/40, تسليم Q1 2027, واجهة بحرية",
      canonical: "/properties/apartments/omniyat/vela-viento",
    },

    project: {
      name: "فيلا فينتو",
      developer: "أمنيات",
      location: "مرسى باي، الخليج التجاري، دبي، الإمارات",
      status: "على الخريطة",
      startingPrice: "21,858,826 درهم",
      completionDate: "Q1 2027",
      paymentPlan: "60% / 40%",
      type: "وحدات فاخرة",
      units: "2–4 غرف نوم",
      baseUrl: BASE,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "أمنيات",
      rating: null,
    },

    intro: {
      title: "فخامة واجهة بحرية في مرسى باي",
      paragraphs: [
        "فيلا فينتو من أمنيات صُمّم لمن يريد عنوانًا مستقبليًا في دبي—يجمع هدوء الواجهة البحرية مع طاقة المدينة في موقع مركزي. يقع المشروع ضمن «مرسى باي» في الخليج التجاري، داخل بيئة مخططة بنمط وجهة: ممشى على الماء، أجواء مارينا، ومساحات خضراء منتقاة بعناية تمنحك إحساس الوصول الراقي.",
        "المشروع ليس مجرد برج بإطلالات—بل جزء من منطقة تُعرّف نفسها كأسلوب حياة. ستجد مسارات فنية، ممشى مائي، وحدائق الغروب التي تجعل الروتين اليومي أقرب إلى أجواء منتجع، مع بقاء وسط المدينة وDIFC على مسافة قصيرة.",
        "الداخلية تتبع نفس المنطق: فخامة هادئة وطابع معماري متزن بعيدًا عن المبالغة. مرافق مثل مسبح البوديوم، السبا، اللياقة واليوغا، السينما وغرف الاجتماعات تمنحك أسلوب حياة مكتمل—مناسب للسكن الدائم أو كمنزل ثانٍ عالي المكانة.",
        "ومع خطة دفع 60/40 وتسليم متوقع في Q1 2027، يُعد فيلا فينتو خيارًا قويًا لاقتناء أصل واجهة بحرية في قلب دبي—من مطور معروف بمشاريعه المميزة وقيمة العلامة طويلة الأمد.",
      ],
      brochures: [
        {
          title: "تحميل ملف الحقائق",
          url: FACT_SHEET_PDF,
          type: "main",
          fileName: "VELA Viento Fact Sheet.pdf",
          category: "نظرة عامة",
          description: "ملف الحقائق الرسمي (PDF).",
        },
        {
          title: "تحميل دليل الوسطاء",
          url: BROKER_GUIDELINE_PDF,
          type: "secondary",
          fileName: "Vela Viento Broker Guideline.pdf",
          category: "ملف البيع",
          description: "دليل الوسطاء الرسمي (PDF).",
        },
      ],
      videoUrl: HERO_VIDEO,
      imgUrl: INTRO_MAIN,
      imgAlt: "فيلا فينتو - ردهة المصاعد / تجربة داخلية",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "21.86M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q1 2027",
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🧾",
          value: "60/40",
          label: "خطة الدفع",
        },
        {
          top: "44%",
          left: "-40px",
          icon: "📍",
          value: "مرسى باي",
          label: "موقع واجهة بحرية",
        },
      ],
      highlights: [
        "موقع واجهة بحرية في مرسى باي داخل الخليج التجاري",
        "بيئة «وجهة» متكاملة: ممشى، مارينا، حدائق ومسارات فنية",
        "مرافق أسلوب حياة: مسبح، سبا، جيم، يوغا، سينما، غرف اجتماعات",
        "مساحات كبيرة لوحدات 2–4 غرف مع جاذبية قوية للسكن والاستثمار",
      ],
    },

    gallery: {
      title: "معرض فيلا فينتو",
      slides: GALLERY,
      projectTag: "VELA Viento",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "وحدة غرفتين",
          shortLabel: "2 غرف",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "2 غرف نوم",
            "إجمالي المساحة": "3,862 قدم²",
            "السعر الابتدائي": "21,858,826 درهم",
            "موعد التسليم": "Q1 2027",
            "خطة الدفع": "60% / 40%",
            الموقع: "الخليج التجاري (مرسى باي)",
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "وحدة 3 غرف",
          shortLabel: "3 غرف",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "3 غرف نوم",
            "إجمالي المساحة": "5,441 قدم²",
            "السعر الابتدائي": "37,571,930 درهم",
            "موعد التسليم": "Q1 2027",
            "خطة الدفع": "60% / 40%",
            الموقع: "الخليج التجاري (مرسى باي)",
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "وحدة 4 غرف",
          shortLabel: "4 غرف",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "4 غرف نوم",
            "إجمالي المساحة": "6,090 قدم²",
            "السعر الابتدائي": "51,150,131 درهم",
            "موعد التسليم": "Q1 2027",
            "خطة الدفع": "60% / 40%",
            الموقع: "الخليج التجاري (مرسى باي)",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: FACT_SHEET_PDF,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        {
          label: "أسلوب حياة على الواجهة البحرية",
          icon: "🌊",
          color: "#d7b46a",
        },
        { label: "مسبح بوديوم / داخلي", icon: "🏊", color: "#d7b46a" },
        { label: "سبا وعافية", icon: "🧘", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "استوديو يوغا", icon: "🧘‍♀️", color: "#d7b46a" },
        { label: "سينما", icon: "🎬", color: "#d7b46a" },
        { label: "غرفة اجتماعات", icon: "🗂️", color: "#d7b46a" },
        { label: "مقهى ومساحات اجتماعية", icon: "☕", color: "#d7b46a" },
        { label: "حديقة زن", icon: "🌿", color: "#d7b46a" },
        { label: "أجواء مارينا وخليج", icon: "⛵", color: "#d7b46a" },
      ],
    },

    location: {
      title: "الموقع",
      projectName: "فيلا فينتو",
      address: "مرسى باي، الخليج التجاري، دبي، الإمارات العربية المتحدة",
      lat: 25.1905379,
      lng: 55.2900538,
      zoom: 16,
      googleMapsUrl: GOOGLE_MAPS_URL,
      proximityFeatures: [
        {
          icon: "📍",
          text: "مرسى باي — منطقة واجهة بحرية مخططة داخل الخليج التجاري.",
        },
        { icon: "🏙️", text: "قريب من وسط مدينة دبي وDIFC." },
        { icon: "🚗", text: "اتصال ممتاز بالطرق الرئيسية والتنقل اليومي." },
      ],
    },

    cta: {
      title: "مهتم بفيلا فينتو؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات وروابط ملف الحقائق ودليل الوسطاء والفيديو ومخططات الطوابق الرسمية لمشروع فيلا فينتو من أمنيات.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "تحميل ملف الحقائق", action: "download-brochure" },
      ],
    },
  },
};

export default omniyatVelaVientoData;
