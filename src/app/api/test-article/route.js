import { getArticleBySlug } from "@/lib/sanityQueries";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug") || "success-stories";
    
    const article = await getArticleBySlug(slug);
    
    if (!article) {
      return Response.json({ error: "Article not found" }, { status: 404 });
    }

    // Extract text content from sections
    const sectionTexts = [];
    if (Array.isArray(article.sections)) {
      for (const section of article.sections) {
        if (section.title) sectionTexts.push(`[\u{2508} ${section.title} \u{2508}]`);
        
        if (Array.isArray(section.body)) {
          for (const block of section.body) {
            if (block._type === 'block' && Array.isArray(block.children)) {
              for (const child of block.children) {
                if (child.text) sectionTexts.push(child.text);
              }
            }
          }
        }
      }
    }

    return Response.json({
      slug,
      title: article.title,
      hasSection: Array.isArray(article.sections) && article.sections.length > 0,
      sectionCount: Array.isArray(article.sections) ? article.sections.length : 0,
      sectionContent: sectionTexts.join("\n\n"),
      firstSection: article.sections?.[0] ? {
        title: article.sections[0].title,
        bodyLength: Array.isArray(article.sections[0].body) ? article.sections[0].body.length : 0,
        bodyType: typeof article.sections[0].body,
        firstBlockType: article.sections[0].body?.[0]?._type,
        firstBlockChildrenType: Array.isArray(article.sections[0].body?.[0]?.children) ? "array" : typeof article.sections[0].body?.[0]?.children,
      } : null,
    });
  } catch (error) {
    return Response.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}
