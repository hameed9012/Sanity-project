// ✅ src/data/properties/apartments/omniyat/opus/opus.js
// Tailored to your blueprint structure (same style as The Gate 3) + strong paragraphs + full working EN/AR

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/omniyat/opus";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

/* ===================== PDFs ===================== */
const BROCHURE_PDF = cdn("The Opus by OMNIYAT Residences Brochure.pdf");
const FACTSHEET_PDF = cdn("The Opus by OMNIYAT Residences Factsheet.pdf");

/* ===================== Floor Plans ===================== */
const FP_1BR = cdn("opus 1br floor plan.webp");
const FP_2BR = cdn("opus 2br floor plan.webp");
const FP_4BR = cdn("opus 4br floor plan.webp"); // (Penthouse)

/* ===================== Video ===================== */
const INSPIRATION_VIDEO = cdn(
  "The Opus Residences Inspiration Video Landscape.mp4",
);

/* ===================== Gallery ===================== */
const GALLERY = [
  cdn("The Opus by OMNIYAT Exterior 1.jpg"),
  cdn("The Opus by OMNIYAT Exterior 2.jpg"),
  cdn("The Opus by OMNIYAT Exterior 3.jpg"),
  cdn("The Opus by OMNIYAT Exterior 4.jpg"),
  cdn("The Opus by OMNIYAT Exterior 5.jpg"),
  cdn("The Opus by OMNIYAT Exterior 6.jpg"),
  cdn("The Opus by OMNIYAT Exterior 7.jpg"),
  cdn("The Opus by OMNIYAT Exterior 8.jpg"),
  cdn("The Opus by OMNIYAT Exterior 9.jpg"),

  cdn("The Opus by OMNIYAT Atrium 1.jpg"),
  cdn("The Opus by OMNIYAT Atrium 2.jpg"),
  cdn("The Opus by OMNIYAT Atrium 3.jpg"),
  cdn("The Opus by OMNIYAT Atrium 4.jpg"),

  cdn("The Opus by OMNIYAT Pool.jpg"),
  cdn("The Opus by OMNIYAT Pool 2.jpg"),
  cdn("The Opus by OMNIYAT Pool Cabana.jpg"),

  cdn("The Opus by OMNIYAT gym.jpg"),
  cdn("The Opus by OMNIYAT gym 2.jpg"),
  cdn("The Opus by OMNIYAT gym 3.jpg"),

  cdn("The Opus by OMNIYAT Spa.jpg"),
  cdn("The Opus by OMNIYAT Spa 2.jpg"),

  cdn("The Opus by OMNIYAT Show Residence 1.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 3.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 4.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 5.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 6.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 7.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 8.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 9.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 10.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 11.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 12.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 13.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 14.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 15.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 16.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 17.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 18.jpg"),

  // 2BR show residence set (kept as separate collection)
  cdn("The Opus by OMNIYAT Show Residence 2-BR 1.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 2.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 3.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 4.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 5.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 6.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 7.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 8.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 9.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 10.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 11.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 12.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 13.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 14.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 15.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 16.jpg"),
  cdn("The Opus by OMNIYAT Show Residence 2-BR 17.jpg"),

  // Restaurants / lifestyle
  cdn("Deseo Rooftop Lounge 1.jpg"),
  cdn("Deseo Rooftop Lounge 2.jpg"),
  cdn("Deseo Rooftop Lounge 3.jpg"),
  cdn("Roka at The Opus Culinary Cuisine 1.jpg"),
  cdn("Roka at The Opus Culinary Cuisine 3.jpg"),
  cdn("Roka at The Opus Culinary Cuisine 4.jpg"),
  cdn("Roka at The Opus Culinary Cuisine 5.jpg"),
  cdn("Roka at The Opus Culinary Cuisine 6.jpg"),
];

/* ===================== Hero / Intro ===================== */
const HERO_BG = cdn("The Opus by OMNIYAT Exterior 1.jpg");
const INTRO_MAIN = cdn("The Opus by OMNIYAT Atrium 1.jpg");

/* ===================== Quick Facts (from your sheet) ===================== */
const PAYMENT_PLAN = "100%";
const STATUS = "Ready";
const STARTING_PRICE = "AED 5,124,299";

export const omniyatOpusData = {
  en: {
    seo: {
      title:
        "The Opus by OMNIYAT (Zaha Hadid) | Ready Residences in Business Bay | 1–2BR + 4BR Penthouse | 100% Payment",
      description:
        "The Opus by OMNIYAT, designed by Zaha Hadid, is a landmark ready address in Business Bay. Explore gallery, brochure, factsheet, video, and floor plans for 1–2 bedroom residences and a 4-bedroom penthouse. Starting from AED 5,124,299 with 100% payment.",
      keywords:
        "The Opus, OMNIYAT, Zaha Hadid, Business Bay, Dubai, ready apartments, luxury residences, 1BR 2BR, penthouse, 100% payment",
      canonical: "/properties/apartments/omniyat/opus-tower",
    },

    project: {
      name: "The Opus",
      developer: "OMNIYAT",
      location: "Business Bay, Dubai, UAE",
      status: STATUS,
      startingPrice: STARTING_PRICE,
      completionDate: "Ready",
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1–2 Bedroom + 4BR Penthouse",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "OMNIYAT",
      rating: null,
    },

    intro: {
      title: "AN ICONIC ADDRESS DESIGNED BY ZAHA HADID",
      paragraphs: [
        "The Opus by OMNIYAT is not a typical residential offering—it’s a globally recognized architectural statement, imagined by Zaha Hadid and delivered as a ready, lived-in landmark in Business Bay. From the outside, its sculpted form and dramatic void are instantly recognizable; inside, the experience is defined by ambience, scale, and a design language that feels futuristic yet timeless.",
        "This is a lifestyle address where the building itself becomes part of your identity. The atrium, lighting, and fluid geometry create a sense of arrival that feels like stepping into a curated space—more gallery than lobby. For residents, the value goes beyond square footage: it’s the emotional impact of living inside one of Dubai’s most photographed modern icons.",
        "The residences are built for buyers who want central Dubai connectivity without compromising on prestige. Business Bay places you minutes from Downtown and the canal lifestyle, while The Opus elevates daily living with a resort-like atmosphere, wellness facilities, and a hospitality ecosystem that supports a refined rhythm—whether for full-time living, a pied-à-terre, or a high-profile investment.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "The Opus by OMNIYAT Residences Brochure.pdf",
          category: "Overview",
          description: "Official residences brochure (PDF).",
        },
        {
          title: "Download Factsheet",
          url: FACTSHEET_PDF,
          type: "support",
          fileName: "The Opus by OMNIYAT Residences Factsheet.pdf",
          category: "Overview",
          description: "Official factsheet (PDF).",
        },
      ],
      // optional: if your UI supports a video slot, keep it; if not used, it's harmless.
      videoUrl: INSPIRATION_VIDEO,
      imgUrl: INTRO_MAIN,
      imgAlt: "The Opus by OMNIYAT - atrium",
      floatingCards: [
        {
          top: "16%",
          right: "-30px",
          icon: "💰",
          value: "AED 5.124M",
          label: "Starting Price",
        },
        {
          bottom: "32%",
          left: "-40px",
          icon: "✅",
          value: "Ready",
          label: "Status",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🧾",
          value: "100%",
          label: "Payment",
        },
        {
          top: "44%",
          left: "-40px",
          icon: "📍",
          value: "Business Bay",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "The Opus",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          shortLabel: "1 BR",
          bedrooms: 1,
          specs: {
            Unit: "1 Bedroom Residence",
            "Total Area": "1,090 sq.ft",
            "Starting Price": "AED 5,124,299",
            Handover: "Ready",
            "Payment Plan": "100% (Ready)",
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          shortLabel: "2 BR",
          bedrooms: 2,
          specs: {
            Unit: "2 Bedroom Residence",
            "Total Area": "2,569 sq.ft",
            "Starting Price": "AED 12,073,900",
            Handover: "Ready",
            "Payment Plan": "100% (Ready)",
          },
          images: [FP_2BR],
        },
        {
          id: "4br-penthouse",
          title: "4 Bedroom Penthouse",
          shortLabel: "4 BR (PH)",
          bedrooms: 4,
          specs: {
            Unit: "4 Bedroom Penthouse",
            "Total Area": "12,788 sq.ft",
            Handover: "Ready",
            "Payment Plan": "100% (Ready)",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Signature Atrium Experience", icon: "🏛️", color: "#d7b46a" },
        { label: "Resort-Style Pool & Cabanas", icon: "🏊", color: "#d7b46a" },
        { label: "High-End Gym", icon: "💪", color: "#d7b46a" },
        { label: "Spa & Wellness", icon: "🧘", color: "#d7b46a" },
        { label: "Fine Dining Lifestyle", icon: "🍽️", color: "#d7b46a" },
        { label: "Rooftop Lounge Atmosphere", icon: "🌆", color: "#d7b46a" },
        { label: "Prime Central Dubai Access", icon: "🚗", color: "#d7b46a" },
        { label: "Iconic Zaha Hadid Design", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Location",
      projectName: "The Opus",
      address: "Business Bay, Dubai, UAE",
      lat: 25.188685,
      lng: 55.267073,
      zoom: 15,
      googleMapsUrl:
        "https://www.google.com/maps/place/The+Opus+by+OMNIYAT+designed+by+Zaha+Hadid/@25.2225581,55.2925489,13z/data=!4m10!1m2!2m1!1sopus!3m6!1s0x3e5f69cd8f669cbf:0x1086c324a5946077!8m2!3d25.188685!4d55.267073!15sCgRvcHVzWgYiBG9wdXOSARJhcGFydG1lbnRfYnVpbGRpbmfgAQA!16s%2Fg%2F11byfll3h7",
      proximityFeatures: [
        {
          icon: "📍",
          text: "Business Bay — central Dubai business & lifestyle district",
        },
        {
          icon: "🏙️",
          text: "Minutes to Downtown Dubai and the canal promenade",
        },
        {
          icon: "🚗",
          text: "Direct access to major city routes and key destinations",
        },
      ],
    },

    cta: {
      title: "Interested in The Opus?",
      description:
        "Send your details to receive updated availability, pricing, and the official brochure, factsheet, and floor plan files for The Opus by OMNIYAT.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "ذا أوبَس من أمنيات (تصميم زها حديد) | وحدات جاهزة في الخليج التجاري | 1–2 غرفة + بنتهاوس 4 غرف | دفع 100%",
      description:
        "ذا أوبَس من أمنيات، بتصميم زها حديد، يُعد أيقونة معمارية جاهزة في الخليج التجاري. استكشف الصور والكتيّب والفكتشيت والفيديو ومخططات الطوابق لوحدات 1–2 غرفة وبنتهاوس 4 غرف. يبدأ السعر من 5,124,299 درهم مع دفع 100%.",
      keywords:
        "ذا أوبس, أمنيات, زها حديد, الخليج التجاري, دبي, وحدات جاهزة, شقق فاخرة, 1 غرفة 2 غرفة, بنتهاوس, دفع 100%",
      canonical: "/properties/apartments/omniyat/opus-tower",
    },

    project: {
      name: "ذا أوبَس",
      developer: "أمنيات",
      location: "الخليج التجاري، دبي، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "5,124,299 درهم",
      completionDate: "جاهز",
      paymentPlan: "100%",
      type: "شقق",
      units: "1–2 غرفة نوم + بنتهاوس 4 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/omniyat-logo.avif",
      companyName: "أمنيات",
      rating: null,
    },

    intro: {
      title: "عنوان أيقوني بتصميم زها حديد",
      paragraphs: [
        "ذا أوبَس من أمنيات ليس مشروعًا سكنيًا عاديًا—إنه تحفة معمارية عالمية صُمّمت على يد زها حديد وتم تسليمها كمعلم جاهز للحياة في قلب الخليج التجاري. من الخارج، يلفت الانتباه بتكوينه النحتي والفراغ المركزي الدرامي؛ ومن الداخل، تعكس التجربة أجواء فاخرة وإحساسًا بالحجم والهيبة مع لغة تصميم مستقبلية لا تفقد قيمتها مع الزمن.",
        "هذا عنوان تُصبح فيه البناية جزءًا من هويتك. الردهة، الإضاءة، والخطوط الانسيابية تُحوّل لحظة الوصول إلى تجربة فريدة—أقرب إلى معرض فني من مجرد مدخل. قيمة السكن هنا لا تُقاس بالمتر فقط، بل بالأثر والانطباع الذي يمنحه العيش داخل أحد أشهر أيقونات دبي الحديثة.",
        "الوحدات مناسبة لمن يريد مركزية دبي دون التنازل عن الفخامة. موقع الخليج التجاري يضعك على بُعد دقائق من وسط المدينة والقناة، بينما يمنحك ذا أوبَس أسلوب حياة بمستوى منتجع عبر مرافق العافية واللياقة وتجربة ضيافة متكاملة—سواء للسكن الدائم، أو كوحدة مدينة، أو كاستثمار عالي المكانة.",
        "مع دفع 100% وحالة جاهزة، يُعد ذا أوبَس خيارًا مثاليًا لمن يريد ملكية فورية وتجربة فورية—دون انتظار أو مخاطرة إنشاء. من مخططات غرفة واحدة إلى بنتهاوس واسع 4 غرف، كل خيار يوفر حضورًا وخصوصية ولمسة “زها” النادرة التي يصعب تعويضها.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "The Opus by OMNIYAT Residences Brochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي للوحدات (PDF).",
        },
        {
          title: "تحميل الفكتشيت",
          url: FACTSHEET_PDF,
          type: "support",
          fileName: "The Opus by OMNIYAT Residences Factsheet.pdf",
          category: "نظرة عامة",
          description: "الملف التعريفي الرسمي (PDF).",
        },
      ],
      videoUrl: INSPIRATION_VIDEO,
      imgUrl: INTRO_MAIN,
      imgAlt: "ذا أوبَس من أمنيات - الردهة",
      floatingCards: [
        {
          top: "16%",
          right: "-30px",
          icon: "💰",
          value: "5.124M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "32%",
          left: "-40px",
          icon: "✅",
          value: "جاهز",
          label: "الحالة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🧾",
          value: "100%",
          label: "الدفع",
        },
        {
          top: "44%",
          left: "-40px",
          icon: "📍",
          value: "الخليج التجاري",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "The Opus",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة واحدة",
          shortLabel: "1 غرفة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "وحدة سكنية غرفة واحدة",
            "إجمالي المساحة": "1,090 قدم²",
            "السعر الابتدائي": "5,124,299 درهم",
            الحالة: "جاهز",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "100% (جاهز)",
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "شقة غرفتين",
          shortLabel: "2 غرف",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "وحدة سكنية غرفتين",
            "إجمالي المساحة": "2,569 قدم²",
            "السعر الابتدائي": "12,073,900 درهم",
            الحالة: "جاهز",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "100% (جاهز)",
          },
          images: [FP_2BR],
        },
        {
          id: "4br-penthouse",
          title: "بنتهاوس 4 غرف",
          shortLabel: "4 غرف (PH)",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "بنتهاوس 4 غرف",
            "إجمالي المساحة": "12,788 قدم²",
            "السعر الابتدائي": "150,000,000 درهم",
            الحالة: "جاهز",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "100% (جاهز)",
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "تجربة ردهة أيقونية", icon: "🏛️", color: "#d7b46a" },
        { label: "مسبح وكابانا بطابع منتجع", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي فاخر", icon: "💪", color: "#d7b46a" },
        { label: "سبا وعافية", icon: "🧘", color: "#d7b46a" },
        { label: "أسلوب حياة مع مطاعم راقية", icon: "🍽️", color: "#d7b46a" },
        { label: "صالة سطح بأجواء مميزة", icon: "🌆", color: "#d7b46a" },
        { label: "موقع مركزي في دبي", icon: "🚗", color: "#d7b46a" },
        { label: "تصميم زها حديد الأيقوني", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "الموقع",
      projectName: "ذا أوبَس",
      address: "الخليج التجاري، دبي، الإمارات العربية المتحدة",
      lat: 25.188685,
      lng: 55.267073,
      zoom: 15,
      googleMapsUrl:
        "https://www.google.com/maps/place/The+Opus+by+OMNIYAT+designed+by+Zaha+Hadid/@25.2225581,55.2925489,13z/data=!4m10!1m2!2m1!1sopus!3m6!1s0x3e5f69cd8f669cbf:0x1086c324a5946077!8m2!3d25.188685!4d55.267073!15sCgRvcHVzWgYiBG9wdXOSARJhcGFydG1lbnRfYnVpbGRpbmfgAQA!16s%2Fg%2F11byfll3h7",
      proximityFeatures: [
        { icon: "📍", text: "الخليج التجاري — قلب الأعمال ونمط الحياة في دبي" },
        { icon: "🏙️", text: "دقائق إلى وسط مدينة دبي والقناة" },
        { icon: "🚗", text: "سهولة الوصول لأهم وجهات دبي والطرق الرئيسية" },
      ],
    },

    cta: {
      title: "مهتم بذا أوبَس؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي والأسعار وروابط ملفات الكتيّب والفكتشيت ومخططات الطوابق الرسمية لمشروع ذا أوبَس من أمنيات.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default omniyatOpusData;
