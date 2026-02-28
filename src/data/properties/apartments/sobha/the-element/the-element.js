// src/data/properties/apartments/sobha/the-element.js

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const THE_ELEMENT_DIR = "/sobha-the-element";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${THE_ELEMENT_DIR}/${encodeURIComponent(fileName)}`;

// ========================
// PDFs (tailored to The Element)
// ========================
const BROCHURE_PDF = cdn("The Element- Brochure.pdf");
const FLOORPLANS_PDF = cdn("The Element.pdf");
const MOODBOARD_PDF = cdn("Mood Board__The Element at Sobha One.pdf");

// ========================
// Floor plan images
// ========================
const FP_1BR = cdn("Element 1br floor plan.png");
const FP_2BR = cdn("Element 2br floor plan.png");
const FP_3BR = cdn("Element 3br floor plan.png");
const FP_4BR = cdn("Element 4br floor plan.png");

// ========================
// Common images (The Element directory)
// ========================
const IMG_AERIAL = cdn("Aerial Shot.jpg");
const IMG_AERIAL_NIGHT = cdn("Aerial Shot (Night).jpg");
const IMG_AERIAL_PODIUM = cdn("Aerial Podium.jpg");
const IMG_ELEVATION_VIEWS = cdn("Elevation and views.jpg");
const IMG_ELEVATION = cdn("Elevation.jpg");
const IMG_DROPOFF = cdn("Drop Off.jpg");
const IMG_LIVING_DINING = cdn("Living + Dining.jpg");
const IMG_LIVING = cdn("Living.png");
const IMG_BEDROOM_1 = cdn("Bedroom (1).jpg");
const IMG_BEDROOM_2 = cdn("Bedroom (2).jpg");
const IMG_BALCONY = cdn("BalconyShot.jpg");
const IMG_ROOFTOP = cdn("Roof Top.png");
const IMG_SITE_PLAN = cdn("Site Plan.jpg");
const IMG_AMENITIES_1 = cdn("Amenities (1).png");
const IMG_AMENITIES_2 = cdn("Amenities (2).png");
const IMG_AMENITIES_3 = cdn("Amenities (3).png");
const IMG_AMENITIES_4 = cdn("Amenities (4).png");
const IMG_AMENITIES_5 = cdn("L- Amenities (5).png");

export const theElementData = {
  en: {
    seo: {
      title: "The Element at Sobha One | 1–4 Bedroom Apartments in Dubai",
      description:
        "The Element at Sobha One offers premium 1 to 4 bedroom apartments in Ras Al Khor, Dubai, with curated lifestyle amenities and skyline-facing views.",
      keywords:
        "The Element, Sobha One, Sobha Realty, Dubai apartments, 1 bedroom, 2 bedroom, 3 bedroom, 4 bedroom, luxury apartments Dubai, Ras Al Khor",
      canonical: "/properties/apartments/sobha/the-element",
    },

    project: {
      name: "The Element at Sobha One",
      developer: "Sobha Realty",
      location: "Ras Al Khor, Dubai",
      status: "Off-Plan",

      // ✅ blueprint style: paymentPlan exists in project + in floorPlans specs
      startingPrice: "AED 1.83M",
      completionDate: "Q4 2028",
      paymentPlan: "60% / 40%",

      type: "Apartments",
      units: "1–4 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: IMG_AERIAL,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/the-element.svg",
      companyName: "Sobha Realty",
      rating: 4.8,
    },

    intro: {
      title: "A Signature Collection Inside Sobha One",
      paragraphs: [
        "The Element is a premium residential collection within Sobha One, offering refined apartments designed for skyline, creek, and community views.",
        "Choose from 1 to 4 bedroom apartment layouts with thoughtfully planned interiors and curated lifestyle facilities across podium and rooftop levels.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          size: "—",
          category: "Brochure",
          fileName: "The Element - Brochure.pdf",
          description:
            "Project overview including concept, highlights, lifestyle amenities and key details.",
        },
        {
          title: "Download Floor Plans",
          url: FLOORPLANS_PDF,
          type: "floorplans",
          icon: "📐",
          color: "#d7b46a",
          size: "—",
          category: "Floor Plans",
          fileName: "The Element - Floor Plans.pdf",
          description:
            "Unit layouts and area schedules for 1–4 bedroom apartments.",
        },
        {
          title: "Download Mood Board",
          url: MOODBOARD_PDF,
          type: "moodboard",
          icon: "🎨",
          color: "#d7b46a",
          size: "—",
          category: "Mood Board",
          fileName: "The Element - Mood Board.pdf",
          description:
            "Design direction, palette, materials and interior inspiration.",
        },
      ],
      imgUrl: IMG_DROPOFF,
      imgAlt: "The Element drop-off experience at Sobha One, Dubai.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🗓️",
          value: "Q4 2028",
          label: "Handover",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💳",
          value: "60/40",
          label: "Payment Plan",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💰",
          value: "AED 1.83M",
          label: "Starting From",
        },
      ],
    },

    gallery: {
      title: "Gallery",
      slides: [
        IMG_AERIAL,
        IMG_AERIAL_NIGHT,
        IMG_AERIAL_PODIUM,
        IMG_ELEVATION_VIEWS,
        IMG_ELEVATION,
        IMG_DROPOFF,
        IMG_LIVING_DINING,
        IMG_LIVING,
        IMG_BEDROOM_1,
        IMG_BEDROOM_2,
        IMG_BALCONY,
        IMG_ROOFTOP,
        IMG_SITE_PLAN,
        IMG_AMENITIES_1,
        IMG_AMENITIES_2,
        IMG_AMENITIES_3,
        IMG_AMENITIES_4,
        IMG_AMENITIES_5,
      ],
      projectTag: "The Element at Sobha One",
    },

    // ✅ blueprint hierarchy
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1-bedroom",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "753.48 SQ.FT.",
            "Starting Price": "AED 1,896,335",
            Handover: "Q4 2028",
            paymentPlan: "60% / 40%",
          },
          images: [FP_1BR],
        },
        {
          id: "2-bedroom",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,216.86 SQ.FT.",
            "Starting Price": "AED 3,187,392",
            Handover: "Q4 2028",
            paymentPlan: "60% / 40%",
          },
          images: [FP_2BR],
        },
        {
          id: "3-bedroom",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "1,853.87 SQ.FT.",
            "Starting Price": "AED 4,732,102",
            Handover: "Q4 2028",
            paymentPlan: "60% / 40%",
          },
          images: [FP_3BR],
        },
        {
          id: "4-bedroom",
          title: "4 Bedroom Apartment",
          bedrooms: 4,
          specs: {
            "Total Area": "2,445.03 SQ.FT.",
            "Starting Price": "AED 10,494,338",
            Handover: "Q4 2028",
            paymentPlan: "60% / 40%",
          },
          images: [FP_4BR],
        },
      ],
    },

    amenities: {
      title: "Amenities Across Podium, Rooftop & Community",
      amenities: [
        { label: "PADEL COURT", icon: "🎾", color: "#d7b46a" },
        { label: "TABLE TENNIS", icon: "🏓", color: "#d7b46a" },
        { label: "OBSTACLE COURSE / CROSSFIT", icon: "🏋️", color: "#d7b46a" },
        { label: "BATTLE ROPES", icon: "🪢", color: "#d7b46a" },
        { label: "YOGA / MEDITATION DECK", icon: "🧘", color: "#d7b46a" },
        { label: "PET-FRIENDLY SPACES", icon: "🐕", color: "#d7b46a" },
        { label: "OUTDOOR BBQ", icon: "🍖", color: "#d7b46a" },
        { label: "LAWN WITH SEATING", icon: "🌿", color: "#d7b46a" },
        {
          label: "SWIMMING POOL (AQUA FITNESS ACTIVITIES)",
          icon: "🏊",
          color: "#d7b46a",
        },
        { label: "JACUZZI", icon: "💦", color: "#d7b46a" },
        { label: "OBSERVATION DECK", icon: "🔭", color: "#d7b46a" },
        { label: "OUTDOOR GYM", icon: "💪", color: "#d7b46a" },
        { label: "CHILDREN PLAY AREA", icon: "🧸", color: "#d7b46a" },
        { label: "CYCLING / WALKING TRACK", icon: "🚴", color: "#d7b46a" },
        { label: "CO-WORKING & BUSINESS LOUNGE", icon: "💼", color: "#d7b46a" },
        { label: "MULTIPURPOSE HALL", icon: "🏛️", color: "#d7b46a" },
        { label: "INDOOR GYM", icon: "🏋️", color: "#d7b46a" },
        { label: "PILATES & YOGA", icon: "🧘‍♀️", color: "#d7b46a" },
        { label: "KIDS CLUB / TODDLER CLUB", icon: "👶", color: "#d7b46a" },
        { label: "LIBRARY", icon: "📚", color: "#d7b46a" },
        { label: "NURSING ROOM", icon: "🍼", color: "#d7b46a" },
        { label: "CINEMA ROOM", icon: "🎬", color: "#d7b46a" },
        { label: "VR GAMES / YOUTH ZONE", icon: "🎮", color: "#d7b46a" },
        { label: "ROOFTOP LOUNGE", icon: "🌇", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "The Element at Sobha One",
      address: "Ras Al Khor, Dubai, United Arab Emirates",
      lat: 25.185,
      lng: 55.319,
      zoom: 13,
      proximityFeatures: [
        { icon: "🦩", text: "Approx. 5 min to Ras Al Khor Wildlife Sanctuary" },
        { icon: "✈️", text: "Approx. 12 min to Dubai International Airport" },
        { icon: "🏢", text: "Approx. 12 min to Business Bay" },
        { icon: "🛍️", text: "Approx. 15 min to Dubai Mall & Downtown" },
      ],
    },

    nearbyAttractions: {
      title: "At The Heart Of Everything",
      attractions: [
        { name: "Ras Al Khor Wildlife Sanctuary", time: "≈ 5 min", icon: "🦩" },
        {
          name: "Dubai International Airport (DXB)",
          time: "≈ 12 min",
          icon: "✈️",
        },
        { name: "Business Bay", time: "≈ 12 min", icon: "🏢" },
        { name: "Dubai Mall", time: "≈ 15 min", icon: "🛍️" },
        { name: "Burj Khalifa", time: "≈ 15 min", icon: "🏙️" },
        { name: "Dubai Opera", time: "≈ 15 min", icon: "🎭" },
        { name: "Palm Jumeirah", time: "≈ 25 min", icon: "🌴" },
      ],
    },

    cta: {
      title: "Ready To Explore The Element?",
      description:
        "Contact our team to receive updated availability, pricing, and the complete brochure with floor plans and payment plan details.",
      buttons: [
        { text: "Enquire Now", type: "primary", url: "/contact" },
        {
          text: "Download Floor Plans",
          type: "secondary",
          url: FLOORPLANS_PDF,
        },
      ],
    },
  },

  // ========================
  // ARABIC VERSION
  // ========================
  ar: {
    seo: {
      title: "ذا إليمنت في شوبا ون | شقق 1–4 غرف في دبي",
      description:
        "ذا إليمنت ضمن شوبا ون يقدّم شققاً فاخرة من 1 إلى 4 غرف في راس الخور، دبي، مع مرافق أسلوب حياة وإطلالات مميزة.",
      keywords:
        "ذا إليمنت, شوبا ون, شوبا العقارية, شقق دبي, راس الخور, شقق فاخرة دبي, غرفة واحدة, غرفتين, ثلاث غرف, أربع غرف",
      canonical: "/properties/apartments/sobha/the-element",
    },

    project: {
      name: "ذا إليمنت في شوبا ون",
      developer: "شوبا العقارية",
      location: "راس الخور، دبي",
      status: "قيد الإنشاء",

      startingPrice: "ابتداءً من 1.83 مليون درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan: "60% / 40%",

      type: "شقق سكنية",
      units: "شقق 1–4 غرف نوم",
    },

    hero: {
      backgroundUrl: IMG_AERIAL,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/the-element.svg",
      companyName: "شوبا العقارية",
      rating: 4.8,
    },

    intro: {
      title: "مجموعة سكنية مميزة ضمن شوبا ون",
      paragraphs: [
        "ذا إليمنت هو مجموعة سكنية راقية ضمن مشروع شوبا ون، بتصاميم تركز على الإطلالات والمساحات العملية.",
        "خيارات من شقق 1 إلى 4 غرف نوم مع مرافق أسلوب حياة موزعة بين البوديوم والسطح.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب التعريفي",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#d7b46a",
          size: "—",
          category: "بروشور",
          fileName: "ذا إليمنت - بروشور.pdf",
          description:
            "نظرة عامة على المشروع تشمل المزايا والمرافق وأهم التفاصيل.",
        },
        {
          title: "تحميل مخططات الوحدات",
          url: FLOORPLANS_PDF,
          type: "floorplans",
          icon: "📐",
          color: "#d7b46a",
          size: "—",
          category: "مخططات",
          fileName: "ذا إليمنت - مخططات.pdf",
          description: "مخططات الوحدات وجداول المساحات لشقق 1–4 غرف نوم.",
        },
        {
          title: "تحميل المود بورد",
          url: MOODBOARD_PDF,
          type: "moodboard",
          icon: "🎨",
          color: "#d7b46a",
          size: "—",
          category: "مود بورد",
          fileName: "ذا إليمنت - مود بورد.pdf",
          description: "اتجاه التصميم والألوان والمواد والإلهام الداخلي.",
        },
      ],
      imgUrl: IMG_DROPOFF,
      imgAlt: "مدخل ذا إليمنت ضمن شوبا ون في دبي.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🗓️",
          value: "الربع 4 2028",
          label: "التسليم",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💳",
          value: "60/40",
          label: "خطة الدفع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💰",
          value: "1.83M",
          label: "ابتداءً من",
        },
      ],
    },

    gallery: {
      title: "الصور",
      slides: [
        IMG_AERIAL,
        IMG_AERIAL_NIGHT,
        IMG_AERIAL_PODIUM,
        IMG_ELEVATION_VIEWS,
        IMG_ELEVATION,
        IMG_DROPOFF,
        IMG_LIVING_DINING,
        IMG_LIVING,
        IMG_BEDROOM_1,
        IMG_BEDROOM_2,
        IMG_BALCONY,
        IMG_ROOFTOP,
        IMG_SITE_PLAN,
        IMG_AMENITIES_1,
        IMG_AMENITIES_2,
        IMG_AMENITIES_3,
        IMG_AMENITIES_4,
        IMG_AMENITIES_5,
      ],
      projectTag: "ذا إليمنت في شوبا ون",
    },

    floorPlans: {
      type: "شقق",
      plans: [
        {
          id: "1-bedroom",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "المساحة الإجمالية": "753.48 قدم²",
            "السعر المبدئي": "1,896,335 درهم",
            "موعد التسليم": "الربع 4 2028",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_1BR],
        },
        {
          id: "2-bedroom",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "المساحة الإجمالية": "1,216.86 قدم²",
            "السعر المبدئي": "3,187,392 درهم",
            "موعد التسليم": "الربع 4 2028",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_2BR],
        },
        {
          id: "3-bedroom",
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "المساحة الإجمالية": "1,853.87 قدم²",
            "السعر المبدئي": "4,732,102 درهم",
            "موعد التسليم": "الربع 4 2028",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_3BR],
        },
        {
          id: "4-bedroom",
          title: "شقة أربع غرف نوم",
          bedrooms: 4,
          specs: {
            "المساحة الإجمالية": "2,445.03 قدم²",
            "السعر المبدئي": "10,494,338 درهم",
            "موعد التسليم": "الربع 4 2028",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_4BR],
        },
      ],
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "PADEL COURT", icon: "🎾", color: "#d7b46a" },
        { label: "TABLE TENNIS", icon: "🏓", color: "#d7b46a" },
        { label: "OBSTACLE COURSE / CROSSFIT", icon: "🏋️", color: "#d7b46a" },
        { label: "BATTLE ROPES", icon: "🪢", color: "#d7b46a" },
        { label: "YOGA / MEDITATION DECK", icon: "🧘", color: "#d7b46a" },
        { label: "PET-FRIENDLY SPACES", icon: "🐕", color: "#d7b46a" },
        { label: "OUTDOOR BBQ", icon: "🍖", color: "#d7b46a" },
        { label: "LAWN WITH SEATING", icon: "🌿", color: "#d7b46a" },
        { label: "SWIMMING POOL", icon: "🏊", color: "#d7b46a" },
        { label: "JACUZZI", icon: "💦", color: "#d7b46a" },
        { label: "OBSERVATION DECK", icon: "🔭", color: "#d7b46a" },
        { label: "OUTDOOR GYM", icon: "💪", color: "#d7b46a" },
        { label: "CHILDREN PLAY AREA", icon: "🧸", color: "#d7b46a" },
        { label: "CYCLING / WALKING TRACK", icon: "🚴", color: "#d7b46a" },
        { label: "CO-WORKING & BUSINESS LOUNGE", icon: "💼", color: "#d7b46a" },
        { label: "MULTIPURPOSE HALL", icon: "🏛️", color: "#d7b46a" },
        { label: "INDOOR GYM", icon: "🏋️", color: "#d7b46a" },
        { label: "PILATES & YOGA", icon: "🧘‍♀️", color: "#d7b46a" },
        { label: "KIDS CLUB / TODDLER CLUB", icon: "👶", color: "#d7b46a" },
        { label: "LIBRARY", icon: "📚", color: "#d7b46a" },
        { label: "NURSING ROOM", icon: "🍼", color: "#d7b46a" },
        { label: "CINEMA ROOM", icon: "🎬", color: "#d7b46a" },
        { label: "VR GAMES / YOUTH ZONE", icon: "🎮", color: "#d7b46a" },
        { label: "ROOFTOP LOUNGE", icon: "🌇", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "ذا إليمنت في شوبا ون",
      address: "راس الخور، دبي، الإمارات العربية المتحدة",
      lat: 25.185,
      lng: 55.319,
      zoom: 13,
      proximityFeatures: [
        {
          icon: "🦩",
          text: "حوالي 5 دقائق إلى محمية رأس الخور للحياة الفطرية",
        },
        { icon: "✈️", text: "حوالي 12 دقيقة إلى مطار دبي الدولي" },
        { icon: "🏢", text: "حوالي 12 دقيقة إلى الخليج التجاري" },
        { icon: "🛍️", text: "حوالي 15 دقيقة إلى دبي مول وداون تاون" },
      ],
    },

    nearbyAttractions: {
      title: "في قلب كل شيء",
      attractions: [
        {
          name: "محمية رأس الخور للحياة الفطرية",
          time: "≈ 5 دقائق",
          icon: "🦩",
        },
        { name: "مطار دبي الدولي", time: "≈ 12 دقيقة", icon: "✈️" },
        { name: "الخليج التجاري", time: "≈ 12 دقيقة", icon: "🏢" },
        { name: "دبي مول", time: "≈ 15 دقيقة", icon: "🛍️" },
        { name: "برج خليفة", time: "≈ 15 دقيقة", icon: "🏙️" },
        { name: "أوبرا دبي", time: "≈ 15 دقيقة", icon: "🎭" },
        { name: "نخلة جميرا", time: "≈ 25 دقيقة", icon: "🌴" },
      ],
    },

    cta: {
      title: "مستعد لاستكشاف ذا إليمنت؟",
      description:
        "تواصل مع فريقنا للحصول على أحدث التوفر والأسعار، والكتيّب الكامل مع مخططات الوحدات وخطة الدفع.",
      buttons: [
        { text: "إرسال طلب", type: "primary", url: "/contact" },
        { text: "تحميل المخططات", type: "secondary", url: FLOORPLANS_PDF },
      ],
    },
  },
};
