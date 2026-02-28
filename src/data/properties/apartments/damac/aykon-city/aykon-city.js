// src/data/properties/apartments/damac/damac-aykon-city/damac-aykon-city.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses EXACT Bunny filenames you provided
// ✅ Strong, accurate project descriptions (based on public project/brochure info)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Location lat/lng taken from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-aykon-city";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const BROCHURE_PDF = cdn("AYKON HEIGHTS BROCHURE.pdf");
const FLOORPLAN_PDF = cdn("AYKON HEIGHTS FLOOR PLAN.pdf");

// ✅ Floor plan image (EXACT filename)
const STUDIO_PLAN_IMAGE = cdn("Damac Aykon City Studio floor plan .png");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("Aykon City Ext1.jpg"),
  cdn("Aykon City Int1.jpg"),
  cdn("Aykon City Int2.jpg"),
  cdn("AYKON City_1920x1080__1.png"),
  cdn("AYKON City_1920x1080__2.png"),
  cdn("AYKON City_1920x1080__3.png"),
  cdn("AYKON City_1920x1080__4.png"),
  cdn("AYKON City_1920x1080_5.png"),
];

export const damacAykonCityData = {
  en: {
    seo: {
      title: "DAMAC AYKON City | Studio Apartments in Business Bay, Dubai",
      description:
        "DAMAC AYKON City is a landmark multi-tower development on Sheikh Zayed Road near the Dubai Canal, offering studio residences designed for a connected Business Bay lifestyle.",
      keywords:
        "DAMAC AYKON City, Business Bay, Sheikh Zayed Road, Dubai Canal, studio apartment, AYKON Heights",
      canonical: "/properties/apartments/damac/aykon-city",
    },

    project: {
      name: "DAMAC AYKON City",
      developer: "DAMAC Properties",
      location: "Business Bay, Dubai, UAE",
      status: "Secondary",
      startingPrice: "AED 910,000",
      completionDate: "Ready",
      paymentPlan: "100%",
      type: "Apartments",
      units: "Studio",
    },

    hero: {
      backgroundUrl: cdn("Aykon City Ext1.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "A CANAL-SIDE ADDRESS WITH SHEIKH ZAYED ROAD CONNECTIVITY",
      paragraphs: [
        "DAMAC AYKON City is built around the idea of a self-contained urban destination—multiple towers connected by a shared podium with lifestyle, leisure, and everyday conveniences. The setting is designed for residents who want a central Dubai base without giving up comfort or amenities.",
        "Positioned by the Dubai Canal and directly linked to Sheikh Zayed Road, AYKON City provides practical access to Business Bay, Downtown Dubai, and the city’s main routes. This makes it a solid option for end-users and for investors targeting a well-known, highly connected district.",
        "Below you’ll find the official brochure, the floor plan PDF, a dedicated studio floor plan image, and the full project gallery—using your exact BunnyCDN filenames (no renaming).",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Download Floor Plans (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("Aykon City Int1.jpg"),
      imgAlt: "DAMAC AYKON City interior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 910,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "331.21 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "Business Bay",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "AYKON City Visuals",
      slides: GALLERY,
      projectTag: "DAMAC AYKON City",
    },

    // ✅ FloorPlans: ONLY the 4 fields you requested (with your Studio data)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "331.21 sq.ft",
            "Starting Price": "AED 910,000",
            Handover: "Ready",
            "Payment Plan": "Full Cash (Ready)",
          },
          images: [STUDIO_PLAN_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym & Fitness", icon: "💪", color: "#d7b46a" },
        { label: "Concierge-Style Living", icon: "🛎️", color: "#d7b46a" },
        { label: "Dining & Retail Nearby", icon: "🛍️", color: "#d7b46a" },
        { label: "Sheikh Zayed Road Access", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC AYKON City",
      address:
        "DAMAC Maison AYKON City Hotel Apartments, Business Bay, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.1801875,
      lng: 55.2528599,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "Business Bay lifestyle with quick access to central Dubai.",
        },
        { icon: "🌊", text: "Near the Dubai Canal waterfront environment." },
        { icon: "🚗", text: "Direct connectivity via Sheikh Zayed Road." },
      ],
    },

    cta: {
      title: "Interested in AYKON City?",
      description:
        "Share your details to receive the latest availability and full unit details for DAMAC AYKON City, including the official brochure and floor plans.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "داماك أيكون سيتي | استوديوهات في الخليج التجاري دبي",
      description:
        "داماك أيكون سيتي مشروع متعدد الأبراج على شارع الشيخ زايد وبالقرب من قناة دبي، يوفّر استوديوهات مناسبة لأسلوب حياة عملي في الخليج التجاري.",
      keywords:
        "داماك أيكون سيتي, الخليج التجاري, شارع الشيخ زايد, قناة دبي, استوديو, أيكون هايتس",
      canonical: "/properties/apartments/damac/aykon-city",
    },

    project: {
      name: "داماك أيكون سيتي",
      developer: "داماك العقارية",
      location: "الخليج التجاري، دبي، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "910,000 درهم",
      completionDate: "جاهز",
      paymentPlan: "100%",
      type: "شقق سكنية",
      units: "استوديو",
    },

    hero: {
      backgroundUrl: cdn("Aykon City Ext1.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "عنوان قريب من قناة دبي مع اتصال مباشر بشارع الشيخ زايد",
      paragraphs: [
        "يقدّم مشروع داماك أيكون سيتي مفهوم وجهة حضرية متكاملة—عدة أبراج متصلة بمنصة مشتركة تضم مرافق ترفيهية وخيارات حياة وخدمات يومية. الفكرة الأساسية هي الجمع بين الراحة والخدمات ضمن عنوان مركزي في دبي.",
        "الموقع بالقرب من قناة دبي وعلى شارع الشيخ زايد يمنح سهولة حركة ممتازة نحو الخليج التجاري ووسط دبي، مع اتصال سريع بالمحاور الرئيسية. هذا يجعله خيارًا عمليًا للسكن وكذلك للاستثمار في منطقة ذات طلب قوي.",
        "ستجد أدناه الكتيّب الرسمي وملف مخططات الطوابق (PDF) وصورة مخطط الاستوديو، بالإضافة إلى معرض الصور—وكل ذلك باستخدام أسماء ملفات BunnyCDN الخاصة بك كما هي تمامًا.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "تحميل مخططات الطوابق (PDF)",
          url: FLOORPLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: cdn("Aykon City Int1.jpg"),
      imgAlt: "داخلية داماك أيكون سيتي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "910,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "331.21 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "الخليج التجاري",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "داماك أيكون سيتي",
    },

    // ✅ نفس البنية + type="apartments" + مفاتيح عربية (وبنفس 4 حقول فقط)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "331.21 قدم مربع",
            "السعر الابتدائي": "910,000 درهم",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "دفع نقدي كامل (جاهز للتسليم)",
          },
          images: [STUDIO_PLAN_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLAN_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "خدمات وكونسيرج", icon: "🛎️", color: "#d7b46a" },
        { label: "قرب المطاعم والمتاجر", icon: "🛍️", color: "#d7b46a" },
        { label: "اتصال بشارع الشيخ زايد", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "داماك أيكون سيتي",
      address:
        "DAMAC Maison AYKON City Hotel Apartments، الخليج التجاري، دبي، الإمارات",
      lat: 25.1801875,
      lng: 55.2528599,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "ضمن الخليج التجاري مع وصول سريع لمركز دبي." },
        { icon: "🌊", text: "بالقرب من قناة دبي وأجواء الواجهة المائية." },
        { icon: "🚗", text: "اتصال مباشر عبر شارع الشيخ زايد." },
      ],
    },

    cta: {
      title: "مهتم بمشروع أيكون سيتي؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وتفاصيل الوحدة، مع روابط الكتيّب الرسمي ومخططات الطوابق لمشروع داماك أيكون سيتي.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacAykonCityData;
