// src/data/properties/apartments/ellington/playa-de-sol.js
// ✅ Folder: /ellington/playa-de-sol
// ✅ EN + AR
// ✅ 3BR + 4BR only
// ✅ Exact filenames used
// ✅ Al Marjan Island
// ✅ Ellington standard square logo

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ellington/playa-de-sol";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ✅ STANDARD ELLINGTON SQUARE IMAGE
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Playa Del Sol - Brochure.pdf");
const FLOORPLANS_PDF = cdn("Playa Del Sol - Floor Plan.pdf");
const PAYMENT_PLAN_PDF = cdn("Playa del Sol - Payment Plan.pdf");

const HERO_BG = cdn("Playa del Sol - concept video - HD.mp4");
const INTRO_MAIN = cdn("Playa del Sol - hero shot 2 .jpg");
const VIDEO = cdn("Playa del Sol - concept video - HD.mp4");

const FP_3BR = cdn("Playa Del Sol 3br floor plan.webp");
const FP_4BR = cdn("Playa Del Sol 2br floor plan.webp"); // official large-unit plan file

const GALLERY = [
  cdn("Playa Del Sol -hero shot 1.jpg"),
  cdn("Playa del Sol - hero shot 2 .jpg"),
  cdn("Playa del Sol - hero shot 3.jpg"),
  cdn("Playa del Sol - facade.jpg"),
  cdn("Playa del Sol - entrance.jpg"),
  cdn("Playa del Sol - lobby reception.jpg"),
  cdn("Playa del Sol - lobby lounge.jpg"),
  cdn("Playa del Sol - living room.jpg"),
  cdn("Playa del Sol - kitchen.jpg"),
  cdn("Playa del Sol - bedroom.jpeg"),
  cdn("Playa del Sol - bathroom .jpeg"),
  cdn("Playa del Sol - balcony view.jpg"),
  cdn("Playa del Sol - pool deck.jpg"),
  cdn("Playa del Sol - clubhouse.jpg"),
  cdn("Playa del Sol - fitness studio.jpg"),
  cdn("Playa del Sol - yoga studio.jpg"),
  cdn("Playa del Sol - kids play area.jpg"),
  cdn("Playa del Sol - teens clubhouse.jpg"),
  cdn("Playa del Sol - sunken garden.jpg"),
  cdn("Playa del Sol - villa exterior.jpg"),
];

const HANDOVER = "Q4 2027";
const PAYMENT_PLAN = "60% / 40%";

// ======================================================
// DATA
// ======================================================
export const playaDelSolData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Playa Del Sol by Ellington | Luxury 3 & 4 Bedroom Residences on Al Marjan Island",
      description:
        "Playa Del Sol by Ellington offers beachfront 3 & 4 bedroom residences on Al Marjan Island. Starting from AED 3,797,828 with a 60/40 payment plan and handover in Q4 2027.",
      keywords:
        "Playa Del Sol, Ellington Properties, Al Marjan Island, beachfront apartments UAE",
      canonical: "/properties/apartments/ellington/playa-de-sol",
    },

    project: {
      name: "Playa Del Sol",
      developer: "Ellington Properties",
      location: "Al Marjan Island, Ras Al Khaimah, UAE",
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 3,797,828",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Beachfront Residences",
      units: "3 & 4 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Ellington Properties",
      rating: null,
      videoUrl: VIDEO,
    },

    intro: {
      title: "PLAYA DEL SOL — COASTAL LUXURY REDEFINED",
      paragraphs: [
        "Playa Del Sol by Ellington is a refined beachfront development on Al Marjan Island, blending resort-style living with signature Ellington design philosophy.",
        `Residences include spacious 3 and 4-bedroom homes starting from AED 3,797,828 with a ${PAYMENT_PLAN} payment plan and handover in ${HANDOVER}.`,
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Floor Plans", url: FLOORPLANS_PDF, type: "secondary" },
        {
          title: "Payment Plan",
          url: PAYMENT_PLAN_PDF,
          type: "secondary",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Playa Del Sol by Ellington",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "AED 3.79M",
          label: "Starting Price",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,381 – 1,906 sq.ft",
          label: "Total Area",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏝️",
          value: "Al Marjan Island",
          label: "Beachfront Location",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Playa Del Sol",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "1,381.76 sq.ft",
            "Starting Price": "AED 3,797,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["Beachfront Living", "Large Balcony"],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            "Total Area": "1,906.5 sq.ft",
            "Starting Price": "AED 5,573,828",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_4BR],
          features: ["Premium Sea Views", "Expansive Layout"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Lifestyle & Amenities",
      amenities: [
        { label: "Beachfront Pool Deck", icon: "🏖️", color: "#d7b46a" },
        { label: "Clubhouse & Lounges", icon: "🏛️", color: "#d7b46a" },
        { label: "Fitness & Yoga Studios", icon: "🧘", color: "#d7b46a" },
        { label: "Kids & Teens Zones", icon: "👨‍👩‍👧", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Playa Del Sol",
      address: "Al Marjan Island, Ras Al Khaimah, UAE",
      lat: 25.6810625,
      lng: 55.7404375,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏝️", text: "Prime beachfront setting." },
        { icon: "🚗", text: "Direct access to Marjan Island roads." },
        { icon: "✈️", text: "Easy access to RAK International Airport." },
      ],
    },

    cta: {
      title: "Own a Beachfront Home at Playa Del Sol",
      description:
        "Request pricing, availability, and official Ellington documents today.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
        { label: "Payment Plan", action: "download-payment-plan" },
      ],
    },
  },

  // ================= AR =================
  // ================= AR =================
  ar: {
    seo: {
      title:
        "بلايا ديل سول من إلينغتون | مساكن فاخرة 3 و4 غرف على جزيرة المرجان",
      description:
        "بلايا ديل سول من إلينغتون مشروع شاطئي فاخر على جزيرة المرجان في رأس الخيمة يوفر مساكن 3 و4 غرف نوم. يبدأ السعر من 3,797,828 درهم مع خطة دفع 60% / 40% وموعد تسليم Q4 2027.",
      keywords:
        "بلايا ديل سول, إلينغتون, جزيرة المرجان, شقق شاطئية رأس الخيمة, Playa Del Sol Ellington",
      canonical: "/properties/apartments/ellington/playa-de-sol",
    },

    project: {
      name: "بلايا ديل سول",
      developer: "إلينغتون العقارية",
      location: "جزيرة المرجان، رأس الخيمة، الإمارات",
      status: "Off-plan", // ✅ keep same enum as EN (safer)
      market: "offplan", // ✅ IMPORTANT
      startingPrice: "3,797,828 درهم",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "مساكن شاطئية",
      units: "3 و4 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "إلينغتون العقارية",
      rating: null,
      videoUrl: VIDEO, // ✅ parity
    },

    intro: {
      title: "بلايا ديل سول — فخامة ساحلية بتصميم إلينغتون",
      paragraphs: [
        "بلايا ديل سول من إلينغتون مشروع شاطئي راقٍ على جزيرة المرجان يجمع بين أسلوب المنتجعات ولمسة التصميم المميزة من Ellington.",
        `يضم المشروع مساكن واسعة من 3 و4 غرف نوم تبدأ من 3,797,828 درهم مع خطة دفع ${PAYMENT_PLAN} وموعد تسليم ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "مخططات الطوابق", url: FLOORPLANS_PDF, type: "secondary" },
        { title: "خطة الدفع", url: PAYMENT_PLAN_PDF, type: "secondary" },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "بلايا ديل سول من إلينغتون",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "3.79M درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "📐",
          value: "1,381 – 1,906 قدم²",
          label: "المساحات",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏝️",
          value: "جزيرة المرجان",
          label: "موقع شاطئي",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Playa Del Sol", // ✅ keep stable tag like EN
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "3br", // ✅ IMPORTANT
          title: "3 غرف نوم",
          bedrooms: 3,
          // ✅ use EN keys (safer if UI labels are translated elsewhere)
          specs: {
            "Total Area": "1,381.76 قدم²",
            "Starting Price": "3,797,828 درهم",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_3BR],
          features: ["إطلالة شاطئية", "شرفة واسعة"],
        },
        {
          id: "4br",
          title: "4 غرف نوم",
          bedrooms: 4,
          specs: {
            "Total Area": "1,906.5 قدم²",
            "Starting Price": "5,573,828 درهم",
            Handover: HANDOVER,
            "Payment Plan": PAYMENT_PLAN,
          },
          images: [FP_4BR],
          features: ["إطلالات بحرية", "مساحة كبيرة"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "نمط الحياة والمرافق",
      amenities: [
        { label: "منصة مسبح بإطلالة شاطئية", icon: "🏖️", color: "#d7b46a" },
        { label: "نادي ومناطق جلوس", icon: "🏛️", color: "#d7b46a" },
        { label: "استوديو لياقة ويوغا", icon: "🧘", color: "#d7b46a" },
        { label: "مناطق للأطفال والمراهقين", icon: "👨‍👩‍👧", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بلايا ديل سول",
      address: "جزيرة المرجان، رأس الخيمة، الإمارات",
      lat: 25.6810625,
      lng: 55.7404375,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏝️", text: "موقع شاطئي مميز على جزيرة المرجان." },
        { icon: "🚗", text: "سهولة الوصول إلى الطرق داخل الجزيرة." },
        { icon: "✈️", text: "قرب نسبي من مطار رأس الخيمة الدولي." },
      ],
    },

    cta: {
      title: "امتلك منزلاً شاطئياً في بلايا ديل سول",
      description:
        "اطلب الأسعار والتوافر وأرسل طلبك للحصول على المستندات الرسمية من إلينغتون.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
        { label: "خطة الدفع", action: "download-payment-plan" },
      ],
    },
  },
};

export default playaDelSolData;
