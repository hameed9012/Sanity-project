// src/data/properties/apartments/damac/chelsea-residences/chelsea-residences.js
// NOTE:
// ✅ Same hierarchy/order: seo → project → hero → intro → gallery → floorPlans → amenities → location → nearbyAttractions
// ✅ Payment plan now includes BOTH: a readable string / a structured breakdown (60% / 40%)
// ✅ Added: launch window, sale status, furnishing, service charge, floors formula, phases/towers, readiness progress
// ✅ Added: “Finishing & materials” / “Kitchen & appliances” / “Furnishing” inside intro (keeps hierarchy unchanged)
// ⚠️ Floor-plan areas/prices: kept as you wrote them (double-check if those “suite areas” are correct)

const BASE =
  "https://luxury-real-estate-media.b-cdn.net/damac/maritime-city/damac-chelsea-residences";

export const chelseaResidencesData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "Chelsea Residences by DAMAC | Waterfront Apartments in Dubai Maritime City",
      description:
        "Chelsea Residences by DAMAC in Dubai Maritime City offers 1–3 bedroom waterfront apartments with Chelsea-inspired lifestyle experiences and a 60% / 40% payment plan, with delivery expected Q4 2029.",
      keywords:
        "chelsea residences by damac, dubai maritime city apartments, waterfront apartments dubai, damac chelsea residences, off plan dubai",
      canonical: "/properties/apartments/damac/chelsea-residences",
    },

    project: {
      name: "Chelsea Residences",
      developer: "DAMAC",
      location: "Dubai Maritime City, Dubai",
      status: "Off-Plan",

      // headline facts
      startingPrice: "From AED 2,160,000",
      completionDate: "Q4 2029",

      // portal-style details (keeps same object position/order)
      salestatus: "Off-Plan",
      constructionStatus: "Presale",
      launchWindow: "19 Jul 2025 – Q4 2029",
      readinessProgress: "0%",
      unitTypes: "Apartments (1–3 Bedroom)",
      towersAndPhases: "Six towers across two phases",
      floorsFormula: "from G / 2P / 25 floors",
      furnishing: "Semi-furnished",
      serviceCharge: "18–22 AED/sqft",

      // payment plan (both formats)
      paymentPlan:
        "20% on booking / 40% during construction (1% monthly) / 40%upon handover",
      paymentPlanBreakdown: [
        { stage: "On booking", percent: 20 },
        {
          stage: "During construction",
          percent: 40,
          note: "Often structured as 1% monthly",
        },
        { stage: "Upon handover", percent: 40 },
      ],
    },

    hero: {
      backgroundUrl: `${BASE}/1.%2020250429_Image-Update_05_BRILLIANCE.jpg`,
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC",
      rating: null,
    },

    intro: {
      title: "WATERFRONT LIVING, CHELSEA-INSPIRED",
      paragraphs: [
        "Chelsea Residences by DAMAC is an ultra-luxury waterfront development in Dubai Maritime City. Spanning six towers across two phases, it offers a curated collection of 1–3 bedroom residences designed to blend serene coastal surroundings with vibrant urban energy.",
        "Homes feature generous layouts, double-glazed windows, fitted kitchens, built-in wardrobes (where applicable), and refined finishes to elevate everyday comfort.",
        "The lifestyle experience is centered around wellness, leisure, and iconic themed amenities — from infinity pools and jogging tracks to Chelsea Football Simulation Room, rooftop pitch and advanced wellness concepts like rain therapy, cryotherapy, forest relaxation pods, and water treatment features.",
        "Payment plan: 20% on booking, 40% during construction (often structured as 1% monthly installments), and 40%upon handover, with delivery expected in Q4 2029.",
      ],

      // extra “portal details” here WITHOUT changing hierarchy
      finishingAndMaterials:
        "Double glazed windows. Balconies as per layout. Central air conditioning. Porcelain tiled floors. Painted plastered walls. Painted gypsum ceiling.",
      kitchenAndAppliances:
        "Fitted kitchens with refrigerator, cooker, hood, washing machine and RO system.",
      furnishingNotes: "Semi-furnished: built-in wardrobes (where applicable).",

      brochures: [
        {
          title: "Download Brochure",
          url: `${BASE}/Chelsea%20BROCHURE_MAY5_DIGITAL_CONCEPT.pdf`,
          type: "main",
        },
        {
          title: "Floor Plans (PDF)",
          url: `${BASE}/Chelsea%20BROCHURE_MAY5_DIGITAL_FLOOR%20PLANS.pdf`,
          type: "floor-plans",
        },
        {
          title: "Payment Plan (Image)",
          url: `${BASE}/DAMAC%20CFC_Payment%20plan_25_4_25.jpg`,
          type: "payment-plan",
        },
      ],

      imgUrl: `${BASE}/007%20c32%20(2).jpg`,
      imgAlt: "Chelsea Residences exterior view",

      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Dubai Maritime City",
          label: "Waterfront District",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q4 2029",
          label: "Expected Delivery",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "60% / 40%",
          label: "Payment Plan",
        },
      ],
    },

    gallery: {
      title: "Chelsea Residences Visuals",
      slides: [
        `${BASE}/007%20c32%20(2).jpg`,
        `${BASE}/1.%2020250429_Image-Update_05_BRILLIANCE.jpg`,
        `${BASE}/20250425_Updated_Image-03_SUNDOWN.jpg`,
        `${BASE}/20250425_Updated_Image-Update_AMARILLO.jpg`,
        `${BASE}/c16.jpg`,

        `${BASE}/Fine_Dining.jpg`,
        `${BASE}/Legends_Living%20%26%20Kitchen.jpg`,
        `${BASE}/Legends_Master_Bedroom.jpg`,

        `${BASE}/微信图片_20250430133725.jpg`,
        `${BASE}/微信图片_20250430133749.jpg`,
        `${BASE}/微信图片_20250430134323.jpg`,

        // If these exist in your CDN folder, uncomment:
        // `${BASE}/Fitness_Center.jpg`,
        // `${BASE}/Football_room_Rev02.jpg`,
      ],
      projectTag: "Chelsea Residences",
    },

    // ✅ Minimal floorPlans object (EN) — keep ONLY: Unit, Total Area, Starting Price, Handover
    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 Bedroom",
            "Total Area": "662 sq.ft",
            "Starting Price": "AED 2,998,000",
            Handover: "Q4 2029",
            "Payment Plan": "60% / 40%",
          },
          images: [`${BASE}/1BR%20Chelsea%20Residence%20floor%20plan.png`],
          features: [
            "Waterfront living",
            "Chelsea-inspired lifestyle concept",
            "Modern open layout",
          ],
        },
        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            Unit: "2 Bedroom",
            "Total Area": "966 sq.ft",
            "Starting Price": "AED 4,263,000",
            Handover: "Q4 2029",
            "Payment Plan": "60% / 40%",
          },
          images: [`${BASE}/2BR%20Cheslsea%20Residence%20floor%20plan.png`],
          features: [
            "Spacious balcony",
            "Premium finishes",
            "Ideal for families",
          ],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            Unit: "3 Bedroom",
            "Total Area": "2,554 sq.ft",
            "Starting Price": "AED 5,248,000",
            Handover: "Q4 2029",
            "Payment Plan": "60% / 40%",
          },
          images: [`${BASE}/3BR%20Cheslsea%20%20Residence%20Floor%20Plan.png`],
          features: [
            "Large family layout",
            "Expansive terrace",
            "Signature waterfront residence",
          ],
        },
      ],
    },

    amenities: {
      title: "Lifestyle & Experiences",
      amenities: [
        // From the portal “Features / Amenities” list you pasted:
        { label: "TREATMENT SPA", icon: "🧖", color: "#d7b46a" },
        { label: "STARLITE WELLNESS CENTER", icon: "✨", color: "#d7b46a" },
        { label: "FOREST RELAXATION PODS", icon: "🌿", color: "#d7b46a" },
        { label: "RAIN THERAPY", icon: "🌧️", color: "#d7b46a" },
        { label: "CRYOTHERAPY", icon: "🧊", color: "#d7b46a" },
        { label: "AERIAL YOGA ROOM", icon: "🧘", color: "#d7b46a" },

        { label: "POWERHOUSE LOUNGE", icon: "🛋️", color: "#d7b46a" },
        { label: "STAMFORD CINEMA", icon: "🎬", color: "#d7b46a" },
        { label: "SUNSET BAR", icon: "🍸", color: "#d7b46a" },
        { label: "THE LEGENDS’ WALKWAY", icon: "🚶", color: "#d7b46a" },

        { label: "INFINITY BEACH POOL", icon: "🏊", color: "#d7b46a" },
        { label: "LION BEACH", icon: "🏖️", color: "#d7b46a" },
        { label: "CORAL BEACH", icon: "🌊", color: "#d7b46a" },

        { label: "KIDS POOL", icon: "🛟", color: "#d7b46a" },
        { label: "KIDS PLAY AREA", icon: "🧸", color: "#d7b46a" },

        { label: "ATHLETIC TRAINING CENTRE", icon: "🏋️", color: "#d7b46a" },
        { label: "OUTDOOR GYM", icon: "💪", color: "#d7b46a" },
        { label: "JOGGING TRACK", icon: "🏃", color: "#d7b46a" },

        { label: "FOOTBALL SIMULATION ROOM", icon: "⚽", color: "#d7b46a" },
        { label: "ROOFTOP PITCH", icon: "🥅", color: "#d7b46a" },

        // Mentioned in description text
        { label: "FINE DINING", icon: "🍽️", color: "#d7b46a" },
        { label: "CHELSEA BLUE BEACH CLUB", icon: "💙", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Chelsea Residences",
      address: "Dubai Maritime City, Dubai, UAE",

      // Keep your pin for now (centroid-style). Replace when you confirm exact map pin.
      lat: 25.296,
      lng: 55.273,
      zoom: 14,

      proximityFeatures: [
        {
          icon: "⚓",
          text: "Located in Dubai Maritime City (coastal waterfront hub).",
        },
        {
          icon: "🏙️",
          text: "Positioned near Port Rashid, DIFC & Downtown Dubai.",
        },
        {
          icon: "🛣️",
          text: "Good connectivity to key road networks (confirm routes by pin).",
        },
      ],
    },

    nearbyAttractions: {
      title: "Nearby Highlights",
      attractions: [
        // From your portal “Nearby / Points of interest”
        {
          name: "Little Diamond Nursery Al Raffa",
          distance: "4.4 km",
          time: null,
          icon: "🧒",
        },
        {
          name: "Wasl Community Park",
          distance: "4.4 km",
          time: null,
          icon: "🌳",
        },
        {
          name: "Al Rais Shopping Centre",
          distance: "5.3 km",
          time: null,
          icon: "🛍️",
        },
        {
          name: "North Beach, Pearl Jumeirah",
          distance: "6.1 km",
          time: null,
          icon: "🏖️",
        },
        {
          name: "Downtown Dubai",
          distance: "12.8 km",
          time: null,
          icon: "🏙️",
        },
        {
          name: "Dubai International Airport (DXB)",
          distance: "13.0 km",
          time: null,
          icon: "✈️",
        },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title: "تشيلسي رزيدنسز من داماك | شقق واجهة بحرية في مدينة دبي البحرية",
      description:
        "تشيلسي رزيدنسز من داماك في مدينة دبي البحرية يقدّم شققاً 1–3 غرف نوم بإطلالة بحرية وخطة سداد 60% / 40%، مع موعد تسليم متوقع في الربع الرابع 2029.",
      keywords:
        "تشيلسي رزيدنسز داماك، شقق مدينة دبي البحرية، شقق واجهة بحرية دبي، داماك تشيلسي رزيدنسز، عقارات دبي قيد التطوير",
      canonical: "/properties/apartments/damac/chelsea-residences",
    },

    project: {
      name: "Chelsea Residences",
      developer: "داماك",
      location: "مدينة دبي البحرية، دبي",
      status: "قيد الإنشاء",

      startingPrice: "ابتداءً من 2,160,000 درهم",
      completionDate: "الربع الرابع 2029",

      saleStatus: "متاح للبيع",
      constructionStatus: "مرحلة ما قبل الإطلاق/البيع",
      launchWindow: "19 يوليو 2025 – الربع الرابع 2029",
      readinessProgress: "0%",
      unitTypes: "شقق سكنية (1–3 غرف نوم)",
      towersAndPhases: "6 أبراج على مرحلتين",
      floorsFormula: "من G / 2P / 25 طابق",
      furnishing: "نصف مفروشة",
      serviceCharge: "18–22 درهم/قدم²",

      paymentPlan:
        "20% عند الحجز / 40% أثناء الإنشاء (عادةً 1% شهرياً) / 40% عند التسليم",
      paymentPlanBreakdown: [
        { stage: "عند الحجز", percent: 20 },
        { stage: "أثناء الإنشاء", percent: 40, note: "غالباً أقساط 1% شهرياً" },
        { stage: "عند التسليم", percent: 40 },
      ],
    },

    hero: {
      backgroundUrl: `${BASE}/20250425_Updated_Image-Update_AMARILLO.jpg`,
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك",
      rating: null,
    },

    intro: {
      title: "حياة بحرية… بروح تشيلسي",
      paragraphs: [
        "يقع مشروع «Chelsea Residences» من داماك في مدينة دبي البحرية كوجهة سكنية فاخرة على الواجهة البحرية. يضم المشروع 6 أبراج على مرحلتين ويوفّر شققاً من 1 إلى 3 غرف نوم بتصميم عصري يجمع بين هدوء البحر وطاقة المدينة.",
        "تتميّز الوحدات بمساحات رحبة ونوافذ مزدوجة الزجاج ومطابخ مجهّزة وخزائن مدمجة (حسب التصميم) وتشطيبات راقية لراحة يومية أعلى.",
        "المرافق تركز على أسلوب حياة مميّز: مسابح إنفينيتي، مسار جري، غرفة محاكاة كرة القدم، ملعب على السطح، ومفاهيم عافية متقدمة مثل العلاج بالمطر والكرايوثيرابي وكبسولات الاسترخاء الطبيعية.",
        "خطة السداد: 20% عند الحجز، 40% أثناء الإنشاء (غالباً أقساط شهرية 1%)، و40% عند التسليم، مع موعد تسليم متوقع في الربع الرابع 2029.",
      ],

      finishingAndMaterials:
        "نوافذ مزدوجة الزجاج، بلكونات حسب المخطط، تكييف مركزي، أرضيات بورسلان، جدران مطلية، سقف جبس مطلي.",
      kitchenAndAppliances: "مطبخ مجهز: ثلاجة، موقد، شفاط، غسالة، ونظام RO.",
      furnishingNotes: "نصف مفروشة: خزائن مدمجة (حسب توفرها في التصميم).",

      brochures: [
        {
          title: "تحميل الكتيّب (Concept)",
          url: `${BASE}/Chelsea%20BROCHURE_MAY5_DIGITAL_CONCEPT.pdf`,
          type: "main",
        },
        {
          title: "المخططات (PDF)",
          url: `${BASE}/Chelsea%20BROCHURE_MAY5_DIGITAL_FLOOR%20PLANS.pdf`,
          type: "floor-plans",
        },
        {
          title: "خطة السداد (صورة)",
          url: `${BASE}/DAMAC%20CFC_Payment%20plan_25_4_25.jpg`,
          type: "payment-plan",
        },
      ],

      imgUrl: `${BASE}/007%20c32%20(2).jpg`,
      imgAlt: "واجهة مشروع تشيلسي رزيدنسز",

      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "مدينة دبي البحرية",
          label: "واجهة بحرية",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "الربع الرابع 2029",
          label: "تسليم متوقع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "60% / 40%",
          label: "خطة سداد",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: [
        `${BASE}/007%20c32%20(2).jpg`,
        `${BASE}/1.%2020250429_Image-Update_05_BRILLIANCE.jpg`,
        `${BASE}/20250425_Updated_Image-03_SUNDOWN.jpg`,
        `${BASE}/20250425_Updated_Image-Update_AMARILLO.jpg`,
        `${BASE}/c16.jpg`,
        `${BASE}/Fine_Dining.jpg`,
        `${BASE}/Legends_Living%20%26%20Kitchen.jpg`,
        `${BASE}/Legends_Master_Bedroom.jpg`,
        `${BASE}/微信图片_20250430133725.jpg`,
        `${BASE}/微信图片_20250430133749.jpg`,
        `${BASE}/微信图片_20250430134323.jpg`,
      ],
      projectTag: "Chelsea Residences",
    },

    // ✅ Minimal floorPlans object (AR) — keep ONLY: الوحدة, المساحة الإجمالية, السعر الابتدائي, موعد التسليم
    floorPlans: {
      type: "شقق سكنية",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            الوحدة: "غرفة نوم واحدة",
            "المساحة الإجمالية": "662 قدم²",
            "السعر الابتدائي": "2,998,000 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة الدفع": "60% / 40%",
          },
          images: [`${BASE}/1BR%20Chelsea%20Residence%20floor%20plan.png`],
          features: [
            "حياة على الواجهة البحرية",
            "أسلوب مستوحى من تشيلسي",
            "تخطيط عصري مفتوح",
          ],
        },
        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            الوحدة: "غرفتي نوم",
            "المساحة الإجمالية": "966 قدم²",
            "السعر الابتدائي": "4,263,000 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة الدفع": "60% / 40%",
          },
          images: [`${BASE}/2BR%20Cheslsea%20Residence%20floor%20plan.png`],
          features: ["شرفة واسعة", "تشطيبات فاخرة", "مناسبة للعائلات"],
        },
        {
          id: "3br",
          title: "شقة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            الوحدة: "ثلاث غرف نوم",
            "المساحة الإجمالية": "2,554 قدم²",
            "السعر الابتدائي": "5,248,000 درهم",
            "موعد التسليم": "الربع الرابع 2029",
            "خطة الدفع": "60% / 40%",
          },
          images: [`${BASE}/3BR%20Cheslsea%20%20Residence%20Floor%20Plan.png`],
          features: [
            "مساحة عائلية كبيرة",
            "تراس واسع جداً",
            "إطلالة بحرية مميزة",
          ],
        },
      ],
    },

    amenities: {
      title: "مرافق وتجارب أسلوب حياة",
      amenities: [
        { label: "سبا علاجي", icon: "🧖", color: "#d7b46a" },
        { label: "مركز عافية Starlite", icon: "✨", color: "#d7b46a" },
        { label: "كبسولات استرخاء طبيعية", icon: "🌿", color: "#d7b46a" },
        { label: "العلاج بالمطر", icon: "🌧️", color: "#d7b46a" },
        { label: "كرايوثيرابي", icon: "🧊", color: "#d7b46a" },
        { label: "غرفة يوغا هوائية", icon: "🧘", color: "#d7b46a" },

        { label: "لاونج Powerhouse", icon: "🛋️", color: "#d7b46a" },
        { label: "سينما Stamford", icon: "🎬", color: "#d7b46a" },
        { label: "بار الغروب", icon: "🍸", color: "#d7b46a" },
        { label: "ممر Legends", icon: "🚶", color: "#d7b46a" },

        { label: "مسبح إنفينيتي شاطئي", icon: "🏊", color: "#d7b46a" },
        { label: "Lion Beach", icon: "🏖️", color: "#d7b46a" },
        { label: "Coral Beach", icon: "🌊", color: "#d7b46a" },

        { label: "مسبح أطفال", icon: "🛟", color: "#d7b46a" },
        { label: "منطقة ألعاب أطفال", icon: "🧸", color: "#d7b46a" },

        { label: "مركز تدريب رياضي", icon: "🏋️", color: "#d7b46a" },
        { label: "جيم خارجي", icon: "💪", color: "#d7b46a" },
        { label: "مسار جري", icon: "🏃", color: "#d7b46a" },

        { label: "غرفة محاكاة كرة القدم", icon: "⚽", color: "#d7b46a" },
        { label: "ملعب على السطح", icon: "🥅", color: "#d7b46a" },

        { label: "تجارب طعام راقية", icon: "🍽️", color: "#d7b46a" },
        { label: "Chelsea Blue Beach Club", icon: "💙", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Chelsea Residences",
      address: "مدينة دبي البحرية، دبي، الإمارات",
      lat: 25.296,
      lng: 55.273,
      zoom: 14,
      proximityFeatures: [
        { icon: "⚓", text: "ضمن مدينة دبي البحرية (وجهة ساحلية متخصصة)." },
        { icon: "🏙️", text: "قريب من ميناء راشد وDIFC ووسط دبي." },
        {
          icon: "🛣️",
          text: "اتصال جيد بالطرق الرئيسية (يفضل تأكيده بعد تثبيت الـ Pin).",
        },
      ],
    },

    nearbyAttractions: {
      title: "قريب من أبرز الوجهات",
      attractions: [
        {
          name: "حضانة Little Diamond – الرّفاء",
          distance: "4.4 كم",
          time: null,
          icon: "🧒",
        },
        {
          name: "حديقة Wasl Community Park",
          distance: "4.4 كم",
          time: null,
          icon: "🌳",
        },
        {
          name: "مركز الرايس للتسوق",
          distance: "5.3 كم",
          time: null,
          icon: "🛍️",
        },
        {
          name: "North Beach – نخلة جميرا/بيرل جميرا",
          distance: "6.1 كم",
          time: null,
          icon: "🏖️",
        },
        { name: "وسط مدينة دبي", distance: "12.8 كم", time: null, icon: "🏙️" },
        {
          name: "مطار دبي الدولي",
          distance: "13.0 كم",
          time: null,
          icon: "✈️",
        },
      ],
    },
  },
};
