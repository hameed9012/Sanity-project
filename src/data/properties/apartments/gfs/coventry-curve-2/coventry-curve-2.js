// src/data/properties/apartments/gfs/coventry/coventry-curve-2/coventryCurve2.js
/**
 * ✅ Coventry Curve 2 — Dubai Industrial City (Near Dubai South / Expo City Corridor)
 * ✅ SAME blueprint structure (seo / project / hero / intro / gallery / floorPlans / amenities / paymentPlan / location / nearbyAttractions)
 * ✅ Constants-first style
 * ✅ Payment plan is timeline-friendly for your parser / also provided as a structured paymentPlan section
 */

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "gfs/coventry-curve-2";

/** Encode ONLY the filename (safe with spaces), keep slashes intact. */
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${encodeURI(fileName)}`;

// ========================
// Project constants
// ========================
const PROJECT_NAME_EN = "Coventry Curve 2";
const PROJECT_NAME_AR = "كوفنتري كيرف 2";

const DEVELOPER_EN = "GFS Developments";
const DEVELOPER_AR = "شركة GFS للتطوير العقاري";

const LOCATION_EN = "Dubai Industrial City, Dubai, UAE";
const LOCATION_AR = "دبي الصناعية، دبي، الإمارات";

const STATUS_EN = "Off-Plan";
const STATUS_AR = "قيد التطوير";

const HANDOVER_EN = "Q1 2028";
const HANDOVER_AR = "الربع الأول 2028";

const STARTING_PRICE_EN = "AED 514,710";
const STARTING_PRICE_AR = "514,710 درهم";

// ========================
// Payment plan (timeline-friendly EN/AR)
// ========================
const PAYMENT_PLAN_HEADLINE = "5% / 15% / 24% / 20% / 36%";

const PAYMENT_PLAN_EN =
  "5% On booking / 15% Within 30 days / 24% Monthly installments (1% × 24 months) / 20%upon handover / 36% Post-handover";

const PAYMENT_PLAN_AR =
  "5% عند الحجز / 15% خلال 30 يوم / 24% أقساط شهرية (1% × 24 شهر) / 20% عند التسليم / 36% بعد التسليم";

// ========================
// Media / Docs
// ========================
const LOGO_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png";

const BROCHURE_PDF = cdn("Coventry 2 - Brochure.pdf");
const FLOORPLANS_PDF = cdn("Coventry 2 - Floorplan.pdf");
const BUILDING_VIDEO = cdn("Coventry 2 - Building Video.mp4");

const HERO_BG = cdn("VIEW 4 AERIAL.jpg");
const INTRO_IMG = cdn("VIEW 6 POOL 1.jpg");

// Gallery slides
const GALLERY_SLIDES = [
  cdn("COVENTRY CURVE 2_LOBBY V1.jpg"),
  cdn("COVENTRY CURVE 2_LOBBY V2.jpg"),
  cdn("COVENTRY CURVE 2_LOBBY V3.jpg"),
  cdn("COVENTRY CURVE 2_LOBBY V4.jpg"),
  cdn("COVENTRY CURVE 2_LOBBY V5.jpg"),
  cdn("COVENTRY CURVE 2_LOBBY V6.jpg"),
  cdn("COVENTRY CURVE 2_LOBBY V7.jpg"),
  cdn("COVENTRY CURVE 2_LOBBY V8.jpg"),
  cdn("TOP VIEW.jpg"),
  cdn("VIEW 1 AERIAL.jpg"),
  cdn("VIEW 2 AERIAL.jpg"),
  cdn("VIEW 2 AERIAL (1).jpg"),
  cdn("VIEW 2 AERIAL NIGHT.jpg"),
  cdn("VIEW 3 AERIAL.jpg"),
  cdn("VIEW 3 AERIAL NIGHT.jpg"),
  cdn("VIEW 4 AERIAL.jpg"),
  cdn("VIEW 4 AERIAL NIGHT.jpg"),
  cdn("VIEW 5 AERIAL.jpg"),
  cdn("VIEW 6 POOL 1.jpg"),
  cdn("VIEW 7 POOL 2.jpg"),
  cdn("VIEW 8 POOLS.jpg"),
  cdn("VIEW 9 POOLS.jpg"),
];

// Floor plan images
const FP_STUDIO = cdn("Coventry curve 2 Studio floor plan.jpg");
const FP_1BR = cdn("Coventry Curve 2 1br floor plan.jpg");
const FP_2BR = cdn("Coventry curve 2 2br floor plan.jpg");

export const coventryCurve2Data = {
  // ============================ EN ============================
  en: {
    seo: {
      title:
        "Coventry Curve 2 | Studios, 1 & 2BR Apartments in Dubai Industrial City",
      description:
        "Coventry Curve 2 by GFS Developments in Dubai Industrial City offers studios, 1 & 2-bedroom apartments with lifestyle amenities and a structured payment plan leading to a Q1 2028 handover (subject to availability).",
      keywords:
        "Coventry Curve 2, GFS Developments, Dubai Industrial City apartments, studio apartment Dubai, 1 bedroom Dubai, 2 bedroom Dubai, off plan Dubai, payment plan Dubai",
      canonical: "/properties/apartments/gfs/coventry-curve-2",
    },

    project: {
      name: PROJECT_NAME_EN,
      developer: DEVELOPER_EN,
      location: LOCATION_EN,
      status: STATUS_EN,
      startingPrice: STARTING_PRICE_EN,
      completionDate: HANDOVER_EN,

      // ✅ keep for cards/specs / parser
      paymentPlan: PAYMENT_PLAN_EN,

      unitTypes: ["Studio", "1 Bedroom", "2 Bedroom"],
      type: "Apartments",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: LOGO_URL,
      companyName: DEVELOPER_EN,
      rating: null,
      badges: ["Dubai Industrial City", "Off-Plan", "Q1 2028 Handover"],
    },

    intro: {
      title: "MODERN MID-RISE LIVING IN A CONNECTED DUBAI LOCATION",
      paragraphs: [
        "Coventry Curve 2 is a contemporary residential project by GFS Developments, offering studios, 1-bedroom, and 2-bedroom apartments designed with practical layouts and bright interiors.",
        "Residents benefit from a lifestyle-led community concept—wellness, leisure, and family-friendly zones—while staying connected to Dubai’s growth corridor near Expo City and Al Maktoum International Airport.",
        "Whether you’re buying for end-use or investment, Coventry Curve 2 is positioned as a value-driven option with a structured payment plan and modern everyday amenities.",
      ],
      brochures: [
        { title: "Download Brochure (PDF)", url: BROCHURE_PDF, type: "main" },
        {
          title: "Download Floorplans (PDF)",
          url: FLOORPLANS_PDF,
          type: "floorplans",
        },
        { title: "Building Video (MP4)", url: BUILDING_VIDEO, type: "video" },
      ],
      imgUrl: INTRO_IMG,
      imgAlt: "Coventry Curve 2",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "Dubai",
          label: "Industrial City",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: HANDOVER_EN,
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "5/15/24/20/36",
          label: "Payment Plan",
        },
      ],
      keyHighlights: [
        "Studios, 1BR & 2BR layouts designed for efficient living and strong usability",
        "Lifestyle amenities including pool, gym, jogging track, meditation area, and family-focused spaces",
        "Connected location within Dubai’s growth corridor (Expo City / Al Maktoum Airport proximity)",
        "Retail & daily convenience options within/near the community",
      ],
    },

    gallery: {
      title: "Project Visuals",
      slides: GALLERY_SLIDES,
      projectTag: "Coventry Curve 2",
      video: { title: "Building video", url: BUILDING_VIDEO },
    },

    floorPlans: {
      type: "apartments",
      brochureHref: FLOORPLANS_PDF,
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO RESIDENCE",
            "Total Range": "337 SQ.FT.",
            "Starting Price": "AED 514,710",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [FP_STUDIO],
          features: [
            "Efficient layout",
            "Investor-friendly entry price",
            "Modern design",
          ],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM RESIDENCE",
            "Total Range": "712 SQ.FT.",
            "Starting Price": "AED 931,600",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [FP_1BR],
          features: [
            "Balanced layout",
            "Functional zoning",
            "Comfortable living space",
          ],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM RESIDENCE",
            "Total Range": "805 SQ.FT.",
            "Starting Price": "AED 1,052,560",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [FP_2BR],
          features: [
            "Family-friendly layout",
            "Practical sizing",
            "Strong end-user appeal",
          ],
        },
      ],
    },

    amenities: {
      title: "Amenities",
      amenities: [
        { label: "Infinity Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Kids Splash Pad", icon: "💦", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Jogging Track", icon: "🏃", color: "#d7b46a" },
        { label: "Meditation Area", icon: "🧘", color: "#d7b46a" },
        { label: "Outdoor Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "BBQ Area", icon: "🍖", color: "#d7b46a" },
        { label: "Sitting Areas", icon: "🪑", color: "#d7b46a" },
        { label: "Gaming Room", icon: "🎮", color: "#d7b46a" },
        { label: "Kids Play Area", icon: "🧸", color: "#d7b46a" },
        { label: "Badminton Court", icon: "🏸", color: "#d7b46a" },
        { label: "Parks & Gardens", icon: "🌳", color: "#d7b46a" },
        { label: "Retail Facilities", icon: "🛍️", color: "#d7b46a" },
        { label: "Cafés & Restaurants", icon: "☕", color: "#d7b46a" },
        { label: "Supermarket", icon: "🛒", color: "#d7b46a" },
        { label: "Lobby / Reception", icon: "🛋️", color: "#d7b46a" },
        { label: "Parking", icon: "🚗", color: "#d7b46a" },
        { label: "Balcony", icon: "🌤️", color: "#d7b46a" },
        { label: "CCTV Security", icon: "📹", color: "#d7b46a" },
        { label: "Health Care", icon: "🏥", color: "#d7b46a" },
      ],
    },

    // ✅ This makes it match “other .js files” that have a dedicated paymentPlan section
    paymentPlan: {
      title: "Payment plan",
      headline: PAYMENT_PLAN_HEADLINE,
      milestones: [
        { label: "On booking", when: "Booking", percent: 5 },
        { label: "Within 30 days", when: "30 days", percent: 15 },
        {
          label: "Monthly installments (1% × 24 months)",
          when: "Monthly",
          percent: 24,
        },
        { label: "On handover", when: "Handover", percent: 20 },
        { label: "Post-handover", when: "Post-handover", percent: 36 },
      ],
      note: "Project information is provided by the developer and may change. If you notice an error, contact support to update the data.",
    },

    location: {
      title: "Project Location",
      projectName: PROJECT_NAME_EN,
      address: LOCATION_EN,
      lat: 24.97,
      lng: 55.14,
      zoom: 12,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "Located within Dubai’s growing industrial and residential corridor",
        },
        {
          icon: "🛣️",
          text: "Good connectivity to major roads linking key Dubai destinations",
        },
        {
          icon: "✈️",
          text: "Convenient access toward Expo City & Al Maktoum International Airport (DWC)",
        },
      ],
    },

    nearbyAttractions: {
      title: "Nearby Places",
      attractions: [
        { name: "Sapphire Mall", distance: "4 km", time: null, icon: "🛍️" },
        { name: "Waterfall Park", distance: "9 km", time: null, icon: "🌿" },
        {
          name: "Tappy Toes Nursery",
          distance: "10.9 km",
          time: null,
          icon: "🧒",
        },
        {
          name: "Al Maktoum International Airport (DWC)",
          distance: "16.5 km",
          time: null,
          icon: "✈️",
        },
        {
          name: "Jebel Ali Beach",
          distance: "21.9 km",
          time: null,
          icon: "🏖️",
        },
      ],
    },
  },

  // ============================ AR ============================
  ar: {
    seo: {
      title: "كوفنتري كيرف 2 | استوديو وغرفة وغرفتين في دبي الصناعية",
      description:
        "كوفنتري كيرف 2 من شركة GFS للتطوير العقاري في دبي الصناعية يوفّر شقق استوديو وغرفة وغرفتين مع مرافق عصرية وخطة دفع منظمة حتى التسليم (حسب التوفر).",
      keywords:
        "كوفنتري كيرف 2, GFS, دبي الصناعية, شقق دبي, استوديو دبي, شقق قيد التطوير, خطة دفع دبي",
      canonical: "/properties/apartments/gfs/coventry-curve-2",
    },

    project: {
      name: PROJECT_NAME_AR,
      developer: DEVELOPER_AR,
      location: LOCATION_AR,
      status: STATUS_AR,
      startingPrice: STARTING_PRICE_AR,
      completionDate: HANDOVER_AR,

      // ✅ keep for cards/specs / parser
      paymentPlan: PAYMENT_PLAN_AR,

      unitTypes: ["استوديو", "غرفة نوم واحدة", "غرفتان نوم"],
      type: "شقق سكنية",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: LOGO_URL,
      companyName: "GFS",
      rating: null,
      badges: ["دبي الصناعية", "قيد التطوير", "التسليم Q1 2028"],
    },

    intro: {
      title: "سكن عصري بارتفاع متوسط في موقع متصل داخل دبي",
      paragraphs: [
        "كوفنتري كيرف 2 هو مشروع سكني حديث من شركة GFS للتطوير العقاري يضم وحدات استوديو وغرفة وغرفتين نوم بتصاميم عملية ومساحات مضيئة.",
        "يوفّر المشروع أسلوب حياة متكامل بمناطق للراحة والعافية والترفيه للعائلات، مع سهولة الوصول باتجاه Expo City ومطار آل مكتوم الدولي.",
        "خيار مناسب للسكن أو الاستثمار، مع خطة سداد منظمة ومرافق يومية تُلبي احتياجات الحياة الحديثة.",
      ],
      brochures: [
        { title: "تحميل الكتيّب (PDF)", url: BROCHURE_PDF, type: "main" },
        {
          title: "تحميل المخططات (PDF)",
          url: FLOORPLANS_PDF,
          type: "floorplans",
        },
        { title: "فيديو المبنى (MP4)", url: BUILDING_VIDEO, type: "video" },
      ],
      imgUrl: INTRO_IMG,
      imgAlt: "كوفنتري كيرف 2",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "دبي",
          label: "المدينة الصناعية",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: HANDOVER_AR,
          label: "التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "5/15/24/20/36",
          label: "خطة السداد",
        },
      ],
      keyHighlights: [
        "خيارات استوديو وغرفة وغرفتين بتوزيعات عملية واستغلال ممتاز للمساحة",
        "مرافق أسلوب حياة تشمل مسبح وجيم ومسار جري ومناطق استرخاء وعافية",
        "موقع متصل ضمن محور نمو دبي باتجاه Expo City ومطار آل مكتوم",
        "خدمات يومية قريبة مثل المتاجر والمقاهي والمرافق الأساسية",
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY_SLIDES,
      projectTag: PROJECT_NAME_AR,
      video: { title: "فيديو المبنى", url: BUILDING_VIDEO },
    },

    floorPlans: {
      type: "apartments",
      brochureHref: FLOORPLANS_PDF,
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "استوديو",
            "المساحة الإجمالية": "337 قدم²",
            "السعر الابتدائي": "514,710 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة السداد": PAYMENT_PLAN_AR,
          },
          images: [FP_STUDIO],
          features: ["مخطط عملي", "سعر دخول مناسب للاستثمار", "تصميم عصري"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة نوم واحدة",
            "المساحة الإجمالية": "712 قدم²",
            "السعر الابتدائي": "931,600 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة السداد": PAYMENT_PLAN_AR,
          },
          images: [FP_1BR],
          features: [
            "توزيع متوازن",
            "تخطيط عملي للمساحات",
            "مساحة معيشة مريحة",
          ],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "غرفتان نوم",
            "المساحة الإجمالية": "805 قدم²",
            "السعر الابتدائي": "1,052,560 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة السداد": PAYMENT_PLAN_AR,
          },
          images: [FP_2BR],
          features: ["مناسب للعائلات", "مساحة عملية", "طلب قوي للسكن"],
        },
      ],
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح إنفينيتي", icon: "🏊", color: "#d7b46a" },
        { label: "منطقة رش للأطفال", icon: "💦", color: "#d7b46a" },
        { label: "جيم", icon: "💪", color: "#d7b46a" },
        { label: "مسار جري", icon: "🏃", color: "#d7b46a" },
        { label: "منطقة تأمل", icon: "🧘", color: "#d7b46a" },
        { label: "سينما خارجية", icon: "🎬", color: "#d7b46a" },
        { label: "منطقة شواء", icon: "🍖", color: "#d7b46a" },
        { label: "جلسات خارجية", icon: "🪑", color: "#d7b46a" },
        { label: "غرفة ألعاب", icon: "🎮", color: "#d7b46a" },
        { label: "منطقة ألعاب أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "ملعب بادمنتون", icon: "🏸", color: "#d7b46a" },
        { label: "حدائق ومساحات خضراء", icon: "🌳", color: "#d7b46a" },
        { label: "متاجر", icon: "🛍️", color: "#d7b46a" },
        { label: "مقاهٍ ومطاعم", icon: "☕", color: "#d7b46a" },
        { label: "سوبرماركت", icon: "🛒", color: "#d7b46a" },
        { label: "لوبي / استقبال", icon: "🛋️", color: "#d7b46a" },
        { label: "مواقف سيارات", icon: "🚗", color: "#d7b46a" },
        { label: "شرفات", icon: "🌤️", color: "#d7b46a" },
        { label: "كاميرات مراقبة", icon: "📹", color: "#d7b46a" },
        { label: "خدمات صحية", icon: "🏥", color: "#d7b46a" },
      ],
    },

    paymentPlan: {
      title: "خطة الدفع",
      headline: PAYMENT_PLAN_HEADLINE,
      milestones: [
        { label: "عند الحجز", when: "الحجز", percent: 5 },
        { label: "خلال 30 يوم", when: "30 يوم", percent: 15 },
        { label: "أقساط شهرية (1% × 24 شهر)", when: "شهرياً", percent: 24 },
        { label: "عند التسليم", when: "التسليم", percent: 20 },
        { label: "بعد التسليم", when: "بعد التسليم", percent: 36 },
      ],
      note: "معلومات المشروع مقدمة من المطوّر وقد تتغير. إذا لاحظت خطأ، تواصل مع الدعم لتحديث البيانات.",
    },

    location: {
      title: "موقع المشروع",
      projectName: PROJECT_NAME_AR,
      address: LOCATION_AR,
      lat: 24.97,
      lng: 55.14,
      zoom: 12,
      proximityFeatures: [
        { icon: "🏙️", text: "ضمن محور نمو دبي الصناعي والسكني" },
        { icon: "🛣️", text: "اتصال جيد بالطرق الرئيسية إلى وجهات دبي" },
        { icon: "✈️", text: "قرب Expo City ومطار آل مكتوم الدولي (DWC)" },
      ],
    },

    nearbyAttractions: {
      title: "أماكن قريبة",
      attractions: [
        { name: "Sapphire Mall", distance: "4 كم", time: null, icon: "🛍️" },
        { name: "Waterfall Park", distance: "9 كم", time: null, icon: "🌿" },
        {
          name: "Tappy Toes Nursery",
          distance: "10.9 كم",
          time: null,
          icon: "🧒",
        },
        {
          name: "مطار آل مكتوم الدولي (DWC)",
          distance: "16.5 كم",
          time: null,
          icon: "✈️",
        },
        { name: "شاطئ جبل علي", distance: "21.9 كم", time: null, icon: "🏖️" },
      ],
    },
  },
};

export default coventryCurve2Data;
