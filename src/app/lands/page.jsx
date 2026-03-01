// ✅ FULL WORKING JSX (Cards same size style-ready + Modal + Badge + Masterplan only)
// File: src/app/lands/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import styles from "@/styles/lands/lands.module.css";
import { useAllProjects } from "@/components/SanityProjectsContext";
import { landsData, pickLang, getLandThumbnail } from "@/data/lands/landData";
import { useLanguage } from "@/components/LanguageProvider";

const PAGE_SIZE = 9;

function normalizeLocale(locale) {
  const s = String(locale || "en").toLowerCase();
  return s.startsWith("ar") ? "ar" : "en";
}

// ✅ remove any coordinates / lat lng patterns from strings
function stripCoords(text = "") {
  let s = String(text || "");

  // remove "lat,lng"
  s = s.replace(/-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?/g, "");

  // remove degree-style coords like 24°58'16.2"N 55°40'13.6"E
  s = s.replace(/\d{1,3}\s*°\s*\d{1,3}\s*'\s*\d{1,3}(\.\d+)?\s*"\s*[NSEW]\s*/gi, "");
  s = s.replace(/\d{1,3}\s*°\s*\d{1,3}\s*'\s*\d{1,3}(\.\d+)?\s*"\s*[NSEW]/gi, "");

  // remove "lat: .." "lng: .."
  s = s.replace(/lat(?:itude)?\s*:\s*-?\d+(\.\d+)?/gi, "");
  s = s.replace(/lng|long(?:itude)?\s*:\s*-?\d+(\.\d+)?/gi, "");

  // cleanup extra separators/spaces
  s = s.replace(/\(\s*\)/g, "");
  s = s.replace(/\s{2,}/g, " ").trim();
  s = s.replace(/^\s*[-–—,]\s*/g, "").trim();
  s = s.replace(/\s*[-–—,]\s*$/g, "").trim();

  return s;
}

function safeArrayByLocale(obj, locale) {
  if (!obj) return [];
  const v = obj?.[locale] || obj?.en || obj?.ar;
  return Array.isArray(v) ? v.filter(Boolean) : [];
}

function clampArray(arr, n) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(Boolean).slice(0, n);
}

export default function LandsPage() {
  const { locale: ctxLocale } = useLanguage();
  const locale = normalizeLocale(ctxLocale);
  const isRTL = locale === "ar";

  const [activeType, setActiveType] = React.useState("all");
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);
  const [selectedLand, setSelectedLand] = React.useState(null);

  const counts = React.useMemo(() => {
    const all = landsData.length;
    const residential = landsData.filter((x) => (x.type || "").toLowerCase() === "residential").length;
    const industrial = landsData.filter((x) => (x.type || "").toLowerCase() === "industrial").length;
    return { all, residential, industrial };
  }, []);

  const filtered = React.useMemo(() => {
    if (activeType === "all") return landsData;
    return landsData.filter((x) => (x.type || "").toLowerCase() === activeType);
  }, [activeType]);

  const visible = React.useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;

  const openModal = (land) => {
    setSelectedLand(land);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedLand(null);
    document.body.style.overflow = "unset";
  };

  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeType]);

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.page} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        {/* TOP ROW */}
        <div className={styles.topRow}>
          <div className={styles.pageTitleWrap}>
            <p className={styles.pageSubOnly}>
              {isRTL ? "استعرض محفظة المشاريع حسب النوع" : "Browse project portfolio by type"}
            </p>
          </div>

          <div className={styles.metaPill}>
            {isRTL ? (
              <>
                المشاريع: <b>{filtered.length}</b>
              </>
            ) : (
              <>
                Projects: <b>{filtered.length}</b>
              </>
            )}
          </div>
        </div>

        <TypeTabs value={activeType} isRTL={isRTL} onChange={setActiveType} counts={counts} />

        <div className={styles.grid}>
          <AnimatePresence>
            {visible.map((land, idx) => (
              <motion.button
                key={land.slug || land.id}
                type="button"
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 10 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.25) }}
                whileHover={{ y: -6 }}
                onClick={() => openModal(land)}
              >
                {/* ✅ BADGE ON CARD (inside card, no banner) */}
                <span className={styles.brandBadge}>{isRTL ? "الراسخون" : "Al Rasikhoon"}</span>

                <CardMedia land={land} locale={locale} isRTL={isRTL} />
                <CardBody land={land} locale={locale} isRTL={isRTL} />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <div className={styles.emptyTitle}>{isRTL ? "لا توجد مشاريع" : "No projects found"}</div>
            <div className={styles.emptySub}>{isRTL ? "جرّب تغيير نوع الفلتر." : "Try changing the filter type."}</div>
          </div>
        )}

        {canLoadMore && (
          <div className={styles.loadMoreWrap}>
            <button type="button" className={styles.loadMoreBtn} onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
              {isRTL ? "تحميل المزيد" : "LOAD MORE"}
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedLand ? (
          <ProfessionalLandModal land={selectedLand} locale={locale} isRTL={isRTL} onClose={closeModal} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function TypeTabs({ value, onChange, counts, isRTL }) {
  const tabs = [
    { id: "all", en: "All Projects", ar: "جميع المشاريع" },
    { id: "residential", en: "Residential", ar: "سكني" },
    { id: "industrial", en: "Industrial", ar: "صناعي" },
  ];

  return (
    <div className={styles.tabsWrap}>
      <div className={styles.tabs}>
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`${styles.tab} ${value === t.id ? styles.tabActive : ""}`}
            onClick={() => onChange(t.id)}
          >
            <span className={styles.tabLabel}>{isRTL ? t.ar : t.en}</span>
            <span className={styles.tabCount}>({counts?.[t.id] || 0})</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function CardMedia({ land, locale, isRTL }) {
  const title = pickLang(land.title, locale) || land.slug;
  const thumb = getLandThumbnail(land);
  const hasImage = Boolean(thumb);

  return (
    <div className={styles.cardMedia}>
      {hasImage ? (
        <Image
          src={thumb}
          alt={title}
          fill
          className={styles.cardImg}
          sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
      ) : (
        <div className={styles.pdfFallback}>
          <div className={styles.pdfBadge}>PDF</div>
          <div className={styles.pdfTitle}>{title}</div>
          <div className={styles.pdfHint}>{isRTL ? "مشروع" : "Project"}</div>
        </div>
      )}
      <div className={styles.mediaOverlay} />
    </div>
  );
}

function CardBody({ land, locale, isRTL }) {
  const title = pickLang(land.title, locale) || land.slug;
  const subtitle = pickLang(land.subtitle, locale);
  const area = pickLang(land.area, locale);
  const price = pickLang(land.price, locale);

  const typeLabel =
    (land.type || "").toLowerCase() === "industrial" ? (isRTL ? "صناعي" : "Industrial") : isRTL ? "سكني" : "Residential";

  const statusLabel =
    (land.status || "").toLowerCase() === "available" ? (isRTL ? "متاح" : "Available") : isRTL ? "غير متاح" : "Unavailable";

  return (
    <div className={styles.cardBody}>
      <div className={styles.pillsRow}>
        <span className={styles.pill}>{typeLabel}</span>
        <span className={styles.pillSoft}>{statusLabel}</span>
        {area && <span className={styles.pillSoft}>{area}</span>}
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>

      {subtitle && <p className={styles.cardSub}>{subtitle}</p>}

      {price && (
        <div className={styles.priceWrap}>
          <span className={styles.cardPrice}>{price}</span>
        </div>
      )}

      <div className={styles.cardCtaRow}>
        <span className={styles.cardCta}>{isRTL ? "عرض التفاصيل" : "VIEW DETAILS"}</span>
      </div>
    </div>
  );
}

/* =========================
   MODAL — Masterplan Only + Nearby only + NO coords shown
========================= */

function ProfessionalLandModal({ land, locale, isRTL, onClose }) {
  const title = pickLang(land.title, locale) || land.slug;
  const subtitle = pickLang(land.subtitle, locale);
  const description = pickLang(land.description, locale);
  const price = pickLang(land.price, locale);
  const completion = pickLang(land.completion, locale);
  const area = pickLang(land.area, locale);

  // ✅ DO NOT show coordinates. We'll show Nearby tab instead.
  // (We still sanitize in case you want to show a clean label later)
  const location = stripCoords(pickLang(land.location, locale));

  const gallery = Array.isArray(land?.gallery) ? land.gallery.filter(Boolean) : [];
  const hasGallery = gallery.length > 0;

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState("overview");

  React.useEffect(() => {
    setActiveIndex(0);
    setActiveTab("overview");
  }, [land?.slug]);

  const next = () => hasGallery && setActiveIndex((i) => (i + 1) % gallery.length);
  const prev = () => hasGallery && setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);

  const mainImage = hasGallery ? gallery[activeIndex] : getLandThumbnail(land);

  const details = clampArray(safeArrayByLocale(land.details, locale), 10);
  const features = clampArray(safeArrayByLocale(land.features, locale), 10);
  const nearby = clampArray(Array.isArray(land?.nearby) ? land.nearby : [], 10);

  // ✅ MASTERPLAN URL: use your existing brochureUrl fields (they are the masterplan PDFs)
  const contact = land.contact || {};
  const masterplanUrl =
    contact.brochureUrl ||
    land.brochureUrl ||
    contact.masterplanUrl ||
    contact.masterPlanUrl ||
    contact.masterplanPDF ||
    contact.masterPlanPDF ||
    land.masterplanUrl ||
    land.masterPlanUrl ||
    land.masterplanPDF ||
    land.masterPlanPDF ||
    "";

  const typeLabel =
    (land.type || "").toLowerCase() === "industrial" ? (isRTL ? "صناعي" : "Industrial") : isRTL ? "سكني" : "Residential";

  const statusLabel =
    (land.status || "").toLowerCase() === "available" ? (isRTL ? "متاح" : "Available") : isRTL ? "غير متاح" : "Unavailable";

  const stats = [
    { label: isRTL ? "النوع" : "Type", value: typeLabel },
    { label: isRTL ? "المساحة" : "Area", value: area || "—" },
    { label: isRTL ? "الحالة" : "Status", value: statusLabel },
  ];

  const tabs = [
    { id: "overview", en: "Overview", ar: "نظرة عامة" },
    { id: "details", en: "Details", ar: "تفاصيل" },
    { id: "features", en: "Features", ar: "مزايا" },
    { id: "nearby", en: "Nearby", ar: "بالقرب" },
  ];

  return (
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">
          ×
        </button>

        {/* ✅ BADGE INSIDE MODAL */}
        <div className={styles.modalBrandBadge}>{isRTL ? "الراسخون" : "Al Rasikhoon"}</div>

        <div className={styles.modalBody}>
          {/* LEFT: Gallery */}
          <div className={styles.modalLeft}>
            {mainImage ? (
              <div className={styles.gallery}>
                <div className={styles.galleryMain}>
                  <Image
                    src={mainImage}
                    alt={title}
                    fill
                    className={styles.galleryMainImg}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />

                  {hasGallery && (
                    <>
                      <button type="button" className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev}>
                        ‹
                      </button>
                      <button type="button" className={`${styles.navBtn} ${styles.navNext}`} onClick={next}>
                        ›
                      </button>

                      <div className={styles.galleryCounter}>
                        {activeIndex + 1} / {gallery.length}
                      </div>
                    </>
                  )}
                </div>

                {hasGallery && (
                  <div className={styles.galleryThumbs}>
                    {gallery.slice(0, 10).map((src, i) => (
                      <button
                        type="button"
                        key={`${src}-${i}`}
                        className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ""}`}
                        onClick={() => setActiveIndex(i)}
                      >
                        <Image src={src} alt={`${title} ${i + 1}`} fill className={styles.thumbImg} sizes="120px" unoptimized />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.noGallery}>
                <div className={styles.noGalleryTitle}>{title}</div>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className={styles.modalRight}>
            {/* Header */}
            <div className={styles.modalHeaderBlock}>
              <h2 className={styles.modalProjectTitle}>{title}</h2>
              {subtitle && <p className={styles.modalProjectSubtitle}>{subtitle}</p>}

              {/* ✅ If you ever want clean location, this is coords-free. Currently hidden by default:
                  Uncomment next line if you want it visible.
              */}
              {/* {location && <div className={styles.modalProjectLocation}>{location}</div>} */}

              <div className={styles.projectStats}>
                {stats.map((s, i) => (
                  <div key={i} className={styles.statItem}>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statValue}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className={styles.modalTabs}>
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`${styles.modalTab} ${activeTab === t.id ? styles.modalTabActive : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  {isRTL ? t.ar : t.en}
                </button>
              ))}
            </div>

            {/* ✅ Content grid: Summary = 1fr, Contact = 1fr (as you asked) */}
            <div className={styles.modalContentGrid}>
              <div className={styles.modalCard}>
                {activeTab === "overview" && (
                  <>
                    <div className={styles.modalCardTitle}>{isRTL ? "ملخص" : "Summary"}</div>
                    <p className={styles.modalParagraph}>{description || "—"}</p>

                    <div className={styles.quickGrid}>
                      {price && (
                        <div className={styles.quickItem}>
                          <div className={styles.quickLabel}>{isRTL ? "السعر" : "Price"}</div>
                          <div className={styles.quickValue}>{price}</div>
                        </div>
                      )}
                      {completion && (
                        <div className={styles.quickItem}>
                          <div className={styles.quickLabel}>{isRTL ? "حالة المشروع" : "Project Status"}</div>
                          <div className={styles.quickValue}>{completion}</div>
                        </div>
                      )}
                      {land.developer && (
                        <div className={styles.quickItem}>
                          <div className={styles.quickLabel}>{isRTL ? "المطور" : "Developer"}</div>
                          <div className={styles.quickValue}>{land.developer}</div>
                        </div>
                      )}
                      {area && (
                        <div className={styles.quickItem}>
                          <div className={styles.quickLabel}>{isRTL ? "المساحة" : "Area"}</div>
                          <div className={styles.quickValue}>{area}</div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {activeTab === "details" && (
                  <>
                    <div className={styles.modalCardTitle}>{isRTL ? "تفاصيل المشروع" : "Project Details"}</div>
                    {details.length ? (
                      <ul className={styles.modalList}>
                        {details.map((d, i) => (
                          <li key={i} className={styles.modalListItem}>
                            {d}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className={styles.modalParagraph}>—</p>
                    )}
                  </>
                )}

                {activeTab === "features" && (
                  <>
                    <div className={styles.modalCardTitle}>{isRTL ? "المزايا" : "Features"}</div>
                    {features.length ? (
                      <div className={styles.chips}>
                        {features.map((f, i) => (
                          <span key={i} className={styles.chip}>
                            {f}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className={styles.modalParagraph}>—</p>
                    )}
                  </>
                )}

                {activeTab === "nearby" && (
                  <>
                    <div className={styles.modalCardTitle}>{isRTL ? "بالقرب" : "Nearby"}</div>
                    {nearby.length ? (
                      <div className={styles.nearbyGrid}>
                        {nearby.map((n, i) => (
                          <div key={i} className={styles.nearbyItem}>
                            <div className={styles.nearbyName}>{pickLang(n.name, locale)}</div>
                            <div className={styles.nearbyDistance}>{pickLang(n.distance, locale)}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className={styles.modalParagraph}>—</p>
                    )}
                  </>
                )}
              </div>

              {/* ✅ CTA: MASTERPLAN ONLY (no call/whatsapp/schedule) */}
              <div className={styles.contactSection}>
                <div className={styles.contactTitle}>{isRTL ? "الملفات" : "Files"}</div>

                <div className={styles.contactButtons}>
                  {masterplanUrl ? (
                    <a
                      href={masterplanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.contactButton} ${styles.contactButtonPrimary}`}
                    >
                      {isRTL ? "عرض المخطط العام" : "View Masterplan"}
                    </a>
                  ) : (
                    <div className={styles.brandNote}>
                      {isRTL ? "لا يوجد ملف مخطط عام حالياً." : "No masterplan file available."}
                    </div>
                  )}
                </div>

                {/* optional small note (no emojis) */}
                {masterplanUrl ? (
                  <div className={styles.brandNote}>
                    {isRTL ? "سيتم فتح ملف PDF في نافذة جديدة." : "A PDF will open in a new tab."}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
