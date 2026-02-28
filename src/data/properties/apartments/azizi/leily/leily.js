// src/data/properties/apartments/azizi/leily/leily.js
// ✅ SAME structure as your Azizi Milan / Farishta II files (EN + AR)
// ✅ Uses EXACT Bunny filenames from your screenshot
// ✅ Hero uses best available image (no mp4 in folder)
// ✅ FloorPlans contain ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Includes EN + AR factsheets

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/leily";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const FACTSHEET_EN = cdn("Azizi Leily Factsheet EN.pdf");
const FACTSHEET_AR = cdn("Azizi Leily Factsheet AR.pdf");

// ✅ Best hero image (no video listed)
const HERO_IMAGE = cdn("360-JDF05-HL-IMG_Front View Night.jpg");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("360-JDF05-HL-IMG_Front View Night.jpg"),
  cdn("360-JDF05-HL-IMG_Front View Day.jpg"),
  cdn("360-JDF05-HL-IMG_Entrance View.jpg"),
  cdn("360-JDF05-HL-IMG_Pool View.jpg"),
  cdn("360-JDF05-HL-IMG_Back View Day.jpg"),
  cdn("360-JDF05-HL-IMG_Back Evening View.jpg"),
];

// ✅ Plan visuals (no floorplan images listed → reuse project renders)
const STUDIO_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/leily/Leily%20studio.png`;
const ONE_BED_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/leily/Leily%201br.png`;
const TWO_BED_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/leily/Leily%202br.png`;

export const aziziLeilyData = {
  en: {
    seo: {
      title:
        "Azizi Leily | Studios, 1BR & 2BR Apartments in Al Jaddaf | Handover Q4 2027",
      description:
        "Azizi Leily is a modern residential development by Azizi in Al Jaddaf, offering studios, 1-bedroom, and 2-bedroom apartments with a 50/50 payment plan and handover expected in Q4 2027.",
      keywords:
        "Azizi Leily, Azizi Developments, Al Jaddaf, studio, 1 bedroom, 2 bedroom, Dubai apartments, Q4 2027, 50/50 payment plan",
      canonical: "/properties/apartments/azizi/leily",
    },

    project: {
      name: "Azizi Leily",
      developer: "Azizi Developments",
      location: "Al Jaddaf, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 828,000",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
      type: "Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_IMAGE, // ✅ Works reliably
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "CONTEMPORARY LIVING IN AL JADDAF",
      paragraphs: [
        "Azizi Leily is a contemporary residential project located in Al Jaddaf, designed for modern urban lifestyles with convenient access across Dubai.",
        "The project offers a curated selection of studios, 1-bedroom, and 2-bedroom apartments with practical layouts and modern finishes.",
        "Download the official factsheets to review full specifications and details.",
      ],
      brochures: [
        { title: "Download Factsheet (EN)", url: FACTSHEET_EN, type: "main" },
        {
          title: "Download Factsheet (AR)",
          url: FACTSHEET_AR,
          type: "secondary",
        },
      ],
      imgUrl: HERO_IMAGE,
      imgAlt: "Azizi Leily exterior view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "Handover",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "50% / 50%",
          label: "Payment Plan",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Al Jaddaf",
          label: "Dubai",
        },
      ],
    },

    gallery: {
      title: "Azizi Leily Visuals",
      slides: GALLERY,
      projectTag: "Azizi Leily",
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
            "Total Area": "330 sq.ft",
            "Starting Price": "AED 828,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [STUDIO_IMAGE],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "650 sq.ft",
            "Starting Price": "AED 1,404,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [ONE_BED_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "851 sq.ft",
            "Starting Price": "AED 1,806,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [TWO_BED_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_EN, // ✅ keep one stable brochure link like your other files
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Al Jaddaf Location", icon: "📍", color: "#d7b46a" },
        { label: "Modern Residential Living", icon: "🏢", color: "#d7b46a" },
        { label: "Convenient Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Lifestyle Facilities", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Leily",
      address: "Al Jaddaf, Dubai, United Arab Emirates",
      lat: 25.2136667,
      lng: 55.3288889,
      zoom: 17,
      proximityFeatures: [
        { icon: "📍", text: "Located in Al Jaddaf, Dubai." },
        { icon: "🏥", text: "Close to Dubai Healthcare City (DHCC)." },
        { icon: "🌊", text: "Minutes away from Dubai Creek." },
        { icon: "🛣️", text: "Easy access to major roads and key city areas." },
      ],
    },

    cta: {
      title: "Interested in Azizi Leily?",
      description:
        "Share your details to receive the latest availability, pricing, and the official factsheets for Azizi Leily.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي ليلي | استوديو وشقق 1 و2 غرفة في الجداف | التسليم Q4 2027",
      description:
        "عزيزي ليلي مشروع سكني حديث من عزيزي في الجداف، يوفّر استوديو وشقق غرفة وغرفتين مع خطة دفع 50/50 وموعد تسليم Q4 2027.",
      keywords:
        "عزيزي ليلي, عزيزي, الجداف, استوديو, غرفة نوم, غرفتين, شقق دبي, Q4 2027, خطة دفع 50/50",
      canonical: "/properties/apartments/azizi/leily",
    },

    project: {
      name: "عزيزي ليلي",
      developer: "عزيزي للتطوير العقاري",
      location: "الجداف، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "828,000 درهم",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "استوديو، غرفة وغرفتين",
    },

    hero: {
      backgroundUrl: HERO_IMAGE,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "حياة عصرية في قلب الجداف",
      paragraphs: [
        "عزيزي ليلي مشروع سكني حديث في منطقة الجداف، مناسب لأسلوب حياة حضري مع سهولة الوصول إلى مناطق دبي المختلفة.",
        "يوفّر المشروع وحدات استوديو وشقق غرفة وغرفتين بتخطيطات عملية وتشطيبات عصرية.",
        "يمكنك تحميل أوراق المعلومات الرسمية للاطلاع على التفاصيل الكاملة.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات (EN)", url: FACTSHEET_EN, type: "main" },
        {
          title: "تحميل ورقة المعلومات (AR)",
          url: FACTSHEET_AR,
          type: "secondary",
        },
      ],
      imgUrl: HERO_IMAGE,
      imgAlt: "واجهة عزيزي ليلي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "موعد التسليم",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "50% / 50%",
          label: "خطة الدفع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "الجداف",
          label: "دبي",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي ليلي",
    },

    // ✅ AR FloorPlans: ONLY 4 fields, Arabic keys
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "330 قدم²",
            "السعر الابتدائي": "828,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [STUDIO_IMAGE],
          features: ["—"],
        },
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "650 قدم²",
            "السعر الابتدائي": "1,404,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [ONE_BED_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "851 قدم²",
            "السعر الابتدائي": "1,806,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [TWO_BED_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_EN,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "موقع مميز في الجداف", icon: "📍", color: "#d7b46a" },
        { label: "أسلوب سكني عصري", icon: "🏢", color: "#d7b46a" },
        { label: "اتصال ممتاز", icon: "🛣️", color: "#d7b46a" },
        { label: "مرافق نمط حياة", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي ليلي",
      address: "الجداف، دبي، الإمارات العربية المتحدة",
      lat: 25.2136667,
      lng: 55.3288889,
      zoom: 17,
      proximityFeatures: [
        { icon: "📍", text: "يقع المشروع في منطقة الجداف بدبي." },
        { icon: "🏥", text: "بالقرب من مدينة دبي الطبية (DHCC)." },
        { icon: "🌊", text: "على بُعد دقائق من خور دبي." },
        {
          icon: "🛣️",
          text: "سهولة الوصول إلى الطرق الرئيسية ومناطق دبي الحيوية.",
        },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي ليلي؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار وروابط أوراق المعلومات الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};
