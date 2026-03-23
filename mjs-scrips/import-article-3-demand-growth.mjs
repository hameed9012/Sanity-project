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
  _id: "article-dubai-real-estate-demand-2024",
  _type: "article",
  title:
    "Dubai Real Estate Demand 2024: Record-Breaking 214% Growth in 5 Years",
  titleAr:
    "الطلب على العقارات في دبي 2024: نمو قياسي بنسبة 214% خلال 5 سنوات",
  slug: {
    _type: "slug",
    current: "dubai-real-estate-demand-2024",
  },
  description:
    "In-depth analysis of Dubai's unprecedented property market surge. Discover the data, drivers, and future projections behind the world's fastest-growing luxury real estate market.",
  descriptionAr:
    "تحليل معمّق للطفرة غير المسبوقة في سوق العقارات في دبي. اكتشف البيانات والعوامل والتوقعات المستقبلية وراء أسرع سوق للعقارات الفاخرة نموًا في العالم.",
  category: "Market Analysis",
  categoryAr: "تحليل السوق",
  publishedAt: "2024-01-15T00:00:00.000Z",
  readTime: "8 min read",
  readTimeAr: "8 دقائق قراءة",
  featured: true,

  mainImage: "PASTE_MAIN_IMAGE_URL_HERE",
  mainImageCdn: { url: "" },

  hero: {
    title:
      "Dubai Real Estate Demand 2024: Record-Breaking 214% Growth in 5 Years",
    titleAr:
      "الطلب على العقارات في دبي 2024: نمو قياسي بنسبة 214% خلال 5 سنوات",
    subtitle:
      "In-depth analysis of Dubai's unprecedented property market surge. Discover the data, drivers, and future projections behind the world's fastest-growing luxury real estate market.",
    subtitleAr:
      "تحليل معمّق للطفرة غير المسبوقة في سوق العقارات في دبي. اكتشف البيانات والعوامل والتوقعات المستقبلية وراء أسرع سوق للعقارات الفاخرة نموًا في العالم.",
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
    toc("Market Overview & Key Statistics", "نظرة عامة على السوق والإحصائيات الرئيسية", "01"),
    toc("5-Year Growth Analysis", "تحليل النمو خلال 5 سنوات", "02"),
    toc("Primary Demand Drivers", "محركات الطلب الرئيسية", "03"),
    toc("Transaction Data & Trends", "بيانات المعاملات والاتجاهات", "04"),
    toc("Price Appreciation Analysis", "تحليل ارتفاع الأسعار", "05"),
    toc("2024-2025 Projections", "توقعات 2024-2025", "06"),
    toc("Investment Opportunities", "الفرص الاستثمارية", "07"),
  ],
  tableOfContentsAr: [
    "نظرة عامة على السوق والإحصائيات الرئيسية",
    "تحليل النمو خلال 5 سنوات",
    "محركات الطلب الرئيسية",
    "بيانات المعاملات والاتجاهات",
    "تحليل ارتفاع الأسعار",
    "توقعات 2024-2025",
    "الفرص الاستثمارية",
  ],

  sections: [
    {
      _type: "articleSection",
      id: "market-overview",
      title: "Market Overview: Unprecedented Growth Trajectory",
      titleAr: "نظرة عامة على السوق: مسار نمو غير مسبوق",
      body: block(
        "Dubai's real estate market is experiencing its strongest growth cycle in history, with transaction volumes and values reaching record-breaking levels. The market has demonstrated remarkable resilience and sustained momentum since 2020."
      ),
      bodyAr: block(
        "يشهد سوق العقارات في دبي أقوى دورة نمو في تاريخه، حيث وصلت أحجام وقيم المعاملات إلى مستويات قياسية. وقد أظهر السوق مرونة استثنائية وزخمًا مستدامًا منذ عام 2020."
      ),
      stats: [
        {
          _type: "object",
          number: "214%",
          label: "5-Year Growth (2020-2025)",
          labelAr: "النمو خلال 5 سنوات (2020-2025)",
          description: "",
          descriptionAr: "",
        },
        {
          _type: "object",
          number: "AED 283B",
          label: "Total Transaction Value 2024",
          labelAr: "إجمالي قيمة المعاملات 2024",
          description: "",
          descriptionAr: "",
        },
        {
          _type: "object",
          number: "128,432",
          label: "Properties Sold 2024",
          labelAr: "العقارات المباعة في 2024",
          description: "",
          descriptionAr: "",
        },
        {
          _type: "object",
          number: "87%",
          label: "Off-Plan Market Share",
          labelAr: "حصة السوق للعقارات على المخطط",
          description: "",
          descriptionAr: "",
        },
      ],
      expertQuote: {
        text: "The current market dynamics represent a fundamental shift, not a temporary boom. Dubai has established itself as a safe haven for global capital with sustainable growth drivers.",
        textAr:
          "تمثل ديناميكيات السوق الحالية تحولًا جوهريًا وليست مجرد طفرة مؤقتة. فقد رسخت دبي مكانتها كملاذ آمن لرأس المال العالمي مدعومًا بمحركات نمو مستدامة.",
        author: "Mohamad Kodmane, Market Analyst",
      },
    },

    {
      _type: "articleSection",
      id: "five-year-growth-analysis",
      title: "5-Year Growth Analysis: From Recovery to Record Highs",
      titleAr: "تحليل النمو خلال 5 سنوات: من التعافي إلى الأرقام القياسية",
      body: block(
        "The journey from 2020's market correction to 2024's record performance demonstrates Dubai's exceptional market resilience and investor confidence recovery."
      ),
      bodyAr: block(
        "تُظهر الرحلة من تصحيح السوق في 2020 إلى الأداء القياسي في 2024 مرونة سوق دبي الاستثنائية وتعافي ثقة المستثمرين."
      ),
      growthTimeline: [
        {
          _type: "object",
          year: "2020",
          title: "Market Correction & Recovery",
          titleAr: "تصحيح السوق والتعافي",
          description: "28,943 transactions - Pandemic impact with 25% decline",
          descriptionAr: "28,943 معاملة - تأثير الجائحة مع تراجع بنسبة 25%",
          growth: "-25%",
        },
        {
          _type: "object",
          year: "2021",
          title: "Strong Rebound",
          titleAr: "ارتداد قوي",
          description: "52,347 transactions - 81% growth as market recovers",
          descriptionAr: "52,347 معاملة - نمو 81% مع تعافي السوق",
          growth: "+81%",
        },
        {
          _type: "object",
          year: "2022",
          title: "Accelerated Growth",
          titleAr: "نمو متسارع",
          description:
            "86,219 transactions - 65% growth, establishing new baseline",
          descriptionAr:
            "86,219 معاملة - نمو 65% مع تأسيس مستوى أساسي جديد",
          growth: "+65%",
        },
        {
          _type: "object",
          year: "2023",
          title: "Record Breaking Year",
          titleAr: "عام قياسي",
          description:
            "112,845 transactions - 31% growth, surpassing all previous records",
          descriptionAr:
            "112,845 معاملة - نمو 31% متجاوزًا جميع الأرقام السابقة",
          growth: "+31%",
        },
        {
          _type: "object",
          year: "2024",
          title: "Sustained Momentum",
          titleAr: "زخم مستدام",
          description: "128,432 transactions - 14% growth, market matures",
          descriptionAr: "128,432 معاملة - نمو 14% مع نضج السوق",
          growth: "+14%",
        },
      ],
    },

    {
      _type: "articleSection",
      id: "primary-demand-drivers",
      title: "Primary Demand Drivers: Understanding the Surge",
      titleAr: "محركات الطلب الرئيسية: فهم أسباب الطفرة",
      body: block(
        "Multiple structural factors are driving Dubai's unprecedented real estate demand, creating a sustainable growth environment rather than a speculative bubble."
      ),
      bodyAr: block(
        "هناك عوامل هيكلية متعددة تدفع الطلب غير المسبوق على العقارات في دبي، ما يخلق بيئة نمو مستدامة بدلًا من فقاعة مضاربية."
      ),
      keyPoints: [
        "Zero Tax Environment: Unique competitive advantage globally",
        "Political Stability: Safe haven status during global uncertainty",
        "Quality of Life: World-class amenities and security",
        "Strategic Location: Gateway to emerging markets",
        "Investor Protection: RERA-regulated market with escrow accounts",
      ],
      keyPointsAr: [
        "بيئة ضريبية صفرية: ميزة تنافسية فريدة عالميًا",
        "استقرار سياسي: ملاذ آمن خلال عدم اليقين العالمي",
        "جودة الحياة: مرافق عالمية وأمن مرتفع",
        "موقع استراتيجي: بوابة إلى الأسواق الناشئة",
        "حماية المستثمر: سوق منظم من ريرا مع حسابات ضمان",
      ],
    },

    {
      _type: "articleSection",
      id: "transaction-data-trends",
      title: "Transaction Data & Market Trends Analysis",
      titleAr: "تحليل بيانات المعاملات واتجاهات السوق",
      body: block(
        "Detailed analysis of transaction patterns reveals structural market shifts and emerging opportunities for strategic investors."
      ),
      bodyAr: block(
        "يكشف التحليل التفصيلي لأنماط المعاملات عن تحولات هيكلية في السوق وفرص ناشئة للمستثمرين الاستراتيجيين."
      ),
      analysis: [
        {
          _type: "object",
          title: "Off-Plan Dominance",
          titleAr: "هيمنة العقارات على المخطط",
          description:
            "Off-plan properties continue to drive market growth with attractive payment plans",
          descriptionAr:
            "تواصل العقارات على المخطط دفع نمو السوق بفضل خطط السداد الجذابة",
          data: [
            { _type: "object", label: "Market Share", labelAr: "الحصة السوقية", value: "87%" },
            { _type: "object", label: "Growth Rate", labelAr: "معدل النمو", value: "48% YoY" },
            { _type: "object", label: "Average ROI", labelAr: "متوسط العائد", value: "15-45%" },
          ],
        },
        {
          _type: "object",
          title: "Luxury Segment Performance",
          titleAr: "أداء القطاع الفاخر",
          description:
            "Premium properties outperforming market averages with strong international demand",
          descriptionAr:
            "العقارات الفاخرة تتفوق على متوسطات السوق بدعم من الطلب الدولي القوي",
          data: [
            { _type: "object", label: "Price Appreciation", labelAr: "ارتفاع الأسعار", value: "18.9%" },
            { _type: "object", label: "Transaction Volume", labelAr: "حجم المعاملات", value: "+65%" },
            { _type: "object", label: "Rental Yields", labelAr: "عوائد الإيجار", value: "7.2%" },
          ],
        },
        {
          _type: "object",
          title: "Geographic Hotspots",
          titleAr: "أبرز المناطق",
          description:
            "Prime locations showing strongest appreciation and liquidity",
          descriptionAr:
            "المواقع الرئيسية تُظهر أعلى معدلات الارتفاع والسيولة",
          data: [
            { _type: "object", label: "Downtown Dubai", labelAr: "وسط دبي", value: "+45%" },
            { _type: "object", label: "Palm Jumeirah", labelAr: "نخلة جميرا", value: "+38%" },
            { _type: "object", label: "Dubai Hills", labelAr: "دبي هيلز", value: "+32%" },
          ],
        },
      ],
    },

    {
      _type: "articleSection",
      id: "price-appreciation-analysis",
      title: "Price Appreciation Analysis: Sustainable Growth Patterns",
      titleAr: "تحليل ارتفاع الأسعار: أنماط نمو مستدامة",
      body: block(
        "Contrary to speculative fears, Dubai's price appreciation demonstrates healthy, sustainable patterns supported by fundamental demand drivers."
      ),
      bodyAr: block(
        "على عكس المخاوف المرتبطة بالمضاربة، فإن ارتفاع الأسعار في دبي يظهر أنماطًا صحية ومستدامة مدعومة بمحركات طلب أساسية."
      ),
      appreciationMetrics: [
        {
          _type: "object",
          label: "Overall Market Appreciation",
          labelAr: "ارتفاع السوق الإجمالي",
          value: "15.2%",
          trend: "↑ Sustainable",
        },
        {
          _type: "object",
          label: "Luxury Segment Appreciation",
          labelAr: "ارتفاع القطاع الفاخر",
          value: "18.9%",
          trend: "↑ Strong",
        },
        {
          _type: "object",
          label: "Affordable Segment Appreciation",
          labelAr: "ارتفاع القطاع الميسر",
          value: "12.1%",
          trend: "↑ Moderate",
        },
        {
          _type: "object",
          label: "Rental Yield Stability",
          labelAr: "استقرار عائد الإيجار",
          value: "7.2%",
          trend: "→ Stable",
        },
      ],
      marketHealth: [
        {
          _type: "object",
          label: "Inventory Levels",
          labelAr: "مستويات المخزون",
          value: "2.8 months",
          status: "Healthy",
        },
        {
          _type: "object",
          label: "Absorption Rate",
          labelAr: "معدل الامتصاص",
          value: "94%",
          status: "Strong",
        },
        {
          _type: "object",
          label: "Price-to-Rent Ratio",
          labelAr: "نسبة السعر إلى الإيجار",
          value: "13.8",
          status: "Balanced",
        },
        {
          _type: "object",
          label: "Market Liquidity",
          labelAr: "سيولة السوق",
          value: "High",
          status: "Excellent",
        },
      ],
    },

    {
      _type: "articleSection",
      id: "projections-2024-2025",
      title: "2024-2025 Market Projections & Trends",
      titleAr: "توقعات واتجاهات السوق 2024-2025",
      body: block(
        "Based on current data and economic indicators, Dubai's real estate market is positioned for continued strong performance through 2025."
      ),
      bodyAr: block(
        "استنادًا إلى البيانات الحالية والمؤشرات الاقتصادية، يبدو سوق العقارات في دبي مهيأً لمواصلة الأداء القوي حتى عام 2025."
      ),
      futureProjections: [
        {
          _type: "object",
          title: "2024",
          titleAr: "2024",
          year: "2024",
          items: [
            { _type: "projectionItem", label: "Transaction Volume", value: "135,000-140,000" },
            { _type: "projectionItem", label: "Price Appreciation", value: "12-18%" },
            { _type: "projectionItem", label: "Off-Plan Share", value: "85-90%" },
          ],
        },
        {
          _type: "object",
          title: "2025",
          titleAr: "2025",
          year: "2025",
          items: [
            { _type: "projectionItem", label: "Market Growth", value: "8-12%" },
            { _type: "projectionItem", label: "Luxury Premium", value: "15-20%" },
            { _type: "projectionItem", label: "Rental Stability", value: "6-8% yields" },
          ],
        },
      ],
      risks: [
        {
          _type: "object",
          title: "Global Economic Slowdown",
          titleAr: "تباطؤ الاقتصاد العالمي",
          risk: "",
          riskAr: "",
          mitigation: "Dubai's economic diversification provides buffer",
          mitigationAr: "التنوع الاقتصادي في دبي يوفر هامش حماية",
        },
        {
          _type: "object",
          title: "Interest Rate Increases",
          titleAr: "ارتفاع أسعار الفائدة",
          risk: "",
          riskAr: "",
          mitigation: "Strong cash buyer presence (65% of market)",
          mitigationAr: "وجود قوي للمشترين النقديين (65% من السوق)",
        },
        {
          _type: "object",
          title: "Supply Overhang",
          titleAr: "زيادة المعروض",
          risk: "",
          riskAr: "",
          mitigation: "Controlled supply with strong absorption rates",
          mitigationAr: "معروض مضبوط مع معدلات امتصاص قوية",
        },
      ],
    },

    {
      _type: "articleSection",
      id: "investment-opportunities",
      title: "Strategic Investment Opportunities",
      titleAr: "فرص استثمارية استراتيجية",
      body: block(
        "Current market conditions present exceptional opportunities for strategic investors across multiple property segments."
      ),
      bodyAr: block(
        "تقدم ظروف السوق الحالية فرصًا استثنائية للمستثمرين الاستراتيجيين عبر عدة شرائح عقارية."
      ),
      opportunities: [
        {
          _type: "object",
          title: "Early-Stage Off-Plan",
          titleAr: "مشاريع على المخطط في المراحل المبكرة",
          description:
            "Returns: 20-45% in 12-24 months | Risk: Low (RERA protected) | Entry: 20% down payment | Strategy: Pre-construction acquisition in prime locations",
          descriptionAr:
            "العوائد: 20% إلى 45% خلال 12 إلى 24 شهرًا | المخاطر: منخفضة (محمي من ريرا) | الدخول: دفعة أولى 20% | الاستراتيجية: شراء مبكر في مواقع رئيسية",
        },
        {
          _type: "object",
          title: "Luxury Ready Properties",
          titleAr: "العقارات الفاخرة الجاهزة",
          description:
            "Returns: 8-12% rental yields + appreciation | Risk: Low-Medium | Entry: Various price points | Strategy: Premium locations with high rental demand",
          descriptionAr:
            "العوائد: 8% إلى 12% إيجارًا بالإضافة إلى الارتفاع السعري | المخاطر: منخفضة إلى متوسطة | الدخول: نقاط سعر متنوعة | الاستراتيجية: مواقع مميزة بطلب إيجاري مرتفع",
        },
        {
          _type: "object",
          title: "Emerging Locations",
          titleAr: "المواقع الناشئة",
          description:
            "Returns: 25-35% medium-term | Risk: Medium | Entry: Competitive pricing | Strategy: Infrastructure development plays",
          descriptionAr:
            "العوائد: 25% إلى 35% على المدى المتوسط | المخاطر: متوسطة | الدخول: أسعار تنافسية | الاستراتيجية: الاستفادة من تطور البنية التحتية",
        },
      ],
    },
  ],

  cta: {
    title: "Explore Live Opportunities",
    titleAr: "استكشف الفرص المتاحة الآن",
    description:
      "Get tailored guidance on where demand is strongest and which segments align with your investment goals.",
    descriptionAr:
      "احصل على إرشاد مخصص حول أكثر المناطق طلبًا والشرائح المناسبة لأهدافك الاستثمارية.",
    buttonLabel: "Book Market Consultation",
    buttonLabelAr: "احجز استشارة سوقية",
    buttonUrl: "/contact",
  },

  seoTitle:
    "Dubai Real Estate Demand 2024: Record-Breaking 214% Growth in 5 Years",
  seoDescription:
    "Analyze Dubai's record-breaking property demand, transaction trends, price appreciation, and 2025 projections.",
  seoKeywords:
    "Dubai real estate demand, Dubai market analysis, Dubai property growth, Dubai off-plan market, Dubai luxury real estate",
};

async function run() {
  const result = await client.createOrReplace(article);
  console.log("Imported:", result._id, result.title);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});