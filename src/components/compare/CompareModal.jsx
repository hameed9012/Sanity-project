// =================================
// CompareModal.jsx (FULL WORKING)
// Sleek comparison + scroll hint
// Removes: Projects + Post-handover (keeps only "From")
// =================================
"use client";

import React, { useEffect, useMemo, useState } from "react";
import modal from "@/styles/compare/CompareModal.module.css";

import { useCompare } from "./CompareProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { getWhereToLiveRegionLocalized } from "@/data/whereToLiveData/whereToLiveRegionDetails";

/* -----------------------
  Helpers (safe rendering)
------------------------ */
function isPlainObject(v) {
  return v && typeof v === "object" && !Array.isArray(v);
}

function safeText(v) {
  if (v == null) return "—";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (isPlainObject(v)) {
    if (typeof v.value === "string") return v.value;
    if (typeof v.label === "string") return v.label;
    if (typeof v.text === "string") return v.text;
    return "—";
  }
  return "—";
}

function safeNum(n) {
  const x = Number(n);
  return Number.isFinite(x) ? x : null;
}

function formatAED(n) {
  const x = safeNum(n);
  return x === null ? "—" : `AED ${x.toLocaleString("en-US")}`;
}

function formatPercent(n) {
  const x = safeNum(n);
  return x === null ? "—" : `${x}%`;
}

function capType(t) {
  if (!t) return "—";
  const s = String(t).trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function moneyAED(n) {
  const x = safeNum(n);
  return x === null ? "—" : `AED ${x.toLocaleString("en-US")}`;
}

/* -----------------------
  Projects stats (dynamic import)
  We keep ONLY min starting price (From)
------------------------ */
function pickProjectsArray(mod) {
  if (!mod) return [];
  if (Array.isArray(mod.default)) return mod.default;

  if (Array.isArray(mod.regionProjectsIndex)) return mod.regionProjectsIndex;
  if (Array.isArray(mod.projectsIndex)) return mod.projectsIndex;
  if (Array.isArray(mod.data)) return mod.data;

  const anyArr = Object.values(mod).find((v) => Array.isArray(v));
  return Array.isArray(anyArr) ? anyArr : [];
}

function computeProjectsStats(projectsIndex, slug) {
  const items = (projectsIndex || []).filter((p) => p?.regionSlug === slug);

  const prices = items
    .map((p) => p?.startingPriceAED ?? p?.priceAED ?? null)
    .filter((v) => typeof v === "number" && !Number.isNaN(v));

  const minPrice = prices.length ? Math.min(...prices) : null;

  return {
    minStartingPrice: minPrice,
  };
}

export default function CompareModal() {
  const compare = useCompare();
  const { locale } = useLanguage();

  const [projectsIndex, setProjectsIndex] = useState([]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const mod = await import("@/data/regionProjectsIndex");
        const arr = pickProjectsArray(mod);
        if (mounted) setProjectsIndex(arr);
      } catch {
        if (mounted) setProjectsIndex([]);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // ✅ SAFE destructuring
  const [aSlug, bSlug] = compare?.selected || [];

  const a = useMemo(
    () => (aSlug ? getWhereToLiveRegionLocalized(aSlug, locale || "en") : null),
    [aSlug, locale]
  );

  const b = useMemo(
    () => (bSlug ? getWhereToLiveRegionLocalized(bSlug, locale || "en") : null),
    [bSlug, locale]
  );

  const aStats = useMemo(
    () => (aSlug ? computeProjectsStats(projectsIndex, aSlug) : null),
    [projectsIndex, aSlug]
  );

  const bStats = useMemo(
    () => (bSlug ? computeProjectsStats(projectsIndex, bSlug) : null),
    [projectsIndex, bSlug]
  );

  useEffect(() => {
    if (!compare?.isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") compare.close();
    };
    document.addEventListener("keydown", onKeyDown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [compare?.isOpen, compare]);

  if (!compare?.isOpen) return null;

  return (
    <div className={modal.overlay} onClick={compare.close}>
      <div className={modal.shell} onClick={(e) => e.stopPropagation()}>
        <div className={modal.header}>
          <div className={modal.headerLeft}>
            <div className={modal.kicker}>Luxury Comparison</div>
            <div className={modal.title}>Compare Areas</div>
            <div className={modal.subTitle}>
              {a?.name || aSlug} <span className={modal.vs}>VS</span>{" "}
              {b?.name || bSlug}
            </div>
          </div>

          <div className={modal.headerActions}>
            <button className={modal.clearBtn} onClick={compare.clear}>
              Clear
            </button>
            <button className={modal.closeBtn} onClick={compare.close}>
              Close
            </button>
          </div>
        </div>

        {!a || !b ? (
          <div className={modal.empty}>
            Pick <b>two areas</b> then hit Compare.
          </div>
        ) : (
          <div className={modal.grid}>
            {/* ✅ Scroll indicator pill (CSS class exists in the new stylesheet) */}
            <div className={modal.gridHint}>Scroll to compare</div>

            <AreaPanel area={a} stats={aStats} />
            <div className={modal.divider} />
            <AreaPanel area={b} stats={bStats} />
          </div>
        )}
      </div>
    </div>
  );
}

function AreaPanel({ area, stats }) {
  const summary = area?.summary || {};
  const market = area?.market || {};

  const rental = Array.isArray(market.rentalTrends) ? market.rentalTrends : [];
  const sales = Array.isArray(market.salesTrends) ? market.salesTrends : [];
  const roiTypes = Array.isArray(market.roiByType) ? market.roiByType : [];

  return (
    <div className={modal.panel}>
      <div className={modal.hero}>
        {area?.heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={modal.heroImg}
            src={area.heroImage}
            alt={safeText(area?.name)}
          />
        ) : (
          <div className={modal.heroFallback} />
        )}

        <div className={modal.heroShade} />

        <div className={modal.heroContent}>
          <div className={modal.areaName}>{safeText(area?.name)}</div>
          {area?.location ? (
            <div className={modal.areaLocation}>{safeText(area.location)}</div>
          ) : null}
        </div>
      </div>

      <div className={modal.body}>
        <div className={modal.block}>
          <div className={modal.blockTitle}>Key Metrics</div>
          <PillRow label="Avg Buy" value={safeText(summary?.avgBuy)} />
          <PillRow label="Avg Rent" value={safeText(summary?.avgRent)} />
          <PillRow label="ROI" value={safeText(summary?.roi)} />
        </div>

        {/* ✅ Development (ONLY "From") */}
        <div className={modal.block}>
          <div className={modal.blockTitle}>Development</div>
          <PillRow
            label="From"
            value={stats ? moneyAED(stats.minStartingPrice) : "—"}
          />
        </div>

        <div className={modal.block}>
          <div className={modal.blockTitle}>Market Mood</div>

          <div className={modal.group}>
            <div className={modal.groupTitle}>Rental Trend</div>
            {rental.length ? (
              rental.map((x, i) => (
                <PillRow
                  key={`rent-${i}`}
                  label={capType(x?.type)}
                  value={formatAED(x?.averageRentAED)}
                />
              ))
            ) : (
              <PillRow label="—" value="—" />
            )}
          </div>

          <div className={modal.group}>
            <div className={modal.groupTitle}>Sales Trend</div>
            {sales.length ? (
              sales.map((x, i) => (
                <PillRow
                  key={`sale-${i}`}
                  label={capType(x?.type)}
                  value={formatAED(x?.averagePriceAED)}
                />
              ))
            ) : (
              <PillRow label="—" value="—" />
            )}
          </div>

          <div className={modal.group}>
            <div className={modal.groupTitle}>ROI by Type</div>
            {roiTypes.length ? (
              roiTypes.map((x, i) => (
                <PillRow
                  key={`roi-${i}`}
                  label={capType(x?.type)}
                  value={formatPercent(x?.roiPercent)}
                />
              ))
            ) : (
              <PillRow label="—" value="—" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PillRow({ label, value }) {
  return (
    <div className={modal.pillRow}>
      <div className={modal.pillLabel}>{label}</div>
      <div className={modal.pillValue}>{value}</div>
    </div>
  );
}
