function normalizeUrl(value) {
  const url = String(value || "").trim();
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (/^\/(?!\/)/.test(url)) return url;
  return "";
}

function defaultTitle(isRTL = false) {
  return isRTL ? "تحميل البروشور" : "Download Brochure";
}

function pushBrochure(bucket, seen, item, isRTL = false) {
  if (!item) return;

  const canUseHref =
    typeof item !== "string" &&
    !!(
      item?.url ||
      item?.brochureUrl ||
      item?.brochureHref ||
      item?.type ||
      item?.title ||
      item?.label ||
      item?.fileName ||
      item?.category
    );

  const url = normalizeUrl(
    typeof item === "string"
      ? item
      : item?.url ||
        item?.brochureUrl ||
        item?.brochureHref ||
        (canUseHref ? item?.href : "")
  );

  if (!url || seen.has(url)) return;

  seen.add(url);
  bucket.push({
    id:
      item?.id ||
      item?.type ||
      item?.url ||
      item?.href ||
      item?.brochureUrl ||
      item?.brochureHref ||
      url,
    title: item?.title || defaultTitle(isRTL),
    type: item?.type || "main",
    url,
  });
}

function visitSource(source, bucket, seen, isRTL, visited) {
  if (!source) return;

  if (typeof source === "string") {
    pushBrochure(bucket, seen, { url: source }, isRTL);
    return;
  }

  if (Array.isArray(source)) {
    source.forEach((item) => visitSource(item, bucket, seen, isRTL, visited));
    return;
  }

  if (typeof source !== "object") return;
  if (visited.has(source)) return;
  visited.add(source);

  pushBrochure(bucket, seen, source, isRTL);

  visitSource(source?.brochures, bucket, seen, isRTL, visited);
  visitSource(source?.intro, bucket, seen, isRTL, visited);
  visitSource(source?.floorPlans, bucket, seen, isRTL, visited);
  visitSource(source?.data, bucket, seen, isRTL, visited);
  visitSource(source?._raw, bucket, seen, isRTL, visited);
  visitSource(source?._rawLocalized, bucket, seen, isRTL, visited);
}

export function collectProjectBrochures(sources, { isRTL = false } = {}) {
  const bucket = [];
  const seen = new Set();
  const visited = new WeakSet();

  for (const source of Array.isArray(sources) ? sources : [sources]) {
    visitSource(source, bucket, seen, isRTL, visited);
  }

  return bucket;
}

export function getPrimaryBrochureUrl(...sources) {
  return collectProjectBrochures(sources)[0]?.url || "";
}
