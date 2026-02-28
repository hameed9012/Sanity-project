// src/data/properties/apartments/binghatti/binghatti-aquarise.js
// ✅ 100% FULL WORKING (EN + AR)
// ✅ Same constants + encodeURI cdn() + BASE style
// ✅ Payment plan spreaded + injected into EVERY floorPlan specs
// ✅ Fixes broken "${CDN}/..." strings in images

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "binghatti/aquarise";

/** Safe with spaces, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Hero / Key images (spaces safe)
// ========================
const HERO_BG = cdn("Aquarise Exterior-1.jpg");
const INTRO_IMG = cdn("Aquarise Exterior-8.jpg");

// ========================
// Floorplan PNGs (spaces safe)
// ========================
const FP_STUDIO = cdn("Binghatti Aquarise studio floor0 plan.png");
const FP_1BR = cdn("Binghatti Aquarise 1br floor plan.png");
const FP_2BR = cdn("Binghatti Aquarise 2br floor plan.png");
const FP_3BR = cdn("Binghatti Aquarise 3br floor plan.png");
const FP_4BR = cdn("Binghatti Aquarise 4br floor plan.png");

// ========================
// PDFs (spaces safe)
// ========================
const BROCHURE_PDF = cdn("binghatti-aquarise-brochure.pdf");
const FACTS_PDF = cdn("binghatti-aquarise-facts.pdf");
const FLOOR_PLANS_PDF = cdn("binghatti-aquarise-floor-plans.pdf");
const LOCATION_PDF = cdn("binghatti-aquarise-location.pdf");

// ========================
// Payment plan (spreaded)
// ========================
const PAYMENT_PLAN_HEADLINE = "70% / 30%";

const PAYMENT_PLAN_EN =
  "On booking 20% / During construction 50% / Upon handover 30%";
const PAYMENT_PLAN_AR = "عند الحجز 20% / أثناء الإنشاء 50% / عند التسليم 30%";

export const aquariseData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Binghatti Aquarise | Apartments in Business Bay (Dubai Water Canal)",
      description:
        "Binghatti Aquarise is a high-rise residential tower in Business Bay along the Dubai Water Canal, offering studio to 4-bedroom apartments with resort-style amenities in a prime central location.",
      keywords:
        "binghatti aquarise, business bay apartments, dubai water canal, binghatti developers, off plan dubai",
      canonical: "/properties/apartments/binghatti/aquarise",
    },

    project: {
      name: "Binghatti Aquarise",
      developer: "Binghatti",
      location: "Business Bay (Dubai Water Canal), Dubai",
      status: "Off-Plan",
      startingPrice: "From AED 1,954,999",
      completionDate: "Q2 2027",

      // Reelly-style facts panel
      propertyClass: "Affordable",
      brandedProject: false,
      unitTypes: "Apartments",
      floorsFormula: "3B + G + 25floors + R",
      serviceCharge: "20 AED/sqft",
      totalBuildingArea: "1,286,047 sqft",
      furnishing: "No",
      readinessProgress: "0%",
      paymentPlanSummary: PAYMENT_PLAN_HEADLINE,

      // ✅ add readable payment plan too
      paymentPlan: PAYMENT_PLAN_EN,

      saleTimeline: "15 Mar 2025 - Q2 2027",
      addedOn: "May 7, 2025",
      parkingPolicy: {
        oneParking: "Studio, 1 Bed, 2 Bed",
        twoParkings: "3 Bed, 4 Bed",
      },
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif",
      companyName: "Binghatti",
      rating: null,
      badges: ["Business Bay", "Dubai Water Canal", "On Sale"],
    },

    facts: {
      title: "Project general facts",
      paragraphs: [
        "Binghatti Aquarise is a bold and visionary development set to redefine the Dubai skyline in Business Bay. Inspired by the elegance of the French Riviera (Côte d’Azur), the tower showcases aquatic tones and a fluid architectural design that echoes the movement of water.",
        "The project presents a range of residences including studio, 1, 2, 3, and 4-bedroom apartments. Homes are designed with open layouts, contemporary finishes, and sweeping views of the cityscape.",
        "Residents enjoy resort-style vertical living with standout amenities such as infinity pools, a padel court, and a basketball court—creating a vibrant, wellness-focused lifestyle in a central location.",
      ],
      finishingAndMaterials: "Modern finishing with high-quality materials.",
      kitchenAndAppliances: "Equipped kitchen.",
      furnishing: "No.",
      locationDescriptionAndBenefits: [
        "Business Bay is one of Dubai’s most dynamic neighborhoods and a major business, commercial, and residential hub—minutes from Downtown Dubai and Burj Khalifa.",
        "The area offers excellent connectivity via Sheikh Zayed Road and Al Khail Road, and has evolved into a lifestyle destination with waterfront promenades, cafés, dining, gyms, and canal views.",
        "As one of Dubai’s most well-connected districts, Business Bay is a prime location for living and investment.",
      ],
    },

    intro: {
      title: "DIVE INTO TRANQUIL ELEGANCE",
      paragraphs: [
        "Binghatti Aquarise is a waterfront-inspired residential tower in the heart of Business Bay, set along the Dubai Water Canal. The architecture takes cues from the fluidity of water, creating a distinctive presence on the Dubai skyline.",
        "The project offers studios, 1, 2, 3, and 4-bedroom residences—bringing daily convenience and lifestyle right to your doorstep in one of Dubai’s most central districts.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Project Facts", url: FACTS_PDF, type: "facts" },
        {
          title: "Floor Plans (PDF)",
          url: FLOOR_PLANS_PDF,
          type: "floor-plans",
        },
        {
          title: "Project Location (PDF)",
          url: LOCATION_PDF,
          type: "location",
        },
      ],
      imgUrl: INTRO_IMG,
      imgAlt: "Binghatti Aquarise exterior view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Dubai Water Canal",
          label: "Waterfront Setting",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🏙️",
          value: "Business Bay",
          label: "Prime District",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q2 2027",
          label: "Handover (per listing)",
        },
      ],
    },

    gallery: {
      title: "Aquarise Visuals",
      projectTag: "Aquarise",
      slides: [
        cdn("Aquarise Exterior-1.jpg"),
        cdn("Aquarise Exterior-2.jpg"),
        cdn("Aquarise Exterior-3.jpg"),
        cdn("Aquarise Exterior-4.jpg"),
        cdn("Aquarise Exterior-5.jpg"),
        cdn("Aquarise Exterior-6.jpg"),
        cdn("Aquarise Exterior-7.jpg"),
        cdn("Aquarise Exterior-8.jpg"),
        cdn("Aquarise Exterior-10.jpg"),
        cdn("Aquarise Lobby-1.jpg"),
        cdn("Aquarise Lobby-2.jpg"),
        cdn("Aquarise Lobby-3.jpg"),
        cdn("Aquarise Living Room-1.jpg"),
        cdn("Aquarise Living Room-2.jpg"),
        cdn("Aquarise Living Room-3.jpg"),
        cdn("Aquarise Studio-1.jpg"),
        cdn("Aquarise Studio-2.jpg"),
        cdn("Aquarise Bedroom-1.jpg"),
        cdn("Aquarise Bedroom-2.jpg"),
        cdn("Aquarise Bedroom-3.jpg"),
      ],
    },

    // ✅ Minimal specs you agreed on + add Payment Plan
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio Residence",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO RESIDENCE",
            "Total Area": "467.91 SQ.FT.",
            "Starting Price": "AED 1,201,999",
            Handover: "Q2 2027",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_STUDIO],
          features: ["Open layout", "Balcony", "Ideal for investment"],
        },
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM",
            "Total Area": "784.58 SQ.FT.",
            "Starting Price": "AED 1,954,999",
            Handover: "Q2 2027",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_1BR],
          features: [
            "Balcony",
            "Business Bay connectivity",
            "Strong rental demand",
          ],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM",
            "Total Area": "1,323.64 SQ.FT.",
            "Starting Price": "AED 2,909,999",
            Handover: "Q2 2027",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_2BR],
          features: [
            "Spacious living & dining",
            "Large balcony",
            "Family-friendly",
          ],
        },
        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOM",
            "Total Area": "2,889.46 SQ.FT.",
            "Starting Price": "AED 3,579,999",
            Handover: "Q2 2027",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_3BR],
          features: [
            "Expansive terrace",
            "Premium family layout",
            "2 parking spaces",
          ],
        },
        {
          id: "4br",
          title: "4 Bedroom",
          bedrooms: 4,
          specs: {
            Unit: "4 BEDROOM",
            "Total Area": "2,385.17 SQ.FT.",
            "Starting Price": "AED 4,999,999",
            Handover: "Q2 2027",
            "Payment Plan": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_4BR],
          features: [
            "Multiple balconies",
            "Large family residence",
            "2 parking spaces",
          ],
        },
      ],
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Gym & Fitness", icon: "💪", color: "#d7b46a" },
        { label: "Running Lane", icon: "🏃", color: "#d7b46a" },
        { label: "Basketball Court", icon: "🏀", color: "#d7b46a" },
        { label: "Padel Court", icon: "🎾", color: "#d7b46a" },
        {
          label: "Pool Deck With Sunken Seating",
          icon: "🏊",
          color: "#d7b46a",
        },
        { label: "Kids Play Area", icon: "👶", color: "#d7b46a" },
        { label: "Sky Garden", icon: "🌿", color: "#d7b46a" },
      ],
    },

    paymentPlan: {
      title: "Payment plan",
      headline: PAYMENT_PLAN_HEADLINE,
      milestones: [
        { label: "On booking", when: "Booking", percent: 20 },
        { label: "During construction", when: "Construction", percent: 50 },
        { label: "Upon handover", when: "Handover", percent: 30 },
      ],
      note: "Milestones follow the listing reference you provided.",
    },

    location: {
      title: "Project Location",
      projectName: "Binghatti Aquarise",
      address: "Business Bay, Dubai, United Arab Emirates",
      lat: 25.18942655,
      lng: 55.264819015,
      zoom: 14,
      proximityFeatures: [
        { icon: "🌊", text: "Along Dubai Water Canal" },
        { icon: "🏙️", text: "Minutes from Downtown Dubai" },
        {
          icon: "🛣️",
          text: "Seamless access to Sheikh Zayed Road & Al Khail Road",
        },
      ],
    },

    nearbyAttractions: {
      title: "Nearby points of interest",
      attractions: [
        {
          name: "Creative Kids Early Learning Centre",
          distance: "1.6 km",
          time: null,
          icon: "🎓",
        },
        {
          name: "South Ridge Park",
          distance: "4.3 km",
          time: null,
          icon: "🌳",
        },
        { name: "Souk Al Bahar", distance: "4.1 km", time: null, icon: "🛍️" },
        { name: "Jumeirah Beach", distance: "6.9 km", time: null, icon: "🏖️" },
        { name: "Downtown Dubai", distance: "4.2 km", time: null, icon: "🏙️" },
        {
          name: "Dubai International Airport",
          distance: "16.7 km",
          time: null,
          icon: "✈️",
        },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title: "بن غاطي أكوارايز | شقق في الخليج التجاري على قناة دبي المائية",
      description:
        "مشروع «Binghatti Aquarise» برج سكني في الخليج التجاري بمحاذاة قناة دبي المائية، يوفر شققاً من استوديو حتى 4 غرف نوم مع مرافق بنمط المنتجعات في موقع مركزي.",
      keywords:
        "بن غاطي أكوارايز، شقق الخليج التجاري، قناة دبي المائية، مشاريع بن غاطي، عقارات دبي على الخريطة",
      canonical: "/properties/apartments/binghatti/aquarise",
    },

    project: {
      name: "Binghatti Aquarise",
      developer: "بن غاطي",
      location: "الخليج التجاري (قناة دبي المائية)، دبي",
      status: "قيد الإنشاء",
      startingPrice: "ابتداءً من 1,954,999 درهم",
      completionDate: "الربع الثاني 2027",

      propertyClass: "اقتصادي",
      brandedProject: false,
      unitTypes: "شقق",
      floorsFormula: "3 أقبية + أرضي + 25 طابق + سطح",
      serviceCharge: "20 درهم/قدم²",
      totalBuildingArea: "1,286,047 قدم²",
      furnishing: "لا",
      readinessProgress: "0%",
      paymentPlanSummary: PAYMENT_PLAN_HEADLINE,

      // ✅ readable payment plan
      paymentPlan: PAYMENT_PLAN_AR,

      saleTimeline: "15 مارس 2025 - الربع الثاني 2027",
      addedOn: "7 مايو 2025",
      parkingPolicy: {
        oneParking: "استوديو، غرفة، غرفتان",
        twoParkings: "3 غرف، 4 غرف",
      },
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif",
      companyName: "بن غاطي",
      rating: null,
      badges: ["الخليج التجاري", "قناة دبي المائية", "متاح للبيع"],
    },

    facts: {
      title: "حقائق عامة عن المشروع",
      paragraphs: [
        "«Binghatti Aquarise» مشروع جريء في الخليج التجاري، مستوحى من أناقة الريفييرا الفرنسية (Côte d’Azur) بألوان مائية وتصميم معماري انسيابي يعكس حركة الماء.",
        "يوفّر خيارات سكنية متنوعة تشمل استوديو وشقق 1 و2 و3 و4 غرف نوم، بتصاميم عملية وتشطيبات عصرية وإطلالات على المدينة.",
        "يقدّم أسلوب حياة بنمط المنتجعات مع مرافق بارزة مثل المسابح وملعب البادل وملعب كرة السلة، ضمن موقع مركزي نابض بالحياة.",
      ],
      finishingAndMaterials: "تشطيبات عصرية بمواد عالية الجودة.",
      kitchenAndAppliances: "مطبخ مجهّز.",
      furnishing: "لا.",
      locationDescriptionAndBenefits: [
        "الخليج التجاري من أكثر مناطق دبي حيوية ويُعد مركزاً للأعمال والسكن، وعلى بعد دقائق من داون تاون دبي وبرج خليفة.",
        "يتميّز بسهولة الوصول عبر شارع الشيخ زايد وشارع الخيل، كما تحوّل إلى وجهة حياة عصرية مع ممشى القناة والمقاهي والمطاعم والنوادي الرياضية.",
        "من أكثر المناطق اتصالاً في دبي، ما يجعله خياراً قوياً للسكن والاستثمار.",
      ],
    },

    intro: {
      title: "انغمس في أناقة هادئة",
      paragraphs: [
        "يقع «Binghatti Aquarise» في قلب الخليج التجاري بمحاذاة قناة دبي المائية، بتصميم مستوحى من انسيابية الماء ليشكّل حضوراً لافتاً على أفق دبي.",
        "يوفّر المشروع شققاً من استوديو حتى 4 غرف نوم في موقع مركزي يضمن سهولة التنقل وأسلوب حياة عصري.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "حقائق المشروع", url: FACTS_PDF, type: "facts" },
        { title: "المخططات (PDF)", url: FLOOR_PLANS_PDF, type: "floor-plans" },
        { title: "موقع المشروع (PDF)", url: LOCATION_PDF, type: "location" },
      ],
      imgUrl: INTRO_IMG,
      imgAlt: "واجهة مشروع بن غاطي أكوارايز",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "قناة دبي المائية",
          label: "واجهة مائية",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🏙️",
          value: "الخليج التجاري",
          label: "موقع استراتيجي",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "الربع الثاني 2027",
          label: "التسليم (حسب المرجع)",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      projectTag: "Aquarise",
      slides: [
        cdn("Aquarise Exterior-1.jpg"),
        cdn("Aquarise Exterior-2.jpg"),
        cdn("Aquarise Exterior-3.jpg"),
        cdn("Aquarise Exterior-4.jpg"),
        cdn("Aquarise Exterior-5.jpg"),
        cdn("Aquarise Exterior-6.jpg"),
        cdn("Aquarise Exterior-7.jpg"),
        cdn("Aquarise Exterior-8.jpg"),
        cdn("Aquarise Exterior-10.jpg"),
        cdn("Aquarise Lobby-1.jpg"),
        cdn("Aquarise Lobby-2.jpg"),
        cdn("Aquarise Lobby-3.jpg"),
        cdn("Aquarise Living Room-1.jpg"),
        cdn("Aquarise Living Room-2.jpg"),
        cdn("Aquarise Living Room-3.jpg"),
        cdn("Aquarise Studio-1.jpg"),
        cdn("Aquarise Studio-2.jpg"),
        cdn("Aquarise Bedroom-1.jpg"),
        cdn("Aquarise Bedroom-2.jpg"),
        cdn("Aquarise Bedroom-3.jpg"),
      ],
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            الوحدة: "استوديو",
            "المساحة الإجمالية": "467.91 قدم²",
            "السعر الابتدائي": "1,201,999 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_STUDIO],
          features: ["تصميم مفتوح", "شرفة", "مناسب للاستثمار"],
        },
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            الوحدة: "غرفة نوم واحدة",
            "المساحة الإجمالية": "784.58 قدم²",
            "السعر الابتدائي": "1,954,999 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_1BR],
          features: ["شرفة", "موقع مركزي", "طلب إيجاري قوي"],
        },
        {
          id: "2br",
          title: "غرفتان",
          bedrooms: 2,
          specs: {
            الوحدة: "غرفتان",
            "المساحة الإجمالية": "1,323.64 قدم²",
            "السعر الابتدائي": "2,909,999 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_2BR],
          features: ["مساحة معيشة واسعة", "شرفة كبيرة", "مناسب للعائلات"],
        },
        {
          id: "3br",
          title: "3 غرف",
          bedrooms: 3,
          specs: {
            الوحدة: "3 غرف",
            "المساحة الإجمالية": "2,889.46 قدم²",
            "السعر الابتدائي": "3,579,999 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_3BR],
          features: ["تراس واسع", "مناسب للعائلات", "موقفان للسيارات"],
        },
        {
          id: "4br",
          title: "4 غرف",
          bedrooms: 4,
          specs: {
            الوحدة: "4 غرف",
            "المساحة الإجمالية": "2,385.17 قدم²",
            "السعر الابتدائي": "4,999,999 درهم",
            "موعد التسليم": "الربع الثاني 2027",
            "خطة الدفع": PAYMENT_PLAN_HEADLINE,
          },
          images: [FP_4BR],
          features: ["شرفات متعددة", "مساحات كبيرة", "موقفان للسيارات"],
        },
      ],
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "مسار جري", icon: "🏃", color: "#d7b46a" },
        { label: "ملعب كرة سلة", icon: "🏀", color: "#d7b46a" },
        { label: "ملعب بادل", icon: "🎾", color: "#d7b46a" },
        { label: "تراس مسبح مع جلسات غاطسة", icon: "🏊", color: "#d7b46a" },
        { label: "منطقة ألعاب أطفال", icon: "👶", color: "#d7b46a" },
        { label: "حديقة سماوية", icon: "🌿", color: "#d7b46a" },
      ],
    },

    paymentPlan: {
      title: "خطة الدفع",
      headline: PAYMENT_PLAN_HEADLINE,
      milestones: [
        { label: "عند الحجز", when: "الحجز", percent: 20 },
        { label: "أثناء الإنشاء", when: "الإنشاء", percent: 50 },
        { label: "عند التسليم", when: "التسليم", percent: 30 },
      ],
      note: "تفاصيل الدفعات وفق المرجع الذي أرسلته.",
    },

    location: {
      title: "موقع المشروع",
      projectName: "Binghatti Aquarise",
      address: "الخليج التجاري، دبي، الإمارات العربية المتحدة",
      lat: 25.18942655,
      lng: 55.264819015,
      zoom: 14,
      proximityFeatures: [
        { icon: "🌊", text: "على قناة دبي المائية" },
        { icon: "🏙️", text: "دقائق إلى داون تاون دبي" },
        { icon: "🛣️", text: "وصول سهل لشارع الشيخ زايد وشارع الخيل" },
      ],
    },

    nearbyAttractions: {
      title: "أماكن قريبة",
      attractions: [
        {
          name: "Creative Kids Early Learning Centre",
          distance: "1.6 كم",
          time: null,
          icon: "🎓",
        },
        {
          name: "South Ridge Park",
          distance: "4.3 كم",
          time: null,
          icon: "🌳",
        },
        { name: "Souk Al Bahar", distance: "4.1 كم", time: null, icon: "🛍️" },
        { name: "Jumeirah Beach", distance: "6.9 كم", time: null, icon: "🏖️" },
        { name: "وسط دبي", distance: "4.2 كم", time: null, icon: "🏙️" },
        {
          name: "مطار دبي الدولي",
          distance: "16.7 كم",
          time: null,
          icon: "✈️",
        },
      ],
    },
  },
};

export default aquariseData;
