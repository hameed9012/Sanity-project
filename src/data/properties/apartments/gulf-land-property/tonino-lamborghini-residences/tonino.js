// src/data/properties/apartments/gulf-land-property/tonino-lamborghini-residences.js
// ✅ Same "constants + cdn() + BASE" pattern (spaces-safe) like your Butterfly example
// ✅ EN + AR
// ✅ Keeps your existing structure/fields 100% (SEO, project, hero, intro, gallery, floorPlans, amenities, paymentPlan, location, cta)

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "gulf-land-property/tonino-lamborghini-residences";

/** Safe with spaces + keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Floorplan PNGs (spaces safe)
// ========================
const ONEBR_FLOORPLAN_IMG = cdn("1br tonino lamborghini floor plan.png");
const TWOBR_FLOORPLAN_IMG = cdn("2br tonino lamborghini floor plan.png");
const THREEBR_FLOORPLAN_IMG = cdn("3br tonino lamborghini floor plan.png");

// ========================
// Key PDFs (spaces safe)
// ========================
const SALES_PRESENTATION_PDF = cdn(
  "Tonino Lamborghini Sales Presentation Structure - Updated Oct25 (1).pdf"
);
const UNIT_LAYOUTS_PDF = cdn("Unit Layouts - Updated (29072025).pdf");

// ========================
// Payment plan (spreaded)
// ========================
const PAYMENT_PLAN_HEADLINE = "20% / 50% / 30%";

const PAYMENT_PLAN_EN =
  "On booking 20% / During construction 50% / Upon handover 30%";
const PAYMENT_PLAN_AR = "عند الحجز 20% / أثناء الإنشاء 50% / عند التسليم 30%";

export const toninoLamborghiniResidencesData = {
  // ========================
  // ENGLISH
  // ========================
  en: {
    seo: {
      title:
        "Tonino Lamborghini Residences | 1–4 Bedroom Branded Apartments in Nad Al Sheba (Meydan), Dubai",
      description:
        "Tonino Lamborghini Residences by Gulf Land Property Developers is a luxury residential community in Nad Al Sheba (Meydan), Dubai, featuring designer apartments with smart-living infrastructure and a wide set of lifestyle amenities.",
      keywords:
        "Tonino Lamborghini Residences, Gulf Land Property Developers, Nad Al Sheba, Meydan, Dubai apartments, 1 bedroom, 2 bedroom, 3 bedroom, 4 bedroom, off plan dubai",
      canonical:
        "/properties/apartments/gulf-land-property/tonino-lamborghini-residences",
    },

    project: {
      name: "Tonino Lamborghini Residences",
      developer: "Gulf Land Property Developers",

      // Marketing label (even if portal says “Branded Project? No”)
      brandedBy: "Tonino Lamborghini",
      brandedProject: "No",

      location: "Meydan (Nad Al Sheba 1), Dubai",
      status: "Off-Plan",

      // ✅ Portal
      salestatus: "Off-Plan",
      constructionStatus: "Under construction",
      launchWindow: "2 Oct 2017 – Q1 2027",
      completionDate: "Q1 2027",
      readinessProgress: "40.26%",
      floorsFormula: "G + P + 11 floors, G + P + 6 floors",
      furnishing: "No",
      serviceCharge: "19–20 AED/sqft",
      unitsInSale: 65,

      type: "Apartments",
      units: "1–4 Bedroom Apartments",
      totalUnits: 541,
      unitMix: [
        { label: "1 Bedroom", count: 296 },
        { label: "2 Bedroom", count: 141 },
        { label: "3 Bedroom", count: 95 },
        { label: "4 Bedroom", count: 9 },
      ],

      startingPrice: "From AED 2,232,921",
      priceRangeNote:
        "Prices vary by view, layout, floor and availability. Confirm final SPA pricing.",

      // Keep both: human-readable + breakdown
      paymentPlan: PAYMENT_PLAN_EN,
      paymentPlanBreakdown: [
        { stage: "On booking", percent: 20 },
        { stage: "During construction", percent: 50 },
        { stage: "Upon handover", percent: 30 },
      ],
    },

    hero: {
      backgroundUrl: cdn("Facad.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tonino-lamborghini-residences-logo.jpg",
      companyName: "Gulf Land Property Developers",
      rating: 4.7,
      badges: ["Nad Al Sheba (Meydan)", "Smart Living", "Lifestyle Amenities"],
    },

    intro: {
      title: "ARTFUL DESIGN. POWERFUL LIVING. MEYDAN ADDRESS.",
      paragraphs: [
        "Tonino Lamborghini Residences by Gulf Land Property Developers is an exclusive residential enclave in Dubai’s prestigious Nad Al Sheba (Meydan), offering luxury apartments designed with a blend of artful character and everyday functionality.",
        "The community is built on a forward-thinking infrastructure, integrating modern technology to create dynamic living spaces inside and out—supported by lifestyle amenities such as cinema spaces, green landscapes, retail and dining, and family-friendly parks.",
        "Designed with comfort and long-term value in mind, the project positions residents close to key Dubai destinations while delivering a modern lifestyle within a calm, community setting.",
      ],

      finishingAndMaterials:
        "Full modern finishing with high quality materials.",
      kitchenAndAppliances:
        "Fully fitted kitchens; built-in wardrobes as per layout.",
      furnishingNotes: "Furnishing: No.",

      brochures: [
        {
          title: "Sales Presentation (PDF)",
          url: SALES_PRESENTATION_PDF,
          type: "main",
          icon: "📘",
          color: "#1A1A1A",
          size: "—",
          category: "Apartments",
          fileName: "Tonino Lamborghini Sales Presentation.pdf",
          description:
            "Official presentation including overview, unit mix, pricing guidance and payment plan.",
        },
        {
          title: "Unit Layouts (PDF)",
          url: UNIT_LAYOUTS_PDF,
          type: "layouts",
          icon: "📐",
          color: "#d7b46a",
          size: "—",
          category: "Floor Plans",
          fileName: "Tonino Lamborghini Unit Layouts.pdf",
          description:
            "Full set of layouts (typologies may vary by tower/floor).",
        },
      ],

      imgUrl: cdn("Podium & facad view.png"),
      imgAlt:
        "Tonino Lamborghini Residences podium and facade view in Nad Al Sheba (Meydan), Dubai.",

      floatingCards: [
        {
          top: "18%",
          left: "-40px",
          icon: "🏁",
          value: "Meydan",
          label: "Prime District",
        },
        {
          top: "46%",
          right: "-38px",
          icon: "🏗️",
          value: "40.26%",
          label: "Construction Progress",
        },
        {
          bottom: "18%",
          left: "-40px",
          icon: "💳",
          value: "70% / 30%",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "A Visual Symphony",
      projectTag: "Tonino Lamborghini Residences",
      slides: [
        cdn("Facad.jpg"),
        cdn("Zoomed Facad.png"),
        cdn("Corner facad.png"),
        cdn("Podium & facad view.png"),
        cdn("Top Angle View.jpg"),
        cdn("AAA_Project_EXT_01_C02_v6 (3).png"),
        cdn("IMG_3435 (2).PNG"),
        cdn("Top plan.png"),
        cdn("salotto 3 posted.jpg"),
        cdn("salotto scudo 3 posted.jpg"),
        cdn("salotto tv b posted.jpg"),
        cdn("open space 3 posted.jpg"),
        cdn("cucina 2.jpg"),
        cdn("cucina b posted.jpg"),
        cdn("Master bedroom posted.jpg"),
        cdn("Master bedroom 2 posted.jpg"),
        cdn("Master bedroom closet posted.jpg"),
        cdn("Bedroom2 posted.jpg"),
        cdn("bagno master posted.jpg"),
        cdn("common bathroom posted.jpg"),
        cdn("Bathroom small posted.jpg"),
        cdn("Bathroom small posted orange.jpg"),
        cdn("Spa orange posted.jpg"),
        cdn("SpaOrange1.jpg"),
        cdn("terrazza c posted.jpg"),
        cdn("office posted.jpg"),
      ],
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM",
            "Total Range": "860.47 – 1,009.01 SQ.FT.",
            "Starting Price": "AED 2,232,921",
            Handover: "Q1 2027",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [ONEBR_FLOORPLAN_IMG],
          features: [
            "Efficient 1-bedroom layouts",
            "High-quality modern finishing",
            "Balcony layouts available",
          ],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM",
            "Total Range": "1,484.02 – 2,158.70 SQ.FT.",
            "Starting Price": "AED 3,602,000",
            Handover: "Q1 2027",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [TWOBR_FLOORPLAN_IMG],
          features: [
            "Spacious living and dining areas",
            "Ideal for families",
            "Strong rental and resale appeal",
          ],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOM",
            "Total Range": "1,508.13 – 2,261.82 SQ.FT.",
            "Starting Price": "AED 3,484,000",
            Handover: "Q1 2027",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [THREEBR_FLOORPLAN_IMG],
          features: [
            "Large family-scale layouts",
            "Multiple bathrooms",
            "Premium modern interiors",
          ],
        },
      ],
      brochureHref: UNIT_LAYOUTS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "RESTAURANTS & CAFE", icon: "🍽️", color: "#d7b46a" },
        { label: "CINEMA ROOM", icon: "🎬", color: "#d7b46a" },
        { label: "FITNESS CENTER", icon: "💪", color: "#d7b46a" },
        { label: "SHOP & RETAIL", icon: "🛍️", color: "#d7b46a" },
        { label: "CLUBHOUSE", icon: "🏡", color: "#d7b46a" },
        { label: "PADEL COURT", icon: "🎾", color: "#d7b46a" },
        { label: "GAMING ROOM", icon: "🎮", color: "#d7b46a" },
        { label: "JOGGING TRACK", icon: "🏃", color: "#d7b46a" },
        { label: "SWIMMING POOL", icon: "🏊", color: "#d7b46a" },
        { label: "KIDS PLAY AREA", icon: "🛝", color: "#d7b46a" },
        { label: "STEAM & SAUNA", icon: "🧖", color: "#d7b46a" },
        { label: "SUPERMARKET", icon: "🛒", color: "#d7b46a" },
        { label: "GREEN PARK", icon: "🌿", color: "#d7b46a" },
        { label: "INDOOR CYCLING", icon: "🚴", color: "#d7b46a" },
      ],
    },

    paymentPlan: {
      title: "Payment Plan",
      headline: "70% / 30% Payment Plan",
      milestones: [
        { label: "On booking", when: "Booking", percent: 20 },
        { label: "During construction", when: "Construction", percent: 50 },
        { label: "Upon handover", when: "Handover", percent: 30 },
      ],
      note: "Payment split is per portal summary. Confirm SPA schedule for exact installment dates.",
    },

    location: {
      title: "Project Location",
      projectName: "Tonino Lamborghini Residences",
      address: "AE, Dubai, Meydan (Nad Al Sheba 1), Meydan",
      // Keep until you confirm exact pin
      lat: 25.172,
      lng: 55.33,
      zoom: 13,
      proximityFeatures: [
        { icon: "🏙️", text: "Meydan community living near key Dubai hubs" },
        { icon: "🏁", text: "Close to Meydan Racecourse lifestyle zone" },
        { icon: "🌿", text: "Green spaces and park-focused environment" },
      ],
      mapImages: [cdn("IMG_3435 (2).PNG"), cdn("Top plan.png")],
    },

    cta: {
      title: "Ready To Explore Tonino Lamborghini Residences?",
      description:
        "Request available inventory, confirm the latest prices, and receive the official brochure and layouts.",
      buttons: [
        { text: "Schedule a Call", type: "primary", url: "/contact" },
        {
          text: "Download Brochure",
          type: "secondary",
          url: SALES_PRESENTATION_PDF,
        },
      ],
    },
  },

  // ========================
  // ARABIC
  // ========================
  ar: {
    seo: {
      title:
        "Tonino Lamborghini Residences | شقق 1–4 غرف في ند الشبا (ميدان) دبي",
      description:
        "Tonino Lamborghini Residences من تطوير Gulf Land Property Developers في ميدان (ند الشبا 1) دبي، مشروع سكني فاخر بتشطيبات حديثة ومرافق أسلوب حياة متكاملة.",
      keywords:
        "Tonino Lamborghini Residences، ند الشبا، ميدان، دبي، Gulf Land Property Developers، شقق 1 غرفة، شقق غرفتين، شقق 3 غرف، شقق 4 غرف",
      canonical:
        "/properties/apartments/gulf-land-property/tonino-lamborghini-residences",
    },

    project: {
      name: "Tonino Lamborghini Residences",
      developer: "Gulf Land Property Developers",
      brandedBy: "Tonino Lamborghini",
      brandedProject: "لا",

      location: "ميدان (ند الشبا 1)، دبي",
      status: "قيد الإنشاء",
      saleStatus: "متاح للبيع",
      constructionStatus: "قيد الإنشاء",
      launchWindow: "2 أكتوبر 2017 – الربع الأول 2027",
      completionDate: "الربع الأول 2027",
      readinessProgress: "40.26%",
      floorsFormula: "G + P + 11 طابق، G + P + 6 طوابق",
      furnishing: "غير مفروشة",
      serviceCharge: "19–20 درهم/قدم²",
      unitsInSale: 65,

      type: "شقق سكنية",
      units: "شقق 1–4 غرف",
      totalUnits: 541,
      unitMix: [
        { label: "غرفة نوم", count: 296 },
        { label: "غرفتان", count: 141 },
        { label: "3 غرف", count: 95 },
        { label: "4 غرف", count: 9 },
      ],

      startingPrice: "ابتداءً من 2,232,921 درهم",
      priceRangeNote:
        "الأسعار تختلف حسب الإطلالة والتخطيط والطابق والتوفر—يُرجى تأكيد السعر النهائي في SPA.",

      paymentPlan: PAYMENT_PLAN_AR,
      paymentPlanBreakdown: [
        { stage: "عند الحجز", percent: 20 },
        { stage: "أثناء الإنشاء", percent: 50 },
        { stage: "عند التسليم", percent: 30 },
      ],
    },

    hero: {
      backgroundUrl: cdn("Facad.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tonino-lamborghini-residences-logo.jpg",
      companyName: "Gulf Land Property Developers",
      rating: 4.7,
      badges: ["ميدان (ند الشبا 1)", "حياة ذكية", "مرافق متكاملة"],
    },

    intro: {
      title: "تصميم فني… بنية حديثة… أسلوب حياة متكامل",
      paragraphs: [
        "Tonino Lamborghini Residences من تطوير Gulf Land Property Developers هو مجتمع سكني فاخر في ميدان (ند الشبا 1) بدبي، يقدّم شققاً بتفاصيل تصميم تجمع بين الجمال والوظيفة اليومية.",
        "يعتمد المشروع على بنية متطورة تدمج التقنيات الحديثة لتقديم مساحات معيشة ديناميكية داخلية وخارجية، مع مرافق مثل السينما، المساحات الخضراء، وجهات التسوق والطعام، ومناطق مناسبة للعائلات.",
        "يوفّر نمط حياة راقٍ ضمن بيئة مجتمعية هادئة وقريبة من أبرز وجهات دبي.",
      ],

      finishingAndMaterials: "تشطيبات حديثة كاملة بمواد عالية الجودة.",
      kitchenAndAppliances: "مطابخ مجهّزة بالكامل وخزائن مدمجة حسب المخطط.",
      furnishingNotes: "التأثيث: لا.",

      brochures: [
        {
          title: "العرض التقديمي (PDF)",
          url: SALES_PRESENTATION_PDF,
          type: "main",
          icon: "📘",
          color: "#1A1A1A",
          size: "—",
          category: "شقق سكنية",
          fileName: "Tonino Lamborghini Sales Presentation.pdf",
          description:
            "عرض رسمي يتضمن نظرة عامة، أنواع الوحدات، الأسعار الإرشادية وخطة الدفع.",
        },
        {
          title: "مخططات الوحدات (PDF)",
          url: UNIT_LAYOUTS_PDF,
          type: "layouts",
          icon: "📐",
          color: "#d7b46a",
          size: "—",
          category: "المخططات",
          fileName: "Tonino Lamborghini Unit Layouts.pdf",
          description: "مجموعة كاملة من المخططات (قد تختلف حسب البرج والطابق).",
        },
      ],

      imgUrl: cdn("Podium & facad view.png"),
      imgAlt:
        "منظر للبوديوم والواجهة في مشروع Tonino Lamborghini Residences بدبي.",

      floatingCards: [
        {
          top: "18%",
          left: "-40px",
          icon: "🏁",
          value: "ميدان",
          label: "منطقة مميزة",
        },
        {
          top: "46%",
          right: "-38px",
          icon: "🏗️",
          value: "40.26%",
          label: "نسبة الإنجاز",
        },
        {
          bottom: "18%",
          left: "-40px",
          icon: "💳",
          value: "70% / 30%",
          label: "خطة سداد",
        },
      ],
    },

    gallery: {
      title: "لمحات من أسلوب الحياة",
      projectTag: "Tonino Lamborghini Residences",
      slides: [
        cdn("Facad.jpg"),
        cdn("Zoomed Facad.png"),
        cdn("Corner facad.png"),
        cdn("Podium & facad view.png"),
        cdn("Top Angle View.jpg"),
        cdn("AAA_Project_EXT_01_C02_v6 (3).png"),
        cdn("IMG_3435 (2).PNG"),
        cdn("Top plan.png"),
        cdn("salotto 3 posted.jpg"),
        cdn("salotto scudo 3 posted.jpg"),
        cdn("salotto tv b posted.jpg"),
        cdn("open space 3 posted.jpg"),
        cdn("cucina 2.jpg"),
        cdn("cucina b posted.jpg"),
        cdn("Master bedroom posted.jpg"),
        cdn("Master bedroom 2 posted.jpg"),
        cdn("Master bedroom closet posted.jpg"),
        cdn("Bedroom2 posted.jpg"),
        cdn("bagno master posted.jpg"),
        cdn("common bathroom posted.jpg"),
        cdn("Bathroom small posted.jpg"),
        cdn("Bathroom small posted orange.jpg"),
        cdn("Spa orange posted.jpg"),
        cdn("SpaOrange1.jpg"),
        cdn("terrazza c posted.jpg"),
        cdn("office posted.jpg"),
      ],
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "شقة غرفة نوم",
            "نطاق المساحة الإجمالية": "860.47 – 1,009.01 قدم²",
            "السعر الابتدائي": "2,232,921 درهم",
            "موعد التسليم": "الربع الأول 2027",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [ONEBR_FLOORPLAN_IMG],
          features: ["تشطيبات حديثة", "خزائن مدمجة", "شرفة حسب المخطط"],
        },
        {
          id: "2br",
          title: "شقة غرفتين",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "شقة غرفتين",
            "نطاق المساحة الإجمالية": "1,484.02 – 2,158.70 قدم²",
            "السعر الابتدائي": "3,602,000 درهم",
            "موعد التسليم": "الربع الأول 2027",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [TWOBR_FLOORPLAN_IMG],
          features: ["مساحات واسعة", "مناسبة للعائلات", "قيمة استثمارية قوية"],
        },
        {
          id: "3br",
          title: "شقة 3 غرف",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "شقة 3 غرف",
            "نطاق المساحة الإجمالية": "1,508.13 – 2,261.82 قدم²",
            "السعر الابتدائي": "3,484,000 درهم",
            "موعد التسليم": "الربع الأول 2027",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [THREEBR_FLOORPLAN_IMG],
          features: ["مناسبة للعائلات", "غرف متعددة", "شرفة / تراس حسب المخطط"],
        },
      ],
      brochureHref: UNIT_LAYOUTS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مطاعم ومقهى", icon: "🍽️", color: "#d7b46a" },
        { label: "غرفة سينما", icon: "🎬", color: "#d7b46a" },
        { label: "مركز لياقة", icon: "💪", color: "#d7b46a" },
        { label: "محلات وتجزئة", icon: "🛍️", color: "#d7b46a" },
        { label: "كلوب هاوس", icon: "🏡", color: "#d7b46a" },
        { label: "ملعب بادل", icon: "🎾", color: "#d7b46a" },
        { label: "غرفة ألعاب", icon: "🎮", color: "#d7b46a" },
        { label: "مسار للجري", icon: "🏃", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "منطقة ألعاب أطفال", icon: "🛝", color: "#d7b46a" },
        { label: "بخار وساونا", icon: "🧖", color: "#d7b46a" },
        { label: "سوبرماركت", icon: "🛒", color: "#d7b46a" },
        { label: "حديقة خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "دراجات داخلية", icon: "🚴", color: "#d7b46a" },
      ],
    },

    paymentPlan: {
      title: "خطة الدفع",
      headline: "70% / 30%",
      milestones: [
        { label: "عند الحجز", when: "الحجز", percent: 20 },
        { label: "أثناء الإنشاء", when: "الإنشاء", percent: 50 },
        { label: "عند التسليم", when: "التسليم", percent: 30 },
      ],
      note: "التقسيم حسب ملخص البوابة. يُرجى تأكيد الجدول التفصيلي في SPA.",
    },

    location: {
      title: "موقع المشروع",
      projectName: "Tonino Lamborghini Residences",
      address: "AE، دبي، ميدان (ند الشبا 1)، ميدان",
      lat: 25.172,
      lng: 55.33,
      zoom: 13,
      proximityFeatures: [
        { icon: "🏙️", text: "مجتمع ميدان قريب من وجهات دبي الرئيسية" },
        { icon: "🏁", text: "بالقرب من مضمار ميدان ومناطق أسلوب الحياة" },
        { icon: "🌿", text: "مساحات خضراء وحدائق ضمن البيئة المحيطة" },
      ],
      mapImages: [cdn("IMG_3435 (2).PNG"), cdn("Top plan.png")],
    },

    cta: {
      title: "جاهز تتعرّف أكثر على المشروع؟",
      description:
        "اطلب الوحدات المتاحة، وأحدث الأسعار، واحصل على الكتيّب الرسمي والمخططات.",
      buttons: [
        { text: "حجز مكالمة", type: "primary", url: "/contact" },
        {
          text: "تحميل الكتيّب",
          type: "secondary",
          url: SALES_PRESENTATION_PDF,
        },
      ],
    },
  },
};
