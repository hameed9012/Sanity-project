"use client";
import React, { useState } from "react";
import styles from "@/styles/MiniCallbackForm.module.css";

export default function MiniCallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", phone: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert(result.message || "Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again or contact us directly.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    // Remove any non-digit characters
    const value = e.target.value.replace(/[^\d]/g, "");
    setFormData({
      ...formData,
      phone: value,
    });
  };

  return (
    <section className={styles.callbackSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className={styles.container}>
        {/* Header with Icon */}
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <div className={styles.iconCircle}>
              <div className={styles.iconPhone}></div>
            </div>
            <div className={styles.iconGlow}></div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>
              <span className={styles.titleMain}>CONNECT WITH OUR</span>
              <span className={styles.titleAccent}>INVESTMENT TEAM</span>
            </h2>
            <p className={styles.subtitle}>
              Speak directly with our luxury property specialists. We'll call
              you back within <strong>15 minutes</strong> to discuss your
              investment goals.
            </p>
          </div>
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <div className={styles.checkmark}></div>
            </div>
            <h3 className={styles.successTitle}>CALLBACK CONFIRMED!</h3>
            <p className={styles.successMessage}>
              Our investment specialist will contact you within 15 minutes.
              Prepare to discuss premium opportunities.
            </p>
            <div className={styles.successGlow}></div>
          </div>
        ) : (
          /* Form */
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              {/* Input Fields */}
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className={styles.inputField}
                    required
                  />
                  <label htmlFor="name" className={styles.inputLabel}>
                    YOUR FULL NAME
                  </label>
                  <div className={styles.inputLine}></div>
                </div>

                <div className={styles.phoneInputWrapper}>
                  <div className={styles.phonePrefixStatic}>+971</div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder=" "
                    className={styles.phoneInputField}
                    required
                    maxLength={9}
                  />
                  <label htmlFor="phone" className={styles.phoneInputLabel}>
                    CONTACT NUMBER
                  </label>
                  <div className={styles.inputLine}></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`${styles.submitButton} ${
                  isSubmitting ? styles.submitting : ""
                }`}
                disabled={isSubmitting}
              >
                <span className={styles.buttonText}>
                  {isSubmitting ? "CONNECTING..." : "REQUEST PRIORITY CALLBACK"}
                </span>
                <div className={styles.buttonGlow}></div>
                <div className={styles.buttonOrnament}>
                  <div className={styles.ornamentDot}></div>
                  <div className={styles.ornamentDot}></div>
                  <div className={styles.ornamentDot}></div>
                </div>
              </button>
            </div>
          </form>
        )}

        {/* Decorative Elements */}
        <div className={styles.decoration}>
          <div className={styles.cornerOrnament}></div>
          <div className={styles.cornerOrnament}></div>
          <div className={styles.cornerOrnament}></div>
          <div className={styles.cornerOrnament}></div>
        </div>
      </div>
    </section>
  );
}
