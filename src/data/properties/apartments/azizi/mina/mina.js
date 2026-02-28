// src/data/properties/apartments/azizi/mina.js
// ✅ FULL BLUEPRINT COMPLIANT
// ✅ EN + AR
// ✅ 1BR / 2BR / 3BR
// ✅ Bunny CDN filenames EXACT
// ✅ Azizi Developments
// ✅ Palm Jumeirah
// ✅ Ready Property
// ✅ Production-ready

const BUNNY_CDN_BASE =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_DIR = "/azizi/mina";
const cdn = (file) =>
  `${BUNNY_CDN_BASE}${PROJECT_DIR}/${encodeURIComponent(file)}`;

const SQUARE_IMAGE_URL =
  "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg";

// ================= FILES =================
const BROCHURE_PDF = cdn("Mina Brochure-Bilingual.pdf");
const VIDEO_URL = cdn("Mina 2021_English.mp4");

// Floor Plans
const FP_1BR = cdn("Azizi Mina 1br floor plan.png");
const FP_2BR = cdn("Azizi Mina 2br floor plan .png");
const FP_3BR = cdn("Azizi Mina 3br floor plan .png");

// ================= GALLERY (ALL IMAGES) =================
const GALLERY = [
  cdn("03.jpg"),
  cdn("06.jpg"),
  cdn("AZIZI_Mina_CGI12_Kitchen_01 no people.jpg"),
  cdn("AZIZI_Mina_CGI17_Pool balcony_03.jpg"),
  cdn("AZIZI_Mina_CGI20_Extrior01_02.jpg"),
  cdn("AZIZI_Mina_CGI22_Balcony_InnerPalm_01.jpg"),
  cdn("AZIZI_Mina_CGI23_Reception_01.jpg"),
  cdn("Cam 11 - Pool-00063.jpg"),
  cdn("DJI_0538.jpg"),
  cdn("DJI_0542.jpg"),
  cdn("DSC01107.jpg"),
  cdn("DSC01115.jpg"),
  cdn("DSC01128.jpg"),
  cdn("DSC01132.jpg"),
  cdn("DSC01136.jpg"),
  cdn("DSC01148.jpg"),
  cdn("DSC01152.jpg"),
  cdn("DSC01155.jpg"),
  cdn("DSC01161.jpg"),
  cdn("DSC01164.jpg"),
  cdn("DSC01165.jpg"),
  cdn("DSC01169.jpg"),
  cdn("Mina photos-1.jpg"),
  cdn("Mina photos-2.jpg"),
  cdn("Mina photos-3.jpg"),
  cdn("Mina photos-4.jpg"),
  cdn("Mina photos-5.jpg"),
  cdn("Mina photos-6.jpg"),
  cdn("Mina photos-7.jpg"),
  cdn("Mina photos-8.jpg"),
  cdn("Mina photos-9.jpg"),
  cdn("Mina photos-10.jpg"),
  cdn("Mina photos-11.jpg"),
  cdn("Mina photos-12.jpg"),
  cdn("Mina photos-13.jpg"),
  cdn("Mina photos-14.jpg"),
  cdn("Mina photos-15.jpg"),
  cdn("Mina photos-16.jpg"),
  cdn("Mina photos-17.jpg"),
  cdn("Mina photos-18.jpg"),
  cdn("Mina_Burj Al Arab View_NormalOption.jpg"),
  cdn("Mina_FrontView.jpg"),
  cdn("Mina_FrontView Wide.jpg"),
  cdn("Mina_FrontView Wide Edit.jpg"),
  cdn("Mina_Penthouse_Terrace Swimmingpool.jpg"),
  cdn("Mina_Penthouse_Terrace View01.jpg"),
  cdn("Mina_Poolshot_Day03.jpg"),
  cdn("Mina_Poolshot_Day04.jpg"),
  cdn("Palm_Mina_1BHK_LivingRoom01i.jpg"),
];

// ================= CONSTANTS =================
const HANDOVER = "Ready";
const PAYMENT_PLAN = "Cash";
const LOCATION_NAME = "Palm Jumeirah";
const DEVELOPER = "Azizi Developments";

// ======================================================
// DATA
// ======================================================
export const aziziMinaData = {
  // ================= EN =================
  en: {
    seo: {
      title:
        "Azizi Mina Palm Jumeirah | Beachfront Apartments for Sale in Dubai",
      description:
        "Azizi Mina is a ready beachfront residential project on Palm Jumeirah offering 1, 2 & 3 bedroom luxury apartments with private beach access.",
      keywords:
        "Azizi Mina, Palm Jumeirah apartments, beachfront Dubai, Azizi Developments",
      canonical: "/properties/apartments/azizi/mina",
    },

    project: {
      name: "Azizi Mina",
      developer: DEVELOPER,
      location: LOCATION_NAME,
      status: "Secondary",
      market: "secondary",
      startingPrice: "AED 3,868,000",
      completionDate: HANDOVER,
      paymentPlan: PAYMENT_PLAN,
      type: "Beachfront Residences",
      units: "1, 2 & 3 Bedroom Apartments",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: DEVELOPER,
      rating: null,
    },

    intro: {
      title: "AZIZI MINA — BEACHFRONT LIVING ON PALM JUMEIRAH",
      paragraphs: [
        "Azizi Mina is an exclusive ready beachfront development located on the iconic Palm Jumeirah, offering residents a rare opportunity to own luxury homes by the sea.",
        "The project combines resort-style amenities, private beach access, and stunning views of the Arabian Gulf and Dubai skyline.",
      ],
      brochures: [
        { title: "Download Brochure", url: BROCHURE_PDF, type: "main" },
        { title: "Watch Project Video", url: VIDEO_URL, type: "video" },
      ],
      imgUrl: cdn("AZIZI_Mina_CGI17_Pool balcony_03.jpg"),
      imgAlt: "Azizi Mina Palm Jumeirah",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏝️",
          value: "Palm Jumeirah",
          label: "Beachfront Location",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🏖️",
          value: "Private Beach",
          label: "Exclusive Living",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🔑",
          value: "Ready",
          label: "Move-In Ready",
        },
      ],
    },

    gallery: {
      title: "Project Gallery",
      slides: GALLERY,
      projectTag: "Azizi Mina",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            "Total Area": "1,208.04 sq.ft",
            "Starting Price": "AED 3,868,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            "Total Area": "1,592 sq.ft",
            "Starting Price": "AED 4,256,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartment",
          bedrooms: 3,
          specs: {
            "Total Area": "2,468.4 sq.ft",
            "Starting Price": "AED 7,413,000",
            "Payment Plan": PAYMENT_PLAN,
            Handover: HANDOVER,
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "Amenities & Lifestyle",
      amenities: [
        { label: "Private Beach Access", icon: "🏖️", color: "#c9a24d" },
        { label: "Infinity Pool", icon: "🏊", color: "#c9a24d" },
        { label: "Luxury Spa", icon: "💆", color: "#c9a24d" },
        { label: "Fully Equipped Gym", icon: "🏋️", color: "#c9a24d" },
        { label: "Sea View Residences", icon: "🌊", color: "#c9a24d" },
        { label: "Concierge Services", icon: "🛎️", color: "#c9a24d" },
        { label: "Valet Parking", icon: "🚘", color: "#c9a24d" },
        { label: "24/7 Security", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Azizi Mina",
      address: LOCATION_NAME,
      lat: 25.1269446,
      lng: 55.153537,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏝️", text: "Located on Palm Jumeirah" },
        { icon: "🏨", text: "Near Atlantis & luxury resorts" },
        { icon: "🚗", text: "Easy access to Sheikh Zayed Road" },
      ],
    },

    cta: {
      title: "Own a Beachfront Home on Palm Jumeirah",
      description:
        "Contact us today for availability, pricing, and private viewings at Azizi Mina.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ================= AR =================
  // ================= AR =================
  ar: {
    seo: {
      title: "عزيزي مينا نخلة جميرا | شقق شاطئية جاهزة للبيع في دبي",
      description:
        "عزيزي مينا هو مشروع سكني شاطئي جاهز على نخلة جميرا يوفر شقق فاخرة 1 و2 و3 غرف نوم مع وصول خاص للشاطئ وإطلالات بحرية.",
      keywords: "عزيزي مينا, نخلة جميرا, شقق شاطئية دبي, عزيزي للتطوير العقاري",
      canonical: "/properties/apartments/azizi/mina",
    },

    project: {
      name: "عزيزي مينا",
      developer: "عزيزي للتطوير العقاري",
      location: "نخلة جميرا",
      status: "Secondary", // ✅ keep stable enum like EN
      market: "secondary", // ✅ IMPORTANT
      startingPrice: "3,868,000 درهم",
      completionDate: "جاهز",
      paymentPlan: "كاش",
      type: "شقق سكنية شاطئية",
      units: "شقق 1 و2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl: GALLERY[0],
      squareImageUrl: SQUARE_IMAGE_URL,
      companyName: "Azizi Developments",
      rating: null,
    },

    intro: {
      title: "عزيزي مينا — أسلوب حياة شاطئي على نخلة جميرا",
      paragraphs: [
        "عزيزي مينا مشروع شاطئي جاهز على نخلة جميرا، يوفر فرصة نادرة لامتلاك منزل فاخر على البحر.",
        "يجمع المشروع بين مرافق منتجعية، وصول خاص للشاطئ، وإطلالات على الخليج العربي وأفق دبي.",
      ],
      brochures: [
        { title: "تحميل الكتيّب", url: BROCHURE_PDF, type: "main" },
        { title: "مشاهدة فيديو المشروع", url: VIDEO_URL, type: "video" },
      ],
      imgUrl: cdn("AZIZI_Mina_CGI17_Pool balcony_03.jpg"),
      imgAlt: "عزيزي مينا نخلة جميرا",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏝️",
          value: "نخلة جميرا",
          label: "موقع شاطئي",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🏖️",
          value: "شاطئ خاص",
          label: "سكن حصري",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🔑",
          value: "جاهز",
          label: "جاهز للسكن",
        },
      ],
    },

    gallery: {
      title: "معرض الصور",
      slides: GALLERY,
      projectTag: "Azizi Mina", // ✅ keep stable like EN
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br", // ✅ IMPORTANT
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          // ✅ use EN keys (safer for UI)
          specs: {
            "Total Area": "1,208.04 قدم²",
            "Starting Price": "3,868,000 درهم",
            "Payment Plan": "كاش",
            Handover: "جاهز",
          },
          images: [FP_1BR],
        },
        {
          id: "2br",
          title: "شقة غرفتين نوم",
          bedrooms: 2,
          specs: {
            "Total Area": "1,592 قدم²",
            "Starting Price": "4,256,000 درهم",
            "Payment Plan": "كاش",
            Handover: "جاهز",
          },
          images: [FP_2BR],
        },
        {
          id: "3br",
          title: "شقة 3 غرف نوم",
          bedrooms: 3,
          specs: {
            "Total Area": "2,468.4 قدم²",
            "Starting Price": "7,413,000 درهم",
            "Payment Plan": "كاش",
            Handover: "جاهز",
          },
          images: [FP_3BR],
        },
      ],
      brochureHref: BROCHURE_PDF,
    },

    amenities: {
      title: "المرافق ونمط الحياة",
      amenities: [
        { label: "وصول خاص للشاطئ", icon: "🏖️", color: "#c9a24d" },
        { label: "مسبح إنفينيتي", icon: "🏊", color: "#c9a24d" },
        { label: "سبا فاخر", icon: "💆", color: "#c9a24d" },
        { label: "نادي رياضي مجهز", icon: "🏋️", color: "#c9a24d" },
        { label: "إطلالات بحرية", icon: "🌊", color: "#c9a24d" },
        { label: "خدمات كونسيرج", icon: "🛎️", color: "#c9a24d" },
        { label: "مواقف فاخرة", icon: "🚘", color: "#c9a24d" },
        { label: "أمن 24/7", icon: "🛡️", color: "#c9a24d" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "عزيزي مينا",
      address: "نخلة جميرا، دبي",
      lat: 25.1269446,
      lng: 55.153537,
      zoom: 16,
      proximityFeatures: [
        { icon: "🏝️", text: "يقع على نخلة جميرا." },
        { icon: "🏨", text: "بالقرب من أتلانتس والمنتجعات الفاخرة." },
        { icon: "🚗", text: "سهولة الوصول إلى شارع الشيخ زايد." },
      ],
    },

    cta: {
      title: "امتلك شقة شاطئية على نخلة جميرا",
      description:
        "تواصل معنا الآن لمعرفة التوافر والأسعار وترتيب معاينات خاصة في عزيزي مينا.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};

export default aziziMinaData;
