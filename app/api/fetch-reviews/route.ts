import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const data = {
  result: {
    name: "Starbucks NY",
    reviews: [
      {
        author_name: "John Smith",
        rating: 5,
        text: "Amazing coffee and friendly staff!",
        time: 1710000000,
      },
      {
        author_name: "Sarah Johnson",
        rating: 4,
        text: "Loved the atmosphere. Will definitely come back.",
        time: 1710500000,
      },
      {
        author_name: "Michael Brown",
        rating: 2,
        text: "Coffee was cold and service was slow.",
        time: 1711000000,
      },
      {
        author_name: "Emily Davis",
        rating: 5,
        text: "Best Starbucks I've visited in New York.",
        time: 1711500000,
      },
    ],
  },
};



  if (!data.result?.reviews) {
  return NextResponse.json(
    { error: "No reviews found" },
    { status: 404 }
  );
}

for (const review of data.result.reviews) {

    const { data: existingReviews } = await supabase
  .from("reviews")
  .select("id")
  .eq("author_name", review.author_name)
  .eq("review_text", review.text);

if (existingReviews && existingReviews.length > 0) {
  console.log("Duplicate skipped:", review.author_name);
  continue;
}

  const { data: insertedData, error } = await supabase
  .from("reviews")
  .insert({
    business_name: data.result.name,
    platform: "google",
    rating: review.rating,
    review_text: review.text,
    author_name: review.author_name,
    review_date: new Date(review.time * 1000).toISOString(),
    status: "needs_attention",
  })
  .select();

  if (review.rating <= 2) {
    await fetch("http://localhost:3000/api/send-alert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  business_name: data.result.name,
  author_name: review.author_name,
  rating: review.rating,
  review_text: review.text,
}),
    });
  }


  console.log("Inserted:", insertedData);
console.log("Error:", error);

  if (error) {
    console.log(error);
    return NextResponse.json(error);
  }

}

return NextResponse.json({
  message: "Reviews imported successfully",
});
}
