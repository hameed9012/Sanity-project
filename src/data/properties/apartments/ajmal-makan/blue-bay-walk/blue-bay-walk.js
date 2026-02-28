// src/data/properties/apartments/ajmal-makan/blue-bay-walk.js
// ✅ FULL BLUEPRINT COMPLIANT (Exotica reference)
// ✅ EN + AR
// ✅ Studio only
// ✅ Ready
// ✅ Exact Bunny filenames only
// ✅ Ajmal Makan standard

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/ajmal-makan/blue-bay-walk";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

// Developer square logo
const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png";

// ================= FILES =================
const BROCHURE_PDF = cdn("Bluebay walk.pdf");
const MASTERPLAN_PDF = cdn("blue-bay-walk-masterplan.pdf");

// Floor plan
const FP_STUDIO = `https://luxury-real-estate-media.b-cdn.net/ajmal-makan/blue-bay-walk/Studio%20Blue%20bay%20walk%20Floor%20Plan.webp`;

// ================= GALLERY =================
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
  cdn("13.webp"),
  cdn("14.webp"),
  cdn("15.webp"),
  cdn("16.webp"),
  cdn("17.webp"),
];

// ================= CONSTANTS =================
const HANDOVER = "Ready";
const PAYMENT_PLAN = "100%";
const LOCATION_NAME = "Al Hamriya, Sharjah";
const DEVELOPER = "Ajmal Makan";

// ======================================================
// DATA
// ======================================================
export const blueBayWalkData = {
  // ================= EN =================
  en: {
    seo: {
      title: "Blue Bay Walk by Ajmal Makan | Studio Apartments in Al Hamriya",
      description:
        "Blue Bay Walk by Ajmal Makan offers ready studio apartments in Al Hamriya, Sharjah. Starting from AED 460,000 with a 100% payment plan.",
      keywords:
        "Blue Bay Walk, Ajmal Makan, studio apartment Sharjah, ready apartments Al Hamriya",
      canonical: "/properties/apartments/ajmal-makan/blue-bay-walk",
    },

    project: {
      name: "Blue Bay Walk",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Secondary",
      market: "ready",
      startingPrice: "AED 460,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Residential Apartments",
      units: "Studio",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "BLUE BAY WALK — READY COASTAL LIVING",
      paragraphs: [
        "Blue Bay Walk by Ajmal Makan is a completed waterfront residential project located in Al Hamriya, Sharjah.",
        "The development offers ready studio apartments with a 100% payment plan, making it ideal for both end users and investors seeking immediate ownership.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Master Plan", url: MASTERPLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Blue Bay Walk Al Hamriya",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "Al Hamriya",
          label: "Waterfront Location",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "AED 460K",
          label: "Starting Price",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏠",
          value: "Ready",
          label: "Immediate Move-in",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Blue Bay Walk",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            "Total Area": "411.93 sq.ft",
            "Starting Price": "AED 460,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_STUDIO],
        },
      ],
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Retail Promenade", icon: "🛍️", color: "#c9a24d" },
        { label: "Waterfront Walkways", icon: "🌊", color: "#c9a24d" },
        { label: "Cafés & Restaurants", icon: "☕", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
        { label: "Parking Facilities", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Blue Bay Walk",
      address: LOCATION_NAME,
      lat: 25.4957698,
      lng: 55.5369558,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "Easy access to Sharjah city and highways" },
        { icon: "🌊", text: "Direct waterfront lifestyle" },
        { icon: "🏙️", text: "Close to retail and daily essentials" },
      ],
    },

    cta: {
      title: "Own a Ready Studio at Blue Bay Walk",
      description:
        "Request availability, floor plans, and official Ajmal Makan documents.",
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
      title: "بلو باي ووك من عجمان مكان | شقق استوديو جاهزة في الحميرية",
      description:
        "بلو باي ووك من عجمان مكان يوفر شقق استوديو جاهزة في منطقة الحميرية بالشارقة، بأسعار تبدأ من 460,000 درهم وخطة سداد 100%.",
      keywords: "بلو باي ووك, عجمان مكان, استوديو الشارقة, شقق جاهزة الحميرية",
      canonical: "/properties/apartments/ajmal-makan/blue-bay-walk",
    },

    project: {
      name: "بلو باي ووك",
      developer: "عجمان مكان",
      location: "الحميرية، الشارقة",
      status: "ثانوي (جاهز)",
      market: "ready",
      startingPrice: "460,000 درهم",
      completionDate: "جاهز",
      paymentPlan: "100%",
      type: "شقق سكنية",
      units: "استوديو",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "عجمان مكان",
      rating: null,
    },

    intro: {
      title: "بلو باي ووك — أسلوب حياة ساحلي جاهز",
      paragraphs: [
        "بلو باي ووك من عجمان مكان هو مشروع سكني مكتمل يقع على الواجهة البحرية في منطقة الحميرية بالشارقة.",
        "يوفر المشروع شقق استوديو جاهزة مع خطة سداد 100%، مما يجعله خيارًا مثاليًا للسكن الفوري أو الاستثمار بعائد ثابت.",
      ],
      brochures: [
        { title: "تحميل الكتيب", url: BROCHURE_PDF, type: "main" },
        { title: "المخطط العام", url: MASTERPLAN_PDF, type: "secondary" },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "بلو باي ووك الحميرية",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "📍",
          value: "الحميرية",
          label: "موقع على الواجهة البحرية",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💰",
          value: "460 ألف درهم",
          label: "سعر البداية",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏠",
          value: "جاهز",
          label: "سكن فوري",
        },
      ],
    },

    gallery: {
      title: "معرض المشروع",
      slides: GALLERY,
      projectTag: "بلو باي ووك",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "شقة استوديو",
          bedrooms: 0,
          specs: {
            "إجمالي المساحة": "411.93 قدم²",
            "السعر الابتدائي": "460,000 درهم",
            "خطة السداد": "100%",
            "موعد التسليم": "جاهز",
          },
          images: [FP_STUDIO],
        },
      ],
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "ممشى تجاري", icon: "🛍️", color: "#c9a24d" },
        { label: "ممرات على الواجهة البحرية", icon: "🌊", color: "#c9a24d" },
        { label: "مقاهي ومطاعم", icon: "☕", color: "#c9a24d" },
        { label: "أمن على مدار الساعة", icon: "🛡️", color: "#c9a24d" },
        { label: "مواقف سيارات", icon: "🚗", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "بلو باي ووك",
      address: "الحميرية، الشارقة",
      lat: 25.4957698,
      lng: 55.5369558,
      zoom: 17,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى مدينة الشارقة والطرق الرئيسية" },
        { icon: "🌊", text: "أسلوب حياة على الواجهة البحرية" },
        { icon: "🏙️", text: "قريب من المتاجر والخدمات اليومية" },
      ],
    },

    cta: {
      title: "امتلك استوديو جاهز في بلو باي ووك",
      description: "اطلب التوفر، المخططات، وجميع مستندات عجمان مكان الرسمية.",
      buttons: [
        { label: "سجل اهتمامك", action: "enquire" },
        { label: "تحميل الكتيب", action: "download-brochure" },
      ],
    },
  },
};

export default blueBayWalkData;
