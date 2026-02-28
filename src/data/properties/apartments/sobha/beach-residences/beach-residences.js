// src/data/properties/apartments/sobha/beach-residences/beach-residences.js
// ✅ Blueprint-compliant (Sobha standard)
// ✅ EN + AR
// ✅ Off-plan
// ✅ 1BR / 2BR / 3BR
// ✅ Uses ONLY existing files
// ✅ Siniya Island, Umm Al Quwain (UAQ)

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/sobha/beach-residences";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD SOBHA SQUARE IMAGE
const SQUARE_IMAGE_URL = "/Sobha-Realty-Square-Logo.jpg";

// ================= FILES =================
const BROCHURE_AQUAMARINE = cdn("Brochure - Aquamarine Beach Residences.pdf");
const BROCHURE_COASTLINE = cdn("Brochure - Coastline Beach Residences.pdf");
const BROCHURE_PRISTINE = cdn("Brochure - Pristine Beach Residences.pdf");
const BROCHURE_STARLINE = cdn("Starline Beach Residences Brochure.pdf");
const FACTBOOK_AQUAMARINE = cdn("Fact Book - Aquamarine Beach Residences.pdf");

const HERO_BG = cdn("Beach Residences_Teaser.mp4");
const INTRO_MAIN = cdn("Day shot - Coastline A06.jpg");

const VIDEO_TEASER = cdn("Beach Residences_Teaser.mp4");
const VIDEO_STARLINE = cdn("Starline Beach Residences Unveiling Video.mp4");
const VIDEO_PRISTINE = cdn("Pristine Beach Residences Launch Video AED.mp4");

const FP_1BR = cdn("Beach reidences 1br floor plan.webp");
const FP_2BR = cdn("Beach residences 2br floor plan .png");
const FP_3BR = cdn("Beach residences 3br floor plan .png");

// Curated gallery (clean & representative)
const GALLERY = [
  cdn("Aquamarine Exterior.jpg"),
  cdn("Exterior A-07-Apartment_07-01.jpg"),
  cdn("Exterior A-09-Apartment_07-01.jpg"),
  cdn("Evening shot - Coastline A06.jpg"),
  cdn("Pool view - Coastline A06.jpg"),
  cdn("Siniya Island_A-05 Apartment_RS_Cam001.jpg"),
  cdn("Siniya Island_A-05 Apartment_RS_Cam002.jpg"),
  cdn("Siniya Island_A-05 Apartment_RS_Cam003.jpg"),
  cdn("1 Bed - Type C_Living Dining.jpg"),
  cdn("1 Bed - Type D - Bedroom.jpg"),
  cdn("Bathroom .jpg"),
];

const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "60% / 40%";

// ======================================================
// DATA
// ======================================================
export const beachResidencesSiniyaData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Beach Residences at Siniya Island by Sobha | 1–3BR | From AED 1,446,596",
      description:
        "Beach Residences at Siniya Island by Sobha offers luxury beachfront apartments in Umm Al Quwain with 1, 2 & 3-bedroom units starting from AED 1,446,596 and handover in Q4 2027.",
      keywords:
        "Siniya Island Sobha, Beach Residences UAQ, Sobha island living, beachfront apartments",
      canonical: "/properties/apartments/sobha/beach-residences",
    },

    project: {
      name: "Beach Residences at Siniya Islands",
      developer: "Sobha Realty",
      location: "Siniya Island, Umm Al Quwain, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,446,596",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Apartments",
      units: "1BR, 2BR & 3BR",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Sobha Realty",
      rating: null,
    },

    intro: {
      title: "BEACH RESIDENCES — ISLAND LIVING AT SINIYA",
      paragraphs: [
        "Beach Residences at Siniya Islands by Sobha is a premium beachfront residential collection offering serene island living with direct beach access and refined coastal architecture.",
        `Apartments start from AED 1,446,596 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        {
          title: "Aquamarine Brochure",
          url: BROCHURE_AQUAMARINE,
          type: "main",
        },
        {
          title: "Coastline Brochure",
          url: BROCHURE_COASTLINE,
          type: "secondary",
        },
        {
          title: "Pristine Brochure",
          url: BROCHURE_PRISTINE,
          type: "secondary",
        },
        {
          title: "Starline Brochure",
          url: BROCHURE_STARLINE,
          type: "secondary",
        },
        {
          title: "Aquamarine Factbook",
          url: FACTBOOK_AQUAMARINE,
          type: "secondary",
        },
        { title: "Watch Teaser", url: VIDEO_TEASER, type: "video" },
        { title: "Starline Launch", url: VIDEO_STARLINE, type: "video" },
        { title: "Pristine Launch", url: VIDEO_PRISTINE, type: "video" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Beach Residences at Siniya Island",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 1,446,596",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "665.1 sq.ft",
          label: "Area From",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏝️",
          value: "Siniya Island",
          label: "Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Beach Residences",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "665.1 sq.ft",
            "Starting Price": "AED 1,446,596",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "727.21 sq.ft",
            "Starting Price": "AED 1,842,667",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1874.43 sq.ft",
            "Starting Price": "AED 4,954,169",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_AQUAMARINE,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Private Beach Access", icon: "🏖️", color: "#d7b46a" },
        { label: "Island Community", icon: "🏝️", color: "#d7b46a" },
        { label: "Resort-Style Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Luxury Interiors", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Beach Residences at Siniya Island",
      address: "Siniya Island, Umm Al Quwain, UAE",
      lat: 25.6088826,
      lng: 55.6326121,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access from UAQ mainland." },
        { icon: "🏝️", text: "Private island setting." },
        { icon: "🌊", text: "Direct beachfront lifestyle." },
      ],
    },

    cta: {
      title: "Interested in Beach Residences?",
      description:
        "Submit your details to receive availability, pricing, and official Sobha documents.",
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
        "شقق الشاطئ في جزيرة صينية من شوبا | 1–3 غرف | تبدأ من 1,446,596 درهم",
      description:
        "شقق الشاطئ في جزيرة صينية من شوبا توفر شقق فاخرة على الواجهة البحرية في أم القيوين بوحدات 1 و2 و3 غرف نوم تبدأ من 1,446,596 درهم مع التسليم في الربع الرابع 2027 وخطة سداد 60/40.",
      keywords:
        "جزيرة صينية شوبا، شقق الشاطئ أم القيوين، شقق على الشاطئ، شوبا جزيرة",
      canonical: "/properties/apartments/sobha/beach-residences",
    },

    project: {
      name: "شقق الشاطئ في جزيرة صينية",
      developer: "شوبا العقارية",
      location: "جزيرة صينية، أم القيوين، الإمارات",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,446,596 درهم",
      completionDate: "الربع الرابع 2027",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق",
      units: "1 و2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "شوبا العقارية",
      rating: null,
      // (EN doesn't set videoUrl here, so keep parity as-is)
    },

    intro: {
      title: "شقق الشاطئ — حياة جزيرية في جزيرة صينية",
      paragraphs: [
        "شقق الشاطئ في جزيرة صينية من شوبا هي مجموعة سكنية فاخرة على الواجهة البحرية توفر أسلوب حياة هادئ مع وصول مباشر إلى الشاطئ وتصميم ساحلي راقٍ.",
        `تبدأ الشقق من 1,446,596 درهم مع خطة سداد ${PAYMENT_PLAN} والتسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "كتيّب Aquamarine", url: BROCHURE_AQUAMARINE, type: "main" },
        {
          title: "كتيّب Coastline",
          url: BROCHURE_COASTLINE,
          type: "secondary",
        },
        { title: "كتيّب Pristine", url: BROCHURE_PRISTINE, type: "secondary" },
        { title: "كتيّب Starline", url: BROCHURE_STARLINE, type: "secondary" },
        {
          title: "كتاب الحقائق Aquamarine",
          url: FACTBOOK_AQUAMARINE,
          type: "secondary",
        },
        { title: "مشاهدة المقطع التشويقي", url: VIDEO_TEASER, type: "video" },
        { title: "إطلاق Starline", url: VIDEO_STARLINE, type: "video" },
        { title: "إطلاق Pristine", url: VIDEO_PRISTINE, type: "video" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "شقق الشاطئ في جزيرة صينية",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "1,446,596 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "665.1 قدم²",
          label: "المساحة تبدأ من",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏝️",
          value: "جزيرة صينية",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Beach Residences",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br", // ✅ IMPORTANT
          title: "غرفة نوم واحدة",
          bedrooms: 1, // ✅ parity
          specs: {
            "إجمالي المساحة": "665.1 قدم²",
            "السعر الابتدائي": "1,446,596 درهم",
            "موعد التسليم": "الربع الرابع 2027",
            "خطة السداد": PAYMENT_PLAN,
          },
          images: [FP_1BR],
          features: ["—"], // ✅ parity
        },
        {
          id: "2br", // ✅ IMPORTANT
          title: "غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "727.21 قدم²",
            "السعر الابتدائي": "1,842,667 درهم",
            "موعد التسليم": "الربع الرابع 2027",
            "خطة السداد": PAYMENT_PLAN,
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br", // ✅ IMPORTANT
          title: "3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1874.43 قدم²",
            "السعر الابتدائي": "4,954,169 درهم",
            "موعد التسليم": "الربع الرابع 2027",
            "خطة السداد": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_AQUAMARINE,
    },

    amenities: {
      title: "المميزات / المرافق",
      amenities: [
        { label: "دخول خاص للشاطئ", icon: "🏖️", color: "#d7b46a" },
        { label: "مجتمع على جزيرة", icon: "🏝️", color: "#d7b46a" },
        { label: "مسابح بطابع منتجع", icon: "🏊", color: "#d7b46a" },
        { label: "تشطيبات فاخرة", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "شقق الشاطئ في جزيرة صينية",
      address: "جزيرة صينية، أم القيوين، الإمارات",
      lat: 25.6088826,
      lng: 55.6326121,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول من البر الرئيسي لأم القيوين." },
        { icon: "🏝️", text: "بيئة جزيرة خاصة." },
        { icon: "🌊", text: "نمط حياة مباشر على الشاطئ." },
      ],
    },

    cta: {
      title: "مهتم بشقق الشاطئ؟",
      description:
        "أرسل بياناتك لاستلام التوافر والأسعار والملفات الرسمية من شوبا.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "تحميل المخططات", action: "download-floorplans" },
      ],
    },
  },
};

export default beachResidencesSiniyaData;
