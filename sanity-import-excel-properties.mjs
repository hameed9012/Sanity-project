import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = createClient({
  projectId: '20d53wo5',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// Helper: Sanitize string for Sanity IDs
const toSafeId = (str) => str.toLowerCase()
  .replace(/[^a-z0-9]/g, '-') // Replace non-alphanumeric with hyphen
  .replace(/-+/g, '-')        // Collapse multiple hyphens
  .replace(/^-|-$/g, '');     // Trim hyphens from start/end

// ─── LOAD DATA ──────────────────────────────────────────────────────────────
const propertiesRaw = JSON.parse(readFileSync(join(__dirname, 'excel-properties.json'), 'utf-8'));
const devDetails = JSON.parse(readFileSync(join(__dirname, 'developer-details.json'), 'utf-8'));
const areaDetails = JSON.parse(readFileSync(join(__dirname, 'areas.json'), 'utf-8'));

// ─── PREPARE DEVELOPERS ─────────────────────────────────────────────────────
// Mapping detailed info to the new developers
const newDevelopers = [
  { id: 'al-rasikhoon', name: 'Al Rasikhoon', nameAr: 'الراسخون' },
  { id: 'azizi-developments', name: 'Azizi Developments', nameAr: 'عزيزي للتطوير العقاري' },
  { id: 'sobha-realty', name: 'Sobha Realty', nameAr: 'شوبا العقارية' },
  { id: 'binghatti', name: 'Binghatti', nameAr: 'بن غاطي' },
  { id: 'danube-properties', name: 'Danube Properties', nameAr: 'دانوب العقارية' },
  { id: 'imtiaz-developments', name: 'Imtiaz Developments', nameAr: 'امتياز للتطوير' },
  { id: 'damac-properties', name: 'Damac Properties', nameAr: 'داماك العقارية' },
  { id: 'arada', name: 'Arada', nameAr: 'أرادا' },
].map(dev => {
  const detail = devDetails.find(d => d.slug === dev.id.replace('developer-', '')) || {};
  return {
    _id: `developer-${dev.id}`,
    _type: 'developer',
    name: { en: dev.name, ar: dev.nameAr },
    slug: { current: dev.id },
    tagline: { en: detail.tagline || '', ar: '' },
    about: { 
      en: (detail.about || []).join('\n\n') || `Leading developer in Dubai.`,
      ar: (detail.aboutAr || []).join('\n\n') || ''
    },
    stats: detail.stats ? Object.entries(detail.stats).map(([label, value]) => ({
      _key: toSafeId(label),
      label: label.replace(/([A-Z])/g, ' $1').trim(),
      value: value
    })) : [],
    highlights: (detail.highlights || []).map(h => ({ _key: toSafeId(h.slice(0, 10)), text: h }))
  };
});

// ─── IMPORT LOGIC ───────────────────────────────────────────────────────────
async function batchUpsert(docs, label) {
  const BATCH = 25;
  for (let i = 0; i < docs.length; i += BATCH) {
    const slice = docs.slice(i, i + BATCH);
    const tx = client.transaction();
    slice.forEach(doc => tx.createOrReplace(doc));
    await tx.commit();
    console.log(`  [${label}] ${Math.min(i + BATCH, docs.length)}/${docs.length} committed`);
  }
}

async function main() {
  console.log('🚀 Starting Detailed Import...');

  // Step 1: Developers
  await batchUpsert(newDevelopers, 'Developers');

  // Step 2: Properties (with ID sanitation)
  const detailedProperties = propertiesRaw.map(prop => {
    // FIX: Ensure ID and Slug are safe (no Arabic/Special chars)
    const safeId = `excel-prop-${toSafeId(prop.title.en)}-${toSafeId(prop.type)}`;
    
    // Find area info for better location data
    const areaInfo = areaDetails.find(a => a.name_en === prop.area) || {};

    return {
      ...prop,
      _id: safeId,
      slug: { current: toSafeId(prop.slug.current) },
      // Adding extra detail
      region: areaInfo.regionSlug ? { _type: 'reference', _ref: `region-${areaInfo.regionSlug}` } : undefined,
      seo: {
        title: `${prop.title.en} by ${prop.developer._ref.replace('developer-', '')}`,
        description: `Explore ${prop.title.en} in ${prop.area}. Prices starting from AED ${prop.minPrice}.`,
      }
    };
  });

  await batchUpsert(detailedProperties, 'Properties');
  console.log('✅ Import Finished');
}

main().catch(err => {
  console.error('❌ Import failed:', err.message);
  process.exit(1);
});