// src/app/api/site-settings/route.js
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    "desktopLeft":  navbar.desktopLeft[]{labelEn,labelAr,type,href,openInNewTab},
    "desktopRight": navbar.desktopRight[]{labelEn,labelAr,type,href,openInNewTab},
    "mobileMenu":   navbar.mobileMenu[]{labelEn,labelAr,type,href,openInNewTab},
    heroSlides[]{
      title, titleAr, subtitle, subtitleAr,
      backgroundUrl, propertySlug,
      ctaLabel, ctaLabelAr, ctaUrl, order,
      "_key": _key
    },
    artOfDetail{
      sloganPre, sloganPreAr,
      sloganMain, sloganMainAr,
      companyLine, companyLineAr,
      description, descriptionAr,
      ownerImage, discoverMoreUrl
    },
    pillars{
      heading, headingAr,
      items[]{
        "_key": _key,
        title, titleAr,
        intro, introAr,
        imageUrl,
        points, pointsAr
      }
    },
    contact{
      whatsapp, phone, email,
      instagram, linkedin, youtube,
      formTitle, formTitleAr
    }
  }
`;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
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
      { status: 500 }
    );
  }
}