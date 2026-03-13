import DevelopersClient from "./DevelopersClient";
import { getAllDevelopers } from "@/lib/sanityQueries";

export default async function DevelopersPage() {
  const sanityDevelopers = await getAllDevelopers().catch(() => []);
  return <DevelopersClient sanityDevelopers={sanityDevelopers} />;
}
