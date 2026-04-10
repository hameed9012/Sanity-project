import { NextResponse } from "next/server";
import { normalizeLeadPayload } from "@/lib/server/leadUtils";
import {
  isRespondIoConfigured,
  notifyKodmaniViaRespondIo,
} from "@/lib/server/respondio";
import {
  createLeadApproval,
  isLeadApprovalStoreConfigured,
  listLeadApprovals,
} from "@/lib/server/leadApprovals";

export const runtime = "nodejs";

/**
 * GET — passive read-only log of leads (kept for visibility, not the approval mechanism).
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "";
    const limit = searchParams.get("limit") || "100";
    const leads = await listLeadApprovals({ status, limit });
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Could not load lead log.",
        error: process.env.NODE_ENV === "production" ? undefined : String(error),
      },
      { status: 500 }
    );
  }
}

/**
 * POST — called by client-side beacons on WhatsApp clicks and other lead actions.
 *
 * This does two things:
 * 1. Passive log: stores the lead locally (file/mongo) for visibility
 * 2. Forward to Respond.io: creates the contact in Kodmani's business inbox
 *    so approval/transfer happens there, not on the website.
 */
export async function POST(request) {
  try {
    const raw = await request.json();
    const payload = normalizeLeadPayload(raw, {
      defaultFormType: raw?.formType || "WHATSAPP_CLICK",
      defaultLocale: raw?.locale || "en",
    });

    // 1. Passive log (best-effort, non-blocking for the response)
    let logResult = null;
    if (isLeadApprovalStoreConfigured()) {
      try {
        logResult = await createLeadApproval(payload, {
          source: raw?.source || payload.formType,
          sourceLabel: raw?.sourceLabel,
          pagePath: raw?.pagePath,
        });
      } catch {}
    }

    // 2. Forward to Respond.io — this is the real Kodmani-first flow
    let respondIoResult = null;
    if (isRespondIoConfigured()) {
      try {
        respondIoResult = await notifyKodmaniViaRespondIo(payload);
      } catch {}
    }

    return NextResponse.json({
      success: true,
      id: logResult?.id || null,
      respondIo: respondIoResult?.success || false,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Could not process lead notification.",
        error: process.env.NODE_ENV === "production" ? undefined : String(error),
      },
      { status: 500 }
    );
  }
}
