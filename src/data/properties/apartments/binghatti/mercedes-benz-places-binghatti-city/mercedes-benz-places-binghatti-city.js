// src/data/properties/apartments/binghatti/mercedes-benz-places-binghatti-city.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Folder: /binghatti/mercedes-benz-places-binghatti-city
// ✅ Uses EXACT filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/binghatti/mercedes-benz-places-binghatti-city";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs (EXACT filenames)
const BROCHURE_PDF = cdn("mbp-bc-brochure.pdf");
const LOCATION_PDF = cdn("mbp-bc-location.pdf");

// Extra PDFs you uploaded (keep as secondary brochures)
const MAYBACH_6_BROCHURE_PDF = cdn("mbp-maybach-6-brochure.pdf");
const MAYBACH_6_VISION_PDF = cdn("mbp-maybach-6-vision.pdf");
const MAYBACH_ULTIMATE_LUXURY_VISION_PDF = cdn(
  "mbp-maybach-ultimate-luxury-vision.pdf",
);

// Not present in your folder list as “facts/floorplans pdf”
const FACTS_PDF = null;
const FLOORPLANS_PDF = null;

// Floor plan images (EXACT filenames)
const FP_STUDIO = cdn("Mercedes Binghatti City studio floor plan.png");
const FP_2BR = cdn("Mercedes Binghatti city 2br floor plan.png");
const FP_3BR = cdn("Mercedes Binghatti city 3br floor plan.png");

// Gallery (EXACT filenames you listed)
const GALLERY = [
  cdn("25006_aerial shot-2.jpg"),
  cdn("25006_aerial shot-fog-logo.jpg"),
  cdn("25006_aerial shottttt-fog.jpg"),
  cdn("25006_aerial shotttttt.jpg"),
  cdn("25006_aerialNight_shot -Final-Full.jpg"),
  cdn("25006_aerialNight_shot -Final.jpg"),
  cdn("25006_Bird_Back.jpg"),
  cdn("25006_Blue_Semi_Bird.jpg"),
  cdn("25006_Street Shot.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View05_Halfres.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View06_Halfres.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View06.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View07_Halfres.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View07.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View08_Halfres.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View08.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View09_Halfres.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View09.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View10_Halfres.jpg"),
  cdn("250850_Binghatti_MasterCommunity_View10.jpg"),
  cdn("Bedroom_Cam01.jpg"),
  cdn("CAM08-14.jpg"),
  cdn("Kitchen-P1-001_Post-01.png"),
  cdn("Kitchen-P1-001_Post-02.png"),
  cdn("Kitchen-P1-001.jpg"),
  cdn("Kitchen-P1-002_Post copy00.jpg"),
  cdn("Kitchen-P1-002_Post-01.jpg"),
  cdn("Kitchen-P1-002_Post0.jpg"),
  cdn("Kitchen-P1-002.jpg"),
  cdn("Kitchen-P1-003.jpg"),
  cdn("Living_ CAM01 DAY JPEG.jpg"),
  cdn("Living_ CAM01 Night JPEG.jpg"),
  cdn("Living_ CAM03 DAY JPEG REV 02.jpg"),
  cdn("Living_ CAM03 Night JPEG REV 02.jpg"),
  cdn("LOBBY_DAY REV02 01 JPEG.jpg"),
  cdn("LOBBY_DUSK REV02 01 JPEG.jpg"),
  cdn("Parking_01.2 copy.jpg"),
  cdn("Parking_02.2 copy.jpg"),
  cdn("Parking_02.3 copy.jpg"),
  cdn("Parking_04 copy.jpg"),
  cdn("Parking_06 copy.jpg"),
];

// Hero / Intro images
const HERO_BG = cdn("25006_aerialNight_shot -Final-Full.jpg");
const INTRO_MAIN = cdn("Living_ CAM01 DAY JPEG.jpg");

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif";

// ✅ Your latest unit info (provided now)
const HANDOVER = "On Request"; // you didn't provide it yet
const PAYMENT_PLAN = "On Request"; // you didn't provide it yet

export const mercedesBenzPlacesBinghattiCityData = {
  en: {
    seo: {
      title:
        "Mercedes-Benz Places | Binghatti City in Dubai | Studio, 2BR & 3BR | From AED 1,372,000",
      description:
        "Mercedes-Benz Places | Binghatti City is a premium branded residential project in Dubai. Studio units start from AED 1,372,000, with 2-bedroom units from AED 3,205,000 and 3-bedroom units from AED 4,950,000. Explore floor plans, brochures, and full visuals.",
      keywords:
        "Mercedes-Benz Places Binghatti City, Binghatti, Dubai branded residences, studio, 2 bedroom, 3 bedroom",
      canonical:
        "/properties/apartments/binghatti/mercedes-benz-places-binghatti-city",
    },

    project: {
      name: "Mercedes-Benz Places | Binghatti City",
      developer: "Binghatti",
      location: "Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 1,372,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio, 2 & 3 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Binghatti",
      rating: null,
    },

    intro: {
      title: "MERCEDES-BENZ PLACES | BINGHATTI CITY — BRANDED LUXURY IN DUBAI",
      paragraphs: [
        "Mercedes-Benz Places | Binghatti City introduces a distinctive branded-living experience in Dubai, designed for buyers who value identity-driven architecture, premium finishes, and an elevated lifestyle atmosphere.",
        "The media set highlights exterior perspectives, interior scenes, lobby environments, and community views—giving a complete visual impression of the project’s look and feel.",
        "Studios start from AED 1,372,000 (379.75 sq.ft), 2-bedroom units from AED 3,205,000 (992 sq.ft), and 3-bedroom units from AED 4,950,000 (1371.75 sq.ft). Download the available documents below and explore the gallery.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Location Document", url: LOCATION_PDF, type: "secondary" },
        {
          title: "Maybach 6 Brochure",
          url: MAYBACH_6_BROCHURE_PDF,
          type: "secondary",
        },
        {
          title: "Maybach 6 Vision",
          url: MAYBACH_6_VISION_PDF,
          type: "secondary",
        },
        {
          title: "Maybach Ultimate Luxury Vision",
          url: MAYBACH_ULTIMATE_LUXURY_VISION_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Mercedes-Benz Places | Binghatti City visuals",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,372,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "379.75 sq.ft",
          label: "Studio Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Dubai",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Mercedes-Benz Places | Binghatti City Visuals",
      slides: GALLERY,
      projectTag: "Mercedes-Benz Places | Binghatti City",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "379.75 sq.ft",
            "Starting Price": "AED 1,372,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "992 sq.ft",
            "Starting Price": "AED 3,205,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1371.75 sq.ft",
            "Starting Price": "AED 4,950,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF, // stays null (not provided in folder list)
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Branded Luxury Concept", icon: "⭐", color: "#d7b46a" },
        { label: "Iconic Design Identity", icon: "✨", color: "#d7b46a" },
        { label: "Premium Interiors", icon: "🛋️", color: "#d7b46a" },
        { label: "Lifestyle Experience", icon: "🏙️", color: "#d7b46a" },
        { label: "Investor Appeal", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Mercedes-Benz Places | Binghatti City",
      address: "Mercedes-Benz Places | Binghatti City, Dubai, UAE",
      // from your Google Maps link earlier:
      lat: 25.1633125,
      lng: 55.3256875,
      zoom: 15,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Well-connected Dubai address with easy access routes.",
        },
        {
          icon: "🏙️",
          text: "Positioned for an elevated urban lifestyle experience.",
        },
        { icon: "⭐", text: "A signature branded-living destination." },
      ],
    },

    cta: {
      title: "Interested in Mercedes-Benz Places | Binghatti City?",
      description:
        "Share your details to receive availability, unit options, and the official documents for this project.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Location", action: "download-location" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "ميرسيدس-بنز بليسز | بن غاطي سيتي في دبي | استوديو، 2 و3 غرف | يبدأ من 1,372,000 درهم",
      description:
        "ميرسيدس-بنز بليسز | بن غاطي سيتي مشروع سكني فاخر بعلامة تجارية في دبي. يبدأ الاستوديو من 1,372,000 درهم، وتبدأ شقق غرفتين من 3,205,000 درهم، وتبدأ شقق 3 غرف من 4,950,000 درهم. استعرض المخططات والوثائق والصور.",
      keywords:
        "ميرسيدس-بنز بليسز بن غاطي سيتي, بن غاطي, دبي, استوديو, غرفتين, 3 غرف",
      canonical:
        "/properties/apartments/binghatti/mercedes-benz-places-binghatti-city",
    },

    project: {
      name: "ميرسيدس-بنز بليسز | بن غاطي سيتي",
      developer: "بن غاطي",
      location: "دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "1,372,000 درهم",
      completionDate: "حسب الطلب",
      paymentPlan: "حسب الطلب",
      type: "شقق سكنية",
      units: "استوديو، غرفتان، 3 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "بن غاطي",
      rating: null,
    },

    intro: {
      title: "ميرسيدس-بنز بليسز | بن غاطي سيتي — فخامة بعلامة تجارية في دبي",
      paragraphs: [
        "يقدم مشروع ميرسيدس-بنز بليسز | بن غاطي سيتي مفهوم السكن الفاخر بعلامة تجارية في دبي، مع تركيز على هوية تصميم مميزة وتشطيبات راقية وتجربة نمط حياة حضرية استثنائية.",
        "توضح مجموعة الصور الواجهات الخارجية والمساحات الداخلية واللوبي ومشاهد المجتمع، لتكوين صورة كاملة عن أسلوب المشروع وأجوائه.",
        "يبدأ الاستوديو من 1,372,000 درهم (379.75 قدم²)، وتبدأ شقق غرفتين من 3,205,000 درهم (992 قدم²)، وتبدأ شقق 3 غرف من 4,950,000 درهم (1371.75 قدم²). يمكنك تحميل الوثائق المتاحة أدناه واستعراض معرض الصور.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف الموقع", url: LOCATION_PDF, type: "secondary" },
        {
          title: "كتيّب مايباخ 6",
          url: MAYBACH_6_BROCHURE_PDF,
          type: "secondary",
        },
        {
          title: "رؤية مايباخ 6",
          url: MAYBACH_6_VISION_PDF,
          type: "secondary",
        },
        {
          title: "رؤية مايباخ الفاخرة",
          url: MAYBACH_ULTIMATE_LUXURY_VISION_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "صور ميرسيدس-بنز بليسز | بن غاطي سيتي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,372,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "379.75 قدم²",
          label: "مساحة الاستوديو",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "دبي",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "ميرسيدس-بنز بليسز | بن غاطي سيتي",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "379.75 قدم مربع",
            "السعر الابتدائي": "1,372,000 درهم",
            "موعد التسليم": "حسب الطلب",
            "خطة الدفع": "حسب الطلب",
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "992 قدم مربع",
            "السعر الابتدائي": "3,205,000 درهم",
            "موعد التسليم": "حسب الطلب",
            "خطة الدفع": "حسب الطلب",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1371.75 قدم مربع",
            "السعر الابتدائي": "4,950,000 درهم",
            "موعد التسليم": "حسب الطلب",
            "خطة الدفع": "حسب الطلب",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "سكن فاخر بعلامة تجارية", icon: "⭐", color: "#d7b46a" },
        { label: "هوية تصميم مميزة", icon: "✨", color: "#d7b46a" },
        { label: "تشطيبات راقية", icon: "🛋️", color: "#d7b46a" },
        { label: "تجربة نمط حياة", icon: "🏙️", color: "#d7b46a" },
        { label: "فرصة استثمارية", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "ميرسيدس-بنز بليسز | بن غاطي سيتي",
      address: "ميرسيدس-بنز بليسز | بن غاطي سيتي، دبي، الإمارات",
      lat: 25.1633125,
      lng: 55.3256875,
      zoom: 15,
      proximityFeatures: [
        { icon: "🚗", text: "موقع في دبي مع سهولة الوصول عبر الطرق." },
        { icon: "🏙️", text: "موقع مناسب لتجربة سكنية حضرية راقية." },
        { icon: "⭐", text: "وجهة مميزة للسكن بعلامة تجارية." },
      ],
    },

    cta: {
      title: "مهتم بميرسيدس-بنز بليسز | بن غاطي سيتي؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات والوثائق الرسمية للمشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل ملف الموقع", action: "download-location" },
      ],
    },
  },
};

export default mercedesBenzPlacesBinghattiCityData;
