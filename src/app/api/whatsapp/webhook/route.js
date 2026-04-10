import { NextResponse } from "next/server";
import { createPendingLeadPipeline } from "@/lib/server/leadPipeline";
import {
  extractInboundWhatsAppMessages,
  isReviewerPhone,
  isWhatsAppWebhookConfigured,
  processReviewerApprovalReply,
  validateWhatsAppSignature,
} from "@/lib/server/whatsappCloud";

export const runtime = "nodejs";

function clean(value) {
  return String(value || "").trim();
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mode = clean(searchParams.get("hub.mode"));
  const token = clean(searchParams.get("hub.verify_token"));
  const challenge = clean(searchParams.get("hub.challenge"));
  const expectedToken = clean(process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN);

  if (
    mode === "subscribe" &&
    challenge &&
    expectedToken &&
    token === expectedToken
  ) {
    return new Response(challenge, { status: 200 });
  }

  return new Response("Invalid webhook verification request.", { status: 403 });
}

export async function POST(request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-hub-signature-256") || "";

    if (!validateWhatsAppSignature(rawBody, signature)) {
      return NextResponse.json(
        { success: false, message: "Invalid WhatsApp signature." },
        { status: 401 }
      );
    }

    const payload = rawBody ? JSON.parse(rawBody) : {};
    const messages = extractInboundWhatsAppMessages(payload);

    const results = [];

    for (const message of messages) {
      if (isReviewerPhone(message.from)) {
        results.push(await processReviewerApprovalReply(message));
        continue;
      }

      results.push(
        await createPendingLeadPipeline(
          {
            name: clean(message.profileName),
            phone: clean(message.from),
            customerPhone: clean(message.from),
            customerProfileName: clean(message.profileName),
            message: clean(message.text),
            incomingMessageId: clean(message.id),
            incomingMessageType: clean(message.type),
            formType: "WHATSAPP_INCOMING",
            source: "WHATSAPP_INCOMING",
            channel: "whatsapp",
            locale: "en",
          },
          {
            source: "WHATSAPP_INCOMING",
            sourceLabel: "WhatsApp Business Incoming",
            channel: "whatsapp",
            customerPhone: clean(message.from),
            customerProfileName: clean(message.profileName),
            incomingMessageId: clean(message.id),
            incomingMessageType: clean(message.type),
            rawIncomingText: clean(message.text),
            notifyReviewer: true,
            submitToZoho: false,
          }
        )
      );
    }

    return NextResponse.json({
      success: true,
      configured: isWhatsAppWebhookConfigured(),
      processed: results.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Could not process WhatsApp webhook.",
        error: process.env.NODE_ENV === "production" ? undefined : String(error),
      },
      { status: 500 }
    );
  }
}
