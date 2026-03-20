import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

/* ─── Font Registration ──────────────────────────────────────── */
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

/* Disable hyphenation */
Font.registerHyphenationCallback((word) => [word]);

/* ─── Brand Palette ──────────────────────────────────────────── */
const GOLD = "#C9A35A";
const GOLD_LIGHT = "#F5ECD7";
const DARK = "#1A1A1A";
const WHITE = "#FFFFFF";
const MUTED = "#6B7280";
const LIGHT_BG = "#F8F7F4";
const BORDER = "#E8E5DF";

/* ─── Styles ─────────────────────────────────────────────────── */
const S = StyleSheet.create({
  /* COVER PAGE */
  coverPage: {
    position: "relative",
    padding: 0,
    width: "100%",
    height: "100%",
  },
  coverImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  coverDarkOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "60%",
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  coverContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "0 40 30 40",
  },
  coverBadge: {
    fontSize: 9,
    letterSpacing: 4,
    textTransform: "uppercase",
    color: GOLD,
    marginBottom: 8,
    fontFamily: "Inter",
    fontWeight: 600,
  },
  coverTitle: {
    fontSize: 36,
    fontWeight: 700,
    color: WHITE,
    marginBottom: 6,
    lineHeight: 1.15,
    fontFamily: "Inter",
  },
  coverLocation: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 20,
    fontFamily: "Inter",
  },
  coverDivider: {
    width: 50,
    height: 2,
    backgroundColor: GOLD,
    marginBottom: 20,
  },

  /* AGENT CARD (on cover) */
  agentCardCover: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 12,
    padding: "12 16",
    border: "1px solid rgba(255,255,255,0.15)",
    maxWidth: 320,
  },
  agentAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    objectFit: "cover",
    border: `2px solid ${GOLD}`,
  },
  agentNameCover: {
    fontSize: 12,
    fontWeight: 700,
    color: WHITE,
    fontFamily: "Inter",
    marginBottom: 2,
  },
  agentCompanyCover: {
    fontSize: 8,
    color: GOLD,
    fontFamily: "Inter",
    marginBottom: 2,
  },
  agentContactCover: {
    fontSize: 8,
    color: "rgba(255,255,255,0.7)",
    fontFamily: "Inter",
  },

  /* CONTENT PAGES */
  page: {
    padding: "40 40 60 40",
    fontSize: 10,
    color: DARK,
    backgroundColor: WHITE,
    fontFamily: "Inter",
    position: "relative",
  },
  pageAlt: {
    padding: "40 40 60 40",
    fontSize: 10,
    color: DARK,
    backgroundColor: LIGHT_BG,
    fontFamily: "Inter",
    position: "relative",
  },

  /* PAGE HEADER */
  pageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
    paddingBottom: 12,
    borderBottom: `1.5px solid ${GOLD}`,
  },
  pageHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  pageHeaderDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: GOLD,
  },
  pageHeaderTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: DARK,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    fontFamily: "Inter",
  },
  pageHeaderRight: {
    fontSize: 8,
    color: MUTED,
    fontFamily: "Inter",
  },

  /* SECTION TITLES */
  sectionLabel: {
    fontSize: 8,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: GOLD,
    marginBottom: 6,
    fontWeight: 600,
    fontFamily: "Inter",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: DARK,
    marginBottom: 16,
    lineHeight: 1.2,
    fontFamily: "Inter",
  },

  /* FACTS TABLE */
  factsTable: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
    border: `1px solid ${BORDER}`,
  },
  factsRow: {
    flexDirection: "row",
    borderBottom: `1px solid ${BORDER}`,
  },
  factsRowAlt: {
    flexDirection: "row",
    borderBottom: `1px solid ${BORDER}`,
    backgroundColor: LIGHT_BG,
  },
  factsLabel: {
    width: "40%",
    padding: "10 14",
    fontSize: 9,
    color: MUTED,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontFamily: "Inter",
    borderRight: `1px solid ${BORDER}`,
  },
  factsValue: {
    flex: 1,
    padding: "10 14",
    fontSize: 10,
    color: DARK,
    fontWeight: 600,
    fontFamily: "Inter",
  },

  /* DESCRIPTION TEXT */
  descText: {
    fontSize: 10,
    lineHeight: 1.7,
    color: "#444444",
    fontFamily: "Inter",
  },

  /* TWO COLUMN */
  twoCol: {
    flexDirection: "row",
    gap: 20,
  },
  col: { flex: 1 },

  /* DETAIL BLOCK */
  detailBlock: {
    marginBottom: 16,
    padding: "14 16",
    backgroundColor: WHITE,
    borderRadius: 8,
    border: `1px solid ${BORDER}`,
  },
  detailLabel: {
    fontSize: 8,
    color: GOLD,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
    fontFamily: "Inter",
  },
  detailValue: {
    fontSize: 9.5,
    color: "#444",
    lineHeight: 1.6,
    fontFamily: "Inter",
  },

  /* GALLERY */
  galleryFull: {
    width: "100%",
    height: 280,
    borderRadius: 8,
    objectFit: "cover",
    marginBottom: 10,
  },
  galleryHalf: {
    width: "49%",
    height: 180,
    borderRadius: 8,
    objectFit: "cover",
  },
  galleryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  galleryThird: {
    width: "32%",
    height: 150,
    borderRadius: 8,
    objectFit: "cover",
  },

  /* AMENITIES */
  amenGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  amenChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    border: `1px solid ${BORDER}`,
    backgroundColor: WHITE,
  },
  amenIcon: { width: 16, height: 16, opacity: 0.8 },
  amenLabel: {
    fontSize: 9,
    color: DARK,
    fontFamily: "Inter",
  },

  /* FLOOR PLAN */
  floorPlanImage: {
    width: "100%",
    height: 320,
    objectFit: "contain",
    marginBottom: 14,
  },
  specsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  specCard: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: "8 12",
    backgroundColor: LIGHT_BG,
    borderRadius: 6,
    border: `1px solid ${BORDER}`,
  },
  specLabel: {
    fontSize: 8,
    color: MUTED,
    fontFamily: "Inter",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  specValue: {
    fontSize: 10,
    fontWeight: 700,
    color: DARK,
    fontFamily: "Inter",
  },

  /* BACK PAGE / AGENT */
  backPage: {
    padding: 0,
    position: "relative",
    backgroundColor: DARK,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  backContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "80 60",
  },
  backTopAccent: {
    width: 60,
    height: 3,
    backgroundColor: GOLD,
    marginBottom: 30,
  },
  backCompany: {
    fontSize: 28,
    fontWeight: 700,
    color: WHITE,
    marginBottom: 6,
    fontFamily: "Inter",
    textAlign: "center",
  },
  backTagline: {
    fontSize: 10,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: GOLD,
    marginBottom: 40,
    fontFamily: "Inter",
    textAlign: "center",
  },
  backAgentCard: {
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: "28 32",
    border: "1px solid rgba(255,255,255,0.1)",
    alignItems: "center",
    width: "100%",
    maxWidth: 350,
  },
  backAgentAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    objectFit: "cover",
    border: `3px solid ${GOLD}`,
    marginBottom: 14,
  },
  backAgentName: {
    fontSize: 18,
    fontWeight: 700,
    color: WHITE,
    marginBottom: 4,
    fontFamily: "Inter",
    textAlign: "center",
  },
  backAgentCompany: {
    fontSize: 10,
    color: GOLD,
    marginBottom: 16,
    fontFamily: "Inter",
    textAlign: "center",
  },
  backContactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  backContactText: {
    fontSize: 10,
    color: "rgba(255,255,255,0.75)",
    fontFamily: "Inter",
  },
  backContactDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: GOLD,
  },

  /* FOOTER */
  footer: {
    position: "absolute",
    bottom: 18,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    borderTop: `1px solid ${BORDER}`,
  },
  footerText: { fontSize: 7, color: MUTED, fontFamily: "Inter" },
  footerBrand: {
    fontSize: 7,
    color: GOLD,
    fontWeight: 700,
    letterSpacing: 1.5,
    fontFamily: "Inter",
  },

  /* IMAGE WITH OVERLAY TEXT */
  imageSection: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    marginBottom: 16,
  },
  imageSectionImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imageSectionOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "12 16",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  imageSectionText: {
    fontSize: 10,
    color: WHITE,
    fontFamily: "Inter",
    fontWeight: 600,
  },
});

/* ─── Helpers ────────────────────────────────────────────────── */
const safe = (v) => (typeof v === "string" ? v : v ? String(v) : "");

function getFont(locale) {
  return String(locale || "").startsWith("ar") ? "NotoSansArabic" : "Inter";
}

function labels(locale) {
  const ar = String(locale || "").startsWith("ar");
  return ar
    ? {
        salesOffer: "عرض بيع",
        exclusiveOffer: "عرض حصري",
        aboutProject: "عن المشروع",
        projectDetails: "تفاصيل المشروع",
        description: "الوصف",
        finishing: "التشطيبات",
        kitchen: "المطبخ",
        furnishing: "التأثيث",
        location: "الموقع",
        amenities: "المرافق والخدمات",
        gallery: "معرض الصور",
        floorPlan: "مخطط الوحدة",
        typicalUnits: "الوحدات النموذجية",
        yourConsultant: "مستشارك العقاري",
        licensedBroker: "وسيط عقاري معتمد",
        createdOn: "تاريخ الإنشاء",
        page: "صفحة",
      }
    : {
        salesOffer: "Sales Offer",
        exclusiveOffer: "Exclusive Offer",
        aboutProject: "About the Project",
        projectDetails: "Project Details",
        description: "Description",
        finishing: "Finishing & Materials",
        kitchen: "Kitchen & Appliances",
        furnishing: "Furnishing",
        location: "Location",
        amenities: "Amenities & Facilities",
        gallery: "Gallery",
        floorPlan: "Floor Plan",
        typicalUnits: "Typical Units",
        yourConsultant: "Your Property Consultant",
        licensedBroker: "Licensed Real Estate Broker",
        createdOn: "Date of creation",
        page: "Page",
      };
}

/* ─── Sub-components ─────────────────────────────────────────── */

function PageHeaderBar({ projectName, label, locale }) {
  const font = getFont(locale);
  return (
    <View style={S.pageHeader}>
      <View style={S.pageHeaderLeft}>
        <View style={S.pageHeaderDot} />
        <Text style={[S.pageHeaderTitle, { fontFamily: font }]}>
          {safe(projectName)}
        </Text>
      </View>
      {label ? (
        <Text style={[S.pageHeaderRight, { fontFamily: font }]}>{label}</Text>
      ) : null}
    </View>
  );
}

function PageFooterBar({ projectName, copy, locale }) {
  const font = getFont(locale);
  return (
    <View style={S.footer}>
      <Text style={[S.footerText, { fontFamily: font }]}>
        {safe(projectName)} — {copy.salesOffer}
      </Text>
      <Text style={S.footerBrand}>MOHAMAD KODMANI</Text>
    </View>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN DOCUMENT
   ═══════════════════════════════════════════════════════════════ */

export default function SalesOfferDocument({ payload }) {
  const p = payload || {};
  const locale = p.locale || "en";
  const font = getFont(locale);
  const copy = labels(locale);

  const projectName = safe(p.projectName || p.title);
  const coverImage =
    p.coverImage || (Array.isArray(p.gallery) ? p.gallery[0] : "");
  const facts = Array.isArray(p.facts) ? p.facts.filter(Boolean) : [];
  const galleryImages = Array.isArray(p.gallery)
    ? p.gallery.filter(Boolean)
    : [];
  const amenities = Array.isArray(p.amenities) ? p.amenities : [];
  const floorPlans = Array.isArray(p.floorPlans) ? p.floorPlans : [];
  const descriptionText = safe(p.generalFacts || p.description);
  const locationText = safe(p.locationBenefits);
  const finishingText = safe(p.finishing);
  const kitchenText = safe(p.kitchen);
  const furnishingText = safe(p.furnishing);
  const hasDetails = finishingText || kitchenText || furnishingText;
  const agent = p.agent || {};
  const locationFact = facts.find((f) =>
    /location|موقع/i.test(safe(f?.label))
  );

  let pageNum = 0;

  return (
    <Document>
      {/* ════════════════ COVER PAGE ════════════════ */}
      <Page size="A4" style={S.coverPage}>
        {coverImage ? (
          <Image src={coverImage} style={S.coverImage} />
        ) : (
          <View style={{ ...S.coverImage, backgroundColor: DARK }} />
        )}
        <View style={S.coverDarkOverlay} />

        <View style={S.coverContent}>
          <Text style={[S.coverBadge, { fontFamily: font }]}>
            {copy.exclusiveOffer}
          </Text>
          <Text style={[S.coverTitle, { fontFamily: font }]}>
            {projectName || copy.salesOffer}
          </Text>
          {locationFact ? (
            <Text style={[S.coverLocation, { fontFamily: font }]}>
              {safe(locationFact.value)}
            </Text>
          ) : null}
          <View style={S.coverDivider} />

          {/* Agent card on cover */}
          {agent.name ? (
            <View style={S.agentCardCover}>
              {agent.avatar ? (
                <Image src={agent.avatar} style={S.agentAvatar} />
              ) : null}
              <View style={{ flex: 1 }}>
                <Text style={[S.agentNameCover, { fontFamily: font }]}>
                  {safe(agent.name)}
                </Text>
                {agent.company ? (
                  <Text style={[S.agentCompanyCover, { fontFamily: font }]}>
                    {safe(agent.company)}
                  </Text>
                ) : null}
                <Text style={[S.agentContactCover, { fontFamily: font }]}>
                  {[agent.phone, agent.email].filter(Boolean).join("  |  ")}
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </Page>

      {/* ════════════════ ABOUT / FACTS PAGE ════════════════ */}
      <Page size="A4" style={S.page}>
        <PageHeaderBar
          projectName={projectName}
          locale={locale}
          label={`${copy.page} ${++pageNum}`}
        />

        <Text style={[S.sectionLabel, { fontFamily: font }]}>
          {copy.aboutProject}
        </Text>
        <Text style={[S.sectionTitle, { fontFamily: font }]}>
          {projectName}
        </Text>

        {/* Facts table */}
        {facts.length > 0 ? (
          <View style={S.factsTable}>
            {facts.map((fact, idx) => (
              <View
                style={idx % 2 === 0 ? S.factsRow : S.factsRowAlt}
                key={`fact-${idx}`}
              >
                <Text style={[S.factsLabel, { fontFamily: font }]}>
                  {safe(fact.label)}
                </Text>
                <Text style={[S.factsValue, { fontFamily: font }]}>
                  {safe(fact.value)}
                </Text>
              </View>
            ))}
          </View>
        ) : null}

        {/* Short description */}
        {descriptionText ? (
          <View style={{ marginTop: 8 }}>
            <Text style={[S.descText, { fontFamily: font }]}>
              {descriptionText.length > 600
                ? descriptionText.slice(0, 600) + "..."
                : descriptionText}
            </Text>
          </View>
        ) : null}

        {/* Date of creation */}
        {p.createdAt ? (
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Text style={{ fontSize: 8, color: MUTED, fontFamily: font }}>
              {copy.createdOn}: {safe(p.createdAt)}
            </Text>
          </View>
        ) : null}

        <PageFooterBar projectName={projectName} copy={copy} locale={locale} />
      </Page>

      {/* ════════════════ DESCRIPTION PAGE (if long text) ════════════════ */}
      {descriptionText && descriptionText.length > 600 ? (
        <Page size="A4" style={S.pageAlt}>
          <PageHeaderBar
            projectName={projectName}
            locale={locale}
            label={`${copy.page} ${++pageNum}`}
          />

          <Text style={[S.sectionLabel, { fontFamily: font }]}>
            {copy.description}
          </Text>
          <Text style={[S.sectionTitle, { fontFamily: font, fontSize: 18 }]}>
            {copy.projectDetails}
          </Text>

          <Text style={[S.descText, { fontFamily: font }]}>
            {descriptionText}
          </Text>

          {/* Preview image */}
          {galleryImages.length > 1 ? (
            <View style={[S.imageSection, { marginTop: 16 }]}>
              <Image src={galleryImages[1]} style={S.imageSectionImg} />
            </View>
          ) : null}

          <PageFooterBar
            projectName={projectName}
            copy={copy}
            locale={locale}
          />
        </Page>
      ) : null}

      {/* ════════════════ DETAILS PAGE ════════════════ */}
      {hasDetails ? (
        <Page size="A4" style={S.page}>
          <PageHeaderBar
            projectName={projectName}
            locale={locale}
            label={`${copy.page} ${++pageNum}`}
          />

          <Text style={[S.sectionLabel, { fontFamily: font }]}>
            {copy.projectDetails}
          </Text>
          <Text style={[S.sectionTitle, { fontFamily: font, fontSize: 18 }]}>
            {copy.finishing}
          </Text>

          <View style={S.twoCol}>
            <View style={S.col}>
              {finishingText ? (
                <View style={S.detailBlock}>
                  <Text style={[S.detailLabel, { fontFamily: font }]}>
                    {copy.finishing}
                  </Text>
                  <Text style={[S.detailValue, { fontFamily: font }]}>
                    {finishingText}
                  </Text>
                </View>
              ) : null}

              {kitchenText ? (
                <View style={S.detailBlock}>
                  <Text style={[S.detailLabel, { fontFamily: font }]}>
                    {copy.kitchen}
                  </Text>
                  <Text style={[S.detailValue, { fontFamily: font }]}>
                    {kitchenText}
                  </Text>
                </View>
              ) : null}

              {furnishingText ? (
                <View style={S.detailBlock}>
                  <Text style={[S.detailLabel, { fontFamily: font }]}>
                    {copy.furnishing}
                  </Text>
                  <Text style={[S.detailValue, { fontFamily: font }]}>
                    {furnishingText}
                  </Text>
                </View>
              ) : null}
            </View>

            <View style={S.col}>
              {galleryImages.length > 2 ? (
                <Image
                  src={galleryImages[2]}
                  style={{
                    width: "100%",
                    height: 300,
                    borderRadius: 8,
                    objectFit: "cover",
                  }}
                />
              ) : null}
            </View>
          </View>

          <PageFooterBar
            projectName={projectName}
            copy={copy}
            locale={locale}
          />
        </Page>
      ) : null}

      {/* ════════════════ LOCATION PAGE ════════════════ */}
      {locationText ? (
        <Page size="A4" style={S.pageAlt}>
          <PageHeaderBar
            projectName={projectName}
            locale={locale}
            label={`${copy.page} ${++pageNum}`}
          />

          <Text style={[S.sectionLabel, { fontFamily: font }]}>
            {copy.location}
          </Text>
          <Text style={[S.sectionTitle, { fontFamily: font, fontSize: 18 }]}>
            {locationFact ? safe(locationFact.value) : copy.location}
          </Text>

          {/* Location image */}
          {galleryImages.length > 3 ? (
            <View
              style={[S.imageSection, { height: 240, marginBottom: 20 }]}
            >
              <Image src={galleryImages[3]} style={S.imageSectionImg} />
              <View style={S.imageSectionOverlay}>
                <Text style={[S.imageSectionText, { fontFamily: font }]}>
                  {locationFact ? safe(locationFact.value) : ""}
                </Text>
              </View>
            </View>
          ) : null}

          <Text style={[S.descText, { fontFamily: font }]}>
            {locationText}
          </Text>

          <PageFooterBar
            projectName={projectName}
            copy={copy}
            locale={locale}
          />
        </Page>
      ) : null}

      {/* ════════════════ GALLERY PAGE 1 ════════════════ */}
      {galleryImages.length >= 3 ? (
        <Page size="A4" style={S.page}>
          <PageHeaderBar
            projectName={projectName}
            locale={locale}
            label={`${copy.page} ${++pageNum}`}
          />

          <Text style={[S.sectionLabel, { fontFamily: font }]}>
            {copy.gallery}
          </Text>
          <Text style={[S.sectionTitle, { fontFamily: font, fontSize: 18 }]}>
            {projectName}
          </Text>

          {/* 1 large on top */}
          <Image src={galleryImages[0]} style={S.galleryFull} />

          {/* 2 side by side */}
          <View style={S.galleryRow}>
            <Image src={galleryImages[1]} style={S.galleryHalf} />
            <Image src={galleryImages[2]} style={S.galleryHalf} />
          </View>

          <PageFooterBar
            projectName={projectName}
            copy={copy}
            locale={locale}
          />
        </Page>
      ) : null}

      {/* ════════════════ GALLERY PAGE 2 (5+ images) ════════════════ */}
      {galleryImages.length >= 5 ? (
        <Page size="A4" style={S.pageAlt}>
          <PageHeaderBar
            projectName={projectName}
            locale={locale}
            label={`${copy.page} ${++pageNum}`}
          />

          {/* 2 side by side */}
          <View style={S.galleryRow}>
            <Image src={galleryImages[3]} style={S.galleryHalf} />
            <Image src={galleryImages[4]} style={S.galleryHalf} />
          </View>

          {/* 1 large bottom */}
          {galleryImages.length >= 6 ? (
            <Image src={galleryImages[5]} style={S.galleryFull} />
          ) : null}

          {/* 3 across if available */}
          {galleryImages.length >= 9 ? (
            <View style={S.galleryRow}>
              <Image src={galleryImages[6]} style={S.galleryThird} />
              <Image src={galleryImages[7]} style={S.galleryThird} />
              <Image src={galleryImages[8]} style={S.galleryThird} />
            </View>
          ) : galleryImages.length >= 8 ? (
            <View style={S.galleryRow}>
              <Image src={galleryImages[6]} style={S.galleryHalf} />
              <Image src={galleryImages[7]} style={S.galleryHalf} />
            </View>
          ) : galleryImages.length >= 7 ? (
            <Image
              src={galleryImages[6]}
              style={[S.galleryFull, { height: 200 }]}
            />
          ) : null}

          <PageFooterBar
            projectName={projectName}
            copy={copy}
            locale={locale}
          />
        </Page>
      ) : null}

      {/* ════════════════ AMENITIES PAGE ════════════════ */}
      {amenities.length > 0 ? (
        <Page size="A4" style={S.page}>
          <PageHeaderBar
            projectName={projectName}
            locale={locale}
            label={`${copy.page} ${++pageNum}`}
          />

          <Text style={[S.sectionLabel, { fontFamily: font }]}>
            {copy.amenities}
          </Text>
          <Text style={[S.sectionTitle, { fontFamily: font, fontSize: 18 }]}>
            {copy.amenities}
          </Text>

          <View style={S.amenGrid}>
            {amenities.slice(0, 30).map((a, idx) => (
              <View style={S.amenChip} key={`amen-${idx}`}>
                {a.iconUrl ? (
                  <Image src={a.iconUrl} style={S.amenIcon} />
                ) : null}
                <Text style={[S.amenLabel, { fontFamily: font }]}>
                  {safe(a.label)}
                </Text>
              </View>
            ))}
          </View>

          {/* Accent image */}
          {galleryImages.length > 4 ? (
            <View style={[S.imageSection, { marginTop: 20, height: 180 }]}>
              <Image
                src={galleryImages[galleryImages.length > 5 ? 5 : 4]}
                style={S.imageSectionImg}
              />
            </View>
          ) : null}

          <PageFooterBar
            projectName={projectName}
            copy={copy}
            locale={locale}
          />
        </Page>
      ) : null}

      {/* ════════════════ FLOOR PLAN PAGES ════════════════ */}
      {floorPlans.length > 0
        ? floorPlans.slice(0, 6).map((plan, i) => (
            <Page
              size="A4"
              style={i % 2 === 0 ? S.page : S.pageAlt}
              key={`plan-${i}`}
            >
              <PageHeaderBar
                projectName={projectName}
                locale={locale}
                label={`${copy.typicalUnits} ${i + 1}/${Math.min(
                  floorPlans.length,
                  6
                )}`}
              />

              <Text style={[S.sectionLabel, { fontFamily: font }]}>
                {copy.typicalUnits}
              </Text>
              <Text
                style={[S.sectionTitle, { fontFamily: font, fontSize: 18 }]}
              >
                {safe(plan.title || `${copy.floorPlan} ${i + 1}`)}
              </Text>

              {/* Floor plan image */}
              {Array.isArray(plan.images) && plan.images[0] ? (
                <Image src={plan.images[0]} style={S.floorPlanImage} />
              ) : null}

              {/* Specs grid */}
              {plan.specs && Object.keys(plan.specs).length > 0 ? (
                <View style={S.specsGrid}>
                  {Object.entries(plan.specs)
                    .slice(0, 8)
                    .map(([k, v]) => (
                      <View style={S.specCard} key={k}>
                        <View>
                          <Text
                            style={[S.specLabel, { fontFamily: font }]}
                          >
                            {safe(k)}
                          </Text>
                          <Text
                            style={[S.specValue, { fontFamily: font }]}
                          >
                            {safe(v)}
                          </Text>
                        </View>
                      </View>
                    ))}
                </View>
              ) : null}

              <PageFooterBar
                projectName={projectName}
                copy={copy}
                locale={locale}
              />
            </Page>
          ))
        : null}

      {/* ════════════════ BACK PAGE / CONTACT ════════════════ */}
      <Page size="A4" style={S.backPage}>
        <View style={S.backContent}>
          <View style={S.backTopAccent} />
          <Text style={S.backCompany}>MOHAMAD KODMANI</Text>
          <Text style={[S.backTagline, { fontFamily: font }]}>
            {copy.licensedBroker}
          </Text>

          {agent.name ? (
            <View style={S.backAgentCard}>
              {agent.avatar ? (
                <Image src={agent.avatar} style={S.backAgentAvatar} />
              ) : null}
              <Text style={[S.backAgentName, { fontFamily: font }]}>
                {safe(agent.name)}
              </Text>
              {agent.company ? (
                <Text style={[S.backAgentCompany, { fontFamily: font }]}>
                  {safe(agent.company)}
                </Text>
              ) : null}

              {agent.phone ? (
                <View style={S.backContactRow}>
                  <View style={S.backContactDot} />
                  <Text style={[S.backContactText, { fontFamily: font }]}>
                    {safe(agent.phone)}
                  </Text>
                </View>
              ) : null}

              {agent.email ? (
                <View style={S.backContactRow}>
                  <View style={S.backContactDot} />
                  <Text style={[S.backContactText, { fontFamily: font }]}>
                    {safe(agent.email)}
                  </Text>
                </View>
              ) : null}
            </View>
          ) : null}
        </View>
      </Page>
    </Document>
  );
}
