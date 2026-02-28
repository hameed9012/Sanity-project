"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/styles/OfferLaunchModal.module.css";

const STORAGE_KEY = "mk_damac_dsf_offer_seen_v1";

// Offer expires end of day (local time)
function endOfDayLocal(dateStr) {
  const [y, m, d] = String(dateStr).split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d, 23, 59, 59, 999);
}

export default function DamacOfferOnceModal({
  // ✅ configurable
  expiresAt = "2026-01-31",
  contactHref = "/contact-us",
  showOnPaths = ["/", "/en", "/ar"],
  storageKey = STORAGE_KEY,

  // ✅ your two images
  topTicketSrc = "/damac-offer-expiration.jpeg",
  posterSrc = "/damac-offer.jpeg",
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
      new URLSearchParams(window.location.search).get("offer") === "1";
    const seen = localStorage.getItem(storageKey) === "1";

    if (force || !seen) {
      const t = setTimeout(() => setOpen(true), 260);
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
    router.push(contactHref);
  };

  const formattedExpiry = useMemo(() => {
    // show "31 Jan 2026"
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
      aria-label="Limited time offer"
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
            <div className={styles.ticketWrap}>
              <div className={styles.ticketFrame}>
                <Image
                  src={topTicketSrc}
                  alt="Offer expiry ticket"
                  fill
                  priority
                  sizes="(max-width: 980px) 92vw, 520px"
                  className={styles.ticketImg}
                />
              </div>

              <div className={styles.badgesRow}>
                <span className={styles.badge}>EXCLUSIVE OFFER</span>
                <span className={styles.expiry}>
                  Expires: <strong>{formattedExpiry}</strong>
                </span>
              </div>
            </div>

            <div className={styles.headline}>
              <div className={styles.kicker}>
                Dubai Shopping Festival • DAMAC
              </div>
              <h2 className={styles.title}>
                <span className={styles.titleStrong}>4% DLD</span> Fee Waiver
                <span className={styles.titleSub}>or 40/60 Payment Plan</span>
              </h2>
              <p className={styles.desc}>
                Limited-time savings on selected DAMAC apartments. Tap below and
                we’ll share availability, prices, and unit options.
              </p>
            </div>

            <div className={styles.featureRow}>
              <div className={styles.featureCard}>
                <div className={styles.featureNum}>4%</div>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>DLD Fee Waiver</div>
                  <div className={styles.featureSub}>On selected projects</div>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureNum}>40/60</div>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Payment Plan</div>
                  <div className={styles.featureSub}>With 20% down payment</div>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.primary} onClick={goContact}>
                Contact Us Now
                <span className={styles.primaryGlow} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* RIGHT POSTER */}
          <div className={styles.right} aria-hidden="true">
            <div className={styles.posterFrame}>
              <Image
                src={posterSrc}
                alt="Offer poster"
                fill
                priority
                sizes="(max-width: 980px) 92vw, 560px"
                className={styles.posterImg}
              />
              <div className={styles.posterVignette} />
              <div className={styles.posterGlass} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
