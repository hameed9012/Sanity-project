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

function uniqueStrings(list) {
  return [...new Set(toArray(list).map((item) => safeStr(item).trim()).filter(Boolean))];
}

function isImageLike(url) {
  const value = safeStr(url).toLowerCase();
  if (!value) return false;
  if (value.startsWith("data:image/")) return true;
  return (
    /\.(png|jpe?g|webp|avif|gif|bmp|svg)(\?|$)/.test(value) ||
    value.includes("/images/") ||
    value.includes("b-cdn.net") ||
    value.includes("cdn.sanity.io")
  );
}

function proxifyImage(url, origin) {
  const value = safeStr(url).trim();
  if (!value) return "";
  if (value.startsWith("data:image/")) return value;
  return `${origin}/api/pdf-image?url=${encodeURIComponent(value)}`;
}

function buildStaticMapImage(location, origin) {
  const lat = Number(location?.lat);
  const lng = Number(location?.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return "";

  return `${origin}/api/pdf-map?lat=${lat}&lng=${lng}&zoom=13&w=1400&h=900`;
}

function normalizeSpecs(plan) {
  const rawSpecs =
    plan?.specs && typeof plan.specs === "object" ? plan.specs : {};

  const next = { ...rawSpecs };
  if (!next.Bedrooms && plan?.bedrooms != null) next.Bedrooms = plan.bedrooms;
  if (!next.Area && plan?.size) next.Area = plan.size;
  if (!next["Price From"] && plan?.price) next["Price From"] = plan.price;
  return next;
}

function normalizePayload(payload, request) {
  const p = payload || {};
  const origin = new URL(request.url).origin;

  return {
    locale: safeStr(p.locale || "en"),
    projectSlug: safeStr(p.projectSlug || "sales-offer"),
    projectName: safeStr(p.projectName || "Sales Offer"),
    createdAt: safeStr(p.createdAtValue || p.createdAt || ""),
    createdAtLabel: safeStr(p.createdAtLabel || "Date of creation"),
    finishing: safeStr(p.finishing || ""),
    kitchen: safeStr(p.kitchen || ""),
    furnishing: safeStr(p.furnishing || ""),
    locationDescription: safeStr(p.locationDescription || ""),
    paymentPlanText: safeStr(p.paymentPlanText || ""),
    coverImage: proxifyImage(p.coverImage, origin),
    overviewImage: proxifyImage(
      p.overviewImage || p.coverImage || toArray(p.gallery)[0],
      origin
    ),
    gallery: uniqueStrings(p.gallery)
      .filter(Boolean)
      .map((image) => proxifyImage(image, origin)),
    description: safeStr(p.description || p.generalFacts || ""),
    agent: {
      ...p.agent,
      avatar: proxifyImage(p?.agent?.avatar, origin),
    },
    developer: {
      ...p.developer,
      logo: proxifyImage(p?.developer?.logo, origin),
      images: uniqueStrings(toArray(p?.developer?.images).filter(isImageLike)).map(
        (image) => proxifyImage(image, origin)
      ),
    },
    location: {
      ...p.location,
      mapImage: proxifyImage(
        p?.location?.mapImage ||
          buildStaticMapImage(p?.location, origin),
        origin
      ),
    },
    amenities: toArray(p.amenities).map((a) => ({
      label: safeStr(a?.label),
      iconUrl: proxifyImage(a?.iconUrl, origin),
    })),
    masterplanImage:
      isImageLike(p?.masterplanImage || p?.masterplan?.url) &&
      proxifyImage(p?.masterplanImage || p?.masterplan?.url, origin),
    paymentPlans: toArray(p.paymentPlans),
    floorPlans: toArray(p.floorPlans).map((plan) => ({
      ...plan,
      title: safeStr(plan?.title || plan?.name || "Floor Plan"),
      images: toArray(plan?.images).filter(Boolean).map((image) => proxifyImage(image, origin)),
      specs: normalizeSpecs(plan),
    })),
    unitRows: toArray(p.unitRows),
  };
}

export async function POST(req) {
  try {
    const payload = await req.json();
    const normalizedPayload = normalizePayload(payload, req);

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
