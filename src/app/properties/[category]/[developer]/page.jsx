import { redirect } from "next/navigation";

export default function DeveloperPage({ params }) {
  redirect("/properties");
}