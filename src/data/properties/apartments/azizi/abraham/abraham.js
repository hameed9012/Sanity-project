// src/data/properties/apartments/azizi/abraham/abraham.js
// ✅ Tailored to your Bunny folder: /azizi/abraham (exact filenames)
// ✅ Same project object structure (EN + AR) as your other Azizi files
// ✅ FloorPlans specs are ONLY: Total Area / Starting Price / Handover / Payment Plan

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/abraham";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

/* -----------------------
  Key files (exact names)
------------------------ */
const FACTSHEET_PDF = cdn("Azizi Abraham Factsheet.pdf");
const PAYMENT_PLAN_IMG = cdn("Azizi Abraham Payment Plan.jpg");
const STARTING_PRICE_IMG = cdn("Azizi Abraham Starting Price.jpg");
const PROJECT_VIDEO = cdn("Azizi Abraham_Project video.mp4");

/* -----------------------
  Floor plan images (exact names)
------------------------ */
const FP_STUDIO = cdn("Abraham studio.png");
const FP_1BR = cdn("Araham 1br.png"); // Note: filename in folder is "Araham 1br.png"
const FP_2BR = cdn("Abraham 2br.png");
const FP_3BR = cdn("Abraham 3br.png");

/* -----------------------
  Gallery (picked from your folder list)
  You can add/remove freely, these are all valid filenames you shared.
------------------------ */
const GALLERY = [
  cdn("360-DJAZ001-HL-IMG_EXTERIOR VIEW 01.jpg"),
  cdn("360-DJAZ001-HL-IMG_EXTERIOR VIEW 02.jpg"),
  cdn("360-DJAZ001-HL-IMG_EXTERIOR VIEW 03.jpg"),
  cdn("360-DJAZ001-HL-IMG_EXTERIOR VIEW 04.jpg"),

  cdn("LIVING ROOM01.jpg"),
  cdn("LIVING ROOM02.jpg"),
  cdn("LIVING ROOM03.jpg"),

  cdn("Bath01-.jpeg"),
  cdn("Bath02.jpg"),

  cdn("Gym render 01.jpg"),
  cdn("Gym render 02.jpg"),

  cdn("Cinema render 01.jpg"),
  cdn("Cinema render 02.jpg"),
  cdn("Cinema render 03.jpg"),

  cdn("Changing Room01.jpg"),
  cdn("Changing Room02.jpg"),
];

/* -----------------------
  Export (same structure)
------------------------ */
export const aziziAbraham = {
  slug: "abraham",
  category: "apartments",
  developerSlug: "azizi",
  projectSlug: "abraham",

  en: {
    seo: {
      title: "Azizi Abraham Jebel Ali | Prices, Floor Plans & Payment Plan",
      description:
        "Explore Azizi Abraham by Azizi Developments in Jebel Ali (Downtown Jebel Ali): studio to 3-bedroom apartments, starting prices, areas, payment plan, gallery, and official factsheet.",
      keywords: [
        "Azizi Abraham",
        "Azizi Developments",
        "Jebel Ali",
        "Downtown Jebel Ali",
        "Apartments",
        "Off-plan Dubai",
        "Payment plan",
      ],
      canonical: "/properties/apartments/azizi/abraham",
    },

    project: {
      name: "Azizi Abraham",
      developer: "Azizi Developments",
      location: "Downtown Jebel Ali, Dubai, UAE",
      status: "Off-plan",
      startingPrice: "AED 655,000",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
      type: "Residential Apartments",
      units: "Studios, 1, 2 & 3 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/abraham/Azizi%20Abraham_Project%20video.mp4`,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "MODERN LIVING IN DOWNTOWN JEBEL ALI",
      paragraphs: [
        "Azizi Abraham is a contemporary residential address offering well-planned studios to 3-bedroom apartments in Downtown Jebel Ali.",
        "With strong connectivity and a practical unit mix, it targets both end-users and investors looking for value-driven options in Dubai.",
        "Download the official factsheet and view the payment plan and starting prices below.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "factsheet" },
        { title: "Payment Plan", url: PAYMENT_PLAN_IMG, type: "payment-plan" },
        {
          title: "Starting Prices",
          url: STARTING_PRICE_IMG,
          type: "starting-prices",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/abraham/360-DJAZ001-HL-IMG_EXTERIOR%20VIEW%2004.jpg`,
      imgAlt: "Azizi Abraham – exterior perspective",
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Abraham",
      address: "Downtown Jebel Ali, Dubai, UAE",
      // From 2GIS POI
      lat: 24.968812,
      lng: 55.087746,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🛣️",
          text: "Direct connectivity via Sheikh Zayed Road (E11).",
        },
        { icon: "🚆", text: "Near metro connectivity in Jebel Ali area." },
        {
          icon: "🏙️",
          text: "Close to business districts, logistics and free zone activity.",
        },
      ],
    },

    amenities: {
      title: "Features & Amenities",
      amenities: [
        { label: "Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Kids Area", icon: "🧸", color: "#d7b46a" },
        { label: "Modern Lobby", icon: "🏢", color: "#d7b46a" },
        { label: "Changing Rooms", icon: "🚿", color: "#d7b46a" },
      ],
    },

    gallery: {
      title: "Azizi Abraham Gallery",
      slides: GALLERY,
      projectTag: "Azizi Abraham – Downtown Jebel Ali",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Floor Plan",
          bedrooms: 0,
          specs: {
            "Total Area": "348 sq.ft",
            "Starting Price": "AED 655,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom Floor Plan",
          bedrooms: 1,
          specs: {
            "Total Area": "691 sq.ft",
            "Starting Price": "AED 1,067,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom Floor Plan",
          bedrooms: 2,
          specs: {
            "Total Area": "961 sq.ft",
            "Starting Price": "AED 1,507,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom Floor Plan",
          bedrooms: 3,
          specs: {
            "Total Area": "1,408 sq.ft",
            "Starting Price": "AED 2,206,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
    },

    cta: {
      title: "Interested in Azizi Abraham?",
      description:
        "Share your details to receive availability, updated pricing, and the official Azizi Abraham factsheet & payment plan.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-factsheet" },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي أبراهام جبل علي | الأسعار والمخططات وخطة الدفع",
      description:
        "اكتشف مشروع عزيزي أبراهام من عزيزي للتطوير في جبل علي (داون تاون جبل علي): استوديو حتى 3 غرف، مع الأسعار والمساحات وخطة الدفع والمعرض والفاكت شيت الرسمي.",
      keywords: [
        "عزيزي أبراهام",
        "عزيزي للتطوير",
        "جبل علي",
        "داون تاون جبل علي",
        "شقق",
        "عقارات دبي",
        "خطة الدفع",
      ],
      canonical: "/properties/apartments/azizi/abraham",
    },

    project: {
      name: "عزيزي أبراهام",
      developer: "عزيزي للتطوير",
      location: "داون تاون جبل علي، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 655,000 درهم",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "استوديو، 1، 2، 3 غرف نوم",
    },

    hero: {
      backgroundUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/abraham/Azizi%20Abraham_Project%20video.mp4`,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة عصري في داون تاون جبل علي",
      paragraphs: [
        "عزيزي أبراهام هو عنوان سكني حديث يقدّم وحدات مدروسة من الاستوديو حتى 3 غرف نوم في داون تاون جبل علي.",
        "بفضل سهولة الوصول والخيارات المتنوعة، يعتبر مناسبًا للسكن والاستثمار لمن يبحث عن قيمة قوية داخل دبي.",
        "حمّل الفاكت شيت الرسمي وشاهد تفاصيل خطة الدفع والأسعار الابتدائية أدناه.",
      ],
      brochures: [
        { title: "تحميل الفاكت شيت", url: FACTSHEET_PDF, type: "factsheet" },
        { title: "خطة الدفع", url: PAYMENT_PLAN_IMG, type: "payment-plan" },
        {
          title: "الأسعار الابتدائية",
          url: STARTING_PRICE_IMG,
          type: "starting-prices",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/abraham/360-DJAZ001-HL-IMG_EXTERIOR%20VIEW%2004.jpg`,
      imgAlt: "Azizi Abraham – exterior perspective",
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي أبراهام",
      address: "داون تاون جبل علي، دبي، الإمارات",
      lat: 24.968812,
      lng: 55.087746,
      zoom: 14,
      proximityFeatures: [
        { icon: "🛣️", text: "اتصال مباشر عبر شارع الشيخ زايد (E11)." },
        { icon: "🚆", text: "قريب من خيارات المترو في منطقة جبل علي." },
        {
          icon: "🏙️",
          text: "قريب من مناطق الأعمال والخدمات اللوجستية والمنطقة الحرة.",
        },
      ],
    },

    amenities: {
      title: "المزايا والمرافق",
      amenities: [
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "سينما", icon: "🎬", color: "#d7b46a" },
        { label: "منطقة أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "لوبّي عصري", icon: "🏢", color: "#d7b46a" },
        { label: "غرف تبديل", icon: "🚿", color: "#d7b46a" },
      ],
    },

    gallery: {
      title: "معرض عزيزي أبراهام",
      slides: GALLERY,
      projectTag: "عزيزي أبراهام – داون تاون جبل علي",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "مخطط استوديو",
          bedrooms: 0,
          specs: {
            "Total Area": "348 sq.ft",
            "Starting Price": "AED 655,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "1br",
          title: "مخطط شقة غرفة واحدة",
          bedrooms: 1,
          specs: {
            "Total Area": "691 sq.ft",
            "Starting Price": "AED 1,067,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "مخطط شقة غرفتين",
          bedrooms: 2,
          specs: {
            "Total Area": "961 sq.ft",
            "Starting Price": "AED 1,507,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "مخطط شقة 3 غرف",
          bedrooms: 3,
          specs: {
            "Total Area": "1,408 sq.ft",
            "Starting Price": "AED 2,206,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
    },

    cta: {
      title: "مهتم بعزيزي أبراهام؟",
      description:
        "أرسل بياناتك للحصول على التوافر وآخر الأسعار والفاكت شيت الرسمي وخطة الدفع.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الفاكت شيت", action: "download-factsheet" },
      ],
    },
  },
};

export default aziziAbraham;
