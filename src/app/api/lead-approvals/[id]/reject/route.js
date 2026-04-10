import { NextResponse } from "next/server";
import { rejectLeadApproval } from "@/lib/server/leadApprovals";

export const runtime = "nodejs";

export async function POST(_request, { params }) {
  try {
    const { id } = await params;
    const result = await rejectLeadApproval(id, {
      rejectedBy: "Mohammad Kodmani",
    });

    if (!result?.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Could not reject the lead.",
          error: result?.error || "LEAD_APPROVAL_REJECT_FAILED",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      lead: result.lead,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Could not reject the lead.",
        error: process.env.NODE_ENV === "production" ? undefined : String(error),
      },
      { status: 500 }
    );
  }
}
