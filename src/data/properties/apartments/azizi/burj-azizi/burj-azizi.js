// src/data/properties/apartments/azizi/burj-azizi.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR / 2BR / 3BR
// ✅ Bunny CDN filenames EXACT
// ✅ Azizi Developments
// ✅ Trade Centre (Sheikh Zayed Road)
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/burj-azizi";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg";

// ================= FILES =================
const BROCHURE_PDF = cdn("Burj Azizi.pdf");
const FLOORPLANS_PDF = cdn("Burj Azizi Floorplans.pdf");

// Floor Plans
const FP_1BR = cdn("Burj Azizi 1br floor plan.webp");
const FP_2BR = cdn("Burj Azizi 2br floor plan.webp");
const FP_3BR = cdn("Burj Azizi 3br floor plan.webp");

// ================= GALLERY (ALL IMAGES) =================
const GALLERY = [
  cdn("1.webp"),
  cdn("2.webp"),
  cdn("3.webp"),
  cdn("4.webp"),
  cdn("5.webp"),
  cdn("6.webp"),
  cdn("7.webp"),
  cdn("8.webp"),
  cdn("9.webp"),
  cdn("10.webp"),
  cdn("11.webp"),
  cdn("12.webp"),
  cdn("13.webp"),
  cdn("14.webp"),
  cdn("15.webp"),
  cdn("16.webp"),
  cdn("17.webp"),
  cdn("18.webp"),
  cdn("19.webp"),
  cdn("20.webp"),
];

// ================= CONSTANTS =================
const HANDOVER = "Q4 2028";
const PAYMENT_PLAN = "50% / 50%";
const LOCATION_NAME = "Trade Centre, Sheikh Zayed Road";
const DEVELOPER = "Azizi Developments";

// ======================================================
// DATA
// ======================================================
export const burjAziziData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Burj Azizi by Azizi Developments | Luxury Apartments on Sheikh Zayed Road",
      description:
        "Burj Azizi is an iconic ultra-luxury tower on Sheikh Zayed Road offering 1, 2 & 3 bedroom residences with panoramic Dubai skyline views.",
      keywords:
        "Burj Azizi, Azizi Developments, Sheikh Zayed Road apartments, luxury Dubai tower",
      canonical: "/properties/apartments/azizi/burj-azizi",
    },

    project: {
      name: "Burj Azizi",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Off-plan",
      market: "offplan",
      startingPrice: "AED 8,825,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Ultra-Luxury High-Rise Residences",
      units: "1, 2 & 3 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: GALLERY[2],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "BURJ AZIZI — ICONIC LUXURY ON SHEIKH ZAYED ROAD",
      paragraphs: [
        "Burj Azizi is a landmark ultra-luxury residential tower by Azizi Developments, strategically located on Sheikh Zayed Road in the heart of Dubai.",
        "Designed to redefine vertical living, the tower offers breathtaking views, premium interiors, and world-class amenities for elite urban lifestyles.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        {
          title: "Download Floor Plans",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "Burj Azizi Sheikh Zayed Road",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "Sheikh Zayed Road",
          label: "Prime Address",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💎",
          value: "Ultra Luxury",
          label: "Iconic Tower",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: HANDOVER,
          label: "Handover",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Burj Azizi",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Residence",
          bedrooms: 1,
          specs: {
            "Total Area": "1,094.27 sq.ft",
            "Starting Price": "AED 8,825,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom Residence",
          bedrooms: 2,
          specs: {
            "Total Area": "1,310.30 sq.ft",
            "Starting Price": "AED 15,030,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Residence",
          bedrooms: 3,
          specs: {
            "Total Area": "2,033.32 sq.ft",
            "Starting Price": "AED 35,562,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Sky Lobby", icon: "🌆", color: "#c9a24d" },
        { label: "Infinity Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Luxury Spa", icon: "💆", color: "#c9a24d" },
        { label: "Private Cinema", icon: "🎬", color: "#c9a24d" },
        { label: "Exclusive Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Concierge Services", icon: "🛎️", color: "#c9a24d" },
        { label: "Valet Parking", icon: "🚘", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Burj Azizi",
      address: LOCATION_NAME,
      lat: 25.2241329,
      lng: 55.2826754,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏙️", text: "Located on Sheikh Zayed Road" },
        { icon: "🚇", text: "Walking distance to World Trade Centre Metro" },
        { icon: "🏢", text: "Minutes from DIFC & Downtown Dubai" },
      ],
    },

    cta: {
      title: "Own a Landmark Residence in Dubai",
      description:
        "Request full pricing, availability, and private consultation for Burj Azizi.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ✅ FIXED AR OBJECT (FULL PARITY + BLUEPRINT SAFE)
  ar: {
    seo: {
      title:
        "برج عزيزي من عزيزي للتطوير العقاري | شقق فاخرة على شارع الشيخ زايد",
      description:
        "برج عزيزي هو برج سكني فائق الفخامة على شارع الشيخ زايد بالقرب من مركز التجارة، يوفر شقق 1 و2 و3 غرف نوم بإطلالات بانورامية على أفق دبي، مع التسليم في الربع الرابع 2028 وخطة دفع 50% / 50%.",
      keywords:
        "برج عزيزي, عزيزي للتطوير العقاري, شارع الشيخ زايد, شقق فاخرة دبي, Trade Centre, Burj Azizi",
      canonical: "/properties/apartments/azizi/burj-azizi",
    },

    project: {
      name: "برج عزيزي",
      developer: "عزيزي للتطوير العقاري",
      location: "مركز التجارة، شارع الشيخ زايد",
      status: "على المخطط",
      market: "offplan",
      startingPrice: "8,825,000 درهم",
      completionDate: "الربع الرابع 2028",
      paymentPlan: PAYMENT_PLAN,
      type: "مساكن فاخرة شاهقة الارتفاع",
      units: "شقق 1 و2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[2], // ✅ parity with EN (safer for UI)
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "عزيزي للتطوير العقاري",
      rating: null,
    },

    intro: {
      title: "برج عزيزي — فخامة أيقونية على شارع الشيخ زايد",
      paragraphs: [
        "برج عزيزي هو برج سكني فائق الفخامة من عزيزي للتطوير العقاري، يقع في موقع استراتيجي على شارع الشيخ زايد في قلب دبي.",
        "صُمم لإعادة تعريف أسلوب الحياة العمودية، ويقدم إطلالات مذهلة وتشطيبات راقية ومرافق عالمية المستوى تناسب أسلوب الحياة الحضري الفاخر.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        {
          title: "تحميل مخططات الطوابق",
          url: FLOORPLANS_PDF,
          type: "secondary",
        },
      ],
      imgUrl: GALLERY[1],
      imgAlt: "برج عزيزي على شارع الشيخ زايد",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "شارع الشيخ زايد",
          label: "عنوان مميز",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "💎",
          value: "فائق الفخامة",
          label: "برج أيقوني",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "📅",
          value: "الربع الرابع 2028",
          label: "موعد التسليم",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Burj Azizi",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          // ✅ keep EN keys for blueprint components that expect these keys
          specs: {
            "Total Area": "1,094.27 قدم²",
            "Starting Price": "8,825,000 درهم",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "Total Area": "1,310.30 قدم²",
            "Starting Price": "15,030,000 درهم",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "Total Area": "2,033.32 قدم²",
            "Starting Price": "35,562,000 درهم",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: FLOORPLANS_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "لوبي سماوي", icon: "🌆", color: "#c9a24d" },
        { label: "مسبح إنفينيتي", icon: "🏊", color: "#c9a24d" },
        { label: "سبا فاخر", icon: "💆", color: "#c9a24d" },
        { label: "سينما خاصة", icon: "🎬", color: "#c9a24d" },
        { label: "نادي رياضي حصري", icon: "🏋️", color: "#c9a24d" },
        { label: "خدمات كونسيرج", icon: "🛎️", color: "#c9a24d" },
        { label: "خدمة صف السيارات", icon: "🚘", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "برج عزيزي",
      address: "مركز التجارة، شارع الشيخ زايد",
      lat: 25.2241329,
      lng: 55.2826754,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏙️", text: "يقع على شارع الشيخ زايد." },
        { icon: "🚇", text: "على مسافة مشي من مترو مركز التجارة العالمي." },
        { icon: "🏢", text: "دقائق من DIFC وداون تاون دبي." },
      ],
    },

    cta: {
      title: "امتلك سكنًا أيقونيًا في دبي",
      description: "اطلب الأسعار والتوافر الكامل واستشارة خاصة لبرج عزيزي.",
      buttons: [
        { label: "إرسال طلب", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default burjAziziData;
