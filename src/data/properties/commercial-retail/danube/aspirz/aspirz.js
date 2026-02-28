// src/data/properties/commercial-retail/danube/danube-aspirz/aspirz.js

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/danube/aspirz";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// Floor plans (exact filenames)
const FP = {
  studio: cdn("aspirz Studio floor plan.png"),
  oneBr: cdn("aspirz 1br floor plan.png"),
  oneBrFlex: cdn("aspirz 1br flex floor plan.png"),
  twoBr: cdn("aspirz 2br floor plan.png"),
  twoBrFlex: cdn("aspirz 2br flex floor plan.png"),
  threeBrFlex: cdn("aspirz 3br flex floor plan.png"),
};

export const aspirzDanubeData = {
  en: {
    seo: {
      title:
        "Aspirz by Danube | Hotel Apartments & Offices in Dubai Sports City | Handover Q4 2028",
      description:
        "Aspirz by Danube in Dubai Sports City is a mixed-use destination combining convertible hotel apartments with office suites, 30+ amenities, and a post-handover plan over 30 months.",
      keywords:
        "Aspirz by Danube, Danube Properties, Dubai Sports City, hotel apartments Dubai, offices Dubai, mixed-use Dubai, post handover plan",
      canonical: "/properties/commercial-retail/danube/danube-aspirz",
    },

    project: {
      name: "Aspirz",
      developer: "Danube Properties",
      location: "Dubai Sports City, Dubai, UAE",
      status: "Off-plan",
      startingPrice: "From AED 879,000",
      completionDate: "Q4 2028",
      paymentPlan: "10% / 59% / 1% / 30% (30 months post-handover)",
      type: "Mixed-Use (Convertible Hotel Apartments + Offices)",
      units: "Hotel Apartments + Office Suites",

      // extra facts you used before (safe for your UI if it renders them)
      propertyClass: "Affordable Luxury",
      furnishing: "Fully furnished",
      serviceCharge: "17–18 AED / sq.ft",
      floorsFormula: "2B + G + 7P + 40F + R",
    },

    hero: {
      backgroundUrl: cdn("Hero shot1 day.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png",
      companyName: "Danube",
      rating: 4.8,
      badges: ["Dubai Sports City", "On Sale", "Handover Q4 2028"],
    },

    intro: {
      title: "Live. Work. Thrive — In One Address",
      paragraphs: [
        "Aspirz by Danube is a mixed-use tower in Dubai Sports City, blending convertible hotel apartments with modern office suites.",
        "Enjoy 30+ amenities, hospitality-style services, and layouts designed for flexible living and working.",
        "Payment plan: 10% on booking, 59% during construction, 1%upon handover, and 30% within 30 months post-handover.",
      ],
      brochures: [
        {
          title: "Download Brochure (EN)",
          url: cdn("Aspirz_brochure_EN.pdf"),
          type: "main",
        },
        {
          title: "Floor Plans — Apartments (PDF)",
          url: cdn("Aspirz_floor_plans_apartments_VER2.pdf"),
          type: "plans",
        },
        {
          title: "Floor Plans — Offices (PDF)",
          url: cdn("Aspirz_floor_plans_offices_VER2.pdf"),
          type: "plans",
        },
        {
          title: "Location Map (PDF)",
          url: cdn("Location Map Aspirz.pdf"),
          type: "map",
        },
      ],
      imgUrl: cdn("Aspirz_BBQ.tif"),
      imgAlt: "Aspirz by Danube (BBQ render)",
      floatingCards: [
        {
          top: "18%",
          right: "-26px",
          icon: "📍",
          value: "DSC",
          label: "Dubai Sports City",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "1%",
          label: "Plan",
        },
        {
          bottom: "16%",
          right: "-26px",
          icon: "🗓️",
          value: "30 Months",
          label: "Post-Handover",
        },
      ],
    },

    gallery: {
      title: "A Visual Showcase",
      projectTag: "Aspirz — Dubai Sports City",
      slides: [
        cdn("Hero shot1 day.jpg"),
        cdn("Heroshot1_ night 20000px (1).tif"),
        cdn("Heroshot2_ night 20000px 12th June Extended Version.tif"),
        cdn("Aspirz_Dropoff.tif"),
        cdn("Aspirz_Reception Lobby 1.tif"),
        cdn("Aspirz_Reception Lobby 2.tif"),
        cdn("Aspirz_Residential Lobby 1.tif"),
        cdn("Aspirz_Residential Lobby 3.tif"),
        cdn("Aspirz_Infinity Pool.tif"),
        cdn("Aspirz_Pool.tif"),
        cdn("Aspirz_BBQ.tif"),
        cdn("Aspirz_Cinema.tif"),
        cdn("Aspirz_Prayer Room.tif"),
        cdn("Aspirz_Ballroom.tif"),
        cdn("Aspirz_Daycare.tif"),
        cdn("Aspirz_Indoor Gym.tif"),
        cdn("Aspirz_Outdoor Gym.tif"),
        cdn("Aspirz_BasketBall.tif"),
        cdn("Aspirz_Padel.tif"),
        cdn("Cricket.jpg"),
        cdn("BADMINTON.jpg"),
        cdn("Yoga Zumba.jpg"),
        cdn("Business & Print.jpg"),
        cdn("Cafe.jpg"),
        cdn("Podcast Room V3.jpg"),
        cdn("Games room.jpg"),
        cdn("Kids Play area.jpg"),
        cdn("Aspirz_Medium Office_1.tif"),
        cdn("Aspirz_Large Office_1.tif"),
        cdn("Aspirz_Very Large Office_1.tif"),
        cdn("studioapparment_view 2.jpg"),
        cdn("Image_2.png"),
        cdn("Image_3.png"),
        cdn("cam01_1bhk (1).jpg"),
        cdn("Scene 10_1.png"),
        cdn("Scene 14.png"),
        cdn("Scene 4_1.png"),
      ],
    },

    floorPlans: {
      type: "mixed-use",
      plans: [
        {
          id: "apt-studio",
          title: "Studio (Hotel Apartment)",
          specs: {
            "Total Area": "419.0 sq.ft",
            "Starting Price": "AED 895,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP.studio],
        },
        {
          id: "apt-1br",
          title: "1 Bedroom (Hotel Apartment)",
          specs: {
            "Total Area": "489.7 sq.ft",
            "Starting Price": "AED 1,432,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP.oneBr],
        },
        {
          id: "apt-1br-flex",
          title: "1 Bedroom Flex (Hotel Apartment)",
          specs: {
            "Total Area": "782.5 sq.ft",
            "Starting Price": "AED 1,950,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP.oneBrFlex],
        },
        {
          id: "apt-2br",
          title: "2 Bedroom (Hotel Apartment)",
          specs: {
            "Total Area": "839.3 sq.ft",
            "Starting Price": "AED 1,763,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP.twoBr],
        },
        {
          id: "apt-2br-flex",
          title: "2 Bedroom Flex (Hotel Apartment)",
          specs: {
            "Total Area": "897.6 sq.ft",
            "Starting Price": "AED 2,100,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP.twoBrFlex],
        },
        {
          id: "apt-3br-flex",
          title: "3 Bedroom Flex (Hotel Apartment)",
          specs: {
            "Total Area": "1,247.3 sq.ft",
            "Starting Price": "AED 2,402,000",
            Handover: "Q4 2028",
            "Payment Plan": "50% / 50%",
          },
          images: [FP.threeBrFlex],
        },
      ],
      brochureHref: cdn("Aspirz_brochure_EN.pdf"),
      plansHrefApartments: cdn("Aspirz_floor_plans_apartments_VER2.pdf"),
      plansHrefOffices: cdn("Aspirz_floor_plans_offices_VER2.pdf"),
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Infinity Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Indoor Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Indoor Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Outdoor Gym", icon: "🏋️‍♀️", color: "#d7b46a" },
        { label: "Padel Court", icon: "🎾", color: "#d7b46a" },
        { label: "Basketball Court", icon: "🏀", color: "#d7b46a" },
        { label: "Kids Play Area", icon: "🛝", color: "#d7b46a" },
        { label: "BBQ Area", icon: "🍖", color: "#d7b46a" },
        { label: "Podcast Studio", icon: "🎙️", color: "#d7b46a" },
        { label: "Business Centre", icon: "🏢", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Aspirz",
      address: "Dubai Sports City, Dubai, United Arab Emirates",
      // keep placeholders until you paste exact Google Maps pin
      lat: 25.033,
      lng: 55.216,
      zoom: 12,
      proximityFeatures: [
        { icon: "🏟️", text: "In the heart of Dubai Sports City" },
        { icon: "🛣️", text: "Easy access to major Dubai roads" },
      ],
    },

    cta: {
      title: "Interested in Aspirz?",
      description:
        "Share your details to receive availability, unit options, and the official brochure + floor plan PDFs.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "Aspirz من دانوب | شقق فندقية ومكاتب في دبي سبورتس سيتي | التسليم Q4 2028",
      description:
        "Aspirz من دانوب في دبي سبورتس سيتي مشروع متعدد الاستخدامات يجمع بين شقق فندقية قابلة للتحويل ومكاتب عصرية مع مرافق عديدة وخطة دفع بعد التسليم لمدة 30 شهرًا.",
      keywords:
        "Aspirz, دانوب, دبي سبورتس سيتي, شقق فندقية, مكاتب, مشروع متعدد الاستخدامات, خطة دفع بعد التسليم",
      canonical: "/properties/commercial-retail/danube/danube-aspirz",
    },

    project: {
      name: "Aspirz",
      developer: "دانوب العقارية",
      location: "دبي سبورتس سيتي، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 879,000 درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan: "10% / 59% / 1% / 30% (30 شهر بعد التسليم)",
      type: "متعدد الاستخدامات (شقق فندقية قابلة للتحويل + مكاتب)",
      units: "شقق فندقية + مكاتب",
      furnishing: "مفروش بالكامل",
      serviceCharge: "17–18 درهم / قدم²",
      floorsFormula: "2 قبو + أرضي + 7 مواقف + 40 طابق + سطح",
    },

    hero: {
      backgroundUrl: cdn("Hero shot1 day.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png",
      companyName: "Danube",
      rating: 4.8,
      badges: ["دبي سبورتس سيتي", "متاح للبيع", "التسليم Q4 2028"],
    },

    intro: {
      title: "عيش. اشتغل. ازدهر — في مكان واحد",
      paragraphs: [
        "Aspirz من دانوب مشروع متعدد الاستخدامات في دبي سبورتس سيتي يجمع بين شقق فندقية قابلة للتحويل ومكاتب عصرية.",
        "مرافق عديدة وخدمات بنمط فندقي وتصميم يدعم نمط حياة مرن.",
        "خطة الدفع: 10% عند الحجز، 59% أثناء الإنشاء، 1% عند التسليم، و30% خلال 30 شهر بعد التسليم.",
      ],
      brochures: [
        {
          title: "تحميل البروشور (EN)",
          url: cdn("Aspirz_brochure_EN.pdf"),
          type: "main",
        },
        {
          title: "مخططات الشقق (PDF)",
          url: cdn("Aspirz_floor_plans_apartments_VER2.pdf"),
          type: "plans",
        },
        {
          title: "مخططات المكاتب (PDF)",
          url: cdn("Aspirz_floor_plans_offices_VER2.pdf"),
          type: "plans",
        },
        {
          title: "خريطة الموقع (PDF)",
          url: cdn("Location Map Aspirz.pdf"),
          type: "map",
        },
      ],
      imgUrl: cdn("Aspirz_BBQ.tif"),
      imgAlt: "Aspirz (BBQ)",
      floatingCards: [
        {
          top: "18%",
          right: "-26px",
          icon: "📍",
          value: "DSC",
          label: "دبي سبورتس سيتي",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "1%",
          label: "خطة سداد",
        },
        {
          bottom: "16%",
          right: "-26px",
          icon: "🗓️",
          value: "30 شهر",
          label: "بعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      projectTag: "Aspirz — دبي سبورتس سيتي",
      slides: [
        cdn("Hero shot1 day.jpg"),
        cdn("Heroshot1_ night 20000px (1).tif"),
        cdn("Heroshot2_ night 20000px 12th June Extended Version.tif"),
        cdn("Aspirz_Dropoff.tif"),
        cdn("Aspirz_Reception Lobby 1.tif"),
        cdn("Aspirz_Residential Lobby 1.tif"),
        cdn("Aspirz_Infinity Pool.tif"),
        cdn("Aspirz_Cinema.tif"),
        cdn("Aspirz_Indoor Gym.tif"),
        cdn("Aspirz_Padel.tif"),
        cdn("Kids Play area.jpg"),
      ],
    },

    floorPlans: {
      type: "مختلط الاستخدام",
      plans: [
        {
          id: "apt-studio",
          title: "استوديو (شقة فندقية)",
          specs: {
            "المساحة الإجمالية": "419.0 قدم مربع",
            "السعر الابتدائي": "895,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [FP.studio],
        },
        {
          id: "apt-1br",
          title: "غرفة واحدة (شقة فندقية)",
          specs: {
            "المساحة الإجمالية": "489.7 قدم مربع",
            "السعر الابتدائي": "1,432,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [FP.oneBr],
        },
        {
          id: "apt-1br-flex",
          title: "غرفة واحدة Flex (شقة فندقية)",
          specs: {
            "المساحة الإجمالية": "782.5 قدم مربع",
            "السعر الابتدائي": "1,950,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [FP.oneBrFlex],
        },
        {
          id: "apt-2br",
          title: "غرفتان (شقة فندقية)",
          specs: {
            "المساحة الإجمالية": "839.3 قدم مربع",
            "السعر الابتدائي": "1,763,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [FP.twoBr],
        },
        {
          id: "apt-2br-flex",
          title: "غرفتان Flex (شقة فندقية)",
          specs: {
            "المساحة الإجمالية": "897.6 قدم مربع",
            "السعر الابتدائي": "2,100,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [FP.twoBrFlex],
        },
        {
          id: "apt-3br-flex",
          title: "3 غرف Flex (شقة فندقية)",
          specs: {
            "المساحة الإجمالية": "1,247.3 قدم مربع",
            "السعر الابتدائي": "2,402,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [FP.threeBrFlex],
        },
      ],
      brochureHref: cdn("Aspirz_brochure_EN.pdf"),
      plansHrefApartments: cdn("Aspirz_floor_plans_apartments_VER2.pdf"),
      plansHrefOffices: cdn("Aspirz_floor_plans_offices_VER2.pdf"),
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح إنفينيتي", icon: "🏊", color: "#d7b46a" },
        { label: "سينما داخلية", icon: "🎬", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "ملعب بادل", icon: "🎾", color: "#d7b46a" },
        { label: "منطقة BBQ", icon: "🍖", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Aspirz",
      address: "دبي سبورتس سيتي، دبي، الإمارات العربية المتحدة",
      lat: 25.033,
      lng: 55.216,
      zoom: 12,
      proximityFeatures: [
        { icon: "🏟️", text: "ضمن دبي سبورتس سيتي" },
        { icon: "🛣️", text: "سهولة الوصول إلى الطرق الرئيسية" },
      ],
    },

    cta: {
      title: "مهتم بمشروع Aspirz؟",
      description: "أرسل بياناتك للحصول على التوافر والبروشور ومخططات المشروع.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل البروشور", action: "download-brochure" },
      ],
    },
  },
};
