"use client";
import React from "react";
import styles from "@/styles/AboutMohamadKodmane.module.css";
import Image from "next/image";

export default function AboutMohamadKodmane() {
  return (
    <section className={styles.aboutSection}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.sectionIndicator}>
            <span>About Mohamad Kodmane</span>
            <div className={styles.indicatorLine}></div>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                I Find Properties That Make You{" "}
                <span className={styles.highlight}>15-30% Returns</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Real Estate Investment Expert • 100+ Deals Closed • DLD
                Certified
              </p>

              {/* What I Do */}
              <div className={styles.whatIDo}>
                <div className={styles.doItem}>
                  <div className={styles.doIcon}>🎯</div>
                  <div className={styles.doContent}>
                    <strong>What I Do:</strong>
                    <span>Find high-profit properties before others</span>
                  </div>
                </div>
                <div className={styles.doItem}>
                  <div className={styles.doIcon}>💰</div>
                  <div className={styles.doContent}>
                    <strong>For:</strong>
                    <span>Investors who want consistent returns</span>
                  </div>
                </div>
                <div className={styles.doItem}>
                  <div className={styles.doIcon}>📈</div>
                  <div className={styles.doContent}>
                    <strong>Result:</strong>
                    <span>15-30% annual returns guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Trust Numbers */}
              <div className={styles.trustNumbers}>
                <div className={styles.number}>
                  <strong>AED 500M+</strong>
                  <span>Client Wealth Generated</span>
                </div>
                <div className={styles.number}>
                  <strong>100+</strong>
                  <span>Successful Deals</span>
                </div>
                <div className={styles.number}>
                  <strong>0</strong>
                  <span>Client Complaints</span>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className={styles.photo}>
              <div className={styles.imageBox}>
                <Image
                  src="/owner-hero.png"
                  alt="Mohamad Kodmane - Dubai Real Estate Investment Expert"
                  fill
                  className={styles.image}
                  priority
                />
                <div className={styles.badges}>
                  <div className={styles.badge}>🏛️ DLD Certified Expert</div>
                  <div className={styles.badge}>⭐ 100+ Deals Closed</div>
                  <div className={styles.badge}>📈 15-30% Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How I Make You Money */}
      <div className={styles.moneySection}>
        <div className={styles.container}>
          <div className={styles.sectionIndicator}>
            <span>My Investment Strategy</span>
            <div className={styles.indicatorLine}></div>
          </div>

          <h2 className={styles.sectionTitle}>
            How I Deliver{" "}
            <span className={styles.highlight}>15-30% Returns</span>
          </h2>

          <div className={styles.moneyGrid}>
            <div className={styles.moneyCard}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>🔍</div>
                <div className={styles.resultBadge}>RESULT: Higher Profits</div>
              </div>
              <h3>Exclusive Deal Finding</h3>
              <p>
                I find off-market properties before they hit public listings
              </p>
              <div className={styles.whatResult}>
                <strong>→ You Get:</strong> First access to premium deals
              </div>
            </div>

            <div className={styles.moneyCard}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>📊</div>
                <div className={styles.resultBadge}>RESULT: Perfect Timing</div>
              </div>
              <h3>Data-Driven Timing</h3>
              <p>Buy at market bottoms, sell at peaks using analytics</p>
              <div className={styles.whatResult}>
                <strong>→ You Get:</strong> Maximum profit from each deal
              </div>
            </div>

            <div className={styles.moneyCard}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>🛡️</div>
                <div className={styles.resultBadge}>RESULT: Zero Risk</div>
              </div>
              <h3>Full Protection</h3>
              <p>DLD-certified transactions with complete transparency</p>
              <div className={styles.whatResult}>
                <strong>→ You Get:</strong> Safe, legal investments
              </div>
            </div>

            <div className={styles.moneyCard}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>⚡</div>
                <div className={styles.resultBadge}>RESULT: Faster Returns</div>
              </div>
              <h3>Quick Execution</h3>
              <p>Move fast to secure opportunities before prices rise</p>
              <div className={styles.whatResult}>
                <strong>→ You Get:</strong> Money working for you immediately
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Results */}
      <div className={styles.resultsSection}>
        <div className={styles.container}>
          <div className={styles.sectionIndicator}>
            <span>Proven Track Record</span>
            <div className={styles.indicatorLine}></div>
          </div>

          <h2 className={styles.sectionTitle}>
            Real Clients,{" "}
            <span className={styles.highlight}>Real Money Made</span>
          </h2>

          <div className={styles.results}>
            <div className={styles.result}>
              <div className={styles.resultHeader}>
                <div className={styles.resultIcon}>💰</div>
                <div className={styles.resultTag}>PROFIT: 32%</div>
              </div>
              <strong>Palm Jumeirah Villa</strong>
              <span>Off-plan purchase • 14 months</span>
              <div className={styles.clientQuote}>
                "Mohamad found this deal before anyone else knew about it"
              </div>
            </div>

            <div className={styles.result}>
              <div className={styles.resultHeader}>
                <div className={styles.resultIcon}>📈</div>
                <div className={styles.resultTag}>PROFIT: AED 2.1M</div>
              </div>
              <strong>Downtown Dubai Apartment</strong>
              <span>Strategic flip • 2 years</span>
              <div className={styles.clientQuote}>
                "Perfect timing - bought low, sold at peak market"
              </div>
            </div>

            <div className={styles.result}>
              <div className={styles.resultHeader}>
                <div className={styles.resultIcon}>🏠</div>
                <div className={styles.resultTag}>INCOME: 18% yearly</div>
              </div>
              <strong>Business Bay Commercial</strong>
              <span>Rental property • Ongoing</span>
              <div className={styles.clientQuote}>
                "Consistent rental income plus property appreciation"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionIndicator}>
            <span>Start Earning Now</span>
            <div className={styles.indicatorLine}></div>
          </div>

          <div className={styles.contactBox}>
            <h2>
              Ready to Get Your{" "}
              <span className={styles.highlight}>15-30% Returns?</span>
            </h2>
            <p>Stop watching others make money. Start earning today.</p>

            <div className={styles.finalResults}>
              <div className={styles.finalResult}>
                <strong>What I Do:</strong>
                <span>Find you high-profit Dubai properties</span>
              </div>
              <div className={styles.finalResult}>
                <strong>For:</strong>
                <span>Serious investors ready to earn</span>
              </div>
              <div className={styles.finalResult}>
                <strong>Result:</strong>
                <span>15-30% returns on your investment</span>
              </div>
            </div>

            <div className={styles.contactButtons}>
              <a
                href="https://wa.me/971568888906?text=I%20want%2015-30%%20returns%20on%20my%20investment"
                className={styles.whatsappButton}
              >
                💬 Get My Free Investment Plan
              </a>
              <a
                href="https://www.youtube.com/@Mohamad.Kodmane"
                className={styles.youtubeButton}
              >
                ▶️ See How It Works
              </a>
            </div>

            <div className={styles.guarantee}>
              <strong>
                ✅ DLD Certified • ✅ 100% Transparent • ✅ Proven Results
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
