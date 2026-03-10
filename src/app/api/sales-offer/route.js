import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import SalesOfferDocument from "@/lib/pdf/SalesOfferDocument";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeStr(v) {
  return typeof v === "string" ? v : v == null ? "" : String(v);
}

function toArray(v) {
  return Array.isArray(v) ? v : [];
}

function normalizePayload(payload) {
  const p = payload || {};
  const sections = p.sections || {};
  const preferences = p.preferences || {};

  return {
    projectName: safeStr(p.projectName || "Sales Offer"),
    title: safeStr(p.projectName || "Sales Offer"),

    // keep image URLs direct first, no self-proxy for now
    coverImage: p.coverImage || "",
    gallery: toArray(p.gallery).filter(Boolean),

    createdAt: safeStr(p.createdAtValue || p.createdAt || ""),

    generalFacts: safeStr(
      sections.generalFacts || p.generalFacts || p.description || ""
    ),

    finishing: safeStr(sections.finishing || p.finishing || ""),
    kitchen: safeStr(sections.kitchen || p.kitchen || ""),
    furnishing: safeStr(sections.furnishing || p.furnishing || ""),

    locationBenefits: safeStr(
      sections.location || p.locationBenefits || p.location || ""
    ),

    amenities: toArray(p.amenities).map((a) => ({
      label: safeStr(a?.label),
      iconUrl: a?.iconUrl || "",
    })),

    floorPlans: toArray(p.floorPlans).map((plan) => ({
      ...plan,
      title: safeStr(plan?.title || plan?.name || "Floor Plan"),
      images: toArray(plan?.images).filter(Boolean),
      specs:
        plan?.specs && typeof plan.specs === "object" ? plan.specs : {},
    })),

    agent: p.agent || {},
    facts: toArray(p.facts),
    preferences,
    locale: p.locale || "en",
  };
}

export async function POST(req) {
  try {
    const payload = await req.json();
    const normalizedPayload = normalizePayload(payload);

    const pdfBuffer = await renderToBuffer(
      <SalesOfferDocument payload={normalizedPayload} />
    );

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${safeStr(
          payload?.projectSlug || "sales-offer"
        )}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("sales-offer error:", err);

    return new Response(
      JSON.stringify({
        ok: false,
        message: err?.message || "PDF failed",
        stack: err?.stack || null,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}