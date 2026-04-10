function clean(value) {
  return String(value || "").trim();
}

function splitName(name) {
  const text = clean(name);
  if (!text) return { firstName: "", lastName: "" };

  const parts = text.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: parts[0] };
  }

  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.slice(-1).join(" "),
  };
}

function normalizeLanguages(value) {
  if (!Array.isArray(value)) return [];
  return value.map((entry) => clean(entry)).filter(Boolean);
}

function isArabicLocale(locale) {
  return clean(locale).toLowerCase() === "ar";
}

function messageForLocale(locale, english, arabic) {
  return isArabicLocale(locale) ? arabic : english;
}

export function normalizeLeadPayload(raw = {}, options = {}) {
  const { defaultFormType = "CONTACT_FORM", defaultLocale = "en" } = options;

  const inferredName = clean(raw.name);
  const split = splitName(inferredName);
  const firstName = clean(raw.firstName) || split.firstName;
  const lastName = clean(raw.lastName) || split.lastName || firstName;
  const locale = clean(raw.locale) || defaultLocale;
  const formType =
    clean(raw.formType) ||
    (clean(raw.project) ? "PROJECT_FORM" : defaultFormType);

  return {
    formType,
    locale,
    firstName,
    lastName,
    fullName: [firstName, lastName].filter(Boolean).join(" ").trim(),
    email: clean(raw.email),
    phone: clean(raw.phone),
    project: clean(raw.project),
    unitType: clean(raw.unitType),
    message: clean(raw.message || raw.interest),
    contactMethod: clean(raw.contactMethod) || "phone",
    pageUrl: clean(raw.pageUrl),
    countryCode: clean(raw.countryCode),
    dialingCode: clean(raw.dialingCode),
    broker: {
      name: clean(raw.brokerName),
      phone: clean(raw.brokerPhone),
      whatsapp: clean(raw.brokerWhatsapp),
      role: clean(raw.brokerRole),
      languages: normalizeLanguages(raw.brokerLanguages),
    },
  };
}

export function validateLeadPayload(payload, options = {}) {
  const { requireProject = false, requireEmail = false } = options;
  const locale = payload?.locale || "en";

  if (!payload.firstName || !payload.lastName || !payload.phone) {
    return messageForLocale(
      locale,
      "Please fill in all required fields.",
      "\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629."
    );
  }

  if (requireEmail && !payload.email) {
    return messageForLocale(
      locale,
      "Please enter a valid email address.",
      "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D."
    );
  }

  if (payload.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return messageForLocale(
        locale,
        "Please enter a valid email address.",
        "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D."
      );
    }
  }

  if (payload.phone.replace(/\D/g, "").length < 7) {
    return messageForLocale(
      locale,
      "Please enter a valid phone number.",
      "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0635\u062D\u064A\u062D."
    );
  }

  if (requireProject && !payload.project) {
    return messageForLocale(
      locale,
      "Please select a project before submitting the form.",
      "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0642\u0628\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062C."
    );
  }

  return "";
}

function buildDescription(payload) {
  const lines = [
    `Form Type: ${payload.formType}`,
    payload.project ? `Project: ${payload.project}` : "",
    payload.unitType ? `Unit Type: ${payload.unitType}` : "",
    payload.contactMethod ? `Preferred Contact: ${payload.contactMethod}` : "",
    payload.broker.name ? `Assigned Sales Person: ${payload.broker.name}` : "",
    payload.broker.phone
      ? `Assigned Sales Phone: ${payload.broker.phone}`
      : payload.broker.whatsapp
        ? `Assigned Sales WhatsApp: ${payload.broker.whatsapp}`
        : "",
    payload.broker.role ? `Assigned Sales Role: ${payload.broker.role}` : "",
    payload.message ? `Message: ${payload.message}` : "",
    payload.pageUrl ? `Page URL: ${payload.pageUrl}` : "",
  ].filter(Boolean);

  return lines.join("\n");
}

function setMappedField(record, envName, value) {
  const fieldName = clean(process.env[envName]);
  const fieldValue = clean(value);
  if (!fieldName || !fieldValue) return;
  record[fieldName] = fieldValue;
}

export function buildZohoLeadRecord(payload) {
  const record = {
    Last_Name: payload.lastName || payload.firstName || "Website Lead",
    First_Name: payload.firstName || undefined,
    Company:
      payload.project ||
      (payload.formType === "CALLBACK_FORM"
        ? "Website Callback"
        : "Website Inquiry"),
    Phone: payload.phone || undefined,
    Email: payload.email || undefined,
    Lead_Source: process.env.ZOHO_LEAD_SOURCE || "Website",
    Description: buildDescription(payload),
  };

  setMappedField(record, "ZOHO_FIELD_PROJECT", payload.project);
  setMappedField(record, "ZOHO_FIELD_UNIT_TYPE", payload.unitType);
  setMappedField(record, "ZOHO_FIELD_FORM_TYPE", payload.formType);
  setMappedField(record, "ZOHO_FIELD_CONTACT_METHOD", payload.contactMethod);
  setMappedField(record, "ZOHO_FIELD_PAGE_URL", payload.pageUrl);
  setMappedField(record, "ZOHO_FIELD_BROKER_NAME", payload.broker.name);
  setMappedField(
    record,
    "ZOHO_FIELD_BROKER_PHONE",
    payload.broker.phone || payload.broker.whatsapp
  );
  setMappedField(record, "ZOHO_FIELD_BROKER_ROLE", payload.broker.role);
  setMappedField(
    record,
    "ZOHO_FIELD_BROKER_LANGUAGES",
    Array.isArray(payload.broker.languages)
      ? payload.broker.languages.join(", ")
      : ""
  );

  return Object.fromEntries(
    Object.entries(record).filter(([, value]) => value !== undefined && value !== "")
  );
}

export function getLeadSubmissionError(locale) {
  return messageForLocale(
    locale,
    "We could not submit your request right now. Please try again.",
    "\u062A\u0639\u0630\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628 \u062D\u0627\u0644\u064A\u0627\u064B. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649."
  );
}

export function getZohoConfigurationError(locale) {
  return messageForLocale(
    locale,
    "Zoho CRM is not configured yet. Please complete the setup and try again.",
    "\u0644\u0645 \u064A\u062A\u0645 \u0625\u0639\u062F\u0627\u062F Zoho CRM \u0628\u0639\u062F. \u064A\u0631\u062C\u0649 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u062B\u0645 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649."
  );
}

export function getServerError(locale) {
  return messageForLocale(
    locale,
    "Server error. Please try again later.",
    "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0627\u062D\u0642\u0627\u064B."
  );
}

export function getSuccessMessage(locale, formType) {
  const isArabic = isArabicLocale(locale);

  if (formType === "CALLBACK_FORM") {
    return isArabic
      ? "\u0634\u0643\u0631\u0627\u064B \u0644\u0643! \u0633\u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642\u0646\u0627 \u0628\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0642\u0631\u064A\u0628\u0627\u064B."
      : "Thank you! Our team will contact you shortly.";
  }

  return isArabic
    ? "\u0634\u0643\u0631\u0627\u064B \u0644\u0643! \u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643 \u0648\u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0641\u0631\u064A\u0642\u0646\u0627 \u0642\u0631\u064A\u0628\u0627\u064B."
    : "Thank you! Your inquiry has been received and our team will contact you shortly.";
}
