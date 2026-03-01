import { cn } from "@/lib/utils";

interface GoldAccentLineProps {
  orientation?: "horizontal" | "vertical";
  width?: string;
  thickness?: string;
  className?: string;
  animated?: boolean;
}

export function GoldAccentLine({
  orientation = "horizontal",
  width,
  thickness,
  className,
  animated = false,
}: GoldAccentLineProps) {
  const isHorizontal = orientation === "horizontal";

  const defaultWidth = isHorizontal ? "w-full" : undefined;
  const defaultThickness = isHorizontal ? "h-[2px]" : "w-[2px]";

  return (
    <div
      className={cn(
        "bg-accent-500",
        width ?? defaultWidth,
        thickness ?? defaultThickness,
        animated && isHorizontal && [
          "scale-x-0 origin-left",
          "transition-transform duration-400 ease-premium",
          "group-hover:scale-x-100",
        ],
        animated && !isHorizontal && [
          "scale-y-0 origin-top",
          "transition-transform duration-400 ease-premium",
          "group-hover:scale-y-100",
        ],
        className
      )}
      aria-hidden="true"
    />
  );
}
