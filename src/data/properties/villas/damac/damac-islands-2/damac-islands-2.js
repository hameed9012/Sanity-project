// src/data/properties/villasdamac/damac-islands-2.js
// ✅ Same constants + encodeURI cdn() + BASE pattern
// ✅ Payment plan spreaded (headline + EN/AR string + milestones)
// ✅ Injects payment plan into EVERY floorPlans specs (EN + AR)
// ✅ Converts ALL Bunny links to cdn() (no hardcoded messy URLs)
// ✅ Keeps your exact content/structure from the original file

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

// Folder in Bunny based on your URLs: https://.../damac-island-2/...
const PROJECT_PATH = "damac-island-2";

/** Safe with spaces, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Images (spaces safe)
// ========================
const HERO_BG_IMG = cdn("WhatsApp Image 2025-11-19 at 13.26.50.jpeg");
const INTRO_IMG = cdn("WhatsApp Image 2025-11-19 at 13.26.52.jpeg");

// Gallery (11 slides)
const GALLERY_SLIDES = [
  cdn("WhatsApp Image 2025-11-19 at 13.26.50 (1).jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.51.jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.52.jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.54.jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.55 (1).jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.55.jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.56 (1).jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.56 (2).jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.56.jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.57 (1).jpeg"),
  cdn("WhatsApp Image 2025-11-19 at 13.26.57.jpeg"),
];

// ========================
// Floorplan PNGs (spaces safe)
// ========================
const FP_4BR_TH = cdn("Damac islands 4br TownHowns floor paln.png");
const FP_5BR_TH = cdn("Dmac Islands 5br Townhouses floor plan.png");
const FP_5BR_TWIN = cdn("3.png");
const FP_6BR_VILLA = cdn("Damac islands 6br villa floor plan.png");

// ========================
// PDFs (spaces safe)
// ========================
const BROCHURE_PDF = cdn("DAMAC ISLANDS2.pdf");

// ========================
// Payment plan (spreaded)
// ========================
const PAYMENT_PLAN_HEADLINE = "20% / 55% / 25%";

const PAYMENT_PLAN_EN =
  "On booking 20% / During construction 55% (49 months installments) / Upon completion & handover 25% (Q2 2030)";
const PAYMENT_PLAN_AR =
  "عند الحجز 20% / أثناء الإنشاء 55% (أقساط لمدة 49 شهراً) / عند الإنجاز والتسليم 25% (30 يونيو 2030)";

export const damacIslands2Data = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "DAMAC Islands 2 | 4–6 Bedroom Townhouses & Villas in Dubailand, Dubai | DAMAC",
      description:
        "Waterfront master community in Dubailand, Dubai offering 4 & 5 bedroom townhouses, 5 bedroom twin villas and 6 bedroom luxury villas around a crystal lagoon, climate dome and eco-themed experiences.",
      keywords:
        "DAMAC Islands 2, Dubailand villas, Dubai villas, Dubai townhouses, 4 bedroom townhouse, 5 bedroom townhouse, 5 bedroom twin villa, 6 bedroom villa, lagoon community",
      canonical: "/properties/villa/sdamac/damac-islands-2",
    },

    project: {
      name: "DAMAC Islands 2",
      developer: "DAMAC Properties",
      location: "Dubailand, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,750,000",
      completionDate: "Q2 2030",
      type: "Waterfront Townhouses & Villas",
      units: "4–6 Bedroom Townhouses & Villas",

      // ✅ Spreaded payment plan summary
      paymentPlanSummary: PAYMENT_PLAN_HEADLINE,
      paymentPlan: PAYMENT_PLAN_EN,
    },

    hero: {
      backgroundUrl: HERO_BG_IMG,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: 4.7,
    },

    intro: {
      title: "PARADISE HAS A SEQUEL",
      paragraphs: [
        "After the sell-out success of DAMAC Islands, the vision continues with DAMAC Islands 2 – an elevated island-inspired lifestyle in Dubailand, Dubai. Reimagined as a seamless continuation of the master community, it introduces new spaces and experiences shaped by tropical living.",
        "Wake up to turquoise water, lush landscapes and a community designed around wellness and nature-based eco living. From the Whispering Waterfall and Opal Yoga Deck to the floating gardens, solar park and climate dome, every day feels like a gentle escape just minutes away from the city.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📘",
          color: "#0c8fa9",
          size: "20.7 MB",
          category: "Master Brochure",
          fileName: "DAMAC_ISLANDS2.pdf",
          description:
            "Full brochure with masterplan, experiences, floor plans and payment plan.",
        },
      ],
      imgUrl: INTRO_IMG,
      imgAlt:
        "DAMAC Islands 2 crystal lagoon with villas and lush green waterfront promenades",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "Island Living",
          label: "Waterfront Community",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🛏️",
          value: "4–6 BR",
          label: "Townhouses & Villas",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🕊️",
          value: "Eco Living",
          label: "Nature & Wellness",
        },
      ],
    },

    gallery: {
      title: "A Visual Journey Through DAMAC Islands 2",
      slides: GALLERY_SLIDES,
      projectTag: "DAMAC Islands 2",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br-townhouse",
          title: "4 Bedroom Townhouse",
          bedrooms: 4,
          specs: {
            Unit: "4 BEDROOM TOWNHOUSE",
            "Total Range": "2,185.50 SQ.FT.",
            "Starting Price": "AED 2,750,000",
            Handover: "Q2 2030",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_4BR_TH],
        },
        {
          id: "5br-townhouse",
          title: "5 Bedroom Townhouse",
          bedrooms: 5,
          specs: {
            Unit: "5 BEDROOM TOWNHOUSE",
            "Total Range": "2,829.29 SQ.FT.",
            "Starting Price": "AED 3,670,000",
            Handover: "Q2 2030",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_5BR_TH],
        },
        {
          id: "5br-twin-villa",
          title: "5 Bedroom Twin Villa",
          bedrooms: 5,
          specs: {
            Unit: "5 BEDROOM TWIN VILLA",
            "Total Range": "3,492.24 SQ.FT.",
            "Starting Price": "AED 5,000,000",
            Handover: "Q2 2030",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_5BR_TWIN],
        },
        {
          id: "6br-villa",
          title: "6 Bedroom Villa",
          bedrooms: 6,
          specs: {
            Unit: "6 BEDROOM VILLA",
            "Total Range": "6,276.33 SQ.FT.",
            "Starting Price": "AED 9,510,000",
            Handover: "Q2 2030",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_6BR_VILLA],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    pricing: {
      title: "Pricing & Availability",
      units: [
        {
          type: "4 BR Townhouse (Mid)",
          totalAreaSqm: 203.04,
          totalAreaSqft: 2185.5,
          startingPrice: "AED 2,750,000",
          handover: "Q2 2030",
          availability: "Limited Release",
        },
        {
          type: "5 BR Townhouse (Mid)",
          totalAreaSqm: 262.85,
          totalAreaSqft: 2829.29,
          startingPrice: "AED 3,670,000",
          handover: "Q2 2030",
          availability: "Limited Release",
        },
        {
          type: "5 BR Twin Villa",
          totalAreaSqm: 324.44,
          totalAreaSqft: 3492.24,
          startingPrice: "AED 5,000,000",
          handover: "Q2 2030",
          availability: "Limited Release",
        },
        {
          type: "6 BR Villa",
          totalAreaSqm: 583.09,
          totalAreaSqft: 6276.33,
          startingPrice: "AED 9,510,000",
          handover: "Q2 2030",
          availability: "Exclusive Collection",
        },
      ],

      // ✅ Spreaded payment plan block (clean + consistent)
      paymentPlan: {
        title: `${PAYMENT_PLAN_HEADLINE} Payment Plan – 100% Over 49 Months + Handover`,
        headline: PAYMENT_PLAN_HEADLINE,
        summary: PAYMENT_PLAN_EN,
        phases: [
          {
            phase: "Deposit",
            percentage: "20%",
            timing: "Immediate on booking",
            details: "Initial deposit at the time of purchase.",
          },
          {
            phase: "During Construction",
            percentage: "55%",
            timing: "Over 49 months installments",
            details:
              "Monthly installments schedule as per the developer brochure (includes periodic higher installments).",
          },
          {
            phase: "On Completion",
            percentage: "25%",
            timing: "On handover – Q2 2030",
            details: "Final payment on completion and handover.",
          },
        ],
        notes: [
          "4% Dubai Land Department (DLD) fee is payable in addition to the purchase payments.",
        ],
      },
    },

    amenities: {
      title: "Community Experiences & Amenities",
      amenities: [
        { label: "Crystal Lagoon & Beaches", icon: "🌊", color: "#d7b46a" },
        { label: "Whispering Waterfall", icon: "💧", color: "#d7b46a" },
        { label: "Opal Yoga Deck", icon: "🧘", color: "#d7b46a" },
        {
          label: "Climate Dome & Botanical Canopy",
          icon: "🌴",
          color: "#d7b46a",
        },
        { label: "Floating Gardens & Eco Trail", icon: "🌿", color: "#d7b46a" },
        {
          label: "Solar Park & Charging Stations",
          icon: "🔋",
          color: "#d7b46a",
        },
        { label: "Observation Decks", icon: "👀", color: "#d7b46a" },
        { label: "Adventure Bridges & Kayaks", icon: "🛶", color: "#d7b46a" },
        { label: "Resort Pools & Cabanas", icon: "🏊", color: "#d7b46a" },
        { label: "Water Slides & Aqua Play", icon: "🎢", color: "#d7b46a" },
        { label: "Kids’ Adventure Park", icon: "👧", color: "#d7b46a" },
        { label: "Hidden Restaurant", icon: "🍽️", color: "#d7b46a" },
        { label: "Beach Club & Lounge", icon: "🍹", color: "#d7b46a" },
        { label: "Wellness Spa", icon: "💆", color: "#d7b46a" },
        { label: "Jogging & Cycling Tracks", icon: "🚴", color: "#d7b46a" },
        { label: "Community Plaza & Event Lawn", icon: "🎪", color: "#d7b46a" },
        { label: "Retail & F&B Promenade", icon: "🛍️", color: "#d7b46a" },
        { label: "Co-working Pods", icon: "👨‍💻", color: "#d7b46a" },
        { label: "24/7 Security", icon: "🔒", color: "#d7b46a" },
        { label: "Gated Community", icon: "🏘️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC Islands 2",
      address: "Dubailand, Dubai, UAE",
      lat: 25.0266875,
      lng: 55.3099375,
      zoom: 14,
      proximityFeatures: [
        { icon: "⏱️", text: "Approx 20–25 min to Sports City & Motor City" },
        {
          icon: "✈️",
          text: "Approx 25–35 min to Dubai Intl & Al Maktoum Airports",
        },
        { icon: "🏙️", text: "Easy access to Dubai Marina & Downtown" },
        { icon: "🛣️", text: "Connected via major Dubai highways" },
      ],
    },

    nearbyAttractions: {
      title: "Close to Everything, Far From Ordinary",
      attractions: [
        {
          name: "Dubai Sports City & Motor City",
          distance: "Approx 15–20 min",
          time: "By car",
          icon: "🏟️",
        },
        {
          name: "DAMAC Hills",
          distance: "Nearby",
          time: "Short drive",
          icon: "🏌️",
        },
        {
          name: "Dubai Investment Park",
          distance: "Approx 20–25 min",
          time: "By car",
          icon: "🏢",
        },
        {
          name: "EXPO City Dubai",
          distance: "Approx 20–25 min",
          time: "By car",
          icon: "🌍",
        },
        {
          name: "Burj Al Arab & Jumeirah",
          distance: "Approx 25–30 min",
          time: "By car",
          icon: "🏖️",
        },
      ],
    },

    developer: {
      title: "About DAMAC Properties",
      name: "DAMAC Properties",
      description:
        "DAMAC Properties is a leading luxury real estate developer in the Middle East, known for creating landmark communities and resort-style living experiences that blend architectural innovation, lifestyle amenities and long-term investment value.",
      projects: [
        "DAMAC Islands",
        "DAMAC Hills",
        "DAMAC Hills 2",
        "AYKON City",
        "Cavalli-branded residences",
      ],
      logo: "https://luxury-real-estate-media.b-cdn.net/developers/damac-logo.png",
      established: 2002,
    },

    cta: {
      title: "Interested in DAMAC Islands 2?",
      description:
        "Request full pricing, inventory and a detailed payment plan, or book a private presentation of the masterplan and unit options.",
      buttons: [
        { text: "Request Details", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title:
        "داماك آيلاندز 2 | تاون هاوس وفلل 4–6 غرف نوم في دبي لاند، دبي | داماك",
      description:
        "مجتمع سكني على الواجهة المائية في دبي لاند – دبي يقدّم تاون هاوس 4 و5 غرف نوم، فيلات توأم 5 غرف، وفيلات فاخرة 6 غرف حول لاجون كريستالي وقبة مناخية وتجارب حياة مستوحاة من الطبيعة.",
      keywords:
        "داماك آيلاندز 2، دبي لاند، تاون هاوس دبي، فلل دبي، فلل على البحيرات، تاون هاوس 4 غرف، تاون هاوس 5 غرف، فيلا 6 غرف، DAMAC Islands 2",
      canonical: "/properties/villa/sdamac/damac-islands-2",
    },

    project: {
      name: "DAMAC Islands 2",
      developer: "داماك العقارية",
      location: "دبي لاند، دبي، الإمارات العربية المتحدة",
      status: "قيد الإنشاء",
      startingPrice: "2,750,000 درهم إماراتي",
      completionDate: "30 يونيو 2030",
      type: "تاون هاوس وفلل على الواجهة المائية",
      units: "تاون هاوس وفلل 4 إلى 6 غرف نوم",

      // ✅ Spreaded payment plan summary
      paymentPlanSummary: PAYMENT_PLAN_HEADLINE,
      paymentPlan: PAYMENT_PLAN_AR,
    },

    hero: {
      backgroundUrl: HERO_BG_IMG,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: 4.7,
    },

    intro: {
      title: "للجنة فَصْلٌ ثانٍ",
      paragraphs: [
        "بعد النجاح الكبير لمشروع «DAMAC Islands»، يأتي «DAMAC Islands 2» ليقدّم امتداداً جديداً لأسلوب الحياة الجُزُري في دبي لاند – دبي؛ مجموعة من تاون هاوس 4 و5 غرف نوم، فيلات توأم 5 غرف، وفيلات فاخرة 6 غرف تطل جميعها على لاجون كريستالي ومساحات خضراء وتجارب حياة بيئية مبتكرة.",
        "استيقظ على مشهد الماء الفيروزي والمساحات الخضراء والتجارب المصمّمة للرفاهية؛ من شلال «Whispering Waterfall» وتراس اليوغا «Opal Yoga Deck» إلى الحدائق العائمة، والحديقة الشمسية، والقبة المناخية. هنا تعيش إحساس المنتجع يومياً وعلى بُعد دقائق فقط من قلب دبي.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📘",
          color: "#0c8fa9",
          size: "20.7 MB",
          category: "كتيّب المشروع",
          fileName: "DAMAC_ISLANDS2.pdf",
          description:
            "الكتيّب الكامل للمخطط الرئيسي، التجارب، المخططات الطابقية وخطط الدفع.",
        },
      ],
      imgUrl: INTRO_IMG,
      imgAlt:
        "إطلالة على اللاجون الكريستالي والفلل المحيطة في مشروع داماك آيلاندز 2 في دبي",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "حياة جُزُرية",
          label: "مجتمع على الواجهة المائية",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🛏️",
          value: "4–6 غرف",
          label: "تاون هاوس وفلل",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🕊️",
          value: "Eco Living",
          label: "أسلوب حياة مستدام",
        },
      ],
    },

    gallery: {
      title: "جولة بصرية داخل DAMAC Islands 2",
      slides: GALLERY_SLIDES,
      projectTag: "DAMAC Islands 2",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br-townhouse",
          title: "تاون هاوس 4 غرف نوم",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "تاون هاوس 4 غرف نوم",
            "نطاق المساحة الإجمالية": "2,185.50 قدم²",
            "السعر الابتدائي": "2,750,000 درهم",
            "موعد التسليم": "30 يونيو 2030",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_4BR_TH],
        },
        {
          id: "5br-townhouse",
          title: "تاون هاوس 5 غرف نوم",
          bedrooms: 5,
          specs: {
            "نوع الوحدة": "تاون هاوس 5 غرف نوم",
            "نطاق المساحة الإجمالية": "2,829.29 قدم²",
            "السعر الابتدائي": "3,670,000 درهم",
            "موعد التسليم": "30 يونيو 2030",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_5BR_TH],
        },
        {
          id: "5br-twin-villa",
          title: "فيلا توأم 5 غرف نوم",
          bedrooms: 5,
          specs: {
            "نوع الوحدة": "فيلا توأم 5 غرف نوم",
            "نطاق المساحة الإجمالية": "3,492.24 قدم²",
            "السعر الابتدائي": "5,000,000 درهم",
            "موعد التسليم": "30 يونيو 2030",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_5BR_TWIN],
        },
        {
          id: "6br-villa",
          title: "فيلا 6 غرف نوم",
          bedrooms: 6,
          specs: {
            "نوع الوحدة": "فيلا 6 غرف نوم",
            "نطاق المساحة الإجمالية": "6,276.33 قدم²",
            "السعر الابتدائي": "9,510,000 درهم",
            "موعد التسليم": "30 يونيو 2030",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_6BR_VILLA],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    pricing: {
      title: "الأسعار والتوافر",
      units: [
        {
          type: "تاون هاوس 4 غرف (وسط)",
          totalAreaSqm: 203.04,
          totalAreaSqft: 2185.5,
          startingPrice: "2,750,000 درهم إماراتي",
          handover: "30 يونيو 2030",
          availability: "طرح محدود",
        },
        {
          type: "تاون هاوس 5 غرف (وسط)",
          totalAreaSqm: 262.85,
          totalAreaSqft: 2829.29,
          startingPrice: "3,670,000 درهم إماراتي",
          handover: "30 يونيو 2030",
          availability: "طرح محدود",
        },
        {
          type: "فيلا توأم 5 غرف",
          totalAreaSqm: 324.44,
          totalAreaSqft: 3492.24,
          startingPrice: "5,000,000 درهم إماراتي",
          handover: "30 يونيو 2030",
          availability: "وحدات محدودة",
        },
        {
          type: "فيلا 6 غرف نوم",
          totalAreaSqm: 583.09,
          totalAreaSqft: 6276.33,
          startingPrice: "9,510,000 درهم إماراتي",
          handover: "30 يونيو 2030",
          availability: "مجموعة حصرية",
        },
      ],

      paymentPlan: {
        title: `خطة دفع ${PAYMENT_PLAN_HEADLINE} موزّعة حتى التسليم`,
        headline: PAYMENT_PLAN_HEADLINE,
        summary: PAYMENT_PLAN_AR,
        phases: [
          {
            phase: "دفعة أولى",
            percentage: "20٪",
            timing: "عند الحجز",
            details: "تُدفع الدفعة الأولى عند الشراء/الحجز.",
          },
          {
            phase: "أثناء الإنشاء",
            percentage: "55٪",
            timing: "على أقساط لمدة 49 شهراً",
            details:
              "الجدول التفصيلي للأقساط وفق كتيّب المطوّر (يتضمن أشهر بأقساط أعلى حسب الجدول).",
          },
          {
            phase: "عند التسليم",
            percentage: "25٪",
            timing: "30 يونيو 2030",
            details: "الدفعة النهائية عند الإنجاز والتسليم.",
          },
        ],
        notes: [
          "رسوم دائرة الأراضي والأملاك في دبي (DLD) بنسبة 4٪ تُدفع إضافةً إلى دفعات الشراء.",
        ],
      },
    },

    amenities: {
      title: "مرافق وتجارب الحياة في المجتمع",
      amenities: [
        { label: "لاگون كريستالي وشواطئ رملية", icon: "🌊", color: "#d7b46a" },
        { label: "شلال Whispering Waterfall", icon: "💧", color: "#d7b46a" },
        { label: "تراس Opal لليوغا", icon: "🧘", color: "#d7b46a" },
        { label: "قبة مناخية وحدائق داخلية", icon: "🌴", color: "#d7b46a" },
        { label: "حدائق عائمة ومسار Eco Trail", icon: "🌿", color: "#d7b46a" },
        { label: "حديقة شمسية ومحطات شحن", icon: "🔋", color: "#d7b46a" },
        { label: "منصات مراقبة وإطلالات مفتوحة", icon: "👀", color: "#d7b46a" },
        { label: "جسور معلّقة وقوارب كاياك", icon: "🛶", color: "#d7b46a" },
        { label: "مسابح ومنتجع مائي", icon: "🏊", color: "#d7b46a" },
        {
          label: "زحاليق مائية ومنطقة لعب مائية",
          icon: "🎢",
          color: "#d7b46a",
        },
        { label: "حديقة مغامرات للأطفال", icon: "👧", color: "#d7b46a" },
        { label: "مطعم مخفي وتجارب طعام", icon: "🍽️", color: "#d7b46a" },
        { label: "نادي شاطئي ولاونج", icon: "🍹", color: "#d7b46a" },
        { label: "سبا ومرافق عافية", icon: "💆", color: "#d7b46a" },
        { label: "مسارات للجري وركوب الدراجات", icon: "🚴", color: "#d7b46a" },
        { label: "ساحة فعاليات ومساحات خضراء", icon: "🎪", color: "#d7b46a" },
        { label: "واجهة تجارية ومطاعم ومقاهٍ", icon: "🛍️", color: "#d7b46a" },
        { label: "مساحات عمل مشتركة", icon: "👨‍💻", color: "#d7b46a" },
        { label: "أمن على مدار الساعة", icon: "🔒", color: "#d7b46a" },
        { label: "مجتمع مسوّر", icon: "🏘️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "داماك آيلاندز 2",
      address: "دبي لاند، دبي، الإمارات العربية المتحدة",
      lat: 25.0266875,
      lng: 55.3099375,
      zoom: 14,
      proximityFeatures: [
        { icon: "⏱️", text: "20–25 دقيقة إلى سبورتس سيتي وموتور سيتي" },
        { icon: "✈️", text: "25–35 دقيقة إلى مطار دبي الدولي وآل مكتوم" },
        { icon: "🏙️", text: "وصول سهل إلى دبي مارينا ووسط مدينة دبي" },
        { icon: "🛣️", text: "ارتباط مباشر بالطرق السريعة الرئيسية في دبي" },
      ],
    },

    nearbyAttractions: {
      title: "قربك من أهم معالم دبي",
      attractions: [
        {
          name: "دبي سبورتس سيتي وموتور سيتي",
          distance: "حوالي 15–20 دقيقة",
          time: "بالسيارة",
          icon: "🏟️",
        },
        {
          name: "داماك هيلز",
          distance: "قريب",
          time: "بالسيارة خلال دقائق",
          icon: "🏌️",
        },
        {
          name: "دبي إنفستمنت بارك",
          distance: "حوالي 20–25 دقيقة",
          time: "بالسيارة",
          icon: "🏢",
        },
        {
          name: "إكسبو سيتي دبي",
          distance: "حوالي 20–25 دقيقة",
          time: "بالسيارة",
          icon: "🌍",
        },
        {
          name: "برج العرب ومنطقة جميرا",
          distance: "حوالي 25–30 دقيقة",
          time: "بالسيارة",
          icon: "🏖️",
        },
      ],
    },

    developer: {
      title: "عن داماك العقارية",
      name: "داماك العقارية",
      description:
        "تُعد داماك العقارية من أبرز المطورين العقاريين في منطقة الشرق الأوسط في مجال المشاريع الفاخرة؛ حيث تقدّم مجتمعات سكنية متكاملة بتصاميم معمارية مميّزة وتجارب حياة منتجعية، مع تركيز على القيمة الاستثمارية طويلة الأمد.",
      projects: [
        "DAMAC Islands",
        "DAMAC Hills",
        "DAMAC Hills 2",
        "AYKON City",
        "مشاريع بعلامة كافالي",
      ],
      logo: "https://luxury-real-estate-media.b-cdn.net/developers/damac-logo.png",
      established: 2002,
    },

    cta: {
      title: "جاهز لاكتشاف DAMAC Islands 2؟",
      description:
        "تواصل معنا للحصول على قائمة الوحدات المتاحة، الأسعار المحدثة، وخطة الدفع التفصيلية أو لحجز زيارة تعريفية خاصة بالمشروع.",
      buttons: [
        { text: "طلب مزيد من التفاصيل", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default damacIslands2Data;
