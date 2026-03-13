"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/TopHeader.module.css";
import { useLanguage } from "./LanguageProvider";
import ProjectsHeroSearch from "@/components/search/ProjectsHeroSearch";

function useSafeDOM() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  return isMounted;
}

function labelFor(item, locale) {
  return locale === "ar" ? item?.labelAr : item?.labelEn;
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

  const { locale, switchLanguage, isTransitioning, t } = useLanguage();
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
  });

  const defaultLeft = useMemo(() => [
    { type: "link", href: "/about",        labelEn: "ABOUT",        labelAr: "من نحن"       },
    { type: "link", href: "/properties",   labelEn: "PROPERTIES",   labelAr: "العقارات"     },
    { type: "link", href: "/offplan",      labelEn: "OFFPLAN",      labelAr: "على الخارطة"  },
    { type: "link", href: "/secondary",    labelEn: "SECONDARY",    labelAr: "الثانوي"      },
    { type: "link", href: "/lands",        labelEn: "LANDS",        labelAr: "الأراضي"      },
    { type: "link", href: "/where-to-live",labelEn: "WHERE TO LIVE",labelAr: "أين تسكن"     },
  ], []);

  const defaultRight = useMemo(() => [
    { type: "link", href: "/developers",     labelEn: "DEVELOPERS",     labelAr: "المطورون"        },
    { type: "link", href: "/market-analysis",labelEn: "MARKET ANALYSIS",labelAr: "تحليل السوق"     },
    { type: "link", href: "/articles/",      labelEn: "MEDIA CENTER",   labelAr: "المركز الإعلامي" },
    { type: "link", href: "/contact-us/",    labelEn: "CONTACT US",     labelAr: "تواصل معنا"      },
  ], []);

  const defaultMobile = useMemo(() => [
    { type: "link", href: "/about",          labelEn: "ABOUT",          labelAr: "من نحن"          },
    { type: "link", href: "/properties",     labelEn: "PROPERTIES",     labelAr: "العقارات"        },
    { type: "link", href: "/offplan",        labelEn: "OFFPLAN",        labelAr: "على الخارطة"     },
    { type: "link", href: "/secondary",      labelEn: "SECONDARY",      labelAr: "الثانوي"         },
    { type: "link", href: "/lands",          labelEn: "LANDS",          labelAr: "الأراضي"         },
    { type: "link", href: "/where-to-live",  labelEn: "WHERE TO LIVE",  labelAr: "أين تسكن"        },
    { type: "link", href: "/developers",     labelEn: "DEVELOPERS",     labelAr: "المطورون"        },
    { type: "link", href: "/market-analysis",labelEn: "MARKET ANALYSIS",labelAr: "تحليل السوق"     },
    { type: "link", href: "/articles",       labelEn: "MEDIA CENTER",   labelAr: "المركز الإعلامي" },
    { type: "link", href: "/contact-us",     labelEn: "CONTACT US",     labelAr: "تواصل معنا"      },
  ], []);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/site-settings", { cache: "no-store" });
        const json = await res.json();
        if (!json.ok) return;
        const data = json.data;
        if (!alive) return;
        setExtras({
          desktopLeft:  (data?.desktopLeft  || []).filter(isValidNavItem),
          desktopRight: (data?.desktopRight || []).filter(isValidNavItem),
          mobileMenu:   (data?.mobileMenu   || []).filter(isValidNavItem),
          hideSearch: Boolean(data?.navbar?.hideSearch ?? data?.hideSearch),
        });
      } catch {}
    })();
    return () => { alive = false; };
  }, []);

  const leftLinks   = extras.desktopLeft.length  > 0 ? extras.desktopLeft  : defaultLeft;
  const rightLinks  = extras.desktopRight.length > 0 ? extras.desktopRight : defaultRight;
  const mobileLinks = extras.mobileMenu.length   > 0 ? extras.mobileMenu   : defaultMobile;
  const hideSearch = extras.hideSearch;

  useEffect(() => {
    if (!isMounted) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    const el = headerRef.current;
    if (!el) return;
    const update = () => {
      const h = el.getBoundingClientRect?.().height || el.offsetHeight || 80;
      setHeaderHeight(Math.max(60, Math.round(h)));
    };
    update();
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      ro.observe(el);
    }
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("resize", update); ro?.disconnect(); };
  }, [isMounted]);

  const openCurtain  = (name) => setActiveCurtain(name);
  const closeCurtain = () => setActiveCurtain(null);
  const toggleMobileMenu = () => { closeCurtain(); setIsMobileMenuOpen((p) => !p); };
  const closeAllMobileMenus = () => setIsMobileMenuOpen(false);
  const toggleLanguage = () => { if (!isMounted) return; switchLanguage(locale === "en" ? "ar" : "en"); };

  useEffect(() => {
    if (!isMounted || !activeCurtain) return;
    const onOutside = (e) => {
      if (!headerRef.current?.contains(e.target) && !curtainRef.current?.contains(e.target))
        closeCurtain();
    };
    document.addEventListener("pointerdown", onOutside);
    return () => document.removeEventListener("pointerdown", onOutside);
  }, [activeCurtain, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
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
    if (!isMounted) return;
    const body = document.body;
    const shouldLock = isMobileMenuOpen || Boolean(activeCurtain);
    body.style.overflow = shouldLock ? "hidden" : "";
    body.style.touchAction = shouldLock ? "none" : "";
    return () => { body.style.overflow = ""; body.style.touchAction = ""; };
  }, [isMobileMenuOpen, activeCurtain, isMounted]);

  const renderDesktop = (item, idx) => {
    const text = labelFor(item, locale);
    if (!text) return null;

    if (item.type === "action_search") {
      if (hideSearch) return null;
      return (
        <li key={`d-act-${idx}`} className={styles.searchPropsItem}>
          <button
            type="button"
            className={`${styles.level1Menu} ${styles.searchPropsBtn} ${
              activeCurtain === "SEARCH_PROPERTIES" ? styles.active : ""
            }`}
            onClick={() =>
              activeCurtain === "SEARCH_PROPERTIES"
                ? closeCurtain()
                : openCurtain("SEARCH_PROPERTIES")
            }
            aria-haspopup="dialog"
            aria-expanded={activeCurtain === "SEARCH_PROPERTIES"}
          >
            {text}
          </button>
        </li>
      );
    }

    const href   = safeHref(item.href);
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

    if (item.type === "action_search") {
      if (hideSearch) return null;
      return (
        <button
          key={`m-act-${idx}`}
          type="button"
          className={styles.mobileNavLink}
          onClick={() => { closeAllMobileMenus(); openCurtain("SEARCH_PROPERTIES"); }}
        >
          {text}
        </button>
      );
    }

    const href   = safeHref(item.href);
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
            <ul className={styles.navLinks}>
              {leftLinks.map(renderDesktop)}
            </ul>
          </div>

          <div className={styles.logoSec}>
            <Link href="/" className={styles.logoLink} aria-label="Home">
              <img
                src="/logo-transparent.png"
                alt="Mohamad Kodmani Real Estate"
                className={styles.logoImage}
                width={125}
                height={45}
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
                    {isTransitioning ? "⟳" : locale === "en" ? "العربية" : "EN"}
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
                {isTransitioning ? "⟳" : locale === "en" ? "AR" : "EN"}
              </button>

              <button
                type="button"
                className={`${styles.burger} ${isMobileMenuOpen ? styles.burgerActive : ""}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span /><span /><span />
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
                <div className={styles.curtainTitle}>SEARCH PROPERTIES</div>
                <button
                  type="button"
                  className={styles.curtainClose}
                  onClick={closeCurtain}
                  aria-label="Close search properties"
                >
                  ×
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
                src="/logo-transparent.png"
                alt="Mohamad Kodmani Real Estate"
                className={styles.mobileBrandLogo}
                width={150}
                height={54}
              />
            </Link>
            <button
              type="button"
              className={styles.mobileClose}
              onClick={closeAllMobileMenus}
              aria-label="Close menu"
            >
              ×
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
                  ? "⟳"
                  : locale === "en"
                  ? "Switch to Arabic"
                  : "Switch to English"}
              </button>
            </div>

            <div className={styles.mobileNavItems}>
              {mobileLinks.map(renderMobile)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}