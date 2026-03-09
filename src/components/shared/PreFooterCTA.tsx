import Image from "next/image";
import { cn } from "@/lib/utils";
import { EmphasisHeading } from "./EmphasisHeading";
import { CircleArrowCTA } from "./CircleArrowCTA";

interface PreFooterCTAProps {
  heading: string; // "Ready to *Transform* Your Community?" (supports EmphasisHeading syntax)
  body: string; // Description paragraph
  ctaLabel: string; // "Get Started Today"
  ctaHref: string; // "/contact"
  backgroundImage: string; // image path for next/image
  className?: string;
}

export function PreFooterCTA({
  heading,
  body,
  ctaLabel,
  ctaHref,
  backgroundImage,
  className,
}: PreFooterCTAProps) {
  return (
    <section className={cn("px-4 pb-8", className)}>
      <div
        className="relative overflow-hidden rounded-[20px]"
        style={{ minHeight: "500px" }}
      >
        {/* Background image */}
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
        />

        {/* Dark gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/40 to-transparent" />

        {/* Curved shape at top -- creates the arch/wave transition from page bg */}
        <div
          className="absolute top-0 right-0 left-0 h-[80px] bg-background"
          style={{
            clipPath: "ellipse(55% 100% at 50% 0%)",
          }}
          aria-hidden="true"
        />

        {/* Content positioned at bottom-left */}
        <div className="relative z-10 flex min-h-[500px] flex-col justify-end p-8 md:p-12 lg:p-16">
          <EmphasisHeading
            text={heading}
            as="h2"
            className="mb-4 max-w-xl text-3xl text-white md:text-4xl lg:text-5xl"
          />
          <p className="mb-8 max-w-lg text-base text-white/80 md:text-lg">
            {body}
          </p>
          <CircleArrowCTA
            label={ctaLabel}
            href={ctaHref}
            variant="light"
          />
        </div>
      </div>
    </section>
  );
}
