// src/data/properties/apartments/azizi/creek-views-2/creek-views-2.js
// ✅ Uses EXACT Bunny filenames from your screenshot
// ✅ Same structure as creek-views-1 (EN + AR 100% working)
// ✅ FloorPlans contain ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Correct Google Maps coordinates from your link

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/creek-views-2";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames from your screenshot)
const FACTSHEET_PDF = cdn("Creek Views Factsheet.pdf");

// ✅ Gallery images (EXACT filenames from your screenshot)
const GALLERY = [
  cdn("Creek Views II.jpg"),
  cdn("Dhcc_Creek Views 2_01.jpg"),
  cdn("DHCC_Overview_01.jpg"),
  cdn("Creek Views 2_Side shot 2.jpg"),
  cdn("CreekViews2_Sideshot01.jpg"),
  cdn("Creek Views2 - OverView Shot 02 6000px.jpg"),
  cdn("Azizi_CreekViews2_CreekShot01.jpg"),
  cdn("Panorama.jpg"),
  cdn("Pool View .jpg"),
  cdn("CG15_POOL_Revision01.jpg"),
  cdn("CGI10 03_Balcony_Revision.jpg"),
  cdn("1.jpg"),
  cdn("2.jpg"),
  cdn("3.jpg"),
  cdn("4 copy.jpg"),
];

// ✅ (No floor plan images shown in your list)
// We'll reuse clean images as "plan visuals" until you upload real floor plans.
const PLAN_1BR_IMAGE = cdn("1br-creek-views-2.png");
const PLAN_2BR_IMAGE = cdn("2br-creek-views-2.png");

export const aziziCreekViews2Data = {
  en: {
    seo: {
      title:
        "Creek Views 2 (Fawad) by Azizi | 1–2 Bedroom Apartments in Dubai Healthcare City",
      description:
        "Creek Views 2 (Fawad) by Azizi Developments in Dubai Healthcare City (DHCC) offers 1 and 2-bedroom apartments with modern living and strong connectivity.",
      keywords:
        "Creek Views 2, Fawad, Azizi Developments, Dubai Healthcare City, DHCC, 1 bedroom, 2 bedroom, apartment, Dubai",
      canonical: "/properties/apartments/azizi/creek-views-2",
    },

    project: {
      name: "Creek Views 2 (Fawad)",
      developer: "Azizi Developments",
      location: "Dubai Healthcare City (DHCC), Dubai, UAE",
      status: "Secondary",
      startingPrice: "AED 1,711,000", // ✅ from your data line
      completionDate: "Not Available",
      paymentPlan: "Not Available",
      type: "Apartments",
      units: "1 & 2 Bedroom Apartments",
    },

    hero: {
      // ✅ No video in your creek-views-2 folder list, so we use a strong hero image.
      // If you upload a video later, replace this with cdn("YOUR_VIDEO.mp4")
      backgroundUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/creek-views-2/CG15_POOL_Revision01.jpg`,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "MODERN LIVING IN DUBAI HEALTHCARE CITY",
      paragraphs: [
        "Creek Views 2 (Fawad) is located in Dubai Healthcare City (DHCC), offering 1 and 2-bedroom apartments in a highly connected area close to Dubai Creek and key city destinations.",
        "The project combines modern design with lifestyle convenience, featuring thoughtful interiors, community amenities, and easy access to nearby services and retail.",
        "For full specifications and details, download the official factsheet below.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
      ],
      imgUrl: cdn("Azizi_CreekViews2_CreekShot01.jpg"),
      imgAlt: "Creek Views 2 exterior view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,711,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "850 sq.ft",
          label: "From Area",
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
      title: "Creek Views 2 Visuals",
      slides: GALLERY,
      projectTag: "Creek Views 2 (Fawad)",
    },

    // ✅ FloorPlans: ONLY the 4 fields you agreed on
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom (1BHK)",
          bedrooms: 1,
          specs: {
            "Total Area": "850 sq.ft",
            "Starting Price": "AED 1,711,000",
            Handover: "Ready",
            "Payment Plan": "Not Available",
          },
          images: [PLAN_1BR_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom (2BHK)",
          bedrooms: 2,
          specs: {
            "Total Area": "1,265 sq.ft",
            "Starting Price": "AED 2,029,000",
            Handover: "Ready",
            "Payment Plan": "Not Available",
          },
          images: [PLAN_2BR_IMAGE],
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
        { label: "Balcony Views", icon: "🌇", color: "#d7b46a" },
        { label: "Retail & Lifestyle Access", icon: "🛍️", color: "#d7b46a" },
        { label: "Easy City Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Creek Views 2 (Fawad)",
      address: "Dubai Healthcare City (DHCC), Dubai, UAE",
      // ✅ from your Google Maps link
      lat: 25.2087858,
      lng: 55.3156408,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏥", text: "Located within Dubai Healthcare City (DHCC)." },
        {
          icon: "🌊",
          text: "Close to Dubai Creek and major lifestyle destinations.",
        },
        {
          icon: "🚗",
          text: "Convenient connectivity to main roads and key districts.",
        },
      ],
    },

    cta: {
      title: "Interested in Creek Views 2?",
      description:
        "Share your details to receive the latest availability and the full official factsheet for Creek Views 2 (Fawad).",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "كريك فيوز 2 (فؤاد) من عزيزي | شقق 1–2 غرفة في مدينة دبي الطبية",
      description:
        "كريك فيوز 2 (فؤاد) من عزيزي في مدينة دبي الطبية (DHCC) يوفّر شقق غرفة وغرفتين نوم بموقع مميز واتصال ممتاز بأهم مناطق دبي.",
      keywords:
        "كريك فيوز 2, فؤاد, عزيزي, مدينة دبي الطبية, DHCC, شقق غرفة, شقق غرفتين, دبي",
      canonical: "/properties/apartments/azizi/creek-views-2",
    },

    project: {
      name: "كريك فيوز 2 (فؤاد)",
      developer: "عزيزي للتطوير العقاري",
      location: "مدينة دبي الطبية (DHCC)، دبي، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "1,711,000 درهم",
      completionDate: "غير متوفر",
      paymentPlan: "غير متوفر",
      type: "شقق سكنية",
      units: "شقق غرفة وغرفتين نوم",
    },

    hero: {
      backgroundUrl: cdn("Creek Views II.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "سكن عصري في مدينة دبي الطبية",
      paragraphs: [
        "يقع مشروع كريك فيوز 2 (فؤاد) في مدينة دبي الطبية (DHCC)، ويوفّر شقق 1 و2 غرفة نوم ضمن موقع عملي قريب من خور دبي ومع سهولة الوصول إلى الوجهات الحيوية.",
        "يجمع المشروع بين التصميم العصري والراحة اليومية، مع مرافق وخدمات قريبة وإطلالات جميلة ومساحات مناسبة للحياة الحديثة.",
        "للاطلاع على التفاصيل الرسمية، يمكنك تحميل ورقة المعلومات من الرابط أدناه.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
      ],
      imgUrl: cdn("Azizi_CreekViews2_CreekShot01.jpg"),
      imgAlt: "واجهة كريك فيوز 2",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,711,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "850 قدم²",
          label: "تبدأ المساحة من",
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
      projectTag: "كريك فيوز 2 (فؤاد)",
    },

    // ✅ AR FloorPlans: same structure + type="apartments" + Arabic keys
    floorPlans: {
      type: "شقق سكنية",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة (1BHK)",
          bedrooms: 1,
          specs: {
            "المساحة الإجمالية": "850 قدم²",
            "السعر الابتدائي": "1,711,000 درهم",
            "موعد التسليم": "جاهزة للتسليم",
            "خطة الدفع": "يرجى التواصل للمزيد من التفاصيل",
          },
          images: [PLAN_1BR_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتي نوم (2BHK)",
          bedrooms: 2,
          specs: {
            "المساحة الإجمالية": "1,265 قدم²",
            "السعر الابتدائي": "2,029,000 درهم",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "يرجى التواصل للمزيد من التفاصيل",
          },
          images: [PLAN_2BR_IMAGE],
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
        { label: "إطلالات من الشرفة", icon: "🌇", color: "#d7b46a" },
        { label: "قرب خدمات ومتاجر", icon: "🛍️", color: "#d7b46a" },
        { label: "سهولة تنقل واتصال", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كريك فيوز 2 (فؤاد)",
      address: "مدينة دبي الطبية (DHCC)، دبي، الإمارات",
      lat: 25.2087858,
      lng: 55.3156408,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏥", text: "ضمن مدينة دبي الطبية (DHCC)." },
        { icon: "🌊", text: "بالقرب من خور دبي ومناطق حيوية." },
        { icon: "🚗", text: "اتصال ممتاز بالطرق الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم بمشروع كريك فيوز 2؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر ورابط ورقة المعلومات الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};
