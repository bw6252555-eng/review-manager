import {
  MessagesSquare,
  Star,
  AlertTriangle,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"
import type { Review } from "@/lib/reviews"
import { cn } from "@/lib/utils"

interface StatCard {
  label: string
  value: string
  icon: LucideIcon
  iconClassName: string
}

export function StatsOverview({ reviews }: { reviews: Review[] }) {
  const total = reviews.length
  const avg =
    total === 0
      ? 0
      : reviews.reduce((sum, r) => sum + r.rating, 0) / total
  const needsAttention = reviews.filter(
    (r) => r.status === "needs_attention",
  ).length
  const responded = reviews.filter((r) => r.status === "responded").length

  const cards: StatCard[] = [
    {
      label: "Total Reviews",
      value: String(total),
      icon: MessagesSquare,
      iconClassName: "bg-blue-100 text-blue-600",
    },
    {
      label: "Average Rating",
      value: avg.toFixed(1),
      icon: Star,
      iconClassName: "bg-yellow-100 text-yellow-600",
    },
    {
      label: "Needs Attention",
      value: String(needsAttention),
      icon: AlertTriangle,
      iconClassName: "bg-red-100 text-red-600",
    },
    {
      label: "Responded",
      value: String(responded),
      icon: CheckCircle2,
      iconClassName: "bg-green-100 text-green-600",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-border bg-card p-5 shadow-sm"
        >
          <div
            className={cn(
              "mb-4 flex size-10 items-center justify-center rounded-xl",
              card.iconClassName,
            )}
          >
            <card.icon width={20} height={20} />
          </div>
          <div className="text-2xl font-bold text-card-foreground sm:text-3xl">
            {card.value}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            {card.label}
          </div>
        </div>
      ))}
    </div>
  )
}
