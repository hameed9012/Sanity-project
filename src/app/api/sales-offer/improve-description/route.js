export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeStr(value) {
  return typeof value === "string" ? value : value == null ? "" : String(value);
}

function polishParagraphs(text) {
  return safeStr(text)
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      if (lines.length <= 1) return lines[0] || "";

      const [heading, ...rest] = lines;
      const cleanedRest = rest.map((line) =>
        line.replace(/^[•*\-]\s*/, "• ").replace(/\s+/g, " ").trim()
      );

      return [heading.replace(/\s+/g, " ").trim(), ...cleanedRest].join("\n");
    })
    .join("\n\n");
}

function buildFallbackDescription({ text, projectName, locale, projectData }) {
  const isArabic = String(locale || "").startsWith("ar");
  const normalized = polishParagraphs(text);
  if (normalized) return normalized;

  const project = projectData?.project || projectData || {};
  const lines = [
    isArabic ? `== نظرة عامة على ${projectName} ==` : `== ${projectName} Overview ==`,
    "",
  ];

  if (project?.developer) {
    lines.push(
      isArabic ? `• المطور: ${project.developer}` : `• Developer: ${project.developer}`
    );
  }
  if (project?.location) {
    lines.push(
      isArabic ? `• الموقع: ${project.location}` : `• Location: ${project.location}`
    );
  }
  if (project?.startingPrice) {
    lines.push(
      isArabic
        ? `• السعر الابتدائي: ${project.startingPrice}`
        : `• Starting price: ${project.startingPrice}`
    );
  }
  if (project?.completionDate || project?.handover) {
    lines.push(
      isArabic
        ? `• التسليم: ${project.completionDate || project.handover}`
        : `• Handover: ${project.completionDate || project.handover}`
    );
  }

  return lines.join("\n").trim();
}

async function improveWithOpenAI({ text, projectName, locale, projectData }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const isArabic = String(locale || "").startsWith("ar");
  const systemPrompt = isArabic
    ? "أعد كتابة وصف مشروع عقاري بصياغة بيع احترافية، واضحة، موجزة، ومنظمة. حافظ على الحقائق الموجودة فقط، ولا تخترع أي أرقام أو وعود أو تفاصيل غير موجودة."
    : "Rewrite a real-estate project description into polished sales-offer copy that is clear, concise, and well structured. Preserve only the facts provided. Do not invent numbers, claims, or amenities.";

  const userPrompt = [
    `Project: ${safeStr(projectName || "Project")}`,
    `Locale: ${safeStr(locale || "en")}`,
    "Available project context:",
    JSON.stringify(projectData || {}, null, 2),
    "",
    "Draft description to improve:",
    safeStr(text || ""),
    "",
    "Return only the improved description text. Use short section headings and bullet points when helpful.",
  ].join("\n");

  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      input: [
        { role: "system", content: [{ type: "input_text", text: systemPrompt }] },
        { role: "user", content: [{ type: "input_text", text: userPrompt }] },
      ],
      temperature: 0.4,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "OpenAI request failed");
  }

  const data = await res.json();
  const outputText =
    data?.output_text ||
    data?.output?.flatMap((item) => item?.content || [])?.find((item) => item?.type === "output_text")?.text ||
    "";

  return safeStr(outputText).trim() || null;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const text = safeStr(body?.text);
    const projectName = safeStr(body?.projectName);
    const locale = safeStr(body?.locale || "en");
    const projectData = body?.projectData || {};

    let improved = null;
    try {
      improved = await improveWithOpenAI({
        text,
        projectName,
        locale,
        projectData,
      });
    } catch (error) {
      console.error("sales-offer improve-description OpenAI error:", error);
    }

    const finalText =
      improved ||
      buildFallbackDescription({ text, projectName, locale, projectData });

    return Response.json({ ok: true, text: finalText });
  } catch (error) {
    console.error("sales-offer improve-description error:", error);
    return Response.json(
      {
        ok: false,
        message: error?.message || "Failed to improve description",
      },
      { status: 500 }
    );
  }
}
