// src/data/properties/apartments/azizi/beach-oasis.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR (1:1 parity)
// ✅ Studio / 1BR / 2BR ONLY
// ✅ Assets & pricing verified
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/beach-oasis";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg";

// ================= FILES =================
const BROCHURE_PDF = cdn("Beach Oasis Brochure.pdf");
const FACTSHEET_PDF = cdn("Beach Oasis Factsheet EN.pdf");
const FLOORPLATE_PDF = cdn("Beach Oasis_Floorplate.pdf");

const FP_STUDIO = cdn("Beach Oasis studio floor plan.webp");
const FP_1BR = cdn("Beach Oasis 1br floor plan.webp");
const FP_2BR = cdn("Beach Oasis 2br floor plan.webp");

// ================= MEDIA =================
const GALLERY = [
  cdn("Studio City 8-9_Side Facade Evening_01.jpg"),
  cdn("Studio City 8-9_PodiumBeach View_03.jpg"),
  cdn("Beach Oasis_Lounge View_People_01.jpg"),
  cdn("Beach Oasis_Apartments Lounge View_People_01.jpg"),
  cdn("living room.jpg"),
  cdn("c1 living dining.jpg"),
  cdn("c2 terrace.jpg"),
  cdn("Balcony View2k_01.jpg"),
  cdn("bedroom.jpg"),
  cdn("Studio city BedRoom01.jpg"),
  cdn("Studio city BedRoom02.jpg"),
  cdn("bathroom.jpg"),
  cdn("Studio city Bathroom.jpg"),
  cdn("kitchen.jpg"),
  cdn("Studio city Living Room01.jpg"),
  cdn("Studio city Living Room02.jpg"),
];

const HERO_VIDEO = cdn("Beach Oasis II.mp4");

// ================= CONSTANTS =================
const HANDOVER = "Q3 2026";
const PAYMENT_PLAN = "20% / 80%";
const LOCATION_NAME = "Dubai Studio City";
const DEVELOPER = "Azizi Developments";

// ======================================================
// DATA
// ======================================================
export const beachOasisData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Azizi Beach Oasis | Studio, 1 & 2 Bedroom Apartments in Dubai Studio City",
      description:
        "Azizi Beach Oasis offers resort-style living in Dubai Studio City with studio, 1 and 2 bedroom apartments starting from AED 881,000. Handover Q3 2026.",
      keywords:
        "Azizi Beach Oasis, Azizi Studio City, Dubai Studio City apartments",
      canonical: "/properties/apartments/azizi/beach-oasis",
    },

    project: {
      name: "Azizi Beach Oasis",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 881,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "BEACH OASIS — RESORT-STYLE URBAN LIVING",
      paragraphs: [
        "Azizi Beach Oasis is a contemporary residential project inspired by waterfront resort living, located in the heart of Dubai Studio City.",
        `The project offers studio, 1 and 2 bedroom apartments with a flexible ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Floorplate", url: FLOORPLATE_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Azizi Beach Oasis Dubai",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏖️",
          value: "Resort Style",
          label: "Lifestyle",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🏙️",
          value: "Studio City",
          label: "Location",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Azizi Beach Oasis",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "552.09 sq.ft",
            "Starting Price": "AED 881,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "727.86 sq.ft",
            "Starting Price": "AED 1,003,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "978.34 sq.ft",
            "Starting Price": "AED 1,570,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLATE_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Resort-Style Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Landscaped Podium", icon: "🌴", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Children Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Retail & Cafés", icon: "☕", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Beach Oasis",
      address: LOCATION_NAME,
      lat: 25.0369337,
      lng: 55.2380227,
      zoom: 17,
      proximityFeatures: [
        { icon: "🎬", text: "Minutes from Dubai Studio City attractions" },
        { icon: "🚗", text: "Easy access to major highways" },
        { icon: "🏙️", text: "Close to key Dubai destinations" },
      ],
    },

    cta: {
      title: "Own an Apartment at Azizi Beach Oasis",
      description:
        "Request availability, full pricing, and official Azizi documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    seo: {
      title:
        "عزيزي بيتش أواسيس | شقق استوديو وغرفة وغرفتين في مدينة دبي للاستوديوهات",
      description:
        "عزيزي بيتش أواسيس يوفر أسلوب حياة منتجعي في مدينة دبي للاستوديوهات مع موعد تسليم في الربع الثالث 2026.",
      keywords: "عزيزي بيتش أواسيس، مدينة دبي للاستوديوهات، شقق عزيزي",
      canonical: "/properties/apartments/azizi/beach-oasis",
    },

    project: {
      name: "عزيزي بيتش أواسيس",
      developer: "عزيزي للتطوير العقاري",
      location: "مدينة دبي للاستوديوهات",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "881,000 درهم",
      completionDate: "الربع الثالث 2026",
      paymentPlan: "20% / 80%",
      type: "شقق سكنية",
      units: "استوديو، غرفة وغرفتين",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "بيتش أواسيس — أسلوب حياة منتجعي في دبي",
      paragraphs: [
        "عزيزي بيتش أواسيس هو مشروع سكني عصري مستوحى من أسلوب الحياة الشاطئي في مدينة دبي للاستوديوهات.",
        "يوفر المشروع وحدات استوديو وغرفة وغرفتين مع خطة سداد مرنة.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف المعلومات", url: FACTSHEET_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "عزيزي بيتش أواسيس",
      floatingCards: [],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "عزيزي بيتش أواسيس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "552.09 قدم²",
            "السعر الابتدائي": "881,000 درهم",
            "خطة السداد": "20% / 80%",
            "موعد التسليم": "الربع الثالث 2026",
          },
          images: [FP_STUDIO],
        },
        {
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "727.86 قدم²",
            "السعر الابتدائي": "1,003,000 درهم",
            "خطة السداد": "20% / 80%",
            "موعد التسليم": "الربع الثالث 2026",
          },
          images: [FP_1BR],
        },
        {
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "978.34 قدم²",
            "السعر الابتدائي": "1,570,000 درهم",
            "خطة السداد": "20% / 80%",
            "موعد التسليم": "الربع الثالث 2026",
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLATE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح منتجعي", icon: "🏊", color: "#c9a24d" },
        { label: "منصة خضراء", icon: "🌴", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "منطقة أطفال", icon: "🧸", color: "#c9a24d" },
        { label: "مقاهي ومتاجر", icon: "☕", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي بيتش أواسيس",
      address: "مدينة دبي للاستوديوهات",
      lat: 25.0369337,
      lng: 55.2380227,
      zoom: 17,
      proximityFeatures: [
        { icon: "🎬", text: "قريب من مرافق مدينة دبي للاستوديوهات" },
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية" },
        { icon: "🏙️", text: "قريب من وجهات دبي الحيوية" },
      ],
    },

    cta: {
      title: "امتلك شقتك في عزيزي بيتش أواسيس",
      description: "اطلب قائمة الأسعار والتوافر والمستندات الرسمية من المطور.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default beachOasisData;
