// src/data/properties/apartments/azizi/riviera-azure.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ Studio / 1BR / 4BR (Penthouse)
// ✅ Bunny CDN filenames EXACT
// ✅ Azizi Developments
// ✅ Meydan / Riviera
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/riviera-azure";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg";

// ================= FILES =================
const BROCHURE_PDF = cdn("Riviera Azure.pdf");
const FLOORPLANS_PDF = cdn("azure_floorplans.pdf");

// Floor Plans
const FP_STUDIO = cdn("Riviera Azure studio.webp");
const FP_1BR = cdn("Riviera Azure1br floor plan.webp");
const FP_4BR = cdn("Riviera Azure 4br floor plan.webp");

// ================= GALLERY (ALL IMAGES) =================
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("12.webp"),
];

// ================= CONSTANTS =================
const HANDOVER = "TBA";
const PAYMENT_PLAN = "TBA";
const LOCATION_NAME = "Riviera, Meydan";
const DEVELOPER = "Azizi Developments";

// ======================================================
// DATA
// ======================================================
export const rivieraAzureData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Riviera Azure by Azizi | Apartments & Penthouses for Sale in Meydan",
      description:
        "Riviera Azure by Azizi Developments offers studio, 1 bedroom apartments and exclusive 4 bedroom penthouses in the heart of Meydan, Dubai.",
      keywords:
        "Riviera Azure, Azizi Riviera, Meydan apartments, Azizi Developments",
      canonical: "/properties/apartments/azizi/riviera-azure",
    },

    project: {
      name: "Riviera Azure",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,376,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Waterfront Residences",
      units: "Studio, 1 Bedroom & 4 Bedroom Penthouses",
    },

    hero: {
      backgroundUrl: cdn("7.webp"),
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "RIVIERA AZURE — CONTEMPORARY WATERFRONT LIVING",
      paragraphs: [
        "Riviera Azure is a premium residential development within Azizi Riviera, inspired by the French Mediterranean lifestyle and designed for modern urban living.",
        "The project features elegant residences, waterfront promenades, and a vibrant community atmosphere in the heart of Meydan.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Download Floor Plans",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Riviera Azure Meydan",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Waterfront",
          label: "Lifestyle Community",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🏙️",
          value: "Meydan",
          label: "Prime Location",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏡",
          value: "Penthouses",
          label: "Exclusive Living",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Riviera Azure",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: "Studio",
          specs: {
            "Total Area": "432.07 sq.ft",
            "Starting Price": "AED 1,376,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "687.07 sq.ft",
            "Starting Price": "AED 1,901,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "4br",
          title: "4 Bedroom Penthouse",
          bedrooms: 4,
          specs: {
            "Total Area": "7,028.57 sq.ft",
            "Starting Price": "AED 28,240,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Waterfront Promenade", icon: "🌊", color: "#c9a24d" },
        { label: "Swimming Pools", icon: "🏊", color: "#c9a24d" },
        { label: "Retail Boulevard", icon: "🛍️", color: "#c9a24d" },
        { label: "Cafés & Restaurants", icon: "☕", color: "#c9a24d" },
        { label: "Fitness Facilities", icon: "🏋️", color: "#c9a24d" },
        { label: "Landscaped Gardens", icon: "🌿", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
        { label: "Community Living", icon: "🏘️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Riviera Azure",
      address: LOCATION_NAME,
      lat: 25.0613044,
      lng: 55.2036285,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏙️", text: "Located in Azizi Riviera, Meydan" },
        { icon: "🚗", text: "Easy access to Downtown Dubai" },
        { icon: "🌊", text: "Waterfront community lifestyle" },
      ],
    },

    cta: {
      title: "Invest in Riviera Azure",
      description:
        "Request availability, floor plans, and the best prices for Riviera Azure by Azizi Developments.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY WITH EN + PRODUCTION SAFE)
  ar: {
    seo: {
      title:
        "ريفيرا أزور من عزيزي | شقق وبنتهاوس للبيع في ميدان (عزيزي ريفيرا)",
      description:
        "ريفيرا أزور من عزيزي للتطوير العقاري يوفر شقق استوديو وشقق غرفة نوم واحدة وبنتهاوس حصري 4 غرف نوم ضمن عزيزي ريفيرا في ميدان دبي.",
      keywords: "ريفيرا أزور، عزيزي ريفيرا، شقق ميدان، عزيزي للتطوير العقاري",
      canonical: "/properties/apartments/azizi/riviera-azure",
    },

    project: {
      name: "ريفيرا أزور",
      developer: "عزيزي للتطوير العقاري",
      location: "ريفيرا، ميدان",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,376,000 درهم",
      completionDate: HANDOVER, // ✅ parity (TBA)
      paymentPlan: PAYMENT_PLAN, // ✅ parity (TBA)
      type: "مساكن على الواجهة المائية",
      units: "استوديو، غرفة نوم واحدة وبنتهاوس 4 غرف نوم",
    },

    hero: {
      backgroundUrl: cdn("7.webp"), // ✅ same as EN
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "ريفيرا أزور — أسلوب حياة عصري على الواجهة المائية",
      paragraphs: [
        "ريفيرا أزور هو مشروع سكني راقٍ ضمن عزيزي ريفيرا، مستوحى من نمط الحياة المتوسطي الفرنسي ومصمم للحياة الحضرية الحديثة.",
        "يوفر المشروع مساكن أنيقة وممشى مائي وأجواء مجتمعية نابضة بالحياة في قلب ميدان.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "تحميل مخططات الوحدات",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "ريفيرا أزور ميدان",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "واجهة مائية",
          label: "أسلوب حياة",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🏙️",
          value: "ميدان",
          label: "موقع مميز",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏡",
          value: "بنتهاوس",
          label: "إقامة حصرية",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Riviera Azure",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio", // ✅ IMPORTANT
          title: "شقة استوديو",
          bedrooms: "استوديو",
          specs: {
            "إجمالي المساحة": "432.07 قدم²",
            "السعر الابتدائي": "1,376,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_STUDIO],
        },
        {
          id: "1br", // ✅ IMPORTANT
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "687.07 قدم²",
            "السعر الابتدائي": "1,901,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "4br", // ✅ IMPORTANT
          title: "بنتهاوس 4 غرف نوم",
          bedrooms: 4,
          specs: {
            "إجمالي المساحة": "7,028.57 قدم²",
            "السعر الابتدائي": "28,240,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": HANDOVER,
          },
          images: [FP_4BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "ممشى على الواجهة المائية", icon: "🌊", color: "#c9a24d" },
        { label: "مسابح", icon: "🏊", color: "#c9a24d" },
        { label: "شارع تسوق", icon: "🛍️", color: "#c9a24d" },
        { label: "مقاهي ومطاعم", icon: "☕", color: "#c9a24d" },
        { label: "مرافق لياقة بدنية", icon: "🏋️", color: "#c9a24d" },
        { label: "حدائق ومساحات خضراء", icon: "🌿", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
        { label: "حياة مجتمعية", icon: "🏘️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "ريفيرا أزور",
      address: "ريفيرا، ميدان",
      lat: 25.0613044,
      lng: 55.2036285,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏙️", text: "يقع داخل عزيزي ريفيرا في ميدان." },
        { icon: "🚗", text: "سهولة الوصول إلى وسط مدينة دبي." },
        { icon: "🌊", text: "مجتمع عصري على الواجهة المائية." },
      ],
    },

    cta: {
      title: "استثمر في ريفيرا أزور",
      description:
        "اطلب التوافر ومخططات الوحدات وأفضل الأسعار لمشروع ريفيرا أزور من عزيزي.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default rivieraAzureData;
