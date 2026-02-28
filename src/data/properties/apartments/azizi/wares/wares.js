// src/data/properties/apartments/azizi/wares/wares.js
// ✅ SAME structure as your working Azizi files: { en: {...}, ar: {...} }
// ✅ BunnyCDN filenames EXACTLY as your screenshot
// ✅ Hero background is the project video: Azizi Wares.mp4
// ✅ FloorPlans contain ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location coordinates taken from your Google Maps link

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/wares";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const VIDEO_HERO = cdn("Azizi Wares.mp4");
const FACTSHEET_PDF = cdn("Azizi WARES Factsheet.pdf");
const PAYMENT_PLAN_IMG = cdn("Payment plan.jpeg");
const STARTING_PRICES_IMG = cdn("Starting prices.jpeg");

// ✅ Gallery (EXACT filenames)
const GALLERY = [
  cdn("VIEW_02.jpg"),
  cdn("VIEW_01.jpg"),
  cdn("360-DJAZ2.28-SL-IMG_EXTERIOR VIEW 01.jpg"),
  cdn("360-DJAZ2.28-SL-IMG_EXTERIOR VIEW 02.jpg"),
  cdn("360-DJAZ2.28-SL-IMG_EXTERIOR VIEW 03.jpg"),
  cdn("360-DJAZ2.28-SL-IMG_EXTERIOR VIEW 04.jpg"),
  cdn("360-DJAZ2.28-SL-IMG_EXTERIOR VIEW 05.jpg"),
  cdn("360-DJAZ2.28-SL-IMG_EXTERIOR VIEW 06.jpg"),
];

// ✅ Plan visuals (no floorplan images listed → reuse strong visuals)
const STUDIO_IMG = cdn("VIEW_01.jpg");
const ONE_BED_IMG = cdn("VIEW_02.jpg");
const TWO_BED_IMG = cdn("360-DJAZ2.28-SL-IMG_EXTERIOR VIEW 01.jpg");

export const aziziWaresData = {
  en: {
    seo: {
      title:
        "Azizi Wares | Apartments in Dubai | From AED 594,000 | Handover Q4 2027",
      description:
        "Azizi Wares offers studios, 1-bedroom, and 2-bedroom apartments with a 50/50 payment plan and handover scheduled for Q4 2027.",
      keywords:
        "Azizi Wares, Azizi Developments, Dubai apartments, studio, 1 bedroom, 2 bedroom, 50/50 payment plan, handover Q4 2027",
      canonical: "/properties/apartments/azizi/wares",
    },

    project: {
      name: "Azizi Wares",
      developer: "Azizi Developments",
      location: "Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 594,000",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
      type: "Apartments",
      units: "Studios, 1BR, 2BR",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "MODERN LIVING BY AZIZI",
      paragraphs: [
        "Azizi Wares is an off-plan residential offering featuring studios, 1-bedroom, and 2-bedroom apartments.",
        "The project provides a straightforward 50/50 payment plan with handover scheduled for Q4 2027.",
        "Download the official factsheet and review starting prices and payment plan visuals for full clarity.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        { title: "Payment Plan (Image)", url: PAYMENT_PLAN_IMG, type: "image" },
        {
          title: "Starting Prices (Image)",
          url: STARTING_PRICES_IMG,
          type: "image",
        },
      ],
      imgUrl: cdn("VIEW_02.jpg"),
      imgAlt: "Azizi Wares exterior view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "From AED 594,000",
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
          icon: "💳",
          value: "50/50",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Azizi Wares Visuals",
      slides: GALLERY,
      projectTag: "Azizi Wares",
    },

    // ✅ FloorPlans: ONLY the 4 agreed fields
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "329 sq.ft",
            "Starting Price": "AED 594,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [STUDIO_IMG],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "629 sq.ft",
            "Starting Price": "AED 978,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [ONE_BED_IMG],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,015 sq.ft",
            "Starting Price": "AED 1,581,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [TWO_BED_IMG],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "Highlights",
      amenities: [
        { label: "Studios to 2BR Options", icon: "🏠", color: "#d7b46a" },
        { label: "50/50 Payment Plan", icon: "💳", color: "#d7b46a" },
        { label: "Handover Q4 2027", icon: "🗓️", color: "#d7b46a" },
        { label: "Azizi Developer", icon: "⭐", color: "#d7b46a" },
        { label: "Modern Design", icon: "✨", color: "#d7b46a" },
      ],
    },

    // ✅ From your Google Maps link
    location: {
      title: "Project Location",
      projectName: "Azizi Wares",
      address: "Dubai, United Arab Emirates",
      lat: 24.9546502,
      lng: 55.0778919,
      zoom: 15,
      proximityFeatures: [
        { icon: "📍", text: "Pin based on the provided Google Maps location." },
        { icon: "🚗", text: "Easy access to major roads in Dubai." },
        { icon: "🏙️", text: "Connected to key districts and daily amenities." },
      ],
    },

    cta: {
      title: "Interested in Azizi Wares?",
      description:
        "Share your details to receive the latest availability, updated pricing, and the official factsheet for Azizi Wares.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "عزيزي ويرز | شقق في دبي | ابتداءً من 594,000 درهم | التسليم Q4 2027",
      description:
        "عزيزي ويرز يوفّر استوديو و1 غرفة و2 غرفة نوم بخطة دفع 50/50 وموعد تسليم Q4 2027.",
      keywords:
        "عزيزي ويرز, عزيزي, شقق دبي, استوديو, غرفة نوم واحدة, غرفتين نوم, خطة دفع 50/50, تسليم Q4 2027",
      canonical: "/properties/apartments/azizi/wares",
    },

    project: {
      name: "عزيزي ويرز",
      developer: "عزيزي للتطوير العقاري",
      location: "دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "594,000 درهم",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
      type: "شقق",
      units: "استوديو، 1 غرفة، 2 غرفة",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي",
      rating: null,
    },

    intro: {
      title: "سكن عصري من عزيزي",
      paragraphs: [
        "عزيزي ويرز مشروع سكني قيد الإنشاء يقدّم خيارات استوديو و1 غرفة نوم و2 غرفة نوم.",
        "يأتي المشروع بخطة دفع واضحة 50/50 وموعد تسليم Q4 2027.",
        "حمّل ورقة المعلومات الرسمية، واطّلع على صور خطة الدفع والأسعار الابتدائية.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
        { title: "خطة الدفع (صورة)", url: PAYMENT_PLAN_IMG, type: "image" },
        {
          title: "الأسعار الابتدائية (صورة)",
          url: STARTING_PRICES_IMG,
          type: "image",
        },
      ],
      imgUrl: cdn("VIEW_02.jpg"),
      imgAlt: "واجهة مشروع عزيزي ويرز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "ابتداءً من 594,000 درهم",
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
          icon: "💳",
          value: "50/50",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي ويرز",
    },

    // ✅ AR FloorPlans: ONLY the 4 agreed fields
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "329 قدم²",
            "السعر الابتدائي": "594,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [STUDIO_IMG],
          features: ["—"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "629 قدم²",
            "السعر الابتدائي": "978,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [ONE_BED_IMG],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,015 قدم²",
            "السعر الابتدائي": "1,581,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [TWO_BED_IMG],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "مميزات المشروع",
      amenities: [
        { label: "خيارات من استوديو إلى 2 غرفة", icon: "🏠", color: "#d7b46a" },
        { label: "خطة دفع 50/50", icon: "💳", color: "#d7b46a" },
        { label: "التسليم Q4 2027", icon: "🗓️", color: "#d7b46a" },
        { label: "مطوّر عزيزي", icon: "⭐", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "✨", color: "#d7b46a" },
      ],
    },

    // ✅ From your Google Maps link
    location: {
      title: "موقع المشروع",
      projectName: "عزيزي ويرز",
      address: "دبي، الإمارات العربية المتحدة",
      lat: 24.9546502,
      lng: 55.0778919,
      zoom: 15,
      proximityFeatures: [
        { icon: "📍", text: "الموقع حسب رابط خرائط Google المرفق." },
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية في دبي." },
        { icon: "🏙️", text: "قريب من مناطق وخدمات يومية متنوعة." },
      ],
    },

    cta: {
      title: "مهتم بعزيزي ويرز؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار ورابط ورقة المعلومات الرسمية لمشروع عزيزي ويرز.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};
