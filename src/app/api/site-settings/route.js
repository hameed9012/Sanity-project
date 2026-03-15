import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"] | order(_updatedAt desc)[0]{
    "hideSearch": navbar.hideSearch,
    "logoCdn": navbar.logoCdn,
    "logoScaleDesktop": navbar.logoScaleDesktop,
    "logoScaleMobile": navbar.logoScaleMobile,
    "logo": navbar.logo{
      asset->,
      alt
    },
    "desktopLeft":  navbar.desktopLeft[]{labelEn,labelAr,type,href,openInNewTab},
    "desktopRight": navbar.desktopRight[]{labelEn,labelAr,type,href,openInNewTab},
    "mobileMenu":   navbar.mobileMenu[]{labelEn,labelAr,type,href,openInNewTab},
    heroSlides[]{
      title, titleAr, subtitle, subtitleAr,
      backgroundUrl, 
      cdnImage,
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
      ownerImageCdn,
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
        imageCdn,
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
    },
    about{
      badge, badgeAr,
      title, titleAr,
      subtitle, subtitleAr,
      heroImageCdn,
      heroImage{
        asset->
      },
      sections[]{
        heading, headingAr,
        body, bodyAr
      }
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
    const data = (await client.fetch(SITE_SETTINGS_QUERY)) || {};
    
    // Transform image references to URLs
    if (data) {
      data.navbar = {
        ...(data.navbar || {}),
        logoUrl:
          data?.logoCdn?.url ||
          (data.logo ? urlFor(data.logo).width(500).url() : null) ||
          null,
        logoAlt:
          data?.logo?.alt ||
          "Mohamad Kodmani Real Estate",
        logoScaleDesktop:
          typeof data?.logoScaleDesktop === "number" && Number.isFinite(data.logoScaleDesktop)
            ? data.logoScaleDesktop
            : 1,
        logoScaleMobile:
          typeof data?.logoScaleMobile === "number" && Number.isFinite(data.logoScaleMobile)
            ? data.logoScaleMobile
            : (typeof data?.logoScaleDesktop === "number" && Number.isFinite(data.logoScaleDesktop)
              ? data.logoScaleDesktop
              : 1),
      };

      // Transform hero slides images
      if (data.heroSlides) {
        data.heroSlides = data.heroSlides.map(slide => ({
          ...slide,
          imageUrl:
            slide?.cdnImage?.url ||
            (slide.image ? urlFor(slide.image).width(1920).height(1080).url() : null) ||
            slide.backgroundUrl ||
            null
        }));
      }

      // Transform art of detail owner image
      if (data.artOfDetail?.ownerImageCdn?.url || data.artOfDetail?.ownerImage) {
        data.artOfDetail.ownerImageUrl = data.artOfDetail?.ownerImageCdn?.url || urlFor(data.artOfDetail.ownerImage).width(800).height(1000).url();
      }

      if (data.about?.heroImageCdn?.url || data.about?.heroImage) {
        data.about.heroImageUrl = data.about?.heroImageCdn?.url || urlFor(data.about.heroImage).width(1600).height(1200).url();
      }
      
      // Transform pillars images
      if (data.pillars?.items) {
        data.pillars.items = data.pillars.items.map(item => ({
          ...item,
          imageUrl: item?.imageCdn?.url || (item.image ? urlFor(item.image).width(600).height(800).url() : null)
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
