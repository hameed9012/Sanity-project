// app/contact/page.jsx
"use client";

import ContactFormSimplified from "@/components/ContactFormSimplified";
import React from "react";

export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "90px 20px",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <ContactFormSimplified />
      </div>
    </div>
  );
}
