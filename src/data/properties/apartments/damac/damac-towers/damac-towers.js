// src/data/properties/apartments/damac/damac-towers-by-paramount/damac-towers-by-paramount.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ FULL EN + AR (same blueprint you approved)
// ✅ Uses ONLY your uploaded Bunny filenames (ignores .DS_Store)
// ✅ FloorPlans = 4 fields ONLY (Total Area / Starting Price / Handover / Payment Plan)
// ✅ Floorplan image uses EXACT filename: "paramount 1br floor plan.webp"
// ✅ Location lat/lng taken from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-towers";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main PDF (EXACT filename)
const BROCHURE_PDF = cdn(
  "DAMAC Towers by Para HR brochure online AND print Dec 2018 AK.pdf",
);

// ✅ Floor plan image (EXACT filename)
const FP_1BR = cdn("paramount 1br floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("DT-PARAMOUNT-TOWER.png"),
  cdn("DT-PARAMOUNT-IIMG-01.png"),
  cdn("DT-PARAMOUNT-IMG-02.png"),
  cdn("DT-PARAMOUNT-IMG-03.png"),
  cdn("DT-PARAMOUNT-IMG-04.png"),
  cdn("DT-PARAMOUNT-IMG-05.png"),
  cdn("DT-PARAMOUNT-IMG4.png"),

  cdn("DAMAC Towers by Paramount Hotels & Resorts Dubai Ext1.jpg"),
  cdn("DAMAC Towers by Paramount Hotels & Resorts Dubai Ext2.jpg"),
  cdn("DAMAC Towers by Paramount Hotels & Resorts Dubai Int1.jpg"),
  cdn("DAMAC Towers by Paramount Hotels & Resorts Dubai Int2.jpg"),
];

export const damacTowersByParamountData = {
  en: {
    seo: {
      title:
        "DAMAC Towers by Paramount | Ready 1BR Residence in Business Bay (Dubai)",
      description:
        "DAMAC Towers by Paramount is a Hollywood-inspired, ready residential address in Business Bay, combining prime Dubai Canal connectivity with hotel-style living. Explore the 1-bedroom layout, visuals, and official brochure.",
      keywords:
        "DAMAC Towers by Paramount, Business Bay, ready apartment, 1 bedroom, Paramount, Dubai, DAMAC",
      canonical: "/properties/apartments/damac/damac-towers",
    },

    project: {
      name: "DAMAC Towers by Paramount",
      developer: "DAMAC Properties",
      location: "Business Bay, Dubai, UAE",
      status: "Secondary",
      startingPrice: "AED 1,980,000",
      completionDate: "Ready",
      paymentPlan: "100%",
      type: "Apartments / Hotel-Style Residences",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: `https://luxury-real-estate-media.b-cdn.net/damac/damac-towers/DAMAC%20Towers%20by%20Paramount%20Hotels%20%26%20Resorts%20Dubai%20Int2.jpg`,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "HOLLYWOOD-INSPIRED LIVING IN THE HEART OF BUSINESS BAY",
      paragraphs: [
        "DAMAC Towers by Paramount is a distinctive ready development in Business Bay that blends branded, hospitality-led living with one of Dubai’s strongest central addresses. Positioned close to the Dubai Canal corridor, it offers fast access to Downtown Dubai, DIFC, and key road links—making it practical for both end-users and long-term rental demand.",
        "The concept is built around premium lifestyle delivery: dramatic arrival spaces, hotel-style amenities, and interiors designed to feel elevated and “service-ready.” For buyers who prioritize a ready product in a prime district, this stands out as a recognizable landmark with a strong identity and central convenience.",
        "Below you’ll find the official brochure, a dedicated 1-bedroom floor plan image, and the full gallery—linked using your exact BunnyCDN filenames to ensure perfect rendering on your website.",
      ],
      brochures: [
        { title: "Download Brochure (PDF)", url: BROCHURE_PDF, type: "main" },
      ],
      imgUrl: cdn("DAMAC Towers by Paramount Hotels & Resorts Dubai Ext1.jpg"),
      imgAlt: "DAMAC Towers by Paramount exterior",
      floatingCards: [
        { icon: "💰", value: "AED 1,980,000", label: "Starting Price" },
        { icon: "📐", value: "928.93 sq.ft", label: "Total Area" },
        { icon: "✅", value: "Ready", label: "Status" },
      ],
    },

    gallery: {
      title: "DAMAC Towers by Paramount Visuals",
      slides: GALLERY,
      projectTag: "DAMAC Towers by Paramount",
    },

    // ✅ FloorPlans: ONLY the 4 fields you agreed on
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "928.93 sq.ft",
            "Starting Price": "AED 1,980,000",
            Handover: "Ready",
            "Payment Plan": "100%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Hotel-Style Living", icon: "🏨", color: "#d7b46a" },
        { label: "Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Gym & Fitness", icon: "💪", color: "#d7b46a" },
        { label: "Premium Lobby Experience", icon: "🏢", color: "#d7b46a" },
        { label: "Central Business Bay Address", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC Towers by Paramount",
      address: "DAMAC Towers by Paramount, Business Bay, Dubai, UAE",
      // ✅ from your Google Maps pin
      lat: 25.1864318,
      lng: 55.2920591,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "Business Bay connectivity with strong city access.",
        },
        {
          icon: "🌊",
          text: "Near the Dubai Canal corridor and lifestyle zones.",
        },
        {
          icon: "🚗",
          text: "Convenient routes towards Downtown and key highways.",
        },
      ],
    },

    cta: {
      title: "Interested in DAMAC Towers by Paramount?",
      description:
        "Send your details to receive unit availability, pricing guidance, and the official brochure for DAMAC Towers by Paramount.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "أبراج داماك من باراماونت | شقة غرفة نوم جاهزة في الخليج التجاري",
      description:
        "أبراج داماك من باراماونت مشروع سكني جاهز بطابع فندقي في الخليج التجاري، يجمع بين موقع مركزي قوي وسهولة الوصول لوسط دبي وDIFC. اطّلع على المخطط والصور والكتيّب الرسمي.",
      keywords:
        "أبراج داماك باراماونت, الخليج التجاري, شقة جاهزة, غرفة نوم, باراماونت, داماك, دبي",
      canonical: "/properties/apartments/damac/damac-towers",
    },

    project: {
      name: "أبراج داماك من باراماونت",
      developer: "داماك العقارية",
      location: "الخليج التجاري، دبي، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "1,980,000 درهم",
      completionDate: "جاهز",
      paymentPlan: "100%",
      type: "شقق / سكن بطابع فندقي",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: `https://luxury-real-estate-media.b-cdn.net/damac/damac-towers/DAMAC%20Towers%20by%20Paramount%20Hotels%20%26%20Resorts%20Dubai%20Int2.jpg`,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة مستوحى من هوليوود في قلب الخليج التجاري",
      paragraphs: [
        "يقدّم مشروع أبراج داماك من باراماونت تجربة سكنية جاهزة بهوية مميزة داخل الخليج التجاري—إحدى أكثر المناطق طلبًا للسكن والاستثمار في دبي. قربه من محور قناة دبي يمنح ميزة عملية للتنقل اليومي والوصول السريع إلى وسط دبي وDIFC.",
        "الطابع العام للمشروع يعتمد على مفهوم الضيافة والخدمات: لوبيات قوية الحضور، مرافق بأسلوب فندقي، ومساحات مصممة لتمنح إحساسًا راقيًا ومريحًا للعيش أو للتأجير طويل الأمد.",
        "ستجد أدناه الكتيّب الرسمي، وصورة مخطط غرفة النوم، ومعرض الصور الكامل—وكل الروابط مبنية على أسماء ملفات BunnyCDN الخاصة بك كما هي لضمان عرض مثالي.",
      ],
      brochures: [
        { title: "تحميل الكتيّب (PDF)", url: BROCHURE_PDF, type: "main" },
      ],
      imgUrl: cdn("DAMAC Towers by Paramount Hotels & Resorts Dubai Ext1.jpg"),
      imgAlt: "واجهة أبراج داماك من باراماونت",
      floatingCards: [
        { icon: "💰", value: "1,980,000 درهم", label: "السعر يبدأ من" },
        { icon: "📐", value: "928.93 قدم²", label: "إجمالي المساحة" },
        { icon: "✅", value: "جاهز", label: "الحالة" },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "أبراج داماك من باراماونت",
    },

    // ✅ AR FloorPlans: same structure + 4 fields only
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "928.93 قدم²",
            "السعر الابتدائي": "1,980,000 درهم",
            "موعد التسليم": "جاهز",
            "خطة الدفع": "100%",
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
        { label: "سكن بطابع فندقي", icon: "🏨", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "لوبي فاخر", icon: "🏢", color: "#d7b46a" },
        { label: "موقع مركزي بالخليج التجاري", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "أبراج داماك من باراماونت",
      address: "DAMAC Towers by Paramount، الخليج التجاري، دبي، الإمارات",
      lat: 25.1864318,
      lng: 55.2920591,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "سهولة الوصول داخل الخليج التجاري ومراكز الأعمال.",
        },
        {
          icon: "🌊",
          text: "قرب واضح من محور قناة دبي ومناطق الحياة العصرية.",
        },
        { icon: "🚗", text: "تنقل سريع نحو وسط دبي والطرق الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم بأبراج داماك من باراماونت؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وتفاصيل الوحدة والوثائق الرسمية لمشروع أبراج داماك من باراماونت.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacTowersByParamountData;
