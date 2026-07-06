import { statusConfig, type ReviewStatus } from "@/lib/reviews"
import { cn } from "@/lib/utils"

export function StatusBadge({ status }: { status: ReviewStatus }) {
  const { label, className } = statusConfig[status]
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        className,
      )}
    >
      {label}
    </span>
  )
}
