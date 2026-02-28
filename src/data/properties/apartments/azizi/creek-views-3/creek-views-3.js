// src/data/properties/apartments/azizi/creek-views-3/creek-views-3.js
// ✅ Reference: creek-views-2 structure (EN + AR)
// ✅ Tailored 100% to Creek Views 3 (Adeeba)
// ✅ Bunny folder: /azizi/creek-views-3
// ✅ FloorPlans contain ONLY: Total Area / Starting Price / Handover / Payment Plan

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const PROJECT_DIR = "/azizi/creek-views-3";

const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(fileName)}`;

// ---------------- Assets ----------------
const FACTSHEET_PDF = cdn("Creek Views 3 Factsheet.pdf");
const BROCHURE_PDF = cdn("Creek Views Brochure.pdf");
const VIDEO = cdn("Creek Views III_with price.mp4");
const FLOOR_PLATES = cdn("Creek views 3 - Floor plates.pdf");

// ---------------- Gallery ----------------
const GALLERY = [
  cdn("Cam 1 - Community.jpg"),
  cdn("Cam 2-Community 2, street, park sid.jpg"),
  cdn("Cam 3-Community 3, street view.jpg"),
  cdn("Cam 4-Balcony.jpg"),
  cdn("Cam 5- facade.jpg"),
  cdn("Cam 6 - Pool- without people.jpg"),
  cdn("Cam 7 - Retail.jpg"),
  cdn("Creek view Living 01.jpg"),
  cdn("Creek view Living 02.jpg"),
  cdn("creek view Bedroom.jpg"),
  cdn("Bathroom view.jpg"),
  cdn("Gym View 01.jpg"),
  cdn("Gym View 02.jpg"),
  cdn("Kids Room Revision 3.jpg"),
  cdn("Reception View 01.jpg"),
  cdn("Reception View 02.jpg"),
];

// ---------------- Export ----------------
export const aziziCreekViews3Data = {
  en: {
    seo: {
      title:
        "Creek Views 3 (Adeeba) by Azizi | 1–3 Bedroom Apartments in Dubai Healthcare City",
      description:
        "Creek Views 3 (Adeeba) by Azizi Developments in Dubai Healthcare City offers spacious 1, 2 and 3-bedroom apartments with strong payment plan and 2026 handover.",
      keywords:
        "Creek Views 3, Adeeba, Azizi Developments, Dubai Healthcare City, DHCC, 1 bedroom, 2 bedroom, 3 bedroom",
      canonical: "/properties/apartments/azizi/creek-views-3",
    },

    project: {
      name: "Creek Views 3 (Adeeba)",
      developer: "Azizi Developments",
      location: "Dubai Healthcare City (DHCC), Dubai, UAE",
      status: "Off-plan",
      startingPrice: "AED 1,648,000",
      completionDate: "Q2 2026",
      paymentPlan: "30% / 70%",
      type: "Apartments",
      units: "1, 2 & 3 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: cdn("Cam 5- facade.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "MODERN LIVING IN DUBAI HEALTHCARE CITY",
      paragraphs: [
        "Creek Views 3 (Adeeba) is an off-plan residential development by Azizi Developments located in Dubai Healthcare City.",
        "The project features well-sized 1, 2 and 3-bedroom apartments with modern layouts and community views.",
        "Residents benefit from a flexible 30/70 payment plan and a scheduled handover in mid-2026.",
      ],
      brochures: [
        { title: "Download Factsheet", url: FACTSHEET_PDF, type: "factsheet" },
        { title: "Download Brochure", url: BROCHURE_PDF, type: "brochure" },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/creek-views-3/Pool%20View.png`,
      imgAlt: "Creek Views 3 exterior view",
    },

    gallery: {
      title: "Creek Views 3 Visuals",
      slides: GALLERY,
      projectTag: "Creek Views 3 (Adeeba)",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom (1BHK)",
          bedrooms: 1,
          specs: {
            "Total Area": "728 sq.ft",
            "Starting Price": "AED 1,648,000",
            Handover: "Q2 2026",
            "Payment Plan": "30% / 70%",
          },
          images: [FLOOR_PLATES],
          features: ["—"],
        },
        {
          id: "2br",
          title: "2 Bedroom (2BHK)",
          bedrooms: 2,
          specs: {
            "Total Area": "1,452 sq.ft",
            "Starting Price": "AED 2,626,000",
            Handover: "Q2 2026",
            "Payment Plan": "30% / 70%",
          },
          images: [FLOOR_PLATES],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedroom (3BHK)",
          bedrooms: 3,
          specs: {
            "Total Area": "2,063 sq.ft",
            "Starting Price": "AED 4,669,000",
            Handover: "Q2 2026",
            "Payment Plan": "30% / 70%",
          },
          images: [FLOOR_PLATES],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },
  },

  ar: {
    seo: {
      title: "كريك فيوز 3 (عذيبة) من عزيزي | شقق 1–3 غرف في مدينة دبي الطبية",
      description:
        "كريك فيوز 3 (عذيبة) من عزيزي للتطوير في مدينة دبي الطبية يوفر شقق 1 و2 و3 غرف نوم مع خطة دفع 30/70 وتسليم في 2026.",
      keywords: "كريك فيوز 3, عذيبة, عزيزي, مدينة دبي الطبية, DHCC, شقق",
      canonical: "/properties/apartments/azizi/creek-views-3",
    },

    project: {
      name: "كريك فيوز 3 (عذيبة)",
      developer: "عزيزي للتطوير العقاري",
      location: "مدينة دبي الطبية (DHCC)، دبي، الإمارات",
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 1,648,000 درهم",
      completionDate: "Q2 2026",
      paymentPlan: "30% / 70%",
      type: "شقق سكنية",
      units: "شقق 1 و2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("Cam 5- facade.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "سكن عصري في مدينة دبي الطبية",
      paragraphs: [
        "يقع مشروع كريك فيوز 3 (عذيبة) في مدينة دبي الطبية ويُعد من المشاريع السكنية على الخريطة من عزيزي للتطوير.",
        "يوفر المشروع شققًا واسعة بغرفة وغرفتين وثلاث غرف نوم مع تصميمات حديثة.",
        "يتميز المشروع بخطة دفع 30/70 وموعد تسليم في منتصف عام 2026.",
      ],
      brochures: [
        {
          title: "تحميل ورقة المعلومات",
          url: FACTSHEET_PDF,
          type: "factsheet",
        },
        { title: "تحميل الكتيب", url: BROCHURE_PDF, type: "brochure" },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/creek-views-3/Pool%20View.png`,
      imgAlt: "Creek Views 3 exterior view",
    },

    gallery: {
      title: "صور كريك فيوز 3",
      slides: GALLERY,
      projectTag: "كريك فيوز 3 (عذيبة)",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "728 قدم²",
            "السعر الابتدائي": "1,648,000 درهم",
            "موعد التسليم": "الربع الثاني 2026",
            "خطة الدفع": "30% / 70%",
          },
          images: [FLOOR_PLATES],
          features: ["—"],
        },
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,452 قدم²",
            "السعر الابتدائي": "2,626,000 درهم",
            "موعد التسليم": "الربع الثاني 2026",
            "خطة الدفع": "30% / 70%",
          },
          images: [FLOOR_PLATES],
          features: ["—"],
        },
        {
          id: "3br",
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "2,063 قدم²",
            "السعر الابتدائي": "4,669,000 درهم",
            "موعد التسليم": "الربع الثاني 2026",
            "خطة الدفع": "30% / 70%",
          },
          images: [FLOOR_PLATES],
          features: ["—"],
        },
      ],
      brochureHref: FACTSHEET_PDF,
    },
  },
};

export default aziziCreekViews3Data;
