export type ReviewStatus = "needs_attention" | "responded" | "resolved"

export type Platform = "Google" | "Yelp" | "Facebook" | "Trustpilot"

export interface Review {
  id: string
  customerName: string
  platform: Platform
  rating: number
  date: string
  text: string
  status: ReviewStatus
}

export const statusConfig: Record<
  ReviewStatus,
  { label: string; className: string }
> = {
  needs_attention: {
    label: "Needs Attention",
    className: "bg-red-100 text-red-700 border-red-200",
  },
  responded: {
    label: "Responded",
    className: "bg-green-100 text-green-700 border-green-200",
  },
  resolved: {
    label: "Resolved",
    className: "bg-blue-100 text-blue-700 border-blue-200",
  },
}

export const reviews: Review[] = [
  {
    id: "1",
    customerName: "Amanda Reyes",
    platform: "Google",
    rating: 2,
    date: "2026-06-28",
    text: "The product arrived two days later than promised and the packaging was damaged. I really wanted to love it, but the experience left me frustrated. Hoping support can make this right.",
    status: "needs_attention",
  },
  {
    id: "2",
    customerName: "Daniel Okafor",
    platform: "Google",
    rating: 5,
    date: "2026-06-27",
    text: "Absolutely fantastic service from start to finish. The team was responsive, the quality exceeded my expectations, and I'll definitely be recommending this to friends.",
    status: "responded",
  },
  {
    id: "3",
    customerName: "Priya Sharma",
    platform: "Google",
    rating: 1,
    date: "2026-06-26",
    text: "I was charged twice for a single order and it took multiple emails to get a response. Still waiting on a full refund. Very disappointing for a company this size.",
    status: "needs_attention",
  },
  {
    id: "4",
    customerName: "Marcus Lee",
    platform: "Google",
    rating: 4,
    date: "2026-06-24",
    text: "Great value for the price. Setup was straightforward and the dashboard is intuitive. Docked a star because onboarding emails were a bit confusing.",
    status: "resolved",
  },
  {
    id: "5",
    customerName: "Sofia Martinez",
    platform: "Google",
    rating: 5,
    date: "2026-06-22",
    text: "Customer support went above and beyond to help me migrate my data. Rare to see this level of care these days. Five stars, well earned.",
    status: "responded",
  },
  {
    id: "6",
    customerName: "James Whitfield",
    platform: "Google",
    rating: 3,
    date: "2026-06-20",
    text: "It's fine. Does what it says but nothing spectacular. The mobile app could use some polish and occasionally logs me out unexpectedly.",
    status: "resolved",
  },
  {
    id: "7",
    customerName: "Chloe Bennett",
    platform: "Google",
    rating: 2,
    date: "2026-06-18",
    text: "Reporting features are limited and exporting data is clunky. For the monthly price I expected more flexibility. Considering alternatives unless this improves.",
    status: "needs_attention",
  },
  {
    id: "8",
    customerName: "Hiroshi Tanaka",
    platform: "Google",
    rating: 5,
    date: "2026-06-15",
    text: "Best decision we made this quarter. Onboarding was smooth, integrations just work, and the whole team adopted it within a week. Highly recommend.",
    status: "responded",
  },
]

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
