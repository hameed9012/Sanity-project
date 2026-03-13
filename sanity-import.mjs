// sanity-import.mjs — FULL IMPORT
// Files needed alongside this script:
//   developers.json, properties.json, areas.json, lands.json, articles.json
// PowerShell: $env:SANITY_TOKEN="sk..."; node sanity-import.mjs

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';

const PROJECT_ID = '20d53wo5';
const DATASET    = 'production';
const API_TOKEN  = process.env.SANITY_TOKEN;

if (!API_TOKEN) {
  console.error('\n❌  Missing SANITY_TOKEN');
  console.error('   PowerShell: $env:SANITY_TOKEN="sk...yourtoken"');
  console.error('   Then run:   node sanity-import.mjs\n');
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID, dataset: DATASET,
  apiVersion: '2025-01-01', useCdn: false, token: API_TOKEN,
});

const DEVS      = JSON.parse(readFileSync('./developers.json',  'utf8'));
const DEV_DETS  = JSON.parse(readFileSync('./developer-details.json', 'utf8'));
const PROPS     = JSON.parse(readFileSync('./properties.json',  'utf8'));
const AREAS     = JSON.parse(readFileSync('./areas.json',       'utf8'));
const LANDS     = JSON.parse(readFileSync('./lands.json',       'utf8'));
const ARTICLES  = JSON.parse(readFileSync('./articles.json',    'utf8'));

const sleep = ms => new Promise(r => setTimeout(r, ms));
const key   = () => Math.random().toString(36).slice(2, 8);

const slides   = urls  => (urls||[]).filter(Boolean).map(url => ({ _type:'cdnImage', _key:key(), url, alt:'' }));
const amenList = items => (items||[]).filter(Boolean).map(a  => ({ _type:'object', _key:key(), label:typeof a==='string'?a:(a.label||''), icon:typeof a==='string'?'✓':(a.icon||'✓'), color:a.color||'#c9a26a' }));
const fpList   = plans => (plans||[]).map(p => ({ _type:'object', _key:key(), id:p.id, title:p.title, bedrooms:p.bedrooms||0, specs:Object.entries(p.specs||{}).map(([k,v])=>({_type:'object',_key:key(),key:k,value:v})), images:slides(p.images), features:(p.features||[]).filter(f=>f&&f!=='—') }));
const proxList = items => (items||[]).filter(Boolean).map(p => ({ _type:'object', _key:key(), icon:p.icon||'📍', text:p.text||'' }));
const fcList   = items => (items||[]).filter(Boolean).map(fc => ({ _type:'object', _key:key(), top:fc.top||null, bottom:fc.bottom||null, left:fc.left||null, right:fc.right||null, icon:fc.icon||'', value:fc.value||'', label:fc.label||'' }));
const broList  = items => (items||[]).filter(i=>i&&i.url).map(b => ({ _type:'object', _key:key(), title:b.title||'Download Brochure', url:b.url, type:b.type||'main' }));

// ── DEVELOPERS (with full details) ────────────────────────────
async function importDevelopers() {
  console.log('\n━━━ DEVELOPERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  // Build details lookup by slug
  const detailsMap = {};
  for (const d of DEV_DETS) detailsMap[d.slug] = d;

  let ok=0, skip=0, fail=0;
  for (const dev of DEVS) {
    const id = `developer-${dev.slug}`;
    const details = detailsMap[dev.slug] || {};
    try {
      if (await client.fetch(`*[_id==$id][0]._id`,{id})) { console.log(`  ⏭  ${dev.name}`); skip++; continue; }
      await client.createOrReplace({
        _id: id, _type: 'developer',
        name:     dev.name,
        slug:     { _type:'slug', current:dev.slug },
        tagline:  details.tagline || dev.tagline || '',
        logoUrl:  details.logo    || dev.logo    || '',
        heroImageUrl: details.heroImage || dev.heroImage || '',
        about:    (details.about    || []).filter(Boolean),
        aboutAr:  (details.aboutAr  || []).filter(Boolean),
        highlights: (details.highlights || []).filter(Boolean),
        stats: details.stats ? {
          projects:                   details.stats.projects                   || '',
          deliveredProjects:          details.stats.deliveredProjects          || '',
          underConstructionProjects:  details.stats.underConstructionProjects  || '',
          communities:                details.stats.communities                || '',
          sales2024:                  details.stats.sales2024                  || '',
        } : undefined,
      });
      console.log(`  ✅  ${dev.name}${details.about?.length ? ' (with details)' : ''}`);
      ok++; await sleep(150);
    } catch(e) { console.error(`  ❌  ${dev.name}: ${e.message}`); fail++; }
  }
  console.log(`\n  Developers: ${ok} imported  ${skip} skipped  ${fail} failed\n`);
}

// ── PROPERTIES ────────────────────────────────────────────────
async function importProperties() {
  console.log('\n━━━ PROPERTIES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  let ok=0, skip=0, fail=0;
  for (const p of PROPS) {
    const id = `property-${p.slug}`;
    try {
      if (await client.fetch(`*[_id==$id][0]._id`,{id})) { console.log(`  ⏭  ${p.en.project?.name}`); skip++; continue; }
      const en=p.en, ar=p.ar;
      const makeLocale = (loc, isAr=false) => ({
        seo: { title:loc.seo?.title||'', description:loc.seo?.description||'', keywords:loc.seo?.keywords||'', canonical:loc.seo?.canonical||'' },
        project: { name:loc.project?.name||'', developer:loc.project?.developer||'', location:loc.project?.location||'', status:loc.project?.statusLabel||'', startingPrice:loc.project?.startingPrice||'', completionDate:loc.project?.completionDate||'', paymentPlan:loc.project?.paymentPlan||'', type:loc.project?.type||'', units:loc.project?.units||'' },
        hero: { backgroundUrl:loc.hero?.backgroundUrl||'', squareImageUrl:loc.hero?.squareImageUrl||'', companyName:loc.hero?.companyName||'', rating:null },
        intro: { title:loc.intro?.title||'', paragraphs:(loc.intro?.paragraphs||[]).filter(Boolean), brochures:broList(loc.intro?.brochures), img:loc.intro?.imgUrl?{_type:'cdnImage',url:loc.intro.imgUrl,alt:loc.intro.imgAlt||''}:null, floatingCards:fcList(loc.intro?.floatingCards) },
        gallery: { title:loc.gallery?.title||'', slides:slides(loc.gallery?.slides), projectTag:loc.gallery?.projectTag||'' },
        floorPlans: { type:loc.floorPlans?.type||'apartments', plans:fpList(loc.floorPlans?.plans), brochureHref:loc.floorPlans?.brochureHref||'' },
        amenities: { title:loc.amenities?.title||'', amenities:amenList(loc.amenities?.amenities) },
        location: { title:loc.location?.title||'', projectName:loc.location?.projectName||'', address:loc.location?.address||'', lat:loc.location?.lat||null, lng:loc.location?.lng||null, zoom:loc.location?.zoom||14, proximityFeatures:proxList(loc.location?.proximityFeatures) },
        cta: { title:loc.cta?.title||'', description:loc.cta?.description||'', buttons:[{_type:'object',_key:'c1',label:isAr?'سجل اهتمامك':'Enquire Now',action:'enquire'},{_type:'object',_key:'c2',label:isAr?'تحميل البروشور':'Download Brochure',action:'download-brochure'}] },
      });
      await client.createOrReplace({ _id:id, _type:'property', title:en.project?.name||p.slug, slug:{_type:'slug',current:p.slug}, status:p.sanity_status, developer:en.project?.developer||p.developer_slug, location:en.project?.location||'', regionSlug:p.region_slug||'dubai', type:p.category, featured:false, en:makeLocale(en,false), ar:makeLocale(ar,true) });
      console.log(`  ✅  [${p.sanity_status}] ${en.project?.name}`); ok++; await sleep(200);
    } catch(e) { console.error(`  ❌  ${p.slug}: ${e.message}`); fail++; }
  }
  console.log(`\n  Properties: ${ok} imported  ${skip} skipped  ${fail} failed\n`);
}

// ── WHERE TO LIVE AREAS ───────────────────────────────────────
async function importAreas() {
  console.log('\n━━━ WHERE TO LIVE AREAS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  let ok=0, skip=0, fail=0;
  for (const area of AREAS) {
    const id = `area-${area.slug}`;
    try {
      if (await client.fetch(`*[_id==$id][0]._id`,{id})) { console.log(`  ⏭  ${area.name_en}`); skip++; continue; }
      await client.createOrReplace({
        _id:id, _type:'area',
        name:         area.name_en,
        nameAr:       area.name_ar,
        slug:         { _type:'slug', current:area.slug },
        heroImage:    area.heroImage    || '',
        tagline:      area.tagline_en   || '',
        taglineAr:    area.tagline_ar   || '',
        description:  area.description_en  || area.tagline_en  || '',
        descriptionAr:area.description_ar  || area.tagline_ar  || '',
        location:     area.location_en  || '',
        avgBuyPrice:  area.avgBuy_en    || '',
        avgRentPrice: area.avgRent_en   || '',
        roi:          area.roi_en       || '',
        regionSlug:   area.regionSlug   || 'dubai',
        featured:     area.featured     || false,
        highlights:   (area.highlights_en || []).filter(Boolean),
        highlightsAr: (area.highlights_ar || []).filter(Boolean),
        gallerySlides: slides(area.gallery),
      });
      console.log(`  ✅  ${area.name_en}`); ok++; await sleep(150);
    } catch(e) { console.error(`  ❌  ${area.slug}: ${e.message}`); fail++; }
  }
  console.log(`\n  Areas: ${ok} imported  ${skip} skipped  ${fail} failed\n`);
}

// ── LANDS ─────────────────────────────────────────────────────
async function importLands() {
  console.log('\n━━━ LANDS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  let ok=0, skip=0, fail=0;
  for (const land of LANDS) {
    const id = `land-${land.slug}`;
    try {
      if (await client.fetch(`*[_id==$id][0]._id`,{id})) { console.log(`  ⏭  ${land.title_en}`); skip++; continue; }
      await client.createOrReplace({
        _id:id, _type:'property',
        title:    land.title_en,
        slug:     { _type:'slug', current:land.slug },
        status:   'land',
        developer:'Al Rasikhoon Real Estate',
        location: land.location_en || '',
        regionSlug: 'sharjah',
        type:     'lands',
        featured: false,
        en: {
          seo: { title:land.title_en, description:'', keywords:'', canonical:'' },
          project: { name:land.title_en, developer:'Al Rasikhoon Real Estate', location:land.location_en||'', status:'For Sale', startingPrice:land.price_en||'', completionDate:'', paymentPlan:'', type:'Land', units:land.area_en||'' },
          hero: { backgroundUrl:land.gallery?.[0]||'', squareImageUrl:'', companyName:'Al Rasikhoon Real Estate', rating:null },
          intro: { title:land.title_en, paragraphs:[], brochures:[], img:null, floatingCards:[] },
          gallery: { title:`${land.title_en} Gallery`, slides:slides(land.gallery), projectTag:land.title_en },
          floorPlans: { type:'lands', plans:[], brochureHref:'' },
          amenities: { title:'Land Features', amenities:[] },
          location: { title:'Location', projectName:land.title_en, address:land.location_en||'', lat:land.lat||null, lng:land.lng||null, zoom:14, proximityFeatures:[] },
          cta: { title:`Enquire about ${land.title_en}`, description:'Contact us for pricing and availability.', buttons:[{_type:'object',_key:'c1',label:'Enquire Now',action:'enquire'}] },
        },
        ar: {
          seo: { title:land.title_ar||land.title_en, description:'', keywords:'', canonical:'' },
          project: { name:land.title_ar||land.title_en, developer:'الراسخون للعقارات', location:land.location_ar||land.location_en||'', status:'للبيع', startingPrice:land.price_en||'', completionDate:'', paymentPlan:'', type:'أرض', units:land.area_en||'' },
          hero: { backgroundUrl:land.gallery?.[0]||'', squareImageUrl:'', companyName:'الراسخون للعقارات', rating:null },
          intro: { title:land.title_ar||land.title_en, paragraphs:[], brochures:[], img:null, floatingCards:[] },
          gallery: { title:'معرض الصور', slides:slides(land.gallery), projectTag:land.title_ar||land.title_en },
          floorPlans: { type:'lands', plans:[], brochureHref:'' },
          amenities: { title:'مميزات الأرض', amenities:[] },
          location: { title:'الموقع', projectName:land.title_ar||land.title_en, address:land.location_ar||land.location_en||'', lat:land.lat||null, lng:land.lng||null, zoom:14, proximityFeatures:[] },
          cta: { title:`استفسر عن ${land.title_ar||land.title_en}`, description:'تواصل معنا للاستفسار عن الأسعار والتفاصيل.', buttons:[{_type:'object',_key:'c1',label:'سجل اهتمامك',action:'enquire'}] },
        },
      });
      console.log(`  ✅  ${land.title_en}`); ok++; await sleep(150);
    } catch(e) { console.error(`  ❌  ${land.slug}: ${e.message}`); fail++; }
  }
  console.log(`\n  Lands: ${ok} imported  ${skip} skipped  ${fail} failed\n`);
}

// ── ARTICLES ──────────────────────────────────────────────────
async function importArticles() {
  console.log('\n━━━ ARTICLES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  let ok=0, skip=0, fail=0;
  for (const art of ARTICLES) {
    const id = `article-${art.slug}`;
    try {
      if (await client.fetch(`*[_id==$id][0]._id`,{id})) { console.log(`  ⏭  ${art.title}`); skip++; continue; }
      await client.createOrReplace({
        _id:id, _type:'article',
        title:          art.title,
        titleAr:        art.ar?.title        || '',
        slug:           { _type:'slug', current:art.slug },
        description:    art.description      || '',
        descriptionAr:  art.ar?.description  || '',
        mainImage:      art.image            || '',
        category:       art.category         || '',
        readTime:       art.readTime         || '',
        publishedAt:    new Date().toISOString(),
        body:           (art.bodySnippets||[]).join('\n\n'),
        bodyAr:         '',
        seoTitle:       art.seoTitle         || art.title,
        seoDescription: art.seoDescription   || art.description || '',
        seoKeywords:    '',
      });
      console.log(`  ✅  ${art.title}`); ok++; await sleep(150);
    } catch(e) { console.error(`  ❌  ${art.slug}: ${e.message}`); fail++; }
  }
  console.log(`\n  Articles: ${ok} imported  ${skip} skipped  ${fail} failed\n`);
}

// ── MAIN ──────────────────────────────────────────────────────
console.log(`\n🚀  Sanity Full Import — ${PROJECT_ID}/${DATASET}`);
console.log(`    ${DEVS.length} developers  |  ${PROPS.length} properties  |  ${AREAS.length} areas  |  ${LANDS.length} lands  |  ${ARTICLES.length} articles\n`);
await importDevelopers();
await importProperties();
await importAreas();
await importLands();
await importArticles();
console.log('🎉  All done!\n');
