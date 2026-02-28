// src/data/properties/villastaraf/terra-golf-phase-2/terraGolfPhase2Data.js

/**
 * ✅ IMPORTANT
 * Bunny folder has a TRAILING SPACE:
 * "taraf/terra-golf-phase-2 /"
 * So we keep it encoded in DIR as "%20".
 */

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const TERRA_GOLF_PHASE_2_DIR = "/taraf/terra-golf-phase-2%20";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${TERRA_GOLF_PHASE_2_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Blueprint: single source of truth for payment plan
const PAYMENT_PLAN = "50% / 50%";

// ✅ Docs
const BROCHURE_MAIN = cdn("Terra Golf Collection Phase 2.pdf");

// ✅ Floorplans (exact filenames)
const FP_TH_FIRST = cdn("Terragolf TOWNHOUSE - First floor.png");
const FP_TH_SECOND = cdn("Terragolf TOWNHOUSE - Second Floor.png");

const FP_VILLA_BASEMENT = cdn("Terragolf Villa - Basement  floor.png"); // ✅ double space
const FP_VILLA_GROUND = cdn("Terragolf Villa - Ground floor.png");
const FP_VILLA_FIRST = cdn("Terragolf Villa - First floor.png");
const FP_VILLA_SECOND = cdn("Terragolf villa - Second Floor.png"); // ✅ lowercase villa

// ✅ Visuals
const HERO_BG = cdn("Terra_EXT_Cam05_OP4_Final.jpg");
const DESC_IMG = cdn("Terra_Topview_Final.jpg");

export const terraGolfPhase2TarafData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "Terra Golf Collection Phase 2 by Taraf | 6BR Villas & Townhouses in Jumeirah Golf Estates",
      description:
        "Terra Golf Collection Phase 2 by Taraf offers a limited selection of golf-community homes in Jumeirah Golf Estates with handover in Q4 2027 and a structured 10/40/50 payment plan.",
      keywords:
        "Terra Golf Collection Phase 2, Taraf, Jumeirah Golf Estates, Dubai villas, 6 bedroom villa, 6 bedroom townhouse",
      canonical: "/properties/villas/taraf/terra-golf-phase-2",
    },

    project: {
      name: "Terra Golf Collection Phase 2",
      developer: "Taraf Holding",
      location: "Jumeirah Golf Estates, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 10,605,000",
      completionDate: "Q4 2027",

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN,

      type: "Residential",
      units: "6BR Villas & 6BR Townhouses",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/taraf.webp",
      companyName: "Taraf",
      rating: null,
    },

    intro: {
      title: "GOLF-COMMUNITY LIVING IN JUMEIRAH GOLF ESTATES",
      paragraphs: [
        "Terra Golf Collection Phase 2 by Taraf is a limited residential release in Jumeirah Golf Estates, designed for refined living surrounded by world-class greens.",
        "The collection offers 6-bedroom townhouses and stand-alone villas with contemporary layouts and an elevated community lifestyle.",
        `Handover is targeted for Q4 2027 with a structured payment plan: ${PAYMENT_PLAN}.`,
      ],
      brochures: [
        {
          title: "Project Brochure (PDF)",
          url: BROCHURE_MAIN,
          type: "main",
          icon: "📄",
          color: "#3A7BD5",
          category: "Overview",
          fileName: "Terra Golf Collection Phase 2.pdf",
          description: "Project overview, floor plans & key details",
        },
      ],
      imgUrl: DESC_IMG,
      imgAlt: "Terra Golf Collection Phase 2 top view",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "⛳",
          value: "JGE",
          label: "Golf Community",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "Handover",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "💳",
          value: "10/40/50",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: [
        HERO_BG,
        cdn("Terra_ext_cam1_Final.jpg"),
        cdn("Terra_Semi_View02_FN02.jpg"),
        cdn("Terra_Stand alone type 2_Balcony_Cam04_Final.jpg"),
        DESC_IMG,
      ],
      projectTag: "Terra Golf Phase 2",
    },

    // ✅ Blueprint-aligned: paymentPlan inside EVERY specs object
    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "6br-townhouse",
          bedrooms: 6,
          shortLabel: "6 BR Townhouse",
          title: "6 Bedroom Townhouse",
          variants: [
            {
              id: "th-p05-first",
              shortLabel: "First Floor",
              fullTitle: "6 Bedroom Townhouse — First Floor",
              specs: {
                Unit: "6 BEDROOM TOWNHOUSE",
                "Total Range": "On Request",
                "Starting Price": "AED 10,605,000",
                Handover: "Q4 2027",
                paymentPlan: PAYMENT_PLAN,
              },
              images: [FP_TH_FIRST],
              brochureUrl: BROCHURE_MAIN,
              features: ["—"],
            },
            {
              id: "th-p05-second",
              shortLabel: "Second Floor",
              fullTitle: "6 Bedroom Townhouse — Second Floor",
              specs: {
                Unit: "6 BEDROOM TOWNHOUSE",
                "Total Range": "On Request",
                "Starting Price": "AED 10,605,000",
                Handover: "Q4 2027",
                paymentPlan: PAYMENT_PLAN,
              },
              images: [FP_TH_SECOND],
              features: ["—"],
            },
          ],
        },
        {
          id: "6br-villa",
          bedrooms: 6,
          shortLabel: "6 BR Villa",
          title: "6 Bedroom Villa",
          variants: [
            {
              id: "villa-basement",
              shortLabel: "Basement",
              fullTitle: "6 Bedroom Villa — Basement",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Range": "On Request",
                "Starting Price": "AED 21,261,450",
                Handover: "Q4 2027",
                paymentPlan: PAYMENT_PLAN,
              },
              images: [FP_VILLA_BASEMENT],
              brochureUrl: BROCHURE_MAIN,
              features: ["—"],
            },
            {
              id: "villa-ground",
              shortLabel: "Ground Floor",
              fullTitle: "6 Bedroom Villa — Ground Floor",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Range": "On Request",
                "Starting Price": "AED 21,261,450",
                Handover: "Q4 2027",
                paymentPlan: PAYMENT_PLAN,
              },
              images: [FP_VILLA_GROUND],
              features: ["—"],
            },
            {
              id: "villa-first",
              shortLabel: "First Floor",
              fullTitle: "6 Bedroom Villa — First Floor",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Range": "On Request",
                "Starting Price": "AED 21,261,450",
                Handover: "Q4 2027",
                paymentPlan: PAYMENT_PLAN,
              },
              images: [FP_VILLA_FIRST],
              features: ["—"],
            },
            {
              id: "villa-second",
              shortLabel: "Second / Roof",
              fullTitle: "6 Bedroom Villa — Second Floor / Roof",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Range": "On Request",
                "Starting Price": "AED 21,261,450",
                Handover: "Q4 2027",
                paymentPlan: PAYMENT_PLAN,
              },
              images: [FP_VILLA_SECOND],
              features: ["—"],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_MAIN,
    },

    amenities: {
      title: "Lifestyle Amenities",
      amenities: [
        { label: "ROOFTOP INFINITY POOL", icon: "🏊", color: "#d7b46a" },
        { label: "SEMI-BASKETBALL COURT", icon: "🏀", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Terra Golf Collection Phase 2",
      address:
        "Me'aisem First, Jumeirah Golf Estates, Dubai, United Arab Emirates",
      lat: 25.0241111,
      lng: 55.2036561,
      zoom: 12,
      proximityFeatures: [
        {
          icon: "⛳",
          text: "Located inside Jumeirah Golf Estates (Me'aisem First)",
        },
        {
          icon: "🏙️",
          text: "Prestigious golf-community lifestyle with easy city access",
        },
      ],
    },

    nearbyAttractions: {
      title: "Nearby",
      attractions: [
        { name: "Dubai Marina", distance: null, time: "26 mins", icon: "⚓" },
        { name: "Downtown Dubai", distance: null, time: "28 mins", icon: "🏙️" },
        {
          name: "Al Maktoum Intl. Airport",
          distance: null,
          time: "30 mins",
          icon: "✈️",
        },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title:
        "تيرا جولف كوليكشن المرحلة الثانية من تراف | فلل وتاون هاوس 6 غرف في جميرا جولف إستيتس",
      description:
        "تيرا جولف كوليكشن المرحلة الثانية من تراف تقدم مجموعة محدودة داخل جميرا جولف إستيتس مع تسليم الربع الرابع 2027 وخطة دفع 10/40/50.",
      keywords:
        "تيرا جولف كوليكشن المرحلة الثانية, تراف, جميرا جولف إستيتس, فلل دبي, تاون هاوس 6 غرف",
      canonical: "/properties/villas/taraf/terra-golf-phase-2",
    },

    project: {
      name: "تيرا جولف كوليكشن المرحلة الثانية",
      developer: "Taraf Holding",
      location: "جميرا جولف إستيتس، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "10,605,000 درهم",
      completionDate: "الربع الرابع 2027",

      // ✅ Blueprint: paymentPlan in project
      paymentPlan: PAYMENT_PLAN,

      type: "سكني",
      units: "فلل 6 غرف + تاون هاوس 6 غرف",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/taraf.webp",
      companyName: "تراف",
      rating: null,
    },

    intro: {
      title: "حياة راقية في مجتمع جولف داخل جميرا جولف إستيتس",
      paragraphs: [
        "تيرا جولف كوليكشن المرحلة الثانية من تراف هي مجموعة سكنية محدودة ضمن جميرا جولف إستيتس، مصممة لأسلوب حياة هادئ وراقٍ وسط المساحات الخضراء.",
        "تضم المجموعة تاون هاوس 6 غرف وفلل مستقلة 6 غرف بتصاميم عصرية ومساحات مناسبة للعائلة.",
        `التسليم مستهدف في الربع الرابع 2027 مع خطة دفع: ${PAYMENT_PLAN}.`,
      ],
      brochures: [
        {
          title: "كتيّب المشروع (PDF)",
          url: BROCHURE_MAIN,
          type: "main",
          icon: "📄",
          color: "#3A7BD5",
          category: "نظرة عامة",
          fileName: "Terra Golf Collection Phase 2.pdf",
          description: "نظرة عامة + مخططات + تفاصيل أساسية",
        },
      ],
      imgUrl: DESC_IMG,
      imgAlt: "منظر علوي لمشروع تيرا جولف المرحلة الثانية",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "⛳",
          value: "JGE",
          label: "مجتمع جولف",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🗓️",
          value: "Q4 2027",
          label: "التسليم",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "💳",
          value: "10/40/50",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: [
        HERO_BG,
        cdn("Terra_ext_cam1_Final.jpg"),
        cdn("Terra_Semi_View02_FN02.jpg"),
        cdn("Terra_Stand alone type 2_Balcony_Cam04_Final.jpg"),
        DESC_IMG,
      ],
      projectTag: "تيرا جولف المرحلة الثانية",
    },

    // ✅ Blueprint-aligned: payment plan inside every specs
    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "6br-townhouse",
          bedrooms: 6,
          shortLabel: "تاون هاوس 6 غرف",
          title: "تاون هاوس 6 غرف نوم",
          variants: [
            {
              id: "th-p05-first",
              shortLabel: "الأول",
              fullTitle: "تاون هاوس 6 غرف — الطابق الأول",
              specs: {
                "نوع الوحدة": "تاون هاوس 6 غرف نوم",
                "نطاق المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "10,605,000 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": PAYMENT_PLAN,
              },
              images: [FP_TH_FIRST],
              brochureUrl: BROCHURE_MAIN,
              features: ["—"],
            },
            {
              id: "th-p05-second",
              shortLabel: "الثاني",
              fullTitle: "تاون هاوس 6 غرف — الطابق الثاني",
              specs: {
                "نوع الوحدة": "تاون هاوس 6 غرف نوم",
                "نطاق المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "10,605,000 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": PAYMENT_PLAN,
              },
              images: [FP_TH_SECOND],
              features: ["—"],
            },
          ],
        },
        {
          id: "6br-villa",
          bedrooms: 6,
          shortLabel: "فيلا 6 غرف",
          title: "فيلا 6 غرف نوم",
          variants: [
            {
              id: "villa-basement",
              shortLabel: "القبو",
              fullTitle: "فيلا 6 غرف — القبو",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "نطاق المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "21,261,450 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": PAYMENT_PLAN,
              },
              images: [FP_VILLA_BASEMENT],
              brochureUrl: BROCHURE_MAIN,
              features: ["—"],
            },
            {
              id: "villa-ground",
              shortLabel: "الأرضي",
              fullTitle: "فيلا 6 غرف — الطابق الأرضي",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "نطاق المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "21,261,450 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": PAYMENT_PLAN,
              },
              images: [FP_VILLA_GROUND],
              features: ["—"],
            },
            {
              id: "villa-first",
              shortLabel: "الأول",
              fullTitle: "فيلا 6 غرف — الطابق الأول",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "نطاق المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "21,261,450 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": PAYMENT_PLAN,
              },
              images: [FP_VILLA_FIRST],
              features: ["—"],
            },
            {
              id: "villa-second",
              shortLabel: "الثاني / السطح",
              fullTitle: "فيلا 6 غرف — الطابق الثاني / السطح",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "نطاق المساحة الإجمالية": "عند الطلب",
                "السعر الابتدائي": "21,261,450 درهم",
                "موعد التسليم": "الربع الرابع 2027",
                "خطة الدفع": PAYMENT_PLAN,
              },
              images: [FP_VILLA_SECOND],
              features: ["—"],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_MAIN,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "مسبح إنفينيتي على السطح", icon: "🏊", color: "#d7b46a" },
        { label: "ملعب كرة سلة نصف", icon: "🏀", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "تيرا جولف كولكشن – المرحلة الثانية",
      address:
        "معيصم الأولى (Me'aisem First)، جميرا جولف إستيتس، دبي، الإمارات العربية المتحدة",
      lat: 25.0241111,
      lng: 55.2036561,
      zoom: 12,
      proximityFeatures: [
        { icon: "⛳", text: "يقع داخل جميرا جولف إستيتس (منطقة معيصم الأولى)" },
        {
          icon: "🏙️",
          text: "أسلوب حياة راقٍ ضمن مجتمع جولف مع سهولة الوصول لمناطق دبي الرئيسية",
        },
      ],
    },

    nearbyAttractions: {
      title: "أماكن قريبة",
      attractions: [
        { name: "دبي مارينا", distance: null, time: "26 دقيقة", icon: "⚓" },
        {
          name: "داون تاون دبي",
          distance: null,
          time: "28 دقيقة",
          icon: "🏙️",
        },
        {
          name: "مطار آل مكتوم الدولي",
          distance: null,
          time: "30 دقيقة",
          icon: "✈️",
        },
      ],
    },
  },
};

export default terraGolfPhase2TarafData;
