import { NextResponse } from "next/server";
import { approveLeadAndRouteToBroker } from "@/lib/server/leadPipeline";

export const runtime = "nodejs";

export async function POST(_request, context) {
  try {
    const params = await context.params;
    const id = params?.id;
    const result = await approveLeadAndRouteToBroker(id, "Mohammad Kodmani");

    if (!result?.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Could not approve this lead.",
          error: result?.error || "LEAD_APPROVAL_APPROVE_FAILED",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      lead: result.lead,
      forwardResult: result.forwardResult || null,
      brokerWhatsAppHref: result?.forwardResult?.manualHref || "",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Could not approve this lead.",
        error: process.env.NODE_ENV === "production" ? undefined : String(error),
      },
      { status: 500 }
    );
  }
}
