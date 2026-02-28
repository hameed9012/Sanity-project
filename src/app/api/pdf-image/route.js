import sharp from "sharp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// 1x1 transparent PNG (base64)
const FALLBACK_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2Kxv8AAAAASUVORK5CYII=",
  "base64"
);

function pngResponse(buf) {
  return new Response(buf, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store",
    },
  });
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    if (!url) return pngResponse(FALLBACK_PNG);

    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "image/*,*/*;q=0.8",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return pngResponse(FALLBACK_PNG);
    }

    const arrayBuffer = await res.arrayBuffer();
    const input = Buffer.from(arrayBuffer);

    // Convert ANYTHING decodable into PNG
    // If sharp can't decode (some SVGs), we fallback
    try {
      const png = await sharp(input, { unlimited: true })
        .png({ quality: 90 })
        .toBuffer();

      // If something weird returned empty
      if (!png || png.length < 50) return pngResponse(FALLBACK_PNG);

      return pngResponse(png);
    } catch {
      return pngResponse(FALLBACK_PNG);
    }
  } catch (e) {
    console.error("pdf-image error:", e);
    return pngResponse(FALLBACK_PNG);
  }
}
