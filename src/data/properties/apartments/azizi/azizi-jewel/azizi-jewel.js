// src/data/properties/apartments/azizi/azizi-jewel.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR ONLY
// ✅ Bunny CDN filenames EXACT
// ✅ Azizi Developments
// ✅ Jebel Ali
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/azizi-jewel";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg";

// ================= FILES =================
const FLOORPLANS_PDF = cdn("azizi-jewel-floorplans.pdf");

// Floor Plans
const FP_1BR = cdn("Azizi Jewel 1br floor plan.webp");

// ================= GALLERY =================
const GALLERY = [cdn("1.webp"), cdn("2.webp"), cdn("3.webp"), cdn("4.webp")];

// ================= CONSTANTS =================
const HANDOVER = "Q2 2026";
const PAYMENT_PLAN = "40% / 60%";
const LOCATION_NAME = "Jebel Ali";
const DEVELOPER = "Azizi Developments";

// ======================================================
// DATA
// ======================================================
export const aziziJewelData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Azizi Jewel Apartments for Sale in Jebel Ali",
      description:
        "Azizi Jewel offers 1 bedroom apartments in Jebel Ali. Starting from AED 1.119M with handover Q2 2026.",
      keywords:
        "Azizi Jewel, Jebel Ali apartments, Azizi Developments, Dubai apartments",
      canonical: "/properties/apartments/azizi/azizi-jewel",
    },

    project: {
      name: "Azizi Jewel",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,119,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: GALLERY[1],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "AZIZI JEWEL — MODERN LIVING IN JEBEL ALI",
      paragraphs: [
        "Azizi Jewel is a contemporary residential development by Azizi Developments, located in the growing district of Jebel Ali.",
        "The project offers thoughtfully designed 1-bedroom apartments, ideal for professionals and investors seeking long-term value.",
      ],
      brochures: [
        {
          title: "Download Floor Plans",
          url: FLOORPLANS_PDF,
          type: "main",
        },
      ],
      imgUrl: GALLERY[3],
      imgAlt: "Azizi Jewel Jebel Ali",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💎",
          value: "Azizi Jewel",
          label: "Signature Living",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 1.11M",
          label: "Starting Price",
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
      projectTag: "Azizi Jewel",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "694.06 sq.ft",
            "Starting Price": "AED 1,119,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Modern Lobby", icon: "🏨", color: "#c9a24d" },
        { label: "Fitness Facilities", icon: "🏋️", color: "#c9a24d" },
        { label: "Retail Access", icon: "🛍️", color: "#c9a24d" },
        { label: "Covered Parking", icon: "🚗", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Jewel",
      address: LOCATION_NAME,
      lat: 25.018136,
      lng: 55.127515,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚇", text: "Close to major transport links" },
        { icon: "🏙️", text: "Near commercial & logistics hubs" },
        { icon: "✈️", text: "Easy access to Dubai Airport & ports" },
      ],
    },

    cta: {
      title: "Own a Smart Investment in Jebel Ali",
      description:
        "Request full availability, pricing, and floor plans for Azizi Jewel.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Floor Plans", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title: "عزيزي جول | شقق غرفة نوم واحدة للبيع في جبل علي دبي",
      description:
        "عزيزي جول من عزيزي للتطوير العقاري يوفر شقق غرفة نوم واحدة في جبل علي. تبدأ الأسعار من 1,119,000 درهم مع التسليم في الربع الثاني 2026 وخطة سداد 40/60.",
      keywords: "عزيزي جول، شقق جبل علي، عزيزي للتطوير العقاري، شقق دبي",
      canonical: "/properties/apartments/azizi/azizi-jewel",
    },

    project: {
      name: "عزيزي جول",
      developer: "عزيزي للتطوير العقاري",
      location: "جبل علي",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,119,000 درهم",
      completionDate: "الربع الثاني 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "شقق غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: GALLERY[1], // keep same style as EN
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "عزيزي جول — أسلوب حياة عصري في جبل علي",
      paragraphs: [
        "عزيزي جول هو مشروع سكني عصري من عزيزي للتطوير العقاري في منطقة جبل علي المتنامية.",
        "يوفر المشروع شقق غرفة نوم واحدة بتصميم عملي ومساحات مدروسة، مناسبة للسكن والاستثمار على المدى الطويل.",
      ],
      brochures: [
        {
          title: "تحميل مخططات الوحدات",
          url: FLOORPLANS_PDF,
          type: "main",
        },
      ],
      imgUrl: GALLERY[3],
      imgAlt: "عزيزي جول جبل علي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💎",
          value: "عزيزي جول",
          label: "إقامة مميزة",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "1.11M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "الربع الثاني 2026",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Azizi Jewel",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br", // ✅ IMPORTANT (some UIs rely on id)
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "694.06 قدم²",
            "السعر الابتدائي": "1,119,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الثاني 2026",
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "ردهة حديثة", icon: "🏨", color: "#c9a24d" },
        { label: "مرافق لياقة بدنية", icon: "🏋️", color: "#c9a24d" },
        { label: "محلات وخدمات", icon: "🛍️", color: "#c9a24d" },
        { label: "مواقف سيارات مغطاة", icon: "🚗", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي جول",
      address: "جبل علي",
      lat: 25.018136,
      lng: 55.127515,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚇", text: "قريب من وسائل النقل والطرق الرئيسية." },
        { icon: "🏙️", text: "بالقرب من المراكز التجارية واللوجستية." },
        { icon: "✈️", text: "سهولة الوصول إلى المطار والموانئ." },
      ],
    },

    cta: {
      title: "امتلك فرصة استثمارية في جبل علي",
      description:
        "اطلب التوافر الكامل والأسعار ومخططات الوحدات لمشروع عزيزي جول.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل المخططات", action: "download-brochure" },
      ],
    },
  },
};

export default aziziJewelData;
