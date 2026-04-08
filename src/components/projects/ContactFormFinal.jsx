"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "@/styles/projects/ContactFormFinal.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import * as ga from "@/lib/ga";

// FB tracking helper
const fbTrack = (type, eventName, params = {}) => {
  if (typeof window === "undefined" || !window.fbq) return;
  if (type === "custom") window.fbq("trackCustom", eventName, params);
  else window.fbq("track", eventName, params);
};

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.toastContent}>
        <span className={styles.toastMessage}>{message}</span>
        <button
          type="button"
          className={styles.toastClose}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

/**
 * ✅ Minimal country list
 */
const COUNTRIES = [
  {
    code: "AE",
    nameEn: "United Arab Emirates",
    nameAr: "الإمارات",
    dial: "971",
    flag: "🇦🇪",
  },
  {
    code: "SA",
    nameEn: "Saudi Arabia",
    nameAr: "السعودية",
    dial: "966",
    flag: "🇸🇦",
  },
  { code: "EG", nameEn: "Egypt", nameAr: "مصر", dial: "20", flag: "🇪🇬" },
  { code: "KW", nameEn: "Kuwait", nameAr: "الكويت", dial: "965", flag: "🇰🇼" },
  { code: "QA", nameEn: "Qatar", nameAr: "قطر", dial: "974", flag: "🇶🇦" },
  { code: "BH", nameEn: "Bahrain", nameAr: "البحرين", dial: "973", flag: "🇧🇭" },
  { code: "OM", nameEn: "Oman", nameAr: "عُمان", dial: "968", flag: "🇴🇲" },
  { code: "JO", nameEn: "Jordan", nameAr: "الأردن", dial: "962", flag: "🇯🇴" },
  { code: "LB", nameEn: "Lebanon", nameAr: "لبنان", dial: "961", flag: "🇱🇧" },
  { code: "IQ", nameEn: "Iraq", nameAr: "العراق", dial: "964", flag: "🇮🇶" },
  { code: "SY", nameEn: "Syria", nameAr: "سوريا", dial: "963", flag: "🇸🇾" },
  { code: "MA", nameEn: "Morocco", nameAr: "المغرب", dial: "212", flag: "🇲🇦" },
  { code: "DZ", nameEn: "Algeria", nameAr: "الجزائر", dial: "213", flag: "🇩🇿" },
  { code: "TN", nameEn: "Tunisia", nameAr: "تونس", dial: "216", flag: "🇹🇳" },
  { code: "TR", nameEn: "Turkey", nameAr: "تركيا", dial: "90", flag: "🇹🇷" },
  {
    code: "GB",
    nameEn: "United Kingdom",
    nameAr: "المملكة المتحدة",
    dial: "44",
    flag: "🇬🇧",
  },
  {
    code: "US",
    nameEn: "United States",
    nameAr: "الولايات المتحدة",
    dial: "1",
    flag: "🇺🇸",
  },
  { code: "CA", nameEn: "Canada", nameAr: "كندا", dial: "1", flag: "🇨🇦" },
  { code: "DE", nameEn: "Germany", nameAr: "ألمانيا", dial: "49", flag: "🇩🇪" },
  { code: "FR", nameEn: "France", nameAr: "فرنسا", dial: "33", flag: "🇫🇷" },
];

export default function ContactFormFinal({
  projectData,
  defaultTab = "BUY_PROPERTY",
}) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";
  const [siteContact, setSiteContact] = useState(null);
  const assignedBroker = useMemo(() => {
    const broker = projectData?.broker || projectData?.assignedBroker || null;
    if (!broker || typeof broker !== "object") return null;

    const localizedName =
      locale === "ar"
        ? broker?.nameAr || broker?.name
        : broker?.name || broker?.nameAr;
    const localizedRole =
      locale === "ar"
        ? broker?.roleAr || broker?.role
        : broker?.role || broker?.roleAr;
    const localizedLanguages =
      locale === "ar"
        ? broker?.languagesAr?.length
          ? broker.languagesAr
          : broker?.languages
        : broker?.languages?.length
        ? broker.languages
        : broker?.languagesAr;

    if (
      !localizedName &&
      !broker?.phone &&
      !broker?.whatsapp &&
      !broker?.email &&
      !broker?.photo
    ) {
      return null;
    }

    return {
      name: localizedName || "",
      role: localizedRole || "",
      phone: broker?.phone || "",
      whatsapp: broker?.whatsapp || "",
      email: broker?.email || "",
      photo: broker?.photo || "",
      languages: Array.isArray(localizedLanguages)
        ? localizedLanguages.filter(Boolean)
        : [],
    };
  }, [locale, projectData]);

  // ✅ project name
  const projectName =
    projectData?.project?.name ||
    projectData?.en?.project?.name ||
    projectData?.ar?.project?.name ||
    "Unknown Project";

  // ✅ floorPlan titles as unit options
  const unitOptions = useMemo(() => {
    const plans = projectData?.floorPlans?.plans;
    if (!Array.isArray(plans) || plans.length === 0) return [];
    const titles = plans
      .map((p) => p?.title || p?.specs?.Unit || p?.id)
      .filter(Boolean);
    return [...new Set(titles)];
  }, [projectData]);

  const [activeTab, setActiveTab] = useState(defaultTab);

  // ✅ ALWAYS start with UAE
  const UAE = COUNTRIES.find((c) => c.code === "AE");

  // ✅ BUY PROPERTY form data
  const [buyFormData, setBuyFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    project: projectName,
    unitType: "",
    contactMethod: "phone",
    agreePrivacy: false,
    agreeNews: false,
  });

  // ✅ CAREERS form data
  const [careersFormData, setCareersFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    cvFile: null,
    cvFileName: "",
    agreePrivacy: false,
  });

  const [selectedCountry, setSelectedCountry] = useState(UAE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);

  const showToast = (message, type = "success") => setToast({ message, type });

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/site-settings", { cache: "no-store" });
        const json = await res.json();
        if (active && json?.ok) setSiteContact(json?.data?.contact || null);
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const body = document.body;
    const previousWhatsapp = body.dataset.propertyWhatsapp || "";
    const previousBrokerName = body.dataset.propertyBrokerName || "";
    const previousPropertyName = body.dataset.propertyName || "";

    if (assignedBroker?.whatsapp) {
      body.dataset.propertyWhatsapp = assignedBroker.whatsapp;
    } else {
      delete body.dataset.propertyWhatsapp;
    }

    if (assignedBroker?.name) {
      body.dataset.propertyBrokerName = assignedBroker.name;
    } else {
      delete body.dataset.propertyBrokerName;
    }

    if (projectName) {
      body.dataset.propertyName = projectName;
    } else {
      delete body.dataset.propertyName;
    }

    return () => {
      if (previousWhatsapp) body.dataset.propertyWhatsapp = previousWhatsapp;
      else delete body.dataset.propertyWhatsapp;

      if (previousBrokerName) body.dataset.propertyBrokerName = previousBrokerName;
      else delete body.dataset.propertyBrokerName;

      if (previousPropertyName) body.dataset.propertyName = previousPropertyName;
      else delete body.dataset.propertyName;
    };
  }, [assignedBroker, projectName]);

  // ✅ Reset form when tab changes
  useEffect(() => {
    setSelectedCountry(UAE);
    setHasStartedTyping(false);
  }, [activeTab]);

  // ✅ if route changes, keep project locked + reset unit type
  useEffect(() => {
    setBuyFormData((prev) => ({
      ...prev,
      project: projectName,
      unitType: "",
    }));
  }, [projectName]);

  // ✅ close country dropdown on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setCountryOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const trackFormStartedIfNeeded = (fieldName) => {
    if (hasStartedTyping) return;
    setHasStartedTyping(true);
    fbTrack("custom", "FormStarted", {
      form: activeTab === "BUY_PROPERTY" ? "BuyPropertyForm" : "CareersForm",
      project: projectName,
      field: fieldName,
      locale,
    });
  };

  // ✅ Handle Buy Property form changes
  const handleBuyChange = (e) => {
    const { name, value, type, checked } = e.target;
    trackFormStartedIfNeeded(name);

    setBuyFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Handle Careers form changes
  const handleCareersChange = (e) => {
    const { name, value, type, checked } = e.target;
    trackFormStartedIfNeeded(name);

    setCareersFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Handle CV file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast(
        isRTL
          ? "الملف كبير جداً. الحد الأقصى 5 ميجابايت"
          : "File too large. Maximum size is 5MB",
        "error"
      );
      return;
    }

    // Check file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];
    if (!allowedTypes.includes(file.type)) {
      showToast(
        isRTL
          ? "نوع الملف غير مدعوم. يُرجى تحميل ملف PDF أو Word"
          : "File type not supported. Please upload PDF or Word file",
        "error"
      );
      return;
    }

    setCareersFormData((prev) => ({
      ...prev,
      cvFile: file,
      cvFileName: file.name,
    }));
  };

  // ✅ Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // ✅ Remove uploaded file
  const handleRemoveFile = () => {
    setCareersFormData((prev) => ({
      ...prev,
      cvFile: null,
      cvFileName: "",
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // ✅ local digits only
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    trackFormStartedIfNeeded("phone");

    if (activeTab === "BUY_PROPERTY") {
      setBuyFormData((prev) => ({ ...prev, phone: value }));
    } else {
      setCareersFormData((prev) => ({ ...prev, phone: value }));
    }
  };

  // ✅ full phone sent to API: +971 + local digits
  const fullPhone = useMemo(() => {
    const dial = selectedCountry?.dial || "971";
    const local =
      activeTab === "BUY_PROPERTY" ? buyFormData.phone : careersFormData.phone;
    return `+${dial}${local}`;
  }, [selectedCountry, buyFormData.phone, careersFormData.phone, activeTab]);

  // ✅ Handle Buy Property form submission
  const handleBuySubmit = async (e) => {
    e.preventDefault();

    if (
      !buyFormData.firstName ||
      !buyFormData.lastName ||
      !buyFormData.phone ||
      !buyFormData.email
    ) {
      showToast(
        isRTL
          ? "يرجى ملء جميع الحقول المطلوبة"
          : "Please fill in all required fields",
        "error"
      );
      return;
    }

    if (!buyFormData.agreePrivacy) {
      showToast(
        isRTL
          ? "يرجى الموافقة على سياسة الخصوصية"
          : "Please agree to the privacy policy.",
        "error"
      );
      return;
    }

    // ✅ basic phone validation: local digits length
    if (buyFormData.phone.length < 7) {
      showToast(
        isRTL
          ? "يرجى إدخال رقم هاتف صحيح"
          : "Please enter a valid phone number",
        "error"
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(buyFormData.email)) {
      showToast(
        isRTL
          ? "يرجى إدخال بريد إلكتروني صحيح"
          : "Please enter a valid email address",
        "error"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...buyFormData,
          phone: fullPhone,
          countryCode: selectedCountry.code,
          dialingCode: `+${selectedCountry.dial}`,
          formType: "PROJECT_FORM",
          locale,
          brokerName: assignedBroker?.name || "",
          brokerEmail: assignedBroker?.email || "",
          brokerPhone: assignedBroker?.phone || "",
          brokerWhatsapp: assignedBroker?.whatsapp || "",
          brokerRole: assignedBroker?.role || "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        fbTrack("standard", "Lead", {
          source: "ContactFormFinal",
          project: projectName,
          unitType: buyFormData.unitType || "Any",
          contactMethod: buyFormData.contactMethod,
          locale,
        });

        // ✅ ADDED: Google Analytics event for property lead
        ga.event({
          action: "submit_lead",
          category: "conversion",
          label: `buy_property_form | ${projectName}`,
          value: 1,
        });

        showToast(
          isRTL
            ? "شكراً لك! سيتواصل معك مستشار العقارات الفاخرة خلال 24 ساعة."
            : result.message,
          "success"
        );

        // ✅ reset + keep UAE
        setSelectedCountry(UAE);
        setBuyFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          project: projectName,
          unitType: "",
          contactMethod: "phone",
          agreePrivacy: false,
          agreeNews: false,
        });
        setHasStartedTyping(false);
      } else {
        showToast(
          result.message ||
            (isRTL
              ? "حدث خطأ. يرجى المحاولة مرة أخرى."
              : "Something went wrong. Please try again."),
          "error"
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      showToast(
        isRTL
          ? "خطأ في الشبكة. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة."
          : "Network error. Please try again or contact us directly.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Handle Careers form submission
  const handleCareersSubmit = async (e) => {
    e.preventDefault();

    if (
      !careersFormData.firstName ||
      !careersFormData.lastName ||
      !careersFormData.email ||
      !careersFormData.phone ||
      !careersFormData.message ||
      !careersFormData.cvFile
    ) {
      showToast(
        isRTL
          ? "يرجى ملء جميع الحقول المطلوبة وتحميل السيرة الذاتية"
          : "Please fill all required fields and upload your CV",
        "error"
      );
      return;
    }

    if (!careersFormData.agreePrivacy) {
      showToast(
        isRTL
          ? "يرجى الموافقة على سياسة الخصوصية"
          : "Please agree to the privacy policy.",
        "error"
      );
      return;
    }

    if (careersFormData.phone.length < 7) {
      showToast(
        isRTL
          ? "يرجى إدخال رقم هاتف صحيح"
          : "Please enter a valid phone number",
        "error"
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(careersFormData.email)) {
      showToast(
        isRTL
          ? "يرجى إدخال بريد إلكتروني صحيح"
          : "Please enter a valid email address",
        "error"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append("firstName", careersFormData.firstName);
      formData.append("lastName", careersFormData.lastName);
      formData.append("email", careersFormData.email);
      formData.append("phone", fullPhone);
      formData.append("message", careersFormData.message);
      formData.append("countryCode", selectedCountry.code);
      formData.append("dialingCode", `+${selectedCountry.dial}`);
      formData.append("formType", "CAREERS_FORM");
      formData.append("locale", locale);

      if (careersFormData.cvFile) {
        formData.append("cv", careersFormData.cvFile);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        fbTrack("standard", "CareersApplication", {
          source: "ContactFormFinal",
          locale,
        });

        showToast(
          isRTL
            ? "شكراً لتقديم طلبك! سيتواصل معك فريق الموارد البشرية قريباً."
            : "Thank you for your application! HR team will contact you soon.",
          "success"
        );

        // ✅ reset form
        setSelectedCountry(UAE);
        setCareersFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          cvFile: null,
          cvFileName: "",
          agreePrivacy: false,
        });
        setHasStartedTyping(false);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        showToast(
          result.message ||
            (isRTL
              ? "حدث خطأ. يرجى المحاولة مرة أخرى."
              : "Something went wrong. Please try again."),
          "error"
        );
      }
    } catch (err) {
      console.error("Careers submission error:", err);
      showToast(
        isRTL
          ? "خطأ في الشبكة. يرجى المحاولة مرة أخرى."
          : "Network error. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Determine which form to use
  const handleSubmit =
    activeTab === "BUY_PROPERTY" ? handleBuySubmit : handleCareersSubmit;

  // ✅ Determine which form data to use
  const currentFormData =
    activeTab === "BUY_PROPERTY" ? buyFormData : careersFormData;
  const contactHeadline = isRTL
    ? siteContact?.formTitleAr || "Hear From You"
    : siteContact?.formTitle || "Hear From You";
  const whatsappHref = siteContact?.whatsapp
    ? `https://wa.me/${String(siteContact.whatsapp).replace(/\D/g, "")}`
    : null;
  const contactLinks = [
    siteContact?.phone
      ? { key: "phone", href: `tel:${siteContact.phone}`, label: "Call", value: siteContact.phone }
      : null,
    siteContact?.email
      ? { key: "email", href: `mailto:${siteContact.email}`, label: "Email", value: siteContact.email }
      : null,
    whatsappHref
      ? { key: "whatsapp", href: whatsappHref, label: "WhatsApp", value: siteContact?.whatsapp }
      : null,
  ].filter(Boolean);
  const brokerActions = [
    assignedBroker?.phone
      ? {
          key: "phone",
          href: `tel:${assignedBroker.phone}`,
          label: isRTL ? "اتصال" : "Call",
          value: assignedBroker.phone,
        }
      : null,
    assignedBroker?.whatsapp
      ? {
          key: "whatsapp",
          href: `https://wa.me/${String(assignedBroker.whatsapp).replace(/\D/g, "")}`,
          label: "WhatsApp",
          value: assignedBroker.whatsapp,
        }
      : null,
    assignedBroker?.email
      ? {
          key: "email",
          href: `mailto:${assignedBroker.email}`,
          label: isRTL ? "البريد" : "Email",
          value: assignedBroker.email,
        }
      : null,
  ].filter(Boolean);

  return (
    <section className={styles.section} dir={isRTL ? "rtl" : "ltr"}>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div
            className={styles.left}
            data-contact-headline={contactHeadline}
            data-contact-links={contactLinks.length}
          >
            <div className={styles.kicker}>
              {isRTL ? "نود أن" : "WE'D LOVE TO"}
            </div>
            <h2 className={styles.headline}>
              {isRTL ? "نسمع منك" : "Hear From You"}
            </h2>

            <div className={styles.leftMeta}>
              <div className={styles.metaLabel}>
                {isRTL ? "ابدأ الآن" : "GET IN TOUCH"}
              </div>
              <div className={styles.metaText}>
                {isRTL
                  ? "املأ النموذج وسيقوم فريقنا بالتواصل معك."
                  : "Fill the form and our team will reach out to you."}
              </div>
            </div>

            {assignedBroker && (
              <div className={styles.brokerCard}>
                <div className={styles.brokerHeader}>
                  {assignedBroker.photo ? (
                    <img
                      src={assignedBroker.photo}
                      alt={assignedBroker.name || projectName}
                      className={styles.brokerAvatar}
                    />
                  ) : (
                    <div className={styles.brokerAvatarFallback}>
                      {(assignedBroker.name || "B").trim().charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div className={styles.brokerIdentity}>
                    <div className={styles.brokerEyebrow}>
                      {isRTL ? "المستشار المسؤول" : "Assigned Broker"}
                    </div>
                    <div className={styles.brokerName}>{assignedBroker.name}</div>
                    {assignedBroker.role ? (
                      <div className={styles.brokerRole}>{assignedBroker.role}</div>
                    ) : null}
                  </div>
                </div>

                {assignedBroker.languages?.length ? (
                  <div className={styles.brokerLanguages}>
                    {assignedBroker.languages.map((language) => (
                      <span key={language} className={styles.brokerLanguageChip}>
                        {language}
                      </span>
                    ))}
                  </div>
                ) : null}

                {brokerActions.length ? (
                  <div className={styles.brokerActions}>
                    {brokerActions.map((action) => (
                      <a
                        key={action.key}
                        href={action.href}
                        className={styles.brokerAction}
                        target={action.key === "whatsapp" ? "_blank" : undefined}
                        rel={action.key === "whatsapp" ? "noreferrer" : undefined}
                      >
                        <span className={styles.brokerActionLabel}>{action.label}</span>
                        <span className={styles.brokerActionValue}>{action.value}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.tabs}>
              <button
                type="button"
                className={`${styles.tab} ${
                  activeTab === "BUY_PROPERTY" ? styles.tabActive : ""
                }`}
                onClick={() => setActiveTab("BUY_PROPERTY")}
              >
                {isRTL ? "شراء عقار" : "BUY PROPERTY"}
              </button>
              <button
                type="button"
                className={`${styles.tab} ${
                  activeTab === "CAREERS" ? styles.tabActive : ""
                }`}
                onClick={() => setActiveTab("CAREERS")}
              >
                {isRTL ? "وظائف" : "CAREERS"}
              </button>
            </div>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
              encType={
                activeTab === "CAREERS" ? "multipart/form-data" : undefined
              }
            >
              {/* BUY PROPERTY FORM */}
              {activeTab === "BUY_PROPERTY" && (
                <>
                  {/* Preferred Mode */}
                  <div className={styles.formSecRow}>
                    <div className={styles.formTitle}>
                      {isRTL
                        ? "طريقة التواصل المفضلة"
                        : "Preferred Mode of Contact"}{" "}
                      <span className={styles.req}>*</span>
                    </div>

                    <div className={styles.formCheckRow}>
                      <label
                        className={`${styles.formCheckBlock} ${
                          buyFormData.contactMethod === "phone"
                            ? styles.optionChecked
                            : ""
                        }`}
                      >
                        <span className={styles.checkText}>
                          {isRTL ? "طلب معاودة الاتصال" : "Request a call back"}
                        </span>

                        <input
                          className={styles.hiddenRadio}
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={buyFormData.contactMethod === "phone"}
                          onChange={handleBuyChange}
                        />
                        <span className={styles.fakeRadio} aria-hidden="true" />
                      </label>

                      <label
                        className={`${styles.formCheckBlock} ${
                          buyFormData.contactMethod === "email"
                            ? styles.optionChecked
                            : ""
                        }`}
                      >
                        <span className={styles.checkText}>
                          {isRTL
                            ? "جدولة مكالمة فيديو"
                            : "Schedule a video call"}
                        </span>

                        <input
                          className={styles.hiddenRadio}
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={buyFormData.contactMethod === "email"}
                          onChange={handleBuyChange}
                        />
                        <span className={styles.fakeRadio} aria-hidden="true" />
                      </label>
                    </div>
                  </div>

                  {/* Names */}
                  <div className={styles.row2}>
                    <div className={styles.formDiv}>
                      <input
                        className={styles.field}
                        type="text"
                        name="firstName"
                        value={buyFormData.firstName}
                        onChange={handleBuyChange}
                        placeholder={isRTL ? "الاسم الأول *" : "First Name *"}
                        required
                      />
                    </div>

                    <div className={styles.formDiv}>
                      <input
                        className={styles.field}
                        type="text"
                        name="lastName"
                        value={buyFormData.lastName}
                        onChange={handleBuyChange}
                        placeholder={isRTL ? "اسم العائلة *" : "Last Name *"}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={styles.formDiv}>
                    <div className={styles.phoneWrap} ref={dropdownRef}>
                      {/* Country dropdown button */}
                      <button
                        type="button"
                        className={styles.countryBox}
                        onClick={() => setCountryOpen((s) => !s)}
                        aria-label="Select country code"
                      >
                        <span className={styles.flag}>
                          {selectedCountry.flag}
                        </span>
                        <span className={styles.code}>
                          +{selectedCountry.dial}
                        </span>
                        <span className={styles.chev} />
                      </button>

                      {/* Dropdown */}
                      {countryOpen && (
                        <div className={styles.countryDropdown} role="listbox">
                          {COUNTRIES.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              className={styles.countryOption}
                              onClick={() => {
                                setSelectedCountry(c);
                                setCountryOpen(false);
                              }}
                            >
                              <span className={styles.countryFlag}>
                                {c.flag}
                              </span>
                              <span className={styles.countryName}>
                                {isRTL ? c.nameAr : c.nameEn}
                              </span>
                              <span className={styles.countryDial}>
                                +{c.dial}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Phone digits input */}
                      <input
                        className={styles.phoneField}
                        type="tel"
                        name="phone"
                        value={buyFormData.phone}
                        onChange={handlePhoneChange}
                        placeholder={isRTL ? "XX XXX XXXX *" : "XX XXX XXXX *"}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.formDiv}>
                    <input
                      className={styles.field}
                      type="email"
                      name="email"
                      value={buyFormData.email}
                      onChange={handleBuyChange}
                      placeholder={isRTL ? "البريد الإلكتروني *" : "Email *"}
                      required
                    />
                  </div>

                  {/* Project + Unit */}
                  <div className={styles.row2}>
                    <div className={styles.formDiv}>
                      <input
                        className={styles.field}
                        type="text"
                        name="project"
                        value={buyFormData.project}
                        disabled
                        readOnly
                        aria-label="Project"
                      />
                    </div>

                    <div className={styles.formDiv}>
                      <select
                        className={styles.select}
                        name="unitType"
                        value={buyFormData.unitType}
                        onChange={handleBuyChange}
                        aria-label="Unit Type"
                      >
                        <option value="">
                          {isRTL ? "نوع الوحدة" : "Unit Type"}
                        </option>
                        {unitOptions.map((u) => (
                          <option key={u} value={u}>
                            {u}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Checks */}
                  <div className={styles.checks}>
                    <label className={styles.checkLine}>
                      <input
                        type="checkbox"
                        name="agreePrivacy"
                        checked={buyFormData.agreePrivacy}
                        onChange={handleBuyChange}
                        className={styles.checkbox}
                        required
                      />
                      <span className={styles.checkLabel}>
                        {isRTL
                          ? "لقد قرأت ووافقت على سياسة الخصوصية. *"
                          : "I've read and agree to the privacy policy. *"}
                      </span>
                    </label>

                    <label className={styles.checkLine}>
                      <input
                        type="checkbox"
                        name="agreeNews"
                        checked={buyFormData.agreeNews}
                        onChange={handleBuyChange}
                        className={styles.checkbox}
                      />
                      <span className={styles.checkLabel}>
                        {isRTL
                          ? "أود سماع الأخبار والعروض."
                          : "I'd like to hear about news and offers."}
                      </span>
                    </label>
                  </div>
                </>
              )}

              {/* CAREERS FORM */}
              {activeTab === "CAREERS" && (
                <>
                  {/* Names */}
                  <div className={styles.row2}>
                    <div className={styles.formDiv}>
                      <input
                        className={styles.field}
                        type="text"
                        name="firstName"
                        value={careersFormData.firstName}
                        onChange={handleCareersChange}
                        placeholder={isRTL ? "الاسم الأول *" : "First Name *"}
                        required
                      />
                    </div>

                    <div className={styles.formDiv}>
                      <input
                        className={styles.field}
                        type="text"
                        name="lastName"
                        value={careersFormData.lastName}
                        onChange={handleCareersChange}
                        placeholder={isRTL ? "اسم العائلة *" : "Last Name *"}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.formDiv}>
                    <input
                      className={styles.field}
                      type="email"
                      name="email"
                      value={careersFormData.email}
                      onChange={handleCareersChange}
                      placeholder={isRTL ? "البريد الإلكتروني *" : "Email *"}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className={styles.formDiv}>
                    <div className={styles.phoneWrap} ref={dropdownRef}>
                      {/* Country dropdown button */}
                      <button
                        type="button"
                        className={styles.countryBox}
                        onClick={() => setCountryOpen((s) => !s)}
                        aria-label="Select country code"
                      >
                        <span className={styles.flag}>
                          {selectedCountry.flag}
                        </span>
                        <span className={styles.code}>
                          +{selectedCountry.dial}
                        </span>
                        <span className={styles.chev} />
                      </button>

                      {/* Dropdown */}
                      {countryOpen && (
                        <div className={styles.countryDropdown} role="listbox">
                          {COUNTRIES.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              className={styles.countryOption}
                              onClick={() => {
                                setSelectedCountry(c);
                                setCountryOpen(false);
                              }}
                            >
                              <span className={styles.countryFlag}>
                                {c.flag}
                              </span>
                              <span className={styles.countryName}>
                                {isRTL ? c.nameAr : c.nameEn}
                              </span>
                              <span className={styles.countryDial}>
                                +{c.dial}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Phone digits input */}
                      <input
                        className={styles.phoneField}
                        type="tel"
                        name="phone"
                        value={careersFormData.phone}
                        onChange={handlePhoneChange}
                        placeholder={isRTL ? "XX XXX XXXX *" : "XX XXX XXXX *"}
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className={styles.formDiv}>
                    <textarea
                      className={styles.textarea}
                      name="message"
                      value={careersFormData.message}
                      onChange={handleCareersChange}
                      placeholder={isRTL ? "الرسالة *" : "Message *"}
                      rows={4}
                      required
                    />
                  </div>

                  {/* CV Upload */}
                  <div className={styles.formDiv}>
                    <div className={styles.fileUploadContainer}>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleFileChange}
                        className={styles.fileInput}
                        style={{ display: "none" }}
                      />

                      <button
                        type="button"
                        className={styles.uploadButton}
                        onClick={handleUploadClick}
                      >
                        <span className={styles.uploadIcon}>📎</span>
                        <span className={styles.uploadText}>
                          {isRTL ? "تحميل السيرة الذاتية" : "Upload CV"}
                        </span>
                      </button>

                      {careersFormData.cvFileName && (
                        <div className={styles.filePreview}>
                          <span className={styles.fileName}>
                            {careersFormData.cvFileName}
                          </span>
                          <button
                            type="button"
                            className={styles.removeFile}
                            onClick={handleRemoveFile}
                            aria-label={isRTL ? "إزالة الملف" : "Remove file"}
                          >
                            ×
                          </button>
                        </div>
                      )}

                      <div className={styles.fileHint}>
                        {isRTL
                          ? "الملفات المسموح بها: PDF, Word, TXT (الحد الأقصى 5 ميجابايت)"
                          : "Accepted files: PDF, Word, TXT (Max 5MB)"}
                      </div>
                    </div>
                  </div>

                  {/* Privacy Check */}
                  <div className={styles.checks}>
                    <label className={styles.checkLine}>
                      <input
                        type="checkbox"
                        name="agreePrivacy"
                        checked={careersFormData.agreePrivacy}
                        onChange={handleCareersChange}
                        className={styles.checkbox}
                        required
                      />
                      <span className={styles.checkLabel}>
                        {isRTL
                          ? "لقد قرأت ووافقت على سياسة الخصوصية. *"
                          : "I've read and agree to the privacy policy. *"}
                      </span>
                    </label>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div className={styles.submitRow}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? isRTL
                      ? "جاري الإرسال..."
                      : "SUBMITTING..."
                    : activeTab === "BUY_PROPERTY"
                    ? isRTL
                      ? "إرسال"
                      : "SUBMIT"
                    : isRTL
                    ? "تقديم الطلب"
                    : "APPLY NOW"}
                </button>
              </div>
            </form>

            <div className={styles.bottomNote}>
              {isRTL
                ? "بياناتك آمنة ولن نشاركها مع أي طرف ثالث."
                : "Your details are secure and will not be shared with third parties."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
