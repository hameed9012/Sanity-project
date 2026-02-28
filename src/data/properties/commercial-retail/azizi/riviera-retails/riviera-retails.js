// src/data/properties/apartments/azizi/riviera-reve/riviera-reve.js
// ✅ Same constants + encodeURI cdn() + BASE pattern (case/space safe)
// ✅ Keeps your project structure (EN + AR, floorPlans with variants, specs, etc.)
// ✅ Works with your FloorPlanShowcase (hasVariants-safe: EVERY tab has variants)

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

// Bunny folder (as in your file manager)
const PROJECT_PATH = "riviera";

/** Safe with spaces/special chars, keeps folders */
const cdn = (fileName) =>
  encodeURI(`${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${fileName}`);

const BASE = `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}`;

// ========================
// Core Images
// ========================
const HERO_BG = cdn("hero-bg.jpg");
const HERO_INSET = cdn("hero-inset.jpg");
const INTRO_MAIN = cdn("intro-main.jpg");

// ========================
// Brochure PDF
// ========================
const BROCHURE_PDF = cdn("Riviera Rêve Brochure_ENG.pdf");

// ========================
// Gallery
// ========================
const GALLERY_SLIDES = [
  cdn("visual-01.jpg"),
  cdn("visual-03.jpg"),
  cdn("visual-04.jpg"),
  cdn("visual-05.jpg"),
  cdn("visual-06.jpg"),
  cdn("visual-07.jpg"),
  cdn("visual-08.jpg"),
  cdn("visual-09.jpg"),
  cdn("visual-10.jpg"),
  cdn("visual-11.jpg"),
  cdn("visual-12.jpg"),
  cdn("visual-13.jpg"),
  cdn("visual-14.jpg"),
  HERO_INSET,
  HERO_BG,
];

// ========================
// Floor Plans
// ========================
// Apartments
const FP_STUDIO = cdn("Riviera Reve Studio Floor Plan.webp");
const FP_1BR = cdn("Rivera Reve 1br Floor plan.webp"); // (name is "Rivera" in your folder list)
const FP_2BR = cdn("Riviera Reve 2BR Floor Plan.webp");
const FP_3BR = cdn("Riviera Reve 3BR Floor Plan.webp");

// Retail
const FP_RETAIL = cdn("Riviera Retails Floor plan.png");

// Office
const FP_OFFICE_A = cdn("Rivera reve type a office floor plan.png");
const FP_OFFICE_B = cdn("Riviera reve type b office floor plans.png");
const FP_OFFICE_C = cdn("Rivera Reve type c office floor plan.png");

export const rivieraRetailsData = {
  // ============================
  // EN
  // ============================
  en: {
    seo: {
      title: "Riviera Rêve by Azizi | Luxury Residences at Meydan One, Dubai",
      description:
        "Riviera Rêve by Azizi offers refined living in Meydan One with modern layouts, premium finishes, and a vibrant waterfront community.",
      keywords:
        "Azizi Riviera Reve, Riviera Rêve, Meydan One, Dubai apartments, Azizi Developments, luxury residences",
      canonical: "/properties/apartments/azizi/riviera-retails",
    },

    project: {
      name: "Riviera Rêve",
      developer: "Azizi Developments",
      location: "Azizi Riviera at Meydan One, Dubai",
      status: "Secondary",
      startingPrice: "AED 1,474,000",
      completionDate: "Q2 2024",
      handoverDate: "Q2 2024",
      paymentPlan: "20% / 80%",
      type: "Mixed-Use",
      units: "Studios, 1–3BR Apartments + Retail/Office Spaces",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: 4.6,
    },

    intro: {
      title: "ELEVATED LIVING IN MEYDAN ONE",
      paragraphs: [
        "Riviera Rêve is a refined address within Azizi Riviera at Meydan One, designed for residents who want modern layouts, premium finishes, and a lifestyle connected to Dubai’s key destinations.",
        "Choose from studios to 3-bedroom residences, with additional retail and office options—set within a vibrant community atmosphere and contemporary urban planning.",
      ],
      brochures: [
        {
          title: "Brochure (ENG)",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📘",
          color: "#111111",
          size: "19.71 MB",
          category: "Overview",
          fileName: "Riviera Rêve Brochure_ENG.pdf",
          description: "Project brochure and key details",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "Riviera Rêve by Azizi",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "Meydan One",
          label: "Prime District",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q2 2024",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "20/80",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Gallery",
      slides: GALLERY_SLIDES,
      projectTag: "Riviera Rêve",
    },

    // IMPORTANT: every plan has variants (even if 1) so your component never breaks
    floorPlans: {
      type: "mixed",
      plans: [
        {
          id: "studio",
          bedrooms: 0,
          shortLabel: "Studio",
          title: "Studio",
          variants: [
            {
              id: "studio-plan",
              shortLabel: "Floor Plan",
              fullTitle: "Studio (Floor Plan)",
              specs: {
                Unit: "STUDIO",
                "Total Area": "458.33 sqft",
                "Starting Price": "AED 1,474,000",
                Handover: "Q2 2024",
                "Payment Plan": "20% / 80%",
              },
              images: [FP_STUDIO],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "1br",
          bedrooms: 1,
          shortLabel: "1 BR",
          title: "1 Bedroom",
          variants: [
            {
              id: "1br-plan",
              shortLabel: "Floor Plan",
              fullTitle: "1 Bedroom (Floor Plan)",
              specs: {
                Unit: "1 BEDROOM",
                "Total Area": "793.2 sqft",
                "Starting Price": "AED 2,332,000",
                Handover: "Q2 2024",
                "Payment Plan": "20% / 80%",
              },
              images: [FP_1BR],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "2br",
          bedrooms: 2,
          shortLabel: "2 BR",
          title: "2 Bedroom",
          variants: [
            {
              id: "2br-plan",
              shortLabel: "Floor Plan",
              fullTitle: "2 Bedroom (Floor Plan)",
              specs: {
                Unit: "2 BEDROOM",
                "Total Area": "1226.67 sqft",
                "Starting Price": "AED 4,099,000",
                Handover: "Q2 2024",
                "Payment Plan": "20% / 80%",
              },
              images: [FP_2BR],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "3br",
          bedrooms: 3,
          shortLabel: "3 BR",
          title: "3 Bedroom",
          variants: [
            {
              id: "3br-plan",
              shortLabel: "Floor Plan",
              fullTitle: "3 Bedroom (Floor Plan)",
              specs: {
                Unit: "3 BEDROOM",
                "Total Area": "1617.4 sqft",
                "Starting Price": "AED 5,495,000",
                Handover: "Q2 2024",
                "Payment Plan": "20% / 80%",
              },
              images: [FP_3BR],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "retail",
          bedrooms: null,
          shortLabel: "Retail",
          title: "Retail Spaces",
          variants: [
            {
              id: "retail-type-c",
              shortLabel: "Type C",
              fullTitle: "Retail Space (Type C)",
              specs: {
                Unit: "RETAIL SPACE",
                "Total Area": "3346.61 SQ.FT (Type C)",
                "Starting Price": "On Request",
                Handover: "Q2 2024",
                "Payment Plan": "Contact for details",
              },
              images: [FP_RETAIL],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "retail-type-a",
              shortLabel: "Type A",
              fullTitle: "Retail Space (Type A)",
              specs: {
                Unit: "RETAIL SPACE",
                "Total Area": "829.64 SQ.FT (Type A)",
                "Starting Price": "On Request",
                Handover: "Q2 2024",
                "Payment Plan": "Contact for details",
              },
              images: [FP_RETAIL],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "retail-type-b",
              shortLabel: "Type B",
              fullTitle: "Retail Space (Type B)",
              specs: {
                Unit: "RETAIL SPACE",
                "Total Area": "1011.25 SQ.FT (Type B)",
                "Starting Price": "On Request",
                Handover: "Q2 2024",
                "Payment Plan": "Contact for details",
              },
              images: [FP_RETAIL],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "office",
          bedrooms: null,
          shortLabel: "Office",
          title: "Office Spaces",
          variants: [
            {
              id: "office-type-a",
              shortLabel: "Type A",
              fullTitle: "Office Space (Type A)",
              specs: {
                Unit: "OFFICE SPACE",
                "Total Area": "829.64 SQ.FT (Type A)",
                "Starting Price": "On Request",
                Handover: "Q2 2024",
                "Payment Plan": "Contact for details",
              },
              images: [FP_OFFICE_A],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "office-type-b",
              shortLabel: "Type B",
              fullTitle: "Office Space (Type B)",
              specs: {
                Unit: "OFFICE SPACE",
                "Total Area": "1011.25 SQ.FT (Type B)",
                "Starting Price": "On Request",
                Handover: "Q2 2024",
                "Payment Plan": "Contact for details",
              },
              images: [FP_OFFICE_B],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "office-type-c",
              shortLabel: "Type C",
              fullTitle: "Office Space (Type C)",
              specs: {
                Unit: "OFFICE SPACE",
                "Total Area": "3346.61 SQ.FT (Type C)",
                "Starting Price": "On Request",
                Handover: "Q2 2024",
                "Payment Plan": "Contact for details",
              },
              images: [FP_OFFICE_C],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "SWIMMING POOLS", icon: "🏊", color: "#d7b46a" },
        { label: "FITNESS CENTER", icon: "💪", color: "#d7b46a" },
        { label: "LANDSCAPED AREAS", icon: "🌿", color: "#d7b46a" },
        { label: "RETAIL PROMENADE", icon: "🛍️", color: "#d7b46a" },
        { label: "CAFÉS & DINING", icon: "☕", color: "#d7b46a" },
        { label: "24/7 SECURITY", icon: "🛡️", color: "#d7b46a" },
        { label: "PARKING", icon: "🚗", color: "#d7b46a" },
        { label: "COMMUNITY SPACES", icon: "🏛️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Location",
      projectName: "Riviera Rêve",
      address: "Azizi Riviera at Meydan One, Dubai, UAE",
      lat: 25.1734161,
      lng: 55.3076972,
      zoom: 16,
      proximityFeatures: [
        { icon: "⏱️", text: "Minutes to Downtown Dubai" },
        { icon: "🏙️", text: "Connected to key business hubs" },
        { icon: "🛣️", text: "Smooth access to major roads" },
        { icon: "🛍️", text: "Lifestyle & retail nearby" },
      ],
    },

    nearbyAttractions: {
      title: "Nearby",
      attractions: [
        {
          name: "Downtown Dubai",
          distance: "≈ 10 km",
          time: "≈ 12 min",
          icon: "🌆",
        },
        {
          name: "Dubai Mall",
          distance: "≈ 10 km",
          time: "≈ 12 min",
          icon: "🛍️",
        },
        {
          name: "Burj Khalifa",
          distance: "≈ 11 km",
          time: "≈ 14 min",
          icon: "🏙️",
        },
        { name: "DIFC", distance: "≈ 12 km", time: "≈ 15 min", icon: "💼" },
        {
          name: "Meydan Racecourse",
          distance: "≈ 4 km",
          time: "≈ 7 min",
          icon: "🏇",
        },
        {
          name: "DXB Airport",
          distance: "≈ 18 km",
          time: "≈ 20 min",
          icon: "✈️",
        },
      ],
    },

    cta: {
      title: "Interested in Riviera Rêve?",
      description:
        "Contact our team to confirm availability, request details, or download the brochure.",
      buttons: [
        { text: "Contact Us", type: "primary", url: "/contact" },
        { text: "Download Brochure", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },

  // ============================
  // AR
  // ============================
  ar: {
    seo: {
      title: "ريفيرا ريف من عزيزي | شقق فاخرة في ميدان ون - دبي",
      description:
        "ريفيرا ريف من عزيزي تقدّم أسلوب حياة عصري في ميدان ون مع مخططات عملية وتشطيبات راقية ومجتمع نابض بالحياة.",
      keywords:
        "ريفيرا ريف, عزيزي ريفيرا, ميدان ون, شقق دبي, Azizi, Riviera Rêve",
      canonical: "/properties/apartments/azizi/riviera-retails",
    },

    project: {
      name: "Riviera Rêve",
      developer: "Azizi Developments",
      location: "عزيزي ريفيرا في ميدان ون، دبي",
      status: "ثانوي (إعادة بيع)",
      startingPrice: "1,474,000 درهم",
      completionDate: "الربع الثاني 2024",
      handoverDate: "الربع الثاني 2024",
      paymentPlan: "20% / 80%",
      type: "متعدد الاستخدام",
      units: "استوديو إلى 3 غرف + مساحات تجارية/مكاتب",
    },

    hero: {
      backgroundUrl: HERO_BG,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: 4.6,
    },

    intro: {
      title: "حياة راقية في ميدان ون",
      paragraphs: [
        "ريفيرا ريف عنوان سكني مميز ضمن عزيزي ريفيرا في ميدان ون، يجمع بين التصميم العصري وجودة التشطيبات وسهولة الوصول إلى أهم وجهات دبي.",
        "اختيار واسع من الاستوديو وحتى شقق 3 غرف، مع خيارات إضافية للمساحات التجارية والمكاتب ضمن مجتمع حديث وحيوي.",
      ],
      brochures: [
        {
          title: "الكتيّب (إنجليزي)",
          url: BROCHURE_PDF,
          type: "main",
          icon: "📘",
          color: "#111111",
          size: "19.71 MB",
          category: "نظرة عامة",
          fileName: "Riviera Rêve Brochure_ENG.pdf",
          description: "كتيّب المشروع والتفاصيل الأساسية",
        },
      ],
      imgUrl: INTRO_MAIN,
      imgAlt: "ريفيرا ريف من عزيزي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "ميدان ون",
          label: "موقع مميز",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q2 2024",
          label: "التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "20/80",
          label: "خطة دفع",
        },
      ],
    },

    gallery: {
      title: "المعرض",
      slides: GALLERY_SLIDES,
      projectTag: "Riviera Rêve",
    },

    floorPlans: {
      type: "mixed",
      plans: [
        {
          id: "studio",
          bedrooms: 0,
          shortLabel: "استوديو",
          title: "استوديو",
          variants: [
            {
              id: "studio-plan",
              shortLabel: "مخطط",
              fullTitle: "استوديو (مخطط الطابق)",
              specs: {
                "نوع الوحدة": "استوديو",
                "المساحة الإجمالية": "458.33 قدم²",
                "السعر الابتدائي": "1,474,000 درهم",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "20% / 80%",
              },
              images: [FP_STUDIO],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "1br",
          bedrooms: 1,
          shortLabel: "1 غرفة",
          title: "غرفة نوم واحدة",
          variants: [
            {
              id: "1br-plan",
              shortLabel: "مخطط",
              fullTitle: "غرفة نوم واحدة (مخطط الطابق)",
              specs: {
                "نوع الوحدة": "غرفة نوم واحدة",
                "المساحة الإجمالية": "793.2 قدم²",
                "السعر الابتدائي": "2,332,000 درهم",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "20% / 80%",
              },
              images: [FP_1BR],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "2br",
          bedrooms: 2,
          shortLabel: "2 غرف",
          title: "غرفتان نوم",
          variants: [
            {
              id: "2br-plan",
              shortLabel: "مخطط",
              fullTitle: "غرفتان نوم (مخطط الطابق)",
              specs: {
                "نوع الوحدة": "غرفتان نوم",
                "المساحة الإجمالية": "1226.67 قدم²",
                "السعر الابتدائي": "4,099,000 درهم",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "20% / 80%",
              },
              images: [FP_2BR],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "3br",
          bedrooms: 3,
          shortLabel: "3 غرف",
          title: "3 غرف نوم",
          variants: [
            {
              id: "3br-plan",
              shortLabel: "مخطط",
              fullTitle: "3 غرف نوم (مخطط الطابق)",
              specs: {
                "نوع الوحدة": "3 غرف نوم",
                "المساحة الإجمالية": "1617.4 قدم²",
                "السعر الابتدائي": "5,495,000 درهم",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "20% / 80%",
              },
              images: [FP_3BR],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "retail",
          bedrooms: null,
          shortLabel: "تجاري",
          title: "مساحات تجارية",
          variants: [
            {
              id: "retail-type-c",
              shortLabel: "Type C",
              fullTitle: "مساحة تجارية (Type C)",
              specs: {
                "نوع الوحدة": "مساحة تجارية",
                "المساحة الإجمالية": "3346.61 قدم² (Type C)",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "يرجى التواصل للتفاصيل",
              },
              images: [FP_RETAIL],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "retail-type-a",
              shortLabel: "Type A",
              fullTitle: "مساحة تجارية (Type A)",
              specs: {
                "نوع الوحدة": "مساحة تجارية",
                "المساحة الإجمالية": "829.64 قدم² (Type A)",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "يرجى التواصل للتفاصيل",
              },
              images: [FP_RETAIL],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "retail-type-b",
              shortLabel: "Type B",
              fullTitle: "مساحة تجارية (Type B)",
              specs: {
                "نوع الوحدة": "مساحة تجارية",
                "المساحة الإجمالية": "1011.25 قدم² (Type B)",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "يرجى التواصل للتفاصيل",
              },
              images: [FP_RETAIL],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },

        {
          id: "office",
          bedrooms: null,
          shortLabel: "مكاتب",
          title: "مساحات مكاتب",
          variants: [
            {
              id: "office-type-a",
              shortLabel: "Type A",
              fullTitle: "مساحة مكتب (Type A)",
              specs: {
                "نوع الوحدة": "مكتب",
                "المساحة الإجمالية": "829.64 قدم² (Type A)",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "يرجى التواصل للتفاصيل",
              },
              images: [FP_OFFICE_A],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "office-type-b",
              shortLabel: "Type B",
              fullTitle: "مساحة مكتب (Type B)",
              specs: {
                "نوع الوحدة": "مكتب",
                "المساحة الإجمالية": "1011.25 قدم² (Type B)",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "يرجى التواصل للتفاصيل",
              },
              images: [FP_OFFICE_B],
              brochureUrl: BROCHURE_PDF,
            },
            {
              id: "office-type-c",
              shortLabel: "Type C",
              fullTitle: "مساحة مكتب (Type C)",
              specs: {
                "نوع الوحدة": "مكتب",
                "المساحة الإجمالية": "3346.61 قدم² (Type C)",
                "السعر الابتدائي": "عند الطلب",
                "موعد التسليم": "الربع الثاني 2024",
                "خطة السداد": "يرجى التواصل للتفاصيل",
              },
              images: [FP_OFFICE_C],
              brochureUrl: BROCHURE_PDF,
            },
          ],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق وأسلوب الحياة",
      amenities: [
        { label: "مسابح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي لياقة", icon: "💪", color: "#d7b46a" },
        { label: "مساحات خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "ممشى ومتاجر", icon: "🛍️", color: "#d7b46a" },
        { label: "مقاهي ومطاعم", icon: "☕", color: "#d7b46a" },
        { label: "أمن 24/7", icon: "🛡️", color: "#d7b46a" },
        { label: "مواقف سيارات", icon: "🚗", color: "#d7b46a" },
        { label: "مساحات مشتركة", icon: "🏛️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "الموقع",
      projectName: "Riviera Rêve",
      address: "عزيزي ريفيرا في ميدان ون، دبي، الإمارات",
      lat: 25.1734161,
      lng: 55.3076972,
      zoom: 16,
      proximityFeatures: [
        { icon: "⏱️", text: "دقائق إلى وسط دبي" },
        { icon: "🏙️", text: "قريب من المراكز التجارية" },
        { icon: "🛣️", text: "سهولة الوصول للطرق الرئيسية" },
        { icon: "🛍️", text: "خدمات ومتاجر قريبة" },
      ],
    },

    nearbyAttractions: {
      title: "بالقرب من",
      attractions: [
        {
          name: "وسط دبي",
          distance: "≈ 10 كم",
          time: "≈ 12 دقيقة",
          icon: "🌆",
        },
        {
          name: "دبي مول",
          distance: "≈ 10 كم",
          time: "≈ 12 دقيقة",
          icon: "🛍️",
        },
        {
          name: "برج خليفة",
          distance: "≈ 11 كم",
          time: "≈ 14 دقيقة",
          icon: "🏙️",
        },
        {
          name: "مركز دبي المالي DIFC",
          distance: "≈ 12 كم",
          time: "≈ 15 دقيقة",
          icon: "💼",
        },
        {
          name: "ميدان (مضمار السباق)",
          distance: "≈ 4 كم",
          time: "≈ 7 دقائق",
          icon: "🏇",
        },
        {
          name: "مطار دبي الدولي",
          distance: "≈ 18 كم",
          time: "≈ 20 دقيقة",
          icon: "✈️",
        },
      ],
    },

    cta: {
      title: "مهتم بـ Riviera Rêve؟",
      description:
        "تواصل معنا لتأكيد التوفر والحصول على التفاصيل أو تحميل الكتيّب.",
      buttons: [
        { text: "تواصل معنا", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: BROCHURE_PDF },
      ],
    },
  },
};

export default rivieraRetailsData;
