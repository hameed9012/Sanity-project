// src/data/properties/apartments/arada/il-teatro/il-teatro.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY files موجودة فعلاً inside: /arada/il-teatro
// ✅ Encodes spaces safely (and works with "il teatro 1br floor plan.webp")
// ✅ EN + AR
// ✅ Off-Plan + Payment Plan 35/65
// ✅ Completion date: not provided -> kept as "TBA" (but not "N/A")
// ✅ Includes: Brochure PDF + full gallery + 1BR & 2BR floorplans
// ✅ Location lat/lng from your Google Maps pin (exact)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/arada/il-teatro";

// Safe encoder for Bunny filenames (spaces + special chars)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

const BASE = `${BUNNY_CDN_BASE}${PROJECT_DIR}`;

// ========================
// Main Assets (EXACT filenames in your folder)
// ========================
const BROCHURE_PDF = cdn("IL-TEATRO-RESIDENCES-BROCHURE.pdf");
const FP_1BR = cdn("il teatro 1br floor plan.webp");
const FP_2BR = cdn("il teatro 2br floor plan.webp");

// ========================
// Gallery (ONLY files موجودة فعلاً in your folder)
// ========================
const GALLERY = [
  cdn("230807_Bldg-01_Corner-view-A1.jpg"),
  cdn("230808_Aerial-view.jpg"),
  cdn("230809_Pool-view_04.jpg"),
  cdn("230809-3B,2B-Library-(Loft).jpg"),
  cdn("230810-3B-Stairs-(loft).jpg"),
  cdn("230811-3B-Dining-(Loft).jpg"),
  cdn("230811-3B,2B-Family-living-(Loft).jpg"),
  cdn("230824_3BED_Living-room_02.jpg"),
  cdn("230824_3BED_Master-bedroom_02.jpg"),
  cdn("230824-1BED_Bedroom-01.jpg"),
  cdn("230828-2bed-Living-room-03.jpg"),
  cdn("230829-1bed-LIving-kitchen-02.jpg"),
  cdn("230829-2bed-Living-kitchen-02.jpg"),
];

// ========================
// Data
// ========================
export const ilTeatroData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "IL Teatro Residences by Arada | 1BR & 2BR Apartments in Muwaileh, Sharjah | 35/65",
      description:
        "IL Teatro Residences by Arada is a design-led residential address in Muwaileh Commercial, Sharjah, offering spacious 1-bedroom and 2-bedroom layouts with a clear 35/65 payment plan. Explore the official brochure, full image gallery, and 1BR/2BR floor plans — all mapped directly from your Bunny CDN folder for fast, accurate browsing and zero missing assets.",
      keywords:
        "IL Teatro Residences, Arada IL Teatro, Muwaileh Commercial Sharjah, apartments Sharjah, 1BR Sharjah, 2BR Sharjah, 35/65 payment plan, Arada residences",
      canonical: "/properties/apartments/arada/il-teatro",
    },

    project: {
      name: "IL Teatro Residences",
      developer: "Arada",
      location: "Muwaileh Commercial, Sharjah, UAE",
      status: "Off-Plan",
      startingPrice: "AED 2,375,000",
      completionDate: "TBA",
      paymentPlan: "35% / 65%",
      type: "Apartments",
      units: "1 Bedroom & 2 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("230808_Aerial-view.jpg"),
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "SPACIOUS DESIGN-LED LIVING IN MUWAILEH, SHARJAH",
      paragraphs: [
        "IL Teatro Residences by Arada is positioned in Muwaileh Commercial, Sharjah — a well-connected district known for everyday convenience and strong long-term demand.",
        "The project focuses on large layouts for both 1-bedroom and 2-bedroom homes, supported by a clear 35/65 payment plan structure — suitable for end-users who want space, and investors who want Sharjah growth exposure.",
        "Everything below uses your exact Bunny folder assets: the official brochure PDF, a complete gallery set, and both floor plan images for 1BR and 2BR — no external files and no missing links.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "IL-TEATRO-RESIDENCES-BROCHURE.pdf",
          category: "Overview",
          description: "Official brochure (PDF).",
        },
      ],
      imgUrl: cdn("230807_Bldg-01_Corner-view-A1.jpg"),
      imgAlt: "IL Teatro Residences exterior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 2,375,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1784 sq.ft",
          label: "1BR Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📄",
          value: "35% / 65%",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "IL Teatro Residences Visuals",
      slides: GALLERY,
      projectTag: "IL Teatro Residences",
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
            "Total Area": "1784 sq.ft",
            "Starting Price": "AED 2,375,000",
            Handover: "TBA",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "2235 sq.ft",
            "Starting Price": "AED 3,017,000",
            Handover: "TBA",
            "Payment Plan": "35% / 65%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Muwaileh Commercial Address", icon: "📍", color: "#d7b46a" },
        { label: "Spacious Layouts", icon: "📐", color: "#d7b46a" },
        { label: "Lifestyle Facilities", icon: "🏊", color: "#d7b46a" },
        { label: "Modern Interiors", icon: "✨", color: "#d7b46a" },
        { label: "Investor-Friendly Plan", icon: "📄", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "IL Teatro Residences",
      address: "Muwaileh Commercial, Sharjah, UAE",
      // ✅ exact from your Google Maps pin
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access across Sharjah and key routes." },
        {
          icon: "🏙️",
          text: "Well-served district for daily life and services.",
        },
        { icon: "📍", text: "Muwaileh Commercial community setting." },
      ],
    },

    cta: {
      title: "Interested in IL Teatro Residences?",
      description:
        "Share your details to receive availability, unit options, and the official brochure for IL Teatro Residences by Arada in Muwaileh, Sharjah.",
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
        "إل تياترو ريزيدنس من أرادا | شقق 1 و2 غرفة في المويلح التجارية الشارقة | 35/65",
      description:
        "إل تياترو ريزيدنس من أرادا يقع في المويلح التجارية بالشارقة ويقدّم شققًا بمساحات كبيرة من 1 غرفة و2 غرفة نوم مع خطة دفع واضحة 35/65. استعرض الكتيّب الرسمي، ومعرض الصور الكامل، ومخططات 1 و2 غرفة — جميعها مرتبطة مباشرة بملفات Bunny الخاصة بك لضمان سرعة التصفح وعدم وجود أي ملفات ناقصة.",
      keywords:
        "إل تياترو ريزيدنس, أرادا, المويلح التجارية الشارقة, شقق الشارقة, شقة غرفة, شقة غرفتين, خطة دفع 35/65",
      canonical: "/properties/apartments/arada/il-teatro",
    },

    project: {
      name: "إل تياترو ريزيدنس",
      developer: "أرادا",
      location: "المويلح التجارية، الشارقة، الإمارات",
      status: "على المخطط",
      startingPrice: "2,375,000 درهم",
      completionDate: "قيد التأكيد",
      paymentPlan: "35% / 65%",
      type: "شقق سكنية",
      units: "1 غرفة و2 غرف",
    },

    hero: {
      backgroundUrl: cdn("230808_Aerial-view.jpg"),
      squareImageUrl: "/arada-developer.avif",
      companyName: "أرادا",
      rating: null,
    },

    intro: {
      title: "مساحات واسعة بتصميم حديث في المويلح، الشارقة",
      paragraphs: [
        "إل تياترو ريزيدنس من أرادا يقع في المويلح التجارية بالشارقة — منطقة معروفة بسهولة الوصول وتوفر الخدمات اليومية وطلب قوي على السكن.",
        "يركّز المشروع على مساحات كبيرة لشقق 1 غرفة و2 غرف، مع خطة دفع واضحة 35/65 — مناسب للسكن والاستثمار في سوق الشارقة.",
        "كل ما تراه هنا مرتبط مباشرة بملفاتك على Bunny: الكتيّب الرسمي، معرض الصور، ومخططات 1 و2 غرفة — بدون ملفات خارجية وبدون أي نقص.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          fileName: "IL-TEATRO-RESIDENCES-BROCHURE.pdf",
          category: "نظرة عامة",
          description: "الكتيّب الرسمي (PDF).",
        },
      ],
      imgUrl: cdn("230807_Bldg-01_Corner-view-A1.jpg"),
      imgAlt: "إل تياترو ريزيدنس",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "2,375,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1784 قدم²",
          label: "مساحة 1 غرفة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📄",
          value: "35% / 65%",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "إل تياترو ريزيدنس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "1784 قدم مربع",
            "السعر الابتدائي": "2,375,000 درهم",
            "موعد التسليم": "قيد التأكيد",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "غرفتان نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "2235 قدم مربع",
            "السعر الابتدائي": "3,017,000 درهم",
            "موعد التسليم": "قيد التأكيد",
            "خطة الدفع": "35% / 65%",
          },
          images: [FP_2BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "عنوان المويلح التجارية", icon: "📍", color: "#d7b46a" },
        { label: "مساحات واسعة", icon: "📐", color: "#d7b46a" },
        { label: "مرافق أسلوب حياة", icon: "🏊", color: "#d7b46a" },
        { label: "تصميم داخلي حديث", icon: "✨", color: "#d7b46a" },
        { label: "خطة دفع واضحة", icon: "📄", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "إل تياترو ريزيدنس",
      address: "المويلح التجارية، الشارقة، الإمارات",
      lat: 25.3096921,
      lng: 55.4626017,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول داخل الشارقة وعبر الطرق الرئيسية." },
        { icon: "🏙️", text: "منطقة مخدومة بالخدمات اليومية." },
        { icon: "📍", text: "بيئة مجتمعية في المويلح التجارية." },
      ],
    },

    cta: {
      title: "مهتم بإل تياترو ريزيدنس؟",
      description:
        "أرسل بياناتك للحصول على التوافر وخيارات الوحدات ورابط الكتيّب الرسمي لمشروع إل تياترو ريزيدنس من أرادا في الشارقة.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default ilTeatroData;
