// scripts/process-dld-transactions.mjs
//
// Run this whenever you download a fresh DLD transactions export.
// It reads the raw JSON (or CSV) and writes a clean dld-area-stats.json
// which the market analysis map reads automatically — no deploy needed
// beyond committing the updated file.
//
// ─── USAGE ──────────────────────────────────────────────────────────────────
//   node scripts/process-dld-transactions.mjs Transactions_2026-03-10.json
//   node scripts/process-dld-transactions.mjs Transactions_2026-06-01.csv
//
// Output → src/data/dld-area-stats.json
//
// ─── HOW TO GET THE FILE ─────────────────────────────────────────────────────
//   1. Go to https://www.dubaipulse.gov.ae
//   2. Sign in → Data → Dubai Land Department → dld_transactions-open
//   3. Download as JSON or CSV (the full open dataset)
//   4. Drop the file anywhere in the project (e.g. project root)
//   5. Run the command above
//   6. Review src/data/dld-area-stats.json, optionally add rentalYield values
//   7. Commit → site updates automatically
//
// ─── RENTAL YIELD ────────────────────────────────────────────────────────────
//   The transactions export only covers sales — no rent data.
//   After running this script, you can manually add rental yield to the JSON:
//
//     "Business Bay": {
//       ...
//       "rentalYield": 5.9,        ← add this (%)
//       "avgAnnualRent": 110000,   ← add this (AED)
//       "totalROI": 20.3,          ← update this = rentalYield + capitalAppreciation
//     }
//
// ─── WHAT IT COMPUTES ────────────────────────────────────────────────────────
//   avgPriceSqft        = avg(meter_sale_price) ÷ 10.7639  [Sales, 2024+]
//   avgSalePrice        = avg(actual_worth)                [Sales, 2024+]
//   capitalAppreciation = ((avg 2024+ price/sqm) − (avg 2023 price/sqm))
//                         ÷ (avg 2023 price/sqm) × 100
//   transactionCount    = count of Sales records in 2024+
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync } from "fs";
import { resolve, extname } from "path";

const inputArg = process.argv[2];
if (!inputArg) {
  console.error("\n❌  No input file provided.");
  console.error("    Usage: node scripts/process-dld-transactions.mjs <transactions-file.json>\n");
  process.exit(1);
}

const inputPath  = resolve(process.cwd(), inputArg);
const outputPath = resolve(process.cwd(), "src/data/dld-area-stats.json");

console.log(`\n📂  Reading: ${inputPath}`);

const raw = readFileSync(inputPath, "utf-8");
let records = [];

if (extname(inputPath).toLowerCase() === ".csv") {
  records = parseCSV(raw);
  console.log(`📋  Parsed CSV: ${records.length.toLocaleString()} rows`);
} else {
  records = JSON.parse(raw);
  console.log(`📋  Parsed JSON: ${records.length.toLocaleString()} rows`);
}

// ── Filter: Sales only, valid prices ─────────────────────────────────────────
const sales = records.filter((r) => {
  const isSale  = String(r.trans_group_en || "").toLowerCase().includes("sale");
  const mPrice  = parseFloat(r.meter_sale_price);
  const sPrice  = parseFloat(r.actual_worth);
  const hasDate = !!r.instance_date;
  return isSale && mPrice > 100 && sPrice > 50_000 && hasDate;
});

console.log(`💰  Valid sales records: ${sales.length.toLocaleString()}`);

// ── Group by area ─────────────────────────────────────────────────────────────
const currentYear = new Date().getFullYear();
const areaMap = {};

for (const r of sales) {
  const year = String(r.instance_date).slice(0, 4);
  const name = String(r.area_name_en || "").trim();
  if (!name || !year) continue;

  if (!areaMap[name]) {
    areaMap[name] = { recent: [], prev: [], ar: "", id: null };
  }

  const entry = {
    m: parseFloat(r.meter_sale_price),
    p: parseFloat(r.actual_worth),
  };

  // "recent" = last year and current year (2024+)
  if (parseInt(year) >= currentYear - 1) {
    areaMap[name].recent.push(entry);
  }
  // "prev" = 2 years ago (for YoY comparison)
  if (parseInt(year) === currentYear - 2) {
    areaMap[name].prev.push(entry);
  }

  areaMap[name].ar = String(r.area_name_ar || "").trim();
  areaMap[name].id = r.area_id ?? null;
}

// ── Compute stats per area ────────────────────────────────────────────────────
const avg    = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null);
const round1 = (n)   => (n != null ? Math.round(n * 10) / 10 : null);

const MIN_TXNS = 5;
const results = {};

for (const [name, d] of Object.entries(areaMap)) {
  const { recent, prev } = d;
  if (recent.length < MIN_TXNS) continue;

  const avgMeterNow  = avg(recent.map((x) => x.m));
  const avgMeterPrev = prev.length >= MIN_TXNS ? avg(prev.map((x) => x.m)) : null;
  const avgSalePrice = avg(recent.map((x) => x.p));
  const avgPriceSqft = avgMeterNow ? Math.round(avgMeterNow / 10.7639) : null;

  const capApp =
    avgMeterNow && avgMeterPrev
      ? round1(((avgMeterNow - avgMeterPrev) / avgMeterPrev) * 100)
      : null;

  results[name] = {
    areaNameEn:          name,
    areaNameAr:          d.ar,
    avgSalePrice:        avgSalePrice ? Math.round(avgSalePrice) : null,
    avgPriceSqft,
    avgAnnualRent:       null,   // ← add manually after running script
    rentalYield:         null,   // ← add manually after running script
    capitalAppreciation: capApp,
    totalROI:            capApp, // ← update manually once rentalYield is added
    transactionCount:    recent.length,
    dataAsOf:            new Date().toISOString().slice(0, 10),
    source:              "Dubai Land Department (DLD) — manual export",
  };
}

// Sort by transaction volume
const sorted = Object.fromEntries(
  Object.entries(results).sort((a, b) => b[1].transactionCount - a[1].transactionCount)
);

writeFileSync(outputPath, JSON.stringify(sorted, null, 2), "utf-8");

const areasTotal  = Object.keys(sorted).length;
const withCapApp  = Object.values(sorted).filter((a) => a.capitalAppreciation != null).length;

console.log(`\n✅  Computed stats for ${areasTotal} areas (${withCapApp} have capital appreciation)`);
console.log(`📁  Output: src/data/dld-area-stats.json`);
console.log(`\n📊  Top 10 by transaction volume:`);
Object.entries(sorted).slice(0, 10).forEach(([name, s]) => {
  const cap = s.capitalAppreciation != null ? `${s.capitalAppreciation}%` : "—";
  console.log(`    ${name.padEnd(42)} ${String(s.transactionCount).padStart(4)} txns  |  ${String(s.avgPriceSqft ?? "—").padStart(5)} AED/sqft  |  cap: ${cap}`);
});

console.log(`\n💡  Next steps:`);
console.log(`    1. Open src/data/dld-area-stats.json`);
console.log(`    2. Manually add rentalYield + avgAnnualRent for key areas`);
console.log(`    3. Update totalROI = rentalYield + capitalAppreciation`);
console.log(`    4. Commit the file — market analysis map updates automatically\n`);

// ── CSV parser ────────────────────────────────────────────────────────────────
function parseCSV(text) {
  const lines = text.split(/\r?\n/);
  if (!lines.length) return [];
  const headers = lines[0].split(",").map((h) => h.replace(/^"|"$/g, "").trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const values = [];
    let cur = "", inQ = false;
    for (const ch of line + ",") {
      if (ch === '"') { inQ = !inQ; continue; }
      if (ch === "," && !inQ) { values.push(cur.trim()); cur = ""; continue; }
      cur += ch;
    }
    const obj = {};
    headers.forEach((h, i) => {
      const v = values[i] ?? "";
      obj[h] = v === "" || v === "null" ? null : v;
    });
    rows.push(obj);
  }
  return rows;
}
