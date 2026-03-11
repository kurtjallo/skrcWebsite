import { createMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Mail } from "lucide-react";

export const metadata = createMetadata({
  title: "Thank You",
  description:
    "Thank you for contacting St Katharine Rural Connect. We will be in touch soon.",
  path: "/thank-you",
});

const NEXT_STEPS = [
  {
    label: "Explore Our Services",
    href: "/services",
  },
  {
    label: "See Upcoming Events",
    href: "/events",
  },
  {
    label: "Learn About Getting Involved",
    href: "/get-involved",
  },
] as const;

export default function ThankYouPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 py-20">
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"
        aria-hidden="true"
      />

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        <SectionLabel text="MESSAGE RECEIVED" align="center" className="border-white/20 [&_span]:text-white/70" />

        <EmphasisHeading
          text="Thank You for *Reaching Out*"
          as="h1"
          className="mt-6 text-3xl md:text-5xl text-white"
        />

        <p className="mt-6 font-body text-lg text-white/70 max-w-lg mx-auto">
          We&rsquo;ve received your message and will be in touch within 2
          working days.
        </p>

        {/* Email CTA */}
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-2.5 font-body text-base font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {SITE_CONFIG.email}
        </a>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10 mx-auto max-w-xs" aria-hidden="true" />

        {/* Next steps */}
        <p className="font-body text-sm font-medium uppercase tracking-wider text-white/40 mb-6">
          In the meantime
        </p>

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
          {NEXT_STEPS.map((step) => (
            <CircleArrowCTA
              key={step.href}
              label={step.label}
              href={step.href}
              variant="light"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
