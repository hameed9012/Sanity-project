// components/SobhaOfferModal.js
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/styles/SobhaOfferModal.module.css";

const STORAGE_KEY = "mk_sobha_adib_offer_seen_v1";

// Offer expires end of day (local time)
function endOfDayLocal(dateStr) {
  const [y, m, d] = String(dateStr).split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d, 23, 59, 59, 999);
}

export default function SobhaOfferModal({
  // ✅ configurable
  expiresAt = "2026-02-28",
  contactHref = "/contact-us",
  showOnPaths = ["/", "/en", "/ar"],
  storageKey = STORAGE_KEY,

  // ✅ project info
  projectName = "Sobha Sanctuary",
  projectLocation = "The Valley, Dubai",
  startingPrice = "AED 3,995,908",
  handover = "Q3 2029",
  unitType = "4 & 5 Bedroom Luxury Villas",

  // ✅ your images
  partnershipImage = "/whatsapp-image-2026-01-30-at-14.38.43.jpeg", // The ADIB partnership announcement
  projectImage = "/sobha-sanctuary-hero.jpg", // Sobha Sanctuary hero image
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const expiry = useMemo(() => endOfDayLocal(expiresAt), [expiresAt]);

  const shouldShowHere = useMemo(() => {
    if (!pathname) return false;
    return showOnPaths.includes(pathname);
  }, [pathname, showOnPaths]);

  const isExpired = useMemo(() => {
    if (!expiry) return false;
    return Date.now() > expiry.getTime();
  }, [expiry]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (!shouldShowHere) return;
    if (isExpired) return;

    const force =
      new URLSearchParams(window.location.search).get("sobha_offer") === "1";
    const seen = localStorage.getItem(storageKey) === "1";

    if (force || !seen) {
      const t = setTimeout(() => setOpen(true), 1000);
      return () => clearTimeout(t);
    }
  }, [mounted, shouldShowHere, isExpired, storageKey]);

  // lock scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC to close (and mark seen)
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") markSeenAndClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const markSeen = () => {
    try {
      localStorage.setItem(storageKey, "1");
    } catch {}
  };

  const markSeenAndClose = () => {
    markSeen();
    setOpen(false);
  };

  const goContact = () => {
    markSeen();
    setOpen(false);
    router.push(`${contactHref}?project=sobha-sanctuary&offer=adib-financing`);
  };

  const formattedExpiry = useMemo(() => {
    // show "28 Feb 2026"
    const d = String(expiresAt || "").split("-");
    if (d.length !== 3) return expiresAt;
    const [yy, mm, dd] = d;
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const m = months[Math.max(0, Math.min(11, Number(mm) - 1))];
    return `${dd} ${m} ${yy}`;
  }, [expiresAt]);

  if (!mounted || !open || !shouldShowHere || isExpired) return null;

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => e.target === e.currentTarget && markSeenAndClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Sobha Sanctuary ADIB Financing Offer"
    >
      <div className={styles.modal}>
        {/* close */}
        <button
          className={styles.closeBtn}
          onClick={markSeenAndClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* luxury glow layers */}
        <div className={styles.auras} aria-hidden="true" />
        <div className={styles.noise} aria-hidden="true" />

        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <div className={styles.left}>
            {/* Partnership Badge */}
            <div className={styles.partnershipBadge}>
              <div className={styles.badgeIcon}>🤝</div>
              <div className={styles.badgeContent}>
                <div className={styles.badgeTitle}>EXCLUSIVE PARTNERSHIP</div>
                <div className={styles.badgeSub}>SOBHA REALTY × ADIB</div>
              </div>
            </div>

            <div className={styles.headline}>
              <div className={styles.kicker}>
                HISTORIC FINANCING BREAKTHROUGH
              </div>
              <h2 className={styles.title}>
                <span className={styles.titleStrong}>Sobha Sanctuary</span>
                <span className={styles.titleSub}>
                  Now with ADIB Off-Plan Financing
                </span>
              </h2>
              <p className={styles.desc}>
                For the first time ever, ADIB offers Sharia-compliant home
                finance after just <strong>35% completion</strong> on
                Sobha&apos;s off-plan properties. Secure your villa in The
                Valley with unprecedented early financing access.
              </p>
            </div>

            {/* Partnership Image */}
            <div className={styles.partnershipImageWrap}>
              <div className={styles.imageContainer}>
                <Image
                  src={partnershipImage}
                  alt="Sobha Realty and ADIB Partnership Announcement"
                  fill
                  priority
                  sizes="(max-width: 980px) 92vw, 520px"
                  className={styles.partnershipImg}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Project Highlights */}
            <div className={styles.projectHighlights}>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🏠</div>
                <div className={styles.highlightContent}>
                  <div className={styles.highlightTitle}>{projectName}</div>
                  <div className={styles.highlightDetail}>
                    {projectLocation}
                  </div>
                </div>
              </div>

              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>💰</div>
                <div className={styles.highlightContent}>
                  <div className={styles.highlightTitle}>
                    From {startingPrice}
                  </div>
                  <div className={styles.highlightDetail}>{unitType}</div>
                </div>
              </div>

              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>📅</div>
                <div className={styles.highlightContent}>
                  <div className={styles.highlightTitle}>
                    Handover {handover}
                  </div>
                  <div className={styles.highlightDetail}>
                    Early Financing at 35%
                  </div>
                </div>
              </div>
            </div>

            {/* ADIB Benefits */}
            <div className={styles.benefitsSection}>
              <h3 className={styles.benefitsTitle}>
                ADIB Financing Advantages:
              </h3>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>🕌</div>
                  <div className={styles.benefitText}>
                    Sharia-compliant financing
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>⚡</div>
                  <div className={styles.benefitText}>
                    Early access at 35% completion
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>🏆</div>
                  <div className={styles.benefitText}>
                    Trusted bank partnership
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>📈</div>
                  <div className={styles.benefitText}>
                    Reduced entry barrier
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.actions}>
              <button className={styles.primary} onClick={goContact}>
                <span className={styles.buttonText}>
                  Secure Your Villa with ADIB Financing
                </span>
                <span className={styles.buttonSub}>Limited time offer</span>
                <span className={styles.primaryGlow} aria-hidden="true" />
              </button>
              <div className={styles.offerExpiry}>
                🔥 Offer ends: <strong>{formattedExpiry}</strong>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Project Visual */}
          <div className={styles.right}>
            <div className={styles.projectVisual}>
              {/* Project Hero Image */}
              <div className={styles.projectImageContainer}>
                <Image
                  src={projectImage}
                  alt={`${projectName} - ${projectLocation}`}
                  fill
                  priority
                  sizes="(max-width: 980px) 92vw, 560px"
                  className={styles.projectImg}
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectTitle}>{projectName}</div>
                  <div className={styles.projectSubtitle}>by Sobha Realty</div>
                </div>
                <div className={styles.projectVignette} />
              </div>

              {/* Project Features */}
              <div className={styles.projectFeatures}>
                <div className={styles.feature}>
                  <span className={styles.featureLabel}>Project:</span>
                  <span className={styles.featureValue}>{projectName}</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureLabel}>Location:</span>
                  <span className={styles.featureValue}>{projectLocation}</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureLabel}>Starting Price:</span>
                  <span className={styles.featureValue}>{startingPrice}</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureLabel}>Units:</span>
                  <span className={styles.featureValue}>{unitType}</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureLabel}>Handover:</span>
                  <span className={styles.featureValue}>{handover}</span>
                </div>
                <div className={styles.featureHighlight}>
                  <span className={styles.featureIcon}>🎯</span>
                  <span className={styles.featureHighlightText}>
                    ADIB Financing Available
                  </span>
                </div>
              </div>

              {/* ADIB Logo Section */}
              <div className={styles.adibSection}>
                <div className={styles.adibBadge}>
                  <div className={styles.adibIcon}>🏦</div>
                  <div className={styles.adibContent}>
                    <div className={styles.adibTitle}>Powered by ADIB</div>
                    <div className={styles.adibSub}>Abu Dhabi Islamic Bank</div>
                  </div>
                </div>
                <p className={styles.adibDescription}>
                  Trusted Sharia-compliant financing now available for
                  Sobha&apos;s off-plan projects through our exclusive
                  partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
