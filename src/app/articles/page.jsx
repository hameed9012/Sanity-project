import ArticlesClient from "./ArticlesClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ArticlesPage() {
  return <ArticlesClient />;
}
