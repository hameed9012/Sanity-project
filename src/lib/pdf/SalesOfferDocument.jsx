import React from "react";
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "NotoSansArabic",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-arabic/files/noto-sans-arabic-arabic-400-normal.woff",
      fontWeight: 400,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-arabic/files/noto-sans-arabic-arabic-700-normal.woff",
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-400-normal.woff",
      fontWeight: 400,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-600-normal.woff",
      fontWeight: 600,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-700-normal.woff",
      fontWeight: 700,
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const WHITE = "#FFFFFF";
const BLACK = "#121212";
const TEXT = "#2E2E2E";
const MUTED = "#8D8D8D";
const LIGHT = "#F3F3F3";
const BORDER = "#E4E4E4";
const COVER = "#1C2432";
const LANDSCAPE_WIDTH = 841.89;
const LANDSCAPE_HEIGHT = 595.28;

const S = StyleSheet.create({
  coverPage: {
    position: "relative",
    backgroundColor: COVER,
    padding: 0,
    width: LANDSCAPE_WIDTH,
    height: LANDSCAPE_HEIGHT,
    overflow: "hidden",
    flexDirection: "column",
  },
  coverImagePanel: {
    width: LANDSCAPE_WIDTH,
    height: 470,
    backgroundColor: COVER,
  },
  fullPageImage: {
    width: LANDSCAPE_WIDTH,
    height: 470,
    objectFit: "cover",
  },
  coverBottomBar: {
    width: LANDSCAPE_WIDTH,
    height: LANDSCAPE_HEIGHT - 470,
    backgroundColor: COVER,
    paddingTop: 18,
    paddingRight: 28,
    paddingBottom: 18,
    paddingLeft: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  coverContent: {
    width: LANDSCAPE_WIDTH - 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  coverLeft: {
    width: 420,
  },
  coverLine: {
    fontSize: 20,
    color: WHITE,
    fontWeight: 600,
    marginBottom: 8,
  },
  coverBrand: {
    fontSize: 27,
    color: WHITE,
    fontWeight: 700,
    lineHeight: 1.15,
    marginBottom: 8,
  },
  coverDate: {
    fontSize: 9,
    color: "rgba(255,255,255,0.88)",
  },
  coverAgentWrap: {
    width: 290,
    paddingTop: 38,
  },
  coverAgentCard: {
    backgroundColor: "rgba(255,255,255,0.78)",
    borderRadius: 22,
    paddingTop: 38,
    paddingRight: 20,
    paddingBottom: 18,
    paddingLeft: 20,
  },
  coverAgentAvatar: {
    position: "absolute",
    top: -22,
    left: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    border: "4 solid #FFFFFF",
    objectFit: "cover",
    backgroundColor: "#E5E5E5",
  },
  coverAgentName: {
    fontSize: 15,
    fontWeight: 700,
    color: BLACK,
    marginBottom: 3,
  },
  coverAgentMeta: {
    fontSize: 10,
    color: "#4B4B4B",
    marginBottom: 2,
  },
  page: {
    paddingTop: 24,
    paddingRight: 28,
    paddingBottom: 24,
    paddingLeft: 28,
    backgroundColor: WHITE,
    color: TEXT,
    fontSize: 10,
  },
  pageChrome: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  pageChromeLeft: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  pageChromeRight: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  splitRow: {
    flexDirection: "row",
    height: 500,
  },
  imageCol: {
    width: "42%",
    paddingRight: 18,
  },
  bodyCol: {
    width: "58%",
    paddingLeft: 10,
  },
  sectionImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
    backgroundColor: LIGHT,
  },
  title: {
    fontSize: 27,
    lineHeight: 1.15,
    fontWeight: 700,
    color: BLACK,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 34,
    height: 34,
    objectFit: "contain",
    marginRight: 10,
  },
  bigLogo: {
    width: 72,
    height: 72,
    objectFit: "contain",
    marginRight: 16,
  },
  metaLabel: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  metaValue: {
    fontSize: 11,
    color: TEXT,
    fontWeight: 600,
  },
  table: {
    marginTop: 12,
    borderRadius: 10,
    overflow: "hidden",
    border: `1 solid ${BORDER}`,
  },
  trHead: {
    flexDirection: "row",
    backgroundColor: LIGHT,
    borderBottom: `1 solid ${BORDER}`,
  },
  tr: {
    flexDirection: "row",
    borderBottom: `1 solid ${BORDER}`,
  },
  cellHead: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 8,
    color: MUTED,
    textTransform: "uppercase",
  },
  cell: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 9,
    color: TEXT,
  },
  c1: { width: "24%" },
  c2: { width: "12%" },
  c3: { width: "16%" },
  c4: { width: "20%" },
  c5: { width: "28%" },
  factStack: {
    marginBottom: 18,
  },
  factTitle: {
    fontSize: 9,
    color: MUTED,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  factText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: TEXT,
  },
  longText: {
    fontSize: 11,
    lineHeight: 1.7,
    color: "#404040",
  },
  fullImage: {
    width: "100%",
    height: 520,
    objectFit: "cover",
    borderRadius: 10,
    backgroundColor: LIGHT,
  },
  twinRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 520,
  },
  twinImage: {
    width: "48.8%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
    backgroundColor: LIGHT,
  },
  mixedRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 520,
  },
  mixedLeft: {
    width: "38%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
    backgroundColor: LIGHT,
  },
  mixedRight: {
    width: "59%",
    justifyContent: "space-between",
  },
  mixedRightImage: {
    width: "100%",
    height: "48.7%",
    objectFit: "cover",
    borderRadius: 10,
    backgroundColor: LIGHT,
  },
  sideHeadingCol: {
    width: "34%",
    paddingRight: 18,
  },
  sideBodyCol: {
    width: "66%",
  },
  sideHeading: {
    fontSize: 28,
    lineHeight: 1.1,
    fontWeight: 700,
    color: BLACK,
    marginBottom: 10,
  },
  sideCaption: {
    fontSize: 11,
    lineHeight: 1.7,
    color: "#444444",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
    backgroundColor: LIGHT,
  },
  amenGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    height: 500,
  },
  amenCard: {
    width: "31.7%",
    height: 156,
    borderRadius: 10,
    border: `1 solid ${BORDER}`,
    backgroundColor: WHITE,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  amenLeadCard: {
    backgroundColor: LIGHT,
    justifyContent: "center",
  },
  amenLead: {
    fontSize: 22,
    lineHeight: 1.15,
    fontWeight: 700,
    color: BLACK,
  },
  amenImageBox: {
    height: 84,
    borderRadius: 10,
    backgroundColor: LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  amenImage: {
    width: 54,
    height: 54,
    objectFit: "contain",
  },
  amenText: {
    fontSize: 14,
    lineHeight: 1.35,
    fontWeight: 600,
    color: TEXT,
    textAlign: "center",
  },
  paymentBox: {
    marginTop: 8,
    borderRadius: 14,
    border: `1 solid ${BORDER}`,
    padding: 18,
    backgroundColor: LIGHT,
  },
  paymentTitle: {
    fontSize: 23,
    fontWeight: 700,
    color: BLACK,
    marginBottom: 12,
  },
  paymentText: {
    fontSize: 11,
    lineHeight: 1.7,
    color: "#424242",
  },
  paymentGrid: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  paymentCard: {
    width: "48.8%",
    marginBottom: 12,
    padding: 14,
    borderRadius: 10,
    backgroundColor: WHITE,
    border: `1 solid ${BORDER}`,
  },
  paymentPercent: {
    fontSize: 20,
    fontWeight: 700,
    color: BLACK,
    marginBottom: 4,
  },
  paymentLabel: {
    fontSize: 9,
    lineHeight: 1.45,
    color: MUTED,
    textTransform: "uppercase",
  },
  unitImage: {
    width: "100%",
    height: 350,
    objectFit: "contain",
    borderRadius: 10,
    backgroundColor: LIGHT,
    marginBottom: 16,
  },
  statList: {
    marginTop: 4,
    marginBottom: 16,
  },
  statLine: {
    fontSize: 11,
    lineHeight: 1.7,
    color: TEXT,
  },
  specGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  specCard: {
    width: "32%",
    marginBottom: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: LIGHT,
    border: `1 solid ${BORDER}`,
  },
  specLabel: {
    fontSize: 8,
    color: MUTED,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  specValue: {
    fontSize: 11,
    color: TEXT,
    fontWeight: 600,
  },
  developerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  developerText: {
    fontSize: 11,
    lineHeight: 1.7,
    color: "#404040",
  },
  singleDeveloperImage: {
    width: "100%",
    height: 220,
    objectFit: "cover",
    borderRadius: 10,
    backgroundColor: LIGHT,
    marginTop: 18,
  },
});

const safe = (v) => (typeof v === "string" ? v : v == null ? "" : String(v));

function getFont(locale) {
  return String(locale || "").startsWith("ar") ? "NotoSansArabic" : "Inter";
}

function prettifyUnitTitle(value, bedrooms) {
  const raw = safe(value).trim();
  if (!raw && bedrooms != null && bedrooms !== "") {
    return `${bedrooms} Bedroom`;
  }

  if (!raw) return "Unit";

  if (/^bedroom\s*\d+$/i.test(raw)) {
    const n = raw.match(/\d+/)?.[0];
    return n ? `${n} Bedroom` : raw;
  }

  if (/^\d+\s*bed(room)?s?$/i.test(raw)) {
    const n = raw.match(/\d+/)?.[0];
    return n ? `${n} Bedroom` : raw;
  }

  return raw
    .replace(/^apartments?\s*:\s*/i, "")
    .replace(/^unit\s*:\s*/i, "")
    .trim();
}

function uniqueImages(list = []) {
  const seen = new Set();
  const out = [];
  for (const item of list) {
    const value = safe(item).trim();
    if (!value || seen.has(value)) continue;
    seen.add(value);
    out.push(value);
  }
  return out;
}

function chunkText(value, maxChars = 2200) {
  const text = safe(value).trim();
  if (!text) return [];

  const parts = text
    .split(/\n\s*\n/)
    .map((item) => item.trim())
    .filter(Boolean);

  const source = parts.length ? parts : [text];
  const pages = [];
  let current = [];
  let count = 0;

  for (const part of source) {
    const size = part.length + 2;
    if (count + size > maxChars && current.length) {
      pages.push(current.join("\n\n"));
      current = [part];
      count = part.length;
      continue;
    }
    current.push(part);
    count += size;
  }

  if (current.length) pages.push(current.join("\n\n"));
  return pages;
}

function repeatImages(images, needed) {
  const list = uniqueImages(images);
  if (!list.length) return Array.from({ length: needed }).map(() => "");
  return Array.from({ length: needed }).map((_, index) => list[index % list.length]);
}

function splitGallery(images) {
  const list = uniqueImages(images);
  return list;
}

function buildImageLayouts(images) {
  const list = uniqueImages(images);
  const layouts = [];
  let index = 0;
  let mode = 0;

  while (index < list.length) {
    if (mode === 0) {
      layouts.push([list[index]]);
      index += 1;
    } else if (mode === 1) {
      layouts.push(list.slice(index, index + 2));
      index += 2;
    } else {
      layouts.push(list.slice(index, index + 3));
      index += 3;
    }
    mode = (mode + 1) % 3;
  }

  return layouts.filter((layout) => layout.length);
}

function amenityPages(amenities = []) {
  const list = Array.isArray(amenities) ? amenities.filter(Boolean) : [];
  if (!list.length) return [];

  const pages = [{ withHeading: true, items: list.slice(0, 5) }];
  let index = 5;
  while (index < list.length) {
    pages.push({ withHeading: false, items: list.slice(index, index + 6) });
    index += 6;
  }
  return pages;
}

function sectionChrome(left, right, font) {
  return (
    <View style={S.pageChrome}>
      <Text style={[S.pageChromeLeft, { fontFamily: font }]}>{safe(left)}</Text>
      <Text style={[S.pageChromeRight, { fontFamily: font }]}>{safe(right)}</Text>
    </View>
  );
}

function renderGridPage(images) {
  if (!images[0]) return null;

  if (!images[1]) {
    return <Image src={images[0]} style={S.fullImage} />;
  }

  if (!images[2]) {
    return (
      <View style={S.twinRow}>
        <Image src={images[0]} style={S.twinImage} />
        <Image src={images[1]} style={S.twinImage} />
      </View>
    );
  }

  return (
    <View style={S.mixedRow}>
      <Image src={images[0]} style={S.mixedLeft} />
      <View style={S.mixedRight}>
        <Image src={images[1]} style={S.mixedRightImage} />
        <Image src={images[2]} style={S.mixedRightImage} />
      </View>
    </View>
  );
}

function AboutTable({ rows, font }) {
  const list = Array.isArray(rows) ? rows : [];
  if (!list.length) return null;

  return (
    <View style={S.table}>
      <View style={S.trHead}>
        <Text style={[S.cellHead, S.c1, { fontFamily: font }]}>Unit type</Text>
        <Text style={[S.cellHead, S.c2, { fontFamily: font }]}>Bedrooms</Text>
        <Text style={[S.cellHead, S.c3, { fontFamily: font }]}>Amount</Text>
        <Text style={[S.cellHead, S.c4, { fontFamily: font }]}>Area, sqft</Text>
        <Text style={[S.cellHead, S.c5, { fontFamily: font }]}>Price from</Text>
      </View>
      {list.map((row, index) => (
        <View key={`row-${index}`} style={[S.tr, index === list.length - 1 ? { borderBottomWidth: 0 } : null]}>
          <Text style={[S.cell, S.c1, { fontFamily: font }]}>{safe(row.unitType)}</Text>
          <Text style={[S.cell, S.c2, { fontFamily: font }]}>{safe(row.bedrooms)}</Text>
          <Text style={[S.cell, S.c3, { fontFamily: font }]}>{safe(row.amount)}</Text>
          <Text style={[S.cell, S.c4, { fontFamily: font }]}>{safe(row.area)}</Text>
          <Text style={[S.cell, S.c5, { fontFamily: font }]}>{safe(row.priceFrom)}</Text>
        </View>
      ))}
    </View>
  );
}

export default function SalesOfferDocument({ payload }) {
  const p = payload || {};
  const locale = p.locale || "en";
  const font = getFont(locale);
  const projectName = safe(p.projectName || "Project");
  const developerName = safe(p?.developer?.name);
  const developerLogo = safe(p?.developer?.logo);
  const districtName = safe(p?.location?.district || p?.location?.address);
  const locationAddress = safe(p?.location?.address);
  const descriptionPages = chunkText(p.description || p.generalFacts, 2100);
  const locationPages = chunkText(p.locationDescription, 2100);
  const gallery = splitGallery(p.gallery);
  const imageLayouts = buildImageLayouts(gallery);
  const amenityGroups = amenityPages(p.amenities);
  const floorPlans = Array.isArray(p.floorPlans) ? p.floorPlans : [];
  const unitRows = Array.isArray(p.unitRows) ? p.unitRows : [];
  const paymentPlans = Array.isArray(p.paymentPlans) ? p.paymentPlans : [];
  const developerText = safe(p?.developer?.description);
  const developerImage = uniqueImages(p?.developer?.images || p.gallery || [])[0] || "";
  const overviewImage = safe(p.overviewImage || p.coverImage || gallery[0]);
  const masterplanImage = safe(p.masterplanImage || "");
  const mapImage = safe(p?.location?.mapImage || "");

  return (
    <Document>
      <Page size={[LANDSCAPE_WIDTH, LANDSCAPE_HEIGHT]} wrap={false} style={S.coverPage}>
        <View style={S.coverImagePanel}>
          {p.coverImage ? <Image src={p.coverImage} style={S.fullPageImage} /> : null}
        </View>
        <View style={S.coverBottomBar}>
          <View style={S.coverContent}>
            <View style={S.coverLeft}>
              <Text style={[S.coverLine, { fontFamily: font }]}>Look what we found for you</Text>
              <Text style={[S.coverBrand, { fontFamily: font }]}>Izzzi.LifeMINT {projectName}</Text>
              <Text style={[S.coverDate, { fontFamily: font }]}>
                {safe(p.createdAtLabel)} {safe(p.createdAt)}
              </Text>
            </View>
            <View style={S.coverAgentWrap}>
              <View style={S.coverAgentCard}>
                {p?.agent?.avatar ? <Image src={p.agent.avatar} style={S.coverAgentAvatar} /> : null}
                <Text style={[S.coverAgentName, { fontFamily: font }]}>{safe(p?.agent?.name)}</Text>
                <Text style={[S.coverAgentMeta, { fontFamily: font }]}>{safe(p?.agent?.company)}</Text>
                <Text style={[S.coverAgentMeta, { fontFamily: font }]}>{safe(p?.agent?.phone)}</Text>
                <Text style={[S.coverAgentMeta, { fontFamily: font }]}>{safe(p?.agent?.email)}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" orientation="landscape" style={S.page}>
        {sectionChrome("", "ABOUT THE PROJECT", font)}
        <View style={S.splitRow}>
          <View style={S.imageCol}>
            {overviewImage ? <Image src={overviewImage} style={S.sectionImage} /> : null}
          </View>
          <View style={S.bodyCol}>
            <Text style={[S.title, { fontFamily: font }]}>{projectName}</Text>
            <View style={S.metaRow}>
              {developerLogo ? <Image src={developerLogo} style={S.logo} /> : null}
              <View>
                <Text style={[S.metaLabel, { fontFamily: font }]}>Developer</Text>
                <Text style={[S.metaValue, { fontFamily: font }]}>{developerName}</Text>
              </View>
            </View>
            <View style={S.metaRow}>
              <View>
                <Text style={[S.metaLabel, { fontFamily: font }]}>District</Text>
                <Text style={[S.metaValue, { fontFamily: font }]}>{districtName}</Text>
              </View>
            </View>
            <AboutTable rows={unitRows} font={font} />
          </View>
        </View>
      </Page>

      <Page size="A4" orientation="landscape" style={S.page}>
        {sectionChrome("", "ABOUT THE PROJECT", font)}
        <View style={S.splitRow}>
          <View style={S.imageCol}>
            {overviewImage ? <Image src={overviewImage} style={S.sectionImage} /> : null}
          </View>
          <View style={S.bodyCol}>
            <Text style={[S.title, { fontFamily: font }]}>{projectName}</Text>
            <View style={S.metaRow}>
              {developerLogo ? <Image src={developerLogo} style={S.logo} /> : null}
              <Text style={[S.metaValue, { fontFamily: font }]}>{developerName}</Text>
            </View>

            <View style={S.factStack}>
              <Text style={[S.factTitle, { fontFamily: font }]}>Description</Text>
              <Text style={[S.factText, { fontFamily: font }]}>{descriptionPages[0] || "Project general facts"}</Text>
            </View>

            <View style={S.factStack}>
              <Text style={[S.factTitle, { fontFamily: font }]}>Finishing and materials</Text>
              <Text style={[S.factText, { fontFamily: font }]}>{safe(p.finishing || "Modern finishing with high quality materials")}</Text>
            </View>

            <View style={S.factStack}>
              <Text style={[S.factTitle, { fontFamily: font }]}>Kitchen and appliances</Text>
              <Text style={[S.factText, { fontFamily: font }]}>{safe(p.kitchen || "Kitchen specification on request")}</Text>
            </View>

            <View style={S.factStack}>
              <Text style={[S.factTitle, { fontFamily: font }]}>Furnishing</Text>
              <Text style={[S.factText, { fontFamily: font }]}>{safe(p.furnishing || "Furnishing details on request")}</Text>
            </View>
          </View>
        </View>
      </Page>

      {locationPages[0] || locationAddress ? (
        <Page size="A4" orientation="landscape" style={S.page}>
          {sectionChrome("", "ABOUT THE PROJECT", font)}
          <Text style={[S.factTitle, { fontFamily: font, marginBottom: 8 }]}>Location description and benefits</Text>
          <Text style={[S.longText, { fontFamily: font }]}>
            {locationPages[0] || locationAddress}
          </Text>
        </Page>
      ) : null}

      {imageLayouts.map((layout, index) => (
        <Page key={`gallery-${index}`} size="A4" orientation="landscape" style={S.page}>
          {sectionChrome("IZZZI.LIFEMINT / ARCHITECTURE", "MOHAMAD KODMANI REAL ESTATE BROKERS LLC", font)}
          {renderGridPage(layout)}
        </Page>
      ))}

      <Page size="A4" orientation="landscape" style={S.page}>
        {sectionChrome("IZZZI.LIFEMINT / POINT OF INTEREST", "MOHAMAD KODMANI REAL ESTATE BROKERS LLC", font)}
        <View style={S.splitRow}>
          <View style={S.sideHeadingCol}>
            <Text style={[S.sideHeading, { fontFamily: font }]}>Location</Text>
            <Text style={[S.sideCaption, { fontFamily: font }]}>{locationAddress}</Text>
          </View>
          <View style={S.sideBodyCol}>
            {mapImage ? <Image src={mapImage} style={S.mapImage} /> : null}
          </View>
        </View>
      </Page>

      {amenityGroups.map((group, index) => (
        <Page key={`amen-${index}`} size="A4" orientation="landscape" style={S.page}>
          {sectionChrome("IZZZI.LIFEMINT / FEATURES & AMENITIES", "MOHAMAD KODMANI REAL ESTATE BROKERS LLC", font)}
          <View style={S.amenGrid}>
            {group.withHeading ? (
              <View style={[S.amenCard, S.amenLeadCard]}>
                <Text style={[S.amenLead, { fontFamily: font }]}>Features &{"\n"}Amenities</Text>
              </View>
            ) : null}
            {group.items.map((amenity, amenityIndex) => (
              <View style={S.amenCard} key={`amen-card-${index}-${amenityIndex}`}>
                {amenity?.iconUrl ? (
                  <View style={[S.amenImageBox, { marginBottom: 12, width: "100%" }]}>
                    <Image src={amenity.iconUrl} style={S.amenImage} />
                  </View>
                ) : null}
                <Text style={[S.amenText, { fontFamily: font }]}>{safe(amenity?.label)}</Text>
              </View>
            ))}
          </View>
        </Page>
      ))}

      {masterplanImage ? (
        <Page size="A4" orientation="landscape" style={S.page}>
          {sectionChrome("IZZZI.LIFEMINT / MASTERPLAN", "MOHAMAD KODMANI REAL ESTATE BROKERS LLC", font)}
          <View style={S.splitRow}>
            <View style={S.sideHeadingCol}>
              <Text style={[S.sideHeading, { fontFamily: font }]}>Masterplan</Text>
            </View>
            <View style={S.sideBodyCol}>
              <Image src={masterplanImage} style={S.mapImage} />
            </View>
          </View>
        </Page>
      ) : null}

      {paymentPlans.map((plan, index) => (
        <Page key={`payment-${index}`} size="A4" orientation="landscape" style={S.page}>
          {sectionChrome("IZZZI.LIFEMINT / PAYMENT PLAN", "MOHAMAD KODMANI REAL ESTATE BROKERS LLC", font)}
          <Text style={[S.title, { fontFamily: font, fontSize: 24, marginBottom: 12 }]}>Payment Plan</Text>
          <View style={S.paymentBox}>
            <Text style={[S.paymentTitle, { fontFamily: font }]}>{safe(plan?.title || `Payment Plan Option ${index + 1}`)}</Text>
            {plan?.summary ? <Text style={[S.paymentText, { fontFamily: font }]}>{safe(plan.summary)}</Text> : null}
            {Array.isArray(plan?.stages) && plan.stages.length ? (
              <View style={S.paymentGrid}>
                {plan.stages.map((stage, stageIndex) => (
                  <View style={S.paymentCard} key={`pay-stage-${index}-${stageIndex}`}>
                    <Text style={[S.paymentPercent, { fontFamily: font }]}>{safe(stage?.percent)}</Text>
                    <Text style={[S.paymentLabel, { fontFamily: font }]}>{safe(stage?.caption)}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
        </Page>
      ))}

      {floorPlans.map((plan, index) => (
        <Page key={`plan-${index}`} size="A4" orientation="landscape" style={S.page}>
          {sectionChrome("IZZZI.LIFEMINT / TYPICAL UNITS", "MOHAMAD KODMANI REAL ESTATE BROKERS LLC", font)}
          <View style={S.splitRow}>
            <View style={S.sideHeadingCol}>
              <Text style={[S.sideHeading, { fontFamily: font }]}>Typical{"\n"}Units</Text>
              <View style={S.statList}>
                {unitRows.map((row, rowIndex) => (
                  <Text key={`row-stat-${rowIndex}`} style={[S.statLine, { fontFamily: font }]}>
                    {safe(row.unitType)}: {safe(row.amount)}
                  </Text>
                ))}
              </View>
            </View>
            <View style={S.sideBodyCol}>
              {plan?.images?.[0] ? <Image src={plan.images[0]} style={S.unitImage} /> : null}
              <Text style={[S.metaLabel, { fontFamily: font }]}>Floor plan</Text>
              <Text style={[S.title, { fontFamily: font, fontSize: 20, marginBottom: 10 }]}>
                {prettifyUnitTitle(plan?.title || plan?.name, plan?.bedrooms || plan?.specs?.Bedrooms)}
              </Text>
              {plan?.specs && Object.keys(plan.specs).length ? (
                <View style={S.specGrid}>
                  {Object.entries(plan.specs).map(([key, value]) => (
                    <View style={S.specCard} key={`${index}-${key}`}>
                      <Text style={[S.specLabel, { fontFamily: font }]}>{safe(key)}</Text>
                      <Text style={[S.specValue, { fontFamily: font }]}>{safe(value)}</Text>
                    </View>
                  ))}
                </View>
              ) : null}
            </View>
          </View>
        </Page>
      ))}

      <Page size="A4" orientation="landscape" style={S.page}>
        {sectionChrome("IZZZI.LIFEMINT / DEVELOPER", "MOHAMAD KODMANI REAL ESTATE BROKERS LLC", font)}
        <View style={S.splitRow}>
          <View style={S.sideHeadingCol}>
            <Text style={[S.sideHeading, { fontFamily: font }]}>Developer</Text>
            {developerLogo ? <Image src={developerLogo} style={[S.bigLogo, { marginTop: 18, marginRight: 0 }]} /> : null}
            <Text style={[S.metaValue, { fontFamily: font, marginTop: 12 }]}>{developerName}</Text>
          </View>
          <View style={S.sideBodyCol}>
            {developerText ? (
              <Text style={[S.developerText, { fontFamily: font }]}>{developerText}</Text>
            ) : null}
            {developerImage ? <Image src={developerImage} style={S.singleDeveloperImage} /> : null}
          </View>
        </View>
      </Page>
    </Document>
  );
}
