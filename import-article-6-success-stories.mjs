import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "20d53wo5",
  dataset: "production",
  apiVersion: "2025-03-20",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const block = (text) => [
  {
    _type: "block",
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", marks: [], text }],
  },
];

const toc = (title, titleAr, label) => ({
  _type: "tocEntry",
  title,
  titleAr,
  label,
});

const article = {
  _id: "article-dubai-real-estate-success-stories",
  _type: "article",
  title: "Dubai Real Estate Success Stories: Verified 30–50% ROI Case Studies",
  titleAr: "قصص نجاح العقارات في دبي: دراسات حالة موثقة بعائد 30% إلى 50%",
  slug: {
    _type: "slug",
    current: "dubai-real-estate-success-stories",
  },
  description:
    "Real investors, real numbers. Strategy, timing, and location selection that consistently produced outsized results.",
  descriptionAr:
    "مستثمرون حقيقيون وأرقام حقيقية. استراتيجيات وتوقيت واختيار مواقع حققت نتائج استثنائية بشكل متكرر.",
  category: "Case Studies",
  categoryAr: "دراسات حالة",
  publishedAt: "2024-01-15T00:00:00.000Z",
  readTime: "7 min read",
  readTimeAr: "7 دقائق قراءة",
  featured: true,

  mainImage: "PASTE_MAIN_IMAGE_URL_HERE",
  mainImageCdn: { url: "" },

  hero: {
    title: "Dubai Real Estate Success Stories: Verified 30–50% ROI Case Studies",
    titleAr: "قصص نجاح العقارات في دبي: دراسات حالة موثقة بعائد 30% إلى 50%",
    subtitle:
      "Real investors, real numbers. Strategy, timing, and location selection that consistently produced outsized results.",
    subtitleAr:
      "مستثمرون حقيقيون وأرقام حقيقية. استراتيجيات وتوقيت واختيار مواقع حققت نتائج استثنائية بشكل متكرر.",
    image: "PASTE_HERO_IMAGE_URL_HERE",
    imageCdn: { url: "" },
  },

  author: {
    name: "Mohamad Kodmane",
    nameAr: "محمد كدماني",
    role: "Dubai Real Estate Expert",
    roleAr: "خبير العقارات في دبي",
    initials: "MK",
    avatar: "",
  },

  tableOfContents: [
    toc("Proven Investment Philosophy", "فلسفة الاستثمار المثبتة", "01"),
    toc("Detailed Case Studies", "دراسات الحالة التفصيلية", "02"),
    toc("Winning Strategies", "الاستراتيجيات الرابحة", "03"),
    toc("Risk Management", "إدارة المخاطر", "04"),
    toc("Replicating Success", "تكرار النجاح", "05"),
    toc("Your Next Step", "خطوتك التالية", "06"),
  ],
  tableOfContentsAr: [
    "فلسفة الاستثمار المثبتة",
    "دراسات الحالة التفصيلية",
    "الاستراتيجيات الرابحة",
    "إدارة المخاطر",
    "تكرار النجاح",
    "خطوتك التالية",
  ],

  sections: [
    {
      _type: "articleSection",
      id: "proven-investment-philosophy",
      title: "The Proven Investment Philosophy Behind the Results",
      titleAr: "فلسفة الاستثمار المثبتة وراء هذه النتائج",
      keyPoints: [
        "Data-Driven Decisions: market comps, velocity, and developer screens",
        "Prime Location Focus: established & emerging premium corridors",
        "Risk-Mitigated Structures: multiple exits, escrow, below-market entries",
        "Strategic Timing: early-phase allocations, pre-launch access",
      ],
      keyPointsAr: [
        "قرارات مدفوعة بالبيانات: مقارنات السوق والسرعة وفلاتر المطورين",
        "التركيز على المواقع الرئيسية: الممرات المميزة الراسخة والناشئة",
        "هياكل تقلل المخاطر: مخارج متعددة وضمانات ودخول أقل من السوق",
        "توقيت استراتيجي: تخصيصات المراحل المبكرة والوصول قبل الإطلاق",
      ],
    },

    {
      _type: "articleSection",
      id: "detailed-case-studies",
      title: "Selected Case Studies (Verified & DLD-Registered)",
      titleAr: "دراسات حالة مختارة (موثقة ومسجلة لدى دائرة الأراضي)",
      caseStudies: [
        {
          _type: "object",
          title: "Burj Crown – Downtown",
          titleAr: "برج كراون – وسط دبي",
          investment: "AED 2.8M",
          downPayment: "",
          salePrice: "",
          profit: "AED 1.26M",
          roi: "45%",
          timeframe: "~18 months",
        },
        {
          _type: "object",
          title: "Oceana Villas – Palm",
          titleAr: "أوشيانا فلل – نخلة جميرا",
          investment: "AED 4.2M",
          downPayment: "",
          salePrice: "",
          profit: "AED 1.6M",
          roi: "38%",
          timeframe: "9 months",
        },
        {
          _type: "object",
          title: "Creek Waterside – DCH",
          titleAr: "كريك ووترسايد – دبي كريك هاربور",
          investment: "AED 1.9M",
          downPayment: "",
          salePrice: "",
          profit: "AED 0.95M",
          roi: "50%",
          timeframe: "~4–6 months",
        },
        {
          _type: "object",
          title: "Bay Square PH – Business Bay",
          titleAr: "باي سكوير بنتهاوس – الخليج التجاري",
          investment: "AED 3.5M",
          downPayment: "",
          salePrice: "",
          profit: "AED 1.47M",
          roi: "42%",
          timeframe: "8 months",
        },
        {
          _type: "object",
          title: "Golf Place – Dubai Hills",
          titleAr: "غولف بليس – دبي هيلز",
          investment: "AED 5.8M",
          downPayment: "",
          salePrice: "",
          profit: "AED 2.03M",
          roi: "35%",
          timeframe: "12 months",
        },
        {
          _type: "object",
          title: "Park View – JVC",
          titleAr: "بارك فيو – جميرا فيليج سيركل",
          investment: "AED 1.2M",
          downPayment: "",
          salePrice: "",
          profit: "AED 0.36M",
          roi: "30%",
          timeframe: "10 months",
        },
      ],
      marketAnalysis: {
        title: "Aggregate Metrics",
        titleAr: "المؤشرات الإجمالية",
        metrics: [
          {
            _type: "object",
            title: "Total Profits",
            titleAr: "إجمالي الأرباح",
            value: "~AED 7.67M",
            description: "",
            descriptionAr: "",
          },
          {
            _type: "object",
            title: "Average ROI",
            titleAr: "متوسط العائد على الاستثمار",
            value: "~40%",
            description: "",
            descriptionAr: "",
          },
          {
            _type: "object",
            title: "Success Rate",
            titleAr: "نسبة النجاح",
            value: "100%",
            description: "",
            descriptionAr: "",
          },
          {
            _type: "object",
            title: "Capital Deployed",
            titleAr: "رأس المال المستخدم",
            value: "~AED 19.4M",
            description: "",
            descriptionAr: "",
          },
        ],
      },
    },

    {
      _type: "articleSection",
      id: "winning-strategies",
      title: "Winning Strategies",
      titleAr: "الاستراتيجيات الرابحة",
      opportunities: [
        {
          _type: "object",
          title: "Pre-Construction Acquisition",
          titleAr: "الاستحواذ قبل البناء",
          description: "Avg ROI 35–50%, 6–12 months, low risk.",
          descriptionAr:
            "متوسط عائد 35% إلى 50% خلال 6 إلى 12 شهرًا وبمخاطر منخفضة.",
        },
        {
          _type: "object",
          title: "Premium Location Focus",
          titleAr: "التركيز على المواقع المميزة",
          description: "Avg ROI 25–40%, 8–18 months, very low risk.",
          descriptionAr:
            "متوسط عائد 25% إلى 40% خلال 8 إلى 18 شهرًا وبمخاطر منخفضة جدًا.",
        },
        {
          _type: "object",
          title: "Quick Turnaround Plays",
          titleAr: "صفقات الدوران السريع",
          description: "Avg ROI 20–35%, 4–8 months, medium risk.",
          descriptionAr:
            "متوسط عائد 20% إلى 35% خلال 4 إلى 8 أشهر وبمخاطر متوسطة.",
        },
        {
          _type: "object",
          title: "Emerging Location Strategy",
          titleAr: "استراتيجية المواقع الناشئة",
          description: "Avg ROI 40–60%, 12–24 months, medium-high risk.",
          descriptionAr:
            "متوسط عائد 40% إلى 60% خلال 12 إلى 24 شهرًا وبمخاطر متوسطة إلى مرتفعة.",
        },
      ],
    },

    {
      _type: "articleSection",
      id: "risk-management",
      title: "Risk Management: The Foundation of Consistency",
      titleAr: "إدارة المخاطر: أساس الاستمرارية",
      keyPoints: [
        "RERA escrow accounts; developer track-record filters",
        "20–30% below-market entries; multiple exit paths",
        "Timing, supply-demand, and macro indicator monitoring",
        "Full DLD registration compliance and legal diligence",
      ],
      keyPointsAr: [
        "حسابات ضمان ريرا وفلاتر سجل المطورين",
        "دخول أقل من السوق بنسبة 20% إلى 30% ومسارات خروج متعددة",
        "مراقبة التوقيت والعرض والطلب والمؤشرات الكلية",
        "الامتثال الكامل لتسجيل دائرة الأراضي والعناية القانونية",
      ],
    },

    {
      _type: "articleSection",
      id: "replicating-success",
      title: "Replicating Success",
      titleAr: "تكرار النجاح",
      roadmap: [
        {
          _type: "object",
          step: "1",
          title: "Align strategy to risk/return profile",
          titleAr: "مواءمة الاستراتيجية مع ملف المخاطر والعائد",
          description: "",
          descriptionAr: "",
        },
        {
          _type: "object",
          step: "2",
          title: "Identify opportunities via proprietary market screens",
          titleAr: "تحديد الفرص عبر أدوات فحص السوق الخاصة",
          description: "",
          descriptionAr: "",
        },
        {
          _type: "object",
          step: "3",
          title: "Execute structured acquisitions with expert guidance",
          titleAr: "تنفيذ الاستحواذات المنظمة بإرشاد خبراء",
          description: "",
          descriptionAr: "",
        },
        {
          _type: "object",
          step: "4",
          title: "Track performance and adjust to market signals",
          titleAr: "متابعة الأداء والتكيف مع إشارات السوق",
          description: "",
          descriptionAr: "",
        },
      ],
    },

    {
      _type: "articleSection",
      id: "your-next-step",
      title: "Your Next Step",
      titleAr: "خطوتك التالية",
      body: block(
        "Use the same system: focused locations, early entries, and feature sets that command durable premiums. Book a consultation to match you with a live pipeline of opportunities."
      ),
      bodyAr: block(
        "استخدم النظام نفسه: مواقع مركزة، ودخول مبكر، وميزات تحقق علاوات مستدامة. احجز استشارة لربطك بفرص استثمارية حية ومناسبة."
      ),
    },
  ],

  cta: {
    title: "Book a Strategy Session",
    titleAr: "احجز جلسة استراتيجية",
    description:
      "Get matched with live opportunities using the same principles behind these verified success stories.",
    descriptionAr:
      "احصل على فرص حية باستخدام المبادئ نفسها التي تقف وراء قصص النجاح الموثقة هذه.",
    buttonLabel: "Get Expert Guidance",
    buttonLabelAr: "احصل على إرشاد متخصص",
    buttonUrl: "/contact",
  },

  seoTitle: "Dubai Real Estate Success Stories: Verified 30–50% ROI Case Studies",
  seoDescription:
    "See verified Dubai real estate case studies with 30–50% ROI and the strategy frameworks behind them.",
  seoKeywords:
    "Dubai real estate case studies, Dubai ROI, Dubai investment success stories, Dubai off-plan profits, Dubai property gains",
};

async function run() {
  const result = await client.createOrReplace(article);
  console.log("Imported:", result._id, result.title);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});