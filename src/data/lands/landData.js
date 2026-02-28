// src/data/lands/landData.js
// ✅ Lands data with complete Al Rasikhoon project details

const BUNNY_BASE = "https://luxury-real-estate-media.b-cdn.net";

// ✅ helper: safe pick EN/AR
export function pickLang(v, locale = "en") {
  if (!v) return "";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (typeof v === "object") {
    if (v[locale] != null) return String(v[locale]);
    if (v.en != null) return String(v.en);
    const first = Object.values(v).find((x) => typeof x === "string");
    return first ? String(first) : "";
  }
  return "";
}

// ✅ helper: best thumbnail
export function getLandThumbnail(land) {
  const firstGallery = Array.isArray(land?.gallery) ? land.gallery[0] : "";
  if (firstGallery) return firstGallery;
  if (land?.thumbnail) return land.thumbnail;
  return "";
}

// ✅ From your Bunny screenshot structure:
function landFolder(path) {
  return `${BUNNY_BASE}/al-rasikhoon/${path}`;
}

export const landsData = [
  // ✅ PROJECT 1: Rawdat Al Sidr
  {
    id: "rawdat-al-sidr",
    slug: "rawdat-al-sidr",
    title: { 
      en: "Rawdat Al Sidr", 
      ar: "روضة السدر – مشروع سكني تجاري متكامل في موقع استراتيجي" 
    },
    subtitle: {
      en: "Integrated Residential & Commercial Project in Strategic Location",
      ar: "مشروع سكني تجاري متكامل في موقع استراتيجي",
    },
    location: {
      en: "7M96+PV - Rawdat Al Sidr - Al Ruwaiyat - Sharjah",
      ar: "7M96+PV - ضاحية الرويضات - روضة السدر - الشارقة",
    },
    description: {
      en: "Rawdat Al Sidr is a promising residential and commercial project that combines quality planning and diverse uses, providing an ideal environment for living and investment simultaneously, within one of the most vibrant locations in the emirate. The project features residential plots, commercial plots, and investment plots with various building permits.",
      ar: "روضة السدر هو مشروع سكني تجاري واعد يجمع بين جودة التخطيط وتنوّع الاستخدامات، ليقدّم بيئة مثالية للسكن والاستثمار في آنٍ واحد، ضمن أحد أبرز المواقع الحيوية في الإمارة. يتميز المشروع بقطع سكنية، قطع تجارية، وقطع استثمارية بتصاريح بناء متنوعة.",
    },
    // ✅ COMPLETE PROJECT DETAILS
    details: {
      en: [
        "Residential lands (Building permit: Ground + 2)",
        "Residential commercial lands (Building permits: Ground + 2)",
        "Residential investment lands (Building permits: Ground + 2)",
        "Commercial lands - Office residences (Building permits: Ground + P + 3)",
        "Multiple mosques, gardens and green spaces",
        "Various services for residents and visitors",
        "Medical clinic within the project scope",
        "Starting from 270 square meters up to 1080 square meters"
      ],
      ar: [
        "أراضٍ سكنية (تصريح بناء: أرضي + 2)",
        "أراضٍ سكنية تجارية (تصاريح بناء: أرضي + 2)",
        "أراضٍ سكني استثماري (تصاريح بناء: أرضي + 2)",
        "أراضٍ تجارية – مكاتب سكنية (تصاريح بناء: أرضي + P + 3)",
        "عدد من المساجد وحدائق ومساحات خضراء",
        "خدمات متنوعة لخدمة السكان والزوار",
        "عيادة طبية داخل نطاق المشروع",
        "تبدأ من 270 مترًا مربعًا وتصل إلى 1080 مترًا مربعًا"
      ]
    },
    features: {
      en: [
        "Strategic location near main roads",
        "Complete infrastructure with asphalt roads",
        "Green spaces and community parks",
        "Commercial areas for shops and services",
        "Medical facilities within walking distance",
        "Flexible building permits",
        "Freehold ownership for all nationalities"
      ],
      ar: [
        "موقع استراتيجي قرب الطرق الرئيسية",
        "بنية تحتية كاملة مع طرق أسفلتية",
        "مساحات خضراء وحدائق مجتمعية",
        "مناطق تجارية للمحلات والخدمات",
        "مرافق طبية على مسافة قريبة",
        "تصاريح بناء مرنة",
        "تملك حر لجميع الجنسيات"
      ]
    },
    nearby: [
      {
        name: { en: "Al Dhaid Road", ar: "طريق الذيد" },
        distance: { en: "2 minutes", ar: "دقيقتين" }
      },
      {
        name: { en: "Khalid Bin Sultan City", ar: "مدينة خالد بن سلطان" },
        distance: { en: "5 minutes", ar: "5 دقائق" }
      },
      {
        name: { en: "Future Etihad Rail Route", ar: "مسار قطار الاتحاد المستقبلي" },
        distance: { en: "10 minutes", ar: "10 دقائق" }
      },
      {
        name: { en: "Al Qasimia Road", ar: "طريق القاسمية" },
        distance: { en: "8 minutes", ar: "8 دقائق" }
      }
    ],
    contact: {
      phone: "+971500000001",
      whatsapp: "+971500000001",
      brochureUrl: `${landFolder("rawdat-al-sidr")}/rawdat-al-sadr-master-plan.pdf`,
      scheduleCall: "https://calendly.com/alrasikhoon"
    },
    type: "residential",
    status: "available",
    area: { en: "270-1080 sqm", ar: "1080-270 متر مربع" },
    price: { en: "Starting from AED 450,000", ar: "تبدأ من 450,000 درهم" },
    completion: { en: "Infrastructure Complete", ar: "البنية التحتية مكتملة" },
    gallery: [
      `${landFolder("rawdat-al-sidr")}/1.webp`,
      `${landFolder("rawdat-al-sidr")}/2.webp`,
      `${landFolder("rawdat-al-sidr")}/3.webp`,
      `${landFolder("rawdat-al-sidr")}/4.webp`,
      `${landFolder("rawdat-al-sidr")}/5.webp`,
    ],
    brochureUrl: `${landFolder("rawdat-al-sidr")}/rawdat-al-sadr-master-plan.pdf`,
    videoUrl: "https://www.youtube.com/watch?v=example1",
    virtualTour: "https://my.matterport.com/show/?m=example1",
    developer: "Al Rasikhoon Real Estate"
  },

  // ✅ PROJECT 2: Al Qasimia Gate
  {
    id: "al-qasimia-gate",
    slug: "al-qasimia-gate",
    title: { 
      en: "Al Qasimia Gate Project - Sharjah", 
      ar: "مشروع بوابة القاسمية – إمارة الشارقة" 
    },
    subtitle: {
      en: "Integrated Industrial & Commercial Project",
      ar: "مشروع صناعي وتجاري متكامل",
    },
    location: {
      en: "24°58'16.2\"N 55°40'13.6\"E - Al Qasimia Industrial City",
      ar: "24°58'16.2\"N 55°40'13.6\"E - مدينة القاسمية الصناعية",
    },
    description: {
      en: "An integrated industrial and commercial project located in Al Qasimia Industrial City, designed to be a strategic destination for owners of light and medium industries, combining modern infrastructure with international urban planning standards. The project allows freehold ownership for all nationalities and provides an ideal investment environment at competitive prices.",
      ar: "مشروع صناعي وتجاري متكامل يقع في مدينة القاسمية الصناعية، صُمم ليكون وجهة استراتيجية لأصحاب الصناعات الخفيفة والمتوسطة، حيث يجمع بين بنية تحتية حديثة ومعايير تخطيط عمراني عالمية. يتيح المشروع التملك الحر لجميع الجنسيات ويوفر بيئة استثمارية مثالية بأسعار تنافسية.",
    },
    details: {
      en: [
        "Freehold for all nationalities",
        "Exemption from registration and ownership fees",
        "Possibility of construction in installments (with payment of only 50% of land value)",
        "Warehouse permits up to 13 meters high",
        "Commercial shops (ground floor + mezzanine) 8 meters high",
        "Pre-feasibility studies and designs",
        "Electricity and water services available through 'Federal Electricity and Water Authority'"
      ],
      ar: [
        "تملك حر لجميع الجنسيات",
        "إعفاء من رسوم التسجيل والتملك",
        "إمكانية البناء بالتقسيط (مع دفع 50٪ فقط من قيمة الأرض)",
        "تصاريح مستودعات بارتفاع حتى 13 متر",
        "محلات تجارية (أرضي + ميزان) بارتفاع 8 متر",
        "تصاميم ودراسات جدوى مسبقة",
        "خدمات الكهرباء والمياه متوفرة عبر 'الاتحاد للماء والكهرباء'"
      ]
    },
    features: {
      en: [
        "Light and medium industrial zones",
        "Commercial showrooms and offices",
        "Worker housing facilities",
        "Modern infrastructure with wide roads",
        "24/7 security and surveillance",
        "Easy access to main highways",
        "Customizable plot layouts"
      ],
      ar: [
        "مناطق صناعية خفيفة ومتوسطة",
        "معارض تجارية ومكاتب",
        "مرافق سكن عمال",
        "بنية تحتية حديثة مع طرق واسعة",
        "أمن ومراقبة على مدار 24 ساعة",
        "وصول سهل للطرق الرئيسية",
        "تخطيط قطع قابل للتخصيص"
      ]
    },
    nearby: [
      {
        name: { en: "Sharjah Airport", ar: "مطار الشارقة" },
        distance: { en: "45 minutes (49.2 km)", ar: "45 دقيقة (49.2 كم)" }
      },
      {
        name: { en: "Dubai International Airport", ar: "مطار دبي الدولي" },
        distance: { en: "47 minutes (59.6 km)", ar: "47 دقيقة (59.6 كم)" }
      },
      {
        name: { en: "Ajman Free Zone", ar: "منطقة عجمان الحرة" },
        distance: { en: "55 minutes (68 km)", ar: "55 دقيقة (68 كم)" }
      },
      {
        name: { en: "Al Sajaa Industrial Market", ar: "سوق الصجعة الصناعي" },
        distance: { en: "37 minutes", ar: "37 دقيقة" }
      }
    ],
    contact: {
      phone: "+971500000002",
      whatsapp: "+971500000002",
      brochureUrl: `${landFolder("al-qasimia")}/al-qasimia-gate.pdf`,
      scheduleCall: "https://calendly.com/alrasikhoon-industrial"
    },
    type: "industrial",
    status: "available",
    area: { en: "Various sizes available", ar: "مساحات متنوعة متاحة" },
    price: { en: "Competitive pricing", ar: "أسعار تنافسية" },
    completion: { en: "Ready for Construction", ar: "جاهز للبناء" },
    gallery: [
      `${landFolder("al-qasimia")}/1.webp`,
      `${landFolder("al-qasimia")}/2.webp`,
      `${landFolder("al-qasimia")}/3.webp`,
    ],
    brochureUrl: `${landFolder("al-qasimia")}/al-qasimia-gate.pdf`,
    videoUrl: "https://www.youtube.com/watch?v=example2",
    virtualTour: "https://my.matterport.com/show/?m=example2",
    developer: "Al Rasikhoon Real Estate"
  },

  // ✅ PROJECT 3: Rawdat Al Sidr 2
  {
    id: "rawdat-al-sidr-2",
    slug: "rawdat-al-sidr-2",
    title: { 
      en: "Rawdat Al Sidr 2", 
      ar: "روضة السدر 2" 
    },
    subtitle: {
      en: "Residential & Residential-Commercial Integrated Project",
      ar: "مشروع أراضٍ سكنية وسكنية تجارية متكامل",
    },
    location: {
      en: "Rawdat Al Sidr - Sharjah",
      ar: "روضة السدر - الشارقة",
    },
    description: {
      en: "Rawdat Al Sidr 2 is an integrated residential and residential-commercial land project in Sharjah, offering freehold ownership opportunities for all nationalities within a carefully planned environment that combines quality organization and diverse uses. The project has been developed to serve both family housing and investment needs simultaneously, with flexible building permits that keep pace with market requirements and give the owner freedom to develop according to their vision.",
      ar: "مشروع روضة السدر 2 هو مشروع أراضٍ سكنية وسكنية تجارية متكامل في إمارة الشارقة، يقدّم فرصة تملك حر لجميع الجنسيات ضمن بيئة مخططة بعناية تجمع بين جودة التنظيم وتنوّع الاستخدامات. تم تطوير المشروع ليخدم احتياجات السكن العائلي والاستثمار في آنٍ واحد، مع تصاريح بناء مرنة تواكب متطلبات السوق وتمنح المالك حرية التطوير حسب رؤيته.",
    },
    details: {
      en: [
        "Areas starting from 270 sq.m",
        "Freehold ownership for all nationalities",
        "Asphalt roads throughout the project",
        "Multiple mosques, gardens and green spaces",
        "Various services for residents and visitors"
      ],
      ar: [
        "المساحات تبدأ من 270م.م",
        "التملك حر لجميع الجنسيات",
        "الطرق اسفلتية بالمشروع",
        "عدد من المساجد وحدائق ومساحات خضراء",
        "خدمات متنوعة لخدمة السكان والزوار"
      ]
    },
    features: {
      en: [
        "Strategic location overlooking two main roads",
        "Complete infrastructure with asphalt roads",
        "Suitable for villa construction",
        "Close proximity to essential services",
        "Quiet and family-friendly environment",
        "Long-term investment value",
        "Clear land division"
      ],
      ar: [
        "موقع استراتيجي يطل على طريقين رئيسيين",
        "بنية تحتية كاملة مع طرق أسفلتية",
        "مناسب لبناء الفلل",
        "قرب من الخدمات الأساسية",
        "بيئة هادئة ومناسبة للعائلات",
        "قيمة استثمارية طويلة الأجل",
        "تقسيم واضح للأراضي"
      ]
    },
    nearby: [
      {
        name: { en: "Al Dhaid Road", ar: "طريق الذيد" },
        distance: { en: "One of the main roads in the emirate", ar: "أحد أهم الطرق الرئيسية بالامارة" }
      },
      {
        name: { en: "Al Qasimia Road", ar: "طريق القاسمية" },
        distance: { en: "One of the main roads in the emirate", ar: "أحد أهم الطرق الرئيسية بالامارة" }
      },
      {
        name: { en: "Khalid Bin Sultan City", ar: "مدينة خالد بن سلطان" },
        distance: { en: "Smart city in Sharjah", ar: "مدينة ذكية بإمارة الشارقة" }
      }
    ],
    contact: {
      phone: "+971500000003",
      whatsapp: "+971500000003",
      brochureUrl: `${landFolder("rawdat-al-sidr-2")}/rawdat-al-sadr-master-plan-2.pdf`,
      scheduleCall: "https://calendly.com/alrasikhoon-phase2"
    },
    type: "residential",
    status: "available",
    area: { en: "270+ sqm", ar: "270+ متر مربع" },
    price: { en: "All-inclusive price", ar: "سعر شامل جميع الرسوم" },
    completion: { en: "Ready for Construction", ar: "جاهزية كاملة للبناء" },
    gallery: [
      `${landFolder("rawdat-al-sidr-2")}/1.webp`,
      `${landFolder("rawdat-al-sidr-2")}/2.webp`,
      `${landFolder("rawdat-al-sidr-2")}/3.webp`,
      `${landFolder("rawdat-al-sidr-2")}/4.webp`,
      `${landFolder("rawdat-al-sidr-2")}/5.webp`,
    ],
    brochureUrl: `${landFolder("rawdat-al-sidr-2")}/rawdat-al-sadr-master-plan-2.pdf`,
    developer: "Al Rasikhoon Real Estate"
  },

  // ✅ PROJECT 4: Al Sajaa Industrial
  {
    id: "al-saja-el-namoosajiya",
    slug: "al-saja-el-namoosajiya",
    title: { 
      en: "Sajaa 00 - Industrial Land Project", 
      ar: "الصجعة 00 - مشروع أراضٍ صناعية" 
    },
    subtitle: {
      en: "Strategic Industrial Land Investment Opportunity",
      ar: "فرصة استثمارية فريدة في منطقة الصجعة الصناعية",
    },
    location: {
      en: "Sajaa Industrial Area, near Emirates Industrial City and Emirates Road",
      ar: "الصجعة الصناعية، بالقرب من مدينة الامارات الصناعية وشارع الامارات",
    },
    description: {
      en: "SAJAA 00 offers you a unique investment opportunity in the heart of Sajaa Industrial Area, just 4 minutes away from Emirates Road and next to Emirates Industrial City, where industrial lands are available with areas starting from 19,409 square meters up to 26,446 square meters, with a complete infrastructure including asphalt roads throughout the project.",
      ar: "مشروع SAJAA 00 يقدم لك فرصة استثمارية فريدة في قلب منطقة الصجعة الصناعية، على بعد 4 دقائق فقط من شارع الإمارات وبجوار المدينة الصناعية الإماراتية، حيث تتوفر أراضٍ صناعية بمساحات تبدأ من 19,409 متر مربع وتصل إلى 26,446 متر مربع، مع بنية تحتية متكاملة تشمل طرقًا أسفلتية في كامل المشروع.",
    },
    details: {
      en: [
        "Areas starting from 19,409 sqm up to 26,446 sqm",
        "Complete asphalt road network throughout the project",
        "Freehold ownership for Arab nationals and usufruct rights for non-Arabs",
        "Price of 165 dirhams per square foot including all fees"
      ],
      ar: [
        "تبدأ المساحات من 19,409 متر مربع وتصل حتى 26,446 متر مربع",
        "شبكة طرق أسفلتية متكاملة ضمن كامل المشروع",
        "تملك حر للجنسيات العربية وحق انتفاع لغير العرب",
        "بسعر 165 درهم للقدم المربع"
      ]
    },
    features: {
      en: [
        "4 minutes from Emirates Road",
        "Adjacent to Emirates Industrial City",
        "Ideal for warehouses and storage facilities",
        "Guaranteed investment returns",
        "Complete infrastructure",
        "Strategic integrated environment",
        "Competitive pricing"
      ],
      ar: [
        "4 دقائق من شارع الإمارات",
        "مجاور للمدينة الصناعية الإماراتية",
        "مثالي للشبرات والمخازن",
        "عوائد استثمارية مضمونة",
        "بنية تحتية متكاملة",
        "بيئة استراتيجية متكاملة",
        "أسعار تنافسية"
      ]
    },
    nearby: [
      {
        name: { en: "Emirates Industrial City", ar: "مدينة الإمارات الصناعية" },
        distance: { en: "2 minutes only", ar: "على بعد دقيقتين فقط" }
      },
      {
        name: { en: "Emirates Road", ar: "شارع الامارات العابر" },
        distance: { en: "4 minutes", ar: "على بعد 4 دقائق" }
      }
    ],
    contact: {
      phone: "+971500000004",
      whatsapp: "+971500000004",
      brochureUrl: `${landFolder("al-saja-el-namoosajiya")}/al-saja-el-namoosajiya.pdf`,
      scheduleCall: "https://calendly.com/alrasikhoon-sajaa"
    },
    type: "industrial",
    status: "available",
    area: { en: "19,409-26,446 sqm", ar: "26,446-19,409 متر مربع" },
    price: { en: "165 AED/sq.ft (all inclusive)", ar: "165 درهم/قدم مربع (شامل جميع الرسوم)" },
    completion: { en: "Infrastructure Complete", ar: "البنية التحتية مكتملة" },
    gallery: [`${landFolder("al-saja-el-namoosajiya")}/1.webp`],
    brochureUrl: `${landFolder("al-saja-el-namoosajiya")}/al-saja-el-namoosajiya.pdf`,
    developer: "Al Rasikhoon Real Estate"
  }
];

// Helpers
export function getLandBySlug(slug) {
  return landsData.find((x) => x.slug === slug);
}

export function getAllLandsSlugs() {
  return landsData.map((x) => ({ slug: x.slug }));
}