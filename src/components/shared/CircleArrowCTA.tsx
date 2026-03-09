import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CircleArrowCTAProps {
  label: string;
  href?: string;
  variant?: "dark" | "light"; // dark = navy circle, light = white circle (for on-image)
  className?: string;
  onClick?: () => void;
}

export function CircleArrowCTA({
  label,
  href,
  variant = "dark",
  className,
  onClick,
}: CircleArrowCTAProps) {
  const content = (
    <span
      className={cn(
        "group inline-flex items-center gap-3",
        variant === "dark" ? "text-primary-900" : "text-white",
        className
      )}
    >
      <span className="text-base font-medium">{label}</span>
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:scale-110",
          variant === "dark"
            ? "bg-primary-900 text-white"
            : "bg-white text-primary-900"
        )}
      >
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      </span>
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}
