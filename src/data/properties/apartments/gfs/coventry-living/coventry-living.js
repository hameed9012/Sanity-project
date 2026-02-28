// src/data/properties/apartments/gfs/coventry-living.js
// ✅ Folder: /gfs/coventry-living
// ✅ EN + AR
// ✅ 1BR only
// ✅ Exact filenames
// ✅ Jumeirah Village Circle (JVC)
// ✅ GFS standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/gfs/coventry-living";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD GFS SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Coventry Living.pdf");
const FLOORPLANS_PDF = cdn("Coventry Living Floorplans.pdf");

const HERO_BG = cdn("2.webp");
const INTRO_MAIN = cdn("4.webp");

const FP_1BR = cdn("Coventry Living 1br floor plan.webp");

// Gallery (exact order)
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("12.webp"),
  cdn("13.webp"),
  cdn("14.webp"),
  cdn("15.webp"),
  cdn("16.webp"),
];

const HANDOVER = "Q2 2028";
const PAYMENT_PLAN = "80% / 20%";

// ======================================================
// DATA
// ======================================================
export const coventryLivingData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Coventry Living by GFS | 1BR Apartments in JVC Dubai",
      description:
        "Coventry Living by GFS Developments offers modern 1-bedroom apartments in Jumeirah Village Circle (JVC), starting from AED 1,208,315 with an 80/20 payment plan and handover in Q2 2028.",
      keywords:
        "Coventry Living, GFS Developments, JVC apartments, off plan Dubai",
      canonical: "/properties/apartments/gfs/coventry-living",
    },

    project: {
      name: "Coventry Living",
      developer: "GFS Developments",
      location: "Jumeirah Village Circle (JVC), Dubai, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,208,315",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "GFS Developments",
      rating: null,
    },

    intro: {
      title: "COVENTRY LIVING — MODERN LIVING IN JVC",
      paragraphs: [
        "Coventry Living by GFS Developments is a contemporary residential project located in Jumeirah Village Circle, one of Dubai’s most in-demand communities.",
        `1-bedroom apartments start from AED 1,208,315 with an ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
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
      imgAlt: "Coventry Living by GFS",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,208,315",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "789 sq.ft",
          label: "Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "JVC",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Coventry Living",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "789 sq.ft",
            "Starting Price": "AED 1,208,315",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Contemporary Design", icon: "🏢", color: "#d7b46a" },
        { label: "Prime JVC Location", icon: "📍", color: "#d7b46a" },
        { label: "Spacious Layouts", icon: "📐", color: "#d7b46a" },
        { label: "High Rental Demand", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Coventry Living",
      address: "Jumeirah Village Circle (JVC), Dubai, UAE",
      lat: 25.0608609,
      lng: 55.2088007,
      zoom: 15,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Easy access to Al Khail Road and Sheikh Mohammed Bin Zayed Road.",
        },
        { icon: "🏙️", text: "Minutes from Dubai Marina and Downtown Dubai." },
        { icon: "🏫", text: "Close to schools, parks, and retail." },
      ],
    },

    cta: {
      title: "Interested in Coventry Living?",
      description:
        "Get updated availability, prices, and official GFS documents directly from our advisors.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Download Floor Plans", action: "download-floorplans" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title:
        "كوفنتري ليفينغ من GFS | شقق غرفة نوم واحدة في قرية جميرا الدائرية (JVC)",
      description:
        "كوفنتري ليفينغ من جي إف إس للتطوير العقاري يوفر شقق غرفة نوم واحدة عصرية في قرية جميرا الدائرية (JVC)، تبدأ من 1,208,315 درهم مع خطة سداد 80/20 والتسليم في الربع الثاني 2028.",
      keywords: "كوفنتري ليفينغ، GFS، شقق JVC، دبي على المخطط",
      canonical: "/properties/apartments/gfs/coventry-living",
    },

    project: {
      name: "كوفنتري ليفينغ",
      developer: "جي إف إس للتطوير العقاري",
      location: "قرية جميرا الدائرية (JVC)، دبي، الإمارات",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,208,315 درهم",
      completionDate: "الربع الثاني 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "جي إف إس للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "كوفنتري ليفينغ — أسلوب حياة عصري في قرية جميرا الدائرية",
      paragraphs: [
        "كوفنتري ليفينغ من جي إف إس للتطوير العقاري هو مشروع سكني حديث يقع في قرية جميرا الدائرية، واحدة من أكثر مجتمعات دبي طلبًا.",
        `تبدأ شقق غرفة نوم واحدة من 1,208,315 درهم مع خطة سداد ${PAYMENT_PLAN} والتسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "مخططات الوحدات (PDF)",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "كوفنتري ليفينغ من GFS",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,208,315 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "789 قدم²",
          label: "المساحة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "JVC",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Coventry Living",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br", // ✅ IMPORTANT
          title: "غرفة نوم واحدة",
          bedrooms: 1, // ✅ parity
          specs: {
            "إجمالي المساحة": "789 قدم²",
            "السعر الابتدائي": "1,208,315 درهم",
            "موعد التسليم": "الربع الثاني 2028",
            "خطة السداد": PAYMENT_PLAN, // ✅ use consistent key
          },
          images: [FP_1BR],
          features: ["—"], // ✅ parity with EN
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المميزات / المرافق",
      amenities: [
        { label: "تصميم عصري", icon: "🏢", color: "#d7b46a" },
        { label: "موقع مميز في JVC", icon: "📍", color: "#d7b46a" },
        { label: "مخططات واسعة", icon: "📐", color: "#d7b46a" },
        { label: "طلب إيجاري مرتفع", icon: "📈", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "كوفنتري ليفينغ",
      address: "قرية جميرا الدائرية (JVC)، دبي، الإمارات",
      lat: 25.0608609,
      lng: 55.2088007,
      zoom: 15,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "سهولة الوصول إلى شارع الخيل وشارع محمد بن زايد.",
        },
        { icon: "🏙️", text: "دقائق من دبي مارينا وداون تاون دبي." },
        { icon: "🏫", text: "بالقرب من المدارس والحدائق والمتاجر." },
      ],
    },

    cta: {
      title: "مهتم بكوفنتري ليفينغ؟",
      description:
        "احصل على التوافر المحدّث والأسعار والملفات الرسمية من GFS مباشرة عبر مستشارينا.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default coventryLivingData;
