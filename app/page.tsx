"use client";

import { useEffect, useState } from "react";

import { DashboardHeader } from "./components/dashboard-header";
import { StatsOverview } from "./components/stats-overview";
import { ReviewsSection } from "./components/reviews-section";

import type { Review } from "@/lib/reviews";

export default function Page() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function loadReviews() {
      const response = await fetch("/api/reviews");
      const data = await response.json();

      const formattedReviews: Review[] = data.map((review: any) => ({
        id: review.id.toString(),
        customerName: review.author_name,
        businessName: review.business_name,
        platform: "Google",
        rating: review.rating,
        text: review.review_text,
        status: review.status,
        date: review.review_date,
      }));

      setReviews(formattedReviews);
    }

    loadReviews();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10">
        <DashboardHeader />
        <StatsOverview reviews={reviews} />
        <ReviewsSection reviews={reviews} />
      </div>
    </main>
  );
}