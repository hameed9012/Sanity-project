"use client";

import React, { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import { useAllProjects } from "@/components/SanityProjectsContext";
import {
  buildProjectsQuery,
  parseProjectsFilters,
} from "@/lib/search/projectsSearch";
import { filterProjects } from "@/lib/projects/filterProjects";

const formatMoney = (amount, isAr) => {
  if (!Number.isFinite(amount) || amount < 10000) {
    return "";
  }

  return new Intl.NumberFormat(isAr ? "ar-AE" : "en-US", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatSqft = (min, max, isAr) => {
  if (!Number.isFinite(min) && !Number.isFinite(max)) {
    return isAr ? "\u2014" : "-";
  }

  const formatter = new Intl.NumberFormat(isAr ? "ar-AE" : "en-US");
  if (Number.isFinite(min) && Number.isFinite(max) && min !== max) {
    return `${formatter.format(min)}-${formatter.format(max)} sqft`;
  }

  const value = Number.isFinite(min) ? min : max;
  return `${formatter.format(value)} sqft`;
};

function buildNextUrl(pathname, nextFilters) {
  const queryString = buildProjectsQuery(nextFilters);
  return queryString ? `${pathname}?${queryString}` : pathname;
}

function ProjectCardList({ project, isAr }) {
  const bedrooms =
    Number.isFinite(project.minBedrooms) || Number.isFinite(project.maxBedrooms)
      ? `${project.minBedrooms ?? project.maxBedrooms}-${project.maxBedrooms ?? project.minBedrooms} ${
          isAr ? "\u063a\u0631\u0641" : "bd"
        }`
      : isAr
        ? "\u2014"
        : "-";

  return (
    <div className="listing-style1 list custom-list-card mb30">
      <div className="list-thumb">
        <img
          className="w-100 h-100 cover"
          style={{ objectFit: "cover", borderRadius: 12 }}
          src={project.image || "/images/listings/placeholder.jpg"}
          alt={project.nameEn || project.name || "Project"}
        />
      </div>

      <div className="list-content">
        <div className="d-flex align-items-start justify-content-between">
          <div>
            <h6 className="list-title mb-1">
              <a href={project.href}>{project.nameEn || project.name}</a>
            </h6>
            <p className="list-text mb-2">
              {project.location || "Dubai, UAE"}
              {project.developer ? ` · ${project.developer}` : ""}
            </p>
          </div>

          <div className="text-end">
            <div className="fw600">{formatMoney(project.priceAED, isAr)}</div>
            <div className="small text-muted">{project.devStatus || ""}</div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-3 small">
          <span className="me-2">
            <i className="flaticon-bed me-1" />
            {bedrooms}
          </span>

          <span className="me-2">
            <i className="flaticon-expand me-1" />
            {formatSqft(project.sizeSqftMin, project.sizeSqftMax, isAr)}
          </span>

          <span className="me-2">
            <i className="flaticon-home me-1" />
            {project.unitType || project.type || (isAr ? "\u2014" : "-")}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectCardGrid({ project, isAr }) {
  const bedrooms =
    Number.isFinite(project.minBedrooms) || Number.isFinite(project.maxBedrooms)
      ? `${project.minBedrooms ?? project.maxBedrooms}-${project.maxBedrooms ?? project.minBedrooms} ${
          isAr ? "\u063a\u0631\u0641" : "bd"
        }`
      : isAr
        ? "\u2014"
        : "-";

  return (
    <div className="listing-style1 style2 mb30">
      <div className="list-thumb">
        <img
          className="w-100"
          style={{ height: 240, objectFit: "cover", borderRadius: 12 }}
          src={project.image || "/images/listings/placeholder.jpg"}
          alt={project.nameEn || project.name || "Project"}
        />
      </div>

      <div className="list-content mt20">
        <h6 className="list-title mb-1">
          <a href={project.href}>{project.nameEn || project.name}</a>
        </h6>
        <p className="list-text mb-2">{project.location || "Dubai, UAE"}</p>

        <div className="d-flex align-items-center justify-content-between">
          <div className="fw600">{formatMoney(project.priceAED, isAr)}</div>
          <span className="small text-muted">{project.devStatus || ""}</span>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-3 small">
          <span>
            <i className="flaticon-bed me-1" />
            {bedrooms}
          </span>
          <span>
            <i className="flaticon-expand me-1" />
            {formatSqft(project.sizeSqftMin, project.sizeSqftMax, isAr)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PropertyFilteringList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { locale } = useLanguage();
  const { allProjects } = useAllProjects();
  const isAr = locale === "ar" || String(locale || "").startsWith("ar");

  const parsed = useMemo(() => parseProjectsFilters(searchParams), [searchParams]);

  const uiFilters = useMemo(
    () => ({
      search: parsed.q || "",
      minPrice: parsed.minPrice ?? 0,
      maxPrice: parsed.maxPrice ?? 100000000,
      minSize: parsed.minSize ?? 0,
      maxSize: parsed.maxSize ?? 100000,
      devStatus: parsed.devStatus || [],
      unitTypes: parsed.unitTypes || [],
      bedrooms: parsed.bedrooms || [],
    }),
    [parsed]
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const allFiltered = useMemo(
    () => filterProjects(allProjects || [], parsed).filtered,
    [allProjects, parsed]
  );

  const total = allFiltered.length;
  const startIndex = (parsed.page - 1) * parsed.perPage;
  const endIndex = startIndex + parsed.perPage;
  const pageItems = allFiltered.slice(startIndex, endIndex);
  const pageStartLabel = total === 0 ? 0 : startIndex + 1;
  const pageEndLabel = Math.min(endIndex, total);
  const totalPages = Math.max(1, Math.ceil(total / parsed.perPage));

  const pushFilters = (next) => {
    const nextFilters = { ...parsed, ...next };
    router.push(buildNextUrl(pathname, nextFilters));
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

  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ProjectsFiltersBar
              filters={uiFilters}
              onChange={onChangeUiFilters}
              onOpenFullFilters={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        <ProjectsFiltersModal
          isOpen={isModalOpen}
          filters={uiFilters}
          onChange={onChangeUiFilters}
          onClose={() => setIsModalOpen(false)}
          onReset={resetAll}
          totalProjects={total}
        />

        <div className="row align-items-center mt30">
          <div className="col-lg-6">
            <div className="text-muted">
              {isAr
                ? `\u0639\u0631\u0636 ${pageStartLabel}-${pageEndLabel} \u0645\u0646 ${total} \u0646\u062a\u064a\u062c\u0629`
                : `Showing ${pageStartLabel}-${pageEndLabel} of ${total} results`}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex justify-content-lg-end gap-3 align-items-center">
              <div className="d-flex align-items-center gap-2">
                <span className="small text-muted">
                  {isAr ? "\u062a\u0631\u062a\u064a\u0628" : "Sort by"}
                </span>
                <select
                  value={parsed.sort}
                  onChange={(event) =>
                    pushFilters({ sort: event.target.value, page: 1 })
                  }
                  className="form-select form-select-sm"
                  style={{ width: 180 }}
                >
                  <option value="newest">
                    {isAr ? "\u0627\u0644\u0623\u062d\u062f\u062b" : "Newest"}
                  </option>
                  <option value="priceAsc">
                    {isAr
                      ? "\u0627\u0644\u0633\u0639\u0631: \u0645\u0646 \u0627\u0644\u0623\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0639\u0644\u0649"
                      : "Price: Low to High"}
                  </option>
                  <option value="priceDesc">
                    {isAr
                      ? "\u0627\u0644\u0633\u0639\u0631: \u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649 \u0625\u0644\u0649 \u0627\u0644\u0623\u0642\u0644"
                      : "Price: High to Low"}
                  </option>
                  <option value="sizeAsc">
                    {isAr
                      ? "\u0627\u0644\u0645\u0633\u0627\u062d\u0629: \u0645\u0646 \u0627\u0644\u0623\u0635\u063a\u0631 \u0625\u0644\u0649 \u0627\u0644\u0623\u0643\u0628\u0631"
                      : "Size: Small to Large"}
                  </option>
                  <option value="sizeDesc">
                    {isAr
                      ? "\u0627\u0644\u0645\u0633\u0627\u062d\u0629: \u0645\u0646 \u0627\u0644\u0623\u0643\u0628\u0631 \u0625\u0644\u0649 \u0627\u0644\u0623\u0635\u063a\u0631"
                      : "Size: Large to Small"}
                  </option>
                </select>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className={`btn btn-sm ${
                    parsed.view === "grid" ? "btn-dark" : "btn-outline-dark"
                  }`}
                  onClick={() => pushFilters({ view: "grid" })}
                >
                  {isAr ? "\u0634\u0628\u0643\u0629" : "Grid"}
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${
                    parsed.view === "list" ? "btn-dark" : "btn-outline-dark"
                  }`}
                  onClick={() => pushFilters({ view: "list" })}
                >
                  {isAr ? "\u0642\u0627\u0626\u0645\u0629" : "List"}
                </button>
              </div>

              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={resetAll}
              >
                {isAr ? "\u0645\u0633\u062d \u0627\u0644\u0643\u0644" : "Clear all"}
              </button>
            </div>
          </div>
        </div>

        <div className="row mt30">
          {total === 0 ? (
            <div className="col-lg-12">
              <div className="p-4 bg-white rounded-3 shadow-sm">
                <h5 className="mb-1">
                  {isAr
                    ? "\u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c"
                    : "No results"}
                </h5>
                <p className="mb-0 text-muted">
                  {isAr
                    ? "\u062c\u0631\u0628 \u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0641\u0644\u0627\u062a\u0631 \u0623\u0648 \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0628\u062d\u062b."
                    : "Try changing filters or search keywords."}
                </p>
              </div>
            </div>
          ) : parsed.view === "grid" ? (
            pageItems.map((project) => (
              <div key={project.slug} className="col-md-6 col-xl-4">
                <ProjectCardGrid project={project} isAr={isAr} />
              </div>
            ))
          ) : (
            pageItems.map((project) => (
              <div key={project.slug} className="col-lg-12">
                <ProjectCardList project={project} isAr={isAr} />
              </div>
            ))
          )}
        </div>

        {total > 0 && (
          <div className="row mt20">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() =>
                    pushFilters({ page: Math.min(Math.max(1, parsed.page - 1), totalPages) })
                  }
                  disabled={parsed.page <= 1}
                >
                  {isAr ? "\u0627\u0644\u0633\u0627\u0628\u0642" : "Prev"}
                </button>

                <span className="small text-muted">
                  {isAr
                    ? `\u0635\u0641\u062d\u0629 ${parsed.page} \u0645\u0646 ${totalPages}`
                    : `Page ${parsed.page} of ${totalPages}`}
                </span>

                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() =>
                    pushFilters({ page: Math.min(Math.max(1, parsed.page + 1), totalPages) })
                  }
                  disabled={parsed.page >= totalPages}
                >
                  {isAr ? "\u0627\u0644\u062a\u0627\u0644\u064a" : "Next"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
