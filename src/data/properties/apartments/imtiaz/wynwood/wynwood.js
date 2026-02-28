// wynwoodByImtiazData.js
// ✅ Wynwood by Imtiaz — Aquarise structure-compatible
// ✅ Floorplan CDN paths are 100% based on your Bunny filenames screenshot.
// ⚠️ If your project folder is NOT "/imtiaz/wynwood", change BUNNY_BASE_URL to match your Bunny path.

const WYNWOOD_RENDERS_BASE =
  "https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon";

/**
 * IMPORTANT:
 * We use encodeURI (NOT encodeURIComponent) so folder paths remain valid ("/" not encoded),
 * while spaces are encoded to %20.
 */
const cdn = (fileName) => `${BUNNY_BASE_URL}/${encodeURI(fileName)}`;

// ✅ Floorplans (FROM YOUR SCREENSHOT — exact filenames)
const FP_1BR = `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon/wynwood%201br%20fllor%20plan.png`;
const FP_2BR = `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon/wynwood%202BR%20floor%20plans.png`;
const FP_3BR = `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon/wynwood%203br%20floor%20plans.png`;
const FP_3BR_DUP = `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon/wynwood%203br%20dup%20floor%20plan.png`;
const FP_4BR_DUP = `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon/wynwood%204br%20dup%20floor%20plans.png`;

// const RENDER_1 = `${WYNWOOD_RENDERS_BASE}/${encodeURI(
//   "IMTIAZ_Wynwood-Exterior render 1.jpg"
// )}`;
const RENDER_2 = `${WYNWOOD_RENDERS_BASE}/${encodeURI(
  "IMTIAZ_Wynwood-Exterior render 2.jpg"
)}`;
const RENDER_3 = `${WYNWOOD_RENDERS_BASE}/${encodeURI(
  "IMTIAZ_Wynwood-Exterior render 3.jpg"
)}`;
const RENDER_4 = `${WYNWOOD_RENDERS_BASE}/${encodeURI(
  "IMTIAZ_Wynwood-Exterior render 4.jpg"
)}`;
const RENDER_5 = `${WYNWOOD_RENDERS_BASE}/${encodeURI(
  "IMTIAZ_Wynwood-Exterior render 5.jpg"
)}`;
const RENDER_6 = `${WYNWOOD_RENDERS_BASE}/${encodeURI(
  "IMTIAZ_Wynwood-Exterior render 6.jpg"
)}`;
const RENDER_7 = `${WYNWOOD_RENDERS_BASE}/${encodeURI(
  "IMTIAZ_Wynwood-Exterior render 7.jpg"
)}`;
const RENDER_8 = `${WYNWOOD_RENDERS_BASE}/${encodeURI(
  "IMTIAZ_Wynwood-Exterior render 8.jpg"
)}`;
const RENDER_9 = `${WYNWOOD_RENDERS_BASE}/${encodeURI(
  "IMTIAZ_Wynwood-Exterior render 9.jpg"
)}`;

// Optional docs (set exact filenames if/when you upload them)
const BROCHURE_PDF = null;
const LAUNCH_FILM = null;
const PAYMENT_PLAN_PDF = null;

export const wynwoodData = {
  en: {
    seo: {
      title:
        "Wynwood by Imtiaz | Waterfront Apartments & Duplexes in Dubai Islands",
      description:
        "Wynwood by Imtiaz is a waterfront luxury project in Dubai Islands offering apartments and duplex residences, furnished interiors, and premium lifestyle amenities.",
      keywords:
        "wynwood by imtiaz, imtiaz development, dubai islands, palm deira, waterfront apartments, duplex dubai",
      canonical: "/properties/apartments/imtiaz/wynwood",
    },

    project: {
      name: "Wynwood by Imtiaz",
      developer: "Imtiaz Development",
      location: "Dubai Islands, Palm Deira, Dubai",
      status: "Off-Plan",
      startingPrice: "Price from AED 2,218,907",
      completionDate: "Q3 2027",

      // You wrote: 60% - 40%
      // The listing details you pasted show: 20% / 40% / 40%
      // Keeping both to avoid losing info.
      paymentPlanHeadline: "60% / 40%",
      paymentPlanBreakdown: {
        "On booking": "20%",
        "During construction": "40%",
        "Upon handover": "40%",
      },

      unitTypes: "Apartments, Duplex",
      furnishing: "Yes",
      floors: "G + 2P + 14 floors + R",
      serviceCharge: "18–20 AED/sqft",
      resaleConditions: "30",
      totalBuildingArea: "189,694 sqft",
    },

    hero: {
      // Put your real cover image here when uploaded (or keep your site default)
      backgroundUrl: `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon/IMTIAZ_Wynwood-Exterior%20render%201.jpg`,
      // Put your real project logo here when uploaded
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png",
      companyName: "Imtiaz",
      rating: null,
    },

    intro: {
      title: "VISIONARY WATERFRONT LUXURY IN DUBAI ISLANDS",
      paragraphs: [
        "Wynwood by Imtiaz is a visionary new development that reimagines waterfront luxury in the heart of Dubai—crafted for exclusivity, elegance, and a curated lifestyle.",
        "From one-bedroom apartments to expansive duplexes, each residence is meticulously designed with bespoke finishes, floor-to-ceiling windows, and seamless outdoor terraces.",
        "Residents enjoy premium lifestyle amenities including a rooftop infinity pool, landscaped courtyards, floating dining pods, a world-class gym, yoga terrace, and a children’s splash zone.",
      ],
      brochures: [
        ...(BROCHURE_PDF
          ? [{ title: "Download Brochure", url: BROCHURE_PDF, type: "main" }]
          : []),
        ...(PAYMENT_PLAN_PDF
          ? [{ title: "Payment Plan", url: PAYMENT_PLAN_PDF, type: "payment" }]
          : []),
        ...(LAUNCH_FILM
          ? [{ title: "Video Review", url: LAUNCH_FILM, type: "video" }]
          : []),
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon/IMTIAZ_Wynwood-Exterior%20render%205.jpg`,
      imgAlt: "Wynwood by Imtiaz floor plan preview",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Dubai Islands",
          label: "Waterfront Address",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q3 2027",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "60/40",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Wynwood by Imtiaz Visuals",
      // You only provided the floorplan filenames for Bunny.
      // Add project/interior/exterior images here once uploaded to the same folder.
      slides: [
        // RENDER_1,
        RENDER_2,
        RENDER_3,
        RENDER_4,
        RENDER_5,
        RENDER_6,
        RENDER_7,
        RENDER_8,
        RENDER_9,
      ],
      projectTag: "Wynwood by Imtiaz",
    },

    // ✅ EN (ONLY 4 specs)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "965.53 sq.ft",
            "Starting Price": "AED 2,218,907",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_1BR],
          features: [
            "Furnished",
            "Equipped kitchen with branded appliances",
            "Modern high-quality finishing",
          ],
        },

        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1710.38 sq.ft",
            "Starting Price": "AED 3,078,412",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_2BR],
          features: [
            "Family-friendly layouts",
            "Waterfront lifestyle",
            "Premium amenities access",
          ],
        },

        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1702.85 sq.ft",
            "Starting Price": "AED 4,555,146",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_3BR],
          features: [
            "Spacious living",
            "Luxury finishing",
            "Dubai Islands address",
          ],
        },

        {
          id: "3br-duplex",
          title: "3 Bedroom Duplex",
          bedrooms: 3,
          specs: {
            "Total Area": "2007.8 sq.ft",
            "Starting Price": "AED 5,103,462",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_3BR_DUP],
          features: [
            "Two-level living",
            "Statement interiors",
            "Outdoor terrace connection",
          ],
        },

        {
          id: "4br-duplex",
          title: "4 Bedroom Duplex",
          bedrooms: 4,
          specs: {
            "Total Area": "3962.84 sq.ft",
            "Starting Price": "AED 8,124,293",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_4BR_DUP],
          features: [
            "Large family layout",
            "Premium lifestyle",
            "Dubai Islands waterfront",
          ],
        },
      ],
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        {
          label: "Rooftop Infinity Pool & Sundeck",
          icon: "🏊",
          color: "#d7b46a",
        },
        {
          label: "Lush Central Courtyard & Green Podium",
          icon: "🌿",
          color: "#d7b46a",
        },
        {
          label: "Outdoor Play Area & Splash Pool",
          icon: "🧸",
          color: "#d7b46a",
        },
        { label: "Clubhouse", icon: "🏛️", color: "#d7b46a" },
        { label: "World-Class Gym", icon: "💪", color: "#d7b46a" },
        { label: "Jacuzzi", icon: "🛁", color: "#d7b46a" },
        { label: "BBQ Area", icon: "🍖", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Wynwood by Imtiaz",
      address: "Dubai Islands, Palm Deira, Dubai, UAE",
      lat: 25.29,
      lng: 55.32,
      zoom: 13,
      proximityFeatures: [
        { icon: "🏙️", text: "Downtown Dubai — 20.2 km" },
        { icon: "✈️", text: "Dubai International Airport — 8.6 km" },
        { icon: "🏖️", text: "Deira Island beach — 2.3 km" },
        { icon: "🛍️", text: "One Deira Mall — 5.9 km" },
      ],
    },

    nearbyAttractions: {
      title: "Nearby Points of Interest",
      attractions: [
        { name: "Downtown Dubai", distance: "20.2 km", time: null, icon: "🏙️" },
        {
          name: "Dubai International Airport",
          distance: "8.6 km",
          time: null,
          icon: "✈️",
        },
        {
          name: "Deira Island beach",
          distance: "2.3 km",
          time: null,
          icon: "🏖️",
        },
        { name: "One Deira Mall", distance: "5.9 km", time: null, icon: "🛍️" },
        { name: "Naif Park", distance: "6.0 km", time: null, icon: "🌳" },
        {
          name: "Green Leaves Early Childhood Center",
          distance: "5.9 km",
          time: null,
          icon: "🏫",
        },
      ],
    },
  },

  ar: {
    seo: {
      title: "وينوود من امتياز | شقق ودوبلكس على الواجهة البحرية في جزر دبي",
      description:
        "وينوود من امتياز مشروع فاخر في جزر دبي (Palm Deira) يوفّر شققاً ووحدات دوبلكس مفروشة مع تشطيبات حديثة ومرافق راقية.",
      keywords:
        "وينوود, امتياز, جزر دبي, بالم ديرة, شقق دبي, دوبلكس دبي, واجهة بحرية",
      canonical: "/properties/apartments/imtiaz/wynwood",
    },

    project: {
      name: "Wynwood by Imtiaz",
      developer: "Imtiaz Development",
      location: "جزر دبي، بالم ديرة، دبي",
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 2,218,907 درهم",
      completionDate: "Q3 2027",

      paymentPlanHeadline: "60% / 40%",
      paymentPlanBreakdown: {
        "عند الحجز": "20%",
        "أثناء الإنشاء": "40%",
        "عند التسليم": "40%",
      },

      unitTypes: "شقق، دوبلكس",
      furnishing: "نعم (مفروشة)",
      floors: "G + 2P + 14 طابق + R",
      serviceCharge: "18–20 درهم/قدم²",
      resaleConditions: "30",
      totalBuildingArea: "189,694 قدم²",
    },

    hero: {
      backgroundUrl: `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood/IMTIAZ_Wynwood-Exterior%20render%201.jpg`,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png",
      companyName: "امتياز",
      rating: null,
    },

    intro: {
      title: "فخامة بحرية جديدة في قلب جزر دبي",
      paragraphs: [
        "وينوود من امتياز مشروع جديد يعيد تعريف الفخامة على الواجهة البحرية في دبي—مصمم لمن يبحث عن الخصوصية والأناقة وأسلوب حياة مُنتقى بعناية.",
        "يقدّم المشروع شققاً ووحدات دوبلكس بتفاصيل راقية، نوافذ ممتدة من الأرض للسقف، وتشطيبات مميزة مع تراسات خارجية.",
        "تجربة سكنية متكاملة تشمل مسبح إنفينيتي على السطح، ساحات خضراء، مرافق عافية، نادي رياضي عالمي، تراس يوغا، ومنطقة ألعاب ومسبح للأطفال.",
      ],
      brochures: [
        ...(BROCHURE_PDF
          ? [{ title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" }]
          : []),
        ...(PAYMENT_PLAN_PDF
          ? [{ title: "خطة الدفع", url: PAYMENT_PLAN_PDF, type: "payment" }]
          : []),
        ...(LAUNCH_FILM
          ? [{ title: "فيديو المشروع", url: LAUNCH_FILM, type: "video" }]
          : []),
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood/IMTIAZ_Wynwood-Exterior%20render%205.jpg`,
      imgAlt: "مخطط طابق (وينوود)",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "جزر دبي",
          label: "عنوان بحري",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q3 2027",
          label: "التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "60/40",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: [
        // RENDER_1,
        RENDER_2,
        RENDER_3,
        RENDER_4,
        RENDER_5,
        RENDER_6,
        RENDER_7,
        RENDER_8,
        RENDER_9,
      ],
      projectTag: "Wynwood by Imtiaz",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "مخطط شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "Total Area": "965.53 sq.ft",
            "Starting Price": "AED 2,218,907",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_1BR],
          features: [
            "مفروشة",
            "مطبخ مجهز بأجهزة ماركات",
            "تشطيب حديث عالي الجودة",
          ],
        },

        {
          id: "2br",
          title: "مخطط شقة غرفتين",
          bedrooms: 2,
          specs: {
            "Total Area": "1710.38 sq.ft",
            "Starting Price": "AED 3,078,412",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_2BR],
          features: [
            "مناسب للعائلات",
            "أسلوب حياة بحري",
            "وصول لمرافق متكاملة",
          ],
        },

        {
          id: "3br",
          title: "مخطط شقة 3 غرف",
          bedrooms: 3,
          specs: {
            "Total Area": "1702.85 sq.ft",
            "Starting Price": "AED 4,555,146",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_3BR],
          features: ["مساحات واسعة", "تشطيب فاخر", "عنوان مميز في جزر دبي"],
        },

        {
          id: "3br-duplex",
          title: "مخطط دوبلكس 3 غرف",
          bedrooms: 3,
          specs: {
            "Total Area": "2007.8 sq.ft",
            "Starting Price": "AED 5,103,462",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_3BR_DUP],
          features: ["معيشة على طابقين", "تصميم مميز", "اتصال بالتراس الخارجي"],
        },

        {
          id: "4br-duplex",
          title: "مخطط دوبلكس 4 غرف",
          bedrooms: 4,
          specs: {
            "Total Area": "3962.84 sq.ft",
            "Starting Price": "AED 8,124,293",
            Handover: "Q3 2027",
            "Payment Plan": "60% / 40% — 20% / 40% / 40%",
          },
          images: [FP_4BR_DUP],
          features: [
            "مناسب للعائلات الكبيرة",
            "أسلوب حياة راقٍ",
            "واجهة بحرية في جزر دبي",
          ],
        },
      ],
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        {
          label: "مسبح إنفينيتي على السطح + سطح شمسي",
          icon: "🏊",
          color: "#d7b46a",
        },
        { label: "ساحة مركزية خضراء + بوديوم", icon: "🌿", color: "#d7b46a" },
        { label: "منطقة ألعاب + مسبح للأطفال", icon: "🧸", color: "#d7b46a" },
        { label: "كلوب هاوس", icon: "🏛️", color: "#d7b46a" },
        { label: "نادي رياضي عالمي", icon: "💪", color: "#d7b46a" },
        { label: "جاكوزي", icon: "🛁", color: "#d7b46a" },
        { label: "منطقة BBQ", icon: "🍖", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Wynwood by Imtiaz",
      address: "جزر دبي، بالم ديرة، دبي، الإمارات",
      lat: 25.29,
      lng: 55.32,
      zoom: 13,
      proximityFeatures: [
        { icon: "🏙️", text: "داون تاون دبي — 20.2 كم" },
        { icon: "✈️", text: "مطار دبي الدولي — 8.6 كم" },
        { icon: "🏖️", text: "شاطئ ديرة آيلاند — 2.3 كم" },
        { icon: "🛍️", text: "ون ديرة مول — 5.9 كم" },
      ],
    },

    nearbyAttractions: {
      title: "أماكن قريبة",
      attractions: [
        { name: "داون تاون دبي", distance: "20.2 كم", time: null, icon: "🏙️" },
        { name: "مطار دبي الدولي", distance: "8.6 كم", time: null, icon: "✈️" },
        {
          name: "شاطئ ديرة آيلاند",
          distance: "2.3 كم",
          time: null,
          icon: "🏖️",
        },
        { name: "ون ديرة مول", distance: "5.9 كم", time: null, icon: "🛍️" },
        { name: "حديقة نايف", distance: "6.0 كم", time: null, icon: "🌳" },
        {
          name: "Green Leaves Early Childhood Center",
          distance: "5.9 كم",
          time: null,
          icon: "🏫",
        },
      ],
    },
  },
};
