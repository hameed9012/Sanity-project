// src/data/properties/apartments/arada/armani/armani.js
// ✅ SAME STRUCTURE AS skyParksData (seo, project, hero, intro, gallery, floorPlans, amenities, location, nearbyAttractions, cta)
// ✅ ALL "relevant stuff" filled from YOUR pasted platform text (handover, price from, sqft ranges, payment plan, etc.)
// ✅ Bunny CDN safe: encodeURI via cdn() for files with spaces
// ✅ Gallery uses your existing arada/armani filenames (9 images you listed)
// ✅ Floorplans: uses the brochure PDF as brochureHref + plan "images" because you didn’t provide PNG floorplans

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "arada/armani";
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);
const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

const FP_2BR = cdn("Armani 2br floor plan.png");
const FP_3BR = cdn("Armani 3BR floor plan.png");
const FP_4BR = cdn("Armani 4BR floor plan.png");
const FP_5BR_PENTHOUSE = `https://luxury-real-estate-media.b-cdn.net/arada/armani/5br.webp`;

// ✅ Documents
const BROCHURE_PDF = cdn(
  "Armani-Beach-Residence-Brochure-2BD-Presidential-Suites-Jan-10.pdf"
);

// ✅ Gallery (your Bunny screenshot list)
const GALLERY = [
  `${BASE}/231026-arch-closeup-03-full-chanel.jpg`,
  `${BASE}/231030-frontside-view-05.jpg`,
  `${BASE}/231030-Parking-lounge_10K.jpg`,
  `${BASE}/231031-Back-corner-ANT-view-04.jpg`,
  `${BASE}/231102-balcony-pool-03.jpg`,
  `${BASE}/231128-Parking-02.jpg`,
  `${BASE}/231130-back-elevation-porttrae--04.jpg`,
  `${BASE}/231205-backside-sea-view-03.jpg`,
  `${BASE}/231205-backside-view-07.jpg`,
];

export const armaniBeachResidencesData = {
  en: {
    seo: {
      title:
        "Armani Beach Residence by Arada | Palm Jumeirah Dubai | Handover Q4 2026",
      description:
        "Armani Beach Residence by Arada on Palm Jumeirah, Dubai. On sale, under construction (3.49% progress), with handover Q4 2026. Service charge 35–40 AED/sqft and payment plan 60% / 40%.",
      keywords:
        "Armani Beach Residence, Arada, Palm Jumeirah, Dubai, luxury residences, payment plan, Q4 2026",
      canonical: "/properties/apartments/arada/armani",
    },

    project: {
      name: "Armani Beach Residence",
      developer: "Arada",
      location: "Palm Jumeirah, Dubai",
      status: "Off-Plan",

      // ✅ from your platform text
      startingPrice: "AED 23M",
      completionDate: "Q4 2026",
      paymentPlan: "60% / 40%",

      type: "Apartments",
      units: "2, 3, 4 & 5 Bedroom Residences",

      // extra platform facts (safe additions, same object style as your ecosystem)
      constructionStatus: "Under construction",
      readinessProgress: "3.49%",
      floorsFormula: "G + 8 floors",
      furnishing: "Optional furnished",
      serviceCharge: "35–40 AED/sqft",
      salestatus: "Off-Plan",
      unitsInSale: "12 Units in sale",
      commissionNote: "from 5% of commission",
      parking: {
        "2 Bed": "1 Parking",
        "3–5 Bed": "2 Parkings",
      },
    },

    hero: {
      backgroundUrl: `${BASE}/231030-frontside-view-05.jpg`,
      // ✅ keep stable existing image as logo square (same pattern as skyParks)
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/armani-arada.png`,
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "ULTRA-LUXURY BEACHFRONT LIVING ON PALM JUMEIRAH",
      paragraphs: [
        "Armani Beach Residence at Palm Jumeirah brings together Giorgio Armani and Tadao Ando in a rare residential collaboration delivered by master developer Arada.",
        "Designed to achieve harmony between architecture, the surrounding seascape and the senses, the project offers sweeping views of the Arabian Gulf and Dubai’s skyline.",
        "A collection of high-end facilities sets the tone for a true ultra-luxury lifestyle, including a residents-only spa, cigar lounge, function room, landscaped deck and private beach.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#1A5F7A",
          size: null,
          category: "Ultra-Luxury Residences",
          fileName: "Armani Beach Residence Brochure.pdf",
          description:
            "Official brochure with project details and unit layouts.",
        },
      ],
      imgUrl: `${BASE}/231031-Back-corner-ANT-view-04.jpg`,
      imgAlt: "Armani Beach Residence exterior view on Palm Jumeirah",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌴",
          value: "Palm Jumeirah",
          label: "Prime Address",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "AED 23M",
          label: "Price From",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "Q4 2026",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Armani Visuals",
      slides: GALLERY,
      projectTag: "Armani Beach Residence",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom Residence",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM RESIDENCE",
            "Total Range": "2,965 SQ.FT.",
            "Starting Price": "From AED 23,000,000",
            Handover: "Q4 2026",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom Residence",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOM RESIDENCE",
            "Total Range": "4,394 SQ.FT.",
            "Starting Price": "From AED 39,000,000",
            Handover: "Q4 2026",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "4 Bedroom Residence",
          bedrooms: 4,
          specs: {
            Unit: "4 BEDROOM RESIDENCE",
            "Total Range": "6,323 SQ.FT.",
            "Starting Price": "From AED 51,000,000",
            Handover: "Q4 2026",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br-penthouse",
          title: "5 Bedroom Penthouse",
          bedrooms: 5,
          specs: {
            Unit: "5 BEDROOM PENTHOUSE",
            "Total Range": "9,684 SQ.FT.",
            "Starting Price": "From AED 78,000,000",
            Handover: "Q4 2026",
          },
          images: [FP_5BR_PENTHOUSE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Sauna & Ice-Bath", icon: "🧊", color: "#d7b46a" },
        { label: "Lushly Landscaped Deck Area", icon: "🌿", color: "#d7b46a" },
        { label: "Movie Theatre", icon: "🎬", color: "#d7b46a" },
        { label: "Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Indoor Swimming Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Large-Scale Infinity Pool", icon: "🌊", color: "#d7b46a" },
        { label: "Separate Children’s Pool", icon: "🧒", color: "#d7b46a" },
        { label: "Cigar Lounge", icon: "🥃", color: "#d7b46a" },
        { label: "Private Beach", icon: "🏖️", color: "#d7b46a" },
        { label: "Children’s Playroom", icon: "🧸", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Armani Beach Residence",
      address: "Crescent Rd, The Palm Jumeirah, Dubai, United Arab Emirates",
      lat: 25.1383125,
      lng: 55.1465625,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌴", text: "Palm Jumeirah – Crescent (East)" },
        { icon: "🏨", text: "Near The Retreat Palm Dubai MGallery by Sofitel" },
        { icon: "🌊", text: "Beachfront views of the Arabian Gulf" },
      ],
    }, // ✅ THIS COMMA FIXES YOUR BUILD

    nearbyAttractions: {
      title: "Nearby",
      attractions: [
        { name: "Palm Jumeirah", distance: "-", time: "-", icon: "🌴" },
        { name: "Dubai Marina", distance: "-", time: "-", icon: "🏙️" },
        { name: "Downtown Dubai", distance: "-", time: "-", icon: "🏙️" },
      ],
    },

    nearbyAttractions: {
      title: "Nearby",
      attractions: [
        { name: "Palm Jumeirah", distance: "-", time: "-", icon: "🌴" },
        { name: "Dubai Marina", distance: "-", time: "-", icon: "🏙️" },
        { name: "Downtown Dubai", distance: "-", time: "-", icon: "🏙️" },
      ],
    },

    cta: {
      title: "Interested in Armani Beach Residence?",
      description:
        "Contact our team to check live availability, receive the brochure, and get the latest pricing for your preferred unit type.",
      buttons: [
        { text: "Register Interest", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ========================
  // ARABIC VERSION
  // ========================
  ar: {
    seo: {
      title: "أرماني بيتش ريزيدنس | أرادا | نخلة جميرا دبي | تسليم Q4 2026",
      description:
        "أرماني بيتش ريزيدنس من أرادا في نخلة جميرا – دبي. متاح للبيع وقيد الإنشاء (نسبة جاهزية 3.49%) مع تسليم Q4 2026. رسوم خدمة 35–40 درهم/قدم² وخطة دفع 60% / 40%.",
      keywords:
        "أرماني بيتش ريزيدنس، أرادا، نخلة جميرا، دبي، شقق فاخرة، خطة دفع، Q4 2026",
      canonical: "/properties/apartments/arada/armani",
    },

    project: {
      name: "Armani Beach Residence",
      developer: "أرادا",
      location: "نخلة جميرا، دبي",
      status: "قيد الإنشاء",

      // ✅ platform
      startingPrice: "ابتداءً من 23 مليون درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: "60% / 40%",

      type: "شقق سكنية",
      units: "وحدات 2، 3، 4 و5 غرف نوم",

      constructionStatus: "قيد الإنشاء",
      readinessProgress: "3.49%",
      floorsFormula: "أرضي + 8 طوابق",
      furnishing: "تأثيث اختياري",
      serviceCharge: "35–40 درهم/قدم²",
      saleStatus: "متاح للبيع",
      unitsInSale: "12 وحدة متاحة للبيع",
      commissionNote: "ابتداءً من 5% عمولة",
      parking: {
        غرفتين: "موقف واحد",
        "3–5 غرف": "موقفان",
      },
    },

    hero: {
      backgroundUrl: `${BASE}/231030-frontside-view-05.jpg`,
      squareImageUrl: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/armani-arada.png`,
      companyName: "Arada",
      rating: null,
    },

    intro: {
      title: "حياة شاطئية فائقة الفخامة في نخلة جميرا",
      paragraphs: [
        "يجمع Armani Beach Residence في نخلة جميرا بين جورجيو أرماني وتاداو أندو في تعاون سكني نادر من تطوير أرادا.",
        "صُمّم المشروع لتحقيق الانسجام بين العمارة والمشهد البحري والحواس، مع إطلالات واسعة على الخليج العربي وأفق دبي.",
        "مرافق راقية للسكان فقط تشمل سبا، لاونج سيجار، قاعة مناسبات، تراس مُنسّق، مسابح متعددة وشاطئ خاص.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📄",
          color: "#1A5F7A",
          size: null,
          category: "وحدات فاخرة جداً",
          fileName: "Armani Beach Residence Brochure.pdf",
          description: "الكتيّب الرسمي للمشروع مع تفاصيل وأنواع الوحدات.",
        },
      ],
      imgUrl: `${BASE}/231031-Back-corner-ANT-view-04.jpg`,
      imgAlt: "واجهة Armani Beach Residence",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌴",
          value: "نخلة جميرا",
          label: "الموقع",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💰",
          value: "23M",
          label: "السعر من",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "Q4 2026",
          label: "التسليم",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: GALLERY,
      projectTag: "Armani Beach Residence",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "شقة غرفتي نوم",
            "نطاق المساحة الإجمالية": "2,965 قدم²",
            "السعر الابتدائي": "ابتداءً من 23,000,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_2BR],
          features: ["—"],
        },
        {
          id: "3br",
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "شقة 3 غرف نوم",
            "نطاق المساحة الإجمالية": "4,394 قدم²",
            "السعر الابتدائي": "ابتداءً من 39,000,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_3BR],
          features: ["—"],
        },
        {
          id: "4br",
          title: "شقة 4 غرف نوم",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "شقة 4 غرف نوم",
            "نطاق المساحة الإجمالية": "6,323 قدم²",
            "السعر الابتدائي": "ابتداءً من 51,000,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_4BR],
          features: ["—"],
        },
        {
          id: "5br-penthouse",
          title: "بنتهاوس 5 غرف نوم",
          bedrooms: 5,
          specs: {
            "نوع الوحدة": "بنتهاوس 5 غرف نوم",
            "نطاق المساحة الإجمالية": "9,684 قدم²",
            "السعر الابتدائي": "ابتداءً من 78,000,000 درهم",
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_5BR_PENTHOUSE],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق",
      amenities: [
        { label: "ساونا + حمام ثلجي", icon: "🧊", color: "#d7b46a" },
        { label: "تراس مُنسّق بخضرة كثيفة", icon: "🌿", color: "#d7b46a" },
        { label: "سينما", icon: "🎬", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "مسبح داخلي", icon: "🏊", color: "#d7b46a" },
        { label: "مسبح إنفينيتي كبير", icon: "🌊", color: "#d7b46a" },
        { label: "مسبح منفصل للأطفال", icon: "🧒", color: "#d7b46a" },
        { label: "لاونج سيجار", icon: "🥃", color: "#d7b46a" },
        { label: "شاطئ خاص", icon: "🏖️", color: "#d7b46a" },
        { label: "غرفة ألعاب للأطفال", icon: "🧸", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Armani Beach Residence",
      address:
        "طريق الهلال (Crescent Rd)، نخلة جميرا، دبي، الإمارات العربية المتحدة",
      lat: 25.1383125,
      lng: 55.1465625,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌴", text: "نخلة جميرا – طريق الهلال" },
        {
          icon: "🏨",
          text: "بالقرب من فندق ذا ريتريت نخلة جميرا (MGallery) من سوفيتل",
        },
        { icon: "🌊", text: "واجهة بحرية وإطلالات على الخليج العربي" },
      ],
    }, // ✅ THIS COMMA FIXES YOUR BUILD

    nearbyAttractions: {
      title: "بالقرب من",
      attractions: [
        { name: "نخلة جميرا", distance: "-", time: "-", icon: "🌴" },
        { name: "مرسى دبي", distance: "-", time: "-", icon: "🏙️" },
        { name: "وسط مدينة دبي", distance: "-", time: "-", icon: "🏙️" },
      ],
    },

    cta: {
      title: "مهتم بمشروع Armani Beach Residence؟",
      description:
        "تواصل معنا لمعرفة التوافر الحالي، والحصول على الكتيّب، وآخر الأسعار حسب نوع الوحدة.",
      buttons: [
        { text: "سجّل اهتمامك", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};
