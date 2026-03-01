import { Phone, Mail, Clock, MapPin, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a
        href={SITE_CONFIG.phoneHref}
        className="mt-1 block font-body text-lg text-text-primary transition-colors hover:text-accent-600"
      >
        {SITE_CONFIG.phone}
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a
        href={`mailto:${SITE_CONFIG.email}`}
        className="mt-1 block font-body text-lg text-text-primary transition-colors hover:text-accent-600"
      >
        {SITE_CONFIG.email}
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Office Hours",
    content: (
      <p className="mt-1 font-body text-lg text-text-primary">
        {SITE_CONFIG.officeHours}
      </p>
    ),
  },
  {
    icon: MapPin,
    label: "Location",
    content: (
      <p className="mt-1 font-body text-lg text-text-primary">
        {SITE_CONFIG.location}
      </p>
    ),
  },
] as const;

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-3xl font-semibold text-text-primary">
          Other Ways to Reach Us
        </h2>
        <p className="mt-2 text-text-body">
          However you&rsquo;d like to get in touch, we&rsquo;re here.
        </p>
      </div>

      <div className="space-y-6">
        {CONTACT_ITEMS.map(({ icon: Icon, label, content }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-100">
              <Icon className="h-5 w-5 text-accent-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-accent-600">
                {label}
              </h3>
              {content}
            </div>
          </div>
        ))}
      </div>

      {/* Confidentiality reassurance */}
      <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
          <div>
            <p className="font-body text-base font-medium text-text-primary">
              Your information is confidential
            </p>
            <p className="mt-1.5 font-body text-sm text-text-muted">
              In a small community, privacy matters &mdash; and we take yours
              seriously. All enquiries are handled with discretion and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
