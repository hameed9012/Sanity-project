// src/data/properties/apartments/azizi/amir/amir.js

const CDN_BASE = "https://luxury-real-estate-media.b-cdn.net/azizi/amir";

const ASSETS = {
  videoHero: `${CDN_BASE}/Furjan%20June%202025%20High%20res.mp4`,

  img1: `https://luxury-real-estate-media.b-cdn.net/azizi/amir/amir%203br.png`,
  img2: `${CDN_BASE}/360-1126_AFRA026-360-PERSPECTIVE-02.png`,
  img3: `https://luxury-real-estate-media.b-cdn.net/azizi/amir/amir%202br.png`,

  factSheet: `${CDN_BASE}/Azizi%20Amir%20English%20Factsheet.pdf`,
  floorPlansPdf: `${CDN_BASE}/Azizi%20Amir%20Floor%20Plans%20%26%20Floorplates.pdf`,
};

export const aziziAmirData = {
  en: {
    seo: {
      title:
        "Azizi Amir | 1–3 Bedroom Apartments in Al Furjan, Dubai | On Sale, Handover Q4 2027",
      description:
        "Azizi Amir is a contemporary residential development in Al Furjan, Dubai, offering 1, 2, and 3-bedroom apartments with premium finishes, family-friendly amenities, and strong connectivity to Dubai Marina, JBR, and major highways.",
      keywords:
        "Azizi Amir, Azizi Developments, Al Furjan apartments, Dubai apartments, 1 bedroom, 2 bedroom, 3 bedroom, on sale, Q4 2027, payment plan",
      canonical: "/properties/apartments/azizi/amir",
    },

    project: {
      name: "Azizi Amir",
      developer: "Azizi Developments",
      location: "Al Furjan, Dubai, UAE",
      status: "Off-plan",
      startingPrice: "AED 1,344,000",
      completionDate: "Q4 2027",
      paymentPlan: "10% / 40% / 50%",
      type: "Residential Apartments",
      units: "1, 2 & 3 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: ASSETS.videoHero,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: 4.6,
    },

    intro: {
      title: "Modern Urban Elegance in the Heart of Al Furjan",
      paragraphs: [
        "Azizi Amir is a contemporary residential development that redefines modern comfort in Al Furjan, offering a premium selection of 1, 2, and 3-bedroom apartments for individuals, couples, and families seeking refined city living.",
        "Residents enjoy a lifestyle built around comfort and leisure—separate pools for adults and kids, a fully equipped gym, a modern cinema, landscaped walk-in areas, and an indoor kids’ play zone, alongside ample parking and 24/7 security.",
        "Set within a fast-growing community with excellent connectivity, Azizi Amir balances the energy of Dubai with a calm neighborhood atmosphere, close to key roads, shopping, dining, and major destinations.",
        "Finishing & materials: Modern finishing with high-quality materials. Kitchen & appliances: Equipped kitchens. Furnishing: No.",
      ],
      brochures: [
        {
          title: "Download Factsheet",
          url: ASSETS.factSheet,
          type: "main",
          icon: "📄",
          color: "#1A5F7A",
          size: "3.53 MB",
          category: "Factsheet",
          fileName: "Azizi Amir English Factsheet.pdf",
          description: "Official project factsheet overview.",
        },
        {
          title: "Floor Plans & Floorplates",
          url: ASSETS.floorPlansPdf,
          type: "secondary",
          icon: "📐",
          color: "#2E8B57",
          size: "21.97 MB",
          category: "Floor Plans",
          fileName: "Azizi Amir Floor Plans & Floorplates.pdf",
          description: "Detailed floor plans and floorplates.",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/amir/360-1126_AFRA026-360-PERSPECTIVE-02.png`,
      imgAlt: "Azizi Amir – exterior perspective",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "From AED 1,344,000",
          label: "Starting Price",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📅",
          value: "Q4 2027",
          label: "Handover",
        },
        {
          bottom: "14%",
          right: "-20px",
          icon: "📍",
          value: "Al Furjan",
          label: "Prime Community",
        },
      ],
    },

    gallery: {
      title: "Azizi Amir Gallery",
      slides: [
        `https://luxury-real-estate-media.b-cdn.net/azizi/amir/360-1126_AFRA026-360-PERSPECTIVE-01.jpg`,
        `https://luxury-real-estate-media.b-cdn.net/azizi/amir/360-1126_AFRA026-360-PERSPECTIVE-03.png`,
        `https://luxury-real-estate-media.b-cdn.net/azizi/amir/360-1126_AFRA026-360-PERSPECTIVE-02.png`,
      ],
      projectTag: "Azizi Amir – Al Furjan",
    },

    // EN floorPlans: keep your agreed fields
    // ✅ Azizi Amir — Floor Plans (EN) — corrected TOTAL AREA from your table
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "2 Bedrooms",
          bedrooms: 2,
          specs: {
            "Total Area": "1,283 sq.ft",
            "Starting Price": "AED 2,004,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [ASSETS.img3],
          features: ["—"],
        },
        {
          id: "3br",
          title: "3 Bedrooms",
          bedrooms: 3,
          specs: {
            "Total Area": "1,482 sq.ft",
            "Starting Price": "AED 2,375,000",
            Handover: "Q4 2027",
            "Payment Plan": "50% / 50%",
          },
          images: [ASSETS.img1],
          features: ["—"],
        },
      ],
      brochureHref: ASSETS.floorPlansPdf,
    },

    amenities: {
      title: "Features & Amenities",
      amenities: [
        { label: "STATE-OF-THE-ART GYM", icon: "💪", color: "#d7b46a" },
        { label: "ADULTS & KIDS SEPARATE POOLS", icon: "🏊", color: "#d7b46a" },
        { label: "INDOOR KIDS PLAY AREA", icon: "🧸", color: "#d7b46a" },
        { label: "MODERN CINEMA", icon: "🎬", color: "#d7b46a" },
        { label: "LANDSCAPED WALK-IN AREAS", icon: "🌿", color: "#d7b46a" },
        { label: "AMPLE PARKING", icon: "🚗", color: "#d7b46a" },
        { label: "24/7 SECURITY", icon: "🔒", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Amir",
      address: "Al Furjan, Dubai, UAE",
      lat: 25.0045,
      lng: 55.1555,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚗", text: "Fast access to major highways and city hubs." },
        { icon: "🏖️", text: "Convenient reach to Dubai Marina & JBR area." },
        {
          icon: "🛍️",
          text: "Close to retail centers, dining, and essentials.",
        },
        { icon: "🌳", text: "Community parks and family-friendly lifestyle." },
      ],
    },

    nearbyAttractions: {
      title: "Nearby Points of Interest",
      attractions: [
        {
          name: "Pavilion Discovery Gardens (Retail)",
          distance: "1.0 km",
          time: "5 min",
          icon: "🛍️",
        },
        {
          name: "Jebel Ali Village Early Childhood Centre",
          distance: "1.1 km",
          time: "6 min",
          icon: "🏫",
        },
        {
          name: "Discovery Gardens Park",
          distance: "1.4 km",
          time: "7 min",
          icon: "🌳",
        },
        {
          name: "Marina Beach",
          distance: "8.2 km",
          time: "15 min",
          icon: "🏖️",
        },
        {
          name: "Al Maktoum International Airport",
          distance: "28.1 km",
          time: "30 min",
          icon: "✈️",
        },
        {
          name: "Downtown Dubai",
          distance: "28.9 km",
          time: "30 min",
          icon: "🏙️",
        },
      ],
    },

    cta: {
      title: "Interested in Azizi Amir?",
      description:
        "Share your details to receive updated availability, pricing, and the full floor plans PDF for Azizi Amir in Al Furjan.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Floor Plans", action: "download-brochure" },
      ],
    },
  },

  // ✅ AR updated to match your working Milan style 100%
  ar: {
    seo: {
      title: "عزيزي أمير | شقق 1–3 غرف نوم في الفرجان، دبي | التسليم Q4 2027",
      description:
        "عزيزي أمير مشروع سكني عصري في الفرجان بدبي يضم شقق 1 و2 و3 غرف نوم بتشطيبات راقية ومرافق عائلية واتصال ممتاز بأهم وجهات دبي.",
      keywords:
        "عزيزي أمير, عزيزي, شقق الفرجان, شقق دبي, غرفة, غرفتين, ثلاث غرف, خطة دفع, Q4 2027",
      canonical: "/properties/apartments/azizi/amir",
    },

    project: {
      name: "عزيزي أمير",
      developer: "عزيزي للتطوير العقاري",
      location: "الفرجان، دبي، الإمارات",
      status: "على البيع (قيد الإنشاء)",
      startingPrice: "1,344,000 درهم",
      completionDate: "Q4 2027",
      paymentPlan: "10% / 40% / 50%",
      type: "شقق سكنية",
      units: "شقق 1 و2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: ASSETS.videoHero,
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي للتطوير العقاري",
      rating: 4.6,
    },

    intro: {
      title: "أناقة عصرية في قلب الفرجان",
      paragraphs: [
        "عزيزي أمير مشروع سكني معاصر في الفرجان يقدم شقق 1 و2 و3 غرف نوم بتخطيطات عملية وتشطيبات راقية تناسب الأفراد والعائلات.",
        "يوفر المشروع مرافق متكاملة تشمل مسابح منفصلة للكبار والأطفال، نادي رياضي، سينما حديثة، مسارات مشي مُنسّقة، ومنطقة ألعاب داخلية للأطفال، مع مواقف سيارات وأمن على مدار الساعة.",
        "يتميز بموقع في منطقة سريعة النمو واتصال ممتاز بالطرق الرئيسية وقربه من وجهات دبي الحيوية.",
        "التشطيبات والمواد: تشطيب عصري بمواد عالية الجودة. المطبخ والأجهزة: مطابخ مجهزة. التأثيث: لا.",
      ],
      brochures: [
        { title: "تحميل ورقة المعلومات", url: ASSETS.factSheet, type: "main" },
        {
          title: "تحميل المخططات",
          url: ASSETS.floorPlansPdf,
          type: "secondary",
        },
      ],
      imgUrl: `https://luxury-real-estate-media.b-cdn.net/azizi/amir/360-1126_AFRA026-360-PERSPECTIVE-02.png`,
      imgAlt: "عزيزي أمير – منظور خارجي",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "💰",
          value: "من 1,344,000 درهم",
          label: "السعر يبدأ من",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "📅",
          value: "Q4 2027",
          label: "موعد التسليم",
        },
        {
          bottom: "14%",
          right: "-20px",
          icon: "📍",
          value: "الفرجان",
          label: "الموقع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: [
        `https://luxury-real-estate-media.b-cdn.net/azizi/amir/360-1126_AFRA026-360-PERSPECTIVE-01.jpg`,
        `https://luxury-real-estate-media.b-cdn.net/azizi/amir/360-1126_AFRA026-360-PERSPECTIVE-03.png`,
        `https://luxury-real-estate-media.b-cdn.net/azizi/amir/360-1126_AFRA026-360-PERSPECTIVE-02.png`,
      ],
      projectTag: "عزيزي أمير – الفرجان",
    },

    // ✅ IMPORTANT: keep type = "apartments" (same as EN) مثل ميلان
    // ✅ عزيزي أمير — المخططات (AR) — مطابقة 100% للنسخة الإنجليزية
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "إجمالي المساحة": "1,283 قدم²",
            "السعر الابتدائي": "2,004,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [ASSETS.img3],
          features: ["—"],
        },
        {
          id: "3br",
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "إجمالي المساحة": "1,482 قدم²",
            "السعر الابتدائي": "2,375,000 درهم",
            "موعد التسليم": "Q4 2027",
            "خطة الدفع": "50% / 50%",
          },
          images: [ASSETS.img1],
          features: ["—"],
        },
      ],
      brochureHref: ASSETS.floorPlansPdf,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "نادي رياضي حديث", icon: "💪", color: "#d7b46a" },
        { label: "مسابح للكبار والأطفال", icon: "🏊", color: "#d7b46a" },
        { label: "منطقة ألعاب داخلية للأطفال", icon: "🧸", color: "#d7b46a" },
        { label: "سينما حديثة", icon: "🎬", color: "#d7b46a" },
        { label: "مسارات مشي ومناظر طبيعية", icon: "🌿", color: "#d7b46a" },
        { label: "مواقف سيارات", icon: "🚗", color: "#d7b46a" },
        { label: "أمن 24/7", icon: "🔒", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي أمير",
      address: "الفرجان، دبي، الإمارات",
      lat: 25.0045,
      lng: 55.1555,
      zoom: 14,
      proximityFeatures: [
        { icon: "🚗", text: "سهولة الوصول إلى الطرق الرئيسية في دبي." },
        { icon: "🏖️", text: "قريب من دبي مارينا وJBR." },
        { icon: "🛍️", text: "بالقرب من مراكز التسوق والخدمات." },
        { icon: "🌳", text: "بيئة مجتمعية مناسبة للعائلات." },
      ],
    },

    nearbyAttractions: {
      title: "أماكن قريبة",
      attractions: [
        {
          name: "Pavilion Discovery Gardens",
          distance: "1.0 كم",
          time: "5 دقائق",
          icon: "🛍️",
        },
        {
          name: "Jebel Ali Village (Nursery)",
          distance: "1.1 كم",
          time: "6 دقائق",
          icon: "🏫",
        },
        {
          name: "Discovery Gardens Park",
          distance: "1.4 كم",
          time: "7 دقائق",
          icon: "🌳",
        },
        {
          name: "Marina Beach",
          distance: "8.2 كم",
          time: "15 دقيقة",
          icon: "🏖️",
        },
        {
          name: "Al Maktoum International Airport",
          distance: "28.1 كم",
          time: "30 دقيقة",
          icon: "✈️",
        },
        {
          name: "Downtown Dubai",
          distance: "28.9 كم",
          time: "30 دقيقة",
          icon: "🏙️",
        },
      ],
    },

    cta: {
      title: "مهتم بمشروع عزيزي أمير؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار ورابط ملف المخططات الكامل لمشروع عزيزي أمير في الفرجان.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل المخططات", action: "download-brochure" },
      ],
    },
  },
};
