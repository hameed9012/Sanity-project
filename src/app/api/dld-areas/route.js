// src/app/api/dld-areas/route.js
//
// Serves per-area stats from src/data/dld-area-stats.json.
// No external API or credentials needed — just a static file.
//
// To update data:
//   1. Download new export from dubaipulse.gov.ae (dld_transactions-open)
//   2. node scripts/process-dld-transactions.mjs <file>
//   3. Commit src/data/dld-area-stats.json

import { NextResponse } from "next/server";
import { readFileSync }  from "fs";
import { resolve }       from "path";

export const dynamic    = "force-dynamic";
export const revalidate = 0;

// In-memory cache — avoids re-reading the file on every request
let _cache     = null;
let _cacheTime = 0;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

export async function GET() {
  try {
    if (_cache && Date.now() - _cacheTime < CACHE_TTL) {
      return NextResponse.json({ ok: true, source: "cache", data: _cache });
    }

    const filePath = resolve(process.cwd(), "src/data/dld-area-stats.json");
    const data     = JSON.parse(readFileSync(filePath, "utf-8"));

    const firstArea = Object.values(data)[0];
    const dataAsOf  = firstArea?.dataAsOf ?? null;

    _cache     = data;
    _cacheTime = Date.now();

    return NextResponse.json({
      ok: true,
      source:     "file",
      dataAsOf,
      areasCount: Object.keys(data).length,
      data,
    });
  } catch (err) {
    if (err.code === "ENOENT") {
      // File hasn't been generated yet
      return NextResponse.json({
        ok:      true,
        source:  "empty",
        warning: "No dld-area-stats.json found. Run: node scripts/process-dld-transactions.mjs <file>",
        data:    {},
      });
    }
    console.error("[dld-areas]", err.message);
    return NextResponse.json({ ok: false, error: err.message, data: {} }, { status: 500 });
  }
}