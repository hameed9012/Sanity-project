// src/data/projects/offices/danube/shahrukhz/shahrukhz.js
// NOTE:
// ✅ All key facts below are taken from the official "SHARUKHZ Brochure - FINAL_17 NOV.pdf" you uploaded.
// ✅ All image/PDF URLs below use your Bunny folder + EXACT filenames from your screenshots.
// ⚠️ Starting price is NOT stated in the brochure → keep as "CHECK IN SALES SHEET" (price list can change).

const BASE = "https://luxury-real-estate-media.b-cdn.net/danube/shahkhruz";

export const shahrukhzDanubeData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "SHAHRUKHZ by Danube | Premium Offices on Sheikh Zayed Road Dubai | 55-Storey Commercial Tower",
      description:
        "SHAHRUKHZ by Danube is a premium 55-storey office tower on Sheikh Zayed Road, offering 35+ premium amenities, a 70/30 post-handover payment plan with 1% per month, and completion in Q2 2029.",
      keywords:
        "SHAHRUKHZ, Danube, Sheikh Zayed Road offices, Dubai commercial tower, premium offices Dubai, 55-storey office tower, 70/30 post handover, 1% per month, Q2 2029",
      canonical: "/projects/offices/danube/shahrukhz",
    },

    project: {
      name: "SHAHRUKHZ",
      developer: "Danube Group",
      location: "Sheikh Zayed Road, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "CHECK IN SALES SHEET",
      completionDate: "Q2 2029",
      type: "Premium Offices (Commercial Tower)",
      units: "Standard / Executive / Premium Offices",
      floors: "55-storey office tower",
      paymentPlan: "70/30 Post-Handover (1% per month)",
      highlights: [
        "35+ premium amenities",
        "Washroom on every floor",
        "13 high-speed lifts",
        "Shuttle to metro",
        "District cooling",
      ],
    },

    hero: {
      backgroundUrl: `${BASE}/01_Aerial%20Hero_Sunset_10k_.png`,
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png`,
      companyName: "DANUBE",
      rating: 4.8,
    },

    intro: {
      title: "Where Every Office Tells A Story Of Success",
      paragraphs: [
        "Rising on the iconic Sheikh Zayed Road, SHAHRUKHZ is a premium 55-storey office tower offering unmatched visibility and seamless access in the heart of Dubai.",
        "Designed for founders, leaders, and visionaries, it combines prestige, productivity, and wellbeing with 35+ premium amenities curated around you.",
        "A flexible 70/30 post-handover payment plan with 1% per month supports smart ownership, with completion targeted for Q2 2029.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: `${BASE}/SHARUKHZ%20Brochure%20-%20FINAL_17%20NOV.pdf`,
          type: "main",
          icon: "📘",
          color: "#0B3A53",
          size: "PDF",
          category: "Premium Offices",
          fileName: "SHARUKHZ Brochure - FINAL_17 NOV.pdf",
          description:
            "Official brochure covering concept, office types, amenities and project details.",
        },
      ],
      imgUrl: `${BASE}/10_Crown_Night.jpg`,
      imgAlt: "SHAHRUKHZ by Danube crown at night (render).",
      floatingCards: [
        {
          top: "18%",
          right: "-26px",
          icon: "🏙️",
          value: "SZR",
          label: "Address",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q2 2029",
          label: "Completion",
        },
        {
          bottom: "16%",
          right: "-26px",
          icon: "💳",
          value: "70/30",
          label: "Post-Handover",
        },
      ],
    },

    gallery: {
      title: "A Visual Showcase",
      slides: [
        // Exterior / Landmark
        `${BASE}/01_Aerial%20Hero_Sunset_10k_.png`,
        `${BASE}/03_EXT_Helipad%20Crown.jpg`,
        `${BASE}/04_EXT_Hanging.jpg`,
        `${BASE}/05_EXT_SkyPool.png`,
        `${BASE}/07_EXT_Balcony%202.png`,
        `${BASE}/09_EXT_Bottom%20Up.jpg`,
        `${BASE}/10_Crown_Night.jpg`,
        `${BASE}/magnifics_upscale-dHoQlQaY9nWCwHL8LGfb-u1259599713_a_grand_modern_business_center_in.jpg`,

        // Interiors
        `${BASE}/14_INT_Main%20Lobby_Ground%20floor.jpg`,
        `${BASE}/ENTRANCE%20LOBBY_5%20%281%29.png`,
        `${BASE}/16_INT_ClubHouse.png`,
        `${BASE}/17_INT_Lounge%2026.jpg`,
        `${BASE}/18_INT_Sky%20Meeting%20Room.jpg`,
        `${BASE}/19_INT_Office_Small.tif`,
        `${BASE}/21_INT_Office_Large%202.jpg`,
        `${BASE}/23_INT_Office_Premium.png`,
        `${BASE}/Iconz_Lounge_Cam2.jpg`,
        `${BASE}/Iconz_Lounge.jpg`,
        `${BASE}/Iconz_Pool_Cam1C%20%281%29.jpg`,

        // Amenities / Outdoors
        `${BASE}/27_AMN_Tranquility%20Garden.jpg`,
        `${BASE}/28_AMN_Tranquility%20Garden.jpg`,
        `${BASE}/29_AMN_Tranquility%20Garden.jpg`,
        `${BASE}/30_AMN_Sports%201.png`,
        `${BASE}/32_AMN_Sports%203.jpeg`,
        `${BASE}/33_AMN_High%20Performance%20Gym.jpg`,
        `${BASE}/34_AMN_Banquet%20Hall_Cinema.jpg`,
        `${BASE}/35_AMN_Banquet%20Hall_Cinema.jpg`,
      ],
      projectTag: "SHAHRUKHZ – Sheikh Zayed Road",
    },

    floorPlans: {
      type: "offices",
      plans: [
        {
          id: "standard",
          title: "Standard Office",
          specs: {
            "Size Range": "450 – 600 sq.f.",
            "Office Features": [
              "Manager’s Cabin",
              "13 – 15 Workstations",
              "Reception",
              "Visitor’s Zone",
              "Outdoor Seating",
            ],
          },
          images: [
            `${BASE}/19_INT_Office_Small.tif`,
            `${BASE}/18_INT_Sky%20Meeting%20Room.jpg`,
          ],
          features: [
            "Optimized for compact teams",
            "Professional reception + visitor zone",
            "Outdoor seating access (as shown)",
          ],
        },
        {
          id: "executive",
          title: "Executive Office",
          specs: {
            "Size Range": "650 – 800 sq.f.",
            "Office Features": [
              "Manager’s Cabin",
              "18 – 20 Workstations",
              "Meeting Room",
              "Reception",
              "Visitor’s Zone",
              "Restroom",
              "Outdoor Seating",
            ],
          },
          images: [
            `${BASE}/21_INT_Office_Large%202.jpg`,
            `${BASE}/17_INT_Lounge%2026.jpg`,
          ],
          features: [
            "Dedicated meeting room",
            "Built-in restroom (as listed)",
            "More workstations for scaling teams",
          ],
        },
        {
          id: "premium",
          title: "Premium Office",
          specs: {
            "Size Range": "1,200 – 1,500 sq.f.",
            "Office Features": [
              "Manager’s Cabin",
              "38 – 40 Workstations",
              "Meeting Room",
              "Reception",
              "Visitor’s Zone",
              "Restroom",
              "Outdoor Seating",
            ],
          },
          images: [
            `${BASE}/23_INT_Office_Premium.png`,
            `${BASE}/14_INT_Main%20Lobby_Ground%20floor.jpg`,
          ],
          features: [
            "Largest format for high-capacity teams",
            "Executive-ready layout with meeting + reception",
            "Premium fit-out visuals (as shown)",
          ],
        },
      ],
      brochureHref: `${BASE}/SHARUKHZ%20Brochure%20-%20FINAL_17%20NOV.pdf`,
    },

    amenities: {
      title: "35+ Premium Amenities",
      amenities: [
        { label: "SRK Selfie Point", icon: "📸", color: "#d7b46a" },
        { label: "Valet Parking", icon: "🅿️", color: "#d7b46a" },
        { label: "E-Scooter Parking / Station", icon: "🛴", color: "#d7b46a" },
        {
          label: "Electric Car Charging Stations",
          icon: "🔌",
          color: "#d7b46a",
        },
        { label: "Drone Docking Station", icon: "🛸", color: "#d7b46a" },
        { label: "Cricket Pitch", icon: "🏏", color: "#d7b46a" },
        { label: "Padel Court", icon: "🎾", color: "#d7b46a" },
        { label: "Badminton Court", icon: "🏸", color: "#d7b46a" },
        { label: "Jogging Track", icon: "🏃", color: "#d7b46a" },
        { label: "Networking Hub", icon: "🤝", color: "#d7b46a" },
        { label: "Podcast Studio", icon: "🎙️", color: "#d7b46a" },
        { label: "Zen Garden", icon: "🧘", color: "#d7b46a" },
        { label: "Tranquility Garden", icon: "🌿", color: "#d7b46a" },
        { label: "Urban Park", icon: "🏞️", color: "#d7b46a" },
        { label: "Sky Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Club House", icon: "🏛️", color: "#d7b46a" },
        { label: "Multipurpose Hall", icon: "🏟️", color: "#d7b46a" },
        { label: "Board Room", icon: "🗂️", color: "#d7b46a" },
        { label: "Meeting Room", icon: "🧑‍💼", color: "#d7b46a" },
        { label: "Male Prayer Hall", icon: "🕌", color: "#d7b46a" },
        { label: "Female Prayer Hall", icon: "🕌", color: "#d7b46a" },
        { label: "Lounge 33", icon: "🍸", color: "#d7b46a" },
        { label: "Lounge 55", icon: "🌃", color: "#d7b46a" },
        { label: "Helipad", icon: "🚁", color: "#d7b46a" },
      ],
      extraServices: [
        "Washroom on every floor",
        "13 high-speed lifts",
        "Shuttle to metro",
        "District cooling",
        "Ample car parking (waiting time less than 40 sec)",
      ],
    },

    location: {
      title: "Project Location",
      projectName: "SHAHRUKHZ – Sheikh Zayed Road, Dubai",
      address: "Sheikh Zayed Road, Dubai, United Arab Emirates",
      // ⚠️ Brochure does not provide an exact Google Maps pin.
      // Set exact coordinates once you confirm the precise plot/location.
      lat: 25.2048, // CHECK PIN
      lng: 55.2708, // CHECK PIN
      zoom: 12,
      proximityFeatures: [
        { icon: "🚇", text: "Shuttle to Metro (as listed)" },
        { icon: "🏙️", text: "Prime Sheikh Zayed Road visibility" },
        { icon: "🅿️", text: "Valet + ample car parking" },
      ],
    },

    nearbyAttractions: {
      title: "Close To Key Business Hubs",
      attractions: [
        {
          name: "DIFC",
          distance: "≈ 5–10 km",
          time: "≈ 10–20 min",
          icon: "🏦",
        },
        {
          name: "Downtown Dubai",
          distance: "≈ 8–12 km",
          time: "≈ 15–25 min",
          icon: "🏙️",
        },
        {
          name: "Dubai Marina",
          distance: "≈ 15–25 km",
          time: "≈ 20–35 min",
          icon: "⚓",
        },
        {
          name: "Dubai International Airport",
          distance: "≈ 10–15 km",
          time: "≈ 20–30 min",
          icon: "✈️",
        },
      ],
    },

    cta: {
      title: "Interested in SHAHRUKHZ?",
      description:
        "Share your details to receive availability, office options, and the official brochure for SHAHRUKHZ by Danube on Sheikh Zayed Road.",
      buttons: [
        { text: "Enquire Now", type: "primary", url: "/contact" },
        {
          text: "Download Brochure",
          type: "secondary",
          url: `${BASE}/SHARUKHZ%20Brochure%20-%20FINAL_17%20NOV.pdf`,
        },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title:
        "SHAHRUKHZ من دانوب | مكاتب فاخرة على شارع الشيخ زايد دبي | برج تجاري 55 طابقًا",
      description:
        "SHAHRUKHZ من دانوب برج مكاتب فاخر من 55 طابقًا على شارع الشيخ زايد، يضم أكثر من 35 مرفقًا، وخطة سداد 70/30 بعد التسليم بنسبة 1% شهريًا، مع موعد إنجاز Q2 2029.",
      keywords:
        "SHAHRUKHZ, دانوب, مكاتب شارع الشيخ زايد, برج تجاري دبي, مكاتب فاخرة دبي, 55 طابق, 70/30 بعد التسليم, 1% شهرياً, Q2 2029",
      canonical: "/projects/offices/danube/shahrukhz",
    },

    project: {
      name: "SHAHRUKHZ",
      developer: "مجموعة دانوب",
      location: "شارع الشيخ زايد، دبي، الإمارات العربية المتحدة",
      status: "على الخريطة (قيد الإنشاء)",
      startingPrice: "يُرجى التأكيد من ورقة الأسعار",
      completionDate: "الربع الثاني 2029 (Q2 2029)",
      type: "مكاتب فاخرة (برج تجاري)",
      units: "مكاتب Standard / Executive / Premium",
      floors: "برج مكاتب من 55 طابقًا",
      paymentPlan: "70/30 بعد التسليم (1% شهريًا)",
      highlights: [
        "أكثر من 35 مرفقًا",
        "دورة مياه في كل طابق",
        "13 مصعدًا سريعًا",
        "خدمة نقل إلى المترو",
        "تبريد مركزي (District Cooling)",
      ],
    },

    hero: {
      backgroundUrl: `${BASE}/01_Aerial%20Hero_Sunset_10k_.png`,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png",
      companyName: "DANUBE",
      rating: 4.8,
    },

    intro: {
      title: "حيث تروي كل مساحة عمل قصة نجاح",
      paragraphs: [
        "على شارع الشيخ زايد الأيقوني، يرتفع SHAHRUKHZ كبرج مكاتب فاخر من 55 طابقًا يمنح حضورًا بصريًا قويًا وسهولة وصول في قلب دبي.",
        "مُصمم لروّاد الأعمال والقادة، يجمع بين الهيبة والإنتاجية والرفاه، مع أكثر من 35 مرفقًا مميزًا.",
        "خطة سداد مرنة 70/30 بعد التسليم بنسبة 1% شهريًا، مع موعد إنجاز مستهدف في الربع الثاني 2029.",
      ],
      brochures: [
        {
          title: "تحميل البروشور",
          url: `${BASE}/SHARUKHZ%20Brochure%20-%20FINAL_17%20NOV.pdf`,
          type: "main",
          icon: "📘",
          color: "#0B3A53",
          size: "PDF",
          category: "مكاتب فاخرة",
          fileName: "SHARUKHZ Brochure - FINAL_17 NOV.pdf",
          description:
            "البروشور الرسمي للمشروع (التفاصيل + أنواع المكاتب + المرافق).",
        },
      ],
      imgUrl: `${BASE}/10_Crown_Night.jpg`,
      imgAlt: "إطلالة ليلية على تاج برج SHAHRUKHZ (تصميم).",
      floatingCards: [
        {
          top: "18%",
          right: "-26px",
          icon: "🏙️",
          value: "SZR",
          label: "شارع الشيخ زايد",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📅",
          value: "Q2 2029",
          label: "موعد الإنجاز",
        },
        {
          bottom: "16%",
          right: "-26px",
          icon: "💳",
          value: "70/30",
          label: "بعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: [
        `${BASE}/01_Aerial%20Hero_Sunset_10k_.png`,
        `${BASE}/03_EXT_Helipad%20Crown.jpg`,
        `${BASE}/04_EXT_Hanging.jpg`,
        `${BASE}/05_EXT_SkyPool.png`,
        `${BASE}/07_EXT_Balcony%202.png`,
        `${BASE}/09_EXT_Bottom%20Up.jpg`,
        `${BASE}/10_Crown_Night.jpg`,
        `${BASE}/magnifics_upscale-dHoQlQaY9nWCwHL8LGfb-u1259599713_a_grand_modern_business_center_in.jpg`,
        `${BASE}/14_INT_Main%20Lobby_Ground%20floor.jpg`,
        `${BASE}/ENTRANCE%20LOBBY_5%20%281%29.png`,
        `${BASE}/16_INT_ClubHouse.png`,
        `${BASE}/17_INT_Lounge%2026.jpg`,
        `${BASE}/18_INT_Sky%20Meeting%20Room.jpg`,
        `${BASE}/19_INT_Office_Small.tif`,
        `${BASE}/21_INT_Office_Large%202.jpg`,
        `${BASE}/23_INT_Office_Premium.png`,
        `${BASE}/Iconz_Lounge_Cam2.jpg`,
        `${BASE}/Iconz_Lounge.jpg`,
        `${BASE}/Iconz_Pool_Cam1C%20%281%29.jpg`,
        `${BASE}/27_AMN_Tranquility%20Garden.jpg`,
        `${BASE}/28_AMN_Tranquility%20Garden.jpg`,
        `${BASE}/29_AMN_Tranquility%20Garden.jpg`,
        `${BASE}/30_AMN_Sports%201.png`,
        `${BASE}/32_AMN_Sports%203.jpeg`,
        `${BASE}/33_AMN_High%20Performance%20Gym.jpg`,
        `${BASE}/34_AMN_Banquet%20Hall_Cinema.jpg`,
        `${BASE}/35_AMN_Banquet%20Hall_Cinema.jpg`,
      ],
      projectTag: "SHAHRUKHZ – شارع الشيخ زايد",
    },

    floorPlans: {
      type: "مكاتب",
      plans: [
        {
          id: "standard",
          title: "مكتب Standard",
          specs: {
            "نطاق المساحة": "450 – 600 قدم²",
            "مواصفات المكتب": [
              "غرفة مدير",
              "13 – 15 محطة عمل",
              "استقبال",
              "منطقة زوار",
              "جلسات خارجية",
            ],
          },
          images: [
            `${BASE}/19_INT_Office_Small.tif`,
            `${BASE}/18_INT_Sky%20Meeting%20Room.jpg`,
          ],
          features: [
            "مناسب لفرق العمل الصغيرة",
            "استقبال احترافي + منطقة زوار",
            "جلسات خارجية حسب التصميم المعروض",
          ],
        },
        {
          id: "executive",
          title: "مكتب Executive",
          specs: {
            "نطاق المساحة": "650 – 800 قدم²",
            "مواصفات المكتب": [
              "غرفة مدير",
              "18 – 20 محطة عمل",
              "غرفة اجتماعات",
              "استقبال",
              "منطقة زوار",
              "دورة مياه",
              "جلسات خارجية",
            ],
          },
          images: [
            `${BASE}/21_INT_Office_Large%202.jpg`,
            `${BASE}/17_INT_Lounge%2026.jpg`,
          ],
          features: [
            "غرفة اجتماعات مخصصة",
            "دورة مياه ضمن المواصفات",
            "سعة أكبر لفرق العمل",
          ],
        },
        {
          id: "premium",
          title: "مكتب Premium",
          specs: {
            "نطاق المساحة": "1,200 – 1,500 قدم²",
            "مواصفات المكتب": [
              "غرفة مدير",
              "38 – 40 محطة عمل",
              "غرفة اجتماعات",
              "استقبال",
              "منطقة زوار",
              "دورة مياه",
              "جلسات خارجية",
            ],
          },
          images: [
            `${BASE}/23_INT_Office_Premium.png`,
            `${BASE}/14_INT_Main%20Lobby_Ground%20floor.jpg`,
          ],
          features: [
            "أكبر مساحة لسعات تشغيل عالية",
            "تخطيط تنفيذي شامل",
            "مظهر فاخر حسب العرض",
          ],
        },
      ],
      brochureHref: `${BASE}/SHARUKHZ%20Brochure%20-%20FINAL_17%20NOV.pdf`,
    },

    amenities: {
      title: "أكثر من 35 مرفقًا مميزًا",
      amenities: [
        { label: "نقطة سيلفي SRK", icon: "📸", color: "#d7b46a" },
        { label: "مواقف فاليه", icon: "🅿️", color: "#d7b46a" },
        { label: "مواقف/محطة سكوتر كهربائي", icon: "🛴", color: "#d7b46a" },
        { label: "شحن سيارات كهربائية", icon: "🔌", color: "#d7b46a" },
        { label: "محطة رسو للطائرات بدون طيار", icon: "🛸", color: "#d7b46a" },
        { label: "ملعب كريكيت", icon: "🏏", color: "#d7b46a" },
        { label: "ملعب بادل", icon: "🎾", color: "#d7b46a" },
        { label: "ملعب بادمنتون", icon: "🏸", color: "#d7b46a" },
        { label: "مسار جري", icon: "🏃", color: "#d7b46a" },
        { label: "منصة تواصل (Networking Hub)", icon: "🤝", color: "#d7b46a" },
        { label: "استوديو بودكاست", icon: "🎙️", color: "#d7b46a" },
        { label: "حديقة Zen", icon: "🧘", color: "#d7b46a" },
        { label: "حديقة Tranquility", icon: "🌿", color: "#d7b46a" },
        { label: "منتزه حضري", icon: "🏞️", color: "#d7b46a" },
        { label: "مسبح سكاي", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "كلوب هاوس", icon: "🏛️", color: "#d7b46a" },
        { label: "قاعة متعددة الاستخدامات", icon: "🏟️", color: "#d7b46a" },
        { label: "غرفة مجلس (Board Room)", icon: "🗂️", color: "#d7b46a" },
        { label: "غرفة اجتماعات", icon: "🧑‍💼", color: "#d7b46a" },
        { label: "مصلى رجال", icon: "🕌", color: "#d7b46a" },
        { label: "مصلى سيدات", icon: "🕌", color: "#d7b46a" },
        { label: "لاونج 33", icon: "🍸", color: "#d7b46a" },
        { label: "لاونج 55", icon: "🌃", color: "#d7b46a" },
        { label: "مهبط طائرات", icon: "🚁", color: "#d7b46a" },
      ],
      extraServices: [
        "دورة مياه في كل طابق",
        "13 مصعدًا سريعًا",
        "خدمة نقل إلى المترو",
        "تبريد مركزي (District Cooling)",
        "مواقف واسعة (زمن انتظار أقل من 40 ثانية)",
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "SHAHRUKHZ – شارع الشيخ زايد، دبي",
      address: "شارع الشيخ زايد، دبي، الإمارات العربية المتحدة",
      lat: 25.2048, // CHECK PIN
      lng: 55.2708, // CHECK PIN
      zoom: 12,
      proximityFeatures: [
        { icon: "🚇", text: "خدمة نقل إلى المترو (حسب المذكور)" },
        { icon: "🏙️", text: "واجهة قوية على شارع الشيخ زايد" },
        { icon: "🅿️", text: "فاليه + مواقف واسعة" },
      ],
    },

    nearbyAttractions: {
      title: "قريب من أهم مناطق الأعمال",
      attractions: [
        {
          name: "DIFC",
          distance: "≈ 5–10 كم",
          time: "≈ 10–20 دقيقة",
          icon: "🏦",
        },
        {
          name: "داون تاون دبي",
          distance: "≈ 8–12 كم",
          time: "≈ 15–25 دقيقة",
          icon: "🏙️",
        },
        {
          name: "دبي مارينا",
          distance: "≈ 15–25 كم",
          time: "≈ 20–35 دقيقة",
          icon: "⚓",
        },
        {
          name: "مطار دبي الدولي",
          distance: "≈ 10–15 كم",
          time: "≈ 20–30 دقيقة",
          icon: "✈️",
        },
      ],
    },

    cta: {
      title: "مهتم بـ SHAHRUKHZ؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي، خيارات المكاتب، والبروشور الرسمي لمشروع SHAHRUKHZ من دانوب على شارع الشيخ زايد.",
      buttons: [
        { text: "استفسر الآن", type: "primary", url: "/contact" },
        {
          text: "تحميل البروشور",
          type: "secondary",
          url: `${BASE}/SHARUKHZ%20Brochure%20-%20FINAL_17%20NOV.pdf`,
        },
      ],
    },
  },
};
