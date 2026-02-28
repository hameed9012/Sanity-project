// src/data/properties/apartments/azizi/gabriel/gabriel.js
// ✅ Uses EXACT Bunny filenames from your screenshot
// ✅ SAME DATA STRUCTURE as your working Azizi files (EN + AR)
// ✅ FloorPlans include ONLY the 4 agreed fields:
//    Total Area / Starting Price / Handover / Payment Plan
// ✅ Handover + Payment Plan are EXACTLY from your info (31/12/2028 + 50/50)

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/gabriel";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ PDFs (EXACT filenames from your screenshot)
const FACTSHEET_PDF = cdn("Azizi Gabriel Factsheet.pdf");
const BROCHURE_PDF = cdn("Azizi Gabriel.pdf");

// ✅ Gallery images (EXACT filenames from your screenshot)
const GALLERY = [
  cdn("360-DJAZ2.39-HL-IMG-EXTERIOR PERSPECTIVE 1-00.jpg"),
  cdn("360-DJAZ2.39-HL-IMG-EXTERIOR PERSPECTIVE 2-00.jpg"),
  cdn("360-DJAZ2.39-HL-IMG-EXTERIOR PERSPECTIVE 3-00.jpg"),
  cdn("360-DJAZ2.39-HL-IMG-EXTERIOR PERSPECTIVE 4-00.jpg"),
  cdn("360-DJAZ2.39-HL-IMG-EXTERIOR PERSPECTIVE 6-00.jpg"),
  cdn("360-DJAZ2.39-HL-IMG-EXTERIOR PERSPECTIVE 7-00.jpg"),
  cdn("360-DJAZ2.39-HL-IMG-EXTERIOR PERSPECTIVE 8-00.jpg"),
];

// ✅ Use best hero background from available media (no video listed)
const HERO_BG = cdn("360-DJAZ2.39-HL-IMG-EXTERIOR PERSPECTIVE 1-00.jpg");

// ✅ Reuse strong visuals as plan images until floor plans are uploaded
const STUDIO_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/gabriel/Gabriel%20stuio.png`;
const ONE_BED_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/gabriel/Gabriel%201br.png`;
const TWO_BED_IMAGE = `https://luxury-real-estate-media.b-cdn.net/azizi/gabriel/Gabriel%202br.png`;

// ✅ Exact values from your message
const HANDOVER = "31/12/2028";
const PAYMENT_PLAN = "50% / 50%";

export const aziziGabrielData = {
  en: {
    seo: {
      title:
        "Azizi Gabriel | Apartments in Dubai | Handover 31/12/2028 | Payment Plan 50/50",
      description:
        "Azizi Gabriel by Azizi Developments offers studio, 1-bedroom, and 2-bedroom apartments with handover on 31/12/2028 and a 50%/50% payment plan.",
      keywords:
        "Azizi Gabriel, Azizi Developments, Dubai apartments, studio, 1 bedroom, 2 bedroom, 50/50 payment plan, 31/12/2028 handover",
      canonical: "/properties/apartments/azizi/gabriel",
    },

    project: {
      name: "Azizi Gabriel",
      developer: "Azizi Developments",
      location: "Dubai, United Arab Emirates",
      status: "Off-Plan",
      startingPrice: "AED 591,000", // ✅ Studio starting price you gave
      completionDate: HANDOVER, // ✅ exact date
      paymentPlan: PAYMENT_PLAN, // ✅ exact
      type: "Apartments",
      units: "Studio, 1 & 2 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "MODERN APARTMENTS BY AZIZI",
      paragraphs: [
        "Azizi Gabriel is a contemporary residential project by Azizi Developments, offering a selection of studios, 1-bedroom, and 2-bedroom apartments.",
        "With a clear 50% / 50% payment plan and handover set for 31/12/2028, the project is positioned for end-users and investors seeking a structured timeline.",
        "Download the official factsheet/brochure for full details and specifications.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "main" },
        { title: "Download Brochure", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: HERO_BG,
      imgAlt: "Azizi Gabriel exterior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: HANDOVER,
          label: "Handover",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: PAYMENT_PLAN,
          label: "Payment Plan",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💰",
          value: "From AED 591,000",
          label: "Starting Price",
        },
      ],
    },

    gallery: {
      title: "Azizi Gabriel Visuals",
      slides: GALLERY,
      projectTag: "Azizi Gabriel",
    },

    // ✅ FloorPlans: ONLY the 4 agreed fields
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            "Total Area": "339 sq.ft",
            "Starting Price": "AED 591,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [STUDIO_IMAGE],
          features: ["—"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "692 sq.ft",
            "Starting Price": "AED 927,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [ONE_BED_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,096 sq.ft",
            "Starting Price": "AED 1,588,000",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [TWO_BED_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "Highlights",
      amenities: [
        { label: "Modern Design", icon: "🏢", color: "#d7b46a" },
        { label: "Structured Payment Plan", icon: "💳", color: "#d7b46a" },
        { label: "Handover Date Set", icon: "🗓️", color: "#d7b46a" },
        { label: "Azizi Developer", icon: "⭐", color: "#d7b46a" },
      ],
    },

    // ⚠️ Location pin not provided by you yet (send the Google Maps link and I’ll set exact lat/lng)
    location: {
      title: "Project Location",
      projectName: "Azizi Gabriel",
      address: "Azizi Gabriel, Dubai, United Arab Emirates",
      lat: 24.95534,
      lng: 55.078707,
      zoom: 16,
      proximityFeatures: [
        { icon: "📍", text: "Dubai, United Arab Emirates." },
        { icon: "🛣️", text: "Easy access to major roads and key districts." },
      ],
    },

    cta: {
      title: "Interested in Azizi Gabriel?",
      description:
        "Share your details to receive the latest availability, pricing, and official project documents for Azizi Gabriel.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factsheet", action: "download-brochure" },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي جابرييل | شقق في دبي | التسليم 31/12/2028 | خطة دفع 50/50",
      description:
        "عزيزي جابرييل من عزيزي للتطوير العقاري يوفّر استوديو وشقق 1 و2 غرفة نوم، مع موعد تسليم 31/12/2028 وخطة دفع 50% / 50%.",
      keywords:
        "عزيزي جابرييل, عزيزي, شقق دبي, استوديو, غرفة نوم, غرفتين, خطة دفع 50/50, تسليم 31/12/2028",
      canonical: "/properties/apartments/azizi/gabriel",
    },

    project: {
      name: "عزيزي جابرييل",
      developer: "عزيزي للتطوير العقاري",
      location: "دبي، الإمارات العربية المتحدة",
      status: "قيد الإنشاء",
      startingPrice: "591,000 درهم",
      completionDate: HANDOVER,
      paymentPlan: "50% / 50%",
      type: "شقق سكنية",
      units: "استوديو، 1 و2 غرفة نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي",
      rating: null,
    },

    intro: {
      title: "شقق عصرية من عزيزي في دبي",
      paragraphs: [
        "عزيزي جابرييل مشروع سكني حديث من عزيزي للتطوير العقاري، يقدّم مجموعة من وحدات الاستوديو وشقق 1 و2 غرفة نوم.",
        "يوفّر المشروع خطة دفع واضحة 50% / 50%، مع موعد تسليم محدد بتاريخ 31/12/2028.",
        "يمكنك تحميل ورقة المعلومات والكتيّب الرسمي للاطلاع على التفاصيل.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: FACTSHEET_PDF, type: "main" },
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "secondary" },
      ],
      imgUrl: HERO_BG,
      imgAlt: "واجهة مشروع عزيزي جابرييل",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: HANDOVER,
          label: "موعد التسليم",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "50% / 50%",
          label: "خطة الدفع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💰",
          value: "ابتداءً من 591,000 درهم",
          label: "السعر يبدأ من",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "عزيزي جابرييل",
    },

    // ✅ AR FloorPlans: ONLY the 4 agreed fields (Arabic keys)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "339 قدم²",
            "السعر الابتدائي": "591,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": "50% / 50%",
          },
          images: [STUDIO_IMAGE],
          features: ["—"],
        },
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "692 قدم²",
            "السعر الابتدائي": "927,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": "50% / 50%",
          },
          images: [ONE_BED_IMAGE],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,096 قدم²",
            "السعر الابتدائي": "1,588,000 درهم",
            "موعد التسليم": HANDOVER,
            "خطة الدفع": "50% / 50%",
          },
          images: [TWO_BED_IMAGE],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },

    amenities: {
      title: "مميزات المشروع",
      amenities: [
        { label: "تصميم عصري", icon: "🏢", color: "#d7b46a" },
        { label: "خطة دفع منظمة", icon: "💳", color: "#d7b46a" },
        { label: "موعد تسليم محدد", icon: "🗓️", color: "#d7b46a" },
        { label: "من تطوير عزيزي", icon: "⭐", color: "#d7b46a" },
      ],
    },

    // ⚠️ Location pin not provided by you yet (send the Google Maps link and I’ll set exact lat/lng)
    location: {
      title: "موقع المشروع",
      projectName: "عزيزي جابرييل",
      address: "عزيزي جابرييل، دبي، الإمارات العربية المتحدة",
      lat: 24.95534,
      lng: 55.078707,
      zoom: 16,
      proximityFeatures: [
        { icon: "📍", text: "دبي، الإمارات العربية المتحدة." },
        { icon: "🛣️", text: "سهولة الوصول إلى الطرق الرئيسية ومناطق دبي." },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي جابرييل؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار وروابط المستندات الرسمية لمشروع عزيزي جابرييل.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل ورقة المعلومات", action: "download-brochure" },
      ],
    },
  },
};
