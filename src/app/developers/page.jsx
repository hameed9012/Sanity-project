import { getAllDevelopers } from "@/lib/sanityQueries";
import DevelopersClient from "./DevelopersClient";

export default async function DevelopersPage() {
  const sanityDevelopers = await getAllDevelopers().catch(() => []);
  return <DevelopersClient sanityDevelopers={sanityDevelopers} />;
}