import { MessageSquareText } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="flex items-start gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <MessageSquareText width={22} height={22} />
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">
          Review Monitoring Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground text-pretty">
          Monitor customer reviews and respond quickly to negative feedback.
        </p>
      </div>
    </header>
  )
}
