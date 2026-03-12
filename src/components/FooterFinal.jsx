"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/FooterFinal.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

// ─── Social icons ──────────────────────────────────────────────
const SOCIAL_ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V8.3C13.5 7.4 13.8 7 15 7h1.4V4.3C16 4.1 15 4 14.1 4 11.8 4 10.2 5.4 10.2 8v3H7.8v3h2.4v7h3.3z" fill="currentColor" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 8.2c-.1-.8-.6-1.5-1.4-1.7C18.1 6 15 6 12 6s-6.1 0-7.6.5C3.6 6.7 3.1 7.4 3 8.2 2.8 9.7 2.8 11.3 2.8 12.8s0 3.1.2 4.6c.1.8.6 1.5 1.4 1.7C5.9 19.6 9 19.6 12 19.6s6.1 0 7.6-.5c.8-.2 1.3-.9 1.4-1.7.2-1.5.2-3.1.2-4.6s0-3.1-.2-4.6z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.2 15.5V9.9l4.3 2.8-4.3 2.8z" fill="currentColor" />
    </svg>
  ),
};

// ─── helpers ──────────────────────────────────────────────────
function shuffleCopy(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pickRandom(arr, n) {
  if (!Array.isArray(arr) || !arr.length) return [];
  return shuffleCopy(arr).slice(0, n);
}

// ─── single property card ─────────────────────────────────────
function PropertyCard({ project }) {
  const [imgOk, setImgOk] = useState(true);
  const image = project?.image || project?.data?.en?.hero?.backgroundUrl || "";
  const name  = project?.nameEn || project?.name || "";
  const dev   = project?.developer || "";
  const href  = project?.href || "#";

  return (
    <Link href={href} className={styles.propCard} aria-label={name}>
      <div className={styles.propCardMedia}>
        {image && imgOk ? (
          <img
            src={image}
            alt={name}
            className={styles.propCardImg}
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className={styles.propCardPlaceholder}>{name}</div>
        )}
        <div className={styles.propCardOverlay} />
      </div>
      <div className={styles.propCardBody}>
        <span className={styles.propCardDev}>{dev}</span>
        <span className={styles.propCardName}>{name}</span>
      </div>
    </Link>
  );
}

// ─── main footer ──────────────────────────────────────────────
export default function FooterFinal() {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";
  const pathname = usePathname();
  const { allProjects } = useAllProjects();

  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (!allProjects?.length) return;
    const pool = allProjects.filter((p) => !p.isLand && p.image);
    setCards(pickRandom(pool, 9));
  }, [pathname, allProjects]);

  const year = new Date().getFullYear();

  const copy = {
    logoBar:        isRTL ? "محمد قدماني للوساطة العقارية"     : "Mohamad Kodmane Real Estate Brokers",
    featuredProps:  isRTL ? "مشاريع مميزة"                       : "FEATURED PROPERTIES",
    corpName:       isRTL ? "محمد قدماني"                        : "MOHAMAD KODMANE",
    corpTitle:      isRTL ? "وسيط عقاري معتمد"                   : "REAL ESTATE BROKER",
    license:        isRTL ? "رخصة تجارية: 1192580"               : "TRADE LICENSE: 1192580",
    permit:         isRTL ? "تصريح إعلاني: 139532"               : "ADVERTISING PERMIT: 139532",
    rera:           isRTL ? "معتمد من RERA"                      : "RERA CERTIFIED",
    hqTitle:        isRTL ? "المقر الرئيسي"                      : "HEADQUARTERS",
    addrLine1:      isRTL ? "الطابق 22، برج 22ND COURT"          : "22ND FLOOR, 22ND COURT TOWER",
    addrLine2:      isRTL ? "مكتب B08، الخليج التجاري"           : "OFFICE B08, BUSINESS BAY",
    addrLine3:      isRTL ? "دبي، الإمارات العربية المتحدة"       : "DUBAI, UNITED ARAB EMIRATES",
    poBox:          isRTL ? "ص.ب. 446097"                        : "P.O. BOX 446097",
    consultation:   isRTL ? "استشارة خاصة"                       : "PRIVATE CONSULTATION",
    direct:         isRTL ? "مباشر:"                              : "DIRECT:",
    office:         isRTL ? "مكتب:"                               : "OFFICE:",
    email:          isRTL ? "بريد:"                               : "EMAIL:",
    rights:         isRTL ? "جميع الحقوق محفوظة."               : "All rights reserved.",
  };

  const socials = [
    { id: "instagram", href: "https://www.instagram.com/mohamadkodmane/", label: "Instagram" },
    { id: "youtube",   href: "https://www.youtube.com/@Mohamad.Kodmane",  label: "YouTube"   },
    { id: "facebook",  href: "https://www.facebook.com/mo.kodmane/",      label: "Facebook"  },
  ];

  return (
    <footer className={`${styles.footer} ${isRTL ? styles.rtl : ""}`} dir={isRTL ? "rtl" : "ltr"}>

      {/* TOP LOGO BAR */}
      <div className={styles.logoBar}>
        <div className={styles.logoBarInner}>
          <div className={styles.logoWrap}>{copy.logoBar}</div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className={styles.footerMain}>

        {/* PROPERTY CARDS */}
        {cards.length > 0 && (
          <div className={styles.footerMainInner}>
            <h4 className={styles.cardsHeading}>{copy.featuredProps}</h4>
            <div className={styles.propCardsGrid}>
              {cards.map((p) => (
                <PropertyCard key={p.slug || p.href} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM: corporate / address / contact */}
        <div className={styles.footerBottom}>

          <div className={styles.bottomLeft}>
            <div className={styles.corporateBlock}>
              <div className={styles.corporateName}>{copy.corpName}</div>
              <div className={styles.corporateTitle}>{copy.corpTitle}</div>
              <div className={styles.corporateDivider} />
              <div className={styles.legalInfo}>
                <div>{copy.license}</div>
                <div>{copy.permit}</div>
                <div>{copy.rera}</div>
              </div>
            </div>
          </div>

          <div className={styles.bottomCenter}>
            <div className={styles.prestigeAddress}>
              <div className={styles.addressTitle}>{copy.hqTitle}</div>
              <div className={styles.addressLines}>
                <div>{copy.addrLine1}</div>
                <div>{copy.addrLine2}</div>
                <div>{copy.addrLine3}</div>
                <div className={styles.poBox}>{copy.poBox}</div>
              </div>
            </div>
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.contactBlock}>
              <div className={styles.contactTitle}>{copy.consultation}</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>{copy.direct}</span>
                  <Link href="tel:+971568888906" className={styles.contactNumber}>+971 56 888 8906</Link>
                </div>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>{copy.office}</span>
                  <Link href="tel:+97145859279" className={styles.contactNumber}>+971 4 585 9279</Link>
                </div>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>{copy.email}</span>
                  <Link href="mailto:info@mohamadkodmani.ae" className={styles.contactEmail}>
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
              © {year}. {copy.logoBar}. {copy.rights}
            </div>
            <div className={styles.metaSocials} aria-label="Social media links">
              {socials.map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer"
                   className={styles.metaSocialLink} aria-label={s.label}>
                  <span className={styles.metaSocialIcon}>{SOCIAL_ICONS[s.id]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}