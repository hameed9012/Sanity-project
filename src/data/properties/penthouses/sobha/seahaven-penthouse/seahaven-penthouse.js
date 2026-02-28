// src/data/projects/penthouses/sobha/seahaven-penthouse/seahaven-penthouse.js

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const SEAHAVEN_DIR = "/seahaven";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${SEAHAVEN_DIR}/${encodeURIComponent(fileName)}`;

// ===== Tailored constants (SeaHaven) =====
const PAYMENT_PLAN = "40% / 60%";

// PDF
const PENTHOUSE_BROCHURE_PDF = cdn("Penthouse at Sobha SeaHaven.pdf");

// Images (keeping the exact same final URLs you already used)
const HERO_BG = cdn("hero-bg.jpg .jpg"); // produces: hero-bg.jpg%20.jpg
const INTRO_MAIN = cdn("intro-main.jpg");

const VISUAL_02 = cdn("visual-02.jpg");
const VISUAL_04 = cdn("visual-04.jpg");
const VISUAL_05 = cdn("visual-05.jpg");
const VISUAL_06 = cdn("visual-06.jpg");
const VISUAL_07 = cdn("visual-07.jpg");
const VISUAL_08 = cdn("visual-08.jpg");
const VISUAL_09 = cdn("visual-09.jpg");
const VISUAL_10 = cdn("visual-10.jpg");
const VISUAL_11 = cdn("visual-11.jpg");
const VISUAL_12 = cdn("visual-12.jpg");
const VISUAL_13 = cdn("visual-13.jpg");
const VISUAL_14 = cdn("visual-14.png");

// Floor plan images
const FP_5BR = cdn("1.png");
const FP_6BR = cdn("2.png");

export const seahavenPenthouseData = {
  en: {
    seo: {
      title:
        "Sobha SeaHaven | Luxury 5 & 6 Bedroom Penthouses in Dubai Harbour | Sobha Realty",
      description:
        "Ultra-luxury 5 and 6 bedroom penthouses in Sobha SeaHaven, Dubai Harbour. Exclusive waterfront living with premium finishes, private terraces, and panoramic views by Sobha Realty.",
      keywords:
        "Sobha SeaHaven, Sobha Realty, Dubai Harbour penthouse, luxury penthouses Dubai, 5 bedroom penthouse, 6 bedroom penthouse, waterfront penthouse Dubai",
      canonical: "/properties/apartments/sobha/seahaven-penthouse",
    },

    project: {
      name: "Sobha SeaHaven",
      developer: "Sobha Realty",
      location: "Dubai Harbour",
      status: "Off-Plan",
      startingPrice: 51188437,
      completionDate: "Q4 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "penthouses",
      units: "5 & 6 Bedroom Penthouses",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/Sobha-Realty-Square-Logo.jpg",
      companyName: "Sobha Realty",
      rating: 4.8,
    },

    intro: {
      title: "ULTIMATE WATERFRONT PENTHOUSE LIVING",
      paragraphs: [
        "Sobha SeaHaven presents an exclusive collection of ultra-luxury 5 and 6 bedroom penthouses offering unparalleled waterfront living in Dubai Harbour. Designed for those who seek the absolute finest in luxury, these penthouses combine expansive living spaces with breathtaking views and premium amenities.",
        "Experience the epitome of sophisticated living with private terraces, premium finishes, and world-class facilities in one of Dubai’s most prestigious waterfront developments.",
      ],
      brochures: [
        {
          title: "Penthouse Brochure",
          url: PENTHOUSE_BROCHURE_PDF,
          type: "penthouse",
          icon: "🏢",
          color: "#2E8B57",
          category: "Penthouse",
          fileName: "Penthouse at Sobha SeaHaven.pdf",
          description: "Complete penthouse specifications and premium features",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Sobha SeaHaven luxury penthouse exterior and interior views",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏢",
          value: "5 & 6 BR",
          label: "Penthouse Types",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌊",
          value: "Waterfront",
          label: "Dubai Harbour",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "💳",
          value: PAYMENT_PLAN,
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Luxury Showcase",
      slides: [
        HERO_BG,
        VISUAL_02,
        INTRO_MAIN,
        VISUAL_04,
        VISUAL_05,
        VISUAL_06,
        VISUAL_07,
        VISUAL_08,
        VISUAL_09,
        VISUAL_10,
        VISUAL_11,
        VISUAL_12,
        VISUAL_13,
        VISUAL_14,
      ],
      projectTag: "SeaHaven",
    },

    floorPlans: {
      type: "penthouses",
      plans: [
        {
          id: "5-bedroom",
          title: "5 Bedroom Penthouse",
          bedrooms: 5,
          specs: {
            Unit: "5 Bedroom",
            "Total Area": "7,814.92 SQ.FT.",
            "Starting Price": "AED 51,188,437",
            Handover: "Q4 2026",
            paymentPlan: PAYMENT_PLAN,
          },
          images: [FP_5BR],
          features: [
            "Private terrace",
            "Panoramic water views",
            "Premium finishes",
            "Smart home system",
          ],
        },
        {
          id: "6-bedroom",
          title: "6 Bedroom Penthouse",
          bedrooms: 6,
          specs: {
            Unit: "6 Bedroom",
            "Total Area": "16,204.74 SQ.FT.",
            "Starting Price": "AED 105,330,810",
            Handover: "Q4 2026",
            paymentPlan: PAYMENT_PLAN,
          },
          images: [FP_6BR],
          features: [
            "Private pool terrace",
            "Panoramic city & water views",
            "Multiple living areas",
            "Premium appliances",
          ],
        },
      ],
      brochureHref: PENTHOUSE_BROCHURE_PDF,
    },

    location: {
      title: "Project Location",
      projectName: "Sobha SeaHaven",
      address: "Dubai Harbour, Dubai, United Arab Emirates",
      lat: 25.0898909,
      lng: 55.1441655,
      zoom: 15,
      proximityFeatures: [
        { icon: "⚓", text: "Approx. 10–15 min to Dubai Marina / JBR" },
        { icon: "🌴", text: "Approx. 12–15 min to Palm Jumeirah" },
        {
          icon: "🏙️",
          text: "Approx. 18–25 min to Downtown Dubai & Dubai Mall",
        },
        {
          icon: "✈️",
          text: "Approx. 24–38 min to Dubai International Airport (DXB)",
        },
        {
          icon: "🛫",
          text: "Approx. 26–38 min to Al Maktoum International Airport (DWC)",
        },
      ],
    },

    developer: {
      title: "About Sobha Realty",
      name: "Sobha Realty",
      description:
        "Sobha Realty is a luxury real estate developer known for exceptional build quality, refined design, and premium communities across Dubai and beyond.",
      projects: [
        "Sobha Hartland",
        "Sobha Hartland II",
        "Sobha One",
        "Sobha SeaHaven",
      ],
      logo: "https://luxury-real-estate-media.b-cdn.net/developers/sobha-logo.png",
      established: 1976,
    },

    cta: {
      title: "Ready for Ultimate Penthouse Living?",
      description:
        "Contact our team to request availability, pricing, and a private presentation for Sobha SeaHaven penthouses.",
      buttons: [
        { text: "Schedule Private Viewing", type: "primary", url: "/contact" },
        {
          text: "Download Penthouse Brochure",
          type: "secondary",
          url: PENTHOUSE_BROCHURE_PDF,
        },
      ],
    },
  },

  ar: {
    seo: {
      title:
        "شوبا سي هيفن | بنتهاوس فاخرة 5 و6 غرف نوم في دبي هاربور | شوبا العقارية",
      description:
        "بنتهاوس فائقة الفخامة من 5 و6 غرف نوم في شوبا سي هيفن – دبي هاربور. أسلوب حياة حصري على الواجهة البحرية مع تراسات خاصة وتشطيبات راقية وإطلالات بانورامية من شوبا العقارية.",
      keywords:
        "شوبا سي هيفن, دبي هاربور, بنتهاوس فاخرة دبي, بنتهاوس 5 غرف, بنتهاوس 6 غرف, شوبا العقارية, واجهة بحرية دبي",
      canonical: "/properties/penthouses/sobha/seahaven-penthouse",
    },

    project: {
      name: "شوبا سي هيفن",
      developer: "Sobha Realty",
      location: "دبي هاربور",
      status: "قيد الإنشاء",
      startingPrice: 51188437,
      completionDate: "الربع الرابع 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "بنتهاوس",
      units: "بنتهاوس 5 و6 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl: "/Sobha-Realty-Square-Logo.jpg",
      companyName: "Sobha Realty",
      rating: 4.8,
    },

    intro: {
      title: "تجربة بنتهاوس على الواجهة البحرية بأعلى المعايير",
      paragraphs: [
        "يقدّم مشروع شوبا سي هيفن مجموعة حصرية من بنتهاوس فاخرة تضم 5 و6 غرف نوم في دبي هاربور، مع أسلوب حياة راقٍ يجمع بين المساحات الواسعة والإطلالات الساحرة والمرافق المميّزة.",
        "استمتع بتراسات خاصة وتشطيبات فاخرة وموقع استثنائي على الواجهة البحرية في أحد أرقى الوجهات في دبي.",
      ],
      brochures: [
        {
          title: "كتيّب البنتهاوس",
          url: PENTHOUSE_BROCHURE_PDF,
          type: "penthouse",
          icon: "🏢",
          color: "#2E8B57",
          category: "بنتهاوس",
          fileName: "Penthouse at Sobha SeaHaven.pdf",
          description: "مواصفات البنتهاوس والتفاصيل الفاخرة بالكامل",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "بنتهاوس فاخرة في شوبا سي هيفن بإطلالات راقية",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏢",
          value: "5 و6 غرف",
          label: "أنواع البنتهاوس",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌊",
          value: "واجهة بحرية",
          label: "دبي هاربور",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "💳",
          value: PAYMENT_PLAN,
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "معرض فاخر",
      slides: [
        HERO_BG,
        VISUAL_02,
        INTRO_MAIN,
        VISUAL_04,
        VISUAL_05,
        VISUAL_06,
        VISUAL_07,
        VISUAL_08,
        VISUAL_09,
        VISUAL_10,
        VISUAL_11,
        VISUAL_12,
        VISUAL_13,
        VISUAL_14,
      ],
      projectTag: "SeaHaven",
    },

    floorPlans: {
      type: "penthouses",
      plans: [
        {
          id: "5-bedroom",
          title: "بنتهاوس 5 غرف نوم",
          bedrooms: 5,
          specs: {
            Unit: "5 غرف نوم",
            "Total Area": "7,814.92 قدم²",
            "Starting Price": "51,188,437 درهم",
            Handover: "الربع الرابع 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_5BR],
          features: [
            "تراس خاص",
            "إطلالات بانورامية على المياه",
            "تشطيبات راقية",
            "نظام منزل ذكي",
          ],
        },
        {
          id: "6-bedroom",
          title: "بنتهاوس 6 غرف نوم",
          bedrooms: 6,
          specs: {
            Unit: "6 غرف نوم",
            "Total Area": "16,204.74 قدم²",
            "Starting Price": "105,330,810 درهم",
            Handover: "الربع الرابع 2026",
            "خطة الدفع": PAYMENT_PLAN,
          },
          images: [FP_6BR],
          features: [
            "تراس مع مسبح خاص",
            "إطلالات بانورامية على المدينة والبحر",
            "عدة مناطق للمعيشة",
            "أجهزة وتشطيبات فاخرة",
          ],
        },
      ],
      brochureHref: PENTHOUSE_BROCHURE_PDF,
    },

    location: {
      title: "موقع المشروع",
      projectName: "شوبا سي هيفن",
      address: "دبي هاربور، دبي، الإمارات العربية المتحدة",
      lat: 25.0898909,
      lng: 55.1441655,
      zoom: 15,
      proximityFeatures: [
        { icon: "⚓", text: "حوالي 10–15 دقيقة إلى دبي مارينا / جي بي آر" },
        { icon: "🌴", text: "حوالي 12–15 دقيقة إلى نخلة جميرا" },
        { icon: "🏙️", text: "حوالي 18–25 دقيقة إلى وسط دبي ودبي مول" },
        { icon: "✈️", text: "حوالي 24–38 دقيقة إلى مطار دبي الدولي (DXB)" },
        {
          icon: "🛫",
          text: "حوالي 26–38 دقيقة إلى مطار آل مكتوم الدولي (DWC)",
        },
      ],
    },

    developer: {
      title: "عن شوبا العقارية",
      name: "Sobha Realty",
      description:
        "تُعد شوبا العقارية من أبرز مطوري العقارات الفاخرة، وتشتهر بجودة التنفيذ العالية والتصميم المتقن والمشاريع الراقية في دبي وخارجها.",
      projects: [
        "Sobha Hartland",
        "Sobha Hartland II",
        "Sobha One",
        "Sobha SeaHaven",
      ],
      logo: "https://luxury-real-estate-media.b-cdn.net/developers/sobha-logo.png",
      established: 1976,
    },

    cta: {
      title: "جاهز لتجربة البنتهاوس بأعلى مستوى؟",
      description:
        "تواصل معنا لمعرفة التوفر والأسعار وطلب عرض خاص لمشروع شوبا سي هيفن.",
      buttons: [
        { text: "حجز عرض خاص", type: "primary", url: "/contact" },
        {
          text: "تحميل كتيّب البنتهاوس",
          type: "secondary",
          url: PENTHOUSE_BROCHURE_PDF,
        },
      ],
    },
  },
};
