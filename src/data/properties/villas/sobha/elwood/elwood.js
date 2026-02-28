// src/data/projects/islands/sobha/sobha-elwood.js
const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "sobha-elwood";

const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Core Images
// ========================
const HERO_BG = cdn("TYPE 5A FRONT.jpg");
const HERO_INSET = cdn("hero-inset.jpg"); // You'll need to upload this or use existing
const INTRO_MAIN = cdn("TYPE 6A FRONT.jpg"); // Using 6BR front as main image

// ========================
// Brochure PDF
// ========================
const BROCHURE_PDF = cdn("Sobha Elwood Brochure_29 July 2025.pdf");

// ========================
// Gallery - Using available images from your Bunny CDN
// ========================
const GALLERY_SLIDES = [
  cdn("TYPE 6A FRONT.jpg"),
  cdn("TYPE 6A COURTYARD.jpg"),
  cdn("TYPE 5A FRONT.jpg"),
  cdn("TYPE 5A COURTYARD.jpg"),
  cdn("TYPE 4A FRONT.jpg"),
  cdn("TYPE 4A COURTYARD.jpg"),
  cdn("ELWOOD 4BR Type A_1.jpg"),
  cdn("ELWOOD Kitchen 4 BR TYPE A 3.jpg"),
  cdn("4 BR tybe A _ bathroom_.jpg"),
  cdn("5 bed tybe B _ living room 3.jpg"),
  cdn("5 bed Type D_Fromal Living 3.jpg"),
  cdn("5Bed-Masters Bedroom 3.jpg"),
  cdn("STREET VIEW.jpg"),
];

// ========================
// Floorplan PNGs
// ========================
// 4BR Floor Plans
const FP_4BR_GROUND = cdn("Elwood 4BR Ground floor plan.png");
const FP_4BR_FIRST = cdn("Elwood 4BR First floor plan.png");

// 5BR Floor Plans
const FP_5BR_GROUND = cdn("Elwood 5BR Ground floor Plan.png");
const FP_5BR_FIRST = cdn("Elwood 5BR First Floor Plan.png");

// 6BR Floor Plans
const FP_6BR_GROUND = cdn("Elwood 6BR Ground floor plan.png");
const FP_6BR_FIRST = cdn("Elwood 6BR First floor plan.png");
const FP_6BR_SECOND = cdn("Elwood 6BR Second floor plan.png");

// ========================
// Park/Amenity Images
// ========================
const PARK_IMAGES = [
  cdn("DAINTREE PARK_CLUBHOUSE & LAGOON.png"),
  cdn("DAINTREE PARK_LAGOON.png"),
  cdn("DAINTREE PARK_AERIAL VIEW LAGOON.png"),
  cdn("TAIGA PARK_ENTRY.jpg"),
  cdn("TAIGA PARK_ENTRY WATER FEATURE.jpg"),
  cdn("AMAZON PARK_ENTRANCE.png"),
  cdn("BAOBAB PARK_ENTRANCE.jpg"),
  cdn("BRISTLECONE PARK_ENTRY.jpg"),
  cdn("YAKUSHIMA PARK_FRONT VIEW ENTRY.jpg"),
];

export const elwoodData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title:
        "Sobha Elwood | Luxury Villas in Dubai | 4-6 Bedroom Villas | Sobha Realty",
      description:
        "Discover Sobha Elwood, an exclusive collection of 4-6 bedroom luxury villas in Dubai. Experience premium family living with spacious layouts, private gardens, and world-class amenities.",
      keywords:
        "Sobha Elwood, sobha realty, luxury villas dubai, 4 bedroom villas, 5 bedroom villas, 6 bedroom villas, dubai properties, sobha dubai",
      canonical: "/properties/villas/sobha/elwood",
    },

    project: {
      name: "Sobha Elwood",
      developer: "Sobha Realty",
      location: "Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 9.9M",
      completionDate: "Q4 2027",
      type: "Luxury Villas",
      units: "4-6 Bedroom Villas",
      paymentPlan: "60% / 40%",
    },

    hero: {
      backgroundUrl: HERO_BG || cdn("TYPE 6A FRONT.jpg"),
      squareImageUrl: "/Sobha-Realty-Square-Logo.jpg",
      companyName: "Sobha Realty",
      rating: 4.7,
    },

    intro: {
      title: "PREMIUM FAMILY LIVING IN DUBAI",
      paragraphs: [
        "Sobha Elwood presents an exclusive collection of 4-6 bedroom luxury villas designed for modern family living. These meticulously crafted villas blend contemporary architecture with functional design, offering spacious layouts, private gardens, and premium finishes.",
        "Nestled within a thoughtfully planned community, Elwood provides residents with access to lush parks, recreational facilities, and world-class amenities while maintaining privacy and tranquility. Experience the perfect harmony of indoor-outdoor living in one of Dubai's most promising developments.",
      ],
      brochures: [
        {
          title: "Digital Brochure",
          url: BROCHURE_PDF,
          type: "main",
          icon: "🏡",
          color: "#2E8B57",
          size: "96.88 MB",
          category: "Overview",
          fileName: "Sobha Elwood Brochure.pdf",
          description: "Complete project overview and villa specifications",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Sobha Elwood luxury villas exterior",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏡",
          value: "4-6 Bedrooms",
          label: "Spacious Layouts",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌿",
          value: "Multiple Parks",
          label: "Green Community",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🏙️",
          value: "Prime Location",
          label: "Dubai UAE",
        },
      ],
    },

    gallery: {
      title: "Visual Showcase",
      slides: GALLERY_SLIDES,
      projectTag: "Sobha Elwood",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br",
          bedrooms: 4,
          shortLabel: "4 BR",
          title: "4 Bedroom Villa",
          variants: [
            {
              id: "4br-ground",
              shortLabel: "Ground Floor",
              fullTitle: "4 Bedroom Villa – Ground Floor",
              specs: {
                Unit: "4 BEDROOM VILLA",
                "Total Area": "4,957.64 SQ.FT.",
                "Starting Price": "AED 9,915,280",
                Handover: "Q4 2027",
              },
              images: [FP_4BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "4br-first",
              shortLabel: "First Floor",
              fullTitle: "4 Bedroom Villa – First Floor",
              specs: {
                Unit: "4 BEDROOM VILLA",
                "Total Area": "approx. 2,500 SQ.FT.",
                "Starting Price": "AED 9,915,280",
                Handover: "Q4 2027",
              },
              images: [FP_4BR_FIRST],
            },
          ],
        },

        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 BR",
          title: "5 Bedroom Villa",
          variants: [
            {
              id: "5br-ground",
              shortLabel: "Ground Floor",
              fullTitle: "5 Bedroom Villa – Ground Floor",
              specs: {
                Unit: "5 BEDROOM VILLA",
                "Total Area": "5,819.40 SQ.FT.",
                "Starting Price": "AED 11,638,800",
                Handover: "Q4 2027",
              },
              images: [FP_5BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "5br-first",
              shortLabel: "First Floor",
              fullTitle: "5 Bedroom Villa – First Floor",
              specs: {
                Unit: "5 BEDROOM VILLA",
                "Total Area": "approx. 3,000 SQ.FT.",
                "Starting Price": "AED 11,638,800",
                Handover: "Q4 2027",
              },
              images: [FP_5BR_FIRST],
            },
          ],
        },

        {
          id: "6br",
          bedrooms: 6,
          shortLabel: "6 BR",
          title: "6 Bedroom Villa",
          variants: [
            {
              id: "6br-ground",
              shortLabel: "Ground Floor",
              fullTitle: "6 Bedroom Villa – Ground Floor",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Area": "7,193.09 SQ.FT.",
                "Starting Price": "AED 14,386,180",
                Handover: "Q4 2027",
              },
              images: [FP_6BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "6br-first",
              shortLabel: "First Floor",
              fullTitle: "6 Bedroom Villa – First Floor",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Area": "approx. 3,800 SQ.FT.",
                "Starting Price": "AED 14,386,180",
                Handover: "Q4 2027",
              },
              images: [FP_6BR_FIRST],
            },
            {
              id: "6br-second",
              shortLabel: "Second Floor",
              fullTitle: "6 Bedroom Villa – Second Floor",
              specs: {
                Unit: "6 BEDROOM VILLA",
                "Total Area": "approx. 1,800 SQ.FT.",
                "Starting Price": "AED 14,386,180",
                Handover: "Q4 2027",
              },
              images: [FP_6BR_SECOND],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Community Parks & Amenities",
      parks: [
        {
          name: "Daintree Park",
          description:
            "Clubhouse with lagoon, gathering areas, and waterfront features",
          images: [
            cdn("DAINTREE PARK_CLUBHOUSE & LAGOON.png"),
            cdn("DAINTREE PARK_LAGOON.png"),
            cdn("DAINTREE PARK_AERIAL VIEW LAGOON.png"),
          ],
          features: ["Clubhouse", "Lagoon", "Gathering Areas", "Waterfront"],
        },
        {
          name: "Taiga Park",
          description:
            "Entry water features, activity areas, and lush landscapes",
          images: [
            cdn("TAIGA PARK_ENTRY.jpg"),
            cdn("TAIGA PARK_ENTRY WATER FEATURE.jpg"),
            cdn("TAIGA PARK.jpg"),
          ],
          features: ["Water Features", "Activity Zones", "Landscaped Gardens"],
        },
        {
          name: "Amazon Park",
          description: "Entrance plaza with swing pods and seating areas",
          images: [
            cdn("AMAZON PARK_ENTRANCE.png"),
            cdn("AMAZON PARK_SEATING AREA.png"),
            cdn("AMAZON PARK_SWING PODS.png"),
          ],
          features: ["Swing Pods", "Seating Areas", "Play Zones"],
        },
        {
          name: "Baobab Park",
          description: "Tree courts and serene garden spaces",
          images: [
            cdn("BAOBAB PARK_ENTRANCE.jpg"),
            cdn("BAOBAB PARK_TREECOURT.jpg"),
          ],
          features: ["Tree Courts", "Garden Spaces", "Relaxation Areas"],
        },
        {
          name: "Bristlecone Park",
          description:
            "Fitness facilities, olive tree courts, and recreational areas",
          images: [
            cdn("BRISTLECONE PARK_ENTRY.jpg"),
            cdn("BRISTLECONE PARK_FITNESS.jpg"),
            cdn("BRISTLECONE PARK_OLIVE TREE COURT.jpg"),
          ],
          features: ["Fitness Center", "Olive Tree Courts", "Recreation"],
        },
        {
          name: "Yakushima Park",
          description: "Front entry views, seating areas, and community spaces",
          images: [
            cdn("YAKUSHIMA PARK_FRONT VIEW ENTRY.jpg"),
            cdn("YAKUSHIMA PARK_SEATING.png"),
            cdn("YAKUSHIMA PARK_SIDE VIEW ENTRY.png"),
          ],
          features: ["Community Spaces", "Seating Areas", "Entry Plaza"],
        },
        {
          name: "Białowieża Park",
          description: "Basketball courts and wadi-inspired landscapes",
          images: [
            cdn("BIALOWEIZA PARK_BASKETBALL COURT.png"),
            cdn("BIALOWEIZA PARK_WADI.png"),
          ],
          features: ["Basketball Court", "Wadi Landscaping", "Sports"],
        },
        {
          name: "Sports Park",
          description: "Paddle tennis courts and athletic facilities",
          images: [cdn("SPORTS PARK_PADDLE TENNIS COURTS.jpg")],
          features: ["Paddle Tennis", "Sports Facilities", "Athletic Areas"],
        },
      ],
      amenitiesList: [
        { label: "MULTIPLE COMMUNITY PARKS", icon: "🌳", color: "#2E8B57" },
        { label: "CLUBHOUSE & LAGOON", icon: "🏊", color: "#2E8B57" },
        { label: "FITNESS CENTER", icon: "💪", color: "#2E8B57" },
        { label: "SPORTS FACILITIES", icon: "🎾", color: "#2E8B57" },
        { label: "CHILDREN'S PLAY AREAS", icon: "👶", color: "#2E8B57" },
        { label: "WATER FEATURES", icon: "💦", color: "#2E8B57" },
        { label: "JOGGING TRACKS", icon: "🏃", color: "#2E8B57" },
        { label: "CYCLING PATHS", icon: "🚴", color: "#2E8B57" },
        { label: "LANDSCAPED GARDENS", icon: "🌿", color: "#2E8B57" },
        { label: "COMMUNITY CENTER", icon: "🏛️", color: "#2E8B57" },
        { label: "BARBEQUE AREAS", icon: "🍖", color: "#2E8B57" },
        { label: "PICNIC SPOTS", icon: "🧺", color: "#2E8B57" },
        { label: "PET-FRIENDLY ZONES", icon: "🐕", color: "#2E8B57" },
        { label: "SECURITY & SURVEILLANCE", icon: "🔒", color: "#2E8B57" },
        { label: "UNDERGROUND PARKING", icon: "🅿️", color: "#2E8B57" },
        { label: "ELECTRIC VEHICLE CHARGING", icon: "🔋", color: "#2E8B57" },
        { label: "HIGH-SPEED INTERNET", icon: "📶", color: "#2E8B57" },
        { label: "SMART HOME READY", icon: "🏠", color: "#2E8B57" },
        { label: "CENTRAL AIR CONDITIONING", icon: "❄️", color: "#2E8B57" },
        { label: "WASTE MANAGEMENT", icon: "🗑️", color: "#2E8B57" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Sobha Elwood",
      address: "Dubai, United Arab Emirates",
      lat: 25.0657,
      lng: 55.1713,
      zoom: 13,
      proximityFeatures: [
        { icon: "⏱️", text: "20 min to Downtown Dubai" },
        { icon: "🛍️", text: "25 min to Dubai Mall" },
        { icon: "✈️", text: "30 min to Dubai Airport" },
        { icon: "🌴", text: "Access to major highways" },
      ],
    },

    nearbyAttractions: {
      title: "Dubai Connectivity",
      attractions: [
        {
          name: "Downtown Dubai",
          distance: "18 km",
          time: "20 min",
          icon: "🏙️",
        },
        { name: "Dubai Mall", distance: "22 km", time: "25 min", icon: "🛍️" },
        {
          name: "Dubai Airport",
          distance: "28 km",
          time: "30 min",
          icon: "✈️",
        },
        { name: "Dubai Hills", distance: "15 km", time: "18 min", icon: "🏌️" },
        { name: "Business Bay", distance: "20 km", time: "22 min", icon: "💼" },
        { name: "Al Khail Road", distance: "5 km", time: "8 min", icon: "🛣️" },
      ],
    },

    cta: {
      title: "Ready for Elwood Living?",
      description:
        "Contact our sales team to schedule a private viewing or request more information about available villas and pricing.",
      buttons: [
        { text: "Schedule Viewing", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title: "سوبا إلوود | فلل فاخرة في دبي | فلل 6-4 غرف نوم | Sobha Realty",
      description:
        "اكتشف سوبا إلوود، مجموعة حصرية من الفلل الفاخرة المكونة من 4-6 غرف نوم في دبي. استمتع بحياة عائلية راقية مع مساحات واسعة، حدائق خاصة، ومرافق عالمية المستوى.",
      keywords:
        "سوبا إلوود, Sobha Elwood, فلل فاخرة دبي, فلل 4 غرف نوم, فلل 5 غرف نوم, فلل 6 غرف نوم, عقارات دبي, سوبا دبي",
      canonical: "/properties/villas/sobha/elwood",
    },

    project: {
      name: "سوبا إلوود",
      developer: "Sobha Realty",
      location: "دبي، الإمارات العربية المتحدة",
      status: "تحت الإنشاء",
      startingPrice: "9.9 مليون درهم",
      completionDate: "الربع الرابع 2027",
      type: "فلل فاخرة",
      units: "فلل 6-4 غرف نوم",
    },

    hero: {
      backgroundUrl: HERO_BG || cdn("TYPE 6A FRONT.jpg"),
      squareImageUrl: "/Sobha-Realty-Square-Logo.jpg",
      companyName: "Sobha Realty",
      rating: 4.7,
    },

    intro: {
      title: "حياة عائلية راقية في دبي",
      paragraphs: [
        "يقدّم سوبا إلوود مجموعة حصرية من الفلل الفاخرة المكوّنة من 4-6 غرف نوم، مصممة خصيصًا للعائلات العصرية. تجمع هذه الفلل بعناية بين العمارة المعاصرة والتصميم الوظيفي، مع توفير مساحات واسعة، حدائق خاصة، وتشطيبات فاخرة.",
        "يقع المشروع ضمن مجتمع مخطّط بعناية، حيث يوفر للسكان إمكانية الوصول إلى حدائق خضراء، مرافق ترفيهية، ومرافق عالمية المستوى مع الحفاظ على الخصوصية والهدوء. اختبر التناغم المثالي بين العيش الداخلي والخارجي في واحد من أكثر التطورات الواعدة في دبي.",
      ],
      brochures: [
        {
          title: "الكتيّب الرقمي",
          url: BROCHURE_PDF,
          type: "main",
          icon: "🏡",
          color: "#2E8B57",
          size: "96.88 MB",
          category: "نظرة عامة",
          fileName: "Sobha Elwood Brochure.pdf",
          description: "نظرة شاملة على المشروع ومواصفات الفلل",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "الواجهة الخارجية لفلل سوبا إلوود الفاخرة",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏡",
          value: "6-4 غرف نوم",
          label: "مساحات واسعة",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌿",
          value: "حدائق متعددة",
          label: "مجتمع أخضر",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🏙️",
          value: "موقع مميّز",
          label: "دبي الإمارات",
        },
      ],
    },

    gallery: {
      title: "عرض مرئي",
      slides: GALLERY_SLIDES,
      projectTag: "Sobha Elwood",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br",
          bedrooms: 4,
          shortLabel: "4 غرف",
          title: "فيلا 4 غرف نوم",
          variants: [
            {
              id: "4br-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا 4 غرف نوم – الطابق الأرضي",
              specs: {
                "نوع الوحدة": "فيلا 4 غرف نوم",
                "المساحة الإجمالية": "4,957.64 قدم²",
                "السعر الابتدائي": "9,915,280 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_4BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "4br-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا 4 غرف نوم – الطابق الأول",
              specs: {
                "نوع الوحدة": "فيلا 4 غرف نوم",
                "المساحة الإجمالية": "تقريبًا 2,500 قدم²",
                "السعر الابتدائي": "9,915,280 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_4BR_FIRST],
            },
          ],
        },

        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 غرف",
          title: "فيلا 5 غرف نوم",
          variants: [
            {
              id: "5br-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا 5 غرف نوم – الطابق الأرضي",
              specs: {
                "نوع الوحدة": "فيلا 5 غرف نوم",
                "المساحة الإجمالية": "5,819.40 قدم²",
                "السعر الابتدائي": "11,638,800 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_5BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "5br-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا 5 غرف نوم – الطابق الأول",
              specs: {
                "نوع الوحدة": "فيلا 5 غرف نوم",
                "المساحة الإجمالية": "تقريبًا 3,000 قدم²",
                "السعر الابتدائي": "11,638,800 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_5BR_FIRST],
            },
          ],
        },

        {
          id: "6br",
          bedrooms: 6,
          shortLabel: "6 غرف",
          title: "فيلا 6 غرف نوم",
          variants: [
            {
              id: "6br-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا 6 غرف نوم – الطابق الأرضي",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "المساحة الإجمالية": "7,193.09 قدم²",
                "السعر الابتدائي": "14,386,180 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_6BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "6br-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا 6 غرف نوم – الطابق الأول",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "المساحة الإجمالية": "تقريبًا 3,800 قدم²",
                "السعر الابتدائي": "14,386,180 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_6BR_FIRST],
            },
            {
              id: "6br-second",
              shortLabel: "الطابق الثاني",
              fullTitle: "فيلا 6 غرف نوم – الطابق الثاني",
              specs: {
                "نوع الوحدة": "فيلا 6 غرف نوم",
                "المساحة الإجمالية": "تقريبًا 1,800 قدم²",
                "السعر الابتدائي": "14,386,180 درهم",
                "موعد التسليم": "الربع الرابع 2027",
              },
              images: [FP_6BR_SECOND],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "حدائق ومرافق المجتمع",
      parks: [
        {
          name: "حديقة دينتري",
          description: "نادي مجتمعي مع بحيرة، مناطق تجمع، وميزات مائية",
          images: [
            cdn("DAINTREE PARK_CLUBHOUSE & LAGOON.png"),
            cdn("DAINTREE PARK_LAGOON.png"),
            cdn("DAINTREE PARK_AERIAL VIEW LAGOON.png"),
          ],
          features: [
            "النادي المجتمعي",
            "البحيرة",
            "مناطق التجمع",
            "الواجهة المائية",
          ],
        },
        {
          name: "حديقة تايغا",
          description:
            "ميزات مائية عند المدخل، مناطق أنشطة، ومناظر طبيعية خضراء",
          images: [
            cdn("TAIGA PARK_ENTRY.jpg"),
            cdn("TAIGA PARK_ENTRY WATER FEATURE.jpg"),
            cdn("TAIGA PARK.jpg"),
          ],
          features: ["ميزات مائية", "مناطق الأنشطة", "حدائق مصممة"],
        },
        {
          name: "حديقة الأمازون",
          description: "ساحة مدخل مع أرجوحة ومقاعد للاستراحة",
          images: [
            cdn("AMAZON PARK_ENTRANCE.png"),
            cdn("AMAZON PARK_SEATING AREA.png"),
            cdn("AMAZON PARK_SWING PODS.png"),
          ],
          features: ["أرجوحة", "مناطق للجلوس", "مناطق لعب"],
        },
        {
          name: "حديقة الباوباب",
          description: "ساحات أشجار ومساحات حدائق هادئة",
          images: [
            cdn("BAOBAB PARK_ENTRANCE.jpg"),
            cdn("BAOBAB PARK_TREECOURT.jpg"),
          ],
          features: ["ساحات الأشجار", "مساحات الحدائق", "مناطق استرخاء"],
        },
        {
          name: "حديقة بريستلكون",
          description: "مرافق لياقة بدنية، ساحات أشجار الزيتون، ومناطق ترفيهية",
          images: [
            cdn("BRISTLECONE PARK_ENTRY.jpg"),
            cdn("BRISTLECONE PARK_FITNESS.jpg"),
            cdn("BRISTLECONE PARK_OLIVE TREE COURT.jpg"),
          ],
          features: ["مركز لياقة", "ساحات أشجار الزيتون", "مناطق ترفيه"],
        },
        {
          name: "حديقة ياكوشيما",
          description: "واجهة المدخل الأمامي، مناطق جلوس، ومساحات مجتمعية",
          images: [
            cdn("YAKUSHIMA PARK_FRONT VIEW ENTRY.jpg"),
            cdn("YAKUSHIMA PARK_SEATING.png"),
            cdn("YAKUSHIMA PARK_SIDE VIEW ENTRY.png"),
          ],
          features: ["مساحات مجتمعية", "مناطق جلوس", "ساحة المدخل"],
        },
        {
          name: "حديقة بيالويزا",
          description: "ملاعب كرة سلة ومناظر طبيعية مستوحاة من الوادي",
          images: [
            cdn("BIALOWEIZA PARK_BASKETBALL COURT.png"),
            cdn("BIALOWEIZA PARK_WADI.png"),
          ],
          features: ["ملعب كرة سلة", "تصميمات الوادي", "مرافق رياضية"],
        },
        {
          name: "حديقة الرياضة",
          description: "ملاعب تنس مجداف ومرافق رياضية",
          images: [cdn("SPORTS PARK_PADDLE TENNIS COURTS.jpg")],
          features: ["تنس المجداف", "مرافق رياضية", "مناطق رياضية"],
        },
      ],
      amenitiesList: [
        { label: "عدة حدائق مجتمعية", icon: "🌳", color: "#2E8B57" },
        { label: "نادي مجتمعي وبحيرة", icon: "🏊", color: "#2E8B57" },
        { label: "مركز لياقة بدنية", icon: "💪", color: "#2E8B57" },
        { label: "مرافق رياضية", icon: "🎾", color: "#2E8B57" },
        { label: "مناطق ألعاب للأطفال", icon: "👶", color: "#2E8B57" },
        { label: "ميزات مائية", icon: "💦", color: "#2E8B57" },
        { label: "مسارات للجري", icon: "🏃", color: "#2E8B57" },
        { label: "مسارات للدراجات", icon: "🚴", color: "#2E8B57" },
        { label: "حدائق مصممة", icon: "🌿", color: "#2E8B57" },
        { label: "مركز مجتمعي", icon: "🏛️", color: "#2E8B57" },
        { label: "مناطق للشواء", icon: "🍖", color: "#2E8B57" },
        { label: "مناطق للنزهات", icon: "🧺", color: "#2E8B57" },
        {
          label: "مناطق صديقة للحيوانات الأليفة",
          icon: "🐕",
          color: "#2E8B57",
        },
        { label: "أمن ومراقبة", icon: "🔒", color: "#2E8B57" },
        { label: "مواقف سيارات تحت الأرض", icon: "🅿️", color: "#2E8B57" },
        { label: "شحن للسيارات الكهربائية", icon: "🔋", color: "#2E8B57" },
        { label: "إنترنت عالي السرعة", icon: "📶", color: "#2E8B57" },
        { label: "جاهز للمنزل الذكي", icon: "🏠", color: "#2E8B57" },
        { label: "تكييف مركزي", icon: "❄️", color: "#2E8B57" },
        { label: "إدارة النفايات", icon: "🗑️", color: "#2E8B57" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سوبا إلوود",
      address: "دبي، الإمارات العربية المتحدة",
      lat: 25.0657,
      lng: 55.1713,
      zoom: 13,
      proximityFeatures: [
        { icon: "⏱️", text: "20 دقيقة إلى وسط دبي" },
        { icon: "🛍️", text: "25 دقيقة إلى دبي مول" },
        { icon: "✈️", text: "30 دقيقة إلى مطار دبي" },
        { icon: "🌴", text: "وصول للطرق الرئيسية" },
      ],
    },

    nearbyAttractions: {
      title: "قرب من معالم دبي",
      attractions: [
        {
          name: "وسط مدينة دبي",
          distance: "18 كم",
          time: "20 دقيقة",
          icon: "🏙️",
        },
        { name: "دبي مول", distance: "22 كم", time: "25 دقيقة", icon: "🛍️" },
        { name: "مطار دبي", distance: "28 كم", time: "30 دقيقة", icon: "✈️" },
        { name: "دبي هيلز", distance: "15 كم", time: "18 دقيقة", icon: "🏌️" },
        {
          name: "الخليج التجاري",
          distance: "20 كم",
          time: "22 دقيقة",
          icon: "💼",
        },
        { name: "شارع الخيل", distance: "5 كم", time: "8 دقائق", icon: "🛣️" },
      ],
    },

    cta: {
      title: "جاهز لحياة إلوود؟",
      description:
        "تواصل مع فريق المبيعات لحجز جولة خاصة أو طلب مزيد من المعلومات حول الأسعار والفلل المتاحة.",
      buttons: [
        { text: "حجز جولة", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default elwoodData;
