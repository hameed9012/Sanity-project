import sharp from "sharp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TILE_SIZE = 256;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lngToTileX(lng, zoom) {
  return ((lng + 180) / 360) * 2 ** zoom;
}

function latToTileY(lat, zoom) {
  const rad = (lat * Math.PI) / 180;
  return (
    ((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) *
    2 ** zoom
  );
}

async function fetchTile(z, x, y) {
  const max = 2 ** z;
  const wrappedX = ((x % max) + max) % max;
  const clampedY = clamp(y, 0, max - 1);
  const url = `https://tile.openstreetmap.org/${z}/${wrappedX}/${clampedY}.png`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Codex PDF Map Renderer",
      Accept: "image/png,image/*;q=0.8,*/*;q=0.5",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Tile fetch failed: ${res.status}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const lat = Number(searchParams.get("lat"));
    const lng = Number(searchParams.get("lng"));
    const zoom = clamp(Number(searchParams.get("zoom") || 13), 1, 18);
    const width = clamp(Number(searchParams.get("w") || 1200), 300, 1600);
    const height = clamp(Number(searchParams.get("h") || 800), 300, 1600);

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      return new Response("Invalid coordinates", { status: 400 });
    }

    const centerX = lngToTileX(lng, zoom);
    const centerY = latToTileY(lat, zoom);
    const pixelX = centerX * TILE_SIZE;
    const pixelY = centerY * TILE_SIZE;

    const left = pixelX - width / 2;
    const top = pixelY - height / 2;
    const startTileX = Math.floor(left / TILE_SIZE);
    const endTileX = Math.floor((left + width) / TILE_SIZE);
    const startTileY = Math.floor(top / TILE_SIZE);
    const endTileY = Math.floor((top + height) / TILE_SIZE);

    const composites = [];

    for (let tileY = startTileY; tileY <= endTileY; tileY += 1) {
      for (let tileX = startTileX; tileX <= endTileX; tileX += 1) {
        const tile = await fetchTile(zoom, tileX, tileY);
        composites.push({
          input: tile,
          left: Math.round(tileX * TILE_SIZE - left),
          top: Math.round(tileY * TILE_SIZE - top),
        });
      }
    }

    const markerSize = 22;
    const marker = await sharp({
      create: {
        width: markerSize,
        height: markerSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([
        {
          input: await sharp({
            create: {
              width: markerSize,
              height: markerSize,
              channels: 4,
              background: { r: 209, g: 54, b: 57, alpha: 1 },
            },
          })
            .png()
            .toBuffer(),
          blend: "dest-in",
        },
      ])
      .png()
      .toBuffer();

    const centerMarkerX = Math.round(width / 2 - markerSize / 2);
    const centerMarkerY = Math.round(height / 2 - markerSize / 2);

    const png = await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 243, g: 243, b: 243, alpha: 1 },
      },
    })
      .composite([
        ...composites,
        {
          input: await sharp({
            create: {
              width: markerSize,
              height: markerSize,
              channels: 4,
              background: { r: 209, g: 54, b: 57, alpha: 1 },
            },
          })
            .png()
            .toBuffer(),
          left: centerMarkerX,
          top: centerMarkerY,
        },
      ])
      .png()
      .toBuffer();

    return new Response(png, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("pdf-map error:", error);
    return new Response("Map generation failed", { status: 500 });
  }
}
