// src/data/properties/apartments/damac/damac-bay/damac-bay.js
// ✅ BASE = https://luxury-real-estate-media.b-cdn.net
// ✅ Uses ONLY your uploaded Bunny filenames (ignores .DS_Store + folders)
// ✅ Same blueprint you approved (EN + AR)
// ✅ Hero background = your uploaded video (mp4)
// ✅ Payment plan image included
// ✅ FloorPlans contains ONLY: Total Area / Starting Price / Handover / Payment Plan
// ✅ Floorplan images: 1BR / 3BR / 4BR / 5BR (EXACT filenames you listed)
// ✅ Location lat/lng taken exactly from your Google Maps pin

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/damac/damac-bay";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames)
const BROCHURE_PDF = cdn("Damac Bay_DG_Brochure.pdf");
const PAYMENT_PLAN_IMG = cdn("Damac Bay Payment plan.jpg");
const HERO_VIDEO = cdn("Damac Bay Presentation - Final(1).mp4");

// ✅ Floorplan Images (EXACT filenames you uploaded)
const FP_1BR = cdn("Damac bay 1br floor plan.jpg.jpeg");
const FP_3BR = cdn("damac bay 3br floor plan.png");
const FP_4BR = cdn("damac bay 4br floor plan.webp");
const FP_5BR = cdn("damac bay 5br floor plan.webp");

// ✅ Gallery images (EXACT filenames)
const GALLERY = [
  cdn("DAMAC Bay view 01_2301120.jpg"),
  cdn("DAMAC Bay _Night View_2301120 R002.jpg"),
  cdn("DAMAC Bay- Sea View 01.jpg"),
  cdn("DAMAC Bay- Sea View 01 crop.jpg"),
  cdn("Dubai harbour view 01_230114.jpg"),
  cdn("Dubai Harbour - Look Up View.jpg"),
  cdn("Dubai Harbour - Look Up View (1).jpg"),
  cdn("Dubai Harbour - Amenities Pool View 01 (1).jpg"),

  cdn("DAMAC Bay - Look Down View 01.jpg"),
  cdn("DAMAC Bay - Look Up View 02.jpg"),
  cdn("DAMAC Bay - Amenities Pool View 01.jpg"),
  cdn("DAMAC Bay - Opera Roof View.jpg"),

  cdn("DAMAC Bay Roof view 01_230114.jpg"),
  cdn("DAMAC Bay Roof view-02_230114.jpg"),

  cdn("DAMAC Bay - Work in the Sky Daytime.jpg"),
  cdn("DAMAC Bay - Work in the sky - Party pods evening.jpg"),
  cdn("DAMAC Bay - Snorkeling Shot 02.jpg"),
  cdn("Damac Bay Jungle Oasis_230123.jpg"),

  cdn("Family Room (1).jpg"),
  cdn("Damac Bay_3Bed_Living Cam-01_20230124_A.jpg"),
  cdn("Damac Bay_3Bed_Living Cam-02_20230124_A.jpg"),
  cdn("DAMAC Bay 5bd balc_01_230117.jpg"),

  cdn("Cam 01-06.jpg"),
  cdn("Cam 03-06.jpg"),
  cdn("Cam 04-06.jpg"),
  cdn("Cam 06-06.jpg"),
  cdn("Cam 07-06.jpg"),
  cdn("Cam 08-06.jpg"),
  cdn("Cam 09-06.jpg"),

  cdn("1-2.jpg"),
  cdn("2-2.jpg"),
  cdn("3-2.jpg"),
  cdn("4-2.jpg"),
  cdn("5-2.jpg"),
  cdn("6-2.jpg"),
  cdn("7-2.jpg"),
  cdn("8-2.jpg"),
  cdn("9-2.jpg"),
  cdn("10-2.jpg"),
  cdn("11-2.jpg"),
];

export const damacBayData = {
  en: {
    seo: {
      title:
        "DAMAC Bay by Cavalli | Branded Waterfront Residences in Dubai Harbour",
      description:
        "DAMAC Bay by Cavalli is a couture-branded waterfront residential address in Dubai Harbour, offering statement living with open sea views, marina energy, and fast access to Dubai Marina, JBR, and Palm Jumeirah—crafted for end-users and investors targeting Dubai’s rare prime coastal supply.",
      keywords:
        "DAMAC Bay by Cavalli, Dubai Harbour, Cavalli branded residences, luxury waterfront apartments Dubai, 40/60 payment plan, Q3 2027, penthouse Dubai Harbour",
      canonical: "/properties/apartments/damac/damac-bay",
    },

    project: {
      name: "DAMAC Bay by Cavalli",
      developer: "DAMAC Properties",
      location: "Dubai Harbour, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 3,939,000",
      completionDate: "Q3 2027",
      paymentPlan: "40/60",
      type: "Branded Waterfront Residences",
      units: "1BR, 3BR + 4BR & 5BR Penthouses",
    },

    hero: {
      // ✅ Video hero (your UI should render <video> when it sees .mp4)
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      rating: null,
    },

    intro: {
      title: "A COUTURE COASTAL ADDRESS IN DUBAI HARBOUR",
      paragraphs: [
        "DAMAC Bay by Cavalli is positioned in Dubai Harbour—one of the city’s most premium coastal districts, designed around a marina lifestyle and elevated by uninterrupted sea outlooks. The location is a key advantage: you’re moments from Dubai Marina and JBR, with direct connectivity to Sheikh Zayed Road, while still enjoying a quieter, resort-style waterfront environment.",
        "This is not “just” another tower by the sea. The development is built around branded identity, bold visual language, and experience-led amenities, with residences planned to capture horizon lines, skyline angles, and the coastal energy that drives premium demand in Dubai Harbour. For end-users, it’s a lifestyle upgrade; for investors, it’s a scarcity-driven proposition in a limited-supply prime waterfront zone.",
        "Below you’ll find the official brochure, your payment plan image, the full gallery built using your exact BunnyCDN filenames, and the floor plan section in the strict 4-field format we agreed on—complete with the exact floor plan images you uploaded for 1BR, 3BR, 4BR penthouse, and 5BR penthouse.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Payment Plan (Image)",
          url: PAYMENT_PLAN_IMG,
          type: "secondary",
        },
      ],
      imgUrl: cdn("DAMAC Bay - Look Down View 01.jpg"),
      imgAlt: "DAMAC Bay by Cavalli waterfront view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3,939,000",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1303.51 sq.ft",
          label: "1BR Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "Dubai Harbour",
          label: "Waterfront",
        },
      ],
    },

    gallery: {
      title: "DAMAC Bay Visuals",
      slides: GALLERY,
      projectTag: "DAMAC Bay by Cavalli",
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
            "Total Area": "1303.51 sq.ft",
            "Starting Price": "AED 3,939,000",
            Handover: "Q3 2027",
            "Payment Plan": "40% / 60%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "2324.00 sq.ft",
            "Starting Price": "AED 8,880,000",
            Handover: "Q3 2027",
            "Payment Plan": "40% / 60%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br-penthouse",
          title: "4 Bedroom (Penthouse)",
          bedrooms: 4,
          specs: {
            "Total Area": "8894.54 sq.ft",
            "Starting Price": "AED 66,843,000",
            Handover: "Q3 2027",
            "Payment Plan": "40% / 60%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br-penthouse",
          title: "5 Bedroom (Penthouse)",
          bedrooms: 5,
          specs: {
            "Total Area": "10053.06 sq.ft",
            "Starting Price": "AED 73,036,000",
            Handover: "Q3 2027",
            "Payment Plan": "40% / 60%",
          },
          images: [FP_5BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Dubai Harbour Waterfront", icon: "🌊", color: "#d7b46a" },
        { label: "Resort-Style Pools", icon: "🏊", color: "#d7b46a" },
        { label: "Fitness & Wellness", icon: "💪", color: "#d7b46a" },
        { label: "Sea & Skyline Views", icon: "🏙️", color: "#d7b46a" },
        { label: "Cavalli-Branded Design", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "DAMAC Bay by Cavalli",
      address: "Dubai Harbour, Dubai, UAE",
      // ✅ exactly from your Google Maps pin
      lat: 25.0927993,
      lng: 55.14346,
      zoom: 14,
      proximityFeatures: [
        { icon: "⛵", text: "Dubai Harbour marina lifestyle with sea views." },
        { icon: "🏖️", text: "Close to Dubai Marina and JBR beachfront." },
        { icon: "🛣️", text: "Easy access to Sheikh Zayed Road & key hubs." },
      ],
    },

    cta: {
      title: "Interested in DAMAC Bay by Cavalli?",
      description:
        "Share your details to receive availability, pricing guidance, and the official documents for DAMAC Bay by Cavalli in Dubai Harbour.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "داماك باي من كافالي | وحدات فاخرة على الواجهة البحرية في دبي هاربور",
      description:
        "داماك باي من كافالي مشروع سكني بعلامة كافالي على واجهة دبي هاربور، يقدم أسلوب حياة بحري فاخر بإطلالات مفتوحة على البحر وسهولة وصول إلى دبي مارينا وJBR ونخلة جميرا.",
      keywords:
        "داماك باي, كافالي, دبي هاربور, شقق فاخرة, بنتهاوس, خطة دفع 40/60, Q3 2027",
      canonical: "/properties/apartments/damac/damac-bay",
    },

    project: {
      name: "داماك باي من كافالي",
      developer: "داماك العقارية",
      location: "دبي هاربور، دبي، الإمارات",
      status: "على المخطط",
      startingPrice: "3,939,000 درهم",
      completionDate: "الربع الثالث 2027",
      paymentPlan: "40/60",
      type: "وحدات سكنية بعلامة تجارية على الواجهة البحرية",
      units: "1 غرفة + 3 غرف + بنتهاوس 4 و5 غرف",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: null,
    },

    intro: {
      title: "عنوان ساحلي بعلامة كافالي في دبي هاربور",
      paragraphs: [
        "يقع مشروع داماك باي من كافالي في دبي هاربور—إحدى أكثر الوجهات الساحلية تميزًا في دبي، حيث تم تصميم المنطقة حول أسلوب حياة المارينا وإطلالات البحر المفتوحة. يقدّم الموقع مزيجًا نادرًا من الخصوصية وقربه من دبي مارينا وJBR، مع اتصال سريع بشارع الشيخ زايد ومحاور المدينة.",
        "المشروع لا يركز فقط على الإطلالة، بل على الهوية والتجربة: تصميم بعلامة كافالي، مساحات مشتركة راقية، وتخطيط يهدف إلى إبراز الأفق والبحر والمدينة في كل لحظة. بالنسبة للمقيمين هو ترقية حقيقية لأسلوب الحياة، وبالنسبة للمستثمرين فهو خيار قوي في منطقة ساحلية محدودة المعروض وقوية الطلب.",
        "ستجد أدناه الكتيّب الرسمي، وصورة خطة الدفع، ومعرض الصور الكامل بأسماء ملفات BunnyCDN كما زوّدتني بها، بالإضافة إلى قسم مخططات الطوابق بالصيغة الصارمة ذات 4 حقول فقط—مع صور المخططات المرفوعة لوحدات 1BR و3BR وبنتهاوس 4BR و5BR.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "خطة الدفع (صورة)", url: PAYMENT_PLAN_IMG, type: "secondary" },
      ],
      imgUrl: cdn("DAMAC Bay - Look Down View 01.jpg"),
      imgAlt: "إطلالة داماك باي من كافالي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3,939,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1303.51 قدم²",
          label: "مساحة 1 غرفة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🌊",
          value: "دبي هاربور",
          label: "واجهة بحرية",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "داماك باي من كافالي",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "1303.51 قدم مربع",
            "السعر الابتدائي": "3,939,000 درهم",
            "موعد التسليم": "الربع الثالث 2027",
            "خطة الدفع": "40% / 60%",
          },
          images: [FP_1BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "2324.00 قدم مربع",
            "السعر الابتدائي": "8,880,000 درهم",
            "موعد التسليم": "الربع الثالث 2027",
            "خطة الدفع": "40% / 60%",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br-penthouse",
          title: "بنتهاوس 4 غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "8894.54 قدم مربع",
            "السعر الابتدائي": "66,843,000 درهم",
            "موعد التسليم": "الربع الثالث 2027",
            "خطة الدفع": "40% / 60%",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br-penthouse",
          title: "بنتهاوس 5 غرف نوم",
          bedrooms: 5,
          specs: {
            "إجمالي المساحة": "10053.06 قدم مربع",
            "السعر الابتدائي": "73,036,000 درهم",
            "موعد التسليم": "الربع الثالث 2027",
            "خطة الدفع": "40% / 60%",
          },
          images: [FP_5BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "واجهة دبي هاربور", icon: "🌊", color: "#d7b46a" },
        { label: "مسابح بطابع منتجع", icon: "🏊", color: "#d7b46a" },
        { label: "لياقة وعافية", icon: "💪", color: "#d7b46a" },
        { label: "إطلالات البحر والمدينة", icon: "🏙️", color: "#d7b46a" },
        { label: "تصميم بعلامة كافالي", icon: "✨", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "داماك باي من كافالي",
      address: "دبي هاربور، دبي، الإمارات",
      lat: 25.0927993,
      lng: 55.14346,
      zoom: 14,
      proximityFeatures: [
        { icon: "⛵", text: "أسلوب حياة المارينا مع إطلالات بحرية مفتوحة." },
        { icon: "🏖️", text: "قريب من دبي مارينا وواجهة JBR." },
        { icon: "🛣️", text: "وصول سريع لمحاور دبي وشارع الشيخ زايد." },
      ],
    },

    cta: {
      title: "مهتم ب داماك باي من كافالي؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار والوثائق الرسمية لمشروع داماك باي من كافالي في دبي هاربور.",
      buttons: [
        { label: "اطلب معلومات الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default damacBayData;
