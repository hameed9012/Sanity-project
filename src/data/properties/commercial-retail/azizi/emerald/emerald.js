// src/data/properties/commercial/azizi/emerald/emerald.js
// ✅ Blueprint aligned 100%
// ✅ paymentPlan in project + inside every floor plan specs
// ✅ keeps Bunny CDN helper pattern exactly
// ✅ adds specs.Unit + consistent floorPlans.brochureHref

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/emerald";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Single source of truth (Blueprint requirement)
const PAYMENT_PLAN_EN = "40% / 60% or 50% / 50%";
const PAYMENT_PLAN_AR = "40% / 60% or 50% / 50%";

// ✅ Main files (EXACT filenames)
const VIDEO_HERO = cdn("Emerald.mp4");
const FACTSHEET_PDF = cdn("Azizi Emerald Factsheet.pdf");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("DHCC_View03_Wide.jpg"),
  cdn("DHCC_View05_Wider.jpg"),
  cdn("DHCC_View01_Final01.jpg"),
  cdn("DHCC_View02_03.jpg"),
  cdn("DHCC_View04_03.jpg"),
  cdn("DHCC_View06.jpg"),
  cdn("DHCC_View07.jpg"),
  cdn("DHCC_View08.jpg"),
  cdn("360-DHCC-1121-A05.jpg"),
  cdn("360-DHCC-1121-B05.jpg"),
  cdn("360-DHCC-1121-C06.jpg"),
];

// ✅ No dedicated plan images → reuse strong images as placeholders
const RETAIL_MIN_IMAGE = cdn("DHCC_View01_Final01.jpg");
const RETAIL_MAX_IMAGE = cdn("DHCC_View03_Wide.jpg");

export const aziziEmeraldData = {
  en: {
    seo: {
      title:
        "Azizi Emerald (Commercial) | Retail Units in Dubai Healthcare City (DHCC) | Handover Q2 2027",
      description:
        "Azizi Emerald is a commercial retail development by Azizi in Dubai Healthcare City (DHCC), offering retail units with flexible payment plans and handover expected in Q2 2027.",
      keywords:
        "Azizi Emerald, Azizi Developments, DHCC, Dubai Healthcare City, retail units, commercial property Dubai, Q2 2027, payment plan",
      canonical: "/properties/commercial/azizi/emerald",
    },

    project: {
      name: "Azizi Emerald",
      developer: "Azizi Developments",
      location: "Dubai Healthcare City (DHCC), Dubai, UAE",
      status: "Off-Plan)",
      startingPrice: "AED 2,310,000",
      completionDate: "Q2 2027",

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_EN,

      type: "Commercial (Retail)",
      units: "Retail Units",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "COMMERCIAL RETAIL OPPORTUNITY IN DUBAI HEALTHCARE CITY",
      paragraphs: [
        "Azizi Emerald is a commercial retail development located in Dubai Healthcare City (DHCC), positioned for brands seeking a strategic address with strong accessibility.",
        "The project offers a range of retail sizes, from compact units to larger retail spaces suitable for various operators.",
        `Flexible payment options available: ${PAYMENT_PLAN_EN}. Download the official factsheet below to review full specifications and details.`,
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
      ],
      imgUrl: cdn("DHCC_View03_Wide.jpg"),
      imgAlt: "Azizi Emerald commercial views",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "From AED 2,310,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q2 2027",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: PAYMENT_PLAN_EN,
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Azizi Emerald Visuals",
      slides: GALLERY,
      projectTag: "Azizi Emerald (Commercial)",
    },

    // ✅ Blueprint: type + plans[] + brochureHref
    // ✅ Blueprint: each plan has bedrooms + specs.Unit + specs.paymentPlan + features[]
    floorPlans: {
      type: "apartments", // ✅ keep for UI compatibility (same as your working files)
      brochureHref: FACTSHEET_PDF,
      plans: [
        {
          id: "retail-min",
          title: "Retail (Min)",
          bedrooms: 0,
          specs: {
            Unit: "RETAIL UNIT",
            "Total Area": "307 sq.ft",
            "Starting Price": "AED 2,310,000",
            Handover: "Q2 2027",
            paymentPlan: PAYMENT_PLAN_EN,
          },
          images: [RETAIL_MIN_IMAGE],
          features: ["—"],
        },
        {
          id: "retail-max",
          title: "Retail (Max)",
          bedrooms: 0,
          specs: {
            Unit: "RETAIL UNIT",
            "Total Area": "3,601 sq.ft",
            "Starting Price": "AED 22,887,000",
            Handover: "Q2 2027",
            paymentPlan: PAYMENT_PLAN_EN,
          },
          images: [RETAIL_MAX_IMAGE],
          features: ["—"],
        },
      ],
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Prime DHCC Location", icon: "📍", color: "#d7b46a" },
        { label: "Retail Opportunity", icon: "🛍️", color: "#d7b46a" },
        { label: "Flexible Payment Options", icon: "💳", color: "#d7b46a" },
        { label: "Modern Design", icon: "🏢", color: "#d7b46a" },
        { label: "Strong Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Emerald",
      address: "Dubai Healthcare City (DHCC), Dubai, UAE",
      lat: 25.2090112,
      lng: 55.3154071,
      zoom: 15,
      proximityFeatures: [
        { icon: "🏥", text: "Located within Dubai Healthcare City (DHCC)." },
        {
          icon: "🚗",
          text: "Convenient access to major roads and key districts.",
        },
        {
          icon: "🛍️",
          text: "Suitable for retail operators and service brands.",
        },
      ],
    },

    cta: {
      title: "Interested in Azizi Emerald?",
      description:
        "Share your details to receive the latest availability, pricing, and the official factsheet for Azizi Emerald.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "عزيزي إميرالد (تجاري) | وحدات تجزئة في مدينة دبي الطبية (DHCC) | التسليم Q2 2027",
      description:
        "عزيزي إميرالد مشروع تجاري (تجزئة) من عزيزي في مدينة دبي الطبية (DHCC)، يوفّر وحدات تجزئة بخطط دفع مرنة وموعد تسليم Q2 2027.",
      keywords:
        "عزيزي إميرالد, عزيزي, DHCC, مدينة دبي الطبية, وحدات تجزئة, عقارات تجارية دبي, Q2 2027, خطة الدفع",
      canonical: "/properties/commercial/azizi/emerald",
    },

    project: {
      name: "عزيزي إميرالد",
      developer: "عزيزي للتطوير العقاري",
      location: "مدينة دبي الطبية (DHCC)، دبي، الإمارات",
      status: "قيد الإنشاء (تجاري)",
      startingPrice: "2,310,000 درهم",
      completionDate: "Q2 2027",

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN_AR,

      type: "تجاري (تجزئة)",
      units: "وحدات تجزئة",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "فرصة تجارية (تجزئة) في مدينة دبي الطبية",
      paragraphs: [
        "عزيزي إميرالد مشروع تجاري (تجزئة) ضمن مدينة دبي الطبية (DHCC)، مناسب للعلامات التجارية والأعمال التي تبحث عن موقع استراتيجي وسهولة وصول.",
        "يوفّر المشروع مساحات تجزئة متنوعة لتناسب احتياجات مختلفة، من وحدات صغيرة إلى مساحات أكبر.",
        `خيارات دفع مرنة متاحة: ${PAYMENT_PLAN_AR}. يمكنك تحميل ورقة المعلومات الرسمية أدناه للاطلاع على التفاصيل الكاملة.`,
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
      ],
      imgUrl: cdn("DHCC_View03_Wide.jpg"),
      imgAlt: "إطلالات عزيزي إميرالد",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "من 2,310,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q2 2027",
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: PAYMENT_PLAN_AR,
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي إميرالد (تجاري)",
    },

    floorPlans: {
      type: "apartments",
      brochureHref: FACTSHEET_PDF,
      plans: [
        {
          id: "retail-min",
          title: "تجزئة (أصغر مساحة)",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "وحدة تجزئة",
            "إجمالي المساحة": "307 قدم²",
            "السعر الابتدائي": "2,310,000 درهم",
            "موعد التسليم": "Q2 2027",
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [RETAIL_MIN_IMAGE],
          features: ["—"],
        },
        {
          id: "retail-max",
          title: "تجزئة (أكبر مساحة)",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "وحدة تجزئة",
            "إجمالي المساحة": "3,601 قدم²",
            "السعر الابتدائي": "22,887,000 درهم",
            "موعد التسليم": "Q2 2027",
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [RETAIL_MAX_IMAGE],
          features: ["—"],
        },
      ],
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "موقع مميز في DHCC", icon: "📍", color: "#d7b46a" },
        { label: "فرصة تجزئة", icon: "🛍️", color: "#d7b46a" },
        { label: "خيارات دفع مرنة", icon: "💳", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "🏢", color: "#d7b46a" },
        { label: "اتصال ممتاز", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي إميرالد",
      address: "مدينة دبي الطبية (DHCC)، دبي، الإمارات",
      lat: 25.2090112,
      lng: 55.3154071,
      zoom: 15,
      proximityFeatures: [
        { icon: "🏥", text: "ضمن مدينة دبي الطبية (DHCC)." },
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية ومناطق دبي." },
        { icon: "🛍️", text: "مناسب للعلامات التجارية والخدمات." },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي إميرالد؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار ورابط ورقة المعلومات الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};
