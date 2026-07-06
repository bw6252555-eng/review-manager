import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase-admin";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "API is working!",
  });
}

export async function POST() {
  try {
    // Get reviews that need attention
    const { data: reviews, error } = await supabaseAdmin
      .from("reviews")
      .select("*")
      .eq("status", "needs_attention");

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    if (!reviews || reviews.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No reviews to process.",
      });
    }

    let emailsSent = 0;

    for (const review of reviews) {
      if (review.rating <= 3) {
        const { error: emailError } = await resend.emails.send({
          from: "onboarding@resend.dev",
          to: ["bw6252555@gmail.com"],
          subject: "⚠️ New Negative Review",
          html: `
            <h2>Negative Review Alert</h2>

            <p><strong>Business:</strong> ${review.business_name}</p>
            <p><strong>Author:</strong> ${review.author_name}</p>
            <p><strong>Rating:</strong> ${review.rating}</p>
            <p><strong>Review:</strong> ${review.review_text}</p>
          `,
        });

        if (!emailError) {
          emailsSent++;

          await supabaseAdmin
            .from("reviews")
            .update({ status: "alert_sent" })
            .eq("id", review.id);
        }
      }
    }

    return NextResponse.json({
      success: true,
      emailsSent,
    });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}