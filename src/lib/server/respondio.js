function clean(value) {
  return String(value || "").trim();
}

function normalizePhone(value) {
  const digits = clean(value).replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("971")) return `+${digits}`;
  if (digits.startsWith("0")) return `+971${digits.slice(1)}`;
  return `+971${digits}`;
}

function buildIdentifier(payload) {
  const phone = normalizePhone(payload?.phone);
  if (phone) return `phone:${phone}`;
  const email = clean(payload?.email).toLowerCase();
  if (email) return `email:${email}`;
  return "";
}

function buildCustomFields(payload) {
  const fields = [
    { name: "lead_source", value: "website" },
    { name: "form_type", value: clean(payload?.formType) || "CONTACT_FORM" },
    { name: "locale_language", value: clean(payload?.locale) || "en" },
  ];

  const optionalFields = [
    ["project", payload?.project],
    ["unit_type", payload?.unitType],
    ["contact_method", payload?.contactMethod],
    ["page_url", payload?.pageUrl],
    ["broker_name", payload?.broker?.name],
    ["broker_phone", payload?.broker?.phone || payload?.broker?.whatsapp],
    ["broker_role", payload?.broker?.role],
    [
      "broker_languages",
      Array.isArray(payload?.broker?.languages)
        ? payload.broker.languages.join(", ")
        : "",
    ],
    ["message", clean(payload?.message).slice(0, 500)],
  ];

  optionalFields.forEach(([name, value]) => {
    const text = clean(value);
    if (text) fields.push({ name, value: text });
  });

  return fields;
}

function buildContactBody(payload) {
  const firstName = clean(payload?.firstName);
  const lastName = clean(payload?.lastName);
  const phone = normalizePhone(payload?.phone);
  const email = clean(payload?.email).toLowerCase();

  return {
    firstName: firstName || lastName || "Website",
    lastName: lastName || firstName || "Lead",
    phone: phone || undefined,
    email: email || undefined,
    language: clean(payload?.locale) === "ar" ? "ar" : "en",
    countryCode: "AE",
    custom_fields: buildCustomFields(payload),
  };
}

function getAuthHeaders() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${clean(process.env.RESPONDIO_TOKEN)}`,
  };
}

export function isRespondIoConfigured() {
  return Boolean(clean(process.env.RESPONDIO_TOKEN));
}

/**
 * Extract the numeric contact ID from the Respond.io create/update response.
 * The response shape may vary (v2 returns { id, ... } or nested).
 */
function extractContactId(responseData) {
  if (!responseData) return null;
  if (responseData.id) return responseData.id;
  if (responseData.contact?.id) return responseData.contact.id;
  if (responseData.data?.id) return responseData.data.id;
  return null;
}

export async function upsertRespondIoLead(payload) {
  if (!isRespondIoConfigured()) {
    return { success: false, error: "RESPONDIO_NOT_CONFIGURED" };
  }

  const identifier = buildIdentifier(payload);
  if (!identifier) {
    return { success: false, error: "RESPONDIO_IDENTIFIER_MISSING" };
  }

  const createUrl = `https://api.respond.io/v2/contact/${encodeURIComponent(identifier)}`;

  try {
    const contactResponse = await fetch(createUrl, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(buildContactBody(payload)),
      cache: "no-store",
    });

    const contactData = await contactResponse.json().catch(() => null);
    const contactText = contactData ? JSON.stringify(contactData) : "";

    if (!contactResponse.ok && contactResponse.status !== 409) {
      return {
        success: false,
        error: `RESPONDIO_CONTACT_${contactResponse.status}`,
        details: contactText,
      };
    }

    // Try to get the contact ID for tag/message operations
    const contactId = extractContactId(contactData);

    // Tag the contact - use ID-based URL if we have it, fall back to identifier
    const tags = ["website-lead"];
    if (clean(payload?.project)) {
      tags.push("property-lead");
    }
    if (clean(payload?.broker?.name)) {
      tags.push("broker-assigned");
    }

    const tagUrl = contactId
      ? `https://api.respond.io/v2/contact/${contactId}/tag`
      : `${createUrl}/tag`;

    try {
      const tagResponse = await fetch(tagUrl, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(tags),
        cache: "no-store",
      });

      if (!tagResponse.ok && tagResponse.status !== 409) {
        // Tag failure is non-fatal - contact was already created
        console.warn(
          `[Respond.io] Tag failed (${tagResponse.status}):`,
          await tagResponse.text().catch(() => "")
        );
      }
    } catch (tagError) {
      console.warn("[Respond.io] Tag request failed:", String(tagError));
    }

    return {
      success: true,
      identifier,
      contactId: contactId || null,
    };
  } catch (error) {
    return {
      success: false,
      error: "RESPONDIO_REQUEST_FAILED",
      details: String(error),
    };
  }
}

/**
 * Build a summary string for a lead, suitable for internal notes or messages.
 */
function buildLeadSummary(payload) {
  const lines = [
    "New website lead received.",
    `Name: ${clean(payload?.firstName)} ${clean(payload?.lastName)}`.trim(),
    payload?.phone ? `Phone: ${clean(payload.phone)}` : "",
    payload?.email ? `Email: ${clean(payload.email)}` : "",
    payload?.project ? `Property: ${clean(payload.project)}` : "",
    payload?.unitType ? `Unit Type: ${clean(payload.unitType)}` : "",
    payload?.broker?.name
      ? `Assigned Broker: ${clean(payload.broker.name)}`
      : "",
    payload?.broker?.phone
      ? `Broker Phone: ${clean(payload.broker.phone)}`
      : "",
    payload?.broker?.role
      ? `Broker Role: ${clean(payload.broker.role)}`
      : "",
    payload?.pageUrl ? `Page: ${clean(payload.pageUrl)}` : "",
    payload?.message ? `Message: ${clean(payload.message)}` : "",
    payload?.contactMethod
      ? `Preferred Contact: ${clean(payload.contactMethod)}`
      : "",
  ].filter(Boolean);

  return lines.join("\n");
}

/**
 * Notify Kodmani about a lead via Respond.io.
 * This creates the contact in Respond.io (landing in the inbox)
 * and optionally sends an internal note with broker context.
 *
 * The actual approve/transfer to the broker happens within
 * the WhatsApp Business / Respond.io inbox, not on the website.
 */
export async function notifyKodmaniViaRespondIo(payload) {
  // First, create/update the contact in Respond.io
  const result = await upsertRespondIoLead(payload);

  if (!result?.success || !result.contactId) {
    return result;
  }

  // Add an internal note with the broker assignment context
  // so Kodmani sees it in the inbox alongside the contact
  const summary = buildLeadSummary(payload);

  try {
    const noteUrl = `https://api.respond.io/v2/contact/${result.contactId}/message`;
    await fetch(noteUrl, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        message: {
          type: "text",
          text: summary,
        },
      }),
      cache: "no-store",
    });
  } catch {
    // Note failure is non-fatal - the contact is already in the inbox
  }

  return result;
}
