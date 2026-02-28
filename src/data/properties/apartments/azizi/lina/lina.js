// src/data/properties/apartments/azizi/lina/lina.js
// ✅ Uses EXACT Bunny filenames from your screenshot
// ✅ Same structure as your working Azizi files (en + ar)
// ✅ FloorPlans contain ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location is EXACT from your Google Maps link (lat/lng)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/lina";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main PDFs (EXACT filenames from your screenshot)
const FACTSHEET_PDF = cdn("Azizi Lina Factsheet.pdf");
const PAYMENT_PLAN_PDF = cdn("Azizi Lina Payment Plan & Starting Price.pdf");

// ✅ Gallery images (EXACT filenames from your screenshot)
const GALLERY = [
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 01.jpg"),
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 02.jpg"),
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 03.jpg"),
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 04.jpg"),
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 06.jpg"),
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 07.jpg"),
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 08.jpg"),
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 10.jpg"),
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 11.jpg"),
  cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 12.jpg"),
];

// ✅ Use strong images as plan visuals (no floor-plan images listed in this folder)
const STUDIO_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/lina/Lina%20Studio.png`;
const FP_1BR_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/lina/Lina%201br.png`;
const FP_2BR_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/lina/Lina%202br.png`;
const FP_3BR_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/lina/Lina%203BR.png`;

// ✅ CONFIRMED by you
const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "50% / 50%";

export const aziziLinaData = {
  en: {
    seo: {
      title: "Azizi Lina | Apartments in Dubai | Studio to 3BR",
      description:
        "Azizi Lina by Azizi Developments offers a selection of studio to 3-bedroom apartments with modern layouts and strong connectivity in Dubai.",
      keywords:
        "Azizi Lina, Azizi Developments, Dubai apartments, studio, 1 bedroom, 2 bedroom, 3 bedroom",
      canonical: "/properties/apartments/azizi/lina",
    },

    project: {
      name: "Azizi Lina",
      developer: "Azizi Developments",
      location: "Dubai, United Arab Emirates",
      status: "Off-Plan",
      startingPrice: "AED 588,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio, 1, 2 & 3 Bedroom",
    },

    hero: {
      // No video file listed in your Lina folder, so we use a strong hero image from gallery.
      backgroundUrl: cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 04.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "A MODERN AZIZI ADDRESS IN DUBAI",
      paragraphs: [
        "Azizi Lina is a contemporary residential development offering a range of apartments from studios to 3-bedroom layouts.",
        "Designed with practical layouts and modern finishing, the project targets both end-users and investors looking for value and accessibility.",
        "Download the official documents to review detailed specifications, starting prices, and payment plan information.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        {
          title: "Payment Plan & Starting Price",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 07.jpg"),
      imgAlt: "Azizi Lina exterior view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "From AED 588,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: HANDOVER,
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: PAYMENT_PLAN,
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Azizi Lina Visuals",
      slides: GALLERY,
      projectTag: "Azizi Lina",
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
            "Total Area": "368 sq.ft",
            "Starting Price": "AED 588,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [STUDIO_IMAGE],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "685 sq.ft",
            "Starting Price": "AED 1,066,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,391 sq.ft",
            "Starting Price": "AED 1,593,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR_IMAGE],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1,758 sq.ft",
            "Starting Price": "AED 2,211,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "Highlights",
      amenities: [
        { label: "Modern Design", icon: "🏢", color: "#d7b46a" },
        { label: "Well-Planned Layouts", icon: "🧱", color: "#d7b46a" },
        { label: "Convenient Access", icon: "🛣️", color: "#d7b46a" },
        { label: "Investment Value", icon: "💼", color: "#d7b46a" },
      ],
    },

    // ✅ Location EXACT from your link:
    // Azizi Lina — lat 24.9708962, lng 55.0892979
    location: {
      title: "Project Location",
      projectName: "Azizi Lina",
      address: "Azizi Lina, Dubai, United Arab Emirates",
      lat: 24.9708962,
      lng: 55.0892979,
      zoom: 16,
      proximityFeatures: [
        { icon: "📍", text: "Azizi Lina, Dubai." },
        { icon: "🚗", text: "Easy access to major roads and key districts." },
        {
          icon: "🏙️",
          text: "A practical location for residents and investors.",
        },
      ],
    },

    cta: {
      title: "Interested in Azizi Lina?",
      description:
        "Send your details to receive the latest availability, pricing, and the official documents.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي لينا | شقق في دبي | من استوديو إلى 3 غرف",
      description:
        "عزيزي لينا من عزيزي للتطوير العقاري يوفّر شققاً من الاستوديو حتى 3 غرف نوم بتصاميم حديثة وموقع متصل بشكل ممتاز في دبي.",
      keywords: "عزيزي لينا, عزيزي, شقق دبي, استوديو, غرفة, غرفتين, ثلاث غرف",
      canonical: "/properties/apartments/azizi/lina",
    },

    project: {
      name: "عزيزي لينا",
      developer: "عزيزي للتطوير العقاري",
      location: "دبي، الإمارات العربية المتحدة",
      status: "قيد الإنشاء",
      startingPrice: "588,000 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو، 1، 2، 3 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 04.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي",
      rating: null,
    },

    intro: {
      title: "عنوان سكني عصري من عزيزي في دبي",
      paragraphs: [
        "عزيزي لينا مشروع سكني حديث يقدّم مجموعة من الشقق تبدأ من الاستوديو وحتى 3 غرف نوم.",
        "تم تصميم الوحدات بتخطيطات عملية وتشطيبات عصرية تناسب السكن والاستثمار.",
        "يمكنك تحميل الملفات الرسمية للاطلاع على مواصفات المشروع والأسعار وخطة الدفع.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
        {
          title: "خطة الدفع والسعر الابتدائي",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("360-DJAZ.07-SL-IMG_EXTERIOR VIEW 07.jpg"),
      imgAlt: "إطلالة خارجية لعزيزي لينا",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "ابتداءً من 588,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: HANDOVER,
          label: "موعد التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: PAYMENT_PLAN,
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي لينا",
    },

    // ✅ AR FloorPlans: ONLY the 4 fields (Arabic keys)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "368 قدم²",
            "السعر الابتدائي": "588,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [STUDIO_IMAGE],
          features: ["—"],
        },
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "685 قدم²",
            "السعر الابتدائي": "1,066,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_1BR_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,391 قدم²",
            "السعر الابتدائي": "1,593,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_2BR_IMAGE],
          features: ["—"],
        },
        {
          id: "3br",
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,758 قدم²",
            "السعر الابتدائي": "2,211,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_3BR_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "مميزات المشروع",
      amenities: [
        { label: "تصميم عصري", icon: "🏢", color: "#d7b46a" },
        { label: "تخطيطات عملية", icon: "🧱", color: "#d7b46a" },
        { label: "سهولة الوصول", icon: "🛣️", color: "#d7b46a" },
        { label: "قيمة استثمارية", icon: "💼", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي لينا",
      address: "عزيزي لينا، دبي، الإمارات العربية المتحدة",
      lat: 24.9708962,
      lng: 55.0892979,
      zoom: 16,
      proximityFeatures: [
        { icon: "📍", text: "عزيزي لينا، دبي." },
        {
          icon: "🚗",
          text: "سهولة الوصول إلى الطرق الرئيسية والمناطق القريبة.",
        },
        { icon: "🏙️", text: "موقع عملي مناسب للسكن والاستثمار." },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي لينا؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار وروابط الملفات الرسمية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};
