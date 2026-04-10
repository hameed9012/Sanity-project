import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN || process.env.SANITY_API_TOKEN,
});

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const query = String(body?.query || "").trim();
    const params = body?.params && typeof body.params === "object" ? body.params : {};

    if (!query) {
      return Response.json(
        { error: { description: "Missing Sanity query." } },
        { status: 400, headers: corsHeaders() }
      );
    }

    const result = await client.fetch(query, params);
    return Response.json({ result }, { status: 200, headers: corsHeaders() });
  } catch (error) {
    console.error("sanity-query API error:", error);
    return Response.json(
      {
        error: {
          description: error?.message || "Failed to query Sanity.",
        },
      },
      { status: 500, headers: corsHeaders() }
    );
  }
}
