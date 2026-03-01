import { createMetadata } from "@/lib/metadata";
import { GoldAccentLine } from "@/components/shared/GoldAccentLine";
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
    <>
      {/* Page header */}
      <section className="bg-stone-50 px-6 pb-8 pt-16 sm:px-8 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-overline font-bold uppercase tracking-widest text-accent-600">
            Contact
          </p>
          <h1 className="mt-3 font-heading text-5xl font-semibold text-text-primary">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-text-body">
            We&rsquo;d love to hear from you. Whether you need support, have a
            question, or want to get involved, we&rsquo;re here to help.
          </p>
        </div>
      </section>

      {/* Gold accent line divider */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <GoldAccentLine />
      </div>

      {/* Form + Contact Info two-column section */}
      <section className="bg-stone-100 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left column: Form */}
            <div>
              <h2 className="font-heading text-3xl font-semibold text-text-primary">
                Send Us a Message
              </h2>
              <p className="mt-2 mb-8 font-body text-text-body">
                Fill in the form below and we&rsquo;ll be in touch.
              </p>
              <ContactForm />
            </div>

            {/* Right column: Contact Info */}
            <div className="lg:pl-8">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
