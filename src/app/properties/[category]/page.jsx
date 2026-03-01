import { redirect } from "next/navigation";

export default function CategoryPage({ params }) {
  redirect("/properties");
}