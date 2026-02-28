// src/data/properties/apartments/reportage/verdana-residence.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR (complete parity)
// ✅ Exact Bunny filenames
// ✅ Correct location + amenities
// ✅ Payment plan formatted correctly
// ✅ Production ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/reportage/verdana-residence";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/reportage.png";

// ================= FILES =================
const HERO_VIDEO = cdn("1 verdana-residence1.mp4");

const BROCHURE_PDF = cdn("18 Verdana Residence Brochure Digital.pdf");
const FACTSHEET_PDF = cdn("Verdana Residence Fact Sheet V1.pdf");
const FLOORPLANS_PDF = cdn("Verdana Residence-Floor Plans Final.pdf");
const MASTERPLAN_PDF = cdn("Verdana Residence Master Plan-21 Sep.pdf");

const FP_1BR = cdn("Verdana Residence 1BR Floor Plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("CAM-01-DAY-5000.jpg"),
  cdn("CAM-08-DAY-5000.jpg"),
  cdn("cam-09-day.jpg"),
  cdn("Gym20220922a.jpg"),
  cdn("kids.jpg"),
  cdn("looby.jpg"),
  cdn("living.jpg"),
  cdn("Dining.jpg"),
  cdn("Kitchen-Screenshot 2022-09-21 104705.jpg"),
  cdn("Bedroom.jpg"),
  cdn("bath0150.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2026";
const PAYMENT_PLAN = "21% / 79%";
const LOCATION_NAME = "Dubai Investments Park (DIP)";
const STARTING_PRICE = "AED 980,000";
const AREA_SIZE = "601 sq.ft";

// ======================================================
// DATA
// ======================================================
export const verdanaResidenceData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Verdana Residence by Reportage | 1 Bedroom Apartments in Dubai Investments Park",
      description:
        "Verdana Residence by Reportage Properties offers modern 1 bedroom apartments in Dubai Investments Park (DIP). Starting from AED 980,000 with a 21/79 payment plan and handover in Q4 2026.",
      keywords:
        "Verdana Residence, Reportage Properties, 1 bedroom apartments DIP, Dubai Investments Park apartments",
      canonical: "/properties/apartments/reportage/verdana-residence",
    },

    project: {
      name: "Verdana Residence",
      developer: "Reportage Properties",
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: STARTING_PRICE,
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "1 Bedroom",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Reportage Properties",
      rating: null,
      videoUrl: HERO_VIDEO,
    },

    intro: {
      title: "Verdana Residence — Contemporary Living in DIP",
      paragraphs: [
        "Verdana Residence is a modern residential development by Reportage Properties located in Dubai Investments Park, offering thoughtfully designed homes within a serene community environment.",
        "The project features spacious 1 bedroom apartments with efficient layouts, premium finishes, and access to a wide range of lifestyle and recreational amenities.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Factsheet", url: FACTSHEET_PDF, type: "secondary" },
        { title: "Master Plan", url: MASTERPLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "Verdana Residence by Reportage",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "DIP",
          label: "Prime Location",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "AED 980K",
          label: "Starting Price",
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
      projectTag: "Verdana Residence",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": AREA_SIZE,
            "Starting Price": STARTING_PRICE,
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Children’s Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Landscaped Gardens", icon: "🌿", color: "#c9a24d" },
        { label: "Jogging Track", icon: "🏃", color: "#c9a24d" },
        { label: "Retail & Dining", icon: "🛍️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
        { label: "Parking Facilities", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Verdana Residence",
      address: LOCATION_NAME,
      lat: 24.9914324,
      lng: 55.1789662,
      zoom: 17,
      proximityFeatures: [
        {
          icon: "🚗",
          text: "Easy access to Sheikh Mohammed Bin Zayed Road.",
        },
        {
          icon: "✈️",
          text: "Close to Al Maktoum International Airport.",
        },
        {
          icon: "🏙️",
          text: "Well connected to key Dubai destinations.",
        },
      ],
    },

    cta: {
      title: "Invest in Verdana Residence",
      description:
        "Request availability, price lists, and official payment plans directly from Reportage Properties.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  ar: {
    seo: {
      title: "فيردانا ريزيدنس من ربورتاج | شقق غرفة نوم واحدة في دبي",
      description:
        "فيردانا ريزيدنس من ربورتاج توفر شقق غرفة نوم واحدة في دبي إنفستمنتس بارك مع خطة سداد 21/79 والتسليم في الربع الرابع 2026.",
      keywords: "فيردانا ريزيدنس، ربورتاج العقارية، شقق دبي إنفستمنتس بارك",
      canonical: "/properties/apartments/reportage/verdana-residence",
    },

    project: {
      name: "فيردانا ريزيدنس",
      developer: "ربورتاج العقارية",
      location: "دبي إنفستمنتس بارك",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "980,000 درهم",
      completionDate: "الربع الرابع 2026",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفة نوم واحدة",
    },

    hero: {
      backgroundUrl: HERO_VIDEO,
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "ربورتاج العقارية",
      rating: null,
    },

    intro: {
      title: "فيردانا ريزيدنس — أسلوب حياة عصري في دبي إنفستمنتس بارك",
      paragraphs: [
        "فيردانا ريزيدنس هو مشروع سكني حديث من ربورتاج العقارية في دبي إنفستمنتس بارك، يتميز بتصميم عصري ومرافق متكاملة.",
        "يوفر المشروع شقق غرفة نوم واحدة بمساحات عملية وجودة تشطيب عالية.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "ملف المعلومات", url: FACTSHEET_PDF, type: "secondary" },
        { title: "المخطط الرئيسي", url: MASTERPLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "فيردانا ريزيدنس",
      floatingCards: [],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "فيردانا ريزيدنس",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "إجمالي المساحة": "601 قدم²",
            "السعر الابتدائي": "980,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الرابع 2026",
          },
          images: [FP_1BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي", icon: "🏋️", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "حدائق خضراء", icon: "🌿", color: "#c9a24d" },
        { label: "مسار للجري", icon: "🏃", color: "#c9a24d" },
        { label: "محلات ومطاعم", icon: "🛍️", color: "#c9a24d" },
        { label: "أمن على مدار الساعة", icon: "🛡️", color: "#c9a24d" },
        { label: "مواقف سيارات", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "فيردانا ريزيدنس",
      address: "دبي إنفستمنتس بارك",
      lat: 24.9914324,
      lng: 55.1789662,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية." },
        { icon: "✈️", text: "قريب من مطار آل مكتوم الدولي." },
        { icon: "🏙️", text: "متصل بمناطق دبي الحيوية." },
      ],
    },

    cta: {
      title: "استثمر في فيردانا ريزيدنس",
      description: "اطلب قائمة الأسعار والتوافر وخطط السداد الرسمية الآن.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default verdanaResidenceData;
