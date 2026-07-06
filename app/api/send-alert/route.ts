import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

 export async function GET() {
  return NextResponse.json({
    success: true,
    message: "API is working!"
  });
}

export async function POST(request: Request) {
  try {
    const review = await request.json();
    const { data, error } = await resend.emails.send({
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

    if (error) {
      return NextResponse.json(error);
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}