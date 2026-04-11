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

function decodeHtmlEntities(text) {
  return String(text || "")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(parseInt(code, 16))
    )
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function inferProvider(rawProvider = "", rawKey = "", env = process.env) {
  const provider = String(
    rawProvider || env.TRANSLATION_PROVIDER || env.DEFAULT_TRANSLATION_PROVIDER || ""
  )
    .trim()
    .toLowerCase();

  if (provider === "deepl" || provider === "google") return provider;

  const key = String(rawKey || "").trim();
  if (/^AIza/i.test(key)) return "google";
  if (key) return "deepl";

  if (String(env.DEEPL_API_KEY || env.DEEPL_AUTH_KEY || "").trim()) return "deepl";
  if (
    String(
      env.GOOGLE_TRANSLATE_API_KEY || env.GOOGLE_API_KEY || env.GOOGLE_CLOUD_API_KEY || ""
    ).trim()
  ) {
    return "google";
  }

  return "deepl";
}

async function translateWithDeepL({ key, text, targetLang, sourceLang, context }) {
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
    return {
      ok: false,
      status: upstream.status,
      payload,
      error:
        payload?.message ||
        payload?.detail ||
        payload?.error?.message ||
        `DeepL translate failed (${upstream.status})`,
    };
  }

  return { ok: true, status: 200, payload };
}

async function translateWithGoogle({ key, text, targetLang, sourceLang }) {
  const upstream = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(
      key
    )}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        target: String(targetLang || "AR").trim().toLowerCase(),
        source: String(sourceLang || "EN").trim().toLowerCase(),
        format: "text",
      }),
      cache: "no-store",
    }
  );

  const payload = await upstream.json().catch(() => ({}));
  if (!upstream.ok) {
    return {
      ok: false,
      status: upstream.status,
      payload,
      error:
        payload?.error?.message ||
        payload?.message ||
        `Google Translate failed (${upstream.status})`,
    };
  }

  const translations = Array.isArray(payload?.data?.translations)
    ? payload.data.translations.map((item) => ({
        text: decodeHtmlEntities(String(item?.translatedText || "")),
      }))
    : [];

  return {
    ok: true,
    status: 200,
    payload: {
      provider: "google",
      translations,
    },
  };
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
    const provider = inferProvider(body?.provider, body?.key);
    const deeplKey = String(
      body?.key || process.env.DEEPL_API_KEY || process.env.DEEPL_AUTH_KEY || ""
    ).trim();
    const googleKey = String(
      body?.key ||
        process.env.GOOGLE_TRANSLATE_API_KEY ||
        process.env.GOOGLE_API_KEY ||
        process.env.GOOGLE_CLOUD_API_KEY ||
        ""
    ).trim();
    const text = Array.isArray(body?.text)
      ? body.text.map((entry) => String(entry ?? "").trim()).filter(Boolean)
      : [];
    const targetLang = String(body?.target_lang || "AR").trim().toUpperCase();
    const sourceLang = String(body?.source_lang || "EN").trim().toUpperCase();
    const context = String(body?.context || "").trim();

    if (provider === "google" && !googleKey) {
      return jsonResponse(
        { error: "Google Translate API key is required.", provider },
        { status: 400 },
        origin
      );
    }

    if (provider === "deepl" && !deeplKey) {
      return jsonResponse(
        { error: "DeepL API key is required.", provider },
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

    const result =
      provider === "google"
        ? await translateWithGoogle({
            key: googleKey,
            text,
            targetLang,
            sourceLang,
          })
        : await translateWithDeepL({
            key: deeplKey,
            text,
            targetLang,
            sourceLang,
            context,
          });

    if (!result.ok) {
      return jsonResponse(
        {
          error: result.error,
          status: result.status,
          provider,
        },
        { status: result.status },
        origin
      );
    }

    const payload =
      provider === "deepl"
        ? { ...result.payload, provider }
        : result.payload;

    return jsonResponse(payload, { status: 200 }, origin);
  } catch (error) {
    return jsonResponse(
      {
        error:
          error?.message ||
          "Could not reach the translation provider from the local proxy route.",
      },
      { status: 500 },
      origin
    );
  }
}
