import { getAllDevelopers } from "@/lib/sanityQueries";
import DevelopersClient from "./DevelopersClient";

// Developers excluded from the public listing page
const EXCLUDED_DEVELOPER_SLUGS = ["imtiaz", "beyond", "omniyat"];

export default async function DevelopersPage() {
  const sanityDevelopers = await getAllDevelopers().catch(() => []);
  const filtered = sanityDevelopers.filter(
    (d) => !EXCLUDED_DEVELOPER_SLUGS.includes((d.slug || "").toLowerCase())
  );
  return <DevelopersClient sanityDevelopers={filtered} />;
}