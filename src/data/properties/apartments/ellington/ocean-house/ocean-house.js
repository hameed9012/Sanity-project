// src/data/properties/apartments/ellington/ocean-house.js
// ✅ Folder: /ellington/ocean-house
// ✅ EN + AR
// ✅ 2BR + 4BR
// ✅ Exact filenames used (Bunny verified)
// ✅ Palm Jumeirah
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/ocean-house";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Ocean House - Brochure.pdf");
const FLOORPLANS_PDF = cdn("Ocean House - Floorplans.pdf");
const PAYMENT_PLAN_PDF = cdn("Payment-Plan.pdf");

const HERO_BG = cdn("Ocean-House-Video.mp4");
const INTRO_MAIN = cdn("Ocean House by Ellington - lobby.jpg");
const VIDEO = cdn("Ocean-House-Video.mp4");

const FP_2BR = cdn("Ellington ocean house 2br floor plan.webp");
const FP_4BR = cdn("Ellington ocean house 4br floor plan.webp");

// ⚠️ ONLY VERIFIED FILES FROM BUNNY
const GALLERY = [
  cdn("Ocean House by Ellington - exterior.jpg"),
  cdn("Ocean House by Ellington - drop-off.jpg"),
  cdn("Ocean House by Ellington - lobby.jpg"),
  cdn("Ocean House - reception.jpeg"),
  cdn("Ocean House - lift lobby.jpeg"),
  cdn("Ocean House - library room.jpeg"),
  cdn("Ocean House - co-working space.jpeg"),
  cdn("Ocean House - meeting room 1.jpeg"),
  cdn("Ocean House - meeting room 2.jpeg"),
  cdn("Ocean House - games room.jpeg"),
  cdn("Ocean House - club room.jpeg"),
  cdn("Ocean House by Ellington - cinema room.jpg"),
  cdn("Ocean House - fitness studio.jpeg"),
  cdn("Ocean House - basement stairs wellness spa.jpeg"),
  cdn("Ocean House by Ellington - Wellness spa.jpg"),
  cdn("Ocean House - oasis pool.jpeg"),
  cdn("Ocean House - plunge pool.jpeg"),
  cdn("Ocean House by Ellington - pool view.jpg"),
  cdn("Ocean House by Ellington - kids play.jpg"),
  cdn("Ocean House by Ellington - living room.jpg"),
  cdn("Ocean House by Ellington -typical kitchen.jpg"),
  cdn("Ocean House by Ellington -typical bathroom.jpg"),
  cdn("Ocean House by Ellington - Balcony view day.jpg"),
  cdn("Ocean House by Ellington - Balcony view night.jpg"),
  cdn("Ocean House by Ellington - Penthouse private pool.jpg"),
];

const HANDOVER = "Q2 2026";
const PAYMENT_PLAN = "60% / 40%";

// ======================================================
// DATA
// ======================================================
export const oceanHouseData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Ocean House by Ellington | Ultra-Luxury Residences on Palm Jumeirah",
      description:
        "Ocean House by Ellington Properties offers ultra-luxury 2 & 4 bedroom residences on Palm Jumeirah. Starting from AED 22,580,828 with a 60/40 payment plan and handover in Q2 2026.",
      keywords:
        "Ocean House, Ellington Properties, Palm Jumeirah apartments, ultra luxury Dubai",
      canonical: "/properties/apartments/ellington/ocean-house",
    },

    project: {
      name: "Ocean House",
      developer: "Ellington Properties",
      location: "Palm Jumeirah, Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 22,580,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Ultra-Luxury Residences",
      units: "2 & 4 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "OCEAN HOUSE — ICONIC PALM JUMEIRAH LIVING",
      paragraphs: [
        "Ocean House by Ellington Properties is an ultra-exclusive residential landmark on Palm Jumeirah, designed for discerning homeowners seeking privacy, space, and architectural excellence.",
        `Residences include expansive 2 and 4-bedroom homes starting from AED 22,580,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        {
          title: "Payment Plan",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Ocean House by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💎",
          value: "AED 22.58M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "4,212 – 8,716 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌴",
          value: "Palm Jumeirah",
          label: "Iconic Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Ocean House",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "4,212.56 sq.ft",
            "Starting Price": "AED 22,580,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["Panoramic Sea Views", "Private Terraces"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "8,716.82 sq.ft",
            "Starting Price": "AED 49,284,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_4BR],
          features: ["Private Pools", "Penthouse-Scale Living"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Private Pools & Decks", icon: "🏊‍♂️", color: "#d7b46a" },
        { label: "Wellness Spa & Studios", icon: "🧘", color: "#d7b46a" },
        { label: "Residents Club & Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Co-Working & Meeting Rooms", icon: "💼", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Ocean House",
      address: "Palm Jumeirah, Dubai, UAE",
      lat: 25.1332222,
      lng: 55.1518909,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "Direct Palm Jumeirah frontage." },
        { icon: "🏝️", text: "Minutes from beaches & resorts." },
        { icon: "🚗", text: "Easy access to Sheikh Zayed Road." },
      ],
    },

    cta: {
      title: "Own a Landmark Home at Ocean House",
      description:
        "Request availability, pricing, and official Ellington documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Payment Plan", action: "download-payment-plan" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title: "أوشن هاوس من إلينغتون | مساكن فاخرة للغاية في نخلة جميرا",
      description:
        "أوشن هاوس من إلينغتون العقارية يوفر مساكن فائقة الفخامة من 2 و4 غرف نوم في نخلة جميرا. تبدأ الأسعار من 22,580,828 درهم مع خطة سداد 60/40 والتسليم في الربع الثاني 2026.",
      keywords:
        "أوشن هاوس، إلينغتون، نخلة جميرا، شقق فاخرة دبي، مساكن فائقة الفخامة",
      canonical: "/properties/apartments/ellington/ocean-house",
    },

    project: {
      name: "أوشن هاوس",
      developer: "إلينغتون العقارية",
      location: "نخلة جميرا، دبي، الإمارات",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "22,580,828 درهم",
      completionDate: "الربع الثاني 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "مساكن فائقة الفخامة",
      units: "غرفتين و4 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "إلينغتون العقارية",
      rating: null,
      videoUrl: VIDEO, // ✅ parity
    },

    intro: {
      title: "أوشن هاوس — أسلوب حياة أيقوني في نخلة جميرا",
      paragraphs: [
        "أوشن هاوس من إلينغتون العقارية هو معلم سكني فائق الحصرية في نخلة جميرا، صُمّم لأصحاب الذوق الرفيع الباحثين عن الخصوصية والمساحات الواسعة والتميّز المعماري.",
        `تضم المساكن وحدات واسعة من غرفتين و4 غرف نوم تبدأ من 22,580,828 درهم مع خطة سداد ${PAYMENT_PLAN} والتسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "مخططات الوحدات", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "خطة السداد", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "أوشن هاوس من إلينغتون",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💎",
          value: "22.58M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "4,212 – 8,716 قدم²",
          label: "المساحة الإجمالية",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌴",
          value: "نخلة جميرا",
          label: "موقع أيقوني",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Ocean House",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br", // ✅ IMPORTANT
          title: "غرفتين نوم",
          bedrooms: 2, // ✅ parity
          specs: {
            "إجمالي المساحة": "4,212.56 قدم²",
            "السعر الابتدائي": "22,580,828 درهم",
            "موعد التسليم": "الربع الثاني 2026",
            "خطة السداد": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["إطلالات بحرية بانورامية", "تراسات خاصة"], // ✅ parity concept
        },
        {
          id: "4br", // ✅ IMPORTANT
          title: "4 غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "8,716.82 قدم²",
            "السعر الابتدائي": "49,284,828 درهم",
            "موعد التسليم": "الربع الثاني 2026",
            "خطة السداد": PAYMENT_PLAN,
          },
          images: [FP_4BR],
          features: ["مسابح خاصة", "مساحات بمستوى بنتهاوس"], // ✅ parity concept
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسابح خاصة وتراسات", icon: "🏊‍♂️", color: "#d7b46a" },
        { label: "سبا وعافية", icon: "🧘", color: "#d7b46a" },
        { label: "نادي للسكان وسينما", icon: "🎬", color: "#d7b46a" },
        { label: "مساحات عمل وغرف اجتماعات", icon: "💼", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "أوشن هاوس",
      address: "نخلة جميرا، دبي، الإمارات",
      lat: 25.1332222,
      lng: 55.1518909,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "واجهة مباشرة على نخلة جميرا." },
        { icon: "🏝️", text: "دقائق من الشواطئ والمنتجعات." },
        { icon: "🚗", text: "سهولة الوصول إلى شارع الشيخ زايد." },
      ],
    },

    cta: {
      title: "امتلك منزلًا أيقونيًا في أوشن هاوس",
      description: "اطلب التوافر والأسعار والملفات الرسمية من إلينغتون اليوم.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "خطة السداد", action: "download-payment-plan" },
      ],
    },
  },
};

export default oceanHouseData;
