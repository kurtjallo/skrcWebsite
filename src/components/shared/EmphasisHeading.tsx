import { cn } from "@/lib/utils";

interface EmphasisHeadingProps {
  text: string; // "Strategy That Powers *Your Next* Level of Growth."
  as?: "h1" | "h2" | "h3" | "h4";
  accentItalic?: boolean; // When true, italic words get accent color
  className?: string;
}

export function EmphasisHeading({
  text,
  as: Tag = "h2",
  accentItalic = false,
  className,
}: EmphasisHeadingProps) {
  // Parse *italic* markers into <em> elements
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
