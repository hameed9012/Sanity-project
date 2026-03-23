/**
 * sanity-update-fixes.mjs
 * ────────────────────────────────────────────────────────────────────────────
 * Patches Sanity documents via the API. No JS source files are touched —
 * all content lives in Sanity Studio from this point forward.
 *
 * HOW THE DOCS ARE STRUCTURED
 * ────────────────────────────
 * Documents were imported with nested en / ar objects:
 *   doc.en.project.name, doc.en.project.location, doc.en.project.status ...
 *   doc.en.hero.backgroundUrl
 *   doc.en.amenities.amenities  → array of { label, labelAr, icon }
 *   doc.en.project.completionDate
 *   doc.en.project.paymentPlan
 *   doc.en.project.startingPrice
 *   doc.en.project.units
 *   doc.status  → flat field used by filtering (offplan / secondary / land)
 *   doc.type    → flat field (apartments / villas / penthouses / commercial-retail)
 *
 * The SanityProjectsContext reads these exact paths. This script patches them.
 *
 * HOW TO RUN
 * ──────────
 *   PowerShell:  $env:SANITY_TOKEN = "sk-..."  ;  node sanity-update-fixes.mjs
 *   Bash/Mac:    SANITY_TOKEN=sk-... node sanity-update-fixes.mjs
 *
 * Requires:  npm install @sanity/client
 */

import { createClient } from "@sanity/client";

// ─── Sanity client ────────────────────────────────────────────────────────────
const client = createClient({
  projectId:  "20d53wo5",
  dataset:    "production",
  token:      process.env.SANITY_TOKEN,
  apiVersion: "2024-01-01",
  useCdn:     false,
});

if (!process.env.SANITY_TOKEN) {
  console.error("❌  SANITY_TOKEN not set. Run:  $env:SANITY_TOKEN = 'sk-...'");
  process.exit(1);
}

// ─── Helper: resolve doc _id from slug ───────────────────────────────────────
async function findDoc(docType, slug) {
  const doc = await client.fetch(
    `*[_type == $t && slug.current == $s][0]{ _id }`,
    { t: docType, s: slug }
  );
  return doc?._id ?? null;
}

// ─── Helper: amenity array item ───────────────────────────────────────────────
// icon values must match keys in phosphorIconResolver.js AMENITY_ICON_MAP
function am(label, labelAr, icon) {
  return {
    _type: "amenityItem",
    _key:  label.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 20) + Math.random().toString(36).slice(2, 6),
    label,
    labelAr,
    icon,
  };
}

// ─── Helper: patch a doc by slug ─────────────────────────────────────────────
async function patch(docType, slug, setPaths) {
  const id = await findDoc(docType, slug);
  if (!id) {
    console.log(`  ⚠️  [${slug}] not found — skipping`);
    return;
  }
  try {
    await client.patch(id).set(setPaths).commit();
    console.log(`  ✅  [${slug}]`);
  } catch (err) {
    console.error(`  ❌  [${slug}]:`, err.message);
  }
}

// ─── UPDATES ─────────────────────────────────────────────────────────────────
// Each section patches en.* / ar.* nested fields — the real doc structure.
// Also patches flat `status` and `type` fields where used by filtering.
// ─────────────────────────────────────────────────────────────────────────────

async function run() {

  // ── 1. Azizi Lina — location + amenities ───────────────────────────────────
  console.log("\n▶ Azizi Lina — location + amenities");
  await patch("property", "lina", {
    "en.project.location":     "Jebel Ali, Dubai, United Arab Emirates",
    "ar.project.location":     "جبل علي، دبي، الإمارات العربية المتحدة",
    "en.location.address":     "Azizi Lina, Jebel Ali, Dubai",
    "ar.location.address":     "عزيزي لينا، جبل علي، دبي",
    "en.amenities.amenities": [
      am("Swimming Pool",        "مسبح",                        "pool"),
      am("Fully Equipped Gym",   "صالة رياضية مجهزة",          "gym"),
      am("Kids Play Area",       "منطقة ألعاب للأطفال",        "playground"),
      am("Multipurpose Hall",    "قاعة متعددة الأغراض",        "hall"),
      am("Landscaped Gardens",   "حدائق منسقة",                "garden"),
      am("24/7 Security",        "أمن على مدار الساعة",        "security"),
      am("Covered Parking",      "مواقف مغطاة",                "parking"),
      am("High-Speed Elevators", "مصاعد عالية السرعة",         "elevator"),
      am("Retail Shops",         "محلات تجارية",               "retail"),
      am("Jogging Track",        "مسار للركض",                 "jogging"),
    ],
  });

  // ── 2. Azizi Gabriel — amenities ───────────────────────────────────────────
  console.log("\n▶ Azizi Gabriel — amenities");
  await patch("property", "gabriel", {
    "en.amenities.amenities": [
      am("Swimming Pool",        "مسبح",                        "pool"),
      am("Fully Equipped Gym",   "صالة رياضية مجهزة",          "gym"),
      am("Kids Play Area",       "منطقة ألعاب للأطفال",        "playground"),
      am("Landscaped Gardens",   "حدائق منسقة",                "garden"),
      am("24/7 Security",        "أمن على مدار الساعة",        "security"),
      am("Covered Parking",      "مواقف مغطاة",                "parking"),
      am("Retail Shops",         "محلات تجارية",               "retail"),
      am("Jogging Track",        "مسار للركض",                 "jogging"),
      am("Lobby Lounge",         "ردهة استقبال",               "lounge"),
      am("High-Speed Elevators", "مصاعد عالية السرعة",         "elevator"),
    ],
  });

  // ── 3. Azizi Monaco — Mansion → Villa + handover Q4 2026 ───────────────────
  console.log("\n▶ Azizi Monaco — Villa rename + handover Q4 2026");
  await patch("property", "monaco", {
    "en.project.units":          "6 & 8 Bedroom Villas (MM7 & MM2)",
    "ar.project.units":          "فلل 6 و8 غرف نوم (MM7 و MM2)",
    "en.project.completionDate": "Q4 2026",
    "ar.project.completionDate": "الربع الرابع 2026",
  });

  // ── 4. Azizi Wares — location Al Furjan ─────────────────────────────────────
  console.log("\n▶ Azizi Wares — location Al Furjan");
  await patch("property", "wares", {
    "en.project.location": "Al Furjan, Dubai, UAE",
    "ar.project.location": "الفرجان، دبي، الإمارات",
  });

  // ── 5. Danube Shahrukhz — post-completion wording ──────────────────────────
  console.log("\n▶ Danube Shahrukhz — post-completion");
  await patch("property", "shahrukhz", {
    "en.project.paymentPlan": "70/30 Post Completion (1% per month)",
    "ar.project.paymentPlan": "70/30 بعد الإتمام (1% شهريًا)",
  });

  // ── 6–11. Danube amenities (15 items each) ──────────────────────────────────
  const danubeAmenities = [
    am("Swimming Pool",          "مسبح",                          "pool"),
    am("Fully Equipped Gym",     "صالة رياضية مجهزة",            "gym"),
    am("Kids Play Area",         "منطقة ألعاب للأطفال",          "playground"),
    am("Spa & Wellness",         "سبا ومركز عافية",              "spa"),
    am("Yoga Deck",              "منطقة يوغا",                   "yoga"),
    am("BBQ Terrace",            "تراس شواء",                    "bbq"),
    am("Landscaped Gardens",     "حدائق منسقة",                  "garden"),
    am("Indoor Cinema",          "سينما داخلية",                 "cinema"),
    am("Covered Parking",        "مواقف مغطاة",                  "parking"),
    am("24/7 Concierge",         "كونسيرج على مدار الساعة",      "concierge"),
    am("Jogging Track",          "مسار للركض",                   "jogging"),
    am("Tennis Court",           "ملعب تنس",                     "tennis"),
    am("Multipurpose Hall",      "قاعة متعددة الأغراض",          "hall"),
    am("Retail Shops",           "محلات تجارية",                  "retail"),
    am("24/7 Security",          "أمن على مدار الساعة",          "security"),
  ];

  for (const slug of ["bayz101", "bayz102", "breez", "diamondz", "eleganz", "fashionz", "shahrukhz"]) {
    console.log(`\n▶ Danube ${slug} — amenities`);
    await patch("property", slug, { "en.amenities.amenities": danubeAmenities });
  }

  // ── 12. Tiger Sky Tower — handover Q4 2028 ─────────────────────────────────
  console.log("\n▶ Tiger Sky Tower — handover Q4 2028");
  await patch("property", "sky-tower", {
    "en.project.completionDate": "Q4 2028",
    "ar.project.completionDate": "الربع الرابع 2028",
  });

  // ── 13. Binghatti Mercedes-Benz — handover Q4 2026 + 50/50 ─────────────────
  console.log("\n▶ Binghatti Mercedes-Benz City — handover + payment plan");
  await patch("property", "mercedes-benz-places-binghatti-city", {
    "en.project.completionDate": "Q4 2026",
    "ar.project.completionDate": "الربع الرابع 2026",
    "en.project.paymentPlan":    "50/50",
    "ar.project.paymentPlan":    "50/50",
  });

  // ── 14. Binghatti Sky Terraces — location Business Bay + handover Q4 2026 ──
  console.log("\n▶ Binghatti Sky Terraces — location + handover");
  await patch("property", "skyterraces", {
    "en.project.location":       "Business Bay, Dubai, UAE",
    "ar.project.location":       "الخليج التجاري، دبي، الإمارات",
    "en.project.completionDate": "Q4 2026",
    "ar.project.completionDate": "الربع الرابع 2026",
  });

  // ── 15. Sobha Sanctuary — Grove / Brooks clarification ─────────────────────
  console.log("\n▶ Sobha Sanctuary — Grove / Brooks units");
  await patch("property", "sobha-sanctuary", {
    "en.project.units": "4 & 5 Bedroom Villas (Grove: Townhouses & Attached Villas | Brooks: Detached Villas)",
    "ar.project.units": "فلل 4 و5 غرف (غروف: تاون هاوس وفلل ملتصقة | بروكس: فلل مستقلة)",
  });

  // ── 16. Sobha Elwood Secondary — price ─────────────────────────────────────
  console.log("\n▶ Sobha Elwood Secondary — price AED 9,900,000");
  await patch("property", "sobha-elwood-secondary", {
    "en.project.startingPrice": "AED 9,900,000",
    "ar.project.startingPrice": "9,900,000 درهم",
  });

  // ── 17. Sobha One — force Off-Plan so it doesn't appear in /secondary ───────
  console.log("\n▶ Sobha One — status: offplan");
  await patch("property", "one", {
    status:                  "offplan",
    "en.project.status":     "Off-Plan",
    "ar.project.status":     "قيد الإنشاء",
  });

  // ── 18. Riviera Reve — same ─────────────────────────────────────────────────
  console.log("\n▶ Riviera Reve — status: offplan");
  await patch("property", "riviera-reve", {
    status:              "offplan",
    "en.project.status": "Off-Plan",
    "ar.project.status": "قيد الإنشاء",
  });

  // ── 19. W Residences — JLT location ────────────────────────────────────────
  console.log("\n▶ W Residences — location JLT");
  await patch("property", "w-residences", {
    "en.project.location": "Jumeirah Lake Towers (JLT), Dubai, UAE",
    "ar.project.location": "أبراج بحيرات جميرا (JLT)، دبي، الإمارات",
  });

  // ── 20. Inaura — Downtown Dubai ─────────────────────────────────────────────
  console.log("\n▶ Inaura Hotels & Residences — Downtown Dubai");
  await patch("property", "inaura", {
    "en.project.location": "Downtown Dubai, Dubai, UAE",
    "ar.project.location": "وسط مدينة دبي، دبي، الإمارات",
    "en.location.address": "Inaura Hotels & Residences, Downtown Dubai, UAE",
    "ar.location.address": "إيناورا فنادق وشقق، وسط مدينة دبي، الإمارات",
  });

  // ── 21. Anantara Sharjah — Maryam Island ────────────────────────────────────
  console.log("\n▶ Anantara Sharjah — Maryam Island, Sharjah");
  await patch("property", "anantara", {
    "en.project.location": "Maryam Island, Sharjah, UAE",
    "ar.project.location": "جزيرة مريم، الشارقة، الإمارات",
  });

  // ── 22. il Teatro — handover Q1 2028 ────────────────────────────────────────
  console.log("\n▶ il Teatro — handover Q1 2028");
  await patch("property", "il-teatro", {
    "en.project.completionDate": "Q1 2028",
    "ar.project.completionDate": "الربع الأول 2028",
  });

  // ── 23. Taraf Terra Golf Phase 2 — handover Q4 2027 ────────────────────────
  console.log("\n▶ Taraf Terra Golf Phase 2 — handover Q4 2027");
  await patch("property", "terra-golf-phase-2", {
    "en.project.completionDate": "Q4 2027",
    "ar.project.completionDate": "الربع الرابع 2027",
  });

  // ── 24. Bugatti Residences — unit types + starting price ─────────────────────
  console.log("\n▶ Bugatti Residences — unit types + price");
  await patch("property", "bugatti", {
    "en.project.units":         "3–5 Bedroom Sky Mansions & Penthouses",
    "ar.project.units":         "منازل سماوية وبنتهاوس من 3 إلى 5 غرف",
    "en.project.startingPrice": "AED 10,000,000",
    "ar.project.startingPrice": "10,000,000 درهم",
  });

  // ── 25. Azure Azizi — handover Q2 2026 ──────────────────────────────────────
  console.log("\n▶ Azure Azizi — handover Q2 2026");
  await patch("property", "riviera-azure", {
    "en.project.completionDate": "Q2 2026",
    "ar.project.completionDate": "الربع الثاني 2026",
  });

  // ── 26. Seahaven — type: penthouses ─────────────────────────────────────────
  console.log("\n▶ Seahaven — type: penthouses");
  await patch("property", "seahaven-penthouse", {
    type:              "penthouses",
    "en.project.type": "Penthouses",
    "ar.project.type": "بنتهاوس",
  });

  // ── 27. All articles → featured: true ────────────────────────────────────────
  console.log("\n▶ Articles — set featured: true on all");
  const articleSlugs = await client.fetch(
    `*[_type == "article"]{ "slug": slug.current }`
  );
  for (const { slug } of articleSlugs) {
    await patch("article", slug, { featured: true });
  }

  // ─── Summary ──────────────────────────────────────────────────────────────
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Done. All patches applied via Sanity API.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋  REMAINING TASKS — do these manually in Sanity Studio:

  1. Azizi Venice Retail  — confirm payment plan with developer, then set in Studio
  2. DAMAC Volta          — upload images to BunnyCDN /damac/volta/, paste URLs in Studio
  3. Binghatti SkyTerraces— upload images to BunnyCDN, paste in Studio gallery
  4. Residence Akala      — replace blurry gallery images with sharper CDN URLs
  5. Azure Azizi          — add full amenity list + fix layout/gallery images in Studio
  6. Tab Ghar Sky         — confirm correct single handover date from developer, set it
  7. Commercial units     — add Binghatti/Sobha commercial unit prices+sizes in Studio
  8. Area content         — add descriptions/stats for each area doc in Studio
  9. Public → CDN         — move /public assets to BunnyCDN, update image URLs in Studio
 10. New articles         — create via Sanity Studio using the article section builder
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
}

run().catch(err => {
  console.error("💥 Fatal error:", err.message);
  process.exit(1);
});
