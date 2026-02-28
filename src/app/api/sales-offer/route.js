import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import SalesOfferDocument from "@/lib/pdf/SalesOfferDocument";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getBaseUrl(req) {
  const host = req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") || "http";
  return `${proto}://${host}`;
}

function proxify(baseUrl, url) {
  if (!url) return null;

  // Already proxied
  if (url.includes("/api/pdf-image?url=")) return url;

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return `${baseUrl}/api/pdf-image?url=${encodeURIComponent(url)}`;
  }

  // local file in /public
  if (url.startsWith("/")) return `${baseUrl}${url}`;

  return null;
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj || {}));
}

function proxifyPayload(baseUrl, payload) {
  const p = clone(payload);

  p.coverImage = proxify(baseUrl, p.coverImage);

  if (Array.isArray(p.gallery)) {
    p.gallery = p.gallery.map((u) => proxify(baseUrl, u)).filter(Boolean);
  }

  if (Array.isArray(p.floorPlans)) {
    p.floorPlans = p.floorPlans.map((plan) => {
      const imgs = Array.isArray(plan?.images) ? plan.images : [];
      return {
        ...plan,
        images: imgs.map((u) => proxify(baseUrl, u)).filter(Boolean),
      };
    });
  }

  if (Array.isArray(p.amenities)) {
    p.amenities = p.amenities.map((a) => ({
      ...a,
      iconUrl: proxify(baseUrl, a?.iconUrl),
    }));
  }

  if (p?.agent?.avatar) p.agent.avatar = proxify(baseUrl, p.agent.avatar);

  return p;
}

export async function POST(req) {
  try {
    const payload = await req.json();
    const baseUrl = getBaseUrl(req);
    const safePayload = proxifyPayload(baseUrl, payload);

    const pdfBuffer = await renderToBuffer(
      <SalesOfferDocument payload={safePayload} />
    );

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="sales-offer.pdf"`,
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
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
