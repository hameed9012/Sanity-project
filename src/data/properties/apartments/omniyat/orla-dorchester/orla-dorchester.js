// ✅ src/data/properties/apartments/omniyat/orla-dorchester/orla-dorchester.js
// Reference style: Masaar Azalea blueprint (same structure, strong EN/AR paragraphs)
// ✅ Uses ONLY files موجودة فعلاً inside: /omniyat/orla-dorchester
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ 50/50 payment plan
// ✅ Includes 2 PDFs + factsheet + location map + full gallery + 4BR floor plan + video
// ✅ Location lat/lng from your Google Maps pin (exact)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/omniyat/orla-dorchester";

// Safe encoder for Bunny filenames (spaces/case safe)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

/* ===================== PDFs (EXACT filenames) ===================== */
const E_BROCHURE_PDF = cdn("ORLA_Ebrochure_Updated.pdf");
const FACTSHEET_PDF = cdn("ORLA DC Dubai Factsheet.pdf");
const LOCATION_MAP_PNG = cdn("ORLA DC Dubai Location Map.png");

/* ===================== Floor Plans ===================== */
const FP_4BR = cdn("Orla Dorchester 4br floor plans.webp");

/* ===================== Video ===================== */
const HORIZON_VIDEO = cdn("Orla_By_Omniyat_HORIZON_15s_16x9.mp4");

/* ===================== Gallery (ONLY your folder files) ===================== */
const GALLERY = [
  // Branding / core renders
  cdn("ORLA, Dorchester Collection, Dubai 1.jpg"),
  cdn("ORLA, Dorchester Collection, Dubai 2.jpg"),
  cdn("ORLA, Dorchester Collection, Dubai 3.jpg"),

  // Arrival / lobby
  cdn("ORLA - Ground Level Arrival.jpg"),
  cdn("Lobby .JPG"),
  cdn("Lobby 2.JPG"),
  cdn("Lobby 3.JPG"),

  // Beach club
  cdn("Beach Club.JPG"),
  cdn("Beach Club 2.JPG"),
  cdn("ORLA - Beach Club.jpg"),
  cdn("ORLA - Beach Club 2.jpg"),

  // Pools
  cdn("Swimming Pool.JPG"),
  cdn("Swimming Pool 2.JPG"),
  cdn("ORLA - Indoor Swimming Pool.jpg"),

  // Gym / studios
  cdn("ORLA - Gym.jpg"),
  cdn("Cycling Studio.JPG"),
  cdn("Cycling Studio 2.JPG"),
  cdn("Yoga Studio.JPG"),
  cdn("ORLA - Yoga Studio.jpg"),

  // Spa / treatment
  cdn("Spa.JPG"),
  cdn("Spa 2.JPG"),
  cdn("Spa 3.JPG"),
  cdn("Spa 4.JPG"),
  cdn("Spa 5.JPG"),
  cdn("ORLA - SPA 1.jpg"),
  cdn("ORLA - SPA 2.jpg"),
  cdn("ORLA - Treatment Room 1.jpg"),

  // Kids
  cdn("Children’s Club.JPG"),
  cdn("Children’s Club 2.JPG"),
  cdn("Children’s Club 3.JPG"),
  cdn("ORLA - Indoor Kids Play Area.jpg"),

  // Entertainment / lounges
  cdn("Entertainment Lounge.JPG"),
  cdn("ORLA - Entertainment Lobby.jpg"),
  cdn("Sunset Lounge.JPG"),
  cdn("Sunset Lounge 2.JPG"),
  cdn("Sunset Lounge 3.JPG"),
  cdn("Sunset Lounge 4.JPG"),
  cdn("Prefunction Lounge 1.JPG"),
  cdn("ORLA - Pre Function Lounge.jpg"),
  cdn("Function Room 1.JPG"),
  cdn("ORLA - Multipurpose Room.jpg"),

  // Cinema / bowling / cigar
  cdn("Cinema.JPG"),
  cdn("Cinema 2.JPG"),
  cdn("ORLA - Cinema.jpg"),
  cdn("Bowling Alley.JPG"),
  cdn("Bowling Alley 2.JPG"),
  cdn("ORLA - Bowling Alley.jpg"),
  cdn("Cigar Lounge 1.JPG"),
  cdn("ORLA - Cigar Lounge.jpg"),

  // Work / business / salon
  cdn("Co working space .JPG"),
  cdn("Boardroom.JPG"),
  cdn("BMR 2.jpg"),
  cdn("ORLA - Salon.jpg"),
  cdn("ORLA - Salon 2.jpg"),
];

/* ===================== Hero / Intro ===================== */
const HERO_BG = cdn("Orla_By_Omniyat_HORIZON_15s_16x9.mp4");
const INTRO_MAIN = cdn("ORLA - Ground Level Arrival.jpg");

/* ===================== Quick Facts (from your sheet) ===================== */
const STATUS = "Off-Plan";
const COMPLETION = "Q4 2026";
const PAYMENT_PLAN = "50% / 50%";
const STARTING_PRICE = "AED 57,230,250";
const UNIT_LABEL = "4 Bedroom Residence";
const TOTAL_AREA = "7,352 sq.ft";
const LOCATION_LABEL = "Palm Jumeirah";

/* ===================== Google Maps ===================== */
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/ORLA,+Dorchester+Collection,+Dubai/@25.1231958,55.1096115,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f15b9614c5fab:0xefa6f29f998701ac!8m2!3d25.1231958!4d55.1121864!16s%2Fg%2F11jsmvkjd9";

export const omniyatOrlaDorchesterData = {
  /* ============================
   * EN
   * ============================ */
  en: {
    seo: {
      title:
        "ORLA, Dorchester Collection, Dubai by OMNIYAT | 4BR Residence on Palm Jumeirah | Handover Q4 2026 | 50/50 Payment",
      description:
        "ORLA by OMNIYAT, managed by Dorchester Collection, is a prestige waterfront address on Palm Jumeirah. Explore the official eBrochure, factsheet, location map, full image gallery, video, and 4BR floor plans. Starting from AED 57,230,250 with a 50/50 payment plan and handover in Q4 2026.",
      keywords:
        "ORLA Dorchester Collection Dubai, OMNIYAT ORLA, Palm Jumeirah luxury residences, 4 bedroom, 50/50 payment plan, Q4 2026 handover, Dorchester Collection managed",
      canonical: "/properties/apartments/omniyat/orla-dorchester",
    },

    project: {
      name: "ORLA, Dorchester Collection, Dubai",
      developer: "OMNIYAT",
      operator: "Dorchester Collection",
      location: "Palm Jumeirah, Dubai, UAE",
      status: STATUS,
      startingPrice: STARTING_PRICE,
      completionDate: COMPLETION,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Residences",
      units: "4 Bedroom Residence",
      baseUrl: BASE,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "OMNIYAT",
      rating: null,
    },

    intro: {
      title: "A PRIVATE-CLUB LIFESTYLE ON PALM JUMEIRAH",
      paragraphs: [
        "ORLA by OMNIYAT, managed by Dorchester Collection, is crafted for buyers who don’t just want a luxury home—they want a lifestyle that feels curated, private, and unmistakably elite. Positioned on Palm Jumeirah, ORLA brings resort-level calm to a Dubai address that already carries global prestige, combining waterfront energy with a sense of sanctuary.",
        "The experience is defined by hospitality, not just architecture. Dorchester Collection management introduces an elevated standard of service, where wellness, leisure, and daily convenience are designed to feel seamless. This is where amenities aren’t “add-ons”—they are part of a complete living ecosystem that supports the rhythm of a refined life.",
        "From indoor pools and spa environments to lounges, private entertainment spaces, and family-focused facilities, ORLA is intentionally built like a members’ destination. Whether you’re using the residence as a full-time home, a second base in Dubai, or a trophy asset, the project delivers presence, privacy, and long-term positioning in one of the most valuable coastal locations in the region.",
      ],
      brochures: [
        {
          title: "Download eBrochure",
          url: E_BROCHURE_PDF,
          type: "main",
          fileName: "ORLA_Ebrochure_Updated.pdf",
          category: "Overview",
          description: "Official eBrochure (PDF).",
        },
        {
          title: "Download Factsheet",
          url: FACTSHEET_PDF,
          type: "support",
          fileName: "ORLA DC Dubai Factsheet.pdf",
          category: "Overview",
          description: "Official factsheet (PDF).",
        },
        {
          title: "Download Location Map",
          url: LOCATION_MAP_PNG,
          type: "secondary",
          fileName: "ORLA DC Dubai Location Map.png",
          category: "Location",
          description: "Official location map (PNG).",
        },
      ],
      videoUrl: HORIZON_VIDEO,
      imgUrl: INTRO_MAIN,
      imgAlt: "ORLA Dorchester Collection - arrival experience",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 57.23M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "7,352 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q4 2026",
          label: "Handover",
        },
        {
          top: "44%",
          left: "-40px",
          icon: "🧾",
          value: "50/50",
          label: "Payment Plan",
        },
      ],
      highlights: [
        "Managed by Dorchester Collection — service-led luxury living",
        "Palm Jumeirah waterfront positioning",
        "Private-club style amenities: spa, pools, lounges, entertainment",
        "Trophy-grade asset profile with long-term prestige",
      ],
    },

    gallery: {
      title: "ORLA Lifestyle & Amenities Gallery",
      slides: GALLERY,
      projectTag: "ORLA Dorchester",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "4br",
          title: "4 Bedroom Residence",
          shortLabel: "4 BR",
          bedrooms: 4,
          specs: {
            Unit: UNIT_LABEL,
            "Total Area": TOTAL_AREA,
            "Starting Price": STARTING_PRICE,
            Handover: COMPLETION,
            "Payment Plan": PAYMENT_PLAN,
            Location: LOCATION_LABEL,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: E_BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Beach Club Lifestyle", icon: "🏖️", color: "#d7b46a" },
        { label: "Indoor Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Spa & Treatment Suites", icon: "🧘", color: "#d7b46a" },
        { label: "High-End Gym", icon: "💪", color: "#d7b46a" },
        { label: "Yoga Studio", icon: "🧘‍♀️", color: "#d7b46a" },
        { label: "Cycling Studio", icon: "🚴", color: "#d7b46a" },
        { label: "Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Bowling Alley", icon: "🎳", color: "#d7b46a" },
        { label: "Cigar Lounge", icon: "🥃", color: "#d7b46a" },
        { label: "Co-working Space", icon: "💻", color: "#d7b46a" },
        { label: "Boardroom", icon: "🏢", color: "#d7b46a" },
        { label: "Children’s Club", icon: "🧸", color: "#d7b46a" },
        { label: "Salon", icon: "💇", color: "#d7b46a" },
        { label: "Entertainment Lounge", icon: "🌆", color: "#d7b46a" },
        { label: "Sunset Lounge", icon: "🌅", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Location",
      projectName: "ORLA, Dorchester Collection, Dubai",
      address: "Palm Jumeirah, Dubai, UAE",
      lat: 25.1231958,
      lng: 55.1121864,
      zoom: 16,
      googleMapsUrl: GOOGLE_MAPS_URL,
      proximityFeatures: [
        {
          icon: "📍",
          text: "Palm Jumeirah — Dubai’s most prestigious island address.",
        },
        {
          icon: "🏖️",
          text: "Waterfront living with premium beach lifestyle access.",
        },
        {
          icon: "🚗",
          text: "Quick connectivity to Dubai Marina, DIFC, and Downtown.",
        },
      ],
    },

    cta: {
      title: "Interested in ORLA?",
      description:
        "Share your details to receive current availability, private unit options, and the official ORLA eBrochure, factsheet, location map, and floor plan files.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download eBrochure", action: "download-brochure" },
      ],
    },
  },

  /* ============================
   * AR
   * ============================ */
  ar: {
    seo: {
      title:
        "أورلا، دورشستر كولكشن دبي من أمنيات | 4 غرف على نخلة جميرا | التسليم Q4 2026 | خطة دفع 50/50",
      description:
        "أورلا من أمنيات بإدارة دورشستر كولكشن هو عنوان واجهة بحرية فائق الفخامة على نخلة جميرا. استعرض الكتيّب الإلكتروني والفكتشيت وخريطة الموقع ومعرض الصور الكامل والفيديو ومخطط 4 غرف. يبدأ السعر من 57,230,250 درهم مع خطة دفع 50/50 وتسليم Q4 2026.",
      keywords:
        "أورلا دورشستر كولكشن دبي, أمنيات أورلا, نخلة جميرا شقق فاخرة, 4 غرف, خطة دفع 50/50, تسليم Q4 2026, إدارة دورشستر كولكشن",
      canonical: "/properties/apartments/omniyat/orla-dorchester",
    },

    project: {
      name: "أورلا، دورشستر كولكشن دبي",
      developer: "أمنيات",
      operator: "دورشستر كولكشن",
      location: "نخلة جميرا، دبي، الإمارات",
      status: "على الخريطة",
      startingPrice: "57,230,250 درهم",
      completionDate: "Q4 2026",
      paymentPlan: "50% / 50%",
      type: "وحدات فاخرة",
      units: "4 غرف نوم",
      baseUrl: BASE,
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "أمنيات",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة بنادي خاص على نخلة جميرا",
      paragraphs: [
        "أورلا من أمنيات بإدارة دورشستر كولكشن صُمّم لمن لا يبحث عن منزل فخم فقط—بل عن أسلوب حياة مُنسّق بعناية، خصوصية عالية، وهيبة واضحة. موقعه على نخلة جميرا يمنحك هدوء الواجهة البحرية داخل عنوان عالمي يحمل قيمة طويلة الأمد، حيث تلتقي رفاهية المنتجعات مع شعور “الملاذ الخاص”.",
        "التجربة هنا قائمة على الضيافة قبل أي شيء. إدارة دورشستر كولكشن ترفع معيار الخدمة لتصبح العافية والراحة والرفاهية جزءًا طبيعيًا من يومك. المرافق ليست إضافات، بل منظومة متكاملة لدعم إيقاع حياة راقٍ بكل تفاصيله.",
        "من المسابح الداخلية وبيئات السبا، إلى الصالات الترفيهية والمساحات الخاصة والعائلية، تم تصميم أورلا وكأنه وجهة للأعضاء. سواء كان السكن الرئيسي، أو قاعدة ثانية في دبي، أو أصل “تروفي” نادر—فالمشروع يقدّم حضورًا وخصوصية وتموضعًا استثماريًا قويًا في واحدة من أهم واجهات المنطقة الساحلية.",
        "ومع خطة دفع 50/50 وتسليم متوقع في Q4 2026، يناسب أورلا المشترين الذين يخططون لعنوان إرث على البحر—حيث تلتقي العلامة، والإدارة، والموقع في منتج يصعب تكراره.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب الإلكتروني",
          url: E_BROCHURE_PDF,
          type: "main",
          fileName: "ORLA_Ebrochure_Updated.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الإلكتروني الرسمي (PDF).",
        },
        {
          title: "تحميل الفكتشيت",
          url: FACTSHEET_PDF,
          type: "support",
          fileName: "ORLA DC Dubai Factsheet.pdf",
          category: "نظرة عامة",
          description: "الملف التعريفي الرسمي (PDF).",
        },
        {
          title: "تحميل خريطة الموقع",
          url: LOCATION_MAP_PNG,
          type: "secondary",
          fileName: "ORLA DC Dubai Location Map.png",
          category: "الموقع",
          description: "خريطة موقع رسمية (PNG).",
        },
      ],
      videoUrl: HORIZON_VIDEO,
      imgUrl: INTRO_MAIN,
      imgAlt: "أورلا - تجربة الوصول",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "57.23M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "7,352 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q4 2026",
          label: "موعد التسليم",
        },
        {
          top: "44%",
          left: "-40px",
          icon: "🧾",
          value: "50/50",
          label: "خطة الدفع",
        },
      ],
      highlights: [
        "إدارة دورشستر كولكشن — فخامة قائمة على الخدمة",
        "موقع مميز على نخلة جميرا",
        "مرافق بطابع نادي خاص: سبا، مسابح، صالات، ترفيه",
        "أصل “تروفي” بقيمة طويلة الأمد",
      ],
    },

    gallery: {
      title: "معرض أورلا (أسلوب الحياة والمرافق)",
      slides: GALLERY,
      projectTag: "ORLA Dorchester",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "4br",
          title: "وحدة 4 غرف نوم",
          shortLabel: "4 غرف",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "4 غرف نوم",
            "إجمالي المساحة": "7,352 قدم²",
            "السعر الابتدائي": "57,230,250 درهم",
            "موعد التسليم": "Q4 2026",
            "خطة الدفع": "50% / 50%",
            الموقع: "نخلة جميرا",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: E_BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "نادي شاطئي", icon: "🏖️", color: "#d7b46a" },
        { label: "مسبح داخلي", icon: "🏊", color: "#d7b46a" },
        { label: "سبا وغرف علاج", icon: "🧘", color: "#d7b46a" },
        { label: "نادي رياضي فاخر", icon: "💪", color: "#d7b46a" },
        { label: "استوديو يوغا", icon: "🧘‍♀️", color: "#d7b46a" },
        { label: "استوديو دراجات", icon: "🚴", color: "#d7b46a" },
        { label: "سينما", icon: "🎬", color: "#d7b46a" },
        { label: "بولينج", icon: "🎳", color: "#d7b46a" },
        { label: "صالة سيجار", icon: "🥃", color: "#d7b46a" },
        { label: "مساحة عمل مشتركة", icon: "💻", color: "#d7b46a" },
        { label: "قاعة اجتماعات", icon: "🏢", color: "#d7b46a" },
        { label: "نادي أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "صالون", icon: "💇", color: "#d7b46a" },
        { label: "صالة ترفيه", icon: "🌆", color: "#d7b46a" },
        { label: "صالة الغروب", icon: "🌅", color: "#d7b46a" },
      ],
    },

    location: {
      title: "الموقع",
      projectName: "أورلا، دورشستر كولكشن دبي",
      address: "نخلة جميرا، دبي، الإمارات العربية المتحدة",
      lat: 25.1231958,
      lng: 55.1121864,
      zoom: 16,
      googleMapsUrl: GOOGLE_MAPS_URL,
      proximityFeatures: [
        {
          icon: "📍",
          text: "نخلة جميرا — العنوان الأرقى على الواجهة البحرية في دبي.",
        },
        { icon: "🏖️", text: "نمط حياة شاطئي مع أجواء منتجع وخصوصية عالية." },
        { icon: "🚗", text: "سهولة الوصول إلى المارينا وDIFC ووسط المدينة." },
      ],
    },

    cta: {
      title: "مهتم بأورلا؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات الخاصة وروابط الكتيّب الإلكتروني والفكتشيت وخريطة الموقع ومخطط 4 غرف الرسمي.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default omniyatOrlaDorchesterData;
