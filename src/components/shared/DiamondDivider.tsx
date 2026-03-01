import { cn } from "@/lib/utils";

interface DiamondDividerProps {
  className?: string;
  opacity?: number;
}

export function DiamondDivider({
  className,
  opacity = 0.4,
}: DiamondDividerProps) {
  return (
    <div
      className={cn("flex items-center gap-4 py-8", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-accent-500" />
      <div className="h-3 w-3 rotate-45 border border-accent-500" />
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-accent-500" />
    </div>
  );
}
