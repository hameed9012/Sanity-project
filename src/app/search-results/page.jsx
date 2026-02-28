import ProjectsSearchResultsClient from "@/components/search/ProjectsSearchResultClient";

// In your page.js file
export default function SearchResultsPage({ searchParams }) {
  return (
    <>
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
        </div>
      </section>

      {/* ✅ Pass searchParams as prop */}
      <ProjectsSearchResultsClient searchParams={searchParams} />
    </>
  );
}
