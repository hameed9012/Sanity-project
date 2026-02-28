// src/data/properties/apartments/samana/boulevard-heights/boulevardHeightsData.js
/**
 * ✅ Updated as requested (SAME AS IMPERIAL GARDEN REQUEST):
 * - Remove any PDC mention (NONE used)
 * - Make payment plan CLEAR as: 20% on booking + 1% x 80 months
 * - Inject it everywhere it appears (project + floorPlans specs + floating card)
 * - Keep everything else EXACTLY the same
 */

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "samana/boulevard-heights";
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

// ✅ NEW (Samana standard per your note)
const PAYMENT_PLAN_EN = "20% on booking + 1% x 80 months";
const PAYMENT_PLAN_AR = "20% عند الحجز + 1% × 80 شهر";

// ✅ ALL slides you provided
const ALL_SLIDES = [
  `https://luxury-real-estate-media.b-cdn.net/samana/boulevard-heights/cam01-aerialview%20copy.jpg`,
  cdn("cam02-streetview.jpg"),
  cdn("cam03-streetview-otherside.jpg"),
  `https://luxury-real-estate-media.b-cdn.net/samana/boulevard-heights/cam04-podiumview%20.jpg`,
  cdn("cam05-upview.jpg"),
  cdn("cam11-topview.jpg"),
  cdn("cam13-streetnight.jpg"),
  cdn("BluehourElevation.jpg"),
  cdn("SunsetRoad.jpg"),
  cdn("TopDownDLRC7.jpg"),
  cdn("DLRC7-TopdownCloseup.jpg"),
  cdn("PodiumOverview.jpg"),

  cdn("cam07-gymview.jpg"),
  cdn("GYM 1.jpg"),
  cdn("GYM 2.jpg"),
  cdn("GYM 3.jpg"),
  cdn("Cinema.jpg"),
  cdn("BonFire.jpg"),
  cdn("cam09-sunbedview.jpg"),
  cdn("SPA01_Post.jpg"),
  cdn("SPA02_Post.jpg"),

  cdn("Living (1).jpg"),
  cdn("Living (2).jpg"),
  cdn("Living (3).jpg"),
  cdn("Living (4).jpg"),
  cdn("Living (5).jpg"),
  cdn("Master (1).jpg"),
  cdn("Master (2).jpg"),
  cdn("Master (3).jpg"),
  cdn("Master (4).jpg"),
  cdn("Master (5).jpg"),
  cdn("bathroom.jpg"),

  cdn("lobby 1.jpg"),
  cdn("lobby 2.jpg"),
  cdn("lobby 3.jpg"),
  cdn("lobby 4.jpg"),
  cdn("lobby 5.jpg"),
];

// Floorplan PNGs
const STUDIO_FLOORPLAN_IMG = cdn("Boulevard studio floor plan.png");
const ONEBR_FLOORPLAN_IMG = cdn("Boulevard 1br floor plan.png");
const TWOBR_FLOORPLAN_IMG = cdn("Boulevard 2 br floor plan.png");

// PDFs
const BROCHURE_PDF = cdn("Boulevard Heights Brochure.pdf");
const PAYMENT_PLAN_PDF = cdn("Boulevard Heights Payment Plan.pdf");
const FLOORPLANS_PDF = cdn(
  "Floor and Unit Plans Boulevard Heights Brochure.pdf"
);

export const boulevardHeightsData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "Samana Boulevard Heights | Apartments with Private Pools in Dubai Land Residence Complex (DLRC)",
      description:
        "Samana Boulevard Heights is a premium residential development in DLRC, Dubai, offering studios, 1-bedroom and 2-bedroom apartments with private pools on balconies, modern finishes, equipped kitchens, and a flexible monthly payment plan with handover in Q4 2028.",
      keywords:
        "Samana Boulevard Heights, Samana, DLRC, Dubai Land Residence Complex, Wadi Al Safa 5, studio, 1 bedroom, 2 bedroom, private pool apartments Dubai, off plan Dubai",
      canonical: "/properties/apartments/samana/boulevard-heights",
    },

    project: {
      name: "Samana Boulevard Heights",
      developer: "Samana",
      location: "Wadi Al Safa 5, Dubai, UAE",
      status: "Off-Plan",

      startingPrice: "AED 785,555",
      completionDate: "Q4 2028",

      // ✅ UPDATED
      paymentPlan: PAYMENT_PLAN_EN,

      type: "Apartments",
      units: "Studios, 1 & 2 Bedrooms",
    },

    hero: {
      backgroundUrl: cdn("BluehourElevation.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Samana.png",
      companyName: "Samana",
      rating: null,
    },

    intro: {
      title: "PRIVATE-POOL APARTMENTS IN DLRC",
      paragraphs: [
        "Samana Boulevard Heights is a premium residential development that embodies the perfect balance between modern sophistication and luxurious comfort. The project offers a distinctive collection of studios and apartments with private pools on the balconies, setting a new benchmark for contemporary urban living in Dubai.",
        "Designed with a focus on innovation, elegance, and functionality, each residence features spacious layouts, floor-to-ceiling windows, and refined finishes that create a bright and inviting atmosphere.",
        "Residents will enjoy a comprehensive range of world-class amenities, including a fully equipped fitness center, outdoor cinema, leisure decks, children’s play areas, and beautifully landscaped surroundings that inspire both relaxation and connection.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Payment Plan (PDF)",
          url: PAYMENT_PLAN_PDF,
          type: "payment-plan",
        },
        {
          title: "Floor & Unit Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "floor-plans",
        },
      ],
      imgUrl: cdn("PodiumOverview.jpg"),
      imgAlt: "Samana Boulevard Heights podium overview",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏊",
          value: "Private Pools",
          label: "Balcony Pools",
        },
        {
          bottom: "26%",
          left: "-40px",
          icon: "🗓️",
          value: "Q4 2028",
          label: "Handover",
        },

        // ✅ UPDATED
        {
          bottom: "10%",
          right: "-20px",
          icon: "💳",
          value: "20% + 1%",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Project Visuals",
      slides: ALL_SLIDES,
      projectTag: "Samana Boulevard Heights",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO",
            "Total Range": "413.66 – 500.95 SQ.FT.",
            "Starting Price": "AED 785,555",
            Handover: "Q4 2028",

            // ✅ UPDATED
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [STUDIO_FLOORPLAN_IMG],
          features: [
            "Private pool on balcony (project concept)",
            "Modern layouts",
            "Floor-to-ceiling windows (project positioning)",
          ],
        },

        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM",
            "Total Range": "761.65 – 1,050.02 SQ.FT.",
            "Starting Price": "AED 1,324,444",
            Handover: "Q4 2028",

            // ✅ UPDATED
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [ONEBR_FLOORPLAN_IMG],
          features: [
            "Private pool on balcony (project concept)",
            "Spacious layouts",
            "Bright living spaces",
          ],
        },

        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM",
            "Total Range": "1,511.04 – 1,816.30 SQ.FT.",
            "Starting Price": "AED 2,051,111",
            Handover: "Q4 2028",

            // ✅ UPDATED
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [TWOBR_FLOORPLAN_IMG],
          features: [
            "Private pool on balcony (project concept)",
            "Family-sized layouts",
            "Refined finishing",
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features & Amenities",
      amenities: [
        { label: "Outdoor Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "State-of-the-Art Gym", icon: "💪", color: "#d7b46a" },
        { label: "Spa", icon: "🧖", color: "#d7b46a" },
        { label: "Jogging Track", icon: "🏃", color: "#d7b46a" },
        { label: "Sun Deck", icon: "🏖️", color: "#d7b46a" },
        { label: "Kids' Swimming Pool", icon: "👶", color: "#d7b46a" },
        { label: "Outdoor Kids Play Area", icon: "🛝", color: "#d7b46a" },
        { label: "BonFire", icon: "🔥", color: "#d7b46a" },
        { label: "Outdoor Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Shaded Lounge Deck", icon: "🪑", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Boulevard Heights",
      address:
        "Wadi Al Safa 5 (Dubai Land Residence Complex - DLRC), Dubai, United Arab Emirates",
      lat: 25.0927651,
      lng: 55.3849169,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "📍",
          text: "Wadi Al Safa 5 (DLRC - Dubai Land Residence Complex)",
        },
        {
          icon: "🛣️",
          text: "Quick access to major roads (E311 / E611 corridors)",
        },
      ],
    },

    nearbyAttractions: {
      title: "About The Area (DLRC)",
      attractions: [
        {
          name: "Dubai Parks and Resorts",
          distance: null,
          time: null,
          icon: "🎢",
        },
        { name: "Legoland", distance: null, time: null, icon: "🧱" },
        { name: "Motiongate", distance: null, time: null, icon: "🎬" },
        { name: "Bollywood Parks", distance: null, time: null, icon: "🎭" },
        { name: "Legoland Water Park", distance: null, time: null, icon: "💦" },
      ],
    },

    cta: {
      title: "Ready To Explore Boulevard Heights?",
      description:
        "Contact our team to request the full brochure, confirm live availability, and get the latest unit list with exact prices and areas.",
      buttons: [
        { text: "Schedule Viewing", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title: "سَمَانا بوليفارد هايتس | شقق بمسابح خاصة في DLRC دبي",
      description:
        "سَمَانا بوليفارد هايتس مشروع سكني راقٍ في دبي لاند (DLRC) يضم استوديو وشقق 1 و2 غرفة نوم مع مسابح خاصة على الشرفات، وتشطيبات حديثة ومطابخ مجهزة وخطة دفع شهرية مرنة مع تسليم في الربع الرابع 2028.",
      keywords:
        "سَمَانا بوليفارد هايتس، سامانا، DLRC، دبي لاند، وادي الصفا 5، استوديو، غرفة، غرفتين، مسبح خاص",
      canonical: "/properties/apartments/samana/boulevard-heights",
    },

    project: {
      name: "سَمَانا بوليفارد هايتس",
      developer: "سامانا",
      location: "وادي الصفا 5، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 785,555 درهم",
      completionDate: "الربع الرابع 2028",

      // ✅ UPDATED
      paymentPlan: PAYMENT_PLAN_AR,

      type: "شقق",
      units: "استوديو، غرفة نوم، غرفتا نوم",
    },

    hero: {
      backgroundUrl: cdn("BluehourElevation.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Samana.png",
      companyName: "Samana",
      rating: null,
    },

    intro: {
      title: "شقق بمسابح خاصة في DLRC",
      paragraphs: [
        "سَمَانا بوليفارد هايتس مشروع سكني راقٍ يجمع بين الفخامة والراحة العصرية، ويوفّر استوديو وشققًا بمسابح خاصة على الشرفات لتجربة حياة حضرية مميزة في دبي.",
        "تم تصميم الوحدات مع التركيز على الابتكار والأناقة والعملية، مع مخططات واسعة ونوافذ ممتدة من الأرض إلى السقف وتشطيبات راقية تمنح المساحات إشراقة وراحة.",
        "يستمتع السكان بمرافق عالمية المستوى تشمل جيم متكامل، سينما خارجية، مساحات ترفيه، مناطق للأطفال، ومساحات خضراء مصممة للراحة والتواصل.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "خطة الدفع (PDF)",
          url: PAYMENT_PLAN_PDF,
          type: "payment-plan",
        },
        {
          title: "مخططات الوحدات (PDF)",
          url: FLOORPLANS_PDF,
          type: "floor-plans",
        },
      ],
      imgUrl: cdn("PodiumOverview.jpg"),
      imgAlt: "إطلالة بوديوم بوليفارد هايتس",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏊",
          value: "مسابح خاصة",
          label: "على الشرفات",
        },
        {
          bottom: "26%",
          left: "-40px",
          icon: "🗓️",
          value: "الربع 4 2028",
          label: "التسليم",
        },

        // ✅ UPDATED
        {
          bottom: "10%",
          right: "-20px",
          icon: "💳",
          value: "20% + 1%",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: ALL_SLIDES,
      projectTag: "Samana Boulevard Heights",
    },

    floorPlans: {
      type: "شقق سكنية",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "استوديو",
            "نطاق المساحة الإجمالية": "413.66 – 500.95 قدم²",
            "السعر الابتدائي": "785,555 درهم",
            "موعد التسليم": "الربع الرابع 2028",

            // ✅ UPDATED
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [STUDIO_FLOORPLAN_IMG],
          features: [
            "خيار مسبح خاص على الشرفة",
            "تصميم عصري",
            "إضاءة طبيعية ممتازة",
          ],
        },

        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة نوم واحدة",
            "نطاق المساحة الإجمالية": "761.65 – 1,050.02 قدم²",
            "السعر الابتدائي": "1,324,444 درهم",
            "موعد التسليم": "الربع الرابع 2028",

            // ✅ UPDATED
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [ONEBR_FLOORPLAN_IMG],
          features: [
            "خيار مسبح خاص على الشرفة",
            "مساحات واسعة",
            "تشطيبات راقية",
          ],
        },

        {
          id: "2br",
          title: "غرفتا نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "غرفتا نوم",
            "نطاق المساحة الإجمالية": "1,511.04 – 1,816.30 قدم²",
            "السعر الابتدائي": "2,051,111 درهم",
            "موعد التسليم": "الربع الرابع 2028",

            // ✅ UPDATED
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [TWOBR_FLOORPLAN_IMG],
          features: [
            "خيار مسبح خاص على الشرفة",
            "مناسب للعائلات",
            "تصميم فاخر",
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "سينما خارجية", icon: "🎬", color: "#d7b46a" },
        { label: "جيم متطور", icon: "💪", color: "#d7b46a" },
        { label: "سبا", icon: "🧖", color: "#d7b46a" },
        { label: "مسار جري", icon: "🏃", color: "#d7b46a" },
        { label: "سطح للتشمّس", icon: "🏖️", color: "#d7b46a" },
        { label: "مسبح أطفال", icon: "👶", color: "#d7b46a" },
        { label: "منطقة ألعاب خارجية للأطفال", icon: "🛝", color: "#d7b46a" },
        { label: "جلسات نار", icon: "🔥", color: "#d7b46a" },
        { label: "مسبح خارجي", icon: "🏊", color: "#d7b46a" },
        { label: "لاونج مظلل", icon: "🪑", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سمانا بوليفارد هايتس",
      address:
        "وادي الصفا 5 (مجمع دبي لاند السكني - DLRC)، دبي، الإمارات العربية المتحدة",
      lat: 25.0927651,
      lng: 55.3849169,
      zoom: 14,
      proximityFeatures: [
        { icon: "📍", text: "وادي الصفا 5 (مجمع دبي لاند السكني - DLRC)" },
        { icon: "🛣️", text: "وصول سريع إلى الطرق الرئيسية (E311 / E611)" },
      ],
    },

    nearbyAttractions: {
      title: "نبذة عن المنطقة (DLRC)",
      attractions: [
        {
          name: "Dubai Parks and Resorts",
          distance: null,
          time: null,
          icon: "🎢",
        },
        { name: "Legoland", distance: null, time: null, icon: "🧱" },
        { name: "Motiongate", distance: null, time: null, icon: "🎬" },
        { name: "Bollywood Parks", distance: null, time: null, icon: "🎭" },
        { name: "Legoland Water Park", distance: null, time: null, icon: "💦" },
      ],
    },

    cta: {
      title: "جاهز لاستكشاف بوليفارد هايتس؟",
      description:
        "تواصل معنا لطلب الكتيّب الرسمي، وتأكيد التوفر الحالي، والحصول على أحدث قائمة وحدات مع الأسعار والمساحات.",
      buttons: [
        { text: "حجز موعد", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};
