import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  size?: number
  className?: string
}

export function StarRating({ rating, size = 16, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={cn(
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted-foreground/30",
          )}
        />
      ))}
    </div>
  )
}
