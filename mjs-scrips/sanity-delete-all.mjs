// sanity-delete-all.mjs — deletes ALL content types
// PowerShell: $env:SANITY_TOKEN="sk..."; node sanity-delete-all.mjs

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '20d53wo5', dataset: 'production',
  apiVersion: '2025-01-01', useCdn: false,
  token: process.env.SANITY_TOKEN,
});

if (!process.env.SANITY_TOKEN) {
  console.error('❌  Missing SANITY_TOKEN'); process.exit(1);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function deleteAll(type) {
  const ids = await client.fetch(`*[_type==$type][]._id`, { type });
  console.log(`\n  ${type}: ${ids.length} documents`);
  let n = 0;
  for (const id of ids) {
    await client.delete(id);
    process.stdout.write(`\r  Deleted ${++n}/${ids.length}...`);
    await sleep(80);
  }
  if (ids.length) console.log(`\n  ✅ Done`);
}

console.log('\n🗑️  Sanity Cleanup\n');
for (const type of ['property', 'developer', 'area', 'article']) {
  await deleteAll(type);
}
console.log('\n✅  All cleared. Now run: node sanity-import.mjs\n');
