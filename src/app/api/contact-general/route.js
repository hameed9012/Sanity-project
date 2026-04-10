import { NextResponse } from "next/server";
import {
  getServerError,
  getSuccessMessage,
  normalizeLeadPayload,
  validateLeadPayload,
} from "@/lib/server/leadUtils";
import { createPendingLeadPipeline } from "@/lib/server/leadPipeline";

export const runtime = "nodejs";

export async function POST(request) {
  let locale = "en";

  try {
    const formData = await request.json();
    const payload = normalizeLeadPayload(formData, {
      defaultFormType: formData?.formType || "CONTACT_FORM",
    });
    locale = payload.locale || "en";

    const isCallback = payload.formType === "CALLBACK_FORM";
    const validationMessage = validateLeadPayload(payload, {
      requireProject: false,
      requireEmail: !isCallback,
    });

    if (validationMessage) {
      return NextResponse.json(
        {
          success: false,
          message: validationMessage,
        },
        { status: 400 }
      );
    }

    const pipeline = await createPendingLeadPipeline(formData, {
      source: payload.formType,
      sourceLabel: "General Contact Form",
      channel: "website",
      notifyReviewer: true,
      submitToZoho: true,
    });

    return NextResponse.json({
      success: true,
      message: getSuccessMessage(payload.locale, payload.formType),
      data: {
        formType: payload.formType,
        approvalId: pipeline?.lead?._id || "",
        zoho: pipeline?.zohoResult
          ? {
              success: Boolean(pipeline.zohoResult.success),
              id: pipeline.zohoResult.id || "",
              module: pipeline.zohoResult.module || "",
              ...(pipeline?.zohoError && process.env.NODE_ENV !== "production"
                ? { error: pipeline.zohoError }
                : {}),
            }
          : undefined,
        reviewer: pipeline?.reviewerResult
          ? {
              success: Boolean(pipeline.reviewerResult.success),
              reviewerMessageId:
                pipeline.reviewerResult.reviewerMessageId || "",
              ...(pipeline?.reviewerError && process.env.NODE_ENV !== "production"
                ? { error: pipeline.reviewerError }
                : {}),
            }
          : undefined,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: getServerError(locale),
        error: process.env.NODE_ENV === "production" ? undefined : String(error),
      },
      { status: 500 }
    );
  }
}
