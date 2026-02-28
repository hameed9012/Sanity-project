"use client";
import React from "react";
import styles from "@/styles/CoreValues.module.css";

export default function CoreValues() {
  const values = [
    {
      icon: "💰",
      title: "Performance-Based Partnership",
      description:
        "My compensation is directly tied to your investment returns. No returns, no fees.",
      metric: "AED 500M+",
      metricLabel: "Client Wealth Generated",
    },
    {
      icon: "📊",
      title: "Data-Driven Decisions",
      description:
        "Every investment is backed by market analytics, not opinions or sales pitches.",
      metric: "100+",
      metricLabel: "Successful Deals",
    },
    {
      icon: "🛡️",
      title: "Full Transparency",
      description:
        "Complete financial visibility. No hidden fees, no surprises, ever.",
      metric: "0",
      metricLabel: "Client Complaints",
    },
    {
      icon: "⚡",
      title: "Execution Excellence",
      description:
        "We move faster and smarter to secure premium opportunities before competitors.",
      metric: "4+",
      metricLabel: "Years Track Record",
    },
  ];

  return (
    <section className={styles.coreValues}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Investment Principles</h2>
          <p className={styles.subtitle}>
            The foundation of every successful partnership
          </p>
        </div>

        {/* Values Grid */}
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.cardContent}>
                <div className={styles.valueHeader}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <div className={styles.valueMetric}>
                    <div className={styles.metricNumber}>{value.metric}</div>
                    <div className={styles.metricLabel}>
                      {value.metricLabel}
                    </div>
                  </div>
                </div>

                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
