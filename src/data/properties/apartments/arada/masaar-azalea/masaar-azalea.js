// src/data/properties/townhouses/arada/masaar-azalea/masaar-azalea.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /arada/masaar-azalea
// ✅ Encodes spaces safely
// ✅ EN + AR
// ✅ Ready + 100% (Full Cash - Ready) payment plan
// ✅ Includes 2 PDFs + full gallery + 3BR Ground/First floorplans
// ✅ Location lat/lng from your Google Maps pin (exact)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/masaar-azalea";

// Safe encoder for Bunny filenames (spaces/case safe)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames in your folder)
// ========================
const BROCHURE_PDF = cdn("masaar-azalea-brochure.pdf");
const FLOORPLANS_PDF = cdn("masaar-azalea-floorplans.pdf");

const FP_3BR_GROUND = cdn("Masaar azalea 3br ground floor plan.png");
const FP_3BR_FIRST = cdn("Masaar azalea 3br first floor plan.png");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("7SZdOLgI7T00eACranh99P59khZ4wCacdaqEX6kWXt8.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
];

// ========================
// Data
// ========================
export const masaarAzaleaData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Masaar Azalea by Arada | 3BR Ready Townhouse in Masaar, Sharjah | 100% Payment (Ready)",
      description:
        "Masaar Azalea by Arada offers a ready 3-bedroom townhouse in the forest-inspired Masaar community, Sharjah. Explore the official brochure, floorplans PDF, full image gallery, and 3BR ground/first floor plans — wired to your exact Bunny assets for fast, reliable loading and clean SEO.",
      keywords:
        "Masaar Azalea, Arada Masaar, 3 bedroom townhouse Sharjah, ready townhouse Sharjah, Masaar community, Arada properties, 100% payment plan ready",
      canonical: "/properties/townhouses/arada/masaar-azalea",
    },

    project: {
      name: "Masaar Azalea",
      developer: "Arada",
      location: "Masaar, Sharjah, UAE",
      status: "Secondary",
      startingPrice: "AED 2,870,000",
      completionDate: "Ready",
      paymentPlan: "100% (Ready)",
      type: "Townhouses",
      units: "3 Bedroom Townhouse",
      baseUrl: BASE,
    },

    hero: {
      backgroundUrl: cdn("8.webp"),
      // Using an existing image from the folder to ensure it always loads
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "READY 3BR TOWNHOUSE IN MASAAR (AZALEA)",
      paragraphs: [
        "Masaar Azalea by Arada features a ready 3-bedroom townhouse in Masaar, a nature-led community designed around outdoor living, greenery, and family-friendly spaces.",
        "With a Ready status and a 100% payment plan, this is positioned for buyers who want immediate ownership — whether as an end-user home or a ready asset within a well-known Sharjah master community.",
        "Below you’ll find your exact Bunny folder assets: the main brochure PDF, floorplans PDF, a full gallery set, and the 3BR ground + first floor plans — structured exactly like your site blueprint (EN + AR).",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "masaar-azalea-brochure.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
        {
          title: "Download Floorplans",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "masaar-azalea-floorplans.pdf",
          category: "Floor Plans",
          description: "Complete floorplans booklet (PDF).",
        },
      ],
      imgUrl: cdn("5.webp"),
      imgAlt: "Masaar Azalea by Arada - exterior community visual",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,870,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "2,348 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "✅",
          value: "Ready",
          label: "Status",
        },
      ],
    },

    gallery: {
      title: "Masaar Azalea Visuals",
      slides: GALLERY,
      projectTag: "Masaar Azalea",
    },

    // ✅ FloorPlans with variants (best for Ground/First selectors + correct carousel behavior)
    floorPlans: {
      type: "townhouses",
      plans: [
        {
          id: "3br",
          title: "3 Bedroom Townhouse",
          bedrooms: 3,
          shortLabel: "3 BR",
          variants: [
            {
              id: "3br-ground",
              shortLabel: "Ground Floor",
              fullTitle: "3 Bedroom Townhouse (Ground Floor)",
              // ✅ ONLY the 4 fields you requested
              specs: {
                "Total Area": "2,348 sq.ft",
                "Starting Price": "AED 2,870,000",
                Handover: "Ready",
                "Payment Plan": "100% (Ready)",
              },
              images: [FP_3BR_GROUND],
              brochureUrl: FLOORPLANS_PDF,
            },
            {
              id: "3br-first",
              shortLabel: "First Floor",
              fullTitle: "3 Bedroom Townhouse (First Floor)",
              specs: {
                "Total Area": "2,348 sq.ft",
                "Starting Price": "AED 2,870,000",
                Handover: "Ready",
                "Payment Plan": "100% (Ready)",
              },
              images: [FP_3BR_FIRST],
              brochureUrl: FLOORPLANS_PDF,
            },
          ],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Nature-Led Community Feel", icon: "🌿", color: "#d7b46a" },
        { label: "Family-Friendly Spaces", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "Outdoor Lifestyle Areas", icon: "🌳", color: "#d7b46a" },
        {
          label: "Leisure & Wellness Facilities",
          icon: "💪",
          color: "#d7b46a",
        },
        { label: "Ready-to-Move-In", icon: "✅", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Masaar Azalea",
      address: "Masaar, Sharjah, UAE",
      // ✅ exact from your Google Maps pin
      lat: 25.2641192,
      lng: 55.5959314,
      zoom: 16,
      proximityFeatures: [
        { icon: "📍", text: "Located within Masaar community in Sharjah." },
        { icon: "🌿", text: "A calm, green-led environment for daily living." },
        {
          icon: "🚗",
          text: "Convenient access to key Sharjah routes and hubs.",
        },
      ],
    },

    cta: {
      title: "Interested in Masaar Azalea?",
      description:
        "Share your details to receive current availability, unit options, and the official brochures for Masaar Azalea by Arada.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title:
        "مسار أزاليا من أرادَة | تاون هاوس 3 غرف جاهز في مسار الشارقة | خطة دفع 100% (جاهز)",
      description:
        "مسار أزاليا من أرادَة يوفّر تاون هاوس 3 غرف جاهز ضمن مجتمع «مسار» ذي الطابع الطبيعي في الشارقة. استعرض الكتيّب الرسمي، ملف مخططات PDF، معرض الصور الكامل، ومخططي الطابق الأرضي والأول — باستخدام ملفات Bunny الخاصة بك كما هي لضمان سرعة التحميل ونتائج SEO قوية.",
      keywords:
        "مسار أزاليا, أرادَة مسار, تاون هاوس 3 غرف الشارقة, تاون هاوس جاهز الشارقة, مجتمع مسار, مشاريع أرادة, خطة دفع 100% جاهز",
      canonical: "/properties/townhouses/arada/masaar-azalea",
    },

    project: {
      name: "مسار أزاليا",
      developer: "أرادَة",
      location: "مسار، الشارقة، الإمارات",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "2,870,000 درهم",
      completionDate: "جاهز",
      paymentPlan: "100% (جاهز)",
      type: "تاون هاوس",
      units: "3 غرف نوم",
      baseUrl: BASE,
    },

    hero: {
      backgroundUrl: cdn("4.webp"),
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادَة",
      rating: null,
    },

    intro: {
      title: "تاون هاوس جاهز 3 غرف في مسار (أزاليا)",
      paragraphs: [
        "يقدّم مشروع مسار أزاليا من أرادَة تاون هاوس 3 غرف نوم جاهز ضمن مجتمع «مسار» الذي يركّز على نمط الحياة الخارجي والمساحات الخضراء والأجواء العائلية.",
        "مع حالة جاهزة للتسليم وخطة دفع 100%، يُعد هذا الخيار مناسبًا لمن يريد تملّكًا فوريًا — سواء للسكن أو كأصل جاهز ضمن مجتمع معروف في الشارقة.",
        "ستجد أدناه ملفاتك كما رفعتها على Bunny: كتيّب المشروع، ملف مخططات PDF، معرض الصور الكامل، ومخططي الطابق الأرضي والأول لوحدة 3 غرف — وبنفس بنية المشروع لديك (EN + AR).",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "masaar-azalea-brochure.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
        {
          title: "تحميل مخططات PDF",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "masaar-azalea-floorplans.pdf",
          category: "المخططات",
          description: "ملف المخططات الكامل (PDF).",
        },
      ],
      imgUrl: cdn("5.webp"),
      imgAlt: "مسار أزاليا من أرادَة - صور المشروع",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,870,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "2,348 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "✅",
          value: "جاهز",
          label: "الحالة",
        },
      ],
    },

    gallery: {
      title: "صور مسار أزاليا",
      slides: GALLERY,
      projectTag: "مسار أزاليا",
    },

    floorPlans: {
      type: "townhouses",
      plans: [
        {
          id: "3br",
          title: "تاون هاوس 3 غرف نوم",
          bedrooms: 3,
          shortLabel: "3 غرف",
          variants: [
            {
              id: "3br-ground",
              shortLabel: "الأرضي",
              fullTitle: "تاون هاوس 3 غرف نوم (الطابق الأرضي)",
              specs: {
                "إجمالي المساحة": "2,348 قدم مربع",
                "السعر الابتدائي": "2,870,000 درهم",
                "موعد التسليم": "جاهز",
                "خطة الدفع": "100% (جاهز)",
              },
              images: [FP_3BR_GROUND],
              brochureUrl: FLOORPLANS_PDF,
            },
            {
              id: "3br-first",
              shortLabel: "الأول",
              fullTitle: "تاون هاوس 3 غرف نوم (الطابق الأول)",
              specs: {
                "إجمالي المساحة": "2,348 قدم مربع",
                "السعر الابتدائي": "2,870,000 درهم",
                "موعد التسليم": "جاهز",
                "خطة الدفع": "100% (جاهز)",
              },
              images: [FP_3BR_FIRST],
              brochureUrl: FLOORPLANS_PDF,
            },
          ],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "أجواء طبيعية ومساحات خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "بيئة مناسبة للعائلات", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "مساحات خارجية للاسترخاء", icon: "🌳", color: "#d7b46a" },
        { label: "مرافق لياقة وعافية", icon: "💪", color: "#d7b46a" },
        { label: "جاهز للسكن", icon: "✅", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "مسار أزاليا",
      address: "مسار، الشارقة، الإمارات",
      lat: 25.2641192,
      lng: 55.5959314,
      zoom: 16,
      proximityFeatures: [
        { icon: "📍", text: "ضمن مجتمع مسار في الشارقة." },
        { icon: "🌿", text: "بيئة هادئة بطابع طبيعي للحياة اليومية." },
        { icon: "🚗", text: "سهولة الوصول إلى الطرق والمحاور الرئيسية." },
      ],
    },

    cta: {
      title: "مهتم بمسار أزاليا؟",
      description:
        "أرسل بياناتك للحصول على التوافر الحالي وخيارات الوحدات وروابط الكتيّبات الرسمية لمشروع مسار أزاليا من أرادَة.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default masaarAzaleaData;
