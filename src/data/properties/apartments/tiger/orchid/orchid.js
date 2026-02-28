// src/data/properties/apartments/tiger/orchid/orchid.js

/**
 * ✅ Orchid Towers — Tiger Group (Ajman)
 * ✅ Fixes:
 * - CDN URLs: encode ONLY the filename (not the whole URL)
 * - Adds the ACTUAL floorplan PNG filenames exactly as in Bunny (case-sensitive)
 * - Uses the exact "structure" you asked for (Unit / Suite Range / Balcony / Total Range / Starting Price / Handover / Payment Plan)
 */

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "tiger/orchid";

/**
 * IMPORTANT:
 * We encode ONLY the filename so we don't accidentally encode base URL parts.
 * Works perfectly with spaces in Bunny filenames.
 */
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${encodeURI(fileName)}`;

export const orchidTigerData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title: "Orchid Towers by Tiger Group | Lagoon Community in Ajman",
      description:
        "Orchid Towers by Tiger Group in Ajman offers furnished studios and 1–3BR apartments plus duplexes, lagoon-front lifestyle amenities, and a flexible payment plan with post-handover options.",
      keywords:
        "Orchid Towers, Tiger Group, Ajman apartments, lagoon community Ajman, duplex Ajman, off plan Ajman, furnished apartments Ajman",
      canonical: "/properties/apartments/tiger/orchid",
    },

    project: {
      name: "Orchid Towers",
      developer: "Tiger Group",
      location: "Ajman, UAE",
      status: "Off-Plan",
      startingPrice: "AED 505,797",
      completionDate: "Q4 2028",
      paymentPlan:
        "On booking 20% / During construction 40% (Total during construction 60%) / Upon handover 10% / During 24 months post-handover 30%",
      unitTypes: ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "Duplex"],
      type: "Apartments",
    },

    hero: {
      backgroundUrl: cdn("lagoon.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png",
      companyName: "Tiger Group",
      rating: null,
    },

    intro: {
      title: "LAGOON-FRONT LIVING IN AJMAN",
      paragraphs: [
        "Orchid Towers introduces a modern lagoon-front community in Ajman with contemporary residences and a lifestyle-focused master plan.",
        "The project offers furnished studios and 1–3 bedroom apartments, along with duplex options, supported by a wide selection of amenities across the community.",
      ],
      brochures: [
        {
          title: "Download Brochure (PDF)",
          url: cdn(
            "Digital Brochure_Tiger Downtown_Tiger Properties 29.11 (compressed).pdf"
          ),
          type: "main",
        },
      ],
      imgUrl: cdn("Phase 1.jpg"),
      imgAlt: "Orchid Towers – Ajman",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "Ajman",
          label: "UAE",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q4 2028",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "60/10/30",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Orchid Visuals",
      slides: [
        cdn("BATH.jpg"),
        cdn("BATH 2.jpg"),
        cdn("BATH 3.jpg"),
        cdn("BATH 4.jpg"),
        cdn("BATH 5.jpg"),
        cdn("BATH 6.jpg"),
        cdn("Bathroom.jpg"),
        cdn("Bed 2.jpg"),
        cdn("BED 3.jpg"),
        cdn("DUPLEX 1.jpg"),
        cdn("Fountain.jpg"),
        cdn("Fountain 2.jpg"),
        cdn("Gym-2.jpg"),
        cdn("GYM.jpg"),
        cdn("Infinity POOL -1.jpg"),
        cdn("Kids Play Area.jpg"),
        cdn("Kids Play Area (2).jpg"),
        cdn("KITCHEN 1.jpg"),
        cdn("KITCHEN 2.jpg"),
        cdn("lagoon.jpg"),
        cdn("lagoon (2).jpg"),
        cdn("lagoon (3).jpg"),
        cdn("Living.jpg"),
        cdn("Living (2).jpg"),
        cdn("Living (3).jpg"),
        cdn("LIVING ROOM.jpg"),
        cdn("LIVING ROOM 2.jpg"),
        cdn("LIVING ROOM 3.jpg"),
        cdn("LOBBY 1.jpg"),
        cdn("LOBBY 2.jpg"),
        cdn("Multi-Purpose Dome.jpg"),
        cdn("Outdoor cinema.jpg"),
        cdn("Outdoor Gym.jpg"),
        cdn("PENTHOUSE 1.jpg"),
        cdn("PENTHOUSE LIVING ROOM 2.jpg"),
        cdn("Phase 1.jpg"),
        cdn("Phase 1 (2).jpg"),
        cdn("Phase 1 (3).jpg"),
        cdn("Phase 1 Amenities.jpg"),
        cdn("Sports Court.jpg"),
        cdn("Sports Court 3.jpg"),
        cdn("GOLD LOGO AJMAN.png"),
        cdn("WHITE LOGO AJMAN.png"),
      ],
      projectTag: "Orchid",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO RESIDENCE",
            "Suite Range": "420 SQ.FT.",
            Balcony: "85 SQ.FT.",
            "Total Range": "505 SQ.FT.",
            "Starting Price": "AED 505,797",
            Handover: "Q4 2028",
            "Payment Plan":
              "On booking 20% / During construction 40% (Total 60%) / Upon handover 10% / Post-handover 30% (24 months)",
          },
          images: [
            `https://luxury-real-estate-media.b-cdn.net/tiger/orchid/orchid%20towers%20studio%20Floor%20plan.png`,
          ],
          features: [
            "Fully furnished",
            "Lagoon lifestyle",
            "High rental potential",
          ],
        },

        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM RESIDENCE",
            "Suite Range": "474 SQ.FT.",
            Balcony: "267 SQ.FT.",
            "Total Range": "741 SQ.FT.",
            "Starting Price": "AED 659,024",
            Handover: "Q4 2028",
            "Payment Plan":
              "On booking 20% / During construction 40% (Total 60%) / Upon handover 10% / Post-handover 30% (24 months)",
          },
          images: [cdn("Orchid towers 1br floor plan.png")],
          features: [
            "Fully furnished",
            "Spacious balcony",
            "Community amenities",
          ],
        },

        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM RESIDENCE",
            "Suite Range": "687 SQ.FT.",
            Balcony: "237 SQ.FT.",
            "Total Range": "924 SQ.FT.",
            "Starting Price": "AED 1,021,691",
            Handover: "Q4 2028",
            "Payment Plan":
              "On booking 20% / During construction 40% (Total 60%) / Upon handover 10% / Post-handover 30% (24 months)",
          },
          images: [cdn("orchid towers 2br floor plan.png")],
          features: ["Fully furnished", "Family layout", "Lagoon community"],
        },

        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOM RESIDENCE",
            "Suite Range": "947 SQ.FT.",
            Balcony: "291 SQ.FT.",
            "Total Range": "1,238 SQ.FT.",
            "Starting Price": "AED 1,310,163",
            Handover: "Q4 2028",
            "Payment Plan":
              "On booking 20% / During construction 40% (Total 60%) / Upon handover 10% / Post-handover 30% (24 months)",
          },
          images: [cdn("orchid towers 3 br floor plan.png")],
          features: [
            "Fully furnished",
            "Large living space",
            "Premium community facilities",
          ],
        },

        {
          id: "2br-duplex",
          title: "2 Bedroom Duplex",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM DUPLEX",
            "Suite Range": "841 SQ.FT.",
            Balcony: "234 SQ.FT.",
            "Total Range": "1,075 SQ.FT.",
            "Starting Price": "Price on request",
            Handover: "Q4 2028",
            "Payment Plan":
              "On booking 20% / During construction 40% (Total 60%) / Upon handover 10% / Post-handover 30% (24 months)",
          },
          images: [cdn("orchid towers 2br dup floor plan.png")],
          features: ["Duplex layout", "More privacy", "Lagoon lifestyle"],
        },

        {
          id: "3br-duplex",
          title: "3 Bedroom Duplex",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOM DUPLEX",
            "Suite Range": "965 SQ.FT.",
            Balcony: "344 SQ.FT.",
            "Total Range": "1,309 SQ.FT.",
            "Starting Price": "Price on request",
            Handover: "Q4 2028",
            "Payment Plan":
              "On booking 20% / During construction 40% (Total 60%) / Upon handover 10% / Post-handover 30% (24 months)",
          },
          images: [cdn("orchid towers 3br dup floor plan.png")],
          features: [
            "Duplex layout",
            "Spacious balcony",
            "Premium living zones",
          ],
        },
      ],
      brochureHref: cdn(
        "Digital Brochure_Tiger Downtown_Tiger Properties 29.11 (compressed).pdf"
      ),
    },

    amenities: {
      title: "Lifestyle Amenities",
      amenities: [
        { label: "Lagoon Promenade", icon: "🌊", color: "#d7b46a" },
        { label: "Infinity Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Outdoor Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Kids Play Area", icon: "🧸", color: "#d7b46a" },
        { label: "Sports Courts", icon: "🏀", color: "#d7b46a" },
        { label: "BBQ Areas", icon: "🍖", color: "#d7b46a" },
        { label: "Steam & Sauna", icon: "🧖", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Orchid Towers",
      address: "Ajman, UAE",
      lat: 25.40328,
      lng: 55.52341,
      zoom: 12,
      proximityFeatures: [
        { icon: "🛣️", text: "Connected to major routes across the UAE" },
        { icon: "🏙️", text: "Master community lifestyle in Ajman" },
        { icon: "🌊", text: "Lagoon-front visuals and leisure zones" },
      ],
    },

    nearbyAttractions: {
      title: "Connectivity",
      attractions: [
        { name: "Ajman City", distance: null, time: null, icon: "📍" },
        { name: "Key Road Access", distance: null, time: null, icon: "🛣️" },
        { name: "Community Amenities", distance: null, time: null, icon: "🏙️" },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title: "أوركيد تاورز المرحلة الأولى من تايغر | مجتمع لاجون في عجمان",
      description:
        "أوركيد تاورز المرحلة الأولى من تايغر في عجمان يوفر شققاً مفروشة (استوديو إلى 3 غرف) بالإضافة إلى دوبلكس، مع مرافق أسلوب حياة على واجهة لاجون وخطة دفع مرنة مع ما بعد التسليم.",
      keywords:
        "أوركيد تاورز, تايغر جروب, شقق عجمان, مجتمع لاجون عجمان, دوبلكس عجمان, عقارات قيد التطوير عجمان, شقق مفروشة عجمان",
      canonical: "/properties/apartments/tiger/orchid",
    },

    project: {
      name: "Orchid Towers",
      developer: "تايغر جروب",
      location: "عجمان، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "505,797 درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan:
        "عند الحجز 20% / أثناء الإنشاء 40% (الإجمالي أثناء الإنشاء 60%) / عند التسليم 10% / خلال 24 شهر بعد التسليم 30%",
      unitTypes: ["استوديو", "غرفة نوم", "غرفتان", "3 غرف", "دوبلكس"],
      type: "شقق سكنية",
    },

    hero: {
      backgroundUrl: cdn("lagoon.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png",
      companyName: "تايغر جروب",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة على واجهة لاجون في عجمان",
      paragraphs: [
        "أوركيد تاورز المرحلة الأولى يقدم مجتمعاً حديثاً يطل على اللاجون في عجمان، بتصميم عصري ومرافق أسلوب حياة متكاملة.",
        "يتضمن المشروع شققاً مفروشة من الاستوديو حتى 3 غرف نوم، بالإضافة إلى خيارات الدوبلكس، مع مجموعة واسعة من المرافق داخل المجتمع.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب (PDF)",
          url: cdn(
            "Digital Brochure_Tiger Downtown_Tiger Properties 29.11 (compressed).pdf"
          ),
          type: "main",
        },
      ],
      imgUrl: cdn("Phase 1.jpg"),
      imgAlt: "أوركيد تاورز المرحلة الأولى – عجمان",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "عجمان",
          label: "الإمارات",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "الربع الرابع 2028",
          label: "التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "60/10/30",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: [
        cdn("BATH.jpg"),
        cdn("BATH 2.jpg"),
        cdn("BATH 3.jpg"),
        cdn("BATH 4.jpg"),
        cdn("BATH 5.jpg"),
        cdn("BATH 6.jpg"),
        cdn("Bathroom.jpg"),
        cdn("Bed 2.jpg"),
        cdn("BED 3.jpg"),
        cdn("DUPLEX 1.jpg"),
        cdn("Fountain.jpg"),
        cdn("Fountain 2.jpg"),
        cdn("Gym-2.jpg"),
        cdn("GYM.jpg"),
        cdn("Infinity POOL -1.jpg"),
        cdn("Kids Play Area.jpg"),
        cdn("Kids Play Area (2).jpg"),
        cdn("KITCHEN 1.jpg"),
        cdn("KITCHEN 2.jpg"),
        cdn("lagoon.jpg"),
        cdn("lagoon (2).jpg"),
        cdn("lagoon (3).jpg"),
        cdn("Living.jpg"),
        cdn("Living (2).jpg"),
        cdn("Living (3).jpg"),
        cdn("LIVING ROOM.jpg"),
        cdn("LIVING ROOM 2.jpg"),
        cdn("LIVING ROOM 3.jpg"),
        cdn("LOBBY 1.jpg"),
        cdn("LOBBY 2.jpg"),
        cdn("Multi-Purpose Dome.jpg"),
        cdn("Outdoor cinema.jpg"),
        cdn("Outdoor Gym.jpg"),
        cdn("PENTHOUSE 1.jpg"),
        cdn("PENTHOUSE LIVING ROOM 2.jpg"),
        cdn("Phase 1.jpg"),
        cdn("Phase 1 (2).jpg"),
        cdn("Phase 1 (3).jpg"),
        cdn("Phase 1 Amenities.jpg"),
        cdn("Sports Court.jpg"),
        cdn("Sports Court 3.jpg"),
        cdn("GOLD LOGO AJMAN.png"),
        cdn("WHITE LOGO AJMAN.png"),
      ],
      projectTag: "Orchid",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            الوحدة: "استوديو",
            "مساحة الشقة": "420 قدم²",
            الشرفة: "85 قدم²",
            "المساحة الإجمالية": "505 قدم²",
            "السعر الابتدائي": "505,797 درهم",
            التسليم: "الربع الرابع 2028",
            "خطة الدفع":
              "عند الحجز 20% / أثناء الإنشاء 40% (الإجمالي 60%) / عند التسليم 10% / خلال 24 شهر بعد التسليم 30%",
          },
          images: [
            `https://luxury-real-estate-media.b-cdn.net/tiger/orchid/orchid%20towers%20studio%20Floor%20plan.png`,
          ],
          features: ["مفروش بالكامل", "أسلوب حياة لاجون", "مناسب للاستثمار"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            الوحدة: "غرفة نوم واحدة",
            "مساحة الشقة": "474 قدم²",
            الشرفة: "267 قدم²",
            "المساحة الإجمالية": "741 قدم²",
            "السعر الابتدائي": "659,024 درهم",
            التسليم: "الربع الرابع 2028",
            "خطة الدفع":
              "عند الحجز 20% / أثناء الإنشاء 40% (الإجمالي 60%) / عند التسليم 10% / خلال 24 شهر بعد التسليم 30%",
          },
          images: [cdn("Orchid towers 1br floor plan.png")],
          features: ["مفروش بالكامل", "شرفة واسعة", "مرافق متكاملة"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            الوحدة: "غرفتان نوم",
            "مساحة الشقة": "687 قدم²",
            الشرفة: "237 قدم²",
            "المساحة الإجمالية": "924 قدم²",
            "السعر الابتدائي": "1,021,691 درهم",
            التسليم: "الربع الرابع 2028",
            "خطة الدفع":
              "عند الحجز 20% / أثناء الإنشاء 40% (الإجمالي 60%) / عند التسليم 10% / خلال 24 شهر بعد التسليم 30%",
          },
          images: [cdn("orchid towers 2br floor plan.png")],
          features: ["مفروش بالكامل", "مناسب للعائلات", "مستوى مرافق ممتاز"],
        },
        {
          id: "3br",
          title: "3 غرف نوم",
          bedrooms: 3,
          specs: {
            الوحدة: "3 غرف نوم",
            "مساحة الشقة": "947 قدم²",
            الشرفة: "291 قدم²",
            "المساحة الإجمالية": "1,238 قدم²",
            "السعر الابتدائي": "1,310,163 درهم",
            التسليم: "الربع الرابع 2028",
            "خطة الدفع":
              "عند الحجز 20% / أثناء الإنشاء 40% (الإجمالي 60%) / عند التسليم 10% / خلال 24 شهر بعد التسليم 30%",
          },
          images: [cdn("orchid towers 3 br floor plan.png")],
          features: ["مفروش بالكامل", "مساحات كبيرة", "أسلوب حياة راقٍ"],
        },
        {
          id: "2br-duplex",
          title: "دوبلكس غرفتين نوم",
          bedrooms: 2,
          specs: {
            الوحدة: "دوبلكس غرفتين نوم",
            "مساحة الشقة": "841 قدم²",
            الشرفة: "234 قدم²",
            "المساحة الإجمالية": "1,075 قدم²",
            "السعر الابتدائي": "عند الطلب",
            التسليم: "الربع الرابع 2028",
            "خطة الدفع":
              "عند الحجز 20% / أثناء الإنشاء 40% (الإجمالي 60%) / عند التسليم 10% / خلال 24 شهر بعد التسليم 30%",
          },
          images: [cdn("orchid towers 2br dup floor plan.png")],
          features: ["تصميم دوبلكس", "خصوصية أعلى", "أسلوب حياة لاجون"],
        },
        {
          id: "3br-duplex",
          title: "دوبلكس 3 غرف نوم",
          bedrooms: 3,
          specs: {
            الوحدة: "دوبلكس 3 غرف نوم",
            "مساحة الشقة": "965 قدم²",
            الشرفة: "344 قدم²",
            "المساحة الإجمالية": "1,309 قدم²",
            "السعر الابتدائي": "عند الطلب",
            التسليم: "الربع الرابع 2028",
            "خطة الدفع":
              "عند الحجز 20% / أثناء الإنشاء 40% (الإجمالي 60%) / عند التسليم 10% / خلال 24 شهر بعد التسليم 30%",
          },
          images: [cdn("orchid towers 3br dup floor plan.png")],
          features: ["تصميم دوبلكس", "شرفة واسعة", "تجربة سكنية مميزة"],
        },
      ],
      brochureHref: cdn(
        "Digital Brochure_Tiger Downtown_Tiger Properties 29.11 (compressed).pdf"
      ),
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "ممشى اللاجون", icon: "🌊", color: "#d7b46a" },
        { label: "مسبح إنفينيتي", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "سينما خارجية", icon: "🎬", color: "#d7b46a" },
        { label: "منطقة ألعاب أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "ملاعب رياضية", icon: "🏀", color: "#d7b46a" },
        { label: "مناطق BBQ", icon: "🍖", color: "#d7b46a" },
        { label: "ساونا وبخار", icon: "🧖", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Orchid Towers",
      address: "عجمان، الإمارات",
      lat: 25.40328,
      lng: 55.52341,
      zoom: 12,
      proximityFeatures: [
        { icon: "🛣️", text: "اتصال مريح بالطرق الرئيسية داخل الإمارات" },
        { icon: "🏙️", text: "مجتمع رئيسي متكامل في عجمان" },
        { icon: "🌊", text: "واجهات لاجون ومناطق ترفيهية" },
      ],
    },

    nearbyAttractions: {
      title: "سهولة الوصول",
      attractions: [
        { name: "مدينة عجمان", distance: null, time: null, icon: "📍" },
        {
          name: "محاور الطرق الرئيسية",
          distance: null,
          time: null,
          icon: "🛣️",
        },
        { name: "مرافق المجتمع", distance: null, time: null, icon: "🏙️" },
      ],
    },
  },
};
