// src/components/projects/FloorPlanShowcase.jsx
"use client";

import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "@/styles/projects/FloorPlanShowcase.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

const OUT_MS = 220;
const IN_MS = 260;

function toStr(v) {
  if (v == null) return "";
  return typeof v === "string" ? v : String(v);
}

function normalizeSpaces(s) {
  return toStr(s)
    .replace(/\u00A0/g, " ")
    .replace(/\s*\+\s*/g, " + ")
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeKey(k) {
  return toStr(k)
    .toLowerCase()
    .replace(/[:：]/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isEmptyLike(val) {
  const t = normalizeKey(val);
  if (!t) return true;
  return (
    t === "n/a" ||
    t === "na" ||
    t === "-" ||
    t === "—" ||
    t.includes("not available") ||
    t.includes("unavailable") ||
    t.includes("غير متوفر") ||
    t.includes("غير متاحة") ||
    t.includes("غير متاح") ||
    t.includes("غير متوفرة")
  );
}

function buildKeyIndex(specsObj) {
  const idx = new Map();
  if (!specsObj || typeof specsObj !== "object") return idx;
  for (const rawKey of Object.keys(specsObj)) {
    idx.set(normalizeKey(rawKey), rawKey);
  }
  return idx;
}

function getSpecValue(specsObj, keyIndex, candidates) {
  for (const candidate of candidates) {
    const norm = normalizeKey(candidate);
    const realKey = keyIndex.get(norm);

    if (realKey != null) {
      const v = specsObj?.[realKey];
      if (!isEmptyLike(v)) return normalizeSpaces(v);
    }

    for (const [nk, rk] of keyIndex.entries()) {
      if (nk === norm) continue;
      if (nk.includes(norm) || norm.includes(nk)) {
        const v = specsObj?.[rk];
        if (!isEmptyLike(v)) return normalizeSpaces(v);
      }
    }
  }
  return "";
}

/* -----------------------------
   Payment Plan Parsing
------------------------------ */
function splitPlansByOr(text) {
  const raw = normalizeSpaces(text);
  if (!raw) return [];
  const parts = raw
    .split(/\s+(?:or|أو)\s+/i)
    .map((p) => normalizeSpaces(p))
    .filter(Boolean);

  if (parts.length <= 1) return [raw];
  return parts;
}

function detectMortgageContext(t) {
  const s = normalizeKey(t);
  return (
    s.includes("mortgage") ||
    s.includes("bank") ||
    s.includes("finance") ||
    s.includes("financing") ||
    s.includes("loan") ||
    s.includes("تمويل") ||
    s.includes("بنك") ||
    s.includes("قرض") ||
    s.includes("رهن")
  );
}

function detectCashContext(t) {
  const s = normalizeKey(t);
  return (
    s.includes("full cash") ||
    s.includes("cash") ||
    s.includes("نقد") ||
    s.includes("كاش") ||
    s.includes("نقداً") ||
    s.includes("كاش بالكامل")
  );
}

function extractPercents(text) {
  const t = toStr(text);
  const matches = t.match(/\d{1,3}\s*%/g);
  if (!matches) return [];
  return matches.map((m) => m.replace(/\s+/g, ""));
}

function extractDuration(text) {
  const t = toStr(text);
  const m =
    t.match(/\b\d+\s*(?:months?|mos?)\b/i) ||
    t.match(/\b\d+\s*(?:month)\b/i) ||
    t.match(/\b\d+\s*(?:أشهر|شهر)\b/i);
  return m ? normalizeSpaces(m[0]) : "";
}

function extractLabeledTimelineItems(text, isRTL) {
  const raw = normalizeSpaces(text);
  if (!raw) return [];

  const parts = raw
    .split(/\s*(?:\/|\||•|,|;|\n|\r|–|—)\s*/g)
    .map((p) => normalizeSpaces(p))
    .filter(Boolean);

  const items = [];
  let hasRealLabel = false;

  for (const part of parts) {
    const pm = part.match(/(\d{1,3}\s*%)/);
    if (!pm) continue;

    const pct = pm[1].replace(/\s+/g, "");
    let label = normalizeSpaces(part.replace(pm[0], ""));
    label = label.replace(/^[\s:：\-–—]+|[\s:：\-–—]+$/g, "").trim();

    if (label) hasRealLabel = true;
    if (!label) label = isRTL ? "" : "";

    items.push({ percentage: pct, label });
  }

  if (items.length >= 2 && hasRealLabel) return items;
  return [];
}

function isLongDescriptivePlan(text) {
  const t = normalizeSpaces(text);
  if (!t) return false;

  const hasWords = t.split(" ").length >= 8;
  const hasPunct = /[,;–—-]/.test(t);
  const hasTextConnectors =
    /\b(and|with|during|upon|then|after)\b/i.test(t) || /و/.test(t);

  const percents = extractPercents(t);
  if (percents.length === 0) return true;
  if (hasWords && (hasPunct || hasTextConnectors)) return true;
  return false;
}

function parseSinglePlan(planText, isRTL) {
  const raw = normalizeSpaces(planText);

  if (!raw) {
    return {
      type: "none",
      text: isRTL
        ? "يرجى التواصل للحصول على خطة الدفع"
        : "Contact for payment plan details",
    };
  }

  const lower = normalizeKey(raw);
  const isPDC = lower.includes("pdc");
  const mortgage = detectMortgageContext(raw);
  const cash = detectCashContext(raw);

  const labeledItems = extractLabeledTimelineItems(raw, isRTL);
  if (labeledItems.length && !isPDC) {
    return {
      type: "timeline",
      badge: cash
        ? isRTL
          ? "كاش"
          : "CASH"
        : mortgage
          ? isRTL
            ? "تمويل"
            : "MORTGAGE"
          : "",
      items: labeledItems.map((it, i) => ({
        percentage: it.percentage,
        label: it.label || (isRTL ? `دفعة ${i + 1}` : `Payment ${i + 1}`),
      })),
      duration: extractDuration(raw),
      meta: cash ? "cash" : mortgage ? "mortgage" : "",
    };
  }

  if (isLongDescriptivePlan(raw) && !isPDC) {
    return { type: "text", text: raw, isLong: true };
  }

  if (isPDC) {
    const cleaned = raw.replace(/^pdc\s*[:：]\s*/i, "").trim();
    const pieces = cleaned
      .split(/\s*\+\s*/g)
      .map((p) => normalizeSpaces(p))
      .filter(Boolean);

    const items = pieces.map((piece, idx) => {
      const pm = piece.match(/(\d{1,3}\s*%)/);
      const pct = pm ? pm[1].replace(/\s+/g, "") : "";
      const rest = normalizeSpaces(piece.replace(pm?.[0] || "", ""));
      const fallbackLabel = isRTL ? `دفعة ${idx + 1}` : `Payment ${idx + 1}`;
      return {
        percentage: pct || "",
        label: rest || fallbackLabel,
      };
    });

    return {
      type: "timeline",
      badge: "PDC",
      items,
      duration: extractDuration(raw),
      meta: cash ? "cash" : mortgage ? "mortgage" : "",
    };
  }

  const percents = extractPercents(raw);
  if (!percents.length) {
    return { type: "text", text: raw, isLong: false };
  }

  const labels2_default = isRTL
    ? ["أثناء الإنشاء", "عند التسليم"]
    : ["During construction", "Upon handover"];

  const labels3_default = isRTL
    ? ["عند الحجز", "أثناء الإنشاء", "عند التسليم"]
    : ["On booking", "During construction", "Upon handover"];

  const labels2_mortgage = isRTL
    ? ["دفعة أولى", "تمويل عقاري"]
    : ["Down payment", "Mortgage"];

  const makeItems = (pcts) => {
    if (pcts.length === 2) {
      const baseLabels = mortgage || cash ? labels2_mortgage : labels2_default;
      return pcts.map((p, i) => ({
        percentage: p,
        label: baseLabels[i] || (isRTL ? `دفعة ${i + 1}` : `Payment ${i + 1}`),
      }));
    }

    if (pcts.length === 3) {
      return pcts.map((p, i) => ({
        percentage: p,
        label:
          labels3_default[i] || (isRTL ? `دفعة ${i + 1}` : `Payment ${i + 1}`),
      }));
    }

    return pcts.map((p, i) => ({
      percentage: p,
      label: isRTL ? `دفعة ${i + 1}` : `Payment ${i + 1}`,
    }));
  };

  return {
    type: "timeline",
    badge: cash
      ? isRTL
        ? "كاش"
        : "CASH"
      : mortgage
        ? isRTL
          ? "تمويل"
          : "MORTGAGE"
        : "",
    items: makeItems(percents),
    duration: extractDuration(raw),
    meta: cash ? "cash" : mortgage ? "mortgage" : "",
  };
}

function parsePaymentPlan(paymentPlanValue, isRTL) {
  const raw = normalizeSpaces(paymentPlanValue);
  if (!raw) {
    return {
      type: "none",
      message: isRTL
        ? "يرجى التواصل للحصول على خطة الدفع"
        : "Contact for payment plan details",
      plans: [],
    };
  }

  const split = splitPlansByOr(raw);
  const plans = split.map((p, i) => {
    const parsed = parseSinglePlan(p, isRTL);
    return {
      id: `${i + 1}`,
      label:
        split.length > 1
          ? `${isRTL ? "خطة الدفع" : "Payment Plan"} ${i + 1}`
          : isRTL
            ? "خطة الدفع"
            : "Payment Plan",
      ...parsed,
    };
  });

  return {
    type: plans.length > 1 ? "multi" : "single",
    plans,
    message: "",
  };
}

function pickFirstNonEmpty(...vals) {
  for (const v of vals) {
    const t = normalizeSpaces(v);
    if (!isEmptyLike(t)) return t;
  }
  return "";
}

function resolvePaymentPlanEverywhere({
  activeLocale,
  activeIsRTL,
  currentItem,
  currentGroup,
  data,
  projectData,
}) {
  const itemSpecs =
    currentItem?.specs && typeof currentItem.specs === "object"
      ? currentItem.specs
      : null;

  const groupSpecs =
    currentGroup?.specs && typeof currentGroup.specs === "object"
      ? currentGroup.specs
      : null;

  const itemKeyIndex = buildKeyIndex(itemSpecs || {});
  const groupKeyIndex = buildKeyIndex(groupSpecs || {});

  const fromItemSpecs =
    getSpecValue(itemSpecs, itemKeyIndex, [
      "Payment Plan",
      "paymentPlan",
      "Payment plan",
      "Plan",
      "payment_plan",
      "خطة الدفع",
      "خطة السداد",
      "خطة الدفع :",
      "خطة السداد :",
    ]) || "";

  const fromGroupSpecs =
    getSpecValue(groupSpecs, groupKeyIndex, [
      "Payment Plan",
      "paymentPlan",
      "Payment plan",
      "Plan",
      "payment_plan",
      "خطة الدفع",
      "خطة السداد",
      "خطة الدفع :",
      "خطة السداد :",
    ]) || "";

  const pd = projectData || {};
  const d = data || {};

  const pdLocaleNode =
    (activeLocale && pd?.[activeLocale]) ||
    (activeLocale && pd?.locales?.[activeLocale]) ||
    null;

  const dLocaleNode =
    (activeLocale && d?.[activeLocale]) ||
    (activeLocale && d?.locales?.[activeLocale]) ||
    null;

  const fromProjectDirect = pickFirstNonEmpty(
    pd?.paymentPlan,
    pd?.project?.paymentPlan,
    pdLocaleNode?.paymentPlan,
    pdLocaleNode?.project?.paymentPlan,
  );

  const fromDataDirect = pickFirstNonEmpty(
    d?.paymentPlan,
    d?.project?.paymentPlan,
    dLocaleNode?.paymentPlan,
    dLocaleNode?.project?.paymentPlan,
  );

  const resolved = pickFirstNonEmpty(
    fromItemSpecs,
    fromGroupSpecs,
    fromProjectDirect,
    fromDataDirect,
  );

  return normalizeSpaces(resolved);
}

export default function FloorPlanShowcase({
  data,
  projectData,
  isRTL,
  locale,
}) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  if (
    !data ||
    !projectData ||
    !Array.isArray(data?.plans) ||
    data.plans.length === 0
  )
    return null;

  // UPDATED: Check for both villas AND townhouses with variants
  const hasVariants = useMemo(() => {
    if (!data?.plans) return false;

    // Check if any plan has variants array with items
    return data.plans.some(
      (plan) => Array.isArray(plan?.variants) && plan.variants.length > 0,
    );
  }, [data?.plans]);

  const [activeTab, setActiveTab] = useState(0);
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [panePhase, setPanePhase] = useState("idle");
  const [paneDir, setPaneDir] = useState("next");
  const pendingVariantRef = useRef(null);

  const [imgPhase, setImgPhase] = useState("idle");
  const [imgDir, setImgDir] = useState("next");
  const pendingImageRef = useRef(null);

  // Mobile tabs
  const tabsContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const [showRightIndicator, setShowRightIndicator] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const checkScrollPosition = useCallback(() => {
    const container = tabsContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    setShowLeftIndicator(scrollLeft > 0);
    setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, [checkScrollPosition]);

  useEffect(() => {
    if (!isMobile || !tabsContainerRef.current) return;

    const container = tabsContainerRef.current;
    const activeEl = container.querySelector(`[data-tab-index="${activeTab}"]`);
    if (activeEl) {
      const tabLeft = activeEl.offsetLeft;
      const tabWidth = activeEl.offsetWidth;
      const containerWidth = container.clientWidth;

      container.scrollTo({
        left: tabLeft - (containerWidth - tabWidth) / 2,
        behavior: "smooth",
      });
    }

    checkScrollPosition();
  }, [activeTab, isMobile, checkScrollPosition]);

  const resetContent = useCallback(() => {
    setActiveVariantIndex(0);
    setCurrentImageIndex(0);
  }, []);

  useEffect(() => {
    resetContent();
  }, [activeTab, resetContent]);

  const { currentItem, currentGroup, variantsCount } = useMemo(() => {
    if (!hasVariants) {
      const plan = data.plans?.[activeTab] || null;
      return { currentItem: plan, currentGroup: null, variantsCount: 0 };
    }

    const group = data.plans?.[activeTab] || null;
    const variant = group?.variants?.[activeVariantIndex] || null;

    return {
      currentItem: variant,
      currentGroup: group,
      variantsCount: group?.variants?.length || 0,
    };
  }, [hasVariants, data.plans, activeTab, activeVariantIndex]);

  if (!currentItem) return null;

  const currentImages = Array.isArray(currentItem?.images)
    ? currentItem.images
    : [];
  const hasMultipleImages = currentImages.length > 1;
  const hasMultipleVariants = hasVariants && variantsCount > 1;

  /* ----------------------------
     Specs reading
  ---------------------------- */
  const rawSpecs =
    currentItem?.specs && typeof currentItem.specs === "object"
      ? currentItem.specs
      : {};
  const keyIndex = useMemo(() => buildKeyIndex(rawSpecs), [rawSpecs]);

  const totalAreaValue =
    getSpecValue(rawSpecs, keyIndex, [
      "Total Area",
      "Total",
      "Total Range",
      "Area Range",
      "Total Size",
      "Built-up Area",
      "BUA",
      "Suite Area",
      "Internal Area",
      "Gross Area",
      "GFA",
      "المساحة الإجمالية",
      "إجمالي المساحة",
      "نطاق المساحة",
      "مساحة إجمالية",
      "المساحة",
      "المساحة الكلية",
    ]) || "";

  const startingPriceValue =
    getSpecValue(rawSpecs, keyIndex, [
      "Starting Price",
      "Starting from",
      "Price",
      "Price Range",
      "From",
      "السعر الابتدائي",
      "سعر البداية",
      "السعر",
      "يبدأ من",
    ]) || "";

  const handoverValue =
    getSpecValue(rawSpecs, keyIndex, [
      "Handover",
      "Completion",
      "Completion Date",
      "Delivery",
      "Delivery Date",
      "موعد التسليم",
      "التسليم",
      "تاريخ التسليم",
      "موعد الاستلام",
    ]) || "";

  // ✅ NEW: listing badge (Secondary / Resale) only when present in currentItem or specs
  const listingBadgeValue = useMemo(() => {
    const direct = normalizeSpaces(currentItem?.badge);
    if (direct) return direct;

    const fromSpecs =
      getSpecValue(rawSpecs, keyIndex, [
        "Listing Type",
        "Listing",
        "Market Type",
        "Market",
        "Resale",
        "Secondary",
        "نوع العرض",
        "نوع الإدراج",
        "ثانوي",
        "إعادة بيع",
      ]) || "";

    return normalizeSpaces(fromSpecs);
  }, [currentItem?.badge, rawSpecs, keyIndex]);

  const isReadyProject = useMemo(() => {
    const h = normalizeKey(handoverValue);
    const pStatus = normalizeKey(projectData?.status);
    const pHandover = normalizeKey(
      projectData?.handoverDate || projectData?.completionDate,
    );

    const readyWords =
      h.includes("ready") ||
      h.includes("جاهز") ||
      h.includes("منجز") ||
      pHandover.includes("ready") ||
      pHandover.includes("جاهز");

    const offplanWords =
      pStatus.includes("off") ||
      pStatus.includes("plan") ||
      pStatus.includes("تحت") ||
      pStatus.includes("على");

    if (readyWords) return true;
    if (pStatus.includes("ready") || pStatus.includes("جاهز")) return true;
    if (offplanWords) return false;
    return false;
  }, [handoverValue, projectData]);

  const basePaymentPlanValue = useMemo(() => {
    return resolvePaymentPlanEverywhere({
      activeLocale,
      activeIsRTL,
      currentItem,
      currentGroup,
      data,
      projectData,
    });
  }, [activeLocale, activeIsRTL, currentItem, currentGroup, data, projectData]);

  const readyDefaultPaymentPlan = activeIsRTL
    ? "كاش بالكامل (جاهز) أو 20% / 80% (تمويل عقاري)"
    : "Full Cash (Ready) or 20% / 80% (Mortgage)";

  const paymentPlanValue =
    isReadyProject && isEmptyLike(basePaymentPlanValue)
      ? readyDefaultPaymentPlan
      : basePaymentPlanValue;

  const paymentPlanData = useMemo(
    () => parsePaymentPlan(paymentPlanValue, activeIsRTL),
    [paymentPlanValue, activeIsRTL],
  );

  /* ----------------------------
     Pane / Variant switching
  ---------------------------- */
  const switchVariant = useCallback(
    (nextIndex, dir) => {
      if (!hasMultipleVariants || nextIndex === activeVariantIndex) return;

      setPaneDir(dir);
      pendingVariantRef.current = nextIndex;
      setPanePhase("out");

      window.setTimeout(() => {
        setActiveVariantIndex(pendingVariantRef.current);
        setCurrentImageIndex(0);
        setPanePhase("in");

        window.setTimeout(() => {
          setPanePhase("idle");
          pendingVariantRef.current = null;
        }, IN_MS);
      }, OUT_MS);
    },
    [hasMultipleVariants, activeVariantIndex],
  );

  const nextVariant = useCallback(
    () => switchVariant((activeVariantIndex + 1) % variantsCount, "next"),
    [switchVariant, activeVariantIndex, variantsCount],
  );
  const prevVariant = useCallback(
    () =>
      switchVariant(
        (activeVariantIndex - 1 + variantsCount) % variantsCount,
        "prev",
      ),
    [switchVariant, activeVariantIndex, variantsCount],
  );

  const handlePrevVariant = useCallback(
    () => (activeIsRTL ? nextVariant() : prevVariant()),
    [activeIsRTL, nextVariant, prevVariant],
  );
  const handleNextVariant = useCallback(
    () => (activeIsRTL ? prevVariant() : nextVariant()),
    [activeIsRTL, nextVariant, prevVariant],
  );

  /* ----------------------------
     Image switching
  ---------------------------- */
  const switchImage = useCallback(
    (nextIndex, dir) => {
      if (!hasMultipleImages || nextIndex === currentImageIndex) return;

      setImgDir(dir);
      pendingImageRef.current = nextIndex;
      setImgPhase("out");

      window.setTimeout(() => {
        setCurrentImageIndex(pendingImageRef.current);
        setImgPhase("in");

        window.setTimeout(() => {
          setImgPhase("idle");
          pendingImageRef.current = null;
        }, IN_MS);
      }, OUT_MS);
    },
    [hasMultipleImages, currentImageIndex],
  );

  const nextImage = useCallback(
    () => switchImage((currentImageIndex + 1) % currentImages.length, "next"),
    [switchImage, currentImageIndex, currentImages.length],
  );
  const prevImage = useCallback(
    () =>
      switchImage(
        (currentImageIndex - 1 + currentImages.length) % currentImages.length,
        "prev",
      ),
    [switchImage, currentImageIndex, currentImages.length],
  );

  const handlePrevImage = useCallback(
    () => (activeIsRTL ? nextImage() : prevImage()),
    [activeIsRTL, nextImage, prevImage],
  );
  const handleNextImage = useCallback(
    () => (activeIsRTL ? prevImage() : nextImage()),
    [activeIsRTL, nextImage, prevImage],
  );

  /* ----------------------------
     Tabs scroll
  ---------------------------- */
  const scrollTabsLeft = () => {
    if (!tabsContainerRef.current) return;
    tabsContainerRef.current.scrollBy({ left: -220, behavior: "smooth" });
    setTimeout(checkScrollPosition, 280);
  };

  const scrollTabsRight = () => {
    if (!tabsContainerRef.current) return;
    tabsContainerRef.current.scrollBy({ left: 220, behavior: "smooth" });
    setTimeout(checkScrollPosition, 280);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setPanePhase("idle");
    setImgPhase("idle");
    resetContent();
  };

  const paneAnimClass =
    panePhase === "idle"
      ? ""
      : panePhase === "out"
        ? paneDir === "next"
          ? styles.paneOutNext
          : styles.paneOutPrev
        : paneDir === "next"
          ? styles.paneInNext
          : styles.paneInPrev;

  const imgAnimClass =
    imgPhase === "idle"
      ? ""
      : imgPhase === "out"
        ? imgDir === "next"
          ? styles.imgOutNext
          : styles.imgOutPrev
        : imgDir === "next"
          ? styles.imgInNext
          : styles.imgInPrev;

  const getSectionTitle = () => (activeIsRTL ? "مخطط الطوابق" : "Floor Plan");

  const renderedStartingPrice =
    startingPriceValue ||
    normalizeSpaces(projectData?.startingPrice) ||
    (activeIsRTL ? "حسب الطلب" : "On request");

  const renderedHandover =
    handoverValue ||
    normalizeSpaces(projectData?.completionDate || projectData?.handoverDate) ||
    "—";

  return (
    <section
      className={styles.floorplanSection}
      dir={activeIsRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.floorTitle}>{getSectionTitle()}</h2>
          <div className={styles.floorUnderline} />
        </header>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          {isMobile && showLeftIndicator && (
            <button
              type="button"
              className={`${styles.tabScrollIndicator} ${
                styles.tabScrollLeft
              } ${activeIsRTL ? styles.rtlIndicator : ""}`}
              onClick={activeIsRTL ? scrollTabsRight : scrollTabsLeft}
              aria-label={activeIsRTL ? "تمرير لليمين" : "Scroll left"}
            >
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 2L2 10L10 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}

          <nav
            className={styles.tabsWrapper}
            aria-label="Floor plan tabs"
            ref={tabsContainerRef}
            onScroll={checkScrollPosition}
          >
            <div className={styles.tabsScrollContainer}>
              <ul className={styles.detailTabs}>
                {data.plans.map((item, index) => (
                  <li
                    key={item?.id || index}
                    className={styles.detailTabItem}
                    data-tab-index={index}
                  >
                    <button
                      type="button"
                      className={`${styles.navLink} ${
                        activeTab === index ? styles.navLinkActive : ""
                      }`}
                      onClick={() => handleTabClick(index)}
                    >
                      {getLocalizedText(
                        item?.shortLabel ||
                          item?.title ||
                          (activeIsRTL ? "خطة" : "Plan"),
                        activeLocale,
                      )}
                    </button>

                    {activeTab === index && isMobile && (
                      <div className={styles.mobileActiveIndicator} />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {isMobile && data.plans.length > 3 && (
              <div className={styles.swipeHint}>
                <span className={styles.swipeHintText}>
                  {activeIsRTL ? "اسحب للتمرير" : "Swipe to see more"}
                </span>
                <div className={styles.swipeHintIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </nav>

          {isMobile && showRightIndicator && (
            <button
              type="button"
              className={`${styles.tabScrollIndicator} ${
                styles.tabScrollRight
              } ${activeIsRTL ? styles.rtlIndicator : ""}`}
              onClick={activeIsRTL ? scrollTabsLeft : scrollTabsRight}
              aria-label={activeIsRTL ? "تمرير لليسار" : "Scroll right"}
            >
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 2L10 10L2 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Content */}
        <div className={styles.tabContent}>
          <div className={`${styles.row} ${styles.pane} ${paneAnimClass}`}>
            {/* Left */}
            <div className={styles.colText}>
              <div className={styles.planHeaderBox}>
                <h4 className={styles.planHeading}>
                  {getLocalizedText(
                    currentItem?.fullTitle ||
                      currentItem?.title ||
                      (activeIsRTL ? "مخطط" : "Plan"),
                    activeLocale,
                  )}
                </h4>

                {/* ✅ NEW: Secondary/Resale badge only when present */}
                {!!listingBadgeValue && (
                  <div className={styles.listingBadgeRow}>
                    <span className={styles.listingBadge}>
                      {listingBadgeValue}
                    </span>
                  </div>
                )}

                {hasVariants && currentGroup && (
                  <div className={styles.variantMeta}>
                    <span className={styles.variantLabel}>
                      {getLocalizedText(
                        currentItem?.shortLabel || "",
                        activeLocale,
                      )}
                    </span>
                    <span className={styles.variantCounter}>
                      {activeVariantIndex + 1}/{variantsCount}
                    </span>
                  </div>
                )}
              </div>

              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <div className={styles.specLabel}>
                    {activeIsRTL ? "المساحة الإجمالية :" : "Total Area :"}
                  </div>
                  <div className={styles.specValue}>
                    {totalAreaValue || "—"}
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specLabel}>
                    {activeIsRTL ? "السعر الابتدائي :" : "Starting Price :"}
                  </div>
                  <div className={styles.specValue}>
                    {renderedStartingPrice}
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specLabel}>
                    {activeIsRTL ? "موعد التسليم :" : "Handover :"}
                  </div>
                  <div className={styles.specValue}>{renderedHandover}</div>
                </div>

                {/* Payment Plan */}
                <div className={styles.paymentPlanContainer}>
                  <div className={styles.paymentPlanLabel}>
                    {activeIsRTL ? "خطة السداد :" : "Payment Plan :"}
                  </div>

                  {paymentPlanData.type === "none" ? (
                    <div className={styles.simplePaymentPlan}>
                      {isReadyProject
                        ? readyDefaultPaymentPlan
                        : paymentPlanData.message}
                    </div>
                  ) : (
                    <div
                      className={`${styles.paymentPlansGrid} ${
                        paymentPlanData.plans.length === 1
                          ? styles.singleCardGrid
                          : paymentPlanData.plans.length === 2
                            ? styles.doubleCardGrid
                            : styles.multiCardGrid
                      }`}
                    >
                      {paymentPlanData.plans.map((plan) => (
                        <div
                          key={plan.id}
                          className={`${styles.paymentPlanCard} ${
                            plan.type === "text" && plan.isLong
                              ? styles.longDescriptionCard
                              : ""
                          }`}
                        >
                          <div className={styles.planCardLabelRow}>
                            <div className={styles.planCardLabel}>
                              {plan.label}
                            </div>
                            {!!plan.badge && (
                              <div className={styles.planBadge}>
                                {plan.badge}
                              </div>
                            )}
                          </div>

                          <div className={styles.planCardContent}>
                            {plan.type === "timeline" ? (
                              <>
                                <div className={styles.planCardPhases}>
                                  {plan.items.map((it, idx) => (
                                    <div
                                      key={idx}
                                      className={styles.planCardPhase}
                                    >
                                      <div
                                        className={styles.planCardDescription}
                                        title={it.label}
                                      >
                                        {it.label}
                                      </div>
                                      <div
                                        className={styles.planCardPercentage}
                                      >
                                        {it.percentage}
                                      </div>
                                      {idx < plan.items.length - 1 && (
                                        <div className={styles.planCardPlus}>
                                          +
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>

                                {!!plan.duration && (
                                  <div className={styles.planCardDuration}>
                                    <span className={styles.durationLabel}>
                                      {activeIsRTL ? "المدة:" : "Duration:"}
                                    </span>
                                    <span className={styles.durationValue}>
                                      {plan.duration}
                                    </span>
                                  </div>
                                )}
                              </>
                            ) : (
                              <div
                                className={`${styles.planCardText} ${
                                  plan.isLong ? styles.longDescription : ""
                                }`}
                              >
                                {plan.text}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className={styles.colImage}>
              <div className={styles.virtualTourWrapper}>
                <div className={styles.imageContainer}>
                  <div className={`${styles.imageStage} ${imgAnimClass}`}>
                    {currentImages.length > 0 ? (
                      <Image
                        src={currentImages[currentImageIndex]}
                        alt={`${getLocalizedText(
                          currentItem?.title || "Floor Plan",
                          activeLocale,
                        )} ${activeIsRTL ? "مخطط" : "floor plan"}`}
                        fill
                        className={styles.planImage}
                        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 540px"
                        priority={currentImageIndex === 0}
                      />
                    ) : (
                      <div className={styles.noImagePlaceholder}>
                        <span className={styles.placeholderText}>
                          {activeIsRTL ? "صورة قريباً" : "Image coming soon"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Variant arrows - now works for both villas AND townhouses */}
                {hasMultipleVariants && (
                  <>
                    <button
                      type="button"
                      className={`${styles.sideArrow} ${styles.sideArrowLeft}`}
                      onClick={handlePrevVariant}
                      aria-label={
                        activeIsRTL ? "النموذج السابق" : "Previous variant"
                      }
                    />
                    <button
                      type="button"
                      className={`${styles.sideArrow} ${styles.sideArrowRight}`}
                      onClick={handleNextVariant}
                      aria-label={
                        activeIsRTL ? "النموذج التالي" : "Next variant"
                      }
                    />
                  </>
                )}

                {/* Image arrows */}
                {hasMultipleImages && (
                  <div className={styles.commonArrow}>
                    <button
                      type="button"
                      className={`${styles.swiperButton} ${styles.prev}`}
                      onClick={handlePrevImage}
                      aria-label={
                        activeIsRTL ? "الصورة السابقة" : "Previous image"
                      }
                    >
                      <span />
                    </button>
                    <button
                      type="button"
                      className={`${styles.swiperButton} ${styles.next}`}
                      onClick={handleNextImage}
                      aria-label={activeIsRTL ? "الصورة التالية" : "Next image"}
                    >
                      <span />
                    </button>
                  </div>
                )}

                {hasMultipleImages && currentImages.length > 0 && (
                  <div className={styles.imageCounter}>
                    <span className={styles.counterText}>
                      {currentImageIndex + 1} / {currentImages.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
