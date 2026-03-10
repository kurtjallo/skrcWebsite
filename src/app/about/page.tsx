import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { HERO_IMAGES, CTA_IMAGES, SECTION_IMAGES } from "@/lib/placeholders";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";
import { PreFooterCTA } from "@/components/shared/PreFooterCTA";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about St Katharine Rural Connect's founding intention, mission, vision, and values. Rooted in the spirit of service, we strengthen rural communities through support, connection, and care.",
  path: "/about",
});

const values = [
  {
    name: "Compassion",
    description: "Meeting people with kindness and understanding",
  },
  {
    name: "Connection",
    description: "Building bridges between people and support",
  },
  {
    name: "Respect",
    description: "Honouring every person\u2019s dignity and story",
  },
  {
    name: "Integrity",
    description: "Being honest, transparent, and trustworthy",
  },
  {
    name: "Accessibility",
    description: "Removing barriers to support and belonging",
  },
  {
    name: "Collaboration",
    description: "Working together for stronger communities",
  },
  {
    name: "Resilience",
    description: "Nurturing the strength within people and places",
  },
] as const;

const stats = [
  { value: "4", label: "Service Pillars" },
  { value: "6", label: "Partner Organisations" },
  { value: "10+", label: "Community Events" },
  { value: "100%", label: "Confidential" },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* 1. Interior Hero */}
      <InteriorHero heading="About *Us*" backgroundImage={HERO_IMAGES.about} objectPosition="center 45%" />

      {/* 2. Asymmetric two-column intro */}
      <section className="bg-surface-page px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Narrow left column */}
            <div className="lg:col-span-4">
              <SectionLabel text="ST KATHARINE RURAL CONNECT" />
              <h2 className="mt-5 font-heading text-4xl font-semibold text-text-primary md:text-5xl">
                Who We Are
              </h2>
            </div>

            {/* Wide right column */}
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-text-body">
                  St Katharine Rural Connect is a community-rooted initiative
                  strengthening social, emotional, and practical support systems
                  for rural people and places across Scotland. We carry forward
                  the spirit and values of St Katharine &mdash; a legacy of
                  service, learning, dignity, and community care.
                </p>
                <p className="text-lg leading-relaxed text-text-body">
                  Our founding grew from a simple observation: rural communities
                  were quietly carrying immense pressures, from the isolation of
                  farming life to the strain of offshore work, with few places to
                  turn for understanding and support. We were established to
                  change that &mdash; not with grand programmes delivered from a
                  distance, but with genuine, grounded support that meets people
                  where they are.
                </p>
                <p className="text-lg leading-relaxed text-text-body">
                  We believe that meaningful change happens through trust,
                  presence, and practical care &mdash; the kind a good neighbour
                  provides, backed by the knowledge and resources to make a real
                  difference.
                </p>
                <EmphasisHeading
                  text="Let's build *the future* — together."
                  as="h3"
                  className="text-2xl text-text-primary"
                  accentItalic
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission section -- two-column */}
      <section className="bg-surface-page px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative overflow-hidden rounded-[20px]">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                <Image
                  src={SECTION_IMAGES.mission}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* White card with mission content */}
            <div className="rounded-2xl bg-surface-card p-8 md:p-12">
              <SectionLabel text="OUR MISSION" />
              <EmphasisHeading
                text="Driven by *Purpose*"
                as="h2"
                className="mt-5 text-3xl md:text-4xl text-text-primary"
                accentItalic
              />
              <p className="mt-6 text-lg leading-relaxed text-text-body">
                Support and strengthen rural communities by providing accessible,
                compassionate, and practical services that foster wellbeing,
                resilience, and connection.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-body">
                We exist because rural life comes with unique pressures &mdash;
                and rural people deserve support that understands their world. Our
                mission is to be the trusted bridge between need and help.
              </p>
              <div className="mt-8">
                <CircleArrowCTA
                  label="View Our Services"
                  href="/services"
                  variant="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision section */}
      <section className="bg-surface-page px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Section label and heading */}
          <SectionLabel text="OUR VISION" align="center" />
          <EmphasisHeading
            text="Thriving Rural Communities Where Every Person Has Access to *Support*, *Relationships*, and Opportunities to *Flourish*"
            as="h2"
            className="mx-auto mt-5 max-w-4xl text-center text-3xl md:text-4xl text-text-primary"
          />

          <div className="mt-12 overflow-hidden rounded-[20px]">
            <div className="relative aspect-[21/9]">
              <Image
                src={SECTION_IMAGES.vision}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>

          {/* 4 stat cards */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-surface-card border-l-[3px] border-accent-500 p-6"
              >
                <p className="font-heading text-3xl font-semibold text-text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Values section */}
      <section className="bg-surface-page px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel text="OUR VALUES" align="center" />
          <EmphasisHeading
            text="What *Guides* Us"
            as="h2"
            className="mt-5 text-center text-3xl md:text-4xl text-text-primary"
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="group rounded-2xl bg-surface-card p-6 text-center transition-[transform,box-shadow] duration-300 ease-premium hover:shadow-lg motion-safe:hover:-translate-y-1"
              >
                {/* Number indicator */}
                <span className="font-heading text-3xl font-light text-stone-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-heading text-xl font-semibold text-text-primary">
                  {value.name}
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PreFooterCTA */}
      <PreFooterCTA backgroundImage={CTA_IMAGES.about}
        heading="Ready to *Connect* With Us?"
        body="Whether you need support, have a question, or want to get involved, we'd love to hear from you."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
