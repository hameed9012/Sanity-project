import { sanityClient } from "@/lib/sanityClient";

const SITE_CONTACT_QUERY = `
  *[_type == "siteSettings"] | order(_updatedAt desc)[0]{
    contact{
      whatsapp,
      phone,
      email
    }
  }
`;

export async function getSiteContactSettings() {
  try {
    const siteSettings = await sanityClient.fetch(SITE_CONTACT_QUERY);
    return siteSettings?.contact || {};
  } catch (error) {
    console.error("Failed to fetch site contact settings:", error);
    return {};
  }
}
