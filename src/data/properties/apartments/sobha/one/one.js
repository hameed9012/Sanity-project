// src/data/properties/apartments/sobha/sobha-one.js
// ✅ Updated to match the SAME floorPlans blueprint contract as Azizi Milan:
// - floorPlans: { type, plans[], brochureHref }
// - plan: { id, title, bedrooms, specs{ Unit, ... }, images[], features[] }

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const SOBHA_ONE_DIR = "/sobha-one";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${SOBHA_ONE_DIR}/${encodeURIComponent(fileName)}`;

const BROCHURE_PDF = cdn("Sobha One Factbook (1).pdf");

// Floor plan images (keeping EXACT same URLs you already used)
const FP_1BR = cdn("1BR Soha One Floor Plan.png");
const FP_1_5BR = cdn("1.5 Link Apartment Sobha One Floor Plan.png");
const FP_2BR = cdn("2BR Sobha One Floor.png");
const FP_2BR_DUP = cdn("2BR Duplex Sobha one Floor Plan.png");
const FP_3BR = cdn("3BR Sobha One Floor Plan.png");
const FP_4BR = cdn("4BR Sobha One Floor Plan.png");
const FP_4BR_DUP = cdn("4BR Duples Sobha One Floor plan.png");

export const sobhaOneData = {
  // ========================
  // ENGLISH
  // ========================
  en: {
    seo: {
      title:
        "Sobha One | 1–4 Bedroom Apartments & 2–5 Bedroom Duplexes in Ras Al Khor, Dubai",
      description:
        "Sobha One is a masterfully planned residential community in Ras Al Khor, Dubai, offering 1–4 bedroom apartments and 2–5 bedroom duplexes with panoramic views over Dubai Creek, the Ras Al Khor Wildlife Sanctuary and Downtown Dubai, plus an 18-hole pitch & putt golf course and resort-style amenities.",
      keywords:
        "Sobha One, Sobha One Dubai, Sobha One apartments, Sobha One duplex, Ras Al Khor, Dubai Creek, wildlife sanctuary, golf course community, 1 bedroom, 2 bedroom, 3 bedroom, 4 bedroom, duplex, Sobha Realty",
      canonical: "/properties/apartments/sobha/sobha-one",
    },

    project: {
      name: "Sobha One",
      developer: "Sobha Realty",
      location: "Ras Al Khor Road, Dubai, UAE",
      status: "Secondary",

      startingPrice: "From ~AED 1.1M",
      completionDate: "Expected completion Q4 2026",
      paymentPlan: "60% / 40%",

      type: "Apartments & Duplexes",
      units: "1–4 bedroom apartments & 2–5 bedroom duplexes",
    },

    hero: {
      backgroundUrl: cdn("sobha-one.mp4"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/sobha-one.svg",
      companyName: "Sobha Realty",
      rating: 4.8,
    },

    intro: {
      title: "A Sophisticated Tapestry Across the Skyline",
      paragraphs: [
        "Nestled near Ras Al Khor Road, Sobha One is a serene retreat offering breathtaking views. Gaze north to see the tranquil Creek waters and the iconic Burj Khalifa, with Downtown to the west. Spanning over 1.5 million square feet, this development showcases lush golf courses and vibrant cityscapes, inviting you to experience its beauty from every angle.",
        "With five interconnected towers rising from 30 to 65 stories, Sobha One offers a range of luxurious living options, including 1 to 4-bedroom apartments and 3 to 4-bedroom duplexes, creating a harmonious blend of elegance and tranquillity.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📘",
          color: "#1A5F7A",
          size: "≈ 10–20 MB",
          category: "Apartments & Duplexes",
          fileName: "Sobha One Factbook.pdf",
          description:
            "Official Sobha One factbook with configuration, tower details, amenity plan and finishes.",
        },
      ],
      imgUrl: cdn("Side Shot - Dusk.jpg"),
      imgAlt:
        "Sobha One towers at dusk overlooking the golf course and Dubai Creek skyline.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌿",
          value: "Creek Views",
          label: "Ras Al Khor Sanctuary",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "⛳",
          value: "18-Hole",
          label: "Pitch & Putt Golf",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏙️",
          value: "10 mins",
          label: "Downtown Dubai",
        },
      ],
    },

    gallery: {
      title: "Life Overlooking Creek, Golf & Skyline",
      slides: [
        cdn("overview01.jpg"),
        cdn("SHOT-01-PP-PPTP.jpeg"),
        cdn("SHOT-02-PP-PPTP.jpeg"),
        cdn("SHOT-03-PP-PPTP.jpeg"),
        cdn("SHOT-05-PP-01-PPTP.jpeg"),
        cdn("SHOT-4-PP-PPTP.jpeg"),
        cdn("Side Shot - Dusk.jpg"),
        cdn("Balcony.jpg"),
        cdn("Dining room.jpg"),
      ],
      projectTag: "Sobha One – Ras Al Khor",
    },

    // ✅ Blueprint-compatible floorPlans
    floorPlans: {
      type: "apartments & duplexes",
      brochureHref: BROCHURE_PDF,
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM",
            "Total Area": "807.83 sq.ft",
            "Starting Price": "From AED 1,600,000",
            Handover: "Expected Q4 2026",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "1-5br-link",
          title: "1.5 Bedroom Apartment",
          bedrooms: 1.5,
          specs: {
            Unit: "1.5 BEDROOM (LINK)",
            "Total Area": "807.83 sq.ft",
            "Starting Price": "From AED 1,600,000",
            Handover: "Expected Q4 2026",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_1_5BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM",
            "Total Area": "1099.32 sq.ft",
            "Starting Price": "From AED 2,200,000",
            Handover: "Expected Q4 2026",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "2br-duplex",
          title: "2 Bedroom Duplex",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM DUPLEX",
            "Total Area": "2352.78 sq.ft",
            "Starting Price": "From AED 4,700,000",
            Handover: "Expected Q4 2026",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_2BR_DUP],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOM APARTMENT",
            "Total Area": "1917.11 sq.ft",
            "Starting Price": "From AED 3,900,000",
            Handover: "Expected Q4 2026",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom Apartment",
          bedrooms: 4,
          specs: {
            Unit: "4 BEDROOM APARTMENT",
            "Total Area": "2277.22 sq.ft",
            "Starting Price": "From AED 4,700,000",
            Handover: "Expected Q4 2026",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "4br-duplex",
          title: "4 Bedroom Duplex",
          bedrooms: 4,
          specs: {
            Unit: "4 BEDROOM DUPLEX",
            "Total Area": "2352.78 sq.ft",
            "Starting Price": "From AED 4,700,000",
            Handover: "Expected Q4 2026",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_4BR_DUP],
          features: ["—"],
        },
      ],
    },

    amenities: {
      title: "Resort-Like Amenities Across Courtyards & Sky Terrace",
      amenities: [
        {
          label: "18-HOLE PITCH & PUTT GOLF COURSE",
          icon: "⛳",
          color: "#d7b46a",
        },
        {
          label: "PANORAMIC CLUBHOUSE SKY TERRACE",
          icon: "🌇",
          color: "#d7b46a",
        },
        { label: "BBQ AREA & FAMILY PARK", icon: "🍖", color: "#d7b46a" },
        { label: "SKY GARDEN & OPEN LAWNS", icon: "🌿", color: "#d7b46a" },
        { label: "GIANT CHESS & PLAY EQUIPMENT", icon: "♟️", color: "#d7b46a" },
        { label: "TODDLER PLAY & KIDS’ SLIDES", icon: "👧", color: "#d7b46a" },
        { label: "AMPHITHEATRE & CINEMA SCREEN", icon: "🎬", color: "#d7b46a" },
        { label: "SENSORY & TRANQUIL GARDENS", icon: "🌺", color: "#d7b46a" },
        {
          label: "GROUP YOGA DECKS & NATURAL TRAILS",
          icon: "🧘",
          color: "#d7b46a",
        },
        { label: "FITNESS PODIUM & GYM", icon: "💪", color: "#d7b46a" },
        {
          label: "WELLNESS PARK & RUNNING CIRCUIT",
          icon: "🏃",
          color: "#d7b46a",
        },
        {
          label: "PING PONG, HANDBALL & TRAMPOLINE",
          icon: "🏓",
          color: "#d7b46a",
        },
        { label: "ADULT POOL & 25M LAP POOL", icon: "🏊", color: "#d7b46a" },
        {
          label: "POOL WITH BEACH EDGE & JACUZZI",
          icon: "🌊",
          color: "#d7b46a",
        },
        {
          label: "TODDLER POOL & WET BED LOUNGES",
          icon: "🛟",
          color: "#d7b46a",
        },
      ],
    },

    location: {
      title: "CREATED WHERE CITY MEETS CREEK",
      projectName: "Sobha One – Ras Al Khor, Dubai",
      address: "Ras Al Khor Road, overlooking Dubai Creek, Dubai, UAE",
      lat: 25.194,
      lng: 55.321,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🦩",
          text: "Overlooking Ras Al Khor Wildlife Sanctuary & Dubai Creek.",
        },
        {
          icon: "🏙️",
          text: "Panoramic views towards Downtown Dubai & Burj Khalifa.",
        },
        {
          icon: "🚇",
          text: "Easy access to Dubai Metro and major arterial roads.",
        },
        {
          icon: "✈️",
          text: "Short drive to Dubai International Airport and Business Bay.",
        },
      ],
    },

    nearbyAttractions: {
      title: "Connected to Dubai’s Key Destinations",
      attractions: [
        {
          name: "Ras Al Khor Wildlife Sanctuary",
          time: "5 minutes",
          icon: "🦩",
        },
        {
          name: "Downtown Dubai & Burj Khalifa",
          time: "10 minutes",
          icon: "🏙️",
        },
        { name: "The Dubai Mall", time: "15 minutes", icon: "🛍️" },
        { name: "Dubai Frame", time: "10 minutes", icon: "🖼️" },
        { name: "Dubai Opera", time: "12 minutes", icon: "🎭" },
        { name: "Business Bay", time: "15 minutes", icon: "🏢" },
        {
          name: "Dubai International Airport (DXB)",
          time: "15 minutes",
          icon: "✈️",
        },
        { name: "Palm Jumeirah", time: "25 minutes", icon: "🌴" },
      ],
    },

    cta: {
      title: "Interested in Sobha One?",
      description:
        "Share your details to receive updated availability, pricing and detailed floor plans for Sobha One’s apartments and duplexes in Ras Al Khor, Dubai.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factbook", action: "download-brochure" },
      ],
    },
  },

  // ========================
  // ARABIC
  // ========================
  ar: {
    seo: {
      title: "شوبا ون | شقق 1–4 غرف نوم ودوبلكس 2–5 غرف نوم في راس الخور، دبي",
      description:
        "شوبا ون هو مجتمع سكني متكامل في منطقة راس الخور بدبي، يضم شققاً من 1 إلى 4 غرف نوم ودوبلكس من 2 إلى 5 غرف نوم بإطلالات بانورامية على خور دبي، محمية راس الخور للأحياء البرية وداون تاون دبي، بالإضافة إلى ملعب غولف مكوّن من 18 حفرة ومرافق ترفيهية منتجعية.",
      keywords:
        "شوبا ون, شوبا ون دبي, شقق شوبا ون, دوبلكس شوبا ون, راس الخور, خور دبي, محمية راس الخور, ملعب غولف, شقة غرفة وصالة, شقة غرفتين, شقة ثلاث غرف, شقة أربع غرف, دوبلكس, شوبا العقارية",
      canonical: "/properties/apartments/sobha/sobha-one",
    },

    project: {
      name: "شوبا ون",
      developer: "شوبا العقارية",
      location: "شارع راس الخور، دبي، الإمارات العربية المتحدة",
      status: "ثانوي (إعادة بيع)",

      startingPrice: "الأسعار تبدأ من نحو 1.1 مليون درهم",
      completionDate: "التسليم المتوقع في الربع الرابع 2026",
      paymentPlan: "60% / 40%",

      type: "شقق ودوبلكس",
      units: "شقق 1–4 غرف نوم ودوبلكس 2–5 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("sobha-one.mp4"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/sobha-one.svg",
      companyName: "شوبا العقارية",
      rating: 4.8,
    },

    intro: {
      title: "حيث يلتقي أفق المدينة بهدوء الخور والغولف",
      paragraphs: [
        "شوبا ون هو مجتمع سكني بارز على الواجهة المائية في راس الخور، حيث تندمج المدينة مع الطبيعة في عنوان واحد. ترتفع خمس أبراج متدرجة الارتفاع بإطلالات مباشرة على خور دبي ومحمية راس الخور للأحياء البرية من جهة، وداون تاون دبي وبرج خليفة من الجهة الأخرى.",
        "يقدم المشروع شققاً من 1 إلى 4 غرف نوم ودوبلكس من 2 إلى 5 غرف نوم حول ملعب غولف عالمي مكوّن من 18 حفرة، مع تراس نادٍ بانورامي ومجموعة من الساحات والمرافق الترفيهية ذات الطابع الخاص. تم تصميم المخططات الداخلية بمساحات رحبة ونوافذ كبيرة وشرفات لربط حياتك اليومية بالمناظر الخضراء والمائية المحيطة.",
      ],
      brochures: [
        {
          title: "تحميل دليل شوبا ون",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📘",
          color: "#1A5F7A",
          size: "≈ 10–20 ميغابايت",
          category: "شقق ودوبلكس",
          fileName: "Sobha One Factbook.pdf",
          description:
            "الدليل الرسمي لمشروع شوبا ون يتضمن التكوين، تفاصيل الأبراج، المخططات والمرافق.",
        },
      ],
      imgUrl: cdn("Side Shot - Dusk.jpg"),
      imgAlt:
        "أبراج شوبا ون عند الغروب بإطلالات على ملعب الغولف وخور دبي وأفق المدينة.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌿",
          value: "إطلالات خضراء",
          label: "محمية راس الخور",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "⛳",
          value: "ملعب غولف",
          label: "18 حفرة أمام المشروع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏙️",
          value: "10 دقائق",
          label: "إلى داون تاون دبي",
        },
      ],
    },

    gallery: {
      title: "أسلوب حياة يطل على الخور والغولف وأفق دبي",
      slides: [
        cdn("overview01.jpg"),
        cdn("SHOT-01-PP-PPTP.jpeg"),
        cdn("SHOT-02-PP-PPTP.jpeg"),
        cdn("SHOT-03-PP-PPTP.jpeg"),
        cdn("SHOT-05-PP-01-PPTP.jpeg"),
        cdn("SHOT-4-PP-PPTP.jpeg"),
        cdn("Side Shot - Dusk.jpg"),
        cdn("Balcony.jpg"),
        cdn("Dining room.jpg"),
      ],
      projectTag: "شوبا ون – راس الخور",
    },

    // ✅ Blueprint-compatible floorPlans (AR)
    floorPlans: {
      type: "شقق ودوبلكس",
      brochureHref: BROCHURE_PDF,
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة نوم واحدة",
            "المساحة الإجمالية": "807.83 قدم²",
            "السعر المبدئي": "من 1,600,000 درهم",
            "موعد التسليم": "المتوقع الربع 4 2026",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "1-5br-link",
          title: "شقة 1.5 غرفة نوم (Link)",
          bedrooms: 1.5,
          specs: {
            "نوع الوحدة": "1.5 غرفة نوم (Link)",
            "المساحة الإجمالية": "807.83 قدم²",
            "السعر المبدئي": "من 1,600,000 درهم",
            "موعد التسليم": "المتوقع الربع 4 2026",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_1_5BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "غرفتي نوم",
            "المساحة الإجمالية": "1099.32 قدم²",
            "السعر المبدئي": "من 2,200,000 درهم",
            "موعد التسليم": "المتوقع الربع 4 2026",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "2br-duplex",
          title: "دوبلكس غرفتي نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "دوبلكس غرفتي نوم",
            "المساحة الإجمالية": "2352.78 قدم²",
            "السعر المبدئي": "من 4,700,000 درهم",
            "موعد التسليم": "المتوقع الربع 4 2026",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_2BR_DUP],
          features: ["—"],
        },
        {
          id: "3br",
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "شقة ثلاث غرف نوم",
            "المساحة الإجمالية": "1917.11 قدم²",
            "السعر المبدئي": "من 3,900,000 درهم",
            "موعد التسليم": "المتوقع الربع 4 2026",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "شقة أربع غرف نوم",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "شقة أربع غرف نوم",
            "المساحة الإجمالية": "2277.22 قدم²",
            "السعر المبدئي": "من 4,700,000 درهم",
            "موعد التسليم": "المتوقع الربع 4 2026",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "4br-duplex",
          title: "دوبلكس أربع غرف نوم",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "دوبلكس أربع غرف نوم",
            "المساحة الإجمالية": "2352.78 قدم²",
            "السعر المبدئي": "من 4,700,000 درهم",
            "موعد التسليم": "المتوقع الربع 4 2026",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_4BR_DUP],
          features: ["—"],
        },
      ],
    },

    amenities: {
      title: "مرافق منتجعية عبر الساحات والتراس السماوي",
      amenities: [
        {
          label: "ملعب غولف 18 حفرة (Pitch & Putt)",
          icon: "⛳",
          color: "#d7b46a",
        },
        {
          label: "تراس نادٍ بانورامي عبر الأبراج",
          icon: "🌇",
          color: "#d7b46a",
        },
        { label: "منطقة شواء وحديقة عائلية", icon: "🍖", color: "#d7b46a" },
        {
          label: "حدائق سماوية ومساحات عشبية مفتوحة",
          icon: "🌿",
          color: "#d7b46a",
        },
        { label: "شطرنج عملاق وألعاب خارجية", icon: "♟️", color: "#d7b46a" },
        {
          label: "منطقة لعب للأطفال ومزالق مائية",
          icon: "👧",
          color: "#d7b46a",
        },
        {
          label: "مسرح مفتوح وشاشة سينما خارجية",
          icon: "🎬",
          color: "#d7b46a",
        },
        {
          label: "حدائق حسّية ومسطحات مائية هادئة",
          icon: "🌺",
          color: "#d7b46a",
        },
        { label: "منصات لليوغا ومسارات طبيعية", icon: "🧘", color: "#d7b46a" },
        { label: "منصة لياقة ونادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "حديقة عافية ومسار جري", icon: "🏃", color: "#d7b46a" },
        {
          label: "طاولات تنس طاولة، كرة يد، ترامبولين",
          icon: "🏓",
          color: "#d7b46a",
        },
        {
          label: "مسبح للكبار ومسبح سباحة بطول 25 م",
          icon: "🏊",
          color: "#d7b46a",
        },
        { label: "مسبح بشاطئ رملي وجاكوزي", icon: "🌊", color: "#d7b46a" },
        {
          label: "مسبح للأطفال وكراسي استرخاء مغمورة بالماء",
          icon: "🛟",
          color: "#d7b46a",
        },
      ],
    },

    location: {
      title: "موقع يجمع بين قلب المدينة وهدوء الخور",
      projectName: "شوبا ون – راس الخور، دبي",
      address: "شارع راس الخور، مطل على خور دبي، دبي، الإمارات العربية المتحدة",
      lat: 25.194,
      lng: 55.321,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🦩",
          text: "إطلالات مباشرة على محمية راس الخور للأحياء البرية وخور دبي.",
        },
        { icon: "🏙️", text: "مناظر بانورامية نحو داون تاون دبي وبرج خليفة." },
        { icon: "🚇", text: "وصول سهل إلى المترو والطرق الرئيسية في دبي." },
        {
          icon: "✈️",
          text: "مسافة قصيرة بالسيارة إلى مطار دبي الدولي ومنطقة بزنس باي.",
        },
      ],
    },

    nearbyAttractions: {
      title: "مواقع رئيسية قريبة",
      attractions: [
        { name: "محمية راس الخور للأحياء البرية", time: "5 دقائق", icon: "🦩" },
        { name: "داون تاون دبي وبرج خليفة", time: "10 دقائق", icon: "🏙️" },
        { name: "دبي مول", time: "15 دقيقة", icon: "🛍️" },
        { name: "برواز دبي", time: "10 دقائق", icon: "🖼️" },
        { name: "أوبرا دبي", time: "12 دقيقة", icon: "🎭" },
        { name: "بزنس باي", time: "15 دقيقة", icon: "🏢" },
        { name: "مطار دبي الدولي", time: "15 دقيقة", icon: "✈️" },
        { name: "نخلة جميرا", time: "25 دقيقة", icon: "🌴" },
      ],
    },

    cta: {
      title: "مهتم بمشروع شوبا ون؟",
      description:
        "أرسل بياناتك للحصول على أحدث الأسعار والتوافر والمخططات التفصيلية لشقق ودوبلكس شوبا ون في راس الخور، دبي.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل دليل المشروع", action: "download-brochure" },
      ],
    },
  },
};
