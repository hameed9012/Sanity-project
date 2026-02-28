"use client";
import React from "react";
import styles from "@/styles/MissionVision.module.css";

export default function MissionVision() {
  return (
    <section className={styles.missionVision}>
      <div className={styles.backgroundElements}>
        <div className={styles.goldOrb}></div>
        <div className={styles.diamondGrid}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            My <span className={styles.accent}>Mission</span> &{" "}
            <span className={styles.accent}>Vision</span>
          </h2>
          <div className={styles.titleDivider}></div>
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          {/* Mission */}
          <div className={styles.missionCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <div className={styles.crownIcon}>🎯</div>
              </div>
              <h3 className={styles.cardTitle}>Mission</h3>
            </div>

            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                To empower investors with strategic real estate opportunities in
                Dubai, where{" "}
                <span className={styles.highlight}>off-plan investments</span>{" "}
                meet{" "}
                <span className={styles.highlight}>
                  long-term wealth creation
                </span>
                . Every partnership is built on trust, transparency, and
                delivering exceptional returns.
              </p>

              <div className={styles.missionPoints}>
                <div className={styles.point}>
                  <span className={styles.pointIcon}>✓</span>
                  <span>
                    Guide investors through off-plan property purchases with
                    confidence
                  </span>
                </div>
                <div className={styles.point}>
                  <span className={styles.pointIcon}>✓</span>
                  <span>
                    Build diversified real estate portfolios for optimal returns
                  </span>
                </div>
                <div className={styles.point}>
                  <span className={styles.pointIcon}>✓</span>
                  <span>
                    Create lasting wealth partnerships, not transactional
                    relationships
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className={styles.visionCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <div className={styles.visionIcon}>🚀</div>
              </div>
              <h3 className={styles.cardTitle}>Vision</h3>
            </div>

            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                To become Dubai's most trusted real estate investment
                strategist—transforming
                <span className={styles.highlight}> properties</span> into{" "}
                <span className={styles.highlight}>
                  wealth-generating assets
                </span>{" "}
                for investors who demand excellence and substantial returns.
              </p>

              <div className={styles.visionAspirations}>
                <div className={styles.aspiration}>
                  <div className={styles.aspirationNumber}>01</div>
                  <div className={styles.aspirationText}>
                    Set the benchmark for personalized real estate investment
                    advisory in Dubai.
                  </div>
                </div>
                <div className={styles.aspiration}>
                  <div className={styles.aspirationNumber}>02</div>
                  <div className={styles.aspirationText}>
                    Create comprehensive wealth ecosystems for forward-thinking
                    investors.
                  </div>
                </div>
                <div className={styles.aspiration}>
                  <div className={styles.aspirationNumber}>03</div>
                  <div className={styles.aspirationText}>
                    Elevate Dubai's status as the world's premier real estate
                    investment destination.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className={styles.philosophy}>
          <div className={styles.philosophyContent}>
            <h4 className={styles.philosophyTitle}>Investment Philosophy</h4>
            <p className={styles.philosophyText}>
              "True wealth isn't just about acquiring properties—it's about
              strategic investments that generate consistent returns. Every
              client deserves clarity, exclusive opportunities, and results that
              exceed expectations."
            </p>
            <div className={styles.signature}>— Mohamad Kodmane</div>
          </div>
        </div>
      </div>
    </section>
  );
}
