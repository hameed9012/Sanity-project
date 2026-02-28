// src/data/properties/apartments/arada/anantara/anantara.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /arada/anantara
// ✅ Encodes spaces + parentheses safely (so "0 (1).webp" renders)
// ✅ EN + AR
// ✅ Off-Plan + Payment Plan 30/70 + Handover Q2 2027
// ✅ Includes: Brochure PDF + Floorplans PDF + full WEBP gallery + 1BR–4BR floorplans
// ✅ Location: you pasted Anantara The Palm (Dubai) pin — used as-is (exact lat/lng from your link)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/anantara";

// Encode filename safely (includes parentheses too)
const safeEncode = (fileName) =>
  encodeURIComponent(fileName).replace(/\(/g, "%28").replace(/\)/g, "%29");

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${safeEncode(fileName)}`;
const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames in your folder)
// ========================
const BROCHURE_PDF = cdn("Anantara Sharjah Residences.pdf");
const FLOORPLANS_PDF = cdn("Anantara Sharjah Residences Floorplans.pdf");

// Floor plan images (EXACT filenames)
const FP_1BR = cdn("Anantara residence 1br floor plan.png");
const FP_2BR = cdn("Anantara resort 2br floor plan.webp");
const FP_3BR = cdn("anantara resort 3br floor plan.webp");
const FP_4BR = cdn("Anantara resort 4br floor plan.webp");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// (kept exactly as listed; includes 0.webp and 0 (1).webp)
// ========================
const GALLERY = [
  cdn("0.webp"),
  cdn("1.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("12.webp"),
  cdn("13.webp"),
  cdn("14.webp"),
  cdn("15.webp"),

  // WhatsApp-named assets موجودة فعلاً
  cdn(
    "D098D0B7D0BED0B1D180D0B0D0B6D0B5D0BDD0B8D0B5WhatsApp2024-04-29D0B212.webp",
  ),
  cdn(
    "D098D0B7D0BED0B1D180D0B0D0B6D0B5D0BDD0B8D0B5WhatsApp2024-04-29D0B212 (1).webp",
  ),
  cdn(
    "D098D0B7D0BED0B1D180D0B0D0B6D0B5D0BDD0B8D0B5WhatsApp2024-04-29D0B212 (2).webp",
  ),
];

// ========================
// Data
// ========================
export const anantaraSharjahResidencesData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Anantara Sharjah Residences | 1–4BR Resort Homes in Sharjah | 30/70 | Q2 2027",
      description:
        "Anantara Sharjah Residences brings resort-style beachfront living to Sharjah with spacious 1 to 4-bedroom layouts, a clear 30/70 payment plan, and handover in Q2 2027. Explore the official brochure, dedicated floorplans PDF, full visual gallery, and individual 1BR–4BR floor plan images — all wired directly from your Bunny CDN folder for a smooth, fast browsing experience.",
      keywords:
        "Anantara Sharjah Residences, Anantara Sharjah Resort, Sharjah residences, beachfront Sharjah, 1BR Sharjah, 2BR Sharjah, 3BR Sharjah, 4BR Sharjah, 30/70 payment plan, Q2 2027 handover",
      canonical: "/properties/apartments/arada/anantara",
    },

    project: {
      name: "Anantara Sharjah Residences",
      developer: "Arada",
      location: "Sharjah, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,510,000",
      completionDate: "Q2 2027",
      paymentPlan: "30% / 70%",
      type: "Resort Residences",
      units: "1 Bedroom to 4 Bedroom",
    },

    hero: {
      // Using a clean gallery asset as hero background
      backgroundUrl: cdn("1.webp"),
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "BEACHFRONT RESORT-STYLE LIVING IN SHARJAH",
      paragraphs: [
        "Anantara Sharjah Residences is designed for buyers who want the feel of a premium resort lifestyle paired with true home-size layouts — in a coastal Sharjah setting.",
        "The project offers 1 to 4-bedroom residences with generous total areas, a clear 30/70 payment structure, and a targeted handover timeline in Q2 2027 — suitable for both end-users and long-term investors.",
        "Everything below is connected to your exact Bunny folder assets: the official brochure PDF, a full floorplans PDF pack, a webp-based image gallery, and floor plan images for 1BR through 4BR — no missing files.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Anantara Sharjah Residences.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
        {
          title: "Download Floorplans (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Anantara Sharjah Residences Floorplans.pdf",
          category: "Floor Plans",
          description: "Full floor plan pack (PDF).",
        },
      ],
      imgUrl: cdn("14.webp"),
      imgAlt: "Anantara Sharjah Residences visual",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,510,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1188 sq.ft",
          label: "1BR Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q2 2027",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Anantara Sharjah Residences Visuals",
      slides: GALLERY,
      projectTag: "Anantara Sharjah Residences",
    },

    // ✅ FloorPlans: ONLY the 4 fields you requested
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "1188 sq.ft",
            "Starting Price": "AED 2,510,000",
            Handover: "Q2 2027",
            "Payment Plan": "30% / 70%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1695 sq.ft",
            "Starting Price": "AED 3,482,000",
            Handover: "Q2 2027",
            "Payment Plan": "30% / 70%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "2876 sq.ft",
            "Starting Price": "AED 5,595,000",
            Handover: "Q2 2027",
            "Payment Plan": "30% / 70%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "3880 sq.ft",
            "Starting Price": "AED 7,756,000",
            Handover: "Q2 2027",
            "Payment Plan": "30% / 70%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Beachfront Resort Lifestyle", icon: "🏖️", color: "#d7b46a" },
        { label: "Spacious Home Layouts", icon: "🏠", color: "#d7b46a" },
        { label: "Premium Hospitality Feel", icon: "✨", color: "#d7b46a" },
        { label: "Wellness & Leisure", icon: "💆", color: "#d7b46a" },
        { label: "Investor-Friendly Plan", icon: "📄", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Anantara Sharjah Residences",
      address: "Sharjah, UAE",
      // ✅ from your pasted Google Maps link (Anantara The Palm Dubai Resort pin)
      // (you asked “exact”, so I used the exact coordinates in the URL)
      lat: 25.1294899,
      lng: 55.1531706,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌊", text: "Coastal setting with resort atmosphere." },
        { icon: "🚗", text: "Convenient access to key UAE routes." },
        { icon: "📍", text: "Sharjah address with lifestyle appeal." },
      ],
    },

    cta: {
      title: "Interested in Anantara Sharjah Residences?",
      description:
        "Share your details to receive availability, unit options, and the official brochure + floorplans pack for Anantara Sharjah Residences.",
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
        "أنانتارا الشارقة ريزيدنس | وحدات 1–4 غرف على طراز منتجع في الشارقة | 30/70 | الربع الثاني 2027",
      description:
        "أنانتارا الشارقة ريزيدنس يقدّم أسلوب حياة منتجع على الواجهة البحرية في الشارقة مع مساحات كبيرة من 1 إلى 4 غرف نوم، وخطة دفع واضحة 30/70، وتسليم متوقع في الربع الثاني 2027. استعرض الكتيّب الرسمي، وملف مخططات الطوابق PDF، ومعرض الصور الكامل، ومخططات 1–4 غرف — جميعها مرتبطة مباشرة بملفات Bunny الخاصة بك بدون أي نقص.",
      keywords:
        "أنانتارا الشارقة ريزيدنس, منتجع أنانتارا الشارقة, شقق الشارقة, واجهة بحرية الشارقة, شقة غرفة, شقة غرفتين, شقة 3 غرف, شقة 4 غرف, خطة دفع 30/70, تسليم 2027",
      canonical: "/properties/apartments/arada/anantara",
    },

    project: {
      name: "أنانتارا الشارقة ريزيدنس",
      developer: "أرادا",
      location: "الشارقة، الإمارات",
      status: "على المخطط",
      startingPrice: "2,510,000 درهم",
      completionDate: "الربع الثاني 2027",
      paymentPlan: "30% / 70%",
      type: "وحدات سكنية بنمط منتجع",
      units: "من 1 إلى 4 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("1.webp"),
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادا",
      rating: null,
    },

    intro: {
      title: "حياة منتجع على الواجهة البحرية في الشارقة",
      paragraphs: [
        "أنانتارا الشارقة ريزيدنس مناسب لمن يبحث عن تجربة سكنية تشبه المنتجعات الفاخرة مع مساحات منزلية واسعة في بيئة ساحلية داخل الشارقة.",
        "يوفّر المشروع خيارات من 1 إلى 4 غرف نوم بمساحات إجمالية كبيرة، مع خطة دفع 30/70 وتسليم متوقع في الربع الثاني 2027 — مناسب للسكن والاستثمار.",
        "كل ما تراه هنا مرتبط مباشرة بملفاتك على Bunny: الكتيّب الرسمي PDF، ملف مخططات الطوابق PDF، معرض صور WebP، ومخططات 1–4 غرف — بدون ملفات ناقصة.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "Anantara Sharjah Residences.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
        {
          title: "تحميل مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
          fileName: "Anantara Sharjah Residences Floorplans.pdf",
          category: "Floor Plans",
          description: "حزمة مخططات الطوابق كاملة (PDF).",
        },
      ],
      imgUrl: cdn("14.webp"),
      imgAlt: "أنانتارا الشارقة ريزيدنس",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,510,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1188 قدم²",
          label: "مساحة 1 غرفة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "Q2 2027",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "أنانتارا الشارقة ريزيدنس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "1188 قدم مربع",
            "السعر الابتدائي": "2,510,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "30% / 70%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1695 قدم مربع",
            "السعر الابتدائي": "3,482,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "30% / 70%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "2876 قدم مربع",
            "السعر الابتدائي": "5,595,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "30% / 70%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "3880 قدم مربع",
            "السعر الابتدائي": "7,756,000 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": "30% / 70%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "أسلوب حياة منتجع", icon: "🏖️", color: "#d7b46a" },
        { label: "مساحات سكنية واسعة", icon: "🏠", color: "#d7b46a" },
        { label: "طابع ضيافة فاخر", icon: "✨", color: "#d7b46a" },
        { label: "استرخاء وعافية", icon: "💆", color: "#d7b46a" },
        { label: "خطة دفع واضحة", icon: "📄", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "أنانتارا الشارقة ريزيدنس",
      address: "الشارقة، الإمارات",
      lat: 25.1294899,
      lng: 55.1531706,
      zoom: 17,
      proximityFeatures: [
        { icon: "🌊", text: "بيئة ساحلية بطابع منتجع." },
        { icon: "🚗", text: "سهولة الوصول لمحاور الإمارات." },
        { icon: "📍", text: "عنوان في الشارقة مع قيمة أسلوب حياة." },
      ],
    },

    cta: {
      title: "مهتم بأنانتارا الشارقة ريزيدنس؟",
      description:
        "أرسل بياناتك للحصول على التوافر وخيارات الوحدات وروابط الكتيّب الرسمي ومخططات الطوابق.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default anantaraSharjahResidencesData;
