"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/FooterFinal.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { propertiesData } from "@/data/propertiesData/propertiesData";

const SOCIAL_ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13.5 21v-7h2.4l.4-3h-2.8V8.3C13.5 7.4 13.8 7 15 7h1.4V4.3C16 4.1 15 4 14.1 4 11.8 4 10.2 5.4 10.2 8v3H7.8v3h2.4v7h3.3z"
        fill="currentColor"
      />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21 8.2c-.1-.8-.6-1.5-1.4-1.7C18.1 6 15 6 12 6s-6.1 0-7.6.5C3.6 6.7 3.1 7.4 3 8.2 2.8 9.7 2.8 11.3 2.8 12.8s0 3.1.2 4.6c.1.8.6 1.5 1.4 1.7C5.9 19.6 9 19.6 12 19.6s6.1 0 7.6-.5c.8-.2 1.3-.9 1.4-1.7.2-1.5.2-3.1.2-4.6s0-3.1-.2-4.6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M10.2 15.5V9.9l4.3 2.8-4.3 2.8z" fill="currentColor" />
    </svg>
  ),
};

// ---------- helpers ----------
const safeArr = (v) => (Array.isArray(v) ? v : []);

function buildProjectHref(categorySlug, developerSlug, projectSlug) {
  return `/properties/${categorySlug}/${developerSlug}/${projectSlug}`;
}

function flattenProjectsFromCategory(category) {
  const out = [];
  safeArr(category?.developers).forEach((dev) => {
    safeArr(dev?.projects).forEach((p) => {
      out.push({
        key: `${category.slug}-${dev.slug}-${p.slug}`,
        title: p.title,
        href: buildProjectHref(category.slug, dev.slug, p.slug),
      });
    });
  });
  return out;
}

function uniqueByHref(items) {
  const seen = new Set();
  return items.filter((it) => {
    if (!it?.href) return false;
    if (seen.has(it.href)) return false;
    seen.add(it.href);
    return true;
  });
}

// ✅ Fisher-Yates shuffle (copy)
function shuffleCopy(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandomN(arr, n) {
  if (!Array.isArray(arr)) return [];
  if (arr.length <= n) return shuffleCopy(arr);
  return shuffleCopy(arr).slice(0, n);
}

export default function FooterFinal() {
  const { locale, t } = useLanguage();
  const isRTL = locale === "ar";
  const pathname = usePathname();

  // ✅ memoize data to avoid re-creating arrays every render
  const data = useMemo(() => {
    return propertiesData(
      process.env.NEXT_PUBLIC_BUNNY_CDN_BASE_URL ||
        "https://luxury-real-estate-media.b-cdn.net",
      t,
      locale
    );
  }, [t, locale]);

  const categories = useMemo(() => safeArr(data?.categories), [data]);

  // Pick which categories show in the TOP row (Sobha-style 3 columns)
  const topCols = useMemo(() => {
    const topRowSlugs = ["apartments", "villas", "penthouses"];
    const topRowCategories = topRowSlugs
      .map((slug) => categories.find((c) => c.slug === slug))
      .filter(Boolean);

    return topRowCategories.length === 3
      ? topRowCategories
      : categories.slice(0, 3);
  }, [categories]);

  // Communities = a curated list of project links, derived from propertiesData
  const communities = useMemo(() => {
    return uniqueByHref(
      categories.flatMap((cat) => flattenProjectsFromCategory(cat))
    );
  }, [categories]);

  // Static pages (you can add more later)
  const mediaCenter = [
    { key: "mediaCenter", defaultLabel: "Media Center", href: "/media-center" },
  ];
  const aboutUs = [{ key: "about", defaultLabel: "About", href: "/about" }];
  const contactUs = [
    { key: "contact", defaultLabel: "Contact Us", href: "/contact" },
  ];

  const socials = [
    {
      id: "instagram",
      href: "https://www.instagram.com/mohamadkodmane/",
      label: "Instagram",
    },
    {
      id: "youtube",
      href: "https://www.youtube.com/@Mohamad.Kodmane",
      label: "YouTube",
    },
    {
      id: "facebook",
      href: "https://www.facebook.com/mo.kodmane/",
      label: "Facebook",
    },
  ];

  // ✅ stable key so shuffle happens ONLY on route/lang/topCols change
  const shuffleKey = useMemo(() => {
    const slugs = topCols.map((c) => c.slug).join("|");
    return `${pathname || ""}__${locale || "en"}__${slugs}`;
  }, [pathname, locale, topCols]);

  // ✅ state: 10 shuffled projects per column
  const [colProjectsMap, setColProjectsMap] = useState({});

  useEffect(() => {
    const nextMap = {};
    topCols.forEach((cat) => {
      const all = flattenProjectsFromCategory(cat);
      nextMap[cat.slug] = pickRandomN(all, 10); // ✅ only 10
    });
    setColProjectsMap(nextMap);
  }, [shuffleKey, topCols]);

  const year = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footer} ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* TOP LOGO BAR */}
      <div className={styles.logoBar}>
        <div className={styles.logoBarInner}>
          <div className={styles.logoWrap}>
            {t?.("footer.brand.logoBar") ||
              "Mohamad Kodmane Real Estate Brokers"}
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className={styles.footerMain}>
        {/* FIRST ROW – PROJECT TYPES (AUTO from propertiesData) */}
        <div className={styles.footerMainInner}>
          <div className={styles.propertiesRow}>
            {topCols.map((cat) => {
              const projects = colProjectsMap[cat.slug] || [];

              const headerKey =
                cat.slug === "commercial-retail"
                  ? "commercial"
                  : cat.slug === "mixed-use"
                    ? "mixedUse"
                    : cat.slug;

              return (
                <div key={cat.slug} className={styles.colBlock}>
                  <h4 className={styles.colTitle}>
                    {t?.(`footer.headers.${headerKey}`) ||
                      (cat?.name || headerKey).toUpperCase()}
                  </h4>

                  <ul className={styles.linkList}>
                    {projects.map((item) => (
                      <li key={item.key} className={styles.linkItem}>
                        <Link href={item.href} className={styles.link}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECOND ROW – COMMUNITIES / MEDIA / ABOUT / CONTACT */}
        {/* Keep it commented if you want */}
        {/* <div className={styles.footerMiddle}>
          <div className={styles.footerMiddleInner}>
            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>
                {t?.("footer.headers.communities") || "COMMUNITIES"}
              </div>
              <ul className={styles.linkList}>
                {communities.slice(0, 10).map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>
                {t?.("footer.headers.mediaCenter") || "MEDIA CENTER"}
              </div>
              <ul className={styles.linkList}>
                {mediaCenter.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.mediaCenter.${item.key}`) || item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>
                {t?.("footer.headers.aboutUs") || "ABOUT"}
              </div>
              <ul className={styles.linkList}>
                {aboutUs.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.aboutUs.${item.key}`) || item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>
                {t?.("footer.headers.contact") || "CONTACT"}
              </div>
              <ul className={styles.linkList}>
                {contactUs.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.contact.${item.key}`) || item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}

        {/* BOTTOM ROW – CORPORATE / ADDRESS / CONTACT */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.corporateBlock}>
              <div className={styles.corporateName}>
                {t?.("footer.brand.corporateName") || "MOHAMAD KODMANE"}
              </div>
              <div className={styles.corporateTitle}>
                {t?.("footer.brand.corporateTitle") || "REAL ESTATE BROKER"}
              </div>
              <div className={styles.corporateDivider} />
              <div className={styles.legalInfo}>
                <div>
                  {t?.("footer.brand.legal.tradeLicense") ||
                    "TRADE LICENSE: 1192580"}
                </div>
                <div>
                  {t?.("footer.brand.legal.advertisingPermit") ||
                    "ADVERTISING PERMIT: 139532"}
                </div>
                <div>
                  {t?.("footer.brand.legal.reraCertified") || "RERA CERTIFIED"}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomCenter}>
            <div className={styles.prestigeAddress}>
              <div className={styles.addressTitle}>
                {t?.("footer.address.title") || "HEADQUARTERS"}
              </div>
              <div className={styles.addressLines}>
                <div>
                  {t?.("footer.address.line1") ||
                    "22ND FLOOR, 22ND COURT TOWER"}
                </div>
                <div>
                  {t?.("footer.address.line2") || "OFFICE B08, BUSINESS BAY"}
                </div>
                <div>
                  {t?.("footer.address.line3") || "DUBAI, UNITED ARAB EMIRATES"}
                </div>
                <div className={styles.poBox}>
                  {t?.("footer.address.poBox") || "P.O. BOX 446097"}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.contactBlock}>
              <div className={styles.contactTitle}>
                {t?.("footer.contactBlock.title") || "PRIVATE CONSULTATION"}
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>
                    {t?.("footer.contactBlock.directLabel") || "DIRECT:"}
                  </span>
                  <Link
                    href="tel:+971568888906"
                    className={styles.contactNumber}
                  >
                    +971 56 888 8906
                  </Link>
                </div>

                <div className={styles.contactLine}>
                  <span className={styles.contactType}>
                    {t?.("footer.contactBlock.officeLabel") || "OFFICE:"}
                  </span>
                  <Link
                    href="tel:+97145859279"
                    className={styles.contactNumber}
                  >
                    +971 4 585 9279
                  </Link>
                </div>

                <div className={styles.contactLine}>
                  <span className={styles.contactType}>
                    {t?.("footer.contactBlock.emailLabel") || "EMAIL:"}
                  </span>
                  <Link
                    href="mailto:info@mohamadkodmani.ae"
                    className={styles.contactEmail}
                  >
                    INFO@MOHAMADKODMANI.AE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT + SOCIALS */}
        <div className={styles.footerMeta}>
          <div className={styles.footerMetaInner}>
            <div className={styles.metaCopy}>
              © {year}.{" "}
              {t?.("footer.brand.logoBar") ||
                "Mohamad Kodmane Real Estate Brokers"}
              . {t?.("footer.meta.allRightsReserved") || "All rights reserved."}
            </div>

            <div className={styles.metaSocials} aria-label="Social media links">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.metaSocialLink}
                  aria-label={social.label}
                >
                  <span className={styles.metaSocialIcon}>
                    {SOCIAL_ICONS[social.id]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
