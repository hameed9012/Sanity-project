"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/FooterFinal.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import { useAllProjects } from "@/components/SanityProjectsContext";

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
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="9" width="3" height="11" fill="currentColor" />
      <circle cx="5.5" cy="5.5" r="1.7" fill="currentColor" />
      <path d="M10 9h2.9v1.6h.1c.4-.8 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.9V20h-3v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20h-3V9z" fill="currentColor" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 8.2c-.1-.8-.6-1.5-1.4-1.7C18.1 6 15 6 12 6s-6.1 0-7.6.5C3.6 6.7 3.1 7.4 3 8.2 2.8 9.7 2.8 11.3 2.8 12.8s0 3.1.2 4.6c.1.8.6 1.5 1.4 1.7C5.9 19.6 9 19.6 12 19.6s6.1 0 7.6-.5c.8-.2 1.3-.9 1.4-1.7.2-1.5.2-3.1.2-4.6s0-3.1-.2-4.6z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.2 15.5V9.9l4.3 2.8-4.3 2.8z" fill="currentColor" />
    </svg>
  ),
};

function humanizeName(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  return raw
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .trim();
}

function getLocalizedProjectName(project, isRTL) {
  if (isRTL) {
    return (
      project?.nameAr ||
      project?.titleAr ||
      project?.nameEn ||
      project?.title ||
      project?.name ||
      project?.data?.project?.nameAr ||
      project?.data?.project?.name ||
      project?.slug ||
      ""
    );
  }

  return (
    project?.nameEn ||
    project?.title ||
    project?.name ||
    project?.nameAr ||
    project?.titleAr ||
    project?.data?.project?.name ||
    project?.data?.project?.nameAr ||
    project?.slug ||
    ""
  );
}

function getLocalizedDeveloperName(project, isRTL) {
  if (isRTL) {
    return (
      project?.developerNameAr ||
      project?.developerAr ||
      project?.developerNameEn ||
      project?.developer ||
      project?.data?.project?.developerAr ||
      project?.data?.project?.developer ||
      ""
    );
  }

  return (
    project?.developerNameEn ||
    project?.developer ||
    project?.developerNameAr ||
    project?.developerAr ||
    project?.data?.project?.developer ||
    project?.data?.project?.developerAr ||
    ""
  );
}

function PropertyCard({ project, isRTL }) {
  const [imgOk, setImgOk] = useState(true);
  const image =
    project?.image ||
    project?.data?.hero?.backgroundUrl ||
    project?.data?.hero?.image ||
    project?.data?.gallery?.slides?.[0] ||
    project?.data?.intro?.imgUrl ||
    "";
  const name = humanizeName(getLocalizedProjectName(project, isRTL));
  const dev = humanizeName(getLocalizedDeveloperName(project, isRTL));
  const href = project?.href || "#";

  return (
    <Link href={href} className={styles.propCard} aria-label={name}>
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
      <div className={styles.propCardBody}>
        {dev && <span className={styles.propCardDev}>{dev}</span>}
        <span className={styles.propCardName}>{name}</span>
      </div>
    </Link>
  );
}

export default function FooterFinal() {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";
  const pathname = usePathname();
  const { allProjects } = useAllProjects();

  const [cards, setCards] = useState([]);
  const [siteContact, setSiteContact] = useState(null);

  useEffect(() => {
    if (!allProjects?.length) return;
    const pool = allProjects.filter((p) => !p?.isLand && p?.image);
    const featured = pool.filter((project) => project?.featured);
    const orderedPool = [...(featured.length ? featured : pool)].sort((a, b) => {
      const aFeatured = a?.featured ? 1 : 0;
      const bFeatured = b?.featured ? 1 : 0;
      if (aFeatured !== bFeatured) return bFeatured - aFeatured;
      return String(a?.nameEn || a?.name || a?.slug || "").localeCompare(
        String(b?.nameEn || b?.name || b?.slug || "")
      );
    });
    setCards(orderedPool.slice(0, 9));
  }, [pathname, allProjects]);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/site-settings", { cache: "no-store" });
        const json = await res.json();
        if (active && json?.ok) {
          setSiteContact(json?.data?.contact || null);
        }
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, []);

  const year = new Date().getFullYear();

  const copy = {
    logoBar: isRTL ? "محمد قدماني للوساطة العقارية" : "Mohamad Kodmane Real Estate Brokers",
    featuredProps: isRTL ? "مشاريع مميزة" : "FEATURED PROPERTIES",
    corpName: isRTL ? "محمد قدماني" : "MOHAMAD KODMANE",
    corpTitle: isRTL ? "وسيط عقاري معتمد" : "REAL ESTATE BROKER",
    license: isRTL ? "رخصة تجارية: 1192580" : "TRADE LICENSE: 1192580",
    permit: isRTL ? "تصريح إعلاني: 139532" : "ADVERTISING PERMIT: 139532",
    rera: isRTL ? "معتمد من RERA" : "RERA CERTIFIED",
    hqTitle: isRTL ? "المقر الرئيسي" : "HEADQUARTERS",
    addrLine1: isRTL ? "الطابق 22، برج 22ND COURT" : "22ND FLOOR, 22ND COURT TOWER",
    addrLine2: isRTL ? "مكتب B08، الخليج التجاري" : "OFFICE B08, BUSINESS BAY",
    addrLine3: isRTL ? "دبي، الإمارات العربية المتحدة" : "DUBAI, UNITED ARAB EMIRATES",
    poBox: isRTL ? "ص.ب. 446097" : "P.O. BOX 446097",
    consultation: isRTL ? "استشارة خاصة" : "PRIVATE CONSULTATION",
    direct: isRTL ? "مباشر:" : "DIRECT:",
    office: isRTL ? "مكتب:" : "OFFICE:",
    email: isRTL ? "بريد:" : "EMAIL:",
    rights: isRTL ? "جميع الحقوق محفوظة." : "All rights reserved.",
  };

  const socials = [
    siteContact?.instagram ? { id: "instagram", href: siteContact.instagram, label: "Instagram" } : null,
    siteContact?.youtube ? { id: "youtube", href: siteContact.youtube, label: "YouTube" } : null,
    siteContact?.linkedin ? { id: "linkedin", href: siteContact.linkedin, label: "LinkedIn" } : null,
  ].filter(Boolean);

  const phoneHref = siteContact?.phone ? `tel:${String(siteContact.phone).replace(/\s+/g, "")}` : null;
  const officeHref = siteContact?.phone ? `tel:${String(siteContact.phone).replace(/\s+/g, "")}` : null;
  const emailHref = siteContact?.email ? `mailto:${siteContact.email}` : null;
  const phoneLabel = siteContact?.whatsapp || siteContact?.phone || (isRTL ? "أضف رقم واتساب" : "Add WhatsApp number");
  const officeLabel = siteContact?.phone || (isRTL ? "أضف رقم المكتب" : "Add office phone");
  const emailLabel = (siteContact?.email || (isRTL ? "أضف البريد الإلكتروني" : "Add email")).toUpperCase();

  return (
    <footer className={`${styles.footer} ${isRTL ? styles.rtl : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.logoBar}>
        <div className={styles.logoBarInner}>
          <div className={styles.logoWrap}>{copy.logoBar}</div>
        </div>
      </div>

      <div className={styles.footerMain}>
        {cards.length > 0 && (
          <div className={styles.footerMainInner}>
            <h4 className={styles.cardsHeading}>{copy.featuredProps}</h4>
            <div className={styles.propCardsGrid}>
              {cards.map((p) => (
                <PropertyCard key={p.slug || p.href} project={p} isRTL={isRTL} />
              ))}
            </div>
          </div>
        )}

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
                  {phoneHref ? (
                    <Link href={phoneHref} className={styles.contactNumber}>{phoneLabel}</Link>
                  ) : (
                    <span className={styles.contactNumber}>{phoneLabel}</span>
                  )}
                </div>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>{copy.office}</span>
                  {officeHref ? (
                    <Link href={officeHref} className={styles.contactNumber}>{officeLabel}</Link>
                  ) : (
                    <span className={styles.contactNumber}>{officeLabel}</span>
                  )}
                </div>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>{copy.email}</span>
                  {emailHref ? (
                    <Link href={emailHref} className={styles.contactEmail}>{emailLabel}</Link>
                  ) : (
                    <span className={styles.contactEmail}>{emailLabel}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerMeta}>
          <div className={styles.footerMetaInner}>
            <div className={styles.metaCopy}>
              © {year}. {copy.logoBar}. {copy.rights}
            </div>
            <div className={styles.metaSocials} aria-label="Social media links">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.metaSocialLink}
                  aria-label={s.label}
                >
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
