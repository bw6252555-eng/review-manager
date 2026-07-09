import { statusConfig, type ReviewStatus } from "@/lib/reviews";
import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: ReviewStatus }) {
  console.log("STATUS:", status);

  const config = statusConfig[status];

  if (!config) {
    return (
      <span className="rounded bg-red-500 px-2 py-1 text-white">
        Invalid Status: {String(status)}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}