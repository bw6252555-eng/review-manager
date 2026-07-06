"use client"

import { useMemo, useState } from "react"
import { SearchX } from "lucide-react"
import { ReviewFilters } from "./review-filters"
import { ReviewCard } from "./review-card"
import type { Review } from "@/lib/reviews"

export function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState("all")
  const [status, setStatus] = useState("all")

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return reviews.filter((r) => {
      const matchesSearch =
        query === "" ||
        r.customerName.toLowerCase().includes(query) ||
        r.text.toLowerCase().includes(query)
      const matchesRating = rating === "all" || r.rating === Number(rating)
      const matchesStatus = status === "all" || r.status === status
      return matchesSearch && matchesRating && matchesStatus
    })
  }, [reviews, search, rating, status])

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-foreground">Reviews</h2>
        <span className="text-sm text-muted-foreground">
          {filtered.length} of {reviews.length} shown
        </span>
      </div>

      <ReviewFilters
        search={search}
        onSearchChange={setSearch}
        rating={rating}
        onRatingChange={setRating}
        status={status}
        onStatusChange={setStatus}
      />

      {filtered.length > 0 ? (
        <div className="flex flex-col gap-4">
          {filtered.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card py-16 text-center">
          <SearchX width={32} height={32} className="text-muted-foreground" />
          <div>
            <p className="font-medium text-foreground">No reviews found</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
