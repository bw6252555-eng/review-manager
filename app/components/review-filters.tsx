"use client"

import { Search, ChevronDown } from "lucide-react"

interface ReviewFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  rating: string
  onRatingChange: (value: string) => void
  status: string
  onStatusChange: (value: string) => void
}

const selectClass =
  "h-10 w-full appearance-none rounded-xl border border-border bg-card pl-3.5 pr-9 text-sm text-foreground shadow-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"

export function ReviewFilters({
  search,
  onSearchChange,
  rating,
  onRatingChange,
  status,
  onStatusChange,
}: ReviewFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search
          width={16}
          height={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search reviews or customers..."
          aria-label="Search reviews"
          className="h-10 w-full rounded-xl border border-border bg-card pl-10 pr-3.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:flex sm:w-auto">
        <div className="relative sm:w-40">
          <select
            value={rating}
            onChange={(e) => onRatingChange(e.target.value)}
            aria-label="Filter by rating"
            className={selectClass}
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
          <ChevronDown
            width={16}
            height={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
        </div>

        <div className="relative sm:w-44">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            aria-label="Filter by status"
            className={selectClass}
          >
            <option value="all">All Statuses</option>
            <option value="needs_attention">Needs Attention</option>
            <option value="responded">Responded</option>
            <option value="resolved">Resolved</option>
          </select>
          <ChevronDown
            width={16}
            height={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </div>
    </div>
  )
}
