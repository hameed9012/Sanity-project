"use client";

import React, { useMemo, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";

import {
  parseProjectsFilters,
  buildProjectsQuery,
  filterProjects,
} from "@/lib/search/projectsSearch";

const formatMoney = (n) => {
  if (!Number.isFinite(n)) return "Price on request";
  return `AED ${new Intl.NumberFormat().format(n)}`;
};

const formatSqft = (min, max) => {
  if (!Number.isFinite(min) && !Number.isFinite(max)) return "—";
  if (Number.isFinite(min) && Number.isFinite(max) && min !== max)
    return `${new Intl.NumberFormat().format(
      min
    )}–${new Intl.NumberFormat().format(max)} sqft`;
  const v = Number.isFinite(min) ? min : max;
  return `${new Intl.NumberFormat().format(v)} sqft`;
};

function buildNextUrl(pathname, nextFilters) {
  const qs = buildProjectsQuery(nextFilters);
  return qs ? `${pathname}?${qs}` : pathname;
}

function ProjectCardList({ p }) {
  return (
    <div className="listing-style1 list custom-list-card mb30">
      <div className="list-thumb">
        {/* Template styles usually use img-fluid */}
        <img
          className="w-100 h-100 cover"
          style={{ objectFit: "cover", borderRadius: 12 }}
          src={p.image || "/images/listings/placeholder.jpg"}
          alt={p.nameEn || p.name || "Project"}
        />
      </div>

      <div className="list-content">
        <div className="d-flex align-items-start justify-content-between">
          <div>
            <h6 className="list-title mb-1">
              <a href={p.href}>{p.nameEn || p.name}</a>
            </h6>
            <p className="list-text mb-2">
              {p.location || "Dubai, UAE"}{" "}
              {p.developer ? `• ${p.developer}` : ""}
            </p>
          </div>

          <div className="text-end">
            <div className="fw600">{formatMoney(p.priceAED)}</div>
            <div className="small text-muted">{p.devStatus || ""}</div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-3 small">
          <span className="me-2">
            <i className="flaticon-bed me-1" />
            {Number.isFinite(p.minBedrooms) || Number.isFinite(p.maxBedrooms)
              ? `${p.minBedrooms ?? p.maxBedrooms}–${
                  p.maxBedrooms ?? p.minBedrooms
                } bd`
              : "—"}
          </span>

          <span className="me-2">
            <i className="flaticon-expand me-1" />
            {formatSqft(p.sizeSqftMin, p.sizeSqftMax)}
          </span>

          <span className="me-2">
            <i className="flaticon-home me-1" />
            {p.unitType || p.type || "—"}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectCardGrid({ p }) {
  return (
    <div className="listing-style1 style2 mb30">
      <div className="list-thumb">
        <img
          className="w-100"
          style={{ height: 240, objectFit: "cover", borderRadius: 12 }}
          src={p.image || "/images/listings/placeholder.jpg"}
          alt={p.nameEn || p.name || "Project"}
        />
      </div>

      <div className="list-content mt20">
        <h6 className="list-title mb-1">
          <a href={p.href}>{p.nameEn || p.name}</a>
        </h6>
        <p className="list-text mb-2">{p.location || "Dubai, UAE"}</p>

        <div className="d-flex align-items-center justify-content-between">
          <div className="fw600">{formatMoney(p.priceAED)}</div>
          <span className="small text-muted">{p.devStatus || ""}</span>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-3 small">
          <span>
            <i className="flaticon-bed me-1" />
            {Number.isFinite(p.minBedrooms) || Number.isFinite(p.maxBedrooms)
              ? `${p.minBedrooms ?? p.maxBedrooms}–${
                  p.maxBedrooms ?? p.minBedrooms
                } bd`
              : "—"}
          </span>
          <span>
            <i className="flaticon-expand me-1" />
            {formatSqft(p.sizeSqftMin, p.sizeSqftMax)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PropertyFilteringList() {
  const router = useRouter();
  const sp = useSearchParams();
  const pathname = usePathname();

  const parsed = useMemo(() => parseProjectsFilters(sp), [sp]);

  // Map the URL filters to the shape expected by your modal/bar components
  const uiFilters = useMemo(() => {
    return {
      search: parsed.q || "",
      minPrice: parsed.minPrice ?? 0,
      maxPrice: parsed.maxPrice ?? 100000000,
      minSize: parsed.minSize ?? 0,
      maxSize: parsed.maxSize ?? 100000,
      devStatus: parsed.devStatus || [],
      unitTypes: parsed.unitTypes || [],
      bedrooms: parsed.bedrooms || [],
    };
  }, [parsed]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const allFiltered = useMemo(() => {
    return filterProjects(parsed);
  }, [parsed]);

  const total = allFiltered.length;

  const startIndex = (parsed.page - 1) * parsed.perPage;
  const endIndex = startIndex + parsed.perPage;
  const pageItems = allFiltered.slice(startIndex, endIndex);

  const pageStartLabel = total === 0 ? 0 : startIndex + 1;
  const pageEndLabel = Math.min(endIndex, total);

  const pushFilters = (next) => {
    // keep page 1 when filters change unless explicitly changing page
    const nextFilters = { ...parsed, ...next };
    const url = buildNextUrl(pathname, nextFilters);
    router.push(url);
  };

  const onChangeUiFilters = (nextUi) => {
    pushFilters({
      q: nextUi.search || "",
      minPrice: nextUi.minPrice ?? null,
      maxPrice: nextUi.maxPrice ?? null,
      minSize: nextUi.minSize ?? null,
      maxSize: nextUi.maxSize ?? null,
      devStatus: nextUi.devStatus || [],
      unitTypes: nextUi.unitTypes || [],
      bedrooms: nextUi.bedrooms || [],
      page: 1,
    });
  };

  const resetAll = () => {
    router.push(
      buildNextUrl(pathname, {
        ...parsed,
        q: "",
        minPrice: null,
        maxPrice: null,
        minSize: null,
        maxSize: null,
        devStatus: [],
        unitTypes: [],
        bedrooms: [],
        sort: "newest",
        view: "list",
        page: 1,
      })
    );
  };

  const changeSort = (sort) => pushFilters({ sort, page: 1 });
  const changeView = (view) => pushFilters({ view });

  const totalPages = Math.max(1, Math.ceil(total / parsed.perPage));

  const goPage = (p) =>
    pushFilters({ page: Math.min(Math.max(1, p), totalPages) });

  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="container">
        {/* ✅ Top filters bar + dropdown filters */}
        <div className="row">
          <div className="col-lg-12">
            <ProjectsFiltersBar
              filters={uiFilters}
              onChange={onChangeUiFilters}
              onOpenFullFilters={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        {/* ✅ Modal (full advanced filters) */}
        <ProjectsFiltersModal
          isOpen={isModalOpen}
          filters={uiFilters}
          onChange={onChangeUiFilters}
          onClose={() => setIsModalOpen(false)}
          onReset={resetAll}
          totalProjects={total}
        />

        {/* ✅ Header row: count + sort + view */}
        <div className="row align-items-center mt30">
          <div className="col-lg-6">
            <div className="text-muted">
              Showing {pageStartLabel}–{pageEndLabel} of {total} results
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex justify-content-lg-end gap-3 align-items-center">
              <div className="d-flex align-items-center gap-2">
                <span className="small text-muted">Sort by</span>
                <select
                  value={parsed.sort}
                  onChange={(e) => changeSort(e.target.value)}
                  className="form-select form-select-sm"
                  style={{ width: 160 }}
                >
                  <option value="newest">Newest</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="sizeAsc">Size: Small to Large</option>
                  <option value="sizeDesc">Size: Large to Small</option>
                </select>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className={`btn btn-sm ${
                    parsed.view === "grid" ? "btn-dark" : "btn-outline-dark"
                  }`}
                  onClick={() => changeView("grid")}
                >
                  Grid
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${
                    parsed.view === "list" ? "btn-dark" : "btn-outline-dark"
                  }`}
                  onClick={() => changeView("list")}
                >
                  List
                </button>
              </div>

              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={resetAll}
              >
                Clear all
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Results */}
        <div className="row mt30">
          {total === 0 ? (
            <div className="col-lg-12">
              <div className="p-4 bg-white rounded-3 shadow-sm">
                <h5 className="mb-1">No results</h5>
                <p className="mb-0 text-muted">
                  Try changing filters or search keywords.
                </p>
              </div>
            </div>
          ) : parsed.view === "grid" ? (
            pageItems.map((p) => (
              <div key={p.slug} className="col-md-6 col-xl-4">
                <ProjectCardGrid p={p} />
              </div>
            ))
          ) : (
            pageItems.map((p) => (
              <div key={p.slug} className="col-lg-12">
                <ProjectCardList p={p} />
              </div>
            ))
          )}
        </div>

        {/* ✅ Pagination */}
        {total > 0 && (
          <div className="row mt20">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() => goPage(parsed.page - 1)}
                  disabled={parsed.page <= 1}
                >
                  Prev
                </button>

                <span className="small text-muted">
                  Page {parsed.page} of {totalPages}
                </span>

                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() => goPage(parsed.page + 1)}
                  disabled={parsed.page >= totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
