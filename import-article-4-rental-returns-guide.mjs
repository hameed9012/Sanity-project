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
  _id: "article-dubai-rental-returns-guide-2024",
  _type: "article",
  title: "Dubai Rental Returns Guide 2024: Achieve 8-12% Rental Yields",
  titleAr: "دليل عوائد الإيجار في دبي 2024: حقق عوائد من 8% إلى 12%",
  slug: {
    _type: "slug",
    current: "dubai-rental-returns-guide-2024",
  },
  description:
    "Comprehensive guide to building a profitable rental property portfolio in Dubai. Learn proven strategies, location analysis, and management techniques for consistent passive income.",
  descriptionAr:
    "دليل شامل لبناء محفظة عقارية إيجارية مربحة في دبي. تعلّم الاستراتيجيات المجربة وتحليل المناطق وتقنيات الإدارة لتحقيق دخل سلبي ثابت.",
  category: "Rental Investment",
  categoryAr: "الاستثمار الإيجاري",
  publishedAt: "2024-01-15T00:00:00.000Z",
  readTime: "7 min read",
  readTimeAr: "7 دقائق قراءة",
  featured: true,

  mainImage: "PASTE_MAIN_IMAGE_URL_HERE",
  mainImageCdn: { url: "" },

  hero: {
    title: "Dubai Rental Returns Guide 2024: Achieve 8-12% Rental Yields",
    titleAr: "دليل عوائد الإيجار في دبي 2024: حقق عوائد من 8% إلى 12%",
    subtitle:
      "Comprehensive guide to building a profitable rental property portfolio in Dubai. Learn proven strategies, location analysis, and management techniques for consistent passive income.",
    subtitleAr:
      "دليل شامل لبناء محفظة عقارية إيجارية مربحة في دبي. تعلّم الاستراتيجيات المجربة وتحليل المناطق وتقنيات الإدارة لتحقيق دخل سلبي ثابت.",
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
    toc("Rental Market Overview", "نظرة عامة على سوق الإيجار", "01"),
    toc("Location Yield Analysis", "تحليل العوائد حسب المنطقة", "02"),
    toc("Investment Strategies", "استراتيجيات الاستثمار", "03"),
    toc("Property Management", "إدارة العقار", "04"),
    toc("Real Case Studies", "دراسات حالة حقيقية", "05"),
    toc("Maximizing Returns", "تعظيم العوائد", "06"),
    toc("Getting Started", "البدء", "07"),
  ],
  tableOfContentsAr: [
    "نظرة عامة على سوق الإيجار",
    "تحليل العوائد حسب المنطقة",
    "استراتيجيات الاستثمار",
    "إدارة العقار",
    "دراسات حالة حقيقية",
    "تعظيم العوائد",
    "البدء",
  ],

  sections: [
    {
      _type: "articleSection",
      id: "rental-market-overview",
      title: "Dubai Rental Market Overview 2024",
      titleAr: "نظرة عامة على سوق الإيجار في دبي 2024",
      body: block(
        "Dubai's rental market is experiencing unprecedented growth with rental yields outperforming global averages. The combination of population growth, economic expansion, and limited quality supply creates ideal conditions for rental investors."
      ),
      bodyAr: block(
        "يشهد سوق الإيجار في دبي نموًا غير مسبوق مع تفوق عوائد الإيجار على المتوسطات العالمية. ويخلق مزيج نمو السكان والتوسع الاقتصادي ومحدودية المعروض عالي الجودة ظروفًا مثالية للمستثمرين في الإيجار."
      ),
      expertQuote: {
        text: "Dubai offers the perfect storm for rental investors: strong demand, limited quality supply, and tax-free income. It's one of the few markets where you can achieve double-digit yields with professional management.",
        textAr:
          "توفر دبي الظروف المثالية لمستثمري الإيجار: طلب قوي، ومعروض محدود عالي الجودة، ودخل معفى من الضرائب. وهي من الأسواق القليلة التي يمكنك فيها تحقيق عوائد مزدوجة الرقم مع إدارة احترافية.",
        author: "Mohamad Kodmane, Rental Investment Expert",
      },
    },

    {
      _type: "articleSection",
      id: "location-yield-analysis",
      title: "Location-Specific Rental Yield Analysis",
      titleAr: "تحليل عوائد الإيجار حسب المنطقة",
      body: block(
        "Rental yields vary significantly across Dubai's neighborhoods. Strategic location selection is crucial for maximizing returns and ensuring consistent occupancy."
      ),
      bodyAr: block(
        "تختلف عوائد الإيجار بشكل كبير بين أحياء دبي. ويعد اختيار الموقع بشكل استراتيجي أمرًا حاسمًا لتعظيم العوائد وضمان إشغال مستمر."
      ),
      rentalYields: [
        {
          _type: "object",
          image: "",
          location: "Downtown Dubai",
          locationAr: "وسط دبي",
          averageYield: "7.2%",
          premiumYield: "9.5%",
          averageRent: "AED 180,000",
          propertyType: "Luxury Apartments",
          propertyTypeAr: "شقق فاخرة",
          demand: "Very High",
        },
        {
          _type: "object",
          image: "",
          location: "Palm Jumeirah",
          locationAr: "نخلة جميرا",
          averageYield: "6.8%",
          premiumYield: "8.9%",
          averageRent: "AED 350,000",
          propertyType: "Villas & Apartments",
          propertyTypeAr: "فلل وشقق",
          demand: "High",
        },
        {
          _type: "object",
          image: "",
          location: "Dubai Marina",
          locationAr: "دبي مارينا",
          averageYield: "7.5%",
          premiumYield: "10.2%",
          averageRent: "AED 120,000",
          propertyType: "Waterfront Apartments",
          propertyTypeAr: "شقق على الواجهة المائية",
          demand: "Very High",
        },
        {
          _type: "object",
          image: "",
          location: "Business Bay",
          locationAr: "الخليج التجاري",
          averageYield: "7.8%",
          premiumYield: "11.5%",
          averageRent: "AED 95,000",
          propertyType: "Commercial & Residential",
          propertyTypeAr: "تجاري وسكني",
          demand: "High",
        },
        {
          _type: "object",
          image: "",
          location: "Jumeirah Village Circle",
          locationAr: "جميرا فيليج سيركل",
          averageYield: "8.2%",
          premiumYield: "12.1%",
          averageRent: "AED 65,000",
          propertyType: "Affordable Apartments",
          propertyTypeAr: "شقق ميسّرة",
          demand: "Medium-High",
        },
      ],
    },
  ],

  cta: {
    title: "Build Your Rental Portfolio",
    titleAr: "ابنِ محفظتك الإيجارية",
    description:
      "Get expert help selecting the right rental locations and properties for strong, stable yield.",
    descriptionAr:
      "احصل على مساعدة متخصصة لاختيار المناطق والعقارات المناسبة لتحقيق عوائد قوية ومستقرة.",
    buttonLabel: "Book Rental Strategy Call",
    buttonLabelAr: "احجز مكالمة استراتيجية الإيجار",
    buttonUrl: "/contact",
  },

  seoTitle: "Dubai Rental Returns Guide 2024: Achieve 8-12% Rental Yields",
  seoDescription:
    "Discover the best rental yield locations in Dubai and how to build a strong income-generating property portfolio.",
  seoKeywords:
    "Dubai rental yields, Dubai rental property, Dubai passive income, Dubai landlord guide, Dubai rental investment",
};

async function run() {
  const result = await client.createOrReplace(article);
  console.log("Imported:", result._id, result.title);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});