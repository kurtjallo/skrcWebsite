import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Pill-shaped badge with a solid blue dot and uppercase text.
 * Used at the top of every section, before the heading.
 *
 * Usage: <SectionLabel text="WHO WE ARE" align="center" />
 */
export function SectionLabel({
  text,
  align = "left",
  className,
}: SectionLabelProps) {
  const pill = (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-divider px-4 py-1.5",
        className
      )}
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full bg-accent-500"
        aria-hidden="true"
      />
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-900 font-body">
        {text}
      </span>
    </div>
  );

  if (align === "center") {
    return <div className="flex justify-center">{pill}</div>;
  }

  return pill;
}
