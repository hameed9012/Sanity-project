/**
 * sanity-patch.mjs — Data correction patches
 * IDs follow pattern: property-{slug}, developer-{slug}
 * (matching sanity-import.mjs: `property-${p.slug}`)
 *
 * PowerShell:
 *   $env:SANITY_TOKEN = "sk-..."
 *   node sanity-patch.mjs
 */

import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    const v = t.slice(eq + 1).trim().replace(/^['"]|['"]$/g, "");
    if (!process.env[k]) process.env[k] = v;
  }
}

const TOKEN = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN;
if (!TOKEN) { console.error("\n❌  SANITY_TOKEN not set.\n"); process.exit(1); }

const client = createClient({
  projectId: "20d53wo5", dataset: "production",
  apiVersion: "2025-01-01", useCdn: false, token: TOKEN,
});

const key = () => Math.random().toString(36).slice(2, 8);
const amenItem = (label, icon = "✓") => ({ _type: "object", _key: key(), label, icon, color: "#c9a26a" });

let patched = 0, skipped = 0, failed = 0;

async function patch(id, label, setter) {
  try {
    const exists = await client.fetch(`*[_id==$id][0]._id`, { id });
    if (!exists) { console.log(`  ⚠️   Not found: ${label}`); skipped++; return; }
    await setter(client.patch(id)).commit();
    console.log(`  ✅  ${label}`);
    patched++;
  } catch (e) { console.error(`  ❌  ${label}: ${e.message}`); failed++; }
}

const ps  = (id, label, obj) => patch(id, label, p => p.set(obj));
const psm = (id, label, obj) => patch(id, label, p => p.setIfMissing(obj));

const DANUBE_AMENITIES = [
  amenItem("Lagoon-Style Swimming Pool","🏊"), amenItem("World's Longest Lazy River","🌊"),
  amenItem("Indoor Cinema","🎬"), amenItem("Bowling Alley","🎳"), amenItem("Ice Rink","⛸️"),
  amenItem("Squash Courts","🏸"), amenItem("Kids Play Area","🛝"),
  amenItem("Outdoor Seating Terrace","🏡"), amenItem("Retail Promenade","🛍️"),
  amenItem("Gymnasium & Fitness Studio","🏋️"), amenItem("Yoga & Meditation Deck","🧘"),
  amenItem("BBQ Stations","🔥"), amenItem("Jogging & Cycling Track","🚴"),
  amenItem("24/7 Security & CCTV","🔒"), amenItem("Dedicated Parking","🅿️"),
  amenItem("High-Speed Elevators","🛗"), amenItem("Business Lounge","💼"),
  amenItem("Concierge Services","🛎️"),
];

async function main() {
  console.log("\n🚀  sanity-patch.mjs — Corrected IDs (property-{slug})\n");

  // Omniyat & Beyond — exclude from off-plan
  await ps("developer-omniyat","Omniyat developer — excludeFromOffplan",{ excludeFromOffplan:true });
  await ps("developer-beyond","Beyond developer — excludeFromOffplan",  { excludeFromOffplan:true });
  for (const s of ["lumenaalta","opus-tower","orla-dorchester","the-alba-residences","vela-dorchester","vela-viento"])
    await ps(`property-${s}`,`Omniyat ${s} — excludeFromOffplan`,{ excludeFromOffplan:true });
  await ps("property-kanyon",  "Beyond: Kanyon — excludeFromOffplan",  { excludeFromOffplan:true });
  await ps("property-31-above","Beyond: 31 Above — excludeFromOffplan",{ excludeFromOffplan:true });

  // Sobha Elwood Resale — correct price
  await ps("property-sobha-elwood-secondary","Sobha Elwood Resale — price AED 9,900,000",{
    "en.project.startingPrice":"AED 9,900,000", minPrice:9900000,
  });

  // Sobha One — offplan only
  await ps("property-one","Sobha One — status: offplan",{ status:"offplan", isSecondary:false });

  // Riviera Reve — offplan
  await ps("property-riviera-retails","Riviera Rêve — status: offplan",{ status:"offplan", isSecondary:false });

  // Riviera Azure — handover
  await ps("property-riviera-azure","Riviera Azure — handover Q4 2025",{
    "en.project.completionDate":"Q4 2025","ar.project.completionDate":"الربع الرابع 2025",
  });

  // Azizi Lina — location Jebel Ali + amenities
  await ps("property-lina","Azizi Lina — Jebel Ali + amenities",{
    location:"Jebel Ali, Dubai, UAE",
    "en.project.location":"Jebel Ali, Dubai, UAE","ar.project.location":"جبل علي، دبي، الإمارات",
    "en.location.address":"Jebel Ali, Dubai, UAE","ar.location.address":"جبل علي، دبي، الإمارات",
    "en.location.lat":24.9708962,"en.location.lng":55.0892979,
    "en.amenities.amenities":[
      amenItem("Swimming Pool","🏊"),amenItem("Gymnasium","🏋️"),amenItem("Kids Play Area","🛝"),
      amenItem("BBQ Area","🔥"),amenItem("Jogging Track","🏃"),amenItem("Community Park","🌳"),
      amenItem("24/7 Security","🔒"),amenItem("Covered Parking","🅿️"),amenItem("Retail Outlets","🛍️"),
      amenItem("High-Speed Elevators","🛗"),amenItem("Lobby Lounge","🛋️"),amenItem("Yoga Deck","🧘"),
      amenItem("Sauna & Steam Room","🧖"),amenItem("CCTV Surveillance","📹"),amenItem("Concierge Service","🛎️"),
    ],
  });

  // Azizi Gabriel — amenities
  await ps("property-gabriel","Azizi Gabriel — full amenities",{
    "en.amenities.amenities":[
      amenItem("Swimming Pool","🏊"),amenItem("Gymnasium","🏋️"),amenItem("Kids Play Area","🛝"),
      amenItem("BBQ Area","🔥"),amenItem("Jogging Track","🏃"),amenItem("Retail Outlets","🛍️"),
      amenItem("Community Park","🌳"),amenItem("24/7 Security","🔒"),amenItem("Covered Parking","🅿️"),
      amenItem("High-Speed Elevators","🛗"),amenItem("Lobby Lounge","🛋️"),
      amenItem("Yoga & Wellness Area","🧘"),amenItem("CCTV Surveillance","📹"),amenItem("Concierge Service","🛎️"),
    ],
  });

  // Azizi Wares — Jebel Ali location
  await ps("property-wares","Azizi Wares — location: Jebel Ali",{
    location:"Jebel Ali, Dubai, UAE",
    "en.project.location":"Jebel Ali, Dubai, UAE","ar.project.location":"جبل علي، دبي، الإمارات",
    "en.location.address":"Jebel Ali, Dubai, UAE","ar.location.address":"جبل علي، دبي، الإمارات",
  });

  // Azizi Monaco — Villas not Mansion + handover
  await ps("property-monaco","Azizi Monaco — type:Villas + handover Q4 2026",{
    type:"villas","en.project.type":"Villas","ar.project.type":"فيلا",
    "en.project.completionDate":"Q4 2026","ar.project.completionDate":"الربع الرابع 2026",
  });

  // Azizi Venice retail payment plan
  await psm("property-venice","Azizi Venice — retail payment plan",{
    "en.project.paymentPlan":"50% / 50% or 40% / 60% (offer/building dependent)",
  });

  // Sobha SeaHaven — penthouses + amenities
  await ps("property-seahaven-penthouse","Sobha SeaHaven — penthouses + amenities",{
    type:"penthouses","en.project.type":"Penthouses","ar.project.type":"بنتهاوس",
    "en.amenities.amenities":[
      amenItem("Private Infinity Pool","🏊"),amenItem("Full Floor Sky Penthouse","🏙️"),
      amenItem("Private Lift Access","🛗"),amenItem("Panoramic Sea Views","🌊"),
      amenItem("Smart Home System","🏠"),amenItem("Private Terrace","🌅"),
      amenItem("Concierge & Butler Service","🛎️"),amenItem("Exclusive Residents Lounge","🛋️"),
      amenItem("Spa & Wellness Center","🧖"),amenItem("Gymnasium","🏋️"),
      amenItem("Yacht Berth Access","⚓"),amenItem("Valet Parking","🅿️"),
      amenItem("24/7 Security & CCTV","🔒"),amenItem("Beach Access","🏖️"),
      amenItem("Fine Dining Restaurant","🍽️"),amenItem("Kids Play Area","🛝"),
    ],
  });

  // Sobha Sanctuary — Grove & Brooks clarification
  await ps("property-sobha-sanctuary","Sobha Sanctuary — Grove & Brooks + amenities",{
    "en.project.type":"Villas","ar.project.type":"فيلا",
    "en.intro.title":"Sobha Sanctuary — Grove (Detached Villas) & Brooks (Townhouses / Attached Villas)",
    "en.amenities.amenities":[
      amenItem("Private Gated Community","🔒"),amenItem("Lagoon & Landscaped Parks","🌊"),
      amenItem("Walking & Cycling Trails","🚴"),amenItem("Exclusive Clubhouse","🏛️"),
      amenItem("Children Play Areas","🛝"),amenItem("24/7 Security","🛡️"),
      amenItem("Swimming Pool","🏊"),amenItem("Gymnasium","🏋️"),amenItem("Community Retail","🛍️"),
      amenItem("Grove: Detached Villas","🏡"),amenItem("Brooks: Townhouses & Attached Villas","🏘️"),
      amenItem("Private Garden per Villa","🌳"),
    ],
  });

  // Binghatti Sky Terraces
  await ps("property-skyterraces","Binghatti Sky Terraces — location + handover Q4 2026 + amenities",{
    location:"Dubai Motor City, Dubai, UAE",
    "en.project.location":"Dubai Motor City, Dubai, UAE","ar.project.location":"مدينة دبي للسيارات، دبي، الإمارات",
    "en.project.completionDate":"Q4 2026","ar.project.completionDate":"الربع الرابع 2026",
    "en.location.address":"Dubai Motor City, Dubai, UAE","ar.location.address":"مدينة دبي للسيارات، دبي، الإمارات",
    "en.location.lat":25.0469,"en.location.lng":55.2356,
    "en.amenities.amenities":[
      amenItem("Sky Terraces — Panoramic Views","🌇"),amenItem("Rooftop Swimming Pool","🏊"),
      amenItem("Gymnasium & Fitness Center","🏋️"),amenItem("Kids Play Zone","🛝"),
      amenItem("Retail Promenade","🛍️"),amenItem("24/7 Security","🔒"),
      amenItem("Covered Parking","🅿️"),amenItem("High-Speed Elevators","🛗"),
      amenItem("BBQ & Outdoor Lounge","🔥"),amenItem("Jogging Track","🏃"),
      amenItem("Community Center","🏛️"),amenItem("Motor City Location","🚗"),
    ],
  });

  // Mercedes-Benz Places
  await ps("property-mercedes-benz-places","Mercedes-Benz Places — handover Q4 2026 + amenities",{
    "en.project.completionDate":"Q4 2026","ar.project.completionDate":"الربع الرابع 2026",
    "en.project.paymentPlan":"50% During Construction / 50% On Handover",
    "en.amenities.amenities":[
      amenItem("Mercedes-Benz Branded Lobby","🚗"),amenItem("Private Pool per Unit","🏊"),
      amenItem("Sky Terrace & Rooftop Garden","🌇"),amenItem("Concierge & Valet Service","🛎️"),
      amenItem("Gym & Wellness Center","🏋️"),amenItem("Smart Home Automation","🏠"),
      amenItem("Private Parking (2 spots)","🅿️"),amenItem("EV Charging Stations","⚡"),
      amenItem("Business Lounge","💼"),amenItem("Rooftop Infinity Pool","🌊"),
      amenItem("24/7 Doorman & Security","🔒"),amenItem("Fine Dining & Café","🍽️"),
    ],
  });

  // Mercedes-Benz Places | Binghatti City
  await ps("property-mercedes-benz-places-binghatti-city","Mercedes-Benz Places | Binghatti City — handover Q2 2028 + amenities",{
    "en.project.completionDate":"Q2 2028","ar.project.completionDate":"الربع الثاني 2028",
    "en.project.paymentPlan":"60% During Construction / 40% On Handover",
    "en.amenities.amenities":[
      amenItem("Mercedes-Benz Branded Residences","🚗"),amenItem("Swimming Pool & Deck","🏊"),
      amenItem("Fully Equipped Gymnasium","🏋️"),amenItem("Concierge Service","🛎️"),
      amenItem("Kids Play Area","🛝"),amenItem("Retail & Dining at Podium","🛍️"),
      amenItem("Smart Home System","🏠"),amenItem("24/7 Security","🔒"),
      amenItem("Covered Parking","🅿️"),amenItem("Rooftop Terrace","🌇"),
      amenItem("Yoga & Meditation Area","🧘"),amenItem("EV Charging Stations","⚡"),
    ],
  });

  // Bugatti Residences
  await ps("property-bugatti","Bugatti Residences — sizes + full amenities",{
    "en.project.units":"Apartments (2,000–7,500 sqft) | Penthouses (from 18,000 sqft)",
    "en.amenities.amenities":[
      amenItem("Private Chef Service","👨‍🍳"),amenItem("Concierge & Butler Service","🛎️"),
      amenItem("Valet Parking","🚗"),amenItem("Housekeeping Service","🏠"),
      amenItem("Private Garage (per unit)","🅿️"),amenItem("Private Swimming Pool","🏊"),
      amenItem("Spa & Wellness Center","🧖"),amenItem("Bugatti-Branded Lobby","🏛️"),
      amenItem("Sky Terrace & Rooftop Garden","🌇"),amenItem("Business Lounge & Co-working","💼"),
      amenItem("Infinity Pool","🌊"),amenItem("Gymnasium & Fitness Studio","🏋️"),
      amenItem("Smart Home Automation","🏠"),amenItem("EV Charging Bay","⚡"),
      amenItem("Cinema Room","🎬"),amenItem("Children's Play Area","🛝"),
      amenItem("24/7 Security","🔒"),amenItem("Fine Dining Restaurant","🍽️"),
    ],
  });

  // IL Teatro
  await ps("property-il-teatro","IL Teatro — handover Q4 2026",{
    "en.project.completionDate":"Q4 2026","ar.project.completionDate":"الربع الرابع 2026",
  });

  // Anantara Sharjah
  await ps("property-anantara","Anantara Sharjah — Al Khan Beach location",{
    location:"Al Khan Beach, Sharjah, UAE",
    "en.project.location":"Al Khan Beach, Sharjah, UAE","ar.project.location":"شاطئ الخان، الشارقة، الإمارات",
    "en.location.address":"Al Khan Beach, Sharjah, UAE","ar.location.address":"شاطئ الخان، الشارقة، الإمارات",
    "en.location.lat":25.3420,"en.location.lng":55.3910,
  });

  // Inaura Downtown
  await ps("property-inaura","Inaura Downtown — Downtown Sharjah location",{
    location:"Downtown Sharjah, Sharjah, UAE",
    "en.project.location":"Downtown Sharjah, Sharjah, UAE","ar.project.location":"وسط مدينة الشارقة، الشارقة، الإمارات",
    "en.location.address":"Downtown Sharjah, Sharjah, UAE","ar.location.address":"وسط مدينة الشارقة، الشارقة، الإمارات",
    "en.location.lat":25.3479,"en.location.lng":55.3922,
  });

  // W Residences
  await ps("property-w-residences","W Residences — JLT Dubai location",{
    location:"Jumeirah Lake Towers (JLT), Dubai, UAE",
    "en.project.location":"Jumeirah Lake Towers (JLT), Dubai, UAE","ar.project.location":"أبراج بحيرة جميرا، دبي، الإمارات",
    "en.location.address":"Jumeirah Lake Towers, Dubai, UAE","ar.location.address":"أبراج بحيرة جميرا، دبي، الإمارات",
    "en.location.lat":25.0760751,"en.location.lng":55.1514071,
  });

  // Sobha Elwood — type: villas
  await ps("property-elwood","Sobha Elwood — type: villas",{
    type:"villas","en.project.type":"Villas","ar.project.type":"فيلا",
  });

  // Danube Eleganz — fix status
  await ps("property-eleganz","Danube Eleganz — fix status: offplan",{ status:"offplan" });

  // Danube properties — payment plans + amenities
  for (const { slug, name, plan, handover } of [
    { slug:"bayz101",   name:"Bayz 101",  plan:"1% Monthly Post-Handover Payment Plan", handover:"Q1 2027" },
    { slug:"bayz102",   name:"Bayz 102",  plan:"1% Monthly Post-Handover Payment Plan", handover:"Q4 2027" },
    { slug:"breez",     name:"Breez",     plan:"1% Monthly Post-Handover Payment Plan", handover:"Q2 2026" },
    { slug:"diamondz",  name:"Diamondz",  plan:"1% Monthly Post-Handover Payment Plan", handover:"Q4 2027" },
    { slug:"fashionz",  name:"Fashionz",  plan:"1% Monthly Post-Handover Payment Plan", handover:"Q3 2026" },
    { slug:"eleganz",   name:"Eleganz",   plan:"1% Monthly Post-Handover Payment Plan", handover:"Q2 2025" },
    { slug:"aspirz",    name:"Aspirz",    plan:"10% Down | 59% During Construction | 1% On Handover | 30 Monthly Post-Handover", handover:"Q4 2028" },
    { slug:"shahrukhz", name:"SHAHRUKHZ", plan:"70% During Construction | 30% Post-Handover (1% per month)", handover:"Q2 2029" },
  ]) {
    await ps(`property-${slug}`,`Danube ${name} — plan + amenities`,{
      "en.project.paymentPlan":plan,"ar.project.paymentPlan":plan,
      "en.project.completionDate":handover,"ar.project.completionDate":handover,
      "en.amenities.amenities":DANUBE_AMENITIES,
    });
  }

  // Tiger Sky Tower
  await ps("property-sky-tower","Tiger Sky Tower — single handover Q4 2028",{
    "en.project.completionDate":"Q4 2028","ar.project.completionDate":"الربع الرابع 2028",
  });

  // Terra Golf Phase 2
  await ps("property-terra-golf-phase-2","Terra Golf Phase 2 — handover Q4 2027",{
    "en.project.completionDate":"Q4 2027","ar.project.completionDate":"الربع الرابع 2027",
  });

  // DAMAC Volta
  await psm("property-volta","DAMAC Volta — CDN hero image",{
    "en.hero.backgroundUrl":"https://luxury-real-estate-media.b-cdn.net/volta/exterior-01.jpg",
  });

  // siteSettings
  await ps("siteSettings","siteSettings — disable search navlink",{ "navbar.hideSearch":true });

  // Bulk fix remaining PHO labels
  console.log("\n📦  Bulk-fixing remaining PHO payment plan labels...");
  try {
    const phoDocs = await client.fetch(
      `*[_type == "property" && en.project.paymentPlan match "*PHO*"] { _id, "slug": slug.current, "plan": en.project.paymentPlan }`
    );
    if (!phoDocs.length) { console.log("  ℹ️   None found."); }
    else {
      for (const d of phoDocs) {
        const fixed = (d.plan||"").replace(/\bPHO\b/g,"Post-Handover");
        await client.patch(d._id).set({"en.project.paymentPlan":fixed}).commit();
        console.log(`  ✅  Fixed PHO: ${d.slug}`);
      }
    }
  } catch(e) { console.error("  ❌  Bulk PHO fix:",e.message); }

  console.log(`\n────────────────────────────────`);
  console.log(`✅  Done: ${patched} patched | ⚠️  Skipped: ${skipped} | ❌  Errors: ${failed}\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
