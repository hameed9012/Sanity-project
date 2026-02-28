// src/data/properties/apartments/azizi/creek-views-1/creek-views-1.js
// ✅ Uses EXACT Bunny filenames from your screenshot
// ✅ Hero background is the project video
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ AR is 100% compatible (same structure + type="apartments" + Arabic specs keys)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/creek-views-1";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames from your screenshot)
const VIDEO_HERO = cdn("Creek Views.mp4");
const FACTSHEET_PDF = cdn("Creek Views Factsheet.pdf");
const BROCHURE_PDF = cdn("New Creek Views Brochure.pdf");

// ✅ Gallery images (EXACT filenames from your screenshot)
const GALLERY = [
  cdn("Creek Views10.jpg"),
  cdn("Creek Views11 (1).jpg"),
  cdn("Creek Views12.jpg"),
  cdn("Creek Views7 (1).jpg"),
  cdn("Creek Views8 (1).jpg"),
  cdn("Creek Views9.jpg"),
  cdn("Creek Views 2 - Creek shot 01 6000px.jpg"),
  cdn("Creek Views2 - Creek shot 02 6000px_lighter.jpg"),
  cdn("Creek Views2 - OverView Shot 01 6000px.jpg"),
  cdn("AZIZI_Farhad_CGI10_03.jpg"),
  cdn("AZIZI_Farhad_CGI14_03.jpg"),
  cdn("AZIZI_Farhad_CGI15_02c_without CreekTower.jpg"),
  cdn("CG15_POOL_Revision01.jpg"),
  cdn("Creek views Living room.jpg"),
  cdn("Creek views Bedroom.jpg"),
  cdn("Retail view_Low Ries.jpg"),
  cdn("DHCC_Farhad_ Overview_01.jpg"),
  cdn("Creek Views handover - 00.jpg"),
  cdn("Creek Views handover - 15.jpg"),
];

// ✅ (Studios only) We'll reuse a clean studio visual as "floor plan image"
// If later you upload real plan images, replace this with those exact plan filenames.
const STUDIO_PLAN_IMAGE = cdn("studio-creek-views-1.png");

export const aziziCreekViews1Data = {
  en: {
    seo: {
      title:
        "Creek Views 1 (Farhad) by Azizi | Studio Apartments in Dubai Healthcare City",
      description:
        "Creek Views 1 (Farhad) by Azizi Developments in Dubai Healthcare City offers studio apartments with premium lifestyle features and excellent connectivity.",
      keywords:
        "Creek Views 1, Farhad, Azizi Developments, Dubai Healthcare City, DHCC, studio apartment, Dubai",
      canonical: "/properties/apartments/azizi/creek-views-1",
    },

    project: {
      name: "Creek Views 1 (Farhad)",
      developer: "Azizi Developments",
      location: "Dubai Healthcare City (DHCC), Dubai, UAE",
      status: "Secondary",
      startingPrice: "AED 1,183,000", // ✅ from your line
      completionDate: "Not Available", // ✅ from your line
      paymentPlan: "Not Available", // ✅ from your line
      type: "Apartments",
      units: "Studios",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "STUDIO LIVING IN THE HEART OF DUBAI HEALTHCARE CITY",
      paragraphs: [
        "Creek Views 1 (Farhad) is located in Dubai Healthcare City (DHCC), offering studio apartments in a highly connected area close to Dubai Creek and key city destinations.",
        "The project blends modern living with lifestyle convenience, featuring thoughtful interiors, community amenities, and easy access to nearby services and retail.",
        "For full specifications and details, download the official factsheet and brochure below.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        { title: "Download Brochure", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: cdn("AZIZI_Farhad_CGI10_03.jpg"),
      imgAlt: "Creek Views 1 (Farhad) exterior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,183,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "466 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "DHCC",
          label: "Dubai Healthcare City",
        },
      ],
    },

    gallery: {
      title: "Creek Views 1 Visuals",
      slides: GALLERY,
      projectTag: "Creek Views 1 (Farhad)",
    },

    // ✅ FloorPlans: ONLY the 4 fields you agreed on
    floorPlans: {
      type: "apartments", // ✅ keep same in EN + AR for compatibility
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "466 sq.ft",
            "Starting Price": "AED 1,183,000",
            Handover: "Ready",
            "Payment Plan": "Not Available",
          },
          images: [STUDIO_PLAN_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Retail & Lifestyle Access", icon: "🛍️", color: "#d7b46a" },
        { label: "Modern Lobby & Interiors", icon: "🏢", color: "#d7b46a" },
        { label: "Easy City Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Creek Views 1 (Farhad)",
      address: "Dubai Healthcare City (DHCC), Dubai, UAE",
      // ✅ from your Google Maps link
      lat: 25.2090112,
      lng: 55.3154071,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏥", text: "Located within Dubai Healthcare City (DHCC)." },
        {
          icon: "🌊",
          text: "Near Dubai Creek and key lifestyle destinations.",
        },
        {
          icon: "🚇",
          text: "Convenient connectivity to major roads and transport.",
        },
      ],
    },

    cta: {
      title: "Interested in Creek Views 1?",
      description:
        "Share your details to receive the latest availability and the full official factsheet for Creek Views 1 (Farhad).",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "كريك فيوز 1 (فرهاد) من عزيزي | استوديوهات في مدينة دبي الطبية",
      description:
        "كريك فيوز 1 (فرهاد) من عزيزي في مدينة دبي الطبية (DHCC) يوفّر شقق استوديو بموقع مميز واتصال ممتاز بأهم مناطق دبي.",
      keywords:
        "كريك فيوز 1, فرهاد, عزيزي, مدينة دبي الطبية, DHCC, استوديو, شقق دبي",
      canonical: "/properties/apartments/azizi/creek-views-1",
    },

    project: {
      name: "كريك فيوز 1 (فرهاد)",
      developer: "عزيزي للتطوير العقاري",
      location: "مدينة دبي الطبية (DHCC)، دبي، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "1,183,000 درهم",
      completionDate: "غير متوفر",
      paymentPlan: "غير متوفر",
      type: "شقق سكنية",
      units: "استوديو فقط",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "استوديوهات في قلب مدينة دبي الطبية",
      paragraphs: [
        "يقع مشروع كريك فيوز 1 (فرهاد) في مدينة دبي الطبية (DHCC)، ويقدّم شقق استوديو بموقع عملي قريب من خور دبي ومع سهولة الوصول إلى أهم وجهات المدينة.",
        "يجمع المشروع بين أسلوب الحياة العصري والراحة اليومية، مع مرافق وخدمات قريبة ومساحات داخلية مناسبة للمعيشة الحديثة.",
        "للاطلاع على التفاصيل الرسمية الكاملة، يمكنك تحميل ورقة المعلومات والكتيّب من الروابط أدناه.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: cdn("AZIZI_Farhad_CGI10_03.jpg"),
      imgAlt: "كريك فيوز 1 (فرهاد) - واجهة خارجية",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,183,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "466 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "DHCC",
          label: "مدينة دبي الطبية",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "كريك فيوز 1 (فرهاد)",
    },

    // ✅ AR FloorPlans: same structure + type="apartments" + Arabic keys (like your Milan)
    floorPlans: {
      type: "apartments", // ✅ يظل ثابتًا للتوافق
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "466 قدم مربع",
            "السعر الابتدائي": "1,183,000 درهم",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "غير متوفر",
          },
          images: [STUDIO_PLAN_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "قرب خدمات ومتاجر", icon: "🛍️", color: "#d7b46a" },
        { label: "تصميم حديث", icon: "🏢", color: "#d7b46a" },
        { label: "سهولة تنقل واتصال", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كريك فيوز 1 (فرهاد)",
      address: "مدينة دبي الطبية (DHCC)، دبي، الإمارات",
      lat: 25.2090112,
      lng: 55.3154071,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏥", text: "ضمن مدينة دبي الطبية (DHCC)." },
        { icon: "🌊", text: "بالقرب من خور دبي ومناطق حيوية." },
        { icon: "🚇", text: "اتصال ممتاز بالطرق الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم بمشروع كريك فيوز 1؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر ورابط ورقة المعلومات الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};
