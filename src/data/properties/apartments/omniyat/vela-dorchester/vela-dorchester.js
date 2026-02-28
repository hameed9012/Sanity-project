// ✅ src/data/properties/apartments/omniyat/vela-dorchester/vela-dorchester.js
// Blueprint-compatible (same structure as The Gate 3 + Opus)
// Strong EN/AR descriptions + full working data object

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/omniyat/vela-dorchester";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

/* ===================== PDFs ===================== */
const BROCHURE_PDF = cdn("VELA Horizontal eBrochure.pdf");
const FACTSHEET_PDF = cdn("VELA Factsheet Horizontal 10.07.23.pdf");

/* ===================== Floor Plans ===================== */
const FP_3BR = cdn("vela dorchester 3br floor plan.webp");
const FP_4BR = cdn("vela dorchester 4br floor plan.webp");

/* ===================== Video ===================== */
const FLOW_VIDEO = cdn(
  "VELA by OMNIYAT, Dorchester Collection, Dubai - Flow 16x9.mp4",
);

/* ===================== Hero / Intro ===================== */
const HERO_BG = cdn("VELA_Exterior_Hero.jpg");
const INTRO_MAIN = cdn("VELA_Interior_ReceptionLobby.jpg");

/* ===================== Gallery ===================== */
const GALLERY = [
  // Hero / Exterior
  cdn("VELA_Exterior_Hero.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Exterior.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Exterior 2.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Night.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Podium.jpg"),

  // Canal / marina / aerials
  cdn("Vela_VelaViento_Exterior_HeroFromCanal.jpg"),
  cdn("Vela_VelaViento_Exterior_AerialMarina.jpg"),
  cdn("Vela_VelaViento_Exterior_RearAerial.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Marina.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Marina 2.jpg"),
  cdn("Vela_VelaViento_Exterior_FamilyShot.jpg"),

  // Arrival / architecture
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Arrival.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Arrival 2.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Architecture.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Architecture 2.jpg"),

  // Terraces
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Terrace.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Terraces.jpg"),
  cdn("VELA_Exterior_SkyPalace.jpg"),
  cdn("VELA_Exterior_Living_1402.jpg"),

  // Interiors / lifestyle
  cdn("VELA_Interior_ReceptionLobby.jpg"),
  cdn("VELA_Interior_Reception.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Master Bedroom 1.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Master Bedroom 2.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Master Bathroom.jpg"),

  // Amenities
  cdn("VELA by OMNIYAT Managed by Dorchester Collection - Gym.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection - Cinema.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection Amenities.jpg"),

  // Signature residences / layouts (as visuals)
  cdn("VELA_Interior_MarinaPenthouse.jpg"),
  cdn("VELA_Interior_MarinaPenthouse_Pool.jpg"),
  cdn("VELA_Interior_MarinaPenthouse_CornerPool_Updated.jpg"),
  cdn(
    "VELA by OMNIYAT Managed by Dorchester Collection - 4BD Marina Residences.jpg",
  ),

  // Unit visuals (1601 / 1801)
  cdn("VELA by OMNIYAT Managed by Dorchester Collection - 1601 A.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection - 1801 A.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection - 1801 B.jpg"),
  cdn("VELA by OMNIYAT Managed by Dorchester Collection - 1801 C.jpg"),
];

/* ===================== Quick Facts (from your sheet) ===================== */
const STATUS = "Off-Plan";
const STARTING_PRICE = "AED 43,330,140";
const COMPLETION = "Q4 2026";
const PAYMENT_PLAN = "60% / 40%";

export const omniyatVelaDorchesterData = {
  en: {
    seo: {
      title:
        "VELA by OMNIYAT, Dorchester Collection | Ultra-Luxury 3–4BR Residences in Business Bay | Handover Q4 2026",
      description:
        "VELA by OMNIYAT, managed by Dorchester Collection, is an ultra-luxury waterfront address in Business Bay near the Dubai Canal. Explore gallery, brochure, factsheet, video, and floor plans for 3–4BR residences. Starting from AED 43,330,140 with a 60/40 payment plan and handover Q4 2026.",
      keywords:
        "VELA, OMNIYAT, Dorchester Collection, Business Bay, Dubai Canal, ultra luxury residences, 3BR 4BR, 60/40 payment plan, Q4 2026",
      canonical: "/properties/apartments/omniyat/vela-dorchester",
    },

    project: {
      name: "VELA",
      developer: "OMNIYAT",
      location: "Business Bay (Dubai Canal), Dubai, UAE",
      status: STATUS,
      startingPrice: STARTING_PRICE,
      completionDate: COMPLETION,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "3–4 Bedroom Residences",
      // Optional label for premium brand
      managedBy: "Dorchester Collection",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "OMNIYAT",
      rating: null,
    },

    intro: {
      title: "A CANALFRONT ICON MANAGED BY DORCHESTER COLLECTION",
      paragraphs: [
        "VELA by OMNIYAT is crafted for buyers who demand more than luxury—they want an address that feels curated, private, and unmistakably elite. Positioned along the Dubai Canal in Business Bay, VELA blends striking architecture with a calm waterfront setting, creating a residence that feels removed from the city’s noise while remaining minutes from Downtown and Dubai’s most important destinations.",
        "What elevates VELA into a rare category is the Dorchester Collection management philosophy: meticulous service, refined hospitality, and the kind of daily experience usually reserved for the world’s top hotels. This is where ownership is not only about the unit—it’s about the lifestyle layer built around it: arrivals that feel ceremonial, amenities that feel purpose-built, and spaces that are designed to be lived in with ease and dignity.",
        "The residences themselves are defined by scale, terrace living, and an indoor-outdoor rhythm that matches the canal setting. Natural light, generous layouts, and premium finishes combine to create homes that feel grand but not loud—elegant without trying too hard. Whether for end-use or a trophy investment, VELA speaks to clients who value design integrity and long-term brand value.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "VELA Horizontal eBrochure.pdf",
          category: "Overview",
          description: "Official eBrochure (PDF).",
        },
        {
          title: "Download Factsheet",
          url: FACTSHEET_PDF,
          type: "support",
          fileName: "VELA Factsheet Horizontal 10.07.23.pdf",
          category: "Overview",
          description: "Official factsheet (PDF).",
        },
      ],
      videoUrl: FLOW_VIDEO,
      imgUrl: INTRO_MAIN,
      imgAlt: "VELA by OMNIYAT - reception lobby",
      floatingCards: [
        {
          top: "16%",
          right: "-30px",
          icon: "💰",
          value: "AED 43.33M",
          label: "Starting Price",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📅",
          value: "Q4 2026",
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
          value: "Dubai Canal",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "VELA",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "3br",
          title: "3 Bedroom",
          shortLabel: "3 BR",
          bedrooms: 3,
          specs: {
            Unit: "3 Bedroom Residence",
            "Total Area": "6,361 sq.ft",
            "Starting Price": "AED 43,330,140",
            Handover: "Q4 2026",
            "Payment Plan": "60% / 40%",
            Location: "Business Bay (Dubai Canal)",
            Managed: "Dorchester Collection",
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          shortLabel: "4 BR",
          bedrooms: 4,
          specs: {
            Unit: "4 Bedroom Residence",
            "Total Area": "7,373 sq.ft",
            "Starting Price": "AED 63,492,975",
            Handover: "Q4 2026",
            "Payment Plan": "60% / 40%",
            Location: "Business Bay (Dubai Canal)",
            Managed: "Dorchester Collection",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities",
      amenities: [
        {
          label: "Dorchester Collection Service",
          icon: "🛎️",
          color: "#d7b46a",
        },
        { label: "Canalfront Lifestyle", icon: "🌊", color: "#d7b46a" },
        { label: "Resort-Style Pool & Terraces", icon: "🏊", color: "#d7b46a" },
        { label: "Private Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "High-End Gym", icon: "💪", color: "#d7b46a" },
        { label: "Wellness & Spa Atmosphere", icon: "🧘", color: "#d7b46a" },
        { label: "Signature Architecture", icon: "🏛️", color: "#d7b46a" },
        { label: "Prime Central Dubai Access", icon: "🚗", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Location",
      projectName: "VELA",
      address: "Business Bay (Dubai Canal), Dubai, UAE",
      lat: 25.1903477,
      lng: 55.2891717,
      zoom: 16,
      googleMapsUrl:
        "https://www.google.com/maps/place/VELA,+Dorchester+Collection,+Dubai/@25.1892271,55.2877172,18z/data=!4m10!1m2!2m1!1svela+dorchester+omniyat!3m6!1s0x8b3e7871c494d5c3:0xfcf3cd637b4af9cc!8m2!3d25.1903477!4d55.2891717!15sChd2ZWxhIGRvcmNoZXN0ZXIgb21uaXlhdJIBEmFwYXJ0bWVudF9idWlsZGluZ-ABAA!16s%2Fg%2F11y3kctxry",
      proximityFeatures: [
        {
          icon: "📍",
          text: "Dubai Canal — waterfront lifestyle in central Dubai",
        },
        { icon: "🏙️", text: "Minutes to Downtown Dubai and DIFC connectivity" },
        {
          icon: "🚗",
          text: "Quick access to key city routes and prime destinations",
        },
      ],
    },

    cta: {
      title: "Interested in VELA?",
      description:
        "Send your details to receive updated availability, pricing, and the official brochure, factsheet, and floor plan files for VELA by OMNIYAT, managed by Dorchester Collection.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "فيلا من أمنيات بإدارة دورشستر كوليكشن | وحدات فاخرة 3–4 غرف في الخليج التجاري | التسليم Q4 2026",
      description:
        "فيلا من أمنيات بإدارة Dorchester Collection هو عنوان فائق الفخامة على واجهة قناة دبي في الخليج التجاري. استكشف الصور والكتيّب والفكتشيت والفيديو ومخططات الطوابق لوحدات 3–4 غرف. يبدأ السعر من 43,330,140 درهم مع خطة دفع 60/40 وموعد تسليم Q4 2026.",
      keywords:
        "فيلا, أمنيات, دورشستر كوليكشن, الخليج التجاري, قناة دبي, وحدات فاخرة, 3 غرف 4 غرف, خطة دفع 60/40, تسليم Q4 2026",
      canonical: "/properties/apartments/omniyat/vela-dorchester",
    },

    project: {
      name: "فيلا",
      developer: "أمنيات",
      location: "الخليج التجاري (قناة دبي)، دبي، الإمارات",
      status: "على الخريطة",
      startingPrice: "43,330,140 درهم",
      completionDate: "Q4 2026",
      paymentPlan: "60% / 40%",
      type: "شقق",
      units: "وحدات 3–4 غرف نوم",
      managedBy: "دورشستر كوليكشن",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "أمنيات",
      rating: null,
    },

    intro: {
      title: "عنوان على القناة بإدارة دورشستر كوليكشن",
      paragraphs: [
        "فيلا من أمنيات صُمم لعملاء لا يبحثون عن الفخامة فقط—بل عن تجربة سكنية مُنسّقة، خاصة، وحصرية بكل معنى الكلمة. على امتداد قناة دبي في الخليج التجاري، يجمع فيلا بين عمارة ملفتة وهدوء الواجهة المائية ليمنحك إحساسًا بالعزلة الراقية مع قربك من وسط المدينة وأهم وجهات دبي خلال دقائق.",
        "ما يضع فيلا ضمن فئة نادرة هو فلسفة إدارة Dorchester Collection: خدمة دقيقة، ضيافة راقية، وتجربة يومية عادةً ما تُقدّم في أفخم فنادق العالم. هنا لا تمتلك وحدة فقط، بل تمتلك طبقة أسلوب حياة كاملة: وصول فخم، مرافق مصممة بعناية، ومساحات تسهّل الحياة وتُشعرك بالهيبة والراحة.",
        "الوحدات تتميز بالمساحات الكبيرة، أسلوب التراسات، وإيقاع داخلي-خارجي يناسب موقع القناة. الإضاءة الطبيعية، المخططات السخية، والتشطيبات الفاخرة تخلق منازل فخمة دون مبالغة—أناقة هادئة وواثقة. سواء للسكن أو كاستثمار “تروفي”، فيلا يخاطب من يقدّر قيمة العلامة والتصميم على المدى الطويل.",
        "مع خطة دفع 60/40 وتسليم متوقع في Q4 2026، يمنحك فيلا مسارًا واضحًا للتملك ضمن مجموعة من أرقى المشاريع السكنية المُدارة في دبي. اختر بين 3 و4 غرف—كل خيار مصمم للخصوصية والحضور وتجربة أمنيات الفريدة.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "VELA Horizontal eBrochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الإلكتروني الرسمي (PDF).",
        },
        {
          title: "تحميل الفكتشيت",
          url: FACTSHEET_PDF,
          type: "support",
          fileName: "VELA Factsheet Horizontal 10.07.23.pdf",
          category: "نظرة عامة",
          description: "الملف التعريفي الرسمي (PDF).",
        },
      ],
      videoUrl: FLOW_VIDEO,
      imgUrl: INTRO_MAIN,
      imgAlt: "فيلا من أمنيات - ردهة الاستقبال",
      floatingCards: [
        {
          top: "16%",
          right: "-30px",
          icon: "💰",
          value: "43.33M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📅",
          value: "Q4 2026",
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
          value: "قناة دبي",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "VELA",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "3br",
          title: "3 غرف نوم",
          shortLabel: "3 غرف",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "وحدة سكنية 3 غرف",
            "إجمالي المساحة": "6,361 قدم²",
            "السعر الابتدائي": "43,330,140 درهم",
            "موعد التسليم": "Q4 2026",
            "خطة الدفع": "60% / 40%",
            الموقع: "الخليج التجاري (قناة دبي)",
            الإدارة: "دورشستر كوليكشن",
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "4 غرف نوم",
          shortLabel: "4 غرف",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "وحدة سكنية 4 غرف",
            "إجمالي المساحة": "7,373 قدم²",
            "السعر الابتدائي": "63,492,975 درهم",
            "موعد التسليم": "Q4 2026",
            "خطة الدفع": "60% / 40%",
            الموقع: "الخليج التجاري (قناة دبي)",
            الإدارة: "دورشستر كوليكشن",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "خدمة دورشستر كوليكشن", icon: "🛎️", color: "#d7b46a" },
        { label: "أسلوب حياة على القناة", icon: "🌊", color: "#d7b46a" },
        { label: "مسبح وتراسات بطابع منتجع", icon: "🏊", color: "#d7b46a" },
        { label: "سينما خاصة", icon: "🎬", color: "#d7b46a" },
        { label: "نادي رياضي فاخر", icon: "💪", color: "#d7b46a" },
        { label: "أجواء سبا وعافية", icon: "🧘", color: "#d7b46a" },
        { label: "عمارة أيقونية", icon: "🏛️", color: "#d7b46a" },
        { label: "موقع مركزي في دبي", icon: "🚗", color: "#d7b46a" },
      ],
    },

    location: {
      title: "الموقع",
      projectName: "فيلا",
      address: "الخليج التجاري (قناة دبي)، دبي، الإمارات العربية المتحدة",
      lat: 25.1903477,
      lng: 55.2891717,
      zoom: 16,
      googleMapsUrl:
        "https://www.google.com/maps/place/VELA,+Dorchester+Collection,+Dubai/@25.1892271,55.2877172,18z/data=!4m10!1m2!2m1!1svela+dorchester+omniyat!3m6!1s0x8b3e7871c494d5c3:0xfcf3cd637b4af9cc!8m2!3d25.1903477!4d55.2891717!15sChd2ZWxhIGRvcmNoZXN0ZXIgb21uaXlhdJIBEmFwYXJ0bWVudF9idWlsZGluZ-ABAA!16s%2Fg%2F11y3kctxry",
      proximityFeatures: [
        { icon: "📍", text: "قناة دبي — واجهة مائية في قلب دبي" },
        { icon: "🏙️", text: "دقائق إلى وسط مدينة دبي وDIFC" },
        { icon: "🚗", text: "سهولة الوصول لأهم الطرق والوجهات" },
      ],
    },

    cta: {
      title: "مهتم بفيلا؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي والأسعار وروابط ملفات الكتيّب والفكتشيت ومخططات الطوابق الرسمية لمشروع فيلا من أمنيات بإدارة دورشستر كوليكشن.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default omniyatVelaDorchesterData;
