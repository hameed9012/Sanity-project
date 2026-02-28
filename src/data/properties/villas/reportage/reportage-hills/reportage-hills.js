// src/data/properties/villasreportage/reportage-hills/reportageHills.js
// ✅ Key project facts + amenities + connectivity are extracted from the official brochure PDFs.
// ✅ Starting prices + payment plan are based on your confirmed sales info (can change later if price list updates).

const BASE =
  "https://luxury-real-estate-media.b-cdn.net/reportage/reportage-hills";

/**
 * IMPORTANT:
 * Use encodeURI (NOT encodeURIComponent) so folder paths remain valid ("/" is not encoded),
 * while spaces become %20 automatically.
 */
const cdn = (fileName) => encodeURI(`${BASE}/${fileName}`);

// Shared (so we don't repeat text wrongly)
const HANDOVER_EN = "Q4 2028";
const PAYMENT_EN = "67% / 33%";

const HANDOVER_AR = "الربع الرابع 2028";

export const reportageHillsData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title: "Reportage Hills | 3–5BR Villas in Dubailand, Dubai | Reportage",
      description:
        "Reportage Hills by Reportage Properties is a residential community in Dubailand, Dubai, featuring 3–5 bedroom villas, world-class amenities, and handover targeted for Q4 2028.",
      keywords:
        "reportage hills, reportage properties, dubailand villas, 3 bedroom villa dubai, 4 bedroom villa dubai, 5 bedroom villa dubai, off plan dubailand",
      canonical: "/properties/villas/reportage/reportage-hills",
    },

    project: {
      name: "Reportage Hills",
      developer: "Reportage Properties",
      location: "Dubailand, Dubai, UAE",
      status: "Off-Plan",
      completionDate: HANDOVER_EN,
      paymentPlan: PAYMENT_EN,
      startingPrice: "AED 2,795,000",
      projectType: "Villas (3–5 Bedrooms)",
    },

    hero: {
      backgroundUrl: cdn("CGI-NIGHT-DRONE.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/reportage.png",
      companyName: "Reportage Properties",
      rating: null,
    },

    intro: {
      title: "A Connected Lifestyle in Dubailand",
      paragraphs: [
        "Reportage Hills is a residential community in Dubailand, designed around privacy, greenery, and everyday convenience—supported by a wide amenities lineup and strong city connectivity.",
        "The community comprises 902 homes across 3, 4, and 5-bedroom layouts, with handover targeted for Q4 2028.",
      ],
      brochures: [
        {
          title: "Brochure (AR/EN)",
          url: cdn("R-DOT-HILLS Brochure Artwork AR-EN TK01 DIGITAL.pdf"),
          type: "main",
        },
        {
          title: "Unit Types (Floor Areas)",
          url: cdn("R-DOT-HILLS Brochure Unittype.pdf"),
          type: "floor-plans",
        },
        {
          title: "Masterplan",
          url: cdn("R-DOT-HILLS Brochure Masterplan.pdf"),
          type: "masterplan",
        },
      ],
      imgUrl: cdn("CGI-05.jpg"),
      imgAlt: "Reportage Hills community view",
      floatingCards: [
        {
          top: "16%",
          right: "-22px",
          icon: "🏘️",
          value: "902",
          label: "Homes",
        },
        {
          bottom: "28%",
          left: "-36px",
          icon: "📍",
          value: "Dubailand",
          label: "Prime District",
        },
        {
          bottom: "12%",
          right: "-18px",
          icon: "🗓️",
          value: HANDOVER_EN,
          label: "Expected Handover",
        },
      ],
    },

    gallery: {
      title: "Reportage Hills Visuals",
      slides: [
        cdn("02.png"),
        cdn("03.png"),
        cdn("04.jpg"),

        cdn("CGI-01.jpg"),
        cdn("CGI-02.jpg"),
        cdn("CGI-03.jpg"),
        cdn("CGI-04.jpg"),
        cdn("CGI-05.jpg"),
        cdn("CGI-06.jpg"),
        cdn("CGI-07.jpg"),
        cdn("CGI-08.jpg"),
        cdn("CGI-09.jpg"),
        cdn("CGI-10.jpg"),
        cdn("CGI-11.jpg"),
        cdn("CGI-12 Gym.jpg"),
        cdn("CGI-13.jpg"),
        cdn("CGI-14.jpeg"),
        cdn("CGI-15.jpeg"),
        cdn("CGI-16.jpeg"),
        cdn("CGI-17.jpeg"),
        cdn("CGI-18.jpeg"),
        cdn("CGI-19.jpeg"),
        cdn("CGI-20.jpeg"),
        cdn("CGI-22.jpeg"),
        cdn("CGI-23.jpeg"),
        cdn("CGI-24.jpeg"),
        cdn("CGI-25.jpeg"),
        cdn("CGI-NIGHT-DRONE.jpg"),

        cdn("Reportage HILLS 5BRb BEDROOM1 Perspective 2.jpg"),
        cdn("Reportage HILLS 5BRb BEDROOM2 Perspective.jpg"),
        cdn("Reportage HILLS 5BRb BEDROOM4 Perspective 2.jpg"),
        cdn("Reportage HILLS 5BRb DINING Perspective.jpg"),
        cdn("Reportage HILLS 5BRb LIVING Perspective.jpg"),
      ],
      projectTag: "Reportage Hills",
    },

    // ENGLISH
    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "th-3br",
          bedrooms: 3,
          title: "3 Bedroom Villa",
          specs: {
            "Total Area": "1,210 sq.ft",
            "Starting Price": "AED 2,795,000",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_EN,
          },
          images: [cdn("3br TOWNHOUSE Reportage hills ground floor.png")],
        },
        {
          id: "th-4br",
          bedrooms: 4,
          title: "4 Bedroom Villa",
          specs: {
            "Total Area": "750 sq.ft",
            "Starting Price": "AED 3,400,000",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_EN,
          },
          images: [cdn("4br TOWNHOUSE Reportage hills Ground floor.png")],
        },
        {
          id: "th-5br",
          bedrooms: 5,
          title: "5 Bedroom Villa",
          specs: {
            "Total Area": "1,003 sq.ft",
            "Starting Price": "AED 4,295,000",
            Handover: HANDOVER_EN,
            "Payment Plan": PAYMENT_EN,
          },
          images: [cdn("5br TOWNHOUSE Reportage hills Ground floor.png")],
        },
      ],
    },

    amenities: {
      title: "World-Class Amenities",
      amenities: [
        { label: "Private Parking (Each Unit)", icon: "🚗", color: "#d7b46a" },
        { label: "Large Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Splash Pad", icon: "💦", color: "#d7b46a" },
        { label: "Gym & Fitness Centre", icon: "💪", color: "#d7b46a" },
        { label: "Kids Play Area", icon: "🛝", color: "#d7b46a" },
        { label: "Shaded Seating Areas", icon: "🪑", color: "#d7b46a" },
        { label: "BBQ Stations", icon: "🍖", color: "#d7b46a" },
        { label: "Landscape Areas", icon: "🌿", color: "#d7b46a" },
        { label: "Tennis Court", icon: "🎾", color: "#d7b46a" },
        { label: "Mosque", icon: "🕌", color: "#d7b46a" },
        { label: "Retail Area", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Reportage Hills",
      address: "Dubailand, Dubai, UAE",
      lat: 25.0806,
      lng: 55.3627,
      zoom: 12,
      proximityFeatures: [
        { icon: "🛣️", text: "Easy city-wide connectivity" },
        { icon: "🏙️", text: "Nearby lifestyle + retail destinations" },
        { icon: "✈️", text: "Access to major airports & Expo City" },
      ],
    },

    nearbyAttractions: {
      title: "Within Reach",
      attractions: [
        {
          name: "Dubai Sports City",
          distance: null,
          time: "10 min",
          icon: "🏟️",
        },
        {
          name: "Dubai Investment Park",
          distance: null,
          time: "20 min",
          icon: "🏢",
        },
        { name: "Cityland Mall", distance: null, time: "15 min", icon: "🛍️" },
        { name: "Global Village", distance: null, time: "20 min", icon: "🎡" },
        { name: "Expo City Dubai", distance: null, time: "25 min", icon: "🌍" },
        {
          name: "Plantation Equestrian & Polo Club",
          distance: null,
          time: "10 min",
          icon: "🐎",
        },
        {
          name: "Al Maktoum International Airport (DWC)",
          distance: null,
          time: "30 min",
          icon: "✈️",
        },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title: "ربورتاج هيلز | فلل 3–5 غرف في دبي لاند | ربورتاج",
      description:
        "«ربورتاج هيلز» من ربورتاج العقارية هو مجتمع سكني في دبي لاند يضم وحدات من 3 إلى 5 غرف نوم، مع مرافق متكاملة وموعد تسليم مستهدف في الربع الرابع 2028.",
      keywords:
        "ربورتاج هيلز, ربورتاج العقارية, دبي لاند, فلل دبي لاند, فلل 3 غرف, فلل 4 غرف, فلل 5 غرف, عقارات قيد التطوير دبي",
      canonical: "/properties/villas/reportage/reportage-hills",
    },

    project: {
      name: "Reportage Hills",
      developer: "ربورتاج العقارية",
      location: "دبي لاند، دبي، الإمارات",
      status: "قيد الإنشاء",
      completionDate: HANDOVER_AR,
      paymentPlan: PAYMENT_EN,
      startingPrice: "2,795,000 درهم",
      projectType: "فلل (3–5 غرف نوم)",
    },

    hero: {
      backgroundUrl: cdn("CGI-NIGHT-DRONE.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/reportage.png",
      companyName: "ربورتاج العقارية",
      rating: null,
    },

    intro: {
      title: "حياة متصلة في دبي لاند",
      paragraphs: [
        "يقع «ربورتاج هيلز» في دبي لاند ويقدّم نمط سكن عملي يوازن بين الخصوصية والمساحات الخضراء وسهولة الوصول إلى أهم الوجهات في دبي.",
        "يضم المجتمع 902 وحدة بتصاميم من 3 و4 و5 غرف نوم، مع تسليم مستهدف في الربع الرابع 2028.",
      ],
      brochures: [
        {
          title: "الكتيّب (عربي/إنجليزي)",
          url: cdn("R-DOT-HILLS Brochure Artwork AR-EN TK01 DIGITAL.pdf"),
          type: "main",
        },
        {
          title: "أنواع الوحدات (مساحات المخططات)",
          url: cdn("R-DOT-HILLS Brochure Unittype.pdf"),
          type: "floor-plans",
        },
        {
          title: "الماستر بلان",
          url: cdn("R-DOT-HILLS Brochure Masterplan.pdf"),
          type: "masterplan",
        },
      ],
      imgUrl: cdn("CGI-05.jpg"),
      imgAlt: "منظر لمجتمع ربورتاج هيلز",
      floatingCards: [
        {
          top: "16%",
          right: "-22px",
          icon: "🏘️",
          value: "902",
          label: "وحدة سكنية",
        },
        {
          bottom: "28%",
          left: "-36px",
          icon: "📍",
          value: "دبي لاند",
          label: "موقع مميز",
        },
        {
          bottom: "12%",
          right: "-18px",
          icon: "🗓️",
          value: "2028",
          label: "تسليم متوقع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: [
        cdn("01.jpg"),
        cdn("02.png"),
        cdn("03.png"),
        cdn("04.jpg"),
        cdn("CGI-01.jpg"),
        cdn("CGI-02.jpg"),
        cdn("CGI-03.jpg"),
        cdn("CGI-04.jpg"),
        cdn("CGI-05.jpg"),
        cdn("CGI-06.jpg"),
        cdn("CGI-07.jpg"),
        cdn("CGI-08.jpg"),
        cdn("CGI-09.jpg"),
        cdn("CGI-10.jpg"),
        cdn("CGI-11.jpg"),
        cdn("CGI-12 Gym.jpg"),
        cdn("CGI-13.jpg"),
        cdn("CGI-14.jpeg"),
        cdn("CGI-15.jpeg"),
        cdn("CGI-16.jpeg"),
        cdn("CGI-17.jpeg"),
        cdn("CGI-18.jpeg"),
        cdn("CGI-19.jpeg"),
        cdn("CGI-20.jpeg"),
        cdn("CGI-22.jpeg"),
        cdn("CGI-23.jpeg"),
        cdn("CGI-24.jpeg"),
        cdn("CGI-25.jpeg"),
        cdn("CGI-NIGHT-DRONE.jpg"),
        cdn("Reportage HILLS 5BRb BEDROOM1 Perspective 2.jpg"),
        cdn("Reportage HILLS 5BRb BEDROOM2 Perspective.jpg"),
        cdn("Reportage HILLS 5BRb BEDROOM4 Perspective 2.jpg"),
        cdn("Reportage HILLS 5BRb DINING Perspective.jpg"),
        cdn("Reportage HILLS 5BRb LIVING Perspective.jpg"),
      ],
      projectTag: "Reportage Hills",
    },

    // ARABIC
    floorPlans: {
      type: "فيلات",
      plans: [
        {
          id: "th-3br",
          bedrooms: 3,
          title: "فيلا 3 غرف",
          specs: {
            "المساحة الإجمالية": "1,210 قدم²",
            "السعر الابتدائي": "2,795,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة السداد": PAYMENT_EN,
          },
          images: [cdn("3br TOWNHOUSE Reportage hills ground floor.png")],
        },
        {
          id: "th-4br",
          bedrooms: 4,
          title: "فيلا 4 غرف",
          specs: {
            "المساحة الإجمالية": "750 قدم²",
            "السعر الابتدائي": "3,400,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة السداد": PAYMENT_EN,
          },
          images: [cdn("4br TOWNHOUSE Reportage hills Ground floor.png")],
        },
        {
          id: "th-5br",
          bedrooms: 5,
          title: "فيلا 5 غرف",
          specs: {
            "المساحة الإجمالية": "1,003 قدم²",
            "السعر الابتدائي": "4,295,000 درهم",
            "موعد التسليم": HANDOVER_AR,
            "خطة السداد": PAYMENT_EN,
          },
          images: [cdn("5br TOWNHOUSE Reportage hills Ground floor.png")],
        },
      ],
    },

    amenities: {
      title: "مرافق بمستوى عالمي",
      amenities: [
        { label: "مواقف خاصة لكل وحدة", icon: "🚗", color: "#d7b46a" },
        { label: "مسبح كبير", icon: "🏊", color: "#d7b46a" },
        { label: "منطقة رذاذ/رشاشات", icon: "💦", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "منطقة ألعاب للأطفال", icon: "🛝", color: "#d7b46a" },
        { label: "جلسات مظللة", icon: "🪑", color: "#d7b46a" },
        { label: "محطات شواء", icon: "🍖", color: "#d7b46a" },
        { label: "مساحات خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "ملعب تنس", icon: "🎾", color: "#d7b46a" },
        { label: "مسجد", icon: "🕌", color: "#d7b46a" },
        { label: "منطقة محلات تجارية", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Reportage Hills",
      address: "دبي لاند، دبي، الإمارات",
      lat: 25.0806,
      lng: 55.3627,
      zoom: 12,
      proximityFeatures: [
        { icon: "🛣️", text: "سهولة الوصول إلى مختلف مناطق دبي" },
        { icon: "🏙️", text: "قرب من وجهات التسوق والترفيه" },
        { icon: "✈️", text: "وصول سريع للمطارات وإكسبو سيتي" },
      ],
    },

    nearbyAttractions: {
      title: "قريبة من أهم الوجهات",
      attractions: [
        {
          name: "مدينة دبي الرياضية",
          distance: null,
          time: "10 دقائق",
          icon: "🏟️",
        },
        {
          name: "Dubai Investment Park",
          distance: null,
          time: "20 دقيقة",
          icon: "🏢",
        },
        { name: "Cityland Mall", distance: null, time: "15 دقيقة", icon: "🛍️" },
        {
          name: "Global Village",
          distance: null,
          time: "20 دقيقة",
          icon: "🎡",
        },
        {
          name: "Expo City Dubai",
          distance: null,
          time: "25 دقيقة",
          icon: "🌍",
        },
        {
          name: "نادي الفروسية والبولو",
          distance: null,
          time: "10 دقائق",
          icon: "🐎",
        },
        {
          name: "مطار آل مكتوم (DWC)",
          distance: null,
          time: "30 دقيقة",
          icon: "✈️",
        },
      ],
    },
  },
};

export default reportageHillsData;
