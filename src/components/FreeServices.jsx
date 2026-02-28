"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/FreeServices.module.css";

export default function FreeServices() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      step: "01",
      title: "Strategic Project Matching",
      description:
        "We analyze your investment goals and match you with the most suitable off-plan projects in Dubai's premium locations",
      features: [
        "Personalized investment strategy",
        "Market analysis & ROI projections",
        "Developer reputation assessment",
        "Location optimization",
      ],
      benefit: "Get matched with projects that align with your financial goals",
    },
    {
      step: "02",
      title: "Exclusive Unit Reservation",
      description:
        "Skip the queues and secure premium units before public release through our direct developer relationships",
      features: [
        "Pre-launch access to premium units",
        "VIP allocation without competition",
        "Best price guarantee",
        "Flexible payment plans",
      ],
      benefit: "Secure the best units at the best prices",
    },
    {
      step: "03",
      title: "Seamless Transaction Processing",
      description:
        "Complete contract management and ownership transfer with full DLD compliance and legal expertise",
      features: [
        "Contract preparation & review",
        "DLD registration processing",
        "Payment plan coordination",
        "Legal documentation",
      ],
      benefit: "Hassle-free transaction completion",
    },
    {
      step: "04",
      title: "Construction Progress Monitoring",
      description:
        "Regular site visits and progress reports to ensure your investment is developing as planned",
      features: [
        "Monthly progress updates",
        "Site photography & videos",
        "Quality assurance checks",
        "Developer communication",
      ],
      benefit: "Stay informed about your investment progress",
    },
    {
      step: "05",
      title: "Professional Handover Management",
      description:
        "Comprehensive inspection and snagging services to ensure perfect property delivery",
      features: [
        "Quality inspection reports",
        "Defect identification & reporting",
        "Handover coordination",
        "Utility connections",
      ],
      benefit: "Receive your property in perfect condition",
    },
    {
      step: "06",
      title: "Complete Property Management",
      description:
        "End-to-end rental management and maintenance services to maximize your investment returns",
      features: [
        "Tenant sourcing & screening",
        "Rental optimization strategy",
        "Maintenance & repairs",
        "Financial reporting",
      ],
      benefit: "Optimize rental income with zero stress",
    },
  ];

  const achievements = [
    { number: "100+", label: "Properties Successfully Managed" },
    { number: "AED 500M+", label: "Client Portfolio Value" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "9K+", label: "Investors Educated" },
  ];

  return (
    <section
      className={`${styles.servicesSection} ${isVisible ? styles.visible : ""}`}
    >
      {/* Professional Background */}
      <div className={styles.backgroundElements}>
        <div className={styles.architecturalLine}></div>
        <div className={styles.architecturalLine}></div>
        <div className={styles.floatingBadge}></div>
        <div className={styles.floatingBadge}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <div className={styles.titleGroup}>
            <div className={styles.expertBadge}>
              <span>MOHAMAD KODMANE'S</span>
            </div>
            <h1 className={styles.mainTitle}>
              Premium <span className={styles.goldText}>Free</span> Real Estate
              Services
            </h1>
            <p className={styles.subtitle}>
              Experience white-glove real estate service at absolutely no cost.
              As Dubai's trusted real estate expert, I provide comprehensive
              support from property selection to portfolio management, ensuring
              your investment journey is seamless and profitable.
            </p>
          </div>

          {/* Trust Metrics */}
          <div className={styles.trustMetrics}>
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className={styles.metricItem}>
                <div className={styles.metricNumber}>{achievement.number}</div>
                <div className={styles.metricLabel}>{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Services Showcase */}
        <div className={styles.servicesShowcase}>
          <div className={styles.servicesHeader}>
            <h2 className={styles.sectionTitle}>
              Your Complete Investment Journey
            </h2>
            <p className={styles.sectionSubtitle}>
              From initial consultation to property management, every service is
              provided complimentary
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={service.step}
                className={`${styles.serviceCard} ${
                  activeService === index ? styles.active : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceStep}>{service.step}</div>
                  <div className={styles.serviceIndicator}>
                    <div className={styles.indicatorDot}></div>
                    <div className={styles.indicatorLine}></div>
                  </div>
                </div>

                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>

                  <div className={styles.serviceFeatures}>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={styles.featureItem}>
                        <div className={styles.featureCheck}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.serviceBenefit}>
                    <div className={styles.benefitIcon}>→</div>
                    <span>{service.benefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className={styles.valueProposition}>
          <div className={styles.valueContainer}>
            <div className={styles.valueContent}>
              <div className={styles.valueBadge}>WHY CHOOSE OUR SERVICES</div>
              <h2 className={styles.valueTitle}>
                Beyond Traditional Real Estate
              </h2>
              <p className={styles.valueDescription}>
                While other agents charge for basic services, we provide premium
                expertise at no cost because we believe in building long-term
                relationships through exceptional results.
              </p>

              <div className={styles.valuePoints}>
                <div className={styles.valuePoint}>
                  <div className={styles.pointIcon}>✓</div>
                  <div className={styles.pointContent}>
                    <h4>DLD Certified Expertise</h4>
                    <p>Fully licensed and regulated by Dubai Land Department</p>
                  </div>
                </div>
                <div className={styles.valuePoint}>
                  <div className={styles.pointIcon}>✓</div>
                  <div className={styles.pointContent}>
                    <h4>Market Intelligence</h4>
                    <p>
                      Access to off-market opportunities and premium
                      developments
                    </p>
                  </div>
                </div>
                <div className={styles.valuePoint}>
                  <div className={styles.pointIcon}>✓</div>
                  <div className={styles.pointContent}>
                    <h4>Proven Track Record</h4>
                    <p>100+ successful transactions with satisfied investors</p>
                  </div>
                </div>
                <div className={styles.valuePoint}>
                  <div className={styles.pointIcon}>✓</div>
                  <div className={styles.pointContent}>
                    <h4>Lifetime Support</h4>
                    <p>Ongoing portfolio management and investment guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaBadge}>START YOUR JOURNEY TODAY</div>
              <h2 className={styles.ctaTitle}>
                Ready to Invest in Dubai with Confidence?
              </h2>
              <p className={styles.ctaDescription}>
                Join hundreds of satisfied investors who trust Mohamad Kodmane
                for their Dubai real estate journey. From strategic property
                selection to complete management, we handle every detail while
                you focus on growing your wealth.
              </p>

              <div className={styles.ctaBenefits}>
                <div className={styles.ctaBenefit}>
                  <div className={styles.benefitMarker}></div>
                  <span>Zero Service Fees - Ever</span>
                </div>
                <div className={styles.ctaBenefit}>
                  <div className={styles.benefitMarker}></div>
                  <span>Direct Access to Mohamad</span>
                </div>
                <div className={styles.ctaBenefit}>
                  <div className={styles.benefitMarker}></div>
                  <span>Full Transparency Guaranteed</span>
                </div>
                <div className={styles.ctaBenefit}>
                  <div className={styles.benefitMarker}></div>
                  <span>Lifetime Investment Support</span>
                </div>
              </div>

              <div className={styles.ctaActions}>
                <a
                  href="https://wa.me/message/AHLCIZILK45JH1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryCTA}
                >
                  <span className={styles.ctaIcon}>💬</span>
                  Start Free Consultation on WhatsApp
                </a>
                <a href="tel:+971500000000" className={styles.secondaryCTA}>
                  <span className={styles.ctaIcon}>📞</span>
                  Call Directly for Immediate Assistance
                </a>
              </div>

              <div className={styles.trustIndicators}>
                <div className={styles.trustItem}>
                  <div className={styles.trustDot}></div>
                  <span>DLD Certified Professional</span>
                </div>
                <div className={styles.trustItem}>
                  <div className={styles.trustDot}></div>
                  <span>9K+ YouTube Community</span>
                </div>
                <div className={styles.trustItem}>
                  <div className={styles.trustDot}></div>
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className={styles.signatureSection}>
          <div className={styles.signatureLine}></div>
          <div className={styles.signatureContent}>
            <div className={styles.expertName}>Mohamad Kodmane</div>
            <div className={styles.expertTitle}>Dubai Real Estate Expert</div>
          </div>
          <div className={styles.signatureLine}></div>
        </div>
      </div>
    </section>
  );
}
