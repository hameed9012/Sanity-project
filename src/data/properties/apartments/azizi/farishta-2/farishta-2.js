// src/data/properties/apartments/azizi/farishta-2/farishta-2.js
// ✅ EXACT same structure you use for Azizi projects (EN + AR)
// ✅ Uses EXACT Bunny filenames from your screenshot
// ✅ Hero background is video/pdf (no mp4 in folder → uses Factsheet PDF as fallback)
// ✅ FloorPlans contain ONLY: Total Area / Starting Price / Handover / Payment Plan

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/farishta-2";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames from your screenshot)
const FACTSHEET_EN = cdn("Farishta II Factsheet_En.pdf");
const FACTSHEET_AR = cdn("Farishta II Factsheet_Ar.pdf");
const BROCHURE_PDF = cdn("Farishta II.pdf");

// ✅ No MP4 listed in your folder → keep hero as a strong image (works everywhere)
// If you upload a Farishta II video later, just set VIDEO_HERO = cdn("YourVideo.mp4")
const HERO_IMAGE = cdn("360-JDF09-HL-IMG_EXTERIOR VIEW 07-00.jpg");

// ✅ Gallery images (EXACT filenames from your screenshot)
const GALLERY = [
  cdn("360-JDF09-HL-IMG_EXTERIOR VIEW 01-00.jpg"),
  cdn("360-JDF09-HL-IMG_EXTERIOR VIEW 02-00.jpg"),
  cdn("360-JDF09-HL-IMG_EXTERIOR VIEW 03-00.jpg"),
  cdn("360-JDF09-HL-IMG_EXTERIOR VIEW 04-00.JPG"),
  cdn("360-JDF09-HL-IMG_EXTERIOR VIEW 05-00.jpg"),
  cdn("360-JDF09-HL-IMG_EXTERIOR VIEW 06-00.png"),
  cdn("360-JDF09-HL-IMG_EXTERIOR VIEW 07-00.jpg"),
];

// ✅ Floor plan visuals (no plan images listed → reuse strong renders)
const STUDIO_IMAGE = cdn("farista 2 studio.png");
const ONE_BED_IMAGE = cdn("farista 2 1bhk .png");

export const aziziFarishta2Data = {
  en: {
    seo: {
      title:
        "Azizi Farishta II | Studios & 1BR Apartments in Al Furjan | Handover Q4 2028",
      description:
        "Azizi Farishta II is a modern residential development in Al Furjan by Azizi Developments, offering studio and 1-bedroom apartments with a 50/50 payment plan and handover expected in Q4 2028.",
      keywords:
        "Azizi Farishta II, Azizi Developments, Al Furjan, studio, 1 bedroom, Dubai apartments, Q4 2028, 50/50 payment plan",
      canonical: "/properties/apartments/azizi/farishta-2",
    },

    project: {
      name: "Azizi Farishta II",
      developer: "Azizi Developments",
      location: "Al Furjan, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 785,000",
      completionDate: "Q4 2028",
      paymentPlan: "50% / 50%",
      type: "Apartments",
      units: "Studio & 1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_IMAGE, // ✅ Works reliably (image). Replace with video if you upload mp4.
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "A MODERN ADDRESS IN AL FURJAN",
      paragraphs: [
        "Azizi Farishta II is a contemporary residential project in Al Furjan, designed for residents seeking a connected lifestyle and practical layouts.",
        "The development offers studios and 1-bedroom apartments with modern finishes and efficient living spaces.",
        "Download the official factsheets to review full specifications and project details.",
      ],
      brochures: [
        { title: "Download Factsheet (EN)", url: FACTSHEET_EN, type: "main" },
        {
          title: "Download Factsheet (AR)",
          url: FACTSHEET_AR,
          type: "secondary",
        },
        { title: "Download Brochure", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/farishta-2/360-JDF09-HL-IMG_EXTERIOR%20VIEW%2001-00.jpg`,
      imgAlt: "Azizi Farishta II exterior view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q4 2028",
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
          value: "Al Furjan",
          label: "Dubai",
        },
      ],
    },

    gallery: {
      title: "Azizi Farishta II Visuals",
      slides: GALLERY,
      projectTag: "Azizi Farishta II",
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
            "Total Area": "325 sq.ft",
            "Starting Price": "AED 785,000",
            Handover: "Q4 2028",
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
            "Total Area": "914 sq.ft",
            "Starting Price": "AED 1,414,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [ONE_BED_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Al Furjan Community Location", icon: "📍", color: "#d7b46a" },
        { label: "Modern Residential Living", icon: "🏢", color: "#d7b46a" },
        { label: "Convenient Connectivity", icon: "🛣️", color: "#d7b46a" },
        { label: "Contemporary Design", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Farishta II",
      projectName: "Azizi Farishta II",
      address: "Al Jaddaf, Dubai, United Arab Emirates",
      lat: 25.2200625,
      lng: 55.3312031,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚇", text: "Close to key transport links and main roads." },
        {
          icon: "🛍️",
          text: "Near daily essentials, retail and dining options.",
        },
        { icon: "🏙️", text: "Easy reach to major Dubai destinations." },
      ],
    },

    cta: {
      title: "Interested in Azizi Farishta II?",
      description:
        "Share your details to receive the latest availability, pricing, and the official factsheets for Azizi Farishta II.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "عزيزي فريشة 2 | استوديو وشقق غرفة نوم في الفرجان | التسليم Q4 2028",
      description:
        "عزيزي فريشة 2 مشروع سكني حديث في الفرجان من عزيزي، يوفّر استوديو وشقق غرفة نوم واحدة مع خطة دفع 50/50 وموعد تسليم Q4 2028.",
      keywords:
        "عزيزي فريشة 2, عزيزي, الفرجان, استوديو, غرفة نوم, شقق دبي, Q4 2028, خطة دفع 50/50",
      canonical: "/properties/apartments/azizi/farishta-2",
    },

    project: {
      name: "عزيزي فريشة 2",
      developer: "عزيزي للتطوير العقاري",
      location: "الفرجان، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "785,000 درهم",
      completionDate: "Q4 2028",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "استوديو وغرفة نوم",
    },

    hero: {
      backgroundUrl: HERO_IMAGE,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "عنوان سكني عصري في الفرجان",
      paragraphs: [
        "عزيزي فريشة 2 مشروع سكني حديث في الفرجان، مناسب لمن يبحث عن أسلوب حياة عملي واتصال ممتاز.",
        "يوفّر المشروع وحدات استوديو وشقق غرفة نوم واحدة بتخطيطات عملية وتشطيبات عصرية.",
        "يمكنك تحميل أوراق المعلومات الرسمية للاطلاع على التفاصيل الكاملة.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات (EN)", url: FACTSHEET_EN, type: "main" },
        {
          title: "تحميل ورقة المعلومات (AR)",
          url: FACTSHEET_AR,
          type: "secondary",
        },
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/farishta-2/360-JDF09-HL-IMG_EXTERIOR%20VIEW%2001-00.jpg`,
      imgAlt: "واجهة عزيزي فريشة 2",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q4 2028",
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
          value: "الفرجان",
          label: "دبي",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي فريشة 2",
    },

    // ✅ AR FloorPlans: SAME structure
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "325 قدم²",
            "السعر الابتدائي": "785,000 درهم",
            "موعد التسليم": "Q4 2028",
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
            "إجمالي المساحة": "914 قدم²",
            "السعر الابتدائي": "1,414,000 درهم",
            "موعد التسليم": "Q4 2028",
            "خطة الدفع": "50% / 50%",
          },
          images: [ONE_BED_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "موقع ضمن مجتمع الفرجان", icon: "📍", color: "#d7b46a" },
        { label: "أسلوب سكني عصري", icon: "🏢", color: "#d7b46a" },
        { label: "اتصال ممتاز", icon: "🛣️", color: "#d7b46a" },
        { label: "تصميم حديث", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي فريشة 2",
      address: "الجداف، دبي، الإمارات العربية المتحدة",
      lat: 25.2200625,
      lng: 55.3312031,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚇", text: "بالقرب من الطرق الرئيسية وخيارات التنقل." },
        { icon: "🛍️", text: "قريب من الخدمات اليومية والتجزئة والمطاعم." },
        { icon: "🏙️", text: "سهولة الوصول إلى مناطق دبي الحيوية." },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي فريشة 2؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار وروابط أوراق المعلومات الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};
