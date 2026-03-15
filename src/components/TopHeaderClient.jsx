"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/TopHeader.module.css";
import { useLanguage } from "./LanguageProvider";
import ProjectsHeroSearch from "@/components/search/ProjectsHeroSearch";

function useSafeDOM() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  return isMounted;
}

function normalizeSecondaryLabel(item, locale) {
  const href = String(item?.href || "");
  const isSecondary = href === "/secondary" || href.startsWith("/secondary?");
  if (!isSecondary) return locale === "ar" ? item?.labelAr : item?.labelEn;
  return locale === "ar" ? "\u062c\u0627\u0647\u0632 \u0644\u0644\u0633\u0643\u0646" : "READY TO MOVE";
}

function labelFor(item, locale) {
  return normalizeSecondaryLabel(item, locale);
}

function safeHref(href) {
  if (!href) return "/";
  return href.startsWith("/") || href.startsWith("http") ? href : `/${href}`;
}

function isValidNavItem(item) {
  if (!item?.type) return false;
  if (!item?.labelEn || !item?.labelAr) return false;
  if (item.type === "link" && !item.href) return false;
  return true;
}

export default function TopHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCurtain, setActiveCurtain] = useState(null);

  const { locale, switchLanguage, isTransitioning } = useLanguage();
  const pathname = usePathname();
  const isMounted = useSafeDOM();
  const isRTL = locale === "ar";

  const headerRef = useRef(null);
  const curtainRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(80);

  const [extras, setExtras] = useState({
    desktopLeft: [],
    desktopRight: [],
    mobileMenu: [],
    hideSearch: false,
    logoUrl: "",
    logoAlt: "Mohamad Kodmani Real Estate",
    logoScaleDesktop: 1,
    logoScaleMobile: 1,
  });

  const defaultLeft = useMemo(
    () => [
      { type: "link", href: "/about", labelEn: "ABOUT", labelAr: "\u0645\u0646 \u0646\u062d\u0646" },
      { type: "link", href: "/properties", labelEn: "PROPERTIES", labelAr: "\u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a" },
      { type: "link", href: "/offplan", labelEn: "OFFPLAN", labelAr: "\u0639\u0644\u0649 \u0627\u0644\u062e\u0627\u0631\u0637\u0629" },
      { type: "link", href: "/secondary", labelEn: "READY TO MOVE", labelAr: "\u062c\u0627\u0647\u0632 \u0644\u0644\u0633\u0643\u0646" },
      { type: "link", href: "/rental", labelEn: "RENTAL", labelAr: "\u0627\u0644\u0625\u064a\u062c\u0627\u0631" },
      { type: "link", href: "/lands", labelEn: "LANDS", labelAr: "\u0627\u0644\u0623\u0631\u0627\u0636\u064a" },
      { type: "link", href: "/where-to-live", labelEn: "WHERE TO LIVE", labelAr: "\u0623\u064a\u0646 \u062a\u0633\u0643\u0646" },
    ],
    []
  );

  const defaultRight = useMemo(
    () => [
      { type: "link", href: "/developers", labelEn: "DEVELOPERS", labelAr: "\u0627\u0644\u0645\u0637\u0648\u0631\u0648\u0646" },
      { type: "link", href: "/market-analysis", labelEn: "MARKET ANALYSIS", labelAr: "\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0633\u0648\u0642" },
      { type: "link", href: "/articles/", labelEn: "MEDIA CENTER", labelAr: "\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064a" },
      { type: "link", href: "/contact-us/", labelEn: "CONTACT US", labelAr: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627" },
    ],
    []
  );

  const defaultMobile = useMemo(
    () => [
      { type: "link", href: "/about", labelEn: "ABOUT", labelAr: "\u0645\u0646 \u0646\u062d\u0646" },
      { type: "link", href: "/properties", labelEn: "PROPERTIES", labelAr: "\u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a" },
      { type: "link", href: "/offplan", labelEn: "OFFPLAN", labelAr: "\u0639\u0644\u0649 \u0627\u0644\u062e\u0627\u0631\u0637\u0629" },
      { type: "link", href: "/secondary", labelEn: "READY TO MOVE", labelAr: "\u062c\u0627\u0647\u0632 \u0644\u0644\u0633\u0643\u0646" },
      { type: "link", href: "/rental", labelEn: "RENTAL", labelAr: "\u0627\u0644\u0625\u064a\u062c\u0627\u0631" },
      { type: "link", href: "/lands", labelEn: "LANDS", labelAr: "\u0627\u0644\u0623\u0631\u0627\u0636\u064a" },
      { type: "link", href: "/where-to-live", labelEn: "WHERE TO LIVE", labelAr: "\u0623\u064a\u0646 \u062a\u0633\u0643\u0646" },
      { type: "link", href: "/developers", labelEn: "DEVELOPERS", labelAr: "\u0627\u0644\u0645\u0637\u0648\u0631\u0648\u0646" },
      { type: "link", href: "/market-analysis", labelEn: "MARKET ANALYSIS", labelAr: "\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0633\u0648\u0642" },
      { type: "link", href: "/articles", labelEn: "MEDIA CENTER", labelAr: "\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064a" },
      { type: "link", href: "/contact-us", labelEn: "CONTACT US", labelAr: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627" },
    ],
    []
  );

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/site-settings", { cache: "no-store" });
        const json = await res.json();
        if (!json?.ok || !alive) return;
        const data = json.data;
        setExtras({
          desktopLeft: (data?.desktopLeft || []).filter(isValidNavItem),
          desktopRight: (data?.desktopRight || []).filter(isValidNavItem),
          mobileMenu: (data?.mobileMenu || []).filter(isValidNavItem),
          hideSearch: Boolean(data?.navbar?.hideSearch ?? data?.hideSearch),
          logoUrl: data?.navbar?.logoUrl || "",
          logoAlt: data?.navbar?.logoAlt || "Mohamad Kodmani Real Estate",
          logoScaleDesktop: Number(data?.navbar?.logoScaleDesktop) || 1,
          logoScaleMobile: Number(data?.navbar?.logoScaleMobile) || Number(data?.navbar?.logoScaleDesktop) || 1,
        });
      } catch {}
    })();
    return () => {
      alive = false;
    };
  }, []);

  const leftLinks = extras.desktopLeft.length > 0 ? extras.desktopLeft : defaultLeft;
  const rightLinks = extras.desktopRight.length > 0 ? extras.desktopRight : defaultRight;
  const mobileLinks = extras.mobileMenu.length > 0 ? extras.mobileMenu : defaultMobile;
  const hasCustomLogo = Boolean(extras.logoUrl);
  const logoStyle = hasCustomLogo
    ? {
        "--navbar-logo-scale-desktop": String(extras.logoScaleDesktop || 1),
        "--navbar-logo-scale-mobile": String(extras.logoScaleMobile || extras.logoScaleDesktop || 1),
      }
    : undefined;

  useEffect(() => {
    if (!isMounted) return undefined;
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return undefined;
    const element = headerRef.current;
    if (!element) return undefined;

    const update = () => {
      const height = element.getBoundingClientRect?.().height || element.offsetHeight || 80;
      setHeaderHeight(Math.max(60, Math.round(height)));
    };

    update();
    let observer = null;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(update);
      observer.observe(element);
    }
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      observer?.disconnect();
    };
  }, [isMounted]);

  const closeCurtain = () => setActiveCurtain(null);
  const toggleMobileMenu = () => {
    closeCurtain();
    setIsMobileMenuOpen((prev) => !prev);
  };
  const closeAllMobileMenus = () => setIsMobileMenuOpen(false);
  const toggleLanguage = () => {
    if (!isMounted) return;
    switchLanguage(locale === "en" ? "ar" : "en");
  };

  useEffect(() => {
    if (!isMounted || !activeCurtain) return undefined;
    const onOutside = (event) => {
      if (!headerRef.current?.contains(event.target) && !curtainRef.current?.contains(event.target)) {
        closeCurtain();
      }
    };
    document.addEventListener("pointerdown", onOutside);
    return () => document.removeEventListener("pointerdown", onOutside);
  }, [activeCurtain, isMounted]);

  useEffect(() => {
    if (!isMounted) return undefined;
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      closeCurtain();
      setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    closeCurtain();
    setIsMobileMenuOpen(false);
  }, [pathname, isMounted]);

  useEffect(() => {
    if (!isMounted) return undefined;
    const body = document.body;
    const shouldLock = isMobileMenuOpen || Boolean(activeCurtain);
    body.style.overflow = shouldLock ? "hidden" : "";
    body.style.touchAction = shouldLock ? "none" : "";
    return () => {
      body.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [isMobileMenuOpen, activeCurtain, isMounted]);

  const renderDesktop = (item, idx) => {
    const text = labelFor(item, locale);
    if (!text) return null;
    if (item.type === "action_search") return null;

    const href = safeHref(item.href);
    const newTab = Boolean(item.openInNewTab);
    return (
      <li key={`d-link-${idx}`}>
        <Link
          href={href}
          className={styles.level1Menu}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noreferrer noopener" : undefined}
        >
          {text}
        </Link>
      </li>
    );
  };

  const renderMobile = (item, idx) => {
    const text = labelFor(item, locale);
    if (!text) return null;
    if (item.type === "action_search") return null;

    const href = safeHref(item.href);
    const newTab = Boolean(item.openInNewTab);
    return (
      <a
        key={`m-link-${idx}`}
        href={href}
        className={styles.mobileNavLink}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer noopener" : undefined}
        onClick={closeAllMobileMenus}
      >
        {text}
      </a>
    );
  };

  if (!isMounted) return null;

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          isMobileMenuOpen ? styles.mobileMenuOpenHeader : ""
        } ${isRTL ? styles.rtl : ""}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className={styles.container}>
          <div className={styles.menuLeft}>
            <ul className={styles.navLinks}>{leftLinks.map(renderDesktop)}</ul>
          </div>

          <div className={styles.logoSec}>
            <Link href="/" className={styles.logoLink} aria-label="Home">
              <img
                src={extras.logoUrl || "/logo-transparent.png"}
                alt={extras.logoAlt || "Mohamad Kodmani Real Estate"}
                className={`${styles.logoImage} ${hasCustomLogo ? styles.logoImageCustom : ""}`}
                width={125}
                height={45}
                style={logoStyle}
              />
            </Link>
          </div>

          <div className={styles.menuRight}>
            <ul className={styles.navLinks}>
              {rightLinks.map(renderDesktop)}
              <li className={styles.languageToggle}>
                <button
                  type="button"
                  onClick={toggleLanguage}
                  disabled={isTransitioning}
                  className={`${styles.langButton} ${isRTL ? styles.arabicActive : ""} ${
                    isTransitioning ? styles.transitioning : ""
                  }`}
                >
                  <span className={styles.langText}>
                    {isTransitioning ? "..." : locale === "en" ? "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" : "EN"}
                  </span>
                  <span className={styles.langDot} aria-hidden="true" />
                </button>
              </li>
            </ul>

            <div className={styles.mobileActions}>
              <button
                type="button"
                onClick={toggleLanguage}
                disabled={isTransitioning}
                className={styles.mobileLang}
                aria-label="Toggle language"
              >
                {isTransitioning ? "..." : locale === "en" ? "AR" : "EN"}
              </button>

              <button
                type="button"
                className={`${styles.burger} ${isMobileMenuOpen ? styles.burgerActive : ""}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      {activeCurtain === "SEARCH_PROPERTIES" && (
        <div className={styles.curtainRoot} role="dialog" aria-modal="true">
          <div className={styles.curtainBackdrop} onClick={closeCurtain} aria-hidden="true" />
          <div
            ref={curtainRef}
            className={`${styles.curtainPanel} ${isRTL ? styles.curtainPanelRtl : ""}`}
            style={{ top: headerHeight + 8 }}
          >
            <div className={styles.curtainInnerCard}>
              <div className={styles.curtainHead}>
                <div className={styles.curtainTitle}>
                  {isRTL ? "\u0627\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a" : "SEARCH PROPERTIES"}
                </div>
                <button
                  type="button"
                  className={styles.curtainClose}
                  onClick={closeCurtain}
                  aria-label="Close search properties"
                >
                  x
                </button>
              </div>
              <div className={styles.curtainBody}>
                <ProjectsHeroSearch />
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavActive : ""} ${
          isRTL ? styles.rtl : ""
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className={styles.mobileNavBackdrop} onClick={closeAllMobileMenus} />

        <div className={styles.mobileNavSheet} role="dialog" aria-modal="true">
          <div className={styles.mobileTopRow}>
            <Link href="/" className={styles.mobileBrand} onClick={closeAllMobileMenus}>
              <img
                src={extras.logoUrl || "/logo-transparent.png"}
                alt={extras.logoAlt || "Mohamad Kodmani Real Estate"}
                className={`${styles.mobileBrandLogo} ${hasCustomLogo ? styles.mobileBrandLogoCustom : ""}`}
                width={150}
                height={54}
                style={logoStyle}
              />
            </Link>
            <button
              type="button"
              className={styles.mobileClose}
              onClick={closeAllMobileMenus}
              aria-label="Close menu"
            >
              x
            </button>
          </div>

          <div className={styles.mobileContent}>
            <div className={styles.mobileLangRow}>
              <button
                type="button"
                onClick={toggleLanguage}
                disabled={isTransitioning}
                className={styles.mobileLangButton}
              >
                {isTransitioning
                  ? "..."
                  : locale === "en"
                  ? "Switch to Arabic"
                  : "Switch to English"}
              </button>
            </div>

            <div className={styles.mobileNavItems}>{mobileLinks.map(renderMobile)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
