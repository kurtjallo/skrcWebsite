import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { AudienceSegment } from "@/types/audience";
import type { ServicePillar } from "@/types/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AudienceCardProps {
  segment: AudienceSegment;
  relevantPillars: ServicePillar[];
  reversed?: boolean;
}

export function AudienceCard({
  segment,
  relevantPillars,
  reversed = false,
}: AudienceCardProps) {
  return (
    <article>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        {/* Column A: Content */}
        <div className={cn(reversed && "md:order-2")}>
          <h2 className="font-heading text-4xl font-semibold text-text-primary">
            {segment.name}
          </h2>
          <div
            className="my-4 h-[2px] w-16 bg-accent-500"
            aria-hidden="true"
          />
          <p className="text-lg leading-relaxed text-text-body">
            {segment.description}
          </p>

          {/* Services for you */}
          {relevantPillars.length > 0 && (
            <div className="mt-8">
              <h3 className="font-heading text-xl font-semibold text-text-primary">
                How we can help
              </h3>
              <ul className="mt-4 space-y-3">
                {relevantPillars.map((pillar) => (
                  <li key={pillar.id}>
                    <Link
                      href={`/services/${pillar.slug}`}
                      className="group/link inline-flex items-center gap-2 text-base font-medium text-accent-600 transition-colors duration-200 hover:text-accent-500"
                    >
                      {pillar.name}
                      <ArrowRight
                        className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8">
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Column B: Access points + Testimonial */}
        <div className={cn(reversed && "md:order-1")}>
          {/* Access points card */}
          <div className="rounded-lg bg-stone-200 p-6">
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              Ways to reach us
            </h3>
            <ul className="mt-4 space-y-4">
              {segment.accessPoints.map((point) => (
                <li key={point.method} className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-0.5 size-5 shrink-0 text-accent-500"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-text-primary">
                      {point.method}
                    </p>
                    <p className="text-sm text-text-body">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          {segment.testimonial && (
            <div className="mt-6 border-l-4 border-accent-500 pl-6">
              <blockquote className="font-heading text-lg italic leading-relaxed text-text-body">
                &ldquo;{segment.testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-text-muted">
                &mdash; {segment.testimonial.name},{" "}
                {segment.testimonial.identifier}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
