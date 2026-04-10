import {
  approveLeadApproval,
  attachLeadApprovalMetadata,
  createLeadApproval,
} from "@/lib/server/leadApprovals";
import {
  buildZohoLeadRecord,
  normalizeLeadPayload,
} from "@/lib/server/leadUtils";
import { resolveLeadBrokerContext } from "@/lib/server/propertyRouting";
import { isRespondIoConfigured, notifyKodmaniViaRespondIo } from "@/lib/server/respondio";
import {
  forwardApprovedLeadToBroker,
  isWhatsAppCloudConfigured,
  notifyReviewerAboutLead,
} from "@/lib/server/whatsappCloud";
import { createZohoRecord, isZohoConfigured } from "@/lib/server/zoho";

function clean(value) {
  return String(value || "").trim();
}

function mergeBroker(primary = {}, secondary = {}) {
  return {
    name: clean(primary?.name || secondary?.name),
    phone: clean(primary?.phone || secondary?.phone),
    whatsapp: clean(primary?.whatsapp || secondary?.whatsapp),
    role: clean(primary?.role || secondary?.role),
    languages: Array.isArray(primary?.languages)
      ? primary.languages.filter(Boolean)
      : Array.isArray(secondary?.languages)
      ? secondary.languages.filter(Boolean)
      : [],
  };
}

export async function createPendingLeadPipeline(rawPayload = {}, options = {}) {
  const payload = normalizeLeadPayload(rawPayload, {
    defaultFormType: rawPayload?.formType || options?.defaultFormType || "CONTACT_FORM",
    defaultLocale: rawPayload?.locale || options?.defaultLocale || "en",
  });

  const routing = await resolveLeadBrokerContext({
    ...payload,
    rawIncomingText: options?.rawIncomingText,
  });

  const normalizedPayload = {
    ...payload,
    project: clean(payload?.project || routing?.project),
    projectSlug: clean(routing?.projectSlug),
    message: clean(payload?.message || options?.rawIncomingText),
    broker: mergeBroker(payload?.broker, routing?.broker),
  };

  const created = await createLeadApproval(normalizedPayload, {
    source: options?.source || rawPayload?.source || normalizedPayload.formType,
    sourceLabel: options?.sourceLabel || rawPayload?.sourceLabel,
    pagePath: options?.pagePath || rawPayload?.pagePath,
    channel: options?.channel || rawPayload?.channel || "website",
    customerPhone:
      options?.customerPhone || rawPayload?.customerPhone || normalizedPayload.phone,
    customerProfileName:
      options?.customerProfileName || rawPayload?.customerProfileName,
    incomingMessageId: options?.incomingMessageId || rawPayload?.incomingMessageId,
    incomingMessageType:
      options?.incomingMessageType || rawPayload?.incomingMessageType,
    project: normalizedPayload.project,
    projectSlug: normalizedPayload.projectSlug,
    matchedBy: routing?.matchedBy,
    rawIncomingText: options?.rawIncomingText,
  });

  let reviewerResult = null;
  let reviewerError = "";

  if (options?.notifyReviewer !== false) {
    if (isWhatsAppCloudConfigured()) {
      reviewerResult = await notifyReviewerAboutLead(created.lead);
      if (!reviewerResult?.success) {
        reviewerError = reviewerResult?.error || "WHATSAPP_REVIEWER_NOTIFY_FAILED";
      }
    } else if (isRespondIoConfigured()) {
      reviewerResult = await notifyKodmaniViaRespondIo(normalizedPayload);
      if (!reviewerResult?.success) {
        reviewerError = reviewerResult?.error || "RESPONDIO_NOTIFY_FAILED";
      }
    }
  }

  let zohoResult = null;
  let zohoError = "";

  if (options?.submitToZoho !== false && isZohoConfigured()) {
    try {
      zohoResult = await createZohoRecord(buildZohoLeadRecord(normalizedPayload));
      if (zohoResult?.success && created?.id) {
        await attachLeadApprovalMetadata(created.id, {
          zohoLeadId: zohoResult.id || "",
          zohoCreatedAt: new Date().toISOString(),
        });
      }
    } catch (error) {
      zohoError = String(error);
    }
  }

  return {
    success: true,
    lead: created.lead,
    payload: normalizedPayload,
    reviewerResult,
    reviewerError,
    zohoResult,
    zohoError,
  };
}

export async function approveLeadAndRouteToBroker(id, approvedBy = "Mohammad Kodmani") {
  const approved = await approveLeadApproval(id, { approvedBy });
  if (!approved?.success) {
    return approved;
  }

  const forwardResult = await forwardApprovedLeadToBroker(approved.lead);
  return {
    ...approved,
    forwardResult,
  };
}
