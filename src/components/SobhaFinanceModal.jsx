"use client";

import { useEffect } from "react";
import styles from "./SobhaFinanceModal.module.css";

export default function SobhaFinanceModal({ open, onClose }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>

        <div className={styles.header}>
          <span className={styles.badge}>New Partnership</span>
          <h1>Off-Plan Home Financing</h1>
          <p>
            A first-of-its-kind collaboration between{" "}
            <strong>Sobha Realty</strong> and
            <strong> Abu Dhabi Islamic Bank (ADIB)</strong>.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>✔ Sharia-Compliant</h3>
            <p>Ethical Islamic financing aligned with ADIB standards.</p>
          </div>

          <div className={styles.card}>
            <h3>✔ Finance at 35%</h3>
            <p>Eligibility once construction reaches just 35%.</p>
          </div>

          <div className={styles.card}>
            <h3>✔ Sobha-Only</h3>
            <p>Available exclusively on Sobha off-plan developments.</p>
          </div>
        </div>

        <div className={styles.ctaWrap}>
          <button className={styles.primary}>Explore Sobha Projects</button>
          <button className={styles.secondary} onClick={onClose}>
            Continue to Website
          </button>
        </div>
      </div>
    </div>
  );
}
