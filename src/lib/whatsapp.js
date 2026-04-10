"use client";

export function normalizeWhatsAppNumber(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits || "";
}

function clean(value) {
  return String(value || "").trim();
}

export function buildCustomerWhatsAppMessage({
  locale = "en",
  propertyName = "",
  pageUrl = "",
  pagePath = "",
  sourceLabel = "",
} = {}) {
  const isArabic = clean(locale).startsWith("ar");
  const propertyText = clean(propertyName) || (isArabic ? "غير محدد" : "Not specified");
  const pageText = clean(pageUrl || pagePath) || (isArabic ? "غير محدد" : "Not specified");
  const sourceText = clean(sourceLabel) || (isArabic ? "موقع محمد كدماني" : "Mohammad Kodmani Website");

  if (isArabic) {
    return [
      "مرحباً،",
      "أرغب بالحصول على تفاصيل هذا المشروع.",
      `Property: ${propertyText}`,
      `Page: ${pageText}`,
      `Source: ${sourceText}`,
      "Preferred Language: ar",
    ].join("\n");
  }

  return [
    "Hello,",
    "I am interested in this property.",
    `Property: ${propertyText}`,
    `Page: ${pageText}`,
    `Source: ${sourceText}`,
    "Preferred Language: en",
  ].join("\n");
}

export function buildWhatsAppHref(number, context = {}) {
  const digits = normalizeWhatsAppNumber(number);
  if (!digits) return null;
  const message = buildCustomerWhatsAppMessage(context);
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildKodmaniWhatsAppHref(number, context = {}) {
  return buildWhatsAppHref(number, context);
}

export function queueKodmaniApprovalLead() {
  return;
}

export function readPropertyWhatsAppContextFromBody() {
  if (typeof document === "undefined" || !document.body?.dataset) {
    return {
      propertyName: "",
      brokerName: "",
      brokerRole: "",
    };
  }

  return {
    propertyName: document.body.dataset.propertyName || "",
    brokerName: document.body.dataset.propertyBrokerName || "",
    brokerRole: document.body.dataset.propertyBrokerRole || "",
  };
}
