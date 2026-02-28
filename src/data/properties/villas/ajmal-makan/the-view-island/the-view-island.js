// src/data/projects/islands/ajmal-makan/the-view-island.js
// ✅ Combines: Variants structure from 2nd file + Correct availability from 1st file
// ✅ Preserves 4 pillars format with variants for floor plans

const BUNNY_BASE =
  "https://luxury-real-estate-media.b-cdn.net/ajmal-makan/the-view-island";

// Safer than encodeURI for filenames (spaces, parentheses, etc.)
const cdn = (fileName) => `${BUNNY_BASE}/${encodeURIComponent(fileName)}`;

/* ---------------------------
   ✅ EXACT BUNNY FILES (VISUALS)
---------------------------- */
const HERO_BG = cdn("AJMAL MAKAN CITY 3D (1).png");

const GALLERY = [
  cdn("AJMAL MAKAN CITY 3D (1).jpg"),
  cdn("AJMAL MAKAN CITY 3D (2).jpg"),
  cdn("AJMAL MAKAN CITY 3D (3).jpg"),
  cdn("AJMAL MAKAN CITY 3D (4).jpg"),
  cdn("c01_550 2.jpg"),
  cdn("c02_lyb__VRayZDepth_00472.png"),
  cdn("c03_cx_00000.png"),
  cdn("c05_hjs_000000012.png"),
  cdn("c05_hjs_022200012.png"),
  cdn("c06_lxc_00012.png"),
];

const BROCHURE_PDF = cdn("Brochure Arabic English.pdf");

/* ---------------------------
   ✅ EXACT BUNNY FILES (FLOOR PLANS)
   From your screenshot (case + spacing + typos)
---------------------------- */
const FP_ALBA_4BR_FIRST = cdn(
  "ajmal Alba Townhouses 4br Floor Plan-First Floor.png"
);
const FP_ALBA_4BR_GROUND = cdn(
  "ajmanl Alba Townhouses 4br Floor Plan-Ground Floor.png"
); // ✅ typo is REAL

const FP_PERLA_FIRST = cdn("Ajmal Perla Townhouses Floor Plan-First Floor.png");
const FP_PERLA_GROUND = cdn(
  "ajmal Perla Townhouses Floor Plan-Ground Floor.png"
); // ✅ lowercase ajmal is REAL

const FP_ARYAM_FIRST = cdn("Ajmal Aryam Villas Floor Plan-First Floor.png");
const FP_ARYAM_GROUND = cdn("Ajmal Aryam Villas Floor Plan-Ground Floor.png");

export const theViewIslandData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "The View Island by Ajmal Makan | Waterfront Villas & Townhouses in Sharjah Waterfront City",
      description:
        "The View Island by Ajmal Makan in Sharjah Waterfront City offers premium waterfront living with villas and townhouses, coastal amenities, and a family-friendly island lifestyle on Al Hamriyah coast.",
      keywords:
        "the view island ajmal makan, sharjah waterfront city, waterfront villas sharjah, waterfront townhouses sharjah, al hamriyah sharjah, ajmal makan city",
      canonical: "/properties/villas/ajmal-makan/the-view-island",
    },

    project: {
      name: "The View Island",
      developer: "Ajmal Makan",
      location: "Sharjah Waterfront City (Al Hamriyah), Sharjah",
      status: "Off-plan",
      startingPrice: "From AED 2.651M", // Updated from first file
      completionDate: "Q1 2028",
      type: "Residential",
      units: "Villas & Townhouses",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png",
      companyName: "Ajmal Makan",
      rating: null,
    },

    intro: {
      title: "COASTAL LIVING REIMAGINED",
      paragraphs: [
        "The View Island is a premium coastal destination within Ajmal Makan City (Sharjah Waterfront City), designed to bring together waterfront serenity and modern community living on the Al Hamriyah coast.",
        "Explore a curated selection of homes including Aryam Villas, Perla Townhouses, and Alba Townhouses—each planned for comfort, privacy, and everyday convenience, with lifestyle amenities throughout the island community.",
        "Enjoy an active and social environment with parks, play areas, cycling and running tracks, clubhouse experiences, and easy access to lagoon and beach settings—built for families and long-term island living.",
      ],
      brochures: [
        {
          title: "Digital Brochure (Arabic / English)",
          url: BROCHURE_PDF,
          type: "main",
          icon: "🏝️",
          color: "#3A7BD5",
          size: "",
          category: "Overview",
          fileName: "Brochure Arabic English.pdf",
          description: "Project overview, lifestyle, and community details",
        },
      ],
      imgUrl: cdn("AJMAL MAKAN CITY 3D (3).jpg"),
      imgAlt: "The View Island waterfront community",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "Sharjah Waterfront City",
          label: "Island Community",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌊",
          value: "Lagoon & Beach",
          label: "Coastal Lifestyle",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "Q1 2028",
          label: "Handover (per listing)",
        },
      ],
    },

    gallery: {
      title: "A Coastal Visual Story",
      slides: GALLERY, // ✅ only visuals, no floor plans here
      projectTag: "The View Island",
    },

    // ✅ FLOOR PLANS - KEEPING VARIANTS STRUCTURE from 2nd file
    // ✅ UPDATED WITH CORRECT AVAILABILITY from 1st file
    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "4br",
          bedrooms: 4,
          shortLabel: "4 BR",
          title: "4 Bedroom Townhouses", // Keep from 2nd file
          variants: [
            {
              id: "4br-type-alba-ground",
              shortLabel: "Ground Floor",
              fullTitle: "Alba Townhouse (4BR - Ground Floor)",
              specs: {
                // Updated with correct availability from 1st file
                "Total Area": "3,315.28 - 3,885.77 SQ.FT.",
                "Starting Price": "AED 2,651,000 - 2,875,000",
                Handover: "Q1 2028",
                "Payment Plan": "40% / 60%",
              },
              images: [FP_ALBA_4BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "4br-type-alba-first",
              shortLabel: "First Floor",
              fullTitle: "Alba Townhouse (4BR - First Floor)",
              specs: {
                "Total Area": "3,315.28 - 3,885.77 SQ.FT.",
                "Starting Price": "AED 2,651,000 - 2,875,000",
                Handover: "Q1 2028",
                "Payment Plan": "40% / 60%",
              },
              images: [FP_ALBA_4BR_FIRST],
            },
            {
              id: "4br-type-perla-ground",
              shortLabel: "Ground Floor",
              fullTitle: "Perla Townhouse (4BR - Ground Floor)",
              specs: {
                "Total Area": "3,315.28 - 3,885.77 SQ.FT.",
                "Starting Price": "AED 2,651,000 - 2,875,000",
                Handover: "Q1 2028",
                "Payment Plan": "40% / 60%",
              },
              images: [FP_PERLA_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "4br-type-perla-first",
              shortLabel: "First Floor",
              fullTitle: "Perla Townhouse (4BR - First Floor)",
              specs: {
                "Total Area": "3,315.28 - 3,885.77 SQ.FT.",
                "Starting Price": "AED 2,651,000 - 2,875,000",
                Handover: "Q1 2028",
                "Payment Plan": "40% / 60%",
              },
              images: [FP_PERLA_FIRST],
            },
          ],
        },
        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 BR",
          title: "5 Bedroom Villa", // Keep from 2nd file
          variants: [
            {
              id: "5br-type-aryam-ground",
              shortLabel: "Ground Floor",
              fullTitle: "Aryam Villa (5BR - Ground Floor)",
              specs: {
                // Updated with correct availability from 1st file
                "Total Area": "5,414.25 SQ.FT.",
                "Starting Price": "AED 5,352,000",
                Handover: "Q1 2028",
                "Payment Plan": "40% / 60%",
              },
              images: [FP_ARYAM_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "5br-type-aryam-first",
              shortLabel: "First Floor",
              fullTitle: "Aryam Villa (5BR - First Floor)",
              specs: {
                "Total Area": "5,414.25 SQ.FT.",
                "Starting Price": "AED 5,352,000",
                Handover: "Q1 2028",
                "Payment Plan": "40% / 60%",
              },
              images: [FP_ARYAM_FIRST],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Island Community Amenities",
      amenities: [
        { label: "URBAN BEACH & LAGOON ACCESS", icon: "🏖️", color: "#d7b46a" },
        { label: "CLUBHOUSE", icon: "🏛️", color: "#d7b46a" },
        { label: "CYCLING TRACKS", icon: "🚴", color: "#d7b46a" },
        { label: "RUNNING TRACKS", icon: "🏃", color: "#d7b46a" },
        { label: "LANDSCAPED PARKS", icon: "🌿", color: "#d7b46a" },
        { label: "KIDS PLAY AREAS", icon: "👶", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Island Location",
      projectName: "The View Island",
      address: "Sharjah Waterfront City, Al Hamriyah, Sharjah, UAE",
      lat: 25.4997088,
      lng: 55.5267497,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "Coastal district with lagoon & beach setting" },
        { icon: "🏙️", text: "Connected to Sharjah & northern emirates" },
        { icon: "🛥️", text: "Waterfront lifestyle community" },
        { icon: "🛣️", text: "Easy access to major roads & key hubs" },
      ],
    },

    nearbyAttractions: {
      title: "Nearby points of interest",
      attractions: [
        {
          name: "Al Hamriya Beach",
          distance: "4.7 km",
          time: null,
          icon: "🏖️",
        },
        { name: "Alqalaa School", distance: "5.3 km", time: null, icon: "🎓" },
        {
          name: "West District Park",
          distance: "6.4 km",
          time: null,
          icon: "🌳",
        },
        { name: "Mall of UAQ", distance: "11.7 km", time: null, icon: "🛍️" },
        {
          name: "Dubai International Airport",
          distance: "40.2 km",
          time: null,
          icon: "✈️",
        },
      ],
    },

    cta: {
      title: "Ready for Waterfront Living?",
      description:
        "Contact our team to request availability, unit details, and the latest pricing for The View Island by Ajmal Makan.",
      buttons: [
        { text: "Request Details", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title:
        "ذا ڤيو آيلاند من أجمل مكان | فلل وتاونهاوس على الواجهة البحرية في مدينة الشارقة للواجهة البحرية",
      description:
        "ذا ڤيو آيلاند من أجمل مكان ضمن مدينة الشارقة للواجهة البحرية يقدّم أسلوب حياة ساحلي مع فلل وتاونهاوس ومرافق متكاملة على ساحل الحمرية.",
      keywords:
        "ذا ڤيو آيلاند أجمل مكان, مدينة الشارقة للواجهة البحرية, فلل واجهة بحرية الشارقة, تاونهاوس الشارقة, الحمرية الشارقة, Ajmal Makan City",
      canonical: "/properties/villas/ajmal-makan/the-view-island",
    },

    project: {
      name: "ذا ڤيو آيلاند",
      developer: "أجمل مكان",
      location: "مدينة الشارقة للواجهة البحرية (الحمرية)، الشارقة",
      status: "قيد الإنشاء / متاح للبيع",
      startingPrice: "ابتداءً من 2.651 مليون درهم", // Updated from first file
      completionDate: "الربع الأول 2028",
      type: "سكني",
      units: "فلل وتاونهاوس",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png",
      companyName: "أجمل مكان",
      rating: null,
    },

    intro: {
      title: "حياة ساحلية بمعايير جديدة",
      paragraphs: [
        "«ذا ڤيو آيلاند» وجهة ساحلية مميزة ضمن «مدينة أجمل مكان» (مدينة الشارقة للواجهة البحرية)، صممت لتجمع بين هدوء الواجهة البحرية ونمط الحياة المجتمعي العصري على ساحل الحمرية.",
        "خيارات سكنية مختارة تشمل: فلل أريام، تاونهاوس بيرلا، وتاونهاوس ألبا—بتخطيطات تركز على الراحة والخصوصية وسهولة الحياة اليومية.",
        "بيئة نشطة للعائلات مع حدائق ومناطق لعب ومسارات للدراجات والجري وتجارب النادي، مع أجواء بحيرة وشاطئ قريبة.",
      ],
      brochures: [
        {
          title: "الكتيّب الرقمي (عربي / إنجليزي)",
          url: BROCHURE_PDF,
          type: "main",
          icon: "🏝️",
          color: "#3A7BD5",
          size: "",
          category: "نظرة عامة",
          fileName: "Brochure Arabic English.pdf",
          description: "نظرة شاملة على المشروع وأسلوب الحياة والمرافق",
        },
      ],
      imgUrl: cdn("AJMAL MAKAN CITY 3D (3).jpg"),
      imgAlt: "ذا ڤيو آيلاند - مجتمع على الواجهة البحرية",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏝️",
          value: "مدينة الشارقة للواجهة البحرية",
          label: "مجتمع جزيري",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌊",
          value: "بحيرة وشاطئ",
          label: "أسلوب حياة ساحلي",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "الربع الأول 2028",
          label: "التسليم (حسب المرجع)",
        },
      ],
    },

    gallery: {
      title: "رحلة بصرية ساحلية",
      slides: GALLERY,
      projectTag: "ذا ڤيو آيلاند",
    },

    // ✅ AR FLOOR PLANS - KEEPING VARIANTS STRUCTURE from 2nd file
    // ✅ UPDATED WITH CORRECT AVAILABILITY from 1st file
    floorPlans: {
      type: "villas", // ✅ DO NOT translate (your component checks for "villas")
      plans: [
        {
          id: "4br",
          bedrooms: 4,
          shortLabel: "4 غرف",
          title: "تاونهاوس 4 غرف نوم", // Keep from 2nd file
          variants: [
            {
              id: "4br-type-alba-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "تاونهاوس ألبا (4 غرف - الطابق الأرضي)",
              specs: {
                // Updated with correct availability from 1st file
                "المساحة الإجمالية": "3,315.28 - 3,885.77 قدم²",
                "السعر الابتدائي": "2,651,000 - 2,875,000 درهم",
                "موعد التسليم": "الربع الأول 2028",
                "خطة الدفع": "40% / 60%",
              },
              images: [FP_ALBA_4BR_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "4br-type-alba-first",
              shortLabel: "الطابق الأول",
              fullTitle: "تاونهاوس ألبا (4 غرف - الطابق الأول)",
              specs: {
                "المساحة الإجمالية": "3,315.28 - 3,885.77 قدم²",
                "السعر الابتدائي": "2,651,000 - 2,875,000 درهم",
                "موعد التسليم": "الربع الأول 2028",
                "خطة الدفع": "40% / 60%",
              },
              images: [FP_ALBA_4BR_FIRST],
            },
            {
              id: "4br-type-perla-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "تاونهاوس بيرلا (4 غرف - الطابق الأرضي)",
              specs: {
                "المساحة الإجمالية": "3,315.28 - 3,885.77 قدم²",
                "السعر الابتدائي": "2,651,000 - 2,875,000 درهم",
                "موعد التسليم": "الربع الأول 2028",
                "خطة الدفع": "40% / 60%",
              },
              images: [FP_PERLA_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "4br-type-perla-first",
              shortLabel: "الطابق الأول",
              fullTitle: "تاونهاوس بيرلا (4 غرف - الطابق الأول)",
              specs: {
                "المساحة الإجمالية": "3,315.28 - 3,885.77 قدم²",
                "السعر الابتدائي": "2,651,000 - 2,875,000 درهم",
                "موعد التسليم": "الربع الأول 2028",
                "خطة الدفع": "40% / 60%",
              },
              images: [FP_PERLA_FIRST],
            },
          ],
        },
        {
          id: "5br",
          bedrooms: 5,
          shortLabel: "5 غرف",
          title: "فيلا 5 غرف نوم", // Keep from 2nd file
          variants: [
            {
              id: "5br-type-aryam-ground",
              shortLabel: "الطابق الأرضي",
              fullTitle: "فيلا أريام (5 غرف - الطابق الأرضي)",
              specs: {
                // Updated with correct availability from 1st file
                "المساحة الإجمالية": "5,414.25 قدم²",
                "السعر الابتدائي": "5,352,000 درهم",
                "موعد التسليم": "الربع الأول 2028",
                "خطة الدفع": "40% / 60%",
              },
              images: [FP_ARYAM_GROUND],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "5br-type-aryam-first",
              shortLabel: "الطابق الأول",
              fullTitle: "فيلا أريام (5 غرف - الطابق الأول)",
              specs: {
                "المساحة الإجمالية": "5,414.25 قدم²",
                "السعر الابتدائي": "5,352,000 درهم",
                "موعد التسليم": "الربع الأول 2028",
                "خطة الدفع": "40% / 60%",
              },
              images: [FP_ARYAM_FIRST],
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "مرافق أسلوب حياة الجزيرة",
      amenities: [
        { label: "وصول للشاطئ والبحيرة", icon: "🏖️", color: "#d7b46a" },
        { label: "نادي اجتماعي", icon: "🏛️", color: "#d7b46a" },
        { label: "مسارات للدراجات", icon: "🚴", color: "#d7b46a" },
        { label: "مسارات للجري", icon: "🏃", color: "#d7b46a" },
        { label: "حدائق ومناظر طبيعية", icon: "🌿", color: "#d7b46a" },
        { label: "مناطق ألعاب للأطفال", icon: "👶", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع الجزيرة",
      projectName: "ذا ڤيو آيلاند",
      address: "مدينة الشارقة للواجهة البحرية، الحمرية، الشارقة، الإمارات",
      lat: 25.4997088,
      lng: 55.5267497,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "منطقة ساحلية مع أجواء بحيرة وشاطئ" },
        { icon: "🏙️", text: "قريبة من الشارقة والإمارات الشمالية" },
        { icon: "🛥️", text: "أسلوب حياة على الواجهة البحرية" },
        { icon: "🛣️", text: "وصول سهل للطرق الرئيسية" },
      ],
    },

    nearbyAttractions: {
      title: "أماكن قريبة",
      attractions: [
        { name: "شاطئ الحمرية", distance: "4.7 كم", time: null, icon: "🏖️" },
        { name: "مدرسة القلعة", distance: "5.3 كم", time: null, icon: "🎓" },
        {
          name: "حديقة ويست ديستريكت",
          distance: "6.4 كم",
          time: null,
          icon: "🌳",
        },
        { name: "مول أم القيوين", distance: "11.7 كم", time: null, icon: "🛍️" },
        {
          name: "مطار دبي الدولي",
          distance: "40.2 كم",
          time: null,
          icon: "✈️",
        },
      ],
    },

    cta: {
      title: "جاهز لتجربة الحياة على الواجهة البحرية؟",
      description:
        "تواصل مع فريقنا لطلب التوفر والتفاصيل وأحدث الأسعار لمشروع «ذا ڤيو آيلاند» من أجمل مكان.",
      buttons: [
        { text: "طلب التفاصيل", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default theViewIslandData;
