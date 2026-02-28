// src/data/properties/villas/sobha/sobha-sanctuary.js
// ✅ FINAL VERSION
// ✅ ONLY 4BR & 5BR
// ✅ Blueprint compliant
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/sobha/sobha-the-brooks";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL = "/Sobha-Realty-Square-Logo.jpg";

// ================= FILES =================
const BROCHURE_PDF = cdn("sobha-the-brooks-brochure.pdf");
const FLOORPLANS_PDF = cdn("sobha-brooks-floorplans.pdf");

const FP_4BR = cdn("Sobha Sanctuary 4br floor plan.webp");
const FP_5BR = cdn("sobha sanctuary 5br floor plan.webp");

// ================= GALLERY =================
const GALLERY = [cdn("1.webp"), cdn("3.webp"), cdn("4.webp"), cdn("6.webp")];

// ================= CONSTANTS =================
const HANDOVER = "Q3 2029";
const PAYMENT_PLAN = "60% / 40%";
const LOCATION_NAME = "The Valley, Dubai";

// ======================================================
// DATA
// ======================================================
export const sobhaSanctuaryData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Sobha Sanctuary Villas | 4 & 5 Bedroom Luxury Villas in The Valley",
      description:
        "Sobha Sanctuary by Sobha Realty offers exclusive 4 and 5 bedroom luxury villas in The Valley, Dubai. Starting from AED 3.99M with handover in Q3 2029.",
      keywords:
        "Sobha Sanctuary, Sobha Villas, The Valley Dubai, Sobha Realty Villas",
      canonical: "/properties/villas/sobha/sobha-sanctuary",
    },

    project: {
      name: "Sobha Sanctuary",
      developer: "Sobha Realty",
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 3,995,908",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Luxury Villas",
      units: "4 & 5 Bedroom Villas",
    },

    hero: {
      backgroundUrl: `https://luxury-real-estate-media.b-cdn.net/sobha/sobha-the-brooks/3.webp`,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Sobha Realty",
      rating: null,
    },

    intro: {
      title: "SOBHA SANCTUARY — NATURE-INSPIRED VILLA LIVING",
      paragraphs: [
        "Sobha Sanctuary is an exclusive gated villa community by Sobha Realty, located in The Valley, offering a serene lifestyle surrounded by nature and refined architecture.",
        `The project features spacious 4 and 5 bedroom villas with a ${PAYMENT_PLAN} payment plan and handover scheduled for ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "View Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: cdn("2.webp"),
      imgAlt: "Sobha Sanctuary Villas",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌿",
          value: "The Valley",
          label: "Green Community",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🏡",
          value: "4–5 BR",
          label: "Luxury Villas",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Sobha Sanctuary",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br",
          title: "4 Bedroom Villa",
          bedrooms: 4,
          specs: {
            "Total Area": "1,731 sq.ft",
            "Starting Price": "AED 3,995,908",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_4BR],
        },
        {
          id: "5br",
          title: "5 Bedroom Villa",
          bedrooms: 5,
          specs: {
            "Total Area": "3,133 sq.ft",
            "Starting Price": "AED 7,289,481",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_5BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Private Gated Community", icon: "🚪" },
        { label: "Lagoon & Landscaped Parks", icon: "🌊" },
        { label: "Walking & Cycling Trails", icon: "🚴" },
        { label: "Exclusive Clubhouse", icon: "🏛️" },
        { label: "Children Play Areas", icon: "🧸" },
        { label: "24/7 Security", icon: "🛡️" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Sobha Sanctuary",
      address: LOCATION_NAME,
      lat: 24.9949375,
      lng: 55.4266875,
      zoom: 17,
    },

    cta: {
      title: "Own a Sobha Sanctuary Villa",
      description:
        "Get full pricing, availability, floor plans and official Sobha documents.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ================= AR =================
  ar: {
    seo: {
      title: "فلل سوبها سانكتشواري | فلل 4 و5 غرف نوم في ذا فالي – دبي",
      description:
        "سوبها سانكتشواري من سوبها العقارية يوفر فلل فاخرة 4 و5 غرف نوم في ذا فالي – دبي، مع خطة سداد 60% / 40% وموعد تسليم Q3 2029.",
      keywords: "سوبها سانكتشواري, سوبها, ذا فالي دبي, فلل فاخرة دبي",
      canonical: "/properties/villas/sobha/sobha-sanctuary",
    },

    project: {
      name: "سوبها سانكتشواري",
      developer: "سوبها العقارية",
      location: "ذا فالي، دبي",
      status: "على المخطط",
      market: "offplan", // ✅ IMPORTANT
      startingPrice: "3,995,908 درهم",
      completionDate: "الربع الثالث 2029",
      paymentPlan: PAYMENT_PLAN,
      type: "فلل فاخرة",
      units: "فلل 4 و5 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[1], // safer than [0] sometimes (but either works)
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "سوبها العقارية",
      rating: null,
    },

    intro: {
      title: "سوبها سانكتشواري — فلل فاخرة مستوحاة من الطبيعة",
      paragraphs: [
        "سوبها سانكتشواري هو مجتمع فلل حصري مسوّر من سوبها العقارية في ذا فالي – دبي، يوفر أسلوب حياة هادئ وسط المساحات الخضراء.",
        `يضم فلل 4 و5 غرف نوم مع خطة سداد ${PAYMENT_PLAN} وموعد تسليم ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "مخططات الطوابق", url: FLOORPLANS_PDF, type: "secondary" },
      ],
      imgUrl: cdn("2.webp"),
      imgAlt: "فلل سوبها سانكتشواري",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌿",
          value: "ذا فالي",
          label: "مجتمع أخضر",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🏡",
          value: "4–5 غرف",
          label: "فلل فاخرة",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Sobha Sanctuary",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br",
          title: "فيلا 4 غرف نوم",
          bedrooms: 4,
          specs: {
            // ✅ keep keys consistent with EN (safer for components)
            "Total Area": "1,731 قدم²",
            "Starting Price": "3,995,908 درهم",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_4BR],
        },
        {
          id: "5br",
          title: "فيلا 5 غرف نوم",
          bedrooms: 5,
          specs: {
            "Total Area": "3,133 قدم²",
            "Starting Price": "7,289,481 درهم",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_5BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مجتمع مسوّر", icon: "🚪" },
        { label: "بحيرات وحدائق", icon: "🌊" },
        { label: "مسارات للمشي والدراجات", icon: "🚴" },
        { label: "نادي حصري", icon: "🏛️" },
        { label: "مناطق لعب للأطفال", icon: "🧸" },
        { label: "أمن 24/7", icon: "🛡️" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سوبها سانكتشواري",
      address: "ذا فالي، دبي",
      lat: 24.9949375,
      lng: 55.4266875,
      zoom: 17,
    },

    cta: {
      title: "امتلك فيلا في سوبها سانكتشواري",
      description:
        "اطلب الأسعار والتوافر والمخططات والملفات الرسمية من سوبها العقارية.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default sobhaSanctuaryData;
