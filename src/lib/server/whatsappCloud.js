import { createHmac, timingSafeEqual } from "crypto";
import {
  approveLeadApproval,
  attachLeadApprovalMetadata,
  findLeadApprovalByReviewerMessageId,
} from "@/lib/server/leadApprovals";

function clean(value) {
  return String(value || "").trim();
}

export function normalizeWhatsAppPhone(value, defaultCountryCode = "971") {
  let digits = clean(value).replace(/\D/g, "");
  if (!digits) return "";

  if (digits.startsWith("00")) {
    digits = digits.slice(2);
  }

  if (digits.startsWith(defaultCountryCode)) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `${defaultCountryCode}${digits.slice(1)}`;
  }

  return digits;
}

function getGraphApiVersion() {
  return clean(process.env.WHATSAPP_GRAPH_API_VERSION || "v23.0");
}

function getPhoneNumberId() {
  return clean(process.env.WHATSAPP_PHONE_NUMBER_ID);
}

function getAccessToken() {
  return clean(process.env.WHATSAPP_ACCESS_TOKEN);
}

export function getReviewerPhoneNumber() {
  return normalizeWhatsAppPhone(
    process.env.WHATSAPP_REVIEWER_NUMBER ||
      process.env.WHATSAPP_APPROVAL_REVIEWER_NUMBER ||
      process.env.NEXT_PUBLIC_WHATSAPP_OVERRIDE_NUMBER
  );
}

export function isReviewerPhone(phone) {
  const reviewerPhone = getReviewerPhoneNumber();
  const normalizedPhone = normalizeWhatsAppPhone(phone);
  return Boolean(reviewerPhone && normalizedPhone && reviewerPhone === normalizedPhone);
}

export function isWhatsAppCloudConfigured() {
  return Boolean(getAccessToken() && getPhoneNumberId());
}

export function isWhatsAppWebhookConfigured() {
  return Boolean(clean(process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN));
}

export function buildReviewerApprovalMessage(lead = {}) {
  const customerName =
    clean(lead?.fullName) || clean(lead?.customerProfileName) || "WhatsApp lead";
  const customerPhone =
    clean(lead?.customerPhone || lead?.phone) || "Not provided";
  const project = clean(lead?.project) || "Not identified";
  const brokerName = clean(lead?.broker?.name) || "Not assigned";
  const brokerPhone =
    clean(lead?.broker?.whatsapp || lead?.broker?.phone) || "Not assigned";
  const source = clean(lead?.source) || clean(lead?.formType) || "Website";
  const message = clean(lead?.message) || "No message provided";
  const pageUrl = clean(lead?.pageUrl) || "Not provided";

  return [
    "Lead approval requested",
    `Lead ID: ${clean(lead?._id) || "Pending"}`,
    `Project: ${project}`,
    `Broker: ${brokerName}`,
    `Broker Phone: ${brokerPhone}`,
    `Customer: ${customerName}`,
    `Customer WhatsApp: ${customerPhone}`,
    `Source: ${source}`,
    `Page: ${pageUrl}`,
    `Message: ${message}`,
    "",
    "Reply YES to this message to forward the lead to the assigned broker.",
  ].join("\n");
}

function buildCustomerChatLink(phone) {
  const digits = normalizeWhatsAppPhone(phone);
  return digits ? `https://wa.me/${digits}` : "";
}

export function buildBrokerTransferMessage(lead = {}) {
  const customerName =
    clean(lead?.fullName) || clean(lead?.customerProfileName) || "WhatsApp lead";
  const customerPhone =
    clean(lead?.customerPhone || lead?.phone) || "Not provided";
  const project = clean(lead?.project) || "Not identified";
  const unitType = clean(lead?.unitType) || "Not specified";
  const preferred = clean(lead?.contactMethod) || "Not specified";
  const message = clean(lead?.message) || "No message provided";
  const pageUrl = clean(lead?.pageUrl) || "Not provided";
  const customerChatLink = buildCustomerChatLink(customerPhone);

  const lines = [
    "Approved lead from Mohammad Kodmani",
    `Project: ${project}`,
    `Customer: ${customerName}`,
    `Customer WhatsApp: ${customerPhone}`,
    `Preferred Contact: ${preferred}`,
    `Unit Type: ${unitType}`,
    `Page: ${pageUrl}`,
    `Message: ${message}`,
  ];

  if (customerChatLink) {
    lines.push(`Open Customer Chat: ${customerChatLink}`);
  }

  lines.push("", "Please follow up with the client.");
  return lines.join("\n");
}

export function buildReviewerResultMessage(lead = {}, forwardResult = {}) {
  if (forwardResult?.success && forwardResult?.sent) {
    return [
      "Lead approved and forwarded.",
      `Project: ${clean(lead?.project) || "Not identified"}`,
      `Broker: ${clean(lead?.broker?.name) || "Assigned sales person"}`,
    ].join("\n");
  }

  if (forwardResult?.manualHref) {
    return [
      "Lead approved, but server-side broker delivery was not completed.",
      "Use the fallback WhatsApp link below to send it manually:",
      forwardResult.manualHref,
    ].join("\n");
  }

  return [
    "Lead approved, but no assigned broker WhatsApp number was available.",
    `Project: ${clean(lead?.project) || "Not identified"}`,
  ].join("\n");
}

function getApiEndpoint() {
  return `https://graph.facebook.com/${getGraphApiVersion()}/${getPhoneNumberId()}/messages`;
}

export async function sendWhatsAppTextMessage({
  to,
  body,
  replyToMessageId = "",
  previewUrl = false,
}) {
  const recipient = normalizeWhatsAppPhone(to);
  if (!recipient) {
    return { success: false, error: "WHATSAPP_TO_MISSING" };
  }

  if (!isWhatsAppCloudConfigured()) {
    return { success: false, error: "WHATSAPP_NOT_CONFIGURED" };
  }

  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: recipient,
    type: "text",
    text: {
      preview_url: Boolean(previewUrl),
      body: clean(body),
    },
  };

  if (clean(replyToMessageId)) {
    payload.context = {
      message_id: clean(replyToMessageId),
    };
  }

  const response = await fetch(getApiEndpoint(), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const data = await response.json().catch(() => ({}));
  const messageId = Array.isArray(data?.messages) ? data.messages[0]?.id : "";

  if (!response.ok) {
    return {
      success: false,
      error:
        data?.error?.message ||
        data?.message ||
        `WHATSAPP_SEND_${response.status}`,
      details: data,
    };
  }

  return {
    success: true,
    messageId: clean(messageId),
    response: data,
  };
}

function extractMessageText(message = {}) {
  if (message?.text?.body) return clean(message.text.body);
  if (message?.button?.text) return clean(message.button.text);
  if (message?.interactive?.button_reply?.title) {
    return clean(message.interactive.button_reply.title);
  }
  if (message?.interactive?.list_reply?.title) {
    return clean(message.interactive.list_reply.title);
  }
  if (message?.image?.caption) return clean(message.image.caption);
  if (message?.document?.caption) return clean(message.document.caption);
  if (message?.video?.caption) return clean(message.video.caption);
  return clean(`[${message?.type || "message"}]`);
}

export function extractInboundWhatsAppMessages(payload = {}) {
  const entries = Array.isArray(payload?.entry) ? payload.entry : [];
  const results = [];

  entries.forEach((entry) => {
    const changes = Array.isArray(entry?.changes) ? entry.changes : [];
    changes.forEach((change) => {
      const value = change?.value || {};
      const contacts = Array.isArray(value?.contacts) ? value.contacts : [];
      const messages = Array.isArray(value?.messages) ? value.messages : [];

      messages.forEach((message) => {
        const matchingContact =
          contacts.find((contact) => clean(contact?.wa_id) === clean(message?.from)) ||
          contacts[0] ||
          {};

        results.push({
          id: clean(message?.id),
          from: normalizeWhatsAppPhone(message?.from),
          profileName: clean(matchingContact?.profile?.name),
          text: extractMessageText(message),
          type: clean(message?.type || "text"),
          timestamp: clean(message?.timestamp),
          contextMessageId: clean(message?.context?.id),
          raw: message,
        });
      });
    });
  });

  return results;
}

export function isApprovalReply(text) {
  return /^yes\b/i.test(clean(text));
}

export function validateWhatsAppSignature(rawBody, signatureHeader) {
  const appSecret = clean(process.env.WHATSAPP_APP_SECRET);
  const signature = clean(signatureHeader);

  if (!appSecret || !signature || !rawBody) {
    return true;
  }

  const expected = `sha256=${createHmac("sha256", appSecret)
    .update(rawBody)
    .digest("hex")}`;

  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function notifyReviewerAboutLead(lead = {}) {
  const reviewerPhone = getReviewerPhoneNumber();
  if (!reviewerPhone) {
    return { success: false, error: "WHATSAPP_REVIEWER_NUMBER_MISSING" };
  }

  const sendResult = await sendWhatsAppTextMessage({
    to: reviewerPhone,
    body: buildReviewerApprovalMessage(lead),
  });

  if (!sendResult?.success) {
    return sendResult;
  }

  await attachLeadApprovalMetadata(lead?._id, {
    reviewerPhone,
    reviewerMessageId: sendResult.messageId,
    reviewerNotifiedAt: new Date().toISOString(),
  });

  return {
    success: true,
    reviewerPhone,
    reviewerMessageId: sendResult.messageId,
  };
}

export async function forwardApprovedLeadToBroker(lead = {}) {
  const brokerPhone = normalizeWhatsAppPhone(
    lead?.broker?.whatsapp || lead?.broker?.phone
  );

  if (!brokerPhone) {
    return {
      success: false,
      sent: false,
      error: "BROKER_PHONE_MISSING",
      manualHref: "",
    };
  }

  const fallbackHref = `https://wa.me/${brokerPhone}?text=${encodeURIComponent(
    buildBrokerTransferMessage(lead)
  )}`;

  if (!isWhatsAppCloudConfigured()) {
    return {
      success: false,
      sent: false,
      error: "WHATSAPP_NOT_CONFIGURED",
      manualHref: fallbackHref,
    };
  }

  const sendResult = await sendWhatsAppTextMessage({
    to: brokerPhone,
    body: buildBrokerTransferMessage(lead),
    previewUrl: true,
  });

  if (!sendResult?.success) {
    return {
      ...sendResult,
      sent: false,
      manualHref: fallbackHref,
    };
  }

  await attachLeadApprovalMetadata(lead?._id, {
    brokerTransferMessageId: sendResult.messageId,
    brokerTransferredAt: new Date().toISOString(),
  });

  return {
    success: true,
    sent: true,
    messageId: sendResult.messageId,
    manualHref: fallbackHref,
  };
}

export async function processReviewerApprovalReply(message = {}) {
  if (!isReviewerPhone(message?.from)) {
    return { success: false, ignored: true, error: "NOT_REVIEWER" };
  }

  if (!isApprovalReply(message?.text)) {
    return { success: false, ignored: true, error: "NOT_APPROVAL_REPLY" };
  }

  const reviewerMessageId = clean(message?.contextMessageId);
  if (!reviewerMessageId) {
    return { success: false, ignored: true, error: "REVIEWER_CONTEXT_MISSING" };
  }

  const lead = await findLeadApprovalByReviewerMessageId(reviewerMessageId, {
    reviewerPhone: message?.from,
    status: "pending",
  });

  if (!lead?._id) {
    return { success: false, ignored: true, error: "LEAD_NOT_FOUND" };
  }

  const approved = await approveLeadApproval(lead._id, {
    approvedBy: "Mohammad Kodmani",
  });

  if (!approved?.success) {
    return {
      success: false,
      ignored: false,
      error: approved?.error || "LEAD_APPROVAL_FAILED",
    };
  }

  const forwardResult = await forwardApprovedLeadToBroker(approved.lead);

  if (isWhatsAppCloudConfigured()) {
    try {
      await sendWhatsAppTextMessage({
        to: message.from,
        body: buildReviewerResultMessage(approved.lead, forwardResult),
        replyToMessageId: message.id,
        previewUrl: true,
      });
    } catch {}
  }

  return {
    success: true,
    lead: approved.lead,
    forwardResult,
  };
}
