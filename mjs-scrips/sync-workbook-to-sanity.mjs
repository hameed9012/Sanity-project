import { createClient } from "@sanity/client";
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { basename, extname, join, resolve } from "node:path";
import process from "node:process";
import xlsx from "xlsx";

const PROJECT_ROOT = resolve(process.cwd());
const GENERATED_DIR = join(PROJECT_ROOT, "generated");
const DEFAULT_DOWNLOADS = resolve(process.env.USERPROFILE || process.env.HOME || ".", "Downloads");
const WORKBOOK_HINTS = ["منطقة", "مطور", "مشروع", "work", "feedback", "quote"];

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function safeText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function parseMoney(value) {
  const raw = safeText(value);
  if (!raw) return null;
  const normalized = raw.replace(/[, ]+/g, "");
  const match = normalized.match(/(\d+(?:\.\d+)?)([mk])?/i);
  if (!match) return null;
  let amount = Number(match[1]);
  if (!Number.isFinite(amount)) return null;
  const suffix = String(match[2] || "").toLowerCase();
  if (suffix === "m") amount *= 1_000_000;
  if (suffix === "k") amount *= 1_000;
  return Math.round(amount);
}

function parseSqftRange(value) {
  const raw = safeText(value).replace(/,/g, "");
  if (!raw) return { min: null, max: null };
  const numbers = raw.match(/\d+(?:\.\d+)?/g)?.map(Number) || [];
  if (!numbers.length) return { min: null, max: null };
  return {
    min: Number.isFinite(numbers[0]) ? numbers[0] : null,
    max: Number.isFinite(numbers[numbers.length - 1]) ? numbers[numbers.length - 1] : null,
  };
}

function parseListingStatus(filterValue, propertyTypeValue) {
  const text = `${safeText(filterValue)} ${safeText(propertyTypeValue)}`.toLowerCase();
  if (text.includes("rent")) return "rental";
  if (text.includes("secondary") || text.includes("resale") || text.includes("ready")) return "secondary";
  if (text.includes("land")) return "land";
  return "offplan";
}

function parsePropertyType(value) {
  const text = safeText(value).toLowerCase();
  if (text.includes("villa")) return "villas";
  if (text.includes("penthouse")) return "penthouses";
  if (text.includes("office") || text.includes("retail") || text.includes("commercial")) {
    return "commercial-retail";
  }
  return "apartments";
}

function rowToRecord(row) {
  const normalizedRow = Object.fromEntries(
    Object.entries(row || {}).map(([key, value]) => [safeText(key), value])
  );

  const developer = safeText(normalizedRow.Developer);
  const project = safeText(normalizedRow.Projects);
  if (!developer || !project) return null;

  const location = safeText(normalizedRow.Location);
  const beds = safeText(normalizedRow["Beds NO."]);
  const propertyTypeRaw = safeText(normalizedRow["Property Type"]);
  const payment = safeText(normalizedRow.Payment);
  const handover = safeText(normalizedRow.Handover);
  const postHandoverDetails = safeText(normalizedRow["Post Handover Details"]);
  const notes = safeText(normalizedRow.Notes);
  const filtration = safeText(normalizedRow["Property Filtaration"]);
  const size = safeText(normalizedRow.Size);
  const minPrice = parseMoney(normalizedRow["Min Price"]);
  const maxPrice = parseMoney(normalizedRow["Max Price"]);
  const sqft = parseSqftRange(size);

  return {
    developer,
    developerSlug: slugify(developer),
    project,
    slug: slugify(project),
    location,
    beds,
    propertyTypeRaw,
    propertyType: parsePropertyType(propertyTypeRaw || beds),
    listingStatus: parseListingStatus(filtration, propertyTypeRaw),
    minPrice,
    maxPrice,
    startingPrice: minPrice ? `AED ${minPrice.toLocaleString("en-US")}` : "",
    size,
    sizeSqftMin: sqft.min,
    sizeSqftMax: sqft.max,
    handover,
    payment,
    postHandoverDetails,
    hasPostHandover: /post[- ]?handover/i.test(postHandoverDetails),
    notes,
    filtration,
  };
}

function groupRecords(records) {
  const grouped = new Map();

  for (const record of records) {
    const key = `${record.developerSlug}::${record.slug}`;
    const existing = grouped.get(key) || {
      ...record,
      unitVariants: [],
      sourceRows: 0,
    };

    existing.sourceRows += 1;
    existing.minPrice = [existing.minPrice, record.minPrice].filter(Number.isFinite).sort((a, b) => a - b)[0] ?? existing.minPrice;
    existing.maxPrice = [existing.maxPrice, record.maxPrice].filter(Number.isFinite).sort((a, b) => b - a)[0] ?? existing.maxPrice;
    existing.sizeSqftMin = [existing.sizeSqftMin, record.sizeSqftMin].filter(Number.isFinite).sort((a, b) => a - b)[0] ?? existing.sizeSqftMin;
    existing.sizeSqftMax = [existing.sizeSqftMax, record.sizeSqftMax].filter(Number.isFinite).sort((a, b) => b - a)[0] ?? existing.sizeSqftMax;
    existing.startingPrice =
      existing.minPrice && Number.isFinite(existing.minPrice)
        ? `AED ${existing.minPrice.toLocaleString("en-US")}`
        : existing.startingPrice;
    existing.propertyType = existing.propertyType || record.propertyType;
    existing.listingStatus = existing.listingStatus || record.listingStatus;
    existing.location = existing.location || record.location;
    existing.handover = existing.handover || record.handover;
    existing.payment = existing.payment || record.payment;
    existing.notes = existing.notes || record.notes;
    existing.postHandoverDetails = existing.postHandoverDetails || record.postHandoverDetails;
    existing.hasPostHandover = existing.hasPostHandover || record.hasPostHandover;

    existing.unitVariants.push({
      type: record.propertyTypeRaw || record.propertyType,
      beds: record.beds,
      minPrice: record.minPrice,
      maxPrice: record.maxPrice,
      size: record.size,
      handover: record.handover,
      payment: record.payment,
    });

    grouped.set(key, existing);
  }

  return Array.from(grouped.values()).map((record) => ({
    ...record,
    regionSlug: slugify(record.location.split(",")[0] || record.location),
    areaSlug: slugify(record.location.split(",")[0] || record.location),
  }));
}

function findWorkbookPath(explicitPath) {
  if (explicitPath && existsSync(explicitPath)) return resolve(explicitPath);
  if (!existsSync(DEFAULT_DOWNLOADS)) return null;

  const candidates = readdirSync(DEFAULT_DOWNLOADS)
    .filter((name) => [".xlsx", ".xlsm", ".xls"].includes(extname(name).toLowerCase()))
    .filter((name) => WORKBOOK_HINTS.some((hint) => name.toLowerCase().includes(hint.toLowerCase())))
    .map((name) => join(DEFAULT_DOWNLOADS, name));

  return candidates.sort((a, b) => basename(b).localeCompare(basename(a)))[0] || null;
}

function toSanityDoc(record) {
  return {
    _id: `property-${record.slug}`,
    _type: "property",
    title: record.project,
    slug: { _type: "slug", current: record.slug },
    developer: record.developer,
    location: record.location,
    status: record.listingStatus,
    startingPrice: record.startingPrice,
    completionDate: record.handover,
    paymentPlan: record.payment,
    unitTypes: record.beds || record.propertyTypeRaw,
    propertyType: record.propertyType,
    description: [record.notes, record.postHandoverDetails].filter(Boolean).join("\n\n"),
    regionSlug: record.regionSlug,
    areaSlug: record.areaSlug,
    hasPostHandover: record.hasPostHandover,
  };
}

async function maybeUpsertToSanity(records) {
  const token = process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN;
  if (!token) return false;

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "20d53wo5",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2025-01-01",
    token,
    useCdn: false,
  });

  const docs = records.map(toSanityDoc);
  const chunkSize = 25;
  for (let index = 0; index < docs.length; index += chunkSize) {
    const tx = client.transaction();
    docs.slice(index, index + chunkSize).forEach((doc) => tx.createOrReplace(doc));
    await tx.commit();
  }

  return true;
}

async function main() {
  const workbookPath = findWorkbookPath(process.argv[2]);
  if (!workbookPath) {
    console.error("No workbook found. Pass a .xlsx path or place the workbook in Downloads.");
    process.exit(1);
  }

  const workbook = xlsx.readFile(workbookPath);
  const sheetName = workbook.SheetNames[0];
  const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" });
  const grouped = groupRecords(rows.map(rowToRecord).filter(Boolean));

  if (!existsSync(GENERATED_DIR)) mkdirSync(GENERATED_DIR, { recursive: true });

  const output = {
    sourceWorkbook: workbookPath,
    sheetName,
    generatedAt: new Date().toISOString(),
    rowCount: rows.length,
    projectCount: grouped.length,
    records: grouped,
  };

  const outputPath = join(GENERATED_DIR, "excel-workbook-sync.json");
  writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`Wrote ${grouped.length} grouped records to ${outputPath}`);

  const didUpsert = await maybeUpsertToSanity(grouped);
  console.log(didUpsert ? "Sanity upsert complete." : "Skipped Sanity upsert (missing SANITY_API_TOKEN).");
}

main().catch((error) => {
  console.error("Workbook sync failed:", error);
  process.exit(1);
});
