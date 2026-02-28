"use client";

import { useMemo, useState } from "react";
import styles from "./AddPropertyTabContent.module.css";

import PropertyDescription from "./property-description";
import UploadMedia from "./upload-media";
import LocationField from "./LocationField";
import DetailsFiled from "./details-field";
import Amenities from "./Amenities";

export default function AddPropertyTabContent() {
  const tabs = useMemo(
    () => [
      { key: "desc", label: "1. Description", node: <PropertyDescription /> },
      { key: "media", label: "2. Media", node: <UploadMedia /> },
      { key: "location", label: "3. Location", node: <LocationField /> },
      { key: "detail", label: "4. Detail", node: <DetailsFiled /> },
      { key: "amenities", label: "5. Amenities", node: <Amenities /> },
    ],
    []
  );

  const [active, setActive] = useState(tabs[0].key);
  const activeTab = tabs.find((t) => t.key === active);

  return (
    <div className={styles.root}>
      {/* Tabs header */}
      <div
        className={styles.tabRow}
        role="tablist"
        aria-label="Add Property Steps"
      >
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={active === t.key}
            className={`${styles.tabBtn} ${
              active === t.key ? styles.active : ""
            }`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={styles.panel} role="tabpanel">
        {/* Optional: keep the same “white card” look */}
        <div className={styles.card}>
          {activeTab?.key === "desc" && (
            <h4 className={styles.cardTitle}>Property Description</h4>
          )}
          {activeTab?.key === "location" && (
            <h4 className={styles.cardTitle}>Listing Location</h4>
          )}
          {activeTab?.key === "detail" && (
            <h4 className={styles.cardTitle}>Listing Details</h4>
          )}
          {activeTab?.key === "amenities" && (
            <h4 className={styles.cardTitle}>Select Amenities</h4>
          )}

          <div className={styles.cardBody}>{activeTab?.node}</div>
        </div>
      </div>
    </div>
  );
}
