import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
      hero{
        yearsNumber, yearsNumberAr,
        yearsSuffix, yearsSuffixAr,
        labelTop, labelTopAr,
        line1, line1Ar,
        line2, line2Ar,
        sinceLabel, sinceLabelAr,
        description1, description1Ar,
        description2, description2Ar,
        imageAlt, imageAltAr,
        imageCdn,
        image{
          asset->
        }
      },
      buildingExcellence{
        headingLine1, headingLine1Ar,
        headingLine2, headingLine2Ar,
        headingLine3, headingLine3Ar,
        paragraph, paragraphAr,
        imageAlt, imageAltAr,
        imageCdn,
        image{
          asset->
        },
        stats[]{
          "_key": _key,
          count,
          suffix, suffixAr,
          label, labelAr
        }
      },
      services{
        title, titleAr,
        intro, introAr,
        footer, footerAr,
        cards[]{
          "_key": _key,
          title, titleAr,
          items, itemsAr
        }
      },
      accordion{
        visionTitle, visionTitleAr,
        visionText, visionTextAr,
        visionImageAlt, visionImageAltAr,
        visionImageCdn,
        visionImage{
          asset->
        },
        missionTitle, missionTitleAr,
        missionText, missionTextAr,
        missionImageAlt, missionImageAltAr,
        missionImageCdn,
        missionImage{
          asset->
        },
        coreTitle, coreTitleAr,
        coreSubtitleTop, coreSubtitleTopAr,
        coreSubtitleBottom, coreSubtitleBottomAr,
        pillars[]{
          "_key": _key,
          title, titleAr,
          text, textAr,
          imageAlt, imageAltAr,
          imageCdn,
          image{
            asset->
          }
        }
      },
      journey{
        kicker, kickerAr,
        heading, headingAr,
        steps[]{
          "_key": _key,
          year, yearAr,
          title, titleAr,
          description, descriptionAr,
          imageAlt, imageAltAr,
          imageCdn,
          image{
            asset->
          }
        }
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

function resolveCmsImage(entry, options = {}) {
  const {
    imageKey = "image",
    cdnKey = "imageCdn",
    width = 1600,
    height = 1200,
  } = options;

  if (!entry) return null;

  const cdnUrl = entry?.[cdnKey]?.url;
  if (cdnUrl) return cdnUrl;

  const image = entry?.[imageKey];
  return image ? urlFor(image).width(width).height(height).url() : null;
}

const HERO_SLIDE_PROPERTY_ALIASES = new Map([
  ["red-square", "red-square-tower"],
  ["sobha-one-the-element", "the-element"],
  ["sobha-the-element", "the-element"],
  ["the-element-at-sobha-one", "the-element"],
  ["volga", "volga-tower"],
]);

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isVideoUrl(value) {
  const clean = String(value || "").split("?")[0].toLowerCase();
  return [".mp4", ".webm", ".mov", ".m4v", ".ogg"].some((ext) => clean.endsWith(ext));
}

function isWeakFullscreenImage(value) {
  const text = String(value || "").toLowerCase().trim();
  return (
    !text ||
    isVideoUrl(text) ||
    text.endsWith(".svg") ||
    text.includes("projects-profile-pictures") ||
    text.includes("logo")
  );
}

function getStringUrl(value) {
  return typeof value === "string" ? value.trim() : "";
}

function getFirstGalleryImage(slides = []) {
  if (!Array.isArray(slides)) return "";

  return (
    slides
      .map((slide) => (typeof slide === "string" ? slide : slide?.url))
      .map(getStringUrl)
      .find((url) => url && !isWeakFullscreenImage(url)) || ""
  );
}

function normalizeHeroSlideSlug(value) {
  const normalized = slugify(value);
  return HERO_SLIDE_PROPERTY_ALIASES.get(normalized) || normalized;
}

function getSlideOrder(slide, fallbackIndex) {
  const numeric = Number(slide?.order);
  return Number.isFinite(numeric) ? numeric : fallbackIndex + 1;
}

function pickHeroSlideImage(...candidates) {
  return (
    candidates
      .map(getStringUrl)
      .find((url) => url && !isVideoUrl(url)) || null
  );
}

export async function GET() {
  try {
    const data = (await client.fetch(SITE_SETTINGS_QUERY)) || {};
    const propertyHeroSources = await client.fetch(`*[_type == "property"]{
      "slug": slug.current,
      title,
      titleAr,
      "heroImage": coalesce(heroImageCdn.url, heroImageUpload.asset->url, heroImage),
      galleryImages
    }`);

    function resolveProjectImageForHeroSlide(slide) {
      const candidateSlugs = [
        slide?.propertySlug,
        slide?.title,
        slide?.titleAr,
      ]
        .map(normalizeHeroSlideSlug)
        .filter(Boolean);

      for (const candidate of candidateSlugs) {
        const property = propertyHeroSources.find((entry) => {
          const sourceKeys = [
            entry?.slug,
            entry?.title,
            entry?.titleAr,
          ]
            .map(normalizeHeroSlideSlug)
            .filter(Boolean);
          return sourceKeys.includes(candidate);
        });

        if (!property) continue;

        const imageUrl =
          [
            getStringUrl(property?.heroImage),
            getFirstGalleryImage(property?.galleryImages),
          ].find((url) => url && !isWeakFullscreenImage(url)) || "";

        if (imageUrl) return imageUrl;
      }

      return null;
    }
    
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
        data.heroSlides = data.heroSlides
          .map((slide, index) => ({
            slide,
            index,
            order: getSlideOrder(slide, index),
          }))
          .sort((a, b) => a.order - b.order || a.index - b.index)
          .map(({ slide, index, order }) => {
            const fallbackImageUrl = resolveProjectImageForHeroSlide(slide);

            return {
              ...slide,
              order,
              imageUrl: pickHeroSlideImage(
                slide?.cdnImage?.url,
                slide.image ? urlFor(slide.image).width(1920).height(1080).url() : null,
                slide?.backgroundUrl,
                fallbackImageUrl
              ),
            };
          });
      }

      // Transform art of detail owner image
      if (data.artOfDetail?.ownerImageCdn?.url || data.artOfDetail?.ownerImage) {
        data.artOfDetail.ownerImageUrl = data.artOfDetail?.ownerImageCdn?.url || urlFor(data.artOfDetail.ownerImage).width(800).height(1000).url();
      }

      if (data.about?.hero) {
        data.about.hero.imageUrl = resolveCmsImage(data.about.hero, {
          width: 1600,
          height: 1800,
        });
      }

      if (data.about?.buildingExcellence) {
        data.about.buildingExcellence.imageUrl = resolveCmsImage(
          data.about.buildingExcellence,
          {
            width: 1400,
            height: 1400,
          }
        );
      }

      if (data.about?.accordion) {
        data.about.accordion.visionImageUrl = resolveCmsImage(data.about.accordion, {
          imageKey: "visionImage",
          cdnKey: "visionImageCdn",
          width: 1400,
          height: 1100,
        });

        data.about.accordion.missionImageUrl = resolveCmsImage(data.about.accordion, {
          imageKey: "missionImage",
          cdnKey: "missionImageCdn",
          width: 1400,
          height: 1100,
        });

        if (Array.isArray(data.about.accordion.pillars)) {
          data.about.accordion.pillars = data.about.accordion.pillars.map((pillar) => ({
            ...pillar,
            imageUrl: resolveCmsImage(pillar, {
              width: 900,
              height: 1200,
            }),
          }));
        }
      }

      if (data.about?.journey?.steps) {
        data.about.journey.steps = data.about.journey.steps.map((step) => ({
          ...step,
          imageUrl: resolveCmsImage(step, {
            width: 1800,
            height: 1200,
          }),
        }));
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
