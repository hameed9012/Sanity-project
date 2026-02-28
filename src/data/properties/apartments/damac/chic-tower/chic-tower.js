// src/data/properties/apartments/damac/damac-chic-tower/damac-chic-tower.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses EXACT Bunny filenames you listed (ignores .DS_Store)
// ✅ Same blueprint you approved (EN + AR)
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Floorplan image uses EXACT filename: "Chic Tower 1br floor plan.webp"
// ✅ Location lat/lng taken from your Google Maps pin
// ✅ FloorPlans specs filled with your provided 1BR numbers (AED 2,976,000 | 40/60 | Q4 2026 | 932.69 sq.ft)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-chic-tower";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const BROCHURE_PDF = cdn("ENG CHIC TOWER DIGITAL BROCHURE (3).pdf");
const PAYMENT_PLAN_JPG = cdn("11.10.22 CHIC TOWER PAYMENT PLAN .jpg");
const PAYMENT_PLAN_PDF = cdn("11.10.22 CHIC TOWER PAYMENT PLAN .pdf");

// ✅ Floor plan image (EXACT filename)
const FP_1BR = cdn("Chic Tower 1br floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("RENDERS.jpg"),
  cdn("RENDERS2.jpg"),
  cdn("RENDERS3.jpg"),
  cdn("RENDERS4.jpg"),
  cdn("RENDERS5.jpg"),
  cdn("RENDERS6.jpg"),
  cdn("RENDERS7.jpg"),
  cdn("RENDERS8.jpg"),
  cdn("RENDERS9.jpg"),
  cdn("RENDERS10.jpg"),
  cdn("RENDERS11.jpg"),
  cdn("RENDERS12.jpg"),
  cdn("RENDERS13.jpg"),
  cdn("RENDERS14.jpg"),
  cdn("RENDERS15.jpg"),
  cdn("RENDERS16.jpg"),
  cdn("RENDERS17.jpg"),
  cdn("RENDERS18.jpg"),
  cdn("RENDERS19.jpg"),
  cdn("RENDERS20.jpg"),
  cdn("RENDERS21.jpg"),
  cdn("RENDERS22.jpg"),
  cdn("RENDERS23.jpg"),
  cdn("RENDERS24.jpg"),
  cdn("RENDERS25.jpg"),
];

export const damacChicTowerData = {
  en: {
    seo: {
      title:
        "Chic Tower by DAMAC & de GRISOGONO | 1BR Apartments in Business Bay, Dubai Canal",
      description:
        "Chic Tower by DAMAC in collaboration with de GRISOGONO is a Dubai Canal-front residence in Business Bay, built around a holistic, wellness-inspired lifestyle with premium design and central connectivity.",
      keywords:
        "Chic Tower, DAMAC, de GRISOGONO, Business Bay, Dubai Canal, 1BR apartment, Q4 2026, 40/60 payment plan",
      canonical: "/properties/apartments/damac/chic-tower",
    },

    project: {
      name: "Chic Tower",
      developer: "DAMAC Properties",
      location: "Business Bay (Dubai Canal), Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,976,000",
      completionDate: "Q4 2026",
      paymentPlan: "40/60",
      type: "Apartments",
      units: "1 Bedroom",
    },

    hero: {
      // No video provided — we use a strong hero render
      backgroundUrl: cdn("RENDERS14.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "A WELLNESS-LED ADDRESS ON THE DUBAI CANAL",
      paragraphs: [
        "Chic Tower is a Dubai Canal-front residence in Business Bay, created by DAMAC in collaboration with de GRISOGONO. The concept is built around a lifestyle that feels more resort than routine—where design, water views, and wellness-driven experiences come together in a highly central address.",
        "Business Bay is one of Dubai’s most practical districts for daily life and investment demand: close to Downtown Dubai, well-connected to key road corridors, and consistently sought after by residents who want city access without compromising on lifestyle. The Dubai Canal setting adds a calmer waterfront dimension while keeping you minutes from the city’s major anchors.",
        "Below you’ll find the official project brochure, the payment plan documents, your exact 1-bedroom floor plan image, and the full visual gallery—linked using your BunnyCDN filenames exactly as uploaded so the page works 100% without manual fixes.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Payment Plan (PDF)",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
        {
          title: "Payment Plan (JPG)",
          url: PAYMENT_PLAN_JPG,
          type: "secondary",
        },
      ],
      imgUrl: cdn("RENDERS12.jpg"),
      imgAlt: "Chic Tower exterior render",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,976,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "932.69 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Dubai Canal",
          label: "Waterfront",
        },
      ],
    },

    gallery: {
      title: "Chic Tower Visuals",
      slides: GALLERY,
      projectTag: "Chic Tower",
    },

    // ✅ FloorPlans: ONLY the 4 fields you agreed on (filled with your 1BR data)
    // ✅ Payment Plan formatted like your example: "40% / 60%"
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "932.69 sq.ft",
            "Starting Price": "AED 2,976,000",
            Handover: "Q4 2026",
            "Payment Plan": "40% / 60%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Dubai Canal Waterfront", icon: "🌊", color: "#d7b46a" },
        { label: "Wellness-Led Lifestyle", icon: "🧖", color: "#d7b46a" },
        { label: "Premium Lobby Experience", icon: "🏢", color: "#d7b46a" },
        { label: "Fitness & Active Living", icon: "💪", color: "#d7b46a" },
        { label: "Central City Connectivity", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Chic Tower",
      address: "CHIC TOWER de GRISOGONO, Business Bay, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.1832551,
      lng: 55.2613716,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "Business Bay address with strong central demand.",
        },
        { icon: "🌊", text: "Front-row Dubai Canal lifestyle and views." },
        {
          icon: "🚗",
          text: "Fast access to key hubs and main road corridors.",
        },
      ],
    },

    cta: {
      title: "Interested in Chic Tower?",
      description:
        "Share your details to receive availability, unit options, and the official documents for Chic Tower by DAMAC & de GRISOGONO.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "تشيك تاور من داماك ودي غريسوغونو | شقق غرفة نوم واحدة في الخليج التجاري على قناة دبي",
      description:
        "تشيك تاور من داماك بالتعاون مع دي غريسوغونو مشروع سكني على واجهة قناة دبي في الخليج التجاري، بأسلوب حياة فاخر مستوحى من العافية وتصميم راقٍ واتصال قوي بقلب المدينة.",
      keywords:
        "تشيك تاور, داماك, دي غريسوغونو, الخليج التجاري, قناة دبي, شقة غرفة نوم, Q4 2026, 40/60",
      canonical: "/properties/apartments/damac/chic-tower",
    },

    project: {
      name: "تشيك تاور",
      developer: "داماك العقارية",
      location: "الخليج التجاري (قناة دبي)، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "2,976,000 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: "40/60",
      type: "شقق سكنية",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: cdn("RENDERS14.jpg"),
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "عنوان فاخر على قناة دبي بطابع مستوحى من العافية",
      paragraphs: [
        "يقدّم مشروع تشيك تاور عنوانًا سكنيًا على واجهة قناة دبي في الخليج التجاري، من تطوير داماك وبالتعاون مع دي غريسوغونو. الفكرة الأساسية تجمع بين إطلالة الماء والطابع العصري الفاخر وتجربة سكنية تمنح إحساسًا أقرب للمنتجع من الروتين اليومي.",
        "الخليج التجاري من أكثر مناطق دبي عمليةً وطلبًا، لقربه من وسط دبي وسهولة الوصول للمحاور الرئيسية. ومع موقعه على قناة دبي، يضيف المشروع بُعدًا هادئًا وأنيقًا للمعيشة دون الابتعاد عن قلب المدينة ومراكز الأعمال.",
        "ستجد أدناه الكتيّب الرسمي وملفات خطة الدفع، وصورة مخطط غرفة النوم الواحدة، بالإضافة إلى معرض الصور الكامل—وجميع الروابط مبنية على أسماء ملفات BunnyCDN الخاصة بك كما هي لضمان عمل الصفحة 100% دون أي تعديلات يدوية.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "خطة الدفع (PDF)", url: PAYMENT_PLAN_PDF, type: "secondary" },
        { title: "خطة الدفع (JPG)", url: PAYMENT_PLAN_JPG, type: "secondary" },
      ],
      imgUrl: cdn("RENDERS12.jpg"),
      imgAlt: "تصوّر خارجي لتشيك تاور",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,976,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "932.69 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "قناة دبي",
          label: "واجهة مائية",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "تشيك تاور",
    },

    // ✅ AR FloorPlans: same structure + type="apartments" + Arabic keys (4 fields only)
    // ✅ Payment Plan formatted like your example: "40% / 60%"
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "932.69 قدم مربع",
            "السعر الابتدائي": "2,976,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
            "خطة الدفع": "40% / 60%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "واجهة قناة دبي", icon: "🌊", color: "#d7b46a" },
        { label: "أسلوب حياة مستوحى من العافية", icon: "🧖", color: "#d7b46a" },
        { label: "لوبي فاخر", icon: "🏢", color: "#d7b46a" },
        { label: "لياقة ونشاط", icon: "💪", color: "#d7b46a" },
        { label: "سهولة التنقل", icon: "🛣️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "تشيك تاور",
      address: "CHIC TOWER de GRISOGONO، الخليج التجاري، دبي، الإمارات",
      lat: 25.1832551,
      lng: 55.2613716,
      zoom: 17,
      proximityFeatures: [
        { icon: "🏙️", text: "عنوان ضمن الخليج التجاري بقيمة طلب قوية." },
        { icon: "🌊", text: "واجهة قناة دبي وإطلالات مميزة." },
        { icon: "🚗", text: "وصول سريع للوجهات الرئيسية ومحاور الطرق." },
      ],
    },

    cta: {
      title: "مهتم بمشروع تشيك تاور؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر وخيارات الوحدات والوثائق الرسمية لمشروع تشيك تاور من داماك ودي غريسوغونو.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacChicTowerData;
