import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const LOCAL_ORIGIN_PATTERN =
  /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i;

function isAllowedOrigin(origin = "") {
  const value = String(origin || "").trim();
  if (!value) return false;
  if (value === "null") return true;
  return LOCAL_ORIGIN_PATTERN.test(value);
}

function corsHeaders(origin = "") {
  const normalizedOrigin = String(origin || "").trim();
  const allowOrigin = isAllowedOrigin(normalizedOrigin)
    ? normalizedOrigin
    : "http://localhost:5500";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(body, init = {}, origin = "") {
  const headers = {
    "Content-Type": "application/json",
    ...corsHeaders(origin),
    ...(init.headers || {}),
  };

  return NextResponse.json(body, {
    ...init,
    headers,
  });
}

function pickDeepLBaseUrl(key) {
  return String(key || "").trim().endsWith(":fx")
    ? "https://api-free.deepl.com/v2"
    : "https://api.deepl.com/v2";
}

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin") || ""),
  });
}

export async function POST(request) {
  const origin = request.headers.get("origin") || "";

  try {
    const body = await request.json();
    const key = String(
      body?.key || process.env.DEEPL_API_KEY || process.env.DEEPL_AUTH_KEY || ""
    ).trim();
    const text = Array.isArray(body?.text)
      ? body.text.map((entry) => String(entry ?? "").trim()).filter(Boolean)
      : [];
    const targetLang = String(body?.target_lang || "AR").trim().toUpperCase();
    const sourceLang = String(body?.source_lang || "EN").trim().toUpperCase();
    const context = String(body?.context || "").trim();

    if (!key) {
      return jsonResponse(
        { error: "DeepL API key is required." },
        { status: 400 },
        origin
      );
    }

    if (!text.length) {
      return jsonResponse(
        { error: "At least one text value is required." },
        { status: 400 },
        origin
      );
    }

    const upstream = await fetch(`${pickDeepLBaseUrl(key)}/translate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `DeepL-Auth-Key ${key}`,
      },
      body: JSON.stringify({
        text,
        target_lang: targetLang,
        source_lang: sourceLang,
        preserve_formatting: true,
        ...(context ? { context: context.slice(0, 4000) } : {}),
      }),
      cache: "no-store",
    });

    const payload = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      return jsonResponse(
        {
          error:
            payload?.message ||
            payload?.detail ||
            payload?.error?.message ||
            `DeepL translate failed (${upstream.status})`,
          status: upstream.status,
        },
        { status: upstream.status },
        origin
      );
    }

    return jsonResponse(payload, { status: 200 }, origin);
  } catch (error) {
    return jsonResponse(
      {
        error:
          error?.message ||
          "Could not reach DeepL from the local proxy route.",
      },
      { status: 500 },
      origin
    );
  }
}
