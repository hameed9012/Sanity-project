"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/HappyNewYearCelebration.module.css";

export default function HappyNewYearCelebration() {
  const [isVisible, setIsVisible] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  // Check if we should show the celebration
  useEffect(() => {
    const now = new Date();
    const isDecember = now.getMonth() === 11; // December
    const isJanuary = now.getMonth() === 0; // January

    // Show from Dec 20 to Jan 15
    if (
      (isDecember && now.getDate() >= 20) ||
      (isJanuary && now.getDate() <= 15)
    ) {
      const hasSeen = sessionStorage.getItem("ny2026_seen");

      // Show after 3 seconds on first visit
      if (!hasSeen) {
        const timer = setTimeout(() => {
          setIsVisible(true);
          setConfettiActive(true);
          sessionStorage.setItem("ny2026_seen", "true");
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleManualTrigger = () => {
    setIsVisible(true);
    setConfettiActive(true);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={styles.celebrationOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Confetti */}
            {confettiActive && (
              <div className={styles.confettiContainer}>
                {Array.from({ length: 100 }).map((_, i) => (
                  <div
                    key={i}
                    className={styles.confettiPiece}
                    style={{
                      "--delay": `${Math.random() * 2}s`,
                      "--duration": `${Math.random() * 3 + 2}s`,
                      "--color": `var(--gold-${
                        Math.floor(Math.random() * 3) + 1
                      })`,
                      "--x": `${Math.random() * 100}vw`,
                      "--size": `${Math.random() * 12 + 6}px`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Gold glitter overlay */}
            <div className={styles.goldGlitter} />

            {/* Main celebration card */}
            <motion.div
              className={styles.celebrationCard}
              initial={{ y: 50, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Close button */}
              <button
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Close celebration"
              >
                ✕
              </button>

              {/* Year display */}
              <div className={styles.yearContainer}>
                <div className={styles.yearNumber}>2026</div>
                <div className={styles.yearText}>A New Era Begins</div>
              </div>

              {/* Main message */}
              <div className={styles.messageContainer}>
                <div className={styles.greeting}>
                  <span className={styles.word}>Happy</span>
                  <span className={styles.word}>New</span>
                  <span className={styles.word}>Year</span>
                </div>

                <div className={styles.subGreeting}>
                  Wishing You Prosperity & Success
                </div>

                <div className={styles.brandMessage}>
                  May 2026 bring you exceptional opportunities
                  <br />
                  and remarkable real estate achievements
                </div>
              </div>

              {/* Luxury ornaments */}
              <div className={styles.ornaments}>
                <div className={styles.ornament}>🏛️</div>
                <div className={styles.ornament}>🏢</div>
                <div className={styles.ornament}>🏘️</div>
                <div className={styles.ornament}>🌟</div>
              </div>

              {/* CTA */}
              <div className={styles.ctaContainer}>
                {/* <button className={styles.ctaButton} onClick={handleClose}>
                  Explore 2026 Opportunities
                </button> */}
                <div className={styles.ctaHint}>
                  Your year of growth starts now
                </div>
              </div>

              {/* Signature */}
              <div className={styles.signature}>
                — Mohamad Kodmani Real Estate
              </div>
            </motion.div>

            {/* Celebration hint */}
            <div className={styles.celebrationHint}>
              Press ESC or click outside to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Manual trigger button - appears on all pages during holiday season */}
      <motion.button
        className={styles.triggerButton}
        onClick={handleManualTrigger}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Celebrate New Year"
      >
        🎉 2026
      </motion.button>
    </>
  );
}
