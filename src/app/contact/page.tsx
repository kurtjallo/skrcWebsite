import { createMetadata } from "@/lib/metadata";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata = createMetadata({
  title: "Get in Touch",
  description:
    "Contact St Katharine Rural Connect for support, information, or to get involved. We're here for farmers, offshore workers, families, and rural communities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-primary-950">
      {/* Dot texture overlay for visual depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Subtle gradient wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-900/50 via-transparent to-primary-950/80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header section */}
        <section className="px-6 pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="mx-auto max-w-7xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent-400">
              Contact
            </p>
            <EmphasisHeading
              text="Let's Start a *Conversation*"
              as="h1"
              className="mt-4 text-4xl text-white md:text-5xl lg:text-display"
            />
            <p className="mt-6 max-w-xl text-lg text-white/70">
              We&rsquo;d love to hear from you. Whether you need support, have a
              question, or want to get involved &mdash; we&rsquo;re here.
            </p>
          </div>
        </section>

        {/* Thin separator */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-white/10" aria-hidden="true" />
        </div>

        {/* Two-column: Contact Info + Form */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              {/* Left column: Contact Info */}
              <div>
                <ContactInfo variant="dark" />
              </div>

              {/* Right column: Form */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-white">
                  Send Us a Message
                </h2>
                <p className="mt-2 mb-8 font-body text-white/60">
                  Fill in the form below and we&rsquo;ll be in touch.
                </p>
                <ContactForm variant="dark" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
