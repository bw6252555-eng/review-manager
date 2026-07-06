"use client"

import { useState } from "react"
import { Reply, Check, Copy, CheckCheck } from "lucide-react"
import { Button } from "./ui/button"
import { StarRating } from "./star-rating"
import { StatusBadge } from "./status-badge"
import { formatDate, type Review } from "@/lib/reviews"

export function ReviewCard({ review }: { review: Review }) {
  const [copied, setCopied] = useState(false)

  function handleCopyReply() {
    const reply = `Hi ${review.customerName}, thank you for taking the time to share your feedback. We truly appreciate it and would love to make things right.`
    navigator.clipboard?.writeText(reply).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md lg:flex-row lg:items-start lg:justify-between">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-semibold text-card-foreground">
            {review.customerName}
          </h3>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            {review.platform}
          </span>
          <StatusBadge status={review.status} />
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <StarRating rating={review.rating} />
          <span className="text-xs text-muted-foreground">
            {formatDate(review.date)}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {review.text}
        </p>
      </div>

      <div className="flex shrink-0 flex-wrap gap-2 lg:w-36 lg:flex-col">
        <Button size="sm" className="flex-1 lg:w-full">
          <Reply />
          Respond
        </Button>
        <Button size="sm" variant="outline" className="flex-1 lg:w-full">
          <Check />
          Resolve
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="flex-1 lg:w-full"
          onClick={handleCopyReply}
        >
          {copied ? <CheckCheck /> : <Copy />}
          {copied ? "Copied" : "Copy Reply"}
        </Button>
      </div>
    </article>
  )
}
