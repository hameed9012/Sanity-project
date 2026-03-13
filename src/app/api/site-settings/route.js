import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"] | order(_updatedAt desc)[0]{
    "hideSearch": navbar.hideSearch,
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

const HERO_SECTION_QUERY = `
  *[_type == "heroSection"] | order(_updatedAt desc)[0]{
    slides[]{
      titleEn,
      titleAr,
      cdnImage,
      image{
        asset->
      },
      link,
      "_key": _key
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
    const [siteSettings, heroSection] = await Promise.all([
      client.fetch(SITE_SETTINGS_QUERY),
      client.fetch(HERO_SECTION_QUERY),
    ]);

    const data = siteSettings || {};
    
    // Transform image references to URLs
    if (data) {
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

      // Backfill homepage hero from the legacy Home Hero Slider document type when Site Settings is empty.
      if ((!data.heroSlides || data.heroSlides.length === 0) && heroSection?.slides?.length) {
        data.heroSlides = heroSection.slides.map((slide, index) => ({
          _key: slide._key || `hero-section-${index}`,
          title: slide.titleEn || "",
          titleAr: slide.titleAr || "",
          subtitle: "",
          subtitleAr: "",
          backgroundUrl: null,
          cdnImage: slide.cdnImage || null,
          image: slide.image || null,
          imageUrl: slide?.cdnImage?.url || (slide.image ? urlFor(slide.image).width(1920).height(1080).url() : null),
          propertySlug: "",
          ctaLabel: "",
          ctaLabelAr: "",
          ctaUrl: slide.link || "/properties",
          order: index,
        })).filter((slide) => slide.imageUrl);
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
