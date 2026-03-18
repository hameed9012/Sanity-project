import { getArticleBySlug } from "@/lib/sanityQueries";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug") || "success-stories";
    
    const article = await getArticleBySlug(slug);
    
    if (!article || !article.sections || !article.sections[0] || !article.sections[0].body)   {
      return Response.json({ error: "No body found" }, { status: 404 });
    }

    const body = article.sections[0].body;
    const blockDetails = body.map((block, idx) => ({
      index: idx,
      _type: block._type,
      hasChildren: Array.isArray(block.children),
      childrenCount: Array.isArray(block.children) ? block.children.length : 0,
      firstChildText: block.children?.[0]?.text?.substring(0, 100),
      allChildrenText: block.children ? block.children.map(c => c.text?.substring(0,60)).join(' | ') : 'N/A',
    }));

    return Response.json({
      slug,
      totalBlocks: body.length,
      blocks: blockDetails,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
