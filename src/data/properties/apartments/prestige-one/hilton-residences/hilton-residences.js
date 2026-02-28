// hiltonResidencesDMCData.js
// ✅ Floor plans REMOVED from gallery (ONLY inside floorPlans.images)
// ✅ Keeps your CONFIRMED floorplan constants + SAME PATHS exactly
// ✅ Bunny is CASE-SENSITIVE, uses encodeURI
// ✅ Structure kept 100% compatible (same keys + floorPlans.type="apartments")

const BUNNY_BASE_URL =
  "https://luxury-real-estate-media.b-cdn.net/prestige-one/hilton-residences";

/**
 * IMPORTANT:
 * - Bunny is CASE-SENSITIVE
 * - We use encodeURI so spaces become %20 but slashes remain valid if you add folders later
 */
const cdn = (fileName) => `${BUNNY_BASE_URL}/${encodeURI(fileName)}`;

/**
 * ✅ CONFIRMED (from your Bunny screenshot — exact filenames)
 * NOTE: keep the same capitalization + typos (pln / floon).
 */
const FP_1BR = `https://luxury-real-estate-media.b-cdn.net/prestige-one/hilton-residences/Facade%207-%20Hilton%20Residences%20DMC.jpg`;
const FP_2BR = cdn("Hilton 2br Floor Plan.png");
const FP_2BR_MAID = cdn("hilton 2br + maid floor pln.png");
const FP_2BR_PENTHOUSE = cdn("Hilton 2br penthouse floor plan.png");
const FP_3BR = cdn("Hilton 3br floon plan.png");
const FP_3BR_PENTHOUSE = cdn("Hilton 3br penthouse floor plan.png");
const FP_5BR_PENTHOUSE = cdn("Hilton 5br penthouse floor plan.png");

/* ----------------------------
  ✅ Other Bunny files (from your screenshot)
----------------------------- */
const IMG_FACADE_1 = cdn("Facade 1- Hilton Residences DMC.jpg");
const IMG_FACADE_2 = cdn("Facade 2- Hilton Residences DMC.jpg");
const IMG_FACADE_3 = cdn("Facade 3- Hilton Residences DMC.jpg");
const IMG_FACADE_4 = cdn("Facade 4- Hilton Residences DMC.jpg");
const IMG_FACADE_5 = cdn("Facade 5- Hilton Residences DMC.jpg");
const IMG_FACADE_6 = cdn("Facade 6- Hilton Residences DMC.jpg");
const IMG_FACADE_7 = cdn("Facade 7- Hilton Residences DMC.jpg");
const IMG_FACADE_8 = cdn("Facade 8- Hilton Residences DMC.jpg");
const IMG_FACADE_9 = cdn("Facade 9- Hilton Residences DMC.jpg");

const IMG_1BED_BATHROOM = cdn("1BED_Bathroom_- Hilton Residences DMC.jpg");
const IMG_1BED_BEDROOM = cdn("1BED_Bedroom_- Hilton Residences DMC.jpg");
const IMG_3BR_LDK = cdn("3BR_Living-Dining-kitchen- Hilton Residences DMC.jpg");

const IMG_CINEMA = cdn("Cinema- Hilton Residences DMC.jpg");
const IMG_DAY_CAM = cdn("Day-Cam- Hilton Residences DMC.jpg");
const IMG_GAME_AREA = cdn("Game-Area- Hilton Residences DMC.jpg");
const IMG_KIDS_AREA = cdn("Kids-Area- Hilton Residences DMC.jpg");
const IMG_LIFT_LOBBY = cdn("Lift-Lobby- Hilton Residences DMC.jpg");
const IMG_MAIN_LOBBY = cdn("Main-Lobby_V2- Hilton Residences DMC.jpg");
const IMG_OWNERS_LOUNGE = cdn(
  "Prestige_Owners-Lounge- Hilton Residences DMC.jpg"
);
const IMG_PUBLIC_TOILET = cdn("Public-toilet- Hilton Residences DMC.jpg");

const IMG_PH_3BED_M_BATH = cdn(
  "Penthouse 3BED_M-Bathroom- Hilton Residences DMC.jpg"
);
const IMG_PH_3BED_LDK = cdn(
  "Penthouse 3Bed-Living-Dining-Kitchen- Hilton Residences DMC.jpg"
);
const IMG_PH_DINING = cdn("Penthouse_Dining- Hilton Residences DMC.jpg");
const IMG_PH_LIVING = cdn("Penthouse_Living- Hilton Residences DMC.jpg");
const IMG_PH_MASTER_BATH = cdn(
  "Penthouse_Master-Bathroom- Hilton Residences DMC.jpg"
);
const IMG_PH_MASTER_BED = cdn(
  "Penthouse_Master-Bedroom- Hilton Residences DMC.jpg"
);

/* ----------------------------
  ✅ PDFs (present in screenshot)
  NOTE: you told me not to add PDFs unless exact filenames — so we keep them here,
  but brochures array stays empty as you requested.
----------------------------- */
const BROCHURE_PDF = cdn(
  "Brochure - Hilton Residences Dubai Maritime City.pdf"
);
const FLOORPLAN_PDF = cdn(
  "Floor Plan - Hilton Residences Dubai Maritime City.pdf"
);

/* ----------------------------
  ✅ Gallery (NO floor plans here)
----------------------------- */
const GALLERY = [
  IMG_FACADE_1,
  IMG_FACADE_2,
  IMG_FACADE_3,
  IMG_FACADE_4,
  IMG_FACADE_5,
  IMG_FACADE_6,
  IMG_FACADE_7,
  IMG_FACADE_8,
  IMG_FACADE_9,

  IMG_MAIN_LOBBY,
  IMG_LIFT_LOBBY,
  IMG_OWNERS_LOUNGE,
  IMG_CINEMA,
  IMG_GAME_AREA,
  IMG_KIDS_AREA,
  IMG_DAY_CAM,
  IMG_PUBLIC_TOILET,

  IMG_1BED_BEDROOM,
  IMG_1BED_BATHROOM,
  IMG_3BR_LDK,

  IMG_PH_LIVING,
  IMG_PH_DINING,
  IMG_PH_3BED_LDK,
  IMG_PH_MASTER_BED,
  IMG_PH_MASTER_BATH,
  IMG_PH_3BED_M_BATH,
];

export const hiltonResidencesDMCData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "Hilton Residences Dubai Maritime City | Waterfront Apartments & Penthouses",
      description:
        "Hilton Residences Dubai Maritime City offers premium 1–3BR apartments and penthouses with branded living, sea views, and lifestyle amenities. Handover Q2 2029 with a 20/45/35 payment plan.",
      keywords:
        "hilton residences dubai maritime city, prestige one, branded residences dubai, waterfront apartments dubai, penthouse dubai maritime city",
      canonical: "/properties/apartments/prestige-one/hilton-residences",
    },

    project: {
      name: "Hilton Residences Dubai Maritime City",
      developer: "Prestige One Developments",
      location: "Dubai Maritime City, Dubai",
      status: "Off-Plan",
      startingPrice: "From AED 3,191,000",
      completionDate: "Q2 2029",
      paymentPlan: "65% / 35%",
      unitTypes: "Apartments, Penthouse",
      serviceCharge: "20 AED/sqft",
    },

    hero: {
      // ✅ guaranteed existing file (so hero never breaks)
      backgroundUrl: FP_1BR,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png",
      companyName: "Prestige One",
      rating: null,
    },

    intro: {
      title: "BRANDED WATERFRONT LIVING IN DUBAI MARITIME CITY",
      paragraphs: [
        "Hilton Residences Dubai Maritime City is presented as a landmark waterfront development where refined architecture meets a lifestyle shaped by sea views and serene urban living.",
        "Positioned at the tip of Dubai Maritime City, it blends skyline panoramas, coastal ambiance, and a curated selection of amenities—enhanced by hospitality-inspired living standards.",
      ],
      // ✅ as you requested: do not add PDFs in brochures
      brochures: [],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/prestige-one/hilton-residences/Facade%203-%20Hilton%20Residences%20DMC.jpg",
      imgAlt: "Hilton Residences DMC",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q2 2029",
          label: "Handover",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "20/45/35",
          label: "Payment Plan",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "DMC",
          label: "Waterfront Living",
        },
      ],
    },

    gallery: {
      title: "Project Visuals",
      slides: GALLERY, // ✅ NO floor plans here
      projectTag: "Hilton Residences DMC",
    },

    // ✅ Floor plans ONLY here (paths kept)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Residence",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM RESIDENCE",
            "Total Range": "803.31 - 912.78 SQ.FT.",
            "Starting Price": "AED 3,191,000",
            Handover: "Q2 2029",
          },
          images: [FP_1BR],
          features: ["Branded living", "Waterfront district", "Premium layout"],
        },
        {
          id: "2br",
          title: "2 Bedroom Residence",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM RESIDENCE",
            "Total Range": "1,208.89 - 2,644.48 SQ.FT.",
            "Starting Price": "AED 5,198,000",
            Handover: "Q2 2029",
          },
          images: [FP_2BR],
          features: [
            "Spacious family home",
            "Modern layout",
            "Lifestyle amenities",
          ],
        },
        {
          id: "3br",
          title: "3 Bedroom Residence",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOM RESIDENCE",
            "Total Range": "2,075.39 - 3,440.15 SQ.FT.",
            "Starting Price": "AED 8,208,000",
            Handover: "Q2 2029",
          },
          images: [FP_3BR],
          features: [
            "Large family layout",
            "Premium size",
            "Waterfront living",
          ],
        },
        {
          id: "5br-penthouse",
          title: "5 Bedroom Penthouse",
          bedrooms: 5,
          specs: {
            Unit: "5 BEDROOM PENTHOUSE",
            "Total Range": "Not Available",
            "Starting Price": "Not Available",
            Handover: "Q2 2029",
          },
          images: [FP_5BR_PENTHOUSE],
          features: [
            "Penthouse lifestyle",
            "Signature layouts",
            "Premium views",
          ],
        },
      ],
      brochureHref: FLOORPLAN_PDF, // ✅ kept (exact filename in screenshot)
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Horizon Edge Lagoon", icon: "🌊", color: "#d7b46a" },
        { label: "Outdoor Lounge", icon: "🛋️", color: "#d7b46a" },
        { label: "BBQ Deck", icon: "🍖", color: "#d7b46a" },
        { label: "Little Explorer's Hub", icon: "🧸", color: "#d7b46a" },
        { label: "Multipurpose Court", icon: "🏀", color: "#d7b46a" },
        { label: "Hammock Library", icon: "📚", color: "#d7b46a" },
        { label: "HIIT Workout Area", icon: "💪", color: "#d7b46a" },
        { label: "Infinity Skyline Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Casual Sky Lounge", icon: "🌇", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Hilton Residences Dubai Maritime City",
      address: "Dubai Maritime City, Dubai, UAE",
      lat: 25.28,
      lng: 55.27,
      zoom: 13,
      proximityFeatures: [
        { icon: "⚓", text: "Waterfront peninsula setting" },
        { icon: "🏙️", text: "Easy access to central Dubai districts" },
        {
          icon: "✈️",
          text: "Convenient connectivity to DXB (traffic dependent)",
        },
      ],
    },

    nearbyAttractions: {
      title: "Nearby Attractions",
      attractions: [
        { name: "Port Rashid", distance: null, time: "10–15 min", icon: "⚓" },
        {
          name: "Downtown Dubai",
          distance: null,
          time: "20–25 min",
          icon: "🏙️",
        },
        { name: "DXB Airport", distance: null, time: "20–30 min", icon: "✈️" },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title:
        "هيلتون ريزيدنسز دبي مارايتيم سيتي | شقق وبنتهاوس على الواجهة البحرية",
      description:
        "هيلتون ريزيدنسز دبي مارايتيم سيتي يقدّم شقق 1–3 غرف وبنتهاوس مع أسلوب حياة بعلامة فندقية ومرافق راقية. التسليم Q2 2029 وخطة دفع 20/45/35.",
      keywords:
        "هيلتون ريزيدنسز, دبي مارايتيم سيتي, بريستيج ون, شقق على البحر دبي, بنتهاوس دبي",
      canonical: "/properties/apartments/prestige-one/hilton-residences",
    },

    project: {
      name: "Hilton Residences Dubai Maritime City",
      developer: "Prestige One Developments",
      location: "دبي مارايتيم سيتي، دبي",
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 3,191,000 درهم",
      completionDate: "الربع الثاني 2029",
      paymentPlan: "65% / 35%",
      unitTypes: "شقق، بنتهاوس",
      serviceCharge: "20 درهم/قدم²",
    },

    hero: {
      backgroundUrl: FP_1BR,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png",
      companyName: "Prestige One",
      rating: null,
    },

    intro: {
      title: "حياة بعلامة هيلتون على الواجهة البحرية في دبي مارايتيم سيتي",
      paragraphs: [
        "هيلتون ريزيدنسز دبي مارايتيم سيتي مشروع واجهة بحرية بتصميم راقٍ وإطلالات بحرية وأفق دبي، مع أسلوب حياة هادئ ومرافق منتقاة.",
        "يوفّر المشروع بيئة سكنية تجمع بين الراحة اليومية والخدمات المستوحاة من معايير الضيافة.",
      ],
      brochures: [],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/prestige-one/hilton-residences/Facade%203-%20Hilton%20Residences%20DMC.jpg",
      imgAlt: "هيلتون ريزيدنسز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q2 2029",
          label: "التسليم",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "20/45/35",
          label: "خطة الدفع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "DMC",
          label: "واجهة بحرية",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY, // ✅ NO floor plans here
      projectTag: "Hilton Residences DMC",
    },

    // ✅ Floor plans ONLY here (paths kept)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "شقة غرفة نوم واحدة",
            "نطاق المساحة الإجمالية": "803.31 - 912.78 قدم²",
            "السعر الابتدائي": "3,191,000 درهم",
            "موعد التسليم": "الربع الثاني 2029",
          },
          images: [FP_1BR],
          features: ["سكن بعلامة فندقية", "منطقة بحرية", "تصميم عملي"],
        },
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "شقة غرفتين نوم",
            "نطاق المساحة الإجمالية": "1,208.89 - 2,644.48 قدم²",
            "السعر الابتدائي": "5,198,000 درهم",
            "موعد التسليم": "الربع الثاني 2029",
          },
          images: [FP_2BR, FP_2BR_MAID, FP_2BR_PENTHOUSE],
          features: ["مساحات عائلية", "تشطيبات راقية", "مرافق متكاملة"],
        },
        {
          id: "3br",
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "شقة 3 غرف نوم",
            "نطاق المساحة الإجمالية": "2,075.39 - 3,440.15 قدم²",
            "السعر الابتدائي": "8,208,000 درهم",
            "موعد التسليم": "الربع الثاني 2029",
          },
          images: [FP_3BR, FP_3BR_PENTHOUSE],
          features: ["مساحات كبيرة", "مناسب للعائلات", "إطلالات بحرية"],
        },
        {
          id: "5br-penthouse",
          title: "بنتهاوس 5 غرف نوم",
          bedrooms: 5,
          specs: {
            "نوع الوحدة": "بنتهاوس 5 غرف نوم",
            "نطاق المساحة الإجمالية": "غير متوفر",
            "السعر الابتدائي": "غير متوفر",
            "موعد التسليم": "الربع الثاني 2029",
          },
          images: [FP_5BR_PENTHOUSE],
          features: ["أسلوب بنتهاوس", "مخططات مميزة", "إطلالات راقية"],
        },
      ],
      brochureHref: FLOORPLAN_PDF, // ✅ kept
    },

    amenities: {
      title: "المرافق وأسلوب الحياة",
      amenities: [
        { label: "سينما", icon: "🎬", color: "#d7b46a" },
        { label: "لاجون حافة الأفق", icon: "🌊", color: "#d7b46a" },
        { label: "لاونج خارجي", icon: "🛋️", color: "#d7b46a" },
        { label: "BBQ", icon: "🍖", color: "#d7b46a" },
        { label: "مركز الأطفال", icon: "🧸", color: "#d7b46a" },
        { label: "ملعب متعدد الاستخدام", icon: "🏀", color: "#d7b46a" },
        { label: "مكتبة هاموك", icon: "📚", color: "#d7b46a" },
        { label: "منطقة HIIT", icon: "💪", color: "#d7b46a" },
        { label: "مسبح إنفينيتي", icon: "🏊", color: "#d7b46a" },
        { label: "سكاي لاونج", icon: "🌇", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Hilton Residences Dubai Maritime City",
      address: "دبي مارايتيم سيتي، دبي، الإمارات",
      lat: 25.28,
      lng: 55.27,
      zoom: 13,
      proximityFeatures: [
        { icon: "⚓", text: "موقع بحري على شبه جزيرة" },
        { icon: "🏙️", text: "سهولة الوصول إلى أهم مناطق دبي" },
        { icon: "✈️", text: "اتصال مريح بمطار دبي (حسب الزحمة)" },
      ],
    },

    nearbyAttractions: {
      title: "قريب من أهم المعالم",
      attractions: [
        { name: "ميناء راشد", distance: null, time: "10–15 دقيقة", icon: "⚓" },
        {
          name: "داون تاون دبي",
          distance: null,
          time: "20–25 دقيقة",
          icon: "🏙️",
        },
        {
          name: "مطار دبي الدولي",
          distance: null,
          time: "20–30 دقيقة",
          icon: "✈️",
        },
      ],
    },
  },
};
