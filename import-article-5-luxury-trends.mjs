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
  _id: "article-luxury-property-trends-dubai-2024",
  _type: "article",
  title:
    "Luxury Property Trends Dubai 2024: Smart Homes & Premium Locations",
  titleAr:
    "اتجاهات العقارات الفاخرة في دبي 2024: المنازل الذكية والمواقع المميزة",
  slug: {
    _type: "slug",
    current: "luxury-property-trends-dubai-2024",
  },
  description:
    "Exclusive analysis of emerging luxury trends in Dubai—AI smart homes, sustainability, wellness design, and the locations leading price growth.",
  descriptionAr:
    "تحليل حصري للاتجاهات الناشئة في العقارات الفاخرة في دبي، بما في ذلك المنازل الذكية المدعومة بالذكاء الاصطناعي والاستدامة وتصميم العافية والمواقع التي تقود نمو الأسعار.",
  category: "Luxury Real Estate",
  categoryAr: "العقارات الفاخرة",
  publishedAt: "2024-01-15T00:00:00.000Z",
  readTime: "7 min read",
  readTimeAr: "7 دقائق قراءة",
  featured: true,

  mainImage: "PASTE_MAIN_IMAGE_URL_HERE",
  mainImageCdn: { url: "" },

  hero: {
    title:
      "Luxury Property Trends Dubai 2024: Smart Homes & Premium Locations",
    titleAr:
      "اتجاهات العقارات الفاخرة في دبي 2024: المنازل الذكية والمواقع المميزة",
    subtitle:
      "Exclusive analysis of emerging luxury trends in Dubai—AI smart homes, sustainability, wellness design, and the locations leading price growth.",
    subtitleAr:
      "تحليل حصري للاتجاهات الناشئة في العقارات الفاخرة في دبي، بما في ذلك المنازل الذكية المدعومة بالذكاء الاصطناعي والاستدامة وتصميم العافية والمواقع التي تقود نمو الأسعار.",
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
    toc("Key Luxury Trends 2024", "أهم اتجاهات العقارات الفاخرة 2024", "01"),
    toc("The Smart Home Revolution", "ثورة المنازل الذكية", "02"),
    toc("Sustainable Luxury", "الفخامة المستدامة", "03"),
    toc("Emerging Premium Locations", "المواقع المميزة الناشئة", "04"),
    toc("Premium Amenities", "المرافق الفاخرة", "05"),
    toc("Investment Opportunities", "الفرص الاستثمارية", "06"),
    toc("Future Market Outlook", "النظرة المستقبلية للسوق", "07"),
  ],
  tableOfContentsAr: [
    "أهم اتجاهات العقارات الفاخرة 2024",
    "ثورة المنازل الذكية",
    "الفخامة المستدامة",
    "المواقع المميزة الناشئة",
    "المرافق الفاخرة",
    "الفرص الاستثمارية",
    "النظرة المستقبلية للسوق",
  ],

  sections: [
    {
      _type: "articleSection",
      id: "key-luxury-trends-2024",
      title: "Key Luxury Property Trends Shaping 2024",
      titleAr: "أهم اتجاهات العقارات الفاخرة التي تشكل 2024",
      body: block(
        "Dubai's luxury market is evolving fast. AI-powered living, eco-conscious design, and wellness architecture now command concrete price premiums. Waterfront supply remains scarce, sustaining a 30–50% location premium."
      ),
      bodyAr: block(
        "يتطور سوق العقارات الفاخرة في دبي بسرعة. أصبحت الحياة المدعومة بالذكاء الاصطناعي والتصميم الواعي بيئيًا وعمارة العافية تحقق علاوات سعرية حقيقية. كما أن المعروض على الواجهات المائية لا يزال محدودًا، ما يحافظ على علاوة موقع تتراوح بين 30% و50%."
      ),
      keyPoints: [
        "Smart Home Integration: 15–25% value premium; ~85% adoption in new luxury stock.",
        "Sustainable Luxury: 20–30% higher resale value; prioritized by ~70% of premium buyers.",
        "Wellness Architecture: 18–22% price premium; near 90% penetration in ultra-luxury.",
        "Private Amenities: spa/cinema/game rooms now standard in AED 20M+ assets.",
        "Waterfront Premium: sustained outperformance due to limited, trophy-grade supply.",
      ],
      keyPointsAr: [
        "تكامل المنزل الذكي: علاوة قيمة 15% إلى 25% واعتماد يقارب 85% في المخزون الفاخر الجديد.",
        "الفخامة المستدامة: قيمة إعادة بيع أعلى بنسبة 20% إلى 30% وأولوية لنحو 70% من المشترين المميزين.",
        "عمارة العافية: علاوة سعرية 18% إلى 22% وانتشار يقارب 90% في العقارات الفاخرة جدًا.",
        "المرافق الخاصة: السبا والسينما وغرف الألعاب أصبحت معيارًا في الأصول التي تتجاوز 20 مليون درهم.",
        "علاوة الواجهة المائية: تفوق مستدام بسبب ندرة المعروض الفاخر.",
      ],
    },

    {
      _type: "articleSection",
      id: "smart-home-revolution",
      title: "The Smart Home Revolution in Luxury Properties",
      titleAr: "ثورة المنازل الذكية في العقارات الفاخرة",
      body: block(
        `AI home automation has shifted from "nice-to-have" to baseline expectation, enhancing security, convenience, and operating efficiency.`
      ),
      bodyAr: block(
        "انتقلت الأتمتة المنزلية بالذكاء الاصطناعي من ميزة إضافية إلى توقع أساسي، مما يعزز الأمان والراحة وكفاءة التشغيل."
      ),
      analysis: [
        {
          _type: "object",
          title: "Home Automation",
          titleAr: "الأتمتة المنزلية",
          description:
            "Voice control, predictive climate, scene-based lighting, automated window treatments",
          descriptionAr:
            "التحكم الصوتي، المناخ التنبؤي، الإضاءة القائمة على المشاهد، ومعالجات النوافذ المؤتمتة",
          data: [],
        },
        {
          _type: "object",
          title: "Advanced Security",
          titleAr: "الأمن المتقدم",
          description:
            "Biometric access, AI video analytics, unified security + automation with mobile control",
          descriptionAr:
            "دخول بيومتري، تحليلات فيديو بالذكاء الاصطناعي، وأمن موحد مع الأتمتة عبر الهاتف",
          data: [],
        },
        {
          _type: "object",
          title: "Wellness Tech",
          titleAr: "تقنيات العافية",
          description:
            "Air quality monitoring, whole-house water filtration, acoustic optimization, circadian lighting",
          descriptionAr:
            "مراقبة جودة الهواء، تنقية المياه في كامل المنزل، تحسين الصوتيات، والإضاءة المرتبطة بالإيقاع اليومي",
          data: [],
        },
      ],
      expertQuote: {
        text: "Smart tech is adding 15–25% to values in the luxury segment.",
        textAr: "تضيف التقنيات الذكية ما بين 15% و25% إلى قيم العقارات في القطاع الفاخر.",
        author: "Mohamad Kodmane",
      },
    },

    {
      _type: "articleSection",
      id: "sustainable-luxury",
      title: "Sustainable Luxury: The New Standard",
      titleAr: "الفخامة المستدامة: المعيار الجديد",
      body: block(
        "Eco-performance now sells. Buyers pay premiums for verified savings and healthier interiors."
      ),
      bodyAr: block(
        "أصبح الأداء البيئي عنصرًا بيعيًا بحد ذاته. يدفع المشترون علاوات مقابل التوفير الموثق والبيئات الداخلية الصحية."
      ),
      advantages: [
        {
          _type: "object",
          icon: "⚡",
          title: "Energy",
          titleAr: "الطاقة",
          description:
            "Solar + storage, smart metering, full LED, high-spec insulation",
          descriptionAr:
            "الطاقة الشمسية والتخزين والعدادات الذكية وإضاءة LED كاملة وعزل عالي المواصفات",
        },
        {
          _type: "object",
          icon: "💧",
          title: "Water",
          titleAr: "المياه",
          description:
            "Greywater reuse, smart irrigation, low-flow fixtures, rain harvesting",
          descriptionAr:
            "إعادة استخدام المياه الرمادية، الري الذكي، التجهيزات منخفضة التدفق، وحصاد مياه الأمطار",
        },
        {
          _type: "object",
          icon: "🪵",
          title: "Materials",
          titleAr: "المواد",
          description:
            "Certified timber, low-VOC finishes, recycled + locally-sourced elements",
          descriptionAr:
            "خشب معتمد، تشطيبات منخفضة المركبات العضوية المتطايرة، ومواد معاد تدويرها ومحلية المصدر",
        },
      ],
      marketAnalysis: {
        title: "Financial Impact",
        titleAr: "الأثر المالي",
        metrics: [
          {
            _type: "object",
            title: "Higher Resale",
            titleAr: "إعادة بيع أعلى",
            value: "20–30%",
            description: "Higher resale value",
            descriptionAr: "قيمة إعادة بيع أعلى",
          },
          {
            _type: "object",
            title: "Lower OPEX",
            titleAr: "انخفاض المصاريف التشغيلية",
            value: "40–60%",
            description: "Lower operating expenses",
            descriptionAr: "انخفاض تكاليف التشغيل",
          },
          {
            _type: "object",
            title: "Faster Sale",
            titleAr: "بيع أسرع",
            value: "70%",
            description: "Faster sale time",
            descriptionAr: "تسارع في وقت البيع",
          },
          {
            _type: "object",
            title: "Buyer Preference",
            titleAr: "تفضيل المشترين",
            value: "85%",
            description: "Buyer preference for sustainable assets",
            descriptionAr: "تفضيل المشترين للأصول المستدامة",
          },
        ],
      },
    },

    {
      _type: "articleSection",
      id: "emerging-premium-locations",
      title: "Emerging Premium Locations for 2024",
      titleAr: "المواقع المميزة الناشئة لعام 2024",
      developments: [
        {
          _type: "object",
          name: "Dubai Creek Harbour",
          nameAr: "دبي كريك هاربور",
          developer: "Mixed",
          price: "Future city center positioning",
          roi: "~45% projected appreciation",
          completion: "Waterfront + Downtown access",
        },
        {
          _type: "object",
          name: "Palm Jumeirah",
          nameAr: "نخلة جميرا",
          developer: "Ultra-luxury waterfront",
          price: "Scarcity premium",
          roi: "~38% current year growth",
          completion: "Prime waterfront",
        },
        {
          _type: "object",
          name: "Dubai Hills Estate",
          nameAr: "دبي هيلز استيت",
          developer: "Family luxury",
          price: "Golf / parks",
          roi: "~32% annual appreciation",
          completion: "Established",
        },
        {
          _type: "object",
          name: "Business Bay",
          nameAr: "الخليج التجاري",
          developer: "Mixed-use luxury",
          price: "Downtown adjacency + canal",
          roi: "~28% YoY",
          completion: "Established",
        },
      ],
    },

    {
      _type: "articleSection",
      id: "premium-amenities",
      title: "Premium Amenities Redefining Luxury Living",
      titleAr: "المرافق الفاخرة التي تعيد تعريف السكن الراقي",
      advantages: [
        {
          _type: "object",
          icon: "🧘",
          title: "Wellness & Health",
          titleAr: "العافية والصحة",
          description:
            "Private spas, meditation rooms, pro-grade gyms, salt rooms",
          descriptionAr:
            "منتجعات خاصة، غرف تأمل، صالات رياضية احترافية، غرف ملح",
        },
        {
          _type: "object",
          icon: "🎬",
          title: "Entertainment",
          titleAr: "الترفيه",
          description:
            "4K cinemas with Atmos, wine cellars, game rooms, rooftop theaters",
          descriptionAr:
            "سينما 4K مع Atmos، أقبية نبيذ، غرف ألعاب، مسارح على السطح",
        },
        {
          _type: "object",
          icon: "💼",
          title: "Business & Connectivity",
          titleAr: "الأعمال والاتصال",
          description:
            "Executive offices, multi-gig fiber, meeting rooms, AI home assistants",
          descriptionAr:
            "مكاتب تنفيذية، إنترنت فائق السرعة، غرف اجتماعات، مساعدين منزليين بالذكاء الاصطناعي",
        },
      ],
    },

    {
      _type: "articleSection",
      id: "investment-opportunities",
      title: "Luxury Property Investment Opportunities",
      titleAr: "فرص الاستثمار في العقارات الفاخرة",
      opportunities: [
        {
          _type: "object",
          title: "Early Adoption Plays",
          titleAr: "رهانات الدخول المبكر",
          description:
            "Target smart-home-led projects (ROI 25–40% in 18–24 months).",
          descriptionAr:
            "استهدف المشاريع التي تقودها تقنيات المنزل الذكي (عائد 25% إلى 40% خلال 18 إلى 24 شهرًا).",
        },
        {
          _type: "object",
          title: "Sustainable Premium",
          titleAr: "العلاوة المستدامة",
          description:
            "Eco-focused stock in prime areas (ROI 20–35% in 24–36 months).",
          descriptionAr:
            "أصول موجهة للاستدامة في المناطق الرئيسية (عائد 20% إلى 35% خلال 24 إلى 36 شهرًا).",
        },
        {
          _type: "object",
          title: "Wellness-Centric",
          titleAr: "التركيز على العافية",
          description:
            "Wellness-amenity heavy assets (ROI 30–45% in 12–18 months).",
          descriptionAr:
            "أصول غنية بمرافق العافية (عائد 30% إلى 45% خلال 12 إلى 18 شهرًا).",
        },
      ],
      keyPoints: [
        "Time entries early",
        "Select limited-supply locations",
        "Prioritize features with durable premiums",
      ],
      keyPointsAr: [
        "الدخول المبكر في التوقيت المناسب",
        "اختيار مواقع ذات معروض محدود",
        "إعطاء الأولوية للميزات ذات العلاوات المستدامة",
      ],
    },

    {
      _type: "articleSection",
      id: "future-market-outlook",
      title: "Future Outlook: 2024–2025",
      titleAr: "النظرة المستقبلية: 2024–2025",
      futureProjections: [
        {
          _type: "object",
          title: "Luxury Market Outlook",
          titleAr: "توقعات السوق الفاخر",
          year: "2024-2025",
          items: [
            {
              _type: "projectionItem",
              label: "Luxury price appreciation",
              value: "15–20% p.a.",
            },
            {
              _type: "projectionItem",
              label: "Rental yields",
              value: "~6–8% gross",
            },
            {
              _type: "projectionItem",
              label: "International buyer share",
              value: "~80–85%",
            },
            {
              _type: "projectionItem",
              label: "Supply absorption",
              value: "~90–95%",
            },
          ],
        },
      ],
      keyPoints: [
        "Global wealth migration",
        "Infrastructure build-out",
        "Diversified GDP growth",
        "Political stability",
      ],
      keyPointsAr: [
        "هجرة الثروات العالمية",
        "التوسع في البنية التحتية",
        "نمو الناتج المحلي المتنوع",
        "الاستقرار السياسي",
      ],
    },
  ],

  cta: {
    title: "Explore Luxury Opportunities",
    titleAr: "استكشف الفرص الفاخرة",
    description:
      "Get a curated shortlist of premium properties aligned with the strongest luxury trends in Dubai.",
    descriptionAr:
      "احصل على قائمة مختارة من العقارات المميزة المتوافقة مع أقوى اتجاهات السوق الفاخر في دبي.",
    buttonLabel: "Book Luxury Consultation",
    buttonLabelAr: "احجز استشارة عقارية فاخرة",
    buttonUrl: "/contact",
  },

  seoTitle:
    "Luxury Property Trends Dubai 2024: Smart Homes & Premium Locations",
  seoDescription:
    "Discover the luxury real estate trends shaping Dubai in 2024, including smart homes, sustainability, wellness, and premium locations.",
  seoKeywords:
    "Dubai luxury property, smart homes Dubai, sustainable luxury Dubai, Dubai premium locations, Dubai luxury trends",
};

async function run() {
  const result = await client.createOrReplace(article);
  console.log("Imported:", result._id, result.title);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});