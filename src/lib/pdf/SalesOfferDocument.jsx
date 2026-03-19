import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

/* ─── Brand colours ────────────────────────────────────────────── */
const GOLD = "#C9A26A";
const GOLD_LIGHT = "#F4E5C0";
const DARK = "#111827";
const MUTED = "#6B7280";
const BORDER = "#E5E7EB";
const BG_LIGHT = "#FAFAF8";

const S = StyleSheet.create({
  /* ─── COVER ────────────────────────────────────────────────── */
  coverPage: { position: "relative", padding: 0 },
  coverImg: { width: "100%", height: "100%", objectFit: "cover" },
  coverGradient: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "55%",
    backgroundColor: "rgba(0,0,0,0.01)",
  },
  coverOverlay: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    padding: "36 40 44 40",
    backgroundColor: "rgba(0,0,0,0.62)",
  },
  coverBadge: {
    fontSize: 9,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: GOLD,
    marginBottom: 10,
  },
  coverTitle: {
    fontSize: 32,
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  coverSubRow: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    marginTop: 6,
  },
  coverTag: {
    fontSize: 10,
    color: "rgba(255,255,255,0.85)",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.18)",
  },
  coverDate: { fontSize: 10, color: "rgba(255,255,255,0.7)" },

  /* ─── CONTENT PAGES ────────────────────────────────────────── */
  page: { padding: "36 40", fontSize: 10, color: DARK, backgroundColor: "#FFFFFF" },
  pageAlt: { padding: "36 40", fontSize: 10, color: DARK, backgroundColor: BG_LIGHT },

  /* ─── HEADER BAR (gold accent on top of content pages) ────── */
  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingBottom: 14,
    borderBottom: `2px solid ${GOLD}`,
  },
  headerTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: DARK,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  headerPage: { fontSize: 9, color: MUTED },

  /* ─── SECTION TITLES ───────────────────────────────────────── */
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: DARK,
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: `1.5px solid ${GOLD_LIGHT}`,
    letterSpacing: 0.3,
  },
  sectionTitleInline: {
    fontSize: 13,
    fontWeight: 700,
    color: DARK,
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  block: { marginBottom: 20 },

  /* ─── FACTS GRID ───────────────────────────────────────────── */
  factsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 16 },
  factCard: {
    width: "48%",
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    padding: "10 12",
    backgroundColor: "#FFFFFF",
  },
  factLabel: { fontSize: 8.5, color: MUTED, marginBottom: 3, textTransform: "uppercase", letterSpacing: 0.8 },
  factValue: { fontSize: 11, fontWeight: 700, color: DARK },

  /* ─── DESCRIPTION ──────────────────────────────────────────── */
  descText: { fontSize: 10, lineHeight: 1.65, color: "#374151" },

  /* ─── TWO-COLUMN LAYOUT ────────────────────────────────────── */
  twoCol: { flexDirection: "row", gap: 16, marginBottom: 16 },
  col: { flex: 1 },

  /* ─── DETAIL CARDS ─────────────────────────────────────────── */
  detailCard: {
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    padding: "10 12",
    marginBottom: 8,
    backgroundColor: "#FFFFFF",
  },
  detailLabel: { fontSize: 8.5, color: GOLD, fontWeight: 700, marginBottom: 3, textTransform: "uppercase", letterSpacing: 0.8 },
  detailValue: { fontSize: 10, color: DARK, lineHeight: 1.5 },

  /* ─── IMAGES ───────────────────────────────────────────────── */
  heroImg: { width: "100%", height: 220, borderRadius: 8, objectFit: "cover", marginBottom: 16 },
  galleryGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 },
  galleryThumb: { width: "48%", height: 140, borderRadius: 6, objectFit: "cover" },
  floorPlanImg: { width: "100%", height: 320, borderRadius: 8, objectFit: "contain", marginBottom: 12 },

  /* ─── AMENITIES ────────────────────────────────────────────── */
  amenGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  amenChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    border: `1px solid ${BORDER}`,
    backgroundColor: "#FFFFFF",
    marginBottom: 4,
  },
  amenIcon: { width: 14, height: 14 },
  amenText: { fontSize: 9, color: DARK },

  /* ─── AGENT CARD ───────────────────────────────────────────── */
  agentSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: "16 18",
    borderRadius: 10,
    backgroundColor: DARK,
    marginTop: 20,
  },
  agentAvatar: { width: 52, height: 52, borderRadius: 26, objectFit: "cover", border: `2px solid ${GOLD}` },
  agentInfo: { flex: 1 },
  agentName: { fontSize: 12, fontWeight: 700, color: "#FFFFFF", marginBottom: 2 },
  agentCompany: { fontSize: 9, color: GOLD, marginBottom: 4 },
  agentContact: { fontSize: 9, color: "rgba(255,255,255,0.75)" },

  /* ─── FLOOR PLAN SPECS ─────────────────────────────────────── */
  specsRow: { flexDirection: "row", borderBottom: `1px solid ${BORDER}`, paddingVertical: 6 },
  specsLabel: { width: "45%", fontSize: 9, color: MUTED },
  specsValue: { flex: 1, fontSize: 9, fontWeight: 700, color: DARK },

  /* ─── FOOTER ───────────────────────────────────────────────── */
  footer: {
    position: "absolute",
    bottom: 18,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: `1px solid ${BORDER}`,
    paddingTop: 8,
  },
  footerText: { fontSize: 7.5, color: MUTED },
  footerGold: { fontSize: 7.5, color: GOLD, fontWeight: 700, letterSpacing: 1 },
});

const safe = (v) => (typeof v === "string" ? v : v ? String(v) : "");

function labels(locale) {
  const ar = String(locale || "").startsWith("ar");
  return ar
    ? {
        salesOffer: "عرض بيع",
        createdAt: "تاريخ الإنشاء",
        projectFacts: "معلومات المشروع",
        description: "نبذة عن المشروع",
        finishing: "التشطيبات والمواد",
        kitchen: "المطبخ والأجهزة",
        furnishing: "التأثيث",
        location: "الموقع والمزايا",
        amenities: "المرافق والخدمات",
        floorPlan: "مخطط الوحدة",
        gallery: "معرض الصور",
        agent: "مستشارك العقاري",
        typicalUnits: "الوحدات النموذجية",
        page: "صفحة",
        companyTagline: "وسيط عقاري معتمد",
      }
    : {
        salesOffer: "Sales Offer",
        createdAt: "Date of creation",
        projectFacts: "Project Facts",
        description: "About the Project",
        finishing: "Finishing & Materials",
        kitchen: "Kitchen & Appliances",
        furnishing: "Furnishing",
        location: "Location & Benefits",
        amenities: "Amenities & Facilities",
        floorPlan: "Floor Plan",
        gallery: "Gallery",
        agent: "Your Property Consultant",
        typicalUnits: "Typical Units",
        page: "Page",
        companyTagline: "Licensed Real Estate Broker",
      };
}

function PageFooter({ projectName, copy }) {
  return (
    <View style={S.footer}>
      <Text style={S.footerText}>
        {safe(projectName)} — {copy.salesOffer}
      </Text>
      <Text style={S.footerGold}>MOHAMAD KODMANI</Text>
    </View>
  );
}

function PageHeader({ projectName, copy, pageLabel }) {
  return (
    <View style={S.headerBar}>
      <Text style={S.headerTitle}>{safe(projectName)}</Text>
      {pageLabel ? <Text style={S.headerPage}>{pageLabel}</Text> : null}
    </View>
  );
}

export default function SalesOfferDocument({ payload }) {
  const p = payload || {};
  const projectName = safe(p?.projectName || p?.title || p?.name);
  const coverImage =
    p?.coverImage || (Array.isArray(p?.gallery) ? p.gallery[0] : null);
  const copy = labels(p?.locale);
  const facts = Array.isArray(p?.facts) ? p.facts.filter(Boolean) : [];
  const showMapSection = p?.preferences?.displaySettings?.map !== false;
  const galleryImages = Array.isArray(p?.gallery) ? p.gallery.filter(Boolean) : [];
  const hasDetails = safe(p?.finishing) || safe(p?.kitchen) || safe(p?.furnishing);
  const descriptionText = safe(p?.generalFacts || p?.description);

  return (
    <Document>
      {/* ──────────────── COVER PAGE ──────────────── */}
      <Page size="A4" style={S.coverPage}>
        {coverImage ? <Image src={coverImage} style={S.coverImg} /> : null}
        <View style={S.coverGradient} />

        <View style={S.coverOverlay}>
          <Text style={S.coverBadge}>{copy.salesOffer}</Text>
          <Text style={S.coverTitle}>{projectName || "Sales Offer"}</Text>

          <View style={S.coverSubRow}>
            {facts.slice(0, 3).map((fact, idx) => (
              <Text style={S.coverTag} key={`cover-fact-${idx}`}>
                {safe(fact?.value)}
              </Text>
            ))}
          </View>

          {p?.createdAt ? (
            <Text style={[S.coverDate, { marginTop: 10 }]}>
              {copy.createdAt}: {safe(p.createdAt)}
            </Text>
          ) : null}
        </View>
      </Page>

      {/* ──────────────── FACTS + DESCRIPTION ──────────────── */}
      <Page size="A4" style={S.page}>
        <PageHeader projectName={projectName} copy={copy} />

        {facts.length ? (
          <View style={S.block}>
            <Text style={S.sectionTitle}>{copy.projectFacts}</Text>
            <View style={S.factsGrid}>
              {facts.slice(0, 8).map((fact, idx) => (
                <View style={S.factCard} key={`fact-${idx}`}>
                  <Text style={S.factLabel}>{safe(fact?.label)}</Text>
                  <Text style={S.factValue}>{safe(fact?.value)}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {descriptionText ? (
          <View style={S.block}>
            <Text style={S.sectionTitle}>{copy.description}</Text>
            <Text style={S.descText}>{descriptionText}</Text>
          </View>
        ) : null}

        {/* Gallery preview — first 2 images */}
        {galleryImages.length > 1 ? (
          <View style={S.galleryGrid}>
            {galleryImages.slice(1, 3).map((url, idx) => (
              <Image src={url} style={S.galleryThumb} key={`gallery-${idx}`} />
            ))}
          </View>
        ) : null}

        <PageFooter projectName={projectName} copy={copy} />
      </Page>

      {/* ──────────────── DETAILS + AMENITIES ──────────────── */}
      {(hasDetails || showMapSection || (Array.isArray(p?.amenities) && p.amenities.length)) ? (
        <Page size="A4" style={S.pageAlt}>
          <PageHeader projectName={projectName} copy={copy} />

          {hasDetails ? (
            <View style={S.twoCol}>
              <View style={S.col}>
                {safe(p?.finishing) ? (
                  <View style={S.detailCard}>
                    <Text style={S.detailLabel}>{copy.finishing}</Text>
                    <Text style={S.detailValue}>{safe(p.finishing)}</Text>
                  </View>
                ) : null}

                {safe(p?.kitchen) ? (
                  <View style={S.detailCard}>
                    <Text style={S.detailLabel}>{copy.kitchen}</Text>
                    <Text style={S.detailValue}>{safe(p.kitchen)}</Text>
                  </View>
                ) : null}

                {safe(p?.furnishing) ? (
                  <View style={S.detailCard}>
                    <Text style={S.detailLabel}>{copy.furnishing}</Text>
                    <Text style={S.detailValue}>{safe(p.furnishing)}</Text>
                  </View>
                ) : null}
              </View>

              <View style={S.col}>
                {galleryImages.length > 3 ? (
                  <Image src={galleryImages[3]} style={S.heroImg} />
                ) : galleryImages.length > 1 ? (
                  <Image src={galleryImages[1]} style={S.heroImg} />
                ) : null}
              </View>
            </View>
          ) : null}

          {showMapSection && safe(p?.locationBenefits) ? (
            <View style={S.block}>
              <Text style={S.sectionTitle}>{copy.location}</Text>
              <Text style={S.descText}>{safe(p.locationBenefits)}</Text>
            </View>
          ) : null}

          {Array.isArray(p?.amenities) && p.amenities.length ? (
            <View style={S.block}>
              <Text style={S.sectionTitle}>{copy.amenities}</Text>
              <View style={S.amenGrid}>
                {p.amenities.slice(0, 24).map((a, idx) => (
                  <View style={S.amenChip} key={`amen-${idx}`}>
                    {a?.iconUrl ? (
                      <Image src={a.iconUrl} style={S.amenIcon} />
                    ) : null}
                    <Text style={S.amenText}>{safe(a?.label)}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {/* Agent card */}
          {(p?.agent?.name || p?.agent?.email || p?.agent?.phone) ? (
            <View style={S.agentSection}>
              {p?.agent?.avatar ? (
                <Image src={p.agent.avatar} style={S.agentAvatar} />
              ) : null}
              <View style={S.agentInfo}>
                {p?.agent?.name ? <Text style={S.agentName}>{safe(p.agent.name)}</Text> : null}
                {p?.agent?.company ? <Text style={S.agentCompany}>{safe(p.agent.company)}</Text> : null}
                <Text style={S.agentContact}>
                  {[p?.agent?.phone, p?.agent?.email].filter(Boolean).join("  •  ")}
                </Text>
              </View>
            </View>
          ) : null}

          <PageFooter projectName={projectName} copy={copy} />
        </Page>
      ) : null}

      {/* ──────────────── GALLERY PAGE (if 4+ images) ──────── */}
      {galleryImages.length >= 4 ? (
        <Page size="A4" style={S.page}>
          <PageHeader projectName={projectName} copy={copy} />
          <Text style={S.sectionTitle}>{copy.gallery}</Text>

          {/* Large hero image */}
          <Image src={galleryImages[0]} style={S.heroImg} />

          {/* Grid of remaining images */}
          <View style={S.galleryGrid}>
            {galleryImages.slice(3, 7).map((url, idx) => (
              <Image src={url} style={S.galleryThumb} key={`gal-${idx}`} />
            ))}
          </View>

          <PageFooter projectName={projectName} copy={copy} />
        </Page>
      ) : null}

      {/* ──────────────── FLOOR PLAN PAGES ────────────────── */}
      {Array.isArray(p?.floorPlans) && p.floorPlans.length
        ? p.floorPlans.slice(0, 6).map((plan, i) => (
            <Page size="A4" style={i % 2 === 0 ? S.page : S.pageAlt} key={`plan-${i}`}>
              <PageHeader
                projectName={projectName}
                copy={copy}
                pageLabel={`${copy.typicalUnits} ${i + 1}/${Math.min(p.floorPlans.length, 6)}`}
              />

              <Text style={S.sectionTitleInline}>
                {safe(plan?.title || `${copy.floorPlan} ${i + 1}`)}
              </Text>

              {Array.isArray(plan?.images) && plan.images[0] ? (
                <Image src={plan.images[0]} style={S.floorPlanImg} />
              ) : null}

              {plan?.specs && Object.keys(plan.specs).length ? (
                <View style={{ marginTop: 8 }}>
                  {Object.entries(plan.specs)
                    .slice(0, 10)
                    .map(([k, v]) => (
                      <View style={S.specsRow} key={k}>
                        <Text style={S.specsLabel}>{safe(k)}</Text>
                        <Text style={S.specsValue}>{safe(v)}</Text>
                      </View>
                    ))}
                </View>
              ) : null}

              <PageFooter projectName={projectName} copy={copy} />
            </Page>
          ))
        : null}
    </Document>
  );
}
