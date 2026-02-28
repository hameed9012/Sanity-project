// src/data/properties/apartments/azizi/sikander/sikander.js
// ✅ SAME structure as your working Azizi files: { en: {...}, ar: {...} }
// ✅ BunnyCDN filenames EXACTLY as your screenshot
// ✅ Hero background uses the video: Furjan June 2025 High res.mp4
// ✅ FloorPlans ONLY contain: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location coordinates are taken from your Google Maps link (25.0184213, 55.1219082)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/sikander";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Media (EXACT filenames)
const VIDEO_HERO = cdn("Furjan June 2025 High res.mp4");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("360-1146_AFC053B-360-PERSPECTIVE-8.jpg"),
  cdn("360-1146_AFC053B-360-PERSPECTIVE-7.jpg"),
  cdn("360-1146_AFC053B-360-PERSPECTIVE-3.jpg"),
  cdn("360-1146_AFC053B-360-PERSPECTIVE-4.jpg"),
  cdn("360-1146_AFC053B-360-PERSPECTIVE-2.jpg"),
  cdn("360-1146_AFC053B-360-PERSPECTIVE-5.jpg"),
  cdn("360-1146_AFC053B-360-PERSPECTIVE-1.jpg"),
  cdn("360-1146_AFC053B-360-PERSPECTIVE-6.jpg"),
];

// ✅ Plan images (no separate floorplan files listed → reuse best visuals)
const STUDIO_PLAN_IMG = cdn("360-1146_AFC053B-360-PERSPECTIVE-8.jpg");
const ONE_BED_PLAN_IMG = cdn("360-1146_AFC053B-360-PERSPECTIVE-7.jpg");
const TWO_BED_PLAN_IMG = cdn("360-1146_AFC053B-360-PERSPECTIVE-3.jpg");

export const aziziSikanderData = {
  en: {
    seo: {
      title:
        "Azizi Sikander | Apartments in Al Furjan, Dubai | Handover Q4 2027",
      description:
        "Azizi Sikander by Azizi Developments is an off-plan residential project in Al Furjan, Dubai, offering studios, 1-bedroom and 2-bedroom apartments with a 50/50 payment plan and handover on Q4 2027.",
      keywords:
        "Azizi Sikander, Azizi Sakandar, Azizi Developments, Al Furjan apartments, Dubai off plan, studio, 1 bedroom, 2 bedroom, 50/50 payment plan, Q4 2027 handover",
      canonical: "/properties/apartments/azizi/sikander",
    },

    project: {
      name: "Azizi Sikander",
      developer: "Azizi Developments",
      location: "Al Furjan, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 585,000",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
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
      title: "A SMART INVESTMENT ADDRESS IN AL FURJAN",
      paragraphs: [
        "Azizi Sikander is an off-plan residential project by Azizi Developments located in Al Furjan, a highly connected Dubai community.",
        "The project offers studios, 1-bedroom and 2-bedroom apartments with practical layouts and modern living comfort.",
        "Handover is scheduled for Q4 2027 with a 50/50 payment plan.",
      ],
      brochures: [],
      imgUrl: cdn("360-1146_AFC053B-360-PERSPECTIVE-8.jpg"),
      imgAlt: "Azizi Sikander exterior perspective",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "From AED 585,000",
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
      title: "Azizi Sikander Visuals",
      slides: GALLERY,
      projectTag: "Azizi Sikander",
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
            "Total Area": "335 sq.ft",
            "Starting Price": "AED 585,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [STUDIO_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "645 sq.ft",
            "Starting Price": "AED 1,064,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [ONE_BED_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,103 sq.ft",
            "Starting Price": "AED 1,657,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [TWO_BED_PLAN_IMG],
          features: ["—"],
        },
      ],
      brochureHref: null,
    },

    amenities: {
      title: "Highlights",
      amenities: [
        { label: "Al Furjan Location", icon: "📍", color: "#d7b46a" },
        { label: "50/50 Payment Plan", icon: "💳", color: "#d7b46a" },
        { label: "Handover Q4 2027", icon: "🗓️", color: "#d7b46a" },
        { label: "Modern Residential Living", icon: "🏙️", color: "#d7b46a" },
        { label: "Great Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Sikander",
      address: "Al Furjan, Dubai, United Arab Emirates",
      lat: 25.0184213,
      lng: 55.1219082,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚇", text: "Well-connected community in Al Furjan." },
        { icon: "🛍️", text: "Easy access to daily essentials and retail." },
        { icon: "🚗", text: "Convenient connectivity to major Dubai roads." },
      ],
    },

    cta: {
      title: "Interested in Azizi Sikander?",
      description:
        "Share your details to receive the latest availability and pricing for studios, 1-bedroom and 2-bedroom apartments.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "WhatsApp", action: "whatsapp" },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي سيكندر | شقق في الفرجان دبي | التسليم Q4 2027",
      description:
        "عزيزي سيكندر من عزيزي للتطوير العقاري مشروع سكني قيد الإنشاء في الفرجان – دبي، يضم استوديو وشقق غرفة وغرفتين نوم بخطة دفع 50/50 وموعد تسليم Q4 2027.",
      keywords:
        "عزيزي سيكندر, عزيزي سكندر, عزيزي ساكندر, الفرجان دبي, شقق دبي قيد الإنشاء, استوديو, غرفة نوم, غرفتين نوم, خطة دفع 50/50, تسليم Q4 2027",
      canonical: "/properties/apartments/azizi/sikander",
    },

    project: {
      name: "عزيزي سيكندر",
      developer: "عزيزي للتطوير العقاري",
      location: "الفرجان، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "585,000 درهم",
      completionDate: "Q4 2027",
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "استوديو، غرفة نوم واحدة، غرفتي نوم",
    },

    hero: {
      backgroundUrl: VIDEO_HERO, // ✅ VIDEO
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي",
      rating: null,
    },

    intro: {
      title: "عنوان استثماري ذكي في الفرجان",
      paragraphs: [
        "عزيزي سيكندر مشروع سكني قيد الإنشاء من عزيزي للتطوير العقاري في الفرجان – دبي ضمن مجتمع يتميز بسهولة الوصول والاتصال.",
        "يوفّر وحدات متنوعة تشمل الاستوديو وشقق غرفة وغرفتين نوم بتصميم عملي وراحة سكنية عصرية.",
        "موعد التسليم Q4 2027 مع خطة دفع 50/50.",
      ],
      brochures: [],
      imgUrl: cdn("360-1146_AFC053B-360-PERSPECTIVE-8.jpg"),
      imgAlt: "إطلالة خارجية لمشروع عزيزي سيكندر",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "ابتداءً من 585,000 درهم",
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
      projectTag: "عزيزي سيكندر",
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
            "إجمالي المساحة": "335 قدم²",
            "السعر الابتدائي": "585,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [STUDIO_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "645 قدم²",
            "السعر الابتدائي": "1,064,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [ONE_BED_PLAN_IMG],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,103 قدم²",
            "السعر الابتدائي": "1,657,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [TWO_BED_PLAN_IMG],
          features: ["—"],
        },
      ],
      brochureHref: null,
    },

    amenities: {
      title: "مميزات المشروع",
      amenities: [
        { label: "موقع في الفرجان", icon: "📍", color: "#d7b46a" },
        { label: "خطة دفع 50/50", icon: "💳", color: "#d7b46a" },
        { label: "التسليم Q4 2027", icon: "🗓️", color: "#d7b46a" },
        { label: "سكن عصري", icon: "🏙️", color: "#d7b46a" },
        { label: "اتصال ممتاز", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي سيكندر",
      address: "الفرجان، دبي، الإمارات العربية المتحدة",
      lat: 25.0184213,
      lng: 55.1219082,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚇", text: "مجتمع متصل ومميز ضمن الفرجان." },
        { icon: "🛍️", text: "قريب من الخدمات اليومية والتسوق." },
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية في دبي." },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي سيكندر؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار للاستوديو وشقق غرفة وغرفتين نوم.",
      buttons: [
        { label: "اطلب الآن", action: "enquire" },
        { label: "واتساب", action: "whatsapp" },
      ],
    },
  },
};
