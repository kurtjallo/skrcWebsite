import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CircleArrowCTAProps {
  label: string;
  href?: string;
  variant?: "dark" | "light";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

/**
 * CTA component that renders text + circular arrow icon as one clickable unit.
 * Replaces all traditional filled rectangle button styles in the v2.0 design.
 *
 * - When `href` is provided, renders as a Next.js Link
 * - When `href` is absent, renders as a button (with optional onClick)
 * - Dark variant: navy circle with white arrow (for light backgrounds)
 * - Light variant: white circle with navy arrow (for dark/image backgrounds)
 *
 * Usage: <CircleArrowCTA label="Get in Touch" href="/contact" />
 */
export function CircleArrowCTA({
  label,
  href,
  variant = "dark",
  className,
  onClick,
  type = "button",
}: CircleArrowCTAProps) {
  const content = (
    <>
      <span
        className={cn(
          "text-base font-medium font-body",
          variant === "dark" ? "text-primary-900" : "text-white"
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
          variant === "dark"
            ? "bg-primary-900 text-white"
            : "bg-white text-primary-900"
        )}
      >
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      </span>
    </>
  );

  const sharedClassName = cn(
    "group inline-flex items-center gap-3",
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={sharedClassName}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={sharedClassName}>
      {content}
    </button>
  );
}
