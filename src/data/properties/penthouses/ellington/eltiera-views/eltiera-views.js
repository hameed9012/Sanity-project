// src/data/properties/apartments/ellington/eltiera-views.js
// Reelly-reference aligned (same structure style as binghatti-aquarise.js), but tailored to Eltiera Views 100%.
// ✅ Handover: Q4 2029
// ✅ Sale status: Off-plan
// ✅ Construction status: Under construction
// ✅ Service charge: 21 AED/sqft
// ✅ Payment plan: 70% / 30% (Booking / Construction (9 payments) / Handover)
// ✅ Parking: 1 Parking (1 Bed, 2 Bed) | 2 Parkings (3 Bed)
// ✅ Units & Availability: includes the exact 1BR unit rows you pasted
// ✅ Floor plan images use your CDN folder filenames from the screenshot
// ✅ IMPORTANT: In every specs object → "Payment Plan" is LAST.

const CDN =
  "https://luxury-real-estate-media.b-cdn.net/ellington/eltiera-views";
const cdn = (fileName) => `${CDN}/${encodeURIComponent(fileName)}`;

// Floorplan PNG filenames (from your folder screenshot)
const FP_1BR = "Elteria Views 1br Floor plan.png";
const FP_2BR = "Elteria Views 2br Floor plan.png";
const FP_3BR = "Elteria Views 3br Floor plan.png";
const FP_4BR_PH = "Elteria Views 4br penthouse Floor plan.png";

export const eltieraViewsData = {
  en: {
    seo: {
      title:
        "Ellington Eltiera Views | Waterfront Apartments in Jumeirah Islands, Dubai",
      description:
        "Eltiera Views by Ellington in Jumeirah Islands offers lake-facing 1 to 4-bedroom apartments with a signature multi-level clubhouse and lifestyle-led amenities.",
      keywords:
        "eltiera views, ellington properties, jumeirah islands apartments, waterfront apartments dubai, lake view apartments",
      canonical: "/properties/apartments/ellington/eltiera-views",
    },

    project: {
      name: "Eltiera Views",
      developer: "Ellington",
      location: "Jumeirah Islands, Dubai",
      status: "Off-plan",
      startingPrice: "From 2,121,828 AED",
      completionDate: "Q4 2029",

      // Reelly-style facts panel
      brandedProject: false,
      unitTypes: "Apartments",
      constructionStatus: "Under construction",
      saleStatus: "Off-plan",
      handover: "Q4 2029",
      furnishing: "No",
      serviceCharge: "21 AED/sqft",
      paymentPlanSummary: "70% / 30%",
      parkingPolicy: {
        oneParking: "1 Bed, 2 Bed",
        twoParkings: "3 Bed",
      },
    },

    hero: {
      backgroundUrl: cdn("Eltiera Views - hero shot night.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png",
      companyName: "Ellington",
      rating: null,
      badges: ["Off-plan", "Off-plan", "Jumeirah Islands"],
    },

    // Matches the exact blocks you pasted (Project general facts + location benefits)
    facts: {
      title: "Project general facts",
      paragraphs: [
        "Eltiera Views introduces the next evolution of refined residential architecture within the tranquil landscape of Jumeirah Islands. With Towers 1 and 2 now launching, the project reveals a fluid, contemporary aesthetic that mirrors its natural surroundings — sculpted greens, serene lakes, and distant waterfronts. Soft silhouettes, layered façades, and expansive glass surfaces create a harmonious architectural rhythm, allowing the buildings to blend seamlessly into their environment. Designed as an expression of calm sophistication, Eltiera Views elevates everyday living into an art form.",
        "Inside, the residences are crafted as versatile, light-filled sanctuaries that adapt to every version of modern life — from quiet retreat to vibrant social energy. Open layouts, full-height windows, and elegant natural palettes create an atmosphere of warmth and balance. Thoughtful zoning ensures smooth movement through living, dining, and private areas, while select homes offer panoramic views of the lakes and greenery. Each residence reflects a philosophy of intentional living, where comfort, clarity, and style coexist effortlessly.",
        "Residents of Towers 1 & 2 enjoy an exceptional array of lifestyle amenities distributed across multiple clubhouse levels — from wellness to social connection. The project features multiple swimming pools, bubble therapy pools, sun loungers, padel courts, indoor and outdoor fitness zones, and yoga platforms. Families benefit from kids’ pools, outdoor play areas, and dedicated game rooms, while adults can relax across spa suites, steam and sauna facilities, retreat lounges, cinema rooms, dance studios, and co-working clubs. Ground-level features such as retail, F&B terraces, community lake paths, pet areas, and courtyards complete a holistic community experience.",
        "Every home at Eltiera Views is finished with high-quality materials, refined textures, and natural tonal palettes that echo the surrounding landscape. Kitchens come fully equipped with modern cabinetry, premium fixtures, and functional layouts designed for everyday ease. The residences are delivered unfurnished, offering buyers the freedom to personalize their interiors while benefiting from an elevated, beautifully crafted foundation.",
      ],
      finishingAndMaterials:
        "High-quality materials, refined textures, and natural tonal palettes.",
      kitchenAndAppliances:
        "Fully equipped kitchens with modern cabinetry, premium fixtures, and functional layouts.",
      furnishing: "No.",
      locationDescriptionAndBenefits: [
        "Jumeirah Islands is a prestigious residential community in Dubai, offering a serene, upscale lifestyle surrounded by lush landscapes and man-made lakes. The area boasts a peaceful, family-friendly atmosphere that blends nature with luxury, making it a top choice for those seeking a refined living experience. Tree-lined streets, scenic walking paths, and water views create a resort-like ambiance every day.",
        "Residents of Jumeirah Islands enjoy access to world-class amenities. The community has tennis courts, jogging tracks, children's play areas, and beautifully maintained parks for leisure and recreation. Nearby shopping destinations like Meadows Souk and Dubai Marina Mall provide convenient retail and grocery options. High-end schools, nurseries, and medical facilities are also within easy reach, ensuring a comfortable, well-supported lifestyle.",
        "Transport links from Jumeirah Islands are excellent, with Sheikh Zayed Road and Al Khail Road providing quick connections to key areas of Dubai. Dubai Marina, JLT, and Palm Jumeirah are just minutes away by car, making it easy to commute or enjoy nearby beaches and nightlife. Public transport options, including nearby metro stations and bus routes, enhance accessibility for residents and visitors alike.",
      ],
    },

    intro: {
      title: "A REFLECTION OF EVERY VERSION OF YOU",
      paragraphs: [
        "Following the success of Eltiera Heights, Eltiera Views continues Ellington’s vision of creating homes that balance individuality, connection, and calm—set within Jumeirah Islands and overlooking the lake.",
        "The lifestyle is anchored by a multi-level clubhouse designed as the community’s heart, bringing together spaces for well-being, creativity, and togetherness—shaped by light, flow, and thoughtful detail.",
      ],
      brochures: [
        {
          title: "Brochure",
          url: cdn("Eltiera Views - Brochure.pdf"),
          type: "main",
        },
        {
          title: "Amenities Plan",
          url: cdn("Eltiera Views - Amenities Plan.pdf"),
          type: "amenities",
        },
        {
          title: "Location Map",
          url: cdn("Eltiera Views - Map.pdf"),
          type: "location",
        },
        {
          title: "Concept Video",
          url: cdn("EltieraViews_Concept_HD.mp4"),
          type: "video",
        },
      ],
      imgUrl: cdn("Eltiera Views - view.jpg"),
      imgAlt: "Eltiera Views lake view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Lake-Facing Living",
          label: "Jumeirah Islands",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🏛️",
          value: "Multi-Level Clubhouse",
          label: "Lifestyle Hub",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🗓️",
          value: "Q4 2029",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Eltiera Views Visuals",
      projectTag: "Eltiera Views",
      slides: [
        // (Your listing shows 21 images – these are the ones already in your Bunny folder list)
        cdn("Eltiera Views - hero shot night.jpg"),
        cdn("Eltiera Views - hero shot night 2.jpg"),
        cdn("Eltiera Views - hero shot night 2_.jpg"),
        cdn("Eltiera Views - exterior.jpg"),
        cdn("Eltiera Views - exterior 4.jpg"),
        cdn("Eltiera Views - view.jpg"),
        cdn("Eltiera Views - podium.jpg"),
        cdn("Eltiera Views - entrance.jpg"),
        cdn("Eltiera Views - outdoor.jpg"),
        cdn("Eltiera Views - F & B outdoor.jpg"),
        cdn("Eltiera Views - adult pool.jpg"),
        cdn("Eltiera Views - family pool.jpg"),
        cdn("Eltiera Views - pool deck.jpg"),
        cdn("Eltiera Views - spa.jpg"),
        cdn("Eltiera Views - fitness studio.jpeg"),
        cdn("Eltiera Views - co-working space.jpg"),
        cdn("Eltiera Views - cinema room.jpg"),
        cdn("Eltiera Views - kids club.jpg"),
        cdn("Eltiera Views - clubhouse.jpg"),
        cdn("Eltiera Views - clubhouse lounge.jpg"),
        cdn("Eltiera Views - clubhouse bar.jpg"),
      ],
    },

    // Same “Aquarise” style: floorPlans -> plans[] with a specs object
    // PLUS: we include Units & Availability table under each type where you have rows (1BR)
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          specs: {
            "Total Area": "796.42 sq.ft",
            "Starting Price": "AED 2,121,828",
            Handover: "Q4 2029",
            "Payment Plan": "50% / 50%",
          },
          images: [cdn(FP_1BR)],
        },
        {
          id: "2br",
          title: "2 Bedrooms",
          specs: {
            "Total Area": "1,221.49 sq.ft",
            "Starting Price": "AED 3,081,828",
            Handover: "Q4 2029",
            "Payment Plan": "50% / 50%",
          },
          images: [cdn(FP_2BR)],
        },
        {
          id: "3br",
          title: "3 Bedrooms",
          specs: {
            "Total Area": "1,671.95 sq.ft",
            "Starting Price": "AED 4,403,828",
            Handover: "Q4 2029",
            "Payment Plan": "50% / 50%",
          },
          images: [cdn(FP_3BR)],
        },
        {
          id: "4br-penthouse",
          title: "4 Bedroom Penthouse",
          specs: {
            "Total Area": "2,200.00 sq.ft",
            "Starting Price": "AED 6,500,000",
            Handover: "Q4 2029",
            "Payment Plan": "50% / 50%",
          },
          images: [cdn(FP_4BR_PH)],
        },
      ],
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Pool Deck", icon: "🏊", color: "#d7b46a" },
        { label: "Family Pool", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "Sun Loungers Area", icon: "🪑", color: "#d7b46a" },
        { label: "Clubhouse Lounge", icon: "🏛️", color: "#d7b46a" },
        { label: "Clubhouse Bar", icon: "🍸", color: "#d7b46a" },
        { label: "Games Room", icon: "🎮", color: "#d7b46a" },
        { label: "Padel Courts", icon: "🎾", color: "#d7b46a" },
        { label: "Kids Play Area", icon: "🧸", color: "#d7b46a" },
        { label: "Clubhouse", icon: "🏛️", color: "#d7b46a" },
        { label: "Co-working Space", icon: "💼", color: "#d7b46a" },
        { label: "Podcast Room", icon: "🎙️", color: "#d7b46a" },
        { label: "Fitness Studio", icon: "💪", color: "#d7b46a" },
        { label: "Spa", icon: "✨", color: "#d7b46a" },
        { label: "Cinema Room", icon: "🎬", color: "#d7b46a" },
        { label: "Dance Studio", icon: "💃", color: "#d7b46a" },
      ],
    },

    paymentPlan: {
      title: "Payment plan",
      headline: "70% / 30%",
      milestones: [
        { label: "On booking", when: "Booking", percent: 20 },
        {
          label: "During construction (9 payments)",
          when: "Construction",
          percent: 50,
        },
        { label: "Upon handover", when: "Handover", percent: 30 },
      ],
      note: "Project information is provided by the developer and may change. If you notice an error, contact support to update the data.",
    },

    location: {
      title: "Location",
      projectName: "Eltiera Views",
      address: "AE, Dubai, Emirates Hills (Jumeirah Islands)",
      lat: 25.056667,
      lng: 55.157222,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏙️", text: "Minutes from JLT & Dubai Marina" },
        {
          icon: "🛣️",
          text: "Quick access to Sheikh Zayed Road & Al Khail Road",
        },
        { icon: "🌊", text: "Lakeside community setting" },
      ],
    },

    nearbyAttractions: {
      title: "Nearby points of interest",
      attractions: [
        {
          name: "Jumeirah Islands Pavilion / JLT",
          distance: null,
          time: "1 min",
          icon: "🛍️",
        },
        { name: "Uptown Dubai", distance: null, time: "2 min", icon: "🏙️" },
        {
          name: "Montgomerie Golf Club",
          distance: null,
          time: "6 min",
          icon: "⛳",
        },
        {
          name: "Dubai Marina Yacht Club / Emirates Golf Club",
          distance: null,
          time: "8 min",
          icon: "⛵",
        },
        { name: "Ain Dubai", distance: null, time: "9 min", icon: "🎡" },
        {
          name: "Mall of the Emirates",
          distance: null,
          time: "13 min",
          icon: "🛍️",
        },
        { name: "Palm Jumeirah", distance: null, time: "14 min", icon: "🌴" },
        { name: "Burj Al Arab", distance: null, time: "17 min", icon: "🏨" },
        {
          name: "Burj Khalifa / Dubai Mall",
          distance: null,
          time: "21 min",
          icon: "🏙️",
        },
        {
          name: "Al Maktoum International Airport (DWC)",
          distance: null,
          time: "27 min",
          icon: "✈️",
        },
        {
          name: "Dubai International Airport (DXB)",
          distance: null,
          time: "30 min",
          icon: "✈️",
        },
      ],
    },
  },

  ar: {
    seo: {
      title: "إلتيرا فيوز من إلينغتون | شقق مطلة على البحيرة في جزر جميرا، دبي",
      description:
        "إلتيرا فيوز من إلينغتون في جزر جميرا يقدم شققاً من 1 إلى 4 غرف نوم بإطلالات على البحيرة مع كلوب هاوس متعدد المستويات ومرافق متكاملة.",
      keywords:
        "إلتيرا فيوز, إلينغتون, شقق جزر جميرا, شقق مطلة على البحيرة دبي, عقارات دبي",
      canonical: "/properties/apartments/ellington/eltiera-views",
    },

    project: {
      name: "Eltiera Views",
      developer: "إلينغتون",
      location: "جزر جميرا، دبي",
      status: "بدء المبيعات",
      startingPrice: "ابتداءً من 2,121,828 درهم",
      completionDate: "الربع الرابع 2029",

      brandedProject: false,
      unitTypes: "شقق",
      constructionStatus: "قيد الإنشاء",
      saleStatus: "بدء المبيعات",
      handover: "الربع الرابع 2029",
      furnishing: "لا",
      serviceCharge: "21 درهم/قدم²",
      paymentPlanSummary: "70% / 30%",
      parkingPolicy: {
        oneParking: "غرفة، غرفتان",
        twoParkings: "3 غرف",
      },
    },

    hero: {
      backgroundUrl: cdn("Eltiera Views - hero shot night.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png",
      companyName: "إلينغتون",
      rating: null,
      badges: ["قيد الإنشاء", "بدء المبيعات", "جزر جميرا"],
    },

    facts: {
      title: "حقائق عامة عن المشروع",
      paragraphs: [
        "يقدّم «إلتيرا فيوز» الجيل التالي من العمارة السكنية الراقية ضمن أجواء جزر جميرا الهادئة. ومع إطلاق البرجين 1 و2، يكشف المشروع عن لغة تصميم معاصرة انسيابية تعكس البيئة الطبيعية المحيطة — خضرةٌ منحوتة، وبحيرات هادئة، وآفاق مائية بعيدة. تتناغم الواجهات المتدرجة والزجاج الواسع مع المكان لتمنح المباني حضوراً راقياً يندمج بسلاسة مع محيطه.",
        "في الداخل، صُممت المساكن كمساحات مضيئة ومرنة تتكيف مع كل نمط حياة — من الهدوء والخصوصية إلى الطاقة الاجتماعية. مخططات مفتوحة ونوافذ بارتفاع كامل وألوان طبيعية تمنح إحساساً بالتوازن والدفء، مع توزيع ذكي للمناطق يضمن انسيابية الحركة بين المعيشة وتناول الطعام والمساحات الخاصة.",
        "يستمتع سكان البرجين 1 و2 بمجموعة مميّزة من المرافق عبر مستويات متعددة من الكلوب هاوس — من العافية إلى التواصل الاجتماعي. يشمل المشروع مسابح متعددة ومسابح علاج فقاعات وكراسي استرخاء وملاعب بادل ومناطق لياقة داخلية وخارجية ومنصات يوغا. كما تتوفر مرافق للعائلات مثل مسابح للأطفال ومناطق لعب وغرف ألعاب، إضافة إلى سبا وساونا وبخار وصالات استرخاء وسينما واستوديو رقص ومساحات عمل مشتركة.",
        "تأتي كل وحدة بتشطيبات عالية الجودة وملمس راقٍ وألوان طبيعية مستوحاة من البيئة المحيطة. المطابخ مجهزة بالكامل بخزائن عصرية وتجهيزات مميزة وتوزيع عملي للاستخدام اليومي. تُسلَّم الوحدات غير مفروشة لإتاحة حرية التخصيص للمشتري.",
      ],
      finishingAndMaterials: "مواد عالية الجودة وتشطيبات راقية وألوان طبيعية.",
      kitchenAndAppliances:
        "مطابخ مجهزة بالكامل بخزائن عصرية وتجهيزات مميزة وتوزيع عملي.",
      furnishing: "لا.",
      locationDescriptionAndBenefits: [
        "جزر جميرا مجتمع سكني راقٍ في دبي يوفر أسلوب حياة هادئاً وسط مساحات خضراء وبحيرات صناعية. شوارع مظللة ومسارات مشي وإطلالات مائية تمنح أجواء تشبه المنتجعات يومياً.",
        "يوفر المجتمع ملاعب تنس ومسارات جري ومناطق لعب للأطفال وحدائق مُعتنى بها. كما تقع وجهات تسوق قريبة مثل Meadows Souk وDubai Marina Mall، مع توفر مدارس وحضانات ومراكز طبية ضمن نطاق قريب.",
        "ترتبط جزر جميرا بسهولة عبر شارع الشيخ زايد وشارع الخيل، مع قربها من دبي مارينا وJLT ونخلة جميرا. وتزيد خيارات النقل العام القريبة من سهولة الوصول للمنطقة.",
      ],
    },

    floorPlans: {
      type: "شقق",
      plans: [
        {
          id: "1br",
          title: "غرفة نوم واحدة",
          specs: {
            "المساحة الإجمالية": "796.42 قدم مربع",
            "السعر الابتدائي": "2,121,828 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [cdn(FP_1BR)],
        },
        {
          id: "2br",
          title: "غرفتان",
          specs: {
            "المساحة الإجمالية": "1,221.49 قدم مربع",
            "السعر الابتدائي": "3,081,828 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [cdn(FP_2BR)],
        },
        {
          id: "3br",
          title: "3 غرف",
          specs: {
            "المساحة الإجمالية": "1,671.95 قدم مربع",
            "السعر الابتدائي": "4,403,828 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [cdn(FP_3BR)],
        },
        {
          id: "4br-penthouse",
          title: "بنتهاوس 4 غرف",
          specs: {
            "المساحة الإجمالية": "2,200.00 قدم مربع",
            "السعر الابتدائي": "6,500,000 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة السداد": "٥٠٪ / ٥٠٪",
          },
          images: [cdn(FP_4BR_PH)],
        },
      ],
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "تراس المسبح", icon: "🏊", color: "#d7b46a" },
        { label: "مسبح عائلي", icon: "👨‍👩‍👧‍👦", color: "#d7b46a" },
        { label: "منطقة استرخاء", icon: "🪑", color: "#d7b46a" },
        { label: "لاونج الكلوب هاوس", icon: "🏛️", color: "#d7b46a" },
        { label: "بار الكلوب هاوس", icon: "🍸", color: "#d7b46a" },
        { label: "غرفة ألعاب", icon: "🎮", color: "#d7b46a" },
        { label: "ملاعب بادل", icon: "🎾", color: "#d7b46a" },
        { label: "منطقة لعب أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "كلوب هاوس", icon: "🏛️", color: "#d7b46a" },
        { label: "مساحة عمل مشتركة", icon: "💼", color: "#d7b46a" },
        { label: "غرفة بودكاست", icon: "🎙️", color: "#d7b46a" },
        { label: "استوديو لياقة", icon: "💪", color: "#d7b46a" },
        { label: "سبا", icon: "✨", color: "#d7b46a" },
        { label: "سينما", icon: "🎬", color: "#d7b46a" },
        { label: "استوديو رقص", icon: "💃", color: "#d7b46a" },
      ],
    },

    paymentPlan: {
      title: "خطة الدفع",
      headline: "70% / 30%",
      milestones: [
        { label: "عند الحجز", when: "الحجز", percent: 20 },
        { label: "أثناء الإنشاء (9 دفعات)", when: "الإنشاء", percent: 50 },
        { label: "عند التسليم", when: "التسليم", percent: 30 },
      ],
      note: "معلومات المشروع مقدمة من المطوّر وقد تتغير. إذا لاحظت خطأ، تواصل مع الدعم لتحديث البيانات.",
    },

    location: {
      title: "الموقع",
      projectName: "Eltiera Views",
      address: "الإمارات، دبي، إميريتس هيلز (جزر جميرا)",
      lat: 25.056667,
      lng: 55.157222,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏙️", text: "دقائق من JLT ودبي مارينا" },
        { icon: "🛣️", text: "وصول سريع لشارع الشيخ زايد وشارع الخيل" },
        { icon: "🌊", text: "موقع هادئ على البحيرات" },
      ],
    },

    nearbyAttractions: {
      title: "أماكن قريبة",
      attractions: [
        {
          name: "Jumeirah Islands Pavilion / JLT",
          distance: null,
          time: "دقيقة",
          icon: "🛍️",
        },
        { name: "Uptown Dubai", distance: null, time: "دقيقتان", icon: "🏙️" },
        {
          name: "Montgomerie Golf Club",
          distance: null,
          time: "6 دقائق",
          icon: "⛳",
        },
        {
          name: "Dubai Marina / Emirates Golf Club",
          distance: null,
          time: "8 دقائق",
          icon: "⛵",
        },
        { name: "Ain Dubai", distance: null, time: "9 دقائق", icon: "🎡" },
        {
          name: "Mall of the Emirates",
          distance: null,
          time: "13 دقيقة",
          icon: "🛍️",
        },
        { name: "Palm Jumeirah", distance: null, time: "14 دقيقة", icon: "🌴" },
        { name: "Burj Al Arab", distance: null, time: "17 دقيقة", icon: "🏨" },
        {
          name: "Burj Khalifa / Dubai Mall",
          distance: null,
          time: "21 دقيقة",
          icon: "🏙️",
        },
        {
          name: "مطار آل مكتوم (DWC)",
          distance: null,
          time: "27 دقيقة",
          icon: "✈️",
        },
        {
          name: "مطار دبي الدولي (DXB)",
          distance: null,
          time: "30 دقيقة",
          icon: "✈️",
        },
      ],
    },
  },
};

export default eltieraViewsData;
