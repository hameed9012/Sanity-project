// src/data/properties/penthouses/binghatti/bugatti/bugatti.js
/**
 * ✅ Bugatti Residences by Binghatti — FULL WORKING DATA FILE (EN + AR)
 *
 * What this file guarantees:
 * - ✅ No broken URLs caused by accidental spaces (we trim + encode safely)
 * - ✅ Uses ONLY Bunny base + filenames (easy to maintain)
 * - ✅ Uses your agreed “unit block” structure (Unit / Suite Range / Balcony / Total Range / Starting Price / Handover / Payment Plan)
 * - ✅ Uses Reelly facts for handover + payment plan + price-from + location
 *
 * NOTE ABOUT SIZES (Suite/Balcony/Total):
 * - Reelly does NOT provide suite/balcony/total ranges per unit type.
 * - So we set them as "On request" until you export floorplan pages as PNG/JPG OR provide extracted data from the floor plan PDF.
 */

const BUNNY_CDN_BASE_URL =
  process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
  "https://luxury-real-estate-media.b-cdn.net";

const PROJECT_PATH = "binghatti/bugatti";

/**
 * ✅ Use encodeURI (NOT encodeURIComponent) so path slashes remain valid.
 * ✅ file.trim() removes trailing/leading spaces that break URLs and cause 404.
 */
const cdn = (file) =>
  `${BUNNY_CDN_BASE_URL}/${PROJECT_PATH}/${encodeURI(String(file).trim())}`;

export const bugattiResidencesData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "Bugatti Residences by Binghatti | Branded Ultra-Luxury Residences in Dubai",
      description:
        "Bugatti Residences by Binghatti is a branded ultra-luxury residential landmark in Business Bay, Dubai, combining iconic design, curated lifestyle amenities, and sky-level living.",
      keywords:
        "Bugatti Residences, Binghatti, branded residences Dubai, luxury penthouses Dubai, Business Bay luxury, ultra luxury tower",
      canonical: "/properties/penthouses/binghatti/bugatti",
    },

    project: {
      name: "Bugatti Residences by Binghatti",
      developer: "Binghatti",
      location: "Business Bay, Dubai, UAE",
      status: "Off-plan",
      // ✅ From Reelly screen: Price from 19,400,000 AED
      startingPrice: "From AED 19,400,000",
      // ✅ From Reelly screen
      completionDate: "Q1 2026",
      // ✅ From Reelly screen
      unitTypes: "Apartments & Penthouses (2–4 Bedroom)",
      // Optional:
      brandedProject: "Yes",
      furnishing: "Semi furnished",
      serviceCharge: "40 AED/sqft",
      paymentPlan: "20% / 60% / 20%",
    },

    hero: {
      // Use a safe, strong hero image filename (make sure this exists in Bunny)
      backgroundUrl: cdn("BUGATTI RESIDENCES BY BINGHATTI _C8.jpg"),
      // If you have a logo already:
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/bugatti-logo.png",
      companyName: "Binghatti",
      rating: 4.7,
    },

    intro: {
      title: "BRANDED SKY-LIVING. ICONIC DESIGN. DUBAI ADDRESS.",
      paragraphs: [
        "Bugatti Residences by Binghatti is a branded ultra-luxury landmark in Business Bay—designed for collectors and lifestyle-led investors seeking exclusivity, identity, and skyline presence.",
        "A refined selection of amenities and services delivers a curated residential experience inspired by the French Riviera, with bold architectural DNA and elevated living.",
      ],
      brochures: [
        {
          title: "Download Brochure (PDF)",
          url: cdn("Bugatti Residences by Binghatti - Generic.pdf"),
          type: "main",
        },
        {
          title: "Floor Plans (PDF)",
          url: cdn("Bugatti Residences floor plan.pdf"),
          type: "floorplans",
        },
      ],
      imgUrl: cdn("BUGATTI RESIDENCES BY BINGHATTI View.jpg"),
      imgAlt: "Bugatti Residences by Binghatti",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "Business Bay",
          label: "Dubai",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "Q1 2026",
          label: "Handover",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "20/60/20",
          label: "Payment Plan",
        },
      ],
    },

    /**
     * ✅ Gallery: keep ONLY filenames you are confident exist
     * If you want me to make this 100% exact:
     * - send the Bunny folder screenshot that shows the exact Bugatti filenames (like you did for Hilton/Orchid)
     */
    gallery: {
      title: "Project Gallery",
      slides: [
        // ===== Facade / Identity =====
        cdn("BUGATTI RESIDENCES BY BINGHATTI Exterior.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI View.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI _Aerial View_.jpg"),

        // ===== Amenities / Lifestyle =====
        cdn("BUGATTI RESIDENCES BY BINGHATTI Riviera Pool.jpg"),
        // cdn("BUGATTI RESIDENCES BY BINGHATTI SPA.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Valet Service.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Garage.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Penthouse.jpg"),

        // ===== Interiors =====
        cdn("binghatti_Bedroom_Final_2023-11-16.jpg"),
        cdn("binghatti_Bathroom_Final_2023-11-16.jpg"),
        cdn("binghatti_Kitchen1_Final_2023-11-16.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Living room.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Dining.png"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Balcony_.jpg"),
      ],
      projectTag: "Bugatti Residences",
    },

    /**
     * ✅ Your agreed “Unit block” structure:
     * Unit / Suite Range / Balcony / Total Range / Starting Price / Handover / Payment Plan
     *
     * Since Reelly doesn’t give suite/balcony/total breakdown by unit type,
     * we set sizes as "On request" until you provide floorplan PNGs or extracted data.
     */
    units: {
      title: "Units & Pricing",
      handover: "Q1 2026",
      paymentPlan: "20% / 60% / 20%",
      items: [
        {
          unit: "2 BEDROOM RESIDENCE",
          suiteRange: "On request (see floor plan PDF)",
          balcony: "On request (see floor plan PDF)",
          totalRange: "On request (see floor plan PDF)",
          startingPrice: "From AED 19,400,000",
          handover: "Q1 2026",
          paymentPlan: "20% / 60% / 20%",
        },
        {
          unit: "3 BEDROOM RESIDENCE",
          suiteRange: "On request (see floor plan PDF)",
          balcony: "On request (see floor plan PDF)",
          totalRange: "On request (see floor plan PDF)",
          startingPrice: "Price on request",
          handover: "Q1 2026",
          paymentPlan: "20% / 60% / 20%",
        },
        {
          unit: "4 BEDROOM RESIDENCE",
          suiteRange: "On request (see floor plan PDF)",
          balcony: "On request (see floor plan PDF)",
          totalRange: "On request (see floor plan PDF)",
          startingPrice: "Price on request",
          handover: "Q1 2026",
          paymentPlan: "20% / 60% / 20%",
        },
      ],
    },

    // Floor plans: safe “working” setup (no broken images)
    floorPlans: {
      type: "penthouses",
      plans: [
        {
          id: "2br",
          title: "2 Bedroom Residence",
          specs: {
            "Total Area": "On request",
            "Starting Price": "AED 19,400,000",
            Handover: "Q1 2026",
            "Payment Plan": "20% / 60% / 20%",
          },
          images: [],
          pdf: cdn("Bugatti Residences floor plan.pdf"),
        },
        {
          id: "3br",
          title: "3 Bedroom Residence",
          specs: {
            "Total Area": "On request",
            "Starting Price": "Price on request",
            Handover: "Q1 2026",
            "Payment Plan": "20% / 60% / 20%",
          },
          images: [],
          pdf: cdn("Bugatti Residences floor plan.pdf"),
        },
        {
          id: "4br",
          title: "4 Bedroom Residence",
          specs: {
            "Total Area": "On request",
            "Starting Price": "Price on request",
            Handover: "Q1 2026",
            "Payment Plan": "20% / 60% / 20%",
          },
          images: [],
          pdf: cdn("Bugatti Residences floor plan.pdf"),
        },
      ],
      brochureHref: cdn("Bugatti Residences floor plan.pdf"),
    },

    amenities: {
      title: "Amenities & Services",
      amenities: [
        { label: "PRIVATE CHEF SERVICE", icon: "👨‍🍳", color: "#d7b46a" },
        { label: "CONCIERGE SERVICE", icon: "🛎️", color: "#d7b46a" },
        { label: "VALET SERVICE", icon: "🚗", color: "#d7b46a" },
        { label: "HOUSE KEEPING", icon: "🧹", color: "#d7b46a" },
        { label: "PRIVATE GARAGE", icon: "🏎️", color: "#d7b46a" },
        { label: "PRIVATE POOL", icon: "🏊", color: "#d7b46a" },
        { label: "SPA & WELLNESS", icon: "🧖", color: "#d7b46a" },
      ],
    },

    // EN
    location: {
      title: "Project Location",
      projectName: "Bugatti Residences by Binghatti",
      address: "Business Bay, Dubai, United Arab Emirates",
      lat: 25.1878638,
      lng: 55.2654197,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "Prime Business Bay address near Dubai Water Canal",
        },
        {
          icon: "🚗",
          text: "Fast access to Downtown Dubai via Al Khail Rd & Sheikh Zayed Rd",
        },
        {
          icon: "🛍️",
          text: "Close to Dubai Mall, DIFC, and major lifestyle destinations",
        },
      ],
    },

    nearbyAttractions: {
      title: "Nearby Highlights",
      attractions: [
        { name: "Dubai Mall", distance: "2.0 km", time: null, icon: "🛍️" },
        { name: "Burj Park", distance: "2.9 km", time: null, icon: "🏙️" },
        { name: "Safa Park", distance: "3.7 km", time: null, icon: "🌳" },
        { name: "Jumeirah Beach", distance: "6.7 km", time: null, icon: "🏖️" },
      ],
    },

    paymentPlan: {
      title: "Payment Plan",
      steps: [
        { label: "On booking", percent: "20%", when: "On booking" },
        {
          label: "During construction",
          percent: "60%",
          when: "During construction",
        },
        { label: "Upon handover", percent: "20%", when: "Upon handover" },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title:
        "Bugatti Residences من Binghatti | مساكن فاخرة بعلامة تجارية في دبي",
      description:
        "Bugatti Residences من Binghatti مشروع سكني فائق الفخامة بعلامة تجارية في الخليج التجاري (Business Bay) بدبي، يجمع بين تصميم أيقوني وتجربة سكنية راقية وخدمات مختارة.",
      keywords:
        "Bugatti Residences، بن غاطي، مساكن بعلامة تجارية دبي، بنتهاوس فاخر دبي، الخليج التجاري، برج فخم",
      canonical: "/properties/penthouses/binghatti/bugatti",
    },

    project: {
      name: "Bugatti Residences by Binghatti",
      developer: "بن غاطي",
      location: "الخليج التجاري (Business Bay)، دبي، الإمارات",
      status: "قيد التطوير / تحت الإنشاء",
      startingPrice: "ابتداءً من 19,400,000 درهم",
      completionDate: "الربع الأول 2026",
      unitTypes: "شقق وبنتهاوس (2–4 غرف نوم)",
      brandedProject: "نعم",
      furnishing: "نصف مفروش",
      serviceCharge: "40 درهم/قدم²",
      paymentPlan: "20% / 60% / 20%",
    },

    hero: {
      backgroundUrl: cdn("BUGATTI RESIDENCES BY BINGHATTI _C8.jpg"),
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/bugatti-logo.png",
      companyName: "بن غاطي",
      rating: 4.7,
    },

    intro: {
      title: "فخامة بعلامة تجارية. تصميم أيقوني. عنوان دبي.",
      paragraphs: [
        "Bugatti Residences من Binghatti مشروع بعلامة تجارية فائق الفخامة في الخليج التجاري—موجّه لمن يبحث عن الندرة، والهوية التصميمية، والحضور على أفق دبي.",
        "مرافق وخدمات مختارة تمنح تجربة إقامة راقية مستوحاة من ريفييرا فرنسا، مع توقيع معماري جريء وعناصر رفاهية عالية.",
      ],
      brochures: [
        {
          title: "تحميل الكتيّب (PDF)",
          url: cdn("Bugatti Residences by Binghatti - Generic.pdf"),
          type: "main",
        },
        {
          title: "المخططات (PDF)",
          url: cdn("Bugatti Residences floor plan.pdf"),
          type: "floorplans",
        },
      ],
      imgUrl: cdn("BUGATTI RESIDENCES BY BINGHATTI View.jpg"),
      imgAlt: "Bugatti Residences من Binghatti",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "الخليج التجاري",
          label: "دبي",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🗓️",
          value: "الربع الأول 2026",
          label: "التسليم",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "💳",
          value: "20/60/20",
          label: "خطة الدفع",
        },
      ],
    },

    gallery: {
      title: "صور المشروع",
      slides: [
        cdn("BUGATTI RESIDENCES BY BINGHATTI Exterior.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI View.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI _Aerial View_.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Riviera Pool.jpg"),
        // cdn("BUGATTI RESIDENCES BY BINGHATTI SPA.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Valet Service.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Garage.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Penthouse.jpg"),
        cdn("binghatti_Bedroom_Final_2023-11-16.jpg"),
        cdn("binghatti_Bathroom_Final_2023-11-16.jpg"),
        cdn("binghatti_Kitchen1_Final_2023-11-16.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Living room.jpg"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Dining.png"),
        cdn("BUGATTI RESIDENCES BY BINGHATTI Balcony_.jpg"),
      ],
      projectTag: "Bugatti Residences",
    },

    // ✅ Your agreed structure in Arabic
    units: {
      title: "الوحدات والأسعار",
      handover: "الربع الأول 2026",
      paymentPlan: "20% / 60% / 20%",
      items: [
        {
          unit: "سكن غرفتين",
          suiteRange: "عند الطلب (راجع ملف المخططات)",
          balcony: "عند الطلب (راجع ملف المخططات)",
          totalRange: "عند الطلب (راجع ملف المخططات)",
          startingPrice: "ابتداءً من 19,400,000 درهم",
          handover: "الربع الأول 2026",
          paymentPlan: "20% / 60% / 20%",
        },
        {
          unit: "سكن 3 غرف",
          suiteRange: "عند الطلب (راجع ملف المخططات)",
          balcony: "عند الطلب (راجع ملف المخططات)",
          totalRange: "عند الطلب (راجع ملف المخططات)",
          startingPrice: "السعر عند الطلب",
          handover: "الربع الأول 2026",
          paymentPlan: "20% / 60% / 20%",
        },
        {
          unit: "سكن 4 غرف",
          suiteRange: "عند الطلب (راجع ملف المخططات)",
          balcony: "عند الطلب (راجع ملف المخططات)",
          totalRange: "عند الطلب (راجع ملف المخططات)",
          startingPrice: "السعر عند الطلب",
          handover: "الربع الأول 2026",
          paymentPlan: "20% / 60% / 20%",
        },
      ],
    },

    floorPlans: {
      type: "بنتهاوس",
      plans: [
        {
          id: "2br",
          title: "سكن غرفتين",
          specs: {
            "المساحة الإجمالية": "عند الطلب",
            "السعر الابتدائي": "19,400,000 درهم",
            "موعد التسليم": "الربع الأول 2026",
            "خطة السداد": "٢٠٪ / ٦٠٪ / ٢٠٪",
          },
          images: [],
          pdf: cdn("Bugatti Residences floor plan.pdf"),
        },
        {
          id: "3br",
          title: "سكن 3 غرف",
          specs: {
            "المساحة الإجمالية": "عند الطلب",
            "السعر الابتدائي": "السعر عند الطلب",
            "موعد التسليم": "الربع الأول 2026",
            "خطة السداد": "٢٠٪ / ٦٠٪ / ٢٠٪",
          },
          images: [],
          pdf: cdn("Bugatti Residences floor plan.pdf"),
        },
        {
          id: "4br",
          title: "سكن 4 غرف",
          specs: {
            "المساحة الإجمالية": "عند الطلب",
            "السعر الابتدائي": "السعر عند الطلب",
            "موعد التسليم": "الربع الأول 2026",
            "خطة السداد": "٢٠٪ / ٦٠٪ / ٢٠٪",
          },
          images: [],
          pdf: cdn("Bugatti Residences floor plan.pdf"),
        },
      ],
      brochureHref: cdn("Bugatti Residences floor plan.pdf"),
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "خدمة شيف خاص", icon: "👨‍🍳", color: "#d7b46a" },
        { label: "كونسيرج", icon: "🛎️", color: "#d7b46a" },
        { label: "فاليه", icon: "🚗", color: "#d7b46a" },
        { label: "خدمة تنظيف", icon: "🧹", color: "#d7b46a" },
        { label: "جراج خاص", icon: "🏎️", color: "#d7b46a" },
        { label: "مسبح خاص", icon: "🏊", color: "#d7b46a" },
        { label: "سبا وعافية", icon: "🧖", color: "#d7b46a" },
      ],
    },

    // AR
    location: {
      title: "موقع المشروع",
      projectName: "بوجاتي ريزيدنسز من بن غاطي",
      address: "الخليج التجاري (Business Bay)، دبي، الإمارات العربية المتحدة",
      lat: 25.1878638,
      lng: 55.2654197,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🏙️",
          text: "موقع مميز في الخليج التجاري بالقرب من قناة دبي المائية",
        },
        {
          icon: "🚗",
          text: "وصول سريع إلى وسط دبي عبر شارع الخيل وشارع الشيخ زايد",
        },
        {
          icon: "🛍️",
          text: "قريب من دبي مول وDIFC وأبرز وجهات التسوق والمطاعم",
        },
      ],
    },

    nearbyAttractions: {
      title: "أبرز المعالم القريبة",
      attractions: [
        { name: "دبي مول", distance: "2.0 كم", time: null, icon: "🛍️" },
        { name: "برج بارك", distance: "2.9 كم", time: null, icon: "🏙️" },
        { name: "حديقة الصفا", distance: "3.7 كم", time: null, icon: "🌳" },
        { name: "شاطئ جميرا", distance: "6.7 كم", time: null, icon: "🏖️" },
      ],
    },

    paymentPlan: {
      title: "خطة الدفع",
      steps: [
        { label: "عند الحجز", percent: "20%", when: "عند الحجز" },
        { label: "أثناء الإنشاء", percent: "60%", when: "أثناء الإنشاء" },
        { label: "عند التسليم", percent: "20%", when: "عند التسليم" },
      ],
    },
  },
};

export default bugattiResidencesData;
