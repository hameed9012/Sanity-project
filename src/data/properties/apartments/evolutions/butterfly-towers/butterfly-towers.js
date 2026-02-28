// src/data/properties/apartments/evolutions/butterfly-towers/butterfly-towers.js
// ✅ 100% FULL WORKING (EN + AR)
// ✅ Payment plan "spreaded" like your other .js files:
//    - project.paymentPlan (readable string)
//    - paymentPlan section with headline + milestones + note
//    - Payment Plan added inside EVERY floor plan specs (EN + AR)
// ✅ Keeps your Bunny structure + PDFs + images

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "evolutions/butterfly-towers";

/** Safe with spaces, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Floorplan PNGs (spaces safe)
// ========================
const STUDIO_FLOORPLAN_IMG = cdn("Butterfly towers studio floor plan.png");
const ONEBR_FLOORPLAN_IMG = cdn("Butterfly Towers 1BR Floor plan.png");
const TWOBR_FLOORPLAN_IMG = cdn("Butterfly Towers 2BR floor plan.png");
const THREEBR_FLOORPLAN_IMG = cdn("Butterfly Towers 3 br floor plan.png");

// ========================
// PDFs (spaces safe)
// ========================
const BROCHURE_EN_PDF = cdn("ENGLISH_The Butterfly Brochure.pdf");
const PAYMENT_PLAN_PDF = cdn("Butterfly Payment Plan.pdf");
const FACTSHEET_PDF = cdn("The Butterfly Factsheet.pdf");
const TOWER_A_UNITS_FLOORPLANS_PDF = cdn(
  "Butterfly Tower - Individual Units Floor Plans - Tower A.pdf"
);
const TOWER_A_FLOORPLATE_PDF = cdn("The Butterfly Floor Plate tower A.pdf");

// ========================
// Payment plan (spreaded)
// ========================
const PAYMENT_PLAN_HEADLINE = "20% / 30% / 10% / 40%";

const PAYMENT_PLAN_EN =
  "On booking 20% / During construction 30% / Upon handover 10% / Post-handover 40% (within 60 months)";
const PAYMENT_PLAN_AR =
  "عند الحجز 20% / أثناء الإنشاء 30% / عند التسليم 10% / بعد التسليم 40% (خلال 60 شهر)";

export const butterflyTowersData = {
  // =============================== EN ===============================
  en: {
    seo: {
      title:
        "Butterfly Towers | Furnished Studios, 1–3BR Apartments in Arjan Dubai | Handover Q1 2029",
      description:
        "Butterfly Towers is a twin-tower residential project in Arjan, Dubai offering fully furnished apartments (studio, 1BR, 2BR, 3BR) with equipped kitchens, plus retail. Payment plan: 20% booking, 30% during construction, 10%upon handover, 40% post-handover within 60 months. Handover Q1 2029.",
      keywords:
        "Butterfly Towers, Arjan Dubai, Al Sayyah Group, Evolutions, furnished apartments, off-plan Dubai, payment plan, studio, 1BR, 2BR, 3BR",
      canonical: "/properties/apartments/evolutions/butterfly-towers",
    },

    project: {
      name: "Butterfly Towers",
      developer: "Al Sayyah Group", // ✅ correct developer
      managingCompany: "Evolutions",
      location: "Arjan, Dubai, UAE",
      status: "Off-Plan",
      handover: "Q1 2029",
      structure: "Two Towers: 2B + G + 2P + 17 Floors",
      furnishing: "Fully furnished",
      serviceCharge: "15–16 AED/sqft",
      parking: "1 Parking",
      unitTypes: ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom"],

      // ✅ spreaded payment plan (readable)
      paymentPlan: PAYMENT_PLAN_EN,

      // optional (kept because you already had it)
      units: { total: 570, towerA: 285, towerB: 285 },
      unitMix: [
        { type: "Studio", count: 200, sizeSqft: "408.5 – 500.7" },
        { type: "1 Bedroom", count: 270, sizeSqft: "830.7 – 1098.8" },
        { type: "2 Bedroom", count: 100, sizeSqft: "1349.6 – 1723.9" },
        { type: "Retail", count: 26, sizeSqft: "406.4 – 3759.4" },
      ],

      highlights: [
        "Fully furnished apartments",
        "Equipped kitchens",
        "Twin-tower signature architecture",
        "Wellness + family-friendly amenities",
      ],
    },

    hero: {
      backgroundUrl: `${BASE}/EXTERIOR%20PICS/Cam%201.jpg`,
      squareImageUrl: `/evolutions.jpg`,
      companyName: "Evolutions",
      rating: 4.7,
      badges: ["Arjan", "Fully Furnished", "Handover Q1 2029"],
    },

    intro: {
      title: "CONTEMPORARY TWIN-TOWER LIVING IN ARJAN",
      paragraphs: [
        "Butterfly Towers is a pair of twin towers in Arjan—crafted as a symbol of contemporary living where elegance meets tranquility.",
        "Residences are fully furnished with equipped kitchens, designed for a balanced lifestyle in a fast-growing Dubai community.",
        "A curated amenity set supports wellness, families, and everyday comfort—yoga deck, jogging track, pools, kids play areas, and more.",
      ],
      brochures: [
        { title: "Download Brochure (EN)", url: BROCHURE_EN_PDF, type: "main" },
        { title: "Payment Plan (PDF)", url: PAYMENT_PLAN_PDF, type: "payment" },
        { title: "Factsheet (PDF)", url: FACTSHEET_PDF, type: "factsheet" },
        {
          title: "Tower A — Individual Units Floor Plans (PDF)",
          url: TOWER_A_UNITS_FLOORPLANS_PDF,
          type: "floorplans",
        },
        {
          title: "Tower A — Floor Plate (PDF)",
          url: TOWER_A_FLOORPLATE_PDF,
          type: "floorplate",
        },
      ],
      imgUrl: `${BASE}/EXTERIOR%20PICS/Cam%205.jpg`,
      imgAlt: "Butterfly Towers - Exterior",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "Arjan",
          label: "Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🛋️",
          value: "Furnished",
          label: "Interiors",
        },
        {
          bottom: "14%",
          right: "-20px",
          icon: "💳",
          value: "20/30/10/40",
          label: "Payment Plan",
        },
      ],
    },

    // ✅ Dedicated “spreaded” payment plan section (like Coventry/Lazord)
    paymentPlan: {
      title: "Payment plan",
      headline: PAYMENT_PLAN_HEADLINE,
      milestones: [
        { label: "On booking", when: "Booking", percent: 20 },
        { label: "During construction", when: "Construction", percent: 30 },
        { label: "Upon handover", when: "Handover", percent: 10 },
        { label: "Within 60 months PH", when: "Post-handover", percent: 40 },
      ],
      note: "Project information is provided by the developer and may change. If you notice an error, contact support to update the data.",
    },

    gallery: {
      title: "Gallery",
      // ✅ keep your existing key AND add slides for compatibility
      images: [
        `${BASE}/EXTERIOR%20PICS/Cam%201.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%202.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%203.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%204.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%205.jpg`,

        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/1.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/2.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/3.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/4.png`,

        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/1.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/2.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/3.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/4.png`,

        `${BASE}/INTERIOR%20PICTURES/STUDIO/2.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/3.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/Image4-enhanced%20%281%29.png`,

        `${BASE}/INTERIOR%20PICTURES/BATHROOM/STUDIO/2.png`,
      ],
      slides: [
        `${BASE}/EXTERIOR%20PICS/Cam%201.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%202.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%203.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%204.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%205.jpg`,

        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/1.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/2.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/3.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/4.png`,

        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/1.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/2.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/3.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/4.png`,

        `${BASE}/INTERIOR%20PICTURES/STUDIO/2.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/3.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/Image4-enhanced%20%281%29.png`,

        `${BASE}/INTERIOR%20PICTURES/BATHROOM/STUDIO/2.png`,
      ],
      projectTag: "Butterfly Towers",
    },

    floorPlans: {
      type: "apartments",
      brochureHref: FACTSHEET_PDF,
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO",
            "Total Range": "408.5 - 500.7 SQ.FT.",
            "Starting Price": "AED 1,112,777",
            Handover: "Q1 2029",
            "Payment Plan": PAYMENT_PLAN_EN, // ✅ added
          },
          images: [STUDIO_FLOORPLAN_IMG],
          features: [
            "Fully furnished",
            "Equipped kitchen with appliances",
            "Modern finishing with high-quality materials",
          ],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM",
            "Total Range": "847.98 - 958.63 SQ.FT.",
            "Starting Price": "AED 1,330,777",
            Handover: "Q1 2029",
            "Payment Plan": PAYMENT_PLAN_EN, // ✅ added
          },
          images: [ONEBR_FLOORPLAN_IMG],
          features: [
            "Fully furnished",
            "Equipped kitchen with appliances",
            "Modern finishing with high-quality materials",
          ],
        },
        {
          id: "2br",
          title: "2 Bedrooms",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOMS",
            "Total Range": "1,361.74 - 1,439.88 SQ.FT.",
            "Starting Price": "AED 2,112,777",
            Handover: "Q1 2029",
            "Payment Plan": PAYMENT_PLAN_EN, // ✅ added
          },
          images: [TWOBR_FLOORPLAN_IMG],
          features: [
            "Fully furnished",
            "Equipped kitchen with appliances",
            "Modern finishing with high-quality materials",
          ],
        },
        {
          id: "3br",
          title: "3 Bedrooms",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOMS",
            "Total Range": "1,711.13 - 1,723.91 SQ.FT.",
            "Starting Price": "AED 2,480,777",
            Handover: "Q1 2029",
            "Payment Plan": PAYMENT_PLAN_EN, // ✅ added
          },
          images: [THREEBR_FLOORPLAN_IMG],
          features: [
            "Fully furnished",
            "Equipped kitchen with appliances",
            "Modern finishing with high-quality materials",
          ],
        },
      ],
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "JOGGING TRACK", icon: "🏃", color: "#d7b46a" },
        { label: "YOGA DECK", icon: "🧘", color: "#d7b46a" },
        { label: "OUTDOOR KIDS PLAY AREA", icon: "🛝", color: "#d7b46a" },
        { label: "KIDS POOL", icon: "🧒", color: "#d7b46a" },
        { label: "LIBRARY", icon: "📚", color: "#d7b46a" },
        { label: "SWIMMING POOL", icon: "🏊", color: "#d7b46a" },
        { label: "LANDSCAPE POOL WITH DECK", icon: "🏖️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Butterfly Towers",
      address: "Arjan, Al Barsha, Dubai, United Arab Emirates",
      lat: 25.0676759,
      lng: 55.2465867,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌳", text: "Public Park — 600 m" },
        { icon: "🛍️", text: "My City Centre Al Barsha — 800 m" },
        { icon: "🏫", text: "New Academy School — 800 m" },
        { icon: "🏖️", text: "Pine Beach — 13.1 km" },
        { icon: "🏙️", text: "Downtown Dubai — 19.8 km" },
        { icon: "✈️", text: "Dubai International Airport — 35.8 km" },
      ],
    },

    nearbyAttractions: {
      title: "Nearby",
      attractions: [
        { name: "Public Park", distance: "600 m", time: null, icon: "🌳" },
        {
          name: "My City Centre Al Barsha",
          distance: "800 m",
          time: null,
          icon: "🛍️",
        },
        {
          name: "New Academy School",
          distance: "800 m",
          time: null,
          icon: "🏫",
        },
        { name: "Pine Beach", distance: "13.1 km", time: null, icon: "🏖️" },
        { name: "Downtown Dubai", distance: "19.8 km", time: null, icon: "🏙️" },
        {
          name: "Dubai International Airport",
          distance: "35.8 km",
          time: null,
          icon: "✈️",
        },
      ],
    },
  },

  // =============================== AR ===============================
  ar: {
    seo: {
      title:
        "أبراج باترفلاي | استوديو وشقق مفروشة 1–3 غرف في أرجان دبي | التسليم الربع الأول 2029",
      description:
        "أبراج باترفلاي مشروع سكني ببرجين في أرجان دبي يوفر شققاً مفروشة بالكامل (استوديو، 1 غرفة، 2 غرف، 3 غرف) مع مطابخ مجهزة بالإضافة إلى محلات تجارية. خطة الدفع: 20% عند الحجز، 30% أثناء الإنشاء، 10% عند التسليم، 40% بعد التسليم خلال 60 شهراً. التسليم الربع الأول 2029.",
      keywords:
        "أبراج باترفلاي، أرجان دبي، مجموعة الصيّاح، إيفولوشنز، شقق مفروشة، عقارات دبي، خطة دفع، استوديو، غرفة، غرفتين، ثلاث غرف",
      canonical: "/properties/apartments/evolutions/butterfly-towers",
    },

    project: {
      name: "أبراج باترفلاي",
      developer: "مجموعة الصيّاح",
      managingCompany: "إيفولوشنز",
      location: "أرجان، دبي، الإمارات",
      status: "قيد الإنشاء (بداية البيع / بري سيل)",
      handover: "الربع الأول 2029",
      structure: "برجان: قبوين + أرضي + موقفين + 17 طابقاً",
      furnishing: "مفروش بالكامل",
      serviceCharge: "15–16 درهم/قدم²",
      parking: "موقف واحد",
      unitTypes: ["استوديو", "غرفة واحدة", "غرفتين", "3 غرف"],

      // ✅ spreaded payment plan (readable)
      paymentPlan: PAYMENT_PLAN_AR,

      units: { total: 570, towerA: 285, towerB: 285 },
      unitMix: [
        { type: "استوديو", count: 200, sizeSqft: "408.5 – 500.7" },
        { type: "غرفة واحدة", count: 270, sizeSqft: "830.7 – 1098.8" },
        { type: "غرفتين", count: 100, sizeSqft: "1349.6 – 1723.9" },
        { type: "تجزئة", count: 26, sizeSqft: "406.4 – 3759.4" },
      ],

      highlights: [
        "شقق مفروشة بالكامل",
        "مطابخ مجهزة",
        "تصميم معماري مميز ببرجين",
        "مرافق عائلية وصحية متكاملة",
      ],
    },

    hero: {
      backgroundUrl: `${BASE}/EXTERIOR%20PICS/Cam%201.jpg`,
      squareImageUrl: `/evolutions.jpg`,
      companyName: "إيفولوشنز",
      rating: 4.7,
      badges: ["أرجان", "مفروش بالكامل", "التسليم Q1 2029"],
    },

    intro: {
      title: "حياة معاصرة ببرجين في أرجان",
      paragraphs: [
        "أبراج باترفلاي عبارة عن برجين توأمين في أرجان — صُممت كرمز للعيش العصري حيث تلتقي الأناقة بالهدوء.",
        "الوحدات مفروشة بالكامل مع مطابخ مجهزة، لتناسب أسلوب حياة متوازن في مجتمع سريع النمو بدبي.",
        "مجموعة مرافق مختارة لدعم العافية والعائلات والراحة اليومية — منصة يوغا، مسار جري، مسابح، مناطق لعب للأطفال والمزيد.",
      ],
      brochures: [
        { title: "تحميل البروشور (EN)", url: BROCHURE_EN_PDF, type: "main" },
        { title: "خطة الدفع (PDF)", url: PAYMENT_PLAN_PDF, type: "payment" },
        {
          title: "ورقة المعلومات (PDF)",
          url: FACTSHEET_PDF,
          type: "factsheet",
        },
        {
          title: "البرج A — مخططات وحدات فردية (PDF)",
          url: TOWER_A_UNITS_FLOORPLANS_PDF,
          type: "floorplans",
        },
        {
          title: "البرج A — مخطط الطابق (PDF)",
          url: TOWER_A_FLOORPLATE_PDF,
          type: "floorplate",
        },
      ],
      imgUrl: `${BASE}/EXTERIOR%20PICS/Cam%205.jpg`,
      imgAlt: "أبراج باترفلاي - الواجهة الخارجية",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "أرجان",
          label: "الموقع",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🛋️",
          value: "مفروش",
          label: "التشطيبات",
        },
        {
          bottom: "14%",
          right: "-20px",
          icon: "💳",
          value: "20/30/10/40",
          label: "خطة الدفع",
        },
      ],
    },

    // ✅ Dedicated “spreaded” payment plan section
    paymentPlan: {
      title: "خطة الدفع",
      headline: PAYMENT_PLAN_HEADLINE,
      milestones: [
        { label: "عند الحجز", when: "الحجز", percent: 20 },
        { label: "أثناء الإنشاء", when: "الإنشاء", percent: 30 },
        { label: "عند التسليم", when: "التسليم", percent: 10 },
        { label: "خلال 60 شهر بعد التسليم", when: "بعد التسليم", percent: 40 },
      ],
      note: "معلومات المشروع مقدمة من المطوّر وقد تتغير. إذا لاحظت خطأ، تواصل مع الدعم لتحديث البيانات.",
    },

    gallery: {
      title: "المعرض",
      images: [
        `${BASE}/EXTERIOR%20PICS/Cam%201.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%202.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%203.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%204.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%⑤.jpg`.replace("⑤", "5"), // safety (keeps exact Cam 5)
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/1.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/2.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/3.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/4.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/1.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/2.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/3.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/4.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/2.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/3.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/Image4-enhanced%20%281%29.png`,
        `${BASE}/INTERIOR%20PICTURES/BATHROOM/STUDIO/2.png`,
      ],
      slides: [
        `${BASE}/EXTERIOR%20PICS/Cam%201.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%202.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%203.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%204.jpg`,
        `${BASE}/EXTERIOR%20PICS/Cam%⑤.jpg`.replace("⑤", "5"),
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/1.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/2.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/3.png`,
        `${BASE}/INTERIOR%20PICTURES/2%20bedrooms/4.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/1.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/2.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/3.png`,
        `${BASE}/INTERIOR%20PICTURES/1%20bedroom/4.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/2.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/3.png`,
        `${BASE}/INTERIOR%20PICTURES/STUDIO/Image4-enhanced%20%281%29.png`,
        `${BASE}/INTERIOR%20PICTURES/BATHROOM/STUDIO/2.png`,
      ],
      projectTag: "أبراج باترفلاي",
    },

    floorPlans: {
      type: "apartments",
      brochureHref: FACTSHEET_PDF,
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            Unit: "استوديو",
            "نطاق المساحة الإجمالية": "408.5 - 500.7 قدم²",
            "السعر الابتدائي": "1,112,777 درهم",
            "موعد التسليم": "الربع الأول 2029",
            "خطة الدفع": PAYMENT_PLAN_AR, // ✅ added
          },
          images: [STUDIO_FLOORPLAN_IMG],
          features: [
            "مفروش بالكامل",
            "مطبخ مجهز بالأجهزة",
            "تشطيبات حديثة بمواد عالية الجودة",
          ],
        },
        {
          id: "1br",
          title: "غرفة واحدة",
          bedrooms: 1,
          specs: {
            Unit: "غرفة واحدة",
            "نطاق المساحة الإجمالية": "847.98 - 958.63 قدم²",
            "السعر الابتدائي": "1,330,777 درهم",
            "موعد التسليم": "الربع الأول 2029",
            "خطة الدفع": PAYMENT_PLAN_AR, // ✅ added
          },
          images: [ONEBR_FLOORPLAN_IMG],
          features: [
            "مفروش بالكامل",
            "مطبخ مجهز بالأجهزة",
            "تشطيبات حديثة بمواد عالية الجودة",
          ],
        },
        {
          id: "2br",
          title: "غرفتين",
          bedrooms: 2,
          specs: {
            Unit: "غرفتين",
            "نطاق المساحة الإجمالية": "1,361.74 - 1,439.88 قدم²",
            "السعر الابتدائي": "2,112,777 درهم",
            "موعد التسليم": "الربع الأول 2029",
            "خطة الدفع": PAYMENT_PLAN_AR, // ✅ added
          },
          images: [TWOBR_FLOORPLAN_IMG],
          features: [
            "مفروش بالكامل",
            "مطبخ مجهز بالأجهزة",
            "تشطيبات حديثة بمواد عالية الجودة",
          ],
        },
        {
          id: "3br",
          title: "3 غرف",
          bedrooms: 3,
          specs: {
            Unit: "3 غرف",
            "نطاق المساحة الإجمالية": "1,711.13 - 1,723.91 قدم²",
            "السعر الابتدائي": "2,480,777 درهم",
            "موعد التسليم": "الربع الأول 2029",
            "خطة الدفع": PAYMENT_PLAN_AR, // ✅ added
          },
          images: [THREEBR_FLOORPLAN_IMG],
          features: [
            "مفروش بالكامل",
            "مطبخ مجهز بالأجهزة",
            "تشطيبات حديثة بمواد عالية الجودة",
          ],
        },
      ],
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "مسار جري", icon: "🏃", color: "#d7b46a" },
        { label: "منصة يوغا", icon: "🧘", color: "#d7b46a" },
        { label: "منطقة لعب خارجية للأطفال", icon: "🛝", color: "#d7b46a" },
        { label: "مسبح للأطفال", icon: "🧒", color: "#d7b46a" },
        { label: "مكتبة", icon: "📚", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊", color: "#d7b46a" },
        { label: "مسبح خارجي مع منصة", icon: "🏖️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "أبراج باترفلاي",
      address: "أرجان، البرشاء، دبي، الإمارات العربية المتحدة",
      lat: 25.0676759,
      lng: 55.2465867,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌳", text: "حديقة عامة — 600 م" },
        { icon: "🛍️", text: "ماي سيتي سنتر البرشاء — 800 م" },
        { icon: "🏫", text: "مدرسة نيو أكاديمي — 800 م" },
        { icon: "🏖️", text: "شاطئ باين — 13.1 كم" },
        { icon: "🏙️", text: "داون تاون دبي — 19.8 كم" },
        { icon: "✈️", text: "مطار دبي الدولي — 35.8 كم" },
      ],
    },

    nearbyAttractions: {
      title: "بالقرب",
      attractions: [
        { name: "حديقة عامة", distance: "600 م", time: null, icon: "🌳" },
        {
          name: "ماي سيتي سنتر البرشاء",
          distance: "800 م",
          time: null,
          icon: "🛍️",
        },
        {
          name: "مدرسة نيو أكاديمي",
          distance: "800 م",
          time: null,
          icon: "🏫",
        },
        { name: "شاطئ باين", distance: "13.1 كم", time: null, icon: "🏖️" },
        { name: "داون تاون دبي", distance: "19.8 كم", time: null, icon: "🏙️" },
        {
          name: "مطار دبي الدولي",
          distance: "35.8 كم",
          time: null,
          icon: "✈️",
        },
      ],
    },
  },
};

export default butterflyTowersData;
