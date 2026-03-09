import { cn } from "@/lib/utils";

interface EmphasisHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  accentItalic?: boolean;
}

/**
 * Parses text with *italic* markers and renders emphasized words in serif italic.
 *
 * Example: "Our *Expertise* in Rural Communities"
 * Renders: Our <em class="italic font-heading">Expertise</em> in Rural Communities
 *
 * If no * markers are present, renders plain text.
 * The `accentItalic` prop adds accent color to italic segments.
 */
export function EmphasisHeading({
  text,
  as: Tag = "h2",
  className,
  accentItalic = false,
}: EmphasisHeadingProps) {
  // Split on *word* patterns, keeping the delimiters as separate capture groups
  const parts = text.split(/(\*[^*]+\*)/);

  return (
    <Tag className={cn("font-heading", className)}>
      {parts.map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          const inner = part.slice(1, -1);
          return (
            <em
              key={i}
              className={cn(
                "italic font-heading not-italic-reset",
                accentItalic && "text-accent-500"
              )}
              style={{ fontStyle: "italic" }}
            >
              {inner}
            </em>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </Tag>
  );
}
