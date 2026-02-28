// src/data/properties/apartments/damac/cavalli-couture/cavalli-couture.js
// ✅ FULL EN + AR
// ✅ VIDEO HERO
// ✅ Strict floorPlans (4 fields only)
// ✅ Uses ONLY uploaded Bunny CDN assets

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/cavalli-couture";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// PDFs / Video
const BROCHURE_PDF = cdn("COUTURE BY CAVALLI DIGITAL BROCHURE 27.02.24.pdf");
const FLOORPLAN_PDF = cdn("Couture_NEW_V4 Digital Floor plan.pdf");
const HERO_VIDEO = cdn("Couture by Cavalli - Super Luxury 16X9 EN.mp4");

// Floor plans
const FP_3BR = cdn("Cavalli Couture 3br floor plan.webp");
const FP_4BR = cdn("cavalli tower 4br floor plan.webp");
const FP_5BR = cdn("cavalli tower 3br floor plan.webp");

// Gallery
const GALLERY = [
  cdn("004_view from water_20240220.jpg"),
  cdn("010 canal bridge copy.jpg"),
  cdn("Top View.png"),
  cdn("Entrance.png"),
  cdn("Amenities -V01 beige.jpg"),
  cdn("Balcony Shot - 2024.02.20.jpg"),
  cdn("family living Opt 1.png"),
  cdn("Master bedroom.png"),
  cdn("Master Ensuite.png"),
  cdn("Master walkin wardrobe.png"),
  cdn("Cinema Room.png"),
  cdn("Office.png"),
  cdn("Outdoor (2).png"),
  cdn("V03.jpg"),
  cdn("V1 copy.jpg"),
];

export const cavalliCoutureData = {
  en: {
    seo: {
      title:
        "Cavalli Couture by DAMAC | Ultra-Luxury Residences Overlooking Safa Park & Dubai Canal",
      description:
        "Cavalli Couture by DAMAC is an ultra-luxury branded residential tower set directly on the Dubai Water Canal beside Safa Park, offering rare 3, 4 & 5 bedroom residences.",
      keywords:
        "Cavalli Couture, DAMAC, Safa Park, Dubai Canal, luxury apartments",
      canonical: "/properties/apartments/damac/cavalli-couture",
    },

    project: {
      name: "Cavalli Couture",
      developer: "DAMAC Properties",
      location: "Safa Park, Dubai Water Canal, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 21,904,000",
      completionDate: "Q2 2027",
      paymentPlan: "60/40",
      type: "Ultra-Luxury Apartments",
      units: "3, 4 & 5 Bedroom",
    },

    hero: {
      mediaType: "video",
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "COUTURE-LEVEL WATERFRONT LIVING",
      paragraphs: [
        "Cavalli Couture by DAMAC occupies one of the most exclusive and irreplaceable plots along the Dubai Water Canal, directly adjacent to Safa Park. This is a true ultra-luxury address designed for buyers who value rarity, scale, and architectural distinction.",
        "Branded by Roberto Cavalli, the tower merges high-fashion aesthetics with bold architectural expression. Residences feature expansive layouts, dramatic interiors, and uninterrupted views of Safa Park, the Dubai Canal, and the city skyline.",
        "With limited inventory and large-format residences, Cavalli Couture is positioned for ultra-high-net-worth end users and long-term investors seeking prestige, location dominance, and capital preservation.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Download Floor Plans (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("Entrance.png"),
      imgAlt: "Cavalli Couture entrance",
      floatingCards: [
        { icon: "💰", value: "AED 21.9M", label: "Starting Price" },
        { icon: "🌳", value: "Safa Park", label: "Park Views" },
        { icon: "🌊", value: "Dubai Canal", label: "Waterfront" },
      ],
    },

    gallery: {
      title: "Cavalli Couture Visuals",
      slides: GALLERY,
      projectTag: "Cavalli Couture",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "3989.97 sq.ft",
            "Starting Price": "AED 21,904,000",
            Handover: "Q2 2027",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "5149.35 sq.ft",
            "Starting Price": "AED 27,643,000",
            Handover: "Q2 2027",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br",
          title: "5 Bedroom",
          bedrooms: 5,
          specs: {
            "Total Area": "7601.15 sq.ft",
            "Starting Price": "AED 41,345,000",
            Handover: "Q2 2027",
            "Payment Plan": "60% / 40%",
          },
          images: [FP_5BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Private Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Cinema Room", icon: "🎬", color: "#d7b46a" },
        { label: "Luxury Spa", icon: "🧘", color: "#d7b46a" },
        { label: "Designer Interiors", icon: "✨", color: "#d7b46a" },
        { label: "Canal & Park Views", icon: "🌊", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Cavalli Couture",
      address: "Dubai Water Canal, Safa Park, Dubai, UAE",
      lat: 25.1832551,
      lng: 55.2613716,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌳", text: "Directly overlooking Safa Park." },
        { icon: "🌊", text: "Front-row canal position." },
        { icon: "🏙️", text: "Minutes from Downtown Dubai." },
      ],
    },

    cta: {
      title: "Own a Cavalli-Branded Residence",
      description:
        "Register to receive availability, pricing guidance, and private access to Cavalli Couture by DAMAC.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "كافالي كوتور من داماك | شقق فاخرة بإطلالة على قناة دبي وحديقة الصفا",
      description:
        "كافالي كوتور من داماك مشروع سكني فائق الفخامة بعلامة روبيرتو كافالي، يقع مباشرة على قناة دبي وبجوار حديقة الصفا.",
      keywords: "كافالي كوتور، داماك، حديقة الصفا، قناة دبي",
      canonical: "/properties/apartments/damac/cavalli-couture",
    },

    project: {
      name: "كافالي كوتور",
      developer: "داماك العقارية",
      location: "حديقة الصفا، قناة دبي المائية، دبي",
      status: "على المخطط",
      startingPrice: "21,904,000 درهم",
      completionDate: "الربع الثاني 2027",
      paymentPlan: "60/40",
      type: "شقق فائقة الفخامة",
      units: "3 و4 و5 غرف نوم",
    },

    hero: {
      mediaType: "video",
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة كوتور على الواجهة المائية",
      paragraphs: [
        "يقع مشروع كافالي كوتور من داماك في أحد أندر المواقع على قناة دبي المائية وبجوار حديقة الصفا، ليقدم مستوى استثنائيًا من الفخامة والخصوصية.",
        "التصميم مستوحى من هوية روبيرتو كافالي الجريئة، مع مساحات واسعة وإطلالات مباشرة على القناة والحديقة وأفق دبي.",
        "المشروع موجه لأصحاب الذوق الرفيع الباحثين عن التفرد والقيمة طويلة الأمد في أحد أقوى المواقع الاستثمارية في دبي.",
      ],
      brochures: [
        { title: "تحميل الكتيب", url: BROCHURE_PDF, type: "main" },
        {
          title: "تحميل مخططات الطوابق",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("Entrance.png"),
      imgAlt: "مدخل كافالي كوتور",
      floatingCards: [
        { icon: "💰", value: "21.9 مليون درهم", label: "السعر يبدأ من" },
        { icon: "🌳", value: "حديقة الصفا", label: "إطلالة مباشرة" },
        { icon: "🌊", value: "قناة دبي", label: "واجهة مائية" },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "كافالي كوتور",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "3br",
          title: "3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "3989.97 قدم²",
            "السعر الابتدائي": "21,904,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "5149.35 قدم²",
            "السعر الابتدائي": "27,643,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br",
          title: "5 غرف نوم",
          bedrooms: 5,
          specs: {
            "إجمالي المساحة": "7601.15 قدم²",
            "السعر الابتدائي": "41,345,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "60% / 40%",
          },
          images: [FP_5BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسابح خاصة", icon: "🏊", color: "#d7b46a" },
        { label: "سينما منزلية", icon: "🎬", color: "#d7b46a" },
        { label: "سبا فاخر", icon: "🧘", color: "#d7b46a" },
        { label: "تصميم كافالي", icon: "✨", color: "#d7b46a" },
        { label: "إطلالات القناة", icon: "🌊", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كافالي كوتور",
      address: "قناة دبي المائية، حديقة الصفا، دبي",
      lat: 25.1832551,
      lng: 55.2613716,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌳", text: "بجوار حديقة الصفا مباشرة." },
        { icon: "🌊", text: "واجهة مباشرة على قناة دبي." },
        { icon: "🏙️", text: "قريب من وسط دبي." },
      ],
    },

    cta: {
      title: "امتلك وحدة بعلامة كافالي",
      description:
        "سجل اهتمامك الآن للحصول على التوافر والأسعار الخاصة لمشروع كافالي كوتور من داماك.",
      buttons: [
        { label: "اطلب استشارة", action: "enquire" },
        { label: "تحميل الكتيب", action: "download-brochure" },
      ],
    },
  },
};

export default cavalliCoutureData;
