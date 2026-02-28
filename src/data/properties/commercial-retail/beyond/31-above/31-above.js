// src/data/projects/commercial-retail/beyond/31-above/31-above.js
// NOTE (ACCURACY):
// ✅ Project name + location: brochure cover you provided
// ✅ Payment plan + handover (Q1 2029): payment-plan.pdf you provided
// ✅ Slides: ALL filenames visible in your Bunny screenshots (31-beyond folder)
// ✅ Layout areas: EXACT values you pasted (Floor 02 overall + Quarter/Half/Full/Double with breakdown)
// ⚠️ Starting price not stated in provided files → kept as "CHECK IN SALES SHEET"

const BASE = "https://luxury-real-estate-media.b-cdn.net/beyond/31-beyond";

export const beyond31AboveData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "31 Above by BEYOND | Premium Offices & Retail in Dubai Maritime City",
      description:
        "31 Above by BEYOND in Dubai Maritime City offers premium office spaces with sea-facing lifestyle amenities, business lounges, meeting rooms, fitness and wellness facilities, and curated retail at podium level. Handover Q1 2029.",
      keywords:
        "31 Above, 31 Above by Beyond, Beyond developer Dubai, Dubai Maritime City offices, Dubai office tower, premium offices Dubai, retail podium Dubai, business centre Dubai",
      canonical: "/properties/commercial-retail/beyond/31-above",
    },

    project: {
      name: "31 Above",
      developer: "BEYOND",
      location: "Dubai Maritime City, Dubai",
      status: "Off-Plan",
      startingPrice: "CHECK IN SALES SHEET",
      completionDate: "Q1 2029",
      type: "Commercial",
      units: "Office & Retail",
    },

    hero: {
      backgroundUrl: `${BASE}/Hero%20Shot_Day_Aerial.jpg`,
      squareImageUrl: `${BASE}/31%20Above_Logo-01.png`,
      companyName: "BEYOND",
      rating: 4.7, // UI-only
    },

    intro: {
      title: "WHERE BUSINESS MEETS THE WATERFRONT",
      paragraphs: [
        "31 Above by BEYOND rises in Dubai Maritime City with a business-first mindset and a waterfront setting. The project is designed around premium office environments supported by curated lifestyle and wellness spaces.",
        "From dedicated business lounges and meeting areas to fitness, yoga and terrace experiences — 31 Above brings a modern workday rhythm into one destination, complemented by podium retail and connectivity across Dubai.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: `${BASE}/31-above-brochure.pdf`,
          type: "main",
        },
        {
          title: "Download Floor Plans",
          url: `${BASE}/31-above-floor-plans.pdf`,
          type: "floorplans",
        },
        {
          title: "Payment Plan",
          url: `${BASE}/payment-plan.pdf`,
          type: "payment-plan",
        },
      ],
      imgUrl: `${BASE}/Facade_Stacking.jpg`,
      imgAlt: "31 Above by BEYOND exterior facade",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌊",
          value: "Waterfront",
          label: "Dubai Maritime City",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🏢",
          value: "Offices",
          label: "Business Destination",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "Q1 2029",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "A Visual Tour",
      slides: [
        // --- HERO / EXTERIORS ---
        `${BASE}/Hero%20Shot_Day_01.jpg`,
        `${BASE}/Hero%20Shot_Day_02.jpg`,
        `${BASE}/Hero%20Shot_Day_Aerial.jpg`,
        `${BASE}/Hero%20Shot_Night_01.jpg`,
        `${BASE}/Hero%20Shot_Night_02.jpg`,
        `${BASE}/Hero%20Shot_Street%20View.jpg`,
        `${BASE}/Facade_Stacking.jpg`,
        `${BASE}/Drop%20Off_Day.jpg`,
        `${BASE}/Drop%20Off_Night.jpg`,

        // --- LOBBY / OFFICES ---
        `${BASE}/Main%20Lobby%20Entrance.jpg`,
        `${BASE}/Main%20Lobby%20Entrance_02.jpg`,
        `${BASE}/Office%20Entrance_01.jpg`,
        `${BASE}/Office%20Entrance_02.jpg`,
        `${BASE}/Office%20Reception.jpg`,
        `${BASE}/Office%20Workspaces.jpg`,
        `${BASE}/Executive%20Office.jpg`,
        `${BASE}/Executive%20Office_Lounge%20and%20Meeting.jpg`,
        `${BASE}/Meeting%20Room.jpg`,

        // --- BUSINESS CENTRE ---
        `${BASE}/Business%20Centre_Lounge.jpg`,
        `${BASE}/Business%20Centre_Meeting%20room.jpg`,
        `${BASE}/Business%20Centre_Multipurpose.jpg`,
        `${BASE}/Board%20Room.jpg`,

        // --- WELLNESS / AMENITIES ---
        `${BASE}/Fitness%20Studio_Gym.jpg`,
        `${BASE}/Yoga-Pilates_Indoor%20Studio.jpg`,
        `${BASE}/Outdoor%20Yoga.jpg`,
        `${BASE}/Outdoor%20Meeting%20Pods.jpg`,
        `${BASE}/Terrace_Sea%20View.jpg`,
        `${BASE}/Terrace_Skyline%20View.jpg`,

        // --- PODIUM / CONNECTIVITY ---
        `${BASE}/Podium%20Deck.jpg`,
        `${BASE}/Podium%20Deck_Aerial%20Shot.jpg`,
        `${BASE}/Podium_Aerial%20Shot_Day.jpg`,
        `${BASE}/Podium%20Connectivity_Sea%20View.jpg`,

        // --- RETAIL ---
        `${BASE}/Retail%2001.jpg`,
        `${BASE}/Retail%2002.jpg`,
        `${BASE}/Retail%2002_closeup.jpg`,
        `${BASE}/Retail%2002_dining.jpg`,
        `${BASE}/Retail_Outdoor%20Deck.jpg`,
      ],
      projectTag: "31 Above",
    },

    // ========= FLOOR PLANS / LAYOUTS (100% FROM YOUR VALUES) =========
    floorPlans: {
      type: "commercial",
      plans: [
        {
          id: "floor-02-overall",
          title: "Floor 02 – Overall Area",
          specs: {
            "Total Area": "11,587 sq.ft",
            "Starting Price": "AED 58,500,000",
            Handover: "Q4 2028",
            "Payment Plan": "60% / 40%",
          },
          images: [`${BASE}/floor%202%2031%20above.png`],
        },
        {
          id: "quarter-floor",
          title: "Quarter Floor – Office Layout",
          specs: {
            "Total Area": "1,675 sq.ft",
            "Starting Price": "AED 8,500,000",
            Handover: "Q4 2028",
            "Payment Plan": "60% / 40%",
          },
          images: [`${BASE}/Quater%20floor%2031%20above.png`],
        },
        {
          id: "half-floor",
          title: "Half Floor – Office Layout",
          specs: {
            "Total Area": "3,175 sq.ft",
            "Starting Price": "AED 16,000,000",
            Handover: "Q4 2028",
            "Payment Plan": "60% / 40%",
          },
          images: [`${BASE}/Half%20Floor%2031%20above.png`],
        },
        {
          id: "full-floor",
          title: "Full Floor – Office Layout",
          specs: {
            "Total Area": "4,715 sq.ft",
            "Starting Price": "AED 23,800,000",
            Handover: "Q4 2028",
            "Payment Plan": "60% / 40%",
          },
          images: [`${BASE}/Full%20Floor%2031%20above.png`],
        },
        {
          id: "double-floor",
          title: "Double Floor – Office Layout",
          specs: {
            "Total Area": "10,962 sq.ft",
            "Starting Price": "AED 55,300,000",
            Handover: "Q4 2028",
            "Payment Plan": "60% / 40%",
          },
          images: [`${BASE}/Double%20Floor%2031%20above.png`],
        },
      ],
      brochureHref: `${BASE}/31-above-floor-plans.pdf`,
    },

    amenities: {
      title: "Amenities & Facilities",
      amenities: [
        { label: "BUSINESS LOUNGE", icon: "💼", color: "#d7b46a" },
        { label: "BOARD ROOM", icon: "🪑", color: "#d7b46a" },
        { label: "MEETING ROOMS", icon: "🗣️", color: "#d7b46a" },
        { label: "MULTIPURPOSE SPACE", icon: "🧩", color: "#d7b46a" },
        { label: "FITNESS STUDIO / GYM", icon: "🏋️", color: "#d7b46a" },
        { label: "YOGA (INDOOR)", icon: "🧘", color: "#d7b46a" },
        { label: "YOGA (OUTDOOR)", icon: "🌿", color: "#d7b46a" },
        { label: "TERRACES (SEA / SKYLINE)", icon: "🌊", color: "#d7b46a" },
        { label: "PODIUM DECK", icon: "🏙️", color: "#d7b46a" },
        { label: "PODIUM RETAIL", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "31 Above",
      address: "Dubai Maritime City, Dubai, UAE",
      lat: null,
      lng: null,
      zoom: 15,
      proximityFeatures: [
        { icon: "🌊", text: "Waterfront setting in Dubai Maritime City" },
        { icon: "🏢", text: "Designed for premium office use" },
      ],
    },

    nearbyAttractions: {
      title: "Nearby",
      attractions: [
        { name: "Dubai Maritime City", distance: "-", time: "-", icon: "🌊" },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title:
        "31 Above من BEYOND | مكاتب ومساحات تجارية مميزة في مدينة دبي الملاحية",
      description:
        "مشروع 31 Above من BEYOND في مدينة دبي الملاحية يقدّم مكاتب مميزة مع مرافق أعمال ومساحات لياقة وعافية وتراسات بإطلالات بحرية، بالإضافة إلى ريتيل على مستوى البوديوم. التسليم الربع الأول 2029.",
      keywords:
        "31 Above، بيوند دبي، مدينة دبي الملاحية، مكاتب دبي، ريتيل دبي، مشروع بيوند",
      canonical: "/properties/commercial-retail/beyond/31-above",
    },

    project: {
      name: "31 Above",
      developer: "BEYOND",
      location: "مدينة دبي الملاحية، دبي",
      status: "قيد الإنشاء",
      startingPrice: "يُرجى التأكيد من ورقة الأسعار",
      completionDate: "الربع الأول 2029",
      type: "تجاري",
      units: "مكاتب وريتيل",
    },

    hero: {
      backgroundUrl: `${BASE}/Hero%20Shot_Day_Aerial.jpg`,
      squareImageUrl: `${BASE}/31%20Above_Logo-01.png`,
      companyName: "BEYOND",
      rating: 4.7, // UI-only
    },

    intro: {
      title: "حيث يلتقي العمل بإطلالات الواجهة البحرية",
      paragraphs: [
        "يرتفع مشروع 31 Above من BEYOND في مدينة دبي الملاحية ليقدّم وجهة عمل حديثة ضمن بيئة بحرية. يركّز المشروع على مساحات مكتبية مميزة مدعومة بمرافق أعمال وتجارب عافية مختارة.",
        "من لاونجات الأعمال وغرف الاجتماعات إلى مرافق اللياقة واليوغا والتراسات بإطلالات مفتوحة — يجمع 31 Above بين إيقاع يوم العمل والمعيشة على الواجهة البحرية، مع ريتيل على مستوى البوديوم.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: `${BASE}/31-above-brochure.pdf`,
          type: "main",
        },
        {
          title: "تحميل المخططات",
          url: `${BASE}/31-above-floor-plans.pdf`,
          type: "floorplans",
        },
        {
          title: "خطة الدفع",
          url: `${BASE}/payment-plan.pdf`,
          type: "payment-plan",
        },
      ],
      imgUrl: `${BASE}/Facade_Stacking.jpg`,
      imgAlt: "واجهة مشروع 31 Above من BEYOND",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌊",
          value: "واجهة بحرية",
          label: "مدينة دبي الملاحية",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🏢",
          value: "مكاتب",
          label: "وجهة أعمال",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "Q1 2029",
          label: "التسليم",
        },
      ],
    },

    gallery: {
      title: "جولة بصرية",
      slides: [
        `${BASE}/Hero%20Shot_Day_01.jpg`,
        `${BASE}/Hero%20Shot_Day_02.jpg`,
        `${BASE}/Hero%20Shot_Day_Aerial.jpg`,
        `${BASE}/Hero%20Shot_Night_01.jpg`,
        `${BASE}/Hero%20Shot_Night_02.jpg`,
        `${BASE}/Hero%20Shot_Street%20View.jpg`,
        `${BASE}/Facade_Stacking.jpg`,
        `${BASE}/Drop%20Off_Day.jpg`,
        `${BASE}/Drop%20Off_Night.jpg`,
        `${BASE}/Main%20Lobby%20Entrance.jpg`,
        `${BASE}/Main%20Lobby%20Entrance_02.jpg`,
        `${BASE}/Office%20Entrance_01.jpg`,
        `${BASE}/Office%20Entrance_02.jpg`,
        `${BASE}/Office%20Reception.jpg`,
        `${BASE}/Office%20Workspaces.jpg`,
        `${BASE}/Executive%20Office.jpg`,
        `${BASE}/Executive%20Office_Lounge%20and%20Meeting.jpg`,
        `${BASE}/Meeting%20Room.jpg`,
        `${BASE}/Business%20Centre_Lounge.jpg`,
        `${BASE}/Business%20Centre_Meeting%20room.jpg`,
        `${BASE}/Business%20Centre_Multipurpose.jpg`,
        `${BASE}/Board%20Room.jpg`,
        `${BASE}/Fitness%20Studio_Gym.jpg`,
        `${BASE}/Yoga-Pilates_Indoor%20Studio.jpg`,
        `${BASE}/Outdoor%20Yoga.jpg`,
        `${BASE}/Outdoor%20Meeting%20Pods.jpg`,
        `${BASE}/Terrace_Sea%20View.jpg`,
        `${BASE}/Terrace_Skyline%20View.jpg`,
        `${BASE}/Podium%20Deck.jpg`,
        `${BASE}/Podium%20Deck_Aerial%20Shot.jpg`,
        `${BASE}/Podium_Aerial%20Shot_Day.jpg`,
        `${BASE}/Podium%20Connectivity_Sea%20View.jpg`,
        `${BASE}/Retail%2001.jpg`,
        `${BASE}/Retail%2002.jpg`,
        `${BASE}/Retail%2002_closeup.jpg`,
        `${BASE}/Retail%2002_dining.jpg`,
        `${BASE}/Retail_Outdoor%20Deck.jpg`,
      ],
      projectTag: "31 Above",
    },

    // ========= FLOOR PLANS / LAYOUTS (AR — SAME VALUES) =========
    floorPlans: {
      type: "تجاري",
      plans: [
        {
          id: "floor-02-overall",
          title: "الطابق 02 – إجمالي المساحات",
          specs: {
            "المساحة الإجمالية": "11,587 قدم مربع",
            "السعر الابتدائي": "58,500,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٦٠٪ / ٤٠٪",
          },
          images: [`${BASE}/floor%202%2031%20above.png`],
        },
        {
          id: "quarter-floor",
          title: "ربع طابق – مخطط مكتب",
          specs: {
            "المساحة الإجمالية": "1,675 قدم مربع",
            "السعر الابتدائي": "8,500,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٦٠٪ / ٤٠٪",
          },
          images: [`${BASE}/Quater%20floor%2031%20above.png`],
        },
        {
          id: "half-floor",
          title: "نصف طابق – مخطط مكتب",
          specs: {
            "المساحة الإجمالية": "3,175 قدم مربع",
            "السعر الابتدائي": "16,000,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٦٠٪ / ٤٠٪",
          },
          images: [`${BASE}/Half%20Floor%2031%20above.png`],
        },
        {
          id: "full-floor",
          title: "طابق كامل – مخطط مكتب",
          specs: {
            "المساحة الإجمالية": "4,715 قدم مربع",
            "السعر الابتدائي": "23,800,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٦٠٪ / ٤٠٪",
          },
          images: [`${BASE}/Full%20Floor%2031%20above.png`],
        },
        {
          id: "double-floor",
          title: "طابقان (دوبلكس) – مخطط مكتب",
          specs: {
            "المساحة الإجمالية": "10,962 قدم مربع",
            "السعر الابتدائي": "55,300,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة السداد": "٦٠٪ / ٤٠٪",
          },
          images: [`${BASE}/Double%20Floor%2031%20above.png`],
        },
      ],
      brochureHref: `${BASE}/31-above-floor-plans.pdf`,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "لاونج أعمال", icon: "💼", color: "#d7b46a" },
        { label: "قاعة مجلس", icon: "🪑", color: "#d7b46a" },
        { label: "غرف اجتماعات", icon: "🗣️", color: "#d7b46a" },
        { label: "مساحة متعددة الاستخدام", icon: "🧩", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "يوغا داخلية", icon: "🧘", color: "#d7b46a" },
        { label: "يوغا خارجية", icon: "🌿", color: "#d7b46a" },
        {
          label: "تراسات بإطلالات بحرية/أفق المدينة",
          icon: "🌊",
          color: "#d7b46a",
        },
        { label: "بوديوم ديك", icon: "🏙️", color: "#d7b46a" },
        { label: "ريتيل على البوديوم", icon: "🛍️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "31 Above",
      address: "مدينة دبي الملاحية، دبي، الإمارات العربية المتحدة",
      lat: null,
      lng: null,
      zoom: 15,
      proximityFeatures: [
        { icon: "🌊", text: "موقع على الواجهة البحرية في مدينة دبي الملاحية" },
        { icon: "🏢", text: "مصمم لمساحات مكتبية مميزة" },
      ],
    },

    nearbyAttractions: {
      title: "بالقرب من",
      attractions: [
        { name: "مدينة دبي الملاحية", distance: "-", time: "-", icon: "🌊" },
      ],
    },
  },
};
