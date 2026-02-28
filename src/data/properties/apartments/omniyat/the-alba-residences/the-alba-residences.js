// ✅ src/data/properties/apartments/omniyat/the-alba-residences/the-alba-residences.js

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/omniyat/the-alba-residences";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

/* ===================== PDFs ===================== */
const DESTINATION_BROCHURE_HIGH = cdn(
  "The Alba Destination Brochure - High Res.pdf",
);
const DESTINATION_BROCHURE_LOW = cdn(
  "The Alba Destination Brochure - Low Res (1).pdf",
);
const RESORT_BROCHURE_HIGH = cdn(
  "The Alba Resort Residences Brochure - High Res.pdf",
);
const RESORT_BROCHURE_LOW = cdn(
  "The Alba Resort Residences Brochure - Low Res.pdf",
);

/* ===================== Floor Plans ===================== */
const FP_2BR = cdn("the alba omniyat 2br floor plan.webp");
const FP_3BR = cdn("the alba omniyat 3br floor plan.webp");
const FP_4BR = cdn("the alba omniyat 4br floor plan.webp");

/* ===================== Gallery ===================== */
const GALLERY = [
  cdn("The Alba Beach View.jpg"),
  cdn("The Alba Residences Beach Side at Sunrise.jpg"),
  cdn("The Alba Residences Beach Side.jpg"),
  cdn("The Alba Residences beach Side Facade.jpg"),
  cdn("The Alba Residences Sunset Facade.jpg"),
  cdn("The Alba Residences Facade.jpg"),
  cdn("The Alba Residences Entrance.jpg"),
  cdn("The Alba Residences Pool Views.jpg"),
  cdn("The Alba Residences Pool.jpg"),
  cdn("The Alba Central Oasis.jpg"),
  cdn("The Alba Centra Oasis Amenities.jpg"),
  cdn("The Alba Wellness Centre.jpg"),
  cdn("The Alba Palm Views.jpg"),
  cdn("The Alba Masterplan Top View.jpg"),
  cdn("The Alba Residences - Residential Lobby.jpg"),
  cdn("The Alba Residences Interior Dining.jpg"),
  cdn("The Alba Residences Interior Terrace.jpg"),
];

/* ===================== Hero / Intro Images ===================== */
const HERO_BG = cdn("The Alba Beach View.jpg");
const INTRO_MAIN = cdn("The Alba Residences - Residential Lobby.jpg");

/* ===================== Quick Facts (from your sheet) ===================== */
const HANDOVER = "Q3 2028";
const PAYMENT_PLAN = "60% / 40%";
const STARTING_PRICE = "AED 18,225,000";

export const omniyatAlbaResidencesData = {
  en: {
    seo: {
      title:
        "The Alba Residences by OMNIYAT | 2–4BR Residences on Palm Jumeirah | Payment Plan 60/40 | Handover Q3 2028",
      description:
        "The Alba Residences by OMNIYAT is a limited luxury beachfront collection on Palm Jumeirah. Explore gallery, brochures, and 2–4 bedroom floor plans with a 60/40 payment plan and handover in Q3 2028. Starting from AED 18,225,000.",
      keywords:
        "The Alba Residences, OMNIYAT, Palm Jumeirah, Dubai luxury residences, 2BR 3BR 4BR, beachfront, 60/40 payment plan, Q3 2028",
      canonical: "/properties/apartments/omniyat/the-alba-residences",
    },

    project: {
      name: "The Alba Residences",
      developer: "OMNIYAT",
      location: "Palm Jumeirah, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: STARTING_PRICE,
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "2–4 Bedroom",
      // optional extras (safe if unused by UI)
      // collectionSize: "65 Residences",
      // note: "Central Oasis (~26,000m²) + Wellness Centre (~2,700m²)",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "OMNIYAT",
      rating: null,
    },

    intro: {
      title: "BEACHFRONT LUXURY, REFINED FOR PALM JUMEIRAH",
      paragraphs: [
        "The Alba Residences by OMNIYAT is crafted for buyers who want true Palm Jumeirah prestige—where every arrival, view, and interior moment feels curated. This is not just a residence; it’s a resort-level lifestyle expression built around space, privacy, and an unmistakably premium atmosphere.",
        "From the first impression to the final detailing, The Alba prioritizes a calm, elevated experience: a striking beachfront presence, a carefully composed masterplan, and a setting designed to feel exclusive throughout the day—from sunrise glow to dusk silhouettes.",
        "Inside, the focus is on livability and timeless luxury—generous proportions, elegant finishes, and a sense of flow between social zones and private retreats. The project’s signature lifestyle is reinforced by its landmark elements such as the central oasis and a dedicated wellness environment—created to complement the Palm’s coastal rhythm.",
      ],
      brochures: [
        {
          title: "Destination Brochure (High Res)",
          url: DESTINATION_BROCHURE_HIGH,
          type: "main",
          fileName: "The Alba Destination Brochure - High Res.pdf",
          category: "Overview",
          description: "Official destination brochure (high resolution PDF).",
        },
        {
          title: "Destination Brochure (Low Res)",
          url: DESTINATION_BROCHURE_LOW,
          type: "support",
          fileName: "The Alba Destination Brochure - Low Res (1).pdf",
          category: "Overview",
          description: "Official destination brochure (smaller file size PDF).",
        },
        {
          title: "Resort Residences Brochure (High Res)",
          url: RESORT_BROCHURE_HIGH,
          type: "support",
          fileName: "The Alba Resort Residences Brochure - High Res.pdf",
          category: "Residences",
          description: "Official residences brochure (high resolution PDF).",
        },
        {
          title: "Resort Residences Brochure (Low Res)",
          url: RESORT_BROCHURE_LOW,
          type: "support",
          fileName: "The Alba Resort Residences Brochure - Low Res.pdf",
          category: "Residences",
          description: "Official residences brochure (smaller file size PDF).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "The Alba Residences by OMNIYAT - residential lobby",
      floatingCards: [
        {
          top: "16%",
          right: "-30px",
          icon: "💰",
          value: "AED 18.225M",
          label: "Starting Price",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🧾",
          value: PAYMENT_PLAN,
          label: "Payment Plan",
        },
        {
          top: "44%",
          left: "-40px",
          icon: "📍",
          value: "Palm Jumeirah",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "The Alba Residences",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          shortLabel: "2 BR",
          bedrooms: 2,
          specs: {
            Unit: "2 Bedroom Residence",
            "Total Area": "1,592 sq.ft",
            "Starting Price": "AED 18,225,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          shortLabel: "3 BR",
          bedrooms: 3,
          specs: {
            Unit: "3 Bedroom Residence",
            "Total Area": "2,045 sq.ft",
            "Starting Price": "AED 23,366,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
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
            "Total Area": "6,548 sq.ft",
            "Starting Price": "AED 59,273,300",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: DESTINATION_BROCHURE_HIGH,
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Beachfront Setting", icon: "🏝️", color: "#d7b46a" },
        { label: "Resort-Style Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Central Oasis Concept", icon: "🌿", color: "#d7b46a" },
        { label: "Dedicated Wellness Centre", icon: "🧘", color: "#d7b46a" },
        { label: "Signature Lobby Experience", icon: "🏛️", color: "#d7b46a" },
        { label: "Palm Views & Coastal Vistas", icon: "🌅", color: "#d7b46a" },
        { label: "Landscaped Outdoor Spaces", icon: "🌳", color: "#d7b46a" },
        {
          label: "Premium Residential Atmosphere",
          icon: "✨",
          color: "#d7b46a",
        },
      ],
    },

    location: {
      title: "Location",
      projectName: "The Alba Residences",
      address: "Palm Jumeirah, Dubai, UAE",
      lat: 25.1404123,
      lng: 55.1395264,
      zoom: 14,
      // optional (safe if unused by UI)
      googleMapsUrl:
        "https://www.google.com/maps/dir/25.1527168,55.3910272/THE+ALBA+Residences+by+OMNIYAT,+Palm+Jumeirah+-+The+Palm+Jumeirah+-+Dubai/@25.1199132,55.1732397,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x590768f8bcd43a7:0xea376140ce90755f!2m2!1d55.1395264!2d25.1404123",
      proximityFeatures: [
        {
          icon: "📍",
          text: "Palm Jumeirah — Dubai’s most iconic island address",
        },
        {
          icon: "🏝️",
          text: "Coastal lifestyle with beachfront energy and views",
        },
        { icon: "🚗", text: "Well-connected to key Dubai destinations" },
      ],
    },

    cta: {
      title: "Interested in The Alba Residences?",
      description:
        "Send your details to receive updated availability, pricing, and the official brochures & floor plan files for The Alba Residences by OMNIYAT.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "ذا ألبا ريزيدنسز من أمنيات | وحدات فاخرة 2–4 غرف في نخلة جميرا | خطة دفع 60/40 | التسليم Q3 2028",
      description:
        "ذا ألبا ريزيدنسز من أمنيات مجموعة سكنية فاخرة على الواجهة البحرية في نخلة جميرا. استكشف الصور والكتيّبات ومخططات 2–4 غرف نوم مع خطة دفع 60/40 وموعد تسليم Q3 2028. يبدأ السعر من 18,225,000 درهم.",
      keywords:
        "ذا ألبا ريزيدنسز, أمنيات, نخلة جميرا, دبي, وحدات فاخرة, 2 غرف 3 غرف 4 غرف, خطة دفع 60/40, التسليم Q3 2028",
      canonical: "/properties/apartments/omniyat/the-alba-residences",
    },

    project: {
      name: "ذا ألبا ريزيدنسز",
      developer: "أمنيات",
      location: "نخلة جميرا، دبي، الإمارات",
      status: "على الخريطة",
      startingPrice: "18,225,000 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "شقق",
      units: "2–4 غرف نوم",
      // optional extras (safe if unused by UI)
      // collectionSize: "65 وحدة سكنية",
      // note: "واحة مركزية (~26,000م²) + مركز عافية (~2,700م²)",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "أمنيات",
      rating: null,
    },

    intro: {
      title: "فخامة على الشاطئ… مُصمّمة لنخلة جميرا",
      paragraphs: [
        "ذا ألبا ريزيدنسز من أمنيات صُمّم لمن يبحث عن هيبة نخلة جميرا الحقيقية—حيث الوصول، الإطلالة، وتفاصيل الداخل كلها تحمل طابعًا فاخرًا ومدروسًا. ليست مجرد شقق سكنية، بل تجربة معيشية بمستوى منتجع، تعكس الهدوء والرقي والخصوصية.",
        "من الانطباع الأول وحتى أدق التفاصيل، يركز المشروع على تجربة راقية ومتوازنة: حضور معماري قوي على الواجهة البحرية، مخطط عام منظم بعناية، وأجواء تشعرك بالتميز طوال اليوم—من ضوء الشروق وحتى لحظة الغروب.",
        "في الداخل، تُقدّم المساحات رحابة وراحة حقيقية: تناسق بين مناطق الاستقبال والخصوصية، إحساس بانسيابية الحركة، ولمسة فاخرة تُناسب أسلوب حياة نخلة جميرا. وتبرز عناصر المشروع المميّزة مثل مفهوم الواحة المركزية ومساحة العافية المخصصة لدعم نمط حياة هادئ ومتجدد.",
        "مع خطة دفع 60/40 وموعد تسليم متوقع في Q3 2028، يجمع ذا ألبا ريزيدنسز بين موقع أيقوني، لغة تصميم راقية، وإحساس “المجموعة المحدودة”—مدعومًا بمكانة أمنيات في أعلى فئة من المشاريع الفاخرة.",
      ],
      brochures: [
        {
          title: "تحميل كتيّب الوجهة (جودة عالية)",
          url: DESTINATION_BROCHURE_HIGH,
          type: "main",
          fileName: "The Alba Destination Brochure - High Res.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي للوجهة (PDF بجودة عالية).",
        },
        {
          title: "تحميل كتيّب الوجهة (حجم أقل)",
          url: DESTINATION_BROCHURE_LOW,
          type: "support",
          fileName: "The Alba Destination Brochure - Low Res (1).pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي للوجهة (PDF بحجم أصغر).",
        },
        {
          title: "تحميل كتيّب الوحدات (جودة عالية)",
          url: RESORT_BROCHURE_HIGH,
          type: "support",
          fileName: "The Alba Resort Residences Brochure - High Res.pdf",
          category: "الوحدات",
          description: "الكتيّب الرسمي للوحدات (PDF بجودة عالية).",
        },
        {
          title: "تحميل كتيّب الوحدات (حجم أقل)",
          url: RESORT_BROCHURE_LOW,
          type: "support",
          fileName: "The Alba Resort Residences Brochure - Low Res.pdf",
          category: "الوحدات",
          description: "الكتيّب الرسمي للوحدات (PDF بحجم أصغر).",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "ذا ألبا ريزيدنسز من أمنيات - الردهة السكنية",
      floatingCards: [
        {
          top: "16%",
          right: "-30px",
          icon: "💰",
          value: "18.225M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📅",
          value: HANDOVER,
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🧾",
          value: PAYMENT_PLAN,
          label: "خطة الدفع",
        },
        {
          top: "44%",
          left: "-40px",
          icon: "📍",
          value: "نخلة جميرا",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "The Alba Residences",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "شقة 2 غرف",
          shortLabel: "2 غرف",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "وحدة سكنية 2 غرف نوم",
            "إجمالي المساحة": "1,592 قدم²",
            "السعر الابتدائي": "18,225,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "شقة 3 غرف",
          shortLabel: "3 غرف",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "وحدة سكنية 3 غرف نوم",
            "إجمالي المساحة": "2,045 قدم²",
            "السعر الابتدائي": "23,366,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR],
        },
        {
          id: "4br",
          title: "شقة 4 غرف",
          shortLabel: "4 غرف",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "وحدة سكنية 4 غرف نوم",
            "إجمالي المساحة": "6,548 قدم²",
            "السعر الابتدائي": "59,273,300 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: DESTINATION_BROCHURE_HIGH,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "واجهة بحرية", icon: "🏝️", color: "#d7b46a" },
        { label: "مسابح بطابع منتجع", icon: "🏊", color: "#d7b46a" },
        { label: "مفهوم الواحة المركزية", icon: "🌿", color: "#d7b46a" },
        { label: "مركز عافية مخصص", icon: "🧘", color: "#d7b46a" },
        { label: "ردهة سكنية مميزة", icon: "🏛️", color: "#d7b46a" },
        {
          label: "إطلالات على نخلة جميرا والبحر",
          icon: "🌅",
          color: "#d7b46a",
        },
        { label: "مساحات خارجية ومناظر طبيعية", icon: "🌳", color: "#d7b46a" },
        { label: "أجواء سكنية فاخرة", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "الموقع",
      projectName: "ذا ألبا ريزيدنسز",
      address: "نخلة جميرا، دبي، الإمارات العربية المتحدة",
      lat: 25.1404123,
      lng: 55.1395264,
      zoom: 14,
      googleMapsUrl:
        "https://www.google.com/maps/dir/25.1527168,55.3910272/THE+ALBA+Residences+by+OMNIYAT,+Palm+Jumeirah+-+The+Palm+Jumeirah+-+Dubai/@25.1199132,55.1732397,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x590768f8bcd43a7:0xea376140ce90755f!2m2!1d55.1395264!2d25.1404123",
      proximityFeatures: [
        { icon: "📍", text: "نخلة جميرا — العنوان الأشهر والأرقى في دبي" },
        { icon: "🏝️", text: "أسلوب حياة ساحلي مع أجواء واجهة بحرية" },
        { icon: "🚗", text: "ارتباط سهل بمناطق دبي الرئيسية" },
      ],
    },

    cta: {
      title: "مهتم بذا ألبا ريزيدنسز؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي والأسعار وروابط ملفات الكتيّبات الرسمية ومخططات الطوابق لِذا ألبا ريزيدنسز من أمنيات.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default omniyatAlbaResidencesData;
