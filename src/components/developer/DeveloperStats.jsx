// src/components/developer/DeveloperStats.jsx
"use client";

import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/developer/DeveloperStats.module.css";
import { useLanguage } from "@/components/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

function getTObject(t, key) {
  if (!t) return null;
  try {
    const v = t(key, { returnObjects: true });
    if (!v || v === key) return null;
    if (typeof v === "string") return null;
    return v;
  } catch {
    return null;
  }
}

function safeT(t, key, fallback, values) {
  try {
    const v = t?.(key, values);
    if (v === undefined || v === null || v === "" || v === key) return fallback;
    return v;
  } catch {
    return fallback;
  }
}

// Default logos - EXACTLY THE SAME AS IN developers-2/page.jsx
function getDefaultLogo(slug) {
  const logoMap = {
    sobha: "/Sobha-Realty-Square-Logo.jpg",
    arada:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/arada.avif",
    damac: "/damac-logo.png",
    azizi:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/azizi.jpg",
    omniyat:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/omniyat.png",
    danube:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png",
    "gulf-land-property":
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gulf.png",
    gfs: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png",
    binghatti:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif",
    samana:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Samana.png",
    "ajmal-makan":
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png",
    ellington:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png",
    imtiaz:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png",
    tiger:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png",
    reportage:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/reportage.png",
    taraf:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/taraf.webp",
    "prestige-one":
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png",
    evolutions:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/evolutions.jpg",
    beyond:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/beyond.webp",
    lazord:
      "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/lazord-logo.webp",
  };
  return logoMap[slug] || "/default-logo.png";
}

// Helper to detect logo type for CSS classes
const detectLogoType = (logoUrl) => {
  if (!logoUrl) return "default";
  const url = logoUrl.toLowerCase();

  if (
    url.includes("white") ||
    url.includes("light") ||
    url.includes("bright") ||
    url.includes("negative") ||
    url.includes("wht")
  ) {
    return "whiteLogo";
  }

  if (
    url.includes("black") ||
    url.includes("dark") ||
    url.includes("drk") ||
    url.includes("blk")
  ) {
    return "blackLogo";
  }

  if (
    url.includes("transparent") ||
    url.includes("png") ||
    url.includes("trans") ||
    url.includes("clear")
  ) {
    return "transparentLogo";
  }

  return "default";
};

export default function DeveloperStats({ developer }) {
  const { t, locale } = useLanguage();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tileRefs = useRef([]);

  const addTileRef = (el) => {
    if (el && !tileRefs.current.includes(el)) tileRefs.current.push(el);
  };

  // ✅ Pull JSON profile for this developer
  const profileKey = developer?.slug ? String(developer.slug) : "";
  const profile = useMemo(() => {
    if (!profileKey) return null;
    return getTObject(t, `developerProfiles.${profileKey}`);
  }, [t, profileKey]);

  // ✅ Build tiles from JSON first
  const tiles = useMemo(() => {
    const list = [];

    const inv = profile?.projectsInventory || null;
    const perf = profile?.performance || null;

    // Inventory
    const underConstructionProjects = inv?.underConstruction?.projects;
    const underConstructionUnits = inv?.underConstruction?.units;
    const completedProjects = inv?.completed?.projects;
    const completedUnits = inv?.completed?.units;

    if (underConstructionProjects != null) {
      list.push({
        key: "uc_projects",
        label: safeT(
          t,
          "developerStats.labels.underConstructionProjects",
          "Under Construction (Projects)"
        ),
        value: `${underConstructionProjects}`,
      });
    }
    if (underConstructionUnits != null) {
      list.push({
        key: "uc_units",
        label: safeT(
          t,
          "developerStats.labels.underConstructionUnits",
          "Under Construction (Units)"
        ),
        value: `${underConstructionUnits}`,
      });
    }
    if (completedProjects != null) {
      list.push({
        key: "c_projects",
        label: safeT(
          t,
          "developerStats.labels.completedProjects",
          "Completed (Projects)"
        ),
        value: `${completedProjects}`,
      });
    }
    if (completedUnits != null) {
      list.push({
        key: "c_units",
        label: safeT(
          t,
          "developerStats.labels.completedUnits",
          "Completed (Units)"
        ),
        value: `${completedUnits}`,
      });
    }

    // Performance stats (strings from JSON)
    const perfStats = perf?.stats || {};
    const transactions = perfStats?.transactions;
    const totalValue = perfStats?.totalValue;
    const capitalGains = perfStats?.capitalGains;

    if (transactions) {
      list.push({
        key: "transactions",
        label: safeT(t, "developerStats.labels.transactions", "Transactions"),
        value: transactions,
      });
    }
    if (totalValue) {
      list.push({
        key: "totalValue",
        label: safeT(t, "developerStats.labels.totalValue", "Total Value"),
        value: totalValue,
      });
    }
    if (capitalGains) {
      list.push({
        key: "capitalGains",
        label: safeT(t, "developerStats.labels.capitalGains", "Capital Gains"),
        value: capitalGains,
      });
    }

    // ✅ Fallback to old developer.stats if JSON tiles empty
    if (list.length === 0) {
      const stats = developer?.stats || null;
      if (stats?.projects) {
        list.push({
          key: "projects",
          label: safeT(
            t,
            "developerStats.labels.totalProjects",
            "Total Projects"
          ),
          value: stats.projects,
        });
      }
      if (stats?.deliveredProjects) {
        list.push({
          key: "delivered",
          label: safeT(t, "developerStats.labels.delivered", "Delivered"),
          value: stats.deliveredProjects,
        });
      }
      if (stats?.underConstructionProjects) {
        list.push({
          key: "underConstruction",
          label: safeT(
            t,
            "developerStats.labels.underConstruction",
            "Under Construction"
          ),
          value: stats.underConstructionProjects,
        });
      }
      if (stats?.communities) {
        list.push({
          key: "communities",
          label: safeT(t, "developerStats.labels.communities", "Communities"),
          value: stats.communities,
        });
      }
      if (stats?.sales2024) {
        list.push({
          key: "sales2024",
          label: safeT(t, "developerStats.labels.sales2024", "2024 Sales"),
          value: stats.sales2024,
        });
      }
    }

    return list;
  }, [profile, developer, t]);

  const hasStats = tiles.length > 0;

  const labels = useMemo(() => {
    return {
      badge: safeT(t, "developerStats.badge", "Performance Ledger"),
      subtitle: safeT(
        t,
        "developerStats.subtitle",
        "A clean snapshot of delivery, progress, and market momentum."
      ),
      stamp: safeT(t, "developerStats.stamp", "Verified Portfolio Signals"),
      footer: safeT(
        t,
        "developerStats.footer",
        "Measured. Curated. Delivered."
      ),
    };
  }, [t]);

  // ✅ Get the correct logo - FIXED
  const developerLogo = useMemo(() => {
    // First check if developer has a logo
    if (developer?.logo) {
      return developer.logo;
    }

    // If not, get from default mapping using slug
    const slug = developer?.slug;
    if (slug) {
      return getDefaultLogo(slug);
    }

    return "/default-logo.png";
  }, [developer]);

  // ✅ Get logo type for CSS classes
  const logoType = useMemo(() => {
    return detectLogoType(developerLogo);
  }, [developerLogo]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !hasStats) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set([headerRef.current, ...tileRefs.current], {
      opacity: 1,
      y: 0,
      scale: 1,
      clearProps: "filter,transform",
    });

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          end: "bottom 18%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, immediateRender: false }
        );
      }

      if (tileRefs.current.length) {
        tl.fromTo(
          tileRefs.current,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            immediateRender: false,
          },
          "-=0.25"
        );
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => {
      ctx.revert();
      tileRefs.current = [];
    };
  }, [hasStats, developer?.slug, tiles.length]);

  if (!developer || !hasStats) return null;

  const displayName = developer.displayName || developer.name || "";

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.hairlineTop} aria-hidden="true" />
      <div className={styles.hairlineBottom} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.ledger}>
          {/* HEADER SECTION */}
          <div ref={headerRef} className={styles.header}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>{labels.badge}</span>
            </div>

            <p className={styles.subtitle}>{labels.subtitle}</p>

            <div className={styles.divider} aria-hidden="true">
              <span className={styles.line} />
              <span className={styles.gem} />
              <span className={styles.line} />
            </div>

            <div className={styles.vault}>
              {/* ✅ Use the correct logo */}
              <div className={styles.logoStage}>
                <div className={styles.logoBacking} aria-hidden="true" />
                <img
                  src={developerLogo}
                  alt={`${developer.name} Logo`}
                  className={styles.logo}
                  loading="lazy"
                  draggable={false}
                  onError={(e) => {
                    // Fallback to default if logo fails
                    e.target.src = "/default-logo.png";
                  }}
                />
              </div>

              <div className={styles.stamp}>
                <span className={styles.stampDot} />
                <span className={styles.stampText}>{labels.stamp}</span>
              </div>
            </div>
          </div>

          {/* CARDS SECTION - 3 COLUMNS */}
          <div className={styles.cards}>
            <div className={styles.kpiGrid}>
              {tiles.map((item, idx) => (
                <KpiTile
                  key={item.key}
                  ref={addTileRef}
                  index={idx + 1}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>

            <div className={styles.footerRule}>
              <span className={styles.footerLine} />
              <span className={styles.footerText}>{labels.footer}</span>
              <span className={styles.footerLine} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const KpiTile = React.forwardRef(function KpiTile(
  { index, label, value },
  ref
) {
  if (!value) return null;

  return (
    <div ref={ref} className={styles.tile}>
      <div className={styles.tileChrome} aria-hidden="true" />
      <div className={styles.tileTop}>
        <div className={styles.tileIndex}>{String(index).padStart(2, "0")}</div>
        <div className={styles.tileTag}>
          <span className={styles.tileTagDot} />
        </div>
      </div>

      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>

      <div className={styles.corners} aria-hidden="true">
        <span className={styles.cTL} />
        <span className={styles.cTR} />
        <span className={styles.cBL} />
        <span className={styles.cBR} />
      </div>
    </div>
  );
});
