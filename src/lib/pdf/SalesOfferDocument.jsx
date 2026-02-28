import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const S = StyleSheet.create({
  page: { padding: 28, fontSize: 11, color: "#111" },

  cover: { position: "relative", padding: 0 },
  coverImg: { width: "100%", height: "100%" },
  coverOverlay: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    padding: 28,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  coverTitle: { fontSize: 34, color: "#fff", fontWeight: 700, marginBottom: 6 },
  coverSub: { fontSize: 12, color: "#fff" },

  sectionTitle: { fontSize: 14, fontWeight: 700, marginBottom: 10 },
  block: { marginBottom: 14 },

  twoCol: { flexDirection: "row", gap: 14 },
  col: { flex: 1 },

  card: {
    border: "1px solid #E6E6E6",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  label: { fontSize: 10, color: "#666", marginBottom: 4 },
  value: { fontSize: 11, color: "#111" },

  img: { width: "100%", height: 240, borderRadius: 10, objectFit: "cover" },

  amenGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  amen: {
    width: "31%",
    border: "1px solid #E6E6E6",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  amenIcon: { width: 18, height: 18 },
  amenText: { fontSize: 10 },
});

const safeText = (v) => (typeof v === "string" ? v : v ? String(v) : "");

export default function SalesOfferDocument({ payload }) {
  const p = payload || {};
  const projectName = safeText(p?.projectName || p?.title || p?.name);
  const coverImage =
    p?.coverImage || (Array.isArray(p?.gallery) ? p.gallery[0] : null);

  return (
    <Document>
      {/* Cover */}
      <Page size="A4" style={[S.page, S.cover]}>
        {coverImage ? <Image src={coverImage} style={S.coverImg} /> : null}

        <View style={S.coverOverlay}>
          <Text style={S.coverTitle}>{projectName || "Sales Offer"}</Text>
          {p?.createdAt ? (
            <Text style={S.coverSub}>
              Date of creation {safeText(p.createdAt)}
            </Text>
          ) : null}
        </View>
      </Page>

      {/* Content */}
      <Page size="A4" style={S.page}>
        <View style={S.block}>
          <Text style={S.sectionTitle}>Project general facts</Text>
          <Text>{safeText(p?.generalFacts || p?.description)}</Text>
        </View>

        <View style={S.twoCol}>
          <View style={S.col}>
            <View style={S.card}>
              <Text style={S.label}>Finishing and materials</Text>
              <Text style={S.value}>{safeText(p?.finishing)}</Text>
            </View>

            <View style={S.card}>
              <Text style={S.label}>Kitchen and appliances</Text>
              <Text style={S.value}>{safeText(p?.kitchen)}</Text>
            </View>

            <View style={S.card}>
              <Text style={S.label}>Furnishing</Text>
              <Text style={S.value}>{safeText(p?.furnishing)}</Text>
            </View>
          </View>

          <View style={S.col}>
            {Array.isArray(p?.gallery) && p.gallery[1] ? (
              <Image src={p.gallery[1]} style={S.img} />
            ) : null}
          </View>
        </View>

        <View style={S.block}>
          <Text style={S.sectionTitle}>Location description and benefits</Text>
          <Text>{safeText(p?.locationBenefits)}</Text>
        </View>

        {Array.isArray(p?.amenities) && p.amenities.length ? (
          <View style={S.block}>
            <Text style={S.sectionTitle}>Amenities</Text>
            <View style={S.amenGrid}>
              {p.amenities.slice(0, 18).map((a, idx) => (
                <View style={S.amen} key={`${a?.label || "amen"}-${idx}`}>
                  {a?.iconUrl ? (
                    <Image src={a.iconUrl} style={S.amenIcon} />
                  ) : null}
                  <Text style={S.amenText}>{safeText(a?.label)}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}
      </Page>

      {/* Optional: floorplans */}
      {Array.isArray(p?.floorPlans) && p.floorPlans.length
        ? p.floorPlans.slice(0, 6).map((plan, i) => (
            <Page size="A4" style={S.page} key={`plan-${i}`}>
              <Text style={S.sectionTitle}>
                {safeText(plan?.title || "Floor Plan")}
              </Text>
              {Array.isArray(plan?.images) && plan.images[0] ? (
                <Image src={plan.images[0]} style={S.img} />
              ) : null}

              {plan?.specs ? (
                <View style={{ marginTop: 12 }}>
                  {Object.entries(plan.specs)
                    .slice(0, 10)
                    .map(([k, v]) => (
                      <View style={S.card} key={k}>
                        <Text style={S.label}>{safeText(k)}</Text>
                        <Text style={S.value}>{safeText(v)}</Text>
                      </View>
                    ))}
                </View>
              ) : null}
            </Page>
          ))
        : null}
    </Document>
  );
}
