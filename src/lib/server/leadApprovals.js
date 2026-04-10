import { randomUUID } from "crypto";
import { mkdir, readFile, rename, writeFile } from "fs/promises";
import path from "path";
import { ObjectId } from "mongodb";
import { getDatabase, isMongoConfigured } from "@/lib/server/mongo";

const COLLECTION_NAME = "lead_approvals";
const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "lead-approvals.json");
const DATA_FILE_TMP = path.join(DATA_DIR, "lead-approvals.tmp.json");
const DATE_FIELDS = [
  "createdAt",
  "updatedAt",
  "approvedAt",
  "rejectedAt",
  "reviewerNotifiedAt",
  "brokerTransferredAt",
  "lastInboundAt",
  "zohoCreatedAt",
];

let fileStoreQueue = Promise.resolve();

function clean(value) {
  return String(value || "").trim();
}

function normalizePhone(value) {
  return clean(value).replace(/\D/g, "");
}

function sanitizeBroker(rawBroker = {}) {
  return {
    name: clean(rawBroker?.name),
    phone: clean(rawBroker?.phone),
    whatsapp: clean(rawBroker?.whatsapp),
    role: clean(rawBroker?.role),
    languages: Array.isArray(rawBroker?.languages)
      ? rawBroker.languages.map((entry) => clean(entry)).filter(Boolean)
      : [],
  };
}

function withIsoDates(doc = {}) {
  return {
    ...doc,
    createdAt: doc.createdAt || new Date().toISOString(),
    updatedAt: doc.updatedAt || new Date().toISOString(),
    approvedAt: doc.approvedAt || null,
    rejectedAt: doc.rejectedAt || null,
    reviewerNotifiedAt: doc.reviewerNotifiedAt || null,
    brokerTransferredAt: doc.brokerTransferredAt || null,
    lastInboundAt: doc.lastInboundAt || null,
    zohoCreatedAt: doc.zohoCreatedAt || null,
  };
}

function buildStoredLead(payload = {}, options = {}) {
  const broker = sanitizeBroker(payload?.broker);
  const fullName =
    clean(payload?.fullName) ||
    [clean(payload?.firstName), clean(payload?.lastName)]
      .filter(Boolean)
      .join(" ")
      .trim();

  return withIsoDates({
    _id: randomUUID(),
    status: "pending",
    source: clean(options?.source || payload?.formType || "CONTACT_FORM"),
    formType: clean(payload?.formType || options?.source || "CONTACT_FORM"),
    channel: clean(options?.channel || payload?.channel || "website"),
    locale: clean(payload?.locale || "en"),
    firstName: clean(payload?.firstName),
    lastName: clean(payload?.lastName),
    fullName,
    customerProfileName: clean(
      options?.customerProfileName || payload?.customerProfileName
    ),
    email: clean(payload?.email),
    phone: clean(payload?.phone),
    customerPhone: clean(
      options?.customerPhone || payload?.customerPhone || payload?.phone
    ),
    project: clean(options?.project || payload?.project),
    projectSlug: clean(options?.projectSlug || payload?.projectSlug),
    unitType: clean(payload?.unitType),
    message: clean(options?.message || payload?.message),
    incomingMessageId: clean(
      options?.incomingMessageId || payload?.incomingMessageId
    ),
    incomingMessageType: clean(
      options?.incomingMessageType || payload?.incomingMessageType || "text"
    ),
    reviewerPhone: clean(options?.reviewerPhone || payload?.reviewerPhone),
    reviewerMessageId: clean(
      options?.reviewerMessageId || payload?.reviewerMessageId
    ),
    brokerTransferMessageId: clean(
      options?.brokerTransferMessageId || payload?.brokerTransferMessageId
    ),
    contactMethod: clean(payload?.contactMethod),
    pageUrl: clean(payload?.pageUrl),
    countryCode: clean(payload?.countryCode),
    dialingCode: clean(payload?.dialingCode),
    broker,
    zohoLeadId: clean(options?.zohoLeadId || payload?.zohoLeadId),
    meta: {
      sourceLabel: clean(options?.sourceLabel || payload?.sourceLabel),
      pagePath: clean(options?.pagePath || payload?.pagePath),
      matchedBy: clean(options?.matchedBy || payload?.matchedBy),
      replyContextMessageId: clean(
        options?.replyContextMessageId || payload?.replyContextMessageId
      ),
      rawIncomingText: clean(
        options?.rawIncomingText || payload?.rawIncomingText
      ),
    },
    approvedBy: "",
    rejectedBy: "",
  });
}

function buildBrokerApprovalMessage(lead) {
  const brokerName = clean(lead?.broker?.name) || "Sales Team";
  const customerName =
    clean(lead?.fullName) || clean(lead?.customerProfileName) || "Website lead";
  const project = clean(lead?.project) || "Not specified";
  const unitType = clean(lead?.unitType) || "Not specified";
  const phone = clean(lead?.customerPhone || lead?.phone) || "Not specified";
  const email = clean(lead?.email) || "Not specified";
  const preferred = clean(lead?.contactMethod) || "Not specified";
  const pageUrl = clean(lead?.pageUrl) || "Not specified";
  const note = clean(lead?.message);

  const lines = [
    `Hello ${brokerName},`,
    "",
    "Mr. Mohammad Kodmani approved a new inquiry for you.",
    `Client: ${customerName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Project: ${project}`,
    `Unit Type: ${unitType}`,
    `Preferred Contact: ${preferred}`,
    `Source: ${clean(lead?.source) || "Website"}`,
    `Page: ${pageUrl}`,
  ];

  if (note) {
    lines.push(`Message: ${note}`);
  }

  lines.push("", "Please contact the client and confirm receipt.");
  return lines.join("\n");
}

function buildBrokerWhatsAppHref(lead) {
  const digits = normalizePhone(lead?.broker?.whatsapp || lead?.broker?.phone);
  if (!digits) return "";
  return `https://wa.me/${digits}?text=${encodeURIComponent(
    buildBrokerApprovalMessage(lead)
  )}`;
}

function normalizeLeadDocument(doc = {}) {
  const normalized = {
    ...doc,
    _id: String(doc?._id || ""),
  };

  DATE_FIELDS.forEach((field) => {
    const value = normalized[field];
    normalized[field] = value?.toISOString?.() || value || null;
  });

  return withIsoDates(normalized);
}

function toMongoDocument(doc = {}) {
  const next = { ...doc };

  DATE_FIELDS.forEach((field) => {
    const value = next[field];
    if (!value) {
      next[field] = null;
      return;
    }

    if (value instanceof Date) return;

    const parsed = new Date(value);
    next[field] = Number.isNaN(parsed.getTime()) ? value : parsed;
  });

  return next;
}

async function readFileStore() {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = parseFileStore(raw);
    return Array.isArray(parsed) ? parsed.map(normalizeLeadDocument) : [];
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }
}

async function writeFileStore(entries) {
  await mkdir(DATA_DIR, { recursive: true });
  const payload = JSON.stringify(entries, null, 2);
  await writeFile(DATA_FILE_TMP, payload, "utf8");
  await rename(DATA_FILE_TMP, DATA_FILE);
}

function parseFileStore(raw) {
  try {
    return JSON.parse(raw);
  } catch (error) {
    if (!(error instanceof SyntaxError)) throw error;
    const endIndex = findJsonArrayEnd(raw);
    if (endIndex === -1) throw error;
    const recoveredRaw = raw.slice(0, endIndex);
    const recovered = JSON.parse(recoveredRaw);
    void writeFileStore(recovered).catch(() => {});
    return recovered;
  }
}

function findJsonArrayEnd(raw) {
  let depth = 0;
  let inString = false;
  let escaped = false;
  let started = false;

  for (let index = 0; index < raw.length; index += 1) {
    const char = raw[index];

    if (!started) {
      if (/\s/.test(char)) continue;
      if (char !== "[") return -1;
      started = true;
      depth = 1;
      continue;
    }

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === "[") {
      depth += 1;
      continue;
    }

    if (char === "]") {
      depth -= 1;
      if (depth === 0) {
        return index + 1;
      }
    }
  }

  return -1;
}

function withFileStoreLock(task) {
  const next = fileStoreQueue.then(task, task);
  fileStoreQueue = next.catch(() => {});
  return next;
}

async function withMongoFallback(task) {
  if (!isMongoConfigured()) {
    return task({ mode: "file" });
  }

  try {
    const db = await getDatabase();
    return task({ mode: "mongo", db });
  } catch {
    return task({ mode: "file" });
  }
}

async function getLeadFromMongo(db, id) {
  if (!ObjectId.isValid(id)) return null;
  const doc = await db.collection(COLLECTION_NAME).findOne({
    _id: new ObjectId(id),
  });
  return doc ? normalizeLeadDocument(doc) : null;
}

async function getLeadFromFile(id) {
  const entries = await readFileStore();
  const entry = entries.find((item) => clean(item?._id) === clean(id));
  return entry ? normalizeLeadDocument(entry) : null;
}

async function patchLead(id, patch = {}) {
  const nextPatch = {
    ...patch,
    updatedAt: patch?.updatedAt || new Date().toISOString(),
  };

  return withMongoFallback(async (store) => {
    if (store.mode === "mongo") {
      if (!ObjectId.isValid(id)) {
        return { success: false, error: "LEAD_APPROVAL_ID_INVALID" };
      }

      const result = await store.db.collection(COLLECTION_NAME).findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: toMongoDocument(nextPatch) },
        { returnDocument: "after" }
      );

      const lead = result?.value ?? result;
      if (!lead) {
        return { success: false, error: "LEAD_APPROVAL_NOT_FOUND" };
      }

      return {
        success: true,
        lead: normalizeLeadDocument(lead),
        store: "mongo",
      };
    }

    return withFileStoreLock(async () => {
      const entries = await readFileStore();
      const index = entries.findIndex((entry) => clean(entry?._id) === clean(id));
      if (index === -1) {
        return { success: false, error: "LEAD_APPROVAL_NOT_FOUND" };
      }

      entries[index] = normalizeLeadDocument({
        ...entries[index],
        ...nextPatch,
      });
      await writeFileStore(entries);

      return {
        success: true,
        lead: entries[index],
        store: "file",
      };
    });
  });
}

export function isLeadApprovalStoreConfigured() {
  return true;
}

export async function createLeadApproval(payload, options = {}) {
  const lead = buildStoredLead(payload, options);

  return withMongoFallback(async (store) => {
    if (store.mode === "mongo") {
      const result = await store.db
        .collection(COLLECTION_NAME)
        .insertOne(toMongoDocument(lead));

      return {
        success: true,
        id: String(result.insertedId),
        lead: { ...lead, _id: String(result.insertedId) },
        store: "mongo",
      };
    }

    return withFileStoreLock(async () => {
      const entries = await readFileStore();
      entries.unshift(lead);
      await writeFileStore(entries);
      return {
        success: true,
        id: lead._id,
        lead,
        store: "file",
      };
    });
  });
}

export async function listLeadApprovals(options = {}) {
  const status = clean(options?.status);
  const limit = Math.max(1, Math.min(Number(options?.limit || 100), 250));

  return withMongoFallback(async (store) => {
    if (store.mode === "mongo") {
      const filter = status ? { status } : {};
      const docs = await store.db
        .collection(COLLECTION_NAME)
        .find(filter)
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();

      return docs.map(normalizeLeadDocument);
    }

    return withFileStoreLock(async () => {
      const entries = await readFileStore();
      return entries
        .filter((entry) => (status ? clean(entry.status) === status : true))
        .sort(
          (a, b) =>
            new Date(b.createdAt || 0).getTime() -
            new Date(a.createdAt || 0).getTime()
        )
        .slice(0, limit);
    });
  });
}

export async function getLeadApprovalById(id) {
  return withMongoFallback(async (store) => {
    if (store.mode === "mongo") {
      return getLeadFromMongo(store.db, id);
    }

    return withFileStoreLock(async () => getLeadFromFile(id));
  });
}

export async function attachLeadApprovalMetadata(id, patch = {}) {
  return patchLead(id, patch);
}

export async function findLeadApprovalByReviewerMessageId(
  reviewerMessageId,
  options = {}
) {
  const status = clean(options?.status || "pending");
  const reviewerPhone = normalizePhone(options?.reviewerPhone);
  const targetMessageId = clean(reviewerMessageId);

  if (!targetMessageId) return null;

  return withMongoFallback(async (store) => {
    if (store.mode === "mongo") {
      const filter = {
        reviewerMessageId: targetMessageId,
      };

      if (status) filter.status = status;
      if (reviewerPhone) {
        filter.reviewerPhone = {
          $in: [reviewerPhone, clean(options?.reviewerPhone)],
        };
      }

      const doc = await store.db.collection(COLLECTION_NAME).findOne(filter);
      return doc ? normalizeLeadDocument(doc) : null;
    }

    return withFileStoreLock(async () => {
      const entries = await readFileStore();
      return (
        entries.find((entry) => {
          if (clean(entry?.reviewerMessageId) !== targetMessageId) return false;
          if (status && clean(entry?.status) !== status) return false;
          if (
            reviewerPhone &&
            normalizePhone(entry?.reviewerPhone) !== reviewerPhone
          ) {
            return false;
          }
          return true;
        }) || null
      );
    });
  });
}

export async function approveLeadApproval(id, options = {}) {
  const approvedBy = clean(options?.approvedBy || "Mohammad Kodmani");
  const result = await patchLead(id, {
    status: "approved",
    approvedAt: new Date().toISOString(),
    approvedBy,
  });

  if (!result?.success) return result;

  return {
    ...result,
    brokerWhatsAppHref: buildBrokerWhatsAppHref(result.lead),
  };
}

export async function rejectLeadApproval(id, options = {}) {
  const rejectedBy = clean(options?.rejectedBy || "Mohammad Kodmani");
  return patchLead(id, {
    status: "rejected",
    rejectedAt: new Date().toISOString(),
    rejectedBy,
  });
}
