import { getArticleBySlug } from "@/lib/sanityQueries";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug") || "success-stories";
    
    const article = await getArticleBySlug(slug);
    
    return Response.json({
      slug,
      hasArticle: !!article,
      article: article ? {
        title: article.title,
        hasSections: Array.isArray(article.sections),
        sectionsCount: Array.isArray(article.sections) ? article.sections.length : 0,
        firstSectionBody: article.sections?.[0]?.body ? {
          isArray: Array.isArray(article.sections[0].body),
          length: Array.isArray(article.sections[0].body) ? article.sections[0].body.length : 'n/a',
          firstItem: article.sections[0].body?.[0],
        } : null,
        hasBody: !!article.body,
        bodyType: typeof article.body,
        bodyIsArray: Array.isArray(article.body),
        bodyLength: Array.isArray(article.body) ? article.body.length : 'n/a',
        firstBodyItem: Array.isArray(article.body) ? article.body[0] : 'n/a',
        fullArticle: article, // Include full data for inspection
      } : null,
    });
  } catch (error) {
    return Response.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}
