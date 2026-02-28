// src/data/properties/apartments/azizi/david/david.js
// ✅ Uses EXACT Bunny filenames from your screenshot
// ✅ Same structure as creek-views-1 / creek-views-2 (EN + AR 100% working)
// ✅ Hero background is the project video (Azizi David_16x9.mp4)
// ✅ FloorPlans contain ONLY: Total Area / Starting Price / Handover / Payment Plan (as agreed)
// ✅ Includes both EN Factsheet + AR Factsheet + Brochure + Payment Plan + Map PDF
// ✅ Location area: Al Jaddaf & DHCC (coords set near Al Jaddaf; update if you share exact pin)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/david";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames from your screenshot)
const VIDEO_HERO = cdn("Azizi David_16x9.mp4");
const FACTSHEET_EN = cdn("Azizi David Factsheet.pdf");
const FACTSHEET_AR = cdn("Azizi David Arabic Factsheet.pdf");
const BROCHURE_PDF = cdn("Azizi David Brochure.pdf");
const PAYMENT_PLAN_PDF = cdn("Payment Plan.pdf");
const MAP_PDF = cdn("Azizi David_Al Jaddaf Map.pdf");

// ✅ Gallery images (EXACT filenames from your screenshot)
const GALLERY = [
  cdn("Jadaf Res Plot 12&13_BuidingView_Option01.jpg"),
  cdn("Jadaf Res Plot 12&13_BuidingView_Option02.jpg"),
  cdn("Jadaf Res Plot 12&13_Front View Day_Landscape_With AI.jpg"),
  cdn("Jadaf Res Plot 12&13_Front View Night_06.jpg"),
  cdn("Jadaf Res Plot 12&13_back side DAY 01.jpg"),
  cdn("Jadaf Res Plot 12&13_back side NIGHT 01.jpg"),
  cdn("Jadaf Res Plot 12&13_balcony facade view.jpg"),
  cdn("Jadaf Res Plot 12&13_Entrance view.jpg"),
  cdn("Jadaf Res Plot 12&13_CreekView.jpg"),
  cdn("Jadaf Res Plot 12&13_Pool Perspective view.jpg"),
  cdn("Jadaf Res Plot 12&13_Pool view.jpg"),
  cdn("Jadaf Res Plot 12&13_Top Pool view.jpg"),
  cdn("Jadaf Res Plot 12&13_Sky View 01.jpg"),
  cdn("Jadaf Res Plot 12&13_AdditionalView02.jpg"),
];

// ✅ Use nice relevant images as "plan visuals" until you upload actual floor plan images
const PLAN_STUDIO_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/david/david%20studio.png`;
const PLAN_1BR_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/david/david%201br.png`;
const PLAN_2BR_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/david/david%202br.png`;

export const aziziDavidData = {
  en: {
    seo: {
      title:
        "Azizi David | Studios to 2 Bedroom Apartments in Al Jaddaf, Dubai | Handover Q4 2027",
      description:
        "Azizi David by Azizi Developments offers studios, 1-bedroom, and 2-bedroom apartments in Al Jaddaf, Dubai, with flexible payment plans and handover scheduled for Q4 2027.",
      keywords:
        "Azizi David, Azizi Developments, Al Jaddaf apartments, DHCC, Dubai apartments, studio, 1 bedroom, 2 bedroom, Q4 2027, payment plan",
      canonical: "/properties/apartments/azizi/david",
    },

    project: {
      name: "Azizi David",
      developer: "Azizi Developments",
      location: "Al Jaddaf, Dubai (Near DHCC), UAE",
      status: "Off-Plan",
      startingPrice: "AED 826,000",
      completionDate: "Q4 2027",
      paymentPlan: "70% / 30% or 50% / 50%",
      type: "Apartments",
      units: "Studios, 1 & 2 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "MODERN LIVING IN AL JADDAF WITH STRONG CONNECTIVITY",
      paragraphs: [
        "Azizi David is a contemporary residential development located in Al Jaddaf, offering studios, 1-bedroom, and 2-bedroom apartments designed for modern urban living.",
        "The project benefits from proximity to Dubai Healthcare City (DHCC) and major city landmarks, combining lifestyle convenience with strong accessibility.",
        "Download the official factsheets, brochure, payment plan, and map from the documents below.",
      ],
      brochures: [
        { title: "Download Factsheet (EN)", url: FACTSHEET_EN, type: "main" },
        {
          title: "Download Factsheet (AR)",
          url: FACTSHEET_AR,
          type: "secondary",
        },
        { title: "Download Brochure", url: BROCHURE_PDF, type: "secondary" },
        { title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "secondary" },
        { title: "Location Map", url: MAP_PDF, type: "secondary" },
      ],
      imgUrl: cdn("Jadaf Res Plot 12&13_BuidingView_Option01.jpg"),
      imgAlt: "Azizi David building view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 826,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Al Jaddaf",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Azizi David Visuals",
      slides: GALLERY,
      projectTag: "Azizi David",
    },

    // ✅ FloorPlans: ONLY the 4 agreed fields
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "334 sq.ft",
            "Starting Price": "AED 826,000",
            Handover: "Q4 2027",
            "Payment Plan": "70% / 30% or 50% / 50%",
          },
          images: [PLAN_STUDIO_IMAGE],
          features: ["—"],
        },

        {
          id: "1br",
          title: "1 Bedroom (1BHK)",
          bedrooms: 1,
          specs: {
            "Total Area": "674 sq.ft",
            "Starting Price": "AED 1,382,000",
            Handover: "Q4 2027",
            "Payment Plan": "70% / 30% or 50% / 50%",
          },
          images: [PLAN_1BR_IMAGE],
          features: ["—"],
        },

        {
          id: "2br",
          title: "2 Bedroom (2BHK)",
          bedrooms: 2,
          specs: {
            "Total Area": "843 sq.ft",
            "Starting Price": "AED 2,126,000",
            Handover: "Q4 2027",
            "Payment Plan": "70% / 30% or 50% / 50%",
          },
          images: [PLAN_2BR_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Modern Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Balcony / City Views", icon: "🌇", color: "#d7b46a" },
        { label: "Easy Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi David",
      address: "Al Jaddaf, Dubai, UAE",
      lat: 25.2135278,
      lng: 55.3298056,
      zoom: 17,
      proximityFeatures: [
        { icon: "📍", text: "Located in Al Jaddaf, Dubai." },
        { icon: "🏥", text: "Close to Dubai Healthcare City (DHCC)." },
        { icon: "🌊", text: "Easy access to Dubai Creek and key districts." },
        {
          icon: "🛣️",
          text: "Well connected to major roads and city landmarks.",
        },
      ],
    },

    cta: {
      title: "Interested in Azizi David?",
      description:
        "Share your details to receive the latest availability, pricing, and all official documents for Azizi David.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "عزيزي ديفيد | استوديو حتى غرفتين في الجداف، دبي | التسليم Q4 2027",
      description:
        "عزيزي ديفيد من عزيزي يوفّر شقق استوديو وغرفة وغرفتين نوم في الجداف بدبي، مع خطط دفع مرنة وموعد تسليم Q4 2027.",
      keywords:
        "عزيزي ديفيد, عزيزي, الجداف, DHCC, شقق دبي, استوديو, غرفة, غرفتين, Q4 2027, خطة دفع",
      canonical: "/properties/apartments/azizi/david",
    },

    project: {
      name: "عزيزي ديفيد",
      developer: "عزيزي للتطوير العقاري",
      location: "الجداف، دبي (بالقرب من DHCC)",
      status: "قيد الإنشاء",
      startingPrice: "826,000 درهم",
      completionDate: "Q4 2027",
      paymentPlan: "70/30 أو 50/50",
      type: "شقق سكنية",
      units: "استوديو + غرفة + غرفتين نوم",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "سكن عصري في الجداف مع اتصال ممتاز",
      paragraphs: [
        "عزيزي ديفيد مشروع سكني حديث في منطقة الجداف يقدم وحدات استوديو وشقق غرفة وغرفتين نوم بتصميم عملي مناسب للحياة العصرية.",
        "يتميز المشروع بقربه من مدينة دبي الطبية (DHCC) وسهولة الوصول إلى المعالم الرئيسية في دبي.",
        "يمكنك تحميل ورقة المعلومات (إنجليزي/عربي) والكتيّب وخطة الدفع وخريطة الموقع من الروابط أدناه.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات (EN)", url: FACTSHEET_EN, type: "main" },
        {
          title: "تحميل ورقة المعلومات (AR)",
          url: FACTSHEET_AR,
          type: "secondary",
        },
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "secondary" },
        { title: "خطة الدفع", url: PAYMENT_PLAN_PDF, type: "secondary" },
        { title: "خريطة الموقع", url: MAP_PDF, type: "secondary" },
      ],
      imgUrl: cdn("Jadaf Res Plot 12&13_BuidingView_Option01.jpg"),
      imgAlt: "واجهة عزيزي ديفيد",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "826,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "الجداف",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي ديفيد",
    },

    // ✅ AR FloorPlans: same structure + type="apartments" + Arabic keys
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "334 قدم²",
            "السعر الابتدائي": "826,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "70% / 30% أو 50% / 50%",
          },
          images: [PLAN_STUDIO_IMAGE],
          features: ["—"],
        },

        {
          id: "1br",
          title: "شقة غرفة نوم واحدة (1BHK)",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "674 قدم²",
            "السعر الابتدائي": "1,382,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "70% / 30% أو 50% / 50%",
          },
          images: [PLAN_1BR_IMAGE],
          features: ["—"],
        },

        {
          id: "2br",
          title: "شقة غرفتين نوم (2BHK)",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "843 قدم²",
            "السعر الابتدائي": "2,126,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "70% / 30% أو 50% / 50%",
          },
          images: [PLAN_2BR_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "لوبي حديث", icon: "🏢", color: "#d7b46a" },
        { label: "إطلالات المدينة", icon: "🌇", color: "#d7b46a" },
        { label: "سهولة تنقل واتصال", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    // ✅ AR location (Azizi David) — من نفس رابط Google Maps
    location: {
      title: "موقع المشروع",
      projectName: "عزيزي ديفيد",
      address: "الجداف، دبي، الإمارات",
      lat: 25.2135278,
      lng: 55.3298056,
      zoom: 17,
      proximityFeatures: [
        { icon: "📍", text: "يقع في منطقة الجداف بدبي." },
        { icon: "🏥", text: "بالقرب من مدينة دبي الطبية (DHCC)." },
        { icon: "🌊", text: "سهولة الوصول إلى خور دبي ومناطق حيوية." },
        { icon: "🛣️", text: "اتصال ممتاز بالطرق الرئيسية والمعالم في دبي." },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي ديفيد؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار وجميع الوثائق الرسمية لمشروع عزيزي ديفيد.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};
