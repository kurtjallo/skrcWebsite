import { cn } from "@/lib/utils";

interface EmphasisHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  accentItalic?: boolean;
}

/**
 * Heading component that parses *italic* markers and renders <em> elements
 * with Cormorant Garamond italic style. This is the defining typographic
 * feature of the v2.0 design system.
 *
 * Usage: <EmphasisHeading text="Support That *Strengthens* Rural Communities" />
 */
export function EmphasisHeading({
  text,
  as: Tag = "h2",
  className,
  accentItalic = false,
}: EmphasisHeadingProps) {
  const parts = text.split(/(\*[^*]+\*)/g);

  return (
    <Tag className={cn("font-heading", className)}>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em
            key={i}
            className={cn(
              "italic font-heading",
              accentItalic && "text-accent-500"
            )}
          >
            {part.slice(1, -1)}
          </em>
        ) : (
          part
        )
      )}
    </Tag>
  );
}
