import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const SITE_SETTINGS_QUERY = `*[_type=="siteSettings" && _id=="siteSettings"][0]{
  "desktopLeft": navbar.desktopLeft[]{labelEn,labelAr,type,href,openInNewTab},
  "desktopRight": navbar.desktopRight[]{labelEn,labelAr,type,href,openInNewTab},
  "mobileMenu": navbar.mobileMenu[]{labelEn,labelAr,type,href,openInNewTab}
}`;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // ← no longer hardcoded
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
});

export async function GET() {
  try {
    const data = await client.fetch(SITE_SETTINGS_QUERY);
    return NextResponse.json({ ok: true, data });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Fetch failed" },
      { status: 500 },
    );
  }
}