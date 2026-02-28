// src/data/properties/apartments/gfs/canterbury-waterfront.js
// ✅ Folder: /gfs/canterbury-waterfront
// ✅ EN + AR
// ✅ Off-plan
// ✅ Studio
// ✅ Exact filenames (ignores .DS_Store)
// ✅ Ajman Waterfront
// ✅ GFS square image confirmed

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/gfs/canterbury-waterfront";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ CONFIRMED SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("gfs-canterbuty-waterfront-brochure.pdf");
const FLOORPLANS_PDF = cdn("gfs-canterbury-waterfront-floorplans.pdf");

const HERO_BG = cdn("1.webp");
const INTRO_MAIN = cdn("4.webp");

const FP_STUDIO = cdn("Canterbury Waterfront studio floor plan.webp");

// Gallery (1–8.webp)
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
];

const HANDOVER = "Q1 2029";
const PAYMENT_PLAN = "56% / 44%";

// ======================================================
// DATA
// ======================================================
export const canterburyWaterfrontData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Canterbury Waterfront by GFS | Studios in Ajman | From AED 509,490",
      description:
        "Canterbury Waterfront by GFS Developments offers waterfront studio apartments in Ajman starting from AED 509,490 with a 56/44 payment plan and handover in Q1 2029.",
      keywords:
        "Canterbury Waterfront, GFS Developments, Ajman waterfront apartments, off plan Ajman",
      canonical: "/properties/apartments/gfs/canterbury-waterfront",
    },

    project: {
      name: "Canterbury Waterfront",
      developer: "GFS Developments",
      location: "Ajman Waterfront, Ajman, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 509,490",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "Studio",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "GFS Developments",
      rating: null,
    },

    intro: {
      title: "CANTERBURY WATERFRONT — AFFORDABLE SEASIDE LIVING",
      paragraphs: [
        "Canterbury Waterfront by GFS Developments is a modern waterfront residential project in Ajman, offering smartly designed studio apartments with strong rental and lifestyle appeal.",
        `Studios start from AED 509,490 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Floor Plans (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Canterbury Waterfront by GFS",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 509,490",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "323 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Ajman Waterfront",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Canterbury Waterfront",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "323 sq.ft",
            "Starting Price": "AED 509,490",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Waterfront Living", icon: "🌊", color: "#d7b46a" },
        { label: "Modern Design", icon: "🏢", color: "#d7b46a" },
        { label: "Investor Friendly", icon: "📈", color: "#d7b46a" },
        { label: "Ajman Location", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Canterbury Waterfront",
      address: "Ajman Waterfront, Ajman, UAE",
      lat: 25.4328125,
      lng: 55.4674375,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Sharjah and Dubai." },
        { icon: "🏖️", text: "Direct waterfront setting." },
        { icon: "🛍️", text: "Close to daily amenities." },
      ],
    },

    cta: {
      title: "Interested in Canterbury Waterfront?",
      description:
        "Submit your details to receive availability, pricing, and official GFS documents.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  // ================= AR =================
  // ================= AR =================
  ar: {
    seo: {
      title: "كانتربري ووترفرونت من GFS | استوديوهات على واجهة عجمان البحرية",
      description:
        "كانتربري ووترفرونت من GFS للتطوير العقاري يوفر شقق استوديو على الواجهة البحرية في عجمان بأسعار تبدأ من 509,490 درهم مع خطة سداد 56/44 وموعد تسليم في الربع الأول 2029.",
      keywords:
        "كانتربري ووترفرونت, GFS, شقق عجمان, واجهة عجمان البحرية, شقق على المخطط",
      canonical: "/properties/apartments/gfs/canterbury-waterfront",
    },

    project: {
      name: "كانتربري ووترفرونت",
      developer: "جي إف إس للتطوير العقاري",
      location: "واجهة عجمان البحرية، عجمان، الإمارات",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "509,490 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "استوديو",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "جي إف إس للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "كانتربري ووترفرونت — أسلوب حياة عصري على الواجهة البحرية",
      paragraphs: [
        "كانتربري ووترفرونت من GFS للتطوير العقاري هو مشروع سكني حديث يقع على واجهة عجمان البحرية، ويقدم شقق استوديو مصممة بذكاء تجمع بين الراحة والقيمة الاستثمارية.",
        `تبدأ أسعار الاستوديوهات من 509,490 درهم مع خطة سداد ${PAYMENT_PLAN} وموعد تسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيب", url: BROCHURE_PDF, type: "main" },
        {
          title: "مخططات الطوابق (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "كانتربري ووترفرونت من GFS",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "509,490 درهم",
          label: "سعر البداية",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "323 قدم²",
          label: "إجمالي المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "واجهة عجمان",
          label: "موقع المشروع",
        },
      ],
    },

    gallery: {
      title: "معرض المشروع",
      slides: GALLERY,
      projectTag: "كانتربري ووترفرونت",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "شقة استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "323 قدم²",
            "السعر الابتدائي": "509,490 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_STUDIO],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "حياة على الواجهة البحرية", icon: "🌊", color: "#d7b46a" },
        { label: "تصميم عصري", icon: "🏢", color: "#d7b46a" },
        { label: "مناسب للاستثمار", icon: "📈", color: "#d7b46a" },
        { label: "موقع في عجمان", icon: "📍", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كانتربري ووترفرونت",
      address: "واجهة عجمان البحرية، عجمان، الإمارات",
      lat: 25.4328125,
      lng: 55.4674375,
      zoom: 16,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الشارقة ودبي." },
        { icon: "🏖️", text: "موقع مباشر على الواجهة البحرية." },
        { icon: "🛍️", text: "قريب من الخدمات اليومية." },
      ],
    },

    cta: {
      title: "هل أنت مهتم بمشروع كانتربري ووترفرونت؟",
      description:
        "سجل بياناتك الآن للحصول على التوفر، الأسعار، والمستندات الرسمية من GFS.",
      buttons: [
        { label: "سجل اهتمامك", action: "enquire" },
        { label: "تحميل الكتيب", action: "download-brochure" },
        { label: "تحميل مخططات الطوابق", action: "download-floorplans" },
      ],
    },
  },
};

export default canterburyWaterfrontData;
