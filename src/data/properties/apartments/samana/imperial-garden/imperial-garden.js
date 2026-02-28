// src/data/properties/apartments/samana/imperial-garden/imperial-garden.js
// ✅ STRUCTURE matches skyParksData (same order + same keys)
// ✅ Updated Samana payment plan everywhere: ONLY "20% + 1% x 80 months" (no PDC)
// ⚠️ lat/lng kept as Arjan centroid (as in your note)

const BASE =
  "https://luxury-real-estate-media.b-cdn.net/samana/imperial-heights";

const PAYMENT_PLAN_EN = "20% on booking + 1% x 80 months";
const PAYMENT_PLAN_AR = "20% عند الحجز + 1% × 80 شهر";

export const imperialGardenData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title: "Samana Imperial Garden | Studios & 1–2 Bedrooms in Arjan, Dubai",
      description:
        "Samana Imperial Garden is a residential development in Arjan, Dubai, offering studios, 1 and 2 Bedrooms with private pools, resort-style amenities, and a flexible payment plan with handover in Q3 2028.",
      keywords:
        "Samana Imperial Garden, Samana, Arjan apartments, off plan Dubai, studio, 1 bedroom, 2 bedroom, private pool apartments, payment plan Dubai",
      canonical: "/properties/apartments/samana/imperial-garden",
    },

    project: {
      name: "Samana Imperial Garden",
      developer: "Samana",
      location: "Arjan, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "AED 954,444",
      completionDate: "Q3 2028",
      paymentPlan: PAYMENT_PLAN_EN,

      type: "Apartments",
      units: "Studio, 1 & 2 Bedrooms",
      // extra (doesn't break UI if unused)
      serviceCharge: "15 AED / sq.ft",
      floorsFormula: "2B + G + 6 floors + R",
      addedOn: "01 Jul 2025",
    },

    hero: {
      backgroundUrl: `${BASE}/SunsetElevation.jpg`,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Samana.png",
      companyName: "Samana",
      rating: null,
    },

    intro: {
      title: "A PRIVATE PARADISE IN ARJAN",
      paragraphs: [
        "Samana Imperial Garden is a stunning residential development in the heart of Arjan that redefines modern living with a touch of nature’s elegance. The project offers studio, 1, 2 Bedrooms with private pools, thoughtfully designed with flexible layouts that can easily adapt to your lifestyle.",
        "Life at Samana Imperial Garden is enriched by a wide range of world-class amenities that bring leisure, wellness, and joy to every moment—open-air cinema nights, hammock garden, party spaces, outdoor yoga pavilions, steam & sauna rooms, indoor and outdoor gyms, and tranquil swimming pools for adults and children.",
        "Set within landscaped gardens and surrounded by Dubai’s iconic attractions, Imperial Garden blends natural beauty with urban convenience—making it an ideal choice for both end-users and investors seeking elegance and everyday comfort.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: `${BASE}/Samana%20Imperial%20Garden%20Brochure.pdf`,
          type: "main",
          icon: "🏙️",
          color: "#111111",
          size: null,
          category: "Project Brochure",
          fileName: "Samana Imperial Garden - Brochure.pdf",
          description:
            "Official brochure with concept, lifestyle, amenities, and project overview.",
        },
        {
          title: "Payment Plan",
          url: `${BASE}/Payment%20Plan%20Samana%20Imperial%20Garden%20.pdf`,
          type: "payment",
          icon: "💳",
          color: "#111111",
          size: null,
          category: "Payment Plan",
          fileName: "Samana Imperial Garden - Payment Plan.pdf",
          description:
            "Payment plan overview (20% on booking + 1% monthly instalments).",
        },
        {
          title: "Floor Plans",
          url: `${BASE}/Imperial%20Gardens%20Floor%20Plans.pdf`,
          type: "floorplans",
          icon: "📐",
          color: "#111111",
          size: null,
          category: "Floor Plans",
          fileName: "Samana Imperial Garden - Floor Plans.pdf",
          description: "Unit layouts for studios, 1BR and 2BR apartments.",
        },
      ],
      imgUrl: `${BASE}/podiumnightcloseup.jpg`,
      imgAlt: "Samana Imperial Garden lifestyle view in Arjan",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌿",
          value: "Arjan",
          label: "Prime Community",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🎬",
          value: "Open Theatre",
          label: "Outdoor Cinema",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "20% + 1%",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "A Visual Symphony",
      slides: [
        // Exteriors / Massing
        `${BASE}/SunsetElevation.jpg`,
        `${BASE}/4-roadlevelshot02.jpg`,
        `${BASE}/2-CloseupMesh.jpg`,
        `${BASE}/podiumcloseup.jpg`,
        `${BASE}/semiaerialpodium.jpg`,
        `${BASE}/podiumnightcloseup.jpg`,

        // Lobby
        `${BASE}/LOBBY%203.jpg`,
        `${BASE}/LOBBY%204.jpg`,
        `${BASE}/LOBBY%208.jpg`,

        // Interiors
        `${BASE}/LivingArea-01.jpg`,
        `${BASE}/Living%26Dinning%26Kitchen%20%281%20Bedroom%29%20%204.jpg`,
        `${BASE}/Bedroom%202.jpg`,
        `${BASE}/Bathroom_.jpg`,

        // Amenities
        `${BASE}/bbqarea.jpg`,
        `${BASE}/cinemanight.jpg`,
        `${BASE}/kidsarea.jpg`,
        `${BASE}/outdoorgym.jpg`,
        `${BASE}/outdoorlounge.jpg`,
      ],
      projectTag: "Samana Imperial Garden",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        // ✅ Studio
        {
          id: "studio",
          title: "Studio Apartment",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO APARTMENT",
            "Total Range": "CHECK IN FLOOR PLAN",
            "Starting Price": "AED 954,444",
            Handover: "Q3 2028",
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/samana/imperial-heights/Imperial%20gardens%20studiofloor%20plan.png",
          ],
          features: [
            "Private pool",
            "Efficient studio layout",
            "Resort-style living",
          ],
        },

        // ✅ 1 Bedroom
        {
          id: "1-bedroom",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 Bedroom",
            "Total Range": "CHECK IN FLOOR PLAN",
            "Starting Price": "AED 1,544,444",
            Handover: "Q3 2028",
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/samana/imperial-heights/Imperial%20Gardens%201br%20floor%20plan.png",
          ],
          features: [
            "Private pool",
            "Flexible layouts",
            "High end-user & investor demand",
          ],
        },

        // ✅ 2 Bedroom
        {
          id: "2-bedroom",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            Unit: "2 Bedroom",
            "Total Range": "CHECK IN FLOOR PLAN",
            "Starting Price": "On request",
            Handover: "Q3 2028",
            "Payment Plan": PAYMENT_PLAN_EN,
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/samana/imperial-heights/Imperial%20Gardens%202br%20floor%20plan.png",
          ],
          features: [
            "Private pool",
            "Family-oriented layout",
            "Premium finishing",
          ],
        },
      ],
      brochureHref: `${BASE}/Samana%20Imperial%20Garden%20Brochure.pdf`,
    },

    amenities: {
      title: "World-Class Amenities For Elevated Living",
      amenities: [
        { label: "Pool Deck", icon: "🏊", color: "#d7b46a" },
        { label: "Open Theatre", icon: "🎬", color: "#d7b46a" },
        { label: "Outdoor Yoga Zone", icon: "🧘", color: "#d7b46a" },
        { label: "Steam & Sauna", icon: "♨️", color: "#d7b46a" },
        { label: "Jacuzzi", icon: "🛁", color: "#d7b46a" },
        { label: "Library", icon: "📚", color: "#d7b46a" },
        { label: "Swimming Pool", icon: "🏊‍♂️", color: "#d7b46a" },
        { label: "Outdoor Gym", icon: "💪", color: "#d7b46a" },
        { label: "Outdoor Lounge", icon: "🛋️", color: "#d7b46a" },
        { label: "Kids' Area", icon: "🧸", color: "#d7b46a" },
        { label: "Water Beds", icon: "🌊", color: "#d7b46a" },
        { label: "Kids' Pool", icon: "👶", color: "#d7b46a" },
        { label: "Indoor Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "BBQ Area", icon: "🍖", color: "#d7b46a" },
        { label: "Indoor Leisure Zone", icon: "🎮", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Samana Imperial Garden",
      address: "Arjan, Dubai, United Arab Emirates",
      lat: 25.0703,
      lng: 55.2436,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏫", text: "Nord Anglia School Dubai (≈ 700 m)" },
        { icon: "🌳", text: "Arjan Central Park (≈ 1.2 km)" },
        { icon: "🛍️", text: "My City Centre Al Barsha (≈ 1.7 km)" },
        { icon: "🏖️", text: "Sufouh Beach (≈ 13.2 km)" },
        { icon: "🏙️", text: "Downtown Dubai (≈ 20.8 km)" },
        { icon: "✈️", text: "Al Maktoum International Airport (≈ 35.5 km)" },
      ],
    },

    nearbyAttractions: {
      title: "At The Heart Of Everything",
      attractions: [
        {
          name: "Nord Anglia School Dubai (Gate 7)",
          distance: "700 m",
          time: null,
          icon: "🏫",
        },
        {
          name: "Arjan Central Park",
          distance: "1.2 km",
          time: null,
          icon: "🌳",
        },
        {
          name: "My City Centre Al Barsha",
          distance: "1.7 km",
          time: null,
          icon: "🛍️",
        },
        { name: "Sufouh Beach", distance: "13.2 km", time: null, icon: "🏖️" },
        { name: "Downtown Dubai", distance: "20.8 km", time: null, icon: "🏙️" },
        {
          name: "Al Maktoum International Airport",
          distance: "35.5 km",
          time: null,
          icon: "✈️",
        },
      ],
    },

    cta: {
      title: "Ready To Experience Imperial Garden Living?",
      description:
        "Contact our sales team to schedule a viewing, confirm unit availability, or receive the full brochure and payment plan details.",
      buttons: [
        { text: "Schedule Viewing", type: "primary", url: "/contact" },
        {
          text: "Download Brochure",
          type: "secondary",
          url: `${BASE}/Samana%20Imperial%20Garden%20Brochure.pdf`,
        },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title: "سامانا إمبريال جاردن | شقق فاخرة في أرجان دبي",
      description:
        "سامانا إمبريال جاردن مشروع سكني في أرجان دبي يضم استوديو وشقق 1 و2 غرف نوم مع مسابح خاصة، ومرافق عالمية، وخطة دفع مرنة مع تسليم في الربع الثالث 2028.",
      keywords:
        "سامانا إمبريال جاردن، أرجان، شقق دبي، قيد الإنشاء، استوديو، غرفة نوم، غرفتين نوم، مسبح خاص، خطة دفع",
      canonical: "/properties/apartments/samana/imperial-garden",
    },

    project: {
      name: "سامانا إمبريال جاردن",
      developer: "سامانا",
      location: "أرجان، دبي، الإمارات",
      status: "متاح للبيع",

      startingPrice: "ابتداءً من 954,444 درهم",
      completionDate: "الربع الثالث 2028",
      paymentPlan: PAYMENT_PLAN_AR,

      type: "شقق سكنية",
      units: "استوديو، 1 و2 غرف نوم",
      serviceCharge: "15 درهم / قدم²",
      floorsFormula: "2B + G + 6 طوابق + R",
      addedOn: "01 يوليو 2025",
    },

    hero: {
      backgroundUrl: `${BASE}/SunsetElevation.jpg`,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Samana.png",
      companyName: "سامانا",
      rating: null,
    },

    intro: {
      title: "جنة خاصة في قلب أرجان",
      paragraphs: [
        "يُعد «سامانا إمبريال جاردن» مشروعاً سكنياً مميزاً في قلب أرجان يعيد تعريف الحياة العصرية بلمسة من أناقة الطبيعة. يقدّم المشروع استوديو وشقق 1 و2 غرف نوم مع مسابح خاصة، بتصاميم مرنة يمكن تكييفها بسهولة مع أسلوب حياتك.",
        "تتنوّع المرافق العالمية لتضيف المتعة والعافية لكل لحظة: ليالٍ سينمائية في الهواء الطلق، حديقة هاموك، مساحات للحفلات، يوغا خارجية، ساونا وبخار، جيم داخلي وخارجي، ومسابح هادئة للكبار والأطفال.",
        "وسط حدائق منسّقة وبقرب معالم دبي الشهيرة، يجمع المشروع بين الجمال الطبيعي والراحة الحضرية، ليكون فرصة نادرة للسكن أو الاستثمار.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: `${BASE}/Samana%20Imperial%20Garden%20Brochure.pdf`,
          type: "main",
          icon: "🏙️",
          color: "#111111",
          size: null,
          category: "الكتيّب التعريفي",
          fileName: "Samana Imperial Garden - Brochure.pdf",
          description: "الكتيّب الرسمي للمشروع مع تفاصيل الفكرة والمرافق.",
        },
        {
          title: "خطة الدفع",
          url: `${BASE}/Payment%20Plan%20Samana%20Imperial%20Garden%20.pdf`,
          type: "payment",
          icon: "💳",
          color: "#111111",
          size: null,
          category: "خطة الدفع",
          fileName: "Samana Imperial Garden - Payment Plan.pdf",
          description: "ملخص خطة الدفع (20% عند الحجز + 1% أقساط شهرية).",
        },
        {
          title: "المخططات",
          url: `${BASE}/Imperial%20Gardens%20Floor%20Plans.pdf`,
          type: "floorplans",
          icon: "📐",
          color: "#111111",
          size: null,
          category: "مخططات الوحدات",
          fileName: "Samana Imperial Garden - Floor Plans.pdf",
          description: "مخططات الاستوديو وشقق 1 و2 غرف نوم.",
        },
      ],
      imgUrl: `${BASE}/podiumnightcloseup.jpg`,
      imgAlt: "إطلالة لمشروع سامانا إمبريال جاردن في أرجان",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌿",
          value: "أرجان",
          label: "موقع مميز",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🎬",
          value: "سينما خارجية",
          label: "مسرح مفتوح",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "20% + 1%",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "مشاهد من المشروع",
      slides: [
        `${BASE}/SunsetElevation.jpg`,
        `${BASE}/4-roadlevelshot02.jpg`,
        `${BASE}/2-CloseupMesh.jpg`,
        `${BASE}/podiumcloseup.jpg`,
        `${BASE}/semiaerialpodium.jpg`,
        `${BASE}/podiumnightcloseup.jpg`,
        `${BASE}/LOBBY%203.jpg`,
        `${BASE}/LOBBY%204.jpg`,
        `${BASE}/LOBBY%208.jpg`,
        `${BASE}/LivingArea-01.jpg`,
        `${BASE}/Living%26Dinning%26Kitchen%20%281%20Bedroom%29%20%204.jpg`,
        `${BASE}/Bedroom%202.jpg`,
        `${BASE}/Bathroom_.jpg`,
        `${BASE}/bbqarea.jpg`,
        `${BASE}/cinemanight.jpg`,
        `${BASE}/kidsarea.jpg`,
        `${BASE}/outdoorgym.jpg`,
        `${BASE}/outdoorlounge.jpg`,
      ],
      projectTag: "سامانا إمبريال جاردن",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "استوديو",
            "نطاق المساحة الداخلية": "419.36 – 441 قدم²",
            "مساحة الشرفة": "يرجى الرجوع إلى المخطط",
            "نطاق المساحة الإجمالية": "يرجى الرجوع إلى المخطط",
            "السعر الابتدائي": "954,444 درهم",
            "موعد التسليم": "الربع الثالث 2028",
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/samana/imperial-heights/Imperial%20gardens%20studiofloor%20plan.png",
          ],
          features: ["مسبح خاص", "تصميم عملي", "أسلوب حياة منتجعي"],
        },
        {
          id: "1-bedroom",
          title: "غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "شقة غرفة نوم واحدة",
            "نطاق المساحة الداخلية": "674.04 – 1,256.26 قدم²",
            "مساحة الشرفة": "يرجى الرجوع إلى المخطط",
            "نطاق المساحة الإجمالية": "يرجى الرجوع إلى المخطط",
            "السعر الابتدائي": "1,544,444 درهم",
            "موعد التسليم": "الربع الثالث 2028",
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/samana/imperial-heights/Imperial%20Gardens%201br%20floor%20plan.png",
          ],
          features: ["مسبح خاص", "تصاميم مرنة", "مناسب للسكن أو الاستثمار"],
        },
        {
          id: "2-bedroom",
          title: "غرفتا نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "شقة غرفتين نوم",
            "نطاق المساحة الداخلية": "يرجى الرجوع إلى المخطط",
            "مساحة الشرفة": "يرجى الرجوع إلى المخطط",
            "نطاق المساحة الإجمالية": "يرجى الرجوع إلى المخطط",
            "السعر الابتدائي": "عند الطلب",
            "موعد التسليم": "الربع الثالث 2028",
            "خطة الدفع": PAYMENT_PLAN_AR,
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/samana/imperial-heights/Imperial%20Gardens%202br%20floor%20plan.png",
          ],
          features: ["مسبح خاص", "مساحات عائلية", "تشطيبات فاخرة"],
        },
      ],
      brochureHref: `${BASE}/Samana%20Imperial%20Garden%20Brochure.pdf`,
    },

    amenities: {
      title: "مرافق عالمية المستوى لحياة استثنائية",
      amenities: [
        { label: "تراس المسبح", icon: "🏊", color: "#d7b46a" },
        { label: "مسرح مفتوح", icon: "🎬", color: "#d7b46a" },
        { label: "يوغا خارجية", icon: "🧘", color: "#d7b46a" },
        { label: "ساونا وبخار", icon: "♨️", color: "#d7b46a" },
        { label: "جاكوزي", icon: "🛁", color: "#d7b46a" },
        { label: "مكتبة", icon: "📚", color: "#d7b46a" },
        { label: "مسبح", icon: "🏊‍♂️", color: "#d7b46a" },
        { label: "جيم خارجي", icon: "💪", color: "#d7b46a" },
        { label: "لاونج خارجي", icon: "🛋️", color: "#d7b46a" },
        { label: "منطقة أطفال", icon: "🧸", color: "#d7b46a" },
        { label: "أسرّة مائية", icon: "🌊", color: "#d7b46a" },
        { label: "مسبح أطفال", icon: "👶", color: "#d7b46a" },
        { label: "جيم داخلي", icon: "🏋️", color: "#d7b46a" },
        { label: "منطقة شواء", icon: "🍖", color: "#d7b46a" },
        { label: "منطقة ترفيه داخلية", icon: "🎮", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "سامانا إمبريال جاردن",
      address: "أرجان، دبي، الإمارات العربية المتحدة",
      lat: 25.0703,
      lng: 55.2436,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏫", text: "Nord Anglia School Dubai (حوالي 700 م)" },
        { icon: "🌳", text: "Arjan Central Park (حوالي 1.2 كم)" },
        { icon: "🛍️", text: "My City Centre Al Barsha (حوالي 1.7 كم)" },
        { icon: "🏖️", text: "Sufouh Beach (حوالي 13.2 كم)" },
        { icon: "🏙️", text: "Downtown Dubai (حوالي 20.8 كم)" },
        {
          icon: "✈️",
          text: "Al Maktoum International Airport (حوالي 35.5 كم)",
        },
      ],
    },

    nearbyAttractions: {
      title: "في قلب كل شيء",
      attractions: [
        {
          name: "Nord Anglia School Dubai (Gate 7)",
          distance: "700 م",
          time: null,
          icon: "🏫",
        },
        {
          name: "Arjan Central Park",
          distance: "1.2 كم",
          time: null,
          icon: "🌳",
        },
        {
          name: "My City Centre Al Barsha",
          distance: "1.7 كم",
          time: null,
          icon: "🛍️",
        },
        { name: "Sufouh Beach", distance: "13.2 كم", time: null, icon: "🏖️" },
        { name: "Downtown Dubai", distance: "20.8 كم", time: null, icon: "🏙️" },
        {
          name: "Al Maktoum International Airport",
          distance: "35.5 كم",
          time: null,
          icon: "✈️",
        },
      ],
    },

    cta: {
      title: "مستعد لتجربة أسلوب الحياة في Imperial Garden؟",
      description:
        "تواصل مع فريق المبيعات لحجز موعد، أو لتأكيد التوفر، أو للحصول على الكتيّب وخطة الدفع.",
      buttons: [
        { text: "حجز موعد زيارة", type: "primary", url: "/contact" },
        { text: "تحميل الكتيّب", type: "secondary", url: "/contact" },
      ],
    },
  },
};
