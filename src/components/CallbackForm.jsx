"use client";
import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import styles from "@/styles/CallbackForm.module.css";

export default function CallbackForm() {
  const { locale, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [activeField, setActiveField] = useState(null);

  // 🔹 keep track of which fields we already tracked typing for
  const [trackedFields, setTrackedFields] = useState({});

  const isRTL = locale === "ar";

  // 🔹 Meta Pixel helper (same pattern as other components)
  const track = (eventName, params = {}) => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") {
      return;
    }
    window.fbq("trackCustom", eventName, params);
  };

  const getPropertyLeadContext = () => {
    if (typeof document === "undefined" || !document.body?.dataset) {
      return {};
    }

    return {
      project: document.body.dataset.propertyName || "",
      brokerName: document.body.dataset.propertyBrokerName || "",
      brokerRole: document.body.dataset.propertyBrokerRole || "",
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // 🔹 track submit attempt
    track("CallbackFormSubmit", {
      locale,
      hasName: !!formData.name,
      hasPhone: !!formData.phone,
      interest: formData.interest || null,
    });

    try {
      console.log("🔄 Submitting form...", formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          ...getPropertyLeadContext(),
          formType: "CALLBACK_FORM",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          locale: locale,
        }),
      });

      const result = await response.json();
      console.log("📨 API Response:", result);

      if (result.success) {
        // 🔹 track successful submit
        track("CallbackFormSubmitSuccess", {
          locale,
          interest: formData.interest || null,
        });

        setIsSubmitted(true);
        setFormData({ name: "", phone: "", interest: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setSubmitError(result.message || t("callback.errorGeneric"));
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      setSubmitError(t("callback.errorNetwork"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 🔹 track typing once per field (to avoid spamming on every keystroke)
    if (!trackedFields[name]) {
      setTrackedFields((prev) => ({ ...prev, [name]: true }));
      track("CallbackFormFieldChange", {
        field: name,
        locale,
      });
    }
  };

  return (
    <section
      className={`${styles.callbackSection} ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.gridLines}></div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.creativeHeader} ${isRTL ? styles.rtl : ""}`}>
          {isRTL ? (
            <>
              <div className={styles.headerContent}>
                <h2 className={styles.formTitle}>
                  <span className={styles.titleLine}>
                    {t("callback.sectionTitleLine1")}
                  </span>
                  <span className={styles.titleAccent}>
                    {t("callback.sectionTitleAccent")}
                  </span>
                  <span className={styles.titleLine}>
                    {t("callback.sectionTitleLine2")}
                  </span>
                </h2>
                <div className={styles.creativeDivider}>
                  <div className={styles.dividerLine}></div>
                  <div className={styles.dividerDot}></div>
                  <div className={styles.dividerLine}></div>
                </div>
                <p
                  className={styles.formSubtitle}
                  dangerouslySetInnerHTML={{ __html: t("callback.subtitle") }}
                />
              </div>
              <div className={styles.headerVisual}>
                <div className={styles.visualElement}>
                  <div className={styles.pulseRing}></div>
                  <div className={styles.pulseRing}></div>
                  <div className={styles.centerDot}></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.headerVisual}>
                <div className={styles.visualElement}>
                  <div className={styles.pulseRing}></div>
                  <div className={styles.pulseRing}></div>
                  <div className={styles.centerDot}></div>
                </div>
              </div>
              <div className={styles.headerContent}>
                <h2 className={styles.formTitle}>
                  <span className={styles.titleLine}>
                    {t("callback.sectionTitleLine1")}
                  </span>
                  <span className={styles.titleAccent}>
                    {t("callback.sectionTitleAccent")}
                  </span>
                  <span className={styles.titleLine}>
                    {t("callback.sectionTitleLine2")}
                  </span>
                </h2>
                <div className={styles.creativeDivider}>
                  <div className={styles.dividerLine}></div>
                  <div className={styles.dividerDot}></div>
                  <div className={styles.dividerLine}></div>
                </div>
                <p
                  className={styles.formSubtitle}
                  dangerouslySetInnerHTML={{ __html: t("callback.subtitle") }}
                />
              </div>
            </>
          )}
        </div>

        <div className={styles.formContainer}>
          {isSubmitted ? (
            <div className={styles.successState}>
              <div className={styles.successAnimation}>
                <div className={styles.successOrb}></div>
                <div className={styles.successBeam}></div>
                <div className={styles.successCheckmark}>
                  <div className={styles.checkmarkStem}></div>
                  <div className={styles.checkmarkKick}></div>
                </div>
              </div>
              <h3 className={styles.successTitle}>
                {t("callback.successTitle")}
              </h3>
              <p
                className={styles.successMessage}
                dangerouslySetInnerHTML={{
                  __html: t("callback.successMessage"),
                }}
              />
              <div className={styles.successParticles}>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
              </div>
            </div>
          ) : (
            <form className={styles.creativeForm} onSubmit={handleSubmit}>
              {submitError && (
                <div className={styles.errorMessage}>
                  <div className={styles.errorIcon}>⚠️</div>
                  <span>{submitError}</span>
                </div>
              )}

              <div className={styles.formFields}>
                <div className={styles.fieldGroup}>
                  <div
                    className={`${styles.inputContainer} ${
                      activeField === "name" ? styles.active : ""
                    } ${isRTL ? styles.inputContainerRTL : ""}`}
                    onFocus={() => setActiveField("name")}
                    onBlur={() => setActiveField(null)}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${styles.creativeInput} ${
                        isRTL ? styles.creativeInputRTL : ""
                      }`}
                      required
                      disabled={isSubmitting}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                    <label
                      className={`${styles.floatingLabel} ${
                        isRTL ? styles.floatingLabelRTL : ""
                      }`}
                    >
                      {t("callback.nameLabel")}
                    </label>
                    <div className={styles.inputLine}></div>
                  </div>

                  <div
                    className={`${styles.inputContainer} ${
                      activeField === "phone" ? styles.active : ""
                    } ${isRTL ? styles.inputContainerRTL : ""}`}
                    onFocus={() => setActiveField("phone")}
                    onBlur={() => setActiveField(null)}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${styles.creativeInput} ${
                        isRTL ? styles.creativeInputRTL : ""
                      }`}
                      required
                      disabled={isSubmitting}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                    <label
                      className={`${styles.floatingLabel} ${
                        isRTL ? styles.floatingLabelRTL : ""
                      }`}
                    >
                      {t("callback.phoneLabel")}
                    </label>
                    <div className={styles.inputLine}></div>
                  </div>
                </div>

                <div
                  className={`${styles.selectContainer} ${
                    activeField === "interest" ? styles.active : ""
                  } ${isRTL ? styles.selectContainerRTL : ""}`}
                  onFocus={() => setActiveField("interest")}
                  onBlur={() => setActiveField(null)}
                >
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`${styles.creativeSelect} ${
                      isRTL ? styles.creativeSelectRTL : ""
                    }`}
                    required
                    disabled={isSubmitting}
                    dir={isRTL ? "rtl" : "ltr"}
                  >
                    <option value="">{t("callback.interestLabel")}</option>
                    <option value="off-plan">
                      {t("callback.optionOffPlan")}
                    </option>
                    <option value="ready">{t("callback.optionReady")}</option>
                    <option value="portfolio">
                      {t("callback.optionPortfolio")}
                    </option>
                    <option value="consultation">
                      {t("callback.optionConsultation")}
                    </option>
                  </select>
                  <div
                    className={`${styles.selectArrow} ${
                      isRTL ? styles.selectArrowRTL : ""
                    }`}
                  ></div>
                </div>
              </div>

              <button
                type="submit"
                className={`${styles.creativeSubmit} ${
                  isSubmitting ? styles.submitting : ""
                } ${isRTL ? styles.creativeSubmitRTL : ""}`}
                disabled={isSubmitting}
              >
                <span className={styles.buttonContent}>
                  <span className={styles.buttonText}>
                    {isSubmitting
                      ? t("callback.submitSubmitting")
                      : t("callback.submitIdle")}
                  </span>
                  <span
                    className={`${styles.buttonArrow} ${
                      isRTL ? styles.buttonArrowRTL : ""
                    }`}
                  >
                    <div className={styles.arrowLine}></div>
                    <div className={styles.arrowHead}></div>
                  </span>
                </span>
                <div className={styles.buttonGlow}></div>
                <div className={styles.buttonParticles}>
                  <div className={styles.submitParticle}></div>
                  <div className={styles.submitParticle}></div>
                  <div className={styles.submitParticle}></div>
                </div>
              </button>
            </form>
          )}
        </div>

        <div className={styles.bottomDecoration}>
          <div className={styles.decorationLine}></div>
          <div className={styles.decorationText}>
            {t("callback.bottomDecoration")}
          </div>
          <div className={styles.decorationLine}></div>
        </div>
      </div>
    </section>
  );
}
