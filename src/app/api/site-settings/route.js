import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    "hideSearch": navbar.hideSearch,
    "desktopLeft":  navbar.desktopLeft[]{labelEn,labelAr,type,href,openInNewTab},
    "desktopRight": navbar.desktopRight[]{labelEn,labelAr,type,href,openInNewTab},
    "mobileMenu":   navbar.mobileMenu[]{labelEn,labelAr,type,href,openInNewTab},
    heroSlides[]{
      title, titleAr, subtitle, subtitleAr,
      backgroundUrl, 
      image{
        asset->
      },
      propertySlug,
      ctaLabel, ctaLabelAr, ctaUrl, order,
      "_key": _key
    },
    artOfDetail{
      sloganPre, sloganPreAr,
      sloganMain, sloganMainAr,
      companyLine, companyLineAr,
      description, descriptionAr,
      ownerImage{
        asset->
      },
      discoverMoreUrl
    },
    pillars{
      heading, headingAr,
      items[]{
        "_key": _key,
        title, titleAr,
        intro, introAr,
        image{
          asset->
        },
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

// Initialize image builder
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export async function GET() {
  try {
    const data = await client.fetch(SITE_SETTINGS_QUERY);
    
    // Transform image references to URLs
    if (data) {
      // Transform hero slides images
      if (data.heroSlides) {
        data.heroSlides = data.heroSlides.map(slide => ({
          ...slide,
          imageUrl: slide.image ? urlFor(slide.image).width(1920).height(1080).url() : slide.backgroundUrl || null
        }));
      }
      
      // Transform art of detail owner image
      if (data.artOfDetail?.ownerImage) {
        data.artOfDetail.ownerImageUrl = urlFor(data.artOfDetail.ownerImage).width(800).height(1000).url();
      }
      
      // Transform pillars images
      if (data.pillars?.items) {
        data.pillars.items = data.pillars.items.map(item => ({
          ...item,
          imageUrl: item.image ? urlFor(item.image).width(600).height(800).url() : null
        }));
      }
    }
    
    return NextResponse.json({ ok: true, data });
  } catch (e) {
    console.error("Site settings API error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Fetch failed" },
      { status: 500 }
    );
  }
}
