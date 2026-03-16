import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { createClient } from "@sanity/client";

import {
  mergeAreaWithLocalData,
  mergeDeveloperWithLocalData,
  mergePropertyWithLocalData,
} from "../src/lib/server/localContentOverlay.js";

function loadJson(path) {
  return JSON.parse(readFileSync(resolve(path), "utf8"));
}

function loadEnvFile(path) {
  const output = {};
  const raw = readFileSync(resolve(path), "utf8");

  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^['"]|['"]$/g, "");
    output[key] = value;
  }

  return output;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function keyFromLabel(value) {
  return String(value || "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(/\s+/)
    .map((part, index) => {
      const normalized = part.toLowerCase();
      return index === 0
        ? normalized
        : normalized.charAt(0).toUpperCase() + normalized.slice(1);
    })
    .join("");
}

function makeKey(prefix, index) {
  return `${prefix}-${String(index + 1).padStart(2, "0")}`;
}

const env = loadEnvFile(".env.local");
const sanityConfig = loadJson("C:/Users/Hameed/.config/sanity/config.json");
const en = loadJson("src/i18n/en.json");
const ar = loadJson("src/i18n/ar.json");
const lands = loadJson("lands.json");
const localArticles = loadJson("articles.json");

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  token: sanityConfig.authToken,
});

const ARTICLE_IMAGE_MAP = {
  "off-plan-investment-dubai": "https://mohamadkodmani.ae/off-plan.jpg",
  "dubai-economic-opportunity": "https://mohamadkodmani.ae/economic-opportunity.jpg",
  "dubai-real-estate-demand": "https://mohamadkodmani.ae/real-estate-demand.webp",
  "rental-returns-guide": "https://mohamadkodmani.ae/rentals.jpg",
  "luxury-property-trends-2024":
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2075&q=80",
  "success-stories": "https://mohamadkodmani.ae/investor-success-stories.jpg",
};

const ABOUT_IMAGE_SET = {
  building: "https://mohamadkodmani.ae/marina.jpg",
  vision: "https://mohamadkodmani.ae/economic-opportunity.jpg",
  mission: "https://mohamadkodmani.ae/mission.webp",
  transparency: "https://mohamadkodmani.ae/transparency.avif",
  expertise: "https://mohamadkodmani.ae/expertise.webp",
  results: "https://mohamadkodmani.ae/results.webp",
  journey2006:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80",
  journey2013:
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  journey2016:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2070&q=80",
  journey2023:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2070&q=80",
  journey2023_2025:
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80",
};

function buildAboutPayload(currentAbout = {}) {
  const heroEn = en.aboutHero || {};
  const heroAr = ar.aboutHero || {};
  const buildEn = en.aboutBuildingExcellence || {};
  const buildAr = ar.aboutBuildingExcellence || {};
  const servicesEn = en.aboutServices || {};
  const servicesAr = ar.aboutServices || {};
  const pillarsEn = en.aboutBrandPillars || {};
  const pillarsAr = ar.aboutBrandPillars || {};
  const journeyEn = en.aboutJourney || {};
  const journeyAr = ar.aboutJourney || {};

  const serviceCardsEn = servicesEn.cards || {};
  const serviceCardsAr = servicesAr.cards || {};
  const journeyStepsEn = journeyEn.steps || {};
  const journeyStepsAr = journeyAr.steps || {};

  return {
    hero: {
      ...currentAbout.hero,
      yearsNumber: heroEn.yearsNumber,
      yearsNumberAr: heroAr.yearsNumber,
      yearsSuffix: heroEn.yearsPlus,
      yearsSuffixAr: heroAr.yearsPlus,
      labelTop: heroEn.labelTop,
      labelTopAr: heroAr.labelTop,
      line1: heroEn.line1,
      line1Ar: heroAr.line1,
      line2: heroEn.line2,
      line2Ar: heroAr.line2,
      sinceLabel: heroEn.since,
      sinceLabelAr: heroAr.since,
      description1: heroEn.description1,
      description1Ar: heroAr.description1,
      description2: heroEn.description2,
      description2Ar: heroAr.description2,
      imageAlt: heroEn.imageAltDesk,
      imageAltAr: heroAr.imageAltDesk,
      imageCdn: currentAbout?.hero?.imageCdn || null,
    },
    buildingExcellence: {
      ...currentAbout.buildingExcellence,
      headingLine1: "Real Estate Decisions",
      headingLine1Ar: "قرارات عقارية",
      headingLine2: "Built for Wealth,",
      headingLine2Ar: "مصممة للثروة،",
      headingLine3: "Not Headlines",
      headingLine3Ar: "لا للعناوين فقط",
      paragraph: buildEn.lead,
      paragraphAr: buildAr.lead,
      imageAlt: "Dubai skyline investment strategy visual",
      imageAltAr: "صورة أفق دبي للاستثمار العقاري",
      imageCdn: { url: ABOUT_IMAGE_SET.building },
      stats: [
        {
          _key: "experience",
          count: "19",
          suffix: "+",
          suffixAr: "+",
          label: buildEn.stats?.experience?.description,
          labelAr: buildAr.stats?.experience?.description,
        },
        {
          _key: "volume",
          count: "650",
          suffix: "M+",
          suffixAr: "مليون+",
          label: buildEn.stats?.volume?.description,
          labelAr: buildAr.stats?.volume?.description,
        },
        {
          _key: "returns",
          count: "8",
          suffix: "%+",
          suffixAr: "%+",
          label: buildEn.stats?.returns?.description,
          labelAr: buildAr.stats?.returns?.description,
        },
      ],
    },
    services: {
      ...currentAbout.services,
      title: servicesEn.sectionTitle,
      titleAr: servicesAr.sectionTitle,
      intro: servicesEn.intro,
      introAr: servicesAr.intro,
      footer: servicesEn.footer?.text,
      footerAr: servicesAr.footer?.text,
      cards: Object.entries(serviceCardsEn).map(([key, card], index) => ({
        _key: makeKey("service", index),
        title: card.title,
        titleAr: serviceCardsAr[key]?.title || "",
        items: Object.values(card.points || {}),
        itemsAr: Object.values(serviceCardsAr[key]?.points || {}),
      })),
    },
    accordion: {
      ...currentAbout.accordion,
      visionTitle: pillarsEn.vision?.title,
      visionTitleAr: pillarsAr.vision?.title,
      visionText: pillarsEn.vision?.body,
      visionTextAr: pillarsAr.vision?.body,
      visionImageAlt: pillarsEn.vision?.title,
      visionImageAltAr: pillarsAr.vision?.title,
      visionImageCdn: { url: ABOUT_IMAGE_SET.vision },
      missionTitle: pillarsEn.mission?.title,
      missionTitleAr: pillarsAr.mission?.title,
      missionText: pillarsEn.mission?.body,
      missionTextAr: pillarsAr.mission?.body,
      missionImageAlt: pillarsEn.mission?.title,
      missionImageAltAr: pillarsAr.mission?.title,
      missionImageCdn: { url: ABOUT_IMAGE_SET.mission },
      coreTitle: pillarsEn.pillars?.sectionTitle,
      coreTitleAr: pillarsAr.pillars?.sectionTitle,
      coreSubtitleTop: pillarsEn.pillars?.headingKicker,
      coreSubtitleTopAr: pillarsAr.pillars?.headingKicker,
      coreSubtitleBottom: pillarsEn.pillars?.headingMain,
      coreSubtitleBottomAr: pillarsAr.pillars?.headingMain,
      pillars: [
        {
          _key: "transparency",
          title: pillarsEn.pillars?.transparency?.title,
          titleAr: pillarsAr.pillars?.transparency?.title,
          text: pillarsEn.pillars?.transparency?.body,
          textAr: pillarsAr.pillars?.transparency?.body,
          imageAlt: pillarsEn.pillars?.transparency?.title,
          imageAltAr: pillarsAr.pillars?.transparency?.title,
          imageCdn: { url: ABOUT_IMAGE_SET.transparency },
        },
        {
          _key: "expertise",
          title: pillarsEn.pillars?.expertise?.title,
          titleAr: pillarsAr.pillars?.expertise?.title,
          text: pillarsEn.pillars?.expertise?.body,
          textAr: pillarsAr.pillars?.expertise?.body,
          imageAlt: pillarsEn.pillars?.expertise?.title,
          imageAltAr: pillarsAr.pillars?.expertise?.title,
          imageCdn: { url: ABOUT_IMAGE_SET.expertise },
        },
        {
          _key: "results",
          title: pillarsEn.pillars?.results?.title,
          titleAr: pillarsAr.pillars?.results?.title,
          text: pillarsEn.pillars?.results?.body,
          textAr: pillarsAr.pillars?.results?.body,
          imageAlt: pillarsEn.pillars?.results?.title,
          imageAltAr: pillarsAr.pillars?.results?.title,
          imageCdn: { url: ABOUT_IMAGE_SET.results },
        },
      ],
    },
    journey: {
      ...currentAbout.journey,
      kicker: journeyEn.kicker,
      kickerAr: journeyAr.kicker,
      heading: journeyEn.heading,
      headingAr: journeyAr.heading,
      steps: [
        "2006",
        "2013",
        "2016",
        "2023",
        "2023_2025",
      ].map((key, index) => ({
        _key: makeKey("journey", index),
        year: journeyStepsEn[key]?.year,
        yearAr: journeyStepsAr[key]?.year,
        title: journeyStepsEn[key]?.title,
        titleAr: journeyStepsAr[key]?.title,
        description: journeyStepsEn[key]?.description,
        descriptionAr: journeyStepsAr[key]?.description,
        imageAlt: journeyStepsEn[key]?.title,
        imageAltAr: journeyStepsAr[key]?.title,
        imageCdn: { url: ABOUT_IMAGE_SET[`journey${key}`] },
      })),
    },
  };
}

function buildLandDoc(item, index) {
  const isIndustrial = item.slug === "al-saja-el-namoosajiya";
  const baseGallery = Array.isArray(item.gallery) ? item.gallery : [];
  const galleryImages = baseGallery.map((base, imageIndex) => ({
    _key: makeKey(`land-gallery-${index + 1}`, imageIndex),
    url: `${base}/${imageIndex + 1}.webp`,
  }));

  return {
    _type: "property",
    _id: `property-${item.slug}`,
    title: item.title_en,
    titleAr: item.title_ar,
    slug: { _type: "slug", current: item.slug },
    developer: "Al Rasikhoon Real Estate",
    location: item.location_en,
    locationAr: item.location_ar,
    status: "land",
    landCategory: isIndustrial ? "industrial" : "residential",
    startingPrice: item.price_en,
    unitTypes: item.area_en,
    heroImage: galleryImages[0]?.url || "",
    galleryImages,
    description: `${item.title_en} land opportunity in ${item.location_en}.`,
    descriptionAr: item.title_ar,
    lat: item.lat,
    lng: item.lng,
    regionSlug: "sharjah",
    areaSlug: "sharjah",
  };
}

async function patchProperties() {
  const docs = await client.fetch(`*[_type == "property"]{
    _id,"slug":slug.current,title,titleAr,developer,location,locationAr,status,landCategory,propertyType,type,
    regionSlug,areaSlug,startingPrice,completionDate,paymentPlan,unitTypes,featured,heroImage,heroImageCdn,
    heroImageUpload{asset->{url}},heroVideo,galleryImages,brochureUrl,description,descriptionAr,amenities,
    floorPlans,lat,lng,nearbyPlaces
  }`);

  await Promise.all(
    docs.map(async (doc) => {
      const normalized = {
        ...doc,
        heroImage:
          doc?.heroImageCdn?.url ||
          doc?.heroImageUpload?.asset?.url ||
          doc?.heroImage ||
          "",
      };
      const merged = mergePropertyWithLocalData(normalized);
      await client
        .patch(doc._id)
        .set({
          title: merged.title || doc.title,
          titleAr: merged.titleAr || doc.titleAr || "",
          developer: merged.developer || doc.developer || "",
          location: merged.location || doc.location || "",
          locationAr: merged.locationAr || doc.locationAr || "",
          status:
            merged.status === "Ready To Move"
              ? "secondary"
              : merged.status === "Off-plan"
              ? "offplan"
              : merged.status === "Land"
              ? "land"
              : merged.status === "Rental"
              ? "rental"
              : doc.status,
          landCategory: merged.landCategory || doc.landCategory,
          propertyType: merged.propertyType || doc.propertyType,
          regionSlug: merged.regionSlug || doc.regionSlug || "",
          areaSlug: merged.areaSlug || doc.areaSlug || "",
          startingPrice: merged.startingPrice || doc.startingPrice || "",
          completionDate: merged.completionDate || doc.completionDate || "",
          paymentPlan: merged.paymentPlan || doc.paymentPlan || "",
          unitTypes: merged.unitTypes || doc.unitTypes || "",
          heroImage: merged.heroImage || normalized.heroImage || "",
          galleryImages: Array.isArray(merged.galleryImages) ? merged.galleryImages : [],
          brochureUrl: merged.brochureUrl || doc.brochureUrl || "",
          description: merged.description || doc.description || "",
          descriptionAr: merged.descriptionAr || doc.descriptionAr || "",
          amenities: Array.isArray(merged.amenities) ? merged.amenities : [],
          floorPlans: Array.isArray(merged.floorPlans) ? merged.floorPlans : [],
          lat: merged.lat ?? doc.lat ?? null,
          lng: merged.lng ?? doc.lng ?? null,
          nearbyPlaces: Array.isArray(merged.nearbyPlaces) ? merged.nearbyPlaces : [],
        })
        .commit();
    })
  );
}

async function patchAreas() {
  const docs = await client.fetch(`*[_type == "area"]{
    _id,"slug":slug.current,name,nameAr,heroImage,heroImageCdn,tagline,taglineAr,description,descriptionAr,
    location,locationAr,avgBuyPrice,avgBuyPriceAr,avgRentPrice,avgRentPriceAr,roi,roiAr,regionSlug,
    highlights,highlightsAr,featured,order
  }`);

  await Promise.all(
    docs.map(async (doc) => {
      const merged = mergeAreaWithLocalData({
        ...doc,
        heroImage: doc?.heroImageCdn?.url || doc?.heroImage || "",
      });
      await client
        .patch(doc._id)
        .set({
          name: merged.name || doc.name,
          nameAr: merged.nameAr || doc.nameAr || "",
          heroImage: merged.heroImage || doc.heroImage || "",
          tagline: merged.tagline || doc.tagline || "",
          taglineAr: merged.taglineAr || doc.taglineAr || "",
          description: merged.description || doc.description || "",
          descriptionAr: merged.descriptionAr || doc.descriptionAr || "",
          location: merged.location || doc.location || "",
          locationAr: merged.locationAr || doc.locationAr || "",
          avgBuyPrice: merged.avgBuyPrice || doc.avgBuyPrice || "",
          avgBuyPriceAr: merged.avgBuyPriceAr || doc.avgBuyPriceAr || "",
          avgRentPrice: merged.avgRentPrice || doc.avgRentPrice || "",
          avgRentPriceAr: merged.avgRentPriceAr || doc.avgRentPriceAr || "",
          roi: merged.roi || doc.roi || "",
          roiAr: merged.roiAr || doc.roiAr || "",
          regionSlug: merged.regionSlug || doc.regionSlug || doc.slug,
          highlights: Array.isArray(merged.highlights) ? merged.highlights : [],
          highlightsAr: Array.isArray(merged.highlightsAr) ? merged.highlightsAr : [],
          featured: Boolean(merged.featured ?? doc.featured),
        })
        .commit();
    })
  );
}

async function patchDevelopers() {
  const docs = await client.fetch(`*[_type == "developer"]{
    _id,"slug":slug.current,name,nameAr,tagline,taglineAr,logoUrl,logoCdn,heroImageUrl,heroImageCdn,
    about,aboutAr,stats,highlights,highlightsAr,founder
  }`);

  await Promise.all(
    docs.map(async (doc) => {
      const merged = mergeDeveloperWithLocalData({
        ...doc,
        logoUrl: doc?.logoCdn?.url || doc?.logoUrl || "",
        heroImageUrl: doc?.heroImageCdn?.url || doc?.heroImageUrl || "",
      });
      await client
        .patch(doc._id)
        .set({
          name: merged.name || doc.name,
          nameAr: merged.nameAr || doc.nameAr || "",
          tagline: merged.tagline || doc.tagline || "",
          taglineAr: merged.taglineAr || doc.taglineAr || "",
          logoUrl: merged.logoUrl || doc.logoUrl || "",
          heroImageUrl: merged.heroImageUrl || doc.heroImageUrl || "",
          about: Array.isArray(merged.about) ? merged.about : [],
          aboutAr: Array.isArray(merged.aboutAr) ? merged.aboutAr : [],
          stats: merged.stats || doc.stats || {},
          highlights: Array.isArray(merged.highlights) ? merged.highlights : [],
          highlightsAr: Array.isArray(merged.highlightsAr) ? merged.highlightsAr : [],
        })
        .commit();
    })
  );
}

async function patchArticles() {
  const docs = await client.fetch(`*[_type == "article"]{_id,"slug":slug.current,title,titleAr,description,descriptionAr,mainImage,hero}`);

  await Promise.all(
    docs.map(async (doc) => {
      const local = localArticles.find((item) => item.slug === doc.slug);
      const image = ARTICLE_IMAGE_MAP[doc.slug] || doc.mainImage || doc?.hero?.image || "";
      await client
        .patch(doc._id)
        .set({
          title: local?.title || doc.title,
          titleAr: local?.ar?.title || doc.titleAr || "",
          description: local?.description || doc.description || "",
          descriptionAr: local?.ar?.description || doc.descriptionAr || "",
          mainImage: image,
          hero: {
            ...(doc.hero || {}),
            title: doc?.hero?.title || local?.title || doc.title,
            titleAr: doc?.hero?.titleAr || local?.ar?.title || doc.titleAr || "",
            subtitle: doc?.hero?.subtitle || local?.description || doc.description || "",
            subtitleAr:
              doc?.hero?.subtitleAr || local?.ar?.description || doc.descriptionAr || "",
            image,
          },
        })
        .commit();
    })
  );
}

async function patchSiteSettings() {
  const settings = await client.fetch(`*[_type == "siteSettings"] | order(_updatedAt desc)[0]{
    _id, navbar, heroSlides, artOfDetail, pillars, contact, about
  }`);
  if (!settings?._id) throw new Error("siteSettings document not found");

  await client
    .patch(settings._id)
    .set({
      about: buildAboutPayload(settings.about || {}),
      artOfDetail: {
        ...(settings.artOfDetail || {}),
        ownerImageCdn: settings?.artOfDetail?.ownerImageCdn || {
          url: "https://luxury-real-estate-media.b-cdn.net/public/boss-nobg.png",
        },
      },
    })
    .commit();
}

async function patchLands() {
  for (const [index, item] of lands.entries()) {
    const doc = buildLandDoc(item, index);
    await client.createOrReplace(doc);
  }
}

async function main() {
  await patchSiteSettings();
  await patchProperties();
  await patchAreas();
  await patchDevelopers();
  await patchArticles();
  await patchLands();
  console.log("Sanity content sync complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
