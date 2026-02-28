// src/data/properties/apartments/reportage/verdana-empire.js

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/reportage/verdana-empire";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/reportage.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("VERDANA EMPIRE BROCHURE DIGITAL.pdf");
const FACTSHEET_PDF = cdn("Fact Sheet - Verdana Empire (1).pdf");
const FLOORPLANS_PDF = cdn("VERDANA EMPIRE Floor Plans.pdf");
const MASTERPLAN_PDF = cdn("VERDANA EMPIRE Masterplan.pdf");
const FP_2BR = cdn("2 BR Verdana Empire Floor plan.webp");

// ================= GALLERY =================
const GALLERY = [
  cdn("bird day copy.jpg"),
  cdn("night-bird copy.jpg"),
  cdn("street-sunset copy.jpg"),
  cdn("tower-street copy.jpg"),
  cdn("tower-trees copy.jpg"),
  cdn("top copy.jpg"),
  cdn("villa-tower copy.jpg"),
  cdn("landscape- copy.jpg"),
  cdn("Pool Bird copy-gigapixel-art-scale-2_00x copy.jpg"),
  cdn("Tower Gym copy.jpg"),
  cdn("yoga copy.jpg"),
  cdn("run copy.jpg"),
  cdn("swing copy.jpg"),
  cdn("Shezlong copy.jpg"),
  cdn("Pergola Close copy.jpg"),
  cdn("masjed copy.jpg"),
  cdn("masjed copy 02.jpg"),
  cdn("street-cam copy.jpg"),
  cdn("STILL PRIVATE copy.jpg"),
  cdn("STILL PRIVATE copy 02.jpg"),
  cdn("interior copy.jpg"),
  cdn("kitchen copy.jpg"),
  cdn("bedroom copy.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2028";
const PAYMENT_PLAN = "20% / 80%";
const LOCATION_NAME = "Dubai Investments Park (DIP)";

// ======================================================
export const verdanaEmpireData = {
  en: {
    seo: {
      title: "Verdana Empire by Reportage | 2BR Apartments in DIP",
      description:
        "Verdana Empire by Reportage Properties offers contemporary 2 bedroom apartments in Dubai Investments Park with flexible payment plan and handover in Q4 2028.",
      canonical: "/properties/apartments/reportage/verdana-empire",
    },

    project: {
      name: "Verdana Empire",
      developer: "Reportage Properties",
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 1,111,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "2 Bedroom",
    },

    hero: {
      backgroundUrl: cdn("verdana-7-full-movie-new.mp4"),
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Reportage Properties",
    },

    intro: {
      title: "Verdana Empire — Contemporary Living in DIP",
      paragraphs: [
        "Verdana Empire is a premium residential development by Reportage Properties located in Dubai Investments Park.",
        "The project blends modern architecture with landscaped outdoor spaces and wellness-driven amenities.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF },
        { title: "Factsheet", url: FACTSHEET_PDF },
        { title: "Master Plan", url: MASTERPLAN_PDF },
      ],
      imgUrl: GALLERY[0],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Verdana Empire",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,071 sq.ft",
            "Starting Price": "AED 1,111,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Swimming Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Jogging Track", icon: "🏃", color: "#c9a24d" },
        { label: "Yoga Area", icon: "🧘", color: "#c9a24d" },
        { label: "Children’s Play Area", icon: "🧸", color: "#c9a24d" },
        { label: "Retail & Services", icon: "🛍️", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Verdana Empire",
      address: LOCATION_NAME,
      lat: 24.9923574,
      lng: 55.1680566,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Direct access to Sheikh Mohammed Bin Zayed Road" },
        { icon: "✈️", text: "Close to Al Maktoum International Airport" },
        { icon: "🏙️", text: "Connected to key Dubai districts" },
      ],
    },
  },

  ar: {
    project: {
      name: "فيردانا إمباير",
      developer: "ربورتاج العقارية",
      location: "دبي إنفستمنتس بارك",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "1,111,000 درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "شقق سكنية",
      units: "غرفتين نوم",
    },

    hero: {
      backgroundUrl: cdn("verdana-7-full-movie-new.mp4"),
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "ربورتاج العقارية",
      rating: null,
    },

    intro: {
      title: "فيردانا إمباير — أسلوب حياة عصري في دبي إنفستمنتس بارك",
      paragraphs: [
        "فيردانا إمباير هو مشروع سكني مميز من تطوير ربورتاج العقارية، يقع في دبي إنفستمنتس بارك ويجمع بين التصميم العصري والمساحات الخضراء المفتوحة.",
        `يوفر المشروع شقق غرفتين نوم تبدأ من 1,111,000 درهم مع خطة سداد ${PAYMENT_PLAN} وموعد تسليم في ${HANDOVER}.`,
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF },
        { title: "صحيفة المشروع", url: FACTSHEET_PDF },
        { title: "المخطط العام", url: MASTERPLAN_PDF },
      ],
      imgUrl: GALLERY[0],
      imgAlt: "فيردانا إمباير من ربورتاج",
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Verdana Empire",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,071 قدم²",
            "السعر الابتدائي": "1,111,000 درهم",
            "خطة السداد": PAYMENT_PLAN,
            "موعد التسليم": "الربع الرابع 2028",
          },
          images: [FP_2BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "مسبح", icon: "🏊", color: "#c9a24d" },
        { label: "نادي رياضي مجهز", icon: "🏋️", color: "#c9a24d" },
        { label: "مسار للجري", icon: "🏃", color: "#c9a24d" },
        { label: "منطقة يوغا", icon: "🧘", color: "#c9a24d" },
        { label: "منطقة ألعاب للأطفال", icon: "🧸", color: "#c9a24d" },
        { label: "محلات وخدمات", icon: "🛍️", color: "#c9a24d" },
        { label: "أمن على مدار الساعة", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "فيردانا إمباير",
      address: "دبي إنفستمنتس بارك",
      lat: 24.9923574,
      lng: 55.1680566,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى شارع الشيخ محمد بن زايد" },
        { icon: "✈️", text: "بالقرب من مطار آل مكتوم الدولي" },
        { icon: "🏙️", text: "موقع متصل بمناطق دبي الرئيسية" },
      ],
    },

    cta: {
      title: "مهتم بمشروع فيردانا إمباير؟",
      description:
        "سجّل بياناتك الآن للحصول على أحدث الأسعار والتوافر والمستندات الرسمية من المطور.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default verdanaEmpireData;
