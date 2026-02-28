// src/data/properties/apartments/beyond/kanyon/kanyon.js
// ✅ Structure matches skyParksData (same order + same section keys)
// ✅ Numbers below are taken from your pasted Reelly screen (areas, price ranges, payment plan, floors formula, service charge, handover, status)
// ⚠️ Lat/Lng not provided in your data → kept null (same pattern you already used)

const BASE = "https://luxury-real-estate-media.b-cdn.net/beyond/kanyon";

export const kanyonData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "Kanyon by Beyond | 1–3 Bedroom Apartments in Dubai Maritime City | Beyond Developments",
      description:
        "Kanyon by Beyond is a nature-inspired residential tower in Dubai Maritime City’s Forest District, featuring 1, 2 and 3 bedroom apartments with canyon-style balconies, wellness amenities, and a 50/50 payment plan with handover in Q2 2029.",
      keywords:
        "Kanyon by Beyond, Beyond Developments, Dubai Maritime City, Forest District, 1 bedroom, 2 bedroom, 3 bedroom, off plan Dubai, luxury apartments Dubai",
      canonical: "/properties/apartments/beyond/kanyon",
    },

    project: {
      name: "Kanyon by Beyond",
      developer: "Beyond Developments",
      location: "Dubai Maritime City, Dubai, UAE",
      status: "Off-plan",

      startingPrice: "AED 2,477,000",
      completionDate: "Q2 2029",
      paymentPlan: "50% / 50%",

      type: "Apartments",
      units: "1, 2 & 3 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: `${BASE}/Facade_Skyline%20View.jpg`,
      squareImageUrl: `${BASE}/Kanyon_Logo_Black.png`,
      companyName: "Beyond Developments",
      rating: 4.7,
    },

    intro: {
      title: "NATURE-INSPIRED LIVING IN DUBAI MARITIME CITY",
      paragraphs: [
        "Kanyon by Beyond rises as an elegant, nature-inspired residential masterpiece, offering a calm and refined lifestyle shaped by light, greenery, and contemporary design. The project features beautifully crafted 1, 2, and 3 bedroom apartments that blend openness with gentle architectural flow, creating homes filled with clarity and comfort.",
        "Inside the residences, generous layouts, fluid terraces, and canyon-style balconies invite natural light deep into the interiors, giving each home a sense of freedom and quiet sophistication. Surrounded by vertical gardens and expansive views, every apartment becomes a sanctuary where modern elegance meets a calm, effortless lifestyle.",
        "The amenities at Kanyon by Beyond are crafted to enrich every moment, offering beautifully designed spaces for wellness, leisure, work, and community—pool experiences surrounded by greenery, kids’ areas, multifunctional pavilions, coworking with sea views, and an exclusive rooftop haven. A modern gym and a private spa with saunas and steam rooms complete the experience.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: `${BASE}/kanyon-brochure.pdf`,
          type: "main",
          icon: "🏙️",
          color: "#111111",
          size: null,
          category: "Project Brochure",
          fileName: "Kanyon by Beyond - Brochure.pdf",
          description:
            "Official project brochure with concept, amenities, and lifestyle positioning.",
        },
        {
          title: "Floor Plans",
          url: `${BASE}/kanyon-floor-plans.pdf`,
          type: "floorplans",
          icon: "📐",
          color: "#111111",
          size: null,
          category: "Floor Plans",
          fileName: "Kanyon by Beyond - Floor Plans.pdf",
          description:
            "Unit layouts for 1BR, 2BR and 3BR apartments (plans & sizing).",
        },
        {
          title: "Payment Plan",
          url: `${BASE}/kanyon-payment-plan.pdf`,
          type: "payment",
          icon: "💳",
          color: "#111111",
          size: null,
          category: "Payment Plan",
          fileName: "Kanyon by Beyond - Payment Plan.pdf",
          description:
            "Payment plan summary (10% on booking, 40% during construction, 50%upon handover).",
        },
      ],
      imgUrl: `${BASE}/Hero%20Shot_Street%20View.jpg`,
      imgAlt: "Kanyon by Beyond exterior in Dubai Maritime City",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌿",
          value: "Forest District",
          label: "Nature-First Setting",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌊",
          value: "Dubai Maritime City",
          label: "Waterfront Community",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "Q2 2029",
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "A Visual Symphony",

      slides: [
        // Hero Shots
        `${BASE}/Hero%20Shot_Forest%20View_Day.jpg`,
        `${BASE}/Hero%20Shot_Forest%20View_Day%202.jpg`,
        `${BASE}/Hero%20Shot_Forest%20View_Day%203.jpg`,
        `${BASE}/Hero%20Shot_Skyline%20view_Day.jpg`,
        `${BASE}/Hero%20Shot_Street%20View.jpg`,
        `${BASE}/Hero%20Shot_Street_Day.jpg`,
        `${BASE}/Hero%20Shot_Forest%20View_Night.jpg`,
        `${BASE}/Hero%20Shot_Sea_Night.jpg`,

        // Facade/Exterior
        `${BASE}/Facade_Day.jpg`,
        `${BASE}/Facade_Night.jpg`,
        `${BASE}/Facade_Closeup.jpg`,
        `${BASE}/Facade_Skyline%20View.jpg`,
        `${BASE}/Facade_Sea%20View_Sunset.jpg`,
        `${BASE}/Hera%20Shot_Upper%20Facade_Night.jpg`,
        `${BASE}/Hera%20Shot_Upper%20Facade_Sunset.jpg`,

        // Lobby/Reception
        `${BASE}/Reception%20Lobby.jpg`,
        `${BASE}/Reception%20Lobby%202.jpg`,
        `${BASE}/Reception.jpg`,
        `${BASE}/Lift%20Lobby.jpg`,
        `${BASE}/Arrival_Day.jpg`,

        // Amenities
        `${BASE}/Pool_Podium_Day.jpg`,
        `${BASE}/Pool_Podium_Day%202.jpg`,
        `${BASE}/Pool_Podium_Day%203.jpg`,
        `${BASE}/Pool%20Deck_Sea%20View.jpg`,
        `${BASE}/Sky%20Pool.jpg`,
        `${BASE}/Sky%20Pool%202.jpg`,
        `${BASE}/Kids%20Pool.jpg`,

        // Fitness/Wellness
        `${BASE}/Fitness%20Studio.jpg`,
        `${BASE}/Indoor%20Fitness%20Studio.jpg`,
        `${BASE}/Indoor%20Fitness%20Studio%202.jpg`,

        // Common Areas
        `${BASE}/Kids%20Club.jpg`,
        `${BASE}/Co-working%20Area.jpg`,
        `${BASE}/Multi-purpose%20Room.jpg`,
        `${BASE}/Multi-purpose%20Pavilion.jpg`,
        `${BASE}/Outdoor%20Kids%20Play%20Area.jpg`,
        `${BASE}/Outdoor%20Seating%20Area.jpg`,
        `${BASE}/Outdoor%20Seating.jpg`,
        `${BASE}/Podium%20Deck_Day.jpg`,
        `${BASE}/Podium%20Deck_Day%202.jpg`,
        `${BASE}/Cascading%20Terraces.jpg`,
        `${BASE}/Canopy_Forest_Day.jpg`,

        // Interiors
        `${BASE}/Living%20%26%20Dining.jpg`,
        `${BASE}/Living%20%26%20Dining%202.jpg`,
        `${BASE}/Living%20%26%20Dining%203.jpg`,
        `${BASE}/Living%20Room.jpg`,
        `${BASE}/Living%20Room%202.jpg`,
        `${BASE}/Kitchen%20Dining.jpg`,

        // Bedrooms
        `${BASE}/Master%20Bedroom.jpg`,
        `${BASE}/Master%20Bedroom%202.jpg`,
        `${BASE}/Master%20Bedroom%203.jpg`,
        `${BASE}/Bedroom.jpg`,

        // Bathrooms
        `${BASE}/Master%20Bathroom.jpg`,
        `${BASE}/Bathroom.jpg`,

        // Other
        `${BASE}/Walk-in%20Closet.jpg`,
        `${BASE}/Changing%20Room.jpg`,
        `${BASE}/Balcony_Podium%20View.jpg`,
        `${BASE}/Balcony_Skyline%20View.jpg`,
      ],
      projectTag: "Kanyon by Beyond",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1-bedroom",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            "Total Area": "929.36 SQ.FT.",
            "Starting Price": "From AED 2,477,000",
            Handover: "Q2 2029",
            "Payment Plan": "50% / 50%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/beyond/kanyon/kanyon%201br%20floor%20plan.png",
          ],
          features: [
            "Canyon-style balcony",
            "Floor-to-ceiling windows",
            "Open-plan living and dining",
            "Nature-inspired material palette",
          ],
        },

        {
          id: "2-bedroom",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            "Total Area": "1,616.63 SQ.FT.",
            "Starting Price": "From AED 3,803,000",
            Handover: "Q2 2029",
            "Payment Plan": "50% / 50%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/beyond/kanyon/kanyon%202br%20floor%20plan.png",
          ],
          features: [
            "Spacious family layout",
            "Wide terraces with greenery views",
            "Fluid indoor-outdoor living",
          ],
        },

        {
          id: "3-bedroom",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            "Total Area": "2,282.06 SQ.FT.",
            "Starting Price": "From AED 7,480,000",
            Handover: "Q2 2029",
            "Payment Plan": "50% / 50%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/beyond/kanyon/Knayon%203br%20floor%20plan.png",
          ],
          features: [
            "Large premium family residence",
            "Expansive terraces & open views",
            "Elevated privacy & comfort",
          ],
        },
      ],
      brochureHref: `${BASE}/kanyon-brochure.pdf`,
    },

    amenities: {
      title: "World-Class Amenities For Elevated Living",
      amenities: [
        { label: "Sky Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Pool Podium", icon: "🌿", color: "#d7b46a" },
        { label: "Kids Pool", icon: "👶", color: "#d7b46a" },
        { label: "Kids Club", icon: "🧸", color: "#d7b46a" },
        { label: "Outdoor Kids Play Area", icon: "🛝", color: "#d7b46a" },
        { label: "Co-working Area", icon: "💻", color: "#d7b46a" },
        { label: "Fitness Studio", icon: "🏋️", color: "#d7b46a" },
        { label: "Private Spa", icon: "🧖", color: "#d7b46a" },
        { label: "Sauna & Steam", icon: "💨", color: "#d7b46a" },
        { label: "Yoga / Pilates", icon: "🧘", color: "#d7b46a" },
        { label: "Outdoor Seating Area", icon: "🪑", color: "#d7b46a" },
        { label: "Multi-purpose Pavilion", icon: "🏛️", color: "#d7b46a" },
        { label: "Multi-purpose Room", icon: "🧩", color: "#d7b46a" },
        { label: "Canopy Forest", icon: "🌳", color: "#d7b46a" },
        { label: "Cascading Terraces", icon: "🏞️", color: "#d7b46a" },
        { label: "Rooftop Haven", icon: "🏙️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Kanyon by Beyond",
      address: "Dubai Maritime City, Dubai, United Arab Emirates",
      lat: 25.2633517,
      lng: 55.2701679,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "Waterfront setting in Dubai Maritime City" },
        { icon: "🚢", text: "Near shipyards and marina facilities" },
        {
          icon: "🚗",
          text: "Fast access to Mina Rashid & central Dubai by car",
        },
      ],
    },

    nearbyAttractions: {
      title: "At The Heart Of Everything",
      attractions: [
        { name: "Mina Rashid", distance: "-", time: "≈ 5 min", icon: "📍" },
        {
          name: "Jumeirah Beach Coast",
          distance: "-",
          time: "≈ 10 min",
          icon: "📍",
        },
        { name: "The Gold Souq", distance: "-", time: "≈ 15 min", icon: "📍" },
        {
          name: "Downtown / Burj Khalifa",
          distance: "-",
          time: "≈ 15 min",
          icon: "📍",
        },
        {
          name: "Dubai International Airport (DXB)",
          distance: "-",
          time: "≈ 20 min",
          icon: "📍",
        },
        { name: "DIFC", distance: "-", time: "≈ 20 min", icon: "📍" },
      ],
    },

    cta: {
      title: "Ready To Experience Kanyon Living?",
      description:
        "Contact our sales team to schedule a private viewing, discuss available units, or receive the full brochure, floor plans, and payment plan details.",
      buttons: [
        { text: "Schedule Viewing", type: "primary", url: "/contact" },
        {
          text: "Download Brochure",
          type: "secondary",
          url: `${BASE}/kanyon-brochure.pdf`,
        },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title:
        "Kanyon من Beyond | شقق 1–3 غرف نوم في دبي مارينا تايم سيتي | Beyond Developments",
      description:
        "Kanyon من Beyond برج سكني بطابع طبيعي في دبي مارينا تايم سيتي ضمن Forest District، يضم شقق 1 و2 و3 غرف نوم مع شرفات بأسلوب الكانيون، ومرافق عافية، وخطة دفع 50/50، والتسليم في الربع الثاني 2029.",
      keywords:
        "Kanyon من Beyond، Beyond Developments، دبي مارينا تايم سيتي، Forest District، شقق 1 غرفة، شقق 2 غرفة، شقق 3 غرف، عقاراتقيد الإنشاء دبي، شقق فاخرة دبي",
      canonical: "/properties/apartments/beyond/kanyon",
    },

    project: {
      name: "Kanyon من Beyond",
      developer: "Beyond Developments",
      location: "Dubai Maritime City، دبي، الإمارات",
      status: "متاح للبيع",

      startingPrice: "ابتداءً من 2,477,000 درهم",
      completionDate: "الربع الثاني 2029",
      paymentPlan: "50% / 50%",

      type: "شقق سكنية",
      units: "شقق 1، 2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: `${BASE}/Facade_Skyline%20View.jpg`,
      squareImageUrl: `${BASE}/Kanyon_Logo_Black.png`,
      companyName: "Beyond Developments",
      rating: 4.7,
    },

    intro: {
      title: "حياة بطابع طبيعي في دبي مارينا تايم سيتي",
      paragraphs: [
        "يأتي مشروع Kanyon من Beyond كتحفة سكنية مستوحاة من الطبيعة، يقدم أسلوب حياة هادئ وراقٍ تصنعه الإضاءة والحدائق العمودية والتصميم المعاصر. يضم المشروع شققاً من 1 و2 و3 غرف نوم تجمع بين الانفتاح وخطوط معمارية ناعمة تمنح المنزل صفاءً وراحة.",
        "في الداخل، توفر المخططات الرحبة والتراسات المرنة وشرفات «الكانيون» دخول الضوء الطبيعي بعمق إلى المساحات، لتمنح كل وحدة إحساساً بالحرية ورُقيّاً هادئاً. ومع الإطلالات الواسعة واللمسات الخضراء، تصبح كل شقة ملاذاً يجمع بين الأناقة العصرية والراحة اليومية.",
        "صُممت المرافق لتثري كل لحظة: مسابح محاطة بالخضرة، مناطق للأطفال، أجنحة متعددة الاستخدام، مساحة عمل مشتركة بإطلالات بحرية، وملاذ روفتوب للاسترخاء. كما يكتمل المشهد بجيم عصري وسبا خاص يضم ساونا وغرف بخار.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: `${BASE}/kanyon-brochure.pdf`,
          type: "main",
          icon: "🏙️",
          color: "#111111",
          size: null,
          category: "الكتيّب التعريفي",
          fileName: "Kanyon - الكتيّب التعريفي.pdf",
          description:
            "الكتيّب الرسمي للمشروع ويتضمن الفكرة والمرافق وتجربة أسلوب الحياة.",
        },
        {
          title: "المخططات",
          url: `${BASE}/kanyon-floor-plans.pdf`,
          type: "floorplans",
          icon: "📐",
          color: "#111111",
          size: null,
          category: "مخططات الوحدات",
          fileName: "Kanyon - مخططات الوحدات.pdf",
          description: "مخططات شقق 1 و2 و3 غرف نوم (المخطط + المساحات).",
        },
        {
          title: "خطة الدفع",
          url: `${BASE}/kanyon-payment-plan.pdf`,
          type: "payment",
          icon: "💳",
          color: "#111111",
          size: null,
          category: "خطة الدفع",
          fileName: "Kanyon - خطة الدفع.pdf",
          description:
            "ملخص خطة الدفع (10% عند الحجز، 40% أثناء الإنشاء، 50% عند التسليم).",
        },
      ],
      imgUrl: `${BASE}/Hero%20Shot_Street%20View.jpg`,
      imgAlt: "واجهة Kanyon من Beyond في دبي مارينا تايم سيتي",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌿",
          value: "Forest District",
          label: "بيئة طبيعية",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌊",
          value: "Dubai Maritime City",
          label: "واجهة مائية",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🗓️",
          value: "الربع 2 2029",
          label: "التسليم",
        },
      ],
    },

    gallery: {
      title: "مشاهد من Kanyon",
      slides: [
        // Hero Shots
        `${BASE}/Hero%20Shot_Forest%20View_Day.jpg`,
        `${BASE}/Hero%20Shot_Forest%20View_Day%202.jpg`,
        `${BASE}/Hero%20Shot_Forest%20View_Day%203.jpg`,
        `${BASE}/Hero%20Shot_Skyline%20view_Day.jpg`,
        `${BASE}/Hero%20Shot_Street%20View.jpg`,
        `${BASE}/Hero%20Shot_Street_Day.jpg`,
        `${BASE}/Hero%20Shot_Forest%20View_Night.jpg`,
        `${BASE}/Hero%20Shot_Sea_Night.jpg`,

        // Facade/Exterior
        `${BASE}/Facade_Day.jpg`,
        `${BASE}/Facade_Night.jpg`,
        `${BASE}/Facade_Closeup.jpg`,
        `${BASE}/Facade_Skyline%20View.jpg`,
        `${BASE}/Facade_Sea%20View_Sunset.jpg`,
        `${BASE}/Hera%20Shot_Upper%20Facade_Night.jpg`,
        `${BASE}/Hera%20Shot_Upper%20Facade_Sunset.jpg`,

        // Lobby/Reception
        `${BASE}/Reception%20Lobby.jpg`,
        `${BASE}/Reception%20Lobby%202.jpg`,
        `${BASE}/Reception.jpg`,
        `${BASE}/Lift%20Lobby.jpg`,
        `${BASE}/Arrival_Day.jpg`,

        // Amenities
        `${BASE}/Pool_Podium_Day.jpg`,
        `${BASE}/Pool_Podium_Day%202.jpg`,
        `${BASE}/Pool_Podium_Day%203.jpg`,
        `${BASE}/Pool%20Deck_Sea%20View.jpg`,
        `${BASE}/Sky%20Pool.jpg`,
        `${BASE}/Sky%20Pool%202.jpg`,
        `${BASE}/Kids%20Pool.jpg`,

        // Fitness/Wellness
        `${BASE}/Fitness%20Studio.jpg`,
        `${BASE}/Indoor%20Fitness%20Studio.jpg`,
        `${BASE}/Indoor%20Fitness%20Studio%202.jpg`,

        // Common Areas
        `${BASE}/Kids%20Club.jpg`,
        `${BASE}/Co-working%20Area.jpg`,
        `${BASE}/Multi-purpose%20Room.jpg`,
        `${BASE}/Multi-purpose%20Pavilion.jpg`,
        `${BASE}/Outdoor%20Kids%20Play%20Area.jpg`,
        `${BASE}/Outdoor%20Seating%20Area.jpg`,
        `${BASE}/Outdoor%20Seating.jpg`,
        `${BASE}/Podium%20Deck_Day.jpg`,
        `${BASE}/Podium%20Deck_Day%202.jpg`,
        `${BASE}/Cascading%20Terraces.jpg`,
        `${BASE}/Canopy_Forest_Day.jpg`,

        // Interiors
        `${BASE}/Living%20%26%20Dining.jpg`,
        `${BASE}/Living%20%26%20Dining%202.jpg`,
        `${BASE}/Living%20%26%20Dining%203.jpg`,
        `${BASE}/Living%20Room.jpg`,
        `${BASE}/Living%20Room%202.jpg`,
        `${BASE}/Kitchen%20Dining.jpg`,

        // Bedrooms
        `${BASE}/Master%20Bedroom.jpg`,
        `${BASE}/Master%20Bedroom%202.jpg`,
        `${BASE}/Master%20Bedroom%203.jpg`,
        `${BASE}/Bedroom.jpg`,

        // Bathrooms
        `${BASE}/Master%20Bathroom.jpg`,
        `${BASE}/Bathroom.jpg`,

        // Other
        `${BASE}/Walk-in%20Closet.jpg`,
        `${BASE}/Changing%20Room.jpg`,
        `${BASE}/Balcony_Podium%20View.jpg`,
        `${BASE}/Balcony_Skyline%20View.jpg`,
      ],
      projectTag: "Kanyon من Beyond",
    },

    floorPlans: {
      type: "شقق",
      plans: [
        {
          id: "1-bedroom",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "المساحة الإجمالية": "929.36 قدم²",
            "السعر الابتدائي": "ابتداءً من 2,477,000 درهم",
            "موعد التسليم": "متوقع الربع الثاني 2029",
            "خطة الدفع": "50% / 50%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/beyond/kanyon/kanyon%201br%20floor%20plan.png",
          ],
          features: [
            "شرفة بتصميم الكانيون",
            "نوافذ ممتدة من الأرض إلى السقف",
            "تصميم مفتوح للمعيشة والطعام",
            "لمسات مستوحاة من الطبيعة",
          ],
        },

        {
          id: "2-bedroom",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "المساحة الإجمالية": "1,616.63 قدم²",
            "السعر الابتدائي": "ابتداءً من 3,803,000 درهم",
            "موعد التسليم": "متوقع الربع الثاني 2029",
            "خطة الدفع": "50% / 50%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/beyond/kanyon/kanyon%202br%20floor%20plan.png",
          ],
          features: [
            "مساحات واسعة للعائلات",
            "تراسات بإطلالات مفتوحة",
            "انسيابية بين الداخل والخارج",
          ],
        },

        {
          id: "3-bedroom",
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "المساحة الإجمالية": "2,282.06 قدم²",
            "السعر الابتدائي": "ابتداءً من 7,480,000 درهم",
            "موعد التسليم": "متوقع الربع الثاني 2029",
            "خطة الدفع": "50% / 50%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/beyond/kanyon/Knayon%203br%20floor%20plan.png",
          ],
          features: [
            "وحدات عائلية فاخرة",
            "تراسات واسعة وإطلالات مفتوحة",
            "خصوصية وراحة أعلى",
          ],
        },
      ],
      brochureHref: `${BASE}/kanyon-brochure.pdf`,
    },

    amenities: {
      title: "مرافق عالمية المستوى لحياة استثنائية",
      amenities: [
        { label: "مسبح سكاي", icon: "🏊", color: "#d7b46a" },
        { label: "بوديوم المسبح", icon: "🌿", color: "#d7b46a" },
        { label: "مسبح للأطفال", icon: "👶", color: "#d7b46a" },
        { label: "نادي الأطفال", icon: "🧸", color: "#d7b46a" },
        { label: "منطقة لعب خارجية للأطفال", icon: "🛝", color: "#d7b46a" },
        { label: "مساحة عمل مشتركة", icon: "💻", color: "#d7b46a" },
        { label: "استوديو لياقة", icon: "🏋️", color: "#d7b46a" },
        { label: "سبا خاص", icon: "🧖", color: "#d7b46a" },
        { label: "ساونا وبخار", icon: "💨", color: "#d7b46a" },
        { label: "يوغا / بيلاتس", icon: "🧘", color: "#d7b46a" },
        { label: "جلسات خارجية", icon: "🪑", color: "#d7b46a" },
        { label: "جناح متعدد الاستخدام", icon: "🏛️", color: "#d7b46a" },
        { label: "غرفة متعددة الأغراض", icon: "🧩", color: "#d7b46a" },
        { label: "غابة مظللة", icon: "🌳", color: "#d7b46a" },
        { label: "تراسات متدرجة", icon: "🏞️", color: "#d7b46a" },
        { label: "روفتوب هافن", icon: "🏙️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Kanyon by Beyond",
      address: "مدينة دبي البحرية، دبي، الإمارات العربية المتحدة",
      lat: 25.2633517,
      lng: 55.2701679,
      zoom: 16,
      proximityFeatures: [
        { icon: "🌊", text: "موقع واجهة بحرية داخل مدينة دبي البحرية" },
        { icon: "🚢", text: "بالقرب من أحواض السفن والمرافق البحرية" },
        { icon: "🚗", text: "وصول سريع إلى ميناء راشد ووسط دبي بالسيارة" },
      ],
    },
    nearbyAttractions: {
      title: "في قلب كل شيء",
      attractions: [
        { name: "مينا راشد", distance: "-", time: "≈ 5 دقائق", icon: "📍" },
        {
          name: "ساحل شاطئ جميرا",
          distance: "-",
          time: "≈ 10 دقائق",
          icon: "📍",
        },
        { name: "سوق الذهب", distance: "-", time: "≈ 15 دقيقة", icon: "📍" },
        {
          name: "داون تاون / برج خليفة",
          distance: "-",
          time: "≈ 15 دقيقة",
          icon: "📍",
        },
        {
          name: "مطار دبي الدولي (DXB)",
          distance: "-",
          time: "≈ 20 دقيقة",
          icon: "📍",
        },
        { name: "DIFC", distance: "-", time: "≈ 20 دقيقة", icon: "📍" },
      ],
    },

    cta: {
      title: "مستعد لتجربة أسلوب الحياة في Kanyon؟",
      description:
        "تواصل مع فريق المبيعات لحجز زيارة خاصة، أو لمناقشة الوحدات المتاحة، أو للحصول على الكتيّب الكامل والمخططات وخطة الدفع.",
      buttons: [
        { text: "حجز موعد زيارة", type: "primary", url: "/contact" },
        {
          text: "تحميل الكتيّب",
          type: "secondary",
          url: `${BASE}/kanyon-brochure.pdf`,
        },
      ],
    },
  },
};
