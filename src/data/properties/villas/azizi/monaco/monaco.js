// src/data/properties/villas/azizi/monaco/azizi-monaco.js

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/monaco";

/**
 * ✅ Encodes spaces/special chars but preserves folder slashes.
 * Example: "6bhk/Monaco 6bhk ground.png"
 * -> "6bhk/Monaco%206bhk%20ground.png"
 */
const encodePath = (path) =>
  String(path)
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");

const cdn = (file) => `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodePath(file)}`;

/* -----------------------
  Official Docs (Bunny)
------------------------ */
const FACTSHEET_MM7 = cdn("6bhk/Factsheet - MM7.pdf");
const FACTSHEET_MM2 = cdn("8bhk/Factsheet - MM2.pdf");

const FLOORPLANS_PDF_MM7 = cdn("6bhk/Floorplans - MM 7.pdf");
const FLOORPLANS_PDF_MM2 = cdn("8bhk/Floorplans - MM 2.pdf");

/* -----------------------
  Floor plan images (AS YOU SAID)
------------------------ */
const PLAN_6_BASEMENT = cdn("6bhk/monaco-6bhk-basement.png");
const PLAN_6_GROUND = cdn("6bhk/Monaco 6bhk ground.png");
const PLAN_6_FIRST = cdn("6bhk/Monaco 6bhk first.png");
const PLAN_6_ROOF = cdn("6bhk/Monaco 6bhk roof.png");

const PLAN_8_BASEMENT = cdn("8bhk/Monaco 8bhk basement.png");
const PLAN_8_GROUND = cdn("8bhk/Monaco 8bhk ground.png");
const PLAN_8_FIRST = cdn("8bhk/Monaco 8bhk first.png");
const PLAN_8_ROOF = cdn("8bhk/Monaco 8bhk roof.png");

/* -----------------------
  Areas (from factsheets you provided earlier)
------------------------ */
const AREAS_6 = {
  basement: "7,878.03 sq.ft",
  ground: "6,307.96 sq.ft",
  first: "4,829.70 sq.ft",
  roof: "2,256.60 sq.ft",
  total: "21,272.29 sq.ft",
};

const AREAS_8 = {
  basement: "14,648.39 sq.ft",
  ground: "9,474.72 sq.ft",
  first: "8,054.53 sq.ft",
  roof: "6,825.61 sq.ft",
  total: "39,003.24 sq.ft",
};

/* -----------------------
  Unknowns
------------------------ */
const HANDOVER_UNKNOWN_EN = "Not Available";
const PAYMENT_UNKNOWN_EN = "Not Available";

const HANDOVER_UNKNOWN_AR = "غير متوفر";
const PAYMENT_UNKNOWN_AR = "غير متوفر";

/* -----------------------
  Gallery (kept same)
------------------------ */
const GALLERY = [
  cdn("6bhk/Villa 1A - Entire Villa Shot.jpg"),
  cdn("6bhk/Villa 1A - Aerial Shot.jpg"),
  cdn("6bhk/Villa 1A - Lagoon View +.jpg"),
  cdn("6bhk/Villa 1A - Pool Shot.png"),
  cdn("6bhk/BF_Living1.jpg"),
  cdn("6bhk/BF_gym1.jpg"),
  cdn("6bhk/BF_hammam1.jpg"),
  cdn("6bhk/Rooftop_Gaming.jpg"),
  cdn("8bhk/4b_Aerial shot_8k.jpg"),
  cdn("8bhk/4b_Entire shot_8k.jpg"),
  cdn("8bhk/4b_Lagoon shot_8k.jpg"),
  cdn("8bhk/4B Spa Jacuzzi.jpg"),
  cdn("8bhk/4B Cinema.jpg"),
];

/* -----------------------
  Export
------------------------ */
export const aziziMonacoData = {
  en: {
    seo: {
      title: "Azizi Monaco | Ultra-Luxury 6 & 8 Bedroom Villas (MM7 & MM2)",
      description:
        "Azizi Monaco is an ultra-luxury waterfront villa collection in Dubai South offering 6 & 8 bedroom mansions (MM7 & MM2) with official floor plan variants (basement/ground/first/roof) and total built-up areas.",
      keywords:
        "Azizi Monaco, Azizi Developments, MM7, MM2, 6 bedroom villa, 8 bedroom villa, Dubai South, luxury mansions, waterfront villas",
      canonical: "/properties/villas/azizi/monaco",
    },

    project: {
      name: "Azizi Monaco",
      developer: "Azizi Developments",
      location: "Dubai South, Dubai, UAE",
      status: "Off-plan",
      startingPrice: "AED 45,490,000",
      completionDate: HANDOVER_UNKNOWN_EN,
      paymentPlan: PAYMENT_UNKNOWN_EN,
      type: "Ultra-Luxury Villas",
      units: "6 & 8 Bedroom Mansions (MM7 & MM2)",
    },

    hero: {
      backgroundUrl: cdn("8bhk/MM2 tour video.mp4"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "ICONIC ULTRA-LUXURY LIVING",
      paragraphs: [
        "Azizi Monaco is a signature ultra-luxury waterfront villa collection featuring expansive 6 and 8-bedroom mansions (MM7 & MM2).",
        "Each residence is designed for private resort-style living, with dedicated wellness and entertainment spaces across multiple floors.",
        "Download the official factsheets and floorplans below for the exact built-up areas and layouts.",
      ],
      brochures: [
        { title: "6BHK Factsheet", url: FACTSHEET_MM7, type: "main" },
        { title: "8BHK Factsheet", url: FACTSHEET_MM2, type: "secondary" },
        {
          title: "6BHK Floorplans",
          url: FLOORPLANS_PDF_MM7,
          type: "floorplans",
        },
        {
          title: "8BHK Floorplans",
          url: FLOORPLANS_PDF_MM2,
          type: "floorplans",
        },
      ],
      imgUrl: cdn("6bhk/Villa 1A - Lagoon Perspective Shot.jpg"),
      imgAlt: "Azizi Monaco lagoon villa",
      floatingCards: [
        { icon: "💎", value: "Ultra-Luxury", label: "Segment" },
        { icon: "📐", value: "Up to 39,003.24 sq.ft", label: "Total BUA" },
        { icon: "🌊", value: "Waterfront Lifestyle", label: "Experience" },
      ],
    },

    gallery: {
      title: "Azizi Monaco Gallery",
      slides: GALLERY,
      projectTag: "Azizi Monaco",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "6bhk",
          title: "6 Bedroom Mansion",
          bedrooms: 6,
          variants: [
            {
              id: "basement",
              shortLabel: "Basement",
              fullTitle: "6BHK Mansion – Basement Floor Plan",
              specs: {
                "Total Area": AREAS_6.basement,
                "Starting Price": "AED 45,490,000",
                Handover: HANDOVER_UNKNOWN_EN,
                "Payment Plan": PAYMENT_UNKNOWN_EN,
              },
              images: [PLAN_6_BASEMENT],
              features: ["—"],
            },
            {
              id: "ground",
              shortLabel: "Ground",
              fullTitle: "6BHK Mansion – Ground Floor Plan",
              specs: {
                "Total Area": AREAS_6.ground,
                "Starting Price": "AED 45,490,000",
                Handover: HANDOVER_UNKNOWN_EN,
                "Payment Plan": PAYMENT_UNKNOWN_EN,
              },
              images: [PLAN_6_GROUND],
              features: ["—"],
            },
            {
              id: "first",
              shortLabel: "First",
              fullTitle: "6BHK Mansion – First Floor Plan",
              specs: {
                "Total Area": AREAS_6.first,
                "Starting Price": "AED 45,490,000",
                Handover: HANDOVER_UNKNOWN_EN,
                "Payment Plan": PAYMENT_UNKNOWN_EN,
              },
              images: [PLAN_6_FIRST],
              features: ["—"],
            },
            {
              id: "roof",
              shortLabel: "Roof",
              fullTitle: "6BHK Mansion – Roof Floor Plan",
              specs: {
                "Total Area": AREAS_6.roof,
                "Starting Price": "AED 45,490,000",
                Handover: HANDOVER_UNKNOWN_EN,
                "Payment Plan": PAYMENT_UNKNOWN_EN,
              },
              images: [PLAN_6_ROOF],
              features: ["—"],
            },
          ],
          images: [PLAN_6_GROUND],
          features: ["—"],
        },

        {
          id: "8bhk",
          title: "8 Bedroom Mansion",
          bedrooms: 8,
          variants: [
            {
              id: "basement",
              shortLabel: "Basement",
              fullTitle: "8BHK Mansion – Basement Floor Plan",
              specs: {
                "Total Area": AREAS_8.basement,
                "Starting Price": "AED 203,983,000",
                Handover: HANDOVER_UNKNOWN_EN,
                "Payment Plan": PAYMENT_UNKNOWN_EN,
              },
              images: [PLAN_8_BASEMENT],
              features: ["—"],
            },
            {
              id: "ground",
              shortLabel: "Ground",
              fullTitle: "8BHK Mansion – Ground Floor Plan",
              specs: {
                "Total Area": AREAS_8.ground,
                "Starting Price": "AED 203,983,000",
                Handover: HANDOVER_UNKNOWN_EN,
                "Payment Plan": PAYMENT_UNKNOWN_EN,
              },
              images: [PLAN_8_GROUND],
              features: ["—"],
            },
            {
              id: "first",
              shortLabel: "First",
              fullTitle: "8BHK Mansion – First Floor Plan",
              specs: {
                "Total Area": AREAS_8.first,
                "Starting Price": "AED 203,983,000",
                Handover: HANDOVER_UNKNOWN_EN,
                "Payment Plan": PAYMENT_UNKNOWN_EN,
              },
              images: [PLAN_8_FIRST],
              features: ["—"],
            },
            {
              id: "roof",
              shortLabel: "Roof",
              fullTitle: "8BHK Mansion – Roof Floor Plan",
              specs: {
                "Total Area": AREAS_8.roof,
                "Starting Price": "AED 203,983,000",
                Handover: HANDOVER_UNKNOWN_EN,
                "Payment Plan": PAYMENT_UNKNOWN_EN,
              },
              images: [PLAN_8_ROOF],
              features: ["—"],
            },
          ],
          images: [PLAN_8_GROUND],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_MM7,
    },

    cta: {
      title: "Interested in Azizi Monaco?",
      description:
        "Contact us to receive availability, pricing details, and full official documentation for MM7 and MM2.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheets", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي موناكو | فلل فاخرة 6 و8 غرف (MM7 & MM2)",
      description:
        "عزيزي موناكو يقدّم فلل فاخرة للغاية في دبي الجنوب (MM7 وMM2) مع مخططات مفصّلة حسب الطوابق (بدروم/أرضي/أول/سطح) وإجمالي المساحات المبنية.",
      keywords:
        "عزيزي موناكو, عزيزي للتطوير, MM7, MM2, فيلا 6 غرف, فيلا 8 غرف, دبي الجنوب, فلل فاخرة",
      canonical: "/properties/villas/azizi/monaco",
    },

    project: {
      name: "عزيزي موناكو",
      developer: "عزيزي للتطوير العقاري",
      location: "دبي الجنوب، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "45,490,000 درهم",
      completionDate: HANDOVER_UNKNOWN_AR,
      paymentPlan: PAYMENT_UNKNOWN_AR,
      type: "فلل فاخرة للغاية",
      units: "قصور 6 و8 غرف (MM7 & MM2)",
    },

    hero: {
      backgroundUrl: cdn("8bhk/MM2 tour video.mp4"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "أسلوب حياة فائق الفخامة",
      paragraphs: [
        "عزيزي موناكو هو مشروع فلل فاخرة للغاية على الواجهة المائية يضم قصور 6 و8 غرف نوم (MM7 وMM2).",
        "تم تصميم كل قصر لتجربة سكنية بمستوى منتجع خاص مع مساحات ترفيه وعافية موزعة على عدة طوابق.",
        "حمّل الفاكت شيت والمخططات الرسمية أدناه لمعرفة المساحات الدقيقة وتوزيع الطوابق.",
      ],
      brochures: [
        { title: "فاكت شيت 6 غرف", url: FACTSHEET_MM7, type: "main" },
        { title: "فاكت شيت 8 غرف", url: FACTSHEET_MM2, type: "secondary" },
        { title: "مخططات 6 غرف", url: FLOORPLANS_PDF_MM7, type: "floorplans" },
        { title: "مخططات 8 غرف", url: FLOORPLANS_PDF_MM2, type: "floorplans" },
      ],
      imgUrl: cdn("6bhk/Villa 1A - Lagoon Perspective Shot.jpg"),
      imgAlt: "فلل عزيزي موناكو",
      floatingCards: [
        { icon: "💎", value: "فائق الفخامة", label: "الفئة" },
        { icon: "📐", value: "حتى 39,003.24 قدم²", label: "إجمالي BUA" },
        { icon: "🌊", value: "واجهة مائية", label: "نمط الحياة" },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "عزيزي موناكو",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "6bhk",
          title: "قصر 6 غرف",
          bedrooms: 6,
          variants: [
            {
              id: "basement",
              shortLabel: "بدروم",
              fullTitle: "قصر 6 غرف – مخطط طابق البدروم",
              specs: {
                "المساحة الإجمالية": AREAS_6.basement.replace("sq.ft", "قدم²"),
                "السعر الابتدائي": "45,490,000 درهم",
                "موعد التسليم": HANDOVER_UNKNOWN_AR,
                "خطة الدفع": PAYMENT_UNKNOWN_AR,
              },
              images: [PLAN_6_BASEMENT],
              features: ["—"],
            },
            {
              id: "ground",
              shortLabel: "أرضي",
              fullTitle: "قصر 6 غرف – مخطط الطابق الأرضي",
              specs: {
                "المساحة الإجمالية": AREAS_6.ground.replace("sq.ft", "قدم²"),
                "السعر الابتدائي": "45,490,000 درهم",
                "موعد التسليم": HANDOVER_UNKNOWN_AR,
                "خطة الدفع": PAYMENT_UNKNOWN_AR,
              },
              images: [PLAN_6_GROUND],
              features: ["—"],
            },
            {
              id: "first",
              shortLabel: "أول",
              fullTitle: "قصر 6 غرف – مخطط الطابق الأول",
              specs: {
                "المساحة الإجمالية": AREAS_6.first.replace("sq.ft", "قدم²"),
                "السعر الابتدائي": "45,490,000 درهم",
                "موعد التسليم": HANDOVER_UNKNOWN_AR,
                "خطة الدفع": PAYMENT_UNKNOWN_AR,
              },
              images: [PLAN_6_FIRST],
              features: ["—"],
            },
            {
              id: "roof",
              shortLabel: "سطح",
              fullTitle: "قصر 6 غرف – مخطط طابق السطح",
              specs: {
                "المساحة الإجمالية": AREAS_6.roof.replace("sq.ft", "قدم²"),
                "السعر الابتدائي": "45,490,000 درهم",
                "موعد التسليم": HANDOVER_UNKNOWN_AR,
                "خطة الدفع": PAYMENT_UNKNOWN_AR,
              },
              images: [PLAN_6_ROOF],
              features: ["—"],
            },
          ],
          images: [PLAN_6_GROUND],
          features: ["—"],
        },

        {
          id: "8bhk",
          title: "قصر 8 غرف",
          bedrooms: 8,
          variants: [
            {
              id: "basement",
              shortLabel: "بدروم",
              fullTitle: "قصر 8 غرف – مخطط طابق البدروم",
              specs: {
                "المساحة الإجمالية": AREAS_8.basement.replace("sq.ft", "قدم²"),
                "السعر الابتدائي": "203,983,000 درهم",
                "موعد التسليم": HANDOVER_UNKNOWN_AR,
                "خطة الدفع": PAYMENT_UNKNOWN_AR,
              },
              images: [PLAN_8_BASEMENT],
              features: ["—"],
            },
            {
              id: "ground",
              shortLabel: "أرضي",
              fullTitle: "قصر 8 غرف – مخطط الطابق الأرضي",
              specs: {
                "المساحة الإجمالية": AREAS_8.ground.replace("sq.ft", "قدم²"),
                "السعر الابتدائي": "203,983,000 درهم",
                "موعد التسليم": HANDOVER_UNKNOWN_AR,
                "خطة الدفع": PAYMENT_UNKNOWN_AR,
              },
              images: [PLAN_8_GROUND],
              features: ["—"],
            },
            {
              id: "first",
              shortLabel: "أول",
              fullTitle: "قصر 8 غرف – مخطط الطابق الأول",
              specs: {
                "المساحة الإجمالية": AREAS_8.first.replace("sq.ft", "قدم²"),
                "السعر الابتدائي": "203,983,000 درهم",
                "موعد التسليم": HANDOVER_UNKNOWN_AR,
                "خطة الدفع": PAYMENT_UNKNOWN_AR,
              },
              images: [PLAN_8_FIRST],
              features: ["—"],
            },
            {
              id: "roof",
              shortLabel: "سطح",
              fullTitle: "قصر 8 غرف – مخطط طابق السطح",
              specs: {
                "المساحة الإجمالية": AREAS_8.roof.replace("sq.ft", "قدم²"),
                "السعر الابتدائي": "203,983,000 درهم",
                "موعد التسليم": HANDOVER_UNKNOWN_AR,
                "خطة الدفع": PAYMENT_UNKNOWN_AR,
              },
              images: [PLAN_8_ROOF],
              features: ["—"],
            },
          ],
          images: [PLAN_8_GROUND],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_MM7,
    },

    cta: {
      title: "هل أنت مهتم بعزيزي موناكو؟",
      description:
        "تواصل معنا للحصول على التوافر والأسعار والتفاصيل الرسمية لموديلات MM7 وMM2.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الفاكت شيت", action: "download-brochure" },
      ],
    },
  },
};

export default aziziMonacoData;
