import React from "react";
import styles from "@/styles/developer/StatBox.module.css";

function StatBox({ label, value }) {
  if (!value) return null;

  return (
    <div className={styles.statBox}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default StatBox;
