// src/data/properties/apartments/lapis/lazord.js
// Lazord by Lapis Phases 1 & 2 (Majan, Dubai)
// ✅ Bunny paths confirmed (case-sensitive)
// ✅ Uses constants like Sobha One / Ananda style
// ✅ Blueprint-aligned floorPlans: { type, brochureHref, plans[] }
// ✅ project.paymentPlan exists + included in EVERY floor plan specs (EN/AR)
// Folder: https://luxury-real-estate-media.b-cdn.net/lapis/lazord

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const LAZORD_DIR = "/lapis/lazord";

/**
 * IMPORTANT:
 * - Bunny is case-sensitive
 * - encodeURI keeps subfolders valid and converts spaces to %20
 */
const cdn = (filePath) =>
  `${BUNNY_CDN_BASE}${LAZORD_DIR}/${encodeURI(filePath)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Lazord by Lapis";
const PROJECT_NAME_AR = "لازورد من لابِس";

const DEVELOPER_EN = "Lapis Properties";
const DEVELOPER_AR = "لابِس العقارية";

const LOCATION_EN = "Majan, Dubai, UAE";
const LOCATION_AR = "مجان، دبي، الإمارات";

const STATUS_EN = "Off-plan";
const STATUS_AR = "قيد الإنشاء";

const HANDOVER_EN = "Q4 2026";
const HANDOVER_AR = "الربع الرابع 2026";

const STARTING_PRICE_EN = "From 999,147 AED";
const STARTING_PRICE_AR = "ابتداءً من 999,147 درهم";

// Payment plan (EN/AR) — full readable text (not دفعة 1/2)
const PAYMENT_PLAN_HEADLINE = "20% / 28% / 17% / 35%";

const PAYMENT_PLAN_EN =
  "On booking 20% / During construction 28% / Upon handover 17% / Post-handover 35% (within 3 years)";
const PAYMENT_PLAN_AR =
  "عند الحجز 20% / أثناء الإنشاء 28% / عند التسليم 17% / بعد التسليم 35% (خلال 3 سنوات)";

// ========================
// Documents (confirmed)
// ========================
const BROCHURE_PDF = cdn("Lazord By Lapis 2024.pdf");

// ========================
// Floorplans (confirmed EXACT names)
// ========================
const FP_STUDIO = cdn("Lazord studio Floor Plan.png");
const FP_1BR = cdn("Lazord 1br floor plan.png");
const FP_2BR = cdn("lazord 2 br floor plan.png");

// ========================
// Media (guaranteed existing in folder)
// ========================
const HERO_BG = cdn("IMAGES/ext 03.jpg");
const INTRO_IMG = cdn("IMAGES/re new 01.jpg");

// (Your logo is outside Lazord folder – keep as-is)
const LOGO_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/lazord-logo.webp";

// Gallery slides (11, same list you provided)
const GALLERY_SLIDES = [
  cdn("IMAGES/ext 02.jpg"),
  cdn("IMAGES/ext 03.jpg"),
  cdn("IMAGES/re new 01.jpg"),
  cdn("IMAGES/01 (4).png"),
  cdn("IMAGES/01 (5).png"),
  cdn("IMAGES/01 (7).png"),
  cdn("IMAGES/Image.jpeg"),
  cdn("IMAGES/Image.png"),
  cdn("IMAGES/gym (2).png"),
  cdn("IMAGES/Scene 28.png"),
  cdn("IMAGES/Scene 32.png"),
];

export const lazordLapisData = {
  // ============================
  // ENGLISH
  // ============================
  en: {
    seo: {
      title: "Lazord by Lapis | Studios, 1 & 2BR Apartments in Majan, Dubai",
      description:
        "Lazord by Lapis Phases 1 and 2 in Majan offers modern apartments with smart-home features, strong connectivity, and a flexible payment plan extending up to 3 years post-handover.",
      keywords:
        "lazord by lapis, lapis properties, majan apartments, dubailand, dubai off plan, studio, 1 bedroom, 2 bedroom",
      canonical: "/properties/apartments/lapis/lazord",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: DEVELOPER_EN,
      location: LOCATION_EN,
      status: STATUS_EN,
      startingPrice: STARTING_PRICE_EN,
      completionDate: HANDOVER_EN,

      // ✅ Blueprint-style: paymentPlan at project level (same pattern as Ananda)
      paymentPlan: PAYMENT_PLAN_EN,

      // Reelly-style facts panel (kept exactly as you had)
      brandedProject: false,
      unitTypes: "Apartments",
      constructionStatus: "Under construction",
      salestatus: "Off-Plan",
      floorsFormula: "B + G + 3P + 12floors + R",
      handover: HANDOVER_EN,
      readinessProgress: "2.36%",
      furnishing: "Only kitchen",
      serviceCharge: "14 AED/sqft",
      resaleConditions: "20",
      totalBuildingArea: "187,535 sqft",
      paymentPlanSummary: PAYMENT_PLAN_HEADLINE,
      saleTimeline: "1 Jan 2025 - Q4 2026",
      parkingPolicy: {
        oneParking: "Studio, 1 Bed, 2 Bed",
      },
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: LOGO_URL,
      companyName: "Lapis",
      rating: null,
      badges: ["Majan", "On Sale", "Q4 2026 Handover"],
    },

    facts: {
      title: "Project general facts",
      paragraphs: [
        "Lazord by Lapis Phases 1 and 2 is a refined residential project that redefines urban luxury in the heart of Dubai. With elegant architecture and a clean, contemporary aesthetic, the building presents a modern silhouette that harmonizes with the city’s skyline. Strategically located within the coveted 20-minute zone, Lazord ensures effortless access to Dubai’s most iconic destinations — blending exclusivity, comfort, and connectivity into one sophisticated address.",
        "The apartments at Lazord are designed to offer both comfort and elegance. Spacious layouts, carefully selected finishes, and expansive windows fill the homes with natural light, creating a serene atmosphere throughout. With options that include private swimming pool units, the interiors reflect a high standard of craftsmanship — ideal for modern lifestyles seeking both style and functionality in everyday living.",
        "Lazord’s exceptional amenities complete the experience of luxury living. Residents enjoy a full range of wellness and leisure offerings, from indoor and outdoor gyms, jogging tracks, and saunas to a Jacuzzi-equipped pool deck, splash pools for kids, and a dedicated outdoor cinema. Landscaped gardens, family lounges, barbecue areas, and playful features like dancing fountains and billiards rooms create a vibrant, inclusive community — where every member of the family feels at home.",
      ],
      finishingAndMaterials:
        "Modern finishing with high-quality materials includes a “Smart Home” system.",
      kitchenAndAppliances: "Equipped kitchens.",
      furnishing: "Only kitchen.",
      locationDescriptionAndBenefits: [
        "Majan is a 1.5 million square meter district in Dubai. It is located at the heart of the large Dubailand community. Majan is a perfect place for those who are looking for a buy-to-invest property. While the community is developing, apartment prices have not yet reached their maximum values. If you want to purchase an off-plan housing unit, you can count on a good discount.",
        "With Sheikh Mohammed Bin Zayed Road at its front, Majan lies in close proximity to Al Ain Road. These roads provide Majan strategic access to Al Ain, Sharjah and Abu Dhabi. The area comprises 100 residential complexes, six iconic towers, four hotels and mixed-use units.",
        "The main advantage of Majan is its proximity to high-ranked schools, business and shopping centers, medical facilities, major amusement parks, and sports facilities. While the community boasts its excellent location and good infrastructure, rental rates are not as high as in the seashore or central parts of the emirate. Affordable prices attract locals and tourists who want to rent an apartment in a good area at an affordable price.",
      ],
    },

    intro: {
      title: "URBAN LUXURY IN MAJAN’S 20-MINUTE ZONE",
      paragraphs: [
        "Lazord by Lapis (Phases 1 & 2) is a modern residential address in Majan, blending refined architecture with lifestyle amenities designed for everyday comfort.",
        "A flexible payment plan extends beyond handover, allowing installments up to 3 years post-handover.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
      ],
      imgUrl: INTRO_IMG,
      imgAlt: "Lazord by Lapis exterior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: HANDOVER_EN,
          label: "Handover",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: PAYMENT_PLAN_HEADLINE.replace(/\s/g, ""),
          label: "Payment Plan",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Majan",
          label: "Dubailand",
        },
      ],
    },

    gallery: {
      title: "Lazord Visuals",
      projectTag: "Lazord",
      slides: GALLERY_SLIDES,
      video: {
        title: "Video review Lazord by Lapis Phases 1 and 2",
        url: null,
      },
    },

    // ✅ Blueprint-compatible floorPlans (with brochureHref + Payment Plan in EACH plan)
    floorPlans: {
      type: "apartments",
      brochureHref: BROCHURE_PDF,
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,

          availabilitySummary: {
            availability: "3/3",
            areaRange: "500.98 - 881.34 sqft",
            priceRange: "999,147 - 1,303,973 AED",
          },

          specs: {
            Unit: "STUDIO",
            "Total Range": "500.98 - 881.34 sqft",
            "Starting Price": "999,147 AED",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_EN,
          },

          images: [FP_STUDIO],

          units: [
            {
              plan: "Layout plan",
              bedrooms: "Studio",
              type: "Apartments",
              number: "№ 1026",
              floor: "Floor 10",
              area: "881.34 sqft",
              price: "1,274,076 AED",
              aedPerSqft: "1,445 AED/sqft",
            },
            {
              plan: "Layout plan",
              bedrooms: "Studio",
              type: "Apartments",
              number: "№ 1123",
              floor: "Floor 11",
              area: "862.49 sqft",
              price: "1,303,973 AED",
              aedPerSqft: "1,511 AED/sqft",
            },
            {
              plan: "Layout plan",
              bedrooms: "Studio",
              type: "Apartments",
              number: "№ 116",
              floor: "Floor 1",
              area: "500.98 sqft",
              price: "999,147 AED",
              aedPerSqft: "1,994 AED/sqft",
            },
          ],
          // Optional but safe (some UIs expect it)
          features: ["Smart home", "Modern finishing", "Lifestyle amenities"],
        },

        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,

          availabilitySummary: {
            availability: "21/21",
            areaRange: "666.7 - 1,183.59 sqft",
            priceRange: "1,444,210 - 2,229,373 AED",
          },

          specs: {
            Unit: "1 BEDROOM",
            "Total Range": "666.7 - 1,183.59 sqft",
            "Starting Price": "1,444,210 AED",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_EN,
          },

          images: [FP_1BR],
          units: [],
          features: ["Smart home", "Spacious layouts", "Bright interiors"],
        },

        {
          id: "2br",
          title: "2 Bedrooms",
          bedrooms: 2,

          availabilitySummary: {
            availability: "2/2",
            areaRange: "1,117.78 sqft",
            priceRange: "2,089,807 - 2,122,807 AED",
          },

          specs: {
            Unit: "2 BEDROOMS",
            "Total Range": "1,117.78 sqft",
            "Starting Price": "2,089,807 AED",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_EN,
          },

          images: [FP_2BR],
          units: [],
          features: ["Smart home", "Family-friendly living", "Lifestyle deck"],
        },
      ],
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Billiards Room", icon: "🎱", color: "#d7b46a" },
        { label: "Steam And Sauna", icon: "♨️", color: "#d7b46a" },
        { label: "Bbq Area", icon: "🍖", color: "#d7b46a" },
        { label: "Indoor Gym", icon: "💪", color: "#d7b46a" },
        { label: "Lounge Area", icon: "🛋️", color: "#d7b46a" },
        { label: "Leisure Pool Deck & Jacuzzi", icon: "🏊", color: "#d7b46a" },
        { label: "Jogging Track", icon: "🏃", color: "#d7b46a" },
        { label: "Dancing Fountains", icon: "⛲", color: "#d7b46a" },
        { label: "Kids Play Area", icon: "🧸", color: "#d7b46a" },
        { label: "Outdoor Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Outdoor Cinema", icon: "🎬", color: "#d7b46a" },
      ],
    },

    paymentPlan: {
      title: "Payment plan",
      headline: PAYMENT_PLAN_HEADLINE,
      milestones: [
        { label: "On booking", when: "Booking", percent: 20 },
        { label: "During construction", when: "Construction", percent: 28 },
        { label: "Upon handover", when: "Handover", percent: 17 },
        { label: "Within 3 Years PH", when: "Post-handover", percent: 35 },
      ],
      note: "Project information is provided by the developer and may change. If you notice an error, contact support to update the data.",
    },

    // English location object
    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: "Lazord by Lapis, Majan, Dubailand, Dubai, UAE",
      lat: 25.0945948,
      lng: 55.3213086,
      zoom: 15,
      proximityFeatures: [
        { icon: "🏙️", text: "Located in Majan, Dubailand, Dubai" },
        {
          icon: "🛣️",
          text: "Direct access to Sheikh Mohammed Bin Zayed Road (E311)",
        },
        { icon: "🛍️", text: "Approx. 15 minutes to Downtown Dubai" },
        {
          icon: "✈️",
          text: "Approx. 20 minutes to Dubai International Airport (DXB)",
        },
        { icon: "🏖️", text: "Approx. 25 minutes to Dubai Marina" },
        { icon: "🎢", text: "Close to Dubai Parks & Resorts" },
      ],
    },

    nearbyAttractions: {
      title: "Nearby points of interest",
      attractions: [
        {
          name: "Miles of Smiles Nursery",
          distance: "1.0 km",
          time: null,
          icon: "🧸",
        },
        {
          name: "Majan Public Park",
          distance: "900 m",
          time: null,
          icon: "🌳",
        },
        {
          name: "Midtown Central Majan",
          distance: "1.0 km",
          time: null,
          icon: "🛍️",
        },
        { name: "Sufouh Beach", distance: "24.0 km", time: null, icon: "🏖️" },
        { name: "Downtown Dubai", distance: "20.6 km", time: null, icon: "🏙️" },
        {
          name: "Dubai International Airport",
          distance: "26.1 km",
          time: null,
          icon: "✈️",
        },
      ],
    },

    developerProfile: {
      name: DEVELOPER_EN,
      address: "48 Burj Gate, Office 601, Downtown, Dubai, UAE",
      workingHours: [
        { days: "Monday - Friday", hours: "9 AM - 7 PM" },
        { days: "Saturday - Sunday", hours: "Day off" },
      ],
      salesOffice: [
        {
          name: "Aida Mulaeva (Lapis Properties)",
          title: "Sales Manager",
          languages: ["English", "Russian"],
          whatsapp: true,
        },
      ],
    },
  },

  // ============================
  // ARABIC
  // ============================
  ar: {
    seo: {
      title: "لازورد من لابِس | استوديو و1 و2 غرفة في مجان، دبي",
      description:
        "لازورد من لابِس (المرحلتان 1 و2) في مجان يقدّم شققاً بتصميم حديث ونظام منزل ذكي ومرافق متكاملة وخطة دفع مرنة حتى 3 سنوات بعد التسليم.",
      keywords:
        "لازورد, لابِس, شقق مجان, دبي لاند, استوديو, غرفة نوم, غرفتين نوم, عقارات دبي",
      canonical: "/properties/apartments/lapis/lazord",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: DEVELOPER_AR,
      location: LOCATION_AR,
      status: STATUS_AR,
      startingPrice: STARTING_PRICE_AR,
      completionDate: HANDOVER_AR,

      // ✅ Blueprint-style: paymentPlan at project level
      paymentPlan: PAYMENT_PLAN_AR,

      brandedProject: false,
      unitTypes: "شقق",
      constructionStatus: "قيد الإنشاء",
      saleStatus: "متاح للبيع",
      floorsFormula: "قبو + أرضي + 3 مواقف + 12 طابق + سطح",
      handover: HANDOVER_AR,
      readinessProgress: "2.36%",
      furnishing: "المطبخ فقط",
      serviceCharge: "14 درهم/قدم²",
      resaleConditions: "20",
      totalBuildingArea: "187,535 قدم²",
      paymentPlanSummary: PAYMENT_PLAN_HEADLINE,
      saleTimeline: "1 يناير 2025 - الربع الرابع 2026",
      parkingPolicy: {
        oneParking: "استوديو، غرفة، غرفتان",
      },
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: LOGO_URL,
      companyName: "لابِس",
      rating: null,
      badges: ["مجان", "متاح للبيع", "التسليم Q4 2026"],
    },

    facts: {
      title: "حقائق عامة عن المشروع",
      paragraphs: [
        "لازورد من لابِس (المرحلتان 1 و2) مشروع سكني راقٍ يعيد تعريف فخامة الحياة الحضرية في قلب دبي. بعمارة أنيقة وطابع معاصر نظيف، يقدم المبنى حضوراً متناغماً مع أفق المدينة. وبموقعه ضمن «منطقة 20 دقيقة»، يوفر لازورد وصولاً سهلاً لأهم وجهات دبي — جامعاً بين الخصوصية والراحة والاتصال في عنوان واحد.",
        "تم تصميم شقق لازورد لتوازن بين الراحة والأناقة. مخططات واسعة وتشطيبات مختارة بعناية ونوافذ كبيرة تمنح الضوء الطبيعي حضوراً دائماً، لتشكّل أجواء هادئة داخل المنزل. ومع خيارات تشمل وحدات بمسبح خاص، تعكس التفاصيل مستوىً عالياً من الجودة — لأسلوب حياة عصري يجمع بين الجمال والعملية.",
        "تكتمل تجربة الفخامة عبر مرافق استثنائية تشمل جيم داخلي وخارجي، ومسارات جري، وساونا، وتراس مسبح مع جاكوزي، ومسابح للأطفال، وسينما خارجية. كما تضيف الحدائق والمساحات العائلية ومناطق الشواء ونوافير راقصة وغرف بلياردو روحاً مجتمعية نابضة تناسب جميع أفراد الأسرة.",
      ],
      finishingAndMaterials:
        "تشطيبات عصرية بمواد عالية الجودة وتتضمن نظام «منزل ذكي».",
      kitchenAndAppliances: "مطابخ مجهزة.",
      furnishing: "المطبخ فقط.",
      locationDescriptionAndBenefits: [
        "مجان منطقة بمساحة 1.5 مليون متر مربع في دبي وتقع في قلب مجتمع دبي لاند. تُعد مجان خياراً مناسباً للاستثمار، ومع استمرار التطوير لم تصل الأسعار إلى أقصى مستوياتها بعد، ما قد يوفر خصومات جيدة للوحدات قيد الإنشاء.",
        "تقع مجان بمحاذاة شارع الشيخ محمد بن زايد وعلى مقربة من طريق العين، ما يوفر وصولاً استراتيجياً إلى العين والشارقة وأبوظبي. وتضم المنطقة مجمعات سكنية وفنادق ووحدات متعددة الاستخدامات.",
        "من أهم مزايا مجان قربها من المدارس ومراكز الأعمال والتسوق والمرافق الطبية والوجهات الترفيهية والرياضية. كما أن الإيجارات غالباً أقل من المناطق الساحلية أو المركزية، ما يجعلها خياراً جذاباً للسكن والاستثمار.",
      ],
    },

    intro: {
      title: "فخامة حضرية ضمن «منطقة 20 دقيقة» في مجان",
      paragraphs: [
        "لازورد من لابِس (المرحلتان 1 و2) مشروع سكني حديث في مجان مع مرافق متكاملة وتجربة معيشة يومية مريحة.",
        "خطة دفع مرنة تمتد حتى 3 سنوات بعد التسليم.",
      ],
      brochures: [{ title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" }],
      imgUrl: INTRO_IMG,
      imgAlt: "واجهة لازورد من لابِس",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: HANDOVER_AR,
          label: "التسليم",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: PAYMENT_PLAN_HEADLINE.replace(/\s/g, ""),
          label: "خطة الدفع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "مجان",
          label: "دبي لاند",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      projectTag: "Lazord",
      slides: GALLERY_SLIDES,
      video: {
        title: "فيديو عن لازورد من لابِس (المرحلتان 1 و2)",
        url: null,
      },
    },

    // ✅ Blueprint-compatible floorPlans (AR) with brochureHref + خطة الدفع داخل specs
    floorPlans: {
      type: "apartments",
      brochureHref: BROCHURE_PDF,
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,

          availabilitySummary: {
            availability: "3/3",
            areaRange: "500.98 - 881.34 قدم²",
            priceRange: "999,147 - 1,303,973 درهم",
          },

          specs: {
            "نوع الوحدة": "استوديو",
            "نطاق المساحة الإجمالية": "500.98 - 881.34 قدم²",
            "السعر الابتدائي": "999,147 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_AR,
          },

          images: [FP_STUDIO],
          features: ["منزل ذكي", "تشطيبات عصرية", "مرافق متكاملة"],
        },

        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,

          availabilitySummary: {
            availability: "21/21",
            areaRange: "666.7 - 1,183.59 قدم²",
            priceRange: "1,444,210 - 2,229,373 درهم",
          },

          specs: {
            "نوع الوحدة": "غرفة نوم واحدة",
            "نطاق المساحة الإجمالية": "666.7 - 1,183.59 قدم²",
            "السعر الابتدائي": "1,444,210 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_AR,
          },

          images: [FP_1BR],
          features: ["منزل ذكي", "مخططات واسعة", "إضاءة طبيعية"],
        },

        {
          id: "2br",
          title: "غرفتان",
          bedrooms: 2,

          availabilitySummary: {
            availability: "2/2",
            areaRange: "1,117.78 قدم²",
            priceRange: "2,089,807 - 2,122,807 درهم",
          },

          specs: {
            "نوع الوحدة": "غرفتان",
            "نطاق المساحة الإجمالية": "1,117.78 قدم²",
            "السعر الابتدائي": "2,089,807 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة الدفع": PAYMENT_PLAN_AR,
          },

          images: [FP_2BR],
          features: ["منزل ذكي", "مناسب للعائلات", "مرافق أسلوب حياة"],
        },
      ],
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "غرفة بلياردو", icon: "🎱", color: "#d7b46a" },
        { label: "ساونا وبخار", icon: "♨️", color: "#d7b46a" },
        { label: "منطقة BBQ", icon: "🍖", color: "#d7b46a" },
        { label: "جيم داخلي", icon: "💪", color: "#d7b46a" },
        { label: "لاونج", icon: "🛋️", color: "#d7b46a" },
        { label: "تراس مسبح + جاكوزي", icon: "🏊", color: "#d7b46a" },
        { label: "مسار جري", icon: "🏃", color: "#d7b46a" },
        { label: "نوافير راقصة", icon: "⛲", color: "#d7b46a" },
        { label: "منطقة ألعاب أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "جيم خارجي", icon: "🏋️", color: "#d7b46a" },
        { label: "سينما خارجية", icon: "🎬", color: "#d7b46a" },
      ],
    },

    paymentPlan: {
      title: "خطة الدفع",
      headline: PAYMENT_PLAN_HEADLINE,
      milestones: [
        { label: "عند الحجز", when: "الحجز", percent: 20 },
        { label: "أثناء الإنشاء", when: "الإنشاء", percent: 28 },
        { label: "عند التسليم", when: "التسليم", percent: 17 },
        { label: "خلال 3 سنوات بعد التسليم", when: "بعد التسليم", percent: 35 },
      ],
      note: "معلومات المشروع مقدمة من المطوّر وقد تتغير. إذا لاحظت خطأ، تواصل مع الدعم لتحديث البيانات.",
    },

    // Arabic location object
    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address: "لازورد من لابيس، مجان، دبي لاند، دبي، الإمارات",
      lat: 25.0945948,
      lng: 55.3213086,
      zoom: 15,
      proximityFeatures: [
        { icon: "📍", text: "يقع في مجان، دبي لاند، دبي" },
        { icon: "🛣️", text: "قرب شارع الشيخ محمد بن زايد (E311)" },
        { icon: "🛍️", text: "حوالي 15 دقيقة إلى وسط دبي" },
        { icon: "✈️", text: "حوالي 20 دقيقة إلى مطار دبي الدولي (DXB)" },
        { icon: "🏖️", text: "حوالي 25 دقيقة إلى مرسى دبي" },
        { icon: "🎢", text: "قرب دبي باركس أند ريزورتس" },
      ],
    },

    nearbyAttractions: {
      title: "أماكن قريبة",
      attractions: [
        {
          name: "Miles of Smiles Nursery",
          distance: "1.0 كم",
          time: null,
          icon: "🧸",
        },
        {
          name: "Majan Public Park",
          distance: "900 م",
          time: null,
          icon: "🌳",
        },
        {
          name: "Midtown Central Majan",
          distance: "1.0 كم",
          time: null,
          icon: "🛍️",
        },
        { name: "Sufouh Beach", distance: "24.0 كم", time: null, icon: "🏖️" },
        { name: "وسط دبي", distance: "20.6 كم", time: null, icon: "🏙️" },
        {
          name: "مطار دبي الدولي",
          distance: "26.1 كم",
          time: null,
          icon: "✈️",
        },
      ],
    },
  },
};

export default lazordLapisData;
