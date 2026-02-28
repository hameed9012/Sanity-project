// src/data/properties/apartments/sobha/skyParks.js

// ✅ BunnyCDN base (as you said)
const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";

// ✅ Project folder on Bunny
const PROJECT_DIR = "/sky-parks";

// ✅ Safe CDN builder:
// - keeps "/" as path separator
// - encodes spaces and special chars per segment (so subfolders like "251013 ID new" work)
const cdn = (relativePath = "") => {
  const safePath = String(relativePath)
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
  return `${BUNNY_CDN_BASE}${PROJECT_DIR}/${safePath}`;
};

// ✅ Common assets (centralized)
const BROCHURE_PDF = cdn("SOBHA-SKYPARKS-BROCHURE.pdf");

const HERO_BG = cdn("hero-day.jpg");
const INTRO_IMG = cdn("intro-main.jpg");

const GALLERY = [
  cdn("exterior-pool-01.jpg"),
  cdn("exterior-sunrise-01.jpg"),
  cdn("251013 ID new/interior-living-dining-01.jpg"),
  cdn("251013 ID new/interior-bedroom-master-01.jpg"),
  // cdn("251013 ID new/interior-bathroom-01.jpg"),
  cdn("exterior-night-01.jpg"),
  cdn("exterior-cityview-02.jpg"),
  cdn("251013 ID new/interior-living-dining-02.jpg"),
  cdn("251013 ID new/interior-bedroom-master-02.jpg"),
  // cdn("251013 ID new/interior-kitchen-01.jpg"),
];

const FLOORPLAN_1BR = cdn("1A_0.png");
const FLOORPLAN_2BR = cdn("2C_0.png");
const FLOORPLAN_3BR = cdn("3A.png");

export const skyParksData = {
  en: {
    seo: {
      title:
        "Sobha SkyParks | 1–3 Bedroom Apartments on Sheikh Zayed Road Dubai | Sobha Realty",
      description:
        "Sobha SkyParks is an 81-storey luxury residential tower on Sheikh Zayed Road, Dubai, offering 1, 2 and 3 bedroom apartments with panoramic city views, world-class amenities and unparalleled access to Dubai's business and lifestyle hubs.",
      keywords:
        "sobha sky parks, sobha skyparks dubai, sheikh zayed road apartments, sobha realty, 1 bedroom, 2 bedroom, 3 bedroom, off plan dubai, luxury apartments dubai",
      canonical: "/properties/apartments/sobha/skyparks",
    },

    project: {
      name: "Sobha SkyParks",
      developer: "Sobha Realty",
      location: "Sheikh Zayed Road, Dubai",
      status: "Off-Plan",

      // ✅ Updated notes
      startingPrice: "AED 3.4M",
      completionDate: "Q4 2031",
      paymentPlan: "70% / 30%",

      type: "Apartments",
      units: "1, 2 & 3 Bedroom Residences",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: `${BUNNY_CDN_BASE}/projects-profile-pictures/skyparks.svg`,
      companyName: "Sobha Realty",
      rating: 4.7,
    },

    intro: {
      title: "PANORAMIC LIVING ON SHEIKH ZAYED ROAD",
      paragraphs: [
        "Sobha SkyParks redefines luxury living in Dubai with its 81-storey architectural masterpiece on Sheikh Zayed Road. The tower offers an unparalleled residential experience that combines breathtaking panoramic views with meticulous attention to detail.",
        "Each residence is designed to maximize natural light and views, featuring floor-to-ceiling windows, premium finishes, and smart home technology. The development places residents at the heart of Dubai's most prestigious location, with direct access to business districts, luxury shopping, and fine dining.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "🏙️",
          color: "#1A5F7A",
          size: "18.2 MB",
          category: "Luxury Apartments",
          fileName: "Sobha SkyParks - Client Deck Final.pdf",
          description:
            "Complete project overview including floor plans, amenities, views and payment plan details.",
        },
      ],
      imgUrl: INTRO_IMG,
      imgAlt:
        "Sobha SkyParks luxury tower on Sheikh Zayed Road with panoramic Dubai views.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏙️",
          value: "81 Floors",
          label: "Iconic Tower",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌆",
          value: "Sheikh Zayed Rd",
          label: "Prime Location",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "Q4 2031",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "A Visual Symphony",
      slides: GALLERY,
      projectTag: "Sobha SkyParks",
    },

    // ✅ FIXED: SkyParks EN floorPlans (same blueprint style you’re using)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1-bedroom",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "715.59 SQ.FT.",
            "Starting Price": "AED 3,400,000",
            Handover: "Q4 2031",
            paymentPlan: "70% / 30%",
          },
          images: [FLOORPLAN_1BR],
        },
        {
          id: "2-bedroom",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,479.07 SQ.FT.",
            "Starting Price": "AED 4,752,080",
            Handover: "Q4 2031",
            paymentPlan: "70% / 30%",
          },
          images: [FLOORPLAN_2BR],
        },
        {
          id: "3-bedroom",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "2,267.21 SQ.FT.",
            "Starting Price": "AED 9,352,241",
            Handover: "Q4 2031",
            paymentPlan: "70% / 30%",
          },
          images: [FLOORPLAN_3BR],
        },
      ],
    },

    amenities: {
      title: "World-Class Amenities For Elevated Living",
      amenities: [
        { label: "Infinity-Edge Sky Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Padel Courts", icon: "🎾", color: "#d7b46a" },
        { label: "State-of-the-Art Gym", icon: "💪", color: "#d7b46a" },
        { label: "Yoga & Meditation Deck", icon: "🧘", color: "#d7b46a" },
        { label: "Rooftop Lounge", icon: "🏙️", color: "#d7b46a" },
        { label: "Zen Garden", icon: "🎋", color: "#d7b46a" },
        { label: "Children's Play Area", icon: "👶", color: "#d7b46a" },
        { label: "Calisthenics Zone", icon: "🤸", color: "#d7b46a" },
        { label: "Floating Decks", icon: "🌊", color: "#d7b46a" },
        { label: "Private Dining Rooms", icon: "🍽️", color: "#d7b46a" },
        { label: "Conference Facilities", icon: "💼", color: "#d7b46a" },
        { label: "Retail Arcade", icon: "🛍️", color: "#d7b46a" },
        { label: "24/7 Concierge", icon: "🔔", color: "#d7b46a" },
        { label: "Valet Parking", icon: "🅿️", color: "#d7b46a" },
        { label: "Smart Elevator System", icon: "⬆️", color: "#d7b46a" },
        { label: "Landscaped Terraces", icon: "🌿", color: "#d7b46a" },
      ],
    },

    // ✅ EN (exact from Google Maps)
    location: {
      title: "Project Location",
      projectName: "Sobha SkyParks",
      address: "Sobha SkyParks, Sheikh Zayed Road, Dubai, United Arab Emirates",
      lat: 25.1874576,
      lng: 55.2574214,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "Direct access to Sheikh Zayed Road" },
        { icon: "🚇", text: "Approx. 5 min to Business Bay Metro Station" },
        { icon: "🏢", text: "Immediate proximity to Business Bay" },
        { icon: "🛍️", text: "Approx. 10–12 min to Dubai Mall & Downtown" },
        { icon: "✈️", text: "Approx. 20 min to Dubai International Airport" },
      ],
    },

    nearbyAttractions: {
      title: "At The Heart Of Everything",
      attractions: [
        {
          name: "Business Bay",
          distance: "≈ 1 km",
          time: "≈ 3 min",
          icon: "🏢",
        },
        {
          name: "Downtown Dubai",
          distance: "≈ 5 km",
          time: "≈ 10–12 min",
          icon: "🏙️",
        },
        {
          name: "Dubai Mall",
          distance: "≈ 7 km",
          time: "≈ 12–15 min",
          icon: "🛍️",
        },
        {
          name: "Dubai International Airport",
          distance: "≈ 15 km",
          time: "≈ 20–25 min",
          icon: "✈️",
        },
        {
          name: "Dubai Marina",
          distance: "≈ 20 km",
          time: "≈ 20–25 min",
          icon: "🌊",
        },
      ],
    },

    cta: {
      title: "Ready To Experience SkyParks Living?",
      description:
        "Contact our sales team to schedule a private viewing, discuss available units, or receive the complete project brochure and detailed payment plan.",
      buttons: [
        { text: "Schedule Viewing", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ========================
  // ARABIC VERSION
  // ========================
  ar: {
    seo: {
      title:
        "Sobha SkyParks | شقق 1 إلى 3 غرف نوم على شارع الشيخ زايد دبي | شوبا العقارية",
      description:
        "يقدّم برج «Sobha SkyParks» الفاخر (81 طابقاً) على شارع الشيخ زايد بدبي شققاً من 1، 2 و3 غرف نوم بإطلالات بانورامية على المدينة ومرافق عالمية المستوى وموقع استثنائي في قلب دبي.",
      keywords:
        "Sobha SkyParks، شوبا سكاي باركس، شقق شارع الشيخ زايد، شوبا العقارية، شقق فاخرة دبي، شقققيد الإنشاء دبي، شقق بإطلالات مدينة",
      canonical: "/properties/apartments/sobha/skyparks",
    },

    project: {
      name: "Sobha SkyParks",
      developer: "شوبا العقارية",
      location: "شارع الشيخ زايد، دبي",
      status: "قيد الإنشاء",

      // ✅ Updated notes
      startingPrice: "ابتداءً من 3.4 مليون درهم",
      completionDate: "الربع الرابع 2031",
      paymentPlan: "70% / 30%",

      type: "شقق سكنية",
      units: "شقق 1، 2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: `${BUNNY_CDN_BASE}/projects-profile-pictures/skyparks.svg`,
      companyName: "Sobha Realty",
      rating: 4.7,
    },

    intro: {
      title: "حياة بانورامية على شارع الشيخ زايد",
      paragraphs: [
        "يُعيد برج «Sobha SkyParks» الذي يبلغ ارتفاعه 81 طابقاً تعريف الحياة الفاخرة في دبي من خلال تصميمه المعماري الاستثنائي على شارع الشيخ زايد. يقدّم البرج تجربة سكنية فريدة تجمع بين الإطلالات الخلابة والتفاصيل الدقيقة المدروسة.",
        "صُمّمت كل وحدة سكنية لتعظيم ضوء الشمس والإطلالات، مع نوافذ تمتد من الأرض إلى السقف، وتشطيبات راقية، وتقنيات المنزل الذكي. يضع المطور السكان في قلب أكثر المواقع المرموقة في دبي، مع وصول مباشر إلى المناطق التجارية والتسوق الفاخر والمطاعم العالمية.",
      ],
      brochures: [
        {
          title: "عرض Sobha SkyParks الرئيسي",
          url: BROCHURE_PDF,
          type: "main",
          icon: "🏙️",
          color: "#1A5F7A",
          size: "18.2 MB",
          category: "شقق فاخرة",
          fileName: "Sobha SkyParks - الكتيّب التعريفي.pdf",
          description:
            "ملف تعريفي كامل للمشروع يتضمّن المخططات، والمرافق، والإطلالات، وخطة الدفع.",
        },
      ],
      imgUrl: INTRO_IMG,
      imgAlt:
        "برج Sobha SkyParks الفاخر على شارع الشيخ زايد بإطلالات بانورامية على دبي.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏙️",
          value: "81 طابق",
          label: "برج أيقوني",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌆",
          value: "شارع الشيخ زايد",
          label: "موقع مميّز",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "الربع 4 2031",
          label: "التسليم",
        },
      ],
    },

    gallery: {
      title: "مشاهد من SkyParks",
      slides: GALLERY,
      projectTag: "Sobha SkyParks",
    },

    floorPlans: {
      type: "شقق",
      plans: [
        {
          id: "1-bedroom",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "المساحة الإجمالية": "715.59 قدم²",
            "السعر الابتدائي": "3,400,000 درهم",
            "موعد التسليم": "الربع الرابع 2031",
            "خطة الدفع": "70% / 30%",
          },
          images: [FLOORPLAN_1BR],
        },
        {
          id: "2-bedroom",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "المساحة الإجمالية": "1,479.07 قدم²",
            "السعر الابتدائي": "4,752,080 درهم",
            "موعد التسليم": "الربع الرابع 2031",
            "خطة الدفع": "70% / 30%",
          },
          images: [FLOORPLAN_2BR],
        },
        {
          id: "3-bedroom",
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "المساحة الإجمالية": "2,267.21 قدم²",
            "السعر الابتدائي": "9,352,241 درهم",
            "موعد التسليم": "الربع الرابع 2031",
            "خطة الدفع": "70% / 30%",
          },
          images: [FLOORPLAN_3BR],
        },
      ],
    },

    amenities: {
      title: "مرافق عالمية المستوى لحياة استثنائية",
      amenities: [
        { label: "مسبح إنفينيتي على السطح", icon: "🏊", color: "#d7b46a" },
        { label: "ملاعب بادل تنس", icon: "🎾", color: "#d7b46a" },
        { label: "نادي ريادي متكامل", icon: "💪", color: "#d7b46a" },
        { label: "منطقة يوغا وتأمل", icon: "🧘", color: "#d7b46a" },
        { label: "لاونج على السطح", icon: "🏙️", color: "#d7b46a" },
        { label: "حديقة زن هادئة", icon: "🎋", color: "#d7b46a" },
        { label: "منطقة ألعاب للأطفال", icon: "👶", color: "#d7b46a" },
        { label: "منطقة تمارين رياضية", icon: "🤸", color: "#d7b46a" },
        { label: "تراسات عائمة", icon: "🌊", color: "#d7b46a" },
        { label: "غرف طعام خاصة", icon: "🍽️", color: "#d7b46a" },
        { label: "مرافق مؤتمرات", icon: "💼", color: "#d7b46a" },
        { label: "سوق تجاري", icon: "🛍️", color: "#d7b46a" },
        { label: "كونسيرج 24/7", icon: "🔔", color: "#d7b46a" },
        { label: "خدمة اصطفاف السيارات", icon: "🅿️", color: "#d7b46a" },
        { label: "نظام مصاعد ذكي", icon: "⬆️", color: "#d7b46a" },
        { label: "تراسات منسّقة", icon: "🌿", color: "#d7b46a" },
      ],
    },

    // ✅ AR (exact from Google Maps)
    location: {
      title: "موقع المشروع",
      projectName: "Sobha SkyParks",
      address: "Sobha SkyParks، شارع الشيخ زايد، دبي، الإمارات العربية المتحدة",
      lat: 25.1874576,
      lng: 55.2574214,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "وصول مباشر إلى شارع الشيخ زايد" },
        { icon: "🚇", text: "حوالي 5 دقائق إلى محطة مترو الخليج التجاري" },
        { icon: "🏢", text: "قرب مباشر من منطقة الخليج التجاري" },
        { icon: "🛍️", text: "حوالي 10–12 دقيقة إلى دبي مول ووسط المدينة" },
        { icon: "✈️", text: "حوالي 20 دقيقة إلى مطار دبي الدولي" },
      ],
    },

    nearbyAttractions: {
      title: "في قلب كل شيء",
      attractions: [
        {
          name: "الخليج التجاري",
          distance: "≈ 1 كم",
          time: "≈ 3 دقائق",
          icon: "🏢",
        },
        {
          name: "وسط مدينة دبي",
          distance: "≈ 5 كم",
          time: "≈ 10–12 دقيقة",
          icon: "🏙️",
        },
        {
          name: "دبي مول",
          distance: "≈ 7 كم",
          time: "≈ 12–15 دقيقة",
          icon: "🛍️",
        },
        {
          name: "مطار دبي الدولي",
          distance: "≈ 15 كم",
          time: "≈ 20–25 دقيقة",
          icon: "✈️",
        },
        {
          name: "مرسى دبي",
          distance: "≈ 20 كم",
          time: "≈ 20–25 دقيقة",
          icon: "🌊",
        },
      ],
    },

    cta: {
      title: "مستعد لتجربة أسلوب الحياة في SkyParks؟",
      description:
        "تواصل مع فريق المبيعات لحجز عرض خاص، أو لمناقشة الوحدات المتاحة، أو للحصول على الكتيّب الكامل للمشروع وخطة الدفع التفصيلية.",
      buttons: [
        { text: "حجز موعد زيارة", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};
