// src/data/projects/penthouses/sobha/the-s/the-s.js

export const sobhaTheSData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "The S Tower by Sobha Realty | 4 & 5 Bedroom Luxury Residences on Sheikh Zayed Road",
      description:
        "The S Tower by Sobha Realty is a luxury residential tower on Sheikh Zayed Road, Dubai, offering 4 & 5 bedroom residences with views over the sea, golf course and Dubai skyline, plus curated indoor and outdoor lifestyle amenities.",
      keywords:
        "The S Tower, The S Sobha, Sobha The S, Sheikh Zayed Road residences, Dubai luxury apartments, 4 bedroom, 5 bedroom, sky villa, Sobha Realty",
      canonical: "/projects/penthouses/sobha/the-s",
    },

    project: {
      name: "The S Tower",
      developer: "Sobha Realty",
      location:
        "Sheikh Zayed Road, Al Safouh Second, Dubai (Dubai Internet City area)",
      // Delivery date is published on the referenced listing source
      status: "Off-Plan",
      startingPrice: "From AED 16,000,000",
      completionDate: "Delivery: June 2025",
      type: "High-rise Residences (Apartments / Sky Villas / Penthouses)",
      units: "4 & 5 Bedroom Residences",
      // Published counts on the referenced listing source
      totalResidences: "82 residences + 2 penthouses",
    },

    hero: {
      // Use your Bunny CDN folder (based on your storage screenshot path: sobha-the-s)
      // ✅ Change BASE_MEDIA if your folder name differs.
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/4SZR_view_Night_2_Option_1.jpg",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/the-s.svg",
      companyName: "Sobha Realty",
      rating: 4.8, // (site display value)
    },

    intro: {
      title: "Your Signature Residence on Sheikh Zayed Road",
      paragraphs: [
        "Positioned on Sheikh Zayed Road, The S Tower is designed around expansive views—overlooking the sea, golf course and Dubai skyline.",
        "The tower’s lifestyle offering includes indoor experiences such as The S Café, steam & sauna, library & lounge area, a gym, and a children’s day care centre, complemented by outdoor experiences including a temperature-controlled infinity-edge pool, jacuzzi, outdoor cinema, outdoor gym, children’s play area and a meditation corner.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          // Official brochure link from Sobha Realty page
          url: "https://sobharealty.com/sites/default/files/2024-11/28.%20The%20S%20Tower%20-%205%20Dec%202023.pdf",
          type: "main",
          icon: "📘",
          color: "#1A5F7A",
          size: "≈ 15–20 MB",
          category: "Residences",
          fileName: "The S Tower Brochure (5 Dec 2023).pdf",
          description:
            "Official The S Tower brochure with lifestyle amenities and detailed floor & unit plan saleable areas.",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/5_Bottom_up_shot.jpg",
      imgAlt: "The S Tower exterior view on Sheikh Zayed Road, Dubai.",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "Sea Views",
          label: "Panoramic outlook",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "⛳",
          value: "Golf Views",
          label: "Overlooking greenery",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏙️",
          value: "Skyline",
          label: "Dubai landmarks",
        },
      ],
    },

    gallery: {
      title: "Views of Sea, Golf & Skyline",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/11_4_BR_Bedroom_shot_overlooking_the_Palm_and_Sea_Burj_AL_Arab.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/18_4_BR_Landscape_Court_shot_overlooking_the_Palm_and_Sea.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/2_Golf_Views.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/2Golf_Views_Option_2A.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/3_Marina_Option_1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/4SZR_view_Night_2_Option_1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/5_Bottom_up_shot.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/9_3_BR_Bedroom_shat_overlooking_the_Marina_Palm_and_Sea.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/Living.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/Revised_S_with_Sea_in_the_back.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/S_final.jpg",
        // IMPORTANT: spaces must be URL-encoded (%20) — and your file is "Sky Garden copy.jpg"
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/Sky%20Garden%20copy.jpg",
      ],
      projectTag: "The S Tower – Sheikh Zayed Road",
    },

    floorPlans: {
      type: "residences (4 & 5 bedroom)",
      // NOTE: Plan images are optional — you can add floorplan image URLs later if you upload them to CDN.
      plans: [
        {
          id: "4br-type-c",
          title: "4 Bedroom Residence (Type C)",
          bedrooms: 4,
          specs: {
            Level: "55",
            "Total Units (this plan)": "1",
            "Suite Area": "4,573.03 sq.ft.",
            Balcony: "132.93 sq.ft.",
            "Total Unit": "4,705.96 sq.ft.",
            "Additional Store": "865.00 sq.ft.",
            "Additional Staff Accommodation": "800.00 sq.ft.",
            "Total Saleable Area": "6,370.96 sq.ft.",
          },
          images: [],
          features: ["Sea view + SZR view (per plan page)."],
        },
        {
          id: "4br-type-d",
          title: "4 Bedroom Residence (Type D)",
          bedrooms: 4,
          specs: {
            Level: "56",
            "Total Units (this plan)": "1",
            "Suite Area": "4,640.05 sq.ft.",
            Balcony: "131.32 sq.ft.",
            "Total Unit": "4,771.37 sq.ft.",
            "Additional Store": "575.00 sq.ft.",
            "Additional Staff Accommodation": "821.00 sq.ft.",
            "External Store (same level)": "53.17 sq.ft.",
            "Total Saleable Area": "6,220.54 sq.ft.",
          },
          images: [],
          features: ["Sea view + SZR view (per plan page)."],
        },
        {
          id: "4br-type-e",
          title: "4 Bedroom Residence (Type E)",
          bedrooms: 4,
          specs: {
            Level: "56",
            "Total Units (this plan)": "1",
            "Suite Area": "4,968.03 sq.ft.",
            Balcony: "129.49 sq.ft.",
            "Total Unit": "5,097.52 sq.ft.",
            "Additional Staff Accommodation": "725.00 sq.ft.",
            "External Store (same level)": "53.17 sq.ft.",
            "Total Saleable Area": "5,875.69 sq.ft.",
          },
          images: [],
          features: ["Sea view + SZR view (per plan page)."],
        },
        {
          id: "4br-type-f",
          title: "4 Bedroom Residence (Type F)",
          bedrooms: 4,
          specs: {
            Level: "57",
            "Total Units (this plan)": "1",
            "Suite Area": "4,635.98 sq.ft.",
            Balcony: "133.04 sq.ft.",
            "Total Unit": "4,769.02 sq.ft.",
            "Additional Store": "985.00 sq.ft.",
            "Additional Staff Accommodation": "910.00 sq.ft.",
            "External Store (same level)": "53.17 sq.ft.",
            "Total Saleable Area": "6,717.19 sq.ft.",
          },
          images: [],
          features: ["Sea view + SZR view (per plan page)."],
        },
        {
          id: "4br-type-g",
          title: "4 Bedroom Residence (Type G)",
          bedrooms: 4,
          specs: reedOnly({
            Level: "57",
            "Total Units (this plan)": "1",
            "Suite Area": "5,309.19 sq.ft.",
            Balcony: "129.49 sq.ft.",
            "Total Unit": "5,438.68 sq.ft.",
            "Additional Staff Accommodation": "745.00 sq.ft.",
            "External Store (same level)": "53.17 sq.ft.",
            "Total Saleable Area": "6,236.85 sq.ft.",
          }),
          images: [],
          features: ["Sea view + SZR view (per plan page)."],
        },
        {
          id: "5br-type-b",
          title: "5 Bedroom Residence (Type B)",
          bedrooms: 5,
          specs: {
            Level: "58 & 59",
            "Total Units (this plan)": "2",
            "Suite Area": "11,010.73 sq.ft.",
            Balcony: "259.30 sq.ft.",
            "Total Unit": "11,270.03 sq.ft.",
            "Additional Staff Accommodation Range": "1,200.00–1,225.00 sq.ft.",
            "External Store (same level)": "106.35 sq.ft.",
            "Total Saleable Area Range": "13,186.38–13,226.38 sq.ft.",
          },
          images: [],
          features: ["Sea view + SZR view (per plan page)."],
        },
      ],
      brochureHref:
        "https://sobharealty.com/sites/default/files/2024-11/28.%20The%20S%20Tower%20-%205%20Dec%202023.pdf",
    },

    amenities: {
      title: "Curated Indoor & Outdoor Experiences",
      amenities: [
        { label: "The S Café", icon: "☕", color: "#d7b46a" },
        { label: "Steam & Sauna", icon: "🧖", color: "#d7b46a" },
        { label: "Library & Lounge Area", icon: "📚", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Children’s Day Care Centre", icon: "🧸", color: "#d7b46a" },

        {
          label: "Temperature-Controlled Infinity-Edge Pool",
          icon: "🏊",
          color: "#d7b46a",
        },
        { label: "Jacuzzi", icon: "🫧", color: "#d7b46a" },
        { label: "Outdoor Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Outdoor Gym", icon: "🏋️", color: "#d7b46a" },
        { label: "Children’s Play Area", icon: "🛝", color: "#d7b46a" },
        { label: "Meditation Corner", icon: "🧘", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "The S Tower – Sheikh Zayed Road, Dubai",
      address: "4/1, Al Jaddi Street, Al Safouh Second, Jumeirah, Dubai",
      // Coordinates source (building pin)
      lat: 25.099577,
      lng: 55.168362,
      zoom: 15,
      proximityFeatures: [
        { icon: "🛣️", text: "On Sheikh Zayed Road." },
        {
          icon: "🌊",
          text: "Views over the sea, golf course and Dubai skyline.",
        },
        {
          icon: "🎓",
          text: "Close to schools (as listed under “essentials in proximity”).",
        },
      ],
    },

    nearbyAttractions: {
      title: "Nearby & Well-Connected",
      attractions: [
        { name: "Palm Jumeirah", time: "≈ 9 minutes", icon: "🌴" },
        { name: "Dubai Mall", time: "≈ 15 minutes", icon: "🛍️" },
        { name: "Burj Khalifa", time: "≈ 15 minutes", icon: "🏙️" },
        {
          name: "Dubai International Airport (DXB)",
          time: "≈ 22 minutes",
          icon: "✈️",
        },
      ],
    },

    cta: {
      title: "Interested in The S Tower?",
      description:
        "Share your details to receive updated availability, pricing, and the latest floor plans for The S Tower on Sheikh Zayed Road.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title:
        "برج ذا إس من شوبا العقارية | وحدات فاخرة 4 و5 غرف نوم على شارع الشيخ زايد",
      description:
        "برج ذا إس من شوبا العقارية هو برج سكني فاخر على شارع الشيخ زايد في دبي، يقدم وحدات 4 و5 غرف نوم بإطلالات على البحر وملعب الغولف وأفق دبي، مع مرافق داخلية وخارجية مختارة بعناية.",
      keywords:
        "ذا إس, برج ذا إس, شوبا ذا إس, شوبا العقارية, شارع الشيخ زايد, شقق فاخرة دبي, 4 غرف, 5 غرف, سكاي فيلا, بنتهاوس",
      canonical: "/projects/penthouses/sobha/the-s",
    },

    project: {
      name: "برج ذا إس",
      developer: "شوبا العقارية",
      location: "شارع الشيخ زايد، الصفوح الثانية، دبي (منطقة دبي إنترنت سيتي)",
      status: "قيد الإنشاء",
      startingPrice: "تبدأ الأسعار من 16,000,000 درهم",
      completionDate: "التسليم: يونيو 2025",
      type: "برج سكني فاخر (شقق/سكاي فيلا/بنتهاوس)",
      units: "وحدات 4 و5 غرف نوم",
      totalResidences: "82 وحدة سكنية + 2 بنتهاوس",
    },

    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/4SZR_view_Night_2_Option_1.jpg",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/the-s.svg",
      companyName: "شوبا العقارية",
      rating: 4.8,
    },

    intro: {
      title: "عنوانك المميز على شارع الشيخ زايد",
      paragraphs: [
        "يقع برج ذا إس على شارع الشيخ زايد، وقد صُمم حول إطلالات واسعة تشمل البحر وملعب الغولف وأفق دبي.",
        "يضم البرج تجارب داخلية مثل مقهى ذا إس، البخار والساونا، مكتبة ولاونج، نادي رياضي، ومركز رعاية للأطفال، إلى جانب تجارب خارجية تشمل مسبح إنفينيتي مُتحكم بدرجته، جاكوزي، سينما خارجية، جيم خارجي، منطقة لعب للأطفال وركن للتأمل.",
      ],
      brochures: [
        {
          title: "تحميل البروشور",
          url: "https://sobharealty.com/sites/default/files/2024-11/28.%20The%20S%20Tower%20-%205%20Dec%202023.pdf",
          type: "main",
          icon: "📘",
          color: "#1A5F7A",
          size: "≈ 15–20 ميغابايت",
          category: "وحدات سكنية",
          fileName: "The S Tower Brochure (5 Dec 2023).pdf",
          description:
            "البروشور الرسمي لبرج ذا إس مع المرافق ومخططات الوحدات ومساحات البيع.",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/5_Bottom_up_shot.jpg",
      imgAlt: "إطلالة خارجية لبرج ذا إس على شارع الشيخ زايد في دبي.",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🌊",
          value: "إطلالات بحرية",
          label: "مناظر بانورامية",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "⛳",
          value: "إطلالة غولف",
          label: "مساحات خضراء",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏙️",
          value: "أفق دبي",
          label: "معالم المدينة",
        },
      ],
    },

    gallery: {
      title: "إطلالات على البحر والغولف وأفق دبي",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/2Golf_Views_Option_2A.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/3_Marina_Option_1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/4SZR_view_Night_2_Option_1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/5_Bottom_up_shot.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/S_final.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-the-s/Sky%20Garden%20copy.jpg",
      ],
      projectTag: "برج ذا إس – شارع الشيخ زايد",
    },

    floorPlans: {
      type: "وحدات سكنية (4 و5 غرف نوم)",
      plans: [
        {
          id: "4br-type-c",
          title: "وحدة 4 غرف نوم (Type C)",
          bedrooms: 4,
          specs: {
            الطابق: "55",
            "عدد الوحدات (لهذا المخطط)": "1",
            "مساحة السويت": "4,573.03 قدم²",
            الشرفة: "132.93 قدم²",
            "إجمالي الوحدة": "4,705.96 قدم²",
            "مخزن إضافي": "865.00 قدم²",
            "سكن موظفين إضافي": "800.00 قدم²",
            "إجمالي مساحة البيع": "6,370.96 قدم²",
          },
          images: [],
          features: ["إطلالة بحر + شارع الشيخ زايد (حسب صفحة المخطط)."],
        },
        {
          id: "4br-type-d",
          title: "وحدة 4 غرف نوم (Type D)",
          bedrooms: 4,
          specs: {
            الطابق: "56",
            "عدد الوحدات (لهذا المخطط)": "1",
            "مساحة السويت": "4,640.05 قدم²",
            الشرفة: "131.32 قدم²",
            "إجمالي الوحدة": "4,771.37 قدم²",
            "مخزن إضافي": "575.00 قدم²",
            "سكن موظفين إضافي": "821.00 قدم²",
            "مخزن خارجي (نفس الطابق)": "53.17 قدم²",
            "إجمالي مساحة البيع": "6,220.54 قدم²",
          },
          images: [],
          features: ["إطلالة بحر + شارع الشيخ زايد (حسب صفحة المخطط)."],
        },
        {
          id: "4br-type-e",
          title: "وحدة 4 غرف نوم (Type E)",
          bedrooms: 4,
          specs: {
            الطابق: "56",
            "عدد الوحدات (لهذا المخطط)": "1",
            "مساحة السويت": "4,968.03 قدم²",
            الشرفة: "129.49 قدم²",
            "إجمالي الوحدة": "5,097.52 قدم²",
            "سكن موظفين إضافي": "725.00 قدم²",
            "مخزن خارجي (نفس الطابق)": "53.17 قدم²",
            "إجمالي مساحة البيع": "5,875.69 قدم²",
          },
          images: [],
          features: ["إطلالة بحر + شارع الشيخ زايد (حسب صفحة المخطط)."],
        },
        {
          id: "4br-type-f",
          title: "وحدة 4 غرف نوم (Type F)",
          bedrooms: 4,
          specs: {
            الطابق: "57",
            "عدد الوحدات (لهذا المخطط)": "1",
            "مساحة السويت": "4,635.98 قدم²",
            الشرفة: "133.04 قدم²",
            "إجمالي الوحدة": "4,769.02 قدم²",
            "مخزن إضافي": "985.00 قدم²",
            "سكن موظفين إضافي": "910.00 قدم²",
            "مخزن خارجي (نفس الطابق)": "53.17 قدم²",
            "إجمالي مساحة البيع": "6,717.19 قدم²",
          },
          images: [],
          features: ["إطلالة بحر + شارع الشيخ زايد (حسب صفحة المخطط)."],
        },
        {
          id: "4br-type-g",
          title: "وحدة 4 غرف نوم (Type G)",
          bedrooms: 4,
          specs: {
            الطابق: "57",
            "عدد الوحدات (لهذا المخطط)": "1",
            "مساحة السويت": "5,309.19 قدم²",
            الشرفة: "129.49 قدم²",
            "إجمالي الوحدة": "5,438.68 قدم²",
            "سكن موظفين إضافي": "745.00 قدم²",
            "مخزن خارجي (نفس الطابق)": "53.17 قدم²",
            "إجمالي مساحة البيع": "6,236.85 قدم²",
          },
          images: [],
          features: ["إطلالة بحر + شارع الشيخ زايد (حسب صفحة المخطط)."],
        },
        {
          id: "5br-type-b",
          title: "وحدة 5 غرف نوم (Type B)",
          bedrooms: 5,
          specs: {
            الطابق: "58 و59",
            "عدد الوحدات (لهذا المخطط)": "2",
            "مساحة السويت": "11,010.73 قدم²",
            الشرفة: "259.30 قدم²",
            "إجمالي الوحدة": "11,270.03 قدم²",
            "نطاق سكن الموظفين الإضافي": "1,200.00–1,225.00 قدم²",
            "مخزن خارجي (نفس الطابق)": "106.35 قدم²",
            "نطاق إجمالي مساحة البيع": "13,186.38–13,226.38 قدم²",
          },
          images: [],
          features: ["إطلالة بحر + شارع الشيخ زايد (حسب صفحة المخطط)."],
        },
      ],
      brochureHref:
        "https://sobharealty.com/sites/default/files/2024-11/28.%20The%20S%20Tower%20-%205%20Dec%202023.pdf",
    },

    amenities: {
      title: "تجارب داخلية وخارجية مختارة",
      amenities: [
        { label: "مقهى ذا إس", icon: "☕", color: "#d7b46a" },
        { label: "بخار وساونا", icon: "🧖", color: "#d7b46a" },
        { label: "مكتبة ولاونج", icon: "📚", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "مركز رعاية للأطفال", icon: "🧸", color: "#d7b46a" },

        { label: "مسبح إنفينيتي مُتحكم بدرجته", icon: "🏊", color: "#d7b46a" },
        { label: "جاكوزي", icon: "🫧", color: "#d7b46a" },
        { label: "سينما خارجية", icon: "🎬", color: "#d7b46a" },
        { label: "جيم خارجي", icon: "🏋️", color: "#d7b46a" },
        { label: "منطقة لعب للأطفال", icon: "🛝", color: "#d7b46a" },
        { label: "ركن للتأمل", icon: "🧘", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "برج ذا إس – شارع الشيخ زايد، دبي",
      address: "4/1 شارع الجدي، الصفوح الثانية، جميرا، دبي",
      lat: 25.099577,
      lng: 55.168362,
      zoom: 15,
      proximityFeatures: [
        { icon: "🛣️", text: "مباشرة على شارع الشيخ زايد." },
        { icon: "🌊", text: "إطلالات على البحر وملعب الغولف وأفق دبي." },
        { icon: "🎓", text: "قريب من المدارس (حسب قسم القرب من الأساسيات)." },
      ],
    },

    nearbyAttractions: {
      title: "قريب ومتصّل بأهم الوجهات",
      attractions: [
        { name: "نخلة جميرا", time: "حوالي 9 دقائق", icon: "🌴" },
        { name: "دبي مول", time: "حوالي 15 دقيقة", icon: "🛍️" },
        { name: "برج خليفة", time: "حوالي 15 دقيقة", icon: "🏙️" },
        { name: "مطار دبي الدولي", time: "حوالي 22 دقيقة", icon: "✈️" },
      ],
    },

    cta: {
      title: "مهتم ببرج ذا إس؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوافر والأسعار وأحدث مخططات الوحدات لبرج ذا إس على شارع الشيخ زايد.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل البروشور", action: "download-brochure" },
      ],
    },
  },
};

// Small helper to prevent accidental mutation in specs (optional).
function reedOnly(obj) {
  return Object.freeze({ ...obj });
}
