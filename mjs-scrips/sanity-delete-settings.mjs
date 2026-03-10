// sanity-delete-settings.mjs
// Deletes the siteSettings document so the navbar reverts to hardcoded defaults
// PowerShell: $env:SANITY_TOKEN="sk...yourtoken"; node sanity-delete-settings.mjs

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '20d53wo5',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

if (!process.env.SANITY_TOKEN) {
  console.error('❌  Missing SANITY_TOKEN'); process.exit(1);
}

async function run() {
  console.log('\n🗑️  Deleting siteSettings document from Sanity...\n');
  try {
    // Delete both the draft and published versions
    await client.delete('siteSettings').catch(() => {});
    await client.delete('drafts.siteSettings').catch(() => {});
    console.log('  ✅  siteSettings deleted');
    console.log('  👉  Navbar will now use hardcoded defaults until you re-run sanity-create-settings.mjs\n');
  } catch (e) {
    console.error('  ❌  Error:', e.message);
  }
}

run();
