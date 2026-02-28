// src/data/properties/villasarada/massar-3.js

export const massar3Data = {
  en: {
    seo: {
      title: "Masaar 3 | Luxury 3 & 5 Bedroom Villas in Sharjah | Arada",
      description:
        "Premium 3 and 5 bedroom luxury villas in Masaar 3, Sharjah. Exclusive gated community with premium amenities, lush landscapes, and family-friendly living by Arada.",
      keywords:
        "masaar 3, arada, luxury villas sharjah, 3 bedroom villas, 5 bedroom villas, masaar phase 3, arada sharjah",
      canonical: "/properties/villas/arada/massar",
    },
    project: {
      name: "Masaar 3",
      developer: "Arada",
      location: "Sharjah, UAE",
      status: "Off-Plan",
      startingPrice: 4395000,
      completionDate: "Q4 2028",
      type: "Luxury Villas",
      units: "3 & 5 Bedroom Villas",
    },
    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/massar-3/hero-bg.jpg",
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: 4.6,
    },
    intro: {
      title: "ELEGANT FAMILY LIVING IN SHARJAH",
      paragraphs: [
        "Masaar 3 presents an exclusive collection of 3 and 5 bedroom luxury villas within the master-planned Masaar community in Sharjah. Designed for modern families seeking space, privacy, and premium amenities, these villas offer the perfect blend of contemporary design and comfortable living.",
        "Nestled within a gated community surrounded by lush green landscapes, Masaar 3 provides residents with access to world-class facilities, parks, and recreational areas while maintaining the tranquility and security that families desire.",
      ],
      brochures: [
        {
          title: "Phase 1 Brochure",
          url: "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph1%20%20Brochure.pdf",
          type: "phase1",
          icon: "📘",
          color: "#3A7BD5",
          size: "12.5 MB",
          category: "Phase 1",
          fileName: "Masaar 3 Phase 1 Brochure.pdf",
          description: "Complete details for Phase 1 villas and community",
        },
        // {
        //   title: "Phase 2 Brochure",
        //   url: "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph2%20%20Brochure.pdf",
        //   type: "phase2",
        //   icon: "📗",
        //   color: "#2E8B57",
        //   size: "11.8 MB",
        //   category: "Phase 2",
        //   fileName: "Masaar 3 Phase 2 Brochure.pdf",
        //   description: "Complete details for Phase 2 villas and amenities",
        // },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/massar-3/intro-main.jpg",
      imgAlt: "Masaar 3 luxury villas exterior and community views",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏡",
          value: "3 & 5 BR",
          label: "Villa Types",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌿",
          value: "Gated Community",
          label: "Secure Living",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🏙️",
          value: "Sharjah",
          label: "Prime Location",
        },
      ],
    },
    gallery: {
      title: "A Visual Symphony",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/massar-3/hero-inset.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-03.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-04.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-05.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-06.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-07.jpg",
      ],
      projectTag: "Masaar 3",
    },

    floorPlans: {
      type: "villas",
      plans: [
        {
          id: "3br-townhouse",
          bedrooms: 3,
          shortLabel: "3BR Townhouse",
          title: "3 Bedroom Townhouse",
          specs: {
            "Total Area": "2,342 SQ.FT.",
            "Starting Price": "AED 2,925,000",
            Handover: "Q4 2028",
            "Payment Plan": "40% / 60%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%203br%20ground%20penthouse%20floor%20plan.png",
          ],
        },
        {
          id: "4br-villa",
          bedrooms: 4,
          shortLabel: "4BR Villa",
          title: "4 Bedroom Villa",
          specs: {
            "Total Area": "3,765 - 4,356 SQ.FT.",
            "Starting Price": "AED 4,460,000 - 5,610,000",
            Handover: "Q4 2028",
            "Payment Plan": "40% / 60%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%204BR%20%20Ground%20Villa%20Floor%20plan.png",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph1%20%20Brochure.pdf",
    },

    // ================= Floor Plans (AR) =================

    pricing: {
      title: "Pricing & Availability",
      units: [
        {
          type: "3 Bedroom Villa",
          totalArea: 3563,
          plotArea: 3765,
          startingPrice: 4395000,
          handover: "Q4 2028",
          availability: "Limited Units",
        },
        {
          type: "5 Bedroom Villa",
          totalArea: 7048,
          plotArea: 5142,
          startingPrice: 5895000,
          handover: "Q4 2028",
          availability: "Limited Units",
        },
      ],
      paymentPlan: {
        title: "Payment Plan",
        phases: [
          { phase: "Down Payment", percentage: "10%", timing: "On Booking" },
          {
            phase: "During Construction",
            percentage: "60%",
            timing: "Over 4 Years",
          },
          {
            phase: "On Handover",
            percentage: "30%",
            timing: "Upon Completion",
          },
        ],
      },
    },
    amenities: {
      title: "Community Amenities & Facilities",
      amenities: [
        { label: "SWIMMING POOLS", icon: "🏊", color: "#d7b46a" },
        { label: "FITNESS CENTER", icon: "💪", color: "#d7b46a" },
        { label: "CHILDREN'S PLAY AREAS", icon: "👶", color: "#d7b46a" },
        { label: "LANDSCAPED PARKS", icon: "🌿", color: "#d7b46a" },
        { label: "JOGGING TRACKS", icon: "🏃", color: "#d7b46a" },
        { label: "CYCLING PATHS", icon: "🚴", color: "#d7b46a" },
        { label: "SPORTS FACILITIES", icon: "🎾", color: "#d7b46a" },
        { label: "PADEL COURTS", icon: "🎾", color: "#d7b46a" },
        { label: "TENNIS COURTS", icon: "🎾", color: "#d7b46a" },
        { label: "BASKETBALL COURT", icon: "🏀", color: "#d7b46a" },
        { label: "FOOTBALL PITCH", icon: "⚽", color: "#d7b46a" },
        { label: "BARBEQUE AREAS", icon: "🍖", color: "#d7b46a" },
        { label: "PICNIC SPOTS", icon: "🧺", color: "#d7b46a" },
        { label: "COMMUNITY CENTER", icon: "🏛️", color: "#d7b46a" },
        { label: "CLUBHOUSE", icon: "🏠", color: "#d7b46a" },
        { label: "RETAIL OUTLETS", icon: "🛍️", color: "#d7b46a" },
        { label: "CAFÉS & RESTAURANTS", icon: "☕", color: "#d7b46a" },
        { label: "KIDS SPLASH PARK", icon: "💦", color: "#d7b46a" },
        { label: "INDOOR PLAYROOM", icon: "🎮", color: "#d7b46a" },
        { label: "ADULT POOL", icon: "💦", color: "#d7b46a" },
        { label: "KIDS POOL", icon: "👧", color: "#d7b46a" },
        { label: "SPA FACILITIES", icon: "💆", color: "#d7b46a" },
        { label: "SAUNA & STEAM ROOM", icon: "🧖", color: "#d7b46a" },
        { label: "YOGA LAWN", icon: "🧘", color: "#d7b46a" },
        { label: "MEDITATION GARDEN", icon: "🎋", color: "#d7b46a" },
        { label: "EVENT LAWN", icon: "🎪", color: "#d7b46a" },
        { label: "WEDDING VENUE", icon: "💒", color: "#d7b46a" },
        { label: "BUSINESS CENTER", icon: "💼", color: "#d7b46a" },
        { label: "CO-WORKING SPACES", icon: "👨‍💻", color: "#d7b46a" },
        { label: "LIBRARY", icon: "📚", color: "#d7b46a" },
        { label: "CONCIERGE SERVICES", icon: "🎩", color: "#d7b46a" },
        { label: "24/7 SECURITY", icon: "🔒", color: "#d7b46a" },
        { label: "GATED COMMUNITY", icon: "🏘️", color: "#d7b46a" },
        { label: "VALET PARKING", icon: "🅿️", color: "#d7b46a" },
        { label: "ELECTRIC CAR CHARGING", icon: "⚡", color: "#d7b46a" },
      ],
    },
    location: {
      title: "Project Location",
      projectName: "Masaar 3",
      address: "Masaar, Sharjah, UAE",
      lat: 25.305,
      lng: 55.455,
      zoom: 13,
      proximityFeatures: [
        { icon: "⏱️", text: "20 min from Sharjah City" },
        { icon: "🏙️", text: "15 min to Dubai Border" },
        { icon: "🛣️", text: "Easy Highway Access" },
        { icon: "🌿", text: "Lush Green Community" },
      ],
    },
    nearbyAttractions: {
      title: "Strategic Location",
      attractions: [
        {
          name: "Sharjah City Center",
          distance: "15 km",
          time: "20 min",
          icon: "🏙️",
        },
        { name: "Dubai Border", distance: "12 km", time: "15 min", icon: "🛣️" },
        {
          name: "University City",
          distance: "8 km",
          time: "12 min",
          icon: "🎓",
        },
        {
          name: "Sharjah Airport",
          distance: "18 km",
          time: "22 min",
          icon: "✈️",
        },
        { name: "Al Qasba", distance: "16 km", time: "20 min", icon: "🎡" },
        {
          name: "Khalid Lagoon",
          distance: "14 km",
          time: "18 min",
          icon: "🌊",
        },
      ],
    },
    developer: {
      title: "About Arada",
      name: "Arada",
      description:
        "Arada is a master developer based in Sharjah, committed to creating integrated communities that offer high-quality living experiences with a focus on sustainability, innovation, and community well-being.",
      projects: ["Masaar", "Nasma Residences", "Aljada", "Naseej District"],
      logo: "https://luxury-real-estate-media.b-cdn.net/developers/arada-logo.png",
      established: 2017,
    },
  },
  ar: {
    seo: {
      title: "مسار 3 | فلل فاخرة 3 و5 غرف نوم في الشارقة | Arada",
      description:
        "فلل فاخرة 3 و5 غرف نوم في مسار 3 بالشارقة. مجتمع gated متكامل مع مساحات خضراء واسعة، مرافق عائلية، وخدمات راقية من أرادَ للتطوير العقاري.",
      keywords:
        "مسار 3, Masaar 3, Arada, فلل فاخرة الشارقة, فلل 3 غرف, فلل 5 غرف, مسار المرحلة الثالثة, أرادَ الشارقة, فلل عائلية في الشارقة",
      canonical: "/properties/villas/arada/massar",
    },
    project: {
      name: "مسار 3",
      developer: "Arada",
      location: "الشارقة، الإمارات",
      status: "تحت الإنشاء",
      startingPrice: 4395000,
      completionDate: "الربع الرابع 2028",
      type: "فلل فاخرة",
      units: "فلل 3 و5 غرف نوم",
    },
    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/massar-3/hero-bg.jpg",
      squareImageUrl: "/arada-developer.avif",
      companyName: "Arada",
      rating: 4.6,
    },
    intro: {
      title: "حياة عائلية أنيقة في الشارقة",
      paragraphs: [
        "يقدّم مسار 3 مجموعة مميّزة من الفلل الفاخرة تضم 3 و5 غرف نوم ضمن مجتمع مسار المتكامل في الشارقة. صُمّمت هذه الفلل للعائلات التي تبحث عن خصوصية، رحابة، وتخطيط عملي يناسب أسلوب الحياة العصري.",
        "يحتضن المشروع مجتمعًا مسوّرًا محاطًا بالمساحات الخضراء، مع مرافق ترفيهية ورياضية وحدائق وممرات مشي، ما يوفّر بيئة هادئة وآمنة للعائلة دون البعد عن الخدمات الحيوية في الإمارة.",
      ],
      brochures: [
        {
          title: "كتيّب المرحلة الأولى",
          url: "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph1%20%20Brochure.pdf",
          type: "phase1",
          icon: "📘",
          color: "#3A7BD5",
          size: "12.5 MB",
          category: "المرحلة 1",
          fileName: "Masaar 3 Phase 1 Brochure.pdf",
          description: "تفاصيل فلل المرحلة الأولى ومرافق المجتمع",
        },
        {
          title: "كتيّب المرحلة الثانية",
          url: "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph2%20%20Brochure.pdf",
          type: "phase2",
          icon: "📗",
          color: "#2E8B57",
          size: "11.8 MB",
          category: "المرحلة 2",
          fileName: "Masaar 3 Phase 2 Brochure.pdf",
          description: "تفاصيل فلل ومرافق المرحلة الثانية في مسار 3",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/massar-3/intro-main.jpg",
      imgAlt: "فلل مسار 3 الفاخرة مع إطلالات على المجتمع والمساحات الخضراء",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏡",
          value: "3 و5 غرف",
          label: "أنواع الفلل",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌿",
          value: "مجتمع مسوّر",
          label: "حياة آمنة",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🏙️",
          value: "الشارقة",
          label: "موقع مميّز",
        },
      ],
    },
    gallery: {
      title: "رحلة بصرية داخل مسار 3",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/massar-3/hero-inset.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-03.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-04.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-05.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-06.jpg",
        "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-07.jpg",
      ],
      projectTag: "Masaar 3",
    },
    // ===============================
    // MASAAR 3 — FLOOR PLANS (AR) ✅ تاون هاوس / فيلا (بدون بنتهاوس)
    // (مطابق لنفس الـ IDs + نفس روابط الصور اللي عندك)
    // ===============================
    // ARABIC
    // ================= Floor Plans (EN) ================

    floorPlans: {
      type: "فيلات",
      plans: [
        {
          id: "3br-townhouse",
          bedrooms: 3,
          shortLabel: "تاون هاوس 3غ",
          title: "تاون هاوس 3 غرف نوم",
          specs: {
            "المساحة الإجمالية": "2,342 قدم²",
            "السعر الابتدائي": "2,925,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة الدفع": "5% / 35% / 60%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%203br%20ground%20penthouse%20floor%20plan.png",
          ],
        },
        {
          id: "4br-villa",
          bedrooms: 4,
          shortLabel: "فيلا 4غ",
          title: "فيلا 4 غرف نوم",
          specs: {
            "المساحة الإجمالية": "3,765 - 4,356 قدم²",
            "السعر الابتدائي": "4,460,000 - 5,610,000 درهم",
            "موعد التسليم": "الربع الرابع 2028",
            "خطة الدفع": "5% / 35% / 60%",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%204BR%20%20Ground%20Villa%20Floor%20plan.png",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph1%20%20Brochure.pdf",
    },

    pricing: {
      title: "الأسعار والتوافر",
      units: [
        {
          type: "فيلا 3 غرف نوم",
          totalArea: 3563,
          plotArea: 3765,
          startingPrice: 4395000,
          handover: "الربع الرابع 2028",
          availability: "وحدات محدودة",
        },
        {
          type: "فيلا 5 غرف نوم",
          totalArea: 7048,
          plotArea: 5142,
          startingPrice: 5895000,
          handover: "الربع الرابع 2028",
          availability: "وحدات محدودة",
        },
      ],
      paymentPlan: {
        title: "خطة الدفع",
        phases: [
          { phase: "دفعة أولى", percentage: "10%", timing: "عند الحجز" },
          {
            phase: "أثناء الإنشاء",
            percentage: "60%",
            timing: "على مدار 4 سنوات",
          },
          {
            phase: "عند التسليم",
            percentage: "30%",
            timing: "عند اكتمال المشروع",
          },
        ],
      },
    },
    amenities: {
      title: "مرافق المجتمع والخدمات",
      amenities: [
        { label: "مسابح", icon: "🏊", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "مناطق ألعاب للأطفال", icon: "👶", color: "#d7b46a" },
        { label: "حدائق ومسطحات خضراء", icon: "🌿", color: "#d7b46a" },
        { label: "مسارات للركض", icon: "🏃", color: "#d7b46a" },
        { label: "مسارات للدراجات", icon: "🚴", color: "#d7b46a" },
        { label: "مرافق رياضية متعددة", icon: "🎾", color: "#d7b46a" },
        { label: "ملعب بادل", icon: "🎾", color: "#d7b46a" },
        { label: "ملعب تنس", icon: "🎾", color: "#d7b46a" },
        { label: "ملعب كرة سلة", icon: "🏀", color: "#d7b46a" },
        { label: "ملعب كرة قدم", icon: "⚽", color: "#d7b46a" },
        { label: "مناطق للشواء", icon: "🍖", color: "#d7b46a" },
        { label: "مناطق للنزهات", icon: "🧺", color: "#d7b46a" },
        { label: "مركز مجتمعي", icon: "🏛️", color: "#d7b46a" },
        { label: "كلوب هاوس", icon: "🏠", color: "#d7b46a" },
        { label: "محال تجارية", icon: "🛍️", color: "#d7b46a" },
        { label: "مقاهي ومطاعم", icon: "☕", color: "#d7b46a" },
        { label: "منطقة ألعاب مائية للأطفال", icon: "💦", color: "#d7b46a" },
        { label: "غرفة ألعاب داخلية", icon: "🎮", color: "#d7b46a" },
        { label: "مسبح للكبار", icon: "💦", color: "#d7b46a" },
        { label: "مسبح للأطفال", icon: "👧", color: "#d7b46a" },
        { label: "مرافق سبا", icon: "💆", color: "#d7b46a" },
        { label: "ساونا وغرفة بخار", icon: "🧖", color: "#d7b46a" },
        { label: "ساحة يوغا", icon: "🧘", color: "#d7b46a" },
        { label: "حديقة للتأمل", icon: "🎋", color: "#d7b46a" },
        { label: "مساحة للفعاليات", icon: "🎪", color: "#d7b46a" },
        { label: "منطقة للمناسبات الخاصة", icon: "💒", color: "#d7b46a" },
        { label: "مركز أعمال", icon: "💼", color: "#d7b46a" },
        { label: "مساحات عمل مشتركة", icon: "👨‍💻", color: "#d7b46a" },
        { label: "مكتبة", icon: "📚", color: "#d7b46a" },
        { label: "خدمات كونسيرج", icon: "🎩", color: "#d7b46a" },
        { label: "أمن على مدار الساعة", icon: "🔒", color: "#d7b46a" },
        { label: "مجتمع مسوّر", icon: "🏘️", color: "#d7b46a" },
        { label: "خدمة صف السيارات", icon: "🅿️", color: "#d7b46a" },
        { label: "محطات شحن سيارات كهربائية", icon: "⚡", color: "#d7b46a" },
      ],
    },
    location: {
      title: "موقع المشروع",
      projectName: "مسار 3",
      address: "مسار، الشارقة، الإمارات العربية المتحدة",
      lat: 25.305,
      lng: 55.455,
      zoom: 13,
      proximityFeatures: [
        { icon: "⏱️", text: "20 دقيقة من قلب مدينة الشارقة" },
        { icon: "🏙️", text: "15 دقيقة إلى حدود دبي" },
        { icon: "🛣️", text: "وصول سهل إلى الطرق السريعة" },
        { icon: "🌿", text: "مجتمع أخضر هادئ" },
      ],
    },
    nearbyAttractions: {
      title: "موقع استراتيجي",
      attractions: [
        {
          name: "مدينة الشارقة",
          distance: "15 كم",
          time: "20 دقيقة",
          icon: "🏙️",
        },
        { name: "حدود دبي", distance: "12 كم", time: "15 دقيقة", icon: "🛣️" },
        {
          name: "المدينة الجامعية",
          distance: "8 كم",
          time: "12 دقيقة",
          icon: "🎓",
        },
        {
          name: "مطار الشارقة",
          distance: "18 كم",
          time: "22 دقيقة",
          icon: "✈️",
        },
        { name: "القصباء", distance: "16 كم", time: "20 دقيقة", icon: "🎡" },
        { name: "بحيرة خالد", distance: "14 كم", time: "18 دقيقة", icon: "🌊" },
      ],
    },
    developer: {
      title: "عن أرادَ",
      name: "Arada",
      description:
        "أرادَ هي مطور رئيسي مقره الشارقة، تركز على تطوير مجتمعات سكنية متكاملة تجمع بين التصميم العصري، جودة الحياة، والاستدامة، مع اهتمام خاص بتجربة السكان اليومية.",
      projects: ["Masaar", "Nasma Residences", "Aljada", "Naseej District"],
      logo: "https://luxury-real-estate-media.b-cdn.net/developers/arada-logo.png",
      established: 2017,
    },
  },
};
