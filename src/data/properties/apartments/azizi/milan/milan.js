// src/data/properties/apartments/azizi/milan/milan.js
// ✅ Updated with the EXACT Bunny filenames from your screenshot (floor plans + brochure).
// ✅ Floor plan AREAS + Handover + Payment Plan are EXACTLY from the data you gave.
// ✅ Starting prices used ONLY from the text you pasted (Price from + Unit ranges).

const BUNNY_CDN_BASE = "https://luxury-real-estate-media.b-cdn.net";
const AZIZI_MILAN_DIR = "/azizi/milan";

// Helper to build Bunny CDN URLs safely (encodes spaces, etc.)
const cdn = (fileName) =>
  `${BUNNY_CDN_BASE}${AZIZI_MILAN_DIR}/${encodeURIComponent(fileName)}`;

// ✅ Main files (EXACT filenames from your screenshot)
const BROCHURE_PDF = cdn("Azizi Milan Brochure.pdf");

// ✅ Floor plans (EXACT filenames from your screenshot)
const FP_1BR = cdn("azizi milan 1br floor plan.png");
const FP_2BR = cdn("azizi milan 2br floor plan.png");
const FP_2BR_DUP = cdn("azizi milan 2br dup floor plan.png");
const FP_3BR = cdn("azizi milan 3 br floor plan.png");

// ⚠️ Studio floor plan file is NOT shown in your screenshot list.
// If you upload it later, set it here (exact filename).
const FP_STUDIO = `https://luxury-real-estate-media.b-cdn.net/azizi/milan/azizi%20milan%20studio%20floor%20plan.png`;

export const aziziMilanData = {
  en: {
    seo: {
      title: "Azizi Milan | Apartments in Dubai (Studios to 3BR)",
      description:
        "Azizi Milan is a modern residential development by Azizi Developments located in the City of Arabia within Dubailand, offering studios and 1–3 bedroom apartments with lifestyle amenities and strong connectivity.",
      keywords:
        "azizi milan, azizi developments, dubai apartments, studio, 1 bedroom, 2 bedroom, 3 bedroom, city of arabia, dubailand",
      canonical: "/properties/apartments/azizi/milan",
    },

    project: {
      name: "Azizi Milan",
      developer: "Azizi Developments",
      location: "City of Arabia, Dubailand, Dubai",
      status: "Off-Plan",
      startingPrice: "AED 579,000", // ✅ from your pasted listing: “Price from: 579 000 AED”
      completionDate: "Q2 2028", // ✅ from your data + listing
      paymentPlan: "60% / 40%", // ✅ as you requested
      type: "Apartments",
      units: "Studios, 1, 2 & 3 Bedroom + 2BR Duplex",
    },

    hero: {
      // Keep your hero as-is or replace with an Azizi Milan hero image/video in Bunny if you have it.
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/azizi/milan/Azizi%20Milan_Launch%20film.mp4",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "A MODERN COMMUNITY INSPIRED BY ITALIAN ELEGANCE",
      paragraphs: [
        "Azizi Milan is a modern residential development by Azizi Developments located in the City of Arabia within Dubailand. The project is inspired by the elegance of Italian design, echoing architectural motifs reminiscent of Milan’s famous Galleria Vittorio Emanuele II.",
        "Azizi Milan offers studios and apartments with one to three bedrooms, crafted with contemporary layouts, floor-to-ceiling windows, and high-quality finishes.",
        "Residents will enjoy premium lifestyle amenities, including gym, swimming pools, landscaped areas, and dedicated play zones for children, with retail and dining within the wider community.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: BROCHURE_PDF,
          type: "main",
        },
      ],
      imgUrl: cdn("District - Galleria.jpg"),
      imgAlt: "Azizi Milan community view",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q2 2028",
          label: "Handover",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "60% / 40%",
          label: "Payment Plan",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "City of Arabia",
          label: "Dubailand",
        },
      ],
    },

    gallery: {
      title: "Azizi Milan Visuals",
      slides: [
        cdn("AZIZI_MILAN_CGI_08_8K.jpg"),
        cdn("AZIZI_MILAN_CGI09_Opt_01_12k.png"),
        cdn("AZIZI_MILAN_CGI09_Opt02_8K.jpg"),
        cdn("AZIZI_MILAN_CGI13_12K.png"),
        cdn("AZIZI_MILAN_CGI19_12K.png"),
        cdn("AZIZI_MILANO_CGI12_8K.jpg"),
        cdn("Aerial 1.jpg"),
        cdn("Aerial 2.jpg"),
        cdn("Aerial 3.jpeg"),
        cdn("Aerial 4.jpg"),
        cdn("Aerial 5.jpg"),
        cdn("Front.jpg"),
        cdn("District - Canal.jpg"),
        cdn("District - Galleria.jpg"),
        cdn("District - Wellness.jpg"),
        cdn("Canal.jpg"),
        cdn("Canal 2.jpg"),
        cdn("Mall.jpg"),
        cdn("Community Park.jpg"),
        cdn("Community 1.jpg"),
        cdn("Community 2.jpg"),
        cdn("CAM14-BBQ area shot1.jpg"),
        cdn("Tennis court.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 1.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 2.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 3.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 4.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 5.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 6.jpg"),
        cdn("CINEMA ROOM_VIEW 1.jpg"),
        cdn("CINEMA ROOM_VIEW 2.jpg"),
        cdn("CINEMA ROOM_VIEW 3.jpg"),
        cdn("CINEMA ROOM_VIEW 4.jpg"),
        cdn("GAMES ROOM_VIEW 1.jpg"),
        cdn("GAMES ROOM_VIEW 2.jpg"),
        cdn("GAMES ROOM_VIEW 3.jpg"),
        cdn("GAMES ROOM_VIEW 4.jpg"),
        cdn("GYM_VIEW 1.jpg"),
        cdn("GYM_VIEW 2.jpg"),
        cdn("GYM_VIEW 3.jpeg"),
        cdn("KIDS ROOM_VIEW 1.jpg"),
        cdn("KIDS ROOM_VIEW 2.jpg"),
        cdn("KIDS ROOM_VIEW 3.jpg"),
        cdn("KIDS ROOM_VIEW 4.jpg"),
        cdn("KIDS ROOM_VIEW 5.jpg"),
        cdn("MULTI-PURPOSE_VIEW 1.jpg"),
        cdn("MULTI-PURPOSE_VIEW 2.jpg"),
        cdn("MULTI-PURPOSE_VIEW 3.jpg"),
        cdn("MULTI-PURPOSE_VIEW 4.jpg"),
        cdn("MULTI-PURPOSE_VIEW 5.jpg"),
        cdn("MULTI-PURPOSE_VIEW 6.jpg"),
        cdn("MULTI-PURPOSE_VIEW 7.jpg"),
        cdn("CHANGING ROOM_VIEW 1.jpg"),
        cdn("CHANGING ROOM_VIEW 2.jpg"),
        cdn("Balcony.jpg"),
        cdn("Balcony 2.jpg"),
        cdn("Balcony 3.jpg"),
        cdn("CAM20_Balcony shot1.jpg"),
        cdn("STUDIO (1).jpg"),
        cdn("STUDIO (2).jpg"),
        cdn("STUDIO (3).jpg"),
        cdn("STUDIO (4).jpg"),
        cdn("STUDIO (5).jpg"),
        cdn("STUDIO_WASHROOM.jpg"),
        cdn("STUDIO.jpeg"),
        cdn("STUDIO02.jpeg"),
        cdn("3BR_BEDROOM_WITHOUT FURNITURE (1).jpg"),
        cdn("3BR_BEDROOM_WITHOUT FURNITURE (2).jpg"),
        cdn("3BR_BEDROOM_WITHOUT FURNITURE.png"),
        cdn("3BR_LIVING_WITHOUT FURNITURE01 (1).jpeg"),
        cdn("3BR_LIVING_WITHOUT FURNITURE02.jpeg"),
        cdn("3BR_LIVING01 (1).jpg"),
        cdn("3BR_LIVING01 (2).jpg"),
        cdn("1.jpg"),
        cdn("2_.jpg"),
        cdn("02.jpg"),
        cdn("03.jpg"),
      ],
      projectTag: "Azizi Milan",
    },

    // ✅ REPLACED: floorPlans based 100% on YOUR numbers (areas + handover + payment plan)
    // ✅ SAME HERE 100% — REPLACED with the agreed floorplan specs only
    // Keep: Unit + Total Area + Starting Price + Handover + images + brochureHref

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "Studio",
          bedrooms: 0,
          specs: {
            Unit: "STUDIO",
            "Total Area": "314.09 SQ.FT.",
            "Starting Price": "From AED 579,000",
            Handover: "Q2 2028",
          },
          images: FP_STUDIO ? [FP_STUDIO] : [],
          features: ["—"],
        },

        {
          id: "1br",
          title: "1 Bedroom",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM",
            "Total Area": "672.32 SQ.FT.",
            "Starting Price": "From AED 947,000",
            Handover: "Q2 2028",
          },
          images: [FP_1BR],
          features: ["—"],
        },

        {
          id: "2br",
          title: "2 Bedroom",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM",
            "Total Area": "1,121.50 SQ.FT.",
            "Starting Price": "From AED 1,569,000",
            Handover: "Q2 2028",
          },
          images: [FP_2BR],
          features: ["—"],
        },

        {
          id: "2br-dup",
          title: "2 Bedroom Duplex",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOM DUPLEX",
            "Total Area": "3,020.38 SQ.FT.",
            "Starting Price": "From AED 2,030,000",
            Handover: "Q2 2028",
          },
          images: [FP_2BR_DUP],
          features: ["—"],
        },

        {
          id: "3br",
          title: "3 Bedroom",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOM",
            "Total Area": "1,672.07 SQ.FT.",
            "Starting Price": "From AED 2,030,000",
            Handover: "Q2 2028",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Features / Amenities",
      amenities: [
        { label: "Multiple Retail Boulevards", icon: "🛍️", color: "#d7b46a" },
        { label: "Kids' Play Areas", icon: "👶", color: "#d7b46a" },
        { label: "Gym", icon: "💪", color: "#d7b46a" },
        { label: "Business Innovation Hub", icon: "💼", color: "#d7b46a" },
        { label: "Arts & Cultural Quarter", icon: "🎭", color: "#d7b46a" },
        { label: "BBQ Areas", icon: "🍖", color: "#d7b46a" },
        { label: "Cinemas & Lounges", icon: "🎬", color: "#d7b46a" },
        {
          label: "Swimming Pool, Saunas & Jacuzzies In Every Building",
          icon: "🏊",
          color: "#d7b46a",
        },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Milan",
      address:
        "City of Arabia, Wadi Al Safa 4, Dubailand, Dubai, United Arab Emirates",
      lat: 25.08839,
      lng: 55.3255606,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏙️", text: "City of Arabia, Dubailand (Wadi Al Safa 4)" },
        { icon: "🛣️", text: "Near Sheikh Mohammed Bin Zayed Road (E311)" },
        { icon: "🛍️", text: "Near Mall of Arabia (planned major destination)" },
      ],
    },
  },

  ar: {
    seo: {
      title: "عزيزي ميلان | شقق في دبي (استوديو حتى 3 غرف)",
      description:
        "عزيزي ميلان مشروع سكني حديث من عزيزي في City of Arabia ضمن Dubailand، يوفّر استوديو وشقق 1–3 غرف مع مرافق وخدمات مجتمعية واتصال جيد.",
      keywords:
        "عزيزي ميلان، عزيزي، شقق دبي، استوديو، غرفة، غرفتين، ثلاث غرف، City of Arabia، Dubailand",
      canonical: "/properties/apartments/azizi/milan",
    },

    project: {
      name: "Azizi Milan",
      developer: "عزيزي للتطوير العقاري",
      location: "سيتي أوف أرابيا، دبي لاند، دبي",
      status: "قيد الإنشاء",
      startingPrice: "579,000 درهم",
      completionDate: "Q2 2028",
      paymentPlan: "60% / 40%",
      type: "شقق سكنية",
      units: "استوديو، 1، 2، 3 غرف + دوبلكس غرفتين",
    },

    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/azizi/milan/Azizi%20Milan_Launch%20film.mp4",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
      companyName: "عزيزي",
      rating: null,
    },

    intro: {
      title: "مجتمع عصري مستوحى من ميلان في دبي",
      paragraphs: [
        "عزيزي ميلان مشروع سكني حديث من عزيزي في City of Arabia ضمن Dubailand، مستوحى من أناقة التصميم الإيطالي.",
        "يوفّر المشروع وحدات متنوعة من الاستوديو حتى شقق 3 غرف نوم بتخطيطات عصرية وتشطيبات عالية الجودة.",
        "يشمل المشروع مرافق وخدمات متكاملة مثل النادي الرياضي، المسابح، المساحات الخضراء ومناطق لعب الأطفال، إضافةً إلى مناطق تجارية ومطاعم.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب",
          url: BROCHURE_PDF,
          type: "main",
        },
      ],
      imgUrl: cdn("District - Galleria.jpg"),
      imgAlt: "إطلالة على مجتمع عزيزي ميلان",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🗓️",
          value: "Q2 2028",
          label: "التسليم",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "💳",
          value: "60% / 40%",
          label: "خطة الدفع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📍",
          value: "City of Arabia",
          label: "Dubailand",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: [
        cdn("AZIZI_MILAN_CGI_08_8K.jpg"),
        cdn("AZIZI_MILAN_CGI09_Opt_01_12k.png"),
        cdn("AZIZI_MILAN_CGI09_Opt02_8K.jpg"),
        cdn("AZIZI_MILAN_CGI13_12K.png"),
        cdn("AZIZI_MILAN_CGI19_12K.png"),
        cdn("AZIZI_MILANO_CGI12_8K.jpg"),
        cdn("Aerial 1.jpg"),
        cdn("Aerial 2.jpg"),
        cdn("Aerial 3.jpeg"),
        cdn("Aerial 4.jpg"),
        cdn("Aerial 5.jpg"),
        cdn("Front.jpg"),
        cdn("District - Canal.jpg"),
        cdn("District - Galleria.jpg"),
        cdn("District - Wellness.jpg"),
        cdn("Canal.jpg"),
        cdn("Canal 2.jpg"),
        cdn("Mall.jpg"),
        cdn("Community Park.jpg"),
        cdn("Community 1.jpg"),
        cdn("Community 2.jpg"),
        cdn("CAM14-BBQ area shot1.jpg"),
        cdn("Tennis court.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 1.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 2.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 3.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 4.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 5.jpg"),
        cdn("ENTRANCE LOBBY_VIEW 6.jpg"),
        cdn("CINEMA ROOM_VIEW 1.jpg"),
        cdn("CINEMA ROOM_VIEW 2.jpg"),
        cdn("CINEMA ROOM_VIEW 3.jpg"),
        cdn("CINEMA ROOM_VIEW 4.jpg"),
        cdn("GAMES ROOM_VIEW 1.jpg"),
        cdn("GAMES ROOM_VIEW 2.jpg"),
        cdn("GAMES ROOM_VIEW 3.jpg"),
        cdn("GAMES ROOM_VIEW 4.jpg"),
        cdn("GYM_VIEW 1.jpg"),
        cdn("GYM_VIEW 2.jpg"),
        cdn("GYM_VIEW 3.jpeg"),
        cdn("KIDS ROOM_VIEW 1.jpg"),
        cdn("KIDS ROOM_VIEW 2.jpg"),
        cdn("KIDS ROOM_VIEW 3.jpg"),
        cdn("KIDS ROOM_VIEW 4.jpg"),
        cdn("KIDS ROOM_VIEW 5.jpg"),
        cdn("MULTI-PURPOSE_VIEW 1.jpg"),
        cdn("MULTI-PURPOSE_VIEW 2.jpg"),
        cdn("MULTI-PURPOSE_VIEW 3.jpg"),
        cdn("MULTI-PURPOSE_VIEW 4.jpg"),
        cdn("MULTI-PURPOSE_VIEW 5.jpg"),
        cdn("MULTI-PURPOSE_VIEW 6.jpg"),
        cdn("MULTI-PURPOSE_VIEW 7.jpg"),
        cdn("CHANGING ROOM_VIEW 1.jpg"),
        cdn("CHANGING ROOM_VIEW 2.jpg"),
        cdn("Balcony.jpg"),
        cdn("Balcony 2.jpg"),
        cdn("Balcony 3.jpg"),
        cdn("CAM20_Balcony shot1.jpg"),
        cdn("STUDIO (1).jpg"),
        cdn("STUDIO (2).jpg"),
        cdn("STUDIO (3).jpg"),
        cdn("STUDIO (4).jpg"),
        cdn("STUDIO (5).jpg"),
        cdn("STUDIO_WASHROOM.jpg"),
        cdn("STUDIO.jpeg"),
        cdn("STUDIO02.jpeg"),
        cdn("3BR_BEDROOM_WITHOUT FURNITURE (1).jpg"),
        cdn("3BR_BEDROOM_WITHOUT FURNITURE (2).jpg"),
        cdn("3BR_BEDROOM_WITHOUT FURNITURE.png"),
        cdn("3BR_LIVING_WITHOUT FURNITURE01 (1).jpeg"),
        cdn("3BR_LIVING_WITHOUT FURNITURE02.jpeg"),
        cdn("3BR_LIVING01 (1).jpg"),
        cdn("3BR_LIVING01 (2).jpg"),
        cdn("1.jpg"),
        cdn("2_.jpg"),
        cdn("02.jpg"),
        cdn("03.jpg"),
      ],
      projectTag: "Azizi Milan",
    },

    // ✅ SAME replacement in AR
    // ✅ SAME HERE 100% — AR version with the agreed floorplan specs only
    // Keep: نوع الوحدة + إجمالي المساحة + السعر الابتدائي + موعد التسليم + images + brochureHref

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "studio",
          title: "استوديو",
          bedrooms: 0,
          specs: {
            "نوع الوحدة": "استوديو",
            "إجمالي المساحة": "314.09 قدم²",
            "السعر الابتدائي": "ابتداءً من 579,000 درهم",
            "موعد التسليم": "Q2 2028",
          },
          images: FP_STUDIO ? [FP_STUDIO] : [],
          features: ["—"],
        },

        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "شقة غرفة نوم واحدة",
            "إجمالي المساحة": "672.32 قدم²",
            "السعر الابتدائي": "ابتداءً من 947,000 درهم",
            "موعد التسليم": "Q2 2028",
          },
          images: [FP_1BR],
          features: ["—"],
        },

        {
          id: "2br",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "شقة غرفتي نوم",
            "إجمالي المساحة": "1,121.50 قدم²",
            "السعر الابتدائي": "ابتداءً من 1,569,000 درهم",
            "موعد التسليم": "Q2 2028",
          },
          images: [FP_2BR],
          features: ["—"],
        },

        {
          id: "2br-dup",
          title: "دوبلكس غرفتين نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "دوبلكس غرفتين نوم",
            "إجمالي المساحة": "3,020.38 قدم²",
            "السعر الابتدائي": "ابتداءً من 2,030,000 درهم",
            "موعد التسليم": "Q2 2028",
          },
          images: [FP_2BR_DUP],
          features: ["—"],
        },

        {
          id: "3br",
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "شقة 3 غرف نوم",
            "إجمالي المساحة": "1,672.07 قدم²",
            "السعر الابتدائي": "ابتداءً من 2,030,000 درهم",
            "موعد التسليم": "Q2 2028",
          },
          images: [FP_3BR],
          features: ["—"],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "ممرات تجارية متعددة", icon: "🛍️", color: "#d7b46a" },
        { label: "مناطق لعب للأطفال", icon: "👶", color: "#d7b46a" },
        { label: "نادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "مركز ابتكار للأعمال", icon: "💼", color: "#d7b46a" },
        { label: "منطقة فنية وثقافية", icon: "🎭", color: "#d7b46a" },
        { label: "مناطق BBQ", icon: "🍖", color: "#d7b46a" },
        { label: "سينما ولاونجات", icon: "🎬", color: "#d7b46a" },
        {
          label: "مسبح وساونا وجاكوزي في كل مبنى",
          icon: "🏊",
          color: "#d7b46a",
        },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Azizi Milan",
      address:
        "مدينة العرب، وادي الصفا 4، دبي لاند، دبي، الإمارات العربية المتحدة",
      lat: 25.08839,
      lng: 55.3255606,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏙️", text: "مدينة العرب، دبي لاند (وادي الصفا 4)" },
        { icon: "🛣️", text: "بالقرب من شارع الشيخ محمد بن زايد (E311)" },
        { icon: "🛍️", text: "بالقرب من مول العرب (وجهة رئيسية مخطط لها)" },
      ],
    },
  },
};
